module.exports = {
    name: "nigga",
    run: async(client, message, args) => {
        message.delete()
        message.channel.send('no')
    }
}