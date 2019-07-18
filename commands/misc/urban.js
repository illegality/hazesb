const Discord = require('discord.js');
const urban = require('relevant-urban')

module.exports.run = async (client, message, args) => {

    const eEmbed = new Discord.RichEmbed()
    .setTitle('Error :warning:')
    .setDescription('You must give a search term!')
    .setColor('#cc0505');

    if (!args[0]) {
        message.channel.send(eEmbed)
        return;
    }

    const fEmbed = new Discord.RichEmbed()
    .setTitle('Error :warning:')
    .setDescription(`No definition was found for **${args}**.`)
    .setColor('#cc0505');

    let res = await urban(args.join(' ')).catch(e => {
        return message.channel.send(fEmbed)
    })

    const urbanEmbed = new Discord.RichEmbed()
    .setTitle(res.word)
    .setURL(res.urbanURL)
    .setColor('#cc0505')
    .addField('Definition', `${res.definition}`)
    .addField('Example', `${res.example}`)
    .setTimestamp()
    .setFooter(`👍 ${res.thumbsUp} •  👎 ${res.thumbsDown}`);

    message.channel.send(urbanEmbed)

}

module.exports.help = {
    name: "urban"
}

