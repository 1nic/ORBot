module.exports = {
	name: 'ann',
	description: 'announcement',
	execute(message) {
        const args = message.content.slice("or ".length).trim().split(/ +/);
		const context = args.join(" ").toLowerCase();
		const channel = client.channels.cache.find(ch => ch.id === '828358344413937675');
		channel.send(context);
	},
};