import * as rp from "request-promise";
import Client from "./client";
import File from "./file";
import Message from "./message";

export default class UserChat {
  public messages: Message;
  public files: File;
  public guestType: string;

  private client: Client;

  constructor(client: Client) {
    this.messages = new Message(client, "UserChat");
    this.files = new File(client, "UserChat");

    this.client = client;
  }

  public create(guestId: string) {
    return this.client.post(
      `/${this.guestType.toLowerCase()}s/${guestId}/user_chats`,
      undefined);
  }

  public get(guestId: string) {
    return this.client
      .get(`/${this.guestType.toLowerCase()}s/${guestId}/user_chats`);
  }
}
