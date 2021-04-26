const {MessageAttachment} = require('discord.js')

const vidos = [
    'https://cdn.discordapp.com/attachments/698665018056638604/836355810501853284/isnt_this_shit_dead.mp4',
    'https://cdn.discordapp.com/attachments/728614774597877841/836382490284916747/imposter.png',
    'https://cdn.discordapp.com/attachments/835130113599209473/836383389946085437/funny_haha_pls_someone_kill_this_meme.jpg',
    'https://cdn.discordapp.com/attachments/835130113599209473/836383932308127774/AMOGUS.mp4',
    'https://cdn.discordapp.com/attachments/835130113599209473/836384070463782972/amogus.jpg',
    'https://cdn.discordapp.com/attachments/835130113599209473/836384189603512370/kill.png',
    'https://cdn.discordapp.com/attachments/828684796980887564/836384929662107668/Video_7783_www.reddit.watch.mp4',
    'https://cdn.discordapp.com/attachments/828684796980887564/836387118644330536/amogus720P_60FPS.mp4'
]

module.exports = {
    name: 'sus',
    run: async(client, message, args) => {
        const randomval = Math.floor(Math.random() * vidos.length)
        const vido = new MessageAttachment(vidos[randomval]);
        message.channel.send(vido)
    }
}