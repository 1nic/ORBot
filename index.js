const Discord = require('discord.js');
const prefix = "or "
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.once('ready', () => {
	console.log(`${client.user.username} is online.`);
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`**${message.author.tag}** you dont have permission to do that`);
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	const context = args.join(" ").toLowerCase();
	if (command === 'ann') {
		const channel = client.channels.cache.find(ch => ch.id === '828358344413937675');
		channel.send(context);
	} else if (command === 'kick') {
		if (!message.mentions.users.size){
			return message.reply('you didnt mention anyone, how i am supossed to kick?');
		}
	} else if (command === "avatar"){
		if (!message.mentions.users.size){
			return message.reply(`${message.author.tag}'s avatar: ${message.author.displayAvatarURL({format : 'png', dynamic : true})}`);
		}
	}
});

client.on("message", function(message){
	if (message.content === "nic is gay"){
		client.user.username = "Announcement Bot (nicolas's fan)"
		message.channel.send("no.");
	} else if (message.content == "bruno is gay"){
		client.user.username = "Announcement Bot (bruno's fan)"
		client.commands.get('ping').execute(message, args);
	} else if (message.content == "ismael is gay"){
		client.user.username = "Announcement Bot (ismael's fan)"
		message.channel.send("no.");
	}
});

client.login(process.env.token);