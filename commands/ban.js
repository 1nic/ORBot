module.exports = {
	name: 'ban',
	description: 'ban',
	execute(message) {
		if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('go get ban perms and then do the command again, kiddo.');
		if (!message.mentions.members.first()) return message.reply('you want to ban the null?');
		const member = message.mentions.members.first()
		if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply(`${member} is the same/higher rank than you`);
		const reason = message.content.slice(1).join(' ') || 'none';
		member.ban({ reason });
        message.channel.send(`${member} were banned for ${reason}.`);
	},
};