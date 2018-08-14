const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});
client.on("message", (message) => {
  if (message.content.startsWith("hola")) {
    message.channel.send("Hola!!");
  }
});
client.login("NDc3ODQwNTI4MDc2MDQ2MzQ3.DlQsRw.FLYlvlYMp6_dfEiMlwSSVB5GG7o")
