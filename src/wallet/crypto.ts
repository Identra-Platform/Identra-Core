import { type CryptoEngineInterface } from "../core/core-types.js";
import { Encrypted, PrivateKey, PublicKey, type StoredKey, KeyPurpose, KeyStore } from "./key.js";


 export class CryptoEngine implements CryptoEngineInterface {
    constructor(private keyStore: KeyStore) {}

    async encrypt(privateKey: PrivateKey, passphrase: string): Promise<Encrypted> {
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const encoder = new TextEncoder();

        const keyMaterial = await crypto.subtle.importKey(
            "raw",
            encoder.encode(passphrase),
            "PBKDF2",
            false,
            ["deriveKey"]
        );

        const key = await crypto.subtle.deriveKey(
            {name: "PBKDF2", salt: iv, iterations: 100000, hash: "SHA-256"},
            keyMaterial,
            {name: "AES-GCM", length: 256},
            false,
            ["encrypt", "decrypt"]
        );

        const ciphertext = new Uint8Array(
            await crypto.subtle.encrypt({name: "AES-GCM", iv}, key, new Uint8Array(privateKey.key))
        );

        return new Encrypted(new Uint8Array([...iv, ...ciphertext]), "AES-GCM");
    }

    async decrypt(storedKey: StoredKey, passphrase: string): Promise<Uint8Array> {
        const iv = storedKey.key.slice(0,12);
        const data = storedKey.key.slice(12);

        const encoder = new TextEncoder();
        const keyMaterial = await crypto.subtle.importKey(
            "raw",
            encoder.encode(passphrase),
            "PBKDF2",
            false,
            ["deriveKey"]
        );

        const key = await crypto.subtle.deriveKey(
            {name: "PBKDF2", salt: iv, iterations: 100000, hash: "SHA-256"},
            keyMaterial,
            {name: "AES-GCM", length: 256},
            false,
            ["decrypt"]
        );
        
        const decrypted = await crypto.subtle.decrypt({name: "AES-GCM", iv}, key, data);
        return new Uint8Array(decrypted);
    }

    sign(message: string, privateKey: PrivateKey): string {
        return btoa(message.slice(0, 12));
    }

    verifySignature(message: string, signature: string, publicKey: PublicKey): boolean {
        return true;
    }

    getStore(): KeyStore {
        return this.keyStore;
    }
}
