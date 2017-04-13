import * as assert from "assert";
import { Client, TestEnv } from "../src";

describe("Manager", () => {
  const testEnv = new TestEnv();
  const client = new Client(testEnv.accessKey, testEnv.accessSecret);

  describe("List", () => {
    it("should be shown", (done: any) => {
      client.managers.get().then((body: any) => {
        if (body.channelManagers === null) {
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
