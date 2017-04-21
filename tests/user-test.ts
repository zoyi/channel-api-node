import * as assert from "assert";
import { Client, TestEnv } from "../src";

describe("User", () => {
  const testEnv = new TestEnv();
  const client = new Client(testEnv.accessKey, testEnv.accessSecret);

  it("should be returned", (done: any) => {
    client.users.get(testEnv.userId).then((body: any) => {
      if (body.user === null) {
        done(body);
      }
      done();
    })
    .catch((err: any) => {
      done(err);
    });
  });

  describe("UserChat", () => {
    it("should be returned", (done: any) => {
      client.users.userChat.get(testEnv.userId).then((body: any) => {
        if (body.user === null) {
          done(body);
        }
        done();
      })
      .catch((err: any) => {
        done(err);
      });
    });

    it("should be created", (done: any) => {
      client.users.userChat.create(testEnv.userId).then((body: any) => {
        if (body.user === null) {
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
