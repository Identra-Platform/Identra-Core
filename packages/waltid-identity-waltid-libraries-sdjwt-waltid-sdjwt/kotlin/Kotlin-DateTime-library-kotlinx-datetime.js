(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@js-joda/core', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@js-joda/core'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['@js-joda/core'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency '@js-joda/core' was not found. Please, check whether '@js-joda/core' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Kotlin-DateTime-library-kotlinx-datetime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Kotlin-DateTime-library-kotlinx-datetime'.");
    }
    globalThis['Kotlin-DateTime-library-kotlinx-datetime'] = factory(typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined' ? {} : globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['@js-joda/core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$_js_joda_core_gcv2k, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Instant = $module$_js_joda_core_gcv2k.Instant;
  var Clock = $module$_js_joda_core_gcv2k.Clock;
  var protoOf = kotlin_kotlin.$_$.a8;
  var initMetadataForObject = kotlin_kotlin.$_$.k7;
  var Long = kotlin_kotlin.$_$.fa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g7;
  var numberToLong = kotlin_kotlin.$_$.y7;
  var THROW_CCE = kotlin_kotlin.$_$.ia;
  var initMetadataForClass = kotlin_kotlin.$_$.f7;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(System, 'System');
  initMetadataForCompanion(Companion);
  initMetadataForClass(Instant_0, 'Instant');
  //endregion
  function System() {
  }
  protoOf(System).s1g = function () {
    return Companion_getInstance().s1g();
  };
  var System_instance;
  function System_getInstance() {
    return System_instance;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    var tmp$ret$1 = Instant.ofEpochSecond((new Long(-931914497, -750)).z2(), 999999999);
    tmp.t1g_1 = new Instant_0(tmp$ret$1);
    var tmp_0 = this;
    // Inline function 'kotlinx.datetime.jsTry' call
    var tmp$ret$3 = Instant.ofEpochSecond((new Long(1151527680, 720)).z2(), 0);
    tmp_0.u1g_1 = new Instant_0(tmp$ret$3);
    this.v1g_1 = new Instant_0(Instant.MIN);
    this.w1g_1 = new Instant_0(Instant.MAX);
  }
  protoOf(Companion).s1g = function () {
    return new Instant_0(Clock.systemUTC().instant());
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Instant_0(value) {
    Companion_getInstance();
    this.x1g_1 = value;
  }
  protoOf(Instant_0).y1g = function () {
    return numberToLong(this.x1g_1.epochSecond());
  };
  protoOf(Instant_0).z1g = function (other) {
    return this.x1g_1.compareTo(other.x1g_1);
  };
  protoOf(Instant_0).n1 = function (other) {
    return this.z1g(other instanceof Instant_0 ? other : THROW_CCE());
  };
  protoOf(Instant_0).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      if (other instanceof Instant_0) {
        tmp_0 = this.x1g_1 === other.x1g_1 || this.x1g_1.equals(other.x1g_1);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(Instant_0).hashCode = function () {
    return this.x1g_1.hashCode();
  };
  protoOf(Instant_0).toString = function () {
    return this.x1g_1.toString();
  };
  //region block: init
  System_instance = new System();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = System_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=Kotlin-DateTime-library-kotlinx-datetime.js.map
