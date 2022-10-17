import {Command} from "./Command";
import {Hello} from "./commands/Hello";
import {ServerInfo} from "./commands/ServerInfo";
import {UserInfo} from "./commands/UserInfo";
import {Sample} from "./commands/Sample";
import {GuildCreateSample} from "./commands/GuildCreateSample";

export const Commands: Command[] = [
    Hello,
    ServerInfo,
    UserInfo,
    Sample,
    GuildCreateSample
];