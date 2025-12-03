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
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var copyOf = kotlin_kotlin.$_$.e7;
  var fill = kotlin_kotlin.$_$.s7;
  var toByte = kotlin_kotlin.$_$.xc;
  var protoOf = kotlin_kotlin.$_$.wc;
  var objectCreate = kotlin_kotlin.$_$.vc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.tb;
  var Mac_init_$Init$ = kotlin_org_kotlincrypto_core_mac.$_$.a;
  var Engine = kotlin_org_kotlincrypto_core_mac.$_$.c;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
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
    $this.e6h_1 = digest;
    $this.c6h_1 = new Int8Array(digest.y6e());
    $this.d6h_1 = new Int8Array(digest.y6e());
    var tmp1 = $this.e6h_1;
    var tmp3 = $this.c6h_1;
    // Inline function 'org.kotlincrypto.macs.hmac.Engine.doInitialization' call
    var oKey = $this.d6h_1;
    var blockSize = tmp1.y6e();
    if (false) {
      tmp1.k6f();
    }
    var tmp;
    if (key.length > blockSize) {
      var keyHash = tmp1.h6f(key);
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
    tmp1.b6f(tmp3);
    return $this;
  }
  function Engine_init_$Create$(key, digest) {
    return Engine_init_$Init$_0(key, digest, objectCreate(protoOf(Engine_0)));
  }
  function Companion() {
    this.f6h_1 = 54;
    this.g6h_1 = 92;
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
  protoOf(Engine_0).d6f = function (input, offset, len) {
    this.e6h_1.d6f(input, offset, len);
  };
  protoOf(Engine_0).y6g = function () {
    var final = new Int8Array(this.e6h_1.z6e());
    this.h6h(final, 0);
    return final;
  };
  protoOf(Engine_0).h6h = function (dest, destOffset) {
    var inner = this.e6h_1.e6f();
    this.e6h_1.b6f(this.d6h_1);
    this.e6h_1.b6f(inner);
    this.e6h_1.i6f(dest, destOffset);
    this.e6h_1.b6f(this.c6h_1);
  };
  protoOf(Engine_0).k6f = function () {
    this.e6h_1.k6f();
    this.e6h_1.b6f(this.c6h_1);
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
