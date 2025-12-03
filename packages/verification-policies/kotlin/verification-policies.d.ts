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
    interface KtSet<E> /* extends kotlin.collections.Collection<E> */ {
        asJsReadonlySetView(): ReadonlySet<E>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtSet": unique symbol;
        };
    }
    const KtSet: {
        fromJsSet<E>(set: ReadonlySet<E>): kotlin.collections.KtSet<E>;
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
    interface KtMutableMap<K, V> extends kotlin.collections.KtMap<K, V> {
        asJsMapView(): Map<K, V>;
        readonly __doNotUseOrImplementIt: {
            readonly "kotlin.collections.KtMutableMap": unique symbol;
        } & kotlin.collections.KtMap<K, V>["__doNotUseOrImplementIt"];
    }
    const KtMutableMap: {
        fromJsMap<K, V>(map: ReadonlyMap<K, V>): kotlin.collections.KtMutableMap<K, V>;
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
export declare namespace id.walt.did.dids {
    interface DidManager {
        resolve(did: string): void;
        create(type: string): void;
        update(): void;
        delete(did: string): void;
        readonly __doNotUseOrImplementIt: {
            readonly "id.walt.did.dids.DidManager": unique symbol;
        };
    }
}
export declare namespace id.walt.did.dids {
    abstract class DidService extends _objects_.id$walt$did$dids$DidService {
        private constructor();
    }
    namespace DidService {
        class $initCOROUTINE$0 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.did.dids.DidService, resolverUrl: Nullable<string>, registrarUrl: Nullable<string>, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
        }
        class $minimalInitCOROUTINE$1 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.did.dids.DidService, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
        }
        class $updateResolversForMethodsCOROUTINE$2 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.did.dids.DidService, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
        }
        class $updateRegistrarsForMethodsCOROUTINE$3 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.did.dids.DidService, resultContinuation: any/* kotlin.coroutines.Continuation<void> */);
        }
        class $registerDefaultDidMethodByKeyCOROUTINE$4 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.did.dids.DidService, method: string, key: id.walt.crypto.keys.Key, args: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonPrimitive */>, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.DidResult> */);
        }
    }
}
declare namespace _objects_ {
    const id$walt$did$dids$DidService: {
        get didResolvers(): kotlin.collections.KtList<id.walt.did.dids.resolver.DidResolver>/* kotlin.collections.ArrayList<id.walt.did.dids.resolver.DidResolver> */;
        get didRegistrars(): kotlin.collections.KtList<id.walt.did.dids.registrar.DidRegistrar>/* kotlin.collections.ArrayList<id.walt.did.dids.registrar.DidRegistrar> */;
        get resolverMethods(): (kotlin.collections.KtMap<string, id.walt.did.dids.resolver.DidResolver> & kotlin.collections.KtMutableMap<string, id.walt.did.dids.resolver.DidResolver>)/* kotlin.collections.HashMap<string, id.walt.did.dids.resolver.DidResolver> */;
        get registrarMethods(): (kotlin.collections.KtMap<string, id.walt.did.dids.registrar.DidRegistrar> & kotlin.collections.KtMutableMap<string, id.walt.did.dids.registrar.DidRegistrar>)/* kotlin.collections.HashMap<string, id.walt.did.dids.registrar.DidRegistrar> */;
        registerResolver(resolver: id.walt.did.dids.resolver.DidResolver): boolean;
        unregisterResolver(resolver: id.walt.did.dids.resolver.DidResolver): boolean;
        registerAllResolvers(resolvers: any/* kotlin.collections.Collection<id.walt.did.dids.resolver.DidResolver> */): void;
        registerAllRegistrars(registrars: any/* kotlin.collections.Collection<id.walt.did.dids.registrar.DidRegistrar> */): void;
        init$default(resolverUrl: Nullable<string> | undefined, registrarUrl: Nullable<string> | undefined, $completion: any/* kotlin.coroutines.Continuation<void> */): any;
        registerRegistrar(registrar: id.walt.did.dids.registrar.DidRegistrar): boolean;
        unregisterRegistrar(registrar: id.walt.did.dids.registrar.DidRegistrar): boolean;
        registerResolverForMethod(method: string, resolver: id.walt.did.dids.resolver.DidResolver): Nullable<id.walt.did.dids.resolver.DidResolver>;
        registerRegistrarForMethod(method: string, registrar: id.walt.did.dids.registrar.DidRegistrar): Nullable<id.walt.did.dids.registrar.DidRegistrar>;
        registerByKey$default(method: string, key: id.walt.crypto.keys.Key, options: id.walt.did.dids.registrar.dids.DidCreateOptions | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.DidResult> */): any;
        update(): void;
        deactivate(): void;
        initAsync$default(resolverUrl?: Nullable<string>, registrarUrl?: Nullable<string>): Promise<void>;
    } & {
        new(): any;
    };
}
export declare namespace id.walt.did.dids {
    const DidUtils: {
        get DEFAULT_CONTEXT(): kotlin.collections.KtList<string>;
        methodFromDid(did: string): string;
        identifierFromDid(did: string): Nullable<string>;
        fragmentFromDid(did: string): Nullable<string>;
        pathFromDid(did: string): Nullable<string>;
        isDidUrl(did: string): boolean;
    };
}
export declare namespace id.walt.did.dids.document {
    class DidCheqdDocument {
        constructor(context: kotlin.collections.KtList<string> | undefined, id: string, verificationMethod: Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidCheqdDocument.VerificationMethod>>, assertionMethod: Nullable<kotlin.collections.KtList<string>>, authentication: Nullable<kotlin.collections.KtList<string>>, capabilityInvocation: Nullable<kotlin.collections.KtList<string>>, capabilityDelegation: Nullable<kotlin.collections.KtList<string>>, keyAgreement: Nullable<kotlin.collections.KtList<string>>);
        get context(): kotlin.collections.KtList<string>;
        get id(): string;
        get verificationMethod(): Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidCheqdDocument.VerificationMethod>>;
        get assertionMethod(): Nullable<kotlin.collections.KtList<string>>;
        get authentication(): Nullable<kotlin.collections.KtList<string>>;
        get capabilityInvocation(): Nullable<kotlin.collections.KtList<string>>;
        get capabilityDelegation(): Nullable<kotlin.collections.KtList<string>>;
        get keyAgreement(): Nullable<kotlin.collections.KtList<string>>;
        toMap(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>;
        static secondaryConstructor(didDoc: id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidDocument, jwk?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>/* Nullable<kotlinx.serialization.json.JsonObject> */): id.walt.did.dids.document.DidCheqdDocument;
        copy(context?: kotlin.collections.KtList<string>, id?: string, verificationMethod?: Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidCheqdDocument.VerificationMethod>>, assertionMethod?: Nullable<kotlin.collections.KtList<string>>, authentication?: Nullable<kotlin.collections.KtList<string>>, capabilityInvocation?: Nullable<kotlin.collections.KtList<string>>, capabilityDelegation?: Nullable<kotlin.collections.KtList<string>>, keyAgreement?: Nullable<kotlin.collections.KtList<string>>): id.walt.did.dids.document.DidCheqdDocument;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    namespace DidCheqdDocument {
        class VerificationMethod {
            constructor(id: string, type: string, controller: string, publicKeyJwk: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */);
            get id(): string;
            get type(): string;
            get controller(): string;
            get publicKeyJwk(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
            copy(id?: string, type?: string, controller?: string, publicKeyJwk?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): id.walt.did.dids.document.DidCheqdDocument.VerificationMethod;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace id.walt.did.dids.document {
    class DidDocument implements kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> {
        constructor(content: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>);
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        toString(): string;
        static secondaryConstructor(jsonObject: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): id.walt.did.dids.document.DidDocument;
        toJsonObject(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        asJsReadonlyMapView(): ReadonlyMap<string, any/* kotlinx.serialization.json.JsonElement */>;
        readonly __doNotUseOrImplementIt: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>["__doNotUseOrImplementIt"];
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.document {
    class DidEbsiDocument {
        constructor(context: kotlin.collections.KtList<string> | undefined, id: string, controller: Nullable<kotlin.collections.KtList<string>>, verificationMethod: Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidEbsiDocument.VerificationMethod>>, authentication: Nullable<kotlin.collections.KtList<string>>, assertionMethod: Nullable<kotlin.collections.KtList<string>>, capabilityInvocation: Nullable<kotlin.collections.KtList<string>>, capabilityDelegation: Nullable<kotlin.collections.KtList<string>>, keyAgreement: Nullable<kotlin.collections.KtList<string>>);
        get context(): kotlin.collections.KtList<string>;
        get id(): string;
        get controller(): Nullable<kotlin.collections.KtList<string>>;
        get verificationMethod(): Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidEbsiDocument.VerificationMethod>>;
        get authentication(): Nullable<kotlin.collections.KtList<string>>;
        get assertionMethod(): Nullable<kotlin.collections.KtList<string>>;
        get capabilityInvocation(): Nullable<kotlin.collections.KtList<string>>;
        get capabilityDelegation(): Nullable<kotlin.collections.KtList<string>>;
        get keyAgreement(): Nullable<kotlin.collections.KtList<string>>;
        toMap(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>;
        static secondaryConstructor(didDoc: id.walt.did.dids.document.DidDocument): id.walt.did.dids.document.DidEbsiDocument;
        copy(context?: kotlin.collections.KtList<string>, id?: string, controller?: Nullable<kotlin.collections.KtList<string>>, verificationMethod?: Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidEbsiDocument.VerificationMethod>>, authentication?: Nullable<kotlin.collections.KtList<string>>, assertionMethod?: Nullable<kotlin.collections.KtList<string>>, capabilityInvocation?: Nullable<kotlin.collections.KtList<string>>, capabilityDelegation?: Nullable<kotlin.collections.KtList<string>>, keyAgreement?: Nullable<kotlin.collections.KtList<string>>): id.walt.did.dids.document.DidEbsiDocument;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    namespace DidEbsiDocument {
        class VerificationMethod {
            constructor(id: string, type: string, controller: string, publicKeyJwk: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */);
            get id(): string;
            get type(): string;
            get controller(): string;
            get publicKeyJwk(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
            copy(id?: string, type?: string, controller?: string, publicKeyJwk?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): id.walt.did.dids.document.DidEbsiDocument.VerificationMethod;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace id.walt.did.dids.document {
    class DidJwkDocument {
        constructor(context: kotlin.collections.KtList<string> | undefined, id: string, verificationMethod: Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidJwkDocument.VerificationMethod>>, assertionMethod: Nullable<kotlin.collections.KtList<string>>, authentication: Nullable<kotlin.collections.KtList<string>>, capabilityInvocation: Nullable<kotlin.collections.KtList<string>>, capabilityDelegation: Nullable<kotlin.collections.KtList<string>>, keyAgreement: Nullable<kotlin.collections.KtList<string>>);
        get context(): kotlin.collections.KtList<string>;
        get id(): string;
        get verificationMethod(): Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidJwkDocument.VerificationMethod>>;
        get assertionMethod(): Nullable<kotlin.collections.KtList<string>>;
        get authentication(): Nullable<kotlin.collections.KtList<string>>;
        get capabilityInvocation(): Nullable<kotlin.collections.KtList<string>>;
        get capabilityDelegation(): Nullable<kotlin.collections.KtList<string>>;
        get keyAgreement(): Nullable<kotlin.collections.KtList<string>>;
        toMap(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>;
        static secondaryConstructor(did: string, didJwk: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): id.walt.did.dids.document.DidJwkDocument;
        copy(context?: kotlin.collections.KtList<string>, id?: string, verificationMethod?: Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidJwkDocument.VerificationMethod>>, assertionMethod?: Nullable<kotlin.collections.KtList<string>>, authentication?: Nullable<kotlin.collections.KtList<string>>, capabilityInvocation?: Nullable<kotlin.collections.KtList<string>>, capabilityDelegation?: Nullable<kotlin.collections.KtList<string>>, keyAgreement?: Nullable<kotlin.collections.KtList<string>>): id.walt.did.dids.document.DidJwkDocument;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    namespace DidJwkDocument {
        class VerificationMethod {
            constructor(id: string, type: string, controller: string, publicKeyJwk: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */);
            get id(): string;
            get type(): string;
            get controller(): string;
            get publicKeyJwk(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
            copy(id?: string, type?: string, controller?: string, publicKeyJwk?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): id.walt.did.dids.document.DidJwkDocument.VerificationMethod;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace id.walt.did.dids.document {
    class DidKeyDocument {
        constructor(context: kotlin.collections.KtList<string> | undefined, id: string, verificationMethod: Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidKeyDocument.VerificationMethod>>, assertionMethod: Nullable<kotlin.collections.KtList<string>>, authentication: Nullable<kotlin.collections.KtList<string>>, capabilityInvocation: Nullable<kotlin.collections.KtList<string>>, capabilityDelegation: Nullable<kotlin.collections.KtList<string>>, keyAgreement: Nullable<kotlin.collections.KtList<string>>);
        get context(): kotlin.collections.KtList<string>;
        get id(): string;
        get verificationMethod(): Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidKeyDocument.VerificationMethod>>;
        get assertionMethod(): Nullable<kotlin.collections.KtList<string>>;
        get authentication(): Nullable<kotlin.collections.KtList<string>>;
        get capabilityInvocation(): Nullable<kotlin.collections.KtList<string>>;
        get capabilityDelegation(): Nullable<kotlin.collections.KtList<string>>;
        get keyAgreement(): Nullable<kotlin.collections.KtList<string>>;
        toMap(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>;
        static secondaryConstructor(did: string, identifier: string, didKey: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): id.walt.did.dids.document.DidKeyDocument;
        copy(context?: kotlin.collections.KtList<string>, id?: string, verificationMethod?: Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidKeyDocument.VerificationMethod>>, assertionMethod?: Nullable<kotlin.collections.KtList<string>>, authentication?: Nullable<kotlin.collections.KtList<string>>, capabilityInvocation?: Nullable<kotlin.collections.KtList<string>>, capabilityDelegation?: Nullable<kotlin.collections.KtList<string>>, keyAgreement?: Nullable<kotlin.collections.KtList<string>>): id.walt.did.dids.document.DidKeyDocument;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    namespace DidKeyDocument {
        class VerificationMethod {
            constructor(id: string, type: string, controller: string, publicKeyJwk: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */);
            get id(): string;
            get type(): string;
            get controller(): string;
            get publicKeyJwk(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
            copy(id?: string, type?: string, controller?: string, publicKeyJwk?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): id.walt.did.dids.document.DidKeyDocument.VerificationMethod;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace id.walt.did.dids.document {
    class DidWebDocument {
        constructor(context: kotlin.collections.KtList<string> | undefined, id: string, verificationMethod: Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidWebDocument.VerificationMethod>>, assertionMethod: Nullable<kotlin.collections.KtList<string>>, authentication: Nullable<kotlin.collections.KtList<string>>, capabilityInvocation: Nullable<kotlin.collections.KtList<string>>, capabilityDelegation: Nullable<kotlin.collections.KtList<string>>, keyAgreement: Nullable<kotlin.collections.KtList<string>>);
        get context(): kotlin.collections.KtList<string>;
        get id(): string;
        get verificationMethod(): Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidWebDocument.VerificationMethod>>;
        get assertionMethod(): Nullable<kotlin.collections.KtList<string>>;
        get authentication(): Nullable<kotlin.collections.KtList<string>>;
        get capabilityInvocation(): Nullable<kotlin.collections.KtList<string>>;
        get capabilityDelegation(): Nullable<kotlin.collections.KtList<string>>;
        get keyAgreement(): Nullable<kotlin.collections.KtList<string>>;
        toMap(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>;
        static secondaryConstructor(did: string, keyId: string, didKey: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): id.walt.did.dids.document.DidWebDocument;
        copy(context?: kotlin.collections.KtList<string>, id?: string, verificationMethod?: Nullable<kotlin.collections.KtList<id.walt.did.dids.document.DidWebDocument.VerificationMethod>>, assertionMethod?: Nullable<kotlin.collections.KtList<string>>, authentication?: Nullable<kotlin.collections.KtList<string>>, capabilityInvocation?: Nullable<kotlin.collections.KtList<string>>, capabilityDelegation?: Nullable<kotlin.collections.KtList<string>>, keyAgreement?: Nullable<kotlin.collections.KtList<string>>): id.walt.did.dids.document.DidWebDocument;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    namespace DidWebDocument {
        class VerificationMethod {
            constructor(id: string, type: string, controller: string, publicKeyJwk: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */);
            get id(): string;
            get type(): string;
            get controller(): string;
            get publicKeyJwk(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
            copy(id?: string, type?: string, controller?: string, publicKeyJwk?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): id.walt.did.dids.document.DidWebDocument.VerificationMethod;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace id.walt.did.dids.document.models.service {
    abstract class RegisteredServiceType {
        private constructor();
        static get LinkedDomains(): id.walt.did.dids.document.models.service.RegisteredServiceType & {
            get name(): "LinkedDomains";
            get ordinal(): 0;
        };
        static get LinkedVerifiablePresentation(): id.walt.did.dids.document.models.service.RegisteredServiceType & {
            get name(): "LinkedVerifiablePresentation";
            get ordinal(): 1;
        };
        static get DIDCommMessaging(): id.walt.did.dids.document.models.service.RegisteredServiceType & {
            get name(): "DIDCommMessaging";
            get ordinal(): 2;
        };
        static get WotThing(): id.walt.did.dids.document.models.service.RegisteredServiceType & {
            get name(): "WotThing";
            get ordinal(): 3;
        };
        static get CredentialRegistry(): id.walt.did.dids.document.models.service.RegisteredServiceType & {
            get name(): "CredentialRegistry";
            get ordinal(): 4;
        };
        static get OID4VCI(): id.walt.did.dids.document.models.service.RegisteredServiceType & {
            get name(): "OID4VCI";
            get ordinal(): 5;
        };
        static get OID4VP(): id.walt.did.dids.document.models.service.RegisteredServiceType & {
            get name(): "OID4VP";
            get ordinal(): 6;
        };
        get name(): "LinkedDomains" | "LinkedVerifiablePresentation" | "DIDCommMessaging" | "WotThing" | "CredentialRegistry" | "OID4VCI" | "OID4VP";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6;
        static values(): Array<id.walt.did.dids.document.models.service.RegisteredServiceType>;
        static valueOf(value: string): id.walt.did.dids.document.models.service.RegisteredServiceType;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace id.walt.did.dids.document.models.service {
    class Service {
        constructor(serviceMaps: kotlin.collections.KtSet<id.walt.did.dids.document.models.service.ServiceMap>);
        get serviceMaps(): kotlin.collections.KtSet<id.walt.did.dids.document.models.service.ServiceMap>;
        copy(serviceMaps?: kotlin.collections.KtSet<id.walt.did.dids.document.models.service.ServiceMap>): id.walt.did.dids.document.models.service.Service;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class ServiceMap {
        constructor(id: string, type: kotlin.collections.KtSet<string>, serviceEndpoint: kotlin.collections.KtSet<id.walt.did.dids.document.models.service.ServiceEndpoint>, customProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>);
        get id(): string;
        get type(): kotlin.collections.KtSet<string>;
        get serviceEndpoint(): kotlin.collections.KtSet<id.walt.did.dids.document.models.service.ServiceEndpoint>;
        get customProperties(): Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>;
        copy(id?: string, type?: kotlin.collections.KtSet<string>, serviceEndpoint?: kotlin.collections.KtSet<id.walt.did.dids.document.models.service.ServiceEndpoint>, customProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>): id.walt.did.dids.document.models.service.ServiceMap;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.document.models.service {
    abstract class ServiceEndpoint {
        protected constructor();
        static get Companion(): {
        };
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class ServiceEndpointURL extends id.walt.did.dids.document.models.service.ServiceEndpoint {
        constructor(url: string);
        get url(): string;
        copy(url?: string): id.walt.did.dids.document.models.service.ServiceEndpointURL;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class ServiceEndpointObject extends id.walt.did.dids.document.models.service.ServiceEndpoint {
        constructor(jsonObject: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */);
        get jsonObject(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        copy(jsonObject?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): id.walt.did.dids.document.models.service.ServiceEndpointObject;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.document.models.verification.method {
    abstract class VerificationMaterialType {
        private constructor();
        static get PublicKeyJwk(): id.walt.did.dids.document.models.verification.method.VerificationMaterialType & {
            get name(): "PublicKeyJwk";
            get ordinal(): 0;
        };
        static get PublicKeyMultibase(): id.walt.did.dids.document.models.verification.method.VerificationMaterialType & {
            get name(): "PublicKeyMultibase";
            get ordinal(): 1;
        };
        get name(): "PublicKeyJwk" | "PublicKeyMultibase";
        get ordinal(): 0 | 1;
        toString(): string;
        static values(): Array<id.walt.did.dids.document.models.verification.method.VerificationMaterialType>;
        static valueOf(value: string): id.walt.did.dids.document.models.verification.method.VerificationMaterialType;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace id.walt.did.dids.document.models.verification.method {
    class VerificationMethod {
        constructor(id: string, type: id.walt.did.dids.document.models.verification.method.VerificationMethodType, material: any/* kotlin.Pair<id.walt.did.dids.document.models.verification.method.VerificationMaterialType, kotlinx.serialization.json.JsonElement> */, controller: string, customProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>);
        get id(): string;
        get type(): id.walt.did.dids.document.models.verification.method.VerificationMethodType;
        get material(): any/* kotlin.Pair<id.walt.did.dids.document.models.verification.method.VerificationMaterialType, kotlinx.serialization.json.JsonElement> */;
        get controller(): string;
        get customProperties(): Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>;
        copy(id?: string, type?: id.walt.did.dids.document.models.verification.method.VerificationMethodType, material?: any/* kotlin.Pair<id.walt.did.dids.document.models.verification.method.VerificationMaterialType, kotlinx.serialization.json.JsonElement> */, controller?: string, customProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>): id.walt.did.dids.document.models.verification.method.VerificationMethod;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.document.models.verification.method {
    abstract class VerificationMethodType {
        private constructor();
        static get JsonWebKey2020(): id.walt.did.dids.document.models.verification.method.VerificationMethodType & {
            get name(): "JsonWebKey2020";
            get ordinal(): 0;
        };
        static get EcdsaSecp256k1VerificationKey2019(): id.walt.did.dids.document.models.verification.method.VerificationMethodType & {
            get name(): "EcdsaSecp256k1VerificationKey2019";
            get ordinal(): 1;
        };
        static get Ed25519VerificationKey2020(): id.walt.did.dids.document.models.verification.method.VerificationMethodType & {
            get name(): "Ed25519VerificationKey2020";
            get ordinal(): 2;
        };
        static get Bls12381G1Key2020(): id.walt.did.dids.document.models.verification.method.VerificationMethodType & {
            get name(): "Bls12381G1Key2020";
            get ordinal(): 3;
        };
        static get Bls12381G2Key2020(): id.walt.did.dids.document.models.verification.method.VerificationMethodType & {
            get name(): "Bls12381G2Key2020";
            get ordinal(): 4;
        };
        static get PgpVerificationKey2021(): id.walt.did.dids.document.models.verification.method.VerificationMethodType & {
            get name(): "PgpVerificationKey2021";
            get ordinal(): 5;
        };
        static get RsaVerificationKey2018(): id.walt.did.dids.document.models.verification.method.VerificationMethodType & {
            get name(): "RsaVerificationKey2018";
            get ordinal(): 6;
        };
        static get X25519KeyAgreementKey2019(): id.walt.did.dids.document.models.verification.method.VerificationMethodType & {
            get name(): "X25519KeyAgreementKey2019";
            get ordinal(): 7;
        };
        static get EcdsaSecp256k1RecoveryMethod2020(): id.walt.did.dids.document.models.verification.method.VerificationMethodType & {
            get name(): "EcdsaSecp256k1RecoveryMethod2020";
            get ordinal(): 8;
        };
        static get VerifiableCondition2021(): id.walt.did.dids.document.models.verification.method.VerificationMethodType & {
            get name(): "VerifiableCondition2021";
            get ordinal(): 9;
        };
        get name(): "JsonWebKey2020" | "EcdsaSecp256k1VerificationKey2019" | "Ed25519VerificationKey2020" | "Bls12381G1Key2020" | "Bls12381G2Key2020" | "PgpVerificationKey2021" | "RsaVerificationKey2018" | "X25519KeyAgreementKey2019" | "EcdsaSecp256k1RecoveryMethod2020" | "VerifiableCondition2021";
        get ordinal(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
        static values(): Array<id.walt.did.dids.document.models.verification.method.VerificationMethodType>;
        static valueOf(value: string): id.walt.did.dids.document.models.verification.method.VerificationMethodType;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace id.walt.did.dids.document.models.verification.relationship {
    class VerificationRelationship {
        private constructor();
        get id(): Nullable<string>;
        get verificationMethod(): Nullable<id.walt.did.dids.document.models.verification.method.VerificationMethod>;
        copy(id?: Nullable<string>, verificationMethod?: Nullable<id.walt.did.dids.document.models.verification.method.VerificationMethod>): id.walt.did.dids.document.models.verification.relationship.VerificationRelationship;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Builder(): {
            buildFromId(id: string): id.walt.did.dids.document.models.verification.relationship.VerificationRelationship;
            buildFromVerificationMethod(verificationMethod: id.walt.did.dids.document.models.verification.method.VerificationMethod): id.walt.did.dids.document.models.verification.relationship.VerificationRelationship;
        };
    }
}
export declare namespace id.walt.did.dids.document.models.verification.relationship {
    abstract class VerificationRelationshipType {
        private constructor();
        static get AssertionMethod(): id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType & {
            get name(): "AssertionMethod";
            get ordinal(): 0;
        };
        static get Authentication(): id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType & {
            get name(): "Authentication";
            get ordinal(): 1;
        };
        static get CapabilityDelegation(): id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType & {
            get name(): "CapabilityDelegation";
            get ordinal(): 2;
        };
        static get CapabilityInvocation(): id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType & {
            get name(): "CapabilityInvocation";
            get ordinal(): 3;
        };
        static get KeyAgreement(): id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType & {
            get name(): "KeyAgreement";
            get ordinal(): 4;
        };
        get name(): "AssertionMethod" | "Authentication" | "CapabilityDelegation" | "CapabilityInvocation" | "KeyAgreement";
        get ordinal(): 0 | 1 | 2 | 3 | 4;
        toString(): string;
        static values(): Array<id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType>;
        static valueOf(value: string): id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace id.walt.did.dids.registrar {
    interface DidRegistrar {
        readonly name: string;
        readonly __doNotUseOrImplementIt: {
            readonly "id.walt.did.dids.registrar.DidRegistrar": unique symbol;
        };
    }
}
export declare namespace id.walt.did.dids.registrar {
    const DidRegistrarRegistrations: {
        curatedDidRegistrars(uniregistrarUrl?: Nullable<string>): kotlin.collections.KtSet<id.walt.did.dids.registrar.DidRegistrar>;
    };
}
export declare namespace id.walt.did.dids.registrar {
    class DidResult {
        constructor(did: string, didDocument: id.walt.did.dids.document.DidDocument);
        get did(): string;
        get didDocument(): id.walt.did.dids.document.DidDocument;
        copy(did?: string, didDocument?: id.walt.did.dids.document.DidDocument): id.walt.did.dids.registrar.DidResult;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar {
    class LocalRegistrar implements id.walt.did.dids.registrar.DidRegistrar {
        constructor();
        get name(): string;
        readonly __doNotUseOrImplementIt: id.walt.did.dids.registrar.DidRegistrar["__doNotUseOrImplementIt"];
    }
}
export declare namespace id.walt.did.dids.registrar {
    class UniregistrarRegistrar implements id.walt.did.dids.registrar.DidRegistrar {
        constructor(registrarUrl?: string);
        get registrarUrl(): string;
        set registrarUrl(value: string);
        get name(): string;
        readonly __doNotUseOrImplementIt: id.walt.did.dids.registrar.DidRegistrar["__doNotUseOrImplementIt"];
        static get Companion(): {
            get DEFAULT_REGISTRAR_URL(): string;
        };
    }
    namespace UniregistrarRegistrar {
        class $getSupportedMethodsCOROUTINE$5 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.registrar.UniregistrarRegistrar, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlin.collections.KtSet<string>>> */);
        }
        class $createCOROUTINE$7 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.registrar.UniregistrarRegistrar, options: id.walt.did.dids.registrar.dids.DidCreateOptions, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.DidResult> */);
        }
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidBtcrCreateOptions extends id.walt.did.dids.registrar.dids.DidCreateOptions {
        constructor(chain: string);
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidCheqdCreateOptions extends id.walt.did.dids.registrar.dids.DidCreateOptions {
        constructor(network: string);
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidCreateOptions {
        constructor(method: string, config: any/* kotlinx.serialization.json.JsonElement */, didDocConfig?: Nullable<id.walt.did.dids.registrar.dids.DidDocConfig>);
        get method(): string;
        get config(): any/* kotlinx.serialization.json.JsonElement */;
        get didDocConfig(): Nullable<id.walt.did.dids.registrar.dids.DidDocConfig>;
        static secondaryConstructor(method: string, config: kotlin.collections.KtMap<string, Nullable<any>>, didDocConfig?: Nullable<id.walt.did.dids.registrar.dids.DidDocConfig>): id.walt.did.dids.registrar.dids.DidCreateOptions;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidDocConfig {
        constructor(context?: kotlin.collections.KtList<string>, publicKeyMap?: kotlin.collections.KtMap<string, id.walt.crypto.keys.Key>, verificationConfigurationMap?: kotlin.collections.KtMap<id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType, kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.VerificationMethodConfiguration>>, serviceConfigurationSet?: kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.ServiceConfiguration>, rootCustomProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>);
        get context(): kotlin.collections.KtList<string>;
        get publicKeyMap(): kotlin.collections.KtMap<string, id.walt.crypto.keys.Key>;
        get verificationConfigurationMap(): kotlin.collections.KtMap<id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType, kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.VerificationMethodConfiguration>>;
        get serviceConfigurationSet(): kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.ServiceConfiguration>;
        get rootCustomProperties(): Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>;
        copy(context?: kotlin.collections.KtList<string>, publicKeyMap?: kotlin.collections.KtMap<string, id.walt.crypto.keys.Key>, verificationConfigurationMap?: kotlin.collections.KtMap<id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType, kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.VerificationMethodConfiguration>>, serviceConfigurationSet?: kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.ServiceConfiguration>, rootCustomProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>): id.walt.did.dids.registrar.dids.DidDocConfig;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    namespace DidDocConfig {
        abstract class Companion extends _objects_.id$walt$did$dids$registrar$dids$DidDocConfig$Companion {
            private constructor();
        }
        namespace Companion {
            class $buildFromPublicKeySetCOROUTINE$8 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.did.dids.registrar.dids.DidDocConfig.Companion, context: kotlin.collections.KtList<string>, publicKeySet: kotlin.collections.KtSet<id.walt.crypto.keys.Key>, serviceConfigurationSet: kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.ServiceConfiguration>, rootCustomProperties: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.dids.DidDocConfig> */);
            }
            class $buildFromPublicKeySetVerificationConfigurationCOROUTINE$9 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.did.dids.registrar.dids.DidDocConfig.Companion, context: kotlin.collections.KtList<string>, verificationKeySetConfiguration: kotlin.collections.KtMap<id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType, kotlin.collections.KtSet<id.walt.crypto.keys.Key>>, serviceConfigurationSet: kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.ServiceConfiguration>, rootCustomProperties: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.dids.DidDocConfig> */);
            }
        }
        class $toDidDocumentCOROUTINE$10 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.registrar.dids.DidDocConfig, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.document.DidDocument> */);
        }
    }
    class VerificationMethodConfiguration {
        constructor(publicKeyId: string, customProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>);
        get publicKeyId(): string;
        get customProperties(): Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>;
        copy(publicKeyId?: string, customProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>): id.walt.did.dids.registrar.dids.VerificationMethodConfiguration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    class ServiceConfiguration {
        constructor(type: string, serviceEndpoint: kotlin.collections.KtSet<id.walt.did.dids.document.models.service.ServiceEndpoint>, customProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>);
        get type(): string;
        get serviceEndpoint(): kotlin.collections.KtSet<id.walt.did.dids.document.models.service.ServiceEndpoint>;
        get customProperties(): Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>;
        copy(type?: string, serviceEndpoint?: kotlin.collections.KtSet<id.walt.did.dids.document.models.service.ServiceEndpoint>, customProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>): id.walt.did.dids.registrar.dids.ServiceConfiguration;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
declare namespace _objects_ {
    const id$walt$did$dids$registrar$dids$DidDocConfig$Companion: {
        buildFromPublicKeySet$default(context: kotlin.collections.KtList<string> | undefined, publicKeySet: kotlin.collections.KtSet<id.walt.crypto.keys.Key> | undefined, serviceConfigurationSet: kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.ServiceConfiguration> | undefined, rootCustomProperties: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>> | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.dids.DidDocConfig> */): any;
        buildFromPublicKeySetVerificationConfiguration$default(context: kotlin.collections.KtList<string> | undefined, verificationKeySetConfiguration: kotlin.collections.KtMap<id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType, kotlin.collections.KtSet<id.walt.crypto.keys.Key>> | undefined, serviceConfigurationSet: kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.ServiceConfiguration> | undefined, rootCustomProperties: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>> | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.dids.DidDocConfig> */): any;
        buildFromPublicKeySetVerificationConfigurationAsync$default(context?: kotlin.collections.KtList<string>, verificationKeySetConfiguration?: kotlin.collections.KtMap<id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType, kotlin.collections.KtSet<id.walt.crypto.keys.Key>>, serviceConfigurationSet?: kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.ServiceConfiguration>, rootCustomProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>): Promise<id.walt.did.dids.registrar.dids.DidDocConfig>;
        buildFromPublicKeySetAsync$default(context?: kotlin.collections.KtList<string>, publicKeySet?: kotlin.collections.KtSet<id.walt.crypto.keys.Key>, serviceConfigurationSet?: kotlin.collections.KtSet<id.walt.did.dids.registrar.dids.ServiceConfiguration>, rootCustomProperties?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>): Promise<id.walt.did.dids.registrar.dids.DidDocConfig>;
    } & {
        new(): any;
    };
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidEbsiCreateOptions extends id.walt.did.dids.registrar.dids.DidCreateOptions {
        constructor(version: number, token: string);
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidEthrCreateOptions extends id.walt.did.dids.registrar.dids.DidCreateOptions {
        constructor(network?: string);
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidIonCreateOptions extends id.walt.did.dids.registrar.dids.DidCreateOptions {
        constructor();
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidJwkCreateOptions extends id.walt.did.dids.registrar.dids.DidCreateOptions {
        constructor(keyType?: id.walt.crypto.keys.KeyType);
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidKeyCreateOptions extends id.walt.did.dids.registrar.dids.DidCreateOptions {
        constructor(keyType?: id.walt.crypto.keys.KeyType, useJwkJcsPub?: boolean);
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidOydCreateOptions extends id.walt.did.dids.registrar.dids.DidCreateOptions {
        constructor(document: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */);
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidSovCreateOptions extends id.walt.did.dids.registrar.dids.DidCreateOptions {
        constructor(network: string);
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidV1CreateOptions extends id.walt.did.dids.registrar.dids.DidCreateOptions {
        constructor(ledger: string | undefined, keyType: id.walt.crypto.keys.KeyType);
    }
}
export declare namespace id.walt.did.dids.registrar.dids {
    class DidWebCreateOptions extends id.walt.did.dids.registrar.dids.DidCreateOptions {
        constructor(domain: string, path?: string, keyType?: id.walt.crypto.keys.KeyType, didDocConfig?: Nullable<id.walt.did.dids.registrar.dids.DidDocConfig>);
    }
}
export declare namespace id.walt.did.dids.registrar.local {
    abstract class LocalRegistrarMethod {
        constructor(method: string);
        get method(): string;
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd {
    class DidCheqdRegistrar extends id.walt.did.dids.registrar.local.LocalRegistrarMethod {
        constructor();
    }
    namespace DidCheqdRegistrar {
        class $registerCOROUTINE$12 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.registrar.local.cheqd.DidCheqdRegistrar, options: id.walt.did.dids.registrar.dids.DidCreateOptions, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.DidResult> */);
        }
        class $registerByKeyCOROUTINE$13 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.registrar.local.cheqd.DidCheqdRegistrar, key: id.walt.crypto.keys.Key, options: id.walt.did.dids.registrar.dids.DidCreateOptions, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.DidResult> */);
        }
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.didstates {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class ActionDidState extends id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidState {
        constructor(state: string, action: string, description: string, did: string, secret: id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.Secret, signingRequest: kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.SigningRequest>);
        get state(): string;
        get action(): string;
        get description(): string;
        get did(): string;
        get secret(): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.Secret;
        get signingRequest(): kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.SigningRequest>;
        copy(state?: string, action?: string, description?: string, did?: string, secret?: id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.Secret, signingRequest?: kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.SigningRequest>): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    namespace ActionDidState {
        class Secret {
            constructor(signingResponse: kotlin.collections.KtList<string>);
            get signingResponse(): kotlin.collections.KtList<string>;
            copy(signingResponse?: kotlin.collections.KtList<string>): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.Secret;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        class SigningRequest {
            constructor(alg: string, kid: string, serializedPayload: string, type: string);
            get alg(): string;
            get kid(): string;
            get serializedPayload(): string;
            get type(): string;
            copy(alg?: string, kid?: string, serializedPayload?: string, type?: string): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.SigningRequest;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.didstates {
    class DidDocument {
        constructor(authentication: kotlin.collections.KtList<string>, controller: kotlin.collections.KtList<string>, id: string, verificationMethod: kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.VerificationMethod>);
        get authentication(): kotlin.collections.KtList<string>;
        get controller(): kotlin.collections.KtList<string>;
        get id(): string;
        get verificationMethod(): kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.VerificationMethod>;
        copy(authentication?: kotlin.collections.KtList<string>, controller?: kotlin.collections.KtList<string>, id?: string, verificationMethod?: kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.VerificationMethod>): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidDocument;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.didstates {
    const didStateSerializationModule: any/* kotlinx.serialization.modules.SerializersModule */;
    abstract class DidState {
        protected constructor();
        abstract get state(): string;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.didstates {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class FailedDidState extends id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidState {
        constructor(state: string, reason: string, description: string);
        get state(): string;
        get reason(): string;
        get description(): string;
        copy(state?: string, reason?: string, description?: string): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.FailedDidState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.didstates {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class FinishedDidState extends id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidState {
        constructor(state: string, did: string, didDocument: id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidDocument, secret: id.walt.did.dids.registrar.local.cheqd.models.job.didstates.Secret);
        get state(): string;
        get did(): string;
        get didDocument(): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidDocument;
        get secret(): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.Secret;
        copy(state?: string, did?: string, didDocument?: id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidDocument, secret?: id.walt.did.dids.registrar.local.cheqd.models.job.didstates.Secret): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.FinishedDidState;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.didstates {
    class Secret {
        constructor(signingResponse: kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.SigningResponse>);
        get signingResponse(): kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.SigningResponse>;
        copy(signingResponse?: kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.SigningResponse>): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.Secret;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.didstates {
    class SigningResponse {
        constructor(signature: string, verificationMethodId?: Nullable<string>, kid?: Nullable<string>);
        get signature(): string;
        get verificationMethodId(): Nullable<string>;
        get kid(): Nullable<string>;
        copy(signature?: string, verificationMethodId?: Nullable<string>, kid?: Nullable<string>): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.SigningResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.didstates {
    class VerificationMethod {
        constructor(controller: string, id: string, publicKeyMultibase: Nullable<string> | undefined, publicKeyBase58: Nullable<string> | undefined, type: string);
        get controller(): string;
        get id(): string;
        get publicKeyMultibase(): Nullable<string>;
        get publicKeyBase58(): Nullable<string>;
        get type(): string;
        copy(controller?: string, id?: string, publicKeyMultibase?: Nullable<string>, publicKeyBase58?: Nullable<string>, type?: string): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.VerificationMethod;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.request {
    class JobCreateRequest {
        constructor(didDocument: id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidDocObject);
        get didDocument(): id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidDocObject;
        copy(didDocument?: id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidDocObject): id.walt.did.dids.registrar.local.cheqd.models.job.request.JobCreateRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.request {
    class JobDeactivateRequest {
        constructor(did: string);
        get did(): string;
        copy(did?: string): id.walt.did.dids.registrar.local.cheqd.models.job.request.JobDeactivateRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.request {
    class JobSignRequest {
        constructor(jobId: string, secret: id.walt.did.dids.registrar.local.cheqd.models.job.didstates.Secret);
        get jobId(): string;
        get secret(): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.Secret;
        copy(jobId?: string, secret?: id.walt.did.dids.registrar.local.cheqd.models.job.didstates.Secret): id.walt.did.dids.registrar.local.cheqd.models.job.request.JobSignRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.response {
    class JobActionResponse {
        constructor(didState: id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidState, jobId?: Nullable<string>);
        get didState(): id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidState;
        get jobId(): Nullable<string>;
        copy(didState?: id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidState, jobId?: Nullable<string>): id.walt.did.dids.registrar.local.cheqd.models.job.response.JobActionResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse {
    class CheqdKey {
        constructor(publicKeyHex: string, verificationMethodId?: Nullable<string>, keyId?: Nullable<string>);
        get publicKeyHex(): string;
        get verificationMethodId(): Nullable<string>;
        get keyId(): Nullable<string>;
        copy(publicKeyHex?: string, verificationMethodId?: Nullable<string>, keyId?: Nullable<string>): id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.CheqdKey;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse {
    class DidDocObject {
        constructor(authentication: kotlin.collections.KtList<string>, controller: kotlin.collections.KtList<string>, id: string, verificationMethod: kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.VerificationMethod>);
        get authentication(): kotlin.collections.KtList<string>;
        get controller(): kotlin.collections.KtList<string>;
        get id(): string;
        get verificationMethod(): kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.VerificationMethod>;
        copy(authentication?: kotlin.collections.KtList<string>, controller?: kotlin.collections.KtList<string>, id?: string, verificationMethod?: kotlin.collections.KtList<id.walt.did.dids.registrar.local.cheqd.models.job.didstates.VerificationMethod>): id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidDocObject;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse {
    class DidGetResponse {
        constructor(didDoc: id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidDocObject, key: id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.CheqdKey);
        get didDoc(): id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidDocObject;
        get key(): id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.CheqdKey;
        copy(didDoc?: id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidDocObject, key?: id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.CheqdKey): id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidGetResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.did.dids.registrar.local.jwk {
    class DidJwkRegistrar extends id.walt.did.dids.registrar.local.LocalRegistrarMethod {
        constructor();
    }
    namespace DidJwkRegistrar {
        class $registerCOROUTINE$19 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.registrar.local.jwk.DidJwkRegistrar, options: id.walt.did.dids.registrar.dids.DidCreateOptions, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.DidResult> */);
        }
        class $registerByKeyCOROUTINE$20 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.registrar.local.jwk.DidJwkRegistrar, key: id.walt.crypto.keys.Key, options: id.walt.did.dids.registrar.dids.DidCreateOptions, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.DidResult> */);
        }
    }
}
export declare namespace id.walt.did.dids.registrar.local.key {
    class DidKeyRegistrar extends id.walt.did.dids.registrar.local.LocalRegistrarMethod {
        constructor();
    }
    namespace DidKeyRegistrar {
        class $registerCOROUTINE$21 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.registrar.local.key.DidKeyRegistrar, options: id.walt.did.dids.registrar.dids.DidCreateOptions, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.DidResult> */);
        }
        class $registerByKeyCOROUTINE$22 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.registrar.local.key.DidKeyRegistrar, key: id.walt.crypto.keys.Key, options: id.walt.did.dids.registrar.dids.DidCreateOptions, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.DidResult> */);
        }
    }
}
export declare namespace id.walt.did.dids.registrar.local.web {
    class DidWebRegistrar extends id.walt.did.dids.registrar.local.LocalRegistrarMethod {
        constructor();
    }
    namespace DidWebRegistrar {
        class $registerCOROUTINE$24 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.registrar.local.web.DidWebRegistrar, options: id.walt.did.dids.registrar.dids.DidCreateOptions, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.DidResult> */);
        }
        class $registerByKeyCOROUTINE$25 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.registrar.local.web.DidWebRegistrar, key: id.walt.crypto.keys.Key, options: id.walt.did.dids.registrar.dids.DidCreateOptions, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.did.dids.registrar.DidResult> */);
        }
    }
}
export declare namespace id.walt.did.dids.resolver {
    interface DidResolver {
        readonly name: string;
        readonly __doNotUseOrImplementIt: {
            readonly "id.walt.did.dids.resolver.DidResolver": unique symbol;
        };
    }
}
export declare namespace id.walt.did.dids.resolver {
    const DidResolverRegistrations: {
        curatedDidResolvers(uniresolverUrl?: Nullable<string>): kotlin.collections.KtSet<id.walt.did.dids.resolver.DidResolver>;
    };
}
export declare namespace id.walt.did.dids.resolver {
    class LocalResolver implements id.walt.did.dids.resolver.DidResolver {
        constructor();
        get name(): string;
        deactivateMethod(method: string): void;
        readonly __doNotUseOrImplementIt: id.walt.did.dids.resolver.DidResolver["__doNotUseOrImplementIt"];
    }
    namespace LocalResolver {
        class $resolveCOROUTINE$27 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.LocalResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlinx.serialization.json.JsonObject>> */);
        }
    }
}
export declare namespace id.walt.did.dids.resolver {
    class UniresolverResolver implements id.walt.did.dids.resolver.DidResolver {
        constructor(resolverUrl?: string);
        get resolverUrl(): string;
        set resolverUrl(value: string);
        get name(): string;
        readonly __doNotUseOrImplementIt: id.walt.did.dids.resolver.DidResolver["__doNotUseOrImplementIt"];
        static get Companion(): {
            get DEFAULT_RESOLVER_URL(): string;
        };
    }
    namespace UniresolverResolver {
        class $getSupportedMethodsCOROUTINE$28 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.UniresolverResolver, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlin.collections.KtSet<string>>> */);
        }
        class $resolveCOROUTINE$29 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.UniresolverResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlinx.serialization.json.JsonObject>> */);
        }
        class $resolveToKeyCOROUTINE$30 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.UniresolverResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.Key>> */);
        }
        class $resolveToKeysCOROUTINE$31 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.UniresolverResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlin.collections.KtSet<id.walt.crypto.keys.Key>>> */);
        }
    }
}
export declare namespace id.walt.did.dids.resolver.local {
    class DidCheqdResolver extends id.walt.did.dids.resolver.local.LocalResolverMethod {
        constructor();
    }
    namespace DidCheqdResolver {
        class $resolveCOROUTINE$34 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidCheqdResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.did.dids.document.DidDocument>> */);
        }
    }
}
export declare namespace id.walt.did.dids.resolver.local {
    class DidEbsiResolver extends id.walt.did.dids.resolver.local.LocalResolverMethod {
        constructor(client: any/* io.ktor.client.HttpClient */);
    }
    namespace DidEbsiResolver {
        class $resolveCOROUTINE$36 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidEbsiResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.did.dids.document.DidDocument>> */);
        }
        class $resolveToKeyCOROUTINE$38 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidEbsiResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.Key>> */);
        }
        class $resolveToKeysCOROUTINE$39 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidEbsiResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlin.collections.KtSet<id.walt.crypto.keys.Key>>> */);
        }
        class $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidEbsiResolver, publicKeyJwks: kotlin.collections.KtList<string>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.jwk.JWKKey>> */);
        }
        class $tryConvertPublicKeyJwksToKeysCOROUTINE$41 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidEbsiResolver, publicKeyJwks: kotlin.collections.KtList<string>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlin.collections.KtSet<id.walt.crypto.keys.jwk.JWKKey>>> */);
        }
    }
}
export declare namespace id.walt.did.dids.resolver.local {
    class DidJwkResolver extends id.walt.did.dids.resolver.local.LocalResolverMethod {
        constructor();
    }
    namespace DidJwkResolver {
        class $resolveCOROUTINE$42 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidJwkResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.did.dids.document.DidDocument>> */);
        }
    }
}
export declare namespace id.walt.did.dids.resolver.local {
    class DidKeyResolver extends id.walt.did.dids.resolver.local.LocalResolverMethod {
        constructor();
    }
    namespace DidKeyResolver {
        class $resolveCOROUTINE$43 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidKeyResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.did.dids.document.DidDocument>> */);
        }
        class $resolveToKeyCOROUTINE$44 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidKeyResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.Key>> */);
        }
    }
}
export declare namespace id.walt.did.dids.resolver.local {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class DidWebResolver extends id.walt.did.dids.resolver.local.LocalResolverMethod {
        constructor(client: any/* io.ktor.client.HttpClient */);
        static get Companion(): {
            get URL_PROTOCOL(): string;
            get json(): any/* kotlinx.serialization.json.Json */;
        };
    }
    namespace DidWebResolver {
        class $resolveCOROUTINE$45 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidWebResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.did.dids.document.DidDocument>> */);
        }
        class $resolveToKeyCOROUTINE$46 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidWebResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.Key>> */);
        }
        class $resolveToKeysCOROUTINE$47 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidWebResolver, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlin.collections.KtSet<id.walt.crypto.keys.Key>>> */);
        }
        class $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidWebResolver, publicKeyJwks: kotlin.collections.KtList<string>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.jwk.JWKKey>> */);
        }
        class $tryConvertPublicKeyJwksToKeysCOROUTINE$49 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.DidWebResolver, publicKeyJwks: kotlin.collections.KtList<string>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlin.collections.KtSet<id.walt.crypto.keys.jwk.JWKKey>>> */);
        }
    }
}
export declare namespace id.walt.did.dids.resolver.local {
    abstract class LocalResolverMethod {
        constructor(method: string);
        get method(): string;
    }
    namespace LocalResolverMethod {
        class $resolveToKeysCOROUTINE$50 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.did.dids.resolver.local.LocalResolverMethod, did: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlin.collections.KtSet<id.walt.crypto.keys.Key>>> */);
        }
    }
}
export declare namespace id.walt.did.helpers {
    const WaltidServices: {
    };
}
export declare namespace id.walt.did.utils {
    const EnumUtils: {
    };
}
export declare namespace id.walt.did.utils {
    const ExtensionMethods: {
        ensurePrefix(_this_: string, prefix: string): string;
    };
}
export declare namespace id.walt.did.utils {
    abstract class KeyMaterial {
        private constructor();
    }
    namespace KeyMaterial {
        class $getCOROUTINE$51 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.did.utils.KeyMaterial, element: any/* kotlinx.serialization.json.JsonElement */, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.Key>> */);
        }
    }
}
export declare namespace id.walt.did.utils {
    abstract class KeyUtils extends _objects_.id$walt$did$utils$KeyUtils {
        private constructor();
    }
    namespace KeyUtils {
        class $fromPublicKeyMultiBaseCOROUTINE$55 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.did.utils.KeyUtils, identifier: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<id.walt.crypto.keys.Key>> */);
        }
    }
}
declare namespace _objects_ {
    const id$walt$did$utils$KeyUtils: {
        getKeyTypeForVerificationMaterialType(type: string): id.walt.crypto.keys.KeyType;
    } & {
        new(): any;
    };
}
export declare namespace id.walt.did.utils {
    const VerificationMaterial: {
        get(document: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): Nullable<any>/* Nullable<kotlinx.serialization.json.JsonElement> */;
        getAll(document: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): Nullable<kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>>;
    };
}
export declare namespace id.walt.did.utils {
    const JsonCanonicalization: {
        getCanonicalBytes(json: string): Int8Array;
        getCanonicalString(json: string): string;
    };
}
export declare namespace id.walt.sdjwt {
    abstract class DecoyMode {
        private constructor();
        static get NONE(): id.walt.sdjwt.DecoyMode & {
            get name(): "NONE";
            get ordinal(): 0;
        };
        static get FIXED(): id.walt.sdjwt.DecoyMode & {
            get name(): "FIXED";
            get ordinal(): 1;
        };
        static get RANDOM(): id.walt.sdjwt.DecoyMode & {
            get name(): "RANDOM";
            get ordinal(): 2;
        };
        get name(): "NONE" | "FIXED" | "RANDOM";
        get ordinal(): 0 | 1 | 2;
        static values(): Array<id.walt.sdjwt.DecoyMode>;
        static valueOf(value: string): id.walt.sdjwt.DecoyMode;
    }
}
export declare namespace id.walt.sdjwt {
    interface JWTCryptoProvider {
        sign(payload: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, keyID?: Nullable<string>, typ?: string, headers?: kotlin.collections.KtMap<string, any>): string;
        verify(jwt: string, keyID?: Nullable<string>): id.walt.sdjwt.JwtVerificationResult;
        readonly __doNotUseOrImplementIt: {
            readonly "id.walt.sdjwt.JWTCryptoProvider": unique symbol;
        };
    }
}
export declare namespace id.walt.sdjwt {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class KeyBindingJwt extends id.walt.sdjwt.SDJwt {
        constructor(jwt: string, header: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, payload: id.walt.sdjwt.SDPayload);
        get issuedAt(): any/* kotlin.Long */;
        get audience(): string;
        get nonce(): string;
        get sdHash(): string;
        verifyKB(jwtCryptoProvider: id.walt.sdjwt.JWTCryptoProvider, reqAudience: string, reqNonce: string, sdJwt: id.walt.sdjwt.SDJwt, keyId?: Nullable<string>): boolean;
        static get Companion(): {
            get KB_JWT_TYPE(): string;
            parse(kbJwt: string): id.walt.sdjwt.KeyBindingJwt;
            sign(presentedSdJwt: string, audience: string, nonce: string, cryptoProvider: id.walt.sdjwt.JWTCryptoProvider, keyId?: Nullable<string>): id.walt.sdjwt.KeyBindingJwt;
            getSdHash(presentedSdJwt: string): string;
        };
    }
}
export declare namespace id.walt.sdjwt {
    class SDField {
        constructor(sd: boolean, children?: Nullable<kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>>/* Nullable<id.walt.sdjwt.SDMap> */);
        get sd(): boolean;
        get children(): Nullable<kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>>/* Nullable<id.walt.sdjwt.SDMap> */;
        copy(sd?: boolean, children?: Nullable<kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>>/* Nullable<id.walt.sdjwt.SDMap> */): id.walt.sdjwt.SDField;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export declare namespace id.walt.sdjwt {
    class SDJwt {
        private constructor();
        get jwt(): string;
        get header(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        get sdPayload(): id.walt.sdjwt.SDPayload;
        get keyBindingJwt(): Nullable<id.walt.sdjwt.KeyBindingJwt>;
        get isPresentation(): boolean;
        get zzz_unused_disclosures(): kotlin.collections.KtSet<string>;
        get zzz_unused_disclosureObjects(): any/* kotlin.collections.Collection<id.walt.sdjwt.SDisclosure> */;
        get zzz_unused_undisclosedPayload(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        get zzz_unused_fullPayload(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        get zzz_unused_digestedDisclosures(): kotlin.collections.KtMap<string, id.walt.sdjwt.SDisclosure>;
        get zzz_unused_sdMap(): kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>/* id.walt.sdjwt.SDMap */;
        get algorithm(): Nullable<string>;
        get keyID(): Nullable<string>;
        get jwk(): Nullable<string>;
        get type(): Nullable<string>;
        toString(): string;
        toFormattedString(formatForPresentation: boolean, withKBJwt?: boolean): string;
        present(sdMap: Nullable<kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>>/* Nullable<id.walt.sdjwt.SDMap> */, withKBJwt?: Nullable<id.walt.sdjwt.KeyBindingJwt>): id.walt.sdjwt.SDJwt;
        presentAll(discloseAll: boolean, withKBJwt?: Nullable<id.walt.sdjwt.KeyBindingJwt>): id.walt.sdjwt.SDJwt;
        presentWithKB(sdMap: Nullable<kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>>/* Nullable<id.walt.sdjwt.SDMap> */, audience: string, nonce: string, kbCryptoProvider: id.walt.sdjwt.JWTCryptoProvider, kbKeyId?: Nullable<string>): id.walt.sdjwt.SDJwt;
        presentAllWithKB(discloseAll: boolean, audience: string, nonce: string, kbCryptoProvider: id.walt.sdjwt.JWTCryptoProvider, kbKeyId?: Nullable<string>): id.walt.sdjwt.SDJwt;
        verify(jwtCryptoProvider: id.walt.sdjwt.JWTCryptoProvider, keyID?: Nullable<string>): id.walt.sdjwt.VerificationResult<id.walt.sdjwt.SDJwt>;
    }
    namespace SDJwt {
        abstract class Companion extends _objects_.id$walt$sdjwt$SDJwt$Companion {
            private constructor();
        }
        namespace Companion {
            class $signAsyncCOROUTINE$1 /* extends kotlin.coroutines.CoroutineImpl */ {
                constructor(_this_: typeof id.walt.sdjwt.SDJwt.Companion, sdPayload: id.walt.sdjwt.SDPayload, jwtCryptoProvider: any/* id.walt.sdjwt.AsyncJWTCryptoProvider */, keyID: Nullable<string>, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.sdjwt.SDJwt> */);
            }
        }
        class $verifyAsyncCOROUTINE$0 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.sdjwt.SDJwt, jwtCryptoProvider: any/* id.walt.sdjwt.AsyncJWTCryptoProvider */, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.sdjwt.VerificationResult<id.walt.sdjwt.SDJwt>> */);
        }
    }
}
declare namespace _objects_ {
    const id$walt$sdjwt$SDJwt$Companion: {
        get DIGESTS_KEY(): string;
        get SEPARATOR(): any/* kotlin.Char */;
        get SEPARATOR_STR(): string;
        get SD_JWT_PATTERN(): string;
        parse(sdJwt: string): id.walt.sdjwt.SDJwt;
        verifyAndParse(sdJwt: string, jwtCryptoProvider: id.walt.sdjwt.JWTCryptoProvider): id.walt.sdjwt.VerificationResult<id.walt.sdjwt.SDJwt>;
        createFromSignedJwt(signedJwt: string, sdPayload: id.walt.sdjwt.SDPayload, withKBJwt?: Nullable<id.walt.sdjwt.KeyBindingJwt>): id.walt.sdjwt.SDJwt;
        sign(sdPayload: id.walt.sdjwt.SDPayload, jwtCryptoProvider: id.walt.sdjwt.JWTCryptoProvider, keyID?: Nullable<string>, typ?: string, additionalHeaders?: kotlin.collections.KtMap<string, any>): id.walt.sdjwt.SDJwt;
        signAsync$default(sdPayload: id.walt.sdjwt.SDPayload, jwtCryptoProvider: any/* id.walt.sdjwt.AsyncJWTCryptoProvider */, keyID: Nullable<string> | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.sdjwt.SDJwt> */): any;
        isSDJwt(value: string, sdOnly?: boolean): boolean;
    } & {
        new(): any;
    };
}
export declare namespace id.walt.sdjwt {
    class SDPayload {
        private constructor();
        get undisclosedPayload(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        get digestedDisclosures(): kotlin.collections.KtMap<string, id.walt.sdjwt.SDisclosure>;
        get sDisclosures(): any/* kotlin.collections.Collection<id.walt.sdjwt.SDisclosure> */;
        get fullPayload(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        get sdMap(): kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>/* id.walt.sdjwt.SDMap */;
        withSelectiveDisclosures(sdMap: kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>): id.walt.sdjwt.SDPayload;
        withoutDisclosures(): id.walt.sdjwt.SDPayload;
        verifyDisclosures(): boolean;
        copy(undisclosedPayload?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, digestedDisclosures?: kotlin.collections.KtMap<string, id.walt.sdjwt.SDisclosure>): id.walt.sdjwt.SDPayload;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export declare namespace id.walt.sdjwt {
    class SDisclosure {
        private constructor();
        get disclosure(): string;
        get salt(): string;
        get key(): string;
        get value(): any/* kotlinx.serialization.json.JsonElement */;
        copy(disclosure?: string, salt?: string, key?: string, value?: any/* kotlinx.serialization.json.JsonElement */): id.walt.sdjwt.SDisclosure;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            parse(disclosure: string): id.walt.sdjwt.SDisclosure;
        };
    }
}
export declare namespace id.walt.sdjwt {
    class JwtVerificationResult {
        constructor(verified: boolean, message?: Nullable<string>);
        get verified(): boolean;
        get message(): Nullable<string>;
        copy(verified?: boolean, message?: Nullable<string>): id.walt.sdjwt.JwtVerificationResult;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
    class VerificationResult<T extends id.walt.sdjwt.SDJwt> {
        constructor(sdJwt: T, signatureVerified: boolean, disclosuresVerified: boolean, message?: Nullable<string>);
        get sdJwt(): T;
        get signatureVerified(): boolean;
        get disclosuresVerified(): boolean;
        get message(): Nullable<string>;
        get verified(): boolean;
        copy(sdJwt?: T, signatureVerified?: boolean, disclosuresVerified?: boolean, message?: Nullable<string>): id.walt.sdjwt.VerificationResult<T>;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
    }
}
export declare namespace id.walt.sdjwt.utils {
    const Base64Utils: {
        base64toBase64Url(_this_: string): string;
        base64UrlToBase64(_this_: string): string;
        encodeToBase64Url(_this_: Int8Array): string;
        base64UrlDecode(_this_: string): Int8Array;
        base64Decode(_this_: string): Int8Array;
        get base64(): any/* kotlin.io.encoding.Base64 */;
    };
}
export declare namespace id.walt.sdjwt {
    interface JSAsyncJWTCryptoProvider /* extends id.walt.sdjwt.AsyncJWTCryptoProvider */ {
        signAsync(payload: any, keyID: Nullable<string>): Promise<string>;
        verifyAsync(jwt: string): Promise<id.walt.sdjwt.JwtVerificationResult>;
        readonly __doNotUseOrImplementIt: {
            readonly "id.walt.sdjwt.JSAsyncJWTCryptoProvider": unique symbol;
        };
    }
}
export declare namespace id.walt.sdjwt {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class SDJwtJS extends id.walt.sdjwt.SDJwt {
        constructor(sdJwt: id.walt.sdjwt.SDJwt);
        get disclosures(): Array<string>;
        get disclosureObjects(): Array<any>;
        get undisclosedPayload(): any;
        get fullPayload(): any;
        get sdMap(): any;
        verifyAsync(jwtCryptoProvider: id.walt.sdjwt.JSAsyncJWTCryptoProvider): Promise<id.walt.sdjwt.VerificationResult<id.walt.sdjwt.SDJwtJS>>;
        presentAllAsync(discloseAll: boolean, withKBJwt?: Nullable<id.walt.sdjwt.KeyBindingJwt>): Promise<id.walt.sdjwt.SDJwtJS>;
        presentAsync(sdMap: any, withKBJwt?: Nullable<id.walt.sdjwt.KeyBindingJwt>): Promise<id.walt.sdjwt.SDJwtJS>;
        static get Companion(): {
            verifyAndParseAsync(sdJwt: string, jwtCryptoProvider: id.walt.sdjwt.JSAsyncJWTCryptoProvider): Promise<id.walt.sdjwt.VerificationResult<id.walt.sdjwt.SDJwtJS>>;
            signAsync(sdPayload: id.walt.sdjwt.SDPayload, jwtCryptoProvider: id.walt.sdjwt.JSAsyncJWTCryptoProvider, keyID?: Nullable<string>): Promise<id.walt.sdjwt.SDJwtJS>;
        };
    }
}
export declare namespace id.walt.sdjwt {
    class SDMapBuilder {
        constructor(decoyMode?: string, numDecoys?: number);
        addField(key: string, sd: boolean, children?: any): id.walt.sdjwt.SDMapBuilder;
        buildAsJSON(): any;
        build(): kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>/* id.walt.sdjwt.SDMap */;
        buildFromJsonPaths(jsonPaths: Array<string>): any;
    }
}
export declare namespace id.walt.sdjwt {
    class SDPayloadBuilder {
        constructor(fullPayload: any);
        get fullPayload(): any;
        buildForUndisclosedPayload(undisclosedSDPayload: any): id.walt.sdjwt.SDPayload;
        buildForSDMap(sdMap: any): id.walt.sdjwt.SDPayload;
    }
}
export declare namespace id.walt.sdjwt {
    class SimpleAsyncJWTCryptoProvider implements id.walt.sdjwt.JSAsyncJWTCryptoProvider {
        constructor(algorithm: string, keyParam: any, options: any);
        signAsync(payload: any, keyID: Nullable<string>): Promise<string>;
        verifyAsync(jwt: string): Promise<id.walt.sdjwt.JwtVerificationResult>;
        readonly __doNotUseOrImplementIt: id.walt.sdjwt.JSAsyncJWTCryptoProvider["__doNotUseOrImplementIt"];
    }
}
export declare namespace id.walt.w3c {
    abstract class CredentialBuilderType {
        private constructor();
        static get W3CV11CredentialBuilder(): id.walt.w3c.CredentialBuilderType & {
            get name(): "W3CV11CredentialBuilder";
            get ordinal(): 0;
        };
        static get W3CV2CredentialBuilder(): id.walt.w3c.CredentialBuilderType & {
            get name(): "W3CV2CredentialBuilder";
            get ordinal(): 1;
        };
        static get MdocsCredentialBuilder(): id.walt.w3c.CredentialBuilderType & {
            get name(): "MdocsCredentialBuilder";
            get ordinal(): 2;
        };
        get name(): "W3CV11CredentialBuilder" | "W3CV2CredentialBuilder" | "MdocsCredentialBuilder";
        get ordinal(): 0 | 1 | 2;
        static values(): Array<id.walt.w3c.CredentialBuilderType>;
        static valueOf(value: string): id.walt.w3c.CredentialBuilderType;
    }
    class CredentialBuilder {
        constructor(builderType?: id.walt.w3c.CredentialBuilderType);
        get builderType(): id.walt.w3c.CredentialBuilderType;
        getDefaultBuilderContext(): kotlin.collections.KtList<string>;
        get context(): kotlin.collections.KtList<string>;
        set context(value: kotlin.collections.KtList<string>);
        get type(): kotlin.collections.KtList<string>;
        set type(value: kotlin.collections.KtList<string>);
        addType(addType: string): void;
        addContext(addContext: string): void;
        get credentialId(): Nullable<string>;
        set credentialId(value: Nullable<string>);
        randomCredentialSubjectUUID(): void;
        get issuerDid(): Nullable<string>;
        set issuerDid(value: Nullable<string>);
        get subjectDid(): Nullable<string>;
        set subjectDid(value: Nullable<string>);
        get validFrom(): Nullable<any>/* Nullable<kotlinx.datetime.Instant> */;
        set validFrom(value: Nullable<any>/* Nullable<kotlinx.datetime.Instant> */);
        validFromNow(): void;
        get validUntil(): Nullable<any>/* Nullable<kotlinx.datetime.Instant> */;
        set validUntil(value: Nullable<any>/* Nullable<kotlinx.datetime.Instant> */);
        validFor(duration: any/* kotlin.time.Duration */): void;
        get credentialStatus(): Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.CredentialStatus>;
        set credentialStatus(value: Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.CredentialStatus>);
        useStatusList2021Revocation(statusListCredential: string, listIndex: number): void;
        get termsOfUse(): Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.TermsOfUse>;
        set termsOfUse(value: Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.TermsOfUse>);
        get _customCredentialSubjectData(): Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>/* Nullable<kotlinx.serialization.json.JsonObject> */;
        set _customCredentialSubjectData(value: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>/* Nullable<kotlinx.serialization.json.JsonObject> */);
        useCredentialSubject(data: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): void;
        get _extraCustomData(): kotlin.collections.KtMutableMap<string, any/* kotlinx.serialization.json.JsonElement */>;
        set _extraCustomData(value: kotlin.collections.KtMutableMap<string, any/* kotlinx.serialization.json.JsonElement */>);
        useData(key: string, data: any/* kotlinx.serialization.json.JsonElement */): void;
        useDataPair(pair: any/* kotlin.Pair<string, kotlinx.serialization.json.JsonElement> */): void;
        set(_this_: string, data: any/* kotlinx.serialization.json.JsonElement */): void;
        buildW3CSubject(): Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>/* Nullable<kotlinx.serialization.json.JsonObject> */;
        buildW3CV2DataModel(): id.walt.w3c.vc.vcs.W3CV2DataModel;
        buildW3CV11DataModel(): id.walt.w3c.vc.vcs.W3CV11DataModel;
        buildW3C(): id.walt.w3c.vc.vcs.W3CVC;
    }
}
export declare namespace id.walt.w3c {
    class PresentationBuilder {
        constructor();
        get did(): Nullable<string>;
        set did(value: Nullable<string>);
        get holderPubKeyJwk(): Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>/* Nullable<kotlinx.serialization.json.JsonObject> */;
        set holderPubKeyJwk(value: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>/* Nullable<kotlinx.serialization.json.JsonObject> */);
        get jwtNotBefore(): Nullable<any>/* Nullable<kotlinx.datetime.Instant> */;
        set jwtNotBefore(value: Nullable<any>/* Nullable<kotlinx.datetime.Instant> */);
        get jwtIssuedAt(): Nullable<any>/* Nullable<kotlinx.datetime.Instant> */;
        set jwtIssuedAt(value: Nullable<any>/* Nullable<kotlinx.datetime.Instant> */);
        get presentationId(): string;
        set presentationId(value: string);
        get nonce(): Nullable<string>;
        set nonce(value: Nullable<string>);
        get audience(): Nullable<string>;
        set audience(value: Nullable<string>);
        get vpContext(): kotlin.collections.KtList<string>;
        set vpContext(value: kotlin.collections.KtList<string>);
        get vpType(): kotlin.collections.KtList<string>;
        set vpType(value: kotlin.collections.KtList<string>);
        get verifiableCredentials(): kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>/* kotlin.collections.ArrayList<kotlinx.serialization.json.JsonElement> */;
        addCredential(credential: Array<any/* kotlinx.serialization.json.JsonElement */>): boolean;
        addCredentials(credentials: any/* kotlin.collections.Collection<kotlinx.serialization.json.JsonElement> */): boolean;
        buildPresentationMap(): kotlin.collections.KtMap<string, Nullable<any>>;
        buildPresentationJson(): any/* kotlinx.serialization.json.JsonElement */;
        buildPresentationJsonString(): string;
    }
    namespace PresentationBuilder {
        class $buildAndSignCOROUTINE$0 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.w3c.PresentationBuilder, key: id.walt.crypto.keys.Key, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
    }
}
export declare namespace id.walt.w3c.issuance {
    const dataFunctions: kotlin.collections.KtMap<string, any /*Suspend functions are not supported*/>;
}
export declare namespace id.walt.w3c.issuance {
    abstract class Issuer extends _objects_.id$walt$w3c$issuance$Issuer {
        private constructor();
    }
    namespace Issuer {
        class IssuanceInformation {
            constructor(w3cVc: id.walt.w3c.vc.vcs.W3CVC, jwtOptions: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>);
            get w3cVc(): id.walt.w3c.vc.vcs.W3CVC;
            get jwtOptions(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>;
            copy(w3cVc?: id.walt.w3c.vc.vcs.W3CVC, jwtOptions?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): id.walt.w3c.issuance.Issuer.IssuanceInformation;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        class $mergingJwtIssueCOROUTINE$2 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.w3c.issuance.Issuer, _this_: id.walt.w3c.vc.vcs.W3CVC, issuerKey: id.walt.crypto.keys.Key, issuerId: string, subjectDid: string, mappings: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, additionalJwtHeader: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, additionalJwtOptions: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, display: kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonArray */, completeJwtWithDefaultCredentialData: boolean, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $mergingSdJwtIssueCOROUTINE$3 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.w3c.issuance.Issuer, _this_: id.walt.w3c.vc.vcs.W3CVC, issuerKey: id.walt.crypto.keys.Key, issuerId: string, subjectDid: string, display: kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonArray */, mappings: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, type: string, additionalJwtHeaders: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, additionalJwtOptions: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, completeJwtWithDefaultCredentialData: boolean, disclosureMap: kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>/* id.walt.sdjwt.SDMap */, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $mergingToVcCOROUTINE$4 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.w3c.issuance.Issuer, _this_: id.walt.w3c.vc.vcs.W3CVC, issuerId: string, subjectDid: string, mappings: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, display: Nullable<kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>>/* Nullable<kotlinx.serialization.json.JsonArray> */, completeJwtWithDefaultCredentialData: boolean, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.w3c.issuance.Issuer.IssuanceInformation> */);
        }
        class $getKidHeaderCOROUTINE$5 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.w3c.issuance.Issuer, issuerKey: id.walt.crypto.keys.Key, issuerDid: Nullable<string>, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
    }
}
declare namespace _objects_ {
    const id$walt$w3c$issuance$Issuer: {
        mergingJwtIssue$default(_this_: id.walt.w3c.vc.vcs.W3CVC, issuerKey: id.walt.crypto.keys.Key, issuerId: string, subjectDid: string, mappings: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, additionalJwtHeader: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, additionalJwtOptions: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> | undefined, display: kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonArray */ | undefined, completeJwtWithDefaultCredentialData: boolean | undefined, $completion: any/* kotlin.coroutines.Continuation<string> */): any;
        mergingSdJwtIssue$default(_this_: id.walt.w3c.vc.vcs.W3CVC, issuerKey: id.walt.crypto.keys.Key, issuerId: string, subjectDid: string | undefined, display: kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonArray */ | undefined, mappings: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */ | undefined, type: string | undefined, additionalJwtHeaders: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, additionalJwtOptions: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> | undefined, completeJwtWithDefaultCredentialData: boolean | undefined, disclosureMap: kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>/* id.walt.sdjwt.SDMap */, $completion: any/* kotlin.coroutines.Continuation<string> */): any;
        mergingToVc$default(_this_: id.walt.w3c.vc.vcs.W3CVC, issuerId: string, subjectDid: string, mappings: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */ | undefined, display: Nullable<kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>>/* Nullable<kotlinx.serialization.json.JsonArray> */ | undefined, completeJwtWithDefaultCredentialData: boolean | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.w3c.issuance.Issuer.IssuanceInformation> */): any;
        getKidHeader$default(issuerKey: id.walt.crypto.keys.Key, issuerDid: Nullable<string> | undefined, $completion: any/* kotlin.coroutines.Continuation<string> */): any;
        mergingJwtIssueAsync$default(_this_: id.walt.w3c.vc.vcs.W3CVC, issuerKey: id.walt.crypto.keys.Key, issuerId: string, subjectDid: string, mappings: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, additionalJwtHeader: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, additionalJwtOptions?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, display?: kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonArray */, completeJwtWithDefaultCredentialData?: boolean): Promise<string>;
        mergingToVcAsync$default(_this_: id.walt.w3c.vc.vcs.W3CVC, issuerId: string, subjectDid: string, mappings?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, display?: Nullable<kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>>/* Nullable<kotlinx.serialization.json.JsonArray> */, completeJwtWithDefaultCredentialData?: boolean): Promise<id.walt.w3c.issuance.Issuer.IssuanceInformation>;
        getKidHeaderAsync$default(issuerKey: id.walt.crypto.keys.Key, issuerDid?: Nullable<string>): Promise<string>;
        mergingSdJwtIssueAsync$default(_this_: id.walt.w3c.vc.vcs.W3CVC, issuerKey: id.walt.crypto.keys.Key, issuerId: string, subjectDid: string | undefined, display: kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonArray */ | undefined, mappings: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */ | undefined, type: string | undefined, additionalJwtHeaders: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, additionalJwtOptions: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> | undefined, completeJwtWithDefaultCredentialData: boolean | undefined, disclosureMap: kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>/* id.walt.sdjwt.SDMap */): Promise<string>;
    } & {
        new(): any;
    };
}
export declare namespace id.walt.w3c.schemes {
    class JwsSignatureScheme implements id.walt.w3c.schemes.SignatureScheme {
        constructor();
        toPayload(data: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, jwtOptions?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        sign$default(data: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, key: id.walt.crypto.keys.Key, jwtHeaders: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> | undefined, jwtOptions: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> | undefined, $completion: any/* kotlin.coroutines.Continuation<string> */): any;
        signAsync$default(data: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, key: id.walt.crypto.keys.Key, jwtHeaders?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, jwtOptions?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): Promise<string>;
        readonly __doNotUseOrImplementIt: id.walt.w3c.schemes.SignatureScheme["__doNotUseOrImplementIt"];
        static get JwsHeader(): {
            get KEY_ID(): string;
        };
        static get JwsOption(): {
            get SUBJECT(): string;
            get ISSUER(): string;
            get EXPIRATION(): string;
            get NOT_BEFORE(): string;
            get VC_ID(): string;
            get VC(): string;
        };
    }
    namespace JwsSignatureScheme {
        class KeyInfo {
            constructor(keyId: string, key: id.walt.crypto.keys.Key);
            get keyId(): string;
            get key(): id.walt.crypto.keys.Key;
            copy(keyId?: string, key?: id.walt.crypto.keys.Key): id.walt.w3c.schemes.JwsSignatureScheme.KeyInfo;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        class KeysInfo {
            constructor(keyId: string, keys: kotlin.collections.KtSet<id.walt.crypto.keys.Key>);
            get keyId(): string;
            get keys(): kotlin.collections.KtSet<id.walt.crypto.keys.Key>;
            copy(keyId?: string, keys?: kotlin.collections.KtSet<id.walt.crypto.keys.Key>): id.walt.w3c.schemes.JwsSignatureScheme.KeysInfo;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        class $getIssuerKeyInfoCOROUTINE$6 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.w3c.schemes.JwsSignatureScheme, jws: string, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.w3c.schemes.JwsSignatureScheme.KeyInfo> */);
        }
        class $getIssuerKeysInfoCOROUTINE$7 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.w3c.schemes.JwsSignatureScheme, jws: string, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.w3c.schemes.JwsSignatureScheme.KeysInfo> */);
        }
        class $verifyCOROUTINE$8 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.w3c.schemes.JwsSignatureScheme, data: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlinx.serialization.json.JsonElement>> */);
        }
    }
}
export declare namespace id.walt.w3c.schemes {
    interface SignatureScheme {
        readonly __doNotUseOrImplementIt: {
            readonly "id.walt.w3c.schemes.SignatureScheme": unique symbol;
        };
    }
}
export declare namespace id.walt.w3c.utils {
    abstract class CredentialDataMergeUtils extends _objects_.id$walt$w3c$utils$CredentialDataMergeUtils {
        private constructor();
    }
    namespace CredentialDataMergeUtils {
        class MergeResult {
            constructor(vc: id.walt.w3c.vc.vcs.W3CVC, results: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>);
            get vc(): id.walt.w3c.vc.vcs.W3CVC;
            get results(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>;
            copy(vc?: id.walt.w3c.vc.vcs.W3CVC, results?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): id.walt.w3c.utils.CredentialDataMergeUtils.MergeResult;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        class JsonMergeResult {
            constructor(vc: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, results: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>);
            get vc(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
            get results(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>;
            copy(vc?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, results?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): id.walt.w3c.utils.CredentialDataMergeUtils.JsonMergeResult;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        class FunctionCall {
            constructor(func: string, history: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>, context: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, args: Nullable<string>);
            get func(): string;
            get history(): Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>;
            get context(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>;
            get args(): Nullable<string>;
            fromContext(): any/* kotlinx.serialization.json.JsonElement */;
            copy(func?: string, history?: Nullable<kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>>, context?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, args?: Nullable<string>): id.walt.w3c.utils.CredentialDataMergeUtils.FunctionCall;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
        }
        class $getTemplateDataCOROUTINE$9 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.w3c.utils.CredentialDataMergeUtils, functionCall: string, dataFunctions: kotlin.collections.KtMap<string, any /*Suspend functions are not supported*/>, context: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, functionHistory: kotlin.collections.KtMutableMap<string, any/* kotlinx.serialization.json.JsonElement */>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlinx.serialization.json.JsonElement> */);
        }
        class $patchCOROUTINE$10 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.w3c.utils.CredentialDataMergeUtils, _this_: kotlin.collections.KtMutableMap<string, any/* kotlinx.serialization.json.JsonElement */>, k: string, v: any/* kotlinx.serialization.json.JsonElement */, dataFunctions: kotlin.collections.KtMap<string, any /*Suspend functions are not supported*/>, context: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, functionHistory: kotlin.collections.KtMutableMap<string, any/* kotlinx.serialization.json.JsonElement */>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.collections.KtMutableMap<string, kotlinx.serialization.json.JsonElement>> */);
        }
        class $mergeWithMappingCOROUTINE$11 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.w3c.utils.CredentialDataMergeUtils, _this_: id.walt.w3c.vc.vcs.W3CVC, mapping: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, context: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, data: kotlin.collections.KtMap<string, any /*Suspend functions are not supported*/>, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.w3c.utils.CredentialDataMergeUtils.MergeResult> */);
        }
        class $mergeSDJwtVCPayloadWithMappingCOROUTINE$12 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.w3c.utils.CredentialDataMergeUtils, _this_: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, mapping: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, context: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, data: kotlin.collections.KtMap<string, any /*Suspend functions are not supported*/>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlinx.serialization.json.JsonObject> */);
        }
    }
}
declare namespace _objects_ {
    const id$walt$w3c$utils$CredentialDataMergeUtils: {
        isTemplate(_this_: any/* kotlinx.serialization.json.JsonPrimitive */): boolean;
    } & {
        new(): any;
    };
}
export declare namespace id.walt.w3c.utils {
    const ExtensionMethods: {
        ensurePrefix(_this_: string, prefix: string): string;
    };
}
export declare namespace id.walt.w3c.utils {
    const W3CVcUtils: {
        overwrite(_this_: id.walt.w3c.vc.vcs.W3CVC, map: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): id.walt.w3c.vc.vcs.W3CVC;
        update(_this_: id.walt.w3c.vc.vcs.W3CVC, key: string, map: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): id.walt.w3c.vc.vcs.W3CVC;
    };
}
export declare namespace id.walt.w3c.vc.vcs {
    interface CredentialDataModel {
        encodeToJsonObject(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        readonly __doNotUseOrImplementIt: {
            readonly "id.walt.w3c.vc.vcs.CredentialDataModel": unique symbol;
        };
    }
}
export declare namespace id.walt.w3c.vc.vcs {
    abstract class W3CBaseDataModels {
        private constructor();
    }
    namespace W3CBaseDataModels {
        class TermsOfUse {
            constructor(id: string, type: string);
            get id(): string;
            get type(): string;
            copy(id?: string, type?: string): id.walt.w3c.vc.vcs.W3CBaseDataModels.TermsOfUse;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
        class CredentialStatus {
            constructor(id: string, type: string, statusPurpose: string, statusListIndex: string, statusListCredential: string);
            get id(): string;
            get type(): string;
            get statusPurpose(): string;
            get statusListIndex(): string;
            get statusListCredential(): string;
            copy(id?: string, type?: string, statusPurpose?: string, statusListIndex?: string, statusListCredential?: string): id.walt.w3c.vc.vcs.W3CBaseDataModels.CredentialStatus;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace id.walt.w3c.vc.vcs {
    interface W3CMetadata {
        readonly defaultContext: kotlin.collections.KtList<string>;
        readonly __doNotUseOrImplementIt: {
            readonly "id.walt.w3c.vc.vcs.W3CMetadata": unique symbol;
        };
    }
}
export declare namespace id.walt.w3c.vc.vcs {
    class W3CV11DataModel implements id.walt.w3c.vc.vcs.CredentialDataModel {
        constructor(context: kotlin.collections.KtList<string> | undefined, type: kotlin.collections.KtList<string> | undefined, credentialSubject: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, id?: Nullable<string>, issuer?: Nullable<string>, issuanceDate?: Nullable<string>, expirationDate?: Nullable<string>, credentialStatus?: Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.CredentialStatus>, termsOfUse?: Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.TermsOfUse>);
        get context(): kotlin.collections.KtList<string>;
        get type(): kotlin.collections.KtList<string>;
        get credentialSubject(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        get id(): Nullable<string>;
        get issuer(): Nullable<string>;
        get issuanceDate(): Nullable<string>;
        get expirationDate(): Nullable<string>;
        get credentialStatus(): Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.CredentialStatus>;
        get termsOfUse(): Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.TermsOfUse>;
        encodeToJsonObject(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        copy(context?: kotlin.collections.KtList<string>, type?: kotlin.collections.KtList<string>, credentialSubject?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, id?: Nullable<string>, issuer?: Nullable<string>, issuanceDate?: Nullable<string>, expirationDate?: Nullable<string>, credentialStatus?: Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.CredentialStatus>, termsOfUse?: Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.TermsOfUse>): id.walt.w3c.vc.vcs.W3CV11DataModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: id.walt.w3c.vc.vcs.CredentialDataModel["__doNotUseOrImplementIt"];
        static get Companion(): {
            get defaultContext(): kotlin.collections.KtList<string>;
            readonly __doNotUseOrImplementIt: id.walt.w3c.vc.vcs.W3CMetadata["__doNotUseOrImplementIt"];
        } & id.walt.w3c.vc.vcs.W3CMetadata;
    }
    namespace W3CV11DataModel {
        class CredentialSubject {
            constructor(id: string);
            get id(): string;
            copy(id?: string): id.walt.w3c.vc.vcs.W3CV11DataModel.CredentialSubject;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace id.walt.w3c.vc.vcs {
    class W3CV2DataModel implements id.walt.w3c.vc.vcs.CredentialDataModel {
        constructor(context: kotlin.collections.KtList<string> | undefined, type: kotlin.collections.KtList<string> | undefined, credentialSubject: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, id?: Nullable<string>, issuer?: Nullable<string>, validFrom?: Nullable<string>, validUntil?: Nullable<string>, credentialStatus?: Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.CredentialStatus>, termsOfUse?: Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.TermsOfUse>);
        get context(): kotlin.collections.KtList<string>;
        get type(): kotlin.collections.KtList<string>;
        get credentialSubject(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        get id(): Nullable<string>;
        get issuer(): Nullable<string>;
        get validFrom(): Nullable<string>;
        get validUntil(): Nullable<string>;
        get credentialStatus(): Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.CredentialStatus>;
        get termsOfUse(): Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.TermsOfUse>;
        encodeToJsonObject(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        copy(context?: kotlin.collections.KtList<string>, type?: kotlin.collections.KtList<string>, credentialSubject?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, id?: Nullable<string>, issuer?: Nullable<string>, validFrom?: Nullable<string>, validUntil?: Nullable<string>, credentialStatus?: Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.CredentialStatus>, termsOfUse?: Nullable<id.walt.w3c.vc.vcs.W3CBaseDataModels.TermsOfUse>): id.walt.w3c.vc.vcs.W3CV2DataModel;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        readonly __doNotUseOrImplementIt: id.walt.w3c.vc.vcs.CredentialDataModel["__doNotUseOrImplementIt"];
        static get Companion(): {
            get defaultContext(): kotlin.collections.KtList<string>;
            readonly __doNotUseOrImplementIt: id.walt.w3c.vc.vcs.W3CMetadata["__doNotUseOrImplementIt"];
        } & id.walt.w3c.vc.vcs.W3CMetadata;
    }
    namespace W3CV2DataModel {
        class CredentialSubject {
            constructor(id: string);
            get id(): string;
            copy(id?: string): id.walt.w3c.vc.vcs.W3CV2DataModel.CredentialSubject;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace id.walt.w3c.vc.vcs {
    class W3CVCSerializer /* implements kotlinx.serialization.KSerializer<id.walt.w3c.vc.vcs.W3CVC> */ {
        constructor();
    }
    class W3CVC implements kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> {
        constructor(content?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>);
        getType(): kotlin.collections.KtList<string>;
        toJsonObject(additionalProperties?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        toJson(): string;
        toPrettyJson(): string;
        signSdJwt$default(issuerKey: id.walt.crypto.keys.Key, issuerId: string, issuerKid: Nullable<string>, subjectDid: string, disclosureMap: kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>/* id.walt.sdjwt.SDMap */, additionalJwtHeaders: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> | undefined, additionalJwtOptions: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> | undefined, $completion: any/* kotlin.coroutines.Continuation<string> */): any;
        signJws$default(issuerKey: id.walt.crypto.keys.Key, issuerId: Nullable<string>, issuerKid: Nullable<string> | undefined, subjectDid: string, additionalJwtHeader: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> | undefined, additionalJwtOptions: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */> | undefined, $completion: any/* kotlin.coroutines.Continuation<string> */): any;
        signSdJwtAsync$default(issuerKey: id.walt.crypto.keys.Key, issuerId: string, issuerKid: Nullable<string>, subjectDid: string, disclosureMap: kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>/* id.walt.sdjwt.SDMap */, additionalJwtHeaders?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, additionalJwtOptions?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): Promise<string>;
        signJwsAsync$default(issuerKey: id.walt.crypto.keys.Key, issuerId: Nullable<string>, issuerKid: Nullable<string> | undefined, subjectDid: string, additionalJwtHeader?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, additionalJwtOptions?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): Promise<string>;
        copy(content?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>): id.walt.w3c.vc.vcs.W3CVC;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        asJsReadonlyMapView(): ReadonlyMap<string, any/* kotlinx.serialization.json.JsonElement */>;
        readonly __doNotUseOrImplementIt: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>["__doNotUseOrImplementIt"];
        static get Companion(): {
            build(context: kotlin.collections.KtList<string>, type: kotlin.collections.KtList<string>, data: Array<any/* kotlin.Pair<string, any> */>): id.walt.w3c.vc.vcs.W3CVC;
            fromJson(json: string): id.walt.w3c.vc.vcs.W3CVC;
        };
    }
    namespace W3CVC {
        class $signSdJwtCOROUTINE$13 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.w3c.vc.vcs.W3CVC, issuerKey: id.walt.crypto.keys.Key, issuerId: string, issuerKid: Nullable<string>, subjectDid: string, disclosureMap: kotlin.collections.KtMap<string, id.walt.sdjwt.SDField>/* id.walt.sdjwt.SDMap */, additionalJwtHeaders: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, additionalJwtOptions: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
        class $signJwsCOROUTINE$14 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.w3c.vc.vcs.W3CVC, issuerKey: id.walt.crypto.keys.Key, issuerId: Nullable<string>, issuerKid: Nullable<string>, subjectDid: string, additionalJwtHeader: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, additionalJwtOptions: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>, resultContinuation: any/* kotlin.coroutines.Continuation<string> */);
        }
    }
}
export declare namespace id.walt.w3c.utils {
    const CredentialBuilderUtils: {
        generateCredentialSubject(credentialSubject: string): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
    };
}
export declare namespace id.walt.policies {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    abstract class CredentialDataValidatorPolicy extends id.walt.policies.VerificationPolicy {
        constructor();
        verify$default(data: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, args: Nullable<any> | undefined, context: kotlin.collections.KtMap<string, any>, $completion: any/* kotlin.coroutines.Continuation<kotlin.Result<any>> */): any;
        verifyAsync$default(data: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, args: Nullable<any> | undefined, context: kotlin.collections.KtMap<string, any>): Promise<any/* kotlin.Result<any> */>;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace id.walt.policies {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    abstract class CredentialWrapperValidatorPolicy extends id.walt.policies.VerificationPolicy {
        constructor();
        verify$default(data: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, args: Nullable<any> | undefined, context: kotlin.collections.KtMap<string, any>, $completion: any/* kotlin.coroutines.Continuation<kotlin.Result<any>> */): any;
        verifyAsync$default(data: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, args: Nullable<any> | undefined, context: kotlin.collections.KtMap<string, any>): Promise<any/* kotlin.Result<any> */>;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace id.walt.policies {
    abstract class SerializableRuntimeException /* extends kotlin.RuntimeException */ {
        protected constructor(message?: Nullable<string>);
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class JsonSchemaVerificationException extends id.walt.policies.SerializableRuntimeException {
        constructor(validationErrors: kotlin.collections.KtList<id.walt.policies.policies.JsonSchemaPolicy.SerializableValidationError>);
        get validationErrors(): kotlin.collections.KtList<id.walt.policies.policies.JsonSchemaPolicy.SerializableValidationError>;
        copy(validationErrors?: kotlin.collections.KtList<id.walt.policies.policies.JsonSchemaPolicy.SerializableValidationError>): id.walt.policies.JsonSchemaVerificationException;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class NotBeforePolicyException extends id.walt.policies.SerializableRuntimeException {
        constructor(date: any/* kotlinx.datetime.Instant */, dateSeconds: any/* kotlin.Long */, availableIn: any/* kotlin.time.Duration */, availableInSeconds: any/* kotlin.Long */, key: string, policyAvailable?: boolean);
        get date(): any/* kotlinx.datetime.Instant */;
        get dateSeconds(): any/* kotlin.Long */;
        get availableIn(): any/* kotlin.time.Duration */;
        get availableInSeconds(): any/* kotlin.Long */;
        get key(): string;
        get policyAvailable(): boolean;
        copy(date?: any/* kotlinx.datetime.Instant */, dateSeconds?: any/* kotlin.Long */, availableIn?: any/* kotlin.time.Duration */, availableInSeconds?: any/* kotlin.Long */, key?: string, policyAvailable?: boolean): id.walt.policies.NotBeforePolicyException;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class ExpirationDatePolicyException extends id.walt.policies.SerializableRuntimeException {
        constructor(date: any/* kotlinx.datetime.Instant */, dateSeconds: any/* kotlin.Long */, expiredSince: any/* kotlin.time.Duration */, expiredSinceSeconds: any/* kotlin.Long */, key: string, policyAvailable?: boolean);
        get date(): any/* kotlinx.datetime.Instant */;
        get dateSeconds(): any/* kotlin.Long */;
        get expiredSince(): any/* kotlin.time.Duration */;
        get expiredSinceSeconds(): any/* kotlin.Long */;
        get key(): string;
        get policyAvailable(): boolean;
        copy(date?: any/* kotlinx.datetime.Instant */, dateSeconds?: any/* kotlin.Long */, expiredSince?: any/* kotlin.time.Duration */, expiredSinceSeconds?: any/* kotlin.Long */, key?: string, policyAvailable?: boolean): id.walt.policies.ExpirationDatePolicyException;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class WebhookPolicyException extends id.walt.policies.SerializableRuntimeException {
        constructor(response: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */);
        get response(): kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */;
        copy(response?: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */): id.walt.policies.WebhookPolicyException;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class PresentationDefinitionException extends id.walt.policies.SerializableRuntimeException {
        constructor(presentationDefinitionMatch: boolean);
        get presentationDefinitionMatch(): boolean;
        static get Companion(): {
        };
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class PresentationDefinitionRelationalConstraintException extends id.walt.policies.SerializableRuntimeException {
        constructor(constraint: id.walt.policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType, constraintFailureDescription: string);
        get constraint(): id.walt.policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType;
        get constraintFailureDescription(): string;
        static get Companion(): {
        };
    }
    namespace PresentationDefinitionRelationalConstraintException {
        abstract class RelationalConstraintType {
            private constructor();
            static get subject_is_issuer(): id.walt.policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType & {
                get name(): "subject_is_issuer";
                get ordinal(): 0;
            };
            static get is_holder(): id.walt.policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType & {
                get name(): "is_holder";
                get ordinal(): 1;
            };
            static get same_subject(): id.walt.policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType & {
                get name(): "same_subject";
                get ordinal(): 2;
            };
            get name(): "subject_is_issuer" | "is_holder" | "same_subject";
            get ordinal(): 0 | 1 | 2;
            static values(): Array<id.walt.policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType>;
            static valueOf(value: string): id.walt.policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType;
        }
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class MinimumCredentialsException extends id.walt.policies.SerializableRuntimeException {
        constructor(total: number, missing: number);
        get total(): number;
        get missing(): number;
        static get Companion(): {
        };
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class MaximumCredentialsException extends id.walt.policies.SerializableRuntimeException {
        constructor(total: number, exceeded: number);
        get total(): number;
        get exceeded(): number;
        static get Companion(): {
        };
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class HolderBindingException extends id.walt.policies.SerializableRuntimeException {
        constructor(presenterDid: string, credentialDids: kotlin.collections.KtList<string>);
        get presenterDid(): string;
        get credentialDids(): kotlin.collections.KtList<string>;
        static get Companion(): {
        };
    }
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class NotAllowedIssuerException extends id.walt.policies.SerializableRuntimeException {
        constructor(issuer: string, allowedIssuers: kotlin.collections.KtList<string>);
        get issuer(): string;
        get allowedIssuers(): kotlin.collections.KtList<string>;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.policies {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    abstract class JwtVerificationPolicy extends id.walt.policies.VerificationPolicy {
        constructor();
        verify$default(credential: string, args: Nullable<any> | undefined, context: kotlin.collections.KtMap<string, any>, $completion: any/* kotlin.coroutines.Continuation<kotlin.Result<any>> */): any;
        verifyAsync$default(credential: string, args: Nullable<any> | undefined, context: kotlin.collections.KtMap<string, any>): Promise<any/* kotlin.Result<any> */>;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace id.walt.policies {
    const PolicyManager: {
        listPolicyDescriptions(): kotlin.collections.KtMap<string, string>;
        registerPolicies(policies: Array<id.walt.policies.VerificationPolicy>): void;
        getPolicy(name: string): id.walt.policies.VerificationPolicy;
    };
}
export declare namespace id.walt.policies {
    abstract class VerificationPolicy {
        constructor();
        abstract get name(): string;
        abstract get description(): string;
        abstract get supportedVCFormats(): kotlin.collections.KtSet<any/* id.walt.w3c.utils.VCFormat */>;
        static get Companion(): {
        } & any/* kotlinx.serialization.internal.SerializerFactory */;
    }
}
export declare namespace id.walt.policies {
    abstract class Verifier extends _objects_.id$walt$policies$Verifier {
        private constructor();
    }
    namespace Verifier {
        class $runPolicyRequestCOROUTINE$0 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.policies.Verifier, _this_: id.walt.policies.models.PolicyRequest, dataToVerify: any/* kotlinx.serialization.json.JsonElement */, context: kotlin.collections.KtMap<string, any>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<any>> */);
        }
        class $verifyCredentialCOROUTINE$1 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.policies.Verifier, jwt: string, policies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, context: kotlin.collections.KtMap<string, any>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.collections.KtList<id.walt.policies.models.PolicyResult>> */);
        }
        class $verifyPresentationCOROUTINE$2 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.policies.Verifier, format: any/* id.walt.w3c.utils.VCFormat */, vpToken: string, vpPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, globalVcPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, specificCredentialPolicies: kotlin.collections.KtMap<string, kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>>, presentationContext: kotlin.collections.KtMap<string, any>, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.policies.models.PresentationVerificationResponse> */);
        }
        class $verifyW3CPresentationCOROUTINE$3 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.policies.Verifier, format: any/* id.walt.w3c.utils.VCFormat */, vpToken: string, vpPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, globalVcPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, specificCredentialPolicies: kotlin.collections.KtMap<string, kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>>, presentationContext: kotlin.collections.KtMap<string, any>, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.policies.models.PresentationVerificationResponse> */);
        }
        class $verifySDJwtVCPresentationCOROUTINE$4 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.policies.Verifier, vpToken: string, vpPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, globalVcPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, specificCredentialPolicies: kotlin.collections.KtMap<string, kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>>, presentationContext: kotlin.collections.KtMap<string, any>, resultContinuation: any/* kotlin.coroutines.Continuation<id.walt.policies.models.PresentationVerificationResponse> */);
        }
        class $verifyJwsCOROUTINE$5 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: typeof id.walt.policies.Verifier, jwt: string, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<kotlinx.serialization.json.JsonObject>> */);
        }
    }
}
declare namespace _objects_ {
    const id$walt$policies$Verifier: {
        verifyCredential$default(jwt: string, policies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, context: kotlin.collections.KtMap<string, any> | undefined, $completion: any/* kotlin.coroutines.Continuation<kotlin.collections.KtList<id.walt.policies.models.PolicyResult>> */): any;
        runPolicyRequests$default(jwt: string, policyRequests: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, context: kotlin.collections.KtMap<string, any> | undefined, onSuccess: any /*Suspend functions are not supported*/, onError: any /*Suspend functions are not supported*/, $completion: any/* kotlin.coroutines.Continuation<void> */): any;
        verifyPresentation$default(format: any/* id.walt.w3c.utils.VCFormat */, vpToken: string, vpPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, globalVcPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, specificCredentialPolicies: kotlin.collections.KtMap<string, kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>>, presentationContext: kotlin.collections.KtMap<string, any> | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.policies.models.PresentationVerificationResponse> */): any;
        verifyW3CPresentation$default(format: any/* id.walt.w3c.utils.VCFormat */, vpToken: string, vpPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, globalVcPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, specificCredentialPolicies: kotlin.collections.KtMap<string, kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>>, presentationContext: kotlin.collections.KtMap<string, any> | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.policies.models.PresentationVerificationResponse> */): any;
        verifySDJwtVCPresentation$default(vpToken: string, vpPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, globalVcPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, specificCredentialPolicies: kotlin.collections.KtMap<string, kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>>, presentationContext: kotlin.collections.KtMap<string, any> | undefined, $completion: any/* kotlin.coroutines.Continuation<id.walt.policies.models.PresentationVerificationResponse> */): any;
        runPolicyRequestsAsync$default(jwt: string, policyRequests: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, context: kotlin.collections.KtMap<string, any> | undefined, onSuccess: any /*Suspend functions are not supported*/, onError: any /*Suspend functions are not supported*/): Promise<void>;
        verifySDJwtVCPresentationAsync$default(vpToken: string, vpPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, globalVcPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, specificCredentialPolicies: kotlin.collections.KtMap<string, kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>>, presentationContext?: kotlin.collections.KtMap<string, any>): Promise<id.walt.policies.models.PresentationVerificationResponse>;
        verifyPresentationAsync$default(format: any/* id.walt.w3c.utils.VCFormat */, vpToken: string, vpPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, globalVcPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, specificCredentialPolicies: kotlin.collections.KtMap<string, kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>>, presentationContext?: kotlin.collections.KtMap<string, any>): Promise<id.walt.policies.models.PresentationVerificationResponse>;
        verifyW3CPresentationAsync$default(format: any/* id.walt.w3c.utils.VCFormat */, vpToken: string, vpPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, globalVcPolicies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, specificCredentialPolicies: kotlin.collections.KtMap<string, kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>>, presentationContext?: kotlin.collections.KtMap<string, any>): Promise<id.walt.policies.models.PresentationVerificationResponse>;
        verifyCredentialAsync$default(jwt: string, policies: kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>, context?: kotlin.collections.KtMap<string, any>): Promise<kotlin.collections.KtList<id.walt.policies.models.PolicyResult>>;
    } & {
        new(): any;
    };
}
export declare namespace id.walt.policies.models {
    class PolicyRequest {
        constructor(policy: id.walt.policies.VerificationPolicy, args?: Nullable<any>/* Nullable<kotlinx.serialization.json.JsonElement> */);
        get policy(): id.walt.policies.VerificationPolicy;
        get args(): Nullable<any>/* Nullable<kotlinx.serialization.json.JsonElement> */;
        copy(policy?: id.walt.policies.VerificationPolicy, args?: Nullable<any>/* Nullable<kotlinx.serialization.json.JsonElement> */): id.walt.policies.models.PolicyRequest;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
            createFromJsonElement(jsonElement: any/* kotlinx.serialization.json.JsonElement */, errorMessage?: Nullable<() => string>): id.walt.policies.models.PolicyRequest;
            parsePolicyRequests(_this_: kotlin.collections.KtList<any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonArray */): kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>;
        };
    }
}
export declare namespace id.walt.policies.models {
    class PolicyResult {
        constructor(request: id.walt.policies.models.PolicyRequest, result: any/* kotlin.Result<Nullable<any>> */);
        get request(): id.walt.policies.models.PolicyRequest;
        get result(): any/* kotlin.Result<Nullable<any>> */;
        isSuccess(): boolean;
        copy(request?: id.walt.policies.models.PolicyRequest, result?: any/* kotlin.Result<Nullable<any>> */): id.walt.policies.models.PolicyResult;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.policies.models {
    class PresentationResultEntry {
        constructor(credential: string, policyResults?: kotlin.collections.KtList<id.walt.policies.models.PolicyResult>/* kotlin.collections.ArrayList<id.walt.policies.models.PolicyResult> */);
        get credential(): string;
        get policyResults(): kotlin.collections.KtList<id.walt.policies.models.PolicyResult>/* kotlin.collections.ArrayList<id.walt.policies.models.PolicyResult> */;
        copy(credential?: string, policyResults?: kotlin.collections.KtList<id.walt.policies.models.PolicyResult>/* kotlin.collections.ArrayList<id.walt.policies.models.PolicyResult> */): id.walt.policies.models.PresentationResultEntry;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.policies.models {
    class PresentationVerificationResponse {
        constructor(results: kotlin.collections.KtList<id.walt.policies.models.PresentationResultEntry>/* kotlin.collections.ArrayList<id.walt.policies.models.PresentationResultEntry> */, time: any/* kotlin.time.Duration */, policiesRun: number);
        get results(): kotlin.collections.KtList<id.walt.policies.models.PresentationResultEntry>/* kotlin.collections.ArrayList<id.walt.policies.models.PresentationResultEntry> */;
        get time(): any/* kotlin.time.Duration */;
        get policiesRun(): number;
        overallSuccess(): boolean;
        policiesFailed(): number;
        policiesSucceeded(): number;
        copy(results?: kotlin.collections.KtList<id.walt.policies.models.PresentationResultEntry>/* kotlin.collections.ArrayList<id.walt.policies.models.PresentationResultEntry> */, time?: any/* kotlin.time.Duration */, policiesRun?: number): id.walt.policies.models.PresentationVerificationResponse;
        toString(): string;
        hashCode(): number;
        equals(other: Nullable<any>): boolean;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.policies.policies {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class AllowedIssuerPolicy extends id.walt.policies.CredentialWrapperValidatorPolicy {
        constructor();
        get name(): string;
        get description(): string;
        get supportedVCFormats(): kotlin.collections.KtSet<any/* id.walt.w3c.utils.VCFormat */>;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.policies.policies {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class DynamicPolicy extends id.walt.policies.CredentialDataValidatorPolicy {
        constructor();
        get name(): string;
        get description(): string;
        get supportedVCFormats(): kotlin.collections.KtSet<any/* id.walt.w3c.utils.VCFormat */>;
        static get Companion(): {
        };
    }
    namespace DynamicPolicy {
        class $verifyCOROUTINE$10 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.policies.policies.DynamicPolicy, data: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, args: Nullable<any>, context: kotlin.collections.KtMap<string, any>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<any>> */);
        }
    }
}
export declare namespace id.walt.policies.policies {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class ExpirationDatePolicy extends id.walt.policies.CredentialWrapperValidatorPolicy {
        constructor();
        get name(): string;
        get description(): string;
        get supportedVCFormats(): kotlin.collections.KtSet<any/* id.walt.w3c.utils.VCFormat */>;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.policies.policies {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class JsonSchemaPolicy extends id.walt.policies.CredentialDataValidatorPolicy {
        constructor();
        get name(): string;
        get description(): string;
        get supportedVCFormats(): kotlin.collections.KtSet<any/* id.walt.w3c.utils.VCFormat */>;
        static get Companion(): {
        };
    }
    namespace JsonSchemaPolicy {
        class SerializableValidationError {
            constructor(schemaPath: string, objectPath: string, message: string, details: Nullable<kotlin.collections.KtMap<string, string>>, absoluteLocation: Nullable<string>);
            get schemaPath(): string;
            get objectPath(): string;
            get message(): string;
            get details(): Nullable<kotlin.collections.KtMap<string, string>>;
            get absoluteLocation(): Nullable<string>;
            copy(schemaPath?: string, objectPath?: string, message?: string, details?: Nullable<kotlin.collections.KtMap<string, string>>, absoluteLocation?: Nullable<string>): id.walt.policies.policies.JsonSchemaPolicy.SerializableValidationError;
            toString(): string;
            hashCode(): number;
            equals(other: Nullable<any>): boolean;
            static get Companion(): {
            };
        }
    }
}
export declare namespace id.walt.policies.policies {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class JwtSignaturePolicy extends id.walt.policies.JwtVerificationPolicy {
        constructor();
        get name(): string;
        get description(): string;
        get supportedVCFormats(): kotlin.collections.KtSet<any/* id.walt.w3c.utils.VCFormat */>;
        static get Companion(): {
        };
    }
    namespace JwtSignaturePolicy {
        class $verifyCOROUTINE$11 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.policies.policies.JwtSignaturePolicy, credential: string, args: Nullable<any>, context: kotlin.collections.KtMap<string, any>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<any>> */);
        }
    }
}
export declare namespace id.walt.policies.policies {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class NotBeforeDatePolicy extends id.walt.policies.CredentialWrapperValidatorPolicy {
        constructor();
        get name(): string;
        get description(): string;
        get supportedVCFormats(): kotlin.collections.KtSet<any/* id.walt.w3c.utils.VCFormat */>;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.policies.policies {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class WebhookPolicy extends id.walt.policies.CredentialWrapperValidatorPolicy {
        constructor();
        get name(): string;
        get description(): string;
        get supportedVCFormats(): kotlin.collections.KtSet<any/* id.walt.w3c.utils.VCFormat */>;
        static get Companion(): {
        };
    }
    namespace WebhookPolicy {
        class $verifyCOROUTINE$14 /* extends kotlin.coroutines.CoroutineImpl */ {
            constructor(_this_: id.walt.policies.policies.WebhookPolicy, data: kotlin.collections.KtMap<string, any/* kotlinx.serialization.json.JsonElement */>/* kotlinx.serialization.json.JsonObject */, args: Nullable<any>, context: kotlin.collections.KtMap<string, any>, resultContinuation: any/* kotlin.coroutines.Continuation<kotlin.Result<any>> */);
        }
    }
}
export declare namespace id.walt.policies.policies.vp {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class HolderBindingPolicy extends id.walt.policies.CredentialWrapperValidatorPolicy {
        constructor();
        get name(): string;
        get description(): string;
        get supportedVCFormats(): kotlin.collections.KtSet<any/* id.walt.w3c.utils.VCFormat */>;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.policies.policies.vp {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class MaximumCredentialsPolicy extends id.walt.policies.CredentialWrapperValidatorPolicy {
        constructor();
        get name(): string;
        get description(): string;
        get supportedVCFormats(): kotlin.collections.KtSet<any/* id.walt.w3c.utils.VCFormat */>;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.policies.policies.vp {
    /* @ts-ignore: https://github.com/microsoft/TypeScript/issues/4628 */
    class MinimumCredentialsPolicy extends id.walt.policies.CredentialWrapperValidatorPolicy {
        constructor();
        get name(): string;
        get description(): string;
        get supportedVCFormats(): kotlin.collections.KtSet<any/* id.walt.w3c.utils.VCFormat */>;
        static get Companion(): {
        };
    }
}
export declare namespace id.walt.policies.utils {
    const PresentationVerificationUtils: {
        generatePolicyRequest(jsonString: string): kotlin.collections.KtList<id.walt.policies.models.PolicyRequest>;
        generateSpecificPolicyRequest(jsonString: string): kotlin.collections.KtMap<string, any>;
    };
}
export as namespace id_walt_policies_waltid_verification_policies;