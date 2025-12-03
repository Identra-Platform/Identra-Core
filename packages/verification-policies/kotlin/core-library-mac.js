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
  var toString = kotlin_kotlin.$_$.fe;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var isBlank = kotlin_kotlin.$_$.hg;
  var protoOf = kotlin_kotlin.$_$.be;
  var hashCode = kotlin_kotlin.$_$.wc;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
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
    $this.t6j_1 = resetOnDoFinal;
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
    $this.v6j_1 = algorithm;
    $this.w6j_1 = engine;
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
    return hashCode(this.u6j_1);
  };
  function Engine() {
    this.u6j_1 = new Object();
  }
  protoOf(Mac).z6h = function () {
    return this.v6j_1;
  };
  protoOf(Mac).x6j = function () {
    var final = this.w6j_1.x6j();
    if (this.w6j_1.t6j_1) {
      this.w6j_1.j6i();
    }
    return final;
  };
  protoOf(Mac).y6j = function (input) {
    this.w6j_1.c6i(input, 0, input.length);
    return this.x6j();
  };
  protoOf(Mac).equals = function (other) {
    var tmp;
    if (other instanceof Mac) {
      tmp = other.w6j_1.equals(this.w6j_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Mac).hashCode = function () {
    return this.w6j_1.hashCode();
  };
  protoOf(Mac).toString = function () {
    // Inline function 'org.kotlincrypto.core.mac.internal.commonToString' call
    return 'Mac[' + this.z6h() + ']@' + this.hashCode();
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
