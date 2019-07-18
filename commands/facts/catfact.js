const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    let fEmbed = new Discord.RichEmbed()
    .setTitle("Error :warning:")
    .setColor("#003366")
    .setDescription("Sorry, I failed to execute the command...")

    let {body} = await superagent
    .get("https://some-random-api.ml/facts/cat")
    
    if(!{body}) return message.channel.send(fEmbed)

    const catFact = new Discord.RichEmbed()
    .setColor('#cc0505')
    .setDescription(body.fact + ' :cat:')

    message.channel.send(catFact)

}

module.exports.help = {
    name: "catfact"
}