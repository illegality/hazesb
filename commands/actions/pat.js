const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    let uPat = message.mentions.users.first();

    let fEmbed = new Discord.RichEmbed()
    .setTitle('Error :warning:')
    .setColor('#cc0505')
    .setDescription('Sorry, I failed to execute the command...')

    let msg = await message.channel.send('*Generating...* (ｏ・_・)ノ”(ᴗ_ ᴗ。)')

    let {body} = await superagent
    .get('https://some-random-api.ml/animu/pat')
    
    if(!{body}) return message.channel.send(fEmbed)

    let patEmbed = new Discord.RichEmbed()
    .setColor('#cc0505')
    .setTitle(`~pats ${uPat.username}~ (ｏ・_・)ノ”(ᴗ_ ᴗ。)`)
    .setImage(body.link)
    
    message.channel.send(patEmbed)
    msg.delete();
    
}

module.exports.help = {
    name: 'pat'
}