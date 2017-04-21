import Client from "./client";
import File from "./file";
import Message from "./message";

export default class Group {
  public messages: Message;
  public files: File;

  private client: Client;

  constructor(client: Client) {
    this.messages = new Message(client, "Group");
    this.files = new File(client, "Group");

    this.client = client;
  }
}
