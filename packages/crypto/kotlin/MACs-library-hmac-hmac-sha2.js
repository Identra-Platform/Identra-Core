(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './hash-library-sha2.js', './MACs-library-hmac-hmac.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./hash-library-sha2.js'), require('./MACs-library-hmac-hmac.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['hash-library-sha2'] === 'undefined') {
      throw new Error("Error loading module 'MACs-library-hmac-hmac-sha2'. Its dependency 'hash-library-sha2' was not found. Please, check whether 'hash-library-sha2' is loaded prior to 'MACs-library-hmac-hmac-sha2'.");
    }
    if (typeof globalThis['MACs-library-hmac-hmac'] === 'undefined') {
      throw new Error("Error loading module 'MACs-library-hmac-hmac-sha2'. Its dependency 'MACs-library-hmac-hmac' was not found. Please, check whether 'MACs-library-hmac-hmac' is loaded prior to 'MACs-library-hmac-hmac-sha2'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'MACs-library-hmac-hmac-sha2'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'MACs-library-hmac-hmac-sha2'.");
    }
    globalThis['MACs-library-hmac-hmac-sha2'] = factory(typeof globalThis['MACs-library-hmac-hmac-sha2'] === 'undefined' ? {} : globalThis['MACs-library-hmac-hmac-sha2'], globalThis['hash-library-sha2'], globalThis['MACs-library-hmac-hmac'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_kotlincrypto_hash_sha2, kotlin_org_kotlincrypto_macs_hmac, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var SHA256_init_$Create$ = kotlin_org_kotlincrypto_hash_sha2.$_$.a;
  var Hmac_init_$Init$ = kotlin_org_kotlincrypto_macs_hmac.$_$.a;
  var protoOf = kotlin_kotlin.$_$.pc;
  var objectCreate = kotlin_kotlin.$_$.oc;
  var Hmac = kotlin_org_kotlincrypto_macs_hmac.$_$.b;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  var VOID = kotlin_kotlin.$_$.j;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(HmacSHA256, 'HmacSHA256', VOID, Hmac);
  //endregion
  function HmacSHA256_init_$Init$(key, $this) {
    Hmac_init_$Init$(key, 'HmacSHA256', SHA256_init_$Create$(), $this);
    HmacSHA256.call($this);
    return $this;
  }
  function HmacSHA256_init_$Create$(key) {
    return HmacSHA256_init_$Init$(key, objectCreate(protoOf(HmacSHA256)));
  }
  function HmacSHA256() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HmacSHA256_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=MACs-library-hmac-hmac-sha2.js.map
