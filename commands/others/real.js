module.exports = {
    name: 'real',
    run: async(client, message, args) => {
       if (args.includes('real')) return console.log('real bullshit right there');
    }
}