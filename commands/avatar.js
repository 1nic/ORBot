module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message){
		message.send(`${message.author.tag}'s avatar:`, {files: message.author.displayAvatarURL({format : 'png', dynamic : true})});
	},
};