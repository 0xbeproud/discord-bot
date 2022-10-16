import {Client, CommandInteraction} from "discord.js";
import {Command} from "../Command";
import {ApplicationCommandType,} from 'discord-api-types/v10';

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    type: ApplicationCommandType.ChatInput,

    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello there!!!!!!!!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};