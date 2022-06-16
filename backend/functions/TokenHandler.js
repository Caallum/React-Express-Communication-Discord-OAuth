const axios = require("axios");
const config = require("../config")

async function TokenHandler(code) {
    if(!code) throw new TypeError("Cannot read 'code'")

    const data = new URLSearchParams();
    data.append("client_id", config.clientId);
    data.append("client_secret", config.clientSecret);
    data.append("redirect_uri", config.redirectUri);
    data.append("scopes", "identify");
    data.append("grant_type", "authorization_code");
    data.append("code", code);

    const { data: Token } = await axios({
        method: "POST",
        url: "https://discord.com/api/oauth2/token",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: data
    });

    return Token;
}

module.exports = TokenHandler;
