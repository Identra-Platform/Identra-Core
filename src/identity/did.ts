import { KeyPurpose, PublicKey } from "../wallet/key.js";
import { DidDocument } from "./did-document.js";

export interface Did {
  id: string;

  resolve(): Promise<DidDocument>;
  toString(): string;
}

export class EthDid implements Did {
  constructor(
    public id: string
  ) {}

  async resolve(): Promise<DidDocument> {
    return new DidDocument(
      new Map().set(KeyPurpose.Encryption, new PublicKey())
    );
  }
  toString(): string {
    return `did:ethr:${this.id}`;
  }
}

export class DidResolver {
  async resolve(did: Did): Promise<DidDocument> {
    return did.resolve();
  }
}