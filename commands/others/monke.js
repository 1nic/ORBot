const {MessageAttachment} = require('discord.js')

const vidos = [
    'https://cdn.discordapp.com/attachments/698665018056638604/836723009154056252/ggg.mp4'
]

module.exports = {
    name: 'free fire',
    run: async(client, message, args) => {
        const randomval = Math.floor(Math.random() * vidos.length)
        const vido = new MessageAttachment(vidos[randomval]);
        message.channel.send(vido)
    }
}