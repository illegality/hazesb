const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

const setStatus = message.content.split(' ');

    if(setStatus[1] === 'idle'){
        let idleEmbed = new Discord.RichEmbed()
        .setTitle("Success! :white_check_mark:")
        .setDescription("My status has been set to: <:idle:588637121460568085>"+setStatus[1])
        .setColor("#FFA418"); 

        client.user.setStatus('idle')
            .then(message.channel.send(idleEmbed))
            .catch(console.error);
    } 
    
    else if(setStatus[1] === 'online'){
        let onlineEmbed = new Discord.RichEmbed()
        .setTitle("Success! :white_check_mark:")
        .setDescription("My status has been set to: <:online:588637168449093633>"+setStatus[1])
        .setColor("#40B781");
        
        client.user.setStatus('online')
            .then(message.channel.send(onlineEmbed))
            .catch(console.error);
    }
    
    else if(setStatus[1] === 'invisible'){
        let invisEmbed = new Discord.RichEmbed()
        .setTitle("Success! :white_check_mark:")
        .setDescription("My status has been set to: <:invisible:588637225609199616>"+setStatus[1])
        .setColor("#75818F");

        client.user.setStatus('invisible')
            .then(message.channel.send(invisEmbed))
            .catch(console.error);
    }
    
    else if(setStatus[1] === 'dnd'){
        let dndEmbed = new Discord.RichEmbed()
        .setTitle("Success! :white_check_mark:")
        .setDescription("My status has been set to: <:dnd:588637076786905088>"+setStatus[1])
        .setColor("#F64545");
        
        client.user.setStatus('dnd')
            .then(message.channel.send(dndEmbed))
            .catch(console.error);
    }
    
    else{
        let failEmbed = new Discord.RichEmbed()
        .setTitle('Error :warning:')
        .setColor('#cc0505')
        .setDescription('I couldn\'t set my status. Please select one of the following: \n `online` \n `idle` \n `dnd` \n `invisible`')
        .setTimestamp();
        return message.channel.send(failEmbed);
    }
    
    }
    module.exports.help = {
        name: "setstatus"
    }