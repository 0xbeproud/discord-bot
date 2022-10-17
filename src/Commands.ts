import {Command} from "./Command";
import {Hello} from "./commands/Hello";
import {ServerInfo} from "./commands/ServerInfo";
import {UserInfo} from "./commands/UserInfo";

export const Commands: Command[] = [
    Hello,
    ServerInfo,
    UserInfo,
];