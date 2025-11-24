import { bases } from "multiformats/basics";
import { KeyPair } from "../wallet/key.js";
import { DIDDocument } from "./did-document.js";
import * as multiformats from 'multiformats'

export interface DidFactory {
  createDid(publicKey: Uint8Array): Did;
}

export interface Did {
  resolve(): Promise<DIDDocument>;
  toString(): string;
}

export class KeyDid implements Did {
  constructor(
    private multibasePublicKey: string
  ) {}

  async resolve(): Promise<DIDDocument> {
    return DIDDocument.fromJSON({
      "@context": "https://www.w3.org/ns/did/v1",
      id: this.toString(),
      verificationMethod: [
        {
          id: "key:1",
          type: "Ed25519VerificationKey2018",
          controller: this.toString(),
          publicKeyMultibase: this.multibasePublicKey
        }
      ],
      assertionMethod: ['key:1'],
      authentication: ['key:1'],
      capabilityInvocation: ['key:1'],
      capabilityDelegation: ['key:1'],
      keyAgreement: ['key:1'],
      service: []
    });
  }

  toString(): string {
    return `did:key:${this.multibasePublicKey}`;
  }
}

export class KeyDidFactory implements DidFactory {
  createDid(publicKey: Uint8Array): Did {
    const multibasePublicKey =this.encodePublicKey(publicKey);

    return new KeyDid(multibasePublicKey);
  }

  private encodePublicKey(publicKey: Uint8Array): string {
    const prefixBuf = new Uint8Array(multiformats.varint.encodingLength(0xED));
    multiformats.varint.encodeTo(0xED, prefixBuf);

    const prefixed = new Uint8Array(prefixBuf.length + publicKey.length);
    prefixed.set(prefixBuf, 0);
    prefixed.set(publicKey, prefixBuf.length);

    return bases.base58btc.encode(prefixed);
  }
}

export class DidResolver {
  static async resolve(did: Did): Promise<DIDDocument> {
    return did.resolve()
  }
}