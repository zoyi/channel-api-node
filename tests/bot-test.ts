import * as assert from "assert";
import { Client, TestEnv } from "../src";

describe("Bot", () => {
  const testEnv = new TestEnv();
  const client = new Client(testEnv.accessKey, testEnv.accessSecret);

  it("should create bot", (done: any) => {
    client.bots.create("제비봇", "https://goo.gl/Xt51OM")
      .then((body: any) => {
        if (body.bot === null) {
          done(body);
        }
        done();
      })
      .catch((err: any) => {
        done(err);
      });
  });
});
