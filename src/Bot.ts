import {Client, GatewayIntentBits} from "discord.js"
import ready from "./config/listeners/ready";
import interactionCreate from "./config/listeners/interactionCreate";
import disconnect from "./config/listeners/disconnect";
import error from "./config/listeners/error";
import guildMemberAvailable from "./config/listeners/guildMemberAvailable";
import presenceUpdate from "./config/listeners/presenceUpdate";
import messageCreate from "./config/listeners/messageCreate";
import guildCreate from "./config/listeners/guildCreate";
import guildDelete from "./config/listeners/guildDelete";
import guildMemberAdd from "./config/listeners/guildMemberAdd";
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.DISCORD_BOT_TOKEN

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.MessageContent,
    ]
});

// debug(client)
ready(client)

interactionCreate(client)

messageCreate(client)

guildCreate(client)
guildDelete(client)
guildMemberAdd(client)
guildMemberAvailable(client)

presenceUpdate(client)

error(client)
disconnect(client)

client.login(token)
console.log("Bot is starting...");

