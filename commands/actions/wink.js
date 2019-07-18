const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    let uWink = message.mentions.users.first();

    let fEmbed = new Discord.RichEmbed()
    .setTitle('Error :warning:')
    .setColor('#cc0505')
    .setDescription('Sorry, I failed to execute the command...')

    let msg = await message.channel.send('*Generating...* :wink:')

    let {body} = await superagent
    .get('https://some-random-api.ml/animu/wink')
    
    if(!{body}) return message.channel.send(fEmbed)

    let winkEmbed = new Discord.RichEmbed()
    .setColor('#cc0505')
    .setTitle(`~winks at ${uWink.username}~ (ゝω･)ﾉ`)
    .setImage(body.link)
    
    message.channel.send(winkEmbed)
    msg.delete();
    
}

module.exports.help = {
    name: 'wink'
}