const {Client, Message, MessageEmbed} = require('discord.js');

const poss = [
    'just stop plz',
    'stfu',
    'no u',
    'no.'
]

module.exports = {
    name: 'send',
    run: async(message) => {
        const max = 3
        const rand = Math.floor(Math.random() * max)
        if (!message.content == 'nic is gay') return message.channel.send(poss[rand]);
        message.channel.send(poss[4]);
    }
}