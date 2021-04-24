const {Client, Message, MessageEmbed} = require('discord.js')

module.exports = {
	name: 'kick',
	description: 'kick',
	run: async(message, client) =>{
		if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('go get kick perms lmao');
		if (!message.mentions.members.first()) return message.reply('you want to kick the null?');
		const member = message.mentions.members.first()
		const bot = message.guild.cache.get('834495830869409843');
		if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply(`${member} what are you trying to do, man?`);
		if (bot.roles.highest.position <= member.roles.highest.position) return message.reply(`${member} i dont have permission to ban the user.`);
		const args = message.content.slice("or ".length).trim().split(/ +/);
		const pre = args.join(" ").toLowerCase();
		const context = pre.split('ann');
		const reason = context.slice(2).join(' ') || 'none';
		member.kick({ reason });
		const channel = client.channels.cache.find(ch => ch.id === '828358344413937675');
        message.channel.send(`${member} were kicked for ${reason}.`);
		const embedMessage = new MessageEmbed()
		.setTitle(`${message.author.id} kicked ${member.author.id}`)
		.setColor('FF0000')
		.setThumbnail(message.author.displayAvatarURL({format : 'png', dynamic : true}))
		.addField('Reason: ', [
			reason
		])
		channel.send(embedMessage)

}}
