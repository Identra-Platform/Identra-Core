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
  var protoOf = kotlin_kotlin.$_$.gd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dc;
  var contentEquals = kotlin_kotlin.$_$.c7;
  var contentHashCode = kotlin_kotlin.$_$.d7;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  var Unit_instance = kotlin_kotlin.$_$.a6;
  var Long = kotlin_kotlin.$_$.th;
  var toLong = kotlin_kotlin.$_$.id;
  var VOID = kotlin_kotlin.$_$.j;
  var numberToLong = kotlin_kotlin.$_$.ed;
  var toByte = kotlin_kotlin.$_$.hd;
  var Random = kotlin_kotlin.$_$.nd;
  var initMetadataForObject = kotlin_kotlin.$_$.ic;
  var charSequenceGet = kotlin_kotlin.$_$.rb;
  var Char__toByte_impl_7s7yt0 = kotlin_kotlin.$_$.i3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var charSequenceLength = kotlin_kotlin.$_$.sb;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j3;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.g3;
  var arrayCopy = kotlin_kotlin.$_$.t6;
  var KProperty0 = kotlin_kotlin.$_$.yd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zb;
  var lazy = kotlin_kotlin.$_$.zi;
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
    this.nc1_1 = bytes;
  }
  protoOf(Hash).oc1 = function () {
    return Base64_getInstance().tc1(this.nc1_1, true);
  };
  protoOf(Hash).uc1 = function () {
    return Hex_instance.vc1(this.nc1_1);
  };
  protoOf(Hash).equals = function (other) {
    var tmp;
    if (other instanceof Hash) {
      tmp = contentEquals(this.nc1_1, other.nc1_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Hash).hashCode = function () {
    return contentHashCode(this.nc1_1);
  };
  protoOf(Hash).toString = function () {
    return this.uc1();
  };
  function HasherFactory(name, create) {
    this.wc1_1 = name;
    this.xc1_1 = create;
  }
  protoOf(HasherFactory).a6g = function (data) {
    // Inline function 'kotlin.also' call
    var this_0 = this.xc1_1();
    this_0.ec2(data, 0, data.length);
    return this_0.x6f();
  };
  protoOf(HasherFactory).toString = function () {
    return 'HasherFactory(' + this.wc1_1 + ')';
  };
  function Hasher(chunkSize, digestSize, name) {
    this.yc1_1 = chunkSize;
    this.zc1_1 = digestSize;
    this.ac2_1 = name;
    this.bc2_1 = new Int8Array(this.yc1_1);
    this.cc2_1 = 0;
    this.dc2_1 = new Long(0, 0);
  }
  protoOf(Hasher).ec2 = function (data, offset, count) {
    var curr = offset;
    var left = count;
    while (left > 0) {
      var remainingInChunk = this.yc1_1 - this.cc2_1 | 0;
      // Inline function 'kotlin.math.min' call
      var b = left;
      var toRead = Math.min(remainingInChunk, b);
      arraycopy_0(data, curr, this.bc2_1, this.cc2_1, toRead);
      left = left - toRead | 0;
      curr = curr + toRead | 0;
      this.cc2_1 = this.cc2_1 + toRead | 0;
      if (this.cc2_1 >= this.yc1_1) {
        this.cc2_1 = this.cc2_1 - this.yc1_1 | 0;
        this.fc2(this.bc2_1);
      }
    }
    var tmp = this;
    // Inline function 'kotlin.Long.plus' call
    tmp.dc2_1 = this.dc2_1.z2(toLong(count));
    return this;
  };
  protoOf(Hasher).gc2 = function (out) {
    var pad = this.hc2(this.dc2_1);
    var padPos = 0;
    while (padPos < pad.length) {
      var padSize = this.yc1_1 - this.cc2_1 | 0;
      arraycopy_0(pad, padPos, this.bc2_1, this.cc2_1, padSize);
      this.fc2(this.bc2_1);
      this.cc2_1 = 0;
      padPos = padPos + padSize | 0;
    }
    this.ic2(out);
    this.jc2();
  };
  protoOf(Hasher).x6f = function () {
    // Inline function 'kotlin.also' call
    var this_0 = new Int8Array(this.zc1_1);
    this.gc2(this_0);
    return new Hash(this_0);
  };
  protoOf(Hasher).toString = function () {
    return 'Hasher(' + this.ac2_1 + ')';
  };
  function hash(_this__u8e3s4, algo) {
    return algo.a6g(_this__u8e3s4);
  }
  function SHA(chunkSize, digestSize, name) {
    name = name === VOID ? 'SHA' + imul(digestSize, 8) : name;
    Hasher.call(this, chunkSize, digestSize, name);
  }
  protoOf(SHA).hc2 = function (totalWritten) {
    // Inline function 'kotlin.Long.rem' call
    var tail = totalWritten.d3(toLong(64));
    var padding = numberToLong(64).a3(tail).e1(new Long(9, 0)) >= 0 ? numberToLong(64).a3(tail) : numberToLong(128).a3(tail);
    // Inline function 'kotlin.also' call
    var this_0 = new Int8Array(padding.j1());
    this_0[0] = -128;
    var pad = this_0;
    // Inline function 'kotlin.Long.times' call
    var bits = totalWritten.b3(toLong(8));
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        pad[(pad.length - 1 | 0) - i | 0] = bits.l3(imul(8, i)).m3(new Long(255, 0)).p3();
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
    tmp.sc2_1 = new Int32Array([1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]);
    var tmp_0 = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp_0.tc2_1 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
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
    this.ac3_1 = new Int32Array(8);
    this.bc3_1 = new Int32Array(8);
    this.cc3_1 = new Int32Array(64);
    this.jc2();
  }
  protoOf(SHA256).jc2 = function () {
    arraycopy(Companion_getInstance_0().sc2_1, 0, this.ac3_1, 0, 8);
  };
  protoOf(SHA256).fc2 = function (chunk) {
    arraycopy(this.ac3_1, 0, this.bc3_1, 0, 8);
    var inductionVariable = 0;
    if (inductionVariable < 16)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.cc3_1[j] = readS32_be(chunk, imul(j, 4));
      }
       while (inductionVariable < 16);
    var inductionVariable_0 = 16;
    if (inductionVariable_0 < 64)
      do {
        var j_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var s0 = rotateRight(this.cc3_1[j_0 - 15 | 0], 7) ^ rotateRight(this.cc3_1[j_0 - 15 | 0], 18) ^ (this.cc3_1[j_0 - 15 | 0] >>> 3 | 0);
        var s1 = rotateRight(this.cc3_1[j_0 - 2 | 0], 17) ^ rotateRight(this.cc3_1[j_0 - 2 | 0], 19) ^ (this.cc3_1[j_0 - 2 | 0] >>> 10 | 0);
        this.cc3_1[j_0] = ((this.cc3_1[j_0 - 16 | 0] + s0 | 0) + this.cc3_1[j_0 - 7 | 0] | 0) + s1 | 0;
      }
       while (inductionVariable_0 < 64);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < 64)
      do {
        var j_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var s1_0 = rotateRight(this.bc3_1[4], 6) ^ rotateRight(this.bc3_1[4], 11) ^ rotateRight(this.bc3_1[4], 25);
        var ch = this.bc3_1[4] & this.bc3_1[5] ^ ~this.bc3_1[4] & this.bc3_1[6];
        var t1 = (((this.bc3_1[7] + s1_0 | 0) + ch | 0) + Companion_getInstance_0().tc2_1[j_1] | 0) + this.cc3_1[j_1] | 0;
        var s0_0 = rotateRight(this.bc3_1[0], 2) ^ rotateRight(this.bc3_1[0], 13) ^ rotateRight(this.bc3_1[0], 22);
        var maj = this.bc3_1[0] & this.bc3_1[1] ^ this.bc3_1[0] & this.bc3_1[2] ^ this.bc3_1[1] & this.bc3_1[2];
        var t2 = s0_0 + maj | 0;
        this.bc3_1[7] = this.bc3_1[6];
        this.bc3_1[6] = this.bc3_1[5];
        this.bc3_1[5] = this.bc3_1[4];
        this.bc3_1[4] = this.bc3_1[3] + t1 | 0;
        this.bc3_1[3] = this.bc3_1[2];
        this.bc3_1[2] = this.bc3_1[1];
        this.bc3_1[1] = this.bc3_1[0];
        this.bc3_1[0] = t1 + t2 | 0;
      }
       while (inductionVariable_1 < 64);
    var inductionVariable_2 = 0;
    if (inductionVariable_2 < 8)
      do {
        var j_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        var tmp4_array = this.ac3_1;
        tmp4_array[j_2] = tmp4_array[j_2] + this.bc3_1[j_2] | 0;
      }
       while (inductionVariable_2 < 8);
  };
  protoOf(SHA256).ic2 = function (out) {
    var inductionVariable = 0;
    var last = out.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        out[n] = toByte(this.ac3_1[n / 4 | 0] >>> (24 - imul(8, n % 4 | 0) | 0) | 0);
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
  protoOf(SecureRandom).gl = function (array, fromIndex, toIndex) {
    var random = new Int8Array(toIndex - fromIndex | 0);
    fillRandomBytes(random);
    arraycopy_0(random, 0, array, fromIndex, random.length);
    return array;
  };
  protoOf(SecureRandom).dl = function (bitCount) {
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
  protoOf(ASCII).dc3 = function (str) {
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
    this.pc1_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    this.qc1_1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=';
    this.rc1_1 = toDecodeArray(this.pc1_1);
    this.sc1_1 = toDecodeArray(this.qc1_1);
  }
  protoOf(Base64).ec3 = function (src, url, doPadding) {
    var tmp;
    if (url) {
      tmp = this.qc1_1;
    } else {
      tmp = this.pc1_1;
    }
    var encodeTable = tmp;
    var out = StringBuilder_init_$Create$((imul(src.length, 4) / 3 | 0) + 4 | 0);
    var ipos = 0;
    var extraBytes = src.length % 3 | 0;
    while (ipos < (src.length - 2 | 0)) {
      var num = readU24BE(this, src, ipos);
      ipos = ipos + 3 | 0;
      out.y8(charSequenceGet(encodeTable, (num >>> 18 | 0) & 63));
      out.y8(charSequenceGet(encodeTable, (num >>> 12 | 0) & 63));
      out.y8(charSequenceGet(encodeTable, (num >>> 6 | 0) & 63));
      out.y8(charSequenceGet(encodeTable, (num >>> 0 | 0) & 63));
    }
    if (extraBytes === 1) {
      var tmp0 = ipos;
      ipos = tmp0 + 1 | 0;
      var num_0 = readU8(this, src, tmp0);
      out.y8(charSequenceGet(encodeTable, num_0 >>> 2 | 0));
      out.y8(charSequenceGet(encodeTable, num_0 << 4 & 63));
      if (!url || (url && doPadding)) {
        out.y8(_Char___init__impl__6a9atx(61));
        out.y8(_Char___init__impl__6a9atx(61));
      }
    } else if (extraBytes === 2) {
      var tmp2 = ipos;
      ipos = tmp2 + 1 | 0;
      var tmp_0 = readU8(this, src, tmp2) << 8;
      var tmp1 = ipos;
      ipos = tmp1 + 1 | 0;
      var tmp_1 = tmp_0 | readU8(this, src, tmp1);
      out.y8(charSequenceGet(encodeTable, tmp_1 >>> 10 | 0));
      out.y8(charSequenceGet(encodeTable, (tmp_1 >>> 4 | 0) & 63));
      out.y8(charSequenceGet(encodeTable, tmp_1 << 2 & 63));
      if (!url || (url && doPadding)) {
        out.y8(_Char___init__impl__6a9atx(61));
      }
    }
    return out.toString();
  };
  protoOf(Base64).tc1 = function (src, url, doPadding, $super) {
    url = url === VOID ? false : url;
    doPadding = doPadding === VOID ? false : doPadding;
    return $super === VOID ? this.ec3(src, url, doPadding) : $super.ec3.call(this, src, url, doPadding);
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
  protoOf(Hex).fc3 = function (v) {
    return v >= 10 ? Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(97), v - 10 | 0) : Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(48), v);
  };
  protoOf(Hex).vc1 = function (src) {
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
        var tmp$ret$0 = Hex_instance.fc3(it);
        this_0.y8(tmp$ret$0);
        var it_0 = (v >>> 0 | 0) & 15;
        var tmp$ret$1 = Hex_instance.fc3(it_0);
        this_0.y8(tmp$ret$1);
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
    return tmp0.z();
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
