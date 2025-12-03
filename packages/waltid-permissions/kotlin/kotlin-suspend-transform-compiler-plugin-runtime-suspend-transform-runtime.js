(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'.");
    }
    globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'] = factory(typeof globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'] === 'undefined' ? {} : globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.c;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var CoroutineImpl = kotlin_kotlin.$_$.z2;
  var Unit_instance = kotlin_kotlin.$_$.l1;
  var protoOf = kotlin_kotlin.$_$.x3;
  var THROW_CCE = kotlin_kotlin.$_$.t4;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var isInterface = kotlin_kotlin.$_$.v3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.k2;
  var initMetadataForLambda = kotlin_kotlin.$_$.t3;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda($runInAsync$$slambda, CoroutineImpl, VOID, [1]);
  //endregion
  function get_CoroutineContext4Js() {
    _init_properties_RunInSuspendJs_kt__7srfl7();
    return CoroutineContext4Js;
  }
  var CoroutineContext4Js;
  function get_CoroutineScope4Js() {
    _init_properties_RunInSuspendJs_kt__7srfl7();
    return CoroutineScope4Js;
  }
  var CoroutineScope4Js;
  function $runInAsync$(block, scope) {
    scope = scope === VOID ? null : scope;
    _init_properties_RunInSuspendJs_kt__7srfl7();
    var tmp = scope == null ? get_CoroutineScope4Js() : scope;
    return promise(tmp, VOID, VOID, $runInAsync$$slambda_0(block, null));
  }
  function $runInAsync$$slambda($block, resultContinuation) {
    this.a11_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($runInAsync$$slambda).c11 = function ($this$promise, $completion) {
    var tmp = this.gu($this$promise, $completion);
    tmp.h6_1 = Unit_instance;
    tmp.i6_1 = null;
    return tmp.n6();
  };
  protoOf($runInAsync$$slambda).x6 = function (p1, $completion) {
    return this.c11((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf($runInAsync$$slambda).n6 = function () {
    var suspendResult = this.h6_1;
    $sm: do
      try {
        var tmp = this.f6_1;
        switch (tmp) {
          case 0:
            this.g6_1 = 2;
            this.f6_1 = 1;
            suspendResult = this.a11_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf($runInAsync$$slambda).gu = function ($this$promise, completion) {
    var i = new $runInAsync$$slambda(this.a11_1, completion);
    i.b11_1 = $this$promise;
    return i;
  };
  function $runInAsync$$slambda_0($block, resultContinuation) {
    var i = new $runInAsync$$slambda($block, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.c11($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_RunInSuspendJs_kt_c7ufpz;
  function _init_properties_RunInSuspendJs_kt__7srfl7() {
    if (!properties_initialized_RunInSuspendJs_kt_c7ufpz) {
      properties_initialized_RunInSuspendJs_kt_c7ufpz = true;
      CoroutineContext4Js = Dispatchers_getInstance().ok_1.na(SupervisorJob());
      CoroutineScope4Js = CoroutineScope_0(get_CoroutineContext4Js());
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = $runInAsync$;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js.map
