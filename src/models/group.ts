import { Message } from "./message";
import { UserSmallModel } from "./user";

export type Group = {
    id: string;
    name: string;
    description: string;
    members: (UserSmallModel & {role: string})[]
    messages: Message[];
    picture: string;
}