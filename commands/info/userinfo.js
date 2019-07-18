const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let memberInfo = message.mentions.users.first();

  if(!memberInfo){
    const ownInfo = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setThumbnail(message.author.avatarURL)
        .setColor('#cc0505')
        .addField('Username', `${message.author.username}#${message.author.discriminator}`)
        .addField('ID', message.author.id)
        .addField('Status', message.author.presence.status)
        .addField('Created At:', message.author.createdAt)
        .setTimestamp();

        message.channel.send(ownInfo);

  }else{

    const userInfo = new Discord.RichEmbed()
        .setAuthor(memberInfo.username, memberInfo.avatarURL)
        .setThumbnail(memberInfo.avatarURL)
        .setColor('#000000')
        .addField('Username', `${memberInfo.username}#${memberInfo.discriminator}`)
        .addField('ID', memberInfo.id)
        .addField('Status', memberInfo.presence.status)
        .addField("Created At", memberInfo.createdAt)
        .setTimestamp();

        message.channel.send(userInfo);
  }
}

module.exports.help = {
    name: "userinfo"
}