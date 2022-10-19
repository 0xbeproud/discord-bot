import {Client} from "discord.js";

export default (client: Client): void => {
    client.on("reconnecting", async () => {
        console.log(`client tries to reconnect to the WebSocket`);
    });
};