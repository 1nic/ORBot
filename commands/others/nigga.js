module.exports = {
    name: "lala",
    run: async(client, message, args) => {
        message.delete()
        message.channel.send('no')
    }
}