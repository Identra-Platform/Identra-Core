(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'korge-root-krypto'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'korge-root-krypto'.");
    }
    globalThis['korge-root-krypto'] = factory(typeof globalThis['korge-root-krypto'] === 'undefined' ? {} : globalThis['korge-root-krypto'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.a8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g7;
  var contentEquals = kotlin_kotlin.$_$.e4;
  var contentHashCode = kotlin_kotlin.$_$.f4;
  var initMetadataForClass = kotlin_kotlin.$_$.f7;
  var Unit_instance = kotlin_kotlin.$_$.r3;
  var Long = kotlin_kotlin.$_$.fa;
  var toLong = kotlin_kotlin.$_$.c8;
  var VOID = kotlin_kotlin.$_$.c;
  var numberToLong = kotlin_kotlin.$_$.y7;
  var toByte = kotlin_kotlin.$_$.b8;
  var Random = kotlin_kotlin.$_$.e8;
  var initMetadataForObject = kotlin_kotlin.$_$.k7;
  var charSequenceGet = kotlin_kotlin.$_$.w6;
  var Char__toByte_impl_7s7yt0 = kotlin_kotlin.$_$.p1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.u;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m1;
  var charSequenceLength = kotlin_kotlin.$_$.x6;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.q1;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.o1;
  var arrayCopy = kotlin_kotlin.$_$.a4;
  var KProperty0 = kotlin_kotlin.$_$.l8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c7;
  var lazy = kotlin_kotlin.$_$.cb;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Hash, 'Hash');
  initMetadataForClass(HasherFactory, 'HasherFactory');
  initMetadataForClass(Hasher, 'Hasher');
  initMetadataForClass(SHA, 'SHA', VOID, Hasher);
  initMetadataForCompanion(Companion_0, HasherFactory);
  initMetadataForClass(SHA256, 'SHA256', SHA256, SHA);
  initMetadataForObject(SecureRandom, 'SecureRandom', VOID, Random);
  initMetadataForObject(ASCII, 'ASCII');
  initMetadataForObject(Base64, 'Base64');
  initMetadataForObject(Hex, 'Hex');
  //endregion
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function Hash(bytes) {
    this.a1h_1 = bytes;
  }
  protoOf(Hash).b1h = function () {
    return Base64_getInstance().g1h(this.a1h_1, true);
  };
  protoOf(Hash).h1h = function () {
    return Hex_instance.i1h(this.a1h_1);
  };
  protoOf(Hash).equals = function (other) {
    var tmp;
    if (other instanceof Hash) {
      tmp = contentEquals(this.a1h_1, other.a1h_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Hash).hashCode = function () {
    return contentHashCode(this.a1h_1);
  };
  protoOf(Hash).toString = function () {
    return this.h1h();
  };
  function HasherFactory(name, create) {
    this.j1h_1 = name;
    this.k1h_1 = create;
  }
  protoOf(HasherFactory).l1h = function (data) {
    // Inline function 'kotlin.also' call
    var this_0 = this.k1h_1();
    this_0.s1h(data, 0, data.length);
    return this_0.t1h();
  };
  protoOf(HasherFactory).toString = function () {
    return 'HasherFactory(' + this.j1h_1 + ')';
  };
  function Hasher(chunkSize, digestSize, name) {
    this.m1h_1 = chunkSize;
    this.n1h_1 = digestSize;
    this.o1h_1 = name;
    this.p1h_1 = new Int8Array(this.m1h_1);
    this.q1h_1 = 0;
    this.r1h_1 = new Long(0, 0);
  }
  protoOf(Hasher).s1h = function (data, offset, count) {
    var curr = offset;
    var left = count;
    while (left > 0) {
      var remainingInChunk = this.m1h_1 - this.q1h_1 | 0;
      // Inline function 'kotlin.math.min' call
      var b = left;
      var toRead = Math.min(remainingInChunk, b);
      arraycopy_0(data, curr, this.p1h_1, this.q1h_1, toRead);
      left = left - toRead | 0;
      curr = curr + toRead | 0;
      this.q1h_1 = this.q1h_1 + toRead | 0;
      if (this.q1h_1 >= this.m1h_1) {
        this.q1h_1 = this.q1h_1 - this.m1h_1 | 0;
        this.u1h(this.p1h_1);
      }
    }
    var tmp = this;
    // Inline function 'kotlin.Long.plus' call
    tmp.r1h_1 = this.r1h_1.k2(toLong(count));
    return this;
  };
  protoOf(Hasher).v1h = function (out) {
    var pad = this.w1h(this.r1h_1);
    var padPos = 0;
    while (padPos < pad.length) {
      var padSize = this.m1h_1 - this.q1h_1 | 0;
      arraycopy_0(pad, padPos, this.p1h_1, this.q1h_1, padSize);
      this.u1h(this.p1h_1);
      this.q1h_1 = 0;
      padPos = padPos + padSize | 0;
    }
    this.x1h(out);
    this.y1h();
  };
  protoOf(Hasher).t1h = function () {
    // Inline function 'kotlin.also' call
    var this_0 = new Int8Array(this.n1h_1);
    this.v1h(this_0);
    return new Hash(this_0);
  };
  protoOf(Hasher).toString = function () {
    return 'Hasher(' + this.o1h_1 + ')';
  };
  function hash(_this__u8e3s4, algo) {
    return algo.l1h(_this__u8e3s4);
  }
  function SHA(chunkSize, digestSize, name) {
    name = name === VOID ? 'SHA' + imul(digestSize, 8) : name;
    Hasher.call(this, chunkSize, digestSize, name);
  }
  protoOf(SHA).w1h = function (totalWritten) {
    // Inline function 'kotlin.Long.rem' call
    var tail = totalWritten.o2(toLong(64));
    var padding = numberToLong(64).l2(tail).x(new Long(9, 0)) >= 0 ? numberToLong(64).l2(tail) : numberToLong(128).l2(tail);
    // Inline function 'kotlin.also' call
    var this_0 = new Int8Array(padding.z());
    this_0[0] = -128;
    var pad = this_0;
    // Inline function 'kotlin.Long.times' call
    var bits = totalWritten.m2(toLong(8));
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        pad[(pad.length - 1 | 0) - i | 0] = bits.t2(imul(8, i)).u2(new Long(255, 0)).x2();
      }
       while (inductionVariable < 8);
    return pad;
  };
  function SHA256$Companion$_init_$lambda_il7oik() {
    return new SHA256();
  }
  function Companion_0() {
    Companion_instance_0 = this;
    HasherFactory.call(this, 'SHA256', SHA256$Companion$_init_$lambda_il7oik);
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.h1i_1 = new Int32Array([1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]);
    var tmp_0 = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp_0.i1i_1 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function SHA256() {
    Companion_getInstance_0();
    SHA.call(this, 64, 32);
    this.p1i_1 = new Int32Array(8);
    this.q1i_1 = new Int32Array(8);
    this.r1i_1 = new Int32Array(64);
    this.y1h();
  }
  protoOf(SHA256).y1h = function () {
    arraycopy(Companion_getInstance_0().h1i_1, 0, this.p1i_1, 0, 8);
  };
  protoOf(SHA256).u1h = function (chunk) {
    arraycopy(this.p1i_1, 0, this.q1i_1, 0, 8);
    var inductionVariable = 0;
    if (inductionVariable < 16)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.r1i_1[j] = readS32_be(chunk, imul(j, 4));
      }
       while (inductionVariable < 16);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 < 64)
      do {
        var j_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var s0 = rotateRight(this.r1i_1[j_0 - 15 | 0], 7) ^ rotateRight(this.r1i_1[j_0 - 15 | 0], 18) ^ (this.r1i_1[j_0 - 15 | 0] >>> 3 | 0);
        var s1 = rotateRight(this.r1i_1[j_0 - 2 | 0], 17) ^ rotateRight(this.r1i_1[j_0 - 2 | 0], 19) ^ (this.r1i_1[j_0 - 2 | 0] >>> 10 | 0);
        this.r1i_1[j_0] = ((this.r1i_1[j_0 - 16 | 0] + s0 | 0) + this.r1i_1[j_0 - 7 | 0] | 0) + s1 | 0;
      }
       while (inductionVariable_0 < 64);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < 64)
      do {
        var j_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var s1_0 = rotateRight(this.q1i_1[4], 6) ^ rotateRight(this.q1i_1[4], 11) ^ rotateRight(this.q1i_1[4], 25);
        var ch = this.q1i_1[4] & this.q1i_1[5] ^ ~this.q1i_1[4] & this.q1i_1[6];
        var t1 = (((this.q1i_1[7] + s1_0 | 0) + ch | 0) + Companion_getInstance_0().i1i_1[j_1] | 0) + this.r1i_1[j_1] | 0;
        var s0_0 = rotateRight(this.q1i_1[0], 2) ^ rotateRight(this.q1i_1[0], 13) ^ rotateRight(this.q1i_1[0], 22);
        var maj = this.q1i_1[0] & this.q1i_1[1] ^ this.q1i_1[0] & this.q1i_1[2] ^ this.q1i_1[1] & this.q1i_1[2];
        var t2 = s0_0 + maj | 0;
        this.q1i_1[7] = this.q1i_1[6];
        this.q1i_1[6] = this.q1i_1[5];
        this.q1i_1[5] = this.q1i_1[4];
        this.q1i_1[4] = this.q1i_1[3] + t1 | 0;
        this.q1i_1[3] = this.q1i_1[2];
        this.q1i_1[2] = this.q1i_1[1];
        this.q1i_1[1] = this.q1i_1[0];
        this.q1i_1[0] = t1 + t2 | 0;
      }
       while (inductionVariable_1 < 64);
    var inductionVariable_2 = 0;
    if (inductionVariable_2 < 8)
      do {
        var j_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var tmp4_array = this.p1i_1;
        tmp4_array[j_2] = tmp4_array[j_2] + this.q1i_1[j_2] | 0;
      }
       while (inductionVariable_2 < 8);
  };
  protoOf(SHA256).x1h = function (out) {
    var inductionVariable = 0;
    var last = out.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        out[n] = toByte(this.p1i_1[n / 4 | 0] >>> (24 - imul(8, n % 4 | 0) | 0) | 0);
      }
       while (inductionVariable <= last);
  };
  function sha256(_this__u8e3s4) {
    return hash(_this__u8e3s4, Companion_getInstance_0());
  }
  function getInt($this) {
    var temp = new Int8Array(4);
    fillRandomBytes(temp);
    var a = temp[0] & 255;
    var b = temp[1] & 255;
    var c = temp[2] & 255;
    var d = temp[3] & 255;
    return a << 24 | b << 16 | c << 8 | d << 0;
  }
  function SecureRandom() {
    SecureRandom_instance = this;
    Random.call(this);
  }
  protoOf(SecureRandom).eh = function (array, fromIndex, toIndex) {
    var random = new Int8Array(toIndex - fromIndex | 0);
    fillRandomBytes(random);
    arraycopy_0(random, 0, array, fromIndex, random.length);
    return array;
  };
  protoOf(SecureRandom).bh = function (bitCount) {
    return getInt(this) & ((1 << bitCount) - 1 | 0);
  };
  var SecureRandom_instance;
  function SecureRandom_getInstance() {
    if (SecureRandom_instance == null)
      new SecureRandom();
    return SecureRandom_instance;
  }
  function ASCII() {
  }
  protoOf(ASCII).s1i = function (str) {
    // Inline function 'kotlin.also' call
    var this_0 = new Int8Array(str.length);
    var inductionVariable = 0;
    var last = this_0.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0[n] = Char__toByte_impl_7s7yt0(charSequenceGet(str, n));
      }
       while (inductionVariable <= last);
    return this_0;
  };
  var ASCII_instance;
  function ASCII_getInstance() {
    return ASCII_instance;
  }
  function readU8($this, _this__u8e3s4, index) {
    return _this__u8e3s4[index] & 255;
  }
  function readU24BE($this, _this__u8e3s4, index) {
    return readU8($this, _this__u8e3s4, index + 0 | 0) << 16 | readU8($this, _this__u8e3s4, index + 1 | 0) << 8 | readU8($this, _this__u8e3s4, index + 2 | 0) << 0;
  }
  function Base64() {
    Base64_instance = this;
    this.c1h_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    this.d1h_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=';
    this.e1h_1 = toDecodeArray(this.c1h_1);
    this.f1h_1 = toDecodeArray(this.d1h_1);
  }
  protoOf(Base64).t1i = function (src, url, doPadding) {
    var tmp;
    if (url) {
      tmp = this.d1h_1;
    } else {
      tmp = this.c1h_1;
    }
    var encodeTable = tmp;
    var out = StringBuilder_init_$Create$((imul(src.length, 4) / 3 | 0) + 4 | 0);
    var ipos = 0;
    var extraBytes = src.length % 3 | 0;
    while (ipos < (src.length - 2 | 0)) {
      var num = readU24BE(this, src, ipos);
      ipos = ipos + 3 | 0;
      out.q7(charSequenceGet(encodeTable, (num >>> 18 | 0) & 63));
      out.q7(charSequenceGet(encodeTable, (num >>> 12 | 0) & 63));
      out.q7(charSequenceGet(encodeTable, (num >>> 6 | 0) & 63));
      out.q7(charSequenceGet(encodeTable, (num >>> 0 | 0) & 63));
    }
    if (extraBytes === 1) {
      var tmp0 = ipos;
      ipos = tmp0 + 1 | 0;
      var num_0 = readU8(this, src, tmp0);
      out.q7(charSequenceGet(encodeTable, num_0 >>> 2 | 0));
      out.q7(charSequenceGet(encodeTable, num_0 << 4 & 63));
      if (!url || (url && doPadding)) {
        out.q7(_Char___init__impl__6a9atx(61));
        out.q7(_Char___init__impl__6a9atx(61));
      }
    } else if (extraBytes === 2) {
      var tmp2 = ipos;
      ipos = tmp2 + 1 | 0;
      var tmp_0 = readU8(this, src, tmp2) << 8;
      var tmp1 = ipos;
      ipos = tmp1 + 1 | 0;
      var tmp_1 = tmp_0 | readU8(this, src, tmp1);
      out.q7(charSequenceGet(encodeTable, tmp_1 >>> 10 | 0));
      out.q7(charSequenceGet(encodeTable, (tmp_1 >>> 4 | 0) & 63));
      out.q7(charSequenceGet(encodeTable, tmp_1 << 2 & 63));
      if (!url || (url && doPadding)) {
        out.q7(_Char___init__impl__6a9atx(61));
      }
    }
    return out.toString();
  };
  protoOf(Base64).g1h = function (src, url, doPadding, $super) {
    url = url === VOID ? false : url;
    doPadding = doPadding === VOID ? false : doPadding;
    return $super === VOID ? this.t1i(src, url, doPadding) : $super.t1i.call(this, src, url, doPadding);
  };
  var Base64_instance;
  function Base64_getInstance() {
    if (Base64_instance == null)
      new Base64();
    return Base64_instance;
  }
  function toDecodeArray(_this__u8e3s4) {
    // Inline function 'kotlin.also' call
    var this_0 = new Int32Array(256);
    var inductionVariable = 0;
    if (inductionVariable <= 255)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0[n] = -1;
      }
       while (inductionVariable <= 255);
    var inductionVariable_0 = 0;
    var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
    if (inductionVariable_0 <= last)
      do {
        var n_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_1 = charSequenceGet(_this__u8e3s4, n_0);
        this_0[Char__toInt_impl_vasixd(this_1)] = n_0;
      }
       while (inductionVariable_0 <= last);
    return this_0;
  }
  function Hex() {
  }
  protoOf(Hex).u1i = function (v) {
    return v >= 10 ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(97), v - 10 | 0) : Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), v);
  };
  protoOf(Hex).i1h = function (src) {
    // Inline function 'korlibs.crypto.encoding.Hex.encodeBase' call
    // Inline function 'kotlin.text.buildString' call
    var capacity = imul(src.length, 2);
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$(capacity);
    // Inline function 'korlibs.crypto.encoding.Hex.encode' call
    var inductionVariable = 0;
    var last = src.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = src[n] & 255;
        var it = (v >>> 4 | 0) & 15;
        var tmp$ret$0 = Hex_instance.u1i(it);
        this_0.q7(tmp$ret$0);
        var it_0 = (v >>> 0 | 0) & 15;
        var tmp$ret$1 = Hex_instance.u1i(it_0);
        this_0.q7(tmp$ret$1);
      }
       while (inductionVariable <= last);
    return this_0.toString();
  };
  var Hex_instance;
  function Hex_getInstance() {
    return Hex_instance;
  }
  function arraycopy(src, srcPos, dst, dstPos, count) {
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = srcPos + count | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstPos, srcPos, endIndex);
    return dst;
  }
  function readS32_be(_this__u8e3s4, o) {
    return readU8_0(_this__u8e3s4, o + 3 | 0) << 0 | readU8_0(_this__u8e3s4, o + 2 | 0) << 8 | readU8_0(_this__u8e3s4, o + 1 | 0) << 16 | readU8_0(_this__u8e3s4, o + 0 | 0) << 24;
  }
  function rotateRight(_this__u8e3s4, amount) {
    return _this__u8e3s4 >>> amount | 0 | _this__u8e3s4 << (32 - amount | 0);
  }
  function arraycopy_0(src, srcPos, dst, dstPos, count) {
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = srcPos + count | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = src;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dst, dstPos, srcPos, endIndex);
    return dst;
  }
  function readU8_0(_this__u8e3s4, o) {
    return _this__u8e3s4[o] & 255;
  }
  function get_isNodeJs() {
    _init_properties_SecureRandomJs_kt__5cgizh();
    var tmp0 = isNodeJs$delegate;
    // Inline function 'kotlin.getValue' call
    isNodeJs$factory();
    return tmp0.r1();
  }
  var isNodeJs$delegate;
  function get__global() {
    _init_properties_SecureRandomJs_kt__5cgizh();
    return _global;
  }
  var _global;
  function fillRandomBytes(array) {
    _init_properties_SecureRandomJs_kt__5cgizh();
    if (get_isNodeJs()) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      require_node('crypto').randomFillSync(new Uint8Array(array.buffer));
    } else {
      get__global().crypto.getRandomValues(array);
    }
  }
  function require_node(name) {
    _init_properties_SecureRandomJs_kt__5cgizh();
    return eval('(' + get_REQ() + "uire('" + name + "'))");
  }
  function get_REQ() {
    _init_properties_SecureRandomJs_kt__5cgizh();
    return 'req';
  }
  function isNodeJs$delegate$lambda() {
    _init_properties_SecureRandomJs_kt__5cgizh();
    // Inline function 'kotlin.js.unsafeCast' call
    return typeof process === 'object' && typeof require === 'function';
  }
  function isNodeJs$factory() {
    return getPropertyCallableRef('isNodeJs', 0, KProperty0, function () {
      return get_isNodeJs();
    }, null);
  }
  var properties_initialized_SecureRandomJs_kt_ve9k7v;
  function _init_properties_SecureRandomJs_kt__5cgizh() {
    if (!properties_initialized_SecureRandomJs_kt_ve9k7v) {
      properties_initialized_SecureRandomJs_kt_ve9k7v = true;
      isNodeJs$delegate = lazy(isNodeJs$delegate$lambda);
      _global = typeof global !== 'undefined' ? global : self;
    }
  }
  //region block: init
  Companion_instance = new Companion();
  ASCII_instance = new ASCII();
  Hex_instance = new Hex();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ASCII_instance;
  _.$_$.b = Companion_getInstance_0;
  _.$_$.c = SecureRandom_getInstance;
  _.$_$.d = sha256;
  //endregion
  return _;
}));

//# sourceMappingURL=korge-root-krypto.js.map
