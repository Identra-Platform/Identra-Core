import type { KeyPair } from "./key.js";

export abstract class Wallet {
  abstract generateKeyPair(): KeyPair;
}

//class Bip32Wallet extends Wallet {}