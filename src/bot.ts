import * as rp from "request-promise";
import Client from "./client";

export default class Bot {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  public create(name: string, avatarUrl: string) {
    return this.client.post("/bots", {name, avatarUrl});
  }
}
