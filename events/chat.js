const client = require("../index");
const axios = require('axios')

/* Load all events */
client.on("message", async (message) => {
    if (message.author.bot) return
    if(message.channel.name === "chat-test" && !message.author.bot) {
          let ok = async () => {
  let wow = await axios.get('https://api.outerapi.tk/ai-chatbot');
  let ee = wow.data
  return ee
}
let eeValue = await ok();
      if (message.content.includes(`@`)) {
    return message.reply(`**:x: Please dont mention anyone**`);
  }
     {    

   message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
  if (message.content.includes(`@`)) {
   return message.reply(`**:x: Please dont mention anyone**`);
 }
   
 message.channel.startTyping();
setTimeout(function(){
    message.channel.stopTyping();
    message.reply(eeValue.result);
}, 5000);

  }
    }
})