module.exports = {
	name: 'ann',
	run: async(client, messages, args) => {
		const args = message.content.slice("or ".length).trim().split(/ +/);
		const pre = args.join(" ").toLowerCase();
		const context = pre
		const channel = client.channels.cache.find(ch => ch.id === '828358344413937675');
		channel.send(context);
	}
};