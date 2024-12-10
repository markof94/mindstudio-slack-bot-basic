# MindStudio Slackbot Scaffold

This simple Slack app utilizes MindStudio to create a personal assistant bot for your Slack workspace. Just tag the bot and ask anything to receive a response.

![image](https://github.com/user-attachments/assets/a880827d-248e-4799-944b-f91e73d3cd2c)


## Setup

You'll need the following environment variables:

```
SLACK_SIGNING_SECRET=
SLACK_BOT_TOKEN=
SLACK_APP_TOKEN=
MINDSTUDIO_KEY=
```

### Create a Slack App

[More info on Slack docs](https://tools.slack.dev/bolt-js/getting-started/#create-an-app)

1. Create a new Slack App [here](https://api.slack.com/apps?new_app=1) from scratch

![image](https://github.com/user-attachments/assets/243b1cd8-5411-4b5c-b84e-aa4ade1f0613)

1. Inside the `Basic Information` tab, find the `Signing Secret`, and assign it to `SLACK_SIGNING_SECRET` in your `.env` file.

![image](https://github.com/user-attachments/assets/b39da085-65f0-43a0-bb5b-5bc91236958b)

1. Scroll down to `App-Level Tokens` , click on `Generate Token and Scopes` . Give it a name and choose all 3 scopes, then click `Generate`.

![image](https://github.com/user-attachments/assets/c3be0545-346c-4237-8735-4414ac2f4d98)

1. Assign the `Token` to the `SLACK_APP_TOKEN` in your `.env` file.

![image](https://github.com/user-attachments/assets/a2a94b6a-e3e6-4928-9b9d-2cd1515d6f5c)

1. (Optional) Scroll down to `Display Information` and add some more details for your Slack bot.
2. Save changes.
3. Go into `Socket Mode` tab and `Enable Socket Mode`. For this guide we’ll use the socket mode instead of HTTP. [More info here](https://tools.slack.dev/bolt-js/getting-started/#setting-up-events).

![image](https://github.com/user-attachments/assets/69d6679c-05ea-4f8e-a590-bb7e6bc263e4)

1. Go into `Event Subscriptions`  tab, toggle on `Enable Events`  and add the following to `Subscribe to Bot Events`

![image](https://github.com/user-attachments/assets/e0b8f5b6-d83d-4ac2-b341-39ca4fbd8a62)

1. Install the App to your Slack workspace in the `Install App` tab.

![image](https://github.com/user-attachments/assets/152ffc25-1dd3-4748-84be-7bb6a1a37ce0)

1. Assign the **`Bot User OAuth Token`** into your `SLACK_BOT_TOKEN` variable in the `.env` file.

![image](https://github.com/user-attachments/assets/152ffc25-1dd3-4748-84be-7bb6a1a37ce0)

## Create a MindStudio AI Worker

1. Inside MindStudio, navigate to the `API Keys` tab. Create a new API key, then assign it to the `MINDSTUDIO_KEY` variable in the `.env` file.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5efd0d6c-050f-47e9-bfe9-3d92e8dc24a6/1ee4d71d-5101-48e2-b232-2d0191062993/image.png)

Your `.env` file should now look like this, with actual keys:

```
SLACK_SIGNING_SECRET=b65daa5c486***************
SLACK_BOT_TOKEN=xoxb-***************
SLACK_APP_TOKEN=xapp-***************
MINDSTUDIO_KEY=sku***************
```

1. Create a new MindStudio AI Worker that you will use for your assistant, or copy of this [pre-made Assistant](mindstudio.ai/ais/a9804b6a-f4cd-4bf2-8760-30c4767dc9b1/remix) and make any edits you may need later. The only edit you need to do right now is to add the `API Function Name` in the `Details` tab, to make it easier to invoke it via the NPM package in your app. We’ll use `Assistant` for now.