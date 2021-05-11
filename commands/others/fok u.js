const {MessageAttachment} = require('discord.js');

module.exports = {
    name: "fok u",
    run: async(client, message, args) => {
        const chance = Math.floor(Math.random() * 100)

        if (chance === 1){
            const vido = new MessageAttachment('https://cdn.discordapp.com/attachments/827255229967237133/841824256945422368/video0.mp4')
            message.reply(vido)
        }
    }

}
