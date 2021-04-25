module.exports = {
    name: 'real',
    run: async(client, message, args) => {
       if (args.indexOf('real') > -1) return console.log('yeaj')
    }
}