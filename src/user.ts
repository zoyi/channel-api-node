import * as rp from "request-promise";
import Client from "./client";
import UserChat from "./userChat";

export default class User {
  public userChat: UserChat;

  private client: Client;

  constructor(client: Client) {
    this.userChat = new UserChat(client);
    this.userChat.guestType = "User";

    this.client = client;
  }

  public get(userId: string) {
    return this.client.get(`/users/${userId}`);
  }
}
