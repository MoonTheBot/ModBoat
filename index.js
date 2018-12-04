const Discord = require("discord.js");
const client = new Discord.Client({
    fetchAllMembers: false,
    disableEveryone: true,
    sync: null
});

const settings = require("./config.js");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.username}.`);
    client.user.setActivity(`In ${client.guilds.size} Servers`);
    client.user.setStatus("dnd");
});