const { Client, Collection } = require("discord.js");

const config = require('./config.json')
const fs = require('fs')
const client = new Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"],
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

const commandsFolder = fs.readdirSync("./SlashCommads")
for (const folder of commandsFolder) {
const commandsFiles = fs.readdirSync(`./SlashCommads/${folder}`).filter(file => file.endsWith(".js"));
for (const file of commandsFiles) {
    const command = require(`./SlashCommads/${folder}/${file}`);
    client.slashCommands.set(command.name, command);
}
}

client.on("ready", () => {
    setInterval(() => {
        client.guilds.cache.forEach(guild => {
            client.slashCommands.forEach(command => {
                guild.commands.create(command.data)
            })
        })
    }, 60000);
})

client.on("interactionCreate", interaction => {
    if (!interaction.isCommand()) return

    const command = client.slashCommands.get(interaction.commandName)
    if (!command) return

    command.execute(client, interaction )
})

//process.on("uncaughtException", err => { client.channels.cache.get('937426329895333929').send(`\`\`\`js\n${err.stack.toString()}\`\`\``) })
//process.on("unhandledRejection", err => { client.channels.cache.get('937426329895333929').send(`\`\`\`js\n${err.stack.toString()}\`\`\``) })

client.login(config.token);