(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'cryptography-kotlin-cryptography-random'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'cryptography-kotlin-cryptography-random'.");
    }
    globalThis['cryptography-kotlin-cryptography-random'] = factory(typeof globalThis['cryptography-kotlin-cryptography-random'] === 'undefined' ? {} : globalThis['cryptography-kotlin-cryptography-random'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.be;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var Random = kotlin_kotlin.$_$.je;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(CryptographyRandom, 'CryptographyRandom', VOID, Random);
  initMetadataForClass(AbstractRandom, 'AbstractRandom', VOID, CryptographyRandom);
  initMetadataForObject(Default, 'Default', VOID, CryptographyRandom);
  initMetadataForObject(WebCryptoCryptographyRandom, 'WebCryptoCryptographyRandom', VOID, AbstractRandom);
  //endregion
  function AbstractRandom() {
    CryptographyRandom.call(this);
  }
  protoOf(AbstractRandom).ll = function (bitCount) {
    var numBytes = (bitCount + 7 | 0) / 8 | 0;
    var b = this.ql(numBytes);
    var next = 0;
    var inductionVariable = 0;
    if (inductionVariable < numBytes)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        next = (next << 8) + (b[i] & 255) | 0;
      }
       while (inductionVariable < numBytes);
    return next >>> (imul(numBytes, 8) - bitCount | 0) | 0;
  };
  protoOf(AbstractRandom).nl = function (array) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(array.length === 0)) {
      this.pc3(array);
    }
    return array;
  };
  function Default() {
    Default_instance = this;
    CryptographyRandom.call(this);
    this.qc3_1 = defaultCryptographyRandom();
  }
  protoOf(Default).ll = function (bitCount) {
    return this.qc3_1.ll(bitCount);
  };
  protoOf(Default).gi = function () {
    return this.qc3_1.gi();
  };
  protoOf(Default).ml = function () {
    return this.qc3_1.ml();
  };
  protoOf(Default).nl = function (array) {
    return this.qc3_1.nl(array);
  };
  protoOf(Default).ql = function (size) {
    return this.qc3_1.ql(size);
  };
  protoOf(Default).ol = function (array, fromIndex, toIndex) {
    return this.qc3_1.ol(array, fromIndex, toIndex);
  };
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function CryptographyRandom() {
    Default_getInstance();
    Random.call(this);
  }
  function defaultCryptographyRandom() {
    return WebCryptoCryptographyRandom_getInstance();
  }
  function fillBytes($this, jsArray) {
    var size = jsArray.length;
    if (size <= 65536) {
      $this.sc3_1.getRandomValues(jsArray);
    } else {
      var filled = 0;
      do {
        // Inline function 'kotlin.comparisons.minOf' call
        var b = size - filled | 0;
        var chunkSize = Math.min(65536, b);
        $this.sc3_1.getRandomValues(jsArray.subarray(filled, filled + chunkSize | 0));
        filled = filled + chunkSize | 0;
      }
       while (filled < size);
    }
  }
  function WebCryptoCryptographyRandom() {
    WebCryptoCryptographyRandom_instance = this;
    AbstractRandom.call(this);
    this.rc3_1 = 65536;
    this.sc3_1 = getCrypto();
  }
  protoOf(WebCryptoCryptographyRandom).pc3 = function (array) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    fillBytes(this, array);
  };
  var WebCryptoCryptographyRandom_instance;
  function WebCryptoCryptographyRandom_getInstance() {
    if (WebCryptoCryptographyRandom_instance == null)
      new WebCryptoCryptographyRandom();
    return WebCryptoCryptographyRandom_instance;
  }
  function getCrypto() {
    // Inline function 'kotlin.js.unsafeCast' call
    return function () {
      var isNodeJs = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
      if (isNodeJs) {
        return eval('require')('node:crypto').webcrypto;
      } else {
        return window ? window.crypto ? window.crypto : window.msCrypto : self.crypto;
      }
    }();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=cryptography-kotlin-cryptography-random.js.map
