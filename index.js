const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client({
    intents: [
     "GUILD_MESSAGES",
     "GUILDS"
    ]

})
client.on("ready", () => {
console.log(`logged in as ${client.user.tag}`);
})

client.on("messageCreate", (message) => {
    if(message.content == ".?bidoof") {
        message.channel.send("Hello there, child. What do you need from me?")
    }
    if(message.content == ".? bidoof") {
        message.channel.send("Hello there, child. What do you need from me?")
    }
})


client.login(process.env.TOKEN);