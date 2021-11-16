import { Message } from "./message";

export type Group = {
    id: string;
    name: string;
    members: {
        userId: string;
        role: admin;
    }[]
    messages: Message[];
    picture: string;
}