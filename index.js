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
	} else if (cmdName.toLowerCase() === 'kick') {
		if (!message.mentions.users.size){
			return message.reply('you didnt mention anyone, how i am supossed to kick?');
		} else {
			if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('LMAO...');
			const vicToKick = message.mentions.members.first();
			if(vicToKick.id == message.author.id) return message.reply('thats stupid af, y would you kick yourself?');
			command.execute(message, vicToKick);
		}
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
		client.commands.get('kick').execute(message);
	}
	if (command){
		command.run(client, message, args);
	}
});

client.on("message", function(message){
	if (message.content === "nic is gay"){
		client.commands.get('msgc').execute(message, "no");
	} else if (message.content.toLocaleLowerCase() === "bruno is gay"){
		client.commands.get('msgc').execute(message, "fr, ngl, no cap.");
	} else if (message.content.toLocaleLowerCase() === "ismael is gay"){
		client.commands.get('msgc').execute(message, "do you want to be banned?");
	} else if (message.content.toLocaleLowerCase() === "shadow is gay"){
		client.commands.get('msgc').execute(message, "shut plz");
	}
});

client.on('message', function(message){
	const prefixRegex = new RegExp(`<@!?${'834495830869409843'}>`);
	if (!prefixRegex.test(message.content)) return;

	message.channel.send('whats up? prefix: or')
})

client.login(process.env.token);