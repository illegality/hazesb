const Discord = require('discord.js');
const _ = require('lodash');

module.exports.run = async (client, message, args) => {

    let sTotal = process.uptime();
    let days = Math.floor((sTotal % 31536000) / 86400);
    let hours = _.parseInt(sTotal / 3600) % 24;
    let minutes = _.parseInt(sTotal / 60) % 60;
    let seconds = Math.floor(sTotal % 60);

    let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
   
    let helpEmbed = new Discord.RichEmbed()
    .setTitle("Help :speech_balloon:")
    .setThumbnail(client.user.avatarURL)
    .setColor("#000000")
    .addField(":bust_in_silhouette: User", "\`watch\` \`listento\` \`play\` \`setstatus\`")
    .addField(":information_source: Information", "\`userinfo\` \`ping\` \`av\` \`uptime\`")
    .addField(":8ball: Fun", "\`roll\`")
    .addField(":feet: Animals", "\`bird\` \`cat\` \`dog\` \`fox\` \`koala\` \`panda\`")
    .addField(":question: Facts", "\`birdfact\` \`catfact\` \`dogfact\` \`foxfact\` \`koalafact\` \`pandafact\`")
    .addField(":bulb: Miscellaneous", "\`embed\` \`ip\` \`urban\` \`weather\`")
    .setFooter(`⚡ I have been online for ${uptime} ⚡`);

    message.channel.send(helpEmbed)

}

module.exports.help = {
    name: "help"
}