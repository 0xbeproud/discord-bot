import {Client} from "discord.js";

export default (client: Client): void => {
    client.on("presenceUpdate", async (oldMember, newMember) => {
        console.log(`a guild member's presence changes: ${oldMember?.status} => ${newMember?.status}`);
    });
};