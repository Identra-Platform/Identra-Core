type Nullable<T> = T | null | undefined
export declare namespace kotlin.collections {
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
export as namespace id_walt_sdjwt_waltid_sdjwt;