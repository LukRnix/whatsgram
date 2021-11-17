import { UserSmallModel } from "./user";

export type Message = {
    id: string;
    content: string;
    responseTo: string;
    sendBy: UserSmallModel;
    sendAt: Date;
}