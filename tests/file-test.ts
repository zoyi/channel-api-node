import * as assert from "assert";
import { Client, TestEnv } from "../src";
import fs = require("fs");

describe("File", () => {
  const testEnv = new TestEnv();
  const client = new Client(testEnv.accessKey, testEnv.accessSecret);

  describe("Group", () => {
    const file = fs.createReadStream(testEnv.filePath);
    it("should be created", (done: any) => {
      client.groups.files.create(testEnv.groupId, "MochaBot", file)
        .then((body: any) => {
          if (body.message === null) {
            done(body);
          }
          done();
        })
        .catch((err: any) => {
          done(err);
        });
    });
  });

  describe("UserChat", () => {
    const file = fs.createReadStream(testEnv.filePath);
    it("should be created", (done: any) => {
      client.userChats.files.create(testEnv.userChatId, "MochaBot", file)
        .then((body: any) => {
          if (body.message === null) {
            done(body);
          }
          done();
        })
        .catch((err: any) => {
          done(err);
        });
    });
  });
});
