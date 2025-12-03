(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'bitops-library-endian'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'bitops-library-endian'.");
    }
    globalThis['bitops-library-endian'] = factory(typeof globalThis['bitops-library-endian'] === 'undefined' ? {} : globalThis['bitops-library-endian'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var toByte = kotlin_kotlin.$_$.de;
  var protoOf = kotlin_kotlin.$_$.ce;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zc;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nk;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Endian, 'Endian');
  initMetadataForObject(Big, 'Big', VOID, Endian);
  initMetadataForObject(Little, 'Little', VOID, Endian);
  initMetadataForCompanion(Companion);
  //endregion
  function Big() {
    Big_instance = this;
    Endian.call(this);
  }
  protoOf(Big).l6j = function (source, dest, destOffset) {
    // Inline function 'org.kotlincrypto.bitops.endian.internal.packBEInt' call
    dest[destOffset] = toByte(source >>> 24 | 0);
    dest[destOffset + 1 | 0] = toByte(source >>> 16 | 0);
    dest[destOffset + 2 | 0] = toByte(source >>> 8 | 0);
    dest[destOffset + 3 | 0] = toByte(source);
    return dest;
  };
  protoOf(Big).m6j = function (source, dest, destOffset, sourceIndexStart, sourceIndexEnd) {
    // Inline function 'org.kotlincrypto.bitops.endian.internal.packArray' call
    var destPos = destOffset;
    var sourcePos = sourceIndexStart;
    while (sourcePos < sourceIndexEnd) {
      var tmp0 = sourcePos;
      sourcePos = tmp0 + 1 | 0;
      var destPos_0 = destPos;
      // Inline function 'org.kotlincrypto.bitops.endian.internal.packBEInt' call
      var source_0 = source[tmp0];
      dest[destPos_0] = toByte(source_0 >>> 24 | 0);
      dest[destPos_0 + 1 | 0] = toByte(source_0 >>> 16 | 0);
      dest[destPos_0 + 2 | 0] = toByte(source_0 >>> 8 | 0);
      dest[destPos_0 + 3 | 0] = toByte(source_0);
      destPos = destPos + 4 | 0;
    }
    return dest;
  };
  protoOf(Big).n6j = function (source, dest, destOffset, sourceIndexStart, sourceIndexEnd) {
    // Inline function 'org.kotlincrypto.bitops.endian.internal.packArray' call
    var destPos = destOffset;
    var sourcePos = sourceIndexStart;
    while (sourcePos < sourceIndexEnd) {
      var tmp7 = sourcePos;
      var tmp0 = destPos;
      destPos = tmp0 + 1 | 0;
      // Inline function 'org.kotlincrypto.bitops.endian.internal.unpackBEInt' call
      var tmp0_0 = _B0___init__impl__6otxhp(source[tmp7]);
      var tmp1 = source[tmp7 + 1 | 0];
      var tmp2 = source[tmp7 + 2 | 0];
      // Inline function 'org.kotlincrypto.bitops.endian.internal.toBEInt' call
      var b3 = source[tmp7 + 3 | 0];
      dest[tmp0] = _B0___get_b0__impl__g161pk(tmp0_0) << 24 | (tmp1 & 255) << 16 | (tmp2 & 255) << 8 | b3 & 255;
      sourcePos = sourcePos + 4 | 0;
    }
    return dest;
  };
  protoOf(Big).hashCode = function () {
    return -615978727;
  };
  protoOf(Big).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Big))
      return false;
    other instanceof Big || THROW_CCE();
    return true;
  };
  var Big_instance;
  function Big_getInstance() {
    if (Big_instance == null)
      new Big();
    return Big_instance;
  }
  function Little() {
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Endian() {
  }
  protoOf(Endian).toString = function () {
    var tmp;
    if (this instanceof Big) {
      tmp = 'Endian.Big';
    } else {
      if (this instanceof Little) {
        tmp = 'Endian.Little';
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  };
  function _B0___init__impl__6otxhp(b0) {
    return b0;
  }
  function _B0___get_b0__impl__g161pk($this) {
    return $this;
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Big_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=bitops-library-endian.js.map
