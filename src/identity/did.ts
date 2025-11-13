export interface Did {
  id: string;

  toString(): string;
}

export class EthDid implements Did {
  constructor(
    public id: string
  ) {}

  toString(): string {
    return `did:ethr:${this.id}`;
  }
}

class DidResolver {}