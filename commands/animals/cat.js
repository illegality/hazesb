const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    let fEmbed = new Discord.RichEmbed()
    .setTitle('Error :warning:')
    .setColor('#cc0505')
    .setDescription('Sorry, I failed to execute the command...')

    let msg = await message.channel.send('*Generating...* :cat:')

    let {body} = await superagent
    .get('https://some-random-api.ml/img/dog')
    
    if(!{body}) return message.channel.send(fEmbed)

    let cEmbed = new Discord.RichEmbed()
    .setColor('#cc0505')
    .setTitle('Cat :cat:')
    .setImage(body.link)
    
    message.channel.send(cEmbed)
    msg.delete();
    
}

module.exports.help = {
    name: 'cat'
}
