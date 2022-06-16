# Welcome to the Backend
> This is not a tutorial, this is just the code for you to be able to look over and use as you require

> The backend runs on PORT 4080

## Getting started
First of all, please navigate to the `config.js` file, this should be above the `index.js` file. Then please fill out the JSON as normal.

If you are having any issues, please make an issue request and hopefully someone will help you out ASAP!
Here is a spare copy of the `config.js` file:
```js
module.exports = {
    redirectUri: "<YOUR BACKEND URL>/api/user/auth",
    oauthUri: "<YOUR OAUTH URL>",
    clientId: "<YOUR CLIENT ID>",
    clientSecret: "<YOUR CLIENT SECRET>",
    frontURL: "<YOUR FRONTEND URL>"
}
```

Please try not delete this file as this stores all customizable variables for the backend.

## Required packages

```
express
express-session
cors
axios
```
