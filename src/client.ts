import * as rp from "request-promise";
import Bot from "./bot";
import Group from "./group";
import Manager from "./manager";
import User from "./user";
import UserChat from "./userChat";
import Veil from "./veil";

export default class Client {
  public bots: Bot;
  public groups: Group;
  public managers: Manager;
  public users: User;
  public userChats: UserChat;
  public veils: Veil;

  public accessKey: string;
  public accessSecret: string;

  constructor(accessKey: string, accessSecret: string) {
    this.accessKey = accessKey;
    this.accessSecret = accessSecret;

    this.bots = new Bot(this);
    this.groups = new Group(this);
    this.managers = new Manager(this);
    this.users = new User(this);
    this.userChats = new UserChat(this);
    this.veils = new Veil(this);
  }

  public post(endpoint: string, data: any) {
    return rp({
      body: data,
      headers: {
        "Content-Type": "application/json",
        "X-Access-Key": this.accessKey,
        "X-Access-Secret": this.accessSecret,
      },
      json: true,
      method: "POST",
      uri: `http://api.channel.io/open${endpoint}`,
    });
  }

  public postFile(endpoint: string, file: any) {
    const formData = {file};
    return rp({
      formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "X-Access-Key": this.accessKey,
        "X-Access-Secret": this.accessSecret,
      },
      json: true,
      method: "POST",
      uri: `http://api.channel.io/open${endpoint}`,
    });
  }

  public get(endpoint: string) {
    return rp({
      headers: {
        "Content-Type": "application/json",
        "X-Access-Key": this.accessKey,
        "X-Access-Secret": this.accessSecret,
      },
      json: true,
      method: "GET",
      uri: `http://api.channel.io/open${endpoint}`,
    });
  }
}
