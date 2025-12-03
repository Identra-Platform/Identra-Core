(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './w3c-credentials.js', './ktor-ktor-client-ktor-client-core.js', './crypto.js', './dids.js', './waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js', './verification-policies.js', './waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./w3c-credentials.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./crypto.js'), require('./dids.js'), require('./waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js'), require('./verification-policies.js'), require('./waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.openid4vc:waltid-openid4vc'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'id.walt.openid4vc:waltid-openid4vc'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.openid4vc:waltid-openid4vc'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'id.walt.openid4vc:waltid-openid4vc'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.openid4vc:waltid-openid4vc'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'id.walt.openid4vc:waltid-openid4vc'.");
    }
    if (typeof globalThis['w3c-credentials'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.openid4vc:waltid-openid4vc'. Its dependency 'w3c-credentials' was not found. Please, check whether 'w3c-credentials' is loaded prior to 'id.walt.openid4vc:waltid-openid4vc'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.openid4vc:waltid-openid4vc'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'id.walt.openid4vc:waltid-openid4vc'.");
    }
    if (typeof crypto === 'undefined') {
      throw new Error("Error loading module 'id.walt.openid4vc:waltid-openid4vc'. Its dependency 'crypto' was not found. Please, check whether 'crypto' is loaded prior to 'id.walt.openid4vc:waltid-openid4vc'.");
    }
    if (typeof dids === 'undefined') {
      throw new Error("Error loading module 'id.walt.openid4vc:waltid-openid4vc'. Its dependency 'dids' was not found. Please, check whether 'dids' is loaded prior to 'id.walt.openid4vc:waltid-openid4vc'.");
    }
    if (typeof globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.openid4vc:waltid-openid4vc'. Its dependency 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt' was not found. Please, check whether 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt' is loaded prior to 'id.walt.openid4vc:waltid-openid4vc'.");
    }
    if (typeof globalThis['verification-policies'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.openid4vc:waltid-openid4vc'. Its dependency 'verification-policies' was not found. Please, check whether 'verification-policies' is loaded prior to 'id.walt.openid4vc:waltid-openid4vc'.");
    }
    if (typeof globalThis['waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.openid4vc:waltid-openid4vc'. Its dependency 'waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials' was not found. Please, check whether 'waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials' is loaded prior to 'id.walt.openid4vc:waltid-openid4vc'.");
    }
    globalThis['id.walt.openid4vc:waltid-openid4vc'] = factory(typeof globalThis['id.walt.openid4vc:waltid-openid4vc'] === 'undefined' ? {} : globalThis['id.walt.openid4vc:waltid-openid4vc'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['w3c-credentials'], globalThis['ktor-ktor-client-ktor-client-core'], crypto, dids, globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'], globalThis['verification-policies'], globalThis['waltid-identity-waltid-libraries-credentials-waltid-mdoc-credentials']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_id_walt_credentials_waltid_w3c_credentials, kotlin_io_ktor_ktor_client_core, kotlin_id_walt_crypto_waltid_crypto, kotlin_id_walt_did_waltid_did, kotlin_id_walt_sdjwt_waltid_sdjwt, kotlin_id_walt_policies_waltid_verification_policies, kotlin_id_walt_mdoc_credentials_waltid_mdoc_credentials) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ce;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var get_elementNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var toSet = kotlin_kotlin.$_$.gb;
  var JsonTransformingSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.t;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c1;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var toMap = kotlin_kotlin.$_$.za;
  var VOID = kotlin_kotlin.$_$.j;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.r;
  var lazy = kotlin_kotlin.$_$.lk;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zc;
  var Enum = kotlin_kotlin.$_$.aj;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var JsonElementSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var emptyMap = kotlin_kotlin.$_$.l8;
  var equals = kotlin_kotlin.$_$.sc;
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var objectCreate = kotlin_kotlin.$_$.be;
  var toString = kotlin_kotlin.$_$.sk;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var hashCode = kotlin_kotlin.$_$.xc;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var KtList = kotlin_kotlin.$_$.t6;
  var isInterface = kotlin_kotlin.$_$.nd;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var toString_0 = kotlin_kotlin.$_$.ge;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var flatten = kotlin_kotlin.$_$.v8;
  var Collection = kotlin_kotlin.$_$.o6;
  var contains = kotlin_kotlin.$_$.rf;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d1;
  var get_contentOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.y;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.bk;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e3;
  var println = kotlin_kotlin.$_$.fc;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Companion_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.p;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var KtMap = kotlin_kotlin.$_$.w6;
  var Default_getInstance_0 = kotlin_kotlin.$_$.z5;
  var Long = kotlin_kotlin.$_$.fj;
  var listOf = kotlin_kotlin.$_$.r9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var toLong = kotlin_kotlin.$_$.ee;
  var charSequenceGet = kotlin_kotlin.$_$.nc;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  var StringBuilder = kotlin_kotlin.$_$.nf;
  var last = kotlin_kotlin.$_$.sg;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r1;
  var first = kotlin_kotlin.$_$.cg;
  var coerceAtMost = kotlin_kotlin.$_$.oe;
  var toCharArray = kotlin_kotlin.$_$.sh;
  var joinToString = kotlin_kotlin.$_$.g9;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.o1;
  var startsWith = kotlin_kotlin.$_$.gh;
  var endsWith = kotlin_kotlin.$_$.zf;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var encodeToByteArray = kotlin_kotlin.$_$.wf;
  var toSet_0 = kotlin_kotlin.$_$.bi;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var charSequenceLength = kotlin_kotlin.$_$.oc;
  var contains_0 = kotlin_kotlin.$_$.sf;
  var setOf = kotlin_kotlin.$_$.ka;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(JsonDataObject, 'JsonDataObject');
  initMetadataForClass(JsonDataObjectFactory, 'JsonDataObjectFactory');
  initMetadataForClass(JsonDataObjectSerializer, 'JsonDataObjectSerializer', VOID, JsonTransformingSerializer);
  initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
  initMetadataForClass(DisclosureLimitation, 'DisclosureLimitation', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_0});
  initMetadataForCompanion(Companion_0, JsonDataObjectFactory);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(InputDescriptor, 'InputDescriptor', InputDescriptor, JsonDataObject, VOID, VOID, VOID, {0: InputDescriptorSerializer_getInstance});
  initMetadataForObject(InputDescriptorSerializer, 'InputDescriptorSerializer', VOID, JsonDataObjectSerializer);
  initMetadataForObject(InputDescriptorListSerializer, 'InputDescriptorListSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_1, JsonDataObjectFactory);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(InputDescriptorConstraints, 'InputDescriptorConstraints', InputDescriptorConstraints, JsonDataObject, VOID, VOID, VOID, {0: InputDescriptorConstraintsSerializer_getInstance});
  initMetadataForObject(InputDescriptorConstraintsSerializer, 'InputDescriptorConstraintsSerializer', VOID, JsonDataObjectSerializer);
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(InputDescriptorField, 'InputDescriptorField', VOID, JsonDataObject, VOID, VOID, VOID, {0: InputDescriptorFieldSerializer_getInstance});
  initMetadataForObject(InputDescriptorFieldSerializer, 'InputDescriptorFieldSerializer', VOID, JsonDataObjectSerializer);
  initMetadataForObject(InputDescriptorFieldListSerializer, 'InputDescriptorFieldListSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(InputDescriptorSchema, 'InputDescriptorSchema', VOID, JsonDataObject, VOID, VOID, VOID, {0: InputDescriptorSchemaSerializer_getInstance});
  initMetadataForObject(InputDescriptorSchemaSerializer, 'InputDescriptorSchemaSerializer', VOID, JsonDataObjectSerializer);
  initMetadataForObject(InputDescriptorSchemaListSerializer, 'InputDescriptorSchemaListSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_4, JsonDataObjectFactory);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PresentationDefinition, 'PresentationDefinition', VOID, JsonDataObject, VOID, VOID, VOID, {0: PresentationDefinitionSerializer_getInstance});
  initMetadataForObject(PresentationDefinitionSerializer, 'PresentationDefinitionSerializer', VOID, JsonDataObjectSerializer);
  initMetadataForCompanion(Companion_5, JsonDataObjectFactory);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SubmissionRequirement, 'SubmissionRequirement', VOID, JsonDataObject, VOID, VOID, VOID, {0: SubmissionRequirementSerializer_getInstance});
  initMetadataForObject(SubmissionRequirementSerializer, 'SubmissionRequirementSerializer', VOID, JsonDataObjectSerializer);
  initMetadataForObject(SubmissionRequirementListSerializer, 'SubmissionRequirementListSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_6, VOID, [SerializerFactory]);
  initMetadataForClass(SubmissionRequirementRule, 'SubmissionRequirementRule', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_7});
  initMetadataForCompanion(Companion_7, JsonDataObjectFactory);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(VCFormatDefinition, 'VCFormatDefinition', VCFormatDefinition, JsonDataObject, VOID, VOID, VOID, {0: VCFormatDefinitionSerializer_getInstance});
  initMetadataForObject(VCFormatDefinitionSerializer, 'VCFormatDefinitionSerializer', VOID, JsonDataObjectSerializer);
  initMetadataForObject(VCFormatMapSerializer, 'VCFormatMapSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortIdUtils, 'ShortIdUtils');
  initMetadataForClass(Sqids, 'Sqids', Sqids);
  //endregion
  function JsonDataObject() {
  }
  function JsonDataObjectFactory() {
  }
  function _get_knownElementNames__1xihr2($this) {
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = get_elementNames($this.w20());
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      if (!(element === 'customParameters')) {
        destination.n(element);
      }
    }
    return toSet(destination);
  }
  function JsonDataObjectSerializer(serializer) {
    JsonTransformingSerializer.call(this, serializer);
    this.gfh_1 = serializer.w20();
  }
  protoOf(JsonDataObjectSerializer).w20 = function () {
    return this.gfh_1;
  };
  protoOf(JsonDataObjectSerializer).hfh = function (name, element, builderMap) {
    // Inline function 'kotlin.collections.set' call
    builderMap.q2(name, element);
  };
  protoOf(JsonDataObjectSerializer).ifh = function (name, element, builderMap) {
    // Inline function 'kotlin.collections.set' call
    builderMap.q2(name, element);
  };
  protoOf(JsonDataObjectSerializer).a4w = function (element) {
    // Inline function 'kotlin.collections.buildMap' call
    // Inline function 'kotlin.collections.buildMapInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.filterKeys' call
    var this_1 = get_jsonObject(element);
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_1.a1().q();
    while (_iterator__ex2g4s.r()) {
      var entry = _iterator__ex2g4s.s();
      var it = entry.b1();
      if (_get_knownElementNames__1xihr2(this).x(it)) {
        result.q2(entry.b1(), entry.c1());
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = result.a1().q();
    while (_iterator__ex2g4s_0.r()) {
      var element_0 = _iterator__ex2g4s_0.s();
      // Inline function 'kotlin.collections.component1' call
      var key = element_0.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = element_0.c1();
      this.hfh(key, value, this_0);
    }
    var tmp0_safe_receiver = get_jsonObject(element).bf('customParameters');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this_0.s2(tmp1_safe_receiver);
    }
    var tmp$ret$13 = this_0.y3();
    return new JsonObject(tmp$ret$13);
  };
  protoOf(JsonDataObjectSerializer).b4w = function (element) {
    // Inline function 'kotlin.collections.buildMap' call
    // Inline function 'kotlin.collections.buildMapInternal' call
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.filterKeys' call
    var this_1 = get_jsonObject(element);
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_1.a1().q();
    while (_iterator__ex2g4s.r()) {
      var entry = _iterator__ex2g4s.s();
      var it = entry.b1();
      if (_get_knownElementNames__1xihr2(this).x(it)) {
        result.q2(entry.b1(), entry.c1());
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = result.a1().q();
    while (_iterator__ex2g4s_0.r()) {
      var element_0 = _iterator__ex2g4s_0.s();
      // Inline function 'kotlin.collections.component1' call
      var key = element_0.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = element_0.c1();
      this.ifh(key, value, this_0);
    }
    // Inline function 'kotlin.collections.filterKeys' call
    var this_2 = toMap(get_jsonObject(element));
    var result_0 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_1 = this_2.a1().q();
    while (_iterator__ex2g4s_1.r()) {
      var entry_0 = _iterator__ex2g4s_1.s();
      var it_0 = entry_0.b1();
      if (!_get_knownElementNames__1xihr2(this).x(it_0)) {
        result_0.q2(entry_0.b1(), entry_0.c1());
      }
    }
    this_0.q2('customParameters', new JsonObject(result_0));
    var tmp$ret$14 = this_0.y3();
    var obj = new JsonObject(tmp$ret$14);
    return obj;
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.jfh_1.c1();
  }
  function DisclosureLimitation$Companion$_anonymous__kxwu8o() {
    return createSimpleEnumSerializer('id.walt.oid4vc.data.dif.DisclosureLimitation', values());
  }
  var DisclosureLimitation_required_instance;
  var DisclosureLimitation_preferred_instance;
  function values() {
    return [DisclosureLimitation_required_getInstance(), DisclosureLimitation_preferred_getInstance()];
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.jfh_1 = lazy(tmp_0, DisclosureLimitation$Companion$_anonymous__kxwu8o);
  }
  protoOf(Companion).o4u = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).z2c = function (typeParamsSerializers) {
    return this.o4u();
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    DisclosureLimitation_initEntries();
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  var DisclosureLimitation_entriesInitialized;
  function DisclosureLimitation_initEntries() {
    if (DisclosureLimitation_entriesInitialized)
      return Unit_instance;
    DisclosureLimitation_entriesInitialized = true;
    DisclosureLimitation_required_instance = new DisclosureLimitation('required', 0);
    DisclosureLimitation_preferred_instance = new DisclosureLimitation('preferred', 1);
    Companion_getInstance_0();
  }
  function DisclosureLimitation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DisclosureLimitation_required_getInstance() {
    DisclosureLimitation_initEntries();
    return DisclosureLimitation_required_instance;
  }
  function DisclosureLimitation_preferred_getInstance() {
    DisclosureLimitation_initEntries();
    return DisclosureLimitation_preferred_instance;
  }
  function InputDescriptor$Companion$$childSerializers$_anonymous__ta5xf3() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function InputDescriptor$Companion$$childSerializers$_anonymous__ta5xf3_0() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function Companion_0() {
    Companion_instance_0 = this;
    JsonDataObjectFactory.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, InputDescriptor$Companion$$childSerializers$_anonymous__ta5xf3);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.kfh_1 = [null, null, null, null, null, null, tmp_1, lazy(tmp_2, InputDescriptor$Companion$$childSerializers$_anonymous__ta5xf3_0)];
  }
  protoOf(Companion_0).lfh = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.oid4vc.data.dif.InputDescriptor', this, 8);
    tmp0_serialDesc.z2b('id', true);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('purpose', true);
    tmp0_serialDesc.z2b('format', true);
    tmp0_serialDesc.z2b('constraints', true);
    tmp0_serialDesc.z2b('schema', true);
    tmp0_serialDesc.z2b('group', true);
    tmp0_serialDesc.z2b('customParameters', true);
    this.mfh_1 = tmp0_serialDesc;
  }
  protoOf($serializer).nfh = function (encoder, value) {
    var tmp0_desc = this.mfh_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().kfh_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ofh_1 === '1')) {
      tmp1_output.y25(tmp0_desc, 0, value.ofh_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.pfh_1 == null)) {
      tmp1_output.c26(tmp0_desc, 1, StringSerializer_getInstance(), value.pfh_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !(value.qfh_1 == null)) {
      tmp1_output.c26(tmp0_desc, 2, StringSerializer_getInstance(), value.qfh_1);
    }
    if (tmp1_output.g26(tmp0_desc, 3) ? true : !(value.rfh_1 == null)) {
      tmp1_output.c26(tmp0_desc, 3, VCFormatMapSerializer_getInstance(), value.rfh_1);
    }
    if (tmp1_output.g26(tmp0_desc, 4) ? true : !(value.sfh_1 == null)) {
      tmp1_output.c26(tmp0_desc, 4, InputDescriptorConstraintsSerializer_getInstance(), value.sfh_1);
    }
    if (tmp1_output.g26(tmp0_desc, 5) ? true : !(value.tfh_1 == null)) {
      tmp1_output.c26(tmp0_desc, 5, InputDescriptorSchemaListSerializer_getInstance(), value.tfh_1);
    }
    if (tmp1_output.g26(tmp0_desc, 6) ? true : !(value.ufh_1 == null)) {
      tmp1_output.c26(tmp0_desc, 6, tmp2_cached[6].c1(), value.ufh_1);
    }
    var tmp;
    if (tmp1_output.g26(tmp0_desc, 7)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(value.vfh_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.c26(tmp0_desc, 7, tmp2_cached[7].c1(), value.vfh_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer).x20 = function (encoder, value) {
    return this.nfh(encoder, value instanceof InputDescriptor ? value : THROW_CCE());
  };
  protoOf($serializer).y20 = function (decoder) {
    var tmp0_desc = this.mfh_1;
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
    var tmp12_input = decoder.j24(tmp0_desc);
    var tmp13_cached = Companion_getInstance_1().kfh_1;
    if (tmp12_input.z24()) {
      tmp4_local0 = tmp12_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.x24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.x24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.x24(tmp0_desc, 3, VCFormatMapSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.x24(tmp0_desc, 4, InputDescriptorConstraintsSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.x24(tmp0_desc, 5, InputDescriptorSchemaListSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.x24(tmp0_desc, 6, tmp13_cached[6].c1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.x24(tmp0_desc, 7, tmp13_cached[7].c1(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.x24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.x24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.x24(tmp0_desc, 3, VCFormatMapSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.x24(tmp0_desc, 4, InputDescriptorConstraintsSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.x24(tmp0_desc, 5, InputDescriptorSchemaListSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.x24(tmp0_desc, 6, tmp13_cached[6].c1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.x24(tmp0_desc, 7, tmp13_cached[7].c1(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.k24(tmp0_desc);
    return InputDescriptor_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer).w20 = function () {
    return this.mfh_1;
  };
  protoOf($serializer).o2c = function () {
    var tmp0_cached = Companion_getInstance_1().kfh_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(VCFormatMapSerializer_getInstance()), get_nullable(InputDescriptorConstraintsSerializer_getInstance()), get_nullable(InputDescriptorSchemaListSerializer_getInstance()), get_nullable(tmp0_cached[6].c1()), get_nullable(tmp0_cached[7].c1())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function InputDescriptor_init_$Init$(seen0, id, name, purpose, format, constraints, schema, group, customParameters, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, InputDescriptorSerializer_getInstance().w20());
    }
    JsonDataObject.call($this);
    if (0 === (seen0 & 1))
      $this.ofh_1 = '1';
    else
      $this.ofh_1 = id;
    if (0 === (seen0 & 2))
      $this.pfh_1 = null;
    else
      $this.pfh_1 = name;
    if (0 === (seen0 & 4))
      $this.qfh_1 = null;
    else
      $this.qfh_1 = purpose;
    if (0 === (seen0 & 8))
      $this.rfh_1 = null;
    else
      $this.rfh_1 = format;
    if (0 === (seen0 & 16))
      $this.sfh_1 = null;
    else
      $this.sfh_1 = constraints;
    if (0 === (seen0 & 32))
      $this.tfh_1 = null;
    else
      $this.tfh_1 = schema;
    if (0 === (seen0 & 64))
      $this.ufh_1 = null;
    else
      $this.ufh_1 = group;
    if (0 === (seen0 & 128)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.vfh_1 = emptyMap();
    } else
      $this.vfh_1 = customParameters;
    return $this;
  }
  function InputDescriptor_init_$Create$(seen0, id, name, purpose, format, constraints, schema, group, customParameters, serializationConstructorMarker) {
    return InputDescriptor_init_$Init$(seen0, id, name, purpose, format, constraints, schema, group, customParameters, serializationConstructorMarker, objectCreate(protoOf(InputDescriptor)));
  }
  function InputDescriptor(id, name, purpose, format, constraints, schema, group, customParameters) {
    Companion_getInstance_1();
    id = id === VOID ? '1' : id;
    name = name === VOID ? null : name;
    purpose = purpose === VOID ? null : purpose;
    format = format === VOID ? null : format;
    constraints = constraints === VOID ? null : constraints;
    schema = schema === VOID ? null : schema;
    group = group === VOID ? null : group;
    var tmp;
    if (customParameters === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = customParameters;
    }
    customParameters = tmp;
    JsonDataObject.call(this);
    this.ofh_1 = id;
    this.pfh_1 = name;
    this.qfh_1 = purpose;
    this.rfh_1 = format;
    this.sfh_1 = constraints;
    this.tfh_1 = schema;
    this.ufh_1 = group;
    this.vfh_1 = customParameters;
  }
  protoOf(InputDescriptor).toString = function () {
    return 'InputDescriptor(id=' + this.ofh_1 + ', name=' + this.pfh_1 + ', purpose=' + this.qfh_1 + ', format=' + toString(this.rfh_1) + ', constraints=' + toString(this.sfh_1) + ', schema=' + toString(this.tfh_1) + ', group=' + toString(this.ufh_1) + ', customParameters=' + toString(this.vfh_1) + ')';
  };
  protoOf(InputDescriptor).hashCode = function () {
    var result = getStringHashCode(this.ofh_1);
    result = imul(result, 31) + (this.pfh_1 == null ? 0 : getStringHashCode(this.pfh_1)) | 0;
    result = imul(result, 31) + (this.qfh_1 == null ? 0 : getStringHashCode(this.qfh_1)) | 0;
    result = imul(result, 31) + (this.rfh_1 == null ? 0 : hashCode(this.rfh_1)) | 0;
    result = imul(result, 31) + (this.sfh_1 == null ? 0 : this.sfh_1.hashCode()) | 0;
    result = imul(result, 31) + (this.tfh_1 == null ? 0 : hashCode(this.tfh_1)) | 0;
    result = imul(result, 31) + (this.ufh_1 == null ? 0 : hashCode(this.ufh_1)) | 0;
    result = imul(result, 31) + (this.vfh_1 == null ? 0 : hashCode(this.vfh_1)) | 0;
    return result;
  };
  protoOf(InputDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InputDescriptor))
      return false;
    var tmp0_other_with_cast = other instanceof InputDescriptor ? other : THROW_CCE();
    if (!(this.ofh_1 === tmp0_other_with_cast.ofh_1))
      return false;
    if (!(this.pfh_1 == tmp0_other_with_cast.pfh_1))
      return false;
    if (!(this.qfh_1 == tmp0_other_with_cast.qfh_1))
      return false;
    if (!equals(this.rfh_1, tmp0_other_with_cast.rfh_1))
      return false;
    if (!equals(this.sfh_1, tmp0_other_with_cast.sfh_1))
      return false;
    if (!equals(this.tfh_1, tmp0_other_with_cast.tfh_1))
      return false;
    if (!equals(this.ufh_1, tmp0_other_with_cast.ufh_1))
      return false;
    if (!equals(this.vfh_1, tmp0_other_with_cast.vfh_1))
      return false;
    return true;
  };
  function InputDescriptorSerializer() {
    InputDescriptorSerializer_instance = this;
    JsonDataObjectSerializer.call(this, Companion_getInstance_1().lfh());
  }
  var InputDescriptorSerializer_instance;
  function InputDescriptorSerializer_getInstance() {
    if (InputDescriptorSerializer_instance == null)
      new InputDescriptorSerializer();
    return InputDescriptorSerializer_instance;
  }
  function InputDescriptorListSerializer() {
    InputDescriptorListSerializer_instance = this;
    this.wfh_1 = ListSerializer(InputDescriptorSerializer_getInstance());
    this.xfh_1 = this.wfh_1.w20();
  }
  protoOf(InputDescriptorListSerializer).w20 = function () {
    return this.xfh_1;
  };
  protoOf(InputDescriptorListSerializer).y20 = function (decoder) {
    return this.wfh_1.y20(decoder);
  };
  protoOf(InputDescriptorListSerializer).yfh = function (encoder, value) {
    return this.wfh_1.x20(encoder, value);
  };
  protoOf(InputDescriptorListSerializer).x20 = function (encoder, value) {
    return this.yfh(encoder, (!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE());
  };
  var InputDescriptorListSerializer_instance;
  function InputDescriptorListSerializer_getInstance() {
    if (InputDescriptorListSerializer_instance == null)
      new InputDescriptorListSerializer();
    return InputDescriptorListSerializer_instance;
  }
  function InputDescriptorConstraints$Companion$$childSerializers$_anonymous__vdtsab() {
    return Companion_getInstance_0().o4u();
  }
  function InputDescriptorConstraints$Companion$$childSerializers$_anonymous__vdtsab_0() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function Companion_1() {
    Companion_instance_1 = this;
    JsonDataObjectFactory.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, InputDescriptorConstraints$Companion$$childSerializers$_anonymous__vdtsab);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.zfh_1 = [null, tmp_1, lazy(tmp_2, InputDescriptorConstraints$Companion$$childSerializers$_anonymous__vdtsab_0)];
  }
  protoOf(Companion_1).lfh = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.oid4vc.data.dif.InputDescriptorConstraints', this, 3);
    tmp0_serialDesc.z2b('fields', true);
    tmp0_serialDesc.z2b('limit_disclosure', true);
    tmp0_serialDesc.z2b('customParameters', true);
    this.afi_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).bfi = function (encoder, value) {
    var tmp0_desc = this.afi_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().zfh_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.cfi_1 == null)) {
      tmp1_output.c26(tmp0_desc, 0, InputDescriptorFieldListSerializer_getInstance(), value.cfi_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.dfi_1 == null)) {
      tmp1_output.c26(tmp0_desc, 1, tmp2_cached[1].c1(), value.dfi_1);
    }
    var tmp;
    if (tmp1_output.g26(tmp0_desc, 2)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(value.efi_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.c26(tmp0_desc, 2, tmp2_cached[2].c1(), value.efi_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_0).x20 = function (encoder, value) {
    return this.bfi(encoder, value instanceof InputDescriptorConstraints ? value : THROW_CCE());
  };
  protoOf($serializer_0).y20 = function (decoder) {
    var tmp0_desc = this.afi_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_2().zfh_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, InputDescriptorFieldListSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.x24(tmp0_desc, 1, tmp8_cached[1].c1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.x24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, InputDescriptorFieldListSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.x24(tmp0_desc, 1, tmp8_cached[1].c1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.x24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return InputDescriptorConstraints_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_0).w20 = function () {
    return this.afi_1;
  };
  protoOf($serializer_0).o2c = function () {
    var tmp0_cached = Companion_getInstance_2().zfh_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(InputDescriptorFieldListSerializer_getInstance()), get_nullable(tmp0_cached[1].c1()), get_nullable(tmp0_cached[2].c1())];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function InputDescriptorConstraints_init_$Init$(seen0, fields, limitDisclosure, customParameters, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, InputDescriptorConstraintsSerializer_getInstance().w20());
    }
    JsonDataObject.call($this);
    if (0 === (seen0 & 1))
      $this.cfi_1 = null;
    else
      $this.cfi_1 = fields;
    if (0 === (seen0 & 2))
      $this.dfi_1 = null;
    else
      $this.dfi_1 = limitDisclosure;
    if (0 === (seen0 & 4)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.efi_1 = emptyMap();
    } else
      $this.efi_1 = customParameters;
    return $this;
  }
  function InputDescriptorConstraints_init_$Create$(seen0, fields, limitDisclosure, customParameters, serializationConstructorMarker) {
    return InputDescriptorConstraints_init_$Init$(seen0, fields, limitDisclosure, customParameters, serializationConstructorMarker, objectCreate(protoOf(InputDescriptorConstraints)));
  }
  function InputDescriptorConstraints(fields, limitDisclosure, customParameters) {
    Companion_getInstance_2();
    fields = fields === VOID ? null : fields;
    limitDisclosure = limitDisclosure === VOID ? null : limitDisclosure;
    var tmp;
    if (customParameters === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = customParameters;
    }
    customParameters = tmp;
    JsonDataObject.call(this);
    this.cfi_1 = fields;
    this.dfi_1 = limitDisclosure;
    this.efi_1 = customParameters;
  }
  protoOf(InputDescriptorConstraints).toString = function () {
    return 'InputDescriptorConstraints(fields=' + toString(this.cfi_1) + ', limitDisclosure=' + toString(this.dfi_1) + ', customParameters=' + toString(this.efi_1) + ')';
  };
  protoOf(InputDescriptorConstraints).hashCode = function () {
    var result = this.cfi_1 == null ? 0 : hashCode(this.cfi_1);
    result = imul(result, 31) + (this.dfi_1 == null ? 0 : this.dfi_1.hashCode()) | 0;
    result = imul(result, 31) + (this.efi_1 == null ? 0 : hashCode(this.efi_1)) | 0;
    return result;
  };
  protoOf(InputDescriptorConstraints).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InputDescriptorConstraints))
      return false;
    var tmp0_other_with_cast = other instanceof InputDescriptorConstraints ? other : THROW_CCE();
    if (!equals(this.cfi_1, tmp0_other_with_cast.cfi_1))
      return false;
    if (!equals(this.dfi_1, tmp0_other_with_cast.dfi_1))
      return false;
    if (!equals(this.efi_1, tmp0_other_with_cast.efi_1))
      return false;
    return true;
  };
  function InputDescriptorConstraintsSerializer() {
    InputDescriptorConstraintsSerializer_instance = this;
    JsonDataObjectSerializer.call(this, Companion_getInstance_2().lfh());
  }
  var InputDescriptorConstraintsSerializer_instance;
  function InputDescriptorConstraintsSerializer_getInstance() {
    if (InputDescriptorConstraintsSerializer_instance == null)
      new InputDescriptorConstraintsSerializer();
    return InputDescriptorConstraintsSerializer_instance;
  }
  function InputDescriptorField$Companion$$childSerializers$_anonymous__cfbatl() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function InputDescriptorField$Companion$$childSerializers$_anonymous__cfbatl_0() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, InputDescriptorField$Companion$$childSerializers$_anonymous__cfbatl);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ffi_1 = [tmp_1, null, null, null, null, null, null, lazy(tmp_2, InputDescriptorField$Companion$$childSerializers$_anonymous__cfbatl_0)];
  }
  protoOf(Companion_2).lfh = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.oid4vc.data.dif.InputDescriptorField', this, 8);
    tmp0_serialDesc.z2b('path', false);
    tmp0_serialDesc.z2b('id', true);
    tmp0_serialDesc.z2b('purpose', true);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('filter', true);
    tmp0_serialDesc.z2b('optional', true);
    tmp0_serialDesc.z2b('intent_to_retain', true);
    tmp0_serialDesc.z2b('customParameters', true);
    this.gfi_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).hfi = function (encoder, value) {
    var tmp0_desc = this.gfi_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().ffi_1;
    tmp1_output.a26(tmp0_desc, 0, tmp2_cached[0].c1(), value.ifi_1);
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.jfi_1 == null)) {
      tmp1_output.c26(tmp0_desc, 1, StringSerializer_getInstance(), value.jfi_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !(value.kfi_1 == null)) {
      tmp1_output.c26(tmp0_desc, 2, StringSerializer_getInstance(), value.kfi_1);
    }
    if (tmp1_output.g26(tmp0_desc, 3) ? true : !(value.lfi_1 == null)) {
      tmp1_output.c26(tmp0_desc, 3, StringSerializer_getInstance(), value.lfi_1);
    }
    if (tmp1_output.g26(tmp0_desc, 4) ? true : !(value.mfi_1 == null)) {
      tmp1_output.c26(tmp0_desc, 4, JsonObjectSerializer_getInstance(), value.mfi_1);
    }
    if (tmp1_output.g26(tmp0_desc, 5) ? true : !(value.nfi_1 == null)) {
      tmp1_output.c26(tmp0_desc, 5, BooleanSerializer_getInstance(), value.nfi_1);
    }
    if (tmp1_output.g26(tmp0_desc, 6) ? true : !(value.ofi_1 == null)) {
      tmp1_output.c26(tmp0_desc, 6, BooleanSerializer_getInstance(), value.ofi_1);
    }
    var tmp;
    if (tmp1_output.g26(tmp0_desc, 7)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(value.pfi_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.c26(tmp0_desc, 7, tmp2_cached[7].c1(), value.pfi_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_1).x20 = function (encoder, value) {
    return this.hfi(encoder, value instanceof InputDescriptorField ? value : THROW_CCE());
  };
  protoOf($serializer_1).y20 = function (decoder) {
    var tmp0_desc = this.gfi_1;
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
    var tmp12_input = decoder.j24(tmp0_desc);
    var tmp13_cached = Companion_getInstance_3().ffi_1;
    if (tmp12_input.z24()) {
      tmp4_local0 = tmp12_input.v24(tmp0_desc, 0, tmp13_cached[0].c1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.x24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.x24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.x24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.x24(tmp0_desc, 4, JsonObjectSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.x24(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.x24(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.x24(tmp0_desc, 7, tmp13_cached[7].c1(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.v24(tmp0_desc, 0, tmp13_cached[0].c1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.x24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.x24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.x24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.x24(tmp0_desc, 4, JsonObjectSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.x24(tmp0_desc, 5, BooleanSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.x24(tmp0_desc, 6, BooleanSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.x24(tmp0_desc, 7, tmp13_cached[7].c1(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.k24(tmp0_desc);
    return InputDescriptorField_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_1).w20 = function () {
    return this.gfi_1;
  };
  protoOf($serializer_1).o2c = function () {
    var tmp0_cached = Companion_getInstance_3().ffi_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].c1(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(JsonObjectSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(tmp0_cached[7].c1())];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function InputDescriptorField_init_$Init$(seen0, path, id, purpose, name, filter, optional, intentToRetain, customParameters, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, InputDescriptorFieldSerializer_getInstance().w20());
    }
    JsonDataObject.call($this);
    $this.ifi_1 = path;
    if (0 === (seen0 & 2))
      $this.jfi_1 = null;
    else
      $this.jfi_1 = id;
    if (0 === (seen0 & 4))
      $this.kfi_1 = null;
    else
      $this.kfi_1 = purpose;
    if (0 === (seen0 & 8))
      $this.lfi_1 = null;
    else
      $this.lfi_1 = name;
    if (0 === (seen0 & 16))
      $this.mfi_1 = null;
    else
      $this.mfi_1 = filter;
    if (0 === (seen0 & 32))
      $this.nfi_1 = null;
    else
      $this.nfi_1 = optional;
    if (0 === (seen0 & 64))
      $this.ofi_1 = null;
    else
      $this.ofi_1 = intentToRetain;
    if (0 === (seen0 & 128)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.pfi_1 = emptyMap();
    } else
      $this.pfi_1 = customParameters;
    return $this;
  }
  function InputDescriptorField_init_$Create$(seen0, path, id, purpose, name, filter, optional, intentToRetain, customParameters, serializationConstructorMarker) {
    return InputDescriptorField_init_$Init$(seen0, path, id, purpose, name, filter, optional, intentToRetain, customParameters, serializationConstructorMarker, objectCreate(protoOf(InputDescriptorField)));
  }
  function InputDescriptorField() {
  }
  protoOf(InputDescriptorField).toString = function () {
    return 'InputDescriptorField(path=' + toString_0(this.ifi_1) + ', id=' + this.jfi_1 + ', purpose=' + this.kfi_1 + ', name=' + this.lfi_1 + ', filter=' + toString(this.mfi_1) + ', optional=' + this.nfi_1 + ', intentToRetain=' + this.ofi_1 + ', customParameters=' + toString(this.pfi_1) + ')';
  };
  protoOf(InputDescriptorField).hashCode = function () {
    var result = hashCode(this.ifi_1);
    result = imul(result, 31) + (this.jfi_1 == null ? 0 : getStringHashCode(this.jfi_1)) | 0;
    result = imul(result, 31) + (this.kfi_1 == null ? 0 : getStringHashCode(this.kfi_1)) | 0;
    result = imul(result, 31) + (this.lfi_1 == null ? 0 : getStringHashCode(this.lfi_1)) | 0;
    result = imul(result, 31) + (this.mfi_1 == null ? 0 : this.mfi_1.hashCode()) | 0;
    result = imul(result, 31) + (this.nfi_1 == null ? 0 : getBooleanHashCode(this.nfi_1)) | 0;
    result = imul(result, 31) + (this.ofi_1 == null ? 0 : getBooleanHashCode(this.ofi_1)) | 0;
    result = imul(result, 31) + (this.pfi_1 == null ? 0 : hashCode(this.pfi_1)) | 0;
    return result;
  };
  protoOf(InputDescriptorField).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InputDescriptorField))
      return false;
    var tmp0_other_with_cast = other instanceof InputDescriptorField ? other : THROW_CCE();
    if (!equals(this.ifi_1, tmp0_other_with_cast.ifi_1))
      return false;
    if (!(this.jfi_1 == tmp0_other_with_cast.jfi_1))
      return false;
    if (!(this.kfi_1 == tmp0_other_with_cast.kfi_1))
      return false;
    if (!(this.lfi_1 == tmp0_other_with_cast.lfi_1))
      return false;
    if (!equals(this.mfi_1, tmp0_other_with_cast.mfi_1))
      return false;
    if (!(this.nfi_1 == tmp0_other_with_cast.nfi_1))
      return false;
    if (!(this.ofi_1 == tmp0_other_with_cast.ofi_1))
      return false;
    if (!equals(this.pfi_1, tmp0_other_with_cast.pfi_1))
      return false;
    return true;
  };
  function InputDescriptorFieldSerializer() {
    InputDescriptorFieldSerializer_instance = this;
    JsonDataObjectSerializer.call(this, Companion_getInstance_3().lfh());
  }
  var InputDescriptorFieldSerializer_instance;
  function InputDescriptorFieldSerializer_getInstance() {
    if (InputDescriptorFieldSerializer_instance == null)
      new InputDescriptorFieldSerializer();
    return InputDescriptorFieldSerializer_instance;
  }
  function InputDescriptorFieldListSerializer() {
    InputDescriptorFieldListSerializer_instance = this;
    this.qfi_1 = ListSerializer(InputDescriptorFieldSerializer_getInstance());
    this.rfi_1 = this.qfi_1.w20();
  }
  protoOf(InputDescriptorFieldListSerializer).w20 = function () {
    return this.rfi_1;
  };
  protoOf(InputDescriptorFieldListSerializer).y20 = function (decoder) {
    return this.qfi_1.y20(decoder);
  };
  protoOf(InputDescriptorFieldListSerializer).sfi = function (encoder, value) {
    return this.qfi_1.x20(encoder, value);
  };
  protoOf(InputDescriptorFieldListSerializer).x20 = function (encoder, value) {
    return this.sfi(encoder, (!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE());
  };
  var InputDescriptorFieldListSerializer_instance;
  function InputDescriptorFieldListSerializer_getInstance() {
    if (InputDescriptorFieldListSerializer_instance == null)
      new InputDescriptorFieldListSerializer();
    return InputDescriptorFieldListSerializer_instance;
  }
  function InputDescriptorSchema$Companion$$childSerializers$_anonymous__9wjek0() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.tfi_1 = [null, lazy(tmp_0, InputDescriptorSchema$Companion$$childSerializers$_anonymous__9wjek0)];
  }
  protoOf(Companion_3).lfh = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.oid4vc.data.dif.InputDescriptorSchema', this, 2);
    tmp0_serialDesc.z2b('uri', false);
    tmp0_serialDesc.z2b('customParameters', true);
    this.ufi_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).vfi = function (encoder, value) {
    var tmp0_desc = this.ufi_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().tfi_1;
    tmp1_output.y25(tmp0_desc, 0, value.wfi_1);
    var tmp;
    if (tmp1_output.g26(tmp0_desc, 1)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(value.xfi_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.c26(tmp0_desc, 1, tmp2_cached[1].c1(), value.xfi_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_2).x20 = function (encoder, value) {
    return this.vfi(encoder, value instanceof InputDescriptorSchema ? value : THROW_CCE());
  };
  protoOf($serializer_2).y20 = function (decoder) {
    var tmp0_desc = this.ufi_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.j24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_4().tfi_1;
    if (tmp6_input.z24()) {
      tmp4_local0 = tmp6_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.x24(tmp0_desc, 1, tmp7_cached[1].c1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.x24(tmp0_desc, 1, tmp7_cached[1].c1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.k24(tmp0_desc);
    return InputDescriptorSchema_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).w20 = function () {
    return this.ufi_1;
  };
  protoOf($serializer_2).o2c = function () {
    var tmp0_cached = Companion_getInstance_4().tfi_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(tmp0_cached[1].c1())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function InputDescriptorSchema_init_$Init$(seen0, uri, customParameters, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, InputDescriptorSchemaSerializer_getInstance().w20());
    }
    JsonDataObject.call($this);
    $this.wfi_1 = uri;
    if (0 === (seen0 & 2)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.xfi_1 = emptyMap();
    } else
      $this.xfi_1 = customParameters;
    return $this;
  }
  function InputDescriptorSchema_init_$Create$(seen0, uri, customParameters, serializationConstructorMarker) {
    return InputDescriptorSchema_init_$Init$(seen0, uri, customParameters, serializationConstructorMarker, objectCreate(protoOf(InputDescriptorSchema)));
  }
  function InputDescriptorSchema() {
  }
  protoOf(InputDescriptorSchema).toString = function () {
    return 'InputDescriptorSchema(uri=' + this.wfi_1 + ', customParameters=' + toString(this.xfi_1) + ')';
  };
  protoOf(InputDescriptorSchema).hashCode = function () {
    var result = getStringHashCode(this.wfi_1);
    result = imul(result, 31) + (this.xfi_1 == null ? 0 : hashCode(this.xfi_1)) | 0;
    return result;
  };
  protoOf(InputDescriptorSchema).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof InputDescriptorSchema))
      return false;
    var tmp0_other_with_cast = other instanceof InputDescriptorSchema ? other : THROW_CCE();
    if (!(this.wfi_1 === tmp0_other_with_cast.wfi_1))
      return false;
    if (!equals(this.xfi_1, tmp0_other_with_cast.xfi_1))
      return false;
    return true;
  };
  function InputDescriptorSchemaSerializer() {
    InputDescriptorSchemaSerializer_instance = this;
    JsonDataObjectSerializer.call(this, Companion_getInstance_4().lfh());
  }
  var InputDescriptorSchemaSerializer_instance;
  function InputDescriptorSchemaSerializer_getInstance() {
    if (InputDescriptorSchemaSerializer_instance == null)
      new InputDescriptorSchemaSerializer();
    return InputDescriptorSchemaSerializer_instance;
  }
  function InputDescriptorSchemaListSerializer() {
    InputDescriptorSchemaListSerializer_instance = this;
    this.yfi_1 = ListSerializer(InputDescriptorSchemaSerializer_getInstance());
    this.zfi_1 = this.yfi_1.w20();
  }
  protoOf(InputDescriptorSchemaListSerializer).w20 = function () {
    return this.zfi_1;
  };
  protoOf(InputDescriptorSchemaListSerializer).y20 = function (decoder) {
    return this.yfi_1.y20(decoder);
  };
  protoOf(InputDescriptorSchemaListSerializer).afj = function (encoder, value) {
    return this.yfi_1.x20(encoder, value);
  };
  protoOf(InputDescriptorSchemaListSerializer).x20 = function (encoder, value) {
    return this.afj(encoder, (!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE());
  };
  var InputDescriptorSchemaListSerializer_instance;
  function InputDescriptorSchemaListSerializer_getInstance() {
    if (InputDescriptorSchemaListSerializer_instance == null)
      new InputDescriptorSchemaListSerializer();
    return InputDescriptorSchemaListSerializer_instance;
  }
  function PresentationDefinition$Companion$$childSerializers$_anonymous__bx0qot() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function Companion_4() {
    Companion_instance_4 = this;
    JsonDataObjectFactory.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.bfj_1 = [null, null, null, null, null, null, lazy(tmp_0, PresentationDefinition$Companion$$childSerializers$_anonymous__bx0qot)];
  }
  protoOf(Companion_4).lfh = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.oid4vc.data.dif.PresentationDefinition', this, 7);
    tmp0_serialDesc.z2b('id', true);
    tmp0_serialDesc.z2b('input_descriptors', false);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('purpose', true);
    tmp0_serialDesc.z2b('format', true);
    tmp0_serialDesc.z2b('submission_requirements', true);
    tmp0_serialDesc.z2b('customParameters', true);
    this.cfj_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).dfj = function (encoder, value) {
    var tmp0_desc = this.cfj_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().bfj_1;
    tmp1_output.y25(tmp0_desc, 0, value.efj_1);
    tmp1_output.a26(tmp0_desc, 1, InputDescriptorListSerializer_getInstance(), value.ffj_1);
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !(value.gfj_1 == null)) {
      tmp1_output.c26(tmp0_desc, 2, StringSerializer_getInstance(), value.gfj_1);
    }
    if (tmp1_output.g26(tmp0_desc, 3) ? true : !(value.hfj_1 == null)) {
      tmp1_output.c26(tmp0_desc, 3, StringSerializer_getInstance(), value.hfj_1);
    }
    if (tmp1_output.g26(tmp0_desc, 4) ? true : !(value.ifj_1 == null)) {
      tmp1_output.c26(tmp0_desc, 4, VCFormatMapSerializer_getInstance(), value.ifj_1);
    }
    if (tmp1_output.g26(tmp0_desc, 5) ? true : !(value.jfj_1 == null)) {
      tmp1_output.c26(tmp0_desc, 5, SubmissionRequirementListSerializer_getInstance(), value.jfj_1);
    }
    var tmp;
    if (tmp1_output.g26(tmp0_desc, 6)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(value.kfj_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.c26(tmp0_desc, 6, tmp2_cached[6].c1(), value.kfj_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_3).x20 = function (encoder, value) {
    return this.dfj(encoder, value instanceof PresentationDefinition ? value : THROW_CCE());
  };
  protoOf($serializer_3).y20 = function (decoder) {
    var tmp0_desc = this.cfj_1;
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
    var tmp11_input = decoder.j24(tmp0_desc);
    var tmp12_cached = Companion_getInstance_5().bfj_1;
    if (tmp11_input.z24()) {
      tmp4_local0 = tmp11_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.v24(tmp0_desc, 1, InputDescriptorListSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.x24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.x24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.x24(tmp0_desc, 4, VCFormatMapSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.x24(tmp0_desc, 5, SubmissionRequirementListSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.x24(tmp0_desc, 6, tmp12_cached[6].c1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.v24(tmp0_desc, 1, InputDescriptorListSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.x24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.x24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.x24(tmp0_desc, 4, VCFormatMapSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.x24(tmp0_desc, 5, SubmissionRequirementListSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.x24(tmp0_desc, 6, tmp12_cached[6].c1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.k24(tmp0_desc);
    return PresentationDefinition_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_3).w20 = function () {
    return this.cfj_1;
  };
  protoOf($serializer_3).o2c = function () {
    var tmp0_cached = Companion_getInstance_5().bfj_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), InputDescriptorListSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(VCFormatMapSerializer_getInstance()), get_nullable(SubmissionRequirementListSerializer_getInstance()), get_nullable(tmp0_cached[6].c1())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function PresentationDefinition_init_$Init$(seen0, id, inputDescriptors, name, purpose, format, submissionRequirements, customParameters, serializationConstructorMarker, $this) {
    if (!(2 === (2 & seen0))) {
      throwMissingFieldException(seen0, 2, PresentationDefinitionSerializer_getInstance().w20());
    }
    JsonDataObject.call($this);
    if (0 === (seen0 & 1))
      $this.efj_1 = ShortIdUtils_getInstance().mfj();
    else
      $this.efj_1 = id;
    $this.ffj_1 = inputDescriptors;
    if (0 === (seen0 & 4))
      $this.gfj_1 = null;
    else
      $this.gfj_1 = name;
    if (0 === (seen0 & 8))
      $this.hfj_1 = null;
    else
      $this.hfj_1 = purpose;
    if (0 === (seen0 & 16))
      $this.ifj_1 = null;
    else
      $this.ifj_1 = format;
    if (0 === (seen0 & 32))
      $this.jfj_1 = null;
    else
      $this.jfj_1 = submissionRequirements;
    if (0 === (seen0 & 64)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.kfj_1 = emptyMap();
    } else
      $this.kfj_1 = customParameters;
    return $this;
  }
  function PresentationDefinition_init_$Create$(seen0, id, inputDescriptors, name, purpose, format, submissionRequirements, customParameters, serializationConstructorMarker) {
    return PresentationDefinition_init_$Init$(seen0, id, inputDescriptors, name, purpose, format, submissionRequirements, customParameters, serializationConstructorMarker, objectCreate(protoOf(PresentationDefinition)));
  }
  function PresentationDefinition(id, inputDescriptors, name, purpose, format, submissionRequirements, customParameters) {
    Companion_getInstance_5();
    id = id === VOID ? ShortIdUtils_getInstance().mfj() : id;
    name = name === VOID ? null : name;
    purpose = purpose === VOID ? null : purpose;
    format = format === VOID ? null : format;
    submissionRequirements = submissionRequirements === VOID ? null : submissionRequirements;
    var tmp;
    if (customParameters === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = customParameters;
    }
    customParameters = tmp;
    JsonDataObject.call(this);
    this.efj_1 = id;
    this.ffj_1 = inputDescriptors;
    this.gfj_1 = name;
    this.hfj_1 = purpose;
    this.ifj_1 = format;
    this.jfj_1 = submissionRequirements;
    this.kfj_1 = customParameters;
  }
  protoOf(PresentationDefinition).nfj = function () {
    // Inline function 'kotlin.collections.mapNotNull' call
    var tmp0 = this.ffj_1;
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = tmp0.q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var tmp0_safe_receiver = element.sfh_1;
      var tmp0_safe_receiver_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cfi_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination.n(tmp0_safe_receiver_0);
      }
    }
    // Inline function 'kotlin.collections.filter' call
    var tmp0_0 = flatten(destination);
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_0 = tmp0_0.q();
    while (_iterator__ex2g4s_0.r()) {
      var element_0 = _iterator__ex2g4s_0.s();
      var tmp;
      var tmp0_1 = element_0.ifi_1;
      var tmp$ret$7;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0_1, Collection)) {
          tmp_0 = tmp0_1.h();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$7 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s_1 = tmp0_1.q();
        while (_iterator__ex2g4s_1.r()) {
          var element_1 = _iterator__ex2g4s_1.s();
          if (contains(element_1, 'type')) {
            tmp$ret$7 = true;
            break $l$block_0;
          }
        }
        tmp$ret$7 = false;
      }
      if (tmp$ret$7) {
        var tmp0_safe_receiver_1 = element_0.mfi_1;
        var tmp1_safe_receiver = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.bf('type');
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonPrimitive(tmp1_safe_receiver);
        tmp = (tmp2_safe_receiver == null ? null : get_contentOrNull(tmp2_safe_receiver)) === 'string';
      } else {
        tmp = false;
      }
      if (tmp) {
        destination_0.n(element_0);
      }
    }
    var fields = destination_0;
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var destination_1 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s_2 = fields.q();
    while (_iterator__ex2g4s_2.r()) {
      var element_2 = _iterator__ex2g4s_2.s();
      var tmp0_safe_receiver_2 = element_2.mfi_1;
      var tmp1_safe_receiver_0 = tmp0_safe_receiver_2 == null ? null : tmp0_safe_receiver_2.bf('pattern');
      var tmp2_safe_receiver_0 = tmp1_safe_receiver_0 == null ? null : get_jsonPrimitive(tmp1_safe_receiver_0);
      var tmp0_safe_receiver_3 = tmp2_safe_receiver_0 == null ? null : get_contentOrNull(tmp2_safe_receiver_0);
      if (tmp0_safe_receiver_3 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        destination_1.n(tmp0_safe_receiver_3);
      }
    }
    var types = destination_1;
    return types;
  };
  protoOf(PresentationDefinition).toString = function () {
    return 'PresentationDefinition(id=' + this.efj_1 + ', inputDescriptors=' + toString_0(this.ffj_1) + ', name=' + this.gfj_1 + ', purpose=' + this.hfj_1 + ', format=' + toString(this.ifj_1) + ', submissionRequirements=' + toString(this.jfj_1) + ', customParameters=' + toString(this.kfj_1) + ')';
  };
  protoOf(PresentationDefinition).hashCode = function () {
    var result = getStringHashCode(this.efj_1);
    result = imul(result, 31) + hashCode(this.ffj_1) | 0;
    result = imul(result, 31) + (this.gfj_1 == null ? 0 : getStringHashCode(this.gfj_1)) | 0;
    result = imul(result, 31) + (this.hfj_1 == null ? 0 : getStringHashCode(this.hfj_1)) | 0;
    result = imul(result, 31) + (this.ifj_1 == null ? 0 : hashCode(this.ifj_1)) | 0;
    result = imul(result, 31) + (this.jfj_1 == null ? 0 : hashCode(this.jfj_1)) | 0;
    result = imul(result, 31) + (this.kfj_1 == null ? 0 : hashCode(this.kfj_1)) | 0;
    return result;
  };
  protoOf(PresentationDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PresentationDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof PresentationDefinition ? other : THROW_CCE();
    if (!(this.efj_1 === tmp0_other_with_cast.efj_1))
      return false;
    if (!equals(this.ffj_1, tmp0_other_with_cast.ffj_1))
      return false;
    if (!(this.gfj_1 == tmp0_other_with_cast.gfj_1))
      return false;
    if (!(this.hfj_1 == tmp0_other_with_cast.hfj_1))
      return false;
    if (!equals(this.ifj_1, tmp0_other_with_cast.ifj_1))
      return false;
    if (!equals(this.jfj_1, tmp0_other_with_cast.jfj_1))
      return false;
    if (!equals(this.kfj_1, tmp0_other_with_cast.kfj_1))
      return false;
    return true;
  };
  function PresentationDefinitionSerializer() {
    PresentationDefinitionSerializer_instance = this;
    JsonDataObjectSerializer.call(this, Companion_getInstance_5().lfh());
  }
  var PresentationDefinitionSerializer_instance;
  function PresentationDefinitionSerializer_getInstance() {
    if (PresentationDefinitionSerializer_instance == null)
      new PresentationDefinitionSerializer();
    return PresentationDefinitionSerializer_instance;
  }
  function main() {
    var presDef = Default_getInstance().j4s('{\n  "id": "\\u003cautomatically assigned\\u003e",\n  "input_descriptors": [\n    {\n      "id": "VerifiableId",\n      "format": {\n        "jwt_vc_json": {\n          "alg": [\n            "EdDSA"\n          ]\n        }\n      },\n      "constraints": {\n        "fields": [\n          {\n            "path": [\n              "$.type"\n            ],\n            "filter": {\n              "type": "string",\n              "pattern": "VerifiableId"\n            }\n          }\n        ]\n      }\n    }\n  ]\n}');
    // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.y24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(PresentationDefinition), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.i4s(tmp$ret$1, presDef);
    println(tmp$ret$2.nfj());
  }
  function mainWrapper() {
    main();
  }
  function SubmissionRequirement$Companion$$childSerializers$_anonymous__iis9hv() {
    return Companion_getInstance_7().o4u();
  }
  function SubmissionRequirement$Companion$$childSerializers$_anonymous__iis9hv_0() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function Companion_5() {
    Companion_instance_5 = this;
    JsonDataObjectFactory.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, SubmissionRequirement$Companion$$childSerializers$_anonymous__iis9hv);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.pfj_1 = [tmp_1, null, null, null, null, null, null, null, lazy(tmp_2, SubmissionRequirement$Companion$$childSerializers$_anonymous__iis9hv_0)];
  }
  protoOf(Companion_5).lfh = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.oid4vc.data.dif.SubmissionRequirement', this, 9);
    tmp0_serialDesc.z2b('rule', false);
    tmp0_serialDesc.z2b('from', true);
    tmp0_serialDesc.z2b('from_nested', true);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('purpose', true);
    tmp0_serialDesc.z2b('count', true);
    tmp0_serialDesc.z2b('min', true);
    tmp0_serialDesc.z2b('max', true);
    tmp0_serialDesc.z2b('customParameters', true);
    this.qfj_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).rfj = function (encoder, value) {
    var tmp0_desc = this.qfj_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().pfj_1;
    tmp1_output.a26(tmp0_desc, 0, tmp2_cached[0].c1(), value.sfj_1);
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.tfj_1 == null)) {
      tmp1_output.c26(tmp0_desc, 1, StringSerializer_getInstance(), value.tfj_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !(value.ufj_1 == null)) {
      tmp1_output.c26(tmp0_desc, 2, SubmissionRequirementListSerializer_getInstance(), value.ufj_1);
    }
    if (tmp1_output.g26(tmp0_desc, 3) ? true : !(value.vfj_1 == null)) {
      tmp1_output.c26(tmp0_desc, 3, StringSerializer_getInstance(), value.vfj_1);
    }
    if (tmp1_output.g26(tmp0_desc, 4) ? true : !(value.wfj_1 == null)) {
      tmp1_output.c26(tmp0_desc, 4, StringSerializer_getInstance(), value.wfj_1);
    }
    if (tmp1_output.g26(tmp0_desc, 5) ? true : !(value.xfj_1 == null)) {
      tmp1_output.c26(tmp0_desc, 5, IntSerializer_getInstance(), value.xfj_1);
    }
    if (tmp1_output.g26(tmp0_desc, 6) ? true : !(value.yfj_1 == null)) {
      tmp1_output.c26(tmp0_desc, 6, IntSerializer_getInstance(), value.yfj_1);
    }
    if (tmp1_output.g26(tmp0_desc, 7) ? true : !(value.zfj_1 == null)) {
      tmp1_output.c26(tmp0_desc, 7, IntSerializer_getInstance(), value.zfj_1);
    }
    var tmp;
    if (tmp1_output.g26(tmp0_desc, 8)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(value.afk_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.c26(tmp0_desc, 8, tmp2_cached[8].c1(), value.afk_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_4).x20 = function (encoder, value) {
    return this.rfj(encoder, value instanceof SubmissionRequirement ? value : THROW_CCE());
  };
  protoOf($serializer_4).y20 = function (decoder) {
    var tmp0_desc = this.qfj_1;
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
    var tmp12_local8 = null;
    var tmp13_input = decoder.j24(tmp0_desc);
    var tmp14_cached = Companion_getInstance_6().pfj_1;
    if (tmp13_input.z24()) {
      tmp4_local0 = tmp13_input.v24(tmp0_desc, 0, tmp14_cached[0].c1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.x24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.x24(tmp0_desc, 2, SubmissionRequirementListSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.x24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.x24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.x24(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.x24(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.x24(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.x24(tmp0_desc, 8, tmp14_cached[8].c1(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.v24(tmp0_desc, 0, tmp14_cached[0].c1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.x24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.x24(tmp0_desc, 2, SubmissionRequirementListSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.x24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.x24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.x24(tmp0_desc, 5, IntSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.x24(tmp0_desc, 6, IntSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.x24(tmp0_desc, 7, IntSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.x24(tmp0_desc, 8, tmp14_cached[8].c1(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.k24(tmp0_desc);
    return SubmissionRequirement_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_4).w20 = function () {
    return this.qfj_1;
  };
  protoOf($serializer_4).o2c = function () {
    var tmp0_cached = Companion_getInstance_6().pfj_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].c1(), get_nullable(StringSerializer_getInstance()), get_nullable(SubmissionRequirementListSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), get_nullable(tmp0_cached[8].c1())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function SubmissionRequirement_init_$Init$(seen0, rule, from, fromNested, name, purpose, count, min, max, customParameters, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, SubmissionRequirementSerializer_getInstance().w20());
    }
    JsonDataObject.call($this);
    $this.sfj_1 = rule;
    if (0 === (seen0 & 2))
      $this.tfj_1 = null;
    else
      $this.tfj_1 = from;
    if (0 === (seen0 & 4))
      $this.ufj_1 = null;
    else
      $this.ufj_1 = fromNested;
    if (0 === (seen0 & 8))
      $this.vfj_1 = null;
    else
      $this.vfj_1 = name;
    if (0 === (seen0 & 16))
      $this.wfj_1 = null;
    else
      $this.wfj_1 = purpose;
    if (0 === (seen0 & 32))
      $this.xfj_1 = null;
    else
      $this.xfj_1 = count;
    if (0 === (seen0 & 64))
      $this.yfj_1 = null;
    else
      $this.yfj_1 = min;
    if (0 === (seen0 & 128))
      $this.zfj_1 = null;
    else
      $this.zfj_1 = max;
    if (0 === (seen0 & 256)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.afk_1 = emptyMap();
    } else
      $this.afk_1 = customParameters;
    return $this;
  }
  function SubmissionRequirement_init_$Create$(seen0, rule, from, fromNested, name, purpose, count, min, max, customParameters, serializationConstructorMarker) {
    return SubmissionRequirement_init_$Init$(seen0, rule, from, fromNested, name, purpose, count, min, max, customParameters, serializationConstructorMarker, objectCreate(protoOf(SubmissionRequirement)));
  }
  function SubmissionRequirement() {
  }
  protoOf(SubmissionRequirement).toString = function () {
    return 'SubmissionRequirement(rule=' + this.sfj_1.toString() + ', from=' + this.tfj_1 + ', fromNested=' + toString(this.ufj_1) + ', name=' + this.vfj_1 + ', purpose=' + this.wfj_1 + ', count=' + this.xfj_1 + ', min=' + this.yfj_1 + ', max=' + this.zfj_1 + ', customParameters=' + toString(this.afk_1) + ')';
  };
  protoOf(SubmissionRequirement).hashCode = function () {
    var result = this.sfj_1.hashCode();
    result = imul(result, 31) + (this.tfj_1 == null ? 0 : getStringHashCode(this.tfj_1)) | 0;
    result = imul(result, 31) + (this.ufj_1 == null ? 0 : hashCode(this.ufj_1)) | 0;
    result = imul(result, 31) + (this.vfj_1 == null ? 0 : getStringHashCode(this.vfj_1)) | 0;
    result = imul(result, 31) + (this.wfj_1 == null ? 0 : getStringHashCode(this.wfj_1)) | 0;
    result = imul(result, 31) + (this.xfj_1 == null ? 0 : this.xfj_1) | 0;
    result = imul(result, 31) + (this.yfj_1 == null ? 0 : this.yfj_1) | 0;
    result = imul(result, 31) + (this.zfj_1 == null ? 0 : this.zfj_1) | 0;
    result = imul(result, 31) + (this.afk_1 == null ? 0 : hashCode(this.afk_1)) | 0;
    return result;
  };
  protoOf(SubmissionRequirement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SubmissionRequirement))
      return false;
    var tmp0_other_with_cast = other instanceof SubmissionRequirement ? other : THROW_CCE();
    if (!this.sfj_1.equals(tmp0_other_with_cast.sfj_1))
      return false;
    if (!(this.tfj_1 == tmp0_other_with_cast.tfj_1))
      return false;
    if (!equals(this.ufj_1, tmp0_other_with_cast.ufj_1))
      return false;
    if (!(this.vfj_1 == tmp0_other_with_cast.vfj_1))
      return false;
    if (!(this.wfj_1 == tmp0_other_with_cast.wfj_1))
      return false;
    if (!(this.xfj_1 == tmp0_other_with_cast.xfj_1))
      return false;
    if (!(this.yfj_1 == tmp0_other_with_cast.yfj_1))
      return false;
    if (!(this.zfj_1 == tmp0_other_with_cast.zfj_1))
      return false;
    if (!equals(this.afk_1, tmp0_other_with_cast.afk_1))
      return false;
    return true;
  };
  function SubmissionRequirementSerializer() {
    SubmissionRequirementSerializer_instance = this;
    JsonDataObjectSerializer.call(this, Companion_getInstance_6().lfh());
  }
  var SubmissionRequirementSerializer_instance;
  function SubmissionRequirementSerializer_getInstance() {
    if (SubmissionRequirementSerializer_instance == null)
      new SubmissionRequirementSerializer();
    return SubmissionRequirementSerializer_instance;
  }
  function SubmissionRequirementListSerializer() {
    SubmissionRequirementListSerializer_instance = this;
    this.bfk_1 = ListSerializer(SubmissionRequirementSerializer_getInstance());
    this.cfk_1 = this.bfk_1.w20();
  }
  protoOf(SubmissionRequirementListSerializer).w20 = function () {
    return this.cfk_1;
  };
  protoOf(SubmissionRequirementListSerializer).y20 = function (decoder) {
    return this.bfk_1.y20(decoder);
  };
  protoOf(SubmissionRequirementListSerializer).dfk = function (encoder, value) {
    return this.bfk_1.x20(encoder, value);
  };
  protoOf(SubmissionRequirementListSerializer).x20 = function (encoder, value) {
    return this.dfk(encoder, (!(value == null) ? isInterface(value, KtList) : false) ? value : THROW_CCE());
  };
  var SubmissionRequirementListSerializer_instance;
  function SubmissionRequirementListSerializer_getInstance() {
    if (SubmissionRequirementListSerializer_instance == null)
      new SubmissionRequirementListSerializer();
    return SubmissionRequirementListSerializer_instance;
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.ofj_1.c1();
  }
  function SubmissionRequirementRule$Companion$_anonymous__j4v198() {
    return createSimpleEnumSerializer('id.walt.oid4vc.data.dif.SubmissionRequirementRule', values_0());
  }
  var SubmissionRequirementRule_pick_instance;
  var SubmissionRequirementRule_all_instance;
  function values_0() {
    return [SubmissionRequirementRule_pick_getInstance(), SubmissionRequirementRule_all_getInstance()];
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ofj_1 = lazy(tmp_0, SubmissionRequirementRule$Companion$_anonymous__j4v198);
  }
  protoOf(Companion_6).o4u = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_6).z2c = function (typeParamsSerializers) {
    return this.o4u();
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    SubmissionRequirementRule_initEntries();
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  var SubmissionRequirementRule_entriesInitialized;
  function SubmissionRequirementRule_initEntries() {
    if (SubmissionRequirementRule_entriesInitialized)
      return Unit_instance;
    SubmissionRequirementRule_entriesInitialized = true;
    SubmissionRequirementRule_pick_instance = new SubmissionRequirementRule('pick', 0);
    SubmissionRequirementRule_all_instance = new SubmissionRequirementRule('all', 1);
    Companion_getInstance_7();
  }
  function SubmissionRequirementRule(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SubmissionRequirementRule_pick_getInstance() {
    SubmissionRequirementRule_initEntries();
    return SubmissionRequirementRule_pick_instance;
  }
  function SubmissionRequirementRule_all_getInstance() {
    SubmissionRequirementRule_initEntries();
    return SubmissionRequirementRule_all_instance;
  }
  function VCFormatDefinition$Companion$$childSerializers$_anonymous__abm2wd() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function VCFormatDefinition$Companion$$childSerializers$_anonymous__abm2wd_0() {
    return new LinkedHashSetSerializer(StringSerializer_getInstance());
  }
  function VCFormatDefinition$Companion$$childSerializers$_anonymous__abm2wd_1() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function Companion_7() {
    Companion_instance_7 = this;
    JsonDataObjectFactory.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, VCFormatDefinition$Companion$$childSerializers$_anonymous__abm2wd);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, VCFormatDefinition$Companion$$childSerializers$_anonymous__abm2wd_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.efk_1 = [tmp_1, tmp_3, lazy(tmp_4, VCFormatDefinition$Companion$$childSerializers$_anonymous__abm2wd_1)];
  }
  protoOf(Companion_7).lfh = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.oid4vc.data.dif.VCFormatDefinition', this, 3);
    tmp0_serialDesc.z2b('alg', true);
    tmp0_serialDesc.z2b('proof_type', true);
    tmp0_serialDesc.z2b('customParameters', true);
    this.ffk_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).gfk = function (encoder, value) {
    var tmp0_desc = this.ffk_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().efk_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.hfk_1 == null)) {
      tmp1_output.c26(tmp0_desc, 0, tmp2_cached[0].c1(), value.hfk_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.ifk_1 == null)) {
      tmp1_output.c26(tmp0_desc, 1, tmp2_cached[1].c1(), value.ifk_1);
    }
    var tmp;
    if (tmp1_output.g26(tmp0_desc, 2)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.mapOf' call
      var tmp$ret$0 = emptyMap();
      tmp = !equals(value.jfk_1, tmp$ret$0);
    }
    if (tmp) {
      tmp1_output.c26(tmp0_desc, 2, tmp2_cached[2].c1(), value.jfk_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_5).x20 = function (encoder, value) {
    return this.gfk(encoder, value instanceof VCFormatDefinition ? value : THROW_CCE());
  };
  protoOf($serializer_5).y20 = function (decoder) {
    var tmp0_desc = this.ffk_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_8().efk_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, tmp8_cached[0].c1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.x24(tmp0_desc, 1, tmp8_cached[1].c1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.x24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, tmp8_cached[0].c1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.x24(tmp0_desc, 1, tmp8_cached[1].c1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.x24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return VCFormatDefinition_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_5).w20 = function () {
    return this.ffk_1;
  };
  protoOf($serializer_5).o2c = function () {
    var tmp0_cached = Companion_getInstance_8().efk_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(tmp0_cached[0].c1()), get_nullable(tmp0_cached[1].c1()), get_nullable(tmp0_cached[2].c1())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function VCFormatDefinition_init_$Init$(seen0, alg, proof_type, customParameters, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, VCFormatDefinitionSerializer_getInstance().w20());
    }
    JsonDataObject.call($this);
    if (0 === (seen0 & 1))
      $this.hfk_1 = null;
    else
      $this.hfk_1 = alg;
    if (0 === (seen0 & 2))
      $this.ifk_1 = null;
    else
      $this.ifk_1 = proof_type;
    if (0 === (seen0 & 4)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.mapOf' call
      tmp.jfk_1 = emptyMap();
    } else
      $this.jfk_1 = customParameters;
    return $this;
  }
  function VCFormatDefinition_init_$Create$(seen0, alg, proof_type, customParameters, serializationConstructorMarker) {
    return VCFormatDefinition_init_$Init$(seen0, alg, proof_type, customParameters, serializationConstructorMarker, objectCreate(protoOf(VCFormatDefinition)));
  }
  function VCFormatDefinition(alg, proof_type, customParameters) {
    Companion_getInstance_8();
    alg = alg === VOID ? null : alg;
    proof_type = proof_type === VOID ? null : proof_type;
    var tmp;
    if (customParameters === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = customParameters;
    }
    customParameters = tmp;
    JsonDataObject.call(this);
    this.hfk_1 = alg;
    this.ifk_1 = proof_type;
    this.jfk_1 = customParameters;
  }
  protoOf(VCFormatDefinition).toString = function () {
    return 'VCFormatDefinition(alg=' + toString(this.hfk_1) + ', proof_type=' + toString(this.ifk_1) + ', customParameters=' + toString(this.jfk_1) + ')';
  };
  protoOf(VCFormatDefinition).hashCode = function () {
    var result = this.hfk_1 == null ? 0 : hashCode(this.hfk_1);
    result = imul(result, 31) + (this.ifk_1 == null ? 0 : hashCode(this.ifk_1)) | 0;
    result = imul(result, 31) + (this.jfk_1 == null ? 0 : hashCode(this.jfk_1)) | 0;
    return result;
  };
  protoOf(VCFormatDefinition).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VCFormatDefinition))
      return false;
    var tmp0_other_with_cast = other instanceof VCFormatDefinition ? other : THROW_CCE();
    if (!equals(this.hfk_1, tmp0_other_with_cast.hfk_1))
      return false;
    if (!equals(this.ifk_1, tmp0_other_with_cast.ifk_1))
      return false;
    if (!equals(this.jfk_1, tmp0_other_with_cast.jfk_1))
      return false;
    return true;
  };
  function VCFormatDefinitionSerializer() {
    VCFormatDefinitionSerializer_instance = this;
    JsonDataObjectSerializer.call(this, Companion_getInstance_8().lfh());
  }
  var VCFormatDefinitionSerializer_instance;
  function VCFormatDefinitionSerializer_getInstance() {
    if (VCFormatDefinitionSerializer_instance == null)
      new VCFormatDefinitionSerializer();
    return VCFormatDefinitionSerializer_instance;
  }
  function VCFormatMapSerializer() {
    VCFormatMapSerializer_instance = this;
    this.kfk_1 = MapSerializer(Companion_getInstance().o4u(), VCFormatDefinitionSerializer_getInstance());
    this.lfk_1 = this.kfk_1.w20();
  }
  protoOf(VCFormatMapSerializer).w20 = function () {
    return this.lfk_1;
  };
  protoOf(VCFormatMapSerializer).y20 = function (decoder) {
    return this.kfk_1.y20(decoder);
  };
  protoOf(VCFormatMapSerializer).mfk = function (encoder, value) {
    return this.kfk_1.x20(encoder, value);
  };
  protoOf(VCFormatMapSerializer).x20 = function (encoder, value) {
    return this.mfk(encoder, (!(value == null) ? isInterface(value, KtMap) : false) ? value : THROW_CCE());
  };
  var VCFormatMapSerializer_instance;
  function VCFormatMapSerializer_getInstance() {
    if (VCFormatMapSerializer_instance == null)
      new VCFormatMapSerializer();
    return VCFormatMapSerializer_instance;
  }
  function ShortIdUtils() {
    ShortIdUtils_instance = this;
    this.lfj_1 = new Sqids();
  }
  protoOf(ShortIdUtils).mfj = function () {
    return this.lfj_1.qfk(listOf(Default_getInstance_0().nl(new Long(0, 0), new Long(-1, 2147483647))));
  };
  var ShortIdUtils_instance;
  function ShortIdUtils_getInstance() {
    if (ShortIdUtils_instance == null)
      new ShortIdUtils();
    return ShortIdUtils_instance;
  }
  function get_DEFAULT_BLOCK_LIST() {
    _init_properties_Sqids_kt__kw3huw();
    return DEFAULT_BLOCK_LIST;
  }
  var DEFAULT_BLOCK_LIST;
  function encodeNumbers($this, numbers, increment) {
    // Inline function 'kotlin.check' call
    if (!(increment <= $this.nfk_1.length)) {
      var message = 'Reached max attempts to re-generate the ID';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    var offset = numbers.t();
    var inductionVariable = 0;
    var last_0 = numbers.t() - 1 | 0;
    if (inductionVariable <= last_0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1 = numbers.v(i);
        // Inline function 'kotlin.Long.rem' call
        var other = $this.nfk_1.length;
        var index = tmp1.g3(toLong(other)).m1();
        var tmp = offset;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet($this.nfk_1, index);
        offset = tmp + (Char__toInt_impl_vasixd(this_0) + i | 0) | 0;
      }
       while (inductionVariable <= last_0);
    offset = offset % $this.nfk_1.length | 0;
    offset = (offset + increment | 0) % $this.nfk_1.length | 0;
    var tmp4 = $this.nfk_1;
    // Inline function 'kotlin.text.substring' call
    var startIndex = offset;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = tmp4.substring(startIndex);
    var alphabet = (new StringBuilder(tmp$ret$5)).xd($this.nfk_1, 0, offset).zd().toString();
    var prefix = last(alphabet);
    var id = StringBuilder_init_$Create$().p(prefix);
    var iterator = numbers.q();
    var index_0 = 0;
    while (iterator.r()) {
      var i_0 = index_0;
      index_0 = index_0 + 1 | 0;
      var num = iterator.s();
      var tmp_0 = id;
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$7 = alphabet.substring(1);
      tmp_0.z8(toId($this, num, tmp$ret$7));
      if (i_0 < (numbers.t() - 1 | 0)) {
        id.p(first(alphabet));
        alphabet = shuffle($this, alphabet);
      }
    }
    if ($this.ofk_1 > id.a()) {
      id.p(first(alphabet));
      while (($this.ofk_1 - id.a() | 0) > 0) {
        alphabet = shuffle($this, alphabet);
        id.xd(alphabet, 0, coerceAtMost($this.ofk_1 - id.a() | 0, alphabet.length));
      }
    }
    if (isBlockedId($this, id.toString())) {
      id = id.fe();
      id.z8(encodeNumbers($this, numbers, increment + 1 | 0));
    }
    return id.toString();
  }
  function encodeNumbers$default($this, numbers, increment, $super) {
    increment = increment === VOID ? 0 : increment;
    return encodeNumbers($this, numbers, increment);
  }
  function shuffle($this, alphabet) {
    var chars = toCharArray(alphabet);
    var inductionVariable = 0;
    var last = chars.length - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var j = (chars.length - 1 | 0) - i | 0;
        var tmp = imul(i, j);
        // Inline function 'kotlin.code' call
        var this_0 = chars[i];
        var tmp_0 = tmp + Char__toInt_impl_vasixd(this_0) | 0;
        // Inline function 'kotlin.code' call
        var this_1 = chars[j];
        var r = (tmp_0 + Char__toInt_impl_vasixd(this_1) | 0) % chars.length | 0;
        var temp = chars[i];
        chars[i] = chars[r];
        chars[r] = temp;
      }
       while (inductionVariable < last);
    return joinToString(chars, '');
  }
  function toId($this, num, alphabet) {
    var result = num;
    var id = StringBuilder_init_$Create$();
    do {
      var tmp0 = result;
      // Inline function 'kotlin.Long.rem' call
      var other = alphabet.length;
      var tmp$ret$0 = tmp0.g3(toLong(other));
      id.p(charSequenceGet(alphabet, tmp$ret$0.m1()));
      result = floorDiv(result, alphabet.length);
    }
     while (result.h1(new Long(0, 0)) > 0);
    return id.zd().toString();
  }
  function isBlockedId($this, id) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var lowercaseId = id.toLowerCase();
    var _iterator__ex2g4s = $this.pfk_1.q();
    while (_iterator__ex2g4s.r()) {
      var word = _iterator__ex2g4s.s();
      if (word.length <= lowercaseId.length) {
        if (lowercaseId.length <= 3 || word.length <= 3) {
          if (lowercaseId === word) {
            return true;
          }
        } else {
          // Inline function 'kotlin.text.toRegex' call
          // Inline function 'kotlin.text.contains' call
          if (Regex_init_$Create$('[0-9]').te(word)) {
            if (startsWith(lowercaseId, word) || endsWith(lowercaseId, word)) {
              return true;
            }
          } else {
            if (contains(lowercaseId, word)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  function Sqids(alphabet, minLength, blockList) {
    alphabet = alphabet === VOID ? 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' : alphabet;
    minLength = minLength === VOID ? 0 : minLength;
    blockList = blockList === VOID ? get_DEFAULT_BLOCK_LIST() : blockList;
    this.nfk_1 = alphabet;
    this.ofk_1 = minLength;
    this.pfk_1 = blockList;
    if (!(this.nfk_1.length === encodeToByteArray(this.nfk_1).length)) {
      throw IllegalArgumentException_init_$Create$('Alphabet cannot contain multibyte characters');
    }
    if (this.nfk_1.length < 3) {
      throw IllegalArgumentException_init_$Create$('Alphabet length must be at least 3');
    }
    if (!(toSet_0(this.nfk_1).t() === this.nfk_1.length)) {
      throw IllegalArgumentException_init_$Create$('Alphabet must contain unique characters');
    }
    if (this.ofk_1 < 0 || this.ofk_1 > 255) {
      throw IllegalArgumentException_init_$Create$('Minimum length has to be between 0 and 255');
    }
    // Inline function 'kotlin.collections.mutableSetOf' call
    var filteredBlockList = LinkedHashSet_init_$Create$();
    var _iterator__ex2g4s = this.pfk_1.q();
    while (_iterator__ex2g4s.r()) {
      var word = _iterator__ex2g4s.s();
      if (word.length >= 3) {
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var wordLowercased = word.toLowerCase();
        // Inline function 'kotlin.text.filter' call
        // Inline function 'kotlin.text.filterTo' call
        var destination = StringBuilder_init_$Create$();
        var inductionVariable = 0;
        var last = charSequenceLength(wordLowercased);
        if (inductionVariable < last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var element = charSequenceGet(wordLowercased, index);
            // Inline function 'kotlin.text.lowercase' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp$ret$4 = this.nfk_1.toLowerCase();
            if (contains_0(tmp$ret$4, element)) {
              destination.p(element);
            }
          }
           while (inductionVariable < last);
        var intersection = destination.toString();
        if (intersection.length === wordLowercased.length) {
          filteredBlockList.n(wordLowercased);
        }
      }
    }
    this.nfk_1 = shuffle(this, this.nfk_1);
    this.pfk_1 = filteredBlockList;
  }
  protoOf(Sqids).qfk = function (numbers) {
    if (numbers.h()) {
      return '';
    }
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(numbers, Collection)) {
        tmp = numbers.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = numbers.q();
      while (_iterator__ex2g4s.r()) {
        var element = _iterator__ex2g4s.s();
        if (!(element.h1(new Long(0, 0)) >= 0)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$0) {
      var message = 'Encoding supports numbers between 0 and 9223372036854775807, you supplied: ' + toString_0(numbers);
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    return encodeNumbers$default(this, numbers);
  };
  function floorDiv(x, y) {
    _init_properties_Sqids_kt__kw3huw();
    // Inline function 'kotlin.Long.div' call
    var div = x.f3(toLong(y));
    // Inline function 'kotlin.Long.rem' call
    var mod = x.g3(toLong(y));
    var tmp;
    if (!mod.equals(new Long(0, 0)) && !!(x.h1(new Long(0, 0)) < 0 ^ y < 0)) {
      // Inline function 'kotlin.Long.minus' call
      tmp = div.d3(toLong(1));
    } else {
      tmp = div;
    }
    return tmp;
  }
  var properties_initialized_Sqids_kt_33s4ja;
  function _init_properties_Sqids_kt__kw3huw() {
    if (!properties_initialized_Sqids_kt_33s4ja) {
      properties_initialized_Sqids_kt_33s4ja = true;
      DEFAULT_BLOCK_LIST = setOf(['0rgasm', '1d10t', '1d1ot', '1di0t', '1diot', '1eccacu10', '1eccacu1o', '1eccacul0', '1eccaculo', '1mbec11e', '1mbec1le', '1mbeci1e', '1mbecile', 'a11upat0', 'a11upato', 'a1lupat0', 'a1lupato', 'aand', 'ah01e', 'ah0le', 'aho1e', 'ahole', 'al1upat0', 'al1upato', 'allupat0', 'allupato', 'ana1', 'ana1e', 'anal', 'anale', 'anus', 'arrapat0', 'arrapato', 'arsch', 'arse', 'ass', 'b00b', 'b00be', 'b01ata', 'b0ceta', 'b0iata', 'b0ob', 'b0obe', 'b0sta', 'b1tch', 'b1te', 'b1tte', 'ba1atkar', 'balatkar', 'bastard0', 'bastardo', 'batt0na', 'battona', 'bitch', 'bite', 'bitte', 'bo0b', 'bo0be', 'bo1ata', 'boceta', 'boiata', 'boob', 'boobe', 'bosta', 'bran1age', 'bran1er', 'bran1ette', 'bran1eur', 'bran1euse', 'branlage', 'branler', 'branlette', 'branleur', 'branleuse', 'c0ck', 'c0g110ne', 'c0g11one', 'c0g1i0ne', 'c0g1ione', 'c0gl10ne', 'c0gl1one', 'c0gli0ne', 'c0glione', 'c0na', 'c0nnard', 'c0nnasse', 'c0nne', 'c0u111es', 'c0u11les', 'c0u1l1es', 'c0u1lles', 'c0ui11es', 'c0ui1les', 'c0uil1es', 'c0uilles', 'c11t', 'c11t0', 'c11to', 'c1it', 'c1it0', 'c1ito', 'cabr0n', 'cabra0', 'cabrao', 'cabron', 'caca', 'cacca', 'cacete', 'cagante', 'cagar', 'cagare', 'cagna', 'cara1h0', 'cara1ho', 'caracu10', 'caracu1o', 'caracul0', 'caraculo', 'caralh0', 'caralho', 'cazz0', 'cazz1mma', 'cazzata', 'cazzimma', 'cazzo', 'ch00t1a', 'ch00t1ya', 'ch00tia', 'ch00tiya', 'ch0d', 'ch0ot1a', 'ch0ot1ya', 'ch0otia', 'ch0otiya', 'ch1asse', 'ch1avata', 'ch1er', 'ch1ng0', 'ch1ngadaz0s', 'ch1ngadazos', 'ch1ngader1ta', 'ch1ngaderita', 'ch1ngar', 'ch1ngo', 'ch1ngues', 'ch1nk', 'chatte', 'chiasse', 'chiavata', 'chier', 'ching0', 'chingadaz0s', 'chingadazos', 'chingader1ta', 'chingaderita', 'chingar', 'chingo', 'chingues', 'chink', 'cho0t1a', 'cho0t1ya', 'cho0tia', 'cho0tiya', 'chod', 'choot1a', 'choot1ya', 'chootia', 'chootiya', 'cl1t', 'cl1t0', 'cl1to', 'clit', 'clit0', 'clito', 'cock', 'cog110ne', 'cog11one', 'cog1i0ne', 'cog1ione', 'cogl10ne', 'cogl1one', 'cogli0ne', 'coglione', 'cona', 'connard', 'connasse', 'conne', 'cou111es', 'cou11les', 'cou1l1es', 'cou1lles', 'coui11es', 'coui1les', 'couil1es', 'couilles', 'cracker', 'crap', 'cu10', 'cu1att0ne', 'cu1attone', 'cu1er0', 'cu1ero', 'cu1o', 'cul0', 'culatt0ne', 'culattone', 'culer0', 'culero', 'culo', 'cum', 'cunt', 'd11d0', 'd11do', 'd1ck', 'd1ld0', 'd1ldo', 'damn', 'de1ch', 'deich', 'depp', 'di1d0', 'di1do', 'dick', 'dild0', 'dildo', 'dyke', 'encu1e', 'encule', 'enema', 'enf01re', 'enf0ire', 'enfo1re', 'enfoire', 'estup1d0', 'estup1do', 'estupid0', 'estupido', 'etr0n', 'etron', 'f0da', 'f0der', 'f0ttere', 'f0tters1', 'f0ttersi', 'f0tze', 'f0utre', 'f1ca', 'f1cker', 'f1ga', 'fag', 'fica', 'ficker', 'figa', 'foda', 'foder', 'fottere', 'fotters1', 'fottersi', 'fotze', 'foutre', 'fr0c10', 'fr0c1o', 'fr0ci0', 'fr0cio', 'fr0sc10', 'fr0sc1o', 'fr0sci0', 'fr0scio', 'froc10', 'froc1o', 'froci0', 'frocio', 'frosc10', 'frosc1o', 'frosci0', 'froscio', 'fuck', 'g00', 'g0o', 'g0u1ne', 'g0uine', 'gandu', 'go0', 'goo', 'gou1ne', 'gouine', 'gr0gnasse', 'grognasse', 'haram1', 'harami', 'haramzade', 'hund1n', 'hundin', 'id10t', 'id1ot', 'idi0t', 'idiot', 'imbec11e', 'imbec1le', 'imbeci1e', 'imbecile', 'j1zz', 'jerk', 'jizz', 'k1ke', 'kam1ne', 'kamine', 'kike', 'leccacu10', 'leccacu1o', 'leccacul0', 'leccaculo', 'm1erda', 'm1gn0tta', 'm1gnotta', 'm1nch1a', 'm1nchia', 'm1st', 'mam0n', 'mamahuev0', 'mamahuevo', 'mamon', 'masturbat10n', 'masturbat1on', 'masturbate', 'masturbati0n', 'masturbation', 'merd0s0', 'merd0so', 'merda', 'merde', 'merdos0', 'merdoso', 'mierda', 'mign0tta', 'mignotta', 'minch1a', 'minchia', 'mist', 'musch1', 'muschi', 'n1gger', 'neger', 'negr0', 'negre', 'negro', 'nerch1a', 'nerchia', 'nigger', 'orgasm', 'p00p', 'p011a', 'p01la', 'p0l1a', 'p0lla', 'p0mp1n0', 'p0mp1no', 'p0mpin0', 'p0mpino', 'p0op', 'p0rca', 'p0rn', 'p0rra', 'p0uff1asse', 'p0uffiasse', 'p1p1', 'p1pi', 'p1r1a', 'p1rla', 'p1sc10', 'p1sc1o', 'p1sci0', 'p1scio', 'p1sser', 'pa11e', 'pa1le', 'pal1e', 'palle', 'pane1e1r0', 'pane1e1ro', 'pane1eir0', 'pane1eiro', 'panele1r0', 'panele1ro', 'paneleir0', 'paneleiro', 'patakha', 'pec0r1na', 'pec0rina', 'pecor1na', 'pecorina', 'pen1s', 'pendej0', 'pendejo', 'penis', 'pip1', 'pipi', 'pir1a', 'pirla', 'pisc10', 'pisc1o', 'pisci0', 'piscio', 'pisser', 'po0p', 'po11a', 'po1la', 'pol1a', 'polla', 'pomp1n0', 'pomp1no', 'pompin0', 'pompino', 'poop', 'porca', 'porn', 'porra', 'pouff1asse', 'pouffiasse', 'pr1ck', 'prick', 'pussy', 'put1za', 'puta', 'puta1n', 'putain', 'pute', 'putiza', 'puttana', 'queca', 'r0mp1ba11e', 'r0mp1ba1le', 'r0mp1bal1e', 'r0mp1balle', 'r0mpiba11e', 'r0mpiba1le', 'r0mpibal1e', 'r0mpiballe', 'rand1', 'randi', 'rape', 'recch10ne', 'recch1one', 'recchi0ne', 'recchione', 'retard', 'romp1ba11e', 'romp1ba1le', 'romp1bal1e', 'romp1balle', 'rompiba11e', 'rompiba1le', 'rompibal1e', 'rompiballe', 'ruff1an0', 'ruff1ano', 'ruffian0', 'ruffiano', 's1ut', 'sa10pe', 'sa1aud', 'sa1ope', 'sacanagem', 'sal0pe', 'salaud', 'salope', 'saugnapf', 'sb0rr0ne', 'sb0rra', 'sb0rrone', 'sbattere', 'sbatters1', 'sbattersi', 'sborr0ne', 'sborra', 'sborrone', 'sc0pare', 'sc0pata', 'sch1ampe', 'sche1se', 'sche1sse', 'scheise', 'scheisse', 'schlampe', 'schwachs1nn1g', 'schwachs1nnig', 'schwachsinn1g', 'schwachsinnig', 'schwanz', 'scopare', 'scopata', 'sexy', 'sh1t', 'shit', 'slut', 'sp0mp1nare', 'sp0mpinare', 'spomp1nare', 'spompinare', 'str0nz0', 'str0nza', 'str0nzo', 'stronz0', 'stronza', 'stronzo', 'stup1d', 'stupid', 'succh1am1', 'succh1ami', 'succhiam1', 'succhiami', 'sucker', 't0pa', 'tapette', 'test1c1e', 'test1cle', 'testic1e', 'testicle', 'tette', 'topa', 'tr01a', 'tr0ia', 'tr0mbare', 'tr1ng1er', 'tr1ngler', 'tring1er', 'tringler', 'tro1a', 'troia', 'trombare', 'turd', 'twat', 'vaffancu10', 'vaffancu1o', 'vaffancul0', 'vaffanculo', 'vag1na', 'vagina', 'verdammt', 'verga', 'w1chsen', 'wank', 'wichsen', 'x0ch0ta', 'x0chota', 'xana', 'xoch0ta', 'xochota', 'z0cc01a', 'z0cc0la', 'z0cco1a', 'z0ccola', 'z1z1', 'z1zi', 'ziz1', 'zizi', 'zocc01a', 'zocc0la', 'zocco1a', 'zoccola']);
    }
  }
  //region block: post-declaration
  protoOf($serializer).p2c = typeParametersSerializers;
  protoOf($serializer_0).p2c = typeParametersSerializers;
  protoOf($serializer_1).p2c = typeParametersSerializers;
  protoOf($serializer_2).p2c = typeParametersSerializers;
  protoOf($serializer_3).p2c = typeParametersSerializers;
  protoOf($serializer_4).p2c = typeParametersSerializers;
  protoOf($serializer_5).p2c = typeParametersSerializers;
  //endregion
  //region block: exports
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  kotlin_id_walt_crypto_waltid_crypto.$jsExportAll$(_);
  kotlin_id_walt_did_waltid_did.$jsExportAll$(_);
  kotlin_id_walt_sdjwt_waltid_sdjwt.$jsExportAll$(_);
  kotlin_id_walt_credentials_waltid_w3c_credentials.$jsExportAll$(_);
  kotlin_id_walt_policies_waltid_verification_policies.$jsExportAll$(_);
  kotlin_id_walt_mdoc_credentials_waltid_mdoc_credentials.$jsExportAll$(_);
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=waltid-identity-waltid-libraries-protocols-waltid-openid4vc.js.map
