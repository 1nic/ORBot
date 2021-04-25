const { MessageAttachment } = require("discord.js");


module.exports = {
    name: 'send',
    run: async(client, message, args) => {
        const image = new MessageAttachment('https://cdn.discordapp.com/attachments/835130113599209473/835824382756388864/gay_-_Copy.png');
        message.reply(text, image)
    }
}
