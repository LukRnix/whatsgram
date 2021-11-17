
export type UserSmallModel = {
    id: string,
    name: string,
    picture: string,  

}

export type User = {
    status: string;
    lastLogin: Date,
    contacts: string[],
    groups: string[],
    pinnedChats: string[],
} & UserSmallModel;