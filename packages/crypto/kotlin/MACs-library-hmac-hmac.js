(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './core-library-mac.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./core-library-mac.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['core-library-mac'] === 'undefined') {
      throw new Error("Error loading module 'MACs-library-hmac-hmac'. Its dependency 'core-library-mac' was not found. Please, check whether 'core-library-mac' is loaded prior to 'MACs-library-hmac-hmac'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'MACs-library-hmac-hmac'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'MACs-library-hmac-hmac'.");
    }
    globalThis['MACs-library-hmac-hmac'] = factory(typeof globalThis['MACs-library-hmac-hmac'] === 'undefined' ? {} : globalThis['MACs-library-hmac-hmac'], globalThis['core-library-mac'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_kotlincrypto_core_mac, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Engine_init_$Init$ = kotlin_org_kotlincrypto_core_mac.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var copyOf = kotlin_kotlin.$_$.c7;
  var fill = kotlin_kotlin.$_$.p7;
  var toByte = kotlin_kotlin.$_$.qc;
  var protoOf = kotlin_kotlin.$_$.pc;
  var objectCreate = kotlin_kotlin.$_$.oc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.mb;
  var Mac_init_$Init$ = kotlin_org_kotlincrypto_core_mac.$_$.a;
  var Engine = kotlin_org_kotlincrypto_core_mac.$_$.c;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  var VOID = kotlin_kotlin.$_$.j;
  var Mac = kotlin_org_kotlincrypto_core_mac.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Engine_0, 'Engine', VOID, Engine);
  initMetadataForClass(Hmac, 'Hmac', VOID, Mac);
  //endregion
  function Engine_init_$Init$_0(key, digest, $this) {
    Engine_init_$Init$(key, false, $this);
    Engine_0.call($this);
    $this.o6d_1 = digest;
    $this.m6d_1 = new Int8Array(digest.z6c());
    $this.n6d_1 = new Int8Array(digest.z6c());
    var tmp1 = $this.o6d_1;
    var tmp3 = $this.m6d_1;
    // Inline function 'org.kotlincrypto.macs.hmac.Engine.doInitialization' call
    var oKey = $this.n6d_1;
    var blockSize = tmp1.z6c();
    if (false) {
      tmp1.r6c();
    }
    var tmp;
    if (key.length > blockSize) {
      var keyHash = tmp1.g6d(key);
      // Inline function 'kotlin.also' call
      var this_0 = copyOf(keyHash, blockSize);
      fill(keyHash, 0);
      tmp = this_0;
    } else {
      tmp = copyOf(key, blockSize);
    }
    var sizedKey = tmp;
    var inductionVariable = 0;
    if (inductionVariable < blockSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.experimental.xor' call
        var this_1 = sizedKey[i];
        tmp3[i] = toByte(this_1 ^ 54);
        // Inline function 'kotlin.experimental.xor' call
        var this_2 = sizedKey[i];
        oKey[i] = toByte(this_2 ^ 92);
      }
       while (inductionVariable < blockSize);
    fill(sizedKey, 0);
    tmp1.b6d(tmp3);
    return $this;
  }
  function Engine_init_$Create$(key, digest) {
    return Engine_init_$Init$_0(key, digest, objectCreate(protoOf(Engine_0)));
  }
  function Companion() {
    this.p6d_1 = 54;
    this.q6d_1 = 92;
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Hmac_init_$Init$(key, algorithm, digest, $this) {
    Mac_init_$Init$(algorithm, Engine_init_$Create$(key, digest), $this);
    Hmac.call($this);
    return $this;
  }
  protoOf(Engine_0).s6c = function (input, offset, len) {
    this.o6d_1.s6c(input, offset, len);
  };
  protoOf(Engine_0).q6c = function () {
    var final = new Int8Array(this.o6d_1.a6d());
    this.r6d(final, 0);
    return final;
  };
  protoOf(Engine_0).r6d = function (dest, destOffset) {
    var inner = this.o6d_1.d6d();
    this.o6d_1.b6d(this.n6d_1);
    this.o6d_1.b6d(inner);
    this.o6d_1.h6d(dest, destOffset);
    this.o6d_1.b6d(this.m6d_1);
  };
  protoOf(Engine_0).r6c = function () {
    this.o6d_1.r6c();
    this.o6d_1.b6d(this.m6d_1);
  };
  function Engine_0() {
  }
  function Hmac() {
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Hmac_init_$Init$;
  _.$_$.b = Hmac;
  //endregion
  return _;
}));

//# sourceMappingURL=MACs-library-hmac-hmac.js.map
