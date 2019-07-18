const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    let fEmbed = new Discord.RichEmbed()
    .setTitle('Error :warning:')
    .setColor('#cc0505')
    .setDescription('Sorry, I failed to execute the command...')

    let msg = await message.channel.send('*Generating...* :bird:')

    let {body} = await superagent
    .get('https://some-random-api.ml/img/birb')
    
    if(!{body}) return message.channel.send(fEmbed)

    let bEmbed = new Discord.RichEmbed()
    .setColor('#cc0505')
    .setTitle('Bird :bird:')
    .setImage(body.link)
    
    message.channel.send(bEmbed)
    msg.delete();
    
}

module.exports.help = {
    name: 'bird'
}