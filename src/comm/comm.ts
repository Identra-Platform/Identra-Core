import type { Did } from "../identity/did.js";

export interface Attachment {
  id: string;
  mimeType: string;
  data: unknown;
  description?: string;
}

export class DidCommMessage {
  id: string;
  type: string;
  from?: Did | undefined;
  to: Did[];
  created_at: number;
  body: Record<string, unknown>;
  attachments?: Attachment[] | undefined;

  constructor(params: {
    id: string;
    type: string;
    from?: Did;
    to: Did[];
    created_at?: number;
    body?: Record<string, unknown>;
    attachments?: Attachment[];
  }) {
    this.id = params.id;
    this.type = params.type;
    this.from = params.from;
    this.to = params.to;
    this.created_at = params.created_at ?? Math.floor(Date.now() / 1000);
    this.body = params.body ?? {};
    this.attachments = params.attachments;
  }

  toJSON() {
    return {
      id: this.id,
      type: this.type,
      from: this.from,
      to: this.to,
      created_time: this.created_at,
      body: this.body,
      attachments: this.attachments,
    };
  }

  static fromJSON(json: any): DidCommMessage {
    return new DidCommMessage({
      id: json.id,
      type: json.type,
      from: json.from,
      to: json.to,
      created_at: json.created_time,
      body: json.body,
      attachments: json.attachments,
    });
  }
}
class DidCommPackager {}
class DidCommAgent {}