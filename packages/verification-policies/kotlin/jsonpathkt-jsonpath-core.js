(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'jsonpathkt-jsonpath-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'jsonpathkt-jsonpath-core'.");
    }
    globalThis['jsonpathkt-jsonpath-core'] = factory(typeof globalThis['jsonpathkt-jsonpath-core'] === 'undefined' ? {} : globalThis['jsonpathkt-jsonpath-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var isCharSequence = kotlin_kotlin.$_$.id;
  var trim = kotlin_kotlin.$_$.ki;
  var toString = kotlin_kotlin.$_$.fe;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var hashCode = kotlin_kotlin.$_$.wc;
  var equals = kotlin_kotlin.$_$.rc;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var listOf = kotlin_kotlin.$_$.q9;
  var charSequenceGet = kotlin_kotlin.$_$.mc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var Char = kotlin_kotlin.$_$.si;
  var isBlank = kotlin_kotlin.$_$.hg;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r1;
  var firstOrNull = kotlin_kotlin.$_$.zf;
  var getOrNull = kotlin_kotlin.$_$.bg;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var toList = kotlin_kotlin.$_$.va;
  var toString_0 = kotlin_kotlin.$_$.u3;
  var isDigit = kotlin_kotlin.$_$.ig;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var toInt = kotlin_kotlin.$_$.wh;
  var IntRange = kotlin_kotlin.$_$.le;
  var firstOrNull_0 = kotlin_kotlin.$_$.q8;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var VOID = kotlin_kotlin.$_$.j;
  var getBooleanHashCode = kotlin_kotlin.$_$.tc;
  var getOrNull_0 = kotlin_kotlin.$_$.x8;
  var Enum = kotlin_kotlin.$_$.xi;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonPath, 'JsonPath');
  initMetadataForObject(PathCompiler, 'PathCompiler');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ResolutionOptions, 'ResolutionOptions', ResolutionOptions);
  initMetadataForClass(JsonArrayBuilder, 'JsonArrayBuilder', JsonArrayBuilder);
  initMetadataForClass(JsonNode, 'JsonNode');
  initMetadataForClass(JsonType, 'JsonType', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(ArrayAccessorToken, 'ArrayAccessorToken');
  initMetadataForClass(ArrayLengthBasedRangeAccessorToken, 'ArrayLengthBasedRangeAccessorToken');
  initMetadataForClass(DeepScanArrayAccessorToken, 'DeepScanArrayAccessorToken');
  initMetadataForClass(DeepScanLengthBasedArrayAccessorToken, 'DeepScanLengthBasedArrayAccessorToken');
  initMetadataForClass(DeepScanObjectAccessorToken, 'DeepScanObjectAccessorToken');
  initMetadataForObject(DeepScanWildcardToken, 'DeepScanWildcardToken');
  initMetadataForClass(MultiArrayAccessorToken, 'MultiArrayAccessorToken');
  initMetadataForClass(MultiObjectAccessorToken, 'MultiObjectAccessorToken');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(ObjectAccessorToken, 'ObjectAccessorToken');
  initMetadataForObject(WildcardToken, 'WildcardToken');
  //endregion
  function _JsonPath___init__impl__q1tjys(tokens) {
    return tokens;
  }
  function _JsonPath___get_tokens__impl__ney223($this) {
    return $this;
  }
  function Companion() {
  }
  protoOf(Companion).re3 = function (path) {
    var tmp = PathCompiler_instance;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString(trim(isCharSequence(path) ? path : THROW_CCE()));
    return _JsonPath___init__impl__q1tjys(tmp.acn(tmp$ret$0));
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function JsonPath__toString_impl_t2gpp0($this) {
    return 'JsonPath(tokens=' + toString($this) + ')';
  }
  function JsonPath__hashCode_impl_7basw5($this) {
    return hashCode($this);
  }
  function JsonPath__equals_impl_ph5vof($this, other) {
    if (!(other instanceof JsonPath))
      return false;
    var tmp0_other_with_cast = other instanceof JsonPath ? other.se3_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function JsonPath(tokens) {
    this.se3_1 = tokens;
  }
  protoOf(JsonPath).toString = function () {
    return JsonPath__toString_impl_t2gpp0(this.se3_1);
  };
  protoOf(JsonPath).hashCode = function () {
    return JsonPath__hashCode_impl_7basw5(this.se3_1);
  };
  protoOf(JsonPath).equals = function (other) {
    return JsonPath__equals_impl_ph5vof(this.se3_1, other);
  };
  function compile$resetForNextToken(isDeepScan, isWildcard, keyBuilder) {
    isDeepScan._v = false;
    isWildcard._v = false;
    keyBuilder.ee();
  }
  function compile$addCurrentToken(keyBuilder, isDeepScan, isWildcard, tokens) {
    var key = keyBuilder.toString();
    var token = isDeepScan._v && isWildcard._v ? DeepScanWildcardToken_instance : isDeepScan._v ? new DeepScanObjectAccessorToken(listOf(key)) : isWildcard._v ? WildcardToken_instance : new ObjectAccessorToken(key);
    tokens.n(token);
  }
  function compileBracket$buildAndAddKey(keyBuilder, isObjectAccessor, isNegativeArrayAccessor, keys) {
    var key = keyBuilder.toString();
    if (!isObjectAccessor._v && isNegativeArrayAccessor._v) {
      key = '-' + key;
      isNegativeArrayAccessor._v = false;
    }
    keys.n(key);
    keyBuilder.ee();
  }
  function compileBracket$getNextCharIgnoringWhitespace(i, $closingIndex, $path, isQuoteOpened) {
    var inductionVariable = i._v + 1 | 0;
    if (inductionVariable <= $closingIndex)
      $l$loop: do {
        var n = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = charSequenceGet($path, n);
        if (c === _Char___init__impl__6a9atx(32) && !isQuoteOpened._v) {
          continue $l$loop;
        }
        return c;
      }
       while (!(n === $closingIndex));
    // Inline function 'kotlin.error' call
    var message = "Shouldn't reach this point";
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function compileBracket$isBracketNext(i, $closingIndex, $path, isQuoteOpened) {
    return compileBracket$getNextCharIgnoringWhitespace(i, $closingIndex, $path, isQuoteOpened) === _Char___init__impl__6a9atx(93);
  }
  function compileBracket$isBracketBefore(lastChar) {
    return lastChar._v.equals(new Char(_Char___init__impl__6a9atx(91)));
  }
  function PathCompiler() {
  }
  protoOf(PathCompiler).acn = function (path) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(path)) {
      var message = 'Path cannot be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokens = ArrayList_init_$Create$();
    var isDeepScan = {_v: false};
    var isWildcard = {_v: false};
    var keyBuilder = StringBuilder_init_$Create$();
    var len = path.length;
    var tmp;
    var tmp_0 = firstOrNull(path);
    if (equals(tmp_0 == null ? null : new Char(tmp_0), new Char(_Char___init__impl__6a9atx(36)))) {
      tmp = 1;
    } else {
      tmp = 0;
    }
    var i = tmp;
    while (i < len) {
      var c = charSequenceGet(path, i);
      var next = getOrNull(path, i + 1 | 0);
      if (c === _Char___init__impl__6a9atx(42)) {
        isWildcard._v = true;
      } else if (c === _Char___init__impl__6a9atx(46)) {
        var tmp_1;
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(keyBuilder) > 0) {
          tmp_1 = true;
        } else {
          tmp_1 = isWildcard._v;
        }
        if (tmp_1) {
          compile$addCurrentToken(keyBuilder, isDeepScan, isWildcard, tokens);
          compile$resetForNextToken(isDeepScan, isWildcard, keyBuilder);
        }
        var tmp_2 = next;
        if (equals(tmp_2 == null ? null : new Char(tmp_2), new Char(_Char___init__impl__6a9atx(46)))) {
          isDeepScan._v = true;
          i = i + 1 | 0;
        } else {
          var tmp_3 = next;
          if (equals(tmp_3 == null ? null : new Char(tmp_3), new Char(_Char___init__impl__6a9atx(42)))) {
            isWildcard._v = true;
            i = i + 1 | 0;
          } else {
            var tmp_4 = next;
            if ((tmp_4 == null ? null : new Char(tmp_4)) == null)
              throw IllegalArgumentException_init_$Create$('Unexpected ending with dot');
          }
        }
      } else if (c === _Char___init__impl__6a9atx(91)) {
        var tmp_5;
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(keyBuilder) > 0) {
          tmp_5 = true;
        } else {
          tmp_5 = isWildcard._v;
        }
        if (tmp_5) {
          compile$addCurrentToken(keyBuilder, isDeepScan, isWildcard, tokens);
          compile$resetForNextToken(isDeepScan, isWildcard, keyBuilder);
        }
        var closingBracketIndex = this.te3(path, i);
        // Inline function 'kotlin.require' call
        if (!(closingBracketIndex > (i + 1 | 0))) {
          var message_0 = 'Expecting closing array bracket with a value inside';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var token = this.ue3(path, i, closingBracketIndex);
        if (isDeepScan._v) {
          var tmp_6;
          if (token instanceof WildcardToken) {
            tmp_6 = DeepScanWildcardToken_instance;
          } else {
            if (token instanceof ObjectAccessorToken) {
              tmp_6 = new DeepScanObjectAccessorToken(listOf(token.be4_1));
            } else {
              if (token instanceof MultiObjectAccessorToken) {
                tmp_6 = new DeepScanObjectAccessorToken(token.ae4_1);
              } else {
                if (token instanceof ArrayAccessorToken) {
                  tmp_6 = new DeepScanArrayAccessorToken(listOf(token.ze3_1));
                } else {
                  if (token instanceof MultiArrayAccessorToken) {
                    tmp_6 = new DeepScanArrayAccessorToken(token.ye3_1);
                  } else {
                    if (token instanceof ArrayLengthBasedRangeAccessorToken) {
                      tmp_6 = new DeepScanLengthBasedArrayAccessorToken(token.ve3_1, token.we3_1, token.xe3_1);
                    } else {
                      tmp_6 = null;
                    }
                  }
                }
              }
            }
          }
          var deepScanToken = tmp_6;
          if (deepScanToken == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            tokens.n(deepScanToken);
          }
          compile$resetForNextToken(isDeepScan, isWildcard, keyBuilder);
        } else {
          tokens.n(token);
        }
        i = closingBracketIndex;
      } else {
        keyBuilder.z8(c);
      }
      i = i + 1 | 0;
    }
    var tmp_7;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(keyBuilder) > 0) {
      tmp_7 = true;
    } else {
      tmp_7 = isWildcard._v;
    }
    if (tmp_7) {
      compile$addCurrentToken(keyBuilder, isDeepScan, isWildcard, tokens);
    }
    return toList(tokens);
  };
  protoOf(PathCompiler).te3 = function (path, openingIndex) {
    var isQuoteOpened = false;
    var isSingleQuote = false;
    var i = openingIndex + 1 | 0;
    var len = path.length;
    while (i < len) {
      var c = charSequenceGet(path, i);
      var next = getOrNull(path, i + 1 | 0);
      if (c === _Char___init__impl__6a9atx(39) || c === _Char___init__impl__6a9atx(34)) {
        if (!isQuoteOpened) {
          isQuoteOpened = true;
          isSingleQuote = c === _Char___init__impl__6a9atx(39);
        } else if (isSingleQuote && c === _Char___init__impl__6a9atx(39)) {
          isQuoteOpened = false;
        } else if (!isSingleQuote && c === _Char___init__impl__6a9atx(34)) {
          isQuoteOpened = false;
        }
      } else if (c === _Char___init__impl__6a9atx(93) && !isQuoteOpened)
        return i;
      else if (c === _Char___init__impl__6a9atx(92) && isQuoteOpened) {
        var tmp;
        var tmp_0;
        var tmp_1 = next;
        if (equals(tmp_1 == null ? null : new Char(tmp_1), new Char(_Char___init__impl__6a9atx(39)))) {
          tmp_0 = true;
        } else {
          var tmp_2 = next;
          tmp_0 = equals(tmp_2 == null ? null : new Char(tmp_2), new Char(_Char___init__impl__6a9atx(92)));
        }
        if (tmp_0) {
          tmp = true;
        } else {
          var tmp_3 = next;
          tmp = equals(tmp_3 == null ? null : new Char(tmp_3), new Char(_Char___init__impl__6a9atx(34)));
        }
        if (tmp) {
          i = i + 1 | 0;
        } else {
          var tmp_4 = next;
          if ((tmp_4 == null ? null : new Char(tmp_4)) == null) {
            throw IllegalArgumentException_init_$Create$('Unexpected char at end of path');
          }
        }
      }
      i = i + 1 | 0;
    }
    return -1;
  };
  protoOf(PathCompiler).ue3 = function (path, openingIndex, closingIndex) {
    var isObjectAccessor = {_v: false};
    var isNegativeArrayAccessor = {_v: false};
    var isQuoteOpened = {_v: false};
    var isSingleQuote = false;
    var hasStartColon = false;
    var hasEndColon = false;
    var isRange = false;
    var isWildcard = false;
    var i = {_v: openingIndex + 1 | 0};
    var lastChar = {_v: new Char(charSequenceGet(path, openingIndex))};
    // Inline function 'kotlin.collections.mutableListOf' call
    var keys = ArrayList_init_$Create$();
    var keyBuilder = StringBuilder_init_$Create$();
    while (i._v < closingIndex) {
      var c = charSequenceGet(path, i._v);
      var setLastChar = true;
      if (c === _Char___init__impl__6a9atx(32) && !isQuoteOpened._v) {
        setLastChar = false;
      } else if (c === _Char___init__impl__6a9atx(58) && !isQuoteOpened._v) {
        if (compileBracket$isBracketBefore(lastChar) && compileBracket$isBracketNext(i, closingIndex, path, isQuoteOpened)) {
          hasStartColon = true;
          hasEndColon = true;
        } else {
          if (compileBracket$isBracketBefore(lastChar)) {
            hasStartColon = true;
          } else {
            if (compileBracket$isBracketNext(i, closingIndex, path, isQuoteOpened)) {
              hasEndColon = true;
              compileBracket$buildAndAddKey(keyBuilder, isObjectAccessor, isNegativeArrayAccessor, keys);
            } else {
              // Inline function 'kotlin.text.isNotEmpty' call
              if (charSequenceLength(keyBuilder) > 0) {
                compileBracket$buildAndAddKey(keyBuilder, isObjectAccessor, isNegativeArrayAccessor, keys);
                isRange = true;
              }
            }
          }
        }
      } else if (c === _Char___init__impl__6a9atx(45) && !isObjectAccessor._v) {
        isNegativeArrayAccessor._v = true;
      } else if (c === _Char___init__impl__6a9atx(44) && !isQuoteOpened._v) {
        var tmp;
        if (!isObjectAccessor._v) {
          // Inline function 'kotlin.text.isNotEmpty' call
          tmp = charSequenceLength(keyBuilder) > 0;
        } else {
          tmp = false;
        }
        if (tmp) {
          compileBracket$buildAndAddKey(keyBuilder, isObjectAccessor, isNegativeArrayAccessor, keys);
        }
      } else if (c === _Char___init__impl__6a9atx(92) && isQuoteOpened._v) {
        var nextChar = charSequenceGet(path, i._v + 1 | 0);
        if ((nextChar === _Char___init__impl__6a9atx(92) ? true : nextChar === _Char___init__impl__6a9atx(39)) ? true : nextChar === _Char___init__impl__6a9atx(34)) {
          keyBuilder.z8(nextChar);
          i._v = i._v + 1 | 0;
          i._v;
        }
      } else if (c === _Char___init__impl__6a9atx(39) && isQuoteOpened._v && isSingleQuote) {
        compileBracket$buildAndAddKey(keyBuilder, isObjectAccessor, isNegativeArrayAccessor, keys);
        isQuoteOpened._v = false;
      } else if (c === _Char___init__impl__6a9atx(34) && isQuoteOpened._v && !isSingleQuote) {
        compileBracket$buildAndAddKey(keyBuilder, isObjectAccessor, isNegativeArrayAccessor, keys);
        isQuoteOpened._v = false;
      } else if ((c === _Char___init__impl__6a9atx(39) || c === _Char___init__impl__6a9atx(34)) && !isNegativeArrayAccessor._v && !isQuoteOpened._v) {
        isQuoteOpened._v = true;
        isSingleQuote = c === _Char___init__impl__6a9atx(39);
        isObjectAccessor._v = true;
      } else if (c === _Char___init__impl__6a9atx(42) && !isQuoteOpened._v && compileBracket$isBracketBefore(lastChar) && compileBracket$isBracketNext(i, closingIndex, path, isQuoteOpened)) {
        isWildcard = true;
      } else if (isDigit(c) && !isQuoteOpened._v || (isObjectAccessor._v && isQuoteOpened._v)) {
        keyBuilder.z8(c);
      } else
        throw IllegalArgumentException_init_$Create$('Unexpected char, char=' + toString_0(c) + ', index=' + i._v);
      i._v = i._v + 1 | 0;
      i._v;
      if (setLastChar) {
        lastChar._v = new Char(c);
      }
    }
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(keyBuilder) > 0) {
      compileBracket$buildAndAddKey(keyBuilder, isObjectAccessor, isNegativeArrayAccessor, keys);
    }
    var tmp_0;
    if (isObjectAccessor._v) {
      var tmp_1;
      if (keys.s() > 1) {
        tmp_1 = new MultiObjectAccessorToken(keys);
      } else {
        var tmp0_safe_receiver = firstOrNull_0(keys);
        var tmp_2;
        if (tmp0_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_2 = new ObjectAccessorToken(tmp0_safe_receiver);
        }
        tmp_1 = tmp_2;
      }
      tmp_0 = tmp_1;
    } else {
      var tmp_3;
      if (isWildcard) {
        tmp_3 = WildcardToken_instance;
      } else if (isRange) {
        var start = toInt(keys.u(0), 10);
        var end = toInt(keys.u(1), 10);
        var isEndNegative = end < 0;
        var tmp_4;
        if (start < 0 || isEndNegative) {
          var offsetFromEnd = isEndNegative ? end : 0;
          var endIndex = !isEndNegative ? end : null;
          tmp_4 = new ArrayLengthBasedRangeAccessorToken(start, endIndex, offsetFromEnd);
        } else {
          tmp_4 = new MultiArrayAccessorToken(toList(new IntRange(start, end - 1 | 0)));
        }
        tmp_3 = tmp_4;
      } else if (hasStartColon && hasEndColon) {
        tmp_3 = new ArrayLengthBasedRangeAccessorToken(0, null, 0);
      } else if (hasStartColon) {
        var end_0 = toInt(keys.u(0), 10);
        var tmp_5;
        if (end_0 < 0) {
          tmp_5 = new ArrayLengthBasedRangeAccessorToken(0, null, end_0);
        } else {
          tmp_5 = new MultiArrayAccessorToken(toList(new IntRange(0, end_0 - 1 | 0)));
        }
        tmp_3 = tmp_5;
      } else if (hasEndColon) {
        var start_0 = toInt(keys.u(0), 10);
        tmp_3 = new ArrayLengthBasedRangeAccessorToken(start_0);
      } else if (keys.s() === 1) {
        tmp_3 = new ArrayAccessorToken(toInt(keys.u(0), 10));
      } else if (keys.s() > 1) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(keys, 10));
        var _iterator__ex2g4s = keys.p();
        while (_iterator__ex2g4s.q()) {
          var item = _iterator__ex2g4s.r();
          var tmp$ret$6 = toInt(item, 10);
          destination.n(tmp$ret$6);
        }
        tmp_3 = new MultiArrayAccessorToken(destination);
      } else {
        tmp_3 = null;
      }
      tmp_0 = tmp_3;
    }
    var token = tmp_0;
    if (token == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return token;
    }
    throw IllegalArgumentException_init_$Create$('Not a valid path');
  };
  var PathCompiler_instance;
  function PathCompiler_getInstance() {
    return PathCompiler_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.ce4_1 = new ResolutionOptions();
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ResolutionOptions(wrapSingleValue) {
    Companion_getInstance_0();
    wrapSingleValue = wrapSingleValue === VOID ? false : wrapSingleValue;
    this.de4_1 = wrapSingleValue;
  }
  protoOf(ResolutionOptions).toString = function () {
    return 'ResolutionOptions(wrapSingleValue=' + this.de4_1 + ')';
  };
  protoOf(ResolutionOptions).hashCode = function () {
    return getBooleanHashCode(this.de4_1);
  };
  protoOf(ResolutionOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResolutionOptions))
      return false;
    var tmp0_other_with_cast = other instanceof ResolutionOptions ? other : THROW_CCE();
    if (!(this.de4_1 === tmp0_other_with_cast.de4_1))
      return false;
    return true;
  };
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ee4_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).fe4 = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.ee4_1.n(element);
  };
  function JsonNode(element, isWildcardScope) {
    this.ge4_1 = element;
    this.he4_1 = isWildcardScope;
  }
  protoOf(JsonNode).pe4 = function (_this__u8e3s4, index) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = getOrNull_0(_this__u8e3s4, index);
    var tmp;
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
    if (!(this_0 == null) && !this.ne4(this_0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(JsonNode).qe4 = function (_this__u8e3s4, key) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = _this__u8e3s4.m2(key);
    var tmp;
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
    if (!(this_0 == null) && !this.ne4(this_0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(JsonNode).ue4 = function (element, isWildcardScope, $super) {
    element = element === VOID ? this.ge4_1 : element;
    isWildcardScope = isWildcardScope === VOID ? this.he4_1 : isWildcardScope;
    return $super === VOID ? this.te4(element, isWildcardScope) : $super.te4.call(this, element, isWildcardScope);
  };
  var JsonType_Array_instance;
  var JsonType_Object_instance;
  var JsonType_Null_instance;
  var JsonType_Primitive_instance;
  var JsonType_entriesInitialized;
  function JsonType_initEntries() {
    if (JsonType_entriesInitialized)
      return Unit_instance;
    JsonType_entriesInitialized = true;
    JsonType_Array_instance = new JsonType('Array', 0);
    JsonType_Object_instance = new JsonType('Object', 1);
    JsonType_Null_instance = new JsonType('Null', 2);
    JsonType_Primitive_instance = new JsonType('Primitive', 3);
  }
  function JsonType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function JsonType_Array_getInstance() {
    JsonType_initEntries();
    return JsonType_Array_instance;
  }
  function JsonType_Object_getInstance() {
    JsonType_initEntries();
    return JsonType_Object_instance;
  }
  function JsonType_Null_getInstance() {
    JsonType_initEntries();
    return JsonType_Null_instance;
  }
  function JsonType_Primitive_getInstance() {
    JsonType_initEntries();
    return JsonType_Primitive_instance;
  }
  function readValueAtIndex($this, _this__u8e3s4, index) {
    var array = _this__u8e3s4.ie4();
    if (index < 0) {
      var indexFromLast = array.s() + index | 0;
      if (indexFromLast >= 0) {
        return _this__u8e3s4.pe4(array, indexFromLast);
      }
    }
    return _this__u8e3s4.pe4(array, index);
  }
  function Companion_1() {
  }
  protoOf(Companion_1).ve4 = function (node, index) {
    var tmp;
    switch (node.za0().t2_1) {
      case 0:
        var tmp_0;
        if (node.he4_1) {
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
          // Inline function 'kotlin.with' call
          var $this$with = new JsonArrayBuilder();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = node.ie4().p();
          while (_iterator__ex2g4s.q()) {
            var element = _iterator__ex2g4s.r();
            var tmp0_safe_receiver = Companion_instance_1.ve4(node.te4(element, false), index);
            if (tmp0_safe_receiver == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              if (tmp0_safe_receiver.oe4()) {
                $this$with.fe4(tmp0_safe_receiver.ge4_1);
              }
            }
          }
          var tmp$ret$7 = node.se4($this$with.ee4_1);
          tmp_0 = node.te4(tmp$ret$7, true);
        } else {
          var tmp1_safe_receiver = readValueAtIndex(this, node, index);
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_1 = node.te4(tmp1_safe_receiver, false);
          }
          tmp_0 = tmp_1;
        }

        tmp = tmp_0;
        break;
      case 2:
        tmp = null;
        break;
      case 3:
        var str = node.le4();
        var tmp_2;
        if (str == null) {
          tmp_2 = null;
        } else {
          var tmp_3;
          if (index < 0) {
            var indexFromLast = str.length + index | 0;
            var tmp_4;
            if (indexFromLast >= 0 && indexFromLast < str.length) {
              tmp_4 = node.te4(node.re4(toString_0(charSequenceGet(str, indexFromLast))), false);
            } else {
              tmp_4 = null;
            }
            tmp_3 = tmp_4;
          } else if (index < str.length) {
            tmp_3 = node.te4(node.re4(toString_0(charSequenceGet(str, index))), false);
          } else {
            tmp_3 = null;
          }
          tmp_2 = tmp_3;
        }

        tmp = tmp_2;
        break;
      default:
        tmp = null;
        break;
    }
    return tmp;
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function ArrayAccessorToken(index) {
    this.ze3_1 = index;
  }
  protoOf(ArrayAccessorToken).we4 = function (node) {
    return Companion_instance_1.ve4(node, this.ze3_1);
  };
  protoOf(ArrayAccessorToken).toString = function () {
    return 'ArrayAccessorToken(index=' + this.ze3_1 + ')';
  };
  protoOf(ArrayAccessorToken).hashCode = function () {
    return this.ze3_1;
  };
  protoOf(ArrayAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArrayAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof ArrayAccessorToken ? other : THROW_CCE();
    if (!(this.ze3_1 === tmp0_other_with_cast.ze3_1))
      return false;
    return true;
  };
  function ArrayLengthBasedRangeAccessorToken(startIndex, endIndex, offsetFromEnd) {
    endIndex = endIndex === VOID ? null : endIndex;
    offsetFromEnd = offsetFromEnd === VOID ? 0 : offsetFromEnd;
    this.ve3_1 = startIndex;
    this.we3_1 = endIndex;
    this.xe3_1 = offsetFromEnd;
  }
  protoOf(ArrayLengthBasedRangeAccessorToken).we4 = function (node) {
    var tmp;
    if (node.za0().t2_1 === 0) {
      var tmp_0;
      if (node.he4_1) {
        // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
        // Inline function 'kotlin.with' call
        var $this$with = new JsonArrayBuilder();
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = node.ie4().p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          var nextNode = this.we4(node.te4(element, false));
          if (nextNode.za0().t2_1 === 0) {
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_0 = nextNode.ie4().p();
            while (_iterator__ex2g4s_0.q()) {
              var element_0 = _iterator__ex2g4s_0.r();
              $this$with.fe4(element_0);
            }
          } else if (nextNode.oe4()) {
            $this$with.fe4(nextNode.ge4_1);
          }
        }
        var tmp$ret$7 = node.se4($this$with.ee4_1);
        return node.te4(tmp$ret$7, true);
      } else {
        tmp_0 = this.xe4(node);
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    var token = tmp;
    var tmp2_elvis_lhs = token == null ? null : token.we4(node.ue4(VOID, false));
    return tmp2_elvis_lhs == null ? node.te4(node.me4(), true) : tmp2_elvis_lhs;
  };
  protoOf(ArrayLengthBasedRangeAccessorToken).xe4 = function (node) {
    var array = node.ie4();
    var tmp;
    if (this.ve3_1 < 0) {
      var start = array.s() + this.ve3_1 | 0;
      tmp = start < 0 ? 0 : start;
    } else {
      tmp = this.ve3_1;
    }
    var start_0 = tmp;
    var tmp_0;
    if (!(this.we3_1 == null)) {
      tmp_0 = this.we3_1 - 1 | 0;
    } else {
      tmp_0 = (array.s() + this.xe3_1 | 0) - 1 | 0;
    }
    var endInclusive = tmp_0;
    var tmp_1;
    if (0 <= start_0 ? start_0 <= endInclusive : false) {
      tmp_1 = new MultiArrayAccessorToken(toList(new IntRange(start_0, endInclusive)));
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  };
  protoOf(ArrayLengthBasedRangeAccessorToken).toString = function () {
    return 'ArrayLengthBasedRangeAccessorToken(startIndex=' + this.ve3_1 + ', endIndex=' + this.we3_1 + ', offsetFromEnd=' + this.xe3_1 + ')';
  };
  protoOf(ArrayLengthBasedRangeAccessorToken).hashCode = function () {
    var result = this.ve3_1;
    result = imul(result, 31) + (this.we3_1 == null ? 0 : this.we3_1) | 0;
    result = imul(result, 31) + this.xe3_1 | 0;
    return result;
  };
  protoOf(ArrayLengthBasedRangeAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArrayLengthBasedRangeAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof ArrayLengthBasedRangeAccessorToken ? other : THROW_CCE();
    if (!(this.ve3_1 === tmp0_other_with_cast.ve3_1))
      return false;
    if (!(this.we3_1 == tmp0_other_with_cast.we3_1))
      return false;
    if (!(this.xe3_1 === tmp0_other_with_cast.xe3_1))
      return false;
    return true;
  };
  function scan($this, node, result) {
    switch (node.za0().t2_1) {
      case 1:
        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s = node.ke4().p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element == null) && !node.ne4(element)) {
            scan($this, node.te4(element, false), result);
          }
        }

        break;
      case 0:
        if (node.he4_1) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_0 = node.ie4().p();
          while (_iterator__ex2g4s_0.q()) {
            var element_0 = _iterator__ex2g4s_0.r();
            // Inline function 'kotlin.with' call
            // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
            if (!(element_0 == null) && !node.ne4(element_0)) {
              scan($this, node.te4(element_0, false), result);
            }
          }
        } else {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_1 = $this.ye4_1.p();
          while (_iterator__ex2g4s_1.q()) {
            var element_1 = _iterator__ex2g4s_1.r();
            var tmp0_safe_receiver = (new ArrayAccessorToken(element_1)).we4(node);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ge4_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.with' call
              // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
              if (!(tmp1_safe_receiver == null) && !node.ne4(tmp1_safe_receiver)) {
                result.fe4(tmp1_safe_receiver);
              }
            }
          }
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = node.ie4().p();
          while (_iterator__ex2g4s_2.q()) {
            var element_2 = _iterator__ex2g4s_2.r();
            // Inline function 'kotlin.with' call
            // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
            if (!(element_2 == null) && !node.ne4(element_2)) {
              scan($this, node.te4(element_2, false), result);
            }
          }
        }

        break;
      default:
        break;
    }
  }
  function DeepScanArrayAccessorToken(indices) {
    this.ye4_1 = indices;
  }
  protoOf(DeepScanArrayAccessorToken).we4 = function (node) {
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
    // Inline function 'kotlin.with' call
    var $this$with = new JsonArrayBuilder();
    scan(this, node, $this$with);
    var tmp$ret$3 = node.se4($this$with.ee4_1);
    return node.te4(tmp$ret$3, true);
  };
  protoOf(DeepScanArrayAccessorToken).toString = function () {
    return 'DeepScanArrayAccessorToken(indices=' + toString(this.ye4_1) + ')';
  };
  protoOf(DeepScanArrayAccessorToken).hashCode = function () {
    return hashCode(this.ye4_1);
  };
  protoOf(DeepScanArrayAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeepScanArrayAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof DeepScanArrayAccessorToken ? other : THROW_CCE();
    if (!equals(this.ye4_1, tmp0_other_with_cast.ye4_1))
      return false;
    return true;
  };
  function scan_0($this, node, result) {
    switch (node.za0().t2_1) {
      case 1:
        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s = node.ke4().p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element == null) && !node.ne4(element)) {
            scan_0($this, node.te4(element, false), result);
          }
        }

        break;
      case 0:
        if (node.he4_1) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_0 = node.ie4().p();
          while (_iterator__ex2g4s_0.q()) {
            var element_0 = _iterator__ex2g4s_0.r();
            // Inline function 'kotlin.with' call
            // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
            if (!(element_0 == null) && !node.ne4(element_0)) {
              scan_0($this, node.te4(element_0, false), result);
            }
          }
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_1 = (new ArrayLengthBasedRangeAccessorToken($this.ze4_1, $this.ae5_1, $this.be5_1)).we4(node).ie4().p();
          while (_iterator__ex2g4s_1.q()) {
            var element_1 = _iterator__ex2g4s_1.r();
            result.fe4(element_1);
          }
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = node.ie4().p();
          while (_iterator__ex2g4s_2.q()) {
            var element_2 = _iterator__ex2g4s_2.r();
            // Inline function 'kotlin.with' call
            // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
            if (!(element_2 == null) && !node.ne4(element_2)) {
              scan_0($this, node.te4(element_2, false), result);
            }
          }
        }

        break;
      default:
        break;
    }
  }
  function DeepScanLengthBasedArrayAccessorToken(startIndex, endIndex, offsetFromEnd) {
    endIndex = endIndex === VOID ? null : endIndex;
    offsetFromEnd = offsetFromEnd === VOID ? 0 : offsetFromEnd;
    this.ze4_1 = startIndex;
    this.ae5_1 = endIndex;
    this.be5_1 = offsetFromEnd;
  }
  protoOf(DeepScanLengthBasedArrayAccessorToken).we4 = function (node) {
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
    // Inline function 'kotlin.with' call
    var $this$with = new JsonArrayBuilder();
    scan_0(this, node, $this$with);
    var tmp$ret$3 = node.se4($this$with.ee4_1);
    return node.te4(tmp$ret$3, true);
  };
  protoOf(DeepScanLengthBasedArrayAccessorToken).toString = function () {
    return 'DeepScanLengthBasedArrayAccessorToken(startIndex=' + this.ze4_1 + ', endIndex=' + this.ae5_1 + ', offsetFromEnd=' + this.be5_1 + ')';
  };
  protoOf(DeepScanLengthBasedArrayAccessorToken).hashCode = function () {
    var result = this.ze4_1;
    result = imul(result, 31) + (this.ae5_1 == null ? 0 : this.ae5_1) | 0;
    result = imul(result, 31) + this.be5_1 | 0;
    return result;
  };
  protoOf(DeepScanLengthBasedArrayAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeepScanLengthBasedArrayAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof DeepScanLengthBasedArrayAccessorToken ? other : THROW_CCE();
    if (!(this.ze4_1 === tmp0_other_with_cast.ze4_1))
      return false;
    if (!(this.ae5_1 == tmp0_other_with_cast.ae5_1))
      return false;
    if (!(this.be5_1 === tmp0_other_with_cast.be5_1))
      return false;
    return true;
  };
  function scan_1($this, node, result) {
    switch (node.za0().t2_1) {
      case 1:
        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s = $this.ce5_1.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          var tmp0_safe_receiver = Companion_instance_2.de5(node, element);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            if (tmp0_safe_receiver.oe4()) {
              result.fe4(tmp0_safe_receiver.ge4_1);
            }
          }
        }

        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s_0 = node.ke4().p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element_0 == null) && !node.ne4(element_0)) {
            scan_1($this, node.te4(element_0, false), result);
          }
        }

        break;
      case 0:
        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s_1 = node.ie4().p();
        while (_iterator__ex2g4s_1.q()) {
          var element_1 = _iterator__ex2g4s_1.r();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element_1 == null) && !node.ne4(element_1)) {
            scan_1($this, node.te4(element_1, false), result);
          }
        }

        break;
      default:
        break;
    }
  }
  function DeepScanObjectAccessorToken(targetKeys) {
    this.ce5_1 = targetKeys;
  }
  protoOf(DeepScanObjectAccessorToken).we4 = function (node) {
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
    // Inline function 'kotlin.with' call
    var $this$with = new JsonArrayBuilder();
    scan_1(this, node, $this$with);
    var tmp$ret$3 = node.se4($this$with.ee4_1);
    return node.te4(tmp$ret$3, true);
  };
  protoOf(DeepScanObjectAccessorToken).toString = function () {
    return 'DeepScanObjectAccessorToken(targetKeys=' + toString(this.ce5_1) + ')';
  };
  protoOf(DeepScanObjectAccessorToken).hashCode = function () {
    return hashCode(this.ce5_1);
  };
  protoOf(DeepScanObjectAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeepScanObjectAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof DeepScanObjectAccessorToken ? other : THROW_CCE();
    if (!equals(this.ce5_1, tmp0_other_with_cast.ce5_1))
      return false;
    return true;
  };
  function scan_2($this, node, result) {
    if (node.he4_1) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = node.ie4().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.with' call
        // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
        if (!(element == null) && !node.ne4(element)) {
          scan_2(DeepScanWildcardToken_instance, node.te4(element, false), result);
        }
      }
    } else {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonType.isArrayOrObject' call
      var this_0 = node.za0();
      if (this_0.equals(JsonType_Array_getInstance()) || this_0.equals(JsonType_Object_getInstance())) {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = WildcardToken_instance.we4(node).ie4().p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element_0 == null) && !node.ne4(element_0)) {
            result.fe4(element_0);
          }
        }
        switch (node.za0().t2_1) {
          case 0:
            // Inline function 'kotlin.collections.forEach' call

            var _iterator__ex2g4s_1 = node.ie4().p();
            while (_iterator__ex2g4s_1.q()) {
              var element_1 = _iterator__ex2g4s_1.r();
              // Inline function 'kotlin.with' call
              // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
              if (!(element_1 == null) && !node.ne4(element_1)) {
                scan_2(DeepScanWildcardToken_instance, node.te4(element_1, false), result);
              }
            }

            break;
          case 1:
            // Inline function 'kotlin.collections.forEach' call

            var _iterator__ex2g4s_2 = node.ke4().p();
            while (_iterator__ex2g4s_2.q()) {
              var element_2 = _iterator__ex2g4s_2.r();
              // Inline function 'kotlin.with' call
              // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
              if (!(element_2 == null) && !node.ne4(element_2)) {
                scan_2(DeepScanWildcardToken_instance, node.te4(element_2, false), result);
              }
            }

            break;
          default:
            break;
        }
      }
    }
  }
  function DeepScanWildcardToken() {
  }
  protoOf(DeepScanWildcardToken).we4 = function (node) {
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
    // Inline function 'kotlin.with' call
    var $this$with = new JsonArrayBuilder();
    scan_2(DeepScanWildcardToken_instance, node, $this$with);
    var tmp$ret$3 = node.se4($this$with.ee4_1);
    return node.te4(tmp$ret$3, true);
  };
  protoOf(DeepScanWildcardToken).toString = function () {
    return 'DeepScanWildcardToken';
  };
  protoOf(DeepScanWildcardToken).hashCode = function () {
    return 1331663044;
  };
  protoOf(DeepScanWildcardToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeepScanWildcardToken))
      return false;
    other instanceof DeepScanWildcardToken || THROW_CCE();
    return true;
  };
  var DeepScanWildcardToken_instance;
  function DeepScanWildcardToken_getInstance() {
    return DeepScanWildcardToken_instance;
  }
  function MultiArrayAccessorToken(indices) {
    this.ye3_1 = indices;
  }
  protoOf(MultiArrayAccessorToken).we4 = function (node) {
    var tmp;
    if (node.he4_1) {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
      // Inline function 'kotlin.with' call
      var $this$with = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = node.ie4().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = this.ye3_1.p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          var tmp0_safe_receiver = Companion_instance_1.ve4(node.te4(element, false), element_0);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            if (tmp0_safe_receiver.oe4()) {
              $this$with.fe4(tmp0_safe_receiver.ge4_1);
            }
          }
        }
      }
      tmp = node.se4($this$with.ee4_1);
    } else {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
      // Inline function 'kotlin.with' call
      var $this$with_0 = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = this.ye3_1.p();
      while (_iterator__ex2g4s_1.q()) {
        var element_1 = _iterator__ex2g4s_1.r();
        var tmp0_safe_receiver_0 = Companion_instance_1.ve4(node, element_1);
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          if (tmp0_safe_receiver_0.oe4()) {
            $this$with_0.fe4(tmp0_safe_receiver_0.ge4_1);
          }
        }
      }
      tmp = node.se4($this$with_0.ee4_1);
    }
    var result = tmp;
    return node.te4(result, true);
  };
  protoOf(MultiArrayAccessorToken).toString = function () {
    return 'MultiArrayAccessorToken(indices=' + toString(this.ye3_1) + ')';
  };
  protoOf(MultiArrayAccessorToken).hashCode = function () {
    return hashCode(this.ye3_1);
  };
  protoOf(MultiArrayAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MultiArrayAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof MultiArrayAccessorToken ? other : THROW_CCE();
    if (!equals(this.ye3_1, tmp0_other_with_cast.ye3_1))
      return false;
    return true;
  };
  function MultiObjectAccessorToken(keys) {
    this.ae4_1 = keys;
  }
  protoOf(MultiObjectAccessorToken).we4 = function (node) {
    var tmp;
    if (node.za0().equals(JsonType_Object_getInstance())) {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
      // Inline function 'kotlin.with' call
      var $this$with = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = this.ae4_1.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.with' call
        var tmp0_safe_receiver = node.qe4(node.je4(), element);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$with.fe4(tmp0_safe_receiver);
        }
      }
      var tmp$ret$9 = node.se4($this$with.ee4_1);
      tmp = node.te4(tmp$ret$9, true);
    } else if (node.za0().equals(JsonType_Array_getInstance()) && node.he4_1) {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
      // Inline function 'kotlin.with' call
      var $this$with_0 = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = node.ie4().p();
      while (_iterator__ex2g4s_0.q()) {
        var element_0 = _iterator__ex2g4s_0.r();
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = this.ae4_1.p();
        while (_iterator__ex2g4s_1.q()) {
          var element_1 = _iterator__ex2g4s_1.r();
          var tmp0_safe_receiver_0 = Companion_instance_2.de5(node.te4(element_0, false), element_1);
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            if (tmp0_safe_receiver_0.oe4()) {
              $this$with_0.fe4(tmp0_safe_receiver_0.ge4_1);
            }
          }
        }
      }
      var tmp$ret$19 = node.se4($this$with_0.ee4_1);
      tmp = node.te4(tmp$ret$19, true);
    } else {
      tmp = node.te4(node.me4(), true);
    }
    return tmp;
  };
  protoOf(MultiObjectAccessorToken).toString = function () {
    return 'MultiObjectAccessorToken(keys=' + toString(this.ae4_1) + ')';
  };
  protoOf(MultiObjectAccessorToken).hashCode = function () {
    return hashCode(this.ae4_1);
  };
  protoOf(MultiObjectAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MultiObjectAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof MultiObjectAccessorToken ? other : THROW_CCE();
    if (!equals(this.ae4_1, tmp0_other_with_cast.ae4_1))
      return false;
    return true;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).de5 = function (node, key) {
    var tmp;
    if (node.za0().equals(JsonType_Object_getInstance())) {
      // Inline function 'kotlin.with' call
      var tmp0_safe_receiver = node.qe4(node.je4(), key);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = node.te4(tmp0_safe_receiver, false);
      }
      tmp = tmp_0;
    } else if (node.za0().equals(JsonType_Array_getInstance()) && node.he4_1) {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
      // Inline function 'kotlin.with' call
      var $this$with = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = node.ie4().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.with' call
        var $this$with_0 = node.ue4(element);
        if ($this$with_0.za0().equals(JsonType_Object_getInstance())) {
          var tmp0_safe_receiver_0 = $this$with_0.qe4($this$with_0.je4(), key);
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            $this$with.fe4(tmp0_safe_receiver_0);
          }
        }
      }
      var tmp$ret$13 = node.se4($this$with.ee4_1);
      tmp = node.te4(tmp$ret$13, true);
    } else {
      tmp = null;
    }
    return tmp;
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function ObjectAccessorToken(key) {
    this.be4_1 = key;
  }
  protoOf(ObjectAccessorToken).we4 = function (node) {
    return Companion_instance_2.de5(node, this.be4_1);
  };
  protoOf(ObjectAccessorToken).toString = function () {
    return 'ObjectAccessorToken(key=' + this.be4_1 + ')';
  };
  protoOf(ObjectAccessorToken).hashCode = function () {
    return getStringHashCode(this.be4_1);
  };
  protoOf(ObjectAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ObjectAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof ObjectAccessorToken ? other : THROW_CCE();
    if (!(this.be4_1 === tmp0_other_with_cast.be4_1))
      return false;
    return true;
  };
  function WildcardToken() {
  }
  protoOf(WildcardToken).we4 = function (node) {
    var tmp;
    switch (node.za0().t2_1) {
      case 1:
        // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call

        // Inline function 'kotlin.with' call

        var $this$with = new JsonArrayBuilder();
        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s = node.ke4().p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element == null) && !node.ne4(element)) {
            $this$with.fe4(element);
          }
        }

        var tmp$ret$8 = node.se4($this$with.ee4_1);
        tmp = node.te4(tmp$ret$8, true);
        break;
      case 0:
        var tmp_0;
        if (!node.he4_1) {
          tmp_0 = node.ue4(VOID, true);
        } else {
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
          // Inline function 'kotlin.with' call
          var $this$with_0 = new JsonArrayBuilder();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_0 = node.ie4().p();
          while (_iterator__ex2g4s_0.q()) {
            var element_0 = _iterator__ex2g4s_0.r();
            var elementNode = node.ue4(element_0);
            switch (elementNode.za0().t2_1) {
              case 1:
                // Inline function 'kotlin.collections.forEach' call

                var _iterator__ex2g4s_1 = elementNode.ke4().p();
                while (_iterator__ex2g4s_1.q()) {
                  var element_1 = _iterator__ex2g4s_1.r();
                  // Inline function 'kotlin.with' call
                  // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
                  if (!(element_1 == null) && !elementNode.ne4(element_1)) {
                    $this$with_0.fe4(element_1);
                  }
                }

                break;
              case 0:
                // Inline function 'kotlin.collections.forEach' call

                var _iterator__ex2g4s_2 = elementNode.ie4().p();
                while (_iterator__ex2g4s_2.q()) {
                  var element_2 = _iterator__ex2g4s_2.r();
                  // Inline function 'kotlin.with' call
                  // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
                  if (!(element_2 == null) && !elementNode.ne4(element_2)) {
                    $this$with_0.fe4(element_2);
                  }
                }

                break;
              default:
                break;
            }
          }
          var tmp$ret$24 = node.se4($this$with_0.ee4_1);
          tmp_0 = node.te4(tmp$ret$24, true);
        }

        tmp = tmp_0;
        break;
      default:
        tmp = node.ue4(VOID, false);
        break;
    }
    return tmp;
  };
  protoOf(WildcardToken).toString = function () {
    return 'WildcardToken';
  };
  protoOf(WildcardToken).hashCode = function () {
    return -7919155;
  };
  protoOf(WildcardToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WildcardToken))
      return false;
    other instanceof WildcardToken || THROW_CCE();
    return true;
  };
  var WildcardToken_instance;
  function WildcardToken_getInstance() {
    return WildcardToken_instance;
  }
  //region block: init
  Companion_instance = new Companion();
  PathCompiler_instance = new PathCompiler();
  Companion_instance_1 = new Companion_1();
  DeepScanWildcardToken_instance = new DeepScanWildcardToken();
  Companion_instance_2 = new Companion_2();
  WildcardToken_instance = new WildcardToken();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = JsonNode;
  _.$_$.b = ArrayAccessorToken;
  _.$_$.c = ObjectAccessorToken;
  _.$_$.d = WildcardToken;
  _.$_$.e = JsonPath;
  _.$_$.f = JsonType_Array_getInstance;
  _.$_$.g = JsonType_Null_getInstance;
  _.$_$.h = JsonType_Object_getInstance;
  _.$_$.i = JsonType_Primitive_getInstance;
  _.$_$.j = _JsonPath___get_tokens__impl__ney223;
  _.$_$.k = Companion_instance;
  _.$_$.l = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=jsonpathkt-jsonpath-core.js.map
