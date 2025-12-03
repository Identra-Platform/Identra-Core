(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-atomicfu'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-atomicfu'.");
    }
    globalThis['kotlinx-atomicfu'] = factory(typeof globalThis['kotlinx-atomicfu'] === 'undefined' ? {} : globalThis['kotlinx-atomicfu'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.ce;
  var defineProp = kotlin_kotlin.$_$.rc;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  var VOID = kotlin_kotlin.$_$.j;
  var toString = kotlin_kotlin.$_$.sk;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(atomicfu$AtomicRefArray$ref, 'AtomicArray');
  initMetadataForClass(atomicfu$TraceBase, 'TraceBase');
  initMetadataForObject(None, 'None', VOID, atomicfu$TraceBase);
  initMetadataForClass(AtomicRef, 'AtomicRef');
  initMetadataForClass(AtomicBoolean, 'AtomicBoolean');
  initMetadataForClass(AtomicLong, 'AtomicLong');
  initMetadataForClass(AtomicInt, 'AtomicInt');
  initMetadataForClass(ReentrantLock, 'ReentrantLock', ReentrantLock);
  //endregion
  function atomicfu$AtomicRefArray$ref(size) {
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = Array(size);
    while (tmp_0 < size) {
      tmp_1[tmp_0] = atomic$ref$1(null);
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.es_1 = tmp_1;
  }
  protoOf(atomicfu$AtomicRefArray$ref).fs = function () {
    return this.es_1.length;
  };
  protoOf(atomicfu$AtomicRefArray$ref).atomicfu$get = function (index) {
    return this.es_1[index];
  };
  function atomicfu$AtomicRefArray$ofNulls(size) {
    return new atomicfu$AtomicRefArray$ref(size);
  }
  function None() {
    None_instance = this;
    atomicfu$TraceBase.call(this);
  }
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function atomicfu$TraceBase() {
  }
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$1 = function (event) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$2 = function (event1, event2) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  protoOf(atomicfu$TraceBase).atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  function AtomicRef(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicRef).gs = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicRef).hs = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicRef).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicRef).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicRef).toString = function () {
    return toString(this.kotlinx$atomicfu$value);
  };
  function atomic$ref$1(initial) {
    return atomic$ref$(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicBoolean).is = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicBoolean).hs = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicBoolean).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicBoolean).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicBoolean).toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$boolean$1(initial) {
    return atomic$boolean$(initial, None_getInstance());
  }
  function AtomicLong(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicLong).js = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicLong).hs = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).atomicfu$compareAndSet = function (expect, update) {
    if (!this.kotlinx$atomicfu$value.equals(expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicLong).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicLong).atomicfu$getAndIncrement$long = function () {
    var _unary__edvuaz = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = _unary__edvuaz.h3();
    return _unary__edvuaz;
  };
  protoOf(AtomicLong).atomicfu$getAndDecrement$long = function () {
    var _unary__edvuaz = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = _unary__edvuaz.i3();
    return _unary__edvuaz;
  };
  protoOf(AtomicLong).atomicfu$getAndAdd$long = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.c3(delta);
    return oldValue;
  };
  protoOf(AtomicLong).atomicfu$addAndGet$long = function (delta) {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.c3(delta);
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).atomicfu$incrementAndGet$long = function () {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.h3();
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).atomicfu$decrementAndGet$long = function () {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.i3();
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicLong).toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$long$1(initial) {
    return atomic$long$(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this.kotlinx$atomicfu$value = value;
  }
  protoOf(AtomicInt).ks = function (_set____db54di) {
    this.kotlinx$atomicfu$value = _set____db54di;
  };
  protoOf(AtomicInt).hs = function () {
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).atomicfu$compareAndSet = function (expect, update) {
    if (!(this.kotlinx$atomicfu$value === expect))
      return false;
    this.kotlinx$atomicfu$value = update;
    return true;
  };
  protoOf(AtomicInt).atomicfu$getAndSet = function (value) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = value;
    return oldValue;
  };
  protoOf(AtomicInt).atomicfu$getAndIncrement = function () {
    var _unary__edvuaz = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = _unary__edvuaz + 1 | 0;
    return _unary__edvuaz;
  };
  protoOf(AtomicInt).atomicfu$getAndDecrement = function () {
    var _unary__edvuaz = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = _unary__edvuaz - 1 | 0;
    return _unary__edvuaz;
  };
  protoOf(AtomicInt).atomicfu$getAndAdd = function (delta) {
    var oldValue = this.kotlinx$atomicfu$value;
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return oldValue;
  };
  protoOf(AtomicInt).atomicfu$addAndGet = function (delta) {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + delta | 0;
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).atomicfu$incrementAndGet = function () {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value + 1 | 0;
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).atomicfu$decrementAndGet = function () {
    this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value - 1 | 0;
    return this.kotlinx$atomicfu$value;
  };
  protoOf(AtomicInt).toString = function () {
    return this.kotlinx$atomicfu$value.toString();
  };
  function atomic$int$1(initial) {
    return atomic$int$(initial, None_getInstance());
  }
  function atomic$ref$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicRef(initial);
  }
  function atomic$boolean$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicBoolean(initial);
  }
  function atomic$long$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicLong(initial);
  }
  function atomic$int$(initial, trace) {
    trace = trace === VOID ? None_getInstance() : trace;
    return new AtomicInt(initial);
  }
  function get_atomicfu$reentrantLock() {
    _init_properties_Synchronized_kt__f4zdjg();
    return Lock;
  }
  var Lock;
  function ReentrantLock() {
  }
  var properties_initialized_Synchronized_kt_8bwsba;
  function _init_properties_Synchronized_kt__f4zdjg() {
    if (!properties_initialized_Synchronized_kt_8bwsba) {
      properties_initialized_Synchronized_kt_8bwsba = true;
      Lock = new ReentrantLock();
    }
  }
  //region block: post-declaration
  defineProp(protoOf(atomicfu$AtomicRefArray$ref), 'atomicfu$size', protoOf(atomicfu$AtomicRefArray$ref).fs);
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_atomicfu$reentrantLock;
  _.$_$.b = atomicfu$AtomicRefArray$ofNulls;
  _.$_$.c = atomic$boolean$1;
  _.$_$.d = atomic$long$1;
  _.$_$.e = atomic$ref$1;
  _.$_$.f = atomic$int$1;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-atomicfu.js.map
