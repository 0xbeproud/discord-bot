import {
    ActionRowBuilder,
    ApplicationCommandType,
    ButtonBuilder, ButtonStyle,
    Client,
    CommandInteraction,
    EmbedBuilder
} from "discord.js";
import {Command} from "../../Command";

export const Sample: Command = {
    name: "sample",
    description: "Returns a greeting",
    type: ApplicationCommandType.ChatInput,

    run: async (client: Client, interaction: CommandInteraction) => {

        const embed = new EmbedBuilder()
            .setColor("Random")
            // .setThumbnail(`${interaction.guild?.iconURL()}`)
            .setTitle(`'${interaction.guild?.name}' 정보`)
            // .setDescription('Welcome to the Collab.Land Community of Communities.')
            .addFields(
                {name: "이름", value: `${interaction.guild?.name}`, inline: true},
            )
            .setTimestamp()
            .setFooter({
                text: `Requested by ${interaction.user.tag}`,
                iconURL: `${interaction.user.displayAvatarURL()}`
            });

        const row = new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('primary')
                    .setLabel('Click me!')
                    .setStyle(ButtonStyle.Primary),
            );

        await interaction.followUp({
            ephemeral: true,
            embeds: [embed],
            components: [row]
        });
    }
};