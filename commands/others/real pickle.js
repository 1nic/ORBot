const {MessageAttachment} = require('discord.js');

module.exports = {
    name: 'real pickle',
    run: async(client, message, args) => {
        const vido = new MessageAttachment('https://cdn.discordapp.com/attachments/827255229967237133/839526566387777586/video0.mp4')
        message.channel.send(vido)
    }
}