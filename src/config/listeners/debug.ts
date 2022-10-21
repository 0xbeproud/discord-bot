import {Client} from "discord.js";

export default (client: Client): void => {
    client.on("debug", async (info) => {
        console.log(`debug: ${info}`);
    });
};