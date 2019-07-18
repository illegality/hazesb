const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    let uHug = message.mentions.users.first();

    let fEmbed = new Discord.RichEmbed()
    .setTitle('Error :warning:')
    .setColor('#cc0505')
    .setDescription('Sorry, I failed to execute the command...')

    let msg = await message.channel.send('*Generating...* :hugging:')

    let {body} = await superagent
    .get('https://some-random-api.ml/animu/hug')
    
    if(!{body}) return message.channel.send(fEmbed)

    if(!uHug){
    const selfWink = new Discord.RichEmbed()
    .setColor("#cc0505")
    .setTitle("(づ｡◕‿‿◕｡)づ")
    .setImage(body.link)

    message.channel.send(selfWink)

    }else{
        let hugEmbed = new Discord.RichEmbed()
        .setColor('#cc0505')
        .setTitle(`~hugs ${uHug.username}~ (づ｡◕‿‿◕｡)づ `)
        .setImage(body.link)
        
        message.channel.send(hugEmbed)
        msg.delete();

    }    
}

module.exports.help = {
    name: 'hug'
}