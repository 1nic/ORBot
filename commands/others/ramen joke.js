const {MessageAttachment} = require('discord.js');

module.exports = {
    name: 'ramen joke',
    run: async(client, message, args) => {
        const vido = new MessageAttachment('https://cdn.discordapp.com/attachments/827255229967237133/839522791774224394/video0.mp4')
        message.channel.send(vido)
    }
}