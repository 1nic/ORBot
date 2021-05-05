const Discord = require('discord.js');
const prefix = "r "
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
client.othercommands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const otherFiles = fs.readdirSync('./commands/others').filter(file => file.endsWith('.js'));

client.once('ready', () => {
	console.log(`${client.user.username} is online.`);
	client.user.setPresence({
		activity: {
			name: 'Ben 10: Omniversal Revenge',
			type: 'PLAYING'
		},
		status: 'dnd'
	})
});

for (const file of commandFiles) {
	const cmd = require(`./commands/${file}`);

	client.commands.set(cmd.name, cmd);
}

for (const file of otherFiles) {
	const cmd = require(`./commands/others/${file}`);

	client.othercommands.set(cmd.name, cmd);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const cmdName = args.shift().toLowerCase();
	const command = client.commands.get(cmdName);
	if (!command) return;
	command.run(client, message, args);
});

client.on('message', message => {
	const args = message.content.split(/ +/);
	const otherName = message.content.toLocaleLowerCase();
	const other = client.othercommands.get(otherName);
	if (args.find(str => str.toLocaleLowerCase() == 'epic') && !other){
		client.othercommands.get('epic').run(client, message, args);
	}
	if (args.find(str => str.toLocaleLowerCase() == 'kishaan') && !other){
		client.othercommands.get('kishaan').run(client, message, args);
	}
	if (args.find(str => str.toLocaleLowerCase() == 'lala') && !other){
		client.othercommands.get('lala').run(client, message, args);
	}
	if (args.find(str => str.toLocaleLowerCase() == 'the') && !other){
		client.othercommands.get('the').run(client, message, args);
	}
	if (args.find(str => str.toLocaleLowerCase() == 'nigga') && !other){
		client.othercommands.get('nigga').run(client, message, args);
	}
	if (args.find(str => str.toLocaleLowerCase() == 'zap') && !other){
		client.othercommands.get('zap').run(client, message, args);
	}
	if (args.find(str => str.toLocaleLowerCase() == 'ben') && args.find(str => str.toLocaleLowerCase() == '10') && !other){
		client.othercommands.get('ben 10').run(client, message, args);
	}
	if (args.find(str => str.toLocaleLowerCase() == 'n word') && !other){
		client.othercommands.get('n word').run(client, message, args);
	}
	if (args.find(str => str.toLocaleLowerCase() == 'sus') || args.find(str => str == 'amogus') && message.member.hasPermission('MANAGE_MESSAGES')){
		if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
		client.othercommands.get('sus').run(client, message, args);
	}
	if (args.find(str => str.toLocaleLowerCase() == 'jojo') && message.member.hasPermission('MANAGE_MESSAGES')){
		client.othercommands.get('jojo').run(client, message, args);
	}
	if (!other) return;
	other.run(client, message, args);
})

client.on('message', function(message){
	const prefixRegex = new RegExp(`<@!?${'834495830869409843'}>`);
	if (!prefixRegex.test(message.content)) return;
	if (!message.author.id === '834495830869409843') {
		message.channel.send(`wassup? prefix: ${prefix}, type '${prefix} help' to help.`);
	}
})

client.login(process.env.token);