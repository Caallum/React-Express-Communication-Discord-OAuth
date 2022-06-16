const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");

const OAuthRouter = require("./router/oauth.js")

app.use(cors({
    credentials: true
}));
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: "keyboard cat"
    })
)

app.get("/api/status", (req, res) => {
    res.json({
        status: "good",
        message: "Server is working and online"
    })
})

app.use("/api/user", OAuthRouter)

app.listen(4080, () => { console.log(`[BACKEND] Running on PORT 4080`)});
