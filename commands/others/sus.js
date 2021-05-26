const {MessageAttachment} = require('discord.js')

const vidos = [
    'https://cdn.discordapp.com/attachments/826581024321962055/836254588373565530/SUS.mp4',
    'https://cdn.discordapp.com/attachments/826581024321962055/837006779904426094/A_Human_A_monster_Amongus_--360P.mp4'
]

module.exports = {
    name: 'sus',
    run: async(client, message, args) => {
        const randomval = Math.floor(Math.random() * vidos.length)
        const vido = new MessageAttachment(vidos[randomval]);
        message.channel.send(vido)
    }
}