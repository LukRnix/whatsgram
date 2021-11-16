export type User = {
    id: string,
    name: string,
    picture: string,
    lastLogin: Date,
    contacts: string[],
    groups: string[],
    pinnedChats: string[],
}