module.exports = {
	name: 'ann',
	run: async(client, message, args) => {
		const context = args[0];
		const channel = client.channels.cache.find(ch => ch.id === '828358344413937675');
		channel.send(context);
	}
};