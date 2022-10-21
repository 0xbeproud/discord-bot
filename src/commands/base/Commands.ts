import {Command} from "./Command";
import {ServerInfo} from "../ServerInfo";
import {UserInfo} from "../UserInfo";
import {Hello} from "../sample/Hello";
import {Sample} from "../sample/Sample";
import {GuildCreate} from "../sample/GuildCreate";

export const Commands: Command[] = [
    Hello,
    ServerInfo,
    UserInfo,
    Sample,
    GuildCreate
];