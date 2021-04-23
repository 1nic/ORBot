module.exports = {
	name: 'kick',
	description: 'kick',
	execute(message, vic) {
		message.mentions.first().kick();
        message.channel.send(`${message.mentions.first().name} were kicked.`);
	},
};