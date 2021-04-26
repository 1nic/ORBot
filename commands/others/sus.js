const {MessageAttachment} = require('discord.js')

module.exports = {
    name: 'sus',
    run: async(client, message, args) => {
        const vido = new MessageAttachment('https://cdn.discordapp.com/attachments/698665018056638604/836355810501853284/isnt_this_shit_dead.mp4');
        message.channel.send(vido)
    }
}