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

const ws = new WebSocket(`ws://localhost:8080`);

ws.on("open", () => {
  ws.send(JSON.stringify({
    did: 'did:ethr:0xabcd1234'
  }));

  let transport = new DidCommWebSocket(ws);
  transport.send(relayMessage);

  ws.close();
});