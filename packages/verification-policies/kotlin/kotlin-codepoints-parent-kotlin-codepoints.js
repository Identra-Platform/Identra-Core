(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-codepoints-parent-kotlin-codepoints'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-codepoints-parent-kotlin-codepoints'.");
    }
    globalThis['kotlin-codepoints-parent-kotlin-codepoints'] = factory(typeof globalThis['kotlin-codepoints-parent-kotlin-codepoints'] === 'undefined' ? {} : globalThis['kotlin-codepoints-parent-kotlin-codepoints'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var charSequenceGet = kotlin_kotlin.$_$.mc;
  var isHighSurrogate = kotlin_kotlin.$_$.jg;
  var isLowSurrogate = kotlin_kotlin.$_$.kg;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(CodePoints, 'CodePoints');
  //endregion
  function codePointBefore(_this__u8e3s4, index) {
    var startIndex = index - 1 | 0;
    if (!(0 <= startIndex ? startIndex <= (charSequenceLength(_this__u8e3s4) - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$();
    var firstChar = charSequenceGet(_this__u8e3s4, startIndex);
    if (isLowSurrogate(firstChar) && (startIndex - 1 | 0) >= 0) {
      var previousChar = charSequenceGet(_this__u8e3s4, startIndex - 1 | 0);
      if (isHighSurrogate(previousChar)) {
        return CodePoints_instance.zck(previousChar, firstChar);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(firstChar);
  }
  function codePointAt(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (charSequenceLength(_this__u8e3s4) - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$();
    var firstChar = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(firstChar) && (index + 1 | 0) < charSequenceLength(_this__u8e3s4)) {
      var nextChar = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(nextChar)) {
        return CodePoints_instance.zck(firstChar, nextChar);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(firstChar);
  }
  function CodePoints() {
    this.tck_1 = 65536;
    this.uck_1 = 1114111;
    this.vck_1 = 55296;
    this.wck_1 = 56320;
    this.xck_1 = -56613888;
    this.yck_1 = 55232;
  }
  protoOf(CodePoints).acl = function (codePoint) {
    return codePoint < 65536 ? 1 : 2;
  };
  protoOf(CodePoints).zck = function (highSurrogate, lowSurrogate) {
    // Inline function 'kotlin.code' call
    var tmp = Char__toInt_impl_vasixd(highSurrogate) << 10;
    // Inline function 'kotlin.code' call
    return (tmp + Char__toInt_impl_vasixd(lowSurrogate) | 0) + -56613888 | 0;
  };
  var CodePoints_instance;
  function CodePoints_getInstance() {
    return CodePoints_instance;
  }
  //region block: init
  CodePoints_instance = new CodePoints();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = codePointAt;
  _.$_$.b = codePointBefore;
  _.$_$.c = CodePoints_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-codepoints-parent-kotlin-codepoints.js.map
