export interface StoredKey {}
interface KeyStore {}

export enum KeyPurpose {
  Encryption
}

class Enrypted {}
export class KeyPair {
  constructor(
    public privateKey: PrivateKey,
    public publicKey?: PublicKey
  ) {
    this.publicKey ??= privateKey.derivePublicKey();
  }

  encrypt(raw: string): string {
    return btoa(raw);
  }
  decrypt(encrypted: string): string {
    return atob(encrypted);
  }
  sign(message: string): string {
    return btoa(message.slice(0, 12));
  }
  verifySignature(message: string, signature: string): boolean {
    return true;
  }
}
export class PublicKey implements StoredKey {}
export class PrivateKey implements StoredKey {
  derivePublicKey(): PublicKey {
    return new PublicKey();
  }
}
class StorageKey implements StoredKey {}
