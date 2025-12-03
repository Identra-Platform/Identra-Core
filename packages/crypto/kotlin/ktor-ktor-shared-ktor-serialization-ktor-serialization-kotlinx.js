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
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var CoroutineImpl = kotlin_kotlin.$_$.pa;
  var protoOf = kotlin_kotlin.$_$.pc;
  var THROW_CCE = kotlin_kotlin.$_$.tg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z9;
  var initMetadataForLambda = kotlin_kotlin.$_$.qb;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.nb;
  var toString = kotlin_kotlin.$_$.tc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var isInterface = kotlin_kotlin.$_$.ac;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.k;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.t1;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.u;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var equals = kotlin_kotlin.$_$.fb;
  var FunctionAdapter = kotlin_kotlin.$_$.ta;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l;
  var hashCode = kotlin_kotlin.$_$.kb;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.f;
  var discard = kotlin_io_ktor_ktor_io.$_$.a1;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var readText = kotlin_io_ktor_ktor_io.$_$.c1;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var KtMap = kotlin_kotlin.$_$.f6;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var KtSet = kotlin_kotlin.$_$.j6;
  var firstOrNull_0 = kotlin_kotlin.$_$.t7;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.i5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var isArray = kotlin_kotlin.$_$.sb;
  var KtList = kotlin_kotlin.$_$.c6;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var filterNotNull = kotlin_kotlin.$_$.q7;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.y;
  var singleOrNull = kotlin_kotlin.$_$.a9;
  var Collection = kotlin_kotlin.$_$.x5;
  var emptyList = kotlin_kotlin.$_$.l7;
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
      var tmp0_safe_receiver = element.e51(format);
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
    _this__u8e3s4.x3c(contentType, new KotlinxSerializationConverter(format));
  }
  function KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    this.n51_1 = $$this$unsafeFlow;
    this.o51_1 = $contentType;
    this.p51_1 = $charset;
    this.q51_1 = $typeInfo;
    this.r51_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).t3d = function (value, $completion) {
    var tmp = this.ia(value, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).ta = function (p1, $completion) {
    return this.t3d((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            tmp_0.t51_1 = this.n51_1;
            var tmp_1 = this;
            tmp_1.u51_1 = this.s51_1;
            this.v51_1 = this.t51_1;
            this.w51_1 = this.u51_1;
            var tmp_2 = this;
            tmp_2.x51_1 = this.w51_1;
            this.y51_1 = this.x51_1;
            this.l9_1 = 1;
            suspendResult = this.y51_1.a52(this.o51_1, this.p51_1, this.q51_1, this.r51_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z51_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.v51_1.u1a(this.z51_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.o9_1;
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
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).ia = function (value, completion) {
    var i = new KotlinxSerializationConverter$serialize$o$collect$slambda(this.n51_1, this.o51_1, this.p51_1, this.q51_1, this.r51_1, completion);
    i.s51_1 = value;
    return i;
  };
  function KotlinxSerializationConverter$serialize$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    var i = new KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation);
    var l = function (value, $completion) {
      return i.t3d(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j52_1 = _this__u8e3s4;
    this.k52_1 = collector;
  }
  protoOf($collectCOROUTINE$2).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            var tmp_0 = this;
            tmp_0.l52_1 = this.k52_1;
            this.m52_1 = this.l52_1;
            this.l9_1 = 1;
            var tmp_1 = KotlinxSerializationConverter$serialize$o$collect$slambda_0(this.m52_1, this.j52_1.o52_1, this.j52_1.p52_1, this.j52_1.q52_1, this.j52_1.r52_1, null);
            suspendResult = this.j52_1.n52_1.w1a(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  function KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
    this.a53_1 = $$this$unsafeFlow;
    this.b53_1 = $charset;
    this.c53_1 = $typeInfo;
    this.d53_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).t3d = function (value, $completion) {
    var tmp = this.ia(value, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).ta = function (p1, $completion) {
    return this.t3d((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            tmp_0.f53_1 = this.a53_1;
            var tmp_1 = this;
            tmp_1.g53_1 = this.e53_1;
            this.h53_1 = this.f53_1;
            this.i53_1 = this.g53_1;
            var tmp_2 = this;
            tmp_2.j53_1 = this.i53_1;
            this.k53_1 = this.j53_1;
            this.l9_1 = 1;
            suspendResult = this.k53_1.u3d(this.b53_1, this.c53_1, this.d53_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l53_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.h53_1.u1a(this.l53_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.o9_1;
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
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).ia = function (value, completion) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda(this.a53_1, this.b53_1, this.c53_1, this.d53_1, completion);
    i.e53_1 = value;
    return i;
  };
  function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation);
    var l = function (value, $completion) {
      return i.t3d(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u53_1 = _this__u8e3s4;
    this.v53_1 = collector;
  }
  protoOf($collectCOROUTINE$3).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            var tmp_0 = this;
            tmp_0.w53_1 = this.v53_1;
            this.x53_1 = this.w53_1;
            this.l9_1 = 1;
            var tmp_1 = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(this.x53_1, this.u53_1.z53_1, this.u53_1.a54_1, this.u53_1.b54_1, null);
            suspendResult = this.u53_1.y53_1.w1a(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp;
    if (isInterface(format, StringFormat)) {
      var content = format.x1y(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
    } else {
      if (isInterface(format, BinaryFormat)) {
        var content_0 = format.z1y(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = new ByteArrayContent(content_0, contentType);
      } else {
        var message = 'Unsupported format ' + toString(format);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.c54_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).u1a = function (value, $completion) {
    return this.c54_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).s3 = function () {
    return this.c54_1;
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
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.d54_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).u1a = function (value, $completion) {
    return this.d54_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).s3 = function () {
    return this.d54_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.s3());
  };
  function KotlinxSerializationConverter$serialize$$inlined$map$1($this, $contentType, $charset, $typeInfo, $value) {
    this.n52_1 = $this;
    this.o52_1 = $contentType;
    this.p52_1 = $charset;
    this.q52_1 = $typeInfo;
    this.r52_1 = $value;
  }
  protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).v1a = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$2(this, collector, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).w1a = function (collector, $completion) {
    return this.v1a(collector, $completion);
  };
  function KotlinxSerializationConverter$serialize$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serialize$slambda).n54 = function (it, $completion) {
    var tmp = this.o54(it, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).ta = function (p1, $completion) {
    return this.n54((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        if (tmp === 0) {
          this.m9_1 = 1;
          return !(this.m54_1 == null);
        } else if (tmp === 1) {
          throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).o54 = function (it, completion) {
    var i = new KotlinxSerializationConverter$serialize$slambda(completion);
    i.m54_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$serialize$slambda_0(resultContinuation) {
    var i = new KotlinxSerializationConverter$serialize$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.n54(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KotlinxSerializationConverter$deserialize$$inlined$map$1($this, $charset, $typeInfo, $content) {
    this.y53_1 = $this;
    this.z53_1 = $charset;
    this.a54_1 = $typeInfo;
    this.b54_1 = $content;
  }
  protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).v1a = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$3(this, collector, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).w1a = function (collector, $completion) {
    return this.v1a(collector, $completion);
  };
  function KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation) {
    this.x54_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$slambda).v3e = function (it, $completion) {
    var tmp = this.ia(it, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).ta = function (p1, $completion) {
    return this.v3e((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        if (tmp === 0) {
          this.m9_1 = 1;
          return !(this.y54_1 == null) || this.x54_1.c1m();
        } else if (tmp === 1) {
          throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).ia = function (it, completion) {
    var i = new KotlinxSerializationConverter$deserialize$slambda(this.x54_1, completion);
    i.y54_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$deserialize$slambda_0($content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation);
    var l = function (it, $completion) {
      return i.v3e(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $serializeCOROUTINE$0(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h55_1 = _this__u8e3s4;
    this.i55_1 = contentType;
    this.j55_1 = charset;
    this.k55_1 = typeInfo;
    this.l55_1 = value;
  }
  protoOf($serializeCOROUTINE$0).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            var this_0 = asFlow(this.h55_1.n55_1);
            var tmp_0 = new KotlinxSerializationConverter$serialize$$inlined$map$1(this_0, this.i55_1, this.j55_1, this.k55_1, this.l55_1);
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
              tmp_1 = serializerForTypeInfo(this.h55_1.m55_1.w21(), this.k55_1);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof SerializationException) {
                var cause = $p;
                tmp_2 = guessSerializer(this.l55_1, this.h55_1.m55_1.w21());
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var serializer = tmp_1;
            return serializeContent(this.h55_1, serializer, this.h55_1.m55_1, this.l55_1, this.i55_1, this.j55_1);
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
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w55_1 = _this__u8e3s4;
    this.x55_1 = charset;
    this.y55_1 = typeInfo;
    this.z55_1 = content;
  }
  protoOf($deserializeCOROUTINE$1).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            this.l9_1 = 1;
            var this_0 = asFlow(this.w55_1.n55_1);
            var tmp_0 = new KotlinxSerializationConverter$deserialize$$inlined$map$1(this_0, this.x55_1, this.y55_1, this.z55_1);
            suspendResult = firstOrNull(tmp_0, KotlinxSerializationConverter$deserialize$slambda_0(this.z55_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a56_1 = suspendResult;
            var tmp_1;
            if (!this.w55_1.n55_1.h()) {
              tmp_1 = !(this.a56_1 == null) || this.z55_1.c1m();
            } else {
              tmp_1 = false;
            }

            if (tmp_1)
              return this.a56_1;
            this.b56_1 = serializerForTypeInfo(this.w55_1.m55_1.w21(), this.y55_1);
            this.l9_1 = 2;
            suspendResult = readRemaining(this.z55_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var contentPacket = suspendResult;
            this.m9_1 = 3;
            var tmp0_subject = this.w55_1.m55_1;
            var tmp_2;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_2 = this.w55_1.m55_1.y1y(this.b56_1, readText(contentPacket, this.x55_1));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_2 = this.w55_1.m55_1.a1z(this.b56_1, readByteArray(contentPacket));
              } else {
                discard(contentPacket);
                var message = 'Unsupported format ' + toString(this.w55_1.m55_1);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            return tmp_2;
          case 3:
            this.m9_1 = 4;
            var tmp_3 = this.o9_1;
            if (tmp_3 instanceof Error) {
              var cause = this.o9_1;
              throw new JsonConvertException('Illegal input: ' + cause.message, cause);
            } else {
              throw this.o9_1;
            }

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
  function KotlinxSerializationConverter(format) {
    this.m55_1 = format;
    this.n55_1 = extensions(this.m55_1);
    var tmp;
    var tmp_0 = this.m55_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.m55_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Only binary and string formats are supported, ' + toString(this.m55_1) + ' is not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(KotlinxSerializationConverter).c56 = function (contentType, charset, typeInfo, value, $completion) {
    var tmp = new $serializeCOROUTINE$0(this, contentType, charset, typeInfo, value, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KotlinxSerializationConverter).a52 = function (contentType, charset, typeInfo, value, $completion) {
    return this.c56(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).u3d = function (charset, typeInfo, content, $completion) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
    var module_0 = _this__u8e3s4;
    var tmp0_safe_receiver = typeInfo.e2s_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      if (tmp0_safe_receiver.vc().h()) {
        tmp_0 = null;
      } else {
        tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = module_0.d1z(typeInfo.d2s_1);
      tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_1;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.d2s_1), typeInfo) : tmp3_elvis_lhs;
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
              var keySerializer = elementSerializer(value.l2(), module_0);
              var valueSerializer = elementSerializer(value.m2(), module_0);
              tmp = MapSerializer(keySerializer, valueSerializer);
            } else {
              var tmp3_elvis_lhs = module_0.d1z(getKClassFromExpression(value));
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
    var tmp0_safe_receiver = typeInfo.e2s_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wc()) === true) {
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
      var key = e.u1x().v1y();
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
        var tmp$ret$5 = item_0.u1x().v1y();
        destination_0.n(tmp$ret$5);
      }
      // Inline function 'kotlin.error' call
      var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
    if (selected.u1x().h1z()) {
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
