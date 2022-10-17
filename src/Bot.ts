import {Client, GatewayIntentBits} from "discord.js"
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import disconnect from "./listeners/disconnect";
import error from "./listeners/error";
import guildMemberAvailable from "./listeners/guildMemberAvailable";
import presenceUpdate from "./listeners/presenceUpdate";
import messageCreate from "./listeners/messageCreate";
import guildCreate from "./listeners/guildCreate";
import guildDelete from "./listeners/guildDelete";
import guildMemberAdd from "./listeners/guildMemberAdd";
import debug from "./listeners/debug";
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

debug(client)
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

