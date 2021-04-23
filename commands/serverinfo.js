const {Client, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: 'serverinfo',
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .setColor('RANDOM')
        .addField(`${message.guild.name}'s general info`, [
            `Name: ${message.guild.name}`,
            `ID: ${message.guild.id}`,
            `Ownership: ${message.guild.owner}`,
        ])
        .addField(`${message.guild.name}'s numbers info`, [
            `Members: ${message.guild.name}`,
            `Roles: ${message.guild.roles.cache.size}`,
            `Channels: ${message.guild.channels.cache.size}`,
            `Emojis: ${message.guild.emojis.cache.size}`,
        ])
        .addField('Others:' [
            `Boost Tier: Tier ${message.guild.premiumTier}`
        ])
        `Boosts: ${message.guild.premiumSubscriptionCount || 'None'}`
        message.channel.send({embed})
    }
}