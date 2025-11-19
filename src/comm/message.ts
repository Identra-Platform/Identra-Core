import { v4 as uuidv4 } from "uuid";
import type { Did } from "../identity/did.js";

export interface RelayMessage {
  from: string;
  to: string[];
  payload: string;
  signature: string;
}

export class DidCommMessage {
  constructor(
    public from: Did,
    public to: Did[],
    public body: string,
    public id: string = uuidv4(),
    public type: string = "application/didcomm-encrypted+json",
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