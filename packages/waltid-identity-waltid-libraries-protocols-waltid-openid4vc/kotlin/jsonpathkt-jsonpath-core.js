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
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  var isCharSequence = kotlin_kotlin.$_$.jd;
  var trim = kotlin_kotlin.$_$.ni;
  var toString = kotlin_kotlin.$_$.ge;
  var protoOf = kotlin_kotlin.$_$.ce;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zc;
  var hashCode = kotlin_kotlin.$_$.xc;
  var equals = kotlin_kotlin.$_$.sc;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var listOf = kotlin_kotlin.$_$.r9;
  var charSequenceGet = kotlin_kotlin.$_$.nc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var Char = kotlin_kotlin.$_$.vi;
  var isBlank = kotlin_kotlin.$_$.jg;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r1;
  var firstOrNull = kotlin_kotlin.$_$.bg;
  var getOrNull = kotlin_kotlin.$_$.dg;
  var charSequenceLength = kotlin_kotlin.$_$.oc;
  var toList = kotlin_kotlin.$_$.wa;
  var toString_0 = kotlin_kotlin.$_$.u3;
  var isDigit = kotlin_kotlin.$_$.kg;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var toInt = kotlin_kotlin.$_$.yh;
  var IntRange = kotlin_kotlin.$_$.me;
  var firstOrNull_0 = kotlin_kotlin.$_$.q8;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  var VOID = kotlin_kotlin.$_$.j;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var getOrNull_0 = kotlin_kotlin.$_$.x8;
  var Enum = kotlin_kotlin.$_$.aj;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
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
  protoOf(Companion).xe3 = function (path) {
    var tmp = PathCompiler_instance;
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString(trim(isCharSequence(path) ? path : THROW_CCE()));
    return _JsonPath___init__impl__q1tjys(tmp.gcn(tmp$ret$0));
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
    var tmp0_other_with_cast = other instanceof JsonPath ? other.ye3_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function JsonPath(tokens) {
    this.ye3_1 = tokens;
  }
  protoOf(JsonPath).toString = function () {
    return JsonPath__toString_impl_t2gpp0(this.ye3_1);
  };
  protoOf(JsonPath).hashCode = function () {
    return JsonPath__hashCode_impl_7basw5(this.ye3_1);
  };
  protoOf(JsonPath).equals = function (other) {
    return JsonPath__equals_impl_ph5vof(this.ye3_1, other);
  };
  function compile$resetForNextToken(isDeepScan, isWildcard, keyBuilder) {
    isDeepScan._v = false;
    isWildcard._v = false;
    keyBuilder.fe();
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
    keyBuilder.fe();
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
  protoOf(PathCompiler).gcn = function (path) {
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
        var closingBracketIndex = this.ze3(path, i);
        // Inline function 'kotlin.require' call
        if (!(closingBracketIndex > (i + 1 | 0))) {
          var message_0 = 'Expecting closing array bracket with a value inside';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        var token = this.ae4(path, i, closingBracketIndex);
        if (isDeepScan._v) {
          var tmp_6;
          if (token instanceof WildcardToken) {
            tmp_6 = DeepScanWildcardToken_instance;
          } else {
            if (token instanceof ObjectAccessorToken) {
              tmp_6 = new DeepScanObjectAccessorToken(listOf(token.he4_1));
            } else {
              if (token instanceof MultiObjectAccessorToken) {
                tmp_6 = new DeepScanObjectAccessorToken(token.ge4_1);
              } else {
                if (token instanceof ArrayAccessorToken) {
                  tmp_6 = new DeepScanArrayAccessorToken(listOf(token.fe4_1));
                } else {
                  if (token instanceof MultiArrayAccessorToken) {
                    tmp_6 = new DeepScanArrayAccessorToken(token.ee4_1);
                  } else {
                    if (token instanceof ArrayLengthBasedRangeAccessorToken) {
                      tmp_6 = new DeepScanLengthBasedArrayAccessorToken(token.be4_1, token.ce4_1, token.de4_1);
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
        keyBuilder.p(c);
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
  protoOf(PathCompiler).ze3 = function (path, openingIndex) {
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
  protoOf(PathCompiler).ae4 = function (path, openingIndex, closingIndex) {
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
          keyBuilder.p(nextChar);
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
        keyBuilder.p(c);
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
      if (keys.t() > 1) {
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
        var start = toInt(keys.v(0), 10);
        var end = toInt(keys.v(1), 10);
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
        var end_0 = toInt(keys.v(0), 10);
        var tmp_5;
        if (end_0 < 0) {
          tmp_5 = new ArrayLengthBasedRangeAccessorToken(0, null, end_0);
        } else {
          tmp_5 = new MultiArrayAccessorToken(toList(new IntRange(0, end_0 - 1 | 0)));
        }
        tmp_3 = tmp_5;
      } else if (hasEndColon) {
        var start_0 = toInt(keys.v(0), 10);
        tmp_3 = new ArrayLengthBasedRangeAccessorToken(start_0);
      } else if (keys.t() === 1) {
        tmp_3 = new ArrayAccessorToken(toInt(keys.v(0), 10));
      } else if (keys.t() > 1) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(keys, 10));
        var _iterator__ex2g4s = keys.q();
        while (_iterator__ex2g4s.r()) {
          var item = _iterator__ex2g4s.s();
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
    this.ie4_1 = new ResolutionOptions();
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
    this.je4_1 = wrapSingleValue;
  }
  protoOf(ResolutionOptions).toString = function () {
    return 'ResolutionOptions(wrapSingleValue=' + this.je4_1 + ')';
  };
  protoOf(ResolutionOptions).hashCode = function () {
    return getBooleanHashCode(this.je4_1);
  };
  protoOf(ResolutionOptions).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ResolutionOptions))
      return false;
    var tmp0_other_with_cast = other instanceof ResolutionOptions ? other : THROW_CCE();
    if (!(this.je4_1 === tmp0_other_with_cast.je4_1))
      return false;
    return true;
  };
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.ke4_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).le4 = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.ke4_1.n(element);
  };
  function JsonNode(element, isWildcardScope) {
    this.me4_1 = element;
    this.ne4_1 = isWildcardScope;
  }
  protoOf(JsonNode).ve4 = function (_this__u8e3s4, index) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = getOrNull_0(_this__u8e3s4, index);
    var tmp;
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
    if (!(this_0 == null) && !this.te4(this_0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(JsonNode).we4 = function (_this__u8e3s4, key) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = _this__u8e3s4.n2(key);
    var tmp;
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
    if (!(this_0 == null) && !this.te4(this_0)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(JsonNode).ae5 = function (element, isWildcardScope, $super) {
    element = element === VOID ? this.me4_1 : element;
    isWildcardScope = isWildcardScope === VOID ? this.ne4_1 : isWildcardScope;
    return $super === VOID ? this.ze4(element, isWildcardScope) : $super.ze4.call(this, element, isWildcardScope);
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
    var array = _this__u8e3s4.oe4();
    if (index < 0) {
      var indexFromLast = array.t() + index | 0;
      if (indexFromLast >= 0) {
        return _this__u8e3s4.ve4(array, indexFromLast);
      }
    }
    return _this__u8e3s4.ve4(array, index);
  }
  function Companion_1() {
  }
  protoOf(Companion_1).be5 = function (node, index) {
    var tmp;
    switch (node.fa1().u2_1) {
      case 0:
        var tmp_0;
        if (node.ne4_1) {
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
          // Inline function 'kotlin.with' call
          var $this$with = new JsonArrayBuilder();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s = node.oe4().q();
          while (_iterator__ex2g4s.r()) {
            var element = _iterator__ex2g4s.s();
            var tmp0_safe_receiver = Companion_instance_1.be5(node.ze4(element, false), index);
            if (tmp0_safe_receiver == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              if (tmp0_safe_receiver.ue4()) {
                $this$with.le4(tmp0_safe_receiver.me4_1);
              }
            }
          }
          var tmp$ret$7 = node.ye4($this$with.ke4_1);
          tmp_0 = node.ze4(tmp$ret$7, true);
        } else {
          var tmp1_safe_receiver = readValueAtIndex(this, node, index);
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_1 = node.ze4(tmp1_safe_receiver, false);
          }
          tmp_0 = tmp_1;
        }

        tmp = tmp_0;
        break;
      case 2:
        tmp = null;
        break;
      case 3:
        var str = node.re4();
        var tmp_2;
        if (str == null) {
          tmp_2 = null;
        } else {
          var tmp_3;
          if (index < 0) {
            var indexFromLast = str.length + index | 0;
            var tmp_4;
            if (indexFromLast >= 0 && indexFromLast < str.length) {
              tmp_4 = node.ze4(node.xe4(toString_0(charSequenceGet(str, indexFromLast))), false);
            } else {
              tmp_4 = null;
            }
            tmp_3 = tmp_4;
          } else if (index < str.length) {
            tmp_3 = node.ze4(node.xe4(toString_0(charSequenceGet(str, index))), false);
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
    this.fe4_1 = index;
  }
  protoOf(ArrayAccessorToken).ce5 = function (node) {
    return Companion_instance_1.be5(node, this.fe4_1);
  };
  protoOf(ArrayAccessorToken).toString = function () {
    return 'ArrayAccessorToken(index=' + this.fe4_1 + ')';
  };
  protoOf(ArrayAccessorToken).hashCode = function () {
    return this.fe4_1;
  };
  protoOf(ArrayAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArrayAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof ArrayAccessorToken ? other : THROW_CCE();
    if (!(this.fe4_1 === tmp0_other_with_cast.fe4_1))
      return false;
    return true;
  };
  function ArrayLengthBasedRangeAccessorToken(startIndex, endIndex, offsetFromEnd) {
    endIndex = endIndex === VOID ? null : endIndex;
    offsetFromEnd = offsetFromEnd === VOID ? 0 : offsetFromEnd;
    this.be4_1 = startIndex;
    this.ce4_1 = endIndex;
    this.de4_1 = offsetFromEnd;
  }
  protoOf(ArrayLengthBasedRangeAccessorToken).ce5 = function (node) {
    var tmp;
    if (node.fa1().u2_1 === 0) {
      var tmp_0;
      if (node.ne4_1) {
        // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
        // Inline function 'kotlin.with' call
        var $this$with = new JsonArrayBuilder();
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = node.oe4().q();
        while (_iterator__ex2g4s.r()) {
          var element = _iterator__ex2g4s.s();
          var nextNode = this.ce5(node.ze4(element, false));
          if (nextNode.fa1().u2_1 === 0) {
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_0 = nextNode.oe4().q();
            while (_iterator__ex2g4s_0.r()) {
              var element_0 = _iterator__ex2g4s_0.s();
              $this$with.le4(element_0);
            }
          } else if (nextNode.ue4()) {
            $this$with.le4(nextNode.me4_1);
          }
        }
        var tmp$ret$7 = node.ye4($this$with.ke4_1);
        return node.ze4(tmp$ret$7, true);
      } else {
        tmp_0 = this.de5(node);
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    var token = tmp;
    var tmp2_elvis_lhs = token == null ? null : token.ce5(node.ae5(VOID, false));
    return tmp2_elvis_lhs == null ? node.ze4(node.se4(), true) : tmp2_elvis_lhs;
  };
  protoOf(ArrayLengthBasedRangeAccessorToken).de5 = function (node) {
    var array = node.oe4();
    var tmp;
    if (this.be4_1 < 0) {
      var start = array.t() + this.be4_1 | 0;
      tmp = start < 0 ? 0 : start;
    } else {
      tmp = this.be4_1;
    }
    var start_0 = tmp;
    var tmp_0;
    if (!(this.ce4_1 == null)) {
      tmp_0 = this.ce4_1 - 1 | 0;
    } else {
      tmp_0 = (array.t() + this.de4_1 | 0) - 1 | 0;
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
    return 'ArrayLengthBasedRangeAccessorToken(startIndex=' + this.be4_1 + ', endIndex=' + this.ce4_1 + ', offsetFromEnd=' + this.de4_1 + ')';
  };
  protoOf(ArrayLengthBasedRangeAccessorToken).hashCode = function () {
    var result = this.be4_1;
    result = imul(result, 31) + (this.ce4_1 == null ? 0 : this.ce4_1) | 0;
    result = imul(result, 31) + this.de4_1 | 0;
    return result;
  };
  protoOf(ArrayLengthBasedRangeAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ArrayLengthBasedRangeAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof ArrayLengthBasedRangeAccessorToken ? other : THROW_CCE();
    if (!(this.be4_1 === tmp0_other_with_cast.be4_1))
      return false;
    if (!(this.ce4_1 == tmp0_other_with_cast.ce4_1))
      return false;
    if (!(this.de4_1 === tmp0_other_with_cast.de4_1))
      return false;
    return true;
  };
  function scan($this, node, result) {
    switch (node.fa1().u2_1) {
      case 1:
        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s = node.qe4().q();
        while (_iterator__ex2g4s.r()) {
          var element = _iterator__ex2g4s.s();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element == null) && !node.te4(element)) {
            scan($this, node.ze4(element, false), result);
          }
        }

        break;
      case 0:
        if (node.ne4_1) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_0 = node.oe4().q();
          while (_iterator__ex2g4s_0.r()) {
            var element_0 = _iterator__ex2g4s_0.s();
            // Inline function 'kotlin.with' call
            // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
            if (!(element_0 == null) && !node.te4(element_0)) {
              scan($this, node.ze4(element_0, false), result);
            }
          }
        } else {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_1 = $this.ee5_1.q();
          while (_iterator__ex2g4s_1.r()) {
            var element_1 = _iterator__ex2g4s_1.s();
            var tmp0_safe_receiver = (new ArrayAccessorToken(element_1)).ce5(node);
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.me4_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              // Inline function 'kotlin.let' call
              // Inline function 'kotlin.with' call
              // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
              if (!(tmp1_safe_receiver == null) && !node.te4(tmp1_safe_receiver)) {
                result.le4(tmp1_safe_receiver);
              }
            }
          }
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = node.oe4().q();
          while (_iterator__ex2g4s_2.r()) {
            var element_2 = _iterator__ex2g4s_2.s();
            // Inline function 'kotlin.with' call
            // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
            if (!(element_2 == null) && !node.te4(element_2)) {
              scan($this, node.ze4(element_2, false), result);
            }
          }
        }

        break;
      default:
        break;
    }
  }
  function DeepScanArrayAccessorToken(indices) {
    this.ee5_1 = indices;
  }
  protoOf(DeepScanArrayAccessorToken).ce5 = function (node) {
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
    // Inline function 'kotlin.with' call
    var $this$with = new JsonArrayBuilder();
    scan(this, node, $this$with);
    var tmp$ret$3 = node.ye4($this$with.ke4_1);
    return node.ze4(tmp$ret$3, true);
  };
  protoOf(DeepScanArrayAccessorToken).toString = function () {
    return 'DeepScanArrayAccessorToken(indices=' + toString(this.ee5_1) + ')';
  };
  protoOf(DeepScanArrayAccessorToken).hashCode = function () {
    return hashCode(this.ee5_1);
  };
  protoOf(DeepScanArrayAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeepScanArrayAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof DeepScanArrayAccessorToken ? other : THROW_CCE();
    if (!equals(this.ee5_1, tmp0_other_with_cast.ee5_1))
      return false;
    return true;
  };
  function scan_0($this, node, result) {
    switch (node.fa1().u2_1) {
      case 1:
        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s = node.qe4().q();
        while (_iterator__ex2g4s.r()) {
          var element = _iterator__ex2g4s.s();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element == null) && !node.te4(element)) {
            scan_0($this, node.ze4(element, false), result);
          }
        }

        break;
      case 0:
        if (node.ne4_1) {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_0 = node.oe4().q();
          while (_iterator__ex2g4s_0.r()) {
            var element_0 = _iterator__ex2g4s_0.s();
            // Inline function 'kotlin.with' call
            // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
            if (!(element_0 == null) && !node.te4(element_0)) {
              scan_0($this, node.ze4(element_0, false), result);
            }
          }
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_1 = (new ArrayLengthBasedRangeAccessorToken($this.fe5_1, $this.ge5_1, $this.he5_1)).ce5(node).oe4().q();
          while (_iterator__ex2g4s_1.r()) {
            var element_1 = _iterator__ex2g4s_1.s();
            result.le4(element_1);
          }
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_2 = node.oe4().q();
          while (_iterator__ex2g4s_2.r()) {
            var element_2 = _iterator__ex2g4s_2.s();
            // Inline function 'kotlin.with' call
            // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
            if (!(element_2 == null) && !node.te4(element_2)) {
              scan_0($this, node.ze4(element_2, false), result);
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
    this.fe5_1 = startIndex;
    this.ge5_1 = endIndex;
    this.he5_1 = offsetFromEnd;
  }
  protoOf(DeepScanLengthBasedArrayAccessorToken).ce5 = function (node) {
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
    // Inline function 'kotlin.with' call
    var $this$with = new JsonArrayBuilder();
    scan_0(this, node, $this$with);
    var tmp$ret$3 = node.ye4($this$with.ke4_1);
    return node.ze4(tmp$ret$3, true);
  };
  protoOf(DeepScanLengthBasedArrayAccessorToken).toString = function () {
    return 'DeepScanLengthBasedArrayAccessorToken(startIndex=' + this.fe5_1 + ', endIndex=' + this.ge5_1 + ', offsetFromEnd=' + this.he5_1 + ')';
  };
  protoOf(DeepScanLengthBasedArrayAccessorToken).hashCode = function () {
    var result = this.fe5_1;
    result = imul(result, 31) + (this.ge5_1 == null ? 0 : this.ge5_1) | 0;
    result = imul(result, 31) + this.he5_1 | 0;
    return result;
  };
  protoOf(DeepScanLengthBasedArrayAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeepScanLengthBasedArrayAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof DeepScanLengthBasedArrayAccessorToken ? other : THROW_CCE();
    if (!(this.fe5_1 === tmp0_other_with_cast.fe5_1))
      return false;
    if (!(this.ge5_1 == tmp0_other_with_cast.ge5_1))
      return false;
    if (!(this.he5_1 === tmp0_other_with_cast.he5_1))
      return false;
    return true;
  };
  function scan_1($this, node, result) {
    switch (node.fa1().u2_1) {
      case 1:
        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s = $this.ie5_1.q();
        while (_iterator__ex2g4s.r()) {
          var element = _iterator__ex2g4s.s();
          var tmp0_safe_receiver = Companion_instance_2.je5(node, element);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            if (tmp0_safe_receiver.ue4()) {
              result.le4(tmp0_safe_receiver.me4_1);
            }
          }
        }

        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s_0 = node.qe4().q();
        while (_iterator__ex2g4s_0.r()) {
          var element_0 = _iterator__ex2g4s_0.s();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element_0 == null) && !node.te4(element_0)) {
            scan_1($this, node.ze4(element_0, false), result);
          }
        }

        break;
      case 0:
        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s_1 = node.oe4().q();
        while (_iterator__ex2g4s_1.r()) {
          var element_1 = _iterator__ex2g4s_1.s();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element_1 == null) && !node.te4(element_1)) {
            scan_1($this, node.ze4(element_1, false), result);
          }
        }

        break;
      default:
        break;
    }
  }
  function DeepScanObjectAccessorToken(targetKeys) {
    this.ie5_1 = targetKeys;
  }
  protoOf(DeepScanObjectAccessorToken).ce5 = function (node) {
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
    // Inline function 'kotlin.with' call
    var $this$with = new JsonArrayBuilder();
    scan_1(this, node, $this$with);
    var tmp$ret$3 = node.ye4($this$with.ke4_1);
    return node.ze4(tmp$ret$3, true);
  };
  protoOf(DeepScanObjectAccessorToken).toString = function () {
    return 'DeepScanObjectAccessorToken(targetKeys=' + toString(this.ie5_1) + ')';
  };
  protoOf(DeepScanObjectAccessorToken).hashCode = function () {
    return hashCode(this.ie5_1);
  };
  protoOf(DeepScanObjectAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeepScanObjectAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof DeepScanObjectAccessorToken ? other : THROW_CCE();
    if (!equals(this.ie5_1, tmp0_other_with_cast.ie5_1))
      return false;
    return true;
  };
  function scan_2($this, node, result) {
    if (node.ne4_1) {
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = node.oe4().q();
      while (_iterator__ex2g4s.r()) {
        var element = _iterator__ex2g4s.s();
        // Inline function 'kotlin.with' call
        // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
        if (!(element == null) && !node.te4(element)) {
          scan_2(DeepScanWildcardToken_instance, node.ze4(element, false), result);
        }
      }
    } else {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonType.isArrayOrObject' call
      var this_0 = node.fa1();
      if (this_0.equals(JsonType_Array_getInstance()) || this_0.equals(JsonType_Object_getInstance())) {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = WildcardToken_instance.ce5(node).oe4().q();
        while (_iterator__ex2g4s_0.r()) {
          var element_0 = _iterator__ex2g4s_0.s();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element_0 == null) && !node.te4(element_0)) {
            result.le4(element_0);
          }
        }
        switch (node.fa1().u2_1) {
          case 0:
            // Inline function 'kotlin.collections.forEach' call

            var _iterator__ex2g4s_1 = node.oe4().q();
            while (_iterator__ex2g4s_1.r()) {
              var element_1 = _iterator__ex2g4s_1.s();
              // Inline function 'kotlin.with' call
              // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
              if (!(element_1 == null) && !node.te4(element_1)) {
                scan_2(DeepScanWildcardToken_instance, node.ze4(element_1, false), result);
              }
            }

            break;
          case 1:
            // Inline function 'kotlin.collections.forEach' call

            var _iterator__ex2g4s_2 = node.qe4().q();
            while (_iterator__ex2g4s_2.r()) {
              var element_2 = _iterator__ex2g4s_2.s();
              // Inline function 'kotlin.with' call
              // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
              if (!(element_2 == null) && !node.te4(element_2)) {
                scan_2(DeepScanWildcardToken_instance, node.ze4(element_2, false), result);
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
  protoOf(DeepScanWildcardToken).ce5 = function (node) {
    // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
    // Inline function 'kotlin.with' call
    var $this$with = new JsonArrayBuilder();
    scan_2(DeepScanWildcardToken_instance, node, $this$with);
    var tmp$ret$3 = node.ye4($this$with.ke4_1);
    return node.ze4(tmp$ret$3, true);
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
    this.ee4_1 = indices;
  }
  protoOf(MultiArrayAccessorToken).ce5 = function (node) {
    var tmp;
    if (node.ne4_1) {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
      // Inline function 'kotlin.with' call
      var $this$with = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = node.oe4().q();
      while (_iterator__ex2g4s.r()) {
        var element = _iterator__ex2g4s.s();
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = this.ee4_1.q();
        while (_iterator__ex2g4s_0.r()) {
          var element_0 = _iterator__ex2g4s_0.s();
          var tmp0_safe_receiver = Companion_instance_1.be5(node.ze4(element, false), element_0);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            if (tmp0_safe_receiver.ue4()) {
              $this$with.le4(tmp0_safe_receiver.me4_1);
            }
          }
        }
      }
      tmp = node.ye4($this$with.ke4_1);
    } else {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
      // Inline function 'kotlin.with' call
      var $this$with_0 = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = this.ee4_1.q();
      while (_iterator__ex2g4s_1.r()) {
        var element_1 = _iterator__ex2g4s_1.s();
        var tmp0_safe_receiver_0 = Companion_instance_1.be5(node, element_1);
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          if (tmp0_safe_receiver_0.ue4()) {
            $this$with_0.le4(tmp0_safe_receiver_0.me4_1);
          }
        }
      }
      tmp = node.ye4($this$with_0.ke4_1);
    }
    var result = tmp;
    return node.ze4(result, true);
  };
  protoOf(MultiArrayAccessorToken).toString = function () {
    return 'MultiArrayAccessorToken(indices=' + toString(this.ee4_1) + ')';
  };
  protoOf(MultiArrayAccessorToken).hashCode = function () {
    return hashCode(this.ee4_1);
  };
  protoOf(MultiArrayAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MultiArrayAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof MultiArrayAccessorToken ? other : THROW_CCE();
    if (!equals(this.ee4_1, tmp0_other_with_cast.ee4_1))
      return false;
    return true;
  };
  function MultiObjectAccessorToken(keys) {
    this.ge4_1 = keys;
  }
  protoOf(MultiObjectAccessorToken).ce5 = function (node) {
    var tmp;
    if (node.fa1().equals(JsonType_Object_getInstance())) {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
      // Inline function 'kotlin.with' call
      var $this$with = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = this.ge4_1.q();
      while (_iterator__ex2g4s.r()) {
        var element = _iterator__ex2g4s.s();
        // Inline function 'kotlin.with' call
        var tmp0_safe_receiver = node.we4(node.pe4(), element);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          $this$with.le4(tmp0_safe_receiver);
        }
      }
      var tmp$ret$9 = node.ye4($this$with.ke4_1);
      tmp = node.ze4(tmp$ret$9, true);
    } else if (node.fa1().equals(JsonType_Array_getInstance()) && node.ne4_1) {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
      // Inline function 'kotlin.with' call
      var $this$with_0 = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = node.oe4().q();
      while (_iterator__ex2g4s_0.r()) {
        var element_0 = _iterator__ex2g4s_0.s();
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_1 = this.ge4_1.q();
        while (_iterator__ex2g4s_1.r()) {
          var element_1 = _iterator__ex2g4s_1.s();
          var tmp0_safe_receiver_0 = Companion_instance_2.je5(node.ze4(element_0, false), element_1);
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            if (tmp0_safe_receiver_0.ue4()) {
              $this$with_0.le4(tmp0_safe_receiver_0.me4_1);
            }
          }
        }
      }
      var tmp$ret$19 = node.ye4($this$with_0.ke4_1);
      tmp = node.ze4(tmp$ret$19, true);
    } else {
      tmp = node.ze4(node.se4(), true);
    }
    return tmp;
  };
  protoOf(MultiObjectAccessorToken).toString = function () {
    return 'MultiObjectAccessorToken(keys=' + toString(this.ge4_1) + ')';
  };
  protoOf(MultiObjectAccessorToken).hashCode = function () {
    return hashCode(this.ge4_1);
  };
  protoOf(MultiObjectAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MultiObjectAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof MultiObjectAccessorToken ? other : THROW_CCE();
    if (!equals(this.ge4_1, tmp0_other_with_cast.ge4_1))
      return false;
    return true;
  };
  function Companion_2() {
  }
  protoOf(Companion_2).je5 = function (node, key) {
    var tmp;
    if (node.fa1().equals(JsonType_Object_getInstance())) {
      // Inline function 'kotlin.with' call
      var tmp0_safe_receiver = node.we4(node.pe4(), key);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = node.ze4(tmp0_safe_receiver, false);
      }
      tmp = tmp_0;
    } else if (node.fa1().equals(JsonType_Array_getInstance()) && node.ne4_1) {
      // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
      // Inline function 'kotlin.with' call
      var $this$with = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = node.oe4().q();
      while (_iterator__ex2g4s.r()) {
        var element = _iterator__ex2g4s.s();
        // Inline function 'kotlin.with' call
        var $this$with_0 = node.ae5(element);
        if ($this$with_0.fa1().equals(JsonType_Object_getInstance())) {
          var tmp0_safe_receiver_0 = $this$with_0.we4($this$with_0.pe4(), key);
          if (tmp0_safe_receiver_0 == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            $this$with.le4(tmp0_safe_receiver_0);
          }
        }
      }
      var tmp$ret$13 = node.ye4($this$with.ke4_1);
      tmp = node.ze4(tmp$ret$13, true);
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
    this.he4_1 = key;
  }
  protoOf(ObjectAccessorToken).ce5 = function (node) {
    return Companion_instance_2.je5(node, this.he4_1);
  };
  protoOf(ObjectAccessorToken).toString = function () {
    return 'ObjectAccessorToken(key=' + this.he4_1 + ')';
  };
  protoOf(ObjectAccessorToken).hashCode = function () {
    return getStringHashCode(this.he4_1);
  };
  protoOf(ObjectAccessorToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ObjectAccessorToken))
      return false;
    var tmp0_other_with_cast = other instanceof ObjectAccessorToken ? other : THROW_CCE();
    if (!(this.he4_1 === tmp0_other_with_cast.he4_1))
      return false;
    return true;
  };
  function WildcardToken() {
  }
  protoOf(WildcardToken).ce5 = function (node) {
    var tmp;
    switch (node.fa1().u2_1) {
      case 1:
        // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call

        // Inline function 'kotlin.with' call

        var $this$with = new JsonArrayBuilder();
        // Inline function 'kotlin.collections.forEach' call

        var _iterator__ex2g4s = node.qe4().q();
        while (_iterator__ex2g4s.r()) {
          var element = _iterator__ex2g4s.s();
          // Inline function 'kotlin.with' call
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
          if (!(element == null) && !node.te4(element)) {
            $this$with.le4(element);
          }
        }

        var tmp$ret$8 = node.ye4($this$with.ke4_1);
        tmp = node.ze4(tmp$ret$8, true);
        break;
      case 0:
        var tmp_0;
        if (!node.ne4_1) {
          tmp_0 = node.ae5(VOID, true);
        } else {
          // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.buildJsonArray' call
          // Inline function 'kotlin.with' call
          var $this$with_0 = new JsonArrayBuilder();
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_0 = node.oe4().q();
          while (_iterator__ex2g4s_0.r()) {
            var element_0 = _iterator__ex2g4s_0.s();
            var elementNode = node.ae5(element_0);
            switch (elementNode.fa1().u2_1) {
              case 1:
                // Inline function 'kotlin.collections.forEach' call

                var _iterator__ex2g4s_1 = elementNode.qe4().q();
                while (_iterator__ex2g4s_1.r()) {
                  var element_1 = _iterator__ex2g4s_1.s();
                  // Inline function 'kotlin.with' call
                  // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
                  if (!(element_1 == null) && !elementNode.te4(element_1)) {
                    $this$with_0.le4(element_1);
                  }
                }

                break;
              case 0:
                // Inline function 'kotlin.collections.forEach' call

                var _iterator__ex2g4s_2 = elementNode.oe4().q();
                while (_iterator__ex2g4s_2.r()) {
                  var element_2 = _iterator__ex2g4s_2.s();
                  // Inline function 'kotlin.with' call
                  // Inline function 'com.nfeld.jsonpathkt.json.JsonNode.isNotNull' call
                  if (!(element_2 == null) && !elementNode.te4(element_2)) {
                    $this$with_0.le4(element_2);
                  }
                }

                break;
              default:
                break;
            }
          }
          var tmp$ret$24 = node.ye4($this$with_0.ke4_1);
          tmp_0 = node.ze4(tmp$ret$24, true);
        }

        tmp = tmp_0;
        break;
      default:
        tmp = node.ae5(VOID, false);
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
