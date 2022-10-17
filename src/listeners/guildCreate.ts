import {Client, Guild} from "discord.js";

export default (client: Client): void => {
    client.on("guildCreate", async (guild: Guild) => {
        console.log(`guildCreate: ${guild.name} / ${guild.id}`);
    });
};