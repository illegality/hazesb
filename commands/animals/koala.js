const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    let fEmbed = new Discord.RichEmbed()
    .setTitle('Error :warning:')
    .setColor('#cc0505')
    .setDescription('Sorry, I failed to execute the command...')

    let msg = await message.channel.send('*Generating...* :koala:')

    let {body} = await superagent
    .get('https://some-random-api.ml/img/koala')
    
    if(!{body}) return message.channel.send(fEmbed)

    let kEmbed = new Discord.RichEmbed()
    .setColor('#cc0505')
    .setTitle('Koala Bear :koala:')
    .setImage(body.link)
    
    message.channel.send(kEmbed)
    msg.delete();
    
}

module.exports.help = {
    name: 'koala'
}