const {Client, Message, MessageEmbed} = require('discord.js');

const poss = [
    'stfu',
    'stop it plz',
    'are you sure about that'
]

module.exports = {
    name: 'send',
    run: async(message) => {
        const max = 3
        const rand = Math.floor(Math.random() * max);
        if (!message.content == 'nic is gay'){
            if (rand === 1){
                message.reply(poss.find(value => value = 'stfu'));
            }
            if (rand === 2){
                message.reply(poss.find(value => value = 'stop it plz'));
            }
            if (rand === 3){
                message.reply(poss.find(value => value = 'are you sure about that'));
            }
        }
        message.reply('no');
    }
}