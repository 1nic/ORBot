const {MessageAttachment} = require('discord.js')

const vidos = [
    'https://cdn.discordapp.com/attachments/827255229967237133/839519762165006336/video0.mp4'
]

module.exports = {
    name: 'the',
    run: async(client, message, args) => {
        const randomval = Math.floor(Math.random() * vidos.length)
        const randomnum = Math.floor(Math.random() * 100)
        if (randomnum === 1) {
            const vido = new MessageAttachment(vidos[randomval]);
            message.channel.send(vido)
        }
    }
}