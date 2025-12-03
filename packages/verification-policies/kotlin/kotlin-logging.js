(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-logging'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-logging'.");
    }
    globalThis['kotlin-logging'] = factory(typeof globalThis['kotlin-logging'] === 'undefined' ? {} : globalThis['kotlin-logging'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var VOID = kotlin_kotlin.$_$.j;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var Enum = kotlin_kotlin.$_$.xi;
  var toString = kotlin_kotlin.$_$.pk;
  var Exception = kotlin_kotlin.$_$.zi;
  var equals = kotlin_kotlin.$_$.rc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r1;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var hashCode = kotlin_kotlin.$_$.wc;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kk;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.x1;
  var stackTraceToString = kotlin_kotlin.$_$.mk;
  var split = kotlin_kotlin.$_$.dh;
  var substringBefore = kotlin_kotlin.$_$.lh;
  var substringAfterLast = kotlin_kotlin.$_$.ih;
  var contains = kotlin_kotlin.$_$.pf;
  //endregion
  //region block: pre-declaration
  function trace(message) {
    var tmp = Level_TRACE_getInstance();
    return this.m6g(tmp, VOID, KLogger$trace$lambda(message));
  }
  function debug(message) {
    var tmp = Level_DEBUG_getInstance();
    return this.m6g(tmp, VOID, KLogger$debug$lambda(message));
  }
  function info(message) {
    var tmp = Level_INFO_getInstance();
    return this.m6g(tmp, VOID, KLogger$info$lambda(message));
  }
  function warn(message) {
    var tmp = Level_WARN_getInstance();
    return this.m6g(tmp, VOID, KLogger$warn$lambda(message));
  }
  function error(message) {
    var tmp = Level_ERROR_getInstance();
    return this.m6g(tmp, VOID, KLogger$error$lambda(message));
  }
  function error_0(throwable, message) {
    var tmp = Level_ERROR_getInstance();
    return this.m6g(tmp, VOID, KLogger$error$lambda_0(message, throwable));
  }
  function at$default(level, marker, block, $super) {
    marker = marker === VOID ? null : marker;
    var tmp;
    if ($super === VOID) {
      this.s6g(level, marker, block);
      tmp = Unit_instance;
    } else {
      tmp = $super.s6g.call(this, level, marker, block);
    }
    return tmp;
  }
  function isTraceEnabled(marker) {
    return this.u6g(Level_TRACE_getInstance(), marker);
  }
  function isTraceEnabled$default(marker, $super) {
    marker = marker === VOID ? null : marker;
    return $super === VOID ? this.t6g(marker) : isTraceEnabled(marker);
  }
  initMetadataForInterface(KLogger, 'KLogger');
  initMetadataForClass(KLoggingEventBuilder, 'KLoggingEventBuilder', KLoggingEventBuilder);
  initMetadataForObject(KotlinLogging, 'KotlinLogging');
  initMetadataForClass(Level, 'Level', VOID, Enum);
  initMetadataForObject(DefaultErrorMessageProducer, 'DefaultErrorMessageProducer');
  initMetadataForClass(FormattingAppender, 'FormattingAppender');
  initMetadataForClass(DefaultMessageFormatter, 'DefaultMessageFormatter', DefaultMessageFormatter);
  initMetadataForClass(KLoggingEvent, 'KLoggingEvent');
  initMetadataForClass(KLoggerDirect, 'KLoggerDirect', VOID, VOID, [KLogger]);
  initMetadataForObject(KLoggerFactory, 'KLoggerFactory');
  initMetadataForClass(ConsoleOutputAppender, 'ConsoleOutputAppender', ConsoleOutputAppender, FormattingAppender);
  initMetadataForObject(KotlinLoggingConfiguration, 'KotlinLoggingConfiguration');
  initMetadataForObject(KLoggerNameResolver, 'KLoggerNameResolver');
  //endregion
  function KLogger$trace$lambda($message) {
    return function ($this$at) {
      $this$at.g6g_1 = toStringSafe($message);
      return Unit_instance;
    };
  }
  function KLogger$debug$lambda($message) {
    return function ($this$at) {
      $this$at.g6g_1 = toStringSafe($message);
      return Unit_instance;
    };
  }
  function KLogger$info$lambda($message) {
    return function ($this$at) {
      $this$at.g6g_1 = toStringSafe($message);
      return Unit_instance;
    };
  }
  function KLogger$warn$lambda($message) {
    return function ($this$at) {
      $this$at.g6g_1 = toStringSafe($message);
      return Unit_instance;
    };
  }
  function KLogger$error$lambda($message) {
    return function ($this$at) {
      $this$at.g6g_1 = toStringSafe($message);
      return Unit_instance;
    };
  }
  function KLogger$error$lambda_0($message, $throwable) {
    return function ($this$at) {
      $this$at.g6g_1 = toStringSafe($message);
      $this$at.h6g_1 = $throwable;
      return Unit_instance;
    };
  }
  function KLogger() {
  }
  function KLoggingEventBuilder() {
    this.g6g_1 = null;
    this.h6g_1 = null;
    this.i6g_1 = null;
    this.j6g_1 = null;
    this.k6g_1 = null;
  }
  function KotlinLogging() {
  }
  protoOf(KotlinLogging).w6g = function (func) {
    return this.y6g(KLoggerNameResolver_instance.x6g(func));
  };
  protoOf(KotlinLogging).y6g = function (name) {
    return KLoggerFactory_instance.y6g(name);
  };
  var KotlinLogging_instance;
  function KotlinLogging_getInstance() {
    return KotlinLogging_instance;
  }
  var Level_TRACE_instance;
  var Level_DEBUG_instance;
  var Level_INFO_instance;
  var Level_WARN_instance;
  var Level_ERROR_instance;
  var Level_OFF_instance;
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_instance;
    Level_entriesInitialized = true;
    Level_TRACE_instance = new Level('TRACE', 0, 0, 'TRACE');
    Level_DEBUG_instance = new Level('DEBUG', 1, 10, 'DEBUG');
    Level_INFO_instance = new Level('INFO', 2, 20, 'INFO');
    Level_WARN_instance = new Level('WARN', 3, 30, 'WARN');
    Level_ERROR_instance = new Level('ERROR', 4, 40, 'ERROR');
    Level_OFF_instance = new Level('OFF', 5, 50, 'OFF');
  }
  function Level(name, ordinal, levelInt, levelStr) {
    Enum.call(this, name, ordinal);
    this.b6h_1 = levelInt;
    this.c6h_1 = levelStr;
  }
  protoOf(Level).toString = function () {
    return this.c6h_1;
  };
  function Level_TRACE_getInstance() {
    Level_initEntries();
    return Level_TRACE_instance;
  }
  function Level_DEBUG_getInstance() {
    Level_initEntries();
    return Level_DEBUG_instance;
  }
  function Level_INFO_getInstance() {
    Level_initEntries();
    return Level_INFO_instance;
  }
  function Level_WARN_getInstance() {
    Level_initEntries();
    return Level_WARN_instance;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function toStringSafe(_this__u8e3s4) {
    var tmp;
    try {
      tmp = toString(_this__u8e3s4());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = DefaultErrorMessageProducer_instance.d6h(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function DefaultErrorMessageProducer() {
  }
  protoOf(DefaultErrorMessageProducer).d6h = function (e) {
    return 'Log message invocation failed: ' + e.toString();
  };
  var DefaultErrorMessageProducer_instance;
  function DefaultErrorMessageProducer_getInstance() {
    return DefaultErrorMessageProducer_instance;
  }
  function FormattingAppender() {
  }
  protoOf(FormattingAppender).f6h = function (loggingEvent) {
    // Inline function 'kotlin.let' call
    var it = KotlinLoggingConfiguration_getInstance().h6h_1.j6h(loggingEvent);
    this.e6h(loggingEvent, it);
  };
  function prefix($this, level, loggerName) {
    var tmp;
    if ($this.k6h_1) {
      tmp = level.s2_1 + ': [' + loggerName + '] ';
    } else {
      tmp = '';
    }
    return tmp;
  }
  function throwableToString($this, _this__u8e3s4) {
    return createThrowableMsg($this, '', _this__u8e3s4);
  }
  function createThrowableMsg($this, msg, throwable) {
    var $this_0 = $this;
    var msg_0 = msg;
    var throwable_0 = throwable;
    $l$1: do {
      $l$0: do {
        var tmp;
        if (throwable_0 == null || equals(throwable_0.cause, throwable_0)) {
          tmp = msg_0;
        } else {
          var tmp0 = $this_0;
          var tmp1 = msg_0 + ", Caused by: '" + throwable_0.message + "'";
          var tmp2 = throwable_0.cause;
          $this_0 = tmp0;
          msg_0 = tmp1;
          throwable_0 = tmp2;
          continue $l$0;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function DefaultMessageFormatter(includePrefix) {
    includePrefix = includePrefix === VOID ? true : includePrefix;
    this.k6h_1 = includePrefix;
  }
  protoOf(DefaultMessageFormatter).j6h = function (loggingEvent) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.y8(prefix(this, loggingEvent.l6h_1, loggingEvent.n6h_1));
    var tmp0_safe_receiver = loggingEvent.m6h_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r6h();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.y8(tmp1_safe_receiver);
      this_0.y8(' ');
    }
    this_0.y8(loggingEvent.o6h_1);
    this_0.y8(throwableToString(this, loggingEvent.p6h_1));
    return this_0.toString();
  };
  function KLoggingEvent_init_$Init$(level, marker, loggerName, eventBuilder, $this) {
    KLoggingEvent.call($this, level, marker, loggerName, eventBuilder.g6g_1, eventBuilder.h6g_1, eventBuilder.i6g_1);
    return $this;
  }
  function KLoggingEvent_init_$Create$(level, marker, loggerName, eventBuilder) {
    return KLoggingEvent_init_$Init$(level, marker, loggerName, eventBuilder, objectCreate(protoOf(KLoggingEvent)));
  }
  function KLoggingEvent(level, marker, loggerName, message, cause, payload) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    payload = payload === VOID ? null : payload;
    this.l6h_1 = level;
    this.m6h_1 = marker;
    this.n6h_1 = loggerName;
    this.o6h_1 = message;
    this.p6h_1 = cause;
    this.q6h_1 = payload;
  }
  protoOf(KLoggingEvent).toString = function () {
    return 'KLoggingEvent(level=' + this.l6h_1.toString() + ', marker=' + toString(this.m6h_1) + ', loggerName=' + this.n6h_1 + ', message=' + this.o6h_1 + ', cause=' + toString(this.p6h_1) + ', payload=' + toString(this.q6h_1) + ')';
  };
  protoOf(KLoggingEvent).hashCode = function () {
    var result = this.l6h_1.hashCode();
    result = imul(result, 31) + (this.m6h_1 == null ? 0 : hashCode(this.m6h_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.n6h_1) | 0;
    result = imul(result, 31) + (this.o6h_1 == null ? 0 : getStringHashCode(this.o6h_1)) | 0;
    result = imul(result, 31) + (this.p6h_1 == null ? 0 : hashCode(this.p6h_1)) | 0;
    result = imul(result, 31) + (this.q6h_1 == null ? 0 : hashCode(this.q6h_1)) | 0;
    return result;
  };
  protoOf(KLoggingEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KLoggingEvent))
      return false;
    var tmp0_other_with_cast = other instanceof KLoggingEvent ? other : THROW_CCE();
    if (!this.l6h_1.equals(tmp0_other_with_cast.l6h_1))
      return false;
    if (!equals(this.m6h_1, tmp0_other_with_cast.m6h_1))
      return false;
    if (!(this.n6h_1 === tmp0_other_with_cast.n6h_1))
      return false;
    if (!(this.o6h_1 == tmp0_other_with_cast.o6h_1))
      return false;
    if (!equals(this.p6h_1, tmp0_other_with_cast.p6h_1))
      return false;
    if (!equals(this.q6h_1, tmp0_other_with_cast.q6h_1))
      return false;
    return true;
  };
  function isLoggingEnabled(_this__u8e3s4) {
    return _this__u8e3s4.t2_1 >= KotlinLoggingConfiguration_getInstance().g6h_1.t2_1;
  }
  function KLoggerDirect(name) {
    this.s6h_1 = name;
  }
  protoOf(KLoggerDirect).s6g = function (level, marker, block) {
    if (this.u6g(level, marker)) {
      // Inline function 'kotlin.apply' call
      var this_0 = new KLoggingEventBuilder();
      block(this_0);
      // Inline function 'kotlin.run' call
      if (level.t2_1 !== 5) {
        KotlinLoggingConfiguration_getInstance().i6h_1.f6h(KLoggingEvent_init_$Create$(level, marker, this.s6h_1, this_0));
      }
    }
  };
  protoOf(KLoggerDirect).u6g = function (level, marker) {
    return isLoggingEnabled(level);
  };
  function KLoggerFactory() {
  }
  protoOf(KLoggerFactory).y6g = function (name) {
    return new KLoggerDirect(name);
  };
  var KLoggerFactory_instance;
  function KLoggerFactory_getInstance() {
    return KLoggerFactory_instance;
  }
  function ConsoleOutputAppender() {
    FormattingAppender.call(this);
  }
  protoOf(ConsoleOutputAppender).e6h = function (loggingEvent, formattedMessage) {
    switch (loggingEvent.l6h_1.t2_1) {
      case 0:
        console.log(formattedMessage);
        break;
      case 1:
        console.log(formattedMessage);
        break;
      case 2:
        console.info(formattedMessage);
        break;
      case 3:
        console.warn(formattedMessage);
        break;
      case 4:
        console.error(formattedMessage);
        break;
      case 5:
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
  };
  function KotlinLoggingConfiguration() {
    KotlinLoggingConfiguration_instance = this;
    this.g6h_1 = Level_INFO_getInstance();
    this.h6h_1 = new DefaultMessageFormatter(true);
    this.i6h_1 = new ConsoleOutputAppender();
  }
  var KotlinLoggingConfiguration_instance;
  function KotlinLoggingConfiguration_getInstance() {
    if (KotlinLoggingConfiguration_instance == null)
      new KotlinLoggingConfiguration();
    return KotlinLoggingConfiguration_instance;
  }
  function KLoggerNameResolver() {
  }
  protoOf(KLoggerNameResolver).x6g = function (func) {
    var found = false;
    var exception = Exception_init_$Create$();
    var _iterator__ex2g4s = split(stackTraceToString(exception), ['\n']).p();
    while (_iterator__ex2g4s.q()) {
      var line = _iterator__ex2g4s.r();
      if (found) {
        return substringAfterLast(substringAfterLast(substringBefore(line, '.kt'), '.'), '/');
      }
      if (contains(line, 'at KotlinLogging')) {
        found = true;
      }
    }
    return '';
  };
  var KLoggerNameResolver_instance;
  function KLoggerNameResolver_getInstance() {
    return KLoggerNameResolver_instance;
  }
  //region block: post-declaration
  protoOf(KLoggerDirect).m6g = at$default;
  protoOf(KLoggerDirect).l6g = trace;
  protoOf(KLoggerDirect).n6g = debug;
  protoOf(KLoggerDirect).o6g = info;
  protoOf(KLoggerDirect).p6g = warn;
  protoOf(KLoggerDirect).q6g = error;
  protoOf(KLoggerDirect).r6g = error_0;
  protoOf(KLoggerDirect).t6g = isTraceEnabled;
  protoOf(KLoggerDirect).v6g = isTraceEnabled$default;
  //endregion
  //region block: init
  KotlinLogging_instance = new KotlinLogging();
  DefaultErrorMessageProducer_instance = new DefaultErrorMessageProducer();
  KLoggerFactory_instance = new KLoggerFactory();
  KLoggerNameResolver_instance = new KLoggerNameResolver();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = KotlinLogging_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-logging.js.map
