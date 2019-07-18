const Discord = require("discord.js");
const _ = require("lodash")

module.exports.run = async(client, message, args) => {
 let sTotal = process.uptime();
 let days = Math.floor((sTotal % 31536000) / 86400);
 let hours = _.parseInt(sTotal / 3600) % 24;
 let minutes = _.parseInt(sTotal / 60) % 60;
 let seconds = Math.floor(sTotal % 60);

 let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

 let uEmbed = new Discord.RichEmbed()
 .setTitle("Uptime :electric_plug:")
 .setColor("#000000")
 .setDescription(`I have been online for ${uptime}`)

 message.channel.send(uEmbed);

}

module.exports.help = {
    name: "uptime"
}
