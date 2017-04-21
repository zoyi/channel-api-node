import * as rp from "request-promise";
import Client from "./client";
import UserChat from "./userChat";

export default class Veil {
  public userChat: UserChat;

  private client: Client;

  constructor(client: Client) {
    this.userChat = new UserChat(client);
    this.userChat.guestType = "Veil";

    this.client = client;
  }

  public get(veilId: string) {
    return this.client.get(`/veils/${veilId}`);
  }
}
