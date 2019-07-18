const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    let fEmbed = new Discord.RichEmbed()
    .setTitle('Error :warning:')
    .setColor('#cc0505')
    .setDescription('Sorry, I failed to execute the command...')

    let msg = await message.channel.send('*Generating...* :panda_face:')

    let {body} = await superagent
    .get('https://some-random-api.ml/img/panda')
    
    if(!{body}) return message.channel.send(fEmbed)

    let pEmbed = new Discord.RichEmbed()
    .setColor('#cc0505')
    .setTitle('Panda :panda_face:')
    .setImage(body.link)
    
    message.channel.send(pEmbed)
    msg.delete();
    
}

module.exports.help = {
    name: 'panda'
}