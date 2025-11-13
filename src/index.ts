import WebSocket from "ws";
import { DidCommMessage, DidCommPackager } from "./comm/comm.js";
import { EthDid } from "./identity/did.js";
import { KeyPair, PrivateKey, PublicKey } from "./wallet/key.js";
import { v4 as uuidv4 } from "uuid";
import { DidCommWebSocket } from "./comm/transport.js";

let message = new DidCommMessage(
  uuidv4(),
  'application/didcomm-encrypted+json',
  new EthDid('0x1234abcdbob'),
  [
    new EthDid('0x1234abcdalice')
  ],
  'Hi',
  new Date()
);

let aliceKeyPair = new KeyPair(new PrivateKey());
let bobKeyPair = new KeyPair(new PrivateKey());
let encryptionKeys = new KeyPair(aliceKeyPair.privateKey, bobKeyPair.publicKey);
let decryptionKeys = new KeyPair(bobKeyPair.privateKey, aliceKeyPair.publicKey);


let packager = new DidCommPackager();
let relayMessage = packager.pack(message, encryptionKeys);

console.log(relayMessage);
console.log(packager.unpack(relayMessage, decryptionKeys)?.toJSON());