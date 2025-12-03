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
  var toString = kotlin_kotlin.$_$.tc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var isBlank = kotlin_kotlin.$_$.be;
  var protoOf = kotlin_kotlin.$_$.pc;
  var hashCode = kotlin_kotlin.$_$.kb;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
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
    $this.m6c_1 = resetOnDoFinal;
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
    $this.o6c_1 = algorithm;
    $this.p6c_1 = engine;
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
    return hashCode(this.n6c_1);
  };
  function Engine() {
    this.n6c_1 = new Object();
  }
  protoOf(Mac).t6c = function () {
    return this.o6c_1;
  };
  protoOf(Mac).q6c = function () {
    var final = this.p6c_1.q6c();
    if (this.p6c_1.m6c_1) {
      this.p6c_1.r6c();
    }
    return final;
  };
  protoOf(Mac).u6c = function (input) {
    this.p6c_1.s6c(input, 0, input.length);
    return this.q6c();
  };
  protoOf(Mac).equals = function (other) {
    var tmp;
    if (other instanceof Mac) {
      tmp = other.p6c_1.equals(this.p6c_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Mac).hashCode = function () {
    return this.p6c_1.hashCode();
  };
  protoOf(Mac).toString = function () {
    // Inline function 'org.kotlincrypto.core.mac.internal.commonToString' call
    return 'Mac[' + this.t6c() + ']@' + this.hashCode();
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
