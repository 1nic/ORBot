const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
	name: 'kick',
	description: 'kick',
	run: async(client, message, args) =>{
		console.log(message.content);
		if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('go get kick perms lmao');
		const member = message.mentions.members.first()
		if (!member) return message.reply('you didnt mentioned anyone in the message, check if the player is in the server or else then try it again.');
		if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply(`${member} what are you trying to do, man?`);
		const reason = args[1].slice(2) || 'none';
		member.kick({ reason });
		const channel = client.channels.cache.find(ch => ch.id === '834078274770042921');
        message.channel.send(`${member} were kicked for ${reason}.`);
		const embedMessage = new MessageEmbed()
		.setTitle(`${message.author.tag} kicked ${member.user.tag}`)
		.setColor('FF0000')
		.setThumbnail(message.author.displayAvatarURL({format : 'png', dynamic : true}))
		
		.addField('Reason: ', [
			reason
		])
		console.log(`reason: ${reason}`);
		console.log(`arg = ${args}`);
		if (!reason) return;
		channel.send(embedMessage)
}}
