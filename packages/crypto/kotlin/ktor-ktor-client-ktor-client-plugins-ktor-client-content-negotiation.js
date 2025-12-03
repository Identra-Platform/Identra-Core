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
  var protoOf = kotlin_kotlin.$_$.pc;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  var plus = kotlin_kotlin.$_$.q8;
  var toMutableSet = kotlin_kotlin.$_$.s9;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var VOID = kotlin_kotlin.$_$.j;
  var Exception = kotlin_kotlin.$_$.kg;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s1;
  var captureStack = kotlin_kotlin.$_$.xa;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var CoroutineImpl = kotlin_kotlin.$_$.pa;
  var THROW_CCE = kotlin_kotlin.$_$.tg;
  var TransformRequestBodyContext = kotlin_io_ktor_ktor_client_core.$_$.g;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.n;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.j;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z9;
  var initMetadataForLambda = kotlin_kotlin.$_$.qb;
  var TransformResponseBodyContext = kotlin_io_ktor_ktor_client_core.$_$.h;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.v;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.o1;
  var isInterface = kotlin_kotlin.$_$.ac;
  var contentType = kotlin_io_ktor_ktor_http.$_$.k1;
  var get_request = kotlin_io_ktor_ktor_client_core.$_$.x;
  var suitableCharset = kotlin_io_ktor_ktor_serialization.$_$.e;
  var toString = kotlin_kotlin.$_$.tc;
  var Collection = kotlin_kotlin.$_$.x5;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var emptyList = kotlin_kotlin.$_$.l7;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.c;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.o;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.i1;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Unit = kotlin_kotlin.$_$.eh;
  var charset = kotlin_io_ktor_ktor_http.$_$.g1;
  var ensureNotNull = kotlin_kotlin.$_$.lh;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.fb;
  var joinToString = kotlin_kotlin.$_$.c8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.nb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.k5;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.x;
  var getKClass = kotlin_kotlin.$_$.g;
  var setOf = kotlin_kotlin.$_$.z8;
  var KtList = kotlin_kotlin.$_$.c6;
  var ContentType = kotlin_io_ktor_ktor_http.$_$.v;
  var arrayOf = kotlin_kotlin.$_$.hh;
  var createKType = kotlin_kotlin.$_$.d;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var createClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.i;
  var endsWith = kotlin_kotlin.$_$.vd;
  var initMetadataForObject = kotlin_kotlin.$_$.rb;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
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
    this.d56_1 = converter;
    this.e56_1 = contentTypeToSend;
    this.f56_1 = contentTypeMatcher;
  }
  function defaultMatcher($this, pattern) {
    return new ContentNegotiationConfig$defaultMatcher$1(pattern);
  }
  function ContentNegotiationConfig$defaultMatcher$1($pattern) {
    this.g56_1 = $pattern;
  }
  protoOf(ContentNegotiationConfig$defaultMatcher$1).h56 = function (contentType) {
    return contentType.r2u(this.g56_1);
  };
  function ContentNegotiationConfig() {
    this.i56_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.j56_1 = ArrayList_init_$Create$();
    this.k56_1 = null;
  }
  protoOf(ContentNegotiationConfig).w3c = function (contentType, converter, configuration) {
    var matcher = contentType.r2u(Application_getInstance().x2s_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
    this.l56(contentType, converter, matcher, configuration);
  };
  protoOf(ContentNegotiationConfig).l56 = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    configuration(converter);
    var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.j56_1.n(registration);
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
    var registrations = $this$createClientPlugin.q3p_1.j56_1;
    var ignoredTypes = $this$createClientPlugin.q3p_1.i56_1;
    $this$createClientPlugin.m46(ContentNegotiation$lambda$slambda_0(registrations, $this$createClientPlugin, ignoredTypes, null));
    $this$createClientPlugin.y40(ContentNegotiation$lambda$slambda_2(ignoredTypes, registrations, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$convertRequest(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion) {
    var tmp = new $invoke$convertRequestCOROUTINE$0(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
    charset = charset === VOID ? Charsets_getInstance().r1w_1 : charset;
    var tmp = new $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
    this.j58_1 = $registrations;
    this.k58_1 = $this_createClientPlugin;
    this.l58_1 = $ignoredTypes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$lambda$slambda).q58 = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
    var tmp = this.r58($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(ContentNegotiation$lambda$slambda).d42 = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformRequestBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    var tmp_1 = !(p3 == null) ? p3 : THROW_CCE();
    return this.q58(tmp, tmp_0, tmp_1, (p4 == null ? true : p4 instanceof TypeInfo) ? p4 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$lambda$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = invoke$convertRequest(this.j58_1, this.k58_1, this.l58_1, this.n58_1, this.o58_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ContentNegotiation$lambda$slambda).r58 = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, completion) {
    var i = new ContentNegotiation$lambda$slambda(this.j58_1, this.k58_1, this.l58_1, completion);
    i.m58_1 = $this$transformRequestBody;
    i.n58_1 = request;
    i.o58_1 = body;
    i.p58_1 = _unused_var__etf5q3;
    return i;
  };
  function ContentNegotiation$lambda$slambda_0($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
    var i = new ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation);
    var l = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
      return i.q58($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
    };
    l.$arity = 4;
    return l;
  }
  function ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
    this.a59_1 = $ignoredTypes;
    this.b59_1 = $registrations;
    this.c59_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$lambda$slambda_1).b42 = function ($this$transformResponseBody, response, body, info, $completion) {
    var tmp = this.c42($this$transformResponseBody, response, body, info, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(ContentNegotiation$lambda$slambda_1).d42 = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.b42(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$lambda$slambda_1).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.e59_1);
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.h59_1 = tmp_1;
            this.i59_1 = suitableCharset(get_request(this.e59_1).a2z());
            this.l9_1 = 1;
            suspendResult = invoke$convertResponse(this.a59_1, this.b59_1, this.c59_1, get_request(this.e59_1).t3j(), this.g59_1, this.f59_1, this.h59_1, this.i59_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ContentNegotiation$lambda$slambda_1).c42 = function ($this$transformResponseBody, response, body, info, completion) {
    var i = new ContentNegotiation$lambda$slambda_1(this.a59_1, this.b59_1, this.c59_1, completion);
    i.d59_1 = $this$transformResponseBody;
    i.e59_1 = response;
    i.f59_1 = body;
    i.g59_1 = info;
    return i;
  };
  function ContentNegotiation$lambda$slambda_2($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
    var i = new ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation);
    var l = function ($this$transformResponseBody, response, body, info, $completion) {
      return i.b42($this$transformResponseBody, response, body, info, $completion);
    };
    l.$arity = 4;
    return l;
  }
  function ContentNegotiation$lambda$convertRequest$lambda(it) {
    _init_properties_ContentNegotiation_kt__o183go();
    return toString(it.d56_1);
  }
  function $invoke$convertRequestCOROUTINE$0(registrations, $this_createClientPlugin, ignoredTypes, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u56_1 = registrations;
    this.v56_1 = $this_createClientPlugin;
    this.w56_1 = ignoredTypes;
    this.x56_1 = request;
    this.y56_1 = body;
  }
  protoOf($invoke$convertRequestCOROUTINE$0).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 7;
            var tmp_0 = this;
            var tmp_1;
            if (this.x56_1.m3h_1.w2j(get_ExcludedContentTypes())) {
              var excluded = this.x56_1.m3h_1.u2j(get_ExcludedContentTypes());
              var tmp0 = this.u56_1;
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
                    if (element.e56_1.r2u(element_0)) {
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
              tmp_1 = this.u56_1;
            }

            tmp_0.z56_1 = tmp_1;
            var tmp_3 = this;
            var tmp0_elvis_lhs = this.x56_1.j3h_1.z2n(HttpHeaders_getInstance().x2u_1);
            tmp_3.a57_1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
            var _iterator__ex2g4s_1 = this.z56_1.p();
            while (_iterator__ex2g4s_1.q()) {
              var element_1 = _iterator__ex2g4s_1.r();
              var tmp0_0 = this.a57_1;
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
                  if (Companion_getInstance().ap(element_2).r2u(element_1.e56_1)) {
                    tmp$ret$2 = false;
                    break l$ret$3;
                  }
                }
                tmp$ret$2 = true;
              }
               while (false);
              if (tmp$ret$2) {
                var qValue = this.v56_1.q3p_1.k56_1;
                var contentTypeToSend = qValue == null ? element_1.e56_1 : element_1.e56_1.p2u('q', qValue.toString());
                get_LOGGER().j2s('Adding Accept=' + contentTypeToSend.toString() + ' header for ' + this.x56_1.h3h_1.toString());
                accept(this.x56_1, contentTypeToSend);
              }
            }

            var tmp_5;
            var tmp_6 = this.y56_1;
            if (tmp_6 instanceof OutgoingContent) {
              tmp_5 = true;
            } else {
              var tmp5 = this.w56_1;
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
                  if (element_3.gc(this.y56_1)) {
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
              get_LOGGER().j2s('Body type ' + toString(getKClassFromExpression(this.y56_1)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.x56_1.h3h_1.toString() + '.'));
              return null;
            }

            var tmp_8 = this;
            var tmp0_elvis_lhs_0 = contentType_0(this.x56_1);
            var tmp_9;
            if (tmp0_elvis_lhs_0 == null) {
              this.v56_1;
              get_LOGGER().j2s("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.x56_1.h3h_1.toString() + '.');
              return null;
            } else {
              tmp_9 = tmp0_elvis_lhs_0;
            }

            tmp_8.b57_1 = tmp_9;
            var tmp_10 = this.y56_1;
            if (tmp_10 instanceof Unit) {
              get_LOGGER().j2s('Sending empty body for ' + this.x56_1.h3h_1.toString());
              this.x56_1.j3h_1.n2o(HttpHeaders_getInstance().p2v_1);
              return EmptyContent_getInstance();
            }

            var tmp_11 = this;
            var tmp0_1 = this.u56_1;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_4 = tmp0_1.p();
            while (_iterator__ex2g4s_4.q()) {
              var element_4 = _iterator__ex2g4s_4.r();
              if (element_4.f56_1.h56(this.b57_1)) {
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
              this.v56_1;
              get_LOGGER().j2s('None of the registered converters match request Content-Type=' + this.b57_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.x56_1.h3h_1.toString() + '.'));
              return null;
            } else {
              tmp_13 = tmp1_elvis_lhs;
            }

            tmp_11.c57_1 = tmp_13;
            if (this.x56_1.j48() == null) {
              get_LOGGER().j2s('Request has unknown body type. Skipping ContentNegotiation for ' + this.x56_1.h3h_1.toString() + '.');
              return null;
            }

            this.x56_1.j3h_1.n2o(HttpHeaders_getInstance().p2v_1);
            var tmp_14 = this;
            tmp_14.d57_1 = this.c57_1;
            this.l9_1 = 1;
            continue $sm;
          case 1:
            this.f57_1 = this.d57_1;
            this.g57_1 = this.f57_1.p();
            this.l9_1 = 2;
            continue $sm;
          case 2:
            if (!this.g57_1.q()) {
              this.l9_1 = 5;
              continue $sm;
            }

            this.h57_1 = this.g57_1.r();
            var tmp_15 = this;
            tmp_15.i57_1 = this.h57_1;
            this.j57_1 = this.i57_1;
            this.l9_1 = 3;
            var tmp0_elvis_lhs_1 = charset(this.b57_1);
            var tmp_16 = tmp0_elvis_lhs_1 == null ? Charsets_getInstance().r1w_1 : tmp0_elvis_lhs_1;
            var tmp_17 = ensureNotNull(this.x56_1.j48());
            var this_0 = this.y56_1;
            var tmp_18;
            if (!equals(this_0, NullBody_instance)) {
              tmp_18 = this_0;
            } else {
              tmp_18 = null;
            }

            suspendResult = this.j57_1.d56_1.a52(this.b57_1, tmp_16, tmp_17, tmp_18, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              get_LOGGER().j2s('Converted request body using ' + toString(this.j57_1.d56_1) + ' for ' + this.x56_1.h3h_1.toString());
            }

            var result_0 = result;
            if (!(result_0 == null)) {
              this.e57_1 = result_0;
              this.l9_1 = 6;
              continue $sm;
            } else {
              this.l9_1 = 4;
              continue $sm;
            }

          case 4:
            this.l9_1 = 2;
            continue $sm;
          case 5:
            this.e57_1 = null;
            if (false) {
              this.l9_1 = 1;
              continue $sm;
            }

            this.l9_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.e57_1;
            var tmp_19;
            if (tmp2_elvis_lhs == null) {
              var tmp_20 = "Can't convert " + toString(this.y56_1) + ' with contentType ' + this.b57_1.toString() + ' using converters ';
              throw new ContentConverterException(tmp_20 + joinToString(this.c57_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
            } else {
              tmp_19 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_19;
            return serializedContent;
          case 7:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 7) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s57_1 = ignoredTypes;
    this.t57_1 = registrations;
    this.u57_1 = $this_createClientPlugin;
    this.v57_1 = requestUrl;
    this.w57_1 = info;
    this.x57_1 = body;
    this.y57_1 = responseContentType;
    this.z57_1 = charset;
  }
  protoOf($invoke$convertResponseCOROUTINE$1).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            var tmp_0 = this.x57_1;
            if (!isInterface(tmp_0, ByteReadChannel)) {
              get_LOGGER().j2s('Response body is already transformed. Skipping ContentNegotiation for ' + this.v57_1.toString() + '.');
              return null;
            }

            if (this.s57_1.x1(this.w57_1.d2s_1)) {
              get_LOGGER().j2s('Response body type ' + toString(this.w57_1.d2s_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.v57_1.toString() + '.'));
              return null;
            }

            var tmp_1 = this;
            var tmp0 = this.t57_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              if (element.f56_1.h56(this.y57_1)) {
                destination.n(element);
              }
            }

            var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
            var _iterator__ex2g4s_0 = destination.p();
            while (_iterator__ex2g4s_0.q()) {
              var item = _iterator__ex2g4s_0.r();
              destination_0.n(item.d56_1);
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
              this.u57_1;
              get_LOGGER().j2s('None of the registered converters match response with Content-Type=' + this.y57_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.v57_1.toString() + '.'));
              return null;
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_1.a58_1 = tmp_3;
            this.l9_1 = 1;
            suspendResult = deserialize(this.a58_1, this.x57_1, this.w57_1, this.z57_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!isInterface(result, ByteReadChannel)) {
              get_LOGGER().j2s('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + this.v57_1.toString() + '.');
            }

            return result;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function _init_properties_ContentNegotiation_kt__o183go() {
    if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().pd(), PrimitiveClasses_getInstance().ld(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
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
  protoOf(JsonContentTypeMatcher).h56 = function (contentType) {
    if (contentType.r2u(Application_getInstance().x2s_1)) {
      return true;
    }
    var value = contentType.q2u().toString();
    return Application_getInstance().r2t(value) && endsWith(value, '+json', true);
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
  protoOf(ContentNegotiationConfig).x3c = register$default;
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
