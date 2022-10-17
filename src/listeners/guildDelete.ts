import {Client, Guild} from "discord.js";

export default (client: Client): void => {
    client.on("guildDelete", async (guild: Guild) => {
        console.log(`guildDelete: ${guild.name} / ${guild.id}`);
    });
};