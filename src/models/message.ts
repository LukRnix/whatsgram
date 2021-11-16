export type Message = {
    id: string;
    content: string;
    responseTo: string;
    sendBy: string;
    sendAt: Date;
}