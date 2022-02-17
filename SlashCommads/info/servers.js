const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "servers",
    data: {
        name: 'servers',
        description: 'Ottenere i server in cui è il bot'
    },
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    async execute(client, interaction, args) {
        
        let servers = client.guilds.cache.map(g => `\`\`\`${g.name} - ${g.id}, \n\`\`\``).join(' ')
        let serverSize = client.guilds.cache.size

        let embed = new MessageEmbed()
        .setTitle(`${serverSize} servers!`)
        .setDescription(`${servers}`)
        .setColor(client.config.rosaRGB)
        .setTimestamp()

        interaction.reply({ embeds: [embed] })
    },
};