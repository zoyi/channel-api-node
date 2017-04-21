import * as assert from "assert";
import { Client, TestEnv } from "../src";

describe("Veil", () => {
  const testEnv = new TestEnv();
  const client = new Client(testEnv.accessKey, testEnv.accessSecret);

  it("should be returned", (done: any) => {
    client.veils.get(testEnv.veilId).then((body: any) => {
      if (body.veil === null) {
        done(body);
      }
      done();
    })
    .catch((err: any) => {
      done(err);
    });
  });

  describe("userChat", () => {
    it("should be returned", (done: any) => {
      client.veils.userChat.get(testEnv.veilId).then((body: any) => {
        if (body.veil === null) {
          done(body);
        }
        done();
      })
      .catch((err: any) => {
        done(err);
      });
    });

    it("should be created", (done: any) => {
      client.veils.userChat.create(testEnv.veilId).then((body: any) => {
        if (body.veil === null) {
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
