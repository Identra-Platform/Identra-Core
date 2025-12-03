(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './jsonpathkt-jsonpath-core.js', './kotlinx-coroutines-core.js', './jsonpathkt-jsonpath-kotlinx.js', './json-schema-validator-root-json-schema-validator.js', './kotlin-logging.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./jsonpathkt-jsonpath-core.js'), require('./kotlinx-coroutines-core.js'), require('./jsonpathkt-jsonpath-kotlinx.js'), require('./json-schema-validator-root-json-schema-validator.js'), require('./kotlin-logging.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'definitions-parser'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'definitions-parser'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'definitions-parser'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'definitions-parser'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'definitions-parser'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'definitions-parser'.");
    }
    if (typeof globalThis['jsonpathkt-jsonpath-core'] === 'undefined') {
      throw new Error("Error loading module 'definitions-parser'. Its dependency 'jsonpathkt-jsonpath-core' was not found. Please, check whether 'jsonpathkt-jsonpath-core' is loaded prior to 'definitions-parser'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'definitions-parser'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'definitions-parser'.");
    }
    if (typeof globalThis['jsonpathkt-jsonpath-kotlinx'] === 'undefined') {
      throw new Error("Error loading module 'definitions-parser'. Its dependency 'jsonpathkt-jsonpath-kotlinx' was not found. Please, check whether 'jsonpathkt-jsonpath-kotlinx' is loaded prior to 'definitions-parser'.");
    }
    if (typeof globalThis['json-schema-validator-root-json-schema-validator'] === 'undefined') {
      throw new Error("Error loading module 'definitions-parser'. Its dependency 'json-schema-validator-root-json-schema-validator' was not found. Please, check whether 'json-schema-validator-root-json-schema-validator' is loaded prior to 'definitions-parser'.");
    }
    if (typeof globalThis['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'definitions-parser'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'definitions-parser'.");
    }
    globalThis['definitions-parser'] = factory(typeof globalThis['definitions-parser'] === 'undefined' ? {} : globalThis['definitions-parser'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['jsonpathkt-jsonpath-core'], globalThis['kotlinx-coroutines-core'], globalThis['jsonpathkt-jsonpath-kotlinx'], globalThis['json-schema-validator-root-json-schema-validator'], globalThis['kotlin-logging']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_com_eygraber_jsonpath_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_eygraber_jsonpath_kotlinx, kotlin_io_github_optimumcode_json_schema_validator, kotlin_io_github_oshai_kotlin_logging) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var VOID = kotlin_kotlin.$_$.j;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.r;
  var lazy = kotlin_kotlin.$_$.ik;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var toString = kotlin_kotlin.$_$.pk;
  var equals = kotlin_kotlin.$_$.rc;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var toString_0 = kotlin_kotlin.$_$.fe;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var getBooleanHashCode = kotlin_kotlin.$_$.tc;
  var hashCode = kotlin_kotlin.$_$.wc;
  var Enum = kotlin_kotlin.$_$.xi;
  var JsonElementSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var CoroutineImpl = kotlin_kotlin.$_$.bc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.lb;
  var initMetadataForLambda = kotlin_kotlin.$_$.cd;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var Companion_instance = kotlin_com_eygraber_jsonpath_core.$_$.k;
  var JsonPath = kotlin_com_eygraber_jsonpath_core.$_$.e;
  var FunctionAdapter = kotlin_kotlin.$_$.fc;
  var isInterface = kotlin_kotlin.$_$.md;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var resolveOrNull = kotlin_com_eygraber_jsonpath_kotlinx.$_$.a;
  var Companion_instance_0 = kotlin_io_github_optimumcode_json_schema_validator.$_$.a;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c1;
  var get_contentOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.x;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var Companion_instance_1 = kotlin_io_github_optimumcode_json_schema_validator.$_$.b;
  var Collection = kotlin_kotlin.$_$.o6;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var isBlank = kotlin_kotlin.$_$.hg;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Statuses, 'Statuses', Statuses, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForClass(Field, 'Field', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForClass(Subject, 'Subject', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForClass(StatusDirective, 'StatusDirective', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Directive, 'Directive', VOID, Enum);
  initMetadataForClass(Constraints, 'Constraints', Constraints, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(InputDescriptor, 'InputDescriptor', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PresentationDefinition, 'PresentationDefinition', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForObject(PresentationDefinitionParser, 'PresentationDefinitionParser');
  initMetadataForLambda(JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForClass(JsonObjectEnquirer$filterDocumentsByConstraints$$inlined$filter$1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(JsonObjectEnquirer, 'JsonObjectEnquirer', JsonObjectEnquirer);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Descriptor, 'Descriptor', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PresentationSubmission, 'PresentationSubmission', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForClass(Rule, 'Rule', VOID, Enum);
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SubmissionRequirement, 'SubmissionRequirement', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  //endregion
  var Directive_required_instance;
  var Directive_preferred_instance;
  var Directive_disallowed_instance;
  function values() {
    return [Directive_required_getInstance(), Directive_preferred_getInstance(), Directive_disallowed_getInstance()];
  }
  var Directive_entriesInitialized;
  function Directive_initEntries() {
    if (Directive_entriesInitialized)
      return Unit_instance;
    Directive_entriesInitialized = true;
    Directive_required_instance = new Directive('required', 0);
    Directive_preferred_instance = new Directive('preferred', 1);
    Directive_disallowed_instance = new Directive('disallowed', 2);
  }
  function Companion() {
  }
  var Companion_instance_2;
  function Companion_getInstance() {
    return Companion_instance_2;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.definitionparser.PresentationDefinition.InputDescriptor.Constraints.Statuses', this, 3);
    tmp0_serialDesc.x2b('active', true);
    tmp0_serialDesc.x2b('suspended', true);
    tmp0_serialDesc.x2b('revoked', true);
    this.he5_1 = tmp0_serialDesc;
  }
  protoOf($serializer).ie5 = function (encoder, value) {
    var tmp0_desc = this.he5_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.je5_1 == null)) {
      tmp1_output.a26(tmp0_desc, 0, $serializer_getInstance_2(), value.je5_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.ke5_1 == null)) {
      tmp1_output.a26(tmp0_desc, 1, $serializer_getInstance_2(), value.ke5_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.le5_1 == null)) {
      tmp1_output.a26(tmp0_desc, 2, $serializer_getInstance_2(), value.le5_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer).v20 = function (encoder, value) {
    return this.ie5(encoder, value instanceof Statuses ? value : THROW_CCE());
  };
  protoOf($serializer).w20 = function (decoder) {
    var tmp0_desc = this.he5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, $serializer_getInstance_2(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.v24(tmp0_desc, 1, $serializer_getInstance_2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, $serializer_getInstance_2(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, $serializer_getInstance_2(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.v24(tmp0_desc, 1, $serializer_getInstance_2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, $serializer_getInstance_2(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i24(tmp0_desc);
    return Statuses_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer).u20 = function () {
    return this.he5_1;
  };
  protoOf($serializer).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable($serializer_getInstance_2()), get_nullable($serializer_getInstance_2()), get_nullable($serializer_getInstance_2())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Statuses_init_$Init$(seen0, active, suspended, revoked, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().he5_1);
    }
    if (0 === (seen0 & 1))
      $this.je5_1 = null;
    else
      $this.je5_1 = active;
    if (0 === (seen0 & 2))
      $this.ke5_1 = null;
    else
      $this.ke5_1 = suspended;
    if (0 === (seen0 & 4))
      $this.le5_1 = null;
    else
      $this.le5_1 = revoked;
    return $this;
  }
  function Statuses_init_$Create$(seen0, active, suspended, revoked, serializationConstructorMarker) {
    return Statuses_init_$Init$(seen0, active, suspended, revoked, serializationConstructorMarker, objectCreate(protoOf(Statuses)));
  }
  function PresentationDefinition$InputDescriptor$Constraints$Field$Companion$$childSerializers$_anonymous__ml7mow() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_0() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.me5_1 = [null, null, lazy(tmp_0, PresentationDefinition$InputDescriptor$Constraints$Field$Companion$$childSerializers$_anonymous__ml7mow), null, null, null, null, null];
  }
  var Companion_instance_3;
  function Companion_getInstance_0() {
    if (Companion_instance_3 == null)
      new Companion_0();
    return Companion_instance_3;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.definitionparser.PresentationDefinition.InputDescriptor.Constraints.Field', this, 8);
    tmp0_serialDesc.x2b('id', true);
    tmp0_serialDesc.x2b('optional', true);
    tmp0_serialDesc.x2b('path', false);
    tmp0_serialDesc.x2b('purpose', true);
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('intent_to_retain', true);
    tmp0_serialDesc.x2b('filter', true);
    tmp0_serialDesc.x2b('predicate', true);
    this.ne5_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).oe5 = function (encoder, value) {
    var tmp0_desc = this.ne5_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_0().me5_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.pe5_1 == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.pe5_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.qe5_1 == null)) {
      tmp1_output.a26(tmp0_desc, 1, BooleanSerializer_getInstance(), value.qe5_1);
    }
    tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.re5_1);
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.se5_1 == null)) {
      tmp1_output.a26(tmp0_desc, 3, StringSerializer_getInstance(), value.se5_1);
    }
    if (tmp1_output.e26(tmp0_desc, 4) ? true : !(value.te5_1 == null)) {
      tmp1_output.a26(tmp0_desc, 4, StringSerializer_getInstance(), value.te5_1);
    }
    if (tmp1_output.e26(tmp0_desc, 5) ? true : !(value.ue5_1 == null)) {
      tmp1_output.a26(tmp0_desc, 5, BooleanSerializer_getInstance(), value.ue5_1);
    }
    if (tmp1_output.e26(tmp0_desc, 6) ? true : !(value.ve5_1 == null)) {
      tmp1_output.a26(tmp0_desc, 6, JsonObjectSerializer_getInstance(), value.ve5_1);
    }
    if (tmp1_output.e26(tmp0_desc, 7) ? true : !(value.we5_1 == null)) {
      tmp1_output.a26(tmp0_desc, 7, StringSerializer_getInstance(), value.we5_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_0).v20 = function (encoder, value) {
    return this.oe5(encoder, value instanceof Field ? value : THROW_CCE());
  };
  protoOf($serializer_0).w20 = function (decoder) {
    var tmp0_desc = this.ne5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.h24(tmp0_desc);
    var tmp13_cached = Companion_getInstance_0().me5_1;
    if (tmp12_input.x24()) {
      tmp4_local0 = tmp12_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.v24(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.t24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, JsonObjectSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.v24(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.v24(tmp0_desc, 1, BooleanSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.t24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, JsonObjectSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.v24(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.i24(tmp0_desc);
    return Field_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_0).u20 = function () {
    return this.ne5_1;
  };
  protoOf($serializer_0).m2c = function () {
    var tmp0_cached = Companion_getInstance_0().me5_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), tmp0_cached[2].b1(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(JsonObjectSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Field_init_$Init$(seen0, id, optional, path, purpose, name, intentToRetain, filter, predicate, serializationConstructorMarker, $this) {
    if (!(4 === (4 & seen0))) {
      throwMissingFieldException(seen0, 4, $serializer_getInstance_0().ne5_1);
    }
    if (0 === (seen0 & 1))
      $this.pe5_1 = null;
    else
      $this.pe5_1 = id;
    if (0 === (seen0 & 2))
      $this.qe5_1 = null;
    else
      $this.qe5_1 = optional;
    $this.re5_1 = path;
    if (0 === (seen0 & 8))
      $this.se5_1 = null;
    else
      $this.se5_1 = purpose;
    if (0 === (seen0 & 16))
      $this.te5_1 = null;
    else
      $this.te5_1 = name;
    if (0 === (seen0 & 32))
      $this.ue5_1 = null;
    else
      $this.ue5_1 = intentToRetain;
    if (0 === (seen0 & 64))
      $this.ve5_1 = null;
    else
      $this.ve5_1 = filter;
    if (0 === (seen0 & 128))
      $this.we5_1 = null;
    else
      $this.we5_1 = predicate;
    return $this;
  }
  function Field_init_$Create$(seen0, id, optional, path, purpose, name, intentToRetain, filter, predicate, serializationConstructorMarker) {
    return Field_init_$Init$(seen0, id, optional, path, purpose, name, intentToRetain, filter, predicate, serializationConstructorMarker, objectCreate(protoOf(Field)));
  }
  function PresentationDefinition$InputDescriptor$Constraints$Subject$Companion$$childSerializers$_anonymous__6lvob6() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function PresentationDefinition$InputDescriptor$Constraints$Subject$Companion$$childSerializers$_anonymous__6lvob6_0() {
    return createSimpleEnumSerializer('id.walt.definitionparser.PresentationDefinition.InputDescriptor.Directive', values());
  }
  function Companion_1() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PresentationDefinition$InputDescriptor$Constraints$Subject$Companion$$childSerializers$_anonymous__6lvob6);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xe5_1 = [tmp_1, lazy(tmp_2, PresentationDefinition$InputDescriptor$Constraints$Subject$Companion$$childSerializers$_anonymous__6lvob6_0)];
  }
  var Companion_instance_4;
  function Companion_getInstance_1() {
    if (Companion_instance_4 == null)
      new Companion_1();
    return Companion_instance_4;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.definitionparser.PresentationDefinition.InputDescriptor.Constraints.Subject', this, 2);
    tmp0_serialDesc.x2b('field_id', false);
    tmp0_serialDesc.x2b('directive', false);
    this.ye5_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).ze5 = function (encoder, value) {
    var tmp0_desc = this.ye5_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().xe5_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.ae6_1);
    tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.be6_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_1).v20 = function (encoder, value) {
    return this.ze5(encoder, value instanceof Subject ? value : THROW_CCE());
  };
  protoOf($serializer_1).w20 = function (decoder) {
    var tmp0_desc = this.ye5_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_1().xe5_1;
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, tmp7_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, tmp7_cached[1].b1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, tmp7_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, tmp7_cached[1].b1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return Subject_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_1).u20 = function () {
    return this.ye5_1;
  };
  protoOf($serializer_1).m2c = function () {
    var tmp0_cached = Companion_getInstance_1().xe5_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), tmp0_cached[1].b1()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function Subject_init_$Init$(seen0, fieldId, directive, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_1().ye5_1);
    }
    $this.ae6_1 = fieldId;
    $this.be6_1 = directive;
    return $this;
  }
  function Subject_init_$Create$(seen0, fieldId, directive, serializationConstructorMarker) {
    return Subject_init_$Init$(seen0, fieldId, directive, serializationConstructorMarker, objectCreate(protoOf(Subject)));
  }
  function PresentationDefinition$InputDescriptor$Constraints$StatusDirective$Companion$$childSerializers$_anonymous__7nxnfh() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function PresentationDefinition$InputDescriptor$Constraints$StatusDirective$Companion$$childSerializers$_anonymous__7nxnfh_0() {
    return createSimpleEnumSerializer('id.walt.definitionparser.PresentationDefinition.InputDescriptor.Directive', values());
  }
  function Companion_2() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PresentationDefinition$InputDescriptor$Constraints$StatusDirective$Companion$$childSerializers$_anonymous__7nxnfh);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ce6_1 = [tmp_1, lazy(tmp_2, PresentationDefinition$InputDescriptor$Constraints$StatusDirective$Companion$$childSerializers$_anonymous__7nxnfh_0)];
  }
  var Companion_instance_5;
  function Companion_getInstance_2() {
    if (Companion_instance_5 == null)
      new Companion_2();
    return Companion_instance_5;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.definitionparser.PresentationDefinition.InputDescriptor.Constraints.StatusDirective', this, 2);
    tmp0_serialDesc.x2b('type', false);
    tmp0_serialDesc.x2b('directive', false);
    this.de6_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).ee6 = function (encoder, value) {
    var tmp0_desc = this.de6_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().ce6_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.fe6_1);
    tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.ge6_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_2).v20 = function (encoder, value) {
    return this.ee6(encoder, value instanceof StatusDirective ? value : THROW_CCE());
  };
  protoOf($serializer_2).w20 = function (decoder) {
    var tmp0_desc = this.de6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_2().ce6_1;
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, tmp7_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, tmp7_cached[1].b1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, tmp7_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, tmp7_cached[1].b1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return StatusDirective_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).u20 = function () {
    return this.de6_1;
  };
  protoOf($serializer_2).m2c = function () {
    var tmp0_cached = Companion_getInstance_2().ce6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), tmp0_cached[1].b1()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function StatusDirective_init_$Init$(seen0, type, directive, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_2().de6_1);
    }
    $this.fe6_1 = type;
    $this.ge6_1 = directive;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.check' call
    if (!!$this.fe6_1.h()) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    return $this;
  }
  function StatusDirective_init_$Create$(seen0, type, directive, serializationConstructorMarker) {
    return StatusDirective_init_$Init$(seen0, type, directive, serializationConstructorMarker, objectCreate(protoOf(StatusDirective)));
  }
  function PresentationDefinition$InputDescriptor$Constraints$Companion$$childSerializers$_anonymous__famtue() {
    return createSimpleEnumSerializer('id.walt.definitionparser.PresentationDefinition.InputDescriptor.Directive', values());
  }
  function PresentationDefinition$InputDescriptor$Constraints$Companion$$childSerializers$_anonymous__famtue_0() {
    return new ArrayListSerializer($serializer_getInstance_0());
  }
  function PresentationDefinition$InputDescriptor$Constraints$Companion$$childSerializers$_anonymous__famtue_1() {
    return new ArrayListSerializer($serializer_getInstance_1());
  }
  function PresentationDefinition$InputDescriptor$Constraints$Companion$$childSerializers$_anonymous__famtue_2() {
    return new ArrayListSerializer($serializer_getInstance_1());
  }
  function Statuses(active, suspended, revoked) {
    active = active === VOID ? null : active;
    suspended = suspended === VOID ? null : suspended;
    revoked = revoked === VOID ? null : revoked;
    this.je5_1 = active;
    this.ke5_1 = suspended;
    this.le5_1 = revoked;
  }
  protoOf(Statuses).toString = function () {
    return 'Statuses(active=' + toString(this.je5_1) + ', suspended=' + toString(this.ke5_1) + ', revoked=' + toString(this.le5_1) + ')';
  };
  protoOf(Statuses).hashCode = function () {
    var result = this.je5_1 == null ? 0 : this.je5_1.hashCode();
    result = imul(result, 31) + (this.ke5_1 == null ? 0 : this.ke5_1.hashCode()) | 0;
    result = imul(result, 31) + (this.le5_1 == null ? 0 : this.le5_1.hashCode()) | 0;
    return result;
  };
  protoOf(Statuses).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Statuses))
      return false;
    var tmp0_other_with_cast = other instanceof Statuses ? other : THROW_CCE();
    if (!equals(this.je5_1, tmp0_other_with_cast.je5_1))
      return false;
    if (!equals(this.ke5_1, tmp0_other_with_cast.ke5_1))
      return false;
    if (!equals(this.le5_1, tmp0_other_with_cast.le5_1))
      return false;
    return true;
  };
  function Field() {
  }
  protoOf(Field).toString = function () {
    return 'Field(id=' + this.pe5_1 + ', optional=' + this.qe5_1 + ', path=' + toString_0(this.re5_1) + ', purpose=' + this.se5_1 + ', name=' + this.te5_1 + ', intentToRetain=' + this.ue5_1 + ', filter=' + toString(this.ve5_1) + ', predicate=' + this.we5_1 + ')';
  };
  protoOf(Field).hashCode = function () {
    var result = this.pe5_1 == null ? 0 : getStringHashCode(this.pe5_1);
    result = imul(result, 31) + (this.qe5_1 == null ? 0 : getBooleanHashCode(this.qe5_1)) | 0;
    result = imul(result, 31) + hashCode(this.re5_1) | 0;
    result = imul(result, 31) + (this.se5_1 == null ? 0 : getStringHashCode(this.se5_1)) | 0;
    result = imul(result, 31) + (this.te5_1 == null ? 0 : getStringHashCode(this.te5_1)) | 0;
    result = imul(result, 31) + (this.ue5_1 == null ? 0 : getBooleanHashCode(this.ue5_1)) | 0;
    result = imul(result, 31) + (this.ve5_1 == null ? 0 : this.ve5_1.hashCode()) | 0;
    result = imul(result, 31) + (this.we5_1 == null ? 0 : getStringHashCode(this.we5_1)) | 0;
    return result;
  };
  protoOf(Field).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Field))
      return false;
    var tmp0_other_with_cast = other instanceof Field ? other : THROW_CCE();
    if (!(this.pe5_1 == tmp0_other_with_cast.pe5_1))
      return false;
    if (!(this.qe5_1 == tmp0_other_with_cast.qe5_1))
      return false;
    if (!equals(this.re5_1, tmp0_other_with_cast.re5_1))
      return false;
    if (!(this.se5_1 == tmp0_other_with_cast.se5_1))
      return false;
    if (!(this.te5_1 == tmp0_other_with_cast.te5_1))
      return false;
    if (!(this.ue5_1 == tmp0_other_with_cast.ue5_1))
      return false;
    if (!equals(this.ve5_1, tmp0_other_with_cast.ve5_1))
      return false;
    if (!(this.we5_1 == tmp0_other_with_cast.we5_1))
      return false;
    return true;
  };
  function Subject() {
  }
  protoOf(Subject).toString = function () {
    return 'Subject(fieldId=' + toString_0(this.ae6_1) + ', directive=' + this.be6_1.toString() + ')';
  };
  protoOf(Subject).hashCode = function () {
    var result = hashCode(this.ae6_1);
    result = imul(result, 31) + this.be6_1.hashCode() | 0;
    return result;
  };
  protoOf(Subject).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Subject))
      return false;
    var tmp0_other_with_cast = other instanceof Subject ? other : THROW_CCE();
    if (!equals(this.ae6_1, tmp0_other_with_cast.ae6_1))
      return false;
    if (!this.be6_1.equals(tmp0_other_with_cast.be6_1))
      return false;
    return true;
  };
  function StatusDirective() {
  }
  protoOf(StatusDirective).toString = function () {
    return 'StatusDirective(type=' + toString_0(this.fe6_1) + ', directive=' + this.ge6_1.toString() + ')';
  };
  protoOf(StatusDirective).hashCode = function () {
    var result = hashCode(this.fe6_1);
    result = imul(result, 31) + this.ge6_1.hashCode() | 0;
    return result;
  };
  protoOf(StatusDirective).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StatusDirective))
      return false;
    var tmp0_other_with_cast = other instanceof StatusDirective ? other : THROW_CCE();
    if (!equals(this.fe6_1, tmp0_other_with_cast.fe6_1))
      return false;
    if (!this.ge6_1.equals(tmp0_other_with_cast.ge6_1))
      return false;
    return true;
  };
  function Companion_3() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PresentationDefinition$InputDescriptor$Constraints$Companion$$childSerializers$_anonymous__famtue);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, PresentationDefinition$InputDescriptor$Constraints$Companion$$childSerializers$_anonymous__famtue_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, PresentationDefinition$InputDescriptor$Constraints$Companion$$childSerializers$_anonymous__famtue_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.he6_1 = [tmp_1, null, tmp_3, null, tmp_5, lazy(tmp_6, PresentationDefinition$InputDescriptor$Constraints$Companion$$childSerializers$_anonymous__famtue_2)];
  }
  var Companion_instance_6;
  function Companion_getInstance_3() {
    if (Companion_instance_6 == null)
      new Companion_3();
    return Companion_instance_6;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.definitionparser.PresentationDefinition.InputDescriptor.Constraints', this, 6);
    tmp0_serialDesc.x2b('limit_disclosure', true);
    tmp0_serialDesc.x2b('statuses', true);
    tmp0_serialDesc.x2b('fields', true);
    tmp0_serialDesc.x2b('subject_is_issuer', true);
    tmp0_serialDesc.x2b('is_holder', true);
    tmp0_serialDesc.x2b('same_subject', true);
    this.ie6_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).je6 = function (encoder, value) {
    var tmp0_desc = this.ie6_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().he6_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ke6_1 == null)) {
      tmp1_output.a26(tmp0_desc, 0, tmp2_cached[0].b1(), value.ke6_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.le6_1 == null)) {
      tmp1_output.a26(tmp0_desc, 1, $serializer_getInstance(), value.le6_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.me6_1 == null)) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].b1(), value.me6_1);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.ne6_1 == null)) {
      tmp1_output.a26(tmp0_desc, 3, StringSerializer_getInstance(), value.ne6_1);
    }
    if (tmp1_output.e26(tmp0_desc, 4) ? true : !(value.oe6_1 == null)) {
      tmp1_output.a26(tmp0_desc, 4, tmp2_cached[4].b1(), value.oe6_1);
    }
    if (tmp1_output.e26(tmp0_desc, 5) ? true : !(value.pe6_1 == null)) {
      tmp1_output.a26(tmp0_desc, 5, tmp2_cached[5].b1(), value.pe6_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_3).v20 = function (encoder, value) {
    return this.je6(encoder, value instanceof Constraints ? value : THROW_CCE());
  };
  protoOf($serializer_3).w20 = function (decoder) {
    var tmp0_desc = this.ie6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.h24(tmp0_desc);
    var tmp11_cached = Companion_getInstance_3().he6_1;
    if (tmp10_input.x24()) {
      tmp4_local0 = tmp10_input.v24(tmp0_desc, 0, tmp11_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.v24(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.v24(tmp0_desc, 2, tmp11_cached[2].b1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.v24(tmp0_desc, 4, tmp11_cached[4].b1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.v24(tmp0_desc, 5, tmp11_cached[5].b1(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.v24(tmp0_desc, 0, tmp11_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.v24(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.v24(tmp0_desc, 2, tmp11_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.v24(tmp0_desc, 4, tmp11_cached[4].b1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.v24(tmp0_desc, 5, tmp11_cached[5].b1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.i24(tmp0_desc);
    return Constraints_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_3).u20 = function () {
    return this.ie6_1;
  };
  protoOf($serializer_3).m2c = function () {
    var tmp0_cached = Companion_getInstance_3().he6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].b1()), get_nullable($serializer_getInstance()), get_nullable(tmp0_cached[2].b1()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[4].b1()), get_nullable(tmp0_cached[5].b1())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function Constraints_init_$Init$(seen0, limitDisclosure, statuses, fields, subjectIsIssuer, isHolder, sameSubject, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_3().ie6_1);
    }
    if (0 === (seen0 & 1))
      $this.ke6_1 = null;
    else
      $this.ke6_1 = limitDisclosure;
    if (0 === (seen0 & 2))
      $this.le6_1 = null;
    else
      $this.le6_1 = statuses;
    if (0 === (seen0 & 4))
      $this.me6_1 = null;
    else
      $this.me6_1 = fields;
    if (0 === (seen0 & 8))
      $this.ne6_1 = null;
    else
      $this.ne6_1 = subjectIsIssuer;
    if (0 === (seen0 & 16))
      $this.oe6_1 = null;
    else
      $this.oe6_1 = isHolder;
    if (0 === (seen0 & 32))
      $this.pe6_1 = null;
    else
      $this.pe6_1 = sameSubject;
    return $this;
  }
  function Constraints_init_$Create$(seen0, limitDisclosure, statuses, fields, subjectIsIssuer, isHolder, sameSubject, serializationConstructorMarker) {
    return Constraints_init_$Init$(seen0, limitDisclosure, statuses, fields, subjectIsIssuer, isHolder, sameSubject, serializationConstructorMarker, objectCreate(protoOf(Constraints)));
  }
  function PresentationDefinition$InputDescriptor$Companion$$childSerializers$_anonymous__iph5h4() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Directive(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Constraints(limitDisclosure, statuses, fields, subjectIsIssuer, isHolder, sameSubject) {
    Companion_getInstance_3();
    limitDisclosure = limitDisclosure === VOID ? null : limitDisclosure;
    statuses = statuses === VOID ? null : statuses;
    fields = fields === VOID ? null : fields;
    subjectIsIssuer = subjectIsIssuer === VOID ? null : subjectIsIssuer;
    isHolder = isHolder === VOID ? null : isHolder;
    sameSubject = sameSubject === VOID ? null : sameSubject;
    this.ke6_1 = limitDisclosure;
    this.le6_1 = statuses;
    this.me6_1 = fields;
    this.ne6_1 = subjectIsIssuer;
    this.oe6_1 = isHolder;
    this.pe6_1 = sameSubject;
  }
  protoOf(Constraints).toString = function () {
    return 'Constraints(limitDisclosure=' + toString(this.ke6_1) + ', statuses=' + toString(this.le6_1) + ', fields=' + toString(this.me6_1) + ', subjectIsIssuer=' + this.ne6_1 + ', isHolder=' + toString(this.oe6_1) + ', sameSubject=' + toString(this.pe6_1) + ')';
  };
  protoOf(Constraints).hashCode = function () {
    var result = this.ke6_1 == null ? 0 : this.ke6_1.hashCode();
    result = imul(result, 31) + (this.le6_1 == null ? 0 : this.le6_1.hashCode()) | 0;
    result = imul(result, 31) + (this.me6_1 == null ? 0 : hashCode(this.me6_1)) | 0;
    result = imul(result, 31) + (this.ne6_1 == null ? 0 : getStringHashCode(this.ne6_1)) | 0;
    result = imul(result, 31) + (this.oe6_1 == null ? 0 : hashCode(this.oe6_1)) | 0;
    result = imul(result, 31) + (this.pe6_1 == null ? 0 : hashCode(this.pe6_1)) | 0;
    return result;
  };
  protoOf(Constraints).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Constraints))
      return false;
    var tmp0_other_with_cast = other instanceof Constraints ? other : THROW_CCE();
    if (!equals(this.ke6_1, tmp0_other_with_cast.ke6_1))
      return false;
    if (!equals(this.le6_1, tmp0_other_with_cast.le6_1))
      return false;
    if (!equals(this.me6_1, tmp0_other_with_cast.me6_1))
      return false;
    if (!(this.ne6_1 == tmp0_other_with_cast.ne6_1))
      return false;
    if (!equals(this.oe6_1, tmp0_other_with_cast.oe6_1))
      return false;
    if (!equals(this.pe6_1, tmp0_other_with_cast.pe6_1))
      return false;
    return true;
  };
  function Companion_4() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qe6_1 = [null, null, null, null, lazy(tmp_0, PresentationDefinition$InputDescriptor$Companion$$childSerializers$_anonymous__iph5h4), null];
  }
  var Companion_instance_7;
  function Companion_getInstance_4() {
    if (Companion_instance_7 == null)
      new Companion_4();
    return Companion_instance_7;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.definitionparser.PresentationDefinition.InputDescriptor', this, 6);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('purpose', true);
    tmp0_serialDesc.x2b('format', true);
    tmp0_serialDesc.x2b('group', true);
    tmp0_serialDesc.x2b('constraints', false);
    this.re6_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).se6 = function (encoder, value) {
    var tmp0_desc = this.re6_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().qe6_1;
    tmp1_output.w25(tmp0_desc, 0, value.te6_1);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.ue6_1 == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value.ue6_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.ve6_1 == null)) {
      tmp1_output.a26(tmp0_desc, 2, StringSerializer_getInstance(), value.ve6_1);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.we6_1 == null)) {
      tmp1_output.a26(tmp0_desc, 3, JsonElementSerializer_getInstance(), value.we6_1);
    }
    if (tmp1_output.e26(tmp0_desc, 4) ? true : !(value.xe6_1 == null)) {
      tmp1_output.a26(tmp0_desc, 4, tmp2_cached[4].b1(), value.xe6_1);
    }
    tmp1_output.y25(tmp0_desc, 5, $serializer_getInstance_3(), value.ye6_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_4).v20 = function (encoder, value) {
    return this.se6(encoder, value instanceof InputDescriptor ? value : THROW_CCE());
  };
  protoOf($serializer_4).w20 = function (decoder) {
    var tmp0_desc = this.re6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.h24(tmp0_desc);
    var tmp11_cached = Companion_getInstance_4().qe6_1;
    if (tmp10_input.x24()) {
      tmp4_local0 = tmp10_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.v24(tmp0_desc, 3, JsonElementSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.v24(tmp0_desc, 4, tmp11_cached[4].b1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.t24(tmp0_desc, 5, $serializer_getInstance_3(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.v24(tmp0_desc, 3, JsonElementSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.v24(tmp0_desc, 4, tmp11_cached[4].b1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.t24(tmp0_desc, 5, $serializer_getInstance_3(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.i24(tmp0_desc);
    return InputDescriptor_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_4).u20 = function () {
    return this.re6_1;
  };
  protoOf($serializer_4).m2c = function () {
    var tmp0_cached = Companion_getInstance_4().qe6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(JsonElementSerializer_getInstance()), get_nullable(tmp0_cached[4].b1()), $serializer_getInstance_3()];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function InputDescriptor_init_$Init$(seen0, id, name, purpose, format, group, constraints, serializationConstructorMarker, $this) {
    if (!(33 === (33 & seen0))) {
      throwMissingFieldException(seen0, 33, $serializer_getInstance_4().re6_1);
    }
    $this.te6_1 = id;
    if (0 === (seen0 & 2))
      $this.ue6_1 = null;
    else
      $this.ue6_1 = name;
    if (0 === (seen0 & 4))
      $this.ve6_1 = null;
    else
      $this.ve6_1 = purpose;
    if (0 === (seen0 & 8))
      $this.we6_1 = null;
    else
      $this.we6_1 = format;
    if (0 === (seen0 & 16))
      $this.xe6_1 = null;
    else
      $this.xe6_1 = group;
    $this.ye6_1 = constraints;
    return $this;
  }
  function InputDescriptor_init_$Create$(seen0, id, name, purpose, format, group, constraints, serializationConstructorMarker) {
    return InputDescriptor_init_$Init$(seen0, id, name, purpose, format, group, constraints, serializationConstructorMarker, objectCreate(protoOf(InputDescriptor)));
  }
  function Directive_required_getInstance() {
    Directive_initEntries();
    return Directive_required_instance;
  }
  function Directive_preferred_getInstance() {
    Directive_initEntries();
    return Directive_preferred_instance;
  }
  function Directive_disallowed_getInstance() {
    Directive_initEntries();
    return Directive_disallowed_instance;
  }
  function PresentationDefinition$Companion$$childSerializers$_anonymous__bx0qot() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function PresentationDefinition$Companion$$childSerializers$_anonymous__bx0qot_0() {
    return new ArrayListSerializer($serializer_getInstance_8());
  }
  function PresentationDefinition$Companion$$childSerializers$_anonymous__bx0qot_1() {
    return new ArrayListSerializer($serializer_getInstance_4());
  }
  function InputDescriptor() {
  }
  protoOf(InputDescriptor).toString = function () {
    return 'InputDescriptor(id=' + this.te6_1 + ', name=' + this.ue6_1 + ', purpose=' + this.ve6_1 + ', format=' + toString(this.we6_1) + ', group=' + toString(this.xe6_1) + ', constraints=' + this.ye6_1.toString() + ')';
  };
  protoOf(InputDescriptor).hashCode = function () {
    var result = getStringHashCode(this.te6_1);
    result = imul(result, 31) + (this.ue6_1 == null ? 0 : getStringHashCode(this.ue6_1)) | 0;
    result = imul(result, 31) + (this.ve6_1 == null ? 0 : getStringHashCode(this.ve6_1)) | 0;
    result = imul(result, 31) + (this.we6_1 == null ? 0 : hashCode(this.we6_1)) | 0;
    result = imul(result, 31) + (this.xe6_1 == null ? 0 : hashCode(this.xe6_1)) | 0;
    result = imul(result, 31) + this.ye6_1.hashCode() | 0;
    return result;
  };
  protoOf(InputDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InputDescriptor))
      return false;
    var tmp0_other_with_cast = other instanceof InputDescriptor ? other : THROW_CCE();
    if (!(this.te6_1 === tmp0_other_with_cast.te6_1))
      return false;
    if (!(this.ue6_1 == tmp0_other_with_cast.ue6_1))
      return false;
    if (!(this.ve6_1 == tmp0_other_with_cast.ve6_1))
      return false;
    if (!equals(this.we6_1, tmp0_other_with_cast.we6_1))
      return false;
    if (!equals(this.xe6_1, tmp0_other_with_cast.xe6_1))
      return false;
    if (!this.ye6_1.equals(tmp0_other_with_cast.ye6_1))
      return false;
    return true;
  };
  function Companion_5() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, PresentationDefinition$Companion$$childSerializers$_anonymous__bx0qot);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, PresentationDefinition$Companion$$childSerializers$_anonymous__bx0qot_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ze6_1 = [null, null, null, null, tmp_1, tmp_3, lazy(tmp_4, PresentationDefinition$Companion$$childSerializers$_anonymous__bx0qot_1)];
  }
  var Companion_instance_8;
  function Companion_getInstance_5() {
    if (Companion_instance_8 == null)
      new Companion_5();
    return Companion_instance_8;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.definitionparser.PresentationDefinition', this, 7);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('purpose', true);
    tmp0_serialDesc.x2b('format', true);
    tmp0_serialDesc.x2b('frame', true);
    tmp0_serialDesc.x2b('submission_requirements', true);
    tmp0_serialDesc.x2b('input_descriptors', false);
    this.ae7_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).be7 = function (encoder, value) {
    var tmp0_desc = this.ae7_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().ze6_1;
    tmp1_output.w25(tmp0_desc, 0, value.ce7_1);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.de7_1 == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value.de7_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.ee7_1 == null)) {
      tmp1_output.a26(tmp0_desc, 2, StringSerializer_getInstance(), value.ee7_1);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.fe7_1 == null)) {
      tmp1_output.a26(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.fe7_1);
    }
    if (tmp1_output.e26(tmp0_desc, 4) ? true : !(value.ge7_1 == null)) {
      tmp1_output.a26(tmp0_desc, 4, tmp2_cached[4].b1(), value.ge7_1);
    }
    if (tmp1_output.e26(tmp0_desc, 5) ? true : !(value.he7_1 == null)) {
      tmp1_output.a26(tmp0_desc, 5, tmp2_cached[5].b1(), value.he7_1);
    }
    tmp1_output.y25(tmp0_desc, 6, tmp2_cached[6].b1(), value.ie7_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_5).v20 = function (encoder, value) {
    return this.be7(encoder, value instanceof PresentationDefinition ? value : THROW_CCE());
  };
  protoOf($serializer_5).w20 = function (decoder) {
    var tmp0_desc = this.ae7_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_input = decoder.h24(tmp0_desc);
    var tmp12_cached = Companion_getInstance_5().ze6_1;
    if (tmp11_input.x24()) {
      tmp4_local0 = tmp11_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.v24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.v24(tmp0_desc, 4, tmp12_cached[4].b1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.v24(tmp0_desc, 5, tmp12_cached[5].b1(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.t24(tmp0_desc, 6, tmp12_cached[6].b1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.v24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.v24(tmp0_desc, 4, tmp12_cached[4].b1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.v24(tmp0_desc, 5, tmp12_cached[5].b1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.t24(tmp0_desc, 6, tmp12_cached[6].b1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.i24(tmp0_desc);
    return PresentationDefinition_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_5).u20 = function () {
    return this.ae7_1;
  };
  protoOf($serializer_5).m2c = function () {
    var tmp0_cached = Companion_getInstance_5().ze6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(JsonObjectSerializer_getInstance()), get_nullable(tmp0_cached[4].b1()), get_nullable(tmp0_cached[5].b1()), tmp0_cached[6].b1()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function PresentationDefinition_init_$Init$(seen0, id, name, purpose, format, frame, submissionRequirements, inputDescriptors, serializationConstructorMarker, $this) {
    if (!(65 === (65 & seen0))) {
      throwMissingFieldException(seen0, 65, $serializer_getInstance_5().ae7_1);
    }
    $this.ce7_1 = id;
    if (0 === (seen0 & 2))
      $this.de7_1 = null;
    else
      $this.de7_1 = name;
    if (0 === (seen0 & 4))
      $this.ee7_1 = null;
    else
      $this.ee7_1 = purpose;
    if (0 === (seen0 & 8))
      $this.fe7_1 = null;
    else
      $this.fe7_1 = format;
    if (0 === (seen0 & 16))
      $this.ge7_1 = null;
    else
      $this.ge7_1 = frame;
    if (0 === (seen0 & 32))
      $this.he7_1 = null;
    else
      $this.he7_1 = submissionRequirements;
    $this.ie7_1 = inputDescriptors;
    return $this;
  }
  function PresentationDefinition_init_$Create$(seen0, id, name, purpose, format, frame, submissionRequirements, inputDescriptors, serializationConstructorMarker) {
    return PresentationDefinition_init_$Init$(seen0, id, name, purpose, format, frame, submissionRequirements, inputDescriptors, serializationConstructorMarker, objectCreate(protoOf(PresentationDefinition)));
  }
  function PresentationDefinition(id, name, purpose, format, frame, submissionRequirements, inputDescriptors) {
    Companion_getInstance_5();
    name = name === VOID ? null : name;
    purpose = purpose === VOID ? null : purpose;
    format = format === VOID ? null : format;
    frame = frame === VOID ? null : frame;
    submissionRequirements = submissionRequirements === VOID ? null : submissionRequirements;
    this.ce7_1 = id;
    this.de7_1 = name;
    this.ee7_1 = purpose;
    this.fe7_1 = format;
    this.ge7_1 = frame;
    this.he7_1 = submissionRequirements;
    this.ie7_1 = inputDescriptors;
  }
  protoOf(PresentationDefinition).toString = function () {
    return 'PresentationDefinition(id=' + this.ce7_1 + ', name=' + this.de7_1 + ', purpose=' + this.ee7_1 + ', format=' + toString(this.fe7_1) + ', frame=' + toString(this.ge7_1) + ', submissionRequirements=' + toString(this.he7_1) + ', inputDescriptors=' + toString_0(this.ie7_1) + ')';
  };
  protoOf(PresentationDefinition).hashCode = function () {
    var result = getStringHashCode(this.ce7_1);
    result = imul(result, 31) + (this.de7_1 == null ? 0 : getStringHashCode(this.de7_1)) | 0;
    result = imul(result, 31) + (this.ee7_1 == null ? 0 : getStringHashCode(this.ee7_1)) | 0;
    result = imul(result, 31) + (this.fe7_1 == null ? 0 : this.fe7_1.hashCode()) | 0;
    result = imul(result, 31) + (this.ge7_1 == null ? 0 : hashCode(this.ge7_1)) | 0;
    result = imul(result, 31) + (this.he7_1 == null ? 0 : hashCode(this.he7_1)) | 0;
    result = imul(result, 31) + hashCode(this.ie7_1) | 0;
    return result;
  };
  protoOf(PresentationDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PresentationDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof PresentationDefinition ? other : THROW_CCE();
    if (!(this.ce7_1 === tmp0_other_with_cast.ce7_1))
      return false;
    if (!(this.de7_1 == tmp0_other_with_cast.de7_1))
      return false;
    if (!(this.ee7_1 == tmp0_other_with_cast.ee7_1))
      return false;
    if (!equals(this.fe7_1, tmp0_other_with_cast.fe7_1))
      return false;
    if (!equals(this.ge7_1, tmp0_other_with_cast.ge7_1))
      return false;
    if (!equals(this.he7_1, tmp0_other_with_cast.he7_1))
      return false;
    if (!equals(this.ie7_1, tmp0_other_with_cast.ie7_1))
      return false;
    return true;
  };
  function get_log() {
    _init_properties_PresentationDefinitionParser_kt__vrsbho();
    return log;
  }
  var log;
  function PresentationDefinitionParser$matchCredentialsForInputDescriptor$lambda($inputDescriptor) {
    return function () {
      return '--- Checking descriptor (name ' + $inputDescriptor.ue6_1 + ', id ' + $inputDescriptor.te6_1 + ') --';
    };
  }
  function PresentationDefinitionParser() {
  }
  protoOf(PresentationDefinitionParser).je7 = function (credentials, inputDescriptor) {
    var tmp = get_log();
    tmp.l6g(PresentationDefinitionParser$matchCredentialsForInputDescriptor$lambda(inputDescriptor));
    var enquirer = new JsonObjectEnquirer();
    return enquirer.le7(credentials, ensureNotNull(inputDescriptor.ye6_1.me6_1));
  };
  var PresentationDefinitionParser_instance;
  function PresentationDefinitionParser_getInstance() {
    return PresentationDefinitionParser_instance;
  }
  function JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda$lambda($document) {
    return function () {
      return 'Checking document against constraints: ' + $document.toString();
    };
  }
  function JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda($$this$unsafeFlow, this$0, $constraints, resultContinuation) {
    this.ue7_1 = $$this$unsafeFlow;
    this.ve7_1 = this$0;
    this.we7_1 = $constraints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda).u3g = function (value, $completion) {
    var tmp = this.ka(value, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda).va = function (p1, $completion) {
    return this.u3g((p1 == null ? true : !(p1 == null)) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            tmp_0.ye7_1 = this.ue7_1;
            var tmp_1 = this;
            tmp_1.ze7_1 = this.xe7_1;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.be8_1 = this.ye7_1;
            this.ce8_1 = this.ze7_1;
            var document = this.ce8_1;
            var tmp_2 = get_log();
            tmp_2.l6g(JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda$lambda(document));
            if (this.ve7_1.de8(document, this.we7_1)) {
              this.n9_1 = 3;
              suspendResult = this.be8_1.v1b(this.ce8_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 2:
            this.ae8_1 = Unit_instance;
            if (false) {
              this.n9_1 = 1;
              continue $sm;
            }

            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.ae8_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 5) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda).ka = function (value, completion) {
    var i = new JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda(this.ue7_1, this.ve7_1, this.we7_1, completion);
    i.xe7_1 = value;
    return i;
  };
  function JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda_0($$this$unsafeFlow, this$0, $constraints, resultContinuation) {
    var i = new JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda($$this$unsafeFlow, this$0, $constraints, resultContinuation);
    var l = function (value, $completion) {
      return i.u3g(value, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $collectCOROUTINE$0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.me8_1 = _this__u8e3s4;
    this.ne8_1 = collector;
  }
  protoOf($collectCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.oe8_1 = this.ne8_1;
            this.pe8_1 = this.oe8_1;
            this.n9_1 = 1;
            var tmp_1 = JsonObjectEnquirer$filterDocumentsByConstraints$o$collect$slambda_0(this.pe8_1, this.me8_1.re8_1, this.me8_1.se8_1, null);
            suspendResult = this.me8_1.qe8_1.x1b(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 2) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function getJsonPath($this, path) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = $this.ke7_1;
    var value = this_0.m2(path);
    var tmp;
    if (value == null) {
      var answer = new JsonPath(Companion_instance.re3(path));
      this_0.p2(path, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp.se3_1;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.te8_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).v1b = function (value, $completion) {
    return this.te8_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).u3 = function () {
    return this.te8_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.u3(), other.u3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.u3());
  };
  function JsonObjectEnquirer$filterConstraint$lambda($field) {
    return function () {
      var tmp0_elvis_lhs = $field.te5_1;
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? $field.pe5_1 : tmp0_elvis_lhs;
      return 'Processing constraint field: ' + toString_0(tmp1_elvis_lhs == null ? $field : tmp1_elvis_lhs);
    };
  }
  function JsonObjectEnquirer$filterConstraint$lambda_0($field, $resolvedPath) {
    return function () {
      return 'Result of resolving ' + toString_0($field.re5_1) + ': ' + toString($resolvedPath);
    };
  }
  function JsonObjectEnquirer$filterConstraint$lambda_1($field, $document) {
    return function () {
      return 'Unresolved field, failing constraint (Path ' + toString_0($field.re5_1) + ' not found in document ' + $document.toString() + ').';
    };
  }
  function JsonObjectEnquirer$filterConstraint$lambda_2($field) {
    return function () {
      return 'Processing field filter: ' + toString($field.ve5_1);
    };
  }
  function JsonObjectEnquirer$filterDocumentsByConstraints$$inlined$filter$1($this, this$0, $constraints) {
    this.qe8_1 = $this;
    this.re8_1 = this$0;
    this.se8_1 = $constraints;
  }
  protoOf(JsonObjectEnquirer$filterDocumentsByConstraints$$inlined$filter$1).w1b = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$0(this, collector, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JsonObjectEnquirer$filterDocumentsByConstraints$$inlined$filter$1).x1b = function (collector, $completion) {
    return this.w1b(collector, $completion);
  };
  function JsonObjectEnquirer() {
    this.ke7_1 = HashMap_init_$Create$();
  }
  protoOf(JsonObjectEnquirer).ue8 = function (document, field) {
    var tmp = get_log();
    tmp.l6g(JsonObjectEnquirer$filterConstraint$lambda(field));
    var tmp0 = field.re5_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var _iterator__ex2g4s = tmp0.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        var result = resolveOrNull(document, getJsonPath(this, element));
        if (!(result == null)) {
          tmp$ret$1 = result;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var resolvedPath = tmp$ret$1;
    var tmp_0 = get_log();
    tmp_0.l6g(JsonObjectEnquirer$filterConstraint$lambda_0(field, resolvedPath));
    var tmp_1;
    if (resolvedPath == null) {
      var tmp_2 = get_log();
      tmp_2.l6g(JsonObjectEnquirer$filterConstraint$lambda_1(field, document));
      tmp_1 = false;
    } else {
      var tmp_3 = get_log();
      tmp_3.l6g(JsonObjectEnquirer$filterConstraint$lambda_2(field));
      var tmp_4;
      if (!(field.ve5_1 == null)) {
        var schema = Companion_instance_0.hco(field.ve5_1);
        var tmp_5;
        var tmp_6;
        var tmp0_safe_receiver = field.ve5_1.af('type');
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
        var tmp_7;
        if (tmp2_safe_receiver == null) {
          tmp_7 = null;
        } else {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_7 = tmp2_safe_receiver.toLowerCase();
        }
        if (tmp_7 === 'string') {
          tmp_6 = resolvedPath instanceof JsonArray;
        } else {
          tmp_6 = false;
        }
        if (tmp_6) {
          var tmp$ret$4;
          $l$block_1: {
            // Inline function 'kotlin.collections.any' call
            var tmp_8;
            if (isInterface(resolvedPath, Collection)) {
              tmp_8 = resolvedPath.h();
            } else {
              tmp_8 = false;
            }
            if (tmp_8) {
              tmp$ret$4 = false;
              break $l$block_1;
            }
            var _iterator__ex2g4s_0 = resolvedPath.p();
            while (_iterator__ex2g4s_0.q()) {
              var element_0 = _iterator__ex2g4s_0.r();
              if (schema.mco(element_0, Companion_instance_1.acp()).hcq_1) {
                tmp$ret$4 = true;
                break $l$block_1;
              }
            }
            tmp$ret$4 = false;
          }
          tmp_5 = tmp$ret$4;
        } else {
          tmp_5 = schema.mco(resolvedPath, Companion_instance_1.acp()).hcq_1;
        }
        tmp_4 = tmp_5;
      } else {
        tmp_4 = true;
      }
      tmp_1 = tmp_4;
    }
    return tmp_1;
  };
  protoOf(JsonObjectEnquirer).de8 = function (document, constraints) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(constraints, Collection)) {
        tmp = constraints.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = constraints.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        if (!this.ue8(document, element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(JsonObjectEnquirer).le7 = function (documents, constraints) {
    // Inline function 'kotlinx.coroutines.flow.filter' call
    // Inline function 'kotlinx.coroutines.flow.unsafeTransform' call
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new JsonObjectEnquirer$filterDocumentsByConstraints$$inlined$filter$1(documents, this, constraints);
  };
  function log$lambda() {
    _init_properties_PresentationDefinitionParser_kt__vrsbho();
    return Unit_instance;
  }
  var properties_initialized_PresentationDefinitionParser_kt_k0y4u;
  function _init_properties_PresentationDefinitionParser_kt__vrsbho() {
    if (!properties_initialized_PresentationDefinitionParser_kt_k0y4u) {
      properties_initialized_PresentationDefinitionParser_kt_k0y4u = true;
      var tmp = KotlinLogging_instance;
      log = tmp.w6g(log$lambda);
    }
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.definitionparser.PresentationSubmission.Descriptor', this, 4);
    tmp0_serialDesc.x2b('id', true);
    tmp0_serialDesc.x2b('format', false);
    tmp0_serialDesc.x2b('path', false);
    tmp0_serialDesc.x2b('path_nested', true);
    this.ve8_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).we8 = function (encoder, value) {
    var tmp0_desc = this.ve8_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.xe8_1 == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.xe8_1);
    }
    tmp1_output.y25(tmp0_desc, 1, JsonElementSerializer_getInstance(), value.ye8_1);
    tmp1_output.w25(tmp0_desc, 2, value.ze8_1);
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.ae9_1 == null)) {
      tmp1_output.a26(tmp0_desc, 3, $serializer_getInstance_6(), value.ae9_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_6).v20 = function (encoder, value) {
    return this.we8(encoder, value instanceof Descriptor ? value : THROW_CCE());
  };
  protoOf($serializer_6).w20 = function (decoder) {
    var tmp0_desc = this.ve8_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.t24(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.v24(tmp0_desc, 3, $serializer_getInstance_6(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.t24(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.v24(tmp0_desc, 3, $serializer_getInstance_6(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return Descriptor_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_6).u20 = function () {
    return this.ve8_1;
  };
  protoOf($serializer_6).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), JsonElementSerializer_getInstance(), StringSerializer_getInstance(), get_nullable($serializer_getInstance_6())];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function Descriptor_init_$Init$(seen0, id, format, path, pathNested, serializationConstructorMarker, $this) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_6().ve8_1);
    }
    if (0 === (seen0 & 1))
      $this.xe8_1 = null;
    else
      $this.xe8_1 = id;
    $this.ye8_1 = format;
    $this.ze8_1 = path;
    if (0 === (seen0 & 8))
      $this.ae9_1 = null;
    else
      $this.ae9_1 = pathNested;
    return $this;
  }
  function Descriptor_init_$Create$(seen0, id, format, path, pathNested, serializationConstructorMarker) {
    return Descriptor_init_$Init$(seen0, id, format, path, pathNested, serializationConstructorMarker, objectCreate(protoOf(Descriptor)));
  }
  function PresentationSubmission$Companion$$childSerializers$_anonymous__vt65no() {
    return new ArrayListSerializer($serializer_getInstance_6());
  }
  function Descriptor() {
  }
  protoOf(Descriptor).toString = function () {
    return 'Descriptor(id=' + this.xe8_1 + ', format=' + toString_0(this.ye8_1) + ', path=' + this.ze8_1 + ', pathNested=' + toString(this.ae9_1) + ')';
  };
  protoOf(Descriptor).hashCode = function () {
    var result = this.xe8_1 == null ? 0 : getStringHashCode(this.xe8_1);
    result = imul(result, 31) + hashCode(this.ye8_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.ze8_1) | 0;
    result = imul(result, 31) + (this.ae9_1 == null ? 0 : this.ae9_1.hashCode()) | 0;
    return result;
  };
  protoOf(Descriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Descriptor))
      return false;
    var tmp0_other_with_cast = other instanceof Descriptor ? other : THROW_CCE();
    if (!(this.xe8_1 == tmp0_other_with_cast.xe8_1))
      return false;
    if (!equals(this.ye8_1, tmp0_other_with_cast.ye8_1))
      return false;
    if (!(this.ze8_1 === tmp0_other_with_cast.ze8_1))
      return false;
    if (!equals(this.ae9_1, tmp0_other_with_cast.ae9_1))
      return false;
    return true;
  };
  function Companion_6() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.be9_1 = [null, null, lazy(tmp_0, PresentationSubmission$Companion$$childSerializers$_anonymous__vt65no)];
  }
  var Companion_instance_9;
  function Companion_getInstance_6() {
    if (Companion_instance_9 == null)
      new Companion_6();
    return Companion_instance_9;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.definitionparser.PresentationSubmission', this, 3);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('definition_id', false);
    tmp0_serialDesc.x2b('descriptor_map', false);
    this.ce9_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).de9 = function (encoder, value) {
    var tmp0_desc = this.ce9_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().be9_1;
    tmp1_output.w25(tmp0_desc, 0, value.ee9_1);
    tmp1_output.w25(tmp0_desc, 1, value.fe9_1);
    tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.ge9_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_7).v20 = function (encoder, value) {
    return this.de9(encoder, value instanceof PresentationSubmission ? value : THROW_CCE());
  };
  protoOf($serializer_7).w20 = function (decoder) {
    var tmp0_desc = this.ce9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_6().be9_1;
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.t24(tmp0_desc, 2, tmp8_cached[2].b1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.t24(tmp0_desc, 2, tmp8_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i24(tmp0_desc);
    return PresentationSubmission_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_7).u20 = function () {
    return this.ce9_1;
  };
  protoOf($serializer_7).m2c = function () {
    var tmp0_cached = Companion_getInstance_6().be9_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function PresentationSubmission_init_$Init$(seen0, id, definitionId, descriptorMap, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_7().ce9_1);
    }
    $this.ee9_1 = id;
    $this.fe9_1 = definitionId;
    $this.ge9_1 = descriptorMap;
    return $this;
  }
  function PresentationSubmission_init_$Create$(seen0, id, definitionId, descriptorMap, serializationConstructorMarker) {
    return PresentationSubmission_init_$Init$(seen0, id, definitionId, descriptorMap, serializationConstructorMarker, objectCreate(protoOf(PresentationSubmission)));
  }
  function PresentationSubmission(id, definitionId, descriptorMap) {
    Companion_getInstance_6();
    this.ee9_1 = id;
    this.fe9_1 = definitionId;
    this.ge9_1 = descriptorMap;
  }
  protoOf(PresentationSubmission).toString = function () {
    return 'PresentationSubmission(id=' + this.ee9_1 + ', definitionId=' + this.fe9_1 + ', descriptorMap=' + toString_0(this.ge9_1) + ')';
  };
  protoOf(PresentationSubmission).hashCode = function () {
    var result = getStringHashCode(this.ee9_1);
    result = imul(result, 31) + getStringHashCode(this.fe9_1) | 0;
    result = imul(result, 31) + hashCode(this.ge9_1) | 0;
    return result;
  };
  protoOf(PresentationSubmission).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PresentationSubmission))
      return false;
    var tmp0_other_with_cast = other instanceof PresentationSubmission ? other : THROW_CCE();
    if (!(this.ee9_1 === tmp0_other_with_cast.ee9_1))
      return false;
    if (!(this.fe9_1 === tmp0_other_with_cast.fe9_1))
      return false;
    if (!equals(this.ge9_1, tmp0_other_with_cast.ge9_1))
      return false;
    return true;
  };
  var Rule_all_instance;
  var Rule_pick_instance;
  function values_0() {
    return [Rule_all_getInstance(), Rule_pick_getInstance()];
  }
  var Rule_entriesInitialized;
  function Rule_initEntries() {
    if (Rule_entriesInitialized)
      return Unit_instance;
    Rule_entriesInitialized = true;
    Rule_all_instance = new Rule('all', 0);
    Rule_pick_instance = new Rule('pick', 1);
  }
  function SubmissionRequirement$Companion$$childSerializers$_anonymous__iis9hv() {
    return createSimpleEnumSerializer('id.walt.definitionparser.SubmissionRequirement.Rule', values_0());
  }
  function SubmissionRequirement$Companion$$childSerializers$_anonymous__iis9hv_0() {
    return new ArrayListSerializer($serializer_getInstance_8());
  }
  function Rule(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_7() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, SubmissionRequirement$Companion$$childSerializers$_anonymous__iis9hv);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.he9_1 = [null, null, tmp_1, null, null, null, null, lazy(tmp_2, SubmissionRequirement$Companion$$childSerializers$_anonymous__iis9hv_0)];
  }
  var Companion_instance_10;
  function Companion_getInstance_7() {
    if (Companion_instance_10 == null)
      new Companion_7();
    return Companion_instance_10;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.definitionparser.SubmissionRequirement', this, 8);
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('purpose', true);
    tmp0_serialDesc.x2b('rule', false);
    tmp0_serialDesc.x2b('count', true);
    tmp0_serialDesc.x2b('min', true);
    tmp0_serialDesc.x2b('max', true);
    tmp0_serialDesc.x2b('from', true);
    tmp0_serialDesc.x2b('from_nested', true);
    this.ie9_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).je9 = function (encoder, value) {
    var tmp0_desc = this.ie9_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().he9_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ke9_1 == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.ke9_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.le9_1 == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value.le9_1);
    }
    tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.me9_1);
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.ne9_1 == null)) {
      tmp1_output.a26(tmp0_desc, 3, IntSerializer_getInstance(), value.ne9_1);
    }
    if (tmp1_output.e26(tmp0_desc, 4) ? true : !(value.oe9_1 == null)) {
      tmp1_output.a26(tmp0_desc, 4, IntSerializer_getInstance(), value.oe9_1);
    }
    if (tmp1_output.e26(tmp0_desc, 5) ? true : !(value.pe9_1 == null)) {
      tmp1_output.a26(tmp0_desc, 5, IntSerializer_getInstance(), value.pe9_1);
    }
    if (tmp1_output.e26(tmp0_desc, 6) ? true : !(value.qe9_1 == null)) {
      tmp1_output.a26(tmp0_desc, 6, StringSerializer_getInstance(), value.qe9_1);
    }
    if (tmp1_output.e26(tmp0_desc, 7) ? true : !(value.re9_1 == null)) {
      tmp1_output.a26(tmp0_desc, 7, tmp2_cached[7].b1(), value.re9_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_8).v20 = function (encoder, value) {
    return this.je9(encoder, value instanceof SubmissionRequirement ? value : THROW_CCE());
  };
  protoOf($serializer_8).w20 = function (decoder) {
    var tmp0_desc = this.ie9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.h24(tmp0_desc);
    var tmp13_cached = Companion_getInstance_7().he9_1;
    if (tmp12_input.x24()) {
      tmp4_local0 = tmp12_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.t24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.v24(tmp0_desc, 7, tmp13_cached[7].b1(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.t24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, IntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, IntSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.v24(tmp0_desc, 7, tmp13_cached[7].b1(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.i24(tmp0_desc);
    return SubmissionRequirement_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_8).u20 = function () {
    return this.ie9_1;
  };
  protoOf($serializer_8).m2c = function () {
    var tmp0_cached = Companion_getInstance_7().he9_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[2].b1(), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[7].b1())];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function SubmissionRequirement_init_$Init$(seen0, name, purpose, rule, count, min, max, from, fromNested, serializationConstructorMarker, $this) {
    if (!(4 === (4 & seen0))) {
      throwMissingFieldException(seen0, 4, $serializer_getInstance_8().ie9_1);
    }
    if (0 === (seen0 & 1))
      $this.ke9_1 = null;
    else
      $this.ke9_1 = name;
    if (0 === (seen0 & 2))
      $this.le9_1 = null;
    else
      $this.le9_1 = purpose;
    $this.me9_1 = rule;
    if (0 === (seen0 & 8))
      $this.ne9_1 = null;
    else
      $this.ne9_1 = count;
    if (0 === (seen0 & 16))
      $this.oe9_1 = null;
    else
      $this.oe9_1 = min;
    if (0 === (seen0 & 32))
      $this.pe9_1 = null;
    else
      $this.pe9_1 = max;
    if (0 === (seen0 & 64))
      $this.qe9_1 = null;
    else
      $this.qe9_1 = from;
    if (0 === (seen0 & 128))
      $this.re9_1 = null;
    else
      $this.re9_1 = fromNested;
    var tmp0_safe_receiver = $this.ne9_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.check' call
      if (!(tmp0_safe_receiver >= 1)) {
        var message = 'count must be at least 1';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
    }
    var tmp1_safe_receiver = $this.oe9_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.check' call
      if (!(tmp1_safe_receiver >= 0)) {
        var message_0 = 'min must be at least 0';
        throw IllegalStateException_init_$Create$(toString_0(message_0));
      }
    }
    var tmp2_safe_receiver = $this.pe9_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.check' call
      if (!(tmp2_safe_receiver >= 0)) {
        var message_1 = 'max must be at least 0';
        throw IllegalStateException_init_$Create$(toString_0(message_1));
      }
    }
    if (!($this.qe9_1 == null)) {
      // Inline function 'kotlin.text.isNotBlank' call
      var this_0 = $this.qe9_1;
      // Inline function 'kotlin.check' call
      if (!!isBlank(this_0)) {
        var message_2 = 'from must not be blank';
        throw IllegalStateException_init_$Create$(toString_0(message_2));
      }
    } else {
      var tmp8 = $this.re9_1;
      $l$block: {
        // Inline function 'kotlin.checkNotNull' call
        if (tmp8 == null) {
          var message_3 = "Either 'from' or 'from_nested' must be provided";
          throw IllegalStateException_init_$Create$(toString_0(message_3));
        } else {
          break $l$block;
        }
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.check' call
      if (!!$this.re9_1.h()) {
        var message_4 = 'from_nested must not be empty';
        throw IllegalStateException_init_$Create$(toString_0(message_4));
      }
    }
    return $this;
  }
  function SubmissionRequirement_init_$Create$(seen0, name, purpose, rule, count, min, max, from, fromNested, serializationConstructorMarker) {
    return SubmissionRequirement_init_$Init$(seen0, name, purpose, rule, count, min, max, from, fromNested, serializationConstructorMarker, objectCreate(protoOf(SubmissionRequirement)));
  }
  function Rule_all_getInstance() {
    Rule_initEntries();
    return Rule_all_instance;
  }
  function Rule_pick_getInstance() {
    Rule_initEntries();
    return Rule_pick_instance;
  }
  function SubmissionRequirement() {
  }
  protoOf(SubmissionRequirement).toString = function () {
    return 'SubmissionRequirement(name=' + this.ke9_1 + ', purpose=' + this.le9_1 + ', rule=' + this.me9_1.toString() + ', count=' + this.ne9_1 + ', min=' + this.oe9_1 + ', max=' + this.pe9_1 + ', from=' + this.qe9_1 + ', fromNested=' + toString(this.re9_1) + ')';
  };
  protoOf(SubmissionRequirement).hashCode = function () {
    var result = this.ke9_1 == null ? 0 : getStringHashCode(this.ke9_1);
    result = imul(result, 31) + (this.le9_1 == null ? 0 : getStringHashCode(this.le9_1)) | 0;
    result = imul(result, 31) + this.me9_1.hashCode() | 0;
    result = imul(result, 31) + (this.ne9_1 == null ? 0 : this.ne9_1) | 0;
    result = imul(result, 31) + (this.oe9_1 == null ? 0 : this.oe9_1) | 0;
    result = imul(result, 31) + (this.pe9_1 == null ? 0 : this.pe9_1) | 0;
    result = imul(result, 31) + (this.qe9_1 == null ? 0 : getStringHashCode(this.qe9_1)) | 0;
    result = imul(result, 31) + (this.re9_1 == null ? 0 : hashCode(this.re9_1)) | 0;
    return result;
  };
  protoOf(SubmissionRequirement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SubmissionRequirement))
      return false;
    var tmp0_other_with_cast = other instanceof SubmissionRequirement ? other : THROW_CCE();
    if (!(this.ke9_1 == tmp0_other_with_cast.ke9_1))
      return false;
    if (!(this.le9_1 == tmp0_other_with_cast.le9_1))
      return false;
    if (!this.me9_1.equals(tmp0_other_with_cast.me9_1))
      return false;
    if (!(this.ne9_1 == tmp0_other_with_cast.ne9_1))
      return false;
    if (!(this.oe9_1 == tmp0_other_with_cast.oe9_1))
      return false;
    if (!(this.pe9_1 == tmp0_other_with_cast.pe9_1))
      return false;
    if (!(this.qe9_1 == tmp0_other_with_cast.qe9_1))
      return false;
    if (!equals(this.re9_1, tmp0_other_with_cast.re9_1))
      return false;
    return true;
  };
  //region block: post-declaration
  protoOf($serializer).n2c = typeParametersSerializers;
  protoOf($serializer_0).n2c = typeParametersSerializers;
  protoOf($serializer_1).n2c = typeParametersSerializers;
  protoOf($serializer_2).n2c = typeParametersSerializers;
  protoOf($serializer_3).n2c = typeParametersSerializers;
  protoOf($serializer_4).n2c = typeParametersSerializers;
  protoOf($serializer_5).n2c = typeParametersSerializers;
  protoOf($serializer_6).n2c = typeParametersSerializers;
  protoOf($serializer_7).n2c = typeParametersSerializers;
  protoOf($serializer_8).n2c = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_2 = new Companion();
  PresentationDefinitionParser_instance = new PresentationDefinitionParser();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Directive_required_getInstance;
  _.$_$.b = PresentationDefinitionParser_instance;
  _.$_$.c = PresentationDefinition;
  _.$_$.d = PresentationSubmission;
  //endregion
  return _;
}));

//# sourceMappingURL=definitions-parser.js.map
