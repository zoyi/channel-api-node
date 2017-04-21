import Client from "./client";
import File from "./file";
import Message from "./message";

export default class UserChat {
  public messages: Message;
  public files: File;

  private client: Client;

  constructor(client: Client) {
    this.messages = new Message(client, "UserChat");
    this.files = new File(client, "UserChat");

    this.client = client;
  }
}
