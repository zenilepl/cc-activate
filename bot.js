const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$active`,"http://twitch.tv/S-F")
  console.log('')
  console.log('made by NoHaxJustZenile')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', async message => {
          if(message.content.startsWith(prefix + "active")) {
              if(!message.channel.guild) return message.reply("** هذا الامر للسيرفرات فقط :no_entry: ** ");
            message.member.addRole(message.guild.roles.find("name", "『 CC 』Member"));
            message.author.send("** تم تفعيلك استمتع :slight_smile: **")
          }
        });

client.login(process.env.BOT_TOKEN)
