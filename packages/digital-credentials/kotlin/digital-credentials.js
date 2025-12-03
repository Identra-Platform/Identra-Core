(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-client-ktor-client-core.js', './crypto.js', './dids.js', './waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js', './w3c-credentials.js', './waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./crypto.js'), require('./dids.js'), require('./waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js'), require('./w3c-credentials.js'), require('./waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.credentials:waltid-digital-credentials'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'id.walt.credentials:waltid-digital-credentials'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.credentials:waltid-digital-credentials'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'id.walt.credentials:waltid-digital-credentials'.");
    }
    if (typeof crypto === 'undefined') {
      throw new Error("Error loading module 'id.walt.credentials:waltid-digital-credentials'. Its dependency 'crypto' was not found. Please, check whether 'crypto' is loaded prior to 'id.walt.credentials:waltid-digital-credentials'.");
    }
    if (typeof dids === 'undefined') {
      throw new Error("Error loading module 'id.walt.credentials:waltid-digital-credentials'. Its dependency 'dids' was not found. Please, check whether 'dids' is loaded prior to 'id.walt.credentials:waltid-digital-credentials'.");
    }
    if (typeof globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.credentials:waltid-digital-credentials'. Its dependency 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt' was not found. Please, check whether 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt' is loaded prior to 'id.walt.credentials:waltid-digital-credentials'.");
    }
    if (typeof globalThis['w3c-credentials'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.credentials:waltid-digital-credentials'. Its dependency 'w3c-credentials' was not found. Please, check whether 'w3c-credentials' is loaded prior to 'id.walt.credentials:waltid-digital-credentials'.");
    }
    if (typeof globalThis['waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.credentials:waltid-digital-credentials'. Its dependency 'waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials' was not found. Please, check whether 'waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials' is loaded prior to 'id.walt.credentials:waltid-digital-credentials'.");
    }
    globalThis['id.walt.credentials:waltid-digital-credentials'] = factory(typeof globalThis['id.walt.credentials:waltid-digital-credentials'] === 'undefined' ? {} : globalThis['id.walt.credentials:waltid-digital-credentials'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-client-ktor-client-core'], crypto, dids, globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'], globalThis['w3c-credentials'], globalThis['waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_client_core, kotlin_id_walt_crypto_waltid_crypto, kotlin_id_walt_did_waltid_did, kotlin_id_walt_sdjwt_waltid_sdjwt, kotlin_id_walt_credentials_waltid_w3c_credentials, kotlin_id_walt_mdoc_credentials_waltid_mdoc_credentials) {
  'use strict';
  //region block: pre-declaration
  //endregion
  //region block: exports
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  kotlin_id_walt_crypto_waltid_crypto.$jsExportAll$(_);
  kotlin_id_walt_did_waltid_did.$jsExportAll$(_);
  kotlin_id_walt_sdjwt_waltid_sdjwt.$jsExportAll$(_);
  kotlin_id_walt_credentials_waltid_w3c_credentials.$jsExportAll$(_);
  kotlin_id_walt_mdoc_credentials_waltid_mdoc_credentials.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=digital-credentials.js.map
