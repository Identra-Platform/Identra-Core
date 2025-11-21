import WebSocket from "ws";
import { DidResolver, type Did } from "../identity/did.js";
import { KeyPair, KeyPurpose } from "../wallet/key.js";
import { DidCommMessage } from "./message.js";
import { DidCommPackager } from "./packager.js";
import config from "../config.js";

export class DidCommAgent {
  private connectedDid: Did | undefined = undefined;
  private webSocket: WebSocket | undefined = undefined;

  constructor(
    private resolver: DidResolver = new DidResolver(),
    private packager: DidCommPackager = new DidCommPackager()
  ) {
    this.webSocket = new WebSocket(`ws://${config.anchorUrl}:${config.relayPort}`);
  }

  /*async connect(did: Did) {
    w

    if (this.connectedDid) this.disconnect();

    await this.transport.send({
      from: did.toString(),
      to: [],
      payload: JSON.stringify({
        did: did.toString()
      }),
      signature: "none"
    });
  }

  async disconnect() {
    let close = this.transport.close;
    if (close) close();
  }

  async send(to: Did[], body: string): Promise<void> {
    const publicKey = (await this.resolver.resolve(this.sender)).publicKeys.get(KeyPurpose.Encryption);
    const message = new DidCommMessage(this.sender, to, body);
    const encrypted = this.packager.pack(message, new KeyPair(this.keyPair.privateKey, publicKey));

    this.transport.send(encrypted);
  }
  onMessage(callback: (message: DidCommMessage) => void): void {}*/
}