import { v4 as uuidv4 } from "uuid";
import type { KeyPair, PublicKey, StoredKey } from "../wallet/key.js";
import type { Did } from "../identity/did.js";
import type { RelayMessage } from "./transport.js";

export class DidCommMessage {
  constructor(
    public id: string = uuidv4(),
    public type: string = "application/didcomm-encrypted+json",
    public from: Did,
    public to: Did[],
    public body: string,
    public timestamp: Date = new Date()
  ) {}

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      from: this.from,
      to: this.to,
      body: this.body,
      timestamp: this.timestamp
    };
  }

  static fromJSON(json: any): DidCommMessage {
    return new DidCommMessage(
      json.id,
      json.type,
      json.from,
      json.to,
      json.body,
      json.timestamp
    );
  }
}
export class DidCommPackager {
  pack(commMessage: DidCommMessage, keyPair: KeyPair): RelayMessage {
    return {
      from: commMessage.from.toString(),
      to: commMessage.to.toString(),
      payload: keyPair.encrypt(
        JSON.stringify(commMessage.toJSON())
      ),
      signature: keyPair.sign(JSON.stringify(
        commMessage.toJSON()
      ))
    };
  }
  unpack(relayMessage: RelayMessage, keyPair: KeyPair): DidCommMessage | null {
    const message = keyPair.decrypt(relayMessage.payload);
    if (!keyPair.verifySignature(message, relayMessage.signature)) return null;

    return DidCommMessage.fromJSON(
      JSON.parse(message)
    );
  }
}
export class DidCommAgent {}