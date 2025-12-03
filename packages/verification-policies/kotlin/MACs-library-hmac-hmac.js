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
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var copyOf = kotlin_kotlin.$_$.a8;
  var fill = kotlin_kotlin.$_$.o8;
  var toByte = kotlin_kotlin.$_$.ce;
  var protoOf = kotlin_kotlin.$_$.be;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var Mac_init_$Init$ = kotlin_org_kotlincrypto_core_mac.$_$.a;
  var Engine = kotlin_org_kotlincrypto_core_mac.$_$.c;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
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
    $this.d6k_1 = digest;
    $this.b6k_1 = new Int8Array(digest.x6h());
    $this.c6k_1 = new Int8Array(digest.x6h());
    var tmp1 = $this.d6k_1;
    var tmp3 = $this.b6k_1;
    // Inline function 'org.kotlincrypto.macs.hmac.Engine.doInitialization' call
    var oKey = $this.c6k_1;
    var blockSize = tmp1.x6h();
    if (false) {
      tmp1.j6i();
    }
    var tmp;
    if (key.length > blockSize) {
      var keyHash = tmp1.g6i(key);
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
    tmp1.a6i(tmp3);
    return $this;
  }
  function Engine_init_$Create$(key, digest) {
    return Engine_init_$Init$_0(key, digest, objectCreate(protoOf(Engine_0)));
  }
  function Companion() {
    this.e6k_1 = 54;
    this.f6k_1 = 92;
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
  protoOf(Engine_0).c6i = function (input, offset, len) {
    this.d6k_1.c6i(input, offset, len);
  };
  protoOf(Engine_0).x6j = function () {
    var final = new Int8Array(this.d6k_1.y6h());
    this.g6k(final, 0);
    return final;
  };
  protoOf(Engine_0).g6k = function (dest, destOffset) {
    var inner = this.d6k_1.d6i();
    this.d6k_1.a6i(this.c6k_1);
    this.d6k_1.a6i(inner);
    this.d6k_1.h6i(dest, destOffset);
    this.d6k_1.a6i(this.b6k_1);
  };
  protoOf(Engine_0).j6i = function () {
    this.d6k_1.j6i();
    this.d6k_1.a6i(this.b6k_1);
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
