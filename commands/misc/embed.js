const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const sayMessage = args.join(" ")

    const embed = new Discord.RichEmbed()
    .setColor("#003366")
    .setDescription(sayMessage)

message.delete().catch();
message.channel.send(embed);

}
module.exports.help = {
    name: "embed"
}