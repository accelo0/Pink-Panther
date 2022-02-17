const { MessageEmbed, Message, Client, Permissions, MessageButton, MessageActionRow } = require('discord.js');
const { inspect } = require('util')
const config = require('../../config.json') 
const moment = require('moment')
const os = require('os')

module.exports = {
    name: 'sussy',
    description: 'evaluates any string as javascript code and executes it.',
    aliases: ['e'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        if(message.guild.id == '937423967298420786') { 
        if (!message.member.id == '931529194972794900' || !message.member.id == '542696612573609992' || !message.member.id == '601308178482855956' || !message.member.id == '819996934781534278' ) return
        
        const command = args.join(" ");
        if(!command) {
            let noEval = new MessageEmbed()
            .setTitle('Scrivi un comando eval!')
            .setColor(config.rosaRGB)
            await message.author.send({ embeds : [noEval] })
            .catch((e) => { })
            return message.delete()
        } 

        try {
            const evaled = eval(command)
            const embed = new MessageEmbed()
            .setColor(config.rosaRGB)
            .setTitle('Risultato:')
            .addField(`**Tipo:**`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
            .addField("**Tempo di esecuzione:**", `\`\`\`yaml\n${Date.now()-message.createdTimestamp} ms\`\`\``, true)
            .addField("**Entrata**", `\`\`\`js\n${command}\`\`\``)
            .addField("**Uscita**", `\`\`\`js\n${inspect(evaled, {depth: 0})} \`\`\``)
            message.author.send({ embeds: [embed] })
            .catch((e) => { })
            return message.delete()
        }

        catch (error) {
            const embedfailure = new MessageEmbed()
            .setColor(config.rosaRGB)
            .addField(`Entrance`, `\`\`\`js\n${command}\`\`\``)
            .addField(`Error`, `\`\`\`js\n${error}\`\`\` `)

            message.author.send({ embeds: [embedfailure] })
            .catch((e) => { })
            return message.delete()
        }
    } else {

        if (!message.member.id == '931529194972794900' || !message.member.id == '542696612573609992' || !message.member.id == '601308178482855956' || !message.member.id == '819996934781534278' ) return
        
        const command = args.join(" ");
        if(!command) {
            let noEval = new MessageEmbed()
            .setTitle('Scrivi un comando eval!')
            .setColor(config.rosaRGB)
            await message.author.send({ embeds : [noEval] })
            .catch((e) => { })
            return 
        } 

        try {
            const evaled = eval(command)
            const embed = new MessageEmbed()
            .setColor(config.rosaRGB)
            .setTitle('Risultato:')
            .addField(`**Tipo:**`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
            .addField("**Tempo di esecuzione:**", `\`\`\`yaml\n${Date.now()-message.createdTimestamp} ms\`\`\``, true)
            .addField("**Entrata**", `\`\`\`js\n${command}\`\`\``)
            .addField("**Uscita**", `\`\`\`js\n${inspect(evaled, {depth: 0})} \`\`\``)
            message.author.send({ embeds: [embed] })
            .catch((e) => { })
            return 
        }

        catch (error) {
            const embedfailure = new MessageEmbed()
            .setColor(config.rosaRGB)
            .addField(`Entrance`, `\`\`\`js\n${command}\`\`\``)
            .addField(`Error`, `\`\`\`js\n${error}\`\`\` `)

            message.author.send({ embeds: [embedfailure] })
            .catch((e) => { })
            return 
        }

    }
}}
