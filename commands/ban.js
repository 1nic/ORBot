const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'ban',
	description: 'ban',
	run: async(client, message, args) => {
		if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('go get ban perms lmao');
		const member = message.mentions.members.first()
		const newEmbed = new MessageEmbed()
		.setTitle('Ban:')
		.setColor('RED')
		.setThumbnail('https://cdn.discordapp.com/attachments/835130113599209473/835836212714668052/Omniversal_Administrative.png')
		.addField('Examples:', [
			'r ban {user} (mention the person which you wanna ban)',
			'r ban {user} "underaged" < reason here'
		])
		if (!member) return message.reply(newEmbed);
		if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply(`${member} the dude is a higher rank/same rank as you`);
		const reason = args.slice(1).join(' ') || 'none';
		member.ban({ reason });
		const channel = client.channels.cache.find(ch => ch.id === '834078274770042921');
        message.channel.send(`${member} were banned for ${reason}.`);
		const embedMessage = new MessageEmbed()
		.setTitle(`${message.author.tag} banned ${member.user.tag}`)
		.setColor('FF0000')
		.setThumbnail(message.author.displayAvatarURL({format : 'png', dynamic : true}))
		
		.addField('Reason: ', [
			reason
		])
		if (!reason) return;
		channel.send(embedMessage)
	}
};