# About
This is a simple express web server that allows you to interface with the Slack status API from IFTTT. The reason that you need this service is because IFTTT does not play well with url encoded JSON in POST requests. Hopefully Slack will make this repo obsolete by publishing their own IFTTT integration.

## Step 1. Get a Slack token

1. Create a new slack app https://api.slack.com/apps
2. In your app settings, navigate to Enable OAuth & Permissions
3. Under "Permission Scopes", add the Modify users' profile scope `user.profile:write` and save changes
4. Scroll to the top and click "Install App to Team".
5. In the dialog, click "Authorize"
6. Copy your OAuth Access Token and use it for the next step.

## Step 2. Install
SSH into your remote server. In terminal, run the following commands

```
$ git clone https://github.com/arronhunt/slack-status.git
$ cd slack-status/
$ npm install
$ npm start
```

## Step 3. Update status

To update your status, make a POST request to the server with the following raw body

```
{
	"status_text": "Getting coffee",
	"status_emoji": ":coffee:",
	"token": "YOUR_TOKEN_HERE"
}
```

## Step 4. Use with IFTTT

1. Create a new applet https://ifttt.com/create
2. Select a service as your "if" trigger.
3. For the "then" action, search for "Maker Webhook" and click "Make a web request".
4. Enter the URL of your server. `http://myserver.com:3000/status/`.
5. Change the method to `POST`.
6. Change content type to `application/json`.
7. In the body, paste the JSON from step 3.
8. Click "Create action".
