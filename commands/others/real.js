module.exports = {
    name: 'real',
    run: async(client, message, args) => {
       if (args.find(v, v === 'real')) return console.log('REAL');
    }
}