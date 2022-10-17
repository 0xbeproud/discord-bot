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

const joinMessage = () => {
    const embed = new EmbedBuilder()
        .setColor("Random")
        .setThumbnail(`https://s3.coinmarketcap.com/static/img/portraits/621c22097aafe46422aa1161.png`)
        .setTitle(`Verify your assets`)
        .setDescription('This is a read-only connection. Do not share your private keys. We will never ask for your seed phrase. We will never DM you.')
    // .addFields(
    //     {name: "이름", value: `${interaction.guild?.name}`, inline: true},
    // )
    // .setTimestamp()
    // .setFooter({
    //     text: `Requested by ${guild.name}`,
    //     iconURL: `${guild.iconURL()}`
    // });

    const row = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
                .setLabel('Let\'s go')
                .setURL("https://fanto.io")
                .setStyle(ButtonStyle.Link),
        ).addComponents(
            new ButtonBuilder()
                .setLabel('Docs')
                .setURL("https://fanto.io")
                .setStyle(ButtonStyle.Link),
        );


    return {
        embeds: [embed],
        components: [row]
    }
}
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