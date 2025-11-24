import { KeyAlgorithm } from "./core/core-types.js";
import { KeyDid, KeyDidFactory } from "./identity/did.js";
import { KeyPair, KeyPurpose } from "./wallet/key.js";

const keypair = KeyPair.generateKeyPair('1234', KeyPurpose.Encryption, KeyAlgorithm.Ed25519);

const factory = new KeyDidFactory();
const did = factory.createDid(keypair.publicKey.key);

console.log(await did.resolve());