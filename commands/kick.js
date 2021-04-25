const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
	name: 'kick',
	description: 'kick',
	run: async(client, message, args) =>{
		if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('go get kick perms lmao');
		if (!message.mentions.members.size) return message.reply('you want to kick the null?');
		const member = message.mentions.members.first()
		if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply(`${member} what are you trying to do, man?`);
		const context = args[0]
		const reason = context.slice(3).join(' ') || 'none';
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
		channel.send(embedMessage)

}}
