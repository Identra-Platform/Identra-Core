(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './kotlinx-atomicfu.js', './ktor-ktor-http.js', './ktor-ktor-utils.js', './ktor-ktor-client-ktor-client-core.js', './ktor-ktor-io.js', './kotlinx-io-kotlinx-io-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./kotlinx-atomicfu.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./ktor-ktor-io.js'), require('./kotlinx-io-kotlinx-io-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging'.");
    }
    globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'] = factory(typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'] === 'undefined' ? {} : globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['kotlinx-atomicfu'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-utils'], globalThis['ktor-ktor-client-ktor-client-core'], globalThis['ktor-ktor-io'], globalThis['kotlinx-io-kotlinx-io-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_io_core) {
  'use strict';
  //region block: imports
  var CoroutineImpl = kotlin_kotlin.$_$.cc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.mb;
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  var isCharSequence = kotlin_kotlin.$_$.jd;
  var trim = kotlin_kotlin.$_$.ni;
  var toString = kotlin_kotlin.$_$.ge;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var protoOf = kotlin_kotlin.$_$.ce;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ad;
  var charSequenceLength = kotlin_kotlin.$_$.oc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var VOID = kotlin_kotlin.$_$.j;
  var Enum = kotlin_kotlin.$_$.aj;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.r;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zc;
  var println = kotlin_kotlin.$_$.fc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var Long = kotlin_kotlin.$_$.fj;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.q;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.p;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.o;
  var toLong = kotlin_kotlin.$_$.ee;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.n;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.h;
  var initMetadataForLambda = kotlin_kotlin.$_$.dd;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var isSuspendFunction = kotlin_kotlin.$_$.rd;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.w;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.i;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.c;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.v;
  var Phases_getInstance_1 = kotlin_io_ktor_ktor_client_core.$_$.d;
  var get_ResponseObserver = kotlin_io_ktor_ktor_client_core.$_$.j;
  var Collection = kotlin_kotlin.$_$.o6;
  var isInterface = kotlin_kotlin.$_$.nd;
  var toString_0 = kotlin_kotlin.$_$.sk;
  var charset = kotlin_io_ktor_ktor_http.$_$.g1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.m1;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var Url = kotlin_io_ktor_ktor_http.$_$.c1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var joinToString = kotlin_kotlin.$_$.e9;
  var equals = kotlin_kotlin.$_$.sc;
  var HttpClientCall = kotlin_io_ktor_ktor_client_core.$_$.f;
  var contentType = kotlin_io_ktor_ktor_http.$_$.k1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.l;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.b;
  var GZipEncoder_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.f;
  var readText = kotlin_io_ktor_ktor_io.$_$.c1;
  var Triple = kotlin_kotlin.$_$.pj;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.d;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.g1;
  var decode = kotlin_io_ktor_ktor_io.$_$.s;
  var charSequenceGet = kotlin_kotlin.$_$.nc;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nk;
  var split = kotlin_io_ktor_ktor_utils.$_$.e1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.s;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.n1;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.a1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.r1;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.w;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var EmptyContent = kotlin_io_ktor_ktor_client_core.$_$.z;
  var appendIfNameAbsent = kotlin_io_ktor_ktor_utils.$_$.y;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.x;
  var toLongOrNull = kotlin_kotlin.$_$.zh;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.h1;
  var get_request = kotlin_io_ktor_ktor_client_core.$_$.y;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var get_isSaved = kotlin_io_ktor_ktor_client_core.$_$.n;
  var wrapWithContent = kotlin_io_ktor_ktor_client_core.$_$.k;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.bk;
  var createKType = kotlin_kotlin.$_$.d;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.k;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.m;
  var Unit = kotlin_kotlin.$_$.yj;
  var createClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.i;
  var toList = kotlin_kotlin.$_$.wa;
  var sortedWith = kotlin_kotlin.$_$.pa;
  var FunctionAdapter = kotlin_kotlin.$_$.gc;
  var Comparator = kotlin_kotlin.$_$.xi;
  var hashCode = kotlin_kotlin.$_$.xc;
  var compareValues = kotlin_kotlin.$_$.kb;
  var writer = kotlin_io_ktor_ktor_io.$_$.x1;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.p1;
  var copyToBoth = kotlin_io_ktor_ktor_utils.$_$.z;
  var get = kotlin_kotlin.$_$.yb;
  var fold = kotlin_kotlin.$_$.xb;
  var minusKey = kotlin_kotlin.$_$.zb;
  var plus = kotlin_kotlin.$_$.bc;
  var Element = kotlin_kotlin.$_$.ac;
  //endregion
  //region block: pre-declaration
  initMetadataForCoroutine($logResponseExceptionCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($logResponseBodyCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($closeResponseLogCOROUTINE$2, CoroutineImpl);
  initMetadataForClass(HttpClientCallLogger, 'HttpClientCallLogger', VOID, VOID, VOID, [1, 0]);
  initMetadataForClass(LogLevel, 'LogLevel', VOID, Enum);
  initMetadataForClass(LoggedContent, 'LoggedContent', VOID, ReadChannelContent);
  initMetadataForCompanion(Companion);
  initMetadataForClass(SimpleLogger, 'SimpleLogger', SimpleLogger);
  initMetadataForClass(LoggingConfig, 'LoggingConfig', LoggingConfig);
  initMetadataForClass(LoggingFormat, 'LoggingFormat', VOID, Enum);
  initMetadataForClass(Context, 'Context', VOID, VOID, VOID, [1, 0]);
  initMetadataForLambda(SendHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(SendHook, 'SendHook');
  initMetadataForClass(Context_0, 'Context', VOID, VOID, VOID, [1]);
  initMetadataForLambda(ResponseAfterEncodingHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(ResponseAfterEncodingHook, 'ResponseAfterEncodingHook');
  initMetadataForClass(Context_1, 'Context', VOID, VOID, VOID, [0]);
  initMetadataForLambda(ResponseHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(ResponseHook, 'ResponseHook');
  initMetadataForClass(Context_2, 'Context', VOID, VOID, VOID, [0]);
  initMetadataForLambda(ReceiveHook$install$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForObject(ReceiveHook, 'ReceiveHook');
  initMetadataForLambda(Logging$lambda$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Logging$lambda$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Logging$lambda$slambda_3, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Logging$lambda$slambda_5, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Logging$lambda$slambda_7, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Logging$lambda$detectIfBinary$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Logging$lambda$logOutgoingContent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Logging$lambda$logRequestBody$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($invoke$detectIfBinaryCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($invoke$logRequestBodyCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($invoke$logOutgoingContentCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($invoke$logRequestOkHttpFormatCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($invoke$logResponseBodyCOROUTINE$7, CoroutineImpl);
  initMetadataForCoroutine($invoke$logResponseOkHttpFormatCOROUTINE$8, CoroutineImpl);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForCoroutine($logResponseBodyCOROUTINE$10, CoroutineImpl);
  initMetadataForLambda(toReadChannel$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($observeCOROUTINE$11, CoroutineImpl);
  initMetadataForObject(MDCContextKey, 'MDCContextKey');
  initMetadataForObject(MDCContextElement, 'MDCContextElement', VOID, VOID, [Element]);
  //endregion
  function $logResponseExceptionCOROUTINE$0(_this__u8e3s4, message, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u5e_1 = _this__u8e3s4;
    this.v5e_1 = message;
  }
  protoOf($logResponseExceptionCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.u5e_1.z5e_1.p10(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = this.v5e_1;
            this.u5e_1.w5e_1.d5f(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())));
            return Unit_instance;
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
  function $logResponseBodyCOROUTINE$1(_this__u8e3s4, message, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m5f_1 = _this__u8e3s4;
    this.n5f_1 = message;
  }
  protoOf($logResponseBodyCOROUTINE$1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.m5f_1.a5f_1.p10(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m5f_1.y5e_1.z8(this.n5f_1);
            return Unit_instance;
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
  function $closeResponseLogCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w5f_1 = _this__u8e3s4;
  }
  protoOf($closeResponseLogCOROUTINE$2).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            if (!this.w5f_1.c5f_1.atomicfu$compareAndSet(false, true))
              return Unit_instance;
            this.n9_1 = 1;
            suspendResult = this.w5f_1.z5e_1.p10(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var message = toString(trim(this.w5f_1.y5e_1));
            if (charSequenceLength(message) > 0) {
              this.w5f_1.w5e_1.d5f(message);
            }

            return Unit_instance;
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
  function HttpClientCallLogger(logger) {
    this.w5e_1 = logger;
    this.x5e_1 = StringBuilder_init_$Create$();
    this.y5e_1 = StringBuilder_init_$Create$();
    this.z5e_1 = Job();
    this.a5f_1 = Job();
    this.b5f_1 = atomic$boolean$1(false);
    this.c5f_1 = atomic$boolean$1(false);
  }
  protoOf(HttpClientCallLogger).x5f = function (message) {
    var tmp1 = this.x5e_1;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.appendLine' call
    var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
    // Inline function 'kotlin.text.appendLine' call
    tmp1.z8(value).p(_Char___init__impl__6a9atx(10));
  };
  protoOf(HttpClientCallLogger).y5f = function (message) {
    var tmp1 = this.y5e_1;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.appendLine' call
    var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
    // Inline function 'kotlin.text.appendLine' call
    tmp1.z8(value).p(_Char___init__impl__6a9atx(10));
    this.a5f_1.o10();
  };
  protoOf(HttpClientCallLogger).z5f = function (message, $completion) {
    var tmp = new $logResponseExceptionCOROUTINE$0(this, message, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(HttpClientCallLogger).a5g = function (message, $completion) {
    var tmp = new $logResponseBodyCOROUTINE$1(this, message, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(HttpClientCallLogger).b5g = function () {
    if (!this.b5f_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    try {
      var message = toString(trim(this.x5e_1));
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(message) > 0) {
        this.w5e_1.d5f(message);
      }
    }finally {
      this.z5e_1.o10();
    }
  };
  protoOf(HttpClientCallLogger).c5g = function ($completion) {
    var tmp = new $closeResponseLogCOROUTINE$2(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  var LogLevel_ALL_instance;
  var LogLevel_HEADERS_instance;
  var LogLevel_BODY_instance;
  var LogLevel_INFO_instance;
  var LogLevel_NONE_instance;
  var LogLevel_entriesInitialized;
  function LogLevel_initEntries() {
    if (LogLevel_entriesInitialized)
      return Unit_instance;
    LogLevel_entriesInitialized = true;
    LogLevel_ALL_instance = new LogLevel('ALL', 0, true, true, true);
    LogLevel_HEADERS_instance = new LogLevel('HEADERS', 1, true, true, false);
    LogLevel_BODY_instance = new LogLevel('BODY', 2, true, false, true);
    LogLevel_INFO_instance = new LogLevel('INFO', 3, true, false, false);
    LogLevel_NONE_instance = new LogLevel('NONE', 4, false, false, false);
  }
  function LogLevel(name, ordinal, info, headers, body) {
    Enum.call(this, name, ordinal);
    this.f5g_1 = info;
    this.g5g_1 = headers;
    this.h5g_1 = body;
  }
  function LogLevel_ALL_getInstance() {
    LogLevel_initEntries();
    return LogLevel_ALL_instance;
  }
  function LogLevel_HEADERS_getInstance() {
    LogLevel_initEntries();
    return LogLevel_HEADERS_instance;
  }
  function LogLevel_BODY_getInstance() {
    LogLevel_initEntries();
    return LogLevel_BODY_instance;
  }
  function LogLevel_INFO_getInstance() {
    LogLevel_initEntries();
    return LogLevel_INFO_instance;
  }
  function LogLevel_NONE_getInstance() {
    LogLevel_initEntries();
    return LogLevel_NONE_instance;
  }
  function LoggedContent(originalContent, channel) {
    ReadChannelContent.call(this);
    this.j5g_1 = originalContent;
    this.k5g_1 = channel;
    this.l5g_1 = this.j5g_1.q37();
    this.m5g_1 = this.j5g_1.s37();
    this.n5g_1 = this.j5g_1.r37();
    this.o5g_1 = this.j5g_1.d32();
  }
  protoOf(LoggedContent).q37 = function () {
    return this.l5g_1;
  };
  protoOf(LoggedContent).s37 = function () {
    return this.m5g_1;
  };
  protoOf(LoggedContent).r37 = function () {
    return this.n5g_1;
  };
  protoOf(LoggedContent).d32 = function () {
    return this.o5g_1;
  };
  protoOf(LoggedContent).w37 = function () {
    return this.k5g_1;
  };
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_0() {
    return Companion_instance;
  }
  function get_SIMPLE(_this__u8e3s4) {
    return new SimpleLogger();
  }
  function SimpleLogger() {
  }
  protoOf(SimpleLogger).d5f = function (message) {
    println('HttpClient: ' + message);
  };
  function get_ClientCallLogger() {
    _init_properties_Logging_kt__66pui5();
    return ClientCallLogger;
  }
  var ClientCallLogger;
  function get_DisableLogging() {
    _init_properties_Logging_kt__66pui5();
    return DisableLogging;
  }
  var DisableLogging;
  function get_Logging() {
    _init_properties_Logging_kt__66pui5();
    return Logging;
  }
  var Logging;
  function LoggingConfig() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.p5g_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.q5g_1 = ArrayList_init_$Create$();
    this.r5g_1 = null;
    this.s5g_1 = LoggingFormat_Default_getInstance();
    this.t5g_1 = LogLevel_HEADERS_getInstance();
  }
  protoOf(LoggingConfig).u5g = function (value) {
    this.r5g_1 = value;
  };
  protoOf(LoggingConfig).v5g = function () {
    var tmp0_elvis_lhs = this.r5g_1;
    return tmp0_elvis_lhs == null ? get_DEFAULT(Companion_instance) : tmp0_elvis_lhs;
  };
  var LoggingFormat_Default_instance;
  var LoggingFormat_OkHttp_instance;
  var LoggingFormat_entriesInitialized;
  function LoggingFormat_initEntries() {
    if (LoggingFormat_entriesInitialized)
      return Unit_instance;
    LoggingFormat_entriesInitialized = true;
    LoggingFormat_Default_instance = new LoggingFormat('Default', 0);
    LoggingFormat_OkHttp_instance = new LoggingFormat('OkHttp', 1);
  }
  function LoggingFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function pathQuery(_this__u8e3s4) {
    _init_properties_Logging_kt__66pui5();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.isEmpty' call
    var this_1 = _this__u8e3s4.d37();
    if (charSequenceLength(this_1) === 0) {
      this_0.z8('/');
    } else {
      this_0.z8(_this__u8e3s4.d37());
    }
    // Inline function 'kotlin.text.isEmpty' call
    var this_2 = _this__u8e3s4.g37();
    if (!(charSequenceLength(this_2) === 0)) {
      this_0.z8('?');
      this_0.z8(_this__u8e3s4.g37());
    }
    return this_0.toString();
  }
  function computeRequestBodySize(content) {
    _init_properties_Logging_kt__66pui5();
    // Inline function 'kotlin.check' call
    if (!(content instanceof OutgoingContent)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    var tmp;
    if (content instanceof ByteArrayContent) {
      tmp = toLong(content.t37().length);
    } else {
      if (content instanceof ContentWrapper) {
        tmp = computeRequestBodySize(content.c38());
      } else {
        if (content instanceof NoContent) {
          tmp = new Long(0, 0);
        } else {
          if (content instanceof ProtocolUpgrade) {
            tmp = new Long(0, 0);
          } else {
            var message = 'Unable to calculate the size for type ' + getKClassFromExpression(content).hc();
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function Context(context) {
    this.w5g_1 = context;
  }
  protoOf(Context).x5g = function (content, $completion) {
    return this.w5g_1.t2t(content, $completion);
  };
  protoOf(Context).y5g = function ($completion) {
    return this.w5g_1.u2t($completion);
  };
  function SendHook$install$slambda($handler, resultContinuation) {
    this.h5h_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SendHook$install$slambda).d3j = function ($this$intercept, it, $completion) {
    var tmp = this.e3j($this$intercept, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SendHook$install$slambda).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.d3j(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SendHook$install$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.h5h_1(new Context(this.i5h_1), this.i5h_1.p2u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(SendHook$install$slambda).e3j = function ($this$intercept, it, completion) {
    var i = new SendHook$install$slambda(this.h5h_1, completion);
    i.i5h_1 = $this$intercept;
    i.j5h_1 = it;
    return i;
  };
  function SendHook$install$slambda_0($handler, resultContinuation) {
    var i = new SendHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.d3j($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function SendHook() {
  }
  protoOf(SendHook).k5h = function (client, handler) {
    var tmp = Phases_getInstance().u3k_1;
    client.l3i_1.t2u(tmp, SendHook$install$slambda_0(handler, null));
  };
  protoOf(SendHook).y3r = function (client, handler) {
    return this.k5h(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SendHook_instance;
  function SendHook_getInstance() {
    return SendHook_instance;
  }
  function Context_0(context) {
    this.l5h_1 = context;
  }
  protoOf(Context_0).t4f = function (response, $completion) {
    return this.l5h_1.t2t(response, $completion);
  };
  function ResponseAfterEncodingHook$install$slambda($handler, resultContinuation) {
    this.u5h_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ResponseAfterEncodingHook$install$slambda).l3s = function ($this$intercept, it, $completion) {
    var tmp = this.m3s($this$intercept, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(ResponseAfterEncodingHook$install$slambda).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3s(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ResponseAfterEncodingHook$install$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.u5h_1(new Context_0(this.v5h_1), this.v5h_1.s2t(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ResponseAfterEncodingHook$install$slambda).m3s = function ($this$intercept, it, completion) {
    var i = new ResponseAfterEncodingHook$install$slambda(this.u5h_1, completion);
    i.v5h_1 = $this$intercept;
    i.w5h_1 = it;
    return i;
  };
  function ResponseAfterEncodingHook$install$slambda_0($handler, resultContinuation) {
    var i = new ResponseAfterEncodingHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.l3s($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ResponseAfterEncodingHook() {
  }
  protoOf(ResponseAfterEncodingHook).x5h = function (client, handler) {
    var afterState = new PipelinePhase('AfterState');
    client.m3i_1.q2u(Phases_getInstance_0().p3s_1, afterState);
    client.m3i_1.t2u(afterState, ResponseAfterEncodingHook$install$slambda_0(handler, null));
  };
  protoOf(ResponseAfterEncodingHook).y3r = function (client, handler) {
    return this.x5h(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ResponseAfterEncodingHook_instance;
  function ResponseAfterEncodingHook_getInstance() {
    return ResponseAfterEncodingHook_instance;
  }
  function Context_1(context) {
    this.y5h_1 = context;
  }
  protoOf(Context_1).z5h = function ($completion) {
    return this.y5h_1.u2t($completion);
  };
  function ResponseHook$install$slambda($handler, resultContinuation) {
    this.i5i_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ResponseHook$install$slambda).l3s = function ($this$intercept, it, $completion) {
    var tmp = this.m3s($this$intercept, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(ResponseHook$install$slambda).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.l3s(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ResponseHook$install$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.i5i_1(new Context_1(this.j5i_1), this.j5i_1.s2t(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ResponseHook$install$slambda).m3s = function ($this$intercept, it, completion) {
    var i = new ResponseHook$install$slambda(this.i5i_1, completion);
    i.j5i_1 = $this$intercept;
    i.k5i_1 = it;
    return i;
  };
  function ResponseHook$install$slambda_0($handler, resultContinuation) {
    var i = new ResponseHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.l3s($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ResponseHook() {
  }
  protoOf(ResponseHook).l5i = function (client, handler) {
    var tmp = Phases_getInstance_0().p3s_1;
    client.m3i_1.t2u(tmp, ResponseHook$install$slambda_0(handler, null));
  };
  protoOf(ResponseHook).y3r = function (client, handler) {
    return this.l5i(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ResponseHook_instance;
  function ResponseHook_getInstance() {
    return ResponseHook_instance;
  }
  function Context_2(context) {
    this.m5i_1 = context;
  }
  protoOf(Context_2).n5i = function ($completion) {
    return this.m5i_1.u2t($completion);
  };
  function ReceiveHook$install$slambda($handler, resultContinuation) {
    this.w5i_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveHook$install$slambda).y3j = function ($this$intercept, it, $completion) {
    var tmp = this.z3j($this$intercept, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(ReceiveHook$install$slambda).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.y3j(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveHook$install$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.w5i_1(new Context_2(this.x5i_1), this.x5i_1.p2u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ReceiveHook$install$slambda).z3j = function ($this$intercept, it, completion) {
    var i = new ReceiveHook$install$slambda(this.w5i_1, completion);
    i.x5i_1 = $this$intercept;
    i.y5i_1 = it;
    return i;
  };
  function ReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.y3j($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ReceiveHook() {
  }
  protoOf(ReceiveHook).z5i = function (client, handler) {
    var tmp = Phases_getInstance_1().i3l_1;
    client.k3i_1.t2u(tmp, ReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(ReceiveHook).y3r = function (client, handler) {
    return this.z5i(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ReceiveHook_instance;
  function ReceiveHook_getInstance() {
    return ReceiveHook_instance;
  }
  function LoggingConfig$_init_$ref_f1nb0k() {
    var l = function () {
      return new LoggingConfig();
    };
    l.callableName = '<init>';
    return l;
  }
  function Logging$lambda($this$createClientPlugin) {
    _init_properties_Logging_kt__66pui5();
    var logger = $this$createClientPlugin.t3s_1.v5g();
    var level = $this$createClientPlugin.t3s_1.t5g_1;
    var filters = $this$createClientPlugin.t3s_1.p5g_1;
    var sanitizedHeaders = $this$createClientPlugin.t3s_1.q5g_1;
    var okHttpFormat = $this$createClientPlugin.t3s_1.s5g_1.equals(LoggingFormat_OkHttp_getInstance());
    var tmp = SendHook_instance;
    $this$createClientPlugin.w3s(tmp, Logging$lambda$slambda_0(okHttpFormat, logger, filters, sanitizedHeaders, level, $this$createClientPlugin, null));
    var tmp_0 = ResponseAfterEncodingHook_instance;
    $this$createClientPlugin.w3s(tmp_0, Logging$lambda$slambda_2(okHttpFormat, logger, sanitizedHeaders, level, $this$createClientPlugin, null));
    var tmp_1 = ResponseHook_instance;
    $this$createClientPlugin.w3s(tmp_1, Logging$lambda$slambda_4(okHttpFormat, level, sanitizedHeaders, null));
    var tmp_2 = ReceiveHook_instance;
    $this$createClientPlugin.w3s(tmp_2, Logging$lambda$slambda_6(okHttpFormat, level, null));
    if (okHttpFormat)
      return Unit_instance;
    if (!level.h5g_1)
      return Unit_instance;
    var observer = Logging$lambda$slambda_8(level, null);
    var tmp_3 = get_ResponseObserver();
    var tmp_4 = get_ResponseObserver();
    tmp_3.q3l(tmp_4.p3l(Logging$lambda$lambda(observer)), $this$createClientPlugin.s3s_1);
    return Unit_instance;
  }
  function invoke$shouldBeLogged(filters, request) {
    var tmp;
    if (filters.h()) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(filters, Collection)) {
          tmp_0 = filters.h();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = filters.q();
        while (_iterator__ex2g4s.r()) {
          var element = _iterator__ex2g4s.s();
          if (element(request)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function invoke$isNone(level) {
    return level.equals(LogLevel_NONE_getInstance());
  }
  function invoke$isInfo(level) {
    return level.equals(LogLevel_INFO_getInstance());
  }
  function invoke$isHeaders(level) {
    return level.equals(LogLevel_HEADERS_getInstance());
  }
  function invoke$isBody(level) {
    return level.equals(LogLevel_BODY_getInstance()) || level.equals(LogLevel_ALL_getInstance());
  }
  function invoke$detectIfBinary($this_createClientPlugin, body, contentLength, contentType, headers, $completion) {
    var tmp = new $invoke$detectIfBinaryCOROUTINE$3($this_createClientPlugin, body, contentLength, contentType, headers, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function invoke$logRequestBody($this_createClientPlugin, content, contentLength, headers, method, logLines, body, $completion) {
    var tmp = new $invoke$logRequestBodyCOROUTINE$4($this_createClientPlugin, content, contentLength, headers, method, logLines, body, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function invoke$logOutgoingContent($this_createClientPlugin, content, method, headers, logLines, process, $completion) {
    var tmp;
    if (process === VOID) {
      tmp = Logging$lambda$logOutgoingContent$lambda;
    } else {
      tmp = process;
    }
    process = tmp;
    var tmp_0 = new $invoke$logOutgoingContentCOROUTINE$5($this_createClientPlugin, content, method, headers, logLines, process, $completion);
    tmp_0.p9_1 = Unit_instance;
    tmp_0.q9_1 = null;
    return tmp_0.fa();
  }
  function invoke$logRequestOkHttpFormat(sanitizedHeaders, level, $this_createClientPlugin, request, logLines, $completion) {
    var tmp = new $invoke$logRequestOkHttpFormatCOROUTINE$6(sanitizedHeaders, level, $this_createClientPlugin, request, logLines, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function invoke$logResponseBody($this_createClientPlugin, response, body, logLines, $completion) {
    var tmp = new $invoke$logResponseBodyCOROUTINE$7($this_createClientPlugin, response, body, logLines, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function invoke$logResponseOkHttpFormat(sanitizedHeaders, level, $this_createClientPlugin, response, logLines, $completion) {
    var tmp = new $invoke$logResponseOkHttpFormatCOROUTINE$8(sanitizedHeaders, level, $this_createClientPlugin, response, logLines, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function invoke$logRequestBody_0(content, logger, $completion) {
    var requestLog = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.appendLine' call
    var value = 'BODY Content-Type: ' + toString_0(content.q37());
    // Inline function 'kotlin.text.appendLine' call
    requestLog.z8(value).p(_Char___init__impl__6a9atx(10));
    var tmp0_safe_receiver = content.q37();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
    var charset_0 = tmp1_elvis_lhs == null ? Charsets_getInstance().t1z_1 : tmp1_elvis_lhs;
    var channel = new ByteChannel();
    var tmp = GlobalScope_instance;
    var tmp_0 = Dispatchers_getInstance().f14_1.yj(MDCContext());
    launch(tmp, tmp_0, VOID, Logging$lambda$logRequestBody$slambda_0(channel, charset_0, requestLog, logger, null));
    return observe(content, channel, $completion);
  }
  function invoke$logRequestException(level, logger, context, cause) {
    if (level.f5g_1) {
      logger.d5f('REQUEST ' + Url(context.k3k_1).toString() + ' failed with exception: ' + cause.toString());
    }
  }
  function invoke$logRequest(logger, level, sanitizedHeaders, request, $completion) {
    var tmp = request.n3k_1;
    var content = tmp instanceof OutgoingContent ? tmp : THROW_CCE();
    var callLogger = new HttpClientCallLogger(logger);
    request.p3k_1.a2n(get_ClientCallLogger(), callLogger);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (level.f5g_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value = 'REQUEST: ' + Url(request.k3k_1).toString();
      // Inline function 'kotlin.text.appendLine' call
      this_0.z8(value).p(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'METHOD: ' + request.l3k_1.toString();
      // Inline function 'kotlin.text.appendLine' call
      this_0.z8(value_0).p(_Char___init__impl__6a9atx(10));
    }
    if (level.g5g_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = 'COMMON HEADERS';
      // Inline function 'kotlin.text.appendLine' call
      this_0.z8(value_1).p(_Char___init__impl__6a9atx(10));
      logHeaders(this_0, request.m3k_1.e2r(), sanitizedHeaders);
      // Inline function 'kotlin.text.appendLine' call
      var value_2 = 'CONTENT HEADERS';
      // Inline function 'kotlin.text.appendLine' call
      this_0.z8(value_2).p(_Char___init__impl__6a9atx(10));
      var tmp$ret$9;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = sanitizedHeaders.q();
        while (_iterator__ex2g4s.r()) {
          var element = _iterator__ex2g4s.s();
          if (element.x5n_1(HttpHeaders_getInstance().p2y_1)) {
            tmp$ret$9 = element;
            break $l$block;
          }
        }
        tmp$ret$9 = null;
      }
      var tmp0_safe_receiver = tmp$ret$9;
      var contentLengthPlaceholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w5n_1;
      var tmp$ret$11;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = sanitizedHeaders.q();
        while (_iterator__ex2g4s_0.r()) {
          var element_0 = _iterator__ex2g4s_0.s();
          if (element_0.x5n_1(HttpHeaders_getInstance().s2y_1)) {
            tmp$ret$11 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$11 = null;
      }
      var tmp1_safe_receiver = tmp$ret$11;
      var contentTypePlaceholder = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.w5n_1;
      var tmp2_safe_receiver = content.s37();
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp_0 = HttpHeaders_getInstance().p2y_1;
        logHeader(this_0, tmp_0, contentLengthPlaceholder == null ? tmp2_safe_receiver.toString() : contentLengthPlaceholder);
      }
      var tmp3_safe_receiver = content.q37();
      if (tmp3_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp_1 = HttpHeaders_getInstance().s2y_1;
        logHeader(this_0, tmp_1, contentTypePlaceholder == null ? tmp3_safe_receiver.toString() : contentTypePlaceholder);
      }
      logHeaders(this_0, content.d32().e2r(), sanitizedHeaders);
    }
    var message = this_0.toString();
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(message) > 0) {
      callLogger.x5f(message);
    }
    var tmp_2;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(message) === 0) {
      tmp_2 = true;
    } else {
      tmp_2 = !level.h5g_1;
    }
    if (tmp_2) {
      callLogger.b5g();
      return null;
    }
    return invoke$logRequestBody_0(content, callLogger, $completion);
  }
  function invoke$logResponseException(level, log, request, cause) {
    if (!level.f5g_1)
      return Unit_instance;
    log.z8('RESPONSE ' + request.w3m().toString() + ' failed with exception: ' + cause.toString());
  }
  function Logging$lambda$slambda($okHttpFormat, $logger, $filters, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    this.g5o_1 = $okHttpFormat;
    this.h5o_1 = $logger;
    this.i5o_1 = $filters;
    this.j5o_1 = $sanitizedHeaders;
    this.k5o_1 = $level;
    this.l5o_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda).z5o = function ($this$on, request, $completion) {
    var tmp = this.a5p($this$on, request, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Logging$lambda$slambda).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context ? p1 : THROW_CCE();
    return this.z5o(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 16;
            if (!invoke$shouldBeLogged(this.i5o_1, this.n5o_1)) {
              this.n5o_1.p3k_1.a2n(get_DisableLogging(), Unit_instance);
              return Unit_instance;
            }

            if (this.g5o_1) {
              var tmp_0 = this;
              tmp_0.o5o_1 = ArrayList_init_$Create$();
              this.n9_1 = 10;
              suspendResult = invoke$logRequestOkHttpFormat(this.j5o_1, this.k5o_1, this.l5o_1, this.n5o_1, this.o5o_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              continue $sm;
            }

          case 1:
            this.o9_1 = 3;
            this.n9_1 = 2;
            suspendResult = invoke$logRequest(this.h5o_1, this.k5o_1, this.j5o_1, this.n5o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.p5o_1 = suspendResult;
            this.o9_1 = 16;
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.o9_1 = 16;
            var tmp_1 = this.q9_1;
            if (tmp_1 instanceof Error) {
              this.q5o_1 = this.q9_1;
              var tmp_2 = this;
              tmp_2.p5o_1 = null;
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 16;
            this.r5o_1 = this.p5o_1;
            this.s5o_1 = Unit_instance;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.o9_1 = 8;
            this.o9_1 = 7;
            this.n9_1 = 6;
            var tmp0_elvis_lhs = this.r5o_1;
            suspendResult = this.m5o_1.x5g(tmp0_elvis_lhs == null ? this.n5o_1.n3k_1 : tmp0_elvis_lhs, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.s5o_1 = suspendResult;
            this.o9_1 = 16;
            this.n9_1 = 9;
            continue $sm;
          case 7:
            this.o9_1 = 8;
            var tmp_3 = this.q9_1;
            if (tmp_3 instanceof Error) {
              this.t5o_1 = this.q9_1;
              var tmp_4 = this;
              invoke$logRequestException(this.k5o_1, this.h5o_1, this.n5o_1, this.t5o_1);
              throw this.t5o_1;
            } else {
              throw this.q9_1;
            }

          case 8:
            this.o9_1 = 16;
            this.u5o_1 = this.q9_1;
            throw this.u5o_1;
          case 9:
            this.v5o_1 = this.s5o_1;
            this.o9_1 = 16;
            return Unit_instance;
          case 10:
            this.w5o_1 = suspendResult;
            if (this.o5o_1.t() > 0) {
              this.h5o_1.d5f(joinToString(this.o5o_1, '\n'));
            }

            this.o9_1 = 14;
            if (!(this.w5o_1 == null)) {
              this.n9_1 = 12;
              suspendResult = this.m5o_1.x5g(this.w5o_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 11;
              suspendResult = this.m5o_1.y5g(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 11:
            this.y5o_1 = suspendResult;
            this.n9_1 = 13;
            continue $sm;
          case 12:
            this.y5o_1 = suspendResult;
            this.n9_1 = 13;
            continue $sm;
          case 13:
            this.x5o_1 = this.y5o_1;
            this.o9_1 = 16;
            this.n9_1 = 15;
            continue $sm;
          case 14:
            this.o9_1 = 16;
            var tmp_5 = this.q9_1;
            if (tmp_5 instanceof Error) {
              var cause = this.q9_1;
              var tmp_6 = this;
              this.h5o_1.d5f('<-- HTTP FAILED: ' + cause.toString());
              throw cause;
            } else {
              throw this.q9_1;
            }

          case 15:
            this.o9_1 = 16;
            return Unit_instance;
          case 16:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 16) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda).a5p = function ($this$on, request, completion) {
    var i = new Logging$lambda$slambda(this.g5o_1, this.h5o_1, this.i5o_1, this.j5o_1, this.k5o_1, this.l5o_1, completion);
    i.m5o_1 = $this$on;
    i.n5o_1 = request;
    return i;
  };
  function Logging$lambda$slambda_0($okHttpFormat, $logger, $filters, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    var i = new Logging$lambda$slambda($okHttpFormat, $logger, $filters, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.z5o($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_1($okHttpFormat, $logger, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    this.j5p_1 = $okHttpFormat;
    this.k5p_1 = $logger;
    this.l5p_1 = $sanitizedHeaders;
    this.m5p_1 = $level;
    this.n5p_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_1).s5p = function ($this$on, response, $completion) {
    var tmp = this.t5p($this$on, response, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Logging$lambda$slambda_1).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context_0 ? p1 : THROW_CCE();
    return this.s5p(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            if (this.j5p_1) {
              var tmp_0 = this;
              tmp_0.q5p_1 = ArrayList_init_$Create$();
              this.n9_1 = 1;
              suspendResult = invoke$logResponseOkHttpFormat(this.l5p_1, this.m5p_1, this.n5p_1, this.p5p_1, this.q5p_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 1:
            this.r5p_1 = suspendResult;
            if (this.q5p_1.t() > 0) {
              this.k5p_1.d5f(joinToString(this.q5p_1, '\n'));
            }

            if (!equals(this.r5p_1, this.p5p_1)) {
              this.n9_1 = 2;
              suspendResult = this.o5p_1.t4f(this.r5p_1, this);
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
            return Unit_instance;
          case 5:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 5) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda_1).t5p = function ($this$on, response, completion) {
    var i = new Logging$lambda$slambda_1(this.j5p_1, this.k5p_1, this.l5p_1, this.m5p_1, this.n5p_1, completion);
    i.o5p_1 = $this$on;
    i.p5p_1 = response;
    return i;
  };
  function Logging$lambda$slambda_2($okHttpFormat, $logger, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    var i = new Logging$lambda$slambda_1($okHttpFormat, $logger, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation);
    var l = function ($this$on, response, $completion) {
      return i.s5p($this$on, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_3($okHttpFormat, $level, $sanitizedHeaders, resultContinuation) {
    this.c5q_1 = $okHttpFormat;
    this.d5q_1 = $level;
    this.e5q_1 = $sanitizedHeaders;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_3).o5q = function ($this$on, response, $completion) {
    var tmp = this.p5q($this$on, response, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Logging$lambda$slambda_3).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context_1 ? p1 : THROW_CCE();
    return this.o5q(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_3).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 10;
            if (this.c5q_1)
              return Unit_instance;
            if (this.d5q_1.equals(LogLevel_NONE_getInstance()) || this.g5q_1.s3n().s3l().z2m(get_DisableLogging()))
              return Unit_instance;
            this.h5q_1 = this.g5q_1.s3n().s3l().x2m(get_ClientCallLogger());
            this.i5q_1 = StringBuilder_init_$Create$();
            this.j5q_1 = false;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            this.o9_1 = 3;
            logResponseHeader(this.i5q_1, this.g5q_1.s3n().k3j(), this.d5q_1, this.e5q_1);
            this.n9_1 = 2;
            suspendResult = this.f5q_1.z5h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k5q_1 = suspendResult;
            this.o9_1 = 10;
            this.n9_1 = 7;
            continue $sm;
          case 3:
            this.o9_1 = 4;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              this.l5q_1 = this.q9_1;
              var tmp_1 = this;
              invoke$logResponseException(this.d5q_1, this.i5q_1, this.g5q_1.s3n().t3m(), this.l5q_1);
              this.j5q_1 = true;
              throw this.l5q_1;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 10;
            this.m5q_1 = this.q9_1;
            this.h5q_1.y5f(this.i5q_1.toString());
            if (this.j5q_1 || !this.d5q_1.h5g_1) {
              this.n9_1 = 5;
              suspendResult = this.h5q_1.c5g(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 6;
              continue $sm;
            }

          case 5:
            this.n9_1 = 6;
            continue $sm;
          case 6:
            throw this.m5q_1;
          case 7:
            this.n5q_1 = this.k5q_1;
            this.o9_1 = 10;
            this.h5q_1.y5f(this.i5q_1.toString());
            if (this.j5q_1 || !this.d5q_1.h5g_1) {
              this.n9_1 = 8;
              suspendResult = this.h5q_1.c5g(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 9;
              continue $sm;
            }

          case 8:
            this.n9_1 = 9;
            continue $sm;
          case 9:
            return Unit_instance;
          case 10:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 10) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda_3).p5q = function ($this$on, response, completion) {
    var i = new Logging$lambda$slambda_3(this.c5q_1, this.d5q_1, this.e5q_1, completion);
    i.f5q_1 = $this$on;
    i.g5q_1 = response;
    return i;
  };
  function Logging$lambda$slambda_4($okHttpFormat, $level, $sanitizedHeaders, resultContinuation) {
    var i = new Logging$lambda$slambda_3($okHttpFormat, $level, $sanitizedHeaders, resultContinuation);
    var l = function ($this$on, response, $completion) {
      return i.o5q($this$on, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_5($okHttpFormat, $level, resultContinuation) {
    this.y5q_1 = $okHttpFormat;
    this.z5q_1 = $level;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_5).g5r = function ($this$on, call, $completion) {
    var tmp = this.h5r($this$on, call, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Logging$lambda$slambda_5).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context_2 ? p1 : THROW_CCE();
    return this.g5r(tmp, p2 instanceof HttpClientCall ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_5).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            if (this.y5q_1)
              return Unit_instance;
            if (this.z5q_1.equals(LogLevel_NONE_getInstance()) || this.b5r_1.s3l().z2m(get_DisableLogging())) {
              return Unit_instance;
            }

            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.a5r_1.n5i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c5r_1 = suspendResult;
            this.o9_1 = 6;
            this.n9_1 = 5;
            continue $sm;
          case 2:
            this.o9_1 = 6;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              this.d5r_1 = this.q9_1;
              this.e5r_1 = StringBuilder_init_$Create$();
              this.f5r_1 = this.b5r_1.s3l().x2m(get_ClientCallLogger());
              invoke$logResponseException(this.z5q_1, this.e5r_1, this.b5r_1.t3m(), this.d5r_1);
              this.n9_1 = 3;
              suspendResult = this.f5r_1.z5f(this.e5r_1.toString(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            this.n9_1 = 4;
            suspendResult = this.f5r_1.c5g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_1 = this;
            throw this.d5r_1;
          case 5:
            this.o9_1 = 6;
            return Unit_instance;
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
  protoOf(Logging$lambda$slambda_5).h5r = function ($this$on, call, completion) {
    var i = new Logging$lambda$slambda_5(this.y5q_1, this.z5q_1, completion);
    i.a5r_1 = $this$on;
    i.b5r_1 = call;
    return i;
  };
  function Logging$lambda$slambda_6($okHttpFormat, $level, resultContinuation) {
    var i = new Logging$lambda$slambda_5($okHttpFormat, $level, resultContinuation);
    var l = function ($this$on, call, $completion) {
      return i.g5r($this$on, call, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_7($level, resultContinuation) {
    this.q5r_1 = $level;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_7).j3v = function (it, $completion) {
    var tmp = this.t3t(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Logging$lambda$slambda_7).va = function (p1, $completion) {
    return this.j3v(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_7).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 10;
            if (this.q5r_1.equals(LogLevel_NONE_getInstance()) || this.r5r_1.s3n().s3l().z2m(get_DisableLogging())) {
              return Unit_instance;
            }

            this.s5r_1 = this.r5r_1.s3n().s3l().x2m(get_ClientCallLogger());
            this.t5r_1 = StringBuilder_init_$Create$();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 4;
            this.o9_1 = 3;
            this.n9_1 = 2;
            suspendResult = logResponseBody(this.t5r_1, contentType(this.r5r_1), this.r5r_1.u3m(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u5r_1 = suspendResult;
            this.o9_1 = 10;
            this.n9_1 = 7;
            continue $sm;
          case 3:
            this.o9_1 = 4;
            var tmp_0 = this.q9_1;
            if (tmp_0 instanceof Error) {
              this.v5r_1 = this.q9_1;
              var tmp_1 = this;
              tmp_1.u5r_1 = Unit_instance;
              this.o9_1 = 10;
              this.n9_1 = 7;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 10;
            this.w5r_1 = this.q9_1;
            this.n9_1 = 5;
            var this_0 = this.t5r_1.toString();
            suspendResult = this.s5r_1.a5g(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.n9_1 = 6;
            suspendResult = this.s5r_1.c5g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            throw this.w5r_1;
          case 7:
            this.o9_1 = 10;
            this.n9_1 = 8;
            var this_1 = this.t5r_1.toString();
            suspendResult = this.s5r_1.a5g(toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.n9_1 = 9;
            suspendResult = this.s5r_1.c5g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            return Unit_instance;
          case 10:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 10) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda_7).t3t = function (it, completion) {
    var i = new Logging$lambda$slambda_7(this.q5r_1, completion);
    i.r5r_1 = it;
    return i;
  };
  function Logging$lambda$slambda_8($level, resultContinuation) {
    var i = new Logging$lambda$slambda_7($level, resultContinuation);
    var l = function (it, $completion) {
      return i.j3v(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Logging$lambda$lambda($observer) {
    return function ($this$prepare) {
      $this$prepare.r4f($observer);
      return Unit_instance;
    };
  }
  function Logging$lambda$detectIfBinary$slambda($channel, $firstChunk, $firstReadSize, $body, resultContinuation) {
    this.f5s_1 = $channel;
    this.g5s_1 = $firstChunk;
    this.h5s_1 = $firstReadSize;
    this.i5s_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$detectIfBinary$slambda).l5s = function ($this$async, $completion) {
    var tmp = this.c1j($this$async, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Logging$lambda$detectIfBinary$slambda).va = function (p1, $completion) {
    return this.l5s((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$detectIfBinary$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = writeFully(this.f5s_1, this.g5s_1, 0, this.h5s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n9_1 = 2;
            suspendResult = copyTo(this.i5s_1, this.f5s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.k5s_1 = suspendResult;
            this.n9_1 = 3;
            suspendResult = this.f5s_1.h1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return this.k5s_1;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$detectIfBinary$slambda).c1j = function ($this$async, completion) {
    var i = new Logging$lambda$detectIfBinary$slambda(this.f5s_1, this.g5s_1, this.h5s_1, this.i5s_1, completion);
    i.j5s_1 = $this$async;
    return i;
  };
  function Logging$lambda$detectIfBinary$slambda_0($channel, $firstChunk, $firstReadSize, $body, resultContinuation) {
    var i = new Logging$lambda$detectIfBinary$slambda($channel, $firstChunk, $firstReadSize, $body, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.l5s($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Logging$lambda$logOutgoingContent$lambda(it) {
    _init_properties_Logging_kt__66pui5();
    return it;
  }
  function Logging$lambda$logOutgoingContent$slambda($content, $channel, resultContinuation) {
    this.u5s_1 = $content;
    this.v5s_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$logOutgoingContent$slambda).y1y = function ($this$launch, $completion) {
    var tmp = this.c1j($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Logging$lambda$logOutgoingContent$slambda).va = function (p1, $completion) {
    return this.y1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$logOutgoingContent$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.u5s_1.y37(this.v5s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v5s_1.z4();
            return Unit_instance;
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
  protoOf(Logging$lambda$logOutgoingContent$slambda).c1j = function ($this$launch, completion) {
    var i = new Logging$lambda$logOutgoingContent$slambda(this.u5s_1, this.v5s_1, completion);
    i.w5s_1 = $this$launch;
    return i;
  };
  function Logging$lambda$logOutgoingContent$slambda_0($content, $channel, resultContinuation) {
    var i = new Logging$lambda$logOutgoingContent$slambda($content, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.y1y($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Logging$lambda$logRequestOkHttpFormat$lambda(channel) {
    _init_properties_Logging_kt__66pui5();
    return GZipEncoder_getInstance().q2q(channel);
  }
  function Logging$lambda$logRequestBody$slambda($channel, $charset, $requestLog, $logger, resultContinuation) {
    this.f5t_1 = $channel;
    this.g5t_1 = $charset;
    this.h5t_1 = $requestLog;
    this.i5t_1 = $logger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$logRequestBody$slambda).y1y = function ($this$launch, $completion) {
    var tmp = this.c1j($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Logging$lambda$logRequestBody$slambda).va = function (p1, $completion) {
    return this.y1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$logRequestBody$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 6;
            var tmp_0 = this;
            tmp_0.l5t_1 = this.f5t_1;
            var tmp_1 = this;
            tmp_1.m5t_1 = this.g5t_1;
            this.n5t_1 = this.l5t_1;
            this.o5t_1 = this.m5t_1;
            this.o9_1 = 3;
            this.n9_1 = 2;
            suspendResult = readRemaining(this.n5t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.p5t_1 = readText(ARGUMENT, this.o5t_1);
            this.o9_1 = 6;
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.o9_1 = 6;
            var tmp_2 = this.q9_1;
            if (tmp_2 instanceof Error) {
              var cause = this.q9_1;
              var tmp_3 = this;
              tmp_3.p5t_1 = null;
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 6;
            var tmp0_elvis_lhs = this.p5t_1;
            var text = tmp0_elvis_lhs == null ? '[request body omitted]' : tmp0_elvis_lhs;
            var tmp2 = this.h5t_1;
            var value = 'BODY START';
            tmp2.z8(value).p(_Char___init__impl__6a9atx(10));
            this.h5t_1.z8(text).p(_Char___init__impl__6a9atx(10));
            this.k5t_1 = this.h5t_1.z8('BODY END');
            this.o9_1 = 7;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.k5t_1;
            this.o9_1 = 7;
            this.i5t_1.x5f(this.h5t_1.toString());
            this.i5t_1.b5g();
            return Unit_instance;
          case 6:
            this.o9_1 = 7;
            var t = this.q9_1;
            this.i5t_1.x5f(this.h5t_1.toString());
            this.i5t_1.b5g();
            throw t;
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
  protoOf(Logging$lambda$logRequestBody$slambda).c1j = function ($this$launch, completion) {
    var i = new Logging$lambda$logRequestBody$slambda(this.f5t_1, this.g5t_1, this.h5t_1, this.i5t_1, completion);
    i.j5t_1 = $this$launch;
    return i;
  };
  function Logging$lambda$logRequestBody$slambda_0($channel, $charset, $requestLog, $logger, resultContinuation) {
    var i = new Logging$lambda$logRequestBody$slambda($channel, $charset, $requestLog, $logger, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.y1y($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $invoke$detectIfBinaryCOROUTINE$3($this_createClientPlugin, body, contentLength, contentType, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i5j_1 = $this_createClientPlugin;
    this.j5j_1 = body;
    this.k5j_1 = contentLength;
    this.l5j_1 = contentType;
    this.m5j_1 = headers;
  }
  protoOf($invoke$detectIfBinaryCOROUTINE$3).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            if (this.m5j_1.f2r(HttpHeaders_getInstance().n2y_1)) {
              return new Triple(true, this.k5j_1, this.j5j_1);
            }

            var tmp_0 = this;
            var tmp_1;
            if (!(this.l5j_1 == null)) {
              var tmp0_elvis_lhs = charset(this.l5j_1);
              tmp_1 = tmp0_elvis_lhs == null ? Charsets_getInstance().t1z_1 : tmp0_elvis_lhs;
            } else {
              tmp_1 = Charsets_getInstance().t1z_1;
            }

            tmp_0.n5j_1 = tmp_1;
            this.o5j_1 = false;
            this.p5j_1 = new Int8Array(1024);
            this.n9_1 = 1;
            suspendResult = readAvailable(this.j5j_1, this.p5j_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q5j_1 = suspendResult;
            if (this.q5j_1 < 1) {
              return new Triple(false, new Long(0, 0), this.j5j_1);
            }

            var tmp_2 = this;
            var this_0 = new Buffer();
            writeFully_0(this_0, this.p5j_1, 0, this.q5j_1);
            tmp_2.r5j_1 = this_0;
            this.s5j_1 = decode(this.n5j_1.x1z(), this.r5j_1, this.q5j_1);
            this.t5j_1 = -1;
            var indexedObject = this.s5j_1;
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var ch = charSequenceGet(indexedObject, inductionVariable);
              inductionVariable = inductionVariable + 1 | 0;
              this.t5j_1 = this.t5j_1 + 1 | 0;
            }

            var indexedObject_0 = this.s5j_1;
            var inductionVariable_0 = 0;
            var last_0 = indexedObject_0.length;
            $l$loop: while (inductionVariable_0 < last_0) {
              var i = inductionVariable_0;
              var ch_0 = charSequenceGet(indexedObject_0, inductionVariable_0);
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (ch_0 === _Char___init__impl__6a9atx(65533) && !(i === this.t5j_1)) {
                this.o5j_1 = true;
                break $l$loop;
              }
            }

            if (!this.o5j_1) {
              this.u5j_1 = new ByteChannel();
              this.n9_1 = 3;
              suspendResult = async(this.i5j_1.s3s_1, VOID, VOID, Logging$lambda$detectIfBinary$slambda_0(this.u5j_1, this.p5j_1, this.q5j_1, this.j5j_1, null)).lx(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 2:
            return new Triple(this.o5j_1, this.k5j_1, this.j5j_1);
          case 3:
            var copied = suspendResult;
            var tmp_3 = this.o5j_1;
            var other = this.q5j_1;
            return new Triple(tmp_3, copied.c3(toLong(other)), this.u5j_1);
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logRequestBodyCOROUTINE$4($this_createClientPlugin, content, contentLength, headers, method, logLines, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d5k_1 = $this_createClientPlugin;
    this.e5k_1 = content;
    this.f5k_1 = contentLength;
    this.g5k_1 = headers;
    this.h5k_1 = method;
    this.i5k_1 = logLines;
    this.j5k_1 = body;
  }
  protoOf($invoke$logRequestBodyCOROUTINE$4).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = invoke$detectIfBinary(this.d5k_1, this.j5k_1, this.f5k_1, this.e5k_1.q37(), this.g5k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k5k_1 = suspendResult;
            this.l5k_1 = this.k5k_1.dc();
            this.m5k_1 = this.k5k_1.ec();
            this.n5k_1 = this.k5k_1.aq();
            if (!this.l5k_1) {
              this.p5k_1 = this.e5k_1.q37();
              var tmp_0 = this;
              var tmp_1;
              if (!(this.p5k_1 == null)) {
                var tmp0_elvis_lhs = charset(this.p5k_1);
                tmp_1 = tmp0_elvis_lhs == null ? Charsets_getInstance().t1z_1 : tmp0_elvis_lhs;
              } else {
                tmp_1 = Charsets_getInstance().t1z_1;
              }
              tmp_0.q5k_1 = tmp_1;
              this.n9_1 = 2;
              suspendResult = readRemaining(this.n5k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this;
              var type = 'binary';
              if (this.g5k_1.f2r(HttpHeaders_getInstance().n2y_1)) {
                type = 'encoded';
              }
              var tmp_3;
              if (!(this.m5k_1 == null)) {
                tmp_3 = this.i5k_1.n('--> END ' + this.h5k_1.m32_1 + ' (' + type + ' ' + toString_0(this.m5k_1) + '-byte body omitted)');
              } else {
                tmp_3 = this.i5k_1.n('--> END ' + this.h5k_1.m32_1 + ' (' + type + ' body omitted)');
              }
              tmp_2.o5k_1 = tmp_3;
              this.n9_1 = 3;
              continue $sm;
            }

          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = readText(ARGUMENT, this.q5k_1);
            this.i5k_1.n(ARGUMENT_0);
            this.o5k_1 = this.i5k_1.n('--> END ' + this.h5k_1.m32_1 + ' (' + toString_0(this.m5k_1) + '-byte body)');
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logOutgoingContentCOROUTINE$5($this_createClientPlugin, content, method, headers, logLines, process, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z5k_1 = $this_createClientPlugin;
    this.a5l_1 = content;
    this.b5l_1 = method;
    this.c5l_1 = headers;
    this.d5l_1 = logLines;
    this.e5l_1 = process;
  }
  protoOf($invoke$logOutgoingContentCOROUTINE$5).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.f5l_1 = this.a5l_1;
            var tmp_0 = this.f5l_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.h5l_1 = this.a5l_1.t37();
              this.n9_1 = 4;
              suspendResult = invoke$logRequestBody(this.z5k_1, this.a5l_1, toLong(this.h5l_1.length), this.c5l_1, this.b5l_1, this.d5l_1, ByteReadChannel(this.h5l_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.f5l_1;
              if (tmp_1 instanceof ContentWrapper) {
                this.n9_1 = 3;
                suspendResult = invoke$logOutgoingContent(this.z5k_1, this.a5l_1.c38(), this.b5l_1, this.c5l_1, this.d5l_1, this.e5l_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_2 = this.f5l_1;
                if (tmp_2 instanceof NoContent) {
                  var tmp_3 = this;
                  this.d5l_1.n('--> END ' + this.b5l_1.m32_1);
                  tmp_3.g5l_1 = null;
                  this.n9_1 = 5;
                  continue $sm;
                } else {
                  var tmp_4 = this.f5l_1;
                  if (tmp_4 instanceof ProtocolUpgrade) {
                    var tmp_5 = this;
                    this.d5l_1.n('--> END ' + this.b5l_1.m32_1);
                    tmp_5.g5l_1 = null;
                    this.n9_1 = 5;
                    continue $sm;
                  } else {
                    var tmp_6 = this.f5l_1;
                    if (tmp_6 instanceof ReadChannelContent) {
                      this.i5l_1 = split(this.a5l_1.w37(), this.z5k_1.s3s_1);
                      this.j5l_1 = this.i5l_1.dc();
                      this.k5l_1 = this.i5l_1.ec();
                      this.n9_1 = 2;
                      suspendResult = invoke$logRequestBody(this.z5k_1, this.a5l_1, this.a5l_1.s37(), this.c5l_1, this.b5l_1, this.d5l_1, this.k5l_1, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      var tmp_7 = this.f5l_1;
                      if (tmp_7 instanceof WriteChannelContent) {
                        this.l5l_1 = new ByteChannel();
                        launch(this.z5k_1.s3s_1, VOID, VOID, Logging$lambda$logOutgoingContent$slambda_0(this.a5l_1, this.l5l_1, null));
                        this.m5l_1 = split(this.l5l_1, this.z5k_1.s3s_1);
                        this.n5l_1 = this.m5l_1.dc();
                        this.o5l_1 = this.m5l_1.ec();
                        this.n9_1 = 1;
                        suspendResult = invoke$logRequestBody(this.z5k_1, this.a5l_1, this.a5l_1.s37(), this.c5l_1, this.b5l_1, this.d5l_1, this.o5l_1, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        var tmp_8 = this;
                        noWhenBranchMatchedException();
                      }
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.g5l_1 = new LoggedContent(this.a5l_1, this.n5l_1);
            this.n9_1 = 5;
            continue $sm;
          case 2:
            this.g5l_1 = new LoggedContent(this.a5l_1, this.j5l_1);
            this.n9_1 = 5;
            continue $sm;
          case 3:
            this.g5l_1 = suspendResult;
            this.n9_1 = 5;
            continue $sm;
          case 4:
            this.g5l_1 = null;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            return this.g5l_1;
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
  function $invoke$logRequestOkHttpFormatCOROUTINE$6(sanitizedHeaders, level, $this_createClientPlugin, request, logLines, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x5l_1 = sanitizedHeaders;
    this.y5l_1 = level;
    this.z5l_1 = $this_createClientPlugin;
    this.a5m_1 = request;
    this.b5m_1 = logLines;
  }
  protoOf($invoke$logRequestOkHttpFormatCOROUTINE$6).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            if (invoke$isNone(this.y5l_1))
              return null;
            this.c5m_1 = pathQuery(takeFrom(new URLBuilder(), this.a5m_1.k3k_1).z2x());
            this.d5m_1 = this.a5m_1.n3k_1;
            var tmp_0 = this;
            var this_0 = new HeadersBuilder();
            var tmp_1;
            var tmp_2;
            var tmp_3;
            var tmp_4 = this.d5m_1;
            if (tmp_4 instanceof OutgoingContent) {
              tmp_3 = !this.a5m_1.l3k_1.equals(Companion_getInstance().e32_1);
            } else {
              tmp_3 = false;
            }

            if (tmp_3) {
              tmp_2 = !this.a5m_1.l3k_1.equals(Companion_getInstance().j32_1);
            } else {
              tmp_2 = false;
            }

            if (tmp_2) {
              var tmp_5 = this.d5m_1;
              tmp_1 = !(tmp_5 instanceof EmptyContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              var tmp0_safe_receiver = this.d5m_1.q37();
              if (tmp0_safe_receiver == null)
                null;
              else {
                appendIfNameAbsent(this_0, HttpHeaders_getInstance().s2y_1, tmp0_safe_receiver.toString());
              }
              var tmp1_safe_receiver = this.d5m_1.s37();
              if (tmp1_safe_receiver == null)
                null;
              else {
                appendIfNameAbsent(this_0, HttpHeaders_getInstance().p2y_1, tmp1_safe_receiver.toString());
              }
            }

            appendAll(this_0, this.a5m_1.m3k_1);
            tmp_0.e5m_1 = this_0.z2x();
            var tmp_6 = this;
            var tmp0_safe_receiver_0 = this.e5m_1.bf(HttpHeaders_getInstance().p2y_1);
            tmp_6.f5m_1 = tmp0_safe_receiver_0 == null ? null : toLongOrNull(tmp0_safe_receiver_0);
            var tmp_7 = this;
            var tmp_8;
            if (this.a5m_1.l3k_1.equals(Companion_getInstance().e32_1) || this.a5m_1.l3k_1.equals(Companion_getInstance().j32_1) || ((invoke$isHeaders(this.y5l_1) || invoke$isBody(this.y5l_1)) && !(this.f5m_1 == null)) || (invoke$isHeaders(this.y5l_1) && this.f5m_1 == null) || this.e5m_1.f2r(HttpHeaders_getInstance().n2y_1)) {
              tmp_8 = '--> ' + this.a5m_1.l3k_1.m32_1 + ' ' + this.c5m_1;
            } else {
              if (invoke$isInfo(this.y5l_1) && !(this.f5m_1 == null)) {
                tmp_8 = '--> ' + this.a5m_1.l3k_1.m32_1 + ' ' + this.c5m_1 + ' (' + toString_0(this.f5m_1) + '-byte body)';
              } else {
                var tmp_9;
                var tmp_10 = this.d5m_1;
                if (tmp_10 instanceof WriteChannelContent) {
                  tmp_9 = true;
                } else {
                  var tmp_11 = this.d5m_1;
                  tmp_9 = tmp_11 instanceof ReadChannelContent;
                }
                if (tmp_9) {
                  tmp_8 = '--> ' + this.a5m_1.l3k_1.m32_1 + ' ' + this.c5m_1 + ' (unknown-byte body)';
                } else {
                  var size = computeRequestBodySize(this.a5m_1.n3k_1);
                  tmp_8 = '--> ' + this.a5m_1.l3k_1.m32_1 + ' ' + this.c5m_1 + ' (' + size.toString() + '-byte body)';
                }
              }
            }

            tmp_7.g5m_1 = tmp_8;
            this.b5m_1.n(this.g5m_1);
            if (!invoke$isHeaders(this.y5l_1) && !invoke$isBody(this.y5l_1)) {
              return null;
            }

            var _iterator__ex2g4s = this.e5m_1.e2r().q();
            while (_iterator__ex2g4s.r()) {
              var _destruct__k2r9zo = _iterator__ex2g4s.s();
              var name = _destruct__k2r9zo.b1();
              var values = _destruct__k2r9zo.c1();
              var tmp0 = this.x5l_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                var _iterator__ex2g4s_0 = tmp0.q();
                while (_iterator__ex2g4s_0.r()) {
                  var element = _iterator__ex2g4s_0.s();
                  if (element.x5n_1(name)) {
                    tmp$ret$0 = element;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = null;
              }
               while (false);
              if (tmp$ret$0 == null) {
                this.b5m_1.n(name + ': ' + joinToString(values, ', '));
              } else {
                this.b5m_1.n(name + ': \u2588\u2588');
              }
            }

            if (!invoke$isBody(this.y5l_1) || this.a5m_1.l3k_1.equals(Companion_getInstance().e32_1) || this.a5m_1.l3k_1.equals(Companion_getInstance().j32_1)) {
              this.b5m_1.n('--> END ' + this.a5m_1.l3k_1.m32_1);
              return null;
            }

            this.b5m_1.n('');
            var tmp_12 = this.d5m_1;
            if (!(tmp_12 instanceof OutgoingContent)) {
              this.b5m_1.n('--> END ' + this.a5m_1.l3k_1.m32_1);
              return null;
            }

            if (this.a5m_1.m3k_1.bf(HttpHeaders_getInstance().n2y_1) === 'gzip') {
              this.n9_1 = 2;
              var tmp_13 = this.a5m_1.l3k_1;
              suspendResult = invoke$logOutgoingContent(this.z5l_1, this.d5m_1, tmp_13, this.e5m_1, this.b5m_1, Logging$lambda$logRequestOkHttpFormat$lambda, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = invoke$logOutgoingContent(this.z5l_1, this.d5m_1, this.a5m_1.l3k_1, this.e5m_1, this.b5m_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.h5m_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.h5m_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var newContent = this.h5m_1;
            return newContent;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logResponseBodyCOROUTINE$7($this_createClientPlugin, response, body, logLines, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q5m_1 = $this_createClientPlugin;
    this.r5m_1 = response;
    this.s5m_1 = body;
    this.t5m_1 = logLines;
  }
  protoOf($invoke$logResponseBodyCOROUTINE$7).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.t5m_1.n('');
            this.n9_1 = 1;
            suspendResult = invoke$detectIfBinary(this.q5m_1, this.s5m_1, contentLength(this.r5m_1), contentType(this.r5m_1), this.r5m_1.d32(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u5m_1 = suspendResult;
            this.v5m_1 = this.u5m_1.dc();
            this.w5m_1 = this.u5m_1.ec();
            this.x5m_1 = this.u5m_1.aq();
            this.y5m_1 = this.r5m_1.d3o().m2s_1.d3(this.r5m_1.c3o().m2s_1);
            if (equals(this.w5m_1, new Long(0, 0))) {
              this.t5m_1.n('<-- END HTTP (' + this.y5m_1.toString() + 'ms, ' + toString_0(this.w5m_1) + '-byte body)');
              return Unit_instance;
            }

            if (!this.v5m_1) {
              this.a5n_1 = contentType(this.r5m_1);
              var tmp_0 = this;
              var tmp_1;
              if (!(this.a5n_1 == null)) {
                var tmp0_elvis_lhs = charset(this.a5n_1);
                tmp_1 = tmp0_elvis_lhs == null ? Charsets_getInstance().t1z_1 : tmp0_elvis_lhs;
              } else {
                tmp_1 = Charsets_getInstance().t1z_1;
              }
              tmp_0.b5n_1 = tmp_1;
              this.n9_1 = 2;
              suspendResult = readRemaining(this.x5m_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this;
              var type = 'binary';
              if (this.r5m_1.d32().f2r(HttpHeaders_getInstance().n2y_1)) {
                type = 'encoded';
              }
              var tmp_3;
              if (!(this.w5m_1 == null)) {
                tmp_3 = this.t5m_1.n('<-- END HTTP (' + this.y5m_1.toString() + 'ms, ' + type + ' ' + toString_0(this.w5m_1) + '-byte body omitted)');
              } else {
                tmp_3 = this.t5m_1.n('<-- END HTTP (' + this.y5m_1.toString() + 'ms, ' + type + ' body omitted)');
              }
              tmp_2.z5m_1 = tmp_3;
              this.n9_1 = 3;
              continue $sm;
            }

          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = readText(ARGUMENT, this.b5n_1);
            this.t5m_1.n(ARGUMENT_0);
            this.z5m_1 = this.t5m_1.n('<-- END HTTP (' + this.y5m_1.toString() + 'ms, ' + toString_0(this.w5m_1) + '-byte body)');
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logResponseOkHttpFormatCOROUTINE$8(sanitizedHeaders, level, $this_createClientPlugin, response, logLines, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k5n_1 = sanitizedHeaders;
    this.l5n_1 = level;
    this.m5n_1 = $this_createClientPlugin;
    this.n5n_1 = response;
    this.o5n_1 = logLines;
  }
  protoOf($invoke$logResponseOkHttpFormatCOROUTINE$8).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            if (invoke$isNone(this.l5n_1))
              return this.n5n_1;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.n5n_1.d32().bf(HttpHeaders_getInstance().p2y_1);
            tmp_0.p5n_1 = tmp0_safe_receiver == null ? null : toLongOrNull(tmp0_safe_receiver);
            this.q5n_1 = get_request(this.n5n_1);
            this.r5n_1 = this.n5n_1.d3o().m2s_1.d3(this.n5n_1.c3o().m2s_1);
            this.s5n_1 = this.n5n_1.d32().bf(HttpHeaders_getInstance().w30_1) === 'chunked' && (invoke$isInfo(this.l5n_1) || invoke$isHeaders(this.l5n_1)) ? '<-- ' + this.n5n_1.r37().toString() + ' ' + pathQuery(this.q5n_1.w3m()) + ' (' + this.r5n_1.toString() + 'ms, unknown-byte body)' : invoke$isInfo(this.l5n_1) && !(this.p5n_1 == null) ? '<-- ' + this.n5n_1.r37().toString() + ' ' + pathQuery(this.q5n_1.w3m()) + ' (' + this.r5n_1.toString() + 'ms, ' + toString_0(this.p5n_1) + '-byte body)' : invoke$isBody(this.l5n_1) || (invoke$isInfo(this.l5n_1) && this.p5n_1 == null) || (invoke$isHeaders(this.l5n_1) && !(this.p5n_1 == null)) || this.n5n_1.d32().bf(HttpHeaders_getInstance().n2y_1) === 'gzip' ? '<-- ' + this.n5n_1.r37().toString() + ' ' + pathQuery(this.q5n_1.w3m()) + ' (' + this.r5n_1.toString() + 'ms)' : '<-- ' + this.n5n_1.r37().toString() + ' ' + pathQuery(this.q5n_1.w3m()) + ' (' + this.r5n_1.toString() + 'ms, unknown-byte body)';
            this.o5n_1.n(this.s5n_1);
            if (!invoke$isHeaders(this.l5n_1) && !invoke$isBody(this.l5n_1)) {
              return this.n5n_1;
            }

            var _iterator__ex2g4s = this.n5n_1.d32().e2r().q();
            while (_iterator__ex2g4s.r()) {
              var _destruct__k2r9zo = _iterator__ex2g4s.s();
              var name = _destruct__k2r9zo.b1();
              var values = _destruct__k2r9zo.c1();
              var tmp0 = this.k5n_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                var _iterator__ex2g4s_0 = tmp0.q();
                while (_iterator__ex2g4s_0.r()) {
                  var element = _iterator__ex2g4s_0.s();
                  if (element.x5n_1(name)) {
                    tmp$ret$0 = element;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = null;
              }
               while (false);
              if (tmp$ret$0 == null) {
                this.o5n_1.n(name + ': ' + joinToString(values, ', '));
              } else {
                this.o5n_1.n(name + ': \u2588\u2588');
              }
            }

            if (!invoke$isBody(this.l5n_1)) {
              this.o5n_1.n('<-- END HTTP');
              return this.n5n_1;
            }

            if (!(this.p5n_1 == null) && equals(this.p5n_1, new Long(0, 0))) {
              this.o5n_1.n('<-- END HTTP (' + this.r5n_1.toString() + 'ms, ' + toString_0(this.p5n_1) + '-byte body)');
              return this.n5n_1;
            }

            if (equals(contentType(this.n5n_1), Text_getInstance().n2x_1)) {
              this.o5n_1.n('<-- END HTTP (streaming)');
              return this.n5n_1;
            }

            if (get_isSaved(this.n5n_1)) {
              this.n9_1 = 3;
              suspendResult = invoke$logResponseBody(this.m5n_1, this.n5n_1, this.n5n_1.u3m(), this.o5n_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              continue $sm;
            }

          case 1:
            this.t5n_1 = split(this.n5n_1.u3m(), this.n5n_1);
            this.u5n_1 = this.t5n_1.dc();
            this.v5n_1 = this.t5n_1.ec();
            this.n9_1 = 2;
            suspendResult = invoke$logResponseBody(this.m5n_1, this.n5n_1, this.v5n_1, this.o5n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = wrapWithContent(this.n5n_1.s3n(), this.u5n_1);
            return call.k3j();
          case 3:
            return this.n5n_1;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function LoggingFormat_Default_getInstance() {
    LoggingFormat_initEntries();
    return LoggingFormat_Default_instance;
  }
  function LoggingFormat_OkHttp_getInstance() {
    LoggingFormat_initEntries();
    return LoggingFormat_OkHttp_instance;
  }
  var properties_initialized_Logging_kt_588vu7;
  function _init_properties_Logging_kt__66pui5() {
    if (!properties_initialized_Logging_kt_588vu7) {
      properties_initialized_Logging_kt_588vu7 = true;
      // Inline function 'io.ktor.util.AttributeKey' call
      var name = 'CallLogger';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp = getKClass(HttpClientCallLogger);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_0;
      try {
        tmp_0 = createKType(getKClass(HttpClientCallLogger), arrayOf([]), false);
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
      ClientCallLogger = new AttributeKey(name, tmp$ret$1);
      // Inline function 'io.ktor.util.AttributeKey' call
      var name_0 = 'DisableLogging';
      // Inline function 'io.ktor.util.reflect.typeInfo' call
      var tmp_2 = getKClass(Unit);
      // Inline function 'io.ktor.util.reflect.typeOfOrNull' call
      var tmp_3;
      try {
        tmp_3 = createKType(getKClass(Unit), arrayOf([]), false);
      } catch ($p) {
        var tmp_4;
        if ($p instanceof Error) {
          var _unused_var__etf5q3_0 = $p;
          tmp_4 = null;
        } else {
          throw $p;
        }
        tmp_3 = tmp_4;
      }
      var tmp$ret$0_0 = tmp_3;
      var tmp$ret$1_0 = new TypeInfo(tmp_2, tmp$ret$0_0);
      DisableLogging = new AttributeKey(name_0, tmp$ret$1_0);
      var tmp_5 = LoggingConfig$_init_$ref_f1nb0k();
      Logging = createClientPlugin('Logging', tmp_5, Logging$lambda);
    }
  }
  function logHeaders(_this__u8e3s4, headers, sanitizedHeaders) {
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = toList(headers);
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = logHeaders$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var sortedHeaders = sortedWith(this_0, tmp$ret$0);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = sortedHeaders.q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      // Inline function 'kotlin.collections.component1' call
      var key = element.b1();
      // Inline function 'kotlin.collections.component2' call
      var values = element.c1();
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = sanitizedHeaders.q();
        while (_iterator__ex2g4s_0.r()) {
          var element_0 = _iterator__ex2g4s_0.s();
          if (element_0.x5n_1(key)) {
            tmp$ret$5 = element_0;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      var tmp0_safe_receiver = tmp$ret$5;
      var placeholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w5n_1;
      logHeader(_this__u8e3s4, key, placeholder == null ? joinToString(values, '; ') : placeholder);
    }
  }
  function logHeader(_this__u8e3s4, key, value) {
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = '-> ' + key + ': ' + value;
    // Inline function 'kotlin.text.appendLine' call
    _this__u8e3s4.o(value_0).p(_Char___init__impl__6a9atx(10));
  }
  function logResponseHeader(log, response, level, sanitizedHeaders) {
    // Inline function 'kotlin.with' call
    if (level.f5g_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value = 'RESPONSE: ' + response.r37().toString();
      // Inline function 'kotlin.text.appendLine' call
      log.z8(value).p(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'METHOD: ' + response.s3n().t3m().p3n().toString();
      // Inline function 'kotlin.text.appendLine' call
      log.z8(value_0).p(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = 'FROM: ' + response.s3n().t3m().w3m().toString();
      // Inline function 'kotlin.text.appendLine' call
      log.z8(value_1).p(_Char___init__impl__6a9atx(10));
    }
    if (level.g5g_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value_2 = 'COMMON HEADERS';
      // Inline function 'kotlin.text.appendLine' call
      log.z8(value_2).p(_Char___init__impl__6a9atx(10));
      logHeaders(log, response.d32().e2r(), sanitizedHeaders);
    }
  }
  function logResponseBody(log, contentType, content, $completion) {
    var tmp = new $logResponseBodyCOROUTINE$10(log, contentType, content, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.k5u_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).qf = function (a, b) {
    return this.k5u_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.qf(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).v3 = function () {
    return this.k5u_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.v3(), other.v3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.v3());
  };
  function logHeaders$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.b1();
    var tmp$ret$1 = b.b1();
    return compareValues(tmp, tmp$ret$1);
  }
  function $logResponseBodyCOROUTINE$10(log, contentType, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y5t_1 = log;
    this.z5t_1 = contentType;
    this.a5u_1 = content;
  }
  protoOf($logResponseBodyCOROUTINE$10).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.b5u_1 = this.y5t_1;
            this.c5u_1 = this.b5u_1;
            var tmp_1 = this;
            tmp_1.d5u_1 = this.c5u_1;
            this.e5u_1 = this.d5u_1;
            var tmp0 = this.e5u_1;
            var value = 'BODY Content-Type: ' + toString_0(this.z5t_1);
            tmp0.z8(value).p(_Char___init__impl__6a9atx(10));
            var tmp2 = this.e5u_1;
            var value_0 = 'BODY START';
            tmp2.z8(value_0).p(_Char___init__impl__6a9atx(10));
            var tmp_2 = this;
            tmp_2.f5u_1 = this.a5u_1;
            var tmp_3 = this;
            var tmp0_safe_receiver = this.z5t_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
            tmp_3.g5u_1 = tmp1_elvis_lhs == null ? Charsets_getInstance().t1z_1 : tmp1_elvis_lhs;
            this.h5u_1 = this.f5u_1;
            this.i5u_1 = this.g5u_1;
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = readRemaining(this.h5u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.j5u_1 = readText(ARGUMENT, this.i5u_1);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof Error) {
              var cause = this.q9_1;
              var tmp_5 = this;
              tmp_5.j5u_1 = null;
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            var tmp2_elvis_lhs = this.j5u_1;
            var message = tmp2_elvis_lhs == null ? '[response body omitted]' : tmp2_elvis_lhs;
            this.e5u_1.z8(message).p(_Char___init__impl__6a9atx(10));
            this.e5u_1.z8('BODY END');
            return Unit_instance;
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
  function observe(_this__u8e3s4, log, $completion) {
    var tmp = new $observeCOROUTINE$11(_this__u8e3s4, log, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function toReadChannel(_this__u8e3s4) {
    var tmp = GlobalScope_instance;
    var tmp_0 = Dispatchers_getInstance().f14_1;
    return writer(tmp, tmp_0, VOID, toReadChannel$slambda_0(_this__u8e3s4, null)).e1x_1;
  }
  function toReadChannel$slambda($this_toReadChannel, resultContinuation) {
    this.h5v_1 = $this_toReadChannel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(toReadChannel$slambda).w3c = function ($this$writer, $completion) {
    var tmp = this.x3c($this$writer, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(toReadChannel$slambda).va = function (p1, $completion) {
    return this.w3c(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(toReadChannel$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.h5v_1.y37(this.i5v_1.g1x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(toReadChannel$slambda).x3c = function ($this$writer, completion) {
    var i = new toReadChannel$slambda(this.h5v_1, completion);
    i.i5v_1 = $this$writer;
    return i;
  };
  function toReadChannel$slambda_0($this_toReadChannel, resultContinuation) {
    var i = new toReadChannel$slambda($this_toReadChannel, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.w3c($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $observeCOROUTINE$11(_this__u8e3s4, log, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t5u_1 = _this__u8e3s4;
    this.u5u_1 = log;
  }
  protoOf($observeCOROUTINE$11).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.v5u_1 = this.t5u_1;
            var tmp_0 = this.v5u_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.n9_1 = 3;
              suspendResult = writeFully(this.u5u_1, this.t5u_1.t37(), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.v5u_1;
              if (tmp_1 instanceof ReadChannelContent) {
                var tmp_2 = this;
                var responseChannel = new ByteChannel();
                var content = this.t5u_1.w37();
                copyToBoth(content, this.u5u_1, responseChannel);
                tmp_2.w5u_1 = new LoggedContent(this.t5u_1, responseChannel);
                this.n9_1 = 5;
                continue $sm;
              } else {
                var tmp_3 = this.v5u_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  var tmp_4 = this;
                  var responseChannel_0 = new ByteChannel();
                  var content_0 = toReadChannel(this.t5u_1);
                  copyToBoth(content_0, this.u5u_1, responseChannel_0);
                  tmp_4.w5u_1 = new LoggedContent(this.t5u_1, responseChannel_0);
                  this.n9_1 = 5;
                  continue $sm;
                } else {
                  var tmp_5 = this.v5u_1;
                  if (tmp_5 instanceof ContentWrapper) {
                    this.x5u_1 = this.t5u_1;
                    this.n9_1 = 2;
                    suspendResult = observe(this.t5u_1.c38(), this.u5u_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    var tmp_6;
                    var tmp_7 = this.v5u_1;
                    if (tmp_7 instanceof NoContent) {
                      tmp_6 = true;
                    } else {
                      var tmp_8 = this.v5u_1;
                      tmp_6 = tmp_8 instanceof ProtocolUpgrade;
                    }
                    if (tmp_6) {
                      this.n9_1 = 1;
                      suspendResult = this.u5u_1.h1p(this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      var tmp_9 = this;
                      noWhenBranchMatchedException();
                    }
                  }
                }
              }
            }

            break;
          case 1:
            this.w5u_1 = this.t5u_1;
            this.n9_1 = 5;
            continue $sm;
          case 2:
            this.y5u_1 = suspendResult;
            this.w5u_1 = this.x5u_1.d38(this.y5u_1);
            this.n9_1 = 5;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            suspendResult = this.u5u_1.h1p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.w5u_1 = this.t5u_1;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            return this.w5u_1;
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
  function MDCContext() {
    return MDCContextElement_instance;
  }
  function MDCContextKey() {
  }
  var MDCContextKey_instance;
  function MDCContextKey_getInstance() {
    return MDCContextKey_instance;
  }
  function MDCContextElement() {
  }
  protoOf(MDCContextElement).b1 = function () {
    return MDCContextKey_instance;
  };
  protoOf(MDCContextElement).toString = function () {
    return 'MDCContext';
  };
  var MDCContextElement_instance;
  function MDCContextElement_getInstance() {
    return MDCContextElement_instance;
  }
  function get_DEFAULT(_this__u8e3s4) {
    return get_SIMPLE(_this__u8e3s4);
  }
  //region block: post-declaration
  protoOf(MDCContextElement).ma = get;
  protoOf(MDCContextElement).xj = fold;
  protoOf(MDCContextElement).wj = minusKey;
  protoOf(MDCContextElement).yj = plus;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  SendHook_instance = new SendHook();
  ResponseAfterEncodingHook_instance = new ResponseAfterEncodingHook();
  ResponseHook_instance = new ResponseHook();
  ReceiveHook_instance = new ReceiveHook();
  MDCContextKey_instance = new MDCContextKey();
  MDCContextElement_instance = new MDCContextElement();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LogLevel_ALL_getInstance;
  _.$_$.b = LogLevel_BODY_getInstance;
  _.$_$.c = Companion_instance;
  _.$_$.d = get_DEFAULT;
  _.$_$.e = get_Logging;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-logging.js.map
