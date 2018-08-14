const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});
client.on("message", (message) => {
  if (message.content.startsWith("hola")) {
    message.channel.send("hola!!");
  }
});
client.login("TokenSecreto");       


client.on("guildMemberAdd", (member) => {
   console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('123456789112455845'); 
   canal.send(`${member.user}, bienvenido al servidor pasalo bien.`);
   
});
