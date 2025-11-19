import WebSocket from "ws";
import { DidCommAgent } from "./comm/comm.js";
import { DidCommWebSocket } from "./comm/transport.js";
import { EthDid } from "./identity/did.js";
import { KeyPair, PrivateKey } from "./wallet/key.js";

const ws = new WebSocket('ws://localhost:8080');

ws.on("open", () => {
  let agent = new DidCommAgent(
    new EthDid('0x1234alice'),
    new KeyPair(new PrivateKey()),
    new DidCommWebSocket(ws)
  )

  agent.send([
    new EthDid('0x1234bob'),
    new EthDid('0x1234mark')
  ], 'Hi');
});