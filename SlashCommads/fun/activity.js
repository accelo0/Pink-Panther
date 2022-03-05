const { Client, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");
const { DiscordTogether } = require('discord-together');

module.exports = {
    name: "activity",
    data: {
        name: 'activity',
        description: 'Crea un\'attività vocale',
        options: [
            {
                name: 'activity',
                description: 'Inserire l\'attività da fare',
                required: true,
                type: 'STRING',
                choices: [
                    { name: 'Watch Togheter (YouTube)', value: 'youtube'},
                    { name: 'Betrayal', value: 'betrayal'},
                    { name: 'Fishington', value: 'fishing'},  
                    { name: 'Doodle Crew', value: 'doodlecrew'},
                    { name: 'Word Snack', value: 'wordsnack'}
                ]
            }, 
            {
                name: 'channel',
                description: 'Inserire il canale vocale',
                type: 'CHANNEL',
                channelTypes: ['GUILD_VOICE'],
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

        client.discordTogether = new DiscordTogether(client);
        let choice = interaction.options.getString('activity');
        let channel = interaction.options.getChannel('channel')

        let row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel('Rendi visibile a tutti')
            .setStyle('SECONDARY')
            .setEmoji('🌐')
            .setCustomId('showEveryone')
        )

        if(choice == 'youtube') {
            client.discordTogether.createTogetherCode( channel.id, 'youtube')
            .then(async invite => { 
                return interaction.reply({ content: `[Clicca qui per attivare **Watch Togheter (YouTube)** in \`${channel.name}\`](${invite.code})`, components: [row], ephemeral: true})
            });
        }

        if(choice == 'betrayal') {
            client.discordTogether.createTogetherCode( channel.id, 'betrayal')
            .then(async invite => { 
                return interaction.reply({ content: `[Clicca qui per attivare **Betrayal.io** in \`${channel.name}\`](${invite.code})`, components: [row], ephemeral: true})
            });
        }

        if(choice == 'fishing') {
            client.discordTogether.createTogetherCode( channel.id, 'fishing')
            .then(async invite => {
                return interaction.reply({ content: `[Clicca qui per attivare **Fishington** in \`${channel.name}\`](${invite.code})`, components: [row], ephemeral: true})
            });
        }

        if(choice == 'doodlecrew') {
            client.discordTogether.createTogetherCode( channel.id, 'doodlecrew')
            .then(async invite => {
                return interaction.reply({ content: `[Clicca qui per attivare **Doddle Crew** in \`${channel.name}\`](${invite.code})`, components: [row], ephemeral: true})
            });
        }

        if( choice == 'wordsnack') { 
            client.discordTogether.createTogetherCode( channel.id, 'wordsnack')
            .then(async invite => {
                return interaction.reply({ content: `[Clicca qui per attivare **Word Snack** in \`${channel.name}\`](${invite.code})`, components: [row], ephemeral: true})
            });
        }
    },
};