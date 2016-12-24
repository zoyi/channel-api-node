import Client from './client';

export interface MessageModel {
    message: string;
}

export default class Message {
    client: Client;
    constructor(client: Client) {
        this.client = client;
    }

    create(groupName: string, botName: string, message: MessageModel) {
        return this.client.post(`/groups/@${groupName}/messages?botName=${botName}`, message)
    }
}