(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-http.js', './kotlinx-coroutines-core.js', './ktor-ktor-io.js', './kotlinx-io-kotlinx-io-bytestring.js', './kotlinx-io-kotlinx-io-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-http.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-io.js'), require('./kotlinx-io-kotlinx-io-bytestring.js'), require('./kotlinx-io-kotlinx-io-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-ktor-http-cio'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-http-ktor-http-cio'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-ktor-http-cio'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-http-ktor-http-cio'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-ktor-http-cio'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-http-ktor-http-cio'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-ktor-http-cio'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-http-ktor-http-cio'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-bytestring'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-ktor-http-cio'. Its dependency 'kotlinx-io-kotlinx-io-bytestring' was not found. Please, check whether 'kotlinx-io-kotlinx-io-bytestring' is loaded prior to 'ktor-ktor-http-ktor-http-cio'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-http-ktor-http-cio'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-http-ktor-http-cio'.");
    }
    globalThis['ktor-ktor-http-ktor-http-cio'] = factory(typeof globalThis['ktor-ktor-http-ktor-http-cio'] === 'undefined' ? {} : globalThis['ktor-ktor-http-ktor-http-cio'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-http'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-io'], globalThis['kotlinx-io-kotlinx-io-bytestring'], globalThis['kotlinx-io-kotlinx-io-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring, kotlin_org_jetbrains_kotlinx_kotlinx_io_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Long = kotlin_kotlin.$_$.fj;
  var VOID = kotlin_kotlin.$_$.j;
  var protoOf = kotlin_kotlin.$_$.ce;
  var MultiPartData = kotlin_io_ktor_ktor_http.$_$.l;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var CoroutineImpl = kotlin_kotlin.$_$.cc;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  var SequenceScope = kotlin_kotlin.$_$.af;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.mb;
  var initMetadataForLambda = kotlin_kotlin.$_$.dd;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var sequence = kotlin_kotlin.$_$.gf;
  var toString = kotlin_kotlin.$_$.ge;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var abs = kotlin_kotlin.$_$.he;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r1;
  var DefaultPool = kotlin_io_ktor_ktor_io.$_$.k1;
  var fill = kotlin_kotlin.$_$.n8;
  var isIntArray = kotlin_kotlin.$_$.md;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var endsWith = kotlin_kotlin.$_$.xf;
  var charSequenceLength = kotlin_kotlin.$_$.oc;
  var charSequenceGet = kotlin_kotlin.$_$.nc;
  var Char = kotlin_kotlin.$_$.vi;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.n3;
  var contains = kotlin_kotlin.$_$.sf;
  var charSequenceSubSequence = kotlin_kotlin.$_$.pc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  var IllegalStateException = kotlin_kotlin.$_$.ej;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.k2;
  var captureStack = kotlin_kotlin.$_$.kc;
  var readUTF8LineTo = kotlin_io_ktor_ktor_io.$_$.h;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ad;
  var setOf = kotlin_kotlin.$_$.ka;
  var Companion_getInstance = kotlin_io_ktor_ktor_io.$_$.q;
  var LineEndingMode__plus_impl_ttpz2j = kotlin_io_ktor_ktor_io.$_$.n;
  var listOf = kotlin_kotlin.$_$.s9;
  var MultiPart_getInstance = kotlin_io_ktor_ktor_http.$_$.d;
  var ByteString_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.a;
  var IOException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.c;
  var toString_0 = kotlin_kotlin.$_$.di;
  var toByte = kotlin_kotlin.$_$.de;
  var copyOfRange = kotlin_kotlin.$_$.v7;
  var produce = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var startsWith = kotlin_kotlin.$_$.jh;
  var readUntil = kotlin_io_ktor_ktor_io.$_$.i;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.p1;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var isInterface = kotlin_kotlin.$_$.nd;
  var counted = kotlin_io_ktor_ktor_io.$_$.t1;
  var writer = kotlin_io_ktor_ktor_io.$_$.x1;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.f;
  var get_remaining = kotlin_io_ktor_ktor_io.$_$.d1;
  var skipIfFound = kotlin_io_ktor_ktor_io.$_$.j;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.m1;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.k1;
  var close = kotlin_io_ktor_ktor_io.$_$.s1;
  var readPacket = kotlin_io_ktor_ktor_io.$_$.e;
  var EOFException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.a;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.a;
  var toLong = kotlin_kotlin.$_$.ee;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.f1;
  var ByteString = kotlin_org_jetbrains_kotlinx_kotlinx_io_bytestring.$_$.c;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var compareTo = kotlin_kotlin.$_$.qc;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var Collection = kotlin_kotlin.$_$.o6;
  var emptyList = kotlin_kotlin.$_$.k8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zc;
  var ensureNotNull = kotlin_kotlin.$_$.fk;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var isCharSequence = kotlin_kotlin.$_$.jd;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var CharSequence = kotlin_kotlin.$_$.ui;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var NoPoolImpl = kotlin_io_ktor_ktor_io.$_$.l1;
  var charArray = kotlin_kotlin.$_$.mc;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var toString_1 = kotlin_kotlin.$_$.u3;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.h;
  var numberRangeToNumber = kotlin_kotlin.$_$.wd;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var numberToLong = kotlin_kotlin.$_$.ae;
  var toLongArray = kotlin_kotlin.$_$.ya;
  var Char__plus_impl_qi7pgj = kotlin_kotlin.$_$.q3;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.p3;
  var toByteArray_0 = kotlin_kotlin.$_$.sa;
  var IOException = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.g;
  var IOException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.b;
  var isWhitespace = kotlin_kotlin.$_$.og;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(CIOMultipartDataBase, 'CIOMultipartDataBase', VOID, VOID, [MultiPartData, CoroutineScope], [0, 1]);
  initMetadataForLambda(HeadersData$headersStarts$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(HeadersData, 'HeadersData', HeadersData);
  initMetadataForClass(HttpHeadersMap, 'HttpHeadersMap');
  initMetadataForClass(IntArrayPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(HeadersDataPool$1, VOID, VOID, DefaultPool);
  initMetadataForClass(ParserException, 'ParserException', VOID, IllegalStateException);
  initMetadataForCoroutine($parseHeadersCOROUTINE$4, CoroutineImpl);
  initMetadataForClass(MultipartEvent, 'MultipartEvent');
  initMetadataForClass(Preamble, 'Preamble', VOID, MultipartEvent);
  initMetadataForClass(MultipartPart, 'MultipartPart', VOID, MultipartEvent);
  initMetadataForClass(Epilogue, 'Epilogue', VOID, MultipartEvent);
  initMetadataForLambda(parseMultipart$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(parseMultipart$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($parsePartHeadersImplCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($parsePartBodyImplCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($skipIfFoundReadCountCOROUTINE$7, CoroutineImpl);
  initMetadataForClass(Node, 'Node');
  initMetadataForCompanion(Companion);
  initMetadataForClass(AsciiCharTree, 'AsciiCharTree');
  initMetadataForClass(SubSequenceImpl, 'SubSequenceImpl', VOID, VOID, [CharSequence]);
  initMetadataForClass(CharArrayBuilder, 'CharArrayBuilder', CharArrayBuilder, VOID, [CharSequence]);
  initMetadataForClass(CharArrayPool$1, VOID, VOID, NoPoolImpl);
  initMetadataForClass(CharArrayPool$2, VOID, VOID, DefaultPool);
  initMetadataForClass(UnsupportedMediaTypeExceptionCIO, 'UnsupportedMediaTypeExceptionCIO', VOID, IOException);
  initMetadataForClass(MutableRange, 'MutableRange');
  //endregion
  function CIOMultipartDataBase(coroutineContext, channel, contentType, contentLength, formFieldLimit) {
    formFieldLimit = formFieldLimit === VOID ? new Long(65536, 0) : formFieldLimit;
    this.j38_1 = coroutineContext;
    this.k38_1 = null;
    this.l38_1 = parseMultipart(this, channel, contentType, contentLength, formFieldLimit);
  }
  protoOf(CIOMultipartDataBase).rs = function () {
    return this.j38_1;
  };
  function get_IntArrayPool() {
    _init_properties_HttpHeadersMap_kt__hwatby();
    return IntArrayPool;
  }
  var IntArrayPool;
  function get_HeadersDataPool() {
    _init_properties_HttpHeadersMap_kt__hwatby();
    return HeadersDataPool;
  }
  var HeadersDataPool;
  function HeadersData$headersStarts$slambda(this$0, resultContinuation) {
    this.u38_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HeadersData$headersStarts$slambda).a39 = function ($this$sequence, $completion) {
    var tmp = this.b39($this$sequence, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(HeadersData$headersStarts$slambda).va = function (p1, $completion) {
    return this.a39(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HeadersData$headersStarts$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            this.w38_1 = 0;
            this.x38_1 = this.u38_1.c39_1.q();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.x38_1.r()) {
              this.n9_1 = 6;
              continue $sm;
            }

            this.y38_1 = this.x38_1.s();
            this.z38_1 = 0;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!(this.z38_1 < this.y38_1.length)) {
              this.n9_1 = 5;
              continue $sm;
            }

            if (!(this.u38_1.d39(this.w38_1 + 0 | 0) === -1)) {
              this.n9_1 = 3;
              suspendResult = this.v38_1.li(this.w38_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 3:
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.z38_1 = this.z38_1 + 6 | 0;
            this.w38_1 = this.w38_1 + 6 | 0;
            this.n9_1 = 2;
            continue $sm;
          case 5:
            this.n9_1 = 1;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 7) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(HeadersData$headersStarts$slambda).b39 = function ($this$sequence, completion) {
    var i = new HeadersData$headersStarts$slambda(this.u38_1, completion);
    i.v38_1 = $this$sequence;
    return i;
  };
  function HeadersData$headersStarts$slambda_0(this$0, resultContinuation) {
    var i = new HeadersData$headersStarts$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.a39($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HeadersData() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c39_1 = ArrayList_init_$Create$();
  }
  protoOf(HeadersData).e39 = function () {
    return this.c39_1.t();
  };
  protoOf(HeadersData).f39 = function (subArraysCount) {
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < subArraysCount)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.c39_1.n(get_IntArrayPool().i20());
      }
       while (inductionVariable < subArraysCount);
  };
  protoOf(HeadersData).d39 = function (index) {
    return this.c39_1.v(index / 768 | 0)[index % 768 | 0];
  };
  protoOf(HeadersData).g39 = function (index, value) {
    this.c39_1.v(index / 768 | 0)[index % 768 | 0] = value;
  };
  protoOf(HeadersData).h39 = function () {
    return sequence(HeadersData$headersStarts$slambda_0(this, null));
  };
  protoOf(HeadersData).k1g = function () {
    var _iterator__ex2g4s = this.c39_1.q();
    while (_iterator__ex2g4s.r()) {
      var array = _iterator__ex2g4s.s();
      get_IntArrayPool().j20(array);
    }
    this.c39_1.h2();
  };
  function thresholdReached($this) {
    return $this.j39_1 >= $this.k39_1 * 0.75;
  }
  function resize($this) {
    var prevSize = $this.j39_1;
    var prevData = $this.l39_1;
    $this.j39_1 = 0;
    $this.k39_1 = imul($this.k39_1, 2) | 128;
    var tmp = $this;
    // Inline function 'kotlin.apply' call
    var this_0 = get_HeadersDataPool().i20();
    this_0.f39(imul(prevData.e39(), 2) | 1);
    tmp.l39_1 = this_0;
    var _iterator__ex2g4s = prevData.h39().q();
    while (_iterator__ex2g4s.r()) {
      var headerOffset = _iterator__ex2g4s.s();
      $this.m39(prevData.d39(headerOffset + 1 | 0), prevData.d39(headerOffset + 2 | 0), prevData.d39(headerOffset + 3 | 0), prevData.d39(headerOffset + 4 | 0));
    }
    get_HeadersDataPool().j20(prevData);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(prevSize === $this.j39_1)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function headerHasName($this, name, headerOffset) {
    var nameStartIndex = $this.l39_1.d39(headerOffset + 1 | 0);
    var nameEndIndex = $this.l39_1.d39(headerOffset + 2 | 0);
    return equalsLowerCase($this.i39_1, nameStartIndex, nameEndIndex, name);
  }
  function HttpHeadersMap(builder) {
    this.i39_1 = builder;
    this.j39_1 = 0;
    this.k39_1 = 0;
    this.l39_1 = get_HeadersDataPool().i20();
  }
  protoOf(HttpHeadersMap).bf = function (name) {
    if (this.j39_1 === 0)
      return null;
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = hashCodeLowerCase(name);
    var hash = abs(this_0);
    var headerIndex = hash % this.k39_1 | 0;
    while (!(this.l39_1.d39(imul(headerIndex, 6) + 0 | 0) === -1)) {
      if (headerHasName(this, name, imul(headerIndex, 6))) {
        return this.n39(imul(headerIndex, 6));
      }
      headerIndex = (headerIndex + 1 | 0) % this.k39_1 | 0;
    }
    return null;
  };
  protoOf(HttpHeadersMap).o39 = function () {
    return this.l39_1.h39();
  };
  protoOf(HttpHeadersMap).m39 = function (nameStartIndex, nameEndIndex, valueStartIndex, valueEndIndex) {
    if (thresholdReached(this)) {
      resize(this);
    }
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = hashCodeLowerCase(this.i39_1, nameStartIndex, nameEndIndex);
    var hash = abs(this_0);
    var name = this.i39_1.c(nameStartIndex, nameEndIndex);
    var headerIndex = hash % this.k39_1 | 0;
    var sameNameHeaderIndex = -1;
    while (!(this.l39_1.d39(imul(headerIndex, 6) + 0 | 0) === -1)) {
      if (headerHasName(this, name, imul(headerIndex, 6))) {
        sameNameHeaderIndex = headerIndex;
      }
      headerIndex = (headerIndex + 1 | 0) % this.k39_1 | 0;
    }
    var headerOffset = imul(headerIndex, 6);
    this.l39_1.g39(headerOffset + 0 | 0, hash);
    this.l39_1.g39(headerOffset + 1 | 0, nameStartIndex);
    this.l39_1.g39(headerOffset + 2 | 0, nameEndIndex);
    this.l39_1.g39(headerOffset + 3 | 0, valueStartIndex);
    this.l39_1.g39(headerOffset + 4 | 0, valueEndIndex);
    this.l39_1.g39(headerOffset + 5 | 0, -1);
    if (!(sameNameHeaderIndex === -1)) {
      this.l39_1.g39(imul(sameNameHeaderIndex, 6) + 5 | 0, headerIndex);
    }
    this.j39_1 = this.j39_1 + 1 | 0;
  };
  protoOf(HttpHeadersMap).w39 = function (headerOffset) {
    var nameStartIndex = this.l39_1.d39(headerOffset + 1 | 0);
    var nameEndIndex = this.l39_1.d39(headerOffset + 2 | 0);
    return this.i39_1.c(nameStartIndex, nameEndIndex);
  };
  protoOf(HttpHeadersMap).n39 = function (headerOffset) {
    var valueStartIndex = this.l39_1.d39(headerOffset + 3 | 0);
    var valueEndIndex = this.l39_1.d39(headerOffset + 4 | 0);
    return this.i39_1.c(valueStartIndex, valueEndIndex);
  };
  protoOf(HttpHeadersMap).k1g = function () {
    this.j39_1 = 0;
    this.k39_1 = 0;
    get_HeadersDataPool().j20(this.l39_1);
    this.l39_1 = get_HeadersDataPool().i20();
  };
  protoOf(HttpHeadersMap).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    dumpTo(this, '', this_0);
    return this_0.toString();
  };
  function dumpTo(_this__u8e3s4, indent, out) {
    _init_properties_HttpHeadersMap_kt__hwatby();
    var _iterator__ex2g4s = _this__u8e3s4.o39().q();
    while (_iterator__ex2g4s.r()) {
      var offset = _iterator__ex2g4s.s();
      out.o(indent);
      out.o(_this__u8e3s4.w39(offset));
      out.o(' => ');
      out.o(_this__u8e3s4.n39(offset));
      out.o('\n');
    }
  }
  function IntArrayPool$1() {
    DefaultPool.call(this, 1000);
  }
  protoOf(IntArrayPool$1).b20 = function () {
    var tmp = 0;
    var tmp_0 = new Int32Array(768);
    while (tmp < 768) {
      tmp_0[tmp] = -1;
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  };
  protoOf(IntArrayPool$1).a3a = function (instance) {
    fill(instance, -1);
    return protoOf(DefaultPool).g20.call(this, instance);
  };
  protoOf(IntArrayPool$1).g20 = function (instance) {
    return this.a3a(isIntArray(instance) ? instance : THROW_CCE());
  };
  function HeadersDataPool$1() {
    DefaultPool.call(this, 1000);
  }
  protoOf(HeadersDataPool$1).b20 = function () {
    return new HeadersData();
  };
  protoOf(HeadersDataPool$1).e3a = function (instance) {
    instance.k1g();
    return protoOf(DefaultPool).g20.call(this, instance);
  };
  protoOf(HeadersDataPool$1).g20 = function (instance) {
    return this.e3a(instance instanceof HeadersData ? instance : THROW_CCE());
  };
  var properties_initialized_HttpHeadersMap_kt_kotj4w;
  function _init_properties_HttpHeadersMap_kt__hwatby() {
    if (!properties_initialized_HttpHeadersMap_kt_kotj4w) {
      properties_initialized_HttpHeadersMap_kt_kotj4w = true;
      IntArrayPool = new IntArrayPool$1();
      HeadersDataPool = new HeadersDataPool$1();
    }
  }
  function get_hostForbiddenSymbols() {
    _init_properties_HttpParser_kt__gbdom1();
    return hostForbiddenSymbols;
  }
  var hostForbiddenSymbols;
  function get_httpLineEndings() {
    _init_properties_HttpParser_kt__gbdom1();
    return httpLineEndings;
  }
  var httpLineEndings;
  var versions;
  function parseHeaders(input, builder, range, $completion) {
    range = range === VOID ? new MutableRange(0, 0) : range;
    var tmp = new $parseHeadersCOROUTINE$4(input, builder, range, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function parseHeaderName(text, range) {
    _init_properties_HttpParser_kt__gbdom1();
    var index = range.r3a_1;
    var end = range.s3a_1;
    while (index < end) {
      var ch = text.b(index);
      if (ch === _Char___init__impl__6a9atx(58) && !(index === range.r3a_1)) {
        range.r3a_1 = index + 1 | 0;
        return index;
      }
      if (isDelimiter(ch)) {
        parseHeaderNameFailed(text, index, range.r3a_1, ch);
      }
      index = index + 1 | 0;
    }
    noColonFound(text, range);
  }
  function parseHeaderValue(text, range) {
    _init_properties_HttpParser_kt__gbdom1();
    var start = range.r3a_1;
    var end = range.s3a_1;
    var index = start;
    index = skipSpacesAndHorizontalTabs(text, index, end);
    if (index >= end) {
      range.r3a_1 = end;
      return Unit_instance;
    }
    var valueStart = index;
    var valueLastIndex = index;
    while (index < end) {
      var ch = text.b(index);
      if (ch !== _Char___init__impl__6a9atx(9) && ch !== _Char___init__impl__6a9atx(32))
        if (ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(10)) {
          characterIsNotAllowed(text, ch);
        } else
          valueLastIndex = index;
      index = index + 1 | 0;
    }
    range.r3a_1 = valueStart;
    range.s3a_1 = valueLastIndex + 1 | 0;
  }
  function validateHostHeader(host) {
    _init_properties_HttpParser_kt__gbdom1();
    if (endsWith(host, ':')) {
      throw new ParserException("Host header with ':' should contains port: " + toString(host));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.any' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(host)) {
        var element = charSequenceGet(host, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (get_hostForbiddenSymbols().x(new Char(element))) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      throw new ParserException('Host cannot contain any of the following symbols: ' + toString(get_hostForbiddenSymbols()));
    }
  }
  function isDelimiter(ch) {
    _init_properties_HttpParser_kt__gbdom1();
    return Char__compareTo_impl_ypi4mb(ch, _Char___init__impl__6a9atx(32)) <= 0 || contains('"(),/:;<=>?@[\\]{}', ch);
  }
  function parseHeaderNameFailed(text, index, start, ch) {
    _init_properties_HttpParser_kt__gbdom1();
    if (ch === _Char___init__impl__6a9atx(58)) {
      throw new ParserException('Empty header names are not allowed as per RFC7230.');
    }
    if (index === start) {
      throw new ParserException('Multiline headers via line folding is not supported since it is deprecated as per RFC7230.');
    }
    characterIsNotAllowed(text, ch);
  }
  function noColonFound(text, range) {
    _init_properties_HttpParser_kt__gbdom1();
    var tmp1 = range.r3a_1;
    // Inline function 'kotlin.text.substring' call
    var endIndex = range.s3a_1;
    var tmp$ret$0 = toString(charSequenceSubSequence(text, tmp1, endIndex));
    throw new ParserException('No colon in HTTP header in ' + tmp$ret$0 + ' in builder: \n' + toString(text));
  }
  function characterIsNotAllowed(text, ch) {
    _init_properties_HttpParser_kt__gbdom1();
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(ch);
    throw new ParserException('Character with code ' + (tmp$ret$0 & 255) + ' is not allowed in header names, \n' + toString(text));
  }
  function ParserException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ParserException);
  }
  function $parseHeadersCOROUTINE$4(input, builder, range, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n3a_1 = input;
    this.o3a_1 = builder;
    this.p3a_1 = range;
  }
  protoOf($parseHeadersCOROUTINE$4).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            this.q3a_1 = new HttpHeadersMap(this.o3a_1);
            this.o9_1 = 6;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.n9_1 = 5;
              continue $sm;
            }

            this.n9_1 = 2;
            suspendResult = readUTF8LineTo(this.n3a_1, this.o3a_1, 8192, get_httpLineEndings(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            if (!ARGUMENT) {
              this.q3a_1.k1g();
              return null;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 3:
            this.p3a_1.s3a_1 = this.o3a_1.v39_1;
            var rangeLength = this.p3a_1.s3a_1 - this.p3a_1.r3a_1 | 0;
            if (rangeLength === 0) {
              this.n9_1 = 5;
              continue $sm;
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 4:
            if (rangeLength >= 8192) {
              var message = 'Header line length limit exceeded';
              throw IllegalStateException_init_$Create$(toString(message));
            }

            var nameStart = this.p3a_1.r3a_1;
            var nameEnd = parseHeaderName(this.o3a_1, this.p3a_1);
            var headerEnd = this.p3a_1.s3a_1;
            parseHeaderValue(this.o3a_1, this.p3a_1);
            var valueStart = this.p3a_1.r3a_1;
            var valueEnd = this.p3a_1.s3a_1;
            this.p3a_1.r3a_1 = headerEnd;
            this.q3a_1.m39(nameStart, nameEnd, valueStart, valueEnd);
            this.n9_1 = 1;
            continue $sm;
          case 5:
            var host = this.q3a_1.bf(HttpHeaders_getInstance().e2z_1);
            if (!(host == null)) {
              validateHostHeader(host);
            }

            return this.q3a_1;
          case 6:
            this.o9_1 = 7;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              var t = this.q9_1;
              this.q3a_1.k1g();
              throw t;
            } else {
              throw this.q9_1;
            }

          case 7:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 7) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_HttpParser_kt_uedryv;
  function _init_properties_HttpParser_kt__gbdom1() {
    if (!properties_initialized_HttpParser_kt_uedryv) {
      properties_initialized_HttpParser_kt_uedryv = true;
      hostForbiddenSymbols = setOf([new Char(_Char___init__impl__6a9atx(47)), new Char(_Char___init__impl__6a9atx(63)), new Char(_Char___init__impl__6a9atx(35)), new Char(_Char___init__impl__6a9atx(64))]);
      httpLineEndings = LineEndingMode__plus_impl_ttpz2j(Companion_getInstance().d1t_1, Companion_getInstance().c1t_1);
      versions = Companion_instance.t3a(listOf(['HTTP/1.0', 'HTTP/1.1']));
    }
  }
  function get_CrLf() {
    _init_properties_Multipart_kt__ato98a();
    return CrLf;
  }
  var CrLf;
  function get_PrefixString() {
    _init_properties_Multipart_kt__ato98a();
    return PrefixString;
  }
  var PrefixString;
  function Preamble(body) {
    MultipartEvent.call(this);
    this.u3a_1 = body;
  }
  function MultipartPart(headers, body) {
    MultipartEvent.call(this);
    this.v3a_1 = headers;
    this.w3a_1 = body;
  }
  function Epilogue(body) {
    MultipartEvent.call(this);
    this.x3a_1 = body;
  }
  function MultipartEvent() {
  }
  function parseMultipart(_this__u8e3s4, input, contentType, contentLength, maxPartSize) {
    maxPartSize = maxPartSize === VOID ? new Long(-1, 2147483647) : maxPartSize;
    _init_properties_Multipart_kt__ato98a();
    if (!MultiPart_getInstance().u2w(contentType)) {
      throw new UnsupportedMediaTypeExceptionCIO('Failed to parse multipart: Content-Type should be multipart/* but it is ' + toString(contentType));
    }
    var boundaryByteBuffer = parseBoundaryInternal(contentType);
    var boundaryBytes = ByteString_init_$Create$(boundaryByteBuffer);
    return parseMultipart_0(_this__u8e3s4, boundaryBytes, input, contentLength, maxPartSize);
  }
  function parseBoundaryInternal(contentType) {
    _init_properties_Multipart_kt__ato98a();
    var boundaryParameter = findBoundary(contentType);
    if (boundaryParameter === -1) {
      throw IOException_init_$Create$("Failed to parse multipart: Content-Type's boundary parameter is missing");
    }
    var boundaryStart = boundaryParameter + 9 | 0;
    var boundaryBytes = new Int8Array(74);
    var position = {_v: 0};
    parseBoundaryInternal$put(position, boundaryBytes, 13);
    parseBoundaryInternal$put(position, boundaryBytes, 10);
    parseBoundaryInternal$put(position, boundaryBytes, 45);
    parseBoundaryInternal$put(position, boundaryBytes, 45);
    var state = 0;
    var inductionVariable = boundaryStart;
    var last = charSequenceLength(contentType);
    if (inductionVariable < last)
      loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(contentType, i);
        // Inline function 'kotlin.code' call
        var v = Char__toInt_impl_vasixd(ch) & 65535;
        if ((v & 65535) > 127) {
          throw IOException_init_$Create$('Failed to parse multipart: wrong boundary byte 0x' + toString_0(v, 16) + ' - should be 7bit character');
        }
        switch (state) {
          case 0:
            if (ch !== _Char___init__impl__6a9atx(32))
              if (ch === _Char___init__impl__6a9atx(34)) {
                state = 2;
              } else if (ch === _Char___init__impl__6a9atx(59) || ch === _Char___init__impl__6a9atx(44)) {
                break loop;
              } else {
                state = 1;
                parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
              }

            break;
          case 1:
            if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(44) || ch === _Char___init__impl__6a9atx(59)) {
              break loop;
            } else {
              parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
            }

            break;
          case 2:
            if (ch === _Char___init__impl__6a9atx(92)) {
              state = 3;
            } else if (ch === _Char___init__impl__6a9atx(34)) {
              break loop;
            } else {
              parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
            }

            break;
          case 3:
            parseBoundaryInternal$put(position, boundaryBytes, toByte(v));
            state = 2;
            break;
        }
      }
       while (inductionVariable < last);
    if (position._v === 4) {
      throw IOException_init_$Create$('Empty multipart boundary is not allowed');
    }
    return copyOfRange(boundaryBytes, 0, position._v);
  }
  function parseMultipart_0(_this__u8e3s4, boundaryPrefixed, input, totalLength, maxPartSize) {
    _init_properties_Multipart_kt__ato98a();
    return produce(_this__u8e3s4, VOID, VOID, parseMultipart$slambda_0(input, boundaryPrefixed, maxPartSize, totalLength, null));
  }
  function findBoundary(contentType) {
    _init_properties_Multipart_kt__ato98a();
    var state = 0;
    var paramNameCount = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(contentType) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var ch = charSequenceGet(contentType, i);
        switch (state) {
          case 0:
            if (ch === _Char___init__impl__6a9atx(59)) {
              state = 1;
              paramNameCount = 0;
            }

            break;
          case 1:
            if (ch === _Char___init__impl__6a9atx(61)) {
              state = 2;
            } else if (ch === _Char___init__impl__6a9atx(59)) {
              paramNameCount = 0;
            } else if (ch === _Char___init__impl__6a9atx(44)) {
              state = 0;
            } else if (ch !== _Char___init__impl__6a9atx(32))
              if (paramNameCount === 0 && startsWith(contentType, 'boundary=', i, true)) {
                return i;
              } else {
                paramNameCount = paramNameCount + 1 | 0;
              }

            break;
          case 2:
            if (ch === _Char___init__impl__6a9atx(34))
              state = 3;
            else if (ch === _Char___init__impl__6a9atx(44))
              state = 0;
            else if (ch === _Char___init__impl__6a9atx(59)) {
              state = 1;
              paramNameCount = 0;
            }

            break;
          case 3:
            if (ch === _Char___init__impl__6a9atx(34)) {
              state = 1;
              paramNameCount = 0;
            } else if (ch === _Char___init__impl__6a9atx(92)) {
              state = 4;
            }

            break;
          case 4:
            state = 3;
            break;
        }
      }
       while (inductionVariable <= last);
    return -1;
  }
  function parsePreambleImpl(boundary, input, output, limit, $completion) {
    limit = limit === VOID ? new Long(-1, 2147483647) : limit;
    return readUntil(input, boundary, output, limit, true, $completion);
  }
  function parsePartHeadersImpl(input, $completion) {
    var tmp = new $parsePartHeadersImplCOROUTINE$5(input, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function parsePartBodyImpl(boundaryPrefixed, input, output, headers, limit, $completion) {
    var tmp = new $parsePartBodyImplCOROUTINE$6(boundaryPrefixed, input, output, headers, limit, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function skipIfFoundReadCount(_this__u8e3s4, prefix, $completion) {
    var tmp = new $skipIfFoundReadCountCOROUTINE$7(_this__u8e3s4, prefix, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function throwLimitExceeded(actual, limit) {
    _init_properties_Multipart_kt__ato98a();
    throw IOException_init_$Create$('Multipart content length exceeds limit ' + actual.toString() + ' > ' + limit.toString() + '; ' + "limit is defined using 'formFieldLimit' argument");
  }
  function parseBoundaryInternal$put(position, boundaryBytes, value) {
    if (position._v >= boundaryBytes.length) {
      throw IOException_init_$Create$("Failed to parse multipart: boundary shouldn't be longer than 70 characters");
    }
    var _unary__edvuaz = position._v;
    position._v = _unary__edvuaz + 1 | 0;
    boundaryBytes[_unary__edvuaz] = value;
  }
  function parseMultipart$slambda$slambda($firstBoundary, $countedInput, resultContinuation) {
    this.t3c_1 = $firstBoundary;
    this.u3c_1 = $countedInput;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(parseMultipart$slambda$slambda).w3c = function ($this$writer, $completion) {
    var tmp = this.x3c($this$writer, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(parseMultipart$slambda$slambda).va = function (p1, $completion) {
    return this.w3c(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(parseMultipart$slambda$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = parsePreambleImpl(this.t3c_1, this.u3c_1, this.v3c_1.g1x_1, new Long(8193, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n9_1 = 2;
            suspendResult = this.v3c_1.g1x_1.h1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(parseMultipart$slambda$slambda).x3c = function ($this$writer, completion) {
    var i = new parseMultipart$slambda$slambda(this.t3c_1, this.u3c_1, completion);
    i.v3c_1 = $this$writer;
    return i;
  };
  function parseMultipart$slambda$slambda_0($firstBoundary, $countedInput, resultContinuation) {
    var i = new parseMultipart$slambda$slambda($firstBoundary, $countedInput, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.w3c($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function parseMultipart$slambda($input, $boundaryPrefixed, $maxPartSize, $totalLength, resultContinuation) {
    this.g3d_1 = $input;
    this.h3d_1 = $boundaryPrefixed;
    this.i3d_1 = $maxPartSize;
    this.j3d_1 = $totalLength;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(parseMultipart$slambda).b3e = function ($this$produce, $completion) {
    var tmp = this.c3e($this$produce, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(parseMultipart$slambda).va = function (p1, $completion) {
    return this.b3e((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(parseMultipart$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 23;
            this.l3d_1 = counted(this.g3d_1);
            this.m3d_1 = this.l3d_1.p1z();
            this.n3d_1 = this.h3d_1.j1j(get_PrefixString().t());
            this.n9_1 = 1;
            suspendResult = readRemaining(writer(this.k3d_1, VOID, VOID, parseMultipart$slambda$slambda_0(this.n3d_1, this.l3d_1, null)).e1x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o3d_1 = suspendResult;
            if (get_remaining(this.o3d_1).h1(new Long(0, 0)) > 0) {
              this.n9_1 = 2;
              suspendResult = this.k3d_1.v19(new Preamble(this.o3d_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (!this.l3d_1.e1p()) {
              this.n9_1 = 5;
              suspendResult = skipIfFound(this.l3d_1, get_PrefixString(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.p3d_1 = false;
              this.n9_1 = 6;
              continue $sm;
            }

          case 5:
            this.q3d_1 = suspendResult;
            this.p3d_1 = !this.q3d_1;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            if (!this.p3d_1) {
              this.n9_1 = 13;
              continue $sm;
            }

            this.n9_1 = 7;
            suspendResult = skipIfFound(this.l3d_1, get_CrLf(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.r3d_1 = new ByteChannel();
            this.s3d_1 = CompletableDeferred();
            this.t3d_1 = new MultipartPart(this.s3d_1, this.r3d_1);
            this.n9_1 = 8;
            suspendResult = this.k3d_1.v19(this.t3d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.u3d_1 = null;
            this.o9_1 = 12;
            this.n9_1 = 9;
            suspendResult = parsePartHeadersImpl(this.l3d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.u3d_1 = suspendResult;
            if (!this.s3d_1.l10(this.u3d_1)) {
              this.u3d_1.k1g();
              throw CancellationException_init_$Create$('Multipart processing has been cancelled');
            }

            this.n9_1 = 10;
            suspendResult = parsePartBodyImpl(this.h3d_1, this.l3d_1, this.r3d_1, this.u3d_1, this.i3d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 10:
            this.r3d_1.z4();
            this.o9_1 = 23;
            this.n9_1 = 11;
            continue $sm;
          case 11:
            this.o9_1 = 23;
            this.n9_1 = 4;
            continue $sm;
          case 12:
            this.o9_1 = 23;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              this.v3d_1 = this.q9_1;
              if (this.s3d_1.n10(this.v3d_1)) {
                var tmp0_safe_receiver = this.u3d_1;
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.k1g();
                }
              }
              close(this.r3d_1, this.v3d_1);
              throw this.v3d_1;
            } else {
              throw this.q9_1;
            }

          case 13:
            this.n9_1 = 14;
            suspendResult = skipIfFound(this.l3d_1, get_CrLf(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 14:
            this.n9_1 = 15;
            suspendResult = skipIfFound(this.l3d_1, get_CrLf(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 15:
            if (!(this.j3d_1 == null)) {
              this.w3d_1 = this.l3d_1.p1z().d3(this.m3d_1);
              this.x3d_1 = this.j3d_1.d3(this.w3d_1);
              if (this.x3d_1.h1(new Long(2147483647, 0)) > 0)
                throw IOException_init_$Create$('Failed to parse multipart: prologue is too long');
              if (this.x3d_1.h1(new Long(0, 0)) > 0) {
                this.n9_1 = 19;
                suspendResult = readPacket(this.l3d_1, this.x3d_1.m1(), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.n9_1 = 21;
                continue $sm;
              }
            } else {
              this.n9_1 = 16;
              suspendResult = readRemaining(this.l3d_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 16:
            this.y3d_1 = suspendResult;
            if (!this.y3d_1.r1j()) {
              this.n9_1 = 17;
              suspendResult = this.k3d_1.v19(new Epilogue(this.y3d_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 18;
              continue $sm;
            }

          case 17:
            this.n9_1 = 18;
            continue $sm;
          case 18:
            this.n9_1 = 22;
            continue $sm;
          case 19:
            this.z3d_1 = suspendResult;
            this.a3e_1 = new Epilogue(this.z3d_1);
            this.n9_1 = 20;
            suspendResult = this.k3d_1.v19(this.a3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 20:
            this.n9_1 = 21;
            continue $sm;
          case 21:
            this.n9_1 = 22;
            continue $sm;
          case 22:
            return Unit_instance;
          case 23:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 23) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(parseMultipart$slambda).c3e = function ($this$produce, completion) {
    var i = new parseMultipart$slambda(this.g3d_1, this.h3d_1, this.i3d_1, this.j3d_1, completion);
    i.k3d_1 = $this$produce;
    return i;
  };
  function parseMultipart$slambda_0($input, $boundaryPrefixed, $maxPartSize, $totalLength, resultContinuation) {
    var i = new parseMultipart$slambda($input, $boundaryPrefixed, $maxPartSize, $totalLength, resultContinuation);
    var l = function ($this$produce, $completion) {
      return i.b3e($this$produce, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $parsePartHeadersImplCOROUTINE$5(input, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g3b_1 = input;
  }
  protoOf($parsePartHeadersImplCOROUTINE$5).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.h3b_1 = new CharArrayBuilder();
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = parseHeaders(this.g3b_1, this.h3b_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              throw EOFException_init_$Create$('Failed to parse multipart headers: unexpected end of stream');
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            return tmp_0;
          case 2:
            this.o9_1 = 3;
            var tmp_1 = this.q9_1;
            if (tmp_1 instanceof Error) {
              var t = this.q9_1;
              this.h3b_1.k1g();
              throw t;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $parsePartBodyImplCOROUTINE$6(boundaryPrefixed, input, output, headers, limit, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q3b_1 = boundaryPrefixed;
    this.r3b_1 = input;
    this.s3b_1 = output;
    this.t3b_1 = headers;
    this.u3b_1 = limit;
  }
  protoOf($parsePartBodyImplCOROUTINE$6).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.t3b_1.bf('Content-Length');
            tmp_0.v3b_1 = tmp0_safe_receiver == null ? null : parseDecLong(tmp0_safe_receiver);
            if (this.v3b_1 == null) {
              this.n9_1 = 3;
              suspendResult = readUntil(this.r3b_1, this.q3b_1, this.s3b_1, this.u3b_1, true, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if ((new Long(0, 0)).l3(this.u3b_1).im(this.v3b_1)) {
                this.n9_1 = 1;
                suspendResult = copyTo(this.r3b_1, this.s3b_1, this.v3b_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_1 = this;
                throwLimitExceeded(this.v3b_1, this.u3b_1);
              }
            }

            break;
          case 1:
            this.x3b_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = skipIfFoundReadCount(this.r3b_1, this.q3b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y3b_1 = suspendResult;
            this.w3b_1 = this.x3b_1.c3(this.y3b_1);
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.w3b_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.z3b_1 = this.w3b_1;
            this.n9_1 = 5;
            suspendResult = this.s3b_1.w1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            return this.z3b_1;
          case 6:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 6) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $skipIfFoundReadCountCOROUTINE$7(_this__u8e3s4, prefix, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i3c_1 = _this__u8e3s4;
    this.j3c_1 = prefix;
  }
  protoOf($skipIfFoundReadCountCOROUTINE$7).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = skipIfFound(this.i3c_1, this.j3c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (suspendResult) {
              var tmp_0 = this;
              tmp_0.k3c_1 = toLong(this.j3c_1.t());
              this.n9_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.k3c_1 = new Long(0, 0);
              this.n9_1 = 2;
              continue $sm;
            }

          case 2:
            return this.k3c_1;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_Multipart_kt_wu0sh0;
  function _init_properties_Multipart_kt__ato98a() {
    if (!properties_initialized_Multipart_kt_wu0sh0) {
      properties_initialized_Multipart_kt_wu0sh0 = true;
      CrLf = ByteString_init_$Create$(toByteArray('\r\n'));
      PrefixString = ByteString(new Int8Array([45, 45]));
    }
  }
  function build($this, resultList, from, maxLength, idx, length, charAt) {
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = from.q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var key = charAt(element, idx);
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.n2(key);
      var tmp;
      if (value == null) {
        var answer = ArrayList_init_$Create$();
        destination.q2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.n(element);
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = destination.a1().q();
    while (_iterator__ex2g4s_0.r()) {
      var element_0 = _iterator__ex2g4s_0.s();
      // Inline function 'kotlin.collections.component1' call
      var ch = element_0.b1().q1_1;
      // Inline function 'kotlin.collections.component2' call
      var list_0 = element_0.c1();
      var nextIdx = idx + 1 | 0;
      var children = ArrayList_init_$Create$();
      var tmp_0 = Companion_instance;
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_1 = list_0.q();
      while (_iterator__ex2g4s_1.r()) {
        var element_1 = _iterator__ex2g4s_1.s();
        if (length(element_1) > nextIdx) {
          destination_0.n(element_1);
        }
      }
      build(tmp_0, children, destination_0, maxLength, nextIdx, length, charAt);
      children.i6();
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination_1 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_2 = list_0.q();
      while (_iterator__ex2g4s_2.r()) {
        var element_2 = _iterator__ex2g4s_2.s();
        if (length(element_2) === nextIdx) {
          destination_1.n(element_2);
        }
      }
      resultList.n(new Node(ch, destination_1, children));
    }
  }
  function AsciiCharTree$Companion$build$lambda(it) {
    return charSequenceLength(it);
  }
  function AsciiCharTree$Companion$build$lambda_0(s, idx) {
    return new Char(charSequenceGet(s, idx));
  }
  function Node(ch, exact, children) {
    this.d3e_1 = ch;
    this.e3e_1 = exact;
    this.f3e_1 = children;
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(256);
    while (tmp_0 < 256) {
      var tmp_2 = tmp_0;
      var tmp1 = this.f3e_1;
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.singleOrNull' call
        var single = null;
        var found = false;
        var _iterator__ex2g4s = tmp1.q();
        while (_iterator__ex2g4s.r()) {
          var element = _iterator__ex2g4s.s();
          // Inline function 'kotlin.code' call
          var this_0 = element.d3e_1;
          if (Char__toInt_impl_vasixd(this_0) === tmp_2) {
            if (found) {
              tmp$ret$3 = null;
              break $l$block_0;
            }
            single = element;
            found = true;
          }
        }
        if (!found) {
          tmp$ret$3 = null;
          break $l$block_0;
        }
        tmp$ret$3 = single;
      }
      tmp_1[tmp_2] = tmp$ret$3;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.g3e_1 = tmp_1;
  }
  function Companion() {
  }
  protoOf(Companion).t3a = function (from) {
    var tmp = AsciiCharTree$Companion$build$lambda;
    return this.h3e(from, tmp, AsciiCharTree$Companion$build$lambda_0);
  };
  protoOf(Companion).h3e = function (from, length, charAt) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.maxByOrNull' call
      var iterator = from.q();
      if (!iterator.r()) {
        tmp$ret$0 = null;
        break $l$block_0;
      }
      var maxElem = iterator.s();
      if (!iterator.r()) {
        tmp$ret$0 = maxElem;
        break $l$block_0;
      }
      var maxValue = length(maxElem);
      do {
        var e = iterator.s();
        var v = length(e);
        if (compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.r());
      tmp$ret$0 = maxElem;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = length(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$('Unable to build char tree from an empty list');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var maxLen = tmp_0;
    var tmp$ret$2;
    $l$block_2: {
      // Inline function 'kotlin.collections.any' call
      var tmp_1;
      if (isInterface(from, Collection)) {
        tmp_1 = from.h();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$2 = false;
        break $l$block_2;
      }
      var _iterator__ex2g4s = from.q();
      while (_iterator__ex2g4s.r()) {
        var element = _iterator__ex2g4s.s();
        if (length(element) === 0) {
          tmp$ret$2 = true;
          break $l$block_2;
        }
      }
      tmp$ret$2 = false;
    }
    if (tmp$ret$2)
      throw IllegalArgumentException_init_$Create$('There should be no empty entries');
    var root = ArrayList_init_$Create$();
    build(this, root, from, maxLen, 0, length, charAt);
    root.i6();
    return new AsciiCharTree(new Node(_Char___init__impl__6a9atx(0), emptyList(), root));
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    return Companion_instance;
  }
  function AsciiCharTree(root) {
    this.i3e_1 = root;
  }
  function getImpl($this, index) {
    return bufferForIndex($this, index)[index % ensureNotNull($this.r39_1).length | 0];
  }
  function copy($this, startIndex, endIndex) {
    if (startIndex === endIndex)
      return '';
    var builder = StringBuilder_init_$Create$_0(endIndex - startIndex | 0);
    var buffer;
    var base = startIndex - (startIndex % 2048 | 0) | 0;
    while (base < endIndex) {
      buffer = bufferForIndex($this, base);
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = startIndex - base | 0;
      var innerStartIndex = Math.max(0, b);
      // Inline function 'kotlin.comparisons.minOf' call
      var a = endIndex - base | 0;
      var innerEndIndex = Math.min(a, 2048);
      var inductionVariable = innerStartIndex;
      if (inductionVariable < innerEndIndex)
        do {
          var innerIndex = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          builder.p(buffer[innerIndex]);
        }
         while (inductionVariable < innerEndIndex);
      base = base + 2048 | 0;
    }
    return builder;
  }
  function SubSequenceImpl($outer, start, end) {
    this.m3e_1 = $outer;
    this.j3e_1 = start;
    this.k3e_1 = end;
    this.l3e_1 = null;
  }
  protoOf(SubSequenceImpl).a = function () {
    return this.k3e_1 - this.j3e_1 | 0;
  };
  protoOf(SubSequenceImpl).b = function (index) {
    var withOffset = index + this.j3e_1 | 0;
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'index is negative: ' + index;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(withOffset < this.k3e_1)) {
      var message_0 = 'index (' + index + ') should be less than length (' + this.a() + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return getImpl(this.m3e_1, withOffset);
  };
  protoOf(SubSequenceImpl).c = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    if (!(startIndex >= 0)) {
      var message = 'start is negative: ' + startIndex;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(startIndex <= endIndex)) {
      var message_0 = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(endIndex <= (this.k3e_1 - this.j3e_1 | 0))) {
      var message_1 = 'end should be less than length (' + this.a() + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    if (startIndex === endIndex)
      return '';
    return new SubSequenceImpl(this.m3e_1, this.j3e_1 + startIndex | 0, this.j3e_1 + endIndex | 0);
  };
  protoOf(SubSequenceImpl).toString = function () {
    var tmp0_elvis_lhs = this.l3e_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = toString(copy(this.m3e_1, this.j3e_1, this.k3e_1));
      this.l3e_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(SubSequenceImpl).equals = function (other) {
    if (!(!(other == null) ? isCharSequence(other) : false))
      return false;
    if (!(charSequenceLength(other) === this.a()))
      return false;
    return rangeEqualsImpl(this.m3e_1, this.j3e_1, other, 0, this.a());
  };
  protoOf(SubSequenceImpl).hashCode = function () {
    var tmp0_safe_receiver = this.l3e_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? hashCodeImpl(this.m3e_1, this.j3e_1, this.k3e_1) : tmp1_elvis_lhs;
  };
  function bufferForIndex($this, index) {
    var list = $this.q39_1;
    if (list == null) {
      if (index >= 2048) {
        throwSingleBuffer($this, index);
      }
      var tmp0_elvis_lhs = $this.r39_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        throwSingleBuffer($this, index);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      return tmp;
    }
    return list.v(index / ensureNotNull($this.r39_1).length | 0);
  }
  function throwSingleBuffer($this, index) {
    if ($this.t39_1)
      throw IllegalStateException_init_$Create$('Buffer is already released');
    throw IndexOutOfBoundsException_init_$Create$('' + index + ' is not in range [0; ' + currentPosition($this) + ')');
  }
  function nonFullBuffer($this) {
    return $this.u39_1 === 0 ? appendNewArray($this) : ensureNotNull($this.r39_1);
  }
  function appendNewArray($this) {
    var newBuffer = $this.p39_1.i20();
    var existing = $this.r39_1;
    $this.r39_1 = newBuffer;
    $this.u39_1 = newBuffer.length;
    $this.t39_1 = false;
    if (!(existing == null)) {
      var tmp0_elvis_lhs = $this.q39_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = ArrayList_init_$Create$();
        $this.q39_1 = this_0;
        this_0.n(existing);
        tmp = this_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var list = tmp;
      list.n(newBuffer);
    }
    return newBuffer;
  }
  function rangeEqualsImpl($this, start, other, otherStart, length) {
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(getImpl($this, start + i | 0) === charSequenceGet(other, otherStart + i | 0)))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function hashCodeImpl($this, start, end) {
    var hc = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(31, hc);
        // Inline function 'kotlin.code' call
        var this_0 = getImpl($this, i);
        hc = tmp + Char__toInt_impl_vasixd(this_0) | 0;
      }
       while (inductionVariable < end);
    return hc;
  }
  function currentPosition($this) {
    return ensureNotNull($this.r39_1).length - $this.u39_1 | 0;
  }
  function CharArrayBuilder(pool) {
    pool = pool === VOID ? get_CharArrayPool() : pool;
    this.p39_1 = pool;
    this.q39_1 = null;
    this.r39_1 = null;
    this.s39_1 = null;
    this.t39_1 = false;
    this.u39_1 = 0;
    this.v39_1 = 0;
  }
  protoOf(CharArrayBuilder).a = function () {
    return this.v39_1;
  };
  protoOf(CharArrayBuilder).b = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'index is negative: ' + index;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(index < this.v39_1)) {
      var message_0 = 'index ' + index + ' is not in range [0, ' + this.v39_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    return getImpl(this, index);
  };
  protoOf(CharArrayBuilder).c = function (startIndex, endIndex) {
    // Inline function 'kotlin.require' call
    if (!(startIndex <= endIndex)) {
      var message = 'startIndex (' + startIndex + ') should be less or equal to endIndex (' + endIndex + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(startIndex >= 0)) {
      var message_0 = 'startIndex is negative: ' + startIndex;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(endIndex <= this.v39_1)) {
      var message_1 = 'endIndex (' + endIndex + ') is greater than length (' + this.v39_1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    return new SubSequenceImpl(this, startIndex, endIndex);
  };
  protoOf(CharArrayBuilder).toString = function () {
    var tmp0_elvis_lhs = this.s39_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = toString(copy(this, 0, this.v39_1));
      this.s39_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(CharArrayBuilder).equals = function (other) {
    if (!(!(other == null) ? isCharSequence(other) : false))
      return false;
    if (!(this.v39_1 === charSequenceLength(other)))
      return false;
    return rangeEqualsImpl(this, 0, other, 0, this.v39_1);
  };
  protoOf(CharArrayBuilder).hashCode = function () {
    var tmp0_safe_receiver = this.s39_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? hashCodeImpl(this, 0, this.v39_1) : tmp1_elvis_lhs;
  };
  protoOf(CharArrayBuilder).p = function (value) {
    nonFullBuffer(this)[ensureNotNull(this.r39_1).length - this.u39_1 | 0] = value;
    this.s39_1 = null;
    this.u39_1 = this.u39_1 - 1 | 0;
    this.v39_1 = this.v39_1 + 1 | 0;
    return this;
  };
  protoOf(CharArrayBuilder).xd = function (value, startIndex, endIndex) {
    if (value == null)
      return this;
    var current = startIndex;
    while (current < endIndex) {
      var buffer = nonFullBuffer(this);
      var offset = buffer.length - this.u39_1 | 0;
      var tmp0 = endIndex - current | 0;
      // Inline function 'kotlin.math.min' call
      var b = this.u39_1;
      var bytesToCopy = Math.min(tmp0, b);
      var inductionVariable = 0;
      if (inductionVariable < bytesToCopy)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          buffer[offset + i | 0] = charSequenceGet(value, current + i | 0);
        }
         while (inductionVariable < bytesToCopy);
      current = current + bytesToCopy | 0;
      this.u39_1 = this.u39_1 - bytesToCopy | 0;
    }
    this.s39_1 = null;
    this.v39_1 = this.v39_1 + (endIndex - startIndex | 0) | 0;
    return this;
  };
  protoOf(CharArrayBuilder).o = function (value) {
    if (value == null)
      return this;
    return this.xd(value, 0, charSequenceLength(value));
  };
  protoOf(CharArrayBuilder).k1g = function () {
    var list = this.q39_1;
    if (!(list == null)) {
      this.r39_1 = null;
      var inductionVariable = 0;
      var last = list.t();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.p39_1.j20(list.v(i));
        }
         while (inductionVariable < last);
    } else {
      var tmp0_safe_receiver = this.r39_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this.p39_1.j20(tmp0_safe_receiver);
      }
      this.r39_1 = null;
    }
    this.t39_1 = true;
    this.q39_1 = null;
    this.s39_1 = null;
    this.v39_1 = 0;
    this.u39_1 = 0;
  };
  function get_CharArrayPool() {
    _init_properties_CharArrayPool_kt__u4nq0d();
    return CharArrayPool;
  }
  var CharArrayPool;
  function CharArrayPool$1() {
    NoPoolImpl.call(this);
  }
  protoOf(CharArrayPool$1).i20 = function () {
    return charArray(2048);
  };
  function CharArrayPool$2() {
    DefaultPool.call(this, 4096);
  }
  protoOf(CharArrayPool$2).b20 = function () {
    return charArray(2048);
  };
  var properties_initialized_CharArrayPool_kt_aq0u0f;
  function _init_properties_CharArrayPool_kt__u4nq0d() {
    if (!properties_initialized_CharArrayPool_kt_aq0u0f) {
      properties_initialized_CharArrayPool_kt_aq0u0f = true;
      var tmp;
      if (isPoolingDisabled()) {
        tmp = new CharArrayPool$1();
      } else {
        tmp = new CharArrayPool$2();
      }
      CharArrayPool = tmp;
    }
  }
  var DefaultHttpMethods;
  var HexTable;
  var HexLetterTable;
  function parseDecLong(_this__u8e3s4) {
    _init_properties_Chars_kt__d3i39x();
    var length = charSequenceLength(_this__u8e3s4);
    if (length > 19) {
      numberFormatException(_this__u8e3s4);
    }
    if (length === 19)
      return parseDecLongWithCheck(_this__u8e3s4);
    var result = new Long(0, 0);
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, i);
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
        var digit = toLong(tmp$ret$0).d3(new Long(48, 0));
        if (digit.h1(new Long(0, 0)) < 0 || digit.h1(new Long(9, 0)) > 0) {
          numberFormatException_0(_this__u8e3s4, i);
        }
        result = result.m3(3).c3(result.m3(1)).c3(digit);
      }
       while (inductionVariable < length);
    return result;
  }
  function hashCodeLowerCase(_this__u8e3s4, start, end) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? charSequenceLength(_this__u8e3s4) : end;
    _init_properties_Chars_kt__d3i39x();
    var hashCode = 0;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var pos = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, pos);
        // Inline function 'io.ktor.http.cio.internals.toLowerCase' call
        var this_1 = Char__toInt_impl_vasixd(this_0);
        var tmp;
        // Inline function 'kotlin.code' call
        var this_2 = _Char___init__impl__6a9atx(65);
        var containsLower = Char__toInt_impl_vasixd(this_2);
        var tmp_0;
        // Inline function 'kotlin.code' call
        var this_3 = _Char___init__impl__6a9atx(90);
        if (this_1 <= Char__toInt_impl_vasixd(this_3)) {
          tmp_0 = containsLower <= this_1;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          // Inline function 'kotlin.code' call
          var this_4 = _Char___init__impl__6a9atx(97);
          var tmp_1 = Char__toInt_impl_vasixd(this_4);
          // Inline function 'kotlin.code' call
          var this_5 = _Char___init__impl__6a9atx(65);
          tmp = tmp_1 + (this_1 - Char__toInt_impl_vasixd(this_5) | 0) | 0;
        } else {
          tmp = this_1;
        }
        var v = tmp;
        hashCode = imul(31, hashCode) + v | 0;
      }
       while (inductionVariable < end);
    return hashCode;
  }
  function equalsLowerCase(_this__u8e3s4, start, end, other) {
    start = start === VOID ? 0 : start;
    end = end === VOID ? charSequenceLength(_this__u8e3s4) : end;
    _init_properties_Chars_kt__d3i39x();
    if (!((end - start | 0) === charSequenceLength(other)))
      return false;
    var inductionVariable = start;
    if (inductionVariable < end)
      do {
        var pos = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, pos);
        // Inline function 'io.ktor.http.cio.internals.toLowerCase' call
        var this_1 = Char__toInt_impl_vasixd(this_0);
        var tmp;
        // Inline function 'kotlin.code' call
        var this_2 = _Char___init__impl__6a9atx(65);
        var containsLower = Char__toInt_impl_vasixd(this_2);
        var tmp_0;
        // Inline function 'kotlin.code' call
        var this_3 = _Char___init__impl__6a9atx(90);
        if (this_1 <= Char__toInt_impl_vasixd(this_3)) {
          tmp_0 = containsLower <= this_1;
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          // Inline function 'kotlin.code' call
          var this_4 = _Char___init__impl__6a9atx(97);
          var tmp_1 = Char__toInt_impl_vasixd(this_4);
          // Inline function 'kotlin.code' call
          var this_5 = _Char___init__impl__6a9atx(65);
          tmp = tmp_1 + (this_1 - Char__toInt_impl_vasixd(this_5) | 0) | 0;
        } else {
          tmp = this_1;
        }
        var tmp_2 = tmp;
        // Inline function 'kotlin.code' call
        var this_6 = charSequenceGet(other, pos - start | 0);
        // Inline function 'io.ktor.http.cio.internals.toLowerCase' call
        var this_7 = Char__toInt_impl_vasixd(this_6);
        var tmp_3;
        // Inline function 'kotlin.code' call
        var this_8 = _Char___init__impl__6a9atx(65);
        var containsLower_0 = Char__toInt_impl_vasixd(this_8);
        var tmp_4;
        // Inline function 'kotlin.code' call
        var this_9 = _Char___init__impl__6a9atx(90);
        if (this_7 <= Char__toInt_impl_vasixd(this_9)) {
          tmp_4 = containsLower_0 <= this_7;
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          // Inline function 'kotlin.code' call
          var this_10 = _Char___init__impl__6a9atx(97);
          var tmp_5 = Char__toInt_impl_vasixd(this_10);
          // Inline function 'kotlin.code' call
          var this_11 = _Char___init__impl__6a9atx(65);
          tmp_3 = tmp_5 + (this_7 - Char__toInt_impl_vasixd(this_11) | 0) | 0;
        } else {
          tmp_3 = this_7;
        }
        if (!(tmp_2 === tmp_3))
          return false;
      }
       while (inductionVariable < end);
    return true;
  }
  function numberFormatException(cs) {
    _init_properties_Chars_kt__d3i39x();
    throw NumberFormatException_init_$Create$('Invalid number ' + toString(cs) + ': too large for Long type');
  }
  function parseDecLongWithCheck(_this__u8e3s4) {
    _init_properties_Chars_kt__d3i39x();
    var result = new Long(0, 0);
    var inductionVariable = 0;
    var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, i);
        var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
        var digit = toLong(tmp$ret$0).d3(new Long(48, 0));
        if (digit.h1(new Long(0, 0)) < 0 || digit.h1(new Long(9, 0)) > 0) {
          numberFormatException_0(_this__u8e3s4, i);
        }
        result = result.m3(3).c3(result.m3(1)).c3(digit);
        if (result.h1(new Long(0, 0)) < 0) {
          numberFormatException(_this__u8e3s4);
        }
      }
       while (inductionVariable <= last);
    return result;
  }
  function numberFormatException_0(cs, idx) {
    _init_properties_Chars_kt__d3i39x();
    throw NumberFormatException_init_$Create$('Invalid number: ' + toString(cs) + ', wrong digit: ' + toString_1(charSequenceGet(cs, idx)) + ' at position ' + idx);
  }
  function DefaultHttpMethods$lambda(it) {
    _init_properties_Chars_kt__d3i39x();
    return it.m32_1.length;
  }
  function DefaultHttpMethods$lambda_0(m, idx) {
    _init_properties_Chars_kt__d3i39x();
    return new Char(charSequenceGet(m.m32_1, idx));
  }
  var properties_initialized_Chars_kt_phjfhp;
  function _init_properties_Chars_kt__d3i39x() {
    if (!properties_initialized_Chars_kt_phjfhp) {
      properties_initialized_Chars_kt_phjfhp = true;
      var tmp = Companion_instance;
      var tmp_0 = Companion_getInstance_0().l32_1;
      var tmp_1 = DefaultHttpMethods$lambda;
      DefaultHttpMethods = tmp.h3e(tmp_0, tmp_1, DefaultHttpMethods$lambda_0);
      // Inline function 'kotlin.collections.map' call
      var this_0 = numberRangeToNumber(0, 255);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var inductionVariable = this_0.i1_1;
      var last = this_0.j1_1;
      if (inductionVariable <= last)
        do {
          var item = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var v = item;
          var tmp_2;
          if (48 <= v ? v <= 57 : false) {
            tmp_2 = numberToLong(v).d3(new Long(48, 0));
          } else {
            var tmp_3;
            var tmp_4 = toLong(v);
            // Inline function 'kotlin.code' call
            var this_1 = _Char___init__impl__6a9atx(97);
            var tmp$ret$0 = Char__toInt_impl_vasixd(this_1);
            if (tmp_4.h1(toLong(tmp$ret$0)) >= 0) {
              var tmp_5 = toLong(v);
              // Inline function 'kotlin.code' call
              var this_2 = _Char___init__impl__6a9atx(102);
              var tmp$ret$1 = Char__toInt_impl_vasixd(this_2);
              tmp_3 = tmp_5.h1(toLong(tmp$ret$1)) <= 0;
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              // Inline function 'kotlin.code' call
              var this_3 = _Char___init__impl__6a9atx(97);
              var tmp$ret$2 = Char__toInt_impl_vasixd(this_3);
              // Inline function 'kotlin.Long.plus' call
              tmp_2 = numberToLong(v).d3(toLong(tmp$ret$2)).c3(toLong(10));
            } else {
              var tmp_6;
              var tmp_7 = toLong(v);
              // Inline function 'kotlin.code' call
              var this_4 = _Char___init__impl__6a9atx(65);
              var tmp$ret$4 = Char__toInt_impl_vasixd(this_4);
              if (tmp_7.h1(toLong(tmp$ret$4)) >= 0) {
                var tmp_8 = toLong(v);
                // Inline function 'kotlin.code' call
                var this_5 = _Char___init__impl__6a9atx(70);
                var tmp$ret$5 = Char__toInt_impl_vasixd(this_5);
                tmp_6 = tmp_8.h1(toLong(tmp$ret$5)) <= 0;
              } else {
                tmp_6 = false;
              }
              if (tmp_6) {
                // Inline function 'kotlin.code' call
                var this_6 = _Char___init__impl__6a9atx(65);
                var tmp$ret$6 = Char__toInt_impl_vasixd(this_6);
                // Inline function 'kotlin.Long.plus' call
                tmp_2 = numberToLong(v).d3(toLong(tmp$ret$6)).c3(toLong(10));
              } else {
                tmp_2 = new Long(-1, -1);
              }
            }
          }
          var tmp$ret$8 = tmp_2;
          destination.n(tmp$ret$8);
        }
         while (!(item === last));
      HexTable = toLongArray(destination);
      // Inline function 'kotlin.collections.map' call
      var this_7 = numberRangeToNumber(0, 15);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_7, 10));
      var inductionVariable_0 = this_7.i1_1;
      var last_0 = this_7.j1_1;
      if (inductionVariable_0 <= last_0)
        do {
          var item_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var it = item_0;
          var tmp_9;
          if (it < 10) {
            tmp_9 = toByte(48 + it | 0);
          } else {
            // Inline function 'kotlin.code' call
            var this_8 = Char__minus_impl_a2frrh(Char__plus_impl_qi7pgj(_Char___init__impl__6a9atx(97), it), 10);
            var tmp$ret$0_0 = Char__toInt_impl_vasixd(this_8);
            tmp_9 = toByte(tmp$ret$0_0);
          }
          var tmp$ret$1_0 = tmp_9;
          destination_0.n(tmp$ret$1_0);
        }
         while (!(item_0 === last_0));
      HexLetterTable = toByteArray_0(destination_0);
    }
  }
  function UnsupportedMediaTypeExceptionCIO(message) {
    IOException_init_$Init$(message, this);
    captureStack(this, UnsupportedMediaTypeExceptionCIO);
  }
  function MutableRange(start, end) {
    this.r3a_1 = start;
    this.s3a_1 = end;
  }
  protoOf(MutableRange).toString = function () {
    return 'MutableRange(start=' + this.r3a_1 + ', end=' + this.s3a_1 + ')';
  };
  function skipSpacesAndHorizontalTabs(text, start, end) {
    var index = start;
    $l$loop: while (index < end) {
      var ch = text.b(index);
      if (!isWhitespace(ch) && !(ch === _Char___init__impl__6a9atx(9)))
        break $l$loop;
      index = index + 1 | 0;
    }
    return index;
  }
  function isPoolingDisabled() {
    return false;
  }
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CIOMultipartDataBase;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-http-ktor-http-cio.js.map
