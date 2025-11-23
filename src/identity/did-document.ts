import { Ajv, type ErrorObject } from "ajv";
import addFormats from "ajv-formats";
import didDocumentSchema from './did-document.schema.json' with { type: 'json' }

type VerificationMethodKeyMaterial =
  | { publicKeyJwk: Record<string, unknown> }
  | { publicKeyBase58: string }
  | { publicKeyMultibase: string };

export class VerificationMethod {
  publicKeyJwk?: Record<string, unknown>;
  publicKeyBase58?: string;
  publicKeyMultibase?: string;

  constructor(
    public id: string,
    public type: string,
    public controller: string,
    publicKey: VerificationMethodKeyMaterial
  ) {
    if ("publicKeyJwk" in publicKey) {
      this.publicKeyJwk = publicKey.publicKeyJwk;
    } else if ("publicKeyBase58" in publicKey) {
      this.publicKeyBase58 = publicKey.publicKeyBase58;
    } else if ("publicKeyMultibase" in publicKey) {
      this.publicKeyMultibase = publicKey.publicKeyMultibase;
    } else {
      throw new Error("VerificationMethod must have exactly one key material");
    }
  }
}

export class Service {
  constructor(
    public id: string,
    public type: string | string[],
    public serviceEndpoint: string | ServiceEndpoint,
    public accept?: string[],
    public routingKeys?: string[]
  ) {}
}

export interface ServiceEndpoint {
  uri: string;
  accept?: string[];
  routingKeys?: string[];
}

export class DIDDocument {
  public "@context": string | string[];
  constructor(
    context: string | string[],
    public id: string,
    public alsoKnownAs?: string[] | undefined,
    public controller?: string | string[] | undefined,
    public verificationMethod?: VerificationMethod[] | undefined,
    public authentication?: (string | VerificationMethod)[] | undefined,
    public assertionMethod?: (string | VerificationMethod)[] | undefined,
    public keyAgreement?: (string | VerificationMethod)[] | undefined,
    public capabilityInvocation?: (string | VerificationMethod)[] | undefined,
    public capabilityDelegation?: (string | VerificationMethod)[] | undefined,
    public service?: Service[] | undefined
  ) {
    this["@context"] = context;
  }
  
  validate(): ErrorObject[] | null | undefined {
    const ajv = new Ajv();
    (addFormats as any)(ajv);

    const valid = ajv.validate(didDocumentSchema, this);

    if (valid) return null;
    return ajv.errors;
  }

  static fromJSON(json: any): DIDDocument {
    const context = json["@context"];

    const doc = new DIDDocument(
      context,
      json.id,
      json.alsoKnownAs,
      json.controller,
      json.verificationMethod?.map((vm: any) => {
        const { id, type, controller, ...keyMaterial } = vm;
        return new VerificationMethod(id, type, controller, keyMaterial);
      }),
      json.authentication,
      json.assertionMethod,
      json.keyAgreement,
      json.capabilityInvocation,
      json.capabilityDelegation,
      json.service?.map((svc: any) => {
        const { id, type, serviceEndpoint, accept, routingKeys } = svc;
        return new Service(id, type, serviceEndpoint, accept, routingKeys);
      })
    );

    const errors = doc.validate();
    if (errors) throw new Error(`Invalid DID Document: ${JSON.stringify(errors, null, 2)}`);

    return doc;
  }

  toJSON(): any {
    return {
      "@context": this["@context"],
      id: this.id,
      alsoKnownAs: this.alsoKnownAs,
      controller: this.controller,

      verificationMethod: this.verificationMethod?.map(vm => ({
        id: vm.id,
        type: vm.type,
        controller: vm.controller,
        ...(vm.publicKeyJwk && { publicKeyJwk: vm.publicKeyJwk }),
        ...(vm.publicKeyBase58 && { publicKeyBase58: vm.publicKeyBase58 }),
        ...(vm.publicKeyMultibase && { publicKeyMultibase: vm.publicKeyMultibase })
      })),

      authentication: this.authentication?.map(x =>
        typeof x === "string"
          ? x
          : {
              id: x.id,
              type: x.type,
              controller: x.controller,
              ...(x.publicKeyJwk && { publicKeyJwk: x.publicKeyJwk }),
              ...(x.publicKeyBase58 && { publicKeyBase58: x.publicKeyBase58 }),
              ...(x.publicKeyMultibase && { publicKeyMultibase: x.publicKeyMultibase })
            }
      ),

      assertionMethod: this.assertionMethod,
      keyAgreement: this.keyAgreement,
      capabilityInvocation: this.capabilityInvocation,
      capabilityDelegation: this.capabilityDelegation,

      service: this.service?.map(svc => ({
        id: svc.id,
        type: svc.type,
        serviceEndpoint: svc.serviceEndpoint,
        ...(svc.accept && { accept: svc.accept }),
        ...(svc.routingKeys && { routingKeys: svc.routingKeys })
      }))
    };
  }
}