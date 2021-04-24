const {Client, Message, MessageEmbed} = require('discord.js');

const poss = [
    '1',
    '2',
    '3'
]

module.exports = {
    name: 'send',
    run: async(message) => {
        const max = 3
        const rand = Math.floor(Math.random() * max);
        const val = poss.find(value => value = rand);
        if (!message.content == 'nic is gay') return message.reply(val);
        message.reply('no');
    }
}