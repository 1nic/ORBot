module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {
		return message.send(`${message.author.tag}'s avatar:`, {files: message.author.displayAvatarURL({format : 'png', dynamic : true})});
	},
};