const Discord = require("discord.js")
const snekfetch = require("snekfetch")

module.exports.run = async (client, message, args) => {

    const eEmbed = new Discord.RichEmbed()
    .setTitle("Error :warning:")
    .setDescription("You must input a valid IP address!")
    .setColor("#cc0505");

    if (!args[0]) {
        message.channel.send(eEmbed)
        return;
    }

    if(!/^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/.test(args[0])) {
        message.channel.send(eEmbed)
        return;
    }

snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {
   
 const ipEmbed = new Discord.RichEmbed()
   .setThumbnail(`http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png`)
   .setTitle("IP Lookup")
   .setColor("#cc0505")
   .setDescription(`Showing information for **${args}** :eyes:`)
   .addField("Country", `${r.body.country}`, true)
   .addField("Country Code", `${r.body.countryCode}`, true)
   .addField("City", `${r.body.city}`, true)
   .addField("Region", `${r.body.regionName}`, true)
   .addField("Timezone", `${r.body.timezone}`, true)
   .addField("ISP", `${r.body.isp}`, true)
   .addField("ASN", `${r.body.as}`, true)
   .addField("Longitude", `${r.body.lon}`, true)
   .addField("Latitude", `${r.body.lat}`, true)
   .addField("ZIP", `${r.body.zip}`, true)
   .setTimestamp()

  message.channel.send(ipEmbed);
});

}

module.exports.help = {
    name: "ip"
}