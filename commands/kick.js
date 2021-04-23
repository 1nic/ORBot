module.exports = {
	name: 'kick',
	description: 'kick',
	execute(message) {
		if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('go get kick perms and then do the command again, kiddo.');
		if (!message.mentions.members.first()) return message.reply('you want to kick the null?');
		const member = message.mentios.members.first()
		if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply(`${member} is the same/higher rank than you`);
		const reason = message.slice(1).join(' ') || 'nothing/none reason';
		member.kick({ reason });
        message.channel.send(`${member} were kicked for ${reason}.`);
	},
};