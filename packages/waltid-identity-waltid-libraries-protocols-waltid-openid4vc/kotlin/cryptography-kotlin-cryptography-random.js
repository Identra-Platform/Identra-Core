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
  var protoOf = kotlin_kotlin.$_$.ce;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  var Random = kotlin_kotlin.$_$.ke;
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
  protoOf(AbstractRandom).ml = function (bitCount) {
    var numBytes = (bitCount + 7 | 0) / 8 | 0;
    var b = this.sl(numBytes);
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
  protoOf(AbstractRandom).pl = function (array) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(array.length === 0)) {
      this.vc3(array);
    }
    return array;
  };
  function Default() {
    Default_instance = this;
    CryptographyRandom.call(this);
    this.wc3_1 = defaultCryptographyRandom();
  }
  protoOf(Default).ml = function (bitCount) {
    return this.wc3_1.ml(bitCount);
  };
  protoOf(Default).hi = function () {
    return this.wc3_1.hi();
  };
  protoOf(Default).ii = function () {
    return this.wc3_1.ii();
  };
  protoOf(Default).nl = function (from, until) {
    return this.wc3_1.nl(from, until);
  };
  protoOf(Default).ol = function () {
    return this.wc3_1.ol();
  };
  protoOf(Default).pl = function (array) {
    return this.wc3_1.pl(array);
  };
  protoOf(Default).sl = function (size) {
    return this.wc3_1.sl(size);
  };
  protoOf(Default).ql = function (array, fromIndex, toIndex) {
    return this.wc3_1.ql(array, fromIndex, toIndex);
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
      $this.yc3_1.getRandomValues(jsArray);
    } else {
      var filled = 0;
      do {
        // Inline function 'kotlin.comparisons.minOf' call
        var b = size - filled | 0;
        var chunkSize = Math.min(65536, b);
        $this.yc3_1.getRandomValues(jsArray.subarray(filled, filled + chunkSize | 0));
        filled = filled + chunkSize | 0;
      }
       while (filled < size);
    }
  }
  function WebCryptoCryptographyRandom() {
    WebCryptoCryptographyRandom_instance = this;
    AbstractRandom.call(this);
    this.xc3_1 = 65536;
    this.yc3_1 = getCrypto();
  }
  protoOf(WebCryptoCryptographyRandom).vc3 = function (array) {
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
