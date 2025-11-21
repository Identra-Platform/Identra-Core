import WebSocket from 'ws';
import type { RelayMessage } from './message.js';

export interface StreamTransport {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  reconnect(): Promise<void>;

  isConnected(): boolean;
  on(event: 'connect' | 'disconnect' | 'message' | 'error', handler: (data?: any) => void): void;
  off(event: 'connect' | 'disconnect' | 'message' | 'error', handler: (data?: any) => void): void;

  send(data: ArrayBuffer | string | any): Promise<void>;

  getTransportName(): string;
}

export class WebSocketWebSocket implements StreamTransport {
  private socket: WebSocket | null = null;
  private handlers = {
    connect: new Set<(data?: any) => void>(),
    disconnect: new Set<(data?: any) => void>(),
    message: new Set<(data?: any) => void>(),
    error: new Set<(data?: any) => void>(),
  };

  constructor(
    private relayUrl: string
  ) {}

  async connect(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.socket = new WebSocket(this.relayUrl);

      this.socket.onopen = () => {
        this.emit('connect');
        resolve();
      };

      this.socket.onclose = () => {
        this.emit('disconnect');
      };

      this.socket.onerror = (err) => {
        this.emit('error', err);
      };

      this.socket.onmessage = (msg) => {
        this.emit('message', msg.data);
      };
    });
  }

  async disconnect(): Promise<void> {
    if (!this.socket) return;
    this.socket.close();
    this.socket = null;
  }

  async reconnect(): Promise<void> {
    await this.disconnect();
    return this.connect();
  }

  isConnected(): boolean {
    return this.socket?.readyState === WebSocket.OPEN;
  }

  async send(data: ArrayBuffer | string | any): Promise<void> {
    if (!this.isConnected()) return Promise.reject('Not Connected');

    this.socket!.send(data);
    return Promise.resolve();
  }

  on(event: 'connect' | 'disconnect' | 'message' | 'error', handler: (data?: any) => void): void {
    this.handlers[event].add(handler);
  }

  off(event: 'connect' | 'disconnect' | 'message' | 'error', handler: (data?: any) => void): void {
    this.handlers[event].delete(handler);
  }

  private emit(event: 'connect' | 'disconnect' | 'message' | 'error', data?: any): void {
    for (const handler of this.handlers[event]) {
      handler(data);
    }
  }

  getTransportName(): string {
    return'WebSocket';
  }
}