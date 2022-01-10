const Discord = require('discord.js')

module.exports = {
    name: "purge",
    aliases: ["clear"],
    cooldown: 3,
    execute: async (client, message, args) => {
        if(message.channel.type === 'dm') return 
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permission to use this command.")
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I do not have the permissions to use this command.")

        let amount = parseInt(args[0])
        if (amount > 100 || amount < 0) return message.channel.send("Please use enter an amount between 1 and 100")
        if (!amount) return message.channel.send("Please enter the amount of messages you want purged.")

        message.channel.bulkDelete(amount).catch(e => {
            message.channel.send(":x: Due to Discord limitations, I cannot delete messages older than 14 days")
        })

        const embed = new Discord.MessageEmbed()
            .setTitle("Purged Messages")
            .addField('Action Carried Out By', message.author)
            .addField('Messages Purged', amount)
            .setFooter('BOIS ArmA', client.user.displayAvatarURL())
            .setTimestamp()
            .setColor('RED')

        client.channels.cache.get('929651634882109450').send(embed)
        message.channel.send(`Successfully deleted **${amount}** messages.`)


    }
}