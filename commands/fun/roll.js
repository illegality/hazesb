const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    
    let numbers = [
        "You have rolled a **1**! <:roll1:591554660704452608>",
        "You have rolled a **2**! <:roll2:591554611903463455>",
        "You have rolled a **3**! <:roll3:591554416889298965>",
        "You have rolled a **4**! <:roll4:591554339194273799>",
        "You have rolled a **5**! <:roll5:591554289881579520>",
        "You have rolled a **6**! <:roll6:591554233573179394>"
    ];
    
    let msg = await message.channel.send('*Rolling the dice...* :game_die:')
    let res = numbers[Math.floor(Math.random() * numbers.length)];

    const rollEmbed = new Discord.RichEmbed()
   .setColor("#003366")
   .setDescription(res);
    
    message.channel.send(rollEmbed);
    msg.delete();
}

module.exports.help = {
    name: "roll"
}