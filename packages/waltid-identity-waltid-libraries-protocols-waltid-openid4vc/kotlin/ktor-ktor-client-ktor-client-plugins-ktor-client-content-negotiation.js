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
  var protoOf = kotlin_kotlin.$_$.ce;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var plus = kotlin_kotlin.$_$.aa;
  var toMutableSet = kotlin_kotlin.$_$.fb;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var VOID = kotlin_kotlin.$_$.j;
  var Exception = kotlin_kotlin.$_$.cj;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y1;
  var captureStack = kotlin_kotlin.$_$.kc;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var CoroutineImpl = kotlin_kotlin.$_$.cc;
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  var TransformRequestBodyContext = kotlin_io_ktor_ktor_client_core.$_$.g;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.mb;
  var initMetadataForLambda = kotlin_kotlin.$_$.dd;
  var TransformResponseBodyContext = kotlin_io_ktor_ktor_client_core.$_$.h;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.w;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.o1;
  var isInterface = kotlin_kotlin.$_$.nd;
  var contentType = kotlin_io_ktor_ktor_http.$_$.k1;
  var get_request = kotlin_io_ktor_ktor_client_core.$_$.y;
  var suitableCharset = kotlin_io_ktor_ktor_serialization.$_$.e;
  var toString = kotlin_kotlin.$_$.ge;
  var Collection = kotlin_kotlin.$_$.o6;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var emptyList = kotlin_kotlin.$_$.k8;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.c;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.p;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.i1;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Unit = kotlin_kotlin.$_$.yj;
  var charset = kotlin_io_ktor_ktor_http.$_$.g1;
  var ensureNotNull = kotlin_kotlin.$_$.fk;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.sc;
  var joinToString = kotlin_kotlin.$_$.e9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ad;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a6;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.x;
  var getKClass = kotlin_kotlin.$_$.g;
  var setOf = kotlin_kotlin.$_$.ka;
  var KtList = kotlin_kotlin.$_$.t6;
  var ContentType = kotlin_io_ktor_ktor_http.$_$.v;
  var arrayOf = kotlin_kotlin.$_$.bk;
  var createKType = kotlin_kotlin.$_$.d;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.m;
  var createClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.i;
  var endsWith = kotlin_kotlin.$_$.zf;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
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
    this.g5b_1 = converter;
    this.h5b_1 = contentTypeToSend;
    this.i5b_1 = contentTypeMatcher;
  }
  function defaultMatcher($this, pattern) {
    return new ContentNegotiationConfig$defaultMatcher$1(pattern);
  }
  function ContentNegotiationConfig$defaultMatcher$1($pattern) {
    this.j5b_1 = $pattern;
  }
  protoOf(ContentNegotiationConfig$defaultMatcher$1).k5b = function (contentType) {
    return contentType.u2x(this.j5b_1);
  };
  function ContentNegotiationConfig() {
    this.l5b_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m5b_1 = ArrayList_init_$Create$();
    this.n5b_1 = null;
  }
  protoOf(ContentNegotiationConfig).z3f = function (contentType, converter, configuration) {
    var matcher = contentType.u2x(Application_getInstance().a2w_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
    this.o5b(contentType, converter, matcher, configuration);
  };
  protoOf(ContentNegotiationConfig).o5b = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    configuration(converter);
    var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.m5b_1.n(registration);
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
    var registrations = $this$createClientPlugin.t3s_1.m5b_1;
    var ignoredTypes = $this$createClientPlugin.t3s_1.l5b_1;
    $this$createClientPlugin.f4b(ContentNegotiation$lambda$slambda_0(registrations, $this$createClientPlugin, ignoredTypes, null));
    $this$createClientPlugin.b44(ContentNegotiation$lambda$slambda_2(ignoredTypes, registrations, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$convertRequest(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion) {
    var tmp = new $invoke$convertRequestCOROUTINE$0(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
    charset = charset === VOID ? Charsets_getInstance().t1z_1 : charset;
    var tmp = new $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
    this.m5d_1 = $registrations;
    this.n5d_1 = $this_createClientPlugin;
    this.o5d_1 = $ignoredTypes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$lambda$slambda).t5d = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
    var tmp = this.u5d($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(ContentNegotiation$lambda$slambda).g45 = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformRequestBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    var tmp_1 = !(p3 == null) ? p3 : THROW_CCE();
    return this.t5d(tmp, tmp_0, tmp_1, (p4 == null ? true : p4 instanceof TypeInfo) ? p4 : THROW_CCE(), $completion);
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
            suspendResult = invoke$convertRequest(this.m5d_1, this.n5d_1, this.o5d_1, this.q5d_1, this.r5d_1, this);
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
  protoOf(ContentNegotiation$lambda$slambda).u5d = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, completion) {
    var i = new ContentNegotiation$lambda$slambda(this.m5d_1, this.n5d_1, this.o5d_1, completion);
    i.p5d_1 = $this$transformRequestBody;
    i.q5d_1 = request;
    i.r5d_1 = body;
    i.s5d_1 = _unused_var__etf5q3;
    return i;
  };
  function ContentNegotiation$lambda$slambda_0($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
    var i = new ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation);
    var l = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
      return i.t5d($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
    };
    l.$arity = 4;
    return l;
  }
  function ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
    this.d5e_1 = $ignoredTypes;
    this.e5e_1 = $registrations;
    this.f5e_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$lambda$slambda_1).e45 = function ($this$transformResponseBody, response, body, info, $completion) {
    var tmp = this.f45($this$transformResponseBody, response, body, info, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(ContentNegotiation$lambda$slambda_1).g45 = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.e45(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
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
            var tmp0_elvis_lhs = contentType(this.h5e_1);
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.k5e_1 = tmp_1;
            this.l5e_1 = suitableCharset(get_request(this.h5e_1).d32());
            this.n9_1 = 1;
            suspendResult = invoke$convertResponse(this.d5e_1, this.e5e_1, this.f5e_1, get_request(this.h5e_1).w3m(), this.j5e_1, this.i5e_1, this.k5e_1, this.l5e_1, this);
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
  protoOf(ContentNegotiation$lambda$slambda_1).f45 = function ($this$transformResponseBody, response, body, info, completion) {
    var i = new ContentNegotiation$lambda$slambda_1(this.d5e_1, this.e5e_1, this.f5e_1, completion);
    i.g5e_1 = $this$transformResponseBody;
    i.h5e_1 = response;
    i.i5e_1 = body;
    i.j5e_1 = info;
    return i;
  };
  function ContentNegotiation$lambda$slambda_2($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
    var i = new ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation);
    var l = function ($this$transformResponseBody, response, body, info, $completion) {
      return i.e45($this$transformResponseBody, response, body, info, $completion);
    };
    l.$arity = 4;
    return l;
  }
  function ContentNegotiation$lambda$convertRequest$lambda(it) {
    _init_properties_ContentNegotiation_kt__o183go();
    return toString(it.g5b_1);
  }
  function $invoke$convertRequestCOROUTINE$0(registrations, $this_createClientPlugin, ignoredTypes, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x5b_1 = registrations;
    this.y5b_1 = $this_createClientPlugin;
    this.z5b_1 = ignoredTypes;
    this.a5c_1 = request;
    this.b5c_1 = body;
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
            if (this.a5c_1.p3k_1.z2m(get_ExcludedContentTypes())) {
              var excluded = this.a5c_1.p3k_1.x2m(get_ExcludedContentTypes());
              var tmp0 = this.x5b_1;
              var destination = ArrayList_init_$Create$();
              var _iterator__ex2g4s = tmp0.q();
              while (_iterator__ex2g4s.r()) {
                var element = _iterator__ex2g4s.s();
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
                  var _iterator__ex2g4s_0 = excluded.q();
                  while (_iterator__ex2g4s_0.r()) {
                    var element_0 = _iterator__ex2g4s_0.s();
                    if (element.h5b_1.u2x(element_0)) {
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
              tmp_1 = this.x5b_1;
            }

            tmp_0.c5c_1 = tmp_1;
            var tmp_3 = this;
            var tmp0_elvis_lhs = this.a5c_1.m3k_1.c2r(HttpHeaders_getInstance().a2y_1);
            tmp_3.d5c_1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
            var _iterator__ex2g4s_1 = this.c5c_1.q();
            while (_iterator__ex2g4s_1.r()) {
              var element_1 = _iterator__ex2g4s_1.s();
              var tmp0_0 = this.d5c_1;
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
                var _iterator__ex2g4s_2 = tmp0_0.q();
                while (_iterator__ex2g4s_2.r()) {
                  var element_2 = _iterator__ex2g4s_2.s();
                  if (Companion_getInstance().cq(element_2).u2x(element_1.h5b_1)) {
                    tmp$ret$2 = false;
                    break l$ret$3;
                  }
                }
                tmp$ret$2 = true;
              }
               while (false);
              if (tmp$ret$2) {
                var qValue = this.y5b_1.t3s_1.n5b_1;
                var contentTypeToSend = qValue == null ? element_1.h5b_1 : element_1.h5b_1.s2x('q', qValue.toString());
                get_LOGGER().m2v('Adding Accept=' + contentTypeToSend.toString() + ' header for ' + this.a5c_1.k3k_1.toString());
                accept(this.a5c_1, contentTypeToSend);
              }
            }

            var tmp_5;
            var tmp_6 = this.b5c_1;
            if (tmp_6 instanceof OutgoingContent) {
              tmp_5 = true;
            } else {
              var tmp5 = this.z5b_1;
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
                var _iterator__ex2g4s_3 = tmp5.q();
                while (_iterator__ex2g4s_3.r()) {
                  var element_3 = _iterator__ex2g4s_3.s();
                  if (element_3.ic(this.b5c_1)) {
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
              get_LOGGER().m2v('Body type ' + toString(getKClassFromExpression(this.b5c_1)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.a5c_1.k3k_1.toString() + '.'));
              return null;
            }

            var tmp_8 = this;
            var tmp0_elvis_lhs_0 = contentType_0(this.a5c_1);
            var tmp_9;
            if (tmp0_elvis_lhs_0 == null) {
              this.y5b_1;
              get_LOGGER().m2v("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.a5c_1.k3k_1.toString() + '.');
              return null;
            } else {
              tmp_9 = tmp0_elvis_lhs_0;
            }

            tmp_8.e5c_1 = tmp_9;
            var tmp_10 = this.b5c_1;
            if (tmp_10 instanceof Unit) {
              get_LOGGER().m2v('Sending empty body for ' + this.a5c_1.k3k_1.toString());
              this.a5c_1.m3k_1.q2r(HttpHeaders_getInstance().s2y_1);
              return EmptyContent_getInstance();
            }

            var tmp_11 = this;
            var tmp0_1 = this.x5b_1;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_4 = tmp0_1.q();
            while (_iterator__ex2g4s_4.r()) {
              var element_4 = _iterator__ex2g4s_4.s();
              if (element_4.i5b_1.k5b(this.e5c_1)) {
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
              this.y5b_1;
              get_LOGGER().m2v('None of the registered converters match request Content-Type=' + this.e5c_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.a5c_1.k3k_1.toString() + '.'));
              return null;
            } else {
              tmp_13 = tmp1_elvis_lhs;
            }

            tmp_11.f5c_1 = tmp_13;
            if (this.a5c_1.c4d() == null) {
              get_LOGGER().m2v('Request has unknown body type. Skipping ContentNegotiation for ' + this.a5c_1.k3k_1.toString() + '.');
              return null;
            }

            this.a5c_1.m3k_1.q2r(HttpHeaders_getInstance().s2y_1);
            var tmp_14 = this;
            tmp_14.g5c_1 = this.f5c_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.i5c_1 = this.g5c_1;
            this.j5c_1 = this.i5c_1.q();
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!this.j5c_1.r()) {
              this.n9_1 = 5;
              continue $sm;
            }

            this.k5c_1 = this.j5c_1.s();
            var tmp_15 = this;
            tmp_15.l5c_1 = this.k5c_1;
            this.m5c_1 = this.l5c_1;
            this.n9_1 = 3;
            var tmp0_elvis_lhs_1 = charset(this.e5c_1);
            var tmp_16 = tmp0_elvis_lhs_1 == null ? Charsets_getInstance().t1z_1 : tmp0_elvis_lhs_1;
            var tmp_17 = ensureNotNull(this.a5c_1.c4d());
            var this_0 = this.b5c_1;
            var tmp_18;
            if (!equals(this_0, NullBody_instance)) {
              tmp_18 = this_0;
            } else {
              tmp_18 = null;
            }

            suspendResult = this.m5c_1.g5b_1.d57(this.e5c_1, tmp_16, tmp_17, tmp_18, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              get_LOGGER().m2v('Converted request body using ' + toString(this.m5c_1.g5b_1) + ' for ' + this.a5c_1.k3k_1.toString());
            }

            var result_0 = result;
            if (!(result_0 == null)) {
              this.h5c_1 = result_0;
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
            this.h5c_1 = null;
            if (false) {
              this.n9_1 = 1;
              continue $sm;
            }

            this.n9_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.h5c_1;
            var tmp_19;
            if (tmp2_elvis_lhs == null) {
              var tmp_20 = "Can't convert " + toString(this.b5c_1) + ' with contentType ' + this.e5c_1.toString() + ' using converters ';
              throw new ContentConverterException(tmp_20 + joinToString(this.f5c_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
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
    this.v5c_1 = ignoredTypes;
    this.w5c_1 = registrations;
    this.x5c_1 = $this_createClientPlugin;
    this.y5c_1 = requestUrl;
    this.z5c_1 = info;
    this.a5d_1 = body;
    this.b5d_1 = responseContentType;
    this.c5d_1 = charset;
  }
  protoOf($invoke$convertResponseCOROUTINE$1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this.a5d_1;
            if (!isInterface(tmp_0, ByteReadChannel)) {
              get_LOGGER().m2v('Response body is already transformed. Skipping ContentNegotiation for ' + this.y5c_1.toString() + '.');
              return null;
            }

            if (this.v5c_1.x(this.z5c_1.g2v_1)) {
              get_LOGGER().m2v('Response body type ' + toString(this.z5c_1.g2v_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.y5c_1.toString() + '.'));
              return null;
            }

            var tmp_1 = this;
            var tmp0 = this.w5c_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.q();
            while (_iterator__ex2g4s.r()) {
              var element = _iterator__ex2g4s.s();
              if (element.i5b_1.k5b(this.b5d_1)) {
                destination.n(element);
              }
            }

            var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
            var _iterator__ex2g4s_0 = destination.q();
            while (_iterator__ex2g4s_0.r()) {
              var item = _iterator__ex2g4s_0.s();
              destination_0.n(item.g5b_1);
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
              this.x5c_1;
              get_LOGGER().m2v('None of the registered converters match response with Content-Type=' + this.b5d_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.y5c_1.toString() + '.'));
              return null;
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_1.d5d_1 = tmp_3;
            this.n9_1 = 1;
            suspendResult = deserialize(this.d5d_1, this.a5d_1, this.z5c_1, this.c5d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!isInterface(result, ByteReadChannel)) {
              get_LOGGER().m2v('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + this.y5c_1.toString() + '.');
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
  protoOf(JsonContentTypeMatcher).k5b = function (contentType) {
    if (contentType.u2x(Application_getInstance().a2w_1)) {
      return true;
    }
    var value = contentType.t2x().toString();
    return Application_getInstance().u2w(value) && endsWith(value, '+json', true);
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
  protoOf(ContentNegotiationConfig).a3g = register$default;
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
