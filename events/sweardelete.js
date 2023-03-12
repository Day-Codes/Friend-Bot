const client = require("../index");
const { MessageEmbed } = require("discord.js")
client.on("message", async message => {
    let em = new MessageEmbed()
    .setTitle(`${message.author.tag}! Please do not use that word `)
    .setColor('RANDOM')
    .setTimestamp()
     let blacklisted = ['youtube.com', 'https://youtube.com', 'hoe', 'slut', 'fuck', 'bitch', 'cunt', 'Fuck you', 'nigga','your gay', 'ur gay', 'baby', 'fag', 'faggot', 'F a g g o t'];
   
   let foundInText = false;
   for (var i in blacklisted) {
     if(message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
   }
   
   if(foundInText) {
     message.delete();
     message.channel.send(`${message.author}`, em)
   }
   });