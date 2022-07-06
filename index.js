const Discord =
  require('discord.js'); //
const { Client, WebhookClient, MessageAttachment } = require("discord.js");
const client = new Discord.Client();
const { keep_alive } = require("./keep_alive");
const wlmembers = process.env.whitelistkids;
const {PREFIX, OwnerID} = require("./config.json");
const fetch = require("node-fetch");
const {Webhook} = require('simple-discord-webhooks');


client.login(process.env.TOKEN).catch(e => {
  console.log(`\x1b[31m%s\x1b[0m\x1b[4m`,`TOKEN SUPPLIED IS INVALID / LOCKED / DISABLED !!`)
})
client.on('ready', () => {
  client.user.setActivity({
    name: `All OvER MeSSaGeS !! `,
    type: "WATCHING",
    url: "https://www.twitch.tv/ayoohennio" //NOT MINE HEHE
  })
  process.stdout.write('\x1Bc');

  console.log("\033[0;31m",' : M E S S AG E - L O G G E R : ')
    console.log(`>  D I N O - P R O J E C T S !! RUNNING THE CORD ON - ${client.user.username}\n     PREFIX : ${PREFIX}`);
  const guild = client.guilds.cache.get(`979599189950476349`);
  if(!guild){
    if(!OwnerID) return;
    const owner = client.users.cache.get(OwnerID);
    owner.send(`**YOU SHOULD JOIN -** https://discord.gg/FaBAPj5M\n\`FOR FUTURE UPDATES\``)
  }
});
client.once("reconnecting", () => {
  console.log("R E C O N N E C T I N G !!!");
});

client.once("disconnect", () => {
  console.log("D I S C O N N E C T E D !!!");
});



client.on('message', async message => {
  const guld = client.guilds.cache.get(`852062082253586474`);
  
  if(message.content== `${PREFIX}setupmsglogger`){
    if(message.author.id==client.user.id)return;
    if(message.guild.id != guld.id)return;
    if(message.author.id != OwnerID)return;
    const category = guld.channels.create(` M E S S A G E - L O G [ 01 ]`,{
      type : "category",
    }).then((channel) => {
      var cotergy = channel.id
      client.guilds.cache.forEach(guild => {
    guld.channels.create(`${guild.id}`,{
      type : "text",
    }).then((channel) => {
      channel.setParent(`${cotergy}`)
    })
  })
    }).then(message.channel.send(`\`🥐\` **SETUP COMPLETE !!**`))
  }
  if(message.author.id==client.user.id){
    return;
  }
  if(message.author.bot){
    return;
  }
 if(message.content.includes(`@everyone`) || message.content.includes(`@here`)){
   return;
 }
guld.channels.cache.forEach(channel => {
  if(channel.name == `${message.guild.id}`){
    channel.send(`**${message.author.username} \`>\` ** ${message.content}\n_ _`)
    return;
  }
  else{
    return;
  }
})
});
