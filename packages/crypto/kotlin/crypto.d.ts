type Nullable<T> = T | null | undefined
export declare namespace kotlin.collections {
    interface KtList<E> /* extends kotlin.collections.Collection<E> */ {
        asJsReadonlyArrayView(): ReadonlyArray<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtList": unique symbol;
        };
    }
    const KtList: {
        fromJsArray<E>(array: ReadonlyArray<E>): kotlin.collections.KtList<E>;
    };
    interface KtMap<K, V> {
        asJsReadonlyMapView(): ReadonlyMap<K, V>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtMap": unique symbol;
        };
    }
    const KtMap: {
        fromJsMap<K, V>(map: ReadonlyMap<K, V>): kotlin.collections.KtMap<K, V>;
    };
}
export declare namespace io.ktor.client.engine.js {
    /** @deprecated  */
    const initHook: any;
}
export declare namespace id.walt.crypto.keys {
    abstract class Key {
        constructor();
        abstract get keyType(): id.walt.crypto.keys.KeyType;
        abstract get hasPrivateKey(): boolean;
        signJws$default(plaintext: Int8Array, headers: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> | undefined, $completion: any/* kotlin.coroutines.Continuation<string> */): any;
        verifyRaw$default(signed: Int8Array, detachedPlaintext: Nullable<Int8Array> | undefined, $completion: any/* kotlin.coroutines.Continuation<kotlin.Result<Int8Array>> */): any;
        signJwsAsync$default(plaintext: Int8Array, headers?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): Promise<string>;
        verifyRawAsync$default(signed: Int8Array, detachedPlaintext?: Nullable<Int8Array>): Promise<any/* kotlin.Result<Int8Array> */>;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    namespace Key {
        class $exportJWKPrettyCOROUTINE$0 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.Key, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
    }
}
export declare namespace id.walt.crypto.keys {
    abstract class KeySerialization extends _objects_.id$walt$crypto$keys$KeySerialization {
        private constructor();
    }
    namespace KeySerialization {
        class $deserializeKeyCOROUTINE$2 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.crypto.keys.KeySerialization, json: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.Key>> */);
        }
        class $deserializeKeyObjectCOROUTINE$3 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.crypto.keys.KeySerialization, json: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.Key>> */);
        }
        class $deserializeJWTKeyCOROUTINE$4 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.crypto.keys.KeySerialization, json: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.Key>> */);
        }
    }
}
declare namespace _objects_ {
    const id$walt$crypto$keys$KeySerialization: {
        registerExternalKeyType<T extends id.walt.crypto.keys.Key>(keyClass: any/* kotlin.reflect.KClass<T> */): void;
        serializeKey(key: id.walt.crypto.keys.Key): string;
        serializeKeyToJson(key: id.walt.crypto.keys.Key): any/* kotlinx.serialization.json.JsonElement */;
    } & {
        new(): any;
    };
}
export declare namespace id.walt.crypto.keys {
    abstract class KeyType {
        private constructor();
        static get Ed25519(): id.walt.crypto.keys.KeyType & {
            get name(): "Ed25519";
            get ordinal(): 0;
        };
        static get secp256k1(): id.walt.crypto.keys.KeyType & {
            get name(): "secp256k1";
            get ordinal(): 1;
        };
        static get secp256r1(): id.walt.crypto.keys.KeyType & {
            get name(): "secp256r1";
            get ordinal(): 2;
        };
        static get RSA(): id.walt.crypto.keys.KeyType & {
            get name(): "RSA";
            get ordinal(): 3;
        };
        get name(): "Ed25519" | "secp256k1" | "secp256r1" | "RSA";
        get ordinal(): 0 | 1 | 2 | 3;
        static values(): Array<id.walt.crypto.keys.KeyType>;
        static valueOf(value: string): id.walt.crypto.keys.KeyType;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    abstract class KeyCategory {
        private constructor();
        static get RSA(): id.walt.crypto.keys.KeyCategory & {
            get name(): "RSA";
            get ordinal(): 0;
        };
        static get ECC(): id.walt.crypto.keys.KeyCategory & {
            get name(): "ECC";
            get ordinal(): 1;
        };
        static get EdDSA(): id.walt.crypto.keys.KeyCategory & {
            get name(): "EdDSA";
            get ordinal(): 2;
        };
        get name(): "RSA" | "ECC" | "EdDSA";
        get ordinal(): 0 | 1 | 2;
        static values(): Array<id.walt.crypto.keys.KeyCategory>;
        static valueOf(value: string): id.walt.crypto.keys.KeyCategory;
    }
}
export declare namespace id.walt.crypto.keys.aws {
    class AWSAuth {
        constructor(accessKeyId?: Nullable<string>, secretAccessKey?: Nullable<string>, region?: Nullable<string>, roleName?: Nullable<string>);
        get accessKeyId(): Nullable<string>;
        get secretAccessKey(): Nullable<string>;
        get region(): Nullable<string>;
        get roleName(): Nullable<string>;
        copy(accessKeyId?: Nullable<string>, secretAccessKey?: Nullable<string>, region?: Nullable<string>, roleName?: Nullable<string>): id.walt.crypto.keys.aws.AWSAuth;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.crypto.keys.aws {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class AWSKeyRestAPI extends id.walt.crypto.keys.Key {
        constructor(config: any/* id.walt.crypto.keys.aws.AWSKeyMetadata */, id: string, _publicKey?: Nullable<string>, _keyType?: Nullable<id.walt.crypto.keys.KeyType>);
        get config(): any/* id.walt.crypto.keys.aws.AWSKeyMetadata */;
        get id(): string;
        get keyType(): id.walt.crypto.keys.KeyType;
        set keyType(value: id.walt.crypto.keys.KeyType);
        get hasPrivateKey(): boolean;
        toString(): string;
    }
    namespace AWSKeyRestAPI {
        abstract class Companion extends _objects_.id$walt$crypto$keys$aws$AWSKeyRestAPI$Companion /* implements id.walt.crypto.keys.aws.AWSKeyCreator */ {
            private constructor();
        }
        namespace Companion {
            class $authAccessCOROUTINE$13 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.crypto.keys.aws.AWSKeyRestAPI.Companion, config: any/* id.walt.crypto.keys.aws.AWSKeyMetadata */, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
            }
            class $getAccessCOROUTINE$14 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.crypto.keys.aws.AWSKeyRestAPI.Companion, config: any/* id.walt.crypto.keys.aws.AWSKeyMetadata */, resultContinuation: any/* kotlin.coroutines.Continuation<Nullable<id.walt.crypto.keys.aws.AWSAuthConfiguration>> */);
            }
            class $getIMDSv2TokenCOROUTINE$15 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.crypto.keys.aws.AWSKeyRestAPI.Companion, ttlSeconds: number, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
            }
            class $getRoleNameCOROUTINE$16 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.crypto.keys.aws.AWSKeyRestAPI.Companion, token: string, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
            }
            class $getTemporaryCredentialsCOROUTINE$17 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.crypto.keys.aws.AWSKeyRestAPI.Companion, token: string, roleName: string, region: string, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.aws.AWSAuthConfiguration> */);
            }
            class $getPublicKeyCOROUTINE$18 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.crypto.keys.aws.AWSKeyRestAPI.Companion, config: any/* id.walt.crypto.keys.aws.AWSKeyMetadata */, keyId: string, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.Key> */);
            }
            class $generateCOROUTINE$20 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.crypto.keys.aws.AWSKeyRestAPI.Companion, type: id.walt.crypto.keys.KeyType, config: any/* id.walt.crypto.keys.aws.AWSKeyMetadata */, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.aws.AWSKeyRestAPI> */);
            }
        }
        class $getKeyIdCOROUTINE$5 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.aws.AWSKeyRestAPI, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $signRawCOROUTINE$6 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.aws.AWSKeyRestAPI, plaintext: Int8Array, resultContinuation: any/* kotlin.coroutines.Continuation<Int8Array> */);
        }
        class $signJwsCOROUTINE$7 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.aws.AWSKeyRestAPI, plaintext: Int8Array, headers: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $verifyRawCOROUTINE$8 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.aws.AWSKeyRestAPI, signed: Int8Array, detachedPlaintext: Nullable<Int8Array>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<Int8Array>> */);
        }
        class $verifyJwsCOROUTINE$9 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.aws.AWSKeyRestAPI, signedJws: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlinx.serialization.json.JsonElement>> */);
        }
        class $getPublicKeyCOROUTINE$10 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.aws.AWSKeyRestAPI, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.Key> */);
        }
        class $getMetaCOROUTINE$11 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.aws.AWSKeyRestAPI, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.AwsKeyMeta> */);
        }
        class $deleteKeyCOROUTINE$12 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.aws.AWSKeyRestAPI, resultContinuation: any/* kotlin.coroutines.Continuation<boolean> */);
        }
    }
}
declare namespace _objects_ {
    const id$walt$crypto$keys$aws$AWSKeyRestAPI$Companion: {
        sha256Hex(data: string): string;
        hmacSHA256(key: Int8Array, data: string): Int8Array;
        sha256(data: Int8Array): Int8Array;
        getSignatureKey(config: any/* id.walt.crypto.keys.aws.AWSKeyMetadata */, dateStamp: string): Int8Array;
        createCanonicalRequest(method: any/* io.ktor.http.HttpMethod */, canonicalUri: string, canonicalQueryString: string, canonicalHeaders: string, signedHeaders: string, payload: string): string;
        createStringToSign(algorithm: string, amzDate: string, credentialScope: string, canonicalRequest: string): string;
        generateSignature(signingKey: Int8Array, stringToSign: string): string;
        createAuthorizationHeader(algorithm: string, accessKey: string, credentialScope: string, signedHeaders: string, signature: string): string;
        buildSigV4Headers(method: any/* io.ktor.http.HttpMethod */, payload: string, config: any/* id.walt.crypto.keys.aws.AWSKeyMetadata */): kotlin.collections.KtMap<string, string>;
        getIMDSv2Token$default(ttlSeconds: number | undefined, $completion: any/* kotlin.coroutines.Continuation<string> */): any;
    } & any/* id.walt.crypto.keys.aws.AWSKeyCreator */ & {
        new(): any;
    };
}
export declare namespace id.walt.crypto.keys.azure {
    class AzureAuth {
        constructor(clientId: string, clientSecret: string, tenantId: string, keyVaultUrl: string);
        get clientId(): string;
        get clientSecret(): string;
        get tenantId(): string;
        get keyVaultUrl(): string;
        copy(clientId?: string, clientSecret?: string, tenantId?: string, keyVaultUrl?: string): id.walt.crypto.keys.azure.AzureAuth;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.crypto.keys.azure {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class AzureKey extends id.walt.crypto.keys.Key {
        constructor(id: string, auth: id.walt.crypto.keys.azure.AzureAuth, _keyType?: Nullable<id.walt.crypto.keys.KeyType>, _publicKey?: Nullable<any>/* Nullable<id.walt.crypto.keys.DirectSerializedKey> */);
        get id(): string;
        get auth(): id.walt.crypto.keys.azure.AzureAuth;
        get keyType(): id.walt.crypto.keys.KeyType;
        set keyType(value: id.walt.crypto.keys.KeyType);
        get hasPrivateKey(): boolean;
        toString(): string;
    }
    namespace AzureKey {
        class KeyCreateRequest {
            constructor(kty: string, crv: Nullable<string> | undefined, keySize: Nullable<number> | undefined, keyOps: kotlin.collections.KtList<string>);
            get kty(): string;
            get crv(): Nullable<string>;
            get keySize(): Nullable<number>;
            get keyOps(): kotlin.collections.KtList<string>;
            copy(kty?: string, crv?: Nullable<string>, keySize?: Nullable<number>, keyOps?: kotlin.collections.KtList<string>): id.walt.crypto.keys.azure.AzureKey.KeyCreateRequest;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        abstract class AzureKeyFunctions {
            private constructor();
        }
        namespace AzureKeyFunctions {
            class ParsedAzurePublicKey {
                constructor(kid: string, azureKeyType: string, curve: Nullable<string>, keyType: id.walt.crypto.keys.KeyType, publicKey: id.walt.crypto.keys.jwk.JWKKey);
                get kid(): string;
                get azureKeyType(): string;
                get curve(): Nullable<string>;
                get keyType(): id.walt.crypto.keys.KeyType;
                get publicKey(): id.walt.crypto.keys.jwk.JWKKey;
                copy(kid?: string, azureKeyType?: string, curve?: Nullable<string>, keyType?: id.walt.crypto.keys.KeyType, publicKey?: id.walt.crypto.keys.jwk.JWKKey): id.walt.crypto.keys.azure.AzureKey.AzureKeyFunctions.ParsedAzurePublicKey;
                toString(): string;
                hashCode(): number;
                equals(other: Nullable<any>): boolean;
            }
            class AzureTokenResponse {
                constructor(tokenType: string, expiresIn: number, extExpiresIn: number, accessToken: string);
                get tokenType(): string;
                get expiresIn(): number;
                get extExpiresIn(): number;
                get accessToken(): string;
                copy(tokenType?: string, expiresIn?: number, extExpiresIn?: number, accessToken?: string): id.walt.crypto.keys.azure.AzureKey.AzureKeyFunctions.AzureTokenResponse;
                toString(): string;
                hashCode(): number;
                equals(other: Nullable<any>): boolean;
                static get Companion(): {
                };
            }
            class AzureTokenResponseParsed {
                constructor(accessToken: string, expiration: any/* kotlinx.datetime.Instant */);
                get accessToken(): string;
                get expiration(): any/* kotlinx.datetime.Instant */;
                copy(accessToken?: string, expiration?: any/* kotlinx.datetime.Instant */): id.walt.crypto.keys.azure.AzureKey.AzureKeyFunctions.AzureTokenResponseParsed;
                toString(): string;
                hashCode(): number;
                equals(other: Nullable<any>): boolean;
                static get Companion(): {
                };
            }
            class $fetchAccessTokenCOROUTINE$34 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.crypto.keys.azure.AzureKey.AzureKeyFunctions, auth: id.walt.crypto.keys.azure.AzureAuth, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.azure.AzureKey.AzureKeyFunctions.AzureTokenResponseParsed> */);
            }
        }
        abstract class Companion extends _objects_.id$walt$crypto$keys$azure$AzureKey$Companion /* implements id.walt.crypto.keys.azure.AzureKeyCreator */ {
            private constructor();
        }
        namespace Companion {
            class $generateCOROUTINE$36 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.crypto.keys.azure.AzureKey.Companion, type: id.walt.crypto.keys.KeyType, metadata: any/* id.walt.crypto.keys.azure.AzureKeyMetadata */, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.azure.AzureKey> */);
            }
        }
        class $fetchAndUpdatePublicKeyCOROUTINE$21 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
        }
        class $updateAccessTokenCOROUTINE$22 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
        }
        class $ensureAccessTokenValidCOROUTINE$23 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
        }
        class $initCOROUTINE$24 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
        }
        class $signRawAzureCOROUTINE$25 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, plaintext: Int8Array, ieeeP1363Signature: boolean, resultContinuation: any/* kotlin.coroutines.Continuation<Int8Array> */);
        }
        class $signJwsCOROUTINE$26 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, plaintext: Int8Array, headers: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $verifyRawCOROUTINE$27 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, signed: Int8Array, detachedPlaintext: Nullable<Int8Array>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<Int8Array>> */);
        }
        class $verifyJwsCOROUTINE$28 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, signedJws: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlinx.serialization.json.JsonElement>> */);
        }
        class $getPublicKeyRepresentationCOROUTINE$29 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, resultContinuation: any/* kotlin.coroutines.Continuation<Int8Array> */);
        }
        class $getMetaCOROUTINE$30 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.KeyMeta> */);
        }
        class $deleteKeyCOROUTINE$31 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, resultContinuation: any/* kotlin.coroutines.Continuation<boolean> */);
        }
        class $getPublicKeyFromAzureKmsCOROUTINE$32 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.azure.AzureKey, keyId: string, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.Key> */);
        }
    }
}
declare namespace _objects_ {
    const id$walt$crypto$keys$azure$AzureKey$Companion: {
    } & any/* id.walt.crypto.keys.azure.AzureKeyCreator */ & {
        new(): any;
    };
}
export declare namespace id.walt.crypto.keys.jwk {
    interface JWKKeyCreator {
        generate$default(type: id.walt.crypto.keys.KeyType, metadata: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */ | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.jwk.JWKKey> */): any;
        importRawPublicKey$default(type: id.walt.crypto.keys.KeyType, rawPublicKey: Int8Array, metadata: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */ | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.Key> */): any;
        generateAsync$default(type: id.walt.crypto.keys.KeyType, metadata?: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */): Promise<id.walt.crypto.keys.jwk.JWKKey>;
        importRawPublicKeyAsync$default(type: id.walt.crypto.keys.KeyType, rawPublicKey: Int8Array, metadata?: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */): Promise<id.walt.crypto.keys.Key>;
        readonly __doNotUseOrImplementIt: {
            readonly "id.walt.crypto.keys.jwk.JWKKeyCreator": unique symbol;
        };
    }
}
export declare namespace id.walt.crypto.keys.oci {
    class OCIKeyMetadata {
        constructor(tenancyOcid: string, compartmentOcid: string, userOcid: string, fingerprint: string, managementEndpoint: string, cryptoEndpoint: string, signingKeyPem?: Nullable<string>);
        get tenancyOcid(): string;
        get compartmentOcid(): string;
        get userOcid(): string;
        get fingerprint(): string;
        get managementEndpoint(): string;
        get cryptoEndpoint(): string;
        get signingKeyPem(): Nullable<string>;
        copy(tenancyOcid?: string, compartmentOcid?: string, userOcid?: string, fingerprint?: string, managementEndpoint?: string, cryptoEndpoint?: string, signingKeyPem?: Nullable<string>): id.walt.crypto.keys.oci.OCIKeyMetadata;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.crypto.keys.oci {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class OCIKeyRestApi extends id.walt.crypto.keys.Key {
        constructor(config: id.walt.crypto.keys.oci.OCIKeyMetadata, id: string, _publicKey?: Nullable<string>, _keyType?: Nullable<id.walt.crypto.keys.KeyType>);
        get config(): id.walt.crypto.keys.oci.OCIKeyMetadata;
        get id(): string;
        get keyType(): id.walt.crypto.keys.KeyType;
        set keyType(value: id.walt.crypto.keys.KeyType);
        get hasPrivateKey(): boolean;
        toString(): string;
        static get Companion(): {
        };
    }
    namespace OCIKeyRestApi {
        class $getKeyIdCOROUTINE$38 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.oci.OCIKeyRestApi, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $signJwsCOROUTINE$39 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.oci.OCIKeyRestApi, plaintext: Int8Array, headers: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $verifyRawCOROUTINE$40 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.oci.OCIKeyRestApi, signed: Int8Array, detachedPlaintext: Nullable<Int8Array>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<Int8Array>> */);
        }
        class $verifyJwsCOROUTINE$41 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.oci.OCIKeyRestApi, signedJws: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlinx.serialization.json.JsonElement>> */);
        }
        class $getPublicKeyCOROUTINE$42 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.oci.OCIKeyRestApi, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.Key> */);
        }
        class $getMetaCOROUTINE$43 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.oci.OCIKeyRestApi, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.OciKeyMeta> */);
        }
    }
}
export declare namespace id.walt.crypto.keys.tse {
    class TSEAuth {
        constructor(accessKey?: Nullable<string>, roleId?: Nullable<string>, secretId?: Nullable<string>, userpassPath?: string, username?: Nullable<string>, password?: Nullable<string>);
        get accessKey(): Nullable<string>;
        get roleId(): Nullable<string>;
        get secretId(): Nullable<string>;
        get userpassPath(): string;
        get username(): Nullable<string>;
        get password(): Nullable<string>;
        copy(accessKey?: Nullable<string>, roleId?: Nullable<string>, secretId?: Nullable<string>, userpassPath?: string, username?: Nullable<string>, password?: Nullable<string>): id.walt.crypto.keys.tse.TSEAuth;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    namespace TSEAuth {
        class $getLoginTokenCOROUTINE$52 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.tse.TSEAuth, server: string, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
    }
}
export declare namespace id.walt.crypto.keys.tse {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class TSEKey extends id.walt.crypto.keys.Key {
        constructor(server: string, auth: Nullable<id.walt.crypto.keys.tse.TSEAuth> | undefined, accessKey: Nullable<string> | undefined, namespace: Nullable<string> | undefined, id: string, _publicKey?: Nullable<Int8Array>, _keyType?: Nullable<id.walt.crypto.keys.KeyType>);
        get server(): string;
        get id(): string;
        static httpRequest$default($this: id.walt.crypto.keys.tse.TSEKey, method: any/* io.ktor.http.HttpMethod */ | undefined, url: string | undefined, body: Nullable<any> | undefined, $completion: any/* kotlin.coroutines.Continuation<io.ktor.client.statement.HttpResponse> */): any;
        get keyType(): id.walt.crypto.keys.KeyType;
        set keyType(value: id.walt.crypto.keys.KeyType);
        get hasPrivateKey(): boolean;
        toString(): string;
    }
    namespace TSEKey {
        abstract class Companion extends _objects_.id$walt$crypto$keys$tse$TSEKey$Companion implements id.walt.crypto.keys.tse.TSEKeyCreator {
            private constructor();
        }
        namespace Companion {
            class $tseJsonDataBodyCOROUTINE$67 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.crypto.keys.tse.TSEKey.Companion, _this_: any/* io.ktor.client.statement.HttpResponse */, resultContinuation: any/* kotlin.coroutines.Continuation<kotlinx.serialization.json.JsonObject> */);
            }
            class $generateCOROUTINE$68 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.crypto.keys.tse.TSEKey.Companion, type: id.walt.crypto.keys.KeyType, metadata: id.walt.crypto.keys.tse.TSEKeyMetadata, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.tse.TSEKey> */);
            }
        }
        class $initCOROUTINE$54 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.tse.TSEKey, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
        }
        class $getKeyIdCOROUTINE$58 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.tse.TSEKey, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $signRawCOROUTINE$59 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.tse.TSEKey, plaintext: Int8Array, resultContinuation: any/* kotlin.coroutines.Continuation<any> */);
        }
        class $signJwsCOROUTINE$60 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.tse.TSEKey, plaintext: Int8Array, headers: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $verifyRawCOROUTINE$61 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.tse.TSEKey, signed: Int8Array, detachedPlaintext: Nullable<Int8Array>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<Int8Array>> */);
        }
        class $verifyJwsCOROUTINE$62 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.tse.TSEKey, signedJws: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlinx.serialization.json.JsonElement>> */);
        }
        class $getEncodedPublicKeyCOROUTINE$63 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.tse.TSEKey, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $getPublicKeyCOROUTINE$64 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.tse.TSEKey, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.Key> */);
        }
        class $getMetaCOROUTINE$65 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.tse.TSEKey, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.TseKeyMeta> */);
        }
        class $deleteCOROUTINE$66 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.tse.TSEKey, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
        }
    }
}
declare namespace _objects_ {
    const id$walt$crypto$keys$tse$TSEKey$Companion: {
        readonly __doNotUseOrImplementIt: id.walt.crypto.keys.tse.TSEKeyCreator["__doNotUseOrImplementIt"];
    } & id.walt.crypto.keys.tse.TSEKeyCreator & {
        new(): any;
    };
}
export declare namespace id.walt.crypto.keys.tse {
    interface TSEKeyCreator {
        readonly __doNotUseOrImplementIt: {
            readonly "id.walt.crypto.keys.tse.TSEKeyCreator": unique symbol;
        };
    }
}
export declare namespace id.walt.crypto.keys.tse {
    class TSEKeyMetadata {
        constructor(server: string, auth: id.walt.crypto.keys.tse.TSEAuth, namespace?: Nullable<string>, id?: Nullable<string>);
        get server(): string;
        get auth(): id.walt.crypto.keys.tse.TSEAuth;
        get namespace(): Nullable<string>;
        get id(): Nullable<string>;
        static TSEKeyMetadata2(server: string, token: string, namespace?: Nullable<string>, id?: Nullable<string>): id.walt.crypto.keys.tse.TSEKeyMetadata;
        copy(server?: string, auth?: id.walt.crypto.keys.tse.TSEAuth, namespace?: Nullable<string>, id?: Nullable<string>): id.walt.crypto.keys.tse.TSEKeyMetadata;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.crypto.utils {
    const Base64Utils: {
        base64toBase64Url(_this_: string): string;
        base64UrlToBase64(_this_: string): string;
        encodeToBase64(_this_: Int8Array): string;
        decodeFromBase64(_this_: string): Int8Array;
        encodeToBase64Url(_this_: Int8Array): string;
        decodeFromBase64Url(_this_: string): Int8Array;
        base64UrlDecode(_this_: string): Int8Array;
        base64Decode(_this_: string): Int8Array;
    };
}
export declare namespace id.walt.crypto.utils {
    abstract class JsonCanonicalizationUtils {
        private constructor();
    }
    namespace JsonCanonicalizationUtils {
        class $convertToRequiredMembersJsonStringCOROUTINE$69 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.crypto.utils.JsonCanonicalizationUtils, key: id.walt.crypto.keys.Key, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
    }
}
export declare namespace id.walt.crypto.utils {
    const JsonUtils: {
        toJsonElement(_this_: Nullable<any>): any/* kotlinx.serialization.json.JsonElement */;
        javaToJsonElement(any: Nullable<any>): any/* kotlinx.serialization.json.JsonElement */;
        listToJsonElement(_this_: kotlin.collections.KtList<any /*UnknownType **/>): any/* kotlinx.serialization.json.JsonElement */;
        mapToJsonObject(_this_: kotlin.collections.KtMap<any /*UnknownType **/, any /*UnknownType **/>): any/* kotlinx.serialization.json.JsonElement */;
        toJsonObject(_this_: kotlin.collections.KtMap<any /*UnknownType **/, any /*UnknownType **/>): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        javaToJsonObject(map: kotlin.collections.KtMap<any /*UnknownType **/, any /*UnknownType **/>): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        printAsJson(_this_: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): string;
        stringToJsonPrimitive(value: string): any/* kotlinx.serialization.json.JsonPrimitive */;
    };
}
export declare namespace id.walt.crypto.utils {
    abstract class JwsUtils extends _objects_.id$walt$crypto$utils$JwsUtils {
        private constructor();
    }
    namespace JwsUtils {
        class JwsParts {
            constructor(header: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, payload: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, signature: string);
            get header(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
            get payload(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
            get signature(): string;
            toString(): string;
            copy(header?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, payload?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, signature?: string): id.walt.crypto.utils.JwsUtils.JwsParts;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        class JwsPartsSdJwt {
            constructor(jwsParts: id.walt.crypto.utils.JwsUtils.JwsParts, sdJwtDisclosures: kotlin.collections.KtList<string>);
            get jwsParts(): id.walt.crypto.utils.JwsUtils.JwsParts;
            get sdJwtDisclosures(): kotlin.collections.KtList<string>;
            sdJwtDisclosuresString(): string;
            toString(): string;
            copy(jwsParts?: id.walt.crypto.utils.JwsUtils.JwsParts, sdJwtDisclosures?: kotlin.collections.KtList<string>): id.walt.crypto.utils.JwsUtils.JwsPartsSdJwt;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        class JwsStringParts {
            constructor(header: string, payload: string, signature: string);
            get header(): string;
            get payload(): string;
            get signature(): string;
            getSignable(): string;
            copy(header?: string, payload?: string, signature?: string): id.walt.crypto.utils.JwsUtils.JwsStringParts;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
    }
}
declare namespace _objects_ {
    const id$walt$crypto$utils$JwsUtils: {
        jwsAlg(_this_: id.walt.crypto.keys.KeyType): string;
        decodeJwsStrings(_this_: string): id.walt.crypto.utils.JwsUtils.JwsStringParts;
        decodeJws(_this_?: string, withSignature?: boolean, allowMissingSignature?: boolean): id.walt.crypto.utils.JwsUtils.JwsParts;
        decodeJwsOrSdjwt(_this_: string): id.walt.crypto.utils.JwsUtils.JwsPartsSdJwt;
    } & {
        new(): any;
    };
}
export declare namespace id.walt.crypto.utils {
    abstract class MultiCodecUtils extends _objects_.id$walt$crypto$utils$MultiCodecUtils {
        private constructor();
    }
    namespace MultiCodecUtils {
        class UVarInt {
            constructor(value: any/* kotlin.UInt */);
            get value(): any/* kotlin.UInt */;
            get bytes(): Int8Array;
            get length(): number;
            toString(): string;
            static get Companion(): {
                get MSB(): any/* kotlin.UInt */;
                get LSB(): any/* kotlin.UInt */;
                get MSBALL(): any/* kotlin.UInt */;
                fromBytes(bytes: Int8Array): id.walt.crypto.utils.MultiCodecUtils.UVarInt;
            };
        }
    }
}
declare namespace _objects_ {
    const id$walt$crypto$utils$MultiCodecUtils: {
        get JwkJcsPubMultiCodecKeyCode(): any/* kotlin.UInt */;
        getMultiCodecKeyCode(keyType: id.walt.crypto.keys.KeyType): any/* kotlin.UInt */;
        getKeyTypeFromKeyCode(code: any/* kotlin.UInt */): id.walt.crypto.keys.KeyType;
        getMultiCodecKeyCodeUsingString(mb: string): any/* kotlin.UInt */;
    } & {
        new(): any;
    };
}
export declare namespace id.walt.crypto.keys {
    abstract class JsJWKKeyCreator extends _objects_.id$walt$crypto$keys$JsJWKKeyCreator implements id.walt.crypto.keys.jwk.JWKKeyCreator {
        private constructor();
    }
    namespace JsJWKKeyCreator {
        class $generateCOROUTINE$70 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.crypto.keys.JsJWKKeyCreator, type: id.walt.crypto.keys.KeyType, metadata: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.jwk.JWKKey> */);
        }
        class $importRawPublicKeyCOROUTINE$71 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.crypto.keys.JsJWKKeyCreator, type: id.walt.crypto.keys.KeyType, rawPublicKey: Int8Array, metadata: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.Key> */);
        }
        class $importJWKCOROUTINE$72 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.crypto.keys.JsJWKKeyCreator, jwk: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.jwk.JWKKey>> */);
        }
        class $importPEMCOROUTINE$73 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.crypto.keys.JsJWKKeyCreator, pem: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.jwk.JWKKey>> */);
        }
    }
}
declare namespace _objects_ {
    const id$walt$crypto$keys$JsJWKKeyCreator: {
        generate$default(type: id.walt.crypto.keys.KeyType, metadata: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */ | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.jwk.JWKKey> */): any;
        importRawPublicKey$default(type: id.walt.crypto.keys.KeyType, rawPublicKey: Int8Array, metadata: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */ | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.Key> */): any;
        generateAsync$default(type: id.walt.crypto.keys.KeyType, metadata?: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */): Promise<id.walt.crypto.keys.jwk.JWKKey>;
        importRawPublicKeyAsync$default(type: id.walt.crypto.keys.KeyType, rawPublicKey: Int8Array, metadata?: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */): Promise<id.walt.crypto.keys.Key>;
        readonly __doNotUseOrImplementIt: id.walt.crypto.keys.jwk.JWKKeyCreator["__doNotUseOrImplementIt"];
    } & id.walt.crypto.keys.jwk.JWKKeyCreator & {
        new(): any;
    };
}
export declare namespace id.walt.crypto.keys.jwk {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class JWKKey extends id.walt.crypto.keys.Key {
        constructor(jwk: Nullable<string>, _keyId?: Nullable<string>);
        get jwk(): Nullable<string>;
        set jwk(value: Nullable<string>);
        get _keyId(): Nullable<string>;
        static jwkKeyUsingKeyLike(key: KeyLike): id.walt.crypto.keys.jwk.JWKKey;
        static jwkKeyUsingKeyLikeAndJWK(key: KeyLike, jwk: JWK): id.walt.crypto.keys.jwk.JWKKey;
        static jwkKeyUsingJWK(jwk: JWK): id.walt.crypto.keys.jwk.JWKKey;
        get keyType(): id.walt.crypto.keys.KeyType;
        get hasPrivateKey(): boolean;
        static get Companion(): {
            generate$default(type: id.walt.crypto.keys.KeyType, metadata: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */ | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.jwk.JWKKey> */): any;
            importRawPublicKey$default(type: id.walt.crypto.keys.KeyType, rawPublicKey: Int8Array, metadata: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */ | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.Key> */): any;
            generateAsync$default(type: id.walt.crypto.keys.KeyType, metadata?: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */): Promise<id.walt.crypto.keys.jwk.JWKKey>;
            importRawPublicKeyAsync$default(type: id.walt.crypto.keys.KeyType, rawPublicKey: Int8Array, metadata?: Nullable<any>/* Nullable<id.walt.crypto.keys.JwkKeyMeta> */): Promise<id.walt.crypto.keys.Key>;
            readonly __doNotUseOrImplementIt: id.walt.crypto.keys.jwk.JWKKeyCreator["__doNotUseOrImplementIt"];
        } & id.walt.crypto.keys.jwk.JWKKeyCreator;
    }
    namespace JWKKey {
        class $initCOROUTINE$74 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.jwk.JWKKey, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
        }
        class $exportJWKObjectCOROUTINE$75 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.jwk.JWKKey, resultContinuation: any/* kotlin.coroutines.Continuation<kotlinx.serialization.json.JsonObject> */);
        }
        class $exportPEMCOROUTINE$76 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.jwk.JWKKey, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $signRawCOROUTINE$77 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.jwk.JWKKey, plaintext: Int8Array, resultContinuation: any/* kotlin.coroutines.Continuation<Int8Array> */);
        }
        class $verifyRawCOROUTINE$78 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.jwk.JWKKey, signed: Int8Array, detachedPlaintext: Nullable<Int8Array>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<Int8Array>> */);
        }
        class $verifyJwsCOROUTINE$79 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.jwk.JWKKey, signedJws: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlinx.serialization.json.JsonElement>> */);
        }
        class $getPublicKeyCOROUTINE$80 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.jwk.JWKKey, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.jwk.JWKKey> */);
        }
        class $getPublicKeyRepresentationCOROUTINE$81 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.jwk.JWKKey, resultContinuation: any/* kotlin.coroutines.Continuation<Int8Array> */);
        }
        class $getMetaCOROUTINE$82 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.jwk.JWKKey, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.crypto.keys.JwkKeyMeta> */);
        }
        class $getKeyIdCOROUTINE$83 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.jwk.JWKKey, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $getThumbprintCOROUTINE$84 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.crypto.keys.jwk.JWKKey, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
    }
}
export declare namespace id.walt.crypto.utils {
    const ArrayUtils: {
        toByteArray(_this_: Uint8Array): Int8Array;
    };
}
export as namespace id_walt_crypto_waltid_crypto;