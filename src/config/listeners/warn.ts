import {Client} from "discord.js";

export default (client: Client): void => {
    client.on("warn", async (warn) => {
        console.log(`warn: ${warn}`);
    });
};