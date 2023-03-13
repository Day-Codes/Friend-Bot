const client = require("../index");
client.on("guildCreate", guild => {
 
 
    guild.me.setNickname("Your Friend");
    console.log("Joined server!")

    guild.channels.create("gf-chat", {type: 'text'})
    guild.roles.create({
        data: {
          name: 'BIGGG BRAIN',
          color: '#324ab2',
        },
        reason: 'Bc i am cool',
      })
   });