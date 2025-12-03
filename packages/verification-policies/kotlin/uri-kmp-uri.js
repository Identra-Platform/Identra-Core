(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'uri-kmp-uri'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'uri-kmp-uri'.");
    }
    globalThis['uri-kmp-uri'] = factory(typeof globalThis['uri-kmp-uri'] === 'undefined' ? {} : globalThis['uri-kmp-uri'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var charArrayOf = kotlin_kotlin.$_$.kc;
  var concatToString = kotlin_kotlin.$_$.nf;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var AbstractList = kotlin_kotlin.$_$.m6;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var toString = kotlin_kotlin.$_$.fe;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var RandomAccess = kotlin_kotlin.$_$.b7;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var VOID = kotlin_kotlin.$_$.j;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ok;
  var arrayCopy = kotlin_kotlin.$_$.g7;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var equals = kotlin_kotlin.$_$.rc;
  var Companion_instance = kotlin_kotlin.$_$.g6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v3;
  var createFailure = kotlin_kotlin.$_$.bk;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.b4;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.y3;
  var compareTo = kotlin_kotlin.$_$.pc;
  var Comparable = kotlin_kotlin.$_$.ti;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var Char = kotlin_kotlin.$_$.si;
  var indexOf = kotlin_kotlin.$_$.fg;
  var lazy = kotlin_kotlin.$_$.jk;
  var decodeToString = kotlin_kotlin.$_$.sf;
  var toString_0 = kotlin_kotlin.$_$.u3;
  var charSequenceGet = kotlin_kotlin.$_$.mc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.r3;
  var setOf = kotlin_kotlin.$_$.ja;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r1;
  var encodeToByteArray = kotlin_kotlin.$_$.uf;
  var AssertionError_init_$Create$ = kotlin_kotlin.$_$.t1;
  var Exception = kotlin_kotlin.$_$.zi;
  var decodeToString_0 = kotlin_kotlin.$_$.rf;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  var toByte = kotlin_kotlin.$_$.ce;
  var KProperty1 = kotlin_kotlin.$_$.we;
  var getPropertyCallableRef = kotlin_kotlin.$_$.uc;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y1;
  var captureStack = kotlin_kotlin.$_$.jc;
  var defineProp = kotlin_kotlin.$_$.qc;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var startsWith = kotlin_kotlin.$_$.eh;
  var last = kotlin_kotlin.$_$.k9;
  var lastIndexOf = kotlin_kotlin.$_$.og;
  var toInt = kotlin_kotlin.$_$.vh;
  var NumberFormatException = kotlin_kotlin.$_$.gj;
  var isInterface = kotlin_kotlin.$_$.md;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var emptyList = kotlin_kotlin.$_$.k8;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(NotCachedHolder, 'NotCachedHolder');
  initMetadataForCompanion(Companion);
  initMetadataForClass(PathSegments, 'PathSegments', VOID, AbstractList, [AbstractList, RandomAccess]);
  initMetadataForClass(PathSegmentsBuilder, 'PathSegmentsBuilder', PathSegmentsBuilder);
  initMetadataForClass(Builder, 'Builder', Builder);
  initMetadataForCompanion(Companion_0);
  function get_isAbsolute() {
    return !this.kcf();
  }
  function compareTo_0(other) {
    return compareTo(toString(this), toString(other));
  }
  initMetadataForInterface(Uri, 'Uri', VOID, VOID, [Comparable]);
  initMetadataForClass(ByteBuffer, 'ByteBuffer');
  initMetadataForObject(UriCodec, 'UriCodec');
  initMetadataForClass(UriSyntaxException, 'UriSyntaxException', VOID, Exception);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(AbstractPart, 'AbstractPart');
  initMetadataForClass(Part, 'Part', VOID, AbstractPart);
  initMetadataForClass(EmptyPart, 'EmptyPart', VOID, Part);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(PathPart, 'PathPart', VOID, AbstractPart);
  initMetadataForClass(AbstractHierarchicalUri, 'AbstractHierarchicalUri', VOID, VOID, [Uri]);
  initMetadataForClass(HierarchicalUri, 'HierarchicalUri', VOID, AbstractHierarchicalUri);
  initMetadataForClass(OpaqueUri, 'OpaqueUri', VOID, VOID, [Uri]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(StringUri, 'StringUri', VOID, AbstractHierarchicalUri);
  //endregion
  function NotCachedHolder() {
    NotCachedHolder_instance = this;
    var tmp = this;
    // Inline function 'kotlin.charArrayOf' call
    var tmp$ret$0 = charArrayOf([_Char___init__impl__6a9atx(78), _Char___init__impl__6a9atx(79), _Char___init__impl__6a9atx(84), _Char___init__impl__6a9atx(32), _Char___init__impl__6a9atx(67), _Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(67), _Char___init__impl__6a9atx(72), _Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(68)]);
    tmp.zcd_1 = concatToString(tmp$ret$0);
  }
  var NotCachedHolder_instance;
  function NotCachedHolder_getInstance() {
    if (NotCachedHolder_instance == null)
      new NotCachedHolder();
    return NotCachedHolder_instance;
  }
  function Companion() {
    Companion_instance_0 = this;
    this.ace_1 = new PathSegments(null, 0);
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function PathSegments(segments, size) {
    Companion_getInstance();
    AbstractList.call(this);
    this.bce_1 = segments;
    this.cce_1 = size;
  }
  protoOf(PathSegments).s = function () {
    return this.cce_1;
  };
  protoOf(PathSegments).u = function (index) {
    if (index >= this.cce_1) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' should be less than ' + this.cce_1);
    }
    // Inline function 'kotlin.requireNotNull' call
    var tmp0 = this.bce_1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Required value was null.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
    return this.bce_1[index];
  };
  function _get_segments__2ewn9x($this) {
    var tmp = $this.dce_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('segments');
    }
  }
  function PathSegmentsBuilder() {
    this.ece_1 = 0;
  }
  protoOf(PathSegmentsBuilder).fce = function (segment) {
    if (!(this.dce_1 == null)) {
      if ((this.ece_1 + 1 | 0) === _get_segments__2ewn9x(this).length) {
        var tmp = 0;
        var tmp_0 = imul(_get_segments__2ewn9x(this).length, 2);
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_1 = Array(tmp_0);
        while (tmp < tmp_0) {
          tmp_1[tmp] = '';
          tmp = tmp + 1 | 0;
        }
        var expanded = tmp_1;
        var tmp1 = _get_segments__2ewn9x(this);
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = tmp1.length;
        arrayCopy(tmp1, expanded, 0, 0, endIndex);
        this.dce_1 = expanded;
      }
    } else {
      var tmp_2 = this;
      var tmp_3 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_4 = Array(4);
      while (tmp_3 < 4) {
        tmp_4[tmp_3] = '';
        tmp_3 = tmp_3 + 1 | 0;
      }
      tmp_2.dce_1 = tmp_4;
    }
    var tmp_5 = _get_segments__2ewn9x(this);
    var _unary__edvuaz = this.ece_1;
    this.ece_1 = _unary__edvuaz + 1 | 0;
    tmp_5[_unary__edvuaz] = segment;
  };
  protoOf(PathSegmentsBuilder).x2x = function () {
    return !(this.dce_1 == null) ? new PathSegments(_get_segments__2ewn9x(this), this.ece_1) : Companion_getInstance().ace_1;
  };
  function hasSchemeOrAuthority($this) {
    return !($this.gce_1 == null) || (!($this.ice_1 == null) && !($this.ice_1 === Companion_getInstance_2().mce_1));
  }
  function Builder() {
    this.gce_1 = null;
    this.hce_1 = null;
    this.ice_1 = null;
    this.jce_1 = null;
    this.kce_1 = null;
    this.lce_1 = null;
  }
  protoOf(Builder).oce = function (scheme) {
    // Inline function 'kotlin.apply' call
    this.gce_1 = scheme;
    return this;
  };
  protoOf(Builder).pce = function (opaquePart) {
    // Inline function 'kotlin.apply' call
    this.hce_1 = opaquePart;
    return this;
  };
  protoOf(Builder).qce = function (authority) {
    // Inline function 'kotlin.apply' call
    this.hce_1 = null;
    this.ice_1 = authority;
    return this;
  };
  protoOf(Builder).rce = function (path) {
    // Inline function 'kotlin.apply' call
    this.hce_1 = null;
    this.jce_1 = path;
    return this;
  };
  protoOf(Builder).sce = function (path) {
    return this.rce(Companion_getInstance_3().vce(path));
  };
  protoOf(Builder).wce = function (path) {
    return this.rce(Companion_getInstance_3().xce(path));
  };
  protoOf(Builder).yce = function (newSegment) {
    return this.rce(Companion_getInstance_3().zce(this.jce_1, newSegment));
  };
  protoOf(Builder).acf = function (newSegment) {
    return this.rce(Companion_getInstance_3().bcf(this.jce_1, newSegment));
  };
  protoOf(Builder).ccf = function (query) {
    // Inline function 'kotlin.apply' call
    this.hce_1 = null;
    this.kce_1 = query;
    return this;
  };
  protoOf(Builder).dcf = function (fragment) {
    // Inline function 'kotlin.apply' call
    this.lce_1 = fragment;
    return this;
  };
  protoOf(Builder).ecf = function (fragment) {
    return this.dcf(Companion_getInstance_2().vce(fragment));
  };
  protoOf(Builder).fcf = function (fragment) {
    return this.dcf(Companion_getInstance_2().xce(fragment));
  };
  protoOf(Builder).x2x = function () {
    var opaquePart = this.hce_1;
    var tmp;
    if (opaquePart == null) {
      var path = this.jce_1;
      if (path == null || equals(path, Companion_getInstance_3().tce_1)) {
        path = Companion_getInstance_3().uce_1;
      } else {
        if (hasSchemeOrAuthority(this)) {
          path = Companion_getInstance_3().gcf(path);
        }
      }
      tmp = new HierarchicalUri(this.gce_1, this.ice_1, path, this.kce_1, this.lce_1);
    } else {
      if (this.gce_1 == null) {
        throw UnsupportedOperationException_init_$Create$('An opaque URI must have a scheme.');
      }
      tmp = new OpaqueUri(this.gce_1, opaquePart, this.lce_1);
    }
    return tmp;
  };
  protoOf(Builder).toString = function () {
    return toString(this.x2x());
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.hcf_1 = "This isn't a hierarchical URI.";
    this.icf_1 = new HierarchicalUri(null, Companion_getInstance_2().mce_1, Companion_getInstance_3().uce_1, Companion_getInstance_2().mce_1, Companion_getInstance_2().mce_1);
  }
  protoOf(Companion_0).aq = function (uriString) {
    return new StringUri(uriString);
  };
  protoOf(Companion_0).jcf = function (uriString) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = new StringUri(uriString);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    // Inline function 'kotlin.Result.getOrNull' call
    var this_0 = tmp;
    var tmp_1;
    if (_Result___get_isFailure__impl__jpiriv(this_0)) {
      tmp_1 = null;
    } else {
      var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
      tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    }
    return tmp_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function Uri() {
  }
  function _get_buffer__tgqkad($this) {
    var tmp0 = $this.tcf_1;
    // Inline function 'kotlin.getValue' call
    buffer$factory();
    return tmp0.b1();
  }
  function UriCodec$ByteBuffer$buffer$delegate$lambda(this$0) {
    return function () {
      var tmp = 0;
      var tmp_0 = this$0.scf_1;
      var tmp_1 = new Int8Array(tmp_0);
      while (tmp < tmp_0) {
        tmp_1[tmp] = 0;
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function isAllowed($this, c, allow) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var progression = $this.vcf_1;
    var containsLower = progression.mm_1;
    if (c <= progression.nm_1 ? containsLower <= c : false) {
      tmp_2 = true;
    } else {
      var progression_0 = $this.xcf_1;
      var containsLower_0 = progression_0.mm_1;
      tmp_2 = c <= progression_0.nm_1 ? containsLower_0 <= c : false;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      var progression_1 = $this.zcf_1;
      var containsLower_1 = progression_1.mm_1;
      tmp_1 = c <= progression_1.nm_1 ? containsLower_1 <= c : false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = $this.acg_1.w(new Char(c));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(allow == null) && !(indexOf(allow, c) === -1));
    }
    return tmp;
  }
  function ByteBuffer(size) {
    this.scf_1 = size;
    var tmp = this;
    tmp.tcf_1 = lazy(UriCodec$ByteBuffer$buffer$delegate$lambda(this));
    this.ucf_1 = 0;
  }
  protoOf(ByteBuffer).i1l = function (byte) {
    var tmp = _get_buffer__tgqkad(this);
    var _unary__edvuaz = this.ucf_1;
    this.ucf_1 = _unary__edvuaz + 1 | 0;
    tmp[_unary__edvuaz] = byte;
  };
  protoOf(ByteBuffer).dcg = function () {
    var tmp;
    try {
      tmp = decodeToString(_get_buffer__tgqkad(this), 0, this.ucf_1, false);
    }finally {
      this.ucf_1 = 0;
    }
    return tmp;
  };
  function unexpectedCharacterException($this, uri, name, unexpected, index) {
    var nameString = name == null ? '' : ' in [' + name + ']';
    return new UriSyntaxException(uri, 'Unexpected character' + nameString + ': ' + toString_0(unexpected), index);
  }
  function getNextCharacter($this, uri, index, end, name) {
    if (index >= end) {
      var nameString = name == null ? '' : ' in [' + name + ']';
      throw new UriSyntaxException(uri, 'Unexpected end of string ' + nameString, index);
    }
    return charSequenceGet(uri, index);
  }
  function hexCharToValue($this, c) {
    var tmp;
    var progression = $this.zcf_1;
    var containsLower = progression.mm_1;
    if (c <= progression.nm_1 ? containsLower <= c : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(c);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else {
      var progression_0 = $this.wcf_1;
      var containsLower_0 = progression_0.mm_1;
      if (c <= progression_0.nm_1 ? containsLower_0 <= c : false) {
        // Inline function 'kotlin.code' call
        var tmp_1 = 10 + Char__toInt_impl_vasixd(c) | 0;
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(97);
        tmp = tmp_1 - Char__toInt_impl_vasixd(this_1) | 0;
      } else {
        var progression_1 = $this.ycf_1;
        var containsLower_1 = progression_1.mm_1;
        if (c <= progression_1.nm_1 ? containsLower_1 <= c : false) {
          // Inline function 'kotlin.code' call
          var tmp_2 = 10 + Char__toInt_impl_vasixd(c) | 0;
          // Inline function 'kotlin.code' call
          var this_2 = _Char___init__impl__6a9atx(65);
          tmp = tmp_2 - Char__toInt_impl_vasixd(this_2) | 0;
        } else {
          tmp = -1;
        }
      }
    }
    return tmp;
  }
  function UriCodec() {
    UriCodec_instance = this;
    this.vcf_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122));
    this.wcf_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(102));
    this.xcf_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90));
    this.ycf_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(70));
    this.zcf_1 = Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57));
    this.acg_1 = setOf([new Char(_Char___init__impl__6a9atx(95)), new Char(_Char___init__impl__6a9atx(45)), new Char(_Char___init__impl__6a9atx(33)), new Char(_Char___init__impl__6a9atx(46)), new Char(_Char___init__impl__6a9atx(126)), new Char(_Char___init__impl__6a9atx(39)), new Char(_Char___init__impl__6a9atx(40)), new Char(_Char___init__impl__6a9atx(41)), new Char(_Char___init__impl__6a9atx(42))]);
    var tmp = this;
    // Inline function 'kotlin.charArrayOf' call
    tmp.bcg_1 = charArrayOf([_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(49), _Char___init__impl__6a9atx(50), _Char___init__impl__6a9atx(51), _Char___init__impl__6a9atx(52), _Char___init__impl__6a9atx(53), _Char___init__impl__6a9atx(54), _Char___init__impl__6a9atx(55), _Char___init__impl__6a9atx(56), _Char___init__impl__6a9atx(57), _Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(66), _Char___init__impl__6a9atx(67), _Char___init__impl__6a9atx(68), _Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(70)]);
    this.ccg_1 = _Char___init__impl__6a9atx(65533);
  }
  protoOf(UriCodec).ecg = function (s) {
    return s == null ? null : this.fcg(s, null);
  };
  protoOf(UriCodec).gcg = function (s, allow) {
    return s == null ? null : this.fcg(s, allow);
  };
  protoOf(UriCodec).jc5 = function (s) {
    return this.fcg(s, null);
  };
  protoOf(UriCodec).fcg = function (s, allow) {
    var encoded = null;
    var oldLength = s.length;
    var current = 0;
    while (current < oldLength) {
      var nextToEncode = current;
      while (nextToEncode < oldLength && isAllowed(this, charSequenceGet(s, nextToEncode), allow)) {
        nextToEncode = nextToEncode + 1 | 0;
      }
      if (nextToEncode === oldLength) {
        var tmp;
        if (current === 0) {
          tmp = s;
        } else {
          // Inline function 'kotlin.requireNotNull' call
          var tmp0 = encoded;
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.requireNotNull' call
            if (tmp0 == null) {
              var message = 'Required value was null.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              tmp$ret$1 = tmp0;
              break $l$block;
            }
          }
          tmp$ret$1.xd(s, current, oldLength);
          tmp = encoded.toString();
        }
        return tmp;
      }
      if (encoded == null) {
        encoded = StringBuilder_init_$Create$();
      }
      if (nextToEncode > current) {
        encoded.xd(s, current, nextToEncode);
      }
      current = nextToEncode;
      var nextAllowed = current + 1 | 0;
      while (nextAllowed < oldLength && !isAllowed(this, charSequenceGet(s, nextAllowed), allow)) {
        nextAllowed = nextAllowed + 1 | 0;
      }
      var tmp2 = current;
      // Inline function 'kotlin.text.substring' call
      var endIndex = nextAllowed;
      // Inline function 'kotlin.js.asDynamic' call
      var toEncode = s.substring(tmp2, endIndex);
      try {
        var bytes = encodeToByteArray(toEncode);
        var bytesLength = bytes.length;
        var inductionVariable = 0;
        if (inductionVariable < bytesLength)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            encoded.z8(_Char___init__impl__6a9atx(37));
            encoded.z8(this.bcg_1[(bytes[i] & 240) >> 4]);
            encoded.z8(this.bcg_1[bytes[i] & 15]);
          }
           while (inductionVariable < bytesLength);
      } catch ($p) {
        if ($p instanceof Exception) {
          var e = $p;
          throw AssertionError_init_$Create$(e);
        } else {
          throw $p;
        }
      }
      current = nextAllowed;
    }
    decodeToString_0(new Int8Array(0));
    var tmp0_safe_receiver = encoded;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
    return tmp1_elvis_lhs == null ? s : tmp1_elvis_lhs;
  };
  protoOf(UriCodec).hcg = function (s, convertPlus, throwOnFailure) {
    return s == null ? null : this.icg(s, convertPlus, throwOnFailure);
  };
  protoOf(UriCodec).jcg = function (s, convertPlus, throwOnFailure, $super) {
    convertPlus = convertPlus === VOID ? false : convertPlus;
    throwOnFailure = throwOnFailure === VOID ? false : throwOnFailure;
    return $super === VOID ? this.hcg(s, convertPlus, throwOnFailure) : $super.hcg.call(this, s, convertPlus, throwOnFailure);
  };
  protoOf(UriCodec).icg = function (s, convertPlus, throwOnFailure) {
    var builder = StringBuilder_init_$Create$_0(s.length);
    // Inline function 'kotlin.apply' call
    var this_0 = new ByteBuffer(s.length);
    var i = 0;
    while (i < s.length) {
      var _unary__edvuaz = i;
      i = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(s, _unary__edvuaz);
      if (c === _Char___init__impl__6a9atx(43)) {
        UriCodec_getInstance();
        $l$block: {
          // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
          if (this_0.ucf_1 === 0) {
            break $l$block;
          }
          try {
            builder.y8(this_0.dcg());
          } catch ($p) {
            if ($p instanceof Exception) {
              var e = $p;
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(e);
              } else {
                builder.z8(_Char___init__impl__6a9atx(65533));
              }
            } else {
              throw $p;
            }
          }
        }
        builder.z8(convertPlus ? _Char___init__impl__6a9atx(32) : _Char___init__impl__6a9atx(43));
      } else if (c === _Char___init__impl__6a9atx(37)) {
        var hexValue = 0;
        var inductionVariable = 0;
        if (inductionVariable <= 1)
          $l$loop: do {
            var j = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var tmp;
            try {
              tmp = getNextCharacter(UriCodec_getInstance(), s, i, s.length, null);
            } catch ($p) {
              var tmp_0;
              if ($p instanceof UriSyntaxException) {
                var e_0 = $p;
                var tmp_1;
                if (throwOnFailure) {
                  throw IllegalArgumentException_init_$Create$_0(e_0);
                } else {
                  UriCodec_getInstance();
                  $l$block_0: {
                    // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
                    if (this_0.ucf_1 === 0) {
                      break $l$block_0;
                    }
                    try {
                      builder.y8(this_0.dcg());
                    } catch ($p) {
                      if ($p instanceof Exception) {
                        var e_1 = $p;
                        if (throwOnFailure) {
                          throw IllegalArgumentException_init_$Create$_0(e_1);
                        } else {
                          builder.z8(_Char___init__impl__6a9atx(65533));
                        }
                      } else {
                        throw $p;
                      }
                    }
                  }
                  builder.z8(_Char___init__impl__6a9atx(65533));
                  return builder.toString();
                }
              } else {
                throw $p;
              }
            }
            var nextC = tmp;
            i = i + 1 | 0;
            var newDigit = hexCharToValue(UriCodec_getInstance(), nextC);
            if (newDigit < 0) {
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(unexpectedCharacterException(UriCodec_getInstance(), s, null, nextC, i - 1 | 0));
              } else {
                UriCodec_getInstance();
                $l$block_1: {
                  // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
                  if (this_0.ucf_1 === 0) {
                    break $l$block_1;
                  }
                  try {
                    builder.y8(this_0.dcg());
                  } catch ($p) {
                    if ($p instanceof Exception) {
                      var e_2 = $p;
                      if (throwOnFailure) {
                        throw IllegalArgumentException_init_$Create$_0(e_2);
                      } else {
                        builder.z8(_Char___init__impl__6a9atx(65533));
                      }
                    } else {
                      throw $p;
                    }
                  }
                }
                builder.z8(_Char___init__impl__6a9atx(65533));
                break $l$loop;
              }
            }
            hexValue = toByte((hexValue * 16 | 0) + newDigit | 0);
          }
           while (inductionVariable <= 1);
        this_0.i1l(hexValue);
      } else {
        UriCodec_getInstance();
        $l$block_2: {
          // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
          if (this_0.ucf_1 === 0) {
            break $l$block_2;
          }
          try {
            builder.y8(this_0.dcg());
          } catch ($p) {
            if ($p instanceof Exception) {
              var e_3 = $p;
              if (throwOnFailure) {
                throw IllegalArgumentException_init_$Create$_0(e_3);
              } else {
                builder.z8(_Char___init__impl__6a9atx(65533));
              }
            } else {
              throw $p;
            }
          }
        }
        builder.z8(c);
      }
    }
    UriCodec_getInstance();
    $l$block_3: {
      // Inline function 'com.eygraber.uri.UriCodec.flushDecodingByteAccumulator' call
      if (this_0.ucf_1 === 0) {
        break $l$block_3;
      }
      try {
        builder.y8(this_0.dcg());
      } catch ($p) {
        if ($p instanceof Exception) {
          var e_4 = $p;
          if (throwOnFailure) {
            throw IllegalArgumentException_init_$Create$_0(e_4);
          } else {
            builder.z8(_Char___init__impl__6a9atx(65533));
          }
        } else {
          throw $p;
        }
      }
    }
    return builder.toString();
  };
  protoOf(UriCodec).kcg = function (s, convertPlus, throwOnFailure, $super) {
    convertPlus = convertPlus === VOID ? false : convertPlus;
    throwOnFailure = throwOnFailure === VOID ? false : throwOnFailure;
    return $super === VOID ? this.icg(s, convertPlus, throwOnFailure) : $super.icg.call(this, s, convertPlus, throwOnFailure);
  };
  var UriCodec_instance;
  function UriCodec_getInstance() {
    if (UriCodec_instance == null)
      new UriCodec();
    return UriCodec_instance;
  }
  function buffer$factory() {
    return getPropertyCallableRef('buffer', 1, KProperty1, function (receiver) {
      return _get_buffer__tgqkad(receiver);
    }, null);
  }
  function UriSyntaxException(input, internalReason, index) {
    index = index === VOID ? -1 : index;
    Exception_init_$Init$(internalReason, this);
    captureStack(this, UriSyntaxException);
    this.lcg_1 = input;
    this.mcg_1 = internalReason;
    this.ncg_1 = index;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(this.ncg_1 >= -1)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(UriSyntaxException).ta = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.y8(this.mcg_1);
    if (this.ncg_1 > -1) {
      this_0.y8(' at index ');
      this_0.ae(this.ncg_1);
    }
    this_0.y8(': ');
    this_0.y8(this.lcg_1);
    return this_0.toString();
  };
  function _get_internalDecoded__fpdua0($this) {
    var tmp0 = $this.qcg_1;
    // Inline function 'kotlin.getValue' call
    internalDecoded$factory();
    return tmp0.b1();
  }
  function _get_internalEncoded__35l2u8($this) {
    var tmp0 = $this.rcg_1;
    // Inline function 'kotlin.getValue' call
    internalEncoded$factory();
    return tmp0.b1();
  }
  function Companion_1() {
    this.scg_1 = 1;
    this.tcg_1 = 2;
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function AbstractPart$internalDecoded$delegate$lambda(this$0, $decoded, $encoded) {
    return function () {
      var tmp;
      if (this$0.ocg_1 || $decoded === NotCachedHolder_getInstance().zcd_1) {
        tmp = UriCodec_getInstance().jcg($encoded);
      } else {
        tmp = $decoded;
      }
      return tmp;
    };
  }
  function AbstractPart$internalEncoded$delegate$lambda($encoded, this$0, $decoded) {
    return function () {
      return $encoded === NotCachedHolder_getInstance().zcd_1 ? this$0.ucg($decoded) : $encoded;
    };
  }
  function AbstractPart(encoded, decoded) {
    this.ocg_1 = !(encoded === NotCachedHolder_getInstance().zcd_1);
    this.pcg_1 = !(decoded === NotCachedHolder_getInstance().zcd_1);
    var tmp = this;
    tmp.qcg_1 = lazy(AbstractPart$internalDecoded$delegate$lambda(this, decoded, encoded));
    var tmp_0 = this;
    tmp_0.rcg_1 = lazy(AbstractPart$internalEncoded$delegate$lambda(encoded, this, decoded));
    if (!(encoded === NotCachedHolder_getInstance().zcd_1))
      1;
    else if (!(decoded === NotCachedHolder_getInstance().zcd_1))
      2;
    else
      throw IllegalArgumentException_init_$Create$('Neither encoded nor decoded');
  }
  protoOf(AbstractPart).vcg = function () {
    return _get_internalDecoded__fpdua0(this);
  };
  protoOf(AbstractPart).wcg = function () {
    return _get_internalEncoded__35l2u8(this);
  };
  function internalDecoded$factory() {
    return getPropertyCallableRef('internalDecoded', 1, KProperty1, function (receiver) {
      return _get_internalDecoded__fpdua0(receiver);
    }, null);
  }
  function internalEncoded$factory() {
    return getPropertyCallableRef('internalEncoded', 1, KProperty1, function (receiver) {
      return _get_internalEncoded__35l2u8(receiver);
    }, null);
  }
  function EmptyPart(value) {
    Part.call(this, value, value);
    // Inline function 'kotlin.text.isNullOrEmpty' call
    // Inline function 'kotlin.require' call
    if (!(value == null || charSequenceLength(value) === 0)) {
      var message = 'Expected empty value, got: ' + value;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.bch_1 = true;
  }
  protoOf(EmptyPart).z2t = function () {
    return this.bch_1;
  };
  function Companion_2() {
    Companion_instance_3 = this;
    this.mce_1 = new EmptyPart(null);
    this.nce_1 = new EmptyPart('');
  }
  protoOf(Companion_2).gch = function (part) {
    return part == null ? this.mce_1 : part;
  };
  protoOf(Companion_2).xce = function (encoded) {
    return this.hch(encoded, NotCachedHolder_getInstance().zcd_1);
  };
  protoOf(Companion_2).vce = function (decoded) {
    return this.hch(NotCachedHolder_getInstance().zcd_1, decoded);
  };
  protoOf(Companion_2).hch = function (encoded, decoded) {
    var tmp;
    if (encoded == null) {
      tmp = this.mce_1;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(encoded) === 0) {
        tmp = this.nce_1;
      } else {
        if (decoded == null) {
          tmp = this.mce_1;
        } else {
          // Inline function 'kotlin.text.isEmpty' call
          if (charSequenceLength(decoded) === 0) {
            tmp = this.nce_1;
          } else {
            tmp = new Part(encoded, decoded);
          }
        }
      }
    }
    return tmp;
  };
  var Companion_instance_3;
  function Companion_getInstance_2() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function Part(encoded, decoded) {
    Companion_getInstance_2();
    AbstractPart.call(this, encoded, decoded);
  }
  protoOf(Part).z2t = function () {
    return false;
  };
  protoOf(Part).ucg = function (decoded) {
    return UriCodec_getInstance().ecg(decoded);
  };
  function Companion_3() {
    Companion_instance_4 = this;
    this.tce_1 = new PathPart(null, null);
    this.uce_1 = new PathPart('', '');
  }
  protoOf(Companion_3).bcf = function (oldPart, newSegment) {
    if (oldPart == null) {
      return this.xce('/' + newSegment);
    }
    var oldPath = oldPart.wcg();
    if (oldPath == null) {
      oldPath = '';
    }
    var oldPathLength = oldPath.length;
    var newPath = oldPathLength === 0 ? '/' + newSegment : charSequenceGet(oldPath, oldPathLength - 1 | 0) === _Char___init__impl__6a9atx(47) ? oldPath + newSegment : '' + oldPath + '/' + newSegment;
    return this.xce(newPath);
  };
  protoOf(Companion_3).zce = function (oldPart, decoded) {
    var encoded = UriCodec_getInstance().jc5(decoded);
    return this.bcf(oldPart, encoded);
  };
  protoOf(Companion_3).xce = function (encoded) {
    return this.hch(encoded, NotCachedHolder_getInstance().zcd_1);
  };
  protoOf(Companion_3).vce = function (decoded) {
    return this.hch(NotCachedHolder_getInstance().zcd_1, decoded);
  };
  protoOf(Companion_3).hch = function (encoded, decoded) {
    if (encoded == null) {
      return this.tce_1;
    }
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(encoded) === 0) {
      tmp = this.uce_1;
    } else {
      tmp = new PathPart(encoded, decoded);
    }
    return tmp;
  };
  protoOf(Companion_3).gcf = function (oldPart) {
    var oldPath = oldPart.ocg_1 ? oldPart.wcg() : oldPart.vcg();
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    if (oldPath == null || charSequenceLength(oldPath) === 0) {
      tmp = true;
    } else {
      tmp = startsWith(oldPath, '/');
    }
    if (tmp) {
      return oldPart;
    }
    var newEncoded = oldPart.ocg_1 ? '/' + oldPart.wcg() : NotCachedHolder_getInstance().zcd_1;
    var newDecoded = oldPart.pcg_1 ? '/' + oldPart.vcg() : NotCachedHolder_getInstance().zcd_1;
    return new PathPart(newEncoded, newDecoded);
  };
  var Companion_instance_4;
  function Companion_getInstance_3() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function PathPart$pathSegments$delegate$lambda($encoded) {
    return function () {
      var tmp0_elvis_lhs = $encoded;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Companion_getInstance().ace_1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var path = tmp;
      var segmentBuilder = new PathSegmentsBuilder();
      var previous = 0;
      var current;
      $l$loop: while (true) {
        // Inline function 'kotlin.also' call
        var this_0 = indexOf(path, _Char___init__impl__6a9atx(47), previous);
        current = this_0;
        if (!(this_0 > -1)) {
          break $l$loop;
        }
        if (previous < current) {
          var tmp_0 = UriCodec_getInstance();
          // Inline function 'kotlin.text.substring' call
          var startIndex = previous;
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$3 = path.substring(startIndex, current);
          segmentBuilder.fce(tmp_0.kcg(tmp$ret$3));
        }
        previous = current + 1 | 0;
      }
      var tmp_1;
      if (previous < path.length) {
        var tmp_2 = UriCodec_getInstance();
        // Inline function 'kotlin.text.substring' call
        var startIndex_0 = previous;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$5 = path.substring(startIndex_0);
        segmentBuilder.fce(tmp_2.kcg(tmp$ret$5));
        tmp_1 = Unit_instance;
      }
      return segmentBuilder.x2x();
    };
  }
  function PathPart(encoded, decoded) {
    Companion_getInstance_3();
    AbstractPart.call(this, encoded, decoded);
    var tmp = this;
    tmp.mch_1 = lazy(PathPart$pathSegments$delegate$lambda(encoded));
  }
  protoOf(PathPart).ucg = function (decoded) {
    return UriCodec_getInstance().gcg(decoded, '/');
  };
  protoOf(PathPart).w36 = function () {
    var tmp0 = this.mch_1;
    // Inline function 'kotlin.getValue' call
    pathSegments$factory();
    return tmp0.b1();
  };
  function pathSegments$factory() {
    return getPropertyCallableRef('pathSegments', 1, KProperty1, function (receiver) {
      return receiver.w36();
    }, null);
  }
  function _get__userInfo__u1z7bt($this) {
    var tmp0 = $this.och_1;
    // Inline function 'kotlin.getValue' call
    _userInfo$factory();
    return tmp0.b1();
  }
  function findPortSeparator($this, authority) {
    var inductionVariable = authority.length - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(authority, i);
        var character = Char__toInt_impl_vasixd(this_0);
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(58);
        if (Char__toInt_impl_vasixd(this_1) === character)
          return i;
        var tmp;
        // Inline function 'kotlin.code' call
        var this_2 = _Char___init__impl__6a9atx(48);
        if (character < Char__toInt_impl_vasixd(this_2)) {
          tmp = true;
        } else {
          // Inline function 'kotlin.code' call
          var this_3 = _Char___init__impl__6a9atx(57);
          tmp = character > Char__toInt_impl_vasixd(this_3);
        }
        if (tmp)
          return -1;
      }
       while (0 <= inductionVariable);
    return -1;
  }
  function AbstractHierarchicalUri$lastPathSegment$delegate$lambda(this$0) {
    return function () {
      var segments = this$0.w36();
      return segments.h() ? null : last(segments);
    };
  }
  function AbstractHierarchicalUri$_userInfo$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.ncf();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Companion_getInstance_2().xce(null);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var authority = tmp;
      var end = lastIndexOf(authority, _Char___init__impl__6a9atx(64));
      var tmp_0 = Companion_getInstance_2();
      var tmp_1;
      if (end === -1) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = authority.substring(0, end);
      }
      return tmp_0.xce(tmp_1);
    };
  }
  function AbstractHierarchicalUri$userInfo$delegate$lambda(this$0) {
    return function () {
      return _get__userInfo__u1z7bt(this$0).vcg();
    };
  }
  function AbstractHierarchicalUri$encodedUserInfo$delegate$lambda(this$0) {
    return function () {
      return _get__userInfo__u1z7bt(this$0).wcg();
    };
  }
  function AbstractHierarchicalUri$host$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.ncf();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var authority = tmp;
      var userInfoSeparator = lastIndexOf(authority, _Char___init__impl__6a9atx(64));
      var portSeparator = findPortSeparator(this$0, authority);
      var tmp_0;
      if (portSeparator === -1) {
        // Inline function 'kotlin.text.substring' call
        var startIndex = userInfoSeparator + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = authority.substring(startIndex);
      } else {
        // Inline function 'kotlin.text.substring' call
        var startIndex_0 = userInfoSeparator + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = authority.substring(startIndex_0, portSeparator);
      }
      var encodedHost = tmp_0;
      return UriCodec_getInstance().kcg(encodedHost);
    };
  }
  function AbstractHierarchicalUri$port$delegate$lambda(this$0) {
    return function () {
      var tmp0_elvis_lhs = this$0.ncf();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return -1;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var authority = tmp;
      var portSeparator = findPortSeparator(this$0, authority);
      var tmp_0;
      if (portSeparator === -1) {
        return -1;
      }
      var tmp_1 = UriCodec_getInstance();
      // Inline function 'kotlin.text.substring' call
      var startIndex = portSeparator + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = authority.substring(startIndex);
      var portString = tmp_1.kcg(tmp$ret$1);
      var tmp_2;
      try {
        tmp_2 = toInt(portString);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof NumberFormatException) {
          var e = $p;
          tmp_3 = -1;
        } else {
          throw $p;
        }
        tmp_2 = tmp_3;
      }
      return tmp_2;
    };
  }
  function AbstractHierarchicalUri() {
    var tmp = this;
    tmp.nch_1 = lazy(AbstractHierarchicalUri$lastPathSegment$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.och_1 = lazy(AbstractHierarchicalUri$_userInfo$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.pch_1 = lazy(AbstractHierarchicalUri$userInfo$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.qch_1 = lazy(AbstractHierarchicalUri$encodedUserInfo$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.rch_1 = lazy(AbstractHierarchicalUri$host$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.sch_1 = lazy(AbstractHierarchicalUri$port$delegate$lambda(this));
  }
  protoOf(AbstractHierarchicalUri).ocf = function () {
    var tmp0 = this.rch_1;
    // Inline function 'kotlin.getValue' call
    host$factory();
    return tmp0.b1();
  };
  protoOf(AbstractHierarchicalUri).a37 = function () {
    var tmp0 = this.sch_1;
    // Inline function 'kotlin.getValue' call
    port$factory();
    return tmp0.b1();
  };
  protoOf(AbstractHierarchicalUri).d = function (other) {
    return this.qcf((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function _userInfo$factory() {
    return getPropertyCallableRef('_userInfo', 1, KProperty1, function (receiver) {
      return _get__userInfo__u1z7bt(receiver);
    }, null);
  }
  function host$factory() {
    return getPropertyCallableRef('host', 1, KProperty1, function (receiver) {
      return receiver.ocf();
    }, null);
  }
  function port$factory() {
    return getPropertyCallableRef('port', 1, KProperty1, function (receiver) {
      return receiver.a37();
    }, null);
  }
  function _get_ssp__e6gvb5($this) {
    var tmp0 = $this.gci_1;
    // Inline function 'kotlin.getValue' call
    ssp$factory();
    return tmp0.b1();
  }
  function makeSchemeSpecificPart($this) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    appendSspTo($this, this_0);
    return this_0.toString();
  }
  function appendSspTo($this, _this__u8e3s4) {
    var encodedAuthority = $this.aci_1.wcg();
    if (!(encodedAuthority == null)) {
      _this__u8e3s4.y8('//').y8(encodedAuthority);
    }
    var encodedPath = $this.bci_1.wcg();
    if (!(encodedPath == null)) {
      _this__u8e3s4.y8(encodedPath);
    }
    if (!$this.cci_1.z2t()) {
      _this__u8e3s4.z8(_Char___init__impl__6a9atx(63)).y8($this.cci_1.wcg());
    }
  }
  function _get_uriString__5epoks($this) {
    var tmp0 = $this.sci_1;
    // Inline function 'kotlin.getValue' call
    uriString$factory();
    return tmp0.b1();
  }
  function HierarchicalUri$ssp$delegate$lambda(this$0) {
    return function () {
      return Companion_getInstance_2().xce(makeSchemeSpecificPart(this$0));
    };
  }
  function HierarchicalUri$encodedSchemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return _get_ssp__e6gvb5(this$0).wcg();
    };
  }
  function HierarchicalUri$schemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return _get_ssp__e6gvb5(this$0).vcg();
    };
  }
  function HierarchicalUri$authority$delegate$lambda(this$0) {
    return function () {
      return this$0.aci_1.vcg();
    };
  }
  function HierarchicalUri$encodedAuthority$delegate$lambda(this$0) {
    return function () {
      return this$0.aci_1.wcg();
    };
  }
  function HierarchicalUri$encodedPath$delegate$lambda(this$0) {
    return function () {
      return this$0.bci_1.wcg();
    };
  }
  function HierarchicalUri$path$delegate$lambda(this$0) {
    return function () {
      return this$0.bci_1.vcg();
    };
  }
  function HierarchicalUri$query$delegate$lambda(this$0) {
    return function () {
      return this$0.cci_1.vcg();
    };
  }
  function HierarchicalUri$encodedQuery$delegate$lambda(this$0) {
    return function () {
      return this$0.cci_1.wcg();
    };
  }
  function HierarchicalUri$fragment$delegate$lambda(this$0) {
    return function () {
      return this$0.dci_1.vcg();
    };
  }
  function HierarchicalUri$encodedFragment$delegate$lambda(this$0) {
    return function () {
      return this$0.dci_1.wcg();
    };
  }
  function HierarchicalUri$pathSegments$delegate$lambda(this$0) {
    return function () {
      return this$0.bci_1.w36();
    };
  }
  function HierarchicalUri$uriString$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      if (!(this$0.zch_1 == null)) {
        this_0.y8(this$0.zch_1).z8(_Char___init__impl__6a9atx(58));
      }
      appendSspTo(this$0, this_0);
      if (!this$0.dci_1.z2t()) {
        this_0.z8(_Char___init__impl__6a9atx(35)).y8(this$0.f37());
      }
      return this_0.toString();
    };
  }
  function HierarchicalUri(scheme, _authorityPart, _pathPart, _queryPart, _fragmentPart) {
    AbstractHierarchicalUri.call(this);
    this.zch_1 = scheme;
    this.aci_1 = Companion_getInstance_2().gch(_authorityPart);
    var tmp = this;
    tmp.bci_1 = _pathPart == null ? Companion_getInstance_3().tce_1 : _pathPart;
    this.cci_1 = Companion_getInstance_2().gch(_queryPart);
    this.dci_1 = Companion_getInstance_2().gch(_fragmentPart);
    this.eci_1 = true;
    this.fci_1 = this.zch_1 == null;
    var tmp_0 = this;
    tmp_0.gci_1 = lazy(HierarchicalUri$ssp$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.hci_1 = lazy(HierarchicalUri$encodedSchemeSpecificPart$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.ici_1 = lazy(HierarchicalUri$schemeSpecificPart$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.jci_1 = lazy(HierarchicalUri$authority$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.kci_1 = lazy(HierarchicalUri$encodedAuthority$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.lci_1 = lazy(HierarchicalUri$encodedPath$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.mci_1 = lazy(HierarchicalUri$path$delegate$lambda(this));
    var tmp_7 = this;
    tmp_7.nci_1 = lazy(HierarchicalUri$query$delegate$lambda(this));
    var tmp_8 = this;
    tmp_8.oci_1 = lazy(HierarchicalUri$encodedQuery$delegate$lambda(this));
    var tmp_9 = this;
    tmp_9.pci_1 = lazy(HierarchicalUri$fragment$delegate$lambda(this));
    var tmp_10 = this;
    tmp_10.qci_1 = lazy(HierarchicalUri$encodedFragment$delegate$lambda(this));
    var tmp_11 = this;
    tmp_11.rci_1 = lazy(HierarchicalUri$pathSegments$delegate$lambda(this));
    var tmp_12 = this;
    tmp_12.sci_1 = lazy(HierarchicalUri$uriString$delegate$lambda(this));
  }
  protoOf(HierarchicalUri).mcf = function () {
    return this.zch_1;
  };
  protoOf(HierarchicalUri).kcf = function () {
    return this.fci_1;
  };
  protoOf(HierarchicalUri).ncf = function () {
    var tmp0 = this.kci_1;
    // Inline function 'kotlin.getValue' call
    encodedAuthority$factory();
    return tmp0.b1();
  };
  protoOf(HierarchicalUri).b37 = function () {
    var tmp0 = this.lci_1;
    // Inline function 'kotlin.getValue' call
    encodedPath$factory();
    return tmp0.b1();
  };
  protoOf(HierarchicalUri).pcf = function () {
    var tmp0 = this.mci_1;
    // Inline function 'kotlin.getValue' call
    path$factory();
    return tmp0.b1();
  };
  protoOf(HierarchicalUri).v36 = function () {
    var tmp0 = this.pci_1;
    // Inline function 'kotlin.getValue' call
    fragment$factory();
    return tmp0.b1();
  };
  protoOf(HierarchicalUri).f37 = function () {
    var tmp0 = this.qci_1;
    // Inline function 'kotlin.getValue' call
    encodedFragment$factory();
    return tmp0.b1();
  };
  protoOf(HierarchicalUri).w36 = function () {
    var tmp0 = this.rci_1;
    // Inline function 'kotlin.getValue' call
    pathSegments$factory_0();
    return tmp0.b1();
  };
  protoOf(HierarchicalUri).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Uri) : false) {
      tmp = this.toString() === toString(other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(HierarchicalUri).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  protoOf(HierarchicalUri).toString = function () {
    return _get_uriString__5epoks(this);
  };
  protoOf(HierarchicalUri).rcf = function () {
    return (new Builder()).oce(this.zch_1).qce(this.aci_1).rce(this.bci_1).ccf(this.cci_1).dcf(this.dci_1);
  };
  protoOf(HierarchicalUri).d = function (other) {
    return this.qcf((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function ssp$factory() {
    return getPropertyCallableRef('ssp', 1, KProperty1, function (receiver) {
      return _get_ssp__e6gvb5(receiver);
    }, null);
  }
  function encodedAuthority$factory() {
    return getPropertyCallableRef('encodedAuthority', 1, KProperty1, function (receiver) {
      return receiver.ncf();
    }, null);
  }
  function encodedPath$factory() {
    return getPropertyCallableRef('encodedPath', 1, KProperty1, function (receiver) {
      return receiver.b37();
    }, null);
  }
  function path$factory() {
    return getPropertyCallableRef('path', 1, KProperty1, function (receiver) {
      return receiver.pcf();
    }, null);
  }
  function fragment$factory() {
    return getPropertyCallableRef('fragment', 1, KProperty1, function (receiver) {
      return receiver.v36();
    }, null);
  }
  function encodedFragment$factory() {
    return getPropertyCallableRef('encodedFragment', 1, KProperty1, function (receiver) {
      return receiver.f37();
    }, null);
  }
  function pathSegments$factory_0() {
    return getPropertyCallableRef('pathSegments', 1, KProperty1, function (receiver) {
      return receiver.w36();
    }, null);
  }
  function uriString$factory() {
    return getPropertyCallableRef('uriString', 1, KProperty1, function (receiver) {
      return _get_uriString__5epoks(receiver);
    }, null);
  }
  function _get_cachedString__4i410o($this) {
    var tmp0 = $this.ocj_1;
    // Inline function 'kotlin.getValue' call
    cachedString$factory();
    return tmp0.b1();
  }
  function OpaqueUri$encodedSchemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return this$0.uci_1.wcg();
    };
  }
  function OpaqueUri$schemeSpecificPart$delegate$lambda(this$0) {
    return function () {
      return this$0.uci_1.vcg();
    };
  }
  function OpaqueUri$fragment$delegate$lambda(this$0) {
    return function () {
      return this$0.vci_1.vcg();
    };
  }
  function OpaqueUri$encodedFragment$delegate$lambda(this$0) {
    return function () {
      return this$0.vci_1.wcg();
    };
  }
  function OpaqueUri$cachedString$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      this_0.y8(this$0.tci_1).z8(_Char___init__impl__6a9atx(58));
      this_0.y8(this$0.pcj());
      if (!this$0.vci_1.z2t()) {
        this_0.z8(_Char___init__impl__6a9atx(35)).y8(this$0.f37());
      }
      return this_0.toString();
    };
  }
  function OpaqueUri(scheme, ssp, _fragmentPart) {
    this.tci_1 = scheme;
    this.uci_1 = ssp;
    var tmp = this;
    tmp.vci_1 = _fragmentPart == null ? Companion_getInstance_2().mce_1 : _fragmentPart;
    this.wci_1 = false;
    this.xci_1 = this.tci_1 == null;
    var tmp_0 = this;
    tmp_0.yci_1 = lazy(OpaqueUri$encodedSchemeSpecificPart$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.zci_1 = lazy(OpaqueUri$schemeSpecificPart$delegate$lambda(this));
    this.acj_1 = null;
    this.bcj_1 = null;
    this.ccj_1 = null;
    this.dcj_1 = null;
    this.ecj_1 = null;
    this.fcj_1 = null;
    var tmp_2 = this;
    tmp_2.gcj_1 = lazy(OpaqueUri$fragment$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.hcj_1 = lazy(OpaqueUri$encodedFragment$delegate$lambda(this));
    this.icj_1 = emptyList();
    this.jcj_1 = null;
    this.kcj_1 = null;
    this.lcj_1 = null;
    this.mcj_1 = null;
    this.ncj_1 = -1;
    var tmp_4 = this;
    tmp_4.ocj_1 = lazy(OpaqueUri$cachedString$delegate$lambda(this));
  }
  protoOf(OpaqueUri).mcf = function () {
    return this.tci_1;
  };
  protoOf(OpaqueUri).kcf = function () {
    return this.xci_1;
  };
  protoOf(OpaqueUri).pcj = function () {
    var tmp0 = this.yci_1;
    // Inline function 'kotlin.getValue' call
    encodedSchemeSpecificPart$factory();
    return tmp0.b1();
  };
  protoOf(OpaqueUri).pcf = function () {
    return this.ccj_1;
  };
  protoOf(OpaqueUri).b37 = function () {
    return this.dcj_1;
  };
  protoOf(OpaqueUri).v36 = function () {
    var tmp0 = this.gcj_1;
    // Inline function 'kotlin.getValue' call
    fragment$factory_0();
    return tmp0.b1();
  };
  protoOf(OpaqueUri).f37 = function () {
    var tmp0 = this.hcj_1;
    // Inline function 'kotlin.getValue' call
    encodedFragment$factory_0();
    return tmp0.b1();
  };
  protoOf(OpaqueUri).w36 = function () {
    return this.icj_1;
  };
  protoOf(OpaqueUri).ocf = function () {
    return this.mcj_1;
  };
  protoOf(OpaqueUri).a37 = function () {
    return this.ncj_1;
  };
  protoOf(OpaqueUri).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Uri) : false) {
      tmp = this.toString() === toString(other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(OpaqueUri).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  protoOf(OpaqueUri).toString = function () {
    return _get_cachedString__4i410o(this);
  };
  protoOf(OpaqueUri).rcf = function () {
    return (new Builder()).oce(this.tci_1).pce(this.uci_1).dcf(this.vci_1);
  };
  protoOf(OpaqueUri).d = function (other) {
    return this.qcf((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function encodedSchemeSpecificPart$factory() {
    return getPropertyCallableRef('encodedSchemeSpecificPart', 1, KProperty1, function (receiver) {
      return receiver.pcj();
    }, null);
  }
  function fragment$factory_0() {
    return getPropertyCallableRef('fragment', 1, KProperty1, function (receiver) {
      return receiver.v36();
    }, null);
  }
  function encodedFragment$factory_0() {
    return getPropertyCallableRef('encodedFragment', 1, KProperty1, function (receiver) {
      return receiver.f37();
    }, null);
  }
  function cachedString$factory() {
    return getPropertyCallableRef('cachedString', 1, KProperty1, function (receiver) {
      return _get_cachedString__4i410o(receiver);
    }, null);
  }
  function _get_cachedSsi__l34qja($this) {
    var tmp0 = $this.xcj_1;
    // Inline function 'kotlin.getValue' call
    cachedSsi$factory();
    return tmp0.b1();
  }
  function _get_cachedFsi__l3d1d5($this) {
    var tmp0 = $this.ycj_1;
    // Inline function 'kotlin.getValue' call
    cachedFsi$factory();
    return tmp0.b1();
  }
  function _get_ssp__e6gvb5_0($this) {
    var tmp0 = $this.cck_1;
    // Inline function 'kotlin.getValue' call
    ssp$factory_0();
    return tmp0.b1();
  }
  function _get_authorityPart__2eumyj($this) {
    var tmp0 = $this.dck_1;
    // Inline function 'kotlin.getValue' call
    authorityPart$factory();
    return tmp0.b1();
  }
  function _get_pathPart__i0uz2r($this) {
    var tmp0 = $this.gck_1;
    // Inline function 'kotlin.getValue' call
    pathPart$factory();
    return tmp0.b1();
  }
  function _get_queryPart__onb3u2($this) {
    var tmp0 = $this.kck_1;
    // Inline function 'kotlin.getValue' call
    queryPart$factory();
    return tmp0.b1();
  }
  function _get_fragmentPart__iqsq0o($this) {
    var tmp0 = $this.nck_1;
    // Inline function 'kotlin.getValue' call
    fragmentPart$factory();
    return tmp0.b1();
  }
  function Companion_4() {
  }
  protoOf(Companion_4).qck = function (uriString, ssi) {
    var length = uriString.length;
    var tmp;
    if (length > (ssi + 2 | 0) && charSequenceGet(uriString, ssi + 1 | 0) === _Char___init__impl__6a9atx(47) && charSequenceGet(uriString, ssi + 2 | 0) === _Char___init__impl__6a9atx(47)) {
      var end = ssi + 3 | 0;
      $l$loop_0: while (end < length) {
        var c = charSequenceGet(uriString, end);
        if (c === _Char___init__impl__6a9atx(47) || c === _Char___init__impl__6a9atx(92))
          break $l$loop_0;
        if (c === _Char___init__impl__6a9atx(63) || c === _Char___init__impl__6a9atx(35))
          break $l$loop_0;
        end = end + 1 | 0;
      }
      var tmp1 = ssi + 3 | 0;
      // Inline function 'kotlin.text.substring' call
      var endIndex = end;
      // Inline function 'kotlin.js.asDynamic' call
      tmp = uriString.substring(tmp1, endIndex);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(Companion_4).rck = function (uriString, ssi) {
    var length = uriString.length;
    var pathStart;
    if (length > (ssi + 2 | 0) && charSequenceGet(uriString, ssi + 1 | 0) === _Char___init__impl__6a9atx(47) && charSequenceGet(uriString, ssi + 2 | 0) === _Char___init__impl__6a9atx(47)) {
      pathStart = ssi + 3 | 0;
      $l$loop: while (pathStart < length) {
        var c = charSequenceGet(uriString, pathStart);
        if (c === _Char___init__impl__6a9atx(63) || c === _Char___init__impl__6a9atx(35))
          return '';
        if (c === _Char___init__impl__6a9atx(47) || c === _Char___init__impl__6a9atx(92))
          break $l$loop;
        pathStart = pathStart + 1 | 0;
      }
    } else {
      pathStart = ssi + 1 | 0;
    }
    var pathEnd = pathStart;
    $l$loop_0: while (pathEnd < length) {
      var c_0 = charSequenceGet(uriString, pathEnd);
      if (c_0 === _Char___init__impl__6a9atx(63) || c_0 === _Char___init__impl__6a9atx(35))
        break $l$loop_0;
      pathEnd = pathEnd + 1 | 0;
    }
    var tmp1 = pathStart;
    // Inline function 'kotlin.text.substring' call
    var endIndex = pathEnd;
    // Inline function 'kotlin.js.asDynamic' call
    return uriString.substring(tmp1, endIndex);
  };
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function StringUri$cachedSsi$delegate$lambda(this$0) {
    return function () {
      return indexOf(this$0.wcj_1, _Char___init__impl__6a9atx(58));
    };
  }
  function StringUri$cachedFsi$delegate$lambda(this$0) {
    return function () {
      return indexOf(this$0.wcj_1, _Char___init__impl__6a9atx(35), _get_cachedSsi__l34qja(this$0));
    };
  }
  function StringUri$isHierarchical$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var tmp;
      if (ssi === -1) {
        tmp = true;
      } else {
        tmp = this$0.wcj_1.length === (ssi + 1 | 0) ? false : charSequenceGet(this$0.wcj_1, ssi + 1 | 0) === _Char___init__impl__6a9atx(47);
      }
      return tmp;
    };
  }
  function StringUri$isRelative$delegate$lambda(this$0) {
    return function () {
      return _get_cachedSsi__l34qja(this$0) === -1;
    };
  }
  function StringUri$scheme$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var tmp;
      if (ssi === -1) {
        tmp = null;
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = this$0.wcj_1.substring(0, ssi);
      }
      return tmp;
    };
  }
  function StringUri$ssp$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var fsi = _get_cachedFsi__l3d1d5(this$0);
      var tmp = Companion_getInstance_2();
      var tmp_0;
      if (fsi === -1) {
        var tmp0 = this$0.wcj_1;
        // Inline function 'kotlin.text.substring' call
        var startIndex = ssi + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = tmp0.substring(startIndex);
      } else {
        var tmp2 = this$0.wcj_1;
        // Inline function 'kotlin.text.substring' call
        var startIndex_0 = ssi + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = tmp2.substring(startIndex_0, fsi);
      }
      return tmp.xce(tmp_0);
    };
  }
  function StringUri$authorityPart$delegate$lambda(this$0) {
    return function () {
      var encodedAuthority = Companion_instance_5.qck(this$0.wcj_1, _get_cachedSsi__l34qja(this$0));
      return Companion_getInstance_2().xce(encodedAuthority);
    };
  }
  function StringUri$authority$delegate$lambda(this$0) {
    return function () {
      return _get_authorityPart__2eumyj(this$0).vcg();
    };
  }
  function StringUri$encodedAuthority$delegate$lambda(this$0) {
    return function () {
      return _get_authorityPart__2eumyj(this$0).wcg();
    };
  }
  function StringUri$pathPart$delegate$lambda(this$0) {
    return function () {
      var ssi = _get_cachedSsi__l34qja(this$0);
      var tmp;
      if (ssi > -1) {
        var schemeOnly = (ssi + 1 | 0) === this$0.wcj_1.length;
        tmp = schemeOnly ? null : !(charSequenceGet(this$0.wcj_1, ssi + 1 | 0) === _Char___init__impl__6a9atx(47)) ? null : Companion_instance_5.rck(this$0.wcj_1, ssi);
      } else {
        tmp = Companion_instance_5.rck(this$0.wcj_1, ssi);
      }
      var encoded = tmp;
      return Companion_getInstance_3().xce(encoded);
    };
  }
  function StringUri$path$delegate$lambda(this$0) {
    return function () {
      return _get_pathPart__i0uz2r(this$0).vcg();
    };
  }
  function StringUri$encodedPath$delegate$lambda(this$0) {
    return function () {
      return _get_pathPart__i0uz2r(this$0).wcg();
    };
  }
  function StringUri$pathSegments$delegate$lambda(this$0) {
    return function () {
      return _get_pathPart__i0uz2r(this$0).w36();
    };
  }
  function StringUri$queryPart$delegate$lambda(this$0) {
    return function () {
      var qsi = indexOf(this$0.wcj_1, _Char___init__impl__6a9atx(63), _get_cachedSsi__l34qja(this$0));
      var tmp;
      if (qsi === -1) {
        tmp = null;
      } else {
        var fsi = _get_cachedFsi__l3d1d5(this$0);
        var tmp_0;
        if (fsi === -1) {
          var tmp0 = this$0.wcj_1;
          // Inline function 'kotlin.text.substring' call
          var startIndex = qsi + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = tmp0.substring(startIndex);
        } else if (fsi < qsi) {
          tmp_0 = null;
        } else {
          var tmp2 = this$0.wcj_1;
          // Inline function 'kotlin.text.substring' call
          var startIndex_0 = qsi + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = tmp2.substring(startIndex_0, fsi);
        }
        tmp = tmp_0;
      }
      var encoded = tmp;
      return Companion_getInstance_2().xce(encoded);
    };
  }
  function StringUri$query$delegate$lambda(this$0) {
    return function () {
      return _get_queryPart__onb3u2(this$0).vcg();
    };
  }
  function StringUri$encodedQuery$delegate$lambda(this$0) {
    return function () {
      return _get_queryPart__onb3u2(this$0).wcg();
    };
  }
  function StringUri$fragmentPart$delegate$lambda(this$0) {
    return function () {
      var fsi = _get_cachedFsi__l3d1d5(this$0);
      var tmp = Companion_getInstance_2();
      var tmp_0;
      if (fsi === -1) {
        tmp_0 = null;
      } else {
        var tmp0 = this$0.wcj_1;
        // Inline function 'kotlin.text.substring' call
        var startIndex = fsi + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = tmp0.substring(startIndex);
      }
      return tmp.xce(tmp_0);
    };
  }
  function StringUri$fragment$delegate$lambda(this$0) {
    return function () {
      return _get_fragmentPart__iqsq0o(this$0).vcg();
    };
  }
  function StringUri$encodedFragment$delegate$lambda(this$0) {
    return function () {
      return _get_fragmentPart__iqsq0o(this$0).wcg();
    };
  }
  function StringUri(uriString) {
    AbstractHierarchicalUri.call(this);
    this.wcj_1 = uriString;
    var tmp = this;
    tmp.xcj_1 = lazy(StringUri$cachedSsi$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.ycj_1 = lazy(StringUri$cachedFsi$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.zcj_1 = lazy(StringUri$isHierarchical$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.ack_1 = lazy(StringUri$isRelative$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.bck_1 = lazy(StringUri$scheme$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.cck_1 = lazy(StringUri$ssp$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.dck_1 = lazy(StringUri$authorityPart$delegate$lambda(this));
    var tmp_6 = this;
    tmp_6.eck_1 = lazy(StringUri$authority$delegate$lambda(this));
    var tmp_7 = this;
    tmp_7.fck_1 = lazy(StringUri$encodedAuthority$delegate$lambda(this));
    var tmp_8 = this;
    tmp_8.gck_1 = lazy(StringUri$pathPart$delegate$lambda(this));
    var tmp_9 = this;
    tmp_9.hck_1 = lazy(StringUri$path$delegate$lambda(this));
    var tmp_10 = this;
    tmp_10.ick_1 = lazy(StringUri$encodedPath$delegate$lambda(this));
    var tmp_11 = this;
    tmp_11.jck_1 = lazy(StringUri$pathSegments$delegate$lambda(this));
    var tmp_12 = this;
    tmp_12.kck_1 = lazy(StringUri$queryPart$delegate$lambda(this));
    var tmp_13 = this;
    tmp_13.lck_1 = lazy(StringUri$query$delegate$lambda(this));
    var tmp_14 = this;
    tmp_14.mck_1 = lazy(StringUri$encodedQuery$delegate$lambda(this));
    var tmp_15 = this;
    tmp_15.nck_1 = lazy(StringUri$fragmentPart$delegate$lambda(this));
    var tmp_16 = this;
    tmp_16.ock_1 = lazy(StringUri$fragment$delegate$lambda(this));
    var tmp_17 = this;
    tmp_17.pck_1 = lazy(StringUri$encodedFragment$delegate$lambda(this));
  }
  protoOf(StringUri).sck = function () {
    var tmp0 = this.zcj_1;
    // Inline function 'kotlin.getValue' call
    isHierarchical$factory();
    return tmp0.b1();
  };
  protoOf(StringUri).kcf = function () {
    var tmp0 = this.ack_1;
    // Inline function 'kotlin.getValue' call
    isRelative$factory();
    return tmp0.b1();
  };
  protoOf(StringUri).mcf = function () {
    var tmp0 = this.bck_1;
    // Inline function 'kotlin.getValue' call
    scheme$factory();
    return tmp0.b1();
  };
  protoOf(StringUri).ncf = function () {
    var tmp0 = this.fck_1;
    // Inline function 'kotlin.getValue' call
    encodedAuthority$factory_0();
    return tmp0.b1();
  };
  protoOf(StringUri).pcf = function () {
    var tmp0 = this.hck_1;
    // Inline function 'kotlin.getValue' call
    path$factory_0();
    return tmp0.b1();
  };
  protoOf(StringUri).b37 = function () {
    var tmp0 = this.ick_1;
    // Inline function 'kotlin.getValue' call
    encodedPath$factory_0();
    return tmp0.b1();
  };
  protoOf(StringUri).w36 = function () {
    var tmp0 = this.jck_1;
    // Inline function 'kotlin.getValue' call
    pathSegments$factory_1();
    return tmp0.b1();
  };
  protoOf(StringUri).v36 = function () {
    var tmp0 = this.ock_1;
    // Inline function 'kotlin.getValue' call
    fragment$factory_1();
    return tmp0.b1();
  };
  protoOf(StringUri).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Uri) : false) {
      tmp = this.toString() === toString(other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StringUri).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  protoOf(StringUri).toString = function () {
    return this.wcj_1;
  };
  protoOf(StringUri).rcf = function () {
    var tmp;
    if (this.sck()) {
      tmp = (new Builder()).oce(this.mcf()).qce(_get_authorityPart__2eumyj(this)).rce(_get_pathPart__i0uz2r(this)).ccf(_get_queryPart__onb3u2(this)).dcf(_get_fragmentPart__iqsq0o(this));
    } else {
      tmp = (new Builder()).oce(this.mcf()).pce(_get_ssp__e6gvb5_0(this)).dcf(_get_fragmentPart__iqsq0o(this));
    }
    return tmp;
  };
  protoOf(StringUri).d = function (other) {
    return this.qcf((!(other == null) ? isInterface(other, Uri) : false) ? other : THROW_CCE());
  };
  function cachedSsi$factory() {
    return getPropertyCallableRef('cachedSsi', 1, KProperty1, function (receiver) {
      return _get_cachedSsi__l34qja(receiver);
    }, null);
  }
  function cachedFsi$factory() {
    return getPropertyCallableRef('cachedFsi', 1, KProperty1, function (receiver) {
      return _get_cachedFsi__l3d1d5(receiver);
    }, null);
  }
  function isHierarchical$factory() {
    return getPropertyCallableRef('isHierarchical', 1, KProperty1, function (receiver) {
      return receiver.sck();
    }, null);
  }
  function isRelative$factory() {
    return getPropertyCallableRef('isRelative', 1, KProperty1, function (receiver) {
      return receiver.kcf();
    }, null);
  }
  function scheme$factory() {
    return getPropertyCallableRef('scheme', 1, KProperty1, function (receiver) {
      return receiver.mcf();
    }, null);
  }
  function ssp$factory_0() {
    return getPropertyCallableRef('ssp', 1, KProperty1, function (receiver) {
      return _get_ssp__e6gvb5_0(receiver);
    }, null);
  }
  function authorityPart$factory() {
    return getPropertyCallableRef('authorityPart', 1, KProperty1, function (receiver) {
      return _get_authorityPart__2eumyj(receiver);
    }, null);
  }
  function encodedAuthority$factory_0() {
    return getPropertyCallableRef('encodedAuthority', 1, KProperty1, function (receiver) {
      return receiver.ncf();
    }, null);
  }
  function pathPart$factory() {
    return getPropertyCallableRef('pathPart', 1, KProperty1, function (receiver) {
      return _get_pathPart__i0uz2r(receiver);
    }, null);
  }
  function path$factory_0() {
    return getPropertyCallableRef('path', 1, KProperty1, function (receiver) {
      return receiver.pcf();
    }, null);
  }
  function encodedPath$factory_0() {
    return getPropertyCallableRef('encodedPath', 1, KProperty1, function (receiver) {
      return receiver.b37();
    }, null);
  }
  function pathSegments$factory_1() {
    return getPropertyCallableRef('pathSegments', 1, KProperty1, function (receiver) {
      return receiver.w36();
    }, null);
  }
  function queryPart$factory() {
    return getPropertyCallableRef('queryPart', 1, KProperty1, function (receiver) {
      return _get_queryPart__onb3u2(receiver);
    }, null);
  }
  function fragmentPart$factory() {
    return getPropertyCallableRef('fragmentPart', 1, KProperty1, function (receiver) {
      return _get_fragmentPart__iqsq0o(receiver);
    }, null);
  }
  function fragment$factory_1() {
    return getPropertyCallableRef('fragment', 1, KProperty1, function (receiver) {
      return receiver.v36();
    }, null);
  }
  //region block: post-declaration
  defineProp(protoOf(UriSyntaxException), 'message', function () {
    return this.ta();
  });
  protoOf(AbstractHierarchicalUri).lcf = get_isAbsolute;
  protoOf(AbstractHierarchicalUri).qcf = compareTo_0;
  protoOf(OpaqueUri).lcf = get_isAbsolute;
  protoOf(OpaqueUri).qcf = compareTo_0;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion_1();
  Companion_instance_5 = new Companion_4();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=uri-kmp-uri.js.map
