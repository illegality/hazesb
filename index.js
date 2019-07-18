const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const client = new Discord.Client({
    disableEveryone: true
});

client.commands = new Discord.Collection();

// COMMAND HANDLER

fs.readdir('./commands/actions', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith('.js')) return;
        let props = require(`./commands/actions/${file}`);
        let commandName = file.split('.')[0];
        console.log(`SELFBOT > ${commandName} loaded.`);
        client.commands.set(props.help.name, props);
    });
}); 

fs.readdir('./commands/animals', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith('.js')) return;
        let props = require(`./commands/animals/${file}`);
        let commandName = file.split('.')[0];
        console.log(`SELFBOT > ${commandName} loaded.`);
        client.commands.set(props.help.name, props);
    });
}); 

fs.readdir('./commands/facts', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith('.js')) return;
        let props = require(`./commands/facts/${file}`);
        let commandName = file.split('.')[0];
        console.log(`SELFBOT > ${commandName} loaded.`);
        client.commands.set(props.help.name, props);
    });
}); 

fs.readdir('./commands/fun', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith('.js')) return;
        let props = require(`./commands/fun/${file}`);
        let commandName = file.split('.')[0];
        console.log(`SELFBOT > ${commandName} loaded.`);
        client.commands.set(props.help.name, props);
    });
});

fs.readdir('./commands/info', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith('.js')) return;
        let props = require(`./commands/info/${file}`);
        let commandName = file.split('.')[0];
        console.log(`SELFBOT > ${commandName} loaded.`);
        client.commands.set(props.help.name, props);
    });
});

fs.readdir('./commands/misc', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith('.js')) return;
        let props = require(`./commands/misc/${file}`);
        let commandName = file.split('.')[0];
        console.log(`SELFBOT > ${commandName} loaded.`);
        client.commands.set(props.help.name, props);
    });
});

fs.readdir('./commands/user', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if(!file.endsWith('.js')) return;
        let props = require(`./commands/user/${file}`);
        let commandName = file.split('.')[0];
        console.log(`SELFBOT > ${commandName} loaded.`);
        client.commands.set(props.help.name, props);
    });
}); 


client.on('ready', async() => {
    console.log(`SELFBOT > ${client.user.username}#${client.user.discriminator} is logged in.`);
});

client.on('message', message => {
    let prefix = config.prefix;
    const messageArray = message.content.split(/\s+/g);
    const args = messageArray.slice(1);
    const command = messageArray[0];
    const cmd = client.commands.get(command.slice(prefix.length));
    if(!command.startsWith(prefix)) return;
    if(message.author.id != client.user.id) return;
    if(cmd) cmd.run(client, message, args); 
})



client.login(config.token)