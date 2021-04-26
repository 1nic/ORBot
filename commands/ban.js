module.exports = {
	name: 'ban',
	description: 'ban',
	run: async(client, message, args) => {
		if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('go get ban perms and then do the command again, kiddo.');
		if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('i dont have perms to do that');
		if (!message.mentions.members.first()) return message.reply('you want to ban the null?');
		const member = message.mentions.members.first()
		if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply(`${member} is the same/higher rank than you`);
		const context = args.slice(1).join(' ');
		const reason = context || 'none';
		member.ban({ reason });
        message.channel.send(`${member} were banned for ${reason}.`);
	}
};