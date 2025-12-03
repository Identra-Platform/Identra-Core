(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './ktor-ktor-http.js', './kotlinx-coroutines-core.js', './ktor-ktor-io.js', './kotlinx-io-kotlinx-io-core.js', './ktor-ktor-shared-ktor-serialization.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./ktor-ktor-http.js'), require('./kotlinx-coroutines-core.js'), require('./ktor-ktor-io.js'), require('./kotlinx-io-kotlinx-io-core.js'), require('./ktor-ktor-shared-ktor-serialization.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['kotlinx-io-kotlinx-io-core'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'kotlinx-io-kotlinx-io-core' was not found. Please, check whether 'kotlinx-io-kotlinx-io-core' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    if (typeof globalThis['ktor-ktor-shared-ktor-serialization'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'. Its dependency 'ktor-ktor-shared-ktor-serialization' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'.");
    }
    globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'] = factory(typeof globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'] === 'undefined' ? {} : globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['ktor-ktor-http'], globalThis['kotlinx-coroutines-core'], globalThis['ktor-ktor-io'], globalThis['kotlinx-io-kotlinx-io-core'], globalThis['ktor-ktor-shared-ktor-serialization']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_io_ktor_ktor_http, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_io_ktor_ktor_io, kotlin_org_jetbrains_kotlinx_kotlinx_io_core, kotlin_io_ktor_ktor_serialization) {
  'use strict';
  //region block: imports
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var CoroutineImpl = kotlin_kotlin.$_$.bc;
  var protoOf = kotlin_kotlin.$_$.be;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.lb;
  var initMetadataForLambda = kotlin_kotlin.$_$.cd;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var toString = kotlin_kotlin.$_$.fe;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var isInterface = kotlin_kotlin.$_$.md;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.k;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.u1;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.u;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var equals = kotlin_kotlin.$_$.rc;
  var FunctionAdapter = kotlin_kotlin.$_$.fc;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var hashCode = kotlin_kotlin.$_$.wc;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.f;
  var discard = kotlin_io_ktor_ktor_io.$_$.a1;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var readText = kotlin_io_ktor_ktor_io.$_$.c1;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var KtMap = kotlin_kotlin.$_$.w6;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var KtSet = kotlin_kotlin.$_$.d7;
  var firstOrNull_0 = kotlin_kotlin.$_$.s8;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.y5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var isArray = kotlin_kotlin.$_$.ed;
  var KtList = kotlin_kotlin.$_$.t6;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var filterNotNull = kotlin_kotlin.$_$.p8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var singleOrNull = kotlin_kotlin.$_$.ka;
  var Collection = kotlin_kotlin.$_$.o6;
  var emptyList = kotlin_kotlin.$_$.k8;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(KotlinxSerializationConverter$serialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$2, CoroutineImpl);
  initMetadataForLambda(KotlinxSerializationConverter$deserialize$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$3, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(KotlinxSerializationConverter$serialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(KotlinxSerializationConverter$serialize$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(KotlinxSerializationConverter$deserialize$$inlined$map$1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForLambda(KotlinxSerializationConverter$deserialize$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($serializeCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($deserializeCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(KotlinxSerializationConverter, 'KotlinxSerializationConverter', VOID, VOID, VOID, [4, 3]);
  //endregion
  function extensions(format) {
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = get_providers();
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp0_safe_receiver = element.b56(format);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.n(tmp0_safe_receiver);
      }
    }
    return destination;
  }
  function serialization(_this__u8e3s4, contentType, format) {
    _this__u8e3s4.y3f(contentType, new KotlinxSerializationConverter(format));
  }
  function KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    this.k56_1 = $$this$unsafeFlow;
    this.l56_1 = $contentType;
    this.m56_1 = $charset;
    this.n56_1 = $typeInfo;
    this.o56_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).u3g = function (value, $completion) {
    var tmp = this.ka(value, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).va = function (p1, $completion) {
    return this.u3g((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.q56_1 = this.k56_1;
            var tmp_1 = this;
            tmp_1.r56_1 = this.p56_1;
            this.s56_1 = this.q56_1;
            this.t56_1 = this.r56_1;
            var tmp_2 = this;
            tmp_2.u56_1 = this.t56_1;
            this.v56_1 = this.u56_1;
            this.n9_1 = 1;
            suspendResult = this.v56_1.x56(this.l56_1, this.m56_1, this.n56_1, this.o56_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w56_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.s56_1.v1b(this.w56_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q9_1;
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
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).ka = function (value, completion) {
    var i = new KotlinxSerializationConverter$serialize$o$collect$slambda(this.k56_1, this.l56_1, this.m56_1, this.n56_1, this.o56_1, completion);
    i.p56_1 = value;
    return i;
  };
  function KotlinxSerializationConverter$serialize$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    var i = new KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation);
    var l = function (value, $completion) {
      return i.u3g(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g57_1 = _this__u8e3s4;
    this.h57_1 = collector;
  }
  protoOf($collectCOROUTINE$2).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.i57_1 = this.h57_1;
            this.j57_1 = this.i57_1;
            this.n9_1 = 1;
            var tmp_1 = KotlinxSerializationConverter$serialize$o$collect$slambda_0(this.j57_1, this.g57_1.l57_1, this.g57_1.m57_1, this.g57_1.n57_1, this.g57_1.o57_1, null);
            suspendResult = this.g57_1.k57_1.x1b(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  function KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
    this.x57_1 = $$this$unsafeFlow;
    this.y57_1 = $charset;
    this.z57_1 = $typeInfo;
    this.a58_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).u3g = function (value, $completion) {
    var tmp = this.ka(value, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).va = function (p1, $completion) {
    return this.u3g((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.c58_1 = this.x57_1;
            var tmp_1 = this;
            tmp_1.d58_1 = this.b58_1;
            this.e58_1 = this.c58_1;
            this.f58_1 = this.d58_1;
            var tmp_2 = this;
            tmp_2.g58_1 = this.f58_1;
            this.h58_1 = this.g58_1;
            this.n9_1 = 1;
            suspendResult = this.h58_1.v3g(this.y57_1, this.z57_1, this.a58_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i58_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.e58_1.v1b(this.i58_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.q9_1;
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
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).ka = function (value, completion) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda(this.x57_1, this.y57_1, this.z57_1, this.a58_1, completion);
    i.b58_1 = value;
    return i;
  };
  function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation);
    var l = function (value, $completion) {
      return i.u3g(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r58_1 = _this__u8e3s4;
    this.s58_1 = collector;
  }
  protoOf($collectCOROUTINE$3).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.t58_1 = this.s58_1;
            this.u58_1 = this.t58_1;
            this.n9_1 = 1;
            var tmp_1 = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(this.u58_1, this.r58_1.w58_1, this.r58_1.x58_1, this.r58_1.y58_1, null);
            suspendResult = this.r58_1.v58_1.x1b(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp;
    if (isInterface(format, StringFormat)) {
      var content = format.x21(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
    } else {
      if (isInterface(format, BinaryFormat)) {
        var content_0 = format.z21(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = new ByteArrayContent(content_0, contentType);
      } else {
        var message = 'Unsupported format ' + toString(format);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.z58_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).v1b = function (value, $completion) {
    return this.z58_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).u3 = function () {
    return this.z58_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u3(), other.u3());
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
    return hashCode(this.u3());
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.a59_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).v1b = function (value, $completion) {
    return this.a59_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).u3 = function () {
    return this.a59_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u3(), other.u3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.u3());
  };
  function KotlinxSerializationConverter$serialize$$inlined$map$1($this, $contentType, $charset, $typeInfo, $value) {
    this.k57_1 = $this;
    this.l57_1 = $contentType;
    this.m57_1 = $charset;
    this.n57_1 = $typeInfo;
    this.o57_1 = $value;
  }
  protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).w1b = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$2(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).x1b = function (collector, $completion) {
    return this.w1b(collector, $completion);
  };
  function KotlinxSerializationConverter$serialize$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serialize$slambda).k59 = function (it, $completion) {
    var tmp = this.l59(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).va = function (p1, $completion) {
    return this.k59((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return !(this.j59_1 == null);
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).l59 = function (it, completion) {
    var i = new KotlinxSerializationConverter$serialize$slambda(completion);
    i.j59_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$serialize$slambda_0(resultContinuation) {
    var i = new KotlinxSerializationConverter$serialize$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.k59(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KotlinxSerializationConverter$deserialize$$inlined$map$1($this, $charset, $typeInfo, $content) {
    this.v58_1 = $this;
    this.w58_1 = $charset;
    this.x58_1 = $typeInfo;
    this.y58_1 = $content;
  }
  protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).w1b = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$3(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).x1b = function (collector, $completion) {
    return this.w1b(collector, $completion);
  };
  function KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation) {
    this.u59_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$slambda).w3h = function (it, $completion) {
    var tmp = this.ka(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).va = function (p1, $completion) {
    return this.w3h((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return !(this.v59_1 == null) || this.u59_1.c1p();
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).ka = function (it, completion) {
    var i = new KotlinxSerializationConverter$deserialize$slambda(this.u59_1, completion);
    i.v59_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$deserialize$slambda_0($content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation);
    var l = function (it, $completion) {
      return i.w3h(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $serializeCOROUTINE$0(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e5a_1 = _this__u8e3s4;
    this.f5a_1 = contentType;
    this.g5a_1 = charset;
    this.h5a_1 = typeInfo;
    this.i5a_1 = value;
  }
  protoOf($serializeCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var this_0 = asFlow(this.e5a_1.k5a_1);
            var tmp_0 = new KotlinxSerializationConverter$serialize$$inlined$map$1(this_0, this.f5a_1, this.g5a_1, this.h5a_1, this.i5a_1);
            suspendResult = firstOrNull(tmp_0, KotlinxSerializationConverter$serialize$slambda_0(null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var fromExtension = suspendResult;
            if (!(fromExtension == null))
              return fromExtension;
            var tmp_1;
            try {
              tmp_1 = serializerForTypeInfo(this.e5a_1.j5a_1.w24(), this.h5a_1);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof SerializationException) {
                var cause = $p;
                tmp_2 = guessSerializer(this.i5a_1, this.e5a_1.j5a_1.w24());
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var serializer = tmp_1;
            return serializeContent(this.e5a_1, serializer, this.e5a_1.j5a_1, this.i5a_1, this.f5a_1, this.g5a_1);
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
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t5a_1 = _this__u8e3s4;
    this.u5a_1 = charset;
    this.v5a_1 = typeInfo;
    this.w5a_1 = content;
  }
  protoOf($deserializeCOROUTINE$1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            var this_0 = asFlow(this.t5a_1.k5a_1);
            var tmp_0 = new KotlinxSerializationConverter$deserialize$$inlined$map$1(this_0, this.u5a_1, this.v5a_1, this.w5a_1);
            suspendResult = firstOrNull(tmp_0, KotlinxSerializationConverter$deserialize$slambda_0(this.w5a_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x5a_1 = suspendResult;
            var tmp_1;
            if (!this.t5a_1.k5a_1.h()) {
              tmp_1 = !(this.x5a_1 == null) || this.w5a_1.c1p();
            } else {
              tmp_1 = false;
            }

            if (tmp_1)
              return this.x5a_1;
            this.y5a_1 = serializerForTypeInfo(this.t5a_1.j5a_1.w24(), this.v5a_1);
            this.n9_1 = 2;
            suspendResult = readRemaining(this.w5a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var contentPacket = suspendResult;
            this.o9_1 = 3;
            var tmp0_subject = this.t5a_1.j5a_1;
            var tmp_2;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_2 = this.t5a_1.j5a_1.y21(this.y5a_1, readText(contentPacket, this.u5a_1));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_2 = this.t5a_1.j5a_1.a22(this.y5a_1, readByteArray(contentPacket));
              } else {
                discard(contentPacket);
                var message = 'Unsupported format ' + toString(this.t5a_1.j5a_1);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            return tmp_2;
          case 3:
            this.o9_1 = 4;
            var tmp_3 = this.q9_1;
            if (tmp_3 instanceof Error) {
              var cause = this.q9_1;
              throw new JsonConvertException('Illegal input: ' + cause.message, cause);
            } else {
              throw this.q9_1;
            }

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
  function KotlinxSerializationConverter(format) {
    this.j5a_1 = format;
    this.k5a_1 = extensions(this.j5a_1);
    var tmp;
    var tmp_0 = this.j5a_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.j5a_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Only binary and string formats are supported, ' + toString(this.j5a_1) + ' is not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(KotlinxSerializationConverter).z5a = function (contentType, charset, typeInfo, value, $completion) {
    var tmp = new $serializeCOROUTINE$0(this, contentType, charset, typeInfo, value, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KotlinxSerializationConverter).x56 = function (contentType, charset, typeInfo, value, $completion) {
    return this.z5a(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).v3g = function (charset, typeInfo, content, $completion) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
    var module_0 = _this__u8e3s4;
    var tmp0_safe_receiver = typeInfo.f2v_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      if (tmp0_safe_receiver.xc().h()) {
        tmp_0 = null;
      } else {
        tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = module_0.d22(typeInfo.e2v_1);
      tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_1;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.e2v_1), typeInfo) : tmp3_elvis_lhs;
  }
  function guessSerializer(value, module_0) {
    var tmp;
    if (value == null) {
      tmp = get_nullable(serializer_0(StringCompanionObject_instance));
    } else {
      if (!(value == null) ? isInterface(value, KtList) : false) {
        tmp = ListSerializer(elementSerializer(value, module_0));
      } else {
        if (!(value == null) ? isArray(value) : false) {
          var tmp1_safe_receiver = firstOrNull_0(value);
          var tmp_0;
          if (tmp1_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_0 = guessSerializer(tmp1_safe_receiver, module_0);
          }
          var tmp2_elvis_lhs = tmp_0;
          tmp = tmp2_elvis_lhs == null ? ListSerializer(serializer_0(StringCompanionObject_instance)) : tmp2_elvis_lhs;
        } else {
          if (!(value == null) ? isInterface(value, KtSet) : false) {
            tmp = SetSerializer(elementSerializer(value, module_0));
          } else {
            if (!(value == null) ? isInterface(value, KtMap) : false) {
              var keySerializer = elementSerializer(value.n2(), module_0);
              var valueSerializer = elementSerializer(value.o2(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp3_elvis_lhs = module_0.d22(getKClassFromExpression(value));
              tmp = tmp3_elvis_lhs == null ? serializer(getKClassFromExpression(value)) : tmp3_elvis_lhs;
            }
          }
        }
      }
    }
    var tmp_1 = tmp;
    return isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
  }
  function maybeNullable(_this__u8e3s4, typeInfo) {
    var tmp;
    var tmp0_safe_receiver = typeInfo.f2v_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yc()) === true) {
      tmp = get_nullable(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function elementSerializer(_this__u8e3s4, module_0) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = filterNotNull(_this__u8e3s4);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = guessSerializer(item, module_0);
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.distinctBy' call
    var set = HashSet_init_$Create$();
    var list = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = destination.p();
    while (_iterator__ex2g4s_0.q()) {
      var e = _iterator__ex2g4s_0.r();
      var key = e.u20().v21();
      if (set.n(key)) {
        list.n(e);
      }
    }
    var serializers = list;
    if (serializers.s() > 1) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(serializers, 10));
      var _iterator__ex2g4s_1 = serializers.p();
      while (_iterator__ex2g4s_1.q()) {
        var item_0 = _iterator__ex2g4s_1.r();
        var tmp$ret$5 = item_0.u20().v21();
        destination_0.n(tmp$ret$5);
      }
      // Inline function 'kotlin.error' call
      var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
    if (selected.u20().h22()) {
      return selected;
    }
    if (!isInterface(selected, KSerializer))
      THROW_CCE();
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$8 = false;
        break $l$block_0;
      }
      var _iterator__ex2g4s_2 = _this__u8e3s4.p();
      while (_iterator__ex2g4s_2.q()) {
        var element = _iterator__ex2g4s_2.r();
        if (element == null) {
          tmp$ret$8 = true;
          break $l$block_0;
        }
      }
      tmp$ret$8 = false;
    }
    if (tmp$ret$8) {
      return get_nullable(selected);
    }
    return selected;
  }
  function get_providers() {
    return emptyList();
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = serialization;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.js.map
