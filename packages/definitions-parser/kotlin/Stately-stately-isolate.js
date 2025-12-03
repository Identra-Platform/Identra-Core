(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Stately-stately-isolate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Stately-stately-isolate'.");
    }
    globalThis['Stately-stately-isolate'] = factory(typeof globalThis['Stately-stately-isolate'] === 'undefined' ? {} : globalThis['Stately-stately-isolate'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var protoOf = kotlin_kotlin.$_$.gd;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(IsolateState, 'IsolateState');
  initMetadataForClass(BackgroundStateRunner, 'BackgroundStateRunner', BackgroundStateRunner);
  initMetadataForClass(StateHolder, 'StateHolder');
  //endregion
  function get_defaultStateRunner() {
    _init_properties_IsoState_kt__9sa4es();
    return defaultStateRunner;
  }
  var defaultStateRunner;
  function createState(stateRunner, producer) {
    _init_properties_IsoState_kt__9sa4es();
    var runner = stateRunner == null ? get_defaultStateRunner() : stateRunner;
    return runner.q6a(createState$lambda(producer, runner));
  }
  function IsolateState$access$lambda($block, this$0) {
    return function () {
      return $block(this$0.v6a_1.s6a_1);
    };
  }
  function IsolateState(stateHolder) {
    this.v6a_1 = stateHolder;
  }
  protoOf(IsolateState).w6a = function (r) {
    var tmp;
    if (this.v6a_1.u6a_1) {
      tmp = new StateHolder(r, this.v6a_1.r6a_1);
    } else {
      throw IllegalStateException_init_$Create$('Must fork state from the state thread');
    }
    return tmp;
  };
  protoOf(IsolateState).x6a = function (block) {
    var tmp;
    if (this.v6a_1.u6a_1) {
      tmp = block(this.v6a_1.s6a_1);
    } else {
      tmp = this.v6a_1.r6a_1.q6a(IsolateState$access$lambda(block, this));
    }
    return tmp;
  };
  function createState$lambda($producer, $runner) {
    return function () {
      return new StateHolder($producer(), $runner);
    };
  }
  var properties_initialized_IsoState_kt_zbnlma;
  function _init_properties_IsoState_kt__9sa4es() {
    if (!properties_initialized_IsoState_kt_zbnlma) {
      properties_initialized_IsoState_kt_zbnlma = true;
      defaultStateRunner = new BackgroundStateRunner();
    }
  }
  function BackgroundStateRunner() {
  }
  protoOf(BackgroundStateRunner).q6a = function (block) {
    return block();
  };
  function StateHolder(t, stateRunner) {
    this.r6a_1 = stateRunner;
    this.s6a_1 = t;
    this.t6a_1 = false;
    this.u6a_1 = true;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = IsolateState;
  _.$_$.b = createState;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-isolate.js.map
