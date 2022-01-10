const cooldown = new Map();

module.exports = (Discord, client, message) => {

    const prefix = '!';

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))

    if(!command) return

    if(!cooldown.has(command.name)){
        cooldown.set(command.name, new Discord.Collection());
    }

    const currentTime = Date.now();
    const timeStamps = cooldown.get(command.name)
    const cooldownAmount = (command.cooldown) * 1000;

    if(timeStamps.has(message.author.id)) {
        const expirationTime = timeStamps.get(message.author.id) + cooldownAmount;

        if (currentTime < expirationTime) {
            const timeLeft = (expirationTime - currentTime) /1000;

            return message.reply(`**please wait ${timeLeft.toFixed(1)} seconds before using this command again!**`)
        }
    }

    timeStamps.set(message.author.id, currentTime)
    setTimeout(() => timeStamps.delete(message.author.id), cooldownAmount);

    if(command) command.execute(client, message, args, Discord);
}