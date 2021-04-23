module.exports = {
	name: 'kick',
	description: 'kick',
	execute(message, vic) {
		vic.kick({
            reason: "joe mama"
        });
        message.channel.send(`${vic} were kicked.`);
	},
};