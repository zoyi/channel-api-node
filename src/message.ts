import * as rp from "request-promise";
import Client from "./client";

export interface ImessageModel {
  message: string;
}

export default class Message {
  public chatType: string;

  private client: Client;

  constructor(client: Client, chatType: string) {
    this.chatType = chatType;

    this.client = client;
  }

  public create(chatId: string, botName: string, message: ImessageModel) {
    if (this.chatType === "Group") {
      return this.client
        .post(`/groups/${chatId}/messages?botName=${botName}`, message);
    } else if (this.chatType === "UserChat") {
      return this.client
        .post(`/user_chats/${chatId}/messages?botName=${botName}`, message);
    }

    throw new TypeError("Unsupported chat type");
  }
}
