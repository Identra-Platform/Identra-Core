import { DidCommMessage } from "./comm/comm.js";

let message = new DidCommMessage({
  id: '1',
  type: 'application/didcomm-encrypted+json',
  to: [],
  body: {
    "Message": "Testing"
  }
});

console.log(message.toJSON());