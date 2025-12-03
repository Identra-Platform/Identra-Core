(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './ktor-ktor-http.js', './ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'.");
    }
    if (typeof globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'. Its dependency 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'.");
    }
    globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'] = factory(typeof globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'] === 'undefined' ? {} : globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'], globalThis['kotlin-kotlin-stdlib'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_serialization_kotlinx, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.j;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var serialization = kotlin_io_ktor_ktor_serialization_kotlinx.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_DefaultJson() {
    _init_properties_JsonSupport_kt__yf438r();
    return DefaultJson;
  }
  var DefaultJson;
  function json(_this__u8e3s4, json, contentType) {
    json = json === VOID ? get_DefaultJson() : json;
    contentType = contentType === VOID ? Application_getInstance().x2s_1 : contentType;
    _init_properties_JsonSupport_kt__yf438r();
    serialization(_this__u8e3s4, contentType, json);
  }
  function DefaultJson$lambda($this$Json) {
    _init_properties_JsonSupport_kt__yf438r();
    $this$Json.f4o_1 = true;
    $this$Json.i4o_1 = true;
    $this$Json.t4o_1 = true;
    $this$Json.u4o_1 = true;
    $this$Json.j4o_1 = false;
    $this$Json.v4o_1 = false;
    return Unit_instance;
  }
  var properties_initialized_JsonSupport_kt_9cgd93;
  function _init_properties_JsonSupport_kt__yf438r() {
    if (!properties_initialized_JsonSupport_kt_9cgd93) {
      properties_initialized_JsonSupport_kt_9cgd93 = true;
      DefaultJson = Json(VOID, DefaultJson$lambda);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = json;
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js.map
