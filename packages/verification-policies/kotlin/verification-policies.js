(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js', './kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js', './Kotlin-DateTime-library-kotlinx-datetime.js', './waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js', './crypto.js', './w3c-credentials.js', './kotlin-logging.js', './ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js', './ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js', './ktor-ktor-client-ktor-client-core.js', './ktor-ktor-http.js', './ktor-ktor-utils.js', './json-schema-validator-root-json-schema-validator.js', './dids.js', './definitions-parser.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js'), require('./crypto.js'), require('./w3c-credentials.js'), require('./kotlin-logging.js'), require('./ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js'), require('./ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-utils.js'), require('./json-schema-validator-root-json-schema-validator.js'), require('./dids.js'), require('./definitions-parser.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' was not found. Please, check whether 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt' was not found. Please, check whether 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof crypto === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'crypto' was not found. Please, check whether 'crypto' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['w3c-credentials'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'w3c-credentials' was not found. Please, check whether 'w3c-credentials' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['json-schema-validator-root-json-schema-validator'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'json-schema-validator-root-json-schema-validator' was not found. Please, check whether 'json-schema-validator-root-json-schema-validator' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof dids === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'dids' was not found. Please, check whether 'dids' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    if (typeof globalThis['definitions-parser'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.policies:waltid-verification-policies'. Its dependency 'definitions-parser' was not found. Please, check whether 'definitions-parser' is loaded prior to 'id.walt.policies:waltid-verification-policies'.");
    }
    globalThis['id.walt.policies:waltid-verification-policies'] = factory(typeof globalThis['id.walt.policies:waltid-verification-policies'] === 'undefined' ? {} : globalThis['id.walt.policies:waltid-verification-policies'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core'], globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'], globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'], crypto, globalThis['w3c-credentials'], globalThis['kotlin-logging'], globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'], globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'], globalThis['ktor-ktor-client-ktor-client-core'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-utils'], globalThis['json-schema-validator-root-json-schema-validator'], dids, globalThis['definitions-parser']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_id_walt_sdjwt_waltid_sdjwt, kotlin_id_walt_crypto_waltid_crypto, kotlin_id_walt_credentials_waltid_w3c_credentials, kotlin_io_github_oshai_kotlin_logging, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_io_github_optimumcode_json_schema_validator, kotlin_id_walt_did_waltid_did, kotlin_id_walt_dif_definitions_parser_waltid_dif_definitions_parser) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var getKClass = kotlin_kotlin.$_$.g;
  var JsonClassDiscriminator = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.r;
  var lazy = kotlin_kotlin.$_$.ik;
  var protoOf = kotlin_kotlin.$_$.be;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var VOID = kotlin_kotlin.$_$.j;
  var CoroutineImpl = kotlin_kotlin.$_$.bc;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.lb;
  var Result = kotlin_kotlin.$_$.ij;
  var initMetadataForLambda = kotlin_kotlin.$_$.cd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var isInterface = kotlin_kotlin.$_$.md;
  var $runInAsync$ = kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime.$_$.a;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var defineProp = kotlin_kotlin.$_$.qc;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b1;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c1;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var Pair = kotlin_kotlin.$_$.hj;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var toLongOrNull = kotlin_kotlin.$_$.xh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var Companion_instance = kotlin_kotlin.$_$.g6;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.r;
  var to = kotlin_kotlin.$_$.rk;
  var mapOf = kotlin_kotlin.$_$.t9;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v3;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.v2;
  var RuntimeException = kotlin_kotlin.$_$.jj;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.w2;
  var captureStack = kotlin_kotlin.$_$.jc;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var toString = kotlin_kotlin.$_$.fe;
  var hashCode = kotlin_kotlin.$_$.wc;
  var equals = kotlin_kotlin.$_$.rc;
  var InstantIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var DurationSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var Duration = kotlin_kotlin.$_$.li;
  var Long = kotlin_kotlin.$_$.cj;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var Duration__toString_impl_8d916b = kotlin_kotlin.$_$.j3;
  var Duration__hashCode_impl_u4exz6 = kotlin_kotlin.$_$.c3;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var getBooleanHashCode = kotlin_kotlin.$_$.tc;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var THROW_IAE = kotlin_kotlin.$_$.lj;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var Enum = kotlin_kotlin.$_$.xi;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Exception = kotlin_kotlin.$_$.zi;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.y1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var mapCapacity = kotlin_kotlin.$_$.s9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e1;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var Companion_getInstance_0 = kotlin_id_walt_sdjwt_waltid_sdjwt.$_$.a;
  var JsonPrimitive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var createFailure = kotlin_kotlin.$_$.bk;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.w3;
  var JsonPrimitive_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.s;
  var lastOrNull = kotlin_kotlin.$_$.j9;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.b4;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var KtMap = kotlin_kotlin.$_$.w6;
  var JwsUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.g;
  var substringBefore = kotlin_kotlin.$_$.lh;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var VCFormat_sd_jwt_vc_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.h;
  var NotImplementedError = kotlin_kotlin.$_$.ej;
  var VCFormat_mso_mdoc_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.g;
  var emptyList = kotlin_kotlin.$_$.k8;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var Monotonic_instance = kotlin_kotlin.$_$.c6;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.e;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.l3;
  var Companion_instance_0 = kotlin_id_walt_sdjwt_waltid_sdjwt.$_$.b;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.l8;
  var joinToString = kotlin_kotlin.$_$.e9;
  var get_contentOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.x;
  var checkIndexOverflow = kotlin_kotlin.$_$.n7;
  var JsonElementSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var toString_0 = kotlin_kotlin.$_$.pk;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.z3;
  var Result__toString_impl_yu5r8k = kotlin_kotlin.$_$.a4;
  var Result__hashCode_impl_d2zufp = kotlin_kotlin.$_$.x3;
  var JsonUtils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.f;
  var throwOnFailure = kotlin_kotlin.$_$.nk;
  var stackTraceToString = kotlin_kotlin.$_$.mk;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var arrayOf = kotlin_kotlin.$_$.yj;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d3;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.y3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var Collection = kotlin_kotlin.$_$.o6;
  var addAll = kotlin_kotlin.$_$.f7;
  var checkCountOverflow = kotlin_kotlin.$_$.m7;
  var Companion_getInstance_1 = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.p;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var VCFormat_jwt_vc_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.b;
  var VCFormat_jwt_vc_json_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.a;
  var VCFormat_ldp_vc_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.e;
  var setOf = kotlin_kotlin.$_$.ja;
  var listOf = kotlin_kotlin.$_$.q9;
  var get_ContentNegotiation = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.a1;
  var replace = kotlin_kotlin.$_$.zg;
  var split = kotlin_kotlin.$_$.dh;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.o1;
  var isCharSequence = kotlin_kotlin.$_$.id;
  var trim = kotlin_kotlin.$_$.ki;
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
  var mapOf_0 = kotlin_kotlin.$_$.u9;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var get_booleanOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.w;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var V2_NotAfter_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.n;
  var V1_NotAfter_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.l;
  var listOf_0 = kotlin_kotlin.$_$.r9;
  var JwtClaims_NotAfter_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.j;
  var _Duration___get_inWholeSeconds__impl__hpy7b3 = kotlin_kotlin.$_$.d3;
  var JsonPrimitive_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.fc;
  var ErrorCollector = kotlin_io_github_optimumcode_json_schema_validator.$_$.c;
  var Companion_instance_1 = kotlin_io_github_optimumcode_json_schema_validator.$_$.a;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var IllegalArgumentException = kotlin_kotlin.$_$.aj;
  var JwsSignatureScheme = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.q;
  var V2_NotBefore_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.o;
  var V1_NotBefore_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.m;
  var JwtClaims_NotBefore_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.k;
  var JwtClaims_IssuedAt_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.i;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.b6;
  var DurationUnit_MINUTES_getInstance = kotlin_kotlin.$_$.n;
  var toDuration = kotlin_kotlin.$_$.ni;
  var UuidUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.j;
  var Companion_instance_2 = kotlin_id_walt_crypto_waltid_crypto.$_$.b;
  var DidService_getInstance = kotlin_id_walt_did_waltid_did.$_$.a;
  var DidUtils_getInstance = kotlin_id_walt_did_waltid_did.$_$.b;
  var JWKKey = kotlin_id_walt_crypto_waltid_crypto.$_$.l;
  var setOf_0 = kotlin_kotlin.$_$.ia;
  var firstOrNull = kotlin_kotlin.$_$.r8;
  var VerificationException = kotlin_id_walt_crypto_waltid_crypto.$_$.k;
  var coerceAtLeast = kotlin_kotlin.$_$.me;
  var toMutableMap = kotlin_kotlin.$_$.db;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var header = kotlin_io_ktor_ktor_client_core.$_$.s;
  var VCFormat_jwt_vp_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.d;
  var VCFormat_jwt_vp_json_getInstance = kotlin_id_walt_credentials_waltid_w3c_credentials.$_$.c;
  var first = kotlin_kotlin.$_$.t8;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.z;
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
  var equals_0 = kotlin_kotlin.$_$.yf;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var listOfNotNull = kotlin_kotlin.$_$.o9;
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
  initMetadataForCompanion(Companion_16);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PolicyResultSurrogate, 'PolicyResultSurrogate', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForObject(PolicyResultSerializer, 'PolicyResultSerializer', VOID, VOID, [KSerializer]);
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
    return $this.se9_1.b1();
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
    tmp.se9_1 = lazy(tmp_0, CredentialDataValidatorPolicy$Companion$_anonymous__wpg9fw);
  }
  protoOf(Companion).m4u = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
    this.bea_1 = this$0;
    this.cea_1 = $data;
    this.dea_1 = $args;
    this.eea_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialDataValidatorPolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(CredentialDataValidatorPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.bea_1.gea(this.cea_1, this.dea_1, this.eea_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new CredentialDataValidatorPolicy$verifyAsync$slambda(this.bea_1, this.cea_1, this.dea_1, this.eea_1, completion);
  };
  function CredentialDataValidatorPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new CredentialDataValidatorPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
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
    return $super === VOID ? this.gea(data, args, context, $completion) : $super.gea.call(this, data, args, context, $completion);
  };
  protoOf(CredentialDataValidatorPolicy).hea = function (data, args, context) {
    var tmp = CredentialDataValidatorPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(CredentialDataValidatorPolicy).verifyAsync$default = function (data, args, context, $super) {
    args = args === VOID ? null : args;
    return $super === VOID ? this.hea(data, args, context) : $super.hea.call(this, data, args, context);
  };
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.jea_1.b1();
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
    tmp.jea_1 = lazy(tmp_0, CredentialWrapperValidatorPolicy$Companion$_anonymous__91y1fd);
  }
  protoOf(Companion_0).m4u = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_0).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
    this.sea_1 = this$0;
    this.tea_1 = $data;
    this.uea_1 = $args;
    this.vea_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialWrapperValidatorPolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(CredentialWrapperValidatorPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.sea_1.gea(this.tea_1, this.uea_1, this.vea_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new CredentialWrapperValidatorPolicy$verifyAsync$slambda(this.sea_1, this.tea_1, this.uea_1, this.vea_1, completion);
  };
  function CredentialWrapperValidatorPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new CredentialWrapperValidatorPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
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
    return $super === VOID ? this.gea(data, args, context, $completion) : $super.gea.call(this, data, args, context, $completion);
  };
  protoOf(CredentialWrapperValidatorPolicy).hea = function (data, args, context) {
    var tmp = CredentialWrapperValidatorPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(CredentialWrapperValidatorPolicy).verifyAsync$default = function (data, args, context, $super) {
    args = args === VOID ? null : args;
    return $super === VOID ? this.hea(data, args, context) : $super.hea.call(this, data, args, context);
  };
  function check($this, data, claims, converter) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = claims.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        var tmp1_safe_receiver = data == null ? null : get_jsonObject(data);
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af(element.dd6());
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
        // Inline function 'kotlin.text.isNullOrEmpty' call
        var this_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
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
      tmp = new Pair(tmp0_safe_receiver, converter(get_jsonPrimitive(ensureNotNull(get_jsonObject(ensureNotNull(data)).af(tmp0_safe_receiver.dd6()))).q4u()));
    }
    return tmp;
  }
  function instantConverter($this, value) {
    return Companion_getInstance().x6a(value);
  }
  function epochInstantConverter($this, value) {
    var tmp0_safe_receiver = toLongOrNull(value);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = Companion_getInstance().c6c(tmp0_safe_receiver);
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
    tmp.wea_1 = _Result___init__impl__xyqfz8(value);
  }
  protoOf(DatePolicyUtils).xea = function (data, claims) {
    return check(this, data, claims, DatePolicyUtils$checkVc$lambda);
  };
  protoOf(DatePolicyUtils).yea = function (data, claims) {
    return check(this, data, claims, DatePolicyUtils$checkJwt$lambda);
  };
  var DatePolicyUtils_instance;
  function DatePolicyUtils_getInstance() {
    if (DatePolicyUtils_instance == null)
      new DatePolicyUtils();
    return DatePolicyUtils_instance;
  }
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.zea_1.b1();
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
    tmp.zea_1 = lazy(tmp_0, SerializableRuntimeException$Companion$_anonymous__q5ctqx);
  }
  protoOf(Companion_1).m4u = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_1).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
      $this.aeb_1 = null;
    else
      $this.aeb_1 = message;
    return $this;
  }
  function SerializableRuntimeException(message) {
    Companion_getInstance_6();
    message = message === VOID ? null : message;
    RuntimeException_init_$Init$_0(message, this);
    captureStack(this, SerializableRuntimeException);
    this.aeb_1 = message;
  }
  protoOf(SerializableRuntimeException).ta = function () {
    return this.aeb_1;
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
    tmp.beb_1 = [null, lazy(tmp_0, JsonSchemaVerificationException$Companion$$childSerializers$_anonymous__68unz5)];
  }
  protoOf(Companion_2).m4u = function () {
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
    tmp0_serialDesc.x2b('message', true);
    tmp0_serialDesc.x2b('validationErrors', false);
    this.ceb_1 = tmp0_serialDesc;
  }
  protoOf($serializer).deb = function (encoder, value) {
    var tmp0_desc = this.ceb_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().beb_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.validationErrors);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer).v20 = function (encoder, value) {
    return this.deb(encoder, value instanceof JsonSchemaVerificationException ? value : THROW_CCE());
  };
  protoOf($serializer).w20 = function (decoder) {
    var tmp0_desc = this.ceb_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_7().beb_1;
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
    return JsonSchemaVerificationException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).u20 = function () {
    return this.ceb_1;
  };
  protoOf($serializer).m2c = function () {
    var tmp0_cached = Companion_getInstance_7().beb_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), tmp0_cached[1].b1()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function JsonSchemaVerificationException_init_$Init$(seen0, message, validationErrors, serializationConstructorMarker, $this) {
    if (!(2 === (2 & seen0))) {
      throwMissingFieldException(seen0, 2, $serializer_getInstance().ceb_1);
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
  protoOf(JsonSchemaVerificationException).feb = function () {
    return this.validationErrors;
  };
  protoOf(JsonSchemaVerificationException).dc = function () {
    return this.validationErrors;
  };
  protoOf(JsonSchemaVerificationException).geb = function (validationErrors) {
    return new JsonSchemaVerificationException(validationErrors);
  };
  protoOf(JsonSchemaVerificationException).copy = function (validationErrors, $super) {
    validationErrors = validationErrors === VOID ? this.validationErrors : validationErrors;
    return $super === VOID ? this.geb(validationErrors) : $super.geb.call(this, validationErrors);
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
  protoOf(Companion_3).m4u = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    return Companion_instance_7;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('NotBeforePolicyException', this, 7);
    tmp0_serialDesc.x2b('message', true);
    tmp0_serialDesc.x2b('date', false);
    tmp0_serialDesc.x2b('date_seconds', false);
    tmp0_serialDesc.x2b('available_in', false);
    tmp0_serialDesc.x2b('available_in_seconds', false);
    tmp0_serialDesc.x2b('key', false);
    tmp0_serialDesc.x2b('policy_available', true);
    this.heb_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).ieb = function (encoder, value) {
    var tmp0_desc = this.heb_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.y25(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), value.date);
    tmp1_output.s25(tmp0_desc, 2, value.dateSeconds);
    tmp1_output.y25(tmp0_desc, 3, DurationSerializer_getInstance(), new Duration(value.availableIn));
    tmp1_output.s25(tmp0_desc, 4, value.availableInSeconds);
    tmp1_output.w25(tmp0_desc, 5, value.key);
    if (tmp1_output.e26(tmp0_desc, 6) ? true : !(value.policyAvailable === true)) {
      tmp1_output.o25(tmp0_desc, 6, value.policyAvailable);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_0).v20 = function (encoder, value) {
    return this.ieb(encoder, value instanceof NotBeforePolicyException ? value : THROW_CCE());
  };
  protoOf($serializer_0).w20 = function (decoder) {
    var tmp0_desc = this.heb_1;
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
    var tmp11_input = decoder.h24(tmp0_desc);
    if (tmp11_input.x24()) {
      tmp4_local0 = tmp11_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.t24(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.n24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp7_local3;
      var tmp_1 = tmp11_input.t24(tmp0_desc, 3, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp7_local3 = tmp_1 == null ? null : tmp_1.gg_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.n24(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.r24(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.j24(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.t24(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.n24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp7_local3;
            var tmp_4 = tmp11_input.t24(tmp0_desc, 3, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp7_local3 = tmp_4 == null ? null : tmp_4.gg_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.n24(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.r24(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.j24(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.i24(tmp0_desc);
    return NotBeforePolicyException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_0).u20 = function () {
    return this.heb_1;
  };
  protoOf($serializer_0).m2c = function () {
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
      throwMissingFieldException(seen0, 62, $serializer_getInstance_0().heb_1);
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
  protoOf(NotBeforePolicyException).l6c = function () {
    return this.date;
  };
  protoOf(NotBeforePolicyException).keb = function () {
    return this.dateSeconds;
  };
  protoOf(NotBeforePolicyException).leb = function () {
    return this.availableIn;
  };
  protoOf(NotBeforePolicyException).meb = function () {
    return this.availableInSeconds;
  };
  protoOf(NotBeforePolicyException).a1 = function () {
    return this.key;
  };
  protoOf(NotBeforePolicyException).neb = function () {
    return this.policyAvailable;
  };
  protoOf(NotBeforePolicyException).dc = function () {
    return this.date;
  };
  protoOf(NotBeforePolicyException).ec = function () {
    return this.dateSeconds;
  };
  protoOf(NotBeforePolicyException).oeb = function () {
    return this.availableIn;
  };
  protoOf(NotBeforePolicyException).p70 = function () {
    return this.availableInSeconds;
  };
  protoOf(NotBeforePolicyException).w7k = function () {
    return this.key;
  };
  protoOf(NotBeforePolicyException).o85 = function () {
    return this.policyAvailable;
  };
  protoOf(NotBeforePolicyException).peb = function (date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable) {
    return new NotBeforePolicyException(date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable);
  };
  protoOf(NotBeforePolicyException).copy = function (date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable, $super) {
    date = date === VOID ? this.date : date;
    dateSeconds = dateSeconds === VOID ? this.dateSeconds : dateSeconds;
    availableIn = availableIn === VOID ? this.availableIn : availableIn;
    availableInSeconds = availableInSeconds === VOID ? this.availableInSeconds : availableInSeconds;
    key = key === VOID ? this.key : key;
    policyAvailable = policyAvailable === VOID ? this.policyAvailable : policyAvailable;
    return $super === VOID ? this.peb(date, dateSeconds, availableIn, availableInSeconds, key, policyAvailable) : $super.peb.call(this, date, dateSeconds, new Duration(availableIn), availableInSeconds, key, policyAvailable);
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
  protoOf(Companion_4).m4u = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('ExpirationDatePolicyException', this, 7);
    tmp0_serialDesc.x2b('message', true);
    tmp0_serialDesc.x2b('date', false);
    tmp0_serialDesc.x2b('date_seconds', false);
    tmp0_serialDesc.x2b('expired_in', false);
    tmp0_serialDesc.x2b('expired_in_seconds', false);
    tmp0_serialDesc.x2b('key', false);
    tmp0_serialDesc.x2b('policy_available', true);
    this.qeb_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).reb = function (encoder, value) {
    var tmp0_desc = this.qeb_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.y25(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), value.date);
    tmp1_output.s25(tmp0_desc, 2, value.dateSeconds);
    tmp1_output.y25(tmp0_desc, 3, DurationSerializer_getInstance(), new Duration(value.expiredSince));
    tmp1_output.s25(tmp0_desc, 4, value.expiredSinceSeconds);
    tmp1_output.w25(tmp0_desc, 5, value.key);
    if (tmp1_output.e26(tmp0_desc, 6) ? true : !(value.policyAvailable === true)) {
      tmp1_output.o25(tmp0_desc, 6, value.policyAvailable);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_1).v20 = function (encoder, value) {
    return this.reb(encoder, value instanceof ExpirationDatePolicyException ? value : THROW_CCE());
  };
  protoOf($serializer_1).w20 = function (decoder) {
    var tmp0_desc = this.qeb_1;
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
    var tmp11_input = decoder.h24(tmp0_desc);
    if (tmp11_input.x24()) {
      tmp4_local0 = tmp11_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.t24(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.n24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp7_local3;
      var tmp_1 = tmp11_input.t24(tmp0_desc, 3, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp7_local3 = tmp_1 == null ? null : tmp_1.gg_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.n24(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.r24(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.j24(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.t24(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.n24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp7_local3;
            var tmp_4 = tmp11_input.t24(tmp0_desc, 3, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp7_local3 = tmp_4 == null ? null : tmp_4.gg_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.n24(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.r24(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.j24(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.i24(tmp0_desc);
    return ExpirationDatePolicyException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_1).u20 = function () {
    return this.qeb_1;
  };
  protoOf($serializer_1).m2c = function () {
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
      throwMissingFieldException(seen0, 62, $serializer_getInstance_1().qeb_1);
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
  protoOf(ExpirationDatePolicyException).l6c = function () {
    return this.date;
  };
  protoOf(ExpirationDatePolicyException).keb = function () {
    return this.dateSeconds;
  };
  protoOf(ExpirationDatePolicyException).teb = function () {
    return this.expiredSince;
  };
  protoOf(ExpirationDatePolicyException).ueb = function () {
    return this.expiredSinceSeconds;
  };
  protoOf(ExpirationDatePolicyException).a1 = function () {
    return this.key;
  };
  protoOf(ExpirationDatePolicyException).neb = function () {
    return this.policyAvailable;
  };
  protoOf(ExpirationDatePolicyException).dc = function () {
    return this.date;
  };
  protoOf(ExpirationDatePolicyException).ec = function () {
    return this.dateSeconds;
  };
  protoOf(ExpirationDatePolicyException).oeb = function () {
    return this.expiredSince;
  };
  protoOf(ExpirationDatePolicyException).p70 = function () {
    return this.expiredSinceSeconds;
  };
  protoOf(ExpirationDatePolicyException).w7k = function () {
    return this.key;
  };
  protoOf(ExpirationDatePolicyException).o85 = function () {
    return this.policyAvailable;
  };
  protoOf(ExpirationDatePolicyException).peb = function (date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable) {
    return new ExpirationDatePolicyException(date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable);
  };
  protoOf(ExpirationDatePolicyException).copy = function (date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable, $super) {
    date = date === VOID ? this.date : date;
    dateSeconds = dateSeconds === VOID ? this.dateSeconds : dateSeconds;
    expiredSince = expiredSince === VOID ? this.expiredSince : expiredSince;
    expiredSinceSeconds = expiredSinceSeconds === VOID ? this.expiredSinceSeconds : expiredSinceSeconds;
    key = key === VOID ? this.key : key;
    policyAvailable = policyAvailable === VOID ? this.policyAvailable : policyAvailable;
    return $super === VOID ? this.peb(date, dateSeconds, expiredSince, expiredSinceSeconds, key, policyAvailable) : $super.peb.call(this, date, dateSeconds, new Duration(expiredSince), expiredSinceSeconds, key, policyAvailable);
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
  protoOf(Companion_5).m4u = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_9;
  function Companion_getInstance_10() {
    return Companion_instance_9;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('WebhookPolicyException', this, 2);
    tmp0_serialDesc.x2b('message', true);
    tmp0_serialDesc.x2b('response', false);
    this.veb_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).web = function (encoder, value) {
    var tmp0_desc = this.veb_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.y25(tmp0_desc, 1, JsonObjectSerializer_getInstance(), value.response);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_2).v20 = function (encoder, value) {
    return this.web(encoder, value instanceof WebhookPolicyException ? value : THROW_CCE());
  };
  protoOf($serializer_2).w20 = function (decoder) {
    var tmp0_desc = this.veb_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, JsonObjectSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, JsonObjectSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return WebhookPolicyException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).u20 = function () {
    return this.veb_1;
  };
  protoOf($serializer_2).m2c = function () {
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
      throwMissingFieldException(seen0, 2, $serializer_getInstance_2().veb_1);
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
  protoOf(WebhookPolicyException).i3j = function () {
    return this.response;
  };
  protoOf(WebhookPolicyException).dc = function () {
    return this.response;
  };
  protoOf(WebhookPolicyException).ha3 = function (response) {
    return new WebhookPolicyException(response);
  };
  protoOf(WebhookPolicyException).copy = function (response, $super) {
    response = response === VOID ? this.response : response;
    return $super === VOID ? this.ha3(response) : $super.ha3.call(this, response);
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
  protoOf(Companion_6).m4u = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('PresentationDefinitionException', this, 2);
    tmp0_serialDesc.x2b('message', true);
    tmp0_serialDesc.x2b('presentationDefinitionMatch', false);
    this.yeb_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).zeb = function (encoder, value) {
    var tmp0_desc = this.yeb_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.o25(tmp0_desc, 1, value.presentationDefinitionMatch);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_3).v20 = function (encoder, value) {
    return this.zeb(encoder, value instanceof PresentationDefinitionException ? value : THROW_CCE());
  };
  protoOf($serializer_3).w20 = function (decoder) {
    var tmp0_desc = this.yeb_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_input = decoder.h24(tmp0_desc);
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.j24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.j24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return PresentationDefinitionException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).u20 = function () {
    return this.yeb_1;
  };
  protoOf($serializer_3).m2c = function () {
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
      throwMissingFieldException(seen0, 2, $serializer_getInstance_3().yeb_1);
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
  protoOf(PresentationDefinitionException).bec = function () {
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
    tmp.eec_1 = [null, lazy(tmp_0, PresentationDefinitionRelationalConstraintException$Companion$$childSerializers$_anonymous__tbpl1w), null];
  }
  protoOf(Companion_7).m4u = function () {
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
    tmp0_serialDesc.x2b('message', true);
    tmp0_serialDesc.x2b('constraint', false);
    tmp0_serialDesc.x2b('constraintFailureDescription', false);
    this.fec_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).gec = function (encoder, value) {
    var tmp0_desc = this.fec_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().eec_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.constraint);
    tmp1_output.w25(tmp0_desc, 2, value.constraintFailureDescription);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_4).v20 = function (encoder, value) {
    return this.gec(encoder, value instanceof PresentationDefinitionRelationalConstraintException ? value : THROW_CCE());
  };
  protoOf($serializer_4).w20 = function (decoder) {
    var tmp0_desc = this.fec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_12().eec_1;
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1, tmp8_cached[1].b1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1, tmp8_cached[1].b1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i24(tmp0_desc);
    return PresentationDefinitionRelationalConstraintException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_4).u20 = function () {
    return this.fec_1;
  };
  protoOf($serializer_4).m2c = function () {
    var tmp0_cached = Companion_getInstance_12().eec_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), tmp0_cached[1].b1(), StringSerializer_getInstance()];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function PresentationDefinitionRelationalConstraintException_init_$Init$(seen0, message, constraint, constraintFailureDescription, serializationConstructorMarker, $this) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_4().fec_1);
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
  protoOf(PresentationDefinitionRelationalConstraintException).iec = function () {
    return this.constraint;
  };
  protoOf(PresentationDefinitionRelationalConstraintException).jec = function () {
    return this.constraintFailureDescription;
  };
  function Companion_8() {
  }
  protoOf(Companion_8).m4u = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('MinimumCredentialsException', this, 3);
    tmp0_serialDesc.x2b('message', true);
    tmp0_serialDesc.x2b('total', false);
    tmp0_serialDesc.x2b('missing', false);
    this.kec_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).lec = function (encoder, value) {
    var tmp0_desc = this.kec_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.r25(tmp0_desc, 1, value.total);
    tmp1_output.r25(tmp0_desc, 2, value.missing);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_5).v20 = function (encoder, value) {
    return this.lec(encoder, value instanceof MinimumCredentialsException ? value : THROW_CCE());
  };
  protoOf($serializer_5).w20 = function (decoder) {
    var tmp0_desc = this.kec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.h24(tmp0_desc);
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.m24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.m24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.m24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.m24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i24(tmp0_desc);
    return MinimumCredentialsException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_5).u20 = function () {
    return this.kec_1;
  };
  protoOf($serializer_5).m2c = function () {
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
      throwMissingFieldException(seen0, 6, $serializer_getInstance_5().kec_1);
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
  protoOf(MinimumCredentialsException).nec = function () {
    return this.total;
  };
  protoOf(MinimumCredentialsException).oec = function () {
    return this.missing;
  };
  function Companion_9() {
  }
  protoOf(Companion_9).m4u = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
    return Companion_instance_13;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('MaximumCredentialsException', this, 3);
    tmp0_serialDesc.x2b('message', true);
    tmp0_serialDesc.x2b('total', false);
    tmp0_serialDesc.x2b('exceeded', false);
    this.pec_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).qec = function (encoder, value) {
    var tmp0_desc = this.pec_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.r25(tmp0_desc, 1, value.total);
    tmp1_output.r25(tmp0_desc, 2, value.exceeded);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_6).v20 = function (encoder, value) {
    return this.qec(encoder, value instanceof MaximumCredentialsException ? value : THROW_CCE());
  };
  protoOf($serializer_6).w20 = function (decoder) {
    var tmp0_desc = this.pec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.h24(tmp0_desc);
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.m24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.m24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.m24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.m24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i24(tmp0_desc);
    return MaximumCredentialsException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_6).u20 = function () {
    return this.pec_1;
  };
  protoOf($serializer_6).m2c = function () {
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
      throwMissingFieldException(seen0, 6, $serializer_getInstance_6().pec_1);
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
  protoOf(MaximumCredentialsException).nec = function () {
    return this.total;
  };
  protoOf(MaximumCredentialsException).sec = function () {
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
    tmp.tec_1 = [null, null, lazy(tmp_0, HolderBindingException$Companion$$childSerializers$_anonymous__ymgduc)];
  }
  protoOf(Companion_10).m4u = function () {
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
    tmp0_serialDesc.x2b('message', true);
    tmp0_serialDesc.x2b('presenterDid', false);
    tmp0_serialDesc.x2b('credentialDids', false);
    this.uec_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).vec = function (encoder, value) {
    var tmp0_desc = this.uec_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_15().tec_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.w25(tmp0_desc, 1, value.presenterDid);
    tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.credentialDids);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_7).v20 = function (encoder, value) {
    return this.vec(encoder, value instanceof HolderBindingException ? value : THROW_CCE());
  };
  protoOf($serializer_7).w20 = function (decoder) {
    var tmp0_desc = this.uec_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_15().tec_1;
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
    return HolderBindingException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_7).u20 = function () {
    return this.uec_1;
  };
  protoOf($serializer_7).m2c = function () {
    var tmp0_cached = Companion_getInstance_15().tec_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function HolderBindingException_init_$Init$(seen0, message, presenterDid, credentialDids, serializationConstructorMarker, $this) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_7().uec_1);
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
  protoOf(HolderBindingException).xec = function () {
    return this.presenterDid;
  };
  protoOf(HolderBindingException).yec = function () {
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
    tmp.zec_1 = [null, null, lazy(tmp_0, NotAllowedIssuerException$Companion$$childSerializers$_anonymous__fm2x9l)];
  }
  protoOf(Companion_11).m4u = function () {
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
    tmp0_serialDesc.x2b('message', true);
    tmp0_serialDesc.x2b('issuer', false);
    tmp0_serialDesc.x2b('allowedIssuers', false);
    this.aed_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).bed = function (encoder, value) {
    var tmp0_desc = this.aed_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().zec_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ta() == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.ta());
    }
    tmp1_output.w25(tmp0_desc, 1, value.issuer);
    tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.allowedIssuers);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_8).v20 = function (encoder, value) {
    return this.bed(encoder, value instanceof NotAllowedIssuerException ? value : THROW_CCE());
  };
  protoOf($serializer_8).w20 = function (decoder) {
    var tmp0_desc = this.aed_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_16().zec_1;
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
            tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
    return NotAllowedIssuerException_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_8).u20 = function () {
    return this.aed_1;
  };
  protoOf($serializer_8).m2c = function () {
    var tmp0_cached = Companion_getInstance_16().zec_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function NotAllowedIssuerException_init_$Init$(seen0, message, issuer, allowedIssuers, serializationConstructorMarker, $this) {
    if (!(6 === (6 & seen0))) {
      throwMissingFieldException(seen0, 6, $serializer_getInstance_8().aed_1);
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
  protoOf(NotAllowedIssuerException).je0 = function () {
    return this.issuer;
  };
  protoOf(NotAllowedIssuerException).ded = function () {
    return this.allowedIssuers;
  };
  function DynamicPolicyException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, DynamicPolicyException);
    this.eed_1 = message;
  }
  protoOf(DynamicPolicyException).ta = function () {
    return this.eed_1;
  };
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.fed_1.b1();
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
    tmp.fed_1 = lazy(tmp_0, JwtVerificationPolicy$Companion$_anonymous__m0tqd);
  }
  protoOf(Companion_12).m4u = function () {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(Companion_12).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
    this.oed_1 = this$0;
    this.ped_1 = $credential;
    this.qed_1 = $args;
    this.red_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwtVerificationPolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwtVerificationPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.oed_1.sed(this.ped_1, this.qed_1, this.red_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new JwtVerificationPolicy$verifyAsync$slambda(this.oed_1, this.ped_1, this.qed_1, this.red_1, completion);
  };
  function JwtVerificationPolicy$verifyAsync$slambda_0(this$0, $credential, $args, $context, resultContinuation) {
    var i = new JwtVerificationPolicy$verifyAsync$slambda(this$0, $credential, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
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
    return $super === VOID ? this.sed(credential, args, context, $completion) : $super.sed.call(this, credential, args, context, $completion);
  };
  protoOf(JwtVerificationPolicy).ted = function (credential, args, context) {
    var tmp = JwtVerificationPolicy$verifyAsync$slambda_0(this, credential, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwtVerificationPolicy).verifyAsync$default = function (credential, args, context, $super) {
    args = args === VOID ? null : args;
    return $super === VOID ? this.ted(credential, args, context) : $super.ted.call(this, credential, args, context);
  };
  function PolicyManager() {
    PolicyManager_instance = this;
    this.ued_1 = HashMap_init_$Create$();
    this.registerPolicies([new JwtSignaturePolicy(), new SdJwtVCSignaturePolicy(), new JsonSchemaPolicy(), new ExpirationDatePolicy(), new NotBeforeDatePolicy(), new WebhookPolicy(), new MinimumCredentialsPolicy(), new MaximumCredentialsPolicy(), new HolderBindingPolicy(), new AllowedIssuerPolicy(), new RevocationPolicy(), new PresentationDefinitionPolicy(), new DynamicPolicy(), new StatusPolicy()]);
  }
  protoOf(PolicyManager).listPolicyDescriptions = function () {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = this.ued_1;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(this_0.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp = element.a1();
      var tmp$ret$1 = element.b1().description;
      destination.p2(tmp, tmp$ret$1);
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
      if (PolicyManager_getInstance().ued_1.k2(element.name))
        throw IllegalArgumentException_init_$Create$('Policy does already exist: ' + element.name + ' (mapped to ' + getKClassFromExpression(ensureNotNull(PolicyManager_getInstance().ued_1.m2(element.name))).hc() + '). Choose another name for your policy (' + getKClassFromExpression(element).hc() + '.');
      var tmp0 = PolicyManager_getInstance().ued_1;
      // Inline function 'kotlin.collections.set' call
      var key = element.name;
      tmp0.p2(key, element);
    }
  };
  protoOf(PolicyManager).getPolicy = function (name) {
    var tmp0_elvis_lhs = this.ued_1.m2(name);
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
    return $this.ved_1.b1();
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
    tmp.ved_1 = lazy(tmp_0, VerificationPolicy$Companion$_anonymous__ts3mle);
  }
  protoOf(Companion_13).m4u = function () {
    return _get_$cachedSerializer__te6jhj_3(this);
  };
  protoOf(Companion_13).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
    this.eee_1 = $policyRequest;
    this.fee_1 = $jwt;
    this.gee_1 = $context;
    this.hee_1 = $onSuccess;
    this.iee_1 = $onError;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$runPolicyRequests$slambda$slambda).w1y = function ($this$launch, $completion) {
    var tmp = this.a1j($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$runPolicyRequests$slambda$slambda).va = function (p1, $completion) {
    return this.w1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            tmp_0.kee_1 = this.jee_1;
            this.lee_1 = this.kee_1;
            this.o9_1 = 4;
            var tmp_1 = this;
            tmp_1.nee_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.oee_1 = this.lee_1;
            this.pee_1 = this.oee_1;
            var tmp_3 = this;
            var tmp0_subject = this.eee_1.policy;
            var tmp_4;
            if (tmp0_subject instanceof JwtVerificationPolicy) {
              tmp_4 = JsonPrimitive_0(this.fee_1);
            } else {
              var tmp_5;
              if (tmp0_subject instanceof CredentialDataValidatorPolicy) {
                tmp_5 = true;
              } else {
                tmp_5 = tmp0_subject instanceof CredentialWrapperValidatorPolicy;
              }
              if (tmp_5) {
                tmp_4 = Companion_getInstance_0().parse(this.fee_1).zzz_unused_fullPayload;
              } else {
                throw IllegalArgumentException_init_$Create$('Unsupported policy type: ' + getKClassFromExpression(this.eee_1.policy).hc());
              }
            }

            tmp_3.qee_1 = tmp_4;
            this.n9_1 = 1;
            suspendResult = Verifier_getInstance().ief(this.eee_1, this.qee_1, this.gee_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            this.ree_1 = suspendResult.up_1;
            suspendResult = new Result(this.ree_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.see_1 = suspendResult.up_1;
            this.tee_1 = new PolicyResult(this.eee_1, this.see_1);
            this.n9_1 = 3;
            suspendResult = this.hee_1(this.tee_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.uee_1 = Unit_instance;
            var tmp_6 = this;
            this.nee_1;
            var value = this.uee_1;
            tmp_6.mee_1 = _Result___init__impl__xyqfz8(value);
            this.o9_1 = 8;
            this.n9_1 = 5;
            continue $sm;
          case 4:
            this.o9_1 = 8;
            var tmp_7 = this.q9_1;
            if (tmp_7 instanceof Error) {
              this.vee_1 = this.q9_1;
              var tmp_8 = this;
              var exception = this.vee_1;
              tmp_8.mee_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 5;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 5:
            this.o9_1 = 8;
            this.wee_1 = this.mee_1;
            this.xee_1 = this.wee_1;
            this.yee_1 = Result__exceptionOrNull_impl_p6xea9(this.xee_1);
            if (this.yee_1 == null) {
              this.zee_1 = null;
              this.n9_1 = 7;
              continue $sm;
            } else {
              var tmp_9 = this;
              tmp_9.aef_1 = this.yee_1;
              this.bef_1 = this.aef_1;
              var tmp_10 = this;
              tmp_10.cef_1 = this.bef_1;
              this.def_1 = this.cef_1;
              var tmp_11 = this;
              tmp_11.eef_1 = this.def_1;
              this.fef_1 = this.eef_1;
              this.n9_1 = 6;
              var exception_0 = this.fef_1;
              suspendResult = this.iee_1(new PolicyResult(this.eee_1, _Result___init__impl__xyqfz8(createFailure(exception_0))), this.fef_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 6:
            var tmp_12 = this;
            tmp_12.zee_1 = Unit_instance;
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
  protoOf(Verifier$runPolicyRequests$slambda$slambda).a1j = function ($this$launch, completion) {
    var i = new Verifier$runPolicyRequests$slambda$slambda(this.eee_1, this.fee_1, this.gee_1, this.hee_1, this.iee_1, completion);
    i.jee_1 = $this$launch;
    return i;
  };
  function Verifier$runPolicyRequests$slambda$slambda_0($policyRequest, $jwt, $context, $onSuccess, $onError, resultContinuation) {
    var i = new Verifier$runPolicyRequests$slambda$slambda($policyRequest, $jwt, $context, $onSuccess, $onError, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.w1y($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function getW3CType($this, _this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.af('type');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_safe_receiver = _this__u8e3s4.af('vc');
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonObject(tmp1_safe_receiver);
      tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.af('type');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp3_elvis_lhs = tmp;
    var tmp_0;
    if (tmp3_elvis_lhs == null) {
      var tmp4_safe_receiver = _this__u8e3s4.af('vp');
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : get_jsonObject(tmp4_safe_receiver);
      tmp_0 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.af('type');
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
      tmp_2 = get_jsonPrimitive(tmp_3).q4u();
    } else {
      if (it instanceof JsonPrimitive_1) {
        tmp_2 = it.q4u();
      } else {
        throw IllegalArgumentException_init_$Create$('Invalid type of `type`-attribute: ' + getKClassFromExpression(it).hc());
      }
    }
    return tmp_2;
  }
  function getSdjwtVcType($this, _this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.af('vct');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_safe_receiver = _this__u8e3s4.af('vc');
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonObject(tmp1_safe_receiver);
      tmp = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.af('vct');
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
      tmp_1 = it.q4u();
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
    return results.s() - 1 | 0;
  }
  function verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests_9orml3($presentationContext, resultMutex, policiesRun, results, idx, jwt, policies, $completion) {
    var tmp = Verifier_getInstance();
    var tmp_0 = Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_0(resultMutex, policiesRun, results, idx, null);
    return tmp.jef(jwt, policies, $presentationContext, tmp_0, Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_2(resultMutex, policiesRun, results, idx, null), $completion);
  }
  function verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0_hkwke7($presentationContext, resultMutex, policiesRun, results, idx, jwt, policies, $completion) {
    var tmp = Verifier_getInstance();
    var tmp_0 = Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_0(resultMutex, policiesRun, results, idx, null);
    return tmp.jef(jwt, policies, $presentationContext, tmp_0, Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_2(resultMutex, policiesRun, results, idx, null), $completion);
  }
  function Verifier$log$lambda() {
    return Unit_instance;
  }
  function Verifier$verifyCredential$slambda($resultMutex, $results, resultContinuation) {
    this.sef_1 = $resultMutex;
    this.tef_1 = $results;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyCredential$slambda).yef = function (policyResult, $completion) {
    var tmp = this.zef(policyResult, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyCredential$slambda).va = function (p1, $completion) {
    return this.yef(p1 instanceof PolicyResult ? p1 : THROW_CCE(), $completion);
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
            tmp_0.vef_1 = this.sef_1;
            this.wef_1 = this.vef_1;
            var tmp_1 = this;
            tmp_1.xef_1 = null;
            this.n9_1 = 1;
            suspendResult = this.wef_1.g1g(this.xef_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                this.tef_1.n(this.uef_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.wef_1.s1f(this.xef_1);
                throw t;
              }
            }
             while (false);
            this.wef_1.s1f(this.xef_1);
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
  protoOf(Verifier$verifyCredential$slambda).zef = function (policyResult, completion) {
    var i = new Verifier$verifyCredential$slambda(this.sef_1, this.tef_1, completion);
    i.uef_1 = policyResult;
    return i;
  };
  function Verifier$verifyCredential$slambda_0($resultMutex, $results, resultContinuation) {
    var i = new Verifier$verifyCredential$slambda($resultMutex, $results, resultContinuation);
    var l = function (policyResult, $completion) {
      return i.yef(policyResult, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Verifier$verifyCredential$slambda_1($resultMutex, $results, resultContinuation) {
    this.ieg_1 = $resultMutex;
    this.jeg_1 = $results;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyCredential$slambda_1).peg = function (policyResult, exception, $completion) {
    var tmp = this.qeg(policyResult, exception, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyCredential$slambda_1).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof PolicyResult ? p1 : THROW_CCE();
    return this.peg(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
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
            tmp_0.meg_1 = this.ieg_1;
            this.neg_1 = this.meg_1;
            var tmp_1 = this;
            tmp_1.oeg_1 = null;
            this.n9_1 = 1;
            suspendResult = this.neg_1.g1g(this.oeg_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                this.jeg_1.n(this.keg_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.neg_1.s1f(this.oeg_1);
                throw t;
              }
            }
             while (false);
            this.neg_1.s1f(this.oeg_1);
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
  protoOf(Verifier$verifyCredential$slambda_1).qeg = function (policyResult, exception, completion) {
    var i = new Verifier$verifyCredential$slambda_1(this.ieg_1, this.jeg_1, completion);
    i.keg_1 = policyResult;
    i.leg_1 = exception;
    return i;
  };
  function Verifier$verifyCredential$slambda_2($resultMutex, $results, resultContinuation) {
    var i = new Verifier$verifyCredential$slambda_1($resultMutex, $results, resultContinuation);
    var l = function (policyResult, exception, $completion) {
      return i.peg(policyResult, exception, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Verifier$runPolicyRequests$slambda($policyRequests, $jwt, $context, $onSuccess, $onError, resultContinuation) {
    this.zeg_1 = $policyRequests;
    this.aeh_1 = $jwt;
    this.beh_1 = $context;
    this.ceh_1 = $onSuccess;
    this.deh_1 = $onError;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$runPolicyRequests$slambda).w1y = function ($this$coroutineScope, $completion) {
    var tmp = this.a1j($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$runPolicyRequests$slambda).va = function (p1, $completion) {
    return this.w1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$runPolicyRequests$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var _iterator__ex2g4s = this.zeg_1.p();
          while (_iterator__ex2g4s.q()) {
            var element = _iterator__ex2g4s.r();
            launch(this.eeh_1, VOID, VOID, Verifier$runPolicyRequests$slambda$slambda_0(element, this.aeh_1, this.beh_1, this.ceh_1, this.deh_1, null));
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
  protoOf(Verifier$runPolicyRequests$slambda).a1j = function ($this$coroutineScope, completion) {
    var i = new Verifier$runPolicyRequests$slambda(this.zeg_1, this.aeh_1, this.beh_1, this.ceh_1, this.deh_1, completion);
    i.eeh_1 = $this$coroutineScope;
    return i;
  };
  function Verifier$runPolicyRequests$slambda_0($policyRequests, $jwt, $context, $onSuccess, $onError, resultContinuation) {
    var i = new Verifier$runPolicyRequests$slambda($policyRequests, $jwt, $context, $onSuccess, $onError, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.w1y($this$coroutineScope, $completion);
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
    this.neh_1 = $payload;
    this.oeh_1 = $results;
    this.peh_1 = $vpType;
    this.qeh_1 = $presentationContext;
    this.reh_1 = $resultMutex;
    this.seh_1 = $policiesRun;
    this.teh_1 = $vpToken;
    this.ueh_1 = $vpPolicies;
    this.veh_1 = $verifiableCredentialJwts;
    this.weh_1 = $globalVcPolicies;
    this.xeh_1 = $specificCredentialPolicies;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyW3CPresentation$slambda).w1y = function ($this$coroutineScope, $completion) {
    var tmp = this.a1j($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyW3CPresentation$slambda).va = function (p1, $completion) {
    return this.w1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            var this_0 = this.neh_1;
            tmp_0.zeh_1 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).k2('vp');
            if (this.zeh_1 === true) {
              this.aei_1 = verifyW3CPresentation$_anonymous_$_anonymous_$addResultEntryFor_fxz7ij(this.oeh_1, this.peh_1);
              this.n9_1 = 2;
              suspendResult = verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests_9orml3(this.qeh_1, this.reh_1, this.seh_1, this.oeh_1, this.aei_1, this.teh_1, this.ueh_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bei_1 = 0;
              this.oeh_1.n(new PresentationResultEntry(this.teh_1));
              this.n9_1 = 1;
              suspendResult = verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests_9orml3(this.qeh_1, this.reh_1, this.seh_1, this.oeh_1, this.bei_1, this.teh_1, this.ueh_1, this);
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
            tmp_1.cei_1 = this.veh_1;
            this.dei_1 = this.cei_1;
            this.eei_1 = this.dei_1.p();
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (!this.eei_1.q()) {
              this.n9_1 = 8;
              continue $sm;
            }

            this.fei_1 = this.eei_1.r();
            var tmp_2 = this;
            tmp_2.gei_1 = this.fei_1;
            this.hei_1 = this.gei_1;
            this.iei_1 = getAnyType(Verifier_getInstance(), JwsUtils_instance.decodeJws(substringBefore(this.hei_1, '~')).payload);
            this.jei_1 = verifyW3CPresentation$_anonymous_$_anonymous_$addResultEntryFor_fxz7ij(this.oeh_1, this.iei_1);
            this.n9_1 = 5;
            suspendResult = verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests_9orml3(this.qeh_1, this.reh_1, this.seh_1, this.oeh_1, this.jei_1, this.hei_1, this.weh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.kei_1 = this.xeh_1.m2(this.iei_1);
            if (this.kei_1 == null) {
              this.lei_1 = null;
              this.n9_1 = 7;
              continue $sm;
            } else {
              var tmp_3 = this;
              tmp_3.mei_1 = this.kei_1;
              this.nei_1 = this.mei_1;
              var tmp_4 = this;
              tmp_4.oei_1 = this.nei_1;
              this.pei_1 = this.oei_1;
              this.n9_1 = 6;
              suspendResult = verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests_9orml3(this.qeh_1, this.reh_1, this.seh_1, this.oeh_1, this.jei_1, this.hei_1, this.pei_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 6:
            var tmp_5 = this;
            tmp_5.lei_1 = Unit_instance;
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
  protoOf(Verifier$verifyW3CPresentation$slambda).a1j = function ($this$coroutineScope, completion) {
    var i = new Verifier$verifyW3CPresentation$slambda(this.neh_1, this.oeh_1, this.peh_1, this.qeh_1, this.reh_1, this.seh_1, this.teh_1, this.ueh_1, this.veh_1, this.weh_1, this.xeh_1, completion);
    i.yeh_1 = $this$coroutineScope;
    return i;
  };
  function Verifier$verifyW3CPresentation$slambda_0($payload, $results, $vpType, $presentationContext, $resultMutex, $policiesRun, $vpToken, $vpPolicies, $verifiableCredentialJwts, $globalVcPolicies, $specificCredentialPolicies, resultContinuation) {
    var i = new Verifier$verifyW3CPresentation$slambda($payload, $results, $vpType, $presentationContext, $resultMutex, $policiesRun, $vpToken, $vpPolicies, $verifiableCredentialJwts, $globalVcPolicies, $specificCredentialPolicies, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.w1y($this$coroutineScope, $completion);
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
    this.yei_1 = $results;
    this.zei_1 = $vpToken;
    this.aej_1 = $presentationContext;
    this.bej_1 = $resultMutex;
    this.cej_1 = $policiesRun;
    this.dej_1 = $vpPolicies;
    this.eej_1 = $globalVcPolicies;
    this.fej_1 = $specificCredentialPolicies;
    this.gej_1 = $vpType;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifySDJwtVCPresentation$slambda).w1y = function ($this$coroutineScope, $completion) {
    var tmp = this.a1j($this$coroutineScope, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifySDJwtVCPresentation$slambda).va = function (p1, $completion) {
    return this.w1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Verifier$verifySDJwtVCPresentation$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.yei_1.n(new PresentationResultEntry(this.zei_1));
            this.n9_1 = 1;
            suspendResult = verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0_hkwke7(this.aej_1, this.bej_1, this.cej_1, this.yei_1, 0, this.zei_1, this.dej_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (this.eej_1.s() > 0 || this.fej_1.k2(this.gej_1)) {
              this.yei_1.n(new PresentationResultEntry(this.gej_1));
              this.n9_1 = 2;
              suspendResult = verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0_hkwke7(this.aej_1, this.bej_1, this.cej_1, this.yei_1, 1, this.zei_1, this.eej_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 5;
              continue $sm;
            }

          case 2:
            this.iej_1 = this.fej_1.m2(this.gej_1);
            if (this.iej_1 == null) {
              this.jej_1 = null;
              this.n9_1 = 4;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.kej_1 = this.iej_1;
              this.lej_1 = this.kej_1;
              var tmp_1 = this;
              tmp_1.mej_1 = this.lej_1;
              this.nej_1 = this.mej_1;
              this.n9_1 = 3;
              suspendResult = verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0_hkwke7(this.aej_1, this.bej_1, this.cej_1, this.yei_1, 1, this.zei_1, this.nej_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 3:
            var tmp_2 = this;
            tmp_2.jej_1 = Unit_instance;
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
  protoOf(Verifier$verifySDJwtVCPresentation$slambda).a1j = function ($this$coroutineScope, completion) {
    var i = new Verifier$verifySDJwtVCPresentation$slambda(this.yei_1, this.zei_1, this.aej_1, this.bej_1, this.cej_1, this.dej_1, this.eej_1, this.fej_1, this.gej_1, completion);
    i.hej_1 = $this$coroutineScope;
    return i;
  };
  function Verifier$verifySDJwtVCPresentation$slambda_0($results, $vpToken, $presentationContext, $resultMutex, $policiesRun, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $vpType, resultContinuation) {
    var i = new Verifier$verifySDJwtVCPresentation$slambda($results, $vpToken, $presentationContext, $resultMutex, $policiesRun, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $vpType, resultContinuation);
    var l = function ($this$coroutineScope, $completion) {
      return i.w1y($this$coroutineScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Verifier$runPolicyRequestsAsync$slambda($jwt, $policyRequests, $context, $onSuccess, $onError, resultContinuation) {
    this.wej_1 = $jwt;
    this.xej_1 = $policyRequests;
    this.yej_1 = $context;
    this.zej_1 = $onSuccess;
    this.aek_1 = $onError;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$runPolicyRequestsAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$runPolicyRequestsAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
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
            suspendResult = Verifier_getInstance().jef(this.wej_1, this.xej_1, this.yej_1, this.zej_1, this.aek_1, this);
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
    return new Verifier$runPolicyRequestsAsync$slambda(this.wej_1, this.xej_1, this.yej_1, this.zej_1, this.aek_1, completion);
  };
  function Verifier$runPolicyRequestsAsync$slambda_0($jwt, $policyRequests, $context, $onSuccess, $onError, resultContinuation) {
    var i = new Verifier$runPolicyRequestsAsync$slambda($jwt, $policyRequests, $context, $onSuccess, $onError, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifySDJwtVCPresentationAsync$slambda($vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    this.jek_1 = $vpToken;
    this.kek_1 = $vpPolicies;
    this.lek_1 = $globalVcPolicies;
    this.mek_1 = $specificCredentialPolicies;
    this.nek_1 = $presentationContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifySDJwtVCPresentationAsync$slambda).oek = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifySDJwtVCPresentationAsync$slambda).ac = function ($completion) {
    return this.oek($completion);
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
            suspendResult = Verifier_getInstance().pek(this.jek_1, this.kek_1, this.lek_1, this.mek_1, this.nek_1, this);
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
    return new Verifier$verifySDJwtVCPresentationAsync$slambda(this.jek_1, this.kek_1, this.lek_1, this.mek_1, this.nek_1, completion);
  };
  function Verifier$verifySDJwtVCPresentationAsync$slambda_0($vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    var i = new Verifier$verifySDJwtVCPresentationAsync$slambda($vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation);
    var l = function ($completion) {
      return i.oek($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifyPresentationAsync$slambda($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    this.yek_1 = $format;
    this.zek_1 = $vpToken;
    this.ael_1 = $vpPolicies;
    this.bel_1 = $globalVcPolicies;
    this.cel_1 = $specificCredentialPolicies;
    this.del_1 = $presentationContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyPresentationAsync$slambda).oek = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyPresentationAsync$slambda).ac = function ($completion) {
    return this.oek($completion);
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
            suspendResult = Verifier_getInstance().eel(this.yek_1, this.zek_1, this.ael_1, this.bel_1, this.cel_1, this.del_1, this);
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
    return new Verifier$verifyPresentationAsync$slambda(this.yek_1, this.zek_1, this.ael_1, this.bel_1, this.cel_1, this.del_1, completion);
  };
  function Verifier$verifyPresentationAsync$slambda_0($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    var i = new Verifier$verifyPresentationAsync$slambda($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation);
    var l = function ($completion) {
      return i.oek($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifyW3CPresentationAsync$slambda($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    this.nel_1 = $format;
    this.oel_1 = $vpToken;
    this.pel_1 = $vpPolicies;
    this.qel_1 = $globalVcPolicies;
    this.rel_1 = $specificCredentialPolicies;
    this.sel_1 = $presentationContext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyW3CPresentationAsync$slambda).oek = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyW3CPresentationAsync$slambda).ac = function ($completion) {
    return this.oek($completion);
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
            suspendResult = Verifier_getInstance().tel(this.nel_1, this.oel_1, this.pel_1, this.qel_1, this.rel_1, this.sel_1, this);
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
    return new Verifier$verifyW3CPresentationAsync$slambda(this.nel_1, this.oel_1, this.pel_1, this.qel_1, this.rel_1, this.sel_1, completion);
  };
  function Verifier$verifyW3CPresentationAsync$slambda_0($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation) {
    var i = new Verifier$verifyW3CPresentationAsync$slambda($format, $vpToken, $vpPolicies, $globalVcPolicies, $specificCredentialPolicies, $presentationContext, resultContinuation);
    var l = function ($completion) {
      return i.oek($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifyJwsAsync$slambda($jwt, resultContinuation) {
    this.cem_1 = $jwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyJwsAsync$slambda).m9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Verifier$verifyJwsAsync$slambda).ac = function ($completion) {
    return this.m9w($completion);
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
            suspendResult = Verifier_getInstance().dem(this.cem_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new Verifier$verifyJwsAsync$slambda(this.cem_1, completion);
  };
  function Verifier$verifyJwsAsync$slambda_0($jwt, resultContinuation) {
    var i = new Verifier$verifyJwsAsync$slambda($jwt, resultContinuation);
    var l = function ($completion) {
      return i.m9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$runPolicyRequestAsync$slambda($this_runPolicyRequestAsync, $dataToVerify, $context, resultContinuation) {
    this.mem_1 = $this_runPolicyRequestAsync;
    this.nem_1 = $dataToVerify;
    this.oem_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$runPolicyRequestAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Verifier$runPolicyRequestAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = Verifier_getInstance().ief(this.mem_1, this.nem_1, this.oem_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new Verifier$runPolicyRequestAsync$slambda(this.mem_1, this.nem_1, this.oem_1, completion);
  };
  function Verifier$runPolicyRequestAsync$slambda_0($this_runPolicyRequestAsync, $dataToVerify, $context, resultContinuation) {
    var i = new Verifier$runPolicyRequestAsync$slambda($this_runPolicyRequestAsync, $dataToVerify, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifyCredentialAsync$slambda($jwt, $policies, $context, resultContinuation) {
    this.xem_1 = $jwt;
    this.yem_1 = $policies;
    this.zem_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyCredentialAsync$slambda).aen = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyCredentialAsync$slambda).ac = function ($completion) {
    return this.aen($completion);
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
            suspendResult = Verifier_getInstance().ben(this.xem_1, this.yem_1, this.zem_1, this);
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
    return new Verifier$verifyCredentialAsync$slambda(this.xem_1, this.yem_1, this.zem_1, completion);
  };
  function Verifier$verifyCredentialAsync$slambda_0($jwt, $policies, $context, resultContinuation) {
    var i = new Verifier$verifyCredentialAsync$slambda($jwt, $policies, $context, resultContinuation);
    var l = function ($completion) {
      return i.aen($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    this.ken_1 = $resultMutex;
    this.len_1 = $policiesRun;
    this.men_1 = $results;
    this.nen_1 = $idx;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd).yef = function (policyResult, $completion) {
    var tmp = this.zef(policyResult, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd).va = function (p1, $completion) {
    return this.yef(p1 instanceof PolicyResult ? p1 : THROW_CCE(), $completion);
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
            tmp_0.pen_1 = this.ken_1;
            this.qen_1 = this.pen_1;
            var tmp_1 = this;
            tmp_1.ren_1 = null;
            this.n9_1 = 1;
            suspendResult = this.qen_1.g1g(this.ren_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                var _unary__edvuaz = this.len_1._v;
                this.len_1._v = _unary__edvuaz + 1 | 0;
                this.men_1.u(this.nen_1).policyResults.n(this.oen_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.qen_1.s1f(this.ren_1);
                throw t;
              }
            }
             while (false);
            this.qen_1.s1f(this.ren_1);
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
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd).zef = function (policyResult, completion) {
    var i = new Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd(this.ken_1, this.len_1, this.men_1, this.nen_1, completion);
    i.oen_1 = policyResult;
    return i;
  };
  function Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_0($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    var i = new Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd($resultMutex, $policiesRun, $results, $idx, resultContinuation);
    var l = function (policyResult, $completion) {
      return i.yef(policyResult, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    this.aeo_1 = $resultMutex;
    this.beo_1 = $policiesRun;
    this.ceo_1 = $results;
    this.deo_1 = $idx;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1).peg = function (policyResult, exception, $completion) {
    var tmp = this.qeg(policyResult, exception, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof PolicyResult ? p1 : THROW_CCE();
    return this.peg(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
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
            tmp_0.geo_1 = this.aeo_1;
            this.heo_1 = this.geo_1;
            var tmp_1 = this;
            tmp_1.ieo_1 = null;
            this.n9_1 = 1;
            suspendResult = this.heo_1.g1g(this.ieo_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                var _unary__edvuaz = this.beo_1._v;
                this.beo_1._v = _unary__edvuaz + 1 | 0;
                this.ceo_1.u(this.deo_1).policyResults.n(this.eeo_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.heo_1.s1f(this.ieo_1);
                throw t;
              }
            }
             while (false);
            this.heo_1.s1f(this.ieo_1);
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
  protoOf(Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1).qeg = function (policyResult, exception, completion) {
    var i = new Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1(this.aeo_1, this.beo_1, this.ceo_1, this.deo_1, completion);
    i.eeo_1 = policyResult;
    i.feo_1 = exception;
    return i;
  };
  function Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_2($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    var i = new Verifier$verifyW3CPresentation$_anonymous_$_anonymous_$runPolicyRequests$slambda_7k7dxd_1($resultMutex, $policiesRun, $results, $idx, resultContinuation);
    var l = function (policyResult, exception, $completion) {
      return i.peg(policyResult, exception, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    this.reo_1 = $resultMutex;
    this.seo_1 = $policiesRun;
    this.teo_1 = $results;
    this.ueo_1 = $idx;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj).yef = function (policyResult, $completion) {
    var tmp = this.zef(policyResult, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj).va = function (p1, $completion) {
    return this.yef(p1 instanceof PolicyResult ? p1 : THROW_CCE(), $completion);
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
            tmp_0.weo_1 = this.reo_1;
            this.xeo_1 = this.weo_1;
            var tmp_1 = this;
            tmp_1.yeo_1 = null;
            this.n9_1 = 1;
            suspendResult = this.xeo_1.g1g(this.yeo_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                var _unary__edvuaz = this.seo_1._v;
                this.seo_1._v = _unary__edvuaz + 1 | 0;
                this.teo_1.u(this.ueo_1).policyResults.n(this.veo_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.xeo_1.s1f(this.yeo_1);
                throw t;
              }
            }
             while (false);
            this.xeo_1.s1f(this.yeo_1);
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
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj).zef = function (policyResult, completion) {
    var i = new Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj(this.reo_1, this.seo_1, this.teo_1, this.ueo_1, completion);
    i.veo_1 = policyResult;
    return i;
  };
  function Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_0($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    var i = new Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj($resultMutex, $policiesRun, $results, $idx, resultContinuation);
    var l = function (policyResult, $completion) {
      return i.yef(policyResult, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    this.hep_1 = $resultMutex;
    this.iep_1 = $policiesRun;
    this.jep_1 = $results;
    this.kep_1 = $idx;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1).peg = function (policyResult, exception, $completion) {
    var tmp = this.qeg(policyResult, exception, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof PolicyResult ? p1 : THROW_CCE();
    return this.peg(tmp, p2 instanceof Error ? p2 : THROW_CCE(), $completion);
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
            tmp_0.nep_1 = this.hep_1;
            this.oep_1 = this.nep_1;
            var tmp_1 = this;
            tmp_1.pep_1 = null;
            this.n9_1 = 1;
            suspendResult = this.oep_1.g1g(this.pep_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            l$ret$1: do {
              var tmp_2;
              try {
                var _unary__edvuaz = this.iep_1._v;
                this.iep_1._v = _unary__edvuaz + 1 | 0;
                this.jep_1.u(this.kep_1).policyResults.n(this.lep_1);
                break l$ret$1;
              } catch ($p) {
                var tmp_3;
                var t = $p;
                this.oep_1.s1f(this.pep_1);
                throw t;
              }
            }
             while (false);
            this.oep_1.s1f(this.pep_1);
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
  protoOf(Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1).qeg = function (policyResult, exception, completion) {
    var i = new Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1(this.hep_1, this.iep_1, this.jep_1, this.kep_1, completion);
    i.lep_1 = policyResult;
    i.mep_1 = exception;
    return i;
  };
  function Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_2($resultMutex, $policiesRun, $results, $idx, resultContinuation) {
    var i = new Verifier$verifySDJwtVCPresentation$_anonymous_$_anonymous_$runPolicyRequests$0$slambda_2lorxj_1($resultMutex, $policiesRun, $results, $idx, resultContinuation);
    var l = function (policyResult, exception, $completion) {
      return i.peg(policyResult, exception, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $runPolicyRequestCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, dataToVerify, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yep_1 = _this__u8e3s4;
    this.zep_1 = _this__u8e3s4_0;
    this.aeq_1 = dataToVerify;
    this.beq_1 = context;
  }
  protoOf($runPolicyRequestCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            this.ceq_1 = this.zep_1.policy;
            var tmp_0 = this.ceq_1;
            if (tmp_0 instanceof JwtVerificationPolicy) {
              var tmp_1 = this.aeq_1;
              if (!(tmp_1 instanceof JsonPrimitive_1)) {
                var message = 'Tried to apply JwtVerificationPolicy to non-jwt data: ' + toString(this.zep_1.policy);
                throw IllegalStateException_init_$Create$(toString(message));
              }
              this.n9_1 = 5;
              suspendResult = this.zep_1.policy.sed(this.aeq_1.q4u(), this.zep_1.args, this.beq_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 6;
              continue $sm;
            } else {
              var tmp_2 = this.ceq_1;
              if (tmp_2 instanceof CredentialDataValidatorPolicy) {
                var tmp_3 = this.aeq_1;
                if (!(tmp_3 instanceof JsonObject)) {
                  var message_0 = 'Tried to apply CredentialDataValidatorPolicy to non-credential data: ' + toString(this.zep_1.policy);
                  throw IllegalStateException_init_$Create$(toString(message_0));
                }
                this.eeq_1 = !(this.aeq_1.af('vc') == null) ? get_jsonObject(ensureNotNull(this.aeq_1.af('vc'))) : this.aeq_1;
                this.n9_1 = 3;
                suspendResult = this.zep_1.policy.gea(this.eeq_1, this.zep_1.args, this.beq_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                this.n9_1 = 4;
                continue $sm;
              } else {
                var tmp_4 = this.ceq_1;
                if (tmp_4 instanceof CredentialWrapperValidatorPolicy) {
                  var tmp_5 = this.aeq_1;
                  if (!(tmp_5 instanceof JsonObject)) {
                    var message_1 = 'Tried to apply CredentialWrapperValidatorPolicy to non-credential data: ' + toString(this.zep_1.policy);
                    throw IllegalStateException_init_$Create$(toString(message_1));
                  }
                  this.n9_1 = 1;
                  suspendResult = this.zep_1.policy.gea(this.aeq_1, this.zep_1.args, this.beq_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  this.n9_1 = 2;
                  continue $sm;
                } else {
                  var tmp_6 = this;
                  throw IllegalArgumentException_init_$Create$('Unsupported policy type: ' + getKClassFromExpression(this.zep_1.policy).hc());
                }
              }
            }

          case 1:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.deq_1 = suspendResult.up_1;
            this.n9_1 = 7;
            continue $sm;
          case 3:
            var unboxed_0 = suspendResult.up_1;
            suspendResult = new Result(unboxed_0);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.deq_1 = suspendResult.up_1;
            this.n9_1 = 7;
            continue $sm;
          case 5:
            var unboxed_1 = suspendResult.up_1;
            suspendResult = new Result(unboxed_1);
            this.n9_1 = 6;
            continue $sm;
          case 6:
            this.deq_1 = suspendResult.up_1;
            this.n9_1 = 7;
            continue $sm;
          case 7:
            return new Result(this.deq_1);
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
    this.neq_1 = _this__u8e3s4;
    this.oeq_1 = jwt;
    this.peq_1 = policies;
    this.qeq_1 = context;
  }
  protoOf($verifyCredentialCOROUTINE$1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.req_1 = ArrayList_init_$Create$();
            this.seq_1 = Mutex();
            this.n9_1 = 1;
            var tmp_0 = Verifier$verifyCredential$slambda_0(this.seq_1, this.req_1, null);
            suspendResult = this.neq_1.jef(this.oeq_1, this.peq_1, this.qeq_1, tmp_0, Verifier$verifyCredential$slambda_2(this.seq_1, this.req_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.req_1;
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
    this.ber_1 = _this__u8e3s4;
    this.cer_1 = format;
    this.der_1 = vpToken;
    this.eer_1 = vpPolicies;
    this.fer_1 = globalVcPolicies;
    this.ger_1 = specificCredentialPolicies;
    this.her_1 = presentationContext;
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
            this.ber_1;
            var tmp_1;
            try {
              var this_0 = JwsUtils_instance.decodeJws(this.der_1).payload;
              var value = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).k2('vp');
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

            tmp_0.ier_1 = tmp_3;
            this.ber_1.gef_1.l6g(Verifier$verifyPresentation$lambda(this.cer_1, this.ier_1, this.der_1));
            if (this.ier_1) {
              this.n9_1 = 3;
              suspendResult = this.ber_1.tel(this.cer_1, this.der_1, this.eer_1, this.fer_1, this.ger_1, this.her_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.cer_1.equals(VCFormat_mso_mdoc_getInstance())) {
                var tmp_5 = this;
                var reason = 'mdoc presentations are not yet supported';
                throw new NotImplementedError('An operation is not implemented: ' + reason);
              } else {
                if (this.cer_1.equals(VCFormat_sd_jwt_vc_getInstance())) {
                  this.n9_1 = 2;
                  suspendResult = this.ber_1.pek(this.der_1, this.eer_1, this.fer_1, this.ger_1, this.her_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.n9_1 = 1;
                  suspendResult = this.ber_1.tel(this.cer_1, this.der_1, this.eer_1, this.fer_1, this.ger_1, this.her_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

          case 1:
            this.jer_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.jer_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.jer_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return this.jer_1;
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
    this.ser_1 = _this__u8e3s4;
    this.ter_1 = format;
    this.uer_1 = vpToken;
    this.ver_1 = vpPolicies;
    this.wer_1 = globalVcPolicies;
    this.xer_1 = specificCredentialPolicies;
    this.yer_1 = presentationContext;
  }
  protoOf($verifyW3CPresentationCOROUTINE$3).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.zer_1 = JwsUtils_instance.decodeJws(this.uer_1);
            this.aes_1 = this.zer_1.payload;
            var tmp_0 = this;
            var this_0 = this.aes_1;
            tmp_0.bes_1 = (isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).k2('vp') === true ? getW3CType(this.ser_1, this.aes_1) : '';
            var tmp_1 = this;
            var this_1 = this.aes_1;
            var tmp_2;
            if ((isInterface(this_1, KtMap) ? this_1 : THROW_CCE()).k2('vp') === true) {
              var tmp2_safe_receiver = this.aes_1.af('vp');
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonObject(tmp2_safe_receiver);
              var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.af('verifiableCredential');
              var tmp5_elvis_lhs = tmp4_elvis_lhs == null ? this.aes_1.af('verifiableCredential') : tmp4_elvis_lhs;
              var tmp_3;
              if (tmp5_elvis_lhs == null) {
                var reason = 'Provided data does not have `verifiableCredential` array.';
                throw new NotImplementedError('An operation is not implemented: ' + reason);
              } else {
                tmp_3 = tmp5_elvis_lhs;
              }
              var this_2 = get_jsonArray(tmp_3);
              var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
              var _iterator__ex2g4s = this_2.p();
              while (_iterator__ex2g4s.q()) {
                var item = _iterator__ex2g4s.r();
                destination.n(get_jsonPrimitive(item).q4u());
              }
              tmp_2 = destination;
            } else {
              tmp_2 = emptyList();
            }

            tmp_1.ces_1 = tmp_2;
            this.des_1 = ArrayList_init_$Create$();
            this.ees_1 = Mutex();
            this.fes_1 = {_v: 0};
            var tmp_4 = this;
            tmp_4.ges_1 = Monotonic_instance;
            this.hes_1 = this.ges_1;
            this.ies_1 = this.hes_1.zf();
            this.n9_1 = 1;
            suspendResult = coroutineScope(Verifier$verifyW3CPresentation$slambda_0(this.aes_1, this.des_1, this.bes_1, this.yer_1, this.ees_1, this.fes_1, this.uer_1, this.ver_1, this.ces_1, this.wer_1, this.xer_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var time = ValueTimeMark__elapsedNow_impl_eonqvs(this.ies_1);
            return new PresentationVerificationResponse(this.des_1, time, this.fes_1._v);
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
    this.res_1 = _this__u8e3s4;
    this.ses_1 = vpToken;
    this.tes_1 = vpPolicies;
    this.ues_1 = globalVcPolicies;
    this.ves_1 = specificCredentialPolicies;
    this.wes_1 = presentationContext;
  }
  protoOf($verifySDJwtVCPresentationCOROUTINE$4).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.res_1.gef_1.l6g(Verifier$verifySDJwtVCPresentation$lambda(this.ses_1));
            this.xes_1 = Companion_instance_0.aq(this.ses_1);
            this.yes_1 = this.xes_1.zzz_unused_fullPayload;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.xes_1.type;
            var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this.xes_1.vc8_1 : tmp0_elvis_lhs;
            tmp_0.zes_1 = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
            this.res_1.gef_1.l6g(Verifier$verifySDJwtVCPresentation$lambda_0(this.zes_1));
            this.aet_1 = ArrayList_init_$Create$();
            this.bet_1 = Mutex();
            this.cet_1 = {_v: 0};
            var tmp_1 = this;
            tmp_1.det_1 = Monotonic_instance;
            this.eet_1 = this.det_1;
            this.fet_1 = this.eet_1.zf();
            this.n9_1 = 1;
            suspendResult = coroutineScope(Verifier$verifySDJwtVCPresentation$slambda_0(this.aet_1, this.ses_1, this.wes_1, this.bet_1, this.cet_1, this.tes_1, this.ues_1, this.ves_1, this.zes_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var time = ValueTimeMark__elapsedNow_impl_eonqvs(this.fet_1);
            return new PresentationVerificationResponse(this.aet_1, time, this.cet_1._v);
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
    this.pet_1 = _this__u8e3s4;
    this.qet_1 = jwt;
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
            suspendResult = (new JwtSignaturePolicy()).sed(this.qet_1, null, this.pet_1.hef_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
              tmp_0 = tmp0_elvis_lhs.up_1;
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
    tmp.gef_1 = tmp_0.w6g(Verifier$log$lambda);
    this.hef_1 = emptyMap();
  }
  protoOf(Verifier).ief = function (_this__u8e3s4, dataToVerify, context, $completion) {
    var tmp = new $runPolicyRequestCOROUTINE$0(this, _this__u8e3s4, dataToVerify, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Verifier).ben = function (jwt, policies, context, $completion) {
    var tmp = new $verifyCredentialCOROUTINE$1(this, jwt, policies, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier).verifyCredential$default = function (jwt, policies, context, $completion, $super) {
    context = context === VOID ? emptyMap() : context;
    return $super === VOID ? this.ben(jwt, policies, context, $completion) : $super.ben.call(this, jwt, policies, context, $completion);
  };
  protoOf(Verifier).jef = function (jwt, policyRequests, context, onSuccess, onError, $completion) {
    return coroutineScope(Verifier$runPolicyRequests$slambda_0(policyRequests, jwt, context, onSuccess, onError, null), $completion);
  };
  protoOf(Verifier).runPolicyRequests$default = function (jwt, policyRequests, context, onSuccess, onError, $completion, $super) {
    context = context === VOID ? emptyMap() : context;
    return $super === VOID ? this.jef(jwt, policyRequests, context, onSuccess, onError, $completion) : $super.jef.call(this, jwt, policyRequests, context, onSuccess, onError, $completion);
  };
  protoOf(Verifier).eel = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) {
    var tmp = new $verifyPresentationCOROUTINE$2(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier).verifyPresentation$default = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.eel(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) : $super.eel.call(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
  };
  protoOf(Verifier).tel = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) {
    var tmp = new $verifyW3CPresentationCOROUTINE$3(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier).verifyW3CPresentation$default = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.tel(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) : $super.tel.call(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
  };
  protoOf(Verifier).pek = function (vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) {
    var tmp = new $verifySDJwtVCPresentationCOROUTINE$4(this, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Verifier).verifySDJwtVCPresentation$default = function (vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.pek(vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion) : $super.pek.call(this, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $completion);
  };
  protoOf(Verifier).dem = function (jwt, $completion) {
    var tmp = new $verifyJwsCOROUTINE$5(this, jwt, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Verifier).vet = function (jwt, policyRequests, context, onSuccess, onError) {
    var tmp = Verifier$runPolicyRequestsAsync$slambda_0(jwt, policyRequests, context, onSuccess, onError, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).runPolicyRequestsAsync$default = function (jwt, policyRequests, context, onSuccess, onError, $super) {
    context = context === VOID ? emptyMap() : context;
    return $super === VOID ? this.vet(jwt, policyRequests, context, onSuccess, onError) : $super.vet.call(this, jwt, policyRequests, context, onSuccess, onError);
  };
  protoOf(Verifier).wet = function (vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) {
    var tmp = Verifier$verifySDJwtVCPresentationAsync$slambda_0(vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).verifySDJwtVCPresentationAsync$default = function (vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.wet(vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) : $super.wet.call(this, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext);
  };
  protoOf(Verifier).xet = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) {
    var tmp = Verifier$verifyPresentationAsync$slambda_0(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).verifyPresentationAsync$default = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.xet(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) : $super.xet.call(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext);
  };
  protoOf(Verifier).yet = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) {
    var tmp = Verifier$verifyW3CPresentationAsync$slambda_0(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).verifyW3CPresentationAsync$default = function (format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext, $super) {
    presentationContext = presentationContext === VOID ? emptyMap() : presentationContext;
    return $super === VOID ? this.yet(format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext) : $super.yet.call(this, format, vpToken, vpPolicies, globalVcPolicies, specificCredentialPolicies, presentationContext);
  };
  protoOf(Verifier).t6r = function (jwt) {
    var tmp = Verifier$verifyJwsAsync$slambda_0(jwt, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).zet = function (_this__u8e3s4, dataToVerify, context) {
    var tmp = Verifier$runPolicyRequestAsync$slambda_0(_this__u8e3s4, dataToVerify, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).aeu = function (jwt, policies, context) {
    var tmp = Verifier$verifyCredentialAsync$slambda_0(jwt, policies, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Verifier).verifyCredentialAsync$default = function (jwt, policies, context, $super) {
    context = context === VOID ? emptyMap() : context;
    return $super === VOID ? this.aeu(jwt, policies, context) : $super.aeu.call(this, jwt, policies, context);
  };
  var Verifier_instance;
  function Verifier_getInstance() {
    if (Verifier_instance == null)
      new Verifier();
    return Verifier_instance;
  }
  function PolicyRequest$Companion$$childSerializers$_anonymous__41h11v() {
    return Companion_getInstance_18().m4u();
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
    tmp.beu_1 = [lazy(tmp_0, PolicyRequest$Companion$$childSerializers$_anonymous__41h11v), null];
  }
  protoOf(Companion_14).ceu = function (jsonElement, errorMessage) {
    var tmp;
    if (jsonElement instanceof JsonPrimitive_1) {
      tmp = new PolicyRequest(PolicyManager_getInstance().getPolicy(jsonElement.q4u()), null);
    } else {
      if (jsonElement instanceof JsonObject) {
        var tmp_0 = PolicyManager_getInstance();
        var tmp1_safe_receiver = jsonElement.af('policy');
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
        tmp = new PolicyRequest(tmp_0.getPolicy(tmp_1), jsonElement.af('args'));
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
    return $super === VOID ? this.ceu(jsonElement, errorMessage) : $super.ceu.call(this, jsonElement, errorMessage);
  };
  protoOf(Companion_14).parsePolicyRequests = function (_this__u8e3s4) {
    var policies = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var _iterator__ex2g4s = _this__u8e3s4.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var idx = checkIndexOverflow(_unary__edvuaz);
      var tmp = Companion_getInstance_19();
      policies.n(tmp.createFromJsonElement(item, PolicyRequest$Companion$parsePolicyRequests$lambda(idx, policies)));
    }
    return policies;
  };
  protoOf(Companion_14).m4u = function () {
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
    tmp0_serialDesc.x2b('policy', false);
    tmp0_serialDesc.x2b('args', true);
    this.deu_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).eeu = function (encoder, value) {
    var tmp0_desc = this.deu_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().beu_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.policy);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.args == null)) {
      tmp1_output.a26(tmp0_desc, 1, JsonElementSerializer_getInstance(), value.args);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_9).v20 = function (encoder, value) {
    return this.eeu(encoder, value instanceof PolicyRequest ? value : THROW_CCE());
  };
  protoOf($serializer_9).w20 = function (decoder) {
    var tmp0_desc = this.deu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_19().beu_1;
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, tmp7_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return PolicyRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_9).u20 = function () {
    return this.deu_1;
  };
  protoOf($serializer_9).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_19().beu_1[0].b1(), get_nullable(JsonElementSerializer_getInstance())];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function PolicyRequest_init_$Init$(seen0, policy, args, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_9().deu_1);
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
  protoOf(PolicyRequest).feu = function () {
    return this.policy;
  };
  protoOf(PolicyRequest).hdt = function () {
    return this.args;
  };
  protoOf(PolicyRequest).dc = function () {
    return this.policy;
  };
  protoOf(PolicyRequest).ec = function () {
    return this.args;
  };
  protoOf(PolicyRequest).geu = function (policy, args) {
    return new PolicyRequest(policy, args);
  };
  protoOf(PolicyRequest).copy = function (policy, args, $super) {
    policy = policy === VOID ? this.policy : policy;
    args = args === VOID ? this.args : args;
    return $super === VOID ? this.geu(policy, args) : $super.geu.call(this, policy, args);
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
  protoOf(Companion_15).m4u = function () {
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
  protoOf(PolicyResult).r3m = function () {
    return this.request;
  };
  protoOf(PolicyResult).heu = function () {
    return this.result;
  };
  protoOf(PolicyResult).isSuccess = function () {
    return _Result___get_isSuccess__impl__sndoy8(this.result);
  };
  protoOf(PolicyResult).dc = function () {
    return this.request;
  };
  protoOf(PolicyResult).ieu = function () {
    return this.result;
  };
  protoOf(PolicyResult).jeu = function (request, result) {
    return new PolicyResult(request, result);
  };
  protoOf(PolicyResult).copy = function (request, result, $super) {
    request = request === VOID ? this.request : request;
    result = result === VOID ? this.result : result;
    return $super === VOID ? this.jeu(request, result) : $super.jeu.call(this, request, new Result(result));
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
        var this_2 = this_1.w24();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var this_3 = serializer(this_2, createKType(getKClass(SerializableRuntimeException), arrayOf([]), false));
        var tmp$ret$2 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
        tmp_7 = this_1.f4s(tmp$ret$2, e);
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
  protoOf(Companion_16).m4u = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_20;
  function Companion_getInstance_21() {
    return Companion_instance_20;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.models.PolicyResultSurrogate', this, 6);
    tmp0_serialDesc.x2b('policy', false);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('args', true);
    tmp0_serialDesc.x2b('is_success', false);
    tmp0_serialDesc.x2b('result', true);
    tmp0_serialDesc.x2b('error', true);
    this.keu_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).leu = function (encoder, value) {
    var tmp0_desc = this.keu_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.meu_1);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.neu_1 == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value.neu_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.oeu_1 == null)) {
      tmp1_output.a26(tmp0_desc, 2, JsonElementSerializer_getInstance(), value.oeu_1);
    }
    tmp1_output.o25(tmp0_desc, 3, value.peu_1);
    if (tmp1_output.e26(tmp0_desc, 4) ? true : !(value.qeu_1 == null)) {
      tmp1_output.a26(tmp0_desc, 4, JsonElementSerializer_getInstance(), value.qeu_1);
    }
    if (tmp1_output.e26(tmp0_desc, 5) ? true : !(value.reu_1 == null)) {
      tmp1_output.a26(tmp0_desc, 5, JsonElementSerializer_getInstance(), value.reu_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_10).v20 = function (encoder, value) {
    return this.leu(encoder, value instanceof PolicyResultSurrogate ? value : THROW_CCE());
  };
  protoOf($serializer_10).w20 = function (decoder) {
    var tmp0_desc = this.keu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = false;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.h24(tmp0_desc);
    if (tmp10_input.x24()) {
      tmp4_local0 = tmp10_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.v24(tmp0_desc, 2, JsonElementSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.j24(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.v24(tmp0_desc, 4, JsonElementSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.v24(tmp0_desc, 5, JsonElementSerializer_getInstance(), tmp9_local5);
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
            tmp6_local2 = tmp10_input.v24(tmp0_desc, 2, JsonElementSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.j24(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.v24(tmp0_desc, 4, JsonElementSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.v24(tmp0_desc, 5, JsonElementSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.i24(tmp0_desc);
    return PolicyResultSurrogate_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_10).u20 = function () {
    return this.keu_1;
  };
  protoOf($serializer_10).m2c = function () {
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
      throwMissingFieldException(seen0, 9, $serializer_getInstance_10().keu_1);
    }
    $this.meu_1 = policy;
    if (0 === (seen0 & 2))
      $this.neu_1 = null;
    else
      $this.neu_1 = description;
    if (0 === (seen0 & 4))
      $this.oeu_1 = null;
    else
      $this.oeu_1 = args;
    $this.peu_1 = isSuccess;
    if (0 === (seen0 & 16))
      $this.qeu_1 = null;
    else
      $this.qeu_1 = result;
    if (0 === (seen0 & 32))
      $this.reu_1 = null;
    else
      $this.reu_1 = error;
    // Inline function 'kotlin.check' call
    if (!(!($this.qeu_1 == null) || !($this.reu_1 == null))) {
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
    this.meu_1 = policy;
    this.neu_1 = description;
    this.oeu_1 = args;
    this.peu_1 = isSuccess;
    this.qeu_1 = result;
    this.reu_1 = error;
    // Inline function 'kotlin.check' call
    if (!(!(this.qeu_1 == null) || !(this.reu_1 == null))) {
      var message = 'Either result or error has to exist in PolicyResult';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  protoOf(PolicyResultSurrogate).toString = function () {
    return 'PolicyResultSurrogate(policy=' + this.meu_1 + ', description=' + this.neu_1 + ', args=' + toString_0(this.oeu_1) + ', isSuccess=' + this.peu_1 + ', result=' + toString_0(this.qeu_1) + ', error=' + toString_0(this.reu_1) + ')';
  };
  protoOf(PolicyResultSurrogate).hashCode = function () {
    var result = getStringHashCode(this.meu_1);
    result = imul(result, 31) + (this.neu_1 == null ? 0 : getStringHashCode(this.neu_1)) | 0;
    result = imul(result, 31) + (this.oeu_1 == null ? 0 : hashCode(this.oeu_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.peu_1) | 0;
    result = imul(result, 31) + (this.qeu_1 == null ? 0 : hashCode(this.qeu_1)) | 0;
    result = imul(result, 31) + (this.reu_1 == null ? 0 : hashCode(this.reu_1)) | 0;
    return result;
  };
  protoOf(PolicyResultSurrogate).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PolicyResultSurrogate))
      return false;
    var tmp0_other_with_cast = other instanceof PolicyResultSurrogate ? other : THROW_CCE();
    if (!(this.meu_1 === tmp0_other_with_cast.meu_1))
      return false;
    if (!(this.neu_1 == tmp0_other_with_cast.neu_1))
      return false;
    if (!equals(this.oeu_1, tmp0_other_with_cast.oeu_1))
      return false;
    if (!(this.peu_1 === tmp0_other_with_cast.peu_1))
      return false;
    if (!equals(this.qeu_1, tmp0_other_with_cast.qeu_1))
      return false;
    if (!equals(this.reu_1, tmp0_other_with_cast.reu_1))
      return false;
    return true;
  };
  function PolicyResultSerializer() {
    PolicyResultSerializer_instance = this;
    this.seu_1 = Companion_instance_20.m4u().u20();
  }
  protoOf(PolicyResultSerializer).u20 = function () {
    return this.seu_1;
  };
  protoOf(PolicyResultSerializer).teu = function (encoder, value) {
    var surrogate = PolicyResultSurrogate_init_$Create$(value);
    encoder.z25(Companion_instance_20.m4u(), surrogate);
  };
  protoOf(PolicyResultSerializer).v20 = function (encoder, value) {
    return this.teu(encoder, value instanceof PolicyResult ? value : THROW_CCE());
  };
  protoOf(PolicyResultSerializer).w20 = function (decoder) {
    throw UnsupportedOperationException_init_$Create$('only serialization is supported for PolicyResult');
  };
  var PolicyResultSerializer_instance;
  function PolicyResultSerializer_getInstance() {
    if (PolicyResultSerializer_instance == null)
      new PolicyResultSerializer();
    return PolicyResultSerializer_instance;
  }
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
    tmp.ueu_1 = [null, lazy(tmp_0, PresentationResultEntry$Companion$$childSerializers$_anonymous__5uysnj)];
  }
  protoOf(Companion_17).m4u = function () {
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
    tmp0_serialDesc.x2b('credential', false);
    tmp0_serialDesc.x2b('policyResults', true);
    this.veu_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).weu = function (encoder, value) {
    var tmp0_desc = this.veu_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().ueu_1;
    tmp1_output.w25(tmp0_desc, 0, value.credential);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !value.policyResults.equals(ArrayList_init_$Create$())) {
      tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.policyResults);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_11).v20 = function (encoder, value) {
    return this.weu(encoder, value instanceof PresentationResultEntry ? value : THROW_CCE());
  };
  protoOf($serializer_11).w20 = function (decoder) {
    var tmp0_desc = this.veu_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_22().ueu_1;
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.r24(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.r24(tmp0_desc, 0);
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
    return PresentationResultEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).u20 = function () {
    return this.veu_1;
  };
  protoOf($serializer_11).m2c = function () {
    var tmp0_cached = Companion_getInstance_22().ueu_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].b1()];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function PresentationResultEntry_init_$Init$(seen0, credential, policyResults, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_11().veu_1);
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
  protoOf(PresentationResultEntry).xeu = function () {
    return this.credential;
  };
  protoOf(PresentationResultEntry).yeu = function () {
    return this.policyResults;
  };
  protoOf(PresentationResultEntry).dc = function () {
    return this.credential;
  };
  protoOf(PresentationResultEntry).ec = function () {
    return this.policyResults;
  };
  protoOf(PresentationResultEntry).zeu = function (credential, policyResults) {
    return new PresentationResultEntry(credential, policyResults);
  };
  protoOf(PresentationResultEntry).copy = function (credential, policyResults, $super) {
    credential = credential === VOID ? this.credential : credential;
    policyResults = policyResults === VOID ? this.policyResults : policyResults;
    return $super === VOID ? this.zeu(credential, policyResults) : $super.zeu.call(this, credential, policyResults);
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
    tmp.aev_1 = [lazy(tmp_0, PresentationVerificationResponse$Companion$$childSerializers$_anonymous__ebm1l8), null, null];
  }
  protoOf(Companion_18).m4u = function () {
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
    tmp0_serialDesc.x2b('results', false);
    tmp0_serialDesc.x2b('time', false);
    tmp0_serialDesc.x2b('policiesRun', false);
    this.bev_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).cev = function (encoder, value) {
    var tmp0_desc = this.bev_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_23().aev_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.results);
    tmp1_output.y25(tmp0_desc, 1, DurationSerializer_getInstance(), new Duration(value.time));
    tmp1_output.r25(tmp0_desc, 2, value.policiesRun);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_12).v20 = function (encoder, value) {
    return this.cev(encoder, value instanceof PresentationVerificationResponse ? value : THROW_CCE());
  };
  protoOf($serializer_12).w20 = function (decoder) {
    var tmp0_desc = this.bev_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_23().aev_1;
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0, tmp8_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      var tmp = DurationSerializer_getInstance();
      var tmp_0 = tmp5_local1;
      var tmp_1 = tmp7_input.t24(tmp0_desc, 1, tmp, tmp_0 == null ? null : new Duration(tmp_0));
      tmp5_local1 = tmp_1 == null ? null : tmp_1.gg_1;
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.m24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0, tmp8_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            var tmp_2 = DurationSerializer_getInstance();
            var tmp_3 = tmp5_local1;
            var tmp_4 = tmp7_input.t24(tmp0_desc, 1, tmp_2, tmp_3 == null ? null : new Duration(tmp_3));
            tmp5_local1 = tmp_4 == null ? null : tmp_4.gg_1;
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.m24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i24(tmp0_desc);
    return PresentationVerificationResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_12).u20 = function () {
    return this.bev_1;
  };
  protoOf($serializer_12).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_23().aev_1[0].b1(), DurationSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function PresentationVerificationResponse_init_$Init$(seen0, results, time, policiesRun, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_12().bev_1);
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
  protoOf(PresentationVerificationResponse).ddt = function () {
    return this.results;
  };
  protoOf(PresentationVerificationResponse).dev = function () {
    return this.time;
  };
  protoOf(PresentationVerificationResponse).eev = function () {
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
      var _iterator__ex2g4s = tmp0.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
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
          var _iterator__ex2g4s_0 = tmp0_0.p();
          while (_iterator__ex2g4s_0.q()) {
            var element_0 = _iterator__ex2g4s_0.r();
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
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
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
      var _iterator__ex2g4s_0 = destination.p();
      while (_iterator__ex2g4s_0.q()) {
        var element_0 = _iterator__ex2g4s_0.r();
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
    var _iterator__ex2g4s = tmp0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
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
      var _iterator__ex2g4s_0 = destination.p();
      while (_iterator__ex2g4s_0.q()) {
        var element_0 = _iterator__ex2g4s_0.r();
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
  protoOf(PresentationVerificationResponse).fev = function () {
    return this.time;
  };
  protoOf(PresentationVerificationResponse).yp = function () {
    return this.policiesRun;
  };
  protoOf(PresentationVerificationResponse).gev = function (results, time, policiesRun) {
    return new PresentationVerificationResponse(results, time, policiesRun);
  };
  protoOf(PresentationVerificationResponse).copy = function (results, time, policiesRun, $super) {
    results = results === VOID ? this.results : results;
    time = time === VOID ? this.time : time;
    policiesRun = policiesRun === VOID ? this.policiesRun : policiesRun;
    return $super === VOID ? this.gev(results, time, policiesRun) : $super.gev.call(this, results, new Duration(time), policiesRun);
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
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function Companion_19() {
    Companion_instance_23 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.hev_1 = [null, null, lazy(tmp_0, AllowedIssuerPolicy$Companion$$childSerializers$_anonymous__7zdcgn)];
  }
  protoOf(Companion_19).m4u = function () {
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
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.iev_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).jev = function (encoder, value) {
    var tmp0_desc = this.iev_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().hev_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.kev_1 === 'allowed-issuer')) {
      tmp1_output.w25(tmp0_desc, 0, value.kev_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.lev_1 === 'Checks that the issuer of the credential is present in the supplied list.')) {
      tmp1_output.w25(tmp0_desc, 1, value.lev_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.mev_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.mev_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_13).v20 = function (encoder, value) {
    return this.jev(encoder, value instanceof AllowedIssuerPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_13).w20 = function (decoder) {
    var tmp0_desc = this.iev_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_24().hev_1;
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
    return AllowedIssuerPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_13).u20 = function () {
    return this.iev_1;
  };
  protoOf($serializer_13).m2c = function () {
    var tmp0_cached = Companion_getInstance_24().hev_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function AllowedIssuerPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_13().iev_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.kev_1 = 'allowed-issuer';
    else
      $this.kev_1 = name;
    if (0 === (seen0 & 2))
      $this.lev_1 = 'Checks that the issuer of the credential is present in the supplied list.';
    else
      $this.lev_1 = description;
    if (0 === (seen0 & 4))
      $this.mev_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
    else
      $this.mev_1 = supportedVCFormats;
    return $this;
  }
  function AllowedIssuerPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return AllowedIssuerPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(AllowedIssuerPolicy)));
  }
  function AllowedIssuerPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.vev_1 = this$0;
    this.wev_1 = $data;
    this.xev_1 = $args;
    this.yev_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AllowedIssuerPolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AllowedIssuerPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.vev_1.gea(this.wev_1, this.xev_1, this.yev_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new AllowedIssuerPolicy$verifyAsync$slambda(this.vev_1, this.wev_1, this.xev_1, this.yev_1, completion);
  };
  function AllowedIssuerPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new AllowedIssuerPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AllowedIssuerPolicy() {
    Companion_getInstance_24();
    CredentialWrapperValidatorPolicy.call(this);
    this.kev_1 = 'allowed-issuer';
    this.lev_1 = 'Checks that the issuer of the credential is present in the supplied list.';
    this.mev_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
  }
  protoOf(AllowedIssuerPolicy).u2 = function () {
    return this.kev_1;
  };
  protoOf(AllowedIssuerPolicy).tat = function () {
    return this.lev_1;
  };
  protoOf(AllowedIssuerPolicy).iea = function () {
    return this.mev_1;
  };
  protoOf(AllowedIssuerPolicy).gea = function (data, args, context, $completion) {
    var tmp;
    if (args instanceof JsonPrimitive_1) {
      tmp = listOf(args.q4u());
    } else {
      if (args instanceof JsonArray) {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(args, 10));
        var _iterator__ex2g4s = args.p();
        while (_iterator__ex2g4s.q()) {
          var item = _iterator__ex2g4s.r();
          var tmp$ret$0 = get_jsonPrimitive(item).q4u();
          destination.n(tmp$ret$0);
        }
        tmp = destination;
      } else {
        throw IllegalArgumentException_init_$Create$('Invalid argument, please provide a single allowed issuer, or an list of allowed issuers.');
      }
    }
    var allowedIssuers = tmp;
    var tmp1_safe_receiver = data.af('iss');
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonPrimitive(tmp1_safe_receiver);
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.q4u();
    var tmp_0;
    if (tmp3_elvis_lhs == null) {
      var tmp4_safe_receiver = data.af('issuer');
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : get_jsonPrimitive(tmp4_safe_receiver);
      tmp_0 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.q4u();
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
    if (allowedIssuers.w(issuer)) {
      // Inline function 'kotlin.Companion.success' call
      tmp_2 = _Result___init__impl__xyqfz8(issuer);
    } else {
      // Inline function 'kotlin.Companion.failure' call
      var exception = new NotAllowedIssuerException(issuer, allowedIssuers);
      tmp_2 = _Result___init__impl__xyqfz8(createFailure(exception));
    }
    return new Result(tmp_2);
  };
  protoOf(AllowedIssuerPolicy).hea = function (data, args, context) {
    var tmp = AllowedIssuerPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function get_logger() {
    _init_properties_DynamicPolicy_kt__m8kkm7();
    return logger;
  }
  var logger;
  function DynamicPolicy$Companion$$childSerializers$_anonymous__2el2jd() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function DynamicPolicy$Companion$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.p3l(tmp, DynamicPolicy$Companion$http$lambda$lambda);
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
    tmp.zev_1 = [null, null, lazy(tmp_0, DynamicPolicy$Companion$$childSerializers$_anonymous__2el2jd)];
    this.aew_1 = 1000000;
    this.bew_1 = 64;
    var tmp_1 = this;
    tmp_1.cew_1 = HttpClient(DynamicPolicy$Companion$http$lambda);
  }
  protoOf(Companion_20).m4u = function () {
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
    if (!Regex_init_$Create$('^[a-zA-Z]+$').re(policyName)) {
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
    var tmp0_safe_receiver = args.af('rules');
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$("The 'rules' field is required.");
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var rules = tmp;
    var tmp2_safe_receiver = args.af('policy_name');
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
    var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
    var tmp_0;
    if (tmp4_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$("The 'policy_name' field is required.");
    } else {
      tmp_0 = tmp4_elvis_lhs;
    }
    var policyName = tmp_0;
    var tmp5_safe_receiver = args.af('argument');
    var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : get_jsonObject(tmp5_safe_receiver);
    var tmp_1;
    if (tmp6_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$("The 'argument' field is required.");
    } else {
      tmp_1 = tmp6_elvis_lhs;
    }
    var argument = tmp_1;
    var tmp7_safe_receiver = args.af('opa_server');
    var tmp8_safe_receiver = tmp7_safe_receiver == null ? null : get_jsonPrimitive(tmp7_safe_receiver);
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.q4u();
    var tmp_2 = tmp9_elvis_lhs == null ? 'http://localhost:8181' : tmp9_elvis_lhs;
    var tmp10_safe_receiver = args.af('policy_query');
    var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : get_jsonPrimitive(tmp10_safe_receiver);
    var tmp12_elvis_lhs = tmp11_safe_receiver == null ? null : tmp11_safe_receiver.q4u();
    var tmp_3 = tmp12_elvis_lhs == null ? 'vc/verification' : tmp12_elvis_lhs;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(rules.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = rules.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp_4 = element.a1();
      var tmp$ret$3 = get_jsonPrimitive(element.b1()).q4u();
      destination.p2(tmp_4, tmp$ret$3);
    }
    var tmp_5 = destination;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$(mapCapacity(argument.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = argument.z().p();
    while (_iterator__ex2g4s_0.q()) {
      var element_0 = _iterator__ex2g4s_0.r();
      var tmp_6 = element_0.a1();
      var tmp$ret$8 = get_jsonPrimitive(element_0.b1()).q4u();
      destination_0.p2(tmp_6, tmp$ret$8);
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
    var destination = LinkedHashMap_init_$Create$(mapCapacity(_this__u8e3s4.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = _this__u8e3s4.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.b1();
      var tmp_0;
      if (value instanceof JsonPrimitive_1) {
        tmp_0 = value.q4u();
      } else {
        if (value instanceof JsonObject) {
          tmp_0 = toMap($this, value);
        } else {
          tmp_0 = value;
        }
      }
      var tmp$ret$2 = tmp_0;
      destination.p2(tmp, tmp$ret$2);
    }
    return destination;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.DynamicPolicy', this, 3);
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.mf0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).nf0 = function (encoder, value) {
    var tmp0_desc = this.mf0_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().zev_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.of0_1 === 'dynamic')) {
      tmp1_output.w25(tmp0_desc, 0, value.of0_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.pf0_1 === 'A dynamic policy that can be used to implement custom verification logic.')) {
      tmp1_output.w25(tmp0_desc, 1, value.pf0_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.qf0_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.qf0_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_14).v20 = function (encoder, value) {
    return this.nf0(encoder, value instanceof DynamicPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_14).w20 = function (decoder) {
    var tmp0_desc = this.mf0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_25().zev_1;
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
    return DynamicPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_14).u20 = function () {
    return this.mf0_1;
  };
  protoOf($serializer_14).m2c = function () {
    var tmp0_cached = Companion_getInstance_25().zev_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function DynamicPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_14().mf0_1);
    }
    CredentialDataValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.of0_1 = 'dynamic';
    else
      $this.of0_1 = name;
    if (0 === (seen0 & 2))
      $this.pf0_1 = 'A dynamic policy that can be used to implement custom verification logic.';
    else
      $this.pf0_1 = description;
    if (0 === (seen0 & 4))
      $this.qf0_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
    else
      $this.qf0_1 = supportedVCFormats;
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
      return 'Failed to upload policy: ' + $response.p37().toString();
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
      return 'Verifying policy: ' + $config.tf0_1;
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
    this.ef1_1 = this$0;
    this.ff1_1 = $data;
    this.gf1_1 = $args;
    this.hf1_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DynamicPolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DynamicPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.ef1_1.gea(this.ff1_1, this.gf1_1, this.hf1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new DynamicPolicy$verifyAsync$slambda(this.ef1_1, this.ff1_1, this.gf1_1, this.hf1_1, completion);
  };
  function DynamicPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new DynamicPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getRegoCodeCOROUTINE$6(_this__u8e3s4, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lew_1 = _this__u8e3s4;
    this.mew_1 = config;
  }
  protoOf($getRegoCodeCOROUTINE$6).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.new_1 = this.mew_1.uf0_1.m2('rego');
            this.oew_1 = this.mew_1.uf0_1.m2('policy_url');
            if (!(this.oew_1 == null)) {
              var tmp_0 = get_logger();
              tmp_0.o6g(DynamicPolicy$getRegoCode$lambda(this.oew_1));
              this.o9_1 = 3;
              var tmp_1 = this;
              tmp_1.rew_1 = Companion_getInstance_25().cew_1;
              var tmp_2 = this;
              tmp_2.sew_1 = this.oew_1;
              this.tew_1 = this.rew_1;
              this.uew_1 = this.sew_1;
              var tmp_3 = this;
              tmp_3.vew_1 = this.tew_1;
              this.wew_1 = this.vew_1;
              var tmp_4 = this;
              tmp_4.xew_1 = this.wew_1;
              var tmp_5 = this;
              var this_0 = new HttpRequestBuilder();
              url(this_0, this.uew_1);
              tmp_5.yew_1 = this_0;
              this.zew_1 = this.xew_1;
              this.aex_1 = this.yew_1;
              this.aex_1.j3k_1 = Companion_getInstance_2().c32_1;
              var tmp_6 = this;
              tmp_6.bex_1 = this.zew_1;
              var tmp_7 = this;
              tmp_7.cex_1 = this.aex_1;
              this.dex_1 = this.bex_1;
              this.eex_1 = this.cex_1;
              this.n9_1 = 1;
              suspendResult = (new HttpStatement(this.eex_1, this.dex_1)).r4l(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!(this.new_1 == null)) {
                this.pew_1 = cleanCode(this.lew_1, this.new_1);
                this.n9_1 = 5;
                continue $sm;
              } else {
                var tmp_8 = this;
                throw IllegalArgumentException_init_$Create$("Either 'rego' or 'policy_url' must be provided in rules");
              }
            }

          case 1:
            this.fex_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.fex_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.qew_1 = cleanCode(this.lew_1, ARGUMENT);
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
              tmp_11.r6g(e, DynamicPolicy$getRegoCode$lambda_0(this.oew_1));
              throw new DynamicPolicyException('Failed to fetch rego code: ' + e.message);
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 6;
            this.pew_1 = this.qew_1;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            return this.pew_1;
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
    this.oex_1 = _this__u8e3s4;
    this.pex_1 = opaServer;
    this.qex_1 = policyName;
    this.rex_1 = regoCode;
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
            tmp_0.o6g(DynamicPolicy$uploadPolicy$lambda(this.qex_1));
            var tmp_1 = this;
            tmp_1.tex_1 = Companion_getInstance_25().cew_1;
            var tmp_2 = this;
            tmp_2.uex_1 = this.pex_1 + '/v1/policies/' + this.qex_1;
            this.vex_1 = this.tex_1;
            this.wex_1 = this.uex_1;
            var tmp_3 = this;
            tmp_3.xex_1 = this.vex_1;
            this.yex_1 = this.xex_1;
            var tmp_4 = this;
            tmp_4.zex_1 = this.yex_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.wex_1);
            contentType(this_0, Text_getInstance().e2x_1);
            var body = this.rex_1;
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
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
              this_0.e3q(new TypeInfo(tmp_6, tmp_7));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.l3k_1 = body;
                this_0.e3q(null);
              } else {
                this_0.l3k_1 = body;
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
                this_0.e3q(new TypeInfo(tmp_9, tmp_10));
              }
            }

            tmp_5.aey_1 = this_0;
            this.bey_1 = this.zex_1;
            this.cey_1 = this.aey_1;
            this.cey_1.j3k_1 = Companion_getInstance_2().e32_1;
            var tmp_12 = this;
            tmp_12.dey_1 = this.bey_1;
            var tmp_13 = this;
            tmp_13.eey_1 = this.cey_1;
            this.fey_1 = this.dey_1;
            this.gey_1 = this.eey_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.gey_1, this.fey_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            var tmp_14 = this;
            var tmp_15;
            if (!isSuccess(response.p37())) {
              var tmp_16 = get_logger();
              tmp_16.q6g(DynamicPolicy$uploadPolicy$lambda_0(response));
              var exception = new DynamicPolicyException('Failed to upload policy: ' + response.p37().toString());
              tmp_15 = _Result___init__impl__xyqfz8(createFailure(exception));
            } else {
              tmp_15 = _Result___init__impl__xyqfz8(Unit_instance);
            }

            tmp_14.sex_1 = tmp_15;
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
              tmp_19.r6g(e, DynamicPolicy$uploadPolicy$lambda_1);
              var exception_0 = new DynamicPolicyException('Failed to upload policy: ' + e.message);
              tmp_18.sex_1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.sex_1);
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
    this.qey_1 = _this__u8e3s4;
    this.rey_1 = opaServer;
    this.sey_1 = policyName;
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
            tmp_0.o6g(DynamicPolicy$deletePolicy$lambda(this.sey_1));
            var tmp_1 = this;
            tmp_1.uey_1 = Companion_getInstance_25().cew_1;
            var tmp_2 = this;
            tmp_2.vey_1 = this.rey_1 + '/v1/policies/' + this.sey_1;
            this.wey_1 = this.uey_1;
            this.xey_1 = this.vey_1;
            var tmp_3 = this;
            tmp_3.yey_1 = this.wey_1;
            this.zey_1 = this.yey_1;
            var tmp_4 = this;
            tmp_4.aez_1 = this.zey_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.xey_1);
            tmp_5.bez_1 = this_0;
            this.cez_1 = this.aez_1;
            this.dez_1 = this.bez_1;
            this.dez_1.j3k_1 = Companion_getInstance_2().g32_1;
            var tmp_6 = this;
            tmp_6.eez_1 = this.cez_1;
            var tmp_7 = this;
            tmp_7.fez_1 = this.dez_1;
            this.gez_1 = this.eez_1;
            this.hez_1 = this.fez_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.hez_1, this.gez_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tey_1 = suspendResult;
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
              tmp_10.r6g(e, DynamicPolicy$deletePolicy$lambda_0);
              tmp_9.tey_1 = Unit_instance;
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
    this.qez_1 = _this__u8e3s4;
    this.rez_1 = config;
    this.sez_1 = data;
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
            tmp_0.o6g(DynamicPolicy$verifyPolicy$lambda(this.rez_1));
            this.uez_1 = JsonUtils_getInstance().toJsonObject(mapOf_0([to('parameter', this.rez_1.vf0_1), to('credentialData', toMap(this.qez_1, this.sez_1))]));
            var tmp_1 = this;
            tmp_1.vez_1 = Companion_getInstance_25().cew_1;
            var tmp_2 = this;
            tmp_2.wez_1 = this.rez_1.rf0_1 + '/v1/data/' + this.rez_1.sf0_1 + '/' + this.rez_1.tf0_1;
            this.xez_1 = this.vez_1;
            this.yez_1 = this.wez_1;
            var tmp_3 = this;
            tmp_3.zez_1 = this.xez_1;
            this.af0_1 = this.zez_1;
            var tmp_4 = this;
            tmp_4.bf0_1 = this.af0_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.yez_1);
            contentType(this_0, Application_getInstance().y2v_1);
            var body = mapOf(to('input', this.uez_1));
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
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
              this_0.e3q(new TypeInfo(tmp_6, tmp_7));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.l3k_1 = body;
                this_0.e3q(null);
              } else {
                this_0.l3k_1 = body;
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
                this_0.e3q(new TypeInfo(tmp_9, tmp_10));
              }
            }

            tmp_5.cf0_1 = this_0;
            this.df0_1 = this.bf0_1;
            this.ef0_1 = this.cf0_1;
            this.ef0_1.j3k_1 = Companion_getInstance_2().d32_1;
            var tmp_12 = this;
            tmp_12.ff0_1 = this.df0_1;
            var tmp_13 = this;
            tmp_13.gf0_1 = this.ef0_1;
            this.hf0_1 = this.ff0_1;
            this.if0_1 = this.gf0_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.if0_1, this.hf0_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.jf0_1 = suspendResult;
            var tmp_14 = this;
            tmp_14.kf0_1 = this.jf0_1;
            this.lf0_1 = this.kf0_1;
            this.n9_1 = 2;
            var tmp_15 = this.lf0_1.q3n();
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

            suspendResult = tmp_15.t3m(new TypeInfo(tmp_16, tmp_17), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp0_safe_receiver = ARGUMENT.af('result');
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp_19;
            if (tmp1_elvis_lhs == null) {
              throw new DynamicPolicyException('Invalid response from OPA server');
            } else {
              tmp_19 = tmp1_elvis_lhs;
            }

            var result = tmp_19;
            var tmp_20 = this;
            tmp_20.tez_1 = _Result___init__impl__xyqfz8(result);
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
              tmp_23.r6g(e, DynamicPolicy$verifyPolicy$lambda_0);
              var exception = new DynamicPolicyException('Policy verification failed: ' + e.message);
              tmp_22.tez_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 5;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            throw this.q9_1;
          case 5:
            this.o9_1 = 4;
            return new Result(this.tez_1);
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
    this.qf1_1 = _this__u8e3s4;
    this.rf1_1 = data;
    this.sf1_1 = args;
    this.tf1_1 = context;
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
            tmp_0.o6g(DynamicPolicy$verify$lambda);
            this.vf1_1 = parseConfig(this.qf1_1, this.sf1_1);
            validatePolicyName(this.qf1_1, this.vf1_1.tf0_1);
            this.n9_1 = 2;
            suspendResult = getRegoCode(this.qf1_1, this.vf1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.wf1_1 = suspendResult;
            validateRegoCode(this.qf1_1, this.wf1_1);
            this.n9_1 = 3;
            suspendResult = uploadPolicy(this.qf1_1, this.vf1_1.rf0_1, this.vf1_1.tf0_1, this.wf1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.xf1_1 = suspendResult.up_1;
            suspendResult = new Result(this.xf1_1);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.yf1_1 = suspendResult.up_1;
            var this_0 = this.yf1_1;
            throwOnFailure(this_0);
            var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
            if (!(tmp_1 == null ? true : !(tmp_1 == null)))
              THROW_CCE();
            this.n9_1 = 5;
            suspendResult = verifyPolicy(this.qf1_1, this.vf1_1, this.rf1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 6;
            continue $sm;
          case 5:
            this.zf1_1 = suspendResult.up_1;
            suspendResult = new Result(this.zf1_1);
            this.n9_1 = 6;
            continue $sm;
          case 6:
            this.af2_1 = suspendResult.up_1;
            var tmp_2 = this;
            var this_1 = this.af2_1;
            var tmp_3;
            if (_Result___get_isSuccess__impl__sndoy8(this_1)) {
              var tmp_4 = _Result___get_value__impl__bjfvqg(this_1);
              var result = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
              var tmp0 = result.o2();
              var tmp$ret$0;
              l$ret$1: do {
                var _iterator__ex2g4s = tmp0.p();
                while (_iterator__ex2g4s.q()) {
                  var element = _iterator__ex2g4s.r();
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
                throw new DynamicPolicyException('The policy condition was not met for policy ' + this.vf1_1.tf0_1);
              }
              var value = tmp_6;
              tmp_3 = _Result___init__impl__xyqfz8(value);
            } else {
              tmp_3 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this_1));
            }

            tmp_2.uf1_1 = tmp_3;
            this.o9_1 = 15;
            this.n9_1 = 12;
            continue $sm;
          case 7:
            this.o9_1 = 8;
            var tmp_7 = this.q9_1;
            if (tmp_7 instanceof Exception) {
              this.bf2_1 = this.q9_1;
              var tmp_8 = this;
              var tmp_9 = get_logger();
              tmp_9.r6g(this.bf2_1, DynamicPolicy$verify$lambda_0);
              var tmp_10;
              if (this.bf2_1 instanceof DynamicPolicyException) {
                tmp_10 = this.bf2_1;
              } else {
                tmp_10 = new DynamicPolicyException('Policy verification failed: ' + this.bf2_1.message);
              }
              var exception = tmp_10;
              tmp_8.uf1_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.o9_1 = 15;
              this.n9_1 = 12;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 8:
            this.o9_1 = 15;
            this.cf2_1 = this.q9_1;
            var tmp_11 = this;
            tmp_11.df2_1 = this.qf1_1;
            this.ef2_1 = this.df2_1;
            this.o9_1 = 10;
            var tmp_12 = this;
            tmp_12.gf2_1 = Companion_instance;
            var tmp_13 = this;
            tmp_13.hf2_1 = this.ef2_1;
            this.if2_1 = this.hf2_1;
            this.jf2_1 = parseConfig(this.if2_1, this.sf1_1);
            this.n9_1 = 9;
            suspendResult = deletePolicy(this.if2_1, this.jf2_1.rf0_1, this.jf2_1.tf0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.kf2_1 = Unit_instance;
            var tmp_14 = this;
            this.gf2_1;
            var value_0 = this.kf2_1;
            tmp_14.ff2_1 = _Result___init__impl__xyqfz8(value_0);
            this.o9_1 = 15;
            this.n9_1 = 11;
            continue $sm;
          case 10:
            this.o9_1 = 15;
            var tmp_15 = this.q9_1;
            if (tmp_15 instanceof Error) {
              this.lf2_1 = this.q9_1;
              var tmp_16 = this;
              var exception_0 = this.lf2_1;
              tmp_16.ff2_1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
              this.n9_1 = 11;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 11:
            this.o9_1 = 15;
            throw this.cf2_1;
          case 12:
            this.mf2_1 = this.uf1_1;
            this.o9_1 = 15;
            var tmp_17 = this;
            tmp_17.nf2_1 = this.qf1_1;
            this.of2_1 = this.nf2_1;
            this.o9_1 = 14;
            var tmp_18 = this;
            tmp_18.qf2_1 = Companion_instance;
            var tmp_19 = this;
            tmp_19.rf2_1 = this.of2_1;
            this.sf2_1 = this.rf2_1;
            this.tf2_1 = parseConfig(this.sf2_1, this.sf1_1);
            this.n9_1 = 13;
            suspendResult = deletePolicy(this.sf2_1, this.tf2_1.rf0_1, this.tf2_1.tf0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 13:
            var tmp_20 = this;
            this.qf2_1;
            tmp_20.pf2_1 = _Result___init__impl__xyqfz8(Unit_instance);
            this.o9_1 = 15;
            this.n9_1 = 16;
            continue $sm;
          case 14:
            this.o9_1 = 15;
            var tmp_21 = this.q9_1;
            if (tmp_21 instanceof Error) {
              var e = this.q9_1;
              var tmp_22 = this;
              tmp_22.pf2_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 16;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 15:
            throw this.q9_1;
          case 16:
            this.o9_1 = 15;
            return new Result(this.mf2_1);
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
    this.of0_1 = 'dynamic';
    this.pf0_1 = 'A dynamic policy that can be used to implement custom verification logic.';
    this.qf0_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
  }
  protoOf(DynamicPolicy).u2 = function () {
    return this.of0_1;
  };
  protoOf(DynamicPolicy).tat = function () {
    return this.pf0_1;
  };
  protoOf(DynamicPolicy).iea = function () {
    return this.qf0_1;
  };
  protoOf(DynamicPolicy).gea = function (data, args, context, $completion) {
    var tmp = new $verifyCOROUTINE$10(this, data, args, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DynamicPolicy).hea = function (data, args, context) {
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
    tmp.uf2_1 = [null, null, null, tmp_1, lazy(tmp_2, DynamicPolicyConfig$Companion$$childSerializers$_anonymous__f939tj_0)];
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
    tmp0_serialDesc.x2b('opaServer', true);
    tmp0_serialDesc.x2b('policyQuery', true);
    tmp0_serialDesc.x2b('policyName', false);
    tmp0_serialDesc.x2b('rules', false);
    tmp0_serialDesc.x2b('argument', false);
    this.vf2_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).wf2 = function (encoder, value) {
    var tmp0_desc = this.vf2_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().uf2_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.rf0_1 === 'http://localhost:8181')) {
      tmp1_output.w25(tmp0_desc, 0, value.rf0_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.sf0_1 === 'vc/verification')) {
      tmp1_output.w25(tmp0_desc, 1, value.sf0_1);
    }
    tmp1_output.w25(tmp0_desc, 2, value.tf0_1);
    tmp1_output.y25(tmp0_desc, 3, tmp2_cached[3].b1(), value.uf0_1);
    tmp1_output.y25(tmp0_desc, 4, tmp2_cached[4].b1(), value.vf0_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_15).v20 = function (encoder, value) {
    return this.wf2(encoder, value instanceof DynamicPolicyConfig ? value : THROW_CCE());
  };
  protoOf($serializer_15).w20 = function (decoder) {
    var tmp0_desc = this.vf2_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.h24(tmp0_desc);
    var tmp10_cached = Companion_getInstance_26().uf2_1;
    if (tmp9_input.x24()) {
      tmp4_local0 = tmp9_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.t24(tmp0_desc, 3, tmp10_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.t24(tmp0_desc, 4, tmp10_cached[4].b1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.t24(tmp0_desc, 3, tmp10_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.t24(tmp0_desc, 4, tmp10_cached[4].b1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.i24(tmp0_desc);
    return DynamicPolicyConfig_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_15).u20 = function () {
    return this.vf2_1;
  };
  protoOf($serializer_15).m2c = function () {
    var tmp0_cached = Companion_getInstance_26().uf2_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[3].b1(), tmp0_cached[4].b1()];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function DynamicPolicyConfig_init_$Init$(seen0, opaServer, policyQuery, policyName, rules, argument, serializationConstructorMarker, $this) {
    if (!(28 === (28 & seen0))) {
      throwMissingFieldException(seen0, 28, $serializer_getInstance_15().vf2_1);
    }
    if (0 === (seen0 & 1))
      $this.rf0_1 = 'http://localhost:8181';
    else
      $this.rf0_1 = opaServer;
    if (0 === (seen0 & 2))
      $this.sf0_1 = 'vc/verification';
    else
      $this.sf0_1 = policyQuery;
    $this.tf0_1 = policyName;
    $this.uf0_1 = rules;
    $this.vf0_1 = argument;
    return $this;
  }
  function DynamicPolicyConfig_init_$Create$(seen0, opaServer, policyQuery, policyName, rules, argument, serializationConstructorMarker) {
    return DynamicPolicyConfig_init_$Init$(seen0, opaServer, policyQuery, policyName, rules, argument, serializationConstructorMarker, objectCreate(protoOf(DynamicPolicyConfig)));
  }
  function DynamicPolicyConfig(opaServer, policyQuery, policyName, rules, argument) {
    Companion_getInstance_26();
    opaServer = opaServer === VOID ? 'http://localhost:8181' : opaServer;
    policyQuery = policyQuery === VOID ? 'vc/verification' : policyQuery;
    this.rf0_1 = opaServer;
    this.sf0_1 = policyQuery;
    this.tf0_1 = policyName;
    this.uf0_1 = rules;
    this.vf0_1 = argument;
  }
  protoOf(DynamicPolicyConfig).toString = function () {
    return 'DynamicPolicyConfig(opaServer=' + this.rf0_1 + ', policyQuery=' + this.sf0_1 + ', policyName=' + this.tf0_1 + ', rules=' + toString(this.uf0_1) + ', argument=' + toString(this.vf0_1) + ')';
  };
  protoOf(DynamicPolicyConfig).hashCode = function () {
    var result = getStringHashCode(this.rf0_1);
    result = imul(result, 31) + getStringHashCode(this.sf0_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.tf0_1) | 0;
    result = imul(result, 31) + hashCode(this.uf0_1) | 0;
    result = imul(result, 31) + hashCode(this.vf0_1) | 0;
    return result;
  };
  protoOf(DynamicPolicyConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DynamicPolicyConfig))
      return false;
    var tmp0_other_with_cast = other instanceof DynamicPolicyConfig ? other : THROW_CCE();
    if (!(this.rf0_1 === tmp0_other_with_cast.rf0_1))
      return false;
    if (!(this.sf0_1 === tmp0_other_with_cast.sf0_1))
      return false;
    if (!(this.tf0_1 === tmp0_other_with_cast.tf0_1))
      return false;
    if (!equals(this.uf0_1, tmp0_other_with_cast.uf0_1))
      return false;
    if (!equals(this.vf0_1, tmp0_other_with_cast.vf0_1))
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
      logger = tmp.w6g(logger$lambda);
    }
  }
  function ExpirationDatePolicy$Companion$$childSerializers$_anonymous__d7tsh1() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function Companion_22() {
    Companion_instance_26 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xf2_1 = [null, null, lazy(tmp_0, ExpirationDatePolicy$Companion$$childSerializers$_anonymous__d7tsh1)];
    this.yf2_1 = listOf_0([V2_NotAfter_getInstance(), V1_NotAfter_getInstance()]);
    this.zf2_1 = listOf(JwtClaims_NotAfter_getInstance());
  }
  protoOf(Companion_22).m4u = function () {
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
    var tmp0_safe_receiver = data.af('vc');
    var tmp1_elvis_lhs = tmp.xea(tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver), Companion_getInstance_27().yf2_1);
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? DatePolicyUtils_getInstance().xea(data, Companion_getInstance_27().yf2_1) : tmp1_elvis_lhs;
    return tmp2_elvis_lhs == null ? DatePolicyUtils_getInstance().yea(data, Companion_getInstance_27().zf2_1) : tmp2_elvis_lhs;
  }
  function buildFailureResult($this, now, exp, key) {
    // Inline function 'kotlin.let' call
    var it = now.f6c(exp);
    // Inline function 'kotlin.Companion.failure' call
    var exception = new ExpirationDatePolicyException(exp, exp.z5z(), it, _Duration___get_inWholeSeconds__impl__hpy7b3(it), key.dd6(), true);
    return _Result___init__impl__xyqfz8(createFailure(exception));
  }
  function buildSuccessResult($this, now, exp, key) {
    // Inline function 'kotlin.let' call
    var it = exp.f6c(now);
    // Inline function 'kotlin.Companion.success' call
    var value = new JsonObject(mapOf_0([to('date', JsonPrimitive_0(exp.toString())), to('date_seconds', JsonPrimitive_2(exp.z5z())), to('expires_in', JsonPrimitive_0(Duration__toString_impl_8d916b(it))), to('expires_in_seconds', JsonPrimitive_2(_Duration___get_inWholeSeconds__impl__hpy7b3(it))), to('used_key', JsonPrimitive_0(key.dd6())), to('policy_available', JsonPrimitive(true))]));
    return _Result___init__impl__xyqfz8(value);
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.ExpirationDatePolicy', this, 3);
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.af3_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).bf3 = function (encoder, value) {
    var tmp0_desc = this.af3_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().xf2_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.cf3_1 === 'expired')) {
      tmp1_output.w25(tmp0_desc, 0, value.cf3_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.df3_1 === 'Verifies that the credentials expiration date (`exp` for JWTs) has not been exceeded.')) {
      tmp1_output.w25(tmp0_desc, 1, value.df3_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.ef3_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.ef3_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_16).v20 = function (encoder, value) {
    return this.bf3(encoder, value instanceof ExpirationDatePolicy ? value : THROW_CCE());
  };
  protoOf($serializer_16).w20 = function (decoder) {
    var tmp0_desc = this.af3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_27().xf2_1;
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
    return ExpirationDatePolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_16).u20 = function () {
    return this.af3_1;
  };
  protoOf($serializer_16).m2c = function () {
    var tmp0_cached = Companion_getInstance_27().xf2_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function ExpirationDatePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().af3_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.cf3_1 = 'expired';
    else
      $this.cf3_1 = name;
    if (0 === (seen0 & 2))
      $this.df3_1 = 'Verifies that the credentials expiration date (`exp` for JWTs) has not been exceeded.';
    else
      $this.df3_1 = description;
    if (0 === (seen0 & 4))
      $this.ef3_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
    else
      $this.ef3_1 = supportedVCFormats;
    return $this;
  }
  function ExpirationDatePolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return ExpirationDatePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(ExpirationDatePolicy)));
  }
  function ExpirationDatePolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.nf3_1 = this$0;
    this.of3_1 = $data;
    this.pf3_1 = $args;
    this.qf3_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ExpirationDatePolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(ExpirationDatePolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.nf3_1.gea(this.of3_1, this.pf3_1, this.qf3_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new ExpirationDatePolicy$verifyAsync$slambda(this.nf3_1, this.of3_1, this.pf3_1, this.qf3_1, completion);
  };
  function ExpirationDatePolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new ExpirationDatePolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function ExpirationDatePolicy() {
    Companion_getInstance_27();
    CredentialWrapperValidatorPolicy.call(this);
    this.cf3_1 = 'expired';
    this.df3_1 = 'Verifies that the credentials expiration date (`exp` for JWTs) has not been exceeded.';
    this.ef3_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
  }
  protoOf(ExpirationDatePolicy).u2 = function () {
    return this.cf3_1;
  };
  protoOf(ExpirationDatePolicy).tat = function () {
    return this.df3_1;
  };
  protoOf(ExpirationDatePolicy).iea = function () {
    return this.ef3_1;
  };
  protoOf(ExpirationDatePolicy).gea = function (data, args, context, $completion) {
    var tmp0_elvis_lhs = getExpirationKeyValuePair(this, data);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new Result(DatePolicyUtils_getInstance().wea_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var _destruct__k2r9zo = tmp;
    var key = _destruct__k2r9zo.dc();
    var exp = _destruct__k2r9zo.ec();
    var now = System_instance.d5v();
    var tmp_0;
    if (now.g6c(exp) > 0) {
      tmp_0 = buildFailureResult(this, now, exp, key);
    } else {
      tmp_0 = buildSuccessResult(this, now, exp, key);
    }
    return new Result(tmp_0);
  };
  protoOf(ExpirationDatePolicy).hea = function (data, args, context) {
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
    tmp.rf3_1 = [null, null, null, lazy(tmp_0, JsonSchemaPolicy$SerializableValidationError$Companion$$childSerializers$_anonymous__8e62u5), null];
  }
  protoOf(Companion_23).m4u = function () {
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
    tmp0_serialDesc.x2b('schemaPath', false);
    tmp0_serialDesc.x2b('objectPath', false);
    tmp0_serialDesc.x2b('message', false);
    tmp0_serialDesc.x2b('details', false);
    tmp0_serialDesc.x2b('absoluteLocation', false);
    this.sf3_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).tf3 = function (encoder, value) {
    var tmp0_desc = this.sf3_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().rf3_1;
    tmp1_output.w25(tmp0_desc, 0, value.schemaPath);
    tmp1_output.w25(tmp0_desc, 1, value.objectPath);
    tmp1_output.w25(tmp0_desc, 2, value.message);
    tmp1_output.a26(tmp0_desc, 3, tmp2_cached[3].b1(), value.details);
    tmp1_output.a26(tmp0_desc, 4, StringSerializer_getInstance(), value.absoluteLocation);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_17).v20 = function (encoder, value) {
    return this.tf3(encoder, value instanceof SerializableValidationError ? value : THROW_CCE());
  };
  protoOf($serializer_17).w20 = function (decoder) {
    var tmp0_desc = this.sf3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.h24(tmp0_desc);
    var tmp10_cached = Companion_getInstance_28().rf3_1;
    if (tmp9_input.x24()) {
      tmp4_local0 = tmp9_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.v24(tmp0_desc, 3, tmp10_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.v24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.v24(tmp0_desc, 3, tmp10_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.v24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.i24(tmp0_desc);
    return SerializableValidationError_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_17).u20 = function () {
    return this.sf3_1;
  };
  protoOf($serializer_17).m2c = function () {
    var tmp0_cached = Companion_getInstance_28().rf3_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(tmp0_cached[3].b1()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function SerializableValidationError_init_$Init$(seen0, schemaPath, objectPath, message, details, absoluteLocation, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_17().sf3_1);
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
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function SerializableValidationError(schemaPath, objectPath, message, details, absoluteLocation) {
    Companion_getInstance_28();
    this.schemaPath = schemaPath;
    this.objectPath = objectPath;
    this.message = message;
    this.details = details;
    this.absoluteLocation = absoluteLocation;
  }
  protoOf(SerializableValidationError).yct = function () {
    return this.schemaPath;
  };
  protoOf(SerializableValidationError).wcq = function () {
    return this.objectPath;
  };
  protoOf(SerializableValidationError).ta = function () {
    return this.message;
  };
  protoOf(SerializableValidationError).uf3 = function () {
    return this.details;
  };
  protoOf(SerializableValidationError).vf3 = function () {
    return this.absoluteLocation;
  };
  protoOf(SerializableValidationError).dc = function () {
    return this.schemaPath;
  };
  protoOf(SerializableValidationError).ec = function () {
    return this.objectPath;
  };
  protoOf(SerializableValidationError).yp = function () {
    return this.message;
  };
  protoOf(SerializableValidationError).p70 = function () {
    return this.details;
  };
  protoOf(SerializableValidationError).w7k = function () {
    return this.absoluteLocation;
  };
  protoOf(SerializableValidationError).wf3 = function (schemaPath, objectPath, message, details, absoluteLocation) {
    return new SerializableValidationError(schemaPath, objectPath, message, details, absoluteLocation);
  };
  protoOf(SerializableValidationError).copy = function (schemaPath, objectPath, message, details, absoluteLocation, $super) {
    schemaPath = schemaPath === VOID ? this.schemaPath : schemaPath;
    objectPath = objectPath === VOID ? this.objectPath : objectPath;
    message = message === VOID ? this.message : message;
    details = details === VOID ? this.details : details;
    absoluteLocation = absoluteLocation === VOID ? this.absoluteLocation : absoluteLocation;
    return $super === VOID ? this.wf3(schemaPath, objectPath, message, details, absoluteLocation) : $super.wf3.call(this, schemaPath, objectPath, message, details, absoluteLocation);
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
    tmp.xf3_1 = [null, null, lazy(tmp_0, JsonSchemaPolicy$Companion$$childSerializers$_anonymous__je46q9)];
  }
  protoOf(Companion_24).m4u = function () {
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
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.yf3_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).zf3 = function (encoder, value) {
    var tmp0_desc = this.yf3_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().xf3_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.af4_1 === 'schema')) {
      tmp1_output.w25(tmp0_desc, 0, value.af4_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.bf4_1 === 'Verifies a credentials data against a JSON Schema (Draft 7 - see https://json-schema.org/specification-links#draft-7).')) {
      tmp1_output.w25(tmp0_desc, 1, value.bf4_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.cf4_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.cf4_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_18).v20 = function (encoder, value) {
    return this.zf3(encoder, value instanceof JsonSchemaPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_18).w20 = function (decoder) {
    var tmp0_desc = this.yf3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_29().xf3_1;
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
    return JsonSchemaPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_18).u20 = function () {
    return this.yf3_1;
  };
  protoOf($serializer_18).m2c = function () {
    var tmp0_cached = Companion_getInstance_29().xf3_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function JsonSchemaPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_18().yf3_1);
    }
    CredentialDataValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.af4_1 = 'schema';
    else
      $this.af4_1 = name;
    if (0 === (seen0 & 2))
      $this.bf4_1 = 'Verifies a credentials data against a JSON Schema (Draft 7 - see https://json-schema.org/specification-links#draft-7).';
    else
      $this.bf4_1 = description;
    if (0 === (seen0 & 4))
      $this.cf4_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
    else
      $this.cf4_1 = supportedVCFormats;
    return $this;
  }
  function JsonSchemaPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return JsonSchemaPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(JsonSchemaPolicy)));
  }
  function sam$io_github_optimumcode_json_schema_ErrorCollector$0(function_0) {
    this.df4_1 = function_0;
  }
  protoOf(sam$io_github_optimumcode_json_schema_ErrorCollector$0).zcn = function (error) {
    return this.df4_1(error);
  };
  protoOf(sam$io_github_optimumcode_json_schema_ErrorCollector$0).u3 = function () {
    return this.df4_1;
  };
  protoOf(sam$io_github_optimumcode_json_schema_ErrorCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ErrorCollector) : false) {
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
  protoOf(sam$io_github_optimumcode_json_schema_ErrorCollector$0).hashCode = function () {
    return hashCode(this.u3());
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
    this.mf4_1 = this$0;
    this.nf4_1 = $data;
    this.of4_1 = $args;
    this.pf4_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonSchemaPolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JsonSchemaPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.mf4_1.gea(this.nf4_1, this.of4_1, this.pf4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new JsonSchemaPolicy$verifyAsync$slambda(this.mf4_1, this.nf4_1, this.of4_1, this.pf4_1, completion);
  };
  function JsonSchemaPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new JsonSchemaPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JsonSchemaPolicy() {
    Companion_getInstance_29();
    CredentialDataValidatorPolicy.call(this);
    this.af4_1 = 'schema';
    this.bf4_1 = 'Verifies a credentials data against a JSON Schema (Draft 7 - see https://json-schema.org/specification-links#draft-7).';
    this.cf4_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
  }
  protoOf(JsonSchemaPolicy).u2 = function () {
    return this.af4_1;
  };
  protoOf(JsonSchemaPolicy).tat = function () {
    return this.bf4_1;
  };
  protoOf(JsonSchemaPolicy).iea = function () {
    return this.cf4_1;
  };
  protoOf(JsonSchemaPolicy).gea = function (data, args, context, $completion) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp_0;
      if (!(args == null) ? typeof args === 'string' : false) {
        tmp_0 = Companion_instance_1.fco(args);
      } else {
        if (args instanceof JsonElement) {
          tmp_0 = Companion_instance_1.hco(args);
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
    var success = schema.kco(data, new sam$io_github_optimumcode_json_schema_ErrorCollector$0(tmp_5));
    var tmp_6;
    if (success) {
      // Inline function 'kotlin.Companion.success' call
      var value_0 = args == null ? toString_0(args) : args;
      tmp_6 = _Result___init__impl__xyqfz8(value_0);
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(errors, 10));
      var _iterator__ex2g4s = errors.p();
      while (_iterator__ex2g4s.q()) {
        var item = _iterator__ex2g4s.r();
        var tmp_7 = item.ycp_1.toString();
        var tmp_8 = item.zcp_1.toString();
        // Inline function 'kotlin.collections.ifEmpty' call
        var this_1 = item.bcq_1;
        var tmp_9;
        if (this_1.h()) {
          tmp_9 = null;
        } else {
          tmp_9 = this_1;
        }
        var tmp_10 = tmp_9;
        var tmp0_safe_receiver = item.ccq_1;
        var tmp$ret$9 = new SerializableValidationError(tmp_7, tmp_8, item.acq_1, tmp_10, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString());
        destination.n(tmp$ret$9);
      }
      var serializableErrors = destination;
      // Inline function 'kotlin.Companion.failure' call
      var exception_0 = new JsonSchemaVerificationException(serializableErrors);
      tmp_6 = _Result___init__impl__xyqfz8(createFailure(exception_0));
    }
    return new Result(tmp_6);
  };
  protoOf(JsonSchemaPolicy).hea = function (data, args, context) {
    var tmp = JsonSchemaPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function JwtSignaturePolicy$Companion$$childSerializers$_anonymous__rvibjb() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function Companion_25() {
    Companion_instance_29 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qf4_1 = [null, null, lazy(tmp_0, JwtSignaturePolicy$Companion$$childSerializers$_anonymous__rvibjb)];
  }
  protoOf(Companion_25).m4u = function () {
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
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.rf4_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).sf4 = function (encoder, value) {
    var tmp0_desc = this.rf4_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().qf4_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ret_1 === 'signature')) {
      tmp1_output.w25(tmp0_desc, 0, value.ret_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.tet_1 === 'Checks a JWT credential by verifying its cryptographic signature using the key referenced by the DID in `iss`.')) {
      tmp1_output.w25(tmp0_desc, 1, value.tet_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.uet_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.uet_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_19).v20 = function (encoder, value) {
    return this.sf4(encoder, value instanceof JwtSignaturePolicy ? value : THROW_CCE());
  };
  protoOf($serializer_19).w20 = function (decoder) {
    var tmp0_desc = this.rf4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_30().qf4_1;
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
    return JwtSignaturePolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_19).u20 = function () {
    return this.rf4_1;
  };
  protoOf($serializer_19).m2c = function () {
    var tmp0_cached = Companion_getInstance_30().qf4_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function JwtSignaturePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_19().rf4_1);
    }
    JwtVerificationPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.ret_1 = 'signature';
    else
      $this.ret_1 = name;
    if (0 === (seen0 & 2))
      $this.tet_1 = 'Checks a JWT credential by verifying its cryptographic signature using the key referenced by the DID in `iss`.';
    else
      $this.tet_1 = description;
    if (0 === (seen0 & 4))
      $this.uet_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
    else
      $this.uet_1 = supportedVCFormats;
    return $this;
  }
  function JwtSignaturePolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return JwtSignaturePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(JwtSignaturePolicy)));
  }
  function JwtSignaturePolicy$verifyAsync$slambda(this$0, $credential, $args, $context, resultContinuation) {
    this.bf5_1 = this$0;
    this.cf5_1 = $credential;
    this.df5_1 = $args;
    this.ef5_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwtSignaturePolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwtSignaturePolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.bf5_1.sed(this.cf5_1, this.df5_1, this.ef5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new JwtSignaturePolicy$verifyAsync$slambda(this.bf5_1, this.cf5_1, this.df5_1, this.ef5_1, completion);
  };
  function JwtSignaturePolicy$verifyAsync$slambda_0(this$0, $credential, $args, $context, resultContinuation) {
    var i = new JwtSignaturePolicy$verifyAsync$slambda(this$0, $credential, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $verifyCOROUTINE$11(_this__u8e3s4, credential, args, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.nf5_1 = _this__u8e3s4;
    this.of5_1 = credential;
    this.pf5_1 = args;
    this.qf5_1 = context;
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
            tmp_0.rf5_1 = new JwsSignatureScheme();
            this.sf5_1 = this.rf5_1;
            var tmp_1 = this;
            tmp_1.tf5_1 = this.sf5_1;
            this.uf5_1 = this.tf5_1;
            if (Companion_getInstance_0().isSDJwt(this.of5_1, true)) {
              this.n9_1 = 3;
              suspendResult = this.uf5_1.rdo(this.of5_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = this.uf5_1.cdp(this.of5_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.wf5_1 = suspendResult.up_1;
            suspendResult = new Result(this.wf5_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.vf5_1 = suspendResult.up_1;
            this.n9_1 = 6;
            continue $sm;
          case 3:
            this.xf5_1 = suspendResult;
            this.n9_1 = 4;
            suspendResult = this.uf5_1.odp(this.of5_1, JWTCryptoProviderManager_instance.yf5(mapOf(to(this.xf5_1.keyId, this.xf5_1.key))), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 5;
            continue $sm;
          case 4:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.vf5_1 = suspendResult.up_1;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            return new Result(this.vf5_1);
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
    this.ret_1 = 'signature';
    this.tet_1 = 'Checks a JWT credential by verifying its cryptographic signature using the key referenced by the DID in `iss`.';
    this.uet_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
  }
  protoOf(JwtSignaturePolicy).u2 = function () {
    return this.ret_1;
  };
  protoOf(JwtSignaturePolicy).tat = function () {
    return this.tet_1;
  };
  protoOf(JwtSignaturePolicy).iea = function () {
    return this.uet_1;
  };
  protoOf(JwtSignaturePolicy).sed = function (credential, args, context, $completion) {
    var tmp = new $verifyCOROUTINE$11(this, credential, args, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwtSignaturePolicy).ted = function (credential, args, context) {
    var tmp = JwtSignaturePolicy$verifyAsync$slambda_0(this, credential, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function NotBeforeDatePolicy$Companion$$childSerializers$_anonymous__oxpz3c() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function Companion_26() {
    Companion_instance_30 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.zf5_1 = [null, null, lazy(tmp_0, NotBeforeDatePolicy$Companion$$childSerializers$_anonymous__oxpz3c)];
    this.af6_1 = listOf_0([V2_NotBefore_getInstance(), V1_NotBefore_getInstance()]);
    this.bf6_1 = listOf_0([JwtClaims_NotBefore_getInstance(), JwtClaims_IssuedAt_getInstance()]);
  }
  protoOf(Companion_26).m4u = function () {
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
      tmp = nbf.cc_1.e6c(tmp$ret$0);
    } else {
      tmp = nbf.cc_1;
    }
    // Inline function 'kotlin.let' call
    return tmp.g6c(now) > 0;
  }
  function getIssuanceDateKeyValuePair($this, data) {
    var tmp = DatePolicyUtils_getInstance();
    var tmp0_safe_receiver = data.af('vc');
    var tmp1_elvis_lhs = tmp.xea(tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver), Companion_getInstance_31().af6_1);
    var tmp2_elvis_lhs = tmp1_elvis_lhs == null ? DatePolicyUtils_getInstance().xea(data, Companion_getInstance_31().af6_1) : tmp1_elvis_lhs;
    return tmp2_elvis_lhs == null ? DatePolicyUtils_getInstance().yea(data, Companion_getInstance_31().bf6_1) : tmp2_elvis_lhs;
  }
  function buildFailureResult_0($this, now, nbf, key) {
    // Inline function 'kotlin.let' call
    var it = nbf.f6c(now);
    // Inline function 'kotlin.Companion.failure' call
    var exception = new NotBeforePolicyException(nbf, nbf.z5z(), it, _Duration___get_inWholeSeconds__impl__hpy7b3(it), key.dd6());
    return _Result___init__impl__xyqfz8(createFailure(exception));
  }
  function buildSuccessResult_0($this, now, nbf, key) {
    // Inline function 'kotlin.let' call
    var it = now.f6c(nbf);
    // Inline function 'kotlin.Companion.success' call
    var value = new JsonObject(mapOf_0([to('date', JsonPrimitive_0(nbf.toString())), to('date_seconds', JsonPrimitive_2(nbf.z5z())), to('available_since', JsonPrimitive_0(Duration__toString_impl_8d916b(it))), to('available_since_seconds', JsonPrimitive_2(_Duration___get_inWholeSeconds__impl__hpy7b3(it))), to('used_key', JsonPrimitive_0(key.dd6())), to('policy_available', JsonPrimitive(true))]));
    return _Result___init__impl__xyqfz8(value);
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.policies.policies.NotBeforeDatePolicy', this, 3);
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.cf6_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).df6 = function (encoder, value) {
    var tmp0_desc = this.cf6_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_31().zf5_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ef6_1 === 'not-before')) {
      tmp1_output.w25(tmp0_desc, 0, value.ef6_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.ff6_1 === 'Verifies that the credentials not-before date (for JWT: `nbf`, if unavailable: `iat` - 1 min) is correctly exceeded.')) {
      tmp1_output.w25(tmp0_desc, 1, value.ff6_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.gf6_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.gf6_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_20).v20 = function (encoder, value) {
    return this.df6(encoder, value instanceof NotBeforeDatePolicy ? value : THROW_CCE());
  };
  protoOf($serializer_20).w20 = function (decoder) {
    var tmp0_desc = this.cf6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_31().zf5_1;
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
    return NotBeforeDatePolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_20).u20 = function () {
    return this.cf6_1;
  };
  protoOf($serializer_20).m2c = function () {
    var tmp0_cached = Companion_getInstance_31().zf5_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function NotBeforeDatePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_20().cf6_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.ef6_1 = 'not-before';
    else
      $this.ef6_1 = name;
    if (0 === (seen0 & 2))
      $this.ff6_1 = 'Verifies that the credentials not-before date (for JWT: `nbf`, if unavailable: `iat` - 1 min) is correctly exceeded.';
    else
      $this.ff6_1 = description;
    if (0 === (seen0 & 4))
      $this.gf6_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
    else
      $this.gf6_1 = supportedVCFormats;
    return $this;
  }
  function NotBeforeDatePolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return NotBeforeDatePolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(NotBeforeDatePolicy)));
  }
  function NotBeforeDatePolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.pf6_1 = this$0;
    this.qf6_1 = $data;
    this.rf6_1 = $args;
    this.sf6_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NotBeforeDatePolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(NotBeforeDatePolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.pf6_1.gea(this.qf6_1, this.rf6_1, this.sf6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new NotBeforeDatePolicy$verifyAsync$slambda(this.pf6_1, this.qf6_1, this.rf6_1, this.sf6_1, completion);
  };
  function NotBeforeDatePolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new NotBeforeDatePolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function NotBeforeDatePolicy() {
    Companion_getInstance_31();
    CredentialWrapperValidatorPolicy.call(this);
    this.ef6_1 = 'not-before';
    this.ff6_1 = 'Verifies that the credentials not-before date (for JWT: `nbf`, if unavailable: `iat` - 1 min) is correctly exceeded.';
    this.gf6_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
  }
  protoOf(NotBeforeDatePolicy).u2 = function () {
    return this.ef6_1;
  };
  protoOf(NotBeforeDatePolicy).tat = function () {
    return this.ff6_1;
  };
  protoOf(NotBeforeDatePolicy).iea = function () {
    return this.gf6_1;
  };
  protoOf(NotBeforeDatePolicy).gea = function (data, args, context, $completion) {
    var tmp0_elvis_lhs = getIssuanceDateKeyValuePair(this, data);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new Result(DatePolicyUtils_getInstance().wea_1);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var nbf = tmp;
    var now = System_instance.d5v();
    var tmp_0;
    if (isBeyondNow(this, nbf, now)) {
      tmp_0 = buildFailureResult_0(this, now, nbf.cc_1, nbf.bc_1);
    } else {
      tmp_0 = buildSuccessResult_0(this, now, nbf.cc_1, nbf.bc_1);
    }
    return new Result(tmp_0);
  };
  protoOf(NotBeforeDatePolicy).hea = function (data, args, context) {
    var tmp = NotBeforeDatePolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function _get_$cachedSerializer__te6jhj_4($this) {
    return $this.uf6_1.b1();
  }
  function RevocationPolicyMp$Companion$$childSerializers$_anonymous__58hkhj() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
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
    tmp.tf6_1 = [null, null, lazy(tmp_0, RevocationPolicyMp$Companion$$childSerializers$_anonymous__58hkhj)];
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_1.uf6_1 = lazy(tmp_2, RevocationPolicyMp$Companion$_anonymous__qf91lw);
  }
  protoOf(Companion_27).m4u = function () {
    return _get_$cachedSerializer__te6jhj_4(this);
  };
  protoOf(Companion_27).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
      $this.vf6_1 = 'revoked-status-list';
    else
      $this.vf6_1 = name;
    if (0 === (seen0 & 2))
      $this.wf6_1 = 'Verifies Credential Status';
    else
      $this.wf6_1 = description;
    if (0 === (seen0 & 4))
      $this.xf6_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
    else
      $this.xf6_1 = supportedVCFormats;
    return $this;
  }
  function RevocationPolicyMp() {
    Companion_getInstance_32();
    CredentialWrapperValidatorPolicy.call(this);
    this.vf6_1 = 'revoked-status-list';
    this.wf6_1 = 'Verifies Credential Status';
    this.xf6_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
  }
  protoOf(RevocationPolicyMp).u2 = function () {
    return this.vf6_1;
  };
  protoOf(RevocationPolicyMp).tat = function () {
    return this.wf6_1;
  };
  protoOf(RevocationPolicyMp).iea = function () {
    return this.xf6_1;
  };
  function resolveIssuerKeysFromSdJwt($this, sdJwt, $completion) {
    var tmp = new $resolveIssuerKeysFromSdJwtCOROUTINE$12($this, sdJwt, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function SdJwtVCSignaturePolicy$verifyAsync$slambda(this$0, $credential, $args, $context, resultContinuation) {
    this.zf7_1 = this$0;
    this.af8_1 = $credential;
    this.bf8_1 = $args;
    this.cf8_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SdJwtVCSignaturePolicy$verifyAsync$slambda).y6o = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(SdJwtVCSignaturePolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.y6o($completion);
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
            suspendResult = this.zf7_1.gf8(this.af8_1, this.bf8_1, this.cf8_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new SdJwtVCSignaturePolicy$verifyAsync$slambda(this.zf7_1, this.af8_1, this.bf8_1, this.cf8_1, completion);
  };
  function SdJwtVCSignaturePolicy$verifyAsync$slambda_0(this$0, $credential, $args, $context, resultContinuation) {
    var i = new SdJwtVCSignaturePolicy$verifyAsync$slambda(this$0, $credential, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.y6o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveIssuerKeysFromSdJwtCOROUTINE$12(_this__u8e3s4, sdJwt, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gf7_1 = _this__u8e3s4;
    this.hf7_1 = sdJwt;
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
            var tmp0_elvis_lhs = this.hf7_1.sc8_1;
            tmp_0.if7_1 = tmp0_elvis_lhs == null ? UuidUtils_instance.e9d() : tmp0_elvis_lhs;
            if (DidUtils_getInstance().isDidUrl(this.if7_1)) {
              this.n9_1 = 4;
              suspendResult = DidService_getInstance().y9w(this.if7_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 5;
              continue $sm;
            } else {
              var tmp_1 = this;
              var tmp1_safe_receiver = this.hf7_1.header.af('x5c');
              var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonArray(tmp1_safe_receiver);
              var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : lastOrNull(tmp2_safe_receiver);
              var tmp_2;
              if (tmp3_elvis_lhs == null) {
                throw IllegalArgumentException_init_$Create$('x5c header parameter is missing or empty.');
              } else {
                tmp_2 = tmp3_elvis_lhs;
              }
              tmp_1.kf7_1 = tmp_2;
              this.n9_1 = 1;
              suspendResult = Companion_instance_2.w77(get_jsonPrimitive(this.kf7_1).q4u(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.lf7_1 = suspendResult.up_1;
            suspendResult = new Result(this.lf7_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.mf7_1 = suspendResult.up_1;
            var tmp_3 = this;
            var this_0 = this.mf7_1;
            throwOnFailure(this_0);
            var tmp_4 = _Result___get_value__impl__bjfvqg(this_0);
            tmp_3.nf7_1 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
            this.of7_1 = this.nf7_1;
            var tmp_5 = this;
            tmp_5.pf7_1 = this.of7_1;
            this.qf7_1 = this.pf7_1;
            this.n9_1 = 3;
            suspendResult = this.qf7_1.j6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var key = new JWKKey(ARGUMENT, this.if7_1);
            this.jf7_1 = setOf_0(key);
            this.n9_1 = 6;
            continue $sm;
          case 4:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 5;
            continue $sm;
          case 5:
            var tmp_6 = this;
            var this_1 = suspendResult.up_1;
            throwOnFailure(this_1);
            var tmp_7 = _Result___get_value__impl__bjfvqg(this_1);
            tmp_6.jf7_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
            this.n9_1 = 6;
            continue $sm;
          case 6:
            return this.jf7_1;
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
    this.pf8_1 = _this__u8e3s4;
    this.qf8_1 = credential;
    this.rf8_1 = args;
    this.sf8_1 = context;
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
            tmp_0.tf8_1 = this.pf8_1;
            this.uf8_1 = this.tf8_1;
            this.o9_1 = 21;
            var tmp_1 = this;
            tmp_1.wf8_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.xf8_1 = this.uf8_1;
            this.yf8_1 = this.xf8_1;
            this.zf8_1 = Companion_instance_0.aq(this.qf8_1);
            if (!this.zf8_1.isPresentation) {
              this.n9_1 = 10;
              suspendResult = resolveIssuerKeysFromSdJwt(this.yf8_1, this.zf8_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = resolveIssuerKeysFromSdJwt(this.yf8_1, this.zf8_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.bf9_1 = suspendResult;
            var tmp_3 = this;
            var tmp0_elvis_lhs = firstOrNull(this.bf9_1);
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              throw new VerificationException('No issuer keys found in the DID document');
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_3.cf9_1 = tmp_4;
            this.n9_1 = 2;
            suspendResult = Companion_instance_2.t7i(toString_0(this.zf8_1.rc8_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.df9_1 = suspendResult.up_1;
            suspendResult = new Result(this.df9_1);
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.ef9_1 = suspendResult.up_1;
            var tmp_5 = this;
            var this_0 = this.ef9_1;
            throwOnFailure(this_0);
            var tmp_6 = _Result___get_value__impl__bjfvqg(this_0);
            tmp_5.ff9_1 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
            var tmp_7 = this;
            tmp_7.gf9_1 = this.bf9_1;
            this.hf9_1 = this.gf9_1;
            this.if9_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.hf9_1, 10)), 16);
            var tmp_8 = this;
            tmp_8.jf9_1 = this.hf9_1;
            var tmp_9 = this;
            tmp_9.kf9_1 = LinkedHashMap_init_$Create$(this.if9_1);
            this.lf9_1 = this.jf9_1;
            this.mf9_1 = this.kf9_1;
            this.nf9_1 = this.lf9_1.p();
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (!this.nf9_1.q()) {
              this.n9_1 = 6;
              continue $sm;
            }

            this.of9_1 = this.nf9_1.r();
            var tmp_10 = this;
            tmp_10.pf9_1 = this.of9_1;
            this.qf9_1 = this.pf9_1;
            this.n9_1 = 5;
            suspendResult = this.qf9_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.rf9_1 = suspendResult;
            this.mf9_1.p2(this.rf9_1, this.of9_1);
            this.n9_1 = 4;
            continue $sm;
          case 6:
            this.sf9_1 = this.mf9_1;
            this.tf9_1 = toMutableMap(this.sf9_1);
            var tmp_11 = this;
            tmp_11.uf9_1 = this.tf9_1;
            this.vf9_1 = this.zf8_1.keyID;
            if (this.vf9_1 == null) {
              this.n9_1 = 7;
              suspendResult = this.cf9_1.d6m(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.wf9_1 = this.vf9_1;
              this.n9_1 = 8;
              continue $sm;
            }

          case 7:
            this.wf9_1 = suspendResult;
            this.n9_1 = 8;
            continue $sm;
          case 8:
            this.xf9_1 = this.wf9_1;
            var tmp_12 = this;
            tmp_12.yf9_1 = this.cf9_1;
            var this_1 = this.uf9_1;
            var key = this.xf9_1;
            var value = this.yf9_1;
            this_1.p2(key, value);
            var tmp_13 = this;
            tmp_13.zf9_1 = this.tf9_1;
            this.n9_1 = 9;
            suspendResult = this.ff9_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.afa_1 = suspendResult;
            var tmp_14 = this;
            tmp_14.bfa_1 = this.ff9_1;
            var this_2 = this.zf9_1;
            var key_0 = this.afa_1;
            var value_0 = this.bfa_1;
            this_2.p2(key_0, value_0);
            var tmp_15 = this;
            var tmp_16 = JWTCryptoProviderManager_instance.yf5(this.tf9_1);
            var tmp2_safe_receiver = this.sf8_1.m2('clientId');
            var tmp_17 = tmp2_safe_receiver == null ? null : toString(tmp2_safe_receiver);
            var tmp3_safe_receiver = this.sf8_1.m2('challenge');
            tmp_15.cfa_1 = this.zf8_1.yc8(tmp_16, true, tmp_17, tmp3_safe_receiver == null ? null : toString(tmp3_safe_receiver));
            if (!this.cfa_1.wc9()) {
              throw new VerificationException('SD-JWT verification failed');
            }

            this.af9_1 = this.zf8_1.zzz_unused_undisclosedPayload;
            this.n9_1 = 20;
            continue $sm;
          case 10:
            this.dfa_1 = suspendResult;
            if (this.dfa_1.h()) {
              throw new VerificationException('No issuer keys found in the DID document');
            }

            var tmp_18 = this;
            tmp_18.efa_1 = this.yf8_1;
            var tmp_19 = this;
            tmp_19.ffa_1 = this.dfa_1;
            this.gfa_1 = this.efa_1;
            this.hfa_1 = this.ffa_1;
            var tmp_20 = this;
            tmp_20.ifa_1 = ArrayList_init_$Create$();
            var tmp_21 = this;
            tmp_21.jfa_1 = this.hfa_1;
            this.kfa_1 = Unit_instance;
            this.n9_1 = 11;
            continue $sm;
          case 11:
            this.lfa_1 = this.jfa_1;
            this.mfa_1 = this.lfa_1.p();
            this.n9_1 = 12;
            continue $sm;
          case 12:
            if (!this.mfa_1.q()) {
              this.n9_1 = 18;
              continue $sm;
            }

            this.nfa_1 = this.mfa_1.r();
            var tmp_22 = this;
            tmp_22.ofa_1 = this.nfa_1;
            this.pfa_1 = this.ofa_1;
            var tmp_23 = this;
            tmp_23.qfa_1 = this.hfa_1;
            this.rfa_1 = this.qfa_1;
            this.o9_1 = 15;
            var tmp_24 = this;
            tmp_24.tfa_1 = Companion_instance;
            var tmp_25 = this;
            tmp_25.ufa_1 = this.rfa_1;
            this.vfa_1 = this.ufa_1;
            var tmp_26 = this;
            tmp_26.wfa_1 = this.pfa_1;
            this.xfa_1 = this.wfa_1;
            this.n9_1 = 13;
            suspendResult = this.xfa_1.z6o(this.qf8_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 14;
            continue $sm;
          case 13:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 14;
            continue $sm;
          case 14:
            var tmp1 = suspendResult;
            var tmp_27 = this;
            this.tfa_1;
            tmp_27.sfa_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 21;
            this.n9_1 = 16;
            continue $sm;
          case 15:
            this.o9_1 = 21;
            var tmp_28 = this.q9_1;
            if (tmp_28 instanceof Error) {
              var e = this.q9_1;
              var tmp_29 = this;
              tmp_29.sfa_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 16;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 16:
            this.o9_1 = 21;
            var this_3 = this.sfa_1;
            var exception = Result__exceptionOrNull_impl_p6xea9(this_3);
            var tmp_30;
            if (exception == null) {
              var tmp_31 = _Result___get_value__impl__bjfvqg(this_3);
              tmp_30 = (tmp_31 == null ? true : !(tmp_31 == null)) ? tmp_31 : THROW_CCE();
            } else {
              this.ifa_1.n(exception);
              tmp_30 = null;
            }

            var result = tmp_30;
            if (!(result == null)) {
              this.kfa_1 = result;
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
            this.kfa_1 = null;
            if (false) {
              this.n9_1 = 11;
              continue $sm;
            }

            this.n9_1 = 19;
            continue $sm;
          case 19:
            var tmp0_elvis_lhs_0 = this.kfa_1;
            var tmp_32;
            if (tmp0_elvis_lhs_0 == null) {
              var failures = this.ifa_1;
              throw new VerificationException('Verification failed with all keys from the DID document', lastOrNull(failures));
            } else {
              tmp_32 = tmp0_elvis_lhs_0;
            }

            var tmp_33 = this;
            var this_4 = tmp_32.up_1;
            throwOnFailure(this_4);
            var tmp_34 = _Result___get_value__impl__bjfvqg(this_4);
            tmp_33.af9_1 = (tmp_34 == null ? true : !(tmp_34 == null)) ? tmp_34 : THROW_CCE();
            this.n9_1 = 20;
            continue $sm;
          case 20:
            var tmp1_0 = this.af9_1;
            var tmp_35 = this;
            this.wf8_1;
            tmp_35.vf8_1 = _Result___init__impl__xyqfz8(tmp1_0);
            this.o9_1 = 22;
            this.n9_1 = 23;
            continue $sm;
          case 21:
            this.o9_1 = 22;
            var tmp_36 = this.q9_1;
            if (tmp_36 instanceof Error) {
              var e_0 = this.q9_1;
              var tmp_37 = this;
              tmp_37.vf8_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.n9_1 = 23;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 22:
            throw this.q9_1;
          case 23:
            this.o9_1 = 22;
            return new Result(this.vf8_1);
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
    this.df8_1 = 'signature_sd-jwt-vc';
    this.ef8_1 = 'Checks a SD-JWT-VC credential by verifying its cryptographic signature using the key referenced by the DID in `iss`.';
    this.ff8_1 = setOf_0(VCFormat_sd_jwt_vc_getInstance());
  }
  protoOf(SdJwtVCSignaturePolicy).u2 = function () {
    return this.df8_1;
  };
  protoOf(SdJwtVCSignaturePolicy).tat = function () {
    return this.ef8_1;
  };
  protoOf(SdJwtVCSignaturePolicy).iea = function () {
    return this.ff8_1;
  };
  protoOf(SdJwtVCSignaturePolicy).gf8 = function (credential, args, context, $completion) {
    var tmp = new $verifyCOROUTINE$13(this, credential, args, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(SdJwtVCSignaturePolicy).sed = function (credential, args, context, $completion) {
    return this.gf8(credential, args, context, $completion);
  };
  protoOf(SdJwtVCSignaturePolicy).ted = function (credential, args, context) {
    var tmp = SdJwtVCSignaturePolicy$verifyAsync$slambda_0(this, credential, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function _get_$cachedSerializer__te6jhj_5($this) {
    return $this.zfa_1.b1();
  }
  function StatusPolicyMp$Companion$$childSerializers$_anonymous__yie2jh() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
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
    tmp.yfa_1 = [null, null, lazy(tmp_0, StatusPolicyMp$Companion$$childSerializers$_anonymous__yie2jh)];
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_1.zfa_1 = lazy(tmp_2, StatusPolicyMp$Companion$_anonymous__qvinns);
  }
  protoOf(Companion_28).m4u = function () {
    return _get_$cachedSerializer__te6jhj_5(this);
  };
  protoOf(Companion_28).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
      $this.afb_1 = 'credential-status';
    else
      $this.afb_1 = name;
    if (0 === (seen0 & 2))
      $this.bfb_1 = 'Verifies Credential Status';
    else
      $this.bfb_1 = description;
    if (0 === (seen0 & 4))
      $this.cfb_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
    else
      $this.cfb_1 = supportedVCFormats;
    var tmp = $this;
    var tmp_0 = KotlinLogging_instance;
    tmp.dfb_1 = tmp_0.w6g(StatusPolicyMp$_init_$lambda_wbwx6s);
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
    this.afb_1 = 'credential-status';
    this.bfb_1 = 'Verifies Credential Status';
    this.cfb_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]);
    var tmp = this;
    var tmp_0 = KotlinLogging_instance;
    tmp.dfb_1 = tmp_0.w6g(StatusPolicyMp$logger$lambda);
  }
  protoOf(StatusPolicyMp).u2 = function () {
    return this.afb_1;
  };
  protoOf(StatusPolicyMp).tat = function () {
    return this.bfb_1;
  };
  protoOf(StatusPolicyMp).iea = function () {
    return this.cfb_1;
  };
  function WebhookPolicy$Companion$$childSerializers$_anonymous__ngamu7() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function WebhookPolicy$Companion$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.p3l(tmp, WebhookPolicy$Companion$http$lambda$lambda);
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
    tmp.efb_1 = [null, null, lazy(tmp_0, WebhookPolicy$Companion$$childSerializers$_anonymous__ngamu7)];
    var tmp_1 = this;
    tmp_1.ffb_1 = HttpClient(WebhookPolicy$Companion$http$lambda);
  }
  protoOf(Companion_29).m4u = function () {
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
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.gfb_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).hfb = function (encoder, value) {
    var tmp0_desc = this.gfb_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_34().efb_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.ifb_1 === 'webhook')) {
      tmp1_output.w25(tmp0_desc, 0, value.ifb_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.jfb_1 === 'Sends the credential data to an webhook URL as HTTP POST, and returns the verified status based on the webhooks set status code (success = 200 - 299).')) {
      tmp1_output.w25(tmp0_desc, 1, value.jfb_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.kfb_1, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.kfb_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_21).v20 = function (encoder, value) {
    return this.hfb(encoder, value instanceof WebhookPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_21).w20 = function (decoder) {
    var tmp0_desc = this.gfb_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_34().efb_1;
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
    return WebhookPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_21).u20 = function () {
    return this.gfb_1;
  };
  protoOf($serializer_21).m2c = function () {
    var tmp0_cached = Companion_getInstance_34().efb_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function WebhookPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_21().gfb_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.ifb_1 = 'webhook';
    else
      $this.ifb_1 = name;
    if (0 === (seen0 & 2))
      $this.jfb_1 = 'Sends the credential data to an webhook URL as HTTP POST, and returns the verified status based on the webhooks set status code (success = 200 - 299).';
    else
      $this.jfb_1 = description;
    if (0 === (seen0 & 4))
      $this.kfb_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
    else
      $this.kfb_1 = supportedVCFormats;
    return $this;
  }
  function WebhookPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return WebhookPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(WebhookPolicy)));
  }
  function WebhookPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.tfb_1 = this$0;
    this.ufb_1 = $data;
    this.vfb_1 = $args;
    this.wfb_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WebhookPolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(WebhookPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.tfb_1.gea(this.ufb_1, this.vfb_1, this.wfb_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new WebhookPolicy$verifyAsync$slambda(this.tfb_1, this.ufb_1, this.vfb_1, this.wfb_1, completion);
  };
  function WebhookPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new WebhookPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $verifyCOROUTINE$14(_this__u8e3s4, data, args, context, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ffc_1 = _this__u8e3s4;
    this.gfc_1 = data;
    this.hfc_1 = args;
    this.ifc_1 = context;
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
            var tmp_1 = this.hfc_1;
            tmp_0.jfc_1 = (tmp_1 instanceof JsonPrimitive_1 ? tmp_1 : THROW_CCE()).q4u();
            var tmp_2 = this;
            tmp_2.kfc_1 = Companion_getInstance_34().ffb_1;
            var tmp_3 = this;
            tmp_3.lfc_1 = this.jfc_1;
            this.mfc_1 = this.kfc_1;
            this.nfc_1 = this.lfc_1;
            var tmp_4 = this;
            tmp_4.ofc_1 = this.mfc_1;
            this.pfc_1 = this.ofc_1;
            var tmp_5 = this;
            tmp_5.qfc_1 = this.pfc_1;
            var tmp_6 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.nfc_1);
            var body = this.gfc_1;
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
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
              this_0.e3q(new TypeInfo(tmp_7, tmp_8));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.l3k_1 = body;
                this_0.e3q(null);
              } else {
                this_0.l3k_1 = body;
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
                this_0.e3q(new TypeInfo(tmp_10, tmp_11));
              }
            }

            header(this_0, HttpHeaders_getInstance().q2y_1, Application_getInstance().y2v_1);
            tmp_6.rfc_1 = this_0;
            this.sfc_1 = this.qfc_1;
            this.tfc_1 = this.rfc_1;
            this.tfc_1.j3k_1 = Companion_getInstance_2().d32_1;
            var tmp_13 = this;
            tmp_13.ufc_1 = this.sfc_1;
            var tmp_14 = this;
            tmp_14.vfc_1 = this.tfc_1;
            this.wfc_1 = this.ufc_1;
            this.xfc_1 = this.vfc_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.xfc_1, this.wfc_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.yfc_1 = suspendResult;
            if (isSuccess(this.yfc_1.p37())) {
              var tmp_15 = this;
              tmp_15.afd_1 = Companion_instance;
              var tmp_16 = this;
              tmp_16.bfd_1 = this.yfc_1;
              this.cfd_1 = this.bfd_1;
              this.n9_1 = 3;
              var tmp_17 = this.cfd_1.q3n();
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
              suspendResult = tmp_17.t3m(new TypeInfo(tmp_18, tmp_19), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_21 = this;
              tmp_21.dfd_1 = Companion_instance;
              var tmp_22 = this;
              tmp_22.efd_1 = this.yfc_1;
              this.ffd_1 = this.efd_1;
              this.n9_1 = 2;
              var tmp_23 = this.ffd_1.q3n();
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
              suspendResult = tmp_23.t3m(new TypeInfo(tmp_24, tmp_25), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var ARGUMENT = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp8 = new WebhookPolicyException(ARGUMENT);
            var tmp_27 = this;
            this.dfd_1;
            tmp_27.zfc_1 = _Result___init__impl__xyqfz8(createFailure(tmp8));
            this.n9_1 = 4;
            continue $sm;
          case 3:
            var tmp5 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp_28 = this;
            this.afd_1;
            tmp_28.zfc_1 = _Result___init__impl__xyqfz8(tmp5);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return new Result(this.zfc_1);
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
    this.ifb_1 = 'webhook';
    this.jfb_1 = 'Sends the credential data to an webhook URL as HTTP POST, and returns the verified status based on the webhooks set status code (success = 200 - 299).';
    this.kfb_1 = setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]);
  }
  protoOf(WebhookPolicy).u2 = function () {
    return this.ifb_1;
  };
  protoOf(WebhookPolicy).tat = function () {
    return this.jfb_1;
  };
  protoOf(WebhookPolicy).iea = function () {
    return this.kfb_1;
  };
  protoOf(WebhookPolicy).gea = function (data, args, context, $completion) {
    var tmp = new $verifyCOROUTINE$14(this, data, args, context, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(WebhookPolicy).hea = function (data, args, context) {
    var tmp = WebhookPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function HolderBindingPolicy$Companion$$childSerializers$_anonymous__9o080v() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function Companion_30() {
    Companion_instance_34 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.gfd_1 = [null, null, lazy(tmp_0, HolderBindingPolicy$Companion$$childSerializers$_anonymous__9o080v)];
  }
  protoOf(Companion_30).m4u = function () {
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
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.hfd_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).ifd = function (encoder, value) {
    var tmp0_desc = this.hfd_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_35().gfd_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.jfd_1 === 'holder-binding')) {
      tmp1_output.w25(tmp0_desc, 0, value.jfd_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.kfd_1 === 'Verifies that issuer of the Verifiable Presentation (presenter) is also the subject of all Verifiable Credentials contained within.')) {
      tmp1_output.w25(tmp0_desc, 1, value.kfd_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.lfd_1, setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.lfd_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_22).v20 = function (encoder, value) {
    return this.ifd(encoder, value instanceof HolderBindingPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_22).w20 = function (decoder) {
    var tmp0_desc = this.hfd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_35().gfd_1;
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
    return HolderBindingPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_22).u20 = function () {
    return this.hfd_1;
  };
  protoOf($serializer_22).m2c = function () {
    var tmp0_cached = Companion_getInstance_35().gfd_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function HolderBindingPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_22().hfd_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.jfd_1 = 'holder-binding';
    else
      $this.jfd_1 = name;
    if (0 === (seen0 & 2))
      $this.kfd_1 = 'Verifies that issuer of the Verifiable Presentation (presenter) is also the subject of all Verifiable Credentials contained within.';
    else
      $this.kfd_1 = description;
    if (0 === (seen0 & 4))
      $this.lfd_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
    else
      $this.lfd_1 = supportedVCFormats;
    return $this;
  }
  function HolderBindingPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return HolderBindingPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(HolderBindingPolicy)));
  }
  function HolderBindingPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.ufd_1 = this$0;
    this.vfd_1 = $data;
    this.wfd_1 = $args;
    this.xfd_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HolderBindingPolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(HolderBindingPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.ufd_1.gea(this.vfd_1, this.wfd_1, this.xfd_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new HolderBindingPolicy$verifyAsync$slambda(this.ufd_1, this.vfd_1, this.wfd_1, this.xfd_1, completion);
  };
  function HolderBindingPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new HolderBindingPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function HolderBindingPolicy() {
    Companion_getInstance_35();
    CredentialWrapperValidatorPolicy.call(this);
    this.jfd_1 = 'holder-binding';
    this.kfd_1 = 'Verifies that issuer of the Verifiable Presentation (presenter) is also the subject of all Verifiable Credentials contained within.';
    this.lfd_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
  }
  protoOf(HolderBindingPolicy).u2 = function () {
    return this.jfd_1;
  };
  protoOf(HolderBindingPolicy).tat = function () {
    return this.kfd_1;
  };
  protoOf(HolderBindingPolicy).iea = function () {
    return this.lfd_1;
  };
  protoOf(HolderBindingPolicy).gea = function (data, args, context, $completion) {
    var presenterDid = get_jsonPrimitive(ensureNotNull(data.af('iss'))).q4u();
    var tmp0_safe_receiver = data.af('vp');
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No "vp" field in VP!');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var vp = tmp;
    var tmp2_safe_receiver = vp.af('verifiableCredential');
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
    var _iterator__ex2g4s = credentials.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = first(split(get_jsonPrimitive(ensureNotNull(JwsUtils_instance.decodeJws(get_jsonPrimitive(item).q4u()).payload.af('sub'))).q4u(), ['#']));
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
      var _iterator__ex2g4s_0 = credentialSubjects.p();
      while (_iterator__ex2g4s_0.q()) {
        var element = _iterator__ex2g4s_0.r();
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
  protoOf(HolderBindingPolicy).hea = function (data, args, context) {
    var tmp = HolderBindingPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function MaximumCredentialsPolicy$Companion$$childSerializers$_anonymous__jldmho() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function Companion_31() {
    Companion_instance_35 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.yfd_1 = [null, null, lazy(tmp_0, MaximumCredentialsPolicy$Companion$$childSerializers$_anonymous__jldmho)];
  }
  protoOf(Companion_31).m4u = function () {
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
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.zfd_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).afe = function (encoder, value) {
    var tmp0_desc = this.zfd_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_36().yfd_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.bfe_1 === 'maximum-credentials')) {
      tmp1_output.w25(tmp0_desc, 0, value.bfe_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.cfe_1 === 'Verifies that a maximum number of credentials in the Verifiable Presentation is not exceeded')) {
      tmp1_output.w25(tmp0_desc, 1, value.cfe_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.dfe_1, setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.dfe_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_23).v20 = function (encoder, value) {
    return this.afe(encoder, value instanceof MaximumCredentialsPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_23).w20 = function (decoder) {
    var tmp0_desc = this.zfd_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_36().yfd_1;
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
    return MaximumCredentialsPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_23).u20 = function () {
    return this.zfd_1;
  };
  protoOf($serializer_23).m2c = function () {
    var tmp0_cached = Companion_getInstance_36().yfd_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function MaximumCredentialsPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_23().zfd_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.bfe_1 = 'maximum-credentials';
    else
      $this.bfe_1 = name;
    if (0 === (seen0 & 2))
      $this.cfe_1 = 'Verifies that a maximum number of credentials in the Verifiable Presentation is not exceeded';
    else
      $this.cfe_1 = description;
    if (0 === (seen0 & 4))
      $this.dfe_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
    else
      $this.dfe_1 = supportedVCFormats;
    return $this;
  }
  function MaximumCredentialsPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return MaximumCredentialsPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(MaximumCredentialsPolicy)));
  }
  function MaximumCredentialsPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.mfe_1 = this$0;
    this.nfe_1 = $data;
    this.ofe_1 = $args;
    this.pfe_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MaximumCredentialsPolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(MaximumCredentialsPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.mfe_1.gea(this.nfe_1, this.ofe_1, this.pfe_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new MaximumCredentialsPolicy$verifyAsync$slambda(this.mfe_1, this.nfe_1, this.ofe_1, this.pfe_1, completion);
  };
  function MaximumCredentialsPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new MaximumCredentialsPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function MaximumCredentialsPolicy() {
    Companion_getInstance_36();
    CredentialWrapperValidatorPolicy.call(this);
    this.bfe_1 = 'maximum-credentials';
    this.cfe_1 = 'Verifies that a maximum number of credentials in the Verifiable Presentation is not exceeded';
    this.dfe_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
  }
  protoOf(MaximumCredentialsPolicy).u2 = function () {
    return this.bfe_1;
  };
  protoOf(MaximumCredentialsPolicy).tat = function () {
    return this.cfe_1;
  };
  protoOf(MaximumCredentialsPolicy).iea = function () {
    return this.dfe_1;
  };
  protoOf(MaximumCredentialsPolicy).gea = function (data, args, context, $completion) {
    var n = get_int(args instanceof JsonPrimitive_1 ? args : THROW_CCE());
    var tmp0_safe_receiver = get_jsonObject(ensureNotNull(data.af('vp'))).af('verifiableCredential');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonArray(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.count' call
      tmp = tmp1_safe_receiver.s();
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
  protoOf(MaximumCredentialsPolicy).hea = function (data, args, context) {
    var tmp = MaximumCredentialsPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function MinimumCredentialsPolicy$Companion$$childSerializers$_anonymous__wceeru() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function Companion_32() {
    Companion_instance_36 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qfe_1 = [null, null, lazy(tmp_0, MinimumCredentialsPolicy$Companion$$childSerializers$_anonymous__wceeru)];
  }
  protoOf(Companion_32).m4u = function () {
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
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.rfe_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).sfe = function (encoder, value) {
    var tmp0_desc = this.rfe_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_37().qfe_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.tfe_1 === 'minimum-credentials')) {
      tmp1_output.w25(tmp0_desc, 0, value.tfe_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.ufe_1 === 'Verifies that a minimum number of credentials are included in the Verifiable Presentation')) {
      tmp1_output.w25(tmp0_desc, 1, value.ufe_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.vfe_1, setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.vfe_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_24).v20 = function (encoder, value) {
    return this.sfe(encoder, value instanceof MinimumCredentialsPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_24).w20 = function (decoder) {
    var tmp0_desc = this.rfe_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_37().qfe_1;
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
    return MinimumCredentialsPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_24).u20 = function () {
    return this.rfe_1;
  };
  protoOf($serializer_24).m2c = function () {
    var tmp0_cached = Companion_getInstance_37().qfe_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function MinimumCredentialsPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_24().rfe_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.tfe_1 = 'minimum-credentials';
    else
      $this.tfe_1 = name;
    if (0 === (seen0 & 2))
      $this.ufe_1 = 'Verifies that a minimum number of credentials are included in the Verifiable Presentation';
    else
      $this.ufe_1 = description;
    if (0 === (seen0 & 4))
      $this.vfe_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
    else
      $this.vfe_1 = supportedVCFormats;
    return $this;
  }
  function MinimumCredentialsPolicy_init_$Create$(seen0, name, description, supportedVCFormats, serializationConstructorMarker) {
    return MinimumCredentialsPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, objectCreate(protoOf(MinimumCredentialsPolicy)));
  }
  function MinimumCredentialsPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation) {
    this.eff_1 = this$0;
    this.fff_1 = $data;
    this.gff_1 = $args;
    this.hff_1 = $context;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MinimumCredentialsPolicy$verifyAsync$slambda).fea = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(MinimumCredentialsPolicy$verifyAsync$slambda).ac = function ($completion) {
    return this.fea($completion);
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
            suspendResult = this.eff_1.gea(this.fff_1, this.gff_1, this.hff_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.up_1;
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
    return new MinimumCredentialsPolicy$verifyAsync$slambda(this.eff_1, this.fff_1, this.gff_1, this.hff_1, completion);
  };
  function MinimumCredentialsPolicy$verifyAsync$slambda_0(this$0, $data, $args, $context, resultContinuation) {
    var i = new MinimumCredentialsPolicy$verifyAsync$slambda(this$0, $data, $args, $context, resultContinuation);
    var l = function ($completion) {
      return i.fea($completion);
    };
    l.$arity = 0;
    return l;
  }
  function MinimumCredentialsPolicy() {
    Companion_getInstance_37();
    CredentialWrapperValidatorPolicy.call(this);
    this.tfe_1 = 'minimum-credentials';
    this.ufe_1 = 'Verifies that a minimum number of credentials are included in the Verifiable Presentation';
    this.vfe_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance()]);
  }
  protoOf(MinimumCredentialsPolicy).u2 = function () {
    return this.tfe_1;
  };
  protoOf(MinimumCredentialsPolicy).tat = function () {
    return this.ufe_1;
  };
  protoOf(MinimumCredentialsPolicy).iea = function () {
    return this.vfe_1;
  };
  protoOf(MinimumCredentialsPolicy).gea = function (data, args, context, $completion) {
    var n = get_int(args instanceof JsonPrimitive_1 ? args : THROW_CCE());
    var tmp0_safe_receiver = get_jsonObject(ensureNotNull(data.af('vp'))).af('verifiableCredential');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonArray(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.count' call
      tmp = tmp1_safe_receiver.s();
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
  protoOf(MinimumCredentialsPolicy).hea = function (data, args, context) {
    var tmp = MinimumCredentialsPolicy$verifyAsync$slambda_0(this, data, args, context, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function get_log() {
    _init_properties_PresentationDefinitionPolicy_kt__31e6yn();
    return log;
  }
  var log;
  function PresentationDefinitionPolicy$Companion$$childSerializers$_anonymous__e28cxh() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function checkSubjectIsIssuer($this, matchedCredentials, descriptorId) {
    var _iterator__ex2g4s = matchedCredentials.p();
    while (_iterator__ex2g4s.q()) {
      var cred = _iterator__ex2g4s.r();
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
        tmp_1.n6g(PresentationDefinitionPolicy$checkSubjectIsIssuer$lambda(descriptorId, issuer, subject));
        // Inline function 'kotlin.Companion.failure' call
        var exception = new PresentationDefinitionRelationalConstraintException(RelationalConstraintType_subject_is_issuer_getInstance(), 'Subject (' + subject + ') does not match issuer (' + issuer + ') for descriptor ' + descriptorId + '.');
        return _Result___init__impl__xyqfz8(createFailure(exception));
      }
    }
    var tmp_2 = get_log();
    tmp_2.l6g(PresentationDefinitionPolicy$checkSubjectIsIssuer$lambda_0(descriptorId));
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(Unit_instance);
  }
  function checkIsHolder($this, matchedCredentials, vpHolderDid, descriptorId) {
    var _iterator__ex2g4s = matchedCredentials.p();
    while (_iterator__ex2g4s.q()) {
      var cred = _iterator__ex2g4s.r();
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
        tmp_0.q6g(PresentationDefinitionPolicy$checkIsHolder$lambda(descriptorId, subject, vpHolderDid));
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = new PresentationDefinitionRelationalConstraintException(RelationalConstraintType_is_holder_getInstance(), 'Credential subject (' + subject + ') does not match VP holder (' + vpHolderDid + ') for descriptor ' + descriptorId + '.');
        return _Result___init__impl__xyqfz8(createFailure(exception_0));
      }
    }
    var tmp_1 = get_log();
    tmp_1.l6g(PresentationDefinitionPolicy$checkIsHolder$lambda_0(descriptorId));
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(Unit_instance);
  }
  function checkSameSubject($this, presentationDefinition, subjectDidsPerFieldId) {
    var tmp = get_log();
    tmp.l6g(PresentationDefinitionPolicy$checkSameSubject$lambda);
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = presentationDefinition.ie7_1.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp0_safe_receiver = element.ye6_1.pe6_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = tmp0_safe_receiver.p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          if (element_0.be6_1.equals(Directive_required_getInstance())) {
            var tmp_0 = get_log();
            tmp_0.l6g(PresentationDefinitionPolicy$checkSameSubject$lambda_0(element_0, element));
            // Inline function 'kotlin.collections.mapNotNull' call
            var tmp0 = element_0.ae6_1;
            // Inline function 'kotlin.collections.mapNotNullTo' call
            var destination = ArrayList_init_$Create$();
            // Inline function 'kotlin.collections.forEach' call
            var _iterator__ex2g4s_1 = tmp0.p();
            while (_iterator__ex2g4s_1.q()) {
              var element_1 = _iterator__ex2g4s_1.r();
              var tmp0_safe_receiver_0 = subjectDidsPerFieldId.m2(element_1);
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
            if (!(subjectSets.s() === element_0.ae6_1.s())) {
              // Inline function 'kotlin.collections.filter' call
              var tmp0_0 = element_0.ae6_1;
              // Inline function 'kotlin.collections.filterTo' call
              var destination_0 = ArrayList_init_$Create$();
              var _iterator__ex2g4s_2 = tmp0_0.p();
              while (_iterator__ex2g4s_2.q()) {
                var element_2 = _iterator__ex2g4s_2.r();
                // Inline function 'kotlin.collections.isNullOrEmpty' call
                var this_0 = subjectDidsPerFieldId.m2(element_2);
                if (this_0 == null || this_0.h()) {
                  destination_0.n(element_2);
                }
              }
              var missingFieldIds = destination_0;
              var tmp_3 = get_log();
              tmp_3.n6g(PresentationDefinitionPolicy$checkSameSubject$lambda_1(element_0, missingFieldIds));
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
                var _iterator__ex2g4s_3 = subjectSets.p();
                while (_iterator__ex2g4s_3.q()) {
                  var element_3 = _iterator__ex2g4s_3.r();
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
                tmp_5.n6g(PresentationDefinitionPolicy$checkSameSubject$lambda_2(element_0, distinctSubjects));
                // Inline function 'kotlin.Companion.failure' call
                var exception_0 = new PresentationDefinitionRelationalConstraintException(RelationalConstraintType_same_subject_getInstance(), 'Subjects did not match for fields: ' + toString(element_0.ae6_1) + '. Subjects found: ' + toString(distinctSubjects));
                return _Result___init__impl__xyqfz8(createFailure(exception_0));
              }
              var tmp_6 = get_log();
              tmp_6.l6g(PresentationDefinitionPolicy$checkSameSubject$lambda_3(element_0, firstSubjectSet));
            } else {
              var tmp_7 = get_log();
              tmp_7.n6g(PresentationDefinitionPolicy$checkSameSubject$lambda_4(element_0));
              // Inline function 'kotlin.Companion.failure' call
              var exception_1 = new PresentationDefinitionRelationalConstraintException(RelationalConstraintType_same_subject_getInstance(), 'No subjects found for required field_ids: ' + toString(element_0.ae6_1));
              return _Result___init__impl__xyqfz8(createFailure(exception_1));
            }
          }
        }
      }
    }
    var tmp_8 = get_log();
    tmp_8.l6g(PresentationDefinitionPolicy$checkSameSubject$lambda_5);
    // Inline function 'kotlin.Companion.success' call
    return _Result___init__impl__xyqfz8(Unit_instance);
  }
  function getIssuerDid($this, credential) {
    var tmp0_safe_receiver = credential.af('iss');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp3_safe_receiver = credential.af('vc');
      var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonObject(tmp3_safe_receiver);
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.af('issuer');
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
            var tmp1_safe_receiver_0 = tmp5_safe_receiver.af('id');
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
    var tmp0_safe_receiver = credential.af('sub');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp3_safe_receiver = credential.af('vc');
      var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonObject(tmp3_safe_receiver);
      var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.af('credentialSubject');
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : get_jsonObject(tmp5_safe_receiver);
      var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.af('id');
      var tmp8_safe_receiver = tmp7_safe_receiver == null ? null : get_jsonPrimitive(tmp7_safe_receiver);
      tmp = tmp8_safe_receiver == null ? null : get_contentOrNull(tmp8_safe_receiver);
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  }
  function getVpHolderDid($this, vpWrapper, format) {
    var tmp;
    switch (format == null ? -1 : format.t2_1) {
      case 4:
      case 7:
        var tmp1_safe_receiver = vpWrapper.af('vp');
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonObject(tmp1_safe_receiver);
        var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.af('holder');
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
      var tmp6_safe_receiver = vpWrapper.af('holder');
      var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonPrimitive(tmp6_safe_receiver);
      tmp_0 = tmp7_safe_receiver == null ? null : get_contentOrNull(tmp7_safe_receiver);
    } else {
      tmp_0 = tmp5_elvis_lhs;
    }
    var tmp8_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp8_elvis_lhs == null) {
      var tmp9_safe_receiver = vpWrapper.af('iss');
      var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : get_jsonPrimitive(tmp9_safe_receiver);
      tmp_1 = tmp10_safe_receiver == null ? null : get_contentOrNull(tmp10_safe_receiver);
    } else {
      tmp_1 = tmp8_elvis_lhs;
    }
    var tmp11_elvis_lhs = tmp_1;
    var tmp_2;
    if (tmp11_elvis_lhs == null) {
      var tmp12_safe_receiver = vpWrapper.af('vp');
      var tmp13_safe_receiver = tmp12_safe_receiver == null ? null : get_jsonObject(tmp12_safe_receiver);
      var tmp14_safe_receiver = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.af('holder');
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
    tmp.iff_1 = [null, null, lazy(tmp_0, PresentationDefinitionPolicy$Companion$$childSerializers$_anonymous__e28cxh)];
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
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.jff_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).kff = function (encoder, value) {
    var tmp0_desc = this.jff_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_38().iff_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.lff_1 === 'presentation-definition')) {
      tmp1_output.w25(tmp0_desc, 0, value.lff_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.mff_1 === 'Verifies a Verifiable Presentation against a Presentation Definition, including relational constraints.')) {
      tmp1_output.w25(tmp0_desc, 1, value.mff_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.nff_1, setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance(), VCFormat_ldp_vp_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.nff_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_25).v20 = function (encoder, value) {
    return this.kff(encoder, value instanceof PresentationDefinitionPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_25).w20 = function (decoder) {
    var tmp0_desc = this.jff_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_38().iff_1;
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
    return PresentationDefinitionPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_25).u20 = function () {
    return this.jff_1;
  };
  protoOf($serializer_25).m2c = function () {
    var tmp0_cached = Companion_getInstance_38().iff_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function PresentationDefinitionPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_25().jff_1);
    }
    CredentialWrapperValidatorPolicy_init_$Init$(seen0, serializationConstructorMarker, $this);
    if (0 === (seen0 & 1))
      $this.lff_1 = 'presentation-definition';
    else
      $this.lff_1 = name;
    if (0 === (seen0 & 2))
      $this.mff_1 = 'Verifies a Verifiable Presentation against a Presentation Definition, including relational constraints.';
    else
      $this.mff_1 = description;
    if (0 === (seen0 & 4))
      $this.nff_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance(), VCFormat_ldp_vp_getInstance()]);
    else
      $this.nff_1 = supportedVCFormats;
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
      return 'Checking required same_subject for fields: ' + toString($sameSubjectConstraint.ae6_1) + ' (related to descriptor ' + $inputDescriptor.te6_1 + ')';
    };
  }
  function PresentationDefinitionPolicy$checkSameSubject$lambda_1($sameSubjectConstraint, $missingFieldIds) {
    return function () {
      return 'same_subject constraint failed: Not all specified field_ids (' + toString($sameSubjectConstraint.ae6_1) + ') yielded subject DIDs. Missing: ' + toString($missingFieldIds);
    };
  }
  function PresentationDefinitionPolicy$checkSameSubject$lambda_2($sameSubjectConstraint, $distinctSubjects) {
    return function () {
      return 'same_subject constraint failed for fields ' + toString($sameSubjectConstraint.ae6_1) + '. Found differing subjects: ' + toString($distinctSubjects);
    };
  }
  function PresentationDefinitionPolicy$checkSameSubject$lambda_3($sameSubjectConstraint, $firstSubjectSet) {
    return function () {
      return 'same_subject constraint passed for fields ' + toString($sameSubjectConstraint.ae6_1) + ' with subject(s): ' + toString($firstSubjectSet);
    };
  }
  function PresentationDefinitionPolicy$checkSameSubject$lambda_4($sameSubjectConstraint) {
    return function () {
      return 'same_subject constraint for fields ' + toString($sameSubjectConstraint.ae6_1) + ' had no subjects to compare (this should have been caught earlier).';
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
      return 'Processing Input Descriptor: ' + $inputDescriptor.te6_1;
    };
  }
  function PresentationDefinitionPolicy$verify$lambda_1($inputDescriptor) {
    return function () {
      return 'Input descriptor ' + $inputDescriptor.te6_1 + ' did not match any credentials.';
    };
  }
  function PresentationDefinitionPolicy$verify$lambda_2($inputDescriptor, $matchedCredentials) {
    return function () {
      return 'Input descriptor ' + $inputDescriptor.te6_1 + ' matched ' + $matchedCredentials.s() + ' credential(s).';
    };
  }
  function PresentationDefinitionPolicy$verify$lambda_3($fieldId, $inputDescriptor) {
    return function () {
      return 'Could not extract subject DID for credential matching field ' + $fieldId + ' in descriptor ' + $inputDescriptor.te6_1;
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
    this.wff_1 = _this__u8e3s4;
    this.xff_1 = data;
    this.yff_1 = args;
    this.zff_1 = context;
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
            var tmp0_safe_receiver = this.zff_1.m2('presentationDefinition');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : JsonUtils_getInstance().toJsonElement(tmp0_safe_receiver);
            var tmp_1;
            if (tmp1_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var this_0 = Default_getInstance();
              var this_1 = this_0.w24();
              var this_2 = serializer(this_1, createKType(getKClass(PresentationDefinition), arrayOf([]), false));
              tmp_1 = this_0.g4s(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), tmp1_safe_receiver);
            }

            var tmp2_elvis_lhs = tmp_1;
            var tmp_2;
            if (tmp2_elvis_lhs == null) {
              var exception = IllegalArgumentException_init_$Create$('PresentationDefinition missing in context');
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            } else {
              tmp_2 = tmp2_elvis_lhs;
            }

            tmp_0.afg_1 = tmp_2;
            if (!!this.afg_1.ie7_1.h()) {
              var message = 'PresentationDefinition must contain at least one input descriptor.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            }

            var tmp_3 = this;
            var tmp3_safe_receiver = this.zff_1.m2('presentationSubmission');
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : JsonUtils_getInstance().toJsonElement(tmp3_safe_receiver);
            var tmp_4;
            if (tmp4_safe_receiver == null) {
              tmp_4 = null;
            } else {
              var this_3 = Default_getInstance();
              var this_4 = this_3.w24();
              var this_5 = serializer(this_4, createKType(getKClass(PresentationSubmission), arrayOf([]), false));
              tmp_4 = this_3.g4s(isInterface(this_5, KSerializer) ? this_5 : THROW_CCE(), tmp4_safe_receiver);
            }

            var tmp5_elvis_lhs = tmp_4;
            var tmp_5;
            if (tmp5_elvis_lhs == null) {
              var exception_0 = IllegalArgumentException_init_$Create$('PresentationSubmission missing in context');
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_0)));
            } else {
              tmp_5 = tmp5_elvis_lhs;
            }

            tmp_3.bfg_1 = tmp_5;
            var tmp_6 = this;
            var tmp6_safe_receiver = firstOrNull_0(this.bfg_1.ge9_1);
            var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.ye8_1;
            var tmp_7;
            if (tmp7_safe_receiver == null) {
              tmp_7 = null;
            } else {
              var this_6 = Default_getInstance();
              var this_7 = this_6.w24();
              var this_8 = serializer(this_7, createKType(getKClass(VCFormat), arrayOf([]), false));
              tmp_7 = this_6.g4s(isInterface(this_8, KSerializer) ? this_8 : THROW_CCE(), tmp7_safe_receiver);
            }

            tmp_6.cfg_1 = tmp_7;
            var tmp_8 = this;
            var tmp8_elvis_lhs = getVpHolderDid(this.wff_1, this.xff_1, this.cfg_1);
            var tmp_9;
            if (tmp8_elvis_lhs == null) {
              var exception_1 = IllegalArgumentException_init_$Create$('Could not determine Holder DID from the Verifiable Presentation');
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_1)));
            } else {
              tmp_9 = tmp8_elvis_lhs;
            }

            tmp_8.dfg_1 = tmp_9;
            var tmp_10 = get_log();
            tmp_10.n6g(PresentationDefinitionPolicy$verify$lambda(this.dfg_1, this.cfg_1));
            var tmp_11 = this;
            var tmp_12;
            var tmp_13;
            if (equals(this.cfg_1, VCFormat_sd_jwt_vc_getInstance())) {
              var this_9 = this.xff_1;
              tmp_13 = !(isInterface(this_9, KtMap) ? this_9 : THROW_CCE()).k2('vp');
            } else {
              tmp_13 = false;
            }

            if (tmp_13) {
              tmp_12 = flowOf(this.xff_1);
            } else {
              var tmp9_safe_receiver = this.xff_1.af('vp');
              var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : get_jsonObject(tmp9_safe_receiver);
              var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.af('verifiableCredential');
              var tmp12_safe_receiver = tmp11_safe_receiver == null ? null : get_jsonArray(tmp11_safe_receiver);
              var tmp_14;
              if (tmp12_safe_receiver == null) {
                tmp_14 = null;
              } else {
                var destination = ArrayList_init_$Create$();
                var _iterator__ex2g4s = tmp12_safe_receiver.p();
                while (_iterator__ex2g4s.q()) {
                  var element = _iterator__ex2g4s.r();
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

            tmp_11.efg_1 = tmp_12;
            var tmp_16 = this;
            var tmp18 = this.afg_1.ie7_1;
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
              var _iterator__ex2g4s_0 = tmp18.p();
              while (_iterator__ex2g4s_0.q()) {
                var element_0 = _iterator__ex2g4s_0.r();
                var tmp0_safe_receiver_2 = element_0.ye6_1.pe6_1;
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
            tmp_16.ffg_1 = tmp$ret$0;
            var tmp_19 = this;
            tmp_19.gfg_1 = LinkedHashMap_init_$Create$_0();
            this.hfg_1 = true;
            this.ifg_1 = this.afg_1.ie7_1.p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.ifg_1.q()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.jfg_1 = this.ifg_1.r();
            var tmp_20 = get_log();
            tmp_20.l6g(PresentationDefinitionPolicy$verify$lambda_0(this.jfg_1));
            this.n9_1 = 2;
            suspendResult = toList(PresentationDefinitionParser_instance.je7(this.efg_1, this.jfg_1), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var matchedCredentials = suspendResult;
            if (matchedCredentials.h()) {
              var tmp_21 = get_log();
              tmp_21.n6g(PresentationDefinitionPolicy$verify$lambda_1(this.jfg_1));
              this.hfg_1 = false;
              this.n9_1 = 1;
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 3:
            var tmp_22 = get_log();
            tmp_22.l6g(PresentationDefinitionPolicy$verify$lambda_2(this.jfg_1, matchedCredentials));
            var tmp14_safe_receiver = this.jfg_1.ye6_1.ne6_1;
            if ((tmp14_safe_receiver == null ? null : equals_0(tmp14_safe_receiver, 'required', true)) === true) {
              var this_10 = checkSubjectIsIssuer(this.wff_1, matchedCredentials, this.jfg_1.te6_1);
              var exception_2 = Result__exceptionOrNull_impl_p6xea9(this_10);
              if (exception_2 == null) {
                var tmp_23 = _Result___get_value__impl__bjfvqg(this_10);
                if (!(tmp_23 == null ? true : !(tmp_23 == null)))
                  THROW_CCE();
              } else {
                return new Result(_Result___init__impl__xyqfz8(createFailure(exception_2)));
              }
            }

            var tmp15_safe_receiver = this.jfg_1.ye6_1.oe6_1;
            if (tmp15_safe_receiver == null)
              null;
            else {
              var _iterator__ex2g4s_1 = tmp15_safe_receiver.p();
              while (_iterator__ex2g4s_1.q()) {
                var element_1 = _iterator__ex2g4s_1.r();
                if (element_1.be6_1.equals(Directive_required_getInstance())) {
                  var this_11 = checkIsHolder(this.wff_1, matchedCredentials, this.dfg_1, this.jfg_1.te6_1);
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

            if (this.ffg_1) {
              var tmp16_safe_receiver = this.jfg_1.ye6_1.me6_1;
              var tmp_25;
              if (tmp16_safe_receiver == null) {
                tmp_25 = null;
              } else {
                var destination_0 = ArrayList_init_$Create$();
                var _iterator__ex2g4s_2 = tmp16_safe_receiver.p();
                while (_iterator__ex2g4s_2.q()) {
                  var element_2 = _iterator__ex2g4s_2.r();
                  if (!(element_2.pe5_1 == null)) {
                    destination_0.n(element_2);
                  }
                }
                tmp_25 = destination_0;
              }
              var tmp17_safe_receiver = tmp_25;
              if (tmp17_safe_receiver == null)
                null;
              else {
                var _iterator__ex2g4s_3 = tmp17_safe_receiver.p();
                while (_iterator__ex2g4s_3.q()) {
                  var element_3 = _iterator__ex2g4s_3.r();
                  var fieldId = ensureNotNull(element_3.pe5_1);
                  var _iterator__ex2g4s_4 = matchedCredentials.p();
                  while (_iterator__ex2g4s_4.q()) {
                    var element_4 = _iterator__ex2g4s_4.r();
                    var tmp0_safe_receiver_3 = getSubjectDid(this.wff_1, element_4);
                    var tmp_26;
                    if (tmp0_safe_receiver_3 == null) {
                      tmp_26 = null;
                    } else {
                      var this_12 = this.gfg_1;
                      var value = this_12.m2(fieldId);
                      var tmp_27;
                      if (value == null) {
                        var answer = LinkedHashSet_init_$Create$();
                        this_12.p2(fieldId, answer);
                        tmp_27 = answer;
                      } else {
                        tmp_27 = value;
                      }
                      tmp_26 = tmp_27.n(tmp0_safe_receiver_3);
                    }
                    if (tmp_26 == null) {
                      var tmp_28 = get_log();
                      tmp_28.n6g(PresentationDefinitionPolicy$verify$lambda_3(fieldId, this.jfg_1));
                    }
                  }
                }
              }
            }

            this.n9_1 = 1;
            continue $sm;
          case 4:
            if (this.hfg_1 && this.ffg_1) {
              var this_13 = checkSameSubject(this.wff_1, this.afg_1, this.gfg_1);
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
            if (this.hfg_1) {
              var tmp_31 = get_log();
              tmp_31.o6g(PresentationDefinitionPolicy$verify$lambda_4);
              var tmp18_subject = this.cfg_1;
              var tmp_32;
              if ((tmp18_subject == null ? -1 : tmp18_subject.t2_1) === 9) {
                var tmp19_safe_receiver = this.xff_1.af('vct');
                var tmp20_safe_receiver = tmp19_safe_receiver == null ? null : get_jsonPrimitive(tmp19_safe_receiver);
                tmp_32 = listOfNotNull(tmp20_safe_receiver == null ? null : tmp20_safe_receiver.q4u());
              } else {
                var tmp21_safe_receiver = this.xff_1.af('vp');
                var tmp22_safe_receiver = tmp21_safe_receiver == null ? null : get_jsonObject(tmp21_safe_receiver);
                var tmp23_safe_receiver = tmp22_safe_receiver == null ? null : tmp22_safe_receiver.af('verifiableCredential');
                var tmp24_safe_receiver = tmp23_safe_receiver == null ? null : get_jsonArray(tmp23_safe_receiver);
                var tmp_33;
                if (tmp24_safe_receiver == null) {
                  tmp_33 = null;
                } else {
                  var destination_1 = ArrayList_init_$Create$();
                  var _iterator__ex2g4s_5 = tmp24_safe_receiver.p();
                  while (_iterator__ex2g4s_5.q()) {
                    var element_5 = _iterator__ex2g4s_5.r();
                    var tmp0_safe_receiver_4 = get_contentOrNull(get_jsonPrimitive(element_5));
                    var tmp_34;
                    if (tmp0_safe_receiver_4 == null) {
                      tmp_34 = null;
                    } else {
                      tmp_34 = Companion_getInstance_0().parse(tmp0_safe_receiver_4);
                    }
                    var tmp1_safe_receiver_1 = tmp_34;
                    var tmp2_safe_receiver = tmp1_safe_receiver_1 == null ? null : tmp1_safe_receiver_1.zzz_unused_fullPayload;
                    var tmp3_safe_receiver_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.af('vc');
                    var tmp4_safe_receiver_0 = tmp3_safe_receiver_0 == null ? null : get_jsonObject(tmp3_safe_receiver_0);
                    var tmp5_safe_receiver = tmp4_safe_receiver_0 == null ? null : tmp4_safe_receiver_0.af('type');
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
              tmp_35.n6g(PresentationDefinitionPolicy$verify$lambda_5);
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
    this.lff_1 = 'presentation-definition';
    this.mff_1 = 'Verifies a Verifiable Presentation against a Presentation Definition, including relational constraints.';
    this.nff_1 = setOf([VCFormat_jwt_vp_getInstance(), VCFormat_jwt_vp_json_getInstance(), VCFormat_ldp_vp_getInstance()]);
  }
  protoOf(PresentationDefinitionPolicy).u2 = function () {
    return this.lff_1;
  };
  protoOf(PresentationDefinitionPolicy).tat = function () {
    return this.mff_1;
  };
  protoOf(PresentationDefinitionPolicy).iea = function () {
    return this.nff_1;
  };
  protoOf(PresentationDefinitionPolicy).gea = function (data, args, context, $completion) {
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
      log = tmp.w6g(log$lambda);
    }
  }
  function RevocationPolicy$Companion$$childSerializers$_anonymous__rtty6e() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function Companion_34() {
    Companion_instance_38 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.kfg_1 = [null, null, lazy(tmp_0, RevocationPolicy$Companion$$childSerializers$_anonymous__rtty6e)];
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
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.lfg_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).mfg = function (encoder, value) {
    var tmp0_desc = this.lfg_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_39().kfg_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.name === 'revoked-status-list')) {
      tmp1_output.w25(tmp0_desc, 0, value.name);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.description === 'Verifies Credential Status')) {
      tmp1_output.w25(tmp0_desc, 1, value.description);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.supportedVCFormats, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.supportedVCFormats);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_26).v20 = function (encoder, value) {
    return this.mfg(encoder, value instanceof RevocationPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_26).w20 = function (decoder) {
    var tmp0_desc = this.lfg_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_39().kfg_1;
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
    return RevocationPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_26).u20 = function () {
    return this.lfg_1;
  };
  protoOf($serializer_26).m2c = function () {
    var tmp0_cached = Companion_getInstance_39().kfg_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function RevocationPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_26().lfg_1);
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
  protoOf(RevocationPolicy).gea = function (data, args, context, $completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  function JWTCryptoProviderManager() {
  }
  protoOf(JWTCryptoProviderManager).yf5 = function (keys) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  var JWTCryptoProviderManager_instance;
  function JWTCryptoProviderManager_getInstance() {
    return JWTCryptoProviderManager_instance;
  }
  function StatusPolicy$Companion$$childSerializers$_anonymous__j2ob6i() {
    return new LinkedHashSetSerializer(Companion_getInstance_1().m4u());
  }
  function Companion_35() {
    Companion_instance_39 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qfg_1 = [null, null, lazy(tmp_0, StatusPolicy$Companion$$childSerializers$_anonymous__j2ob6i)];
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
    tmp0_serialDesc.x2b('name', true);
    tmp0_serialDesc.x2b('description', true);
    tmp0_serialDesc.x2b('supportedVCFormats', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.rfg_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).sfg = function (encoder, value) {
    var tmp0_desc = this.rfg_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_40().qfg_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.name === 'credential-status')) {
      tmp1_output.w25(tmp0_desc, 0, value.name);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.description === 'Verifies Credential Status')) {
      tmp1_output.w25(tmp0_desc, 1, value.description);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals(value.supportedVCFormats, setOf([VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_sd_jwt_vc_getInstance()]))) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.supportedVCFormats);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_27).v20 = function (encoder, value) {
    return this.sfg(encoder, value instanceof StatusPolicy ? value : THROW_CCE());
  };
  protoOf($serializer_27).w20 = function (decoder) {
    var tmp0_desc = this.rfg_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_40().qfg_1;
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
    return StatusPolicy_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_27).u20 = function () {
    return this.rfg_1;
  };
  protoOf($serializer_27).m2c = function () {
    var tmp0_cached = Companion_getInstance_40().qfg_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].b1()];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function StatusPolicy_init_$Init$(seen0, name, description, supportedVCFormats, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_27().rfg_1);
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
  protoOf(StatusPolicy).gea = function (data, args, context, $completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  function PresentationVerificationUtils() {
  }
  protoOf(PresentationVerificationUtils).generatePolicyRequest = function (jsonString) {
    return Companion_getInstance_19().parsePolicyRequests(get_jsonArray(Default_getInstance().h4s(jsonString)));
  };
  protoOf(PresentationVerificationUtils).generateSpecificPolicyRequest = function (jsonString) {
    // Inline function 'kotlin.collections.mapValues' call
    var this_0 = get_jsonObject(Default_getInstance().h4s(jsonString));
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$(mapCapacity(this_0.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_0.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp = element.a1();
      var tmp$ret$1 = Companion_getInstance_19().parsePolicyRequests(get_jsonArray(element.b1()));
      destination.p2(tmp, tmp$ret$1);
    }
    return destination;
  };
  var PresentationVerificationUtils_instance;
  function PresentationVerificationUtils_getInstance() {
    return PresentationVerificationUtils_instance;
  }
  //region block: post-declaration
  defineProp(protoOf(VerificationPolicy), 'name', function () {
    return this.u2();
  });
  defineProp(protoOf(VerificationPolicy), 'description', function () {
    return this.tat();
  });
  defineProp(protoOf(VerificationPolicy), 'supportedVCFormats', function () {
    return this.iea();
  });
  defineProp(protoOf(SerializableRuntimeException), 'message', function () {
    return this.ta();
  });
  protoOf($serializer).n2c = typeParametersSerializers;
  protoOf($serializer_0).n2c = typeParametersSerializers;
  protoOf($serializer_1).n2c = typeParametersSerializers;
  protoOf($serializer_2).n2c = typeParametersSerializers;
  protoOf($serializer_3).n2c = typeParametersSerializers;
  defineProp(protoOf(RelationalConstraintType), 'name', protoOf(RelationalConstraintType).u2);
  defineProp(protoOf(RelationalConstraintType), 'ordinal', protoOf(RelationalConstraintType).v2);
  protoOf($serializer_4).n2c = typeParametersSerializers;
  protoOf($serializer_5).n2c = typeParametersSerializers;
  protoOf($serializer_6).n2c = typeParametersSerializers;
  protoOf($serializer_7).n2c = typeParametersSerializers;
  protoOf($serializer_8).n2c = typeParametersSerializers;
  defineProp(protoOf(DynamicPolicyException), 'message', function () {
    return this.ta();
  });
  protoOf($serializer_9).n2c = typeParametersSerializers;
  protoOf($serializer_10).n2c = typeParametersSerializers;
  protoOf($serializer_11).n2c = typeParametersSerializers;
  protoOf($serializer_12).n2c = typeParametersSerializers;
  protoOf($serializer_13).n2c = typeParametersSerializers;
  protoOf($serializer_14).n2c = typeParametersSerializers;
  protoOf($serializer_15).n2c = typeParametersSerializers;
  protoOf($serializer_16).n2c = typeParametersSerializers;
  protoOf($serializer_17).n2c = typeParametersSerializers;
  protoOf($serializer_18).n2c = typeParametersSerializers;
  protoOf($serializer_19).n2c = typeParametersSerializers;
  protoOf($serializer_20).n2c = typeParametersSerializers;
  protoOf($serializer_21).n2c = typeParametersSerializers;
  protoOf($serializer_22).n2c = typeParametersSerializers;
  protoOf($serializer_23).n2c = typeParametersSerializers;
  protoOf($serializer_24).n2c = typeParametersSerializers;
  protoOf($serializer_25).n2c = typeParametersSerializers;
  protoOf($serializer_26).n2c = typeParametersSerializers;
  protoOf($serializer_27).n2c = typeParametersSerializers;
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
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  kotlin_id_walt_crypto_waltid_crypto.$jsExportAll$(_);
  kotlin_id_walt_did_waltid_did.$jsExportAll$(_);
  kotlin_id_walt_sdjwt_waltid_sdjwt.$jsExportAll$(_);
  kotlin_id_walt_credentials_waltid_w3c_credentials.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=verification-policies.js.map
