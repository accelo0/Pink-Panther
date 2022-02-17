const client = require("../index");

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isButton()) return

    if(interaction.customId == 'buttonPinkPanther') {
        if (interaction.member.roles.cache.some(role => role.id == '937438342604279869')) {
            interaction.reply({content: `Ti ho tolto il ruolo <@&937438342604279869> ` , ephemeral: true})                    
            interaction.member.roles.remove('937438342604279869')
        }
        else{
            interaction.member.roles.add('937438342604279869')
            await interaction.reply({ content: `Ti ho aggiunto il ruolo <@&937438342604279869> `, ephemeral: true })
        }
    }

    if(interaction.customId == 'buttonAnnouncements') {
        if (interaction.member.roles.cache.some(role => role.id == '937438224752713839')) {
            interaction.reply({content: `Ti ho tolto il ruolo <@&937438224752713839> ` , ephemeral: true})                    
            interaction.member.roles.remove('937438224752713839')
        }
        else{
            interaction.member.roles.add('937438224752713839')
            await interaction.reply({ content: `Ti ho aggiunto il ruolo <@&937438224752713839> `, ephemeral: true })
        }
    }
})