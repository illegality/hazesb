const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = async (client, message, args) => {

    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
        if (err) message.channel.send(err);

        const eEmbed = new Discord.RichEmbed()
        .setTitle("Error :warning:")
        .setDescription("You must mention a valid location!")
        .setColor("#cc0505");

        if (result.length === 0) {
            message.channel.send(eEmbed)
            return;
        }

        var current = result[0].current;
        var location = result[0].location;

        const weatherEmbed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Showing weather for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor("#cc0505")
        .addField("Degree type", location.degreetype, true)
        .addField("Temperature", `${current.temperature} degrees`, true)
        .addField("Feels like", `${current.feelslike} degrees`, true)
        .addField("Winds", current.winddisplay, true)
        .addField("Humidity", `${current.humidity}%`, true)
        .setTimestamp()
        .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL);

        message.channel.send(weatherEmbed);

    });

}

module.exports.help = {
    name: "weather"
}