const { MessageEmbed, MessageAttachment } = require('discord.js');
const config = require('../config.json');
const client = require("../index.js");
const Canvas = require("canvas");
const { registerFont } = require('canvas')

client.on('guildMemberAdd', async (member) => {
    if(member.guild.id == '937423967298420786') {

    registerFont('././Pacifico-Regular.ttf', { family: 'Varela Round'})
    const canvas = Canvas.createCanvas(670, 400);
    const context = canvas.getContext('2d');



    const background = await Canvas.loadImage('https://i.postimg.cc/7ZjvwwVD/pantera.png')
    context.drawImage(background, 25, 25, canvas.width, canvas.height)

    context.font = '44px "Varela Round"';
    context.fillStyle = '#FFC0CB';
    context.fillText(`Benvenuto\n${member.user.tag}!`, 30, 300)

    context.beginPath();
    context.arc(125, 125, 100, 0, Math.PI * 2, true);
    context.closePath();
    context.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    context.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome-canva.png');

    let embed = new MessageEmbed()
    .setTitle('Nuovo Membro entrato!')
    .setDescription(`Ciao ${member.toString()} benvenuto in \`${member.guild.name}\``)
    .setThumbnail(member.user.displayAvatarURL())
    .setImage('attachment://welcome-canva.png')
    .setColor(config.rosaRGB)

    let welcomeCh = client.channels.cache.get('937426318730092624')
    welcomeCh.send({embeds: [embed], files: [new MessageAttachment(canvas.toBuffer(), "welcome-canva.png")]})
    member.roles.add('937426308680523777')
    }
})