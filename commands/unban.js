const {MessageEmbed} = require('discord.js')

module.exports = {
	name: 'unban',
	description: 'unban',
	run: async(client, message, args) => {
		if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply('go get ban perms and then do the command again, kiddo.');
		const id = args[0];
		if (!id) return message.reply('you gotta use the user id, i cant unban people by usernames or else.')
		const bannedppl = await message.guild.fetchBans();
		if (!bannedppl.find((user) => user.user.id === id)) return message.reply(`user is not a valid banned user`);
		message.guild.members.unban(id);
		const reason = args.slice(1).join(' ') || 'none';
		const channel = client.channels.cache.find(ch => ch.id === '834078274770042921');
		const embedMes = new MessageEmbed()
		.setTitle(`${message.author.tag} unbanned ${member.user.tag}`)
		.setColor('FF0000')
		.setThumbnail(message.author.displayAvatarURL({format : 'png', dynamic : true}))
		
		.addField('Reason: ', [
			reason
		])
    	channel.send(embedMes);
		message.channel.send("The user were unbanned.")
	}
};
