const { Message, Client, MessageEmbed, MessageActionRow, MessageButton, Permissions } = require("discord.js");
const config = require('../../config.json')

module.exports = {
    name: "buttons",
    aliases: ['bt'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.react('❌')
        let embed = new MessageEmbed()
        .setAuthor({ name: `ROLES OF THE SERVER`, iconURL: message.member.guild.iconURL()})
        .setDescription('Choose your roles')
        .addField('Roles:', `> <:pinkPanther:937439028897271828> - <@&937438342604279869>\n> 📢 - <@&937438224752713839>`)
        .setColor(config.rosaRGB)
        .setFooter('By accel0 with hate \<3', 'https://cdn.discordapp.com/avatars/931529194972794900/7019e3fc4bcce00565daf0b797b312fa.png?size=1024')

        let row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('<:pinkPanther:937439028897271828>')
            .setCustomId('buttonPinkPanther')
        )
        .addComponents(
            new MessageButton()
            .setStyle('SECONDARY')
            .setEmoji('📢')
            .setCustomId('buttonAnnouncements')
        )

        message.channel.send({ embeds: [embed], components: [row]})
    },
};