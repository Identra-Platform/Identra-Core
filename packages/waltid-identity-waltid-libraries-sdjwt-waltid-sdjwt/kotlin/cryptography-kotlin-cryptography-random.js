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
  var protoOf = kotlin_kotlin.$_$.a8;
  var Unit_instance = kotlin_kotlin.$_$.r3;
  var initMetadataForClass = kotlin_kotlin.$_$.f7;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForObject = kotlin_kotlin.$_$.k7;
  var Random = kotlin_kotlin.$_$.e8;
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
  protoOf(AbstractRandom).bh = function (bitCount) {
    var numBytes = (bitCount + 7 | 0) / 8 | 0;
    var b = this.gh(numBytes);
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
  protoOf(AbstractRandom).dh = function (array) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(array.length === 0)) {
      this.am(array);
    }
    return array;
  };
  function Default() {
    Default_instance = this;
    CryptographyRandom.call(this);
    this.bm_1 = defaultCryptographyRandom();
  }
  protoOf(Default).bh = function (bitCount) {
    return this.bm_1.bh(bitCount);
  };
  protoOf(Default).pe = function () {
    return this.bm_1.pe();
  };
  protoOf(Default).ch = function () {
    return this.bm_1.ch();
  };
  protoOf(Default).dh = function (array) {
    return this.bm_1.dh(array);
  };
  protoOf(Default).gh = function (size) {
    return this.bm_1.gh(size);
  };
  protoOf(Default).eh = function (array, fromIndex, toIndex) {
    return this.bm_1.eh(array, fromIndex, toIndex);
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
      $this.dm_1.getRandomValues(jsArray);
    } else {
      var filled = 0;
      do {
        // Inline function 'kotlin.comparisons.minOf' call
        var b = size - filled | 0;
        var chunkSize = Math.min(65536, b);
        $this.dm_1.getRandomValues(jsArray.subarray(filled, filled + chunkSize | 0));
        filled = filled + chunkSize | 0;
      }
       while (filled < size);
    }
  }
  function WebCryptoCryptographyRandom() {
    WebCryptoCryptographyRandom_instance = this;
    AbstractRandom.call(this);
    this.cm_1 = 65536;
    this.dm_1 = getCrypto();
  }
  protoOf(WebCryptoCryptographyRandom).am = function (array) {
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
