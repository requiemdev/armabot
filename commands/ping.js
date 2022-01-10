const Discord = require("discord.js")

module.exports = {
    name: "commands",
    aliases: ["cmds"],
    cooldown: 3,
    execute: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Commands")
            .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(", "))
            .setTimestamp()
            .setColor("WHITE")
        message.channel.send(embed)
    }
}