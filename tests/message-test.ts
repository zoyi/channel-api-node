import * as assert from "assert";
import { Client, TestEnv } from "../src";

describe("Message", () => {
  const testEnv = new TestEnv();
  const client = new Client(testEnv.accessKey, testEnv.accessSecret);
  const message = {message: "😊 MochaBot test message"};

  describe("Group", () => {
    it("should be created", (done: any) => {
      client.groups.messages.create(testEnv.groupId, "MochaBot", message)
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
    it("should be created", (done: any) => {
      client.userChats.messages.create(testEnv.userChatId, "MochaBot", message)
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
