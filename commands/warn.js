const Discord = require("discord.js")


module.exports = {
    name: "warn",
    cooldown: 5,
    execute: async (client, message, args) => {
        if(message.channel.type === 'dm') return 
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you do not have the correct permissions to use this command!")
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply("I don't have permission to do that!")

        let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        if (!target) return message.channel.send("Please mention a person to warn.")

        const warnMessage = new Discord.MessageEmbed()
                .setTitle("Warned User")
                .setThumbnail(target.user.displayAvatarURL())
                .addField('User Warned', target)
                .addField('Warned By', message.author)
                .setFooter('Time Warned', client.user.displayAvatarURL())
                .setTimestamp()
                .setColor('RED')

        const dmMsg = new Discord.MessageEmbed()
            .setTitle("You Have Been Warned in BOIS ArmA")
            .addField("Warn Message:", "This is an automated message being sent due to a violation of a rule / rules. An admin may contact you, if it is required.")
            .addField('Warned By:', message.author)
            .setColor("BLACK")
            .setTimestamp()

        client.channels.cache.get('929651634882109450').send(warnMessage)
        message.channel.send(`Successfully warned **${target.user.tag}**, check <#929651634882109450> for logs.`)
        target.send(dmMsg)

    }
}