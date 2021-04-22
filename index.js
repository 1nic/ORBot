const Discord = require('discord.js');
const prefix = "or ";
const client = new Discord.Client();

client.once('ready', () => {
	console.log('The bot is ready');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`**${message.author.tag}** you dont have permission to do that`);
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	const context = args.join(" ").toLowerCase();
	if (command === 'ann') {
		const channel = client.channels.cache.find(ch => ch.id === '828358344413937675');
		channel.send(context);
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}
});

client.login(process.env.token);