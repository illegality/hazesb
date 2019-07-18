const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const pingLoading = new Discord.RichEmbed()
    .setColor("#cc0505")
    .setDescription("Pinging...");

    const responseMessage = await message.channel.send(pingLoading);

    const pingMessage = new Discord.RichEmbed()
    .setColor("#cc0505")
    .setTitle("Pong! :ping_pong:")
    .addField("Latency", `${responseMessage.createdTimestamp - message.createdTimestamp}ms`, true)
    .addField("API Latency", `${Math.round(client.ping)}ms`, true)

    await responseMessage.edit(pingMessage)
    
}

module.exports.help = {
    name: "ping"
}