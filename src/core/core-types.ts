import { Encrypted, PrivateKey, PublicKey, type StoredKey, KeyPurpose, KeyStore } from "../wallet/key.js";

export interface CryptoEngineInterface {
    encrypt(privateKey: PrivateKey, passphrase: string): Promise<Encrypted>;
    decrypt(storedKey: StoredKey, passphrase: string): Promise<Uint8Array>;
    sign(message: string, privateKey: PrivateKey): string;
    verifySignature(message: string, signature: string, publicKey: PublicKey): boolean;
    getStore(): KeyStore;
}

export interface KeyPairInterface {
    privateKey: PrivateKey;
    purpose: KeyPurpose;
    publicKey: PublicKey;

    storeKeyPair(engine: CryptoEngineInterface, passphrase: string): Promise<void>;
}