const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online.`);
  bot.user.setGame("on Warzone");
});

bot.on("message", async message => {
  if(message.author.bot) return;
});

bot.login(botconfig.token);
