import type { KeyPair } from "../wallet/key.js";
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

  getKeyPairs(): KeyPair[] {
    if (!this.wallet) return [];
    return this.wallet.getKeyPairsForIdentity(this);
  }
}
export class IdentityManager {}