import {ChannelType, Client, Guild, PermissionsBitField} from "discord.js";
import {joinMessage} from "../messages/messages";

export default (client: Client): void => {
    client.on("guildCreate", async (guild: Guild) => {
        console.log(`guildCreate: ${guild.name} / ${guild.id}`);

        const channelName = process.env.DISCORD_VERIFY_CHANNEL_NAME ?? "";

        guild.channels.create({
            name: channelName,
            type: ChannelType.GuildText,
            permissionOverwrites: [
                {
                    id: guild.id,
                    allow: [PermissionsBitField.Flags.ViewChannel],
                    deny: [PermissionsBitField.Flags.SendMessages]
                }
            ]
        }).then(channel => {
            channel.send(joinMessage());
        })
    });
};
