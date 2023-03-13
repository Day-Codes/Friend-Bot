const client = require("../index");
const { MessageEmbed } = require("discord.js")

client.on('guildCreate', guild =>{
//dm owner
  client.guilds.cache.forEach((g) => {
    
   const user = client.users.cache.get(g.ownerId)
   user.send({ content: `Hello, ${user} \n Thanks for inviting Friend Bot! We use Slash commands, if you have any questions please feel free to join our support server: https://discord.gg/HyMvKMM96M , Thanks, \n Donut Cop Team`})
  })
    // MEssage
  const channelId = '1081348709285118104'; //put your channel ID here

  const channel = client.channels.cache.get(channelId); 
   //This Gets The Guild Owner
  if(!channel) return; //If the channel is invalid it returns
  const embed10 = new MessageEmbed()
    .setTitle("Friend Bot joined a new server")
      .setDescription(`Hi`)
  .addFields({ name: ' Guild info', value: ` Guild name - ${guild.name}\n Guild Id - ${guild.id}\n Guild members - ${guild.memberCount}`, inline: true })

.addFields({ name: ' Owner info', value: ` Owner Name - <@${guild.ownerId}>\n Guild Owner Id - ${guild.ownerId}`, inline: true })

.addFields({ name: 'Info', value: `Total Guild - ${client.guilds.cache.size}\n Total User - ${client.users.cache.size}`, inline: true })
  
      .setColor('RANDOM')
      .setFooter(`New Guild`);
      channel.send({ embeds: [embed10]});
});


// guild delete 
client.on('guildDelete', guild =>{
  const channelId = '1081348709285118104';//add your channel ID
  const channel = client.channels.cache.get(channelId); //This Gets That Channel
  
  if(!channel) return;  //If the channel is invalid it returns
  const embed11 = new MessageEmbed()
    .setTitle("Friend is kicked")
     .setDescription(``)
  .addFields({ name: ' Guild info', value: `Guild name - ${guild.name}\n: Guild Id - ${guild.id}\n: Guild members - ${guild.memberCount}`, inline: true })

.addFields({ name: ' Owner info', value: `Owner Name - <@${guild.ownerId}>\n Guild Owner Id - ${guild.ownerId}`, inline: true })

.addFields({ name: 'Friend info', value: `Total Guild - ${client.guilds.cache.size}\n Total User - ${client.users.cache.size}`, inline: true })
      .setFooter(`Removed`)
      .setColor('RANDOM')
      channel.send({ embeds: [embed11]});
});

// Made by DEVANSH#4075
//Give credits if you are sharing to other servers or i will Copyright you 
// Using this code in your bot without will ok but if you are sharing this place give me credit
// Thank you Hope this will help you 