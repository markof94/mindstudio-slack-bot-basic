import "dotenv/config";
import Slack from "@slack/bolt";
import { MindStudio, MindStudioError } from "mindstudio";

const { App } = Slack;

// Set up the Slack app with required credentials
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

// Define the event listener for when the app is mentioned by a user
app.event("app_mention", async ({ event, say }) => {
  try {
    // Initialize the MindStudio client with the API key
    const client = new MindStudio(process.env.MINDSTUDIO_KEY);

    // Optionally, reply immediately with a "thinking" indicator to show that the message is being processed
    await say({ text: `Just a moment...`, thread_ts: event.ts });

    // Call The Assistants' API workflow that takes a prompt and returns a response
    // Note that "Assistant" is API Function Name we defined in MindStudio
    const { result: mindstudioResult, billingCost } =
      await client.workers.Assistant.api({
        prompt: event.text,
      });

    // Handle empty or undefined responses
    if (!mindstudioResult) {
      await say(`Error generating a response, please try again.`);
      return;
    }

    // Reply to the message
    await say({ text: `${mindstudioResult}`, thread_ts: event.ts });
  } catch (error) {
    if (error instanceof MindStudioError) {
      console.error("Workflow failed:", error.message);
    }
  }
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ MindStudio Slack bot is running!");
})();
