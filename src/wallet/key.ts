import { type KeyPairInterface } from "../core/core-types.js";
import { CryptoEngine } from "./crypto.js";
import nacl from "tweetnacl";

export interface StoredKey {
  id: string;
  type: string;
  key: Uint8Array;
  meta?: Record<string, any>;
}

export class KeyStore {
  private store: Map<string, StoredKey> = new Map();

  async saveKey(key: StoredKey): Promise<void> {
    this.store.set(key.id, key);
  }

  async getKey(id: string): Promise<StoredKey | null> {
    return this.store.get(id) || null;
  }

  async deleteKey(id: string): Promise<void> {
    this.store.delete(id);
  }

  async listKeys(): Promise<StoredKey[]> {
    return Array.from(this.store.values());
  }
}

export enum KeyPurpose {
  Encryption = "encryption",
  Signing = "signing",
  Assertion = "assertion",
}

export class Encrypted {
  constructor(public data: Uint8Array, public algorithm: string) {}
}

export class PublicKey implements StoredKey {
  constructor(public id: string, public type: string, public key: Uint8Array) {}
}

export class PrivateKey implements StoredKey {
  constructor(public id: string, public type: string, public key: Uint8Array) {}
  derivePublicKey(): PublicKey {
    return new PublicKey(this.id, this.type, this.key);
  }
}

class StorageKey implements StoredKey {
  constructor(public id: string, public type: string, public key: Uint8Array) {}
}

export class KeyPair implements KeyPairInterface {
  constructor(
    public privateKey: PrivateKey,
    public purpose: KeyPurpose,
    public publicKey: PublicKey
  ) {
    this.publicKey ??= privateKey.derivePublicKey();
  }

  private keyStore: KeyStore = new KeyStore();

  static generateKeyPair(id: string, purpose: KeyPurpose, type: string): KeyPair {
    const keyPair = nacl.sign.keyPair();
    const privateKey = new PrivateKey(id, type, keyPair.secretKey);
    const publicKey = new PublicKey(id, type, keyPair.publicKey);
    return new KeyPair(privateKey, purpose, publicKey);
  }

  async storeKeyPair(engine: CryptoEngine, passphrase: string): Promise<void> {
    const encrypted = await engine.encrypt(this.privateKey, passphrase);

    const stored: StoredKey = {
      id: this.privateKey.id,
      type: this.privateKey.type,
      key: encrypted.data,
      meta: {
        purpose: this.purpose,
        algorithm: encrypted.algorithm,
      }
    };

    console.log(stored);
     await engine.getStore().saveKey(stored);
  }

  static async loadPrivateKey(id: string, engine: CryptoEngine, passphrase: string): Promise<PrivateKey> {
    const storedKey = await engine.getStore().getKey(id);
    if (!storedKey) {
      throw new Error("Key not found");
    }
    const decryptedKey = await engine.decrypt(storedKey, passphrase);
    return new PrivateKey(storedKey.id, storedKey.type, decryptedKey);
  }
}
