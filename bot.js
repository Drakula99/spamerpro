const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("618943946373988382")
setInterval(function() {
channel.send(`Mony is Coming bro`);
}, 30)
})

client.login(process.env.BOT_TOKEN);