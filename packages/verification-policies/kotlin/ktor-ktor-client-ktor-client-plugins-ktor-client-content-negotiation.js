(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-http.js', './ktor-ktor-shared-ktor-serialization.js', './ktor-ktor-io.js', './ktor-ktor-client-ktor-client-core.js', './ktor-ktor-utils.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-shared-ktor-serialization.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./ktor-ktor-utils.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    if (typeof globalThis['ktor-ktor-shared-ktor-serialization'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-shared-ktor-serialization' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'.");
    }
    globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'] = factory(typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'] === 'undefined' ? {} : globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-shared-ktor-serialization'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-client-ktor-client-core'], globalThis['ktor-ktor-utils']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_serialization, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_utils) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var plus = kotlin_kotlin.$_$.z9;
  var toMutableSet = kotlin_kotlin.$_$.eb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var VOID = kotlin_kotlin.$_$.j;
  var Exception = kotlin_kotlin.$_$.zi;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y1;
  var captureStack = kotlin_kotlin.$_$.jc;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var CoroutineImpl = kotlin_kotlin.$_$.bc;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var TransformRequestBodyContext = kotlin_io_ktor_ktor_client_core.$_$.g;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.lb;
  var initMetadataForLambda = kotlin_kotlin.$_$.cd;
  var TransformResponseBodyContext = kotlin_io_ktor_ktor_client_core.$_$.h;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.w;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.o1;
  var isInterface = kotlin_kotlin.$_$.md;
  var contentType = kotlin_io_ktor_ktor_http.$_$.k1;
  var get_request = kotlin_io_ktor_ktor_client_core.$_$.y;
  var suitableCharset = kotlin_io_ktor_ktor_serialization.$_$.e;
  var toString = kotlin_kotlin.$_$.fe;
  var Collection = kotlin_kotlin.$_$.o6;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var emptyList = kotlin_kotlin.$_$.k8;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.c;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.p;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.i1;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Unit = kotlin_kotlin.$_$.vj;
  var charset = kotlin_io_ktor_ktor_http.$_$.g1;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.rc;
  var joinToString = kotlin_kotlin.$_$.e9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a6;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.x;
  var getKClass = kotlin_kotlin.$_$.g;
  var setOf = kotlin_kotlin.$_$.ja;
  var KtList = kotlin_kotlin.$_$.t6;
  var ContentType = kotlin_io_ktor_ktor_http.$_$.v;
  var arrayOf = kotlin_kotlin.$_$.yj;
  var createKType = kotlin_kotlin.$_$.d;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.m;
  var createClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.i;
  var endsWith = kotlin_kotlin.$_$.xf;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ConverterRegistration, 'ConverterRegistration');
  initMetadataForClass(ContentNegotiationConfig$defaultMatcher$1);
  initMetadataForClass(ContentNegotiationConfig, 'ContentNegotiationConfig', ContentNegotiationConfig, VOID, [Configuration]);
  initMetadataForClass(ContentConverterException, 'ContentConverterException', VOID, Exception);
  initMetadataForLambda(ContentNegotiation$lambda$slambda, CoroutineImpl, VOID, [4]);
  initMetadataForLambda(ContentNegotiation$lambda$slambda_1, CoroutineImpl, VOID, [4]);
  initMetadataForCoroutine($invoke$convertRequestCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($invoke$convertResponseCOROUTINE$1, CoroutineImpl);
  initMetadataForObject(JsonContentTypeMatcher, 'JsonContentTypeMatcher');
  //endregion
  function get_LOGGER() {
    _init_properties_ContentNegotiation_kt__o183go();
    return LOGGER;
  }
  var LOGGER;
  function get_DefaultCommonIgnoredTypes() {
    _init_properties_ContentNegotiation_kt__o183go();
    return DefaultCommonIgnoredTypes;
  }
  var DefaultCommonIgnoredTypes;
  function get_ExcludedContentTypes() {
    _init_properties_ContentNegotiation_kt__o183go();
    return ExcludedContentTypes;
  }
  var ExcludedContentTypes;
  function get_ContentNegotiation() {
    _init_properties_ContentNegotiation_kt__o183go();
    return ContentNegotiation;
  }
  var ContentNegotiation;
  function ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher) {
    this.a5b_1 = converter;
    this.b5b_1 = contentTypeToSend;
    this.c5b_1 = contentTypeMatcher;
  }
  function defaultMatcher($this, pattern) {
    return new ContentNegotiationConfig$defaultMatcher$1(pattern);
  }
  function ContentNegotiationConfig$defaultMatcher$1($pattern) {
    this.d5b_1 = $pattern;
  }
  protoOf(ContentNegotiationConfig$defaultMatcher$1).e5b = function (contentType) {
    return contentType.s2x(this.d5b_1);
  };
  function ContentNegotiationConfig() {
    this.f5b_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.g5b_1 = ArrayList_init_$Create$();
    this.h5b_1 = null;
  }
  protoOf(ContentNegotiationConfig).x3f = function (contentType, converter, configuration) {
    var matcher = contentType.s2x(Application_getInstance().y2v_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
    this.i5b(contentType, converter, matcher, configuration);
  };
  protoOf(ContentNegotiationConfig).i5b = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    configuration(converter);
    var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.g5b_1.n(registration);
  };
  function ContentConverterException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContentConverterException);
  }
  function ContentNegotiationConfig$_init_$ref_1ne3ob() {
    var l = function () {
      return new ContentNegotiationConfig();
    };
    l.callableName = '<init>';
    return l;
  }
  function ContentNegotiation$lambda($this$createClientPlugin) {
    _init_properties_ContentNegotiation_kt__o183go();
    var registrations = $this$createClientPlugin.r3s_1.g5b_1;
    var ignoredTypes = $this$createClientPlugin.r3s_1.f5b_1;
    $this$createClientPlugin.d4b(ContentNegotiation$lambda$slambda_0(registrations, $this$createClientPlugin, ignoredTypes, null));
    $this$createClientPlugin.z43(ContentNegotiation$lambda$slambda_2(ignoredTypes, registrations, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$convertRequest(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion) {
    var tmp = new $invoke$convertRequestCOROUTINE$0(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
    charset = charset === VOID ? Charsets_getInstance().r1z_1 : charset;
    var tmp = new $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
    this.g5d_1 = $registrations;
    this.h5d_1 = $this_createClientPlugin;
    this.i5d_1 = $ignoredTypes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$lambda$slambda).n5d = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
    var tmp = this.o5d($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(ContentNegotiation$lambda$slambda).e45 = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformRequestBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    var tmp_1 = !(p3 == null) ? p3 : THROW_CCE();
    return this.n5d(tmp, tmp_0, tmp_1, (p4 == null ? true : p4 instanceof TypeInfo) ? p4 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$lambda$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = invoke$convertRequest(this.g5d_1, this.h5d_1, this.i5d_1, this.k5d_1, this.l5d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ContentNegotiation$lambda$slambda).o5d = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, completion) {
    var i = new ContentNegotiation$lambda$slambda(this.g5d_1, this.h5d_1, this.i5d_1, completion);
    i.j5d_1 = $this$transformRequestBody;
    i.k5d_1 = request;
    i.l5d_1 = body;
    i.m5d_1 = _unused_var__etf5q3;
    return i;
  };
  function ContentNegotiation$lambda$slambda_0($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
    var i = new ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation);
    var l = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
      return i.n5d($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
    };
    l.$arity = 4;
    return l;
  }
  function ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
    this.x5d_1 = $ignoredTypes;
    this.y5d_1 = $registrations;
    this.z5d_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$lambda$slambda_1).c45 = function ($this$transformResponseBody, response, body, info, $completion) {
    var tmp = this.d45($this$transformResponseBody, response, body, info, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(ContentNegotiation$lambda$slambda_1).e45 = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.c45(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$lambda$slambda_1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.b5e_1);
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.e5e_1 = tmp_1;
            this.f5e_1 = suitableCharset(get_request(this.b5e_1).b32());
            this.n9_1 = 1;
            suspendResult = invoke$convertResponse(this.x5d_1, this.y5d_1, this.z5d_1, get_request(this.b5e_1).u3m(), this.d5e_1, this.c5e_1, this.e5e_1, this.f5e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ContentNegotiation$lambda$slambda_1).d45 = function ($this$transformResponseBody, response, body, info, completion) {
    var i = new ContentNegotiation$lambda$slambda_1(this.x5d_1, this.y5d_1, this.z5d_1, completion);
    i.a5e_1 = $this$transformResponseBody;
    i.b5e_1 = response;
    i.c5e_1 = body;
    i.d5e_1 = info;
    return i;
  };
  function ContentNegotiation$lambda$slambda_2($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
    var i = new ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation);
    var l = function ($this$transformResponseBody, response, body, info, $completion) {
      return i.c45($this$transformResponseBody, response, body, info, $completion);
    };
    l.$arity = 4;
    return l;
  }
  function ContentNegotiation$lambda$convertRequest$lambda(it) {
    _init_properties_ContentNegotiation_kt__o183go();
    return toString(it.a5b_1);
  }
  function $invoke$convertRequestCOROUTINE$0(registrations, $this_createClientPlugin, ignoredTypes, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r5b_1 = registrations;
    this.s5b_1 = $this_createClientPlugin;
    this.t5b_1 = ignoredTypes;
    this.u5b_1 = request;
    this.v5b_1 = body;
  }
  protoOf($invoke$convertRequestCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            var tmp_0 = this;
            var tmp_1;
            if (this.u5b_1.n3k_1.x2m(get_ExcludedContentTypes())) {
              var excluded = this.u5b_1.n3k_1.v2m(get_ExcludedContentTypes());
              var tmp0 = this.r5b_1;
              var destination = ArrayList_init_$Create$();
              var _iterator__ex2g4s = tmp0.p();
              while (_iterator__ex2g4s.q()) {
                var element = _iterator__ex2g4s.r();
                var tmp$ret$0;
                l$ret$1: do {
                  var tmp_2;
                  if (isInterface(excluded, Collection)) {
                    tmp_2 = excluded.h();
                  } else {
                    tmp_2 = false;
                  }
                  if (tmp_2) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                  var _iterator__ex2g4s_0 = excluded.p();
                  while (_iterator__ex2g4s_0.q()) {
                    var element_0 = _iterator__ex2g4s_0.r();
                    if (element.b5b_1.s2x(element_0)) {
                      tmp$ret$0 = false;
                      break l$ret$1;
                    }
                  }
                  tmp$ret$0 = true;
                }
                 while (false);
                if (tmp$ret$0) {
                  destination.n(element);
                }
              }
              tmp_1 = destination;
            } else {
              tmp_1 = this.r5b_1;
            }

            tmp_0.w5b_1 = tmp_1;
            var tmp_3 = this;
            var tmp0_elvis_lhs = this.u5b_1.k3k_1.a2r(HttpHeaders_getInstance().y2x_1);
            tmp_3.x5b_1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
            var _iterator__ex2g4s_1 = this.w5b_1.p();
            while (_iterator__ex2g4s_1.q()) {
              var element_1 = _iterator__ex2g4s_1.r();
              var tmp0_0 = this.x5b_1;
              var tmp$ret$2;
              l$ret$3: do {
                var tmp_4;
                if (isInterface(tmp0_0, Collection)) {
                  tmp_4 = tmp0_0.h();
                } else {
                  tmp_4 = false;
                }
                if (tmp_4) {
                  tmp$ret$2 = true;
                  break l$ret$3;
                }
                var _iterator__ex2g4s_2 = tmp0_0.p();
                while (_iterator__ex2g4s_2.q()) {
                  var element_2 = _iterator__ex2g4s_2.r();
                  if (Companion_getInstance().aq(element_2).s2x(element_1.b5b_1)) {
                    tmp$ret$2 = false;
                    break l$ret$3;
                  }
                }
                tmp$ret$2 = true;
              }
               while (false);
              if (tmp$ret$2) {
                var qValue = this.s5b_1.r3s_1.h5b_1;
                var contentTypeToSend = qValue == null ? element_1.b5b_1 : element_1.b5b_1.q2x('q', qValue.toString());
                get_LOGGER().k2v('Adding Accept=' + contentTypeToSend.toString() + ' header for ' + this.u5b_1.i3k_1.toString());
                accept(this.u5b_1, contentTypeToSend);
              }
            }

            var tmp_5;
            var tmp_6 = this.v5b_1;
            if (tmp_6 instanceof OutgoingContent) {
              tmp_5 = true;
            } else {
              var tmp5 = this.t5b_1;
              var tmp$ret$4;
              l$ret$5: do {
                var tmp_7;
                if (isInterface(tmp5, Collection)) {
                  tmp_7 = tmp5.h();
                } else {
                  tmp_7 = false;
                }
                if (tmp_7) {
                  tmp$ret$4 = false;
                  break l$ret$5;
                }
                var _iterator__ex2g4s_3 = tmp5.p();
                while (_iterator__ex2g4s_3.q()) {
                  var element_3 = _iterator__ex2g4s_3.r();
                  if (element_3.ic(this.v5b_1)) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                tmp$ret$4 = false;
              }
               while (false);
              tmp_5 = tmp$ret$4;
            }

            if (tmp_5) {
              get_LOGGER().k2v('Body type ' + toString(getKClassFromExpression(this.v5b_1)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.u5b_1.i3k_1.toString() + '.'));
              return null;
            }

            var tmp_8 = this;
            var tmp0_elvis_lhs_0 = contentType_0(this.u5b_1);
            var tmp_9;
            if (tmp0_elvis_lhs_0 == null) {
              this.s5b_1;
              get_LOGGER().k2v("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.u5b_1.i3k_1.toString() + '.');
              return null;
            } else {
              tmp_9 = tmp0_elvis_lhs_0;
            }

            tmp_8.y5b_1 = tmp_9;
            var tmp_10 = this.v5b_1;
            if (tmp_10 instanceof Unit) {
              get_LOGGER().k2v('Sending empty body for ' + this.u5b_1.i3k_1.toString());
              this.u5b_1.k3k_1.o2r(HttpHeaders_getInstance().q2y_1);
              return EmptyContent_getInstance();
            }

            var tmp_11 = this;
            var tmp0_1 = this.r5b_1;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_4 = tmp0_1.p();
            while (_iterator__ex2g4s_4.q()) {
              var element_4 = _iterator__ex2g4s_4.r();
              if (element_4.c5b_1.e5b(this.y5b_1)) {
                destination_0.n(element_4);
              }
            }

            var tmp_12;
            if (!destination_0.h()) {
              tmp_12 = destination_0;
            } else {
              tmp_12 = null;
            }

            var tmp1_elvis_lhs = tmp_12;
            var tmp_13;
            if (tmp1_elvis_lhs == null) {
              this.s5b_1;
              get_LOGGER().k2v('None of the registered converters match request Content-Type=' + this.y5b_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.u5b_1.i3k_1.toString() + '.'));
              return null;
            } else {
              tmp_13 = tmp1_elvis_lhs;
            }

            tmp_11.z5b_1 = tmp_13;
            if (this.u5b_1.a4d() == null) {
              get_LOGGER().k2v('Request has unknown body type. Skipping ContentNegotiation for ' + this.u5b_1.i3k_1.toString() + '.');
              return null;
            }

            this.u5b_1.k3k_1.o2r(HttpHeaders_getInstance().q2y_1);
            var tmp_14 = this;
            tmp_14.a5c_1 = this.z5b_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.c5c_1 = this.a5c_1;
            this.d5c_1 = this.c5c_1.p();
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!this.d5c_1.q()) {
              this.n9_1 = 5;
              continue $sm;
            }

            this.e5c_1 = this.d5c_1.r();
            var tmp_15 = this;
            tmp_15.f5c_1 = this.e5c_1;
            this.g5c_1 = this.f5c_1;
            this.n9_1 = 3;
            var tmp0_elvis_lhs_1 = charset(this.y5b_1);
            var tmp_16 = tmp0_elvis_lhs_1 == null ? Charsets_getInstance().r1z_1 : tmp0_elvis_lhs_1;
            var tmp_17 = ensureNotNull(this.u5b_1.a4d());
            var this_0 = this.v5b_1;
            var tmp_18;
            if (!equals(this_0, NullBody_instance)) {
              tmp_18 = this_0;
            } else {
              tmp_18 = null;
            }

            suspendResult = this.g5c_1.a5b_1.x56(this.y5b_1, tmp_16, tmp_17, tmp_18, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              get_LOGGER().k2v('Converted request body using ' + toString(this.g5c_1.a5b_1) + ' for ' + this.u5b_1.i3k_1.toString());
            }

            var result_0 = result;
            if (!(result_0 == null)) {
              this.b5c_1 = result_0;
              this.n9_1 = 6;
              continue $sm;
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 4:
            this.n9_1 = 2;
            continue $sm;
          case 5:
            this.b5c_1 = null;
            if (false) {
              this.n9_1 = 1;
              continue $sm;
            }

            this.n9_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.b5c_1;
            var tmp_19;
            if (tmp2_elvis_lhs == null) {
              var tmp_20 = "Can't convert " + toString(this.v5b_1) + ' with contentType ' + this.y5b_1.toString() + ' using converters ';
              throw new ContentConverterException(tmp_20 + joinToString(this.z5b_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
            } else {
              tmp_19 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_19;
            return serializedContent;
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
  function $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p5c_1 = ignoredTypes;
    this.q5c_1 = registrations;
    this.r5c_1 = $this_createClientPlugin;
    this.s5c_1 = requestUrl;
    this.t5c_1 = info;
    this.u5c_1 = body;
    this.v5c_1 = responseContentType;
    this.w5c_1 = charset;
  }
  protoOf($invoke$convertResponseCOROUTINE$1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this.u5c_1;
            if (!isInterface(tmp_0, ByteReadChannel)) {
              get_LOGGER().k2v('Response body is already transformed. Skipping ContentNegotiation for ' + this.s5c_1.toString() + '.');
              return null;
            }

            if (this.p5c_1.w(this.t5c_1.e2v_1)) {
              get_LOGGER().k2v('Response body type ' + toString(this.t5c_1.e2v_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.s5c_1.toString() + '.'));
              return null;
            }

            var tmp_1 = this;
            var tmp0 = this.q5c_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              if (element.c5b_1.e5b(this.v5c_1)) {
                destination.n(element);
              }
            }

            var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
            var _iterator__ex2g4s_0 = destination.p();
            while (_iterator__ex2g4s_0.q()) {
              var item = _iterator__ex2g4s_0.r();
              destination_0.n(item.a5b_1);
            }

            var tmp_2;
            if (!destination_0.h()) {
              tmp_2 = destination_0;
            } else {
              tmp_2 = null;
            }

            var tmp0_elvis_lhs = tmp_2;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              this.r5c_1;
              get_LOGGER().k2v('None of the registered converters match response with Content-Type=' + this.v5c_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.s5c_1.toString() + '.'));
              return null;
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_1.x5c_1 = tmp_3;
            this.n9_1 = 1;
            suspendResult = deserialize(this.x5c_1, this.u5c_1, this.t5c_1, this.w5c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!isInterface(result, ByteReadChannel)) {
              get_LOGGER().k2v('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + this.s5c_1.toString() + '.');
            }

            return result;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function _init_properties_ContentNegotiation_kt__o183go() {
    if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().rd(), PrimitiveClasses_getInstance().nd(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'ExcludedContentTypesAttr';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(KtList);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ContentType), arrayOf([]), false))]), false);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var _unused_var__etf5q3 = $p;
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      var tmp$ret$0 = tmp_0;
      var tmp$ret$1 = new TypeInfo(tmp, tmp$ret$0);
      ExcludedContentTypes = new AttributeKey(name, tmp$ret$1);
      var tmp_2 = ContentNegotiationConfig$_init_$ref_1ne3ob();
      ContentNegotiation = createClientPlugin('ContentNegotiation', tmp_2, ContentNegotiation$lambda);
    }
  }
  function JsonContentTypeMatcher() {
  }
  protoOf(JsonContentTypeMatcher).e5b = function (contentType) {
    if (contentType.s2x(Application_getInstance().y2v_1)) {
      return true;
    }
    var value = contentType.r2x().toString();
    return Application_getInstance().s2w(value) && endsWith(value, '+json', true);
  };
  var JsonContentTypeMatcher_instance;
  function JsonContentTypeMatcher_getInstance() {
    return JsonContentTypeMatcher_instance;
  }
  function get_DefaultIgnoredTypes() {
    _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1();
    return DefaultIgnoredTypes;
  }
  var DefaultIgnoredTypes;
  var properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt;
  function _init_properties_DefaultIgnoredTypesJs_kt__rjtdk1() {
    if (!properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt) {
      properties_initialized_DefaultIgnoredTypesJs_kt_65g2xt = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      DefaultIgnoredTypes = LinkedHashSet_init_$Create$();
    }
  }
  //region block: post-declaration
  protoOf(ContentNegotiationConfig).y3f = register$default;
  //endregion
  //region block: init
  JsonContentTypeMatcher_instance = new JsonContentTypeMatcher();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_ContentNegotiation;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js.map
