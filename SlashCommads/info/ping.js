const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    data: {
        name: 'ping',
        description: 'Ottenere il ping del bot'
    },
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    async execute(client, interaction, args) {
        interaction.reply({ content: `${client.ws.ping}ms!` });
    },
};