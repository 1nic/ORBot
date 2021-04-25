module.exports = {
    name: 'real',
    run: async(client, message, args) => {
       if (args.includes('real')) {
         console.log('should');
       }
    }
}