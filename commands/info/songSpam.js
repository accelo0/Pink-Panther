const { Message, Client, MessageAttachment, MessageEmbed } = require("discord.js");
const Canvas = require("canvas");
const config = require('../../config.json');

module.exports = {
    name: "spamSong",
    aliases: ['ss'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        if(message.author.id !== '931529194972794900') {
            if(message.author.id == '901858787110060112') {
                return message.reply(`DANIS non puoi spammare la canzone solo accel può..`)
            } else {
                return message.reply(`Sry **${message.author.username}** non sei nessuno per questo comando `)
            }
        }

        let parole = [
            {
                "parola": "Lui :man_tipping_hand_tone2:",
            },
            {
                "parola": "Era:man_gesturing_ok_tone2:",
            },
            {
                "parola": "un:man_in_steamy_room_tone2:",
            },
            {
                "parola": "businessman",
            },
            {
                "parola": "con",
            },
            {
                "parola": "un’idea",
            },
            {
                "parola": "in",
            },
            {
                "parola": "testa", 
            },
            {
                "parola": "a",
            },
            {
                "parola": "lei",
            },
            {
                "parola": "ballerina",
            },
            {
                "parola": "di",
            },
            {
                "parola": "jazz",
            },
            {
                "parola": "leggeva",
            },
            {
                "parola": "William Blane"
            },
            {
                "parola": "vicino",
            },
            {
                "parola": "a",
            },
            {
                "parola": "una",
            },
            {
                "parola": "finestra",
            },
            {
                "parola": "lui",
            },
            {
                "parola": "beveva",
            },
            {
                "parola": "caffè ☕️"
            }
        ]

        let channel = message.mentions.channels.first() || client.channels.cache.get(args[0])
        if(!channel) channel = message.channel;

        parole.forEach(parola => {
            client.channels.cache.get(`${channel.id}`).send(`${parola.parola}`)
        })
    },
};