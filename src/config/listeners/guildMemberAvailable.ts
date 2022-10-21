import {Client} from "discord.js";

export default (client: Client): void => {
    client.on("guildMemberAvailable", async (member) => {
        console.log(`member becomes available in a large guild: ${member.user.tag}`);
    });
};