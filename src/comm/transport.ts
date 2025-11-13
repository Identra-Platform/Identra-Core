import WebSocket from 'ws';

export interface RelayMessage {
  from: string;
  to: string;
  payload: string;
  signature: string;
}

export interface DidCommTransport {
  send(message: RelayMessage): Promise<void>;
  receive?(): Promise<RelayMessage | null>;
  onMessage?(callback: (msg: RelayMessage) => void): void;
  close?(): Promise<void>;
}

export class DidCommWebSocket implements DidCommTransport {
  constructor(
    private ws: WebSocket
  ) {}

  async send(message: RelayMessage): Promise<void> {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    }
  }
  onMessage(callback: (msg: RelayMessage) => void): void {
    this.ws.on("message", (data: WebSocket.RawData) => {
      const message: RelayMessage = JSON.parse(data.toString());
      callback(message);
    });
  }
  async close(): Promise<void> {
    this.ws.close();
  }
}