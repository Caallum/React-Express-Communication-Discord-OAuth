const axios = require("axios");

async function DiscordHandler(type, token) {
    
    if(!type) throw new TypeError("Cannot read 'type'");
    if(!token) throw new TypeError("Cannot read 'token'");

    const { data: User } = await axios({
        method: "GET",
        url: "https://discord.com/api/v8/users/@me",
        headers: {
            Authorization: `${type} ${token}`
        }
    });

    return User;
}

module.exports = UserHandler;
