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
  var protoOf = kotlin_kotlin.$_$.gd;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  var plus = kotlin_kotlin.$_$.f9;
  var toMutableSet = kotlin_kotlin.$_$.ja;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var register$default = kotlin_io_ktor_ktor_serialization.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.a6;
  var Configuration = kotlin_io_ktor_ktor_serialization.$_$.c;
  var VOID = kotlin_kotlin.$_$.j;
  var Exception = kotlin_kotlin.$_$.qh;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.t1;
  var captureStack = kotlin_kotlin.$_$.ob;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var CoroutineImpl = kotlin_kotlin.$_$.gb;
  var THROW_CCE = kotlin_kotlin.$_$.ai;
  var TransformRequestBodyContext = kotlin_io_ktor_ktor_client_core.$_$.g;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.k;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.qa;
  var initMetadataForLambda = kotlin_kotlin.$_$.hc;
  var TransformResponseBodyContext = kotlin_io_ktor_ktor_client_core.$_$.h;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.w;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.o1;
  var isInterface = kotlin_kotlin.$_$.rc;
  var contentType = kotlin_io_ktor_ktor_http.$_$.k1;
  var get_request = kotlin_io_ktor_ktor_client_core.$_$.y;
  var suitableCharset = kotlin_io_ktor_ktor_serialization.$_$.e;
  var toString = kotlin_kotlin.$_$.kd;
  var Collection = kotlin_kotlin.$_$.c6;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var emptyList = kotlin_kotlin.$_$.v7;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.c;
  var accept = kotlin_io_ktor_ktor_client_core.$_$.p;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var contentType_0 = kotlin_io_ktor_ktor_http.$_$.i1;
  var EmptyContent_getInstance = kotlin_io_ktor_ktor_client_core.$_$.e;
  var Unit = kotlin_kotlin.$_$.li;
  var charset = kotlin_io_ktor_ktor_http.$_$.g1;
  var ensureNotNull = kotlin_kotlin.$_$.si;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var equals = kotlin_kotlin.$_$.wb;
  var joinToString = kotlin_kotlin.$_$.o8;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ec;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var deserialize = kotlin_io_ktor_ktor_serialization.$_$.a;
  var KtorSimpleLogger = kotlin_io_ktor_ktor_utils.$_$.f;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.p5;
  var HttpStatusCode = kotlin_io_ktor_ktor_http.$_$.x;
  var getKClass = kotlin_kotlin.$_$.g;
  var setOf = kotlin_kotlin.$_$.o9;
  var KtList = kotlin_kotlin.$_$.h6;
  var ContentType = kotlin_io_ktor_ktor_http.$_$.v;
  var arrayOf = kotlin_kotlin.$_$.oi;
  var createKType = kotlin_kotlin.$_$.d;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.m;
  var createClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.i;
  var endsWith = kotlin_kotlin.$_$.ue;
  var initMetadataForObject = kotlin_kotlin.$_$.ic;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.e1;
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
    this.z58_1 = converter;
    this.a59_1 = contentTypeToSend;
    this.b59_1 = contentTypeMatcher;
  }
  function defaultMatcher($this, pattern) {
    return new ContentNegotiationConfig$defaultMatcher$1(pattern);
  }
  function ContentNegotiationConfig$defaultMatcher$1($pattern) {
    this.c59_1 = $pattern;
  }
  protoOf(ContentNegotiationConfig$defaultMatcher$1).d59 = function (contentType) {
    return contentType.r2v(this.c59_1);
  };
  function ContentNegotiationConfig() {
    this.e59_1 = toMutableSet(plus(get_DefaultIgnoredTypes(), get_DefaultCommonIgnoredTypes()));
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f59_1 = ArrayList_init_$Create$();
    this.g59_1 = null;
  }
  protoOf(ContentNegotiationConfig).w3d = function (contentType, converter, configuration) {
    var matcher = contentType.r2v(Application_getInstance().x2t_1) ? JsonContentTypeMatcher_instance : defaultMatcher(this, contentType);
    this.h59(contentType, converter, matcher, configuration);
  };
  protoOf(ContentNegotiationConfig).h59 = function (contentTypeToSend, converter, contentTypeMatcher, configuration) {
    // Inline function 'kotlin.apply' call
    configuration(converter);
    var registration = new ConverterRegistration(converter, contentTypeToSend, contentTypeMatcher);
    this.f59_1.n(registration);
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
    var registrations = $this$createClientPlugin.q3q_1.f59_1;
    var ignoredTypes = $this$createClientPlugin.q3q_1.e59_1;
    $this$createClientPlugin.c49(ContentNegotiation$lambda$slambda_0(registrations, $this$createClientPlugin, ignoredTypes, null));
    $this$createClientPlugin.y41(ContentNegotiation$lambda$slambda_2(ignoredTypes, registrations, $this$createClientPlugin, null));
    return Unit_instance;
  }
  function invoke$convertRequest(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion) {
    var tmp = new $invoke$convertRequestCOROUTINE$0(registrations, $this_createClientPlugin, ignoredTypes, request, body, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function invoke$convertResponse(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion) {
    charset = charset === VOID ? Charsets_getInstance().q1x_1 : charset;
    var tmp = new $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
    this.f5b_1 = $registrations;
    this.g5b_1 = $this_createClientPlugin;
    this.h5b_1 = $ignoredTypes;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$lambda$slambda).m5b = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
    var tmp = this.n5b($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(ContentNegotiation$lambda$slambda).d43 = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformRequestBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE();
    var tmp_1 = !(p3 == null) ? p3 : THROW_CCE();
    return this.m5b(tmp, tmp_0, tmp_1, (p4 == null ? true : p4 instanceof TypeInfo) ? p4 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$lambda$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = invoke$convertRequest(this.f5b_1, this.g5b_1, this.h5b_1, this.j5b_1, this.k5b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ContentNegotiation$lambda$slambda).n5b = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, completion) {
    var i = new ContentNegotiation$lambda$slambda(this.f5b_1, this.g5b_1, this.h5b_1, completion);
    i.i5b_1 = $this$transformRequestBody;
    i.j5b_1 = request;
    i.k5b_1 = body;
    i.l5b_1 = _unused_var__etf5q3;
    return i;
  };
  function ContentNegotiation$lambda$slambda_0($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation) {
    var i = new ContentNegotiation$lambda$slambda($registrations, $this_createClientPlugin, $ignoredTypes, resultContinuation);
    var l = function ($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion) {
      return i.m5b($this$transformRequestBody, request, body, _unused_var__etf5q3, $completion);
    };
    l.$arity = 4;
    return l;
  }
  function ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
    this.w5b_1 = $ignoredTypes;
    this.x5b_1 = $registrations;
    this.y5b_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ContentNegotiation$lambda$slambda_1).b43 = function ($this$transformResponseBody, response, body, info, $completion) {
    var tmp = this.c43($this$transformResponseBody, response, body, info, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(ContentNegotiation$lambda$slambda_1).d43 = function (p1, p2, p3, p4, $completion) {
    var tmp = p1 instanceof TransformResponseBodyContext ? p1 : THROW_CCE();
    var tmp_0 = p2 instanceof HttpResponse ? p2 : THROW_CCE();
    var tmp_1 = (!(p3 == null) ? isInterface(p3, ByteReadChannel) : false) ? p3 : THROW_CCE();
    return this.b43(tmp, tmp_0, tmp_1, p4 instanceof TypeInfo ? p4 : THROW_CCE(), $completion);
  };
  protoOf(ContentNegotiation$lambda$slambda_1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = contentType(this.a5c_1);
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.d5c_1 = tmp_1;
            this.e5c_1 = suitableCharset(get_request(this.a5c_1).a30());
            this.m9_1 = 1;
            suspendResult = invoke$convertResponse(this.w5b_1, this.x5b_1, this.y5b_1, get_request(this.a5c_1).t3k(), this.c5c_1, this.b5c_1, this.d5c_1, this.e5c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ContentNegotiation$lambda$slambda_1).c43 = function ($this$transformResponseBody, response, body, info, completion) {
    var i = new ContentNegotiation$lambda$slambda_1(this.w5b_1, this.x5b_1, this.y5b_1, completion);
    i.z5b_1 = $this$transformResponseBody;
    i.a5c_1 = response;
    i.b5c_1 = body;
    i.c5c_1 = info;
    return i;
  };
  function ContentNegotiation$lambda$slambda_2($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation) {
    var i = new ContentNegotiation$lambda$slambda_1($ignoredTypes, $registrations, $this_createClientPlugin, resultContinuation);
    var l = function ($this$transformResponseBody, response, body, info, $completion) {
      return i.b43($this$transformResponseBody, response, body, info, $completion);
    };
    l.$arity = 4;
    return l;
  }
  function ContentNegotiation$lambda$convertRequest$lambda(it) {
    _init_properties_ContentNegotiation_kt__o183go();
    return toString(it.z58_1);
  }
  function $invoke$convertRequestCOROUTINE$0(registrations, $this_createClientPlugin, ignoredTypes, request, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q59_1 = registrations;
    this.r59_1 = $this_createClientPlugin;
    this.s59_1 = ignoredTypes;
    this.t59_1 = request;
    this.u59_1 = body;
  }
  protoOf($invoke$convertRequestCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 7;
            var tmp_0 = this;
            var tmp_1;
            if (this.t59_1.m3i_1.w2k(get_ExcludedContentTypes())) {
              var excluded = this.t59_1.m3i_1.u2k(get_ExcludedContentTypes());
              var tmp0 = this.q59_1;
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
                    if (element.a59_1.r2v(element_0)) {
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
              tmp_1 = this.q59_1;
            }

            tmp_0.v59_1 = tmp_1;
            var tmp_3 = this;
            var tmp0_elvis_lhs = this.t59_1.j3i_1.z2o(HttpHeaders_getInstance().x2v_1);
            tmp_3.w59_1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
            var _iterator__ex2g4s_1 = this.v59_1.p();
            while (_iterator__ex2g4s_1.q()) {
              var element_1 = _iterator__ex2g4s_1.r();
              var tmp0_0 = this.w59_1;
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
                  if (Companion_getInstance().sp(element_2).r2v(element_1.a59_1)) {
                    tmp$ret$2 = false;
                    break l$ret$3;
                  }
                }
                tmp$ret$2 = true;
              }
               while (false);
              if (tmp$ret$2) {
                var qValue = this.r59_1.q3q_1.g59_1;
                var contentTypeToSend = qValue == null ? element_1.a59_1 : element_1.a59_1.p2v('q', qValue.toString());
                get_LOGGER().j2t('Adding Accept=' + contentTypeToSend.toString() + ' header for ' + this.t59_1.h3i_1.toString());
                accept(this.t59_1, contentTypeToSend);
              }
            }

            var tmp_5;
            var tmp_6 = this.u59_1;
            if (tmp_6 instanceof OutgoingContent) {
              tmp_5 = true;
            } else {
              var tmp5 = this.s59_1;
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
                  if (element_3.hc(this.u59_1)) {
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
              get_LOGGER().j2t('Body type ' + toString(getKClassFromExpression(this.u59_1)) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.t59_1.h3i_1.toString() + '.'));
              return null;
            }

            var tmp_8 = this;
            var tmp0_elvis_lhs_0 = contentType_0(this.t59_1);
            var tmp_9;
            if (tmp0_elvis_lhs_0 == null) {
              this.r59_1;
              get_LOGGER().j2t("Request doesn't have Content-Type header. Skipping ContentNegotiation for " + this.t59_1.h3i_1.toString() + '.');
              return null;
            } else {
              tmp_9 = tmp0_elvis_lhs_0;
            }

            tmp_8.x59_1 = tmp_9;
            var tmp_10 = this.u59_1;
            if (tmp_10 instanceof Unit) {
              get_LOGGER().j2t('Sending empty body for ' + this.t59_1.h3i_1.toString());
              this.t59_1.j3i_1.n2p(HttpHeaders_getInstance().p2w_1);
              return EmptyContent_getInstance();
            }

            var tmp_11 = this;
            var tmp0_1 = this.q59_1;
            var destination_0 = ArrayList_init_$Create$();
            var _iterator__ex2g4s_4 = tmp0_1.p();
            while (_iterator__ex2g4s_4.q()) {
              var element_4 = _iterator__ex2g4s_4.r();
              if (element_4.b59_1.d59(this.x59_1)) {
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
              this.r59_1;
              get_LOGGER().j2t('None of the registered converters match request Content-Type=' + this.x59_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.t59_1.h3i_1.toString() + '.'));
              return null;
            } else {
              tmp_13 = tmp1_elvis_lhs;
            }

            tmp_11.y59_1 = tmp_13;
            if (this.t59_1.z4a() == null) {
              get_LOGGER().j2t('Request has unknown body type. Skipping ContentNegotiation for ' + this.t59_1.h3i_1.toString() + '.');
              return null;
            }

            this.t59_1.j3i_1.n2p(HttpHeaders_getInstance().p2w_1);
            var tmp_14 = this;
            tmp_14.z59_1 = this.y59_1;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            this.b5a_1 = this.z59_1;
            this.c5a_1 = this.b5a_1.p();
            this.m9_1 = 2;
            continue $sm;
          case 2:
            if (!this.c5a_1.q()) {
              this.m9_1 = 5;
              continue $sm;
            }

            this.d5a_1 = this.c5a_1.r();
            var tmp_15 = this;
            tmp_15.e5a_1 = this.d5a_1;
            this.f5a_1 = this.e5a_1;
            this.m9_1 = 3;
            var tmp0_elvis_lhs_1 = charset(this.x59_1);
            var tmp_16 = tmp0_elvis_lhs_1 == null ? Charsets_getInstance().q1x_1 : tmp0_elvis_lhs_1;
            var tmp_17 = ensureNotNull(this.t59_1.z4a());
            var this_0 = this.u59_1;
            var tmp_18;
            if (!equals(this_0, NullBody_instance)) {
              tmp_18 = this_0;
            } else {
              tmp_18 = null;
            }

            suspendResult = this.f5a_1.z58_1.w54(this.x59_1, tmp_16, tmp_17, tmp_18, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var result = suspendResult;
            if (!(result == null)) {
              get_LOGGER().j2t('Converted request body using ' + toString(this.f5a_1.z58_1) + ' for ' + this.t59_1.h3i_1.toString());
            }

            var result_0 = result;
            if (!(result_0 == null)) {
              this.a5a_1 = result_0;
              this.m9_1 = 6;
              continue $sm;
            } else {
              this.m9_1 = 4;
              continue $sm;
            }

          case 4:
            this.m9_1 = 2;
            continue $sm;
          case 5:
            this.a5a_1 = null;
            if (false) {
              this.m9_1 = 1;
              continue $sm;
            }

            this.m9_1 = 6;
            continue $sm;
          case 6:
            var tmp2_elvis_lhs = this.a5a_1;
            var tmp_19;
            if (tmp2_elvis_lhs == null) {
              var tmp_20 = "Can't convert " + toString(this.u59_1) + ' with contentType ' + this.x59_1.toString() + ' using converters ';
              throw new ContentConverterException(tmp_20 + joinToString(this.y59_1, VOID, VOID, VOID, VOID, VOID, ContentNegotiation$lambda$convertRequest$lambda));
            } else {
              tmp_19 = tmp2_elvis_lhs;
            }

            var serializedContent = tmp_19;
            return serializedContent;
          case 7:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 7) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$convertResponseCOROUTINE$1(ignoredTypes, registrations, $this_createClientPlugin, requestUrl, info, body, responseContentType, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o5a_1 = ignoredTypes;
    this.p5a_1 = registrations;
    this.q5a_1 = $this_createClientPlugin;
    this.r5a_1 = requestUrl;
    this.s5a_1 = info;
    this.t5a_1 = body;
    this.u5a_1 = responseContentType;
    this.v5a_1 = charset;
  }
  protoOf($invoke$convertResponseCOROUTINE$1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            var tmp_0 = this.t5a_1;
            if (!isInterface(tmp_0, ByteReadChannel)) {
              get_LOGGER().j2t('Response body is already transformed. Skipping ContentNegotiation for ' + this.r5a_1.toString() + '.');
              return null;
            }

            if (this.o5a_1.x1(this.s5a_1.d2t_1)) {
              get_LOGGER().j2t('Response body type ' + toString(this.s5a_1.d2t_1) + ' is in ignored types. ' + ('Skipping ContentNegotiation for ' + this.r5a_1.toString() + '.'));
              return null;
            }

            var tmp_1 = this;
            var tmp0 = this.p5a_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              if (element.b59_1.d59(this.u5a_1)) {
                destination.n(element);
              }
            }

            var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
            var _iterator__ex2g4s_0 = destination.p();
            while (_iterator__ex2g4s_0.q()) {
              var item = _iterator__ex2g4s_0.r();
              destination_0.n(item.z58_1);
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
              this.q5a_1;
              get_LOGGER().j2t('None of the registered converters match response with Content-Type=' + this.u5a_1.toString() + '. ' + ('Skipping ContentNegotiation for ' + this.r5a_1.toString() + '.'));
              return null;
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_1.w5a_1 = tmp_3;
            this.m9_1 = 1;
            suspendResult = deserialize(this.w5a_1, this.t5a_1, this.s5a_1, this.v5a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            if (!isInterface(result, ByteReadChannel)) {
              get_LOGGER().j2t('Response body was converted to ' + toString(getKClassFromExpression(result)) + ' for ' + this.r5a_1.toString() + '.');
            }

            return result;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_ContentNegotiation_kt_1ayduy;
  function _init_properties_ContentNegotiation_kt__o183go() {
    if (!properties_initialized_ContentNegotiation_kt_1ayduy) {
      properties_initialized_ContentNegotiation_kt_1ayduy = true;
      LOGGER = KtorSimpleLogger('io.ktor.client.plugins.contentnegotiation.ContentNegotiation');
      DefaultCommonIgnoredTypes = setOf([PrimitiveClasses_getInstance().qd(), PrimitiveClasses_getInstance().md(), getKClass(HttpStatusCode), getKClass(ByteReadChannel), getKClass(OutgoingContent)]);
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
  protoOf(JsonContentTypeMatcher).d59 = function (contentType) {
    if (contentType.r2v(Application_getInstance().x2t_1)) {
      return true;
    }
    var value = contentType.q2v().toString();
    return Application_getInstance().r2u(value) && endsWith(value, '+json', true);
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
  protoOf(ContentNegotiationConfig).x3d = register$default;
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
