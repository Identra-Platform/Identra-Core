(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-json.js', './ktor-ktor-client-ktor-client-plugins-ktor-client-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./ktor-ktor-client-ktor-client-plugins-ktor-client-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-json-ktor-client-serialization'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-json-ktor-client-serialization'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-json-ktor-client-serialization'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-json-ktor-client-serialization'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-json'] === 'undefined') {
      throw new Error("Error loading module 'ktor-ktor-client-ktor-client-plugins-ktor-client-json-ktor-client-serialization'. Its dependency 'ktor-ktor-client-ktor-client-plugins-ktor-client-json' was not found. Please, check whether 'ktor-ktor-client-ktor-client-plugins-ktor-client-json' is loaded prior to 'ktor-ktor-client-ktor-client-plugins-ktor-client-json-ktor-client-serialization'.");
    }
    globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-json-ktor-client-serialization'] = factory(typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-json-ktor-client-serialization'] === 'undefined' ? {} : globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-json-ktor-client-serialization'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-json']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_client_json) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var VOID = kotlin_kotlin.$_$.j;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var protoOf = kotlin_kotlin.$_$.pc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.mb;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  var get_serializersStore = kotlin_io_ktor_ktor_client_json.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.rb;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(KotlinxSerializer, 'KotlinxSerializer', KotlinxSerializer);
  initMetadataForObject(SerializerInitializer, 'SerializerInitializer');
  //endregion
  function KotlinxSerializer$Companion$DefaultJson$lambda($this$Json) {
    $this$Json.i4o_1 = false;
    $this$Json.h4o_1 = false;
    $this$Json.t4o_1 = true;
    $this$Json.v4o_1 = false;
    return Unit_instance;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    tmp.c51_1 = Json(VOID, KotlinxSerializer$Companion$DefaultJson$lambda);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function KotlinxSerializer(json) {
    Companion_getInstance();
    json = json === VOID ? Companion_getInstance().c51_1 : json;
    this.d51_1 = json;
  }
  var initializer;
  function SerializerInitializer() {
    SerializerInitializer_instance = this;
    var tmp0 = get_serializersStore();
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new KotlinxSerializer();
    tmp0.n(element);
  }
  var SerializerInitializer_instance;
  function SerializerInitializer_getInstance() {
    if (SerializerInitializer_instance == null)
      new SerializerInitializer();
    return SerializerInitializer_instance;
  }
  //region block: eager init
  initializer = SerializerInitializer_getInstance();
  //endregion
  return _;
}));

//# sourceMappingURL=ktor-ktor-client-ktor-client-plugins-ktor-client-json-ktor-client-serialization.js.map
