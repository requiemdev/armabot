const Discord = require("discord.js")


module.exports = {
    name: "remove",
    aliases: ["notify", "notif"],
    cooldown: 5,
    execute: async (client, message, args) => {
        if(message.channel.type === 'dm') return 
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you do not have the correct permissions to use this command!")
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("I don't have permission to do that!")

        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        if (!target) return message.channel.send("Please mention a person to notify.")

        const dmMsg = new Discord.MessageEmbed()
            .setTitle("Your Message Was Removed From BOIS ArmA")
            .setDescription("A message / post that you have sent, has been deemed against server rules. It has been removed. An admin may contact you, if it is required.")
            .setColor("BLACK")
            .setTimestamp()
        message.channel.send(`Successfully notified **${target.user.tag}**`)
        target.send(dmMsg)

    }
}