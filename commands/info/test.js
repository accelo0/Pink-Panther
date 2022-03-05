const { Message, Client } = require("discord.js");

module.exports = {
    name: "test",
    aliases: ['t'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
         
        let ids = [
            "931529194972794900",
        ]

        if(message.author.id == ids) message.reply('ye')
    },
};