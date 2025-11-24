import { KeyAlgorithm } from "./core/core-types.js";
import { DidResolver, KeyDid, KeyDidFactory } from "./identity/did.js";
import { Identity } from "./identity/identity.js";
import { KeyPair, KeyPurpose } from "./wallet/key.js";
import { Wallet } from "./wallet/wallet.js";

const keypair = KeyPair.generateKeyPair('1234', KeyPurpose.Encryption, KeyAlgorithm.Ed25519);

const factory = new KeyDidFactory();
const did = factory.createDid(keypair.publicKey.key);

const idenitity = new Identity(did);

const wallet = new Wallet();
wallet.addIdentity(idenitity);
wallet.addKeyPair(keypair);
wallet.assignKeyPairToIdentity(idenitity, keypair);

console.log(idenitity.getKeyPairs()[0]);