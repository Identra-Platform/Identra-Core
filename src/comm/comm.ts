import { DidResolver, type Did } from "../identity/did.js";
import { KeyPair, KeyPurpose } from "../wallet/key.js";
import { DidCommMessage } from "./message.js";
import { DidCommPackager } from "./packager.js";
import type { DidCommTransport } from "./transport.js";

export class DidCommAgent {
  constructor(
    private sender: Did,
    private keyPair: KeyPair,
    private transport: DidCommTransport,
    private resolver: DidResolver = new DidResolver(),
    private packager: DidCommPackager = new DidCommPackager()
  ) {
    transport.send({
      from: sender.toString(),
      to: [],
      payload: JSON.stringify({
        did: sender.toString()
      }),
      signature: "none"
    });
  }

  async send(to: Did[], body: string): Promise<void> {
    const publicKey = (await this.resolver.resolve(this.sender)).publicKeys.get(KeyPurpose.Encryption);
    const message = new DidCommMessage(this.sender, to, body);
    const encrypted = this.packager.pack(message, new KeyPair(this.keyPair.privateKey, publicKey));

    this.transport.send(encrypted);
  }
  onMessage(callback: (message: DidCommMessage) => void): void {}
}