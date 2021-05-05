const {MessageAttachment} = require('discord.js');

module.exports = {
    name: 'are you sure about that',
    run: async(client, message, args) => {
        const vido = new MessageAttachment('https://cdn.discordapp.com/attachments/827255229967237133/839520271261761596/video0.mp4')
        message.channel.send(vido)
    }
}