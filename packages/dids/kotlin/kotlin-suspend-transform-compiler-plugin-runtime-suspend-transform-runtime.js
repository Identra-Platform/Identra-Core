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
  var VOID = kotlin_kotlin.$_$.j;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var CoroutineImpl = kotlin_kotlin.$_$.wa;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var protoOf = kotlin_kotlin.$_$.wc;
  var THROW_CCE = kotlin_kotlin.$_$.ih;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var isInterface = kotlin_kotlin.$_$.hc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.fa;
  var initMetadataForLambda = kotlin_kotlin.$_$.xb;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
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
    this.j1g_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($runInAsync$$slambda).l1g = function ($this$promise, $completion) {
    var tmp = this.m1g($this$promise, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf($runInAsync$$slambda).ua = function (p1, $completion) {
    return this.l1g((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf($runInAsync$$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.j1g_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf($runInAsync$$slambda).m1g = function ($this$promise, completion) {
    var i = new $runInAsync$$slambda(this.j1g_1, completion);
    i.k1g_1 = $this$promise;
    return i;
  };
  function $runInAsync$$slambda_0($block, resultContinuation) {
    var i = new $runInAsync$$slambda($block, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.l1g($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_RunInSuspendJs_kt_c7ufpz;
  function _init_properties_RunInSuspendJs_kt__7srfl7() {
    if (!properties_initialized_RunInSuspendJs_kt_c7ufpz) {
      properties_initialized_RunInSuspendJs_kt_c7ufpz = true;
      CoroutineContext4Js = Dispatchers_getInstance().e13_1.ij(SupervisorJob());
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
