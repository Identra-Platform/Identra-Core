(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-io-kotlinx-io-bytestring'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-io-kotlinx-io-bytestring'.");
    }
    globalThis['kotlinx-io-kotlinx-io-bytestring'] = factory(typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined' ? {} : globalThis['kotlinx-io-kotlinx-io-bytestring'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.j;
  var copyOfRange = kotlin_kotlin.$_$.v7;
  var protoOf = kotlin_kotlin.$_$.ce;
  var objectCreate = kotlin_kotlin.$_$.be;
  var toCharArray = kotlin_kotlin.$_$.sh;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zc;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var contentEquals = kotlin_kotlin.$_$.r7;
  var contentHashCode = kotlin_kotlin.$_$.s7;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c4;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d4;
  var compareTo = kotlin_kotlin.$_$.qc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var Comparable = kotlin_kotlin.$_$.wi;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var decodeToString = kotlin_kotlin.$_$.tf;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(ByteString, 'ByteString', VOID, VOID, [Comparable]);
  initMetadataForObject(UnsafeByteStringOperations, 'UnsafeByteStringOperations');
  //endregion
  function ByteString_init_$Init$(data, startIndex, endIndex, $this) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? data.length : endIndex;
    ByteString.call($this, copyOfRange(data, startIndex, endIndex), null);
    return $this;
  }
  function ByteString_init_$Create$(data, startIndex, endIndex) {
    return ByteString_init_$Init$(data, startIndex, endIndex, objectCreate(protoOf(ByteString)));
  }
  function Companion() {
    Companion_instance = this;
    this.d1j_1 = new ByteString(new Int8Array(0), null);
    this.e1j_1 = toCharArray('0123456789abcdef');
  }
  protoOf(Companion).f1j = function (byteArray) {
    return new ByteString(byteArray, null);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function ByteString(data, dummy) {
    Companion_getInstance();
    this.g1j_1 = data;
    this.h1j_1 = 0;
  }
  protoOf(ByteString).t = function () {
    return this.g1j_1.length;
  };
  protoOf(ByteString).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.g1j_1.length === this.g1j_1.length))
      return false;
    if (!(other.h1j_1 === 0) && !(this.h1j_1 === 0) && !(other.h1j_1 === this.h1j_1))
      return false;
    return contentEquals(this.g1j_1, other.g1j_1);
  };
  protoOf(ByteString).hashCode = function () {
    var hc = this.h1j_1;
    if (hc === 0) {
      hc = contentHashCode(this.g1j_1);
      this.h1j_1 = hc;
    }
    return hc;
  };
  protoOf(ByteString).v = function (index) {
    if (index < 0 || index >= this.t())
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of byte string bounds: [0..' + this.t() + ')');
    return this.g1j_1[index];
  };
  protoOf(ByteString).i1j = function (startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().d1j_1;
    } else {
      tmp = ByteString_init_$Create$(this.g1j_1, startIndex, endIndex);
    }
    return tmp;
  };
  protoOf(ByteString).j1j = function (startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.t() : endIndex;
    return $super === VOID ? this.i1j(startIndex, endIndex) : $super.i1j.call(this, startIndex, endIndex);
  };
  protoOf(ByteString).k1j = function (other) {
    if (other === this)
      return 0;
    var localData = this.g1j_1;
    var otherData = other.g1j_1;
    var inductionVariable = 0;
    var tmp0 = this.t();
    // Inline function 'kotlin.math.min' call
    var b = other.t();
    var last = Math.min(tmp0, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.toUByte' call
        var this_0 = localData[i];
        var tmp4 = _UByte___init__impl__g9hnc4(this_0);
        // Inline function 'kotlin.toUByte' call
        var this_1 = otherData[i];
        // Inline function 'kotlin.UByte.compareTo' call
        var other_0 = _UByte___init__impl__g9hnc4(this_1);
        // Inline function 'kotlin.UByte.toInt' call
        var tmp = _UByte___get_data__impl__jof9qr(tmp4) & 255;
        // Inline function 'kotlin.UByte.toInt' call
        var tmp$ret$4 = _UByte___get_data__impl__jof9qr(other_0) & 255;
        var cmp = compareTo(tmp, tmp$ret$4);
        if (!(cmp === 0))
          return cmp;
      }
       while (inductionVariable < last);
    return compareTo(this.t(), other.t());
  };
  protoOf(ByteString).d = function (other) {
    return this.k1j(other instanceof ByteString ? other : THROW_CCE());
  };
  protoOf(ByteString).toString = function () {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.t().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.t(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder_init_$Create$(len);
    $this$with.z8('ByteString(size=');
    $this$with.z8(sizeStr);
    $this$with.z8(' hex=');
    var localData = this.g1j_1;
    var inductionVariable = 0;
    var last = this.t();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.p(Companion_getInstance().e1j_1[(b >>> 4 | 0) & 15]);
        $this$with.p(Companion_getInstance().e1j_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.p(_Char___init__impl__6a9atx(41)).toString();
  };
  protoOf(ByteString).l1j = function () {
    return this.g1j_1;
  };
  function ByteString_0(bytes) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (bytes.length === 0) {
      tmp = Companion_getInstance().d1j_1;
    } else {
      tmp = Companion_getInstance().f1j(bytes);
    }
    return tmp;
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.t() === 0;
  }
  function decodeToString_0(_this__u8e3s4) {
    return decodeToString(_this__u8e3s4.l1j());
  }
  function UnsafeByteStringOperations() {
  }
  protoOf(UnsafeByteStringOperations).m1j = function (array) {
    return Companion_getInstance().f1j(array);
  };
  var UnsafeByteStringOperations_instance;
  function UnsafeByteStringOperations_getInstance() {
    return UnsafeByteStringOperations_instance;
  }
  //region block: init
  UnsafeByteStringOperations_instance = new UnsafeByteStringOperations();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ByteString_init_$Create$;
  _.$_$.b = UnsafeByteStringOperations_instance;
  _.$_$.c = ByteString_0;
  _.$_$.d = decodeToString_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-io-kotlinx-io-bytestring.js.map
