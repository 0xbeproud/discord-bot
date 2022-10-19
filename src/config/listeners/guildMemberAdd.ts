import {Client, GuildMember} from "discord.js";

export default (client: Client): void => {
    client.on("guildMemberAdd", async (member: GuildMember) => {
        console.log(`guildMemberAdd: ${member.user.tag}`);

        if(member.user.tag == 'SuperDesireBot#7869'){
            console.log(`SuperDesireBot Added`)
            console.log(member.guild.id)
            console.log(member.guild.name)
        }
    });
};