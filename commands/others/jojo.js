const {MessageAttachment} = require('discord.js')

const vidos = [
    'https://cdn.discordapp.com/attachments/828373408504741888/836381360108077126/video0-6-1.mp4'
]

module.exports = {
    name: 'jojo',
    run: async(client, message, args) => {
        const randomval = Math.floor(Math.random() * vidos.length)
        const vido = new MessageAttachment(vidos[randomval]);
        message.channel.send(vido)
    }
}