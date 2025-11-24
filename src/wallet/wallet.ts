import type { Identity } from "../identity/identity.js";
import type { KeyPair, KeyPurpose } from "./key.js";

export class Wallet {
  private identities: Identity[] = [];
  private keypairs: KeyPair[] = [];

  private keyAssignments: Map<Identity, Map<KeyPurpose, KeyPair>> = new Map();

  addIdentity(identity: Identity): void {
    this.identities.push(identity);
    this.keyAssignments.set(identity, new Map);
    identity.setWallet(this);
  }

  addKeyPair(keyPair: KeyPair): void {
    this.keypairs.push(keyPair);
  }

  assignKeyPairToIdentity(identity: Identity, keyPair: KeyPair): void {
    let existing = this.keyAssignments.get(identity);
    if (!existing) return;

    existing.set(keyPair.purpose, keyPair);
  }

  getKeyPairForIdentity(identity: Identity, purpose: KeyPurpose): KeyPair | null {
    return this.keyAssignments.get(identity)?.get(purpose) ?? null;
  }

  getAllKeyPairsForIdentity(identity: Identity): Map<KeyPurpose, KeyPair> {
    return new Map(this.keyAssignments.get(identity));
  }

  generateKeyPair(): KeyPair | void {}
}

//class Bip32Wallet extends Wallet {}