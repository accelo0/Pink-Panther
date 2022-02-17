const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "say",
    data: {
        name: 'say',
        description: 'Far ripetere qualcosa al bot',
        options: [
            {
                name: 'testo',
                description: 'Il testo da ripetere',
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

        let testo = interaction.options.getString('testo')
        interaction.reply({ content: `${testo}`})
        
    },
};