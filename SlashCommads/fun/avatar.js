const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    data: {
        name: 'avatar',
        description: 'Ottenere l\'avatar di un utente',
        options: [
            {
                name: 'utente',
                description: 'Inserire l\'utente',
                type: 'USER',
                required: true
            }
        ],
    },
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    async execute(client, interaction, args) {
        
        let interatcionUser = interaction.options.getUser('utente')
        let userAvatar = interaction.guild.members.cache.get(interatcionUser.id).displayAvatarURL({ size: 1024, format: 'png', dynamic: true })

        let embed = new MessageEmbed()
        .setTitle(`Avatar di __${interatcionUser.username}__`)
        .setImage(userAvatar)
        .setColor(client.config.rosaRGB)

        interaction.reply({ embeds: [embed] })
    }
};