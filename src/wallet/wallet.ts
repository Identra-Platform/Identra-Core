import type { Identity } from "../identity/identity.js";
import type { KeyPair } from "./key.js";

export class Wallet {
  private identities: Identity[] = [];
  private keypairs: KeyPair[] = [];

  private keyAssignments: Map<Identity, KeyPair[]> = new Map();

  addIdentity(identity: Identity): void {
    this.identities.push(identity);
    this.keyAssignments.set(identity, []);
    identity.setWallet(this);
  }

  addKeyPair(keyPair: KeyPair): void {
    this.keypairs.push(keyPair);
  }

  assignKeyPairToIdentity(identity: Identity, keyPair: KeyPair): void {
    const list = this.keyAssignments.get(identity);
    if (!list) return;
    list.push(keyPair);
  }

  getKeyPairsForIdentity(identity: Identity): KeyPair[] {
    return this.keyAssignments.get(identity) ?? [];
  }

  generateKeyPair(): KeyPair | void {}
}

//class Bip32Wallet extends Wallet {}