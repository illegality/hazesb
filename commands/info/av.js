const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let memberAv = message.mentions.users.first();

  if(!memberAv){
    const ownAv = new Discord.RichEmbed()
        .setTitle("Showing your own avatar :camera:")
        .setImage(client.user.avatarURL)
        .setColor('#cc0505')

        message.channel.send(ownAv);

  }else{

    const userAv = new Discord.RichEmbed()
        .setTitle(`Showing ${memberAv.username}'s avatar :camera:`)
        .setImage(memberAv.avatarURL)
        .setColor('#cc0505')

        message.channel.send(userAv)
        .catch(console.error);
  }
}

module.exports.help = {
    name: "av"
}