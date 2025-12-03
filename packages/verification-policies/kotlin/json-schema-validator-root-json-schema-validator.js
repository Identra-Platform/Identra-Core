(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './uri-kmp-uri.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlin-codepoints-parent-kotlin-codepoints.js', './karacteristics-root-karacteristics.js', './normalize.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./uri-kmp-uri.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlin-codepoints-parent-kotlin-codepoints.js'), require('./karacteristics-root-karacteristics.js'), require('./normalize.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'json-schema-validator-root-json-schema-validator'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'json-schema-validator-root-json-schema-validator'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'json-schema-validator-root-json-schema-validator'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'json-schema-validator-root-json-schema-validator'.");
    }
    if (typeof globalThis['uri-kmp-uri'] === 'undefined') {
      throw new Error("Error loading module 'json-schema-validator-root-json-schema-validator'. Its dependency 'uri-kmp-uri' was not found. Please, check whether 'uri-kmp-uri' is loaded prior to 'json-schema-validator-root-json-schema-validator'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'json-schema-validator-root-json-schema-validator'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'json-schema-validator-root-json-schema-validator'.");
    }
    if (typeof globalThis['kotlin-codepoints-parent-kotlin-codepoints'] === 'undefined') {
      throw new Error("Error loading module 'json-schema-validator-root-json-schema-validator'. Its dependency 'kotlin-codepoints-parent-kotlin-codepoints' was not found. Please, check whether 'kotlin-codepoints-parent-kotlin-codepoints' is loaded prior to 'json-schema-validator-root-json-schema-validator'.");
    }
    if (typeof globalThis['karacteristics-root-karacteristics'] === 'undefined') {
      throw new Error("Error loading module 'json-schema-validator-root-json-schema-validator'. Its dependency 'karacteristics-root-karacteristics' was not found. Please, check whether 'karacteristics-root-karacteristics' is loaded prior to 'json-schema-validator-root-json-schema-validator'.");
    }
    if (typeof normalize === 'undefined') {
      throw new Error("Error loading module 'json-schema-validator-root-json-schema-validator'. Its dependency 'normalize' was not found. Please, check whether 'normalize' is loaded prior to 'json-schema-validator-root-json-schema-validator'.");
    }
    globalThis['json-schema-validator-root-json-schema-validator'] = factory(typeof globalThis['json-schema-validator-root-json-schema-validator'] === 'undefined' ? {} : globalThis['json-schema-validator-root-json-schema-validator'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['uri-kmp-uri'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlin-codepoints-parent-kotlin-codepoints'], globalThis['karacteristics-root-karacteristics'], normalize);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_com_eygraber_uri, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_kotlin_codepoints_parent_kotlin_codepoints, kotlin_io_github_optimumcode_karacteristics, kotlin_com_doist_x_normalize) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var log10 = Math.log10;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var charSequenceGet = kotlin_kotlin.$_$.mc;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q1;
  var contains = kotlin_kotlin.$_$.qf;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var startsWith = kotlin_kotlin.$_$.fh;
  var toString = kotlin_kotlin.$_$.fe;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var VOID = kotlin_kotlin.$_$.j;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.r1;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.t;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.n3;
  var toInt = kotlin_kotlin.$_$.vh;
  var toLong = kotlin_kotlin.$_$.yh;
  var Long = kotlin_kotlin.$_$.cj;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var lastIndexOf = kotlin_kotlin.$_$.og;
  var equals = kotlin_kotlin.$_$.rc;
  var hashCode = kotlin_kotlin.$_$.wc;
  var Companion_getInstance = kotlin_com_eygraber_uri.$_$.a;
  var FunctionAdapter = kotlin_kotlin.$_$.fc;
  var isInterface = kotlin_kotlin.$_$.md;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var Enum = kotlin_kotlin.$_$.xi;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ok;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var getKClass = kotlin_kotlin.$_$.g;
  var enumEntries = kotlin_kotlin.$_$.dc;
  var emptyMap = kotlin_kotlin.$_$.l8;
  var toString_0 = kotlin_kotlin.$_$.pk;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var getBooleanHashCode = kotlin_kotlin.$_$.tc;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var cast = kotlin_kotlin.$_$.ye;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kk;
  var Comparator = kotlin_kotlin.$_$.ui;
  var compareValues = kotlin_kotlin.$_$.jb;
  var ArrayDeque_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var asSequence = kotlin_kotlin.$_$.i7;
  var filter = kotlin_kotlin.$_$.bf;
  var map = kotlin_kotlin.$_$.ef;
  var toMutableList = kotlin_kotlin.$_$.if;
  var sortWith = kotlin_kotlin.$_$.na;
  var to = kotlin_kotlin.$_$.rk;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var mapCapacity = kotlin_kotlin.$_$.s9;
  var coerceAtLeast = kotlin_kotlin.$_$.me;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.c1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var getValue = kotlin_kotlin.$_$.y8;
  var emptySet = kotlin_kotlin.$_$.m8;
  var joinToString = kotlin_kotlin.$_$.e9;
  var contains_0 = kotlin_kotlin.$_$.p7;
  var KtMap = kotlin_kotlin.$_$.w6;
  var hashSetOf = kotlin_kotlin.$_$.z8;
  var asSequence_0 = kotlin_kotlin.$_$.j7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var plus = kotlin_kotlin.$_$.ca;
  var setOf = kotlin_kotlin.$_$.ia;
  var plus_0 = kotlin_kotlin.$_$.z9;
  var toSet = kotlin_kotlin.$_$.jf;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.s;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var last = kotlin_kotlin.$_$.k9;
  var isBlank = kotlin_kotlin.$_$.hg;
  var last_0 = kotlin_kotlin.$_$.l9;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var linkedSetOf = kotlin_kotlin.$_$.n9;
  var get_booleanOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.w;
  var plus_1 = kotlin_kotlin.$_$.aa;
  var listOf = kotlin_kotlin.$_$.q9;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.v;
  var endsWith = kotlin_kotlin.$_$.wf;
  var take = kotlin_kotlin.$_$.gf;
  var checkBuilderCapacity = kotlin_kotlin.$_$.l7;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.o1;
  var listOf_0 = kotlin_kotlin.$_$.r9;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c1;
  var emptyList = kotlin_kotlin.$_$.k8;
  var plus_2 = kotlin_kotlin.$_$.da;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a6;
  var checkIndexOverflow = kotlin_kotlin.$_$.n7;
  var checkCountOverflow = kotlin_kotlin.$_$.m7;
  var KtSet = kotlin_kotlin.$_$.d7;
  var withIndex = kotlin_kotlin.$_$.kf;
  var Collection = kotlin_kotlin.$_$.o6;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var toSet_0 = kotlin_kotlin.$_$.fb;
  var mapOf = kotlin_kotlin.$_$.u9;
  var linkedMapOf = kotlin_kotlin.$_$.m9;
  var first = kotlin_kotlin.$_$.t8;
  var isFinite = kotlin_kotlin.$_$.ek;
  var round = kotlin_kotlin.$_$.ie;
  var compareTo = kotlin_kotlin.$_$.pc;
  var toLong_0 = kotlin_kotlin.$_$.de;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var get_lastIndex = kotlin_kotlin.$_$.ng;
  var removePrefix = kotlin_kotlin.$_$.vg;
  var startsWith_0 = kotlin_kotlin.$_$.eh;
  var indexOf = kotlin_kotlin.$_$.fg;
  var codePointAt = kotlin_kotlin_codepoints_parent_kotlin_codepoints.$_$.a;
  var CodePoints_instance = kotlin_kotlin_codepoints_parent_kotlin_codepoints.$_$.c;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  var numberToChar = kotlin_kotlin.$_$.wd;
  var get = kotlin_kotlin.$_$.cg;
  var RegexOption_IGNORE_CASE_getInstance = kotlin_kotlin.$_$.l;
  var Regex_init_$Create$_0 = kotlin_kotlin.$_$.p1;
  var endsWith_0 = kotlin_kotlin.$_$.xf;
  var codePointBefore = kotlin_kotlin_codepoints_parent_kotlin_codepoints.$_$.b;
  var get_bidirectionalClass = kotlin_io_github_optimumcode_karacteristics.$_$.k;
  var CodepointBidirectionalClass_EUROPEAN_NUMBER_getInstance = kotlin_io_github_optimumcode_karacteristics.$_$.a;
  var contains_1 = kotlin_io_github_optimumcode_karacteristics.$_$.n;
  var abs = kotlin_kotlin.$_$.ge;
  var isLowSurrogate = kotlin_kotlin.$_$.kg;
  var isHighSurrogate = kotlin_kotlin.$_$.jg;
  var CodepointDerivedProperty_DISALLOWED_getInstance = kotlin_io_github_optimumcode_karacteristics.$_$.e;
  var contains_2 = kotlin_io_github_optimumcode_karacteristics.$_$.m;
  var CodepointDerivedProperty_UNASSIGNED_getInstance = kotlin_io_github_optimumcode_karacteristics.$_$.f;
  var CodepointDerivedProperty_CONTEXTJ_getInstance = kotlin_io_github_optimumcode_karacteristics.$_$.c;
  var CodepointDerivedProperty_CONTEXTO_getInstance = kotlin_io_github_optimumcode_karacteristics.$_$.d;
  var CodepointBidirectionalClass_NONSPACING_MARK_getInstance = kotlin_io_github_optimumcode_karacteristics.$_$.b;
  var CodepointJoiningType_TRANSPARENT_getInstance = kotlin_io_github_optimumcode_karacteristics.$_$.j;
  var contains_3 = kotlin_io_github_optimumcode_karacteristics.$_$.o;
  var CodepointJoiningType_LEFT_JOINING_getInstance = kotlin_io_github_optimumcode_karacteristics.$_$.h;
  var CodepointJoiningType_DUAL_JOINING_getInstance = kotlin_io_github_optimumcode_karacteristics.$_$.g;
  var CodepointJoiningType_RIGHT_JOINING_getInstance = kotlin_io_github_optimumcode_karacteristics.$_$.i;
  var get_category = kotlin_io_github_optimumcode_karacteristics.$_$.l;
  var setOf_0 = kotlin_kotlin.$_$.ja;
  var encodeToByteArray = kotlin_kotlin.$_$.uf;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c4;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var until = kotlin_kotlin.$_$.re;
  var step = kotlin_kotlin.$_$.qe;
  var regionMatches = kotlin_kotlin.$_$.ug;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.o3;
  var isSurrogate = kotlin_kotlin.$_$.lg;
  var numberToDouble = kotlin_kotlin.$_$.xd;
  var numberToLong = kotlin_kotlin.$_$.zd;
  var substringBefore = kotlin_kotlin.$_$.mh;
  var JsonNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var get_longOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e1;
  var get_doubleOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.y;
  var toLongOrNull = kotlin_kotlin.$_$.xh;
  var toDoubleOrNull = kotlin_kotlin.$_$.rh;
  var Form_NFC_getInstance = kotlin_com_doist_x_normalize.$_$.b;
  var normalize = kotlin_com_doist_x_normalize.$_$.a;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(PointerParent, 'PointerParent');
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonPointer, 'JsonPointer', VOID, VOID, VOID, VOID, VOID, {0: JsonPointerSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(SegmentPointer, 'SegmentPointer', VOID, JsonPointer);
  initMetadataForObject(EmptyPointer, 'EmptyPointer', VOID, JsonPointer);
  initMetadataForObject(JsonPointerSerializer, 'JsonPointerSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(AbsoluteLocation, 'AbsoluteLocation', VOID, VOID, VOID, VOID, VOID, {0: AbsoluteLocationSerializer_getInstance});
  initMetadataForObject(AbsoluteLocationSerializer, 'AbsoluteLocationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_2);
  initMetadataForInterface(Aggregator, 'Aggregator');
  initMetadataForClass(sam$io_github_optimumcode_json_schema_Aggregator$0, 'sam$io_github_optimumcode_json_schema_Aggregator$0', VOID, VOID, [Aggregator, FunctionAdapter]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(AnnotationKey, 'AnnotationKey');
  initMetadataForClass(SimpleAnnotationKey, 'SimpleAnnotationKey', VOID, AnnotationKey);
  initMetadataForClass(AggregatableAnnotationKey, 'AggregatableAnnotationKey', VOID, AnnotationKey);
  initMetadataForCompanion(Companion_4);
  initMetadataForInterface(ErrorCollector, 'ErrorCollector');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(FormatValidationResult, 'FormatValidationResult');
  initMetadataForObject(Valid, 'Valid', VOID, FormatValidationResult);
  initMetadataForObject(Invalid, 'Invalid', VOID, FormatValidationResult);
  initMetadataForClass(FormatBehavior, 'FormatBehavior', VOID, Enum);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(JsonSchema, 'JsonSchema');
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(Provider, 'Provider');
  initMetadataForClass(OutputCollector, 'OutputCollector');
  initMetadataForObject(Empty, 'Empty', VOID, OutputCollector);
  initMetadataForClass(DelegateOutputCollector, 'DelegateOutputCollector', VOID, OutputCollector);
  initMetadataForClass(Flag, 'Flag', Flag, OutputCollector);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(SchemaOption, 'SchemaOption');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(SchemaType, 'SchemaType', VOID, Enum);
  initMetadataForClass(ValidationError, 'ValidationError');
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ValidationOutput, 'ValidationOutput');
  initMetadataForClass(Flag_0, 'Flag', VOID, ValidationOutput, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForObject(AnnotationKeyFactory, 'AnnotationKeyFactory');
  initMetadataForClass(DefaultAnnotationCollector, 'DefaultAnnotationCollector', DefaultAnnotationCollector);
  initMetadataForClass(DefaultAssertionContext, 'DefaultAssertionContext');
  initMetadataForObject(TrueSchemaAssertion, 'TrueSchemaAssertion');
  initMetadataForClass(FalseSchemaAssertion, 'FalseSchemaAssertion');
  initMetadataForClass(JsonSchemaRoot, 'JsonSchemaRoot');
  initMetadataForClass(KeyWord, 'KeyWord', VOID, Enum);
  initMetadataForClass(RecursiveRefSchemaAssertion, 'RecursiveRefSchemaAssertion');
  initMetadataForClass(RefId, 'RefId');
  initMetadataForClass(RefSchemaAssertion, 'RefSchemaAssertion');
  initMetadataForClass(ReferenceHolder, 'ReferenceHolder');
  initMetadataForClass(DefaultReferenceResolverProvider, 'DefaultReferenceResolverProvider');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(DefaultReferenceResolver, 'DefaultReferenceResolver');
  initMetadataForClass(ReferenceLocation, 'ReferenceLocation');
  initMetadataForClass(PointerWithBaseId, 'PointerWithBaseId');
  initMetadataForClass(CircledReference, 'CircledReference');
  initMetadataForClass(ReferenceValidator$checkCircledReferences$$inlined$groupingBy$1);
  initMetadataForObject(ReferenceValidator, 'ReferenceValidator');
  initMetadataForObject(IsolatedLoader, 'IsolatedLoader');
  initMetadataForClass(AssertionWithPath, 'AssertionWithPath');
  initMetadataForClass(LoadingParameters, 'LoadingParameters');
  initMetadataForClass(LoadResult, 'LoadResult');
  initMetadataForClass(DefaultLoadingContext, 'DefaultLoadingContext');
  initMetadataForClass(IdWithLocation, 'IdWithLocation');
  initMetadataForClass(Vocabulary, 'Vocabulary', Vocabulary);
  initMetadataForClass(Options, 'Options');
  initMetadataForClass(RefHolder, 'RefHolder');
  initMetadataForClass(Simple, 'Simple', VOID, RefHolder);
  initMetadataForClass(Recursive, 'Recursive', VOID, RefHolder);
  initMetadataForObject(Draft201909SchemaLoaderConfig, 'Draft201909SchemaLoaderConfig');
  initMetadataForObject(Draft201909KeyWordResolver, 'Draft201909KeyWordResolver');
  initMetadataForObject(Draft201909ReferenceFactory, 'Draft201909ReferenceFactory');
  initMetadataForObject(Draft202012SchemaLoaderConfig, 'Draft202012SchemaLoaderConfig');
  initMetadataForObject(Draft202012KeyWordResolver, 'Draft202012KeyWordResolver');
  initMetadataForObject(Draft202012ReferenceFactory, 'Draft202012ReferenceFactory');
  initMetadataForObject(Draft4SchemaLoaderConfig, 'Draft4SchemaLoaderConfig');
  initMetadataForObject(Draft4KeyWordResolver, 'Draft4KeyWordResolver');
  initMetadataForObject(Draft4ReferenceFactory, 'Draft4ReferenceFactory');
  initMetadataForObject(Draft6SchemaLoaderConfig, 'Draft6SchemaLoaderConfig');
  initMetadataForObject(Draft6KeyWordResolver, 'Draft6KeyWordResolver');
  initMetadataForObject(Draft6ReferenceFactory, 'Draft6ReferenceFactory');
  initMetadataForObject(Draft7SchemaLoaderConfig, 'Draft7SchemaLoaderConfig');
  initMetadataForObject(Draft7KeyWordResolver, 'Draft7KeyWordResolver');
  initMetadataForObject(Draft7ReferenceFactory, 'Draft7ReferenceFactory');
  initMetadataForClass(AbstractAssertionFactory, 'AbstractAssertionFactory');
  initMetadataForClass(AdditionalItemsAssertion, 'AdditionalItemsAssertion');
  initMetadataForObject(AdditionalItemsAssertionFactory, 'AdditionalItemsAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(AllItemsAssertion, 'AllItemsAssertion');
  initMetadataForClass(ArrayLengthAssertion, 'ArrayLengthAssertion');
  initMetadataForObject(ContainsAssertionFactory, 'ContainsAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(ContainsAssertion, 'ContainsAssertion');
  initMetadataForObject(ContainsAssertionFactoryDraft202012, 'ContainsAssertionFactoryDraft202012');
  initMetadataForClass(ContainsAssertionDraft202012, 'ContainsAssertionDraft202012');
  initMetadataForClass(CountContainsAssertion, 'CountContainsAssertion');
  initMetadataForObject(ItemsAssertionFactory, 'ItemsAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(ItemsAssertionFactoryDraft202012, 'ItemsAssertionFactoryDraft202012', VOID, AbstractAssertionFactory);
  initMetadataForObject(MaxContainsAssertionFactory, 'MaxContainsAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(MaxContainsAssertionFactoryDraft202012, 'MaxContainsAssertionFactoryDraft202012', VOID, AbstractAssertionFactory);
  initMetadataForObject(MaxItemsAssertionFactory, 'MaxItemsAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(MinContainsAssertionFactory, 'MinContainsAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(MinContainsAssertionFactoryDraft202012, 'MinContainsAssertionFactoryDraft202012', VOID, AbstractAssertionFactory);
  initMetadataForObject(MinItemsAssertionFactory, 'MinItemsAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(PrefixItemsAssertion, 'PrefixItemsAssertion');
  initMetadataForObject(PrefixItemsAssertionFactory, 'PrefixItemsAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(UnevaluatedItemsAssertion, 'UnevaluatedItemsAssertion');
  initMetadataForObject(UnevaluatedItemsAssertionFactory, 'UnevaluatedItemsAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(UnevaluatedItemsAssertionFactoryDraft202012, 'UnevaluatedItemsAssertionFactoryDraft202012', VOID, AbstractAssertionFactory);
  initMetadataForObject(UniqueItemsAssertionFactory, 'UniqueItemsAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(UniqueItemsAssertion, 'UniqueItemsAssertion');
  initMetadataForClass(AbstractAssertionsCollectionFactory, 'AbstractAssertionsCollectionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(AllOfAssertionFactory, 'AllOfAssertionFactory', VOID, AbstractAssertionsCollectionFactory);
  initMetadataForClass(AllOfAssertion, 'AllOfAssertion');
  initMetadataForObject(AnyOfAssertionFactory, 'AnyOfAssertionFactory', VOID, AbstractAssertionsCollectionFactory);
  initMetadataForClass(AnyOfAssertion, 'AnyOfAssertion');
  initMetadataForObject(ElseAssertionFactory, 'ElseAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(ElseAssertion, 'ElseAssertion');
  initMetadataForObject(IfAssertionFactory, 'IfAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(IfAssertion, 'IfAssertion');
  initMetadataForObject(NotAssertionFactory, 'NotAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(NotAssertion, 'NotAssertion');
  initMetadataForObject(OneOfAssertionFactory, 'OneOfAssertionFactory', VOID, AbstractAssertionsCollectionFactory);
  initMetadataForClass(OneOfAssertion, 'OneOfAssertion');
  initMetadataForObject(ThenAssertionFactory, 'ThenAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(ThenAssertion, 'ThenAssertion');
  initMetadataForObject(ConstAssertionFactory, 'ConstAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(ConstAssertion, 'ConstAssertion');
  initMetadataForObject(EnumAssertionFactory, 'EnumAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(EnumAssertion, 'EnumAssertion');
  initMetadataForClass(FormatAssertionFactory, 'FormatAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(AnnotationOnly, 'AnnotationOnly', VOID, FormatAssertionFactory);
  initMetadataForObject(AnnotationAndAssertion, 'AnnotationAndAssertion', VOID, FormatAssertionFactory);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(FormatAssertion, 'FormatAssertion');
  initMetadataForObject(TypeAssertionFactory, 'TypeAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(Validation, 'Validation');
  initMetadataForClass(TypeAssertion, 'TypeAssertion');
  initMetadataForObject(Draft4MaximumAssertionFactory, 'Draft4MaximumAssertionFactory');
  initMetadataForObject(Draft4MinimumAssertionFactory, 'Draft4MinimumAssertionFactory');
  initMetadataForObject(ExclusiveMaximumAssertionFactory, 'ExclusiveMaximumAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(ExclusiveMinimumAssertionFactory, 'ExclusiveMinimumAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(MaximumAssertionFactory, 'MaximumAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(MinimumAssertionFactory, 'MinimumAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(MultipleOfAssertionFactory, 'MultipleOfAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(NumberComparisonAssertion, 'NumberComparisonAssertion');
  initMetadataForObject(AdditionalPropertiesAssertionFactory, 'AdditionalPropertiesAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(AdditionalPropertiesAssertion, 'AdditionalPropertiesAssertion');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(ConditionalRequiredPropertiesAssertion, 'ConditionalRequiredPropertiesAssertion');
  initMetadataForClass(DependenciesAssertion, 'DependenciesAssertion');
  initMetadataForObject(DependenciesAssertionFactory, 'DependenciesAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(DependentRequiredAssertionFactory, 'DependentRequiredAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(DependentSchemasAssertionFactory, 'DependentSchemasAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(MaxPropertiesAssertionFactory, 'MaxPropertiesAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(MinPropertiesAssertionFactory, 'MinPropertiesAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(PatternPropertiesAssertionFactory, 'PatternPropertiesAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(PatternAssertion, 'PatternAssertion');
  initMetadataForObject(PropertiesAssertionFactory, 'PropertiesAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(PropertiesAssertion, 'PropertiesAssertion');
  initMetadataForClass(PropertiesNumberAssertion, 'PropertiesNumberAssertion');
  initMetadataForObject(PropertyNamesAssertionFactory, 'PropertyNamesAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(PropertyNamesAssertion, 'PropertyNamesAssertion');
  initMetadataForObject(RequiredAssertionFactory, 'RequiredAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(RequiredAssertion, 'RequiredAssertion');
  initMetadataForObject(UnevaluatedPropertiesAssertionFactory, 'UnevaluatedPropertiesAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(UnevaluatedPropertiesAssertion, 'UnevaluatedPropertiesAssertion');
  initMetadataForClass(LengthAssertion, 'LengthAssertion');
  initMetadataForObject(MaxLengthAssertionFactory, 'MaxLengthAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(MinLengthAssertionFactory, 'MinLengthAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForObject(PatternAssertionFactory, 'PatternAssertionFactory', VOID, AbstractAssertionFactory);
  initMetadataForClass(PatternAssertion_0, 'PatternAssertion');
  initMetadataForClass(AbstractStringFormatValidator, 'AbstractStringFormatValidator');
  initMetadataForClass(AbstractEmailFormatValidator, 'AbstractEmailFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(DateFormatValidator, 'DateFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(DateTimeFormatValidator, 'DateTimeFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(DurationFormatValidator, 'DurationFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(EmailFormatValidator, 'EmailFormatValidator', VOID, AbstractEmailFormatValidator);
  initMetadataForObject(HostnameFormatValidator, 'HostnameFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(IdnEmailFormatValidator, 'IdnEmailFormatValidator', VOID, AbstractEmailFormatValidator);
  initMetadataForClass(BidiLabelType, 'BidiLabelType', VOID, Enum);
  initMetadataForObject(IdnHostnameFormatValidator, 'IdnHostnameFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(IpV4FormatValidator, 'IpV4FormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(IpV6FormatValidator, 'IpV6FormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(IriFormatValidator, 'IriFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(IriReferenceFormatValidator, 'IriReferenceFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(IriSpec, 'IriSpec');
  initMetadataForObject(JsonPointerFormatValidator, 'JsonPointerFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(RegexFormatValidator, 'RegexFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(RelativeJsonPointerFormatValidator, 'RelativeJsonPointerFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(TimeFormatValidator, 'TimeFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(UriFormatValidator, 'UriFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(UriReferenceFormatValidator, 'UriReferenceFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(UriSpec, 'UriSpec');
  initMetadataForObject(UriTemplateFormatValidator, 'UriTemplateFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(UuidFormatValidator, 'UuidFormatValidator', VOID, AbstractStringFormatValidator);
  initMetadataForObject(Validation_0, 'Validation');
  initMetadataForObject(Punycode, 'Punycode');
  initMetadataForClass(NumberParts, 'NumberParts');
  initMetadataForClass(Draft201909, 'Draft201909', VOID, Enum);
  initMetadataForClass(Draft202012, 'Draft202012', VOID, Enum);
  initMetadataForInterface(ObjectElement, 'ObjectElement');
  initMetadataForClass(JsonObjectWrapper, 'JsonObjectWrapper', VOID, VOID, [ObjectElement]);
  initMetadataForInterface(ArrayElement, 'ArrayElement');
  initMetadataForClass(JsonArrayWrapper, 'JsonArrayWrapper', VOID, VOID, [ArrayElement]);
  initMetadataForInterface(PrimitiveElement, 'PrimitiveElement');
  initMetadataForClass(JsonPrimitiveWrapper, 'JsonPrimitiveWrapper', VOID, VOID, [PrimitiveElement]);
  initMetadataForClass(StringWrapper, 'StringWrapper', VOID, VOID, [PrimitiveElement]);
  //endregion
  function PointerParent(parent, segment) {
    this.kcm_1 = parent;
    this.lcm_1 = segment;
  }
  function buildPath($this, lastSegment, parent) {
    var depth = lastSegment.qcm_1;
    var curr = lastSegment;
    var parentValue = parent;
    while (!(parentValue == null)) {
      // Inline function 'kotlin.run' call
      var $this$run = parentValue;
      depth = depth + 1 | 0;
      curr = new SegmentPointer($this$run.lcm_1, depth, curr);
      parentValue = parentValue.kcm_1;
    }
    return curr;
  }
  function parseExpression($this, expr) {
    var parent = null;
    var offset = 1;
    var end = expr.length;
    var start = 0;
    $l$loop_0: while (offset < end) {
      var currentChar = charSequenceGet(expr, offset);
      if (currentChar === _Char___init__impl__6a9atx(47)) {
        var tmp = parent;
        var tmp1 = start + 1 | 0;
        // Inline function 'kotlin.text.substring' call
        var endIndex = offset;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = expr.substring(tmp1, endIndex);
        parent = new PointerParent(tmp, tmp$ret$1);
        start = offset;
        offset = offset + 1 | 0;
        continue $l$loop_0;
      }
      offset = offset + 1 | 0;
      if (currentChar === _Char___init__impl__6a9atx(126) && offset < end) {
        var builder = StringBuilder_init_$Create$(32);
        offset = appendEscapedSegment(builder, expr, start + 1 | 0, offset);
        var segment = builder.toString();
        if (offset < 0) {
          return buildPath($this, new SegmentPointer(segment), parent);
        }
        parent = new PointerParent(parent, segment);
        start = offset;
        offset = offset + 1 | 0;
        continue $l$loop_0;
      }
    }
    // Inline function 'kotlin.text.substring' call
    var startIndex = start + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = expr.substring(startIndex);
    return buildPath($this, new SegmentPointer(tmp$ret$3), parent);
  }
  function insertLastDeepCopy($this, pointer, last) {
    // Inline function 'kotlin.with' call
    var additionalDepth = last.qcm_1;
    var tmp;
    var tmp_0 = pointer.rcm_1;
    if (tmp_0 instanceof SegmentPointer) {
      var tmp0_propertyName = pointer.pcm_1;
      var tmp1_depth = pointer.qcm_1 + additionalDepth | 0;
      var tmp2_index = pointer.scm_1;
      var tmp3_next = insertLastDeepCopy($this, pointer.rcm_1, last);
      tmp = new SegmentPointer(tmp0_propertyName, tmp1_depth, tmp3_next, tmp2_index);
    } else {
      var tmp4_propertyName = pointer.pcm_1;
      var tmp5_depth = pointer.qcm_1 + additionalDepth | 0;
      var tmp6_index = pointer.scm_1;
      tmp = new SegmentPointer(tmp4_propertyName, tmp5_depth, last, tmp6_index);
    }
    return tmp;
  }
  function escapeJsonPointer($this, propertyName) {
    if (contains(propertyName, _Char___init__impl__6a9atx(47)) || contains(propertyName, _Char___init__impl__6a9atx(126))) {
      // Inline function 'kotlin.text.buildString' call
      var capacity = propertyName.length + 1 | 0;
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$(capacity);
      var inductionVariable = 0;
      var last = propertyName.length;
      while (inductionVariable < last) {
        var ch = charSequenceGet(propertyName, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (ch === _Char___init__impl__6a9atx(47))
          this_0.z8(_Char___init__impl__6a9atx(126)).z8(_Char___init__impl__6a9atx(49));
        else if (ch === _Char___init__impl__6a9atx(126))
          this_0.z8(_Char___init__impl__6a9atx(126)).z8(_Char___init__impl__6a9atx(48));
        else
          this_0.z8(ch);
      }
      return this_0.toString();
    }
    return propertyName;
  }
  function Companion() {
    Companion_instance = this;
    this.tcm_1 = 20;
    this.ucm_1 = _Char___init__impl__6a9atx(47);
    this.vcm_1 = _Char___init__impl__6a9atx(126);
    this.wcm_1 = _Char___init__impl__6a9atx(48);
    this.xcm_1 = _Char___init__impl__6a9atx(49);
    this.ycm_1 = EmptyPointer_getInstance();
    this.zcm_1 = 32;
  }
  protoOf(Companion).acn = function (expr) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(expr) === 0) {
      tmp = EmptyPointer_getInstance();
    } else {
      // Inline function 'kotlin.require' call
      if (!startsWith(expr, _Char___init__impl__6a9atx(47))) {
        var message = "JSON pointer must start from /: '" + expr + "'";
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = parseExpression(this, expr);
    }
    return tmp;
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function JsonPointer(next) {
    Companion_getInstance_0();
    next = next === VOID ? null : next;
    this.bcn_1 = next;
    this.ccn_1 = null;
    this.dcn_1 = 0;
  }
  protoOf(JsonPointer).ecn = function () {
    return this.bcn_1;
  };
  protoOf(JsonPointer).fcn = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'negative index: ' + index;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.gcn(new SegmentPointer(index.toString(), 1, VOID, index));
  };
  protoOf(JsonPointer).hcn = function (property) {
    return this.gcn(new SegmentPointer(property, 1));
  };
  protoOf(JsonPointer).toString = function () {
    var str = this.ccn_1;
    if (!(str == null)) {
      return str;
    }
    if (!(this instanceof SegmentPointer)) {
      return '';
    }
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var node = this;
    $l$loop: while (node instanceof SegmentPointer) {
      this_0.z8(_Char___init__impl__6a9atx(47));
      this_0.y8(escapeJsonPointer(this, node.pcm_1));
      node = node.rcm_1;
    }
    // Inline function 'kotlin.also' call
    var this_1 = this_0.toString();
    this.ccn_1 = this_1;
    return this_1;
  };
  protoOf(JsonPointer).gcn = function (last) {
    if (!(this instanceof SegmentPointer)) {
      return last;
    }
    if (this.qcm_1 < 20) {
      return insertLastDeepCopy(this, this, last);
    }
    var queue = ArrayDeque_init_$Create$(this.qcm_1);
    var cur = this;
    $l$loop: while (cur instanceof SegmentPointer) {
      queue.n(cur);
      cur = cur.rcm_1;
    }
    var additionalDepth = last.qcm_1;
    var result = last;
    $l$loop_0: while (true) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!!queue.h()) {
        break $l$loop_0;
      }
      var segment = queue.lh();
      var tmp0_propertyName = segment.pcm_1;
      var tmp1_depth = segment.qcm_1 + additionalDepth | 0;
      var tmp2_index = segment.scm_1;
      var tmp3_next = result;
      result = new SegmentPointer(tmp0_propertyName, tmp1_depth, tmp3_next, tmp2_index);
    }
    return result;
  };
  protoOf(JsonPointer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonPointer))
      THROW_CCE();
    var node = this;
    var otherNode = other;
    $l$loop: while (true) {
      var tmp;
      if (node instanceof SegmentPointer) {
        tmp = otherNode instanceof SegmentPointer;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      if (!(node.pcm_1 === otherNode.pcm_1)) {
        return false;
      }
      node = node.rcm_1;
      otherNode = otherNode.rcm_1;
    }
    var tmp_0;
    if (node instanceof EmptyPointer) {
      tmp_0 = otherNode instanceof EmptyPointer;
    } else {
      tmp_0 = false;
    }
    return tmp_0;
  };
  protoOf(JsonPointer).hashCode = function () {
    if (!(this.dcn_1 === 0)) {
      return this.dcn_1;
    }
    var result = 31;
    var node = this;
    $l$loop: while (node instanceof SegmentPointer) {
      result = imul(31, result) + getStringHashCode(node.pcm_1) | 0;
      node = node.rcm_1;
    }
    if (result === 0) {
      result = 31;
    }
    this.dcn_1 = result;
    return result;
  };
  function parseIndex($this, segment) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(segment) === 0) {
      return -1;
    }
    var len = segment.length;
    if (len > 10) {
      return -1;
    }
    return parseIndexValue($this, segment);
  }
  function parseIndexValue($this, segment) {
    var len = segment.length;
    var ch = charSequenceGet(segment, 0);
    if (Char__compareTo_impl_ypi4mb(ch, _Char___init__impl__6a9atx(48)) <= 0) {
      var tmp;
      if (len === 1 && ch === _Char___init__impl__6a9atx(48)) {
        tmp = 0;
      } else {
        tmp = -1;
      }
      return tmp;
    }
    if (Char__compareTo_impl_ypi4mb(ch, _Char___init__impl__6a9atx(57)) > 0) {
      return -1;
    }
    var inductionVariable = 0;
    var last = segment.length;
    while (inductionVariable < last) {
      var char = charSequenceGet(segment, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (!(_Char___init__impl__6a9atx(48) <= char ? char <= _Char___init__impl__6a9atx(57) : false)) {
        return -1;
      }
    }
    var tmp_0;
    if (len === 10) {
      var index = toLong(segment);
      var tmp_1;
      if (index.g1(new Long(2147483647, 0)) > 0) {
        tmp_1 = -1;
      } else {
        tmp_1 = index.l1();
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = toInt(segment);
    }
    return tmp_0;
  }
  function Companion_0() {
    this.icn_1 = -1;
    this.jcn_1 = 10;
  }
  var Companion_instance_0;
  function Companion_getInstance_1() {
    return Companion_instance_0;
  }
  function SegmentPointer(propertyName, depth, next, index) {
    depth = depth === VOID ? 1 : depth;
    next = next === VOID ? EmptyPointer_getInstance() : next;
    index = index === VOID ? parseIndex(Companion_instance_0, propertyName) : index;
    JsonPointer.call(this, next);
    this.pcm_1 = propertyName;
    this.qcm_1 = depth;
    this.rcm_1 = next;
    this.scm_1 = index;
  }
  protoOf(SegmentPointer).ecn = function () {
    return this.rcm_1;
  };
  function EmptyPointer() {
    EmptyPointer_instance = this;
    JsonPointer.call(this);
  }
  var EmptyPointer_instance;
  function EmptyPointer_getInstance() {
    if (EmptyPointer_instance == null)
      new EmptyPointer();
    return EmptyPointer_instance;
  }
  function appendEscapedSegment(_this__u8e3s4, expr, start, offset) {
    var pos = offset;
    var end = expr.length;
    var needCopy = ((pos - 1 | 0) - start | 0) > 0;
    if (needCopy) {
      _this__u8e3s4.xd(expr, start, pos - 1 | 0);
    }
    appendEscaped(_this__u8e3s4, charSequenceGet(expr, pos));
    pos = pos + 1 | 0;
    $l$loop: while (pos < end) {
      var currentChar = charSequenceGet(expr, pos);
      if (currentChar === _Char___init__impl__6a9atx(47)) {
        return pos;
      }
      pos = pos + 1 | 0;
      if (currentChar === _Char___init__impl__6a9atx(126) && pos < end) {
        appendEscaped(_this__u8e3s4, charSequenceGet(expr, pos));
        pos = pos + 1 | 0;
        continue $l$loop;
      }
      _this__u8e3s4.z8(currentChar);
    }
    return -1;
  }
  function appendEscaped(_this__u8e3s4, ch) {
    var tmp;
    if (ch === _Char___init__impl__6a9atx(48)) {
      tmp = _Char___init__impl__6a9atx(126);
    } else if (ch === _Char___init__impl__6a9atx(49)) {
      tmp = _Char___init__impl__6a9atx(47);
    } else {
      _this__u8e3s4.z8(_Char___init__impl__6a9atx(126));
      tmp = ch;
    }
    var result = tmp;
    _this__u8e3s4.z8(result);
  }
  function JsonPointer_0(path) {
    return Companion_getInstance_0().acn(path);
  }
  function JsonPointerSerializer() {
    JsonPointerSerializer_instance = this;
    this.kcn_1 = PrimitiveSerialDescriptor('io.github.optimumcode.json.pointer.JsonPointer', STRING_getInstance());
  }
  protoOf(JsonPointerSerializer).u20 = function () {
    return this.kcn_1;
  };
  protoOf(JsonPointerSerializer).w20 = function (decoder) {
    return JsonPointer_0(decoder.c24());
  };
  protoOf(JsonPointerSerializer).lcn = function (encoder, value) {
    encoder.l25(value.toString());
  };
  protoOf(JsonPointerSerializer).v20 = function (encoder, value) {
    return this.lcn(encoder, value instanceof JsonPointer ? value : THROW_CCE());
  };
  var JsonPointerSerializer_instance;
  function JsonPointerSerializer_getInstance() {
    if (JsonPointerSerializer_instance == null)
      new JsonPointerSerializer();
    return JsonPointerSerializer_instance;
  }
  function plus_3(_this__u8e3s4, otherPointer) {
    if (_this__u8e3s4 instanceof EmptyPointer) {
      return otherPointer;
    }
    if (otherPointer instanceof EmptyPointer) {
      return _this__u8e3s4;
    }
    return _this__u8e3s4.gcn(otherPointer instanceof SegmentPointer ? otherPointer : THROW_CCE());
  }
  function relative(_this__u8e3s4, other) {
    if (!(_this__u8e3s4 instanceof SegmentPointer)) {
      return other;
    }
    // Inline function 'kotlin.require' call
    if (!(other instanceof SegmentPointer)) {
      var message = 'empty pointer is not relative to any';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var currentValue = _this__u8e3s4;
    var otherValue = other;
    $l$loop: while (true) {
      var tmp;
      if (currentValue instanceof SegmentPointer) {
        tmp = otherValue instanceof SegmentPointer;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      if (!(currentValue.pcm_1 === otherValue.pcm_1)) {
        return other;
      }
      currentValue = currentValue.rcm_1;
      otherValue = otherValue.rcm_1;
    }
    var tmp_0;
    if (currentValue instanceof EmptyPointer) {
      tmp_0 = otherValue;
    } else {
      tmp_0 = other;
    }
    return tmp_0;
  }
  function get_0(_this__u8e3s4, index) {
    return _this__u8e3s4.fcn(index);
  }
  function div(_this__u8e3s4, property) {
    return _this__u8e3s4.hcn(property);
  }
  function startsWith_1(_this__u8e3s4, other) {
    var primary = _this__u8e3s4;
    var secondary = other;
    while (!(primary == null) && !(secondary == null)) {
      if (secondary instanceof EmptyPointer) {
        return true;
      }
      if (primary instanceof EmptyPointer) {
        return false;
      }
      if (!(primary instanceof SegmentPointer))
        THROW_CCE();
      if (!(secondary instanceof SegmentPointer))
        THROW_CCE();
      if (!(primary.pcm_1 === secondary.pcm_1)) {
        return false;
      }
      primary = primary.rcm_1;
      secondary = secondary.rcm_1;
    }
    return secondary == null;
  }
  function get_length(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof EmptyPointer) {
      return 0;
    }
    var length = 0;
    var segment = _this__u8e3s4;
    while (!(segment == null)) {
      if (segment instanceof SegmentPointer) {
        length = length + 1 | 0;
      }
      segment = segment.ecn();
    }
    return length;
  }
  function dropLast(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof EmptyPointer) {
      return null;
    }
    var fullPath = _this__u8e3s4.toString();
    var lastPathPart = lastIndexOf(fullPath, _Char___init__impl__6a9atx(47));
    if (lastPathPart === 0) {
      return EmptyPointer_getInstance();
    }
    var tmp = Companion_getInstance_0();
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = fullPath.substring(0, lastPathPart);
    return tmp.acn(tmp$ret$1);
  }
  function lastSegment(_this__u8e3s4) {
    var cur = _this__u8e3s4;
    while (!equals(cur, EmptyPointer_getInstance())) {
      var tmp;
      if (cur instanceof SegmentPointer) {
        var tmp_0 = cur.rcm_1;
        tmp = tmp_0 instanceof EmptyPointer;
      } else {
        tmp = false;
      }
      if (tmp) {
        return cur.pcm_1;
      }
      var tmp0_safe_receiver = cur;
      cur = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ecn();
    }
    return null;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_2() {
    return Companion_instance_1;
  }
  function AbsoluteLocation(uri, path) {
    this.mcn_1 = uri;
    this.ncn_1 = path;
  }
  protoOf(AbsoluteLocation).toString = function () {
    return 'AbsoluteLocation(uri=' + toString(this.mcn_1) + ', path=' + this.ncn_1.toString() + ')';
  };
  protoOf(AbsoluteLocation).hashCode = function () {
    var result = hashCode(this.mcn_1);
    result = imul(result, 31) + this.ncn_1.hashCode() | 0;
    return result;
  };
  protoOf(AbsoluteLocation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AbsoluteLocation))
      return false;
    var tmp0_other_with_cast = other instanceof AbsoluteLocation ? other : THROW_CCE();
    if (!equals(this.mcn_1, tmp0_other_with_cast.mcn_1))
      return false;
    if (!this.ncn_1.equals(tmp0_other_with_cast.ncn_1))
      return false;
    return true;
  };
  function AbsoluteLocationSerializer() {
    AbsoluteLocationSerializer_instance = this;
    this.ocn_1 = PrimitiveSerialDescriptor('com.optimumcode.json.schema.AbsoluteLocation', STRING_getInstance());
  }
  protoOf(AbsoluteLocationSerializer).u20 = function () {
    return this.ocn_1;
  };
  protoOf(AbsoluteLocationSerializer).w20 = function (decoder) {
    var uri = Companion_getInstance().aq(decoder.c24());
    var fragment = uri.v36();
    var tmp = uri.rcf().fcf(null).x2x();
    var tmp_0;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    if (fragment == null || charSequenceLength(fragment) === 0) {
      tmp_0 = Companion_getInstance_0().ycm_1;
    } else {
      tmp_0 = JsonPointer_0(fragment);
    }
    return new AbsoluteLocation(tmp, tmp_0);
  };
  protoOf(AbsoluteLocationSerializer).pcn = function (encoder, value) {
    var result = toString(value.mcn_1.rcf().fcf(value.ncn_1.toString()).x2x());
    var tmp;
    if (value.ncn_1.equals(Companion_getInstance_0().ycm_1)) {
      tmp = result + '#';
    } else {
      tmp = result;
    }
    encoder.l25(tmp);
  };
  protoOf(AbsoluteLocationSerializer).v20 = function (encoder, value) {
    return this.pcn(encoder, value instanceof AbsoluteLocation ? value : THROW_CCE());
  };
  var AbsoluteLocationSerializer_instance;
  function AbsoluteLocationSerializer_getInstance() {
    if (AbsoluteLocationSerializer_instance == null)
      new AbsoluteLocationSerializer();
    return AbsoluteLocationSerializer_instance;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).qcn = function (name, type) {
    return new SimpleAnnotationKey(name, type);
  };
  var Companion_instance_2;
  function Companion_getInstance_3() {
    return Companion_instance_2;
  }
  function sam$io_github_optimumcode_json_schema_Aggregator$0(function_0) {
    this.rcn_1 = function_0;
  }
  protoOf(sam$io_github_optimumcode_json_schema_Aggregator$0).scn = function (a, b) {
    return this.rcn_1(a, b);
  };
  protoOf(sam$io_github_optimumcode_json_schema_Aggregator$0).u3 = function () {
    return this.rcn_1;
  };
  protoOf(sam$io_github_optimumcode_json_schema_Aggregator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Aggregator) : false) {
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
  protoOf(sam$io_github_optimumcode_json_schema_Aggregator$0).hashCode = function () {
    return hashCode(this.u3());
  };
  function Companion_3() {
  }
  protoOf(Companion_3).tcn = function (name, type, aggregator) {
    return new AggregatableAnnotationKey(name, type, new sam$io_github_optimumcode_json_schema_Aggregator$0(aggregator));
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    return Companion_instance_3;
  }
  function SimpleAnnotationKey(name, type) {
    AnnotationKey.call(this, name, type);
  }
  function AggregatableAnnotationKey(name, type, aggregator) {
    AnnotationKey.call(this, name, type);
    this.wcn_1 = aggregator;
  }
  function Companion_4() {
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    return Companion_instance_4;
  }
  function AnnotationKey(name, type) {
    this.xcn_1 = name;
    this.ycn_1 = type;
  }
  protoOf(AnnotationKey).equals = function (other) {
    return this === other;
  };
  protoOf(AnnotationKey).hashCode = function () {
    var result = getStringHashCode(this.xcn_1);
    result = imul(31, result) + this.ycn_1.hashCode() | 0;
    return result;
  };
  protoOf(AnnotationKey).toString = function () {
    return '' + getKClassFromExpression(this).hc() + '(' + this.xcn_1 + '(' + this.ycn_1.hc() + '))';
  };
  function Aggregator() {
  }
  function ErrorCollector() {
  }
  function Companion_5() {
  }
  protoOf(Companion_5).aco = function () {
    return Valid_getInstance();
  };
  protoOf(Companion_5).bco = function () {
    return Invalid_getInstance();
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function Valid() {
    Valid_instance = this;
    FormatValidationResult.call(this, true);
  }
  protoOf(Valid).toString = function () {
    return 'Valid';
  };
  protoOf(Valid).hashCode = function () {
    return -476085833;
  };
  protoOf(Valid).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Valid))
      return false;
    other instanceof Valid || THROW_CCE();
    return true;
  };
  var Valid_instance;
  function Valid_getInstance() {
    if (Valid_instance == null)
      new Valid();
    return Valid_instance;
  }
  function Invalid() {
    Invalid_instance = this;
    FormatValidationResult.call(this, false);
  }
  protoOf(Invalid).toString = function () {
    return 'Invalid';
  };
  protoOf(Invalid).hashCode = function () {
    return -523411214;
  };
  protoOf(Invalid).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Invalid))
      return false;
    other instanceof Invalid || THROW_CCE();
    return true;
  };
  var Invalid_instance;
  function Invalid_getInstance() {
    if (Invalid_instance == null)
      new Invalid();
    return Invalid_instance;
  }
  function FormatValidationResult(valid) {
    this.cco_1 = valid;
  }
  protoOf(FormatValidationResult).dco = function () {
    return this.cco_1;
  };
  var FormatBehavior_ANNOTATION_ONLY_instance;
  var FormatBehavior_ANNOTATION_AND_ASSERTION_instance;
  var FormatBehavior_entriesInitialized;
  function FormatBehavior_initEntries() {
    if (FormatBehavior_entriesInitialized)
      return Unit_instance;
    FormatBehavior_entriesInitialized = true;
    FormatBehavior_ANNOTATION_ONLY_instance = new FormatBehavior('ANNOTATION_ONLY', 0);
    FormatBehavior_ANNOTATION_AND_ASSERTION_instance = new FormatBehavior('ANNOTATION_AND_ASSERTION', 1);
  }
  function FormatBehavior(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FormatBehavior_ANNOTATION_ONLY_getInstance() {
    FormatBehavior_initEntries();
    return FormatBehavior_ANNOTATION_ONLY_instance;
  }
  function FormatBehavior_ANNOTATION_AND_ASSERTION_getInstance() {
    FormatBehavior_initEntries();
    return FormatBehavior_ANNOTATION_AND_ASSERTION_instance;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).eco = function (schema, defaultType) {
    return IsolatedLoader_instance.eco(schema, defaultType);
  };
  protoOf(Companion_6).fco = function (schema, defaultType, $super) {
    defaultType = defaultType === VOID ? null : defaultType;
    return $super === VOID ? this.eco(schema, defaultType) : $super.eco.call(this, schema, defaultType);
  };
  protoOf(Companion_6).gco = function (schemaElement, defaultType) {
    return IsolatedLoader_instance.gco(schemaElement, defaultType);
  };
  protoOf(Companion_6).hco = function (schemaElement, defaultType, $super) {
    defaultType = defaultType === VOID ? null : defaultType;
    return $super === VOID ? this.gco(schemaElement, defaultType) : $super.gco.call(this, schemaElement, defaultType);
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    return Companion_instance_6;
  }
  function JsonSchema(assertion, referenceResolverProvider) {
    this.ico_1 = assertion;
    this.jco_1 = referenceResolverProvider;
  }
  protoOf(JsonSchema).kco = function (value, errorCollector) {
    return this.lco(wrap(value), errorCollector);
  };
  protoOf(JsonSchema).mco = function (value, outputCollectorProvider) {
    return this.nco(wrap(value), outputCollectorProvider);
  };
  protoOf(JsonSchema).lco = function (value, errorCollector) {
    var context = new DefaultAssertionContext(Companion_getInstance_0().ycm_1, this.jco_1.pco());
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = new DelegateOutputCollector(errorCollector);
    var tmp;
    try {
      tmp = this.ico_1.qco(value, context, this_0);
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  protoOf(JsonSchema).nco = function (value, outputCollectorProvider) {
    var context = new DefaultAssertionContext(Companion_getInstance_0().ycm_1, this.jco_1.pco());
    var collector = outputCollectorProvider.uco();
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var tmp;
    try {
      tmp = this.ico_1.qco(value, context, collector);
    }finally {
      collector.sco();
    }
    return collector.vco();
  };
  function get_NO_TRANSFORMATION() {
    _init_properties_OutputCollector_kt__kl0mna();
    return NO_TRANSFORMATION;
  }
  var NO_TRANSFORMATION;
  function flag$lambda() {
    return new Flag();
  }
  function OutputCollector$Companion$flag$_init_$ref_d446uh() {
    return function () {
      return flag$lambda();
    };
  }
  function _get_reportedErrors__k5mg5v($this) {
    var tmp = $this.zco_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('reportedErrors');
    }
  }
  function addError($this, error) {
    if (!!($this.zco_1 == null)) {
      $this.zco_1 = ArrayList_init_$Create$(1);
    }
    _get_reportedErrors__k5mg5v($this).n(error);
  }
  function addErrors($this, errors) {
    if (!($this.zco_1 == null)) {
      _get_reportedErrors__k5mg5v($this).t(errors);
    } else {
      $this.zco_1 = errors;
    }
  }
  function Companion_7() {
  }
  protoOf(Companion_7).acp = function () {
    return new Provider(OutputCollector$Companion$flag$_init_$ref_d446uh());
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function Provider(supplier) {
    this.tco_1 = supplier;
  }
  protoOf(Provider).uco = function () {
    return this.tco_1();
  };
  function Empty() {
    Empty_instance = this;
    OutputCollector.call(this);
  }
  protoOf(Empty).vco = function () {
    throw UnsupportedOperationException_init_$Create$('no output in empty collector');
  };
  protoOf(Empty).ccp = function () {
    return true;
  };
  protoOf(Empty).dcp = function (path) {
    return this;
  };
  protoOf(Empty).ecp = function (path, absoluteLocation, canCollapse) {
    return this;
  };
  protoOf(Empty).gcp = function (transformer) {
    return this;
  };
  protoOf(Empty).hcp = function (transformer) {
    return this.gcp(transformer);
  };
  protoOf(Empty).icp = function () {
    return this;
  };
  protoOf(Empty).jcp = function (error) {
    return Unit_instance;
  };
  protoOf(Empty).toString = function () {
    return 'Empty';
  };
  protoOf(Empty).hashCode = function () {
    return 78932431;
  };
  protoOf(Empty).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Empty))
      return false;
    other instanceof Empty || THROW_CCE();
    return true;
  };
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function DelegateOutputCollector(errorCollector, parent, transformer) {
    parent = parent === VOID ? null : parent;
    transformer = transformer === VOID ? get_NO_TRANSFORMATION() : transformer;
    OutputCollector.call(this, parent, transformer);
    this.xco_1 = errorCollector;
    this.yco_1 = parent;
  }
  protoOf(DelegateOutputCollector).jcp = function (error) {
    addError(this, this.kcp(error));
  };
  protoOf(DelegateOutputCollector).vco = function () {
    throw UnsupportedOperationException_init_$Create$('no output in delegate collector');
  };
  protoOf(DelegateOutputCollector).dcp = function (path) {
    return new DelegateOutputCollector(this.xco_1, this);
  };
  protoOf(DelegateOutputCollector).ecp = function (path, absoluteLocation, canCollapse) {
    return new DelegateOutputCollector(this.xco_1, this);
  };
  protoOf(DelegateOutputCollector).gcp = function (transformer) {
    return new DelegateOutputCollector(this.xco_1, this.yco_1, transformer);
  };
  protoOf(DelegateOutputCollector).hcp = function (transformer) {
    return this.gcp(transformer);
  };
  protoOf(DelegateOutputCollector).sco = function () {
    if (!!(this.zco_1 == null)) {
      return Unit_instance;
    }
    var tmp0_safe_receiver = this.yco_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.also' call
      addErrors(tmp0_safe_receiver, _get_reportedErrors__k5mg5v(this));
      tmp = tmp0_safe_receiver;
    }
    if (tmp == null) {
      var tmp2 = _get_reportedErrors__k5mg5v(this);
      var tmp3_forEach_$receiver = this.xco_1;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = tmp2.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        tmp3_forEach_$receiver.zcn(element);
      }
    }
  };
  protoOf(DelegateOutputCollector).icp = function () {
    return new DelegateOutputCollector(this.xco_1, this);
  };
  function Flag(parent, transformer) {
    parent = parent === VOID ? null : parent;
    transformer = transformer === VOID ? get_NO_TRANSFORMATION() : transformer;
    OutputCollector.call(this, parent, transformer);
    this.mcp_1 = parent;
    this.ncp_1 = true;
    this.ocp_1 = false;
  }
  protoOf(Flag).ccp = function () {
    return true;
  };
  protoOf(Flag).vco = function () {
    var tmp;
    if (this.ncp_1) {
      tmp = Companion_getInstance_11().pcp_1;
    } else {
      tmp = Companion_getInstance_11().qcp_1;
    }
    return tmp;
  };
  protoOf(Flag).ecp = function (path, absoluteLocation, canCollapse) {
    return this.icp();
  };
  protoOf(Flag).dcp = function (path) {
    return this.icp();
  };
  protoOf(Flag).rcp = function (transformer) {
    return new Flag(this.mcp_1, transformer);
  };
  protoOf(Flag).hcp = function (transformer) {
    return this.rcp(transformer);
  };
  protoOf(Flag).sco = function () {
    this.ncp_1 = (this.ncp_1 && !this.ocp_1);
    var tmp0_safe_receiver = this.mcp_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      tmp0_safe_receiver.ncp_1 = (tmp0_safe_receiver.ncp_1 && this.ncp_1);
    }
  };
  protoOf(Flag).jcp = function (error) {
    if (this.ocp_1) {
      return Unit_instance;
    }
    this.ocp_1 = true;
  };
  protoOf(Flag).icp = function () {
    return this.ncp_1 ? new Flag(this) : this;
  };
  function OutputCollector$transformerFunc$lambda($p, $transformer) {
    return function ($this$let, err) {
      return $p.kcp($transformer($this$let, err));
    };
  }
  function OutputCollector(parent, transformer) {
    parent = parent === VOID ? null : parent;
    transformer = transformer === VOID ? get_NO_TRANSFORMATION() : transformer;
    var tmp = this;
    var tmp_0;
    if (parent == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_1;
      if (transformer === get_NO_TRANSFORMATION() && parent.rco_1 === get_NO_TRANSFORMATION()) {
        tmp_1 = get_NO_TRANSFORMATION();
      } else if (transformer === get_NO_TRANSFORMATION()) {
        tmp_1 = parent.rco_1;
      } else if (parent.rco_1 === get_NO_TRANSFORMATION()) {
        tmp_1 = transformer;
      } else {
        tmp_1 = OutputCollector$transformerFunc$lambda(parent, transformer);
      }
      tmp_0 = tmp_1;
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.rco_1 = tmp1_elvis_lhs == null ? transformer : tmp1_elvis_lhs;
  }
  protoOf(OutputCollector).fcp = function (path, absoluteLocation, canCollapse, $super) {
    absoluteLocation = absoluteLocation === VOID ? null : absoluteLocation;
    canCollapse = canCollapse === VOID ? true : canCollapse;
    return $super === VOID ? this.ecp(path, absoluteLocation, canCollapse) : $super.ecp.call(this, path, absoluteLocation, canCollapse);
  };
  protoOf(OutputCollector).sco = function () {
    return Unit_instance;
  };
  protoOf(OutputCollector).ccp = function () {
    return false;
  };
  protoOf(OutputCollector).kcp = function (error) {
    var tmp;
    if (this.rco_1 === get_NO_TRANSFORMATION()) {
      tmp = error;
    } else {
      tmp = this.rco_1(this, error);
    }
    return tmp;
  };
  function NO_TRANSFORMATION$lambda(_this__u8e3s4, it) {
    _init_properties_OutputCollector_kt__kl0mna();
    return it;
  }
  var properties_initialized_OutputCollector_kt_6g34w4;
  function _init_properties_OutputCollector_kt__kl0mna() {
    if (!properties_initialized_OutputCollector_kt_6g34w4) {
      properties_initialized_OutputCollector_kt_6g34w4 = true;
      NO_TRANSFORMATION = NO_TRANSFORMATION$lambda;
    }
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.scp_1 = new SchemaOption(getKClass(FormatBehavior));
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function SchemaOption(type) {
    Companion_getInstance_9();
    this.tcp_1 = type;
  }
  var SchemaType_DRAFT_4_instance;
  var SchemaType_DRAFT_6_instance;
  var SchemaType_DRAFT_7_instance;
  var SchemaType_DRAFT_2019_09_instance;
  var SchemaType_DRAFT_2020_12_instance;
  function Companion_9() {
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    return Companion_instance_9;
  }
  function values() {
    return [SchemaType_DRAFT_4_getInstance(), SchemaType_DRAFT_6_getInstance(), SchemaType_DRAFT_7_getInstance(), SchemaType_DRAFT_2019_09_getInstance(), SchemaType_DRAFT_2020_12_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var SchemaType_entriesInitialized;
  function SchemaType_initEntries() {
    if (SchemaType_entriesInitialized)
      return Unit_instance;
    SchemaType_entriesInitialized = true;
    SchemaType_DRAFT_4_instance = new SchemaType('DRAFT_4', 0, Companion_getInstance().aq('http://json-schema.org/draft-04/schema'), Draft4SchemaLoaderConfig_getInstance());
    SchemaType_DRAFT_6_instance = new SchemaType('DRAFT_6', 1, Companion_getInstance().aq('http://json-schema.org/draft-06/schema'), Draft6SchemaLoaderConfig_getInstance());
    SchemaType_DRAFT_7_instance = new SchemaType('DRAFT_7', 2, Companion_getInstance().aq('http://json-schema.org/draft-07/schema'), Draft7SchemaLoaderConfig_getInstance());
    SchemaType_DRAFT_2019_09_instance = new SchemaType('DRAFT_2019_09', 3, Companion_getInstance().aq('https://json-schema.org/draft/2019-09/schema'), Draft201909SchemaLoaderConfig_getInstance());
    SchemaType_DRAFT_2020_12_instance = new SchemaType('DRAFT_2020_12', 4, Companion_getInstance().aq('https://json-schema.org/draft/2020-12/schema'), Draft202012SchemaLoaderConfig_getInstance());
  }
  var $ENTRIES;
  function SchemaType(name, ordinal, schemaId, config) {
    Enum.call(this, name, ordinal);
    this.wcp_1 = schemaId;
    this.xcp_1 = config;
  }
  function findSchemaType(uri) {
    // Inline function 'kotlin.let' call
    var it = uri.mcf();
    if (!(it === 'http') && !(it === 'https')) {
      return null;
    }
    // Inline function 'kotlin.collections.find' call
    var tmp0 = get_entries();
    var tmp$ret$8;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.run' call
        var $this$run = element.wcp_1;
        var tmp;
        if ($this$run.ocf() == uri.ocf() && $this$run.a37() === uri.a37() && $this$run.pcf() == uri.pcf()) {
          var tmp_0 = $this$run.v36();
          var tmp0_safe_receiver = uri.v36();
          var tmp_1;
          if (tmp0_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.takeUnless' call
            var tmp_2;
            // Inline function 'kotlin.text.isEmpty' call
            if (!(charSequenceLength(tmp0_safe_receiver) === 0)) {
              tmp_2 = tmp0_safe_receiver;
            } else {
              tmp_2 = null;
            }
            tmp_1 = tmp_2;
          }
          tmp = tmp_0 == tmp_1;
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$8 = element;
          break $l$block;
        }
      }
      tmp$ret$8 = null;
    }
    return tmp$ret$8;
  }
  function SchemaType_DRAFT_4_getInstance() {
    SchemaType_initEntries();
    return SchemaType_DRAFT_4_instance;
  }
  function SchemaType_DRAFT_6_getInstance() {
    SchemaType_initEntries();
    return SchemaType_DRAFT_6_instance;
  }
  function SchemaType_DRAFT_7_getInstance() {
    SchemaType_initEntries();
    return SchemaType_DRAFT_7_instance;
  }
  function SchemaType_DRAFT_2019_09_getInstance() {
    SchemaType_initEntries();
    return SchemaType_DRAFT_2019_09_instance;
  }
  function SchemaType_DRAFT_2020_12_getInstance() {
    SchemaType_initEntries();
    return SchemaType_DRAFT_2020_12_instance;
  }
  function ValidationError(schemaPath, objectPath, message, details, absoluteLocation) {
    details = details === VOID ? emptyMap() : details;
    absoluteLocation = absoluteLocation === VOID ? null : absoluteLocation;
    this.ycp_1 = schemaPath;
    this.zcp_1 = objectPath;
    this.acq_1 = message;
    this.bcq_1 = details;
    this.ccq_1 = absoluteLocation;
  }
  protoOf(ValidationError).dcq = function (schemaPath, objectPath, message, details, absoluteLocation) {
    return new ValidationError(schemaPath, objectPath, message, details, absoluteLocation);
  };
  protoOf(ValidationError).ecq = function (schemaPath, objectPath, message, details, absoluteLocation, $super) {
    schemaPath = schemaPath === VOID ? this.ycp_1 : schemaPath;
    objectPath = objectPath === VOID ? this.zcp_1 : objectPath;
    message = message === VOID ? this.acq_1 : message;
    details = details === VOID ? this.bcq_1 : details;
    absoluteLocation = absoluteLocation === VOID ? this.ccq_1 : absoluteLocation;
    return $super === VOID ? this.dcq(schemaPath, objectPath, message, details, absoluteLocation) : $super.dcq.call(this, schemaPath, objectPath, message, details, absoluteLocation);
  };
  protoOf(ValidationError).toString = function () {
    return 'ValidationError(schemaPath=' + this.ycp_1.toString() + ', objectPath=' + this.zcp_1.toString() + ', message=' + this.acq_1 + ', details=' + toString(this.bcq_1) + ', absoluteLocation=' + toString_0(this.ccq_1) + ')';
  };
  protoOf(ValidationError).hashCode = function () {
    var result = this.ycp_1.hashCode();
    result = imul(result, 31) + this.zcp_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.acq_1) | 0;
    result = imul(result, 31) + hashCode(this.bcq_1) | 0;
    result = imul(result, 31) + (this.ccq_1 == null ? 0 : this.ccq_1.hashCode()) | 0;
    return result;
  };
  protoOf(ValidationError).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ValidationError))
      return false;
    var tmp0_other_with_cast = other instanceof ValidationError ? other : THROW_CCE();
    if (!this.ycp_1.equals(tmp0_other_with_cast.ycp_1))
      return false;
    if (!this.zcp_1.equals(tmp0_other_with_cast.zcp_1))
      return false;
    if (!(this.acq_1 === tmp0_other_with_cast.acq_1))
      return false;
    if (!equals(this.bcq_1, tmp0_other_with_cast.bcq_1))
      return false;
    if (!equals(this.ccq_1, tmp0_other_with_cast.ccq_1))
      return false;
    return true;
  };
  function Companion_10() {
    Companion_instance_10 = this;
    this.pcp_1 = new Flag_0(true);
    this.qcp_1 = new Flag_0(false);
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('io.github.optimumcode.json.schema.ValidationOutput.Flag', this, 1);
    tmp0_serialDesc.x2b('valid', false);
    this.fcq_1 = tmp0_serialDesc;
  }
  protoOf($serializer).gcq = function (encoder, value) {
    var tmp0_desc = this.fcq_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.o25(tmp0_desc, 0, value.hcq_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer).v20 = function (encoder, value) {
    return this.gcq(encoder, value instanceof Flag_0 ? value : THROW_CCE());
  };
  protoOf($serializer).w20 = function (decoder) {
    var tmp0_desc = this.fcq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.h24(tmp0_desc);
    if (tmp5_input.x24()) {
      tmp4_local0 = tmp5_input.j24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.j24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.i24(tmp0_desc);
    return Flag_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer).u20 = function () {
    return this.fcq_1;
  };
  protoOf($serializer).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Flag_init_$Init$(seen0, valid, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance().fcq_1);
    }
    ValidationOutput.call($this);
    $this.hcq_1 = valid;
    return $this;
  }
  function Flag_init_$Create$(seen0, valid, serializationConstructorMarker) {
    return Flag_init_$Init$(seen0, valid, serializationConstructorMarker, objectCreate(protoOf(Flag_0)));
  }
  function Flag_0(valid) {
    Companion_getInstance_11();
    ValidationOutput.call(this);
    this.hcq_1 = valid;
  }
  protoOf(Flag_0).toString = function () {
    return 'Flag(valid=' + this.hcq_1 + ')';
  };
  protoOf(Flag_0).hashCode = function () {
    return getBooleanHashCode(this.hcq_1);
  };
  protoOf(Flag_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Flag_0))
      return false;
    var tmp0_other_with_cast = other instanceof Flag_0 ? other : THROW_CCE();
    if (!(this.hcq_1 === tmp0_other_with_cast.hcq_1))
      return false;
    return true;
  };
  function ValidationOutput() {
  }
  function AnnotationKeyFactory() {
  }
  protoOf(AnnotationKeyFactory).qcn = function (name, type) {
    return Companion_instance_2.qcn(name, type);
  };
  protoOf(AnnotationKeyFactory).icq = function (name, type, aggregator) {
    return Companion_instance_3.tcn(name, type, aggregator);
  };
  var AnnotationKeyFactory_instance;
  function AnnotationKeyFactory_getInstance() {
    return AnnotationKeyFactory_instance;
  }
  function _get__annotations__yxc7sq($this) {
    var tmp = $this.jcq_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('_annotations');
    }
  }
  function _get__aggregatedAnnotations__p0wywb($this) {
    var tmp = $this.kcq_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('_aggregatedAnnotations');
    }
  }
  function annotations($this) {
    if (!!($this.jcq_1 == null)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp.jcq_1 = HashMap_init_$Create$();
    }
    return _get__annotations__yxc7sq($this);
  }
  function aggregatedAnnotations($this) {
    if (!!($this.kcq_1 == null)) {
      var tmp = $this;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp.kcq_1 = HashMap_init_$Create$();
    }
    return _get__aggregatedAnnotations__p0wywb($this);
  }
  function DefaultAnnotationCollector() {
  }
  protoOf(DefaultAnnotationCollector).lcq = function (key, value) {
    // Inline function 'kotlin.collections.set' call
    annotations(this).p2(key, value);
  };
  protoOf(DefaultAnnotationCollector).mcq = function (key) {
    if (!!(this.jcq_1 == null)) {
      return null;
    }
    var tmp0_safe_receiver = _get__annotations__yxc7sq(this).m2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = cast(key.ycn_1, tmp0_safe_receiver);
    }
    return tmp;
  };
  protoOf(DefaultAnnotationCollector).ncq = function (key) {
    if (!!(this.kcq_1 == null) && !!(this.jcq_1 == null)) {
      return null;
    }
    var currentLevelAnnotation = this.mcq(key);
    if (!!(this.kcq_1 == null)) {
      return currentLevelAnnotation;
    }
    var tmp0_safe_receiver = _get__aggregatedAnnotations__p0wywb(this).m2(key);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var aggregatedAnnotation = cast(key.ycn_1, tmp0_safe_receiver);
      var tmp_0;
      if (currentLevelAnnotation == null) {
        tmp_0 = aggregatedAnnotation;
      } else {
        var tmp_1;
        if (key instanceof AggregatableAnnotationKey) {
          tmp_1 = key.wcn_1.scn(currentLevelAnnotation, aggregatedAnnotation);
        } else {
          if (key instanceof SimpleAnnotationKey) {
            tmp_1 = null;
          } else {
            noWhenBranchMatchedException();
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? currentLevelAnnotation : tmp1_elvis_lhs;
  };
  protoOf(DefaultAnnotationCollector).ocq = function () {
    var tmp;
    if (!(this.jcq_1 == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_get__annotations__yxc7sq(this).h();
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'io.github.optimumcode.json.schema.internal.DefaultAnnotationCollector.aggregateAnnotations' call
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = _get__annotations__yxc7sq(this).z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        $l$block: {
          // Inline function 'kotlin.collections.component1' call
          var key = element.a1();
          // Inline function 'kotlin.collections.component2' call
          var value = element.b1();
          if (!(key instanceof AggregatableAnnotationKey)) {
            break $l$block;
          }
          var aggregatedAnnotations_0 = aggregatedAnnotations(this);
          var oldValue = aggregatedAnnotations_0.m2(key);
          if (!(oldValue == null)) {
            var tmp_0 = key.wcn_1;
            var aggregator = isInterface(tmp_0, Aggregator) ? tmp_0 : THROW_CCE();
            var aggregated = aggregator.scn(cast(key.ycn_1, oldValue), cast(key.ycn_1, value));
            if (!(aggregated == null)) {
              // Inline function 'kotlin.collections.set' call
              aggregatedAnnotations_0.p2(key, aggregated);
            }
          } else {
            // Inline function 'kotlin.collections.set' call
            aggregatedAnnotations_0.p2(key, value);
          }
        }
      }
      _get__annotations__yxc7sq(this).g2();
    }
  };
  protoOf(DefaultAnnotationCollector).pcq = function () {
    var tmp;
    if (!(this.jcq_1 == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !_get__annotations__yxc7sq(this).h();
    } else {
      tmp = false;
    }
    if (tmp) {
      _get__annotations__yxc7sq(this).g2();
    }
  };
  protoOf(DefaultAnnotationCollector).qcq = function (parent) {
    if (!!(this.kcq_1 == null)) {
      return Unit_instance;
    }
    // Inline function 'io.github.optimumcode.json.schema.internal.DefaultAnnotationCollector.aggregateAnnotations' call
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _get__aggregatedAnnotations__p0wywb(this).z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      $l$block: {
        // Inline function 'kotlin.collections.component1' call
        var key = element.a1();
        // Inline function 'kotlin.collections.component2' call
        var value = element.b1();
        if (!(key instanceof AggregatableAnnotationKey)) {
          break $l$block;
        }
        var aggregatedAnnotations_0 = aggregatedAnnotations(parent);
        var oldValue = aggregatedAnnotations_0.m2(key);
        if (!(oldValue == null)) {
          var tmp = key.wcn_1;
          var aggregator = isInterface(tmp, Aggregator) ? tmp : THROW_CCE();
          var aggregated = aggregator.scn(cast(key.ycn_1, oldValue), cast(key.ycn_1, value));
          if (!(aggregated == null)) {
            // Inline function 'kotlin.collections.set' call
            aggregatedAnnotations_0.p2(key, aggregated);
          }
        } else {
          // Inline function 'kotlin.collections.set' call
          aggregatedAnnotations_0.p2(key, value);
        }
      }
    }
  };
  function DefaultAssertionContext(objectPath, referenceResolver, parent, recursiveRoot) {
    parent = parent === VOID ? null : parent;
    recursiveRoot = recursiveRoot === VOID ? null : recursiveRoot;
    this.rcq_1 = objectPath;
    this.scq_1 = referenceResolver;
    this.tcq_1 = parent;
    this.ucq_1 = recursiveRoot;
    this.vcq_1 = new DefaultAnnotationCollector();
  }
  protoOf(DefaultAssertionContext).wcq = function () {
    return this.rcq_1;
  };
  protoOf(DefaultAssertionContext).xcq = function () {
    return this.scq_1;
  };
  protoOf(DefaultAssertionContext).ycq = function () {
    return this.vcq_1;
  };
  protoOf(DefaultAssertionContext).b39 = function (index) {
    return this.zcq(get_0(this.rcq_1, index));
  };
  protoOf(DefaultAssertionContext).acr = function (property) {
    return this.zcq(div(this.rcq_1, property));
  };
  protoOf(DefaultAssertionContext).pcq = function () {
    this.vcq_1.pcq();
  };
  protoOf(DefaultAssertionContext).ocq = function () {
    this.vcq_1.ocq();
  };
  protoOf(DefaultAssertionContext).bcr = function () {
    if (this.tcq_1 == null) {
      return Unit_instance;
    }
    this.vcq_1.qcq(this.tcq_1.vcq_1);
  };
  protoOf(DefaultAssertionContext).ccr = function () {
    return this.zcq(VOID, VOID, this);
  };
  protoOf(DefaultAssertionContext).dcr = function (schema) {
    if (!(this.ucq_1 == null)) {
      return Unit_instance;
    }
    this.ucq_1 = schema;
  };
  protoOf(DefaultAssertionContext).ecr = function () {
    this.ucq_1 = null;
  };
  protoOf(DefaultAssertionContext).fcr = function () {
    return this.ucq_1;
  };
  protoOf(DefaultAssertionContext).gcr = function (path, scopeId) {
    this.scq_1.gcr(path, scopeId);
  };
  protoOf(DefaultAssertionContext).jcr = function () {
    this.scq_1.jcr();
  };
  protoOf(DefaultAssertionContext).kcr = function (objectPath, referenceResolver, parent, recursiveRoot) {
    return new DefaultAssertionContext(objectPath, referenceResolver, parent, recursiveRoot);
  };
  protoOf(DefaultAssertionContext).zcq = function (objectPath, referenceResolver, parent, recursiveRoot, $super) {
    objectPath = objectPath === VOID ? this.rcq_1 : objectPath;
    referenceResolver = referenceResolver === VOID ? this.scq_1 : referenceResolver;
    parent = parent === VOID ? this.tcq_1 : parent;
    recursiveRoot = recursiveRoot === VOID ? this.ucq_1 : recursiveRoot;
    return $super === VOID ? this.kcr(objectPath, referenceResolver, parent, recursiveRoot) : $super.kcr.call(this, objectPath, referenceResolver, parent, recursiveRoot);
  };
  protoOf(DefaultAssertionContext).toString = function () {
    return 'DefaultAssertionContext(objectPath=' + this.rcq_1.toString() + ', referenceResolver=' + toString(this.scq_1) + ', parent=' + toString_0(this.tcq_1) + ', recursiveRoot=' + toString_0(this.ucq_1) + ')';
  };
  protoOf(DefaultAssertionContext).hashCode = function () {
    var result = this.rcq_1.hashCode();
    result = imul(result, 31) + hashCode(this.scq_1) | 0;
    result = imul(result, 31) + (this.tcq_1 == null ? 0 : this.tcq_1.hashCode()) | 0;
    result = imul(result, 31) + (this.ucq_1 == null ? 0 : hashCode(this.ucq_1)) | 0;
    return result;
  };
  protoOf(DefaultAssertionContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DefaultAssertionContext))
      return false;
    var tmp0_other_with_cast = other instanceof DefaultAssertionContext ? other : THROW_CCE();
    if (!this.rcq_1.equals(tmp0_other_with_cast.rcq_1))
      return false;
    if (!equals(this.scq_1, tmp0_other_with_cast.scq_1))
      return false;
    if (!equals(this.tcq_1, tmp0_other_with_cast.tcq_1))
      return false;
    if (!equals(this.ucq_1, tmp0_other_with_cast.ucq_1))
      return false;
    return true;
  };
  function TrueSchemaAssertion() {
  }
  protoOf(TrueSchemaAssertion).qco = function (element, context, errorCollector) {
    return true;
  };
  var TrueSchemaAssertion_instance;
  function TrueSchemaAssertion_getInstance() {
    return TrueSchemaAssertion_instance;
  }
  function FalseSchemaAssertion(path) {
    this.lcr_1 = path;
  }
  protoOf(FalseSchemaAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.lcr_1);
    try {
      this_0.jcp(new ValidationError(this.lcr_1, context.wcq(), 'all values fail against the false schema'));
    }finally {
      this_0.sco();
    }
    return false;
  };
  function JsonSchemaRoot(scopeId, schemaPath, assertions, canBeReferencedRecursively) {
    this.mcr_1 = scopeId;
    this.ncr_1 = schemaPath;
    this.ocr_1 = assertions;
    this.pcr_1 = canBeReferencedRecursively;
  }
  protoOf(JsonSchemaRoot).qco = function (element, context, errorCollector) {
    if (this.pcr_1) {
      context.dcr(this);
    } else {
      context.ecr();
    }
    var result = true;
    context.gcr(this.ncr_1, this.mcr_1);
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.ncr_1);
    try {
      $l$block: {
        var failFast = this_0.ccp();
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = this.ocr_1.p();
        while (_iterator__ex2g4s.q()) {
          var element_0 = _iterator__ex2g4s.r();
          var valid = element_0.qco(element, context, this_0);
          result = !!(result & valid);
          if (!result && failFast) {
            break $l$block;
          }
        }
      }
    }finally {
      this_0.sco();
    }
    context.jcr();
    if (result) {
      context.ocq();
    } else {
      context.pcq();
    }
    return result;
  };
  var KeyWord_ID_instance;
  var KeyWord_ANCHOR_instance;
  var KeyWord_DYNAMIC_ANCHOR_instance;
  var KeyWord_DEFINITIONS_instance;
  var KeyWord_COMPATIBILITY_DEFINITIONS_instance;
  var KeyWord_entriesInitialized;
  function KeyWord_initEntries() {
    if (KeyWord_entriesInitialized)
      return Unit_instance;
    KeyWord_entriesInitialized = true;
    KeyWord_ID_instance = new KeyWord('ID', 0);
    KeyWord_ANCHOR_instance = new KeyWord('ANCHOR', 1);
    KeyWord_DYNAMIC_ANCHOR_instance = new KeyWord('DYNAMIC_ANCHOR', 2);
    KeyWord_DEFINITIONS_instance = new KeyWord('DEFINITIONS', 3);
    KeyWord_COMPATIBILITY_DEFINITIONS_instance = new KeyWord('COMPATIBILITY_DEFINITIONS', 4);
  }
  function KeyWord(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function KeyWord_ID_getInstance() {
    KeyWord_initEntries();
    return KeyWord_ID_instance;
  }
  function KeyWord_ANCHOR_getInstance() {
    KeyWord_initEntries();
    return KeyWord_ANCHOR_instance;
  }
  function KeyWord_DYNAMIC_ANCHOR_getInstance() {
    KeyWord_initEntries();
    return KeyWord_DYNAMIC_ANCHOR_instance;
  }
  function KeyWord_DEFINITIONS_getInstance() {
    KeyWord_initEntries();
    return KeyWord_DEFINITIONS_instance;
  }
  function KeyWord_COMPATIBILITY_DEFINITIONS_getInstance() {
    KeyWord_initEntries();
    return KeyWord_COMPATIBILITY_DEFINITIONS_instance;
  }
  function RecursiveRefSchemaAssertion$validate$lambda($refIdPath, $$this$run, $absoluteLocation) {
    return function ($this$withErrorTransformer, it) {
      var relativePath = relative($refIdPath, it.ycp_1);
      var tmp = plus_3($$this$run.qcr_1, relativePath);
      var tmp0_elvis_lhs = it.ccq_1;
      return it.ecq(tmp, VOID, VOID, VOID, tmp0_elvis_lhs == null ? new AbsoluteLocation($absoluteLocation, it.ycp_1) : tmp0_elvis_lhs);
    };
  }
  function RecursiveRefSchemaAssertion(basePath, refId) {
    this.qcr_1 = basePath;
    this.rcr_1 = refId;
  }
  protoOf(RecursiveRefSchemaAssertion).qco = function (element, context, errorCollector) {
    var tmp0_safe_receiver = context.fcr();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qco(element, context, errorCollector);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      var _destruct__k2r9zo = context.xcq().scr(this.rcr_1);
      var refIdPath = _destruct__k2r9zo.dc();
      var refAssertion = _destruct__k2r9zo.ec();
      var absoluteLocation = _destruct__k2r9zo.yp();
      var tmp_0 = errorCollector.fcp(this.qcr_1, new AbsoluteLocation(absoluteLocation, refIdPath));
      // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
      var this_0 = tmp_0.hcp(RecursiveRefSchemaAssertion$validate$lambda(refIdPath, this, absoluteLocation));
      var tmp_1;
      try {
        tmp_1 = refAssertion.qco(element, context, this_0);
      }finally {
        this_0.sco();
      }
      tmp = tmp_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  function _RefId___init__impl__x6mpp1(uri) {
    return uri;
  }
  function _RefId___get_uri__impl__5jqx24($this) {
    return $this;
  }
  function _RefId___get_fragment__impl__23nh9e($this) {
    var tmp0_elvis_lhs = _RefId___get_uri__impl__5jqx24($this).v36();
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  }
  function RefId__toString_impl_qgdkr7($this) {
    return 'RefId(uri=' + toString($this) + ')';
  }
  function RefId__hashCode_impl_4p7nyc($this) {
    return hashCode($this);
  }
  function RefId__equals_impl_nc3fs0($this, other) {
    if (!(other instanceof RefId))
      return false;
    var tmp0_other_with_cast = other instanceof RefId ? other.wcr_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function RefId(uri) {
    this.wcr_1 = uri;
  }
  protoOf(RefId).toString = function () {
    return RefId__toString_impl_qgdkr7(this.wcr_1);
  };
  protoOf(RefId).hashCode = function () {
    return RefId__hashCode_impl_4p7nyc(this.wcr_1);
  };
  protoOf(RefId).equals = function (other) {
    return RefId__equals_impl_nc3fs0(this.wcr_1, other);
  };
  function _get_refIdPath__9j46se($this) {
    var tmp = $this.zcr_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('refIdPath');
    }
  }
  function _get_refAssertion__ww15rw($this) {
    var tmp = $this.acs_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('refAssertion');
    }
  }
  function _get_refAbsolutePath__us1pj6($this) {
    var tmp = $this.bcs_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('refAbsolutePath');
    }
  }
  function RefSchemaAssertion$validate$lambda(this$0) {
    return function ($this$withErrorTransformer, it) {
      var tmp = plus_3(this$0.xcr_1, relative(_get_refIdPath__9j46se(this$0), it.ycp_1));
      var tmp0_elvis_lhs = it.ccq_1;
      return it.ecq(tmp, VOID, VOID, VOID, tmp0_elvis_lhs == null ? new AbsoluteLocation(_get_refAbsolutePath__us1pj6(this$0), it.ycp_1) : tmp0_elvis_lhs);
    };
  }
  function RefSchemaAssertion(basePath, refId) {
    this.xcr_1 = basePath;
    this.ycr_1 = refId;
  }
  protoOf(RefSchemaAssertion).qco = function (element, context, errorCollector) {
    if (!!(this.acs_1 == null)) {
      var resolved = context.xcq().ccs(this.ycr_1);
      this.zcr_1 = resolved.tcr_1;
      this.acs_1 = resolved.ucr_1;
      this.bcs_1 = resolved.vcr_1;
    }
    var tmp = errorCollector.fcp(this.xcr_1, new AbsoluteLocation(_get_refAbsolutePath__us1pj6(this), _get_refIdPath__9j46se(this)));
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = tmp.hcp(RefSchemaAssertion$validate$lambda(this));
    var tmp_0;
    try {
      tmp_0 = _get_refAssertion__ww15rw(this).qco(element, context, this_0);
    }finally {
      this_0.sco();
    }
    return tmp_0;
  };
  function ReferenceHolder(schemaPath, assertion, scopeId) {
    this.tcr_1 = schemaPath;
    this.ucr_1 = assertion;
    this.vcr_1 = scopeId;
  }
  protoOf(ReferenceHolder).dc = function () {
    return this.tcr_1;
  };
  protoOf(ReferenceHolder).ec = function () {
    return this.ucr_1;
  };
  protoOf(ReferenceHolder).yp = function () {
    return this.vcr_1;
  };
  function DefaultReferenceResolverProvider(references) {
    this.oco_1 = references;
  }
  protoOf(DefaultReferenceResolverProvider).pco = function () {
    return new DefaultReferenceResolver(this.oco_1);
  };
  function toRefHolder($this, _this__u8e3s4) {
    return new ReferenceHolder(_this__u8e3s4.ecs_1, _this__u8e3s4.dcs_1, _this__u8e3s4.gcs_1);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.hcs_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).pf = function (a, b) {
    return this.hcs_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.pf(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).u3 = function () {
    return this.hcs_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.u3());
  };
  function DefaultReferenceResolver$dynamicRef$lambda($fragment, $refId) {
    return function (_destruct__k2r9zo) {
      // Inline function 'kotlin.collections.component1' call
      var id = _destruct__k2r9zo.a1().wcr_1;
      // Inline function 'kotlin.collections.component2' call
      var link = _destruct__k2r9zo.b1();
      return link.fcs_1 && _RefId___get_fragment__impl__23nh9e(id) === $fragment && !equals(id, $refId);
    };
  }
  function DefaultReferenceResolver$dynamicRef$lambda_0(it) {
    return it.b1();
  }
  function DefaultReferenceResolver$dynamicRef$lambda_1(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = get_length(a.ecs_1);
    var tmp$ret$1 = get_length(b.ecs_1);
    return compareValues(tmp, tmp$ret$1);
  }
  function DefaultReferenceResolver(references, schemaPathsStack) {
    schemaPathsStack = schemaPathsStack === VOID ? ArrayDeque_init_$Create$_0() : schemaPathsStack;
    this.hcr_1 = references;
    this.icr_1 = schemaPathsStack;
  }
  protoOf(DefaultReferenceResolver).ccs = function (refId) {
    var tmp0 = this.hcr_1.m2(new RefId(refId));
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = RefId__toString_impl_qgdkr7(refId) + ' is not found';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var resolvedRef = tmp$ret$1;
    return toRefHolder(this, resolvedRef);
  };
  protoOf(DefaultReferenceResolver).scr = function (refId) {
    var tmp0 = this.hcr_1.m2(new RefId(refId));
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = RefId__toString_impl_qgdkr7(refId) + ' is not found';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    var originalRef = tmp$ret$1;
    if (!originalRef.fcs_1) {
      return toRefHolder(this, originalRef);
    }
    var fragment = _RefId___get_fragment__impl__23nh9e(refId);
    var tmp = asSequence(this.hcr_1);
    var tmp_0 = filter(tmp, DefaultReferenceResolver$dynamicRef$lambda(fragment, refId));
    var possibleDynamicRefs = toMutableList(map(tmp_0, DefaultReferenceResolver$dynamicRef$lambda_0));
    // Inline function 'kotlin.collections.sortBy' call
    if (possibleDynamicRefs.s() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_1 = DefaultReferenceResolver$dynamicRef$lambda_1;
      var tmp$ret$2 = new sam$kotlin_Comparator$0(tmp_1);
      sortWith(possibleDynamicRefs, tmp$ret$2);
    }
    var tmp4 = this.icr_1;
    var tmp$ret$7;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      var _iterator__ex2g4s = tmp4.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        var scopeId = element.ec();
        var tmp$ret$5;
        $l$block_0: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s_0 = possibleDynamicRefs.p();
          while (_iterator__ex2g4s_0.q()) {
            var element_0 = _iterator__ex2g4s_0.r();
            if (equals(element_0.gcs_1, scopeId)) {
              tmp$ret$5 = element_0;
              break $l$block_0;
            }
          }
          tmp$ret$5 = null;
        }
        var result = tmp$ret$5;
        if (!(result == null)) {
          tmp$ret$7 = result;
          break $l$block_1;
        }
      }
      tmp$ret$7 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$7;
    var resolvedDynamicRef = tmp0_elvis_lhs == null ? originalRef : tmp0_elvis_lhs;
    return toRefHolder(this, resolvedDynamicRef);
  };
  protoOf(DefaultReferenceResolver).gcr = function (path, scopeId) {
    this.icr_1.ih(to(path, scopeId));
  };
  protoOf(DefaultReferenceResolver).jcr = function () {
    this.icr_1.lh();
  };
  function ReferenceLocation(schemaPath, refId) {
    this.ics_1 = schemaPath;
    this.jcs_1 = refId;
  }
  protoOf(ReferenceLocation).dc = function () {
    return this.ics_1;
  };
  protoOf(ReferenceLocation).kcs = function () {
    return this.jcs_1;
  };
  protoOf(ReferenceLocation).toString = function () {
    return 'ReferenceLocation(schemaPath=' + this.ics_1.toString() + ', refId=' + RefId__toString_impl_qgdkr7(this.jcs_1) + ')';
  };
  protoOf(ReferenceLocation).hashCode = function () {
    var result = this.ics_1.hashCode();
    result = imul(result, 31) + RefId__hashCode_impl_4p7nyc(this.jcs_1) | 0;
    return result;
  };
  protoOf(ReferenceLocation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ReferenceLocation))
      return false;
    var tmp0_other_with_cast = other instanceof ReferenceLocation ? other : THROW_CCE();
    if (!this.ics_1.equals(tmp0_other_with_cast.ics_1))
      return false;
    if (!equals(this.jcs_1, tmp0_other_with_cast.jcs_1))
      return false;
    return true;
  };
  function PointerWithBaseId(baseId, pointer) {
    this.lcs_1 = baseId;
    this.mcs_1 = pointer;
  }
  function checkCircledReferences($this, usedRefs, referencesWithPath) {
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(usedRefs, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = usedRefs.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var schemaPath = element.dc();
      var refId = element.kcs();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(schemaPath, new RefId(refId));
      destination.p2(pair.bc_1, pair.cc_1);
    }
    var locationToRef = destination;
    // Inline function 'kotlin.collections.linkedSetOf' call
    var circledReferences = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = referencesWithPath.z();
    var tmp4 = new ReferenceValidator$checkCircledReferences$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.hashSetOf' call
    // Inline function 'kotlin.collections.fold' call
    var initialValue = HashSet_init_$Create$();
    // Inline function 'kotlin.collections.aggregate' call
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = tmp4.t21();
    while (_iterator__ex2g4s_0.q()) {
      var e = _iterator__ex2g4s_0.r();
      var key = tmp4.w21(e);
      var accumulator = destination_0.m2(key);
      var tmp;
      if (accumulator == null && !destination_0.k2(key)) {
        tmp = initialValue;
      } else {
        tmp = (accumulator == null ? true : !(accumulator == null)) ? accumulator : THROW_CCE();
      }
      // Inline function 'kotlin.apply' call
      var this_1 = tmp;
      this_1.n(e.b1().mcs_1);
      // Inline function 'kotlin.collections.set' call
      destination_0.p2(key, this_1);
    }
    var refsByBaseId = destination_0;
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_1 = locationToRef.z().p();
    $l$loop_0: while (_iterator__ex2g4s_1.q()) {
      var _destruct__k2r9zo = _iterator__ex2g4s_1.r();
      // Inline function 'kotlin.collections.component1' call
      var location = _destruct__k2r9zo.a1();
      // Inline function 'kotlin.collections.component2' call
      var refId_0 = _destruct__k2r9zo.b1().wcr_1;
      var schemaLocation = getValue(referencesWithPath, new RefId(refId_0));
      // Inline function 'kotlin.collections.find' call
      var tmp0 = locationToRef.z();
      var tmp$ret$22;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_2 = tmp0.p();
        while (_iterator__ex2g4s_2.q()) {
          var element_0 = _iterator__ex2g4s_2.r();
          // Inline function 'kotlin.collections.component1' call
          var refKey = element_0.a1();
          if (startsWith_1(refKey, schemaLocation.mcs_1)) {
            tmp$ret$22 = element_0;
            break $l$block;
          }
        }
        tmp$ret$22 = null;
      }
      var tmp0_elvis_lhs = tmp$ret$22;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var _destruct__k2r9zo_0 = tmp_0;
      // Inline function 'kotlin.collections.component1' call
      var otherLocation = _destruct__k2r9zo_0.a1();
      // Inline function 'kotlin.collections.component2' call
      var otherRef = _destruct__k2r9zo_0.b1().wcr_1;
      var otherRefSchemaLocation = getValue(referencesWithPath, new RefId(otherRef));
      if (!startsWith_1(location, otherRefSchemaLocation.mcs_1) || !equals(schemaLocation.lcs_1, otherRefSchemaLocation.lcs_1)) {
        continue $l$loop_0;
      }
      var tmp1_elvis_lhs = refsByBaseId.m2(schemaLocation.lcs_1);
      var refsForBaseId = tmp1_elvis_lhs == null ? emptySet() : tmp1_elvis_lhs;
      if (checkRunAlways($this, location, refsForBaseId) && checkRunAlways($this, otherLocation, refsForBaseId) && !location.equals(otherLocation)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_1 = new CircledReference(location, schemaLocation.mcs_1, otherLocation, otherRefSchemaLocation.mcs_1);
        circledReferences.n(element_1);
      }
    }
    // Inline function 'kotlin.require' call
    if (!circledReferences.h()) {
      var message = 'circled references: ' + joinToString(circledReferences, VOID, VOID, VOID, VOID, VOID, ReferenceValidator$checkCircledReferences$lambda);
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function checkRunAlways($this, path, schemaLocations) {
    var curPath = path;
    while (!(curPath == null)) {
      var parentPath = dropLast(curPath);
      var tmp;
      if (contains_0(schemaLocations, parentPath)) {
        var tmp0_safe_receiver = lastSegment(curPath);
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = (!ReferenceValidator_getInstance().ncs_1.w(tmp0_safe_receiver) && !ReferenceValidator_getInstance().ocs_1.w(tmp0_safe_receiver));
        }
        tmp = tmp_0 === true;
      } else {
        tmp = false;
      }
      if (tmp) {
        return false;
      }
      curPath = parentPath;
    }
    return true;
  }
  function CircledReference(firstLocation, firstRef, secondLocation, secondRef) {
    this.pcs_1 = firstLocation;
    this.qcs_1 = firstRef;
    this.rcs_1 = secondLocation;
    this.scs_1 = secondRef;
  }
  protoOf(CircledReference).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof CircledReference))
      THROW_CCE();
    return this.pcs_1.equals(other.pcs_1) && this.qcs_1.equals(other.qcs_1) && this.rcs_1.equals(other.rcs_1) && this.scs_1.equals(other.scs_1) || (this.pcs_1.equals(other.rcs_1) && this.qcs_1.equals(other.scs_1) && this.rcs_1.equals(other.pcs_1) && this.scs_1.equals(other.qcs_1));
  };
  protoOf(CircledReference).hashCode = function () {
    return ((this.pcs_1.hashCode() + this.qcs_1.hashCode() | 0) + this.rcs_1.hashCode() | 0) + this.scs_1.hashCode() | 0;
  };
  function ReferenceValidator$validateReferences$lambda($referencesWithPath) {
    return function (it) {
      var tmp0 = $referencesWithPath;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key = new RefId(it.jcs_1);
      return !(isInterface(tmp0, KtMap) ? tmp0 : THROW_CCE()).k2(key);
    };
  }
  function ReferenceValidator$validateReferences$lambda_0(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var ref = _destruct__k2r9zo.a1().wcr_1;
    // Inline function 'kotlin.collections.component2' call
    var locations = _destruct__k2r9zo.b1();
    var tmp = toString(_RefId___get_uri__impl__5jqx24(ref));
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(locations, 10));
    var _iterator__ex2g4s = locations.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$2 = '"' + item.ics_1.toString() + '"';
      destination.n(tmp$ret$2);
    }
    return '"' + tmp + '": ' + toString(destination);
  }
  function ReferenceValidator$checkCircledReferences$$inlined$groupingBy$1($this) {
    this.tcs_1 = $this;
  }
  protoOf(ReferenceValidator$checkCircledReferences$$inlined$groupingBy$1).t21 = function () {
    return this.tcs_1.p();
  };
  protoOf(ReferenceValidator$checkCircledReferences$$inlined$groupingBy$1).u21 = function (element) {
    return element.b1().lcs_1;
  };
  protoOf(ReferenceValidator$checkCircledReferences$$inlined$groupingBy$1).w21 = function (element) {
    return this.u21((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function ReferenceValidator$checkCircledReferences$lambda(it) {
    return it.pcs_1.toString() + ' ref to ' + it.qcs_1.toString() + ' and ' + it.rcs_1.toString() + ' ref to ' + it.scs_1.toString();
  }
  function ReferenceValidator() {
    ReferenceValidator_instance = this;
    this.ncs_1 = hashSetOf(['allOf', 'anyOf', 'oneOf']);
    this.ocs_1 = hashSetOf(['definitions', '$defs']);
  }
  protoOf(ReferenceValidator).ucs = function (referencesWithPath, usedRef) {
    var tmp = asSequence_0(usedRef);
    // Inline function 'kotlin.sequences.groupBy' call
    var tmp0 = filter(tmp, ReferenceValidator$validateReferences$lambda(referencesWithPath));
    // Inline function 'kotlin.sequences.groupByTo' call
    var destination = LinkedHashMap_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var key = new RefId(element.jcs_1);
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.m2(key);
      var tmp_0;
      if (value == null) {
        var answer = ArrayList_init_$Create$_0();
        destination.p2(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      var list = tmp_0;
      list.n(element);
    }
    var missingRefs = destination;
    // Inline function 'kotlin.require' call
    if (!missingRefs.h()) {
      var tmp_1 = missingRefs.z();
      var message = 'cannot resolve references: ' + joinToString(tmp_1, VOID, '{', '}', VOID, VOID, ReferenceValidator$validateReferences$lambda_0);
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    checkCircledReferences(this, usedRef, referencesWithPath);
  };
  var ReferenceValidator_instance;
  function ReferenceValidator_getInstance() {
    if (ReferenceValidator_instance == null)
      new ReferenceValidator();
    return ReferenceValidator_instance;
  }
  function get_ANCHOR_REGEX() {
    _init_properties_SchemaLoader_kt__khu75g();
    return ANCHOR_REGEX;
  }
  var ANCHOR_REGEX;
  function IsolatedLoader() {
  }
  protoOf(IsolatedLoader).eco = function (schema, draft) {
    var schemaElement = Default_getInstance().h4s(schema);
    return this.gco(schemaElement, draft);
  };
  protoOf(IsolatedLoader).gco = function (schemaElement, draft) {
    // Inline function 'kotlin.collections.linkedMapOf' call
    var references = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.collections.hashSetOf' call
    var usedRefs = HashSet_init_$Create$();
    var assertion = loadSchemaData(schemaElement, new LoadingParameters(draft, references, usedRefs));
    validateReferences(references, usedRefs);
    // Inline function 'kotlin.collections.hashSetOf' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = HashSet_init_$Create$();
    var _iterator__ex2g4s = usedRefs.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$3 = new RefId(item.jcs_1);
      destination.n(tmp$ret$3);
    }
    return createSchema(new LoadResult(assertion, references, destination));
  };
  var IsolatedLoader_instance;
  function IsolatedLoader_getInstance() {
    return IsolatedLoader_instance;
  }
  function AssertionWithPath(assertion, schemaPath, dynamic, scopeId) {
    this.dcs_1 = assertion;
    this.ecs_1 = schemaPath;
    this.fcs_1 = dynamic;
    this.gcs_1 = scopeId;
  }
  protoOf(AssertionWithPath).toString = function () {
    return 'AssertionWithPath(assertion=' + toString(this.dcs_1) + ', schemaPath=' + this.ecs_1.toString() + ', dynamic=' + this.fcs_1 + ', scopeId=' + toString(this.gcs_1) + ')';
  };
  protoOf(AssertionWithPath).hashCode = function () {
    var result = hashCode(this.dcs_1);
    result = imul(result, 31) + this.ecs_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.fcs_1) | 0;
    result = imul(result, 31) + hashCode(this.gcs_1) | 0;
    return result;
  };
  protoOf(AssertionWithPath).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AssertionWithPath))
      return false;
    var tmp0_other_with_cast = other instanceof AssertionWithPath ? other : THROW_CCE();
    if (!equals(this.dcs_1, tmp0_other_with_cast.dcs_1))
      return false;
    if (!this.ecs_1.equals(tmp0_other_with_cast.ecs_1))
      return false;
    if (!(this.fcs_1 === tmp0_other_with_cast.fcs_1))
      return false;
    if (!equals(this.gcs_1, tmp0_other_with_cast.gcs_1))
      return false;
    return true;
  };
  function loadSchemaData(schemaDefinition, parameters, externalUri) {
    externalUri = externalUri === VOID ? null : externalUri;
    _init_properties_SchemaLoader_kt__khu75g();
    var tmp0_safe_receiver = extractSchema(schemaDefinition);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = Companion_getInstance().aq(tmp0_safe_receiver);
    }
    var schema = tmp;
    var schemaType = resolveSchemaType(schema, parameters.vcs_1, parameters.bct_1);
    var tmp1_elvis_lhs = extractID(schemaDefinition, schemaType.xcp_1);
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? externalUri : tmp1_elvis_lhs;
    var baseId = tmp2_elvis_lhs == null ? Companion_getInstance().icf_1 : tmp2_elvis_lhs;
    var tmp3_safe_receiver = schemaType.xcp_1.ect(schemaDefinition);
    var tmp_0;
    if (tmp3_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.also' call
      parameters.dct_1(baseId, schemaType, tmp3_safe_receiver);
      tmp_0 = tmp3_safe_receiver;
    }
    var schemaVocabulary = tmp_0;
    var tmp_1;
    if (schemaVocabulary == null) {
      var tmp_2;
      if (schema == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_2 = parameters.cct_1(schema);
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = schemaVocabulary;
    }
    var tmp6_elvis_lhs = tmp_1;
    var vocabulary = tmp6_elvis_lhs == null ? schemaType.xcp_1.fct() : tmp6_elvis_lhs;
    // Inline function 'kotlin.let' call
    var it = schemaType.xcp_1.gct(schemaDefinition, vocabulary, new Options(parameters.act_1));
    var tmp_3;
    if (parameters.ycs_1.h()) {
      tmp_3 = it;
    } else {
      tmp_3 = plus(it, parameters.ycs_1);
    }
    var assertionFactories = tmp_3;
    // Inline function 'kotlin.collections.linkedMapOf' call
    var isolatedReferences = LinkedHashMap_init_$Create$_0();
    // Inline function 'kotlin.let' call
    var it_0 = defaultLoadingContext(baseId, schemaType.xcp_1, assertionFactories, isolatedReferences, parameters.zcs_1);
    var tmp_4;
    if (!(externalUri == null) && !equals(baseId, externalUri)) {
      tmp_4 = it_0.qct(VOID, VOID, VOID, plus_0(setOf(new IdWithLocation(externalUri, Companion_getInstance_0().ycm_1)), it_0.kct_1));
    } else {
      tmp_4 = it_0;
    }
    var context = tmp_4;
    var schemaAssertion = loadSchema(schemaDefinition, context);
    parameters.wcs_1.r2(isolatedReferences);
    parameters.xcs_1.t(context.mct_1);
    return schemaAssertion;
  }
  function LoadingParameters$_init_$lambda_hbl73v(it) {
    return null;
  }
  function LoadingParameters$_init_$lambda_hbl73v_0(it) {
    return null;
  }
  function LoadingParameters$_init_$lambda_hbl73v_1(_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
    return Unit_instance;
  }
  function LoadingParameters(defaultType, references, usedRefs, extensionFactories, customFormats, schemaOptions, resolveCustomMetaSchemaType, resolveCustomVocabulary, registerMetaSchema) {
    extensionFactories = extensionFactories === VOID ? emptySet() : extensionFactories;
    customFormats = customFormats === VOID ? emptyMap() : customFormats;
    schemaOptions = schemaOptions === VOID ? emptyMap() : schemaOptions;
    var tmp;
    if (resolveCustomMetaSchemaType === VOID) {
      tmp = LoadingParameters$_init_$lambda_hbl73v;
    } else {
      tmp = resolveCustomMetaSchemaType;
    }
    resolveCustomMetaSchemaType = tmp;
    var tmp_0;
    if (resolveCustomVocabulary === VOID) {
      tmp_0 = LoadingParameters$_init_$lambda_hbl73v_0;
    } else {
      tmp_0 = resolveCustomVocabulary;
    }
    resolveCustomVocabulary = tmp_0;
    var tmp_1;
    if (registerMetaSchema === VOID) {
      tmp_1 = LoadingParameters$_init_$lambda_hbl73v_1;
    } else {
      tmp_1 = registerMetaSchema;
    }
    registerMetaSchema = tmp_1;
    this.vcs_1 = defaultType;
    this.wcs_1 = references;
    this.xcs_1 = usedRefs;
    this.ycs_1 = extensionFactories;
    this.zcs_1 = customFormats;
    this.act_1 = schemaOptions;
    this.bct_1 = resolveCustomMetaSchemaType;
    this.cct_1 = resolveCustomVocabulary;
    this.dct_1 = registerMetaSchema;
  }
  function validateReferences(references, usedRefs) {
    _init_properties_SchemaLoader_kt__khu75g();
    var tmp = ReferenceValidator_getInstance();
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(references.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = references.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp_0 = element.a1();
      // Inline function 'kotlin.run' call
      var $this$run = element.b1();
      var tmp$ret$3 = new PointerWithBaseId($this$run.gcs_1, $this$run.ecs_1);
      destination.p2(tmp_0, tmp$ret$3);
    }
    tmp.ucs(destination, usedRefs);
  }
  function createSchema(result) {
    _init_properties_SchemaLoader_kt__khu75g();
    var tmp = asSequence(result.sct_1);
    var tmp_0 = filter(tmp, createSchema$lambda);
    var dynamicRefs = toSet(map(tmp_0, createSchema$lambda_0));
    var tmp_1 = asSequence(result.sct_1);
    // Inline function 'kotlin.sequences.associate' call
    var tmp0 = filter(tmp_1, createSchema$lambda_1(result, dynamicRefs));
    // Inline function 'kotlin.sequences.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element.a1(), element.b1());
      destination.p2(pair.bc_1, pair.cc_1);
    }
    var usedReferencesWithPath = destination;
    return new JsonSchema(result.rct_1, new DefaultReferenceResolverProvider(usedReferencesWithPath));
  }
  function LoadResult(assertion, references, usedRefs) {
    this.rct_1 = assertion;
    this.sct_1 = references;
    this.tct_1 = usedRefs;
  }
  function extractSchema(schemaDefinition) {
    _init_properties_SchemaLoader_kt__khu75g();
    var tmp;
    if (schemaDefinition instanceof JsonObject) {
      var tmp0_safe_receiver = schemaDefinition.af('$schema');
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_1;
        if (tmp0_safe_receiver instanceof JsonPrimitive) {
          tmp_1 = tmp0_safe_receiver.p4u();
        } else {
          tmp_1 = false;
        }
        // Inline function 'kotlin.require' call
        if (!tmp_1) {
          var message = '$schema must be a string';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        tmp_0 = tmp0_safe_receiver.q4u();
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function resolveSchemaType(schema, defaultType, resolveCustomMetaSchemaType) {
    _init_properties_SchemaLoader_kt__khu75g();
    var tmp;
    if (schema == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = findSchemaType(schema);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? resolveCustomMetaSchemaType(schema) : tmp0_elvis_lhs;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$('unsupported schema type ' + toString(schema));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    }
    var schemaType = tmp;
    var tmp2_elvis_lhs = schemaType == null ? defaultType : schemaType;
    return tmp2_elvis_lhs == null ? last(get_entries()) : tmp2_elvis_lhs;
  }
  function extractID(schemaDefinition, config) {
    _init_properties_SchemaLoader_kt__khu75g();
    var tmp;
    if (schemaDefinition instanceof JsonObject) {
      var idProperty = config.uct().vct(KeyWord_ID_getInstance());
      var tmp_0;
      if (idProperty == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = getString(schemaDefinition, idProperty);
      }
      var tmp2_safe_receiver = tmp_0;
      var tmp_1;
      if (tmp2_safe_receiver == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp0 = Companion_getInstance().jcf(tmp2_safe_receiver);
        var tmp$ret$3;
        $l$block: {
          // Inline function 'kotlin.requireNotNull' call
          if (tmp0 == null) {
            var message = 'invalid ' + idProperty + ': ' + tmp2_safe_receiver;
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            tmp$ret$3 = tmp0;
            break $l$block;
          }
        }
        tmp_1 = tmp$ret$3;
      }
      tmp = tmp_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function registerById($this, id, assertion, dynamic) {
    if (id.lcf()) {
      register($this, buildRefId_0(id), assertion, dynamic);
    } else {
      // Inline function 'kotlin.let' call
      var it = id.b37();
      if (!(it == null) && startsWith(it, _Char___init__impl__6a9atx(47))) {
        register($this, buildRefId_0(resolvePath($this.kct_1, id.b37())), assertion, dynamic);
      } else {
        if (id.kcf()) {
          var tmp;
          if ($this.jct_1 === Companion_getInstance_0().ycm_1) {
            // Inline function 'kotlin.text.isNullOrBlank' call
            var this_0 = id.pcf();
            tmp = !(this_0 == null || isBlank(this_0));
          } else {
            tmp = false;
          }
          if (tmp) {
            register($this, buildRefId_0(appendPathToParent(Companion_getInstance().icf_1, ensureNotNull(id.pcf()))), assertion, dynamic);
          } else {
            // Inline function 'kotlin.text.isNullOrBlank' call
            var this_1 = id.pcf();
            if (!(this_1 == null || isBlank(this_1))) {
              register($this, buildRefId_0(resolvePath($this.kct_1, id.pcf())), assertion, dynamic);
            } else {
              // Inline function 'kotlin.text.isNullOrBlank' call
              var this_2 = id.v36();
              if (!(this_2 == null || isBlank(this_2))) {
                register($this, buildRefId(last_0($this.kct_1).wct_1.rcf().fcf(id.v36())), assertion, dynamic);
              }
            }
          }
        }
      }
    }
  }
  function register($this, referenceId, assertion, dynamic) {
    if ($this.lct_1.p2(new RefId(referenceId), new AssertionWithPath(assertion, $this.jct_1, dynamic, last_0($this.kct_1).wct_1)) == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      throw IllegalStateException_init_$Create$('duplicated definition ' + RefId__toString_impl_qgdkr7(referenceId));
    }
  }
  function DefaultLoadingContext(baseId, recursiveResolution, schemaPath, additionalIDs, references, usedRef, config, assertionFactories, customFormatValidators) {
    recursiveResolution = recursiveResolution === VOID ? false : recursiveResolution;
    schemaPath = schemaPath === VOID ? Companion_getInstance_0().ycm_1 : schemaPath;
    additionalIDs = additionalIDs === VOID ? linkedSetOf([new IdWithLocation(baseId, schemaPath)]) : additionalIDs;
    var tmp;
    if (references === VOID) {
      // Inline function 'kotlin.collections.linkedMapOf' call
      tmp = LinkedHashMap_init_$Create$_0();
    } else {
      tmp = references;
    }
    references = tmp;
    var tmp_0;
    if (usedRef === VOID) {
      // Inline function 'kotlin.collections.linkedSetOf' call
      tmp_0 = LinkedHashSet_init_$Create$();
    } else {
      tmp_0 = usedRef;
    }
    usedRef = tmp_0;
    this.hct_1 = baseId;
    this.ict_1 = recursiveResolution;
    this.jct_1 = schemaPath;
    this.kct_1 = additionalIDs;
    this.lct_1 = references;
    this.mct_1 = usedRef;
    this.nct_1 = config;
    this.oct_1 = assertionFactories;
    this.pct_1 = customFormatValidators;
  }
  protoOf(DefaultLoadingContext).yct = function () {
    return this.jct_1;
  };
  protoOf(DefaultLoadingContext).zct = function () {
    return this.pct_1;
  };
  protoOf(DefaultLoadingContext).acr = function (property) {
    return this.qct(VOID, VOID, div(this.jct_1, property));
  };
  protoOf(DefaultLoadingContext).b39 = function (index) {
    return this.qct(VOID, VOID, get_0(this.jct_1, index));
  };
  protoOf(DefaultLoadingContext).acu = function (element) {
    return loadSchema(element, this);
  };
  protoOf(DefaultLoadingContext).bcu = function (element) {
    var tmp;
    if (element instanceof JsonObject) {
      tmp = true;
    } else {
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = !(get_booleanOrNull(element) == null);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(DefaultLoadingContext).ccu = function (id, assertion, dynamic) {
    if (!(id == null)) {
      registerById(this, id, assertion, dynamic);
    }
    var _iterator__ex2g4s = this.kct_1.p();
    $l$loop: while (_iterator__ex2g4s.q()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.r();
      var baseId = _destruct__k2r9zo.dc();
      var location = _destruct__k2r9zo.ec();
      var relativePointer = relative(location, this.jct_1);
      var referenceId = buildRefId(baseId.rcf().fcf(relativePointer.toString()));
      if (equals(_RefId___get_uri__impl__5jqx24(referenceId), id)) {
        continue $l$loop;
      }
      register(this, referenceId, assertion, false);
    }
  };
  protoOf(DefaultLoadingContext).dcu = function (id, assertion, dynamic, $super) {
    dynamic = dynamic === VOID ? false : dynamic;
    var tmp;
    if ($super === VOID) {
      this.ccu(id, assertion, dynamic);
      tmp = Unit_instance;
    } else {
      tmp = $super.ccu.call(this, id, assertion, dynamic);
    }
    return tmp;
  };
  protoOf(DefaultLoadingContext).ecu = function (anchor, assertion, dynamic) {
    // Inline function 'kotlin.require' call
    if (!get_ANCHOR_REGEX().re(anchor)) {
      var message = anchor + ' must match the format ' + get_ANCHOR_REGEX().he_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var refId = buildRefId(last_0(this.kct_1).wct_1.rcf().ecf(anchor));
    register(this, refId, assertion, dynamic);
  };
  protoOf(DefaultLoadingContext).fcu = function (additionalId) {
    var tmp;
    if (additionalId.lcf()) {
      tmp = this.qct(VOID, VOID, VOID, plus_1(this.kct_1, new IdWithLocation(additionalId, this.jct_1)));
    } else {
      var tmp_0;
      if (additionalId.kcf()) {
        // Inline function 'kotlin.text.isNullOrBlank' call
        var this_0 = additionalId.pcf();
        tmp_0 = !(this_0 == null || isBlank(this_0));
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        // Inline function 'kotlin.run' call
        var $this$run = this.kct_1;
        var tmp$ret$2 = plus_1($this$run, new IdWithLocation(resolvePath(this.kct_1, additionalId.pcf()), this.jct_1));
        tmp = this.qct(VOID, VOID, VOID, tmp$ret$2);
      } else {
        tmp = this;
      }
    }
    return tmp;
  };
  protoOf(DefaultLoadingContext).gcu = function (refId) {
    var refUri = Companion_getInstance().aq(refId).rcf().x2x();
    var tmp;
    if (refUri.lcf()) {
      tmp = buildRefId_0(refUri);
    } else {
      if (startsWith(refId, _Char___init__impl__6a9atx(47))) {
        tmp = buildRefId(last_0(this.kct_1).wct_1.rcf().wce(refUri.pcf()));
      } else {
        // Inline function 'kotlin.text.isNullOrBlank' call
        var this_0 = refUri.pcf();
        if (!(this_0 == null || isBlank(this_0))) {
          // Inline function 'kotlin.run' call
          var $this$run = resolvePath(this.kct_1, refUri.pcf());
          var tmp_0;
          // Inline function 'kotlin.text.isNullOrBlank' call
          var this_1 = refUri.v36();
          if (this_1 == null || isBlank(this_1)) {
            tmp_0 = $this$run;
          } else {
            tmp_0 = $this$run.rcf().fcf(refUri.v36()).x2x();
          }
          var tmp$ret$3 = tmp_0;
          tmp = buildRefId_0(tmp$ret$3);
        } else {
          if (!(refUri.v36() == null)) {
            tmp = buildRefId(last_0(this.kct_1).wct_1.rcf().fcf(refUri.v36()));
          } else {
            throw IllegalArgumentException_init_$Create$("invalid reference '" + refId + "'");
          }
        }
      }
    }
    // Inline function 'kotlin.also' call
    var this_2 = new RefId(tmp);
    var it = this_2.wcr_1;
    var tmp0 = this.mct_1;
    // Inline function 'kotlin.collections.plusAssign' call
    var element = new ReferenceLocation(this.jct_1, it);
    tmp0.n(element);
    return this_2.wcr_1;
  };
  protoOf(DefaultLoadingContext).hcu = function (schemaDefinition) {
    this.ict_1 = this.nct_1.icu().jcu(schemaDefinition);
  };
  protoOf(DefaultLoadingContext).kcu = function (baseId, recursiveResolution, schemaPath, additionalIDs, references, usedRef, config, assertionFactories, customFormatValidators) {
    return new DefaultLoadingContext(baseId, recursiveResolution, schemaPath, additionalIDs, references, usedRef, config, assertionFactories, customFormatValidators);
  };
  protoOf(DefaultLoadingContext).qct = function (baseId, recursiveResolution, schemaPath, additionalIDs, references, usedRef, config, assertionFactories, customFormatValidators, $super) {
    baseId = baseId === VOID ? this.hct_1 : baseId;
    recursiveResolution = recursiveResolution === VOID ? this.ict_1 : recursiveResolution;
    schemaPath = schemaPath === VOID ? this.jct_1 : schemaPath;
    additionalIDs = additionalIDs === VOID ? this.kct_1 : additionalIDs;
    references = references === VOID ? this.lct_1 : references;
    usedRef = usedRef === VOID ? this.mct_1 : usedRef;
    config = config === VOID ? this.nct_1 : config;
    assertionFactories = assertionFactories === VOID ? this.oct_1 : assertionFactories;
    customFormatValidators = customFormatValidators === VOID ? this.pct_1 : customFormatValidators;
    return $super === VOID ? this.kcu(baseId, recursiveResolution, schemaPath, additionalIDs, references, usedRef, config, assertionFactories, customFormatValidators) : $super.kcu.call(this, baseId, recursiveResolution, schemaPath, additionalIDs, references, usedRef, config, assertionFactories, customFormatValidators);
  };
  protoOf(DefaultLoadingContext).toString = function () {
    return 'DefaultLoadingContext(baseId=' + toString(this.hct_1) + ', recursiveResolution=' + this.ict_1 + ', schemaPath=' + this.jct_1.toString() + ', additionalIDs=' + toString(this.kct_1) + ', references=' + toString(this.lct_1) + ', usedRef=' + toString(this.mct_1) + ', config=' + toString(this.nct_1) + ', assertionFactories=' + toString(this.oct_1) + ', customFormatValidators=' + toString(this.pct_1) + ')';
  };
  protoOf(DefaultLoadingContext).hashCode = function () {
    var result = hashCode(this.hct_1);
    result = imul(result, 31) + getBooleanHashCode(this.ict_1) | 0;
    result = imul(result, 31) + this.jct_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.kct_1) | 0;
    result = imul(result, 31) + hashCode(this.lct_1) | 0;
    result = imul(result, 31) + hashCode(this.mct_1) | 0;
    result = imul(result, 31) + hashCode(this.nct_1) | 0;
    result = imul(result, 31) + hashCode(this.oct_1) | 0;
    result = imul(result, 31) + hashCode(this.pct_1) | 0;
    return result;
  };
  protoOf(DefaultLoadingContext).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DefaultLoadingContext))
      return false;
    var tmp0_other_with_cast = other instanceof DefaultLoadingContext ? other : THROW_CCE();
    if (!equals(this.hct_1, tmp0_other_with_cast.hct_1))
      return false;
    if (!(this.ict_1 === tmp0_other_with_cast.ict_1))
      return false;
    if (!this.jct_1.equals(tmp0_other_with_cast.jct_1))
      return false;
    if (!equals(this.kct_1, tmp0_other_with_cast.kct_1))
      return false;
    if (!equals(this.lct_1, tmp0_other_with_cast.lct_1))
      return false;
    if (!equals(this.mct_1, tmp0_other_with_cast.mct_1))
      return false;
    if (!equals(this.nct_1, tmp0_other_with_cast.nct_1))
      return false;
    if (!equals(this.oct_1, tmp0_other_with_cast.oct_1))
      return false;
    if (!equals(this.pct_1, tmp0_other_with_cast.pct_1))
      return false;
    return true;
  };
  function IdWithLocation(id, location) {
    this.wct_1 = id;
    this.xct_1 = location;
  }
  protoOf(IdWithLocation).dc = function () {
    return this.wct_1;
  };
  protoOf(IdWithLocation).ec = function () {
    return this.xct_1;
  };
  protoOf(IdWithLocation).toString = function () {
    return 'IdWithLocation(id=' + toString(this.wct_1) + ', location=' + this.xct_1.toString() + ')';
  };
  protoOf(IdWithLocation).hashCode = function () {
    var result = hashCode(this.wct_1);
    result = imul(result, 31) + this.xct_1.hashCode() | 0;
    return result;
  };
  protoOf(IdWithLocation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IdWithLocation))
      return false;
    var tmp0_other_with_cast = other instanceof IdWithLocation ? other : THROW_CCE();
    if (!equals(this.wct_1, tmp0_other_with_cast.wct_1))
      return false;
    if (!this.xct_1.equals(tmp0_other_with_cast.xct_1))
      return false;
    return true;
  };
  function defaultLoadingContext(baseId, config, assertionFactories, references, customFormats) {
    _init_properties_SchemaLoader_kt__khu75g();
    return new DefaultLoadingContext(baseId, VOID, VOID, VOID, references, VOID, config, assertionFactories, customFormats);
  }
  function loadSchema(schemaDefinition, context) {
    _init_properties_SchemaLoader_kt__khu75g();
    // Inline function 'kotlin.require' call
    if (!context.bcu(schemaDefinition)) {
      var message = 'schema must be either a valid JSON object or boolean';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var additionalId = extractID(schemaDefinition, context.nct_1);
    var tmp;
    if (additionalId == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = context.fcu(additionalId);
    }
    var tmp1_elvis_lhs = tmp;
    var contextWithAdditionalID = tmp1_elvis_lhs == null ? context : tmp1_elvis_lhs;
    var referenceFactory = context.nct_1.icu();
    var tmp_0;
    if (schemaDefinition instanceof JsonPrimitive) {
      var tmp_1;
      if (get_boolean(schemaDefinition)) {
        tmp_1 = TrueSchemaAssertion_instance;
      } else {
        tmp_1 = new FalseSchemaAssertion(context.jct_1);
      }
      tmp_0 = tmp_1;
    } else {
      if (schemaDefinition instanceof JsonObject) {
        if (!(additionalId == null)) {
          contextWithAdditionalID.hcu(schemaDefinition);
        }
        var refLoadingContext = referenceFactory.lcu() ? contextWithAdditionalID : context;
        var extractedRef = referenceFactory.mcu(schemaDefinition, refLoadingContext);
        var tmp_2;
        if (!(extractedRef == null)) {
          tmp_2 = loadRefAssertion(extractedRef, refLoadingContext);
        } else {
          tmp_2 = null;
        }
        var refAssertion = tmp_2;
        var tmp_3;
        if (!(refAssertion == null) && !referenceFactory.ncu()) {
          tmp_3 = new JsonSchemaRoot(last_0(contextWithAdditionalID.kct_1).wct_1, contextWithAdditionalID.jct_1, listOf(refAssertion), contextWithAdditionalID.ict_1);
        } else {
          tmp_3 = loadJsonSchemaRoot(contextWithAdditionalID, schemaDefinition, refAssertion);
        }
        tmp_0 = tmp_3;
      } else {
        throw IllegalArgumentException_init_$Create$('schema must be either a valid JSON object or boolean');
      }
    }
    // Inline function 'kotlin.apply' call
    var this_0 = tmp_0;
    loadDefinitions(schemaDefinition, contextWithAdditionalID);
    context.dcu(additionalId, this_0);
    registerWithAnchor(this_0, context.nct_1.uct().vct(KeyWord_ANCHOR_getInstance()), schemaDefinition, contextWithAdditionalID);
    registerWithAnchor(this_0, context.nct_1.uct().vct(KeyWord_DYNAMIC_ANCHOR_getInstance()), schemaDefinition, contextWithAdditionalID, true);
    return this_0;
  }
  function buildRefId(_this__u8e3s4) {
    _init_properties_SchemaLoader_kt__khu75g();
    return buildRefId_0(_this__u8e3s4.x2x());
  }
  function resolvePath(_this__u8e3s4, path) {
    _init_properties_SchemaLoader_kt__khu75g();
    var tmp = last_0(_this__u8e3s4).wct_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (path == null) {
        var message = 'path is null';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = path;
        break $l$block;
      }
    }
    return appendPathToParent(tmp, tmp$ret$1);
  }
  function buildRefId_0(_this__u8e3s4) {
    _init_properties_SchemaLoader_kt__khu75g();
    return _RefId___init__impl__x6mpp1(_this__u8e3s4);
  }
  function appendPathToParent(_this__u8e3s4, path) {
    _init_properties_SchemaLoader_kt__khu75g();
    if (startsWith(path, _Char___init__impl__6a9atx(47))) {
      return _this__u8e3s4.rcf().wce(path).x2x();
    }
    var hasLastEmptySegment = endsWith(toString(_this__u8e3s4), _Char___init__impl__6a9atx(47));
    var tmp;
    if (hasLastEmptySegment) {
      tmp = _this__u8e3s4.rcf();
    } else {
      // Inline function 'kotlin.apply' call
      var this_0 = _this__u8e3s4.rcf().sce(null);
      $l$block: {
        if (_this__u8e3s4.w36().h()) {
          break $l$block;
        }
        // Inline function 'kotlin.sequences.forEach' call
        var _iterator__ex2g4s = take(asSequence_0(_this__u8e3s4.w36()), _this__u8e3s4.w36().s() - 1 | 0).p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          appendPathToParent$appendPath(this_0, element);
        }
      }
      tmp = this_0;
    }
    return tmp.acf(path).x2x();
  }
  function loadDefinitions(schemaDefinition, context) {
    _init_properties_SchemaLoader_kt__khu75g();
    if (!(schemaDefinition instanceof JsonObject)) {
      return Unit_instance;
    }
    // Inline function 'kotlin.run' call
    var $this$run = context.nct_1.uct();
    var tmp0_safe_receiver = $this$run.vct(KeyWord_DEFINITIONS_getInstance());
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = to(tmp0_safe_receiver, schemaDefinition.af(tmp0_safe_receiver));
    }
    var tmp1_safe_receiver = tmp;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_1;
      if (!(tmp1_safe_receiver.cc_1 == null)) {
        tmp_1 = tmp1_safe_receiver;
      } else {
        tmp_1 = null;
      }
      tmp_0 = tmp_1;
    }
    var tmp2_elvis_lhs = tmp_0;
    var tmp_2;
    if (tmp2_elvis_lhs == null) {
      var tmp3_safe_receiver = $this$run.vct(KeyWord_COMPATIBILITY_DEFINITIONS_getInstance());
      var tmp_3;
      if (tmp3_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_3 = to(tmp3_safe_receiver, schemaDefinition.af(tmp3_safe_receiver));
      }
      var tmp4_safe_receiver = tmp_3;
      var tmp_4;
      if (tmp4_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_5;
        if (!(tmp4_safe_receiver.cc_1 == null)) {
          tmp_5 = tmp4_safe_receiver;
        } else {
          tmp_5 = null;
        }
        tmp_4 = tmp_5;
      }
      tmp_2 = tmp_4;
    } else {
      tmp_2 = tmp2_elvis_lhs;
    }
    var tmp0_elvis_lhs = tmp_2;
    var tmp_6;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_6 = tmp0_elvis_lhs;
    }
    var _destruct__k2r9zo = tmp_6;
    var definitionsProperty = _destruct__k2r9zo.dc();
    var definitionsElement = _destruct__k2r9zo.ec();
    if (definitionsElement == null) {
      return Unit_instance;
    }
    // Inline function 'kotlin.require' call
    if (!(definitionsElement instanceof JsonObject)) {
      var message = definitionsProperty + ' must be an object';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var definitionsContext = context.acr(definitionsProperty);
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = definitionsElement.z().p();
    while (_iterator__ex2g4s.q()) {
      var _destruct__k2r9zo_0 = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var name = _destruct__k2r9zo_0.a1();
      // Inline function 'kotlin.collections.component2' call
      var element = _destruct__k2r9zo_0.b1();
      loadSchema(element, definitionsContext.acr(name));
    }
  }
  function registerWithAnchor(_this__u8e3s4, anchorProperty, schemaDefinition, contextWithAdditionalID, dynamic) {
    dynamic = dynamic === VOID ? false : dynamic;
    _init_properties_SchemaLoader_kt__khu75g();
    var tmp;
    if (!(anchorProperty == null)) {
      tmp = schemaDefinition instanceof JsonObject;
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp0_safe_receiver = getString(schemaDefinition, anchorProperty);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.also' call
        contextWithAdditionalID.ecu(tmp0_safe_receiver, _this__u8e3s4, dynamic);
      }
    }
  }
  function loadRefAssertion(refHolder, context) {
    _init_properties_SchemaLoader_kt__khu75g();
    var tmp;
    if (refHolder instanceof Simple) {
      tmp = new RefSchemaAssertion(div(context.jct_1, refHolder.qcu_1), refHolder.rcu_1);
    } else {
      if (refHolder instanceof Recursive) {
        tmp = new RecursiveRefSchemaAssertion(div(context.jct_1, refHolder.ocu_1), refHolder.pcu_1);
      } else {
        noWhenBranchMatchedException();
      }
    }
    return tmp;
  }
  function loadJsonSchemaRoot(context, schemaDefinition, refAssertion) {
    _init_properties_SchemaLoader_kt__khu75g();
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = context.oct_1;
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      if (element.scu(schemaDefinition)) {
        destination.n(element);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var _iterator__ex2g4s_0 = destination.p();
    while (_iterator__ex2g4s_0.q()) {
      var item = _iterator__ex2g4s_0.r();
      var tmp$ret$3 = item.tcu(schemaDefinition, context);
      destination_0.n(tmp$ret$3);
    }
    var assertions = destination_0;
    var tmp = assertions.s();
    var tmp_0;
    if (refAssertion == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = 1;
    }
    var tmp1_elvis_lhs = tmp_0;
    // Inline function 'kotlin.collections.buildList' call
    // Inline function 'kotlin.collections.buildListInternal' call
    var capacity = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    checkBuilderCapacity(capacity);
    // Inline function 'kotlin.apply' call
    var this_0 = ArrayList_init_$Create$(capacity);
    if (refAssertion == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      loadJsonSchemaRoot$add(this_0, refAssertion);
    }
    this_0.t(assertions);
    var result = this_0.x3();
    return new JsonSchemaRoot(last_0(context.kct_1).wct_1, context.jct_1, result, context.ict_1);
  }
  function appendPathToParent$appendPath(receiver, p0) {
    receiver.yce(p0);
  }
  function loadJsonSchemaRoot$add(receiver, p0) {
    receiver.n(p0);
  }
  function createSchema$lambda(it) {
    _init_properties_SchemaLoader_kt__khu75g();
    return it.b1().fcs_1;
  }
  function createSchema$lambda_0(it) {
    _init_properties_SchemaLoader_kt__khu75g();
    return it.a1();
  }
  function createSchema$lambda_1($result, $dynamicRefs) {
    return function (it) {
      return $result.tct_1.w(it.a1()) || $dynamicRefs.w(it.a1());
    };
  }
  var properties_initialized_SchemaLoader_kt_2ljyhi;
  function _init_properties_SchemaLoader_kt__khu75g() {
    if (!properties_initialized_SchemaLoader_kt_2ljyhi) {
      properties_initialized_SchemaLoader_kt_2ljyhi = true;
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = '^[A-Za-z][A-Za-z0-9-_:.]*$';
      ANCHOR_REGEX = Regex_init_$Create$(this_0);
    }
  }
  function Vocabulary(vocabularies) {
    vocabularies = vocabularies === VOID ? emptyMap() : vocabularies;
    this.ucu_1 = vocabularies;
  }
  protoOf(Vocabulary).vcu = function (vocabulary) {
    var tmp0_elvis_lhs = this.ucu_1.m2(vocabulary);
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  };
  function Options(options) {
    this.wcu_1 = options;
  }
  protoOf(Options).xcu = function (option) {
    var tmp0_safe_receiver = this.wcu_1.m2(option);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var $receiver = option.tcp_1;
      tmp = cast($receiver, tmp0_safe_receiver);
    }
    return tmp;
  };
  function Simple(property, refId) {
    RefHolder.call(this);
    this.qcu_1 = property;
    this.rcu_1 = refId;
  }
  protoOf(Simple).toString = function () {
    return 'Simple(property=' + this.qcu_1 + ', refId=' + RefId__toString_impl_qgdkr7(this.rcu_1) + ')';
  };
  protoOf(Simple).hashCode = function () {
    var result = getStringHashCode(this.qcu_1);
    result = imul(result, 31) + RefId__hashCode_impl_4p7nyc(this.rcu_1) | 0;
    return result;
  };
  protoOf(Simple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Simple))
      return false;
    var tmp0_other_with_cast = other instanceof Simple ? other : THROW_CCE();
    if (!(this.qcu_1 === tmp0_other_with_cast.qcu_1))
      return false;
    if (!equals(this.rcu_1, tmp0_other_with_cast.rcu_1))
      return false;
    return true;
  };
  function Recursive(property, refId) {
    RefHolder.call(this);
    this.ocu_1 = property;
    this.pcu_1 = refId;
  }
  protoOf(Recursive).toString = function () {
    return 'Recursive(property=' + this.ocu_1 + ', refId=' + RefId__toString_impl_qgdkr7(this.pcu_1) + ')';
  };
  protoOf(Recursive).hashCode = function () {
    var result = getStringHashCode(this.ocu_1);
    result = imul(result, 31) + RefId__hashCode_impl_4p7nyc(this.pcu_1) | 0;
    return result;
  };
  protoOf(Recursive).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Recursive))
      return false;
    var tmp0_other_with_cast = other instanceof Recursive ? other : THROW_CCE();
    if (!(this.ocu_1 === tmp0_other_with_cast.ocu_1))
      return false;
    if (!equals(this.pcu_1, tmp0_other_with_cast.pcu_1))
      return false;
    return true;
  };
  function RefHolder() {
  }
  function allFactories($this) {
    return plus($this.ycu_1, $this.zcu_1);
  }
  function Draft201909SchemaLoaderConfig() {
    Draft201909SchemaLoaderConfig_instance = this;
    this.ycu_1 = listOf_0([ItemsAssertionFactory_getInstance(), AdditionalItemsAssertionFactory_getInstance(), ContainsAssertionFactory_getInstance(), PropertiesAssertionFactory_getInstance(), PatternPropertiesAssertionFactory_getInstance(), AdditionalPropertiesAssertionFactory_getInstance(), PropertyNamesAssertionFactory_getInstance(), DependentSchemasAssertionFactory_getInstance(), IfAssertionFactory_getInstance(), ThenAssertionFactory_getInstance(), ElseAssertionFactory_getInstance(), AllOfAssertionFactory_getInstance(), AnyOfAssertionFactory_getInstance(), OneOfAssertionFactory_getInstance(), NotAssertionFactory_getInstance(), UnevaluatedItemsAssertionFactory_getInstance(), UnevaluatedPropertiesAssertionFactory_getInstance()]);
    this.zcu_1 = listOf_0([MultipleOfAssertionFactory_getInstance(), MaximumAssertionFactory_getInstance(), ExclusiveMaximumAssertionFactory_getInstance(), MinimumAssertionFactory_getInstance(), ExclusiveMinimumAssertionFactory_getInstance(), MaxLengthAssertionFactory_getInstance(), MinLengthAssertionFactory_getInstance(), PatternAssertionFactory_getInstance(), MaxItemsAssertionFactory_getInstance(), MinItemsAssertionFactory_getInstance(), MinContainsAssertionFactory_getInstance(), MaxContainsAssertionFactory_getInstance(), UniqueItemsAssertionFactory_getInstance(), MaxPropertiesAssertionFactory_getInstance(), MinPropertiesAssertionFactory_getInstance(), RequiredAssertionFactory_getInstance(), DependentRequiredAssertionFactory_getInstance(), ConstAssertionFactory_getInstance(), EnumAssertionFactory_getInstance(), TypeAssertionFactory_getInstance()]);
    var tmp = this;
    var tmp0 = this.ect(Default_getInstance().h4s(Draft201909_DRAFT201909_SCHEMA_getInstance().ecv_1));
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'draft schema must have a vocabulary';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    tmp.acv_1 = tmp$ret$1;
    this.bcv_1 = plus(this.ycu_1, this.zcu_1);
  }
  protoOf(Draft201909SchemaLoaderConfig).fct = function () {
    return this.acv_1;
  };
  protoOf(Draft201909SchemaLoaderConfig).ect = function (schemaDefinition) {
    var tmp;
    if (!(schemaDefinition instanceof JsonObject)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key = '$vocabulary';
      tmp = !(isInterface(schemaDefinition, KtMap) ? schemaDefinition : THROW_CCE()).k2(key);
    }
    if (tmp) {
      return null;
    }
    var vocabulary = getValue(schemaDefinition, '$vocabulary');
    // Inline function 'kotlin.require' call
    if (!(vocabulary instanceof JsonObject)) {
      var message = '$vocabulary must be a JSON object';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (vocabulary.h()) {
      return null;
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(vocabulary.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = vocabulary.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp_0 = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var state = element.b1();
      var tmp$ret$6 = get_boolean(get_jsonPrimitive(state));
      destination.p2(tmp_0, tmp$ret$6);
    }
    return new Vocabulary(destination);
  };
  protoOf(Draft201909SchemaLoaderConfig).gct = function (schemaDefinition, vocabulary, options) {
    if (!(schemaDefinition instanceof JsonObject)) {
      return emptyList();
    }
    var applicators = vocabulary.vcu('https://json-schema.org/draft/2019-09/vocab/applicator');
    var validations = vocabulary.vcu('https://json-schema.org/draft/2019-09/vocab/validation');
    var tmp0_safe_receiver = options.xcu(Companion_getInstance_9().scp_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = tmp0_safe_receiver.equals(FormatBehavior_ANNOTATION_AND_ASSERTION_getInstance());
    }
    var tmp1_elvis_lhs = tmp;
    var formatAssertion = tmp1_elvis_lhs == null ? vocabulary.vcu('https://json-schema.org/draft/2019-09/vocab/format') : tmp1_elvis_lhs;
    var tmp_0;
    if (formatAssertion) {
      tmp_0 = AnnotationAndAssertion_getInstance();
    } else {
      tmp_0 = AnnotationOnly_getInstance();
    }
    var formatFactory = tmp_0;
    // Inline function 'kotlin.let' call
    var factories = applicators && validations ? allFactories(this) : applicators ? this.ycu_1 : validations ? this.zcu_1 : emptyList();
    var tmp_1;
    if (factories.h()) {
      tmp_1 = listOf(formatFactory);
    } else {
      tmp_1 = plus_2(factories, formatFactory);
    }
    return tmp_1;
  };
  protoOf(Draft201909SchemaLoaderConfig).uct = function () {
    return Draft201909KeyWordResolver_instance;
  };
  protoOf(Draft201909SchemaLoaderConfig).icu = function () {
    return Draft201909ReferenceFactory_instance;
  };
  var Draft201909SchemaLoaderConfig_instance;
  function Draft201909SchemaLoaderConfig_getInstance() {
    if (Draft201909SchemaLoaderConfig_instance == null)
      new Draft201909SchemaLoaderConfig();
    return Draft201909SchemaLoaderConfig_instance;
  }
  function Draft201909KeyWordResolver() {
    this.fcv_1 = '$anchor';
    this.gcv_1 = '$id';
    this.hcv_1 = '$defs';
    this.icv_1 = 'definitions';
    this.jcv_1 = '$ref';
    this.kcv_1 = '$recursiveRef';
    this.lcv_1 = '$recursiveAnchor';
  }
  protoOf(Draft201909KeyWordResolver).vct = function (keyword) {
    var tmp;
    switch (keyword.t2_1) {
      case 0:
        tmp = '$id';
        break;
      case 1:
        tmp = '$anchor';
        break;
      case 3:
        tmp = '$defs';
        break;
      case 4:
        tmp = 'definitions';
        break;
      case 2:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Draft201909KeyWordResolver_instance;
  function Draft201909KeyWordResolver_getInstance() {
    return Draft201909KeyWordResolver_instance;
  }
  function Draft201909ReferenceFactory() {
  }
  protoOf(Draft201909ReferenceFactory).mcu = function (schemaDefinition, context) {
    var tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(schemaDefinition, KtMap) ? schemaDefinition : THROW_CCE()).k2('$ref')) {
      // Inline function 'kotlin.let' call
      var p0 = getStringRequired(schemaDefinition, '$ref');
      var tmp$ret$3 = context.gcu(p0);
      tmp = new Simple('$ref', tmp$ret$3);
    } else {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key = '$recursiveRef';
      if ((isInterface(schemaDefinition, KtMap) ? schemaDefinition : THROW_CCE()).k2(key)) {
        var recRef = getStringRequired(schemaDefinition, '$recursiveRef');
        // Inline function 'kotlin.require' call
        if (!(recRef === '#')) {
          var message = 'only ref to root is supported by $recursiveRef';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        tmp = new Recursive('$recursiveRef', context.gcu(recRef));
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(Draft201909ReferenceFactory).ncu = function () {
    return true;
  };
  protoOf(Draft201909ReferenceFactory).lcu = function () {
    return true;
  };
  protoOf(Draft201909ReferenceFactory).jcu = function (schemaDefinition) {
    var tmp0_safe_receiver = schemaDefinition.af('$recursiveAnchor');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : get_boolean(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  };
  var Draft201909ReferenceFactory_instance;
  function Draft201909ReferenceFactory_getInstance() {
    return Draft201909ReferenceFactory_instance;
  }
  function appendFormatFactory($this, _this__u8e3s4, formatAnnotations, formatAssertions) {
    var tmp;
    if (formatAnnotations || formatAssertions) {
      var tmp_0;
      if (formatAssertions) {
        tmp_0 = AnnotationAndAssertion_getInstance();
      } else {
        tmp_0 = AnnotationOnly_getInstance();
      }
      tmp = plus_2(_this__u8e3s4, tmp_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function appendUnevaluatedFactory($this, _this__u8e3s4, allEnabled, unevaluated) {
    var tmp;
    var tmp_0;
    var tmp_1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!_this__u8e3s4.h()) {
      tmp_1 = !allEnabled;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = unevaluated;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = plus(_this__u8e3s4, $this.ncv_1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function allFactories_0($this) {
    return plus(plus($this.mcv_1, $this.ocv_1), $this.ncv_1);
  }
  function Draft202012SchemaLoaderConfig() {
    Draft202012SchemaLoaderConfig_instance = this;
    this.mcv_1 = listOf_0([PrefixItemsAssertionFactory_getInstance(), ItemsAssertionFactoryDraft202012_getInstance(), ContainsAssertionFactoryDraft202012_getInstance(), PropertiesAssertionFactory_getInstance(), PatternPropertiesAssertionFactory_getInstance(), AdditionalPropertiesAssertionFactory_getInstance(), PropertyNamesAssertionFactory_getInstance(), DependentSchemasAssertionFactory_getInstance(), IfAssertionFactory_getInstance(), ThenAssertionFactory_getInstance(), ElseAssertionFactory_getInstance(), AllOfAssertionFactory_getInstance(), AnyOfAssertionFactory_getInstance(), OneOfAssertionFactory_getInstance(), NotAssertionFactory_getInstance()]);
    this.ncv_1 = listOf_0([UnevaluatedItemsAssertionFactoryDraft202012_getInstance(), UnevaluatedPropertiesAssertionFactory_getInstance()]);
    this.ocv_1 = listOf_0([MultipleOfAssertionFactory_getInstance(), MaximumAssertionFactory_getInstance(), ExclusiveMaximumAssertionFactory_getInstance(), MinimumAssertionFactory_getInstance(), ExclusiveMinimumAssertionFactory_getInstance(), MaxLengthAssertionFactory_getInstance(), MinLengthAssertionFactory_getInstance(), PatternAssertionFactory_getInstance(), MaxItemsAssertionFactory_getInstance(), MinItemsAssertionFactory_getInstance(), MinContainsAssertionFactoryDraft202012_getInstance(), MaxContainsAssertionFactoryDraft202012_getInstance(), UniqueItemsAssertionFactory_getInstance(), MaxPropertiesAssertionFactory_getInstance(), MinPropertiesAssertionFactory_getInstance(), RequiredAssertionFactory_getInstance(), DependentRequiredAssertionFactory_getInstance(), ConstAssertionFactory_getInstance(), EnumAssertionFactory_getInstance(), TypeAssertionFactory_getInstance()]);
    var tmp = this;
    var tmp0 = this.ect(Default_getInstance().h4s(Draft202012_DRAFT202012_SCHEMA_getInstance().tcv_1));
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'draft schema must have a vocabulary';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    tmp.pcv_1 = tmp$ret$1;
    this.qcv_1 = plus(this.mcv_1, this.ocv_1);
  }
  protoOf(Draft202012SchemaLoaderConfig).fct = function () {
    return this.pcv_1;
  };
  protoOf(Draft202012SchemaLoaderConfig).gct = function (schemaDefinition, vocabulary, options) {
    if (!(schemaDefinition instanceof JsonObject)) {
      return emptyList();
    }
    var applicators = vocabulary.vcu('https://json-schema.org/draft/2020-12/vocab/applicator');
    var validations = vocabulary.vcu('https://json-schema.org/draft/2020-12/vocab/validation');
    var unevaluated = vocabulary.vcu('https://json-schema.org/draft/2020-12/vocab/unevaluated');
    var formatBehavior = options.xcu(Companion_getInstance_9().scp_1);
    var tmp;
    if (formatBehavior == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = formatBehavior.equals(FormatBehavior_ANNOTATION_AND_ASSERTION_getInstance());
    }
    var tmp1_elvis_lhs = tmp;
    var formatAssertions = tmp1_elvis_lhs == null ? vocabulary.vcu('https://json-schema.org/draft/2020-12/vocab/format-assertion') : tmp1_elvis_lhs;
    var tmp_0;
    if (formatBehavior == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = formatBehavior.equals(FormatBehavior_ANNOTATION_ONLY_getInstance());
    }
    var tmp3_elvis_lhs = tmp_0;
    var formatAnnotations = tmp3_elvis_lhs == null ? vocabulary.vcu('https://json-schema.org/draft/2020-12/vocab/format-annotation') : tmp3_elvis_lhs;
    var allEnabled = applicators && validations && unevaluated;
    return appendFormatFactory(this, appendUnevaluatedFactory(this, allEnabled ? allFactories_0(this) : applicators && validations ? plus(this.mcv_1, this.ocv_1) : applicators ? this.mcv_1 : validations ? this.ocv_1 : emptyList(), allEnabled, unevaluated), formatAnnotations, formatAssertions);
  };
  protoOf(Draft202012SchemaLoaderConfig).uct = function () {
    return Draft202012KeyWordResolver_instance;
  };
  protoOf(Draft202012SchemaLoaderConfig).icu = function () {
    return Draft202012ReferenceFactory_instance;
  };
  protoOf(Draft202012SchemaLoaderConfig).ect = function (schemaDefinition) {
    var tmp;
    if (!(schemaDefinition instanceof JsonObject)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key = '$vocabulary';
      tmp = !(isInterface(schemaDefinition, KtMap) ? schemaDefinition : THROW_CCE()).k2(key);
    }
    if (tmp) {
      return null;
    }
    var vocabulary = getValue(schemaDefinition, '$vocabulary');
    // Inline function 'kotlin.require' call
    if (!(vocabulary instanceof JsonObject)) {
      var message = '$vocabulary must be a JSON object';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (vocabulary.h()) {
      return null;
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(vocabulary.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = vocabulary.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp_0 = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var state = element.b1();
      var tmp$ret$6 = get_boolean(get_jsonPrimitive(state));
      destination.p2(tmp_0, tmp$ret$6);
    }
    return new Vocabulary(destination);
  };
  var Draft202012SchemaLoaderConfig_instance;
  function Draft202012SchemaLoaderConfig_getInstance() {
    if (Draft202012SchemaLoaderConfig_instance == null)
      new Draft202012SchemaLoaderConfig();
    return Draft202012SchemaLoaderConfig_instance;
  }
  function Draft202012KeyWordResolver() {
    this.ucv_1 = '$anchor';
    this.vcv_1 = '$id';
    this.wcv_1 = '$defs';
    this.xcv_1 = 'definitions';
    this.ycv_1 = '$ref';
    this.zcv_1 = '$dynamicRef';
    this.acw_1 = '$dynamicAnchor';
  }
  protoOf(Draft202012KeyWordResolver).vct = function (keyword) {
    var tmp;
    switch (keyword.t2_1) {
      case 0:
        tmp = '$id';
        break;
      case 1:
        tmp = '$anchor';
        break;
      case 3:
        tmp = '$defs';
        break;
      case 4:
        tmp = 'definitions';
        break;
      case 2:
        tmp = '$dynamicAnchor';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Draft202012KeyWordResolver_instance;
  function Draft202012KeyWordResolver_getInstance() {
    return Draft202012KeyWordResolver_instance;
  }
  function Draft202012ReferenceFactory() {
  }
  protoOf(Draft202012ReferenceFactory).mcu = function (schemaDefinition, context) {
    var tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(schemaDefinition, KtMap) ? schemaDefinition : THROW_CCE()).k2('$ref')) {
      // Inline function 'kotlin.let' call
      var p0 = getStringRequired(schemaDefinition, '$ref');
      var tmp$ret$3 = context.gcu(p0);
      tmp = new Simple('$ref', tmp$ret$3);
    } else {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key = '$dynamicRef';
      if ((isInterface(schemaDefinition, KtMap) ? schemaDefinition : THROW_CCE()).k2(key)) {
        var recRef = getStringRequired(schemaDefinition, '$dynamicRef');
        tmp = new Recursive('$dynamicRef', context.gcu(recRef));
      } else {
        tmp = null;
      }
    }
    return tmp;
  };
  protoOf(Draft202012ReferenceFactory).ncu = function () {
    return true;
  };
  protoOf(Draft202012ReferenceFactory).lcu = function () {
    return true;
  };
  protoOf(Draft202012ReferenceFactory).jcu = function (schemaDefinition) {
    return false;
  };
  var Draft202012ReferenceFactory_instance;
  function Draft202012ReferenceFactory_getInstance() {
    return Draft202012ReferenceFactory_instance;
  }
  function Draft4SchemaLoaderConfig() {
    Draft4SchemaLoaderConfig_instance = this;
    this.bcw_1 = listOf_0([TypeAssertionFactory_getInstance(), EnumAssertionFactory_getInstance(), ConstAssertionFactory_getInstance(), MultipleOfAssertionFactory_getInstance(), Draft4MaximumAssertionFactory_instance, Draft4MinimumAssertionFactory_instance, MinimumAssertionFactory_getInstance(), MaxLengthAssertionFactory_getInstance(), MinLengthAssertionFactory_getInstance(), PatternAssertionFactory_getInstance(), ItemsAssertionFactory_getInstance(), AdditionalItemsAssertionFactory_getInstance(), MaxItemsAssertionFactory_getInstance(), MinItemsAssertionFactory_getInstance(), UniqueItemsAssertionFactory_getInstance(), ContainsAssertionFactory_getInstance(), MaxPropertiesAssertionFactory_getInstance(), MinPropertiesAssertionFactory_getInstance(), RequiredAssertionFactory_getInstance(), PropertiesAssertionFactory_getInstance(), PatternPropertiesAssertionFactory_getInstance(), AdditionalPropertiesAssertionFactory_getInstance(), PropertyNamesAssertionFactory_getInstance(), DependenciesAssertionFactory_getInstance(), AllOfAssertionFactory_getInstance(), AnyOfAssertionFactory_getInstance(), OneOfAssertionFactory_getInstance(), NotAssertionFactory_getInstance()]);
    this.ccw_1 = new Vocabulary();
  }
  protoOf(Draft4SchemaLoaderConfig).fct = function () {
    return this.ccw_1;
  };
  protoOf(Draft4SchemaLoaderConfig).ect = function (schemaDefinition) {
    return null;
  };
  protoOf(Draft4SchemaLoaderConfig).gct = function (schemaDefinition, vocabulary, options) {
    var tmp0_subject = options.xcu(Companion_getInstance_9().scp_1);
    var tmp;
    switch (tmp0_subject == null ? -1 : tmp0_subject.t2_1) {
      case -1:
      case 1:
        tmp = AnnotationAndAssertion_getInstance();
        break;
      case 0:
        tmp = AnnotationOnly_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return plus_2(this.bcw_1, tmp);
  };
  protoOf(Draft4SchemaLoaderConfig).uct = function () {
    return Draft4KeyWordResolver_instance;
  };
  protoOf(Draft4SchemaLoaderConfig).icu = function () {
    return Draft4ReferenceFactory_instance;
  };
  var Draft4SchemaLoaderConfig_instance;
  function Draft4SchemaLoaderConfig_getInstance() {
    if (Draft4SchemaLoaderConfig_instance == null)
      new Draft4SchemaLoaderConfig();
    return Draft4SchemaLoaderConfig_instance;
  }
  function Draft4KeyWordResolver() {
    this.dcw_1 = 'definitions';
    this.ecw_1 = 'id';
    this.fcw_1 = '$ref';
  }
  protoOf(Draft4KeyWordResolver).vct = function (keyword) {
    var tmp;
    switch (keyword.t2_1) {
      case 0:
        tmp = 'id';
        break;
      case 3:
        tmp = 'definitions';
        break;
      case 1:
      case 4:
      case 2:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Draft4KeyWordResolver_instance;
  function Draft4KeyWordResolver_getInstance() {
    return Draft4KeyWordResolver_instance;
  }
  function Draft4ReferenceFactory() {
  }
  protoOf(Draft4ReferenceFactory).mcu = function (schemaDefinition, context) {
    var tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(schemaDefinition, KtMap) ? schemaDefinition : THROW_CCE()).k2('$ref')) {
      // Inline function 'kotlin.let' call
      var p0 = getStringRequired(schemaDefinition, '$ref');
      var tmp$ret$3 = context.gcu(p0);
      tmp = new Simple('$ref', tmp$ret$3);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(Draft4ReferenceFactory).ncu = function () {
    return false;
  };
  protoOf(Draft4ReferenceFactory).lcu = function () {
    return false;
  };
  protoOf(Draft4ReferenceFactory).jcu = function (schemaDefinition) {
    return true;
  };
  var Draft4ReferenceFactory_instance;
  function Draft4ReferenceFactory_getInstance() {
    return Draft4ReferenceFactory_instance;
  }
  function Draft6SchemaLoaderConfig() {
    Draft6SchemaLoaderConfig_instance = this;
    this.gcw_1 = listOf_0([TypeAssertionFactory_getInstance(), EnumAssertionFactory_getInstance(), ConstAssertionFactory_getInstance(), MultipleOfAssertionFactory_getInstance(), MaximumAssertionFactory_getInstance(), ExclusiveMaximumAssertionFactory_getInstance(), MinimumAssertionFactory_getInstance(), ExclusiveMinimumAssertionFactory_getInstance(), MaxLengthAssertionFactory_getInstance(), MinLengthAssertionFactory_getInstance(), PatternAssertionFactory_getInstance(), ItemsAssertionFactory_getInstance(), AdditionalItemsAssertionFactory_getInstance(), MaxItemsAssertionFactory_getInstance(), MinItemsAssertionFactory_getInstance(), UniqueItemsAssertionFactory_getInstance(), ContainsAssertionFactory_getInstance(), MaxPropertiesAssertionFactory_getInstance(), MinPropertiesAssertionFactory_getInstance(), RequiredAssertionFactory_getInstance(), PropertiesAssertionFactory_getInstance(), PatternPropertiesAssertionFactory_getInstance(), AdditionalPropertiesAssertionFactory_getInstance(), PropertyNamesAssertionFactory_getInstance(), DependenciesAssertionFactory_getInstance(), AllOfAssertionFactory_getInstance(), AnyOfAssertionFactory_getInstance(), OneOfAssertionFactory_getInstance(), NotAssertionFactory_getInstance()]);
    this.hcw_1 = new Vocabulary();
  }
  protoOf(Draft6SchemaLoaderConfig).fct = function () {
    return this.hcw_1;
  };
  protoOf(Draft6SchemaLoaderConfig).ect = function (schemaDefinition) {
    return null;
  };
  protoOf(Draft6SchemaLoaderConfig).gct = function (schemaDefinition, vocabulary, options) {
    var tmp0_subject = options.xcu(Companion_getInstance_9().scp_1);
    var tmp;
    switch (tmp0_subject == null ? -1 : tmp0_subject.t2_1) {
      case -1:
      case 1:
        tmp = AnnotationAndAssertion_getInstance();
        break;
      case 0:
        tmp = AnnotationOnly_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return plus_2(this.gcw_1, tmp);
  };
  protoOf(Draft6SchemaLoaderConfig).uct = function () {
    return Draft6KeyWordResolver_instance;
  };
  protoOf(Draft6SchemaLoaderConfig).icu = function () {
    return Draft6ReferenceFactory_instance;
  };
  var Draft6SchemaLoaderConfig_instance;
  function Draft6SchemaLoaderConfig_getInstance() {
    if (Draft6SchemaLoaderConfig_instance == null)
      new Draft6SchemaLoaderConfig();
    return Draft6SchemaLoaderConfig_instance;
  }
  function Draft6KeyWordResolver() {
    this.icw_1 = 'definitions';
    this.jcw_1 = '$id';
    this.kcw_1 = '$ref';
  }
  protoOf(Draft6KeyWordResolver).vct = function (keyword) {
    var tmp;
    switch (keyword.t2_1) {
      case 0:
        tmp = '$id';
        break;
      case 3:
        tmp = 'definitions';
        break;
      case 1:
      case 4:
      case 2:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Draft6KeyWordResolver_instance;
  function Draft6KeyWordResolver_getInstance() {
    return Draft6KeyWordResolver_instance;
  }
  function Draft6ReferenceFactory() {
  }
  protoOf(Draft6ReferenceFactory).mcu = function (schemaDefinition, context) {
    var tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(schemaDefinition, KtMap) ? schemaDefinition : THROW_CCE()).k2('$ref')) {
      // Inline function 'kotlin.let' call
      var p0 = getStringRequired(schemaDefinition, '$ref');
      var tmp$ret$3 = context.gcu(p0);
      tmp = new Simple('$ref', tmp$ret$3);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(Draft6ReferenceFactory).ncu = function () {
    return false;
  };
  protoOf(Draft6ReferenceFactory).lcu = function () {
    return false;
  };
  protoOf(Draft6ReferenceFactory).jcu = function (schemaDefinition) {
    return true;
  };
  var Draft6ReferenceFactory_instance;
  function Draft6ReferenceFactory_getInstance() {
    return Draft6ReferenceFactory_instance;
  }
  function Draft7SchemaLoaderConfig() {
    Draft7SchemaLoaderConfig_instance = this;
    this.lcw_1 = listOf_0([TypeAssertionFactory_getInstance(), EnumAssertionFactory_getInstance(), ConstAssertionFactory_getInstance(), MultipleOfAssertionFactory_getInstance(), MaximumAssertionFactory_getInstance(), ExclusiveMaximumAssertionFactory_getInstance(), MinimumAssertionFactory_getInstance(), ExclusiveMinimumAssertionFactory_getInstance(), MaxLengthAssertionFactory_getInstance(), MinLengthAssertionFactory_getInstance(), PatternAssertionFactory_getInstance(), ItemsAssertionFactory_getInstance(), AdditionalItemsAssertionFactory_getInstance(), MaxItemsAssertionFactory_getInstance(), MinItemsAssertionFactory_getInstance(), UniqueItemsAssertionFactory_getInstance(), ContainsAssertionFactory_getInstance(), MaxPropertiesAssertionFactory_getInstance(), MinPropertiesAssertionFactory_getInstance(), RequiredAssertionFactory_getInstance(), PropertiesAssertionFactory_getInstance(), PatternPropertiesAssertionFactory_getInstance(), AdditionalPropertiesAssertionFactory_getInstance(), PropertyNamesAssertionFactory_getInstance(), DependenciesAssertionFactory_getInstance(), IfAssertionFactory_getInstance(), ThenAssertionFactory_getInstance(), ElseAssertionFactory_getInstance(), AllOfAssertionFactory_getInstance(), AnyOfAssertionFactory_getInstance(), OneOfAssertionFactory_getInstance(), NotAssertionFactory_getInstance()]);
    this.mcw_1 = new Vocabulary();
  }
  protoOf(Draft7SchemaLoaderConfig).fct = function () {
    return this.mcw_1;
  };
  protoOf(Draft7SchemaLoaderConfig).ect = function (schemaDefinition) {
    return null;
  };
  protoOf(Draft7SchemaLoaderConfig).gct = function (schemaDefinition, vocabulary, options) {
    var tmp0_subject = options.xcu(Companion_getInstance_9().scp_1);
    var tmp;
    switch (tmp0_subject == null ? -1 : tmp0_subject.t2_1) {
      case -1:
      case 1:
        tmp = AnnotationAndAssertion_getInstance();
        break;
      case 0:
        tmp = AnnotationOnly_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return plus_2(this.lcw_1, tmp);
  };
  protoOf(Draft7SchemaLoaderConfig).uct = function () {
    return Draft7KeyWordResolver_instance;
  };
  protoOf(Draft7SchemaLoaderConfig).icu = function () {
    return Draft7ReferenceFactory_instance;
  };
  var Draft7SchemaLoaderConfig_instance;
  function Draft7SchemaLoaderConfig_getInstance() {
    if (Draft7SchemaLoaderConfig_instance == null)
      new Draft7SchemaLoaderConfig();
    return Draft7SchemaLoaderConfig_instance;
  }
  function Draft7KeyWordResolver() {
    this.ncw_1 = 'definitions';
    this.ocw_1 = '$id';
    this.pcw_1 = '$ref';
  }
  protoOf(Draft7KeyWordResolver).vct = function (keyword) {
    var tmp;
    switch (keyword.t2_1) {
      case 0:
        tmp = '$id';
        break;
      case 3:
        tmp = 'definitions';
        break;
      case 1:
      case 4:
      case 2:
        tmp = null;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  var Draft7KeyWordResolver_instance;
  function Draft7KeyWordResolver_getInstance() {
    return Draft7KeyWordResolver_instance;
  }
  function Draft7ReferenceFactory() {
  }
  protoOf(Draft7ReferenceFactory).mcu = function (schemaDefinition, context) {
    var tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(schemaDefinition, KtMap) ? schemaDefinition : THROW_CCE()).k2('$ref')) {
      // Inline function 'kotlin.let' call
      var p0 = getStringRequired(schemaDefinition, '$ref');
      var tmp$ret$3 = context.gcu(p0);
      tmp = new Simple('$ref', tmp$ret$3);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(Draft7ReferenceFactory).ncu = function () {
    return false;
  };
  protoOf(Draft7ReferenceFactory).lcu = function () {
    return false;
  };
  protoOf(Draft7ReferenceFactory).jcu = function (schemaDefinition) {
    return true;
  };
  var Draft7ReferenceFactory_instance;
  function Draft7ReferenceFactory_getInstance() {
    return Draft7ReferenceFactory_instance;
  }
  function AbstractAssertionFactory(property) {
    this.qcw_1 = property;
  }
  protoOf(AbstractAssertionFactory).rcw = function () {
    return this.qcw_1;
  };
  protoOf(AbstractAssertionFactory).scu = function (element) {
    var tmp;
    if (element instanceof JsonObject) {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key = this.rcw();
      tmp = (isInterface(element, KtMap) ? element : THROW_CCE()).k2(key);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AbstractAssertionFactory).tcu = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonObject)) {
      var message = 'cannot extract ' + this.rcw() + ' property from ' + getKClassFromExpression(element).hc();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = element.af(this.rcw());
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = 'no property ' + this.rcw() + ' found in element ' + element.toString();
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var typeElement = tmp$ret$3;
    return this.scw(typeElement, context.acr(this.rcw()));
  };
  function AdditionalItemsAssertion(location, assertion, indexAnnotationKey, annotationKey, returnIfNoIndex) {
    this.tcw_1 = location;
    this.ucw_1 = assertion;
    this.vcw_1 = indexAnnotationKey;
    this.wcw_1 = annotationKey;
    this.xcw_1 = returnIfNoIndex;
  }
  protoOf(AdditionalItemsAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.tcw_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_1: {
        if (!isInterface(element, ArrayElement)) {
          tmp$ret$0 = true;
          break $l$block_1;
        }
        var tmp0_elvis_lhs = context.ycq().mcq(this.vcw_1);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          var tmp_1;
          if (this.xcw_1) {
            tmp$ret$0 = true;
            break $l$block_1;
          } else {
            tmp_1 = -1;
          }
          tmp_0 = tmp_1;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var lastProcessedIndex = tmp_0;
        if (lastProcessedIndex === get_lastIndex_0(element)) {
          tmp$ret$0 = true;
          break $l$block_1;
        }
        var valid = true;
        var iterator = element.p();
        var index = 0;
        $l$loop: while (iterator.q()) {
          var index_0 = index;
          index = index + 1 | 0;
          var el = iterator.r();
          if (index_0 <= lastProcessedIndex) {
            continue $l$loop;
          }
          var ctx = context.b39(index_0);
          // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
          var this_1 = this_0.dcp(ctx.wcq());
          var tmp_2;
          try {
            tmp_2 = this.ucw_1.qco(el, ctx, this_1);
          }finally {
            this_1.sco();
          }
          var res = tmp_2;
          valid = (valid && res);
        }
        if (valid) {
          context.ycq().lcq(this.wcw_1, true);
        }
        tmp$ret$0 = valid;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function Boolean$or$ref() {
    var l = function (p0, p1) {
      return !!(p0 | p1);
    };
    l.callableName = 'or';
    return l;
  }
  function AdditionalItemsAssertionFactory() {
    AdditionalItemsAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'additionalItems');
    var tmp = this;
    var tmp1 = this.rcw();
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.createAggregatable' call
    var aggregator = Boolean$or$ref();
    tmp.zcw_1 = AnnotationKeyFactory_instance.icq(tmp1, PrimitiveClasses_getInstance().gd(), aggregator);
  }
  protoOf(AdditionalItemsAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = AdditionalItemsAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var assertion = context.acu(element);
    return new AdditionalItemsAssertion(context.yct(), assertion, ItemsAssertionFactory_getInstance().bcx_1, this.zcw_1, true);
  };
  var AdditionalItemsAssertionFactory_instance;
  function AdditionalItemsAssertionFactory_getInstance() {
    if (AdditionalItemsAssertionFactory_instance == null)
      new AdditionalItemsAssertionFactory();
    return AdditionalItemsAssertionFactory_instance;
  }
  function AllItemsAssertion(location, itemAssertion, annotationKey) {
    this.ccx_1 = location;
    this.dcx_1 = itemAssertion;
    this.ecx_1 = annotationKey;
  }
  protoOf(AllItemsAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.ccx_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block: {
        if (!isInterface(element, ArrayElement)) {
          tmp$ret$0 = true;
          break $l$block;
        }
        var valid = true;
        // Inline function 'kotlin.sequences.forEachIndexed' call
        var index = 0;
        var _iterator__ex2g4s = element.p();
        while (_iterator__ex2g4s.q()) {
          var item = _iterator__ex2g4s.r();
          var _unary__edvuaz = index;
          index = _unary__edvuaz + 1 | 0;
          var index_0 = checkIndexOverflow(_unary__edvuaz);
          var ctx = context.b39(index_0);
          // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
          var this_1 = this_0.dcp(ctx.wcq());
          var tmp_0;
          try {
            tmp_0 = this.dcx_1.qco(item, ctx, this_1);
          }finally {
            this_1.sco();
          }
          var result = tmp_0;
          valid = (valid && result);
        }
        if (valid) {
          context.ycq().lcq(this.ecx_1, get_lastIndex_0(element));
        }
        tmp$ret$0 = valid;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function ArrayLengthAssertion(path, length, errorMessage, check) {
    this.fcx_1 = path;
    this.gcx_1 = length;
    this.hcx_1 = errorMessage;
    this.icx_1 = check;
  }
  protoOf(ArrayLengthAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.fcx_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_0: {
        if (!isInterface(element, ArrayElement)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        if (this.icx_1(element.s(), this.gcx_1)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        this_0.jcp(new ValidationError(this.fcx_1, context.wcq(), 'array length ' + this.hcx_1 + ' ' + this.gcx_1));
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function ContainsAssertionFactory() {
    ContainsAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'contains');
    var tmp = this;
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.create' call
    var name = this.rcw();
    tmp.kcx_1 = AnnotationKeyFactory_instance.qcn(name, PrimitiveClasses_getInstance().jd());
  }
  protoOf(ContainsAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = ContainsAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var containsAssertion = context.acu(element);
    return new ContainsAssertion(context.yct(), containsAssertion);
  };
  var ContainsAssertionFactory_instance;
  function ContainsAssertionFactory_getInstance() {
    if (ContainsAssertionFactory_instance == null)
      new ContainsAssertionFactory();
    return ContainsAssertionFactory_instance;
  }
  function ContainsAssertion(path, containsAssertion) {
    this.lcx_1 = path;
    this.mcx_1 = containsAssertion;
  }
  protoOf(ContainsAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.lcx_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_0: {
        if (!isInterface(element, ArrayElement)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        // Inline function 'kotlin.sequences.count' call
        var count = 0;
        var _iterator__ex2g4s = element.p();
        while (_iterator__ex2g4s.q()) {
          var element_0 = _iterator__ex2g4s.r();
          if (this.mcx_1.qco(element_0, context, Empty_getInstance())) {
            count = count + 1 | 0;
            checkCountOverflow(count);
          }
        }
        var foundElements = count;
        context.ycq().lcq(ContainsAssertionFactory_getInstance().kcx_1, foundElements);
        if (!(foundElements === 0)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        this_0.jcp(new ValidationError(this.lcx_1, context.wcq(), 'array does not contain expected element'));
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function plus$ref() {
    var l = function (p0, p1) {
      return plus_0(p0, p1);
    };
    l.callableName = 'plus';
    return l;
  }
  function ContainsAssertionFactoryDraft202012() {
    ContainsAssertionFactoryDraft202012_instance = this;
    this.ncx_1 = 'contains';
    this.ocx_1 = 'minContains';
    var tmp = this;
    var tmp1 = 'contains';
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.createAggregatable' call
    var aggregator = plus$ref();
    tmp.pcx_1 = AnnotationKeyFactory_instance.icq(tmp1, getKClass(KtSet), aggregator);
  }
  protoOf(ContainsAssertionFactoryDraft202012).scu = function (element) {
    var tmp;
    if (element instanceof JsonObject) {
      tmp = element.s2p('contains');
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ContainsAssertionFactoryDraft202012).tcu = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonObject)) {
      var message = 'cannot extract contains property from ' + getKClassFromExpression(element).hc();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = element.af('contains');
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = 'no property contains found in element ' + element.toString();
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var typeElement = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!context.bcu(typeElement)) {
      var message_1 = 'contains must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var elementContext = context.acr('contains');
    var containsAssertion = elementContext.acu(typeElement);
    var tmp0_safe_receiver = element.af('minContains');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = _JsonPrimitiveWrapper___init__impl__i5ydwz(tmp1_safe_receiver);
    }
    var tmp2_safe_receiver = tmp;
    var tmp_0;
    var tmp_1 = tmp2_safe_receiver;
    if ((tmp_1 == null ? null : new JsonPrimitiveWrapper(tmp_1)) == null) {
      tmp_0 = null;
    } else {
      tmp_0 = get_integerOrNull(new JsonPrimitiveWrapper(tmp2_safe_receiver));
    }
    var tmp3_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = tmp3_safe_receiver === 0;
    }
    var allowNoMatch = tmp_2 === true;
    return new ContainsAssertionDraft202012(elementContext.yct(), containsAssertion, allowNoMatch);
  };
  var ContainsAssertionFactoryDraft202012_instance;
  function ContainsAssertionFactoryDraft202012_getInstance() {
    if (ContainsAssertionFactoryDraft202012_instance == null)
      new ContainsAssertionFactoryDraft202012();
    return ContainsAssertionFactoryDraft202012_instance;
  }
  function ContainsAssertionDraft202012$validate$lambda($context, this$0) {
    return function (_destruct__k2r9zo) {
      var el = _destruct__k2r9zo.ec();
      var childContext = $context.ccr();
      // Inline function 'kotlin.also' call
      var this_0 = this$0.rcx_1.qco(el, childContext, Empty_getInstance());
      if (this_0) {
        childContext.bcr();
      }
      return this_0;
    };
  }
  function ContainsAssertionDraft202012(path, containsAssertion, allowNoMatch) {
    this.qcx_1 = path;
    this.rcx_1 = containsAssertion;
    this.scx_1 = allowNoMatch;
  }
  protoOf(ContainsAssertionDraft202012).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.qcx_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_0: {
        if (!isInterface(element, ArrayElement)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        // Inline function 'kotlin.sequences.asSequence' call
        var tmp_0 = withIndex(element);
        var tmp1 = filter(tmp_0, ContainsAssertionDraft202012$validate$lambda(context, this));
        // Inline function 'kotlin.collections.hashSetOf' call
        // Inline function 'kotlin.sequences.mapTo' call
        var destination = HashSet_init_$Create$();
        var _iterator__ex2g4s = tmp1.p();
        while (_iterator__ex2g4s.q()) {
          var item = _iterator__ex2g4s.r();
          var tmp$ret$3 = item.wh_1;
          destination.n(tmp$ret$3);
        }
        var foundElements = destination;
        context.ycq().lcq(ContainsAssertionFactoryDraft202012_getInstance().pcx_1, foundElements);
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!foundElements.h()) {
          tmp_1 = true;
        } else {
          tmp_1 = this.scx_1;
        }
        if (tmp_1) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        this_0.jcp(new ValidationError(this.qcx_1, context.wcq(), 'array does not contain expected element'));
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function CountContainsAssertion(path, expected, operationName, actualCount, operation) {
    this.tcx_1 = path;
    this.ucx_1 = expected;
    this.vcx_1 = operationName;
    this.wcx_1 = actualCount;
    this.xcx_1 = operation;
  }
  protoOf(CountContainsAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.tcx_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs = this.wcx_1(context);
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return true;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var matchedElements = tmp_0;
        if (this.xcx_1(this.ucx_1, matchedElements)) {
          tmp$ret$0 = true;
          break $l$block;
        }
        this_0.jcp(new ValidationError(this.tcx_1, context.wcq(), 'array must contain ' + this.vcx_1 + ' ' + toString(this.ucx_1) + " element(s) match the 'contains' schema" + (' but has ' + matchedElements)));
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function ItemsAssertionFactory$ANNOTATION$lambda(a, b) {
    // Inline function 'kotlin.math.max' call
    return Math.max(a, b);
  }
  function ItemsAssertionFactory() {
    ItemsAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'items');
    var tmp = this;
    var tmp1 = this.rcw();
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.createAggregatable' call
    var aggregator = ItemsAssertionFactory$ANNOTATION$lambda;
    tmp.bcx_1 = AnnotationKeyFactory_instance.icq(tmp1, PrimitiveClasses_getInstance().jd(), aggregator);
  }
  protoOf(ItemsAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonArray) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.require' call
      if (!!element.h()) {
        var message = ItemsAssertionFactory_getInstance().rcw() + ' must have at least one element';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var tmp_0;
        if (isInterface(element, Collection)) {
          tmp_0 = element.h();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$3 = true;
          break $l$block_0;
        }
        var _iterator__ex2g4s = element.p();
        while (_iterator__ex2g4s.q()) {
          var element_0 = _iterator__ex2g4s.r();
          if (!context.bcu(element_0)) {
            tmp$ret$3 = false;
            break $l$block_0;
          }
        }
        tmp$ret$3 = true;
      }
      // Inline function 'kotlin.require' call
      if (!tmp$ret$3) {
        var message_0 = 'all elements in ' + ItemsAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      // Inline function 'kotlin.collections.mapIndexed' call
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(element, 10));
      var index = 0;
      var _iterator__ex2g4s_0 = element.p();
      while (_iterator__ex2g4s_0.q()) {
        var item = _iterator__ex2g4s_0.r();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var index_0 = checkIndexOverflow(_unary__edvuaz);
        var tmp$ret$7 = context.b39(index_0).acu(item);
        destination.n(tmp$ret$7);
      }
      var assertions = destination;
      tmp = new PrefixItemsAssertion(context.yct(), assertions, this.bcx_1);
    } else {
      // Inline function 'kotlin.require' call
      if (!context.bcu(element)) {
        var message_1 = ItemsAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      tmp = new AllItemsAssertion(context.yct(), context.acu(element), this.bcx_1);
    }
    return tmp;
  };
  var ItemsAssertionFactory_instance;
  function ItemsAssertionFactory_getInstance() {
    if (ItemsAssertionFactory_instance == null)
      new ItemsAssertionFactory();
    return ItemsAssertionFactory_instance;
  }
  function Boolean$or$ref_0() {
    var l = function (p0, p1) {
      return !!(p0 | p1);
    };
    l.callableName = 'or';
    return l;
  }
  function ItemsAssertionFactoryDraft202012() {
    ItemsAssertionFactoryDraft202012_instance = this;
    AbstractAssertionFactory.call(this, 'items');
    var tmp = this;
    var tmp1 = this.rcw();
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.createAggregatable' call
    var aggregator = Boolean$or$ref_0();
    tmp.zcx_1 = AnnotationKeyFactory_instance.icq(tmp1, PrimitiveClasses_getInstance().gd(), aggregator);
  }
  protoOf(ItemsAssertionFactoryDraft202012).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = ItemsAssertionFactoryDraft202012_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var assertion = context.acu(element);
    return new AdditionalItemsAssertion(context.yct(), assertion, PrefixItemsAssertionFactory_getInstance().bcy_1, this.zcx_1, false);
  };
  var ItemsAssertionFactoryDraft202012_instance;
  function ItemsAssertionFactoryDraft202012_getInstance() {
    if (ItemsAssertionFactoryDraft202012_instance == null)
      new ItemsAssertionFactoryDraft202012();
    return ItemsAssertionFactoryDraft202012_instance;
  }
  function MaxContainsAssertionFactory$createFromProperty$lambda(it) {
    return it.ycq().mcq(ContainsAssertionFactory_getInstance().kcx_1);
  }
  function MaxContainsAssertionFactory$createFromProperty$lambda_0(expected, actual) {
    return compareTo_0(actual, expected) <= 0;
  }
  function MaxContainsAssertionFactory() {
    MaxContainsAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'maxContains');
  }
  protoOf(MaxContainsAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = !element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = MaxContainsAssertionFactory_getInstance().rcw() + ' must be an integer';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_integerOrNull(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MaxContainsAssertionFactory_getInstance().rcw() + ' must be a valid integer';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maxItemsValue = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!(maxItemsValue >= 0)) {
      var message_1 = MaxContainsAssertionFactory_getInstance().rcw() + ' must be a non-negative integer';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp_0 = context.yct();
    var tmp_1 = MaxContainsAssertionFactory$createFromProperty$lambda;
    return new CountContainsAssertion(tmp_0, maxItemsValue, 'at most', tmp_1, MaxContainsAssertionFactory$createFromProperty$lambda_0);
  };
  var MaxContainsAssertionFactory_instance;
  function MaxContainsAssertionFactory_getInstance() {
    if (MaxContainsAssertionFactory_instance == null)
      new MaxContainsAssertionFactory();
    return MaxContainsAssertionFactory_instance;
  }
  function MaxContainsAssertionFactoryDraft202012$createFromProperty$lambda(it) {
    var tmp0_safe_receiver = it.ycq().mcq(ContainsAssertionFactoryDraft202012_getInstance().pcx_1);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s();
  }
  function MaxContainsAssertionFactoryDraft202012$createFromProperty$lambda_0(expected, actual) {
    return compareTo_0(actual, expected) <= 0;
  }
  function MaxContainsAssertionFactoryDraft202012() {
    MaxContainsAssertionFactoryDraft202012_instance = this;
    AbstractAssertionFactory.call(this, 'maxContains');
  }
  protoOf(MaxContainsAssertionFactoryDraft202012).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = !element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = MaxContainsAssertionFactoryDraft202012_getInstance().rcw() + ' must be an integer';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_integerOrNull(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MaxContainsAssertionFactoryDraft202012_getInstance().rcw() + ' must be a valid integer';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maxItemsValue = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!(maxItemsValue >= 0)) {
      var message_1 = MaxContainsAssertionFactoryDraft202012_getInstance().rcw() + ' must be a non-negative integer';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp_0 = context.yct();
    var tmp_1 = MaxContainsAssertionFactoryDraft202012$createFromProperty$lambda;
    return new CountContainsAssertion(tmp_0, maxItemsValue, 'at most', tmp_1, MaxContainsAssertionFactoryDraft202012$createFromProperty$lambda_0);
  };
  var MaxContainsAssertionFactoryDraft202012_instance;
  function MaxContainsAssertionFactoryDraft202012_getInstance() {
    if (MaxContainsAssertionFactoryDraft202012_instance == null)
      new MaxContainsAssertionFactoryDraft202012();
    return MaxContainsAssertionFactoryDraft202012_instance;
  }
  function MaxItemsAssertionFactory$createFromProperty$lambda(a, b) {
    return a <= b;
  }
  function MaxItemsAssertionFactory() {
    MaxItemsAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'maxItems');
  }
  protoOf(MaxItemsAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = !element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = MaxItemsAssertionFactory_getInstance().rcw() + ' must be an integer';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_integerOrNull(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MaxItemsAssertionFactory_getInstance().rcw() + ' must be a valid integer';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maxItemsValue = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!(maxItemsValue >= 0)) {
      var message_1 = MaxItemsAssertionFactory_getInstance().rcw() + ' must be a non-negative integer';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp_0 = context.yct();
    return new ArrayLengthAssertion(tmp_0, maxItemsValue, 'must be less or equal to', MaxItemsAssertionFactory$createFromProperty$lambda);
  };
  var MaxItemsAssertionFactory_instance;
  function MaxItemsAssertionFactory_getInstance() {
    if (MaxItemsAssertionFactory_instance == null)
      new MaxItemsAssertionFactory();
    return MaxItemsAssertionFactory_instance;
  }
  function MinContainsAssertionFactory$createFromProperty$lambda(it) {
    return it.ycq().mcq(ContainsAssertionFactory_getInstance().kcx_1);
  }
  function MinContainsAssertionFactory$createFromProperty$lambda_0(expected, actual) {
    return compareTo_0(actual, expected) >= 0;
  }
  function MinContainsAssertionFactory() {
    MinContainsAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'minContains');
  }
  protoOf(MinContainsAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = !element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = MinContainsAssertionFactory_getInstance().rcw() + ' must be an integer';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_integerOrNull(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MinContainsAssertionFactory_getInstance().rcw() + ' must be a valid integer';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maxItemsValue = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!(maxItemsValue >= 0)) {
      var message_1 = MinContainsAssertionFactory_getInstance().rcw() + ' must be a non-negative integer';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp_0 = context.yct();
    var tmp_1 = MinContainsAssertionFactory$createFromProperty$lambda;
    return new CountContainsAssertion(tmp_0, maxItemsValue, 'at least', tmp_1, MinContainsAssertionFactory$createFromProperty$lambda_0);
  };
  var MinContainsAssertionFactory_instance;
  function MinContainsAssertionFactory_getInstance() {
    if (MinContainsAssertionFactory_instance == null)
      new MinContainsAssertionFactory();
    return MinContainsAssertionFactory_instance;
  }
  function MinContainsAssertionFactoryDraft202012$createFromProperty$lambda(it) {
    var tmp0_safe_receiver = it.ycq().mcq(ContainsAssertionFactoryDraft202012_getInstance().pcx_1);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s();
  }
  function MinContainsAssertionFactoryDraft202012$createFromProperty$lambda_0(expected, actual) {
    return compareTo_0(actual, expected) >= 0;
  }
  function MinContainsAssertionFactoryDraft202012() {
    MinContainsAssertionFactoryDraft202012_instance = this;
    AbstractAssertionFactory.call(this, 'minContains');
  }
  protoOf(MinContainsAssertionFactoryDraft202012).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = !element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = MinContainsAssertionFactoryDraft202012_getInstance().rcw() + ' must be an integer';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_integerOrNull(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MinContainsAssertionFactoryDraft202012_getInstance().rcw() + ' must be a valid integer';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maxItemsValue = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!(maxItemsValue >= 0)) {
      var message_1 = MinContainsAssertionFactoryDraft202012_getInstance().rcw() + ' must be a non-negative integer';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp_0 = context.yct();
    var tmp_1 = MinContainsAssertionFactoryDraft202012$createFromProperty$lambda;
    return new CountContainsAssertion(tmp_0, maxItemsValue, 'at least', tmp_1, MinContainsAssertionFactoryDraft202012$createFromProperty$lambda_0);
  };
  var MinContainsAssertionFactoryDraft202012_instance;
  function MinContainsAssertionFactoryDraft202012_getInstance() {
    if (MinContainsAssertionFactoryDraft202012_instance == null)
      new MinContainsAssertionFactoryDraft202012();
    return MinContainsAssertionFactoryDraft202012_instance;
  }
  function MinItemsAssertionFactory$createFromProperty$lambda(a, b) {
    return a >= b;
  }
  function MinItemsAssertionFactory() {
    MinItemsAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'minItems');
  }
  protoOf(MinItemsAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = !element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = MinItemsAssertionFactory_getInstance().rcw() + ' must be an integer';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_integerOrNull(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MinItemsAssertionFactory_getInstance().rcw() + ' must be a valid integer';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maxItemsValue = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!(maxItemsValue >= 0)) {
      var message_1 = MinItemsAssertionFactory_getInstance().rcw() + ' must be a non-negative integer';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp_0 = context.yct();
    return new ArrayLengthAssertion(tmp_0, maxItemsValue, 'must be greater or equal to', MinItemsAssertionFactory$createFromProperty$lambda);
  };
  var MinItemsAssertionFactory_instance;
  function MinItemsAssertionFactory_getInstance() {
    if (MinItemsAssertionFactory_instance == null)
      new MinItemsAssertionFactory();
    return MinItemsAssertionFactory_instance;
  }
  function PrefixItemsAssertion(location, prefixAssertions, annotationKey) {
    this.icy_1 = location;
    this.jcy_1 = prefixAssertions;
    this.kcy_1 = annotationKey;
  }
  protoOf(PrefixItemsAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.icy_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block: {
        if (!isInterface(element, ArrayElement)) {
          tmp$ret$0 = true;
          break $l$block;
        }
        var valid = true;
        var lastProcessedIndex = -1;
        var iterator = element.p();
        var index = 0;
        $l$loop: while (iterator.q()) {
          var index_0 = index;
          index = index + 1 | 0;
          var item = iterator.r();
          if (index_0 < this.jcy_1.s()) {
            var ctx = context.b39(index_0);
            // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
            var this_1 = this_0.dcp(ctx.wcq());
            var tmp_0;
            try {
              tmp_0 = this.jcy_1.u(index_0).qco(item, ctx, this_1);
            }finally {
              this_1.sco();
            }
            var result = tmp_0;
            valid = (valid && result);
            lastProcessedIndex = index_0;
          } else {
            break $l$loop;
          }
        }
        if (valid) {
          context.ycq().lcq(this.kcy_1, lastProcessedIndex);
        }
        tmp$ret$0 = valid;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function PrefixItemsAssertionFactory$ANNOTATION$lambda(a, b) {
    // Inline function 'kotlin.math.max' call
    return Math.max(a, b);
  }
  function PrefixItemsAssertionFactory() {
    PrefixItemsAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'prefixItems');
    var tmp = this;
    var tmp1 = this.rcw();
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.createAggregatable' call
    var aggregator = PrefixItemsAssertionFactory$ANNOTATION$lambda;
    tmp.bcy_1 = AnnotationKeyFactory_instance.icq(tmp1, PrimitiveClasses_getInstance().jd(), aggregator);
  }
  protoOf(PrefixItemsAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonArray)) {
      var message = PrefixItemsAssertionFactory_getInstance().rcw() + ' must be an array';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!element.h()) {
      var message_0 = PrefixItemsAssertionFactory_getInstance().rcw() + ' must have at least one element';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(element, Collection)) {
        tmp = element.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$5 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = element.p();
      while (_iterator__ex2g4s.q()) {
        var element_0 = _iterator__ex2g4s.r();
        if (!context.bcu(element_0)) {
          tmp$ret$5 = false;
          break $l$block_0;
        }
      }
      tmp$ret$5 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$5) {
      var message_1 = 'all elements in ' + PrefixItemsAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.mapIndexed' call
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(element, 10));
    var index = 0;
    var _iterator__ex2g4s_0 = element.p();
    while (_iterator__ex2g4s_0.q()) {
      var item = _iterator__ex2g4s_0.r();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp$ret$9 = context.b39(index_0).acu(item);
      destination.n(tmp$ret$9);
    }
    var assertions = destination;
    return new PrefixItemsAssertion(context.yct(), assertions, this.bcy_1);
  };
  var PrefixItemsAssertionFactory_instance;
  function PrefixItemsAssertionFactory_getInstance() {
    if (PrefixItemsAssertionFactory_instance == null)
      new PrefixItemsAssertionFactory();
    return PrefixItemsAssertionFactory_instance;
  }
  function UnevaluatedItemsAssertion(location, assertion, indexAnnotationKey, itemsAnnotationKey, selfAnnotationKey, processedIndexesKey) {
    processedIndexesKey = processedIndexesKey === VOID ? null : processedIndexesKey;
    this.lcy_1 = location;
    this.mcy_1 = assertion;
    this.ncy_1 = indexAnnotationKey;
    this.ocy_1 = itemsAnnotationKey;
    this.pcy_1 = selfAnnotationKey;
    this.qcy_1 = processedIndexesKey;
  }
  protoOf(UnevaluatedItemsAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.lcy_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_1: {
        if (!isInterface(element, ArrayElement)) {
          tmp$ret$0 = true;
          break $l$block_1;
        }
        var annotationCollector = context.ycq();
        var tmp0_elvis_lhs = annotationCollector.ncq(this.ncy_1);
        var startIndex = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
        if (startIndex === get_lastIndex_0(element)) {
          tmp$ret$0 = true;
          break $l$block_1;
        }
        if (annotationCollector.ncq(this.ocy_1) === true || annotationCollector.ncq(this.pcy_1) === true) {
          tmp$ret$0 = true;
          break $l$block_1;
        }
        var tmp1_safe_receiver = this.qcy_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = annotationCollector.ncq(tmp1_safe_receiver);
        }
        var tmp2_elvis_lhs = tmp_0;
        var processedIndexes = tmp2_elvis_lhs == null ? emptySet() : tmp2_elvis_lhs;
        var valid = true;
        // Inline function 'kotlin.sequences.forEachIndexed' call
        var index = 0;
        var _iterator__ex2g4s = element.p();
        while (_iterator__ex2g4s.q()) {
          var item = _iterator__ex2g4s.r();
          var _unary__edvuaz = index;
          index = _unary__edvuaz + 1 | 0;
          var tmp4 = checkIndexOverflow(_unary__edvuaz);
          $l$block_3: {
            if (tmp4 <= startIndex) {
              break $l$block_3;
            }
            if (processedIndexes.w(tmp4)) {
              break $l$block_3;
            }
            var ctx = context.b39(tmp4);
            // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
            var this_1 = this_0.dcp(ctx.wcq());
            var tmp_1;
            try {
              tmp_1 = this.mcy_1.qco(item, ctx, this_1);
            }finally {
              this_1.sco();
            }
            var result = tmp_1;
            valid = !!(valid & result);
          }
        }
        annotationCollector.lcq(this.pcy_1, true);
        tmp$ret$0 = valid;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function Boolean$or$ref_1() {
    var l = function (p0, p1) {
      return !!(p0 | p1);
    };
    l.callableName = 'or';
    return l;
  }
  function UnevaluatedItemsAssertionFactory() {
    UnevaluatedItemsAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'unevaluatedItems');
    var tmp = this;
    var tmp1 = this.rcw();
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.createAggregatable' call
    var aggregator = Boolean$or$ref_1();
    tmp.scy_1 = AnnotationKeyFactory_instance.icq(tmp1, PrimitiveClasses_getInstance().gd(), aggregator);
  }
  protoOf(UnevaluatedItemsAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = UnevaluatedItemsAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var assertion = context.acu(element);
    return new UnevaluatedItemsAssertion(context.yct(), assertion, ItemsAssertionFactory_getInstance().bcx_1, AdditionalItemsAssertionFactory_getInstance().zcw_1, this.scy_1);
  };
  var UnevaluatedItemsAssertionFactory_instance;
  function UnevaluatedItemsAssertionFactory_getInstance() {
    if (UnevaluatedItemsAssertionFactory_instance == null)
      new UnevaluatedItemsAssertionFactory();
    return UnevaluatedItemsAssertionFactory_instance;
  }
  function Boolean$or$ref_2() {
    var l = function (p0, p1) {
      return !!(p0 | p1);
    };
    l.callableName = 'or';
    return l;
  }
  function UnevaluatedItemsAssertionFactoryDraft202012() {
    UnevaluatedItemsAssertionFactoryDraft202012_instance = this;
    AbstractAssertionFactory.call(this, 'unevaluatedItems');
    var tmp = this;
    var tmp1 = this.rcw();
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.createAggregatable' call
    var aggregator = Boolean$or$ref_2();
    tmp.ucy_1 = AnnotationKeyFactory_instance.icq(tmp1, PrimitiveClasses_getInstance().gd(), aggregator);
  }
  protoOf(UnevaluatedItemsAssertionFactoryDraft202012).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = UnevaluatedItemsAssertionFactoryDraft202012_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var assertion = context.acu(element);
    return new UnevaluatedItemsAssertion(context.yct(), assertion, PrefixItemsAssertionFactory_getInstance().bcy_1, ItemsAssertionFactoryDraft202012_getInstance().zcx_1, this.ucy_1, ContainsAssertionFactoryDraft202012_getInstance().pcx_1);
  };
  var UnevaluatedItemsAssertionFactoryDraft202012_instance;
  function UnevaluatedItemsAssertionFactoryDraft202012_getInstance() {
    if (UnevaluatedItemsAssertionFactoryDraft202012_instance == null)
      new UnevaluatedItemsAssertionFactoryDraft202012();
    return UnevaluatedItemsAssertionFactoryDraft202012_instance;
  }
  function UniqueItemsAssertionFactory() {
    UniqueItemsAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'uniqueItems');
  }
  protoOf(UniqueItemsAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = !element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = UniqueItemsAssertionFactory_getInstance().rcw() + ' must be a boolean';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_booleanOrNull(element);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = UniqueItemsAssertionFactory_getInstance().rcw() + ' must be a boolean';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var uniqueItemsValue = tmp$ret$3;
    var tmp_0;
    if (uniqueItemsValue) {
      tmp_0 = new UniqueItemsAssertion(context.yct());
    } else {
      tmp_0 = TrueSchemaAssertion_instance;
    }
    return tmp_0;
  };
  var UniqueItemsAssertionFactory_instance;
  function UniqueItemsAssertionFactory_getInstance() {
    if (UniqueItemsAssertionFactory_instance == null)
      new UniqueItemsAssertionFactory();
    return UniqueItemsAssertionFactory_instance;
  }
  function UniqueItemsAssertion(path) {
    this.wcy_1 = path;
  }
  protoOf(UniqueItemsAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.wcy_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_3: {
        if (!isInterface(element, ArrayElement)) {
          tmp$ret$0 = true;
          break $l$block_3;
        }
        if (element.s() < 2) {
          tmp$ret$0 = true;
          break $l$block_3;
        }
        var duplicates = null;
        // Inline function 'kotlin.collections.buildList' call
        // Inline function 'kotlin.collections.buildListInternal' call
        // Inline function 'kotlin.apply' call
        var this_1 = ArrayList_init_$Create$_0();
        // Inline function 'kotlin.sequences.forEach' call
        var _iterator__ex2g4s = element.p();
        while (_iterator__ex2g4s.q()) {
          var element_0 = _iterator__ex2g4s.r();
          var tmp$ret$1;
          $l$block_2: {
            // Inline function 'kotlin.collections.none' call
            var tmp_0;
            if (isInterface(this_1, Collection)) {
              tmp_0 = this_1.h();
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$1 = true;
              break $l$block_2;
            }
            var _iterator__ex2g4s_0 = this_1.p();
            while (_iterator__ex2g4s_0.q()) {
              var element_1 = _iterator__ex2g4s_0.r();
              if (areEqual(element_1, element_0)) {
                tmp$ret$1 = false;
                break $l$block_2;
              }
            }
            tmp$ret$1 = true;
          }
          if (tmp$ret$1) {
            this_1.n(element_0);
          } else {
            if (duplicates == null) {
              // Inline function 'kotlin.collections.mutableListOf' call
              duplicates = ArrayList_init_$Create$_0();
            }
            duplicates.n(element_0);
          }
        }
        var uniqueItems = this_1.x3();
        var uniqueItemsCount = uniqueItems.s();
        if (uniqueItemsCount === element.s()) {
          tmp$ret$0 = true;
          break $l$block_3;
        }
        var tmp_1 = context.wcq();
        var tmp0_safe_receiver = duplicates;
        this_0.jcp(new ValidationError(this.wcy_1, tmp_1, 'array contains duplicate values: ' + (tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, ',', '[', ']'))));
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function AbstractAssertionsCollectionFactory(property) {
    AbstractAssertionFactory.call(this, property);
  }
  protoOf(AbstractAssertionsCollectionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonArray)) {
      var message = this.rcw() + ' must be an array';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!element.h()) {
      var message_0 = this.rcw() + ' must have at least one element';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(element, Collection)) {
        tmp = element.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$5 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = element.p();
      while (_iterator__ex2g4s.q()) {
        var element_0 = _iterator__ex2g4s.r();
        if (!context.bcu(element_0)) {
          tmp$ret$5 = false;
          break $l$block_0;
        }
      }
      tmp$ret$5 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$5) {
      var message_1 = 'each element in ' + this.rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.mapIndexed' call
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(element, 10));
    var index = 0;
    var _iterator__ex2g4s_0 = element.p();
    while (_iterator__ex2g4s_0.q()) {
      var item = _iterator__ex2g4s_0.r();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var tmp$ret$9 = context.b39(index_0).acu(item);
      destination.n(tmp$ret$9);
    }
    var assertions = destination;
    return this.ycy(context, assertions);
  };
  function AllOfAssertionFactory() {
    AllOfAssertionFactory_instance = this;
    AbstractAssertionsCollectionFactory.call(this, 'allOf');
  }
  protoOf(AllOfAssertionFactory).ycy = function (context, assertions) {
    return new AllOfAssertion(context.yct(), assertions);
  };
  var AllOfAssertionFactory_instance;
  function AllOfAssertionFactory_getInstance() {
    if (AllOfAssertionFactory_instance == null)
      new AllOfAssertionFactory();
    return AllOfAssertionFactory_instance;
  }
  function AllOfAssertion(location, assertions) {
    this.acz_1 = location;
    this.bcz_1 = assertions;
  }
  protoOf(AllOfAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.acz_1, VOID, false);
    var tmp;
    try {
      var valid = true;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = this.bcz_1.p();
      while (_iterator__ex2g4s.q()) {
        var element_0 = _iterator__ex2g4s.r();
        var childContext = context.ccr();
        var res = element_0.qco(element, childContext, this_0);
        if (res) {
          childContext.bcr();
        }
        valid = !!(valid & res);
      }
      tmp = valid;
    }finally {
      this_0.sco();
    }
    var valid_0 = tmp;
    return valid_0;
  };
  function AnyOfAssertionFactory() {
    AnyOfAssertionFactory_instance = this;
    AbstractAssertionsCollectionFactory.call(this, 'anyOf');
  }
  protoOf(AnyOfAssertionFactory).ycy = function (context, assertions) {
    return new AnyOfAssertion(context.yct(), assertions);
  };
  var AnyOfAssertionFactory_instance;
  function AnyOfAssertionFactory_getInstance() {
    if (AnyOfAssertionFactory_instance == null)
      new AnyOfAssertionFactory();
    return AnyOfAssertionFactory_instance;
  }
  function AnyOfAssertion(location, assertions) {
    this.dcz_1 = location;
    this.ecz_1 = assertions;
  }
  protoOf(AnyOfAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.dcz_1, VOID, false);
    var tmp;
    try {
      // Inline function 'kotlin.collections.mutableListOf' call
      var tempHandler = ArrayList_init_$Create$_0();
      var valid = false;
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = this.ecz_1.p();
      while (_iterator__ex2g4s.q()) {
        var element_0 = _iterator__ex2g4s.r();
        var childContext = context.ccr();
        var collector = this_0.icp();
        // Inline function 'kotlin.collections.plusAssign' call
        tempHandler.n(collector);
        var res = element_0.qco(element, childContext, collector);
        if (res) {
          childContext.bcr();
          collector.sco();
        }
        valid = !!(valid | res);
      }
      if (!valid) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = tempHandler.p();
        while (_iterator__ex2g4s_0.q()) {
          var element_1 = _iterator__ex2g4s_0.r();
          element_1.sco();
        }
      }
      tmp = valid;
    }finally {
      this_0.sco();
    }
    var valid_0 = tmp;
    return valid_0;
  };
  function ElseAssertionFactory() {
    ElseAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'else');
  }
  protoOf(ElseAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = ElseAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var elseAssertion = context.acu(element);
    return new ElseAssertion(context.yct(), elseAssertion);
  };
  var ElseAssertionFactory_instance;
  function ElseAssertionFactory_getInstance() {
    if (ElseAssertionFactory_instance == null)
      new ElseAssertionFactory();
    return ElseAssertionFactory_instance;
  }
  function ElseAssertion(location, assertion) {
    this.gcz_1 = location;
    this.hcz_1 = assertion;
  }
  protoOf(ElseAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.gcz_1, VOID, false);
    var tmp;
    try {
      var tmp_0;
      if (context.ycq().mcq(IfAssertionFactory_getInstance().jcz_1) === false) {
        tmp_0 = this.hcz_1.qco(element, context, this_0);
      } else {
        tmp_0 = true;
      }
      tmp = tmp_0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function IfAssertionFactory() {
    IfAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'if');
    var tmp = this;
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.create' call
    var name = this.rcw();
    tmp.jcz_1 = AnnotationKeyFactory_instance.qcn(name, PrimitiveClasses_getInstance().gd());
  }
  protoOf(IfAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = IfAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var ifAssertion = context.acu(element);
    return new IfAssertion(ifAssertion);
  };
  var IfAssertionFactory_instance;
  function IfAssertionFactory_getInstance() {
    if (IfAssertionFactory_instance == null)
      new IfAssertionFactory();
    return IfAssertionFactory_instance;
  }
  function IfAssertion(condition) {
    this.kcz_1 = condition;
  }
  protoOf(IfAssertion).qco = function (element, context, errorCollector) {
    context.ycq().lcq(IfAssertionFactory_getInstance().jcz_1, this.kcz_1.qco(element, context, Empty_getInstance()));
    return true;
  };
  function NotAssertionFactory() {
    NotAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'not');
  }
  protoOf(NotAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = NotAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var assertion = context.acu(element);
    return new NotAssertion(context.yct(), assertion);
  };
  var NotAssertionFactory_instance;
  function NotAssertionFactory_getInstance() {
    if (NotAssertionFactory_instance == null)
      new NotAssertionFactory();
    return NotAssertionFactory_instance;
  }
  function NotAssertion(path, delegate) {
    this.mcz_1 = path;
    this.ncz_1 = delegate;
  }
  protoOf(NotAssertion).qco = function (element, context, errorCollector) {
    var childContext = context.ccr();
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.mcz_1);
    try {
      if (!this.ncz_1.qco(element, childContext, Empty_getInstance())) {
        childContext.bcr();
        return true;
      }
      this_0.jcp(new ValidationError(this.mcz_1, context.wcq(), 'element must not be valid against child JSON schema but was'));
    }finally {
      this_0.sco();
    }
    return false;
  };
  function OneOfAssertionFactory() {
    OneOfAssertionFactory_instance = this;
    AbstractAssertionsCollectionFactory.call(this, 'oneOf');
  }
  protoOf(OneOfAssertionFactory).ycy = function (context, assertions) {
    return new OneOfAssertion(context.yct(), assertions);
  };
  var OneOfAssertionFactory_instance;
  function OneOfAssertionFactory_getInstance() {
    if (OneOfAssertionFactory_instance == null)
      new OneOfAssertionFactory();
    return OneOfAssertionFactory_instance;
  }
  function OneOfAssertion(path, assertions) {
    this.pcz_1 = path;
    this.qcz_1 = assertions;
  }
  protoOf(OneOfAssertion).qco = function (element, context, errorCollector) {
    var matched = ArrayList_init_$Create$(1);
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.pcz_1, VOID, false);
    try {
      // Inline function 'kotlin.collections.mutableListOf' call
      var childCollectors = ArrayList_init_$Create$_0();
      var iterator = this.qcz_1.p();
      var index = 0;
      while (iterator.q()) {
        var index_0 = index;
        index = index + 1 | 0;
        var assertion = iterator.r();
        var childContext = context.ccr();
        var childCollector = this_0.icp();
        // Inline function 'kotlin.collections.plusAssign' call
        childCollectors.n(childCollector);
        var res = assertion.qco(element, childContext, childCollector);
        if (res) {
          childContext.bcr();
          childCollector.sco();
          // Inline function 'kotlin.collections.plusAssign' call
          matched.n(index_0);
        }
      }
      if (matched.s() > 1) {
        this_0.jcp(new ValidationError(this.pcz_1, context.wcq(), 'element matches more than one JSON schema at indexes: ' + toString(matched)));
      } else if (matched.s() === 0) {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = childCollectors.p();
        while (_iterator__ex2g4s.q()) {
          var element_0 = _iterator__ex2g4s.r();
          element_0.sco();
        }
      }
    }finally {
      this_0.sco();
    }
    return matched.s() === 1;
  };
  function ThenAssertionFactory() {
    ThenAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'then');
  }
  protoOf(ThenAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = ThenAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var thenAssertion = context.acu(element);
    return new ThenAssertion(context.yct(), thenAssertion);
  };
  var ThenAssertionFactory_instance;
  function ThenAssertionFactory_getInstance() {
    if (ThenAssertionFactory_instance == null)
      new ThenAssertionFactory();
    return ThenAssertionFactory_instance;
  }
  function ThenAssertion(location, assertion) {
    this.scz_1 = location;
    this.tcz_1 = assertion;
  }
  protoOf(ThenAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.scz_1, VOID, false);
    var tmp;
    try {
      var tmp_0;
      if (context.ycq().mcq(IfAssertionFactory_getInstance().jcz_1) === true) {
        tmp_0 = this.tcz_1.qco(element, context, this_0);
      } else {
        tmp_0 = true;
      }
      tmp = tmp_0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function ConstAssertionFactory() {
    ConstAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'const');
  }
  protoOf(ConstAssertionFactory).scw = function (element, context) {
    return new ConstAssertion(context.yct(), wrap(element));
  };
  var ConstAssertionFactory_instance;
  function ConstAssertionFactory_getInstance() {
    if (ConstAssertionFactory_instance == null)
      new ConstAssertionFactory();
    return ConstAssertionFactory_instance;
  }
  function ConstAssertion(path, constValue) {
    this.vcz_1 = path;
    this.wcz_1 = constValue;
  }
  protoOf(ConstAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.vcz_1);
    try {
      if (areEqual(element, this.wcz_1)) {
        return true;
      }
      this_0.jcp(new ValidationError(this.vcz_1, context.wcq(), 'element does not match constant definition'));
    }finally {
      this_0.sco();
    }
    return false;
  };
  function EnumAssertionFactory() {
    EnumAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'enum');
  }
  protoOf(EnumAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonArray)) {
      var message = EnumAssertionFactory_getInstance().rcw() + ' must be an array';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!element.h()) {
      var message_0 = EnumAssertionFactory_getInstance().rcw() + ' must have at least one element';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var uniqueElements = toSet_0(element);
    // Inline function 'kotlin.require' call
    if (!(uniqueElements.s() === element.s())) {
      var message_1 = EnumAssertionFactory_getInstance().rcw() + ' must consist of unique elements';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp = context.yct();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(uniqueElements, 10));
    var _iterator__ex2g4s = uniqueElements.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$7 = wrap(item);
      destination.n(tmp$ret$7);
    }
    return new EnumAssertion(tmp, destination);
  };
  var EnumAssertionFactory_instance;
  function EnumAssertionFactory_getInstance() {
    if (EnumAssertionFactory_instance == null)
      new EnumAssertionFactory();
    return EnumAssertionFactory_instance;
  }
  function EnumAssertion(path, possibleElements) {
    this.ycz_1 = path;
    this.zcz_1 = possibleElements;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.zcz_1.h()) {
      var message = 'at least one element must be set';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(EnumAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.ycz_1);
    try {
      var tmp0 = this.zcz_1;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tmp0, Collection)) {
          tmp = tmp0.h();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.p();
        while (_iterator__ex2g4s.q()) {
          var element_0 = _iterator__ex2g4s.r();
          if (areEqual(element_0, element)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        return true;
      }
      this_0.jcp(new ValidationError(this.ycz_1, context.wcq(), 'element is not in enum'));
    }finally {
      this_0.sco();
    }
    return false;
  };
  function AnnotationOnly() {
    AnnotationOnly_instance = this;
    FormatAssertionFactory.call(this, false);
  }
  protoOf(AnnotationOnly).toString = function () {
    return 'AnnotationOnly';
  };
  protoOf(AnnotationOnly).hashCode = function () {
    return -755274903;
  };
  protoOf(AnnotationOnly).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotationOnly))
      return false;
    other instanceof AnnotationOnly || THROW_CCE();
    return true;
  };
  var AnnotationOnly_instance;
  function AnnotationOnly_getInstance() {
    if (AnnotationOnly_instance == null)
      new AnnotationOnly();
    return AnnotationOnly_instance;
  }
  function AnnotationAndAssertion() {
    AnnotationAndAssertion_instance = this;
    FormatAssertionFactory.call(this, true);
  }
  protoOf(AnnotationAndAssertion).toString = function () {
    return 'AnnotationAndAssertion';
  };
  protoOf(AnnotationAndAssertion).hashCode = function () {
    return -1243538008;
  };
  protoOf(AnnotationAndAssertion).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotationAndAssertion))
      return false;
    other instanceof AnnotationAndAssertion || THROW_CCE();
    return true;
  };
  var AnnotationAndAssertion_instance;
  function AnnotationAndAssertion_getInstance() {
    if (AnnotationAndAssertion_instance == null)
      new AnnotationAndAssertion();
    return AnnotationAndAssertion_instance;
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.cd0_1 = 'format';
    var tmp = this;
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.create' call
    tmp.dd0_1 = AnnotationKeyFactory_instance.qcn('format', PrimitiveClasses_getInstance().nd());
    this.ed0_1 = mapOf([to('date', DateFormatValidator_getInstance()), to('time', TimeFormatValidator_getInstance()), to('date-time', DateTimeFormatValidator_getInstance()), to('duration', DurationFormatValidator_getInstance()), to('json-pointer', JsonPointerFormatValidator_getInstance()), to('relative-json-pointer', RelativeJsonPointerFormatValidator_getInstance()), to('ipv4', IpV4FormatValidator_getInstance()), to('ipv6', IpV6FormatValidator_getInstance()), to('uuid', UuidFormatValidator_getInstance()), to('hostname', HostnameFormatValidator_getInstance()), to('idn-hostname', IdnHostnameFormatValidator_getInstance()), to('uri', UriFormatValidator_getInstance()), to('uri-reference', UriReferenceFormatValidator_getInstance()), to('iri', IriFormatValidator_getInstance()), to('iri-reference', IriReferenceFormatValidator_getInstance()), to('uri-template', UriTemplateFormatValidator_getInstance()), to('email', EmailFormatValidator_getInstance()), to('idn-email', IdnEmailFormatValidator_getInstance()), to('regex', RegexFormatValidator_getInstance())]);
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function FormatAssertionFactory(assertion) {
    Companion_getInstance_12();
    AbstractAssertionFactory.call(this, 'format');
    this.bd0_1 = assertion;
  }
  protoOf(FormatAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = this.rcw() + ' must be a string';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var formatKey = element.q4u().toLowerCase();
    var tmp0_elvis_lhs = Companion_getInstance_12().ed0_1.m2(formatKey);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? context.zct().m2(formatKey) : tmp0_elvis_lhs;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return TrueSchemaAssertion_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var validator = tmp_0;
    return new FormatAssertion(context.yct(), formatKey, validator, this.bd0_1);
  };
  function FormatAssertion(schemaPath, formatKey, validator, assertion) {
    this.fd0_1 = schemaPath;
    this.gd0_1 = formatKey;
    this.hd0_1 = validator;
    this.id0_1 = assertion;
  }
  protoOf(FormatAssertion).qco = function (element, context, errorCollector) {
    var result = this.hd0_1.jd0(element);
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.fd0_1);
    var tmp;
    try {
      var tmp_0;
      if (equals(result, Valid_getInstance())) {
        context.ycq().lcq(Companion_getInstance_12().dd0_1, this.gd0_1);
        tmp_0 = true;
      } else if (equals(result, Invalid_getInstance())) {
        var tmp_1;
        if (this.id0_1) {
          this_0.jcp(new ValidationError(this.fd0_1, context.wcq(), "value does not match '" + this.gd0_1 + "' format"));
          tmp_1 = false;
        } else {
          tmp_1 = true;
        }
        tmp_0 = tmp_1;
      } else {
        noWhenBranchMatchedException();
      }
      tmp = tmp_0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function createFromArray($this, typeElement, context) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!typeElement.h()) {
      var message = TypeAssertionFactory_getInstance().rcw() + ' must be a non empty array if it is not a string';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(typeElement, Collection)) {
        tmp = typeElement.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$3 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = typeElement.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        var tmp_0;
        if (element instanceof JsonPrimitive) {
          tmp_0 = element.p4u();
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          tmp$ret$3 = false;
          break $l$block_0;
        }
      }
      tmp$ret$3 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$3) {
      var message_0 = 'each ' + TypeAssertionFactory_getInstance().rcw() + ' element must be a string';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(typeElement, 10));
    var _iterator__ex2g4s_0 = typeElement.p();
    while (_iterator__ex2g4s_0.q()) {
      var item = _iterator__ex2g4s_0.r();
      var tmp$ret$7 = (item instanceof JsonPrimitive ? item : THROW_CCE()).q4u();
      destination.n(tmp$ret$7);
    }
    var types = destination;
    // Inline function 'kotlin.require' call
    if (!(toSet_0(types).s() === types.s())) {
      var message_1 = 'array must consist of unique values';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s_1 = types.p();
    while (_iterator__ex2g4s_1.q()) {
      var element_0 = _iterator__ex2g4s_1.r();
      if (!TypeAssertionFactory_getInstance().ld0_1.n2().w(element_0)) {
        destination_0.n(element_0);
      }
    }
    var unknown = destination_0;
    // Inline function 'kotlin.require' call
    if (!unknown.h()) {
      var message_2 = 'unknown types ' + toString(unknown) + ' (known: ' + toString(TypeAssertionFactory_getInstance().ld0_1.n2()) + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    var tmp_1 = context.yct();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(types, 10));
    var _iterator__ex2g4s_2 = types.p();
    while (_iterator__ex2g4s_2.q()) {
      var item_0 = _iterator__ex2g4s_2.r();
      var tmp0 = TypeAssertionFactory_getInstance().ld0_1.m2(item_0);
      var tmp$ret$18;
      $l$block_1: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0 == null) {
          var message_3 = 'unknown type ' + item_0;
          throw IllegalArgumentException_init_$Create$(toString(message_3));
        } else {
          tmp$ret$18 = tmp0;
          break $l$block_1;
        }
      }
      var tmp$ret$19 = tmp$ret$18;
      destination_1.n(tmp$ret$19);
    }
    return new TypeAssertion(tmp_1, destination_1);
  }
  function createFromPrimitive($this, typeElement, context) {
    // Inline function 'kotlin.require' call
    if (!typeElement.p4u()) {
      var message = TypeAssertionFactory_getInstance().rcw() + ' must be a string if it is not an array';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var type = typeElement.q4u();
    var tmp1 = $this.ld0_1.m2(type);
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = "unknown type '" + type + "' (known: " + toString(TypeAssertionFactory_getInstance().ld0_1.n2()) + ')';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var validation = tmp$ret$3;
    return new TypeAssertion(context.yct(), listOf(validation));
  }
  function TypeAssertionFactory$typeValidations$lambda(it) {
    var tmp;
    if (isInterface(it, PrimitiveElement)) {
      tmp = it.md0();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function TypeAssertionFactory$typeValidations$lambda_0(it) {
    var tmp;
    if (isInterface(it, PrimitiveElement)) {
      tmp = it.p4u();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function TypeAssertionFactory$typeValidations$lambda_1(it) {
    var tmp;
    if (isInterface(it, PrimitiveElement)) {
      tmp = it.nd0();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function TypeAssertionFactory$typeValidations$lambda_2(it) {
    var tmp;
    if (isInterface(it, PrimitiveElement)) {
      tmp = it.od0();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function TypeAssertionFactory$typeValidations$lambda_3(it) {
    var tmp;
    var tmp_0;
    if (isInterface(it, PrimitiveElement)) {
      tmp_0 = it.od0();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp0_safe_receiver = parseNumberParts(it);
      tmp = equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qd0_1, new Long(0, 0));
    } else {
      tmp = false;
    }
    return tmp;
  }
  function TypeAssertionFactory$typeValidations$lambda_4(it) {
    return isInterface(it, ArrayElement);
  }
  function TypeAssertionFactory$typeValidations$lambda_5(it) {
    return isInterface(it, ObjectElement);
  }
  function TypeAssertionFactory() {
    TypeAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'type');
    var tmp = this;
    var tmp_0 = to('null', TypeAssertionFactory$typeValidations$lambda);
    var tmp_1 = to('string', TypeAssertionFactory$typeValidations$lambda_0);
    var tmp_2 = to('boolean', TypeAssertionFactory$typeValidations$lambda_1);
    var tmp_3 = to('number', TypeAssertionFactory$typeValidations$lambda_2);
    var tmp_4 = to('integer', TypeAssertionFactory$typeValidations$lambda_3);
    var tmp_5 = to('array', TypeAssertionFactory$typeValidations$lambda_4);
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = linkedMapOf([tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, to('object', TypeAssertionFactory$typeValidations$lambda_5)]);
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(this_0.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp_6 = element.a1();
      var tmp$ret$1 = new Validation(element.a1(), element.b1());
      destination.p2(tmp_6, tmp$ret$1);
    }
    tmp.ld0_1 = destination;
  }
  protoOf(TypeAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = createFromPrimitive(this, element, context);
    } else {
      if (element instanceof JsonArray) {
        tmp = createFromArray(this, element, context);
      } else {
        throw IllegalArgumentException_init_$Create$(this.rcw() + ' must be either array or a string');
      }
    }
    return tmp;
  };
  var TypeAssertionFactory_instance;
  function TypeAssertionFactory_getInstance() {
    if (TypeAssertionFactory_instance == null)
      new TypeAssertionFactory();
    return TypeAssertionFactory_instance;
  }
  function Validation(name, check) {
    this.sd0_1 = name;
    this.td0_1 = check;
  }
  function TypeAssertion$validate$lambda(it) {
    return it.sd0_1;
  }
  function TypeAssertion(path, validations) {
    this.ud0_1 = path;
    this.vd0_1 = validations;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.vd0_1.h()) {
      var message = 'empty validations';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(TypeAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.ud0_1);
    var tmp;
    try {
      var tmp0 = this.vd0_1;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.h();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.p();
        while (_iterator__ex2g4s.q()) {
          var element_0 = _iterator__ex2g4s.r();
          if (element_0.td0_1(element)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      var match = tmp$ret$0;
      if (!match) {
        var tmp_1 = context.wcq();
        var tmp_2;
        if (this.vd0_1.s() === 1) {
          tmp_2 = 'element is not a ' + first(this.vd0_1).sd0_1;
        } else {
          tmp_2 = 'element is none of ' + joinToString(this.vd0_1, VOID, '[', ']', VOID, VOID, TypeAssertion$validate$lambda);
        }
        this_0.jcp(new ValidationError(this.ud0_1, tmp_1, tmp_2));
      }
      tmp = match;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function createFromProperty($this, element, context, exclusive) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonPrimitive)) {
      var message = Draft4MaximumAssertionFactory_instance.rcw() + ' must be a number';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_number(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = Draft4MaximumAssertionFactory_instance.rcw() + ' must be a valid number';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maximumValue = tmp$ret$3;
    var tmp = context.yct();
    var tmp_0 = element.q4u();
    var tmp_1 = exclusive ? 'must be less' : 'must be less or equal to';
    var tmp_2;
    if (exclusive) {
      tmp_2 = Draft4MaximumAssertionFactory$createFromProperty$lambda;
    } else {
      tmp_2 = Draft4MaximumAssertionFactory$createFromProperty$lambda_0;
    }
    return new NumberComparisonAssertion(tmp, maximumValue, tmp_0, tmp_1, tmp_2);
  }
  function Draft4MaximumAssertionFactory$createFromProperty$lambda(a, b) {
    return compareTo_0(a, b) < 0;
  }
  function Draft4MaximumAssertionFactory$createFromProperty$lambda_0(a, b) {
    return compareTo_0(a, b) <= 0;
  }
  function Draft4MaximumAssertionFactory() {
    this.wd0_1 = 'exclusiveMaximum';
  }
  protoOf(Draft4MaximumAssertionFactory).rcw = function () {
    return 'maximum';
  };
  protoOf(Draft4MaximumAssertionFactory).scu = function (element) {
    var tmp;
    if (element instanceof JsonObject) {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key = this.rcw();
      tmp = (isInterface(element, KtMap) ? element : THROW_CCE()).k2(key);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Draft4MaximumAssertionFactory).tcu = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonObject)) {
      var message = 'cannot extract ' + Draft4MaximumAssertionFactory_instance.rcw() + ' property from ' + getKClassFromExpression(element).hc();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = element.af(this.rcw());
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = 'no property ' + Draft4MaximumAssertionFactory_instance.rcw() + ' found in element ' + element.toString();
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var typeElement = tmp$ret$3;
    var tmp0_safe_receiver = element.af('exclusiveMaximum');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.require' call
      if (!(tmp0_safe_receiver instanceof JsonPrimitive)) {
        var message_1 = 'exclusiveMaximum must be a boolean';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      var tmp1_0 = get_booleanOrNull(tmp0_safe_receiver);
      var tmp$ret$7;
      $l$block_0: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp1_0 == null) {
          var message_2 = 'exclusiveMaximum must be a valid boolean';
          throw IllegalArgumentException_init_$Create$(toString(message_2));
        } else {
          tmp$ret$7 = tmp1_0;
          break $l$block_0;
        }
      }
      tmp = tmp$ret$7;
    }
    var tmp1_elvis_lhs = tmp;
    var exclusive = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    return createFromProperty(this, typeElement, context.acr(this.rcw()), exclusive);
  };
  var Draft4MaximumAssertionFactory_instance;
  function Draft4MaximumAssertionFactory_getInstance() {
    return Draft4MaximumAssertionFactory_instance;
  }
  function createFromProperty_0($this, element, context, exclusive) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonPrimitive)) {
      var message = Draft4MinimumAssertionFactory_instance.rcw() + ' must be a number';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_number(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = Draft4MinimumAssertionFactory_instance.rcw() + ' must be a valid number';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maximumValue = tmp$ret$3;
    var tmp = context.yct();
    var tmp_0 = element.q4u();
    var tmp_1 = exclusive ? 'must be greater' : 'must be greater or equal to';
    var tmp_2;
    if (exclusive) {
      tmp_2 = Draft4MinimumAssertionFactory$createFromProperty$lambda;
    } else {
      tmp_2 = Draft4MinimumAssertionFactory$createFromProperty$lambda_0;
    }
    return new NumberComparisonAssertion(tmp, maximumValue, tmp_0, tmp_1, tmp_2);
  }
  function Draft4MinimumAssertionFactory$createFromProperty$lambda(a, b) {
    return compareTo_0(a, b) > 0;
  }
  function Draft4MinimumAssertionFactory$createFromProperty$lambda_0(a, b) {
    return compareTo_0(a, b) >= 0;
  }
  function Draft4MinimumAssertionFactory() {
    this.xd0_1 = 'exclusiveMinimum';
  }
  protoOf(Draft4MinimumAssertionFactory).rcw = function () {
    return 'minimum';
  };
  protoOf(Draft4MinimumAssertionFactory).scu = function (element) {
    var tmp;
    if (element instanceof JsonObject) {
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var key = this.rcw();
      tmp = (isInterface(element, KtMap) ? element : THROW_CCE()).k2(key);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Draft4MinimumAssertionFactory).tcu = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonObject)) {
      var message = 'cannot extract ' + Draft4MinimumAssertionFactory_instance.rcw() + ' property from ' + getKClassFromExpression(element).hc();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = element.af(this.rcw());
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = 'no property ' + Draft4MinimumAssertionFactory_instance.rcw() + ' found in element ' + element.toString();
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var typeElement = tmp$ret$3;
    var tmp0_safe_receiver = element.af('exclusiveMinimum');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.require' call
      if (!(tmp0_safe_receiver instanceof JsonPrimitive)) {
        var message_1 = 'exclusiveMinimum must be a boolean';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
      var tmp1_0 = get_booleanOrNull(tmp0_safe_receiver);
      var tmp$ret$7;
      $l$block_0: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp1_0 == null) {
          var message_2 = 'exclusiveMinimum must be a valid boolean';
          throw IllegalArgumentException_init_$Create$(toString(message_2));
        } else {
          tmp$ret$7 = tmp1_0;
          break $l$block_0;
        }
      }
      tmp = tmp$ret$7;
    }
    var tmp1_elvis_lhs = tmp;
    var exclusive = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    return createFromProperty_0(this, typeElement, context.acr(this.rcw()), exclusive);
  };
  var Draft4MinimumAssertionFactory_instance;
  function Draft4MinimumAssertionFactory_getInstance() {
    return Draft4MinimumAssertionFactory_instance;
  }
  function ExclusiveMaximumAssertionFactory$createFromProperty$lambda(a, b) {
    return compareTo_0(a, b) < 0;
  }
  function ExclusiveMaximumAssertionFactory() {
    ExclusiveMaximumAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'exclusiveMaximum');
  }
  protoOf(ExclusiveMaximumAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonPrimitive)) {
      var message = ExclusiveMaximumAssertionFactory_getInstance().rcw() + ' must be a number';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_number(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = ExclusiveMaximumAssertionFactory_getInstance().rcw() + ' must be a valid number';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maximumValue = tmp$ret$3;
    var tmp = context.yct();
    var tmp_0 = element.q4u();
    return new NumberComparisonAssertion(tmp, maximumValue, tmp_0, 'must be less than', ExclusiveMaximumAssertionFactory$createFromProperty$lambda);
  };
  var ExclusiveMaximumAssertionFactory_instance;
  function ExclusiveMaximumAssertionFactory_getInstance() {
    if (ExclusiveMaximumAssertionFactory_instance == null)
      new ExclusiveMaximumAssertionFactory();
    return ExclusiveMaximumAssertionFactory_instance;
  }
  function ExclusiveMinimumAssertionFactory$createFromProperty$lambda(a, b) {
    return compareTo_0(a, b) > 0;
  }
  function ExclusiveMinimumAssertionFactory() {
    ExclusiveMinimumAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'exclusiveMinimum');
  }
  protoOf(ExclusiveMinimumAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonPrimitive)) {
      var message = ExclusiveMinimumAssertionFactory_getInstance().rcw() + ' must be a number';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_number(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = ExclusiveMinimumAssertionFactory_getInstance().rcw() + ' must be a valid number';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maximumValue = tmp$ret$3;
    var tmp = context.yct();
    var tmp_0 = element.q4u();
    return new NumberComparisonAssertion(tmp, maximumValue, tmp_0, 'must be greater than', ExclusiveMinimumAssertionFactory$createFromProperty$lambda);
  };
  var ExclusiveMinimumAssertionFactory_instance;
  function ExclusiveMinimumAssertionFactory_getInstance() {
    if (ExclusiveMinimumAssertionFactory_instance == null)
      new ExclusiveMinimumAssertionFactory();
    return ExclusiveMinimumAssertionFactory_instance;
  }
  function MaximumAssertionFactory$createFromProperty$lambda(a, b) {
    return compareTo_0(a, b) <= 0;
  }
  function MaximumAssertionFactory() {
    MaximumAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'maximum');
  }
  protoOf(MaximumAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonPrimitive)) {
      var message = MaximumAssertionFactory_getInstance().rcw() + ' must be a number';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_number(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MaximumAssertionFactory_getInstance().rcw() + ' must be a valid number';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maximumValue = tmp$ret$3;
    var tmp = context.yct();
    var tmp_0 = element.q4u();
    return new NumberComparisonAssertion(tmp, maximumValue, tmp_0, 'must be less or equal to', MaximumAssertionFactory$createFromProperty$lambda);
  };
  var MaximumAssertionFactory_instance;
  function MaximumAssertionFactory_getInstance() {
    if (MaximumAssertionFactory_instance == null)
      new MaximumAssertionFactory();
    return MaximumAssertionFactory_instance;
  }
  function MinimumAssertionFactory$createFromProperty$lambda(a, b) {
    return compareTo_0(a, b) >= 0;
  }
  function MinimumAssertionFactory() {
    MinimumAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'minimum');
  }
  protoOf(MinimumAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonPrimitive)) {
      var message = MinimumAssertionFactory_getInstance().rcw() + ' must be a number';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_number(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MinimumAssertionFactory_getInstance().rcw() + ' must be a valid number';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maximumValue = tmp$ret$3;
    var tmp = context.yct();
    var tmp_0 = element.q4u();
    return new NumberComparisonAssertion(tmp, maximumValue, tmp_0, 'must be greater or equal to', MinimumAssertionFactory$createFromProperty$lambda);
  };
  var MinimumAssertionFactory_instance;
  function MinimumAssertionFactory_getInstance() {
    if (MinimumAssertionFactory_instance == null)
      new MinimumAssertionFactory();
    return MinimumAssertionFactory_instance;
  }
  function isMultipleOf$ref() {
    var l = function (p0, p1) {
      return isMultipleOf(p0, p1);
    };
    l.callableName = 'isMultipleOf';
    return l;
  }
  function MultipleOfAssertionFactory() {
    MultipleOfAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'multipleOf');
  }
  protoOf(MultipleOfAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonPrimitive)) {
      var message = MultipleOfAssertionFactory_getInstance().rcw() + ' must be a number';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_number(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MultipleOfAssertionFactory_getInstance().rcw() + ' must be a valid number';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var multipleOfValue = tmp$ret$3;
    var tmp;
    if (typeof multipleOfValue === 'number') {
      tmp = multipleOfValue > 0.0;
    } else {
      if (multipleOfValue instanceof Long) {
        tmp = multipleOfValue.g1(new Long(0, 0)) > 0;
      } else {
        var message_1 = 'unexpected value type ' + getKClassFromExpression(multipleOfValue).hc();
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message_2 = MultipleOfAssertionFactory_getInstance().rcw() + ' value ' + element.q4u() + ' must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    var tmp_0 = context.yct();
    var tmp_1 = element.q4u();
    return new NumberComparisonAssertion(tmp_0, multipleOfValue, tmp_1, 'is not a multiple of', isMultipleOf$ref());
  };
  var MultipleOfAssertionFactory_instance;
  function MultipleOfAssertionFactory_getInstance() {
    if (MultipleOfAssertionFactory_instance == null)
      new MultipleOfAssertionFactory();
    return MultipleOfAssertionFactory_instance;
  }
  function isMultipleOf(a, b) {
    var tmp;
    if (typeof a === 'number') {
      tmp = (isFinite(a) && isMultipleOf_0(a, b));
    } else {
      if (a instanceof Long) {
        tmp = isMultipleOf_1(a, b);
      } else {
        tmp = false;
      }
    }
    return tmp;
  }
  function isMultipleOf_0(_this__u8e3s4, number) {
    var tmp;
    if (typeof number === 'number') {
      tmp = (isFinite(number) && isZero(rem(_this__u8e3s4, number)));
    } else {
      if (number instanceof Long) {
        tmp = isZero(_this__u8e3s4 % number.t3());
      } else {
        tmp = false;
      }
    }
    return tmp;
  }
  function isMultipleOf_1(_this__u8e3s4, number) {
    var tmp;
    if (number instanceof Long) {
      tmp = _this__u8e3s4.f3(number).equals(new Long(0, 0));
    } else {
      if (typeof number === 'number') {
        tmp = (isFinite(number) && isZero(rem_0(_this__u8e3s4, number)));
      } else {
        tmp = false;
      }
    }
    return tmp;
  }
  function isZero(first) {
    return first === -0.0 || first === 0.0;
  }
  function rem(first, second) {
    var first_0 = first;
    var second_0 = second;
    $l$1: do {
      $l$0: do {
        var tmp;
        if (second_0 < 1 && second_0 > -1) {
          // Inline function 'kotlin.math.log10' call
          var x = second_0;
          // Inline function 'kotlin.math.floor' call
          var x_0 = log10(x);
          var degree = Math.floor(x_0);
          var tmp_0;
          if (first_0 < 1 && first_0 > -1) {
            // Inline function 'kotlin.math.log10' call
            var x_1 = second_0;
            // Inline function 'kotlin.math.floor' call
            var x_2 = log10(x_1);
            // Inline function 'kotlin.math.max' call
            var a = Math.floor(x_2);
            var newDegree = Math.max(a, degree);
            // Inline function 'kotlin.math.pow' call
            var x_3 = -newDegree;
            var newPow = Math.pow(10.0, x_3);
            var tmp0 = safeRound(first_0 * newPow);
            var tmp1 = safeRound(second_0 * newPow);
            first_0 = tmp0;
            second_0 = tmp1;
            continue $l$0;
          } else {
            // Inline function 'kotlin.math.pow' call
            var x_4 = -degree;
            var pow = Math.pow(10.0, x_4);
            var newFirst = safeRound(first_0 * pow);
            var newSecond = safeRound(second_0 * pow);
            tmp_0 = newFirst % newSecond;
          }
          tmp = tmp_0;
        } else {
          tmp = first_0 % second_0;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function rem_0(first, second) {
    var tmp;
    if (second < 1 && second > -1) {
      // Inline function 'kotlin.math.log10' call
      // Inline function 'kotlin.math.floor' call
      var x = log10(second);
      var degree = Math.floor(x);
      // Inline function 'kotlin.math.pow' call
      var x_0 = -degree;
      // Inline function 'kotlin.Long.rem' call
      var other = second * Math.pow(10.0, x_0);
      tmp = first.t3() % other;
    } else {
      // Inline function 'kotlin.Long.rem' call
      tmp = first.t3() % second;
    }
    return tmp;
  }
  function safeRound(value) {
    var rounded = round(value);
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = rounded - value;
    if (Math.abs(x) < 1.0E-9) {
      tmp = rounded;
    } else {
      tmp = value;
    }
    return tmp;
  }
  function NumberComparisonAssertion(path, boundary, boundaryContent, errorMessage, check) {
    this.dd1_1 = path;
    this.ed1_1 = boundary;
    this.fd1_1 = boundaryContent;
    this.gd1_1 = errorMessage;
    this.hd1_1 = check;
  }
  protoOf(NumberComparisonAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.dd1_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_0: {
        var tmp_0;
        if (!isInterface(element, PrimitiveElement)) {
          tmp_0 = true;
        } else {
          tmp_0 = element.p4u();
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_elvis_lhs = get_number(element);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          return true;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var value = tmp_1;
        if (this.hd1_1(value, this.ed1_1)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        this_0.jcp(new ValidationError(this.dd1_1, context.wcq(), element.q4u() + ' ' + this.gd1_1 + ' ' + this.fd1_1));
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function compareTo_0(_this__u8e3s4, maxValue) {
    var tmp;
    if (typeof _this__u8e3s4 === 'number') {
      var tmp_0;
      if (typeof maxValue === 'number') {
        tmp_0 = compareTo(_this__u8e3s4, maxValue);
      } else {
        if (maxValue instanceof Long) {
          tmp_0 = compareTo(_this__u8e3s4, maxValue);
        } else {
          if (typeof maxValue === 'number') {
            tmp_0 = compareTo(_this__u8e3s4, maxValue);
          } else {
            var message = 'unexpected other value type: ' + getKClassFromExpression(maxValue).hc();
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
      tmp = tmp_0;
    } else {
      if (_this__u8e3s4 instanceof Long) {
        var tmp_1;
        if (typeof maxValue === 'number') {
          // Inline function 'kotlin.Long.compareTo' call
          tmp_1 = compareTo(_this__u8e3s4.t3(), maxValue);
        } else {
          if (maxValue instanceof Long) {
            tmp_1 = _this__u8e3s4.g1(maxValue);
          } else {
            if (typeof maxValue === 'number') {
              // Inline function 'kotlin.Long.compareTo' call
              tmp_1 = _this__u8e3s4.g1(toLong_0(maxValue));
            } else {
              var message_0 = 'unexpected other value type: ' + getKClassFromExpression(maxValue).hc();
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
          }
        }
        tmp = tmp_1;
      } else {
        if (typeof _this__u8e3s4 === 'number') {
          var tmp_2;
          if (typeof maxValue === 'number') {
            tmp_2 = compareTo(_this__u8e3s4, maxValue);
          } else {
            if (maxValue instanceof Long) {
              tmp_2 = compareTo(_this__u8e3s4, maxValue);
            } else {
              if (typeof maxValue === 'number') {
                tmp_2 = compareTo(_this__u8e3s4, maxValue);
              } else {
                var message_1 = 'unexpected other value type: ' + getKClassFromExpression(maxValue).hc();
                throw IllegalStateException_init_$Create$(toString(message_1));
              }
            }
          }
          tmp = tmp_2;
        } else {
          var message_2 = 'unexpected value type: ' + getKClassFromExpression(_this__u8e3s4).hc();
          throw IllegalStateException_init_$Create$(toString(message_2));
        }
      }
    }
    return tmp;
  }
  function Boolean$or$ref_3() {
    var l = function (p0, p1) {
      return !!(p0 | p1);
    };
    l.callableName = 'or';
    return l;
  }
  function AdditionalPropertiesAssertionFactory() {
    AdditionalPropertiesAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'additionalProperties');
    var tmp = this;
    var tmp1 = this.rcw();
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.createAggregatable' call
    var aggregator = Boolean$or$ref_3();
    tmp.jd1_1 = AnnotationKeyFactory_instance.icq(tmp1, PrimitiveClasses_getInstance().gd(), aggregator);
  }
  protoOf(AdditionalPropertiesAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = AdditionalPropertiesAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var schemaAssertion = context.acu(element);
    return new AdditionalPropertiesAssertion(context.yct(), schemaAssertion);
  };
  var AdditionalPropertiesAssertionFactory_instance;
  function AdditionalPropertiesAssertionFactory_getInstance() {
    if (AdditionalPropertiesAssertionFactory_instance == null)
      new AdditionalPropertiesAssertionFactory();
    return AdditionalPropertiesAssertionFactory_instance;
  }
  function AdditionalPropertiesAssertion(location, assertion) {
    this.kd1_1 = location;
    this.ld1_1 = assertion;
  }
  protoOf(AdditionalPropertiesAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.kd1_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block: {
        if (!isInterface(element, ObjectElement)) {
          tmp$ret$0 = true;
          break $l$block;
        }
        var annotationCollector = context.ycq();
        var propertiesAnnotation = annotationCollector.mcq(PropertiesAssertionFactory_getInstance().nd1_1);
        var patternAnnotation = annotationCollector.mcq(PatternPropertiesAssertionFactory_getInstance().pd1_1);
        var result = true;
        var _iterator__ex2g4s = element.p();
        $l$loop_0: while (_iterator__ex2g4s.q()) {
          var _destruct__k2r9zo = _iterator__ex2g4s.r();
          var prop = _destruct__k2r9zo.dc();
          var value = _destruct__k2r9zo.ec();
          if ((propertiesAnnotation == null ? null : propertiesAnnotation.w(prop)) === true) {
            continue $l$loop_0;
          }
          if ((patternAnnotation == null ? null : patternAnnotation.w(prop)) === true) {
            continue $l$loop_0;
          }
          var ctx = context.acr(prop);
          // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
          var this_1 = this_0.dcp(ctx.wcq());
          var tmp_0;
          try {
            tmp_0 = this.ld1_1.qco(value, ctx, this_1);
          }finally {
            this_1.sco();
          }
          var valid = tmp_0;
          result = (result && valid);
        }
        if (result) {
          annotationCollector.lcq(AdditionalPropertiesAssertionFactory_getInstance().jd1_1, true);
        }
        tmp$ret$0 = result;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function Companion_12() {
  }
  protoOf(Companion_12).qd1 = function (property, array, context) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(array, Collection)) {
        tmp = array.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = array.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        var tmp_0;
        if (element instanceof JsonPrimitive) {
          tmp_0 = element.p4u();
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$0) {
      var message = property + ' must contain only strings';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.linkedSetOf' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = LinkedHashSet_init_$Create$();
    var _iterator__ex2g4s_0 = array.p();
    while (_iterator__ex2g4s_0.q()) {
      var item = _iterator__ex2g4s_0.r();
      var tmp$ret$5 = (item instanceof JsonPrimitive ? item : THROW_CCE()).q4u();
      destination.n(tmp$ret$5);
    }
    var uniqueRequiredProperties = destination;
    // Inline function 'kotlin.require' call
    if (!(uniqueRequiredProperties.s() === array.s())) {
      var message_0 = property + ' must consist of unique elements';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var tmp_1;
    if (uniqueRequiredProperties.h()) {
      tmp_1 = TrueSchemaAssertion_instance;
    } else {
      tmp_1 = new ConditionalRequiredPropertiesAssertion(context.yct(), property, uniqueRequiredProperties);
    }
    return tmp_1;
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function ConditionalRequiredPropertiesAssertion$validate$lambda($element) {
    return function (it) {
      return !$element.d2r(it);
    };
  }
  function ConditionalRequiredPropertiesAssertion(path, property, dependencies) {
    this.rd1_1 = path;
    this.sd1_1 = property;
    this.td1_1 = dependencies;
  }
  protoOf(ConditionalRequiredPropertiesAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.rd1_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_0: {
        if (!isInterface(element, ObjectElement)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp_0 = asSequence_0(this.td1_1);
        var missingProperties = toSet(filter(tmp_0, ConditionalRequiredPropertiesAssertion$validate$lambda(element)));
        if (missingProperties.h()) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        this_0.jcp(new ValidationError(this.rd1_1, context.wcq(), "has '" + this.sd1_1 + "' property but missing required dependencies: " + toString(missingProperties)));
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function DependenciesAssertion(location, dependenciesAssertions) {
    this.ud1_1 = location;
    this.vd1_1 = dependenciesAssertions;
  }
  protoOf(DependenciesAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.ud1_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block: {
        if (!isInterface(element, ObjectElement)) {
          tmp$ret$0 = true;
          break $l$block;
        }
        var valid = true;
        // Inline function 'kotlin.collections.iterator' call
        var _iterator__ex2g4s = this.vd1_1.z().p();
        $l$loop: while (_iterator__ex2g4s.q()) {
          var _destruct__k2r9zo = _iterator__ex2g4s.r();
          // Inline function 'kotlin.collections.component1' call
          var dependency = _destruct__k2r9zo.a1();
          // Inline function 'kotlin.collections.component2' call
          var assertion = _destruct__k2r9zo.b1();
          if (!element.d2r(dependency)) {
            continue $l$loop;
          }
          var childContext = context.ccr();
          var res = assertion.qco(element, childContext, this_0);
          if (res) {
            childContext.bcr();
          }
          valid = !!(valid & res);
        }
        tmp$ret$0 = valid;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function loadAssertions($this, jsonObject, context) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(jsonObject.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = jsonObject.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp = element.a1();
      // Inline function 'kotlin.collections.component1' call
      var prop = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var element_0 = element.b1();
      var propContext = context.acr(prop);
      var tmp_0;
      if (context.bcu(element_0)) {
        tmp_0 = propContext.acu(element_0);
      } else {
        if (element_0 instanceof JsonArray) {
          tmp_0 = Companion_instance_12.qd1(prop, element_0, propContext);
        } else {
          throw IllegalArgumentException_init_$Create$(prop + ' dependency must be either array of strings or valid JSON schema');
        }
      }
      var tmp$ret$3 = tmp_0;
      destination.p2(tmp, tmp$ret$3);
    }
    return destination;
  }
  function DependenciesAssertionFactory() {
    DependenciesAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'dependencies');
  }
  protoOf(DependenciesAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonObject)) {
      var message = DependenciesAssertionFactory_getInstance().rcw() + ' must be an object';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (element.h()) {
      return TrueSchemaAssertion_instance;
    }
    var assertions = loadAssertions(this, element, context);
    return new DependenciesAssertion(context.yct(), assertions);
  };
  var DependenciesAssertionFactory_instance;
  function DependenciesAssertionFactory_getInstance() {
    if (DependenciesAssertionFactory_instance == null)
      new DependenciesAssertionFactory();
    return DependenciesAssertionFactory_instance;
  }
  function DependentRequiredAssertionFactory() {
    DependentRequiredAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'dependentRequired');
  }
  protoOf(DependentRequiredAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonObject)) {
      var message = DependentRequiredAssertionFactory_getInstance().rcw() + ' must be an object';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (element.h()) {
      return TrueSchemaAssertion_instance;
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(element.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = element.z().p();
    while (_iterator__ex2g4s.q()) {
      var element_0 = _iterator__ex2g4s.r();
      var tmp = element_0.a1();
      // Inline function 'kotlin.collections.component1' call
      var prop = element_0.a1();
      // Inline function 'kotlin.collections.component2' call
      var el = element_0.b1();
      // Inline function 'kotlin.require' call
      if (!(el instanceof JsonArray)) {
        var message_0 = prop + ' dependency must be an array';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var tmp$ret$7 = Companion_instance_12.qd1(prop, el, context.acr(prop));
      destination.p2(tmp, tmp$ret$7);
    }
    var assertionsByProp = destination;
    return new DependenciesAssertion(context.yct(), assertionsByProp);
  };
  var DependentRequiredAssertionFactory_instance;
  function DependentRequiredAssertionFactory_getInstance() {
    if (DependentRequiredAssertionFactory_instance == null)
      new DependentRequiredAssertionFactory();
    return DependentRequiredAssertionFactory_instance;
  }
  function DependentSchemasAssertionFactory() {
    DependentSchemasAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'dependentSchemas');
  }
  protoOf(DependentSchemasAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonObject)) {
      var message = DependentSchemasAssertionFactory_getInstance().rcw() + ' must be an object';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (element.h()) {
      return TrueSchemaAssertion_instance;
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(element.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = element.z().p();
    while (_iterator__ex2g4s.q()) {
      var element_0 = _iterator__ex2g4s.r();
      var tmp = element_0.a1();
      // Inline function 'kotlin.collections.component1' call
      var prop = element_0.a1();
      // Inline function 'kotlin.collections.component2' call
      var el = element_0.b1();
      // Inline function 'kotlin.require' call
      if (!context.bcu(el)) {
        var message_0 = prop + ' dependency must be a valid JSON schema';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var tmp$ret$7 = context.acr(prop).acu(el);
      destination.p2(tmp, tmp$ret$7);
    }
    var dependentSchemas = destination;
    return new DependenciesAssertion(context.yct(), dependentSchemas);
  };
  var DependentSchemasAssertionFactory_instance;
  function DependentSchemasAssertionFactory_getInstance() {
    if (DependentSchemasAssertionFactory_instance == null)
      new DependentSchemasAssertionFactory();
    return DependentSchemasAssertionFactory_instance;
  }
  function MaxPropertiesAssertionFactory$createFromProperty$lambda(a, b) {
    return a <= b;
  }
  function MaxPropertiesAssertionFactory() {
    MaxPropertiesAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'maxProperties');
  }
  protoOf(MaxPropertiesAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = !element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = MaxPropertiesAssertionFactory_getInstance().rcw() + ' must be an integer';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_integerOrNull(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MaxPropertiesAssertionFactory_getInstance().rcw() + ' must be a valid integer';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maxPropertiesValue = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!(maxPropertiesValue >= 0)) {
      var message_1 = MaxPropertiesAssertionFactory_getInstance().rcw() + ' must be a non-negative integer';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp_0 = context.yct();
    return new PropertiesNumberAssertion(tmp_0, maxPropertiesValue, 'must be less or equal to', MaxPropertiesAssertionFactory$createFromProperty$lambda);
  };
  var MaxPropertiesAssertionFactory_instance;
  function MaxPropertiesAssertionFactory_getInstance() {
    if (MaxPropertiesAssertionFactory_instance == null)
      new MaxPropertiesAssertionFactory();
    return MaxPropertiesAssertionFactory_instance;
  }
  function MinPropertiesAssertionFactory$createFromProperty$lambda(a, b) {
    return a >= b;
  }
  function MinPropertiesAssertionFactory() {
    MinPropertiesAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'minProperties');
  }
  protoOf(MinPropertiesAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = !element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = MinPropertiesAssertionFactory_getInstance().rcw() + ' must be an integer';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_integerOrNull(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MinPropertiesAssertionFactory_getInstance().rcw() + ' must be a valid integer';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var minPropertiesValue = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!(minPropertiesValue >= 0)) {
      var message_1 = MinPropertiesAssertionFactory_getInstance().rcw() + ' must be a non-negative integer';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp_0 = context.yct();
    return new PropertiesNumberAssertion(tmp_0, minPropertiesValue, 'must be greater or equal to', MinPropertiesAssertionFactory$createFromProperty$lambda);
  };
  var MinPropertiesAssertionFactory_instance;
  function MinPropertiesAssertionFactory_getInstance() {
    if (MinPropertiesAssertionFactory_instance == null)
      new MinPropertiesAssertionFactory();
    return MinPropertiesAssertionFactory_instance;
  }
  function PatternPropertiesAssertionFactory$ANNOTATION$lambda(a, b) {
    return plus_0(a, b);
  }
  function PatternPropertiesAssertionFactory() {
    PatternPropertiesAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'patternProperties');
    var tmp = this;
    var tmp1 = this.rcw();
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.createAggregatable' call
    var aggregator = PatternPropertiesAssertionFactory$ANNOTATION$lambda;
    tmp.pd1_1 = AnnotationKeyFactory_instance.icq(tmp1, getKClass(KtSet), aggregator);
  }
  protoOf(PatternPropertiesAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonObject)) {
      var message = PatternPropertiesAssertionFactory_getInstance().rcw() + ' must be an object';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.sequences.associate' call
    var tmp0 = asSequence(element);
    // Inline function 'kotlin.sequences.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element_0 = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var prop = element_0.a1();
      // Inline function 'kotlin.collections.component2' call
      var element_1 = element_0.b1();
      // Inline function 'kotlin.require' call
      if (!context.bcu(element_1)) {
        var message_0 = prop + ' must be a valid JSON schema';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var tmp;
      try {
        // Inline function 'kotlin.text.toRegex' call
        tmp = Regex_init_$Create$(prop);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          var exOrJsError = $p;
          throw IllegalArgumentException_init_$Create$_0(prop + ' must be a valid regular expression', exOrJsError);
        } else {
          throw $p;
        }
      }
      var regex = tmp;
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(regex, context.acr(prop).acu(element_1));
      destination.p2(pair.bc_1, pair.cc_1);
    }
    var propAssertions = destination;
    return new PatternAssertion(context.yct(), propAssertions);
  };
  var PatternPropertiesAssertionFactory_instance;
  function PatternPropertiesAssertionFactory_getInstance() {
    if (PatternPropertiesAssertionFactory_instance == null)
      new PatternPropertiesAssertionFactory();
    return PatternPropertiesAssertionFactory_instance;
  }
  function PatternAssertion(location, assertionsByRegex) {
    this.bd2_1 = location;
    this.cd2_1 = assertionsByRegex;
  }
  protoOf(PatternAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.bd2_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_0: {
        if (!isInterface(element, ObjectElement)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        if (this.cd2_1.h()) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var result = true;
        var checkedProps = null;
        var _iterator__ex2g4s = element.p();
        $l$loop: while (_iterator__ex2g4s.q()) {
          var _destruct__k2r9zo = _iterator__ex2g4s.r();
          var prop = _destruct__k2r9zo.dc();
          var value = _destruct__k2r9zo.ec();
          // Inline function 'kotlin.collections.filter' call
          var tmp0 = this.cd2_1;
          // Inline function 'kotlin.collections.filterTo' call
          var destination = LinkedHashMap_init_$Create$_0();
          // Inline function 'kotlin.collections.iterator' call
          var _iterator__ex2g4s_0 = tmp0.z().p();
          while (_iterator__ex2g4s_0.q()) {
            var element_0 = _iterator__ex2g4s_0.r();
            // Inline function 'kotlin.collections.component1' call
            var regex = element_0.a1();
            if (regex.se(prop)) {
              destination.p2(element_0.a1(), element_0.b1());
            }
          }
          var matchedRegex = destination;
          if (matchedRegex.h()) {
            continue $l$loop;
          }
          if (checkedProps == null) {
            // Inline function 'kotlin.collections.hashSetOf' call
            checkedProps = HashSet_init_$Create$();
          }
          checkedProps.n(prop);
          var propContext = context.acr(prop);
          // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
          var this_1 = this_0.dcp(propContext.wcq());
          try {
            // Inline function 'kotlin.collections.iterator' call
            var _iterator__ex2g4s_1 = matchedRegex.z().p();
            while (_iterator__ex2g4s_1.q()) {
              // Inline function 'kotlin.collections.component2' call
              var assertion = _iterator__ex2g4s_1.r().b1();
              var valid = assertion.qco(value, propContext, this_1);
              result = (result && valid);
            }
          }finally {
            this_1.sco();
          }
        }
        var tmp0_safe_receiver = checkedProps;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.also' call
          context.ycq().lcq(PatternPropertiesAssertionFactory_getInstance().pd1_1, tmp0_safe_receiver);
        }
        tmp$ret$0 = result;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function PropertiesAssertionFactory$ANNOTATION$lambda(a, b) {
    return plus_0(a, b);
  }
  function PropertiesAssertionFactory() {
    PropertiesAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'properties');
    var tmp = this;
    var tmp1 = this.rcw();
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.createAggregatable' call
    var aggregator = PropertiesAssertionFactory$ANNOTATION$lambda;
    tmp.nd1_1 = AnnotationKeyFactory_instance.icq(tmp1, getKClass(KtSet), aggregator);
  }
  protoOf(PropertiesAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonObject)) {
      var message = PropertiesAssertionFactory_getInstance().rcw() + ' must be an object';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(element.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = element.z().p();
    while (_iterator__ex2g4s.q()) {
      var element_0 = _iterator__ex2g4s.r();
      var tmp = element_0.a1();
      // Inline function 'kotlin.collections.component1' call
      var prop = element_0.a1();
      // Inline function 'kotlin.collections.component2' call
      var element_1 = element_0.b1();
      // Inline function 'kotlin.require' call
      if (!context.bcu(element_1)) {
        var message_0 = prop + ' must be a valid JSON schema';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var tmp$ret$7 = context.acr(prop).acu(element_1);
      destination.p2(tmp, tmp$ret$7);
    }
    var propAssertions = destination;
    return new PropertiesAssertion(context.yct(), propAssertions);
  };
  var PropertiesAssertionFactory_instance;
  function PropertiesAssertionFactory_getInstance() {
    if (PropertiesAssertionFactory_instance == null)
      new PropertiesAssertionFactory();
    return PropertiesAssertionFactory_instance;
  }
  function PropertiesAssertion(location, assertionsByProperty) {
    this.dd2_1 = location;
    this.ed2_1 = assertionsByProperty;
  }
  protoOf(PropertiesAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.dd2_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_0: {
        if (this.ed2_1.h()) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        if (!isInterface(element, ObjectElement)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var result = true;
        var _iterator__ex2g4s = element.p();
        $l$loop: while (_iterator__ex2g4s.q()) {
          var _destruct__k2r9zo = _iterator__ex2g4s.r();
          var prop = _destruct__k2r9zo.dc();
          var value = _destruct__k2r9zo.ec();
          var tmp0_elvis_lhs = this.ed2_1.m2(prop);
          var tmp_0;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop;
          } else {
            tmp_0 = tmp0_elvis_lhs;
          }
          var propAssertion = tmp_0;
          var ctx = context.acr(prop);
          // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
          var this_1 = this_0.dcp(ctx.wcq());
          var tmp_1;
          try {
            tmp_1 = propAssertion.qco(value, ctx, this_1);
          }finally {
            this_1.sco();
          }
          var valid = tmp_1;
          result = (result && valid);
        }
        context.ycq().lcq(PropertiesAssertionFactory_getInstance().nd1_1, this.ed2_1.n2());
        tmp$ret$0 = result;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function PropertiesNumberAssertion(path, length, errorMessage, check) {
    this.fd2_1 = path;
    this.gd2_1 = length;
    this.hd2_1 = errorMessage;
    this.id2_1 = check;
  }
  protoOf(PropertiesNumberAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.fd2_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_0: {
        if (!isInterface(element, ObjectElement)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        if (this.id2_1(element.s(), this.gd2_1)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        this_0.jcp(new ValidationError(this.fd2_1, context.wcq(), 'number of properties ' + this.hd2_1 + ' ' + this.gd2_1));
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function PropertyNamesAssertionFactory() {
    PropertyNamesAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'propertyNames');
  }
  protoOf(PropertyNamesAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = PropertyNamesAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var propertyNamesAssertion = context.acu(element);
    return new PropertyNamesAssertion(context.yct(), propertyNamesAssertion);
  };
  var PropertyNamesAssertionFactory_instance;
  function PropertyNamesAssertionFactory_getInstance() {
    if (PropertyNamesAssertionFactory_instance == null)
      new PropertyNamesAssertionFactory();
    return PropertyNamesAssertionFactory_instance;
  }
  function PropertyNamesAssertion$validate$lambda($property) {
    return function ($this$withErrorTransformer, it) {
      return it.ecq(VOID, VOID, 'property ' + $property + ': ' + it.acq_1);
    };
  }
  function PropertyNamesAssertion(location, namesAssertion) {
    this.kd2_1 = location;
    this.ld2_1 = namesAssertion;
  }
  protoOf(PropertyNamesAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.kd2_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block: {
        if (!isInterface(element, ObjectElement)) {
          tmp$ret$0 = true;
          break $l$block;
        }
        var valid = true;
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s = element.n2().p();
        while (_iterator__ex2g4s.q()) {
          var element_0 = _iterator__ex2g4s.r();
          var ctx = context.acr(element_0);
          var tmp_0 = this_0.dcp(ctx.wcq());
          // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
          var this_1 = tmp_0.hcp(PropertyNamesAssertion$validate$lambda(element_0));
          var tmp_1;
          try {
            tmp_1 = this.ld2_1.qco(new StringWrapper(_StringWrapper___init__impl__4k377b(element_0)), ctx, this_1);
          }finally {
            this_1.sco();
          }
          var res = tmp_1;
          valid = !!(valid & res);
        }
        tmp$ret$0 = valid;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function RequiredAssertionFactory() {
    RequiredAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'required');
  }
  protoOf(RequiredAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!(element instanceof JsonArray)) {
      var message = RequiredAssertionFactory_getInstance().rcw() + ' must be an array';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(element, Collection)) {
        tmp = element.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$2 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = element.p();
      while (_iterator__ex2g4s.q()) {
        var element_0 = _iterator__ex2g4s.r();
        var tmp_0;
        if (element_0 instanceof JsonPrimitive) {
          tmp_0 = element_0.p4u();
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          tmp$ret$2 = false;
          break $l$block_0;
        }
      }
      tmp$ret$2 = true;
    }
    // Inline function 'kotlin.require' call
    if (!tmp$ret$2) {
      var message_0 = RequiredAssertionFactory_getInstance().rcw() + ' must contain only strings';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.linkedSetOf' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = LinkedHashSet_init_$Create$();
    var _iterator__ex2g4s_0 = element.p();
    while (_iterator__ex2g4s_0.q()) {
      var item = _iterator__ex2g4s_0.r();
      var tmp$ret$7 = (item instanceof JsonPrimitive ? item : THROW_CCE()).q4u();
      destination.n(tmp$ret$7);
    }
    var uniqueRequiredProperties = destination;
    // Inline function 'kotlin.require' call
    if (!(uniqueRequiredProperties.s() === element.s())) {
      var message_1 = RequiredAssertionFactory_getInstance().rcw() + ' must consist of unique elements';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp_1;
    if (uniqueRequiredProperties.h()) {
      tmp_1 = TrueSchemaAssertion_instance;
    } else {
      tmp_1 = new RequiredAssertion(context.yct(), uniqueRequiredProperties);
    }
    return tmp_1;
  };
  var RequiredAssertionFactory_instance;
  function RequiredAssertionFactory_getInstance() {
    if (RequiredAssertionFactory_instance == null)
      new RequiredAssertionFactory();
    return RequiredAssertionFactory_instance;
  }
  function RequiredAssertion(path, requiredProperties) {
    this.nd2_1 = path;
    this.od2_1 = requiredProperties;
  }
  protoOf(RequiredAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.nd2_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_0: {
        if (!isInterface(element, ObjectElement)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp_0;
        if (isEmpty(element)) {
          tmp_0 = this.od2_1;
        } else {
          var keys = element.n2();
          var tmp2 = this.od2_1;
          // Inline function 'kotlin.math.max' call
          var a = this.od2_1.s() / 2 | 0;
          var tmp$ret$1 = Math.max(a, 1);
          // Inline function 'kotlin.collections.filterNotTo' call
          var destination = HashSet_init_$Create$_0(tmp$ret$1);
          var _iterator__ex2g4s = tmp2.p();
          while (_iterator__ex2g4s.q()) {
            var element_0 = _iterator__ex2g4s.r();
            if (!keys.w(element_0)) {
              destination.n(element_0);
            }
          }
          tmp_0 = destination;
        }
        var missingProperties = tmp_0;
        if (missingProperties.h()) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        this_0.jcp(new ValidationError(this.nd2_1, context.wcq(), 'missing required properties: ' + toString(missingProperties)));
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function Boolean$or$ref_4() {
    var l = function (p0, p1) {
      return !!(p0 | p1);
    };
    l.callableName = 'or';
    return l;
  }
  function UnevaluatedPropertiesAssertionFactory() {
    UnevaluatedPropertiesAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'unevaluatedProperties');
    var tmp = this;
    var tmp1 = this.rcw();
    // Inline function 'io.github.optimumcode.json.schema.internal.AnnotationKeyFactory.createAggregatable' call
    var aggregator = Boolean$or$ref_4();
    tmp.qd2_1 = AnnotationKeyFactory_instance.icq(tmp1, PrimitiveClasses_getInstance().gd(), aggregator);
  }
  protoOf(UnevaluatedPropertiesAssertionFactory).scw = function (element, context) {
    // Inline function 'kotlin.require' call
    if (!context.bcu(element)) {
      var message = UnevaluatedPropertiesAssertionFactory_getInstance().rcw() + ' must be a valid JSON schema';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new UnevaluatedPropertiesAssertion(context.yct(), context.acu(element));
  };
  var UnevaluatedPropertiesAssertionFactory_instance;
  function UnevaluatedPropertiesAssertionFactory_getInstance() {
    if (UnevaluatedPropertiesAssertionFactory_instance == null)
      new UnevaluatedPropertiesAssertionFactory();
    return UnevaluatedPropertiesAssertionFactory_instance;
  }
  function UnevaluatedPropertiesAssertion(location, assertion) {
    this.rd2_1 = location;
    this.sd2_1 = assertion;
  }
  protoOf(UnevaluatedPropertiesAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.rd2_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_1: {
        if (!isInterface(element, ObjectElement)) {
          tmp$ret$0 = true;
          break $l$block_1;
        }
        var annotationCollector = context.ycq();
        if (annotationCollector.ncq(AdditionalPropertiesAssertionFactory_getInstance().jd1_1) === true) {
          tmp$ret$0 = true;
          break $l$block_1;
        }
        if (annotationCollector.ncq(UnevaluatedPropertiesAssertionFactory_getInstance().qd2_1) === true) {
          tmp$ret$0 = true;
          break $l$block_1;
        }
        var evaluatedByProperties = annotationCollector.ncq(PropertiesAssertionFactory_getInstance().nd1_1);
        var evaluatedByPatternProps = annotationCollector.ncq(PatternPropertiesAssertionFactory_getInstance().pd1_1);
        var valid = true;
        var _iterator__ex2g4s = element.p();
        $l$loop_0: while (_iterator__ex2g4s.q()) {
          var _destruct__k2r9zo = _iterator__ex2g4s.r();
          var prop = _destruct__k2r9zo.dc();
          var el = _destruct__k2r9zo.ec();
          if ((evaluatedByProperties == null ? null : evaluatedByProperties.w(prop)) === true) {
            continue $l$loop_0;
          }
          if ((evaluatedByPatternProps == null ? null : evaluatedByPatternProps.w(prop)) === true) {
            continue $l$loop_0;
          }
          var ctx = context.acr(prop);
          // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
          var this_1 = this_0.dcp(ctx.wcq());
          var tmp_0;
          try {
            tmp_0 = this.sd2_1.qco(el, ctx, this_1);
          }finally {
            this_1.sco();
          }
          var result = tmp_0;
          valid = !!(valid & result);
        }
        if (valid) {
          annotationCollector.lcq(UnevaluatedPropertiesAssertionFactory_getInstance().qd2_1, true);
        }
        tmp$ret$0 = valid;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function LengthAssertion(path, lengthValue, errorMessage, check) {
    this.td2_1 = path;
    this.ud2_1 = lengthValue;
    this.vd2_1 = errorMessage;
    this.wd2_1 = check;
  }
  protoOf(LengthAssertion).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.td2_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_0: {
        var tmp_0;
        if (!isInterface(element, PrimitiveElement)) {
          tmp_0 = true;
        } else {
          tmp_0 = !element.p4u();
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_elvis_lhs = get_contentOrNull(element);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          return true;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var content = tmp_1;
        var codePointCount_0 = codePointCount(content);
        if (this.wd2_1(codePointCount_0, this.ud2_1)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        this_0.jcp(new ValidationError(this.td2_1, context.wcq(), 'string length (' + codePointCount_0 + ') ' + this.vd2_1 + ' ' + this.ud2_1));
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function MaxLengthAssertionFactory$createFromProperty$lambda(a, b) {
    return a <= b;
  }
  function MaxLengthAssertionFactory() {
    MaxLengthAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'maxLength');
  }
  protoOf(MaxLengthAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = !element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = MaxLengthAssertionFactory_getInstance().rcw() + ' must be an integer';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_integerOrNull(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MaxLengthAssertionFactory_getInstance().rcw() + ' must be a valid integer';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var maxLength = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!(maxLength >= 0)) {
      var message_1 = MaxLengthAssertionFactory_getInstance().rcw() + ' must be a non-negative integer';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp_0 = context.yct();
    return new LengthAssertion(tmp_0, maxLength, 'must be less or equal to', MaxLengthAssertionFactory$createFromProperty$lambda);
  };
  var MaxLengthAssertionFactory_instance;
  function MaxLengthAssertionFactory_getInstance() {
    if (MaxLengthAssertionFactory_instance == null)
      new MaxLengthAssertionFactory();
    return MaxLengthAssertionFactory_instance;
  }
  function MinLengthAssertionFactory$createFromProperty$lambda(a, b) {
    return a >= b;
  }
  function MinLengthAssertionFactory() {
    MinLengthAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'minLength');
  }
  protoOf(MinLengthAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = !element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = MinLengthAssertionFactory_getInstance().rcw() + ' must be an integer';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp1 = get_integerOrNull(new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(element)));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp1 == null) {
        var message_0 = MinLengthAssertionFactory_getInstance().rcw() + ' must be a valid integer';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      } else {
        tmp$ret$3 = tmp1;
        break $l$block;
      }
    }
    var minLength = tmp$ret$3;
    // Inline function 'kotlin.require' call
    if (!(minLength >= 0)) {
      var message_1 = MinLengthAssertionFactory_getInstance().rcw() + ' must be a non-negative integer';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp_0 = context.yct();
    return new LengthAssertion(tmp_0, minLength, 'must be greater or equal to', MinLengthAssertionFactory$createFromProperty$lambda);
  };
  var MinLengthAssertionFactory_instance;
  function MinLengthAssertionFactory_getInstance() {
    if (MinLengthAssertionFactory_instance == null)
      new MinLengthAssertionFactory();
    return MinLengthAssertionFactory_instance;
  }
  function PatternAssertionFactory() {
    PatternAssertionFactory_instance = this;
    AbstractAssertionFactory.call(this, 'pattern');
  }
  protoOf(PatternAssertionFactory).scw = function (element, context) {
    var tmp;
    if (element instanceof JsonPrimitive) {
      tmp = element.p4u();
    } else {
      tmp = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = PatternAssertionFactory_getInstance().rcw() + ' must be a string';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp_0;
    try {
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = element.q4u();
      tmp_0 = Regex_init_$Create$(this_0);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var exOrJsError = $p;
        throw IllegalArgumentException_init_$Create$_0(this.rcw() + ' is not a valid regular expression', exOrJsError);
      } else {
        throw $p;
      }
    }
    var regex = tmp_0;
    return new PatternAssertion_0(context.yct(), regex);
  };
  var PatternAssertionFactory_instance;
  function PatternAssertionFactory_getInstance() {
    if (PatternAssertionFactory_instance == null)
      new PatternAssertionFactory();
    return PatternAssertionFactory_instance;
  }
  function PatternAssertion_0(path, regex) {
    this.ad3_1 = path;
    this.bd3_1 = regex;
  }
  protoOf(PatternAssertion_0).qco = function (element, context, errorCollector) {
    // Inline function 'io.github.optimumcode.json.schema.OutputCollector.use' call
    var this_0 = errorCollector.fcp(this.ad3_1);
    var tmp;
    try {
      var tmp$ret$0;
      $l$block_0: {
        var tmp_0;
        if (!isInterface(element, PrimitiveElement)) {
          tmp_0 = true;
        } else {
          tmp_0 = !element.p4u();
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_elvis_lhs = get_contentOrNull(element);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          return true;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var content = tmp_1;
        if (!(this.bd3_1.ue(content) == null)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        this_0.jcp(new ValidationError(this.ad3_1, context.wcq(), "string does not match pattern '" + this.bd3_1.he_1 + "'"));
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }finally {
      this_0.sco();
    }
    return tmp;
  };
  function isValidDomainPart($this, domainPart) {
    var tmp;
    // Inline function 'kotlin.run' call
    if (startsWith(domainPart, _Char___init__impl__6a9atx(91)) && endsWith(domainPart, _Char___init__impl__6a9atx(93))) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = get_lastIndex(domainPart);
      // Inline function 'kotlin.js.asDynamic' call
      var ipPart = domainPart.substring(1, endIndex);
      tmp = isValidIpPart($this, ipPart);
    } else {
      tmp = $this.cd3_1.dd3(domainPart).dco();
    }
    return tmp;
  }
  function isValidIpPart($this, ipPart) {
    var tmp;
    if (startsWith_0(ipPart, 'IPv6:')) {
      tmp = IpV6FormatValidator_getInstance().dd3(removePrefix(ipPart, 'IPv6:'));
    } else {
      tmp = IpV4FormatValidator_getInstance().dd3(ipPart);
    }
    return tmp.dco();
  }
  function isValidLocalPart($this, localPart) {
    var tmp;
    // Inline function 'kotlin.run' call
    if (startsWith(localPart, _Char___init__impl__6a9atx(34)) || endsWith(localPart, _Char___init__impl__6a9atx(34))) {
      tmp = isValidQuotedString($this, localPart);
    } else {
      tmp = isValidDotString($this, localPart);
    }
    return tmp;
  }
  function isValidDotString($this, localPart) {
    var tmp2 = _Char___init__impl__6a9atx(46);
    var tmp$ret$6;
    $l$block: {
      // Inline function 'io.github.optimumcode.json.schema.internal.formats.Validation.eachSeparatedPart' call
      var lastSeparator = -1;
      do {
        var separatorIndex = indexOf(localPart, tmp2, lastSeparator + 1 | 0);
        var tmp;
        if (separatorIndex < 0) {
          // Inline function 'kotlin.text.substring' call
          var startIndex = lastSeparator + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp = localPart.substring(startIndex);
        } else {
          var tmp3 = lastSeparator + 1 | 0;
          // Inline function 'kotlin.text.substring' call
          var endIndex = separatorIndex;
          // Inline function 'kotlin.js.asDynamic' call
          tmp = localPart.substring(tmp3, endIndex);
        }
        var part = tmp;
        var tmp_0;
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(part) > 0) {
          tmp_0 = allCodepoints(part, AbstractEmailFormatValidator$isAText$ref($this));
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          tmp$ret$6 = false;
          break $l$block;
        }
        lastSeparator = separatorIndex;
      }
       while (separatorIndex > 0);
      tmp$ret$6 = true;
    }
    return tmp$ret$6;
  }
  function isSpecialCharacter($this, codepoint) {
    return codepoint === _Char___init__impl__6a9atx(33) || codepoint === _Char___init__impl__6a9atx(35) || codepoint === _Char___init__impl__6a9atx(36) || codepoint === _Char___init__impl__6a9atx(37) || codepoint === _Char___init__impl__6a9atx(38) || codepoint === _Char___init__impl__6a9atx(39) || codepoint === _Char___init__impl__6a9atx(42) || codepoint === _Char___init__impl__6a9atx(43) || codepoint === _Char___init__impl__6a9atx(45) || codepoint === _Char___init__impl__6a9atx(47) || codepoint === _Char___init__impl__6a9atx(61) || codepoint === _Char___init__impl__6a9atx(63) || codepoint === _Char___init__impl__6a9atx(94) || codepoint === _Char___init__impl__6a9atx(95) || codepoint === _Char___init__impl__6a9atx(96) || codepoint === _Char___init__impl__6a9atx(123) || codepoint === _Char___init__impl__6a9atx(125) || codepoint === _Char___init__impl__6a9atx(126) || codepoint === _Char___init__impl__6a9atx(124);
  }
  function isValidQuotedString($this, localPart) {
    if (localPart.length <= 2) {
      return false;
    }
    // Inline function 'kotlin.run' call
    if (!startsWith(localPart, _Char___init__impl__6a9atx(34)) || !endsWith(localPart, _Char___init__impl__6a9atx(34))) {
      return false;
    }
    // Inline function 'kotlin.text.substring' call
    var endIndex = get_lastIndex(localPart);
    // Inline function 'kotlin.js.asDynamic' call
    var quotedContent = localPart.substring(1, endIndex);
    return isValidQuotedContent($this, quotedContent);
  }
  function isValidQuotedContent($this, quotedContent) {
    var index = 0;
    var length = quotedContent.length;
    $l$loop: while (index < length) {
      var codePoint = codePointAt(quotedContent, index);
      index = index + CodePoints_instance.acl(codePoint) | 0;
      if (!(codePoint === 92)) {
        if ($this.od3(codePoint)) {
          continue $l$loop;
        }
        return false;
      }
      if (index >= length) {
        return false;
      }
      var nextChar = codePointAt(quotedContent, index);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(32);
      var containsLower = Char__toInt_impl_vasixd(this_0);
      var tmp;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(126);
      if (nextChar <= Char__toInt_impl_vasixd(this_1)) {
        tmp = containsLower <= nextChar;
      } else {
        tmp = false;
      }
      if (!tmp) {
        return false;
      }
      index = index + 1 | 0;
    }
    return true;
  }
  function AbstractEmailFormatValidator$isAText$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.pd3(p0);
    };
    l.callableName = 'isAText';
    return l;
  }
  function AbstractEmailFormatValidator(hostnameValidator) {
    AbstractStringFormatValidator.call(this);
    this.cd3_1 = hostnameValidator;
  }
  protoOf(AbstractEmailFormatValidator).dd3 = function (value) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      return Companion_instance_5.bco();
    }
    var delimiterIndex = lastIndexOf(value, _Char___init__impl__6a9atx(64));
    if (delimiterIndex <= 0 || delimiterIndex === get_lastIndex(value)) {
      return Companion_instance_5.bco();
    }
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var localPart = value.substring(0, delimiterIndex);
    // Inline function 'kotlin.text.substring' call
    var startIndex = delimiterIndex + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    var domainPart = value.substring(startIndex);
    var tmp;
    if (isValidLocalPart(this, localPart) && isValidDomainPart(this, domainPart)) {
      tmp = Companion_instance_5.aco();
    } else {
      tmp = Companion_instance_5.bco();
    }
    return tmp;
  };
  protoOf(AbstractEmailFormatValidator).pd3 = function (codepoint) {
    if (codepoint > 127) {
      return false;
    }
    var asChar = numberToChar(codepoint);
    return Validation_instance.qd3(asChar) || Validation_instance.rd3(asChar) || isSpecialCharacter(this, asChar);
  };
  protoOf(AbstractEmailFormatValidator).od3 = function (codepoint) {
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(32);
    if (codepoint === Char__toInt_impl_vasixd(this_0)) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(33);
      tmp_0 = codepoint === Char__toInt_impl_vasixd(this_1);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(35);
      var containsLower = Char__toInt_impl_vasixd(this_2);
      var tmp_1;
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(126);
      if (codepoint <= Char__toInt_impl_vasixd(this_3)) {
        tmp_1 = containsLower <= codepoint;
      } else {
        tmp_1 = false;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  function AbstractStringFormatValidator() {
  }
  protoOf(AbstractStringFormatValidator).jd0 = function (element) {
    var tmp;
    if (!isInterface(element, PrimitiveElement)) {
      tmp = true;
    } else {
      tmp = !element.p4u();
    }
    if (tmp) {
      return Companion_instance_5.aco();
    }
    return this.dd3(element.q4u());
  };
  function isLeapYear($this, year) {
    return (year % 4 | 0) === 0 && (!((year % 100 | 0) === 0) || !((year % 400 | 0) === 0));
  }
  function daysInMonth($this, month, leapYear) {
    return month === 2 ? leapYear ? 29 : 28 : month < 8 ? (month % 2 | 0) === 0 ? 30 : 31 : month <= 12 ? (month % 2 | 0) === 0 ? 31 : 30 : -1;
  }
  function DateFormatValidator() {
    DateFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
    this.sd3_1 = 12;
    this.td3_1 = 2;
    this.ud3_1 = 8;
    this.vd3_1 = Regex_init_$Create$('(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})');
  }
  protoOf(DateFormatValidator).dd3 = function (value) {
    var tmp0_elvis_lhs = this.vd3_1.ve(value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_instance_5.bco();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    var year = toInt(ensureNotNull(get(result.ef(), 'year')).ze_1);
    var month = toInt(ensureNotNull(get(result.ef(), 'month')).ze_1);
    var day = toInt(ensureNotNull(get(result.ef(), 'day')).ze_1);
    var leapYear = isLeapYear(this, year);
    var daysInMonth_0 = daysInMonth(this, month, leapYear);
    var tmp_0;
    if ((1 <= month ? month <= 12 : false) && (1 <= day ? day <= daysInMonth_0 : false)) {
      tmp_0 = Companion_instance_5.aco();
    } else {
      tmp_0 = Companion_instance_5.bco();
    }
    return tmp_0;
  };
  var DateFormatValidator_instance;
  function DateFormatValidator_getInstance() {
    if (DateFormatValidator_instance == null)
      new DateFormatValidator();
    return DateFormatValidator_instance;
  }
  function DateTimeFormatValidator() {
    DateTimeFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
    this.wd3_1 = _Char___init__impl__6a9atx(84);
    this.xd3_1 = 10;
  }
  protoOf(DateTimeFormatValidator).dd3 = function (value) {
    var separatorIndex = indexOf(value, _Char___init__impl__6a9atx(84), VOID, true);
    if (!(separatorIndex === 10)) {
      return Companion_instance_5.bco();
    }
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var date = value.substring(0, separatorIndex);
    var tmp4 = separatorIndex + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    var endIndex = value.length;
    // Inline function 'kotlin.js.asDynamic' call
    var time = value.substring(tmp4, endIndex);
    if (!DateFormatValidator_getInstance().dd3(date).dco()) {
      return Companion_instance_5.bco();
    }
    if (!TimeFormatValidator_getInstance().dd3(time).dco()) {
      return Companion_instance_5.bco();
    }
    return Companion_instance_5.aco();
  };
  var DateTimeFormatValidator_instance;
  function DateTimeFormatValidator_getInstance() {
    if (DateTimeFormatValidator_instance == null)
      new DateTimeFormatValidator();
    return DateTimeFormatValidator_instance;
  }
  function DurationFormatValidator() {
    DurationFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
    this.bd4_1 = '\\d+W';
    this.cd4_1 = 'T(\\d+H(\\d+M(\\d+S)?)?|\\d+M(\\d+S)?|\\d+S)';
    this.dd4_1 = '(\\d+Y(\\d+M(\\d+D))?|\\d+M(\\d+D)?|\\d+D)(T(\\d+H(\\d+M(\\d+S)?)?|\\d+M(\\d+S)?|\\d+S))?';
    this.ed4_1 = Regex_init_$Create$_0('P((\\d+Y(\\d+M(\\d+D))?|\\d+M(\\d+D)?|\\d+D)(T(\\d+H(\\d+M(\\d+S)?)?|\\d+M(\\d+S)?|\\d+S))?|\\d+W|T(\\d+H(\\d+M(\\d+S)?)?|\\d+M(\\d+S)?|\\d+S))', RegexOption_IGNORE_CASE_getInstance());
  }
  protoOf(DurationFormatValidator).dd3 = function (value) {
    var tmp;
    if (this.ed4_1.re(value)) {
      tmp = Companion_instance_5.aco();
    } else {
      tmp = Companion_instance_5.bco();
    }
    return tmp;
  };
  var DurationFormatValidator_instance;
  function DurationFormatValidator_getInstance() {
    if (DurationFormatValidator_instance == null)
      new DurationFormatValidator();
    return DurationFormatValidator_instance;
  }
  function EmailFormatValidator() {
    EmailFormatValidator_instance = this;
    AbstractEmailFormatValidator.call(this, HostnameFormatValidator_getInstance());
  }
  var EmailFormatValidator_instance;
  function EmailFormatValidator_getInstance() {
    if (EmailFormatValidator_instance == null)
      new EmailFormatValidator();
    return EmailFormatValidator_instance;
  }
  function isValid($this, hostname) {
    var lastIndex = get_lastIndex(hostname);
    var lastDotIndex = -1;
    var inductionVariable = 0;
    var last = hostname.length;
    while (inductionVariable < last) {
      var index = inductionVariable;
      var symbol = charSequenceGet(hostname, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var isDot = symbol === _Char___init__impl__6a9atx(46);
      if (!isDot && !isValidChar($this, symbol)) {
        return false;
      }
      if (isDot) {
        if ((index - lastDotIndex | 0) <= 1) {
          return false;
        }
      }
      var checkSegment = isDot || index === lastIndex;
      if (checkSegment) {
        var segmentEnd = isDot ? index : index + 1 | 0;
        // Inline function 'kotlin.text.substring' call
        var startIndex = lastDotIndex + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var value = hostname.substring(startIndex, segmentEnd);
        if (startsWith_0(value, '-') || endsWith_0(value, '-')) {
          return false;
        }
        if (value.length > 63) {
          return false;
        }
      }
      if (isDot) {
        lastDotIndex = index;
      }
    }
    return true;
  }
  function isValidChar($this, c) {
    return isNumber($this, c) || isLetter($this, c) || isDash($this, c);
  }
  function isNumber($this, c) {
    return _Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false;
  }
  function isLetter($this, c) {
    return (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(122) : false) || (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(90) : false);
  }
  function isDash($this, c) {
    return c === _Char___init__impl__6a9atx(45);
  }
  function HostnameFormatValidator() {
    HostnameFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
    this.fd4_1 = 63;
    this.gd4_1 = _Char___init__impl__6a9atx(46);
  }
  protoOf(HostnameFormatValidator).dd3 = function (value) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      return Companion_instance_5.bco();
    }
    if (startsWith(value, _Char___init__impl__6a9atx(46)) || endsWith(value, _Char___init__impl__6a9atx(46))) {
      return Companion_instance_5.bco();
    }
    var tmp;
    if (isValid(this, value)) {
      tmp = Companion_instance_5.aco();
    } else {
      tmp = Companion_instance_5.bco();
    }
    return tmp;
  };
  var HostnameFormatValidator_instance;
  function HostnameFormatValidator_getInstance() {
    if (HostnameFormatValidator_instance == null)
      new HostnameFormatValidator();
    return HostnameFormatValidator_instance;
  }
  function isUtf8NonAscii($this, codepoint) {
    return codepoint > 127;
  }
  function IdnEmailFormatValidator() {
    IdnEmailFormatValidator_instance = this;
    AbstractEmailFormatValidator.call(this, IdnHostnameFormatValidator_getInstance());
  }
  protoOf(IdnEmailFormatValidator).pd3 = function (codepoint) {
    return protoOf(AbstractEmailFormatValidator).pd3.call(this, codepoint) || isUtf8NonAscii(this, codepoint);
  };
  protoOf(IdnEmailFormatValidator).od3 = function (codepoint) {
    return protoOf(AbstractEmailFormatValidator).od3.call(this, codepoint) || isUtf8NonAscii(this, codepoint);
  };
  var IdnEmailFormatValidator_instance;
  function IdnEmailFormatValidator_getInstance() {
    if (IdnEmailFormatValidator_instance == null)
      new IdnEmailFormatValidator();
    return IdnEmailFormatValidator_instance;
  }
  var BidiLabelType_LTR_instance;
  var BidiLabelType_RTL_instance;
  var BidiLabelType_NONE_instance;
  var BidiLabelType_entriesInitialized;
  function BidiLabelType_initEntries() {
    if (BidiLabelType_entriesInitialized)
      return Unit_instance;
    BidiLabelType_entriesInitialized = true;
    BidiLabelType_LTR_instance = new BidiLabelType('LTR', 0);
    BidiLabelType_RTL_instance = new BidiLabelType('RTL', 1);
    BidiLabelType_NONE_instance = new BidiLabelType('NONE', 2);
  }
  function isValidLabel($this, label, isBidiDomainName) {
    var isAce = isACE($this, label);
    var tmp;
    if (isAce) {
      if (label.length > 63) {
        return false;
      }
      var tmp0_elvis_lhs = Punycode_instance.td4(label);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = label;
    }
    var unicode = tmp;
    if (!isNormalized(unicode)) {
      return false;
    }
    var tmp_1;
    if (charSequenceGet(unicode, 0) === _Char___init__impl__6a9atx(45)) {
      tmp_1 = true;
    } else {
      var tmp_2 = codePointBefore(unicode, unicode.length);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(45);
      tmp_1 = tmp_2 === Char__toInt_impl_vasixd(this_0);
    }
    if (tmp_1) {
      return false;
    }
    if (unicode.length >= 4 && hasTwoConsecutiveHyphens($this, unicode)) {
      return false;
    }
    var firstCodePoint = codePointAt(unicode, 0);
    if (isLeadingCombiningMark($this, firstCodePoint)) {
      return false;
    }
    var tmp_3;
    if (isBidiDomainName) {
      var tmp_4;
      switch (get_bidirectionalClass(firstCodePoint).t2_1) {
        case 9:
          tmp_4 = BidiLabelType_LTR_getInstance();
          break;
        case 17:
        case 0:
          tmp_4 = BidiLabelType_RTL_getInstance();
          break;
        default:
          return false;
      }
      tmp_3 = tmp_4;
    } else {
      tmp_3 = BidiLabelType_NONE_getInstance();
    }
    var bidiLabelType = tmp_3;
    if (!matchIdnRules($this, unicode, bidiLabelType)) {
      return false;
    }
    var tmp_5;
    if (isAce) {
      tmp_5 = true;
    } else {
      var tmp2_safe_receiver = Punycode_instance.jc5(unicode);
      var tmp_6;
      if (tmp2_safe_receiver == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.run' call
        tmp_6 = tmp2_safe_receiver.length <= 63;
      }
      var tmp3_elvis_lhs = tmp_6;
      tmp_5 = tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs;
    }
    return tmp_5;
  }
  function matchIdnRules($this, unicode, bidiLabelType) {
    var arabicDigitStatus = 0;
    // Inline function 'io.github.optimumcode.json.schema.internal.util.forEachCodePointIndexed' call
    var str = unicode;
    var endIndex = charSequenceLength(unicode);
    var index = 0;
    $l$loop: while (index < endIndex) {
      var startIndex = index;
      var firstChar = charSequenceGet(str, index);
      index = index + 1 | 0;
      if (isHighSurrogate(firstChar) && index < endIndex) {
        var nextChar = charSequenceGet(str, index);
        if (isLowSurrogate(nextChar)) {
          var tmp2 = index;
          var codePoint = CodePoints_instance.zck(firstChar, nextChar);
          var currentArabicDigitStatus = isArabicIndicDigit(IdnHostnameFormatValidator_getInstance(), codePoint) ? 1 : isExtendedArabicIndicDigit(IdnHostnameFormatValidator_getInstance(), codePoint) || contains_1(CodepointBidirectionalClass_EUROPEAN_NUMBER_getInstance(), codePoint) ? -1 : 0;
          if (abs(currentArabicDigitStatus - arabicDigitStatus) > 1) {
            return false;
          }
          arabicDigitStatus = currentArabicDigitStatus;
          if (failsCodepointRules(IdnHostnameFormatValidator_getInstance(), codePoint, bidiLabelType, tmp2, unicode)) {
            return false;
          }
          index = index + 1 | 0;
          continue $l$loop;
        }
      }
      // Inline function 'kotlin.code' call
      var codePoint_0 = Char__toInt_impl_vasixd(firstChar);
      var currentArabicDigitStatus_0 = isArabicIndicDigit(IdnHostnameFormatValidator_getInstance(), codePoint_0) ? 1 : isExtendedArabicIndicDigit(IdnHostnameFormatValidator_getInstance(), codePoint_0) || contains_1(CodepointBidirectionalClass_EUROPEAN_NUMBER_getInstance(), codePoint_0) ? -1 : 0;
      if (abs(currentArabicDigitStatus_0 - arabicDigitStatus) > 1) {
        return false;
      }
      arabicDigitStatus = currentArabicDigitStatus_0;
      if (failsCodepointRules(IdnHostnameFormatValidator_getInstance(), codePoint_0, bidiLabelType, startIndex, unicode)) {
        return false;
      }
    }
    return !failsBidiRuleEnding($this, bidiLabelType, unicode);
  }
  function failsCodepointRules($this, codePoint, bidiLabelType, index, unicode) {
    if (disallowedCodePoint($this, codePoint)) {
      return true;
    }
    if (failsBidiRule($this, bidiLabelType, codePoint)) {
      return true;
    }
    if (failsGreekLowerNumeralSignRule($this, index, unicode, codePoint)) {
      return true;
    }
    if (failsHebrewPunctuationRule($this, index, unicode, codePoint)) {
      return true;
    }
    if (failsMiddleDotRule($this, index, unicode, codePoint)) {
      return true;
    }
    if (failsKatakanaMiddleDotRule($this, index, unicode, codePoint)) {
      return true;
    }
    if (failsZeroWidthJoiner($this, index, unicode, codePoint)) {
      return true;
    }
    if (failsZeroWidthNonJoinerRule($this, index, unicode, codePoint)) {
      return true;
    }
    return false;
  }
  function disallowedCodePoint($this, codePoint) {
    if (isArabicIndicDigit($this, codePoint) || isExtendedArabicIndicDigit($this, codePoint)) {
      return false;
    }
    switch (codePoint) {
      case 8205:
      case 8204:
      case 885:
      case 1523:
      case 1524:
      case 12539:
      case 183:
        return false;
      default:
        return contains_2(CodepointDerivedProperty_DISALLOWED_getInstance(), codePoint) || contains_2(CodepointDerivedProperty_UNASSIGNED_getInstance(), codePoint) || contains_2(CodepointDerivedProperty_CONTEXTJ_getInstance(), codePoint) || contains_2(CodepointDerivedProperty_CONTEXTO_getInstance(), codePoint);
    }
  }
  function failsBidiRule($this, bidiLabelType, codePoint) {
    if (bidiLabelType.equals(BidiLabelType_NONE_getInstance())) {
      return false;
    }
    var directionality = get_bidirectionalClass(codePoint);
    var tmp;
    switch (directionality.t2_1) {
      case 5:
      case 6:
      case 4:
      case 7:
      case 14:
      case 3:
      case 13:
        tmp = false;
        break;
      default:
        var tmp_0;
        switch (bidiLabelType.t2_1) {
          case 2:
            tmp_0 = false;
            break;
          case 0:
            tmp_0 = directionality.t2_1 === 9 ? false : true;
            break;
          case 1:
            switch (directionality.t2_1) {
              case 17:
              case 0:
              case 1:
                tmp_0 = false;
                break;
              default:
                tmp_0 = true;
                break;
            }

            break;
          default:
            noWhenBranchMatchedException();
            break;
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  }
  function failsBidiRuleEnding($this, bidiLabelType, unicode) {
    if (bidiLabelType.equals(BidiLabelType_NONE_getInstance())) {
      return false;
    }
    var index = unicode.length;
    while (index > 0 && get_bidirectionalClass(codePointBefore(unicode, index)).equals(CodepointBidirectionalClass_NONSPACING_MARK_getInstance())) {
      index = index - 1 | 0;
    }
    var lastCodepointDirectionality = get_bidirectionalClass(codePointBefore(unicode, index));
    var tmp;
    switch (bidiLabelType.t2_1) {
      case 2:
        tmp = false;
        break;
      case 1:
        switch (lastCodepointDirectionality.t2_1) {
          case 17:
          case 0:
          case 1:
          case 5:
            tmp = false;
            break;
          default:
            tmp = true;
            break;
        }

        break;
      case 0:
        switch (lastCodepointDirectionality.t2_1) {
          case 9:
          case 5:
            tmp = false;
            break;
          default:
            tmp = true;
            break;
        }

        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function failsGreekLowerNumeralSignRule($this, index, unicode, codePoint) {
    if (!(codePoint === 885)) {
      return false;
    }
    if ((index + 1 | 0) >= unicode.length) {
      return true;
    }
    var followingCodePoint = codePointAt(unicode, index + 1 | 0);
    // Inline function 'kotlin.let' call
    var isGreek = (880 <= followingCodePoint ? followingCodePoint <= 1024 : false) || (7936 <= followingCodePoint ? followingCodePoint <= 8192 : false);
    return !isGreek;
  }
  function failsHebrewPunctuationRule($this, index, unicode, codePoint) {
    if (!(codePoint === 1523) && !(codePoint === 1524)) {
      return false;
    }
    if (index === 0) {
      return true;
    }
    var preceding = codePointBefore(unicode, index);
    return !(1424 <= preceding ? preceding <= 1536 : false);
  }
  function failsMiddleDotRule($this, index, unicode, codePoint) {
    if (!(codePoint === 183)) {
      return false;
    }
    if (index === 0 || (index + 1 | 0) >= unicode.length) {
      return true;
    }
    var preceding = codePointBefore(unicode, index);
    var following = codePointAt(unicode, index + 1 | 0);
    return !(following === 108) || !(preceding === 108);
  }
  function failsKatakanaMiddleDotRule($this, index, unicode, codePoint) {
    if (!(codePoint === 12539)) {
      return false;
    }
    if ((index + 1 | 0) >= unicode.length) {
      return true;
    }
    var followingCodePoint = codePointAt(unicode, index + 1 | 0);
    return (11904 <= followingCodePoint ? followingCodePoint <= 12032 : false) || (12032 <= followingCodePoint ? followingCodePoint <= 12256 : false) || ((12288 <= followingCodePoint ? followingCodePoint <= 12352 : false) || (12352 <= followingCodePoint ? followingCodePoint <= 12448 : false)) || ((12448 <= followingCodePoint ? followingCodePoint <= 12544 : false) || (13312 <= followingCodePoint ? followingCodePoint <= 19904 : false) || ((19968 <= followingCodePoint ? followingCodePoint <= 40960 : false) || (63744 <= followingCodePoint ? followingCodePoint <= 64256 : false))) || ((94176 <= followingCodePoint ? followingCodePoint <= 94208 : false) || (131072 <= followingCodePoint ? followingCodePoint <= 173792 : false) || ((173824 <= followingCodePoint ? followingCodePoint <= 177984 : false) || (177984 <= followingCodePoint ? followingCodePoint <= 178208 : false)) || ((178208 <= followingCodePoint ? followingCodePoint <= 183984 : false) || (183984 <= followingCodePoint ? followingCodePoint <= 191472 : false) || ((194560 <= followingCodePoint ? followingCodePoint <= 195104 : false) || ((196608 <= followingCodePoint ? followingCodePoint <= 201552 : false) || (201552 <= followingCodePoint ? followingCodePoint <= 205744 : false))))) ? false : true;
  }
  function failsZeroWidthJoiner($this, index, unicode, codePoint) {
    if (!(codePoint === 8205)) {
      return false;
    }
    if (index === 0) {
      return true;
    }
    var preceding = codePointBefore(unicode, index);
    return !(preceding === 2381);
  }
  function failsZeroWidthNonJoinerRule($this, index, unicode, codePoint) {
    if (!(codePoint === 8204)) {
      return false;
    }
    if (index === 0) {
      return true;
    }
    var preceding = codePointBefore(unicode, index);
    if (preceding === 2381) {
      return false;
    }
    var j = index;
    while (0 < j && contains_3(CodepointJoiningType_TRANSPARENT_getInstance(), codePointBefore(unicode, j))) {
      j = j - 1 | 0;
    }
    if (j === 0) {
      return true;
    }
    var beforeFirstTransparent = codePointBefore(unicode, j);
    if (!contains_3(CodepointJoiningType_LEFT_JOINING_getInstance(), beforeFirstTransparent) && !contains_3(CodepointJoiningType_DUAL_JOINING_getInstance(), beforeFirstTransparent)) {
      return true;
    }
    j = index + 1 | 0;
    var len = unicode.length;
    if (j === len) {
      return true;
    }
    while (j < len && contains_3(CodepointJoiningType_TRANSPARENT_getInstance(), codePointAt(unicode, j))) {
      j = j + 1 | 0;
    }
    if (j === len) {
      return true;
    }
    var afterLastTransparent = codePointAt(unicode, j);
    return !contains_3(CodepointJoiningType_RIGHT_JOINING_getInstance(), afterLastTransparent) && !contains_3(CodepointJoiningType_DUAL_JOINING_getInstance(), afterLastTransparent);
  }
  function isLeadingCombiningMark($this, codePoint) {
    switch (get_category(codePoint).t2_1) {
      case 11:
      case 9:
      case 10:
        return true;
      default:
        return false;
    }
  }
  function hasTwoConsecutiveHyphens($this, value) {
    var tmp;
    var tmp_0 = codePointAt(value, 2);
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(45);
    if (tmp_0 === Char__toInt_impl_vasixd(this_0)) {
      var tmp_1 = codePointAt(value, 3);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(45);
      tmp = tmp_1 === Char__toInt_impl_vasixd(this_1);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isACE($this, label) {
    return label.length > 4 && startsWith_0(label, 'xn--');
  }
  function isLabelSeparator($this, c) {
    return c === _Char___init__impl__6a9atx(46) || c === _Char___init__impl__6a9atx(12290) || c === _Char___init__impl__6a9atx(65294) || c === _Char___init__impl__6a9atx(65377);
  }
  function findDot($this, value, startIndex) {
    var inductionVariable = startIndex;
    var last = value.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (isLabelSeparator($this, charSequenceGet(value, i))) {
          return i;
        }
      }
       while (inductionVariable < last);
    return value.length;
  }
  function isArabicIndicDigit($this, code) {
    return 1632 <= code ? code <= 1641 : false;
  }
  function isExtendedArabicIndicDigit($this, code) {
    return 1776 <= code ? code <= 1785 : false;
  }
  function BidiLabelType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BidiLabelType_LTR_getInstance() {
    BidiLabelType_initEntries();
    return BidiLabelType_LTR_instance;
  }
  function BidiLabelType_RTL_getInstance() {
    BidiLabelType_initEntries();
    return BidiLabelType_RTL_instance;
  }
  function BidiLabelType_NONE_getInstance() {
    BidiLabelType_initEntries();
    return BidiLabelType_NONE_instance;
  }
  function IdnHostnameFormatValidator() {
    IdnHostnameFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
  }
  protoOf(IdnHostnameFormatValidator).dd3 = function (value) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      return Companion_instance_5.bco();
    }
    if (value.length === 1 && isLabelSeparator(this, charSequenceGet(value, 0))) {
      return Companion_instance_5.bco();
    }
    var isBidiDomainName = false;
    // Inline function 'io.github.optimumcode.json.schema.internal.formats.IdnHostnameFormatValidator.forEachLabel' call
    var pointer = 0;
    while (pointer < value.length) {
      var dot = findDot(this, value, pointer);
      // Inline function 'kotlin.text.substring' call
      var startIndex = pointer;
      // Inline function 'kotlin.js.asDynamic' call
      var label = value.substring(startIndex, dot);
      // Inline function 'io.github.optimumcode.json.schema.internal.util.forEachCodePointIndexed' call
      var str = label;
      var endIndex = charSequenceLength(label);
      var index = 0;
      $l$loop: while (index < endIndex) {
        var startIndex_0 = index;
        var firstChar = charSequenceGet(str, index);
        index = index + 1 | 0;
        if (isHighSurrogate(firstChar) && index < endIndex) {
          var nextChar = charSequenceGet(str, index);
          if (isLowSurrogate(nextChar)) {
            var codePoint = CodePoints_instance.zck(firstChar, nextChar);
            var tmp;
            if (isBidiDomainName) {
              tmp = true;
            } else {
              switch (get_bidirectionalClass(codePoint).t2_1) {
                case 17:
                case 0:
                case 1:
                  tmp = true;
                  break;
                default:
                  tmp = false;
                  break;
              }
            }
            isBidiDomainName = tmp;
            index = index + 1 | 0;
            continue $l$loop;
          }
        }
        // Inline function 'kotlin.code' call
        var codePoint_0 = Char__toInt_impl_vasixd(firstChar);
        var tmp_0;
        if (isBidiDomainName) {
          tmp_0 = true;
        } else {
          switch (get_bidirectionalClass(codePoint_0).t2_1) {
            case 17:
            case 0:
            case 1:
              tmp_0 = true;
              break;
            default:
              tmp_0 = false;
              break;
          }
        }
        isBidiDomainName = tmp_0;
      }
      pointer = dot + 1 | 0;
    }
    // Inline function 'io.github.optimumcode.json.schema.internal.formats.IdnHostnameFormatValidator.forEachLabel' call
    var pointer_0 = 0;
    while (pointer_0 < value.length) {
      var dot_0 = findDot(this, value, pointer_0);
      // Inline function 'kotlin.text.substring' call
      var startIndex_1 = pointer_0;
      // Inline function 'kotlin.js.asDynamic' call
      var label_0 = value.substring(startIndex_1, dot_0);
      if (!isValidLabel(IdnHostnameFormatValidator_getInstance(), label_0, isBidiDomainName)) {
        return Companion_instance_5.bco();
      }
      pointer_0 = dot_0 + 1 | 0;
    }
    return Companion_instance_5.aco();
  };
  var IdnHostnameFormatValidator_instance;
  function IdnHostnameFormatValidator_getInstance() {
    if (IdnHostnameFormatValidator_instance == null)
      new IdnHostnameFormatValidator();
    return IdnHostnameFormatValidator_instance;
  }
  function validate($this, result) {
    var _iterator__ex2g4s = $this.gd3_1.p();
    while (_iterator__ex2g4s.q()) {
      var group = _iterator__ex2g4s.r();
      var ipPart = ensureNotNull(get(result.ef(), group)).ze_1;
      if (charSequenceGet(ipPart, 0) === _Char___init__impl__6a9atx(48) && ipPart.length > 1) {
        return false;
      }
      if (toInt(ipPart) > 255) {
        return false;
      }
    }
    return true;
  }
  function IpV4FormatValidator() {
    IpV4FormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
    this.ed3_1 = 7;
    this.fd3_1 = 255;
    this.gd3_1 = setOf_0(['a', 'b', 'c', 'd']);
    this.hd3_1 = Regex_init_$Create$('(?<a>\\d{1,3})\\.(?<b>\\d{1,3})\\.(?<c>\\d{1,3})\\.(?<d>\\d{1,3})');
  }
  protoOf(IpV4FormatValidator).dd3 = function (value) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      tmp = true;
    } else {
      tmp = value.length < 7;
    }
    if (tmp) {
      return Companion_instance_5.bco();
    }
    var tmp0_elvis_lhs = this.hd3_1.ve(value);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Companion_instance_5.bco();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var result = tmp_0;
    var tmp_1;
    if (validate(this, result)) {
      tmp_1 = Companion_instance_5.aco();
    } else {
      tmp_1 = Companion_instance_5.bco();
    }
    return tmp_1;
  };
  var IpV4FormatValidator_instance;
  function IpV4FormatValidator_getInstance() {
    if (IpV4FormatValidator_instance == null)
      new IpV4FormatValidator();
    return IpV4FormatValidator_instance;
  }
  function checkLastBlock($this, value, blocks, lastBlockSize, isCompressedFormAppeared, blockStartIndex) {
    if (lastBlockSize === 0 && !isCompressedFormAppeared) {
      return Companion_instance_5.bco();
    }
    if (blocks > 8 || (blocks > 6 && lastBlockSize > 4)) {
      return Companion_instance_5.bco();
    }
    if (!isCompressedFormAppeared && !(blocks === 8) && !(blocks === 6)) {
      return Companion_instance_5.bco();
    }
    var tmp;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = value.substring(blockStartIndex);
    if (checkBlockValue($this, tmp$ret$1, blocks === 6 && !isCompressedFormAppeared)) {
      tmp = Companion_instance_5.aco();
    } else {
      tmp = Companion_instance_5.bco();
    }
    return tmp;
  }
  function checkBlock($this, index, value, blockStartIndex, blockSize) {
    if (blockSize > 4) {
      return false;
    }
    if (blockStartIndex === 0 && blockSize === 0 && !(charSequenceGet(value, index + 1 | 0) === _Char___init__impl__6a9atx(58))) {
      return false;
    }
    var tmp;
    if (blockSize > 0) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = value.substring(blockStartIndex, index);
      tmp = !checkBlockValue$default($this, tmp$ret$1);
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    }
    return true;
  }
  function checkBlockValue($this, block, mustBeIp) {
    if (mustBeIp || block.length > 4) {
      return IpV4FormatValidator_getInstance().dd3(block).dco();
    }
    return !contains(block, _Char___init__impl__6a9atx(46));
  }
  function checkBlockValue$default($this, block, mustBeIp, $super) {
    mustBeIp = mustBeIp === VOID ? false : mustBeIp;
    return checkBlockValue($this, block, mustBeIp);
  }
  function IpV6FormatValidator() {
    IpV6FormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
    this.id3_1 = 4;
    this.jd3_1 = _Char___init__impl__6a9atx(58);
    this.kd3_1 = '::';
    this.ld3_1 = _Char___init__impl__6a9atx(46);
    this.md3_1 = 8;
    this.nd3_1 = 6;
  }
  protoOf(IpV6FormatValidator).dd3 = function (value) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      tmp = true;
    } else {
      tmp = value.length < 2;
    }
    if (tmp) {
      return Companion_instance_5.bco();
    }
    if (value === '::') {
      return Companion_instance_5.aco();
    }
    var blocks = 0;
    var blockStartIndex = 0;
    var isCompressedFormAppeared = false;
    var inductionVariable = 0;
    var last = value.length;
    $l$loop: while (inductionVariable < last) {
      var index = inductionVariable;
      var symbol = charSequenceGet(value, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (symbol === _Char___init__impl__6a9atx(58)) {
        var blockSize = index - blockStartIndex | 0;
        var compressed = blockStartIndex > 0 && blockSize === 0;
        if (compressed && isCompressedFormAppeared) {
          return Companion_instance_5.bco();
        }
        if (!checkBlock(this, index, value, blockStartIndex, blockSize)) {
          return Companion_instance_5.bco();
        }
        isCompressedFormAppeared = !!(isCompressedFormAppeared | compressed);
        blockStartIndex = index + 1 | 0;
        blocks = blocks + 1 | 0;
      } else if ((_Char___init__impl__6a9atx(48) <= symbol ? symbol <= _Char___init__impl__6a9atx(57) : false) || (_Char___init__impl__6a9atx(65) <= symbol ? symbol <= _Char___init__impl__6a9atx(70) : false) || ((_Char___init__impl__6a9atx(97) <= symbol ? symbol <= _Char___init__impl__6a9atx(102) : false) || symbol === _Char___init__impl__6a9atx(46)))
        continue $l$loop;
      else
        return Companion_instance_5.bco();
    }
    var lastBlockSize = value.length - blockStartIndex | 0;
    if (1 <= lastBlockSize ? lastBlockSize <= 4 : false) {
      blocks = blocks + 1 | 0;
    }
    return checkLastBlock(this, value, blocks, lastBlockSize, isCompressedFormAppeared, blockStartIndex);
  };
  var IpV6FormatValidator_instance;
  function IpV6FormatValidator_getInstance() {
    if (IpV6FormatValidator_instance == null)
      new IpV6FormatValidator();
    return IpV6FormatValidator_instance;
  }
  function IriFormatValidator() {
    IriFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
  }
  protoOf(IriFormatValidator).dd3 = function (value) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      return UriFormatValidator_getInstance().dd3(value);
    }
    var uri = IriSpec_instance.xd4(value);
    return UriFormatValidator_getInstance().dd3(uri);
  };
  var IriFormatValidator_instance;
  function IriFormatValidator_getInstance() {
    if (IriFormatValidator_instance == null)
      new IriFormatValidator();
    return IriFormatValidator_instance;
  }
  function IriReferenceFormatValidator() {
    IriReferenceFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
  }
  protoOf(IriReferenceFormatValidator).dd3 = function (value) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      return UriReferenceFormatValidator_getInstance().dd3(value);
    }
    var uri = IriSpec_instance.xd4(value);
    return UriReferenceFormatValidator_getInstance().dd3(uri);
  };
  var IriReferenceFormatValidator_instance;
  function IriReferenceFormatValidator_getInstance() {
    if (IriReferenceFormatValidator_instance == null)
      new IriReferenceFormatValidator();
    return IriReferenceFormatValidator_instance;
  }
  function IriSpec() {
    this.ud4_1 = 4;
    this.vd4_1 = 15;
    this.wd4_1 = '0123456789ABCDEF';
  }
  protoOf(IriSpec).xd4 = function (iri) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    var indexedObject = encodeToByteArray(iri);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var byte = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (byte >= 0) {
        this_0.z8(numberToChar(byte));
      } else {
        // Inline function 'kotlin.toUByte' call
        // Inline function 'kotlin.UByte.toInt' call
        var this_1 = _UByte___init__impl__g9hnc4(byte);
        var unsignedInt = _UByte___get_data__impl__jof9qr(this_1) & 255;
        this_0.z8(_Char___init__impl__6a9atx(37));
        this_0.z8(charSequenceGet('0123456789ABCDEF', unsignedInt >> 4));
        this_0.z8(charSequenceGet('0123456789ABCDEF', unsignedInt & 15));
      }
    }
    return this_0.toString();
  };
  var IriSpec_instance;
  function IriSpec_getInstance() {
    return IriSpec_instance;
  }
  function JsonPointerFormatValidator() {
    JsonPointerFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
  }
  protoOf(JsonPointerFormatValidator).dd3 = function (value) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      return Companion_instance_5.aco();
    }
    if (!startsWith(value, _Char___init__impl__6a9atx(47))) {
      return Companion_instance_5.bco();
    }
    var escape = false;
    var inductionVariable = 0;
    var last = value.length;
    while (inductionVariable < last) {
      var symbol = charSequenceGet(value, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (escape && !(symbol === _Char___init__impl__6a9atx(48)) && !(symbol === _Char___init__impl__6a9atx(49))) {
        return Companion_instance_5.bco();
      }
      escape = symbol === _Char___init__impl__6a9atx(126);
    }
    var tmp;
    if (escape) {
      tmp = Companion_instance_5.bco();
    } else {
      tmp = Companion_instance_5.aco();
    }
    return tmp;
  };
  var JsonPointerFormatValidator_instance;
  function JsonPointerFormatValidator_getInstance() {
    if (JsonPointerFormatValidator_instance == null)
      new JsonPointerFormatValidator();
    return JsonPointerFormatValidator_instance;
  }
  function RegexFormatValidator() {
    RegexFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
  }
  protoOf(RegexFormatValidator).dd3 = function (value) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      return Companion_instance_5.aco();
    }
    var tmp;
    try {
      Regex_init_$Create$(value);
      tmp = Companion_instance_5.aco();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var _unused_var__etf5q3 = $p;
        tmp_0 = Companion_instance_5.bco();
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  var RegexFormatValidator_instance;
  function RegexFormatValidator_getInstance() {
    if (RegexFormatValidator_instance == null)
      new RegexFormatValidator();
    return RegexFormatValidator_instance;
  }
  function checkEnding($this, index, isRef, value) {
    var tmp;
    if (index === 0) {
      tmp = Companion_instance_5.bco();
    } else if (isRef) {
      var tmp_0;
      if (index === get_lastIndex(value)) {
        tmp_0 = Companion_instance_5.aco();
      } else {
        tmp_0 = Companion_instance_5.bco();
      }
      tmp = tmp_0;
    } else {
      var tmp_1 = JsonPointerFormatValidator_getInstance();
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = value.substring(index);
      tmp = tmp_1.dd3(tmp$ret$1);
    }
    return tmp;
  }
  function RelativeJsonPointerFormatValidator() {
    RelativeJsonPointerFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
    this.yd4_1 = 48;
    this.zd4_1 = 57;
    this.ad5_1 = _Char___init__impl__6a9atx(35);
  }
  protoOf(RelativeJsonPointerFormatValidator).dd3 = function (value) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      return Companion_instance_5.bco();
    }
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(value, 0);
    var isFirstZero = Char__toInt_impl_vasixd(this_0) === 48;
    var inductionVariable = 0;
    var last = value.length;
    while (inductionVariable < last) {
      var index = inductionVariable;
      var symbol = charSequenceGet(value, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.code' call
      var code = Char__toInt_impl_vasixd(symbol);
      var isDigit = 48 <= code ? code <= 57 : false;
      var isRef = symbol === _Char___init__impl__6a9atx(35);
      if (!isDigit) {
        return checkEnding(this, index, isRef, value);
      }
      if (code > 48 && isFirstZero) {
        return Companion_instance_5.bco();
      }
    }
    return Companion_instance_5.aco();
  };
  var RelativeJsonPointerFormatValidator_instance;
  function RelativeJsonPointerFormatValidator_getInstance() {
    if (RelativeJsonPointerFormatValidator_instance == null)
      new RelativeJsonPointerFormatValidator();
    return RelativeJsonPointerFormatValidator_instance;
  }
  function isValidFormat($this, result) {
    var hours = toInt(ensureNotNull(get(result.ef(), 'hours')).ze_1);
    var minutes = toInt(ensureNotNull(get(result.ef(), 'minutes')).ze_1);
    var seconds = toInt(ensureNotNull(get(result.ef(), 'seconds')).ze_1);
    var tmp0_safe_receiver = get(result.ef(), 'offsetSign');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ze_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = tmp1_safe_receiver === '+' ? 1 : -1;
    }
    var tmp2_elvis_lhs = tmp;
    var offsetSign = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var tmp3_safe_receiver = get(result.ef(), 'offsetHours');
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.ze_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : toInt(tmp4_safe_receiver);
    var offsetHours = tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs;
    var tmp6_safe_receiver = get(result.ef(), 'offsetMinutes');
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.ze_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : toInt(tmp7_safe_receiver);
    var offsetMinutes = tmp8_elvis_lhs == null ? 0 : tmp8_elvis_lhs;
    var substituteOffset = offsetSign > 0 && (!(offsetHours === 0) || !(offsetMinutes === 0));
    var validTime = isValidFormat$normalTime(hours, minutes, seconds) || isValidFormat$leapSecondTime(substituteOffset, hours, offsetHours, minutes, offsetMinutes, seconds);
    var validOffset = (0 <= offsetHours ? offsetHours <= 23 : false) && (0 <= offsetMinutes ? offsetMinutes <= 59 : false);
    return validTime && validOffset;
  }
  function isValidFormat$normalTime(hours, minutes, seconds) {
    return (0 <= hours ? hours <= 23 : false) && (0 <= minutes ? minutes <= 59 : false) && (0 <= seconds ? seconds <= 59 : false);
  }
  function isValidFormat$leapSecondTime(substituteOffset, hours, offsetHours, minutes, offsetMinutes, seconds) {
    return (substituteOffset ? (hours - offsetHours | 0) === 0 : (hours + offsetHours | 0) === 23) && (substituteOffset ? (minutes - offsetMinutes | 0) === -1 : (minutes + offsetMinutes | 0) === 59) && seconds === 60;
  }
  function TimeFormatValidator() {
    TimeFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
    this.yd3_1 = '(?<hours>\\d{2}):(?<minutes>\\d{2}):(?<seconds>\\d{2})';
    this.zd3_1 = '((Z)|((?<offsetSign>[+-])(?<offsetHours>\\d{2}):(?<offsetMinutes>\\d{2})))';
    this.ad4_1 = Regex_init_$Create$_0('(?<hours>\\d{2}):(?<minutes>\\d{2}):(?<seconds>\\d{2})(\\.\\d{1,9})?((Z)|((?<offsetSign>[+-])(?<offsetHours>\\d{2}):(?<offsetMinutes>\\d{2})))', RegexOption_IGNORE_CASE_getInstance());
  }
  protoOf(TimeFormatValidator).dd3 = function (value) {
    var tmp0_elvis_lhs = this.ad4_1.ve(value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_instance_5.bco();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var result = tmp;
    var validTimeFormat = isValidFormat(this, result);
    var tmp_0;
    if (validTimeFormat) {
      tmp_0 = Companion_instance_5.aco();
    } else {
      tmp_0 = Companion_instance_5.bco();
    }
    return tmp_0;
  };
  var TimeFormatValidator_instance;
  function TimeFormatValidator_getInstance() {
    if (TimeFormatValidator_instance == null)
      new TimeFormatValidator();
    return TimeFormatValidator_instance;
  }
  function UriFormatValidator() {
    UriFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
  }
  protoOf(UriFormatValidator).dd3 = function (value) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      return Companion_instance_5.bco();
    }
    var schemaEndIndex = indexOf(value, _Char___init__impl__6a9atx(58));
    if (schemaEndIndex < 0 || schemaEndIndex === get_lastIndex(value)) {
      return Companion_instance_5.bco();
    }
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var schema = value.substring(0, schemaEndIndex);
    if (!UriSpec_getInstance().ed5(schema)) {
      return Companion_instance_5.bco();
    }
    var fragmentDelimiterIndex = indexOf(value, _Char___init__impl__6a9atx(35));
    // Inline function 'kotlin.takeUnless' call
    var this_0 = indexOf(value, _Char___init__impl__6a9atx(63));
    var tmp;
    if (!(0 <= fragmentDelimiterIndex ? fragmentDelimiterIndex < this_0 : false)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var queryDelimiterIndex = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    var tmp_0;
    if (queryDelimiterIndex > 0) {
      // Inline function 'kotlin.text.substring' call
      var startIndex = schemaEndIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = value.substring(startIndex, queryDelimiterIndex);
    } else if (fragmentDelimiterIndex > 0) {
      // Inline function 'kotlin.text.substring' call
      var startIndex_0 = schemaEndIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = value.substring(startIndex_0, fragmentDelimiterIndex);
    } else {
      // Inline function 'kotlin.text.substring' call
      var startIndex_1 = schemaEndIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = value.substring(startIndex_1);
    }
    var hierPart = tmp_0;
    if (!UriSpec_getInstance().fd5(hierPart)) {
      return Companion_instance_5.bco();
    }
    if (queryDelimiterIndex > 0 && queryDelimiterIndex < get_lastIndex(value)) {
      var tmp_1;
      if (fragmentDelimiterIndex > 0) {
        // Inline function 'kotlin.text.substring' call
        var startIndex_2 = queryDelimiterIndex + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = value.substring(startIndex_2, fragmentDelimiterIndex);
      } else {
        // Inline function 'kotlin.text.substring' call
        var startIndex_3 = queryDelimiterIndex + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = value.substring(startIndex_3);
      }
      var query = tmp_1;
      if (!UriSpec_getInstance().gd5(query)) {
        return Companion_instance_5.bco();
      }
    }
    if (fragmentDelimiterIndex > 0 && fragmentDelimiterIndex < get_lastIndex(value)) {
      // Inline function 'kotlin.text.substring' call
      var startIndex_4 = fragmentDelimiterIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var fragment = value.substring(startIndex_4);
      if (!UriSpec_getInstance().hd5(fragment)) {
        return Companion_instance_5.bco();
      }
    }
    return Companion_instance_5.aco();
  };
  var UriFormatValidator_instance;
  function UriFormatValidator_getInstance() {
    if (UriFormatValidator_instance == null)
      new UriFormatValidator();
    return UriFormatValidator_instance;
  }
  function UriReferenceFormatValidator() {
    UriReferenceFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
  }
  protoOf(UriReferenceFormatValidator).dd3 = function (value) {
    if (UriFormatValidator_getInstance().dd3(value).dco()) {
      return Companion_instance_5.aco();
    }
    var fragmentDelimiterIndex = indexOf(value, _Char___init__impl__6a9atx(35));
    // Inline function 'kotlin.takeUnless' call
    var this_0 = indexOf(value, _Char___init__impl__6a9atx(63));
    var tmp;
    if (!(0 <= fragmentDelimiterIndex ? fragmentDelimiterIndex < this_0 : false)) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var queryDelimiterIndex = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    var tmp_0;
    if (queryDelimiterIndex >= 0) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = value.substring(0, queryDelimiterIndex);
    } else if (fragmentDelimiterIndex >= 0) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = value.substring(0, fragmentDelimiterIndex);
    } else {
      tmp_0 = value;
    }
    var relativePart = tmp_0;
    if (!UriSpec_getInstance().id5(relativePart)) {
      return Companion_instance_5.bco();
    }
    if (queryDelimiterIndex >= 0 && queryDelimiterIndex < get_lastIndex(value)) {
      var tmp_1;
      if (fragmentDelimiterIndex > 0) {
        // Inline function 'kotlin.text.substring' call
        var startIndex = queryDelimiterIndex + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = value.substring(startIndex, fragmentDelimiterIndex);
      } else {
        // Inline function 'kotlin.text.substring' call
        var startIndex_0 = queryDelimiterIndex + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = value.substring(startIndex_0);
      }
      var query = tmp_1;
      if (!UriSpec_getInstance().gd5(query)) {
        return Companion_instance_5.bco();
      }
    }
    if (fragmentDelimiterIndex >= 0 && fragmentDelimiterIndex < get_lastIndex(value)) {
      // Inline function 'kotlin.text.substring' call
      var startIndex_1 = fragmentDelimiterIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var fragment = value.substring(startIndex_1);
      if (!UriSpec_getInstance().hd5(fragment)) {
        return Companion_instance_5.bco();
      }
    }
    return Companion_instance_5.aco();
  };
  var UriReferenceFormatValidator_instance;
  function UriReferenceFormatValidator_getInstance() {
    if (UriReferenceFormatValidator_instance == null)
      new UriReferenceFormatValidator();
    return UriReferenceFormatValidator_instance;
  }
  function isValidNoschemaPath($this, relativePart) {
    var segmentSeparator = indexOf(relativePart, _Char___init__impl__6a9atx(47));
    var tmp;
    if (segmentSeparator < 0) {
      tmp = relativePart;
    } else {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = relativePart.substring(0, segmentSeparator);
    }
    var segmentWithoutColon = tmp;
    // Inline function 'io.github.optimumcode.json.schema.internal.formats.UriSpec.hasValidCharsOrPctEncoded' call
    var i = 0;
    var valid = true;
    $l$loop_0: while (i < segmentWithoutColon.length) {
      var char = charSequenceGet(segmentWithoutColon, i);
      var tmp_0;
      if (!(char === _Char___init__impl__6a9atx(37))) {
        tmp_0 = !(isUnreserved(UriSpec_getInstance(), char) || isSubDelimiter(UriSpec_getInstance(), char) || char === _Char___init__impl__6a9atx(64));
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        valid = false;
        break $l$loop_0;
      }
      if (char === _Char___init__impl__6a9atx(37)) {
        if (!$this.jd5(i, segmentWithoutColon)) {
          valid = false;
          break $l$loop_0;
        }
        i = i + 2 | 0;
      }
      i = i + 1 | 0;
    }
    var validSegmentWithoutColon = valid;
    var tmp_1;
    if (validSegmentWithoutColon) {
      var tmp_2;
      if (segmentSeparator < 0) {
        tmp_2 = true;
      } else {
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$5 = relativePart.substring(segmentSeparator);
        tmp_2 = isValidSegments($this, tmp$ret$5);
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = false;
    }
    return tmp_1;
  }
  function isValidRootlessPath($this, rootlessPath) {
    return isValidSegments($this, rootlessPath);
  }
  function isValidAbsolutePath($this, absolutePath) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(absolutePath) === 0) {
      return true;
    }
    return isValidSegments($this, absolutePath);
  }
  function isValidSegments($this, segments) {
    var lastSep = -1;
    var inductionVariable = 0;
    var last = segments.length;
    while (inductionVariable < last) {
      var index = inductionVariable;
      var value = charSequenceGet(segments, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (value === _Char___init__impl__6a9atx(47)) {
        // Inline function 'kotlin.text.substring' call
        var startIndex = lastSep + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = segments.substring(startIndex, index);
        if (!hasOnlyPChars($this, tmp$ret$1)) {
          return false;
        }
        lastSep = index;
      }
    }
    // Inline function 'kotlin.text.substring' call
    var startIndex_0 = lastSep + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = segments.substring(startIndex_0);
    return hasOnlyPChars($this, tmp$ret$3);
  }
  function isValidAuthorityWithPath($this, authorityWithPath) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(authorityWithPath) === 0) {
      return false;
    }
    var userInfoSeparatorIndex = indexOf(authorityWithPath, _Char___init__impl__6a9atx(64));
    if (userInfoSeparatorIndex >= 0) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = authorityWithPath.substring(0, userInfoSeparatorIndex);
      if (!isValidUserInfo($this, tmp$ret$2)) {
        return false;
      }
    }
    var ipV6EndIndex = lastIndexOf(authorityWithPath, _Char___init__impl__6a9atx(93));
    var portSeparatorIndex = indexOf(authorityWithPath, _Char___init__impl__6a9atx(58), ipV6EndIndex > 0 ? ipV6EndIndex : userInfoSeparatorIndex > 0 ? userInfoSeparatorIndex : 0);
    var segmentSeparatorIndex = indexOf(authorityWithPath, _Char___init__impl__6a9atx(47));
    var hostEndIndex = portSeparatorIndex > 0 ? portSeparatorIndex : segmentSeparatorIndex > 0 ? segmentSeparatorIndex : authorityWithPath.length;
    var tmp;
    if (userInfoSeparatorIndex >= 0) {
      tmp = userInfoSeparatorIndex + 1 | 0;
    } else {
      tmp = 0;
    }
    var hostStartIndex = tmp;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var host = authorityWithPath.substring(hostStartIndex, hostEndIndex);
    if (!isValidHost($this, host)) {
      return false;
    }
    if (portSeparatorIndex > 0 && portSeparatorIndex < get_lastIndex(authorityWithPath)) {
      var tmp_0;
      if (segmentSeparatorIndex > 0) {
        tmp_0 = segmentSeparatorIndex;
      } else {
        tmp_0 = authorityWithPath.length;
      }
      var portEndIndex = tmp_0;
      // Inline function 'kotlin.text.substring' call
      var startIndex = portSeparatorIndex + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$6 = authorityWithPath.substring(startIndex, portEndIndex);
      return isValidPort($this, tmp$ret$6);
    }
    var tmp_1;
    if (segmentSeparatorIndex < 0) {
      tmp_1 = true;
    } else {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$8 = authorityWithPath.substring(segmentSeparatorIndex);
      tmp_1 = isValidSegments($this, tmp$ret$8);
    }
    return tmp_1;
  }
  function isValidPort($this, port) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(port) === 0) {
      return true;
    }
    var inductionVariable = 0;
    var last = port.length;
    while (inductionVariable < last) {
      var ch = charSequenceGet(port, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (!Validation_instance.rd3(ch)) {
        return false;
      }
    }
    return true;
  }
  function isValidHost($this, host) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(host) === 0) {
      return false;
    }
    if (IpV4FormatValidator_getInstance().dd3(host).dco()) {
      return true;
    }
    if (startsWith(host, _Char___init__impl__6a9atx(91)) && endsWith(host, _Char___init__impl__6a9atx(93))) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = get_lastIndex(host);
      // Inline function 'kotlin.js.asDynamic' call
      var substr = host.substring(1, endIndex);
      return IpV6FormatValidator_getInstance().dd3(substr).dco() || isValidIPvFuture($this, substr);
    }
    return isRegName($this, host);
  }
  function isValidIPvFuture($this, ipVFuture) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(ipVFuture) === 0) {
      return false;
    }
    if (!(charSequenceGet(ipVFuture, 0) === _Char___init__impl__6a9atx(118))) {
      return false;
    }
    var dotIndex = indexOf(ipVFuture, _Char___init__impl__6a9atx(46));
    if (dotIndex < 0) {
      return false;
    }
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var firstPart = ipVFuture.substring(1, dotIndex);
    // Inline function 'kotlin.text.substring' call
    var startIndex = dotIndex + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    var secondPart = ipVFuture.substring(startIndex);
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(firstPart) === 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp = charSequenceLength(secondPart) === 0;
    }
    if (tmp) {
      return false;
    }
    var inductionVariable = 0;
    var last = firstPart.length;
    $l$loop: while (inductionVariable < last) {
      var ch = charSequenceGet(firstPart, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (isHexDigit($this, ch)) {
        continue $l$loop;
      }
      return false;
    }
    var inductionVariable_0 = 0;
    var last_0 = secondPart.length;
    $l$loop_0: while (inductionVariable_0 < last_0) {
      var ch_0 = charSequenceGet(secondPart, inductionVariable_0);
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      if (isUnreserved($this, ch_0) || isSubDelimiter($this, ch_0) || ch_0 === _Char___init__impl__6a9atx(58)) {
        continue $l$loop_0;
      }
      return false;
    }
    return true;
  }
  function isRegName($this, host) {
    // Inline function 'io.github.optimumcode.json.schema.internal.formats.UriSpec.hasValidCharsOrPctEncoded' call
    var i = 0;
    var valid = true;
    $l$loop_0: while (i < host.length) {
      var char = charSequenceGet(host, i);
      var tmp;
      if (!(char === _Char___init__impl__6a9atx(37))) {
        tmp = !(isSubDelimiter(UriSpec_getInstance(), char) || isUnreserved(UriSpec_getInstance(), char));
      } else {
        tmp = false;
      }
      if (tmp) {
        valid = false;
        break $l$loop_0;
      }
      if (char === _Char___init__impl__6a9atx(37)) {
        if (!$this.jd5(i, host)) {
          valid = false;
          break $l$loop_0;
        }
        i = i + 2 | 0;
      }
      i = i + 1 | 0;
    }
    return valid;
  }
  function isValidUserInfo($this, userInfo) {
    // Inline function 'io.github.optimumcode.json.schema.internal.formats.UriSpec.hasValidCharsOrPctEncoded' call
    var i = 0;
    var valid = true;
    $l$loop_0: while (i < userInfo.length) {
      var char = charSequenceGet(userInfo, i);
      var tmp;
      if (!(char === _Char___init__impl__6a9atx(37))) {
        tmp = !(char === _Char___init__impl__6a9atx(58) || isSubDelimiter(UriSpec_getInstance(), char) || isUnreserved(UriSpec_getInstance(), char));
      } else {
        tmp = false;
      }
      if (tmp) {
        valid = false;
        break $l$loop_0;
      }
      if (char === _Char___init__impl__6a9atx(37)) {
        if (!$this.jd5(i, userInfo)) {
          valid = false;
          break $l$loop_0;
        }
        i = i + 2 | 0;
      }
      i = i + 1 | 0;
    }
    return valid;
  }
  function isValidFragmentOrQuery($this, part) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(part) === 0) {
      return true;
    }
    // Inline function 'io.github.optimumcode.json.schema.internal.formats.UriSpec.hasValidCharsOrPctEncoded' call
    var i = 0;
    var valid = true;
    $l$loop_0: while (i < part.length) {
      var char = charSequenceGet(part, i);
      var tmp;
      if (!(char === _Char___init__impl__6a9atx(37))) {
        tmp = !(char === _Char___init__impl__6a9atx(47) || char === _Char___init__impl__6a9atx(63) || isPChar(UriSpec_getInstance(), char));
      } else {
        tmp = false;
      }
      if (tmp) {
        valid = false;
        break $l$loop_0;
      }
      if (char === _Char___init__impl__6a9atx(37)) {
        if (!$this.jd5(i, part)) {
          valid = false;
          break $l$loop_0;
        }
        i = i + 2 | 0;
      }
      i = i + 1 | 0;
    }
    return valid;
  }
  function hasOnlyPChars($this, part) {
    // Inline function 'io.github.optimumcode.json.schema.internal.formats.UriSpec.hasValidCharsOrPctEncoded' call
    var i = 0;
    var valid = true;
    $l$loop_0: while (i < part.length) {
      var char = charSequenceGet(part, i);
      var tmp;
      if (!(char === _Char___init__impl__6a9atx(37))) {
        tmp = !isPChar($this, char);
      } else {
        tmp = false;
      }
      if (tmp) {
        valid = false;
        break $l$loop_0;
      }
      if (char === _Char___init__impl__6a9atx(37)) {
        if (!$this.jd5(i, part)) {
          valid = false;
          break $l$loop_0;
        }
        i = i + 2 | 0;
      }
      i = i + 1 | 0;
    }
    return valid;
  }
  function isPChar($this, c) {
    return isUnreserved($this, c) || isSubDelimiter($this, c) || c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(64);
  }
  function isUnreserved($this, c) {
    return Validation_instance.qd3(c) || Validation_instance.rd3(c) || c === _Char___init__impl__6a9atx(95) || c === _Char___init__impl__6a9atx(45) || c === _Char___init__impl__6a9atx(46) || c === _Char___init__impl__6a9atx(126);
  }
  function isSubDelimiter($this, c) {
    return c === _Char___init__impl__6a9atx(33) || c === _Char___init__impl__6a9atx(36) || c === _Char___init__impl__6a9atx(38) || c === _Char___init__impl__6a9atx(39) || c === _Char___init__impl__6a9atx(40) || c === _Char___init__impl__6a9atx(41) || c === _Char___init__impl__6a9atx(42) || c === _Char___init__impl__6a9atx(43) || c === _Char___init__impl__6a9atx(44) || c === _Char___init__impl__6a9atx(59) || c === _Char___init__impl__6a9atx(61);
  }
  function isHexDigit($this, c) {
    return (_Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false) || (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(102) : false) || (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(70) : false);
  }
  function UriSpec() {
    UriSpec_instance = this;
    this.bd5_1 = _Char___init__impl__6a9atx(58);
    this.cd5_1 = _Char___init__impl__6a9atx(63);
    this.dd5_1 = _Char___init__impl__6a9atx(35);
  }
  protoOf(UriSpec).hd5 = function (fragment) {
    return isValidFragmentOrQuery(this, fragment);
  };
  protoOf(UriSpec).gd5 = function (query) {
    return isValidFragmentOrQuery(this, query);
  };
  protoOf(UriSpec).fd5 = function (hierPart) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hierPart) === 0) {
      return true;
    }
    var tmp;
    if (startsWith_0(hierPart, '//')) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = hierPart.substring(2);
      tmp = isValidAuthorityWithPath(this, tmp$ret$2);
    } else if (startsWith_0(hierPart, '/')) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$4 = hierPart.substring(1);
      tmp = isValidAbsolutePath(this, tmp$ret$4);
    } else {
      tmp = isValidRootlessPath(this, hierPart);
    }
    return tmp;
  };
  protoOf(UriSpec).id5 = function (relativePart) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(relativePart) === 0) {
      return true;
    }
    var tmp;
    if (startsWith_0(relativePart, '//')) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = relativePart.substring(2);
      tmp = isValidAuthorityWithPath(this, tmp$ret$2);
    } else if (startsWith_0(relativePart, '/')) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$4 = relativePart.substring(1);
      tmp = isValidAbsolutePath(this, tmp$ret$4);
    } else {
      tmp = isValidNoschemaPath(this, relativePart);
    }
    return tmp;
  };
  protoOf(UriSpec).ed5 = function (schema) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(schema) === 0) {
      return false;
    }
    if (!Validation_instance.qd3(charSequenceGet(schema, 0))) {
      return false;
    }
    var inductionVariable = 1;
    var last = get_lastIndex(schema);
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var char = charSequenceGet(schema, i);
        if (Validation_instance.qd3(char) || Validation_instance.rd3(char) || char === _Char___init__impl__6a9atx(43) || char === _Char___init__impl__6a9atx(45) || char === _Char___init__impl__6a9atx(46)) {
          continue $l$loop;
        }
        return false;
      }
       while (!(i === last));
    return true;
  };
  protoOf(UriSpec).jd5 = function (index, str) {
    if ((index + 2 | 0) >= str.length) {
      return false;
    }
    return charSequenceGet(str, index) === _Char___init__impl__6a9atx(37) && isHexDigit(this, charSequenceGet(str, index + 1 | 0)) && isHexDigit(this, charSequenceGet(str, index + 2 | 0));
  };
  var UriSpec_instance;
  function UriSpec_getInstance() {
    if (UriSpec_instance == null)
      new UriSpec();
    return UriSpec_instance;
  }
  function isValidLiteral($this, code, value, index) {
    if (isSimpleChar($this, code)) {
      return true;
    }
    if (code === 37 && UriSpec_getInstance().jd5(index, value)) {
      return true;
    }
    return isUcsChar($this, code) || isIPrivate($this, code);
  }
  function isSimpleChar($this, code) {
    return code === 33 || (35 <= code ? code <= 36 : false) || (38 <= code ? code <= 59 : false) || code === 61 || (63 <= code ? code <= 91 : false) || code === 93 || code === 95 || (97 <= code ? code <= 122 : false) || code === 126;
  }
  function isIPrivate($this, code) {
    return (57344 <= code ? code <= 63743 : false) || ((983040 <= code ? code <= 1048573 : false) || (1048576 <= code ? code <= 1114109 : false)) ? true : false;
  }
  function isUcsChar($this, code) {
    return (160 <= code ? code <= 55295 : false) || (63744 <= code ? code <= 64975 : false) || ((65008 <= code ? code <= 65519 : false) || (65536 <= code ? code <= 131069 : false)) || ((131072 <= code ? code <= 196605 : false) || (196608 <= code ? code <= 262141 : false) || ((262144 <= code ? code <= 327677 : false) || (327680 <= code ? code <= 393213 : false))) || ((393216 <= code ? code <= 458749 : false) || (458752 <= code ? code <= 524285 : false) || ((524288 <= code ? code <= 589821 : false) || (589824 <= code ? code <= 655357 : false)) || ((655360 <= code ? code <= 720893 : false) || (720896 <= code ? code <= 786429 : false) || ((786432 <= code ? code <= 851965 : false) || ((851968 <= code ? code <= 917501 : false) || (921600 <= code ? code <= 983037 : false))))) ? true : false;
  }
  function isValidExpression($this, expression) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(expression) === 0) {
      return false;
    }
    var tmp;
    if (isOperator($this, charSequenceGet(expression, 0))) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = expression.substring(1);
    } else {
      tmp = expression;
    }
    var varList = tmp;
    var tmp5 = _Char___init__impl__6a9atx(44);
    var tmp$ret$8;
    $l$block: {
      // Inline function 'io.github.optimumcode.json.schema.internal.formats.Validation.eachSeparatedPart' call
      var lastSeparator = -1;
      do {
        var separatorIndex = indexOf(varList, tmp5, lastSeparator + 1 | 0);
        var tmp_0;
        if (separatorIndex < 0) {
          // Inline function 'kotlin.text.substring' call
          var startIndex = lastSeparator + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = varList.substring(startIndex);
        } else {
          var tmp3 = lastSeparator + 1 | 0;
          // Inline function 'kotlin.text.substring' call
          var endIndex = separatorIndex;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = varList.substring(tmp3, endIndex);
        }
        var part = tmp_0;
        if (!isValidVarSpec($this, part)) {
          tmp$ret$8 = false;
          break $l$block;
        }
        lastSeparator = separatorIndex;
      }
       while (separatorIndex > 0);
      tmp$ret$8 = true;
    }
    return tmp$ret$8;
  }
  function isValidVarSpec($this, varSpec) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(varSpec) === 0) {
      return false;
    }
    var prefixModifierIndex = indexOf(varSpec, _Char___init__impl__6a9atx(58));
    var tmp;
    if (prefixModifierIndex >= 0) {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = varSpec.substring(0, prefixModifierIndex);
    } else if (endsWith(varSpec, _Char___init__impl__6a9atx(42))) {
      // Inline function 'kotlin.text.substring' call
      var endIndex = varSpec.length - 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp = varSpec.substring(0, endIndex);
    } else {
      tmp = varSpec;
    }
    var varName = tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(varName) === 0) {
      return false;
    }
    if (prefixModifierIndex > 0) {
      var tmp_0;
      if (prefixModifierIndex === get_lastIndex(varSpec)) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.text.substring' call
        var startIndex = prefixModifierIndex + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$7 = varSpec.substring(startIndex);
        tmp_0 = !isValidMaxLength($this, tmp$ret$7);
      }
      if (tmp_0) {
        return false;
      }
    }
    var tmp12 = _Char___init__impl__6a9atx(46);
    var tmp$ret$16;
    $l$block: {
      // Inline function 'io.github.optimumcode.json.schema.internal.formats.Validation.eachSeparatedPart' call
      var lastSeparator = -1;
      do {
        var separatorIndex = indexOf(varName, tmp12, lastSeparator + 1 | 0);
        var tmp_1;
        if (separatorIndex < 0) {
          // Inline function 'kotlin.text.substring' call
          var startIndex_0 = lastSeparator + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = varName.substring(startIndex_0);
        } else {
          var tmp3 = lastSeparator + 1 | 0;
          // Inline function 'kotlin.text.substring' call
          var endIndex_0 = separatorIndex;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_1 = varName.substring(tmp3, endIndex_0);
        }
        var part = tmp_1;
        var tmp_2;
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(part) > 0) {
          // Inline function 'io.github.optimumcode.json.schema.internal.formats.UriSpec.hasValidCharsOrPctEncoded' call
          var this_0 = UriSpec_getInstance();
          var i = 0;
          var valid = true;
          $l$loop_0: while (i < part.length) {
            var char = charSequenceGet(part, i);
            var tmp_3;
            if (!(char === _Char___init__impl__6a9atx(37))) {
              tmp_3 = !(Validation_instance.qd3(char) || Validation_instance.rd3(char) || char === _Char___init__impl__6a9atx(95));
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              valid = false;
              break $l$loop_0;
            }
            if (char === _Char___init__impl__6a9atx(37)) {
              if (!this_0.jd5(i, part)) {
                valid = false;
                break $l$loop_0;
              }
              i = i + 2 | 0;
            }
            i = i + 1 | 0;
          }
          tmp_2 = valid;
        } else {
          tmp_2 = false;
        }
        if (!tmp_2) {
          tmp$ret$16 = false;
          break $l$block;
        }
        lastSeparator = separatorIndex;
      }
       while (separatorIndex > 0);
      tmp$ret$16 = true;
    }
    return tmp$ret$16;
  }
  function isValidMaxLength($this, maxLength) {
    if (charSequenceGet(maxLength, 0) === _Char___init__impl__6a9atx(48)) {
      return false;
    }
    if (maxLength.length > 4) {
      return false;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.all' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(maxLength)) {
        var element = charSequenceGet(maxLength, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        if (!Validation_instance.rd3(element)) {
          tmp$ret$1 = false;
          break $l$block;
        }
      }
      tmp$ret$1 = true;
    }
    return tmp$ret$1;
  }
  function isOperator($this, char) {
    return char === _Char___init__impl__6a9atx(43) || (char === _Char___init__impl__6a9atx(35) || char === _Char___init__impl__6a9atx(46)) || (char === _Char___init__impl__6a9atx(47) || (char === _Char___init__impl__6a9atx(59) || char === _Char___init__impl__6a9atx(63))) || (char === _Char___init__impl__6a9atx(38) || (char === _Char___init__impl__6a9atx(61) || char === _Char___init__impl__6a9atx(44)) || (char === _Char___init__impl__6a9atx(33) || (char === _Char___init__impl__6a9atx(64) || char === _Char___init__impl__6a9atx(124)))) ? true : false;
  }
  function UriTemplateFormatValidator() {
    UriTemplateFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
    this.kd5_1 = 123;
    this.ld5_1 = 125;
    this.md5_1 = 37;
    this.nd5_1 = _Char___init__impl__6a9atx(42);
    this.od5_1 = _Char___init__impl__6a9atx(58);
    this.pd5_1 = 4;
  }
  protoOf(UriTemplateFormatValidator).dd3 = function (value) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      return Companion_instance_5.aco();
    }
    var index = 0;
    var expressionStartIndex = -1;
    var inExpression = false;
    while (index < value.length) {
      var code = codePointAt(value, index);
      if (code === 123) {
        if (inExpression) {
          return Companion_instance_5.bco();
        }
        inExpression = true;
        expressionStartIndex = index;
      } else if (code === 125) {
        if (!inExpression) {
          return Companion_instance_5.bco();
        }
        inExpression = false;
        var tmp2 = expressionStartIndex + 1 | 0;
        // Inline function 'kotlin.text.substring' call
        var endIndex = index;
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$2 = value.substring(tmp2, endIndex);
        if (!isValidExpression(this, tmp$ret$2)) {
          return Companion_instance_5.bco();
        }
      } else if (!inExpression)
        if (!isValidLiteral(this, code, value, index)) {
          return Companion_instance_5.bco();
        }
      index = index + CodePoints_instance.acl(code) | 0;
    }
    var tmp;
    if (inExpression) {
      tmp = Companion_instance_5.bco();
    } else {
      tmp = Companion_instance_5.aco();
    }
    return tmp;
  };
  var UriTemplateFormatValidator_instance;
  function UriTemplateFormatValidator_getInstance() {
    if (UriTemplateFormatValidator_instance == null)
      new UriTemplateFormatValidator();
    return UriTemplateFormatValidator_instance;
  }
  function UuidFormatValidator() {
    UuidFormatValidator_instance = this;
    AbstractStringFormatValidator.call(this);
    this.qd5_1 = 36;
    this.rd5_1 = '[0-9a-fA-F]';
    this.sd5_1 = Regex_init_$Create$('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');
  }
  protoOf(UuidFormatValidator).dd3 = function (value) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(value) === 0) {
      tmp = true;
    } else {
      tmp = !(value.length === 36);
    }
    if (tmp) {
      return Companion_instance_5.bco();
    }
    var tmp_0;
    if (this.sd5_1.re(value)) {
      tmp_0 = Companion_instance_5.aco();
    } else {
      tmp_0 = Companion_instance_5.bco();
    }
    return tmp_0;
  };
  var UuidFormatValidator_instance;
  function UuidFormatValidator_getInstance() {
    if (UuidFormatValidator_instance == null)
      new UuidFormatValidator();
    return UuidFormatValidator_instance;
  }
  function Validation_0() {
  }
  protoOf(Validation_0).qd3 = function (c) {
    return (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(122) : false) || (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(90) : false);
  };
  protoOf(Validation_0).rd3 = function (c) {
    return _Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false;
  };
  var Validation_instance;
  function Validation_getInstance() {
    return Validation_instance;
  }
  function encodeLabel($this, _this__u8e3s4, string, pos, limit) {
    if (!requiresEncode($this, string, pos, limit)) {
      _this__u8e3s4.xd(string, pos, limit);
      return true;
    }
    _this__u8e3s4.y8('xn--');
    var input = codePoints($this, string, pos, limit);
    var b = 0;
    var _iterator__ex2g4s = input.p();
    while (_iterator__ex2g4s.q()) {
      var codePoint = _iterator__ex2g4s.r();
      if (codePoint < 128) {
        _this__u8e3s4.z8(numberToChar(codePoint));
        b = b + 1 | 0;
      }
    }
    if (b > 0) {
      _this__u8e3s4.z8(_Char___init__impl__6a9atx(45));
    }
    var n = 128;
    var delta = 0;
    var bias = 72;
    var h = b;
    while (h < input.s()) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlin.collections.minBy' call
        var iterator = input.p();
        if (!iterator.q())
          throw NoSuchElementException_init_$Create$();
        var minElem = iterator.r();
        if (!iterator.q()) {
          tmp$ret$0 = minElem;
          break $l$block;
        }
        var it = minElem;
        var minValue = it >= n ? it : 2147483647;
        do {
          var e = iterator.r();
          var v = e >= n ? e : 2147483647;
          if (compareTo(minValue, v) > 0) {
            minElem = e;
            minValue = v;
          }
        }
         while (iterator.q());
        tmp$ret$0 = minElem;
      }
      var m = tmp$ret$0;
      var increment = imul(m - n | 0, h + 1 | 0);
      if (delta > (2147483647 - increment | 0))
        return false;
      delta = delta + increment | 0;
      n = m;
      var _iterator__ex2g4s_0 = input.p();
      while (_iterator__ex2g4s_0.q()) {
        var c = _iterator__ex2g4s_0.r();
        if (c < n) {
          if (delta === 2147483647)
            return false;
          delta = delta + 1 | 0;
        } else if (c === n) {
          var q = delta;
          var progression = step(until(36, 2147483647), 36);
          var inductionVariable = progression.h1_1;
          var last = progression.i1_1;
          var step_0 = progression.j1_1;
          if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
            $l$loop: do {
              var k = inductionVariable;
              inductionVariable = inductionVariable + step_0 | 0;
              var t = k <= bias ? 1 : k >= (bias + 26 | 0) ? 26 : k - bias | 0;
              if (q < t)
                break $l$loop;
              _this__u8e3s4.z8(_get_punycodeDigit__m2d9nl($this, t + ((q - t | 0) % (36 - t | 0) | 0) | 0));
              q = (q - t | 0) / (36 - t | 0) | 0;
            }
             while (!(k === last));
          _this__u8e3s4.z8(_get_punycodeDigit__m2d9nl($this, q));
          bias = adapt($this, delta, h + 1 | 0, h === b);
          delta = 0;
          h = h + 1 | 0;
        }
      }
      delta = delta + 1 | 0;
      n = n + 1 | 0;
    }
    return true;
  }
  function decodeLabel($this, _this__u8e3s4, string, pos, limit) {
    if (!regionMatches(string, pos, 'xn--', 0, 4, true)) {
      _this__u8e3s4.xd(string, pos, limit);
      return true;
    }
    var originalPos = _this__u8e3s4.a();
    var pos_0 = pos + 4 | 0;
    var codePoints = 0;
    var lastDelimiter = lastIndexOf(string, _Char___init__impl__6a9atx(45), limit);
    if (lastDelimiter >= pos_0) {
      while (pos_0 < lastDelimiter) {
        var _unary__edvuaz = pos_0;
        pos_0 = _unary__edvuaz + 1 | 0;
        var codePoint = charSequenceGet(string, _unary__edvuaz);
        if ((_Char___init__impl__6a9atx(97) <= codePoint ? codePoint <= _Char___init__impl__6a9atx(122) : false) || (_Char___init__impl__6a9atx(65) <= codePoint ? codePoint <= _Char___init__impl__6a9atx(90) : false) || ((_Char___init__impl__6a9atx(48) <= codePoint ? codePoint <= _Char___init__impl__6a9atx(57) : false) || codePoint === _Char___init__impl__6a9atx(45))) {
          var tmp;
          // Inline function 'kotlin.text.isEmpty' call
          if (charSequenceLength(_this__u8e3s4) === 0) {
            tmp = 0;
          } else {
            tmp = _this__u8e3s4.a();
          }
          var tmp_0 = tmp;
          // Inline function 'kotlin.code' call
          var tmp$ret$1 = Char__toInt_impl_vasixd(codePoint);
          if (!insertCodePoint($this, _this__u8e3s4, tmp_0, tmp$ret$1)) {
            return false;
          }
          codePoints = codePoints + 1 | 0;
        } else
          return false;
      }
      pos_0 = pos_0 + 1 | 0;
    }
    var n = 128;
    var i = 0;
    var bias = 72;
    while (pos_0 < limit) {
      var oldi = i;
      var w = 1;
      var progression = step(until(36, 2147483647), 36);
      var inductionVariable = progression.h1_1;
      var last = progression.i1_1;
      var step_0 = progression.j1_1;
      if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
        $l$loop: do {
          var k = inductionVariable;
          inductionVariable = inductionVariable + step_0 | 0;
          if (pos_0 === limit)
            return false;
          var _unary__edvuaz_0 = pos_0;
          pos_0 = _unary__edvuaz_0 + 1 | 0;
          var c = charSequenceGet(string, _unary__edvuaz_0);
          var tmp_1;
          if (_Char___init__impl__6a9atx(97) <= c ? c <= _Char___init__impl__6a9atx(122) : false) {
            tmp_1 = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(97));
          } else if (_Char___init__impl__6a9atx(65) <= c ? c <= _Char___init__impl__6a9atx(90) : false) {
            tmp_1 = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(65));
          } else if (_Char___init__impl__6a9atx(48) <= c ? c <= _Char___init__impl__6a9atx(57) : false) {
            tmp_1 = Char__minus_impl_a2frrh(c, _Char___init__impl__6a9atx(48)) + 26 | 0;
          } else {
            return false;
          }
          var digit = tmp_1;
          var deltaI = imul(digit, w);
          if (i > (2147483647 - deltaI | 0))
            return false;
          i = i + deltaI | 0;
          var t = k <= bias ? 1 : k >= (bias + 26 | 0) ? 26 : k - bias | 0;
          if (digit < t)
            break $l$loop;
          var scaleW = 36 - t | 0;
          if (w > (2147483647 / scaleW | 0))
            return false;
          w = imul(w, scaleW);
        }
         while (!(k === last));
      bias = adapt($this, i - oldi | 0, codePoints + 1 | 0, oldi === 0);
      var deltaN = i / (codePoints + 1 | 0) | 0;
      if (n > (2147483647 - deltaN | 0))
        return false;
      n = n + deltaN | 0;
      i = i % (codePoints + 1 | 0) | 0;
      if (n > 1114111)
        return false;
      if (!insertCodePoint($this, _this__u8e3s4, originalPos + i | 0, n)) {
        return false;
      }
      codePoints = codePoints + 1 | 0;
      i = i + 1 | 0;
    }
    return true;
  }
  function adapt($this, delta, numpoints, first) {
    var newDelta = first ? delta / 700 | 0 : delta / 2 | 0;
    newDelta = newDelta + (newDelta / numpoints | 0) | 0;
    var k = 0;
    while (newDelta > 455) {
      newDelta = newDelta / 35 | 0;
      k = k + 36 | 0;
    }
    return k + (imul(36, newDelta) / (newDelta + 38 | 0) | 0) | 0;
  }
  function insertCodePoint($this, _this__u8e3s4, index, codePoint) {
    if (isBMPCodePoint($this, codePoint))
      _this__u8e3s4.ce(index, numberToChar(codePoint));
    else if (isValidCodePoint($this, codePoint)) {
      _this__u8e3s4.ce(index, lowSurrogate($this, codePoint));
      _this__u8e3s4.ce(index, highSurrogate($this, codePoint));
    } else
      return false;
    return true;
  }
  function isBMPCodePoint($this, codePoint) {
    return codePoint >> 16 === 0;
  }
  function isValidCodePoint($this, codePoint) {
    var plane = codePoint >>> 16 | 0;
    return plane < 17;
  }
  function lowSurrogate($this, _this__u8e3s4) {
    var tmp = _this__u8e3s4 & 1023;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(56320);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    return numberToChar(tmp + tmp$ret$0 | 0);
  }
  function highSurrogate($this, _this__u8e3s4) {
    var tmp = _this__u8e3s4 >> 10;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(55296);
    var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
    return numberToChar(tmp + (tmp$ret$0 - 64 | 0) | 0);
  }
  function requiresEncode($this, _this__u8e3s4, pos, limit) {
    var inductionVariable = pos;
    if (inductionVariable < limit)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(_this__u8e3s4, i);
        if (Char__toInt_impl_vasixd(this_0) >= 128)
          return true;
      }
       while (inductionVariable < limit);
    return false;
  }
  function codePoints($this, _this__u8e3s4, pos, limit) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$_0();
    var i = pos;
    while (i < limit) {
      var c = charSequenceGet(_this__u8e3s4, i);
      var tmp;
      if (isSurrogate(c)) {
        var low = (i + 1 | 0) < limit ? charSequenceGet(_this__u8e3s4, i + 1 | 0) : _Char___init__impl__6a9atx(0);
        var tmp_0;
        if (isLowSurrogate(c) || !isLowSurrogate(low)) {
          // Inline function 'kotlin.code' call
          var this_0 = _Char___init__impl__6a9atx(63);
          tmp_0 = Char__toInt_impl_vasixd(this_0);
        } else {
          i = i + 1 | 0;
          // Inline function 'kotlin.code' call
          var tmp_1 = (Char__toInt_impl_vasixd(c) & 1023) << 10;
          // Inline function 'kotlin.code' call
          tmp_0 = 65536 + (tmp_1 | Char__toInt_impl_vasixd(low) & 1023) | 0;
        }
        tmp = tmp_0;
      } else {
        // Inline function 'kotlin.code' call
        tmp = Char__toInt_impl_vasixd(c);
      }
      // Inline function 'kotlin.collections.plusAssign' call
      var element = tmp;
      result.n(element);
      i = i + 1 | 0;
    }
    return result;
  }
  function _get_punycodeDigit__m2d9nl($this, _this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 < 26) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(97);
      tmp = _this__u8e3s4 + Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_this__u8e3s4 < 36) {
      var tmp_0 = _this__u8e3s4 - 26 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 + Char__toInt_impl_vasixd(this_1) | 0;
    } else {
      var message = 'unexpected digit: ' + _this__u8e3s4;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return numberToChar(tmp);
  }
  function Punycode() {
    this.id4_1 = 'xn--';
    this.jd4_1 = 4;
    this.kd4_1 = 65536;
    this.ld4_1 = 1114111;
    this.md4_1 = 36;
    this.nd4_1 = 1;
    this.od4_1 = 26;
    this.pd4_1 = 38;
    this.qd4_1 = 700;
    this.rd4_1 = 72;
    this.sd4_1 = 128;
  }
  protoOf(Punycode).jc5 = function (string) {
    var pos = 0;
    var limit = string.length;
    var result = StringBuilder_init_$Create$_0();
    $l$loop: while (pos < limit) {
      var dot = indexOf(string, _Char___init__impl__6a9atx(46), pos);
      if (dot === -1)
        dot = limit;
      if (!encodeLabel(this, result, string, pos, dot)) {
        return null;
      }
      if (dot < limit) {
        result.z8(_Char___init__impl__6a9atx(46));
        pos = dot + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    return result.toString();
  };
  protoOf(Punycode).td4 = function (string) {
    var pos = 0;
    var limit = string.length;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$_0();
    $l$loop: while (pos < limit) {
      var dot = indexOf(string, _Char___init__impl__6a9atx(46), pos);
      if (dot === -1)
        dot = limit;
      if (!decodeLabel(Punycode_instance, this_0, string, pos, dot))
        return null;
      if (dot < limit) {
        this_0.z8(_Char___init__impl__6a9atx(46));
        pos = dot + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    return this_0.toString();
  };
  var Punycode_instance;
  function Punycode_getInstance() {
    return Punycode_instance;
  }
  function areEqual(first, second) {
    if (areDifferentInstances(first, second)) {
      return false;
    }
    var tmp;
    if (isInterface(first, ObjectElement)) {
      tmp = areEqualObjects(first, isInterface(second, ObjectElement) ? second : THROW_CCE());
    } else {
      if (isInterface(first, ArrayElement)) {
        tmp = areEqualArrays(first, isInterface(second, ArrayElement) ? second : THROW_CCE());
      } else {
        if (isInterface(first, PrimitiveElement)) {
          tmp = areEqualPrimitives(first, isInterface(second, PrimitiveElement) ? second : THROW_CCE());
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function areDifferentInstances(left, right) {
    var tmp;
    var tmp_0;
    if (isInterface(left, PrimitiveElement)) {
      tmp_0 = isInterface(right, PrimitiveElement);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = false;
    } else {
      var tmp_1;
      if (isInterface(left, ArrayElement)) {
        tmp_1 = isInterface(right, ArrayElement);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = false;
      } else {
        var tmp_2;
        if (isInterface(left, ObjectElement)) {
          tmp_2 = isInterface(right, ObjectElement);
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp = false;
        } else {
          tmp = true;
        }
      }
    }
    return tmp;
  }
  function areEqualObjects(first, second) {
    if (!(first.s() === second.s())) {
      return false;
    }
    if (!equals(first.n2(), second.n2())) {
      return false;
    }
    var _iterator__ex2g4s = first.n2().p();
    while (_iterator__ex2g4s.q()) {
      var key = _iterator__ex2g4s.r();
      if (!areEqual(getValue_0(first, key), getValue_0(second, key))) {
        return false;
      }
    }
    return true;
  }
  function areEqualArrays(first, second) {
    if (!(first.s() === second.s())) {
      return false;
    }
    var inductionVariable = 0;
    var last = first.s();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!areEqual(first.u(i), second.u(i))) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  function areEqualPrimitives(first, second) {
    if (first.md0() && second.md0()) {
      return true;
    }
    if (!(first.p4u() === second.p4u())) {
      return false;
    }
    var tmp;
    if (first.p4u()) {
      tmp = first.q4u() === second.q4u();
    } else {
      tmp = first.md0() || second.md0() ? false : first.nd0() || second.nd0() ? first.q4u() === second.q4u() : compareAsNumbers(first, second);
    }
    return tmp;
  }
  function compareAsNumbers(first, second) {
    return numberParts(first).equals(numberParts(second));
  }
  function NumberParts(integer, fractional, precision) {
    this.pd0_1 = integer;
    this.qd0_1 = fractional;
    this.rd0_1 = precision;
  }
  protoOf(NumberParts).toString = function () {
    return 'NumberParts(integer=' + this.pd0_1.toString() + ', fractional=' + this.qd0_1.toString() + ', precision=' + this.rd0_1 + ')';
  };
  protoOf(NumberParts).hashCode = function () {
    var result = this.pd0_1.hashCode();
    result = imul(result, 31) + this.qd0_1.hashCode() | 0;
    result = imul(result, 31) + this.rd0_1 | 0;
    return result;
  };
  protoOf(NumberParts).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NumberParts))
      return false;
    var tmp0_other_with_cast = other instanceof NumberParts ? other : THROW_CCE();
    if (!this.pd0_1.equals(tmp0_other_with_cast.pd0_1))
      return false;
    if (!this.qd0_1.equals(tmp0_other_with_cast.qd0_1))
      return false;
    if (!(this.rd0_1 === tmp0_other_with_cast.rd0_1))
      return false;
    return true;
  };
  function parseNumberParts(element) {
    var tmp;
    if (element.p4u() || element.md0() || element.nd0()) {
      tmp = null;
    } else {
      tmp = numberParts(element);
    }
    return tmp;
  }
  function get_number(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.td5();
    return tmp0_elvis_lhs == null ? _this__u8e3s4.ud5() : tmp0_elvis_lhs;
  }
  function get_integerOrNull(_this__u8e3s4) {
    var tmp0_safe_receiver = parseNumberParts(_this__u8e3s4);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.qd0_1.equals(new Long(0, 0)) && tmp0_safe_receiver.pd0_1.g1(new Long(2147483647, 0)) <= 0) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.pd0_1;
    return tmp2_safe_receiver == null ? null : tmp2_safe_receiver.l1();
  }
  function numberParts(element) {
    // Inline function 'kotlin.run' call
    var $this$run = element.q4u();
    if (contains($this$run, _Char___init__impl__6a9atx(101)) || contains($this$run, _Char___init__impl__6a9atx(69))) {
      var tmp2 = get_number(element);
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp2 == null) {
          var message = "element '" + element.q4u() + "' is not a number";
          throw IllegalArgumentException_init_$Create$(toString(message));
        } else {
          tmp$ret$3 = tmp2;
          break $l$block;
        }
      }
      var number = tmp$ret$3;
      // Inline function 'kotlin.run' call
      var $this$run_0 = numberToDouble(number);
      var precision = 0;
      // Inline function 'kotlin.math.absoluteValue' call
      var this_0 = $this$run_0 % 1.0;
      var fractionalPart = Math.abs(this_0);
      while (fractionalPart % 1.0 > 0) {
        fractionalPart = fractionalPart * 10.0;
        precision = precision + 1 | 0;
      }
      return new NumberParts(numberToLong($this$run_0), numberToLong(fractionalPart), precision);
    }
    var integerPart = substringBefore(element.q4u(), _Char___init__impl__6a9atx(46));
    var tmp;
    if (integerPart === element.q4u()) {
      tmp = new NumberParts(toLong(integerPart), new Long(0, 0), 0);
    } else {
      var tmp5 = element.q4u();
      // Inline function 'kotlin.text.substring' call
      var startIndex = integerPart.length + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      var fractionalPart_0 = tmp5.substring(startIndex);
      var lastNotZero = fractionalPart_0.length - 1 | 0;
      var inductionVariable = fractionalPart_0.length - 1 | 0;
      if (0 <= inductionVariable)
        $l$loop: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          if (!(charSequenceGet(fractionalPart_0, i) === _Char___init__impl__6a9atx(48))) {
            break $l$loop;
          }
          lastNotZero = lastNotZero - 1 | 0;
        }
         while (0 <= inductionVariable);
      var fractionalSize = lastNotZero + 1 | 0;
      var tmp_0 = toLong(integerPart);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.takeIf' call
      var this_1 = fractionalPart_0.substring(0, fractionalSize);
      var tmp_1;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(this_1) > 0) {
        tmp_1 = this_1;
      } else {
        tmp_1 = null;
      }
      var tmp0_safe_receiver = tmp_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toLong(tmp0_safe_receiver);
      tmp = new NumberParts(tmp_0, tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs, fractionalSize);
    }
    return tmp;
  }
  function getString(_this__u8e3s4, property) {
    var tmp0_elvis_lhs = _this__u8e3s4.af(property);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var element = tmp;
    var tmp_0;
    if (element instanceof JsonPrimitive) {
      tmp_0 = element.p4u();
    } else {
      tmp_0 = false;
    }
    // Inline function 'kotlin.require' call
    if (!tmp_0) {
      var message = property + ' must be a string';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return element.q4u();
  }
  function getStringRequired(_this__u8e3s4, property) {
    var tmp0 = getString(_this__u8e3s4, property);
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = property + ' must be set';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  }
  function allCodepoints(_this__u8e3s4, condition) {
    // Inline function 'io.github.optimumcode.json.schema.internal.util.forEachCodePointIndexed' call
    var str = _this__u8e3s4;
    var endIndex = charSequenceLength(_this__u8e3s4);
    var index = 0;
    $l$loop: while (index < endIndex) {
      var startIndex = index;
      var firstChar = charSequenceGet(str, index);
      index = index + 1 | 0;
      if (isHighSurrogate(firstChar) && index < endIndex) {
        var nextChar = charSequenceGet(str, index);
        if (isLowSurrogate(nextChar)) {
          if (!condition(CodePoints_instance.zck(firstChar, nextChar))) {
            return false;
          }
          index = index + 1 | 0;
          continue $l$loop;
        }
      }
      // Inline function 'kotlin.code' call
      if (!condition(Char__toInt_impl_vasixd(firstChar))) {
        return false;
      }
    }
    return true;
  }
  function codePointCount(_this__u8e3s4) {
    var endIndex = charSequenceLength(_this__u8e3s4);
    var index = 0;
    var count = 0;
    while (index < endIndex) {
      var firstChar = charSequenceGet(_this__u8e3s4, index);
      index = index + 1 | 0;
      if (isHighSurrogate(firstChar) && index < endIndex) {
        var nextChar = charSequenceGet(_this__u8e3s4, index);
        if (isLowSurrogate(nextChar)) {
          index = index + 1 | 0;
        }
      }
      count = count + 1 | 0;
    }
    return count;
  }
  var Draft201909_DRAFT201909_CORE_VOCABULARY_instance;
  var Draft201909_DRAFT201909_APPLICATOR_VOCABULARY_instance;
  var Draft201909_DRAFT201909_VALIDATION_VOCABULARY_instance;
  var Draft201909_DRAFT201909_FORMAT_VOCABULARY_instance;
  var Draft201909_DRAFT201909_CONTENT_VOCABULARY_instance;
  var Draft201909_DRAFT201909_META_DATA_VOCABULARY_instance;
  var Draft201909_DRAFT201909_SCHEMA_instance;
  var Draft201909_entriesInitialized;
  function Draft201909_initEntries() {
    if (Draft201909_entriesInitialized)
      return Unit_instance;
    Draft201909_entriesInitialized = true;
    Draft201909_DRAFT201909_CORE_VOCABULARY_instance = new Draft201909('DRAFT201909_CORE_VOCABULARY', 0, '\n{\n    "$schema": "https://json-schema.org/draft/2019-09/schema",\n    "$id": "https://json-schema.org/draft/2019-09/meta/core",\n    "$recursiveAnchor": true,\n\n    "title": "Core vocabulary meta-schema",\n    "type": ["object", "boolean"],\n    "properties": {\n      "$id": {\n        "type": "string",\n        "format": "uri-reference",\n        "$comment": "Non-empty fragments not allowed.",\n        "pattern": "^[^#]*#?$"\n      },\n      "$schema": {\n        "type": "string",\n        "format": "uri"\n      },\n      "$anchor": {\n        "type": "string",\n        "pattern": "^[A-Za-z][-A-Za-z0-9.:_]*$"\n      },\n      "$ref": {\n        "type": "string",\n        "format": "uri-reference"\n      },\n      "$recursiveRef": {\n        "type": "string",\n        "format": "uri-reference"\n      },\n      "$recursiveAnchor": {\n        "type": "boolean",\n        "default": false\n      },\n      "$vocabulary": {\n        "type": "object",\n        "propertyNames": {\n          "type": "string",\n          "format": "uri"\n        },\n        "additionalProperties": {\n          "type": "boolean"\n        }\n      },\n      "$comment": {\n        "type": "string"\n      },\n      "$defs": {\n        "type": "object",\n        "additionalProperties": { "$recursiveRef": "#" },\n        "default": {}\n      }\n    }\n}\n');
    Draft201909_DRAFT201909_APPLICATOR_VOCABULARY_instance = new Draft201909('DRAFT201909_APPLICATOR_VOCABULARY', 1, '\n{\n    "$schema": "https://json-schema.org/draft/2019-09/schema",\n    "$id": "https://json-schema.org/draft/2019-09/meta/applicator",\n    "$recursiveAnchor": true,\n\n    "title": "Applicator vocabulary meta-schema",\n    "type": ["object", "boolean"],\n    "properties": {\n      "additionalItems": { "$recursiveRef": "#" },\n      "unevaluatedItems": { "$recursiveRef": "#" },\n      "items": {\n        "anyOf": [\n          { "$recursiveRef": "#" },\n          { "$ref": "#/$defs/schemaArray" }\n        ]\n      },\n      "contains": { "$recursiveRef": "#" },\n      "additionalProperties": { "$recursiveRef": "#" },\n      "unevaluatedProperties": { "$recursiveRef": "#" },\n      "properties": {\n        "type": "object",\n        "additionalProperties": { "$recursiveRef": "#" },\n        "default": {}\n      },\n      "patternProperties": {\n        "type": "object",\n        "additionalProperties": { "$recursiveRef": "#" },\n        "propertyNames": { "format": "regex" },\n        "default": {}\n      },\n      "dependentSchemas": {\n        "type": "object",\n        "additionalProperties": {\n          "$recursiveRef": "#"\n        }\n      },\n      "propertyNames": { "$recursiveRef": "#" },\n      "if": { "$recursiveRef": "#" },\n      "then": { "$recursiveRef": "#" },\n      "else": { "$recursiveRef": "#" },\n      "allOf": { "$ref": "#/$defs/schemaArray" },\n      "anyOf": { "$ref": "#/$defs/schemaArray" },\n      "oneOf": { "$ref": "#/$defs/schemaArray" },\n      "not": { "$recursiveRef": "#" }\n    },\n    "$defs": {\n      "schemaArray": {\n        "type": "array",\n        "minItems": 1,\n        "items": { "$recursiveRef": "#" }\n      }\n    }\n}\n');
    Draft201909_DRAFT201909_VALIDATION_VOCABULARY_instance = new Draft201909('DRAFT201909_VALIDATION_VOCABULARY', 2, '\n{\n  "$schema": "https://json-schema.org/draft/2019-09/schema",\n  "$id": "https://json-schema.org/draft/2019-09/meta/validation",\n  "$recursiveAnchor": true,\n\n  "title": "Validation vocabulary meta-schema",\n  "type": ["object", "boolean"],\n  "properties": {\n    "multipleOf": {\n      "type": "number",\n      "exclusiveMinimum": 0\n    },\n    "maximum": {\n      "type": "number"\n    },\n    "exclusiveMaximum": {\n      "type": "number"\n    },\n    "minimum": {\n      "type": "number"\n    },\n    "exclusiveMinimum": {\n      "type": "number"\n    },\n    "maxLength": { "$ref": "#/$defs/nonNegativeInteger" },\n    "minLength": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },\n    "pattern": {\n      "type": "string",\n      "format": "regex"\n    },\n    "maxItems": { "$ref": "#/$defs/nonNegativeInteger" },\n    "minItems": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },\n    "uniqueItems": {\n      "type": "boolean",\n      "default": false\n    },\n    "maxContains": { "$ref": "#/$defs/nonNegativeInteger" },\n    "minContains": {\n      "$ref": "#/$defs/nonNegativeInteger",\n      "default": 1\n    },\n    "maxProperties": { "$ref": "#/$defs/nonNegativeInteger" },\n    "minProperties": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },\n    "required": { "$ref": "#/$defs/stringArray" },\n    "dependentRequired": {\n      "type": "object",\n      "additionalProperties": {\n        "$ref": "#/$defs/stringArray"\n      }\n    },\n    "const": true,\n    "enum": {\n      "type": "array",\n      "items": true\n    },\n    "type": {\n      "anyOf": [\n        { "$ref": "#/$defs/simpleTypes" },\n        {\n          "type": "array",\n          "items": { "$ref": "#/$defs/simpleTypes" },\n          "minItems": 1,\n          "uniqueItems": true\n        }\n      ]\n    }\n  },\n  "$defs": {\n    "nonNegativeInteger": {\n      "type": "integer",\n      "minimum": 0\n    },\n    "nonNegativeIntegerDefault0": {\n      "$ref": "#/$defs/nonNegativeInteger",\n      "default": 0\n    },\n    "simpleTypes": {\n      "enum": [\n        "array",\n        "boolean",\n        "integer",\n        "null",\n        "number",\n        "object",\n        "string"\n      ]\n    },\n    "stringArray": {\n      "type": "array",\n      "items": { "type": "string" },\n      "uniqueItems": true,\n      "default": []\n    }\n  }\n}\n');
    Draft201909_DRAFT201909_FORMAT_VOCABULARY_instance = new Draft201909('DRAFT201909_FORMAT_VOCABULARY', 3, '\n{\n  "$schema": "https://json-schema.org/draft/2019-09/schema",\n  "$id": "https://json-schema.org/draft/2019-09/meta/format",\n  "$recursiveAnchor": true,\n\n  "title": "Format vocabulary meta-schema",\n  "type": ["object", "boolean"],\n  "properties": {\n    "format": { "type": "string" }\n  }\n}\n');
    Draft201909_DRAFT201909_CONTENT_VOCABULARY_instance = new Draft201909('DRAFT201909_CONTENT_VOCABULARY', 4, '\n{\n  "$schema": "https://json-schema.org/draft/2019-09/schema",\n  "$id": "https://json-schema.org/draft/2019-09/meta/content",\n  "$recursiveAnchor": true,\n\n  "title": "Content vocabulary meta-schema",\n\n  "type": ["object", "boolean"],\n  "properties": {\n    "contentMediaType": { "type": "string" },\n    "contentEncoding": { "type": "string" },\n    "contentSchema": { "$recursiveRef": "#" }\n  }\n}\n');
    Draft201909_DRAFT201909_META_DATA_VOCABULARY_instance = new Draft201909('DRAFT201909_META_DATA_VOCABULARY', 5, '\n{\n  "$schema": "https://json-schema.org/draft/2019-09/schema",\n  "$id": "https://json-schema.org/draft/2019-09/meta/meta-data",\n  "$recursiveAnchor": true,\n\n  "title": "Meta-data vocabulary meta-schema",\n\n  "type": ["object", "boolean"],\n  "properties": {\n    "title": {\n      "type": "string"\n    },\n    "description": {\n      "type": "string"\n    },\n    "default": true,\n    "deprecated": {\n      "type": "boolean",\n      "default": false\n    },\n    "readOnly": {\n      "type": "boolean",\n      "default": false\n    },\n    "writeOnly": {\n      "type": "boolean",\n      "default": false\n    },\n    "examples": {\n      "type": "array",\n      "items": true\n    }\n  }\n}\n');
    Draft201909_DRAFT201909_SCHEMA_instance = new Draft201909('DRAFT201909_SCHEMA', 6, '\n{\n  "$schema": "https://json-schema.org/draft/2019-09/schema",\n  "$id": "https://json-schema.org/draft/2019-09/schema",\n  "$vocabulary": {\n    "https://json-schema.org/draft/2019-09/vocab/core": true,\n    "https://json-schema.org/draft/2019-09/vocab/applicator": true,\n    "https://json-schema.org/draft/2019-09/vocab/validation": true,\n    "https://json-schema.org/draft/2019-09/vocab/meta-data": true,\n    "https://json-schema.org/draft/2019-09/vocab/format": false,\n    "https://json-schema.org/draft/2019-09/vocab/content": true\n  },\n  "$recursiveAnchor": true,\n\n  "title": "Core and Validation specifications meta-schema",\n  "allOf": [\n    {"$ref": "meta/core"},\n    {"$ref": "meta/applicator"},\n    {"$ref": "meta/validation"},\n    {"$ref": "meta/meta-data"},\n    {"$ref": "meta/format"},\n    {"$ref": "meta/content"}\n  ],\n  "type": ["object", "boolean"],\n  "properties": {\n    "definitions": {\n      "$comment": "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.",\n      "type": "object",\n      "additionalProperties": { "$recursiveRef": "#" },\n      "default": {}\n    },\n    "dependencies": {\n      "$comment": "\\"dependencies\\" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to \\"dependentSchemas\\" and \\"dependentRequired\\"",\n      "type": "object",\n      "additionalProperties": {\n        "anyOf": [\n          { "$recursiveRef": "#" },\n          { "$ref": "meta/validation#/$defs/stringArray" }\n        ]\n      }\n    }\n  }\n}\n');
  }
  function Draft201909(name, ordinal, content) {
    Enum.call(this, name, ordinal);
    this.ecv_1 = content;
  }
  function Draft201909_DRAFT201909_SCHEMA_getInstance() {
    Draft201909_initEntries();
    return Draft201909_DRAFT201909_SCHEMA_instance;
  }
  var Draft202012_DRAFT202012_CORE_VOCABULARY_instance;
  var Draft202012_DRAFT202012_APPLICATOR_VOCABULARY_instance;
  var Draft202012_DRAFT202012_VALIDATION_VOCABULARY_instance;
  var Draft202012_DRAFT202012_FORMAT_ANNOTATION_VOCABULARY_instance;
  var Draft202012_DRAFT202012_FORMAT_ASSERTION_VOCABULARY_instance;
  var Draft202012_DRAFT202012_CONTENT_VOCABULARY_instance;
  var Draft202012_DRAFT202012_META_DATA_VOCABULARY_instance;
  var Draft202012_DRAFT202012_UNEVALUATED_VOCABULARY_instance;
  var Draft202012_DRAFT202012_SCHEMA_instance;
  var Draft202012_entriesInitialized;
  function Draft202012_initEntries() {
    if (Draft202012_entriesInitialized)
      return Unit_instance;
    Draft202012_entriesInitialized = true;
    Draft202012_DRAFT202012_CORE_VOCABULARY_instance = new Draft202012('DRAFT202012_CORE_VOCABULARY', 0, '\n{\n    "$schema": "https://json-schema.org/draft/2020-12/schema",\n    "$id": "https://json-schema.org/draft/2020-12/meta/core",\n    "$dynamicAnchor": "meta",\n\n    "title": "Core vocabulary meta-schema",\n    "type": ["object", "boolean"],\n    "properties": {\n        "$id": {\n            "$ref": "#/$defs/uriReferenceString",\n            "$comment": "Non-empty fragments not allowed.",\n            "pattern": "^[^#]*#?$"\n        },\n        "$schema": { "$ref": "#/$defs/uriString" },\n        "$ref": { "$ref": "#/$defs/uriReferenceString" },\n        "$anchor": { "$ref": "#/$defs/anchorString" },\n        "$dynamicRef": { "$ref": "#/$defs/uriReferenceString" },\n        "$dynamicAnchor": { "$ref": "#/$defs/anchorString" },\n        "$vocabulary": {\n            "type": "object",\n            "propertyNames": { "$ref": "#/$defs/uriString" },\n            "additionalProperties": {\n                "type": "boolean"\n            }\n        },\n        "$comment": {\n            "type": "string"\n        },\n        "$defs": {\n            "type": "object",\n            "additionalProperties": { "$dynamicRef": "#meta" }\n        }\n    },\n    "$defs": {\n        "anchorString": {\n            "type": "string",\n            "pattern": "^[A-Za-z_][-A-Za-z0-9._]*$"\n        },\n        "uriString": {\n            "type": "string",\n            "format": "uri"\n        },\n        "uriReferenceString": {\n            "type": "string",\n            "format": "uri-reference"\n        }\n    }\n}\n');
    Draft202012_DRAFT202012_APPLICATOR_VOCABULARY_instance = new Draft202012('DRAFT202012_APPLICATOR_VOCABULARY', 1, '\n{\n    "$schema": "https://json-schema.org/draft/2020-12/schema",\n    "$id": "https://json-schema.org/draft/2020-12/meta/applicator",\n    "$dynamicAnchor": "meta",\n\n    "title": "Applicator vocabulary meta-schema",\n    "type": ["object", "boolean"],\n    "properties": {\n        "prefixItems": { "$ref": "#/$defs/schemaArray" },\n        "items": { "$dynamicRef": "#meta" },\n        "contains": { "$dynamicRef": "#meta" },\n        "additionalProperties": { "$dynamicRef": "#meta" },\n        "properties": {\n            "type": "object",\n            "additionalProperties": { "$dynamicRef": "#meta" },\n            "default": {}\n        },\n        "patternProperties": {\n            "type": "object",\n            "additionalProperties": { "$dynamicRef": "#meta" },\n            "propertyNames": { "format": "regex" },\n            "default": {}\n        },\n        "dependentSchemas": {\n            "type": "object",\n            "additionalProperties": { "$dynamicRef": "#meta" },\n            "default": {}\n        },\n        "propertyNames": { "$dynamicRef": "#meta" },\n        "if": { "$dynamicRef": "#meta" },\n        "then": { "$dynamicRef": "#meta" },\n        "else": { "$dynamicRef": "#meta" },\n        "allOf": { "$ref": "#/$defs/schemaArray" },\n        "anyOf": { "$ref": "#/$defs/schemaArray" },\n        "oneOf": { "$ref": "#/$defs/schemaArray" },\n        "not": { "$dynamicRef": "#meta" }\n    },\n    "$defs": {\n        "schemaArray": {\n            "type": "array",\n            "minItems": 1,\n            "items": { "$dynamicRef": "#meta" }\n        }\n    }\n}\n');
    Draft202012_DRAFT202012_VALIDATION_VOCABULARY_instance = new Draft202012('DRAFT202012_VALIDATION_VOCABULARY', 2, '\n{\n    "$schema": "https://json-schema.org/draft/2020-12/schema",\n    "$id": "https://json-schema.org/draft/2020-12/meta/validation",\n    "$dynamicAnchor": "meta",\n\n    "title": "Validation vocabulary meta-schema",\n    "type": ["object", "boolean"],\n    "properties": {\n        "type": {\n            "anyOf": [\n                { "$ref": "#/$defs/simpleTypes" },\n                {\n                    "type": "array",\n                    "items": { "$ref": "#/$defs/simpleTypes" },\n                    "minItems": 1,\n                    "uniqueItems": true\n                }\n            ]\n        },\n        "const": true,\n        "enum": {\n            "type": "array",\n            "items": true\n        },\n        "multipleOf": {\n            "type": "number",\n            "exclusiveMinimum": 0\n        },\n        "maximum": {\n            "type": "number"\n        },\n        "exclusiveMaximum": {\n            "type": "number"\n        },\n        "minimum": {\n            "type": "number"\n        },\n        "exclusiveMinimum": {\n            "type": "number"\n        },\n        "maxLength": { "$ref": "#/$defs/nonNegativeInteger" },\n        "minLength": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },\n        "pattern": {\n            "type": "string",\n            "format": "regex"\n        },\n        "maxItems": { "$ref": "#/$defs/nonNegativeInteger" },\n        "minItems": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },\n        "uniqueItems": {\n            "type": "boolean",\n            "default": false\n        },\n        "maxContains": { "$ref": "#/$defs/nonNegativeInteger" },\n        "minContains": {\n            "$ref": "#/$defs/nonNegativeInteger",\n            "default": 1\n        },\n        "maxProperties": { "$ref": "#/$defs/nonNegativeInteger" },\n        "minProperties": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },\n        "required": { "$ref": "#/$defs/stringArray" },\n        "dependentRequired": {\n            "type": "object",\n            "additionalProperties": {\n                "$ref": "#/$defs/stringArray"\n            }\n        }\n    },\n    "$defs": {\n        "nonNegativeInteger": {\n            "type": "integer",\n            "minimum": 0\n        },\n        "nonNegativeIntegerDefault0": {\n            "$ref": "#/$defs/nonNegativeInteger",\n            "default": 0\n        },\n        "simpleTypes": {\n            "enum": [\n                "array",\n                "boolean",\n                "integer",\n                "null",\n                "number",\n                "object",\n                "string"\n            ]\n        },\n        "stringArray": {\n            "type": "array",\n            "items": { "type": "string" },\n            "uniqueItems": true,\n            "default": []\n        }\n    }\n}\n');
    Draft202012_DRAFT202012_FORMAT_ANNOTATION_VOCABULARY_instance = new Draft202012('DRAFT202012_FORMAT_ANNOTATION_VOCABULARY', 3, '\n{\n    "$schema": "https://json-schema.org/draft/2020-12/schema",\n    "$id": "https://json-schema.org/draft/2020-12/meta/format-annotation",\n    "$dynamicAnchor": "meta",\n\n    "title": "Format vocabulary meta-schema for annotation results",\n    "type": ["object", "boolean"],\n    "properties": {\n        "format": { "type": "string" }\n    }\n}\n');
    Draft202012_DRAFT202012_FORMAT_ASSERTION_VOCABULARY_instance = new Draft202012('DRAFT202012_FORMAT_ASSERTION_VOCABULARY', 4, '\n{\n    "$schema": "https://json-schema.org/draft/2020-12/schema",\n    "$id": "https://json-schema.org/draft/2020-12/meta/format-assertion",\n    "$dynamicAnchor": "meta",\n\n    "title": "Format vocabulary meta-schema for assertion results",\n    "type": ["object", "boolean"],\n    "properties": {\n        "format": { "type": "string" }\n    }\n}\n');
    Draft202012_DRAFT202012_CONTENT_VOCABULARY_instance = new Draft202012('DRAFT202012_CONTENT_VOCABULARY', 5, '\n{\n    "$schema": "https://json-schema.org/draft/2020-12/schema",\n    "$id": "https://json-schema.org/draft/2020-12/meta/content",\n    "$dynamicAnchor": "meta",\n\n    "title": "Content vocabulary meta-schema",\n\n    "type": ["object", "boolean"],\n    "properties": {\n        "contentEncoding": { "type": "string" },\n        "contentMediaType": { "type": "string" },\n        "contentSchema": { "$dynamicRef": "#meta" }\n    }\n}\n');
    Draft202012_DRAFT202012_META_DATA_VOCABULARY_instance = new Draft202012('DRAFT202012_META_DATA_VOCABULARY', 6, '\n{\n    "$schema": "https://json-schema.org/draft/2020-12/schema",\n    "$id": "https://json-schema.org/draft/2020-12/meta/meta-data",\n    "$dynamicAnchor": "meta",\n\n    "title": "Meta-data vocabulary meta-schema",\n\n    "type": ["object", "boolean"],\n    "properties": {\n        "title": {\n            "type": "string"\n        },\n        "description": {\n            "type": "string"\n        },\n        "default": true,\n        "deprecated": {\n            "type": "boolean",\n            "default": false\n        },\n        "readOnly": {\n            "type": "boolean",\n            "default": false\n        },\n        "writeOnly": {\n            "type": "boolean",\n            "default": false\n        },\n        "examples": {\n            "type": "array",\n            "items": true\n        }\n    }\n}\n');
    Draft202012_DRAFT202012_UNEVALUATED_VOCABULARY_instance = new Draft202012('DRAFT202012_UNEVALUATED_VOCABULARY', 7, '\n{\n    "$schema": "https://json-schema.org/draft/2020-12/schema",\n    "$id": "https://json-schema.org/draft/2020-12/meta/unevaluated",\n    "$dynamicAnchor": "meta",\n\n    "title": "Unevaluated applicator vocabulary meta-schema",\n    "type": ["object", "boolean"],\n    "properties": {\n        "unevaluatedItems": { "$dynamicRef": "#meta" },\n        "unevaluatedProperties": { "$dynamicRef": "#meta" }\n    }\n}\n');
    Draft202012_DRAFT202012_SCHEMA_instance = new Draft202012('DRAFT202012_SCHEMA', 8, '\n{\n    "$schema": "https://json-schema.org/draft/2020-12/schema",\n    "$id": "https://json-schema.org/draft/2020-12/schema",\n    "$vocabulary": {\n        "https://json-schema.org/draft/2020-12/vocab/core": true,\n        "https://json-schema.org/draft/2020-12/vocab/applicator": true,\n        "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,\n        "https://json-schema.org/draft/2020-12/vocab/validation": true,\n        "https://json-schema.org/draft/2020-12/vocab/meta-data": true,\n        "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,\n        "https://json-schema.org/draft/2020-12/vocab/content": true\n    },\n    "$dynamicAnchor": "meta",\n\n    "title": "Core and Validation specifications meta-schema",\n    "allOf": [\n        {"$ref": "meta/core"},\n        {"$ref": "meta/applicator"},\n        {"$ref": "meta/unevaluated"},\n        {"$ref": "meta/validation"},\n        {"$ref": "meta/meta-data"},\n        {"$ref": "meta/format-annotation"},\n        {"$ref": "meta/content"}\n    ],\n    "type": ["object", "boolean"],\n    "$comment": "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",\n    "properties": {\n        "definitions": {\n            "$comment": "\\"definitions\\" has been replaced by \\"$defs\\".",\n            "type": "object",\n            "additionalProperties": { "$dynamicRef": "#meta" },\n            "deprecated": true,\n            "default": {}\n        },\n        "dependencies": {\n            "$comment": "\\"dependencies\\" has been split and replaced by \\"dependentSchemas\\" and \\"dependentRequired\\" in order to serve their differing semantics.",\n            "type": "object",\n            "additionalProperties": {\n                "anyOf": [\n                    { "$dynamicRef": "#meta" },\n                    { "$ref": "meta/validation#/$defs/stringArray" }\n                ]\n            },\n            "deprecated": true,\n            "default": {}\n        },\n        "$recursiveAnchor": {\n            "$comment": "\\"$recursiveAnchor\\" has been replaced by \\"$dynamicAnchor\\".",\n            "$ref": "meta/core#/$defs/anchorString",\n            "deprecated": true\n        },\n        "$recursiveRef": {\n            "$comment": "\\"$recursiveRef\\" has been replaced by \\"$dynamicRef\\".",\n            "$ref": "meta/core#/$defs/uriReferenceString",\n            "deprecated": true\n        }\n    }\n}\n');
  }
  function Draft202012(name, ordinal, content) {
    Enum.call(this, name, ordinal);
    this.tcv_1 = content;
  }
  function Draft202012_DRAFT202012_SCHEMA_getInstance() {
    Draft202012_initEntries();
    return Draft202012_DRAFT202012_SCHEMA_instance;
  }
  function wrap(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonObject) {
      tmp = new JsonObjectWrapper(_JsonObjectWrapper___init__impl__lfb4bx(_this__u8e3s4));
    } else {
      if (_this__u8e3s4 instanceof JsonArray) {
        tmp = new JsonArrayWrapper(_JsonArrayWrapper___init__impl__erpmbj(_this__u8e3s4));
      } else {
        if (_this__u8e3s4 instanceof JsonPrimitive) {
          tmp = new JsonPrimitiveWrapper(_JsonPrimitiveWrapper___init__impl__i5ydwz(_this__u8e3s4));
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  }
  function _JsonObjectWrapper___init__impl__lfb4bx(obj) {
    return obj;
  }
  function _get_obj__e6dym2($this) {
    return $this;
  }
  function _JsonObjectWrapper___get_keys__impl__98k9hk($this) {
    return _get_obj__e6dym2($this).n2();
  }
  function JsonObjectWrapper__get_impl_9r4e2r($this, key) {
    var tmp0_safe_receiver = _get_obj__e6dym2($this).af(key);
    return tmp0_safe_receiver == null ? null : wrap(tmp0_safe_receiver);
  }
  function JsonObjectWrapper__contains_impl_6um8oy($this, key) {
    return _get_obj__e6dym2($this).s2p(key);
  }
  function _JsonObjectWrapper___get_size__impl__gwuj4b($this) {
    return _get_obj__e6dym2($this).s();
  }
  function JsonObjectWrapper__iterator_impl_pdtbwz($this) {
    var tmp = asSequence(_get_obj__e6dym2($this));
    return map(tmp, JsonObjectWrapper$iterator$lambda).p();
  }
  function JsonObjectWrapper__toString_impl_6mbaj($this) {
    return _get_obj__e6dym2($this).toString();
  }
  function JsonObjectWrapper__hashCode_impl_lxs83e($this) {
    return $this.hashCode();
  }
  function JsonObjectWrapper__equals_impl_ja8l42($this, other) {
    if (!(other instanceof JsonObjectWrapper))
      return false;
    var tmp0_other_with_cast = other instanceof JsonObjectWrapper ? other.vd5_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function JsonObjectWrapper$iterator$lambda(it) {
    return to(it.a1(), wrap(it.b1()));
  }
  function JsonObjectWrapper(obj) {
    this.vd5_1 = obj;
  }
  protoOf(JsonObjectWrapper).n2 = function () {
    return _JsonObjectWrapper___get_keys__impl__98k9hk(this.vd5_1);
  };
  protoOf(JsonObjectWrapper).af = function (key) {
    return JsonObjectWrapper__get_impl_9r4e2r(this.vd5_1, key);
  };
  protoOf(JsonObjectWrapper).d2r = function (key) {
    return JsonObjectWrapper__contains_impl_6um8oy(this.vd5_1, key);
  };
  protoOf(JsonObjectWrapper).s = function () {
    return _JsonObjectWrapper___get_size__impl__gwuj4b(this.vd5_1);
  };
  protoOf(JsonObjectWrapper).p = function () {
    return JsonObjectWrapper__iterator_impl_pdtbwz(this.vd5_1);
  };
  protoOf(JsonObjectWrapper).toString = function () {
    return JsonObjectWrapper__toString_impl_6mbaj(this.vd5_1);
  };
  protoOf(JsonObjectWrapper).hashCode = function () {
    return JsonObjectWrapper__hashCode_impl_lxs83e(this.vd5_1);
  };
  protoOf(JsonObjectWrapper).equals = function (other) {
    return JsonObjectWrapper__equals_impl_ja8l42(this.vd5_1, other);
  };
  function _JsonArrayWrapper___init__impl__erpmbj(array) {
    return array;
  }
  function _get_array__jslnqg($this) {
    return $this;
  }
  function JsonArrayWrapper__iterator_impl_bk8mqr($this) {
    var tmp = asSequence_0(_get_array__jslnqg($this));
    return map(tmp, JsonArrayWrapper$iterator$lambda).p();
  }
  function JsonArrayWrapper__get_impl_p8jv7d($this, index) {
    return wrap(_get_array__jslnqg($this).u(index));
  }
  function _JsonArrayWrapper___get_size__impl__q8uvyf($this) {
    return _get_array__jslnqg($this).s();
  }
  function JsonArrayWrapper__toString_impl_xwfs0v($this) {
    return _get_array__jslnqg($this).toString();
  }
  function JsonArrayWrapper__hashCode_impl_c59v80($this) {
    return $this.hashCode();
  }
  function JsonArrayWrapper__equals_impl_xaf8a4($this, other) {
    if (!(other instanceof JsonArrayWrapper))
      return false;
    var tmp0_other_with_cast = other instanceof JsonArrayWrapper ? other.wd5_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function JsonArrayWrapper$iterator$lambda(it) {
    return wrap(it);
  }
  function JsonArrayWrapper(array) {
    this.wd5_1 = array;
  }
  protoOf(JsonArrayWrapper).p = function () {
    return JsonArrayWrapper__iterator_impl_bk8mqr(this.wd5_1);
  };
  protoOf(JsonArrayWrapper).u = function (index) {
    return JsonArrayWrapper__get_impl_p8jv7d(this.wd5_1, index);
  };
  protoOf(JsonArrayWrapper).s = function () {
    return _JsonArrayWrapper___get_size__impl__q8uvyf(this.wd5_1);
  };
  protoOf(JsonArrayWrapper).toString = function () {
    return JsonArrayWrapper__toString_impl_xwfs0v(this.wd5_1);
  };
  protoOf(JsonArrayWrapper).hashCode = function () {
    return JsonArrayWrapper__hashCode_impl_c59v80(this.wd5_1);
  };
  protoOf(JsonArrayWrapper).equals = function (other) {
    return JsonArrayWrapper__equals_impl_xaf8a4(this.wd5_1, other);
  };
  function _JsonPrimitiveWrapper___init__impl__i5ydwz(primitive) {
    return primitive;
  }
  function _get_primitive__w4n616($this) {
    return $this;
  }
  function _JsonPrimitiveWrapper___get_isNull__impl__nalpln($this) {
    var tmp = _get_primitive__w4n616($this);
    return tmp instanceof JsonNull;
  }
  function _JsonPrimitiveWrapper___get_isString__impl__uzrrrl($this) {
    return _get_primitive__w4n616($this).p4u();
  }
  function _JsonPrimitiveWrapper___get_longOrNull__impl__3qwo9y($this) {
    return get_longOrNull(_get_primitive__w4n616($this));
  }
  function _JsonPrimitiveWrapper___get_doubleOrNull__impl__of5x1r($this) {
    return get_doubleOrNull(_get_primitive__w4n616($this));
  }
  function _JsonPrimitiveWrapper___get_isBoolean__impl__3k25as($this) {
    // Inline function 'kotlin.run' call
    var $this$run = _get_primitive__w4n616($this);
    return !$this$run.p4u() && !(get_booleanOrNull($this$run) == null);
  }
  function _JsonPrimitiveWrapper___get_isNumber__impl__xgyryx($this) {
    // Inline function 'kotlin.run' call
    var $this$run = _get_primitive__w4n616($this);
    var tmp;
    if (!$this$run.p4u()) {
      var tmp0_elvis_lhs = get_longOrNull($this$run);
      tmp = !((tmp0_elvis_lhs == null ? get_doubleOrNull($this$run) : tmp0_elvis_lhs) == null);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function _JsonPrimitiveWrapper___get_content__impl__21nowp($this) {
    return _get_primitive__w4n616($this).q4u();
  }
  function JsonPrimitiveWrapper__toString_impl_xqq34j($this) {
    return _get_primitive__w4n616($this).toString();
  }
  function JsonPrimitiveWrapper__hashCode_impl_fj821q($this) {
    return hashCode($this);
  }
  function JsonPrimitiveWrapper__equals_impl_8oh2yi($this, other) {
    if (!(other instanceof JsonPrimitiveWrapper))
      return false;
    var tmp0_other_with_cast = other instanceof JsonPrimitiveWrapper ? other.xd5_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function JsonPrimitiveWrapper(primitive) {
    this.xd5_1 = primitive;
  }
  protoOf(JsonPrimitiveWrapper).md0 = function () {
    return _JsonPrimitiveWrapper___get_isNull__impl__nalpln(this.xd5_1);
  };
  protoOf(JsonPrimitiveWrapper).p4u = function () {
    return _JsonPrimitiveWrapper___get_isString__impl__uzrrrl(this.xd5_1);
  };
  protoOf(JsonPrimitiveWrapper).td5 = function () {
    return _JsonPrimitiveWrapper___get_longOrNull__impl__3qwo9y(this.xd5_1);
  };
  protoOf(JsonPrimitiveWrapper).ud5 = function () {
    return _JsonPrimitiveWrapper___get_doubleOrNull__impl__of5x1r(this.xd5_1);
  };
  protoOf(JsonPrimitiveWrapper).nd0 = function () {
    return _JsonPrimitiveWrapper___get_isBoolean__impl__3k25as(this.xd5_1);
  };
  protoOf(JsonPrimitiveWrapper).od0 = function () {
    return _JsonPrimitiveWrapper___get_isNumber__impl__xgyryx(this.xd5_1);
  };
  protoOf(JsonPrimitiveWrapper).q4u = function () {
    return _JsonPrimitiveWrapper___get_content__impl__21nowp(this.xd5_1);
  };
  protoOf(JsonPrimitiveWrapper).toString = function () {
    return JsonPrimitiveWrapper__toString_impl_xqq34j(this.xd5_1);
  };
  protoOf(JsonPrimitiveWrapper).hashCode = function () {
    return JsonPrimitiveWrapper__hashCode_impl_fj821q(this.xd5_1);
  };
  protoOf(JsonPrimitiveWrapper).equals = function (other) {
    return JsonPrimitiveWrapper__equals_impl_8oh2yi(this.xd5_1, other);
  };
  function _StringWrapper___init__impl__4k377b(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _StringWrapper___get_isNull__impl__8vi6kv($this) {
    return false;
  }
  function _StringWrapper___get_isString__impl__edtlif($this) {
    return true;
  }
  function _StringWrapper___get_longOrNull__impl__ns020s($this) {
    return toLongOrNull(_get_value__a43j40($this));
  }
  function _StringWrapper___get_doubleOrNull__impl__olev21($this) {
    return toDoubleOrNull(_get_value__a43j40($this));
  }
  function _StringWrapper___get_isBoolean__impl__e4kurm($this) {
    return false;
  }
  function _StringWrapper___get_isNumber__impl__gv0lpr($this) {
    return false;
  }
  function _StringWrapper___get_content__impl__s4919($this) {
    return _get_value__a43j40($this);
  }
  function StringWrapper__toString_impl_c4c1b3($this) {
    return _get_value__a43j40($this);
  }
  function StringWrapper__hashCode_impl_9mtvhs($this) {
    return getStringHashCode($this);
  }
  function StringWrapper__equals_impl_1zmwd0($this, other) {
    if (!(other instanceof StringWrapper))
      return false;
    if (!($this === (other instanceof StringWrapper ? other.yd5_1 : THROW_CCE())))
      return false;
    return true;
  }
  function StringWrapper(value) {
    this.yd5_1 = value;
  }
  protoOf(StringWrapper).md0 = function () {
    return _StringWrapper___get_isNull__impl__8vi6kv(this.yd5_1);
  };
  protoOf(StringWrapper).p4u = function () {
    return _StringWrapper___get_isString__impl__edtlif(this.yd5_1);
  };
  protoOf(StringWrapper).td5 = function () {
    return _StringWrapper___get_longOrNull__impl__ns020s(this.yd5_1);
  };
  protoOf(StringWrapper).ud5 = function () {
    return _StringWrapper___get_doubleOrNull__impl__olev21(this.yd5_1);
  };
  protoOf(StringWrapper).nd0 = function () {
    return _StringWrapper___get_isBoolean__impl__e4kurm(this.yd5_1);
  };
  protoOf(StringWrapper).od0 = function () {
    return _StringWrapper___get_isNumber__impl__gv0lpr(this.yd5_1);
  };
  protoOf(StringWrapper).q4u = function () {
    return _StringWrapper___get_content__impl__s4919(this.yd5_1);
  };
  protoOf(StringWrapper).toString = function () {
    return StringWrapper__toString_impl_c4c1b3(this.yd5_1);
  };
  protoOf(StringWrapper).hashCode = function () {
    return StringWrapper__hashCode_impl_9mtvhs(this.yd5_1);
  };
  protoOf(StringWrapper).equals = function (other) {
    return StringWrapper__equals_impl_1zmwd0(this.yd5_1, other);
  };
  function PrimitiveElement() {
  }
  function ObjectElement() {
  }
  function ArrayElement() {
  }
  function get_contentOrNull(_this__u8e3s4) {
    return _this__u8e3s4.md0() ? null : _this__u8e3s4.q4u();
  }
  function isEmpty(_this__u8e3s4) {
    return _this__u8e3s4.s() === 0;
  }
  function getValue_0(_this__u8e3s4, key) {
    var tmp0_elvis_lhs = _this__u8e3s4.af(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "property '" + key + "' not found";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_lastIndex_0(_this__u8e3s4) {
    return _this__u8e3s4.s() - 1 | 0;
  }
  function isNormalized(label) {
    return normalize(label, Form_NFC_getInstance()) === label;
  }
  //region block: post-declaration
  protoOf($serializer).n2c = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  Companion_instance_4 = new Companion_4();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  Companion_instance_9 = new Companion_9();
  AnnotationKeyFactory_instance = new AnnotationKeyFactory();
  TrueSchemaAssertion_instance = new TrueSchemaAssertion();
  IsolatedLoader_instance = new IsolatedLoader();
  Draft201909KeyWordResolver_instance = new Draft201909KeyWordResolver();
  Draft201909ReferenceFactory_instance = new Draft201909ReferenceFactory();
  Draft202012KeyWordResolver_instance = new Draft202012KeyWordResolver();
  Draft202012ReferenceFactory_instance = new Draft202012ReferenceFactory();
  Draft4KeyWordResolver_instance = new Draft4KeyWordResolver();
  Draft4ReferenceFactory_instance = new Draft4ReferenceFactory();
  Draft6KeyWordResolver_instance = new Draft6KeyWordResolver();
  Draft6ReferenceFactory_instance = new Draft6ReferenceFactory();
  Draft7KeyWordResolver_instance = new Draft7KeyWordResolver();
  Draft7ReferenceFactory_instance = new Draft7ReferenceFactory();
  Draft4MaximumAssertionFactory_instance = new Draft4MaximumAssertionFactory();
  Draft4MinimumAssertionFactory_instance = new Draft4MinimumAssertionFactory();
  Companion_instance_12 = new Companion_12();
  IriSpec_instance = new IriSpec();
  Validation_instance = new Validation_0();
  Punycode_instance = new Punycode();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_instance_6;
  _.$_$.b = Companion_instance_7;
  _.$_$.c = ErrorCollector;
  //endregion
  return _;
}));

//# sourceMappingURL=json-schema-validator-root-json-schema-validator.js.map
