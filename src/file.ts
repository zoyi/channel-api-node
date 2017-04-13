import * as rp from "request-promise";
import Client from "./client";

export default class File {
  public chatType: string;

  private client: Client;

  constructor(client: Client, chatType: string) {
    this.chatType = chatType;

    this.client = client;
  }

  public create(chatId: string, botName: string, f: any) {
    if (this.chatType === "Group") {
      return this.client
        .postFile(`/groups/${chatId}/messages/file?botName=${botName}`, f);
    } else if (this.chatType === "UserChat") {
      return this.client
        .postFile(`/user_chats/${chatId}/messages/file?botName=${botName}`, f);
    }

    throw new TypeError("Unsupported chat type");
  }
}
