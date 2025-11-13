import WebSocket from "ws";
import { DidCommMessage, DidCommPackager } from "./comm/comm.js";
import { EthDid } from "./identity/did.js";
import { KeyPair } from "./wallet/key.js";
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

let packager = new DidCommPackager(new KeyPair());
let relayMessage = packager.pack(message);

console.log(relayMessage);
console.log(packager.unpack(relayMessage).toJSON());