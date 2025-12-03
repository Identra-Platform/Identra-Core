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
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
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
    return runner.u6c(createState$lambda(producer, runner));
  }
  function IsolateState$access$lambda($block, this$0) {
    return function () {
      return $block(this$0.z6c_1.w6c_1);
    };
  }
  function IsolateState(stateHolder) {
    this.z6c_1 = stateHolder;
  }
  protoOf(IsolateState).a6d = function (r) {
    var tmp;
    if (this.z6c_1.y6c_1) {
      tmp = new StateHolder(r, this.z6c_1.v6c_1);
    } else {
      throw IllegalStateException_init_$Create$('Must fork state from the state thread');
    }
    return tmp;
  };
  protoOf(IsolateState).b6d = function (block) {
    var tmp;
    if (this.z6c_1.y6c_1) {
      tmp = block(this.z6c_1.w6c_1);
    } else {
      tmp = this.z6c_1.v6c_1.u6c(IsolateState$access$lambda(block, this));
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
  protoOf(BackgroundStateRunner).u6c = function (block) {
    return block();
  };
  function StateHolder(t, stateRunner) {
    this.v6c_1 = stateRunner;
    this.w6c_1 = t;
    this.x6c_1 = false;
    this.y6c_1 = true;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = IsolateState;
  _.$_$.b = createState;
  //endregion
  return _;
}));

//# sourceMappingURL=Stately-stately-isolate.js.map
