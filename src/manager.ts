import * as rp from "request-promise";
import Client from "./client";

export default class Manager {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  public get() {
    return this.client.get("/managers");
  }
}
