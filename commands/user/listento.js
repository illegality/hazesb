 const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    const uListening = args.join(" ")

    if(!args[0]) {
        let fEmbed = new Discord.RichEmbed()
        .setTitle("Error :warning:")
        .setColor("#cc0505")
        .setDescription("Please set a status!")
        message.channel.send(fEmbed)
    
    } else {

        client.user.setActivity(uListening, {
            type: 'LISTENING'
        });
        
        let statusEmbed = new Discord.RichEmbed()
        .setDescription(`Presence has been set. You are listening to \`${uListening}\` :notes:`)
        .setColor("#cc0505")
        message.channel.send(statusEmbed)
    }
}

module.exports.help = {
    name: "listento"
} 