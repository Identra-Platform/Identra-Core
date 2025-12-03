type Nullable<T> = T | null | undefined
export declare namespace id.walt.mdoc {
    interface JSAsyncCOSECryptoProvider /* extends id.walt.mdoc.cose.AsyncCOSECryptoProvider */ {
        sign1Async(payload: any, keyID: Nullable<string>): Promise<any/* id.walt.mdoc.cose.COSESign1 */>;
        readonly __doNotUseOrImplementIt: {
            readonly "id.walt.mdoc.JSAsyncCOSECryptoProvider": unique symbol;
        };
    }
}
export as namespace id_walt_mdoc_credentials_waltid_mdoc_credentials;