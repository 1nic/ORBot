const {Client, Message, MessageEmbed} = require('discord.js');

const poss = [
    'stfu',
    'stop it plz',
    'are you sure about that'
]

module.exports = {
    name: 'send',
    run: async(message, text) => {
       message.channel.send(text, {files: ['gay.png']})
    }
}
