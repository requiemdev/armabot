module.exports = (Discord, client, message) => {
    console.log(`${client.user.username} is Online`)
    client.user.setActivity("BOIS ArmA", { type: "Watching"})
}

