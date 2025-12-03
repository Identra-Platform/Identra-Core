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
  var CoroutineImpl = kotlin_kotlin.$_$.pa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z9;
  var THROW_CCE = kotlin_kotlin.$_$.tg;
  var isCharSequence = kotlin_kotlin.$_$.wb;
  var trim = kotlin_kotlin.$_$.wf;
  var toString = kotlin_kotlin.$_$.tc;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var protoOf = kotlin_kotlin.$_$.pc;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.nb;
  var charSequenceLength = kotlin_kotlin.$_$.bb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var Job = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  var VOID = kotlin_kotlin.$_$.j;
  var Enum = kotlin_kotlin.$_$.ig;
  var ReadChannelContent = kotlin_io_ktor_ktor_http.$_$.r;
  var initMetadataForCompanion = kotlin_kotlin.$_$.mb;
  var println = kotlin_kotlin.$_$.sa;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var Long = kotlin_kotlin.$_$.ng;
  var ProtocolUpgrade = kotlin_io_ktor_ktor_http.$_$.q;
  var NoContent = kotlin_io_ktor_ktor_http.$_$.p;
  var ContentWrapper = kotlin_io_ktor_ktor_http.$_$.o;
  var toLong = kotlin_kotlin.$_$.rc;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.n;
  var PipelineContext = kotlin_io_ktor_ktor_utils.$_$.g;
  var initMetadataForLambda = kotlin_kotlin.$_$.qb;
  var Phases_getInstance = kotlin_io_ktor_ktor_client_core.$_$.b;
  var isSuspendFunction = kotlin_kotlin.$_$.ec;
  var initMetadataForObject = kotlin_kotlin.$_$.rb;
  var HttpResponse = kotlin_io_ktor_ktor_client_core.$_$.v;
  var PipelinePhase = kotlin_io_ktor_ktor_utils.$_$.h;
  var Phases_getInstance_0 = kotlin_io_ktor_ktor_client_core.$_$.c;
  var HttpResponseContainer = kotlin_io_ktor_ktor_client_core.$_$.u;
  var Phases_getInstance_1 = kotlin_io_ktor_ktor_client_core.$_$.d;
  var get_ResponseObserver = kotlin_io_ktor_ktor_client_core.$_$.j;
  var Collection = kotlin_kotlin.$_$.x5;
  var isInterface = kotlin_kotlin.$_$.ac;
  var toString_0 = kotlin_kotlin.$_$.yh;
  var charset = kotlin_io_ktor_ktor_http.$_$.g1;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var ByteChannel = kotlin_io_ktor_ktor_io.$_$.m1;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var Url = kotlin_io_ktor_ktor_http.$_$.c1;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.n;
  var joinToString = kotlin_kotlin.$_$.c8;
  var equals = kotlin_kotlin.$_$.fb;
  var HttpClientCall = kotlin_io_ktor_ktor_client_core.$_$.f;
  var contentType = kotlin_io_ktor_ktor_http.$_$.k1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var writeFully = kotlin_io_ktor_ktor_io.$_$.l;
  var copyTo = kotlin_io_ktor_ktor_io.$_$.b;
  var GZipEncoder_getInstance = kotlin_io_ktor_ktor_utils.$_$.a;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.f;
  var readText = kotlin_io_ktor_ktor_io.$_$.c1;
  var Triple = kotlin_kotlin.$_$.vg;
  var readAvailable = kotlin_io_ktor_ktor_io.$_$.d;
  var Buffer = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.f;
  var writeFully_0 = kotlin_io_ktor_ktor_io.$_$.g1;
  var decode = kotlin_io_ktor_ktor_io.$_$.s;
  var charSequenceGet = kotlin_kotlin.$_$.ab;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.th;
  var split = kotlin_io_ktor_ktor_utils.$_$.d1;
  var WriteChannelContent = kotlin_io_ktor_ktor_http.$_$.s;
  var ByteReadChannel = kotlin_io_ktor_ktor_io.$_$.n1;
  var URLBuilder = kotlin_io_ktor_ktor_http.$_$.a1;
  var takeFrom = kotlin_io_ktor_ktor_http.$_$.q1;
  var HeadersBuilder = kotlin_io_ktor_ktor_http.$_$.w;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var EmptyContent = kotlin_io_ktor_ktor_client_core.$_$.y;
  var appendIfNameAbsent = kotlin_io_ktor_ktor_utils.$_$.x;
  var appendAll = kotlin_io_ktor_ktor_utils.$_$.w;
  var toLongOrNull = kotlin_kotlin.$_$.kf;
  var contentLength = kotlin_io_ktor_ktor_http.$_$.h1;
  var get_request = kotlin_io_ktor_ktor_client_core.$_$.x;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var get_isSaved = kotlin_io_ktor_ktor_client_core.$_$.m;
  var wrapWithContent = kotlin_io_ktor_ktor_client_core.$_$.k;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.hh;
  var createKType = kotlin_kotlin.$_$.d;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.j;
  var AttributeKey = kotlin_io_ktor_ktor_utils.$_$.l;
  var Unit = kotlin_kotlin.$_$.eh;
  var createClientPlugin = kotlin_io_ktor_ktor_client_core.$_$.i;
  var toList = kotlin_kotlin.$_$.l9;
  var sortedWith = kotlin_kotlin.$_$.e9;
  var FunctionAdapter = kotlin_kotlin.$_$.ta;
  var Comparator = kotlin_kotlin.$_$.fg;
  var hashCode = kotlin_kotlin.$_$.kb;
  var compareValues = kotlin_kotlin.$_$.x9;
  var writer = kotlin_io_ktor_ktor_io.$_$.x1;
  var WriterScope = kotlin_io_ktor_ktor_io.$_$.p1;
  var copyToBoth = kotlin_io_ktor_ktor_utils.$_$.y;
  var get = kotlin_kotlin.$_$.la;
  var fold = kotlin_kotlin.$_$.ka;
  var minusKey = kotlin_kotlin.$_$.ma;
  var plus = kotlin_kotlin.$_$.oa;
  var Element = kotlin_kotlin.$_$.na;
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
    this.r59_1 = _this__u8e3s4;
    this.s59_1 = message;
  }
  protoOf($logResponseExceptionCOROUTINE$0).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.r59_1.w59_1.hz(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = this.s59_1;
            this.r59_1.t59_1.a5a(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())));
            return Unit_instance;
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
  function $logResponseBodyCOROUTINE$1(_this__u8e3s4, message, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j5a_1 = _this__u8e3s4;
    this.k5a_1 = message;
  }
  protoOf($logResponseBodyCOROUTINE$1).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.j5a_1.x59_1.hz(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.j5a_1.v59_1.w8(this.k5a_1);
            return Unit_instance;
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
  function $closeResponseLogCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t5a_1 = _this__u8e3s4;
  }
  protoOf($closeResponseLogCOROUTINE$2).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            if (!this.t5a_1.z59_1.atomicfu$compareAndSet(false, true))
              return Unit_instance;
            this.l9_1 = 1;
            suspendResult = this.t5a_1.w59_1.hz(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var message = toString(trim(this.t5a_1.v59_1));
            if (charSequenceLength(message) > 0) {
              this.t5a_1.t59_1.a5a(message);
            }

            return Unit_instance;
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
  function HttpClientCallLogger(logger) {
    this.t59_1 = logger;
    this.u59_1 = StringBuilder_init_$Create$();
    this.v59_1 = StringBuilder_init_$Create$();
    this.w59_1 = Job();
    this.x59_1 = Job();
    this.y59_1 = atomic$boolean$1(false);
    this.z59_1 = atomic$boolean$1(false);
  }
  protoOf(HttpClientCallLogger).u5a = function (message) {
    var tmp1 = this.u59_1;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.appendLine' call
    var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
    // Inline function 'kotlin.text.appendLine' call
    tmp1.w8(value).x8(_Char___init__impl__6a9atx(10));
  };
  protoOf(HttpClientCallLogger).v5a = function (message) {
    var tmp1 = this.v59_1;
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.text.appendLine' call
    var value = toString(trim(isCharSequence(message) ? message : THROW_CCE()));
    // Inline function 'kotlin.text.appendLine' call
    tmp1.w8(value).x8(_Char___init__impl__6a9atx(10));
    this.x59_1.gz();
  };
  protoOf(HttpClientCallLogger).w5a = function (message, $completion) {
    var tmp = new $logResponseExceptionCOROUTINE$0(this, message, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(HttpClientCallLogger).x5a = function (message, $completion) {
    var tmp = new $logResponseBodyCOROUTINE$1(this, message, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(HttpClientCallLogger).y5a = function () {
    if (!this.y59_1.atomicfu$compareAndSet(false, true))
      return Unit_instance;
    try {
      var message = toString(trim(this.u59_1));
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(message) > 0) {
        this.t59_1.a5a(message);
      }
    }finally {
      this.w59_1.gz();
    }
  };
  protoOf(HttpClientCallLogger).z5a = function ($completion) {
    var tmp = new $closeResponseLogCOROUTINE$2(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
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
    this.c5b_1 = info;
    this.d5b_1 = headers;
    this.e5b_1 = body;
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
    this.g5b_1 = originalContent;
    this.h5b_1 = channel;
    this.i5b_1 = this.g5b_1.n34();
    this.j5b_1 = this.g5b_1.p34();
    this.k5b_1 = this.g5b_1.o34();
    this.l5b_1 = this.g5b_1.a2z();
  }
  protoOf(LoggedContent).n34 = function () {
    return this.i5b_1;
  };
  protoOf(LoggedContent).p34 = function () {
    return this.j5b_1;
  };
  protoOf(LoggedContent).o34 = function () {
    return this.k5b_1;
  };
  protoOf(LoggedContent).a2z = function () {
    return this.l5b_1;
  };
  protoOf(LoggedContent).t34 = function () {
    return this.h5b_1;
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
  protoOf(SimpleLogger).a5a = function (message) {
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
    tmp.m5b_1 = ArrayList_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.n5b_1 = ArrayList_init_$Create$();
    this.o5b_1 = null;
    this.p5b_1 = LoggingFormat_Default_getInstance();
    this.q5b_1 = LogLevel_HEADERS_getInstance();
  }
  protoOf(LoggingConfig).r5b = function (value) {
    this.o5b_1 = value;
  };
  protoOf(LoggingConfig).s5b = function () {
    var tmp0_elvis_lhs = this.o5b_1;
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
    var this_1 = _this__u8e3s4.a34();
    if (charSequenceLength(this_1) === 0) {
      this_0.w8('/');
    } else {
      this_0.w8(_this__u8e3s4.a34());
    }
    // Inline function 'kotlin.text.isEmpty' call
    var this_2 = _this__u8e3s4.d34();
    if (!(charSequenceLength(this_2) === 0)) {
      this_0.w8('?');
      this_0.w8(_this__u8e3s4.d34());
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
      tmp = toLong(content.q34().length);
    } else {
      if (content instanceof ContentWrapper) {
        tmp = computeRequestBodySize(content.z34());
      } else {
        if (content instanceof NoContent) {
          tmp = new Long(0, 0);
        } else {
          if (content instanceof ProtocolUpgrade) {
            tmp = new Long(0, 0);
          } else {
            var message = 'Unable to calculate the size for type ' + getKClassFromExpression(content).fc();
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function Context(context) {
    this.t5b_1 = context;
  }
  protoOf(Context).u5b = function (content, $completion) {
    return this.t5b_1.q2q(content, $completion);
  };
  protoOf(Context).v5b = function ($completion) {
    return this.t5b_1.r2q($completion);
  };
  function SendHook$install$slambda($handler, resultContinuation) {
    this.e5c_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SendHook$install$slambda).a3g = function ($this$intercept, it, $completion) {
    var tmp = this.b3g($this$intercept, it, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(SendHook$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.a3g(tmp, !(p2 == null) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(SendHook$install$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.e5c_1(new Context(this.f5c_1), this.f5c_1.m2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(SendHook$install$slambda).b3g = function ($this$intercept, it, completion) {
    var i = new SendHook$install$slambda(this.e5c_1, completion);
    i.f5c_1 = $this$intercept;
    i.g5c_1 = it;
    return i;
  };
  function SendHook$install$slambda_0($handler, resultContinuation) {
    var i = new SendHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.a3g($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function SendHook() {
  }
  protoOf(SendHook).h5c = function (client, handler) {
    var tmp = Phases_getInstance().r3h_1;
    client.i3f_1.q2r(tmp, SendHook$install$slambda_0(handler, null));
  };
  protoOf(SendHook).v3o = function (client, handler) {
    return this.h5c(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var SendHook_instance;
  function SendHook_getInstance() {
    return SendHook_instance;
  }
  function Context_0(context) {
    this.i5c_1 = context;
  }
  protoOf(Context_0).a4b = function (response, $completion) {
    return this.i5c_1.q2q(response, $completion);
  };
  function ResponseAfterEncodingHook$install$slambda($handler, resultContinuation) {
    this.r5c_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ResponseAfterEncodingHook$install$slambda).i3p = function ($this$intercept, it, $completion) {
    var tmp = this.j3p($this$intercept, it, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(ResponseAfterEncodingHook$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.i3p(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ResponseAfterEncodingHook$install$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.r5c_1(new Context_0(this.s5c_1), this.s5c_1.p2q(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ResponseAfterEncodingHook$install$slambda).j3p = function ($this$intercept, it, completion) {
    var i = new ResponseAfterEncodingHook$install$slambda(this.r5c_1, completion);
    i.s5c_1 = $this$intercept;
    i.t5c_1 = it;
    return i;
  };
  function ResponseAfterEncodingHook$install$slambda_0($handler, resultContinuation) {
    var i = new ResponseAfterEncodingHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.i3p($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ResponseAfterEncodingHook() {
  }
  protoOf(ResponseAfterEncodingHook).u5c = function (client, handler) {
    var afterState = new PipelinePhase('AfterState');
    client.j3f_1.n2r(Phases_getInstance_0().m3p_1, afterState);
    client.j3f_1.q2r(afterState, ResponseAfterEncodingHook$install$slambda_0(handler, null));
  };
  protoOf(ResponseAfterEncodingHook).v3o = function (client, handler) {
    return this.u5c(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ResponseAfterEncodingHook_instance;
  function ResponseAfterEncodingHook_getInstance() {
    return ResponseAfterEncodingHook_instance;
  }
  function Context_1(context) {
    this.v5c_1 = context;
  }
  protoOf(Context_1).w5c = function ($completion) {
    return this.v5c_1.r2q($completion);
  };
  function ResponseHook$install$slambda($handler, resultContinuation) {
    this.f5d_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ResponseHook$install$slambda).i3p = function ($this$intercept, it, $completion) {
    var tmp = this.j3p($this$intercept, it, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(ResponseHook$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.i3p(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ResponseHook$install$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.f5d_1(new Context_1(this.g5d_1), this.g5d_1.p2q(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ResponseHook$install$slambda).j3p = function ($this$intercept, it, completion) {
    var i = new ResponseHook$install$slambda(this.f5d_1, completion);
    i.g5d_1 = $this$intercept;
    i.h5d_1 = it;
    return i;
  };
  function ResponseHook$install$slambda_0($handler, resultContinuation) {
    var i = new ResponseHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.i3p($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ResponseHook() {
  }
  protoOf(ResponseHook).i5d = function (client, handler) {
    var tmp = Phases_getInstance_0().m3p_1;
    client.j3f_1.q2r(tmp, ResponseHook$install$slambda_0(handler, null));
  };
  protoOf(ResponseHook).v3o = function (client, handler) {
    return this.i5d(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
  };
  var ResponseHook_instance;
  function ResponseHook_getInstance() {
    return ResponseHook_instance;
  }
  function Context_2(context) {
    this.j5d_1 = context;
  }
  protoOf(Context_2).k5d = function ($completion) {
    return this.j5d_1.r2q($completion);
  };
  function ReceiveHook$install$slambda($handler, resultContinuation) {
    this.t5d_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ReceiveHook$install$slambda).v3g = function ($this$intercept, it, $completion) {
    var tmp = this.w3g($this$intercept, it, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(ReceiveHook$install$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof PipelineContext ? p1 : THROW_CCE();
    return this.v3g(tmp, p2 instanceof HttpResponseContainer ? p2 : THROW_CCE(), $completion);
  };
  protoOf(ReceiveHook$install$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.t5d_1(new Context_2(this.u5d_1), this.u5d_1.m2r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(ReceiveHook$install$slambda).w3g = function ($this$intercept, it, completion) {
    var i = new ReceiveHook$install$slambda(this.t5d_1, completion);
    i.u5d_1 = $this$intercept;
    i.v5d_1 = it;
    return i;
  };
  function ReceiveHook$install$slambda_0($handler, resultContinuation) {
    var i = new ReceiveHook$install$slambda($handler, resultContinuation);
    var l = function ($this$intercept, it, $completion) {
      return i.v3g($this$intercept, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function ReceiveHook() {
  }
  protoOf(ReceiveHook).w5d = function (client, handler) {
    var tmp = Phases_getInstance_1().f3i_1;
    client.h3f_1.q2r(tmp, ReceiveHook$install$slambda_0(handler, null));
  };
  protoOf(ReceiveHook).v3o = function (client, handler) {
    return this.w5d(client, (!(handler == null) ? isSuspendFunction(handler, 2) : false) ? handler : THROW_CCE());
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
    var logger = $this$createClientPlugin.q3p_1.s5b();
    var level = $this$createClientPlugin.q3p_1.q5b_1;
    var filters = $this$createClientPlugin.q3p_1.m5b_1;
    var sanitizedHeaders = $this$createClientPlugin.q3p_1.n5b_1;
    var okHttpFormat = $this$createClientPlugin.q3p_1.p5b_1.equals(LoggingFormat_OkHttp_getInstance());
    var tmp = SendHook_instance;
    $this$createClientPlugin.t3p(tmp, Logging$lambda$slambda_0(okHttpFormat, logger, filters, sanitizedHeaders, level, $this$createClientPlugin, null));
    var tmp_0 = ResponseAfterEncodingHook_instance;
    $this$createClientPlugin.t3p(tmp_0, Logging$lambda$slambda_2(okHttpFormat, logger, sanitizedHeaders, level, $this$createClientPlugin, null));
    var tmp_1 = ResponseHook_instance;
    $this$createClientPlugin.t3p(tmp_1, Logging$lambda$slambda_4(okHttpFormat, level, sanitizedHeaders, null));
    var tmp_2 = ReceiveHook_instance;
    $this$createClientPlugin.t3p(tmp_2, Logging$lambda$slambda_6(okHttpFormat, level, null));
    if (okHttpFormat)
      return Unit_instance;
    if (!level.e5b_1)
      return Unit_instance;
    var observer = Logging$lambda$slambda_8(level, null);
    var tmp_3 = get_ResponseObserver();
    var tmp_4 = get_ResponseObserver();
    tmp_3.n3i(tmp_4.m3i(Logging$lambda$lambda(observer)), $this$createClientPlugin.p3p_1);
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
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function invoke$logRequestBody($this_createClientPlugin, content, contentLength, headers, method, logLines, body, $completion) {
    var tmp = new $invoke$logRequestBodyCOROUTINE$4($this_createClientPlugin, content, contentLength, headers, method, logLines, body, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
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
    tmp_0.n9_1 = Unit_instance;
    tmp_0.o9_1 = null;
    return tmp_0.da();
  }
  function invoke$logRequestOkHttpFormat(sanitizedHeaders, level, $this_createClientPlugin, request, logLines, $completion) {
    var tmp = new $invoke$logRequestOkHttpFormatCOROUTINE$6(sanitizedHeaders, level, $this_createClientPlugin, request, logLines, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function invoke$logResponseBody($this_createClientPlugin, response, body, logLines, $completion) {
    var tmp = new $invoke$logResponseBodyCOROUTINE$7($this_createClientPlugin, response, body, logLines, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function invoke$logResponseOkHttpFormat(sanitizedHeaders, level, $this_createClientPlugin, response, logLines, $completion) {
    var tmp = new $invoke$logResponseOkHttpFormatCOROUTINE$8(sanitizedHeaders, level, $this_createClientPlugin, response, logLines, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function invoke$logRequestBody_0(content, logger, $completion) {
    var requestLog = StringBuilder_init_$Create$();
    // Inline function 'kotlin.text.appendLine' call
    var value = 'BODY Content-Type: ' + toString_0(content.n34());
    // Inline function 'kotlin.text.appendLine' call
    requestLog.w8(value).x8(_Char___init__impl__6a9atx(10));
    var tmp0_safe_receiver = content.n34();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
    var charset_0 = tmp1_elvis_lhs == null ? Charsets_getInstance().r1w_1 : tmp1_elvis_lhs;
    var channel = new ByteChannel();
    var tmp = GlobalScope_instance;
    var tmp_0 = Dispatchers_getInstance().w12_1.ej(MDCContext());
    launch(tmp, tmp_0, VOID, Logging$lambda$logRequestBody$slambda_0(channel, charset_0, requestLog, logger, null));
    return observe(content, channel, $completion);
  }
  function invoke$logRequestException(level, logger, context, cause) {
    if (level.c5b_1) {
      logger.a5a('REQUEST ' + Url(context.h3h_1).toString() + ' failed with exception: ' + cause.toString());
    }
  }
  function invoke$logRequest(logger, level, sanitizedHeaders, request, $completion) {
    var tmp = request.k3h_1;
    var content = tmp instanceof OutgoingContent ? tmp : THROW_CCE();
    var callLogger = new HttpClientCallLogger(logger);
    request.m3h_1.x2j(get_ClientCallLogger(), callLogger);
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    if (level.c5b_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value = 'REQUEST: ' + Url(request.h3h_1).toString();
      // Inline function 'kotlin.text.appendLine' call
      this_0.w8(value).x8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'METHOD: ' + request.i3h_1.toString();
      // Inline function 'kotlin.text.appendLine' call
      this_0.w8(value_0).x8(_Char___init__impl__6a9atx(10));
    }
    if (level.d5b_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = 'COMMON HEADERS';
      // Inline function 'kotlin.text.appendLine' call
      this_0.w8(value_1).x8(_Char___init__impl__6a9atx(10));
      logHeaders(this_0, request.j3h_1.b2o(), sanitizedHeaders);
      // Inline function 'kotlin.text.appendLine' call
      var value_2 = 'CONTENT HEADERS';
      // Inline function 'kotlin.text.appendLine' call
      this_0.w8(value_2).x8(_Char___init__impl__6a9atx(10));
      var tmp$ret$9;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = sanitizedHeaders.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          if (element.u5i_1(HttpHeaders_getInstance().m2v_1)) {
            tmp$ret$9 = element;
            break $l$block;
          }
        }
        tmp$ret$9 = null;
      }
      var tmp0_safe_receiver = tmp$ret$9;
      var contentLengthPlaceholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t5i_1;
      var tmp$ret$11;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = sanitizedHeaders.p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          if (element_0.u5i_1(HttpHeaders_getInstance().p2v_1)) {
            tmp$ret$11 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$11 = null;
      }
      var tmp1_safe_receiver = tmp$ret$11;
      var contentTypePlaceholder = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.t5i_1;
      var tmp2_safe_receiver = content.p34();
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp_0 = HttpHeaders_getInstance().m2v_1;
        logHeader(this_0, tmp_0, contentLengthPlaceholder == null ? tmp2_safe_receiver.toString() : contentLengthPlaceholder);
      }
      var tmp3_safe_receiver = content.n34();
      if (tmp3_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp_1 = HttpHeaders_getInstance().p2v_1;
        logHeader(this_0, tmp_1, contentTypePlaceholder == null ? tmp3_safe_receiver.toString() : contentTypePlaceholder);
      }
      logHeaders(this_0, content.a2z().b2o(), sanitizedHeaders);
    }
    var message = this_0.toString();
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(message) > 0) {
      callLogger.u5a(message);
    }
    var tmp_2;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(message) === 0) {
      tmp_2 = true;
    } else {
      tmp_2 = !level.e5b_1;
    }
    if (tmp_2) {
      callLogger.y5a();
      return null;
    }
    return invoke$logRequestBody_0(content, callLogger, $completion);
  }
  function invoke$logResponseException(level, log, request, cause) {
    if (!level.c5b_1)
      return Unit_instance;
    log.w8('RESPONSE ' + request.t3j().toString() + ' failed with exception: ' + cause.toString());
  }
  function Logging$lambda$slambda($okHttpFormat, $logger, $filters, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    this.d5j_1 = $okHttpFormat;
    this.e5j_1 = $logger;
    this.f5j_1 = $filters;
    this.g5j_1 = $sanitizedHeaders;
    this.h5j_1 = $level;
    this.i5j_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda).w5j = function ($this$on, request, $completion) {
    var tmp = this.x5j($this$on, request, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Logging$lambda$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context ? p1 : THROW_CCE();
    return this.w5j(tmp, p2 instanceof HttpRequestBuilder ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 16;
            if (!invoke$shouldBeLogged(this.f5j_1, this.k5j_1)) {
              this.k5j_1.m3h_1.x2j(get_DisableLogging(), Unit_instance);
              return Unit_instance;
            }

            if (this.d5j_1) {
              var tmp_0 = this;
              tmp_0.l5j_1 = ArrayList_init_$Create$();
              this.l9_1 = 10;
              suspendResult = invoke$logRequestOkHttpFormat(this.g5j_1, this.h5j_1, this.i5j_1, this.k5j_1, this.l5j_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 1;
              continue $sm;
            }

          case 1:
            this.m9_1 = 3;
            this.l9_1 = 2;
            suspendResult = invoke$logRequest(this.e5j_1, this.h5j_1, this.g5j_1, this.k5j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m5j_1 = suspendResult;
            this.m9_1 = 16;
            this.l9_1 = 4;
            continue $sm;
          case 3:
            this.m9_1 = 16;
            var tmp_1 = this.o9_1;
            if (tmp_1 instanceof Error) {
              this.n5j_1 = this.o9_1;
              var tmp_2 = this;
              tmp_2.m5j_1 = null;
              this.l9_1 = 4;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 4:
            this.m9_1 = 16;
            this.o5j_1 = this.m5j_1;
            this.p5j_1 = Unit_instance;
            this.l9_1 = 5;
            continue $sm;
          case 5:
            this.m9_1 = 8;
            this.m9_1 = 7;
            this.l9_1 = 6;
            var tmp0_elvis_lhs = this.o5j_1;
            suspendResult = this.j5j_1.u5b(tmp0_elvis_lhs == null ? this.k5j_1.k3h_1 : tmp0_elvis_lhs, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            this.p5j_1 = suspendResult;
            this.m9_1 = 16;
            this.l9_1 = 9;
            continue $sm;
          case 7:
            this.m9_1 = 8;
            var tmp_3 = this.o9_1;
            if (tmp_3 instanceof Error) {
              this.q5j_1 = this.o9_1;
              var tmp_4 = this;
              invoke$logRequestException(this.h5j_1, this.e5j_1, this.k5j_1, this.q5j_1);
              throw this.q5j_1;
            } else {
              throw this.o9_1;
            }

          case 8:
            this.m9_1 = 16;
            this.r5j_1 = this.o9_1;
            throw this.r5j_1;
          case 9:
            this.s5j_1 = this.p5j_1;
            this.m9_1 = 16;
            return Unit_instance;
          case 10:
            this.t5j_1 = suspendResult;
            if (this.l5j_1.s() > 0) {
              this.e5j_1.a5a(joinToString(this.l5j_1, '\n'));
            }

            this.m9_1 = 14;
            if (!(this.t5j_1 == null)) {
              this.l9_1 = 12;
              suspendResult = this.j5j_1.u5b(this.t5j_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 11;
              suspendResult = this.j5j_1.v5b(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 11:
            this.v5j_1 = suspendResult;
            this.l9_1 = 13;
            continue $sm;
          case 12:
            this.v5j_1 = suspendResult;
            this.l9_1 = 13;
            continue $sm;
          case 13:
            this.u5j_1 = this.v5j_1;
            this.m9_1 = 16;
            this.l9_1 = 15;
            continue $sm;
          case 14:
            this.m9_1 = 16;
            var tmp_5 = this.o9_1;
            if (tmp_5 instanceof Error) {
              var cause = this.o9_1;
              var tmp_6 = this;
              this.e5j_1.a5a('<-- HTTP FAILED: ' + cause.toString());
              throw cause;
            } else {
              throw this.o9_1;
            }

          case 15:
            this.m9_1 = 16;
            return Unit_instance;
          case 16:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 16) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda).x5j = function ($this$on, request, completion) {
    var i = new Logging$lambda$slambda(this.d5j_1, this.e5j_1, this.f5j_1, this.g5j_1, this.h5j_1, this.i5j_1, completion);
    i.j5j_1 = $this$on;
    i.k5j_1 = request;
    return i;
  };
  function Logging$lambda$slambda_0($okHttpFormat, $logger, $filters, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    var i = new Logging$lambda$slambda($okHttpFormat, $logger, $filters, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation);
    var l = function ($this$on, request, $completion) {
      return i.w5j($this$on, request, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_1($okHttpFormat, $logger, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    this.g5k_1 = $okHttpFormat;
    this.h5k_1 = $logger;
    this.i5k_1 = $sanitizedHeaders;
    this.j5k_1 = $level;
    this.k5k_1 = $this_createClientPlugin;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_1).p5k = function ($this$on, response, $completion) {
    var tmp = this.q5k($this$on, response, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Logging$lambda$slambda_1).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context_0 ? p1 : THROW_CCE();
    return this.p5k(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_1).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 5;
            if (this.g5k_1) {
              var tmp_0 = this;
              tmp_0.n5k_1 = ArrayList_init_$Create$();
              this.l9_1 = 1;
              suspendResult = invoke$logResponseOkHttpFormat(this.i5k_1, this.j5k_1, this.k5k_1, this.m5k_1, this.n5k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 4;
              continue $sm;
            }

          case 1:
            this.o5k_1 = suspendResult;
            if (this.n5k_1.s() > 0) {
              this.h5k_1.a5a(joinToString(this.n5k_1, '\n'));
            }

            if (!equals(this.o5k_1, this.m5k_1)) {
              this.l9_1 = 2;
              suspendResult = this.l5k_1.a4b(this.o5k_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 3;
              continue $sm;
            }

          case 2:
            this.l9_1 = 3;
            continue $sm;
          case 3:
            this.l9_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 5) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda_1).q5k = function ($this$on, response, completion) {
    var i = new Logging$lambda$slambda_1(this.g5k_1, this.h5k_1, this.i5k_1, this.j5k_1, this.k5k_1, completion);
    i.l5k_1 = $this$on;
    i.m5k_1 = response;
    return i;
  };
  function Logging$lambda$slambda_2($okHttpFormat, $logger, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation) {
    var i = new Logging$lambda$slambda_1($okHttpFormat, $logger, $sanitizedHeaders, $level, $this_createClientPlugin, resultContinuation);
    var l = function ($this$on, response, $completion) {
      return i.p5k($this$on, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_3($okHttpFormat, $level, $sanitizedHeaders, resultContinuation) {
    this.z5k_1 = $okHttpFormat;
    this.a5l_1 = $level;
    this.b5l_1 = $sanitizedHeaders;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_3).l5l = function ($this$on, response, $completion) {
    var tmp = this.m5l($this$on, response, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Logging$lambda$slambda_3).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context_1 ? p1 : THROW_CCE();
    return this.l5l(tmp, p2 instanceof HttpResponse ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_3).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 10;
            if (this.z5k_1)
              return Unit_instance;
            if (this.a5l_1.equals(LogLevel_NONE_getInstance()) || this.d5l_1.p3k().p3i().w2j(get_DisableLogging()))
              return Unit_instance;
            this.e5l_1 = this.d5l_1.p3k().p3i().u2j(get_ClientCallLogger());
            this.f5l_1 = StringBuilder_init_$Create$();
            this.g5l_1 = false;
            this.l9_1 = 1;
            continue $sm;
          case 1:
            this.m9_1 = 4;
            this.m9_1 = 3;
            logResponseHeader(this.f5l_1, this.d5l_1.p3k().h3g(), this.a5l_1, this.b5l_1);
            this.l9_1 = 2;
            suspendResult = this.c5l_1.w5c(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h5l_1 = suspendResult;
            this.m9_1 = 10;
            this.l9_1 = 7;
            continue $sm;
          case 3:
            this.m9_1 = 4;
            var tmp_0 = this.o9_1;
            if (tmp_0 instanceof Error) {
              this.i5l_1 = this.o9_1;
              var tmp_1 = this;
              invoke$logResponseException(this.a5l_1, this.f5l_1, this.d5l_1.p3k().q3j(), this.i5l_1);
              this.g5l_1 = true;
              throw this.i5l_1;
            } else {
              throw this.o9_1;
            }

          case 4:
            this.m9_1 = 10;
            this.j5l_1 = this.o9_1;
            this.e5l_1.v5a(this.f5l_1.toString());
            if (this.g5l_1 || !this.a5l_1.e5b_1) {
              this.l9_1 = 5;
              suspendResult = this.e5l_1.z5a(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 6;
              continue $sm;
            }

          case 5:
            this.l9_1 = 6;
            continue $sm;
          case 6:
            throw this.j5l_1;
          case 7:
            this.k5l_1 = this.h5l_1;
            this.m9_1 = 10;
            this.e5l_1.v5a(this.f5l_1.toString());
            if (this.g5l_1 || !this.a5l_1.e5b_1) {
              this.l9_1 = 8;
              suspendResult = this.e5l_1.z5a(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 9;
              continue $sm;
            }

          case 8:
            this.l9_1 = 9;
            continue $sm;
          case 9:
            return Unit_instance;
          case 10:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 10) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda_3).m5l = function ($this$on, response, completion) {
    var i = new Logging$lambda$slambda_3(this.z5k_1, this.a5l_1, this.b5l_1, completion);
    i.c5l_1 = $this$on;
    i.d5l_1 = response;
    return i;
  };
  function Logging$lambda$slambda_4($okHttpFormat, $level, $sanitizedHeaders, resultContinuation) {
    var i = new Logging$lambda$slambda_3($okHttpFormat, $level, $sanitizedHeaders, resultContinuation);
    var l = function ($this$on, response, $completion) {
      return i.l5l($this$on, response, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_5($okHttpFormat, $level, resultContinuation) {
    this.v5l_1 = $okHttpFormat;
    this.w5l_1 = $level;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_5).d5m = function ($this$on, call, $completion) {
    var tmp = this.e5m($this$on, call, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Logging$lambda$slambda_5).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof Context_2 ? p1 : THROW_CCE();
    return this.d5m(tmp, p2 instanceof HttpClientCall ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_5).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 6;
            if (this.v5l_1)
              return Unit_instance;
            if (this.w5l_1.equals(LogLevel_NONE_getInstance()) || this.y5l_1.p3i().w2j(get_DisableLogging())) {
              return Unit_instance;
            }

            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.x5l_1.k5d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z5l_1 = suspendResult;
            this.m9_1 = 6;
            this.l9_1 = 5;
            continue $sm;
          case 2:
            this.m9_1 = 6;
            var tmp_0 = this.o9_1;
            if (tmp_0 instanceof Error) {
              this.a5m_1 = this.o9_1;
              this.b5m_1 = StringBuilder_init_$Create$();
              this.c5m_1 = this.y5l_1.p3i().u2j(get_ClientCallLogger());
              invoke$logResponseException(this.w5l_1, this.b5m_1, this.y5l_1.q3j(), this.a5m_1);
              this.l9_1 = 3;
              suspendResult = this.c5m_1.w5a(this.b5m_1.toString(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 3:
            this.l9_1 = 4;
            suspendResult = this.c5m_1.z5a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var tmp_1 = this;
            throw this.a5m_1;
          case 5:
            this.m9_1 = 6;
            return Unit_instance;
          case 6:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 6) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda_5).e5m = function ($this$on, call, completion) {
    var i = new Logging$lambda$slambda_5(this.v5l_1, this.w5l_1, completion);
    i.x5l_1 = $this$on;
    i.y5l_1 = call;
    return i;
  };
  function Logging$lambda$slambda_6($okHttpFormat, $level, resultContinuation) {
    var i = new Logging$lambda$slambda_5($okHttpFormat, $level, resultContinuation);
    var l = function ($this$on, call, $completion) {
      return i.d5m($this$on, call, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Logging$lambda$slambda_7($level, resultContinuation) {
    this.n5m_1 = $level;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$slambda_7).g3s = function (it, $completion) {
    var tmp = this.q3q(it, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Logging$lambda$slambda_7).ta = function (p1, $completion) {
    return this.g3s(p1 instanceof HttpResponse ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$slambda_7).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 10;
            if (this.n5m_1.equals(LogLevel_NONE_getInstance()) || this.o5m_1.p3k().p3i().w2j(get_DisableLogging())) {
              return Unit_instance;
            }

            this.p5m_1 = this.o5m_1.p3k().p3i().u2j(get_ClientCallLogger());
            this.q5m_1 = StringBuilder_init_$Create$();
            this.l9_1 = 1;
            continue $sm;
          case 1:
            this.m9_1 = 4;
            this.m9_1 = 3;
            this.l9_1 = 2;
            suspendResult = logResponseBody(this.q5m_1, contentType(this.o5m_1), this.o5m_1.r3j(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.r5m_1 = suspendResult;
            this.m9_1 = 10;
            this.l9_1 = 7;
            continue $sm;
          case 3:
            this.m9_1 = 4;
            var tmp_0 = this.o9_1;
            if (tmp_0 instanceof Error) {
              this.s5m_1 = this.o9_1;
              var tmp_1 = this;
              tmp_1.r5m_1 = Unit_instance;
              this.m9_1 = 10;
              this.l9_1 = 7;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 4:
            this.m9_1 = 10;
            this.t5m_1 = this.o9_1;
            this.l9_1 = 5;
            var this_0 = this.q5m_1.toString();
            suspendResult = this.p5m_1.x5a(toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.l9_1 = 6;
            suspendResult = this.p5m_1.z5a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            throw this.t5m_1;
          case 7:
            this.m9_1 = 10;
            this.l9_1 = 8;
            var this_1 = this.q5m_1.toString();
            suspendResult = this.p5m_1.x5a(toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE())), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 8:
            this.l9_1 = 9;
            suspendResult = this.p5m_1.z5a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            return Unit_instance;
          case 10:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 10) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$slambda_7).q3q = function (it, completion) {
    var i = new Logging$lambda$slambda_7(this.n5m_1, completion);
    i.o5m_1 = it;
    return i;
  };
  function Logging$lambda$slambda_8($level, resultContinuation) {
    var i = new Logging$lambda$slambda_7($level, resultContinuation);
    var l = function (it, $completion) {
      return i.g3s(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Logging$lambda$lambda($observer) {
    return function ($this$prepare) {
      $this$prepare.y4a($observer);
      return Unit_instance;
    };
  }
  function Logging$lambda$detectIfBinary$slambda($channel, $firstChunk, $firstReadSize, $body, resultContinuation) {
    this.c5n_1 = $channel;
    this.d5n_1 = $firstChunk;
    this.e5n_1 = $firstReadSize;
    this.f5n_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$detectIfBinary$slambda).i5n = function ($this$async, $completion) {
    var tmp = this.a1g($this$async, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Logging$lambda$detectIfBinary$slambda).ta = function (p1, $completion) {
    return this.i5n((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$detectIfBinary$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            this.l9_1 = 1;
            suspendResult = writeFully(this.c5n_1, this.d5n_1, 0, this.e5n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l9_1 = 2;
            suspendResult = copyTo(this.f5n_1, this.c5n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h5n_1 = suspendResult;
            this.l9_1 = 3;
            suspendResult = this.c5n_1.f1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return this.h5n_1;
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Logging$lambda$detectIfBinary$slambda).a1g = function ($this$async, completion) {
    var i = new Logging$lambda$detectIfBinary$slambda(this.c5n_1, this.d5n_1, this.e5n_1, this.f5n_1, completion);
    i.g5n_1 = $this$async;
    return i;
  };
  function Logging$lambda$detectIfBinary$slambda_0($channel, $firstChunk, $firstReadSize, $body, resultContinuation) {
    var i = new Logging$lambda$detectIfBinary$slambda($channel, $firstChunk, $firstReadSize, $body, resultContinuation);
    var l = function ($this$async, $completion) {
      return i.i5n($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Logging$lambda$logOutgoingContent$lambda(it) {
    _init_properties_Logging_kt__66pui5();
    return it;
  }
  function Logging$lambda$logOutgoingContent$slambda($content, $channel, resultContinuation) {
    this.r5n_1 = $content;
    this.s5n_1 = $channel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$logOutgoingContent$slambda).w1v = function ($this$launch, $completion) {
    var tmp = this.a1g($this$launch, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Logging$lambda$logOutgoingContent$slambda).ta = function (p1, $completion) {
    return this.w1v((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$logOutgoingContent$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.r5n_1.v34(this.s5n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s5n_1.p4();
            return Unit_instance;
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
  protoOf(Logging$lambda$logOutgoingContent$slambda).a1g = function ($this$launch, completion) {
    var i = new Logging$lambda$logOutgoingContent$slambda(this.r5n_1, this.s5n_1, completion);
    i.t5n_1 = $this$launch;
    return i;
  };
  function Logging$lambda$logOutgoingContent$slambda_0($content, $channel, resultContinuation) {
    var i = new Logging$lambda$logOutgoingContent$slambda($content, $channel, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.w1v($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Logging$lambda$logRequestOkHttpFormat$lambda(channel) {
    _init_properties_Logging_kt__66pui5();
    return GZipEncoder_getInstance().n2n(channel);
  }
  function Logging$lambda$logRequestBody$slambda($channel, $charset, $requestLog, $logger, resultContinuation) {
    this.c5o_1 = $channel;
    this.d5o_1 = $charset;
    this.e5o_1 = $requestLog;
    this.f5o_1 = $logger;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Logging$lambda$logRequestBody$slambda).w1v = function ($this$launch, $completion) {
    var tmp = this.a1g($this$launch, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Logging$lambda$logRequestBody$slambda).ta = function (p1, $completion) {
    return this.w1v((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Logging$lambda$logRequestBody$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 7;
            this.l9_1 = 1;
            continue $sm;
          case 1:
            this.m9_1 = 6;
            var tmp_0 = this;
            tmp_0.i5o_1 = this.c5o_1;
            var tmp_1 = this;
            tmp_1.j5o_1 = this.d5o_1;
            this.k5o_1 = this.i5o_1;
            this.l5o_1 = this.j5o_1;
            this.m9_1 = 3;
            this.l9_1 = 2;
            suspendResult = readRemaining(this.k5o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.m5o_1 = readText(ARGUMENT, this.l5o_1);
            this.m9_1 = 6;
            this.l9_1 = 4;
            continue $sm;
          case 3:
            this.m9_1 = 6;
            var tmp_2 = this.o9_1;
            if (tmp_2 instanceof Error) {
              var cause = this.o9_1;
              var tmp_3 = this;
              tmp_3.m5o_1 = null;
              this.l9_1 = 4;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 4:
            this.m9_1 = 6;
            var tmp0_elvis_lhs = this.m5o_1;
            var text = tmp0_elvis_lhs == null ? '[request body omitted]' : tmp0_elvis_lhs;
            var tmp2 = this.e5o_1;
            var value = 'BODY START';
            tmp2.w8(value).x8(_Char___init__impl__6a9atx(10));
            this.e5o_1.w8(text).x8(_Char___init__impl__6a9atx(10));
            this.h5o_1 = this.e5o_1.w8('BODY END');
            this.m9_1 = 7;
            this.l9_1 = 5;
            continue $sm;
          case 5:
            this.h5o_1;
            this.m9_1 = 7;
            this.f5o_1.u5a(this.e5o_1.toString());
            this.f5o_1.y5a();
            return Unit_instance;
          case 6:
            this.m9_1 = 7;
            var t = this.o9_1;
            this.f5o_1.u5a(this.e5o_1.toString());
            this.f5o_1.y5a();
            throw t;
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
  protoOf(Logging$lambda$logRequestBody$slambda).a1g = function ($this$launch, completion) {
    var i = new Logging$lambda$logRequestBody$slambda(this.c5o_1, this.d5o_1, this.e5o_1, this.f5o_1, completion);
    i.g5o_1 = $this$launch;
    return i;
  };
  function Logging$lambda$logRequestBody$slambda_0($channel, $charset, $requestLog, $logger, resultContinuation) {
    var i = new Logging$lambda$logRequestBody$slambda($channel, $charset, $requestLog, $logger, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.w1v($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $invoke$detectIfBinaryCOROUTINE$3($this_createClientPlugin, body, contentLength, contentType, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f5e_1 = $this_createClientPlugin;
    this.g5e_1 = body;
    this.h5e_1 = contentLength;
    this.i5e_1 = contentType;
    this.j5e_1 = headers;
  }
  protoOf($invoke$detectIfBinaryCOROUTINE$3).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            if (this.j5e_1.c2o(HttpHeaders_getInstance().k2v_1)) {
              return new Triple(true, this.h5e_1, this.g5e_1);
            }

            var tmp_0 = this;
            var tmp_1;
            if (!(this.i5e_1 == null)) {
              var tmp0_elvis_lhs = charset(this.i5e_1);
              tmp_1 = tmp0_elvis_lhs == null ? Charsets_getInstance().r1w_1 : tmp0_elvis_lhs;
            } else {
              tmp_1 = Charsets_getInstance().r1w_1;
            }

            tmp_0.k5e_1 = tmp_1;
            this.l5e_1 = false;
            this.m5e_1 = new Int8Array(1024);
            this.l9_1 = 1;
            suspendResult = readAvailable(this.g5e_1, this.m5e_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n5e_1 = suspendResult;
            if (this.n5e_1 < 1) {
              return new Triple(false, new Long(0, 0), this.g5e_1);
            }

            var tmp_2 = this;
            var this_0 = new Buffer();
            writeFully_0(this_0, this.m5e_1, 0, this.n5e_1);
            tmp_2.o5e_1 = this_0;
            this.p5e_1 = decode(this.k5e_1.v1w(), this.o5e_1, this.n5e_1);
            this.q5e_1 = -1;
            var indexedObject = this.p5e_1;
            var inductionVariable = 0;
            var last = indexedObject.length;
            while (inductionVariable < last) {
              var ch = charSequenceGet(indexedObject, inductionVariable);
              inductionVariable = inductionVariable + 1 | 0;
              this.q5e_1 = this.q5e_1 + 1 | 0;
            }

            var indexedObject_0 = this.p5e_1;
            var inductionVariable_0 = 0;
            var last_0 = indexedObject_0.length;
            $l$loop: while (inductionVariable_0 < last_0) {
              var i = inductionVariable_0;
              var ch_0 = charSequenceGet(indexedObject_0, inductionVariable_0);
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              if (ch_0 === _Char___init__impl__6a9atx(65533) && !(i === this.q5e_1)) {
                this.l5e_1 = true;
                break $l$loop;
              }
            }

            if (!this.l5e_1) {
              this.r5e_1 = new ByteChannel();
              this.l9_1 = 3;
              suspendResult = async(this.f5e_1.p3p_1, VOID, VOID, Logging$lambda$detectIfBinary$slambda_0(this.r5e_1, this.m5e_1, this.n5e_1, this.g5e_1, null)).ew(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 2;
              continue $sm;
            }

          case 2:
            return new Triple(this.l5e_1, this.h5e_1, this.g5e_1);
          case 3:
            var copied = suspendResult;
            var tmp_3 = this.l5e_1;
            var other = this.n5e_1;
            return new Triple(tmp_3, copied.z2(toLong(other)), this.r5e_1);
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logRequestBodyCOROUTINE$4($this_createClientPlugin, content, contentLength, headers, method, logLines, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a5f_1 = $this_createClientPlugin;
    this.b5f_1 = content;
    this.c5f_1 = contentLength;
    this.d5f_1 = headers;
    this.e5f_1 = method;
    this.f5f_1 = logLines;
    this.g5f_1 = body;
  }
  protoOf($invoke$logRequestBodyCOROUTINE$4).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            this.l9_1 = 1;
            suspendResult = invoke$detectIfBinary(this.a5f_1, this.g5f_1, this.c5f_1, this.b5f_1.n34(), this.d5f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h5f_1 = suspendResult;
            this.i5f_1 = this.h5f_1.bc();
            this.j5f_1 = this.h5f_1.cc();
            this.k5f_1 = this.h5f_1.zo();
            if (!this.i5f_1) {
              this.m5f_1 = this.b5f_1.n34();
              var tmp_0 = this;
              var tmp_1;
              if (!(this.m5f_1 == null)) {
                var tmp0_elvis_lhs = charset(this.m5f_1);
                tmp_1 = tmp0_elvis_lhs == null ? Charsets_getInstance().r1w_1 : tmp0_elvis_lhs;
              } else {
                tmp_1 = Charsets_getInstance().r1w_1;
              }
              tmp_0.n5f_1 = tmp_1;
              this.l9_1 = 2;
              suspendResult = readRemaining(this.k5f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this;
              var type = 'binary';
              if (this.d5f_1.c2o(HttpHeaders_getInstance().k2v_1)) {
                type = 'encoded';
              }
              var tmp_3;
              if (!(this.j5f_1 == null)) {
                tmp_3 = this.f5f_1.n('--> END ' + this.e5f_1.j2z_1 + ' (' + type + ' ' + toString_0(this.j5f_1) + '-byte body omitted)');
              } else {
                tmp_3 = this.f5f_1.n('--> END ' + this.e5f_1.j2z_1 + ' (' + type + ' body omitted)');
              }
              tmp_2.l5f_1 = tmp_3;
              this.l9_1 = 3;
              continue $sm;
            }

          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = readText(ARGUMENT, this.n5f_1);
            this.f5f_1.n(ARGUMENT_0);
            this.l5f_1 = this.f5f_1.n('--> END ' + this.e5f_1.j2z_1 + ' (' + toString_0(this.j5f_1) + '-byte body)');
            this.l9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logOutgoingContentCOROUTINE$5($this_createClientPlugin, content, method, headers, logLines, process, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w5f_1 = $this_createClientPlugin;
    this.x5f_1 = content;
    this.y5f_1 = method;
    this.z5f_1 = headers;
    this.a5g_1 = logLines;
    this.b5g_1 = process;
  }
  protoOf($invoke$logOutgoingContentCOROUTINE$5).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 6;
            this.c5g_1 = this.x5f_1;
            var tmp_0 = this.c5g_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.e5g_1 = this.x5f_1.q34();
              this.l9_1 = 4;
              suspendResult = invoke$logRequestBody(this.w5f_1, this.x5f_1, toLong(this.e5g_1.length), this.z5f_1, this.y5f_1, this.a5g_1, ByteReadChannel(this.e5g_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.c5g_1;
              if (tmp_1 instanceof ContentWrapper) {
                this.l9_1 = 3;
                suspendResult = invoke$logOutgoingContent(this.w5f_1, this.x5f_1.z34(), this.y5f_1, this.z5f_1, this.a5g_1, this.b5g_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp_2 = this.c5g_1;
                if (tmp_2 instanceof NoContent) {
                  var tmp_3 = this;
                  this.a5g_1.n('--> END ' + this.y5f_1.j2z_1);
                  tmp_3.d5g_1 = null;
                  this.l9_1 = 5;
                  continue $sm;
                } else {
                  var tmp_4 = this.c5g_1;
                  if (tmp_4 instanceof ProtocolUpgrade) {
                    var tmp_5 = this;
                    this.a5g_1.n('--> END ' + this.y5f_1.j2z_1);
                    tmp_5.d5g_1 = null;
                    this.l9_1 = 5;
                    continue $sm;
                  } else {
                    var tmp_6 = this.c5g_1;
                    if (tmp_6 instanceof ReadChannelContent) {
                      this.f5g_1 = split(this.x5f_1.t34(), this.w5f_1.p3p_1);
                      this.g5g_1 = this.f5g_1.bc();
                      this.h5g_1 = this.f5g_1.cc();
                      this.l9_1 = 2;
                      suspendResult = invoke$logRequestBody(this.w5f_1, this.x5f_1, this.x5f_1.p34(), this.z5f_1, this.y5f_1, this.a5g_1, this.h5g_1, this);
                      if (suspendResult === get_COROUTINE_SUSPENDED()) {
                        return suspendResult;
                      }
                      continue $sm;
                    } else {
                      var tmp_7 = this.c5g_1;
                      if (tmp_7 instanceof WriteChannelContent) {
                        this.i5g_1 = new ByteChannel();
                        launch(this.w5f_1.p3p_1, VOID, VOID, Logging$lambda$logOutgoingContent$slambda_0(this.x5f_1, this.i5g_1, null));
                        this.j5g_1 = split(this.i5g_1, this.w5f_1.p3p_1);
                        this.k5g_1 = this.j5g_1.bc();
                        this.l5g_1 = this.j5g_1.cc();
                        this.l9_1 = 1;
                        suspendResult = invoke$logRequestBody(this.w5f_1, this.x5f_1, this.x5f_1.p34(), this.z5f_1, this.y5f_1, this.a5g_1, this.l5g_1, this);
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
            this.d5g_1 = new LoggedContent(this.x5f_1, this.k5g_1);
            this.l9_1 = 5;
            continue $sm;
          case 2:
            this.d5g_1 = new LoggedContent(this.x5f_1, this.g5g_1);
            this.l9_1 = 5;
            continue $sm;
          case 3:
            this.d5g_1 = suspendResult;
            this.l9_1 = 5;
            continue $sm;
          case 4:
            this.d5g_1 = null;
            this.l9_1 = 5;
            continue $sm;
          case 5:
            return this.d5g_1;
          case 6:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 6) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logRequestOkHttpFormatCOROUTINE$6(sanitizedHeaders, level, $this_createClientPlugin, request, logLines, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u5g_1 = sanitizedHeaders;
    this.v5g_1 = level;
    this.w5g_1 = $this_createClientPlugin;
    this.x5g_1 = request;
    this.y5g_1 = logLines;
  }
  protoOf($invoke$logRequestOkHttpFormatCOROUTINE$6).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            if (invoke$isNone(this.v5g_1))
              return null;
            this.z5g_1 = pathQuery(takeFrom(new URLBuilder(), this.x5g_1.h3h_1).w2u());
            this.a5h_1 = this.x5g_1.k3h_1;
            var tmp_0 = this;
            var this_0 = new HeadersBuilder();
            var tmp_1;
            var tmp_2;
            var tmp_3;
            var tmp_4 = this.a5h_1;
            if (tmp_4 instanceof OutgoingContent) {
              tmp_3 = !this.x5g_1.i3h_1.equals(Companion_getInstance().b2z_1);
            } else {
              tmp_3 = false;
            }

            if (tmp_3) {
              tmp_2 = !this.x5g_1.i3h_1.equals(Companion_getInstance().g2z_1);
            } else {
              tmp_2 = false;
            }

            if (tmp_2) {
              var tmp_5 = this.a5h_1;
              tmp_1 = !(tmp_5 instanceof EmptyContent);
            } else {
              tmp_1 = false;
            }

            if (tmp_1) {
              var tmp0_safe_receiver = this.a5h_1.n34();
              if (tmp0_safe_receiver == null)
                null;
              else {
                appendIfNameAbsent(this_0, HttpHeaders_getInstance().p2v_1, tmp0_safe_receiver.toString());
              }
              var tmp1_safe_receiver = this.a5h_1.p34();
              if (tmp1_safe_receiver == null)
                null;
              else {
                appendIfNameAbsent(this_0, HttpHeaders_getInstance().m2v_1, tmp1_safe_receiver.toString());
              }
            }

            appendAll(this_0, this.x5g_1.j3h_1);
            tmp_0.b5h_1 = this_0.w2u();
            var tmp_6 = this;
            var tmp0_safe_receiver_0 = this.b5h_1.we(HttpHeaders_getInstance().m2v_1);
            tmp_6.c5h_1 = tmp0_safe_receiver_0 == null ? null : toLongOrNull(tmp0_safe_receiver_0);
            var tmp_7 = this;
            var tmp_8;
            if (this.x5g_1.i3h_1.equals(Companion_getInstance().b2z_1) || this.x5g_1.i3h_1.equals(Companion_getInstance().g2z_1) || ((invoke$isHeaders(this.v5g_1) || invoke$isBody(this.v5g_1)) && !(this.c5h_1 == null)) || (invoke$isHeaders(this.v5g_1) && this.c5h_1 == null) || this.b5h_1.c2o(HttpHeaders_getInstance().k2v_1)) {
              tmp_8 = '--> ' + this.x5g_1.i3h_1.j2z_1 + ' ' + this.z5g_1;
            } else {
              if (invoke$isInfo(this.v5g_1) && !(this.c5h_1 == null)) {
                tmp_8 = '--> ' + this.x5g_1.i3h_1.j2z_1 + ' ' + this.z5g_1 + ' (' + toString_0(this.c5h_1) + '-byte body)';
              } else {
                var tmp_9;
                var tmp_10 = this.a5h_1;
                if (tmp_10 instanceof WriteChannelContent) {
                  tmp_9 = true;
                } else {
                  var tmp_11 = this.a5h_1;
                  tmp_9 = tmp_11 instanceof ReadChannelContent;
                }
                if (tmp_9) {
                  tmp_8 = '--> ' + this.x5g_1.i3h_1.j2z_1 + ' ' + this.z5g_1 + ' (unknown-byte body)';
                } else {
                  var size = computeRequestBodySize(this.x5g_1.k3h_1);
                  tmp_8 = '--> ' + this.x5g_1.i3h_1.j2z_1 + ' ' + this.z5g_1 + ' (' + size.toString() + '-byte body)';
                }
              }
            }

            tmp_7.d5h_1 = tmp_8;
            this.y5g_1.n(this.d5h_1);
            if (!invoke$isHeaders(this.v5g_1) && !invoke$isBody(this.v5g_1)) {
              return null;
            }

            var _iterator__ex2g4s = this.b5h_1.b2o().p();
            while (_iterator__ex2g4s.q()) {
              var _destruct__k2r9zo = _iterator__ex2g4s.r();
              var name = _destruct__k2r9zo.y();
              var values = _destruct__k2r9zo.z();
              var tmp0 = this.u5g_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                var _iterator__ex2g4s_0 = tmp0.p();
                while (_iterator__ex2g4s_0.q()) {
                  var element = _iterator__ex2g4s_0.r();
                  if (element.u5i_1(name)) {
                    tmp$ret$0 = element;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = null;
              }
               while (false);
              if (tmp$ret$0 == null) {
                this.y5g_1.n(name + ': ' + joinToString(values, ', '));
              } else {
                this.y5g_1.n(name + ': \u2588\u2588');
              }
            }

            if (!invoke$isBody(this.v5g_1) || this.x5g_1.i3h_1.equals(Companion_getInstance().b2z_1) || this.x5g_1.i3h_1.equals(Companion_getInstance().g2z_1)) {
              this.y5g_1.n('--> END ' + this.x5g_1.i3h_1.j2z_1);
              return null;
            }

            this.y5g_1.n('');
            var tmp_12 = this.a5h_1;
            if (!(tmp_12 instanceof OutgoingContent)) {
              this.y5g_1.n('--> END ' + this.x5g_1.i3h_1.j2z_1);
              return null;
            }

            if (this.x5g_1.j3h_1.we(HttpHeaders_getInstance().k2v_1) === 'gzip') {
              this.l9_1 = 2;
              var tmp_13 = this.x5g_1.i3h_1;
              suspendResult = invoke$logOutgoingContent(this.w5g_1, this.a5h_1, tmp_13, this.b5h_1, this.y5g_1, Logging$lambda$logRequestOkHttpFormat$lambda, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 1;
              suspendResult = invoke$logOutgoingContent(this.w5g_1, this.a5h_1, this.x5g_1.i3h_1, this.b5h_1, this.y5g_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.e5h_1 = suspendResult;
            this.l9_1 = 3;
            continue $sm;
          case 2:
            this.e5h_1 = suspendResult;
            this.l9_1 = 3;
            continue $sm;
          case 3:
            var newContent = this.e5h_1;
            return newContent;
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logResponseBodyCOROUTINE$7($this_createClientPlugin, response, body, logLines, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n5h_1 = $this_createClientPlugin;
    this.o5h_1 = response;
    this.p5h_1 = body;
    this.q5h_1 = logLines;
  }
  protoOf($invoke$logResponseBodyCOROUTINE$7).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            this.q5h_1.n('');
            this.l9_1 = 1;
            suspendResult = invoke$detectIfBinary(this.n5h_1, this.p5h_1, contentLength(this.o5h_1), contentType(this.o5h_1), this.o5h_1.a2z(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r5h_1 = suspendResult;
            this.s5h_1 = this.r5h_1.bc();
            this.t5h_1 = this.r5h_1.cc();
            this.u5h_1 = this.r5h_1.zo();
            this.v5h_1 = this.o5h_1.a3l().j2p_1.a3(this.o5h_1.z3k().j2p_1);
            if (equals(this.t5h_1, new Long(0, 0))) {
              this.q5h_1.n('<-- END HTTP (' + this.v5h_1.toString() + 'ms, ' + toString_0(this.t5h_1) + '-byte body)');
              return Unit_instance;
            }

            if (!this.s5h_1) {
              this.x5h_1 = contentType(this.o5h_1);
              var tmp_0 = this;
              var tmp_1;
              if (!(this.x5h_1 == null)) {
                var tmp0_elvis_lhs = charset(this.x5h_1);
                tmp_1 = tmp0_elvis_lhs == null ? Charsets_getInstance().r1w_1 : tmp0_elvis_lhs;
              } else {
                tmp_1 = Charsets_getInstance().r1w_1;
              }
              tmp_0.y5h_1 = tmp_1;
              this.l9_1 = 2;
              suspendResult = readRemaining(this.u5h_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this;
              var type = 'binary';
              if (this.o5h_1.a2z().c2o(HttpHeaders_getInstance().k2v_1)) {
                type = 'encoded';
              }
              var tmp_3;
              if (!(this.t5h_1 == null)) {
                tmp_3 = this.q5h_1.n('<-- END HTTP (' + this.v5h_1.toString() + 'ms, ' + type + ' ' + toString_0(this.t5h_1) + '-byte body omitted)');
              } else {
                tmp_3 = this.q5h_1.n('<-- END HTTP (' + this.v5h_1.toString() + 'ms, ' + type + ' body omitted)');
              }
              tmp_2.w5h_1 = tmp_3;
              this.l9_1 = 3;
              continue $sm;
            }

          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = readText(ARGUMENT, this.y5h_1);
            this.q5h_1.n(ARGUMENT_0);
            this.w5h_1 = this.q5h_1.n('<-- END HTTP (' + this.v5h_1.toString() + 'ms, ' + toString_0(this.t5h_1) + '-byte body)');
            this.l9_1 = 3;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $invoke$logResponseOkHttpFormatCOROUTINE$8(sanitizedHeaders, level, $this_createClientPlugin, response, logLines, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h5i_1 = sanitizedHeaders;
    this.i5i_1 = level;
    this.j5i_1 = $this_createClientPlugin;
    this.k5i_1 = response;
    this.l5i_1 = logLines;
  }
  protoOf($invoke$logResponseOkHttpFormatCOROUTINE$8).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            if (invoke$isNone(this.i5i_1))
              return this.k5i_1;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.k5i_1.a2z().we(HttpHeaders_getInstance().m2v_1);
            tmp_0.m5i_1 = tmp0_safe_receiver == null ? null : toLongOrNull(tmp0_safe_receiver);
            this.n5i_1 = get_request(this.k5i_1);
            this.o5i_1 = this.k5i_1.a3l().j2p_1.a3(this.k5i_1.z3k().j2p_1);
            this.p5i_1 = this.k5i_1.a2z().we(HttpHeaders_getInstance().t2x_1) === 'chunked' && (invoke$isInfo(this.i5i_1) || invoke$isHeaders(this.i5i_1)) ? '<-- ' + this.k5i_1.o34().toString() + ' ' + pathQuery(this.n5i_1.t3j()) + ' (' + this.o5i_1.toString() + 'ms, unknown-byte body)' : invoke$isInfo(this.i5i_1) && !(this.m5i_1 == null) ? '<-- ' + this.k5i_1.o34().toString() + ' ' + pathQuery(this.n5i_1.t3j()) + ' (' + this.o5i_1.toString() + 'ms, ' + toString_0(this.m5i_1) + '-byte body)' : invoke$isBody(this.i5i_1) || (invoke$isInfo(this.i5i_1) && this.m5i_1 == null) || (invoke$isHeaders(this.i5i_1) && !(this.m5i_1 == null)) || this.k5i_1.a2z().we(HttpHeaders_getInstance().k2v_1) === 'gzip' ? '<-- ' + this.k5i_1.o34().toString() + ' ' + pathQuery(this.n5i_1.t3j()) + ' (' + this.o5i_1.toString() + 'ms)' : '<-- ' + this.k5i_1.o34().toString() + ' ' + pathQuery(this.n5i_1.t3j()) + ' (' + this.o5i_1.toString() + 'ms, unknown-byte body)';
            this.l5i_1.n(this.p5i_1);
            if (!invoke$isHeaders(this.i5i_1) && !invoke$isBody(this.i5i_1)) {
              return this.k5i_1;
            }

            var _iterator__ex2g4s = this.k5i_1.a2z().b2o().p();
            while (_iterator__ex2g4s.q()) {
              var _destruct__k2r9zo = _iterator__ex2g4s.r();
              var name = _destruct__k2r9zo.y();
              var values = _destruct__k2r9zo.z();
              var tmp0 = this.h5i_1;
              var tmp$ret$0 = Unit_instance;
              l$ret$1: do {
                var _iterator__ex2g4s_0 = tmp0.p();
                while (_iterator__ex2g4s_0.q()) {
                  var element = _iterator__ex2g4s_0.r();
                  if (element.u5i_1(name)) {
                    tmp$ret$0 = element;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = null;
              }
               while (false);
              if (tmp$ret$0 == null) {
                this.l5i_1.n(name + ': ' + joinToString(values, ', '));
              } else {
                this.l5i_1.n(name + ': \u2588\u2588');
              }
            }

            if (!invoke$isBody(this.i5i_1)) {
              this.l5i_1.n('<-- END HTTP');
              return this.k5i_1;
            }

            if (!(this.m5i_1 == null) && equals(this.m5i_1, new Long(0, 0))) {
              this.l5i_1.n('<-- END HTTP (' + this.o5i_1.toString() + 'ms, ' + toString_0(this.m5i_1) + '-byte body)');
              return this.k5i_1;
            }

            if (equals(contentType(this.k5i_1), Text_getInstance().k2u_1)) {
              this.l5i_1.n('<-- END HTTP (streaming)');
              return this.k5i_1;
            }

            if (get_isSaved(this.k5i_1)) {
              this.l9_1 = 3;
              suspendResult = invoke$logResponseBody(this.j5i_1, this.k5i_1, this.k5i_1.r3j(), this.l5i_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 1;
              continue $sm;
            }

          case 1:
            this.q5i_1 = split(this.k5i_1.r3j(), this.k5i_1);
            this.r5i_1 = this.q5i_1.bc();
            this.s5i_1 = this.q5i_1.cc();
            this.l9_1 = 2;
            suspendResult = invoke$logResponseBody(this.j5i_1, this.k5i_1, this.s5i_1, this.l5i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var call = wrapWithContent(this.k5i_1.p3k(), this.r5i_1);
            return call.h3g();
          case 3:
            return this.k5i_1;
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
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
          if (element_0.u5i_1(key)) {
            tmp$ret$5 = element_0;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      var tmp0_safe_receiver = tmp$ret$5;
      var placeholder = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t5i_1;
      logHeader(_this__u8e3s4, key, placeholder == null ? joinToString(values, '; ') : placeholder);
    }
  }
  function logHeader(_this__u8e3s4, key, value) {
    // Inline function 'kotlin.text.appendLine' call
    var value_0 = '-> ' + key + ': ' + value;
    // Inline function 'kotlin.text.appendLine' call
    _this__u8e3s4.o(value_0).x8(_Char___init__impl__6a9atx(10));
  }
  function logResponseHeader(log, response, level, sanitizedHeaders) {
    // Inline function 'kotlin.with' call
    if (level.c5b_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value = 'RESPONSE: ' + response.o34().toString();
      // Inline function 'kotlin.text.appendLine' call
      log.w8(value).x8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_0 = 'METHOD: ' + response.p3k().q3j().m3k().toString();
      // Inline function 'kotlin.text.appendLine' call
      log.w8(value_0).x8(_Char___init__impl__6a9atx(10));
      // Inline function 'kotlin.text.appendLine' call
      var value_1 = 'FROM: ' + response.p3k().q3j().t3j().toString();
      // Inline function 'kotlin.text.appendLine' call
      log.w8(value_1).x8(_Char___init__impl__6a9atx(10));
    }
    if (level.d5b_1) {
      // Inline function 'kotlin.text.appendLine' call
      var value_2 = 'COMMON HEADERS';
      // Inline function 'kotlin.text.appendLine' call
      log.w8(value_2).x8(_Char___init__impl__6a9atx(10));
      logHeaders(log, response.a2z().b2o(), sanitizedHeaders);
    }
  }
  function logResponseBody(log, contentType, content, $completion) {
    var tmp = new $logResponseBodyCOROUTINE$10(log, contentType, content, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.h5p_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).kf = function (a, b) {
    return this.h5p_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.kf(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).s3 = function () {
    return this.h5p_1;
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
    this.v5o_1 = log;
    this.w5o_1 = contentType;
    this.x5o_1 = content;
  }
  protoOf($logResponseBodyCOROUTINE$10).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            tmp_0.y5o_1 = this.v5o_1;
            this.z5o_1 = this.y5o_1;
            var tmp_1 = this;
            tmp_1.a5p_1 = this.z5o_1;
            this.b5p_1 = this.a5p_1;
            var tmp0 = this.b5p_1;
            var value = 'BODY Content-Type: ' + toString_0(this.w5o_1);
            tmp0.w8(value).x8(_Char___init__impl__6a9atx(10));
            var tmp2 = this.b5p_1;
            var value_0 = 'BODY START';
            tmp2.w8(value_0).x8(_Char___init__impl__6a9atx(10));
            var tmp_2 = this;
            tmp_2.c5p_1 = this.x5o_1;
            var tmp_3 = this;
            var tmp0_safe_receiver = this.w5o_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : charset(tmp0_safe_receiver);
            tmp_3.d5p_1 = tmp1_elvis_lhs == null ? Charsets_getInstance().r1w_1 : tmp1_elvis_lhs;
            this.e5p_1 = this.c5p_1;
            this.f5p_1 = this.d5p_1;
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = readRemaining(this.e5p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.g5p_1 = readText(ARGUMENT, this.f5p_1);
            this.m9_1 = 3;
            this.l9_1 = 4;
            continue $sm;
          case 2:
            this.m9_1 = 3;
            var tmp_4 = this.o9_1;
            if (tmp_4 instanceof Error) {
              var cause = this.o9_1;
              var tmp_5 = this;
              tmp_5.g5p_1 = null;
              this.l9_1 = 4;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 3:
            throw this.o9_1;
          case 4:
            this.m9_1 = 3;
            var tmp2_elvis_lhs = this.g5p_1;
            var message = tmp2_elvis_lhs == null ? '[response body omitted]' : tmp2_elvis_lhs;
            this.b5p_1.w8(message).x8(_Char___init__impl__6a9atx(10));
            this.b5p_1.w8('BODY END');
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function observe(_this__u8e3s4, log, $completion) {
    var tmp = new $observeCOROUTINE$11(_this__u8e3s4, log, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function toReadChannel(_this__u8e3s4) {
    var tmp = GlobalScope_instance;
    var tmp_0 = Dispatchers_getInstance().w12_1;
    return writer(tmp, tmp_0, VOID, toReadChannel$slambda_0(_this__u8e3s4, null)).c1u_1;
  }
  function toReadChannel$slambda($this_toReadChannel, resultContinuation) {
    this.e5q_1 = $this_toReadChannel;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(toReadChannel$slambda).t39 = function ($this$writer, $completion) {
    var tmp = this.u39($this$writer, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(toReadChannel$slambda).ta = function (p1, $completion) {
    return this.t39(p1 instanceof WriterScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(toReadChannel$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.e5q_1.v34(this.f5q_1.e1u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(toReadChannel$slambda).u39 = function ($this$writer, completion) {
    var i = new toReadChannel$slambda(this.e5q_1, completion);
    i.f5q_1 = $this$writer;
    return i;
  };
  function toReadChannel$slambda_0($this_toReadChannel, resultContinuation) {
    var i = new toReadChannel$slambda($this_toReadChannel, resultContinuation);
    var l = function ($this$writer, $completion) {
      return i.t39($this$writer, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $observeCOROUTINE$11(_this__u8e3s4, log, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q5p_1 = _this__u8e3s4;
    this.r5p_1 = log;
  }
  protoOf($observeCOROUTINE$11).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 6;
            this.s5p_1 = this.q5p_1;
            var tmp_0 = this.s5p_1;
            if (tmp_0 instanceof ByteArrayContent) {
              this.l9_1 = 3;
              suspendResult = writeFully(this.r5p_1, this.q5p_1.q34(), VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_1 = this.s5p_1;
              if (tmp_1 instanceof ReadChannelContent) {
                var tmp_2 = this;
                var responseChannel = new ByteChannel();
                var content = this.q5p_1.t34();
                copyToBoth(content, this.r5p_1, responseChannel);
                tmp_2.t5p_1 = new LoggedContent(this.q5p_1, responseChannel);
                this.l9_1 = 5;
                continue $sm;
              } else {
                var tmp_3 = this.s5p_1;
                if (tmp_3 instanceof WriteChannelContent) {
                  var tmp_4 = this;
                  var responseChannel_0 = new ByteChannel();
                  var content_0 = toReadChannel(this.q5p_1);
                  copyToBoth(content_0, this.r5p_1, responseChannel_0);
                  tmp_4.t5p_1 = new LoggedContent(this.q5p_1, responseChannel_0);
                  this.l9_1 = 5;
                  continue $sm;
                } else {
                  var tmp_5 = this.s5p_1;
                  if (tmp_5 instanceof ContentWrapper) {
                    this.u5p_1 = this.q5p_1;
                    this.l9_1 = 2;
                    suspendResult = observe(this.q5p_1.z34(), this.r5p_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    var tmp_6;
                    var tmp_7 = this.s5p_1;
                    if (tmp_7 instanceof NoContent) {
                      tmp_6 = true;
                    } else {
                      var tmp_8 = this.s5p_1;
                      tmp_6 = tmp_8 instanceof ProtocolUpgrade;
                    }
                    if (tmp_6) {
                      this.l9_1 = 1;
                      suspendResult = this.r5p_1.f1m(this);
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
            this.t5p_1 = this.q5p_1;
            this.l9_1 = 5;
            continue $sm;
          case 2:
            this.v5p_1 = suspendResult;
            this.t5p_1 = this.u5p_1.a35(this.v5p_1);
            this.l9_1 = 5;
            continue $sm;
          case 3:
            this.l9_1 = 4;
            suspendResult = this.r5p_1.f1m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.t5p_1 = this.q5p_1;
            this.l9_1 = 5;
            continue $sm;
          case 5:
            return this.t5p_1;
          case 6:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 6) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
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
  protoOf(MDCContextElement).ka = get;
  protoOf(MDCContextElement).dj = fold;
  protoOf(MDCContextElement).cj = minusKey;
  protoOf(MDCContextElement).ej = plus;
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
  _.$_$.b = Companion_instance;
  _.$_$.c = get_DEFAULT;
  _.$_$.d = get_Logging;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-logging.js.map
