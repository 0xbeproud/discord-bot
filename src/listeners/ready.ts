import {Client} from "discord.js";
import {Commands} from "../Commands";

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }

        await client.application.commands.set(Commands)

        // client.user.setStatus(PresenceStatusData(), {type: "WATCHING"})

        console.log(`${client.user.username} is online`);
        console.log(`I am ready! Logged in as ${client.user.tag}!`);

        // const guilds = client.guilds.cache.map(guild => guild);
        // console.log(guilds)

        // guilds.forEach(async guild => {
        //     console.log(`==> ${guild.id}`)
        //     const channels = await guild.channels.fetch()
        //     channels.filter(channel => {
        //         return channel.type === 'text';
        //     })
        // })

        client.user.setActivity("hello");
    });
};