(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'core-library-mac'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'core-library-mac'.");
    }
    globalThis['core-library-mac'] = factory(typeof globalThis['core-library-mac'] === 'undefined' ? {} : globalThis['core-library-mac'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var toString = kotlin_kotlin.$_$.ge;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var isBlank = kotlin_kotlin.$_$.jg;
  var protoOf = kotlin_kotlin.$_$.ce;
  var hashCode = kotlin_kotlin.$_$.xc;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Engine, 'Engine');
  initMetadataForClass(Mac, 'Mac');
  //endregion
  function Engine_init_$Init$(key, resetOnDoFinal, $this) {
    Engine.call($this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'kotlin.require' call
    if (!!(key.length === 0)) {
      var message = 'key cannot be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.z6j_1 = resetOnDoFinal;
    return $this;
  }
  function Mac_init_$Init$(algorithm, engine, $this) {
    Mac.call($this);
    // Inline function 'org.kotlincrypto.core.mac.internal.commonInit' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(algorithm)) {
      var message = 'algorithm cannot be blank';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.b6k_1 = algorithm;
    $this.c6k_1 = engine;
    return $this;
  }
  protoOf(Engine).equals = function (other) {
    var tmp;
    if (other instanceof Engine) {
      tmp = hashCode(other) === this.hashCode();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Engine).hashCode = function () {
    return hashCode(this.a6k_1);
  };
  function Engine() {
    this.a6k_1 = new Object();
  }
  protoOf(Mac).f6i = function () {
    return this.b6k_1;
  };
  protoOf(Mac).d6k = function () {
    var final = this.c6k_1.d6k();
    if (this.c6k_1.z6j_1) {
      this.c6k_1.p6i();
    }
    return final;
  };
  protoOf(Mac).e6k = function (input) {
    this.c6k_1.i6i(input, 0, input.length);
    return this.d6k();
  };
  protoOf(Mac).equals = function (other) {
    var tmp;
    if (other instanceof Mac) {
      tmp = other.c6k_1.equals(this.c6k_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Mac).hashCode = function () {
    return this.c6k_1.hashCode();
  };
  protoOf(Mac).toString = function () {
    // Inline function 'org.kotlincrypto.core.mac.internal.commonToString' call
    return 'Mac[' + this.f6i() + ']@' + this.hashCode();
  };
  function Mac() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Mac_init_$Init$;
  _.$_$.b = Engine_init_$Init$;
  _.$_$.c = Engine;
  _.$_$.d = Mac;
  //endregion
  return _;
}));

//# sourceMappingURL=core-library-mac.js.map
