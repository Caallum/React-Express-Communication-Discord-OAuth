# Welcome to the frontend
> This is not a react project, you **CANNOT** copy this code and expect it to work, this will only provide how to setup your `package.json` and provide a request function

## Getting started
Firstly, you'll need to edit the `package.json` file, this is a very small modification but will allow the express backend and react frontend to communicate `express-sessions`.

Please add this to your `package.json` file:
```json
  ... code <REMOVE THIS>
  "proxy": "<BACKEND URL>"
```

After, you'll need to use the `fetch` function to be able to send request to the backend, there is a premade function inside `Request.js` which provides you with the code
