const {MessageAttachment} = require('discord.js')

const vidos = [
    'https://cdn.discordapp.com/attachments/828373408504741888/836381360108077126/video0-6-1.mp4',
    'https://cdn.discordapp.com/attachments/828684796980887564/836392699766374441/nic_is_epnic.mp4',
    'https://cdn.discordapp.com/attachments/828684796980887564/836647303036141649/images_-_2021-04-27T215650.903.jpeg'
]

module.exports = {
    name: 'jojo',
    run: async(client, message, args) => {
        const randomval = Math.floor(Math.random() * vidos.length)
        const vido = new MessageAttachment(vidos[randomval]);
        message.channel.send(vido)
    }
}