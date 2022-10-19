import {ButtonAction} from "../../config/actions/ButtonAction";
import {async} from "q";
import {ButtonInteraction, Client} from "discord.js";


export const LetsgoButtonAction: ButtonAction = {
    customId: 'letsgo',

    run(client: Client, interaction: ButtonInteraction): void {
        console.log('LetsgoButton clicked')
    },
}