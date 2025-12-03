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
  var Unit_instance = kotlin_kotlin.$_$.a6;
  var VOID = kotlin_kotlin.$_$.j;
  var protoOf = kotlin_kotlin.$_$.gd;
  var initMetadataForInterface = kotlin_kotlin.$_$.gc;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  var initMetadataForObject = kotlin_kotlin.$_$.ic;
  var Enum = kotlin_kotlin.$_$.oh;
  var toString = kotlin_kotlin.$_$.fj;
  var Exception = kotlin_kotlin.$_$.qh;
  var equals = kotlin_kotlin.$_$.wb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var objectCreate = kotlin_kotlin.$_$.fd;
  var hashCode = kotlin_kotlin.$_$.bc;
  var getStringHashCode = kotlin_kotlin.$_$.ac;
  var THROW_CCE = kotlin_kotlin.$_$.ai;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.aj;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.s1;
  var stackTraceToString = kotlin_kotlin.$_$.cj;
  var split = kotlin_kotlin.$_$.vf;
  var substringBefore = kotlin_kotlin.$_$.dg;
  var substringAfterLast = kotlin_kotlin.$_$.ag;
  var contains = kotlin_kotlin.$_$.ne;
  //endregion
  //region block: pre-declaration
  function trace(message) {
    var tmp = Level_TRACE_getInstance();
    return this.i6e(tmp, VOID, KLogger$trace$lambda(message));
  }
  function debug(message) {
    var tmp = Level_DEBUG_getInstance();
    return this.i6e(tmp, VOID, KLogger$debug$lambda(message));
  }
  function warn(message) {
    var tmp = Level_WARN_getInstance();
    return this.i6e(tmp, VOID, KLogger$warn$lambda(message));
  }
  function error(message) {
    var tmp = Level_ERROR_getInstance();
    return this.i6e(tmp, VOID, KLogger$error$lambda(message));
  }
  function at$default(level, marker, block, $super) {
    marker = marker === VOID ? null : marker;
    var tmp;
    if ($super === VOID) {
      this.m6e(level, marker, block);
      tmp = Unit_instance;
    } else {
      tmp = $super.m6e.call(this, level, marker, block);
    }
    return tmp;
  }
  function isTraceEnabled(marker) {
    return this.o6e(Level_TRACE_getInstance(), marker);
  }
  function isTraceEnabled$default(marker, $super) {
    marker = marker === VOID ? null : marker;
    return $super === VOID ? this.n6e(marker) : isTraceEnabled(marker);
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
      $this$at.c6e_1 = toStringSafe($message);
      return Unit_instance;
    };
  }
  function KLogger$debug$lambda($message) {
    return function ($this$at) {
      $this$at.c6e_1 = toStringSafe($message);
      return Unit_instance;
    };
  }
  function KLogger$warn$lambda($message) {
    return function ($this$at) {
      $this$at.c6e_1 = toStringSafe($message);
      return Unit_instance;
    };
  }
  function KLogger$error$lambda($message) {
    return function ($this$at) {
      $this$at.c6e_1 = toStringSafe($message);
      return Unit_instance;
    };
  }
  function KLogger() {
  }
  function KLoggingEventBuilder() {
    this.c6e_1 = null;
    this.d6e_1 = null;
    this.e6e_1 = null;
    this.f6e_1 = null;
    this.g6e_1 = null;
  }
  function KotlinLogging() {
  }
  protoOf(KotlinLogging).q6e = function (func) {
    return this.s6e(KLoggerNameResolver_instance.r6e(func));
  };
  protoOf(KotlinLogging).s6e = function (name) {
    return KLoggerFactory_instance.s6e(name);
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
    this.v6e_1 = levelInt;
    this.w6e_1 = levelStr;
  }
  protoOf(Level).toString = function () {
    return this.w6e_1;
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
        tmp_0 = DefaultErrorMessageProducer_instance.x6e(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function DefaultErrorMessageProducer() {
  }
  protoOf(DefaultErrorMessageProducer).x6e = function (e) {
    return 'Log message invocation failed: ' + e.toString();
  };
  var DefaultErrorMessageProducer_instance;
  function DefaultErrorMessageProducer_getInstance() {
    return DefaultErrorMessageProducer_instance;
  }
  function FormattingAppender() {
  }
  protoOf(FormattingAppender).z6e = function (loggingEvent) {
    // Inline function 'kotlin.let' call
    var it = KotlinLoggingConfiguration_getInstance().b6f_1.d6f(loggingEvent);
    this.y6e(loggingEvent, it);
  };
  function prefix($this, level, loggerName) {
    var tmp;
    if ($this.e6f_1) {
      tmp = level.q2_1 + ': [' + loggerName + '] ';
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
    this.e6f_1 = includePrefix;
  }
  protoOf(DefaultMessageFormatter).d6f = function (loggingEvent) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.x8(prefix(this, loggingEvent.f6f_1, loggingEvent.h6f_1));
    var tmp0_safe_receiver = loggingEvent.g6f_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l6f();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.x8(tmp1_safe_receiver);
      this_0.x8(' ');
    }
    this_0.x8(loggingEvent.i6f_1);
    this_0.x8(throwableToString(this, loggingEvent.j6f_1));
    return this_0.toString();
  };
  function KLoggingEvent_init_$Init$(level, marker, loggerName, eventBuilder, $this) {
    KLoggingEvent.call($this, level, marker, loggerName, eventBuilder.c6e_1, eventBuilder.d6e_1, eventBuilder.e6e_1);
    return $this;
  }
  function KLoggingEvent_init_$Create$(level, marker, loggerName, eventBuilder) {
    return KLoggingEvent_init_$Init$(level, marker, loggerName, eventBuilder, objectCreate(protoOf(KLoggingEvent)));
  }
  function KLoggingEvent(level, marker, loggerName, message, cause, payload) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    payload = payload === VOID ? null : payload;
    this.f6f_1 = level;
    this.g6f_1 = marker;
    this.h6f_1 = loggerName;
    this.i6f_1 = message;
    this.j6f_1 = cause;
    this.k6f_1 = payload;
  }
  protoOf(KLoggingEvent).toString = function () {
    return 'KLoggingEvent(level=' + this.f6f_1.toString() + ', marker=' + toString(this.g6f_1) + ', loggerName=' + this.h6f_1 + ', message=' + this.i6f_1 + ', cause=' + toString(this.j6f_1) + ', payload=' + toString(this.k6f_1) + ')';
  };
  protoOf(KLoggingEvent).hashCode = function () {
    var result = this.f6f_1.hashCode();
    result = imul(result, 31) + (this.g6f_1 == null ? 0 : hashCode(this.g6f_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.h6f_1) | 0;
    result = imul(result, 31) + (this.i6f_1 == null ? 0 : getStringHashCode(this.i6f_1)) | 0;
    result = imul(result, 31) + (this.j6f_1 == null ? 0 : hashCode(this.j6f_1)) | 0;
    result = imul(result, 31) + (this.k6f_1 == null ? 0 : hashCode(this.k6f_1)) | 0;
    return result;
  };
  protoOf(KLoggingEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KLoggingEvent))
      return false;
    var tmp0_other_with_cast = other instanceof KLoggingEvent ? other : THROW_CCE();
    if (!this.f6f_1.equals(tmp0_other_with_cast.f6f_1))
      return false;
    if (!equals(this.g6f_1, tmp0_other_with_cast.g6f_1))
      return false;
    if (!(this.h6f_1 === tmp0_other_with_cast.h6f_1))
      return false;
    if (!(this.i6f_1 == tmp0_other_with_cast.i6f_1))
      return false;
    if (!equals(this.j6f_1, tmp0_other_with_cast.j6f_1))
      return false;
    if (!equals(this.k6f_1, tmp0_other_with_cast.k6f_1))
      return false;
    return true;
  };
  function isLoggingEnabled(_this__u8e3s4) {
    return _this__u8e3s4.r2_1 >= KotlinLoggingConfiguration_getInstance().a6f_1.r2_1;
  }
  function KLoggerDirect(name) {
    this.m6f_1 = name;
  }
  protoOf(KLoggerDirect).m6e = function (level, marker, block) {
    if (this.o6e(level, marker)) {
      // Inline function 'kotlin.apply' call
      var this_0 = new KLoggingEventBuilder();
      block(this_0);
      // Inline function 'kotlin.run' call
      if (level.r2_1 !== 5) {
        KotlinLoggingConfiguration_getInstance().c6f_1.z6e(KLoggingEvent_init_$Create$(level, marker, this.m6f_1, this_0));
      }
    }
  };
  protoOf(KLoggerDirect).o6e = function (level, marker) {
    return isLoggingEnabled(level);
  };
  function KLoggerFactory() {
  }
  protoOf(KLoggerFactory).s6e = function (name) {
    return new KLoggerDirect(name);
  };
  var KLoggerFactory_instance;
  function KLoggerFactory_getInstance() {
    return KLoggerFactory_instance;
  }
  function ConsoleOutputAppender() {
    FormattingAppender.call(this);
  }
  protoOf(ConsoleOutputAppender).y6e = function (loggingEvent, formattedMessage) {
    switch (loggingEvent.f6f_1.r2_1) {
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
    this.a6f_1 = Level_INFO_getInstance();
    this.b6f_1 = new DefaultMessageFormatter(true);
    this.c6f_1 = new ConsoleOutputAppender();
  }
  var KotlinLoggingConfiguration_instance;
  function KotlinLoggingConfiguration_getInstance() {
    if (KotlinLoggingConfiguration_instance == null)
      new KotlinLoggingConfiguration();
    return KotlinLoggingConfiguration_instance;
  }
  function KLoggerNameResolver() {
  }
  protoOf(KLoggerNameResolver).r6e = function (func) {
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
  protoOf(KLoggerDirect).i6e = at$default;
  protoOf(KLoggerDirect).h6e = trace;
  protoOf(KLoggerDirect).j6e = debug;
  protoOf(KLoggerDirect).k6e = warn;
  protoOf(KLoggerDirect).l6e = error;
  protoOf(KLoggerDirect).n6e = isTraceEnabled;
  protoOf(KLoggerDirect).p6e = isTraceEnabled$default;
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
