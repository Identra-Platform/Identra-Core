import type { KeyPurpose, PublicKey } from "../wallet/key.js";

export class DidDocument {
  constructor(
    public publicKeys: Map<KeyPurpose, PublicKey> = new Map(),
    public services: ServiceEndpoint[] = []
  ) {}
}
class ServiceEndpoint {}