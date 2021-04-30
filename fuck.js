const disc = require('discord.js')
const bot = new disc.Client()

bot.on('ready', (message) => {
    client.user.setPresence({
		activity: {
			name: 'Ben 10: Omniversal Revenge',
			type: 'PLAYING'
		},
		status: 'dnd'
	})
})

bot.login('CCOFOFXUpgf7yEntul5ockCA.OFk6Ph.lmsA54bT0Fux1IpsYvey5XuZk04')