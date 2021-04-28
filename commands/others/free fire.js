const {MessageAttachment} = require('discord.js')

const vidos = [
    'https://cdn.discordapp.com/attachments/728614774597877841/836403699437797416/return_monke.mp4',
    'https://cdn.discordapp.com/attachments/728614774597877841/836403710438539284/pov_willians_paramedics.mp4',
    'https://cdn.discordapp.com/attachments/728614774597877841/836403724493914122/willians_story.mp4',
    'https://cdn.discordapp.com/attachments/728614774597877841/836403745117569055/top_4_willians.mp4',
    'https://cdn.discordapp.com/attachments/728614774597877841/836404821388165130/willian_bought_a_phone.mp4'
]

module.exports = {
    name: 'monke',
    run: async(client, message, args) => {
        const randomval = Math.floor(Math.random() * vidos.length)
        const vido = new MessageAttachment(vidos[randomval]);
        message.channel.send(vido)
    }
}