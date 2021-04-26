const {MessageAttachment} = require('discord.js')

const vidos = [
    'https://cdn.discordapp.com/attachments/698665018056638604/836355810501853284/isnt_this_shit_dead.mp4',
    'https://cdn.discordapp.com/attachments/728614774597877841/836382490284916747/imposter.png'
]

module.exports = {
    name: 'sus',
    run: async(client, message, args) => {
        const randomval = Math.floor(Math.random() * vidos.length)
        const vido = new MessageAttachment(vidos[randomval]);
        message.channel.send(vido)
    }
}