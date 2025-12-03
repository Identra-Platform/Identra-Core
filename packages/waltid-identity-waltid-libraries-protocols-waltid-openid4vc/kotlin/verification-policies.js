(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js', './kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js', './Kotlin-DateTime-library-kotlinx-datetime.js', './waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js', './crypto.js', './w3c-credentials.js', './kotlin-logging.js', './ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js', './ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js', './ktor-ktor-client-ktor-client-core.js', './ktor-ktor-http.js', './ktor-ktor-utils.js', './json-schema-validator-root-json-schema-validator.js', './dids.js', './definitions-parser.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js'), require('./crypto.js'), require('./w3c-credentials.js'), require('./kotlin-logging.js'), require('./ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js'), require('./ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-utils.js'), require('./json-schema-validator-root-json-schema-validator.js'), require('./dids.js'), require('./definitions-parser.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' was not found. Please, check whether 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt' was not found. Please, check whether 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt' is loaded prior to 'verification-policies'.");
    }
    if (typeof crypto === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'crypto' was not found. Please, check whether 'crypto' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['w3c-credentials'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'w3c-credentials' was not found. Please, check whether 'w3c-credentials' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['json-schema-validator-root-json-schema-validator'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'json-schema-validator-root-json-schema-validator' was not found. Please, check whether 'json-schema-validator-root-json-schema-validator' is loaded prior to 'verification-policies'.");
    }
    if (typeof dids === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'dids' was not found. Please, check whether 'dids' is loaded prior to 'verification-policies'.");
    }
    if (typeof globalThis['definitions-parser'] === 'undefined') {
      throw new Error("Error loading module 'verification-policies'. Its dependency 'definitions-parser' was not found. Please, check whether 'definitions-parser' is loaded prior to 'verification-policies'.");
    }
    globalThis['verification-policies'] = factory(typeof globalThis['verification-policies'] === 'undefined' ? {} : globalThis['verification-policies'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core'], globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'], globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'], crypto, globalThis['w3c-credentials'], globalThis['kotlin-logging'], globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'], globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'], globalThis['ktor-ktor-client-ktor-client-core'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-utils'], globalThis['json-schema-validator-root-json-schema-validator'], dids, globalThis['definitions-parser']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_id_walt_sdjwt_waltid_sdjwt, kotlin_id_walt_crypto_waltid_crypto, kotlin_id_walt_credentials_waltid_w3c_credentials, kotlin_io_github_oshai_kotlin_logging, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_io_github_optimumcode_json_schema_validator, kotlin_id_walt_did_waltid_did, kotlin_id_walt_dif_definitions_parser_waltid_dif_definitions_parser) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var getKClass = kotlin_kotlin.$_$.g;
  var JsonClassDiscriminator = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.r;
  var lazy = kotlin_kotlin.$_$.lk;
  var protoOf = kotlin_kotlin.$_$.ce;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zc;
  var VOID = kotlin_kotlin.$_$.j;
  var CoroutineImpl = kotlin_kotlin.$_$.cc;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.mb;
  var Result = kotlin_kotlin.$_$.lj;
  var initMetadataForLambda = kotlin_kotlin.$_$.dd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var isInterface = kotlin_kotlin.$_$.nd;
  var $runInAsync$ = kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var defineProp = kotlin_kotlin.$_$.rc;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c1;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d1;
  var charSequenceLength = kotlin_kotlin.$_$.oc;
  var ensureNotNull = kotlin_kotlin.$_$.fk;
  var Pair = kotlin_kotlin.$_$.kj;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var toLongOrNull = kotlin_kotlin.$_$.zh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var Companion_instance = kotlin_kotlin.$_$.g6;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.r;
  var to = kotlin_kotlin.$_$.uk;
  var mapOf = kotlin_kotlin.$_$.u9;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v3;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.v2;
  var RuntimeException = kotlin_kotlin.$_$.mj;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.w2;
  var captureStack = kotlin_kotlin.$_$.kc;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var objectCreate = kotlin_kotlin.$_$.be;
  var toString = kotlin_kotlin.$_$.ge;
  var hashCode = kotlin_kotlin.$_$.xc;
  var equals = kotlin_kotlin.$_$.sc;
  var InstantIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var DurationSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var Duration = kotlin_kotlin.$_$.oi;
  var Long = kotlin_kotlin.$_$.fj;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Duration__toString_impl_8d916b = kotlin_kotlin.$_$.j3;
  var Duration__hashCode_impl_u4exz6 = kotlin_kotlin.$_$.c3;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var THROW_IAE = kotlin_kotlin.$_$.oj;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var Enum = kotlin_kotlin.$_$.aj;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Exception = kotlin_kotlin.$_$.cj;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var mapCapacity = kotlin_kotlin.$_$.t9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var Companion_getInstance_0 = kotlin_id_walt_sdjwt_waltid_sdjwt.$_$.a;
  var JsonPrimitive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var createFailure = kotlin_kotlin.$_$.ek;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.w3;
  var JsonPrimitive_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.s;
  var lastOrNull = kotlin_kotlin.$_$.k9;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.b4;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var KtMap = kotlin_kotlin.$_$.w6;
  var JwsUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.g;
  var substringBefore = kotlin_kotlin.$_$.nh;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ad;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var VCFormat_sd_jwt_vc_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.h;
  var NotImplementedError = kotlin_kotlin.$_$.hj;
  var VCFormat_mso_mdoc_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.g;
  var emptyList = kotlin_kotlin.$_$.k8;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var Monotonic_instance = kotlin_kotlin.$_$.c6;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.l3;
  var Companion_instance_0 = kotlin_id_walt_sdjwt_waltid_sdjwt.$_$.b;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.l8;
  var joinToString = kotlin_kotlin.$_$.e9;
  var get_contentOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.y;
  var checkIndexOverflow = kotlin_kotlin.$_$.n7;
  var JsonElementSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var toString_0 = kotlin_kotlin.$_$.sk;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.z3;
  var Result__toString_impl_yu5r8k = kotlin_kotlin.$_$.a4;
  var Result__hashCode_impl_d2zufp = kotlin_kotlin.$_$.x3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var JsonUtils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.f;
  var throwOnFailure = kotlin_kotlin.$_$.qk;
  var stackTraceToString = kotlin_kotlin.$_$.pk;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var arrayOf = kotlin_kotlin.$_$.bk;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.y3;
  var Collection = kotlin_kotlin.$_$.o6;
  var addAll = kotlin_kotlin.$_$.f7;
  var checkCountOverflow = kotlin_kotlin.$_$.m7;
  var Companion_getInstance_1 = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.p;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var VCFormat_jwt_vc_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.b;
  var VCFormat_jwt_vc_json_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.a;
  var VCFormat_ldp_vc_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.e;
  var setOf = kotlin_kotlin.$_$.ka;
  var listOf = kotlin_kotlin.$_$.r9;
  var get_ContentNegotiation = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.a1;
  var replace = kotlin_kotlin.$_$.bh;
  var split = kotlin_kotlin.$_$.fh;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.o1;
  var isCharSequence = kotlin_kotlin.$_$.jd;
  var trim = kotlin_kotlin.$_$.ni;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var url = kotlin_io_ktor_ktor_client_core.$_$.u;
  var Companion_getInstance_2 = kotlin_io_ktor_ktor_http.$_$.h;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.x;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Text_getInstance = kotlin_io_ktor_ktor_http.$_$.e;
  var contentType = kotlin_io_ktor_ktor_http.$_$.j1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a6;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var isSuccess = kotlin_io_ktor_ktor_http.$_$.o1;
  var mapOf_0 = kotlin_kotlin.$_$.v9;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var get_booleanOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.x;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var V2_NotAfter_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.n;
  var V1_NotAfter_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.l;
  var listOf_0 = kotlin_kotlin.$_$.s9;
  var JwtClaims_NotAfter_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.j;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.d3;
  var JsonPrimitive_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.gc;
  var ErrorCollector = kotlin_io_github_optimumcode_json_schema_validator.$_$.c;
  var Companion_instance_1 = kotlin_io_github_optimumcode_json_schema_validator.$_$.a;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var IllegalArgumentException = kotlin_kotlin.$_$.dj;
  var JwsSignatureScheme = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.q;
  var V2_NotBefore_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.o;
  var V1_NotBefore_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.m;
  var JwtClaims_NotBefore_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.k;
  var JwtClaims_IssuedAt_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.i;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.b6;
  var DurationUnit_MINUTES_getInstance = kotlin_kotlin.$_$.n;
  var toDuration = kotlin_kotlin.$_$.qi;
  var UuidUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.j;
  var Companion_instance_2 = kotlin_id_walt_crypto_waltid_crypto.$_$.b;
  var DidService_getInstance = kotlin_id_walt_did_waltid_did.$_$.a;
  var DidUtils_getInstance = kotlin_id_walt_did_waltid_did.$_$.b;
  var JWKKey = kotlin_id_walt_crypto_waltid_crypto.$_$.l;
  var setOf_0 = kotlin_kotlin.$_$.ja;
  var firstOrNull = kotlin_kotlin.$_$.r8;
  var VerificationException = kotlin_id_walt_crypto_waltid_crypto.$_$.k;
  var coerceAtLeast = kotlin_kotlin.$_$.ne;
  var toMutableMap = kotlin_kotlin.$_$.eb;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var header = kotlin_io_ktor_ktor_client_core.$_$.s;
  var VCFormat_jwt_vp_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.d;
  var VCFormat_jwt_vp_json_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.c;
  var first = kotlin_kotlin.$_$.t8;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a1;
  var flatten = kotlin_kotlin.$_$.v8;
  var distinct = kotlin_kotlin.$_$.g8;
  var Directive_required_getInstance = kotlin_id_walt_dif_definitions_parser_waltid_dif_definitions_parser.$_$.a;
  var VCFormat_ldp_vp_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.f;
  var PresentationDefinition = kotlin_id_walt_dif_definitions_parser_waltid_dif_definitions_parser.$_$.c;
  var PresentationSubmission = kotlin_id_walt_dif_definitions_parser_waltid_dif_definitions_parser.$_$.d;
  var firstOrNull_0 = kotlin_kotlin.$_$.q8;
  var VCFormat = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.r;
  var asFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var flowOf = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.f1;
  var PresentationDefinitionParser_instance = kotlin_id_walt_dif_definitions_parser_waltid_dif_definitions_parser.$_$.b;
  var toList = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var equals_0 = kotlin_kotlin.$_$.ag;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var listOfNotNull = kotlin_kotlin.$_$.p9;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
  initMetadataForLambda(CredentialDataValidatorPolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(VerificationPolicy, 'VerificationPolicy', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_18});
  initMetadataForClass(CredentialDataValidatorPolicy, 'CredentialDataValidatorPolicy', VOID, VerificationPolicy, VOID, [3], VOID, {0: Companion_getInstance_4});
  initMetadataForCompanion(Companion_0, VOID, [SerializerFactory]);
  initMetadataForLambda(CredentialWrapperValidatorPolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(CredentialWrapperValidatorPolicy, 'CredentialWrapperValidatorPolicy', VOID, VerificationPolicy, VOID, [3], VOID, {0: Companion_getInstance_5});
  initMetadataForObject(DatePolicyUtils, 'DatePolicyUtils');
  initMetadataForCompanion(Companion_1, VOID, [SerializerFactory]);
  initMetadataForClass(SerializableRuntimeException, 'SerializableRuntimeException', VOID, RuntimeException, VOID, VOID, VOID, {0: Companion_getInstance_6});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(JsonSchemaVerificationException, 'JsonSchemaVerificationException', VOID, SerializableRuntimeException, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NotBeforePolicyException, 'NotBeforePolicyException', VOID, SerializableRuntimeException, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ExpirationDatePolicyException, 'ExpirationDatePolicyException', VOID, SerializableRuntimeException, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(WebhookPolicyException, 'WebhookPolicyException', VOID, SerializableRuntimeException, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PresentationDefinitionException, 'PresentationDefinitionException', VOID, SerializableRuntimeException, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForClass(RelationalConstraintType, 'RelationalConstraintType', VOID, Enum);
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PresentationDefinitionRelationalConstraintException, 'PresentationDefinitionRelationalConstraintException', VOID, SerializableRuntimeException, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MinimumCredentialsException, 'MinimumCredentialsException', VOID, SerializableRuntimeException, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(MaximumCredentialsException, 'MaximumCredentialsException', VOID, SerializableRuntimeException, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(HolderBindingException, 'HolderBindingException', VOID, SerializableRuntimeException, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NotAllowedIssuerException, 'NotAllowedIssuerException', VOID, SerializableRuntimeException, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForClass(DynamicPolicyException, 'DynamicPolicyException', VOID, Exception);
  initMetadataForCompanion(Companion_12, VOID, [SerializerFactory]);
  initMetadataForLambda(JwtVerificationPolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(JwtVerificationPolicy, 'JwtVerificationPolicy', VOID, VerificationPolicy, VOID, [3], VOID, {0: Companion_getInstance_17});
  initMetadataForObject(PolicyManager, 'PolicyManager');
  initMetadataForCompanion(Companion_13, VOID, [SerializerFactory]);
  initMetadataForLambda(Verifier$runPolicyRequests$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Verifier$verifyCredential$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Verifier$verifyCredential$slambda_1, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Verifier$runPolicyRequests$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Verifier$verifyW3CPresentation$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Verifier$verifySDJwtVCPresentation$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Verifier$runPolicyRequestsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Verifier$verifySDJwtVCPresentationAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Verifier$verifyPresentationAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Verifier$verifyW3CPresentationAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Verifier$verifyJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Verifier$runPolicyRequestAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Verifier$verifyCredentialAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1, CoroutineImpl, VOID, [2]);
  initMetadataForLambda(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($runPolicyRequestCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($verifyCredentialCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($verifyPresentationCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($verifyW3CPresentationCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($verifySDJwtVCPresentationCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($verifyJwsCOROUTINE$5, CoroutineImpl);
  initMetadataForObject(Verifier, 'Verifier', VOID, VOID, VOID, [2, 3, 5, 6, 1, 7]);
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PolicyRequest, 'PolicyRequest', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(PolicyResult, 'PolicyResult', VOID, VOID, VOID, VOID, VOID, {0: PolicyResultSerializer_getInstance});
  initMetadataForObject(PolicyResultSerializer, 'PolicyResultSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_16);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PolicyResultSurrogate, 'PolicyResultSurrogate', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForCompanion(Companion_17);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PresentationResultEntry, 'PresentationResultEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForCompanion(Companion_18);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PresentationVerificationResponse, 'PresentationVerificationResponse', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
  initMetadataForCompanion(Companion_19);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(AllowedIssuerPolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(AllowedIssuerPolicy, 'AllowedIssuerPolicy', AllowedIssuerPolicy, CredentialWrapperValidatorPolicy, VOID, [3], VOID, {0: $serializer_getInstance_13});
  initMetadataForCompanion(Companion_20);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(DynamicPolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getRegoCodeCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($uploadPolicyCOROUTINE$7, CoroutineImpl);
  initMetadataForCoroutine($deletePolicyCOROUTINE$8, CoroutineImpl);
  initMetadataForCoroutine($verifyPolicyCOROUTINE$9, CoroutineImpl);
  initMetadataForCoroutine($verifyCOROUTINE$10, CoroutineImpl);
  initMetadataForClass(DynamicPolicy, 'DynamicPolicy', DynamicPolicy, CredentialDataValidatorPolicy, VOID, [1, 3, 2], VOID, {0: $serializer_getInstance_14});
  initMetadataForCompanion(Companion_21);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DynamicPolicyConfig, 'DynamicPolicyConfig', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
  initMetadataForCompanion(Companion_22);
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(ExpirationDatePolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(ExpirationDatePolicy, 'ExpirationDatePolicy', ExpirationDatePolicy, CredentialWrapperValidatorPolicy, VOID, [3], VOID, {0: $serializer_getInstance_16});
  initMetadataForCompanion(Companion_23);
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SerializableValidationError, 'SerializableValidationError', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  initMetadataForCompanion(Companion_24);
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(sam$io_github_optimumcode_json_schema_ErrorCollector$0, 'sam$io_github_optimumcode_json_schema_ErrorCollector$0', VOID, VOID, [ErrorCollector, FunctionAdapter]);
  initMetadataForLambda(JsonSchemaPolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(JsonSchemaPolicy, 'JsonSchemaPolicy', JsonSchemaPolicy, CredentialDataValidatorPolicy, VOID, [3], VOID, {0: $serializer_getInstance_18});
  initMetadataForCompanion(Companion_25);
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(JwtSignaturePolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($verifyCOROUTINE$11, CoroutineImpl);
  initMetadataForClass(JwtSignaturePolicy, 'JwtSignaturePolicy', JwtSignaturePolicy, JwtVerificationPolicy, VOID, [3], VOID, {0: $serializer_getInstance_19});
  initMetadataForCompanion(Companion_26);
  initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(NotBeforeDatePolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(NotBeforeDatePolicy, 'NotBeforeDatePolicy', NotBeforeDatePolicy, CredentialWrapperValidatorPolicy, VOID, [3], VOID, {0: $serializer_getInstance_20});
  initMetadataForCompanion(Companion_27, VOID, [SerializerFactory]);
  initMetadataForClass(RevocationPolicyMp, 'RevocationPolicyMp', VOID, CredentialWrapperValidatorPolicy, VOID, [3], VOID, {0: Companion_getInstance_32});
  initMetadataForLambda(SdJwtVCSignaturePolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveIssuerKeysFromSdJwtCOROUTINE$12, CoroutineImpl);
  initMetadataForCoroutine($verifyCOROUTINE$13, CoroutineImpl);
  initMetadataForClass(SdJwtVCSignaturePolicy, 'SdJwtVCSignaturePolicy', SdJwtVCSignaturePolicy, JwtVerificationPolicy, VOID, [1, 3]);
  initMetadataForCompanion(Companion_28, VOID, [SerializerFactory]);
  initMetadataForClass(StatusPolicyMp, 'StatusPolicyMp', VOID, CredentialWrapperValidatorPolicy, VOID, [3], VOID, {0: Companion_getInstance_33});
  initMetadataForCompanion(Companion_29);
  initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(WebhookPolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($verifyCOROUTINE$14, CoroutineImpl);
  initMetadataForClass(WebhookPolicy, 'WebhookPolicy', WebhookPolicy, CredentialWrapperValidatorPolicy, VOID, [3], VOID, {0: $serializer_getInstance_21});
  initMetadataForCompanion(Companion_30);
  initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(HolderBindingPolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(HolderBindingPolicy, 'HolderBindingPolicy', HolderBindingPolicy, CredentialWrapperValidatorPolicy, VOID, [3], VOID, {0: $serializer_getInstance_22});
  initMetadataForCompanion(Companion_31);
  initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(MaximumCredentialsPolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(MaximumCredentialsPolicy, 'MaximumCredentialsPolicy', MaximumCredentialsPolicy, CredentialWrapperValidatorPolicy, VOID, [3], VOID, {0: $serializer_getInstance_23});
  initMetadataForCompanion(Companion_32);
  initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(MinimumCredentialsPolicy$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(MinimumCredentialsPolicy, 'MinimumCredentialsPolicy', MinimumCredentialsPolicy, CredentialWrapperValidatorPolicy, VOID, [3], VOID, {0: $serializer_getInstance_24});
  initMetadataForCompanion(Companion_33);
  initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCoroutine($verifyCOROUTINE$15, CoroutineImpl);
  initMetadataForClass(PresentationDefinitionPolicy, 'PresentationDefinitionPolicy', PresentationDefinitionPolicy, CredentialWrapperValidatorPolicy, VOID, [3], VOID, {0: $serializer_getInstance_25});
  initMetadataForCompanion(Companion_34);
  initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RevocationPolicy, 'RevocationPolicy', RevocationPolicy, RevocationPolicyMp, VOID, [3], VOID, {0: $serializer_getInstance_26});
  initMetadataForObject(JWTCryptoProviderManager, 'JWTCryptoProviderManager');
  initMetadataForCompanion(Companion_35);
  initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StatusPolicy, 'StatusPolicy', StatusPolicy, StatusPolicyMp, VOID, [3], VOID, {0: $serializer_getInstance_27});
  initMetadataForObject(PresentationVerificationUtils, 'PresentationVerificationUtils');
  //endregion
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.ye9_1.c1();
  }
  function CredentialDataValidatorPolicy$Companion$_anonymous__wpg9fw() {
    var tmp = getKClass(CredentialDataValidatorPolicy);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [new JsonClassDiscriminator('type')];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ye9_1 = lazy(tmp_0, CredentialDataValidatorPolicy$Companion$_anonymous__wpg9fw);
  }
  protoOf(Companion).o4u = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).z2c = function (typeParamsSerializers) {
    return this.o4u();
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion();
    return Companion_instance_3;
  }
  function CredentialDataValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this) {
    VerificationPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    return $this;
  }
  function CredentialDataValidatorPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.hea_1 = this$0;
    this.iea_1 = $data;
    this.jea_1 = $args;
    this.kea_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialDataValidatorPolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(CredentialDataValidatorPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(CredentialDataValidatorPolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.hea_1.mea(this.iea_1, this.jea_1, this.kea_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(CredentialDataValidatorPolicy$verifyAsync$slambda).ja = function (completion) {
    return new CredentialDataValidatorPolicy$verifyAsync$slambda(this.hea_1, this.iea_1, this.jea_1, this.kea_1, completion);
  };
  function CredentialDataValidatorPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new CredentialDataValidatorPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function CredentialDataValidatorPolicy() {
    Companion_getInstance_4();
    VerificationPolicy.call(this);
  }
  protoOf(CredentialDataValidatorPolicy).verify$default = function (data, args, context, $completion, $super) {
    args = args === VOID ? null : args;
    return $super === VOID ? this.mea(data, args, context, $completion) : $super.mea.call(this, data, args, context, $completion);
  };
  protoOf(CredentialDataValidatorPolicy).nea = function (data, args, context) {
    var tmp = CredentialDataValidatorPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(CredentialDataValidatorPolicy).verifyAsync$default = function (data, args, context, $super) {
    args = args === VOID ? null : args;
    return $super === VOID ? this.nea(data, args, context) : $super.nea.call(this, data, args, context);
  };
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.pea_1.c1();
  }
  function CredentialWrapperValidatorPolicy$Companion$_anonymous__91y1fd() {
    var tmp = getKClass(CredentialWrapperValidatorPolicy);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [new JsonClassDiscriminator('type')];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion_0() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.pea_1 = lazy(tmp_0, CredentialWrapperValidatorPolicy$Companion$_anonymous__91y1fd);
  }
  protoOf(Companion_0).o4u = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_0).z2c = function (typeParamsSerializers) {
    return this.o4u();
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_0();
    return Companion_instance_4;
  }
  function CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this) {
    VerificationPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    return $this;
  }
  function CredentialWrapperValidatorPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.yea_1 = this$0;
    this.zea_1 = $data;
    this.aeb_1 = $args;
    this.beb_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialWrapperValidatorPolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(CredentialWrapperValidatorPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(CredentialWrapperValidatorPolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.yea_1.mea(this.zea_1, this.aeb_1, this.beb_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(CredentialWrapperValidatorPolicy$verifyAsync$slambda).ja = function (completion) {
    return new CredentialWrapperValidatorPolicy$verifyAsync$slambda(this.yea_1, this.zea_1, this.aeb_1, this.beb_1, completion);
  };
  function CredentialWrapperValidatorPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new CredentialWrapperValidatorPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function CredentialWrapperValidatorPolicy() {
    Companion_getInstance_5();
    VerificationPolicy.call(this);
  }
  protoOf(CredentialWrapperValidatorPolicy).verify$default = function (data, args, context, $completion, $super) {
    args = args === VOID ? null : args;
    return $super === VOID ? this.mea(data, args, context, $completion) : $super.mea.call(this, data, args, context, $completion);
  };
  protoOf(CredentialWrapperValidatorPolicy).nea = function (data, args, context) {
    var tmp = CredentialWrapperValidatorPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(CredentialWrapperValidatorPolicy).verifyAsync$default = function (data, args, context, $super) {
    args = args === VOID ? null : args;
    return $super === VOID ? this.nea(data, args, context) : $super.nea.call(this, data, args, context);
  };
  function check($this, data, claims, converter) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = claims.q();
      while (_iterator__ex2g4s.r()) {
        var element = _iterator__ex2g4s.s();
        var tmp1_safe_receiver = data == null ? null : get_jsonObject(data);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bf(element.jd6());
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
        // Inline function 'kotlin.text.isNullOrEmpty' call
        var this_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.s4u();
        if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
          tmp$ret$2 = element;
          break $l$block;
        }
      }
      tmp$ret$2 = null;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = new Pair(tmp0_safe_receiver, converter(get_jsonPrimitive(ensureNotNull(get_jsonObject(ensureNotNull(data)).bf(tmp0_safe_receiver.jd6()))).s4u()));
    }
    return tmp;
  }
  function instantConverter($this, value) {
    return Companion_getInstance().d6b(value);
  }
  function epochInstantConverter($this, value) {
    var tmp0_safe_receiver = toLongOrNull(value);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = Companion_getInstance().i6c(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$("Couldn't parse epoch seconds from: " + value);
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function DatePolicyUtils$checkVc$lambda(it) {
    return instantConverter(DatePolicyUtils_getInstance(), it);
  }
  function DatePolicyUtils$checkJwt$lambda(it) {
    return epochInstantConverter(DatePolicyUtils_getInstance(), it);
  }
  function DatePolicyUtils() {
    DatePolicyUtils_instance = this;
    var tmp = this;
    // Inline function 'kotlin.Companion.success' call
    var value = new JsonObject(mapOf(to('policy_available', JsonPrimitive(false))));
    tmp.ceb_1 = _Result___init__impl__xyqfz8(value);
  }
  protoOf(DatePolicyUtils).deb = function (data, claims) {
    return check(this, data, claims, DatePolicyUtils$checkVc$lambda);
  };
  protoOf(DatePolicyUtils).eeb = function (data, claims) {
    return check(this, data, claims, DatePolicyUtils$checkJwt$lambda);
  };
  var DatePolicyUtils_instance;
  function DatePolicyUtils_getInstance() {
    if (DatePolicyUtils_instance == null)
      new DatePolicyUtils();
    return DatePolicyUtils_instance;
  }
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.feb_1.c1();
  }
  function SerializableRuntimeException$Companion$_anonymous__q5ctqx() {
    var tmp = getKClass(SerializableRuntimeException);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(ExpirationDatePolicyException), getKClass(HolderBindingException), getKClass(JsonSchemaVerificationException), getKClass(MaximumCredentialsException), getKClass(MinimumCredentialsException), getKClass(NotAllowedIssuerException), getKClass(NotBeforePolicyException), getKClass(PresentationDefinitionException), getKClass(PresentationDefinitionRelationalConstraintException), getKClass(WebhookPolicyException)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_1(), $serializer_getInstance_7(), $serializer_getInstance(), $serializer_getInstance_6(), $serializer_getInstance_5(), $serializer_getInstance_8(), $serializer_getInstance_0(), $serializer_getInstance_3(), $serializer_getInstance_4(), $serializer_getInstance_2()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('id.walt.policies.SerializableRuntimeException', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Companion_1() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.feb_1 = lazy(tmp_0, SerializableRuntimeException$Companion$_anonymous__q5ctqx);
  }
  protoOf(Companion_1).o4u = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_1).z2c = function (typeParamsSerializers) {
    return this.o4u();
  };
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_1();
    return Companion_instance_5;
  }
  function SerializableRuntimeException_init_$Init$(seen0, message, serializationConstructorMarker, $this) {
    RuntimeException_init_$Init$($this);
    if (0 === (seen0 & 1))
      $this.geb_1 = null;
    else
      $this.geb_1 = message;
    return $this;
  }
  function SerializableRuntimeException(message) {
    Companion_getInstance_6();
    message = message === VOID ? null : message;
    RuntimeException_init_$Init$_0(message, this);
    captureStack(this, SerializableRuntimeException);
    this.geb_1 = message;
  }
  protoOf(SerializableRuntimeException).ta = function () {
    return this.geb_1;
  };
  function JsonSchemaVerificationException$Companion$$childSerializers$_anonymous__68unz5() {
    return new ArrayListSerializer($serializer_getInstance_17());
  }
  function Companion_2() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.heb_1 = [null, lazy(tmp_0, JsonSchemaVerificationException$Companion$$childSerializers$_anonymous__68unz5)];
  }
  protoOf(Companion_2).o4u = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_2();
    return Companion_instance_6;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('JsonSchemaVerificationException', this, 2);
    tmp0_serialDesc.z2b('message', true);
    tmp0_serialDesc.z2b('validationErrors', false);
    this.ieb_1 = tmp0_serialDesc;
  }
  protoOf($serializer).jeb = function (encoder, value) {
    var tmp0_desc = this.ieb_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().heb_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.c26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.a26(tmp0_desc, 1, tmp2_cached[1].c1(), value.validationErrors);
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer).x20 = function (encoder, value) {
    return this.jeb(encoder, value instanceof JsonSchemaVerificationException ? value : THROW_CCE());
  };
  protoOf($serializer).y20 = function (decoder) {
    var tmp0_desc = this.ieb_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.j24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().heb_1;
    if (tmp6_input.z24()) {
      tmp4_local0 = tmp6_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, tmp7_cached[1].c1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, tmp7_cached[1].c1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.k24(tmp0_desc);
    return JsonSchemaVerificationException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).w20 = function () {
    return this.ieb_1;
  };
  protoOf($serializer).o2c = function () {
    var tmp0_cached = Companion_getInstance_7().heb_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), tmp0_cached[1].c1()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function JsonSchemaVerificationException_init_$Init$(seen0, message, validationErrors, serializationConstructorMarker, $this) {
    if (!(2 === (2 & seen0))) {
      throwMissingFieldException(seen0, 2, $serializer_getInstance().ieb_1);
    }
    SerializableRuntimeException_init_$Init$(seen0, message, serializationConstructorMarker, $this);
    $this.validationErrors = validationErrors;
    return $this;
  }
  function JsonSchemaVerificationException_init_$Create$(seen0, message, validationErrors, serializationConstructorMarker) {
    var tmp = JsonSchemaVerificationException_init_$Init$(seen0, message, validationErrors, serializationConstructorMarker, objectCreate(protoOf(JsonSchemaVerificationException)));
    captureStack(tmp, JsonSchemaVerificationException_init_$Create$);
    return tmp;
  }
  function JsonSchemaVerificationException(validationErrors) {
    Companion_getInstance_7();
    SerializableRuntimeException.call(this);
    captureStack(this, JsonSchemaVerificationException);
    this.validationErrors = validationErrors;
  }
  protoOf(JsonSchemaVerificationException).leb = function () {
    return this.validationErrors;
  };
  protoOf(JsonSchemaVerificationException).dc = function () {
    return this.validationErrors;
  };
  protoOf(JsonSchemaVerificationException).meb = function (validationErrors) {
    return new JsonSchemaVerificationException(validationErrors);
  };
  protoOf(JsonSchemaVerificationException).copy = function (validationErrors, $super) {
    validationErrors = validationErrors === VOID ? this.validationErrors : validationErrors;
    return $super === VOID ? this.meb(validationErrors) : $super.meb.call(this, validationErrors);
  };
  protoOf(JsonSchemaVerificationException).toString = function () {
    return 'JsonSchemaVerificationException(validationErrors=' + toString(this.validationErrors) + ')';
  };
  protoOf(JsonSchemaVerificationException).hashCode = function () {
    return hashCode(this.validationErrors);
  };
  protoOf(JsonSchemaVerificationException).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JsonSchemaVerificationException))
      return false;
    var tmp0_other_with_cast = other instanceof JsonSchemaVerificationException ? other : THROW_CCE();
    if (!equals(this.validationErrors, tmp0_other_with_cast.validationErrors))
      return false;
    return true;
  };
  function Companion_3() {
  }
  protoOf(Companion_3).o4u = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('NotBeforePolicyException', this, 7);
    tmp0_serialDesc.z2b('message', true);
    tmp0_serialDesc.z2b('date', false);
    tmp0_serialDesc.z2b('date_seconds', false);
    tmp0_serialDesc.z2b('available_in', false);
    tmp0_serialDesc.z2b('available_in_seconds', false);
    tmp0_serialDesc.z2b('key', false);
    tmp0_serialDesc.z2b('policy_available', true);
    this.neb_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).oeb = function (encoder, value) {
    var tmp0_desc = this.neb_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.c26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.a26(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), value.date);
    tmp1_output.u25(tmp0_desc, 2, value.dateSeconds);
    tmp1_output.a26(tmp0_desc, 3, DurationSerializer_getInstance(), new Duration(value.availableIn));
    tmp1_output.u25(tmp0_desc, 4, value.availableInSeconds);
    tmp1_output.y25(tmp0_desc, 5, value.key);
    if (tmp1_output.g26(tmp0_desc, 6) ? true : !(value.policyAvailable === true)) {
      tmp1_output.q25(tmp0_desc, 6, value.policyAvailable);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_0).x20 = function (encoder, value) {
    return this.oeb(encoder, value instanceof NotBeforePolicyException ? value : THROW_CCE());
  };
  protoOf($serializer_0).y20 = function (decoder) {
    var tmp0_desc = this.neb_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = new Long(0, 0);
    var tmp7_local3 = null;
    var tmp8_local4 = new Long(0, 0);
    var tmp9_local5 = null;
    var tmp10_local6 = false;
    var tmp11_input = decoder.j24(tmp0_desc);
    if (tmp11_input.z24()) {
      tmp4_local0 = tmp11_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.v24(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.p24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp7_local3;
      var tmp_1 = tmp11_input.v24(tmp0_desc, 3, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp7_local3 = tmp_1 == null ? null : tmp_1.hg_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.p24(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.t24(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.l24(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.v24(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.p24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp7_local3;
            var tmp_4 = tmp11_input.v24(tmp0_desc, 3, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp7_local3 = tmp_4 == null ? null : tmp_4.hg_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.p24(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.t24(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.l24(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.k24(tmp0_desc);
    return NotBeforePolicyException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_0).w20 = function () {
    return this.neb_1;
  };
  protoOf($serializer_0).o2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), InstantIso8601Serializer_getInstance(), LongSerializer_getInstance(), DurationSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function NotBeforePolicyException_init_$Init$(seen0, message, date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable, serializationConstructorMarker, $this) {
    if (!(62 === (62 & seen0))) {
      throwMissingFieldException(seen0, 62, $serializer_getInstance_0().neb_1);
    }
    SerializableRuntimeException_init_$Init$(seen0, message, serializationConstructorMarker, $this);
    $this.date = date;
    $this.dateSeconds = dateSeconds;
    $this.availableIn = availableIn;
    $this.availableInSeconds = availableInSeconds;
    $this.key = key;
    if (0 === (seen0 & 64))
      $this.policyAvailable = true;
    else
      $this.policyAvailable = policyAvailable;
    return $this;
  }
  function NotBeforePolicyException_init_$Create$(seen0, message, date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable, serializationConstructorMarker) {
    var tmp = NotBeforePolicyException_init_$Init$(seen0, message, date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable, serializationConstructorMarker, objectCreate(protoOf(NotBeforePolicyException)));
    captureStack(tmp, NotBeforePolicyException_init_$Create$);
    return tmp;
  }
  function NotBeforePolicyException(date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable) {
    policyAvailable = policyAvailable === VOID ? true : policyAvailable;
    SerializableRuntimeException.call(this);
    captureStack(this, NotBeforePolicyException);
    this.date = date;
    this.dateSeconds = dateSeconds;
    this.availableIn = availableIn;
    this.availableInSeconds = availableInSeconds;
    this.key = key;
    this.policyAvailable = policyAvailable;
  }
  protoOf(NotBeforePolicyException).r6c = function () {
    return this.date;
  };
  protoOf(NotBeforePolicyException).qeb = function () {
    return this.dateSeconds;
  };
  protoOf(NotBeforePolicyException).reb = function () {
    return this.availableIn;
  };
  protoOf(NotBeforePolicyException).seb = function () {
    return this.availableInSeconds;
  };
  protoOf(NotBeforePolicyException).b1 = function () {
    return this.key;
  };
  protoOf(NotBeforePolicyException).teb = function () {
    return this.policyAvailable;
  };
  protoOf(NotBeforePolicyException).dc = function () {
    return this.date;
  };
  protoOf(NotBeforePolicyException).ec = function () {
    return this.dateSeconds;
  };
  protoOf(NotBeforePolicyException).ueb = function () {
    return this.availableIn;
  };
  protoOf(NotBeforePolicyException).v70 = function () {
    return this.availableInSeconds;
  };
  protoOf(NotBeforePolicyException).c7l = function () {
    return this.key;
  };
  protoOf(NotBeforePolicyException).u85 = function () {
    return this.policyAvailable;
  };
  protoOf(NotBeforePolicyException).veb = function (date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable) {
    return new NotBeforePolicyException(date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable);
  };
  protoOf(NotBeforePolicyException).copy = function (date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable, $super) {
    date = date === VOID ? this.date : date;
    dateSeconds = dateSeconds === VOID ? this.dateSeconds : dateSeconds;
    availableIn = availableIn === VOID ? this.availableIn : availableIn;
    availableInSeconds = availableInSeconds === VOID ? this.availableInSeconds : availableInSeconds;
    key = key === VOID ? this.key : key;
    policyAvailable = policyAvailable === VOID ? this.policyAvailable : policyAvailable;
    return $super === VOID ? this.veb(date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable) : $super.veb.call(this, date, dateSeconds, new Duration(availableIn), availableInSeconds, key, policyAvailable);
  };
  protoOf(NotBeforePolicyException).toString = function () {
    return 'NotBeforePolicyException(date=' + this.date.toString() + ', dateSeconds=' + this.dateSeconds.toString() + ', availableIn=' + Duration__toString_impl_8d916b(this.availableIn) + ', availableInSeconds=' + this.availableInSeconds.toString() + ', key=' + this.key + ', policyAvailable=' + this.policyAvailable + ')';
  };
  protoOf(NotBeforePolicyException).hashCode = function () {
    var result = this.date.hashCode();
    result = imul(result, 31) + this.dateSeconds.hashCode() | 0;
    result = imul(result, 31) + Duration__hashCode_impl_u4exz6(this.availableIn) | 0;
    result = imul(result, 31) + this.availableInSeconds.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.key) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.policyAvailable) | 0;
    return result;
  };
  protoOf(NotBeforePolicyException).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NotBeforePolicyException))
      return false;
    var tmp0_other_with_cast = other instanceof NotBeforePolicyException ? other : THROW_CCE();
    if (!this.date.equals(tmp0_other_with_cast.date))
      return false;
    if (!this.dateSeconds.equals(tmp0_other_with_cast.dateSeconds))
      return false;
    if (!equals(this.availableIn, tmp0_other_with_cast.availableIn))
      return false;
    if (!this.availableInSeconds.equals(tmp0_other_with_cast.availableInSeconds))
      return false;
    if (!(this.key === tmp0_other_with_cast.key))
      return false;
    if (!(this.policyAvailable === tmp0_other_with_cast.policyAvailable))
      return false;
    return true;
  };
  function Companion_4() {
  }
  protoOf(Companion_4).o4u = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('ExpirationDatePolicyException', this, 7);
    tmp0_serialDesc.z2b('message', true);
    tmp0_serialDesc.z2b('date', false);
    tmp0_serialDesc.z2b('date_seconds', false);
    tmp0_serialDesc.z2b('expired_in', false);
    tmp0_serialDesc.z2b('expired_in_seconds', false);
    tmp0_serialDesc.z2b('key', false);
    tmp0_serialDesc.z2b('policy_available', true);
    this.web_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).xeb = function (encoder, value) {
    var tmp0_desc = this.web_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.c26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.a26(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), value.date);
    tmp1_output.u25(tmp0_desc, 2, value.dateSeconds);
    tmp1_output.a26(tmp0_desc, 3, DurationSerializer_getInstance(), new Duration(value.expiredSince));
    tmp1_output.u25(tmp0_desc, 4, value.expiredSinceSeconds);
    tmp1_output.y25(tmp0_desc, 5, value.key);
    if (tmp1_output.g26(tmp0_desc, 6) ? true : !(value.policyAvailable === true)) {
      tmp1_output.q25(tmp0_desc, 6, value.policyAvailable);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_1).x20 = function (encoder, value) {
    return this.xeb(encoder, value instanceof ExpirationDatePolicyException ? value : THROW_CCE());
  };
  protoOf($serializer_1).y20 = function (decoder) {
    var tmp0_desc = this.web_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = new Long(0, 0);
    var tmp7_local3 = null;
    var tmp8_local4 = new Long(0, 0);
    var tmp9_local5 = null;
    var tmp10_local6 = false;
    var tmp11_input = decoder.j24(tmp0_desc);
    if (tmp11_input.z24()) {
      tmp4_local0 = tmp11_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.v24(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.p24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp7_local3;
      var tmp_1 = tmp11_input.v24(tmp0_desc, 3, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp7_local3 = tmp_1 == null ? null : tmp_1.hg_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.p24(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.t24(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.l24(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.v24(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.p24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp7_local3;
            var tmp_4 = tmp11_input.v24(tmp0_desc, 3, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp7_local3 = tmp_4 == null ? null : tmp_4.hg_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.p24(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.t24(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.l24(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.k24(tmp0_desc);
    return ExpirationDatePolicyException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_1).w20 = function () {
    return this.web_1;
  };
  protoOf($serializer_1).o2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), InstantIso8601Serializer_getInstance(), LongSerializer_getInstance(), DurationSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance(), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function ExpirationDatePolicyException_init_$Init$(seen0, message, date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable, serializationConstructorMarker, $this) {
    if (!(62 === (62 & seen0))) {
      throwMissingFieldException(seen0, 62, $serializer_getInstance_1().web_1);
    }
    SerializableRuntimeException_init_$Init$(seen0, message, serializationConstructorMarker, $this);
    $this.date = date;
    $this.dateSeconds = dateSeconds;
    $this.expiredSince = expiredSince;
    $this.expiredSinceSeconds = expiredSinceSeconds;
    $this.key = key;
    if (0 === (seen0 & 64))
      $this.policyAvailable = true;
    else
      $this.policyAvailable = policyAvailable;
    return $this;
  }
  function ExpirationDatePolicyException_init_$Create$(seen0, message, date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable, serializationConstructorMarker) {
    var tmp = ExpirationDatePolicyException_init_$Init$(seen0, message, date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable, serializationConstructorMarker, objectCreate(protoOf(ExpirationDatePolicyException)));
    captureStack(tmp, ExpirationDatePolicyException_init_$Create$);
    return tmp;
  }
  function ExpirationDatePolicyException(date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable) {
    policyAvailable = policyAvailable === VOID ? true : policyAvailable;
    SerializableRuntimeException.call(this);
    captureStack(this, ExpirationDatePolicyException);
    this.date = date;
    this.dateSeconds = dateSeconds;
    this.expiredSince = expiredSince;
    this.expiredSinceSeconds = expiredSinceSeconds;
    this.key = key;
    this.policyAvailable = policyAvailable;
  }
  protoOf(ExpirationDatePolicyException).r6c = function () {
    return this.date;
  };
  protoOf(ExpirationDatePolicyException).qeb = function () {
    return this.dateSeconds;
  };
  protoOf(ExpirationDatePolicyException).zeb = function () {
    return this.expiredSince;
  };
  protoOf(ExpirationDatePolicyException).aec = function () {
    return this.expiredSinceSeconds;
  };
  protoOf(ExpirationDatePolicyException).b1 = function () {
    return this.key;
  };
  protoOf(ExpirationDatePolicyException).teb = function () {
    return this.policyAvailable;
  };
  protoOf(ExpirationDatePolicyException).dc = function () {
    return this.date;
  };
  protoOf(ExpirationDatePolicyException).ec = function () {
    return this.dateSeconds;
  };
  protoOf(ExpirationDatePolicyException).ueb = function () {
    return this.expiredSince;
  };
  protoOf(ExpirationDatePolicyException).v70 = function () {
    return this.expiredSinceSeconds;
  };
  protoOf(ExpirationDatePolicyException).c7l = function () {
    return this.key;
  };
  protoOf(ExpirationDatePolicyException).u85 = function () {
    return this.policyAvailable;
  };
  protoOf(ExpirationDatePolicyException).veb = function (date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable) {
    return new ExpirationDatePolicyException(date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable);
  };
  protoOf(ExpirationDatePolicyException).copy = function (date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable, $super) {
    date = date === VOID ? this.date : date;
    dateSeconds = dateSeconds === VOID ? this.dateSeconds : dateSeconds;
    expiredSince = expiredSince === VOID ? this.expiredSince : expiredSince;
    expiredSinceSeconds = expiredSinceSeconds === VOID ? this.expiredSinceSeconds : expiredSinceSeconds;
    key = key === VOID ? this.key : key;
    policyAvailable = policyAvailable === VOID ? this.policyAvailable : policyAvailable;
    return $super === VOID ? this.veb(date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable) : $super.veb.call(this, date, dateSeconds, new Duration(expiredSince), expiredSinceSeconds, key, policyAvailable);
  };
  protoOf(ExpirationDatePolicyException).toString = function () {
    return 'ExpirationDatePolicyException(date=' + this.date.toString() + ', dateSeconds=' + this.dateSeconds.toString() + ', expiredSince=' + Duration__toString_impl_8d916b(this.expiredSince) + ', expiredSinceSeconds=' + this.expiredSinceSeconds.toString() + ', key=' + this.key + ', policyAvailable=' + this.policyAvailable + ')';
  };
  protoOf(ExpirationDatePolicyException).hashCode = function () {
    var result = this.date.hashCode();
    result = imul(result, 31) + this.dateSeconds.hashCode() | 0;
    result = imul(result, 31) + Duration__hashCode_impl_u4exz6(this.expiredSince) | 0;
    result = imul(result, 31) + this.expiredSinceSeconds.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.key) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.policyAvailable) | 0;
    return result;
  };
  protoOf(ExpirationDatePolicyException).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ExpirationDatePolicyException))
      return false;
    var tmp0_other_with_cast = other instanceof ExpirationDatePolicyException ? other : THROW_CCE();
    if (!this.date.equals(tmp0_other_with_cast.date))
      return false;
    if (!this.dateSeconds.equals(tmp0_other_with_cast.dateSeconds))
      return false;
    if (!equals(this.expiredSince, tmp0_other_with_cast.expiredSince))
      return false;
    if (!this.expiredSinceSeconds.equals(tmp0_other_with_cast.expiredSinceSeconds))
      return false;
    if (!(this.key === tmp0_other_with_cast.key))
      return false;
    if (!(this.policyAvailable === tmp0_other_with_cast.policyAvailable))
      return false;
    return true;
  };
  function Companion_5() {
  }
  protoOf(Companion_5).o4u = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    return Companion_instance_9;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('WebhookPolicyException', this, 2);
    tmp0_serialDesc.z2b('message', true);
    tmp0_serialDesc.z2b('response', false);
    this.bec_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).cec = function (encoder, value) {
    var tmp0_desc = this.bec_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.c26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.a26(tmp0_desc, 1, JsonObjectSerializer_getInstance(), value.response);
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_2).x20 = function (encoder, value) {
    return this.cec(encoder, value instanceof WebhookPolicyException ? value : THROW_CCE());
  };
  protoOf($serializer_2).y20 = function (decoder) {
    var tmp0_desc = this.bec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.j24(tmp0_desc);
    if (tmp6_input.z24()) {
      tmp4_local0 = tmp6_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, JsonObjectSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, JsonObjectSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.k24(tmp0_desc);
    return WebhookPolicyException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).w20 = function () {
    return this.bec_1;
  };
  protoOf($serializer_2).o2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), JsonObjectSerializer_getInstance()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function WebhookPolicyException_init_$Init$(seen0, message, response, serializationConstructorMarker, $this) {
    if (!(2 === (2 & seen0))) {
      throwMissingFieldException(seen0, 2, $serializer_getInstance_2().bec_1);
    }
    SerializableRuntimeException_init_$Init$(seen0, message, serializationConstructorMarker, $this);
    $this.response = response;
    return $this;
  }
  function WebhookPolicyException_init_$Create$(seen0, message, response, serializationConstructorMarker) {
    var tmp = WebhookPolicyException_init_$Init$(seen0, message, response, serializationConstructorMarker, objectCreate(protoOf(WebhookPolicyException)));
    captureStack(tmp, WebhookPolicyException_init_$Create$);
    return tmp;
  }
  function WebhookPolicyException(response) {
    SerializableRuntimeException.call(this);
    captureStack(this, WebhookPolicyException);
    this.response = response;
  }
  protoOf(WebhookPolicyException).k3j = function () {
    return this.response;
  };
  protoOf(WebhookPolicyException).dc = function () {
    return this.response;
  };
  protoOf(WebhookPolicyException).na3 = function (response) {
    return new WebhookPolicyException(response);
  };
  protoOf(WebhookPolicyException).copy = function (response, $super) {
    response = response === VOID ? this.response : response;
    return $super === VOID ? this.na3(response) : $super.na3.call(this, response);
  };
  protoOf(WebhookPolicyException).toString = function () {
    return 'WebhookPolicyException(response=' + this.response.toString() + ')';
  };
  protoOf(WebhookPolicyException).hashCode = function () {
    return this.response.hashCode();
  };
  protoOf(WebhookPolicyException).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WebhookPolicyException))
      return false;
    var tmp0_other_with_cast = other instanceof WebhookPolicyException ? other : THROW_CCE();
    if (!this.response.equals(tmp0_other_with_cast.response))
      return false;
    return true;
  };
  function Companion_6() {
  }
  protoOf(Companion_6).o4u = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('PresentationDefinitionException', this, 2);
    tmp0_serialDesc.z2b('message', true);
    tmp0_serialDesc.z2b('presentationDefinitionMatch', false);
    this.eec_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).fec = function (encoder, value) {
    var tmp0_desc = this.eec_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.c26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.q25(tmp0_desc, 1, value.presentationDefinitionMatch);
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_3).x20 = function (encoder, value) {
    return this.fec(encoder, value instanceof PresentationDefinitionException ? value : THROW_CCE());
  };
  protoOf($serializer_3).y20 = function (decoder) {
    var tmp0_desc = this.eec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_input = decoder.j24(tmp0_desc);
    if (tmp6_input.z24()) {
      tmp4_local0 = tmp6_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.l24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.l24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.k24(tmp0_desc);
    return PresentationDefinitionException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).w20 = function () {
    return this.eec_1;
  };
  protoOf($serializer_3).o2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function PresentationDefinitionException_init_$Init$(seen0, message, presentationDefinitionMatch, serializationConstructorMarker, $this) {
    if (!(2 === (2 & seen0))) {
      throwMissingFieldException(seen0, 2, $serializer_getInstance_3().eec_1);
    }
    SerializableRuntimeException_init_$Init$(seen0, message, serializationConstructorMarker, $this);
    $this.presentationDefinitionMatch = presentationDefinitionMatch;
    return $this;
  }
  function PresentationDefinitionException_init_$Create$(seen0, message, presentationDefinitionMatch, serializationConstructorMarker) {
    var tmp = PresentationDefinitionException_init_$Init$(seen0, message, presentationDefinitionMatch, serializationConstructorMarker, objectCreate(protoOf(PresentationDefinitionException)));
    captureStack(tmp, PresentationDefinitionException_init_$Create$);
    return tmp;
  }
  function PresentationDefinitionException(presentationDefinitionMatch) {
    SerializableRuntimeException.call(this);
    captureStack(this, PresentationDefinitionException);
    this.presentationDefinitionMatch = presentationDefinitionMatch;
  }
  protoOf(PresentationDefinitionException).hec = function () {
    return this.presentationDefinitionMatch;
  };
  var RelationalConstraintType_subject_is_issuer_instance;
  var RelationalConstraintType_is_holder_instance;
  var RelationalConstraintType_same_subject_instance;
  function values() {
    return [RelationalConstraintType_subject_is_issuer_getInstance(), RelationalConstraintType_is_holder_getInstance(), RelationalConstraintType_same_subject_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'subject_is_issuer':
        return RelationalConstraintType_subject_is_issuer_getInstance();
      case 'is_holder':
        return RelationalConstraintType_is_holder_getInstance();
      case 'same_subject':
        return RelationalConstraintType_same_subject_getInstance();
      default:
        RelationalConstraintType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var RelationalConstraintType_entriesInitialized;
  function RelationalConstraintType_initEntries() {
    if (RelationalConstraintType_entriesInitialized)
      return Unit_instance;
    RelationalConstraintType_entriesInitialized = true;
    RelationalConstraintType_subject_is_issuer_instance = new RelationalConstraintType('subject_is_issuer', 0);
    RelationalConstraintType_is_holder_instance = new RelationalConstraintType('is_holder', 1);
    RelationalConstraintType_same_subject_instance = new RelationalConstraintType('same_subject', 2);
  }
  function PresentationDefinitionRelationalConstraintException$Companion$$childSerializers$_anonymous__tbpl1w() {
    return createSimpleEnumSerializer('id.walt.policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType', values());
  }
  function RelationalConstraintType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Companion_7() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.kec_1 = [null, lazy(tmp_0, PresentationDefinitionRelationalConstraintException$Companion$$childSerializers$_anonymous__tbpl1w), null];
  }
  protoOf(Companion_7).o4u = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_7();
    return Companion_instance_11;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('PresentationDefinitionRelationalConstraintException', this, 3);
    tmp0_serialDesc.z2b('message', true);
    tmp0_serialDesc.z2b('constraint', false);
    tmp0_serialDesc.z2b('constraintFailureDescription', false);
    this.lec_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).mec = function (encoder, value) {
    var tmp0_desc = this.lec_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().kec_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.c26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.a26(tmp0_desc, 1, tmp2_cached[1].c1(), value.constraint);
    tmp1_output.y25(tmp0_desc, 2, value.constraintFailureDescription);
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_4).x20 = function (encoder, value) {
    return this.mec(encoder, value instanceof PresentationDefinitionRelationalConstraintException ? value : THROW_CCE());
  };
  protoOf($serializer_4).y20 = function (decoder) {
    var tmp0_desc = this.lec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_12().kec_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.v24(tmp0_desc, 1, tmp8_cached[1].c1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.t24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.v24(tmp0_desc, 1, tmp8_cached[1].c1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.t24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return PresentationDefinitionRelationalConstraintException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_4).w20 = function () {
    return this.lec_1;
  };
  protoOf($serializer_4).o2c = function () {
    var tmp0_cached = Companion_getInstance_12().kec_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), tmp0_cached[1].c1(), StringSerializer_getInstance()];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function PresentationDefinitionRelationalConstraintException_init_$Init$(seen0, message, constraint, constraintFailureDescription, serializationConstructorMarker, $this) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_4().lec_1);
    }
    SerializableRuntimeException_init_$Init$(seen0, message, serializationConstructorMarker, $this);
    $this.constraint = constraint;
    $this.constraintFailureDescription = constraintFailureDescription;
    return $this;
  }
  function PresentationDefinitionRelationalConstraintException_init_$Create$(seen0, message, constraint, constraintFailureDescription, serializationConstructorMarker) {
    var tmp = PresentationDefinitionRelationalConstraintException_init_$Init$(seen0, message, constraint, constraintFailureDescription, serializationConstructorMarker, objectCreate(protoOf(PresentationDefinitionRelationalConstraintException)));
    captureStack(tmp, PresentationDefinitionRelationalConstraintException_init_$Create$);
    return tmp;
  }
  function RelationalConstraintType_subject_is_issuer_getInstance() {
    RelationalConstraintType_initEntries();
    return RelationalConstraintType_subject_is_issuer_instance;
  }
  function RelationalConstraintType_is_holder_getInstance() {
    RelationalConstraintType_initEntries();
    return RelationalConstraintType_is_holder_instance;
  }
  function RelationalConstraintType_same_subject_getInstance() {
    RelationalConstraintType_initEntries();
    return RelationalConstraintType_same_subject_instance;
  }
  function PresentationDefinitionRelationalConstraintException(constraint, constraintFailureDescription) {
    Companion_getInstance_12();
    SerializableRuntimeException.call(this);
    captureStack(this, PresentationDefinitionRelationalConstraintException);
    this.constraint = constraint;
    this.constraintFailureDescription = constraintFailureDescription;
  }
  protoOf(PresentationDefinitionRelationalConstraintException).oec = function () {
    return this.constraint;
  };
  protoOf(PresentationDefinitionRelationalConstraintException).pec = function () {
    return this.constraintFailureDescription;
  };
  function Companion_8() {
  }
  protoOf(Companion_8).o4u = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('MinimumCredentialsException', this, 3);
    tmp0_serialDesc.z2b('message', true);
    tmp0_serialDesc.z2b('total', false);
    tmp0_serialDesc.z2b('missing', false);
    this.qec_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).rec = function (encoder, value) {
    var tmp0_desc = this.qec_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.c26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.t25(tmp0_desc, 1, value.total);
    tmp1_output.t25(tmp0_desc, 2, value.missing);
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_5).x20 = function (encoder, value) {
    return this.rec(encoder, value instanceof MinimumCredentialsException ? value : THROW_CCE());
  };
  protoOf($serializer_5).y20 = function (decoder) {
    var tmp0_desc = this.qec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.j24(tmp0_desc);
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.o24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.o24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return MinimumCredentialsException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_5).w20 = function () {
    return this.qec_1;
  };
  protoOf($serializer_5).o2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function MinimumCredentialsException_init_$Init$(seen0, message, total, missing, serializationConstructorMarker, $this) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_5().qec_1);
    }
    SerializableRuntimeException_init_$Init$(seen0, message, serializationConstructorMarker, $this);
    $this.total = total;
    $this.missing = missing;
    return $this;
  }
  function MinimumCredentialsException_init_$Create$(seen0, message, total, missing, serializationConstructorMarker) {
    var tmp = MinimumCredentialsException_init_$Init$(seen0, message, total, missing, serializationConstructorMarker, objectCreate(protoOf(MinimumCredentialsException)));
    captureStack(tmp, MinimumCredentialsException_init_$Create$);
    return tmp;
  }
  function MinimumCredentialsException(total, missing) {
    SerializableRuntimeException.call(this);
    captureStack(this, MinimumCredentialsException);
    this.total = total;
    this.missing = missing;
  }
  protoOf(MinimumCredentialsException).tec = function () {
    return this.total;
  };
  protoOf(MinimumCredentialsException).uec = function () {
    return this.missing;
  };
  function Companion_9() {
  }
  protoOf(Companion_9).o4u = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
    return Companion_instance_13;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('MaximumCredentialsException', this, 3);
    tmp0_serialDesc.z2b('message', true);
    tmp0_serialDesc.z2b('total', false);
    tmp0_serialDesc.z2b('exceeded', false);
    this.vec_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).wec = function (encoder, value) {
    var tmp0_desc = this.vec_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.c26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.t25(tmp0_desc, 1, value.total);
    tmp1_output.t25(tmp0_desc, 2, value.exceeded);
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_6).x20 = function (encoder, value) {
    return this.wec(encoder, value instanceof MaximumCredentialsException ? value : THROW_CCE());
  };
  protoOf($serializer_6).y20 = function (decoder) {
    var tmp0_desc = this.vec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.j24(tmp0_desc);
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.o24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.o24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.o24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.o24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return MaximumCredentialsException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).w20 = function () {
    return this.vec_1;
  };
  protoOf($serializer_6).o2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function MaximumCredentialsException_init_$Init$(seen0, message, total, exceeded, serializationConstructorMarker, $this) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_6().vec_1);
    }
    SerializableRuntimeException_init_$Init$(seen0, message, serializationConstructorMarker, $this);
    $this.total = total;
    $this.exceeded = exceeded;
    return $this;
  }
  function MaximumCredentialsException_init_$Create$(seen0, message, total, exceeded, serializationConstructorMarker) {
    var tmp = MaximumCredentialsException_init_$Init$(seen0, message, total, exceeded, serializationConstructorMarker, objectCreate(protoOf(MaximumCredentialsException)));
    captureStack(tmp, MaximumCredentialsException_init_$Create$);
    return tmp;
  }
  function MaximumCredentialsException(total, exceeded) {
    SerializableRuntimeException.call(this);
    captureStack(this, MaximumCredentialsException);
    this.total = total;
    this.exceeded = exceeded;
  }
  protoOf(MaximumCredentialsException).tec = function () {
    return this.total;
  };
  protoOf(MaximumCredentialsException).yec = function () {
    return this.exceeded;
  };
  function HolderBindingException$Companion$$childSerializers$_anonymous__ymgduc() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_10() {
    Companion_instance_14 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.zec_1 = [null, null, lazy(tmp_0, HolderBindingException$Companion$$childSerializers$_anonymous__ymgduc)];
  }
  protoOf(Companion_10).o4u = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_10();
    return Companion_instance_14;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('HolderBindingException', this, 3);
    tmp0_serialDesc.z2b('message', true);
    tmp0_serialDesc.z2b('presenterDid', false);
    tmp0_serialDesc.z2b('credentialDids', false);
    this.aed_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).bed = function (encoder, value) {
    var tmp0_desc = this.aed_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().zec_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.c26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.y25(tmp0_desc, 1, value.presenterDid);
    tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.credentialDids);
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_7).x20 = function (encoder, value) {
    return this.bed(encoder, value instanceof HolderBindingException ? value : THROW_CCE());
  };
  protoOf($serializer_7).y20 = function (decoder) {
    var tmp0_desc = this.aed_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_15().zec_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return HolderBindingException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_7).w20 = function () {
    return this.aed_1;
  };
  protoOf($serializer_7).o2c = function () {
    var tmp0_cached = Companion_getInstance_15().zec_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function HolderBindingException_init_$Init$(seen0, message, presenterDid, credentialDids, serializationConstructorMarker, $this) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_7().aed_1);
    }
    SerializableRuntimeException_init_$Init$(seen0, message, serializationConstructorMarker, $this);
    $this.presenterDid = presenterDid;
    $this.credentialDids = credentialDids;
    return $this;
  }
  function HolderBindingException_init_$Create$(seen0, message, presenterDid, credentialDids, serializationConstructorMarker) {
    var tmp = HolderBindingException_init_$Init$(seen0, message, presenterDid, credentialDids, serializationConstructorMarker, objectCreate(protoOf(HolderBindingException)));
    captureStack(tmp, HolderBindingException_init_$Create$);
    return tmp;
  }
  function HolderBindingException(presenterDid, credentialDids) {
    Companion_getInstance_15();
    SerializableRuntimeException.call(this);
    captureStack(this, HolderBindingException);
    this.presenterDid = presenterDid;
    this.credentialDids = credentialDids;
  }
  protoOf(HolderBindingException).ded = function () {
    return this.presenterDid;
  };
  protoOf(HolderBindingException).eed = function () {
    return this.credentialDids;
  };
  function NotAllowedIssuerException$Companion$$childSerializers$_anonymous__fm2x9l() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_11() {
    Companion_instance_15 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.fed_1 = [null, null, lazy(tmp_0, NotAllowedIssuerException$Companion$$childSerializers$_anonymous__fm2x9l)];
  }
  protoOf(Companion_11).o4u = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_11();
    return Companion_instance_15;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('NotAllowedIssuerException', this, 3);
    tmp0_serialDesc.z2b('message', true);
    tmp0_serialDesc.z2b('issuer', false);
    tmp0_serialDesc.z2b('allowedIssuers', false);
    this.ged_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).hed = function (encoder, value) {
    var tmp0_desc = this.ged_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().fed_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.c26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.y25(tmp0_desc, 1, value.issuer);
    tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.allowedIssuers);
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_8).x20 = function (encoder, value) {
    return this.hed(encoder, value instanceof NotAllowedIssuerException ? value : THROW_CCE());
  };
  protoOf($serializer_8).y20 = function (decoder) {
    var tmp0_desc = this.ged_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_16().fed_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.x24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return NotAllowedIssuerException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_8).w20 = function () {
    return this.ged_1;
  };
  protoOf($serializer_8).o2c = function () {
    var tmp0_cached = Companion_getInstance_16().fed_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function NotAllowedIssuerException_init_$Init$(seen0, message, issuer, allowedIssuers, serializationConstructorMarker, $this) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_8().ged_1);
    }
    SerializableRuntimeException_init_$Init$(seen0, message, serializationConstructorMarker, $this);
    $this.issuer = issuer;
    $this.allowedIssuers = allowedIssuers;
    return $this;
  }
  function NotAllowedIssuerException_init_$Create$(seen0, message, issuer, allowedIssuers, serializationConstructorMarker) {
    var tmp = NotAllowedIssuerException_init_$Init$(seen0, message, issuer, allowedIssuers, serializationConstructorMarker, objectCreate(protoOf(NotAllowedIssuerException)));
    captureStack(tmp, NotAllowedIssuerException_init_$Create$);
    return tmp;
  }
  function NotAllowedIssuerException(issuer, allowedIssuers) {
    Companion_getInstance_16();
    SerializableRuntimeException.call(this);
    captureStack(this, NotAllowedIssuerException);
    this.issuer = issuer;
    this.allowedIssuers = allowedIssuers;
  }
  protoOf(NotAllowedIssuerException).pe0 = function () {
    return this.issuer;
  };
  protoOf(NotAllowedIssuerException).jed = function () {
    return this.allowedIssuers;
  };
  function DynamicPolicyException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, DynamicPolicyException);
    this.ked_1 = message;
  }
  protoOf(DynamicPolicyException).ta = function () {
    return this.ked_1;
  };
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.led_1.c1();
  }
  function JwtVerificationPolicy$Companion$_anonymous__m0tqd() {
    var tmp = getKClass(JwtVerificationPolicy);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [new JsonClassDiscriminator('type')];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion_12() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.led_1 = lazy(tmp_0, JwtVerificationPolicy$Companion$_anonymous__m0tqd);
  }
  protoOf(Companion_12).o4u = function () {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(Companion_12).z2c = function (typeParamsSerializers) {
    return this.o4u();
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_12();
    return Companion_instance_16;
  }
  function JwtVerificationPolicy_init_$Init$(seen0, serializationConstructorMarker, $this) {
    VerificationPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    return $this;
  }
  function JwtVerificationPolicy$verifyAsync$slambda(this$0, $credential, $args, $context, resultContinuation) {
    this.ued_1 = this$0;
    this.ved_1 = $credential;
    this.wed_1 = $args;
    this.xed_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwtVerificationPolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwtVerificationPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(JwtVerificationPolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.ued_1.yed(this.ved_1, this.wed_1, this.xed_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JwtVerificationPolicy$verifyAsync$slambda).ja = function (completion) {
    return new JwtVerificationPolicy$verifyAsync$slambda(this.ued_1, this.ved_1, this.wed_1, this.xed_1, completion);
  };
  function JwtVerificationPolicy$verifyAsync$slambda_0(this$0, $credential, $args, $context, resultContinuation) {
    var i = new JwtVerificationPolicy$verifyAsync$slambda(this$0, $credential, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JwtVerificationPolicy() {
    Companion_getInstance_17();
    VerificationPolicy.call(this);
  }
  protoOf(JwtVerificationPolicy).verify$default = function (credential, args, context, $completion, $super) {
    args = args === VOID ? null : args;
    return $super === VOID ? this.yed(credential, args, context, $completion) : $super.yed.call(this, credential, args, context, $completion);
  };
  protoOf(JwtVerificationPolicy).zed = function (credential, args, context) {
    var tmp = JwtVerificationPolicy$verifyAsync$slambda_0(this, credential, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwtVerificationPolicy).verifyAsync$default = function (credential, args, context, $super) {
    args = args === VOID ? null : args;
    return $super === VOID ? this.zed(credential, args, context) : $super.zed.call(this, credential, args, context);
  };
  function PolicyManager() {
    PolicyManager_instance = this;
    this.aee_1 = HashMap_init_$Create$();
    this.registerPolicies([new JwtSignaturePolicy(), new SdJwtVCSignaturePolicy(), new JsonSchemaPolicy(), new ExpirationDatePolicy(), new NotBeforeDatePolicy(), new WebhookPolicy(), new MinimumCredentialsPolicy(), new MaximumCredentialsPolicy(), new HolderBindingPolicy(), new AllowedIssuerPolicy(), new RevocationPolicy(), new PresentationDefinitionPolicy(), new DynamicPolicy(), new StatusPolicy()]);
  }
  protoOf(PolicyManager).listPolicyDescriptions = function () {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = this.aee_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(this_0.t()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.a1().q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var tmp = element.b1();
      var tmp$ret$1 = element.c1().description;
      destination.q2(tmp, tmp$ret$1);
    }
    return destination;
  };
  protoOf(PolicyManager).registerPolicies = function (policies) {
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = policies.length;
    while (inductionVariable < last) {
      var element = policies[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (PolicyManager_getInstance().aee_1.l2(element.name))
        throw IllegalArgumentException_init_$Create$('Policy does already exist: ' + element.name + ' (mapped to ' + getKClassFromExpression(ensureNotNull(PolicyManager_getInstance().aee_1.n2(element.name))).hc() + '). Choose another name for your policy (' + getKClassFromExpression(element).hc() + '.');
      var tmp0 = PolicyManager_getInstance().aee_1;
      // Inline function 'kotlin.collections.set' call
      var key = element.name;
      tmp0.q2(key, element);
    }
  };
  protoOf(PolicyManager).getPolicy = function (name) {
    var tmp0_elvis_lhs = this.aee_1.n2(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No policy found by name: ' + name);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var PolicyManager_instance;
  function PolicyManager_getInstance() {
    if (PolicyManager_instance == null)
      new PolicyManager();
    return PolicyManager_instance;
  }
  function _get_$cachedSerializer__te6jhj_3($this) {
    return $this.bee_1.c1();
  }
  function VerificationPolicy$Companion$_anonymous__ts3mle() {
    var tmp = getKClass(VerificationPolicy);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [new JsonClassDiscriminator('type')];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion_13() {
    Companion_instance_17 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.bee_1 = lazy(tmp_0, VerificationPolicy$Companion$_anonymous__ts3mle);
  }
  protoOf(Companion_13).o4u = function () {
    return _get_$cachedSerializer__te6jhj_3(this);
  };
  protoOf(Companion_13).z2c = function (typeParamsSerializers) {
    return this.o4u();
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_13();
    return Companion_instance_17;
  }
  function VerificationPolicy_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function VerificationPolicy() {
    Companion_getInstance_18();
  }
  function Verifier$runPolicyRequests$slambda$slambda($policyRequest, $jwt, $context, $onSuccess, $onError, resultContinuation) {
    this.kee_1 = $policyRequest;
    this.lee_1 = $jwt;
    this.mee_1 = $context;
    this.nee_1 = $onSuccess;
    this.oee_1 = $onError;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$runPolicyRequests$slambda$slambda).y1y = function ($this$launch, $completion) {
    var tmp = this.c1j($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$runPolicyRequests$slambda$slambda).va = function (p1, $completion) {
    return this.y1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$runPolicyRequests$slambda$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            var tmp_0 = this;
            tmp_0.qee_1 = this.pee_1;
            this.ree_1 = this.qee_1;
            this.o9_1 = 4;
            var tmp_1 = this;
            tmp_1.tee_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.uee_1 = this.ree_1;
            this.vee_1 = this.uee_1;
            var tmp_3 = this;
            var tmp0_subject = this.kee_1.policy;
            var tmp_4;
            if (tmp0_subject instanceof JwtVerificationPolicy) {
              tmp_4 = JsonPrimitive_0(this.lee_1);
            } else {
              var tmp_5;
              if (tmp0_subject instanceof CredentialDataValidatorPolicy) {
                tmp_5 = true;
              } else {
                tmp_5 = tmp0_subject instanceof CredentialWrapperValidatorPolicy;
              }
              if (tmp_5) {
                tmp_4 = Companion_getInstance_0().parse(this.lee_1).zzz_unused_fullPayload;
              } else {
                throw IllegalArgumentException_init_$Create$('Unsupported policy type: ' + getKClassFromExpression(this.kee_1.policy).hc());
              }
            }

            tmp_3.wee_1 = tmp_4;
            this.n9_1 = 1;
            suspendResult = Verifier_getInstance().oef(this.kee_1, this.wee_1, this.mee_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            this.xee_1 = suspendResult.wp_1;
            suspendResult = new Result(this.xee_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.yee_1 = suspendResult.wp_1;
            this.zee_1 = new PolicyResult(this.kee_1, this.yee_1);
            this.n9_1 = 3;
            suspendResult = this.nee_1(this.zee_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.aef_1 = Unit_instance;
            var tmp_6 = this;
            this.tee_1;
            var value = this.aef_1;
            tmp_6.see_1 = _Result___init__impl__xyqfz8(value);
            this.o9_1 = 8;
            this.n9_1 = 5;
            continue $sm;
          case 4:
            this.o9_1 = 8;
            var tmp_7 = this.q9_1;
            if (tmp_7 instanceof Error) {
              this.bef_1 = this.q9_1;
              var tmp_8 = this;
              var exception = this.bef_1;
              tmp_8.see_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 5;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 5:
            this.o9_1 = 8;
            this.cef_1 = this.see_1;
            this.def_1 = this.cef_1;
            this.eef_1 = Result__exceptionOrNull_impl_p6xea9(this.def_1);
            if (this.eef_1 == null) {
              this.fef_1 = null;
              this.n9_1 = 7;
              continue $sm;
            } else {
              var tmp_9 = this;
              tmp_9.gef_1 = this.eef_1;
              this.hef_1 = this.gef_1;
              var tmp_10 = this;
              tmp_10.ief_1 = this.hef_1;
              this.jef_1 = this.ief_1;
              var tmp_11 = this;
              tmp_11.kef_1 = this.jef_1;
              this.lef_1 = this.kef_1;
              this.n9_1 = 6;
              var exception_0 = this.lef_1;
              suspendResult = this.oee_1(new PolicyResult(this.kee_1, _Result___init__impl__xyqfz8(createFailure(exception_0))), this.lef_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 6:
            var tmp_12 = this;
            tmp_12.fef_1 = Unit_instance;
            this.n9_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 8) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Verifier$runPolicyRequests$slambda$slambda).c1j = function ($this$launch, completion) {
    var i = new Verifier$runPolicyRequests$slambda$slambda(this.kee_1, this.lee_1, this.mee_1, this.nee_1, this.oee_1, completion);
    i.pee_1 = $this$launch;
    return i;
  };
  function Verifier$runPolicyRequests$slambda$slambda_0($policyRequest, $jwt, $context, $onSuccess, $onError, resultContinuation) {
    var i = new Verifier$runPolicyRequests$slambda$slambda($policyRequest, $jwt, $context, $onSuccess, $onError, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.y1y($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function getW3CType($this, _this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.bf('type');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_safe_receiver = _this__u8e3s4.bf('vc');
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonObject(tmp1_safe_receiver);
      tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.bf('type');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp;
    var tmp_0;
    if (tmp3_elvis_lhs == null) {
      var tmp4_safe_receiver = _this__u8e3s4.bf('vp');
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : get_jsonObject(tmp4_safe_receiver);
      tmp_0 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.bf('type');
    } else {
      tmp_0 = tmp3_elvis_lhs;
    }
    var tmp6_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp6_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No `type` supplied: ' + _this__u8e3s4.toString());
    } else {
      tmp_1 = tmp6_elvis_lhs;
    }
    // Inline function 'kotlin.let' call
    var it = tmp_1;
    var tmp_2;
    if (it instanceof JsonArray) {
      var tmp1_elvis_lhs = lastOrNull(it);
      var tmp_3;
      if (tmp1_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$('Empty `type` array! Please provide an type in the list.');
      } else {
        tmp_3 = tmp1_elvis_lhs;
      }
      tmp_2 = get_jsonPrimitive(tmp_3).s4u();
    } else {
      if (it instanceof JsonPrimitive_1) {
        tmp_2 = it.s4u();
      } else {
        throw IllegalArgumentException_init_$Create$('Invalid type of `type`-attribute: ' + getKClassFromExpression(it).hc());
      }
    }
    return tmp_2;
  }
  function getSdjwtVcType($this, _this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.bf('vct');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_safe_receiver = _this__u8e3s4.bf('vc');
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonObject(tmp1_safe_receiver);
      tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.bf('vct');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp;
    var tmp_0;
    if (tmp3_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No `vct` supplied: ' + _this__u8e3s4.toString());
    } else {
      tmp_0 = tmp3_elvis_lhs;
    }
    // Inline function 'kotlin.let' call
    var it = tmp_0;
    var tmp_1;
    if (it instanceof JsonPrimitive_1) {
      tmp_1 = it.s4u();
    } else {
      throw IllegalArgumentException_init_$Create$('Invalid type of `type`-attribute: ' + getKClassFromExpression(it).hc());
    }
    return tmp_1;
  }
  function getAnyType($this, _this__u8e3s4) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = getW3CType(Verifier_getInstance(), _this__u8e3s4);
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    // Inline function 'kotlin.recover' call
    var this_0 = tmp;
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp_1;
    if (exception == null) {
      tmp_1 = this_0;
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value_0 = getSdjwtVcType(Verifier_getInstance(), _this__u8e3s4);
      tmp_1 = _Result___init__impl__xyqfz8(value_0);
    }
    // Inline function 'kotlin.getOrElse' call
    var this_1 = tmp_1;
    var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
    var tmp_2;
    if (exception_0 == null) {
      var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
      tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    } else {
      throw IllegalArgumentException_init_$Create$('Cannot determine any type for: ' + _this__u8e3s4.toString());
    }
    return tmp_2;
  }
  function verifyW3CPresentation$_anonymous_$_anonymous_$addResultEntryFor_fxz7ij(results, type) {
    results.n(new PresentationResultEntry(type));
    return results.t() - 1 | 0;
  }
  function verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests_9orml3($presentationContext, resultMutex, policiesRun, results, idx, jwt, policies, $completion) {
    var tmp = Verifier_getInstance();
    var tmp_0 = Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_0(resultMutex, policiesRun, results, idx, null);
    return tmp.pef(jwt, policies, $presentationContext, tmp_0, Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_2(resultMutex, policiesRun, results, idx, null), $completion);
  }
  function verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0_hkwke7($presentationContext, resultMutex, policiesRun, results, idx, jwt, policies, $completion) {
    var tmp = Verifier_getInstance();
    var tmp_0 = Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_0(resultMutex, policiesRun, results, idx, null);
    return tmp.pef(jwt, policies, $presentationContext, tmp_0, Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_2(resultMutex, policiesRun, results, idx, null), $completion);
  }
  function Verifier$log$lambda() {
    return Unit_instance;
  }
  function Verifier$verifyCredential$slambda($resultMutex, $results, resultContinuation) {
    this.yef_1 = $resultMutex;
    this.zef_1 = $results;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyCredential$slambda).eeg = function (policyResult, $completion) {
    var tmp = this.feg(policyResult, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyCredential$slambda).va = function (p1, $completion) {
    return this.eeg(p1 instanceof PolicyResult ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$verifyCredential$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.beg_1 = this.yef_1;
            this.ceg_1 = this.beg_1;
            var tmp_1 = this;
            tmp_1.deg_1 = null;
            this.n9_1 = 1;
            suspendResult = this.ceg_1.i1g(this.deg_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                this.zef_1.n(this.aeg_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.ceg_1.u1f(this.deg_1);
                throw t;
              }
            }
             while (false);
            this.ceg_1.u1f(this.deg_1);
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
  protoOf(Verifier$verifyCredential$slambda).feg = function (policyResult, completion) {
    var i = new Verifier$verifyCredential$slambda(this.yef_1, this.zef_1, completion);
    i.aeg_1 = policyResult;
    return i;
  };
  function Verifier$verifyCredential$slambda_0($resultMutex, $results, resultContinuation) {
    var i = new Verifier$verifyCredential$slambda($resultMutex, $results, resultContinuation);
    var l = function (policyResult, $completion) {
      return i.eeg(policyResult, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Verifier$verifyCredential$slambda_1($resultMutex, $results, resultContinuation) {
    this.oeg_1 = $resultMutex;
    this.peg_1 = $results;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyCredential$slambda_1).veg = function (policyResult, exception, $completion) {
    var tmp = this.weg(policyResult, exception, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyCredential$slambda_1).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof PolicyResult ? p1 : THROW_CCE();
    return this.veg(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$verifyCredential$slambda_1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.seg_1 = this.oeg_1;
            this.teg_1 = this.seg_1;
            var tmp_1 = this;
            tmp_1.ueg_1 = null;
            this.n9_1 = 1;
            suspendResult = this.teg_1.i1g(this.ueg_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                this.peg_1.n(this.qeg_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.teg_1.u1f(this.ueg_1);
                throw t;
              }
            }
             while (false);
            this.teg_1.u1f(this.ueg_1);
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
  protoOf(Verifier$verifyCredential$slambda_1).weg = function (policyResult, exception, completion) {
    var i = new Verifier$verifyCredential$slambda_1(this.oeg_1, this.peg_1, completion);
    i.qeg_1 = policyResult;
    i.reg_1 = exception;
    return i;
  };
  function Verifier$verifyCredential$slambda_2($resultMutex, $results, resultContinuation) {
    var i = new Verifier$verifyCredential$slambda_1($resultMutex, $results, resultContinuation);
    var l = function (policyResult, exception, $completion) {
      return i.veg(policyResult, exception, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Verifier$runPolicyRequests$slambda($policyRequests, $jwt, $context, $onSuccess, $onError, resultContinuation) {
    this.feh_1 = $policyRequests;
    this.geh_1 = $jwt;
    this.heh_1 = $context;
    this.ieh_1 = $onSuccess;
    this.jeh_1 = $onError;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$runPolicyRequests$slambda).y1y = function ($this$coroutineScope, $completion) {
    var tmp = this.c1j($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$runPolicyRequests$slambda).va = function (p1, $completion) {
    return this.y1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$runPolicyRequests$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var _iterator__ex2g4s = this.feh_1.q();
          while (_iterator__ex2g4s.r()) {
            var element = _iterator__ex2g4s.s();
            launch(this.keh_1, VOID, VOID, Verifier$runPolicyRequests$slambda$slambda_0(element, this.geh_1, this.heh_1, this.ieh_1, this.jeh_1, null));
          }
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Verifier$runPolicyRequests$slambda).c1j = function ($this$coroutineScope, completion) {
    var i = new Verifier$runPolicyRequests$slambda(this.feh_1, this.geh_1, this.heh_1, this.ieh_1, this.jeh_1, completion);
    i.keh_1 = $this$coroutineScope;
    return i;
  };
  function Verifier$runPolicyRequests$slambda_0($policyRequests, $jwt, $context, $onSuccess, $onError, resultContinuation) {
    var i = new Verifier$runPolicyRequests$slambda($policyRequests, $jwt, $context, $onSuccess, $onError, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.y1y($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Verifier$verifyPresentation$lambda($format, $isW3CVp, $vpToken) {
    return function () {
      return 'Verifying presentation with format ' + $format.toString() + ' (is w3cvp=' + $isW3CVp + '): ' + $vpToken;
    };
  }
  function Verifier$verifyW3CPresentation$slambda($payload, $results, $vpType, $presentationContext, $resultMutex, $policiesRun, $vpToken, $vpPolicies, $verifiableCredentialJwts, $globalVcPolicies, $specificCredentialPolicies, resultContinuation) {
    this.teh_1 = $payload;
    this.ueh_1 = $results;
    this.veh_1 = $vpType;
    this.weh_1 = $presentationContext;
    this.xeh_1 = $resultMutex;
    this.yeh_1 = $policiesRun;
    this.zeh_1 = $vpToken;
    this.aei_1 = $vpPolicies;
    this.bei_1 = $verifiableCredentialJwts;
    this.cei_1 = $globalVcPolicies;
    this.dei_1 = $specificCredentialPolicies;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyW3CPresentation$slambda).y1y = function ($this$coroutineScope, $completion) {
    var tmp = this.c1j($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyW3CPresentation$slambda).va = function (p1, $completion) {
    return this.y1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$verifyW3CPresentation$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 9;
            var tmp_0 = this;
            var this_0 = this.teh_1;
            tmp_0.fei_1 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l2('vp');
            if (this.fei_1 === true) {
              this.gei_1 = verifyW3CPresentation$_anonymous_$_anonymous_$addResultEntryFor_fxz7ij(this.ueh_1, this.veh_1);
              this.n9_1 = 2;
              suspendResult = verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests_9orml3(this.weh_1, this.xeh_1, this.yeh_1, this.ueh_1, this.gei_1, this.zeh_1, this.aei_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hei_1 = 0;
              this.ueh_1.n(new PresentationResultEntry(this.zeh_1));
              this.n9_1 = 1;
              suspendResult = verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests_9orml3(this.weh_1, this.xeh_1, this.yeh_1, this.ueh_1, this.hei_1, this.zeh_1, this.aei_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.iei_1 = this.bei_1;
            this.jei_1 = this.iei_1;
            this.kei_1 = this.jei_1.q();
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (!this.kei_1.r()) {
              this.n9_1 = 8;
              continue $sm;
            }

            this.lei_1 = this.kei_1.s();
            var tmp_2 = this;
            tmp_2.mei_1 = this.lei_1;
            this.nei_1 = this.mei_1;
            this.oei_1 = getAnyType(Verifier_getInstance(), JwsUtils_instance.decodeJws(substringBefore(this.nei_1, '~')).payload);
            this.pei_1 = verifyW3CPresentation$_anonymous_$_anonymous_$addResultEntryFor_fxz7ij(this.ueh_1, this.oei_1);
            this.n9_1 = 5;
            suspendResult = verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests_9orml3(this.weh_1, this.xeh_1, this.yeh_1, this.ueh_1, this.pei_1, this.nei_1, this.cei_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.qei_1 = this.dei_1.n2(this.oei_1);
            if (this.qei_1 == null) {
              this.rei_1 = null;
              this.n9_1 = 7;
              continue $sm;
            } else {
              var tmp_3 = this;
              tmp_3.sei_1 = this.qei_1;
              this.tei_1 = this.sei_1;
              var tmp_4 = this;
              tmp_4.uei_1 = this.tei_1;
              this.vei_1 = this.uei_1;
              this.n9_1 = 6;
              suspendResult = verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests_9orml3(this.weh_1, this.xeh_1, this.yeh_1, this.ueh_1, this.pei_1, this.nei_1, this.vei_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 6:
            var tmp_5 = this;
            tmp_5.rei_1 = Unit_instance;
            this.n9_1 = 7;
            continue $sm;
          case 7:
            this.n9_1 = 4;
            continue $sm;
          case 8:
            return Unit_instance;
          case 9:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 9) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Verifier$verifyW3CPresentation$slambda).c1j = function ($this$coroutineScope, completion) {
    var i = new Verifier$verifyW3CPresentation$slambda(this.teh_1, this.ueh_1, this.veh_1, this.weh_1, this.xeh_1, this.yeh_1, this.zeh_1, this.aei_1, this.bei_1, this.cei_1, this.dei_1, completion);
    i.eei_1 = $this$coroutineScope;
    return i;
  };
  function Verifier$verifyW3CPresentation$slambda_0($payload, $results, $vpType, $presentationContext, $resultMutex, $policiesRun, $vpToken, $vpPolicies, $verifiableCredentialJwts, $globalVcPolicies, $specificCredentialPolicies, resultContinuation) {
    var i = new Verifier$verifyW3CPresentation$slambda($payload, $results, $vpType, $presentationContext, $resultMutex, $policiesRun, $vpToken, $vpPolicies, $verifiableCredentialJwts, $globalVcPolicies, $specificCredentialPolicies, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.y1y($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Verifier$verifySDJwtVCPresentation$lambda($vpToken) {
    return function () {
      return 'Verifying SD-JWT VC Presentation, vp_token: ' + $vpToken;
    };
  }
  function Verifier$verifySDJwtVCPresentation$lambda_0($vpType) {
    return function () {
      return 'SD-JWT VC Presentation vpType: ' + $vpType;
    };
  }
  function Verifier$verifySDJwtVCPresentation$slambda($results, $vpToken, $presentationContext, $resultMutex, $policiesRun, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $vpType, resultContinuation) {
    this.eej_1 = $results;
    this.fej_1 = $vpToken;
    this.gej_1 = $presentationContext;
    this.hej_1 = $resultMutex;
    this.iej_1 = $policiesRun;
    this.jej_1 = $vpPolicies;
    this.kej_1 = $globalVcPolicies;
    this.lej_1 = $specificCredentialPolicies;
    this.mej_1 = $vpType;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifySDJwtVCPresentation$slambda).y1y = function ($this$coroutineScope, $completion) {
    var tmp = this.c1j($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifySDJwtVCPresentation$slambda).va = function (p1, $completion) {
    return this.y1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$verifySDJwtVCPresentation$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.eej_1.n(new PresentationResultEntry(this.fej_1));
            this.n9_1 = 1;
            suspendResult = verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0_hkwke7(this.gej_1, this.hej_1, this.iej_1, this.eej_1, 0, this.fej_1, this.jej_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (this.kej_1.t() > 0 || this.lej_1.l2(this.mej_1)) {
              this.eej_1.n(new PresentationResultEntry(this.mej_1));
              this.n9_1 = 2;
              suspendResult = verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0_hkwke7(this.gej_1, this.hej_1, this.iej_1, this.eej_1, 1, this.fej_1, this.kej_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 5;
              continue $sm;
            }

          case 2:
            this.oej_1 = this.lej_1.n2(this.mej_1);
            if (this.oej_1 == null) {
              this.pej_1 = null;
              this.n9_1 = 4;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.qej_1 = this.oej_1;
              this.rej_1 = this.qej_1;
              var tmp_1 = this;
              tmp_1.sej_1 = this.rej_1;
              this.tej_1 = this.sej_1;
              this.n9_1 = 3;
              suspendResult = verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0_hkwke7(this.gej_1, this.hej_1, this.iej_1, this.eej_1, 1, this.fej_1, this.tej_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 3:
            var tmp_2 = this;
            tmp_2.pej_1 = Unit_instance;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.n9_1 = 5;
            continue $sm;
          case 5:
            return Unit_instance;
          case 6:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 6) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Verifier$verifySDJwtVCPresentation$slambda).c1j = function ($this$coroutineScope, completion) {
    var i = new Verifier$verifySDJwtVCPresentation$slambda(this.eej_1, this.fej_1, this.gej_1, this.hej_1, this.iej_1, this.jej_1, this.kej_1, this.lej_1, this.mej_1, completion);
    i.nej_1 = $this$coroutineScope;
    return i;
  };
  function Verifier$verifySDJwtVCPresentation$slambda_0($results, $vpToken, $presentationContext, $resultMutex, $policiesRun, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $vpType, resultContinuation) {
    var i = new Verifier$verifySDJwtVCPresentation$slambda($results, $vpToken, $presentationContext, $resultMutex, $policiesRun, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $vpType, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.y1y($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Verifier$runPolicyRequestsAsync$slambda($jwt, $policyRequests, $context, $onSuccess, $onError, resultContinuation) {
    this.cek_1 = $jwt;
    this.dek_1 = $policyRequests;
    this.eek_1 = $context;
    this.fek_1 = $onSuccess;
    this.gek_1 = $onError;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$runPolicyRequestsAsync$slambda).u1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$runPolicyRequestsAsync$slambda).ac = function ($completion) {
    return this.u1x($completion);
  };
  protoOf(Verifier$runPolicyRequestsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Verifier_getInstance().pef(this.cek_1, this.dek_1, this.eek_1, this.fek_1, this.gek_1, this);
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
  protoOf(Verifier$runPolicyRequestsAsync$slambda).ja = function (completion) {
    return new Verifier$runPolicyRequestsAsync$slambda(this.cek_1, this.dek_1, this.eek_1, this.fek_1, this.gek_1, completion);
  };
  function Verifier$runPolicyRequestsAsync$slambda_0($jwt, $policyRequests, $context, $onSuccess, $onError, resultContinuation) {
    var i = new Verifier$runPolicyRequestsAsync$slambda($jwt, $policyRequests, $context, $onSuccess, $onError, resultContinuation);
    var l = function ($completion) {
      return i.u1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifySDJwtVCPresentationAsync$slambda($vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    this.pek_1 = $vpToken;
    this.qek_1 = $vpPolicies;
    this.rek_1 = $globalVcPolicies;
    this.sek_1 = $specificCredentialPolicies;
    this.tek_1 = $presentationContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifySDJwtVCPresentationAsync$slambda).uek = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifySDJwtVCPresentationAsync$slambda).ac = function ($completion) {
    return this.uek($completion);
  };
  protoOf(Verifier$verifySDJwtVCPresentationAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Verifier_getInstance().vek(this.pek_1, this.qek_1, this.rek_1, this.sek_1, this.tek_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(Verifier$verifySDJwtVCPresentationAsync$slambda).ja = function (completion) {
    return new Verifier$verifySDJwtVCPresentationAsync$slambda(this.pek_1, this.qek_1, this.rek_1, this.sek_1, this.tek_1, completion);
  };
  function Verifier$verifySDJwtVCPresentationAsync$slambda_0($vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    var i = new Verifier$verifySDJwtVCPresentationAsync$slambda($vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation);
    var l = function ($completion) {
      return i.uek($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifyPresentationAsync$slambda($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    this.eel_1 = $format;
    this.fel_1 = $vpToken;
    this.gel_1 = $vpPolicies;
    this.hel_1 = $globalVcPolicies;
    this.iel_1 = $specificCredentialPolicies;
    this.jel_1 = $presentationContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyPresentationAsync$slambda).uek = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyPresentationAsync$slambda).ac = function ($completion) {
    return this.uek($completion);
  };
  protoOf(Verifier$verifyPresentationAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Verifier_getInstance().kel(this.eel_1, this.fel_1, this.gel_1, this.hel_1, this.iel_1, this.jel_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(Verifier$verifyPresentationAsync$slambda).ja = function (completion) {
    return new Verifier$verifyPresentationAsync$slambda(this.eel_1, this.fel_1, this.gel_1, this.hel_1, this.iel_1, this.jel_1, completion);
  };
  function Verifier$verifyPresentationAsync$slambda_0($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    var i = new Verifier$verifyPresentationAsync$slambda($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation);
    var l = function ($completion) {
      return i.uek($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifyW3CPresentationAsync$slambda($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    this.tel_1 = $format;
    this.uel_1 = $vpToken;
    this.vel_1 = $vpPolicies;
    this.wel_1 = $globalVcPolicies;
    this.xel_1 = $specificCredentialPolicies;
    this.yel_1 = $presentationContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyW3CPresentationAsync$slambda).uek = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyW3CPresentationAsync$slambda).ac = function ($completion) {
    return this.uek($completion);
  };
  protoOf(Verifier$verifyW3CPresentationAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Verifier_getInstance().zel(this.tel_1, this.uel_1, this.vel_1, this.wel_1, this.xel_1, this.yel_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(Verifier$verifyW3CPresentationAsync$slambda).ja = function (completion) {
    return new Verifier$verifyW3CPresentationAsync$slambda(this.tel_1, this.uel_1, this.vel_1, this.wel_1, this.xel_1, this.yel_1, completion);
  };
  function Verifier$verifyW3CPresentationAsync$slambda_0($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    var i = new Verifier$verifyW3CPresentationAsync$slambda($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation);
    var l = function ($completion) {
      return i.uek($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifyJwsAsync$slambda($jwt, resultContinuation) {
    this.iem_1 = $jwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyJwsAsync$slambda).s9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Verifier$verifyJwsAsync$slambda).ac = function ($completion) {
    return this.s9w($completion);
  };
  protoOf(Verifier$verifyJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = Verifier_getInstance().jem(this.iem_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Verifier$verifyJwsAsync$slambda).ja = function (completion) {
    return new Verifier$verifyJwsAsync$slambda(this.iem_1, completion);
  };
  function Verifier$verifyJwsAsync$slambda_0($jwt, resultContinuation) {
    var i = new Verifier$verifyJwsAsync$slambda($jwt, resultContinuation);
    var l = function ($completion) {
      return i.s9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$runPolicyRequestAsync$slambda($this_runPolicyRequestAsync, $dataToVerify, $context, resultContinuation) {
    this.sem_1 = $this_runPolicyRequestAsync;
    this.tem_1 = $dataToVerify;
    this.uem_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$runPolicyRequestAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Verifier$runPolicyRequestAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(Verifier$runPolicyRequestAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = Verifier_getInstance().oef(this.sem_1, this.tem_1, this.uem_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Verifier$runPolicyRequestAsync$slambda).ja = function (completion) {
    return new Verifier$runPolicyRequestAsync$slambda(this.sem_1, this.tem_1, this.uem_1, completion);
  };
  function Verifier$runPolicyRequestAsync$slambda_0($this_runPolicyRequestAsync, $dataToVerify, $context, resultContinuation) {
    var i = new Verifier$runPolicyRequestAsync$slambda($this_runPolicyRequestAsync, $dataToVerify, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifyCredentialAsync$slambda($jwt, $policies, $context, resultContinuation) {
    this.den_1 = $jwt;
    this.een_1 = $policies;
    this.fen_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyCredentialAsync$slambda).gen = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyCredentialAsync$slambda).ac = function ($completion) {
    return this.gen($completion);
  };
  protoOf(Verifier$verifyCredentialAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Verifier_getInstance().hen(this.den_1, this.een_1, this.fen_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
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
  protoOf(Verifier$verifyCredentialAsync$slambda).ja = function (completion) {
    return new Verifier$verifyCredentialAsync$slambda(this.den_1, this.een_1, this.fen_1, completion);
  };
  function Verifier$verifyCredentialAsync$slambda_0($jwt, $policies, $context, resultContinuation) {
    var i = new Verifier$verifyCredentialAsync$slambda($jwt, $policies, $context, resultContinuation);
    var l = function ($completion) {
      return i.gen($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    this.qen_1 = $resultMutex;
    this.ren_1 = $policiesRun;
    this.sen_1 = $results;
    this.ten_1 = $idx;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd).eeg = function (policyResult, $completion) {
    var tmp = this.feg(policyResult, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd).va = function (p1, $completion) {
    return this.eeg(p1 instanceof PolicyResult ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.ven_1 = this.qen_1;
            this.wen_1 = this.ven_1;
            var tmp_1 = this;
            tmp_1.xen_1 = null;
            this.n9_1 = 1;
            suspendResult = this.wen_1.i1g(this.xen_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                var _unary__edvuaz = this.ren_1._v;
                this.ren_1._v = _unary__edvuaz + 1 | 0;
                this.sen_1.v(this.ten_1).policyResults.n(this.uen_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.wen_1.u1f(this.xen_1);
                throw t;
              }
            }
             while (false);
            this.wen_1.u1f(this.xen_1);
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
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd).feg = function (policyResult, completion) {
    var i = new Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd(this.qen_1, this.ren_1, this.sen_1, this.ten_1, completion);
    i.uen_1 = policyResult;
    return i;
  };
  function Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_0($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    var i = new Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd($resultMutex, $policiesRun, $results, $idx, resultContinuation);
    var l = function (policyResult, $completion) {
      return i.eeg(policyResult, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    this.geo_1 = $resultMutex;
    this.heo_1 = $policiesRun;
    this.ieo_1 = $results;
    this.jeo_1 = $idx;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1).veg = function (policyResult, exception, $completion) {
    var tmp = this.weg(policyResult, exception, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof PolicyResult ? p1 : THROW_CCE();
    return this.veg(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.meo_1 = this.geo_1;
            this.neo_1 = this.meo_1;
            var tmp_1 = this;
            tmp_1.oeo_1 = null;
            this.n9_1 = 1;
            suspendResult = this.neo_1.i1g(this.oeo_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                var _unary__edvuaz = this.heo_1._v;
                this.heo_1._v = _unary__edvuaz + 1 | 0;
                this.ieo_1.v(this.jeo_1).policyResults.n(this.keo_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.neo_1.u1f(this.oeo_1);
                throw t;
              }
            }
             while (false);
            this.neo_1.u1f(this.oeo_1);
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
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1).weg = function (policyResult, exception, completion) {
    var i = new Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1(this.geo_1, this.heo_1, this.ieo_1, this.jeo_1, completion);
    i.keo_1 = policyResult;
    i.leo_1 = exception;
    return i;
  };
  function Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_2($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    var i = new Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1($resultMutex, $policiesRun, $results, $idx, resultContinuation);
    var l = function (policyResult, exception, $completion) {
      return i.veg(policyResult, exception, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    this.xeo_1 = $resultMutex;
    this.yeo_1 = $policiesRun;
    this.zeo_1 = $results;
    this.aep_1 = $idx;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj).eeg = function (policyResult, $completion) {
    var tmp = this.feg(policyResult, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj).va = function (p1, $completion) {
    return this.eeg(p1 instanceof PolicyResult ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.cep_1 = this.xeo_1;
            this.dep_1 = this.cep_1;
            var tmp_1 = this;
            tmp_1.eep_1 = null;
            this.n9_1 = 1;
            suspendResult = this.dep_1.i1g(this.eep_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                var _unary__edvuaz = this.yeo_1._v;
                this.yeo_1._v = _unary__edvuaz + 1 | 0;
                this.zeo_1.v(this.aep_1).policyResults.n(this.bep_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.dep_1.u1f(this.eep_1);
                throw t;
              }
            }
             while (false);
            this.dep_1.u1f(this.eep_1);
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
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj).feg = function (policyResult, completion) {
    var i = new Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj(this.xeo_1, this.yeo_1, this.zeo_1, this.aep_1, completion);
    i.bep_1 = policyResult;
    return i;
  };
  function Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_0($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    var i = new Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj($resultMutex, $policiesRun, $results, $idx, resultContinuation);
    var l = function (policyResult, $completion) {
      return i.eeg(policyResult, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    this.nep_1 = $resultMutex;
    this.oep_1 = $policiesRun;
    this.pep_1 = $results;
    this.qep_1 = $idx;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1).veg = function (policyResult, exception, $completion) {
    var tmp = this.weg(policyResult, exception, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof PolicyResult ? p1 : THROW_CCE();
    return this.veg(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.tep_1 = this.nep_1;
            this.uep_1 = this.tep_1;
            var tmp_1 = this;
            tmp_1.vep_1 = null;
            this.n9_1 = 1;
            suspendResult = this.uep_1.i1g(this.vep_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                var _unary__edvuaz = this.oep_1._v;
                this.oep_1._v = _unary__edvuaz + 1 | 0;
                this.pep_1.v(this.qep_1).policyResults.n(this.rep_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.uep_1.u1f(this.vep_1);
                throw t;
              }
            }
             while (false);
            this.uep_1.u1f(this.vep_1);
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
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1).weg = function (policyResult, exception, completion) {
    var i = new Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1(this.nep_1, this.oep_1, this.pep_1, this.qep_1, completion);
    i.rep_1 = policyResult;
    i.sep_1 = exception;
    return i;
  };
  function Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_2($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    var i = new Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1($resultMutex, $policiesRun, $results, $idx, resultContinuation);
    var l = function (policyResult, exception, $completion) {
      return i.veg(policyResult, exception, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $runPolicyRequestCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, dataToVerify, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.eeq_1 = _this__u8e3s4;
    this.feq_1 = _this__u8e3s4_0;
    this.geq_1 = dataToVerify;
    this.heq_1 = context;
  }
  protoOf($runPolicyRequestCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            this.ieq_1 = this.feq_1.policy;
            var tmp_0 = this.ieq_1;
            if (tmp_0 instanceof JwtVerificationPolicy) {
              var tmp_1 = this.geq_1;
              if (!(tmp_1 instanceof JsonPrimitive_1)) {
                var message = 'Tried to apply JwtVerificationPolicy to non-jwt data: ' + toString(this.feq_1.policy);
                throw IllegalStateException_init_$Create$(toString(message));
              }
              this.n9_1 = 5;
              suspendResult = this.feq_1.policy.yed(this.geq_1.s4u(), this.feq_1.args, this.heq_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 6;
              continue $sm;
            } else {
              var tmp_2 = this.ieq_1;
              if (tmp_2 instanceof CredentialDataValidatorPolicy) {
                var tmp_3 = this.geq_1;
                if (!(tmp_3 instanceof JsonObject)) {
                  var message_0 = 'Tried to apply CredentialDataValidatorPolicy to non-credential data: ' + toString(this.feq_1.policy);
                  throw IllegalStateException_init_$Create$(toString(message_0));
                }
                this.keq_1 = !(this.geq_1.bf('vc') == null) ? get_jsonObject(ensureNotNull(this.geq_1.bf('vc'))) : this.geq_1;
                this.n9_1 = 3;
                suspendResult = this.feq_1.policy.mea(this.keq_1, this.feq_1.args, this.heq_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                this.n9_1 = 4;
                continue $sm;
              } else {
                var tmp_4 = this.ieq_1;
                if (tmp_4 instanceof CredentialWrapperValidatorPolicy) {
                  var tmp_5 = this.geq_1;
                  if (!(tmp_5 instanceof JsonObject)) {
                    var message_1 = 'Tried to apply CredentialWrapperValidatorPolicy to non-credential data: ' + toString(this.feq_1.policy);
                    throw IllegalStateException_init_$Create$(toString(message_1));
                  }
                  this.n9_1 = 1;
                  suspendResult = this.feq_1.policy.mea(this.geq_1, this.feq_1.args, this.heq_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  this.n9_1 = 2;
                  continue $sm;
                } else {
                  var tmp_6 = this;
                  throw IllegalArgumentException_init_$Create$('Unsupported policy type: ' + getKClassFromExpression(this.feq_1.policy).hc());
                }
              }
            }

          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.jeq_1 = suspendResult.wp_1;
            this.n9_1 = 7;
            continue $sm;
          case 3:
            var unboxed_0 = suspendResult.wp_1;
            suspendResult = new Result(unboxed_0);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.jeq_1 = suspendResult.wp_1;
            this.n9_1 = 7;
            continue $sm;
          case 5:
            var unboxed_1 = suspendResult.wp_1;
            suspendResult = new Result(unboxed_1);
            this.n9_1 = 6;
            continue $sm;
          case 6:
            this.jeq_1 = suspendResult.wp_1;
            this.n9_1 = 7;
            continue $sm;
          case 7:
            return new Result(this.jeq_1);
          case 8:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 8) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($runPolicyRequestCOROUTINE$0)['<set-state>'] = protoOf($runPolicyRequestCOROUTINE$0).u9;
  protoOf($runPolicyRequestCOROUTINE$0)['<get-state>'] = protoOf($runPolicyRequestCOROUTINE$0).v9;
  protoOf($runPolicyRequestCOROUTINE$0)['<set-exceptionState>'] = protoOf($runPolicyRequestCOROUTINE$0).w9;
  protoOf($runPolicyRequestCOROUTINE$0)['<get-exceptionState>'] = protoOf($runPolicyRequestCOROUTINE$0).x9;
  protoOf($runPolicyRequestCOROUTINE$0)['<set-result>'] = protoOf($runPolicyRequestCOROUTINE$0).y9;
  protoOf($runPolicyRequestCOROUTINE$0)['<get-result>'] = protoOf($runPolicyRequestCOROUTINE$0).z9;
  protoOf($runPolicyRequestCOROUTINE$0)['<set-exception>'] = protoOf($runPolicyRequestCOROUTINE$0).aa;
  protoOf($runPolicyRequestCOROUTINE$0)['<get-exception>'] = protoOf($runPolicyRequestCOROUTINE$0).ba;
  protoOf($runPolicyRequestCOROUTINE$0)['<set-finallyPath>'] = protoOf($runPolicyRequestCOROUTINE$0).ca;
  protoOf($runPolicyRequestCOROUTINE$0)['<get-finallyPath>'] = protoOf($runPolicyRequestCOROUTINE$0).da;
  protoOf($runPolicyRequestCOROUTINE$0)['<get-context>'] = protoOf($runPolicyRequestCOROUTINE$0).t9;
  function $verifyCredentialCOROUTINE$1(_this__u8e3s4, jwt, policies, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.teq_1 = _this__u8e3s4;
    this.ueq_1 = jwt;
    this.veq_1 = policies;
    this.weq_1 = context;
  }
  protoOf($verifyCredentialCOROUTINE$1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.xeq_1 = ArrayList_init_$Create$();
            this.yeq_1 = Mutex();
            this.n9_1 = 1;
            var tmp_0 = Verifier$verifyCredential$slambda_0(this.yeq_1, this.xeq_1, null);
            suspendResult = this.teq_1.pef(this.ueq_1, this.veq_1, this.weq_1, tmp_0, Verifier$verifyCredential$slambda_2(this.yeq_1, this.xeq_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.xeq_1;
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
  protoOf($verifyCredentialCOROUTINE$1)['<set-state>'] = protoOf($verifyCredentialCOROUTINE$1).u9;
  protoOf($verifyCredentialCOROUTINE$1)['<get-state>'] = protoOf($verifyCredentialCOROUTINE$1).v9;
  protoOf($verifyCredentialCOROUTINE$1)['<set-exceptionState>'] = protoOf($verifyCredentialCOROUTINE$1).w9;
  protoOf($verifyCredentialCOROUTINE$1)['<get-exceptionState>'] = protoOf($verifyCredentialCOROUTINE$1).x9;
  protoOf($verifyCredentialCOROUTINE$1)['<set-result>'] = protoOf($verifyCredentialCOROUTINE$1).y9;
  protoOf($verifyCredentialCOROUTINE$1)['<get-result>'] = protoOf($verifyCredentialCOROUTINE$1).z9;
  protoOf($verifyCredentialCOROUTINE$1)['<set-exception>'] = protoOf($verifyCredentialCOROUTINE$1).aa;
  protoOf($verifyCredentialCOROUTINE$1)['<get-exception>'] = protoOf($verifyCredentialCOROUTINE$1).ba;
  protoOf($verifyCredentialCOROUTINE$1)['<set-finallyPath>'] = protoOf($verifyCredentialCOROUTINE$1).ca;
  protoOf($verifyCredentialCOROUTINE$1)['<get-finallyPath>'] = protoOf($verifyCredentialCOROUTINE$1).da;
  protoOf($verifyCredentialCOROUTINE$1)['<get-context>'] = protoOf($verifyCredentialCOROUTINE$1).t9;
  function $verifyPresentationCOROUTINE$2(_this__u8e3s4, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.her_1 = _this__u8e3s4;
    this.ier_1 = format;
    this.jer_1 = vpToken;
    this.ker_1 = vpPolicies;
    this.ler_1 = globalVcPolicies;
    this.mer_1 = specificCredentialPolicies;
    this.ner_1 = presentationContext;
  }
  protoOf($verifyPresentationCOROUTINE$2).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            this.her_1;
            var tmp_1;
            try {
              var this_0 = JwsUtils_instance.decodeJws(this.jer_1).payload;
              var value = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l2('vp');
              tmp_1 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_2;
              if ($p instanceof Error) {
                var e = $p;
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_1 = tmp_2;
            }

            var this_1 = tmp_1;
            var exception = Result__exceptionOrNull_impl_p6xea9(this_1);
            var tmp_3;
            if (exception == null) {
              var tmp_4 = _Result___get_value__impl__bjfvqg(this_1);
              tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
            } else {
              tmp_3 = false;
            }

            tmp_0.oer_1 = tmp_3;
            this.her_1.mef_1.r6g(Verifier$verifyPresentation$lambda(this.ier_1, this.oer_1, this.jer_1));
            if (this.oer_1) {
              this.n9_1 = 3;
              suspendResult = this.her_1.zel(this.ier_1, this.jer_1, this.ker_1, this.ler_1, this.mer_1, this.ner_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.ier_1.equals(VCFormat_mso_mdoc_getInstance())) {
                var tmp_5 = this;
                var reason = 'mdoc presentations are not yet supported';
                throw new NotImplementedError('An operation is not implemented: ' + reason);
              } else {
                if (this.ier_1.equals(VCFormat_sd_jwt_vc_getInstance())) {
                  this.n9_1 = 2;
                  suspendResult = this.her_1.vek(this.jer_1, this.ker_1, this.ler_1, this.mer_1, this.ner_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.n9_1 = 1;
                  suspendResult = this.her_1.zel(this.ier_1, this.jer_1, this.ker_1, this.ler_1, this.mer_1, this.ner_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

          case 1:
            this.per_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.per_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.per_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return this.per_1;
          case 5:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 5) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($verifyPresentationCOROUTINE$2)['<set-state>'] = protoOf($verifyPresentationCOROUTINE$2).u9;
  protoOf($verifyPresentationCOROUTINE$2)['<get-state>'] = protoOf($verifyPresentationCOROUTINE$2).v9;
  protoOf($verifyPresentationCOROUTINE$2)['<set-exceptionState>'] = protoOf($verifyPresentationCOROUTINE$2).w9;
  protoOf($verifyPresentationCOROUTINE$2)['<get-exceptionState>'] = protoOf($verifyPresentationCOROUTINE$2).x9;
  protoOf($verifyPresentationCOROUTINE$2)['<set-result>'] = protoOf($verifyPresentationCOROUTINE$2).y9;
  protoOf($verifyPresentationCOROUTINE$2)['<get-result>'] = protoOf($verifyPresentationCOROUTINE$2).z9;
  protoOf($verifyPresentationCOROUTINE$2)['<set-exception>'] = protoOf($verifyPresentationCOROUTINE$2).aa;
  protoOf($verifyPresentationCOROUTINE$2)['<get-exception>'] = protoOf($verifyPresentationCOROUTINE$2).ba;
  protoOf($verifyPresentationCOROUTINE$2)['<set-finallyPath>'] = protoOf($verifyPresentationCOROUTINE$2).ca;
  protoOf($verifyPresentationCOROUTINE$2)['<get-finallyPath>'] = protoOf($verifyPresentationCOROUTINE$2).da;
  protoOf($verifyPresentationCOROUTINE$2)['<get-context>'] = protoOf($verifyPresentationCOROUTINE$2).t9;
  function $verifyW3CPresentationCOROUTINE$3(_this__u8e3s4, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yer_1 = _this__u8e3s4;
    this.zer_1 = format;
    this.aes_1 = vpToken;
    this.bes_1 = vpPolicies;
    this.ces_1 = globalVcPolicies;
    this.des_1 = specificCredentialPolicies;
    this.ees_1 = presentationContext;
  }
  protoOf($verifyW3CPresentationCOROUTINE$3).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.fes_1 = JwsUtils_instance.decodeJws(this.aes_1);
            this.ges_1 = this.fes_1.payload;
            var tmp_0 = this;
            var this_0 = this.ges_1;
            tmp_0.hes_1 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l2('vp') === true ? getW3CType(this.yer_1, this.ges_1) : '';
            var tmp_1 = this;
            var this_1 = this.ges_1;
            var tmp_2;
            if ((isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).l2('vp') === true) {
              var tmp2_safe_receiver = this.ges_1.bf('vp');
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonObject(tmp2_safe_receiver);
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.bf('verifiableCredential');
              var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? this.ges_1.bf('verifiableCredential') : tmp4_elvis_lhs;
              var tmp_3;
              if (tmp5_elvis_lhs == null) {
                var reason = 'Provided data does not have `verifiableCredential` array.';
                throw new NotImplementedError('An operation is not implemented: ' + reason);
              } else {
                tmp_3 = tmp5_elvis_lhs;
              }
              var this_2 = get_jsonArray(tmp_3);
              var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
              var _iterator__ex2g4s = this_2.q();
              while (_iterator__ex2g4s.r()) {
                var item = _iterator__ex2g4s.s();
                destination.n(get_jsonPrimitive(item).s4u());
              }
              tmp_2 = destination;
            } else {
              tmp_2 = emptyList();
            }

            tmp_1.ies_1 = tmp_2;
            this.jes_1 = ArrayList_init_$Create$();
            this.kes_1 = Mutex();
            this.les_1 = {_v: 0};
            var tmp_4 = this;
            tmp_4.mes_1 = Monotonic_instance;
            this.nes_1 = this.mes_1;
            this.oes_1 = this.nes_1.ag();
            this.n9_1 = 1;
            suspendResult = coroutineScope(Verifier$verifyW3CPresentation$slambda_0(this.ges_1, this.jes_1, this.hes_1, this.ees_1, this.kes_1, this.les_1, this.aes_1, this.bes_1, this.ies_1, this.ces_1, this.des_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var time = ValueTimeMark__elapsedNow_impl_eonqvs(this.oes_1);
            return new PresentationVerificationResponse(this.jes_1, time, this.les_1._v);
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
  protoOf($verifyW3CPresentationCOROUTINE$3)['<set-state>'] = protoOf($verifyW3CPresentationCOROUTINE$3).u9;
  protoOf($verifyW3CPresentationCOROUTINE$3)['<get-state>'] = protoOf($verifyW3CPresentationCOROUTINE$3).v9;
  protoOf($verifyW3CPresentationCOROUTINE$3)['<set-exceptionState>'] = protoOf($verifyW3CPresentationCOROUTINE$3).w9;
  protoOf($verifyW3CPresentationCOROUTINE$3)['<get-exceptionState>'] = protoOf($verifyW3CPresentationCOROUTINE$3).x9;
  protoOf($verifyW3CPresentationCOROUTINE$3)['<set-result>'] = protoOf($verifyW3CPresentationCOROUTINE$3).y9;
  protoOf($verifyW3CPresentationCOROUTINE$3)['<get-result>'] = protoOf($verifyW3CPresentationCOROUTINE$3).z9;
  protoOf($verifyW3CPresentationCOROUTINE$3)['<set-exception>'] = protoOf($verifyW3CPresentationCOROUTINE$3).aa;
  protoOf($verifyW3CPresentationCOROUTINE$3)['<get-exception>'] = protoOf($verifyW3CPresentationCOROUTINE$3).ba;
  protoOf($verifyW3CPresentationCOROUTINE$3)['<set-finallyPath>'] = protoOf($verifyW3CPresentationCOROUTINE$3).ca;
  protoOf($verifyW3CPresentationCOROUTINE$3)['<get-finallyPath>'] = protoOf($verifyW3CPresentationCOROUTINE$3).da;
  protoOf($verifyW3CPresentationCOROUTINE$3)['<get-context>'] = protoOf($verifyW3CPresentationCOROUTINE$3).t9;
  function $verifySDJwtVCPresentationCOROUTINE$4(_this__u8e3s4, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xes_1 = _this__u8e3s4;
    this.yes_1 = vpToken;
    this.zes_1 = vpPolicies;
    this.aet_1 = globalVcPolicies;
    this.bet_1 = specificCredentialPolicies;
    this.cet_1 = presentationContext;
  }
  protoOf($verifySDJwtVCPresentationCOROUTINE$4).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.xes_1.mef_1.r6g(Verifier$verifySDJwtVCPresentation$lambda(this.yes_1));
            this.det_1 = Companion_instance_0.cq(this.yes_1);
            this.eet_1 = this.det_1.zzz_unused_fullPayload;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.det_1.type;
            var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this.det_1.bc9_1 : tmp0_elvis_lhs;
            tmp_0.fet_1 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
            this.xes_1.mef_1.r6g(Verifier$verifySDJwtVCPresentation$lambda_0(this.fet_1));
            this.het_1 = ArrayList_init_$Create$();
            this.iet_1 = Mutex();
            this.jet_1 = {_v: 0};
            var tmp_1 = this;
            tmp_1.ket_1 = Monotonic_instance;
            this.let_1 = this.ket_1;
            this.met_1 = this.let_1.ag();
            this.n9_1 = 1;
            suspendResult = coroutineScope(Verifier$verifySDJwtVCPresentation$slambda_0(this.het_1, this.yes_1, this.cet_1, this.iet_1, this.jet_1, this.zes_1, this.aet_1, this.bet_1, this.fet_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var time = ValueTimeMark__elapsedNow_impl_eonqvs(this.met_1);
            return new PresentationVerificationResponse(this.het_1, time, this.jet_1._v);
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
  protoOf($verifySDJwtVCPresentationCOROUTINE$4)['<set-state>'] = protoOf($verifySDJwtVCPresentationCOROUTINE$4).u9;
  protoOf($verifySDJwtVCPresentationCOROUTINE$4)['<get-state>'] = protoOf($verifySDJwtVCPresentationCOROUTINE$4).v9;
  protoOf($verifySDJwtVCPresentationCOROUTINE$4)['<set-exceptionState>'] = protoOf($verifySDJwtVCPresentationCOROUTINE$4).w9;
  protoOf($verifySDJwtVCPresentationCOROUTINE$4)['<get-exceptionState>'] = protoOf($verifySDJwtVCPresentationCOROUTINE$4).x9;
  protoOf($verifySDJwtVCPresentationCOROUTINE$4)['<set-result>'] = protoOf($verifySDJwtVCPresentationCOROUTINE$4).y9;
  protoOf($verifySDJwtVCPresentationCOROUTINE$4)['<get-result>'] = protoOf($verifySDJwtVCPresentationCOROUTINE$4).z9;
  protoOf($verifySDJwtVCPresentationCOROUTINE$4)['<set-exception>'] = protoOf($verifySDJwtVCPresentationCOROUTINE$4).aa;
  protoOf($verifySDJwtVCPresentationCOROUTINE$4)['<get-exception>'] = protoOf($verifySDJwtVCPresentationCOROUTINE$4).ba;
  protoOf($verifySDJwtVCPresentationCOROUTINE$4)['<set-finallyPath>'] = protoOf($verifySDJwtVCPresentationCOROUTINE$4).ca;
  protoOf($verifySDJwtVCPresentationCOROUTINE$4)['<get-finallyPath>'] = protoOf($verifySDJwtVCPresentationCOROUTINE$4).da;
  protoOf($verifySDJwtVCPresentationCOROUTINE$4)['<get-context>'] = protoOf($verifySDJwtVCPresentationCOROUTINE$4).t9;
  function $verifyJwsCOROUTINE$5(_this__u8e3s4, jwt, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wet_1 = _this__u8e3s4;
    this.xet_1 = jwt;
  }
  protoOf($verifyJwsCOROUTINE$5).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = (new JwtSignaturePolicy()).yed(this.xet_1, null, this.wet_1.nef_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult instanceof Result ? suspendResult : null;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              var exception = IllegalArgumentException_init_$Create$('Could not get JSONObject from VC verification');
              tmp_0 = _Result___init__impl__xyqfz8(createFailure(exception));
            } else {
              tmp_0 = tmp0_elvis_lhs.wp_1;
            }

            return new Result(tmp_0);
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($verifyJwsCOROUTINE$5)['<set-state>'] = protoOf($verifyJwsCOROUTINE$5).u9;
  protoOf($verifyJwsCOROUTINE$5)['<get-state>'] = protoOf($verifyJwsCOROUTINE$5).v9;
  protoOf($verifyJwsCOROUTINE$5)['<set-exceptionState>'] = protoOf($verifyJwsCOROUTINE$5).w9;
  protoOf($verifyJwsCOROUTINE$5)['<get-exceptionState>'] = protoOf($verifyJwsCOROUTINE$5).x9;
  protoOf($verifyJwsCOROUTINE$5)['<set-result>'] = protoOf($verifyJwsCOROUTINE$5).y9;
  protoOf($verifyJwsCOROUTINE$5)['<get-result>'] = protoOf($verifyJwsCOROUTINE$5).z9;
  protoOf($verifyJwsCOROUTINE$5)['<set-exception>'] = protoOf($verifyJwsCOROUTINE$5).aa;
  protoOf($verifyJwsCOROUTINE$5)['<get-exception>'] = protoOf($verifyJwsCOROUTINE$5).ba;
  protoOf($verifyJwsCOROUTINE$5)['<set-finallyPath>'] = protoOf($verifyJwsCOROUTINE$5).ca;
  protoOf($verifyJwsCOROUTINE$5)['<get-finallyPath>'] = protoOf($verifyJwsCOROUTINE$5).da;
  protoOf($verifyJwsCOROUTINE$5)['<get-context>'] = protoOf($verifyJwsCOROUTINE$5).t9;
  function Verifier() {
    Verifier_instance = this;
    var tmp = this;
    var tmp_0 = KotlinLogging_instance;
    tmp.mef_1 = tmp_0.c6h(Verifier$log$lambda);
    this.nef_1 = emptyMap();
  }
  protoOf(Verifier).oef = function (_this__u8e3s4, dataToVerify, context, $completion) {
    var tmp = new $runPolicyRequestCOROUTINE$0(this, _this__u8e3s4, dataToVerify, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Verifier).hen = function (jwt, policies, context, $completion) {
    var tmp = new $verifyCredentialCOROUTINE$1(this, jwt, policies, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier).verifyCredential$default = function (jwt, policies, context, $completion, $super) {
    context = context === VOID ? emptyMap() : context;
    return $super === VOID ? this.hen(jwt, policies, context, $completion) : $super.hen.call(this, jwt, policies, context, $completion);
  };
  protoOf(Verifier).pef = function (jwt, policyRequests, context, onSuccess, onError, $completion) {
    return coroutineScope(Verifier$runPolicyRequests$slambda_0(policyRequests, jwt, context, onSuccess, onError, null), $completion);
  };
  protoOf(Verifier).runPolicyRequests$default = function (jwt, policyRequests, context, onSuccess, onError, $completion, $super) {
    context = context === VOID ? emptyMap() : context;
    return $super === VOID ? this.pef(jwt, policyRequests, context, onSuccess, onError, $completion) : $super.pef.call(this, jwt, policyRequests, context, onSuccess, onError, $completion);
  };
  protoOf(Verifier).kel = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) {
    var tmp = new $verifyPresentationCOROUTINE$2(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier).verifyPresentation$default = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.kel(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) : $super.kel.call(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
  };
  protoOf(Verifier).zel = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) {
    var tmp = new $verifyW3CPresentationCOROUTINE$3(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier).verifyW3CPresentation$default = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.zel(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) : $super.zel.call(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
  };
  protoOf(Verifier).vek = function (vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) {
    var tmp = new $verifySDJwtVCPresentationCOROUTINE$4(this, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier).verifySDJwtVCPresentation$default = function (vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.vek(vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) : $super.vek.call(this, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
  };
  protoOf(Verifier).jem = function (jwt, $completion) {
    var tmp = new $verifyJwsCOROUTINE$5(this, jwt, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Verifier).beu = function (jwt, policyRequests, context, onSuccess, onError) {
    var tmp = Verifier$runPolicyRequestsAsync$slambda_0(jwt, policyRequests, context, onSuccess, onError, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).runPolicyRequestsAsync$default = function (jwt, policyRequests, context, onSuccess, onError, $super) {
    context = context === VOID ? emptyMap() : context;
    return $super === VOID ? this.beu(jwt, policyRequests, context, onSuccess, onError) : $super.beu.call(this, jwt, policyRequests, context, onSuccess, onError);
  };
  protoOf(Verifier).ceu = function (vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) {
    var tmp = Verifier$verifySDJwtVCPresentationAsync$slambda_0(vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).verifySDJwtVCPresentationAsync$default = function (vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.ceu(vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) : $super.ceu.call(this, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext);
  };
  protoOf(Verifier).deu = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) {
    var tmp = Verifier$verifyPresentationAsync$slambda_0(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).verifyPresentationAsync$default = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.deu(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) : $super.deu.call(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext);
  };
  protoOf(Verifier).eeu = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) {
    var tmp = Verifier$verifyW3CPresentationAsync$slambda_0(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).verifyW3CPresentationAsync$default = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.eeu(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) : $super.eeu.call(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext);
  };
  protoOf(Verifier).z6r = function (jwt) {
    var tmp = Verifier$verifyJwsAsync$slambda_0(jwt, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).feu = function (_this__u8e3s4, dataToVerify, context) {
    var tmp = Verifier$runPolicyRequestAsync$slambda_0(_this__u8e3s4, dataToVerify, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).geu = function (jwt, policies, context) {
    var tmp = Verifier$verifyCredentialAsync$slambda_0(jwt, policies, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).verifyCredentialAsync$default = function (jwt, policies, context, $super) {
    context = context === VOID ? emptyMap() : context;
    return $super === VOID ? this.geu(jwt, policies, context) : $super.geu.call(this, jwt, policies, context);
  };
  var Verifier_instance;
  function Verifier_getInstance() {
    if (Verifier_instance == null)
      new Verifier();
    return Verifier_instance;
  }
  function PolicyRequest$Companion$$childSerializers$_anonymous__41h11v() {
    return Companion_getInstance_18().o4u();
  }
  function PolicyRequest$Companion$parsePolicyRequests$lambda$lambda(p) {
    return p.policy.name;
  }
  function PolicyRequest$Companion$parsePolicyRequests$lambda($idx, $policies) {
    return function () {
      var tmp = 'at index ' + $idx + ', after policies: ';
      return tmp + joinToString($policies, VOID, VOID, VOID, VOID, VOID, PolicyRequest$Companion$parsePolicyRequests$lambda$lambda);
    };
  }
  function Companion_14() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.heu_1 = [lazy(tmp_0, PolicyRequest$Companion$$childSerializers$_anonymous__41h11v), null];
  }
  protoOf(Companion_14).ieu = function (jsonElement, errorMessage) {
    var tmp;
    if (jsonElement instanceof JsonPrimitive_1) {
      tmp = new PolicyRequest(PolicyManager_getInstance().getPolicy(jsonElement.s4u()), null);
    } else {
      if (jsonElement instanceof JsonObject) {
        var tmp_0 = PolicyManager_getInstance();
        var tmp1_safe_receiver = jsonElement.bf('policy');
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonPrimitive(tmp1_safe_receiver);
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : get_contentOrNull(tmp2_safe_receiver);
        var tmp_1;
        if (tmp3_elvis_lhs == null) {
          var tmp_2;
          if (errorMessage == null) {
            tmp_2 = null;
          } else {
            // Inline function 'kotlin.let' call
            tmp_2 = ' (' + errorMessage() + ')';
          }
          throw IllegalArgumentException_init_$Create$('No policy found in policy' + (' definition' + tmp_2));
        } else {
          tmp_1 = tmp3_elvis_lhs;
        }
        tmp = new PolicyRequest(tmp_0.getPolicy(tmp_1), jsonElement.bf('args'));
      } else {
        var tmp_3;
        if (errorMessage == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_3 = ' (' + errorMessage() + ')';
        }
        throw IllegalArgumentException_init_$Create$('Unknown policy definition type, please provide a policy' + (' name or policy definition object' + tmp_3));
      }
    }
    return tmp;
  };
  protoOf(Companion_14).createFromJsonElement = function (jsonElement, errorMessage, $super) {
    errorMessage = errorMessage === VOID ? null : errorMessage;
    return $super === VOID ? this.ieu(jsonElement, errorMessage) : $super.ieu.call(this, jsonElement, errorMessage);
  };
  protoOf(Companion_14).parsePolicyRequests = function (_this__u8e3s4) {
    var policies = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = _this__u8e3s4.q();
    while (_iterator__ex2g4s.r()) {
      var item = _iterator__ex2g4s.s();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var idx = checkIndexOverflow(_unary__edvuaz);
      var tmp = Companion_getInstance_19();
      policies.n(tmp.createFromJsonElement(item, PolicyRequest$Companion$parsePolicyRequests$lambda(idx, policies)));
    }
    return policies;
  };
  protoOf(Companion_14).o4u = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_14();
    return Companion_instance_18;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.models.PolicyRequest', this, 2);
    tmp0_serialDesc.z2b('policy', false);
    tmp0_serialDesc.z2b('args', true);
    this.jeu_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).keu = function (encoder, value) {
    var tmp0_desc = this.jeu_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().heu_1;
    tmp1_output.a26(tmp0_desc, 0, tmp2_cached[0].c1(), value.policy);
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.args == null)) {
      tmp1_output.c26(tmp0_desc, 1, JsonElementSerializer_getInstance(), value.args);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_9).x20 = function (encoder, value) {
    return this.keu(encoder, value instanceof PolicyRequest ? value : THROW_CCE());
  };
  protoOf($serializer_9).y20 = function (decoder) {
    var tmp0_desc = this.jeu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.j24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_19().heu_1;
    if (tmp6_input.z24()) {
      tmp4_local0 = tmp6_input.v24(tmp0_desc, 0, tmp7_cached[0].c1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.x24(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.v24(tmp0_desc, 0, tmp7_cached[0].c1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.x24(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.k24(tmp0_desc);
    return PolicyRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_9).w20 = function () {
    return this.jeu_1;
  };
  protoOf($serializer_9).o2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_19().heu_1[0].c1(), get_nullable(JsonElementSerializer_getInstance())];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function PolicyRequest_init_$Init$(seen0, policy, args, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_9().jeu_1);
    }
    $this.policy = policy;
    if (0 === (seen0 & 2))
      $this.args = null;
    else
      $this.args = args;
    return $this;
  }
  function PolicyRequest_init_$Create$(seen0, policy, args, serializationConstructorMarker) {
    return PolicyRequest_init_$Init$(seen0, policy, args, serializationConstructorMarker, objectCreate(protoOf(PolicyRequest)));
  }
  function PolicyRequest(policy, args) {
    Companion_getInstance_19();
    args = args === VOID ? null : args;
    this.policy = policy;
    this.args = args;
  }
  protoOf(PolicyRequest).leu = function () {
    return this.policy;
  };
  protoOf(PolicyRequest).ndt = function () {
    return this.args;
  };
  protoOf(PolicyRequest).dc = function () {
    return this.policy;
  };
  protoOf(PolicyRequest).ec = function () {
    return this.args;
  };
  protoOf(PolicyRequest).meu = function (policy, args) {
    return new PolicyRequest(policy, args);
  };
  protoOf(PolicyRequest).copy = function (policy, args, $super) {
    policy = policy === VOID ? this.policy : policy;
    args = args === VOID ? this.args : args;
    return $super === VOID ? this.meu(policy, args) : $super.meu.call(this, policy, args);
  };
  protoOf(PolicyRequest).toString = function () {
    return 'PolicyRequest(policy=' + toString(this.policy) + ', args=' + toString_0(this.args) + ')';
  };
  protoOf(PolicyRequest).hashCode = function () {
    var result = hashCode(this.policy);
    result = imul(result, 31) + (this.args == null ? 0 : hashCode(this.args)) | 0;
    return result;
  };
  protoOf(PolicyRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PolicyRequest))
      return false;
    var tmp0_other_with_cast = other instanceof PolicyRequest ? other : THROW_CCE();
    if (!equals(this.policy, tmp0_other_with_cast.policy))
      return false;
    if (!equals(this.args, tmp0_other_with_cast.args))
      return false;
    return true;
  };
  function Companion_15() {
  }
  protoOf(Companion_15).o4u = function () {
    return PolicyResultSerializer_getInstance();
  };
  var Companion_instance_19;
  function Companion_getInstance_20() {
    return Companion_instance_19;
  }
  function PolicyResult(request, result) {
    this.request = request;
    this.result = result;
  }
  protoOf(PolicyResult).t3m = function () {
    return this.request;
  };
  protoOf(PolicyResult).neu = function () {
    return this.result;
  };
  protoOf(PolicyResult).isSuccess = function () {
    return _Result___get_isSuccess__impl__sndoy8(this.result);
  };
  protoOf(PolicyResult).dc = function () {
    return this.request;
  };
  protoOf(PolicyResult).oeu = function () {
    return this.result;
  };
  protoOf(PolicyResult).peu = function (request, result) {
    return new PolicyResult(request, result);
  };
  protoOf(PolicyResult).copy = function (request, result, $super) {
    request = request === VOID ? this.request : request;
    result = result === VOID ? this.result : result;
    return $super === VOID ? this.peu(request, result) : $super.peu.call(this, request, new Result(result));
  };
  protoOf(PolicyResult).toString = function () {
    return 'PolicyResult(request=' + this.request.toString() + ', result=' + Result__toString_impl_yu5r8k(this.result) + ')';
  };
  protoOf(PolicyResult).hashCode = function () {
    var result = this.request.hashCode();
    result = imul(result, 31) + Result__hashCode_impl_d2zufp(this.result) | 0;
    return result;
  };
  protoOf(PolicyResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PolicyResult))
      return false;
    var tmp0_other_with_cast = other instanceof PolicyResult ? other : THROW_CCE();
    if (!this.request.equals(tmp0_other_with_cast.request))
      return false;
    if (!equals(this.result, tmp0_other_with_cast.result))
      return false;
    return true;
  };
  function PolicyResultSerializer() {
    PolicyResultSerializer_instance = this;
    this.qeu_1 = Companion_instance_20.o4u().w20();
  }
  protoOf(PolicyResultSerializer).w20 = function () {
    return this.qeu_1;
  };
  protoOf(PolicyResultSerializer).reu = function (encoder, value) {
    var surrogate = PolicyResultSurrogate_init_$Create$(value);
    encoder.b26(Companion_instance_20.o4u(), surrogate);
  };
  protoOf(PolicyResultSerializer).x20 = function (encoder, value) {
    return this.reu(encoder, value instanceof PolicyResult ? value : THROW_CCE());
  };
  protoOf(PolicyResultSerializer).y20 = function (decoder) {
    throw UnsupportedOperationException_init_$Create$('only serialization is supported for PolicyResult');
  };
  var PolicyResultSerializer_instance;
  function PolicyResultSerializer_getInstance() {
    if (PolicyResultSerializer_instance == null)
      new PolicyResultSerializer();
    return PolicyResultSerializer_instance;
  }
  function PolicyResultSurrogate_init_$Init$(value, $this) {
    var tmp = value.request.policy.name;
    var tmp_0 = value.request.policy.description;
    var tmp_1 = _Result___get_isSuccess__impl__sndoy8(value.result);
    var tmp_2;
    if (_Result___get_isSuccess__impl__sndoy8(value.result)) {
      var tmp_3 = JsonUtils_getInstance();
      // Inline function 'kotlin.getOrThrow' call
      var this_0 = value.result;
      throwOnFailure(this_0);
      var tmp_4 = _Result___get_value__impl__bjfvqg(this_0);
      var tmp$ret$0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      tmp_2 = tmp_3.toJsonElement(tmp$ret$0);
    } else {
      tmp_2 = null;
    }
    var tmp_5 = tmp_2;
    var tmp_6;
    if (_Result___get_isFailure__impl__jpiriv(value.result)) {
      // Inline function 'kotlin.let' call
      var e = Result__exceptionOrNull_impl_p6xea9(value.result);
      var tmp_7;
      if (ensureNotNull(e) instanceof SerializableRuntimeException) {
        // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
        var this_1 = Default_getInstance();
        // Inline function 'kotlinx.serialization.serializer' call
        var this_2 = this_1.y24();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_3 = serializer(this_2, createKType(getKClass(SerializableRuntimeException), arrayOf([]), false));
        var tmp$ret$2 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
        tmp_7 = this_1.h4s(tmp$ret$2, e);
      } else {
        tmp_7 = JsonPrimitive_0(stackTraceToString(e));
      }
      tmp_6 = tmp_7;
    } else {
      tmp_6 = null;
    }
    PolicyResultSurrogate.call($this, tmp, tmp_0, value.request.args, tmp_1, tmp_5, tmp_6);
    return $this;
  }
  function PolicyResultSurrogate_init_$Create$(value) {
    return PolicyResultSurrogate_init_$Init$(value, objectCreate(protoOf(PolicyResultSurrogate)));
  }
  function Companion_16() {
  }
  protoOf(Companion_16).o4u = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_20;
  function Companion_getInstance_21() {
    return Companion_instance_20;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.models.PolicyResultSurrogate', this, 6);
    tmp0_serialDesc.z2b('policy', false);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('args', true);
    tmp0_serialDesc.z2b('is_success', false);
    tmp0_serialDesc.z2b('result', true);
    tmp0_serialDesc.z2b('error', true);
    this.seu_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).teu = function (encoder, value) {
    var tmp0_desc = this.seu_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    tmp1_output.y25(tmp0_desc, 0, value.ueu_1);
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.veu_1 == null)) {
      tmp1_output.c26(tmp0_desc, 1, StringSerializer_getInstance(), value.veu_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !(value.weu_1 == null)) {
      tmp1_output.c26(tmp0_desc, 2, JsonElementSerializer_getInstance(), value.weu_1);
    }
    tmp1_output.q25(tmp0_desc, 3, value.xeu_1);
    if (tmp1_output.g26(tmp0_desc, 4) ? true : !(value.yeu_1 == null)) {
      tmp1_output.c26(tmp0_desc, 4, JsonElementSerializer_getInstance(), value.yeu_1);
    }
    if (tmp1_output.g26(tmp0_desc, 5) ? true : !(value.zeu_1 == null)) {
      tmp1_output.c26(tmp0_desc, 5, JsonElementSerializer_getInstance(), value.zeu_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_10).x20 = function (encoder, value) {
    return this.teu(encoder, value instanceof PolicyResultSurrogate ? value : THROW_CCE());
  };
  protoOf($serializer_10).y20 = function (decoder) {
    var tmp0_desc = this.seu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.j24(tmp0_desc);
    if (tmp10_input.z24()) {
      tmp4_local0 = tmp10_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.x24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.x24(tmp0_desc, 2, JsonElementSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.l24(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.x24(tmp0_desc, 4, JsonElementSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.x24(tmp0_desc, 5, JsonElementSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.x24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.x24(tmp0_desc, 2, JsonElementSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.l24(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.x24(tmp0_desc, 4, JsonElementSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.x24(tmp0_desc, 5, JsonElementSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.k24(tmp0_desc);
    return PolicyResultSurrogate_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_10).w20 = function () {
    return this.seu_1;
  };
  protoOf($serializer_10).o2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(JsonElementSerializer_getInstance()), BooleanSerializer_getInstance(), get_nullable(JsonElementSerializer_getInstance()), get_nullable(JsonElementSerializer_getInstance())];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function PolicyResultSurrogate_init_$Init$_0(seen0, policy, description, args, isSuccess, result, error, serializationConstructorMarker, $this) {
    if (!(9 === (9 & seen0))) {
      throwMissingFieldException(seen0, 9, $serializer_getInstance_10().seu_1);
    }
    $this.ueu_1 = policy;
    if (0 === (seen0 & 2))
      $this.veu_1 = null;
    else
      $this.veu_1 = description;
    if (0 === (seen0 & 4))
      $this.weu_1 = null;
    else
      $this.weu_1 = args;
    $this.xeu_1 = isSuccess;
    if (0 === (seen0 & 16))
      $this.yeu_1 = null;
    else
      $this.yeu_1 = result;
    if (0 === (seen0 & 32))
      $this.zeu_1 = null;
    else
      $this.zeu_1 = error;
    // Inline function 'kotlin.check' call
    if (!(!($this.yeu_1 == null) || !($this.zeu_1 == null))) {
      var message = 'Either result or error has to exist in PolicyResult';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PolicyResultSurrogate_init_$Create$_0(seen0, policy, description, args, isSuccess, result, error, serializationConstructorMarker) {
    return PolicyResultSurrogate_init_$Init$_0(seen0, policy, description, args, isSuccess, result, error, serializationConstructorMarker, objectCreate(protoOf(PolicyResultSurrogate)));
  }
  function PolicyResultSurrogate(policy, description, args, isSuccess, result, error) {
    description = description === VOID ? null : description;
    args = args === VOID ? null : args;
    result = result === VOID ? null : result;
    error = error === VOID ? null : error;
    this.ueu_1 = policy;
    this.veu_1 = description;
    this.weu_1 = args;
    this.xeu_1 = isSuccess;
    this.yeu_1 = result;
    this.zeu_1 = error;
    // Inline function 'kotlin.check' call
    if (!(!(this.yeu_1 == null) || !(this.zeu_1 == null))) {
      var message = 'Either result or error has to exist in PolicyResult';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(PolicyResultSurrogate).toString = function () {
    return 'PolicyResultSurrogate(policy=' + this.ueu_1 + ', description=' + this.veu_1 + ', args=' + toString_0(this.weu_1) + ', isSuccess=' + this.xeu_1 + ', result=' + toString_0(this.yeu_1) + ', error=' + toString_0(this.zeu_1) + ')';
  };
  protoOf(PolicyResultSurrogate).hashCode = function () {
    var result = getStringHashCode(this.ueu_1);
    result = imul(result, 31) + (this.veu_1 == null ? 0 : getStringHashCode(this.veu_1)) | 0;
    result = imul(result, 31) + (this.weu_1 == null ? 0 : hashCode(this.weu_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.xeu_1) | 0;
    result = imul(result, 31) + (this.yeu_1 == null ? 0 : hashCode(this.yeu_1)) | 0;
    result = imul(result, 31) + (this.zeu_1 == null ? 0 : hashCode(this.zeu_1)) | 0;
    return result;
  };
  protoOf(PolicyResultSurrogate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PolicyResultSurrogate))
      return false;
    var tmp0_other_with_cast = other instanceof PolicyResultSurrogate ? other : THROW_CCE();
    if (!(this.ueu_1 === tmp0_other_with_cast.ueu_1))
      return false;
    if (!(this.veu_1 == tmp0_other_with_cast.veu_1))
      return false;
    if (!equals(this.weu_1, tmp0_other_with_cast.weu_1))
      return false;
    if (!(this.xeu_1 === tmp0_other_with_cast.xeu_1))
      return false;
    if (!equals(this.yeu_1, tmp0_other_with_cast.yeu_1))
      return false;
    if (!equals(this.zeu_1, tmp0_other_with_cast.zeu_1))
      return false;
    return true;
  };
  function PresentationResultEntry$Companion$$childSerializers$_anonymous__5uysnj() {
    return new ArrayListSerializer(PolicyResultSerializer_getInstance());
  }
  function Companion_17() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.aev_1 = [null, lazy(tmp_0, PresentationResultEntry$Companion$$childSerializers$_anonymous__5uysnj)];
  }
  protoOf(Companion_17).o4u = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_17();
    return Companion_instance_21;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.models.PresentationResultEntry', this, 2);
    tmp0_serialDesc.z2b('credential', false);
    tmp0_serialDesc.z2b('policyResults', true);
    this.bev_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).cev = function (encoder, value) {
    var tmp0_desc = this.bev_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().aev_1;
    tmp1_output.y25(tmp0_desc, 0, value.credential);
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !value.policyResults.equals(ArrayList_init_$Create$())) {
      tmp1_output.a26(tmp0_desc, 1, tmp2_cached[1].c1(), value.policyResults);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_11).x20 = function (encoder, value) {
    return this.cev(encoder, value instanceof PresentationResultEntry ? value : THROW_CCE());
  };
  protoOf($serializer_11).y20 = function (decoder) {
    var tmp0_desc = this.bev_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.j24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_22().aev_1;
    if (tmp6_input.z24()) {
      tmp4_local0 = tmp6_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, tmp7_cached[1].c1(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, tmp7_cached[1].c1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.k24(tmp0_desc);
    return PresentationResultEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).w20 = function () {
    return this.bev_1;
  };
  protoOf($serializer_11).o2c = function () {
    var tmp0_cached = Companion_getInstance_22().aev_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].c1()];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function PresentationResultEntry_init_$Init$(seen0, credential, policyResults, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_11().bev_1);
    }
    $this.credential = credential;
    if (0 === (seen0 & 2))
      $this.policyResults = ArrayList_init_$Create$();
    else
      $this.policyResults = policyResults;
    return $this;
  }
  function PresentationResultEntry_init_$Create$(seen0, credential, policyResults, serializationConstructorMarker) {
    return PresentationResultEntry_init_$Init$(seen0, credential, policyResults, serializationConstructorMarker, objectCreate(protoOf(PresentationResultEntry)));
  }
  function PresentationResultEntry(credential, policyResults) {
    Companion_getInstance_22();
    policyResults = policyResults === VOID ? ArrayList_init_$Create$() : policyResults;
    this.credential = credential;
    this.policyResults = policyResults;
  }
  protoOf(PresentationResultEntry).dev = function () {
    return this.credential;
  };
  protoOf(PresentationResultEntry).eev = function () {
    return this.policyResults;
  };
  protoOf(PresentationResultEntry).dc = function () {
    return this.credential;
  };
  protoOf(PresentationResultEntry).ec = function () {
    return this.policyResults;
  };
  protoOf(PresentationResultEntry).fev = function (credential, policyResults) {
    return new PresentationResultEntry(credential, policyResults);
  };
  protoOf(PresentationResultEntry).copy = function (credential, policyResults, $super) {
    credential = credential === VOID ? this.credential : credential;
    policyResults = policyResults === VOID ? this.policyResults : policyResults;
    return $super === VOID ? this.fev(credential, policyResults) : $super.fev.call(this, credential, policyResults);
  };
  protoOf(PresentationResultEntry).toString = function () {
    return 'PresentationResultEntry(credential=' + this.credential + ', policyResults=' + this.policyResults.toString() + ')';
  };
  protoOf(PresentationResultEntry).hashCode = function () {
    var result = getStringHashCode(this.credential);
    result = imul(result, 31) + this.policyResults.hashCode() | 0;
    return result;
  };
  protoOf(PresentationResultEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PresentationResultEntry))
      return false;
    var tmp0_other_with_cast = other instanceof PresentationResultEntry ? other : THROW_CCE();
    if (!(this.credential === tmp0_other_with_cast.credential))
      return false;
    if (!this.policyResults.equals(tmp0_other_with_cast.policyResults))
      return false;
    return true;
  };
  function PresentationVerificationResponse$Companion$$childSerializers$_anonymous__ebm1l8() {
    return new ArrayListSerializer($serializer_getInstance_11());
  }
  function Companion_18() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.gev_1 = [lazy(tmp_0, PresentationVerificationResponse$Companion$$childSerializers$_anonymous__ebm1l8), null, null];
  }
  protoOf(Companion_18).o4u = function () {
    return $serializer_getInstance_12();
  };
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_18();
    return Companion_instance_22;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.models.PresentationVerificationResponse', this, 3);
    tmp0_serialDesc.z2b('results', false);
    tmp0_serialDesc.z2b('time', false);
    tmp0_serialDesc.z2b('policiesRun', false);
    this.hev_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).iev = function (encoder, value) {
    var tmp0_desc = this.hev_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().gev_1;
    tmp1_output.a26(tmp0_desc, 0, tmp2_cached[0].c1(), value.results);
    tmp1_output.a26(tmp0_desc, 1, DurationSerializer_getInstance(), new Duration(value.time));
    tmp1_output.t25(tmp0_desc, 2, value.policiesRun);
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_12).x20 = function (encoder, value) {
    return this.iev(encoder, value instanceof PresentationVerificationResponse ? value : THROW_CCE());
  };
  protoOf($serializer_12).y20 = function (decoder) {
    var tmp0_desc = this.hev_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_23().gev_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, tmp8_cached[0].c1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp5_local1;
      var tmp_1 = tmp7_input.v24(tmp0_desc, 1, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp5_local1 = tmp_1 == null ? null : tmp_1.hg_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.o24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, tmp8_cached[0].c1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp5_local1;
            var tmp_4 = tmp7_input.v24(tmp0_desc, 1, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp5_local1 = tmp_4 == null ? null : tmp_4.hg_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.o24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return PresentationVerificationResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_12).w20 = function () {
    return this.hev_1;
  };
  protoOf($serializer_12).o2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_23().gev_1[0].c1(), DurationSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function PresentationVerificationResponse_init_$Init$(seen0, results, time, policiesRun, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_12().hev_1);
    }
    $this.results = results;
    $this.time = time;
    $this.policiesRun = policiesRun;
    return $this;
  }
  function PresentationVerificationResponse_init_$Create$(seen0, results, time, policiesRun, serializationConstructorMarker) {
    return PresentationVerificationResponse_init_$Init$(seen0, results, time, policiesRun, serializationConstructorMarker, objectCreate(protoOf(PresentationVerificationResponse)));
  }
  function PresentationVerificationResponse(results, time, policiesRun) {
    Companion_getInstance_23();
    this.results = results;
    this.time = time;
    this.policiesRun = policiesRun;
  }
  protoOf(PresentationVerificationResponse).jdt = function () {
    return this.results;
  };
  protoOf(PresentationVerificationResponse).jev = function () {
    return this.time;
  };
  protoOf(PresentationVerificationResponse).kev = function () {
    return this.policiesRun;
  };
  protoOf(PresentationVerificationResponse).overallSuccess = function () {
    var tmp0 = this.results;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(tmp0, Collection)) {
        tmp = tmp0.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      var _iterator__ex2g4s = tmp0.q();
      while (_iterator__ex2g4s.r()) {
        var element = _iterator__ex2g4s.s();
        var tmp0_0 = element.policyResults;
        var tmp$ret$1;
        $l$block_1: {
          // Inline function 'kotlin.collections.all' call
          var tmp_0;
          if (isInterface(tmp0_0, Collection)) {
            tmp_0 = tmp0_0.h();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = true;
            break $l$block_1;
          }
          var _iterator__ex2g4s_0 = tmp0_0.q();
          while (_iterator__ex2g4s_0.r()) {
            var element_0 = _iterator__ex2g4s_0.s();
            if (!element_0.isSuccess()) {
              tmp$ret$1 = false;
              break $l$block_1;
            }
          }
          tmp$ret$1 = true;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PresentationVerificationResponse).policiesFailed = function () {
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = this.results;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var list = element.policyResults;
      addAll(destination, list);
    }
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp;
      if (isInterface(destination, Collection)) {
        tmp = destination.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$3 = 0;
        break $l$block;
      }
      var count = 0;
      var _iterator__ex2g4s_0 = destination.q();
      while (_iterator__ex2g4s_0.r()) {
        var element_0 = _iterator__ex2g4s_0.s();
        if (!element_0.isSuccess()) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$3 = count;
    }
    return tmp$ret$3;
  };
  protoOf(PresentationVerificationResponse).policiesSucceeded = function () {
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0 = this.results;
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tmp0.q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var list = element.policyResults;
      addAll(destination, list);
    }
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp;
      if (isInterface(destination, Collection)) {
        tmp = destination.h();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$3 = 0;
        break $l$block;
      }
      var count = 0;
      var _iterator__ex2g4s_0 = destination.q();
      while (_iterator__ex2g4s_0.r()) {
        var element_0 = _iterator__ex2g4s_0.s();
        if (element_0.isSuccess()) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$3 = count;
    }
    return tmp$ret$3;
  };
  protoOf(PresentationVerificationResponse).dc = function () {
    return this.results;
  };
  protoOf(PresentationVerificationResponse).lev = function () {
    return this.time;
  };
  protoOf(PresentationVerificationResponse).aq = function () {
    return this.policiesRun;
  };
  protoOf(PresentationVerificationResponse).mev = function (results, time, policiesRun) {
    return new PresentationVerificationResponse(results, time, policiesRun);
  };
  protoOf(PresentationVerificationResponse).copy = function (results, time, policiesRun, $super) {
    results = results === VOID ? this.results : results;
    time = time === VOID ? this.time : time;
    policiesRun = policiesRun === VOID ? this.policiesRun : policiesRun;
    return $super === VOID ? this.mev(results, time, policiesRun) : $super.mev.call(this, results, new Duration(time), policiesRun);
  };
  protoOf(PresentationVerificationResponse).toString = function () {
    return 'PresentationVerificationResponse(results=' + this.results.toString() + ', time=' + Duration__toString_impl_8d916b(this.time) + ', policiesRun=' + this.policiesRun + ')';
  };
  protoOf(PresentationVerificationResponse).hashCode = function () {
    var result = this.results.hashCode();
    result = imul(result, 31) + Duration__hashCode_impl_u4exz6(this.time) | 0;
    result = imul(result, 31) + this.policiesRun | 0;
    return result;
  };
  protoOf(PresentationVerificationResponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PresentationVerificationResponse))
      return false;
    var tmp0_other_with_cast = other instanceof PresentationVerificationResponse ? other : THROW_CCE();
    if (!this.results.equals(tmp0_other_with_cast.results))
      return false;
    if (!equals(this.time, tmp0_other_with_cast.time))
      return false;
    if (!(this.policiesRun === tmp0_other_with_cast.policiesRun))
      return false;
    return true;
  };
  function AllowedIssuerPolicy$Companion$$childSerializers$_anonymous__7zdcgn() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function Companion_19() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.nev_1 = [null, null, lazy(tmp_0, AllowedIssuerPolicy$Companion$$childSerializers$_anonymous__7zdcgn)];
  }
  protoOf(Companion_19).o4u = function () {
    return $serializer_getInstance_13();
  };
  var Companion_instance_23;
  function Companion_getInstance_24() {
    if (Companion_instance_23 == null)
      new Companion_19();
    return Companion_instance_23;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.AllowedIssuerPolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.oev_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).pev = function (encoder, value) {
    var tmp0_desc = this.oev_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().nev_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.qev_1 === 'allowed-issuer')) {
      tmp1_output.y25(tmp0_desc, 0, value.qev_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.rev_1 === 'Checks that the issuer of the credential is present in the supplied list.')) {
      tmp1_output.y25(tmp0_desc, 1, value.rev_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.sev_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.sev_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_13).x20 = function (encoder, value) {
    return this.pev(encoder, value instanceof AllowedIssuerPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_13).y20 = function (decoder) {
    var tmp0_desc = this.oev_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_24().nev_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return AllowedIssuerPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_13).w20 = function () {
    return this.oev_1;
  };
  protoOf($serializer_13).o2c = function () {
    var tmp0_cached = Companion_getInstance_24().nev_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function AllowedIssuerPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().oev_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.qev_1 = 'allowed-issuer';
    else
      $this.qev_1 = name;
    if (0 === (seen0 & 2))
      $this.rev_1 = 'Checks that the issuer of the credential is present in the supplied list.';
    else
      $this.rev_1 = description;
    if (0 === (seen0 & 4))
      $this.sev_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
    else
      $this.sev_1 = supportedVCFormats;
    return $this;
  }
  function AllowedIssuerPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return AllowedIssuerPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(AllowedIssuerPolicy)));
  }
  function AllowedIssuerPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.bew_1 = this$0;
    this.cew_1 = $data;
    this.dew_1 = $args;
    this.eew_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AllowedIssuerPolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AllowedIssuerPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(AllowedIssuerPolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.bew_1.mea(this.cew_1, this.dew_1, this.eew_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AllowedIssuerPolicy$verifyAsync$slambda).ja = function (completion) {
    return new AllowedIssuerPolicy$verifyAsync$slambda(this.bew_1, this.cew_1, this.dew_1, this.eew_1, completion);
  };
  function AllowedIssuerPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new AllowedIssuerPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AllowedIssuerPolicy() {
    Companion_getInstance_24();
    CredentialWrapperValidatorPolicy.call(this);
    this.qev_1 = 'allowed-issuer';
    this.rev_1 = 'Checks that the issuer of the credential is present in the supplied list.';
    this.sev_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
  }
  protoOf(AllowedIssuerPolicy).v2 = function () {
    return this.qev_1;
  };
  protoOf(AllowedIssuerPolicy).zat = function () {
    return this.rev_1;
  };
  protoOf(AllowedIssuerPolicy).oea = function () {
    return this.sev_1;
  };
  protoOf(AllowedIssuerPolicy).mea = function (data, args, context, $completion) {
    var tmp;
    if (args instanceof JsonPrimitive_1) {
      tmp = listOf(args.s4u());
    } else {
      if (args instanceof JsonArray) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(args, 10));
        var _iterator__ex2g4s = args.q();
        while (_iterator__ex2g4s.r()) {
          var item = _iterator__ex2g4s.s();
          var tmp$ret$0 = get_jsonPrimitive(item).s4u();
          destination.n(tmp$ret$0);
        }
        tmp = destination;
      } else {
        throw IllegalArgumentException_init_$Create$('Invalid argument, please provide a single allowed issuer, or an list of allowed issuers.');
      }
    }
    var allowedIssuers = tmp;
    var tmp1_safe_receiver = data.bf('iss');
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonPrimitive(tmp1_safe_receiver);
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s4u();
    var tmp_0;
    if (tmp3_elvis_lhs == null) {
      var tmp4_safe_receiver = data.bf('issuer');
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : get_jsonPrimitive(tmp4_safe_receiver);
      tmp_0 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.s4u();
    } else {
      tmp_0 = tmp3_elvis_lhs;
    }
    var tmp6_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp6_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No issuer found in credential: ' + data.toString());
    } else {
      tmp_1 = tmp6_elvis_lhs;
    }
    var issuer = tmp_1;
    var tmp_2;
    if (allowedIssuers.x(issuer)) {
      // Inline function 'kotlin.Companion.success' call
      tmp_2 = _Result___init__impl__xyqfz8(issuer);
    } else {
      // Inline function 'kotlin.Companion.failure' call
      var exception = new NotAllowedIssuerException(issuer, allowedIssuers);
      tmp_2 = _Result___init__impl__xyqfz8(createFailure(exception));
    }
    return new Result(tmp_2);
  };
  protoOf(AllowedIssuerPolicy).nea = function (data, args, context) {
    var tmp = AllowedIssuerPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function get_logger() {
    _init_properties_DynamicPolicy_kt__m8kkm7();
    return logger;
  }
  var logger;
  function DynamicPolicy$Companion$$childSerializers$_anonymous__2el2jd() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function DynamicPolicy$Companion$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.r3l(tmp, DynamicPolicy$Companion$http$lambda$lambda);
    return Unit_instance;
  }
  function DynamicPolicy$Companion$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function Companion_20() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.few_1 = [null, null, lazy(tmp_0, DynamicPolicy$Companion$$childSerializers$_anonymous__2el2jd)];
    this.gew_1 = 1000000;
    this.hew_1 = 64;
    var tmp_1 = this;
    tmp_1.iew_1 = HttpClient(DynamicPolicy$Companion$http$lambda);
  }
  protoOf(Companion_20).o4u = function () {
    return $serializer_getInstance_14();
  };
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_20();
    return Companion_instance_24;
  }
  function cleanCode($this, input) {
    var tmp = split(replace(input, '\r\n', '\n'), ['\n']);
    return joinToString(tmp, '\n', VOID, VOID, VOID, VOID, DynamicPolicy$cleanCode$lambda);
  }
  function validatePolicyName($this, policyName) {
    // Inline function 'kotlin.text.matches' call
    // Inline function 'kotlin.require' call
    if (!Regex_init_$Create$('^[a-zA-Z]+$').se(policyName)) {
      var message = 'Policy name contains invalid characters.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(policyName.length <= 64)) {
      var message_0 = 'Policy name exceeds maximum length of 64 characters';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function validateRegoCode($this, regoCode) {
    // Inline function 'kotlin.text.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!(charSequenceLength(regoCode) > 0)) {
      var message = 'Rego code cannot be empty';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(regoCode.length <= 1000000)) {
      var message_0 = 'Rego code exceeds maximum allowed size of 1000000 bytes';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function parseConfig($this, args) {
    // Inline function 'kotlin.require' call
    if (!(args instanceof JsonObject)) {
      var message = 'Args must be a JsonObject';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_safe_receiver = args.bf('rules');
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$("The 'rules' field is required.");
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var rules = tmp;
    var tmp2_safe_receiver = args.bf('policy_name');
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.s4u();
    var tmp_0;
    if (tmp4_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$("The 'policy_name' field is required.");
    } else {
      tmp_0 = tmp4_elvis_lhs;
    }
    var policyName = tmp_0;
    var tmp5_safe_receiver = args.bf('argument');
    var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : get_jsonObject(tmp5_safe_receiver);
    var tmp_1;
    if (tmp6_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$("The 'argument' field is required.");
    } else {
      tmp_1 = tmp6_elvis_lhs;
    }
    var argument = tmp_1;
    var tmp7_safe_receiver = args.bf('opa_server');
    var tmp8_safe_receiver = tmp7_safe_receiver == null ? null : get_jsonPrimitive(tmp7_safe_receiver);
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.s4u();
    var tmp_2 = tmp9_elvis_lhs == null ? 'http://localhost:8181' : tmp9_elvis_lhs;
    var tmp10_safe_receiver = args.bf('policy_query');
    var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : get_jsonPrimitive(tmp10_safe_receiver);
    var tmp12_elvis_lhs = tmp11_safe_receiver == null ? null : tmp11_safe_receiver.s4u();
    var tmp_3 = tmp12_elvis_lhs == null ? 'vc/verification' : tmp12_elvis_lhs;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(rules.t()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = rules.a1().q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var tmp_4 = element.b1();
      var tmp$ret$3 = get_jsonPrimitive(element.c1()).s4u();
      destination.q2(tmp_4, tmp$ret$3);
    }
    var tmp_5 = destination;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$(mapCapacity(argument.t()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = argument.a1().q();
    while (_iterator__ex2g4s_0.r()) {
      var element_0 = _iterator__ex2g4s_0.s();
      var tmp_6 = element_0.b1();
      var tmp$ret$8 = get_jsonPrimitive(element_0.c1()).s4u();
      destination_0.q2(tmp_6, tmp$ret$8);
    }
    return new DynamicPolicyConfig(tmp_2, tmp_3, policyName, tmp_5, destination_0);
  }
  function getRegoCode($this, config, $completion) {
    var tmp = new $getRegoCodeCOROUTINE$6($this, config, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function uploadPolicy($this, opaServer, policyName, regoCode, $completion) {
    var tmp = new $uploadPolicyCOROUTINE$7($this, opaServer, policyName, regoCode, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function deletePolicy($this, opaServer, policyName, $completion) {
    var tmp = new $deletePolicyCOROUTINE$8($this, opaServer, policyName, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function verifyPolicy($this, config, data, $completion) {
    var tmp = new $verifyPolicyCOROUTINE$9($this, config, data, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function toMap($this, _this__u8e3s4) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(_this__u8e3s4.t()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = _this__u8e3s4.a1().q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var tmp = element.b1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.c1();
      var tmp_0;
      if (value instanceof JsonPrimitive_1) {
        tmp_0 = value.s4u();
      } else {
        if (value instanceof JsonObject) {
          tmp_0 = toMap($this, value);
        } else {
          tmp_0 = value;
        }
      }
      var tmp$ret$2 = tmp_0;
      destination.q2(tmp, tmp$ret$2);
    }
    return destination;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.DynamicPolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.sf0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).tf0 = function (encoder, value) {
    var tmp0_desc = this.sf0_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().few_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.uf0_1 === 'dynamic')) {
      tmp1_output.y25(tmp0_desc, 0, value.uf0_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.vf0_1 === 'A dynamic policy that can be used to implement custom verification logic.')) {
      tmp1_output.y25(tmp0_desc, 1, value.vf0_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.wf0_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.wf0_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_14).x20 = function (encoder, value) {
    return this.tf0(encoder, value instanceof DynamicPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_14).y20 = function (decoder) {
    var tmp0_desc = this.sf0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_25().few_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return DynamicPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_14).w20 = function () {
    return this.sf0_1;
  };
  protoOf($serializer_14).o2c = function () {
    var tmp0_cached = Companion_getInstance_25().few_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function DynamicPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().sf0_1);
    }
    CredentialDataValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.uf0_1 = 'dynamic';
    else
      $this.uf0_1 = name;
    if (0 === (seen0 & 2))
      $this.vf0_1 = 'A dynamic policy that can be used to implement custom verification logic.';
    else
      $this.vf0_1 = description;
    if (0 === (seen0 & 4))
      $this.wf0_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
    else
      $this.wf0_1 = supportedVCFormats;
    return $this;
  }
  function DynamicPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return DynamicPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(DynamicPolicy)));
  }
  function DynamicPolicy$cleanCode$lambda(it) {
    // Inline function 'kotlin.text.trim' call
    return toString(trim(isCharSequence(it) ? it : THROW_CCE()));
  }
  function DynamicPolicy$getRegoCode$lambda($policyUrl) {
    return function () {
      return 'Fetching rego code from URL: ' + $policyUrl;
    };
  }
  function DynamicPolicy$getRegoCode$lambda_0($policyUrl) {
    return function () {
      return 'Failed to fetch rego code from URL: ' + $policyUrl;
    };
  }
  function DynamicPolicy$uploadPolicy$lambda($policyName) {
    return function () {
      return 'Uploading policy to OPA server: ' + $policyName;
    };
  }
  function DynamicPolicy$uploadPolicy$lambda_0($response) {
    return function () {
      return 'Failed to upload policy: ' + $response.r37().toString();
    };
  }
  function DynamicPolicy$uploadPolicy$lambda_1() {
    return 'Failed to upload policy';
  }
  function DynamicPolicy$deletePolicy$lambda($policyName) {
    return function () {
      return 'Deleting policy from OPA server: ' + $policyName;
    };
  }
  function DynamicPolicy$deletePolicy$lambda_0() {
    return 'Failed to delete policy';
  }
  function DynamicPolicy$verifyPolicy$lambda($config) {
    return function () {
      return 'Verifying policy: ' + $config.zf0_1;
    };
  }
  function DynamicPolicy$verifyPolicy$lambda_0() {
    return 'Policy verification failed';
  }
  function DynamicPolicy$verify$lambda() {
    return 'Starting policy verification process';
  }
  function DynamicPolicy$verify$lambda_0() {
    return 'Policy verification failed';
  }
  function DynamicPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.kf1_1 = this$0;
    this.lf1_1 = $data;
    this.mf1_1 = $args;
    this.nf1_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DynamicPolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DynamicPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(DynamicPolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.kf1_1.mea(this.lf1_1, this.mf1_1, this.nf1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DynamicPolicy$verifyAsync$slambda).ja = function (completion) {
    return new DynamicPolicy$verifyAsync$slambda(this.kf1_1, this.lf1_1, this.mf1_1, this.nf1_1, completion);
  };
  function DynamicPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new DynamicPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getRegoCodeCOROUTINE$6(_this__u8e3s4, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rew_1 = _this__u8e3s4;
    this.sew_1 = config;
  }
  protoOf($getRegoCodeCOROUTINE$6).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.tew_1 = this.sew_1.af1_1.n2('rego');
            this.uew_1 = this.sew_1.af1_1.n2('policy_url');
            if (!(this.uew_1 == null)) {
              var tmp_0 = get_logger();
              tmp_0.u6g(DynamicPolicy$getRegoCode$lambda(this.uew_1));
              this.o9_1 = 3;
              var tmp_1 = this;
              tmp_1.xew_1 = Companion_getInstance_25().iew_1;
              var tmp_2 = this;
              tmp_2.yew_1 = this.uew_1;
              this.zew_1 = this.xew_1;
              this.aex_1 = this.yew_1;
              var tmp_3 = this;
              tmp_3.bex_1 = this.zew_1;
              this.cex_1 = this.bex_1;
              var tmp_4 = this;
              tmp_4.dex_1 = this.cex_1;
              var tmp_5 = this;
              var this_0 = new HttpRequestBuilder();
              url(this_0, this.aex_1);
              tmp_5.eex_1 = this_0;
              this.fex_1 = this.dex_1;
              this.gex_1 = this.eex_1;
              this.gex_1.l3k_1 = Companion_getInstance_2().e32_1;
              var tmp_6 = this;
              tmp_6.hex_1 = this.fex_1;
              var tmp_7 = this;
              tmp_7.iex_1 = this.gex_1;
              this.jex_1 = this.hex_1;
              this.kex_1 = this.iex_1;
              this.n9_1 = 1;
              suspendResult = (new HttpStatement(this.kex_1, this.jex_1)).t4l(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!(this.tew_1 == null)) {
                this.vew_1 = cleanCode(this.rew_1, this.tew_1);
                this.n9_1 = 5;
                continue $sm;
              } else {
                var tmp_8 = this;
                throw IllegalArgumentException_init_$Create$("Either 'rego' or 'policy_url' must be provided in rules");
              }
            }

          case 1:
            this.lex_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.lex_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.wew_1 = cleanCode(this.rew_1, ARGUMENT);
            this.o9_1 = 6;
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.o9_1 = 6;
            var tmp_9 = this.q9_1;
            if (tmp_9 instanceof Exception) {
              var e = this.q9_1;
              var tmp_10 = this;
              var tmp_11 = get_logger();
              tmp_11.x6g(e, DynamicPolicy$getRegoCode$lambda_0(this.uew_1));
              throw new DynamicPolicyException('Failed to fetch rego code: ' + e.message);
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 6;
            this.vew_1 = this.wew_1;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            return this.vew_1;
          case 6:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 6) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function $uploadPolicyCOROUTINE$7(_this__u8e3s4, opaServer, policyName, regoCode, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.uex_1 = _this__u8e3s4;
    this.vex_1 = opaServer;
    this.wex_1 = policyName;
    this.xex_1 = regoCode;
  }
  protoOf($uploadPolicyCOROUTINE$7).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.o9_1 = 2;
            var tmp_0 = get_logger();
            tmp_0.u6g(DynamicPolicy$uploadPolicy$lambda(this.wex_1));
            var tmp_1 = this;
            tmp_1.zex_1 = Companion_getInstance_25().iew_1;
            var tmp_2 = this;
            tmp_2.aey_1 = this.vex_1 + '/v1/policies/' + this.wex_1;
            this.bey_1 = this.zex_1;
            this.cey_1 = this.aey_1;
            var tmp_3 = this;
            tmp_3.dey_1 = this.bey_1;
            this.eey_1 = this.dey_1;
            var tmp_4 = this;
            tmp_4.fey_1 = this.eey_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.cey_1);
            contentType(this_0, Text_getInstance().g2x_1);
            var body = this.xex_1;
            if (body == null) {
              this_0.n3k_1 = NullBody_instance;
              var tmp_6 = PrimitiveClasses_getInstance().nd();
              var tmp_7;
              try {
                tmp_7 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
              } catch ($p) {
                var tmp_8;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_8 = null;
                } else {
                  throw $p;
                }
                tmp_7 = tmp_8;
              }
              this_0.g3q(new TypeInfo(tmp_6, tmp_7));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.n3k_1 = body;
                this_0.g3q(null);
              } else {
                this_0.n3k_1 = body;
                var tmp_9 = PrimitiveClasses_getInstance().nd();
                var tmp_10;
                try {
                  tmp_10 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_11;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_11 = null;
                  } else {
                    throw $p;
                  }
                  tmp_10 = tmp_11;
                }
                this_0.g3q(new TypeInfo(tmp_9, tmp_10));
              }
            }

            tmp_5.gey_1 = this_0;
            this.hey_1 = this.fey_1;
            this.iey_1 = this.gey_1;
            this.iey_1.l3k_1 = Companion_getInstance_2().g32_1;
            var tmp_12 = this;
            tmp_12.jey_1 = this.hey_1;
            var tmp_13 = this;
            tmp_13.ley_1 = this.iey_1;
            this.mey_1 = this.jey_1;
            this.ney_1 = this.ley_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.ney_1, this.mey_1)).t4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            var tmp_14 = this;
            var tmp_15;
            if (!isSuccess(response.r37())) {
              var tmp_16 = get_logger();
              tmp_16.w6g(DynamicPolicy$uploadPolicy$lambda_0(response));
              var exception = new DynamicPolicyException('Failed to upload policy: ' + response.r37().toString());
              tmp_15 = _Result___init__impl__xyqfz8(createFailure(exception));
            } else {
              tmp_15 = _Result___init__impl__xyqfz8(Unit_instance);
            }

            tmp_14.yex_1 = tmp_15;
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_17 = this.q9_1;
            if (tmp_17 instanceof Exception) {
              var e = this.q9_1;
              var tmp_18 = this;
              var tmp_19 = get_logger();
              tmp_19.x6g(e, DynamicPolicy$uploadPolicy$lambda_1);
              var exception_0 = new DynamicPolicyException('Failed to upload policy: ' + e.message);
              tmp_18.yex_1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.yex_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 3) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function $deletePolicyCOROUTINE$8(_this__u8e3s4, opaServer, policyName, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wey_1 = _this__u8e3s4;
    this.xey_1 = opaServer;
    this.yey_1 = policyName;
  }
  protoOf($deletePolicyCOROUTINE$8).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.o9_1 = 2;
            var tmp_0 = get_logger();
            tmp_0.u6g(DynamicPolicy$deletePolicy$lambda(this.yey_1));
            var tmp_1 = this;
            tmp_1.aez_1 = Companion_getInstance_25().iew_1;
            var tmp_2 = this;
            tmp_2.bez_1 = this.xey_1 + '/v1/policies/' + this.yey_1;
            this.cez_1 = this.aez_1;
            this.dez_1 = this.bez_1;
            var tmp_3 = this;
            tmp_3.eez_1 = this.cez_1;
            this.fez_1 = this.eez_1;
            var tmp_4 = this;
            tmp_4.gez_1 = this.fez_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.dez_1);
            tmp_5.hez_1 = this_0;
            this.iez_1 = this.gez_1;
            this.jez_1 = this.hez_1;
            this.jez_1.l3k_1 = Companion_getInstance_2().i32_1;
            var tmp_6 = this;
            tmp_6.kez_1 = this.iez_1;
            var tmp_7 = this;
            tmp_7.lez_1 = this.jez_1;
            this.mez_1 = this.kez_1;
            this.nez_1 = this.lez_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.nez_1, this.mez_1)).t4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.zey_1 = suspendResult;
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_8 = this.q9_1;
            if (tmp_8 instanceof Exception) {
              var e = this.q9_1;
              var tmp_9 = this;
              var tmp_10 = get_logger();
              tmp_10.x6g(e, DynamicPolicy$deletePolicy$lambda_0);
              tmp_9.zey_1 = Unit_instance;
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return Unit_instance;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 3) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function $verifyPolicyCOROUTINE$9(_this__u8e3s4, config, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wez_1 = _this__u8e3s4;
    this.xez_1 = config;
    this.yez_1 = data;
  }
  protoOf($verifyPolicyCOROUTINE$9).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.o9_1 = 3;
            var tmp_0 = get_logger();
            tmp_0.u6g(DynamicPolicy$verifyPolicy$lambda(this.xez_1));
            this.af0_1 = JsonUtils_getInstance().toJsonObject(mapOf_0([to('parameter', this.xez_1.bf1_1), to('credentialData', toMap(this.wez_1, this.yez_1))]));
            var tmp_1 = this;
            tmp_1.bf0_1 = Companion_getInstance_25().iew_1;
            var tmp_2 = this;
            tmp_2.cf0_1 = this.xez_1.xf0_1 + '/v1/data/' + this.xez_1.yf0_1 + '/' + this.xez_1.zf0_1;
            this.df0_1 = this.bf0_1;
            this.ef0_1 = this.cf0_1;
            var tmp_3 = this;
            tmp_3.ff0_1 = this.df0_1;
            this.gf0_1 = this.ff0_1;
            var tmp_4 = this;
            tmp_4.hf0_1 = this.gf0_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.ef0_1);
            contentType(this_0, Application_getInstance().a2w_1);
            var body = mapOf(to('input', this.af0_1));
            if (body == null) {
              this_0.n3k_1 = NullBody_instance;
              var tmp_6 = getKClass(KtMap);
              var tmp_7;
              try {
                tmp_7 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonObject), arrayOf([]), false))]), false);
              } catch ($p) {
                var tmp_8;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_8 = null;
                } else {
                  throw $p;
                }
                tmp_7 = tmp_8;
              }
              this_0.g3q(new TypeInfo(tmp_6, tmp_7));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.n3k_1 = body;
                this_0.g3q(null);
              } else {
                this_0.n3k_1 = body;
                var tmp_9 = getKClass(KtMap);
                var tmp_10;
                try {
                  tmp_10 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonObject), arrayOf([]), false))]), false);
                } catch ($p) {
                  var tmp_11;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_11 = null;
                  } else {
                    throw $p;
                  }
                  tmp_10 = tmp_11;
                }
                this_0.g3q(new TypeInfo(tmp_9, tmp_10));
              }
            }

            tmp_5.if0_1 = this_0;
            this.jf0_1 = this.hf0_1;
            this.kf0_1 = this.if0_1;
            this.kf0_1.l3k_1 = Companion_getInstance_2().f32_1;
            var tmp_12 = this;
            tmp_12.lf0_1 = this.jf0_1;
            var tmp_13 = this;
            tmp_13.mf0_1 = this.kf0_1;
            this.nf0_1 = this.lf0_1;
            this.of0_1 = this.mf0_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.of0_1, this.nf0_1)).t4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.pf0_1 = suspendResult;
            var tmp_14 = this;
            tmp_14.qf0_1 = this.pf0_1;
            this.rf0_1 = this.qf0_1;
            this.n9_1 = 2;
            var tmp_15 = this.rf0_1.s3n();
            var tmp_16 = getKClass(JsonObject);
            var tmp_17;
            try {
              tmp_17 = createKType(getKClass(JsonObject), arrayOf([]), false);
            } catch ($p) {
              var tmp_18;
              if ($p instanceof Error) {
                var _unused_var__etf5q3_1 = $p;
                tmp_18 = null;
              } else {
                throw $p;
              }
              tmp_17 = tmp_18;
            }

            suspendResult = tmp_15.v3m(new TypeInfo(tmp_16, tmp_17), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp0_safe_receiver = ARGUMENT.bf('result');
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp_19;
            if (tmp1_elvis_lhs == null) {
              throw new DynamicPolicyException('Invalid response from OPA server');
            } else {
              tmp_19 = tmp1_elvis_lhs;
            }

            var result = tmp_19;
            var tmp_20 = this;
            tmp_20.zez_1 = _Result___init__impl__xyqfz8(result);
            this.o9_1 = 4;
            this.n9_1 = 5;
            continue $sm;
          case 3:
            this.o9_1 = 4;
            var tmp_21 = this.q9_1;
            if (tmp_21 instanceof Exception) {
              var e = this.q9_1;
              var tmp_22 = this;
              var tmp_23 = get_logger();
              tmp_23.x6g(e, DynamicPolicy$verifyPolicy$lambda_0);
              var exception = new DynamicPolicyException('Policy verification failed: ' + e.message);
              tmp_22.zez_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 5;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            throw this.q9_1;
          case 5:
            this.o9_1 = 4;
            return new Result(this.zez_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 4) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  function $verifyCOROUTINE$10(_this__u8e3s4, data, args, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wf1_1 = _this__u8e3s4;
    this.xf1_1 = data;
    this.yf1_1 = args;
    this.zf1_1 = context;
  }
  protoOf($verifyCOROUTINE$10).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 15;
            this.n9_1 = 1;
            continue $sm;
          case 1:
            this.o9_1 = 8;
            this.o9_1 = 7;
            var tmp_0 = get_logger();
            tmp_0.u6g(DynamicPolicy$verify$lambda);
            this.bf2_1 = parseConfig(this.wf1_1, this.yf1_1);
            validatePolicyName(this.wf1_1, this.bf2_1.zf0_1);
            this.n9_1 = 2;
            suspendResult = getRegoCode(this.wf1_1, this.bf2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.cf2_1 = suspendResult;
            validateRegoCode(this.wf1_1, this.cf2_1);
            this.n9_1 = 3;
            suspendResult = uploadPolicy(this.wf1_1, this.bf2_1.xf0_1, this.bf2_1.zf0_1, this.cf2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.df2_1 = suspendResult.wp_1;
            suspendResult = new Result(this.df2_1);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.ef2_1 = suspendResult.wp_1;
            var this_0 = this.ef2_1;
            throwOnFailure(this_0);
            var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
            if (!(tmp_1 == null ? true : !(tmp_1 == null)))
              THROW_CCE();
            this.n9_1 = 5;
            suspendResult = verifyPolicy(this.wf1_1, this.bf2_1, this.xf1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 6;
            continue $sm;
          case 5:
            this.ff2_1 = suspendResult.wp_1;
            suspendResult = new Result(this.ff2_1);
            this.n9_1 = 6;
            continue $sm;
          case 6:
            this.gf2_1 = suspendResult.wp_1;
            var tmp_2 = this;
            var this_1 = this.gf2_1;
            var tmp_3;
            if (_Result___get_isSuccess__impl__sndoy8(this_1)) {
              var tmp_4 = _Result___get_value__impl__bjfvqg(this_1);
              var result = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              var tmp0 = result.p2();
              var tmp$ret$0;
              l$ret$1: do {
                var _iterator__ex2g4s = tmp0.q();
                while (_iterator__ex2g4s.r()) {
                  var element = _iterator__ex2g4s.s();
                  var tmp_5;
                  if (element instanceof JsonPrimitive_1) {
                    tmp_5 = get_booleanOrNull(element) === true;
                  } else {
                    tmp_5 = false;
                  }
                  if (tmp_5) {
                    tmp$ret$0 = element;
                    break l$ret$1;
                  }
                }
                tmp$ret$0 = null;
              }
               while (false);
              var decision = tmp$ret$0;
              var tmp_6;
              if (!(decision == null)) {
                tmp_6 = result;
              } else {
                throw new DynamicPolicyException('The policy condition was not met for policy ' + this.bf2_1.zf0_1);
              }
              var value = tmp_6;
              tmp_3 = _Result___init__impl__xyqfz8(value);
            } else {
              tmp_3 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this_1));
            }

            tmp_2.af2_1 = tmp_3;
            this.o9_1 = 15;
            this.n9_1 = 12;
            continue $sm;
          case 7:
            this.o9_1 = 8;
            var tmp_7 = this.q9_1;
            if (tmp_7 instanceof Exception) {
              this.hf2_1 = this.q9_1;
              var tmp_8 = this;
              var tmp_9 = get_logger();
              tmp_9.x6g(this.hf2_1, DynamicPolicy$verify$lambda_0);
              var tmp_10;
              if (this.hf2_1 instanceof DynamicPolicyException) {
                tmp_10 = this.hf2_1;
              } else {
                tmp_10 = new DynamicPolicyException('Policy verification failed: ' + this.hf2_1.message);
              }
              var exception = tmp_10;
              tmp_8.af2_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.o9_1 = 15;
              this.n9_1 = 12;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 8:
            this.o9_1 = 15;
            this.if2_1 = this.q9_1;
            var tmp_11 = this;
            tmp_11.jf2_1 = this.wf1_1;
            this.kf2_1 = this.jf2_1;
            this.o9_1 = 10;
            var tmp_12 = this;
            tmp_12.mf2_1 = Companion_instance;
            var tmp_13 = this;
            tmp_13.nf2_1 = this.kf2_1;
            this.of2_1 = this.nf2_1;
            this.pf2_1 = parseConfig(this.of2_1, this.yf1_1);
            this.n9_1 = 9;
            suspendResult = deletePolicy(this.of2_1, this.pf2_1.xf0_1, this.pf2_1.zf0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.qf2_1 = Unit_instance;
            var tmp_14 = this;
            this.mf2_1;
            var value_0 = this.qf2_1;
            tmp_14.lf2_1 = _Result___init__impl__xyqfz8(value_0);
            this.o9_1 = 15;
            this.n9_1 = 11;
            continue $sm;
          case 10:
            this.o9_1 = 15;
            var tmp_15 = this.q9_1;
            if (tmp_15 instanceof Error) {
              this.rf2_1 = this.q9_1;
              var tmp_16 = this;
              var exception_0 = this.rf2_1;
              tmp_16.lf2_1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
              this.n9_1 = 11;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 11:
            this.o9_1 = 15;
            throw this.if2_1;
          case 12:
            this.sf2_1 = this.af2_1;
            this.o9_1 = 15;
            var tmp_17 = this;
            tmp_17.tf2_1 = this.wf1_1;
            this.uf2_1 = this.tf2_1;
            this.o9_1 = 14;
            var tmp_18 = this;
            tmp_18.wf2_1 = Companion_instance;
            var tmp_19 = this;
            tmp_19.xf2_1 = this.uf2_1;
            this.yf2_1 = this.xf2_1;
            this.zf2_1 = parseConfig(this.yf2_1, this.yf1_1);
            this.n9_1 = 13;
            suspendResult = deletePolicy(this.yf2_1, this.zf2_1.xf0_1, this.zf2_1.zf0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            var tmp_20 = this;
            this.wf2_1;
            tmp_20.vf2_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o9_1 = 15;
            this.n9_1 = 16;
            continue $sm;
          case 14:
            this.o9_1 = 15;
            var tmp_21 = this.q9_1;
            if (tmp_21 instanceof Error) {
              var e = this.q9_1;
              var tmp_22 = this;
              tmp_22.vf2_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 16;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 15:
            throw this.q9_1;
          case 16:
            this.o9_1 = 15;
            return new Result(this.sf2_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 15) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($verifyCOROUTINE$10)['<set-state>'] = protoOf($verifyCOROUTINE$10).u9;
  protoOf($verifyCOROUTINE$10)['<get-state>'] = protoOf($verifyCOROUTINE$10).v9;
  protoOf($verifyCOROUTINE$10)['<set-exceptionState>'] = protoOf($verifyCOROUTINE$10).w9;
  protoOf($verifyCOROUTINE$10)['<get-exceptionState>'] = protoOf($verifyCOROUTINE$10).x9;
  protoOf($verifyCOROUTINE$10)['<set-result>'] = protoOf($verifyCOROUTINE$10).y9;
  protoOf($verifyCOROUTINE$10)['<get-result>'] = protoOf($verifyCOROUTINE$10).z9;
  protoOf($verifyCOROUTINE$10)['<set-exception>'] = protoOf($verifyCOROUTINE$10).aa;
  protoOf($verifyCOROUTINE$10)['<get-exception>'] = protoOf($verifyCOROUTINE$10).ba;
  protoOf($verifyCOROUTINE$10)['<set-finallyPath>'] = protoOf($verifyCOROUTINE$10).ca;
  protoOf($verifyCOROUTINE$10)['<get-finallyPath>'] = protoOf($verifyCOROUTINE$10).da;
  protoOf($verifyCOROUTINE$10)['<get-context>'] = protoOf($verifyCOROUTINE$10).t9;
  function DynamicPolicy() {
    Companion_getInstance_25();
    CredentialDataValidatorPolicy.call(this);
    this.uf0_1 = 'dynamic';
    this.vf0_1 = 'A dynamic policy that can be used to implement custom verification logic.';
    this.wf0_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
  }
  protoOf(DynamicPolicy).v2 = function () {
    return this.uf0_1;
  };
  protoOf(DynamicPolicy).zat = function () {
    return this.vf0_1;
  };
  protoOf(DynamicPolicy).oea = function () {
    return this.wf0_1;
  };
  protoOf(DynamicPolicy).mea = function (data, args, context, $completion) {
    var tmp = new $verifyCOROUTINE$10(this, data, args, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DynamicPolicy).nea = function (data, args, context) {
    var tmp = DynamicPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DynamicPolicyConfig$Companion$$childSerializers$_anonymous__f939tj() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance());
  }
  function DynamicPolicyConfig$Companion$$childSerializers$_anonymous__f939tj_0() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance());
  }
  function Companion_21() {
    Companion_instance_25 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DynamicPolicyConfig$Companion$$childSerializers$_anonymous__f939tj);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.af3_1 = [null, null, null, tmp_1, lazy(tmp_2, DynamicPolicyConfig$Companion$$childSerializers$_anonymous__f939tj_0)];
  }
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_21();
    return Companion_instance_25;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.DynamicPolicyConfig', this, 5);
    tmp0_serialDesc.z2b('opaServer', true);
    tmp0_serialDesc.z2b('policyQuery', true);
    tmp0_serialDesc.z2b('policyName', false);
    tmp0_serialDesc.z2b('rules', false);
    tmp0_serialDesc.z2b('argument', false);
    this.bf3_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).cf3 = function (encoder, value) {
    var tmp0_desc = this.bf3_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().af3_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.xf0_1 === 'http://localhost:8181')) {
      tmp1_output.y25(tmp0_desc, 0, value.xf0_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.yf0_1 === 'vc/verification')) {
      tmp1_output.y25(tmp0_desc, 1, value.yf0_1);
    }
    tmp1_output.y25(tmp0_desc, 2, value.zf0_1);
    tmp1_output.a26(tmp0_desc, 3, tmp2_cached[3].c1(), value.af1_1);
    tmp1_output.a26(tmp0_desc, 4, tmp2_cached[4].c1(), value.bf1_1);
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_15).x20 = function (encoder, value) {
    return this.cf3(encoder, value instanceof DynamicPolicyConfig ? value : THROW_CCE());
  };
  protoOf($serializer_15).y20 = function (decoder) {
    var tmp0_desc = this.bf3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.j24(tmp0_desc);
    var tmp10_cached = Companion_getInstance_26().af3_1;
    if (tmp9_input.z24()) {
      tmp4_local0 = tmp9_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.t24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.v24(tmp0_desc, 3, tmp10_cached[3].c1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.v24(tmp0_desc, 4, tmp10_cached[4].c1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.t24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.v24(tmp0_desc, 3, tmp10_cached[3].c1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.v24(tmp0_desc, 4, tmp10_cached[4].c1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.k24(tmp0_desc);
    return DynamicPolicyConfig_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_15).w20 = function () {
    return this.bf3_1;
  };
  protoOf($serializer_15).o2c = function () {
    var tmp0_cached = Companion_getInstance_26().af3_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3].c1(), tmp0_cached[4].c1()];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function DynamicPolicyConfig_init_$Init$(seen0, opaServer, policyQuery, policyName, rules, argument, serializationConstructorMarker, $this) {
    if (!(28 === (28 & seen0))) {
      throwMissingFieldException(seen0, 28, $serializer_getInstance_15().bf3_1);
    }
    if (0 === (seen0 & 1))
      $this.xf0_1 = 'http://localhost:8181';
    else
      $this.xf0_1 = opaServer;
    if (0 === (seen0 & 2))
      $this.yf0_1 = 'vc/verification';
    else
      $this.yf0_1 = policyQuery;
    $this.zf0_1 = policyName;
    $this.af1_1 = rules;
    $this.bf1_1 = argument;
    return $this;
  }
  function DynamicPolicyConfig_init_$Create$(seen0, opaServer, policyQuery, policyName, rules, argument, serializationConstructorMarker) {
    return DynamicPolicyConfig_init_$Init$(seen0, opaServer, policyQuery, policyName, rules, argument, serializationConstructorMarker, objectCreate(protoOf(DynamicPolicyConfig)));
  }
  function DynamicPolicyConfig(opaServer, policyQuery, policyName, rules, argument) {
    Companion_getInstance_26();
    opaServer = opaServer === VOID ? 'http://localhost:8181' : opaServer;
    policyQuery = policyQuery === VOID ? 'vc/verification' : policyQuery;
    this.xf0_1 = opaServer;
    this.yf0_1 = policyQuery;
    this.zf0_1 = policyName;
    this.af1_1 = rules;
    this.bf1_1 = argument;
  }
  protoOf(DynamicPolicyConfig).toString = function () {
    return 'DynamicPolicyConfig(opaServer=' + this.xf0_1 + ', policyQuery=' + this.yf0_1 + ', policyName=' + this.zf0_1 + ', rules=' + toString(this.af1_1) + ', argument=' + toString(this.bf1_1) + ')';
  };
  protoOf(DynamicPolicyConfig).hashCode = function () {
    var result = getStringHashCode(this.xf0_1);
    result = imul(result, 31) + getStringHashCode(this.yf0_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.zf0_1) | 0;
    result = imul(result, 31) + hashCode(this.af1_1) | 0;
    result = imul(result, 31) + hashCode(this.bf1_1) | 0;
    return result;
  };
  protoOf(DynamicPolicyConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DynamicPolicyConfig))
      return false;
    var tmp0_other_with_cast = other instanceof DynamicPolicyConfig ? other : THROW_CCE();
    if (!(this.xf0_1 === tmp0_other_with_cast.xf0_1))
      return false;
    if (!(this.yf0_1 === tmp0_other_with_cast.yf0_1))
      return false;
    if (!(this.zf0_1 === tmp0_other_with_cast.zf0_1))
      return false;
    if (!equals(this.af1_1, tmp0_other_with_cast.af1_1))
      return false;
    if (!equals(this.bf1_1, tmp0_other_with_cast.bf1_1))
      return false;
    return true;
  };
  function logger$lambda() {
    _init_properties_DynamicPolicy_kt__m8kkm7();
    return Unit_instance;
  }
  var properties_initialized_DynamicPolicy_kt_43q3a9;
  function _init_properties_DynamicPolicy_kt__m8kkm7() {
    if (!properties_initialized_DynamicPolicy_kt_43q3a9) {
      properties_initialized_DynamicPolicy_kt_43q3a9 = true;
      var tmp = KotlinLogging_instance;
      logger = tmp.c6h(logger$lambda);
    }
  }
  function ExpirationDatePolicy$Companion$$childSerializers$_anonymous__d7tsh1() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function Companion_22() {
    Companion_instance_26 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.df3_1 = [null, null, lazy(tmp_0, ExpirationDatePolicy$Companion$$childSerializers$_anonymous__d7tsh1)];
    this.ef3_1 = listOf_0([V2_NotAfter_getInstance(), V1_NotAfter_getInstance()]);
    this.ff3_1 = listOf(JwtClaims_NotAfter_getInstance());
  }
  protoOf(Companion_22).o4u = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_26;
  function Companion_getInstance_27() {
    if (Companion_instance_26 == null)
      new Companion_22();
    return Companion_instance_26;
  }
  function getExpirationKeyValuePair($this, data) {
    var tmp = DatePolicyUtils_getInstance();
    var tmp0_safe_receiver = data.bf('vc');
    var tmp1_elvis_lhs = tmp.deb(tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver), Companion_getInstance_27().ef3_1);
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? DatePolicyUtils_getInstance().deb(data, Companion_getInstance_27().ef3_1) : tmp1_elvis_lhs;
    return tmp2_elvis_lhs == null ? DatePolicyUtils_getInstance().eeb(data, Companion_getInstance_27().ff3_1) : tmp2_elvis_lhs;
  }
  function buildFailureResult($this, now, exp, key) {
    // Inline function 'kotlin.let' call
    var it = now.l6c(exp);
    // Inline function 'kotlin.Companion.failure' call
    var exception = new ExpirationDatePolicyException(exp, exp.f60(), it, _Duration___get_inWholeSeconds__impl__hpy7b3(it), key.jd6(), true);
    return _Result___init__impl__xyqfz8(createFailure(exception));
  }
  function buildSuccessResult($this, now, exp, key) {
    // Inline function 'kotlin.let' call
    var it = exp.l6c(now);
    // Inline function 'kotlin.Companion.success' call
    var value = new JsonObject(mapOf_0([to('date', JsonPrimitive_0(exp.toString())), to('date_seconds', JsonPrimitive_2(exp.f60())), to('expires_in', JsonPrimitive_0(Duration__toString_impl_8d916b(it))), to('expires_in_seconds', JsonPrimitive_2(_Duration___get_inWholeSeconds__impl__hpy7b3(it))), to('used_key', JsonPrimitive_0(key.jd6())), to('policy_available', JsonPrimitive(true))]));
    return _Result___init__impl__xyqfz8(value);
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.ExpirationDatePolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.gf3_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).hf3 = function (encoder, value) {
    var tmp0_desc = this.gf3_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().df3_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.if3_1 === 'expired')) {
      tmp1_output.y25(tmp0_desc, 0, value.if3_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.jf3_1 === 'Verifies that the credentials expiration date (`exp` for JWTs) has not been exceeded.')) {
      tmp1_output.y25(tmp0_desc, 1, value.jf3_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.kf3_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.kf3_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_16).x20 = function (encoder, value) {
    return this.hf3(encoder, value instanceof ExpirationDatePolicy ? value : THROW_CCE());
  };
  protoOf($serializer_16).y20 = function (decoder) {
    var tmp0_desc = this.gf3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_27().df3_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return ExpirationDatePolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_16).w20 = function () {
    return this.gf3_1;
  };
  protoOf($serializer_16).o2c = function () {
    var tmp0_cached = Companion_getInstance_27().df3_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function ExpirationDatePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().gf3_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.if3_1 = 'expired';
    else
      $this.if3_1 = name;
    if (0 === (seen0 & 2))
      $this.jf3_1 = 'Verifies that the credentials expiration date (`exp` for JWTs) has not been exceeded.';
    else
      $this.jf3_1 = description;
    if (0 === (seen0 & 4))
      $this.kf3_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
    else
      $this.kf3_1 = supportedVCFormats;
    return $this;
  }
  function ExpirationDatePolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return ExpirationDatePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(ExpirationDatePolicy)));
  }
  function ExpirationDatePolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.tf3_1 = this$0;
    this.uf3_1 = $data;
    this.vf3_1 = $args;
    this.wf3_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ExpirationDatePolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(ExpirationDatePolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(ExpirationDatePolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.tf3_1.mea(this.uf3_1, this.vf3_1, this.wf3_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(ExpirationDatePolicy$verifyAsync$slambda).ja = function (completion) {
    return new ExpirationDatePolicy$verifyAsync$slambda(this.tf3_1, this.uf3_1, this.vf3_1, this.wf3_1, completion);
  };
  function ExpirationDatePolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new ExpirationDatePolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function ExpirationDatePolicy() {
    Companion_getInstance_27();
    CredentialWrapperValidatorPolicy.call(this);
    this.if3_1 = 'expired';
    this.jf3_1 = 'Verifies that the credentials expiration date (`exp` for JWTs) has not been exceeded.';
    this.kf3_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
  }
  protoOf(ExpirationDatePolicy).v2 = function () {
    return this.if3_1;
  };
  protoOf(ExpirationDatePolicy).zat = function () {
    return this.jf3_1;
  };
  protoOf(ExpirationDatePolicy).oea = function () {
    return this.kf3_1;
  };
  protoOf(ExpirationDatePolicy).mea = function (data, args, context, $completion) {
    var tmp0_elvis_lhs = getExpirationKeyValuePair(this, data);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new Result(DatePolicyUtils_getInstance().ceb_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var _destruct__k2r9zo = tmp;
    var key = _destruct__k2r9zo.dc();
    var exp = _destruct__k2r9zo.ec();
    var now = System_instance.j5v();
    var tmp_0;
    if (now.m6c(exp) > 0) {
      tmp_0 = buildFailureResult(this, now, exp, key);
    } else {
      tmp_0 = buildSuccessResult(this, now, exp, key);
    }
    return new Result(tmp_0);
  };
  protoOf(ExpirationDatePolicy).nea = function (data, args, context) {
    var tmp = ExpirationDatePolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function JsonSchemaPolicy$SerializableValidationError$Companion$$childSerializers$_anonymous__8e62u5() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance());
  }
  function Companion_23() {
    Companion_instance_27 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xf3_1 = [null, null, null, lazy(tmp_0, JsonSchemaPolicy$SerializableValidationError$Companion$$childSerializers$_anonymous__8e62u5), null];
  }
  protoOf(Companion_23).o4u = function () {
    return $serializer_getInstance_17();
  };
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_23();
    return Companion_instance_27;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.JsonSchemaPolicy.SerializableValidationError', this, 5);
    tmp0_serialDesc.z2b('schemaPath', false);
    tmp0_serialDesc.z2b('objectPath', false);
    tmp0_serialDesc.z2b('message', false);
    tmp0_serialDesc.z2b('details', false);
    tmp0_serialDesc.z2b('absoluteLocation', false);
    this.yf3_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).zf3 = function (encoder, value) {
    var tmp0_desc = this.yf3_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().xf3_1;
    tmp1_output.y25(tmp0_desc, 0, value.schemaPath);
    tmp1_output.y25(tmp0_desc, 1, value.objectPath);
    tmp1_output.y25(tmp0_desc, 2, value.message);
    tmp1_output.c26(tmp0_desc, 3, tmp2_cached[3].c1(), value.details);
    tmp1_output.c26(tmp0_desc, 4, StringSerializer_getInstance(), value.absoluteLocation);
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_17).x20 = function (encoder, value) {
    return this.zf3(encoder, value instanceof SerializableValidationError ? value : THROW_CCE());
  };
  protoOf($serializer_17).y20 = function (decoder) {
    var tmp0_desc = this.yf3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.j24(tmp0_desc);
    var tmp10_cached = Companion_getInstance_28().xf3_1;
    if (tmp9_input.z24()) {
      tmp4_local0 = tmp9_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.t24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.x24(tmp0_desc, 3, tmp10_cached[3].c1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.x24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.t24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.x24(tmp0_desc, 3, tmp10_cached[3].c1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.x24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.k24(tmp0_desc);
    return SerializableValidationError_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_17).w20 = function () {
    return this.yf3_1;
  };
  protoOf($serializer_17).o2c = function () {
    var tmp0_cached = Companion_getInstance_28().xf3_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(tmp0_cached[3].c1()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function SerializableValidationError_init_$Init$(seen0, schemaPath, objectPath, message, details, absoluteLocation, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_17().yf3_1);
    }
    $this.schemaPath = schemaPath;
    $this.objectPath = objectPath;
    $this.message = message;
    $this.details = details;
    $this.absoluteLocation = absoluteLocation;
    return $this;
  }
  function SerializableValidationError_init_$Create$(seen0, schemaPath, objectPath, message, details, absoluteLocation, serializationConstructorMarker) {
    return SerializableValidationError_init_$Init$(seen0, schemaPath, objectPath, message, details, absoluteLocation, serializationConstructorMarker, objectCreate(protoOf(SerializableValidationError)));
  }
  function JsonSchemaPolicy$Companion$$childSerializers$_anonymous__je46q9() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function SerializableValidationError(schemaPath, objectPath, message, details, absoluteLocation) {
    Companion_getInstance_28();
    this.schemaPath = schemaPath;
    this.objectPath = objectPath;
    this.message = message;
    this.details = details;
    this.absoluteLocation = absoluteLocation;
  }
  protoOf(SerializableValidationError).ecu = function () {
    return this.schemaPath;
  };
  protoOf(SerializableValidationError).ccr = function () {
    return this.objectPath;
  };
  protoOf(SerializableValidationError).ta = function () {
    return this.message;
  };
  protoOf(SerializableValidationError).af4 = function () {
    return this.details;
  };
  protoOf(SerializableValidationError).bf4 = function () {
    return this.absoluteLocation;
  };
  protoOf(SerializableValidationError).dc = function () {
    return this.schemaPath;
  };
  protoOf(SerializableValidationError).ec = function () {
    return this.objectPath;
  };
  protoOf(SerializableValidationError).aq = function () {
    return this.message;
  };
  protoOf(SerializableValidationError).v70 = function () {
    return this.details;
  };
  protoOf(SerializableValidationError).c7l = function () {
    return this.absoluteLocation;
  };
  protoOf(SerializableValidationError).cf4 = function (schemaPath, objectPath, message, details, absoluteLocation) {
    return new SerializableValidationError(schemaPath, objectPath, message, details, absoluteLocation);
  };
  protoOf(SerializableValidationError).copy = function (schemaPath, objectPath, message, details, absoluteLocation, $super) {
    schemaPath = schemaPath === VOID ? this.schemaPath : schemaPath;
    objectPath = objectPath === VOID ? this.objectPath : objectPath;
    message = message === VOID ? this.message : message;
    details = details === VOID ? this.details : details;
    absoluteLocation = absoluteLocation === VOID ? this.absoluteLocation : absoluteLocation;
    return $super === VOID ? this.cf4(schemaPath, objectPath, message, details, absoluteLocation) : $super.cf4.call(this, schemaPath, objectPath, message, details, absoluteLocation);
  };
  protoOf(SerializableValidationError).toString = function () {
    return 'SerializableValidationError(schemaPath=' + this.schemaPath + ', objectPath=' + this.objectPath + ', message=' + this.message + ', details=' + toString_0(this.details) + ', absoluteLocation=' + this.absoluteLocation + ')';
  };
  protoOf(SerializableValidationError).hashCode = function () {
    var result = getStringHashCode(this.schemaPath);
    result = imul(result, 31) + getStringHashCode(this.objectPath) | 0;
    result = imul(result, 31) + getStringHashCode(this.message) | 0;
    result = imul(result, 31) + (this.details == null ? 0 : hashCode(this.details)) | 0;
    result = imul(result, 31) + (this.absoluteLocation == null ? 0 : getStringHashCode(this.absoluteLocation)) | 0;
    return result;
  };
  protoOf(SerializableValidationError).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerializableValidationError))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableValidationError ? other : THROW_CCE();
    if (!(this.schemaPath === tmp0_other_with_cast.schemaPath))
      return false;
    if (!(this.objectPath === tmp0_other_with_cast.objectPath))
      return false;
    if (!(this.message === tmp0_other_with_cast.message))
      return false;
    if (!equals(this.details, tmp0_other_with_cast.details))
      return false;
    if (!(this.absoluteLocation == tmp0_other_with_cast.absoluteLocation))
      return false;
    return true;
  };
  function Companion_24() {
    Companion_instance_28 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.df4_1 = [null, null, lazy(tmp_0, JsonSchemaPolicy$Companion$$childSerializers$_anonymous__je46q9)];
  }
  protoOf(Companion_24).o4u = function () {
    return $serializer_getInstance_18();
  };
  var Companion_instance_28;
  function Companion_getInstance_29() {
    if (Companion_instance_28 == null)
      new Companion_24();
    return Companion_instance_28;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.JsonSchemaPolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.ef4_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).ff4 = function (encoder, value) {
    var tmp0_desc = this.ef4_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().df4_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.gf4_1 === 'schema')) {
      tmp1_output.y25(tmp0_desc, 0, value.gf4_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.hf4_1 === 'Verifies a credentials data against a JSON Schema (Draft 7 - see https://json-schema.org/specification-links#draft-7).')) {
      tmp1_output.y25(tmp0_desc, 1, value.hf4_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.if4_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.if4_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_18).x20 = function (encoder, value) {
    return this.ff4(encoder, value instanceof JsonSchemaPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_18).y20 = function (decoder) {
    var tmp0_desc = this.ef4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_29().df4_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return JsonSchemaPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_18).w20 = function () {
    return this.ef4_1;
  };
  protoOf($serializer_18).o2c = function () {
    var tmp0_cached = Companion_getInstance_29().df4_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function JsonSchemaPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_18().ef4_1);
    }
    CredentialDataValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.gf4_1 = 'schema';
    else
      $this.gf4_1 = name;
    if (0 === (seen0 & 2))
      $this.hf4_1 = 'Verifies a credentials data against a JSON Schema (Draft 7 - see https://json-schema.org/specification-links#draft-7).';
    else
      $this.hf4_1 = description;
    if (0 === (seen0 & 4))
      $this.if4_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
    else
      $this.if4_1 = supportedVCFormats;
    return $this;
  }
  function JsonSchemaPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return JsonSchemaPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(JsonSchemaPolicy)));
  }
  function sam$io_github_optimumcode_json_schema_ErrorCollector$0(function_0) {
    this.jf4_1 = function_0;
  }
  protoOf(sam$io_github_optimumcode_json_schema_ErrorCollector$0).fco = function (error) {
    return this.jf4_1(error);
  };
  protoOf(sam$io_github_optimumcode_json_schema_ErrorCollector$0).v3 = function () {
    return this.jf4_1;
  };
  protoOf(sam$io_github_optimumcode_json_schema_ErrorCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ErrorCollector) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.v3(), other.v3());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$io_github_optimumcode_json_schema_ErrorCollector$0).hashCode = function () {
    return hashCode(this.v3());
  };
  function verify$add(receiver, p0) {
    receiver.n(p0);
  }
  function JsonSchemaPolicy$verify$add$ref($boundThis) {
    return function (p0) {
      verify$add($boundThis, p0);
      return Unit_instance;
    };
  }
  function JsonSchemaPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.sf4_1 = this$0;
    this.tf4_1 = $data;
    this.uf4_1 = $args;
    this.vf4_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonSchemaPolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JsonSchemaPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(JsonSchemaPolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.sf4_1.mea(this.tf4_1, this.uf4_1, this.vf4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonSchemaPolicy$verifyAsync$slambda).ja = function (completion) {
    return new JsonSchemaPolicy$verifyAsync$slambda(this.sf4_1, this.tf4_1, this.uf4_1, this.vf4_1, completion);
  };
  function JsonSchemaPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new JsonSchemaPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JsonSchemaPolicy() {
    Companion_getInstance_29();
    CredentialDataValidatorPolicy.call(this);
    this.gf4_1 = 'schema';
    this.hf4_1 = 'Verifies a credentials data against a JSON Schema (Draft 7 - see https://json-schema.org/specification-links#draft-7).';
    this.if4_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
  }
  protoOf(JsonSchemaPolicy).v2 = function () {
    return this.gf4_1;
  };
  protoOf(JsonSchemaPolicy).zat = function () {
    return this.hf4_1;
  };
  protoOf(JsonSchemaPolicy).oea = function () {
    return this.if4_1;
  };
  protoOf(JsonSchemaPolicy).mea = function (data, args, context, $completion) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp_0;
      if (!(args == null) ? typeof args === 'string' : false) {
        tmp_0 = Companion_instance_1.lco(args);
      } else {
        if (args instanceof JsonElement) {
          tmp_0 = Companion_instance_1.nco(args);
        } else {
          throw IllegalArgumentException_init_$Create$('Provided JSON Schema is not an String or JsonElement');
        }
      }
      // Inline function 'kotlin.Companion.success' call
      var value = tmp_0;
      tmp = _Result___init__impl__xyqfz8(value);
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var e = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    // Inline function 'kotlin.getOrElse' call
    var this_0 = tmp;
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp_2;
    if (exception == null) {
      var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
      tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    } else {
      var tmp_4;
      if (exception instanceof IllegalArgumentException) {
        throw IllegalArgumentException_init_$Create$('Provided JSON schema is not valid: ' + exception.message);
      } else {
        throw exception;
      }
    }
    var schema = tmp_2;
    // Inline function 'kotlin.collections.mutableListOf' call
    var errors = ArrayList_init_$Create$();
    var tmp_5 = JsonSchemaPolicy$verify$add$ref(errors);
    var success = schema.qco(data, new sam$io_github_optimumcode_json_schema_ErrorCollector$0(tmp_5));
    var tmp_6;
    if (success) {
      // Inline function 'kotlin.Companion.success' call
      var value_0 = args == null ? toString_0(args) : args;
      tmp_6 = _Result___init__impl__xyqfz8(value_0);
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(errors, 10));
      var _iterator__ex2g4s = errors.q();
      while (_iterator__ex2g4s.r()) {
        var item = _iterator__ex2g4s.s();
        var tmp_7 = item.ecq_1.toString();
        var tmp_8 = item.fcq_1.toString();
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_1 = item.hcq_1;
        var tmp_9;
        if (this_1.h()) {
          tmp_9 = null;
        } else {
          tmp_9 = this_1;
        }
        var tmp_10 = tmp_9;
        var tmp0_safe_receiver = item.icq_1;
        var tmp$ret$9 = new SerializableValidationError(tmp_7, tmp_8, item.gcq_1, tmp_10, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
        destination.n(tmp$ret$9);
      }
      var serializableErrors = destination;
      // Inline function 'kotlin.Companion.failure' call
      var exception_0 = new JsonSchemaVerificationException(serializableErrors);
      tmp_6 = _Result___init__impl__xyqfz8(createFailure(exception_0));
    }
    return new Result(tmp_6);
  };
  protoOf(JsonSchemaPolicy).nea = function (data, args, context) {
    var tmp = JsonSchemaPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function JwtSignaturePolicy$Companion$$childSerializers$_anonymous__rvibjb() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function Companion_25() {
    Companion_instance_29 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.wf4_1 = [null, null, lazy(tmp_0, JwtSignaturePolicy$Companion$$childSerializers$_anonymous__rvibjb)];
  }
  protoOf(Companion_25).o4u = function () {
    return $serializer_getInstance_19();
  };
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_25();
    return Companion_instance_29;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.JwtSignaturePolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.xf4_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).yf4 = function (encoder, value) {
    var tmp0_desc = this.xf4_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().wf4_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.yet_1 === 'signature')) {
      tmp1_output.y25(tmp0_desc, 0, value.yet_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.zet_1 === 'Checks a JWT credential by verifying its cryptographic signature using the key referenced by the DID in `iss`.')) {
      tmp1_output.y25(tmp0_desc, 1, value.zet_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.aeu_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.aeu_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_19).x20 = function (encoder, value) {
    return this.yf4(encoder, value instanceof JwtSignaturePolicy ? value : THROW_CCE());
  };
  protoOf($serializer_19).y20 = function (decoder) {
    var tmp0_desc = this.xf4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_30().wf4_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return JwtSignaturePolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_19).w20 = function () {
    return this.xf4_1;
  };
  protoOf($serializer_19).o2c = function () {
    var tmp0_cached = Companion_getInstance_30().wf4_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function JwtSignaturePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_19().xf4_1);
    }
    JwtVerificationPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.yet_1 = 'signature';
    else
      $this.yet_1 = name;
    if (0 === (seen0 & 2))
      $this.zet_1 = 'Checks a JWT credential by verifying its cryptographic signature using the key referenced by the DID in `iss`.';
    else
      $this.zet_1 = description;
    if (0 === (seen0 & 4))
      $this.aeu_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
    else
      $this.aeu_1 = supportedVCFormats;
    return $this;
  }
  function JwtSignaturePolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return JwtSignaturePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(JwtSignaturePolicy)));
  }
  function JwtSignaturePolicy$verifyAsync$slambda(this$0, $credential, $args, $context, resultContinuation) {
    this.hf5_1 = this$0;
    this.if5_1 = $credential;
    this.jf5_1 = $args;
    this.kf5_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwtSignaturePolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwtSignaturePolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(JwtSignaturePolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.hf5_1.yed(this.if5_1, this.jf5_1, this.kf5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JwtSignaturePolicy$verifyAsync$slambda).ja = function (completion) {
    return new JwtSignaturePolicy$verifyAsync$slambda(this.hf5_1, this.if5_1, this.jf5_1, this.kf5_1, completion);
  };
  function JwtSignaturePolicy$verifyAsync$slambda_0(this$0, $credential, $args, $context, resultContinuation) {
    var i = new JwtSignaturePolicy$verifyAsync$slambda(this$0, $credential, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $verifyCOROUTINE$11(_this__u8e3s4, credential, args, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tf5_1 = _this__u8e3s4;
    this.uf5_1 = credential;
    this.vf5_1 = args;
    this.wf5_1 = context;
  }
  protoOf($verifyCOROUTINE$11).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            var tmp_0 = this;
            tmp_0.xf5_1 = new JwsSignatureScheme();
            this.yf5_1 = this.xf5_1;
            var tmp_1 = this;
            tmp_1.zf5_1 = this.yf5_1;
            this.af6_1 = this.zf5_1;
            if (Companion_getInstance_0().isSDJwt(this.uf5_1, true)) {
              this.n9_1 = 3;
              suspendResult = this.af6_1.xdo(this.uf5_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = this.af6_1.idp(this.uf5_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.cf6_1 = suspendResult.wp_1;
            suspendResult = new Result(this.cf6_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.bf6_1 = suspendResult.wp_1;
            this.n9_1 = 6;
            continue $sm;
          case 3:
            this.df6_1 = suspendResult;
            this.n9_1 = 4;
            suspendResult = this.af6_1.udp(this.uf5_1, JWTCryptoProviderManager_instance.ef6(mapOf(to(this.df6_1.keyId, this.df6_1.key))), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 5;
            continue $sm;
          case 4:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.bf6_1 = suspendResult.wp_1;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            return new Result(this.bf6_1);
          case 7:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 7) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($verifyCOROUTINE$11)['<set-state>'] = protoOf($verifyCOROUTINE$11).u9;
  protoOf($verifyCOROUTINE$11)['<get-state>'] = protoOf($verifyCOROUTINE$11).v9;
  protoOf($verifyCOROUTINE$11)['<set-exceptionState>'] = protoOf($verifyCOROUTINE$11).w9;
  protoOf($verifyCOROUTINE$11)['<get-exceptionState>'] = protoOf($verifyCOROUTINE$11).x9;
  protoOf($verifyCOROUTINE$11)['<set-result>'] = protoOf($verifyCOROUTINE$11).y9;
  protoOf($verifyCOROUTINE$11)['<get-result>'] = protoOf($verifyCOROUTINE$11).z9;
  protoOf($verifyCOROUTINE$11)['<set-exception>'] = protoOf($verifyCOROUTINE$11).aa;
  protoOf($verifyCOROUTINE$11)['<get-exception>'] = protoOf($verifyCOROUTINE$11).ba;
  protoOf($verifyCOROUTINE$11)['<set-finallyPath>'] = protoOf($verifyCOROUTINE$11).ca;
  protoOf($verifyCOROUTINE$11)['<get-finallyPath>'] = protoOf($verifyCOROUTINE$11).da;
  protoOf($verifyCOROUTINE$11)['<get-context>'] = protoOf($verifyCOROUTINE$11).t9;
  function JwtSignaturePolicy() {
    Companion_getInstance_30();
    JwtVerificationPolicy.call(this);
    this.yet_1 = 'signature';
    this.zet_1 = 'Checks a JWT credential by verifying its cryptographic signature using the key referenced by the DID in `iss`.';
    this.aeu_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
  }
  protoOf(JwtSignaturePolicy).v2 = function () {
    return this.yet_1;
  };
  protoOf(JwtSignaturePolicy).zat = function () {
    return this.zet_1;
  };
  protoOf(JwtSignaturePolicy).oea = function () {
    return this.aeu_1;
  };
  protoOf(JwtSignaturePolicy).yed = function (credential, args, context, $completion) {
    var tmp = new $verifyCOROUTINE$11(this, credential, args, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwtSignaturePolicy).zed = function (credential, args, context) {
    var tmp = JwtSignaturePolicy$verifyAsync$slambda_0(this, credential, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function NotBeforeDatePolicy$Companion$$childSerializers$_anonymous__oxpz3c() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function Companion_26() {
    Companion_instance_30 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ff6_1 = [null, null, lazy(tmp_0, NotBeforeDatePolicy$Companion$$childSerializers$_anonymous__oxpz3c)];
    this.gf6_1 = listOf_0([V2_NotBefore_getInstance(), V1_NotBefore_getInstance()]);
    this.hf6_1 = listOf_0([JwtClaims_NotBefore_getInstance(), JwtClaims_IssuedAt_getInstance()]);
  }
  protoOf(Companion_26).o4u = function () {
    return $serializer_getInstance_20();
  };
  var Companion_instance_30;
  function Companion_getInstance_31() {
    if (Companion_instance_30 == null)
      new Companion_26();
    return Companion_instance_30;
  }
  function isBeyondNow($this, nbf, now) {
    var tmp0_subject = nbf.bc_1;
    var tmp;
    if (equals(tmp0_subject, JwtClaims_IssuedAt_getInstance())) {
      // Inline function 'kotlin.time.Companion.minutes' call
      Companion_getInstance_3();
      var tmp$ret$0 = toDuration(1, DurationUnit_MINUTES_getInstance());
      tmp = nbf.cc_1.k6c(tmp$ret$0);
    } else {
      tmp = nbf.cc_1;
    }
    // Inline function 'kotlin.let' call
    return tmp.m6c(now) > 0;
  }
  function getIssuanceDateKeyValuePair($this, data) {
    var tmp = DatePolicyUtils_getInstance();
    var tmp0_safe_receiver = data.bf('vc');
    var tmp1_elvis_lhs = tmp.deb(tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver), Companion_getInstance_31().gf6_1);
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? DatePolicyUtils_getInstance().deb(data, Companion_getInstance_31().gf6_1) : tmp1_elvis_lhs;
    return tmp2_elvis_lhs == null ? DatePolicyUtils_getInstance().eeb(data, Companion_getInstance_31().hf6_1) : tmp2_elvis_lhs;
  }
  function buildFailureResult_0($this, now, nbf, key) {
    // Inline function 'kotlin.let' call
    var it = nbf.l6c(now);
    // Inline function 'kotlin.Companion.failure' call
    var exception = new NotBeforePolicyException(nbf, nbf.f60(), it, _Duration___get_inWholeSeconds__impl__hpy7b3(it), key.jd6());
    return _Result___init__impl__xyqfz8(createFailure(exception));
  }
  function buildSuccessResult_0($this, now, nbf, key) {
    // Inline function 'kotlin.let' call
    var it = now.l6c(nbf);
    // Inline function 'kotlin.Companion.success' call
    var value = new JsonObject(mapOf_0([to('date', JsonPrimitive_0(nbf.toString())), to('date_seconds', JsonPrimitive_2(nbf.f60())), to('available_since', JsonPrimitive_0(Duration__toString_impl_8d916b(it))), to('available_since_seconds', JsonPrimitive_2(_Duration___get_inWholeSeconds__impl__hpy7b3(it))), to('used_key', JsonPrimitive_0(key.jd6())), to('policy_available', JsonPrimitive(true))]));
    return _Result___init__impl__xyqfz8(value);
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.NotBeforeDatePolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.if6_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).jf6 = function (encoder, value) {
    var tmp0_desc = this.if6_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_31().ff6_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.kf6_1 === 'not-before')) {
      tmp1_output.y25(tmp0_desc, 0, value.kf6_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.lf6_1 === 'Verifies that the credentials not-before date (for JWT: `nbf`, if unavailable: `iat` - 1 min) is correctly exceeded.')) {
      tmp1_output.y25(tmp0_desc, 1, value.lf6_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.mf6_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.mf6_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_20).x20 = function (encoder, value) {
    return this.jf6(encoder, value instanceof NotBeforeDatePolicy ? value : THROW_CCE());
  };
  protoOf($serializer_20).y20 = function (decoder) {
    var tmp0_desc = this.if6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_31().ff6_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return NotBeforeDatePolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_20).w20 = function () {
    return this.if6_1;
  };
  protoOf($serializer_20).o2c = function () {
    var tmp0_cached = Companion_getInstance_31().ff6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function NotBeforeDatePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_20().if6_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.kf6_1 = 'not-before';
    else
      $this.kf6_1 = name;
    if (0 === (seen0 & 2))
      $this.lf6_1 = 'Verifies that the credentials not-before date (for JWT: `nbf`, if unavailable: `iat` - 1 min) is correctly exceeded.';
    else
      $this.lf6_1 = description;
    if (0 === (seen0 & 4))
      $this.mf6_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
    else
      $this.mf6_1 = supportedVCFormats;
    return $this;
  }
  function NotBeforeDatePolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return NotBeforeDatePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(NotBeforeDatePolicy)));
  }
  function NotBeforeDatePolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.vf6_1 = this$0;
    this.wf6_1 = $data;
    this.xf6_1 = $args;
    this.yf6_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NotBeforeDatePolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(NotBeforeDatePolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(NotBeforeDatePolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.vf6_1.mea(this.wf6_1, this.xf6_1, this.yf6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(NotBeforeDatePolicy$verifyAsync$slambda).ja = function (completion) {
    return new NotBeforeDatePolicy$verifyAsync$slambda(this.vf6_1, this.wf6_1, this.xf6_1, this.yf6_1, completion);
  };
  function NotBeforeDatePolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new NotBeforeDatePolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function NotBeforeDatePolicy() {
    Companion_getInstance_31();
    CredentialWrapperValidatorPolicy.call(this);
    this.kf6_1 = 'not-before';
    this.lf6_1 = 'Verifies that the credentials not-before date (for JWT: `nbf`, if unavailable: `iat` - 1 min) is correctly exceeded.';
    this.mf6_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
  }
  protoOf(NotBeforeDatePolicy).v2 = function () {
    return this.kf6_1;
  };
  protoOf(NotBeforeDatePolicy).zat = function () {
    return this.lf6_1;
  };
  protoOf(NotBeforeDatePolicy).oea = function () {
    return this.mf6_1;
  };
  protoOf(NotBeforeDatePolicy).mea = function (data, args, context, $completion) {
    var tmp0_elvis_lhs = getIssuanceDateKeyValuePair(this, data);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new Result(DatePolicyUtils_getInstance().ceb_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var nbf = tmp;
    var now = System_instance.j5v();
    var tmp_0;
    if (isBeyondNow(this, nbf, now)) {
      tmp_0 = buildFailureResult_0(this, now, nbf.cc_1, nbf.bc_1);
    } else {
      tmp_0 = buildSuccessResult_0(this, now, nbf.cc_1, nbf.bc_1);
    }
    return new Result(tmp_0);
  };
  protoOf(NotBeforeDatePolicy).nea = function (data, args, context) {
    var tmp = NotBeforeDatePolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function _get_$cachedSerializer__te6jhj_4($this) {
    return $this.af7_1.c1();
  }
  function RevocationPolicyMp$Companion$$childSerializers$_anonymous__58hkhj() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function RevocationPolicyMp$Companion$_anonymous__qf91lw() {
    var tmp = getKClass(RevocationPolicyMp);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [new JsonClassDiscriminator('type')];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion_27() {
    Companion_instance_31 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.zf6_1 = [null, null, lazy(tmp_0, RevocationPolicyMp$Companion$$childSerializers$_anonymous__58hkhj)];
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_1.af7_1 = lazy(tmp_2, RevocationPolicyMp$Companion$_anonymous__qf91lw);
  }
  protoOf(Companion_27).o4u = function () {
    return _get_$cachedSerializer__te6jhj_4(this);
  };
  protoOf(Companion_27).z2c = function (typeParamsSerializers) {
    return this.o4u();
  };
  var Companion_instance_31;
  function Companion_getInstance_32() {
    if (Companion_instance_31 == null)
      new Companion_27();
    return Companion_instance_31;
  }
  function RevocationPolicyMp_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.bf7_1 = 'revoked-status-list';
    else
      $this.bf7_1 = name;
    if (0 === (seen0 & 2))
      $this.cf7_1 = 'Verifies Credential Status';
    else
      $this.cf7_1 = description;
    if (0 === (seen0 & 4))
      $this.df7_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
    else
      $this.df7_1 = supportedVCFormats;
    return $this;
  }
  function RevocationPolicyMp() {
    Companion_getInstance_32();
    CredentialWrapperValidatorPolicy.call(this);
    this.bf7_1 = 'revoked-status-list';
    this.cf7_1 = 'Verifies Credential Status';
    this.df7_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
  }
  protoOf(RevocationPolicyMp).v2 = function () {
    return this.bf7_1;
  };
  protoOf(RevocationPolicyMp).zat = function () {
    return this.cf7_1;
  };
  protoOf(RevocationPolicyMp).oea = function () {
    return this.df7_1;
  };
  function resolveIssuerKeysFromSdJwt($this, sdJwt, $completion) {
    var tmp = new $resolveIssuerKeysFromSdJwtCOROUTINE$12($this, sdJwt, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function SdJwtVCSignaturePolicy$verifyAsync$slambda(this$0, $credential, $args, $context, resultContinuation) {
    this.ff8_1 = this$0;
    this.gf8_1 = $credential;
    this.hf8_1 = $args;
    this.if8_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SdJwtVCSignaturePolicy$verifyAsync$slambda).e6p = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(SdJwtVCSignaturePolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.e6p($completion);
  };
  protoOf(SdJwtVCSignaturePolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.ff8_1.mf8(this.gf8_1, this.hf8_1, this.if8_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(SdJwtVCSignaturePolicy$verifyAsync$slambda).ja = function (completion) {
    return new SdJwtVCSignaturePolicy$verifyAsync$slambda(this.ff8_1, this.gf8_1, this.hf8_1, this.if8_1, completion);
  };
  function SdJwtVCSignaturePolicy$verifyAsync$slambda_0(this$0, $credential, $args, $context, resultContinuation) {
    var i = new SdJwtVCSignaturePolicy$verifyAsync$slambda(this$0, $credential, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.e6p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveIssuerKeysFromSdJwtCOROUTINE$12(_this__u8e3s4, sdJwt, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mf7_1 = _this__u8e3s4;
    this.nf7_1 = sdJwt;
  }
  protoOf($resolveIssuerKeysFromSdJwtCOROUTINE$12).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.nf7_1.yc8_1;
            tmp_0.of7_1 = tmp0_elvis_lhs == null ? UuidUtils_instance.k9d() : tmp0_elvis_lhs;
            if (DidUtils_getInstance().isDidUrl(this.of7_1)) {
              this.n9_1 = 4;
              suspendResult = DidService_getInstance().e9x(this.of7_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 5;
              continue $sm;
            } else {
              var tmp_1 = this;
              var tmp1_safe_receiver = this.nf7_1.header.bf('x5c');
              var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonArray(tmp1_safe_receiver);
              var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : lastOrNull(tmp2_safe_receiver);
              var tmp_2;
              if (tmp3_elvis_lhs == null) {
                throw IllegalArgumentException_init_$Create$('x5c header parameter is missing or empty.');
              } else {
                tmp_2 = tmp3_elvis_lhs;
              }
              tmp_1.qf7_1 = tmp_2;
              this.n9_1 = 1;
              suspendResult = Companion_instance_2.c78(get_jsonPrimitive(this.qf7_1).s4u(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.rf7_1 = suspendResult.wp_1;
            suspendResult = new Result(this.rf7_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.sf7_1 = suspendResult.wp_1;
            var tmp_3 = this;
            var this_0 = this.sf7_1;
            throwOnFailure(this_0);
            var tmp_4 = _Result___get_value__impl__bjfvqg(this_0);
            tmp_3.tf7_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
            this.uf7_1 = this.tf7_1;
            var tmp_5 = this;
            tmp_5.vf7_1 = this.uf7_1;
            this.wf7_1 = this.vf7_1;
            this.n9_1 = 3;
            suspendResult = this.wf7_1.p6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var key = new JWKKey(ARGUMENT, this.of7_1);
            this.pf7_1 = setOf_0(key);
            this.n9_1 = 6;
            continue $sm;
          case 4:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 5;
            continue $sm;
          case 5:
            var tmp_6 = this;
            var this_1 = suspendResult.wp_1;
            throwOnFailure(this_1);
            var tmp_7 = _Result___get_value__impl__bjfvqg(this_1);
            tmp_6.pf7_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
            this.n9_1 = 6;
            continue $sm;
          case 6:
            return this.pf7_1;
          case 7:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 7) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $verifyCOROUTINE$13(_this__u8e3s4, credential, args, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vf8_1 = _this__u8e3s4;
    this.wf8_1 = credential;
    this.xf8_1 = args;
    this.yf8_1 = context;
  }
  protoOf($verifyCOROUTINE$13).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 22;
            var tmp_0 = this;
            tmp_0.zf8_1 = this.vf8_1;
            this.af9_1 = this.zf8_1;
            this.o9_1 = 21;
            var tmp_1 = this;
            tmp_1.cf9_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.df9_1 = this.af9_1;
            this.ef9_1 = this.df9_1;
            this.ff9_1 = Companion_instance_0.cq(this.wf8_1);
            if (!this.ff9_1.isPresentation) {
              this.n9_1 = 10;
              suspendResult = resolveIssuerKeysFromSdJwt(this.ef9_1, this.ff9_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = resolveIssuerKeysFromSdJwt(this.ef9_1, this.ff9_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.hf9_1 = suspendResult;
            var tmp_3 = this;
            var tmp0_elvis_lhs = firstOrNull(this.hf9_1);
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              throw new VerificationException('No issuer keys found in the DID document');
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_3.if9_1 = tmp_4;
            this.n9_1 = 2;
            suspendResult = Companion_instance_2.z7i(toString_0(this.ff9_1.xc8_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.jf9_1 = suspendResult.wp_1;
            suspendResult = new Result(this.jf9_1);
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.kf9_1 = suspendResult.wp_1;
            var tmp_5 = this;
            var this_0 = this.kf9_1;
            throwOnFailure(this_0);
            var tmp_6 = _Result___get_value__impl__bjfvqg(this_0);
            tmp_5.lf9_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
            var tmp_7 = this;
            tmp_7.mf9_1 = this.hf9_1;
            this.nf9_1 = this.mf9_1;
            this.of9_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.nf9_1, 10)), 16);
            var tmp_8 = this;
            tmp_8.pf9_1 = this.nf9_1;
            var tmp_9 = this;
            tmp_9.qf9_1 = LinkedHashMap_init_$Create$(this.of9_1);
            this.rf9_1 = this.pf9_1;
            this.sf9_1 = this.qf9_1;
            this.tf9_1 = this.rf9_1.q();
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (!this.tf9_1.r()) {
              this.n9_1 = 6;
              continue $sm;
            }

            this.uf9_1 = this.tf9_1.s();
            var tmp_10 = this;
            tmp_10.vf9_1 = this.uf9_1;
            this.wf9_1 = this.vf9_1;
            this.n9_1 = 5;
            suspendResult = this.wf9_1.j6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.xf9_1 = suspendResult;
            this.sf9_1.q2(this.xf9_1, this.uf9_1);
            this.n9_1 = 4;
            continue $sm;
          case 6:
            this.yf9_1 = this.sf9_1;
            this.zf9_1 = toMutableMap(this.yf9_1);
            var tmp_11 = this;
            tmp_11.afa_1 = this.zf9_1;
            this.bfa_1 = this.ff9_1.keyID;
            if (this.bfa_1 == null) {
              this.n9_1 = 7;
              suspendResult = this.if9_1.j6m(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.cfa_1 = this.bfa_1;
              this.n9_1 = 8;
              continue $sm;
            }

          case 7:
            this.cfa_1 = suspendResult;
            this.n9_1 = 8;
            continue $sm;
          case 8:
            this.dfa_1 = this.cfa_1;
            var tmp_12 = this;
            tmp_12.efa_1 = this.if9_1;
            var this_1 = this.afa_1;
            var key = this.dfa_1;
            var value = this.efa_1;
            this_1.q2(key, value);
            var tmp_13 = this;
            tmp_13.ffa_1 = this.zf9_1;
            this.n9_1 = 9;
            suspendResult = this.lf9_1.j6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.gfa_1 = suspendResult;
            var tmp_14 = this;
            tmp_14.hfa_1 = this.lf9_1;
            var this_2 = this.ffa_1;
            var key_0 = this.gfa_1;
            var value_0 = this.hfa_1;
            this_2.q2(key_0, value_0);
            var tmp_15 = this;
            var tmp_16 = JWTCryptoProviderManager_instance.ef6(this.zf9_1);
            var tmp2_safe_receiver = this.yf8_1.n2('clientId');
            var tmp_17 = tmp2_safe_receiver == null ? null : toString(tmp2_safe_receiver);
            var tmp3_safe_receiver = this.yf8_1.n2('challenge');
            tmp_15.ifa_1 = this.ff9_1.ec9(tmp_16, true, tmp_17, tmp3_safe_receiver == null ? null : toString(tmp3_safe_receiver));
            if (!this.ifa_1.cca()) {
              throw new VerificationException('SD-JWT verification failed');
            }

            this.gf9_1 = this.ff9_1.zzz_unused_undisclosedPayload;
            this.n9_1 = 20;
            continue $sm;
          case 10:
            this.jfa_1 = suspendResult;
            if (this.jfa_1.h()) {
              throw new VerificationException('No issuer keys found in the DID document');
            }

            var tmp_18 = this;
            tmp_18.kfa_1 = this.ef9_1;
            var tmp_19 = this;
            tmp_19.lfa_1 = this.jfa_1;
            this.mfa_1 = this.kfa_1;
            this.nfa_1 = this.lfa_1;
            var tmp_20 = this;
            tmp_20.ofa_1 = ArrayList_init_$Create$();
            var tmp_21 = this;
            tmp_21.pfa_1 = this.nfa_1;
            this.qfa_1 = Unit_instance;
            this.n9_1 = 11;
            continue $sm;
          case 11:
            this.rfa_1 = this.pfa_1;
            this.sfa_1 = this.rfa_1.q();
            this.n9_1 = 12;
            continue $sm;
          case 12:
            if (!this.sfa_1.r()) {
              this.n9_1 = 18;
              continue $sm;
            }

            this.tfa_1 = this.sfa_1.s();
            var tmp_22 = this;
            tmp_22.ufa_1 = this.tfa_1;
            this.vfa_1 = this.ufa_1;
            var tmp_23 = this;
            tmp_23.wfa_1 = this.nfa_1;
            this.xfa_1 = this.wfa_1;
            this.o9_1 = 15;
            var tmp_24 = this;
            tmp_24.zfa_1 = Companion_instance;
            var tmp_25 = this;
            tmp_25.afb_1 = this.xfa_1;
            this.bfb_1 = this.afb_1;
            var tmp_26 = this;
            tmp_26.cfb_1 = this.vfa_1;
            this.dfb_1 = this.cfb_1;
            this.n9_1 = 13;
            suspendResult = this.dfb_1.f6p(this.wf8_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 14;
            continue $sm;
          case 13:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 14;
            continue $sm;
          case 14:
            var tmp1 = suspendResult;
            var tmp_27 = this;
            this.zfa_1;
            tmp_27.yfa_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 21;
            this.n9_1 = 16;
            continue $sm;
          case 15:
            this.o9_1 = 21;
            var tmp_28 = this.q9_1;
            if (tmp_28 instanceof Error) {
              var e = this.q9_1;
              var tmp_29 = this;
              tmp_29.yfa_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 16;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 16:
            this.o9_1 = 21;
            var this_3 = this.yfa_1;
            var exception = Result__exceptionOrNull_impl_p6xea9(this_3);
            var tmp_30;
            if (exception == null) {
              var tmp_31 = _Result___get_value__impl__bjfvqg(this_3);
              tmp_30 = (tmp_31 == null ? true : !(tmp_31 == null)) ? tmp_31 : THROW_CCE();
            } else {
              this.ofa_1.n(exception);
              tmp_30 = null;
            }

            var result = tmp_30;
            if (!(result == null)) {
              this.qfa_1 = result;
              this.n9_1 = 19;
              continue $sm;
            } else {
              this.n9_1 = 17;
              continue $sm;
            }

          case 17:
            this.n9_1 = 12;
            continue $sm;
          case 18:
            this.qfa_1 = null;
            if (false) {
              this.n9_1 = 11;
              continue $sm;
            }

            this.n9_1 = 19;
            continue $sm;
          case 19:
            var tmp0_elvis_lhs_0 = this.qfa_1;
            var tmp_32;
            if (tmp0_elvis_lhs_0 == null) {
              var failures = this.ofa_1;
              throw new VerificationException('Verification failed with all keys from the DID document', lastOrNull(failures));
            } else {
              tmp_32 = tmp0_elvis_lhs_0;
            }

            var tmp_33 = this;
            var this_4 = tmp_32.wp_1;
            throwOnFailure(this_4);
            var tmp_34 = _Result___get_value__impl__bjfvqg(this_4);
            tmp_33.gf9_1 = (tmp_34 == null ? true : !(tmp_34 == null)) ? tmp_34 : THROW_CCE();
            this.n9_1 = 20;
            continue $sm;
          case 20:
            var tmp1_0 = this.gf9_1;
            var tmp_35 = this;
            this.cf9_1;
            tmp_35.bf9_1 = _Result___init__impl__xyqfz8(tmp1_0);
            this.o9_1 = 22;
            this.n9_1 = 23;
            continue $sm;
          case 21:
            this.o9_1 = 22;
            var tmp_36 = this.q9_1;
            if (tmp_36 instanceof Error) {
              var e_0 = this.q9_1;
              var tmp_37 = this;
              tmp_37.bf9_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.n9_1 = 23;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 22:
            throw this.q9_1;
          case 23:
            this.o9_1 = 22;
            return new Result(this.bf9_1);
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.o9_1 === 22) {
          throw e_1;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_1;
        }
      }
     while (true);
  };
  function SdJwtVCSignaturePolicy() {
    JwtVerificationPolicy.call(this);
    this.jf8_1 = 'signature_sd-jwt-vc';
    this.kf8_1 = 'Checks a SD-JWT-VC credential by verifying its cryptographic signature using the key referenced by the DID in `iss`.';
    this.lf8_1 = setOf_0(VCFormat_sd_jwt_vc_getInstance());
  }
  protoOf(SdJwtVCSignaturePolicy).v2 = function () {
    return this.jf8_1;
  };
  protoOf(SdJwtVCSignaturePolicy).zat = function () {
    return this.kf8_1;
  };
  protoOf(SdJwtVCSignaturePolicy).oea = function () {
    return this.lf8_1;
  };
  protoOf(SdJwtVCSignaturePolicy).mf8 = function (credential, args, context, $completion) {
    var tmp = new $verifyCOROUTINE$13(this, credential, args, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(SdJwtVCSignaturePolicy).yed = function (credential, args, context, $completion) {
    return this.mf8(credential, args, context, $completion);
  };
  protoOf(SdJwtVCSignaturePolicy).zed = function (credential, args, context) {
    var tmp = SdJwtVCSignaturePolicy$verifyAsync$slambda_0(this, credential, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function _get_$cachedSerializer__te6jhj_5($this) {
    return $this.ffb_1.c1();
  }
  function StatusPolicyMp$Companion$$childSerializers$_anonymous__yie2jh() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function StatusPolicyMp$Companion$_anonymous__qvinns() {
    var tmp = getKClass(StatusPolicyMp);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [new JsonClassDiscriminator('type')];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion_28() {
    Companion_instance_32 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.efb_1 = [null, null, lazy(tmp_0, StatusPolicyMp$Companion$$childSerializers$_anonymous__yie2jh)];
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_1.ffb_1 = lazy(tmp_2, StatusPolicyMp$Companion$_anonymous__qvinns);
  }
  protoOf(Companion_28).o4u = function () {
    return _get_$cachedSerializer__te6jhj_5(this);
  };
  protoOf(Companion_28).z2c = function (typeParamsSerializers) {
    return this.o4u();
  };
  var Companion_instance_32;
  function Companion_getInstance_33() {
    if (Companion_instance_32 == null)
      new Companion_28();
    return Companion_instance_32;
  }
  function StatusPolicyMp_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.gfb_1 = 'credential-status';
    else
      $this.gfb_1 = name;
    if (0 === (seen0 & 2))
      $this.hfb_1 = 'Verifies Credential Status';
    else
      $this.hfb_1 = description;
    if (0 === (seen0 & 4))
      $this.ifb_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
    else
      $this.ifb_1 = supportedVCFormats;
    var tmp = $this;
    var tmp_0 = KotlinLogging_instance;
    tmp.jfb_1 = tmp_0.c6h(StatusPolicyMp$_init_$lambda_wbwx6s);
    return $this;
  }
  function StatusPolicyMp$logger$lambda() {
    return Unit_instance;
  }
  function StatusPolicyMp$_init_$lambda_wbwx6s() {
    return Unit_instance;
  }
  function StatusPolicyMp() {
    Companion_getInstance_33();
    CredentialWrapperValidatorPolicy.call(this);
    this.gfb_1 = 'credential-status';
    this.hfb_1 = 'Verifies Credential Status';
    this.ifb_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
    var tmp = this;
    var tmp_0 = KotlinLogging_instance;
    tmp.jfb_1 = tmp_0.c6h(StatusPolicyMp$logger$lambda);
  }
  protoOf(StatusPolicyMp).v2 = function () {
    return this.gfb_1;
  };
  protoOf(StatusPolicyMp).zat = function () {
    return this.hfb_1;
  };
  protoOf(StatusPolicyMp).oea = function () {
    return this.ifb_1;
  };
  function WebhookPolicy$Companion$$childSerializers$_anonymous__ngamu7() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function WebhookPolicy$Companion$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.r3l(tmp, WebhookPolicy$Companion$http$lambda$lambda);
    return Unit_instance;
  }
  function WebhookPolicy$Companion$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function Companion_29() {
    Companion_instance_33 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.kfb_1 = [null, null, lazy(tmp_0, WebhookPolicy$Companion$$childSerializers$_anonymous__ngamu7)];
    var tmp_1 = this;
    tmp_1.lfb_1 = HttpClient(WebhookPolicy$Companion$http$lambda);
  }
  protoOf(Companion_29).o4u = function () {
    return $serializer_getInstance_21();
  };
  var Companion_instance_33;
  function Companion_getInstance_34() {
    if (Companion_instance_33 == null)
      new Companion_29();
    return Companion_instance_33;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.WebhookPolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.mfb_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).nfb = function (encoder, value) {
    var tmp0_desc = this.mfb_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_34().kfb_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.ofb_1 === 'webhook')) {
      tmp1_output.y25(tmp0_desc, 0, value.ofb_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.pfb_1 === 'Sends the credential data to an webhook URL as HTTP POST, and returns the verified status based on the webhooks set status code (success = 200 - 299).')) {
      tmp1_output.y25(tmp0_desc, 1, value.pfb_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.qfb_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.qfb_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_21).x20 = function (encoder, value) {
    return this.nfb(encoder, value instanceof WebhookPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_21).y20 = function (decoder) {
    var tmp0_desc = this.mfb_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_34().kfb_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return WebhookPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_21).w20 = function () {
    return this.mfb_1;
  };
  protoOf($serializer_21).o2c = function () {
    var tmp0_cached = Companion_getInstance_34().kfb_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function WebhookPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_21().mfb_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.ofb_1 = 'webhook';
    else
      $this.ofb_1 = name;
    if (0 === (seen0 & 2))
      $this.pfb_1 = 'Sends the credential data to an webhook URL as HTTP POST, and returns the verified status based on the webhooks set status code (success = 200 - 299).';
    else
      $this.pfb_1 = description;
    if (0 === (seen0 & 4))
      $this.qfb_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
    else
      $this.qfb_1 = supportedVCFormats;
    return $this;
  }
  function WebhookPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return WebhookPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(WebhookPolicy)));
  }
  function WebhookPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.zfb_1 = this$0;
    this.afc_1 = $data;
    this.bfc_1 = $args;
    this.cfc_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebhookPolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(WebhookPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(WebhookPolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.zfb_1.mea(this.afc_1, this.bfc_1, this.cfc_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(WebhookPolicy$verifyAsync$slambda).ja = function (completion) {
    return new WebhookPolicy$verifyAsync$slambda(this.zfb_1, this.afc_1, this.bfc_1, this.cfc_1, completion);
  };
  function WebhookPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new WebhookPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $verifyCOROUTINE$14(_this__u8e3s4, data, args, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lfc_1 = _this__u8e3s4;
    this.mfc_1 = data;
    this.nfc_1 = args;
    this.ofc_1 = context;
  }
  protoOf($verifyCOROUTINE$14).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            var tmp_1 = this.nfc_1;
            tmp_0.pfc_1 = (tmp_1 instanceof JsonPrimitive_1 ? tmp_1 : THROW_CCE()).s4u();
            var tmp_2 = this;
            tmp_2.qfc_1 = Companion_getInstance_34().lfb_1;
            var tmp_3 = this;
            tmp_3.rfc_1 = this.pfc_1;
            this.sfc_1 = this.qfc_1;
            this.tfc_1 = this.rfc_1;
            var tmp_4 = this;
            tmp_4.ufc_1 = this.sfc_1;
            this.vfc_1 = this.ufc_1;
            var tmp_5 = this;
            tmp_5.wfc_1 = this.vfc_1;
            var tmp_6 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.tfc_1);
            var body = this.mfc_1;
            if (body == null) {
              this_0.n3k_1 = NullBody_instance;
              var tmp_7 = getKClass(JsonObject);
              var tmp_8;
              try {
                tmp_8 = createKType(getKClass(JsonObject), arrayOf([]), false);
              } catch ($p) {
                var tmp_9;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_9 = null;
                } else {
                  throw $p;
                }
                tmp_8 = tmp_9;
              }
              this_0.g3q(new TypeInfo(tmp_7, tmp_8));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.n3k_1 = body;
                this_0.g3q(null);
              } else {
                this_0.n3k_1 = body;
                var tmp_10 = getKClass(JsonObject);
                var tmp_11;
                try {
                  tmp_11 = createKType(getKClass(JsonObject), arrayOf([]), false);
                } catch ($p) {
                  var tmp_12;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_12 = null;
                  } else {
                    throw $p;
                  }
                  tmp_11 = tmp_12;
                }
                this_0.g3q(new TypeInfo(tmp_10, tmp_11));
              }
            }

            header(this_0, HttpHeaders_getInstance().s2y_1, Application_getInstance().a2w_1);
            tmp_6.xfc_1 = this_0;
            this.yfc_1 = this.wfc_1;
            this.zfc_1 = this.xfc_1;
            this.zfc_1.l3k_1 = Companion_getInstance_2().f32_1;
            var tmp_13 = this;
            tmp_13.afd_1 = this.yfc_1;
            var tmp_14 = this;
            tmp_14.bfd_1 = this.zfc_1;
            this.cfd_1 = this.afd_1;
            this.dfd_1 = this.bfd_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.dfd_1, this.cfd_1)).t4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.efd_1 = suspendResult;
            if (isSuccess(this.efd_1.r37())) {
              var tmp_15 = this;
              tmp_15.gfd_1 = Companion_instance;
              var tmp_16 = this;
              tmp_16.hfd_1 = this.efd_1;
              this.ifd_1 = this.hfd_1;
              this.n9_1 = 3;
              var tmp_17 = this.ifd_1.s3n();
              var tmp_18 = getKClass(JsonObject);
              var tmp_19;
              try {
                tmp_19 = createKType(getKClass(JsonObject), arrayOf([]), false);
              } catch ($p) {
                var tmp_20;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3_1 = $p;
                  tmp_20 = null;
                } else {
                  throw $p;
                }
                tmp_19 = tmp_20;
              }
              suspendResult = tmp_17.v3m(new TypeInfo(tmp_18, tmp_19), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_21 = this;
              tmp_21.jfd_1 = Companion_instance;
              var tmp_22 = this;
              tmp_22.kfd_1 = this.efd_1;
              this.lfd_1 = this.kfd_1;
              this.n9_1 = 2;
              var tmp_23 = this.lfd_1.s3n();
              var tmp_24 = getKClass(JsonObject);
              var tmp_25;
              try {
                tmp_25 = createKType(getKClass(JsonObject), arrayOf([]), false);
              } catch ($p) {
                var tmp_26;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3_2 = $p;
                  tmp_26 = null;
                } else {
                  throw $p;
                }
                tmp_25 = tmp_26;
              }
              suspendResult = tmp_23.v3m(new TypeInfo(tmp_24, tmp_25), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var ARGUMENT = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp8 = new WebhookPolicyException(ARGUMENT);
            var tmp_27 = this;
            this.jfd_1;
            tmp_27.ffd_1 = _Result___init__impl__xyqfz8(createFailure(tmp8));
            this.n9_1 = 4;
            continue $sm;
          case 3:
            var tmp5 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp_28 = this;
            this.gfd_1;
            tmp_28.ffd_1 = _Result___init__impl__xyqfz8(tmp5);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return new Result(this.ffd_1);
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
  protoOf($verifyCOROUTINE$14)['<set-state>'] = protoOf($verifyCOROUTINE$14).u9;
  protoOf($verifyCOROUTINE$14)['<get-state>'] = protoOf($verifyCOROUTINE$14).v9;
  protoOf($verifyCOROUTINE$14)['<set-exceptionState>'] = protoOf($verifyCOROUTINE$14).w9;
  protoOf($verifyCOROUTINE$14)['<get-exceptionState>'] = protoOf($verifyCOROUTINE$14).x9;
  protoOf($verifyCOROUTINE$14)['<set-result>'] = protoOf($verifyCOROUTINE$14).y9;
  protoOf($verifyCOROUTINE$14)['<get-result>'] = protoOf($verifyCOROUTINE$14).z9;
  protoOf($verifyCOROUTINE$14)['<set-exception>'] = protoOf($verifyCOROUTINE$14).aa;
  protoOf($verifyCOROUTINE$14)['<get-exception>'] = protoOf($verifyCOROUTINE$14).ba;
  protoOf($verifyCOROUTINE$14)['<set-finallyPath>'] = protoOf($verifyCOROUTINE$14).ca;
  protoOf($verifyCOROUTINE$14)['<get-finallyPath>'] = protoOf($verifyCOROUTINE$14).da;
  protoOf($verifyCOROUTINE$14)['<get-context>'] = protoOf($verifyCOROUTINE$14).t9;
  function WebhookPolicy() {
    Companion_getInstance_34();
    CredentialWrapperValidatorPolicy.call(this);
    this.ofb_1 = 'webhook';
    this.pfb_1 = 'Sends the credential data to an webhook URL as HTTP POST, and returns the verified status based on the webhooks set status code (success = 200 - 299).';
    this.qfb_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
  }
  protoOf(WebhookPolicy).v2 = function () {
    return this.ofb_1;
  };
  protoOf(WebhookPolicy).zat = function () {
    return this.pfb_1;
  };
  protoOf(WebhookPolicy).oea = function () {
    return this.qfb_1;
  };
  protoOf(WebhookPolicy).mea = function (data, args, context, $completion) {
    var tmp = new $verifyCOROUTINE$14(this, data, args, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(WebhookPolicy).nea = function (data, args, context) {
    var tmp = WebhookPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function HolderBindingPolicy$Companion$$childSerializers$_anonymous__9o080v() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function Companion_30() {
    Companion_instance_34 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.mfd_1 = [null, null, lazy(tmp_0, HolderBindingPolicy$Companion$$childSerializers$_anonymous__9o080v)];
  }
  protoOf(Companion_30).o4u = function () {
    return $serializer_getInstance_22();
  };
  var Companion_instance_34;
  function Companion_getInstance_35() {
    if (Companion_instance_34 == null)
      new Companion_30();
    return Companion_instance_34;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.vp.HolderBindingPolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.nfd_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).ofd = function (encoder, value) {
    var tmp0_desc = this.nfd_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_35().mfd_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.pfd_1 === 'holder-binding')) {
      tmp1_output.y25(tmp0_desc, 0, value.pfd_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.qfd_1 === 'Verifies that issuer of the Verifiable Presentation (presenter) is also the subject of all Verifiable Credentials contained within.')) {
      tmp1_output.y25(tmp0_desc, 1, value.qfd_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.rfd_1, setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.rfd_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_22).x20 = function (encoder, value) {
    return this.ofd(encoder, value instanceof HolderBindingPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_22).y20 = function (decoder) {
    var tmp0_desc = this.nfd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_35().mfd_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return HolderBindingPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_22).w20 = function () {
    return this.nfd_1;
  };
  protoOf($serializer_22).o2c = function () {
    var tmp0_cached = Companion_getInstance_35().mfd_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function HolderBindingPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_22().nfd_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.pfd_1 = 'holder-binding';
    else
      $this.pfd_1 = name;
    if (0 === (seen0 & 2))
      $this.qfd_1 = 'Verifies that issuer of the Verifiable Presentation (presenter) is also the subject of all Verifiable Credentials contained within.';
    else
      $this.qfd_1 = description;
    if (0 === (seen0 & 4))
      $this.rfd_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
    else
      $this.rfd_1 = supportedVCFormats;
    return $this;
  }
  function HolderBindingPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return HolderBindingPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(HolderBindingPolicy)));
  }
  function HolderBindingPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.afe_1 = this$0;
    this.bfe_1 = $data;
    this.cfe_1 = $args;
    this.dfe_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HolderBindingPolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(HolderBindingPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(HolderBindingPolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.afe_1.mea(this.bfe_1, this.cfe_1, this.dfe_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(HolderBindingPolicy$verifyAsync$slambda).ja = function (completion) {
    return new HolderBindingPolicy$verifyAsync$slambda(this.afe_1, this.bfe_1, this.cfe_1, this.dfe_1, completion);
  };
  function HolderBindingPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new HolderBindingPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function HolderBindingPolicy() {
    Companion_getInstance_35();
    CredentialWrapperValidatorPolicy.call(this);
    this.pfd_1 = 'holder-binding';
    this.qfd_1 = 'Verifies that issuer of the Verifiable Presentation (presenter) is also the subject of all Verifiable Credentials contained within.';
    this.rfd_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
  }
  protoOf(HolderBindingPolicy).v2 = function () {
    return this.pfd_1;
  };
  protoOf(HolderBindingPolicy).zat = function () {
    return this.qfd_1;
  };
  protoOf(HolderBindingPolicy).oea = function () {
    return this.rfd_1;
  };
  protoOf(HolderBindingPolicy).mea = function (data, args, context, $completion) {
    var presenterDid = get_jsonPrimitive(ensureNotNull(data.bf('iss'))).s4u();
    var tmp0_safe_receiver = data.bf('vp');
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No "vp" field in VP!');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var vp = tmp;
    var tmp2_safe_receiver = vp.bf('verifiableCredential');
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : get_jsonArray(tmp2_safe_receiver);
    var tmp_0;
    if (tmp3_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No "verifiableCredential" field in "vp"!');
    } else {
      tmp_0 = tmp3_elvis_lhs;
    }
    var credentials = tmp_0;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(credentials, 10));
    var _iterator__ex2g4s = credentials.q();
    while (_iterator__ex2g4s.r()) {
      var item = _iterator__ex2g4s.s();
      var tmp$ret$0 = first(split(get_jsonPrimitive(ensureNotNull(JwsUtils_instance.decodeJws(get_jsonPrimitive(item).s4u()).payload.bf('sub'))).s4u(), ['#']));
      destination.n(tmp$ret$0);
    }
    var credentialSubjects = destination;
    var tmp_1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp_2;
      if (isInterface(credentialSubjects, Collection)) {
        tmp_2 = credentialSubjects.h();
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$3 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s_0 = credentialSubjects.q();
      while (_iterator__ex2g4s_0.r()) {
        var element = _iterator__ex2g4s_0.s();
        if (!(element === presenterDid)) {
          tmp$ret$3 = false;
          break $l$block_0;
        }
      }
      tmp$ret$3 = true;
    }
    if (tmp$ret$3) {
      // Inline function 'kotlin.Companion.success' call
      tmp_1 = _Result___init__impl__xyqfz8(presenterDid);
    } else {
      // Inline function 'kotlin.Companion.failure' call
      var exception = new HolderBindingException(presenterDid, credentialSubjects);
      tmp_1 = _Result___init__impl__xyqfz8(createFailure(exception));
    }
    return new Result(tmp_1);
  };
  protoOf(HolderBindingPolicy).nea = function (data, args, context) {
    var tmp = HolderBindingPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function MaximumCredentialsPolicy$Companion$$childSerializers$_anonymous__jldmho() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function Companion_31() {
    Companion_instance_35 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.efe_1 = [null, null, lazy(tmp_0, MaximumCredentialsPolicy$Companion$$childSerializers$_anonymous__jldmho)];
  }
  protoOf(Companion_31).o4u = function () {
    return $serializer_getInstance_23();
  };
  var Companion_instance_35;
  function Companion_getInstance_36() {
    if (Companion_instance_35 == null)
      new Companion_31();
    return Companion_instance_35;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.vp.MaximumCredentialsPolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.ffe_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).gfe = function (encoder, value) {
    var tmp0_desc = this.ffe_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_36().efe_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.hfe_1 === 'maximum-credentials')) {
      tmp1_output.y25(tmp0_desc, 0, value.hfe_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.ife_1 === 'Verifies that a maximum number of credentials in the Verifiable Presentation is not exceeded')) {
      tmp1_output.y25(tmp0_desc, 1, value.ife_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.jfe_1, setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.jfe_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_23).x20 = function (encoder, value) {
    return this.gfe(encoder, value instanceof MaximumCredentialsPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_23).y20 = function (decoder) {
    var tmp0_desc = this.ffe_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_36().efe_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return MaximumCredentialsPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_23).w20 = function () {
    return this.ffe_1;
  };
  protoOf($serializer_23).o2c = function () {
    var tmp0_cached = Companion_getInstance_36().efe_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function MaximumCredentialsPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_23().ffe_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.hfe_1 = 'maximum-credentials';
    else
      $this.hfe_1 = name;
    if (0 === (seen0 & 2))
      $this.ife_1 = 'Verifies that a maximum number of credentials in the Verifiable Presentation is not exceeded';
    else
      $this.ife_1 = description;
    if (0 === (seen0 & 4))
      $this.jfe_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
    else
      $this.jfe_1 = supportedVCFormats;
    return $this;
  }
  function MaximumCredentialsPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return MaximumCredentialsPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(MaximumCredentialsPolicy)));
  }
  function MaximumCredentialsPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.sfe_1 = this$0;
    this.tfe_1 = $data;
    this.ufe_1 = $args;
    this.vfe_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MaximumCredentialsPolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(MaximumCredentialsPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(MaximumCredentialsPolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.sfe_1.mea(this.tfe_1, this.ufe_1, this.vfe_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MaximumCredentialsPolicy$verifyAsync$slambda).ja = function (completion) {
    return new MaximumCredentialsPolicy$verifyAsync$slambda(this.sfe_1, this.tfe_1, this.ufe_1, this.vfe_1, completion);
  };
  function MaximumCredentialsPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new MaximumCredentialsPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function MaximumCredentialsPolicy() {
    Companion_getInstance_36();
    CredentialWrapperValidatorPolicy.call(this);
    this.hfe_1 = 'maximum-credentials';
    this.ife_1 = 'Verifies that a maximum number of credentials in the Verifiable Presentation is not exceeded';
    this.jfe_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
  }
  protoOf(MaximumCredentialsPolicy).v2 = function () {
    return this.hfe_1;
  };
  protoOf(MaximumCredentialsPolicy).zat = function () {
    return this.ife_1;
  };
  protoOf(MaximumCredentialsPolicy).oea = function () {
    return this.jfe_1;
  };
  protoOf(MaximumCredentialsPolicy).mea = function (data, args, context, $completion) {
    var n = get_int(args instanceof JsonPrimitive_1 ? args : THROW_CCE());
    var tmp0_safe_receiver = get_jsonObject(ensureNotNull(data.bf('vp'))).bf('verifiableCredential');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonArray(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.count' call
      tmp = tmp1_safe_receiver.t();
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      // Inline function 'kotlin.Companion.success' call
      var value = new JsonObject(mapOf(to('policy_available', JsonPrimitive(false))));
      var tmp$ret$1 = _Result___init__impl__xyqfz8(value);
      return new Result(tmp$ret$1);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var presentedCount = tmp_0;
    var success = presentedCount <= n;
    var tmp_1;
    if (success) {
      // Inline function 'kotlin.Companion.success' call
      var value_0 = new JsonObject(mapOf_0([to('total', JsonPrimitive_2(presentedCount)), to('remaining', JsonPrimitive_2(n - presentedCount | 0))]));
      tmp_1 = _Result___init__impl__xyqfz8(value_0);
    } else {
      // Inline function 'kotlin.Companion.failure' call
      var exception = new MaximumCredentialsException(presentedCount, presentedCount - n | 0);
      tmp_1 = _Result___init__impl__xyqfz8(createFailure(exception));
    }
    return new Result(tmp_1);
  };
  protoOf(MaximumCredentialsPolicy).nea = function (data, args, context) {
    var tmp = MaximumCredentialsPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function MinimumCredentialsPolicy$Companion$$childSerializers$_anonymous__wceeru() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function Companion_32() {
    Companion_instance_36 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.wfe_1 = [null, null, lazy(tmp_0, MinimumCredentialsPolicy$Companion$$childSerializers$_anonymous__wceeru)];
  }
  protoOf(Companion_32).o4u = function () {
    return $serializer_getInstance_24();
  };
  var Companion_instance_36;
  function Companion_getInstance_37() {
    if (Companion_instance_36 == null)
      new Companion_32();
    return Companion_instance_36;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.vp.MinimumCredentialsPolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.xfe_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).yfe = function (encoder, value) {
    var tmp0_desc = this.xfe_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_37().wfe_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.zfe_1 === 'minimum-credentials')) {
      tmp1_output.y25(tmp0_desc, 0, value.zfe_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.aff_1 === 'Verifies that a minimum number of credentials are included in the Verifiable Presentation')) {
      tmp1_output.y25(tmp0_desc, 1, value.aff_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.bff_1, setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.bff_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_24).x20 = function (encoder, value) {
    return this.yfe(encoder, value instanceof MinimumCredentialsPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_24).y20 = function (decoder) {
    var tmp0_desc = this.xfe_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_37().wfe_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return MinimumCredentialsPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_24).w20 = function () {
    return this.xfe_1;
  };
  protoOf($serializer_24).o2c = function () {
    var tmp0_cached = Companion_getInstance_37().wfe_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function MinimumCredentialsPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_24().xfe_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.zfe_1 = 'minimum-credentials';
    else
      $this.zfe_1 = name;
    if (0 === (seen0 & 2))
      $this.aff_1 = 'Verifies that a minimum number of credentials are included in the Verifiable Presentation';
    else
      $this.aff_1 = description;
    if (0 === (seen0 & 4))
      $this.bff_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
    else
      $this.bff_1 = supportedVCFormats;
    return $this;
  }
  function MinimumCredentialsPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return MinimumCredentialsPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(MinimumCredentialsPolicy)));
  }
  function MinimumCredentialsPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.kff_1 = this$0;
    this.lff_1 = $data;
    this.mff_1 = $args;
    this.nff_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MinimumCredentialsPolicy$verifyAsync$slambda).lea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(MinimumCredentialsPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.lea($completion);
  };
  protoOf(MinimumCredentialsPolicy$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.kff_1.mea(this.lff_1, this.mff_1, this.nff_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.wp_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 3) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf(MinimumCredentialsPolicy$verifyAsync$slambda).ja = function (completion) {
    return new MinimumCredentialsPolicy$verifyAsync$slambda(this.kff_1, this.lff_1, this.mff_1, this.nff_1, completion);
  };
  function MinimumCredentialsPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new MinimumCredentialsPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.lea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function MinimumCredentialsPolicy() {
    Companion_getInstance_37();
    CredentialWrapperValidatorPolicy.call(this);
    this.zfe_1 = 'minimum-credentials';
    this.aff_1 = 'Verifies that a minimum number of credentials are included in the Verifiable Presentation';
    this.bff_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
  }
  protoOf(MinimumCredentialsPolicy).v2 = function () {
    return this.zfe_1;
  };
  protoOf(MinimumCredentialsPolicy).zat = function () {
    return this.aff_1;
  };
  protoOf(MinimumCredentialsPolicy).oea = function () {
    return this.bff_1;
  };
  protoOf(MinimumCredentialsPolicy).mea = function (data, args, context, $completion) {
    var n = get_int(args instanceof JsonPrimitive_1 ? args : THROW_CCE());
    var tmp0_safe_receiver = get_jsonObject(ensureNotNull(data.bf('vp'))).bf('verifiableCredential');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonArray(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.count' call
      tmp = tmp1_safe_receiver.t();
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      // Inline function 'kotlin.Companion.success' call
      var value = new JsonObject(mapOf(to('policy_available', JsonPrimitive(false))));
      var tmp$ret$1 = _Result___init__impl__xyqfz8(value);
      return new Result(tmp$ret$1);
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var presentedCount = tmp_0;
    var success = presentedCount >= n;
    var tmp_1;
    if (success) {
      // Inline function 'kotlin.Companion.success' call
      var value_0 = new JsonObject(mapOf_0([to('total', JsonPrimitive_2(presentedCount)), to('extra', JsonPrimitive_2(presentedCount - n | 0))]));
      tmp_1 = _Result___init__impl__xyqfz8(value_0);
    } else {
      // Inline function 'kotlin.Companion.failure' call
      var exception = new MinimumCredentialsException(presentedCount, n - presentedCount | 0);
      tmp_1 = _Result___init__impl__xyqfz8(createFailure(exception));
    }
    return new Result(tmp_1);
  };
  protoOf(MinimumCredentialsPolicy).nea = function (data, args, context) {
    var tmp = MinimumCredentialsPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function get_log() {
    _init_properties_PresentationDefinitionPolicy_kt__31e6yn();
    return log;
  }
  var log;
  function PresentationDefinitionPolicy$Companion$$childSerializers$_anonymous__e28cxh() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function checkSubjectIsIssuer($this, matchedCredentials, descriptorId) {
    var _iterator__ex2g4s = matchedCredentials.q();
    while (_iterator__ex2g4s.r()) {
      var cred = _iterator__ex2g4s.s();
      var tmp0_elvis_lhs = getIssuerDid($this, cred);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return checkSubjectIsIssuer$cannotFindField(descriptorId, cred, 'issuer');
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var issuer = tmp;
      var tmp1_elvis_lhs = getSubjectDid($this, cred);
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        return checkSubjectIsIssuer$cannotFindField(descriptorId, cred, 'subject');
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var subject = tmp_0;
      if (!(issuer === subject)) {
        var tmp_1 = get_log();
        tmp_1.t6g(PresentationDefinitionPolicy$checkSubjectIsIssuer$lambda(descriptorId, issuer, subject));
        // Inline function 'kotlin.Companion.failure' call
        var exception = new PresentationDefinitionRelationalConstraintException(RelationalConstraintType_subject_is_issuer_getInstance(), 'Subject (' + subject + ') does not match issuer (' + issuer + ') for descriptor ' + descriptorId + '.');
        return _Result___init__impl__xyqfz8(createFailure(exception));
      }
    }
    var tmp_2 = get_log();
    tmp_2.r6g(PresentationDefinitionPolicy$checkSubjectIsIssuer$lambda_0(descriptorId));
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(Unit_instance);
  }
  function checkIsHolder($this, matchedCredentials, vpHolderDid, descriptorId) {
    var _iterator__ex2g4s = matchedCredentials.q();
    while (_iterator__ex2g4s.r()) {
      var cred = _iterator__ex2g4s.s();
      var tmp0_elvis_lhs = getSubjectDid($this, cred);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.Companion.failure' call
        var exception = IllegalArgumentException_init_$Create$('Cannot find subject for credential matching descriptor ' + descriptorId + ' for is_holder check: ' + cred.toString());
        return _Result___init__impl__xyqfz8(createFailure(exception));
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var subject = tmp;
      if (!(subject === vpHolderDid)) {
        var tmp_0 = get_log();
        tmp_0.w6g(PresentationDefinitionPolicy$checkIsHolder$lambda(descriptorId, subject, vpHolderDid));
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = new PresentationDefinitionRelationalConstraintException(RelationalConstraintType_is_holder_getInstance(), 'Credential subject (' + subject + ') does not match VP holder (' + vpHolderDid + ') for descriptor ' + descriptorId + '.');
        return _Result___init__impl__xyqfz8(createFailure(exception_0));
      }
    }
    var tmp_1 = get_log();
    tmp_1.r6g(PresentationDefinitionPolicy$checkIsHolder$lambda_0(descriptorId));
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(Unit_instance);
  }
  function checkSameSubject($this, presentationDefinition, subjectDidsPerFieldId) {
    var tmp = get_log();
    tmp.r6g(PresentationDefinitionPolicy$checkSameSubject$lambda);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = presentationDefinition.oe7_1.q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var tmp0_safe_receiver = element.ee7_1.ve6_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = tmp0_safe_receiver.q();
        while (_iterator__ex2g4s_0.r()) {
          var element_0 = _iterator__ex2g4s_0.s();
          if (element_0.he6_1.equals(Directive_required_getInstance())) {
            var tmp_0 = get_log();
            tmp_0.r6g(PresentationDefinitionPolicy$checkSameSubject$lambda_0(element_0, element));
            // Inline function 'kotlin.collections.mapNotNull' call
            var tmp0 = element_0.ge6_1;
            // Inline function 'kotlin.collections.mapNotNullTo' call
            var destination = ArrayList_init_$Create$();
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_1 = tmp0.q();
            while (_iterator__ex2g4s_1.r()) {
              var element_1 = _iterator__ex2g4s_1.s();
              var tmp0_safe_receiver_0 = subjectDidsPerFieldId.n2(element_1);
              var tmp_1;
              if (tmp0_safe_receiver_0 == null) {
                tmp_1 = null;
              } else {
                // Inline function 'kotlin.takeIf' call
                var tmp_2;
                // Inline function 'kotlin.collections.isNotEmpty' call
                if (!tmp0_safe_receiver_0.h()) {
                  tmp_2 = tmp0_safe_receiver_0;
                } else {
                  tmp_2 = null;
                }
                tmp_1 = tmp_2;
              }
              var tmp0_safe_receiver_1 = tmp_1;
              if (tmp0_safe_receiver_1 == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                destination.n(tmp0_safe_receiver_1);
              }
            }
            var subjectSets = destination;
            if (!(subjectSets.t() === element_0.ge6_1.t())) {
              // Inline function 'kotlin.collections.filter' call
              var tmp0_0 = element_0.ge6_1;
              // Inline function 'kotlin.collections.filterTo' call
              var destination_0 = ArrayList_init_$Create$();
              var _iterator__ex2g4s_2 = tmp0_0.q();
              while (_iterator__ex2g4s_2.r()) {
                var element_2 = _iterator__ex2g4s_2.s();
                // Inline function 'kotlin.collections.isNullOrEmpty' call
                var this_0 = subjectDidsPerFieldId.n2(element_2);
                if (this_0 == null || this_0.h()) {
                  destination_0.n(element_2);
                }
              }
              var missingFieldIds = destination_0;
              var tmp_3 = get_log();
              tmp_3.t6g(PresentationDefinitionPolicy$checkSameSubject$lambda_1(element_0, missingFieldIds));
              // Inline function 'kotlin.Companion.failure' call
              var exception = new PresentationDefinitionRelationalConstraintException(RelationalConstraintType_same_subject_getInstance(), 'Required field_id(s) did not resolve to subjects: ' + toString(missingFieldIds));
              return _Result___init__impl__xyqfz8(createFailure(exception));
            }
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!subjectSets.h()) {
              var firstSubjectSet = first(subjectSets);
              var tmp$ret$16;
              $l$block_0: {
                // Inline function 'kotlin.collections.all' call
                var tmp_4;
                if (isInterface(subjectSets, Collection)) {
                  tmp_4 = subjectSets.h();
                } else {
                  tmp_4 = false;
                }
                if (tmp_4) {
                  tmp$ret$16 = true;
                  break $l$block_0;
                }
                var _iterator__ex2g4s_3 = subjectSets.q();
                while (_iterator__ex2g4s_3.r()) {
                  var element_3 = _iterator__ex2g4s_3.s();
                  if (!equals(element_3, firstSubjectSet)) {
                    tmp$ret$16 = false;
                    break $l$block_0;
                  }
                }
                tmp$ret$16 = true;
              }
              if (!tmp$ret$16) {
                var distinctSubjects = distinct(flatten(subjectSets));
                var tmp_5 = get_log();
                tmp_5.t6g(PresentationDefinitionPolicy$checkSameSubject$lambda_2(element_0, distinctSubjects));
                // Inline function 'kotlin.Companion.failure' call
                var exception_0 = new PresentationDefinitionRelationalConstraintException(RelationalConstraintType_same_subject_getInstance(), 'Subjects did not match for fields: ' + toString(element_0.ge6_1) + '. Subjects found: ' + toString(distinctSubjects));
                return _Result___init__impl__xyqfz8(createFailure(exception_0));
              }
              var tmp_6 = get_log();
              tmp_6.r6g(PresentationDefinitionPolicy$checkSameSubject$lambda_3(element_0, firstSubjectSet));
            } else {
              var tmp_7 = get_log();
              tmp_7.t6g(PresentationDefinitionPolicy$checkSameSubject$lambda_4(element_0));
              // Inline function 'kotlin.Companion.failure' call
              var exception_1 = new PresentationDefinitionRelationalConstraintException(RelationalConstraintType_same_subject_getInstance(), 'No subjects found for required field_ids: ' + toString(element_0.ge6_1));
              return _Result___init__impl__xyqfz8(createFailure(exception_1));
            }
          }
        }
      }
    }
    var tmp_8 = get_log();
    tmp_8.r6g(PresentationDefinitionPolicy$checkSameSubject$lambda_5);
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(Unit_instance);
  }
  function getIssuerDid($this, credential) {
    var tmp0_safe_receiver = credential.bf('iss');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp3_safe_receiver = credential.bf('vc');
      var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonObject(tmp3_safe_receiver);
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.bf('issuer');
      var tmp_0;
      if (tmp5_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_1;
        if (tmp5_safe_receiver instanceof JsonPrimitive_1) {
          tmp_1 = get_contentOrNull(tmp5_safe_receiver);
        } else {
          if (tmp5_safe_receiver instanceof JsonObject) {
            var tmp1_safe_receiver_0 = tmp5_safe_receiver.bf('id');
            var tmp2_safe_receiver = tmp1_safe_receiver_0 == null ? null : get_jsonPrimitive(tmp1_safe_receiver_0);
            tmp_1 = tmp2_safe_receiver == null ? null : get_contentOrNull(tmp2_safe_receiver);
          } else {
            tmp_1 = null;
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  }
  function getSubjectDid($this, credential) {
    var tmp0_safe_receiver = credential.bf('sub');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp3_safe_receiver = credential.bf('vc');
      var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonObject(tmp3_safe_receiver);
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.bf('credentialSubject');
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : get_jsonObject(tmp5_safe_receiver);
      var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.bf('id');
      var tmp8_safe_receiver = tmp7_safe_receiver == null ? null : get_jsonPrimitive(tmp7_safe_receiver);
      tmp = tmp8_safe_receiver == null ? null : get_contentOrNull(tmp8_safe_receiver);
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  }
  function getVpHolderDid($this, vpWrapper, format) {
    var tmp;
    switch (format == null ? -1 : format.u2_1) {
      case 4:
      case 7:
        var tmp1_safe_receiver = vpWrapper.bf('vp');
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonObject(tmp1_safe_receiver);
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.bf('holder');
        var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonPrimitive(tmp3_safe_receiver);
        tmp = tmp4_safe_receiver == null ? null : get_contentOrNull(tmp4_safe_receiver);
        break;
      default:
        tmp = null;
        break;
    }
    var tmp5_elvis_lhs = tmp;
    var tmp_0;
    if (tmp5_elvis_lhs == null) {
      var tmp6_safe_receiver = vpWrapper.bf('holder');
      var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonPrimitive(tmp6_safe_receiver);
      tmp_0 = tmp7_safe_receiver == null ? null : get_contentOrNull(tmp7_safe_receiver);
    } else {
      tmp_0 = tmp5_elvis_lhs;
    }
    var tmp8_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp8_elvis_lhs == null) {
      var tmp9_safe_receiver = vpWrapper.bf('iss');
      var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : get_jsonPrimitive(tmp9_safe_receiver);
      tmp_1 = tmp10_safe_receiver == null ? null : get_contentOrNull(tmp10_safe_receiver);
    } else {
      tmp_1 = tmp8_elvis_lhs;
    }
    var tmp11_elvis_lhs = tmp_1;
    var tmp_2;
    if (tmp11_elvis_lhs == null) {
      var tmp12_safe_receiver = vpWrapper.bf('vp');
      var tmp13_safe_receiver = tmp12_safe_receiver == null ? null : get_jsonObject(tmp12_safe_receiver);
      var tmp14_safe_receiver = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.bf('holder');
      var tmp15_safe_receiver = tmp14_safe_receiver == null ? null : get_jsonPrimitive(tmp14_safe_receiver);
      tmp_2 = tmp15_safe_receiver == null ? null : get_contentOrNull(tmp15_safe_receiver);
    } else {
      tmp_2 = tmp11_elvis_lhs;
    }
    return tmp_2;
  }
  function Companion_33() {
    Companion_instance_37 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.off_1 = [null, null, lazy(tmp_0, PresentationDefinitionPolicy$Companion$$childSerializers$_anonymous__e28cxh)];
  }
  var Companion_instance_37;
  function Companion_getInstance_38() {
    if (Companion_instance_37 == null)
      new Companion_33();
    return Companion_instance_37;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.vp.PresentationDefinitionPolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.pff_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).qff = function (encoder, value) {
    var tmp0_desc = this.pff_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_38().off_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.rff_1 === 'presentation-definition')) {
      tmp1_output.y25(tmp0_desc, 0, value.rff_1);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.sff_1 === 'Verifies a Verifiable Presentation against a Presentation Definition, including relational constraints.')) {
      tmp1_output.y25(tmp0_desc, 1, value.sff_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.tff_1, setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance(), VCFormat_ldp_vp_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.tff_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_25).x20 = function (encoder, value) {
    return this.qff(encoder, value instanceof PresentationDefinitionPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_25).y20 = function (decoder) {
    var tmp0_desc = this.pff_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_38().off_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return PresentationDefinitionPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_25).w20 = function () {
    return this.pff_1;
  };
  protoOf($serializer_25).o2c = function () {
    var tmp0_cached = Companion_getInstance_38().off_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function PresentationDefinitionPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_25().pff_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.rff_1 = 'presentation-definition';
    else
      $this.rff_1 = name;
    if (0 === (seen0 & 2))
      $this.sff_1 = 'Verifies a Verifiable Presentation against a Presentation Definition, including relational constraints.';
    else
      $this.sff_1 = description;
    if (0 === (seen0 & 4))
      $this.tff_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance(), VCFormat_ldp_vp_getInstance()]);
    else
      $this.tff_1 = supportedVCFormats;
    return $this;
  }
  function PresentationDefinitionPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return PresentationDefinitionPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(PresentationDefinitionPolicy)));
  }
  function checkSubjectIsIssuer$cannotFindField($descriptorId, cred, field) {
    // Inline function 'kotlin.Companion.failure' call
    var exception = IllegalArgumentException_init_$Create$('Cannot find ' + field + ' for credential matching descriptor ' + $descriptorId + ': ' + cred.toString());
    return _Result___init__impl__xyqfz8(createFailure(exception));
  }
  function PresentationDefinitionPolicy$checkSubjectIsIssuer$lambda($descriptorId, $issuer, $subject) {
    return function () {
      return 'subject_is_issuer constraint failed for descriptor ' + $descriptorId + '. Issuer: ' + $issuer + ', Subject: ' + $subject;
    };
  }
  function PresentationDefinitionPolicy$checkSubjectIsIssuer$lambda_0($descriptorId) {
    return function () {
      return 'subject_is_issuer constraint passed for descriptor ' + $descriptorId;
    };
  }
  function PresentationDefinitionPolicy$checkIsHolder$lambda($descriptorId, $subject, $vpHolderDid) {
    return function () {
      return 'is_holder constraint failed for descriptor ' + $descriptorId + '. Subject: ' + $subject + ', Holder: ' + $vpHolderDid;
    };
  }
  function PresentationDefinitionPolicy$checkIsHolder$lambda_0($descriptorId) {
    return function () {
      return 'is_holder constraint passed for descriptor ' + $descriptorId;
    };
  }
  function PresentationDefinitionPolicy$checkSameSubject$lambda() {
    return 'Performing same_subject checks...';
  }
  function PresentationDefinitionPolicy$checkSameSubject$lambda_0($sameSubjectConstraint, $inputDescriptor) {
    return function () {
      return 'Checking required same_subject for fields: ' + toString($sameSubjectConstraint.ge6_1) + ' (related to descriptor ' + $inputDescriptor.ze6_1 + ')';
    };
  }
  function PresentationDefinitionPolicy$checkSameSubject$lambda_1($sameSubjectConstraint, $missingFieldIds) {
    return function () {
      return 'same_subject constraint failed: Not all specified field_ids (' + toString($sameSubjectConstraint.ge6_1) + ') yielded subject DIDs. Missing: ' + toString($missingFieldIds);
    };
  }
  function PresentationDefinitionPolicy$checkSameSubject$lambda_2($sameSubjectConstraint, $distinctSubjects) {
    return function () {
      return 'same_subject constraint failed for fields ' + toString($sameSubjectConstraint.ge6_1) + '. Found differing subjects: ' + toString($distinctSubjects);
    };
  }
  function PresentationDefinitionPolicy$checkSameSubject$lambda_3($sameSubjectConstraint, $firstSubjectSet) {
    return function () {
      return 'same_subject constraint passed for fields ' + toString($sameSubjectConstraint.ge6_1) + ' with subject(s): ' + toString($firstSubjectSet);
    };
  }
  function PresentationDefinitionPolicy$checkSameSubject$lambda_4($sameSubjectConstraint) {
    return function () {
      return 'same_subject constraint for fields ' + toString($sameSubjectConstraint.ge6_1) + ' had no subjects to compare (this should have been caught earlier).';
    };
  }
  function PresentationDefinitionPolicy$checkSameSubject$lambda_5() {
    return 'All same_subject checks passed.';
  }
  function PresentationDefinitionPolicy$verify$lambda($vpHolderDid, $format) {
    return function () {
      return 'Verifying Presentation Definition. VP Holder DID: ' + $vpHolderDid + ', Format: ' + toString_0($format);
    };
  }
  function PresentationDefinitionPolicy$verify$lambda_0($inputDescriptor) {
    return function () {
      return 'Processing Input Descriptor: ' + $inputDescriptor.ze6_1;
    };
  }
  function PresentationDefinitionPolicy$verify$lambda_1($inputDescriptor) {
    return function () {
      return 'Input descriptor ' + $inputDescriptor.ze6_1 + ' did not match any credentials.';
    };
  }
  function PresentationDefinitionPolicy$verify$lambda_2($inputDescriptor, $matchedCredentials) {
    return function () {
      return 'Input descriptor ' + $inputDescriptor.ze6_1 + ' matched ' + $matchedCredentials.t() + ' credential(s).';
    };
  }
  function PresentationDefinitionPolicy$verify$lambda_3($fieldId, $inputDescriptor) {
    return function () {
      return 'Could not extract subject DID for credential matching field ' + $fieldId + ' in descriptor ' + $inputDescriptor.ze6_1;
    };
  }
  function PresentationDefinitionPolicy$verify$lambda_4() {
    return 'Presentation Definition Policy verification successful.';
  }
  function PresentationDefinitionPolicy$verify$lambda_5() {
    return 'Presentation Definition Policy verification failed: Not all input descriptors were satisfied.';
  }
  function $verifyCOROUTINE$15(_this__u8e3s4, data, args, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cfg_1 = _this__u8e3s4;
    this.dfg_1 = data;
    this.efg_1 = args;
    this.ffg_1 = context;
  }
  protoOf($verifyCOROUTINE$15).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.ffg_1.n2('presentationDefinition');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : JsonUtils_getInstance().toJsonElement(tmp0_safe_receiver);
            var tmp_1;
            if (tmp1_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var this_0 = Default_getInstance();
              var this_1 = this_0.y24();
              var this_2 = serializer(this_1, createKType(getKClass(PresentationDefinition), arrayOf([]), false));
              tmp_1 = this_0.i4s(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), tmp1_safe_receiver);
            }

            var tmp2_elvis_lhs = tmp_1;
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              var exception = IllegalArgumentException_init_$Create$('PresentationDefinition missing in context');
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }

            tmp_0.gfg_1 = tmp_2;
            if (!!this.gfg_1.oe7_1.h()) {
              var message = 'PresentationDefinition must contain at least one input descriptor.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            var tmp_3 = this;
            var tmp3_safe_receiver = this.ffg_1.n2('presentationSubmission');
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : JsonUtils_getInstance().toJsonElement(tmp3_safe_receiver);
            var tmp_4;
            if (tmp4_safe_receiver == null) {
              tmp_4 = null;
            } else {
              var this_3 = Default_getInstance();
              var this_4 = this_3.y24();
              var this_5 = serializer(this_4, createKType(getKClass(PresentationSubmission), arrayOf([]), false));
              tmp_4 = this_3.i4s(isInterface(this_5, KSerializer) ? this_5 : THROW_CCE(), tmp4_safe_receiver);
            }

            var tmp5_elvis_lhs = tmp_4;
            var tmp_5;
            if (tmp5_elvis_lhs == null) {
              var exception_0 = IllegalArgumentException_init_$Create$('PresentationSubmission missing in context');
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_0)));
            } else {
              tmp_5 = tmp5_elvis_lhs;
            }

            tmp_3.hfg_1 = tmp_5;
            var tmp_6 = this;
            var tmp6_safe_receiver = firstOrNull_0(this.hfg_1.me9_1);
            var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.ee9_1;
            var tmp_7;
            if (tmp7_safe_receiver == null) {
              tmp_7 = null;
            } else {
              var this_6 = Default_getInstance();
              var this_7 = this_6.y24();
              var this_8 = serializer(this_7, createKType(getKClass(VCFormat), arrayOf([]), false));
              tmp_7 = this_6.i4s(isInterface(this_8, KSerializer) ? this_8 : THROW_CCE(), tmp7_safe_receiver);
            }

            tmp_6.ifg_1 = tmp_7;
            var tmp_8 = this;
            var tmp8_elvis_lhs = getVpHolderDid(this.cfg_1, this.dfg_1, this.ifg_1);
            var tmp_9;
            if (tmp8_elvis_lhs == null) {
              var exception_1 = IllegalArgumentException_init_$Create$('Could not determine Holder DID from the Verifiable Presentation');
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_1)));
            } else {
              tmp_9 = tmp8_elvis_lhs;
            }

            tmp_8.jfg_1 = tmp_9;
            var tmp_10 = get_log();
            tmp_10.t6g(PresentationDefinitionPolicy$verify$lambda(this.jfg_1, this.ifg_1));
            var tmp_11 = this;
            var tmp_12;
            var tmp_13;
            if (equals(this.ifg_1, VCFormat_sd_jwt_vc_getInstance())) {
              var this_9 = this.dfg_1;
              tmp_13 = !(isInterface(this_9, KtMap) ? this_9 : THROW_CCE()).l2('vp');
            } else {
              tmp_13 = false;
            }

            if (tmp_13) {
              tmp_12 = flowOf(this.dfg_1);
            } else {
              var tmp9_safe_receiver = this.dfg_1.bf('vp');
              var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : get_jsonObject(tmp9_safe_receiver);
              var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.bf('verifiableCredential');
              var tmp12_safe_receiver = tmp11_safe_receiver == null ? null : get_jsonArray(tmp11_safe_receiver);
              var tmp_14;
              if (tmp12_safe_receiver == null) {
                tmp_14 = null;
              } else {
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s = tmp12_safe_receiver.q();
                while (_iterator__ex2g4s.r()) {
                  var element = _iterator__ex2g4s.s();
                  var tmp0_safe_receiver_0 = get_contentOrNull(get_jsonPrimitive(element));
                  var tmp_15;
                  if (tmp0_safe_receiver_0 == null) {
                    tmp_15 = null;
                  } else {
                    tmp_15 = Companion_getInstance_0().parse(tmp0_safe_receiver_0);
                  }
                  var tmp1_safe_receiver_0 = tmp_15;
                  var tmp0_safe_receiver_1 = tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.zzz_unused_fullPayload;
                  if (tmp0_safe_receiver_1 == null)
                    null;
                  else {
                    destination.n(tmp0_safe_receiver_1);
                  }
                }
                tmp_14 = destination;
              }
              var tmp13_elvis_lhs = tmp_14;
              tmp_12 = asFlow(tmp13_elvis_lhs == null ? emptyList() : tmp13_elvis_lhs);
            }

            tmp_11.kfg_1 = tmp_12;
            var tmp_16 = this;
            var tmp18 = this.gfg_1.oe7_1;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp_17;
              if (isInterface(tmp18, Collection)) {
                tmp_17 = tmp18.h();
              } else {
                tmp_17 = false;
              }
              if (tmp_17) {
                tmp$ret$0 = false;
                break l$ret$1;
              }
              var _iterator__ex2g4s_0 = tmp18.q();
              while (_iterator__ex2g4s_0.r()) {
                var element_0 = _iterator__ex2g4s_0.s();
                var tmp0_safe_receiver_2 = element_0.ee7_1.ve6_1;
                var tmp_18;
                if (tmp0_safe_receiver_2 == null) {
                  tmp_18 = null;
                } else {
                  tmp_18 = !tmp0_safe_receiver_2.h();
                }
                if (tmp_18 === true) {
                  tmp$ret$0 = true;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = false;
            }
             while (false);
            tmp_16.lfg_1 = tmp$ret$0;
            var tmp_19 = this;
            tmp_19.mfg_1 = LinkedHashMap_init_$Create$_0();
            this.nfg_1 = true;
            this.ofg_1 = this.gfg_1.oe7_1.q();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.ofg_1.r()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.pfg_1 = this.ofg_1.s();
            var tmp_20 = get_log();
            tmp_20.r6g(PresentationDefinitionPolicy$verify$lambda_0(this.pfg_1));
            this.n9_1 = 2;
            suspendResult = toList(PresentationDefinitionParser_instance.pe7(this.kfg_1, this.pfg_1), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var matchedCredentials = suspendResult;
            if (matchedCredentials.h()) {
              var tmp_21 = get_log();
              tmp_21.t6g(PresentationDefinitionPolicy$verify$lambda_1(this.pfg_1));
              this.nfg_1 = false;
              this.n9_1 = 1;
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 3:
            var tmp_22 = get_log();
            tmp_22.r6g(PresentationDefinitionPolicy$verify$lambda_2(this.pfg_1, matchedCredentials));
            var tmp14_safe_receiver = this.pfg_1.ee7_1.te6_1;
            if ((tmp14_safe_receiver == null ? null : equals_0(tmp14_safe_receiver, 'required', true)) === true) {
              var this_10 = checkSubjectIsIssuer(this.cfg_1, matchedCredentials, this.pfg_1.ze6_1);
              var exception_2 = Result__exceptionOrNull_impl_p6xea9(this_10);
              if (exception_2 == null) {
                var tmp_23 = _Result___get_value__impl__bjfvqg(this_10);
                if (!(tmp_23 == null ? true : !(tmp_23 == null)))
                  THROW_CCE();
              } else {
                return new Result(_Result___init__impl__xyqfz8(createFailure(exception_2)));
              }
            }

            var tmp15_safe_receiver = this.pfg_1.ee7_1.ue6_1;
            if (tmp15_safe_receiver == null)
              null;
            else {
              var _iterator__ex2g4s_1 = tmp15_safe_receiver.q();
              while (_iterator__ex2g4s_1.r()) {
                var element_1 = _iterator__ex2g4s_1.s();
                if (element_1.he6_1.equals(Directive_required_getInstance())) {
                  var this_11 = checkIsHolder(this.cfg_1, matchedCredentials, this.jfg_1, this.pfg_1.ze6_1);
                  var exception_3 = Result__exceptionOrNull_impl_p6xea9(this_11);
                  if (exception_3 == null) {
                    var tmp_24 = _Result___get_value__impl__bjfvqg(this_11);
                    if (!(tmp_24 == null ? true : !(tmp_24 == null)))
                      THROW_CCE();
                  } else {
                    return new Result(_Result___init__impl__xyqfz8(createFailure(exception_3)));
                  }
                }
              }
            }

            if (this.lfg_1) {
              var tmp16_safe_receiver = this.pfg_1.ee7_1.se6_1;
              var tmp_25;
              if (tmp16_safe_receiver == null) {
                tmp_25 = null;
              } else {
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp16_safe_receiver.q();
                while (_iterator__ex2g4s_2.r()) {
                  var element_2 = _iterator__ex2g4s_2.s();
                  if (!(element_2.ve5_1 == null)) {
                    destination_0.n(element_2);
                  }
                }
                tmp_25 = destination_0;
              }
              var tmp17_safe_receiver = tmp_25;
              if (tmp17_safe_receiver == null)
                null;
              else {
                var _iterator__ex2g4s_3 = tmp17_safe_receiver.q();
                while (_iterator__ex2g4s_3.r()) {
                  var element_3 = _iterator__ex2g4s_3.s();
                  var fieldId = ensureNotNull(element_3.ve5_1);
                  var _iterator__ex2g4s_4 = matchedCredentials.q();
                  while (_iterator__ex2g4s_4.r()) {
                    var element_4 = _iterator__ex2g4s_4.s();
                    var tmp0_safe_receiver_3 = getSubjectDid(this.cfg_1, element_4);
                    var tmp_26;
                    if (tmp0_safe_receiver_3 == null) {
                      tmp_26 = null;
                    } else {
                      var this_12 = this.mfg_1;
                      var value = this_12.n2(fieldId);
                      var tmp_27;
                      if (value == null) {
                        var answer = LinkedHashSet_init_$Create$();
                        this_12.q2(fieldId, answer);
                        tmp_27 = answer;
                      } else {
                        tmp_27 = value;
                      }
                      tmp_26 = tmp_27.n(tmp0_safe_receiver_3);
                    }
                    if (tmp_26 == null) {
                      var tmp_28 = get_log();
                      tmp_28.t6g(PresentationDefinitionPolicy$verify$lambda_3(fieldId, this.pfg_1));
                    }
                  }
                }
              }
            }

            this.n9_1 = 1;
            continue $sm;
          case 4:
            if (this.nfg_1 && this.lfg_1) {
              var this_13 = checkSameSubject(this.cfg_1, this.gfg_1, this.mfg_1);
              var exception_4 = Result__exceptionOrNull_impl_p6xea9(this_13);
              if (exception_4 == null) {
                var tmp_29 = _Result___get_value__impl__bjfvqg(this_13);
                if (!(tmp_29 == null ? true : !(tmp_29 == null)))
                  THROW_CCE();
              } else {
                return new Result(_Result___init__impl__xyqfz8(createFailure(exception_4)));
              }
            }

            var tmp_30;
            if (this.nfg_1) {
              var tmp_31 = get_log();
              tmp_31.u6g(PresentationDefinitionPolicy$verify$lambda_4);
              var tmp18_subject = this.ifg_1;
              var tmp_32;
              if ((tmp18_subject == null ? -1 : tmp18_subject.u2_1) === 9) {
                var tmp19_safe_receiver = this.dfg_1.bf('vct');
                var tmp20_safe_receiver = tmp19_safe_receiver == null ? null : get_jsonPrimitive(tmp19_safe_receiver);
                tmp_32 = listOfNotNull(tmp20_safe_receiver == null ? null : tmp20_safe_receiver.s4u());
              } else {
                var tmp21_safe_receiver = this.dfg_1.bf('vp');
                var tmp22_safe_receiver = tmp21_safe_receiver == null ? null : get_jsonObject(tmp21_safe_receiver);
                var tmp23_safe_receiver = tmp22_safe_receiver == null ? null : tmp22_safe_receiver.bf('verifiableCredential');
                var tmp24_safe_receiver = tmp23_safe_receiver == null ? null : get_jsonArray(tmp23_safe_receiver);
                var tmp_33;
                if (tmp24_safe_receiver == null) {
                  tmp_33 = null;
                } else {
                  var destination_1 = ArrayList_init_$Create$();
                  var _iterator__ex2g4s_5 = tmp24_safe_receiver.q();
                  while (_iterator__ex2g4s_5.r()) {
                    var element_5 = _iterator__ex2g4s_5.s();
                    var tmp0_safe_receiver_4 = get_contentOrNull(get_jsonPrimitive(element_5));
                    var tmp_34;
                    if (tmp0_safe_receiver_4 == null) {
                      tmp_34 = null;
                    } else {
                      tmp_34 = Companion_getInstance_0().parse(tmp0_safe_receiver_4);
                    }
                    var tmp1_safe_receiver_1 = tmp_34;
                    var tmp2_safe_receiver = tmp1_safe_receiver_1 == null ? null : tmp1_safe_receiver_1.zzz_unused_fullPayload;
                    var tmp3_safe_receiver_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.bf('vc');
                    var tmp4_safe_receiver_0 = tmp3_safe_receiver_0 == null ? null : get_jsonObject(tmp3_safe_receiver_0);
                    var tmp5_safe_receiver = tmp4_safe_receiver_0 == null ? null : tmp4_safe_receiver_0.bf('type');
                    var tmp6_safe_receiver_0 = tmp5_safe_receiver == null ? null : get_jsonArray(tmp5_safe_receiver);
                    var tmp7_safe_receiver_0 = tmp6_safe_receiver_0 == null ? null : lastOrNull(tmp6_safe_receiver_0);
                    var tmp8_safe_receiver = tmp7_safe_receiver_0 == null ? null : get_jsonPrimitive(tmp7_safe_receiver_0);
                    var tmp0_safe_receiver_5 = tmp8_safe_receiver == null ? null : get_contentOrNull(tmp8_safe_receiver);
                    if (tmp0_safe_receiver_5 == null)
                      null;
                    else {
                      destination_1.n(tmp0_safe_receiver_5);
                    }
                  }
                  tmp_33 = destination_1;
                }
                var tmp25_elvis_lhs = tmp_33;
                tmp_32 = tmp25_elvis_lhs == null ? emptyList() : tmp25_elvis_lhs;
              }
              var presentedTypes = tmp_32;
              tmp_30 = _Result___init__impl__xyqfz8(presentedTypes);
            } else {
              var tmp_35 = get_log();
              tmp_35.t6g(PresentationDefinitionPolicy$verify$lambda_5);
              var exception_5 = new PresentationDefinitionException(false);
              tmp_30 = _Result___init__impl__xyqfz8(createFailure(exception_5));
            }

            return new Result(tmp_30);
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
  function PresentationDefinitionPolicy() {
    Companion_getInstance_38();
    CredentialWrapperValidatorPolicy.call(this);
    this.rff_1 = 'presentation-definition';
    this.sff_1 = 'Verifies a Verifiable Presentation against a Presentation Definition, including relational constraints.';
    this.tff_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance(), VCFormat_ldp_vp_getInstance()]);
  }
  protoOf(PresentationDefinitionPolicy).v2 = function () {
    return this.rff_1;
  };
  protoOf(PresentationDefinitionPolicy).zat = function () {
    return this.sff_1;
  };
  protoOf(PresentationDefinitionPolicy).oea = function () {
    return this.tff_1;
  };
  protoOf(PresentationDefinitionPolicy).mea = function (data, args, context, $completion) {
    var tmp = new $verifyCOROUTINE$15(this, data, args, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  function log$lambda() {
    _init_properties_PresentationDefinitionPolicy_kt__31e6yn();
    return Unit_instance;
  }
  var properties_initialized_PresentationDefinitionPolicy_kt_q0gf9b;
  function _init_properties_PresentationDefinitionPolicy_kt__31e6yn() {
    if (!properties_initialized_PresentationDefinitionPolicy_kt_q0gf9b) {
      properties_initialized_PresentationDefinitionPolicy_kt_q0gf9b = true;
      var tmp = KotlinLogging_instance;
      log = tmp.c6h(log$lambda);
    }
  }
  function RevocationPolicy$Companion$$childSerializers$_anonymous__rtty6e() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function Companion_34() {
    Companion_instance_38 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qfg_1 = [null, null, lazy(tmp_0, RevocationPolicy$Companion$$childSerializers$_anonymous__rtty6e)];
  }
  var Companion_instance_38;
  function Companion_getInstance_39() {
    if (Companion_instance_38 == null)
      new Companion_34();
    return Companion_instance_38;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.RevocationPolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.rfg_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).sfg = function (encoder, value) {
    var tmp0_desc = this.rfg_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_39().qfg_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.name === 'revoked-status-list')) {
      tmp1_output.y25(tmp0_desc, 0, value.name);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.description === 'Verifies Credential Status')) {
      tmp1_output.y25(tmp0_desc, 1, value.description);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.supportedVCFormats, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.supportedVCFormats);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_26).x20 = function (encoder, value) {
    return this.sfg(encoder, value instanceof RevocationPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_26).y20 = function (decoder) {
    var tmp0_desc = this.rfg_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_39().qfg_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return RevocationPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_26).w20 = function () {
    return this.rfg_1;
  };
  protoOf($serializer_26).o2c = function () {
    var tmp0_cached = Companion_getInstance_39().qfg_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function RevocationPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_26().rfg_1);
    }
    RevocationPolicyMp_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this);
    return $this;
  }
  function RevocationPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return RevocationPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(RevocationPolicy)));
  }
  function RevocationPolicy() {
    Companion_getInstance_39();
    RevocationPolicyMp.call(this);
  }
  protoOf(RevocationPolicy).mea = function (data, args, context, $completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  function JWTCryptoProviderManager() {
  }
  protoOf(JWTCryptoProviderManager).ef6 = function (keys) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  var JWTCryptoProviderManager_instance;
  function JWTCryptoProviderManager_getInstance() {
    return JWTCryptoProviderManager_instance;
  }
  function StatusPolicy$Companion$$childSerializers$_anonymous__j2ob6i() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().o4u());
  }
  function Companion_35() {
    Companion_instance_39 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.wfg_1 = [null, null, lazy(tmp_0, StatusPolicy$Companion$$childSerializers$_anonymous__j2ob6i)];
  }
  var Companion_instance_39;
  function Companion_getInstance_40() {
    if (Companion_instance_39 == null)
      new Companion_35();
    return Companion_instance_39;
  }
  function $serializer_27() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.StatusPolicy', this, 3);
    tmp0_serialDesc.z2b('name', true);
    tmp0_serialDesc.z2b('description', true);
    tmp0_serialDesc.z2b('supportedVCFormats', true);
    tmp0_serialDesc.d2b(new JsonClassDiscriminator('type'));
    this.xfg_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).yfg = function (encoder, value) {
    var tmp0_desc = this.xfg_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_40().wfg_1;
    if (tmp1_output.g26(tmp0_desc, 0) ? true : !(value.name === 'credential-status')) {
      tmp1_output.y25(tmp0_desc, 0, value.name);
    }
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.description === 'Verifies Credential Status')) {
      tmp1_output.y25(tmp0_desc, 1, value.description);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !equals(value.supportedVCFormats, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]))) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].c1(), value.supportedVCFormats);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_27).x20 = function (encoder, value) {
    return this.yfg(encoder, value instanceof StatusPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_27).y20 = function (decoder) {
    var tmp0_desc = this.xfg_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_40().wfg_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].c1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.k24(tmp0_desc);
    return StatusPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_27).w20 = function () {
    return this.xfg_1;
  };
  protoOf($serializer_27).o2c = function () {
    var tmp0_cached = Companion_getInstance_40().wfg_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].c1()];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function StatusPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().xfg_1);
    }
    StatusPolicyMp_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this);
    return $this;
  }
  function StatusPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return StatusPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(StatusPolicy)));
  }
  function StatusPolicy() {
    Companion_getInstance_40();
    StatusPolicyMp.call(this);
  }
  protoOf(StatusPolicy).mea = function (data, args, context, $completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  function PresentationVerificationUtils() {
  }
  protoOf(PresentationVerificationUtils).generatePolicyRequest = function (jsonString) {
    return Companion_getInstance_19().parsePolicyRequests(get_jsonArray(Default_getInstance().j4s(jsonString)));
  };
  protoOf(PresentationVerificationUtils).generateSpecificPolicyRequest = function (jsonString) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = get_jsonObject(Default_getInstance().j4s(jsonString));
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(this_0.t()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.a1().q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var tmp = element.b1();
      var tmp$ret$1 = Companion_getInstance_19().parsePolicyRequests(get_jsonArray(element.c1()));
      destination.q2(tmp, tmp$ret$1);
    }
    return destination;
  };
  var PresentationVerificationUtils_instance;
  function PresentationVerificationUtils_getInstance() {
    return PresentationVerificationUtils_instance;
  }
  //region block: post-declaration
  defineProp(protoOf(VerificationPolicy), 'name', function () {
    return this.v2();
  });
  defineProp(protoOf(VerificationPolicy), 'description', function () {
    return this.zat();
  });
  defineProp(protoOf(VerificationPolicy), 'supportedVCFormats', function () {
    return this.oea();
  });
  defineProp(protoOf(SerializableRuntimeException), 'message', function () {
    return this.ta();
  });
  protoOf($serializer).p2c = typeParametersSerializers;
  protoOf($serializer_0).p2c = typeParametersSerializers;
  protoOf($serializer_1).p2c = typeParametersSerializers;
  protoOf($serializer_2).p2c = typeParametersSerializers;
  protoOf($serializer_3).p2c = typeParametersSerializers;
  defineProp(protoOf(RelationalConstraintType), 'name', protoOf(RelationalConstraintType).v2);
  defineProp(protoOf(RelationalConstraintType), 'ordinal', protoOf(RelationalConstraintType).w2);
  protoOf($serializer_4).p2c = typeParametersSerializers;
  protoOf($serializer_5).p2c = typeParametersSerializers;
  protoOf($serializer_6).p2c = typeParametersSerializers;
  protoOf($serializer_7).p2c = typeParametersSerializers;
  protoOf($serializer_8).p2c = typeParametersSerializers;
  defineProp(protoOf(DynamicPolicyException), 'message', function () {
    return this.ta();
  });
  protoOf($serializer_9).p2c = typeParametersSerializers;
  protoOf($serializer_10).p2c = typeParametersSerializers;
  protoOf($serializer_11).p2c = typeParametersSerializers;
  protoOf($serializer_12).p2c = typeParametersSerializers;
  protoOf($serializer_13).p2c = typeParametersSerializers;
  protoOf($serializer_14).p2c = typeParametersSerializers;
  protoOf($serializer_15).p2c = typeParametersSerializers;
  protoOf($serializer_16).p2c = typeParametersSerializers;
  protoOf($serializer_17).p2c = typeParametersSerializers;
  protoOf($serializer_18).p2c = typeParametersSerializers;
  protoOf($serializer_19).p2c = typeParametersSerializers;
  protoOf($serializer_20).p2c = typeParametersSerializers;
  protoOf($serializer_21).p2c = typeParametersSerializers;
  protoOf($serializer_22).p2c = typeParametersSerializers;
  protoOf($serializer_23).p2c = typeParametersSerializers;
  protoOf($serializer_24).p2c = typeParametersSerializers;
  protoOf($serializer_25).p2c = typeParametersSerializers;
  protoOf($serializer_26).p2c = typeParametersSerializers;
  protoOf($serializer_27).p2c = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance_7 = new Companion_3();
  Companion_instance_8 = new Companion_4();
  Companion_instance_9 = new Companion_5();
  Companion_instance_10 = new Companion_6();
  Companion_instance_12 = new Companion_8();
  Companion_instance_13 = new Companion_9();
  Companion_instance_19 = new Companion_15();
  Companion_instance_20 = new Companion_16();
  JWTCryptoProviderManager_instance = new JWTCryptoProviderManager();
  PresentationVerificationUtils_instance = new PresentationVerificationUtils();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    $id$walt$policies.CredentialDataValidatorPolicy = CredentialDataValidatorPolicy;
    defineProp($id$walt$policies.CredentialDataValidatorPolicy, 'Companion', Companion_getInstance_4);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    $id$walt$policies.CredentialWrapperValidatorPolicy = CredentialWrapperValidatorPolicy;
    defineProp($id$walt$policies.CredentialWrapperValidatorPolicy, 'Companion', Companion_getInstance_5);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    $id$walt$policies.SerializableRuntimeException = SerializableRuntimeException;
    defineProp($id$walt$policies.SerializableRuntimeException, 'Companion', Companion_getInstance_6);
    $id$walt$policies.JsonSchemaVerificationException = JsonSchemaVerificationException;
    defineProp($id$walt$policies.JsonSchemaVerificationException, 'Companion', Companion_getInstance_7);
    $id$walt$policies.NotBeforePolicyException = NotBeforePolicyException;
    defineProp($id$walt$policies.NotBeforePolicyException, 'Companion', Companion_getInstance_8);
    $id$walt$policies.ExpirationDatePolicyException = ExpirationDatePolicyException;
    defineProp($id$walt$policies.ExpirationDatePolicyException, 'Companion', Companion_getInstance_9);
    $id$walt$policies.WebhookPolicyException = WebhookPolicyException;
    defineProp($id$walt$policies.WebhookPolicyException, 'Companion', Companion_getInstance_10);
    $id$walt$policies.PresentationDefinitionException = PresentationDefinitionException;
    defineProp($id$walt$policies.PresentationDefinitionException, 'Companion', Companion_getInstance_11);
    $id$walt$policies.PresentationDefinitionRelationalConstraintException = PresentationDefinitionRelationalConstraintException;
    $id$walt$policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType = RelationalConstraintType;
    $id$walt$policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType.values = values;
    $id$walt$policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType.valueOf = valueOf;
    defineProp($id$walt$policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType, 'subject_is_issuer', RelationalConstraintType_subject_is_issuer_getInstance);
    defineProp($id$walt$policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType, 'is_holder', RelationalConstraintType_is_holder_getInstance);
    defineProp($id$walt$policies.PresentationDefinitionRelationalConstraintException.RelationalConstraintType, 'same_subject', RelationalConstraintType_same_subject_getInstance);
    defineProp($id$walt$policies.PresentationDefinitionRelationalConstraintException, 'Companion', Companion_getInstance_12);
    $id$walt$policies.MinimumCredentialsException = MinimumCredentialsException;
    defineProp($id$walt$policies.MinimumCredentialsException, 'Companion', Companion_getInstance_13);
    $id$walt$policies.MaximumCredentialsException = MaximumCredentialsException;
    defineProp($id$walt$policies.MaximumCredentialsException, 'Companion', Companion_getInstance_14);
    $id$walt$policies.HolderBindingException = HolderBindingException;
    defineProp($id$walt$policies.HolderBindingException, 'Companion', Companion_getInstance_15);
    $id$walt$policies.NotAllowedIssuerException = NotAllowedIssuerException;
    defineProp($id$walt$policies.NotAllowedIssuerException, 'Companion', Companion_getInstance_16);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    $id$walt$policies.JwtVerificationPolicy = JwtVerificationPolicy;
    defineProp($id$walt$policies.JwtVerificationPolicy, 'Companion', Companion_getInstance_17);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    defineProp($id$walt$policies, 'PolicyManager', PolicyManager_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    $id$walt$policies.VerificationPolicy = VerificationPolicy;
    defineProp($id$walt$policies.VerificationPolicy, 'Companion', Companion_getInstance_18);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    defineProp($id$walt$policies, 'Verifier', Verifier_getInstance);
    Verifier.prototype.$runPolicyRequestCOROUTINE$0 = $runPolicyRequestCOROUTINE$0;
    Verifier.prototype.$verifyCredentialCOROUTINE$1 = $verifyCredentialCOROUTINE$1;
    Verifier.prototype.$verifyPresentationCOROUTINE$2 = $verifyPresentationCOROUTINE$2;
    Verifier.prototype.$verifyW3CPresentationCOROUTINE$3 = $verifyW3CPresentationCOROUTINE$3;
    Verifier.prototype.$verifySDJwtVCPresentationCOROUTINE$4 = $verifySDJwtVCPresentationCOROUTINE$4;
    Verifier.prototype.$verifyJwsCOROUTINE$5 = $verifyJwsCOROUTINE$5;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$models = $id$walt$policies.models || ($id$walt$policies.models = {});
    $id$walt$policies$models.PolicyRequest = PolicyRequest;
    defineProp($id$walt$policies$models.PolicyRequest, 'Companion', Companion_getInstance_19);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$models = $id$walt$policies.models || ($id$walt$policies.models = {});
    $id$walt$policies$models.PolicyResult = PolicyResult;
    defineProp($id$walt$policies$models.PolicyResult, 'Companion', Companion_getInstance_20);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$models = $id$walt$policies.models || ($id$walt$policies.models = {});
    $id$walt$policies$models.PresentationResultEntry = PresentationResultEntry;
    defineProp($id$walt$policies$models.PresentationResultEntry, 'Companion', Companion_getInstance_22);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$models = $id$walt$policies.models || ($id$walt$policies.models = {});
    $id$walt$policies$models.PresentationVerificationResponse = PresentationVerificationResponse;
    defineProp($id$walt$policies$models.PresentationVerificationResponse, 'Companion', Companion_getInstance_23);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$policies = $id$walt$policies.policies || ($id$walt$policies.policies = {});
    $id$walt$policies$policies.AllowedIssuerPolicy = AllowedIssuerPolicy;
    defineProp($id$walt$policies$policies.AllowedIssuerPolicy, 'Companion', Companion_getInstance_24);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$policies = $id$walt$policies.policies || ($id$walt$policies.policies = {});
    $id$walt$policies$policies.DynamicPolicy = DynamicPolicy;
    defineProp($id$walt$policies$policies.DynamicPolicy, 'Companion', Companion_getInstance_25);
    $id$walt$policies$policies.DynamicPolicy.$verifyCOROUTINE$10 = $verifyCOROUTINE$10;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$policies = $id$walt$policies.policies || ($id$walt$policies.policies = {});
    $id$walt$policies$policies.ExpirationDatePolicy = ExpirationDatePolicy;
    defineProp($id$walt$policies$policies.ExpirationDatePolicy, 'Companion', Companion_getInstance_27);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$policies = $id$walt$policies.policies || ($id$walt$policies.policies = {});
    $id$walt$policies$policies.JsonSchemaPolicy = JsonSchemaPolicy;
    $id$walt$policies$policies.JsonSchemaPolicy.SerializableValidationError = SerializableValidationError;
    defineProp($id$walt$policies$policies.JsonSchemaPolicy.SerializableValidationError, 'Companion', Companion_getInstance_28);
    defineProp($id$walt$policies$policies.JsonSchemaPolicy, 'Companion', Companion_getInstance_29);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$policies = $id$walt$policies.policies || ($id$walt$policies.policies = {});
    $id$walt$policies$policies.JwtSignaturePolicy = JwtSignaturePolicy;
    defineProp($id$walt$policies$policies.JwtSignaturePolicy, 'Companion', Companion_getInstance_30);
    $id$walt$policies$policies.JwtSignaturePolicy.$verifyCOROUTINE$11 = $verifyCOROUTINE$11;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$policies = $id$walt$policies.policies || ($id$walt$policies.policies = {});
    $id$walt$policies$policies.NotBeforeDatePolicy = NotBeforeDatePolicy;
    defineProp($id$walt$policies$policies.NotBeforeDatePolicy, 'Companion', Companion_getInstance_31);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$policies = $id$walt$policies.policies || ($id$walt$policies.policies = {});
    $id$walt$policies$policies.WebhookPolicy = WebhookPolicy;
    defineProp($id$walt$policies$policies.WebhookPolicy, 'Companion', Companion_getInstance_34);
    $id$walt$policies$policies.WebhookPolicy.$verifyCOROUTINE$14 = $verifyCOROUTINE$14;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$policies = $id$walt$policies.policies || ($id$walt$policies.policies = {});
    var $id$walt$policies$policies$vp = $id$walt$policies$policies.vp || ($id$walt$policies$policies.vp = {});
    $id$walt$policies$policies$vp.HolderBindingPolicy = HolderBindingPolicy;
    defineProp($id$walt$policies$policies$vp.HolderBindingPolicy, 'Companion', Companion_getInstance_35);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$policies = $id$walt$policies.policies || ($id$walt$policies.policies = {});
    var $id$walt$policies$policies$vp = $id$walt$policies$policies.vp || ($id$walt$policies$policies.vp = {});
    $id$walt$policies$policies$vp.MaximumCredentialsPolicy = MaximumCredentialsPolicy;
    defineProp($id$walt$policies$policies$vp.MaximumCredentialsPolicy, 'Companion', Companion_getInstance_36);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$policies = $id$walt$policies.policies || ($id$walt$policies.policies = {});
    var $id$walt$policies$policies$vp = $id$walt$policies$policies.vp || ($id$walt$policies$policies.vp = {});
    $id$walt$policies$policies$vp.MinimumCredentialsPolicy = MinimumCredentialsPolicy;
    defineProp($id$walt$policies$policies$vp.MinimumCredentialsPolicy, 'Companion', Companion_getInstance_37);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$policies = $id$walt.policies || ($id$walt.policies = {});
    var $id$walt$policies$utils = $id$walt$policies.utils || ($id$walt$policies.utils = {});
    defineProp($id$walt$policies$utils, 'PresentationVerificationUtils', PresentationVerificationUtils_getInstance);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=verification-policies.js.map
