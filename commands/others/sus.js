const {MessageAttachment} = require('discord.js');

module.exports = {
    name: 'sus',
    run: async(client, message, args) => {
        const vido = new MessageAttachment('https://cdn.discordapp.com/attachments/832734989036421140/836339599713370203/john_mama.mp4')
        message.channel.send(vido)
    }
}