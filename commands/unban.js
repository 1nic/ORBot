module.exports = {
	name: 'unban',
	description: 'unban',
	run: async(message) => {
		if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('go get ban perms and then do the command again, kiddo.');
		const args = message.content.slice("or ".length).trim().split(/ +/);
		const pre = args.join(" ").toLowerCase();
		const context = pre.split('unban');
		const id = context.slice(2).join(' ');
		if (!id) return message.reply('you gotta use the user id, i cant unban people by usernames or else.')
		const bannedppl = await message.guild.fetchBans();
		if (!bannedppl.find((user) => user.user.id === id)) return message.reply(`user is not a valid banned user`);
		message.guild.members.unban(id);
    	message.channel.send(`the user were unbanned`);
	}
};
