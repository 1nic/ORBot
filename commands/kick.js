module.exports = {
	name: 'kick',
	description: 'kick',
	execute(message, vic) {
		vic.kick(`Kicked by ${message.author.id}`)
        message.channel.send(`${vic.author.id} were kicked.`)
	},
};