module.exports = {
    name : "msgc",
    description : "it is a message but a custom one",
    execute(message, obj){
        message.channel.send(obj);
    }
}