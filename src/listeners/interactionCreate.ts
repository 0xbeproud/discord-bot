import {Client, CommandInteraction, Interaction} from "discord.js";
import {Commands} from "../Commands";
import {letsGoButtonClickMessage} from "../messages/messages";

export default (client: Client): void => {
    client.on("interactionCreate", async (interaction: Interaction) => {
        console.log("=> interactionCreate")
        console.log(`interaction.isCommand(): ${interaction.isCommand()}`)
        console.log(`interaction.isChatInputCommand():${interaction.isChatInputCommand()} `)
        console.log(`interaction.isButton():${interaction.isButton()} `)
        console.log(`interaction.isContextMenuCommand():${interaction.isContextMenuCommand()} `)
        console.log(`interaction.isSelectMenu():${interaction.isSelectMenu()} `)

        if (interaction.isButton()) {
            console.log(interaction.component)
            await interaction.reply(letsGoButtonClickMessage(interaction))

        } else {
            if (!interaction.isChatInputCommand())
                return
            await handleSlashCommand(client, interaction);
        }
    });
};

const handleSlashCommand = async (client: Client, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(c => c.name === interaction.commandName);
    if (!slashCommand) {
        await interaction.followUp({content: "An error has occurred"});
        return;
    }

    await interaction.deferReply();

    slashCommand.run(client, interaction);
};