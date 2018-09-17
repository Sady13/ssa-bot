const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log("Estoy listo!");
});
client.on("message", (message) => {
  if (message.content.startsWith("help")) {
    message.channel.send("Si neccesitas ayuda contacta con un @dueño o un @ moderador");
  }
});
client.login(proccess.env.NDc3NDQxMTc5Njc2NTczNzA3.DoF0GQ.vk6FPJEVt-1NLTHEQGGlr9J_AHs);       


client.on("guildMemberAdd", (member) => {
   console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('123456789112455845'); 
   canal.send(`${member.user}, bienvenido al servidor pasalo bien.`);
   
});
