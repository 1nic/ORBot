const {MessageAttachment} = require('discord.js');

module.exports = {
    name: 'this game sucks',
    run: async(client, message, args) => {
        const vido = new MessageAttachment('https://cdn.discordapp.com/attachments/827255229967237133/841824256945422368/video0.mp4')
        message.channel.send(`${message.author.id} ${vido}`)
    }
}