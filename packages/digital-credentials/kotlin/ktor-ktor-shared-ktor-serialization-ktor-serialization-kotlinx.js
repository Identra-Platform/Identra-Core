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
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var Unit_instance = kotlin_kotlin.$_$.a6;
  var CoroutineImpl = kotlin_kotlin.$_$.gb;
  var protoOf = kotlin_kotlin.$_$.gd;
  var THROW_CCE = kotlin_kotlin.$_$.ai;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.qa;
  var initMetadataForLambda = kotlin_kotlin.$_$.hc;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ec;
  var toString = kotlin_kotlin.$_$.kd;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var isInterface = kotlin_kotlin.$_$.rc;
  var ByteArrayContent = kotlin_io_ktor_ktor_http.$_$.k;
  var BinaryFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var withCharsetIfNeeded = kotlin_io_ktor_ktor_http.$_$.u1;
  var TextContent = kotlin_io_ktor_ktor_http.$_$.u;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var equals = kotlin_kotlin.$_$.wb;
  var FunctionAdapter = kotlin_kotlin.$_$.kb;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var hashCode = kotlin_kotlin.$_$.bc;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var firstOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var readRemaining = kotlin_io_ktor_ktor_io.$_$.f;
  var discard = kotlin_io_ktor_ktor_io.$_$.a1;
  var readByteArray = kotlin_org_jetbrains_kotlinx_kotlinx_io_core.$_$.j;
  var readText = kotlin_io_ktor_ktor_io.$_$.c1;
  var JsonConvertException = kotlin_io_ktor_ktor_serialization.$_$.d;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var KtMap = kotlin_kotlin.$_$.k6;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var KtSet = kotlin_kotlin.$_$.q6;
  var firstOrNull_0 = kotlin_kotlin.$_$.d8;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.n5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var isArray = kotlin_kotlin.$_$.jc;
  var KtList = kotlin_kotlin.$_$.h6;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var filterNotNull = kotlin_kotlin.$_$.a8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.z;
  var singleOrNull = kotlin_kotlin.$_$.p9;
  var Collection = kotlin_kotlin.$_$.c6;
  var emptyList = kotlin_kotlin.$_$.v7;
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
      var tmp0_safe_receiver = element.a54(format);
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
    _this__u8e3s4.x3d(contentType, new KotlinxSerializationConverter(format));
  }
  function KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    this.j54_1 = $$this$unsafeFlow;
    this.k54_1 = $contentType;
    this.l54_1 = $charset;
    this.m54_1 = $typeInfo;
    this.n54_1 = $value;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).t3e = function (value, $completion) {
    var tmp = this.ja(value, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).ua = function (p1, $completion) {
    return this.t3e((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.p54_1 = this.j54_1;
            var tmp_1 = this;
            tmp_1.q54_1 = this.o54_1;
            this.r54_1 = this.p54_1;
            this.s54_1 = this.q54_1;
            var tmp_2 = this;
            tmp_2.t54_1 = this.s54_1;
            this.u54_1 = this.t54_1;
            this.m9_1 = 1;
            suspendResult = this.u54_1.w54(this.k54_1, this.l54_1, this.m54_1, this.n54_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v54_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.r54_1.p1b(this.v54_1, this);
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
  protoOf(KotlinxSerializationConverter$serialize$o$collect$slambda).ja = function (value, completion) {
    var i = new KotlinxSerializationConverter$serialize$o$collect$slambda(this.j54_1, this.k54_1, this.l54_1, this.m54_1, this.n54_1, completion);
    i.o54_1 = value;
    return i;
  };
  function KotlinxSerializationConverter$serialize$o$collect$slambda_0($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation) {
    var i = new KotlinxSerializationConverter$serialize$o$collect$slambda($$this$unsafeFlow, $contentType, $charset, $typeInfo, $value, resultContinuation);
    var l = function (value, $completion) {
      return i.t3e(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f55_1 = _this__u8e3s4;
    this.g55_1 = collector;
  }
  protoOf($collectCOROUTINE$2).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            var tmp_0 = this;
            tmp_0.h55_1 = this.g55_1;
            this.i55_1 = this.h55_1;
            this.m9_1 = 1;
            var tmp_1 = KotlinxSerializationConverter$serialize$o$collect$slambda_0(this.i55_1, this.f55_1.k55_1, this.f55_1.l55_1, this.f55_1.m55_1, this.f55_1.n55_1, null);
            suspendResult = this.f55_1.j55_1.r1b(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
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
  function KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
    this.w55_1 = $$this$unsafeFlow;
    this.x55_1 = $charset;
    this.y55_1 = $typeInfo;
    this.z55_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).t3e = function (value, $completion) {
    var tmp = this.ja(value, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).ua = function (p1, $completion) {
    return this.t3e((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.b56_1 = this.w55_1;
            var tmp_1 = this;
            tmp_1.c56_1 = this.a56_1;
            this.d56_1 = this.b56_1;
            this.e56_1 = this.c56_1;
            var tmp_2 = this;
            tmp_2.f56_1 = this.e56_1;
            this.g56_1 = this.f56_1;
            this.m9_1 = 1;
            suspendResult = this.g56_1.u3e(this.x55_1, this.y55_1, this.z55_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h56_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.d56_1.p1b(this.h56_1, this);
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
  protoOf(KotlinxSerializationConverter$deserialize$o$collect$slambda).ja = function (value, completion) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda(this.w55_1, this.x55_1, this.y55_1, this.z55_1, completion);
    i.a56_1 = value;
    return i;
  };
  function KotlinxSerializationConverter$deserialize$o$collect$slambda_0($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$o$collect$slambda($$this$unsafeFlow, $charset, $typeInfo, $content, resultContinuation);
    var l = function (value, $completion) {
      return i.t3e(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q56_1 = _this__u8e3s4;
    this.r56_1 = collector;
  }
  protoOf($collectCOROUTINE$3).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            var tmp_0 = this;
            tmp_0.s56_1 = this.r56_1;
            this.t56_1 = this.s56_1;
            this.m9_1 = 1;
            var tmp_1 = KotlinxSerializationConverter$deserialize$o$collect$slambda_0(this.t56_1, this.q56_1.v56_1, this.q56_1.w56_1, this.q56_1.x56_1, null);
            suspendResult = this.q56_1.u56_1.r1b(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  function serializeContent($this, serializer, format, value, contentType, charset) {
    var tmp;
    if (isInterface(format, StringFormat)) {
      var content = format.y1z(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
      tmp = new TextContent(content, withCharsetIfNeeded(contentType, charset));
    } else {
      if (isInterface(format, BinaryFormat)) {
        var content_0 = format.w1z(isInterface(serializer, KSerializer) ? serializer : THROW_CCE(), value);
        tmp = new ByteArrayContent(content_0, contentType);
      } else {
        var message = 'Unsupported format ' + toString(format);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.y56_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).p1b = function (value, $completion) {
    return this.y56_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).s3 = function () {
    return this.y56_1;
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
    this.z56_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).p1b = function (value, $completion) {
    return this.z56_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).s3 = function () {
    return this.z56_1;
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
    this.j55_1 = $this;
    this.k55_1 = $contentType;
    this.l55_1 = $charset;
    this.m55_1 = $typeInfo;
    this.n55_1 = $value;
  }
  protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).q1b = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$2(this, collector, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(KotlinxSerializationConverter$serialize$$inlined$map$1).r1b = function (collector, $completion) {
    return this.q1b(collector, $completion);
  };
  function KotlinxSerializationConverter$serialize$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$serialize$slambda).j57 = function (it, $completion) {
    var tmp = this.k57(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).ua = function (p1, $completion) {
    return this.j57((p1 == null ? true : p1 instanceof OutgoingContent) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return !(this.i57_1 == null);
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$serialize$slambda).k57 = function (it, completion) {
    var i = new KotlinxSerializationConverter$serialize$slambda(completion);
    i.i57_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$serialize$slambda_0(resultContinuation) {
    var i = new KotlinxSerializationConverter$serialize$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.j57(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KotlinxSerializationConverter$deserialize$$inlined$map$1($this, $charset, $typeInfo, $content) {
    this.u56_1 = $this;
    this.v56_1 = $charset;
    this.w56_1 = $typeInfo;
    this.x56_1 = $content;
  }
  protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).q1b = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$3(this, collector, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(KotlinxSerializationConverter$deserialize$$inlined$map$1).r1b = function (collector, $completion) {
    return this.q1b(collector, $completion);
  };
  function KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation) {
    this.t57_1 = $content;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KotlinxSerializationConverter$deserialize$slambda).v3f = function (it, $completion) {
    var tmp = this.ja(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).ua = function (p1, $completion) {
    return this.v3f((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return !(this.u57_1 == null) || this.t57_1.b1n();
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(KotlinxSerializationConverter$deserialize$slambda).ja = function (it, completion) {
    var i = new KotlinxSerializationConverter$deserialize$slambda(this.t57_1, completion);
    i.u57_1 = it;
    return i;
  };
  function KotlinxSerializationConverter$deserialize$slambda_0($content, resultContinuation) {
    var i = new KotlinxSerializationConverter$deserialize$slambda($content, resultContinuation);
    var l = function (it, $completion) {
      return i.v3f(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $serializeCOROUTINE$0(_this__u8e3s4, contentType, charset, typeInfo, value, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d58_1 = _this__u8e3s4;
    this.e58_1 = contentType;
    this.f58_1 = charset;
    this.g58_1 = typeInfo;
    this.h58_1 = value;
  }
  protoOf($serializeCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            var this_0 = asFlow(this.d58_1.j58_1);
            var tmp_0 = new KotlinxSerializationConverter$serialize$$inlined$map$1(this_0, this.e58_1, this.f58_1, this.g58_1, this.h58_1);
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
              tmp_1 = serializerForTypeInfo(this.d58_1.i58_1.v22(), this.g58_1);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof SerializationException) {
                var cause = $p;
                tmp_2 = guessSerializer(this.h58_1, this.d58_1.i58_1.v22());
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var serializer = tmp_1;
            return serializeContent(this.d58_1, serializer, this.d58_1.i58_1, this.h58_1, this.e58_1, this.f58_1);
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
  function $deserializeCOROUTINE$1(_this__u8e3s4, charset, typeInfo, content, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s58_1 = _this__u8e3s4;
    this.t58_1 = charset;
    this.u58_1 = typeInfo;
    this.v58_1 = content;
  }
  protoOf($deserializeCOROUTINE$1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.m9_1 = 1;
            var this_0 = asFlow(this.s58_1.j58_1);
            var tmp_0 = new KotlinxSerializationConverter$deserialize$$inlined$map$1(this_0, this.t58_1, this.u58_1, this.v58_1);
            suspendResult = firstOrNull(tmp_0, KotlinxSerializationConverter$deserialize$slambda_0(this.v58_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w58_1 = suspendResult;
            var tmp_1;
            if (!this.s58_1.j58_1.h()) {
              tmp_1 = !(this.w58_1 == null) || this.v58_1.b1n();
            } else {
              tmp_1 = false;
            }

            if (tmp_1)
              return this.w58_1;
            this.x58_1 = serializerForTypeInfo(this.s58_1.i58_1.v22(), this.u58_1);
            this.m9_1 = 2;
            suspendResult = readRemaining(this.v58_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var contentPacket = suspendResult;
            this.n9_1 = 3;
            var tmp0_subject = this.s58_1.i58_1;
            var tmp_2;
            if (isInterface(tmp0_subject, StringFormat)) {
              tmp_2 = this.s58_1.i58_1.z1z(this.x58_1, readText(contentPacket, this.t58_1));
            } else {
              if (isInterface(tmp0_subject, BinaryFormat)) {
                tmp_2 = this.s58_1.i58_1.x1z(this.x58_1, readByteArray(contentPacket));
              } else {
                discard(contentPacket);
                var message = 'Unsupported format ' + toString(this.s58_1.i58_1);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }

            return tmp_2;
          case 3:
            this.n9_1 = 4;
            var tmp_3 = this.p9_1;
            if (tmp_3 instanceof Error) {
              var cause = this.p9_1;
              throw new JsonConvertException('Illegal input: ' + cause.message, cause);
            } else {
              throw this.p9_1;
            }

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
  function KotlinxSerializationConverter(format) {
    this.i58_1 = format;
    this.j58_1 = extensions(this.i58_1);
    var tmp;
    var tmp_0 = this.i58_1;
    if (isInterface(tmp_0, BinaryFormat)) {
      tmp = true;
    } else {
      var tmp_1 = this.i58_1;
      tmp = isInterface(tmp_1, StringFormat);
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = 'Only binary and string formats are supported, ' + toString(this.i58_1) + ' is not supported.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(KotlinxSerializationConverter).y58 = function (contentType, charset, typeInfo, value, $completion) {
    var tmp = new $serializeCOROUTINE$0(this, contentType, charset, typeInfo, value, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(KotlinxSerializationConverter).w54 = function (contentType, charset, typeInfo, value, $completion) {
    return this.y58(contentType, charset, typeInfo, value, $completion);
  };
  protoOf(KotlinxSerializationConverter).u3e = function (charset, typeInfo, content, $completion) {
    var tmp = new $deserializeCOROUTINE$1(this, charset, typeInfo, content, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  function serializerForTypeInfo(_this__u8e3s4, typeInfo) {
    var module_0 = _this__u8e3s4;
    var tmp0_safe_receiver = typeInfo.e2t_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      if (tmp0_safe_receiver.wc().h()) {
        tmp_0 = null;
      } else {
        tmp_0 = serializerOrNull(module_0, tmp0_safe_receiver);
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp2_safe_receiver = module_0.c20(typeInfo.d2t_1);
      tmp_1 = tmp2_safe_receiver == null ? null : maybeNullable(tmp2_safe_receiver, typeInfo);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp_1;
    return tmp3_elvis_lhs == null ? maybeNullable(serializer(typeInfo.d2t_1), typeInfo) : tmp3_elvis_lhs;
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
              var tmp3_elvis_lhs = module_0.c20(getKClassFromExpression(value));
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
    var tmp0_safe_receiver = typeInfo.e2t_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xc()) === true) {
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
      var key = e.t1y().u1z();
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
        var tmp$ret$5 = item_0.t1y().u1z();
        destination_0.n(tmp$ret$5);
      }
      // Inline function 'kotlin.error' call
      var message = 'Serializing collections of different element types is not yet supported. ' + ('Selected serializers: ' + toString(destination_0));
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = singleOrNull(serializers);
    var selected = tmp0_elvis_lhs == null ? serializer_0(StringCompanionObject_instance) : tmp0_elvis_lhs;
    if (selected.t1y().g20()) {
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
