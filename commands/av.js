module.exports = {
	name: 'av',
	description: 'avatar',
	execute(message) {
		message.channel.send(`${message.author.tag}'s avatar: ${message.author.displayAvatarURL({format : 'png', dynamic : true})}`);
	},
};