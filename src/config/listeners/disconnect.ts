import {Client} from "discord.js";

export default (client: Client): void => {
    client.on("disconnect", async () => {
        console.log(`${client.user?.username} is disconnected`);
    });
};