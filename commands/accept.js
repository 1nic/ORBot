module.exports = {
    name: 'concordar',
    run: async(client, message, args) => {
        await message.channel.bulkDelete(1)
        .catch(error => console.log(error));
        message.channel.send('true dat');
    }
}