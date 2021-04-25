module.exports = {
    name: 'real',
    run: async(client, message, args) => {
       if (args.include('real')) return console.log('real bullshit right there');
    }
}