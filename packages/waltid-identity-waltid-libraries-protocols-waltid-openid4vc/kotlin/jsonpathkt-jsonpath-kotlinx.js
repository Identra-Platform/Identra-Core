(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './jsonpathkt-jsonpath-core.js', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./jsonpathkt-jsonpath-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['jsonpathkt-jsonpath-core'] === 'undefined') {
      throw new Error("Error loading module 'jsonpathkt-jsonpath-kotlinx'. Its dependency 'jsonpathkt-jsonpath-core' was not found. Please, check whether 'jsonpathkt-jsonpath-core' is loaded prior to 'jsonpathkt-jsonpath-kotlinx'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'jsonpathkt-jsonpath-kotlinx'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'jsonpathkt-jsonpath-kotlinx'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'jsonpathkt-jsonpath-kotlinx'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'jsonpathkt-jsonpath-kotlinx'.");
    }
    globalThis['jsonpathkt-jsonpath-kotlinx'] = factory(typeof globalThis['jsonpathkt-jsonpath-kotlinx'] === 'undefined' ? {} : globalThis['jsonpathkt-jsonpath-kotlinx'], globalThis['jsonpathkt-jsonpath-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_com_eygraber_jsonpath_core, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var JsonNode = kotlin_com_eygraber_jsonpath_core.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nk;
  var JsonType_Primitive_getInstance = kotlin_com_eygraber_jsonpath_core.$_$.i;
  var JsonType_Null_getInstance = kotlin_com_eygraber_jsonpath_core.$_$.g;
  var JsonNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.s;
  var JsonType_Object_getInstance = kotlin_com_eygraber_jsonpath_core.$_$.h;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var JsonType_Array_getInstance = kotlin_com_eygraber_jsonpath_core.$_$.f;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var protoOf = kotlin_kotlin.$_$.ce;
  var get_contentOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.y;
  var JsonPrimitive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var KtList = kotlin_kotlin.$_$.t6;
  var isInterface = kotlin_kotlin.$_$.nd;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var VOID = kotlin_kotlin.$_$.j;
  var emptyList = kotlin_kotlin.$_$.k8;
  var Companion_getInstance = kotlin_com_eygraber_jsonpath_core.$_$.l;
  var _JsonPath___get_tokens__impl__ney223 = kotlin_com_eygraber_jsonpath_core.$_$.j;
  var Collection = kotlin_kotlin.$_$.o6;
  var WildcardToken = kotlin_com_eygraber_jsonpath_core.$_$.d;
  var lastOrNull = kotlin_kotlin.$_$.k9;
  var ArrayAccessorToken = kotlin_com_eygraber_jsonpath_core.$_$.b;
  var ObjectAccessorToken = kotlin_com_eygraber_jsonpath_core.$_$.c;
  var listOf = kotlin_kotlin.$_$.r9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(KotlinxJsonNode, 'KotlinxJsonNode', VOID, JsonNode);
  //endregion
  function get_defaultEmptyJsonArray() {
    _init_properties_KotlinxJsonNode_kt__pe3enl();
    return defaultEmptyJsonArray;
  }
  var defaultEmptyJsonArray;
  function KotlinxJsonNode(element, isWildcardScope) {
    JsonNode.call(this, element, isWildcardScope);
    var tmp = this;
    var tmp0_subject = element instanceof JsonElement ? element : THROW_CCE();
    var tmp_0;
    if (tmp0_subject instanceof JsonArray) {
      tmp_0 = JsonType_Array_getInstance();
    } else {
      if (tmp0_subject instanceof JsonObject) {
        tmp_0 = JsonType_Object_getInstance();
      } else {
        if (tmp0_subject instanceof JsonPrimitive) {
          var tmp_1;
          if (element instanceof JsonNull) {
            tmp_1 = JsonType_Null_getInstance();
          } else {
            tmp_1 = JsonType_Primitive_getInstance();
          }
          tmp_0 = tmp_1;
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    tmp.me5_1 = tmp_0;
  }
  protoOf(KotlinxJsonNode).fa1 = function () {
    return this.me5_1;
  };
  protoOf(KotlinxJsonNode).oe4 = function () {
    var tmp = this.me4_1;
    return tmp instanceof JsonArray ? tmp : THROW_CCE();
  };
  protoOf(KotlinxJsonNode).pe4 = function () {
    var tmp = this.me4_1;
    return tmp instanceof JsonObject ? tmp : THROW_CCE();
  };
  protoOf(KotlinxJsonNode).qe4 = function () {
    var tmp = this.me4_1;
    return (tmp instanceof JsonObject ? tmp : THROW_CCE()).p2();
  };
  protoOf(KotlinxJsonNode).re4 = function () {
    var tmp = this.me4_1;
    // Inline function 'kotlin.with' call
    var $this$with = tmp instanceof JsonPrimitive ? tmp : THROW_CCE();
    return $this$with.r4u() ? get_contentOrNull($this$with) : null;
  };
  protoOf(KotlinxJsonNode).se4 = function () {
    return get_defaultEmptyJsonArray();
  };
  protoOf(KotlinxJsonNode).te4 = function (_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 == null) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4 instanceof JsonNull;
    }
    return tmp;
  };
  protoOf(KotlinxJsonNode).ue4 = function () {
    var tmp = this.me4_1;
    return !(tmp instanceof JsonNull);
  };
  protoOf(KotlinxJsonNode).xe4 = function (content) {
    return JsonPrimitive_0(content);
  };
  protoOf(KotlinxJsonNode).ye4 = function (list) {
    return new JsonArray(isInterface(list, KtList) ? list : THROW_CCE());
  };
  protoOf(KotlinxJsonNode).ze4 = function (element, isWildcardScope) {
    return new KotlinxJsonNode(element, isWildcardScope);
  };
  var properties_initialized_KotlinxJsonNode_kt_mbwzsf;
  function _init_properties_KotlinxJsonNode_kt__pe3enl() {
    if (!properties_initialized_KotlinxJsonNode_kt_mbwzsf) {
      properties_initialized_KotlinxJsonNode_kt_mbwzsf = true;
      defaultEmptyJsonArray = new JsonArray(emptyList());
    }
  }
  function resolveOrNull(_this__u8e3s4, path, options) {
    options = options === VOID ? Companion_getInstance().ie4_1 : options;
    return resolveOrNull_0(path, _this__u8e3s4, options);
  }
  function resolveOrNull_0(_this__u8e3s4, json, options) {
    options = options === VOID ? Companion_getInstance().ie4_1 : options;
    if (json instanceof JsonNull)
      return null;
    // Inline function 'com.nfeld.jsonpathkt.resolveOrNull' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = new KotlinxJsonNode(json, false);
    var _iterator__ex2g4s = _JsonPath___get_tokens__impl__ney223(_this__u8e3s4).q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var tmp0_safe_receiver = accumulator;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = element.ce5(tmp0_safe_receiver);
      }
      accumulator = tmp;
    }
    var tmp0_safe_receiver_0 = accumulator;
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      var isRoot = _JsonPath___get_tokens__impl__ney223(_this__u8e3s4).h();
      var tmp0 = _JsonPath___get_tokens__impl__ney223(_this__u8e3s4);
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_1;
        if (isInterface(tmp0, Collection)) {
          tmp_1 = tmp0.h();
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$4 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_0 = tmp0.q();
        while (_iterator__ex2g4s_0.r()) {
          var element_0 = _iterator__ex2g4s_0.s();
          if (element_0 instanceof WildcardToken) {
            tmp$ret$4 = true;
            break $l$block_0;
          }
        }
        tmp$ret$4 = false;
      }
      var containsWildcard = tmp$ret$4;
      var lastToken = lastOrNull(_JsonPath___get_tokens__impl__ney223(_this__u8e3s4));
      var tmp_2;
      if (lastToken instanceof ObjectAccessorToken) {
        tmp_2 = true;
      } else {
        tmp_2 = lastToken instanceof ArrayAccessorToken;
      }
      var isAccessingAnObjectOrArray = tmp_2;
      var isNodeAnArray = tmp0_safe_receiver_0.fa1().equals(JsonType_Array_getInstance());
      var wrappingRequired = options.je4_1 && !containsWildcard && (isRoot || isAccessingAnObjectOrArray || !isNodeAnArray);
      tmp_0 = wrappingRequired ? tmp0_safe_receiver_0.ae5(tmp0_safe_receiver_0.ye4(listOf(tmp0_safe_receiver_0.me4_1))) : tmp0_safe_receiver_0;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp_3 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.me4_1;
    return tmp_3 instanceof JsonElement ? tmp_3 : null;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = resolveOrNull;
  //endregion
  return _;
}));

//# sourceMappingURL=jsonpathkt-jsonpath-kotlinx.js.map
