(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-io.js', './ktor-ktor-http.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-io.js'), require('./ktor-ktor-http.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-shared-ktor-serialization'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-shared-ktor-serialization'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-shared-ktor-serialization'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-shared-ktor-serialization'.");
    }
    globalThis['ktor-ktor-shared-ktor-serialization'] = factory(typeof globalThis['ktor-ktor-shared-ktor-serialization'] === 'undefined' ? {} : globalThis['ktor-ktor-shared-ktor-serialization'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-io'], globalThis['ktor-ktor-http'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_io, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Exception = kotlin_kotlin.$_$.zg;
  var VOID = kotlin_kotlin.$_$.j;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.eb;
  var protoOf = kotlin_kotlin.$_$.wc;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var initMetadataForInterface = kotlin_kotlin.$_$.wb;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var parseAndSortHeader = kotlin_io_ktor_ktor_http.$_$.q1;
  var forName = kotlin_io_ktor_ktor_io.$_$.u;
  var isSupported = kotlin_io_ktor_ktor_io.$_$.v;
  var equals = kotlin_kotlin.$_$.mb;
  var FunctionAdapter = kotlin_kotlin.$_$.ab;
  var isInterface = kotlin_kotlin.$_$.hc;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var hashCode = kotlin_kotlin.$_$.rb;
  var CoroutineImpl = kotlin_kotlin.$_$.wa;
  var THROW_CCE = kotlin_kotlin.$_$.ih;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.fa;
  var initMetadataForLambda = kotlin_kotlin.$_$.xb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ub;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ContentConvertException, 'ContentConvertException', VOID, Exception);
  initMetadataForClass(JsonConvertException, 'JsonConvertException', VOID, ContentConvertException);
  function register$default(contentType, converter, configuration, $super) {
    var tmp;
    if (configuration === VOID) {
      tmp = Configuration$register$lambda;
    } else {
      tmp = configuration;
    }
    configuration = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.j3d(contentType, converter, configuration);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.j3d.call(this, contentType, converter, configuration);
    }
    return tmp_0;
  }
  initMetadataForInterface(Configuration, 'Configuration');
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(deserialize$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($deserializeCOROUTINE$0, CoroutineImpl);
  //endregion
  function ContentConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    Exception_init_$Init$(message, cause, this);
    captureStack(this, ContentConvertException);
  }
  function JsonConvertException(message, cause) {
    cause = cause === VOID ? null : cause;
    ContentConvertException.call(this, message, cause);
    captureStack(this, JsonConvertException);
  }
  function deserialize(_this__u8e3s4, body, typeInfo, charset, $completion) {
    var tmp = new $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function suitableCharset(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().d1x_1 : defaultCharset;
    var tmp0_elvis_lhs = suitableCharsetOrNull(_this__u8e3s4, defaultCharset);
    return tmp0_elvis_lhs == null ? defaultCharset : tmp0_elvis_lhs;
  }
  function Configuration$register$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function Configuration() {
  }
  function suitableCharsetOrNull(_this__u8e3s4, defaultCharset) {
    defaultCharset = defaultCharset === VOID ? Charsets_getInstance().d1x_1 : defaultCharset;
    var _iterator__ex2g4s = parseAndSortHeader(_this__u8e3s4.af(HttpHeaders_getInstance().l2v_1)).p();
    while (_iterator__ex2g4s.q()) {
      var charset = _iterator__ex2g4s.r().dc();
      if (charset === '*')
        return defaultCharset;
      else if (isSupported(Charsets_getInstance(), charset))
        return forName(Charsets_getInstance(), charset);
    }
    return null;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.l3d_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).c1b = function (value, $completion) {
    return this.l3d_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).s3 = function () {
    return this.l3d_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.s3());
  };
  function deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
    this.u3d_1 = $$this$unsafeFlow;
    this.v3d_1 = $charset;
    this.w3d_1 = $typeInfo;
    this.x3d_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$o$collect$slambda).g3e = function (value, $completion) {
    var tmp = this.ja(value, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(deserialize$o$collect$slambda).ua = function (p1, $completion) {
    return this.g3e((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$o$collect$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.z3d_1 = this.u3d_1;
            var tmp_1 = this;
            tmp_1.a3e_1 = this.y3d_1;
            this.b3e_1 = this.z3d_1;
            this.c3e_1 = this.a3e_1;
            var tmp_2 = this;
            tmp_2.d3e_1 = this.c3e_1;
            this.e3e_1 = this.d3e_1;
            this.m9_1 = 1;
            suspendResult = this.e3e_1.h3e(this.v3d_1, this.w3d_1, this.x3d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f3e_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.b3e_1.c1b(this.f3e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.p9_1;
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
  protoOf(deserialize$o$collect$slambda).ja = function (value, completion) {
    var i = new deserialize$o$collect$slambda(this.u3d_1, this.v3d_1, this.w3d_1, this.x3d_1, completion);
    i.y3d_1 = value;
    return i;
  };
  function deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation) {
    var i = new deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $body, resultContinuation);
    var l = function (value, $completion) {
      return i.g3e(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q3e_1 = _this__u8e3s4;
    this.r3e_1 = collector;
  }
  protoOf($collectCOROUTINE$1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            var tmp_0 = this;
            tmp_0.s3e_1 = this.r3e_1;
            this.t3e_1 = this.s3e_1;
            this.m9_1 = 1;
            var tmp_1 = deserialize$o$collect$slambda_0(this.t3e_1, this.q3e_1.v3e_1, this.q3e_1.w3e_1, this.q3e_1.x3e_1, null);
            suspendResult = this.q3e_1.u3e_1.e1b(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  function deserialize$$inlined$map$1($this, $charset, $typeInfo, $body) {
    this.u3e_1 = $this;
    this.v3e_1 = $charset;
    this.w3e_1 = $typeInfo;
    this.x3e_1 = $body;
  }
  protoOf(deserialize$$inlined$map$1).d1b = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$1(this, collector, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(deserialize$$inlined$map$1).e1b = function (collector, $completion) {
    return this.d1b(collector, $completion);
  };
  function deserialize$slambda($body, resultContinuation) {
    this.g3f_1 = $body;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(deserialize$slambda).i3f = function (it, $completion) {
    var tmp = this.ja(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(deserialize$slambda).ua = function (p1, $completion) {
    return this.i3f((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(deserialize$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return !(this.h3f_1 == null) || this.g3f_1.o1m();
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(deserialize$slambda).ja = function (it, completion) {
    var i = new deserialize$slambda(this.g3f_1, completion);
    i.h3f_1 = it;
    return i;
  };
  function deserialize$slambda_0($body, resultContinuation) {
    var i = new deserialize$slambda($body, resultContinuation);
    var l = function (it, $completion) {
      return i.i3f(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $deserializeCOROUTINE$0(_this__u8e3s4, body, typeInfo, charset, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f3d_1 = _this__u8e3s4;
    this.g3d_1 = body;
    this.h3d_1 = typeInfo;
    this.i3d_1 = charset;
  }
  protoOf($deserializeCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            var this_0 = asFlow(this.f3d_1);
            var tmp_0 = new deserialize$$inlined$map$1(this_0, this.i3d_1, this.h3d_1, this.g3d_1);
            suspendResult = firstOrNull(tmp_0, deserialize$slambda_0(this.g3d_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            var tmp_1;
            if (!(result == null)) {
              tmp_1 = result;
            } else {
              if (!this.g3d_1.o1m()) {
                tmp_1 = this.g3d_1;
              } else {
                var tmp0_safe_receiver = this.h3d_1.r2s_1;
                if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yc()) === true) {
                  tmp_1 = NullBody_instance;
                } else {
                  throw new ContentConvertException('No suitable converter found for ' + this.h3d_1.toString());
                }
              }
            }

            return tmp_1;
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
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = deserialize;
  _.$_$.b = register$default;
  _.$_$.c = Configuration;
  _.$_$.d = JsonConvertException;
  _.$_$.e = suitableCharset;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization.js.map
