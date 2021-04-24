const Discord = require('discord.js');
const prefix = "or "
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const msgarray = [
	'nic is gay',
	'bruno is gay',
	'zap is gay',
	'chris is gay',
	'ismael is gay'
]

client.once('ready', () => {
	console.log(`${client.user.username} is online.`);
});

for (const file of commandFiles) {
	const cmd = require(`./commands/${file}`);

	client.commands.set(cmd.name, cmd);
}

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(`**${message.author.tag}** you dont have permission to do that`);
	const args = message.content.slice("or ".length).trim().split(/ +/);
	const cmdName = args.shift().toLowerCase();
	const command = client.commands.get(cmdName);
	if (cmdName.toLowerCase() === 'ann') {
		command.execute(message, client);
	} 
	if (cmdName.toLowerCase() === "avatar"){
		if (!message.mentions.users.size){
			client.commands.get('av').execute(message);	
		}
	}
	if (cmdName.toLowerCase() == 'ban'){
		client.commands.get('ban').execute(message);
	}
	if (cmdName.toLowerCase() == 'unban'){
		command.run(message, args);
	}
	if (cmdName.toLowerCase() == 'kick'){
		client.commands.get('kick').run(message, client);
	}
	if (!command == "ban"){
		command.run(client, message, args);
	}
});

client.on("message", function(message){ 
	if (msgarray.find(value => value = message.content)){
		const val = msgarray.find(value => value = message.content);
		if (!val) return message.channel.send('error.');
		client.commands.get('send').run(message);
	}
});

client.on('message', function(message){
	const prefixRegex = new RegExp(`<@!?${'834495830869409843'}>`);
	if (!prefixRegex.test(message.content)) return;

	message.channel.send('whats up? prefix: or')
})

client.login(process.env.token);