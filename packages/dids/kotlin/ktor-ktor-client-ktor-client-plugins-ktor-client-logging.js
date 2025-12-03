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
  var CoroutineImpl = kotlin_kotlin.$_$.wa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.fa;
  var THROW_CCE = kotlin_kotlin.$_$.ih;
  var isCharSequence = kotlin_kotlin.$_$.dc;
  var trim = kotlin_kotlin.$_$.lg;
  var toString = kotlin_kotlin.$_$.ad;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var protoOf = kotlin_kotlin.$_$.wc;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ub;
  var charSequenceLength = kotlin_kotlin.$_$.ib;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.z;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
  var VOID = kotlin_kotlin.$_$.j;
  var Enum = kotlin_kotlin.$_$.xg;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.r;
  var initMetadataForCompanion = kotlin_kotlin.$_$.tb;
  var println = kotlin_kotlin.$_$.za;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var Long = kotlin_kotlin.$_$.ch;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.q;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.p;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.o;
  var toLong = kotlin_kotlin.$_$.yc;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.n;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.h;
  var initMetadataForLambda = kotlin_kotlin.$_$.xb;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var isSuspendFunction = kotlin_kotlin.$_$.lc;
  var initMetadataForObject = kotlin_kotlin.$_$.yb;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.w;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.i;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.c;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.v;
  var Phases_getInstance_1 = kotlin_io_ktor_ktor_client_core.$_$.d;
  var get_ResponseObserver = kotlin_io_ktor_ktor_client_core.$_$.j;
  var Collection = kotlin_kotlin.$_$.y5;
  var isInterface = kotlin_kotlin.$_$.hc;
  var toString_0 = kotlin_kotlin.$_$.ni;
  var charset = kotlin_io_ktor_ktor_http.$_$.g1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.m1;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h1;
  var Url = kotlin_io_ktor_ktor_http.$_$.c1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var joinToString = kotlin_kotlin.$_$.h8;
  var equals = kotlin_kotlin.$_$.mb;
  var HttpClientCall = kotlin_io_ktor_ktor_client_core.$_$.f;
  var contentType = kotlin_io_ktor_ktor_http.$_$.k1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.l;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.b;
  var GZipEncoder_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.f;
  var readText = kotlin_io_ktor_ktor_io.$_$.c1;
  var Triple = kotlin_kotlin.$_$.kh;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.d;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.g1;
  var decode = kotlin_io_ktor_ktor_io.$_$.s;
  var charSequenceGet = kotlin_kotlin.$_$.hb;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ii;
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
  var toLongOrNull = kotlin_kotlin.$_$.zf;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.h1;
  var get_request = kotlin_io_ktor_ktor_client_core.$_$.y;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var get_isSaved = kotlin_io_ktor_ktor_client_core.$_$.n;
  var wrapWithContent = kotlin_io_ktor_ktor_client_core.$_$.k;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.wh;
  var createKType = kotlin_kotlin.$_$.d;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.k;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.m;
  var Unit = kotlin_kotlin.$_$.th;
  var createClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.i;
  var toList = kotlin_kotlin.$_$.q9;
  var sortedWith = kotlin_kotlin.$_$.j9;
  var FunctionAdapter = kotlin_kotlin.$_$.ab;
  var Comparator = kotlin_kotlin.$_$.ug;
  var hashCode = kotlin_kotlin.$_$.rb;
  var compareValues = kotlin_kotlin.$_$.da;
  var writer = kotlin_io_ktor_ktor_io.$_$.x1;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.p1;
  var copyToBoth = kotlin_io_ktor_ktor_utils.$_$.z;
  var get = kotlin_kotlin.$_$.sa;
  var fold = kotlin_kotlin.$_$.ra;
  var minusKey = kotlin_kotlin.$_$.ta;
  var plus = kotlin_kotlin.$_$.va;
  var Element = kotlin_kotlin.$_$.ua;
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
    this.y5b_1 = _this__u8e3s4;
    this.z5b_1 = message;
  }
  protoOf($logResponseExceptionCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.y5b_1.d5c_1.oz(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = this.z5b_1;
            this.y5b_1.a5c_1.h5c(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())));
            return Unit_instance;
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
  function $logResponseBodyCOROUTINE$1(_this__u8e3s4, message, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q5c_1 = _this__u8e3s4;
    this.r5c_1 = message;
  }
  protoOf($logResponseBodyCOROUTINE$1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.q5c_1.e5c_1.oz(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q5c_1.c5c_1.x8(this.r5c_1);
            return Unit_instance;
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
  function $closeResponseLogCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a5d_1 = _this__u8e3s4;
  }
  protoOf($closeResponseLogCOROUTINE$2).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            if (!this.a5d_1.g5c_1.atomicfu$compareAndSet(false, true))
              return Unit_instance;
            this.m9_1 = 1;
            suspendResult = this.a5d_1.d5c_1.oz(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var message = toString(trim(this.a5d_1.c5c_1));
            if (charSequenceLength(message) > 0) {
              this.a5d_1.a5c_1.h5c(message);
            }

            return Unit_instance;
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
  function HttpClientCallLogger(logger) {
    this.a5c_1 = logger;
    this.b5c_1 = StringBuilder_init_$Create$();
    this.c5c_1 = StringBuilder_init_$Create$();
    this.d5c_1 = Job();
    this.e5c_1 = Job();
    this.f5c_1 = atomic$boolean$1(false);
    this.g5c_1 = atomic$boolean$1(false);
  }
  protoOf(HttpClientCallLogger).b5d = function (message) {
    var tmp1 = this.b5c_1;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.appendLine' call
    var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
    // Inline function 'kotlin.text.appendLine' call
    tmp1.x8(value).y8(_Char___init__impl__6a9atx(10));
  };
  protoOf(HttpClientCallLogger).c5d = function (message) {
    var tmp1 = this.c5c_1;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.appendLine' call
    var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
    // Inline function 'kotlin.text.appendLine' call
    tmp1.x8(value).y8(_Char___init__impl__6a9atx(10));
    this.e5c_1.nz();
  };
  protoOf(HttpClientCallLogger).d5d = function (message, $completion) {
    var tmp = new $logResponseExceptionCOROUTINE$0(this, message, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(HttpClientCallLogger).e5d = function (message, $completion) {
    var tmp = new $logResponseBodyCOROUTINE$1(this, message, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(HttpClientCallLogger).f5d = function () {
    if (!this.f5c_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    try {
      var message = toString(trim(this.b5c_1));
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(message) > 0) {
        this.a5c_1.h5c(message);
      }
    }finally {
      this.d5c_1.nz();
    }
  };
  protoOf(HttpClientCallLogger).g5d = function ($completion) {
    var tmp = new $closeResponseLogCOROUTINE$2(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
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
    this.j5d_1 = info;
    this.k5d_1 = headers;
    this.l5d_1 = body;
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
    this.n5d_1 = originalContent;
    this.o5d_1 = channel;
    this.p5d_1 = this.n5d_1.a35();
    this.q5d_1 = this.n5d_1.c35();
    this.r5d_1 = this.n5d_1.b35();
    this.s5d_1 = this.n5d_1.n2z();
  }
  protoOf(LoggedContent).a35 = function () {
    return this.p5d_1;
  };
  protoOf(LoggedContent).c35 = function () {
    return this.q5d_1;
  };
  protoOf(LoggedContent).b35 = function () {
    return this.r5d_1;
  };
  protoOf(LoggedContent).n2z = function () {
    return this.s5d_1;
  };
  protoOf(LoggedContent).g35 = function () {
    return this.o5d_1;
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
  protoOf(SimpleLogger).h5c = function (message) {
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
    tmp.t5d_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.u5d_1 = ArrayList_init_$Create$();
    this.v5d_1 = null;
    this.w5d_1 = LoggingFormat_Default_getInstance();
    this.x5d_1 = LogLevel_HEADERS_getInstance();
  }
  protoOf(LoggingConfig).y5d = function (value) {
    this.v5d_1 = value;
  };
  protoOf(LoggingConfig).z5d = function () {
    var tmp0_elvis_lhs = this.v5d_1;
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
    var this_1 = _this__u8e3s4.n34();
    if (charSequenceLength(this_1) === 0) {
      this_0.x8('/');
    } else {
      this_0.x8(_this__u8e3s4.n34());
    }
    // Inline function 'kotlin.text.isEmpty' call
    var this_2 = _this__u8e3s4.q34();
    if (!(charSequenceLength(this_2) === 0)) {
      this_0.x8('?');
      this_0.x8(_this__u8e3s4.q34());
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
      tmp = toLong(content.d35().length);
    } else {
      if (content instanceof ContentWrapper) {
        tmp = computeRequestBodySize(content.m35());
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
    this.a5e_1 = context;
  }
  protoOf(Context).b5e = function (content, $completion) {
    return this.a5e_1.d2r(content, $completion);
  };
  protoOf(Context).c5e = function ($completion) {
    return this.a5e_1.e2r($completion);
  };
  function SendHook$install$slambda($handler, resultContinuation) {
    this.l5e_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SendHook$install$slambda).n3g = function ($this$intercept, it, $completion) {
    var tmp = this.o3g($this$intercept, it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(SendHook$install$slambda).va = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.n3g(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SendHook$install$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.l5e_1(new Context(this.m5e_1), this.m5e_1.z2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(SendHook$install$slambda).o3g = function ($this$intercept, it, completion) {
    var i = new SendHook$install$slambda(this.l5e_1, completion);
    i.m5e_1 = $this$intercept;
    i.n5e_1 = it;
    return i;
  };
  function SendHook$install$slambda_0($handler, resultContinuation) {
    var i = new SendHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.n3g($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function SendHook() {
  }
  protoOf(SendHook).o5e = function (client, handler) {
    var tmp = Phases_getInstance().e3i_1;
    client.v3f_1.d2s(tmp, SendHook$install$slambda_0(handler, null));
  };
  protoOf(SendHook).i3p = function (client, handler) {
    return this.o5e(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SendHook_instance;
  function SendHook_getInstance() {
    return SendHook_instance;
  }
  function Context_0(context) {
    this.p5e_1 = context;
  }
  protoOf(Context_0).d4d = function (response, $completion) {
    return this.p5e_1.d2r(response, $completion);
  };
  function ResponseAfterEncodingHook$install$slambda($handler, resultContinuation) {
    this.y5e_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ResponseAfterEncodingHook$install$slambda).v3p = function ($this$intercept, it, $completion) {
    var tmp = this.w3p($this$intercept, it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(ResponseAfterEncodingHook$install$slambda).va = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3p(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ResponseAfterEncodingHook$install$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.y5e_1(new Context_0(this.z5e_1), this.z5e_1.c2r(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ResponseAfterEncodingHook$install$slambda).w3p = function ($this$intercept, it, completion) {
    var i = new ResponseAfterEncodingHook$install$slambda(this.y5e_1, completion);
    i.z5e_1 = $this$intercept;
    i.a5f_1 = it;
    return i;
  };
  function ResponseAfterEncodingHook$install$slambda_0($handler, resultContinuation) {
    var i = new ResponseAfterEncodingHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.v3p($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ResponseAfterEncodingHook() {
  }
  protoOf(ResponseAfterEncodingHook).b5f = function (client, handler) {
    var afterState = new PipelinePhase('AfterState');
    client.w3f_1.a2s(Phases_getInstance_0().z3p_1, afterState);
    client.w3f_1.d2s(afterState, ResponseAfterEncodingHook$install$slambda_0(handler, null));
  };
  protoOf(ResponseAfterEncodingHook).i3p = function (client, handler) {
    return this.b5f(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ResponseAfterEncodingHook_instance;
  function ResponseAfterEncodingHook_getInstance() {
    return ResponseAfterEncodingHook_instance;
  }
  function Context_1(context) {
    this.c5f_1 = context;
  }
  protoOf(Context_1).d5f = function ($completion) {
    return this.c5f_1.e2r($completion);
  };
  function ResponseHook$install$slambda($handler, resultContinuation) {
    this.m5f_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ResponseHook$install$slambda).v3p = function ($this$intercept, it, $completion) {
    var tmp = this.w3p($this$intercept, it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(ResponseHook$install$slambda).va = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3p(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ResponseHook$install$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.m5f_1(new Context_1(this.n5f_1), this.n5f_1.c2r(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ResponseHook$install$slambda).w3p = function ($this$intercept, it, completion) {
    var i = new ResponseHook$install$slambda(this.m5f_1, completion);
    i.n5f_1 = $this$intercept;
    i.o5f_1 = it;
    return i;
  };
  function ResponseHook$install$slambda_0($handler, resultContinuation) {
    var i = new ResponseHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.v3p($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ResponseHook() {
  }
  protoOf(ResponseHook).p5f = function (client, handler) {
    var tmp = Phases_getInstance_0().z3p_1;
    client.w3f_1.d2s(tmp, ResponseHook$install$slambda_0(handler, null));
  };
  protoOf(ResponseHook).i3p = function (client, handler) {
    return this.p5f(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ResponseHook_instance;
  function ResponseHook_getInstance() {
    return ResponseHook_instance;
  }
  function Context_2(context) {
    this.q5f_1 = context;
  }
  protoOf(Context_2).r5f = function ($completion) {
    return this.q5f_1.e2r($completion);
  };
  function ReceiveHook$install$slambda($handler, resultContinuation) {
    this.a5g_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveHook$install$slambda).i3h = function ($this$intercept, it, $completion) {
    var tmp = this.j3h($this$intercept, it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(ReceiveHook$install$slambda).va = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.i3h(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveHook$install$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.a5g_1(new Context_2(this.b5g_1), this.b5g_1.z2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ReceiveHook$install$slambda).j3h = function ($this$intercept, it, completion) {
    var i = new ReceiveHook$install$slambda(this.a5g_1, completion);
    i.b5g_1 = $this$intercept;
    i.c5g_1 = it;
    return i;
  };
  function ReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.i3h($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ReceiveHook() {
  }
  protoOf(ReceiveHook).d5g = function (client, handler) {
    var tmp = Phases_getInstance_1().s3i_1;
    client.u3f_1.d2s(tmp, ReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(ReceiveHook).i3p = function (client, handler) {
    return this.d5g(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    var logger = $this$createClientPlugin.d3q_1.z5d();
    var level = $this$createClientPlugin.d3q_1.x5d_1;
    var filters = $this$createClientPlugin.d3q_1.t5d_1;
    var sanitizedHeaders = $this$createClientPlugin.d3q_1.u5d_1;
    var okHttpFormat = $this$createClientPlugin.d3q_1.w5d_1.equals(LoggingFormat_OkHttp_getInstance());
    var tmp = SendHook_instance;
    $this$createClientPlugin.g3q(tmp, Logging$lambda$slambda_0(okHttpFormat, logger, filters, sanitizedHeaders, level, $this$createClientPlugin, null));
    var tmp_0 = ResponseAfterEncodingHook_instance;
    $this$createClientPlugin.g3q(tmp_0, Logging$lambda$slambda_2(okHttpFormat, logger, sanitizedHeaders, level, $this$createClientPlugin, null));
    var tmp_1 = ResponseHook_instance;
    $this$createClientPlugin.g3q(tmp_1, Logging$lambda$slambda_4(okHttpFormat, level, sanitizedHeaders, null));
    var tmp_2 = ReceiveHook_instance;
    $this$createClientPlugin.g3q(tmp_2, Logging$lambda$slambda_6(okHttpFormat, level, null));
    if (okHttpFormat)
      return Unit_instance;
    if (!level.l5d_1)
      return Unit_instance;
    var observer = Logging$lambda$slambda_8(level, null);
    var tmp_3 = get_ResponseObserver();
    var tmp_4 = get_ResponseObserver();
    tmp_3.a3j(tmp_4.z3i(Logging$lambda$lambda(observer)), $this$createClientPlugin.c3q_1);
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
        var _iterator__ex2g4s = filters.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
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
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function invoke$logRequestBody($this_createClientPlugin, content, contentLength, headers, method, logLines, body, $completion) {
    var tmp = new $invoke$logRequestBodyCOROUTINE$4($this_createClientPlugin, content, contentLength, headers, method, logLines, body, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
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
    tmp_0.o9_1 = Unit_instance;
    tmp_0.p9_1 = null;
    return tmp_0.ea();
  }
  function invoke$logRequestOkHttpFormat(sanitizedHeaders, level, $this_createClientPlugin, request, logLines, $completion) {
    var tmp = new $invoke$logRequestOkHttpFormatCOROUTINE$6(sanitizedHeaders, level, $this_createClientPlugin, request, logLines, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function invoke$logResponseBody($this_createClientPlugin, response, body, logLines, $completion) {
    var tmp = new $invoke$logResponseBodyCOROUTINE$7($this_createClientPlugin, response, body, logLines, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function invoke$logResponseOkHttpFormat(sanitizedHeaders, level, $this_createClientPlugin, response, logLines, $completion) {
    var tmp = new $invoke$logResponseOkHttpFormatCOROUTINE$8(sanitizedHeaders, level, $this_createClientPlugin, response, logLines, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function invoke$logRequestBody_0(content, logger, $completion) {
    var requestLog = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.appendLine' call
    var value = 'BODY Content-Type: ' + toString_0(content.a35());
    // Inline function 'kotlin.text.appendLine' call
    requestLog.x8(value).y8(_Char___init__impl__6a9atx(10));
    var tmp0_safe_receiver = content.a35();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
    var charset_0 = tmp1_elvis_lhs == null ? Charsets_getInstance().d1x_1 : tmp1_elvis_lhs;
    var channel = new ByteChannel();
    var tmp = GlobalScope_instance;
    var tmp_0 = Dispatchers_getInstance().e13_1.ij(MDCContext());
    launch(tmp, tmp_0, VOID, Logging$lambda$logRequestBody$slambda_0(channel, charset_0, requestLog, logger, null));
    return observe(content, channel, $completion);
  }
  function invoke$logRequestException(level, logger, context, cause) {
    if (level.j5d_1) {
      logger.h5c('REQUEST ' + Url(context.u3h_1).toString() + ' failed with exception: ' + cause.toString());
    }
  }
  function invoke$logRequest(logger, level, sanitizedHeaders, request, $completion) {
    var tmp = request.x3h_1;
    var content = tmp instanceof OutgoingContent ? tmp : THROW_CCE();
    var callLogger = new HttpClientCallLogger(logger);
    request.z3h_1.k2k(get_ClientCallLogger(), callLogger);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (level.j5d_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value = 'REQUEST: ' + Url(request.u3h_1).toString();
      // Inline function 'kotlin.text.appendLine' call
      this_0.x8(value).y8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'METHOD: ' + request.v3h_1.toString();
      // Inline function 'kotlin.text.appendLine' call
      this_0.x8(value_0).y8(_Char___init__impl__6a9atx(10));
    }
    if (level.k5d_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = 'COMMON HEADERS';
      // Inline function 'kotlin.text.appendLine' call
      this_0.x8(value_1).y8(_Char___init__impl__6a9atx(10));
      logHeaders(this_0, request.w3h_1.o2o(), sanitizedHeaders);
      // Inline function 'kotlin.text.appendLine' call
      var value_2 = 'CONTENT HEADERS';
      // Inline function 'kotlin.text.appendLine' call
      this_0.x8(value_2).y8(_Char___init__impl__6a9atx(10));
      var tmp$ret$9;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = sanitizedHeaders.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          if (element.b5l_1(HttpHeaders_getInstance().z2v_1)) {
            tmp$ret$9 = element;
            break $l$block;
          }
        }
        tmp$ret$9 = null;
      }
      var tmp0_safe_receiver = tmp$ret$9;
      var contentLengthPlaceholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a5l_1;
      var tmp$ret$11;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = sanitizedHeaders.p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          if (element_0.b5l_1(HttpHeaders_getInstance().c2w_1)) {
            tmp$ret$11 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$11 = null;
      }
      var tmp1_safe_receiver = tmp$ret$11;
      var contentTypePlaceholder = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.a5l_1;
      var tmp2_safe_receiver = content.c35();
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp_0 = HttpHeaders_getInstance().z2v_1;
        logHeader(this_0, tmp_0, contentLengthPlaceholder == null ? tmp2_safe_receiver.toString() : contentLengthPlaceholder);
      }
      var tmp3_safe_receiver = content.a35();
      if (tmp3_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp_1 = HttpHeaders_getInstance().c2w_1;
        logHeader(this_0, tmp_1, contentTypePlaceholder == null ? tmp3_safe_receiver.toString() : contentTypePlaceholder);
      }
      logHeaders(this_0, content.n2z().o2o(), sanitizedHeaders);
    }
    var message = this_0.toString();
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(message) > 0) {
      callLogger.b5d(message);
    }
    var tmp_2;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(message) === 0) {
      tmp_2 = true;
    } else {
      tmp_2 = !level.l5d_1;
    }
    if (tmp_2) {
      callLogger.f5d();
      return null;
    }
    return invoke$logRequestBody_0(content, callLogger, $completion);
  }
  function invoke$logResponseException(level, log, request, cause) {
    if (!level.j5d_1)
      return Unit_instance;
    log.x8('RESPONSE ' + request.g3k().toString() + ' failed with exception: ' + cause.toString());
  }
  function Logging$lambda$slambda($okHttpFormat, $logger, $filters, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    this.k5l_1 = $okHttpFormat;
    this.l5l_1 = $logger;
    this.m5l_1 = $filters;
    this.n5l_1 = $sanitizedHeaders;
    this.o5l_1 = $level;
    this.p5l_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda).d5m = function ($this$on, request, $completion) {
    var tmp = this.e5m($this$on, request, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Logging$lambda$slambda).va = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context ? p1 : THROW_CCE();
    return this.d5m(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 16;
            if (!invoke$shouldBeLogged(this.m5l_1, this.r5l_1)) {
              this.r5l_1.z3h_1.k2k(get_DisableLogging(), Unit_instance);
              return Unit_instance;
            }

            if (this.k5l_1) {
              var tmp_0 = this;
              tmp_0.s5l_1 = ArrayList_init_$Create$();
              this.m9_1 = 10;
              suspendResult = invoke$logRequestOkHttpFormat(this.n5l_1, this.o5l_1, this.p5l_1, this.r5l_1, this.s5l_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 1;
              continue $sm;
            }

          case 1:
            this.n9_1 = 3;
            this.m9_1 = 2;
            suspendResult = invoke$logRequest(this.l5l_1, this.o5l_1, this.n5l_1, this.r5l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t5l_1 = suspendResult;
            this.n9_1 = 16;
            this.m9_1 = 4;
            continue $sm;
          case 3:
            this.n9_1 = 16;
            var tmp_1 = this.p9_1;
            if (tmp_1 instanceof Error) {
              this.u5l_1 = this.p9_1;
              var tmp_2 = this;
              tmp_2.t5l_1 = null;
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 4:
            this.n9_1 = 16;
            this.v5l_1 = this.t5l_1;
            this.w5l_1 = Unit_instance;
            this.m9_1 = 5;
            continue $sm;
          case 5:
            this.n9_1 = 8;
            this.n9_1 = 7;
            this.m9_1 = 6;
            var tmp0_elvis_lhs = this.v5l_1;
            suspendResult = this.q5l_1.b5e(tmp0_elvis_lhs == null ? this.r5l_1.x3h_1 : tmp0_elvis_lhs, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.w5l_1 = suspendResult;
            this.n9_1 = 16;
            this.m9_1 = 9;
            continue $sm;
          case 7:
            this.n9_1 = 8;
            var tmp_3 = this.p9_1;
            if (tmp_3 instanceof Error) {
              this.x5l_1 = this.p9_1;
              var tmp_4 = this;
              invoke$logRequestException(this.o5l_1, this.l5l_1, this.r5l_1, this.x5l_1);
              throw this.x5l_1;
            } else {
              throw this.p9_1;
            }

          case 8:
            this.n9_1 = 16;
            this.y5l_1 = this.p9_1;
            throw this.y5l_1;
          case 9:
            this.z5l_1 = this.w5l_1;
            this.n9_1 = 16;
            return Unit_instance;
          case 10:
            this.a5m_1 = suspendResult;
            if (this.s5l_1.s() > 0) {
              this.l5l_1.h5c(joinToString(this.s5l_1, '\n'));
            }

            this.n9_1 = 14;
            if (!(this.a5m_1 == null)) {
              this.m9_1 = 12;
              suspendResult = this.q5l_1.b5e(this.a5m_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 11;
              suspendResult = this.q5l_1.c5e(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 11:
            this.c5m_1 = suspendResult;
            this.m9_1 = 13;
            continue $sm;
          case 12:
            this.c5m_1 = suspendResult;
            this.m9_1 = 13;
            continue $sm;
          case 13:
            this.b5m_1 = this.c5m_1;
            this.n9_1 = 16;
            this.m9_1 = 15;
            continue $sm;
          case 14:
            this.n9_1 = 16;
            var tmp_5 = this.p9_1;
            if (tmp_5 instanceof Error) {
              var cause = this.p9_1;
              var tmp_6 = this;
              this.l5l_1.h5c('<-- HTTP FAILED: ' + cause.toString());
              throw cause;
            } else {
              throw this.p9_1;
            }

          case 15:
            this.n9_1 = 16;
            return Unit_instance;
          case 16:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 16) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda).e5m = function ($this$on, request, completion) {
    var i = new Logging$lambda$slambda(this.k5l_1, this.l5l_1, this.m5l_1, this.n5l_1, this.o5l_1, this.p5l_1, completion);
    i.q5l_1 = $this$on;
    i.r5l_1 = request;
    return i;
  };
  function Logging$lambda$slambda_0($okHttpFormat, $logger, $filters, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    var i = new Logging$lambda$slambda($okHttpFormat, $logger, $filters, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.d5m($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_1($okHttpFormat, $logger, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    this.n5m_1 = $okHttpFormat;
    this.o5m_1 = $logger;
    this.p5m_1 = $sanitizedHeaders;
    this.q5m_1 = $level;
    this.r5m_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_1).w5m = function ($this$on, response, $completion) {
    var tmp = this.x5m($this$on, response, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Logging$lambda$slambda_1).va = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context_0 ? p1 : THROW_CCE();
    return this.w5m(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            if (this.n5m_1) {
              var tmp_0 = this;
              tmp_0.u5m_1 = ArrayList_init_$Create$();
              this.m9_1 = 1;
              suspendResult = invoke$logResponseOkHttpFormat(this.p5m_1, this.q5m_1, this.r5m_1, this.t5m_1, this.u5m_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 4;
              continue $sm;
            }

          case 1:
            this.v5m_1 = suspendResult;
            if (this.u5m_1.s() > 0) {
              this.o5m_1.h5c(joinToString(this.u5m_1, '\n'));
            }

            if (!equals(this.v5m_1, this.t5m_1)) {
              this.m9_1 = 2;
              suspendResult = this.s5m_1.d4d(this.v5m_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 3;
              continue $sm;
            }

          case 2:
            this.m9_1 = 3;
            continue $sm;
          case 3:
            this.m9_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda_1).x5m = function ($this$on, response, completion) {
    var i = new Logging$lambda$slambda_1(this.n5m_1, this.o5m_1, this.p5m_1, this.q5m_1, this.r5m_1, completion);
    i.s5m_1 = $this$on;
    i.t5m_1 = response;
    return i;
  };
  function Logging$lambda$slambda_2($okHttpFormat, $logger, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    var i = new Logging$lambda$slambda_1($okHttpFormat, $logger, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation);
    var l = function ($this$on, response, $completion) {
      return i.w5m($this$on, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_3($okHttpFormat, $level, $sanitizedHeaders, resultContinuation) {
    this.g5n_1 = $okHttpFormat;
    this.h5n_1 = $level;
    this.i5n_1 = $sanitizedHeaders;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_3).s5n = function ($this$on, response, $completion) {
    var tmp = this.t5n($this$on, response, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Logging$lambda$slambda_3).va = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context_1 ? p1 : THROW_CCE();
    return this.s5n(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_3).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 10;
            if (this.g5n_1)
              return Unit_instance;
            if (this.h5n_1.equals(LogLevel_NONE_getInstance()) || this.k5n_1.c3l().c3j().j2k(get_DisableLogging()))
              return Unit_instance;
            this.l5n_1 = this.k5n_1.c3l().c3j().h2k(get_ClientCallLogger());
            this.m5n_1 = StringBuilder_init_$Create$();
            this.n5n_1 = false;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 4;
            this.n9_1 = 3;
            logResponseHeader(this.m5n_1, this.k5n_1.c3l().u3g(), this.h5n_1, this.i5n_1);
            this.m9_1 = 2;
            suspendResult = this.j5n_1.d5f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o5n_1 = suspendResult;
            this.n9_1 = 10;
            this.m9_1 = 7;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            var tmp_0 = this.p9_1;
            if (tmp_0 instanceof Error) {
              this.p5n_1 = this.p9_1;
              var tmp_1 = this;
              invoke$logResponseException(this.h5n_1, this.m5n_1, this.k5n_1.c3l().d3k(), this.p5n_1);
              this.n5n_1 = true;
              throw this.p5n_1;
            } else {
              throw this.p9_1;
            }

          case 4:
            this.n9_1 = 10;
            this.q5n_1 = this.p9_1;
            this.l5n_1.c5d(this.m5n_1.toString());
            if (this.n5n_1 || !this.h5n_1.l5d_1) {
              this.m9_1 = 5;
              suspendResult = this.l5n_1.g5d(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 6;
              continue $sm;
            }

          case 5:
            this.m9_1 = 6;
            continue $sm;
          case 6:
            throw this.q5n_1;
          case 7:
            this.r5n_1 = this.o5n_1;
            this.n9_1 = 10;
            this.l5n_1.c5d(this.m5n_1.toString());
            if (this.n5n_1 || !this.h5n_1.l5d_1) {
              this.m9_1 = 8;
              suspendResult = this.l5n_1.g5d(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 9;
              continue $sm;
            }

          case 8:
            this.m9_1 = 9;
            continue $sm;
          case 9:
            return Unit_instance;
          case 10:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 10) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda_3).t5n = function ($this$on, response, completion) {
    var i = new Logging$lambda$slambda_3(this.g5n_1, this.h5n_1, this.i5n_1, completion);
    i.j5n_1 = $this$on;
    i.k5n_1 = response;
    return i;
  };
  function Logging$lambda$slambda_4($okHttpFormat, $level, $sanitizedHeaders, resultContinuation) {
    var i = new Logging$lambda$slambda_3($okHttpFormat, $level, $sanitizedHeaders, resultContinuation);
    var l = function ($this$on, response, $completion) {
      return i.s5n($this$on, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_5($okHttpFormat, $level, resultContinuation) {
    this.c5o_1 = $okHttpFormat;
    this.d5o_1 = $level;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_5).k5o = function ($this$on, call, $completion) {
    var tmp = this.l5o($this$on, call, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Logging$lambda$slambda_5).va = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context_2 ? p1 : THROW_CCE();
    return this.k5o(tmp, p2 instanceof HttpClientCall ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_5).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 6;
            if (this.c5o_1)
              return Unit_instance;
            if (this.d5o_1.equals(LogLevel_NONE_getInstance()) || this.f5o_1.c3j().j2k(get_DisableLogging())) {
              return Unit_instance;
            }

            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.e5o_1.r5f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g5o_1 = suspendResult;
            this.n9_1 = 6;
            this.m9_1 = 5;
            continue $sm;
          case 2:
            this.n9_1 = 6;
            var tmp_0 = this.p9_1;
            if (tmp_0 instanceof Error) {
              this.h5o_1 = this.p9_1;
              this.i5o_1 = StringBuilder_init_$Create$();
              this.j5o_1 = this.f5o_1.c3j().h2k(get_ClientCallLogger());
              invoke$logResponseException(this.d5o_1, this.i5o_1, this.f5o_1.d3k(), this.h5o_1);
              this.m9_1 = 3;
              suspendResult = this.j5o_1.d5d(this.i5o_1.toString(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            this.m9_1 = 4;
            suspendResult = this.j5o_1.g5d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_1 = this;
            throw this.h5o_1;
          case 5:
            this.n9_1 = 6;
            return Unit_instance;
          case 6:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 6) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda_5).l5o = function ($this$on, call, completion) {
    var i = new Logging$lambda$slambda_5(this.c5o_1, this.d5o_1, completion);
    i.e5o_1 = $this$on;
    i.f5o_1 = call;
    return i;
  };
  function Logging$lambda$slambda_6($okHttpFormat, $level, resultContinuation) {
    var i = new Logging$lambda$slambda_5($okHttpFormat, $level, resultContinuation);
    var l = function ($this$on, call, $completion) {
      return i.k5o($this$on, call, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_7($level, resultContinuation) {
    this.u5o_1 = $level;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_7).t3s = function (it, $completion) {
    var tmp = this.d3r(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Logging$lambda$slambda_7).ua = function (p1, $completion) {
    return this.t3s(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_7).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 10;
            if (this.u5o_1.equals(LogLevel_NONE_getInstance()) || this.v5o_1.c3l().c3j().j2k(get_DisableLogging())) {
              return Unit_instance;
            }

            this.w5o_1 = this.v5o_1.c3l().c3j().h2k(get_ClientCallLogger());
            this.x5o_1 = StringBuilder_init_$Create$();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 4;
            this.n9_1 = 3;
            this.m9_1 = 2;
            suspendResult = logResponseBody(this.x5o_1, contentType(this.v5o_1), this.v5o_1.e3k(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.y5o_1 = suspendResult;
            this.n9_1 = 10;
            this.m9_1 = 7;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            var tmp_0 = this.p9_1;
            if (tmp_0 instanceof Error) {
              this.z5o_1 = this.p9_1;
              var tmp_1 = this;
              tmp_1.y5o_1 = Unit_instance;
              this.n9_1 = 10;
              this.m9_1 = 7;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 4:
            this.n9_1 = 10;
            this.a5p_1 = this.p9_1;
            this.m9_1 = 5;
            var this_0 = this.x5o_1.toString();
            suspendResult = this.w5o_1.e5d(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.m9_1 = 6;
            suspendResult = this.w5o_1.g5d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            throw this.a5p_1;
          case 7:
            this.n9_1 = 10;
            this.m9_1 = 8;
            var this_1 = this.x5o_1.toString();
            suspendResult = this.w5o_1.e5d(toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.m9_1 = 9;
            suspendResult = this.w5o_1.g5d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            return Unit_instance;
          case 10:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 10) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda_7).d3r = function (it, completion) {
    var i = new Logging$lambda$slambda_7(this.u5o_1, completion);
    i.v5o_1 = it;
    return i;
  };
  function Logging$lambda$slambda_8($level, resultContinuation) {
    var i = new Logging$lambda$slambda_7($level, resultContinuation);
    var l = function (it, $completion) {
      return i.t3s(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Logging$lambda$lambda($observer) {
    return function ($this$prepare) {
      $this$prepare.b4d($observer);
      return Unit_instance;
    };
  }
  function Logging$lambda$detectIfBinary$slambda($channel, $firstChunk, $firstReadSize, $body, resultContinuation) {
    this.j5p_1 = $channel;
    this.k5p_1 = $firstChunk;
    this.l5p_1 = $firstReadSize;
    this.m5p_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$detectIfBinary$slambda).p5p = function ($this$async, $completion) {
    var tmp = this.m1g($this$async, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Logging$lambda$detectIfBinary$slambda).ua = function (p1, $completion) {
    return this.p5p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$detectIfBinary$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.m9_1 = 1;
            suspendResult = writeFully(this.j5p_1, this.k5p_1, 0, this.l5p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m9_1 = 2;
            suspendResult = copyTo(this.m5p_1, this.j5p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o5p_1 = suspendResult;
            this.m9_1 = 3;
            suspendResult = this.j5p_1.r1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return this.o5p_1;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$detectIfBinary$slambda).m1g = function ($this$async, completion) {
    var i = new Logging$lambda$detectIfBinary$slambda(this.j5p_1, this.k5p_1, this.l5p_1, this.m5p_1, completion);
    i.n5p_1 = $this$async;
    return i;
  };
  function Logging$lambda$detectIfBinary$slambda_0($channel, $firstChunk, $firstReadSize, $body, resultContinuation) {
    var i = new Logging$lambda$detectIfBinary$slambda($channel, $firstChunk, $firstReadSize, $body, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.p5p($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Logging$lambda$logOutgoingContent$lambda(it) {
    _init_properties_Logging_kt__66pui5();
    return it;
  }
  function Logging$lambda$logOutgoingContent$slambda($content, $channel, resultContinuation) {
    this.y5p_1 = $content;
    this.z5p_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$logOutgoingContent$slambda).i1w = function ($this$launch, $completion) {
    var tmp = this.m1g($this$launch, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Logging$lambda$logOutgoingContent$slambda).ua = function (p1, $completion) {
    return this.i1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$logOutgoingContent$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.y5p_1.i35(this.z5p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z5p_1.q4();
            return Unit_instance;
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
  protoOf(Logging$lambda$logOutgoingContent$slambda).m1g = function ($this$launch, completion) {
    var i = new Logging$lambda$logOutgoingContent$slambda(this.y5p_1, this.z5p_1, completion);
    i.a5q_1 = $this$launch;
    return i;
  };
  function Logging$lambda$logOutgoingContent$slambda_0($content, $channel, resultContinuation) {
    var i = new Logging$lambda$logOutgoingContent$slambda($content, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.i1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Logging$lambda$logRequestOkHttpFormat$lambda(channel) {
    _init_properties_Logging_kt__66pui5();
    return GZipEncoder_getInstance().a2o(channel);
  }
  function Logging$lambda$logRequestBody$slambda($channel, $charset, $requestLog, $logger, resultContinuation) {
    this.j5q_1 = $channel;
    this.k5q_1 = $charset;
    this.l5q_1 = $requestLog;
    this.m5q_1 = $logger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$logRequestBody$slambda).i1w = function ($this$launch, $completion) {
    var tmp = this.m1g($this$launch, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Logging$lambda$logRequestBody$slambda).ua = function (p1, $completion) {
    return this.i1w((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$logRequestBody$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 7;
            this.m9_1 = 1;
            continue $sm;
          case 1:
            this.n9_1 = 6;
            var tmp_0 = this;
            tmp_0.p5q_1 = this.j5q_1;
            var tmp_1 = this;
            tmp_1.q5q_1 = this.k5q_1;
            this.r5q_1 = this.p5q_1;
            this.s5q_1 = this.q5q_1;
            this.n9_1 = 3;
            this.m9_1 = 2;
            suspendResult = readRemaining(this.r5q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.t5q_1 = readText(ARGUMENT, this.s5q_1);
            this.n9_1 = 6;
            this.m9_1 = 4;
            continue $sm;
          case 3:
            this.n9_1 = 6;
            var tmp_2 = this.p9_1;
            if (tmp_2 instanceof Error) {
              var cause = this.p9_1;
              var tmp_3 = this;
              tmp_3.t5q_1 = null;
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 4:
            this.n9_1 = 6;
            var tmp0_elvis_lhs = this.t5q_1;
            var text = tmp0_elvis_lhs == null ? '[request body omitted]' : tmp0_elvis_lhs;
            var tmp2 = this.l5q_1;
            var value = 'BODY START';
            tmp2.x8(value).y8(_Char___init__impl__6a9atx(10));
            this.l5q_1.x8(text).y8(_Char___init__impl__6a9atx(10));
            this.o5q_1 = this.l5q_1.x8('BODY END');
            this.n9_1 = 7;
            this.m9_1 = 5;
            continue $sm;
          case 5:
            this.o5q_1;
            this.n9_1 = 7;
            this.m5q_1.b5d(this.l5q_1.toString());
            this.m5q_1.f5d();
            return Unit_instance;
          case 6:
            this.n9_1 = 7;
            var t = this.p9_1;
            this.m5q_1.b5d(this.l5q_1.toString());
            this.m5q_1.f5d();
            throw t;
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
  protoOf(Logging$lambda$logRequestBody$slambda).m1g = function ($this$launch, completion) {
    var i = new Logging$lambda$logRequestBody$slambda(this.j5q_1, this.k5q_1, this.l5q_1, this.m5q_1, completion);
    i.n5q_1 = $this$launch;
    return i;
  };
  function Logging$lambda$logRequestBody$slambda_0($channel, $charset, $requestLog, $logger, resultContinuation) {
    var i = new Logging$lambda$logRequestBody$slambda($channel, $charset, $requestLog, $logger, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.i1w($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $invoke$detectIfBinaryCOROUTINE$3($this_createClientPlugin, body, contentLength, contentType, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m5g_1 = $this_createClientPlugin;
    this.n5g_1 = body;
    this.o5g_1 = contentLength;
    this.p5g_1 = contentType;
    this.q5g_1 = headers;
  }
  protoOf($invoke$detectIfBinaryCOROUTINE$3).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            if (this.q5g_1.p2o(HttpHeaders_getInstance().x2v_1)) {
              return new Triple(true, this.o5g_1, this.n5g_1);
            }

            var tmp_0 = this;
            var tmp_1;
            if (!(this.p5g_1 == null)) {
              var tmp0_elvis_lhs = charset(this.p5g_1);
              tmp_1 = tmp0_elvis_lhs == null ? Charsets_getInstance().d1x_1 : tmp0_elvis_lhs;
            } else {
              tmp_1 = Charsets_getInstance().d1x_1;
            }

            tmp_0.r5g_1 = tmp_1;
            this.s5g_1 = false;
            this.t5g_1 = new Int8Array(1024);
            this.m9_1 = 1;
            suspendResult = readAvailable(this.n5g_1, this.t5g_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u5g_1 = suspendResult;
            if (this.u5g_1 < 1) {
              return new Triple(false, new Long(0, 0), this.n5g_1);
            }

            var tmp_2 = this;
            var this_0 = new Buffer();
            writeFully_0(this_0, this.t5g_1, 0, this.u5g_1);
            tmp_2.v5g_1 = this_0;
            this.w5g_1 = decode(this.r5g_1.h1x(), this.v5g_1, this.u5g_1);
            this.x5g_1 = -1;
            var indexedObject = this.w5g_1;
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var ch = charSequenceGet(indexedObject, inductionVariable);
              inductionVariable = inductionVariable + 1 | 0;
              this.x5g_1 = this.x5g_1 + 1 | 0;
            }

            var indexedObject_0 = this.w5g_1;
            var inductionVariable_0 = 0;
            var last_0 = indexedObject_0.length;
            $l$loop: while (inductionVariable_0 < last_0) {
              var i = inductionVariable_0;
              var ch_0 = charSequenceGet(indexedObject_0, inductionVariable_0);
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (ch_0 === _Char___init__impl__6a9atx(65533) && !(i === this.x5g_1)) {
                this.s5g_1 = true;
                break $l$loop;
              }
            }

            if (!this.s5g_1) {
              this.y5g_1 = new ByteChannel();
              this.m9_1 = 3;
              suspendResult = async(this.m5g_1.c3q_1, VOID, VOID, Logging$lambda$detectIfBinary$slambda_0(this.y5g_1, this.t5g_1, this.u5g_1, this.n5g_1, null)).kw(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 2;
              continue $sm;
            }

          case 2:
            return new Triple(this.s5g_1, this.o5g_1, this.n5g_1);
          case 3:
            var copied = suspendResult;
            var tmp_3 = this.s5g_1;
            var other = this.u5g_1;
            return new Triple(tmp_3, copied.z2(toLong(other)), this.y5g_1);
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logRequestBodyCOROUTINE$4($this_createClientPlugin, content, contentLength, headers, method, logLines, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h5h_1 = $this_createClientPlugin;
    this.i5h_1 = content;
    this.j5h_1 = contentLength;
    this.k5h_1 = headers;
    this.l5h_1 = method;
    this.m5h_1 = logLines;
    this.n5h_1 = body;
  }
  protoOf($invoke$logRequestBodyCOROUTINE$4).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.m9_1 = 1;
            suspendResult = invoke$detectIfBinary(this.h5h_1, this.n5h_1, this.j5h_1, this.i5h_1.a35(), this.k5h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o5h_1 = suspendResult;
            this.p5h_1 = this.o5h_1.dc();
            this.q5h_1 = this.o5h_1.ec();
            this.r5h_1 = this.o5h_1.dp();
            if (!this.p5h_1) {
              this.t5h_1 = this.i5h_1.a35();
              var tmp_0 = this;
              var tmp_1;
              if (!(this.t5h_1 == null)) {
                var tmp0_elvis_lhs = charset(this.t5h_1);
                tmp_1 = tmp0_elvis_lhs == null ? Charsets_getInstance().d1x_1 : tmp0_elvis_lhs;
              } else {
                tmp_1 = Charsets_getInstance().d1x_1;
              }
              tmp_0.u5h_1 = tmp_1;
              this.m9_1 = 2;
              suspendResult = readRemaining(this.r5h_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this;
              var type = 'binary';
              if (this.k5h_1.p2o(HttpHeaders_getInstance().x2v_1)) {
                type = 'encoded';
              }
              var tmp_3;
              if (!(this.q5h_1 == null)) {
                tmp_3 = this.m5h_1.n('--> END ' + this.l5h_1.w2z_1 + ' (' + type + ' ' + toString_0(this.q5h_1) + '-byte body omitted)');
              } else {
                tmp_3 = this.m5h_1.n('--> END ' + this.l5h_1.w2z_1 + ' (' + type + ' body omitted)');
              }
              tmp_2.s5h_1 = tmp_3;
              this.m9_1 = 3;
              continue $sm;
            }

          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = readText(ARGUMENT, this.u5h_1);
            this.m5h_1.n(ARGUMENT_0);
            this.s5h_1 = this.m5h_1.n('--> END ' + this.l5h_1.w2z_1 + ' (' + toString_0(this.q5h_1) + '-byte body)');
            this.m9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logOutgoingContentCOROUTINE$5($this_createClientPlugin, content, method, headers, logLines, process, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d5i_1 = $this_createClientPlugin;
    this.e5i_1 = content;
    this.f5i_1 = method;
    this.g5i_1 = headers;
    this.h5i_1 = logLines;
    this.i5i_1 = process;
  }
  protoOf($invoke$logOutgoingContentCOROUTINE$5).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 6;
            this.j5i_1 = this.e5i_1;
            var tmp_0 = this.j5i_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.l5i_1 = this.e5i_1.d35();
              this.m9_1 = 4;
              suspendResult = invoke$logRequestBody(this.d5i_1, this.e5i_1, toLong(this.l5i_1.length), this.g5i_1, this.f5i_1, this.h5i_1, ByteReadChannel(this.l5i_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.j5i_1;
              if (tmp_1 instanceof ContentWrapper) {
                this.m9_1 = 3;
                suspendResult = invoke$logOutgoingContent(this.d5i_1, this.e5i_1.m35(), this.f5i_1, this.g5i_1, this.h5i_1, this.i5i_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_2 = this.j5i_1;
                if (tmp_2 instanceof NoContent) {
                  var tmp_3 = this;
                  this.h5i_1.n('--> END ' + this.f5i_1.w2z_1);
                  tmp_3.k5i_1 = null;
                  this.m9_1 = 5;
                  continue $sm;
                } else {
                  var tmp_4 = this.j5i_1;
                  if (tmp_4 instanceof ProtocolUpgrade) {
                    var tmp_5 = this;
                    this.h5i_1.n('--> END ' + this.f5i_1.w2z_1);
                    tmp_5.k5i_1 = null;
                    this.m9_1 = 5;
                    continue $sm;
                  } else {
                    var tmp_6 = this.j5i_1;
                    if (tmp_6 instanceof ReadChannelContent) {
                      this.m5i_1 = split(this.e5i_1.g35(), this.d5i_1.c3q_1);
                      this.n5i_1 = this.m5i_1.dc();
                      this.o5i_1 = this.m5i_1.ec();
                      this.m9_1 = 2;
                      suspendResult = invoke$logRequestBody(this.d5i_1, this.e5i_1, this.e5i_1.c35(), this.g5i_1, this.f5i_1, this.h5i_1, this.o5i_1, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      var tmp_7 = this.j5i_1;
                      if (tmp_7 instanceof WriteChannelContent) {
                        this.p5i_1 = new ByteChannel();
                        launch(this.d5i_1.c3q_1, VOID, VOID, Logging$lambda$logOutgoingContent$slambda_0(this.e5i_1, this.p5i_1, null));
                        this.q5i_1 = split(this.p5i_1, this.d5i_1.c3q_1);
                        this.r5i_1 = this.q5i_1.dc();
                        this.s5i_1 = this.q5i_1.ec();
                        this.m9_1 = 1;
                        suspendResult = invoke$logRequestBody(this.d5i_1, this.e5i_1, this.e5i_1.c35(), this.g5i_1, this.f5i_1, this.h5i_1, this.s5i_1, this);
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
            this.k5i_1 = new LoggedContent(this.e5i_1, this.r5i_1);
            this.m9_1 = 5;
            continue $sm;
          case 2:
            this.k5i_1 = new LoggedContent(this.e5i_1, this.n5i_1);
            this.m9_1 = 5;
            continue $sm;
          case 3:
            this.k5i_1 = suspendResult;
            this.m9_1 = 5;
            continue $sm;
          case 4:
            this.k5i_1 = null;
            this.m9_1 = 5;
            continue $sm;
          case 5:
            return this.k5i_1;
          case 6:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 6) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logRequestOkHttpFormatCOROUTINE$6(sanitizedHeaders, level, $this_createClientPlugin, request, logLines, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b5j_1 = sanitizedHeaders;
    this.c5j_1 = level;
    this.d5j_1 = $this_createClientPlugin;
    this.e5j_1 = request;
    this.f5j_1 = logLines;
  }
  protoOf($invoke$logRequestOkHttpFormatCOROUTINE$6).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            if (invoke$isNone(this.c5j_1))
              return null;
            this.g5j_1 = pathQuery(takeFrom(new URLBuilder(), this.e5j_1.u3h_1).j2v());
            this.h5j_1 = this.e5j_1.x3h_1;
            var tmp_0 = this;
            var this_0 = new HeadersBuilder();
            var tmp_1;
            var tmp_2;
            var tmp_3;
            var tmp_4 = this.h5j_1;
            if (tmp_4 instanceof OutgoingContent) {
              tmp_3 = !this.e5j_1.v3h_1.equals(Companion_getInstance().o2z_1);
            } else {
              tmp_3 = false;
            }

            if (tmp_3) {
              tmp_2 = !this.e5j_1.v3h_1.equals(Companion_getInstance().t2z_1);
            } else {
              tmp_2 = false;
            }

            if (tmp_2) {
              var tmp_5 = this.h5j_1;
              tmp_1 = !(tmp_5 instanceof EmptyContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              var tmp0_safe_receiver = this.h5j_1.a35();
              if (tmp0_safe_receiver == null)
                null;
              else {
                appendIfNameAbsent(this_0, HttpHeaders_getInstance().c2w_1, tmp0_safe_receiver.toString());
              }
              var tmp1_safe_receiver = this.h5j_1.c35();
              if (tmp1_safe_receiver == null)
                null;
              else {
                appendIfNameAbsent(this_0, HttpHeaders_getInstance().z2v_1, tmp1_safe_receiver.toString());
              }
            }

            appendAll(this_0, this.e5j_1.w3h_1);
            tmp_0.i5j_1 = this_0.j2v();
            var tmp_6 = this;
            var tmp0_safe_receiver_0 = this.i5j_1.af(HttpHeaders_getInstance().z2v_1);
            tmp_6.j5j_1 = tmp0_safe_receiver_0 == null ? null : toLongOrNull(tmp0_safe_receiver_0);
            var tmp_7 = this;
            var tmp_8;
            if (this.e5j_1.v3h_1.equals(Companion_getInstance().o2z_1) || this.e5j_1.v3h_1.equals(Companion_getInstance().t2z_1) || ((invoke$isHeaders(this.c5j_1) || invoke$isBody(this.c5j_1)) && !(this.j5j_1 == null)) || (invoke$isHeaders(this.c5j_1) && this.j5j_1 == null) || this.i5j_1.p2o(HttpHeaders_getInstance().x2v_1)) {
              tmp_8 = '--> ' + this.e5j_1.v3h_1.w2z_1 + ' ' + this.g5j_1;
            } else {
              if (invoke$isInfo(this.c5j_1) && !(this.j5j_1 == null)) {
                tmp_8 = '--> ' + this.e5j_1.v3h_1.w2z_1 + ' ' + this.g5j_1 + ' (' + toString_0(this.j5j_1) + '-byte body)';
              } else {
                var tmp_9;
                var tmp_10 = this.h5j_1;
                if (tmp_10 instanceof WriteChannelContent) {
                  tmp_9 = true;
                } else {
                  var tmp_11 = this.h5j_1;
                  tmp_9 = tmp_11 instanceof ReadChannelContent;
                }
                if (tmp_9) {
                  tmp_8 = '--> ' + this.e5j_1.v3h_1.w2z_1 + ' ' + this.g5j_1 + ' (unknown-byte body)';
                } else {
                  var size = computeRequestBodySize(this.e5j_1.x3h_1);
                  tmp_8 = '--> ' + this.e5j_1.v3h_1.w2z_1 + ' ' + this.g5j_1 + ' (' + size.toString() + '-byte body)';
                }
              }
            }

            tmp_7.k5j_1 = tmp_8;
            this.f5j_1.n(this.k5j_1);
            if (!invoke$isHeaders(this.c5j_1) && !invoke$isBody(this.c5j_1)) {
              return null;
            }

            var _iterator__ex2g4s = this.i5j_1.o2o().p();
            while (_iterator__ex2g4s.q()) {
              var _destruct__k2r9zo = _iterator__ex2g4s.r();
              var name = _destruct__k2r9zo.y();
              var values = _destruct__k2r9zo.z();
              var tmp0 = this.b5j_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                var _iterator__ex2g4s_0 = tmp0.p();
                while (_iterator__ex2g4s_0.q()) {
                  var element = _iterator__ex2g4s_0.r();
                  if (element.b5l_1(name)) {
                    tmp$ret$0 = element;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = null;
              }
               while (false);
              if (tmp$ret$0 == null) {
                this.f5j_1.n(name + ': ' + joinToString(values, ', '));
              } else {
                this.f5j_1.n(name + ': \u2588\u2588');
              }
            }

            if (!invoke$isBody(this.c5j_1) || this.e5j_1.v3h_1.equals(Companion_getInstance().o2z_1) || this.e5j_1.v3h_1.equals(Companion_getInstance().t2z_1)) {
              this.f5j_1.n('--> END ' + this.e5j_1.v3h_1.w2z_1);
              return null;
            }

            this.f5j_1.n('');
            var tmp_12 = this.h5j_1;
            if (!(tmp_12 instanceof OutgoingContent)) {
              this.f5j_1.n('--> END ' + this.e5j_1.v3h_1.w2z_1);
              return null;
            }

            if (this.e5j_1.w3h_1.af(HttpHeaders_getInstance().x2v_1) === 'gzip') {
              this.m9_1 = 2;
              var tmp_13 = this.e5j_1.v3h_1;
              suspendResult = invoke$logOutgoingContent(this.d5j_1, this.h5j_1, tmp_13, this.i5j_1, this.f5j_1, Logging$lambda$logRequestOkHttpFormat$lambda, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 1;
              suspendResult = invoke$logOutgoingContent(this.d5j_1, this.h5j_1, this.e5j_1.v3h_1, this.i5j_1, this.f5j_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.l5j_1 = suspendResult;
            this.m9_1 = 3;
            continue $sm;
          case 2:
            this.l5j_1 = suspendResult;
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var newContent = this.l5j_1;
            return newContent;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logResponseBodyCOROUTINE$7($this_createClientPlugin, response, body, logLines, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u5j_1 = $this_createClientPlugin;
    this.v5j_1 = response;
    this.w5j_1 = body;
    this.x5j_1 = logLines;
  }
  protoOf($invoke$logResponseBodyCOROUTINE$7).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.x5j_1.n('');
            this.m9_1 = 1;
            suspendResult = invoke$detectIfBinary(this.u5j_1, this.w5j_1, contentLength(this.v5j_1), contentType(this.v5j_1), this.v5j_1.n2z(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y5j_1 = suspendResult;
            this.z5j_1 = this.y5j_1.dc();
            this.a5k_1 = this.y5j_1.ec();
            this.b5k_1 = this.y5j_1.dp();
            this.c5k_1 = this.v5j_1.n3l().w2p_1.a3(this.v5j_1.m3l().w2p_1);
            if (equals(this.a5k_1, new Long(0, 0))) {
              this.x5j_1.n('<-- END HTTP (' + this.c5k_1.toString() + 'ms, ' + toString_0(this.a5k_1) + '-byte body)');
              return Unit_instance;
            }

            if (!this.z5j_1) {
              this.e5k_1 = contentType(this.v5j_1);
              var tmp_0 = this;
              var tmp_1;
              if (!(this.e5k_1 == null)) {
                var tmp0_elvis_lhs = charset(this.e5k_1);
                tmp_1 = tmp0_elvis_lhs == null ? Charsets_getInstance().d1x_1 : tmp0_elvis_lhs;
              } else {
                tmp_1 = Charsets_getInstance().d1x_1;
              }
              tmp_0.f5k_1 = tmp_1;
              this.m9_1 = 2;
              suspendResult = readRemaining(this.b5k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this;
              var type = 'binary';
              if (this.v5j_1.n2z().p2o(HttpHeaders_getInstance().x2v_1)) {
                type = 'encoded';
              }
              var tmp_3;
              if (!(this.a5k_1 == null)) {
                tmp_3 = this.x5j_1.n('<-- END HTTP (' + this.c5k_1.toString() + 'ms, ' + type + ' ' + toString_0(this.a5k_1) + '-byte body omitted)');
              } else {
                tmp_3 = this.x5j_1.n('<-- END HTTP (' + this.c5k_1.toString() + 'ms, ' + type + ' body omitted)');
              }
              tmp_2.d5k_1 = tmp_3;
              this.m9_1 = 3;
              continue $sm;
            }

          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = readText(ARGUMENT, this.f5k_1);
            this.x5j_1.n(ARGUMENT_0);
            this.d5k_1 = this.x5j_1.n('<-- END HTTP (' + this.c5k_1.toString() + 'ms, ' + toString_0(this.a5k_1) + '-byte body)');
            this.m9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logResponseOkHttpFormatCOROUTINE$8(sanitizedHeaders, level, $this_createClientPlugin, response, logLines, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o5k_1 = sanitizedHeaders;
    this.p5k_1 = level;
    this.q5k_1 = $this_createClientPlugin;
    this.r5k_1 = response;
    this.s5k_1 = logLines;
  }
  protoOf($invoke$logResponseOkHttpFormatCOROUTINE$8).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            if (invoke$isNone(this.p5k_1))
              return this.r5k_1;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.r5k_1.n2z().af(HttpHeaders_getInstance().z2v_1);
            tmp_0.t5k_1 = tmp0_safe_receiver == null ? null : toLongOrNull(tmp0_safe_receiver);
            this.u5k_1 = get_request(this.r5k_1);
            this.v5k_1 = this.r5k_1.n3l().w2p_1.a3(this.r5k_1.m3l().w2p_1);
            this.w5k_1 = this.r5k_1.n2z().af(HttpHeaders_getInstance().g2y_1) === 'chunked' && (invoke$isInfo(this.p5k_1) || invoke$isHeaders(this.p5k_1)) ? '<-- ' + this.r5k_1.b35().toString() + ' ' + pathQuery(this.u5k_1.g3k()) + ' (' + this.v5k_1.toString() + 'ms, unknown-byte body)' : invoke$isInfo(this.p5k_1) && !(this.t5k_1 == null) ? '<-- ' + this.r5k_1.b35().toString() + ' ' + pathQuery(this.u5k_1.g3k()) + ' (' + this.v5k_1.toString() + 'ms, ' + toString_0(this.t5k_1) + '-byte body)' : invoke$isBody(this.p5k_1) || (invoke$isInfo(this.p5k_1) && this.t5k_1 == null) || (invoke$isHeaders(this.p5k_1) && !(this.t5k_1 == null)) || this.r5k_1.n2z().af(HttpHeaders_getInstance().x2v_1) === 'gzip' ? '<-- ' + this.r5k_1.b35().toString() + ' ' + pathQuery(this.u5k_1.g3k()) + ' (' + this.v5k_1.toString() + 'ms)' : '<-- ' + this.r5k_1.b35().toString() + ' ' + pathQuery(this.u5k_1.g3k()) + ' (' + this.v5k_1.toString() + 'ms, unknown-byte body)';
            this.s5k_1.n(this.w5k_1);
            if (!invoke$isHeaders(this.p5k_1) && !invoke$isBody(this.p5k_1)) {
              return this.r5k_1;
            }

            var _iterator__ex2g4s = this.r5k_1.n2z().o2o().p();
            while (_iterator__ex2g4s.q()) {
              var _destruct__k2r9zo = _iterator__ex2g4s.r();
              var name = _destruct__k2r9zo.y();
              var values = _destruct__k2r9zo.z();
              var tmp0 = this.o5k_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                var _iterator__ex2g4s_0 = tmp0.p();
                while (_iterator__ex2g4s_0.q()) {
                  var element = _iterator__ex2g4s_0.r();
                  if (element.b5l_1(name)) {
                    tmp$ret$0 = element;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = null;
              }
               while (false);
              if (tmp$ret$0 == null) {
                this.s5k_1.n(name + ': ' + joinToString(values, ', '));
              } else {
                this.s5k_1.n(name + ': \u2588\u2588');
              }
            }

            if (!invoke$isBody(this.p5k_1)) {
              this.s5k_1.n('<-- END HTTP');
              return this.r5k_1;
            }

            if (!(this.t5k_1 == null) && equals(this.t5k_1, new Long(0, 0))) {
              this.s5k_1.n('<-- END HTTP (' + this.v5k_1.toString() + 'ms, ' + toString_0(this.t5k_1) + '-byte body)');
              return this.r5k_1;
            }

            if (equals(contentType(this.r5k_1), Text_getInstance().x2u_1)) {
              this.s5k_1.n('<-- END HTTP (streaming)');
              return this.r5k_1;
            }

            if (get_isSaved(this.r5k_1)) {
              this.m9_1 = 3;
              suspendResult = invoke$logResponseBody(this.q5k_1, this.r5k_1, this.r5k_1.e3k(), this.s5k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.m9_1 = 1;
              continue $sm;
            }

          case 1:
            this.x5k_1 = split(this.r5k_1.e3k(), this.r5k_1);
            this.y5k_1 = this.x5k_1.dc();
            this.z5k_1 = this.x5k_1.ec();
            this.m9_1 = 2;
            suspendResult = invoke$logResponseBody(this.q5k_1, this.r5k_1, this.z5k_1, this.s5k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = wrapWithContent(this.r5k_1.c3l(), this.y5k_1);
            return call.u3g();
          case 3:
            return this.r5k_1;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
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
    var _iterator__ex2g4s = sortedHeaders.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var key = element.y();
      // Inline function 'kotlin.collections.component2' call
      var values = element.z();
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = sanitizedHeaders.p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          if (element_0.b5l_1(key)) {
            tmp$ret$5 = element_0;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      var tmp0_safe_receiver = tmp$ret$5;
      var placeholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a5l_1;
      logHeader(_this__u8e3s4, key, placeholder == null ? joinToString(values, '; ') : placeholder);
    }
  }
  function logHeader(_this__u8e3s4, key, value) {
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = '-> ' + key + ': ' + value;
    // Inline function 'kotlin.text.appendLine' call
    _this__u8e3s4.o(value_0).y8(_Char___init__impl__6a9atx(10));
  }
  function logResponseHeader(log, response, level, sanitizedHeaders) {
    // Inline function 'kotlin.with' call
    if (level.j5d_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value = 'RESPONSE: ' + response.b35().toString();
      // Inline function 'kotlin.text.appendLine' call
      log.x8(value).y8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'METHOD: ' + response.c3l().d3k().z3k().toString();
      // Inline function 'kotlin.text.appendLine' call
      log.x8(value_0).y8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = 'FROM: ' + response.c3l().d3k().g3k().toString();
      // Inline function 'kotlin.text.appendLine' call
      log.x8(value_1).y8(_Char___init__impl__6a9atx(10));
    }
    if (level.k5d_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value_2 = 'COMMON HEADERS';
      // Inline function 'kotlin.text.appendLine' call
      log.x8(value_2).y8(_Char___init__impl__6a9atx(10));
      logHeaders(log, response.n2z().o2o(), sanitizedHeaders);
    }
  }
  function logResponseBody(log, contentType, content, $completion) {
    var tmp = new $logResponseBodyCOROUTINE$10(log, contentType, content, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.o5r_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).of = function (a, b) {
    return this.o5r_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.of(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).s3 = function () {
    return this.o5r_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.s3(), other.s3());
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
    return hashCode(this.s3());
  };
  function logHeaders$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.y();
    var tmp$ret$1 = b.y();
    return compareValues(tmp, tmp$ret$1);
  }
  function $logResponseBodyCOROUTINE$10(log, contentType, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c5r_1 = log;
    this.d5r_1 = contentType;
    this.e5r_1 = content;
  }
  protoOf($logResponseBodyCOROUTINE$10).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.f5r_1 = this.c5r_1;
            this.g5r_1 = this.f5r_1;
            var tmp_1 = this;
            tmp_1.h5r_1 = this.g5r_1;
            this.i5r_1 = this.h5r_1;
            var tmp0 = this.i5r_1;
            var value = 'BODY Content-Type: ' + toString_0(this.d5r_1);
            tmp0.x8(value).y8(_Char___init__impl__6a9atx(10));
            var tmp2 = this.i5r_1;
            var value_0 = 'BODY START';
            tmp2.x8(value_0).y8(_Char___init__impl__6a9atx(10));
            var tmp_2 = this;
            tmp_2.j5r_1 = this.e5r_1;
            var tmp_3 = this;
            var tmp0_safe_receiver = this.d5r_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
            tmp_3.k5r_1 = tmp1_elvis_lhs == null ? Charsets_getInstance().d1x_1 : tmp1_elvis_lhs;
            this.l5r_1 = this.j5r_1;
            this.m5r_1 = this.k5r_1;
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = readRemaining(this.l5r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.n5r_1 = readText(ARGUMENT, this.m5r_1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var cause = this.p9_1;
              var tmp_5 = this;
              tmp_5.n5r_1 = null;
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            var tmp2_elvis_lhs = this.n5r_1;
            var message = tmp2_elvis_lhs == null ? '[response body omitted]' : tmp2_elvis_lhs;
            this.i5r_1.x8(message).y8(_Char___init__impl__6a9atx(10));
            this.i5r_1.x8('BODY END');
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function observe(_this__u8e3s4, log, $completion) {
    var tmp = new $observeCOROUTINE$11(_this__u8e3s4, log, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function toReadChannel(_this__u8e3s4) {
    var tmp = GlobalScope_instance;
    var tmp_0 = Dispatchers_getInstance().e13_1;
    return writer(tmp, tmp_0, VOID, toReadChannel$slambda_0(_this__u8e3s4, null)).o1u_1;
  }
  function toReadChannel$slambda($this_toReadChannel, resultContinuation) {
    this.l5s_1 = $this_toReadChannel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(toReadChannel$slambda).g3a = function ($this$writer, $completion) {
    var tmp = this.h3a($this$writer, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(toReadChannel$slambda).ua = function (p1, $completion) {
    return this.g3a(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(toReadChannel$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.l5s_1.i35(this.m5s_1.q1u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(toReadChannel$slambda).h3a = function ($this$writer, completion) {
    var i = new toReadChannel$slambda(this.l5s_1, completion);
    i.m5s_1 = $this$writer;
    return i;
  };
  function toReadChannel$slambda_0($this_toReadChannel, resultContinuation) {
    var i = new toReadChannel$slambda($this_toReadChannel, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.g3a($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $observeCOROUTINE$11(_this__u8e3s4, log, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x5r_1 = _this__u8e3s4;
    this.y5r_1 = log;
  }
  protoOf($observeCOROUTINE$11).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 6;
            this.z5r_1 = this.x5r_1;
            var tmp_0 = this.z5r_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.m9_1 = 3;
              suspendResult = writeFully(this.y5r_1, this.x5r_1.d35(), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.z5r_1;
              if (tmp_1 instanceof ReadChannelContent) {
                var tmp_2 = this;
                var responseChannel = new ByteChannel();
                var content = this.x5r_1.g35();
                copyToBoth(content, this.y5r_1, responseChannel);
                tmp_2.a5s_1 = new LoggedContent(this.x5r_1, responseChannel);
                this.m9_1 = 5;
                continue $sm;
              } else {
                var tmp_3 = this.z5r_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  var tmp_4 = this;
                  var responseChannel_0 = new ByteChannel();
                  var content_0 = toReadChannel(this.x5r_1);
                  copyToBoth(content_0, this.y5r_1, responseChannel_0);
                  tmp_4.a5s_1 = new LoggedContent(this.x5r_1, responseChannel_0);
                  this.m9_1 = 5;
                  continue $sm;
                } else {
                  var tmp_5 = this.z5r_1;
                  if (tmp_5 instanceof ContentWrapper) {
                    this.b5s_1 = this.x5r_1;
                    this.m9_1 = 2;
                    suspendResult = observe(this.x5r_1.m35(), this.y5r_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    var tmp_6;
                    var tmp_7 = this.z5r_1;
                    if (tmp_7 instanceof NoContent) {
                      tmp_6 = true;
                    } else {
                      var tmp_8 = this.z5r_1;
                      tmp_6 = tmp_8 instanceof ProtocolUpgrade;
                    }
                    if (tmp_6) {
                      this.m9_1 = 1;
                      suspendResult = this.y5r_1.r1m(this);
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
            this.a5s_1 = this.x5r_1;
            this.m9_1 = 5;
            continue $sm;
          case 2:
            this.c5s_1 = suspendResult;
            this.a5s_1 = this.b5s_1.n35(this.c5s_1);
            this.m9_1 = 5;
            continue $sm;
          case 3:
            this.m9_1 = 4;
            suspendResult = this.y5r_1.r1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.a5s_1 = this.x5r_1;
            this.m9_1 = 5;
            continue $sm;
          case 5:
            return this.a5s_1;
          case 6:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 6) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
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
  protoOf(MDCContextElement).y = function () {
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
  protoOf(MDCContextElement).la = get;
  protoOf(MDCContextElement).hj = fold;
  protoOf(MDCContextElement).gj = minusKey;
  protoOf(MDCContextElement).ij = plus;
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
