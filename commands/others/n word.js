const {MessageAttachment} = require('discord.js')

const vidos = [
    'https://cdn.discordapp.com/attachments/827255229967237133/839517407101190154/video0.mp4'
]

module.exports = {
    name: 'n word',
    run: async(client, message, args) => {
        const randomval = Math.floor(Math.random() * vidos.length)
        const vido = new MessageAttachment(vidos[randomval]);
        message.channel.send(vido)
    }
}