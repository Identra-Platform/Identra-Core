interface StoredKey {}
interface KeyStore {}

enum KeyPurpose {}

class Enrypted {}
export class KeyPair {
  encrypt(raw: string): string {
    return btoa(raw);
  }
}
class PublicKey implements StoredKey {}
class PrivateKey implements StoredKey {}
class StorageKey implements StoredKey {}
