const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
    let fEmbed = new Discord.RichEmbed()
    .setTitle("Error :warning:")
    .setColor("#003366")
    .setDescription("Sorry, I failed to execute the command...")

    let msg = await message.channel.send("*Generating...* :dog:")

    let {body} = await superagent
    .get("https://some-random-api.ml/img/dog")
    
    if(!{body}) return message.channel.send(fEmbed)

    let dEmbed = new Discord.RichEmbed()
    .setColor("#003366")
    .setTitle("Dog :dog:")
    .setImage(body.link)
    
    message.channel.send(dEmbed)
    msg.delete();
    

}

module.exports.help = {
    name: "dog"
}