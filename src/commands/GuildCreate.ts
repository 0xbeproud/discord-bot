import {
    ActionRowBuilder,
    ApplicationCommandType,
    ButtonBuilder,
    ButtonStyle,
    ChannelType,
    Client,
    CommandInteraction,
    EmbedBuilder,
    PermissionsBitField
} from "discord.js";
import {Command} from "../Command";
import {joinMessage} from "../messages/messages";

export const GuildCreateSample: Command = {
    name: "createguild",
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