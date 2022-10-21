import {ApplicationCommandType, Client, CommandInteraction, EmbedBuilder} from "discord.js";
import {Command} from "./base/Command";

export const UserInfo: Command = {
    name: "userinfo",
    description: "Returns user info",
    type: ApplicationCommandType.ChatInput,

    run: async (client: Client, interaction: CommandInteraction) => {
        const user = interaction.user;

        // const row = new ActionRowBuilder<ButtonBuilder>()
        //     .addComponents(
        //         new ButtonBuilder()
        //             .setCustomId('first')
        //             .setLabel('First page')
        //             // .setStyle('Primary')
        //             .setDisabled(true)
        //     )

        const embed = new EmbedBuilder()
            .setColor("Random")
            .setTitle(`${user.tag}의 정보`)
            .setThumbnail(user.displayAvatarURL())
            .addFields(
                {name: "이름", value: `${user.username}`, inline: true},
                {name: "ID", value: `${user.id}`, inline: true},
                {name: "계정 생성일", value: `${user.createdAt}`, inline: true},
            )
            .setTimestamp()
            .setFooter({
                text: `Requested by ${interaction.user.tag}`,
                iconURL: `${interaction.user.displayAvatarURL()}`
            });

        await interaction.followUp({
            ephemeral: true,
            embeds: [embed],
        });
    }
};