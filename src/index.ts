import { DIDDocument, Service, VerificationMethod } from "./identity/did-document.js";

const json = {
  "@context": "https://www.w3.org/ns/did/v1",
  id: "did:web:example.com",
  verificationMethod: [
    {
      id: "key:1",
      type: "JsonWebKey2020",
      controller: "did:web:example.com",
      publicKeyJwk: {
        kty: "OKP",
        crv: "Ed25519",
        x: "abc123"
      }
    }
  ],
  service: [
    {
      id: "msg",
      type: "DIDCommMessaging",
      serviceEndpoint: "https://example.com/inbox"
    }
  ]
};

/*const didDoc1 = new DIDDocument(
  'https://www.w3.org/ns/did/v1',
  'did:web:0x123456789abcd',
  undefined,
  'did:web:0x123456789abcd',
  [
    new VerificationMethod(
      'keys:1',
      'assertionMethod',
      'did:web:0x123456789abcd',
      {
        publicKeyBase58: 'BASE58_PUBLIC_KEY'
      }
    )
  ],
  undefined,
  ['keys:1'],
  undefined,
  undefined,
  undefined,
  [
    new Service(
      '12345',
      'website',
      'https://www.example.com'
    )
  ]
);*/

const didDoc = DIDDocument.fromJSON(json);

console.log(didDoc.toJSON());