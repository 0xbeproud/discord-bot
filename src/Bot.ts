import { Client } from "discord.js";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.DISCORD_BOT_TOKEN

const client = new Client({
    intents: [
    ]
});

ready(client)
interactionCreate(client);

client.login(token)
console.log("Bot is starting...");

