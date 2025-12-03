(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-json'.");
    }
    globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-json'] = factory(typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-json'] === 'undefined' ? {} : globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-json'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_serializersStore() {
    _init_properties_DefaultJs_kt__opfp8o();
    return serializersStore;
  }
  var serializersStore;
  var properties_initialized_DefaultJs_kt_mit67a;
  function _init_properties_DefaultJs_kt__opfp8o() {
    if (!properties_initialized_DefaultJs_kt_mit67a) {
      properties_initialized_DefaultJs_kt_mit67a = true;
      // Inline function 'kotlin.collections.mutableListOf' call
      serializersStore = ArrayList_init_$Create$();
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_serializersStore;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-json.js.map
