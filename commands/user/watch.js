const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    const uWatching = args.join(" ")

    if(!args[0]) {
        let fEmbed = new Discord.RichEmbed()
        .setTitle("Error :warning:")
        .setColor("#cc0505")
        .setDescription("Please set a status!")
        message.channel.send(fEmbed)
    
    } else {

        client.user.setActivity(uWatching, {
            type: 'WATCHING'
        });
        
        let statusEmbed = new Discord.RichEmbed()
        .setTitle("Success! :white_check_mark:")
        .setDescription(`Presence has been set. You are watching \`${uWatching}\` :tv:`)
        .setColor("#cc0505")
        message.channel.send(statusEmbed)
    }
}

module.exports.help = {
    name: "watch"
} 