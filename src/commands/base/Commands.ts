import {Command} from "./Command";
import {Hello} from "../Hello";
import {ServerInfo} from "../ServerInfo";
import {UserInfo} from "../UserInfo";
import {Sample} from "../Sample";
import {GuildCreate} from "../GuildCreate";

export const Commands: Command[] = [
    Hello,
    ServerInfo,
    UserInfo,
    Sample,
    GuildCreate
];