const { Message, Client, MessageAttachment } = require("discord.js");
const Canvas = require("canvas");
const { registerFont } = require('canvas')
const config = require('../../config.json');

module.exports = {
    name: "canvas",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        registerFont('././Pacifico-Regular.ttf', { family: 'Varela Round'})
        const canvas = Canvas.createCanvas(670, 400);
		const context = canvas.getContext('2d');



		const background = await Canvas.loadImage('https://i.postimg.cc/7ZjvwwVD/pantera.png')
		context.drawImage(background, 25, 25, canvas.width, canvas.height)

		context.font = '44px "Varela Round"';
		context.fillStyle = '#0a0a0a';
		context.fillText(`Benvenuto\n${message.author.tag}!`, 30, 300)

		context.beginPath();
		context.arc(125, 125, 100, 0, Math.PI * 2, true);
		context.closePath();
		context.clip();

		const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));
		context.drawImage(avatar, 25, 25, 200, 200);

		const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');
        message.channel.send({ files: [attachment]})
    },
};