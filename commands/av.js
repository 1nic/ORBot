module.exports = {
	name: 'av',
	description: 'avatar',
	run: async(client, message, args) => {
		message.channel.send(`${message.author.tag}'s avatar: ${message.author.displayAvatarURL({format : 'png', dynamic : false})}`);
	}
};