const express = require("express");
const router = express.Router();
const TokenHandler = require("../functions/TokenHandler.js");
const UserHandler = require("../functions/UserHandler.js")
const axios = require("axios");
const { frontURL, oauthUri } = require("../config.js");

function loggedIn(req, res, next) {
    if(req.session.user && req.session.roblox) {
        next()
    } else {
        res.redirect(`${frontURL}/`)
    }
}

function loggedOut(req, res, next) {
    if(!req.session.user && !req.session.roblox) {
        next()
    } else {
        res.redirect(`${frontURL}/`)
    }
}

router.get("/auth", loggedOut, async (req, res) => {
    try {
        if(!req.query.code) return res.redirect(`${frontURL}/`)

        const token = await TokenHandler(req.query.code);
        const user = await UserHandler(token.token_type, token.access_token);

        req.session.user = user;
        
        res.redirect(`${frontURL}/`)
    } catch(err) {
        console.log(err);
        res.json({ status: "bad", error: err })
    }
});

router.get("/login", loggedOut, (req, res) => {
    res.redirect(`${oauthUri}`);
});

router.get("/discord", (req, res) => {
    let discord = req?.session?.user;
    if(!discord) return res.json({ status: "bad", error: "Invalid Session"})
    

    return res.json({
        "status": "good",
        "user": discord
    })
});

router.get("/logout", loggedIn, (req, res) => {
    req.session.destroy((err) => {
        console.log(err);
    });

    return res.redirect(`${frontURL}/`);
})

module.exports = router;
