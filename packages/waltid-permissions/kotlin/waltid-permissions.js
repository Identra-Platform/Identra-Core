(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js', './kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.permissions:waltid-permissions'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'id.walt.permissions:waltid-permissions'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.permissions:waltid-permissions'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'id.walt.permissions:waltid-permissions'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.permissions:waltid-permissions'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'id.walt.permissions:waltid-permissions'.");
    }
    if (typeof globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.permissions:waltid-permissions'. Its dependency 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' was not found. Please, check whether 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' is loaded prior to 'id.walt.permissions:waltid-permissions'.");
    }
    globalThis['id.walt.permissions:waltid-permissions'] = factory(typeof globalThis['id.walt.permissions:waltid-permissions'] === 'undefined' ? {} : globalThis['id.walt.permissions:waltid-permissions'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core'], globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.x3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.q3;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.u3;
  var VOID = kotlin_kotlin.$_$.c;
  var CoroutineImpl = kotlin_kotlin.$_$.z2;
  var Unit_instance = kotlin_kotlin.$_$.l1;
  var THROW_CCE = kotlin_kotlin.$_$.t4;
  var drop = kotlin_kotlin.$_$.e4;
  var charSequenceGet = kotlin_kotlin.$_$.h3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k2;
  var initMetadataForLambda = kotlin_kotlin.$_$.t3;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.r3;
  var equals = kotlin_kotlin.$_$.k3;
  var FunctionAdapter = kotlin_kotlin.$_$.c3;
  var isInterface = kotlin_kotlin.$_$.v3;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var hashCode = kotlin_kotlin.$_$.o3;
  var initMetadataForClass = kotlin_kotlin.$_$.p3;
  var Flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var getStringHashCode = kotlin_kotlin.$_$.n3;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.z4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d1;
  var contains = kotlin_kotlin.$_$.d4;
  var toString = kotlin_kotlin.$_$.z3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.u;
  var charArrayOf = kotlin_kotlin.$_$.g3;
  var split = kotlin_kotlin.$_$.i4;
  var toMutableList = kotlin_kotlin.$_$.h2;
  var toString_0 = kotlin_kotlin.$_$.e1;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var mapCapacity = kotlin_kotlin.$_$.a2;
  var coerceAtLeast = kotlin_kotlin.$_$.a4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var Char = kotlin_kotlin.$_$.l4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.p1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var enumEntries = kotlin_kotlin.$_$.b3;
  var Enum = kotlin_kotlin.$_$.m4;
  var flatMapMerge = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var defineProp = kotlin_kotlin.$_$.j3;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var HashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  var objectCreate = kotlin_kotlin.$_$.w3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p;
  var drop_0 = kotlin_kotlin.$_$.t1;
  var emptyList = kotlin_kotlin.$_$.u1;
  var ensureNotNull = kotlin_kotlin.$_$.y4;
  var split_0 = kotlin_kotlin.$_$.j4;
  var joinToString = kotlin_kotlin.$_$.x1;
  var getBooleanHashCode = kotlin_kotlin.$_$.l3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.b5;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var $runInAsync$ = kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime.$_$.a;
  var indexOf = kotlin_kotlin.$_$.f4;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(Permission$Companion$parseFromPermissionString$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(Permission$Companion$parseFromPermissionString$$inlined$map$1, VOID, VOID, VOID, [Flow], [1]);
  initMetadataForClass(MinimalPermission, 'MinimalPermission', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Permission, 'Permission');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(PermissionOperation, 'PermissionOperation', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_1});
  initMetadataForLambda(FlowPermissionSet$Companion$fromPermissionStringsFlow$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(FlowPermissionSet, 'FlowPermissionSet');
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PermissionTreeNode, 'PermissionTreeNode', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(PermissionTrie, 'PermissionTrie', PermissionTrie);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(PermissionInsights, 'PermissionInsights');
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(PermissionChecker$applyPermissions$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(PermissionChecker$applyPermissionsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(PermissionChecker, 'PermissionChecker', PermissionChecker, VOID, VOID, [1]);
  initMetadataForLambda(FlowUtils$splitIntoFlow$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(FlowUtils, 'FlowUtils');
  //endregion
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.permissions.Permission.MinimalPermission', this, 2);
    tmp0_serialDesc.f14('target', false);
    tmp0_serialDesc.f14('action', false);
    this.l14_1 = tmp0_serialDesc;
  }
  protoOf($serializer).t12 = function () {
    return this.l14_1;
  };
  protoOf($serializer).g14 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Permission$Companion$parseFromPermissionString$o$collect$slambda($$this$unsafeFlow, $target, resultContinuation) {
    this.u14_1 = $$this$unsafeFlow;
    this.v14_1 = $target;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Permission$Companion$parseFromPermissionString$o$collect$slambda).ow = function (value, $completion) {
    var tmp = this.pw(value, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(Permission$Companion$parseFromPermissionString$o$collect$slambda).x6 = function (p1, $completion) {
    return this.ow((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Permission$Companion$parseFromPermissionString$o$collect$slambda).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 2;
            var tmp_0 = this;
            tmp_0.x14_1 = this.u14_1;
            var tmp_1 = this;
            tmp_1.y14_1 = this.w14_1;
            this.z14_1 = this.x14_1;
            this.a15_1 = this.y14_1;
            this.f6_1 = 1;
            var permissionString = this.a15_1;
            suspendResult = this.z14_1.ns(new Permission(this.v14_1, drop(permissionString, 1), Companion_getInstance_1().d15(charSequenceGet(permissionString, 0))), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 2) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  protoOf(Permission$Companion$parseFromPermissionString$o$collect$slambda).pw = function (value, completion) {
    var i = new Permission$Companion$parseFromPermissionString$o$collect$slambda(this.u14_1, this.v14_1, completion);
    i.w14_1 = value;
    return i;
  };
  function Permission$Companion$parseFromPermissionString$o$collect$slambda_0($$this$unsafeFlow, $target, resultContinuation) {
    var i = new Permission$Companion$parseFromPermissionString$o$collect$slambda($$this$unsafeFlow, $target, resultContinuation);
    var l = function (value, $completion) {
      return i.ow(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m15_1 = _this__u8e3s4;
    this.n15_1 = collector;
  }
  protoOf($collectCOROUTINE$0).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 2;
            var tmp_0 = this;
            tmp_0.o15_1 = this.n15_1;
            this.p15_1 = this.o15_1;
            this.f6_1 = 1;
            var tmp_1 = Permission$Companion$parseFromPermissionString$o$collect$slambda_0(this.p15_1, this.m15_1.r15_1, null);
            suspendResult = this.m15_1.q15_1.xr(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 2) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.s15_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).ns = function (value, $completion) {
    return this.s15_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).m2 = function () {
    return this.s15_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m2(), other.m2());
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
    return hashCode(this.m2());
  };
  function Permission$Companion$$childSerializers$_anonymous__yuaogr() {
    return Companion_getInstance_1().t15();
  }
  function Permission$Companion$parseFromPermissionString$$inlined$map$1($this, $target) {
    this.q15_1 = $this;
    this.r15_1 = $target;
  }
  protoOf(Permission$Companion$parseFromPermissionString$$inlined$map$1).ex = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(Permission$Companion$parseFromPermissionString$$inlined$map$1).xr = function (collector, $completion) {
    return this.ex(collector, $completion);
  };
  function MinimalPermission(target, action) {
    this.u15_1 = target;
    this.v15_1 = action;
  }
  protoOf(MinimalPermission).toString = function () {
    return '[' + this.v15_1 + ' on ' + this.u15_1 + ']';
  };
  protoOf(MinimalPermission).hashCode = function () {
    var result = getStringHashCode(this.u15_1);
    result = imul(result, 31) + getStringHashCode(this.v15_1) | 0;
    return result;
  };
  protoOf(MinimalPermission).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MinimalPermission))
      return false;
    var tmp0_other_with_cast = other instanceof MinimalPermission ? other : THROW_CCE();
    if (!(this.u15_1 === tmp0_other_with_cast.u15_1))
      return false;
    if (!(this.v15_1 === tmp0_other_with_cast.v15_1))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w15_1 = [null, null, lazy(tmp_0, Permission$Companion$$childSerializers$_anonymous__yuaogr)];
  }
  protoOf(Companion_0).x15 = function (string) {
    // Inline function 'kotlin.check' call
    if (!contains(string, _Char___init__impl__6a9atx(58))) {
      var message = "No ':' in string: " + string;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var _destruct__k2r9zo = toMutableList(split(string, charArrayOf([_Char___init__impl__6a9atx(58)])));
    // Inline function 'kotlin.collections.component1' call
    var targetString = _destruct__k2r9zo.o(0);
    // Inline function 'kotlin.collections.component2' call
    var permissionStrings = _destruct__k2r9zo.o(1);
    var target = _PermissionedResourceTarget___init__impl__z1gc1g(targetString);
    // Inline function 'kotlinx.coroutines.flow.map' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    var this_0 = FlowUtils_instance.y15(permissionStrings, ',');
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    var permissions = new Permission$Companion$parseFromPermissionString$$inlined$map$1(this_0, target);
    return permissions;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Permission(target, action, operation) {
    Companion_getInstance_0();
    operation = operation === VOID ? PermissionOperation_ADD_getInstance() : operation;
    this.z15_1 = target;
    this.a16_1 = action;
    this.b16_1 = operation;
  }
  protoOf(Permission).toString = function () {
    return PermissionedResourceTarget__toString_impl_d1bl1o(this.z15_1) + ':' + toString_0(this.b16_1.e16_1) + this.a16_1;
  };
  protoOf(Permission).hashCode = function () {
    var result = PermissionedResourceTarget__hashCode_impl_yshhuj(this.z15_1);
    result = imul(result, 31) + getStringHashCode(this.a16_1) | 0;
    result = imul(result, 31) + this.b16_1.hashCode() | 0;
    return result;
  };
  protoOf(Permission).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Permission))
      return false;
    var tmp0_other_with_cast = other instanceof Permission ? other : THROW_CCE();
    if (!(this.z15_1 === tmp0_other_with_cast.z15_1))
      return false;
    if (!(this.a16_1 === tmp0_other_with_cast.a16_1))
      return false;
    if (!this.b16_1.equals(tmp0_other_with_cast.b16_1))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.c15_1.j1();
  }
  function PermissionOperation$Companion$_anonymous__4cyuev() {
    return createSimpleEnumSerializer('id.walt.permissions.PermissionOperation', values());
  }
  var PermissionOperation_ADD_instance;
  var PermissionOperation_REMOVE_instance;
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    // Inline function 'kotlin.enumValues' call
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = values();
    var capacity = coerceAtLeast(mapCapacity(this_0.length), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var element = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$1 = new Char(element.e16_1);
      destination.m3(tmp$ret$1, element);
    }
    tmp.b15_1 = destination;
    var tmp_0 = this;
    var tmp_1 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_0.c15_1 = lazy(tmp_1, PermissionOperation$Companion$_anonymous__4cyuev);
  }
  protoOf(Companion_1).d15 = function (char) {
    var tmp0_elvis_lhs = this.b15_1.l1(new Char(char));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = toString_0(char);
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_entries();
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.e();
      while (_iterator__ex2g4s.f()) {
        var item = _iterator__ex2g4s.g();
        var tmp$ret$0 = new Char(item.e16_1);
        destination.m(tmp$ret$0);
      }
      var message = 'Invalid operation: ' + tmp_0 + ', allowed operations: ' + toString(destination);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Companion_1).t15 = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    PermissionOperation_initEntries();
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function values() {
    return [PermissionOperation_ADD_getInstance(), PermissionOperation_REMOVE_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var PermissionOperation_entriesInitialized;
  function PermissionOperation_initEntries() {
    if (PermissionOperation_entriesInitialized)
      return Unit_instance;
    PermissionOperation_entriesInitialized = true;
    PermissionOperation_ADD_instance = new PermissionOperation('ADD', 0, _Char___init__impl__6a9atx(43));
    PermissionOperation_REMOVE_instance = new PermissionOperation('REMOVE', 1, _Char___init__impl__6a9atx(45));
    Companion_getInstance_1();
  }
  var $ENTRIES;
  function PermissionOperation(name, ordinal, symbol) {
    Enum.call(this, name, ordinal);
    this.e16_1 = symbol;
  }
  function PermissionOperation_ADD_getInstance() {
    PermissionOperation_initEntries();
    return PermissionOperation_ADD_instance;
  }
  function PermissionOperation_REMOVE_getInstance() {
    PermissionOperation_initEntries();
    return PermissionOperation_REMOVE_instance;
  }
  function FlowPermissionSet$Companion$fromPermissionStringsFlow$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FlowPermissionSet$Companion$fromPermissionStringsFlow$slambda).o16 = function (it, $completion) {
    var tmp = this.p16(it, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(FlowPermissionSet$Companion$fromPermissionStringsFlow$slambda).x6 = function (p1, $completion) {
    return this.o16((!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FlowPermissionSet$Companion$fromPermissionStringsFlow$slambda).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        if (tmp === 0) {
          this.g6_1 = 1;
          return Companion_getInstance_0().x15(this.n16_1);
        } else if (tmp === 1) {
          throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(FlowPermissionSet$Companion$fromPermissionStringsFlow$slambda).p16 = function (it, completion) {
    var i = new FlowPermissionSet$Companion$fromPermissionStringsFlow$slambda(completion);
    i.n16_1 = it;
    return i;
  };
  function FlowPermissionSet$Companion$fromPermissionStringsFlow$slambda_0(resultContinuation) {
    var i = new FlowPermissionSet$Companion$fromPermissionStringsFlow$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.o16(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).fromPermissionStringsFlow = function (id, permissionStrings) {
    return new FlowPermissionSet(id, flatMapMerge(permissionStrings, VOID, FlowPermissionSet$Companion$fromPermissionStringsFlow$slambda_0(null)));
  };
  protoOf(Companion_2).fromPermissionStringFlow = function (id, permissionStrings) {
    return new FlowPermissionSet(id, Companion_getInstance_0().x15(permissionStrings));
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function FlowPermissionSet(id, permissions) {
    this.id = id;
    this.permissions = permissions;
  }
  protoOf(FlowPermissionSet).q16 = function () {
    return this.id;
  };
  protoOf(FlowPermissionSet).r16 = function () {
    return this.permissions;
  };
  protoOf(FlowPermissionSet).ca = function () {
    return this.id;
  };
  protoOf(FlowPermissionSet).da = function () {
    return this.permissions;
  };
  protoOf(FlowPermissionSet).s16 = function (id, permissions) {
    return new FlowPermissionSet(id, permissions);
  };
  protoOf(FlowPermissionSet).copy = function (id, permissions, $super) {
    id = id === VOID ? this.id : id;
    permissions = permissions === VOID ? this.permissions : permissions;
    return $super === VOID ? this.s16(id, permissions) : $super.s16.call(this, id, permissions);
  };
  protoOf(FlowPermissionSet).toString = function () {
    return 'FlowPermissionSet(id=' + this.id + ', permissions=' + toString(this.permissions) + ')';
  };
  protoOf(FlowPermissionSet).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + hashCode(this.permissions) | 0;
    return result;
  };
  protoOf(FlowPermissionSet).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FlowPermissionSet))
      return false;
    var tmp0_other_with_cast = other instanceof FlowPermissionSet ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!equals(this.permissions, tmp0_other_with_cast.permissions))
      return false;
    return true;
  };
  function PermissionTrie$PermissionTreeNode$Companion$$childSerializers$_anonymous__26h1uo() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function PermissionTrie$PermissionTreeNode$Companion$$childSerializers$_anonymous__26h1uo_0() {
    return new HashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_0());
  }
  function PermissionTreeNode_init_$Init$(id, $this) {
    PermissionTreeNode.call($this, id, ArrayList_init_$Create$_0(), HashMap_init_$Create$());
    return $this;
  }
  function PermissionTreeNode_init_$Create$(id) {
    return PermissionTreeNode_init_$Init$(id, objectCreate(protoOf(PermissionTreeNode)));
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PermissionTrie$PermissionTreeNode$Companion$$childSerializers$_anonymous__26h1uo);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.t16_1 = [null, tmp_1, lazy(tmp_2, PermissionTrie$PermissionTreeNode$Companion$$childSerializers$_anonymous__26h1uo_0)];
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.permissions.PermissionTrie.PermissionTreeNode', this, 3);
    tmp0_serialDesc.f14('thisName', false);
    tmp0_serialDesc.f14('permissionMethods', false);
    tmp0_serialDesc.f14('children', false);
    this.u16_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).t12 = function () {
    return this.u16_1;
  };
  protoOf($serializer_0).g14 = function () {
    var tmp0_cached = Companion_getInstance_3().t16_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].j1(), tmp0_cached[2].j1()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function PermissionTrie$Companion$$childSerializers$_anonymous__dn6dsv() {
    return new HashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_0());
  }
  function PermissionTreeNode(thisName, permissionMethods, children) {
    Companion_getInstance_3();
    this.v16_1 = thisName;
    this.w16_1 = permissionMethods;
    this.x16_1 = children;
  }
  protoOf(PermissionTreeNode).y16 = function (action) {
    return this.w16_1.g1(action) || this.w16_1.g1('all');
  };
  protoOf(PermissionTreeNode).z16 = function (action) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = this.w16_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      if (element === action || element === 'all') {
        destination.m(element);
      }
    }
    return destination;
  };
  protoOf(PermissionTreeNode).a17 = function (index) {
    var sb = StringBuilder_init_$Create$();
    sb.a6(times('  ', index) + ('- ' + this.v16_1 + ': ' + this.w16_1.toString()));
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.x16_1.p()) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this.x16_1.n1().e();
      while (_iterator__ex2g4s.f()) {
        var element = _iterator__ex2g4s.g();
        sb.a6('\n' + times('  ', index) + element.j1().a17(index + 2 | 0));
      }
    }
    return sb.toString();
  };
  protoOf(PermissionTreeNode).toString = function () {
    return this.a17(0);
  };
  protoOf(PermissionTreeNode).hashCode = function () {
    var result = getStringHashCode(this.v16_1);
    result = imul(result, 31) + this.w16_1.hashCode() | 0;
    result = imul(result, 31) + this.x16_1.hashCode() | 0;
    return result;
  };
  protoOf(PermissionTreeNode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PermissionTreeNode))
      return false;
    var tmp0_other_with_cast = other instanceof PermissionTreeNode ? other : THROW_CCE();
    if (!(this.v16_1 === tmp0_other_with_cast.v16_1))
      return false;
    if (!this.w16_1.equals(tmp0_other_with_cast.w16_1))
      return false;
    if (!this.x16_1.equals(tmp0_other_with_cast.x16_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.b17_1 = [lazy(tmp_0, PermissionTrie$Companion$$childSerializers$_anonymous__dn6dsv)];
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function PermissionTrie(root) {
    Companion_getInstance_4();
    root = root === VOID ? HashMap_init_$Create$() : root;
    this.c17_1 = root;
  }
  protoOf(PermissionTrie).toString = function () {
    var sb = StringBuilder_init_$Create$();
    sb.a6('[PermissionTrie]');
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.c17_1.n1().e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      // Inline function 'kotlin.collections.component2' call
      var node = element.j1();
      sb.a6('\n' + node.toString());
    }
    return sb.toString();
  };
  protoOf(PermissionTrie).d17 = function (id) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.c17_1;
    var value = this_0.l1(id);
    var tmp;
    if (value == null) {
      var answer = PermissionTreeNode_init_$Create$(id);
      this_0.m3(id, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  };
  protoOf(PermissionTrie).e17 = function (target, permission) {
    var targetPath = _PermissionedResourceTarget___get_path__impl__9prz4(target);
    var root = this.d17(targetPath.o(0));
    var remainingTraversals = drop_0(targetPath, 1);
    var currentNode = root;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = remainingTraversals.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      // Inline function 'kotlin.collections.getOrPut' call
      var this_0 = currentNode.x16_1;
      var value = this_0.l1(element);
      var tmp;
      if (value == null) {
        var answer = PermissionTreeNode_init_$Create$(element);
        this_0.m3(element, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      currentNode = tmp;
    }
    // Inline function 'kotlin.collections.plusAssign' call
    currentNode.w16_1.m(permission);
  };
  protoOf(PermissionTrie).f17 = function (target, permission) {
    var targetPath = _PermissionedResourceTarget___get_path__impl__9prz4(target);
    var tmp0_elvis_lhs = this.c17_1.l1(targetPath.o(0));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var root = tmp;
    var remainingTraversals = drop_0(targetPath, 1);
    var currentNode = root;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = remainingTraversals.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      if (currentNode.y16(permission))
        return true;
      var tmp0_elvis_lhs_0 = currentNode.x16_1.l1(element);
      var tmp1_elvis_lhs = tmp0_elvis_lhs_0 == null ? currentNode.x16_1.l1('*') : tmp0_elvis_lhs_0;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        return false;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      currentNode = tmp_0;
    }
    return currentNode.y16(permission);
  };
  protoOf(PermissionTrie).g17 = function (target, permission) {
    var targetPath = _PermissionedResourceTarget___get_path__impl__9prz4(target);
    var tmp0_elvis_lhs = this.c17_1.l1(targetPath.o(0));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return emptyList();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var root = tmp;
    var remainingTraversals = drop_0(targetPath, 1);
    var matching = ArrayList_init_$Create$_0();
    var currentPath = targetPath.o(0);
    var currentNode = root;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = remainingTraversals.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = currentNode.z16(permission).e();
      while (_iterator__ex2g4s_0.f()) {
        var element_0 = _iterator__ex2g4s_0.g();
        matching.m(new MinimalPermission(currentPath, element_0));
      }
      var tmp_0;
      if (!(currentNode.x16_1.l1(element) == null)) {
        tmp_0 = element;
      } else if (!(currentNode.x16_1.l1('*') == null)) {
        tmp_0 = '*';
      } else {
        return matching;
      }
      var selector = tmp_0;
      currentNode = ensureNotNull(currentNode.x16_1.l1(selector));
      currentPath = currentPath + ('.' + selector);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_1 = currentNode.z16(permission).e();
    while (_iterator__ex2g4s_1.f()) {
      var element_1 = _iterator__ex2g4s_1.g();
      matching.m(new MinimalPermission(currentPath, element_1));
    }
    return matching;
  };
  function _PermissionedResourceTarget___init__impl__z1gc1g(id) {
    return id;
  }
  function _PermissionedResourceTarget___get_id__impl__or40iy($this) {
    return $this;
  }
  function _PermissionedResourceTarget___get_path__impl__9prz4($this) {
    return split_0(_PermissionedResourceTarget___get_id__impl__or40iy($this), ['.']);
  }
  function PermissionedResourceTarget__toString_impl_d1bl1o($this) {
    return joinToString(_PermissionedResourceTarget___get_path__impl__9prz4($this), '.');
  }
  function PermissionedResourceTarget__hashCode_impl_yshhuj($this) {
    return getStringHashCode($this);
  }
  function PermissionChecker$PermissionInsights$Companion$$childSerializers$_anonymous__ktg08u() {
    return new ArrayListSerializer($serializer_getInstance());
  }
  function PermissionChecker$PermissionInsights$Companion$$childSerializers$_anonymous__ktg08u_0() {
    return new ArrayListSerializer($serializer_getInstance());
  }
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PermissionChecker$PermissionInsights$Companion$$childSerializers$_anonymous__ktg08u);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h17_1 = [null, null, tmp_1, lazy(tmp_2, PermissionChecker$PermissionInsights$Companion$$childSerializers$_anonymous__ktg08u_0), null];
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function PermissionInsights(target, operation, allowedBy, deniedBy, result) {
    Companion_getInstance_5();
    this.i17_1 = target;
    this.j17_1 = operation;
    this.k17_1 = allowedBy;
    this.l17_1 = deniedBy;
    this.m17_1 = result;
  }
  protoOf(PermissionInsights).toString = function () {
    return 'PermissionInsights(target=' + PermissionedResourceTarget__toString_impl_d1bl1o(this.i17_1) + ', operation=' + this.j17_1 + ', allowedBy=' + toString(this.k17_1) + ', deniedBy=' + toString(this.l17_1) + ', result=' + this.m17_1 + ')';
  };
  protoOf(PermissionInsights).hashCode = function () {
    var result = PermissionedResourceTarget__hashCode_impl_yshhuj(this.i17_1);
    result = imul(result, 31) + getStringHashCode(this.j17_1) | 0;
    result = imul(result, 31) + hashCode(this.k17_1) | 0;
    result = imul(result, 31) + hashCode(this.l17_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.m17_1) | 0;
    return result;
  };
  protoOf(PermissionInsights).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PermissionInsights))
      return false;
    var tmp0_other_with_cast = other instanceof PermissionInsights ? other : THROW_CCE();
    if (!(this.i17_1 === tmp0_other_with_cast.i17_1))
      return false;
    if (!(this.j17_1 === tmp0_other_with_cast.j17_1))
      return false;
    if (!equals(this.k17_1, tmp0_other_with_cast.k17_1))
      return false;
    if (!equals(this.l17_1, tmp0_other_with_cast.l17_1))
      return false;
    if (!(this.m17_1 === tmp0_other_with_cast.m17_1))
      return false;
    return true;
  };
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.n17_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).ns = function (value, $completion) {
    return this.n17_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).m2 = function () {
    return this.n17_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.m2(), other.m2());
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
    return hashCode(this.m2());
  };
  function PermissionChecker$applyPermissions$slambda(this$0, resultContinuation) {
    this.w17_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PermissionChecker$applyPermissions$slambda).y17 = function (it, $completion) {
    var tmp = this.z17(it, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(PermissionChecker$applyPermissions$slambda).x6 = function (p1, $completion) {
    return this.y17(p1 instanceof Permission ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PermissionChecker$applyPermissions$slambda).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        if (tmp === 0) {
          this.g6_1 = 1;
          switch (this.x17_1.b16_1.p1_1) {
            case 0:
              this.w17_1.allowTrie.e17(this.x17_1.z15_1, this.x17_1.a16_1);
              break;
            case 1:
              this.w17_1.denyTrie.e17(this.x17_1.z15_1, this.x17_1.a16_1);
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(PermissionChecker$applyPermissions$slambda).z17 = function (it, completion) {
    var i = new PermissionChecker$applyPermissions$slambda(this.w17_1, completion);
    i.x17_1 = it;
    return i;
  };
  function PermissionChecker$applyPermissions$slambda_0(this$0, resultContinuation) {
    var i = new PermissionChecker$applyPermissions$slambda(this$0, resultContinuation);
    var l = function (it, $completion) {
      return i.y17(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PermissionChecker$applyPermissionsAsync$slambda(this$0, $set, resultContinuation) {
    this.i18_1 = this$0;
    this.j18_1 = $set;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PermissionChecker$applyPermissionsAsync$slambda).k18 = function ($completion) {
    var tmp = this.l18($completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(PermissionChecker$applyPermissionsAsync$slambda).m18 = function ($completion) {
    return this.k18($completion);
  };
  protoOf(PermissionChecker$applyPermissionsAsync$slambda).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 2;
            this.f6_1 = 1;
            suspendResult = this.i18_1.n18(this.j18_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 2) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  protoOf(PermissionChecker$applyPermissionsAsync$slambda).l18 = function (completion) {
    return new PermissionChecker$applyPermissionsAsync$slambda(this.i18_1, this.j18_1, completion);
  };
  function PermissionChecker$applyPermissionsAsync$slambda_0(this$0, $set, resultContinuation) {
    var i = new PermissionChecker$applyPermissionsAsync$slambda(this$0, $set, resultContinuation);
    var l = function ($completion) {
      return i.k18($completion);
    };
    l.$arity = 0;
    return l;
  }
  function PermissionChecker() {
    this.allowTrie = new PermissionTrie();
    this.denyTrie = new PermissionTrie();
  }
  protoOf(PermissionChecker).o18 = function () {
    return this.allowTrie;
  };
  protoOf(PermissionChecker).p18 = function () {
    return this.denyTrie;
  };
  protoOf(PermissionChecker).q18 = function (set) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = set.s18_1.e();
    while (_iterator__ex2g4s.f()) {
      var element = _iterator__ex2g4s.g();
      this.allowTrie.e17(element.z15_1, element.a16_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_0 = set.t18_1.e();
    while (_iterator__ex2g4s_0.f()) {
      var element_0 = _iterator__ex2g4s_0.g();
      this.denyTrie.e17(element_0.z15_1, element_0.a16_1);
    }
  };
  protoOf(PermissionChecker).n18 = function (set, $completion) {
    var tmp = PermissionChecker$applyPermissions$slambda_0(this, null);
    return set.permissions.xr(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp), $completion);
  };
  protoOf(PermissionChecker).checkPermission = function (target, operation) {
    return this.u18(_PermissionedResourceTarget___init__impl__z1gc1g(target), operation);
  };
  protoOf(PermissionChecker).u18 = function (target, operation) {
    var isAllowed = this.allowTrie.f17(target, operation);
    if (!isAllowed) {
      return false;
    }
    var isDenied = this.denyTrie.f17(target, operation);
    return !isDenied;
  };
  protoOf(PermissionChecker).v18 = function (target, operation) {
    return this.checkPermissionInsights(_PermissionedResourceTarget___init__impl__z1gc1g(target), operation);
  };
  protoOf(PermissionChecker).checkPermissionInsights = function (target, operation) {
    var allowedBy = this.allowTrie.g17(target, operation);
    var deniedBy = this.denyTrie.g17(target, operation);
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!allowedBy.p()) {
      tmp = deniedBy.p();
    } else {
      tmp = false;
    }
    var result = tmp;
    return new PermissionInsights(target, operation, allowedBy, deniedBy, result);
  };
  protoOf(PermissionChecker).w18 = function (set) {
    var tmp = PermissionChecker$applyPermissionsAsync$slambda_0(this, set, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function FlowUtils$splitIntoFlow$slambda($this_splitIntoFlow, $delimiter, resultContinuation) {
    this.f19_1 = $this_splitIntoFlow;
    this.g19_1 = $delimiter;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FlowUtils$splitIntoFlow$slambda).k19 = function ($this$flow, $completion) {
    var tmp = this.l19($this$flow, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf(FlowUtils$splitIntoFlow$slambda).x6 = function (p1, $completion) {
    return this.k19((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FlowUtils$splitIntoFlow$slambda).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 6;
            this.i19_1 = 0;
            this.f6_1 = 1;
            continue $sm;
          case 1:
            if (!(this.i19_1 < this.f19_1.length)) {
              this.f6_1 = 5;
              continue $sm;
            }

            this.j19_1 = indexOf(this.f19_1, this.g19_1, this.i19_1);
            if (this.j19_1 === -1) {
              this.f6_1 = 4;
              var tmp0 = this.f19_1;
              var startIndex = this.i19_1;
              suspendResult = this.h19_1.ns(tmp0.substring(startIndex), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.f6_1 = 2;
              var tmp2 = this.f19_1;
              var tmp3 = this.i19_1;
              var endIndex = this.j19_1;
              suspendResult = this.h19_1.ns(tmp2.substring(tmp3, endIndex), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            this.i19_1 = this.j19_1 + this.g19_1.length | 0;
            this.f6_1 = 3;
            continue $sm;
          case 3:
            this.f6_1 = 1;
            continue $sm;
          case 4:
            this.f6_1 = 5;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.i6_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.g6_1 === 6) {
          throw e;
        } else {
          this.f6_1 = this.g6_1;
          this.i6_1 = e;
        }
      }
     while (true);
  };
  protoOf(FlowUtils$splitIntoFlow$slambda).l19 = function ($this$flow, completion) {
    var i = new FlowUtils$splitIntoFlow$slambda(this.f19_1, this.g19_1, completion);
    i.h19_1 = $this$flow;
    return i;
  };
  function FlowUtils$splitIntoFlow$slambda_0($this_splitIntoFlow, $delimiter, resultContinuation) {
    var i = new FlowUtils$splitIntoFlow$slambda($this_splitIntoFlow, $delimiter, resultContinuation);
    var l = function ($this$flow, $completion) {
      return i.k19($this$flow, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function FlowUtils() {
  }
  protoOf(FlowUtils).y15 = function (_this__u8e3s4, delimiter) {
    return flow(FlowUtils$splitIntoFlow$slambda_0(_this__u8e3s4, delimiter, null));
  };
  var FlowUtils_instance;
  function FlowUtils_getInstance() {
    return FlowUtils_instance;
  }
  function times(_this__u8e3s4, n) {
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    // Inline function 'kotlin.repeat' call
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this_0.a6(_this__u8e3s4);
      }
       while (inductionVariable < n);
    return this_0.toString();
  }
  //region block: post-declaration
  protoOf($serializer).h14 = typeParametersSerializers;
  protoOf($serializer_0).h14 = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_2 = new Companion_2();
  FlowUtils_instance = new FlowUtils();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$permissions = $id$walt.permissions || ($id$walt.permissions = {});
    $id$walt$permissions.FlowPermissionSet = FlowPermissionSet;
    defineProp($id$walt$permissions.FlowPermissionSet, 'Companion', Companion_getInstance_2);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$permissions = $id$walt.permissions || ($id$walt.permissions = {});
    $id$walt$permissions.PermissionChecker = PermissionChecker;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=waltid-permissions.js.map
