const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on("ready", () => {
    console.log("I am ready!");
});

client.login(process.env.BOT_TOKEN);