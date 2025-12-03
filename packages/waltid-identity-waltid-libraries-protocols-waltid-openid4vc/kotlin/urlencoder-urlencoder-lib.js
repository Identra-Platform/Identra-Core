(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'urlencoder-urlencoder-lib'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'urlencoder-urlencoder-lib'.");
    }
    globalThis['urlencoder-urlencoder-lib'] = factory(typeof globalThis['urlencoder-urlencoder-lib'] === 'undefined' ? {} : globalThis['urlencoder-urlencoder-lib'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var protoOf = kotlin_kotlin.$_$.ce;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  var numberToChar = kotlin_kotlin.$_$.xd;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.n3;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var get_indices = kotlin_kotlin.$_$.ig;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var charSequenceLength = kotlin_kotlin.$_$.oc;
  var charSequenceGet = kotlin_kotlin.$_$.nc;
  var getOrNull = kotlin_kotlin.$_$.dg;
  var isLowSurrogate = kotlin_kotlin.$_$.mg;
  var Char = kotlin_kotlin.$_$.vi;
  var isHighSurrogate = kotlin_kotlin.$_$.lg;
  var toCharArray = kotlin_kotlin.$_$.sh;
  var booleanArray = kotlin_kotlin.$_$.jc;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.q3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var charArrayOf = kotlin_kotlin.$_$.lc;
  var concatToString = kotlin_kotlin.$_$.pf;
  var encodeToByteArray = kotlin_kotlin.$_$.wf;
  var toString = kotlin_kotlin.$_$.u3;
  var contains = kotlin_kotlin.$_$.sf;
  var VOID = kotlin_kotlin.$_$.j;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(Character, 'Character');
  initMetadataForObject(UrlEncoderUtil, 'UrlEncoderUtil');
  //endregion
  function Character() {
    Character_instance = this;
    this.v9t_1 = 1114111;
    this.w9t_1 = 65536;
    this.x9t_1 = -56613888;
    this.y9t_1 = _Char___init__impl__6a9atx(55232);
  }
  protoOf(Character).z9t = function (codePoint) {
    return 65536 <= codePoint ? codePoint <= 1114111 : false;
  };
  protoOf(Character).a9u = function (highSurrogate, lowSurrogate) {
    // Inline function 'kotlin.code' call
    var tmp = Char__toInt_impl_vasixd(highSurrogate) << 10;
    // Inline function 'kotlin.code' call
    return (tmp + Char__toInt_impl_vasixd(lowSurrogate) | 0) + -56613888 | 0;
  };
  protoOf(Character).b9u = function (codePoint) {
    return (codePoint >>> 16 | 0) === 0;
  };
  protoOf(Character).c9u = function (codePoint) {
    var tmp = codePoint >>> 10 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(55232);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    return numberToChar(tmp + tmp$ret$0 | 0);
  };
  protoOf(Character).d9u = function (codePoint) {
    var tmp = codePoint & 1023;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(56320);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    return numberToChar(tmp + tmp$ret$0 | 0);
  };
  var Character_instance;
  function Character_getInstance() {
    if (Character_instance == null)
      new Character();
    return Character_instance;
  }
  function isUnreserved($this, _this__u8e3s4) {
    var tmp;
    if (Char__compareTo_impl_ypi4mb(_this__u8e3s4, _Char___init__impl__6a9atx(122)) <= 0) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(_this__u8e3s4);
      tmp = $this.f9u_1[tmp$ret$0];
    } else {
      tmp = false;
    }
    return tmp;
  }
  function appendEncodedDigit($this, _this__u8e3s4, digit) {
    _this__u8e3s4.p($this.e9u_1[digit & 15]);
  }
  function appendEncodedByte($this, _this__u8e3s4, ch) {
    _this__u8e3s4.z8('%');
    appendEncodedDigit($this, _this__u8e3s4, ch >> 4);
    appendEncodedDigit($this, _this__u8e3s4, ch);
  }
  function codePointAt($this, _this__u8e3s4, index) {
    if (!(0 <= index ? index <= (charSequenceLength(_this__u8e3s4) - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('index ' + index + ' was not in range ' + get_indices(_this__u8e3s4).toString());
    var firstChar = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(firstChar)) {
      var nextChar = getOrNull(_this__u8e3s4, index + 1 | 0);
      var tmp;
      var tmp_0 = nextChar;
      if ((tmp_0 == null ? null : new Char(tmp_0)) == null) {
        tmp = null;
      } else {
        tmp = isLowSurrogate(nextChar);
      }
      if (tmp === true) {
        return Character_getInstance().a9u(firstChar, nextChar);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(firstChar);
  }
  function UrlEncoderUtil() {
    UrlEncoderUtil_instance = this;
    this.e9u_1 = toCharArray('0123456789ABCDEF');
    var tmp = this;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(122);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    // Inline function 'kotlin.apply' call
    var this_1 = booleanArray(tmp$ret$0 + 1 | 0);
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(45);
    this_1[Char__toInt_impl_vasixd(this_2)] = true;
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(46);
    this_1[Char__toInt_impl_vasixd(this_3)] = true;
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(95);
    this_1[Char__toInt_impl_vasixd(this_4)] = true;
    var inductionVariable = _Char___init__impl__6a9atx(48);
    if (inductionVariable <= _Char___init__impl__6a9atx(57))
      do {
        var c = inductionVariable;
        inductionVariable = Char__plus_impl_qi7pgj(inductionVariable, 1);
        // Inline function 'kotlin.code' call
        this_1[Char__toInt_impl_vasixd(c)] = true;
      }
       while (inductionVariable <= _Char___init__impl__6a9atx(57));
    var inductionVariable_0 = _Char___init__impl__6a9atx(65);
    if (inductionVariable_0 <= _Char___init__impl__6a9atx(90))
      do {
        var c_0 = inductionVariable_0;
        inductionVariable_0 = Char__plus_impl_qi7pgj(inductionVariable_0, 1);
        // Inline function 'kotlin.code' call
        this_1[Char__toInt_impl_vasixd(c_0)] = true;
      }
       while (inductionVariable_0 <= _Char___init__impl__6a9atx(90));
    var inductionVariable_1 = _Char___init__impl__6a9atx(97);
    if (inductionVariable_1 <= _Char___init__impl__6a9atx(122))
      do {
        var c_1 = inductionVariable_1;
        inductionVariable_1 = Char__plus_impl_qi7pgj(inductionVariable_1, 1);
        // Inline function 'kotlin.code' call
        this_1[Char__toInt_impl_vasixd(c_1)] = true;
      }
       while (inductionVariable_1 <= _Char___init__impl__6a9atx(122));
    tmp.f9u_1 = this_1;
  }
  protoOf(UrlEncoderUtil).g9u = function (source, allow, spaceToPlus) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(source) === 0) {
      return source;
    }
    var out = null;
    var i = 0;
    while (i < source.length) {
      var ch = charSequenceGet(source, i);
      if (isUnreserved(this, ch) || contains(allow, ch)) {
        var tmp0_safe_receiver = out;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver.p(ch);
        i = i + 1 | 0;
      } else {
        if (out == null) {
          out = StringBuilder_init_$Create$(source.length);
          out.xd(source, 0, i);
        }
        var cp = codePointAt(this, source, i);
        if (cp < 128) {
          if (spaceToPlus && ch === _Char___init__impl__6a9atx(32)) {
            out.p(_Char___init__impl__6a9atx(43));
          } else {
            appendEncodedByte(this, out, cp);
          }
          i = i + 1 | 0;
        } else if (Character_getInstance().b9u(cp)) {
          var indexedObject = encodeToByteArray(toString(ch));
          var inductionVariable = 0;
          var last = indexedObject.length;
          while (inductionVariable < last) {
            var b = indexedObject[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            appendEncodedByte(this, out, b);
          }
          i = i + 1 | 0;
        } else if (Character_getInstance().z9t(cp)) {
          var high = Character_getInstance().c9u(cp);
          var low = Character_getInstance().d9u(cp);
          // Inline function 'kotlin.charArrayOf' call
          var tmp$ret$1 = charArrayOf([high, low]);
          var indexedObject_0 = encodeToByteArray(concatToString(tmp$ret$1));
          var inductionVariable_0 = 0;
          var last_0 = indexedObject_0.length;
          while (inductionVariable_0 < last_0) {
            var b_0 = indexedObject_0[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            appendEncodedByte(this, out, b_0);
          }
          i = i + 2 | 0;
        }
      }
    }
    var tmp6_safe_receiver = out;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.toString();
    return tmp7_elvis_lhs == null ? source : tmp7_elvis_lhs;
  };
  protoOf(UrlEncoderUtil).h9u = function (source, allow, spaceToPlus, $super) {
    allow = allow === VOID ? '' : allow;
    spaceToPlus = spaceToPlus === VOID ? false : spaceToPlus;
    return $super === VOID ? this.g9u(source, allow, spaceToPlus) : $super.g9u.call(this, source, allow, spaceToPlus);
  };
  var UrlEncoderUtil_instance;
  function UrlEncoderUtil_getInstance() {
    if (UrlEncoderUtil_instance == null)
      new UrlEncoderUtil();
    return UrlEncoderUtil_instance;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = UrlEncoderUtil_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=urlencoder-urlencoder-lib.js.map
