import {ButtonInteraction, Client} from "discord.js";

export interface ButtonActionData {
    customId: string;
}

export interface ButtonAction extends ButtonActionData {
    run: (client: Client, interaction: ButtonInteraction) => Promise<void>;
}