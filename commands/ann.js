module.exports = {
	name: 'ann',
	run: async(client, message, args) => {
		const context = args[0];
		if (!context) return message.reply('do it again but this time write what you want to announce')
		const channel = client.channels.cache.find(ch => ch.id === '828358344413937675');
		channel.send(context);
	}
};