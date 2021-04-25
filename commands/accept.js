module.exports = {
    name: 'accept',
    run: async(client, message, args) => {
        await message.channel.bulkDelete(1)
        .catch(error => console.log(error));
        message.channel.send('true dat');
    }
}