const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    description: "yeah",
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('Omniversal Revenge bot')
        .setColor('RED')
        .setAuthor('prefix: or')
        .setThumbnail('https://cdn.discordapp.com/attachments/835130113599209473/835836212714668052/Omniversal_Administrative.png')
        .addField('Announcement', [
            'CmdName = ann'
        ])
        .addField('Avatar', [
            'CmdName = av'
        ])
        .addField('Moderation', [
            'CmdName = kick',
            'CmdName = ban'
        ])
        .addField('Others', [
            'CmdName = clear',
        ])
        message.channel.send(embed);
    }
}