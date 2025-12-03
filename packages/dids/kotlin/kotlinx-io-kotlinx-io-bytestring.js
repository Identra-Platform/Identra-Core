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
  var copyOfRange = kotlin_kotlin.$_$.z6;
  var protoOf = kotlin_kotlin.$_$.wc;
  var objectCreate = kotlin_kotlin.$_$.vc;
  var toCharArray = kotlin_kotlin.$_$.sf;
  var initMetadataForCompanion = kotlin_kotlin.$_$.tb;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.ih;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var contentEquals = kotlin_kotlin.$_$.v6;
  var contentHashCode = kotlin_kotlin.$_$.w6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.n3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.o3;
  var compareTo = kotlin_kotlin.$_$.kb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.l1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var Comparable = kotlin_kotlin.$_$.tg;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
  var decodeToString = kotlin_kotlin.$_$.zd;
  var initMetadataForObject = kotlin_kotlin.$_$.yb;
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
    this.n1g_1 = new ByteString(new Int8Array(0), null);
    this.o1g_1 = toCharArray('0123456789abcdef');
  }
  protoOf(Companion).p1g = function (byteArray) {
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
    this.q1g_1 = data;
    this.r1g_1 = 0;
  }
  protoOf(ByteString).s = function () {
    return this.q1g_1.length;
  };
  protoOf(ByteString).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ByteString))
      THROW_CCE();
    if (!(other.q1g_1.length === this.q1g_1.length))
      return false;
    if (!(other.r1g_1 === 0) && !(this.r1g_1 === 0) && !(other.r1g_1 === this.r1g_1))
      return false;
    return contentEquals(this.q1g_1, other.q1g_1);
  };
  protoOf(ByteString).hashCode = function () {
    var hc = this.r1g_1;
    if (hc === 0) {
      hc = contentHashCode(this.q1g_1);
      this.r1g_1 = hc;
    }
    return hc;
  };
  protoOf(ByteString).u = function (index) {
    if (index < 0 || index >= this.s())
      throw IndexOutOfBoundsException_init_$Create$('index (' + index + ') is out of byte string bounds: [0..' + this.s() + ')');
    return this.q1g_1[index];
  };
  protoOf(ByteString).s1g = function (startIndex, endIndex) {
    var tmp;
    if (startIndex === endIndex) {
      tmp = Companion_getInstance().n1g_1;
    } else {
      tmp = ByteString_init_$Create$(this.q1g_1, startIndex, endIndex);
    }
    return tmp;
  };
  protoOf(ByteString).t1g = function (startIndex, endIndex, $super) {
    endIndex = endIndex === VOID ? this.s() : endIndex;
    return $super === VOID ? this.s1g(startIndex, endIndex) : $super.s1g.call(this, startIndex, endIndex);
  };
  protoOf(ByteString).u1g = function (other) {
    if (other === this)
      return 0;
    var localData = this.q1g_1;
    var otherData = other.q1g_1;
    var inductionVariable = 0;
    var tmp0 = this.s();
    // Inline function 'kotlin.math.min' call
    var b = other.s();
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
    return compareTo(this.s(), other.s());
  };
  protoOf(ByteString).d = function (other) {
    return this.u1g(other instanceof ByteString ? other : THROW_CCE());
  };
  protoOf(ByteString).toString = function () {
    if (isEmpty(this)) {
      return 'ByteString(size=0)';
    }
    var sizeStr = this.s().toString();
    var len = (22 + sizeStr.length | 0) + imul(this.s(), 2) | 0;
    // Inline function 'kotlin.with' call
    var $this$with = StringBuilder_init_$Create$(len);
    $this$with.x8('ByteString(size=');
    $this$with.x8(sizeStr);
    $this$with.x8(' hex=');
    var localData = this.q1g_1;
    var inductionVariable = 0;
    var last = this.s();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = localData[i];
        $this$with.y8(Companion_getInstance().o1g_1[(b >>> 4 | 0) & 15]);
        $this$with.y8(Companion_getInstance().o1g_1[b & 15]);
      }
       while (inductionVariable < last);
    return $this$with.y8(_Char___init__impl__6a9atx(41)).toString();
  };
  protoOf(ByteString).v1g = function () {
    return this.q1g_1;
  };
  function ByteString_0(bytes) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (bytes.length === 0) {
      tmp = Companion_getInstance().n1g_1;
    } else {
      tmp = Companion_getInstance().p1g(bytes);
    }
    return tmp;
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.s() === 0;
  }
  function decodeToString_0(_this__u8e3s4) {
    return decodeToString(_this__u8e3s4.v1g());
  }
  function UnsafeByteStringOperations() {
  }
  protoOf(UnsafeByteStringOperations).w1g = function (array) {
    return Companion_getInstance().p1g(array);
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
