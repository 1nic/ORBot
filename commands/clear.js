module.exports = {
    name: 'clear',
    description: 'clear messages',
    run: async(client, message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('noob, you dont have delete message perms.');
        if (!args[0]) return message.reply('pls send da amount');
        if (isNaN(args[0])) return message.reply('numbers...');
        if (parseInt(args[0]) > 99) return message.reply('i cannot delete more than 99 messages.');
        await message.channel.bulkDelete(parseInt(args[0] + 1))
        .catch(error => console.log(error));
        message.reply(`deleted ${parseInt(args[0])} messages`)
    }
}