import {Client} from "discord.js";

export default (client: Client): void => {
    client.on("messageCreate", async (message) => {
        console.log(`message is created -> ${message}`);
    });
};