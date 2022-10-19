import {ApplicationCommandType, ChannelType, Client, CommandInteraction, PermissionsBitField} from "discord.js";
import {Command} from "./base/Command";
import {joinMessage} from "../messages/messages";

export const GuildCreate: Command = {
    name: "guild-create",
    description: "Returns a greeting",
    type: ApplicationCommandType.ChatInput,

    run: async (client: Client, interaction: CommandInteraction) => {
        const guild = interaction.guild
        if (!guild) {
            return
        }

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

        await interaction.followUp(joinMessage());
    }
};