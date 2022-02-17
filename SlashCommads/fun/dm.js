const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "dm",
    data: {
        name: 'dm',
        description: 'Scrivi un messaggio anonimo ad un utente',
        options: [
            {
                name: 'utente',
                description: 'Ottenre l\'utente',
                type: 'USER',
                required: true
            },
            {
                name: 'testo',
                description: 'Il testo da inviare',
                type: 'STRING',
                required: true
            }
        ]
    },
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    async execute(client, interaction, args) {
       
        let user = interaction.options.getUser('utente');
        let testo = interaction.options.getString('testo')

        let user2 = interaction.guild.members.cache.get(user.id)

        interaction.reply({ content: `Messagio a **${user.username}** inviato!`, ephemeral: true })
        user2.send(`${testo}`)
        .catch((e) => {
            return interaction.editReply({ content: `**${user.username}** ha i dms chiusi!`, ephemeral: true })
        })
    },
};