const { MessageEmbed } = require("discord.js");
const client = require("../index");
const config = require('../config.json')
const moment = require('moment')

client.on("ready", () => { 
    console.log(`${client.user.tag} is up and ready to go!`);
    client.channels.cache.get('899618964471156760').send({ embeds: [new MessageEmbed()
        .setTitle(`<:Sakura_Celebrate:936947828197036072> ${client.user.username} online `)
        .setColor(config.rosaRGB)
        .setDescription("```" + moment(new Date().getTime()).format("ddd DD MMM, HH:mm:ss") + "```")
    ]})
    client.user.setStatus('idle')
    client.user.setActivity('The Pink Panther', { type: 'WATCHING' });

});
