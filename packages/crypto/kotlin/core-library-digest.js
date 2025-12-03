(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './error-library-error.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./error-library-error.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'core-library-digest'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'core-library-digest'.");
    }
    if (typeof globalThis['error-library-error'] === 'undefined') {
      throw new Error("Error loading module 'core-library-digest'. Its dependency 'error-library-error' was not found. Please, check whether 'error-library-error' is loaded prior to 'core-library-digest'.");
    }
    globalThis['core-library-digest'] = factory(typeof globalThis['core-library-digest'] === 'undefined' ? {} : globalThis['core-library-digest'], globalThis['kotlin-kotlin-stdlib'], globalThis['error-library-error']);
  }
}(function (_, kotlin_kotlin, kotlin_org_kotlincrypto_error) {
  'use strict';
  //region block: imports
  var hashCode = kotlin_kotlin.$_$.kb;
  var isBlank = kotlin_kotlin.$_$.be;
  var toString = kotlin_kotlin.$_$.tc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var protoOf = kotlin_kotlin.$_$.pc;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.i2;
  var fill = kotlin_kotlin.$_$.p7;
  var ShortBufferException_init_$Create$ = kotlin_org_kotlincrypto_error.$_$.a;
  var arrayCopy = kotlin_kotlin.$_$.l6;
  var equals = kotlin_kotlin.$_$.fb;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Digest, 'Digest');
  //endregion
  function _Buffer___init__impl__mrnqm7(value) {
    return value;
  }
  function _Buffer___get_value__impl__xxr8tn($this) {
    return $this;
  }
  function Buffer__hashCode_impl_3ylui6($this) {
    return hashCode($this);
  }
  function Digest_init_$Init$(algorithm, blockSize, digestLength, $this) {
    Digest.call($this);
    var tmp = $this;
    // Inline function 'org.kotlincrypto.core.digest.internal.initializeBuffer' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(algorithm)) {
      var message = 'algorithm cannot be blank';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(blockSize > 0)) {
      var message_0 = 'blockSize must be greater than 0';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!((blockSize % 8 | 0) === 0)) {
      var message_1 = 'blockSize must be a factor of 8';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    if (!(digestLength >= 0)) {
      var message_2 = 'digestLength cannot be negative';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    tmp.x6c_1 = _Buffer___init__impl__mrnqm7(new Int8Array(blockSize));
    $this.v6c_1 = algorithm;
    $this.w6c_1 = digestLength;
    $this.y6c_1 = 0;
    return $this;
  }
  protoOf(Digest).z6c = function () {
    return _Buffer___get_value__impl__xxr8tn(this.x6c_1).length;
  };
  protoOf(Digest).a6d = function () {
    return this.w6c_1;
  };
  protoOf(Digest).t6c = function () {
    return this.v6c_1;
  };
  protoOf(Digest).b6d = function (input) {
    this.c6d(input, 0, input.length);
  };
  protoOf(Digest).s6c = function (input, offset, len) {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonCheckArgs' call
    // Inline function 'kotlin.contracts.contract' call
    if ((input.length - offset | 0) < len) {
      var p0 = 'Too Short. size[' + input.length + '] - offset[' + offset + '] < len[' + len + ']';
      throw IllegalArgumentException_init_$Create$(p0);
    }
    if (offset < 0) {
      var p0_0 = 'offset[' + offset + '] < 0';
      throw IndexOutOfBoundsException_init_$Create$(p0_0);
    }
    if (len < 0) {
      var p0_1 = 'len[' + len + '] < 0';
      throw IndexOutOfBoundsException_init_$Create$(p0_1);
    }
    if (offset > (input.length - len | 0)) {
      var p0_2 = 'offset[' + offset + '] > size[' + input.length + '] - len[' + len + ']';
      throw IndexOutOfBoundsException_init_$Create$(p0_2);
    }
    this.c6d(input, offset, len);
  };
  protoOf(Digest).d6d = function () {
    var tmp0 = this.x6c_1;
    // Inline function 'org.kotlincrypto.core.digest.internal.commonDigest' call
    var bufPos = this.y6c_1;
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(tmp0), 0, bufPos);
    var p0 = _Buffer___get_value__impl__xxr8tn(tmp0);
    var digest = this.e6d(p0, bufPos);
    // Inline function 'org.kotlincrypto.core.digest.internal.commonReset' call
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(tmp0), 0);
    this.y6c_1 = 0;
    this.f6d();
    return digest;
  };
  protoOf(Digest).g6d = function (input) {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonDigest' call
    var this_0 = this.x6c_1;
    // Inline function 'kotlin.contracts.contract' call
    var p2 = input.length;
    this.c6d(input, 0, p2);
    // Inline function 'org.kotlincrypto.core.digest.internal.commonDigest' call
    var bufPos = this.y6c_1;
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(this_0), 0, bufPos);
    var p0 = _Buffer___get_value__impl__xxr8tn(this_0);
    var digest = this.e6d(p0, bufPos);
    // Inline function 'org.kotlincrypto.core.digest.internal.commonReset' call
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(this_0), 0);
    this.y6c_1 = 0;
    this.f6d();
    return digest;
  };
  protoOf(Digest).h6d = function (dest, destOffset) {
    var tmp0 = this.x6c_1;
    var tmp1 = this.y6c_1;
    // Inline function 'org.kotlincrypto.core.digest.internal.commonDigestInto' call
    var digestLength = this.w6c_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.kotlincrypto.core.digest.internal.commonCheckArgs' call
    // Inline function 'kotlin.contracts.contract' call
    if ((dest.length - destOffset | 0) < digestLength) {
      var p0 = 'Too Short. size[' + dest.length + '] - offset[' + destOffset + '] < len[' + digestLength + ']';
      throw ShortBufferException_init_$Create$(p0);
    }
    if (destOffset < 0) {
      var p0_0 = 'offset[' + destOffset + '] < 0';
      throw IndexOutOfBoundsException_init_$Create$(p0_0);
    }
    if (digestLength < 0) {
      var p0_1 = 'len[' + digestLength + '] < 0';
      throw IndexOutOfBoundsException_init_$Create$(p0_1);
    }
    if (destOffset > (dest.length - digestLength | 0)) {
      var p0_2 = 'offset[' + destOffset + '] > size[' + dest.length + '] - len[' + digestLength + ']';
      throw IndexOutOfBoundsException_init_$Create$(p0_2);
    }
    fill(_Buffer___get_value__impl__xxr8tn(tmp0), 0, tmp1);
    var p2 = _Buffer___get_value__impl__xxr8tn(tmp0);
    this.i6d(dest, destOffset, p2, tmp1);
    // Inline function 'org.kotlincrypto.core.digest.internal.commonReset' call
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(tmp0), 0);
    this.y6c_1 = 0;
    this.f6d();
    return digestLength;
  };
  protoOf(Digest).r6c = function () {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonReset' call
    var this_0 = this.x6c_1;
    // Inline function 'kotlin.contracts.contract' call
    fill(_Buffer___get_value__impl__xxr8tn(this_0), 0);
    this.y6c_1 = 0;
    this.f6d();
  };
  protoOf(Digest).i6d = function (dest, destOffset, buf, bufPos) {
    var result = this.e6d(buf, bufPos);
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = result.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = result;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, dest, destOffset, 0, endIndex);
    fill(result, 0);
  };
  protoOf(Digest).c6d = function (input, offset, len) {
    var tmp0 = this.x6c_1;
    var tmp4 = this.y6c_1;
    $l$block: {
      // Inline function 'org.kotlincrypto.core.digest.internal.commonUpdate' call
      // Inline function 'kotlin.contracts.contract' call
      var buf = _Buffer___get_value__impl__xxr8tn(tmp0);
      var blockSize = buf.length;
      var limitInput = offset + len | 0;
      var posInput = offset;
      var posBuf = tmp4;
      if (posBuf > 0) {
        if ((posBuf + len | 0) < blockSize) {
          var tmp2 = posBuf;
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex = posInput;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = input;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, buf, tmp2, startIndex, limitInput);
          this.y6c_1 = posBuf + len | 0;
          break $l$block;
        }
        var needed = blockSize - posBuf | 0;
        var tmp7 = posBuf;
        var tmp8 = posInput;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = posInput + needed | 0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = input;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, buf, tmp7, tmp8, endIndex);
        this.j6d(buf, 0);
        posBuf = 0;
        posInput = posInput + needed | 0;
      }
      $l$loop: while (posInput < limitInput) {
        var posNext = posInput + blockSize | 0;
        if (posNext > limitInput) {
          // Inline function 'kotlin.collections.copyInto' call
          var startIndex_0 = posInput;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = input;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_1, buf, 0, startIndex_0, limitInput);
          posBuf = limitInput - posInput | 0;
          break $l$loop;
        }
        var p1 = posInput;
        this.j6d(input, p1);
        posInput = posNext;
      }
      this.y6c_1 = posBuf;
    }
  };
  protoOf(Digest).equals = function (other) {
    var tmp;
    if (other instanceof Digest) {
      tmp = equals(other.x6c_1, this.x6c_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Digest).hashCode = function () {
    return Buffer__hashCode_impl_3ylui6(this.x6c_1);
  };
  protoOf(Digest).toString = function () {
    // Inline function 'org.kotlincrypto.core.digest.internal.commonToString' call
    return 'Digest[' + this.t6c() + ']@' + this.hashCode();
  };
  function Digest() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Digest_init_$Init$;
  _.$_$.b = Digest;
  //endregion
  return _;
}));

//# sourceMappingURL=core-library-digest.js.map
