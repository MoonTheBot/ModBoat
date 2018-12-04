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

client.on("message", async (message) => {
    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
     
    if (message.content.indexOf(settings.prefix) !== 0) return;

    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
});

client.login(settings.prefix);
