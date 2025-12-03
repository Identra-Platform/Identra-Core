(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'canonicalize', './kotlin-kotlin-stdlib.js', './crypto.js', './kotlin-logging.js', './kotlinx-coroutines-core.js', './kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js', './ktor-ktor-client-ktor-client-core.js', './ktor-ktor-client-ktor-client-plugins-ktor-client-logging.js', './ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js', './ktor-ktor-http.js', './ktor-ktor-utils.js', './ktor-ktor-io.js', './urlencoder-urlencoder-lib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('canonicalize'), require('./kotlin-kotlin-stdlib.js'), require('./crypto.js'), require('./kotlin-logging.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./ktor-ktor-client-ktor-client-plugins-ktor-client-logging.js'), require('./ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-io.js'), require('./urlencoder-urlencoder-lib.js'));
  else {
    if (typeof canonicalize === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'canonicalize' was not found. Please, check whether 'canonicalize' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof crypto === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'crypto' was not found. Please, check whether 'crypto' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' was not found. Please, check whether 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging' was not found. Please, check whether 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    if (typeof globalThis['urlencoder-urlencoder-lib'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.did:waltid-did'. Its dependency 'urlencoder-urlencoder-lib' was not found. Please, check whether 'urlencoder-urlencoder-lib' is loaded prior to 'id.walt.did:waltid-did'.");
    }
    globalThis['id.walt.did:waltid-did'] = factory(typeof globalThis['id.walt.did:waltid-did'] === 'undefined' ? {} : globalThis['id.walt.did:waltid-did'], canonicalize, globalThis['kotlin-kotlin-stdlib'], crypto, globalThis['kotlin-logging'], globalThis['kotlinx-coroutines-core'], globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'], globalThis['ktor-ktor-client-ktor-client-core'], globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'], globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-utils'], globalThis['ktor-ktor-io'], globalThis['urlencoder-urlencoder-lib']);
  }
}(function (_, canonicalize, kotlin_kotlin, kotlin_id_walt_crypto_waltid_crypto, kotlin_io_github_oshai_kotlin_logging, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_client_logging, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_io, kotlin_net_thauvin_erik_urlencoder_urlencoder_lib) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.wc;
  var initMetadataForInterface = kotlin_kotlin.$_$.wb;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var values = kotlin_id_walt_crypto_waltid_crypto.$_$.k;
  var equals = kotlin_kotlin.$_$.fe;
  var KeyType_Ed25519_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.a;
  var toBoolean = kotlin_kotlin.$_$.rf;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.j3;
  var toString = kotlin_kotlin.$_$.ni;
  var CoroutineImpl = kotlin_kotlin.$_$.wa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.fa;
  var initMetadataForLambda = kotlin_kotlin.$_$.xb;
  var VOID = kotlin_kotlin.$_$.j;
  var Result = kotlin_kotlin.$_$.gh;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ub;
  var setOf = kotlin_kotlin.$_$.d9;
  var throwOnFailure = kotlin_kotlin.$_$.li;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.m3;
  var THROW_CCE = kotlin_kotlin.$_$.ih;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.l3;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var reversed = kotlin_kotlin.$_$.c9;
  var emptyMap = kotlin_kotlin.$_$.p7;
  var NotImplementedError = kotlin_kotlin.$_$.eh;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var isInterface = kotlin_kotlin.$_$.hc;
  var $runInAsync$ = kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.yb;
  var defineProp = kotlin_kotlin.$_$.lb;
  var listOf = kotlin_kotlin.$_$.p8;
  var removePrefix = kotlin_kotlin.$_$.xe;
  var substringBefore = kotlin_kotlin.$_$.nf;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var substringBefore_0 = kotlin_kotlin.$_$.of;
  var substringAfter = kotlin_kotlin.$_$.lf;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.k1;
  var ensureNotNull = kotlin_kotlin.$_$.ai;
  var initMetadataForCompanion = kotlin_kotlin.$_$.tb;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var objectCreate = kotlin_kotlin.$_$.vc;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var getStringHashCode = kotlin_kotlin.$_$.qb;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.t6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.o;
  var lazy = kotlin_kotlin.$_$.gi;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.wh;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.v;
  var toMap = kotlin_kotlin.$_$.t9;
  var toString_0 = kotlin_kotlin.$_$.ad;
  var hashCode = kotlin_kotlin.$_$.rb;
  var equals_0 = kotlin_kotlin.$_$.mb;
  var JsonElementSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var JsonUtils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.f;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var KtMap = kotlin_kotlin.$_$.g6;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.r;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.w;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.u;
  var listOf_0 = kotlin_kotlin.$_$.o8;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var THROW_IAE = kotlin_kotlin.$_$.jh;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var Enum = kotlin_kotlin.$_$.xg;
  var isBlank = kotlin_kotlin.$_$.me;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var KtSet = kotlin_kotlin.$_$.l6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.l5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var first = kotlin_kotlin.$_$.y7;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var put = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.x;
  var JsonContentPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var Companion_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var Companion_instance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var createAnnotatedEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var enumEntries = kotlin_kotlin.$_$.ya;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ii;
  var Pair = kotlin_kotlin.$_$.fh;
  var plus = kotlin_kotlin.$_$.x8;
  var Companion_instance_2 = kotlin_kotlin.$_$.r5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i3;
  var createFailure = kotlin_kotlin.$_$.zh;
  var setOf_0 = kotlin_kotlin.$_$.e9;
  var mapCapacity = kotlin_kotlin.$_$.q8;
  var coerceAtLeast = kotlin_kotlin.$_$.ed;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var toSet = kotlin_kotlin.$_$.z9;
  var println = kotlin_kotlin.$_$.za;
  var get_EmptyContinuation = kotlin_kotlin.$_$.ka;
  var get_ContentNegotiation = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var defaultRequest = kotlin_io_ktor_ktor_client_core.$_$.m;
  var get_Logging = kotlin_io_ktor_ktor_client_logging.$_$.e;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var header = kotlin_io_ktor_ktor_client_core.$_$.s;
  var Companion_instance_3 = kotlin_io_ktor_ktor_client_logging.$_$.c;
  var get_DEFAULT = kotlin_io_ktor_ktor_client_logging.$_$.d;
  var LogLevel_ALL_getInstance = kotlin_io_ktor_ktor_client_logging.$_$.a;
  var lazyOf = kotlin_kotlin.$_$.fi;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var url = kotlin_io_ktor_ktor_client_core.$_$.u;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.x;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.a1;
  var to = kotlin_kotlin.$_$.pi;
  var mapOf = kotlin_kotlin.$_$.r8;
  var emptyList = kotlin_kotlin.$_$.o7;
  var mapOf_0 = kotlin_kotlin.$_$.s8;
  var Companion_getInstance_0 = kotlin_id_walt_crypto_waltid_crypto.$_$.c;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var flatten = kotlin_kotlin.$_$.z7;
  var emptySet = kotlin_kotlin.$_$.q7;
  var UuidUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.i;
  var KtList = kotlin_kotlin.$_$.d6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var LogLevel_BODY_getInstance = kotlin_io_ktor_ktor_client_logging.$_$.b;
  var Companion_instance_4 = kotlin_id_walt_crypto_waltid_crypto.$_$.b;
  var KeyType = kotlin_id_walt_crypto_waltid_crypto.$_$.l;
  var toDoubleOrNull = kotlin_kotlin.$_$.tf;
  var toLongOrNull = kotlin_kotlin.$_$.zf;
  var Long = kotlin_kotlin.$_$.ch;
  var toIntOrNull = kotlin_kotlin.$_$.wf;
  var toHexString = kotlin_kotlin.$_$.vf;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.a;
  var first_0 = kotlin_kotlin.$_$.x7;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.t1;
  var contentType = kotlin_io_ktor_ktor_http.$_$.j1;
  var Base64Utils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.d;
  var Default_getInstance_0 = kotlin_kotlin.$_$.c5;
  var isByteArray = kotlin_kotlin.$_$.bc;
  var JsonClassDiscriminator = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var PolymorphicModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.f1;
  var MultiBaseUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.g;
  var JsonCanonicalizationUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.e;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.w3;
  var MultiCodecUtils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.h;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var contentEquals = kotlin_kotlin.$_$.v6;
  var UInt__hashCode_impl_z2mhuw = kotlin_kotlin.$_$.z3;
  var contentHashCode = kotlin_kotlin.$_$.w6;
  var UInt = kotlin_kotlin.$_$.oh;
  var charSequenceLength = kotlin_kotlin.$_$.ib;
  var UrlEncoderUtil_getInstance = kotlin_net_thauvin_erik_urlencoder_urlencoder_lib.$_$.a;
  var replace = kotlin_kotlin.$_$.bf;
  var split = kotlin_kotlin.$_$.ff;
  var joinToString = kotlin_kotlin.$_$.h8;
  var toMutableMap = kotlin_kotlin.$_$.x9;
  var get_HttpTimeout = kotlin_io_ktor_ktor_client_core.$_$.l;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var firstOrNull = kotlin_kotlin.$_$.v7;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.k3;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.r;
  var stackTraceToString = kotlin_kotlin.$_$.ki;
  var RuntimeException_init_$Create$_0 = kotlin_kotlin.$_$.q2;
  var Exception = kotlin_kotlin.$_$.zg;
  var contains = kotlin_kotlin.$_$.xd;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.d1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var decodeToString = kotlin_kotlin.$_$.zd;
  var newThrowable = kotlin_kotlin.$_$.pc;
  var drop = kotlin_kotlin.$_$.m7;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.h2;
  var startsWith = kotlin_kotlin.$_$.gf;
  var chunked = kotlin_kotlin.$_$.ud;
  var toInt = kotlin_kotlin.$_$.yf;
  var toByte = kotlin_kotlin.$_$.xc;
  var toByteArray_0 = kotlin_kotlin.$_$.m9;
  var decodeBase58 = kotlin_id_walt_crypto_waltid_crypto.$_$.m;
  var get_entries = kotlin_id_walt_crypto_waltid_crypto.$_$.j;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(DidManager, 'DidManager');
  initMetadataForLambda(DidService$minimalInitAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidService$registerAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidService$initAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidService$updateResolversForMethodsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidService$registerDefaultDidMethodByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidService$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidService$resolveToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidService$updateRegistrarsForMethodsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidService$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($initCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($minimalInitCOROUTINE$1, CoroutineImpl);
  initMetadataForCoroutine($updateResolversForMethodsCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($updateRegistrarsForMethodsCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($registerDefaultDidMethodByKeyCOROUTINE$4, CoroutineImpl);
  initMetadataForObject(DidService, 'DidService', VOID, VOID, VOID, [2, 0, 1, 3]);
  initMetadataForObject(DidUtils, 'DidUtils');
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(VerificationMethod, 'VerificationMethod', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DidCheqdDocument, 'DidCheqdDocument', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DidDocument, 'DidDocument', VOID, VOID, [KtMap], VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(VerificationMethod_0, 'VerificationMethod', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DidEbsiDocument, 'DidEbsiDocument', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(VerificationMethod_1, 'VerificationMethod', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DidJwkDocument, 'DidJwkDocument', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(VerificationMethod_2, 'VerificationMethod', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DidKeyDocument, 'DidKeyDocument', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(VerificationMethod_3, 'VerificationMethod', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DidWebDocument, 'DidWebDocument', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForCompanion(Companion_10, VOID, [SerializerFactory]);
  initMetadataForClass(RegisteredServiceType, 'RegisteredServiceType', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_12});
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(Service, 'Service', VOID, VOID, VOID, VOID, VOID, {0: ServiceSerializer_getInstance});
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(ServiceMap, 'ServiceMap', VOID, VOID, VOID, VOID, VOID, {0: ServiceMapSerializer_getInstance});
  initMetadataForObject(ServiceSerializer, 'ServiceSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ServiceMapSerializer, 'ServiceMapSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(ServiceEndpoint, 'ServiceEndpoint', VOID, VOID, VOID, VOID, VOID, {0: ServiceEndpointBaseSerializer_getInstance});
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(ServiceEndpointURL, 'ServiceEndpointURL', VOID, ServiceEndpoint, VOID, VOID, VOID, {0: ServiceEndpointURLSerializer_getInstance});
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(ServiceEndpointObject, 'ServiceEndpointObject', VOID, ServiceEndpoint, VOID, VOID, VOID, {0: ServiceEndpointObjectSerializer_getInstance});
  initMetadataForObject(ServiceEndpointBaseSerializer, 'ServiceEndpointBaseSerializer', VOID, JsonContentPolymorphicSerializer);
  initMetadataForObject(ServiceEndpointURLSerializer, 'ServiceEndpointURLSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ServiceEndpointObjectSerializer, 'ServiceEndpointObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_16, VOID, [SerializerFactory]);
  initMetadataForClass(VerificationMaterialType, 'VerificationMaterialType', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_18});
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(VerificationMethod_4, 'VerificationMethod', VOID, VOID, VOID, VOID, VOID, {0: VerificationMethodSerializer_getInstance});
  initMetadataForObject(VerificationMethodSerializer, 'VerificationMethodSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_18, VOID, [SerializerFactory]);
  initMetadataForClass(VerificationMethodType, 'VerificationMethodType', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_20});
  initMetadataForObject(Builder, 'Builder');
  initMetadataForClass(VerificationRelationship, 'VerificationRelationship', VOID, VOID, VOID, VOID, VOID, {0: VerificationRelationshipSerializer_getInstance});
  initMetadataForObject(VerificationRelationshipSerializer, 'VerificationRelationshipSerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_19, VOID, [SerializerFactory]);
  initMetadataForClass(VerificationRelationshipType, 'VerificationRelationshipType', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_21});
  initMetadataForLambda(DidRegistrar$createAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidRegistrar$getSupportedMethodsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidRegistrar$createByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidRegistrar$updateAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidRegistrar$deleteAsync$slambda, CoroutineImpl, VOID, [0]);
  function createAsync(options) {
    var tmp = DidRegistrar$createAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function getSupportedMethodsAsync() {
    var tmp = DidRegistrar$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function createByKeyAsync(key, options) {
    var tmp = DidRegistrar$createByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function updateAsync() {
    var tmp = DidRegistrar$updateAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function deleteAsync() {
    var tmp = DidRegistrar$deleteAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  initMetadataForInterface(DidRegistrar, 'DidRegistrar', VOID, VOID, VOID, [0, 1, 2]);
  initMetadataForObject(DidRegistrarRegistrations, 'DidRegistrarRegistrations');
  initMetadataForCompanion(Companion_20);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DidResult, 'DidResult', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForLambda(LocalRegistrar$createAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalRegistrar$getSupportedMethodsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalRegistrar$createByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalRegistrar$updateAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalRegistrar$deleteAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(LocalRegistrar, 'LocalRegistrar', LocalRegistrar, VOID, [DidRegistrar], [0, 1, 2]);
  initMetadataForCoroutine($mainCOROUTINE$5, CoroutineImpl);
  initMetadataForCompanion(Companion_21);
  initMetadataForLambda(UniregistrarRegistrar$createAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniregistrarRegistrar$getSupportedMethodsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniregistrarRegistrar$createByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniregistrarRegistrar$updateAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniregistrarRegistrar$deleteAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getSupportedMethodsCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($getMethodsCOROUTINE$7, CoroutineImpl);
  initMetadataForCoroutine($createCOROUTINE$8, CoroutineImpl);
  initMetadataForClass(UniregistrarRegistrar, 'UniregistrarRegistrar', UniregistrarRegistrar, VOID, [DidRegistrar], [0, 1, 2]);
  initMetadataForClass(DidCreateOptions, 'DidCreateOptions', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForClass(DidBtcrCreateOptions, 'DidBtcrCreateOptions', VOID, DidCreateOptions);
  initMetadataForClass(DidCheqdCreateOptions, 'DidCheqdCreateOptions', VOID, DidCreateOptions);
  initMetadataForCompanion(Companion_22);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($buildFromPublicKeySetCOROUTINE$9, CoroutineImpl);
  initMetadataForCoroutine($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10, CoroutineImpl);
  initMetadataForCompanion(Companion_23, VOID, VOID, [4]);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(DidDocConfig$toDidDocumentAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($toDidDocumentCOROUTINE$11, CoroutineImpl);
  initMetadataForCoroutine($createVerificationMethodSetCOROUTINE$12, CoroutineImpl);
  initMetadataForClass(DidDocConfig, 'DidDocConfig', DidDocConfig, VOID, VOID, [1], VOID, {0: $serializer_getInstance_12});
  initMetadataForCompanion(Companion_24);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(VerificationMethodConfiguration, 'VerificationMethodConfiguration', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
  initMetadataForCompanion(Companion_25);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ServiceConfiguration, 'ServiceConfiguration', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
  initMetadataForClass(DidEbsiCreateOptions, 'DidEbsiCreateOptions', VOID, DidCreateOptions);
  initMetadataForClass(DidEthrCreateOptions, 'DidEthrCreateOptions', DidEthrCreateOptions, DidCreateOptions);
  initMetadataForClass(DidIonCreateOptions, 'DidIonCreateOptions', DidIonCreateOptions, DidCreateOptions);
  initMetadataForClass(DidJwkCreateOptions, 'DidJwkCreateOptions', DidJwkCreateOptions, DidCreateOptions);
  initMetadataForClass(DidKeyCreateOptions, 'DidKeyCreateOptions', DidKeyCreateOptions, DidCreateOptions);
  initMetadataForClass(DidOydCreateOptions, 'DidOydCreateOptions', VOID, DidCreateOptions);
  initMetadataForClass(DidSovCreateOptions, 'DidSovCreateOptions', VOID, DidCreateOptions);
  initMetadataForClass(DidV1CreateOptions, 'DidV1CreateOptions', VOID, DidCreateOptions);
  initMetadataForClass(DidWebCreateOptions, 'DidWebCreateOptions', VOID, DidCreateOptions);
  initMetadataForLambda(LocalRegistrarMethod$registerAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalRegistrarMethod$registerByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(LocalRegistrarMethod, 'LocalRegistrarMethod', VOID, VOID, VOID, [1, 2]);
  initMetadataForLambda(DidCheqdRegistrar$registerAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidCheqdRegistrar$registerByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($registerCOROUTINE$13, CoroutineImpl);
  initMetadataForCoroutine($registerByKeyCOROUTINE$14, CoroutineImpl);
  initMetadataForCoroutine($createDidCOROUTINE$15, CoroutineImpl);
  initMetadataForCoroutine($initiateDidJobCOROUTINE$17, CoroutineImpl);
  initMetadataForCoroutine($finalizeDidJobCOROUTINE$18, CoroutineImpl);
  initMetadataForCoroutine($signPayloadCOROUTINE$19, CoroutineImpl);
  initMetadataForClass(DidCheqdRegistrar, 'DidCheqdRegistrar', DidCheqdRegistrar, LocalRegistrarMethod, VOID, [1, 2, 4]);
  initMetadataForCompanion(Companion_26);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_27);
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Secret, 'Secret', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
  initMetadataForClass(SigningRequest, 'SigningRequest', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_16});
  initMetadataForCompanion(Companion_28);
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DidState, 'DidState', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_32});
  initMetadataForClass(ActionDidState, 'ActionDidState', VOID, DidState, VOID, VOID, VOID, {0: $serializer_getInstance_17});
  initMetadataForCompanion(Companion_29);
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DidDocument_0, 'DidDocument', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  initMetadataForCompanion(Companion_30, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_31);
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FailedDidState, 'FailedDidState', VOID, DidState, VOID, VOID, VOID, {0: $serializer_getInstance_19});
  initMetadataForCompanion(Companion_32);
  initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(FinishedDidState, 'FinishedDidState', VOID, DidState, VOID, VOID, VOID, {0: $serializer_getInstance_20});
  initMetadataForCompanion(Companion_33);
  initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Secret_0, 'Secret', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_21});
  initMetadataForCompanion(Companion_34);
  initMetadataForObject($serializer_22, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SigningResponse, 'SigningResponse', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_22});
  initMetadataForCompanion(Companion_35);
  initMetadataForObject($serializer_23, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(VerificationMethod_5, 'VerificationMethod', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_23});
  initMetadataForCompanion(Companion_36);
  initMetadataForObject($serializer_24, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(JobCreateRequest, 'JobCreateRequest', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_24});
  initMetadataForCompanion(Companion_37);
  initMetadataForObject($serializer_25, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(JobDeactivateRequest, 'JobDeactivateRequest', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_25});
  initMetadataForCompanion(Companion_38);
  initMetadataForObject($serializer_26, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(JobSignRequest, 'JobSignRequest', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_26});
  initMetadataForCompanion(Companion_39);
  initMetadataForObject($serializer_27, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(JobActionResponse, 'JobActionResponse', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_27});
  initMetadataForCompanion(Companion_40);
  initMetadataForObject($serializer_28, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(CheqdKey, 'CheqdKey', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_28});
  initMetadataForCompanion(Companion_41);
  initMetadataForObject($serializer_29, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DidDocObject, 'DidDocObject', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_29});
  initMetadataForCompanion(Companion_42);
  initMetadataForObject($serializer_30, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(DidGetResponse, 'DidGetResponse', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_30});
  initMetadataForLambda(DidJwkRegistrar$registerAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidJwkRegistrar$registerByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($registerCOROUTINE$20, CoroutineImpl);
  initMetadataForCoroutine($registerByKeyCOROUTINE$21, CoroutineImpl);
  initMetadataForClass(DidJwkRegistrar, 'DidJwkRegistrar', DidJwkRegistrar, LocalRegistrarMethod, VOID, [1, 2]);
  initMetadataForLambda(DidKeyRegistrar$registerAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidKeyRegistrar$registerByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($registerCOROUTINE$22, CoroutineImpl);
  initMetadataForCoroutine($registerByKeyCOROUTINE$23, CoroutineImpl);
  initMetadataForCoroutine($getIdentifierComponentsCOROUTINE$24, CoroutineImpl);
  initMetadataForClass(DidKeyRegistrar, 'DidKeyRegistrar', DidKeyRegistrar, LocalRegistrarMethod, VOID, [1, 2]);
  initMetadataForClass(IdentifierComponents, 'IdentifierComponents');
  initMetadataForLambda(DidWebRegistrar$registerAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidWebRegistrar$registerByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($registerCOROUTINE$25, CoroutineImpl);
  initMetadataForCoroutine($registerByKeyCOROUTINE$26, CoroutineImpl);
  initMetadataForCoroutine($registerByDidDocConfigCOROUTINE$27, CoroutineImpl);
  initMetadataForClass(DidWebRegistrar, 'DidWebRegistrar', DidWebRegistrar, LocalRegistrarMethod, VOID, [1, 2]);
  initMetadataForLambda(DidResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidResolver$resolveToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidResolver$getSupportedMethodsAsync$slambda, CoroutineImpl, VOID, [0]);
  function resolveAsync(did) {
    var tmp = DidResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function resolveToKeysAsync(did) {
    var tmp = DidResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function resolveToKeyAsync(did) {
    var tmp = DidResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function getSupportedMethodsAsync_0() {
    var tmp = DidResolver$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  initMetadataForInterface(DidResolver, 'DidResolver', VOID, VOID, VOID, [0, 1]);
  initMetadataForObject(DidResolverRegistrations, 'DidResolverRegistrations');
  initMetadataForLambda(LocalResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalResolver$getSupportedMethodsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalResolver$resolveToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveCOROUTINE$28, CoroutineImpl);
  initMetadataForClass(LocalResolver, 'LocalResolver', LocalResolver, VOID, [DidResolver], [0, 1]);
  initMetadataForCompanion(Companion_43);
  initMetadataForLambda(UniresolverResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniresolverResolver$getSupportedMethodsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniresolverResolver$resolveToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniresolverResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getSupportedMethodsCOROUTINE$29, CoroutineImpl);
  initMetadataForCoroutine($resolveCOROUTINE$30, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeyCOROUTINE$31, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeysCOROUTINE$32, CoroutineImpl);
  initMetadataForCoroutine($getMethodsCOROUTINE$33, CoroutineImpl);
  initMetadataForClass(UniresolverResolver, 'UniresolverResolver', UniresolverResolver, VOID, [DidResolver], [0, 1]);
  initMetadataForLambda(DidCheqdResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidCheqdResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveCOROUTINE$35, CoroutineImpl);
  initMetadataForCoroutine($resolveDidCOROUTINE$36, CoroutineImpl);
  initMetadataForClass(LocalResolverMethod, 'LocalResolverMethod', VOID, VOID, VOID, [1]);
  initMetadataForClass(DidCheqdResolver, 'DidCheqdResolver', DidCheqdResolver, LocalResolverMethod, VOID, [1]);
  initMetadataForLambda(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidEbsiResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidEbsiResolver$resolveToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidEbsiResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveCOROUTINE$37, CoroutineImpl);
  initMetadataForCoroutine($resolveDidCOROUTINE$38, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeyCOROUTINE$39, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeysCOROUTINE$40, CoroutineImpl);
  initMetadataForCoroutine($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41, CoroutineImpl);
  initMetadataForCoroutine($tryConvertPublicKeyJwksToKeysCOROUTINE$42, CoroutineImpl);
  initMetadataForClass(DidEbsiResolver, 'DidEbsiResolver', VOID, LocalResolverMethod, VOID, [1]);
  initMetadataForLambda(DidJwkResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidJwkResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveCOROUTINE$43, CoroutineImpl);
  initMetadataForClass(DidJwkResolver, 'DidJwkResolver', DidJwkResolver, LocalResolverMethod, VOID, [1]);
  initMetadataForLambda(DidKeyResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidKeyResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveCOROUTINE$44, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeyCOROUTINE$45, CoroutineImpl);
  initMetadataForClass(DidKeyResolver, 'DidKeyResolver', DidKeyResolver, LocalResolverMethod, VOID, [1]);
  initMetadataForCompanion(Companion_44);
  initMetadataForLambda(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidWebResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidWebResolver$resolveToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidWebResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveCOROUTINE$46, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeyCOROUTINE$47, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeysCOROUTINE$48, CoroutineImpl);
  initMetadataForCoroutine($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49, CoroutineImpl);
  initMetadataForCoroutine($tryConvertPublicKeyJwksToKeysCOROUTINE$50, CoroutineImpl);
  initMetadataForClass(DidWebResolver, 'DidWebResolver', VOID, LocalResolverMethod, VOID, [1]);
  initMetadataForLambda(LocalResolverMethod$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalResolverMethod$resolveToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalResolverMethod$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveToKeysCOROUTINE$51, CoroutineImpl);
  initMetadataForLambda(WaltidServices$initAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(WaltidServices$minimalInitAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForObject(WaltidServices, 'WaltidServices', VOID, VOID, VOID, [0]);
  initMetadataForObject(EnumUtils, 'EnumUtils');
  initMetadataForObject(ExtensionMethods, 'ExtensionMethods');
  initMetadataForLambda(KeyMaterial$getAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getCOROUTINE$52, CoroutineImpl);
  initMetadataForCoroutine($importKeyCOROUTINE$53, CoroutineImpl);
  initMetadataForCoroutine($importBase58COROUTINE$54, CoroutineImpl);
  initMetadataForCoroutine($importHexCOROUTINE$55, CoroutineImpl);
  initMetadataForObject(KeyMaterial, 'KeyMaterial', VOID, VOID, VOID, [1, 2]);
  initMetadataForLambda(KeyUtils$fromPublicKeyMultiBaseAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($fromPublicKeyMultiBaseCOROUTINE$56, CoroutineImpl);
  initMetadataForObject(KeyUtils, 'KeyUtils', VOID, VOID, VOID, [1]);
  initMetadataForObject(VerificationMaterial, 'VerificationMaterial');
  initMetadataForObject(JsonCanonicalization, 'JsonCanonicalization');
  //endregion
  function DidManager() {
  }
  function getResolverForDid($this, did) {
    var method = DidUtils_getInstance().methodFromDid(did);
    var tmp0_elvis_lhs = $this.resolverMethods.k2(method);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No resolver for did method: ' + method);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function getRegistrarForMethod($this, method) {
    var tmp0_elvis_lhs = $this.registrarMethods.k2(method);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No registrar for did method: ' + method);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function getDidOptions($this, method, args) {
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp;
    switch (method.toLowerCase()) {
      case 'key':
        var tmp1_safe_receiver = args.k2('key');
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'id.walt.did.utils.EnumUtils.enumValueIgnoreCase' call
          var value = tmp1_safe_receiver.c4s();
          // Inline function 'kotlin.enumValues' call
          var tmp0 = values();
          var tmp$ret$4;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var inductionVariable = 0;
            var last = tmp0.length;
            while (inductionVariable < last) {
              var element = tmp0[inductionVariable];
              inductionVariable = inductionVariable + 1 | 0;
              if (equals(element.q2_1, value, true)) {
                tmp$ret$4 = element;
                break $l$block;
              }
            }
            tmp$ret$4 = null;
          }
          tmp_0 = tmp$ret$4;
        }

        var tmp2_elvis_lhs = tmp_0;
        var tmp_1 = tmp2_elvis_lhs == null ? KeyType_Ed25519_getInstance() : tmp2_elvis_lhs;
        var tmp3_safe_receiver = args.k2('useJwkJcsPub');
        var tmp_2;
        if (tmp3_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_2 = toBoolean(tmp3_safe_receiver.c4s());
        }

        var tmp4_elvis_lhs = tmp_2;
        tmp = new DidKeyCreateOptions(tmp_1, tmp4_elvis_lhs == null ? false : tmp4_elvis_lhs);
        break;
      case 'jwk':
        tmp = new DidJwkCreateOptions();
        break;
      case 'web':
        var tmp5_safe_receiver = args.k2('domain');
        var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.c4s();
        var tmp_3 = tmp6_elvis_lhs == null ? '' : tmp6_elvis_lhs;
        var tmp7_safe_receiver = args.k2('path');
        var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.c4s();
        tmp = new DidWebCreateOptions(tmp_3, tmp8_elvis_lhs == null ? '' : tmp8_elvis_lhs);
        break;
      case 'cheqd':
        var tmp9_safe_receiver = args.k2('network');
        var tmp10_elvis_lhs = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.c4s();
        tmp = new DidCheqdCreateOptions(tmp10_elvis_lhs == null ? 'testnet' : tmp10_elvis_lhs);
        break;
      default:
        throw IllegalArgumentException_init_$Create$('DID method not supported for auto-configuration: ' + method);
    }
    return tmp;
  }
  function DidService$log$lambda() {
    return Unit_instance;
  }
  function DidService$init$lambda() {
    return 'INIT -> RESOLVERS:  ' + DidService_getInstance().resolverMethods.toString();
  }
  function DidService$init$lambda_0() {
    return 'INIT -> REGISTRARS: ' + DidService_getInstance().registrarMethods.toString();
  }
  function DidService$updateResolversForMethods$lambda($resolver, $methods) {
    return function () {
      var tmp = $resolver.name;
      var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9($methods);
      return 'DID Resolver ' + tmp + ' cannot be used, error: ' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.message);
    };
  }
  function DidService$updateRegistrarsForMethods$lambda($registrar, $methods) {
    return function () {
      var tmp = $registrar.name;
      // Inline function 'kotlin.let' call
      var it = Result__exceptionOrNull_impl_p6xea9($methods);
      var tmp1_elvis_lhs = it == null ? null : it.message;
      return 'DID Registrar ' + tmp + ' cannot be used, error: ' + (tmp1_elvis_lhs == null ? toString(it) : tmp1_elvis_lhs);
    };
  }
  function DidService$minimalInitAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$minimalInitAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$minimalInitAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(DidService$minimalInitAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = DidService_getInstance().l9r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidService$minimalInitAsync$slambda).ia = function (completion) {
    return new DidService$minimalInitAsync$slambda(completion);
  };
  function DidService$minimalInitAsync$slambda_0(resultContinuation) {
    var i = new DidService$minimalInitAsync$slambda(resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$registerAsync$slambda($options, resultContinuation) {
    this.u9r_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$registerAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$registerAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidService$registerAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = DidService_getInstance().w9r(this.u9r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidService$registerAsync$slambda).ia = function (completion) {
    return new DidService$registerAsync$slambda(this.u9r_1, completion);
  };
  function DidService$registerAsync$slambda_0($options, resultContinuation) {
    var i = new DidService$registerAsync$slambda($options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$initAsync$slambda($resolverUrl, $registrarUrl, resultContinuation) {
    this.f9s_1 = $resolverUrl;
    this.g9s_1 = $registrarUrl;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$initAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$initAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(DidService$initAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = DidService_getInstance().h9s(this.f9s_1, this.g9s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidService$initAsync$slambda).ia = function (completion) {
    return new DidService$initAsync$slambda(this.f9s_1, this.g9s_1, completion);
  };
  function DidService$initAsync$slambda_0($resolverUrl, $registrarUrl, resultContinuation) {
    var i = new DidService$initAsync$slambda($resolverUrl, $registrarUrl, resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$updateResolversForMethodsAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$updateResolversForMethodsAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$updateResolversForMethodsAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(DidService$updateResolversForMethodsAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = DidService_getInstance().q9s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidService$updateResolversForMethodsAsync$slambda).ia = function (completion) {
    return new DidService$updateResolversForMethodsAsync$slambda(completion);
  };
  function DidService$updateResolversForMethodsAsync$slambda_0(resultContinuation) {
    var i = new DidService$updateResolversForMethodsAsync$slambda(resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$registerDefaultDidMethodByKeyAsync$slambda($method, $key, $args, resultContinuation) {
    this.z9s_1 = $method;
    this.a9t_1 = $key;
    this.b9t_1 = $args;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$registerDefaultDidMethodByKeyAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$registerDefaultDidMethodByKeyAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidService$registerDefaultDidMethodByKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = DidService_getInstance().c9t(this.z9s_1, this.a9t_1, this.b9t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidService$registerDefaultDidMethodByKeyAsync$slambda).ia = function (completion) {
    return new DidService$registerDefaultDidMethodByKeyAsync$slambda(this.z9s_1, this.a9t_1, this.b9t_1, completion);
  };
  function DidService$registerDefaultDidMethodByKeyAsync$slambda_0($method, $key, $args, resultContinuation) {
    var i = new DidService$registerDefaultDidMethodByKeyAsync$slambda($method, $key, $args, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$resolveAsync$slambda($did, resultContinuation) {
    this.l9t_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$resolveAsync$slambda).m9t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidService$resolveAsync$slambda).zb = function ($completion) {
    return this.m9t($completion);
  };
  protoOf(DidService$resolveAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = DidService_getInstance().n9t(this.l9t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidService$resolveAsync$slambda).ia = function (completion) {
    return new DidService$resolveAsync$slambda(this.l9t_1, completion);
  };
  function DidService$resolveAsync$slambda_0($did, resultContinuation) {
    var i = new DidService$resolveAsync$slambda($did, resultContinuation);
    var l = function ($completion) {
      return i.m9t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$resolveToKeysAsync$slambda($did, resultContinuation) {
    this.w9t_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$resolveToKeysAsync$slambda).x9t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidService$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.x9t($completion);
  };
  protoOf(DidService$resolveToKeysAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = DidService_getInstance().y9t(this.w9t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidService$resolveToKeysAsync$slambda).ia = function (completion) {
    return new DidService$resolveToKeysAsync$slambda(this.w9t_1, completion);
  };
  function DidService$resolveToKeysAsync$slambda_0($did, resultContinuation) {
    var i = new DidService$resolveToKeysAsync$slambda($did, resultContinuation);
    var l = function ($completion) {
      return i.x9t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$updateRegistrarsForMethodsAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$updateRegistrarsForMethodsAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$updateRegistrarsForMethodsAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(DidService$updateRegistrarsForMethodsAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = DidService_getInstance().h9u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidService$updateRegistrarsForMethodsAsync$slambda).ia = function (completion) {
    return new DidService$updateRegistrarsForMethodsAsync$slambda(completion);
  };
  function DidService$updateRegistrarsForMethodsAsync$slambda_0(resultContinuation) {
    var i = new DidService$updateRegistrarsForMethodsAsync$slambda(resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$resolveToKeyAsync$slambda($did, resultContinuation) {
    this.q9u_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$resolveToKeyAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidService$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(DidService$resolveToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = DidService_getInstance().r9u(this.q9u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidService$resolveToKeyAsync$slambda).ia = function (completion) {
    return new DidService$resolveToKeyAsync$slambda(this.q9u_1, completion);
  };
  function DidService$resolveToKeyAsync$slambda_0($did, resultContinuation) {
    var i = new DidService$resolveToKeyAsync$slambda($did, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $initCOROUTINE$0(_this__u8e3s4, resolverUrl, registrarUrl, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a9v_1 = _this__u8e3s4;
    this.b9v_1 = resolverUrl;
    this.c9v_1 = registrarUrl;
  }
  protoOf($initCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.a9v_1.registerAllResolvers(DidResolverRegistrations_instance.curatedDidResolvers(this.b9v_1));
            this.a9v_1.registerAllRegistrars(DidRegistrarRegistrations_instance.curatedDidRegistrars(this.c9v_1));
            this.m9_1 = 1;
            suspendResult = this.a9v_1.q9s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m9_1 = 2;
            suspendResult = this.a9v_1.h9u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a9v_1.c9r_1.t6d(DidService$init$lambda);
            this.a9v_1.c9r_1.t6d(DidService$init$lambda_0);
            return Unit_instance;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($initCOROUTINE$0)['<set-state>'] = protoOf($initCOROUTINE$0).t9;
  protoOf($initCOROUTINE$0)['<get-state>'] = protoOf($initCOROUTINE$0).u9;
  protoOf($initCOROUTINE$0)['<set-exceptionState>'] = protoOf($initCOROUTINE$0).v9;
  protoOf($initCOROUTINE$0)['<get-exceptionState>'] = protoOf($initCOROUTINE$0).w9;
  protoOf($initCOROUTINE$0)['<set-result>'] = protoOf($initCOROUTINE$0).x9;
  protoOf($initCOROUTINE$0)['<get-result>'] = protoOf($initCOROUTINE$0).y9;
  protoOf($initCOROUTINE$0)['<set-exception>'] = protoOf($initCOROUTINE$0).z9;
  protoOf($initCOROUTINE$0)['<get-exception>'] = protoOf($initCOROUTINE$0).aa;
  protoOf($initCOROUTINE$0)['<set-finallyPath>'] = protoOf($initCOROUTINE$0).ba;
  protoOf($initCOROUTINE$0)['<get-finallyPath>'] = protoOf($initCOROUTINE$0).ca;
  protoOf($initCOROUTINE$0)['<get-context>'] = protoOf($initCOROUTINE$0).s9;
  function $minimalInitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l9v_1 = _this__u8e3s4;
  }
  protoOf($minimalInitCOROUTINE$1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.l9v_1.registerAllResolvers(setOf(new LocalResolver()));
            this.l9v_1.registerAllRegistrars(setOf(new LocalRegistrar()));
            this.m9_1 = 1;
            suspendResult = this.l9v_1.q9s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m9_1 = 2;
            suspendResult = this.l9v_1.h9u(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($minimalInitCOROUTINE$1)['<set-state>'] = protoOf($minimalInitCOROUTINE$1).t9;
  protoOf($minimalInitCOROUTINE$1)['<get-state>'] = protoOf($minimalInitCOROUTINE$1).u9;
  protoOf($minimalInitCOROUTINE$1)['<set-exceptionState>'] = protoOf($minimalInitCOROUTINE$1).v9;
  protoOf($minimalInitCOROUTINE$1)['<get-exceptionState>'] = protoOf($minimalInitCOROUTINE$1).w9;
  protoOf($minimalInitCOROUTINE$1)['<set-result>'] = protoOf($minimalInitCOROUTINE$1).x9;
  protoOf($minimalInitCOROUTINE$1)['<get-result>'] = protoOf($minimalInitCOROUTINE$1).y9;
  protoOf($minimalInitCOROUTINE$1)['<set-exception>'] = protoOf($minimalInitCOROUTINE$1).z9;
  protoOf($minimalInitCOROUTINE$1)['<get-exception>'] = protoOf($minimalInitCOROUTINE$1).aa;
  protoOf($minimalInitCOROUTINE$1)['<set-finallyPath>'] = protoOf($minimalInitCOROUTINE$1).ba;
  protoOf($minimalInitCOROUTINE$1)['<get-finallyPath>'] = protoOf($minimalInitCOROUTINE$1).ca;
  protoOf($minimalInitCOROUTINE$1)['<get-context>'] = protoOf($minimalInitCOROUTINE$1).s9;
  function $updateResolversForMethodsCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u9v_1 = _this__u8e3s4;
  }
  protoOf($updateResolversForMethodsCOROUTINE$2).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            tmp_0.v9v_1 = this.u9v_1.didResolvers;
            this.w9v_1 = this.v9v_1;
            this.x9v_1 = this.w9v_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.x9v_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.y9v_1 = this.x9v_1.r();
            var tmp_1 = this;
            tmp_1.z9v_1 = this.y9v_1;
            this.a9w_1 = this.z9v_1;
            this.m9_1 = 2;
            suspendResult = this.a9w_1.b9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var methods = suspendResult.zo_1;
            if (_Result___get_isSuccess__impl__sndoy8(methods)) {
              throwOnFailure(methods);
              var tmp_2 = _Result___get_value__impl__bjfvqg(methods);
              var _iterator__ex2g4s = ((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()).p();
              while (_iterator__ex2g4s.q()) {
                var element = _iterator__ex2g4s.r();
                DidService_getInstance().registerResolverForMethod(element, this.a9w_1);
              }
            } else {
              var tmp_3 = DidService_getInstance().c9r_1;
              tmp_3.u6d(DidService$updateResolversForMethods$lambda(this.a9w_1, methods));
            }

            this.m9_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($updateResolversForMethodsCOROUTINE$2)['<set-state>'] = protoOf($updateResolversForMethodsCOROUTINE$2).t9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-state>'] = protoOf($updateResolversForMethodsCOROUTINE$2).u9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<set-exceptionState>'] = protoOf($updateResolversForMethodsCOROUTINE$2).v9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-exceptionState>'] = protoOf($updateResolversForMethodsCOROUTINE$2).w9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<set-result>'] = protoOf($updateResolversForMethodsCOROUTINE$2).x9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-result>'] = protoOf($updateResolversForMethodsCOROUTINE$2).y9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<set-exception>'] = protoOf($updateResolversForMethodsCOROUTINE$2).z9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-exception>'] = protoOf($updateResolversForMethodsCOROUTINE$2).aa;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<set-finallyPath>'] = protoOf($updateResolversForMethodsCOROUTINE$2).ba;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-finallyPath>'] = protoOf($updateResolversForMethodsCOROUTINE$2).ca;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-context>'] = protoOf($updateResolversForMethodsCOROUTINE$2).s9;
  function $updateRegistrarsForMethodsCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k9w_1 = _this__u8e3s4;
  }
  protoOf($updateRegistrarsForMethodsCOROUTINE$3).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            tmp_0.l9w_1 = this.k9w_1.didRegistrars;
            this.m9w_1 = this.l9w_1;
            this.n9w_1 = this.m9w_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.n9w_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.o9w_1 = this.n9w_1.r();
            var tmp_1 = this;
            tmp_1.p9w_1 = this.o9w_1;
            this.q9w_1 = this.p9w_1;
            this.m9_1 = 2;
            suspendResult = this.q9w_1.b9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var methods = suspendResult.zo_1;
            if (_Result___get_isSuccess__impl__sndoy8(methods)) {
              throwOnFailure(methods);
              var tmp_2 = _Result___get_value__impl__bjfvqg(methods);
              var _iterator__ex2g4s = ((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()).p();
              while (_iterator__ex2g4s.q()) {
                var element = _iterator__ex2g4s.r();
                DidService_getInstance().registerRegistrarForMethod(element, this.q9w_1);
              }
            } else {
              var tmp_3 = DidService_getInstance().c9r_1;
              tmp_3.u6d(DidService$updateRegistrarsForMethods$lambda(this.q9w_1, methods));
            }

            this.m9_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<set-state>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).t9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-state>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).u9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<set-exceptionState>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).v9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-exceptionState>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).w9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<set-result>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).x9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-result>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).y9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<set-exception>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).z9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-exception>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).aa;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<set-finallyPath>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).ba;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-finallyPath>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).ca;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-context>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).s9;
  function $registerDefaultDidMethodByKeyCOROUTINE$4(_this__u8e3s4, method, key, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z9w_1 = _this__u8e3s4;
    this.a9x_1 = method;
    this.b9x_1 = key;
    this.c9x_1 = args;
  }
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.d9x_1 = getDidOptions(this.z9w_1, this.a9x_1, this.c9x_1);
            this.m9_1 = 1;
            suspendResult = this.z9w_1.e9x(this.a9x_1, this.b9x_1, this.d9x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            return result;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<set-state>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).t9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-state>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).u9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<set-exceptionState>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).v9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-exceptionState>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).w9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<set-result>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).x9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-result>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).y9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<set-exception>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).z9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-exception>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).aa;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<set-finallyPath>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).ba;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-finallyPath>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).ca;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-context>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).s9;
  function DidService() {
    DidService_instance = this;
    var tmp = this;
    var tmp_0 = KotlinLogging_instance;
    tmp.c9r_1 = tmp_0.w6d(DidService$log$lambda);
    this.didResolvers = ArrayList_init_$Create$();
    this.didRegistrars = ArrayList_init_$Create$();
    this.resolverMethods = HashMap_init_$Create$();
    this.registrarMethods = HashMap_init_$Create$();
  }
  protoOf(DidService).f9x = function () {
    return this.didResolvers;
  };
  protoOf(DidService).g9x = function () {
    return this.didRegistrars;
  };
  protoOf(DidService).h9x = function () {
    return this.resolverMethods;
  };
  protoOf(DidService).i9x = function () {
    return this.registrarMethods;
  };
  protoOf(DidService).registerResolver = function (resolver) {
    return !this.didResolvers.x1(resolver) ? this.didResolvers.n(resolver) : false;
  };
  protoOf(DidService).unregisterResolver = function (resolver) {
    return this.didResolvers.d2(resolver);
  };
  protoOf(DidService).registerAllResolvers = function (resolvers) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = reversed(resolvers).p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      DidService_getInstance().registerResolver(element);
    }
  };
  protoOf(DidService).registerAllRegistrars = function (registrars) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = reversed(registrars).p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      DidService_getInstance().registerRegistrar(element);
    }
  };
  protoOf(DidService).h9s = function (resolverUrl, registrarUrl, $completion) {
    var tmp = new $initCOROUTINE$0(this, resolverUrl, registrarUrl, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService).init$default = function (resolverUrl, registrarUrl, $completion, $super) {
    resolverUrl = resolverUrl === VOID ? null : resolverUrl;
    registrarUrl = registrarUrl === VOID ? null : registrarUrl;
    return $super === VOID ? this.h9s(resolverUrl, registrarUrl, $completion) : $super.h9s.call(this, resolverUrl, registrarUrl, $completion);
  };
  protoOf(DidService).l9r = function ($completion) {
    var tmp = new $minimalInitCOROUTINE$1(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService).registerRegistrar = function (registrar) {
    return !this.didRegistrars.x1(registrar) ? this.didRegistrars.n(registrar) : false;
  };
  protoOf(DidService).unregisterRegistrar = function (registrar) {
    return this.didRegistrars.d2(registrar);
  };
  protoOf(DidService).registerResolverForMethod = function (method, resolver) {
    return this.resolverMethods.n2(method, resolver);
  };
  protoOf(DidService).registerRegistrarForMethod = function (method, registrar) {
    return this.registrarMethods.n2(method, registrar);
  };
  protoOf(DidService).q9s = function ($completion) {
    var tmp = new $updateResolversForMethodsCOROUTINE$2(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService).h9u = function ($completion) {
    var tmp = new $updateRegistrarsForMethodsCOROUTINE$3(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService).n9t = function (did, $completion) {
    var tmp = getResolverForDid(this, did).n9t(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidService).r9u = function (did, $completion) {
    var tmp = getResolverForDid(this, did).r9u(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidService).y9t = function (did, $completion) {
    var tmp = getResolverForDid(this, did).y9t(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidService).w9r = function (options, $completion) {
    return getRegistrarForMethod(this, options.method).j9x(options, $completion);
  };
  protoOf(DidService).e9x = function (method, key, options, $completion) {
    return getRegistrarForMethod(this, method).k9x(key, options, $completion);
  };
  protoOf(DidService).registerByKey$default = function (method, key, options, $completion, $super) {
    options = options === VOID ? secondaryConstructor_5(method, emptyMap()) : options;
    return $super === VOID ? this.e9x(method, key, options, $completion) : $super.e9x.call(this, method, key, options, $completion);
  };
  protoOf(DidService).l9x = function (method, key, options, $completion) {
    return this.e9x(method, key, options, $completion);
  };
  protoOf(DidService).c9t = function (method, key, args, $completion) {
    var tmp = new $registerDefaultDidMethodByKeyCOROUTINE$4(this, method, key, args, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService).update = function () {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(DidService).deactivate = function () {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(DidService).m9x = function () {
    var tmp = DidService$minimalInitAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).n9x = function (options) {
    var tmp = DidService$registerAsync$slambda_0(options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).o9x = function (resolverUrl, registrarUrl) {
    var tmp = DidService$initAsync$slambda_0(resolverUrl, registrarUrl, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).initAsync$default = function (resolverUrl, registrarUrl, $super) {
    resolverUrl = resolverUrl === VOID ? null : resolverUrl;
    registrarUrl = registrarUrl === VOID ? null : registrarUrl;
    return $super === VOID ? this.o9x(resolverUrl, registrarUrl) : $super.o9x.call(this, resolverUrl, registrarUrl);
  };
  protoOf(DidService).p9x = function () {
    var tmp = DidService$updateResolversForMethodsAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).q9x = function (method, key, args) {
    var tmp = DidService$registerDefaultDidMethodByKeyAsync$slambda_0(method, key, args, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).r9x = function (did) {
    var tmp = DidService$resolveAsync$slambda_0(did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).s9x = function (did) {
    var tmp = DidService$resolveToKeysAsync$slambda_0(did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).t9x = function () {
    var tmp = DidService$updateRegistrarsForMethodsAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).u9x = function (did) {
    var tmp = DidService$resolveToKeyAsync$slambda_0(did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var DidService_instance;
  function DidService_getInstance() {
    if (DidService_instance == null)
      new DidService();
    return DidService_instance;
  }
  function DidUtils() {
    DidUtils_instance = this;
    this.DEFAULT_CONTEXT = listOf(['https://www.w3.org/ns/did/v1', 'https://w3id.org/security/suites/jws-2020/v1']);
    this.v9x_1 = '^did:([^:]+):(.+)';
  }
  protoOf(DidUtils).w9x = function () {
    return this.DEFAULT_CONTEXT;
  };
  protoOf(DidUtils).methodFromDid = function (did) {
    return substringBefore(removePrefix(did, 'did:'), ':');
  };
  protoOf(DidUtils).identifierFromDid = function (did) {
    var tmp0_safe_receiver = this.pathFromDid(did);
    return tmp0_safe_receiver == null ? null : substringBefore_0(tmp0_safe_receiver, _Char___init__impl__6a9atx(35));
  };
  protoOf(DidUtils).fragmentFromDid = function (did) {
    var tmp0_safe_receiver = this.pathFromDid(did);
    return tmp0_safe_receiver == null ? null : substringAfter(tmp0_safe_receiver, _Char___init__impl__6a9atx(35));
  };
  protoOf(DidUtils).pathFromDid = function (did) {
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '^did:([^:]+):(.+)';
    var tmp0_safe_receiver = Regex_init_$Create$(this_0).ue(did);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = ensureNotNull(tmp0_safe_receiver.ze().u(2)).ye_1;
    }
    return tmp;
  };
  protoOf(DidUtils).isDidUrl = function (did) {
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '^did:([^:]+):(.+)';
    return Regex_init_$Create$(this_0).re(did);
  };
  var DidUtils_instance;
  function DidUtils_getInstance() {
    if (DidUtils_instance == null)
      new DidUtils();
    return DidUtils_instance;
  }
  function Companion() {
  }
  protoOf(Companion).y4r = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_5;
  function Companion_getInstance_1() {
    return Companion_instance_5;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidCheqdDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('type', false);
    tmp0_serialDesc.j29('controller', false);
    tmp0_serialDesc.j29('publicKeyJwk', false);
    this.x9x_1 = tmp0_serialDesc;
  }
  protoOf($serializer).y9x = function (encoder, value) {
    var tmp0_desc = this.x9x_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.id);
    tmp1_output.i23(tmp0_desc, 1, value.type);
    tmp1_output.i23(tmp0_desc, 2, value.controller);
    tmp1_output.k23(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer).h1y = function (encoder, value) {
    return this.y9x(encoder, value instanceof VerificationMethod ? value : THROW_CCE());
  };
  protoOf($serializer).i1y = function (decoder) {
    var tmp0_desc = this.x9x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.t21(tmp0_desc);
    if (tmp8_input.j22()) {
      tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.u21(tmp0_desc);
    return VerificationMethod_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).g1y = function () {
    return this.x9x_1;
  };
  protoOf($serializer).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), JsonObjectSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function VerificationMethod_init_$Init$(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance().x9x_1);
    }
    $this.id = id;
    $this.type = type;
    $this.controller = controller;
    $this.publicKeyJwk = publicKeyJwk;
    return $this;
  }
  function VerificationMethod_init_$Create$(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker) {
    return VerificationMethod_init_$Init$(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker, objectCreate(protoOf(VerificationMethod)));
  }
  function DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_0() {
    return new ArrayListSerializer($serializer_getInstance());
  }
  function DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_1() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_2() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_3() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_4() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_5() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function VerificationMethod(id, type, controller, publicKeyJwk) {
    this.id = id;
    this.type = type;
    this.controller = controller;
    this.publicKeyJwk = publicKeyJwk;
  }
  protoOf(VerificationMethod).h69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod).z9x = function () {
    return this.type;
  };
  protoOf(VerificationMethod).a9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod).b9y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod).dp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod).q6x = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod).c9y = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.c9y(id, type, controller, publicKeyJwk) : $super.c9y.call(this, id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod).toString = function () {
    return 'VerificationMethod(id=' + this.id + ', type=' + this.type + ', controller=' + this.controller + ', publicKeyJwk=' + this.publicKeyJwk.toString() + ')';
  };
  protoOf(VerificationMethod).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + getStringHashCode(this.type) | 0;
    result = imul(result, 31) + getStringHashCode(this.controller) | 0;
    result = imul(result, 31) + this.publicKeyJwk.hashCode() | 0;
    return result;
  };
  protoOf(VerificationMethod).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerificationMethod))
      return false;
    var tmp0_other_with_cast = other instanceof VerificationMethod ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!(this.type === tmp0_other_with_cast.type))
      return false;
    if (!(this.controller === tmp0_other_with_cast.controller))
      return false;
    if (!this.publicKeyJwk.equals(tmp0_other_with_cast.publicKeyJwk))
      return false;
    return true;
  };
  function DidCheqdDocument_init_$Init$(didDoc, jwk, $this) {
    jwk = jwk === VOID ? null : jwk;
    var tmp1_context = DidUtils_getInstance().DEFAULT_CONTEXT;
    var tmp2_id = didDoc.id;
    var tmp;
    if (jwk == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = didDoc.verificationMethod;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.p();
      while (_iterator__ex2g4s.q()) {
        var item = _iterator__ex2g4s.r();
        var tmp$ret$0 = new VerificationMethod(item.id, 'JsonWebKey2020', item.controller, jwk);
        destination.n(tmp$ret$0);
      }
      tmp = destination;
    }
    var tmp3_verificationMethod = tmp;
    var tmp4_authentication = didDoc.authentication;
    var tmp5_assertionMethod = didDoc.authentication;
    var tmp6_capabilityInvocation = didDoc.authentication;
    var tmp7_capabilityDelegation = didDoc.authentication;
    var tmp8_keyAgreement = didDoc.authentication;
    DidCheqdDocument.call($this, tmp1_context, tmp2_id, tmp3_verificationMethod, tmp5_assertionMethod, tmp4_authentication, tmp6_capabilityInvocation, tmp7_capabilityDelegation, tmp8_keyAgreement);
    return $this;
  }
  function secondaryConstructor(didDoc, jwk) {
    return DidCheqdDocument_init_$Init$(didDoc, jwk, objectCreate(protoOf(DidCheqdDocument)));
  }
  function Companion_0() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_11 = lazy(tmp_10, DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_4);
    var tmp_12 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.d9y_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_5)];
  }
  protoOf(Companion_0).y4r = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_6;
  function Companion_getInstance_2() {
    if (Companion_instance_6 == null)
      new Companion_0();
    return Companion_instance_6;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidCheqdDocument', this, 8);
    tmp0_serialDesc.j29('@context', true);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('verificationMethod', false);
    tmp0_serialDesc.j29('assertionMethod', false);
    tmp0_serialDesc.j29('authentication', false);
    tmp0_serialDesc.j29('capabilityInvocation', false);
    tmp0_serialDesc.j29('capabilityDelegation', false);
    tmp0_serialDesc.j29('keyAgreement', false);
    this.e9y_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).f9y = function (encoder, value) {
    var tmp0_desc = this.e9y_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().d9y_1;
    tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    tmp1_output.i23(tmp0_desc, 1, value.id);
    tmp1_output.m23(tmp0_desc, 2, tmp2_cached[2].z(), value.verificationMethod);
    tmp1_output.m23(tmp0_desc, 3, tmp2_cached[3].z(), value.assertionMethod);
    tmp1_output.m23(tmp0_desc, 4, tmp2_cached[4].z(), value.authentication);
    tmp1_output.m23(tmp0_desc, 5, tmp2_cached[5].z(), value.capabilityInvocation);
    tmp1_output.m23(tmp0_desc, 6, tmp2_cached[6].z(), value.capabilityDelegation);
    tmp1_output.m23(tmp0_desc, 7, tmp2_cached[7].z(), value.keyAgreement);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_0).h1y = function (encoder, value) {
    return this.f9y(encoder, value instanceof DidCheqdDocument ? value : THROW_CCE());
  };
  protoOf($serializer_0).i1y = function (decoder) {
    var tmp0_desc = this.e9y_1;
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
    var tmp12_input = decoder.t21(tmp0_desc);
    var tmp13_cached = Companion_getInstance_2().d9y_1;
    if (tmp12_input.j22()) {
      tmp4_local0 = tmp12_input.f22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.h22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.h22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.h22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.h22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.h22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.h22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.f22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.h22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.h22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.h22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.h22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.h22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.h22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.u21(tmp0_desc);
    return DidCheqdDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_0).g1y = function () {
    return this.e9y_1;
  };
  protoOf($serializer_0).y29 = function () {
    var tmp0_cached = Companion_getInstance_2().d9y_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].z(), StringSerializer_getInstance(), get_nullable(tmp0_cached[2].z()), get_nullable(tmp0_cached[3].z()), get_nullable(tmp0_cached[4].z()), get_nullable(tmp0_cached[5].z()), get_nullable(tmp0_cached[6].z()), get_nullable(tmp0_cached[7].z())];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function DidCheqdDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, $this) {
    if (!(254 === (254 & seen0))) {
      throwMissingFieldException(seen0, 254, $serializer_getInstance_0().e9y_1);
    }
    if (0 === (seen0 & 1))
      $this.context = DidUtils_getInstance().DEFAULT_CONTEXT;
    else
      $this.context = context;
    $this.id = id;
    $this.verificationMethod = verificationMethod;
    $this.assertionMethod = assertionMethod;
    $this.authentication = authentication;
    $this.capabilityInvocation = capabilityInvocation;
    $this.capabilityDelegation = capabilityDelegation;
    $this.keyAgreement = keyAgreement;
    return $this;
  }
  function DidCheqdDocument_init_$Create$(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker) {
    return DidCheqdDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, objectCreate(protoOf(DidCheqdDocument)));
  }
  function DidCheqdDocument(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
    Companion_getInstance_2();
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    this.context = context;
    this.id = id;
    this.verificationMethod = verificationMethod;
    this.assertionMethod = assertionMethod;
    this.authentication = authentication;
    this.capabilityInvocation = capabilityInvocation;
    this.capabilityDelegation = capabilityDelegation;
    this.keyAgreement = keyAgreement;
  }
  protoOf(DidCheqdDocument).s9 = function () {
    return this.context;
  };
  protoOf(DidCheqdDocument).h69 = function () {
    return this.id;
  };
  protoOf(DidCheqdDocument).g9y = function () {
    return this.verificationMethod;
  };
  protoOf(DidCheqdDocument).h9y = function () {
    return this.assertionMethod;
  };
  protoOf(DidCheqdDocument).i9y = function () {
    return this.authentication;
  };
  protoOf(DidCheqdDocument).j9y = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidCheqdDocument).k9y = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidCheqdDocument).l9y = function () {
    return this.keyAgreement;
  };
  protoOf(DidCheqdDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.i22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidCheqdDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.r4p(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidCheqdDocument).dc = function () {
    return this.context;
  };
  protoOf(DidCheqdDocument).ec = function () {
    return this.id;
  };
  protoOf(DidCheqdDocument).dp = function () {
    return this.verificationMethod;
  };
  protoOf(DidCheqdDocument).q6x = function () {
    return this.assertionMethod;
  };
  protoOf(DidCheqdDocument).x7h = function () {
    return this.authentication;
  };
  protoOf(DidCheqdDocument).p82 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidCheqdDocument).q82 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidCheqdDocument).m9y = function () {
    return this.keyAgreement;
  };
  protoOf(DidCheqdDocument).n9y = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
    return new DidCheqdDocument(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
  };
  protoOf(DidCheqdDocument).copy = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, $super) {
    context = context === VOID ? this.context : context;
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    assertionMethod = assertionMethod === VOID ? this.assertionMethod : assertionMethod;
    authentication = authentication === VOID ? this.authentication : authentication;
    capabilityInvocation = capabilityInvocation === VOID ? this.capabilityInvocation : capabilityInvocation;
    capabilityDelegation = capabilityDelegation === VOID ? this.capabilityDelegation : capabilityDelegation;
    keyAgreement = keyAgreement === VOID ? this.keyAgreement : keyAgreement;
    return $super === VOID ? this.n9y(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.n9y.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
  };
  protoOf(DidCheqdDocument).toString = function () {
    return 'DidCheqdDocument(context=' + toString_0(this.context) + ', id=' + this.id + ', verificationMethod=' + toString(this.verificationMethod) + ', assertionMethod=' + toString(this.assertionMethod) + ', authentication=' + toString(this.authentication) + ', capabilityInvocation=' + toString(this.capabilityInvocation) + ', capabilityDelegation=' + toString(this.capabilityDelegation) + ', keyAgreement=' + toString(this.keyAgreement) + ')';
  };
  protoOf(DidCheqdDocument).hashCode = function () {
    var result = hashCode(this.context);
    result = imul(result, 31) + getStringHashCode(this.id) | 0;
    result = imul(result, 31) + (this.verificationMethod == null ? 0 : hashCode(this.verificationMethod)) | 0;
    result = imul(result, 31) + (this.assertionMethod == null ? 0 : hashCode(this.assertionMethod)) | 0;
    result = imul(result, 31) + (this.authentication == null ? 0 : hashCode(this.authentication)) | 0;
    result = imul(result, 31) + (this.capabilityInvocation == null ? 0 : hashCode(this.capabilityInvocation)) | 0;
    result = imul(result, 31) + (this.capabilityDelegation == null ? 0 : hashCode(this.capabilityDelegation)) | 0;
    result = imul(result, 31) + (this.keyAgreement == null ? 0 : hashCode(this.keyAgreement)) | 0;
    return result;
  };
  protoOf(DidCheqdDocument).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DidCheqdDocument))
      return false;
    var tmp0_other_with_cast = other instanceof DidCheqdDocument ? other : THROW_CCE();
    if (!equals_0(this.context, tmp0_other_with_cast.context))
      return false;
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!equals_0(this.verificationMethod, tmp0_other_with_cast.verificationMethod))
      return false;
    if (!equals_0(this.assertionMethod, tmp0_other_with_cast.assertionMethod))
      return false;
    if (!equals_0(this.authentication, tmp0_other_with_cast.authentication))
      return false;
    if (!equals_0(this.capabilityInvocation, tmp0_other_with_cast.capabilityInvocation))
      return false;
    if (!equals_0(this.capabilityDelegation, tmp0_other_with_cast.capabilityDelegation))
      return false;
    if (!equals_0(this.keyAgreement, tmp0_other_with_cast.keyAgreement))
      return false;
    return true;
  };
  function DidDocument$Companion$$childSerializers$_anonymous__v0p2uo() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function DidDocument_init_$Init$(jsonObject, $this) {
    DidDocument.call($this, toMap(jsonObject));
    return $this;
  }
  function secondaryConstructor_0(jsonObject) {
    return DidDocument_init_$Init$(jsonObject, objectCreate(protoOf(DidDocument)));
  }
  function Companion_1() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o9y_1 = [lazy(tmp_0, DidDocument$Companion$$childSerializers$_anonymous__v0p2uo)];
  }
  protoOf(Companion_1).y4r = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_7;
  function Companion_getInstance_3() {
    if (Companion_instance_7 == null)
      new Companion_1();
    return Companion_instance_7;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidDocument', this, 1);
    tmp0_serialDesc.j29('content', false);
    this.p9y_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).q9y = function (encoder, value) {
    var tmp0_desc = this.p9y_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().o9y_1;
    tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.r9y_1);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_1).h1y = function (encoder, value) {
    return this.q9y(encoder, value instanceof DidDocument ? value : THROW_CCE());
  };
  protoOf($serializer_1).i1y = function (decoder) {
    var tmp0_desc = this.p9y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.t21(tmp0_desc);
    var tmp6_cached = Companion_getInstance_3().o9y_1;
    if (tmp5_input.j22()) {
      tmp4_local0 = tmp5_input.f22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.f22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.u21(tmp0_desc);
    return DidDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_1).g1y = function () {
    return this.p9y_1;
  };
  protoOf($serializer_1).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_3().o9y_1[0].z()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function DidDocument_init_$Init$_0(seen0, content, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_1().p9y_1);
    }
    $this.r9y_1 = content;
    return $this;
  }
  function DidDocument_init_$Create$(seen0, content, serializationConstructorMarker) {
    return DidDocument_init_$Init$_0(seen0, content, serializationConstructorMarker, objectCreate(protoOf(DidDocument)));
  }
  function DidDocument(content) {
    Companion_getInstance_3();
    this.r9y_1 = content;
  }
  protoOf(DidDocument).equals = function (other) {
    return equals_0(this.r9y_1, other);
  };
  protoOf(DidDocument).hashCode = function () {
    return hashCode(this.r9y_1);
  };
  protoOf(DidDocument).toString = function () {
    return JsonUtils_getInstance().printAsJson(this.r9y_1);
  };
  protoOf(DidDocument).toJsonObject = function () {
    return new JsonObject(this.r9y_1);
  };
  protoOf(DidDocument).h = function () {
    return this.r9y_1.h();
  };
  protoOf(DidDocument).e2n = function (key) {
    return this.r9y_1.i2(key);
  };
  protoOf(DidDocument).i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.e2n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(DidDocument).a4s = function (value) {
    return this.r9y_1.j2(value);
  };
  protoOf(DidDocument).j2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.a4s(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(DidDocument).af = function (key) {
    return this.r9y_1.k2(key);
  };
  protoOf(DidDocument).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.af((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(DidDocument).asJsReadonlyMapView = function () {
    return this.r9y_1.asJsReadonlyMapView();
  };
  protoOf(DidDocument).s = function () {
    return this.r9y_1.s();
  };
  protoOf(DidDocument).l2 = function () {
    return this.r9y_1.l2();
  };
  protoOf(DidDocument).m2 = function () {
    return this.r9y_1.m2();
  };
  protoOf(DidDocument).x = function () {
    return this.r9y_1.x();
  };
  function DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_1() {
    return new ArrayListSerializer($serializer_getInstance_2());
  }
  function DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_2() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_3() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_4() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_5() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_6() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidEbsiDocument$Companion$json$lambda($this$Json) {
    $this$Json.j4q_1 = false;
    return Unit_instance;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).y4r = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_8;
  function Companion_getInstance_4() {
    return Companion_instance_8;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidEbsiDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('type', false);
    tmp0_serialDesc.j29('controller', false);
    tmp0_serialDesc.j29('publicKeyJwk', false);
    this.s9y_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).t9y = function (encoder, value) {
    var tmp0_desc = this.s9y_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.id);
    tmp1_output.i23(tmp0_desc, 1, value.type);
    tmp1_output.i23(tmp0_desc, 2, value.controller);
    tmp1_output.k23(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_2).h1y = function (encoder, value) {
    return this.t9y(encoder, value instanceof VerificationMethod_0 ? value : THROW_CCE());
  };
  protoOf($serializer_2).i1y = function (decoder) {
    var tmp0_desc = this.s9y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.t21(tmp0_desc);
    if (tmp8_input.j22()) {
      tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.u21(tmp0_desc);
    return VerificationMethod_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).g1y = function () {
    return this.s9y_1;
  };
  protoOf($serializer_2).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), JsonObjectSerializer_getInstance()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function VerificationMethod_init_$Init$_0(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().s9y_1);
    }
    $this.id = id;
    $this.type = type;
    $this.controller = controller;
    $this.publicKeyJwk = publicKeyJwk;
    return $this;
  }
  function VerificationMethod_init_$Create$_0(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker) {
    return VerificationMethod_init_$Init$_0(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker, objectCreate(protoOf(VerificationMethod_0)));
  }
  function Companion_3() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_11 = lazy(tmp_10, DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_4);
    var tmp_12 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_13 = lazy(tmp_12, DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_5);
    var tmp_14 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.u9y_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp_13, lazy(tmp_14, DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_6)];
    var tmp_15 = this;
    tmp_15.v9y_1 = Json(VOID, DidEbsiDocument$Companion$json$lambda);
  }
  protoOf(Companion_3).y4r = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_9;
  function Companion_getInstance_5() {
    if (Companion_instance_9 == null)
      new Companion_3();
    return Companion_instance_9;
  }
  function VerificationMethod_0(id, type, controller, publicKeyJwk) {
    this.id = id;
    this.type = type;
    this.controller = controller;
    this.publicKeyJwk = publicKeyJwk;
  }
  protoOf(VerificationMethod_0).h69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_0).z9x = function () {
    return this.type;
  };
  protoOf(VerificationMethod_0).a9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_0).b9y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_0).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_0).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod_0).dp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_0).q6x = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_0).c9y = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_0(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_0).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.c9y(id, type, controller, publicKeyJwk) : $super.c9y.call(this, id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_0).toString = function () {
    return 'VerificationMethod(id=' + this.id + ', type=' + this.type + ', controller=' + this.controller + ', publicKeyJwk=' + this.publicKeyJwk.toString() + ')';
  };
  protoOf(VerificationMethod_0).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + getStringHashCode(this.type) | 0;
    result = imul(result, 31) + getStringHashCode(this.controller) | 0;
    result = imul(result, 31) + this.publicKeyJwk.hashCode() | 0;
    return result;
  };
  protoOf(VerificationMethod_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerificationMethod_0))
      return false;
    var tmp0_other_with_cast = other instanceof VerificationMethod_0 ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!(this.type === tmp0_other_with_cast.type))
      return false;
    if (!(this.controller === tmp0_other_with_cast.controller))
      return false;
    if (!this.publicKeyJwk.equals(tmp0_other_with_cast.publicKeyJwk))
      return false;
    return true;
  };
  function DidEbsiDocument_init_$Init$(didDoc, $this) {
    var tmp = DidUtils_getInstance().DEFAULT_CONTEXT;
    var tmp_0 = get_jsonPrimitive(ensureNotNull(didDoc.af('id'))).c4s();
    var tmp0_safe_receiver = didDoc.af('controller');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonArray(tmp0_safe_receiver);
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_safe_receiver, 10));
      var _iterator__ex2g4s = tmp1_safe_receiver.p();
      while (_iterator__ex2g4s.q()) {
        var item = _iterator__ex2g4s.r();
        var tmp$ret$0 = get_jsonPrimitive(item).c4s();
        destination.n(tmp$ret$0);
      }
      tmp_1 = destination;
    }
    var tmp_2 = tmp_1;
    var tmp2_safe_receiver = didDoc.af('verificationMethod');
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonArray(tmp2_safe_receiver);
    var tmp_3;
    if (tmp3_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp3_safe_receiver, 10));
      var _iterator__ex2g4s_0 = tmp3_safe_receiver.p();
      while (_iterator__ex2g4s_0.q()) {
        var item_0 = _iterator__ex2g4s_0.r();
        var verificationMethod = get_jsonObject(item_0);
        var id = get_jsonPrimitive(ensureNotNull(verificationMethod.af('id'))).c4s();
        var type = get_jsonPrimitive(ensureNotNull(verificationMethod.af('type'))).c4s();
        var controller = get_jsonPrimitive(ensureNotNull(verificationMethod.af('controller'))).c4s();
        var publicKeyJwk = get_jsonObject(ensureNotNull(verificationMethod.af('publicKeyJwk')));
        var tmp$ret$3 = new VerificationMethod_0(id, type, controller, publicKeyJwk);
        destination_0.n(tmp$ret$3);
      }
      tmp_3 = destination_0;
    }
    var tmp_4 = tmp_3;
    var tmp4_safe_receiver = didDoc.af('authentication');
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : get_jsonArray(tmp4_safe_receiver);
    var tmp_5;
    if (tmp5_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp5_safe_receiver, 10));
      var _iterator__ex2g4s_1 = tmp5_safe_receiver.p();
      while (_iterator__ex2g4s_1.q()) {
        var item_1 = _iterator__ex2g4s_1.r();
        var tmp$ret$6 = get_jsonPrimitive(item_1).c4s();
        destination_1.n(tmp$ret$6);
      }
      tmp_5 = destination_1;
    }
    var tmp_6 = tmp_5;
    var tmp6_safe_receiver = didDoc.af('assertionMethod');
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonArray(tmp6_safe_receiver);
    var tmp_7;
    if (tmp7_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp7_safe_receiver, 10));
      var _iterator__ex2g4s_2 = tmp7_safe_receiver.p();
      while (_iterator__ex2g4s_2.q()) {
        var item_2 = _iterator__ex2g4s_2.r();
        var tmp$ret$9 = get_jsonPrimitive(item_2).c4s();
        destination_2.n(tmp$ret$9);
      }
      tmp_7 = destination_2;
    }
    var tmp_8 = tmp_7;
    var tmp8_safe_receiver = didDoc.af('capabilityInvocation');
    var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : get_jsonArray(tmp8_safe_receiver);
    var tmp_9;
    if (tmp9_safe_receiver == null) {
      tmp_9 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp9_safe_receiver, 10));
      var _iterator__ex2g4s_3 = tmp9_safe_receiver.p();
      while (_iterator__ex2g4s_3.q()) {
        var item_3 = _iterator__ex2g4s_3.r();
        var tmp$ret$12 = get_jsonPrimitive(item_3).c4s();
        destination_3.n(tmp$ret$12);
      }
      tmp_9 = destination_3;
    }
    var tmp_10 = tmp_9;
    var tmp10_safe_receiver = didDoc.af('capabilityDelegation');
    var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : get_jsonArray(tmp10_safe_receiver);
    var tmp_11;
    if (tmp11_safe_receiver == null) {
      tmp_11 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_4 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp11_safe_receiver, 10));
      var _iterator__ex2g4s_4 = tmp11_safe_receiver.p();
      while (_iterator__ex2g4s_4.q()) {
        var item_4 = _iterator__ex2g4s_4.r();
        var tmp$ret$15 = get_jsonPrimitive(item_4).c4s();
        destination_4.n(tmp$ret$15);
      }
      tmp_11 = destination_4;
    }
    var tmp_12 = tmp_11;
    var tmp12_safe_receiver = didDoc.af('keyAgreement');
    var tmp13_safe_receiver = tmp12_safe_receiver == null ? null : get_jsonArray(tmp12_safe_receiver);
    var tmp_13;
    if (tmp13_safe_receiver == null) {
      tmp_13 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_5 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp13_safe_receiver, 10));
      var _iterator__ex2g4s_5 = tmp13_safe_receiver.p();
      while (_iterator__ex2g4s_5.q()) {
        var item_5 = _iterator__ex2g4s_5.r();
        var tmp$ret$18 = get_jsonPrimitive(item_5).c4s();
        destination_5.n(tmp$ret$18);
      }
      tmp_13 = destination_5;
    }
    DidEbsiDocument.call($this, tmp, tmp_0, tmp_2, tmp_4, tmp_6, tmp_8, tmp_10, tmp_12, tmp_13);
    return $this;
  }
  function secondaryConstructor_1(didDoc) {
    return DidEbsiDocument_init_$Init$(didDoc, objectCreate(protoOf(DidEbsiDocument)));
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidEbsiDocument', this, 9);
    tmp0_serialDesc.j29('@context', true);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('controller', false);
    tmp0_serialDesc.j29('verificationMethod', false);
    tmp0_serialDesc.j29('authentication', false);
    tmp0_serialDesc.j29('assertionMethod', false);
    tmp0_serialDesc.j29('capabilityInvocation', false);
    tmp0_serialDesc.j29('capabilityDelegation', false);
    tmp0_serialDesc.j29('keyAgreement', false);
    this.w9y_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).x9y = function (encoder, value) {
    var tmp0_desc = this.w9y_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().u9y_1;
    tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    tmp1_output.i23(tmp0_desc, 1, value.id);
    tmp1_output.m23(tmp0_desc, 2, tmp2_cached[2].z(), value.controller);
    tmp1_output.m23(tmp0_desc, 3, tmp2_cached[3].z(), value.verificationMethod);
    tmp1_output.m23(tmp0_desc, 4, tmp2_cached[4].z(), value.authentication);
    tmp1_output.m23(tmp0_desc, 5, tmp2_cached[5].z(), value.assertionMethod);
    tmp1_output.m23(tmp0_desc, 6, tmp2_cached[6].z(), value.capabilityInvocation);
    tmp1_output.m23(tmp0_desc, 7, tmp2_cached[7].z(), value.capabilityDelegation);
    tmp1_output.m23(tmp0_desc, 8, tmp2_cached[8].z(), value.keyAgreement);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_3).h1y = function (encoder, value) {
    return this.x9y(encoder, value instanceof DidEbsiDocument ? value : THROW_CCE());
  };
  protoOf($serializer_3).i1y = function (decoder) {
    var tmp0_desc = this.w9y_1;
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
    var tmp13_input = decoder.t21(tmp0_desc);
    var tmp14_cached = Companion_getInstance_5().u9y_1;
    if (tmp13_input.j22()) {
      tmp4_local0 = tmp13_input.f22(tmp0_desc, 0, tmp14_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.h22(tmp0_desc, 2, tmp14_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.h22(tmp0_desc, 3, tmp14_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.h22(tmp0_desc, 4, tmp14_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.h22(tmp0_desc, 5, tmp14_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.h22(tmp0_desc, 6, tmp14_cached[6].z(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.h22(tmp0_desc, 7, tmp14_cached[7].z(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.h22(tmp0_desc, 8, tmp14_cached[8].z(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.f22(tmp0_desc, 0, tmp14_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.h22(tmp0_desc, 2, tmp14_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.h22(tmp0_desc, 3, tmp14_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.h22(tmp0_desc, 4, tmp14_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.h22(tmp0_desc, 5, tmp14_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.h22(tmp0_desc, 6, tmp14_cached[6].z(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.h22(tmp0_desc, 7, tmp14_cached[7].z(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.h22(tmp0_desc, 8, tmp14_cached[8].z(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.u21(tmp0_desc);
    return DidEbsiDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_3).g1y = function () {
    return this.w9y_1;
  };
  protoOf($serializer_3).y29 = function () {
    var tmp0_cached = Companion_getInstance_5().u9y_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].z(), StringSerializer_getInstance(), get_nullable(tmp0_cached[2].z()), get_nullable(tmp0_cached[3].z()), get_nullable(tmp0_cached[4].z()), get_nullable(tmp0_cached[5].z()), get_nullable(tmp0_cached[6].z()), get_nullable(tmp0_cached[7].z()), get_nullable(tmp0_cached[8].z())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function DidEbsiDocument_init_$Init$_0(seen0, context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, $this) {
    if (!(510 === (510 & seen0))) {
      throwMissingFieldException(seen0, 510, $serializer_getInstance_3().w9y_1);
    }
    if (0 === (seen0 & 1))
      $this.context = DidUtils_getInstance().DEFAULT_CONTEXT;
    else
      $this.context = context;
    $this.id = id;
    $this.controller = controller;
    $this.verificationMethod = verificationMethod;
    $this.authentication = authentication;
    $this.assertionMethod = assertionMethod;
    $this.capabilityInvocation = capabilityInvocation;
    $this.capabilityDelegation = capabilityDelegation;
    $this.keyAgreement = keyAgreement;
    return $this;
  }
  function DidEbsiDocument_init_$Create$(seen0, context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker) {
    return DidEbsiDocument_init_$Init$_0(seen0, context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, objectCreate(protoOf(DidEbsiDocument)));
  }
  function DidEbsiDocument(context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement) {
    Companion_getInstance_5();
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    this.context = context;
    this.id = id;
    this.controller = controller;
    this.verificationMethod = verificationMethod;
    this.authentication = authentication;
    this.assertionMethod = assertionMethod;
    this.capabilityInvocation = capabilityInvocation;
    this.capabilityDelegation = capabilityDelegation;
    this.keyAgreement = keyAgreement;
  }
  protoOf(DidEbsiDocument).s9 = function () {
    return this.context;
  };
  protoOf(DidEbsiDocument).h69 = function () {
    return this.id;
  };
  protoOf(DidEbsiDocument).a9y = function () {
    return this.controller;
  };
  protoOf(DidEbsiDocument).g9y = function () {
    return this.verificationMethod;
  };
  protoOf(DidEbsiDocument).i9y = function () {
    return this.authentication;
  };
  protoOf(DidEbsiDocument).h9y = function () {
    return this.assertionMethod;
  };
  protoOf(DidEbsiDocument).j9y = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidEbsiDocument).k9y = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidEbsiDocument).l9y = function () {
    return this.keyAgreement;
  };
  protoOf(DidEbsiDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Companion_getInstance_5().v9y_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.i22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidEbsiDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.r4p(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidEbsiDocument).dc = function () {
    return this.context;
  };
  protoOf(DidEbsiDocument).ec = function () {
    return this.id;
  };
  protoOf(DidEbsiDocument).dp = function () {
    return this.controller;
  };
  protoOf(DidEbsiDocument).q6x = function () {
    return this.verificationMethod;
  };
  protoOf(DidEbsiDocument).x7h = function () {
    return this.authentication;
  };
  protoOf(DidEbsiDocument).p82 = function () {
    return this.assertionMethod;
  };
  protoOf(DidEbsiDocument).q82 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidEbsiDocument).m9y = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidEbsiDocument).y9y = function () {
    return this.keyAgreement;
  };
  protoOf(DidEbsiDocument).z9y = function (context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement) {
    return new DidEbsiDocument(context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement);
  };
  protoOf(DidEbsiDocument).copy = function (context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement, $super) {
    context = context === VOID ? this.context : context;
    id = id === VOID ? this.id : id;
    controller = controller === VOID ? this.controller : controller;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    authentication = authentication === VOID ? this.authentication : authentication;
    assertionMethod = assertionMethod === VOID ? this.assertionMethod : assertionMethod;
    capabilityInvocation = capabilityInvocation === VOID ? this.capabilityInvocation : capabilityInvocation;
    capabilityDelegation = capabilityDelegation === VOID ? this.capabilityDelegation : capabilityDelegation;
    keyAgreement = keyAgreement === VOID ? this.keyAgreement : keyAgreement;
    return $super === VOID ? this.z9y(context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.z9y.call(this, context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement);
  };
  protoOf(DidEbsiDocument).toString = function () {
    return 'DidEbsiDocument(context=' + toString_0(this.context) + ', id=' + this.id + ', controller=' + toString(this.controller) + ', verificationMethod=' + toString(this.verificationMethod) + ', authentication=' + toString(this.authentication) + ', assertionMethod=' + toString(this.assertionMethod) + ', capabilityInvocation=' + toString(this.capabilityInvocation) + ', capabilityDelegation=' + toString(this.capabilityDelegation) + ', keyAgreement=' + toString(this.keyAgreement) + ')';
  };
  protoOf(DidEbsiDocument).hashCode = function () {
    var result = hashCode(this.context);
    result = imul(result, 31) + getStringHashCode(this.id) | 0;
    result = imul(result, 31) + (this.controller == null ? 0 : hashCode(this.controller)) | 0;
    result = imul(result, 31) + (this.verificationMethod == null ? 0 : hashCode(this.verificationMethod)) | 0;
    result = imul(result, 31) + (this.authentication == null ? 0 : hashCode(this.authentication)) | 0;
    result = imul(result, 31) + (this.assertionMethod == null ? 0 : hashCode(this.assertionMethod)) | 0;
    result = imul(result, 31) + (this.capabilityInvocation == null ? 0 : hashCode(this.capabilityInvocation)) | 0;
    result = imul(result, 31) + (this.capabilityDelegation == null ? 0 : hashCode(this.capabilityDelegation)) | 0;
    result = imul(result, 31) + (this.keyAgreement == null ? 0 : hashCode(this.keyAgreement)) | 0;
    return result;
  };
  protoOf(DidEbsiDocument).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DidEbsiDocument))
      return false;
    var tmp0_other_with_cast = other instanceof DidEbsiDocument ? other : THROW_CCE();
    if (!equals_0(this.context, tmp0_other_with_cast.context))
      return false;
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!equals_0(this.controller, tmp0_other_with_cast.controller))
      return false;
    if (!equals_0(this.verificationMethod, tmp0_other_with_cast.verificationMethod))
      return false;
    if (!equals_0(this.authentication, tmp0_other_with_cast.authentication))
      return false;
    if (!equals_0(this.assertionMethod, tmp0_other_with_cast.assertionMethod))
      return false;
    if (!equals_0(this.capabilityInvocation, tmp0_other_with_cast.capabilityInvocation))
      return false;
    if (!equals_0(this.capabilityDelegation, tmp0_other_with_cast.capabilityDelegation))
      return false;
    if (!equals_0(this.keyAgreement, tmp0_other_with_cast.keyAgreement))
      return false;
    return true;
  };
  function Companion_4() {
  }
  protoOf(Companion_4).y4r = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_10;
  function Companion_getInstance_6() {
    return Companion_instance_10;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidJwkDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('type', false);
    tmp0_serialDesc.j29('controller', false);
    tmp0_serialDesc.j29('publicKeyJwk', false);
    this.a9z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).b9z = function (encoder, value) {
    var tmp0_desc = this.a9z_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.id);
    tmp1_output.i23(tmp0_desc, 1, value.type);
    tmp1_output.i23(tmp0_desc, 2, value.controller);
    tmp1_output.k23(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_4).h1y = function (encoder, value) {
    return this.b9z(encoder, value instanceof VerificationMethod_1 ? value : THROW_CCE());
  };
  protoOf($serializer_4).i1y = function (decoder) {
    var tmp0_desc = this.a9z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.t21(tmp0_desc);
    if (tmp8_input.j22()) {
      tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.u21(tmp0_desc);
    return VerificationMethod_init_$Create$_1(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_4).g1y = function () {
    return this.a9z_1;
  };
  protoOf($serializer_4).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), JsonObjectSerializer_getInstance()];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function VerificationMethod_init_$Init$_1(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_4().a9z_1);
    }
    $this.id = id;
    $this.type = type;
    $this.controller = controller;
    $this.publicKeyJwk = publicKeyJwk;
    return $this;
  }
  function VerificationMethod_init_$Create$_1(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker) {
    return VerificationMethod_init_$Init$_1(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker, objectCreate(protoOf(VerificationMethod_1)));
  }
  function DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_0() {
    return new ArrayListSerializer($serializer_getInstance_4());
  }
  function DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_1() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_2() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_3() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_4() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_5() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function VerificationMethod_1(id, type, controller, publicKeyJwk) {
    this.id = id;
    this.type = type;
    this.controller = controller;
    this.publicKeyJwk = publicKeyJwk;
  }
  protoOf(VerificationMethod_1).h69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_1).z9x = function () {
    return this.type;
  };
  protoOf(VerificationMethod_1).a9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_1).b9y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_1).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_1).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod_1).dp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_1).q6x = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_1).c9y = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_1(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_1).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.c9y(id, type, controller, publicKeyJwk) : $super.c9y.call(this, id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_1).toString = function () {
    return 'VerificationMethod(id=' + this.id + ', type=' + this.type + ', controller=' + this.controller + ', publicKeyJwk=' + this.publicKeyJwk.toString() + ')';
  };
  protoOf(VerificationMethod_1).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + getStringHashCode(this.type) | 0;
    result = imul(result, 31) + getStringHashCode(this.controller) | 0;
    result = imul(result, 31) + this.publicKeyJwk.hashCode() | 0;
    return result;
  };
  protoOf(VerificationMethod_1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerificationMethod_1))
      return false;
    var tmp0_other_with_cast = other instanceof VerificationMethod_1 ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!(this.type === tmp0_other_with_cast.type))
      return false;
    if (!(this.controller === tmp0_other_with_cast.controller))
      return false;
    if (!this.publicKeyJwk.equals(tmp0_other_with_cast.publicKeyJwk))
      return false;
    return true;
  };
  function DidJwkDocument_init_$Init$(did, didJwk, $this) {
    DidJwkDocument.call($this, DidUtils_getInstance().DEFAULT_CONTEXT, did, listOf_0(new VerificationMethod_1(did + '#0', 'JsonWebKey2020', did, didJwk)), listOf_0(did + '#0'), listOf_0(did + '#0'), listOf_0(did + '#0'), listOf_0(did + '#0'), listOf_0(did + '#0'));
    return $this;
  }
  function secondaryConstructor_2(did, didJwk) {
    return DidJwkDocument_init_$Init$(did, didJwk, objectCreate(protoOf(DidJwkDocument)));
  }
  function Companion_5() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_11 = lazy(tmp_10, DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_4);
    var tmp_12 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c9z_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_5)];
  }
  protoOf(Companion_5).y4r = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_11;
  function Companion_getInstance_7() {
    if (Companion_instance_11 == null)
      new Companion_5();
    return Companion_instance_11;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidJwkDocument', this, 8);
    tmp0_serialDesc.j29('@context', true);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('verificationMethod', false);
    tmp0_serialDesc.j29('assertionMethod', false);
    tmp0_serialDesc.j29('authentication', false);
    tmp0_serialDesc.j29('capabilityInvocation', false);
    tmp0_serialDesc.j29('capabilityDelegation', false);
    tmp0_serialDesc.j29('keyAgreement', false);
    this.d9z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).e9z = function (encoder, value) {
    var tmp0_desc = this.d9z_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().c9z_1;
    tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    tmp1_output.i23(tmp0_desc, 1, value.id);
    tmp1_output.m23(tmp0_desc, 2, tmp2_cached[2].z(), value.verificationMethod);
    tmp1_output.m23(tmp0_desc, 3, tmp2_cached[3].z(), value.assertionMethod);
    tmp1_output.m23(tmp0_desc, 4, tmp2_cached[4].z(), value.authentication);
    tmp1_output.m23(tmp0_desc, 5, tmp2_cached[5].z(), value.capabilityInvocation);
    tmp1_output.m23(tmp0_desc, 6, tmp2_cached[6].z(), value.capabilityDelegation);
    tmp1_output.m23(tmp0_desc, 7, tmp2_cached[7].z(), value.keyAgreement);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_5).h1y = function (encoder, value) {
    return this.e9z(encoder, value instanceof DidJwkDocument ? value : THROW_CCE());
  };
  protoOf($serializer_5).i1y = function (decoder) {
    var tmp0_desc = this.d9z_1;
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
    var tmp12_input = decoder.t21(tmp0_desc);
    var tmp13_cached = Companion_getInstance_7().c9z_1;
    if (tmp12_input.j22()) {
      tmp4_local0 = tmp12_input.f22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.h22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.h22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.h22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.h22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.h22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.h22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.f22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.h22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.h22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.h22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.h22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.h22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.h22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.u21(tmp0_desc);
    return DidJwkDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_5).g1y = function () {
    return this.d9z_1;
  };
  protoOf($serializer_5).y29 = function () {
    var tmp0_cached = Companion_getInstance_7().c9z_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].z(), StringSerializer_getInstance(), get_nullable(tmp0_cached[2].z()), get_nullable(tmp0_cached[3].z()), get_nullable(tmp0_cached[4].z()), get_nullable(tmp0_cached[5].z()), get_nullable(tmp0_cached[6].z()), get_nullable(tmp0_cached[7].z())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function DidJwkDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, $this) {
    if (!(254 === (254 & seen0))) {
      throwMissingFieldException(seen0, 254, $serializer_getInstance_5().d9z_1);
    }
    if (0 === (seen0 & 1))
      $this.context = DidUtils_getInstance().DEFAULT_CONTEXT;
    else
      $this.context = context;
    $this.id = id;
    $this.verificationMethod = verificationMethod;
    $this.assertionMethod = assertionMethod;
    $this.authentication = authentication;
    $this.capabilityInvocation = capabilityInvocation;
    $this.capabilityDelegation = capabilityDelegation;
    $this.keyAgreement = keyAgreement;
    return $this;
  }
  function DidJwkDocument_init_$Create$(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker) {
    return DidJwkDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, objectCreate(protoOf(DidJwkDocument)));
  }
  function DidJwkDocument(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
    Companion_getInstance_7();
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    this.context = context;
    this.id = id;
    this.verificationMethod = verificationMethod;
    this.assertionMethod = assertionMethod;
    this.authentication = authentication;
    this.capabilityInvocation = capabilityInvocation;
    this.capabilityDelegation = capabilityDelegation;
    this.keyAgreement = keyAgreement;
  }
  protoOf(DidJwkDocument).s9 = function () {
    return this.context;
  };
  protoOf(DidJwkDocument).h69 = function () {
    return this.id;
  };
  protoOf(DidJwkDocument).g9y = function () {
    return this.verificationMethod;
  };
  protoOf(DidJwkDocument).h9y = function () {
    return this.assertionMethod;
  };
  protoOf(DidJwkDocument).i9y = function () {
    return this.authentication;
  };
  protoOf(DidJwkDocument).j9y = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidJwkDocument).k9y = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidJwkDocument).l9y = function () {
    return this.keyAgreement;
  };
  protoOf(DidJwkDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.i22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidJwkDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.r4p(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidJwkDocument).dc = function () {
    return this.context;
  };
  protoOf(DidJwkDocument).ec = function () {
    return this.id;
  };
  protoOf(DidJwkDocument).dp = function () {
    return this.verificationMethod;
  };
  protoOf(DidJwkDocument).q6x = function () {
    return this.assertionMethod;
  };
  protoOf(DidJwkDocument).x7h = function () {
    return this.authentication;
  };
  protoOf(DidJwkDocument).p82 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidJwkDocument).q82 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidJwkDocument).m9y = function () {
    return this.keyAgreement;
  };
  protoOf(DidJwkDocument).f9z = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
    return new DidJwkDocument(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
  };
  protoOf(DidJwkDocument).copy = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, $super) {
    context = context === VOID ? this.context : context;
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    assertionMethod = assertionMethod === VOID ? this.assertionMethod : assertionMethod;
    authentication = authentication === VOID ? this.authentication : authentication;
    capabilityInvocation = capabilityInvocation === VOID ? this.capabilityInvocation : capabilityInvocation;
    capabilityDelegation = capabilityDelegation === VOID ? this.capabilityDelegation : capabilityDelegation;
    keyAgreement = keyAgreement === VOID ? this.keyAgreement : keyAgreement;
    return $super === VOID ? this.f9z(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.f9z.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
  };
  protoOf(DidJwkDocument).toString = function () {
    return 'DidJwkDocument(context=' + toString_0(this.context) + ', id=' + this.id + ', verificationMethod=' + toString(this.verificationMethod) + ', assertionMethod=' + toString(this.assertionMethod) + ', authentication=' + toString(this.authentication) + ', capabilityInvocation=' + toString(this.capabilityInvocation) + ', capabilityDelegation=' + toString(this.capabilityDelegation) + ', keyAgreement=' + toString(this.keyAgreement) + ')';
  };
  protoOf(DidJwkDocument).hashCode = function () {
    var result = hashCode(this.context);
    result = imul(result, 31) + getStringHashCode(this.id) | 0;
    result = imul(result, 31) + (this.verificationMethod == null ? 0 : hashCode(this.verificationMethod)) | 0;
    result = imul(result, 31) + (this.assertionMethod == null ? 0 : hashCode(this.assertionMethod)) | 0;
    result = imul(result, 31) + (this.authentication == null ? 0 : hashCode(this.authentication)) | 0;
    result = imul(result, 31) + (this.capabilityInvocation == null ? 0 : hashCode(this.capabilityInvocation)) | 0;
    result = imul(result, 31) + (this.capabilityDelegation == null ? 0 : hashCode(this.capabilityDelegation)) | 0;
    result = imul(result, 31) + (this.keyAgreement == null ? 0 : hashCode(this.keyAgreement)) | 0;
    return result;
  };
  protoOf(DidJwkDocument).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DidJwkDocument))
      return false;
    var tmp0_other_with_cast = other instanceof DidJwkDocument ? other : THROW_CCE();
    if (!equals_0(this.context, tmp0_other_with_cast.context))
      return false;
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!equals_0(this.verificationMethod, tmp0_other_with_cast.verificationMethod))
      return false;
    if (!equals_0(this.assertionMethod, tmp0_other_with_cast.assertionMethod))
      return false;
    if (!equals_0(this.authentication, tmp0_other_with_cast.authentication))
      return false;
    if (!equals_0(this.capabilityInvocation, tmp0_other_with_cast.capabilityInvocation))
      return false;
    if (!equals_0(this.capabilityDelegation, tmp0_other_with_cast.capabilityDelegation))
      return false;
    if (!equals_0(this.keyAgreement, tmp0_other_with_cast.keyAgreement))
      return false;
    return true;
  };
  function Companion_6() {
  }
  protoOf(Companion_6).y4r = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_12;
  function Companion_getInstance_8() {
    return Companion_instance_12;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidKeyDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('type', false);
    tmp0_serialDesc.j29('controller', false);
    tmp0_serialDesc.j29('publicKeyJwk', false);
    this.g9z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).h9z = function (encoder, value) {
    var tmp0_desc = this.g9z_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.id);
    tmp1_output.i23(tmp0_desc, 1, value.type);
    tmp1_output.i23(tmp0_desc, 2, value.controller);
    tmp1_output.k23(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_6).h1y = function (encoder, value) {
    return this.h9z(encoder, value instanceof VerificationMethod_2 ? value : THROW_CCE());
  };
  protoOf($serializer_6).i1y = function (decoder) {
    var tmp0_desc = this.g9z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.t21(tmp0_desc);
    if (tmp8_input.j22()) {
      tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.u21(tmp0_desc);
    return VerificationMethod_init_$Create$_2(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_6).g1y = function () {
    return this.g9z_1;
  };
  protoOf($serializer_6).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), JsonObjectSerializer_getInstance()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function VerificationMethod_init_$Init$_2(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_6().g9z_1);
    }
    $this.id = id;
    $this.type = type;
    $this.controller = controller;
    $this.publicKeyJwk = publicKeyJwk;
    return $this;
  }
  function VerificationMethod_init_$Create$_2(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker) {
    return VerificationMethod_init_$Init$_2(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker, objectCreate(protoOf(VerificationMethod_2)));
  }
  function DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_0() {
    return new ArrayListSerializer($serializer_getInstance_6());
  }
  function DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_1() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_2() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_3() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_4() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_5() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function VerificationMethod_2(id, type, controller, publicKeyJwk) {
    this.id = id;
    this.type = type;
    this.controller = controller;
    this.publicKeyJwk = publicKeyJwk;
  }
  protoOf(VerificationMethod_2).h69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_2).z9x = function () {
    return this.type;
  };
  protoOf(VerificationMethod_2).a9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_2).b9y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_2).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_2).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod_2).dp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_2).q6x = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_2).c9y = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_2(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_2).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.c9y(id, type, controller, publicKeyJwk) : $super.c9y.call(this, id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_2).toString = function () {
    return 'VerificationMethod(id=' + this.id + ', type=' + this.type + ', controller=' + this.controller + ', publicKeyJwk=' + this.publicKeyJwk.toString() + ')';
  };
  protoOf(VerificationMethod_2).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + getStringHashCode(this.type) | 0;
    result = imul(result, 31) + getStringHashCode(this.controller) | 0;
    result = imul(result, 31) + this.publicKeyJwk.hashCode() | 0;
    return result;
  };
  protoOf(VerificationMethod_2).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerificationMethod_2))
      return false;
    var tmp0_other_with_cast = other instanceof VerificationMethod_2 ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!(this.type === tmp0_other_with_cast.type))
      return false;
    if (!(this.controller === tmp0_other_with_cast.controller))
      return false;
    if (!this.publicKeyJwk.equals(tmp0_other_with_cast.publicKeyJwk))
      return false;
    return true;
  };
  function DidKeyDocument_init_$Init$(did, identifier, didKey, $this) {
    DidKeyDocument.call($this, DidUtils_getInstance().DEFAULT_CONTEXT, did, listOf_0(new VerificationMethod_2(did + '#' + identifier, 'JsonWebKey2020', did, didKey)), listOf_0(did + '#' + identifier), listOf_0(did + '#' + identifier), listOf_0(did + '#' + identifier), listOf_0(did + '#' + identifier), listOf_0(did + '#' + identifier));
    return $this;
  }
  function secondaryConstructor_3(did, identifier, didKey) {
    return DidKeyDocument_init_$Init$(did, identifier, didKey, objectCreate(protoOf(DidKeyDocument)));
  }
  function Companion_7() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_11 = lazy(tmp_10, DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_4);
    var tmp_12 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.i9z_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_5)];
  }
  protoOf(Companion_7).y4r = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_13;
  function Companion_getInstance_9() {
    if (Companion_instance_13 == null)
      new Companion_7();
    return Companion_instance_13;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidKeyDocument', this, 8);
    tmp0_serialDesc.j29('@context', true);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('verificationMethod', false);
    tmp0_serialDesc.j29('assertionMethod', false);
    tmp0_serialDesc.j29('authentication', false);
    tmp0_serialDesc.j29('capabilityInvocation', false);
    tmp0_serialDesc.j29('capabilityDelegation', false);
    tmp0_serialDesc.j29('keyAgreement', false);
    this.j9z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).k9z = function (encoder, value) {
    var tmp0_desc = this.j9z_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().i9z_1;
    tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    tmp1_output.i23(tmp0_desc, 1, value.id);
    tmp1_output.m23(tmp0_desc, 2, tmp2_cached[2].z(), value.verificationMethod);
    tmp1_output.m23(tmp0_desc, 3, tmp2_cached[3].z(), value.assertionMethod);
    tmp1_output.m23(tmp0_desc, 4, tmp2_cached[4].z(), value.authentication);
    tmp1_output.m23(tmp0_desc, 5, tmp2_cached[5].z(), value.capabilityInvocation);
    tmp1_output.m23(tmp0_desc, 6, tmp2_cached[6].z(), value.capabilityDelegation);
    tmp1_output.m23(tmp0_desc, 7, tmp2_cached[7].z(), value.keyAgreement);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_7).h1y = function (encoder, value) {
    return this.k9z(encoder, value instanceof DidKeyDocument ? value : THROW_CCE());
  };
  protoOf($serializer_7).i1y = function (decoder) {
    var tmp0_desc = this.j9z_1;
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
    var tmp12_input = decoder.t21(tmp0_desc);
    var tmp13_cached = Companion_getInstance_9().i9z_1;
    if (tmp12_input.j22()) {
      tmp4_local0 = tmp12_input.f22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.h22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.h22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.h22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.h22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.h22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.h22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.f22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.h22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.h22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.h22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.h22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.h22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.h22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.u21(tmp0_desc);
    return DidKeyDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_7).g1y = function () {
    return this.j9z_1;
  };
  protoOf($serializer_7).y29 = function () {
    var tmp0_cached = Companion_getInstance_9().i9z_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].z(), StringSerializer_getInstance(), get_nullable(tmp0_cached[2].z()), get_nullable(tmp0_cached[3].z()), get_nullable(tmp0_cached[4].z()), get_nullable(tmp0_cached[5].z()), get_nullable(tmp0_cached[6].z()), get_nullable(tmp0_cached[7].z())];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function DidKeyDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, $this) {
    if (!(254 === (254 & seen0))) {
      throwMissingFieldException(seen0, 254, $serializer_getInstance_7().j9z_1);
    }
    if (0 === (seen0 & 1))
      $this.context = DidUtils_getInstance().DEFAULT_CONTEXT;
    else
      $this.context = context;
    $this.id = id;
    $this.verificationMethod = verificationMethod;
    $this.assertionMethod = assertionMethod;
    $this.authentication = authentication;
    $this.capabilityInvocation = capabilityInvocation;
    $this.capabilityDelegation = capabilityDelegation;
    $this.keyAgreement = keyAgreement;
    return $this;
  }
  function DidKeyDocument_init_$Create$(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker) {
    return DidKeyDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, objectCreate(protoOf(DidKeyDocument)));
  }
  function DidKeyDocument(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
    Companion_getInstance_9();
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    this.context = context;
    this.id = id;
    this.verificationMethod = verificationMethod;
    this.assertionMethod = assertionMethod;
    this.authentication = authentication;
    this.capabilityInvocation = capabilityInvocation;
    this.capabilityDelegation = capabilityDelegation;
    this.keyAgreement = keyAgreement;
  }
  protoOf(DidKeyDocument).s9 = function () {
    return this.context;
  };
  protoOf(DidKeyDocument).h69 = function () {
    return this.id;
  };
  protoOf(DidKeyDocument).g9y = function () {
    return this.verificationMethod;
  };
  protoOf(DidKeyDocument).h9y = function () {
    return this.assertionMethod;
  };
  protoOf(DidKeyDocument).i9y = function () {
    return this.authentication;
  };
  protoOf(DidKeyDocument).j9y = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidKeyDocument).k9y = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidKeyDocument).l9y = function () {
    return this.keyAgreement;
  };
  protoOf(DidKeyDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.i22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidKeyDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.r4p(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidKeyDocument).dc = function () {
    return this.context;
  };
  protoOf(DidKeyDocument).ec = function () {
    return this.id;
  };
  protoOf(DidKeyDocument).dp = function () {
    return this.verificationMethod;
  };
  protoOf(DidKeyDocument).q6x = function () {
    return this.assertionMethod;
  };
  protoOf(DidKeyDocument).x7h = function () {
    return this.authentication;
  };
  protoOf(DidKeyDocument).p82 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidKeyDocument).q82 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidKeyDocument).m9y = function () {
    return this.keyAgreement;
  };
  protoOf(DidKeyDocument).l9z = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
    return new DidKeyDocument(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
  };
  protoOf(DidKeyDocument).copy = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, $super) {
    context = context === VOID ? this.context : context;
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    assertionMethod = assertionMethod === VOID ? this.assertionMethod : assertionMethod;
    authentication = authentication === VOID ? this.authentication : authentication;
    capabilityInvocation = capabilityInvocation === VOID ? this.capabilityInvocation : capabilityInvocation;
    capabilityDelegation = capabilityDelegation === VOID ? this.capabilityDelegation : capabilityDelegation;
    keyAgreement = keyAgreement === VOID ? this.keyAgreement : keyAgreement;
    return $super === VOID ? this.l9z(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.l9z.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
  };
  protoOf(DidKeyDocument).toString = function () {
    return 'DidKeyDocument(context=' + toString_0(this.context) + ', id=' + this.id + ', verificationMethod=' + toString(this.verificationMethod) + ', assertionMethod=' + toString(this.assertionMethod) + ', authentication=' + toString(this.authentication) + ', capabilityInvocation=' + toString(this.capabilityInvocation) + ', capabilityDelegation=' + toString(this.capabilityDelegation) + ', keyAgreement=' + toString(this.keyAgreement) + ')';
  };
  protoOf(DidKeyDocument).hashCode = function () {
    var result = hashCode(this.context);
    result = imul(result, 31) + getStringHashCode(this.id) | 0;
    result = imul(result, 31) + (this.verificationMethod == null ? 0 : hashCode(this.verificationMethod)) | 0;
    result = imul(result, 31) + (this.assertionMethod == null ? 0 : hashCode(this.assertionMethod)) | 0;
    result = imul(result, 31) + (this.authentication == null ? 0 : hashCode(this.authentication)) | 0;
    result = imul(result, 31) + (this.capabilityInvocation == null ? 0 : hashCode(this.capabilityInvocation)) | 0;
    result = imul(result, 31) + (this.capabilityDelegation == null ? 0 : hashCode(this.capabilityDelegation)) | 0;
    result = imul(result, 31) + (this.keyAgreement == null ? 0 : hashCode(this.keyAgreement)) | 0;
    return result;
  };
  protoOf(DidKeyDocument).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DidKeyDocument))
      return false;
    var tmp0_other_with_cast = other instanceof DidKeyDocument ? other : THROW_CCE();
    if (!equals_0(this.context, tmp0_other_with_cast.context))
      return false;
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!equals_0(this.verificationMethod, tmp0_other_with_cast.verificationMethod))
      return false;
    if (!equals_0(this.assertionMethod, tmp0_other_with_cast.assertionMethod))
      return false;
    if (!equals_0(this.authentication, tmp0_other_with_cast.authentication))
      return false;
    if (!equals_0(this.capabilityInvocation, tmp0_other_with_cast.capabilityInvocation))
      return false;
    if (!equals_0(this.capabilityDelegation, tmp0_other_with_cast.capabilityDelegation))
      return false;
    if (!equals_0(this.keyAgreement, tmp0_other_with_cast.keyAgreement))
      return false;
    return true;
  };
  function Companion_8() {
  }
  protoOf(Companion_8).y4r = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_14;
  function Companion_getInstance_10() {
    return Companion_instance_14;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidWebDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('type', false);
    tmp0_serialDesc.j29('controller', false);
    tmp0_serialDesc.j29('publicKeyJwk', false);
    this.m9z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).n9z = function (encoder, value) {
    var tmp0_desc = this.m9z_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.id);
    tmp1_output.i23(tmp0_desc, 1, value.type);
    tmp1_output.i23(tmp0_desc, 2, value.controller);
    tmp1_output.k23(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_8).h1y = function (encoder, value) {
    return this.n9z(encoder, value instanceof VerificationMethod_3 ? value : THROW_CCE());
  };
  protoOf($serializer_8).i1y = function (decoder) {
    var tmp0_desc = this.m9z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.t21(tmp0_desc);
    if (tmp8_input.j22()) {
      tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.u21(tmp0_desc);
    return VerificationMethod_init_$Create$_3(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).g1y = function () {
    return this.m9z_1;
  };
  protoOf($serializer_8).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), JsonObjectSerializer_getInstance()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function VerificationMethod_init_$Init$_3(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().m9z_1);
    }
    $this.id = id;
    $this.type = type;
    $this.controller = controller;
    $this.publicKeyJwk = publicKeyJwk;
    return $this;
  }
  function VerificationMethod_init_$Create$_3(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker) {
    return VerificationMethod_init_$Init$_3(seen0, id, type, controller, publicKeyJwk, serializationConstructorMarker, objectCreate(protoOf(VerificationMethod_3)));
  }
  function DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_0() {
    return new ArrayListSerializer($serializer_getInstance_8());
  }
  function DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_1() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_2() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_3() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_4() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_5() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function VerificationMethod_3(id, type, controller, publicKeyJwk) {
    this.id = id;
    this.type = type;
    this.controller = controller;
    this.publicKeyJwk = publicKeyJwk;
  }
  protoOf(VerificationMethod_3).h69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_3).z9x = function () {
    return this.type;
  };
  protoOf(VerificationMethod_3).a9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_3).b9y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_3).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_3).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod_3).dp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_3).q6x = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_3).c9y = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_3(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_3).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.c9y(id, type, controller, publicKeyJwk) : $super.c9y.call(this, id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_3).toString = function () {
    return 'VerificationMethod(id=' + this.id + ', type=' + this.type + ', controller=' + this.controller + ', publicKeyJwk=' + this.publicKeyJwk.toString() + ')';
  };
  protoOf(VerificationMethod_3).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + getStringHashCode(this.type) | 0;
    result = imul(result, 31) + getStringHashCode(this.controller) | 0;
    result = imul(result, 31) + this.publicKeyJwk.hashCode() | 0;
    return result;
  };
  protoOf(VerificationMethod_3).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerificationMethod_3))
      return false;
    var tmp0_other_with_cast = other instanceof VerificationMethod_3 ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!(this.type === tmp0_other_with_cast.type))
      return false;
    if (!(this.controller === tmp0_other_with_cast.controller))
      return false;
    if (!this.publicKeyJwk.equals(tmp0_other_with_cast.publicKeyJwk))
      return false;
    return true;
  };
  function DidWebDocument_init_$Init$(did, keyId, didKey, $this) {
    DidWebDocument.call($this, DidUtils_getInstance().DEFAULT_CONTEXT, did, listOf_0(new VerificationMethod_3(did + '#' + keyId, 'JsonWebKey2020', did, didKey)), listOf_0(did + '#' + keyId), listOf_0(did + '#' + keyId), listOf_0(did + '#' + keyId), listOf_0(did + '#' + keyId), listOf_0(did + '#' + keyId));
    return $this;
  }
  function secondaryConstructor_4(did, keyId, didKey) {
    return DidWebDocument_init_$Init$(did, keyId, didKey, objectCreate(protoOf(DidWebDocument)));
  }
  function Companion_9() {
    Companion_instance_15 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_9 = lazy(tmp_8, DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_3);
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_11 = lazy(tmp_10, DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_4);
    var tmp_12 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o9z_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_5)];
  }
  protoOf(Companion_9).y4r = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_15;
  function Companion_getInstance_11() {
    if (Companion_instance_15 == null)
      new Companion_9();
    return Companion_instance_15;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidWebDocument', this, 8);
    tmp0_serialDesc.j29('@context', true);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('verificationMethod', false);
    tmp0_serialDesc.j29('assertionMethod', false);
    tmp0_serialDesc.j29('authentication', false);
    tmp0_serialDesc.j29('capabilityInvocation', false);
    tmp0_serialDesc.j29('capabilityDelegation', false);
    tmp0_serialDesc.j29('keyAgreement', false);
    this.p9z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).q9z = function (encoder, value) {
    var tmp0_desc = this.p9z_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().o9z_1;
    tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    tmp1_output.i23(tmp0_desc, 1, value.id);
    tmp1_output.m23(tmp0_desc, 2, tmp2_cached[2].z(), value.verificationMethod);
    tmp1_output.m23(tmp0_desc, 3, tmp2_cached[3].z(), value.assertionMethod);
    tmp1_output.m23(tmp0_desc, 4, tmp2_cached[4].z(), value.authentication);
    tmp1_output.m23(tmp0_desc, 5, tmp2_cached[5].z(), value.capabilityInvocation);
    tmp1_output.m23(tmp0_desc, 6, tmp2_cached[6].z(), value.capabilityDelegation);
    tmp1_output.m23(tmp0_desc, 7, tmp2_cached[7].z(), value.keyAgreement);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_9).h1y = function (encoder, value) {
    return this.q9z(encoder, value instanceof DidWebDocument ? value : THROW_CCE());
  };
  protoOf($serializer_9).i1y = function (decoder) {
    var tmp0_desc = this.p9z_1;
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
    var tmp12_input = decoder.t21(tmp0_desc);
    var tmp13_cached = Companion_getInstance_11().o9z_1;
    if (tmp12_input.j22()) {
      tmp4_local0 = tmp12_input.f22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.h22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.h22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.h22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.h22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.h22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.h22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.f22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.h22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.h22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.h22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.h22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.h22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.h22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.u21(tmp0_desc);
    return DidWebDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_9).g1y = function () {
    return this.p9z_1;
  };
  protoOf($serializer_9).y29 = function () {
    var tmp0_cached = Companion_getInstance_11().o9z_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].z(), StringSerializer_getInstance(), get_nullable(tmp0_cached[2].z()), get_nullable(tmp0_cached[3].z()), get_nullable(tmp0_cached[4].z()), get_nullable(tmp0_cached[5].z()), get_nullable(tmp0_cached[6].z()), get_nullable(tmp0_cached[7].z())];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function DidWebDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, $this) {
    if (!(254 === (254 & seen0))) {
      throwMissingFieldException(seen0, 254, $serializer_getInstance_9().p9z_1);
    }
    if (0 === (seen0 & 1))
      $this.context = DidUtils_getInstance().DEFAULT_CONTEXT;
    else
      $this.context = context;
    $this.id = id;
    $this.verificationMethod = verificationMethod;
    $this.assertionMethod = assertionMethod;
    $this.authentication = authentication;
    $this.capabilityInvocation = capabilityInvocation;
    $this.capabilityDelegation = capabilityDelegation;
    $this.keyAgreement = keyAgreement;
    return $this;
  }
  function DidWebDocument_init_$Create$(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker) {
    return DidWebDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, objectCreate(protoOf(DidWebDocument)));
  }
  function DidWebDocument(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
    Companion_getInstance_11();
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    this.context = context;
    this.id = id;
    this.verificationMethod = verificationMethod;
    this.assertionMethod = assertionMethod;
    this.authentication = authentication;
    this.capabilityInvocation = capabilityInvocation;
    this.capabilityDelegation = capabilityDelegation;
    this.keyAgreement = keyAgreement;
  }
  protoOf(DidWebDocument).s9 = function () {
    return this.context;
  };
  protoOf(DidWebDocument).h69 = function () {
    return this.id;
  };
  protoOf(DidWebDocument).g9y = function () {
    return this.verificationMethod;
  };
  protoOf(DidWebDocument).h9y = function () {
    return this.assertionMethod;
  };
  protoOf(DidWebDocument).i9y = function () {
    return this.authentication;
  };
  protoOf(DidWebDocument).j9y = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidWebDocument).k9y = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidWebDocument).l9y = function () {
    return this.keyAgreement;
  };
  protoOf(DidWebDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.i22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidWebDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.r4p(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidWebDocument).dc = function () {
    return this.context;
  };
  protoOf(DidWebDocument).ec = function () {
    return this.id;
  };
  protoOf(DidWebDocument).dp = function () {
    return this.verificationMethod;
  };
  protoOf(DidWebDocument).q6x = function () {
    return this.assertionMethod;
  };
  protoOf(DidWebDocument).x7h = function () {
    return this.authentication;
  };
  protoOf(DidWebDocument).p82 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidWebDocument).q82 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidWebDocument).m9y = function () {
    return this.keyAgreement;
  };
  protoOf(DidWebDocument).r9z = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
    return new DidWebDocument(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
  };
  protoOf(DidWebDocument).copy = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, $super) {
    context = context === VOID ? this.context : context;
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    assertionMethod = assertionMethod === VOID ? this.assertionMethod : assertionMethod;
    authentication = authentication === VOID ? this.authentication : authentication;
    capabilityInvocation = capabilityInvocation === VOID ? this.capabilityInvocation : capabilityInvocation;
    capabilityDelegation = capabilityDelegation === VOID ? this.capabilityDelegation : capabilityDelegation;
    keyAgreement = keyAgreement === VOID ? this.keyAgreement : keyAgreement;
    return $super === VOID ? this.r9z(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.r9z.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
  };
  protoOf(DidWebDocument).toString = function () {
    return 'DidWebDocument(context=' + toString_0(this.context) + ', id=' + this.id + ', verificationMethod=' + toString(this.verificationMethod) + ', assertionMethod=' + toString(this.assertionMethod) + ', authentication=' + toString(this.authentication) + ', capabilityInvocation=' + toString(this.capabilityInvocation) + ', capabilityDelegation=' + toString(this.capabilityDelegation) + ', keyAgreement=' + toString(this.keyAgreement) + ')';
  };
  protoOf(DidWebDocument).hashCode = function () {
    var result = hashCode(this.context);
    result = imul(result, 31) + getStringHashCode(this.id) | 0;
    result = imul(result, 31) + (this.verificationMethod == null ? 0 : hashCode(this.verificationMethod)) | 0;
    result = imul(result, 31) + (this.assertionMethod == null ? 0 : hashCode(this.assertionMethod)) | 0;
    result = imul(result, 31) + (this.authentication == null ? 0 : hashCode(this.authentication)) | 0;
    result = imul(result, 31) + (this.capabilityInvocation == null ? 0 : hashCode(this.capabilityInvocation)) | 0;
    result = imul(result, 31) + (this.capabilityDelegation == null ? 0 : hashCode(this.capabilityDelegation)) | 0;
    result = imul(result, 31) + (this.keyAgreement == null ? 0 : hashCode(this.keyAgreement)) | 0;
    return result;
  };
  protoOf(DidWebDocument).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DidWebDocument))
      return false;
    var tmp0_other_with_cast = other instanceof DidWebDocument ? other : THROW_CCE();
    if (!equals_0(this.context, tmp0_other_with_cast.context))
      return false;
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!equals_0(this.verificationMethod, tmp0_other_with_cast.verificationMethod))
      return false;
    if (!equals_0(this.assertionMethod, tmp0_other_with_cast.assertionMethod))
      return false;
    if (!equals_0(this.authentication, tmp0_other_with_cast.authentication))
      return false;
    if (!equals_0(this.capabilityInvocation, tmp0_other_with_cast.capabilityInvocation))
      return false;
    if (!equals_0(this.capabilityDelegation, tmp0_other_with_cast.capabilityDelegation))
      return false;
    if (!equals_0(this.keyAgreement, tmp0_other_with_cast.keyAgreement))
      return false;
    return true;
  };
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.s9z_1.z();
  }
  function RegisteredServiceType$Companion$_anonymous__m68t26() {
    return createSimpleEnumSerializer('id.walt.did.dids.document.models.service.RegisteredServiceType', values_0());
  }
  var RegisteredServiceType_LinkedDomains_instance;
  var RegisteredServiceType_LinkedVerifiablePresentation_instance;
  var RegisteredServiceType_DIDCommMessaging_instance;
  var RegisteredServiceType_WotThing_instance;
  var RegisteredServiceType_CredentialRegistry_instance;
  var RegisteredServiceType_OID4VCI_instance;
  var RegisteredServiceType_OID4VP_instance;
  function values_0() {
    return [RegisteredServiceType_LinkedDomains_getInstance(), RegisteredServiceType_LinkedVerifiablePresentation_getInstance(), RegisteredServiceType_DIDCommMessaging_getInstance(), RegisteredServiceType_WotThing_getInstance(), RegisteredServiceType_CredentialRegistry_getInstance(), RegisteredServiceType_OID4VCI_getInstance(), RegisteredServiceType_OID4VP_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'LinkedDomains':
        return RegisteredServiceType_LinkedDomains_getInstance();
      case 'LinkedVerifiablePresentation':
        return RegisteredServiceType_LinkedVerifiablePresentation_getInstance();
      case 'DIDCommMessaging':
        return RegisteredServiceType_DIDCommMessaging_getInstance();
      case 'WotThing':
        return RegisteredServiceType_WotThing_getInstance();
      case 'CredentialRegistry':
        return RegisteredServiceType_CredentialRegistry_getInstance();
      case 'OID4VCI':
        return RegisteredServiceType_OID4VCI_getInstance();
      case 'OID4VP':
        return RegisteredServiceType_OID4VP_getInstance();
      default:
        RegisteredServiceType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function Companion_10() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.s9z_1 = lazy(tmp_0, RegisteredServiceType$Companion$_anonymous__m68t26);
  }
  protoOf(Companion_10).y4r = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_10).j2a = function (typeParamsSerializers) {
    return this.y4r();
  };
  var Companion_instance_16;
  function Companion_getInstance_12() {
    RegisteredServiceType_initEntries();
    if (Companion_instance_16 == null)
      new Companion_10();
    return Companion_instance_16;
  }
  var RegisteredServiceType_entriesInitialized;
  function RegisteredServiceType_initEntries() {
    if (RegisteredServiceType_entriesInitialized)
      return Unit_instance;
    RegisteredServiceType_entriesInitialized = true;
    RegisteredServiceType_LinkedDomains_instance = new RegisteredServiceType('LinkedDomains', 0);
    RegisteredServiceType_LinkedVerifiablePresentation_instance = new RegisteredServiceType('LinkedVerifiablePresentation', 1);
    RegisteredServiceType_DIDCommMessaging_instance = new RegisteredServiceType('DIDCommMessaging', 2);
    RegisteredServiceType_WotThing_instance = new RegisteredServiceType('WotThing', 3);
    RegisteredServiceType_CredentialRegistry_instance = new RegisteredServiceType('CredentialRegistry', 4);
    RegisteredServiceType_OID4VCI_instance = new RegisteredServiceType('OID4VCI', 5);
    RegisteredServiceType_OID4VP_instance = new RegisteredServiceType('OID4VP', 6);
    Companion_getInstance_12();
  }
  function RegisteredServiceType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RegisteredServiceType_LinkedDomains_getInstance() {
    RegisteredServiceType_initEntries();
    return RegisteredServiceType_LinkedDomains_instance;
  }
  function RegisteredServiceType_LinkedVerifiablePresentation_getInstance() {
    RegisteredServiceType_initEntries();
    return RegisteredServiceType_LinkedVerifiablePresentation_instance;
  }
  function RegisteredServiceType_DIDCommMessaging_getInstance() {
    RegisteredServiceType_initEntries();
    return RegisteredServiceType_DIDCommMessaging_instance;
  }
  function RegisteredServiceType_WotThing_getInstance() {
    RegisteredServiceType_initEntries();
    return RegisteredServiceType_WotThing_instance;
  }
  function RegisteredServiceType_CredentialRegistry_getInstance() {
    RegisteredServiceType_initEntries();
    return RegisteredServiceType_CredentialRegistry_instance;
  }
  function RegisteredServiceType_OID4VCI_getInstance() {
    RegisteredServiceType_initEntries();
    return RegisteredServiceType_OID4VCI_instance;
  }
  function RegisteredServiceType_OID4VP_getInstance() {
    RegisteredServiceType_initEntries();
    return RegisteredServiceType_OID4VP_instance;
  }
  function get_reservedKeys() {
    _init_properties_Service_kt__nbp9();
    return reservedKeys;
  }
  var reservedKeys;
  function Companion_11() {
  }
  protoOf(Companion_11).y4r = function () {
    return ServiceSerializer_getInstance();
  };
  var Companion_instance_17;
  function Companion_getInstance_13() {
    return Companion_instance_17;
  }
  function Service(serviceMaps) {
    this.serviceMaps = serviceMaps;
  }
  protoOf(Service).v9z = function () {
    return this.serviceMaps;
  };
  protoOf(Service).dc = function () {
    return this.serviceMaps;
  };
  protoOf(Service).w9z = function (serviceMaps) {
    return new Service(serviceMaps);
  };
  protoOf(Service).copy = function (serviceMaps, $super) {
    serviceMaps = serviceMaps === VOID ? this.serviceMaps : serviceMaps;
    return $super === VOID ? this.w9z(serviceMaps) : $super.w9z.call(this, serviceMaps);
  };
  protoOf(Service).toString = function () {
    return 'Service(serviceMaps=' + toString_0(this.serviceMaps) + ')';
  };
  protoOf(Service).hashCode = function () {
    return hashCode(this.serviceMaps);
  };
  protoOf(Service).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Service))
      return false;
    var tmp0_other_with_cast = other instanceof Service ? other : THROW_CCE();
    if (!equals_0(this.serviceMaps, tmp0_other_with_cast.serviceMaps))
      return false;
    return true;
  };
  function Companion_12() {
  }
  protoOf(Companion_12).y4r = function () {
    return ServiceMapSerializer_getInstance();
  };
  var Companion_instance_18;
  function Companion_getInstance_14() {
    return Companion_instance_18;
  }
  function ServiceMap(id, type, serviceEndpoint, customProperties) {
    customProperties = customProperties === VOID ? null : customProperties;
    this.id = id;
    this.type = type;
    this.serviceEndpoint = serviceEndpoint;
    this.customProperties = customProperties;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.id;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      var message = 'Service property id cannot be blank';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = this.type.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.text.isNotBlank' call
      // Inline function 'kotlin.require' call
      if (!!isBlank(element)) {
        var message_0 = 'Service type strings cannot be blank';
        throw IllegalArgumentException_init_$Create$(toString_0(message_0));
      }
    }
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.require' call
    if (!!this.serviceEndpoint.h()) {
      var message_1 = 'Service endpoint set cannot be empty';
      throw IllegalArgumentException_init_$Create$(toString_0(message_1));
    }
    var tmp0_safe_receiver = this.customProperties;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_0 = tmp0_safe_receiver.x().p();
      while (_iterator__ex2g4s_0.q()) {
        var element_0 = _iterator__ex2g4s_0.r();
        // Inline function 'kotlin.require' call
        if (!!get_reservedKeys().x1(element_0.y())) {
          var message_2 = 'Invalid attempt to override reserved Service property with key ' + element_0.y() + ' via customProperties map';
          throw IllegalArgumentException_init_$Create$(toString_0(message_2));
        }
      }
    }
  }
  protoOf(ServiceMap).h69 = function () {
    return this.id;
  };
  protoOf(ServiceMap).z9x = function () {
    return this.type;
  };
  protoOf(ServiceMap).x9z = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceMap).y9z = function () {
    return this.customProperties;
  };
  protoOf(ServiceMap).dc = function () {
    return this.id;
  };
  protoOf(ServiceMap).ec = function () {
    return this.type;
  };
  protoOf(ServiceMap).dp = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceMap).q6x = function () {
    return this.customProperties;
  };
  protoOf(ServiceMap).z9z = function (id, type, serviceEndpoint, customProperties) {
    return new ServiceMap(id, type, serviceEndpoint, customProperties);
  };
  protoOf(ServiceMap).copy = function (id, type, serviceEndpoint, customProperties, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    serviceEndpoint = serviceEndpoint === VOID ? this.serviceEndpoint : serviceEndpoint;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.z9z(id, type, serviceEndpoint, customProperties) : $super.z9z.call(this, id, type, serviceEndpoint, customProperties);
  };
  protoOf(ServiceMap).toString = function () {
    return 'ServiceMap(id=' + this.id + ', type=' + toString_0(this.type) + ', serviceEndpoint=' + toString_0(this.serviceEndpoint) + ', customProperties=' + toString(this.customProperties) + ')';
  };
  protoOf(ServiceMap).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + hashCode(this.type) | 0;
    result = imul(result, 31) + hashCode(this.serviceEndpoint) | 0;
    result = imul(result, 31) + (this.customProperties == null ? 0 : hashCode(this.customProperties)) | 0;
    return result;
  };
  protoOf(ServiceMap).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ServiceMap))
      return false;
    var tmp0_other_with_cast = other instanceof ServiceMap ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!equals_0(this.type, tmp0_other_with_cast.type))
      return false;
    if (!equals_0(this.serviceEndpoint, tmp0_other_with_cast.serviceEndpoint))
      return false;
    if (!equals_0(this.customProperties, tmp0_other_with_cast.customProperties))
      return false;
    return true;
  };
  function ServiceSerializer() {
    ServiceSerializer_instance = this;
    this.aa0_1 = SetSerializer(Companion_instance_18.y4r());
    this.ba0_1 = this.aa0_1.g1y();
  }
  protoOf(ServiceSerializer).g1y = function () {
    return this.ba0_1;
  };
  protoOf(ServiceSerializer).ca0 = function (encoder, value) {
    return encoder.l23(SetSerializer(Companion_instance_18.y4r()), value.serviceMaps);
  };
  protoOf(ServiceSerializer).h1y = function (encoder, value) {
    return this.ca0(encoder, value instanceof Service ? value : THROW_CCE());
  };
  protoOf(ServiceSerializer).i1y = function (decoder) {
    return new Service(decoder.s21(SetSerializer(Companion_instance_18.y4r())));
  };
  var ServiceSerializer_instance;
  function ServiceSerializer_getInstance() {
    if (ServiceSerializer_instance == null)
      new ServiceSerializer();
    return ServiceSerializer_instance;
  }
  function getType($this, element) {
    var tmp;
    var tmp_0;
    if (element instanceof JsonPrimitive) {
      tmp_0 = element.b4s();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.i22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var tmp$ret$2 = this_0.s4p(tmp$ret$1, element);
      tmp = setOf(tmp$ret$2);
    } else {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_3 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_4 = this_3.i22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_5 = serializer(this_4, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
      tmp = this_3.s4p(tmp$ret$4, element);
    }
    return tmp;
  }
  function getServiceEndpoint($this, element) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (element instanceof JsonPrimitive) {
      tmp_1 = element.b4s();
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = element instanceof JsonObject;
    }
    if (tmp_0) {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.i22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(ServiceEndpoint), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var tmp$ret$2 = this_0.s4p(tmp$ret$1, element);
      tmp = setOf(tmp$ret$2);
    } else {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_3 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_4 = this_3.i22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_5 = serializer(this_4, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ServiceEndpoint), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
      tmp = this_3.s4p(tmp$ret$4, element);
    }
    return tmp;
  }
  function getCustomProperties($this, jsonObject) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = jsonObject.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      if (!get_reservedKeys().x1(element.y())) {
        destination.n2(element.y(), element.z());
      }
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (destination.h()) {
      tmp = null;
    } else {
      tmp = destination;
    }
    return tmp;
  }
  function putType($this, _this__u8e3s4, value) {
    var tmp;
    if (value.type.s() === 1) {
      var tmp0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var value_0 = first(value.type);
      // Inline function 'kotlinx.serialization.serializer' call
      var this_0 = tmp0.i22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      tmp = tmp0.r4p(tmp$ret$1, value_0);
    } else {
      var tmp2 = Default_getInstance();
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var value_1 = value.type;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_2 = tmp2.i22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_3 = serializer(this_2, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
      tmp = tmp2.r4p(tmp$ret$4, value_1);
    }
    // Inline function 'kotlin.let' call
    var it = tmp;
    return _this__u8e3s4.o4s('type', it);
  }
  function putEndpoint($this, _this__u8e3s4, value) {
    var tmp;
    if (value.s() === 1) {
      var tmp0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var value_0 = first(value);
      // Inline function 'kotlinx.serialization.serializer' call
      var this_0 = tmp0.i22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(getKClass(ServiceEndpoint), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      tmp = tmp0.r4p(tmp$ret$1, value_0);
    } else {
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var this_2 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_3 = this_2.i22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_4 = serializer(this_3, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ServiceEndpoint), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
      tmp = this_2.r4p(tmp$ret$4, value);
    }
    // Inline function 'kotlin.let' call
    var it = tmp;
    return _this__u8e3s4.o4s('serviceEndpoint', it);
  }
  function putCustomProperties($this, _this__u8e3s4, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = value.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        _this__u8e3s4.o4s(element.y(), element.z());
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function ServiceMapSerializer() {
    ServiceMapSerializer_instance = this;
    this.da0_1 = Companion_instance.y4r().g1y();
  }
  protoOf(ServiceMapSerializer).g1y = function () {
    return this.da0_1;
  };
  protoOf(ServiceMapSerializer).i1y = function (decoder) {
    var jsonObject = decoder.s21(Companion_instance.y4r());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_reservedKeys().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(isInterface(jsonObject, KtMap) ? jsonObject : THROW_CCE()).i2(element)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
    var tmp2 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
    var json = ensureNotNull(jsonObject.af('id'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp2.i22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
    var tmp$ret$8 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp$ret$9 = tmp2.s4p(tmp$ret$8, json);
    return new ServiceMap(tmp$ret$9, getType(this, ensureNotNull(jsonObject.af('type'))), getServiceEndpoint(this, ensureNotNull(jsonObject.af('serviceEndpoint'))), getCustomProperties(this, jsonObject));
  };
  protoOf(ServiceMapSerializer).ea0 = function (encoder, value) {
    var tmp = Companion_instance.y4r();
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    put(builder, 'id', value.id);
    putType(ServiceMapSerializer_getInstance(), builder, value);
    putEndpoint(ServiceMapSerializer_getInstance(), builder, value.serviceEndpoint);
    putCustomProperties(ServiceMapSerializer_getInstance(), builder, value.customProperties);
    var tmp$ret$1 = builder.a4r();
    encoder.l23(tmp, tmp$ret$1);
  };
  protoOf(ServiceMapSerializer).h1y = function (encoder, value) {
    return this.ea0(encoder, value instanceof ServiceMap ? value : THROW_CCE());
  };
  var ServiceMapSerializer_instance;
  function ServiceMapSerializer_getInstance() {
    if (ServiceMapSerializer_instance == null)
      new ServiceMapSerializer();
    return ServiceMapSerializer_instance;
  }
  var properties_initialized_Service_kt_qndfaz;
  function _init_properties_Service_kt__nbp9() {
    if (!properties_initialized_Service_kt_qndfaz) {
      properties_initialized_Service_kt_qndfaz = true;
      reservedKeys = listOf(['id', 'type', 'serviceEndpoint']);
    }
  }
  function Companion_13() {
  }
  protoOf(Companion_13).y4r = function () {
    return ServiceEndpointBaseSerializer_getInstance();
  };
  var Companion_instance_19;
  function Companion_getInstance_15() {
    return Companion_instance_19;
  }
  function ServiceEndpoint() {
  }
  function Companion_14() {
  }
  protoOf(Companion_14).y4r = function () {
    return ServiceEndpointURLSerializer_getInstance();
  };
  var Companion_instance_20;
  function Companion_getInstance_16() {
    return Companion_instance_20;
  }
  function ServiceEndpointURL(url) {
    ServiceEndpoint.call(this);
    this.url = url;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.url;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      var message = 'Service endpoint URL cannot be blank.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
  }
  protoOf(ServiceEndpointURL).g3k = function () {
    return this.url;
  };
  protoOf(ServiceEndpointURL).dc = function () {
    return this.url;
  };
  protoOf(ServiceEndpointURL).fa0 = function (url) {
    return new ServiceEndpointURL(url);
  };
  protoOf(ServiceEndpointURL).copy = function (url, $super) {
    url = url === VOID ? this.url : url;
    return $super === VOID ? this.fa0(url) : $super.fa0.call(this, url);
  };
  protoOf(ServiceEndpointURL).toString = function () {
    return 'ServiceEndpointURL(url=' + this.url + ')';
  };
  protoOf(ServiceEndpointURL).hashCode = function () {
    return getStringHashCode(this.url);
  };
  protoOf(ServiceEndpointURL).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ServiceEndpointURL))
      return false;
    var tmp0_other_with_cast = other instanceof ServiceEndpointURL ? other : THROW_CCE();
    if (!(this.url === tmp0_other_with_cast.url))
      return false;
    return true;
  };
  function Companion_15() {
  }
  protoOf(Companion_15).y4r = function () {
    return ServiceEndpointObjectSerializer_getInstance();
  };
  var Companion_instance_21;
  function Companion_getInstance_17() {
    return Companion_instance_21;
  }
  function ServiceEndpointObject(jsonObject) {
    ServiceEndpoint.call(this);
    this.jsonObject = jsonObject;
  }
  protoOf(ServiceEndpointObject).ga0 = function () {
    return this.jsonObject;
  };
  protoOf(ServiceEndpointObject).dc = function () {
    return this.jsonObject;
  };
  protoOf(ServiceEndpointObject).ha0 = function (jsonObject) {
    return new ServiceEndpointObject(jsonObject);
  };
  protoOf(ServiceEndpointObject).copy = function (jsonObject, $super) {
    jsonObject = jsonObject === VOID ? this.jsonObject : jsonObject;
    return $super === VOID ? this.ha0(jsonObject) : $super.ha0.call(this, jsonObject);
  };
  protoOf(ServiceEndpointObject).toString = function () {
    return 'ServiceEndpointObject(jsonObject=' + this.jsonObject.toString() + ')';
  };
  protoOf(ServiceEndpointObject).hashCode = function () {
    return this.jsonObject.hashCode();
  };
  protoOf(ServiceEndpointObject).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ServiceEndpointObject))
      return false;
    var tmp0_other_with_cast = other instanceof ServiceEndpointObject ? other : THROW_CCE();
    if (!this.jsonObject.equals(tmp0_other_with_cast.jsonObject))
      return false;
    return true;
  };
  function ServiceEndpointBaseSerializer() {
    ServiceEndpointBaseSerializer_instance = this;
    JsonContentPolymorphicSerializer.call(this, getKClass(ServiceEndpoint));
  }
  protoOf(ServiceEndpointBaseSerializer).w4r = function (element) {
    var tmp;
    var tmp_0;
    if (element instanceof JsonPrimitive) {
      tmp_0 = element.b4s();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = Companion_instance_20.y4r();
    } else {
      if (element instanceof JsonObject) {
        tmp = Companion_instance_21.y4r();
      } else {
        throw SerializationException_init_$Create$('Invalid ServiceEndpoint encoded value, must be either a string or an object');
      }
    }
    return tmp;
  };
  var ServiceEndpointBaseSerializer_instance;
  function ServiceEndpointBaseSerializer_getInstance() {
    if (ServiceEndpointBaseSerializer_instance == null)
      new ServiceEndpointBaseSerializer();
    return ServiceEndpointBaseSerializer_instance;
  }
  function ServiceEndpointURLSerializer() {
    ServiceEndpointURLSerializer_instance = this;
    this.ka0_1 = Companion_instance_0.y4r().g1y();
  }
  protoOf(ServiceEndpointURLSerializer).g1y = function () {
    return this.ka0_1;
  };
  protoOf(ServiceEndpointURLSerializer).la0 = function (encoder, value) {
    return encoder.l23(Companion_instance_1.y4r(), JsonUtils_getInstance().toJsonElement(value.url));
  };
  protoOf(ServiceEndpointURLSerializer).h1y = function (encoder, value) {
    return this.la0(encoder, value instanceof ServiceEndpointURL ? value : THROW_CCE());
  };
  protoOf(ServiceEndpointURLSerializer).i1y = function (decoder) {
    return new ServiceEndpointURL(decoder.o21());
  };
  var ServiceEndpointURLSerializer_instance;
  function ServiceEndpointURLSerializer_getInstance() {
    if (ServiceEndpointURLSerializer_instance == null)
      new ServiceEndpointURLSerializer();
    return ServiceEndpointURLSerializer_instance;
  }
  function ServiceEndpointObjectSerializer() {
    ServiceEndpointObjectSerializer_instance = this;
    this.ma0_1 = Companion_instance.y4r().g1y();
  }
  protoOf(ServiceEndpointObjectSerializer).g1y = function () {
    return this.ma0_1;
  };
  protoOf(ServiceEndpointObjectSerializer).na0 = function (encoder, value) {
    return encoder.l23(Companion_instance.y4r(), value.jsonObject);
  };
  protoOf(ServiceEndpointObjectSerializer).h1y = function (encoder, value) {
    return this.na0(encoder, value instanceof ServiceEndpointObject ? value : THROW_CCE());
  };
  protoOf(ServiceEndpointObjectSerializer).i1y = function (decoder) {
    return new ServiceEndpointObject(decoder.s21(Companion_instance.y4r()));
  };
  var ServiceEndpointObjectSerializer_instance;
  function ServiceEndpointObjectSerializer_getInstance() {
    if (ServiceEndpointObjectSerializer_instance == null)
      new ServiceEndpointObjectSerializer();
    return ServiceEndpointObjectSerializer_instance;
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.oa0_1.z();
  }
  function VerificationMaterialType$Companion$_anonymous__y5w5w3() {
    var tmp = values_1();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = ['publicKeyJwk', 'publicKeyMultibase'];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [null, null];
    return createAnnotatedEnumSerializer('id.walt.did.dids.document.models.verification.method.VerificationMaterialType', tmp, tmp_0, tmp$ret$5, null);
  }
  var VerificationMaterialType_PublicKeyJwk_instance;
  var VerificationMaterialType_PublicKeyMultibase_instance;
  function values_1() {
    return [VerificationMaterialType_PublicKeyJwk_getInstance(), VerificationMaterialType_PublicKeyMultibase_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'PublicKeyJwk':
        return VerificationMaterialType_PublicKeyJwk_getInstance();
      case 'PublicKeyMultibase':
        return VerificationMaterialType_PublicKeyMultibase_getInstance();
      default:
        VerificationMaterialType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values_1());
    return $ENTRIES;
  }
  function Companion_16() {
    Companion_instance_22 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.oa0_1 = lazy(tmp_0, VerificationMaterialType$Companion$_anonymous__y5w5w3);
  }
  protoOf(Companion_16).y4r = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_16).j2a = function (typeParamsSerializers) {
    return this.y4r();
  };
  var Companion_instance_22;
  function Companion_getInstance_18() {
    VerificationMaterialType_initEntries();
    if (Companion_instance_22 == null)
      new Companion_16();
    return Companion_instance_22;
  }
  var VerificationMaterialType_entriesInitialized;
  function VerificationMaterialType_initEntries() {
    if (VerificationMaterialType_entriesInitialized)
      return Unit_instance;
    VerificationMaterialType_entriesInitialized = true;
    VerificationMaterialType_PublicKeyJwk_instance = new VerificationMaterialType('PublicKeyJwk', 0);
    VerificationMaterialType_PublicKeyMultibase_instance = new VerificationMaterialType('PublicKeyMultibase', 1);
    Companion_getInstance_18();
  }
  var $ENTRIES;
  function VerificationMaterialType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(VerificationMaterialType).toString = function () {
    var tmp;
    switch (this.r2_1) {
      case 0:
        tmp = 'publicKeyJwk';
        break;
      case 1:
        tmp = 'publicKeyMultibase';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function VerificationMaterialType_PublicKeyJwk_getInstance() {
    VerificationMaterialType_initEntries();
    return VerificationMaterialType_PublicKeyJwk_instance;
  }
  function VerificationMaterialType_PublicKeyMultibase_getInstance() {
    VerificationMaterialType_initEntries();
    return VerificationMaterialType_PublicKeyMultibase_instance;
  }
  function get_requiredKeys() {
    _init_properties_VerificationMethod_kt__yxbk58();
    return requiredKeys;
  }
  var requiredKeys;
  function get_reservedKeys_0() {
    _init_properties_VerificationMethod_kt__yxbk58();
    return reservedKeys_0;
  }
  var reservedKeys_0;
  function Companion_17() {
  }
  protoOf(Companion_17).y4r = function () {
    return VerificationMethodSerializer_getInstance();
  };
  var Companion_instance_23;
  function Companion_getInstance_19() {
    return Companion_instance_23;
  }
  function VerificationMethod_4(id, type, material, controller, customProperties) {
    customProperties = customProperties === VOID ? null : customProperties;
    this.id = id;
    this.type = type;
    this.material = material;
    this.controller = controller;
    this.customProperties = customProperties;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.id;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_0)) {
      var message = 'id property of VerificationMethod must not be an empty string';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.isNotBlank' call
    var this_1 = this.controller;
    // Inline function 'kotlin.require' call
    if (!!isBlank(this_1)) {
      var message_0 = 'controller property of VerificationMethod must not be an empty string';
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
    var tmp0_safe_receiver = this.customProperties;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp0_safe_receiver.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.require' call
        if (!!get_reservedKeys_0().x1(element.y())) {
          var message_1 = 'Invalid attempt to override reserved VerificationMethod property with key ' + element.y() + ' via customProperties map';
          throw IllegalArgumentException_init_$Create$(toString_0(message_1));
        }
      }
    }
  }
  protoOf(VerificationMethod_4).h69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_4).z9x = function () {
    return this.type;
  };
  protoOf(VerificationMethod_4).ra0 = function () {
    return this.material;
  };
  protoOf(VerificationMethod_4).a9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_4).y9z = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethod_4).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_4).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod_4).dp = function () {
    return this.material;
  };
  protoOf(VerificationMethod_4).q6x = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_4).x7h = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethod_4).sa0 = function (id, type, material, controller, customProperties) {
    return new VerificationMethod_4(id, type, material, controller, customProperties);
  };
  protoOf(VerificationMethod_4).copy = function (id, type, material, controller, customProperties, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    material = material === VOID ? this.material : material;
    controller = controller === VOID ? this.controller : controller;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.sa0(id, type, material, controller, customProperties) : $super.sa0.call(this, id, type, material, controller, customProperties);
  };
  protoOf(VerificationMethod_4).toString = function () {
    return 'VerificationMethod(id=' + this.id + ', type=' + this.type.toString() + ', material=' + this.material.toString() + ', controller=' + this.controller + ', customProperties=' + toString(this.customProperties) + ')';
  };
  protoOf(VerificationMethod_4).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + this.type.hashCode() | 0;
    result = imul(result, 31) + this.material.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.controller) | 0;
    result = imul(result, 31) + (this.customProperties == null ? 0 : hashCode(this.customProperties)) | 0;
    return result;
  };
  protoOf(VerificationMethod_4).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerificationMethod_4))
      return false;
    var tmp0_other_with_cast = other instanceof VerificationMethod_4 ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!this.type.equals(tmp0_other_with_cast.type))
      return false;
    if (!this.material.equals(tmp0_other_with_cast.material))
      return false;
    if (!(this.controller === tmp0_other_with_cast.controller))
      return false;
    if (!equals_0(this.customProperties, tmp0_other_with_cast.customProperties))
      return false;
    return true;
  };
  function getVerificationMaterial($this, methodValue, type) {
    var tmp;
    if (type.r2_1 === 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!methodValue.e2n(VerificationMaterialType_PublicKeyJwk_getInstance().toString())) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      ensureNotNull(methodValue.af(VerificationMaterialType_PublicKeyJwk_getInstance().toString()));
      tmp = new Pair(VerificationMaterialType_PublicKeyJwk_getInstance(), ensureNotNull(methodValue.af(VerificationMaterialType_PublicKeyJwk_getInstance().toString())));
    } else {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!methodValue.e2n(VerificationMaterialType_PublicKeyMultibase_getInstance().toString())) {
        var message_0 = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_0));
      }
      ensureNotNull(methodValue.af(VerificationMaterialType_PublicKeyMultibase_getInstance().toString()));
      tmp = new Pair(VerificationMaterialType_PublicKeyMultibase_getInstance(), ensureNotNull(methodValue.af(VerificationMaterialType_PublicKeyMultibase_getInstance().toString())));
    }
    return tmp;
  }
  function getCustomProperties_0($this, methodValue) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = methodValue.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      if (!get_reservedKeys_0().x1(element.y())) {
        destination.n2(element.y(), element.z());
      }
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (destination.h()) {
      tmp = null;
    } else {
      tmp = destination;
    }
    return tmp;
  }
  function putMaterial($this, _this__u8e3s4, value) {
    var tmp = value.bc_1.toString();
    var tmp0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var value_0 = value.cc_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.i22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(JsonElement), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp$ret$2 = tmp0.r4p(tmp$ret$1, value_0);
    return _this__u8e3s4.o4s(tmp, tmp$ret$2);
  }
  function putCustomProperties_0($this, _this__u8e3s4, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = value.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        _this__u8e3s4.o4s(element.y(), element.z());
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function VerificationMethodSerializer() {
    VerificationMethodSerializer_instance = this;
    this.ta0_1 = Companion_instance.y4r().g1y();
  }
  protoOf(VerificationMethodSerializer).g1y = function () {
    return this.ta0_1;
  };
  protoOf(VerificationMethodSerializer).i1y = function (decoder) {
    // Inline function 'kotlin.let' call
    var jsonObject = decoder.s21(Companion_instance.y4r());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_requiredKeys().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(isInterface(jsonObject, KtMap) ? jsonObject : THROW_CCE()).i2(element)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
    var tmp2 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
    var json = ensureNotNull(jsonObject.af('type'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp2.i22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(VerificationMethodType), arrayOf([]), false));
    var tmp$ret$8 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var type = tmp2.s4p(tmp$ret$8, json);
    var tmp4 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
    var json_0 = ensureNotNull(jsonObject.af('id'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_2 = tmp4.i22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(this_2, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
    var tmp$ret$11 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    var tmp0_id = tmp4.s4p(tmp$ret$11, json_0);
    var tmp6 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
    var json_1 = ensureNotNull(jsonObject.af('controller'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_4 = tmp6.i22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_5 = serializer(this_4, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
    var tmp$ret$14 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
    var tmp1_controller = tmp6.s4p(tmp$ret$14, json_1);
    var tmp2_material = getVerificationMaterial(VerificationMethodSerializer_getInstance(), jsonObject, type);
    var tmp3_customProperties = getCustomProperties_0(VerificationMethodSerializer_getInstance(), jsonObject);
    return new VerificationMethod_4(tmp0_id, type, tmp2_material, tmp1_controller, tmp3_customProperties);
  };
  protoOf(VerificationMethodSerializer).ua0 = function (encoder, value) {
    var tmp = Companion_instance.y4r();
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    builder.o4s('id', JsonUtils_getInstance().toJsonElement(value.id));
    builder.o4s('type', JsonUtils_getInstance().toJsonElement(value.type));
    builder.o4s('controller', JsonUtils_getInstance().toJsonElement(value.controller));
    putMaterial(VerificationMethodSerializer_getInstance(), builder, value.material);
    putCustomProperties_0(VerificationMethodSerializer_getInstance(), builder, value.customProperties);
    var tmp$ret$1 = builder.a4r();
    encoder.l23(tmp, tmp$ret$1);
  };
  protoOf(VerificationMethodSerializer).h1y = function (encoder, value) {
    return this.ua0(encoder, value instanceof VerificationMethod_4 ? value : THROW_CCE());
  };
  var VerificationMethodSerializer_instance;
  function VerificationMethodSerializer_getInstance() {
    if (VerificationMethodSerializer_instance == null)
      new VerificationMethodSerializer();
    return VerificationMethodSerializer_instance;
  }
  var properties_initialized_VerificationMethod_kt_3mo1wi;
  function _init_properties_VerificationMethod_kt__yxbk58() {
    if (!properties_initialized_VerificationMethod_kt_3mo1wi) {
      properties_initialized_VerificationMethod_kt_3mo1wi = true;
      requiredKeys = listOf(['id', 'type', 'controller']);
      var tmp = get_requiredKeys();
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_entries_0();
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.p();
      while (_iterator__ex2g4s.q()) {
        var item = _iterator__ex2g4s.r();
        var tmp$ret$0 = item.toString();
        destination.n(tmp$ret$0);
      }
      reservedKeys_0 = plus(tmp, destination);
    }
  }
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.va0_1.z();
  }
  function VerificationMethodType$Companion$_anonymous__8r8jdz() {
    return createSimpleEnumSerializer('id.walt.did.dids.document.models.verification.method.VerificationMethodType', values_2());
  }
  var VerificationMethodType_JsonWebKey2020_instance;
  var VerificationMethodType_EcdsaSecp256k1VerificationKey2019_instance;
  var VerificationMethodType_Ed25519VerificationKey2020_instance;
  var VerificationMethodType_Bls12381G1Key2020_instance;
  var VerificationMethodType_Bls12381G2Key2020_instance;
  var VerificationMethodType_PgpVerificationKey2021_instance;
  var VerificationMethodType_RsaVerificationKey2018_instance;
  var VerificationMethodType_X25519KeyAgreementKey2019_instance;
  var VerificationMethodType_EcdsaSecp256k1RecoveryMethod2020_instance;
  var VerificationMethodType_VerifiableCondition2021_instance;
  function values_2() {
    return [VerificationMethodType_JsonWebKey2020_getInstance(), VerificationMethodType_EcdsaSecp256k1VerificationKey2019_getInstance(), VerificationMethodType_Ed25519VerificationKey2020_getInstance(), VerificationMethodType_Bls12381G1Key2020_getInstance(), VerificationMethodType_Bls12381G2Key2020_getInstance(), VerificationMethodType_PgpVerificationKey2021_getInstance(), VerificationMethodType_RsaVerificationKey2018_getInstance(), VerificationMethodType_X25519KeyAgreementKey2019_getInstance(), VerificationMethodType_EcdsaSecp256k1RecoveryMethod2020_getInstance(), VerificationMethodType_VerifiableCondition2021_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'JsonWebKey2020':
        return VerificationMethodType_JsonWebKey2020_getInstance();
      case 'EcdsaSecp256k1VerificationKey2019':
        return VerificationMethodType_EcdsaSecp256k1VerificationKey2019_getInstance();
      case 'Ed25519VerificationKey2020':
        return VerificationMethodType_Ed25519VerificationKey2020_getInstance();
      case 'Bls12381G1Key2020':
        return VerificationMethodType_Bls12381G1Key2020_getInstance();
      case 'Bls12381G2Key2020':
        return VerificationMethodType_Bls12381G2Key2020_getInstance();
      case 'PgpVerificationKey2021':
        return VerificationMethodType_PgpVerificationKey2021_getInstance();
      case 'RsaVerificationKey2018':
        return VerificationMethodType_RsaVerificationKey2018_getInstance();
      case 'X25519KeyAgreementKey2019':
        return VerificationMethodType_X25519KeyAgreementKey2019_getInstance();
      case 'EcdsaSecp256k1RecoveryMethod2020':
        return VerificationMethodType_EcdsaSecp256k1RecoveryMethod2020_getInstance();
      case 'VerifiableCondition2021':
        return VerificationMethodType_VerifiableCondition2021_getInstance();
      default:
        VerificationMethodType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function Companion_18() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.va0_1 = lazy(tmp_0, VerificationMethodType$Companion$_anonymous__8r8jdz);
  }
  protoOf(Companion_18).y4r = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_18).j2a = function (typeParamsSerializers) {
    return this.y4r();
  };
  var Companion_instance_24;
  function Companion_getInstance_20() {
    VerificationMethodType_initEntries();
    if (Companion_instance_24 == null)
      new Companion_18();
    return Companion_instance_24;
  }
  var VerificationMethodType_entriesInitialized;
  function VerificationMethodType_initEntries() {
    if (VerificationMethodType_entriesInitialized)
      return Unit_instance;
    VerificationMethodType_entriesInitialized = true;
    VerificationMethodType_JsonWebKey2020_instance = new VerificationMethodType('JsonWebKey2020', 0);
    VerificationMethodType_EcdsaSecp256k1VerificationKey2019_instance = new VerificationMethodType('EcdsaSecp256k1VerificationKey2019', 1);
    VerificationMethodType_Ed25519VerificationKey2020_instance = new VerificationMethodType('Ed25519VerificationKey2020', 2);
    VerificationMethodType_Bls12381G1Key2020_instance = new VerificationMethodType('Bls12381G1Key2020', 3);
    VerificationMethodType_Bls12381G2Key2020_instance = new VerificationMethodType('Bls12381G2Key2020', 4);
    VerificationMethodType_PgpVerificationKey2021_instance = new VerificationMethodType('PgpVerificationKey2021', 5);
    VerificationMethodType_RsaVerificationKey2018_instance = new VerificationMethodType('RsaVerificationKey2018', 6);
    VerificationMethodType_X25519KeyAgreementKey2019_instance = new VerificationMethodType('X25519KeyAgreementKey2019', 7);
    VerificationMethodType_EcdsaSecp256k1RecoveryMethod2020_instance = new VerificationMethodType('EcdsaSecp256k1RecoveryMethod2020', 8);
    VerificationMethodType_VerifiableCondition2021_instance = new VerificationMethodType('VerifiableCondition2021', 9);
    Companion_getInstance_20();
  }
  function VerificationMethodType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function VerificationMethodType_JsonWebKey2020_getInstance() {
    VerificationMethodType_initEntries();
    return VerificationMethodType_JsonWebKey2020_instance;
  }
  function VerificationMethodType_EcdsaSecp256k1VerificationKey2019_getInstance() {
    VerificationMethodType_initEntries();
    return VerificationMethodType_EcdsaSecp256k1VerificationKey2019_instance;
  }
  function VerificationMethodType_Ed25519VerificationKey2020_getInstance() {
    VerificationMethodType_initEntries();
    return VerificationMethodType_Ed25519VerificationKey2020_instance;
  }
  function VerificationMethodType_Bls12381G1Key2020_getInstance() {
    VerificationMethodType_initEntries();
    return VerificationMethodType_Bls12381G1Key2020_instance;
  }
  function VerificationMethodType_Bls12381G2Key2020_getInstance() {
    VerificationMethodType_initEntries();
    return VerificationMethodType_Bls12381G2Key2020_instance;
  }
  function VerificationMethodType_PgpVerificationKey2021_getInstance() {
    VerificationMethodType_initEntries();
    return VerificationMethodType_PgpVerificationKey2021_instance;
  }
  function VerificationMethodType_RsaVerificationKey2018_getInstance() {
    VerificationMethodType_initEntries();
    return VerificationMethodType_RsaVerificationKey2018_instance;
  }
  function VerificationMethodType_X25519KeyAgreementKey2019_getInstance() {
    VerificationMethodType_initEntries();
    return VerificationMethodType_X25519KeyAgreementKey2019_instance;
  }
  function VerificationMethodType_EcdsaSecp256k1RecoveryMethod2020_getInstance() {
    VerificationMethodType_initEntries();
    return VerificationMethodType_EcdsaSecp256k1RecoveryMethod2020_instance;
  }
  function VerificationMethodType_VerifiableCondition2021_getInstance() {
    VerificationMethodType_initEntries();
    return VerificationMethodType_VerifiableCondition2021_instance;
  }
  function Builder() {
  }
  protoOf(Builder).buildFromId = function (id) {
    return new VerificationRelationship(id, null);
  };
  protoOf(Builder).buildFromVerificationMethod = function (verificationMethod) {
    return new VerificationRelationship(null, verificationMethod);
  };
  protoOf(Builder).y4r = function () {
    return VerificationRelationshipSerializer_getInstance();
  };
  var Builder_instance;
  function Builder_getInstance() {
    return Builder_instance;
  }
  function VerificationRelationship(id, verificationMethod) {
    this.id = id;
    this.verificationMethod = verificationMethod;
  }
  protoOf(VerificationRelationship).h69 = function () {
    return this.id;
  };
  protoOf(VerificationRelationship).g9y = function () {
    return this.verificationMethod;
  };
  protoOf(VerificationRelationship).dc = function () {
    return this.id;
  };
  protoOf(VerificationRelationship).ec = function () {
    return this.verificationMethod;
  };
  protoOf(VerificationRelationship).ya0 = function (id, verificationMethod) {
    return new VerificationRelationship(id, verificationMethod);
  };
  protoOf(VerificationRelationship).copy = function (id, verificationMethod, $super) {
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    return $super === VOID ? this.ya0(id, verificationMethod) : $super.ya0.call(this, id, verificationMethod);
  };
  protoOf(VerificationRelationship).toString = function () {
    return 'VerificationRelationship(id=' + this.id + ', verificationMethod=' + toString(this.verificationMethod) + ')';
  };
  protoOf(VerificationRelationship).hashCode = function () {
    var result = this.id == null ? 0 : getStringHashCode(this.id);
    result = imul(result, 31) + (this.verificationMethod == null ? 0 : this.verificationMethod.hashCode()) | 0;
    return result;
  };
  protoOf(VerificationRelationship).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerificationRelationship))
      return false;
    var tmp0_other_with_cast = other instanceof VerificationRelationship ? other : THROW_CCE();
    if (!(this.id == tmp0_other_with_cast.id))
      return false;
    if (!equals_0(this.verificationMethod, tmp0_other_with_cast.verificationMethod))
      return false;
    return true;
  };
  function VerificationRelationshipSerializer() {
    VerificationRelationshipSerializer_instance = this;
    this.za0_1 = Companion_instance_1.y4r().g1y();
  }
  protoOf(VerificationRelationshipSerializer).g1y = function () {
    return this.za0_1;
  };
  protoOf(VerificationRelationshipSerializer).i1y = function (decoder) {
    var value = decoder.s21(Companion_instance_1.y4r());
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.i22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(VerificationMethod_4), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.Companion.success' call
      var value_0 = this_0.s4p(tmp$ret$1, value);
      tmp = _Result___init__impl__xyqfz8(value_0);
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
    // Inline function 'kotlin.fold' call
    var this_3 = tmp;
    var exception = Result__exceptionOrNull_impl_p6xea9(this_3);
    var tmp_1;
    if (exception == null) {
      var tmp_2 = _Result___get_value__impl__bjfvqg(this_3);
      var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      return Builder_instance.buildFromVerificationMethod(it);
    } else {
      return Builder_instance.buildFromId(get_jsonPrimitive(value).c4s());
    }
  };
  protoOf(VerificationRelationshipSerializer).aa1 = function (encoder, value) {
    if (!(value.verificationMethod == null)) {
      var tmp = Companion_instance_1.y4r();
      var tmp0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var value_0 = value.verificationMethod;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_0 = tmp0.i22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(getKClass(VerificationMethod_4), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      var tmp$ret$2 = tmp0.r4p(tmp$ret$1, value_0);
      encoder.l23(tmp, tmp$ret$2);
    } else {
      encoder.x22(ensureNotNull(value.id));
    }
  };
  protoOf(VerificationRelationshipSerializer).h1y = function (encoder, value) {
    return this.aa1(encoder, value instanceof VerificationRelationship ? value : THROW_CCE());
  };
  var VerificationRelationshipSerializer_instance;
  function VerificationRelationshipSerializer_getInstance() {
    if (VerificationRelationshipSerializer_instance == null)
      new VerificationRelationshipSerializer();
    return VerificationRelationshipSerializer_instance;
  }
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.ba1_1.z();
  }
  function VerificationRelationshipType$Companion$_anonymous__mt3iim() {
    var tmp = values_3();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = ['assertionMethod', 'authentication', 'capabilityDelegation', 'capabilityInvocation', 'keyAgreement'];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [null, null, null, null, null];
    return createAnnotatedEnumSerializer('id.walt.did.dids.document.models.verification.relationship.VerificationRelationshipType', tmp, tmp_0, tmp$ret$5, null);
  }
  var VerificationRelationshipType_AssertionMethod_instance;
  var VerificationRelationshipType_Authentication_instance;
  var VerificationRelationshipType_CapabilityDelegation_instance;
  var VerificationRelationshipType_CapabilityInvocation_instance;
  var VerificationRelationshipType_KeyAgreement_instance;
  function values_3() {
    return [VerificationRelationshipType_AssertionMethod_getInstance(), VerificationRelationshipType_Authentication_getInstance(), VerificationRelationshipType_CapabilityDelegation_getInstance(), VerificationRelationshipType_CapabilityInvocation_getInstance(), VerificationRelationshipType_KeyAgreement_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'AssertionMethod':
        return VerificationRelationshipType_AssertionMethod_getInstance();
      case 'Authentication':
        return VerificationRelationshipType_Authentication_getInstance();
      case 'CapabilityDelegation':
        return VerificationRelationshipType_CapabilityDelegation_getInstance();
      case 'CapabilityInvocation':
        return VerificationRelationshipType_CapabilityInvocation_getInstance();
      case 'KeyAgreement':
        return VerificationRelationshipType_KeyAgreement_getInstance();
      default:
        VerificationRelationshipType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_1() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_3());
    return $ENTRIES_0;
  }
  function Companion_19() {
    Companion_instance_25 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ba1_1 = lazy(tmp_0, VerificationRelationshipType$Companion$_anonymous__mt3iim);
  }
  protoOf(Companion_19).y4r = function () {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(Companion_19).j2a = function (typeParamsSerializers) {
    return this.y4r();
  };
  var Companion_instance_25;
  function Companion_getInstance_21() {
    VerificationRelationshipType_initEntries();
    if (Companion_instance_25 == null)
      new Companion_19();
    return Companion_instance_25;
  }
  var VerificationRelationshipType_entriesInitialized;
  function VerificationRelationshipType_initEntries() {
    if (VerificationRelationshipType_entriesInitialized)
      return Unit_instance;
    VerificationRelationshipType_entriesInitialized = true;
    VerificationRelationshipType_AssertionMethod_instance = new VerificationRelationshipType('AssertionMethod', 0);
    VerificationRelationshipType_Authentication_instance = new VerificationRelationshipType('Authentication', 1);
    VerificationRelationshipType_CapabilityDelegation_instance = new VerificationRelationshipType('CapabilityDelegation', 2);
    VerificationRelationshipType_CapabilityInvocation_instance = new VerificationRelationshipType('CapabilityInvocation', 3);
    VerificationRelationshipType_KeyAgreement_instance = new VerificationRelationshipType('KeyAgreement', 4);
    Companion_getInstance_21();
  }
  var $ENTRIES_0;
  function VerificationRelationshipType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(VerificationRelationshipType).toString = function () {
    var tmp;
    switch (this.r2_1) {
      case 0:
        tmp = 'assertionMethod';
        break;
      case 1:
        tmp = 'authentication';
        break;
      case 2:
        tmp = 'capabilityDelegation';
        break;
      case 3:
        tmp = 'capabilityInvocation';
        break;
      case 4:
        tmp = 'keyAgreement';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function VerificationRelationshipType_AssertionMethod_getInstance() {
    VerificationRelationshipType_initEntries();
    return VerificationRelationshipType_AssertionMethod_instance;
  }
  function VerificationRelationshipType_Authentication_getInstance() {
    VerificationRelationshipType_initEntries();
    return VerificationRelationshipType_Authentication_instance;
  }
  function VerificationRelationshipType_CapabilityDelegation_getInstance() {
    VerificationRelationshipType_initEntries();
    return VerificationRelationshipType_CapabilityDelegation_instance;
  }
  function VerificationRelationshipType_CapabilityInvocation_getInstance() {
    VerificationRelationshipType_initEntries();
    return VerificationRelationshipType_CapabilityInvocation_instance;
  }
  function VerificationRelationshipType_KeyAgreement_getInstance() {
    VerificationRelationshipType_initEntries();
    return VerificationRelationshipType_KeyAgreement_instance;
  }
  function DidRegistrar$createAsync$slambda(this$0, $options, resultContinuation) {
    this.ma1_1 = this$0;
    this.na1_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$createAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidRegistrar$createAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidRegistrar$createAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.ma1_1.j9x(this.na1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidRegistrar$createAsync$slambda).ia = function (completion) {
    return new DidRegistrar$createAsync$slambda(this.ma1_1, this.na1_1, completion);
  };
  function DidRegistrar$createAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidRegistrar$createAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.wa1_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$getSupportedMethodsAsync$slambda).xa1 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidRegistrar$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.xa1($completion);
  };
  protoOf(DidRegistrar$getSupportedMethodsAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.wa1_1.b9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidRegistrar$getSupportedMethodsAsync$slambda).ia = function (completion) {
    return new DidRegistrar$getSupportedMethodsAsync$slambda(this.wa1_1, completion);
  };
  function DidRegistrar$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.ga2_1 = this$0;
    this.ha2_1 = $key;
    this.ia2_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$createByKeyAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidRegistrar$createByKeyAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidRegistrar$createByKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.ga2_1.k9x(this.ha2_1, this.ia2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidRegistrar$createByKeyAsync$slambda).ia = function (completion) {
    return new DidRegistrar$createByKeyAsync$slambda(this.ga2_1, this.ha2_1, this.ia2_1, completion);
  };
  function DidRegistrar$createByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$updateAsync$slambda(this$0, resultContinuation) {
    this.ra2_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$updateAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidRegistrar$updateAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(DidRegistrar$updateAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.ra2_1.sa2(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidRegistrar$updateAsync$slambda).ia = function (completion) {
    return new DidRegistrar$updateAsync$slambda(this.ra2_1, completion);
  };
  function DidRegistrar$updateAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidRegistrar$updateAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$deleteAsync$slambda(this$0, resultContinuation) {
    this.ba3_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$deleteAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidRegistrar$deleteAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(DidRegistrar$deleteAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.ba3_1.c93(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidRegistrar$deleteAsync$slambda).ia = function (completion) {
    return new DidRegistrar$deleteAsync$slambda(this.ba3_1, completion);
  };
  function DidRegistrar$deleteAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidRegistrar$deleteAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar() {
  }
  function DidRegistrarRegistrations() {
  }
  protoOf(DidRegistrarRegistrations).ga3 = function (uniregistrarUrl) {
    var tmp = new LocalRegistrar();
    return setOf_0([tmp, new UniregistrarRegistrar(uniregistrarUrl == null ? 'https://uniregistrar.io/1.0' : uniregistrarUrl)]);
  };
  protoOf(DidRegistrarRegistrations).curatedDidRegistrars = function (uniregistrarUrl, $super) {
    uniregistrarUrl = uniregistrarUrl === VOID ? null : uniregistrarUrl;
    return $super === VOID ? this.ga3(uniregistrarUrl) : $super.ga3.call(this, uniregistrarUrl);
  };
  var DidRegistrarRegistrations_instance;
  function DidRegistrarRegistrations_getInstance() {
    return DidRegistrarRegistrations_instance;
  }
  function Companion_20() {
  }
  protoOf(Companion_20).y4r = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_26;
  function Companion_getInstance_22() {
    return Companion_instance_26;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.DidResult', this, 2);
    tmp0_serialDesc.j29('did', false);
    tmp0_serialDesc.j29('didDocument', false);
    this.ha3_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).ia3 = function (encoder, value) {
    var tmp0_desc = this.ha3_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.did);
    tmp1_output.k23(tmp0_desc, 1, $serializer_getInstance_1(), value.didDocument);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_10).h1y = function (encoder, value) {
    return this.ia3(encoder, value instanceof DidResult ? value : THROW_CCE());
  };
  protoOf($serializer_10).i1y = function (decoder) {
    var tmp0_desc = this.ha3_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.t21(tmp0_desc);
    if (tmp6_input.j22()) {
      tmp4_local0 = tmp6_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.f22(tmp0_desc, 1, $serializer_getInstance_1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.f22(tmp0_desc, 1, $serializer_getInstance_1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.u21(tmp0_desc);
    return DidResult_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).g1y = function () {
    return this.ha3_1;
  };
  protoOf($serializer_10).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer_getInstance_1()];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function DidResult_init_$Init$(seen0, did, didDocument, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_10().ha3_1);
    }
    $this.did = did;
    $this.didDocument = didDocument;
    return $this;
  }
  function DidResult_init_$Create$(seen0, did, didDocument, serializationConstructorMarker) {
    return DidResult_init_$Init$(seen0, did, didDocument, serializationConstructorMarker, objectCreate(protoOf(DidResult)));
  }
  function DidResult(did, didDocument) {
    this.did = did;
    this.didDocument = didDocument;
  }
  protoOf(DidResult).ja3 = function () {
    return this.did;
  };
  protoOf(DidResult).ka3 = function () {
    return this.didDocument;
  };
  protoOf(DidResult).dc = function () {
    return this.did;
  };
  protoOf(DidResult).ec = function () {
    return this.didDocument;
  };
  protoOf(DidResult).la3 = function (did, didDocument) {
    return new DidResult(did, didDocument);
  };
  protoOf(DidResult).copy = function (did, didDocument, $super) {
    did = did === VOID ? this.did : did;
    didDocument = didDocument === VOID ? this.didDocument : didDocument;
    return $super === VOID ? this.la3(did, didDocument) : $super.la3.call(this, did, didDocument);
  };
  protoOf(DidResult).toString = function () {
    return 'DidResult(did=' + this.did + ', didDocument=' + this.didDocument.toString() + ')';
  };
  protoOf(DidResult).hashCode = function () {
    var result = getStringHashCode(this.did);
    result = imul(result, 31) + this.didDocument.hashCode() | 0;
    return result;
  };
  protoOf(DidResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DidResult))
      return false;
    var tmp0_other_with_cast = other instanceof DidResult ? other : THROW_CCE();
    if (!(this.did === tmp0_other_with_cast.did))
      return false;
    if (!this.didDocument.equals(tmp0_other_with_cast.didDocument))
      return false;
    return true;
  };
  function getRegistrarForMethod_0($this, method) {
    var tmp0_elvis_lhs = $this.na3_1.k2(method);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No local registrar for method: ' + method);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function LocalRegistrar$createAsync$slambda(this$0, $options, resultContinuation) {
    this.wa3_1 = this$0;
    this.xa3_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$createAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrar$createAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(LocalRegistrar$createAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.wa3_1.j9x(this.xa3_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalRegistrar$createAsync$slambda).ia = function (completion) {
    return new LocalRegistrar$createAsync$slambda(this.wa3_1, this.xa3_1, completion);
  };
  function LocalRegistrar$createAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new LocalRegistrar$createAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.ga4_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$getSupportedMethodsAsync$slambda).xa1 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalRegistrar$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.xa1($completion);
  };
  protoOf(LocalRegistrar$getSupportedMethodsAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.ga4_1.b9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalRegistrar$getSupportedMethodsAsync$slambda).ia = function (completion) {
    return new LocalRegistrar$getSupportedMethodsAsync$slambda(this.ga4_1, completion);
  };
  function LocalRegistrar$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.pa4_1 = this$0;
    this.qa4_1 = $key;
    this.ra4_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$createByKeyAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrar$createByKeyAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(LocalRegistrar$createByKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.pa4_1.k9x(this.qa4_1, this.ra4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalRegistrar$createByKeyAsync$slambda).ia = function (completion) {
    return new LocalRegistrar$createByKeyAsync$slambda(this.pa4_1, this.qa4_1, this.ra4_1, completion);
  };
  function LocalRegistrar$createByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new LocalRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$updateAsync$slambda(this$0, resultContinuation) {
    this.aa5_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$updateAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrar$updateAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(LocalRegistrar$updateAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.aa5_1.sa2(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalRegistrar$updateAsync$slambda).ia = function (completion) {
    return new LocalRegistrar$updateAsync$slambda(this.aa5_1, completion);
  };
  function LocalRegistrar$updateAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalRegistrar$updateAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$deleteAsync$slambda(this$0, resultContinuation) {
    this.ja5_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$deleteAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrar$deleteAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(LocalRegistrar$deleteAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.ja5_1.c93(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalRegistrar$deleteAsync$slambda).ia = function (completion) {
    return new LocalRegistrar$deleteAsync$slambda(this.ja5_1, completion);
  };
  function LocalRegistrar$deleteAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalRegistrar$deleteAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar() {
    this.ma3_1 = 'walt.id local registrar';
    var tmp = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = setOf_0([new DidJwkRegistrar(), new DidKeyRegistrar(), new DidWebRegistrar(), new DidCheqdRegistrar()]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp$ret$0 = element.method;
      destination.n2(tmp$ret$0, element);
    }
    tmp.na3_1 = destination;
  }
  protoOf(LocalRegistrar).s2 = function () {
    return this.ma3_1;
  };
  protoOf(LocalRegistrar).b9w = function ($completion) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.na3_1.m2();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.method;
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.Companion.success' call
    var value = toSet(destination);
    var tmp$ret$3 = _Result___init__impl__xyqfz8(value);
    return new Result(tmp$ret$3);
  };
  protoOf(LocalRegistrar).j9x = function (options, $completion) {
    return getRegistrarForMethod_0(this, options.method).w9r(options, $completion);
  };
  protoOf(LocalRegistrar).k9x = function (key, options, $completion) {
    return getRegistrarForMethod_0(this, options.method).ka5(key, options, $completion);
  };
  protoOf(LocalRegistrar).sa2 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(LocalRegistrar).c93 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(LocalRegistrar).ca3 = function (options) {
    var tmp = LocalRegistrar$createAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).da3 = function () {
    var tmp = LocalRegistrar$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).ea3 = function (key, options) {
    var tmp = LocalRegistrar$createByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).fa3 = function () {
    var tmp = LocalRegistrar$updateAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).t97 = function () {
    var tmp = LocalRegistrar$deleteAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function main($completion) {
    var tmp = new $mainCOROUTINE$5($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function $mainCOROUTINE$5(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf($mainCOROUTINE$5).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = (new LocalRegistrar()).j9x(new DidWebCreateOptions('localhost', '/wallet-api/registry/1237'), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            println(it.didDocument);
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function mainWrapper() {
    main(get_EmptyContinuation());
  }
  function Companion_21() {
    this.DEFAULT_REGISTRAR_URL = 'https://uniregistrar.io/1.0';
  }
  protoOf(Companion_21).ta5 = function () {
    return this.DEFAULT_REGISTRAR_URL;
  };
  var Companion_instance_27;
  function Companion_getInstance_23() {
    return Companion_instance_27;
  }
  function getMethods($this, $completion) {
    var tmp = new $getMethodsCOROUTINE$7($this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function UniregistrarRegistrar$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.b3j(tmp, UniregistrarRegistrar$http$lambda$lambda);
    defaultRequest($this$HttpClient, UniregistrarRegistrar$http$lambda$lambda_0);
    var tmp_0 = get_Logging();
    $this$HttpClient.b3j(tmp_0, UniregistrarRegistrar$http$lambda$lambda_1);
    return Unit_instance;
  }
  function UniregistrarRegistrar$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function UniregistrarRegistrar$http$lambda$lambda_0($this$defaultRequest) {
    header($this$defaultRequest, HttpHeaders_getInstance().c2w_1, Application_getInstance().k2t_1);
    return Unit_instance;
  }
  function UniregistrarRegistrar$http$lambda$lambda_1($this$install) {
    $this$install.y5d(get_DEFAULT(Companion_instance_3));
    $this$install.x5d_1 = LogLevel_ALL_getInstance();
    return Unit_instance;
  }
  function UniregistrarRegistrar$createAsync$slambda(this$0, $options, resultContinuation) {
    this.ba7_1 = this$0;
    this.ca7_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$createAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(UniregistrarRegistrar$createAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(UniregistrarRegistrar$createAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.ba7_1.j9x(this.ca7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(UniregistrarRegistrar$createAsync$slambda).ia = function (completion) {
    return new UniregistrarRegistrar$createAsync$slambda(this.ba7_1, this.ca7_1, completion);
  };
  function UniregistrarRegistrar$createAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new UniregistrarRegistrar$createAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.na7_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$getSupportedMethodsAsync$slambda).xa1 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniregistrarRegistrar$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.xa1($completion);
  };
  protoOf(UniregistrarRegistrar$getSupportedMethodsAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.na7_1.b9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(UniregistrarRegistrar$getSupportedMethodsAsync$slambda).ia = function (completion) {
    return new UniregistrarRegistrar$getSupportedMethodsAsync$slambda(this.na7_1, completion);
  };
  function UniregistrarRegistrar$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniregistrarRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.wa7_1 = this$0;
    this.xa7_1 = $key;
    this.ya7_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$createByKeyAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(UniregistrarRegistrar$createByKeyAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(UniregistrarRegistrar$createByKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.wa7_1.k9x(this.xa7_1, this.ya7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(UniregistrarRegistrar$createByKeyAsync$slambda).ia = function (completion) {
    return new UniregistrarRegistrar$createByKeyAsync$slambda(this.wa7_1, this.xa7_1, this.ya7_1, completion);
  };
  function UniregistrarRegistrar$createByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new UniregistrarRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$updateAsync$slambda(this$0, resultContinuation) {
    this.ha8_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$updateAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(UniregistrarRegistrar$updateAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(UniregistrarRegistrar$updateAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.ha8_1.sa2(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(UniregistrarRegistrar$updateAsync$slambda).ia = function (completion) {
    return new UniregistrarRegistrar$updateAsync$slambda(this.ha8_1, completion);
  };
  function UniregistrarRegistrar$updateAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniregistrarRegistrar$updateAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$deleteAsync$slambda(this$0, resultContinuation) {
    this.qa8_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$deleteAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(UniregistrarRegistrar$deleteAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(UniregistrarRegistrar$deleteAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.qa8_1.c93(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(UniregistrarRegistrar$deleteAsync$slambda).ia = function (completion) {
    return new UniregistrarRegistrar$deleteAsync$slambda(this.qa8_1, completion);
  };
  function UniregistrarRegistrar$deleteAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniregistrarRegistrar$deleteAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getSupportedMethodsCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.za8_1 = _this__u8e3s4;
  }
  protoOf($getSupportedMethodsCOROUTINE$6).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.aa9_1 = this.za8_1;
            this.ba9_1 = this.aa9_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.da9_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.ea9_1 = this.ba9_1;
            this.fa9_1 = this.ea9_1;
            this.m9_1 = 1;
            suspendResult = getMethods(this.fa9_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = lazyOf(ARGUMENT);
            var tmp1 = ARGUMENT_0.z();
            var tmp_3 = this;
            this.da9_1;
            tmp_3.ca9_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.ca9_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.ca9_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 3) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($getSupportedMethodsCOROUTINE$6)['<set-state>'] = protoOf($getSupportedMethodsCOROUTINE$6).t9;
  protoOf($getSupportedMethodsCOROUTINE$6)['<get-state>'] = protoOf($getSupportedMethodsCOROUTINE$6).u9;
  protoOf($getSupportedMethodsCOROUTINE$6)['<set-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$6).v9;
  protoOf($getSupportedMethodsCOROUTINE$6)['<get-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$6).w9;
  protoOf($getSupportedMethodsCOROUTINE$6)['<set-result>'] = protoOf($getSupportedMethodsCOROUTINE$6).x9;
  protoOf($getSupportedMethodsCOROUTINE$6)['<get-result>'] = protoOf($getSupportedMethodsCOROUTINE$6).y9;
  protoOf($getSupportedMethodsCOROUTINE$6)['<set-exception>'] = protoOf($getSupportedMethodsCOROUTINE$6).z9;
  protoOf($getSupportedMethodsCOROUTINE$6)['<get-exception>'] = protoOf($getSupportedMethodsCOROUTINE$6).aa;
  protoOf($getSupportedMethodsCOROUTINE$6)['<set-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$6).ba;
  protoOf($getSupportedMethodsCOROUTINE$6)['<get-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$6).ca;
  protoOf($getSupportedMethodsCOROUTINE$6)['<get-context>'] = protoOf($getSupportedMethodsCOROUTINE$6).s9;
  function $getMethodsCOROUTINE$7(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ca6_1 = _this__u8e3s4;
  }
  protoOf($getMethodsCOROUTINE$7).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.da6_1 = this.ca6_1.ea7_1;
            var tmp_1 = this;
            tmp_1.ea6_1 = this.ca6_1.registrarUrl + '/methods';
            this.fa6_1 = this.da6_1;
            this.ga6_1 = this.ea6_1;
            var tmp_2 = this;
            tmp_2.ha6_1 = this.fa6_1;
            this.ia6_1 = this.ha6_1;
            var tmp_3 = this;
            tmp_3.ja6_1 = this.ia6_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.ga6_1);
            tmp_4.ka6_1 = this_0;
            this.la6_1 = this.ja6_1;
            this.ma6_1 = this.ka6_1;
            this.ma6_1.v3h_1 = Companion_getInstance().o2z_1;
            var tmp_5 = this;
            tmp_5.na6_1 = this.la6_1;
            var tmp_6 = this;
            tmp_6.oa6_1 = this.ma6_1;
            this.pa6_1 = this.na6_1;
            this.qa6_1 = this.oa6_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.qa6_1, this.pa6_1)).d4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ra6_1 = suspendResult;
            this.sa6_1 = this.ra6_1;
            this.m9_1 = 2;
            var tmp_7 = this.sa6_1.c3l();
            var tmp_8 = getKClass(JsonArray);
            var tmp_9;
            try {
              tmp_9 = createKType(getKClass(JsonArray), arrayOf([]), false);
            } catch ($p) {
              var tmp_10;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_10 = null;
              } else {
                throw $p;
              }
              tmp_9 = tmp_10;
            }

            suspendResult = tmp_7.f3k(new TypeInfo(tmp_8, tmp_9), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var this_1 = suspendResult instanceof JsonArray ? suspendResult : THROW_CCE();
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
            var _iterator__ex2g4s = this_1.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(get_jsonPrimitive(item).c4s());
            }

            var ARGUMENT = destination;
            return toSet(ARGUMENT);
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $createCOROUTINE$8(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oa9_1 = _this__u8e3s4;
    this.pa9_1 = options;
  }
  protoOf($createCOROUTINE$8).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.qa9_1 = this.oa9_1.ea7_1;
            var tmp_1 = this;
            tmp_1.ra9_1 = this.oa9_1.registrarUrl + '/create?method=' + this.pa9_1.method;
            this.sa9_1 = this.qa9_1;
            this.ta9_1 = this.ra9_1;
            var tmp_2 = this;
            tmp_2.ua9_1 = this.sa9_1;
            this.va9_1 = this.ua9_1;
            var tmp_3 = this;
            tmp_3.wa9_1 = this.va9_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.ta9_1);
            var body = this.pa9_1.config;
            if (body == null) {
              this_0.x3h_1 = NullBody_instance;
              var tmp_5 = getKClass(JsonElement);
              var tmp_6;
              try {
                tmp_6 = createKType(getKClass(JsonElement), arrayOf([]), false);
              } catch ($p) {
                var tmp_7;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_7 = null;
                } else {
                  throw $p;
                }
                tmp_6 = tmp_7;
              }
              this_0.q3n(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.x3h_1 = body;
                this_0.q3n(null);
              } else {
                this_0.x3h_1 = body;
                var tmp_8 = getKClass(JsonElement);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(JsonElement), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                this_0.q3n(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.xa9_1 = this_0;
            this.ya9_1 = this.wa9_1;
            this.za9_1 = this.xa9_1;
            this.za9_1.v3h_1 = Companion_getInstance().p2z_1;
            var tmp_11 = this;
            tmp_11.aaa_1 = this.ya9_1;
            var tmp_12 = this;
            tmp_12.baa_1 = this.za9_1;
            this.caa_1 = this.aaa_1;
            this.daa_1 = this.baa_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.daa_1, this.caa_1)).d4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.eaa_1 = suspendResult;
            this.faa_1 = this.eaa_1;
            this.m9_1 = 2;
            var tmp_13 = this.faa_1.c3l();
            var tmp_14 = getKClass(DidDocument);
            var tmp_15;
            try {
              tmp_15 = createKType(getKClass(DidDocument), arrayOf([]), false);
            } catch ($p) {
              var tmp_16;
              if ($p instanceof Error) {
                var _unused_var__etf5q3_1 = $p;
                tmp_16 = null;
              } else {
                throw $p;
              }
              tmp_15 = tmp_16;
            }

            suspendResult = tmp_13.f3k(new TypeInfo(tmp_14, tmp_15), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult instanceof DidDocument ? suspendResult : THROW_CCE();
            return new DidResult('TODO', ARGUMENT);
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($createCOROUTINE$8)['<set-state>'] = protoOf($createCOROUTINE$8).t9;
  protoOf($createCOROUTINE$8)['<get-state>'] = protoOf($createCOROUTINE$8).u9;
  protoOf($createCOROUTINE$8)['<set-exceptionState>'] = protoOf($createCOROUTINE$8).v9;
  protoOf($createCOROUTINE$8)['<get-exceptionState>'] = protoOf($createCOROUTINE$8).w9;
  protoOf($createCOROUTINE$8)['<set-result>'] = protoOf($createCOROUTINE$8).x9;
  protoOf($createCOROUTINE$8)['<get-result>'] = protoOf($createCOROUTINE$8).y9;
  protoOf($createCOROUTINE$8)['<set-exception>'] = protoOf($createCOROUTINE$8).z9;
  protoOf($createCOROUTINE$8)['<get-exception>'] = protoOf($createCOROUTINE$8).aa;
  protoOf($createCOROUTINE$8)['<set-finallyPath>'] = protoOf($createCOROUTINE$8).ba;
  protoOf($createCOROUTINE$8)['<get-finallyPath>'] = protoOf($createCOROUTINE$8).ca;
  protoOf($createCOROUTINE$8)['<get-context>'] = protoOf($createCOROUTINE$8).s9;
  function UniregistrarRegistrar(registrarUrl) {
    registrarUrl = registrarUrl === VOID ? 'https://uniregistrar.io/1.0' : registrarUrl;
    this.registrarUrl = registrarUrl;
    this.da7_1 = 'uniresolver @ ' + this.registrarUrl;
    var tmp = this;
    tmp.ea7_1 = HttpClient(UniregistrarRegistrar$http$lambda);
  }
  protoOf(UniregistrarRegistrar).gaa = function (_set____db54di) {
    this.registrarUrl = _set____db54di;
  };
  protoOf(UniregistrarRegistrar).haa = function () {
    return this.registrarUrl;
  };
  protoOf(UniregistrarRegistrar).s2 = function () {
    return this.da7_1;
  };
  protoOf(UniregistrarRegistrar).b9w = function ($completion) {
    var tmp = new $getSupportedMethodsCOROUTINE$6(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniregistrarRegistrar).j9x = function (options, $completion) {
    var tmp = new $createCOROUTINE$8(this, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(UniregistrarRegistrar).k9x = function (key, options, $completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(UniregistrarRegistrar).sa2 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(UniregistrarRegistrar).c93 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(UniregistrarRegistrar).ca3 = function (options) {
    var tmp = UniregistrarRegistrar$createAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).da3 = function () {
    var tmp = UniregistrarRegistrar$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).ea3 = function (key, options) {
    var tmp = UniregistrarRegistrar$createByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).fa3 = function () {
    var tmp = UniregistrarRegistrar$updateAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).t97 = function () {
    var tmp = UniregistrarRegistrar$deleteAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidBtcrCreateOptions(chain) {
    DidCreateOptions_init_$Init$('btcr', config([to('chain', chain)]), VOID, this);
  }
  function DidCheqdCreateOptions(network) {
    DidCreateOptions_init_$Init$('cheqd', mapOf(to('network', network)), VOID, this);
  }
  function DidCreateOptions_init_$Init$(method, config, didDocConfig, $this) {
    didDocConfig = didDocConfig === VOID ? null : didDocConfig;
    DidCreateOptions.call($this, method, JsonUtils_getInstance().mapToJsonObject(config), didDocConfig);
    return $this;
  }
  function secondaryConstructor_5(method, config, didDocConfig) {
    return DidCreateOptions_init_$Init$(method, config, didDocConfig, objectCreate(protoOf(DidCreateOptions)));
  }
  function Companion_22() {
  }
  protoOf(Companion_22).y4r = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_28;
  function Companion_getInstance_24() {
    return Companion_instance_28;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.dids.DidCreateOptions', this, 3);
    tmp0_serialDesc.j29('method', false);
    tmp0_serialDesc.j29('config', false);
    tmp0_serialDesc.j29('didDocConfig', true);
    this.jaa_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).kaa = function (encoder, value) {
    var tmp0_desc = this.jaa_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.method);
    tmp1_output.k23(tmp0_desc, 1, JsonElementSerializer_getInstance(), value.config);
    if (tmp1_output.q23(tmp0_desc, 2) ? true : !(value.didDocConfig == null)) {
      tmp1_output.m23(tmp0_desc, 2, $serializer_getInstance_12(), value.didDocConfig);
    }
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_11).h1y = function (encoder, value) {
    return this.kaa(encoder, value instanceof DidCreateOptions ? value : THROW_CCE());
  };
  protoOf($serializer_11).i1y = function (decoder) {
    var tmp0_desc = this.jaa_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.t21(tmp0_desc);
    if (tmp7_input.j22()) {
      tmp4_local0 = tmp7_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.f22(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.h22(tmp0_desc, 2, $serializer_getInstance_12(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.f22(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.h22(tmp0_desc, 2, $serializer_getInstance_12(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.u21(tmp0_desc);
    return DidCreateOptions_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_11).g1y = function () {
    return this.jaa_1;
  };
  protoOf($serializer_11).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), JsonElementSerializer_getInstance(), get_nullable($serializer_getInstance_12())];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function DidCreateOptions_init_$Init$_0(seen0, method, config, didDocConfig, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().jaa_1);
    }
    $this.method = method;
    $this.config = config;
    if (0 === (seen0 & 4))
      $this.didDocConfig = null;
    else
      $this.didDocConfig = didDocConfig;
    return $this;
  }
  function DidCreateOptions_init_$Create$(seen0, method, config, didDocConfig, serializationConstructorMarker) {
    return DidCreateOptions_init_$Init$_0(seen0, method, config, didDocConfig, serializationConstructorMarker, objectCreate(protoOf(DidCreateOptions)));
  }
  function DidCreateOptions(method, config, didDocConfig) {
    didDocConfig = didDocConfig === VOID ? null : didDocConfig;
    this.method = method;
    this.config = config;
    this.didDocConfig = didDocConfig;
  }
  protoOf(DidCreateOptions).z3k = function () {
    return this.method;
  };
  protoOf(DidCreateOptions).a3i = function () {
    return this.config;
  };
  protoOf(DidCreateOptions).iaa = function () {
    return this.didDocConfig;
  };
  function didCreateConfig(config, secret) {
    secret = secret === VOID ? emptyMap() : secret;
    return mapOf_0([to('config', config), to('didDocument', mapOf_0([to('@context', 'https://www.w3.org/ns/did/v1'), to('authentication', emptyList()), to('service', emptyList())])), to('secret', secret)]);
  }
  function config(inlineConfig) {
    return didCreateConfig(mapOf_0(inlineConfig.slice()));
  }
  function DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_0() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), Companion_getInstance_0().y4r());
  }
  function DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_1() {
    return new LinkedHashMapSerializer(Companion_getInstance_21().y4r(), new LinkedHashSetSerializer($serializer_getInstance_13()));
  }
  function DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_2() {
    return new LinkedHashSetSerializer($serializer_getInstance_14());
  }
  function DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_3() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda($context, $verificationKeySetConfiguration, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    this.taa_1 = $context;
    this.uaa_1 = $verificationKeySetConfiguration;
    this.vaa_1 = $serviceConfigurationSet;
    this.waa_1 = $rootCustomProperties;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda).xaa = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda).zb = function ($completion) {
    return this.xaa($completion);
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = Companion_getInstance_25().aab(this.taa_1, this.uaa_1, this.vaa_1, this.waa_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda).ia = function (completion) {
    return new DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda(this.taa_1, this.uaa_1, this.vaa_1, this.waa_1, completion);
  };
  function DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda_0($context, $verificationKeySetConfiguration, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    var i = new DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda($context, $verificationKeySetConfiguration, $serviceConfigurationSet, $rootCustomProperties, resultContinuation);
    var l = function ($completion) {
      return i.xaa($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda($context, $publicKeySet, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    this.jab_1 = $context;
    this.kab_1 = $publicKeySet;
    this.lab_1 = $serviceConfigurationSet;
    this.mab_1 = $rootCustomProperties;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda).xaa = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda).zb = function ($completion) {
    return this.xaa($completion);
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = Companion_getInstance_25().nab(this.jab_1, this.kab_1, this.lab_1, this.mab_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda).ia = function (completion) {
    return new DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda(this.jab_1, this.kab_1, this.lab_1, this.mab_1, completion);
  };
  function DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda_0($context, $publicKeySet, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    var i = new DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda($context, $publicKeySet, $serviceConfigurationSet, $rootCustomProperties, resultContinuation);
    var l = function ($completion) {
      return i.xaa($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $buildFromPublicKeySetCOROUTINE$9(_this__u8e3s4, context, publicKeySet, serviceConfigurationSet, rootCustomProperties, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wab_1 = _this__u8e3s4;
    this.xab_1 = context;
    this.yab_1 = publicKeySet;
    this.zab_1 = serviceConfigurationSet;
    this.aac_1 = rootCustomProperties;
  }
  protoOf($buildFromPublicKeySetCOROUTINE$9).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 10;
            var tmp_0 = this;
            tmp_0.bac_1 = this.yab_1;
            this.cac_1 = this.bac_1;
            this.dac_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.cac_1, 10)), 16);
            var tmp_1 = this;
            tmp_1.eac_1 = this.cac_1;
            var tmp_2 = this;
            tmp_2.fac_1 = LinkedHashMap_init_$Create$_0(this.dac_1);
            this.gac_1 = this.eac_1;
            this.hac_1 = this.fac_1;
            this.iac_1 = this.gac_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.iac_1.q()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.jac_1 = this.iac_1.r();
            var tmp_3 = this;
            tmp_3.kac_1 = this.jac_1;
            this.lac_1 = this.kac_1;
            this.m9_1 = 2;
            suspendResult = this.lac_1.e6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.mac_1 = suspendResult;
            this.hac_1.n2(this.mac_1, this.jac_1);
            this.m9_1 = 1;
            continue $sm;
          case 3:
            this.nac_1 = this.hac_1;
            var tmp_4 = this;
            var this_0 = this.yab_1;
            var tmp_5;
            if (!this_0.h()) {
              tmp_5 = this_0;
            } else {
              tmp_5 = null;
            }

            tmp_4.oac_1 = tmp_5;
            if (this.oac_1 == null) {
              this.pac_1 = null;
              this.m9_1 = 9;
              continue $sm;
            } else {
              var tmp_6 = this;
              tmp_6.qac_1 = this.oac_1;
              this.rac_1 = this.qac_1;
              var tmp_7 = this;
              tmp_7.sac_1 = this.rac_1;
              this.tac_1 = this.sac_1;
              var tmp_8 = this;
              tmp_8.uac_1 = get_entries_1();
              this.vac_1 = this.uac_1;
              this.wac_1 = LinkedHashMap_init_$Create$_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.vac_1, 10)), 16));
              var tmp_9 = this;
              tmp_9.xac_1 = this.vac_1;
              var tmp_10 = this;
              tmp_10.yac_1 = this.wac_1;
              this.zac_1 = this.xac_1;
              this.aad_1 = this.yac_1;
              this.bad_1 = this.zac_1.p();
              this.m9_1 = 4;
              continue $sm;
            }

          case 4:
            if (!this.bad_1.q()) {
              this.m9_1 = 8;
              continue $sm;
            }

            this.cad_1 = this.bad_1.r();
            var tmp_11 = this;
            tmp_11.dad_1 = this.cad_1;
            this.ead_1 = this.dad_1;
            var tmp_12 = this;
            tmp_12.fad_1 = this.yab_1;
            this.gad_1 = this.fad_1;
            var tmp_13 = this;
            tmp_13.had_1 = this.gad_1;
            var tmp_14 = this;
            tmp_14.iad_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.gad_1, 10));
            this.jad_1 = this.had_1;
            this.kad_1 = this.iad_1;
            this.lad_1 = this.jad_1.p();
            this.m9_1 = 5;
            continue $sm;
          case 5:
            if (!this.lad_1.q()) {
              this.m9_1 = 7;
              continue $sm;
            }

            this.mad_1 = this.lad_1.r();
            var tmp_15 = this;
            tmp_15.nad_1 = this.mad_1;
            this.oad_1 = this.nad_1;
            this.m9_1 = 6;
            suspendResult = this.oad_1.e6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new VerificationMethodConfiguration(ARGUMENT);
            this.kad_1.n(ARGUMENT_0);
            this.m9_1 = 5;
            continue $sm;
          case 7:
            var ARGUMENT_1 = this.kad_1;
            var ARGUMENT_2 = toSet(ARGUMENT_1);
            this.aad_1.n2(this.cad_1, ARGUMENT_2);
            this.m9_1 = 4;
            continue $sm;
          case 8:
            this.pac_1 = this.aad_1;
            this.m9_1 = 9;
            continue $sm;
          case 9:
            var tmp1_elvis_lhs = this.pac_1;
            var ARGUMENT_3 = tmp1_elvis_lhs == null ? emptyMap() : tmp1_elvis_lhs;
            return new DidDocConfig(this.xab_1, this.nac_1, ARGUMENT_3, this.zab_1, this.aac_1);
          case 10:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 10) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($buildFromPublicKeySetCOROUTINE$9)['<set-state>'] = protoOf($buildFromPublicKeySetCOROUTINE$9).t9;
  protoOf($buildFromPublicKeySetCOROUTINE$9)['<get-state>'] = protoOf($buildFromPublicKeySetCOROUTINE$9).u9;
  protoOf($buildFromPublicKeySetCOROUTINE$9)['<set-exceptionState>'] = protoOf($buildFromPublicKeySetCOROUTINE$9).v9;
  protoOf($buildFromPublicKeySetCOROUTINE$9)['<get-exceptionState>'] = protoOf($buildFromPublicKeySetCOROUTINE$9).w9;
  protoOf($buildFromPublicKeySetCOROUTINE$9)['<set-result>'] = protoOf($buildFromPublicKeySetCOROUTINE$9).x9;
  protoOf($buildFromPublicKeySetCOROUTINE$9)['<get-result>'] = protoOf($buildFromPublicKeySetCOROUTINE$9).y9;
  protoOf($buildFromPublicKeySetCOROUTINE$9)['<set-exception>'] = protoOf($buildFromPublicKeySetCOROUTINE$9).z9;
  protoOf($buildFromPublicKeySetCOROUTINE$9)['<get-exception>'] = protoOf($buildFromPublicKeySetCOROUTINE$9).aa;
  protoOf($buildFromPublicKeySetCOROUTINE$9)['<set-finallyPath>'] = protoOf($buildFromPublicKeySetCOROUTINE$9).ba;
  protoOf($buildFromPublicKeySetCOROUTINE$9)['<get-finallyPath>'] = protoOf($buildFromPublicKeySetCOROUTINE$9).ca;
  protoOf($buildFromPublicKeySetCOROUTINE$9)['<get-context>'] = protoOf($buildFromPublicKeySetCOROUTINE$9).s9;
  function $buildFromPublicKeySetVerificationConfigurationCOROUTINE$10(_this__u8e3s4, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xad_1 = _this__u8e3s4;
    this.yad_1 = context;
    this.zad_1 = verificationKeySetConfiguration;
    this.aae_1 = serviceConfigurationSet;
    this.bae_1 = rootCustomProperties;
  }
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 9;
            var tmp_0 = this;
            tmp_0.cae_1 = flatten(this.zad_1.m2());
            this.dae_1 = this.cae_1;
            this.eae_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.dae_1, 10)), 16);
            var tmp_1 = this;
            tmp_1.fae_1 = this.dae_1;
            var tmp_2 = this;
            tmp_2.gae_1 = LinkedHashMap_init_$Create$_0(this.eae_1);
            this.hae_1 = this.fae_1;
            this.iae_1 = this.gae_1;
            this.jae_1 = this.hae_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.jae_1.q()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.kae_1 = this.jae_1.r();
            var tmp_3 = this;
            tmp_3.lae_1 = this.kae_1;
            this.mae_1 = this.lae_1;
            this.m9_1 = 2;
            suspendResult = this.mae_1.e6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.nae_1 = suspendResult;
            this.iae_1.n2(this.nae_1, this.kae_1);
            this.m9_1 = 1;
            continue $sm;
          case 3:
            this.oae_1 = this.iae_1;
            this.pae_1 = this.oae_1;
            var tmp_4 = this;
            tmp_4.qae_1 = this.pae_1;
            this.rae_1 = this.qae_1;
            var tmp_5 = this;
            var tmp0 = this.zad_1.x();
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              if (!element.z().h()) {
                destination.n(element);
              }
            }

            tmp_5.sae_1 = destination;
            this.tae_1 = this.sae_1;
            this.uae_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.tae_1, 10)), 16);
            var tmp_6 = this;
            tmp_6.vae_1 = this.tae_1;
            var tmp_7 = this;
            tmp_7.wae_1 = LinkedHashMap_init_$Create$_0(this.uae_1);
            this.xae_1 = this.vae_1;
            this.yae_1 = this.wae_1;
            this.zae_1 = this.xae_1.p();
            this.m9_1 = 4;
            continue $sm;
          case 4:
            if (!this.zae_1.q()) {
              this.m9_1 = 8;
              continue $sm;
            }

            this.aaf_1 = this.zae_1.r();
            var tmp_8 = this;
            tmp_8.baf_1 = this.yae_1;
            var tmp_9 = this;
            tmp_9.caf_1 = this.aaf_1;
            this.daf_1 = this.caf_1;
            var tmp_10 = this;
            tmp_10.eaf_1 = this.daf_1.y();
            var tmp_11 = this;
            tmp_11.faf_1 = this.daf_1.z();
            var tmp_12 = this;
            tmp_12.gaf_1 = this.faf_1;
            this.haf_1 = this.gaf_1;
            var tmp_13 = this;
            tmp_13.iaf_1 = this.haf_1;
            var tmp_14 = this;
            tmp_14.jaf_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.haf_1, 10));
            this.kaf_1 = this.iaf_1;
            this.laf_1 = this.jaf_1;
            this.maf_1 = this.kaf_1.p();
            this.m9_1 = 5;
            continue $sm;
          case 5:
            if (!this.maf_1.q()) {
              this.m9_1 = 7;
              continue $sm;
            }

            this.naf_1 = this.maf_1.r();
            var tmp_15 = this;
            tmp_15.oaf_1 = this.naf_1;
            this.paf_1 = this.oaf_1;
            this.m9_1 = 6;
            suspendResult = this.paf_1.e6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new VerificationMethodConfiguration(ARGUMENT);
            this.laf_1.n(ARGUMENT_0);
            this.m9_1 = 5;
            continue $sm;
          case 7:
            var ARGUMENT_1 = this.laf_1;
            var ARGUMENT_2 = toSet(ARGUMENT_1);
            var tmp1 = to(this.eaf_1, ARGUMENT_2);
            this.baf_1.n2(tmp1.bc_1, tmp1.cc_1);
            this.m9_1 = 4;
            continue $sm;
          case 8:
            var ARGUMENT_3 = this.yae_1;
            return new DidDocConfig(this.yad_1, this.rae_1, ARGUMENT_3, this.aae_1, this.bae_1);
          case 9:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 9) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10)['<set-state>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).t9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10)['<get-state>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).u9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10)['<set-exceptionState>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).v9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10)['<get-exceptionState>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).w9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10)['<set-result>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).x9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10)['<get-result>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).y9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10)['<set-exception>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).z9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10)['<get-exception>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).aa;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10)['<set-finallyPath>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).ba;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10)['<get-finallyPath>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).ca;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10)['<get-context>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$10).s9;
  function Companion_23() {
    Companion_instance_29 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_5 = lazy(tmp_4, DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_1);
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_7 = lazy(tmp_6, DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_2);
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.yaa_1 = [tmp_1, tmp_3, tmp_5, tmp_7, lazy(tmp_8, DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_3)];
    var tmp_9 = this;
    var tmp_10 = listOf(['context', 'id', 'verificationMethod', 'service']);
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_entries_1();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$3 = item.toString();
      destination.n(tmp$ret$3);
    }
    tmp_9.zaa_1 = plus(tmp_10, destination);
  }
  protoOf(Companion_23).nab = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion) {
    var tmp = new $buildFromPublicKeySetCOROUTINE$9(this, context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Companion_23).buildFromPublicKeySet$default = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    publicKeySet = publicKeySet === VOID ? emptySet() : publicKeySet;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.nab(context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion) : $super.nab.call(this, context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion);
  };
  protoOf(Companion_23).aab = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion) {
    var tmp = new $buildFromPublicKeySetVerificationConfigurationCOROUTINE$10(this, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Companion_23).buildFromPublicKeySetVerificationConfiguration$default = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    verificationKeySetConfiguration = verificationKeySetConfiguration === VOID ? emptyMap() : verificationKeySetConfiguration;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.aab(context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion) : $super.aab.call(this, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion);
  };
  protoOf(Companion_23).qaf = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties) {
    var tmp = DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda_0(context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_23).buildFromPublicKeySetVerificationConfigurationAsync$default = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    verificationKeySetConfiguration = verificationKeySetConfiguration === VOID ? emptyMap() : verificationKeySetConfiguration;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.qaf(context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties) : $super.qaf.call(this, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties);
  };
  protoOf(Companion_23).raf = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties) {
    var tmp = DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda_0(context, publicKeySet, serviceConfigurationSet, rootCustomProperties, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_23).buildFromPublicKeySetAsync$default = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    publicKeySet = publicKeySet === VOID ? emptySet() : publicKeySet;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.raf(context, publicKeySet, serviceConfigurationSet, rootCustomProperties) : $super.raf.call(this, context, publicKeySet, serviceConfigurationSet, rootCustomProperties);
  };
  protoOf(Companion_23).y4r = function () {
    return $serializer_getInstance_12();
  };
  var Companion_instance_29;
  function Companion_getInstance_25() {
    if (Companion_instance_29 == null)
      new Companion_23();
    return Companion_instance_29;
  }
  function validateRootCustomProperties($this) {
    var tmp0_safe_receiver = $this.rootCustomProperties;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp0_safe_receiver.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.require' call
        if (!!Companion_getInstance_25().zaa_1.x1(element.y())) {
          var message = 'Invalid attempt to override reserved root did document property with key ' + element.y() + ' via rootCustomProperties map';
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function validatePublicKeyMap($this) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.publicKeyMap.m2().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.require' call
      if (!!element.hasPrivateKey) {
        var message = 'The key map must contain only public keys';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
    return Unit_instance;
  }
  function validateVerificationConfigurationMap($this) {
    // Inline function 'kotlin.takeIf' call
    var this_0 = $this.verificationConfigurationMap;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this_0.h()) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.require' call
      if (!!$this.publicKeyMap.h()) {
        var message = 'Key map cannot be empty when verification configuration map is not empty';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp0_safe_receiver.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var type = element.y();
        // Inline function 'kotlin.collections.component2' call
        var configSet = element.z();
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = configSet.p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!$this.publicKeyMap.i2(element_0.publicKeyId)) {
            var message_0 = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString_0(message_0));
          }
          var tmp0_elvis_lhs = $this.publicKeyMap.k2(element_0.publicKeyId);
          var tmp_1;
          if (tmp0_elvis_lhs == null) {
            throw IllegalArgumentException_init_$Create$('Key ID ' + element_0.publicKeyId + ' is missing from key map but is defined ' + ('in verification configuration ' + element_0.toString() + ' of type ' + type.toString()));
          } else {
            tmp_1 = tmp0_elvis_lhs;
          }
          var key = tmp_1;
          if (type.equals(VerificationRelationshipType_KeyAgreement_getInstance())) {
            // Inline function 'kotlin.require' call
            if (!!key.keyType.equals(KeyType_Ed25519_getInstance())) {
              var message_1 = 'Invalid key type ' + key.keyType.toString() + ' specified for keyAgreement property.';
              throw IllegalArgumentException_init_$Create$(toString_0(message_1));
            }
          }
        }
      }
      tmp_0 = Unit_instance;
    }
    return tmp_0;
  }
  function createVerificationMethodSet($this, did, $completion) {
    var tmp = new $createVerificationMethodSetCOROUTINE$12($this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function createVerificationRelationshipMap($this, did) {
    // Inline function 'kotlin.collections.associate' call
    var this_0 = $this.verificationConfigurationMap.x();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var verRelType = element.y();
      // Inline function 'kotlin.collections.component2' call
      var verConfSet = element.z();
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(verConfSet, 10));
      var _iterator__ex2g4s_0 = verConfSet.p();
      while (_iterator__ex2g4s_0.q()) {
        var item = _iterator__ex2g4s_0.r();
        var tmp$ret$2 = Builder_instance.buildFromId(did + '#' + item.publicKeyId);
        destination_0.n(tmp$ret$2);
      }
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(verRelType, toSet(destination_0));
      destination.n2(pair.bc_1, pair.cc_1);
    }
    return destination;
  }
  function createService($this, did) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.serviceConfigurationSet;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = new ServiceMap(did + '#' + UuidUtils_instance.e9a(), setOf(item.type), item.serviceEndpoint, item.customProperties);
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.let' call
    var it = toSet(destination);
    return new Service(it);
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.dids.DidDocConfig', this, 5);
    tmp0_serialDesc.j29('context', true);
    tmp0_serialDesc.j29('publicKeyMap', true);
    tmp0_serialDesc.j29('verificationConfigurationMap', true);
    tmp0_serialDesc.j29('serviceConfigurationSet', true);
    tmp0_serialDesc.j29('rootCustomProperties', true);
    this.qag_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).rag = function (encoder, value) {
    var tmp0_desc = this.qag_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().yaa_1;
    if (tmp1_output.q23(tmp0_desc, 0) ? true : !equals_0(value.context, DidUtils_getInstance().DEFAULT_CONTEXT)) {
      tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    }
    if (tmp1_output.q23(tmp0_desc, 1) ? true : !equals_0(value.publicKeyMap, emptyMap())) {
      tmp1_output.k23(tmp0_desc, 1, tmp2_cached[1].z(), value.publicKeyMap);
    }
    if (tmp1_output.q23(tmp0_desc, 2) ? true : !equals_0(value.verificationConfigurationMap, emptyMap())) {
      tmp1_output.k23(tmp0_desc, 2, tmp2_cached[2].z(), value.verificationConfigurationMap);
    }
    if (tmp1_output.q23(tmp0_desc, 3) ? true : !equals_0(value.serviceConfigurationSet, emptySet())) {
      tmp1_output.k23(tmp0_desc, 3, tmp2_cached[3].z(), value.serviceConfigurationSet);
    }
    if (tmp1_output.q23(tmp0_desc, 4) ? true : !(value.rootCustomProperties == null)) {
      tmp1_output.m23(tmp0_desc, 4, tmp2_cached[4].z(), value.rootCustomProperties);
    }
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_12).h1y = function (encoder, value) {
    return this.rag(encoder, value instanceof DidDocConfig ? value : THROW_CCE());
  };
  protoOf($serializer_12).i1y = function (decoder) {
    var tmp0_desc = this.qag_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.t21(tmp0_desc);
    var tmp10_cached = Companion_getInstance_25().yaa_1;
    if (tmp9_input.j22()) {
      tmp4_local0 = tmp9_input.f22(tmp0_desc, 0, tmp10_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.f22(tmp0_desc, 1, tmp10_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.f22(tmp0_desc, 2, tmp10_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.f22(tmp0_desc, 3, tmp10_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.h22(tmp0_desc, 4, tmp10_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.f22(tmp0_desc, 0, tmp10_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.f22(tmp0_desc, 1, tmp10_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.f22(tmp0_desc, 2, tmp10_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.f22(tmp0_desc, 3, tmp10_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.h22(tmp0_desc, 4, tmp10_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.u21(tmp0_desc);
    return DidDocConfig_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_12).g1y = function () {
    return this.qag_1;
  };
  protoOf($serializer_12).y29 = function () {
    var tmp0_cached = Companion_getInstance_25().yaa_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].z(), tmp0_cached[1].z(), tmp0_cached[2].z(), tmp0_cached[3].z(), get_nullable(tmp0_cached[4].z())];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function DidDocConfig_init_$Init$(seen0, context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().qag_1);
    }
    if (0 === (seen0 & 1))
      $this.context = DidUtils_getInstance().DEFAULT_CONTEXT;
    else
      $this.context = context;
    if (0 === (seen0 & 2))
      $this.publicKeyMap = emptyMap();
    else
      $this.publicKeyMap = publicKeyMap;
    if (0 === (seen0 & 4))
      $this.verificationConfigurationMap = emptyMap();
    else
      $this.verificationConfigurationMap = verificationConfigurationMap;
    if (0 === (seen0 & 8))
      $this.serviceConfigurationSet = emptySet();
    else
      $this.serviceConfigurationSet = serviceConfigurationSet;
    if (0 === (seen0 & 16))
      $this.rootCustomProperties = null;
    else
      $this.rootCustomProperties = rootCustomProperties;
    validateRootCustomProperties($this);
    validatePublicKeyMap($this);
    validateVerificationConfigurationMap($this);
    return $this;
  }
  function DidDocConfig_init_$Create$(seen0, context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties, serializationConstructorMarker) {
    return DidDocConfig_init_$Init$(seen0, context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties, serializationConstructorMarker, objectCreate(protoOf(DidDocConfig)));
  }
  function DidDocConfig$toDidDocumentAsync$slambda(this$0, $did, resultContinuation) {
    this.aah_1 = this$0;
    this.bah_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidDocConfig$toDidDocumentAsync$slambda).cah = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidDocConfig$toDidDocumentAsync$slambda).zb = function ($completion) {
    return this.cah($completion);
  };
  protoOf(DidDocConfig$toDidDocumentAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.aah_1.dah(this.bah_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidDocConfig$toDidDocumentAsync$slambda).ia = function (completion) {
    return new DidDocConfig$toDidDocumentAsync$slambda(this.aah_1, this.bah_1, completion);
  };
  function DidDocConfig$toDidDocumentAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidDocConfig$toDidDocumentAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.cah($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $toDidDocumentCOROUTINE$11(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mah_1 = _this__u8e3s4;
    this.nah_1 = did;
  }
  protoOf($toDidDocumentCOROUTINE$11).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            var tmp_0 = this;
            tmp_0.oah_1 = LinkedHashMap_init_$Create$();
            this.pah_1 = this.oah_1;
            var tmp_1 = this;
            tmp_1.qah_1 = this.pah_1;
            this.rah_1 = this.qah_1;
            var tmp0 = Default_getInstance();
            var value = this.mah_1.context;
            var this_0 = tmp0.i22();
            var this_1 = serializer(this_0, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false))]), false));
            this.rah_1.n2('context', tmp0.r4p(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), value));
            var tmp2 = Default_getInstance();
            var value_0 = this.nah_1;
            var this_2 = tmp2.i22();
            var this_3 = serializer(this_2, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
            this.rah_1.n2('id', tmp2.r4p(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), value_0));
            this.m9_1 = 1;
            suspendResult = createVerificationMethodSet(this.mah_1, this.nah_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_4 = suspendResult;
            var tmp_2;
            if (!this_4.h()) {
              tmp_2 = this_4;
            } else {
              tmp_2 = null;
            }

            var tmp0_safe_receiver = tmp_2;
            if (tmp0_safe_receiver == null)
              null;
            else {
              var this_5 = Default_getInstance();
              var this_6 = this_5.i22();
              var this_7 = serializer(this_6, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(VerificationMethod_4), arrayOf([]), false))]), false));
              this.rah_1.n2('verificationMethod', this_5.r4p(isInterface(this_7, KSerializer) ? this_7 : THROW_CCE(), tmp0_safe_receiver));
              var _iterator__ex2g4s = createVerificationRelationshipMap(this.mah_1, this.nah_1).x().p();
              while (_iterator__ex2g4s.q()) {
                var element = _iterator__ex2g4s.r();
                var verRelType = element.y();
                var verRelValue = element.z();
                var tmp_3 = verRelType.toString();
                var this_8 = Default_getInstance();
                var this_9 = this_8.i22();
                var this_10 = serializer(this_9, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(VerificationRelationship), arrayOf([]), false))]), false));
                this.rah_1.n2(tmp_3, this_8.r4p(isInterface(this_10, KSerializer) ? this_10 : THROW_CCE(), verRelValue));
              }
            }

            var this_11 = createService(this.mah_1, this.nah_1);
            var tmp_4;
            if (!this_11.serviceMaps.h()) {
              tmp_4 = this_11;
            } else {
              tmp_4 = null;
            }

            var tmp1_safe_receiver = tmp_4;
            if (tmp1_safe_receiver == null)
              null;
            else {
              var this_12 = Default_getInstance();
              var this_13 = this_12.i22();
              var this_14 = serializer(this_13, createKType(getKClass(Service), arrayOf([]), false));
              this.rah_1.n2('service', this_12.r4p(isInterface(this_14, KSerializer) ? this_14 : THROW_CCE(), tmp1_safe_receiver));
            }

            var tmp2_safe_receiver = this.mah_1.rootCustomProperties;
            if (tmp2_safe_receiver == null)
              null;
            else {
              var _iterator__ex2g4s_0 = tmp2_safe_receiver.x().p();
              while (_iterator__ex2g4s_0.q()) {
                var element_0 = _iterator__ex2g4s_0.r();
                this.rah_1.n2(element_0.y(), element_0.z());
              }
            }

            var ARGUMENT = this.pah_1;
            var ARGUMENT_0 = ARGUMENT.v3();
            return new DidDocument(ARGUMENT_0);
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($toDidDocumentCOROUTINE$11)['<set-state>'] = protoOf($toDidDocumentCOROUTINE$11).t9;
  protoOf($toDidDocumentCOROUTINE$11)['<get-state>'] = protoOf($toDidDocumentCOROUTINE$11).u9;
  protoOf($toDidDocumentCOROUTINE$11)['<set-exceptionState>'] = protoOf($toDidDocumentCOROUTINE$11).v9;
  protoOf($toDidDocumentCOROUTINE$11)['<get-exceptionState>'] = protoOf($toDidDocumentCOROUTINE$11).w9;
  protoOf($toDidDocumentCOROUTINE$11)['<set-result>'] = protoOf($toDidDocumentCOROUTINE$11).x9;
  protoOf($toDidDocumentCOROUTINE$11)['<get-result>'] = protoOf($toDidDocumentCOROUTINE$11).y9;
  protoOf($toDidDocumentCOROUTINE$11)['<set-exception>'] = protoOf($toDidDocumentCOROUTINE$11).z9;
  protoOf($toDidDocumentCOROUTINE$11)['<get-exception>'] = protoOf($toDidDocumentCOROUTINE$11).aa;
  protoOf($toDidDocumentCOROUTINE$11)['<set-finallyPath>'] = protoOf($toDidDocumentCOROUTINE$11).ba;
  protoOf($toDidDocumentCOROUTINE$11)['<get-finallyPath>'] = protoOf($toDidDocumentCOROUTINE$11).ca;
  protoOf($toDidDocumentCOROUTINE$11)['<get-context>'] = protoOf($toDidDocumentCOROUTINE$11).s9;
  function $createVerificationMethodSetCOROUTINE$12(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.aag_1 = _this__u8e3s4;
    this.bag_1 = did;
  }
  protoOf($createVerificationMethodSetCOROUTINE$12).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            tmp_0.cag_1 = flatten(this.aag_1.verificationConfigurationMap.m2());
            this.dag_1 = this.cag_1;
            var tmp_1 = this;
            tmp_1.eag_1 = this.dag_1;
            var tmp_2 = this;
            tmp_2.fag_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.dag_1, 10));
            this.gag_1 = this.eag_1;
            this.hag_1 = this.fag_1;
            this.iag_1 = this.gag_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.iag_1.q()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.jag_1 = this.iag_1.r();
            var tmp_3 = this;
            tmp_3.kag_1 = this.jag_1;
            this.lag_1 = this.kag_1;
            var tmp_4 = this;
            var tmp0_elvis_lhs = this.aag_1.publicKeyMap.k2(this.lag_1.publicKeyId);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('This exception should never happen, we have already checked that all verification keys exist in the key map');
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }

            tmp_4.mag_1 = tmp_5;
            this.nag_1 = this.bag_1 + '#' + this.lag_1.publicKeyId;
            this.oag_1 = VerificationMethodType_JsonWebKey2020_getInstance();
            this.pag_1 = VerificationMaterialType_PublicKeyJwk_getInstance();
            this.m9_1 = 2;
            suspendResult = this.mag_1.v6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = to(this.pag_1, ARGUMENT);
            var ARGUMENT_1 = new VerificationMethod_4(this.nag_1, this.oag_1, ARGUMENT_0, this.bag_1, this.lag_1.customProperties);
            this.hag_1.n(ARGUMENT_1);
            this.m9_1 = 1;
            continue $sm;
          case 3:
            var ARGUMENT_2 = this.hag_1;
            return toSet(ARGUMENT_2);
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function DidDocConfig(context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties) {
    Companion_getInstance_25();
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    publicKeyMap = publicKeyMap === VOID ? emptyMap() : publicKeyMap;
    verificationConfigurationMap = verificationConfigurationMap === VOID ? emptyMap() : verificationConfigurationMap;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    this.context = context;
    this.publicKeyMap = publicKeyMap;
    this.verificationConfigurationMap = verificationConfigurationMap;
    this.serviceConfigurationSet = serviceConfigurationSet;
    this.rootCustomProperties = rootCustomProperties;
    validateRootCustomProperties(this);
    validatePublicKeyMap(this);
    validateVerificationConfigurationMap(this);
  }
  protoOf(DidDocConfig).s9 = function () {
    return this.context;
  };
  protoOf(DidDocConfig).sah = function () {
    return this.publicKeyMap;
  };
  protoOf(DidDocConfig).tah = function () {
    return this.verificationConfigurationMap;
  };
  protoOf(DidDocConfig).uah = function () {
    return this.serviceConfigurationSet;
  };
  protoOf(DidDocConfig).vah = function () {
    return this.rootCustomProperties;
  };
  protoOf(DidDocConfig).dah = function (did, $completion) {
    var tmp = new $toDidDocumentCOROUTINE$11(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidDocConfig).wah = function (did) {
    var tmp = DidDocConfig$toDidDocumentAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidDocConfig).dc = function () {
    return this.context;
  };
  protoOf(DidDocConfig).ec = function () {
    return this.publicKeyMap;
  };
  protoOf(DidDocConfig).dp = function () {
    return this.verificationConfigurationMap;
  };
  protoOf(DidDocConfig).q6x = function () {
    return this.serviceConfigurationSet;
  };
  protoOf(DidDocConfig).x7h = function () {
    return this.rootCustomProperties;
  };
  protoOf(DidDocConfig).xah = function (context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties) {
    return new DidDocConfig(context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties);
  };
  protoOf(DidDocConfig).copy = function (context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties, $super) {
    context = context === VOID ? this.context : context;
    publicKeyMap = publicKeyMap === VOID ? this.publicKeyMap : publicKeyMap;
    verificationConfigurationMap = verificationConfigurationMap === VOID ? this.verificationConfigurationMap : verificationConfigurationMap;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? this.serviceConfigurationSet : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? this.rootCustomProperties : rootCustomProperties;
    return $super === VOID ? this.xah(context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties) : $super.xah.call(this, context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties);
  };
  protoOf(DidDocConfig).toString = function () {
    return 'DidDocConfig(context=' + toString_0(this.context) + ', publicKeyMap=' + toString_0(this.publicKeyMap) + ', verificationConfigurationMap=' + toString_0(this.verificationConfigurationMap) + ', serviceConfigurationSet=' + toString_0(this.serviceConfigurationSet) + ', rootCustomProperties=' + toString(this.rootCustomProperties) + ')';
  };
  protoOf(DidDocConfig).hashCode = function () {
    var result = hashCode(this.context);
    result = imul(result, 31) + hashCode(this.publicKeyMap) | 0;
    result = imul(result, 31) + hashCode(this.verificationConfigurationMap) | 0;
    result = imul(result, 31) + hashCode(this.serviceConfigurationSet) | 0;
    result = imul(result, 31) + (this.rootCustomProperties == null ? 0 : hashCode(this.rootCustomProperties)) | 0;
    return result;
  };
  protoOf(DidDocConfig).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DidDocConfig))
      return false;
    var tmp0_other_with_cast = other instanceof DidDocConfig ? other : THROW_CCE();
    if (!equals_0(this.context, tmp0_other_with_cast.context))
      return false;
    if (!equals_0(this.publicKeyMap, tmp0_other_with_cast.publicKeyMap))
      return false;
    if (!equals_0(this.verificationConfigurationMap, tmp0_other_with_cast.verificationConfigurationMap))
      return false;
    if (!equals_0(this.serviceConfigurationSet, tmp0_other_with_cast.serviceConfigurationSet))
      return false;
    if (!equals_0(this.rootCustomProperties, tmp0_other_with_cast.rootCustomProperties))
      return false;
    return true;
  };
  function VerificationMethodConfiguration$Companion$$childSerializers$_anonymous__2j3qxc() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function Companion_24() {
    Companion_instance_30 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.yah_1 = [null, lazy(tmp_0, VerificationMethodConfiguration$Companion$$childSerializers$_anonymous__2j3qxc)];
  }
  protoOf(Companion_24).y4r = function () {
    return $serializer_getInstance_13();
  };
  var Companion_instance_30;
  function Companion_getInstance_26() {
    if (Companion_instance_30 == null)
      new Companion_24();
    return Companion_instance_30;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.dids.VerificationMethodConfiguration', this, 2);
    tmp0_serialDesc.j29('publicKeyId', false);
    tmp0_serialDesc.j29('customProperties', true);
    this.zah_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).aai = function (encoder, value) {
    var tmp0_desc = this.zah_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().yah_1;
    tmp1_output.i23(tmp0_desc, 0, value.publicKeyId);
    if (tmp1_output.q23(tmp0_desc, 1) ? true : !(value.customProperties == null)) {
      tmp1_output.m23(tmp0_desc, 1, tmp2_cached[1].z(), value.customProperties);
    }
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_13).h1y = function (encoder, value) {
    return this.aai(encoder, value instanceof VerificationMethodConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_13).i1y = function (decoder) {
    var tmp0_desc = this.zah_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.t21(tmp0_desc);
    var tmp7_cached = Companion_getInstance_26().yah_1;
    if (tmp6_input.j22()) {
      tmp4_local0 = tmp6_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.h22(tmp0_desc, 1, tmp7_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.h22(tmp0_desc, 1, tmp7_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.u21(tmp0_desc);
    return VerificationMethodConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_13).g1y = function () {
    return this.zah_1;
  };
  protoOf($serializer_13).y29 = function () {
    var tmp0_cached = Companion_getInstance_26().yah_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(tmp0_cached[1].z())];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function VerificationMethodConfiguration_init_$Init$(seen0, publicKeyId, customProperties, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_13().zah_1);
    }
    $this.publicKeyId = publicKeyId;
    if (0 === (seen0 & 2))
      $this.customProperties = null;
    else
      $this.customProperties = customProperties;
    return $this;
  }
  function VerificationMethodConfiguration_init_$Create$(seen0, publicKeyId, customProperties, serializationConstructorMarker) {
    return VerificationMethodConfiguration_init_$Init$(seen0, publicKeyId, customProperties, serializationConstructorMarker, objectCreate(protoOf(VerificationMethodConfiguration)));
  }
  function VerificationMethodConfiguration(publicKeyId, customProperties) {
    Companion_getInstance_26();
    customProperties = customProperties === VOID ? null : customProperties;
    this.publicKeyId = publicKeyId;
    this.customProperties = customProperties;
  }
  protoOf(VerificationMethodConfiguration).bai = function () {
    return this.publicKeyId;
  };
  protoOf(VerificationMethodConfiguration).y9z = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethodConfiguration).dc = function () {
    return this.publicKeyId;
  };
  protoOf(VerificationMethodConfiguration).ec = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethodConfiguration).cai = function (publicKeyId, customProperties) {
    return new VerificationMethodConfiguration(publicKeyId, customProperties);
  };
  protoOf(VerificationMethodConfiguration).copy = function (publicKeyId, customProperties, $super) {
    publicKeyId = publicKeyId === VOID ? this.publicKeyId : publicKeyId;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.cai(publicKeyId, customProperties) : $super.cai.call(this, publicKeyId, customProperties);
  };
  protoOf(VerificationMethodConfiguration).toString = function () {
    return 'VerificationMethodConfiguration(publicKeyId=' + this.publicKeyId + ', customProperties=' + toString(this.customProperties) + ')';
  };
  protoOf(VerificationMethodConfiguration).hashCode = function () {
    var result = getStringHashCode(this.publicKeyId);
    result = imul(result, 31) + (this.customProperties == null ? 0 : hashCode(this.customProperties)) | 0;
    return result;
  };
  protoOf(VerificationMethodConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerificationMethodConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof VerificationMethodConfiguration ? other : THROW_CCE();
    if (!(this.publicKeyId === tmp0_other_with_cast.publicKeyId))
      return false;
    if (!equals_0(this.customProperties, tmp0_other_with_cast.customProperties))
      return false;
    return true;
  };
  function ServiceConfiguration$Companion$$childSerializers$_anonymous__9c7hg7() {
    return new LinkedHashSetSerializer(ServiceEndpointBaseSerializer_getInstance());
  }
  function ServiceConfiguration$Companion$$childSerializers$_anonymous__9c7hg7_0() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function Companion_25() {
    Companion_instance_31 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, ServiceConfiguration$Companion$$childSerializers$_anonymous__9c7hg7);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.dai_1 = [null, tmp_1, lazy(tmp_2, ServiceConfiguration$Companion$$childSerializers$_anonymous__9c7hg7_0)];
  }
  protoOf(Companion_25).y4r = function () {
    return $serializer_getInstance_14();
  };
  var Companion_instance_31;
  function Companion_getInstance_27() {
    if (Companion_instance_31 == null)
      new Companion_25();
    return Companion_instance_31;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.dids.ServiceConfiguration', this, 3);
    tmp0_serialDesc.j29('type', false);
    tmp0_serialDesc.j29('serviceEndpoint', false);
    tmp0_serialDesc.j29('customProperties', true);
    this.eai_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).fai = function (encoder, value) {
    var tmp0_desc = this.eai_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().dai_1;
    tmp1_output.i23(tmp0_desc, 0, value.type);
    tmp1_output.k23(tmp0_desc, 1, tmp2_cached[1].z(), value.serviceEndpoint);
    if (tmp1_output.q23(tmp0_desc, 2) ? true : !(value.customProperties == null)) {
      tmp1_output.m23(tmp0_desc, 2, tmp2_cached[2].z(), value.customProperties);
    }
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_14).h1y = function (encoder, value) {
    return this.fai(encoder, value instanceof ServiceConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_14).i1y = function (decoder) {
    var tmp0_desc = this.eai_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.t21(tmp0_desc);
    var tmp8_cached = Companion_getInstance_27().dai_1;
    if (tmp7_input.j22()) {
      tmp4_local0 = tmp7_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.f22(tmp0_desc, 1, tmp8_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.h22(tmp0_desc, 2, tmp8_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.f22(tmp0_desc, 1, tmp8_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.h22(tmp0_desc, 2, tmp8_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.u21(tmp0_desc);
    return ServiceConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_14).g1y = function () {
    return this.eai_1;
  };
  protoOf($serializer_14).y29 = function () {
    var tmp0_cached = Companion_getInstance_27().dai_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].z(), get_nullable(tmp0_cached[2].z())];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function ServiceConfiguration_init_$Init$(seen0, type, serviceEndpoint, customProperties, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_14().eai_1);
    }
    $this.type = type;
    $this.serviceEndpoint = serviceEndpoint;
    if (0 === (seen0 & 4))
      $this.customProperties = null;
    else
      $this.customProperties = customProperties;
    return $this;
  }
  function ServiceConfiguration_init_$Create$(seen0, type, serviceEndpoint, customProperties, serializationConstructorMarker) {
    return ServiceConfiguration_init_$Init$(seen0, type, serviceEndpoint, customProperties, serializationConstructorMarker, objectCreate(protoOf(ServiceConfiguration)));
  }
  function ServiceConfiguration(type, serviceEndpoint, customProperties) {
    Companion_getInstance_27();
    customProperties = customProperties === VOID ? null : customProperties;
    this.type = type;
    this.serviceEndpoint = serviceEndpoint;
    this.customProperties = customProperties;
  }
  protoOf(ServiceConfiguration).z9x = function () {
    return this.type;
  };
  protoOf(ServiceConfiguration).x9z = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceConfiguration).y9z = function () {
    return this.customProperties;
  };
  protoOf(ServiceConfiguration).dc = function () {
    return this.type;
  };
  protoOf(ServiceConfiguration).ec = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceConfiguration).dp = function () {
    return this.customProperties;
  };
  protoOf(ServiceConfiguration).gai = function (type, serviceEndpoint, customProperties) {
    return new ServiceConfiguration(type, serviceEndpoint, customProperties);
  };
  protoOf(ServiceConfiguration).copy = function (type, serviceEndpoint, customProperties, $super) {
    type = type === VOID ? this.type : type;
    serviceEndpoint = serviceEndpoint === VOID ? this.serviceEndpoint : serviceEndpoint;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.gai(type, serviceEndpoint, customProperties) : $super.gai.call(this, type, serviceEndpoint, customProperties);
  };
  protoOf(ServiceConfiguration).toString = function () {
    return 'ServiceConfiguration(type=' + this.type + ', serviceEndpoint=' + toString_0(this.serviceEndpoint) + ', customProperties=' + toString(this.customProperties) + ')';
  };
  protoOf(ServiceConfiguration).hashCode = function () {
    var result = getStringHashCode(this.type);
    result = imul(result, 31) + hashCode(this.serviceEndpoint) | 0;
    result = imul(result, 31) + (this.customProperties == null ? 0 : hashCode(this.customProperties)) | 0;
    return result;
  };
  protoOf(ServiceConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ServiceConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof ServiceConfiguration ? other : THROW_CCE();
    if (!(this.type === tmp0_other_with_cast.type))
      return false;
    if (!equals_0(this.serviceEndpoint, tmp0_other_with_cast.serviceEndpoint))
      return false;
    if (!equals_0(this.customProperties, tmp0_other_with_cast.customProperties))
      return false;
    return true;
  };
  function DidEbsiCreateOptions(version, token) {
    DidCreateOptions_init_$Init$('ebsi', didCreateConfig(mapOf(to('version', version)), mapOf(to('token', token))), VOID, this);
  }
  function DidEthrCreateOptions(network) {
    network = network === VOID ? 'goerli' : network;
    DidCreateOptions_init_$Init$('ethr', config([to('network', network)]), VOID, this);
  }
  function DidIonCreateOptions() {
    DidCreateOptions_init_$Init$('ion', emptyMap(), VOID, this);
  }
  function DidJwkCreateOptions(keyType) {
    keyType = keyType === VOID ? KeyType_Ed25519_getInstance() : keyType;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = keyType.q2_1.toLowerCase();
    DidCreateOptions_init_$Init$('jwk', config([to('keyType', tmp$ret$1)]), VOID, this);
  }
  function DidKeyCreateOptions(keyType, useJwkJcsPub) {
    keyType = keyType === VOID ? KeyType_Ed25519_getInstance() : keyType;
    useJwkJcsPub = useJwkJcsPub === VOID ? false : useJwkJcsPub;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = keyType.q2_1.toLowerCase();
    DidCreateOptions_init_$Init$('key', config([to('keyType', tmp$ret$1), to('useJwkJcsPub', useJwkJcsPub)]), VOID, this);
  }
  function DidOydCreateOptions(document) {
    DidCreateOptions_init_$Init$('oyd', mapOf(to('didDocument', document)), VOID, this);
  }
  function DidSovCreateOptions(network) {
    DidCreateOptions_init_$Init$('sov', config([to('network', network)]), VOID, this);
  }
  function DidV1CreateOptions(ledger, keyType) {
    ledger = ledger === VOID ? 'test' : ledger;
    var tmp = to('ledger', ledger);
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = keyType.q2_1.toLowerCase();
    DidCreateOptions_init_$Init$('v1', config([tmp, to('keytype', tmp$ret$1)]), VOID, this);
  }
  function DidWebCreateOptions(domain, path, keyType, didDocConfig) {
    path = path === VOID ? '' : path;
    keyType = keyType === VOID ? KeyType_Ed25519_getInstance() : keyType;
    didDocConfig = didDocConfig === VOID ? null : didDocConfig;
    DidCreateOptions_init_$Init$('web', config([to('domain', domain), to('path', path), to('keyType', keyType)]), didDocConfig, this);
  }
  function LocalRegistrarMethod$registerAsync$slambda(this$0, $options, resultContinuation) {
    this.pai_1 = this$0;
    this.qai_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrarMethod$registerAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrarMethod$registerAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(LocalRegistrarMethod$registerAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.pai_1.w9r(this.qai_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalRegistrarMethod$registerAsync$slambda).ia = function (completion) {
    return new LocalRegistrarMethod$registerAsync$slambda(this.pai_1, this.qai_1, completion);
  };
  function LocalRegistrarMethod$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new LocalRegistrarMethod$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrarMethod$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.zai_1 = this$0;
    this.aaj_1 = $key;
    this.baj_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrarMethod$registerByKeyAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrarMethod$registerByKeyAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(LocalRegistrarMethod$registerByKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.zai_1.ka5(this.aaj_1, this.baj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalRegistrarMethod$registerByKeyAsync$slambda).ia = function (completion) {
    return new LocalRegistrarMethod$registerByKeyAsync$slambda(this.zai_1, this.aaj_1, this.baj_1, completion);
  };
  function LocalRegistrarMethod$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new LocalRegistrarMethod$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrarMethod(method) {
    this.method = method;
  }
  protoOf(LocalRegistrarMethod).z3k = function () {
    return this.method;
  };
  protoOf(LocalRegistrarMethod).n9x = function (options) {
    var tmp = LocalRegistrarMethod$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrarMethod).caj = function (key, options) {
    var tmp = LocalRegistrarMethod$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function createDid($this, key, network, $completion) {
    var tmp = new $createDidCOROUTINE$15($this, key, network, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function initiateDidJob($this, url, body, $completion) {
    var tmp = new $initiateDidJobCOROUTINE$17($this, url, body, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function finalizeDidJob($this, url, jobId, verificationMethodId, signatures, $completion) {
    var tmp = new $finalizeDidJobCOROUTINE$18($this, url, jobId, verificationMethodId, signatures, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function signPayload($this, key, job, $completion) {
    var tmp = new $signPayloadCOROUTINE$19($this, key, job, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function DidCheqdRegistrar$log$lambda() {
    return Unit_instance;
  }
  function DidCheqdRegistrar$json$lambda($this$Json) {
    $this$Json.z4q_1 = get_didStateSerializationModule();
    $this$Json.k4q_1 = true;
    $this$Json.m4q_1 = true;
    $this$Json.l4q_1 = true;
    $this$Json.j4q_1 = false;
    return Unit_instance;
  }
  function DidCheqdRegistrar$client$lambda$lambda(this$0) {
    return function ($this$install) {
      json($this$install, this$0.nao_1);
      return Unit_instance;
    };
  }
  function DidCheqdRegistrar$client$lambda$lambda_0($this$install) {
    $this$install.x5d_1 = LogLevel_BODY_getInstance();
    return Unit_instance;
  }
  function DidCheqdRegistrar$client$lambda(this$0) {
    return function ($this$HttpClient) {
      var tmp = get_ContentNegotiation();
      $this$HttpClient.b3j(tmp, DidCheqdRegistrar$client$lambda$lambda(this$0));
      var tmp_0 = get_Logging();
      $this$HttpClient.b3j(tmp_0, DidCheqdRegistrar$client$lambda$lambda_0);
      return Unit_instance;
    };
  }
  function DidCheqdRegistrar$initiateDidJob$lambda($it) {
    return function () {
      return 'Try parse Job action response: ' + $it;
    };
  }
  function DidCheqdRegistrar$registerAsync$slambda(this$0, $options, resultContinuation) {
    this.xao_1 = this$0;
    this.yao_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdRegistrar$registerAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidCheqdRegistrar$registerAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidCheqdRegistrar$registerAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.xao_1.w9r(this.yao_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidCheqdRegistrar$registerAsync$slambda).ia = function (completion) {
    return new DidCheqdRegistrar$registerAsync$slambda(this.xao_1, this.yao_1, completion);
  };
  function DidCheqdRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidCheqdRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidCheqdRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.hap_1 = this$0;
    this.iap_1 = $key;
    this.jap_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdRegistrar$registerByKeyAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidCheqdRegistrar$registerByKeyAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidCheqdRegistrar$registerByKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.hap_1.ka5(this.iap_1, this.jap_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidCheqdRegistrar$registerByKeyAsync$slambda).ia = function (completion) {
    return new DidCheqdRegistrar$registerByKeyAsync$slambda(this.hap_1, this.iap_1, this.jap_1, completion);
  };
  function DidCheqdRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidCheqdRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$13(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sap_1 = _this__u8e3s4;
    this.tap_1 = options;
  }
  protoOf($registerCOROUTINE$13).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = Companion_instance_4.generate$default(KeyType_Ed25519_getInstance(), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.uap_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.sap_1.ka5(this.uap_1, this.tap_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerCOROUTINE$13)['<set-state>'] = protoOf($registerCOROUTINE$13).t9;
  protoOf($registerCOROUTINE$13)['<get-state>'] = protoOf($registerCOROUTINE$13).u9;
  protoOf($registerCOROUTINE$13)['<set-exceptionState>'] = protoOf($registerCOROUTINE$13).v9;
  protoOf($registerCOROUTINE$13)['<get-exceptionState>'] = protoOf($registerCOROUTINE$13).w9;
  protoOf($registerCOROUTINE$13)['<set-result>'] = protoOf($registerCOROUTINE$13).x9;
  protoOf($registerCOROUTINE$13)['<get-result>'] = protoOf($registerCOROUTINE$13).y9;
  protoOf($registerCOROUTINE$13)['<set-exception>'] = protoOf($registerCOROUTINE$13).z9;
  protoOf($registerCOROUTINE$13)['<get-exception>'] = protoOf($registerCOROUTINE$13).aa;
  protoOf($registerCOROUTINE$13)['<set-finallyPath>'] = protoOf($registerCOROUTINE$13).ba;
  protoOf($registerCOROUTINE$13)['<get-finallyPath>'] = protoOf($registerCOROUTINE$13).ca;
  protoOf($registerCOROUTINE$13)['<get-context>'] = protoOf($registerCOROUTINE$13).s9;
  function $registerByKeyCOROUTINE$14(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.daq_1 = _this__u8e3s4;
    this.eaq_1 = key;
    this.faq_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$14).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            var this_0 = this.faq_1;
            var tmp0_safe_receiver = get_jsonObject(this_0.config).af('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('network');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.c4s();
            var tmp_0;
            if (tmp4_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp0_subject = PrimitiveClasses_getInstance().nd();
              var tmp_1;
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().gd())) {
                tmp_1 = toBoolean(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().jd())) {
                tmp_1 = toIntOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(Long))) {
                tmp_1 = toLongOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().ld())) {
                tmp_1 = toDoubleOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(KeyType))) {
                var tmp0 = values();
                var tmp$ret$0;
                l$ret$1: do {
                  var inductionVariable = 0;
                  var last = tmp0.length;
                  while (inductionVariable < last) {
                    var element = tmp0[inductionVariable];
                    inductionVariable = inductionVariable + 1 | 0;
                    if (equals(element.q2_1, tmp4_safe_receiver, true)) {
                      tmp$ret$0 = element;
                      break l$ret$1;
                    }
                  }
                  tmp$ret$0 = null;
                }
                 while (false);
                tmp_1 = tmp$ret$0;
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().nd())) {
                tmp_1 = tmp4_safe_receiver;
              } else {
                tmp_1 = null;
              }
              var tmp_2 = tmp_1;
              tmp_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : null;
            }

            var tmp0_elvis_lhs = tmp_0;
            suspendResult = createDid(this.daq_1, this.eaq_1, tmp0_elvis_lhs == null ? 'testnet' : tmp0_elvis_lhs, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.gaq_1 = suspendResult;
            this.haq_1 = this.gaq_1;
            var tmp_3 = this;
            tmp_3.iaq_1 = this.haq_1;
            this.jaq_1 = this.iaq_1;
            this.kaq_1 = this.jaq_1.id;
            this.m9_1 = 2;
            suspendResult = this.eaq_1.v6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor(this.jaq_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var ARGUMENT_2 = new DidDocument(ARGUMENT_1);
            return new DidResult(this.kaq_1, ARGUMENT_2);
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerByKeyCOROUTINE$14)['<set-state>'] = protoOf($registerByKeyCOROUTINE$14).t9;
  protoOf($registerByKeyCOROUTINE$14)['<get-state>'] = protoOf($registerByKeyCOROUTINE$14).u9;
  protoOf($registerByKeyCOROUTINE$14)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$14).v9;
  protoOf($registerByKeyCOROUTINE$14)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$14).w9;
  protoOf($registerByKeyCOROUTINE$14)['<set-result>'] = protoOf($registerByKeyCOROUTINE$14).x9;
  protoOf($registerByKeyCOROUTINE$14)['<get-result>'] = protoOf($registerByKeyCOROUTINE$14).y9;
  protoOf($registerByKeyCOROUTINE$14)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$14).z9;
  protoOf($registerByKeyCOROUTINE$14)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$14).aa;
  protoOf($registerByKeyCOROUTINE$14)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$14).ba;
  protoOf($registerByKeyCOROUTINE$14)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$14).ca;
  protoOf($registerByKeyCOROUTINE$14)['<get-context>'] = protoOf($registerByKeyCOROUTINE$14).s9;
  function $createDidCOROUTINE$15(_this__u8e3s4, key, network, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.laj_1 = _this__u8e3s4;
    this.maj_1 = key;
    this.naj_1 = network;
  }
  protoOf($createDidCOROUTINE$15).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 8;
            var tmp_0 = this;
            tmp_0.oaj_1 = this.laj_1;
            this.paj_1 = this.oaj_1;
            var tmp_1 = this;
            tmp_1.qaj_1 = this.paj_1;
            this.raj_1 = this.qaj_1;
            if (!this.maj_1.keyType.equals(KeyType_Ed25519_getInstance()))
              throw IllegalArgumentException_init_$Create$('Key of type Ed25519 expected');
            this.m9_1 = 1;
            suspendResult = this.maj_1.t6n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.saj_1 = suspendResult;
            this.taj_1 = toHexString(this.saj_1);
            var tmp_2 = this;
            tmp_2.uaj_1 = this.laj_1.oao_1;
            var tmp_3 = this;
            tmp_3.vaj_1 = this.laj_1.iao_1 + '/' + this.laj_1.jao_1 + '/did-document' + ('?verificationMethod=' + this.laj_1.gao_1) + ('&methodSpecificIdAlgo=' + this.laj_1.hao_1) + ('&network=' + this.naj_1) + ('&publicKeyHex=' + this.taj_1);
            this.waj_1 = this.uaj_1;
            this.xaj_1 = this.vaj_1;
            var tmp_4 = this;
            tmp_4.yaj_1 = this.waj_1;
            this.zaj_1 = this.yaj_1;
            var tmp_5 = this;
            tmp_5.aak_1 = this.zaj_1;
            var tmp_6 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.xaj_1);
            tmp_6.bak_1 = this_0;
            this.cak_1 = this.aak_1;
            this.dak_1 = this.bak_1;
            this.dak_1.v3h_1 = Companion_getInstance().o2z_1;
            var tmp_7 = this;
            tmp_7.eak_1 = this.cak_1;
            var tmp_8 = this;
            tmp_8.fak_1 = this.dak_1;
            this.gak_1 = this.eak_1;
            this.hak_1 = this.fak_1;
            this.m9_1 = 2;
            suspendResult = (new HttpStatement(this.hak_1, this.gak_1)).d4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.iak_1 = suspendResult;
            this.m9_1 = 3;
            suspendResult = bodyAsText(this.iak_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.jak_1 = suspendResult;
            var tmp_9 = this;
            var tmp3 = this.laj_1.nao_1;
            var string = this.jak_1;
            var this_1 = tmp3.i22();
            var this_2 = serializer(this_1, createKType(getKClass(DidGetResponse), arrayOf([]), false));
            tmp_9.kak_1 = tmp3.k1z(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string);
            this.lak_1 = this.kak_1;
            var tmp_10 = this;
            tmp_10.mak_1 = this.lak_1;
            this.nak_1 = this.mak_1;
            this.m9_1 = 4;
            var tmp0 = this.laj_1.nao_1;
            var value = new JobCreateRequest(this.nak_1.didDoc);
            var this_3 = tmp0.i22();
            var this_4 = serializer(this_3, createKType(getKClass(JobCreateRequest), arrayOf([]), false));
            suspendResult = initiateDidJob(this.laj_1, this.laj_1.kao_1, tmp0.r4p(isInterface(this_4, KSerializer) ? this_4 : THROW_CCE(), value), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.oak_1 = suspendResult;
            this.m9_1 = 5;
            suspendResult = signPayload(this.laj_1, this.maj_1, this.oak_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.pak_1 = suspendResult;
            this.qak_1 = this.oak_1.jobId;
            if (this.qak_1 == null) {
              this.rak_1 = null;
              this.m9_1 = 7;
              continue $sm;
            } else {
              var tmp_11 = this;
              tmp_11.sak_1 = this.qak_1;
              this.tak_1 = this.sak_1;
              var tmp_12 = this;
              tmp_12.uak_1 = this.tak_1;
              this.vak_1 = this.uak_1;
              this.m9_1 = 6;
              suspendResult = finalizeDidJob(this.laj_1, this.laj_1.kao_1, this.vak_1, first_0(this.nak_1.didDoc.verificationMethod).id, this.pak_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 6:
            var ARGUMENT = suspendResult;
            var didState = ARGUMENT.didState;
            var tmp_13 = this;
            var tmp0_safe_receiver = didState instanceof FinishedDidState ? didState : null;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.didDocument;
            var tmp_14;
            if (tmp1_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Failed to finalize the did onboarding process.\nCheqd registrar returning "' + (didState instanceof FailedDidState ? didState : THROW_CCE()).description + '"');
            } else {
              tmp_14 = tmp1_elvis_lhs;
            }

            tmp_13.rak_1 = tmp_14;
            this.m9_1 = 7;
            continue $sm;
          case 7:
            var tmp1_elvis_lhs_0 = this.rak_1;
            var tmp_15;
            if (tmp1_elvis_lhs_0 == null) {
              throw Exception_init_$Create$("Initialize job didn't return any jobId.");
            } else {
              tmp_15 = tmp1_elvis_lhs_0;
            }

            return tmp_15;
          case 8:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 8) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $initiateDidJobCOROUTINE$17(_this__u8e3s4, url, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.eal_1 = _this__u8e3s4;
    this.fal_1 = url;
    this.gal_1 = body;
  }
  protoOf($initiateDidJobCOROUTINE$17).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.hal_1 = this.eal_1.oao_1;
            var tmp_1 = this;
            tmp_1.ial_1 = this.fal_1;
            this.jal_1 = this.hal_1;
            this.kal_1 = this.ial_1;
            var tmp_2 = this;
            tmp_2.lal_1 = this.jal_1;
            this.mal_1 = this.lal_1;
            var tmp_3 = this;
            tmp_3.nal_1 = this.mal_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.kal_1);
            contentType(this_0, Application_getInstance().k2t_1);
            var body = this.gal_1;
            if (body == null) {
              this_0.x3h_1 = NullBody_instance;
              var tmp_5 = getKClass(JsonElement);
              var tmp_6;
              try {
                tmp_6 = createKType(getKClass(JsonElement), arrayOf([]), false);
              } catch ($p) {
                var tmp_7;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_7 = null;
                } else {
                  throw $p;
                }
                tmp_6 = tmp_7;
              }
              this_0.q3n(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.x3h_1 = body;
                this_0.q3n(null);
              } else {
                this_0.x3h_1 = body;
                var tmp_8 = getKClass(JsonElement);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(JsonElement), arrayOf([]), false);
                } catch ($p) {
                  var tmp_10;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_10 = null;
                  } else {
                    throw $p;
                  }
                  tmp_9 = tmp_10;
                }
                this_0.q3n(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.oal_1 = this_0;
            this.pal_1 = this.nal_1;
            this.qal_1 = this.oal_1;
            this.qal_1.v3h_1 = Companion_getInstance().p2z_1;
            var tmp_11 = this;
            tmp_11.ral_1 = this.pal_1;
            var tmp_12 = this;
            tmp_12.sal_1 = this.qal_1;
            this.tal_1 = this.ral_1;
            this.ual_1 = this.sal_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.ual_1, this.tal_1)).d4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.val_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = bodyAsText(this.val_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var it = suspendResult;
            this.eal_1.fao_1.t6d(DidCheqdRegistrar$initiateDidJob$lambda(it));
            var this_1 = this.eal_1.nao_1;
            var this_2 = this_1.i22();
            var this_3 = serializer(this_2, createKType(getKClass(JobActionResponse), arrayOf([]), false));
            return this_1.k1z(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), it);
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $finalizeDidJobCOROUTINE$18(_this__u8e3s4, url, jobId, verificationMethodId, signatures, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.eam_1 = _this__u8e3s4;
    this.fam_1 = url;
    this.gam_1 = jobId;
    this.ham_1 = verificationMethodId;
    this.iam_1 = signatures;
  }
  protoOf($finalizeDidJobCOROUTINE$18).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.jam_1 = this.eam_1;
            this.kam_1 = this.jam_1;
            var tmp_1 = this;
            tmp_1.lam_1 = this.kam_1;
            this.mam_1 = this.lam_1;
            var tmp_2 = this;
            tmp_2.nam_1 = this.eam_1.oao_1;
            var tmp_3 = this;
            tmp_3.oam_1 = this.fam_1;
            this.pam_1 = this.nam_1;
            this.qam_1 = this.oam_1;
            var tmp_4 = this;
            tmp_4.ram_1 = this.pam_1;
            this.sam_1 = this.ram_1;
            var tmp_5 = this;
            tmp_5.tam_1 = this.sam_1;
            var tmp_6 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.qam_1);
            contentType(this_0, Application_getInstance().k2t_1);
            var this_1 = this.iam_1;
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
            var _iterator__ex2g4s = this_1.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(new SigningResponse(Base64Utils_getInstance().base64toBase64Url(item), VOID, this.ham_1));
            }

            var body = new JobSignRequest(this.gam_1, new Secret_0(destination));
            if (body == null) {
              this_0.x3h_1 = NullBody_instance;
              var tmp_7 = getKClass(JobSignRequest);
              var tmp_8;
              try {
                tmp_8 = createKType(getKClass(JobSignRequest), arrayOf([]), false);
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
              this_0.q3n(new TypeInfo(tmp_7, tmp_8));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.x3h_1 = body;
                this_0.q3n(null);
              } else {
                this_0.x3h_1 = body;
                var tmp_10 = getKClass(JobSignRequest);
                var tmp_11;
                try {
                  tmp_11 = createKType(getKClass(JobSignRequest), arrayOf([]), false);
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
                this_0.q3n(new TypeInfo(tmp_10, tmp_11));
              }
            }

            tmp_6.uam_1 = this_0;
            this.vam_1 = this.tam_1;
            this.wam_1 = this.uam_1;
            this.wam_1.v3h_1 = Companion_getInstance().p2z_1;
            var tmp_13 = this;
            tmp_13.xam_1 = this.vam_1;
            var tmp_14 = this;
            tmp_14.yam_1 = this.wam_1;
            this.zam_1 = this.xam_1;
            this.aan_1 = this.yam_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.aan_1, this.zam_1)).d4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ban_1 = suspendResult;
            this.can_1 = this.ban_1;
            this.m9_1 = 2;
            var tmp_15 = this.can_1.c3l();
            var tmp_16 = getKClass(JobActionResponse);
            var tmp_17;
            try {
              tmp_17 = createKType(getKClass(JobActionResponse), arrayOf([]), false);
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

            suspendResult = tmp_15.f3k(new TypeInfo(tmp_16, tmp_17), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof JobActionResponse ? suspendResult : THROW_CCE();
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $signPayloadCOROUTINE$19(_this__u8e3s4, key, job, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lan_1 = _this__u8e3s4;
    this.man_1 = key;
    this.nan_1 = job;
  }
  protoOf($signPayloadCOROUTINE$19).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            tmp_0.oan_1 = this.lan_1;
            this.pan_1 = this.oan_1;
            var tmp_1 = this;
            tmp_1.qan_1 = this.pan_1;
            this.ran_1 = this.qan_1;
            var tmp_2 = this;
            var tmp_3 = this.nan_1.didState;
            var tmp0_elvis_lhs = tmp_3 instanceof ActionDidState ? tmp_3 : null;
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              var message = 'Unexpected did state';
              throw IllegalStateException_init_$Create$(toString_0(message));
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_2.san_1 = tmp_4;
            if (!equals(this.san_1.action, 'signPayload', true)) {
              var message_0 = 'Unexpected state action: ' + this.san_1.action;
              throw IllegalStateException_init_$Create$(toString_0(message_0));
            }

            var tmp_5 = this;
            var this_0 = this.san_1.signingRequest;
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
            var _iterator__ex2g4s = this_0.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(Default_getInstance_0().nk(item.serializedPayload));
            }

            tmp_5.tan_1 = destination;
            var tmp_6 = this;
            tmp_6.uan_1 = this.tan_1;
            this.van_1 = this.uan_1;
            var tmp_7 = this;
            tmp_7.wan_1 = this.van_1;
            var tmp_8 = this;
            tmp_8.xan_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.van_1, 10));
            this.yan_1 = this.wan_1;
            this.zan_1 = this.xan_1;
            this.aao_1 = this.yan_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.aao_1.q()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.bao_1 = this.aao_1.r();
            var tmp_9 = this;
            tmp_9.cao_1 = this.bao_1;
            this.dao_1 = this.cao_1;
            this.eao_1 = Default_getInstance_0();
            this.m9_1 = 2;
            suspendResult = this.man_1.u6i(this.dao_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = isByteArray(suspendResult) ? suspendResult : THROW_CCE();
            var ARGUMENT_0 = this.eao_1.jk(ARGUMENT);
            this.zan_1.n(ARGUMENT_0);
            this.m9_1 = 1;
            continue $sm;
          case 3:
            return this.zan_1;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function DidCheqdRegistrar() {
    LocalRegistrarMethod.call(this, 'cheqd');
    var tmp = this;
    var tmp_0 = KotlinLogging_instance;
    tmp.fao_1 = tmp_0.w6d(DidCheqdRegistrar$log$lambda);
    this.gao_1 = 'Ed25519VerificationKey2020';
    this.hao_1 = 'uuid';
    this.iao_1 = 'https://did-registrar.cheqd.net';
    this.jao_1 = '1.0';
    this.kao_1 = this.iao_1 + '/' + this.jao_1 + '/create';
    this.lao_1 = this.iao_1 + '/' + this.jao_1 + '/deactivate';
    this.mao_1 = this.iao_1 + '/' + this.jao_1 + '/update';
    var tmp_1 = this;
    tmp_1.nao_1 = Json(VOID, DidCheqdRegistrar$json$lambda);
    var tmp_2 = this;
    tmp_2.oao_1 = HttpClient(DidCheqdRegistrar$client$lambda(this));
  }
  protoOf(DidCheqdRegistrar).w9r = function (options, $completion) {
    var tmp = new $registerCOROUTINE$13(this, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidCheqdRegistrar).ka5 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$14(this, key, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidCheqdRegistrar).n9x = function (options) {
    var tmp = DidCheqdRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidCheqdRegistrar).caj = function (key, options) {
    var tmp = DidCheqdRegistrar$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function ActionDidState$Secret$Companion$$childSerializers$_anonymous__gku42m() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_26() {
    Companion_instance_32 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.oaq_1 = [lazy(tmp_0, ActionDidState$Secret$Companion$$childSerializers$_anonymous__gku42m)];
  }
  protoOf(Companion_26).y4r = function () {
    return $serializer_getInstance_15();
  };
  var Companion_instance_32;
  function Companion_getInstance_28() {
    if (Companion_instance_32 == null)
      new Companion_26();
    return Companion_instance_32;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.Secret', this, 1);
    tmp0_serialDesc.j29('signingResponse', false);
    this.paq_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).qaq = function (encoder, value) {
    var tmp0_desc = this.paq_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().oaq_1;
    tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.signingResponse);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_15).h1y = function (encoder, value) {
    return this.qaq(encoder, value instanceof Secret ? value : THROW_CCE());
  };
  protoOf($serializer_15).i1y = function (decoder) {
    var tmp0_desc = this.paq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.t21(tmp0_desc);
    var tmp6_cached = Companion_getInstance_28().oaq_1;
    if (tmp5_input.j22()) {
      tmp4_local0 = tmp5_input.f22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.f22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.u21(tmp0_desc);
    return Secret_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_15).g1y = function () {
    return this.paq_1;
  };
  protoOf($serializer_15).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_28().oaq_1[0].z()];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function Secret_init_$Init$(seen0, signingResponse, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_15().paq_1);
    }
    $this.signingResponse = signingResponse;
    return $this;
  }
  function Secret_init_$Create$(seen0, signingResponse, serializationConstructorMarker) {
    return Secret_init_$Init$(seen0, signingResponse, serializationConstructorMarker, objectCreate(protoOf(Secret)));
  }
  function Companion_27() {
  }
  protoOf(Companion_27).y4r = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_33;
  function Companion_getInstance_29() {
    return Companion_instance_33;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.SigningRequest', this, 4);
    tmp0_serialDesc.j29('alg', false);
    tmp0_serialDesc.j29('kid', false);
    tmp0_serialDesc.j29('serializedPayload', false);
    tmp0_serialDesc.j29('type', false);
    this.raq_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).saq = function (encoder, value) {
    var tmp0_desc = this.raq_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.alg);
    tmp1_output.i23(tmp0_desc, 1, value.kid);
    tmp1_output.i23(tmp0_desc, 2, value.serializedPayload);
    tmp1_output.i23(tmp0_desc, 3, value.type);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_16).h1y = function (encoder, value) {
    return this.saq(encoder, value instanceof SigningRequest ? value : THROW_CCE());
  };
  protoOf($serializer_16).i1y = function (decoder) {
    var tmp0_desc = this.raq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.t21(tmp0_desc);
    if (tmp8_input.j22()) {
      tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.d22(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.d22(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.u21(tmp0_desc);
    return SigningRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_16).g1y = function () {
    return this.raq_1;
  };
  protoOf($serializer_16).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function SigningRequest_init_$Init$(seen0, alg, kid, serializedPayload, type, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_16().raq_1);
    }
    $this.alg = alg;
    $this.kid = kid;
    $this.serializedPayload = serializedPayload;
    $this.type = type;
    return $this;
  }
  function SigningRequest_init_$Create$(seen0, alg, kid, serializedPayload, type, serializationConstructorMarker) {
    return SigningRequest_init_$Init$(seen0, alg, kid, serializedPayload, type, serializationConstructorMarker, objectCreate(protoOf(SigningRequest)));
  }
  function ActionDidState$Companion$$childSerializers$_anonymous__7jer9a() {
    return new ArrayListSerializer($serializer_getInstance_16());
  }
  function Secret(signingResponse) {
    Companion_getInstance_28();
    this.signingResponse = signingResponse;
  }
  protoOf(Secret).taq = function () {
    return this.signingResponse;
  };
  protoOf(Secret).dc = function () {
    return this.signingResponse;
  };
  protoOf(Secret).uaq = function (signingResponse) {
    return new Secret(signingResponse);
  };
  protoOf(Secret).copy = function (signingResponse, $super) {
    signingResponse = signingResponse === VOID ? this.signingResponse : signingResponse;
    return $super === VOID ? this.uaq(signingResponse) : $super.uaq.call(this, signingResponse);
  };
  protoOf(Secret).toString = function () {
    return 'Secret(signingResponse=' + toString_0(this.signingResponse) + ')';
  };
  protoOf(Secret).hashCode = function () {
    return hashCode(this.signingResponse);
  };
  protoOf(Secret).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Secret))
      return false;
    var tmp0_other_with_cast = other instanceof Secret ? other : THROW_CCE();
    if (!equals_0(this.signingResponse, tmp0_other_with_cast.signingResponse))
      return false;
    return true;
  };
  function SigningRequest(alg, kid, serializedPayload, type) {
    this.alg = alg;
    this.kid = kid;
    this.serializedPayload = serializedPayload;
    this.type = type;
  }
  protoOf(SigningRequest).vaq = function () {
    return this.alg;
  };
  protoOf(SigningRequest).t7h = function () {
    return this.kid;
  };
  protoOf(SigningRequest).waq = function () {
    return this.serializedPayload;
  };
  protoOf(SigningRequest).z9x = function () {
    return this.type;
  };
  protoOf(SigningRequest).dc = function () {
    return this.alg;
  };
  protoOf(SigningRequest).ec = function () {
    return this.kid;
  };
  protoOf(SigningRequest).dp = function () {
    return this.serializedPayload;
  };
  protoOf(SigningRequest).q6x = function () {
    return this.type;
  };
  protoOf(SigningRequest).l7h = function (alg, kid, serializedPayload, type) {
    return new SigningRequest(alg, kid, serializedPayload, type);
  };
  protoOf(SigningRequest).copy = function (alg, kid, serializedPayload, type, $super) {
    alg = alg === VOID ? this.alg : alg;
    kid = kid === VOID ? this.kid : kid;
    serializedPayload = serializedPayload === VOID ? this.serializedPayload : serializedPayload;
    type = type === VOID ? this.type : type;
    return $super === VOID ? this.l7h(alg, kid, serializedPayload, type) : $super.l7h.call(this, alg, kid, serializedPayload, type);
  };
  protoOf(SigningRequest).toString = function () {
    return 'SigningRequest(alg=' + this.alg + ', kid=' + this.kid + ', serializedPayload=' + this.serializedPayload + ', type=' + this.type + ')';
  };
  protoOf(SigningRequest).hashCode = function () {
    var result = getStringHashCode(this.alg);
    result = imul(result, 31) + getStringHashCode(this.kid) | 0;
    result = imul(result, 31) + getStringHashCode(this.serializedPayload) | 0;
    result = imul(result, 31) + getStringHashCode(this.type) | 0;
    return result;
  };
  protoOf(SigningRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SigningRequest))
      return false;
    var tmp0_other_with_cast = other instanceof SigningRequest ? other : THROW_CCE();
    if (!(this.alg === tmp0_other_with_cast.alg))
      return false;
    if (!(this.kid === tmp0_other_with_cast.kid))
      return false;
    if (!(this.serializedPayload === tmp0_other_with_cast.serializedPayload))
      return false;
    if (!(this.type === tmp0_other_with_cast.type))
      return false;
    return true;
  };
  function Companion_28() {
    Companion_instance_34 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xaq_1 = [null, null, null, null, null, lazy(tmp_0, ActionDidState$Companion$$childSerializers$_anonymous__7jer9a)];
  }
  protoOf(Companion_28).y4r = function () {
    return $serializer_getInstance_17();
  };
  var Companion_instance_34;
  function Companion_getInstance_30() {
    if (Companion_instance_34 == null)
      new Companion_28();
    return Companion_instance_34;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('action', this, 6);
    tmp0_serialDesc.j29('state', false);
    tmp0_serialDesc.j29('action', false);
    tmp0_serialDesc.j29('description', false);
    tmp0_serialDesc.j29('did', false);
    tmp0_serialDesc.j29('secret', false);
    tmp0_serialDesc.j29('signingRequest', false);
    tmp0_serialDesc.n28(new JsonClassDiscriminator('state'));
    this.yaq_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).zaq = function (encoder, value) {
    var tmp0_desc = this.yaq_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().xaq_1;
    tmp1_output.i23(tmp0_desc, 0, value.naq_1);
    tmp1_output.i23(tmp0_desc, 1, value.action);
    tmp1_output.i23(tmp0_desc, 2, value.description);
    tmp1_output.i23(tmp0_desc, 3, value.did);
    tmp1_output.k23(tmp0_desc, 4, $serializer_getInstance_15(), value.secret);
    tmp1_output.k23(tmp0_desc, 5, tmp2_cached[5].z(), value.signingRequest);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_17).h1y = function (encoder, value) {
    return this.zaq(encoder, value instanceof ActionDidState ? value : THROW_CCE());
  };
  protoOf($serializer_17).i1y = function (decoder) {
    var tmp0_desc = this.yaq_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.t21(tmp0_desc);
    var tmp11_cached = Companion_getInstance_30().xaq_1;
    if (tmp10_input.j22()) {
      tmp4_local0 = tmp10_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.d22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.d22(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.f22(tmp0_desc, 4, $serializer_getInstance_15(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.f22(tmp0_desc, 5, tmp11_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.d22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.d22(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.f22(tmp0_desc, 4, $serializer_getInstance_15(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.f22(tmp0_desc, 5, tmp11_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.u21(tmp0_desc);
    return ActionDidState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_17).g1y = function () {
    return this.yaq_1;
  };
  protoOf($serializer_17).y29 = function () {
    var tmp0_cached = Companion_getInstance_30().xaq_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_15(), tmp0_cached[5].z()];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function ActionDidState_init_$Init$(seen0, state, action, description, did, secret, signingRequest, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_17().yaq_1);
    }
    DidState_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.naq_1 = state;
    $this.action = action;
    $this.description = description;
    $this.did = did;
    $this.secret = secret;
    $this.signingRequest = signingRequest;
    return $this;
  }
  function ActionDidState_init_$Create$(seen0, state, action, description, did, secret, signingRequest, serializationConstructorMarker) {
    return ActionDidState_init_$Init$(seen0, state, action, description, did, secret, signingRequest, serializationConstructorMarker, objectCreate(protoOf(ActionDidState)));
  }
  function ActionDidState(state, action, description, did, secret, signingRequest) {
    Companion_getInstance_30();
    DidState.call(this);
    this.naq_1 = state;
    this.action = action;
    this.description = description;
    this.did = did;
    this.secret = secret;
    this.signingRequest = signingRequest;
  }
  protoOf(ActionDidState).u9 = function () {
    return this.naq_1;
  };
  protoOf(ActionDidState).aar = function () {
    return this.action;
  };
  protoOf(ActionDidState).bar = function () {
    return this.description;
  };
  protoOf(ActionDidState).ja3 = function () {
    return this.did;
  };
  protoOf(ActionDidState).car = function () {
    return this.secret;
  };
  protoOf(ActionDidState).dar = function () {
    return this.signingRequest;
  };
  protoOf(ActionDidState).dc = function () {
    return this.naq_1;
  };
  protoOf(ActionDidState).ec = function () {
    return this.action;
  };
  protoOf(ActionDidState).dp = function () {
    return this.description;
  };
  protoOf(ActionDidState).q6x = function () {
    return this.did;
  };
  protoOf(ActionDidState).x7h = function () {
    return this.secret;
  };
  protoOf(ActionDidState).p82 = function () {
    return this.signingRequest;
  };
  protoOf(ActionDidState).ear = function (state, action, description, did, secret, signingRequest) {
    return new ActionDidState(state, action, description, did, secret, signingRequest);
  };
  protoOf(ActionDidState).copy = function (state, action, description, did, secret, signingRequest, $super) {
    state = state === VOID ? this.naq_1 : state;
    action = action === VOID ? this.action : action;
    description = description === VOID ? this.description : description;
    did = did === VOID ? this.did : did;
    secret = secret === VOID ? this.secret : secret;
    signingRequest = signingRequest === VOID ? this.signingRequest : signingRequest;
    return $super === VOID ? this.ear(state, action, description, did, secret, signingRequest) : $super.ear.call(this, state, action, description, did, secret, signingRequest);
  };
  protoOf(ActionDidState).toString = function () {
    return 'ActionDidState(state=' + this.naq_1 + ', action=' + this.action + ', description=' + this.description + ', did=' + this.did + ', secret=' + this.secret.toString() + ', signingRequest=' + toString_0(this.signingRequest) + ')';
  };
  protoOf(ActionDidState).hashCode = function () {
    var result = getStringHashCode(this.naq_1);
    result = imul(result, 31) + getStringHashCode(this.action) | 0;
    result = imul(result, 31) + getStringHashCode(this.description) | 0;
    result = imul(result, 31) + getStringHashCode(this.did) | 0;
    result = imul(result, 31) + this.secret.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.signingRequest) | 0;
    return result;
  };
  protoOf(ActionDidState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ActionDidState))
      return false;
    var tmp0_other_with_cast = other instanceof ActionDidState ? other : THROW_CCE();
    if (!(this.naq_1 === tmp0_other_with_cast.naq_1))
      return false;
    if (!(this.action === tmp0_other_with_cast.action))
      return false;
    if (!(this.description === tmp0_other_with_cast.description))
      return false;
    if (!(this.did === tmp0_other_with_cast.did))
      return false;
    if (!this.secret.equals(tmp0_other_with_cast.secret))
      return false;
    if (!equals_0(this.signingRequest, tmp0_other_with_cast.signingRequest))
      return false;
    return true;
  };
  function DidDocument$Companion$$childSerializers$_anonymous__v0p2uo_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidDocument$Companion$$childSerializers$_anonymous__v0p2uo_1() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidDocument$Companion$$childSerializers$_anonymous__v0p2uo_2() {
    return new ArrayListSerializer($serializer_getInstance_23());
  }
  function Companion_29() {
    Companion_instance_35 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DidDocument$Companion$$childSerializers$_anonymous__v0p2uo_0);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, DidDocument$Companion$$childSerializers$_anonymous__v0p2uo_1);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.far_1 = [tmp_1, tmp_3, null, lazy(tmp_4, DidDocument$Companion$$childSerializers$_anonymous__v0p2uo_2)];
  }
  protoOf(Companion_29).y4r = function () {
    return $serializer_getInstance_18();
  };
  var Companion_instance_35;
  function Companion_getInstance_31() {
    if (Companion_instance_35 == null)
      new Companion_29();
    return Companion_instance_35;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidDocument', this, 4);
    tmp0_serialDesc.j29('authentication', false);
    tmp0_serialDesc.j29('controller', false);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('verificationMethod', false);
    this.gar_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).har = function (encoder, value) {
    var tmp0_desc = this.gar_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_31().far_1;
    tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.authentication);
    tmp1_output.k23(tmp0_desc, 1, tmp2_cached[1].z(), value.controller);
    tmp1_output.i23(tmp0_desc, 2, value.id);
    tmp1_output.k23(tmp0_desc, 3, tmp2_cached[3].z(), value.verificationMethod);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_18).h1y = function (encoder, value) {
    return this.har(encoder, value instanceof DidDocument_0 ? value : THROW_CCE());
  };
  protoOf($serializer_18).i1y = function (decoder) {
    var tmp0_desc = this.gar_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.t21(tmp0_desc);
    var tmp9_cached = Companion_getInstance_31().far_1;
    if (tmp8_input.j22()) {
      tmp4_local0 = tmp8_input.f22(tmp0_desc, 0, tmp9_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.f22(tmp0_desc, 1, tmp9_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, tmp9_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.f22(tmp0_desc, 0, tmp9_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.f22(tmp0_desc, 1, tmp9_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, tmp9_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.u21(tmp0_desc);
    return DidDocument_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_18).g1y = function () {
    return this.gar_1;
  };
  protoOf($serializer_18).y29 = function () {
    var tmp0_cached = Companion_getInstance_31().far_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].z(), tmp0_cached[1].z(), StringSerializer_getInstance(), tmp0_cached[3].z()];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function DidDocument_init_$Init$_1(seen0, authentication, controller, id, verificationMethod, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_18().gar_1);
    }
    $this.authentication = authentication;
    $this.controller = controller;
    $this.id = id;
    $this.verificationMethod = verificationMethod;
    return $this;
  }
  function DidDocument_init_$Create$_0(seen0, authentication, controller, id, verificationMethod, serializationConstructorMarker) {
    return DidDocument_init_$Init$_1(seen0, authentication, controller, id, verificationMethod, serializationConstructorMarker, objectCreate(protoOf(DidDocument_0)));
  }
  function DidDocument_0(authentication, controller, id, verificationMethod) {
    Companion_getInstance_31();
    this.authentication = authentication;
    this.controller = controller;
    this.id = id;
    this.verificationMethod = verificationMethod;
  }
  protoOf(DidDocument_0).i9y = function () {
    return this.authentication;
  };
  protoOf(DidDocument_0).a9y = function () {
    return this.controller;
  };
  protoOf(DidDocument_0).h69 = function () {
    return this.id;
  };
  protoOf(DidDocument_0).g9y = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocument_0).dc = function () {
    return this.authentication;
  };
  protoOf(DidDocument_0).ec = function () {
    return this.controller;
  };
  protoOf(DidDocument_0).dp = function () {
    return this.id;
  };
  protoOf(DidDocument_0).q6x = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocument_0).iar = function (authentication, controller, id, verificationMethod) {
    return new DidDocument_0(authentication, controller, id, verificationMethod);
  };
  protoOf(DidDocument_0).copy = function (authentication, controller, id, verificationMethod, $super) {
    authentication = authentication === VOID ? this.authentication : authentication;
    controller = controller === VOID ? this.controller : controller;
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    return $super === VOID ? this.iar(authentication, controller, id, verificationMethod) : $super.iar.call(this, authentication, controller, id, verificationMethod);
  };
  protoOf(DidDocument_0).toString = function () {
    return 'DidDocument(authentication=' + toString_0(this.authentication) + ', controller=' + toString_0(this.controller) + ', id=' + this.id + ', verificationMethod=' + toString_0(this.verificationMethod) + ')';
  };
  protoOf(DidDocument_0).hashCode = function () {
    var result = hashCode(this.authentication);
    result = imul(result, 31) + hashCode(this.controller) | 0;
    result = imul(result, 31) + getStringHashCode(this.id) | 0;
    result = imul(result, 31) + hashCode(this.verificationMethod) | 0;
    return result;
  };
  protoOf(DidDocument_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DidDocument_0))
      return false;
    var tmp0_other_with_cast = other instanceof DidDocument_0 ? other : THROW_CCE();
    if (!equals_0(this.authentication, tmp0_other_with_cast.authentication))
      return false;
    if (!equals_0(this.controller, tmp0_other_with_cast.controller))
      return false;
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!equals_0(this.verificationMethod, tmp0_other_with_cast.verificationMethod))
      return false;
    return true;
  };
  function get_didStateSerializationModule() {
    _init_properties_DidState_kt__sckvhu();
    return didStateSerializationModule;
  }
  var didStateSerializationModule;
  function _get_$cachedSerializer__te6jhj_3($this) {
    return $this.jar_1.z();
  }
  function DidState$Companion$_anonymous__ee3el() {
    var tmp = getKClass(DidState);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(ActionDidState), getKClass(FailedDidState), getKClass(FinishedDidState)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_17(), $serializer_getInstance_19(), $serializer_getInstance_20()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [new JsonClassDiscriminator('state')];
    return SealedClassSerializer_init_$Create$('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.DidState', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Companion_30() {
    Companion_instance_36 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.jar_1 = lazy(tmp_0, DidState$Companion$_anonymous__ee3el);
  }
  protoOf(Companion_30).y4r = function () {
    return _get_$cachedSerializer__te6jhj_3(this);
  };
  protoOf(Companion_30).j2a = function (typeParamsSerializers) {
    return this.y4r();
  };
  var Companion_instance_36;
  function Companion_getInstance_32() {
    if (Companion_instance_36 == null)
      new Companion_30();
    return Companion_instance_36;
  }
  function DidState_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function DidState() {
    Companion_getInstance_32();
  }
  var properties_initialized_DidState_kt_n0qevo;
  function _init_properties_DidState_kt__sckvhu() {
    if (!properties_initialized_DidState_kt_n0qevo) {
      properties_initialized_DidState_kt_n0qevo = true;
      // Inline function 'kotlinx.serialization.modules.SerializersModule' call
      var builder = new SerializersModuleBuilder();
      // Inline function 'kotlinx.serialization.modules.polymorphic' call
      var baseClass = getKClass(DidState);
      var builder_0 = new PolymorphicModuleBuilder(baseClass, null);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz = getKClass(ActionDidState);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_0 = serializer_0(createKType(getKClass(ActionDidState), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
      builder_0.z2i(clazz, tmp$ret$1);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_0 = getKClass(FailedDidState);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer_0(createKType(getKClass(FailedDidState), arrayOf([]), false));
      var tmp$ret$4 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      builder_0.z2i(clazz_0, tmp$ret$4);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_1 = getKClass(FinishedDidState);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer_0(createKType(getKClass(FinishedDidState), arrayOf([]), false));
      var tmp$ret$7 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      builder_0.z2i(clazz_1, tmp$ret$7);
      builder_0.a2j(builder);
      didStateSerializationModule = builder.k27();
    }
  }
  function Companion_31() {
  }
  protoOf(Companion_31).y4r = function () {
    return $serializer_getInstance_19();
  };
  var Companion_instance_37;
  function Companion_getInstance_33() {
    return Companion_instance_37;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('failed', this, 3);
    tmp0_serialDesc.j29('state', false);
    tmp0_serialDesc.j29('reason', false);
    tmp0_serialDesc.j29('description', false);
    tmp0_serialDesc.n28(new JsonClassDiscriminator('state'));
    this.kar_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).lar = function (encoder, value) {
    var tmp0_desc = this.kar_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.maq_1);
    tmp1_output.i23(tmp0_desc, 1, value.reason);
    tmp1_output.i23(tmp0_desc, 2, value.description);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_19).h1y = function (encoder, value) {
    return this.lar(encoder, value instanceof FailedDidState ? value : THROW_CCE());
  };
  protoOf($serializer_19).i1y = function (decoder) {
    var tmp0_desc = this.kar_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.t21(tmp0_desc);
    if (tmp7_input.j22()) {
      tmp4_local0 = tmp7_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.d22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.d22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.u21(tmp0_desc);
    return FailedDidState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_19).g1y = function () {
    return this.kar_1;
  };
  protoOf($serializer_19).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function FailedDidState_init_$Init$(seen0, state, reason, description, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_19().kar_1);
    }
    DidState_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.maq_1 = state;
    $this.reason = reason;
    $this.description = description;
    return $this;
  }
  function FailedDidState_init_$Create$(seen0, state, reason, description, serializationConstructorMarker) {
    return FailedDidState_init_$Init$(seen0, state, reason, description, serializationConstructorMarker, objectCreate(protoOf(FailedDidState)));
  }
  function FailedDidState(state, reason, description) {
    DidState.call(this);
    this.maq_1 = state;
    this.reason = reason;
    this.description = description;
  }
  protoOf(FailedDidState).u9 = function () {
    return this.maq_1;
  };
  protoOf(FailedDidState).mar = function () {
    return this.reason;
  };
  protoOf(FailedDidState).bar = function () {
    return this.description;
  };
  protoOf(FailedDidState).dc = function () {
    return this.maq_1;
  };
  protoOf(FailedDidState).ec = function () {
    return this.reason;
  };
  protoOf(FailedDidState).dp = function () {
    return this.description;
  };
  protoOf(FailedDidState).s99 = function (state, reason, description) {
    return new FailedDidState(state, reason, description);
  };
  protoOf(FailedDidState).copy = function (state, reason, description, $super) {
    state = state === VOID ? this.maq_1 : state;
    reason = reason === VOID ? this.reason : reason;
    description = description === VOID ? this.description : description;
    return $super === VOID ? this.s99(state, reason, description) : $super.s99.call(this, state, reason, description);
  };
  protoOf(FailedDidState).toString = function () {
    return 'FailedDidState(state=' + this.maq_1 + ', reason=' + this.reason + ', description=' + this.description + ')';
  };
  protoOf(FailedDidState).hashCode = function () {
    var result = getStringHashCode(this.maq_1);
    result = imul(result, 31) + getStringHashCode(this.reason) | 0;
    result = imul(result, 31) + getStringHashCode(this.description) | 0;
    return result;
  };
  protoOf(FailedDidState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FailedDidState))
      return false;
    var tmp0_other_with_cast = other instanceof FailedDidState ? other : THROW_CCE();
    if (!(this.maq_1 === tmp0_other_with_cast.maq_1))
      return false;
    if (!(this.reason === tmp0_other_with_cast.reason))
      return false;
    if (!(this.description === tmp0_other_with_cast.description))
      return false;
    return true;
  };
  function Companion_32() {
  }
  protoOf(Companion_32).y4r = function () {
    return $serializer_getInstance_20();
  };
  var Companion_instance_38;
  function Companion_getInstance_34() {
    return Companion_instance_38;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('finished', this, 4);
    tmp0_serialDesc.j29('state', false);
    tmp0_serialDesc.j29('did', false);
    tmp0_serialDesc.j29('didDocument', false);
    tmp0_serialDesc.j29('secret', false);
    tmp0_serialDesc.n28(new JsonClassDiscriminator('state'));
    this.nar_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).oar = function (encoder, value) {
    var tmp0_desc = this.nar_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.laq_1);
    tmp1_output.i23(tmp0_desc, 1, value.did);
    tmp1_output.k23(tmp0_desc, 2, $serializer_getInstance_18(), value.didDocument);
    tmp1_output.k23(tmp0_desc, 3, $serializer_getInstance_21(), value.secret);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_20).h1y = function (encoder, value) {
    return this.oar(encoder, value instanceof FinishedDidState ? value : THROW_CCE());
  };
  protoOf($serializer_20).i1y = function (decoder) {
    var tmp0_desc = this.nar_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.t21(tmp0_desc);
    if (tmp8_input.j22()) {
      tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.f22(tmp0_desc, 2, $serializer_getInstance_18(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, $serializer_getInstance_21(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.f22(tmp0_desc, 2, $serializer_getInstance_18(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, $serializer_getInstance_21(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.u21(tmp0_desc);
    return FinishedDidState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_20).g1y = function () {
    return this.nar_1;
  };
  protoOf($serializer_20).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_18(), $serializer_getInstance_21()];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function FinishedDidState_init_$Init$(seen0, state, did, didDocument, secret, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_20().nar_1);
    }
    DidState_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.laq_1 = state;
    $this.did = did;
    $this.didDocument = didDocument;
    $this.secret = secret;
    return $this;
  }
  function FinishedDidState_init_$Create$(seen0, state, did, didDocument, secret, serializationConstructorMarker) {
    return FinishedDidState_init_$Init$(seen0, state, did, didDocument, secret, serializationConstructorMarker, objectCreate(protoOf(FinishedDidState)));
  }
  function FinishedDidState(state, did, didDocument, secret) {
    DidState.call(this);
    this.laq_1 = state;
    this.did = did;
    this.didDocument = didDocument;
    this.secret = secret;
  }
  protoOf(FinishedDidState).u9 = function () {
    return this.laq_1;
  };
  protoOf(FinishedDidState).ja3 = function () {
    return this.did;
  };
  protoOf(FinishedDidState).ka3 = function () {
    return this.didDocument;
  };
  protoOf(FinishedDidState).car = function () {
    return this.secret;
  };
  protoOf(FinishedDidState).dc = function () {
    return this.laq_1;
  };
  protoOf(FinishedDidState).ec = function () {
    return this.did;
  };
  protoOf(FinishedDidState).dp = function () {
    return this.didDocument;
  };
  protoOf(FinishedDidState).q6x = function () {
    return this.secret;
  };
  protoOf(FinishedDidState).par = function (state, did, didDocument, secret) {
    return new FinishedDidState(state, did, didDocument, secret);
  };
  protoOf(FinishedDidState).copy = function (state, did, didDocument, secret, $super) {
    state = state === VOID ? this.laq_1 : state;
    did = did === VOID ? this.did : did;
    didDocument = didDocument === VOID ? this.didDocument : didDocument;
    secret = secret === VOID ? this.secret : secret;
    return $super === VOID ? this.par(state, did, didDocument, secret) : $super.par.call(this, state, did, didDocument, secret);
  };
  protoOf(FinishedDidState).toString = function () {
    return 'FinishedDidState(state=' + this.laq_1 + ', did=' + this.did + ', didDocument=' + this.didDocument.toString() + ', secret=' + this.secret.toString() + ')';
  };
  protoOf(FinishedDidState).hashCode = function () {
    var result = getStringHashCode(this.laq_1);
    result = imul(result, 31) + getStringHashCode(this.did) | 0;
    result = imul(result, 31) + this.didDocument.hashCode() | 0;
    result = imul(result, 31) + this.secret.hashCode() | 0;
    return result;
  };
  protoOf(FinishedDidState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FinishedDidState))
      return false;
    var tmp0_other_with_cast = other instanceof FinishedDidState ? other : THROW_CCE();
    if (!(this.laq_1 === tmp0_other_with_cast.laq_1))
      return false;
    if (!(this.did === tmp0_other_with_cast.did))
      return false;
    if (!this.didDocument.equals(tmp0_other_with_cast.didDocument))
      return false;
    if (!this.secret.equals(tmp0_other_with_cast.secret))
      return false;
    return true;
  };
  function Secret$Companion$$childSerializers$_anonymous__6mbhq2() {
    return new ArrayListSerializer($serializer_getInstance_22());
  }
  function Companion_33() {
    Companion_instance_39 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.qar_1 = [lazy(tmp_0, Secret$Companion$$childSerializers$_anonymous__6mbhq2)];
  }
  protoOf(Companion_33).y4r = function () {
    return $serializer_getInstance_21();
  };
  var Companion_instance_39;
  function Companion_getInstance_35() {
    if (Companion_instance_39 == null)
      new Companion_33();
    return Companion_instance_39;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.Secret', this, 1);
    tmp0_serialDesc.j29('signingResponse', false);
    this.rar_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).sar = function (encoder, value) {
    var tmp0_desc = this.rar_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_35().qar_1;
    tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.signingResponse);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_21).h1y = function (encoder, value) {
    return this.sar(encoder, value instanceof Secret_0 ? value : THROW_CCE());
  };
  protoOf($serializer_21).i1y = function (decoder) {
    var tmp0_desc = this.rar_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.t21(tmp0_desc);
    var tmp6_cached = Companion_getInstance_35().qar_1;
    if (tmp5_input.j22()) {
      tmp4_local0 = tmp5_input.f22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.f22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.u21(tmp0_desc);
    return Secret_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_21).g1y = function () {
    return this.rar_1;
  };
  protoOf($serializer_21).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_35().qar_1[0].z()];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function Secret_init_$Init$_0(seen0, signingResponse, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_21().rar_1);
    }
    $this.signingResponse = signingResponse;
    return $this;
  }
  function Secret_init_$Create$_0(seen0, signingResponse, serializationConstructorMarker) {
    return Secret_init_$Init$_0(seen0, signingResponse, serializationConstructorMarker, objectCreate(protoOf(Secret_0)));
  }
  function Secret_0(signingResponse) {
    Companion_getInstance_35();
    this.signingResponse = signingResponse;
  }
  protoOf(Secret_0).taq = function () {
    return this.signingResponse;
  };
  protoOf(Secret_0).dc = function () {
    return this.signingResponse;
  };
  protoOf(Secret_0).tar = function (signingResponse) {
    return new Secret_0(signingResponse);
  };
  protoOf(Secret_0).copy = function (signingResponse, $super) {
    signingResponse = signingResponse === VOID ? this.signingResponse : signingResponse;
    return $super === VOID ? this.tar(signingResponse) : $super.tar.call(this, signingResponse);
  };
  protoOf(Secret_0).toString = function () {
    return 'Secret(signingResponse=' + toString_0(this.signingResponse) + ')';
  };
  protoOf(Secret_0).hashCode = function () {
    return hashCode(this.signingResponse);
  };
  protoOf(Secret_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Secret_0))
      return false;
    var tmp0_other_with_cast = other instanceof Secret_0 ? other : THROW_CCE();
    if (!equals_0(this.signingResponse, tmp0_other_with_cast.signingResponse))
      return false;
    return true;
  };
  function Companion_34() {
  }
  protoOf(Companion_34).y4r = function () {
    return $serializer_getInstance_22();
  };
  var Companion_instance_40;
  function Companion_getInstance_36() {
    return Companion_instance_40;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.SigningResponse', this, 3);
    tmp0_serialDesc.j29('signature', false);
    tmp0_serialDesc.j29('verificationMethodId', true);
    tmp0_serialDesc.j29('kid', true);
    this.uar_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).var = function (encoder, value) {
    var tmp0_desc = this.uar_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.signature);
    if (tmp1_output.q23(tmp0_desc, 1) ? true : !(value.verificationMethodId == null)) {
      tmp1_output.m23(tmp0_desc, 1, StringSerializer_getInstance(), value.verificationMethodId);
    }
    if (tmp1_output.q23(tmp0_desc, 2) ? true : !(value.kid == null)) {
      tmp1_output.m23(tmp0_desc, 2, StringSerializer_getInstance(), value.kid);
    }
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_22).h1y = function (encoder, value) {
    return this.var(encoder, value instanceof SigningResponse ? value : THROW_CCE());
  };
  protoOf($serializer_22).i1y = function (decoder) {
    var tmp0_desc = this.uar_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.t21(tmp0_desc);
    if (tmp7_input.j22()) {
      tmp4_local0 = tmp7_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.h22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.h22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.h22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.h22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.u21(tmp0_desc);
    return SigningResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_22).g1y = function () {
    return this.uar_1;
  };
  protoOf($serializer_22).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_22;
  function $serializer_getInstance_22() {
    if ($serializer_instance_22 == null)
      new $serializer_22();
    return $serializer_instance_22;
  }
  function SigningResponse_init_$Init$(seen0, signature, verificationMethodId, kid, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_22().uar_1);
    }
    $this.signature = signature;
    if (0 === (seen0 & 2))
      $this.verificationMethodId = null;
    else
      $this.verificationMethodId = verificationMethodId;
    if (0 === (seen0 & 4))
      $this.kid = null;
    else
      $this.kid = kid;
    return $this;
  }
  function SigningResponse_init_$Create$(seen0, signature, verificationMethodId, kid, serializationConstructorMarker) {
    return SigningResponse_init_$Init$(seen0, signature, verificationMethodId, kid, serializationConstructorMarker, objectCreate(protoOf(SigningResponse)));
  }
  function SigningResponse(signature, verificationMethodId, kid) {
    verificationMethodId = verificationMethodId === VOID ? null : verificationMethodId;
    kid = kid === VOID ? null : kid;
    this.signature = signature;
    this.verificationMethodId = verificationMethodId;
    this.kid = kid;
  }
  protoOf(SigningResponse).n99 = function () {
    return this.signature;
  };
  protoOf(SigningResponse).war = function () {
    return this.verificationMethodId;
  };
  protoOf(SigningResponse).t7h = function () {
    return this.kid;
  };
  protoOf(SigningResponse).dc = function () {
    return this.signature;
  };
  protoOf(SigningResponse).ec = function () {
    return this.verificationMethodId;
  };
  protoOf(SigningResponse).dp = function () {
    return this.kid;
  };
  protoOf(SigningResponse).xar = function (signature, verificationMethodId, kid) {
    return new SigningResponse(signature, verificationMethodId, kid);
  };
  protoOf(SigningResponse).copy = function (signature, verificationMethodId, kid, $super) {
    signature = signature === VOID ? this.signature : signature;
    verificationMethodId = verificationMethodId === VOID ? this.verificationMethodId : verificationMethodId;
    kid = kid === VOID ? this.kid : kid;
    return $super === VOID ? this.xar(signature, verificationMethodId, kid) : $super.xar.call(this, signature, verificationMethodId, kid);
  };
  protoOf(SigningResponse).toString = function () {
    return 'SigningResponse(signature=' + this.signature + ', verificationMethodId=' + this.verificationMethodId + ', kid=' + this.kid + ')';
  };
  protoOf(SigningResponse).hashCode = function () {
    var result = getStringHashCode(this.signature);
    result = imul(result, 31) + (this.verificationMethodId == null ? 0 : getStringHashCode(this.verificationMethodId)) | 0;
    result = imul(result, 31) + (this.kid == null ? 0 : getStringHashCode(this.kid)) | 0;
    return result;
  };
  protoOf(SigningResponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SigningResponse))
      return false;
    var tmp0_other_with_cast = other instanceof SigningResponse ? other : THROW_CCE();
    if (!(this.signature === tmp0_other_with_cast.signature))
      return false;
    if (!(this.verificationMethodId == tmp0_other_with_cast.verificationMethodId))
      return false;
    if (!(this.kid == tmp0_other_with_cast.kid))
      return false;
    return true;
  };
  function Companion_35() {
  }
  protoOf(Companion_35).y4r = function () {
    return $serializer_getInstance_23();
  };
  var Companion_instance_41;
  function Companion_getInstance_37() {
    return Companion_instance_41;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.VerificationMethod', this, 5);
    tmp0_serialDesc.j29('controller', false);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('publicKeyMultibase', true);
    tmp0_serialDesc.j29('publicKeyBase58', true);
    tmp0_serialDesc.j29('type', false);
    this.yar_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).zar = function (encoder, value) {
    var tmp0_desc = this.yar_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.controller);
    tmp1_output.i23(tmp0_desc, 1, value.id);
    if (tmp1_output.q23(tmp0_desc, 2) ? true : !(value.publicKeyMultibase == null)) {
      tmp1_output.m23(tmp0_desc, 2, StringSerializer_getInstance(), value.publicKeyMultibase);
    }
    if (tmp1_output.q23(tmp0_desc, 3) ? true : !(value.publicKeyBase58 == null)) {
      tmp1_output.m23(tmp0_desc, 3, StringSerializer_getInstance(), value.publicKeyBase58);
    }
    tmp1_output.i23(tmp0_desc, 4, value.type);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_23).h1y = function (encoder, value) {
    return this.zar(encoder, value instanceof VerificationMethod_5 ? value : THROW_CCE());
  };
  protoOf($serializer_23).i1y = function (decoder) {
    var tmp0_desc = this.yar_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.t21(tmp0_desc);
    if (tmp9_input.j22()) {
      tmp4_local0 = tmp9_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.d22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.h22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.h22(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.d22(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.d22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.h22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.h22(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.d22(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.u21(tmp0_desc);
    return VerificationMethod_init_$Create$_4(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_23).g1y = function () {
    return this.yar_1;
  };
  protoOf($serializer_23).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance()];
  };
  var $serializer_instance_23;
  function $serializer_getInstance_23() {
    if ($serializer_instance_23 == null)
      new $serializer_23();
    return $serializer_instance_23;
  }
  function VerificationMethod_init_$Init$_4(seen0, controller, id, publicKeyMultibase, publicKeyBase58, type, serializationConstructorMarker, $this) {
    if (!(19 === (19 & seen0))) {
      throwMissingFieldException(seen0, 19, $serializer_getInstance_23().yar_1);
    }
    $this.controller = controller;
    $this.id = id;
    if (0 === (seen0 & 4))
      $this.publicKeyMultibase = null;
    else
      $this.publicKeyMultibase = publicKeyMultibase;
    if (0 === (seen0 & 8))
      $this.publicKeyBase58 = null;
    else
      $this.publicKeyBase58 = publicKeyBase58;
    $this.type = type;
    return $this;
  }
  function VerificationMethod_init_$Create$_4(seen0, controller, id, publicKeyMultibase, publicKeyBase58, type, serializationConstructorMarker) {
    return VerificationMethod_init_$Init$_4(seen0, controller, id, publicKeyMultibase, publicKeyBase58, type, serializationConstructorMarker, objectCreate(protoOf(VerificationMethod_5)));
  }
  function VerificationMethod_5(controller, id, publicKeyMultibase, publicKeyBase58, type) {
    publicKeyMultibase = publicKeyMultibase === VOID ? null : publicKeyMultibase;
    publicKeyBase58 = publicKeyBase58 === VOID ? null : publicKeyBase58;
    this.controller = controller;
    this.id = id;
    this.publicKeyMultibase = publicKeyMultibase;
    this.publicKeyBase58 = publicKeyBase58;
    this.type = type;
  }
  protoOf(VerificationMethod_5).a9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_5).h69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_5).aas = function () {
    return this.publicKeyMultibase;
  };
  protoOf(VerificationMethod_5).bas = function () {
    return this.publicKeyBase58;
  };
  protoOf(VerificationMethod_5).z9x = function () {
    return this.type;
  };
  protoOf(VerificationMethod_5).dc = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_5).ec = function () {
    return this.id;
  };
  protoOf(VerificationMethod_5).dp = function () {
    return this.publicKeyMultibase;
  };
  protoOf(VerificationMethod_5).q6x = function () {
    return this.publicKeyBase58;
  };
  protoOf(VerificationMethod_5).x7h = function () {
    return this.type;
  };
  protoOf(VerificationMethod_5).cas = function (controller, id, publicKeyMultibase, publicKeyBase58, type) {
    return new VerificationMethod_5(controller, id, publicKeyMultibase, publicKeyBase58, type);
  };
  protoOf(VerificationMethod_5).copy = function (controller, id, publicKeyMultibase, publicKeyBase58, type, $super) {
    controller = controller === VOID ? this.controller : controller;
    id = id === VOID ? this.id : id;
    publicKeyMultibase = publicKeyMultibase === VOID ? this.publicKeyMultibase : publicKeyMultibase;
    publicKeyBase58 = publicKeyBase58 === VOID ? this.publicKeyBase58 : publicKeyBase58;
    type = type === VOID ? this.type : type;
    return $super === VOID ? this.cas(controller, id, publicKeyMultibase, publicKeyBase58, type) : $super.cas.call(this, controller, id, publicKeyMultibase, publicKeyBase58, type);
  };
  protoOf(VerificationMethod_5).toString = function () {
    return 'VerificationMethod(controller=' + this.controller + ', id=' + this.id + ', publicKeyMultibase=' + this.publicKeyMultibase + ', publicKeyBase58=' + this.publicKeyBase58 + ', type=' + this.type + ')';
  };
  protoOf(VerificationMethod_5).hashCode = function () {
    var result = getStringHashCode(this.controller);
    result = imul(result, 31) + getStringHashCode(this.id) | 0;
    result = imul(result, 31) + (this.publicKeyMultibase == null ? 0 : getStringHashCode(this.publicKeyMultibase)) | 0;
    result = imul(result, 31) + (this.publicKeyBase58 == null ? 0 : getStringHashCode(this.publicKeyBase58)) | 0;
    result = imul(result, 31) + getStringHashCode(this.type) | 0;
    return result;
  };
  protoOf(VerificationMethod_5).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerificationMethod_5))
      return false;
    var tmp0_other_with_cast = other instanceof VerificationMethod_5 ? other : THROW_CCE();
    if (!(this.controller === tmp0_other_with_cast.controller))
      return false;
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!(this.publicKeyMultibase == tmp0_other_with_cast.publicKeyMultibase))
      return false;
    if (!(this.publicKeyBase58 == tmp0_other_with_cast.publicKeyBase58))
      return false;
    if (!(this.type === tmp0_other_with_cast.type))
      return false;
    return true;
  };
  function Companion_36() {
  }
  protoOf(Companion_36).y4r = function () {
    return $serializer_getInstance_24();
  };
  var Companion_instance_42;
  function Companion_getInstance_38() {
    return Companion_instance_42;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.request.JobCreateRequest', this, 1);
    tmp0_serialDesc.j29('didDocument', false);
    this.das_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).eas = function (encoder, value) {
    var tmp0_desc = this.das_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.k23(tmp0_desc, 0, $serializer_getInstance_29(), value.didDocument);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_24).h1y = function (encoder, value) {
    return this.eas(encoder, value instanceof JobCreateRequest ? value : THROW_CCE());
  };
  protoOf($serializer_24).i1y = function (decoder) {
    var tmp0_desc = this.das_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.t21(tmp0_desc);
    if (tmp5_input.j22()) {
      tmp4_local0 = tmp5_input.f22(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.f22(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.u21(tmp0_desc);
    return JobCreateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_24).g1y = function () {
    return this.das_1;
  };
  protoOf($serializer_24).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_29()];
  };
  var $serializer_instance_24;
  function $serializer_getInstance_24() {
    if ($serializer_instance_24 == null)
      new $serializer_24();
    return $serializer_instance_24;
  }
  function JobCreateRequest_init_$Init$(seen0, didDocument, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_24().das_1);
    }
    $this.didDocument = didDocument;
    return $this;
  }
  function JobCreateRequest_init_$Create$(seen0, didDocument, serializationConstructorMarker) {
    return JobCreateRequest_init_$Init$(seen0, didDocument, serializationConstructorMarker, objectCreate(protoOf(JobCreateRequest)));
  }
  function JobCreateRequest(didDocument) {
    this.didDocument = didDocument;
  }
  protoOf(JobCreateRequest).ka3 = function () {
    return this.didDocument;
  };
  protoOf(JobCreateRequest).dc = function () {
    return this.didDocument;
  };
  protoOf(JobCreateRequest).fas = function (didDocument) {
    return new JobCreateRequest(didDocument);
  };
  protoOf(JobCreateRequest).copy = function (didDocument, $super) {
    didDocument = didDocument === VOID ? this.didDocument : didDocument;
    return $super === VOID ? this.fas(didDocument) : $super.fas.call(this, didDocument);
  };
  protoOf(JobCreateRequest).toString = function () {
    return 'JobCreateRequest(didDocument=' + this.didDocument.toString() + ')';
  };
  protoOf(JobCreateRequest).hashCode = function () {
    return this.didDocument.hashCode();
  };
  protoOf(JobCreateRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JobCreateRequest))
      return false;
    var tmp0_other_with_cast = other instanceof JobCreateRequest ? other : THROW_CCE();
    if (!this.didDocument.equals(tmp0_other_with_cast.didDocument))
      return false;
    return true;
  };
  function Companion_37() {
  }
  protoOf(Companion_37).y4r = function () {
    return $serializer_getInstance_25();
  };
  var Companion_instance_43;
  function Companion_getInstance_39() {
    return Companion_instance_43;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.request.JobDeactivateRequest', this, 1);
    tmp0_serialDesc.j29('did', false);
    this.gas_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).has = function (encoder, value) {
    var tmp0_desc = this.gas_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.did);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_25).h1y = function (encoder, value) {
    return this.has(encoder, value instanceof JobDeactivateRequest ? value : THROW_CCE());
  };
  protoOf($serializer_25).i1y = function (decoder) {
    var tmp0_desc = this.gas_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.t21(tmp0_desc);
    if (tmp5_input.j22()) {
      tmp4_local0 = tmp5_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.u21(tmp0_desc);
    return JobDeactivateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_25).g1y = function () {
    return this.gas_1;
  };
  protoOf($serializer_25).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  var $serializer_instance_25;
  function $serializer_getInstance_25() {
    if ($serializer_instance_25 == null)
      new $serializer_25();
    return $serializer_instance_25;
  }
  function JobDeactivateRequest_init_$Init$(seen0, did, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_25().gas_1);
    }
    $this.did = did;
    return $this;
  }
  function JobDeactivateRequest_init_$Create$(seen0, did, serializationConstructorMarker) {
    return JobDeactivateRequest_init_$Init$(seen0, did, serializationConstructorMarker, objectCreate(protoOf(JobDeactivateRequest)));
  }
  function JobDeactivateRequest(did) {
    this.did = did;
  }
  protoOf(JobDeactivateRequest).ja3 = function () {
    return this.did;
  };
  protoOf(JobDeactivateRequest).dc = function () {
    return this.did;
  };
  protoOf(JobDeactivateRequest).fa0 = function (did) {
    return new JobDeactivateRequest(did);
  };
  protoOf(JobDeactivateRequest).copy = function (did, $super) {
    did = did === VOID ? this.did : did;
    return $super === VOID ? this.fa0(did) : $super.fa0.call(this, did);
  };
  protoOf(JobDeactivateRequest).toString = function () {
    return 'JobDeactivateRequest(did=' + this.did + ')';
  };
  protoOf(JobDeactivateRequest).hashCode = function () {
    return getStringHashCode(this.did);
  };
  protoOf(JobDeactivateRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JobDeactivateRequest))
      return false;
    var tmp0_other_with_cast = other instanceof JobDeactivateRequest ? other : THROW_CCE();
    if (!(this.did === tmp0_other_with_cast.did))
      return false;
    return true;
  };
  function Companion_38() {
  }
  protoOf(Companion_38).y4r = function () {
    return $serializer_getInstance_26();
  };
  var Companion_instance_44;
  function Companion_getInstance_40() {
    return Companion_instance_44;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.request.JobSignRequest', this, 2);
    tmp0_serialDesc.j29('jobId', false);
    tmp0_serialDesc.j29('secret', false);
    this.ias_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).jas = function (encoder, value) {
    var tmp0_desc = this.ias_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.jobId);
    tmp1_output.k23(tmp0_desc, 1, $serializer_getInstance_21(), value.secret);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_26).h1y = function (encoder, value) {
    return this.jas(encoder, value instanceof JobSignRequest ? value : THROW_CCE());
  };
  protoOf($serializer_26).i1y = function (decoder) {
    var tmp0_desc = this.ias_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.t21(tmp0_desc);
    if (tmp6_input.j22()) {
      tmp4_local0 = tmp6_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.f22(tmp0_desc, 1, $serializer_getInstance_21(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.f22(tmp0_desc, 1, $serializer_getInstance_21(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.u21(tmp0_desc);
    return JobSignRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_26).g1y = function () {
    return this.ias_1;
  };
  protoOf($serializer_26).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer_getInstance_21()];
  };
  var $serializer_instance_26;
  function $serializer_getInstance_26() {
    if ($serializer_instance_26 == null)
      new $serializer_26();
    return $serializer_instance_26;
  }
  function JobSignRequest_init_$Init$(seen0, jobId, secret, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_26().ias_1);
    }
    $this.jobId = jobId;
    $this.secret = secret;
    return $this;
  }
  function JobSignRequest_init_$Create$(seen0, jobId, secret, serializationConstructorMarker) {
    return JobSignRequest_init_$Init$(seen0, jobId, secret, serializationConstructorMarker, objectCreate(protoOf(JobSignRequest)));
  }
  function JobSignRequest(jobId, secret) {
    this.jobId = jobId;
    this.secret = secret;
  }
  protoOf(JobSignRequest).kas = function () {
    return this.jobId;
  };
  protoOf(JobSignRequest).car = function () {
    return this.secret;
  };
  protoOf(JobSignRequest).dc = function () {
    return this.jobId;
  };
  protoOf(JobSignRequest).ec = function () {
    return this.secret;
  };
  protoOf(JobSignRequest).las = function (jobId, secret) {
    return new JobSignRequest(jobId, secret);
  };
  protoOf(JobSignRequest).copy = function (jobId, secret, $super) {
    jobId = jobId === VOID ? this.jobId : jobId;
    secret = secret === VOID ? this.secret : secret;
    return $super === VOID ? this.las(jobId, secret) : $super.las.call(this, jobId, secret);
  };
  protoOf(JobSignRequest).toString = function () {
    return 'JobSignRequest(jobId=' + this.jobId + ', secret=' + this.secret.toString() + ')';
  };
  protoOf(JobSignRequest).hashCode = function () {
    var result = getStringHashCode(this.jobId);
    result = imul(result, 31) + this.secret.hashCode() | 0;
    return result;
  };
  protoOf(JobSignRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JobSignRequest))
      return false;
    var tmp0_other_with_cast = other instanceof JobSignRequest ? other : THROW_CCE();
    if (!(this.jobId === tmp0_other_with_cast.jobId))
      return false;
    if (!this.secret.equals(tmp0_other_with_cast.secret))
      return false;
    return true;
  };
  function JobActionResponse$Companion$$childSerializers$_anonymous__c2i9bq() {
    return Companion_getInstance_32().y4r();
  }
  function Companion_39() {
    Companion_instance_45 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.mas_1 = [lazy(tmp_0, JobActionResponse$Companion$$childSerializers$_anonymous__c2i9bq), null];
  }
  protoOf(Companion_39).y4r = function () {
    return $serializer_getInstance_27();
  };
  var Companion_instance_45;
  function Companion_getInstance_41() {
    if (Companion_instance_45 == null)
      new Companion_39();
    return Companion_instance_45;
  }
  function $serializer_27() {
    $serializer_instance_27 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.response.JobActionResponse', this, 2);
    tmp0_serialDesc.j29('didState', false);
    tmp0_serialDesc.j29('jobId', true);
    this.nas_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).oas = function (encoder, value) {
    var tmp0_desc = this.nas_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_41().mas_1;
    tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.didState);
    if (tmp1_output.q23(tmp0_desc, 1) ? true : !(value.jobId == null)) {
      tmp1_output.m23(tmp0_desc, 1, StringSerializer_getInstance(), value.jobId);
    }
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_27).h1y = function (encoder, value) {
    return this.oas(encoder, value instanceof JobActionResponse ? value : THROW_CCE());
  };
  protoOf($serializer_27).i1y = function (decoder) {
    var tmp0_desc = this.nas_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.t21(tmp0_desc);
    var tmp7_cached = Companion_getInstance_41().mas_1;
    if (tmp6_input.j22()) {
      tmp4_local0 = tmp6_input.f22(tmp0_desc, 0, tmp7_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.h22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.f22(tmp0_desc, 0, tmp7_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.h22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.u21(tmp0_desc);
    return JobActionResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_27).g1y = function () {
    return this.nas_1;
  };
  protoOf($serializer_27).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_41().mas_1[0].z(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function JobActionResponse_init_$Init$(seen0, didState, jobId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_27().nas_1);
    }
    $this.didState = didState;
    if (0 === (seen0 & 2))
      $this.jobId = null;
    else
      $this.jobId = jobId;
    return $this;
  }
  function JobActionResponse_init_$Create$(seen0, didState, jobId, serializationConstructorMarker) {
    return JobActionResponse_init_$Init$(seen0, didState, jobId, serializationConstructorMarker, objectCreate(protoOf(JobActionResponse)));
  }
  function JobActionResponse(didState, jobId) {
    Companion_getInstance_41();
    jobId = jobId === VOID ? null : jobId;
    this.didState = didState;
    this.jobId = jobId;
  }
  protoOf(JobActionResponse).pas = function () {
    return this.didState;
  };
  protoOf(JobActionResponse).kas = function () {
    return this.jobId;
  };
  protoOf(JobActionResponse).dc = function () {
    return this.didState;
  };
  protoOf(JobActionResponse).ec = function () {
    return this.jobId;
  };
  protoOf(JobActionResponse).qas = function (didState, jobId) {
    return new JobActionResponse(didState, jobId);
  };
  protoOf(JobActionResponse).copy = function (didState, jobId, $super) {
    didState = didState === VOID ? this.didState : didState;
    jobId = jobId === VOID ? this.jobId : jobId;
    return $super === VOID ? this.qas(didState, jobId) : $super.qas.call(this, didState, jobId);
  };
  protoOf(JobActionResponse).toString = function () {
    return 'JobActionResponse(didState=' + toString_0(this.didState) + ', jobId=' + this.jobId + ')';
  };
  protoOf(JobActionResponse).hashCode = function () {
    var result = hashCode(this.didState);
    result = imul(result, 31) + (this.jobId == null ? 0 : getStringHashCode(this.jobId)) | 0;
    return result;
  };
  protoOf(JobActionResponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JobActionResponse))
      return false;
    var tmp0_other_with_cast = other instanceof JobActionResponse ? other : THROW_CCE();
    if (!equals_0(this.didState, tmp0_other_with_cast.didState))
      return false;
    if (!(this.jobId == tmp0_other_with_cast.jobId))
      return false;
    return true;
  };
  function Companion_40() {
  }
  protoOf(Companion_40).y4r = function () {
    return $serializer_getInstance_28();
  };
  var Companion_instance_46;
  function Companion_getInstance_42() {
    return Companion_instance_46;
  }
  function $serializer_28() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.CheqdKey', this, 3);
    tmp0_serialDesc.j29('publicKeyHex', false);
    tmp0_serialDesc.j29('verificationMethodId', true);
    tmp0_serialDesc.j29('keyId', true);
    this.ras_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).sas = function (encoder, value) {
    var tmp0_desc = this.ras_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.i23(tmp0_desc, 0, value.publicKeyHex);
    if (tmp1_output.q23(tmp0_desc, 1) ? true : !(value.verificationMethodId == null)) {
      tmp1_output.m23(tmp0_desc, 1, StringSerializer_getInstance(), value.verificationMethodId);
    }
    if (tmp1_output.q23(tmp0_desc, 2) ? true : !(value.keyId == null)) {
      tmp1_output.m23(tmp0_desc, 2, StringSerializer_getInstance(), value.keyId);
    }
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_28).h1y = function (encoder, value) {
    return this.sas(encoder, value instanceof CheqdKey ? value : THROW_CCE());
  };
  protoOf($serializer_28).i1y = function (decoder) {
    var tmp0_desc = this.ras_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.t21(tmp0_desc);
    if (tmp7_input.j22()) {
      tmp4_local0 = tmp7_input.d22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.h22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.h22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.d22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.h22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.h22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.u21(tmp0_desc);
    return CheqdKey_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_28).g1y = function () {
    return this.ras_1;
  };
  protoOf($serializer_28).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_28;
  function $serializer_getInstance_28() {
    if ($serializer_instance_28 == null)
      new $serializer_28();
    return $serializer_instance_28;
  }
  function CheqdKey_init_$Init$(seen0, publicKeyHex, verificationMethodId, keyId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_28().ras_1);
    }
    $this.publicKeyHex = publicKeyHex;
    if (0 === (seen0 & 2))
      $this.verificationMethodId = null;
    else
      $this.verificationMethodId = verificationMethodId;
    if (0 === (seen0 & 4))
      $this.keyId = null;
    else
      $this.keyId = keyId;
    return $this;
  }
  function CheqdKey_init_$Create$(seen0, publicKeyHex, verificationMethodId, keyId, serializationConstructorMarker) {
    return CheqdKey_init_$Init$(seen0, publicKeyHex, verificationMethodId, keyId, serializationConstructorMarker, objectCreate(protoOf(CheqdKey)));
  }
  function CheqdKey(publicKeyHex, verificationMethodId, keyId) {
    verificationMethodId = verificationMethodId === VOID ? null : verificationMethodId;
    keyId = keyId === VOID ? null : keyId;
    this.publicKeyHex = publicKeyHex;
    this.verificationMethodId = verificationMethodId;
    this.keyId = keyId;
  }
  protoOf(CheqdKey).tas = function () {
    return this.publicKeyHex;
  };
  protoOf(CheqdKey).war = function () {
    return this.verificationMethodId;
  };
  protoOf(CheqdKey).uas = function () {
    return this.keyId;
  };
  protoOf(CheqdKey).dc = function () {
    return this.publicKeyHex;
  };
  protoOf(CheqdKey).ec = function () {
    return this.verificationMethodId;
  };
  protoOf(CheqdKey).dp = function () {
    return this.keyId;
  };
  protoOf(CheqdKey).xar = function (publicKeyHex, verificationMethodId, keyId) {
    return new CheqdKey(publicKeyHex, verificationMethodId, keyId);
  };
  protoOf(CheqdKey).copy = function (publicKeyHex, verificationMethodId, keyId, $super) {
    publicKeyHex = publicKeyHex === VOID ? this.publicKeyHex : publicKeyHex;
    verificationMethodId = verificationMethodId === VOID ? this.verificationMethodId : verificationMethodId;
    keyId = keyId === VOID ? this.keyId : keyId;
    return $super === VOID ? this.xar(publicKeyHex, verificationMethodId, keyId) : $super.xar.call(this, publicKeyHex, verificationMethodId, keyId);
  };
  protoOf(CheqdKey).toString = function () {
    return 'CheqdKey(publicKeyHex=' + this.publicKeyHex + ', verificationMethodId=' + this.verificationMethodId + ', keyId=' + this.keyId + ')';
  };
  protoOf(CheqdKey).hashCode = function () {
    var result = getStringHashCode(this.publicKeyHex);
    result = imul(result, 31) + (this.verificationMethodId == null ? 0 : getStringHashCode(this.verificationMethodId)) | 0;
    result = imul(result, 31) + (this.keyId == null ? 0 : getStringHashCode(this.keyId)) | 0;
    return result;
  };
  protoOf(CheqdKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CheqdKey))
      return false;
    var tmp0_other_with_cast = other instanceof CheqdKey ? other : THROW_CCE();
    if (!(this.publicKeyHex === tmp0_other_with_cast.publicKeyHex))
      return false;
    if (!(this.verificationMethodId == tmp0_other_with_cast.verificationMethodId))
      return false;
    if (!(this.keyId == tmp0_other_with_cast.keyId))
      return false;
    return true;
  };
  function DidDocObject$Companion$$childSerializers$_anonymous__xn5fou() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidDocObject$Companion$$childSerializers$_anonymous__xn5fou_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function DidDocObject$Companion$$childSerializers$_anonymous__xn5fou_1() {
    return new ArrayListSerializer($serializer_getInstance_23());
  }
  function Companion_41() {
    Companion_instance_47 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, DidDocObject$Companion$$childSerializers$_anonymous__xn5fou);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_3 = lazy(tmp_2, DidDocObject$Companion$$childSerializers$_anonymous__xn5fou_0);
    var tmp_4 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.vas_1 = [tmp_1, tmp_3, null, lazy(tmp_4, DidDocObject$Companion$$childSerializers$_anonymous__xn5fou_1)];
  }
  protoOf(Companion_41).y4r = function () {
    return $serializer_getInstance_29();
  };
  var Companion_instance_47;
  function Companion_getInstance_43() {
    if (Companion_instance_47 == null)
      new Companion_41();
    return Companion_instance_47;
  }
  function $serializer_29() {
    $serializer_instance_29 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidDocObject', this, 4);
    tmp0_serialDesc.j29('authentication', false);
    tmp0_serialDesc.j29('controller', false);
    tmp0_serialDesc.j29('id', false);
    tmp0_serialDesc.j29('verificationMethod', false);
    this.was_1 = tmp0_serialDesc;
  }
  protoOf($serializer_29).xas = function (encoder, value) {
    var tmp0_desc = this.was_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_43().vas_1;
    tmp1_output.k23(tmp0_desc, 0, tmp2_cached[0].z(), value.authentication);
    tmp1_output.k23(tmp0_desc, 1, tmp2_cached[1].z(), value.controller);
    tmp1_output.i23(tmp0_desc, 2, value.id);
    tmp1_output.k23(tmp0_desc, 3, tmp2_cached[3].z(), value.verificationMethod);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_29).h1y = function (encoder, value) {
    return this.xas(encoder, value instanceof DidDocObject ? value : THROW_CCE());
  };
  protoOf($serializer_29).i1y = function (decoder) {
    var tmp0_desc = this.was_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.t21(tmp0_desc);
    var tmp9_cached = Companion_getInstance_43().vas_1;
    if (tmp8_input.j22()) {
      tmp4_local0 = tmp8_input.f22(tmp0_desc, 0, tmp9_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.f22(tmp0_desc, 1, tmp9_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, tmp9_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.f22(tmp0_desc, 0, tmp9_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.f22(tmp0_desc, 1, tmp9_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.d22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.f22(tmp0_desc, 3, tmp9_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.u21(tmp0_desc);
    return DidDocObject_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_29).g1y = function () {
    return this.was_1;
  };
  protoOf($serializer_29).y29 = function () {
    var tmp0_cached = Companion_getInstance_43().vas_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].z(), tmp0_cached[1].z(), StringSerializer_getInstance(), tmp0_cached[3].z()];
  };
  var $serializer_instance_29;
  function $serializer_getInstance_29() {
    if ($serializer_instance_29 == null)
      new $serializer_29();
    return $serializer_instance_29;
  }
  function DidDocObject_init_$Init$(seen0, authentication, controller, id, verificationMethod, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_29().was_1);
    }
    $this.authentication = authentication;
    $this.controller = controller;
    $this.id = id;
    $this.verificationMethod = verificationMethod;
    return $this;
  }
  function DidDocObject_init_$Create$(seen0, authentication, controller, id, verificationMethod, serializationConstructorMarker) {
    return DidDocObject_init_$Init$(seen0, authentication, controller, id, verificationMethod, serializationConstructorMarker, objectCreate(protoOf(DidDocObject)));
  }
  function DidDocObject(authentication, controller, id, verificationMethod) {
    Companion_getInstance_43();
    this.authentication = authentication;
    this.controller = controller;
    this.id = id;
    this.verificationMethod = verificationMethod;
  }
  protoOf(DidDocObject).i9y = function () {
    return this.authentication;
  };
  protoOf(DidDocObject).a9y = function () {
    return this.controller;
  };
  protoOf(DidDocObject).h69 = function () {
    return this.id;
  };
  protoOf(DidDocObject).g9y = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocObject).dc = function () {
    return this.authentication;
  };
  protoOf(DidDocObject).ec = function () {
    return this.controller;
  };
  protoOf(DidDocObject).dp = function () {
    return this.id;
  };
  protoOf(DidDocObject).q6x = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocObject).iar = function (authentication, controller, id, verificationMethod) {
    return new DidDocObject(authentication, controller, id, verificationMethod);
  };
  protoOf(DidDocObject).copy = function (authentication, controller, id, verificationMethod, $super) {
    authentication = authentication === VOID ? this.authentication : authentication;
    controller = controller === VOID ? this.controller : controller;
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    return $super === VOID ? this.iar(authentication, controller, id, verificationMethod) : $super.iar.call(this, authentication, controller, id, verificationMethod);
  };
  protoOf(DidDocObject).toString = function () {
    return 'DidDocObject(authentication=' + toString_0(this.authentication) + ', controller=' + toString_0(this.controller) + ', id=' + this.id + ', verificationMethod=' + toString_0(this.verificationMethod) + ')';
  };
  protoOf(DidDocObject).hashCode = function () {
    var result = hashCode(this.authentication);
    result = imul(result, 31) + hashCode(this.controller) | 0;
    result = imul(result, 31) + getStringHashCode(this.id) | 0;
    result = imul(result, 31) + hashCode(this.verificationMethod) | 0;
    return result;
  };
  protoOf(DidDocObject).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DidDocObject))
      return false;
    var tmp0_other_with_cast = other instanceof DidDocObject ? other : THROW_CCE();
    if (!equals_0(this.authentication, tmp0_other_with_cast.authentication))
      return false;
    if (!equals_0(this.controller, tmp0_other_with_cast.controller))
      return false;
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!equals_0(this.verificationMethod, tmp0_other_with_cast.verificationMethod))
      return false;
    return true;
  };
  function Companion_42() {
  }
  protoOf(Companion_42).y4r = function () {
    return $serializer_getInstance_30();
  };
  var Companion_instance_48;
  function Companion_getInstance_44() {
    return Companion_instance_48;
  }
  function $serializer_30() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidGetResponse', this, 2);
    tmp0_serialDesc.j29('didDoc', false);
    tmp0_serialDesc.j29('key', false);
    this.yas_1 = tmp0_serialDesc;
  }
  protoOf($serializer_30).zas = function (encoder, value) {
    var tmp0_desc = this.yas_1;
    var tmp1_output = encoder.t21(tmp0_desc);
    tmp1_output.k23(tmp0_desc, 0, $serializer_getInstance_29(), value.didDoc);
    tmp1_output.k23(tmp0_desc, 1, $serializer_getInstance_28(), value.key);
    tmp1_output.u21(tmp0_desc);
  };
  protoOf($serializer_30).h1y = function (encoder, value) {
    return this.zas(encoder, value instanceof DidGetResponse ? value : THROW_CCE());
  };
  protoOf($serializer_30).i1y = function (decoder) {
    var tmp0_desc = this.yas_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.t21(tmp0_desc);
    if (tmp6_input.j22()) {
      tmp4_local0 = tmp6_input.f22(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.f22(tmp0_desc, 1, $serializer_getInstance_28(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.k22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.f22(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.f22(tmp0_desc, 1, $serializer_getInstance_28(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.u21(tmp0_desc);
    return DidGetResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_30).g1y = function () {
    return this.yas_1;
  };
  protoOf($serializer_30).y29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_29(), $serializer_getInstance_28()];
  };
  var $serializer_instance_30;
  function $serializer_getInstance_30() {
    if ($serializer_instance_30 == null)
      new $serializer_30();
    return $serializer_instance_30;
  }
  function DidGetResponse_init_$Init$(seen0, didDoc, key, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_30().yas_1);
    }
    $this.didDoc = didDoc;
    $this.key = key;
    return $this;
  }
  function DidGetResponse_init_$Create$(seen0, didDoc, key, serializationConstructorMarker) {
    return DidGetResponse_init_$Init$(seen0, didDoc, key, serializationConstructorMarker, objectCreate(protoOf(DidGetResponse)));
  }
  function DidGetResponse(didDoc, key) {
    this.didDoc = didDoc;
    this.key = key;
  }
  protoOf(DidGetResponse).aat = function () {
    return this.didDoc;
  };
  protoOf(DidGetResponse).y = function () {
    return this.key;
  };
  protoOf(DidGetResponse).dc = function () {
    return this.didDoc;
  };
  protoOf(DidGetResponse).ec = function () {
    return this.key;
  };
  protoOf(DidGetResponse).bat = function (didDoc, key) {
    return new DidGetResponse(didDoc, key);
  };
  protoOf(DidGetResponse).copy = function (didDoc, key, $super) {
    didDoc = didDoc === VOID ? this.didDoc : didDoc;
    key = key === VOID ? this.key : key;
    return $super === VOID ? this.bat(didDoc, key) : $super.bat.call(this, didDoc, key);
  };
  protoOf(DidGetResponse).toString = function () {
    return 'DidGetResponse(didDoc=' + this.didDoc.toString() + ', key=' + this.key.toString() + ')';
  };
  protoOf(DidGetResponse).hashCode = function () {
    var result = this.didDoc.hashCode();
    result = imul(result, 31) + this.key.hashCode() | 0;
    return result;
  };
  protoOf(DidGetResponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DidGetResponse))
      return false;
    var tmp0_other_with_cast = other instanceof DidGetResponse ? other : THROW_CCE();
    if (!this.didDoc.equals(tmp0_other_with_cast.didDoc))
      return false;
    if (!this.key.equals(tmp0_other_with_cast.key))
      return false;
    return true;
  };
  function DidJwkRegistrar$registerAsync$slambda(this$0, $options, resultContinuation) {
    this.kat_1 = this$0;
    this.lat_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkRegistrar$registerAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidJwkRegistrar$registerAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidJwkRegistrar$registerAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.kat_1.w9r(this.lat_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidJwkRegistrar$registerAsync$slambda).ia = function (completion) {
    return new DidJwkRegistrar$registerAsync$slambda(this.kat_1, this.lat_1, completion);
  };
  function DidJwkRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidJwkRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidJwkRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.uat_1 = this$0;
    this.vat_1 = $key;
    this.wat_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkRegistrar$registerByKeyAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidJwkRegistrar$registerByKeyAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidJwkRegistrar$registerByKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.uat_1.ka5(this.vat_1, this.wat_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidJwkRegistrar$registerByKeyAsync$slambda).ia = function (completion) {
    return new DidJwkRegistrar$registerByKeyAsync$slambda(this.uat_1, this.vat_1, this.wat_1, completion);
  };
  function DidJwkRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidJwkRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$20(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fau_1 = _this__u8e3s4;
    this.gau_1 = options;
  }
  protoOf($registerCOROUTINE$20).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            var this_0 = this.gau_1;
            var tmp0_safe_receiver = get_jsonObject(this_0.config).af('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('keyType');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.c4s();
            var tmp_1;
            if (tmp4_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var tmp0_subject = getKClass(KeyType);
              var tmp_2;
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().gd())) {
                tmp_2 = toBoolean(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().jd())) {
                tmp_2 = toIntOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(Long))) {
                tmp_2 = toLongOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().ld())) {
                tmp_2 = toDoubleOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(KeyType))) {
                var tmp0 = values();
                var tmp$ret$0;
                l$ret$1: do {
                  var inductionVariable = 0;
                  var last = tmp0.length;
                  while (inductionVariable < last) {
                    var element = tmp0[inductionVariable];
                    inductionVariable = inductionVariable + 1 | 0;
                    if (equals(element.q2_1, tmp4_safe_receiver, true)) {
                      tmp$ret$0 = element;
                      break l$ret$1;
                    }
                  }
                  tmp$ret$0 = null;
                }
                 while (false);
                tmp_2 = tmp$ret$0;
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().nd())) {
                tmp_2 = tmp4_safe_receiver;
              } else {
                tmp_2 = null;
              }
              var tmp_3 = tmp_2;
              tmp_1 = tmp_3 instanceof KeyType ? tmp_3 : null;
            }

            tmp_0.hau_1 = tmp_1;
            if (this.hau_1 == null) {
              this.iau_1 = null;
              this.m9_1 = 3;
              continue $sm;
            } else {
              var tmp_4 = this;
              tmp_4.jau_1 = this.hau_1;
              this.kau_1 = this.jau_1;
              var tmp_5 = this;
              tmp_5.lau_1 = this.kau_1;
              this.mau_1 = this.lau_1;
              this.m9_1 = 1;
              suspendResult = Companion_instance_4.generate$default(this.mau_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.nau_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.fau_1.ka5(this.nau_1, this.gau_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.iau_1 = suspendResult;
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var tmp1_elvis_lhs = this.iau_1;
            var tmp_6;
            if (tmp1_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Option "keyType" not found.');
            } else {
              tmp_6 = tmp1_elvis_lhs;
            }

            return tmp_6;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerCOROUTINE$20)['<set-state>'] = protoOf($registerCOROUTINE$20).t9;
  protoOf($registerCOROUTINE$20)['<get-state>'] = protoOf($registerCOROUTINE$20).u9;
  protoOf($registerCOROUTINE$20)['<set-exceptionState>'] = protoOf($registerCOROUTINE$20).v9;
  protoOf($registerCOROUTINE$20)['<get-exceptionState>'] = protoOf($registerCOROUTINE$20).w9;
  protoOf($registerCOROUTINE$20)['<set-result>'] = protoOf($registerCOROUTINE$20).x9;
  protoOf($registerCOROUTINE$20)['<get-result>'] = protoOf($registerCOROUTINE$20).y9;
  protoOf($registerCOROUTINE$20)['<set-exception>'] = protoOf($registerCOROUTINE$20).z9;
  protoOf($registerCOROUTINE$20)['<get-exception>'] = protoOf($registerCOROUTINE$20).aa;
  protoOf($registerCOROUTINE$20)['<set-finallyPath>'] = protoOf($registerCOROUTINE$20).ba;
  protoOf($registerCOROUTINE$20)['<get-finallyPath>'] = protoOf($registerCOROUTINE$20).ca;
  protoOf($registerCOROUTINE$20)['<get-context>'] = protoOf($registerCOROUTINE$20).s9;
  function $registerByKeyCOROUTINE$21(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wau_1 = _this__u8e3s4;
    this.xau_1 = key;
    this.yau_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$21).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.zau_1 = Base64Utils_getInstance();
            this.m9_1 = 1;
            suspendResult = this.xau_1.z6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.aav_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.aav_1.k6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.bav_1 = suspendResult;
            this.cav_1 = toByteArray(this.bav_1);
            this.dav_1 = this.zau_1.encodeToBase64Url(this.cav_1);
            this.eav_1 = 'did:jwk:' + this.dav_1;
            this.m9_1 = 3;
            suspendResult = this.xau_1.z6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.fav_1 = suspendResult;
            this.m9_1 = 4;
            suspendResult = this.fav_1.v6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_2(this.eav_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var didDocument = new DidDocument(ARGUMENT_1);
            return new DidResult(this.eav_1, didDocument);
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerByKeyCOROUTINE$21)['<set-state>'] = protoOf($registerByKeyCOROUTINE$21).t9;
  protoOf($registerByKeyCOROUTINE$21)['<get-state>'] = protoOf($registerByKeyCOROUTINE$21).u9;
  protoOf($registerByKeyCOROUTINE$21)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$21).v9;
  protoOf($registerByKeyCOROUTINE$21)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$21).w9;
  protoOf($registerByKeyCOROUTINE$21)['<set-result>'] = protoOf($registerByKeyCOROUTINE$21).x9;
  protoOf($registerByKeyCOROUTINE$21)['<get-result>'] = protoOf($registerByKeyCOROUTINE$21).y9;
  protoOf($registerByKeyCOROUTINE$21)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$21).z9;
  protoOf($registerByKeyCOROUTINE$21)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$21).aa;
  protoOf($registerByKeyCOROUTINE$21)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$21).ba;
  protoOf($registerByKeyCOROUTINE$21)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$21).ca;
  protoOf($registerByKeyCOROUTINE$21)['<get-context>'] = protoOf($registerByKeyCOROUTINE$21).s9;
  function DidJwkRegistrar() {
    LocalRegistrarMethod.call(this, 'jwk');
  }
  protoOf(DidJwkRegistrar).w9r = function (options, $completion) {
    var tmp = new $registerCOROUTINE$20(this, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidJwkRegistrar).ka5 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$21(this, key, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidJwkRegistrar).n9x = function (options) {
    var tmp = DidJwkRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidJwkRegistrar).caj = function (key, options) {
    var tmp = DidJwkRegistrar$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function getIdentifierComponents($this, key, options, $completion) {
    var tmp = new $getIdentifierComponentsCOROUTINE$24($this, key, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function createDid_0($this, identifier, publicKeyJwk) {
    // Inline function 'kotlin.let' call
    var it = 'did:key:' + identifier;
    return new DidResult(it, new DidDocument(secondaryConstructor_3(it, identifier, publicKeyJwk).toMap()));
  }
  function DidKeyRegistrar$registerAsync$slambda(this$0, $options, resultContinuation) {
    this.law_1 = this$0;
    this.maw_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyRegistrar$registerAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidKeyRegistrar$registerAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidKeyRegistrar$registerAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.law_1.w9r(this.maw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidKeyRegistrar$registerAsync$slambda).ia = function (completion) {
    return new DidKeyRegistrar$registerAsync$slambda(this.law_1, this.maw_1, completion);
  };
  function DidKeyRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidKeyRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidKeyRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.vaw_1 = this$0;
    this.waw_1 = $key;
    this.xaw_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyRegistrar$registerByKeyAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidKeyRegistrar$registerByKeyAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidKeyRegistrar$registerByKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.vaw_1.ka5(this.waw_1, this.xaw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidKeyRegistrar$registerByKeyAsync$slambda).ia = function (completion) {
    return new DidKeyRegistrar$registerByKeyAsync$slambda(this.vaw_1, this.waw_1, this.xaw_1, completion);
  };
  function DidKeyRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidKeyRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$22(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gax_1 = _this__u8e3s4;
    this.hax_1 = options;
  }
  protoOf($registerCOROUTINE$22).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            var this_0 = this.hax_1;
            var tmp0_safe_receiver = get_jsonObject(this_0.config).af('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('keyType');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.c4s();
            var tmp_1;
            if (tmp4_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var tmp0_subject = getKClass(KeyType);
              var tmp_2;
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().gd())) {
                tmp_2 = toBoolean(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().jd())) {
                tmp_2 = toIntOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(Long))) {
                tmp_2 = toLongOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().ld())) {
                tmp_2 = toDoubleOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(KeyType))) {
                var tmp0 = values();
                var tmp$ret$0;
                l$ret$1: do {
                  var inductionVariable = 0;
                  var last = tmp0.length;
                  while (inductionVariable < last) {
                    var element = tmp0[inductionVariable];
                    inductionVariable = inductionVariable + 1 | 0;
                    if (equals(element.q2_1, tmp4_safe_receiver, true)) {
                      tmp$ret$0 = element;
                      break l$ret$1;
                    }
                  }
                  tmp$ret$0 = null;
                }
                 while (false);
                tmp_2 = tmp$ret$0;
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().nd())) {
                tmp_2 = tmp4_safe_receiver;
              } else {
                tmp_2 = null;
              }
              var tmp_3 = tmp_2;
              tmp_1 = tmp_3 instanceof KeyType ? tmp_3 : null;
            }

            tmp_0.iax_1 = tmp_1;
            if (this.iax_1 == null) {
              this.jax_1 = null;
              this.m9_1 = 3;
              continue $sm;
            } else {
              var tmp_4 = this;
              tmp_4.kax_1 = this.iax_1;
              this.lax_1 = this.kax_1;
              var tmp_5 = this;
              tmp_5.max_1 = this.lax_1;
              this.nax_1 = this.max_1;
              this.m9_1 = 1;
              suspendResult = Companion_instance_4.generate$default(this.nax_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.oax_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.gax_1.ka5(this.oax_1, this.hax_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.jax_1 = suspendResult;
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var tmp1_elvis_lhs = this.jax_1;
            var tmp_6;
            if (tmp1_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Option "keyType" not found.');
            } else {
              tmp_6 = tmp1_elvis_lhs;
            }

            return tmp_6;
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerCOROUTINE$22)['<set-state>'] = protoOf($registerCOROUTINE$22).t9;
  protoOf($registerCOROUTINE$22)['<get-state>'] = protoOf($registerCOROUTINE$22).u9;
  protoOf($registerCOROUTINE$22)['<set-exceptionState>'] = protoOf($registerCOROUTINE$22).v9;
  protoOf($registerCOROUTINE$22)['<get-exceptionState>'] = protoOf($registerCOROUTINE$22).w9;
  protoOf($registerCOROUTINE$22)['<set-result>'] = protoOf($registerCOROUTINE$22).x9;
  protoOf($registerCOROUTINE$22)['<get-result>'] = protoOf($registerCOROUTINE$22).y9;
  protoOf($registerCOROUTINE$22)['<set-exception>'] = protoOf($registerCOROUTINE$22).z9;
  protoOf($registerCOROUTINE$22)['<get-exception>'] = protoOf($registerCOROUTINE$22).aa;
  protoOf($registerCOROUTINE$22)['<set-finallyPath>'] = protoOf($registerCOROUTINE$22).ba;
  protoOf($registerCOROUTINE$22)['<get-finallyPath>'] = protoOf($registerCOROUTINE$22).ca;
  protoOf($registerCOROUTINE$22)['<get-context>'] = protoOf($registerCOROUTINE$22).s9;
  function $registerByKeyCOROUTINE$23(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xax_1 = _this__u8e3s4;
    this.yax_1 = key;
    this.zax_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$23).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            tmp_0.aay_1 = this.zax_1;
            this.bay_1 = this.aay_1;
            var tmp_1 = this;
            tmp_1.cay_1 = this.bay_1;
            this.day_1 = this.cay_1;
            this.m9_1 = 1;
            suspendResult = this.yax_1.z6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.eay_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = getIdentifierComponents(this.xax_1, this.eay_1, this.day_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.fay_1 = suspendResult;
            this.gay_1 = MultiBaseUtils_instance.u99(this.fay_1.iay_1, this.fay_1.hay_1);
            this.m9_1 = 3;
            suspendResult = this.eay_1.v6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            return createDid_0(this.xax_1, this.gay_1, ARGUMENT);
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerByKeyCOROUTINE$23)['<set-state>'] = protoOf($registerByKeyCOROUTINE$23).t9;
  protoOf($registerByKeyCOROUTINE$23)['<get-state>'] = protoOf($registerByKeyCOROUTINE$23).u9;
  protoOf($registerByKeyCOROUTINE$23)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$23).v9;
  protoOf($registerByKeyCOROUTINE$23)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$23).w9;
  protoOf($registerByKeyCOROUTINE$23)['<set-result>'] = protoOf($registerByKeyCOROUTINE$23).x9;
  protoOf($registerByKeyCOROUTINE$23)['<get-result>'] = protoOf($registerByKeyCOROUTINE$23).y9;
  protoOf($registerByKeyCOROUTINE$23)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$23).z9;
  protoOf($registerByKeyCOROUTINE$23)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$23).aa;
  protoOf($registerByKeyCOROUTINE$23)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$23).ba;
  protoOf($registerByKeyCOROUTINE$23)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$23).ca;
  protoOf($registerByKeyCOROUTINE$23)['<get-context>'] = protoOf($registerByKeyCOROUTINE$23).s9;
  function $getIdentifierComponentsCOROUTINE$24(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oav_1 = _this__u8e3s4;
    this.pav_1 = key;
    this.qav_1 = options;
  }
  protoOf($getIdentifierComponentsCOROUTINE$24).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            var tmp0 = this.qav_1;
            var name = 'useJwkJcsPub';
            var tmp0_safe_receiver = get_jsonObject(tmp0.config).af('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af(name);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.c4s();
            var tmp_1;
            if (tmp4_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var tmp0_subject = PrimitiveClasses_getInstance().gd();
              var tmp_2;
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().gd())) {
                tmp_2 = toBoolean(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().jd())) {
                tmp_2 = toIntOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(Long))) {
                tmp_2 = toLongOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().ld())) {
                tmp_2 = toDoubleOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(KeyType))) {
                var tmp0_0 = values();
                var tmp$ret$0;
                l$ret$1: do {
                  var inductionVariable = 0;
                  var last = tmp0_0.length;
                  while (inductionVariable < last) {
                    var element = tmp0_0[inductionVariable];
                    inductionVariable = inductionVariable + 1 | 0;
                    if (equals(element.q2_1, tmp4_safe_receiver, true)) {
                      tmp$ret$0 = element;
                      break l$ret$1;
                    }
                  }
                  tmp$ret$0 = null;
                }
                 while (false);
                tmp_2 = tmp$ret$0;
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().nd())) {
                tmp_2 = tmp4_safe_receiver;
              } else {
                tmp_2 = null;
              }
              var tmp_3 = tmp_2;
              tmp_1 = (!(tmp_3 == null) ? typeof tmp_3 === 'boolean' : false) ? tmp_3 : null;
            }

            var tmp0_safe_receiver_0 = tmp_1;
            var tmp_4;
            if (tmp0_safe_receiver_0 == null) {
              tmp_4 = null;
            } else {
              var tmp_5;
              if (tmp0_safe_receiver_0) {
                tmp_5 = tmp0_safe_receiver_0;
              } else {
                tmp_5 = null;
              }
              tmp_4 = tmp_5;
            }

            tmp_0.rav_1 = tmp_4;
            if (this.rav_1 == null) {
              this.sav_1 = null;
              this.m9_1 = 2;
              continue $sm;
            } else {
              var tmp_6 = this;
              tmp_6.tav_1 = this.rav_1;
              this.uav_1 = this.tav_1;
              var tmp_7 = this;
              tmp_7.vav_1 = this.uav_1;
              this.wav_1 = this.vav_1;
              this.xav_1 = JsonCanonicalization_instance;
              this.m9_1 = 1;
              suspendResult = JsonCanonicalizationUtils_instance.u98(this.pav_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.yav_1 = suspendResult;
            this.zav_1 = this.xav_1.getCanonicalBytes(this.yav_1);
            this.sav_1 = new IdentifierComponents(_UInt___init__impl__l7qpdl(60241), this.zav_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.aaw_1 = this.sav_1;
            if (this.aaw_1 == null) {
              this.caw_1 = MultiCodecUtils_getInstance().getMultiCodecKeyCode(this.pav_1.keyType);
              this.m9_1 = 3;
              suspendResult = this.pav_1.t6n(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.baw_1 = this.aaw_1;
              this.m9_1 = 4;
              continue $sm;
            }

          case 3:
            var ARGUMENT = suspendResult;
            this.baw_1 = new IdentifierComponents(this.caw_1, ARGUMENT);
            this.m9_1 = 4;
            continue $sm;
          case 4:
            return this.baw_1;
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function DidKeyRegistrar() {
    LocalRegistrarMethod.call(this, 'key');
  }
  protoOf(DidKeyRegistrar).w9r = function (options, $completion) {
    var tmp = new $registerCOROUTINE$22(this, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidKeyRegistrar).ka5 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$23(this, key, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidKeyRegistrar).n9x = function (options) {
    var tmp = DidKeyRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidKeyRegistrar).caj = function (key, options) {
    var tmp = DidKeyRegistrar$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function IdentifierComponents(multiCodecKeyCode, pubKeyBytes) {
    this.hay_1 = multiCodecKeyCode;
    this.iay_1 = pubKeyBytes;
  }
  protoOf(IdentifierComponents).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof IdentifierComponents))
      THROW_CCE();
    if (!(this.hay_1 === other.hay_1))
      return false;
    if (!contentEquals(this.iay_1, other.iay_1))
      return false;
    return true;
  };
  protoOf(IdentifierComponents).hashCode = function () {
    var result = UInt__hashCode_impl_z2mhuw(this.hay_1);
    result = imul(31, result) + contentHashCode(this.iay_1) | 0;
    return result;
  };
  protoOf(IdentifierComponents).toString = function () {
    return 'IdentifierComponents(multiCodecKeyCode=' + new UInt(this.hay_1) + ', pubKeyBytes=' + toString_0(this.iay_1) + ')';
  };
  function registerByDidDocConfig($this, options, didDocConfig, $completion) {
    var tmp = new $registerByDidDocConfigCOROUTINE$27($this, options, didDocConfig, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function getUrlEncodedDomainOrThrow($this, options) {
    // Inline function 'id.walt.did.dids.registrar.dids.DidCreateOptions.get' call
    var tmp0_safe_receiver = get_jsonObject(options.config).af('config');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('domain');
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.c4s();
    var tmp;
    if (tmp4_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_subject = PrimitiveClasses_getInstance().nd();
      var tmp_0;
      if (tmp0_subject.equals(PrimitiveClasses_getInstance().gd())) {
        tmp_0 = toBoolean(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().jd())) {
        tmp_0 = toIntOrNull(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(getKClass(Long))) {
        tmp_0 = toLongOrNull(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().ld())) {
        tmp_0 = toDoubleOrNull(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(getKClass(KeyType))) {
        // Inline function 'id.walt.did.utils.EnumUtils.enumValueIgnoreCase' call
        // Inline function 'kotlin.enumValues' call
        var tmp0 = values();
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var inductionVariable = 0;
          var last = tmp0.length;
          while (inductionVariable < last) {
            var element = tmp0[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            if (equals(element.q2_1, tmp4_safe_receiver, true)) {
              tmp$ret$2 = element;
              break $l$block;
            }
          }
          tmp$ret$2 = null;
        }
        tmp_0 = tmp$ret$2;
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().nd())) {
        tmp_0 = tmp4_safe_receiver;
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : null;
    }
    var tmp0_safe_receiver_0 = tmp;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_3;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(tmp0_safe_receiver_0) > 0) {
        tmp_3 = tmp0_safe_receiver_0;
      } else {
        tmp_3 = null;
      }
      tmp_2 = tmp_3;
    }
    var tmp1_safe_receiver_0 = tmp_2;
    var tmp_4;
    if (tmp1_safe_receiver_0 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_4 = UrlEncoderUtil_getInstance().b9r(tmp1_safe_receiver_0);
    }
    var tmp2_elvis_lhs = tmp_4;
    var tmp_5;
    if (tmp2_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Option "domain" not found.');
    } else {
      tmp_5 = tmp2_elvis_lhs;
    }
    return tmp_5;
  }
  function getPath($this, options) {
    // Inline function 'id.walt.did.dids.registrar.dids.DidCreateOptions.get' call
    var tmp0_safe_receiver = get_jsonObject(options.config).af('config');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('path');
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.c4s();
    var tmp;
    if (tmp4_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_subject = PrimitiveClasses_getInstance().nd();
      var tmp_0;
      if (tmp0_subject.equals(PrimitiveClasses_getInstance().gd())) {
        tmp_0 = toBoolean(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().jd())) {
        tmp_0 = toIntOrNull(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(getKClass(Long))) {
        tmp_0 = toLongOrNull(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().ld())) {
        tmp_0 = toDoubleOrNull(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(getKClass(KeyType))) {
        // Inline function 'id.walt.did.utils.EnumUtils.enumValueIgnoreCase' call
        // Inline function 'kotlin.enumValues' call
        var tmp0 = values();
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var inductionVariable = 0;
          var last = tmp0.length;
          while (inductionVariable < last) {
            var element = tmp0[inductionVariable];
            inductionVariable = inductionVariable + 1 | 0;
            if (equals(element.q2_1, tmp4_safe_receiver, true)) {
              tmp$ret$2 = element;
              break $l$block;
            }
          }
          tmp$ret$2 = null;
        }
        tmp_0 = tmp$ret$2;
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().nd())) {
        tmp_0 = tmp4_safe_receiver;
      } else {
        tmp_0 = null;
      }
      var tmp_1 = tmp_0;
      tmp = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : null;
    }
    var tmp0_safe_receiver_0 = tmp;
    var tmp_2;
    if (tmp0_safe_receiver_0 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_3;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(tmp0_safe_receiver_0) > 0) {
        tmp_3 = tmp0_safe_receiver_0;
      } else {
        tmp_3 = null;
      }
      tmp_2 = tmp_3;
    }
    var tmp1_safe_receiver_0 = tmp_2;
    var tmp_4;
    if (tmp1_safe_receiver_0 == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_5 = split(ExtensionMethods_instance.ensurePrefix(replace(tmp1_safe_receiver_0, '[random-uuid]', UuidUtils_instance.e9a()), '/'), ['/']);
      tmp_4 = joinToString(tmp_5, ':', VOID, VOID, VOID, VOID, DidWebRegistrar$getPath$lambda);
    }
    var tmp2_elvis_lhs = tmp_4;
    return tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  function getDid($this, domain, path) {
    return 'did:web:' + domain + path;
  }
  function DidWebRegistrar$getPath$lambda(part) {
    return UrlEncoderUtil_getInstance().b9r(part);
  }
  function DidWebRegistrar$registerAsync$slambda(this$0, $options, resultContinuation) {
    this.faz_1 = this$0;
    this.gaz_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebRegistrar$registerAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidWebRegistrar$registerAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidWebRegistrar$registerAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.faz_1.w9r(this.gaz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidWebRegistrar$registerAsync$slambda).ia = function (completion) {
    return new DidWebRegistrar$registerAsync$slambda(this.faz_1, this.gaz_1, completion);
  };
  function DidWebRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidWebRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.paz_1 = this$0;
    this.qaz_1 = $key;
    this.raz_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebRegistrar$registerByKeyAsync$slambda).v9r = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidWebRegistrar$registerByKeyAsync$slambda).zb = function ($completion) {
    return this.v9r($completion);
  };
  protoOf(DidWebRegistrar$registerByKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.paz_1.ka5(this.qaz_1, this.raz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidWebRegistrar$registerByKeyAsync$slambda).ia = function (completion) {
    return new DidWebRegistrar$registerByKeyAsync$slambda(this.paz_1, this.qaz_1, this.raz_1, completion);
  };
  function DidWebRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidWebRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$25(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ab0_1 = _this__u8e3s4;
    this.bb0_1 = options;
  }
  protoOf($registerCOROUTINE$25).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 7;
            this.cb0_1 = this.bb0_1.didDocConfig;
            if (this.cb0_1 == null) {
              this.db0_1 = null;
              this.m9_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.eb0_1 = this.cb0_1;
              this.fb0_1 = this.eb0_1;
              var tmp_1 = this;
              tmp_1.gb0_1 = this.fb0_1;
              this.hb0_1 = this.gb0_1;
              this.m9_1 = 1;
              suspendResult = registerByDidDocConfig(this.ab0_1, this.bb0_1, this.bb0_1.didDocConfig, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.db0_1 = suspendResult;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.ib0_1 = this.db0_1;
            if (this.ib0_1 == null) {
              var tmp_2 = this;
              var this_0 = this.bb0_1;
              var tmp0_safe_receiver = get_jsonObject(this_0.config).af('config');
              var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
              var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('keyType');
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
              var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.c4s();
              var tmp_3;
              if (tmp4_safe_receiver == null) {
                tmp_3 = null;
              } else {
                var tmp0_subject = getKClass(KeyType);
                var tmp_4;
                if (tmp0_subject.equals(PrimitiveClasses_getInstance().gd())) {
                  tmp_4 = toBoolean(tmp4_safe_receiver);
                } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().jd())) {
                  tmp_4 = toIntOrNull(tmp4_safe_receiver);
                } else if (tmp0_subject.equals(getKClass(Long))) {
                  tmp_4 = toLongOrNull(tmp4_safe_receiver);
                } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().ld())) {
                  tmp_4 = toDoubleOrNull(tmp4_safe_receiver);
                } else if (tmp0_subject.equals(getKClass(KeyType))) {
                  var tmp0 = values();
                  var tmp$ret$0;
                  l$ret$1: do {
                    var inductionVariable = 0;
                    var last = tmp0.length;
                    while (inductionVariable < last) {
                      var element = tmp0[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      if (equals(element.q2_1, tmp4_safe_receiver, true)) {
                        tmp$ret$0 = element;
                        break l$ret$1;
                      }
                    }
                    tmp$ret$0 = null;
                  }
                   while (false);
                  tmp_4 = tmp$ret$0;
                } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().nd())) {
                  tmp_4 = tmp4_safe_receiver;
                } else {
                  tmp_4 = null;
                }
                var tmp_5 = tmp_4;
                tmp_3 = tmp_5 instanceof KeyType ? tmp_5 : null;
              }
              tmp_2.kb0_1 = tmp_3;
              if (this.kb0_1 == null) {
                this.lb0_1 = null;
                this.m9_1 = 5;
                continue $sm;
              } else {
                var tmp_6 = this;
                tmp_6.mb0_1 = this.kb0_1;
                this.nb0_1 = this.mb0_1;
                var tmp_7 = this;
                tmp_7.ob0_1 = this.nb0_1;
                this.pb0_1 = this.ob0_1;
                this.m9_1 = 3;
                suspendResult = Companion_instance_4.generate$default(this.pb0_1, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.jb0_1 = this.ib0_1;
              this.m9_1 = 6;
              continue $sm;
            }

          case 3:
            this.qb0_1 = suspendResult;
            this.m9_1 = 4;
            suspendResult = this.ab0_1.ka5(this.qb0_1, this.bb0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.lb0_1 = suspendResult;
            this.m9_1 = 5;
            continue $sm;
          case 5:
            this.jb0_1 = this.lb0_1;
            this.m9_1 = 6;
            continue $sm;
          case 6:
            var tmp3_elvis_lhs = this.jb0_1;
            var tmp_8;
            if (tmp3_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Option "keyType" not found.');
            } else {
              tmp_8 = tmp3_elvis_lhs;
            }

            return tmp_8;
          case 7:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 7) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerCOROUTINE$25)['<set-state>'] = protoOf($registerCOROUTINE$25).t9;
  protoOf($registerCOROUTINE$25)['<get-state>'] = protoOf($registerCOROUTINE$25).u9;
  protoOf($registerCOROUTINE$25)['<set-exceptionState>'] = protoOf($registerCOROUTINE$25).v9;
  protoOf($registerCOROUTINE$25)['<get-exceptionState>'] = protoOf($registerCOROUTINE$25).w9;
  protoOf($registerCOROUTINE$25)['<set-result>'] = protoOf($registerCOROUTINE$25).x9;
  protoOf($registerCOROUTINE$25)['<get-result>'] = protoOf($registerCOROUTINE$25).y9;
  protoOf($registerCOROUTINE$25)['<set-exception>'] = protoOf($registerCOROUTINE$25).z9;
  protoOf($registerCOROUTINE$25)['<get-exception>'] = protoOf($registerCOROUTINE$25).aa;
  protoOf($registerCOROUTINE$25)['<set-finallyPath>'] = protoOf($registerCOROUTINE$25).ba;
  protoOf($registerCOROUTINE$25)['<get-finallyPath>'] = protoOf($registerCOROUTINE$25).ca;
  protoOf($registerCOROUTINE$25)['<get-context>'] = protoOf($registerCOROUTINE$25).s9;
  function $registerByKeyCOROUTINE$26(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zb0_1 = _this__u8e3s4;
    this.ab1_1 = key;
    this.bb1_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$26).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.cb1_1 = getUrlEncodedDomainOrThrow(this.zb0_1, this.bb1_1);
            this.db1_1 = getPath(this.zb0_1, this.bb1_1);
            this.eb1_1 = getDid(this.zb0_1, this.cb1_1, this.db1_1);
            this.m9_1 = 1;
            suspendResult = this.ab1_1.e6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.fb1_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.ab1_1.z6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.gb1_1 = suspendResult;
            this.m9_1 = 3;
            suspendResult = this.gb1_1.v6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_4(this.eb1_1, this.fb1_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var ARGUMENT_2 = new DidDocument(ARGUMENT_1);
            return new DidResult(this.eb1_1, ARGUMENT_2);
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerByKeyCOROUTINE$26)['<set-state>'] = protoOf($registerByKeyCOROUTINE$26).t9;
  protoOf($registerByKeyCOROUTINE$26)['<get-state>'] = protoOf($registerByKeyCOROUTINE$26).u9;
  protoOf($registerByKeyCOROUTINE$26)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$26).v9;
  protoOf($registerByKeyCOROUTINE$26)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$26).w9;
  protoOf($registerByKeyCOROUTINE$26)['<set-result>'] = protoOf($registerByKeyCOROUTINE$26).x9;
  protoOf($registerByKeyCOROUTINE$26)['<get-result>'] = protoOf($registerByKeyCOROUTINE$26).y9;
  protoOf($registerByKeyCOROUTINE$26)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$26).z9;
  protoOf($registerByKeyCOROUTINE$26)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$26).aa;
  protoOf($registerByKeyCOROUTINE$26)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$26).ba;
  protoOf($registerByKeyCOROUTINE$26)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$26).ca;
  protoOf($registerByKeyCOROUTINE$26)['<get-context>'] = protoOf($registerByKeyCOROUTINE$26).s9;
  function $registerByDidDocConfigCOROUTINE$27(_this__u8e3s4, options, didDocConfig, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ray_1 = _this__u8e3s4;
    this.say_1 = options;
    this.tay_1 = didDocConfig;
  }
  protoOf($registerByDidDocConfigCOROUTINE$27).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.uay_1 = getUrlEncodedDomainOrThrow(this.ray_1, this.say_1);
            this.vay_1 = getPath(this.ray_1, this.say_1);
            this.way_1 = getDid(this.ray_1, this.uay_1, this.vay_1);
            this.m9_1 = 1;
            suspendResult = this.tay_1.dah(this.way_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new DidResult(this.way_1, ARGUMENT);
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function DidWebRegistrar() {
    LocalRegistrarMethod.call(this, 'web');
  }
  protoOf(DidWebRegistrar).w9r = function (options, $completion) {
    var tmp = new $registerCOROUTINE$25(this, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidWebRegistrar).ka5 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$26(this, key, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidWebRegistrar).n9x = function (options) {
    var tmp = DidWebRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebRegistrar).caj = function (key, options) {
    var tmp = DidWebRegistrar$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.pb1_1 = this$0;
    this.qb1_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$resolveAsync$slambda).m9t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.m9t($completion);
  };
  protoOf(DidResolver$resolveAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.pb1_1.n9t(this.qb1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidResolver$resolveAsync$slambda).ia = function (completion) {
    return new DidResolver$resolveAsync$slambda(this.pb1_1, this.qb1_1, completion);
  };
  function DidResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.m9t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.zb1_1 = this$0;
    this.ab2_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$resolveToKeysAsync$slambda).x9t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.x9t($completion);
  };
  protoOf(DidResolver$resolveToKeysAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.zb1_1.y9t(this.ab2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidResolver$resolveToKeysAsync$slambda).ia = function (completion) {
    return new DidResolver$resolveToKeysAsync$slambda(this.zb1_1, this.ab2_1, completion);
  };
  function DidResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.jb2_1 = this$0;
    this.kb2_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$resolveToKeyAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(DidResolver$resolveToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.jb2_1.r9u(this.kb2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidResolver$resolveToKeyAsync$slambda).ia = function (completion) {
    return new DidResolver$resolveToKeyAsync$slambda(this.jb2_1, this.kb2_1, completion);
  };
  function DidResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.tb2_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$getSupportedMethodsAsync$slambda).xa1 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.xa1($completion);
  };
  protoOf(DidResolver$getSupportedMethodsAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.tb2_1.b9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidResolver$getSupportedMethodsAsync$slambda).ia = function (completion) {
    return new DidResolver$getSupportedMethodsAsync$slambda(this.tb2_1, completion);
  };
  function DidResolver$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver() {
  }
  function DidResolverRegistrations() {
  }
  protoOf(DidResolverRegistrations).ub2 = function (uniresolverUrl) {
    var tmp = new LocalResolver();
    return setOf_0([tmp, new UniresolverResolver(uniresolverUrl == null ? 'https://dev.uniresolver.io/1.0' : uniresolverUrl)]);
  };
  protoOf(DidResolverRegistrations).curatedDidResolvers = function (uniresolverUrl, $super) {
    uniresolverUrl = uniresolverUrl === VOID ? null : uniresolverUrl;
    return $super === VOID ? this.ub2(uniresolverUrl) : $super.ub2.call(this, uniresolverUrl);
  };
  var DidResolverRegistrations_instance;
  function DidResolverRegistrations_getInstance() {
    return DidResolverRegistrations_instance;
  }
  function getResolverForDid_0($this, did) {
    var method = DidUtils_getInstance().methodFromDid(did);
    var tmp0_elvis_lhs = $this.xb2_1.k2(method);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Local resolver has no resolver for method: ' + did);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function LocalResolver$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.b3j(tmp, LocalResolver$http$lambda$lambda);
    return Unit_instance;
  }
  function LocalResolver$http$lambda$lambda($this$install) {
    json($this$install, Companion_getInstance_46().json);
    return Unit_instance;
  }
  function LocalResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.gb3_1 = this$0;
    this.hb3_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$resolveAsync$slambda).m9t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.m9t($completion);
  };
  protoOf(LocalResolver$resolveAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.gb3_1.n9t(this.hb3_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalResolver$resolveAsync$slambda).ia = function (completion) {
    return new LocalResolver$resolveAsync$slambda(this.gb3_1, this.hb3_1, completion);
  };
  function LocalResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.m9t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.qb3_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$getSupportedMethodsAsync$slambda).xa1 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.xa1($completion);
  };
  protoOf(LocalResolver$getSupportedMethodsAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.qb3_1.b9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalResolver$getSupportedMethodsAsync$slambda).ia = function (completion) {
    return new LocalResolver$getSupportedMethodsAsync$slambda(this.qb3_1, completion);
  };
  function LocalResolver$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.zb3_1 = this$0;
    this.ab4_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$resolveToKeysAsync$slambda).x9t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.x9t($completion);
  };
  protoOf(LocalResolver$resolveToKeysAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.zb3_1.y9t(this.ab4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalResolver$resolveToKeysAsync$slambda).ia = function (completion) {
    return new LocalResolver$resolveToKeysAsync$slambda(this.zb3_1, this.ab4_1, completion);
  };
  function LocalResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.jb4_1 = this$0;
    this.kb4_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$resolveToKeyAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(LocalResolver$resolveToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.jb4_1.r9u(this.kb4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalResolver$resolveToKeyAsync$slambda).ia = function (completion) {
    return new LocalResolver$resolveToKeyAsync$slambda(this.jb4_1, this.kb4_1, completion);
  };
  function LocalResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$28(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tb4_1 = _this__u8e3s4;
    this.ub4_1 = did;
  }
  protoOf($resolveCOROUTINE$28).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = getResolverForDid_0(this.tb4_1, this.ub4_1).vb4(this.ub4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.zo_1;
            var tmp_0;
            if (_Result___get_isSuccess__impl__sndoy8(this_0)) {
              var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
              var value = ((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE()).toJsonObject();
              tmp_0 = _Result___init__impl__xyqfz8(value);
            } else {
              tmp_0 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this_0));
            }

            return new Result(tmp_0);
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveCOROUTINE$28)['<set-state>'] = protoOf($resolveCOROUTINE$28).t9;
  protoOf($resolveCOROUTINE$28)['<get-state>'] = protoOf($resolveCOROUTINE$28).u9;
  protoOf($resolveCOROUTINE$28)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$28).v9;
  protoOf($resolveCOROUTINE$28)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$28).w9;
  protoOf($resolveCOROUTINE$28)['<set-result>'] = protoOf($resolveCOROUTINE$28).x9;
  protoOf($resolveCOROUTINE$28)['<get-result>'] = protoOf($resolveCOROUTINE$28).y9;
  protoOf($resolveCOROUTINE$28)['<set-exception>'] = protoOf($resolveCOROUTINE$28).z9;
  protoOf($resolveCOROUTINE$28)['<get-exception>'] = protoOf($resolveCOROUTINE$28).aa;
  protoOf($resolveCOROUTINE$28)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$28).ba;
  protoOf($resolveCOROUTINE$28)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$28).ca;
  protoOf($resolveCOROUTINE$28)['<get-context>'] = protoOf($resolveCOROUTINE$28).s9;
  function LocalResolver() {
    this.vb2_1 = 'walt.id local resolver';
    var tmp = this;
    tmp.wb2_1 = HttpClient(LocalResolver$http$lambda);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = listOf([new DidJwkResolver(), new DidWebResolver(this.wb2_1), new DidKeyResolver(), new DidEbsiResolver(this.wb2_1), new DidCheqdResolver()]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp$ret$0 = element.method;
      destination.n2(tmp$ret$0, element);
    }
    tmp_0.xb2_1 = toMutableMap(destination);
  }
  protoOf(LocalResolver).s2 = function () {
    return this.vb2_1;
  };
  protoOf(LocalResolver).deactivateMethod = function (method) {
    this.xb2_1.o2(method);
  };
  protoOf(LocalResolver).b9w = function ($completion) {
    // Inline function 'kotlin.Companion.success' call
    var value = this.xb2_1.l2();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
    return new Result(tmp$ret$0);
  };
  protoOf(LocalResolver).n9t = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$28(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver).r9u = function (did, $completion) {
    var tmp = getResolverForDid_0(this, did).r9u(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(LocalResolver).y9t = function (did, $completion) {
    var tmp = getResolverForDid_0(this, did).y9t(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(LocalResolver).r9x = function (did) {
    var tmp = LocalResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolver).da3 = function () {
    var tmp = LocalResolver$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolver).s9x = function (did) {
    var tmp = LocalResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolver).u9x = function (did) {
    var tmp = LocalResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function Companion_43() {
    this.DEFAULT_RESOLVER_URL = 'https://dev.uniresolver.io/1.0';
  }
  protoOf(Companion_43).wb4 = function () {
    return this.DEFAULT_RESOLVER_URL;
  };
  var Companion_instance_49;
  function Companion_getInstance_45() {
    return Companion_instance_49;
  }
  function getMethods_0($this, $completion) {
    var tmp = new $getMethodsCOROUTINE$33($this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function UniresolverResolver$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.b3j(tmp, UniresolverResolver$http$lambda$lambda);
    var tmp_0 = get_HttpTimeout();
    $this$HttpClient.b3j(tmp_0, UniresolverResolver$http$lambda$lambda_0);
    return Unit_instance;
  }
  function UniresolverResolver$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function UniresolverResolver$http$lambda$lambda_0($this$install) {
    $this$install.e47(new Long(30000, 0));
    return Unit_instance;
  }
  function UniresolverResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.eb6_1 = this$0;
    this.fb6_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$resolveAsync$slambda).m9t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.m9t($completion);
  };
  protoOf(UniresolverResolver$resolveAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.eb6_1.n9t(this.fb6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(UniresolverResolver$resolveAsync$slambda).ia = function (completion) {
    return new UniresolverResolver$resolveAsync$slambda(this.eb6_1, this.fb6_1, completion);
  };
  function UniresolverResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new UniresolverResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.m9t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniresolverResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.qb6_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$getSupportedMethodsAsync$slambda).xa1 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.xa1($completion);
  };
  protoOf(UniresolverResolver$getSupportedMethodsAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.qb6_1.b9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(UniresolverResolver$getSupportedMethodsAsync$slambda).ia = function (completion) {
    return new UniresolverResolver$getSupportedMethodsAsync$slambda(this.qb6_1, completion);
  };
  function UniresolverResolver$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniresolverResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa1($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniresolverResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.zb6_1 = this$0;
    this.ab7_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$resolveToKeysAsync$slambda).x9t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.x9t($completion);
  };
  protoOf(UniresolverResolver$resolveToKeysAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.zb6_1.y9t(this.ab7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(UniresolverResolver$resolveToKeysAsync$slambda).ia = function (completion) {
    return new UniresolverResolver$resolveToKeysAsync$slambda(this.zb6_1, this.ab7_1, completion);
  };
  function UniresolverResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new UniresolverResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniresolverResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.jb7_1 = this$0;
    this.kb7_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$resolveToKeyAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(UniresolverResolver$resolveToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.jb7_1.r9u(this.kb7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(UniresolverResolver$resolveToKeyAsync$slambda).ia = function (completion) {
    return new UniresolverResolver$resolveToKeyAsync$slambda(this.jb7_1, this.kb7_1, completion);
  };
  function UniresolverResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new UniresolverResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getSupportedMethodsCOROUTINE$29(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tb7_1 = _this__u8e3s4;
  }
  protoOf($getSupportedMethodsCOROUTINE$29).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.ub7_1 = this.tb7_1;
            this.vb7_1 = this.ub7_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.xb7_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.yb7_1 = this.vb7_1;
            this.zb7_1 = this.yb7_1;
            this.m9_1 = 1;
            suspendResult = getMethods_0(this.zb7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = lazyOf(ARGUMENT);
            var tmp1 = ARGUMENT_0.z();
            var tmp_3 = this;
            this.xb7_1;
            tmp_3.wb7_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.wb7_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.wb7_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 3) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($getSupportedMethodsCOROUTINE$29)['<set-state>'] = protoOf($getSupportedMethodsCOROUTINE$29).t9;
  protoOf($getSupportedMethodsCOROUTINE$29)['<get-state>'] = protoOf($getSupportedMethodsCOROUTINE$29).u9;
  protoOf($getSupportedMethodsCOROUTINE$29)['<set-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$29).v9;
  protoOf($getSupportedMethodsCOROUTINE$29)['<get-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$29).w9;
  protoOf($getSupportedMethodsCOROUTINE$29)['<set-result>'] = protoOf($getSupportedMethodsCOROUTINE$29).x9;
  protoOf($getSupportedMethodsCOROUTINE$29)['<get-result>'] = protoOf($getSupportedMethodsCOROUTINE$29).y9;
  protoOf($getSupportedMethodsCOROUTINE$29)['<set-exception>'] = protoOf($getSupportedMethodsCOROUTINE$29).z9;
  protoOf($getSupportedMethodsCOROUTINE$29)['<get-exception>'] = protoOf($getSupportedMethodsCOROUTINE$29).aa;
  protoOf($getSupportedMethodsCOROUTINE$29)['<set-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$29).ba;
  protoOf($getSupportedMethodsCOROUTINE$29)['<get-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$29).ca;
  protoOf($getSupportedMethodsCOROUTINE$29)['<get-context>'] = protoOf($getSupportedMethodsCOROUTINE$29).s9;
  function $resolveCOROUTINE$30(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ib8_1 = _this__u8e3s4;
    this.jb8_1 = did;
  }
  protoOf($resolveCOROUTINE$30).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 10;
            var tmp_0 = this;
            tmp_0.kb8_1 = this.ib8_1;
            this.lb8_1 = this.kb8_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.nb8_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.ob8_1 = this.lb8_1;
            this.pb8_1 = this.ob8_1;
            var tmp_3 = this;
            tmp_3.qb8_1 = this.pb8_1.hb6_1;
            var tmp_4 = this;
            tmp_4.rb8_1 = this.pb8_1.resolverUrl + '/identifiers/' + this.jb8_1;
            this.sb8_1 = this.qb8_1;
            this.tb8_1 = this.rb8_1;
            var tmp_5 = this;
            tmp_5.ub8_1 = this.sb8_1;
            this.vb8_1 = this.ub8_1;
            var tmp_6 = this;
            tmp_6.wb8_1 = this.vb8_1;
            var tmp_7 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.tb8_1);
            tmp_7.xb8_1 = this_0;
            this.yb8_1 = this.wb8_1;
            this.zb8_1 = this.xb8_1;
            this.zb8_1.v3h_1 = Companion_getInstance().o2z_1;
            var tmp_8 = this;
            tmp_8.ab9_1 = this.yb8_1;
            var tmp_9 = this;
            tmp_9.bb9_1 = this.zb8_1;
            this.cb9_1 = this.ab9_1;
            this.db9_1 = this.bb9_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.db9_1, this.cb9_1)).d4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.eb9_1 = suspendResult;
            var tmp_10 = this;
            this.nb8_1;
            var value = this.eb9_1;
            tmp_10.mb8_1 = _Result___init__impl__xyqfz8(value);
            this.n9_1 = 10;
            this.m9_1 = 3;
            continue $sm;
          case 2:
            this.n9_1 = 10;
            var tmp_11 = this.p9_1;
            if (tmp_11 instanceof Error) {
              this.fb9_1 = this.p9_1;
              var tmp_12 = this;
              var exception = this.fb9_1;
              tmp_12.mb8_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.m9_1 = 3;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            this.n9_1 = 10;
            this.gb9_1 = this.mb8_1;
            this.hb9_1 = this.gb9_1;
            if (_Result___get_isSuccess__impl__sndoy8(this.hb9_1)) {
              var tmp_13 = this;
              tmp_13.jb9_1 = Companion_instance_2;
              var tmp_14 = this;
              var tmp_15 = _Result___get_value__impl__bjfvqg(this.hb9_1);
              tmp_14.kb9_1 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
              this.lb9_1 = this.kb9_1;
              var tmp_16 = this;
              tmp_16.mb9_1 = this.ib8_1;
              this.nb9_1 = this.mb9_1;
              this.n9_1 = 5;
              var tmp_17 = this;
              tmp_17.pb9_1 = Companion_instance_2;
              var tmp_18 = this;
              tmp_18.qb9_1 = this.nb9_1;
              this.rb9_1 = this.qb9_1;
              var tmp_19 = this;
              tmp_19.sb9_1 = this.lb9_1;
              this.tb9_1 = this.sb9_1;
              this.m9_1 = 4;
              var tmp_20 = this.tb9_1.c3l();
              var tmp_21 = getKClass(JsonObject);
              var tmp_22;
              try {
                tmp_22 = createKType(getKClass(JsonObject), arrayOf([]), false);
              } catch ($p) {
                var tmp_23;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_23 = null;
                } else {
                  throw $p;
                }
                tmp_22 = tmp_23;
              }
              suspendResult = tmp_20.f3k(new TypeInfo(tmp_21, tmp_22), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ib9_1 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this.hb9_1));
              this.m9_1 = 9;
              continue $sm;
            }

          case 4:
            var tmp_24 = this;
            tmp_24.ub9_1 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp_25 = this;
            this.pb9_1;
            var value_0 = this.ub9_1;
            tmp_25.ob9_1 = _Result___init__impl__xyqfz8(value_0);
            this.n9_1 = 10;
            this.m9_1 = 6;
            continue $sm;
          case 5:
            this.n9_1 = 10;
            var tmp_26 = this.p9_1;
            if (tmp_26 instanceof Error) {
              this.vb9_1 = this.p9_1;
              var tmp_27 = this;
              var exception_0 = this.vb9_1;
              tmp_27.ob9_1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
              this.m9_1 = 6;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 6:
            this.n9_1 = 10;
            this.wb9_1 = this.ob9_1;
            this.xb9_1 = this.wb9_1;
            this.yb9_1 = Result__exceptionOrNull_impl_p6xea9(this.xb9_1);
            if (this.yb9_1 == null) {
              var tmp_28 = this;
              var tmp_29 = _Result___get_value__impl__bjfvqg(this.xb9_1);
              tmp_28.zb9_1 = (tmp_29 == null ? true : !(tmp_29 == null)) ? tmp_29 : THROW_CCE();
              this.m9_1 = 8;
              continue $sm;
            } else {
              var tmp_30 = this;
              tmp_30.aba_1 = this.yb9_1;
              this.bba_1 = this.aba_1;
              this.cba_1 = this.lb9_1.b35().toString();
              this.m9_1 = 7;
              suspendResult = bodyAsText(this.lb9_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 7:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = 'HTTP response (status ' + this.cba_1 + ') for resolving did ' + this.jb8_1 + ' is not JSON, body: ' + ARGUMENT;
            var tmp_31 = this;
            throw RuntimeException_init_$Create$(ARGUMENT_0, this.bba_1);
          case 8:
            var tmp1 = this.zb9_1;
            var tmp_32 = this;
            this.jb9_1;
            tmp_32.ib9_1 = _Result___init__impl__xyqfz8(tmp1);
            this.m9_1 = 9;
            continue $sm;
          case 9:
            return new Result(this.ib9_1);
          case 10:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 10) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveCOROUTINE$30)['<set-state>'] = protoOf($resolveCOROUTINE$30).t9;
  protoOf($resolveCOROUTINE$30)['<get-state>'] = protoOf($resolveCOROUTINE$30).u9;
  protoOf($resolveCOROUTINE$30)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$30).v9;
  protoOf($resolveCOROUTINE$30)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$30).w9;
  protoOf($resolveCOROUTINE$30)['<set-result>'] = protoOf($resolveCOROUTINE$30).x9;
  protoOf($resolveCOROUTINE$30)['<get-result>'] = protoOf($resolveCOROUTINE$30).y9;
  protoOf($resolveCOROUTINE$30)['<set-exception>'] = protoOf($resolveCOROUTINE$30).z9;
  protoOf($resolveCOROUTINE$30)['<get-exception>'] = protoOf($resolveCOROUTINE$30).aa;
  protoOf($resolveCOROUTINE$30)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$30).ba;
  protoOf($resolveCOROUTINE$30)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$30).ca;
  protoOf($resolveCOROUTINE$30)['<get-context>'] = protoOf($resolveCOROUTINE$30).s9;
  function $resolveToKeyCOROUTINE$31(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lba_1 = _this__u8e3s4;
    this.mba_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$31).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.lba_1.y9t(this.mba_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.zo_1;
            var tmp_0;
            if (_Result___get_isSuccess__impl__sndoy8(this_0)) {
              var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
              var keys = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              var tmp0_elvis_lhs = firstOrNull(keys);
              var tmp_2;
              if (tmp0_elvis_lhs == null) {
                throw Exception_init_$Create$('No verification material found.');
              } else {
                tmp_2 = tmp0_elvis_lhs;
              }
              var value = tmp_2;
              tmp_0 = _Result___init__impl__xyqfz8(value);
            } else {
              tmp_0 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this_0));
            }

            return new Result(tmp_0);
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveToKeyCOROUTINE$31)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$31).t9;
  protoOf($resolveToKeyCOROUTINE$31)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$31).u9;
  protoOf($resolveToKeyCOROUTINE$31)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$31).v9;
  protoOf($resolveToKeyCOROUTINE$31)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$31).w9;
  protoOf($resolveToKeyCOROUTINE$31)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$31).x9;
  protoOf($resolveToKeyCOROUTINE$31)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$31).y9;
  protoOf($resolveToKeyCOROUTINE$31)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$31).z9;
  protoOf($resolveToKeyCOROUTINE$31)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$31).aa;
  protoOf($resolveToKeyCOROUTINE$31)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$31).ba;
  protoOf($resolveToKeyCOROUTINE$31)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$31).ca;
  protoOf($resolveToKeyCOROUTINE$31)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$31).s9;
  function $resolveToKeysCOROUTINE$32(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vba_1 = _this__u8e3s4;
    this.wba_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$32).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 9;
            this.m9_1 = 1;
            suspendResult = this.vba_1.n9t(this.wba_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.xba_1 = suspendResult.zo_1;
            suspendResult = new Result(this.xba_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.yba_1 = suspendResult.zo_1;
            this.zba_1 = this.yba_1;
            this.abb_1 = Result__exceptionOrNull_impl_p6xea9(this.zba_1);
            if (this.abb_1 == null) {
              var tmp_0 = this;
              var tmp_1 = _Result___get_value__impl__bjfvqg(this.zba_1);
              tmp_0.cbb_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              this.dbb_1 = this.cbb_1;
              this.ebb_1 = VerificationMaterial_getInstance().getAll(this.dbb_1);
              if (this.ebb_1 == null) {
                this.fbb_1 = null;
                this.m9_1 = 7;
                continue $sm;
              } else {
                var tmp_2 = this;
                tmp_2.gbb_1 = this.ebb_1;
                this.hbb_1 = this.gbb_1;
                var tmp_3 = this;
                tmp_3.ibb_1 = this.hbb_1;
                this.jbb_1 = this.ibb_1;
                var tmp_4 = this;
                tmp_4.kbb_1 = this.jbb_1;
                this.lbb_1 = this.kbb_1;
                var tmp_5 = this;
                tmp_5.mbb_1 = this.lbb_1;
                var tmp_6 = this;
                tmp_6.nbb_1 = ArrayList_init_$Create$();
                this.obb_1 = this.mbb_1;
                this.pbb_1 = this.nbb_1;
                var tmp_7 = this;
                tmp_7.qbb_1 = this.obb_1;
                this.rbb_1 = this.qbb_1;
                this.sbb_1 = this.rbb_1.p();
                this.m9_1 = 3;
                continue $sm;
              }
            } else {
              var tmp_8 = this;
              var exception = this.abb_1;
              tmp_8.bbb_1 = new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
              this.m9_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.sbb_1.q()) {
              this.m9_1 = 6;
              continue $sm;
            }

            this.tbb_1 = this.sbb_1.r();
            var tmp_9 = this;
            tmp_9.ubb_1 = this.tbb_1;
            this.vbb_1 = this.ubb_1;
            var tmp_10 = this;
            tmp_10.wbb_1 = this.vbb_1;
            this.xbb_1 = this.wbb_1;
            this.m9_1 = 4;
            suspendResult = KeyMaterial_instance.ybb(this.xbb_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 5;
            continue $sm;
          case 4:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 5;
            continue $sm;
          case 5:
            var this_0 = suspendResult.zo_1;
            var tmp_11;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_11 = null;
            } else {
              var tmp_12 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_11 = (tmp_12 == null ? true : !(tmp_12 == null)) ? tmp_12 : THROW_CCE();
            }

            var tmp0_safe_receiver = tmp_11;
            if (tmp0_safe_receiver == null)
              null;
            else {
              this.pbb_1.n(tmp0_safe_receiver);
            }

            this.m9_1 = 3;
            continue $sm;
          case 6:
            var ARGUMENT = this.pbb_1;
            var keys = toSet(ARGUMENT);
            var tmp_13 = this;
            var tmp_14;
            if (!keys.h()) {
              tmp_14 = _Result___init__impl__xyqfz8(keys);
            } else {
              var exception_0 = Exception_init_$Create$('Could not convert verification materials to keys.');
              tmp_14 = _Result___init__impl__xyqfz8(createFailure(exception_0));
            }

            tmp_13.fbb_1 = new Result(tmp_14);
            this.m9_1 = 7;
            continue $sm;
          case 7:
            var tmp1_elvis_lhs = this.fbb_1;
            var tmp_15 = this;
            var tmp_16;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = Exception_init_$Create$('No verification material found.');
              tmp_16 = _Result___init__impl__xyqfz8(createFailure(exception_1));
            } else {
              tmp_16 = tmp1_elvis_lhs.zo_1;
            }

            tmp_15.bbb_1 = new Result(tmp_16);
            this.m9_1 = 8;
            continue $sm;
          case 8:
            return this.bbb_1;
          case 9:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 9) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveToKeysCOROUTINE$32)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$32).t9;
  protoOf($resolveToKeysCOROUTINE$32)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$32).u9;
  protoOf($resolveToKeysCOROUTINE$32)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$32).v9;
  protoOf($resolveToKeysCOROUTINE$32)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$32).w9;
  protoOf($resolveToKeysCOROUTINE$32)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$32).x9;
  protoOf($resolveToKeysCOROUTINE$32)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$32).y9;
  protoOf($resolveToKeysCOROUTINE$32)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$32).z9;
  protoOf($resolveToKeysCOROUTINE$32)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$32).aa;
  protoOf($resolveToKeysCOROUTINE$32)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$32).ba;
  protoOf($resolveToKeysCOROUTINE$32)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$32).ca;
  protoOf($resolveToKeysCOROUTINE$32)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$32).s9;
  function $getMethodsCOROUTINE$33(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fb5_1 = _this__u8e3s4;
  }
  protoOf($getMethodsCOROUTINE$33).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.gb5_1 = this.fb5_1.hb6_1;
            var tmp_1 = this;
            tmp_1.hb5_1 = this.fb5_1.resolverUrl + '/methods';
            this.ib5_1 = this.gb5_1;
            this.jb5_1 = this.hb5_1;
            var tmp_2 = this;
            tmp_2.kb5_1 = this.ib5_1;
            this.lb5_1 = this.kb5_1;
            var tmp_3 = this;
            tmp_3.mb5_1 = this.lb5_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.jb5_1);
            tmp_4.nb5_1 = this_0;
            this.ob5_1 = this.mb5_1;
            this.pb5_1 = this.nb5_1;
            this.pb5_1.v3h_1 = Companion_getInstance().o2z_1;
            var tmp_5 = this;
            tmp_5.qb5_1 = this.ob5_1;
            var tmp_6 = this;
            tmp_6.rb5_1 = this.pb5_1;
            this.sb5_1 = this.qb5_1;
            this.tb5_1 = this.rb5_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.tb5_1, this.sb5_1)).d4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ub5_1 = suspendResult;
            this.vb5_1 = this.ub5_1;
            this.m9_1 = 2;
            var tmp_7 = this.vb5_1.c3l();
            var tmp_8 = getKClass(JsonArray);
            var tmp_9;
            try {
              tmp_9 = createKType(getKClass(JsonArray), arrayOf([]), false);
            } catch ($p) {
              var tmp_10;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_10 = null;
              } else {
                throw $p;
              }
              tmp_9 = tmp_10;
            }

            suspendResult = tmp_7.f3k(new TypeInfo(tmp_8, tmp_9), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var this_1 = suspendResult instanceof JsonArray ? suspendResult : THROW_CCE();
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
            var _iterator__ex2g4s = this_1.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(get_jsonPrimitive(item).c4s());
            }

            var ARGUMENT = destination;
            return toSet(ARGUMENT);
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function UniresolverResolver(resolverUrl) {
    resolverUrl = resolverUrl === VOID ? 'https://dev.uniresolver.io/1.0' : resolverUrl;
    this.resolverUrl = resolverUrl;
    this.gb6_1 = 'uniresolver @ ' + this.resolverUrl;
    var tmp = this;
    tmp.hb6_1 = HttpClient(UniresolverResolver$http$lambda);
  }
  protoOf(UniresolverResolver).zbb = function (_set____db54di) {
    this.resolverUrl = _set____db54di;
  };
  protoOf(UniresolverResolver).abc = function () {
    return this.resolverUrl;
  };
  protoOf(UniresolverResolver).s2 = function () {
    return this.gb6_1;
  };
  protoOf(UniresolverResolver).b9w = function ($completion) {
    var tmp = new $getSupportedMethodsCOROUTINE$29(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).n9t = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$30(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).r9u = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$31(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).y9t = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$32(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).r9x = function (did) {
    var tmp = UniresolverResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniresolverResolver).da3 = function () {
    var tmp = UniresolverResolver$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniresolverResolver).s9x = function (did) {
    var tmp = UniresolverResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniresolverResolver).u9x = function (did) {
    var tmp = UniresolverResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function resolveDid($this, did, $completion) {
    var tmp = new $resolveDidCOROUTINE$36($this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function DidCheqdResolver$json$lambda($this$Json) {
    $this$Json.k4q_1 = true;
    return Unit_instance;
  }
  function DidCheqdResolver$resolveDid$lambda($this$headers) {
    $this$headers.x2o('contentType', 'application/did+ld+json');
    return Unit_instance;
  }
  function DidCheqdResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.ibd_1 = this$0;
    this.jbd_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdResolver$resolveAsync$slambda).kbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidCheqdResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.kbd($completion);
  };
  protoOf(DidCheqdResolver$resolveAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.ibd_1.vb4(this.jbd_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidCheqdResolver$resolveAsync$slambda).ia = function (completion) {
    return new DidCheqdResolver$resolveAsync$slambda(this.ibd_1, this.jbd_1, completion);
  };
  function DidCheqdResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidCheqdResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.kbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidCheqdResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.vbd_1 = this$0;
    this.wbd_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdResolver$resolveToKeyAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidCheqdResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(DidCheqdResolver$resolveToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.vbd_1.r9u(this.wbd_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidCheqdResolver$resolveToKeyAsync$slambda).ia = function (completion) {
    return new DidCheqdResolver$resolveToKeyAsync$slambda(this.vbd_1, this.wbd_1, completion);
  };
  function DidCheqdResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidCheqdResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$35(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fbe_1 = _this__u8e3s4;
    this.gbe_1 = did;
  }
  protoOf($resolveCOROUTINE$35).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.hbe_1 = this.fbe_1;
            this.ibe_1 = this.hbe_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.kbe_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.lbe_1 = this.ibe_1;
            this.mbe_1 = this.lbe_1;
            this.m9_1 = 1;
            suspendResult = resolveDid(this.mbe_1, this.gbe_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.kbe_1;
            tmp_3.jbe_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.jbe_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.jbe_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 3) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($resolveCOROUTINE$35)['<set-state>'] = protoOf($resolveCOROUTINE$35).t9;
  protoOf($resolveCOROUTINE$35)['<get-state>'] = protoOf($resolveCOROUTINE$35).u9;
  protoOf($resolveCOROUTINE$35)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$35).v9;
  protoOf($resolveCOROUTINE$35)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$35).w9;
  protoOf($resolveCOROUTINE$35)['<set-result>'] = protoOf($resolveCOROUTINE$35).x9;
  protoOf($resolveCOROUTINE$35)['<get-result>'] = protoOf($resolveCOROUTINE$35).y9;
  protoOf($resolveCOROUTINE$35)['<set-exception>'] = protoOf($resolveCOROUTINE$35).z9;
  protoOf($resolveCOROUTINE$35)['<get-exception>'] = protoOf($resolveCOROUTINE$35).aa;
  protoOf($resolveCOROUTINE$35)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$35).ba;
  protoOf($resolveCOROUTINE$35)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$35).ca;
  protoOf($resolveCOROUTINE$35)['<get-context>'] = protoOf($resolveCOROUTINE$35).s9;
  function $resolveDidCOROUTINE$36(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jbc_1 = _this__u8e3s4;
    this.kbc_1 = did;
  }
  protoOf($resolveDidCOROUTINE$36).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.lbc_1 = this.jbc_1.lbd_1;
            var tmp_1 = this;
            tmp_1.mbc_1 = 'https://resolver.cheqd.net/1.0/identifiers/' + this.kbc_1;
            this.nbc_1 = this.lbc_1;
            this.obc_1 = this.mbc_1;
            var tmp_2 = this;
            tmp_2.pbc_1 = this.nbc_1;
            this.qbc_1 = this.pbc_1;
            var tmp_3 = this;
            tmp_3.rbc_1 = this.qbc_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.obc_1);
            headers(this_0, DidCheqdResolver$resolveDid$lambda);
            tmp_4.sbc_1 = this_0;
            this.tbc_1 = this.rbc_1;
            this.ubc_1 = this.sbc_1;
            this.ubc_1.v3h_1 = Companion_getInstance().o2z_1;
            var tmp_5 = this;
            tmp_5.vbc_1 = this.tbc_1;
            var tmp_6 = this;
            tmp_6.wbc_1 = this.ubc_1;
            this.xbc_1 = this.vbc_1;
            this.ybc_1 = this.wbc_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.ybc_1, this.xbc_1)).d4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.zbc_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = bodyAsText(this.zbc_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var responseText = suspendResult;
            this.jbc_1;
            var tmp_7;
            try {
              var value = Default_getInstance().t4p(responseText);
              tmp_7 = _Result___init__impl__xyqfz8(value);
            } catch ($p) {
              var tmp_8;
              if ($p instanceof Error) {
                var e = $p;
                tmp_8 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_7 = tmp_8;
            }

            var this_1 = tmp_7;
            var exception = Result__exceptionOrNull_impl_p6xea9(this_1);
            var tmp_9;
            if (exception == null) {
              var tmp_10 = _Result___get_value__impl__bjfvqg(this_1);
              tmp_9 = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
            } else {
              throw RuntimeException_init_$Create$_0('Illegal non-JSON response (' + this.zbc_1.b35().toString() + '), body: >>' + responseText + '<< (end of body), error: >>' + stackTraceToString(exception) + '<<');
            }

            var resolution = tmp_9;
            var tmp0_safe_receiver = get_jsonObject(resolution).af('didResolutionMetadata');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('error');
            var tmp_11;
            if (tmp2_safe_receiver == null) {
              tmp_11 = null;
            } else {
              throw IllegalArgumentException_init_$Create$('Could not resolve did:cheqd, resolver responded: ' + get_jsonPrimitive(tmp2_safe_receiver).c4s());
            }

            var tmp3_elvis_lhs = tmp_11;
            var tmp_12;
            if (tmp3_elvis_lhs == null) {
              this.jbc_1;
              var tmp0_safe_receiver_0 = get_jsonObject(resolution).af('didDocument');
              var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : get_jsonObject(tmp0_safe_receiver_0);
              var tmp_13;
              if (tmp1_elvis_lhs == null) {
                throw IllegalArgumentException_init_$Create$('Response for did:cheqd did not contain a DID document!');
              } else {
                tmp_13 = tmp1_elvis_lhs;
              }
              var it = tmp_13;
              var tmp0 = this.jbc_1.mbd_1;
              var string = it.toString();
              var this_2 = tmp0.i22();
              var this_3 = serializer(this_2, createKType(getKClass(DidDocument_0), arrayOf([]), false));
              tmp_12 = tmp0.k1z(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), string);
            } else {
              tmp_12 = tmp3_elvis_lhs;
            }

            var didDocument = tmp_12;
            return new DidDocument(secondaryConstructor(didDocument).toMap());
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 3) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  function DidCheqdResolver() {
    LocalResolverMethod.call(this, 'cheqd');
    this.lbd_1 = HttpClient();
    var tmp = this;
    tmp.mbd_1 = Json(VOID, DidCheqdResolver$json$lambda);
  }
  protoOf(DidCheqdResolver).vb4 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$35(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidCheqdResolver).r9u = function (did, $completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(DidCheqdResolver).r9x = function (did) {
    var tmp = DidCheqdResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidCheqdResolver).u9x = function (did) {
    var tmp = DidCheqdResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function resolveDid_0($this, did, $completion) {
    var tmp = new $resolveDidCOROUTINE$38($this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function parseDidDocumentOrNull($this, json) {
    var tmp;
    try {
      tmp = new DidDocument(secondaryConstructor_1(secondaryConstructor_0(get_jsonObject(Default_getInstance().t4p(json)))).toMap());
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function DidEbsiResolver$resolveDid$lambda($this$headers) {
    $this$headers.x2o(HttpHeaders_getInstance().c2w_1, 'application/did+json');
    $this$headers.x2o(HttpHeaders_getInstance().k2v_1, 'application/did+json');
    return Unit_instance;
  }
  function DidEbsiResolver$resolveDid$lambda_0($this$headers) {
    $this$headers.x2o(HttpHeaders_getInstance().c2w_1, 'application/did+json');
    $this$headers.x2o(HttpHeaders_getInstance().k2v_1, 'application/did+json');
    return Unit_instance;
  }
  function DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.lbg_1 = this$0;
    this.mbg_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).r80 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).zb = function ($completion) {
    return this.r80($completion);
  };
  protoOf(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.lbg_1.qbg(this.mbg_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).ia = function (completion) {
    return new DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this.lbg_1, this.mbg_1, completion);
  };
  function DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.r80($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.zbg_1 = this$0;
    this.abh_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).bbh = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).zb = function ($completion) {
    return this.bbh($completion);
  };
  protoOf(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.zbg_1.cbh(this.abh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).ia = function (completion) {
    return new DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this.zbg_1, this.abh_1, completion);
  };
  function DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.bbh($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.lbh_1 = this$0;
    this.mbh_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$resolveAsync$slambda).kbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.kbd($completion);
  };
  protoOf(DidEbsiResolver$resolveAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.lbh_1.vb4(this.mbh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidEbsiResolver$resolveAsync$slambda).ia = function (completion) {
    return new DidEbsiResolver$resolveAsync$slambda(this.lbh_1, this.mbh_1, completion);
  };
  function DidEbsiResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidEbsiResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.kbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.vbh_1 = this$0;
    this.wbh_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$resolveToKeysAsync$slambda).x9t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.x9t($completion);
  };
  protoOf(DidEbsiResolver$resolveToKeysAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.vbh_1.y9t(this.wbh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidEbsiResolver$resolveToKeysAsync$slambda).ia = function (completion) {
    return new DidEbsiResolver$resolveToKeysAsync$slambda(this.vbh_1, this.wbh_1, completion);
  };
  function DidEbsiResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidEbsiResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.fbi_1 = this$0;
    this.gbi_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$resolveToKeyAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(DidEbsiResolver$resolveToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.fbi_1.r9u(this.gbi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidEbsiResolver$resolveToKeyAsync$slambda).ia = function (completion) {
    return new DidEbsiResolver$resolveToKeyAsync$slambda(this.fbi_1, this.gbi_1, completion);
  };
  function DidEbsiResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidEbsiResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$37(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pbi_1 = _this__u8e3s4;
    this.qbi_1 = did;
  }
  protoOf($resolveCOROUTINE$37).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.rbi_1 = this.pbi_1;
            this.sbi_1 = this.rbi_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.ubi_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.vbi_1 = this.sbi_1;
            this.wbi_1 = this.vbi_1;
            this.m9_1 = 1;
            suspendResult = resolveDid_0(this.wbi_1, this.qbi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.ubi_1;
            tmp_3.tbi_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.tbi_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.tbi_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 3) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($resolveCOROUTINE$37)['<set-state>'] = protoOf($resolveCOROUTINE$37).t9;
  protoOf($resolveCOROUTINE$37)['<get-state>'] = protoOf($resolveCOROUTINE$37).u9;
  protoOf($resolveCOROUTINE$37)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$37).v9;
  protoOf($resolveCOROUTINE$37)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$37).w9;
  protoOf($resolveCOROUTINE$37)['<set-result>'] = protoOf($resolveCOROUTINE$37).x9;
  protoOf($resolveCOROUTINE$37)['<get-result>'] = protoOf($resolveCOROUTINE$37).y9;
  protoOf($resolveCOROUTINE$37)['<set-exception>'] = protoOf($resolveCOROUTINE$37).z9;
  protoOf($resolveCOROUTINE$37)['<get-exception>'] = protoOf($resolveCOROUTINE$37).aa;
  protoOf($resolveCOROUTINE$37)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$37).ba;
  protoOf($resolveCOROUTINE$37)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$37).ca;
  protoOf($resolveCOROUTINE$37)['<get-context>'] = protoOf($resolveCOROUTINE$37).s9;
  function $resolveDidCOROUTINE$38(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vbe_1 = _this__u8e3s4;
    this.wbe_1 = did;
  }
  protoOf($resolveDidCOROUTINE$38).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            tmp_0.xbe_1 = this.vbe_1.nbg_1;
            var tmp_1 = this;
            tmp_1.ybe_1 = this.vbe_1.obg_1 + this.wbe_1;
            this.zbe_1 = this.xbe_1;
            this.abf_1 = this.ybe_1;
            var tmp_2 = this;
            tmp_2.bbf_1 = this.zbe_1;
            this.cbf_1 = this.bbf_1;
            var tmp_3 = this;
            tmp_3.dbf_1 = this.cbf_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.abf_1);
            headers(this_0, DidEbsiResolver$resolveDid$lambda);
            tmp_4.ebf_1 = this_0;
            this.fbf_1 = this.dbf_1;
            this.gbf_1 = this.ebf_1;
            this.gbf_1.v3h_1 = Companion_getInstance().o2z_1;
            var tmp_5 = this;
            tmp_5.hbf_1 = this.fbf_1;
            var tmp_6 = this;
            tmp_6.ibf_1 = this.gbf_1;
            this.jbf_1 = this.hbf_1;
            this.kbf_1 = this.ibf_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.kbf_1, this.jbf_1)).d4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.lbf_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = bodyAsText(this.lbf_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.mbf_1 = suspendResult;
            this.nbf_1 = parseDidDocumentOrNull(this.vbe_1, this.mbf_1);
            if (!(this.nbf_1 == null)) {
              return this.nbf_1;
            }

            var tmp_7 = this;
            tmp_7.obf_1 = this.vbe_1.nbg_1;
            var tmp_8 = this;
            tmp_8.pbf_1 = this.vbe_1.pbg_1 + this.wbe_1;
            this.qbf_1 = this.obf_1;
            this.rbf_1 = this.pbf_1;
            var tmp_9 = this;
            tmp_9.sbf_1 = this.qbf_1;
            this.tbf_1 = this.sbf_1;
            var tmp_10 = this;
            tmp_10.ubf_1 = this.tbf_1;
            var tmp_11 = this;
            var this_1 = new HttpRequestBuilder();
            url(this_1, this.rbf_1);
            headers(this_1, DidEbsiResolver$resolveDid$lambda_0);
            tmp_11.vbf_1 = this_1;
            this.wbf_1 = this.ubf_1;
            this.xbf_1 = this.vbf_1;
            this.xbf_1.v3h_1 = Companion_getInstance().o2z_1;
            var tmp_12 = this;
            tmp_12.ybf_1 = this.wbf_1;
            var tmp_13 = this;
            tmp_13.zbf_1 = this.xbf_1;
            this.abg_1 = this.ybf_1;
            this.bbg_1 = this.zbf_1;
            this.m9_1 = 3;
            suspendResult = (new HttpStatement(this.bbg_1, this.abg_1)).d4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.cbg_1 = suspendResult;
            this.m9_1 = 4;
            suspendResult = bodyAsText(this.cbg_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var responsePilot = suspendResult;
            var tmp0_elvis_lhs = parseDidDocumentOrNull(this.vbe_1, responsePilot);
            var tmp_14;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Failed to resolve EBSI DID from both environments');
            } else {
              tmp_14 = tmp0_elvis_lhs;
            }

            return tmp_14;
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $resolveToKeyCOROUTINE$39(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fbj_1 = _this__u8e3s4;
    this.gbj_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$39).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.m9_1 = 1;
            suspendResult = this.fbj_1.vb4(this.gbj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.hbj_1 = suspendResult.zo_1;
            suspendResult = new Result(this.hbj_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.ibj_1 = suspendResult.zo_1;
            if (_Result___get_isFailure__impl__jpiriv(this.ibj_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.ibj_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.ibj_1;
            var tmp_1;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_1 = null;
            } else {
              var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
            }

            var tmp0_elvis_lhs = tmp_1;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              var exception_0 = IllegalStateException_init_$Create$('DID document is null for ' + this.gbj_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_0)));
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_0.jbj_1 = tmp_3;
            var tmp_4 = this;
            var tmp1_elvis_lhs = this.jbj_1.af('verificationMethod');
            var tmp_5;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = IllegalStateException_init_$Create$('No verification method found in DID document for ' + this.gbj_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_1)));
            } else {
              tmp_5 = tmp1_elvis_lhs;
            }

            tmp_4.kbj_1 = tmp_5;
            this.lbj_1 = get_jsonArray(this.kbj_1);
            var tmp_6 = this;
            var tmp0 = this.lbj_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              this.fbj_1;
              var tmp_7;
              try {
                var tmp$ret$0 = Unit_instance;
                l$ret$1: do {
                  var verificationMethod = get_jsonObject(element);
                  var tmp0_safe_receiver = verificationMethod.af('publicKeyJwk');
                  var tmp1_elvis_lhs_0 = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
                  var tmp_8;
                  if (tmp1_elvis_lhs_0 == null) {
                    tmp$ret$0 = null;
                    break l$ret$1;
                  } else {
                    tmp_8 = tmp1_elvis_lhs_0;
                  }
                  var publicKeyJwk = tmp_8;
                  var this_1 = Companion_getInstance_46().json;
                  var this_2 = this_1.i22();
                  var this_3 = serializer(this_2, createKType(getKClass(JsonObject), arrayOf([]), false));
                  tmp$ret$0 = this_1.j1z(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), publicKeyJwk);
                }
                 while (false);
                var value = tmp$ret$0;
                tmp_7 = _Result___init__impl__xyqfz8(value);
              } catch ($p) {
                var tmp_9;
                if ($p instanceof Error) {
                  var e = $p;
                  tmp_9 = _Result___init__impl__xyqfz8(createFailure(e));
                } else {
                  throw $p;
                }
                tmp_7 = tmp_9;
              }
              var this_4 = tmp_7;
              var tmp_10;
              if (_Result___get_isFailure__impl__jpiriv(this_4)) {
                tmp_10 = null;
              } else {
                var tmp_11 = _Result___get_value__impl__bjfvqg(this_4);
                tmp_10 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
              }
              var tmp0_safe_receiver_0 = tmp_10;
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                destination.n(tmp0_safe_receiver_0);
              }
            }

            tmp_6.mbj_1 = destination;
            if (this.mbj_1.h()) {
              var exception_2 = IllegalStateException_init_$Create$('No valid public key JWKs found in DID document for ' + this.gbj_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_2)));
            }

            this.m9_1 = 3;
            suspendResult = this.fbj_1.qbg(this.mbj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 4;
            continue $sm;
          case 4:
            return suspendResult;
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 5) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($resolveToKeyCOROUTINE$39)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$39).t9;
  protoOf($resolveToKeyCOROUTINE$39)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$39).u9;
  protoOf($resolveToKeyCOROUTINE$39)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$39).v9;
  protoOf($resolveToKeyCOROUTINE$39)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$39).w9;
  protoOf($resolveToKeyCOROUTINE$39)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$39).x9;
  protoOf($resolveToKeyCOROUTINE$39)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$39).y9;
  protoOf($resolveToKeyCOROUTINE$39)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$39).z9;
  protoOf($resolveToKeyCOROUTINE$39)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$39).aa;
  protoOf($resolveToKeyCOROUTINE$39)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$39).ba;
  protoOf($resolveToKeyCOROUTINE$39)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$39).ca;
  protoOf($resolveToKeyCOROUTINE$39)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$39).s9;
  function $resolveToKeysCOROUTINE$40(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vbj_1 = _this__u8e3s4;
    this.wbj_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$40).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.m9_1 = 1;
            suspendResult = this.vbj_1.vb4(this.wbj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.xbj_1 = suspendResult.zo_1;
            suspendResult = new Result(this.xbj_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.ybj_1 = suspendResult.zo_1;
            if (_Result___get_isFailure__impl__jpiriv(this.ybj_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.ybj_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.ybj_1;
            var tmp_1;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_1 = null;
            } else {
              var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
            }

            var tmp0_elvis_lhs = tmp_1;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              var exception_0 = IllegalStateException_init_$Create$('DID document is null for ' + this.wbj_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_0)));
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_0.zbj_1 = tmp_3;
            var tmp_4 = this;
            var tmp1_elvis_lhs = this.zbj_1.af('verificationMethod');
            var tmp_5;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = IllegalStateException_init_$Create$('No verification method found in DID document for ' + this.wbj_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_1)));
            } else {
              tmp_5 = tmp1_elvis_lhs;
            }

            tmp_4.abk_1 = tmp_5;
            this.bbk_1 = get_jsonArray(this.abk_1);
            var tmp_6 = this;
            var tmp0 = this.bbk_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              this.vbj_1;
              var tmp_7;
              try {
                var tmp$ret$0 = Unit_instance;
                l$ret$1: do {
                  var verificationMethod = get_jsonObject(element);
                  var tmp0_safe_receiver = verificationMethod.af('publicKeyJwk');
                  var tmp1_elvis_lhs_0 = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
                  var tmp_8;
                  if (tmp1_elvis_lhs_0 == null) {
                    tmp$ret$0 = null;
                    break l$ret$1;
                  } else {
                    tmp_8 = tmp1_elvis_lhs_0;
                  }
                  var publicKeyJwk = tmp_8;
                  var this_1 = Companion_getInstance_46().json;
                  var this_2 = this_1.i22();
                  var this_3 = serializer(this_2, createKType(getKClass(JsonObject), arrayOf([]), false));
                  tmp$ret$0 = this_1.j1z(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), publicKeyJwk);
                }
                 while (false);
                var value = tmp$ret$0;
                tmp_7 = _Result___init__impl__xyqfz8(value);
              } catch ($p) {
                var tmp_9;
                if ($p instanceof Error) {
                  var e = $p;
                  tmp_9 = _Result___init__impl__xyqfz8(createFailure(e));
                } else {
                  throw $p;
                }
                tmp_7 = tmp_9;
              }
              var this_4 = tmp_7;
              var tmp_10;
              if (_Result___get_isFailure__impl__jpiriv(this_4)) {
                tmp_10 = null;
              } else {
                var tmp_11 = _Result___get_value__impl__bjfvqg(this_4);
                tmp_10 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
              }
              var tmp0_safe_receiver_0 = tmp_10;
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                destination.n(tmp0_safe_receiver_0);
              }
            }

            tmp_6.cbk_1 = destination;
            if (this.cbk_1.h()) {
              var exception_2 = IllegalStateException_init_$Create$('No valid public key JWKs found in DID document for ' + this.wbj_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_2)));
            }

            this.m9_1 = 3;
            suspendResult = this.vbj_1.cbh(this.cbk_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 4;
            continue $sm;
          case 4:
            return suspendResult;
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 5) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($resolveToKeysCOROUTINE$40)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$40).t9;
  protoOf($resolveToKeysCOROUTINE$40)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$40).u9;
  protoOf($resolveToKeysCOROUTINE$40)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$40).v9;
  protoOf($resolveToKeysCOROUTINE$40)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$40).w9;
  protoOf($resolveToKeysCOROUTINE$40)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$40).x9;
  protoOf($resolveToKeysCOROUTINE$40)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$40).y9;
  protoOf($resolveToKeysCOROUTINE$40)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$40).z9;
  protoOf($resolveToKeysCOROUTINE$40)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$40).aa;
  protoOf($resolveToKeysCOROUTINE$40)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$40).ba;
  protoOf($resolveToKeysCOROUTINE$40)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$40).ca;
  protoOf($resolveToKeysCOROUTINE$40)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$40).s9;
  function $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lbk_1 = _this__u8e3s4;
    this.mbk_1 = publicKeyJwks;
  }
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 7;
            var tmp_0 = this;
            tmp_0.nbk_1 = this.mbk_1;
            this.obk_1 = this.nbk_1;
            this.pbk_1 = this.obk_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.pbk_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.qbk_1 = this.pbk_1.r();
            var tmp_1 = this;
            tmp_1.rbk_1 = this.qbk_1;
            this.sbk_1 = this.rbk_1;
            this.m9_1 = 2;
            suspendResult = Companion_instance_4.u7f(this.sbk_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            this.tbk_1 = suspendResult.zo_1;
            suspendResult = new Result(this.tbk_1);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            this.ubk_1 = suspendResult.zo_1;
            if (_Result___get_isSuccess__impl__sndoy8(this.ubk_1) && contains(this.sbk_1, 'P-256'))
              return new Result(this.ubk_1);
            this.m9_1 = 1;
            continue $sm;
          case 4:
            this.m9_1 = 5;
            suspendResult = Companion_instance_4.u7f(first_0(this.mbk_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 6;
            continue $sm;
          case 5:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 6;
            continue $sm;
          case 6:
            return suspendResult;
          case 7:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 7) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41)['<set-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).t9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41)['<get-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).u9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41)['<set-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).v9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41)['<get-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).w9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41)['<set-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).x9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41)['<get-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).y9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41)['<set-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).z9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41)['<get-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).aa;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41)['<set-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).ba;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41)['<get-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).ca;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41)['<get-context>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41).s9;
  function $tryConvertPublicKeyJwksToKeysCOROUTINE$42(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dbl_1 = _this__u8e3s4;
    this.ebl_1 = publicKeyJwks;
  }
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            tmp_0.fbl_1 = LinkedHashSet_init_$Create$();
            this.gbl_1 = this.ebl_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.gbl_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.hbl_1 = this.gbl_1.r();
            this.m9_1 = 2;
            suspendResult = Companion_instance_4.u7f(this.hbl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var result = suspendResult.zo_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              throwOnFailure(result);
              var tmp_1 = _Result___get_value__impl__bjfvqg(result);
              this.fbl_1.n((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
            }

            this.m9_1 = 1;
            continue $sm;
          case 4:
            var tmp_2;
            if (!this.fbl_1.h()) {
              var value = this.fbl_1;
              tmp_2 = _Result___init__impl__xyqfz8(value);
            } else {
              var exception = NoSuchElementException_init_$Create$('No keys could be imported from the DID document');
              tmp_2 = _Result___init__impl__xyqfz8(createFailure(exception));
            }

            return new Result(tmp_2);
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42)['<set-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).t9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42)['<get-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).u9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42)['<set-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).v9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42)['<get-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).w9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42)['<set-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).x9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42)['<get-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).y9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42)['<set-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).z9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42)['<get-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).aa;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42)['<set-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).ba;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42)['<get-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).ca;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42)['<get-context>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$42).s9;
  function DidEbsiResolver(client) {
    LocalResolverMethod.call(this, 'ebsi');
    this.nbg_1 = client;
    this.obg_1 = 'https://api-conformance.ebsi.eu/did-registry/v5/identifiers/';
    this.pbg_1 = 'https://api-pilot.ebsi.eu/did-registry/v5/identifiers/';
  }
  protoOf(DidEbsiResolver).vb4 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$37(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).r9u = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$39(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).y9t = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$40(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).qbg = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41(this, publicKeyJwks, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).cbh = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertPublicKeyJwksToKeysCOROUTINE$42(this, publicKeyJwks, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).ibl = function (publicKeyJwks) {
    var tmp = DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).jbl = function (publicKeyJwks) {
    var tmp = DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).r9x = function (did) {
    var tmp = DidEbsiResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).s9x = function (did) {
    var tmp = DidEbsiResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).u9x = function (did) {
    var tmp = DidEbsiResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidJwkResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.sbl_1 = this$0;
    this.tbl_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkResolver$resolveAsync$slambda).kbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidJwkResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.kbd($completion);
  };
  protoOf(DidJwkResolver$resolveAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.sbl_1.vb4(this.tbl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidJwkResolver$resolveAsync$slambda).ia = function (completion) {
    return new DidJwkResolver$resolveAsync$slambda(this.sbl_1, this.tbl_1, completion);
  };
  function DidJwkResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidJwkResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.kbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidJwkResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.cbm_1 = this$0;
    this.dbm_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkResolver$resolveToKeyAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidJwkResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(DidJwkResolver$resolveToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.cbm_1.r9u(this.dbm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidJwkResolver$resolveToKeyAsync$slambda).ia = function (completion) {
    return new DidJwkResolver$resolveToKeyAsync$slambda(this.cbm_1, this.dbm_1, completion);
  };
  function DidJwkResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidJwkResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$43(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mbm_1 = _this__u8e3s4;
    this.nbm_1 = did;
  }
  protoOf($resolveCOROUTINE$43).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.m9_1 = 1;
            suspendResult = this.mbm_1.r9u(this.nbm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.obm_1 = suspendResult.zo_1;
            suspendResult = new Result(this.obm_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.pbm_1 = suspendResult.zo_1;
            if (_Result___get_isFailure__impl__jpiriv(this.pbm_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.pbm_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.pbm_1;
            var tmp_1;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_1 = null;
            } else {
              var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
            }

            tmp_0.qbm_1 = ensureNotNull(tmp_1);
            this.m9_1 = 3;
            suspendResult = this.qbm_1.v6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_2(this.nbm_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var didDocument = new DidDocument(ARGUMENT_1);
            return new Result(_Result___init__impl__xyqfz8(didDocument));
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveCOROUTINE$43)['<set-state>'] = protoOf($resolveCOROUTINE$43).t9;
  protoOf($resolveCOROUTINE$43)['<get-state>'] = protoOf($resolveCOROUTINE$43).u9;
  protoOf($resolveCOROUTINE$43)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$43).v9;
  protoOf($resolveCOROUTINE$43)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$43).w9;
  protoOf($resolveCOROUTINE$43)['<set-result>'] = protoOf($resolveCOROUTINE$43).x9;
  protoOf($resolveCOROUTINE$43)['<get-result>'] = protoOf($resolveCOROUTINE$43).y9;
  protoOf($resolveCOROUTINE$43)['<set-exception>'] = protoOf($resolveCOROUTINE$43).z9;
  protoOf($resolveCOROUTINE$43)['<get-exception>'] = protoOf($resolveCOROUTINE$43).aa;
  protoOf($resolveCOROUTINE$43)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$43).ba;
  protoOf($resolveCOROUTINE$43)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$43).ca;
  protoOf($resolveCOROUTINE$43)['<get-context>'] = protoOf($resolveCOROUTINE$43).s9;
  function DidJwkResolver() {
    LocalResolverMethod.call(this, 'jwk');
  }
  protoOf(DidJwkResolver).vb4 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$43(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidJwkResolver).r9u = function (did, $completion) {
    var tmp = Companion_instance_4.u7f(decodeToString(Base64Utils_getInstance().decodeFromBase64Url(ensureNotNull(DidUtils_getInstance().pathFromDid(did)))), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidJwkResolver).r9x = function (did) {
    var tmp = DidJwkResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidJwkResolver).u9x = function (did) {
    var tmp = DidJwkResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidKeyResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.zbm_1 = this$0;
    this.abn_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyResolver$resolveAsync$slambda).kbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.kbd($completion);
  };
  protoOf(DidKeyResolver$resolveAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.zbm_1.vb4(this.abn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidKeyResolver$resolveAsync$slambda).ia = function (completion) {
    return new DidKeyResolver$resolveAsync$slambda(this.zbm_1, this.abn_1, completion);
  };
  function DidKeyResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidKeyResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.kbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidKeyResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.jbn_1 = this$0;
    this.kbn_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyResolver$resolveToKeyAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(DidKeyResolver$resolveToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.jbn_1.r9u(this.kbn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidKeyResolver$resolveToKeyAsync$slambda).ia = function (completion) {
    return new DidKeyResolver$resolveToKeyAsync$slambda(this.jbn_1, this.kbn_1, completion);
  };
  function DidKeyResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidKeyResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$44(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tbn_1 = _this__u8e3s4;
    this.ubn_1 = did;
  }
  protoOf($resolveCOROUTINE$44).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.m9_1 = 1;
            suspendResult = this.tbn_1.r9u(this.ubn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.vbn_1 = suspendResult.zo_1;
            suspendResult = new Result(this.vbn_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.wbn_1 = suspendResult.zo_1;
            this.xbn_1 = this.wbn_1;
            this.ybn_1 = Result__exceptionOrNull_impl_p6xea9(this.xbn_1);
            if (this.ybn_1 == null) {
              var tmp_0 = this;
              var tmp_1 = _Result___get_value__impl__bjfvqg(this.xbn_1);
              tmp_0.abo_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              this.bbo_1 = this.abo_1;
              var tmp_2 = this;
              tmp_2.cbo_1 = Companion_instance_2;
              this.dbo_1 = ensureNotNull(DidUtils_getInstance().identifierFromDid(this.ubn_1));
              this.m9_1 = 3;
              suspendResult = this.bbo_1.v6m(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_3 = this;
              var exception = this.ybn_1;
              tmp_3.zbn_1 = new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
              this.m9_1 = 4;
              continue $sm;
            }

          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_3(this.ubn_1, this.dbo_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var tmp1 = new DidDocument(ARGUMENT_1);
            var tmp_4 = this;
            this.cbo_1;
            tmp_4.zbn_1 = new Result(_Result___init__impl__xyqfz8(tmp1));
            this.m9_1 = 4;
            continue $sm;
          case 4:
            return this.zbn_1;
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveCOROUTINE$44)['<set-state>'] = protoOf($resolveCOROUTINE$44).t9;
  protoOf($resolveCOROUTINE$44)['<get-state>'] = protoOf($resolveCOROUTINE$44).u9;
  protoOf($resolveCOROUTINE$44)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$44).v9;
  protoOf($resolveCOROUTINE$44)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$44).w9;
  protoOf($resolveCOROUTINE$44)['<set-result>'] = protoOf($resolveCOROUTINE$44).x9;
  protoOf($resolveCOROUTINE$44)['<get-result>'] = protoOf($resolveCOROUTINE$44).y9;
  protoOf($resolveCOROUTINE$44)['<set-exception>'] = protoOf($resolveCOROUTINE$44).z9;
  protoOf($resolveCOROUTINE$44)['<get-exception>'] = protoOf($resolveCOROUTINE$44).aa;
  protoOf($resolveCOROUTINE$44)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$44).ba;
  protoOf($resolveCOROUTINE$44)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$44).ca;
  protoOf($resolveCOROUTINE$44)['<get-context>'] = protoOf($resolveCOROUTINE$44).s9;
  function $resolveToKeyCOROUTINE$45(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mbo_1 = _this__u8e3s4;
    this.nbo_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$45).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.obo_1 = DidUtils_getInstance().identifierFromDid(this.nbo_1);
            if (this.obo_1 == null) {
              this.pbo_1 = null;
              this.m9_1 = 3;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.qbo_1 = this.obo_1;
              this.rbo_1 = this.qbo_1;
              var tmp_1 = this;
              tmp_1.sbo_1 = this.rbo_1;
              this.tbo_1 = this.sbo_1;
              this.m9_1 = 1;
              suspendResult = KeyUtils_instance.ubo(this.tbo_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 2;
              continue $sm;
            }

          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.pbo_1 = suspendResult;
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var tmp1_elvis_lhs = this.pbo_1;
            var tmp_2;
            if (tmp1_elvis_lhs == null) {
              var exception = newThrowable('Failed to extract identifier from: ' + this.nbo_1);
              tmp_2 = _Result___init__impl__xyqfz8(createFailure(exception));
            } else {
              tmp_2 = tmp1_elvis_lhs.zo_1;
            }

            return new Result(tmp_2);
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveToKeyCOROUTINE$45)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$45).t9;
  protoOf($resolveToKeyCOROUTINE$45)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$45).u9;
  protoOf($resolveToKeyCOROUTINE$45)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$45).v9;
  protoOf($resolveToKeyCOROUTINE$45)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$45).w9;
  protoOf($resolveToKeyCOROUTINE$45)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$45).x9;
  protoOf($resolveToKeyCOROUTINE$45)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$45).y9;
  protoOf($resolveToKeyCOROUTINE$45)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$45).z9;
  protoOf($resolveToKeyCOROUTINE$45)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$45).aa;
  protoOf($resolveToKeyCOROUTINE$45)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$45).ba;
  protoOf($resolveToKeyCOROUTINE$45)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$45).ca;
  protoOf($resolveToKeyCOROUTINE$45)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$45).s9;
  function DidKeyResolver() {
    LocalResolverMethod.call(this, 'key');
  }
  protoOf(DidKeyResolver).vb4 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$44(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver).r9u = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$45(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver).r9x = function (did) {
    var tmp = DidKeyResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidKeyResolver).u9x = function (did) {
    var tmp = DidKeyResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidWebResolver$Companion$json$lambda($this$Json) {
    $this$Json.k4q_1 = true;
    return Unit_instance;
  }
  function resolveDidToUrl($this, did) {
    var tmp0_safe_receiver = DidUtils_getInstance().identifierFromDid(did);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var didParts = split(tmp0_safe_receiver, [':']);
      var domain = replace(didParts.u(0), '%3A', ':');
      var selectedPath = drop(didParts, 1);
      var path = selectedPath.h() ? '/.well-known/did.json' : '/' + joinToString(selectedPath, '/') + '/did.json';
      tmp = 'https://' + domain + path;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Unexpected did format (missing identifier): ' + did);
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function Companion_44() {
    Companion_instance_50 = this;
    this.URL_PROTOCOL = 'https';
    var tmp = this;
    tmp.json = Json(VOID, DidWebResolver$Companion$json$lambda);
  }
  protoOf(Companion_44).vbo = function () {
    return this.URL_PROTOCOL;
  };
  protoOf(Companion_44).x4r = function () {
    return this.json;
  };
  var Companion_instance_50;
  function Companion_getInstance_46() {
    if (Companion_instance_50 == null)
      new Companion_44();
    return Companion_instance_50;
  }
  function DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.ebp_1 = this$0;
    this.fbp_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).r80 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).zb = function ($completion) {
    return this.r80($completion);
  };
  protoOf(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.ebp_1.qbg(this.fbp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).ia = function (completion) {
    return new DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this.ebp_1, this.fbp_1, completion);
  };
  function DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.r80($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.pbp_1 = this$0;
    this.qbp_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).bbh = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).zb = function ($completion) {
    return this.bbh($completion);
  };
  protoOf(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.pbp_1.cbh(this.qbp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).ia = function (completion) {
    return new DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this.pbp_1, this.qbp_1, completion);
  };
  function DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.bbh($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.zbp_1 = this$0;
    this.abq_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$resolveAsync$slambda).kbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.kbd($completion);
  };
  protoOf(DidWebResolver$resolveAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.zbp_1.vb4(this.abq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidWebResolver$resolveAsync$slambda).ia = function (completion) {
    return new DidWebResolver$resolveAsync$slambda(this.zbp_1, this.abq_1, completion);
  };
  function DidWebResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidWebResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.kbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.jbq_1 = this$0;
    this.kbq_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$resolveToKeysAsync$slambda).x9t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.x9t($completion);
  };
  protoOf(DidWebResolver$resolveToKeysAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.jbq_1.y9t(this.kbq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidWebResolver$resolveToKeysAsync$slambda).ia = function (completion) {
    return new DidWebResolver$resolveToKeysAsync$slambda(this.jbq_1, this.kbq_1, completion);
  };
  function DidWebResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidWebResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.tbq_1 = this$0;
    this.ubq_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$resolveToKeyAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(DidWebResolver$resolveToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.tbq_1.r9u(this.ubq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(DidWebResolver$resolveToKeyAsync$slambda).ia = function (completion) {
    return new DidWebResolver$resolveToKeyAsync$slambda(this.tbq_1, this.ubq_1, completion);
  };
  function DidWebResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidWebResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$46(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dbr_1 = _this__u8e3s4;
    this.ebr_1 = did;
  }
  protoOf($resolveCOROUTINE$46).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.fbr_1 = resolveDidToUrl(this.dbr_1, this.ebr_1);
            var tmp_0 = this;
            tmp_0.gbr_1 = this.dbr_1;
            this.hbr_1 = this.gbr_1;
            this.n9_1 = 3;
            var tmp_1 = this;
            tmp_1.jbr_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.kbr_1 = this.hbr_1;
            this.lbr_1 = this.kbr_1;
            var tmp_3 = this;
            tmp_3.mbr_1 = this.lbr_1.gbp_1;
            var tmp_4 = this;
            tmp_4.nbr_1 = this.fbr_1;
            this.obr_1 = this.mbr_1;
            this.pbr_1 = this.nbr_1;
            var tmp_5 = this;
            tmp_5.qbr_1 = this.obr_1;
            this.rbr_1 = this.qbr_1;
            var tmp_6 = this;
            tmp_6.sbr_1 = this.rbr_1;
            var tmp_7 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.pbr_1);
            tmp_7.tbr_1 = this_0;
            this.ubr_1 = this.sbr_1;
            this.vbr_1 = this.tbr_1;
            this.vbr_1.v3h_1 = Companion_getInstance().o2z_1;
            var tmp_8 = this;
            tmp_8.wbr_1 = this.ubr_1;
            var tmp_9 = this;
            tmp_9.xbr_1 = this.vbr_1;
            this.ybr_1 = this.wbr_1;
            this.zbr_1 = this.xbr_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.zbr_1, this.ybr_1)).d4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.abs_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = bodyAsText(this.abs_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var it = suspendResult;
            var tmp1 = secondaryConstructor_0(get_jsonObject(Default_getInstance().t4p(it)));
            var tmp_10 = this;
            this.jbr_1;
            tmp_10.ibr_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 4;
            this.m9_1 = 5;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            var tmp_11 = this.p9_1;
            if (tmp_11 instanceof Error) {
              var e = this.p9_1;
              var tmp_12 = this;
              tmp_12.ibr_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 5;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 4:
            throw this.p9_1;
          case 5:
            this.n9_1 = 4;
            var this_1 = this.ibr_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw IllegalStateException_init_$Create$_0('Could not resolve DID document: ' + this.ebr_1, tmp0_safe_receiver);
            }

            var response = this_1;
            return new Result(response);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 4) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($resolveCOROUTINE$46)['<set-state>'] = protoOf($resolveCOROUTINE$46).t9;
  protoOf($resolveCOROUTINE$46)['<get-state>'] = protoOf($resolveCOROUTINE$46).u9;
  protoOf($resolveCOROUTINE$46)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$46).v9;
  protoOf($resolveCOROUTINE$46)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$46).w9;
  protoOf($resolveCOROUTINE$46)['<set-result>'] = protoOf($resolveCOROUTINE$46).x9;
  protoOf($resolveCOROUTINE$46)['<get-result>'] = protoOf($resolveCOROUTINE$46).y9;
  protoOf($resolveCOROUTINE$46)['<set-exception>'] = protoOf($resolveCOROUTINE$46).z9;
  protoOf($resolveCOROUTINE$46)['<get-exception>'] = protoOf($resolveCOROUTINE$46).aa;
  protoOf($resolveCOROUTINE$46)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$46).ba;
  protoOf($resolveCOROUTINE$46)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$46).ca;
  protoOf($resolveCOROUTINE$46)['<get-context>'] = protoOf($resolveCOROUTINE$46).s9;
  function $resolveToKeyCOROUTINE$47(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jbs_1 = _this__u8e3s4;
    this.kbs_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$47).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.jbs_1.y9t(this.kbs_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.zo_1;
            var tmp_0;
            if (_Result___get_isSuccess__impl__sndoy8(this_0)) {
              var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
              var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              var tmp0_elvis_lhs = firstOrNull(it);
              var tmp_2;
              if (tmp0_elvis_lhs == null) {
                throw NoSuchElementException_init_$Create$('No key could be imported');
              } else {
                tmp_2 = tmp0_elvis_lhs;
              }
              var value = tmp_2;
              tmp_0 = _Result___init__impl__xyqfz8(value);
            } else {
              tmp_0 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this_0));
            }

            return new Result(tmp_0);
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveToKeyCOROUTINE$47)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$47).t9;
  protoOf($resolveToKeyCOROUTINE$47)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$47).u9;
  protoOf($resolveToKeyCOROUTINE$47)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$47).v9;
  protoOf($resolveToKeyCOROUTINE$47)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$47).w9;
  protoOf($resolveToKeyCOROUTINE$47)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$47).x9;
  protoOf($resolveToKeyCOROUTINE$47)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$47).y9;
  protoOf($resolveToKeyCOROUTINE$47)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$47).z9;
  protoOf($resolveToKeyCOROUTINE$47)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$47).aa;
  protoOf($resolveToKeyCOROUTINE$47)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$47).ba;
  protoOf($resolveToKeyCOROUTINE$47)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$47).ca;
  protoOf($resolveToKeyCOROUTINE$47)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$47).s9;
  function $resolveToKeysCOROUTINE$48(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tbs_1 = _this__u8e3s4;
    this.ubs_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$48).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.m9_1 = 1;
            suspendResult = this.tbs_1.vb4(this.ubs_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.vbs_1 = suspendResult.zo_1;
            suspendResult = new Result(this.vbs_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.wbs_1 = suspendResult.zo_1;
            if (_Result___get_isFailure__impl__jpiriv(this.wbs_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.wbs_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.wbs_1;
            var tmp_1;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_1 = null;
            } else {
              var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
            }

            var tmp0_elvis_lhs = tmp_1;
            var tmp_3;
            if (tmp0_elvis_lhs == null) {
              var exception_0 = IllegalStateException_init_$Create$('DID document is null for ' + this.ubs_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_0)));
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_0.xbs_1 = tmp_3;
            var tmp_4 = this;
            var tmp1_elvis_lhs = this.xbs_1.af('verificationMethod');
            var tmp_5;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = IllegalStateException_init_$Create$('No verification method found in DID document for ' + this.ubs_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_1)));
            } else {
              tmp_5 = tmp1_elvis_lhs;
            }

            tmp_4.ybs_1 = tmp_5;
            this.zbs_1 = get_jsonArray(this.ybs_1);
            var tmp_6 = this;
            var tmp0 = this.zbs_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              this.tbs_1;
              var tmp_7;
              try {
                var tmp$ret$0 = Unit_instance;
                l$ret$1: do {
                  var method = get_jsonObject(element);
                  var tmp0_safe_receiver = method.af('publicKeyJwk');
                  var tmp1_elvis_lhs_0 = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
                  var tmp_8;
                  if (tmp1_elvis_lhs_0 == null) {
                    tmp$ret$0 = null;
                    break l$ret$1;
                  } else {
                    tmp_8 = tmp1_elvis_lhs_0;
                  }
                  var publicKeyJwk = tmp_8;
                  var this_1 = Companion_getInstance_46().json;
                  var this_2 = this_1.i22();
                  var this_3 = serializer(this_2, createKType(getKClass(JsonObject), arrayOf([]), false));
                  tmp$ret$0 = this_1.j1z(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), publicKeyJwk);
                }
                 while (false);
                var value = tmp$ret$0;
                tmp_7 = _Result___init__impl__xyqfz8(value);
              } catch ($p) {
                var tmp_9;
                if ($p instanceof Error) {
                  var e = $p;
                  tmp_9 = _Result___init__impl__xyqfz8(createFailure(e));
                } else {
                  throw $p;
                }
                tmp_7 = tmp_9;
              }
              var this_4 = tmp_7;
              var tmp_10;
              if (_Result___get_isFailure__impl__jpiriv(this_4)) {
                tmp_10 = null;
              } else {
                var tmp_11 = _Result___get_value__impl__bjfvqg(this_4);
                tmp_10 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
              }
              var tmp0_safe_receiver_0 = tmp_10;
              if (tmp0_safe_receiver_0 == null)
                null;
              else {
                destination.n(tmp0_safe_receiver_0);
              }
            }

            tmp_6.abt_1 = destination;
            if (this.abt_1.h()) {
              var exception_2 = IllegalStateException_init_$Create$('No valid public key JWKs found in DID document for ' + this.ubs_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_2)));
            }

            this.m9_1 = 3;
            suspendResult = this.tbs_1.cbh(this.abt_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 4;
            continue $sm;
          case 4:
            return suspendResult;
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 5) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($resolveToKeysCOROUTINE$48)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$48).t9;
  protoOf($resolveToKeysCOROUTINE$48)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$48).u9;
  protoOf($resolveToKeysCOROUTINE$48)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$48).v9;
  protoOf($resolveToKeysCOROUTINE$48)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$48).w9;
  protoOf($resolveToKeysCOROUTINE$48)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$48).x9;
  protoOf($resolveToKeysCOROUTINE$48)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$48).y9;
  protoOf($resolveToKeysCOROUTINE$48)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$48).z9;
  protoOf($resolveToKeysCOROUTINE$48)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$48).aa;
  protoOf($resolveToKeysCOROUTINE$48)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$48).ba;
  protoOf($resolveToKeysCOROUTINE$48)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$48).ca;
  protoOf($resolveToKeysCOROUTINE$48)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$48).s9;
  function $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jbt_1 = _this__u8e3s4;
    this.kbt_1 = publicKeyJwks;
  }
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            tmp_0.lbt_1 = this.kbt_1;
            this.mbt_1 = this.lbt_1;
            this.nbt_1 = this.mbt_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.nbt_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.obt_1 = this.nbt_1.r();
            var tmp_1 = this;
            tmp_1.pbt_1 = this.obt_1;
            this.qbt_1 = this.pbt_1;
            this.m9_1 = 2;
            suspendResult = Companion_instance_4.u7f(this.qbt_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var result = suspendResult.zo_1;
            if (_Result___get_isSuccess__impl__sndoy8(result))
              return new Result(result);
            this.m9_1 = 1;
            continue $sm;
          case 4:
            var exception = NoSuchElementException_init_$Create$('No key could be imported');
            return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49)['<set-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).t9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49)['<get-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).u9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49)['<set-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).v9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49)['<get-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).w9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49)['<set-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).x9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49)['<get-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).y9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49)['<set-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).z9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49)['<get-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).aa;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49)['<set-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).ba;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49)['<get-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).ca;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49)['<get-context>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49).s9;
  function $tryConvertPublicKeyJwksToKeysCOROUTINE$50(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zbt_1 = _this__u8e3s4;
    this.abu_1 = publicKeyJwks;
  }
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            tmp_0.bbu_1 = LinkedHashSet_init_$Create$();
            this.cbu_1 = this.abu_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.cbu_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.dbu_1 = this.cbu_1.r();
            this.m9_1 = 2;
            suspendResult = Companion_instance_4.u7f(this.dbu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var result = suspendResult.zo_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              throwOnFailure(result);
              var tmp_1 = _Result___get_value__impl__bjfvqg(result);
              this.bbu_1.n((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
            }

            this.m9_1 = 1;
            continue $sm;
          case 4:
            var tmp_2;
            if (!this.bbu_1.h()) {
              var value = this.bbu_1;
              tmp_2 = _Result___init__impl__xyqfz8(value);
            } else {
              var exception = NoSuchElementException_init_$Create$('No keys could be imported from the DID document');
              tmp_2 = _Result___init__impl__xyqfz8(createFailure(exception));
            }

            return new Result(tmp_2);
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50)['<set-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).t9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50)['<get-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).u9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50)['<set-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).v9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50)['<get-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).w9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50)['<set-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).x9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50)['<get-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).y9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50)['<set-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).z9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50)['<get-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).aa;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50)['<set-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).ba;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50)['<get-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).ca;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50)['<get-context>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$50).s9;
  function DidWebResolver(client) {
    Companion_getInstance_46();
    LocalResolverMethod.call(this, 'web');
    this.gbp_1 = client;
  }
  protoOf(DidWebResolver).vb4 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$46(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).r9u = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$47(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).y9t = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$48(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).qbg = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49(this, publicKeyJwks, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).cbh = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertPublicKeyJwksToKeysCOROUTINE$50(this, publicKeyJwks, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).ibl = function (publicKeyJwks) {
    var tmp = DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).jbl = function (publicKeyJwks) {
    var tmp = DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).r9x = function (did) {
    var tmp = DidWebResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).s9x = function (did) {
    var tmp = DidWebResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).u9x = function (did) {
    var tmp = DidWebResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function LocalResolverMethod$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.mbu_1 = this$0;
    this.nbu_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolverMethod$resolveAsync$slambda).kbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod$resolveAsync$slambda).zb = function ($completion) {
    return this.kbd($completion);
  };
  protoOf(LocalResolverMethod$resolveAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.mbu_1.vb4(this.nbu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalResolverMethod$resolveAsync$slambda).ia = function (completion) {
    return new LocalResolverMethod$resolveAsync$slambda(this.mbu_1, this.nbu_1, completion);
  };
  function LocalResolverMethod$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolverMethod$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.kbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolverMethod$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.wbu_1 = this$0;
    this.xbu_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolverMethod$resolveToKeysAsync$slambda).x9t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.x9t($completion);
  };
  protoOf(LocalResolverMethod$resolveToKeysAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.wbu_1.y9t(this.xbu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalResolverMethod$resolveToKeysAsync$slambda).ia = function (completion) {
    return new LocalResolverMethod$resolveToKeysAsync$slambda(this.wbu_1, this.xbu_1, completion);
  };
  function LocalResolverMethod$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolverMethod$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolverMethod$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.gbv_1 = this$0;
    this.hbv_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolverMethod$resolveToKeyAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(LocalResolverMethod$resolveToKeyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.gbv_1.r9u(this.hbv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(LocalResolverMethod$resolveToKeyAsync$slambda).ia = function (completion) {
    return new LocalResolverMethod$resolveToKeyAsync$slambda(this.gbv_1, this.hbv_1, completion);
  };
  function LocalResolverMethod$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolverMethod$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveToKeysCOROUTINE$51(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qbv_1 = _this__u8e3s4;
    this.rbv_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$51).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.qbv_1.r9u(this.rbv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.zo_1;
            var tmp_0;
            if (_Result___get_isSuccess__impl__sndoy8(this_0)) {
              var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
              var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              var value = setOf(it);
              tmp_0 = _Result___init__impl__xyqfz8(value);
            } else {
              tmp_0 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this_0));
            }

            return new Result(tmp_0);
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveToKeysCOROUTINE$51)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$51).t9;
  protoOf($resolveToKeysCOROUTINE$51)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$51).u9;
  protoOf($resolveToKeysCOROUTINE$51)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$51).v9;
  protoOf($resolveToKeysCOROUTINE$51)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$51).w9;
  protoOf($resolveToKeysCOROUTINE$51)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$51).x9;
  protoOf($resolveToKeysCOROUTINE$51)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$51).y9;
  protoOf($resolveToKeysCOROUTINE$51)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$51).z9;
  protoOf($resolveToKeysCOROUTINE$51)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$51).aa;
  protoOf($resolveToKeysCOROUTINE$51)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$51).ba;
  protoOf($resolveToKeysCOROUTINE$51)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$51).ca;
  protoOf($resolveToKeysCOROUTINE$51)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$51).s9;
  function LocalResolverMethod(method) {
    this.method = method;
  }
  protoOf(LocalResolverMethod).z3k = function () {
    return this.method;
  };
  protoOf(LocalResolverMethod).y9t = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$51(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod).r9x = function (did) {
    var tmp = LocalResolverMethod$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolverMethod).s9x = function (did) {
    var tmp = LocalResolverMethod$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolverMethod).u9x = function (did) {
    var tmp = LocalResolverMethod$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function WaltidServices$initAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WaltidServices$initAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(WaltidServices$initAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(WaltidServices$initAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = WaltidServices_instance.o6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(WaltidServices$initAsync$slambda).ia = function (completion) {
    return new WaltidServices$initAsync$slambda(completion);
  };
  function WaltidServices$initAsync$slambda_0(resultContinuation) {
    var i = new WaltidServices$initAsync$slambda(resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function WaltidServices$minimalInitAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WaltidServices$minimalInitAsync$slambda).e1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(WaltidServices$minimalInitAsync$slambda).zb = function ($completion) {
    return this.e1v($completion);
  };
  protoOf(WaltidServices$minimalInitAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = WaltidServices_instance.l9r(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 2) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(WaltidServices$minimalInitAsync$slambda).ia = function (completion) {
    return new WaltidServices$minimalInitAsync$slambda(completion);
  };
  function WaltidServices$minimalInitAsync$slambda_0(resultContinuation) {
    var i = new WaltidServices$minimalInitAsync$slambda(resultContinuation);
    var l = function ($completion) {
      return i.e1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function WaltidServices() {
  }
  protoOf(WaltidServices).o6j = function ($completion) {
    return DidService_getInstance().init$default(VOID, VOID, $completion);
  };
  protoOf(WaltidServices).l9r = function ($completion) {
    return DidService_getInstance().l9r($completion);
  };
  protoOf(WaltidServices).o6o = function () {
    var tmp = WaltidServices$initAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(WaltidServices).m9x = function () {
    var tmp = WaltidServices$minimalInitAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var WaltidServices_instance;
  function WaltidServices_getInstance() {
    return WaltidServices_instance;
  }
  function EnumUtils() {
  }
  var EnumUtils_instance;
  function EnumUtils_getInstance() {
    return EnumUtils_instance;
  }
  function ExtensionMethods() {
  }
  protoOf(ExtensionMethods).ensurePrefix = function (_this__u8e3s4, prefix) {
    // Inline function 'kotlin.takeIf' call
    var tmp;
    if (startsWith(_this__u8e3s4, prefix)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? prefix + _this__u8e3s4 : tmp0_elvis_lhs;
  };
  var ExtensionMethods_instance;
  function ExtensionMethods_getInstance() {
    return ExtensionMethods_instance;
  }
  function importKey($this, element, $completion) {
    var tmp = new $importKeyCOROUTINE$53($this, element, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function importJwk($this, element, $completion) {
    var tmp = Companion_instance_4.u7f(element.toString(), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  }
  function importBase58($this, content, type, $completion) {
    var tmp = new $importBase58COROUTINE$54($this, content, type, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function importMultibase($this, content, $completion) {
    var tmp = KeyUtils_instance.ubo(content, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  }
  function importHex($this, content, type, $completion) {
    var tmp = new $importHexCOROUTINE$55($this, content, type, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function fromHexString($this, hexString) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = chunked(replace(hexString, ' ', ''), 2);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = toByte(toInt(item, 16));
      destination.n(tmp$ret$0);
    }
    return toByteArray_0(destination);
  }
  function KeyMaterial$getAsync$slambda($element, resultContinuation) {
    this.kbz_1 = $element;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyMaterial$getAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeyMaterial$getAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(KeyMaterial$getAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = KeyMaterial_instance.ybb(this.kbz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(KeyMaterial$getAsync$slambda).ia = function (completion) {
    return new KeyMaterial$getAsync$slambda(this.kbz_1, completion);
  };
  function KeyMaterial$getAsync$slambda_0($element, resultContinuation) {
    var i = new KeyMaterial$getAsync$slambda($element, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getCOROUTINE$52(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tbz_1 = _this__u8e3s4;
    this.ubz_1 = element;
  }
  protoOf($getCOROUTINE$52).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.vbz_1 = this.ubz_1;
            var tmp_0 = this.vbz_1;
            if (tmp_0 instanceof JsonObject) {
              this.m9_1 = 1;
              suspendResult = importKey(this.tbz_1, this.ubz_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              throw Exception_init_$Create$('Failed to find public key element: ' + toString_0(this.ubz_1));
            }

          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.wbz_1 = suspendResult.zo_1;
            this.m9_1 = 3;
            continue $sm;
          case 3:
            return new Result(this.wbz_1);
          case 4:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 4) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getCOROUTINE$52)['<set-state>'] = protoOf($getCOROUTINE$52).t9;
  protoOf($getCOROUTINE$52)['<get-state>'] = protoOf($getCOROUTINE$52).u9;
  protoOf($getCOROUTINE$52)['<set-exceptionState>'] = protoOf($getCOROUTINE$52).v9;
  protoOf($getCOROUTINE$52)['<get-exceptionState>'] = protoOf($getCOROUTINE$52).w9;
  protoOf($getCOROUTINE$52)['<set-result>'] = protoOf($getCOROUTINE$52).x9;
  protoOf($getCOROUTINE$52)['<get-result>'] = protoOf($getCOROUTINE$52).y9;
  protoOf($getCOROUTINE$52)['<set-exception>'] = protoOf($getCOROUTINE$52).z9;
  protoOf($getCOROUTINE$52)['<get-exception>'] = protoOf($getCOROUTINE$52).aa;
  protoOf($getCOROUTINE$52)['<set-finallyPath>'] = protoOf($getCOROUTINE$52).ba;
  protoOf($getCOROUTINE$52)['<get-finallyPath>'] = protoOf($getCOROUTINE$52).ca;
  protoOf($getCOROUTINE$52)['<get-context>'] = protoOf($getCOROUTINE$52).s9;
  function $importKeyCOROUTINE$53(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qbw_1 = _this__u8e3s4;
    this.rbw_1 = element;
  }
  protoOf($importKeyCOROUTINE$53).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 13;
            this.sbw_1 = get_jsonPrimitive(ensureNotNull(get_jsonObject(this.rbw_1).af('type'))).c4s();
            var tmp_0 = this;
            var tmp0_safe_receiver = get_jsonObject(this.rbw_1).af('publicKeyJwk');
            tmp_0.tbw_1 = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            if (this.tbw_1 == null) {
              this.ubw_1 = null;
              this.m9_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.vbw_1 = this.tbw_1;
              this.wbw_1 = this.vbw_1;
              var tmp_2 = this;
              tmp_2.xbw_1 = this.wbw_1;
              this.ybw_1 = this.xbw_1;
              this.m9_1 = 1;
              suspendResult = importJwk(KeyMaterial_instance, this.ybw_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 2;
              continue $sm;
            }

          case 1:
            this.zbw_1 = suspendResult.zo_1;
            suspendResult = new Result(this.zbw_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            var tmp_3 = this;
            return suspendResult;
          case 3:
            var tmp_4 = this;
            var tmp2_safe_receiver = get_jsonObject(this.rbw_1).af('publicKeyBase58');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            tmp_4.abx_1 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.c4s();
            if (this.abx_1 == null) {
              this.bbx_1 = null;
              this.m9_1 = 6;
              continue $sm;
            } else {
              var tmp_5 = this;
              tmp_5.cbx_1 = this.abx_1;
              this.dbx_1 = this.cbx_1;
              var tmp_6 = this;
              tmp_6.ebx_1 = this.dbx_1;
              this.fbx_1 = this.ebx_1;
              this.m9_1 = 4;
              suspendResult = importBase58(KeyMaterial_instance, this.fbx_1, KeyUtils_instance.getKeyTypeForVerificationMaterialType(this.sbw_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 5;
              continue $sm;
            }

          case 4:
            this.gbx_1 = suspendResult.zo_1;
            suspendResult = new Result(this.gbx_1);
            this.m9_1 = 5;
            continue $sm;
          case 5:
            var tmp_7 = this;
            return suspendResult;
          case 6:
            var tmp_8 = this;
            var tmp5_safe_receiver = get_jsonObject(this.rbw_1).af('publicKeyMultibase');
            var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : get_jsonPrimitive(tmp5_safe_receiver);
            tmp_8.hbx_1 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.c4s();
            if (this.hbx_1 == null) {
              this.ibx_1 = null;
              this.m9_1 = 9;
              continue $sm;
            } else {
              var tmp_9 = this;
              tmp_9.jbx_1 = this.hbx_1;
              this.kbx_1 = this.jbx_1;
              var tmp_10 = this;
              tmp_10.lbx_1 = this.kbx_1;
              this.mbx_1 = this.lbx_1;
              this.m9_1 = 7;
              suspendResult = importMultibase(KeyMaterial_instance, this.mbx_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 8;
              continue $sm;
            }

          case 7:
            this.nbx_1 = suspendResult.zo_1;
            suspendResult = new Result(this.nbx_1);
            this.m9_1 = 8;
            continue $sm;
          case 8:
            var tmp_11 = this;
            return suspendResult;
          case 9:
            var tmp_12 = this;
            var tmp8_safe_receiver = get_jsonObject(this.rbw_1).af('publicKeyHex');
            var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : get_jsonPrimitive(tmp8_safe_receiver);
            tmp_12.obx_1 = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.c4s();
            if (this.obx_1 == null) {
              this.pbx_1 = null;
              this.m9_1 = 12;
              continue $sm;
            } else {
              var tmp_13 = this;
              tmp_13.qbx_1 = this.obx_1;
              this.rbx_1 = this.qbx_1;
              var tmp_14 = this;
              tmp_14.sbx_1 = this.rbx_1;
              this.tbx_1 = this.sbx_1;
              this.m9_1 = 10;
              suspendResult = importHex(KeyMaterial_instance, this.tbx_1, KeyUtils_instance.getKeyTypeForVerificationMaterialType(this.sbw_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 11;
              continue $sm;
            }

          case 10:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 11;
            continue $sm;
          case 11:
            var tmp_15 = this;
            return suspendResult;
          case 12:
            throw IllegalArgumentException_init_$Create$('Public key format not supported: ' + this.rbw_1.toString() + '.');
          case 13:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 13) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  function $importBase58COROUTINE$54(_this__u8e3s4, content, type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cby_1 = _this__u8e3s4;
    this.dby_1 = content;
    this.eby_1 = type;
  }
  protoOf($importBase58COROUTINE$54).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.fby_1 = this.cby_1;
            this.gby_1 = this.fby_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.iby_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.jby_1 = this.gby_1;
            this.kby_1 = this.jby_1;
            this.m9_1 = 1;
            suspendResult = Companion_instance_4.b82(this.eby_1, decodeBase58(this.dby_1), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.iby_1;
            tmp_3.hby_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.hby_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.hby_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 3) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  function $importHexCOROUTINE$55(_this__u8e3s4, content, type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tby_1 = _this__u8e3s4;
    this.uby_1 = content;
    this.vby_1 = type;
  }
  protoOf($importHexCOROUTINE$55).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.wby_1 = this.tby_1;
            this.xby_1 = this.wby_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.zby_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.abz_1 = this.xby_1;
            this.bbz_1 = this.abz_1;
            this.m9_1 = 1;
            suspendResult = Companion_instance_4.b82(this.vby_1, fromHexString(this.bbz_1, this.uby_1), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.zby_1;
            tmp_3.yby_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.yby_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.yby_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 3) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  function KeyMaterial() {
  }
  protoOf(KeyMaterial).ybb = function (element, $completion) {
    var tmp = new $getCOROUTINE$52(this, element, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeyMaterial).xbz = function (element) {
    var tmp = KeyMaterial$getAsync$slambda_0(element, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var KeyMaterial_instance;
  function KeyMaterial_getInstance() {
    return KeyMaterial_instance;
  }
  function KeyUtils$fromPublicKeyMultiBaseAsync$slambda($identifier, resultContinuation) {
    this.gc0_1 = $identifier;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyUtils$fromPublicKeyMultiBaseAsync$slambda).v6t = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeyUtils$fromPublicKeyMultiBaseAsync$slambda).zb = function ($completion) {
    return this.v6t($completion);
  };
  protoOf(KeyUtils$fromPublicKeyMultiBaseAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = KeyUtils_instance.ubo(this.gc0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 3) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf(KeyUtils$fromPublicKeyMultiBaseAsync$slambda).ia = function (completion) {
    return new KeyUtils$fromPublicKeyMultiBaseAsync$slambda(this.gc0_1, completion);
  };
  function KeyUtils$fromPublicKeyMultiBaseAsync$slambda_0($identifier, resultContinuation) {
    var i = new KeyUtils$fromPublicKeyMultiBaseAsync$slambda($identifier, resultContinuation);
    var l = function ($completion) {
      return i.v6t($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $fromPublicKeyMultiBaseCOROUTINE$56(_this__u8e3s4, identifier, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pc0_1 = _this__u8e3s4;
    this.qc0_1 = identifier;
  }
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.rc0_1 = MultiBaseUtils_instance.w99(this.qc0_1);
            this.sc0_1 = MultiCodecUtils_getInstance().getMultiCodecKeyCodeUsingString(this.qc0_1);
            if (this.sc0_1 === _UInt___init__impl__l7qpdl(60241)) {
              this.m9_1 = 2;
              suspendResult = Companion_instance_4.u7f(decodeToString(this.rc0_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 3;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.uc0_1 = Companion_instance_2;
              this.m9_1 = 1;
              suspendResult = Companion_instance_4.b82(MultiCodecUtils_getInstance().getKeyTypeFromKeyCode(this.sc0_1), this.rc0_1, null, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp1 = suspendResult;
            var tmp_1 = this;
            this.uc0_1;
            tmp_1.tc0_1 = _Result___init__impl__xyqfz8(tmp1);
            this.m9_1 = 4;
            continue $sm;
          case 2:
            var unboxed = suspendResult.zo_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            this.tc0_1 = suspendResult.zo_1;
            this.m9_1 = 4;
            continue $sm;
          case 4:
            return new Result(this.tc0_1);
          case 5:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 5) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56)['<set-state>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$56).t9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56)['<get-state>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$56).u9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56)['<set-exceptionState>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$56).v9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56)['<get-exceptionState>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$56).w9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56)['<set-result>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$56).x9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56)['<get-result>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$56).y9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56)['<set-exception>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$56).z9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56)['<get-exception>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$56).aa;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56)['<set-finallyPath>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$56).ba;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56)['<get-finallyPath>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$56).ca;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$56)['<get-context>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$56).s9;
  function KeyUtils() {
  }
  protoOf(KeyUtils).ubo = function (identifier, $completion) {
    var tmp = new $fromPublicKeyMultiBaseCOROUTINE$56(this, identifier, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeyUtils).getKeyTypeForVerificationMaterialType = function (type) {
    var tmp0 = get_entries();
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$1 = element.q2_1.toLowerCase();
        var regex = Regex_init_$Create$('(' + tmp$ret$1 + ')(.*)');
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp$ret$3 = type.toLowerCase();
        if (regex.se(tmp$ret$3)) {
          tmp$ret$5 = element;
          break $l$block;
        }
      }
      tmp$ret$5 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$5;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Verification material type not supported: ' + type);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(KeyUtils).vc0 = function (identifier) {
    var tmp = KeyUtils$fromPublicKeyMultiBaseAsync$slambda_0(identifier, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var KeyUtils_instance;
  function KeyUtils_getInstance() {
    return KeyUtils_instance;
  }
  function extractVerificationMethod($this, element) {
    var tmp;
    if (element instanceof JsonArray) {
      tmp = first_0(get_jsonArray(element));
    } else {
      if (element instanceof JsonObject) {
        tmp = element;
      } else {
        throw IllegalArgumentException_init_$Create$('Illegal verification method type');
      }
    }
    return tmp;
  }
  function extractVerificationMaterial($this, element) {
    var tmp;
    if (element instanceof JsonObject) {
      tmp = get_jsonObject(element);
    } else {
      if (element instanceof JsonPrimitive) {
        tmp = JsonUtils_getInstance().toJsonElement(get_jsonPrimitive(element));
      } else {
        throw IllegalArgumentException_init_$Create$('Illegal verification material type');
      }
    }
    return tmp;
  }
  function VerificationMaterial() {
    VerificationMaterial_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.wc0_1 = ['verificationMethod', 'assertionMethod', 'capabilityInvocation', 'capabilityDelegation', 'keyAgreement', 'authentication'];
  }
  protoOf(VerificationMaterial).get = function (document) {
    var tmp0 = this.wc0_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (get_jsonObject(document).l2().x1(element)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var element_0 = get_jsonObject(document).af(tmp0_safe_receiver);
      var verificationMethod = extractVerificationMethod(VerificationMaterial_getInstance(), element_0);
      tmp = extractVerificationMaterial(VerificationMaterial_getInstance(), verificationMethod);
    }
    return tmp;
  };
  protoOf(VerificationMaterial).getAll = function (document) {
    var tmp0_safe_receiver = get_jsonObject(document).af('verificationMethod');
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (tmp0_safe_receiver instanceof JsonArray) {
        // Inline function 'kotlin.collections.map' call
        var this_0 = get_jsonArray(tmp0_safe_receiver);
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
        var _iterator__ex2g4s = this_0.p();
        while (_iterator__ex2g4s.q()) {
          var item = _iterator__ex2g4s.r();
          var tmp$ret$0 = extractVerificationMaterial(VerificationMaterial_getInstance(), item);
          destination.n(tmp$ret$0);
        }
        return destination;
      }
    }
    var tmp1_safe_receiver = this.get(document);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = listOf_0(tmp1_safe_receiver);
    }
    return tmp;
  };
  var VerificationMaterial_instance;
  function VerificationMaterial_getInstance() {
    if (VerificationMaterial_instance == null)
      new VerificationMaterial();
    return VerificationMaterial_instance;
  }
  function JsonCanonicalization() {
  }
  protoOf(JsonCanonicalization).getCanonicalBytes = function (json) {
    return toByteArray(canonicalize(json));
  };
  protoOf(JsonCanonicalization).getCanonicalString = function (json) {
    return canonicalize(json);
  };
  var JsonCanonicalization_instance;
  function JsonCanonicalization_getInstance() {
    return JsonCanonicalization_instance;
  }
  //region block: post-declaration
  protoOf($serializer).z29 = typeParametersSerializers;
  protoOf($serializer_0).z29 = typeParametersSerializers;
  protoOf($serializer_1).z29 = typeParametersSerializers;
  protoOf($serializer_2).z29 = typeParametersSerializers;
  protoOf($serializer_3).z29 = typeParametersSerializers;
  protoOf($serializer_4).z29 = typeParametersSerializers;
  protoOf($serializer_5).z29 = typeParametersSerializers;
  protoOf($serializer_6).z29 = typeParametersSerializers;
  protoOf($serializer_7).z29 = typeParametersSerializers;
  protoOf($serializer_8).z29 = typeParametersSerializers;
  protoOf($serializer_9).z29 = typeParametersSerializers;
  defineProp(protoOf(RegisteredServiceType), 'name', protoOf(RegisteredServiceType).s2);
  defineProp(protoOf(RegisteredServiceType), 'ordinal', protoOf(RegisteredServiceType).t2);
  defineProp(protoOf(VerificationMaterialType), 'name', protoOf(VerificationMaterialType).s2);
  defineProp(protoOf(VerificationMaterialType), 'ordinal', protoOf(VerificationMaterialType).t2);
  defineProp(protoOf(VerificationMethodType), 'name', protoOf(VerificationMethodType).s2);
  defineProp(protoOf(VerificationMethodType), 'ordinal', protoOf(VerificationMethodType).t2);
  defineProp(protoOf(VerificationRelationshipType), 'name', protoOf(VerificationRelationshipType).s2);
  defineProp(protoOf(VerificationRelationshipType), 'ordinal', protoOf(VerificationRelationshipType).t2);
  protoOf($serializer_10).z29 = typeParametersSerializers;
  defineProp(protoOf(LocalRegistrar), 'name', function () {
    return this.s2();
  });
  defineProp(protoOf(UniregistrarRegistrar), 'name', function () {
    return this.s2();
  });
  protoOf($serializer_11).z29 = typeParametersSerializers;
  protoOf($serializer_12).z29 = typeParametersSerializers;
  protoOf($serializer_13).z29 = typeParametersSerializers;
  protoOf($serializer_14).z29 = typeParametersSerializers;
  protoOf($serializer_15).z29 = typeParametersSerializers;
  protoOf($serializer_16).z29 = typeParametersSerializers;
  protoOf($serializer_17).z29 = typeParametersSerializers;
  defineProp(protoOf(DidState), 'state', function () {
    return this.u9();
  });
  protoOf($serializer_18).z29 = typeParametersSerializers;
  protoOf($serializer_19).z29 = typeParametersSerializers;
  protoOf($serializer_20).z29 = typeParametersSerializers;
  protoOf($serializer_21).z29 = typeParametersSerializers;
  protoOf($serializer_22).z29 = typeParametersSerializers;
  protoOf($serializer_23).z29 = typeParametersSerializers;
  protoOf($serializer_24).z29 = typeParametersSerializers;
  protoOf($serializer_25).z29 = typeParametersSerializers;
  protoOf($serializer_26).z29 = typeParametersSerializers;
  protoOf($serializer_27).z29 = typeParametersSerializers;
  protoOf($serializer_28).z29 = typeParametersSerializers;
  protoOf($serializer_29).z29 = typeParametersSerializers;
  protoOf($serializer_30).z29 = typeParametersSerializers;
  defineProp(protoOf(LocalResolver), 'name', function () {
    return this.s2();
  });
  defineProp(protoOf(UniresolverResolver), 'name', function () {
    return this.s2();
  });
  //endregion
  //region block: init
  Companion_instance_5 = new Companion();
  Companion_instance_8 = new Companion_2();
  Companion_instance_10 = new Companion_4();
  Companion_instance_12 = new Companion_6();
  Companion_instance_14 = new Companion_8();
  Companion_instance_17 = new Companion_11();
  Companion_instance_18 = new Companion_12();
  Companion_instance_19 = new Companion_13();
  Companion_instance_20 = new Companion_14();
  Companion_instance_21 = new Companion_15();
  Companion_instance_23 = new Companion_17();
  Builder_instance = new Builder();
  DidRegistrarRegistrations_instance = new DidRegistrarRegistrations();
  Companion_instance_26 = new Companion_20();
  Companion_instance_27 = new Companion_21();
  Companion_instance_28 = new Companion_22();
  Companion_instance_33 = new Companion_27();
  Companion_instance_37 = new Companion_31();
  Companion_instance_38 = new Companion_32();
  Companion_instance_40 = new Companion_34();
  Companion_instance_41 = new Companion_35();
  Companion_instance_42 = new Companion_36();
  Companion_instance_43 = new Companion_37();
  Companion_instance_44 = new Companion_38();
  Companion_instance_46 = new Companion_40();
  Companion_instance_48 = new Companion_42();
  DidResolverRegistrations_instance = new DidResolverRegistrations();
  Companion_instance_49 = new Companion_43();
  WaltidServices_instance = new WaltidServices();
  EnumUtils_instance = new EnumUtils();
  ExtensionMethods_instance = new ExtensionMethods();
  KeyMaterial_instance = new KeyMaterial();
  KeyUtils_instance = new KeyUtils();
  JsonCanonicalization_instance = new JsonCanonicalization();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    defineProp($id$walt$did$dids, 'DidService', DidService_getInstance);
    DidService.prototype.$initCOROUTINE$0 = $initCOROUTINE$0;
    DidService.prototype.$minimalInitCOROUTINE$1 = $minimalInitCOROUTINE$1;
    DidService.prototype.$updateResolversForMethodsCOROUTINE$2 = $updateResolversForMethodsCOROUTINE$2;
    DidService.prototype.$updateRegistrarsForMethodsCOROUTINE$3 = $updateRegistrarsForMethodsCOROUTINE$3;
    DidService.prototype.$registerDefaultDidMethodByKeyCOROUTINE$4 = $registerDefaultDidMethodByKeyCOROUTINE$4;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    defineProp($id$walt$did$dids, 'DidUtils', DidUtils_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    $id$walt$did$dids$document.DidCheqdDocument = DidCheqdDocument;
    $id$walt$did$dids$document.DidCheqdDocument.secondaryConstructor = secondaryConstructor;
    $id$walt$did$dids$document.DidCheqdDocument.VerificationMethod = VerificationMethod;
    defineProp($id$walt$did$dids$document.DidCheqdDocument.VerificationMethod, 'Companion', Companion_getInstance_1);
    defineProp($id$walt$did$dids$document.DidCheqdDocument, 'Companion', Companion_getInstance_2);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    $id$walt$did$dids$document.DidDocument = DidDocument;
    $id$walt$did$dids$document.DidDocument.secondaryConstructor = secondaryConstructor_0;
    defineProp($id$walt$did$dids$document.DidDocument, 'Companion', Companion_getInstance_3);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    $id$walt$did$dids$document.DidEbsiDocument = DidEbsiDocument;
    $id$walt$did$dids$document.DidEbsiDocument.secondaryConstructor = secondaryConstructor_1;
    defineProp($id$walt$did$dids$document.DidEbsiDocument, 'Companion', Companion_getInstance_5);
    $id$walt$did$dids$document.DidEbsiDocument.VerificationMethod = VerificationMethod_0;
    defineProp($id$walt$did$dids$document.DidEbsiDocument.VerificationMethod, 'Companion', Companion_getInstance_4);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    $id$walt$did$dids$document.DidJwkDocument = DidJwkDocument;
    $id$walt$did$dids$document.DidJwkDocument.secondaryConstructor = secondaryConstructor_2;
    $id$walt$did$dids$document.DidJwkDocument.VerificationMethod = VerificationMethod_1;
    defineProp($id$walt$did$dids$document.DidJwkDocument.VerificationMethod, 'Companion', Companion_getInstance_6);
    defineProp($id$walt$did$dids$document.DidJwkDocument, 'Companion', Companion_getInstance_7);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    $id$walt$did$dids$document.DidKeyDocument = DidKeyDocument;
    $id$walt$did$dids$document.DidKeyDocument.secondaryConstructor = secondaryConstructor_3;
    $id$walt$did$dids$document.DidKeyDocument.VerificationMethod = VerificationMethod_2;
    defineProp($id$walt$did$dids$document.DidKeyDocument.VerificationMethod, 'Companion', Companion_getInstance_8);
    defineProp($id$walt$did$dids$document.DidKeyDocument, 'Companion', Companion_getInstance_9);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    $id$walt$did$dids$document.DidWebDocument = DidWebDocument;
    $id$walt$did$dids$document.DidWebDocument.secondaryConstructor = secondaryConstructor_4;
    $id$walt$did$dids$document.DidWebDocument.VerificationMethod = VerificationMethod_3;
    defineProp($id$walt$did$dids$document.DidWebDocument.VerificationMethod, 'Companion', Companion_getInstance_10);
    defineProp($id$walt$did$dids$document.DidWebDocument, 'Companion', Companion_getInstance_11);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    var $id$walt$did$dids$document$models = $id$walt$did$dids$document.models || ($id$walt$did$dids$document.models = {});
    var $id$walt$did$dids$document$models$service = $id$walt$did$dids$document$models.service || ($id$walt$did$dids$document$models.service = {});
    $id$walt$did$dids$document$models$service.RegisteredServiceType = RegisteredServiceType;
    $id$walt$did$dids$document$models$service.RegisteredServiceType.values = values_0;
    $id$walt$did$dids$document$models$service.RegisteredServiceType.valueOf = valueOf;
    defineProp($id$walt$did$dids$document$models$service.RegisteredServiceType, 'LinkedDomains', RegisteredServiceType_LinkedDomains_getInstance);
    defineProp($id$walt$did$dids$document$models$service.RegisteredServiceType, 'LinkedVerifiablePresentation', RegisteredServiceType_LinkedVerifiablePresentation_getInstance);
    defineProp($id$walt$did$dids$document$models$service.RegisteredServiceType, 'DIDCommMessaging', RegisteredServiceType_DIDCommMessaging_getInstance);
    defineProp($id$walt$did$dids$document$models$service.RegisteredServiceType, 'WotThing', RegisteredServiceType_WotThing_getInstance);
    defineProp($id$walt$did$dids$document$models$service.RegisteredServiceType, 'CredentialRegistry', RegisteredServiceType_CredentialRegistry_getInstance);
    defineProp($id$walt$did$dids$document$models$service.RegisteredServiceType, 'OID4VCI', RegisteredServiceType_OID4VCI_getInstance);
    defineProp($id$walt$did$dids$document$models$service.RegisteredServiceType, 'OID4VP', RegisteredServiceType_OID4VP_getInstance);
    defineProp($id$walt$did$dids$document$models$service.RegisteredServiceType, 'Companion', Companion_getInstance_12);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    var $id$walt$did$dids$document$models = $id$walt$did$dids$document.models || ($id$walt$did$dids$document.models = {});
    var $id$walt$did$dids$document$models$service = $id$walt$did$dids$document$models.service || ($id$walt$did$dids$document$models.service = {});
    $id$walt$did$dids$document$models$service.Service = Service;
    defineProp($id$walt$did$dids$document$models$service.Service, 'Companion', Companion_getInstance_13);
    $id$walt$did$dids$document$models$service.ServiceMap = ServiceMap;
    defineProp($id$walt$did$dids$document$models$service.ServiceMap, 'Companion', Companion_getInstance_14);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    var $id$walt$did$dids$document$models = $id$walt$did$dids$document.models || ($id$walt$did$dids$document.models = {});
    var $id$walt$did$dids$document$models$service = $id$walt$did$dids$document$models.service || ($id$walt$did$dids$document$models.service = {});
    $id$walt$did$dids$document$models$service.ServiceEndpoint = ServiceEndpoint;
    defineProp($id$walt$did$dids$document$models$service.ServiceEndpoint, 'Companion', Companion_getInstance_15);
    $id$walt$did$dids$document$models$service.ServiceEndpointURL = ServiceEndpointURL;
    defineProp($id$walt$did$dids$document$models$service.ServiceEndpointURL, 'Companion', Companion_getInstance_16);
    $id$walt$did$dids$document$models$service.ServiceEndpointObject = ServiceEndpointObject;
    defineProp($id$walt$did$dids$document$models$service.ServiceEndpointObject, 'Companion', Companion_getInstance_17);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    var $id$walt$did$dids$document$models = $id$walt$did$dids$document.models || ($id$walt$did$dids$document.models = {});
    var $id$walt$did$dids$document$models$verification = $id$walt$did$dids$document$models.verification || ($id$walt$did$dids$document$models.verification = {});
    var $id$walt$did$dids$document$models$verification$method = $id$walt$did$dids$document$models$verification.method || ($id$walt$did$dids$document$models$verification.method = {});
    $id$walt$did$dids$document$models$verification$method.VerificationMaterialType = VerificationMaterialType;
    $id$walt$did$dids$document$models$verification$method.VerificationMaterialType.values = values_1;
    $id$walt$did$dids$document$models$verification$method.VerificationMaterialType.valueOf = valueOf_0;
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMaterialType, 'PublicKeyJwk', VerificationMaterialType_PublicKeyJwk_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMaterialType, 'PublicKeyMultibase', VerificationMaterialType_PublicKeyMultibase_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMaterialType, 'Companion', Companion_getInstance_18);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    var $id$walt$did$dids$document$models = $id$walt$did$dids$document.models || ($id$walt$did$dids$document.models = {});
    var $id$walt$did$dids$document$models$verification = $id$walt$did$dids$document$models.verification || ($id$walt$did$dids$document$models.verification = {});
    var $id$walt$did$dids$document$models$verification$method = $id$walt$did$dids$document$models$verification.method || ($id$walt$did$dids$document$models$verification.method = {});
    $id$walt$did$dids$document$models$verification$method.VerificationMethod = VerificationMethod_4;
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethod, 'Companion', Companion_getInstance_19);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    var $id$walt$did$dids$document$models = $id$walt$did$dids$document.models || ($id$walt$did$dids$document.models = {});
    var $id$walt$did$dids$document$models$verification = $id$walt$did$dids$document$models.verification || ($id$walt$did$dids$document$models.verification = {});
    var $id$walt$did$dids$document$models$verification$method = $id$walt$did$dids$document$models$verification.method || ($id$walt$did$dids$document$models$verification.method = {});
    $id$walt$did$dids$document$models$verification$method.VerificationMethodType = VerificationMethodType;
    $id$walt$did$dids$document$models$verification$method.VerificationMethodType.values = values_2;
    $id$walt$did$dids$document$models$verification$method.VerificationMethodType.valueOf = valueOf_1;
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethodType, 'JsonWebKey2020', VerificationMethodType_JsonWebKey2020_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethodType, 'EcdsaSecp256k1VerificationKey2019', VerificationMethodType_EcdsaSecp256k1VerificationKey2019_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethodType, 'Ed25519VerificationKey2020', VerificationMethodType_Ed25519VerificationKey2020_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethodType, 'Bls12381G1Key2020', VerificationMethodType_Bls12381G1Key2020_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethodType, 'Bls12381G2Key2020', VerificationMethodType_Bls12381G2Key2020_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethodType, 'PgpVerificationKey2021', VerificationMethodType_PgpVerificationKey2021_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethodType, 'RsaVerificationKey2018', VerificationMethodType_RsaVerificationKey2018_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethodType, 'X25519KeyAgreementKey2019', VerificationMethodType_X25519KeyAgreementKey2019_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethodType, 'EcdsaSecp256k1RecoveryMethod2020', VerificationMethodType_EcdsaSecp256k1RecoveryMethod2020_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethodType, 'VerifiableCondition2021', VerificationMethodType_VerifiableCondition2021_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$method.VerificationMethodType, 'Companion', Companion_getInstance_20);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    var $id$walt$did$dids$document$models = $id$walt$did$dids$document.models || ($id$walt$did$dids$document.models = {});
    var $id$walt$did$dids$document$models$verification = $id$walt$did$dids$document$models.verification || ($id$walt$did$dids$document$models.verification = {});
    var $id$walt$did$dids$document$models$verification$relationship = $id$walt$did$dids$document$models$verification.relationship || ($id$walt$did$dids$document$models$verification.relationship = {});
    $id$walt$did$dids$document$models$verification$relationship.VerificationRelationship = VerificationRelationship;
    defineProp($id$walt$did$dids$document$models$verification$relationship.VerificationRelationship, 'Builder', Builder_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$document = $id$walt$did$dids.document || ($id$walt$did$dids.document = {});
    var $id$walt$did$dids$document$models = $id$walt$did$dids$document.models || ($id$walt$did$dids$document.models = {});
    var $id$walt$did$dids$document$models$verification = $id$walt$did$dids$document$models.verification || ($id$walt$did$dids$document$models.verification = {});
    var $id$walt$did$dids$document$models$verification$relationship = $id$walt$did$dids$document$models$verification.relationship || ($id$walt$did$dids$document$models$verification.relationship = {});
    $id$walt$did$dids$document$models$verification$relationship.VerificationRelationshipType = VerificationRelationshipType;
    $id$walt$did$dids$document$models$verification$relationship.VerificationRelationshipType.values = values_3;
    $id$walt$did$dids$document$models$verification$relationship.VerificationRelationshipType.valueOf = valueOf_2;
    defineProp($id$walt$did$dids$document$models$verification$relationship.VerificationRelationshipType, 'AssertionMethod', VerificationRelationshipType_AssertionMethod_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$relationship.VerificationRelationshipType, 'Authentication', VerificationRelationshipType_Authentication_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$relationship.VerificationRelationshipType, 'CapabilityDelegation', VerificationRelationshipType_CapabilityDelegation_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$relationship.VerificationRelationshipType, 'CapabilityInvocation', VerificationRelationshipType_CapabilityInvocation_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$relationship.VerificationRelationshipType, 'KeyAgreement', VerificationRelationshipType_KeyAgreement_getInstance);
    defineProp($id$walt$did$dids$document$models$verification$relationship.VerificationRelationshipType, 'Companion', Companion_getInstance_21);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    defineProp($id$walt$did$dids$registrar, 'DidRegistrarRegistrations', DidRegistrarRegistrations_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    $id$walt$did$dids$registrar.DidResult = DidResult;
    defineProp($id$walt$did$dids$registrar.DidResult, 'Companion', Companion_getInstance_22);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    $id$walt$did$dids$registrar.LocalRegistrar = LocalRegistrar;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    $id$walt$did$dids$registrar.UniregistrarRegistrar = UniregistrarRegistrar;
    defineProp($id$walt$did$dids$registrar.UniregistrarRegistrar, 'Companion', Companion_getInstance_23);
    $id$walt$did$dids$registrar.UniregistrarRegistrar.$getSupportedMethodsCOROUTINE$6 = $getSupportedMethodsCOROUTINE$6;
    $id$walt$did$dids$registrar.UniregistrarRegistrar.$createCOROUTINE$8 = $createCOROUTINE$8;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidBtcrCreateOptions = DidBtcrCreateOptions;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidCheqdCreateOptions = DidCheqdCreateOptions;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidCreateOptions = DidCreateOptions;
    $id$walt$did$dids$registrar$dids.DidCreateOptions.secondaryConstructor = secondaryConstructor_5;
    defineProp($id$walt$did$dids$registrar$dids.DidCreateOptions, 'Companion', Companion_getInstance_24);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidDocConfig = DidDocConfig;
    defineProp($id$walt$did$dids$registrar$dids.DidDocConfig, 'Companion', Companion_getInstance_25);
    Companion_23.prototype.$buildFromPublicKeySetCOROUTINE$9 = $buildFromPublicKeySetCOROUTINE$9;
    Companion_23.prototype.$buildFromPublicKeySetVerificationConfigurationCOROUTINE$10 = $buildFromPublicKeySetVerificationConfigurationCOROUTINE$10;
    $id$walt$did$dids$registrar$dids.DidDocConfig.$toDidDocumentCOROUTINE$11 = $toDidDocumentCOROUTINE$11;
    $id$walt$did$dids$registrar$dids.VerificationMethodConfiguration = VerificationMethodConfiguration;
    defineProp($id$walt$did$dids$registrar$dids.VerificationMethodConfiguration, 'Companion', Companion_getInstance_26);
    $id$walt$did$dids$registrar$dids.ServiceConfiguration = ServiceConfiguration;
    defineProp($id$walt$did$dids$registrar$dids.ServiceConfiguration, 'Companion', Companion_getInstance_27);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidEbsiCreateOptions = DidEbsiCreateOptions;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidEthrCreateOptions = DidEthrCreateOptions;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidIonCreateOptions = DidIonCreateOptions;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidJwkCreateOptions = DidJwkCreateOptions;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidKeyCreateOptions = DidKeyCreateOptions;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidOydCreateOptions = DidOydCreateOptions;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidSovCreateOptions = DidSovCreateOptions;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidV1CreateOptions = DidV1CreateOptions;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$dids = $id$walt$did$dids$registrar.dids || ($id$walt$did$dids$registrar.dids = {});
    $id$walt$did$dids$registrar$dids.DidWebCreateOptions = DidWebCreateOptions;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    $id$walt$did$dids$registrar$local.LocalRegistrarMethod = LocalRegistrarMethod;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    $id$walt$did$dids$registrar$local$cheqd.DidCheqdRegistrar = DidCheqdRegistrar;
    $id$walt$did$dids$registrar$local$cheqd.DidCheqdRegistrar.$registerCOROUTINE$13 = $registerCOROUTINE$13;
    $id$walt$did$dids$registrar$local$cheqd.DidCheqdRegistrar.$registerByKeyCOROUTINE$14 = $registerByKeyCOROUTINE$14;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$didstates = $id$walt$did$dids$registrar$local$cheqd$models$job.didstates || ($id$walt$did$dids$registrar$local$cheqd$models$job.didstates = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$didstates.ActionDidState = ActionDidState;
    $id$walt$did$dids$registrar$local$cheqd$models$job$didstates.ActionDidState.Secret = Secret;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$didstates.ActionDidState.Secret, 'Companion', Companion_getInstance_28);
    $id$walt$did$dids$registrar$local$cheqd$models$job$didstates.ActionDidState.SigningRequest = SigningRequest;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$didstates.ActionDidState.SigningRequest, 'Companion', Companion_getInstance_29);
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$didstates.ActionDidState, 'Companion', Companion_getInstance_30);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$didstates = $id$walt$did$dids$registrar$local$cheqd$models$job.didstates || ($id$walt$did$dids$registrar$local$cheqd$models$job.didstates = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$didstates.DidDocument = DidDocument_0;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$didstates.DidDocument, 'Companion', Companion_getInstance_31);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$didstates = $id$walt$did$dids$registrar$local$cheqd$models$job.didstates || ($id$walt$did$dids$registrar$local$cheqd$models$job.didstates = {});
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$didstates, 'didStateSerializationModule', get_didStateSerializationModule);
    $id$walt$did$dids$registrar$local$cheqd$models$job$didstates.DidState = DidState;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$didstates.DidState, 'Companion', Companion_getInstance_32);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$didstates = $id$walt$did$dids$registrar$local$cheqd$models$job.didstates || ($id$walt$did$dids$registrar$local$cheqd$models$job.didstates = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$didstates.FailedDidState = FailedDidState;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$didstates.FailedDidState, 'Companion', Companion_getInstance_33);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$didstates = $id$walt$did$dids$registrar$local$cheqd$models$job.didstates || ($id$walt$did$dids$registrar$local$cheqd$models$job.didstates = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$didstates.FinishedDidState = FinishedDidState;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$didstates.FinishedDidState, 'Companion', Companion_getInstance_34);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$didstates = $id$walt$did$dids$registrar$local$cheqd$models$job.didstates || ($id$walt$did$dids$registrar$local$cheqd$models$job.didstates = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$didstates.Secret = Secret_0;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$didstates.Secret, 'Companion', Companion_getInstance_35);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$didstates = $id$walt$did$dids$registrar$local$cheqd$models$job.didstates || ($id$walt$did$dids$registrar$local$cheqd$models$job.didstates = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$didstates.SigningResponse = SigningResponse;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$didstates.SigningResponse, 'Companion', Companion_getInstance_36);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$didstates = $id$walt$did$dids$registrar$local$cheqd$models$job.didstates || ($id$walt$did$dids$registrar$local$cheqd$models$job.didstates = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$didstates.VerificationMethod = VerificationMethod_5;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$didstates.VerificationMethod, 'Companion', Companion_getInstance_37);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$request = $id$walt$did$dids$registrar$local$cheqd$models$job.request || ($id$walt$did$dids$registrar$local$cheqd$models$job.request = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$request.JobCreateRequest = JobCreateRequest;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$request.JobCreateRequest, 'Companion', Companion_getInstance_38);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$request = $id$walt$did$dids$registrar$local$cheqd$models$job.request || ($id$walt$did$dids$registrar$local$cheqd$models$job.request = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$request.JobDeactivateRequest = JobDeactivateRequest;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$request.JobDeactivateRequest, 'Companion', Companion_getInstance_39);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$request = $id$walt$did$dids$registrar$local$cheqd$models$job.request || ($id$walt$did$dids$registrar$local$cheqd$models$job.request = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$request.JobSignRequest = JobSignRequest;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$request.JobSignRequest, 'Companion', Companion_getInstance_40);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$response = $id$walt$did$dids$registrar$local$cheqd$models$job.response || ($id$walt$did$dids$registrar$local$cheqd$models$job.response = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$response.JobActionResponse = JobActionResponse;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$response.JobActionResponse, 'Companion', Companion_getInstance_41);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$response = $id$walt$did$dids$registrar$local$cheqd$models$job.response || ($id$walt$did$dids$registrar$local$cheqd$models$job.response = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$response$didresponse = $id$walt$did$dids$registrar$local$cheqd$models$job$response.didresponse || ($id$walt$did$dids$registrar$local$cheqd$models$job$response.didresponse = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$response$didresponse.CheqdKey = CheqdKey;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$response$didresponse.CheqdKey, 'Companion', Companion_getInstance_42);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$response = $id$walt$did$dids$registrar$local$cheqd$models$job.response || ($id$walt$did$dids$registrar$local$cheqd$models$job.response = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$response$didresponse = $id$walt$did$dids$registrar$local$cheqd$models$job$response.didresponse || ($id$walt$did$dids$registrar$local$cheqd$models$job$response.didresponse = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$response$didresponse.DidDocObject = DidDocObject;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$response$didresponse.DidDocObject, 'Companion', Companion_getInstance_43);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$cheqd = $id$walt$did$dids$registrar$local.cheqd || ($id$walt$did$dids$registrar$local.cheqd = {});
    var $id$walt$did$dids$registrar$local$cheqd$models = $id$walt$did$dids$registrar$local$cheqd.models || ($id$walt$did$dids$registrar$local$cheqd.models = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job = $id$walt$did$dids$registrar$local$cheqd$models.job || ($id$walt$did$dids$registrar$local$cheqd$models.job = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$response = $id$walt$did$dids$registrar$local$cheqd$models$job.response || ($id$walt$did$dids$registrar$local$cheqd$models$job.response = {});
    var $id$walt$did$dids$registrar$local$cheqd$models$job$response$didresponse = $id$walt$did$dids$registrar$local$cheqd$models$job$response.didresponse || ($id$walt$did$dids$registrar$local$cheqd$models$job$response.didresponse = {});
    $id$walt$did$dids$registrar$local$cheqd$models$job$response$didresponse.DidGetResponse = DidGetResponse;
    defineProp($id$walt$did$dids$registrar$local$cheqd$models$job$response$didresponse.DidGetResponse, 'Companion', Companion_getInstance_44);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$jwk = $id$walt$did$dids$registrar$local.jwk || ($id$walt$did$dids$registrar$local.jwk = {});
    $id$walt$did$dids$registrar$local$jwk.DidJwkRegistrar = DidJwkRegistrar;
    $id$walt$did$dids$registrar$local$jwk.DidJwkRegistrar.$registerCOROUTINE$20 = $registerCOROUTINE$20;
    $id$walt$did$dids$registrar$local$jwk.DidJwkRegistrar.$registerByKeyCOROUTINE$21 = $registerByKeyCOROUTINE$21;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$key = $id$walt$did$dids$registrar$local.key || ($id$walt$did$dids$registrar$local.key = {});
    $id$walt$did$dids$registrar$local$key.DidKeyRegistrar = DidKeyRegistrar;
    $id$walt$did$dids$registrar$local$key.DidKeyRegistrar.$registerCOROUTINE$22 = $registerCOROUTINE$22;
    $id$walt$did$dids$registrar$local$key.DidKeyRegistrar.$registerByKeyCOROUTINE$23 = $registerByKeyCOROUTINE$23;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$web = $id$walt$did$dids$registrar$local.web || ($id$walt$did$dids$registrar$local.web = {});
    $id$walt$did$dids$registrar$local$web.DidWebRegistrar = DidWebRegistrar;
    $id$walt$did$dids$registrar$local$web.DidWebRegistrar.$registerCOROUTINE$25 = $registerCOROUTINE$25;
    $id$walt$did$dids$registrar$local$web.DidWebRegistrar.$registerByKeyCOROUTINE$26 = $registerByKeyCOROUTINE$26;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    defineProp($id$walt$did$dids$resolver, 'DidResolverRegistrations', DidResolverRegistrations_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    $id$walt$did$dids$resolver.LocalResolver = LocalResolver;
    $id$walt$did$dids$resolver.LocalResolver.$resolveCOROUTINE$28 = $resolveCOROUTINE$28;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    $id$walt$did$dids$resolver.UniresolverResolver = UniresolverResolver;
    defineProp($id$walt$did$dids$resolver.UniresolverResolver, 'Companion', Companion_getInstance_45);
    $id$walt$did$dids$resolver.UniresolverResolver.$getSupportedMethodsCOROUTINE$29 = $getSupportedMethodsCOROUTINE$29;
    $id$walt$did$dids$resolver.UniresolverResolver.$resolveCOROUTINE$30 = $resolveCOROUTINE$30;
    $id$walt$did$dids$resolver.UniresolverResolver.$resolveToKeyCOROUTINE$31 = $resolveToKeyCOROUTINE$31;
    $id$walt$did$dids$resolver.UniresolverResolver.$resolveToKeysCOROUTINE$32 = $resolveToKeysCOROUTINE$32;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.DidCheqdResolver = DidCheqdResolver;
    $id$walt$did$dids$resolver$local.DidCheqdResolver.$resolveCOROUTINE$35 = $resolveCOROUTINE$35;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.DidEbsiResolver = DidEbsiResolver;
    $id$walt$did$dids$resolver$local.DidEbsiResolver.$resolveCOROUTINE$37 = $resolveCOROUTINE$37;
    $id$walt$did$dids$resolver$local.DidEbsiResolver.$resolveToKeyCOROUTINE$39 = $resolveToKeyCOROUTINE$39;
    $id$walt$did$dids$resolver$local.DidEbsiResolver.$resolveToKeysCOROUTINE$40 = $resolveToKeysCOROUTINE$40;
    $id$walt$did$dids$resolver$local.DidEbsiResolver.$tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41 = $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$41;
    $id$walt$did$dids$resolver$local.DidEbsiResolver.$tryConvertPublicKeyJwksToKeysCOROUTINE$42 = $tryConvertPublicKeyJwksToKeysCOROUTINE$42;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.DidJwkResolver = DidJwkResolver;
    $id$walt$did$dids$resolver$local.DidJwkResolver.$resolveCOROUTINE$43 = $resolveCOROUTINE$43;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.DidKeyResolver = DidKeyResolver;
    $id$walt$did$dids$resolver$local.DidKeyResolver.$resolveCOROUTINE$44 = $resolveCOROUTINE$44;
    $id$walt$did$dids$resolver$local.DidKeyResolver.$resolveToKeyCOROUTINE$45 = $resolveToKeyCOROUTINE$45;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.DidWebResolver = DidWebResolver;
    defineProp($id$walt$did$dids$resolver$local.DidWebResolver, 'Companion', Companion_getInstance_46);
    $id$walt$did$dids$resolver$local.DidWebResolver.$resolveCOROUTINE$46 = $resolveCOROUTINE$46;
    $id$walt$did$dids$resolver$local.DidWebResolver.$resolveToKeyCOROUTINE$47 = $resolveToKeyCOROUTINE$47;
    $id$walt$did$dids$resolver$local.DidWebResolver.$resolveToKeysCOROUTINE$48 = $resolveToKeysCOROUTINE$48;
    $id$walt$did$dids$resolver$local.DidWebResolver.$tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49 = $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$49;
    $id$walt$did$dids$resolver$local.DidWebResolver.$tryConvertPublicKeyJwksToKeysCOROUTINE$50 = $tryConvertPublicKeyJwksToKeysCOROUTINE$50;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.LocalResolverMethod = LocalResolverMethod;
    $id$walt$did$dids$resolver$local.LocalResolverMethod.$resolveToKeysCOROUTINE$51 = $resolveToKeysCOROUTINE$51;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$helpers = $id$walt$did.helpers || ($id$walt$did.helpers = {});
    defineProp($id$walt$did$helpers, 'WaltidServices', WaltidServices_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$utils = $id$walt$did.utils || ($id$walt$did.utils = {});
    defineProp($id$walt$did$utils, 'EnumUtils', EnumUtils_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$utils = $id$walt$did.utils || ($id$walt$did.utils = {});
    defineProp($id$walt$did$utils, 'ExtensionMethods', ExtensionMethods_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$utils = $id$walt$did.utils || ($id$walt$did.utils = {});
    defineProp($id$walt$did$utils, 'KeyMaterial', KeyMaterial_getInstance);
    KeyMaterial.prototype.$getCOROUTINE$52 = $getCOROUTINE$52;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$utils = $id$walt$did.utils || ($id$walt$did.utils = {});
    defineProp($id$walt$did$utils, 'KeyUtils', KeyUtils_getInstance);
    KeyUtils.prototype.$fromPublicKeyMultiBaseCOROUTINE$56 = $fromPublicKeyMultiBaseCOROUTINE$56;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$utils = $id$walt$did.utils || ($id$walt$did.utils = {});
    defineProp($id$walt$did$utils, 'VerificationMaterial', VerificationMaterial_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$utils = $id$walt$did.utils || ($id$walt$did.utils = {});
    defineProp($id$walt$did$utils, 'JsonCanonicalization', JsonCanonicalization_getInstance);
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  kotlin_id_walt_crypto_waltid_crypto.$jsExportAll$(_);
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=dids.js.map
