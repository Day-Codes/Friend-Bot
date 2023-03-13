
//client.guilds.cache.get("GUILD_ID").channels.cache.get("CHANNEL_ID").send()

const { client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const hastebin = require('hastebin-gen');
const axios = require('axios')
module.exports = {
    name: "bug-report",
   nodefer: false,
    category: ":beginner: Info",
    description: "report a bug",
    type: 'CHAT_INPUT',
    options: [
        {
          name: "bug",
          description: "bug?",
          type: "STRING",
          required: true,
        },
         {
          name: "server",
          description: "server invite",
          type: "STRING",
          required: true,
        },
    ],
    run: async (client, interaction, args) => {
      const res = interaction.options.getString("bug")
        const sdd = interaction.options.getString("server")
      let msg = await interaction.followUp(`*Sending Info To Dev Team*`)

   const apply = new MessageEmbed()
      .setTitle("User Report | Code bug")
      .setDescription(`Guild: ${interaction.guild} - ${interaction.guild.id} \n Reason: ${res} \n Server invite: ${sdd} \n Troll of sy stem report to dayln`)
     .setColor("RANDOM")
    
  
client.guilds.cache.get("895398888113049631").channels.cache.get("1081348763592949811").send({ embeds: [apply] }) 

          setTimeout(() => {
        msg.edit({ content:    `<:approve:983374708798001233> | Your Server has been Applied! (Note: This will take 5-10 Businiess Days [Fri-Sun])`, ephemeral: true});
      }, 500);
    },     
};
