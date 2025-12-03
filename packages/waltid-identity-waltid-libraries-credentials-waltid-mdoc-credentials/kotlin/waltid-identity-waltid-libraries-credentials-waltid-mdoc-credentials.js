(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.mdoc-credentials:waltid-mdoc-credentials'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'id.walt.mdoc-credentials:waltid-mdoc-credentials'.");
    }
    globalThis['id.walt.mdoc-credentials:waltid-mdoc-credentials'] = factory(typeof globalThis['id.walt.mdoc-credentials:waltid-mdoc-credentials'] === 'undefined' ? {} : globalThis['id.walt.mdoc-credentials:waltid-mdoc-credentials'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.c;
  var VOID = kotlin_kotlin.$_$.a;
  var initMetadataForInterface = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  function sign1$default(payload, keyID, $completion, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.a(payload, keyID, $completion) : $super.a.call(this, payload, keyID, $completion);
  }
  initMetadataForInterface(AsyncCOSECryptoProvider, 'AsyncCOSECryptoProvider', VOID, VOID, VOID, [2]);
  initMetadataForInterface(JSAsyncCOSECryptoProvider, 'JSAsyncCOSECryptoProvider', VOID, VOID, [AsyncCOSECryptoProvider], [2]);
  //endregion
  function AsyncCOSECryptoProvider() {
  }
  function JSAsyncCOSECryptoProvider() {
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$mdoc = $id$walt.mdoc || ($id$walt.mdoc = {});
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials.js.map
