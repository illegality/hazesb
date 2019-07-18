const Discord = require('discord.js');
const superagent = require('superagent');

module.exports.run = async (client, message, args) => {
    let fEmbed = new Discord.RichEmbed()
    .setTitle("Error :warning:")
    .setColor("#003366")
    .setDescription("Sorry, I failed to execute the command...")

    let {body} = await superagent
    .get("https://some-random-api.ml/facts/panda")
    
    if(!{body}) return message.channel.send(fEmbed)

    const pandaFact = new Discord.RichEmbed()
    .setColor('#cc0505')
    .setDescription(body.fact + ' :panda_face:')

    message.channel.send(pandaFact)

}

module.exports.help = {
    name: "pandafact"
}