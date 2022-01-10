const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "train",
    aliases: ["request", "rq"],
    cooldown: 10,
    execute: async (client, message, args) => {
        switch (args.slice(0).join(" ").toLowerCase()) {
            case 'medic':
                const embed1 = new MessageEmbed()
                    .setColor("RED")
                    .setTitle("Training Request Sent!")
                    .setDescription(`<@${message.author.id}> has requested training for the **Medic Trainer** role`)
                    .setFooter("BOIS ArmA", client.user.displayAvatarURL())
                    .setTimestamp()
                message.channel.send("<@&929655665000067082>", embed1)
                break;
            case 'rotary pilot':
                const embed2 = new MessageEmbed()
                    .setColor("ORANGE")
                    .setTitle("Training Request Sent!")
                    .setDescription(`<@${message.author.id}> has requested training for the **Rotary Pilot Trainer** role`)
                    .setFooter("BOIS ArmA", client.user.displayAvatarURL())
                    .setTimestamp()
                message.channel.send("<@&929655877810675752>", embed2)
                break;
            case 'fixed wing pilot':
                const embed3 = new MessageEmbed()
                    .setColor("YELLOW")
                    .setTitle("Training Request Sent!")
                    .setDescription(`<@${message.author.id}> has requested training for the **Fixed Wing Pilot Trainer** role`)
                    .setFooter("BOIS ArmA", client.user.displayAvatarURL())
                    .setTimestamp()
                message.channel.send("<@&929655942801424424>", embed3)
                break;
            
            case 'operator':
                const embed4 = new MessageEmbed()
                    .setColor("GREEN")
                    .setTitle("Training Request Sent!")
                    .setDescription(`<@${message.author.id}> has requested training for the **Operator Trainer** role`)
                    .setFooter("BOIS ArmA", client.user.displayAvatarURL())
                    .setTimestamp()
                message.channel.send("<@&929655983809110056>", embed4)
                break;
            case 'crewman':
                const embed5 = new MessageEmbed()
                    .setColor("BLUE")
                    .setTitle("Training Request Sent!")
                    .setDescription(`<@${message.author.id}> has requested training for the **Crewman Trainer** role`)
                    .setFooter("BOIS ArmA", client.user.displayAvatarURL())
                    .setTimestamp()
                message.channel.send("<@&929656026435829760>", embed5)
                break;
            case 'marksman':
                const embed6 = new MessageEmbed()
                    .setColor("PURPLE")
                    .setTitle("Training Request Sent!")
                    .setDescription(`<@${message.author.id}> has requested training for the **Marksman Trainer** role`)
                    .setFooter("BOIS ArmA", client.user.displayAvatarURL())
                    .setTimestamp()
                message.channel.send("<@&929656093859274793>", embed6)
                break;
            case 'help':
                const embed7 = new MessageEmbed()
                    .setColor("PURPLE")
                    .setTitle("Training Request Help Page")
                    .setDescription(`**Basic Usage**\nPlease use the command !train or !request, followed by the role you wish to request.\n\n**Example:**\n**!train medic** will send out a request to all with the **Medic Trainer** role.\n\nThe list of current roles are:\n**Medic, Rotary Pilot, Fixed Wing Pilot, Operator, Crewman, and Marksman**`)
                    .setFooter("BOIS ArmA", client.user.displayAvatarURL())
                    .setTimestamp()
                message.channel.send(embed7)
                break;
            default: 
                message.channel.send("Please supply the role you need training for.")
        }
    }
}