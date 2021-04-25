const {MessageAttachment} = require('discord.js');
const fs = require('fs')

module.exports = {
    name: 'send',
    run: async(client, message, args) => {
        const file = fs.readFileSync(path.join(__dirname, 'gay.png'));
        const image = new MessageAttachment(file);
        message.reply(text, image)
    }
}
