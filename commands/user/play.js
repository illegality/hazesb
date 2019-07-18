 const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

    const uPlaying = args.join(" ")

    if(!args[0]) {
        let fEmbed = new Discord.RichEmbed()
        .setTitle("Error :warning:")
        .setColor("#cc0505")
        .setDescription("Please set a status!")
        message.channel.send(fEmbed)
    
    } else {

        client.user.setActivity(uPlaying)
            
}
        let statusEmbed = new Discord.RichEmbed()
        .setDescription(`Presence has been set. You are playing \`${uPlaying}\` :joystick:`)
        .setColor("#cc0505")
        message.channel.send(statusEmbed)
    }

module.exports.help = {
    name: "play"
} 