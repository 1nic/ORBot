module.exports = {
	name: 'kick',
	description: 'kick',
	execute(message, vic) {
		message.members.mentions.first().kick()
        message.channel.send(`${vic.name} were kicked.`);
	},
};