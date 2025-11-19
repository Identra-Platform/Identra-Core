import type { Did } from "../identity/did.js";
import type { KeyPair } from "../wallet/key.js";
import { DidCommMessage, type RelayMessage } from "./message.js";

export class DidCommPackager {
  pack(commMessage: DidCommMessage, keyPair: KeyPair): RelayMessage {
    return {
      from: commMessage.from.toString(),
      to: commMessage.to.map((did: Did) => did.toString()),
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