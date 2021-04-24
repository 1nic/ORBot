module.exports = {
	name: 'kick',
	description: 'kick',
	run: async(message) =>{
		if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply('go get kick perms lmao');
		if (!message.mentions.members.first()) return message.reply('you want to kick the null?');
		const member = message.mentions.members.first()
		if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply(`${member} what are you trying to do, man?`);
		const args = message.content.slice("or ".length).trim().split(/ +/);
		const pre = args.join(" ").toLowerCase();
		const context = pre.split('ann');
		const reason = context.slice(2).join(' ') || 'none';
		member.kick({ reason });
        message.channel.send(`${member} were banned for ${reason}.`);
}}
