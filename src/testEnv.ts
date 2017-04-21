export default class TestEnv {
  public accessKey: string;
  public accessSecret: string;
  public groupId: string;
  public userChatId: string;
  public userId: string;
  public veilId: string;
  public filePath: string;

  constructor() {
    const yaml = require("node-yaml");
    const data = yaml.readSync("../test.yaml");

    this.accessKey = data.access.accessKey;
    this.accessSecret = data.access.accessSecret;
    this.groupId = data.id.groupId;
    this.userChatId = data.id.userChatId;
    this.userId = data.id.userId;
    this.veilId = data.id.veilId;
    this.filePath = data.path.file;
  }
}
