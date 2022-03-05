const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "user-device",
    data: {
        name: 'device',
        description: 'Ottenere il ping del bot',
        options: [
            {
                name: 'utente',
                description: 'Inserire l\'utente',
                type: 'USER',
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
        
        let utente = interaction.options.getUser('utente');
        let membro = interaction.guild.members.cache.get(utente.id);
        
        let devices = [].join(' - ') || 'NONE';
        let status = membro.presence.clientStatus;

        if(membro.user.bot) return interaction.reply({ content: `**${membro.nickname || membro.user.username}** è un bot, \nDevice: **web**`, ephemeral: true });
        if(!status) return interaction.reply({ content: `Il dispositivo di **${membro.nickname || membro.user.username}** non è disponibile`, ephemeral: true });

        if(status.desktop) {
            devices.push('desktop');
        };

        if(status.web) {
            devices.push('web');
        };

        if(status.mobile) {
            devices.push('mobile');
        };

        interaction.reply({ content: `-- DISPOSITIVI DI **${membro.nickname.toUpperCase() || membro.user.username.toUpperCase()}** -- \n**${devices}**`})

    }
};