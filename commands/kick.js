const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
	name: 'kick',
	description: 'kick',
	run: async(client, message, args) =>{
		console.log(message.content);
		if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('go get kick perms lmao');
		const member = message.mentions.members.first()
		const newEmbed = new MessageEmbed()
		.setTitle('Kick:')
		.setColor('RED')
		.setThumbnail('https://cdn.discordapp.com/attachments/835130113599209473/835836212714668052/Omniversal_Administrative.png')
		.addField('Examples:', [
			'r kick {user} (mention the person which you wanna kick)',
			'r kick {user} "underaged" < reason here'
		])
		if (!member) return message.reply(newEmbed);
		if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply(`${member} the dude is a higher rank/same rank as you`);
		const reason = args[0].slice(1).join(' ') || 'none';
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
