import type { KeyPair, KeyPurpose } from "../wallet/key.js";
import type { Wallet } from "../wallet/wallet.js";
import type { Did } from "./did.js";

interface IdentityRepo {}

export class Identity {
  private wallet: Wallet | null = null;

  constructor(
    private did: Did
  ) {}

  setWallet(wallet: Wallet): void {
    this.wallet = wallet;
  }

  getWallet(): Wallet | null {
    return this.wallet;
  }

  getKeyPair(purpose: KeyPurpose): KeyPair | null {
    return this.wallet?.getKeyPairForIdentity(this, purpose) ?? null;
  }

  getAllKeyPairs(): Map<KeyPurpose, KeyPair> {
    return this.wallet?.getAllKeyPairsForIdentity(this) ?? new Map;
  }
}

export class IdentityManager {}