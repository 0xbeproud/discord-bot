import {Command} from "./Command";
import {Hello} from "./commands/sample/Hello";
import {ServerInfo} from "./commands/ServerInfo";
import {UserInfo} from "./commands/UserInfo";
import {Sample} from "./commands/sample/Sample";
import {GuildCreate} from "./commands/sample/GuildCreate";

export const Commands: Command[] = [
    Hello,
    ServerInfo,
    UserInfo,
    Sample,
    GuildCreate
];