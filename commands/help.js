const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    description: "yeah",
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('Omniversal Revenge Bot')
        .setColor('RED')
        .setAuthor('prefix: or')
        .setThumbnail('https://cdn.discordapp.com/attachments/835130113599209473/835836212714668052/Omniversal_Administrative.png')
        .addField('Announcement', [
            'ann: Announce something in <#828358344413937675>'
        ])
        .addField('Avatar', [
            'av: send the user avatar'
        ])
        .addField('Moderation', [
            'kick: = kicks the user',
            'ban: bans the user'
        ])
        .addField('Others', [
            'clear: clear the amount of messages which the user sent',
        ])
        message.channel.send(embed);
    }
}