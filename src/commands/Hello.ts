import {Client, CommandInteraction} from "discord.js";
import {Command} from "./base/Command";
import {ApplicationCommandType,} from 'discord-api-types/v10';

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    type: ApplicationCommandType.ChatInput,

    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello there!!!!!!!!";
        console.log(`interaction.applicationId: ${interaction.applicationId}`)
        console.log(`interaction.guildId: ${interaction.guildId}`)
        console.log(`interaction.type: ${interaction.type}`)
        console.log(`interaction.channelId: ${interaction.channelId}`)
        console.log(`interaction.guild?.id: ${interaction.guild?.id}`)
        console.log(`interaction.guild?.name: ${interaction.guild?.name}`)
        console.log(`interaction.user.id: ${interaction.user.id}`)
        console.log(`interaction.user.username: ${interaction.user.username}`)
        console.log(`interaction.user.avatar: ${interaction.user.avatar}`)

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};