module.exports = {
	name: 'ann',
	description: 'announcement',
	execute(message, client) {
        const args = message.content.slice("or ".length).trim().split(/ +/);
		const pre = args.join(" ").toLowerCase();
		const context = pre
		const channel = client.channels.cache.find(ch => ch.id === '828358344413937675');
		channel.send(context);
	},
};