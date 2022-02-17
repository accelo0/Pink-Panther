const Genius = require("genius-lyrics");
const ClientG = new Genius.Client();

const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "lyrics",
    data: {
        name: 'lyrics',
        description: 'Ottenere il testo di una canzone',
        options: [
            {
                name: 'canzone',
                description: 'Ottenere la canzone',
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
        
        let song = interaction.options.getString('canzone')

        const searches = await ClientG.songs.search(`${song}`);
        const firstSong = searches[0];
        const lyrics = await firstSong.lyrics();

        let embed = new MessageEmbed()
        .setAuthor({ name: firstSong.fullTitle, url: firstSong.url})
        .setThumbnail(firstSong.thumbnail)
        .setColor(client.config.rosaRGB)
        .setDescription(lyrics)

        interaction.reply({ embeds: [embed] })

    },
};