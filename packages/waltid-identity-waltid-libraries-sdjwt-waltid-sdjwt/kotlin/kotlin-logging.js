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
  var Unit_instance = kotlin_kotlin.$_$.r3;
  var VOID = kotlin_kotlin.$_$.c;
  var protoOf = kotlin_kotlin.$_$.a8;
  var initMetadataForInterface = kotlin_kotlin.$_$.i7;
  var initMetadataForClass = kotlin_kotlin.$_$.f7;
  var initMetadataForObject = kotlin_kotlin.$_$.k7;
  var Enum = kotlin_kotlin.$_$.ba;
  var toString = kotlin_kotlin.$_$.hb;
  var Exception = kotlin_kotlin.$_$.da;
  var equals = kotlin_kotlin.$_$.a7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var objectCreate = kotlin_kotlin.$_$.z7;
  var hashCode = kotlin_kotlin.$_$.e7;
  var getStringHashCode = kotlin_kotlin.$_$.d7;
  var THROW_CCE = kotlin_kotlin.$_$.ia;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.db;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.x;
  var stackTraceToString = kotlin_kotlin.$_$.fb;
  var split = kotlin_kotlin.$_$.f9;
  var substringBefore = kotlin_kotlin.$_$.k9;
  var substringAfterLast = kotlin_kotlin.$_$.h9;
  var contains = kotlin_kotlin.$_$.s8;
  //endregion
  //region block: pre-declaration
  function trace(message) {
    var tmp = Level_TRACE_getInstance();
    return this.b1j(tmp, VOID, KLogger$trace$lambda(message));
  }
  function at$default(level, marker, block, $super) {
    marker = marker === VOID ? null : marker;
    var tmp;
    if ($super === VOID) {
      this.c1j(level, marker, block);
      tmp = Unit_instance;
    } else {
      tmp = $super.c1j.call(this, level, marker, block);
    }
    return tmp;
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
      $this$at.v1i_1 = toStringSafe($message);
      return Unit_instance;
    };
  }
  function KLogger() {
  }
  function KLoggingEventBuilder() {
    this.v1i_1 = null;
    this.w1i_1 = null;
    this.x1i_1 = null;
    this.y1i_1 = null;
    this.z1i_1 = null;
  }
  function KotlinLogging() {
  }
  protoOf(KotlinLogging).d1j = function (func) {
    return this.f1j(KLoggerNameResolver_instance.e1j(func));
  };
  protoOf(KotlinLogging).f1j = function (name) {
    return KLoggerFactory_instance.f1j(name);
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
    this.i1j_1 = levelInt;
    this.j1j_1 = levelStr;
  }
  protoOf(Level).toString = function () {
    return this.j1j_1;
  };
  function Level_TRACE_getInstance() {
    Level_initEntries();
    return Level_TRACE_instance;
  }
  function Level_INFO_getInstance() {
    Level_initEntries();
    return Level_INFO_instance;
  }
  function toStringSafe(_this__u8e3s4) {
    var tmp;
    try {
      tmp = toString(_this__u8e3s4());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = DefaultErrorMessageProducer_instance.k1j(e);
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function DefaultErrorMessageProducer() {
  }
  protoOf(DefaultErrorMessageProducer).k1j = function (e) {
    return 'Log message invocation failed: ' + e.toString();
  };
  var DefaultErrorMessageProducer_instance;
  function DefaultErrorMessageProducer_getInstance() {
    return DefaultErrorMessageProducer_instance;
  }
  function FormattingAppender() {
  }
  protoOf(FormattingAppender).m1j = function (loggingEvent) {
    // Inline function 'kotlin.let' call
    var it = KotlinLoggingConfiguration_getInstance().o1j_1.q1j(loggingEvent);
    this.l1j(loggingEvent, it);
  };
  function prefix($this, level, loggerName) {
    var tmp;
    if ($this.r1j_1) {
      tmp = level.b2_1 + ': [' + loggerName + '] ';
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
    this.r1j_1 = includePrefix;
  }
  protoOf(DefaultMessageFormatter).q1j = function (loggingEvent) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.p7(prefix(this, loggingEvent.s1j_1, loggingEvent.u1j_1));
    var tmp0_safe_receiver = loggingEvent.t1j_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1j();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.p7(tmp1_safe_receiver);
      this_0.p7(' ');
    }
    this_0.p7(loggingEvent.v1j_1);
    this_0.p7(throwableToString(this, loggingEvent.w1j_1));
    return this_0.toString();
  };
  function KLoggingEvent_init_$Init$(level, marker, loggerName, eventBuilder, $this) {
    KLoggingEvent.call($this, level, marker, loggerName, eventBuilder.v1i_1, eventBuilder.w1i_1, eventBuilder.x1i_1);
    return $this;
  }
  function KLoggingEvent_init_$Create$(level, marker, loggerName, eventBuilder) {
    return KLoggingEvent_init_$Init$(level, marker, loggerName, eventBuilder, objectCreate(protoOf(KLoggingEvent)));
  }
  function KLoggingEvent(level, marker, loggerName, message, cause, payload) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    payload = payload === VOID ? null : payload;
    this.s1j_1 = level;
    this.t1j_1 = marker;
    this.u1j_1 = loggerName;
    this.v1j_1 = message;
    this.w1j_1 = cause;
    this.x1j_1 = payload;
  }
  protoOf(KLoggingEvent).toString = function () {
    return 'KLoggingEvent(level=' + this.s1j_1.toString() + ', marker=' + toString(this.t1j_1) + ', loggerName=' + this.u1j_1 + ', message=' + this.v1j_1 + ', cause=' + toString(this.w1j_1) + ', payload=' + toString(this.x1j_1) + ')';
  };
  protoOf(KLoggingEvent).hashCode = function () {
    var result = this.s1j_1.hashCode();
    result = imul(result, 31) + (this.t1j_1 == null ? 0 : hashCode(this.t1j_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.u1j_1) | 0;
    result = imul(result, 31) + (this.v1j_1 == null ? 0 : getStringHashCode(this.v1j_1)) | 0;
    result = imul(result, 31) + (this.w1j_1 == null ? 0 : hashCode(this.w1j_1)) | 0;
    result = imul(result, 31) + (this.x1j_1 == null ? 0 : hashCode(this.x1j_1)) | 0;
    return result;
  };
  protoOf(KLoggingEvent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KLoggingEvent))
      return false;
    var tmp0_other_with_cast = other instanceof KLoggingEvent ? other : THROW_CCE();
    if (!this.s1j_1.equals(tmp0_other_with_cast.s1j_1))
      return false;
    if (!equals(this.t1j_1, tmp0_other_with_cast.t1j_1))
      return false;
    if (!(this.u1j_1 === tmp0_other_with_cast.u1j_1))
      return false;
    if (!(this.v1j_1 == tmp0_other_with_cast.v1j_1))
      return false;
    if (!equals(this.w1j_1, tmp0_other_with_cast.w1j_1))
      return false;
    if (!equals(this.x1j_1, tmp0_other_with_cast.x1j_1))
      return false;
    return true;
  };
  function isLoggingEnabled(_this__u8e3s4) {
    return _this__u8e3s4.c2_1 >= KotlinLoggingConfiguration_getInstance().n1j_1.c2_1;
  }
  function KLoggerDirect(name) {
    this.z1j_1 = name;
  }
  protoOf(KLoggerDirect).c1j = function (level, marker, block) {
    if (this.a1k(level, marker)) {
      // Inline function 'kotlin.apply' call
      var this_0 = new KLoggingEventBuilder();
      block(this_0);
      // Inline function 'kotlin.run' call
      if (level.c2_1 !== 5) {
        KotlinLoggingConfiguration_getInstance().p1j_1.m1j(KLoggingEvent_init_$Create$(level, marker, this.z1j_1, this_0));
      }
    }
  };
  protoOf(KLoggerDirect).a1k = function (level, marker) {
    return isLoggingEnabled(level);
  };
  function KLoggerFactory() {
  }
  protoOf(KLoggerFactory).f1j = function (name) {
    return new KLoggerDirect(name);
  };
  var KLoggerFactory_instance;
  function KLoggerFactory_getInstance() {
    return KLoggerFactory_instance;
  }
  function ConsoleOutputAppender() {
    FormattingAppender.call(this);
  }
  protoOf(ConsoleOutputAppender).l1j = function (loggingEvent, formattedMessage) {
    switch (loggingEvent.s1j_1.c2_1) {
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
    this.n1j_1 = Level_INFO_getInstance();
    this.o1j_1 = new DefaultMessageFormatter(true);
    this.p1j_1 = new ConsoleOutputAppender();
  }
  var KotlinLoggingConfiguration_instance;
  function KotlinLoggingConfiguration_getInstance() {
    if (KotlinLoggingConfiguration_instance == null)
      new KotlinLoggingConfiguration();
    return KotlinLoggingConfiguration_instance;
  }
  function KLoggerNameResolver() {
  }
  protoOf(KLoggerNameResolver).e1j = function (func) {
    var found = false;
    var exception = Exception_init_$Create$();
    var _iterator__ex2g4s = split(stackTraceToString(exception), ['\n']).f();
    while (_iterator__ex2g4s.g()) {
      var line = _iterator__ex2g4s.h();
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
  protoOf(KLoggerDirect).b1j = at$default;
  protoOf(KLoggerDirect).a1j = trace;
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
