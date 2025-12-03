(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'canonicalize', './kotlin-kotlin-stdlib.js', './crypto.js', './kotlin-logging.js', './kotlinx-coroutines-core.js', './kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js', './ktor-ktor-client-ktor-client-core.js', './ktor-ktor-client-ktor-client-plugins-ktor-client-logging.js', './ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js', './ktor-ktor-http.js', './ktor-ktor-utils.js', './ktor-ktor-io.js', './urlencoder-urlencoder-lib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('canonicalize'), require('./kotlin-kotlin-stdlib.js'), require('./crypto.js'), require('./kotlin-logging.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./ktor-ktor-client-ktor-client-plugins-ktor-client-logging.js'), require('./ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js'), require('./ktor-ktor-http.js'), require('./ktor-ktor-utils.js'), require('./ktor-ktor-io.js'), require('./urlencoder-urlencoder-lib.js'));
  else {
    if (typeof canonicalize === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'canonicalize' was not found. Please, check whether 'canonicalize' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'dids'.");
    }
    if (typeof crypto === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'crypto' was not found. Please, check whether 'crypto' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' was not found. Please, check whether 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging' was not found. Please, check whether 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'dids'.");
    }
    if (typeof globalThis['urlencoder-urlencoder-lib'] === 'undefined') {
      throw new Error("Error loading module 'dids'. Its dependency 'urlencoder-urlencoder-lib' was not found. Please, check whether 'urlencoder-urlencoder-lib' is loaded prior to 'dids'.");
    }
    globalThis.dids = factory(typeof dids === 'undefined' ? {} : dids, canonicalize, globalThis['kotlin-kotlin-stdlib'], crypto, globalThis['kotlin-logging'], globalThis['kotlinx-coroutines-core'], globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'], globalThis['ktor-ktor-client-ktor-client-core'], globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'], globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'], globalThis['ktor-ktor-http'], globalThis['ktor-ktor-utils'], globalThis['ktor-ktor-io'], globalThis['urlencoder-urlencoder-lib']);
  }
}(function (_, canonicalize, kotlin_kotlin, kotlin_id_walt_crypto_waltid_crypto, kotlin_io_github_oshai_kotlin_logging, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_client_logging, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_http, kotlin_io_ktor_ktor_utils, kotlin_io_ktor_ktor_io, kotlin_net_thauvin_erik_urlencoder_urlencoder_lib) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var values = kotlin_id_walt_crypto_waltid_crypto.$_$.n;
  var equals = kotlin_kotlin.$_$.yf;
  var KeyType_Ed25519_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.a;
  var toBoolean = kotlin_kotlin.$_$.ph;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.w3;
  var toString = kotlin_kotlin.$_$.pk;
  var CoroutineImpl = kotlin_kotlin.$_$.bc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.lb;
  var initMetadataForLambda = kotlin_kotlin.$_$.cd;
  var VOID = kotlin_kotlin.$_$.j;
  var Result = kotlin_kotlin.$_$.ij;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var setOf = kotlin_kotlin.$_$.ia;
  var throwOnFailure = kotlin_kotlin.$_$.nk;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.b4;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.z3;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var reversed = kotlin_kotlin.$_$.ha;
  var emptyMap = kotlin_kotlin.$_$.l8;
  var NotImplementedError = kotlin_kotlin.$_$.ej;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var isInterface = kotlin_kotlin.$_$.md;
  var $runInAsync$ = kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var defineProp = kotlin_kotlin.$_$.qc;
  var listOf = kotlin_kotlin.$_$.r9;
  var removePrefix = kotlin_kotlin.$_$.vg;
  var substringBefore = kotlin_kotlin.$_$.lh;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var substringBefore_0 = kotlin_kotlin.$_$.mh;
  var substringAfter = kotlin_kotlin.$_$.jh;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.o1;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.r;
  var lazy = kotlin_kotlin.$_$.ik;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.yj;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d3;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b1;
  var toMap = kotlin_kotlin.$_$.ya;
  var toString_0 = kotlin_kotlin.$_$.fe;
  var hashCode = kotlin_kotlin.$_$.wc;
  var equals_0 = kotlin_kotlin.$_$.rc;
  var JsonElementSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var JsonUtils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.f;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var KtMap = kotlin_kotlin.$_$.w6;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.t;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c1;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a1;
  var listOf_0 = kotlin_kotlin.$_$.q9;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var THROW_IAE = kotlin_kotlin.$_$.lj;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var Enum = kotlin_kotlin.$_$.xi;
  var isBlank = kotlin_kotlin.$_$.hg;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.s;
  var KtSet = kotlin_kotlin.$_$.d7;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a6;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var first = kotlin_kotlin.$_$.u8;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var put = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g1;
  var JsonContentPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var Companion_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var Companion_instance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var createAnnotatedEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var enumEntries = kotlin_kotlin.$_$.dc;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kk;
  var Pair = kotlin_kotlin.$_$.hj;
  var plus = kotlin_kotlin.$_$.ca;
  var Companion_instance_2 = kotlin_kotlin.$_$.g6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v3;
  var createFailure = kotlin_kotlin.$_$.bk;
  var setOf_0 = kotlin_kotlin.$_$.ja;
  var mapCapacity = kotlin_kotlin.$_$.s9;
  var coerceAtLeast = kotlin_kotlin.$_$.me;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var toSet = kotlin_kotlin.$_$.fb;
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
  var lazyOf = kotlin_kotlin.$_$.hk;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var url = kotlin_io_ktor_ktor_client_core.$_$.u;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.x;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.a1;
  var to = kotlin_kotlin.$_$.rk;
  var mapOf = kotlin_kotlin.$_$.t9;
  var emptyList = kotlin_kotlin.$_$.k8;
  var mapOf_0 = kotlin_kotlin.$_$.u9;
  var Companion_getInstance_0 = kotlin_id_walt_crypto_waltid_crypto.$_$.c;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var flatten = kotlin_kotlin.$_$.v8;
  var emptySet = kotlin_kotlin.$_$.m8;
  var UuidUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.j;
  var KtList = kotlin_kotlin.$_$.t6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var LogLevel_BODY_getInstance = kotlin_io_ktor_ktor_client_logging.$_$.b;
  var Companion_instance_4 = kotlin_id_walt_crypto_waltid_crypto.$_$.b;
  var KeyType = kotlin_id_walt_crypto_waltid_crypto.$_$.o;
  var toDoubleOrNull = kotlin_kotlin.$_$.rh;
  var toLongOrNull = kotlin_kotlin.$_$.xh;
  var Long = kotlin_kotlin.$_$.cj;
  var toIntOrNull = kotlin_kotlin.$_$.uh;
  var toHexString = kotlin_kotlin.$_$.th;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.a;
  var first_0 = kotlin_kotlin.$_$.t8;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.z1;
  var contentType = kotlin_io_ktor_ktor_http.$_$.j1;
  var Base64Utils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.d;
  var Default_getInstance_0 = kotlin_kotlin.$_$.r5;
  var isByteArray = kotlin_kotlin.$_$.gd;
  var JsonClassDiscriminator = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var PolymorphicModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.f1;
  var MultiBaseUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.h;
  var JsonCanonicalizationUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.e;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l4;
  var MultiCodecUtils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.i;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var contentEquals = kotlin_kotlin.$_$.r7;
  var UInt__hashCode_impl_z2mhuw = kotlin_kotlin.$_$.o4;
  var contentHashCode = kotlin_kotlin.$_$.s7;
  var UInt = kotlin_kotlin.$_$.qj;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var UrlEncoderUtil_getInstance = kotlin_net_thauvin_erik_urlencoder_urlencoder_lib.$_$.a;
  var replace = kotlin_kotlin.$_$.zg;
  var split = kotlin_kotlin.$_$.dh;
  var joinToString = kotlin_kotlin.$_$.e9;
  var toMutableMap = kotlin_kotlin.$_$.db;
  var get_HttpTimeout = kotlin_io_ktor_ktor_client_core.$_$.l;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.z2;
  var firstOrNull = kotlin_kotlin.$_$.r8;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.y3;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.r;
  var stackTraceToString = kotlin_kotlin.$_$.mk;
  var RuntimeException_init_$Create$_0 = kotlin_kotlin.$_$.x2;
  var Exception = kotlin_kotlin.$_$.zi;
  var contains = kotlin_kotlin.$_$.pf;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.s2;
  var decodeToString = kotlin_kotlin.$_$.rf;
  var newThrowable = kotlin_kotlin.$_$.ud;
  var drop = kotlin_kotlin.$_$.i8;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.n2;
  var startsWith = kotlin_kotlin.$_$.eh;
  var chunked = kotlin_kotlin.$_$.mf;
  var toInt = kotlin_kotlin.$_$.wh;
  var toByte = kotlin_kotlin.$_$.ce;
  var toByteArray_0 = kotlin_kotlin.$_$.ra;
  var decodeBase58 = kotlin_id_walt_crypto_waltid_crypto.$_$.p;
  var get_entries = kotlin_id_walt_crypto_waltid_crypto.$_$.m;
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
  initMetadataForCompanion(Companion_21);
  initMetadataForLambda(UniregistrarRegistrar$createAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniregistrarRegistrar$getSupportedMethodsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniregistrarRegistrar$createByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniregistrarRegistrar$updateAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniregistrarRegistrar$deleteAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getSupportedMethodsCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($getMethodsCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($createCOROUTINE$7, CoroutineImpl);
  initMetadataForClass(UniregistrarRegistrar, 'UniregistrarRegistrar', UniregistrarRegistrar, VOID, [DidRegistrar], [0, 1, 2]);
  initMetadataForClass(DidCreateOptions, 'DidCreateOptions', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForClass(DidBtcrCreateOptions, 'DidBtcrCreateOptions', VOID, DidCreateOptions);
  initMetadataForClass(DidCheqdCreateOptions, 'DidCheqdCreateOptions', VOID, DidCreateOptions);
  initMetadataForCompanion(Companion_22);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($buildFromPublicKeySetCOROUTINE$8, CoroutineImpl);
  initMetadataForCoroutine($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9, CoroutineImpl);
  initMetadataForCompanion(Companion_23, VOID, VOID, [4]);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(DidDocConfig$toDidDocumentAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($toDidDocumentCOROUTINE$10, CoroutineImpl);
  initMetadataForCoroutine($createVerificationMethodSetCOROUTINE$11, CoroutineImpl);
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
  initMetadataForCoroutine($registerCOROUTINE$12, CoroutineImpl);
  initMetadataForCoroutine($registerByKeyCOROUTINE$13, CoroutineImpl);
  initMetadataForCoroutine($createDidCOROUTINE$14, CoroutineImpl);
  initMetadataForCoroutine($initiateDidJobCOROUTINE$16, CoroutineImpl);
  initMetadataForCoroutine($finalizeDidJobCOROUTINE$17, CoroutineImpl);
  initMetadataForCoroutine($signPayloadCOROUTINE$18, CoroutineImpl);
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
  initMetadataForCoroutine($registerCOROUTINE$19, CoroutineImpl);
  initMetadataForCoroutine($registerByKeyCOROUTINE$20, CoroutineImpl);
  initMetadataForClass(DidJwkRegistrar, 'DidJwkRegistrar', DidJwkRegistrar, LocalRegistrarMethod, VOID, [1, 2]);
  initMetadataForLambda(DidKeyRegistrar$registerAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidKeyRegistrar$registerByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($registerCOROUTINE$21, CoroutineImpl);
  initMetadataForCoroutine($registerByKeyCOROUTINE$22, CoroutineImpl);
  initMetadataForCoroutine($getIdentifierComponentsCOROUTINE$23, CoroutineImpl);
  initMetadataForClass(DidKeyRegistrar, 'DidKeyRegistrar', DidKeyRegistrar, LocalRegistrarMethod, VOID, [1, 2]);
  initMetadataForClass(IdentifierComponents, 'IdentifierComponents');
  initMetadataForLambda(DidWebRegistrar$registerAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidWebRegistrar$registerByKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($registerCOROUTINE$24, CoroutineImpl);
  initMetadataForCoroutine($registerByKeyCOROUTINE$25, CoroutineImpl);
  initMetadataForCoroutine($registerByDidDocConfigCOROUTINE$26, CoroutineImpl);
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
  initMetadataForCoroutine($resolveCOROUTINE$27, CoroutineImpl);
  initMetadataForClass(LocalResolver, 'LocalResolver', LocalResolver, VOID, [DidResolver], [0, 1]);
  initMetadataForCompanion(Companion_43);
  initMetadataForLambda(UniresolverResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniresolverResolver$getSupportedMethodsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniresolverResolver$resolveToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(UniresolverResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getSupportedMethodsCOROUTINE$28, CoroutineImpl);
  initMetadataForCoroutine($resolveCOROUTINE$29, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeyCOROUTINE$30, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeysCOROUTINE$31, CoroutineImpl);
  initMetadataForCoroutine($getMethodsCOROUTINE$32, CoroutineImpl);
  initMetadataForClass(UniresolverResolver, 'UniresolverResolver', UniresolverResolver, VOID, [DidResolver], [0, 1]);
  initMetadataForLambda(DidCheqdResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidCheqdResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveCOROUTINE$34, CoroutineImpl);
  initMetadataForCoroutine($resolveDidCOROUTINE$35, CoroutineImpl);
  initMetadataForClass(LocalResolverMethod, 'LocalResolverMethod', VOID, VOID, VOID, [1]);
  initMetadataForClass(DidCheqdResolver, 'DidCheqdResolver', DidCheqdResolver, LocalResolverMethod, VOID, [1]);
  initMetadataForLambda(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidEbsiResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidEbsiResolver$resolveToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidEbsiResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveCOROUTINE$36, CoroutineImpl);
  initMetadataForCoroutine($resolveDidCOROUTINE$37, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeyCOROUTINE$38, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeysCOROUTINE$39, CoroutineImpl);
  initMetadataForCoroutine($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40, CoroutineImpl);
  initMetadataForCoroutine($tryConvertPublicKeyJwksToKeysCOROUTINE$41, CoroutineImpl);
  initMetadataForClass(DidEbsiResolver, 'DidEbsiResolver', VOID, LocalResolverMethod, VOID, [1]);
  initMetadataForLambda(DidJwkResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidJwkResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveCOROUTINE$42, CoroutineImpl);
  initMetadataForClass(DidJwkResolver, 'DidJwkResolver', DidJwkResolver, LocalResolverMethod, VOID, [1]);
  initMetadataForLambda(DidKeyResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidKeyResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveCOROUTINE$43, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeyCOROUTINE$44, CoroutineImpl);
  initMetadataForClass(DidKeyResolver, 'DidKeyResolver', DidKeyResolver, LocalResolverMethod, VOID, [1]);
  initMetadataForCompanion(Companion_44);
  initMetadataForLambda(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidWebResolver$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidWebResolver$resolveToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(DidWebResolver$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveCOROUTINE$45, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeyCOROUTINE$46, CoroutineImpl);
  initMetadataForCoroutine($resolveToKeysCOROUTINE$47, CoroutineImpl);
  initMetadataForCoroutine($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48, CoroutineImpl);
  initMetadataForCoroutine($tryConvertPublicKeyJwksToKeysCOROUTINE$49, CoroutineImpl);
  initMetadataForClass(DidWebResolver, 'DidWebResolver', VOID, LocalResolverMethod, VOID, [1]);
  initMetadataForLambda(LocalResolverMethod$resolveAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalResolverMethod$resolveToKeysAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(LocalResolverMethod$resolveToKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($resolveToKeysCOROUTINE$50, CoroutineImpl);
  initMetadataForLambda(WaltidServices$initAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(WaltidServices$minimalInitAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForObject(WaltidServices, 'WaltidServices', VOID, VOID, VOID, [0]);
  initMetadataForObject(EnumUtils, 'EnumUtils');
  initMetadataForObject(ExtensionMethods, 'ExtensionMethods');
  initMetadataForLambda(KeyMaterial$getAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getCOROUTINE$51, CoroutineImpl);
  initMetadataForCoroutine($importKeyCOROUTINE$52, CoroutineImpl);
  initMetadataForCoroutine($importBase58COROUTINE$53, CoroutineImpl);
  initMetadataForCoroutine($importHexCOROUTINE$54, CoroutineImpl);
  initMetadataForObject(KeyMaterial, 'KeyMaterial', VOID, VOID, VOID, [1, 2]);
  initMetadataForLambda(KeyUtils$fromPublicKeyMultiBaseAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($fromPublicKeyMultiBaseCOROUTINE$55, CoroutineImpl);
  initMetadataForObject(KeyUtils, 'KeyUtils', VOID, VOID, VOID, [1]);
  initMetadataForObject(VerificationMaterial, 'VerificationMaterial');
  initMetadataForObject(JsonCanonicalization, 'JsonCanonicalization');
  //endregion
  function DidManager() {
  }
  function getResolverForDid($this, did) {
    var method = DidUtils_getInstance().methodFromDid(did);
    var tmp0_elvis_lhs = $this.resolverMethods.m2(method);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No resolver for did method: ' + method);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function getRegistrarForMethod($this, method) {
    var tmp0_elvis_lhs = $this.registrarMethods.m2(method);
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
        var tmp1_safe_receiver = args.m2('key');
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'id.walt.did.utils.EnumUtils.enumValueIgnoreCase' call
          var value = tmp1_safe_receiver.q4u();
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
              if (equals(element.s2_1, value, true)) {
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
        var tmp3_safe_receiver = args.m2('useJwkJcsPub');
        var tmp_2;
        if (tmp3_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_2 = toBoolean(tmp3_safe_receiver.q4u());
        }

        var tmp4_elvis_lhs = tmp_2;
        tmp = new DidKeyCreateOptions(tmp_1, tmp4_elvis_lhs == null ? false : tmp4_elvis_lhs);
        break;
      case 'jwk':
        tmp = new DidJwkCreateOptions();
        break;
      case 'web':
        var tmp5_safe_receiver = args.m2('domain');
        var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.q4u();
        var tmp_3 = tmp6_elvis_lhs == null ? '' : tmp6_elvis_lhs;
        var tmp7_safe_receiver = args.m2('path');
        var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.q4u();
        tmp = new DidWebCreateOptions(tmp_3, tmp8_elvis_lhs == null ? '' : tmp8_elvis_lhs);
        break;
      case 'cheqd':
        var tmp9_safe_receiver = args.m2('network');
        var tmp10_elvis_lhs = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.q4u();
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
  protoOf(DidService$minimalInitAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidService$minimalInitAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(DidService$minimalInitAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = DidService_getInstance().l9u(this);
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
  protoOf(DidService$minimalInitAsync$slambda).ja = function (completion) {
    return new DidService$minimalInitAsync$slambda(completion);
  };
  function DidService$minimalInitAsync$slambda_0(resultContinuation) {
    var i = new DidService$minimalInitAsync$slambda(resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$registerAsync$slambda($options, resultContinuation) {
    this.u9u_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$registerAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidService$registerAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidService$registerAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = DidService_getInstance().w9u(this.u9u_1, this);
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
  protoOf(DidService$registerAsync$slambda).ja = function (completion) {
    return new DidService$registerAsync$slambda(this.u9u_1, completion);
  };
  function DidService$registerAsync$slambda_0($options, resultContinuation) {
    var i = new DidService$registerAsync$slambda($options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$initAsync$slambda($resolverUrl, $registrarUrl, resultContinuation) {
    this.f9v_1 = $resolverUrl;
    this.g9v_1 = $registrarUrl;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$initAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidService$initAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(DidService$initAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = DidService_getInstance().h9v(this.f9v_1, this.g9v_1, this);
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
  protoOf(DidService$initAsync$slambda).ja = function (completion) {
    return new DidService$initAsync$slambda(this.f9v_1, this.g9v_1, completion);
  };
  function DidService$initAsync$slambda_0($resolverUrl, $registrarUrl, resultContinuation) {
    var i = new DidService$initAsync$slambda($resolverUrl, $registrarUrl, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$updateResolversForMethodsAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$updateResolversForMethodsAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidService$updateResolversForMethodsAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(DidService$updateResolversForMethodsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = DidService_getInstance().q9v(this);
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
  protoOf(DidService$updateResolversForMethodsAsync$slambda).ja = function (completion) {
    return new DidService$updateResolversForMethodsAsync$slambda(completion);
  };
  function DidService$updateResolversForMethodsAsync$slambda_0(resultContinuation) {
    var i = new DidService$updateResolversForMethodsAsync$slambda(resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$registerDefaultDidMethodByKeyAsync$slambda($method, $key, $args, resultContinuation) {
    this.z9v_1 = $method;
    this.a9w_1 = $key;
    this.b9w_1 = $args;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$registerDefaultDidMethodByKeyAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidService$registerDefaultDidMethodByKeyAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidService$registerDefaultDidMethodByKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = DidService_getInstance().c9w(this.z9v_1, this.a9w_1, this.b9w_1, this);
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
  protoOf(DidService$registerDefaultDidMethodByKeyAsync$slambda).ja = function (completion) {
    return new DidService$registerDefaultDidMethodByKeyAsync$slambda(this.z9v_1, this.a9w_1, this.b9w_1, completion);
  };
  function DidService$registerDefaultDidMethodByKeyAsync$slambda_0($method, $key, $args, resultContinuation) {
    var i = new DidService$registerDefaultDidMethodByKeyAsync$slambda($method, $key, $args, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$resolveAsync$slambda($did, resultContinuation) {
    this.l9w_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$resolveAsync$slambda).m9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidService$resolveAsync$slambda).ac = function ($completion) {
    return this.m9w($completion);
  };
  protoOf(DidService$resolveAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = DidService_getInstance().n9w(this.l9w_1, this);
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
  protoOf(DidService$resolveAsync$slambda).ja = function (completion) {
    return new DidService$resolveAsync$slambda(this.l9w_1, completion);
  };
  function DidService$resolveAsync$slambda_0($did, resultContinuation) {
    var i = new DidService$resolveAsync$slambda($did, resultContinuation);
    var l = function ($completion) {
      return i.m9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$resolveToKeysAsync$slambda($did, resultContinuation) {
    this.w9w_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$resolveToKeysAsync$slambda).x9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidService$resolveToKeysAsync$slambda).ac = function ($completion) {
    return this.x9w($completion);
  };
  protoOf(DidService$resolveToKeysAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = DidService_getInstance().y9w(this.w9w_1, this);
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
  protoOf(DidService$resolveToKeysAsync$slambda).ja = function (completion) {
    return new DidService$resolveToKeysAsync$slambda(this.w9w_1, completion);
  };
  function DidService$resolveToKeysAsync$slambda_0($did, resultContinuation) {
    var i = new DidService$resolveToKeysAsync$slambda($did, resultContinuation);
    var l = function ($completion) {
      return i.x9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$updateRegistrarsForMethodsAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$updateRegistrarsForMethodsAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidService$updateRegistrarsForMethodsAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(DidService$updateRegistrarsForMethodsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = DidService_getInstance().h9x(this);
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
  protoOf(DidService$updateRegistrarsForMethodsAsync$slambda).ja = function (completion) {
    return new DidService$updateRegistrarsForMethodsAsync$slambda(completion);
  };
  function DidService$updateRegistrarsForMethodsAsync$slambda_0(resultContinuation) {
    var i = new DidService$updateRegistrarsForMethodsAsync$slambda(resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$resolveToKeyAsync$slambda($did, resultContinuation) {
    this.q9x_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$resolveToKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidService$resolveToKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(DidService$resolveToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = DidService_getInstance().r9x(this.q9x_1, this);
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
  protoOf(DidService$resolveToKeyAsync$slambda).ja = function (completion) {
    return new DidService$resolveToKeyAsync$slambda(this.q9x_1, completion);
  };
  function DidService$resolveToKeyAsync$slambda_0($did, resultContinuation) {
    var i = new DidService$resolveToKeyAsync$slambda($did, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $initCOROUTINE$0(_this__u8e3s4, resolverUrl, registrarUrl, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a9y_1 = _this__u8e3s4;
    this.b9y_1 = resolverUrl;
    this.c9y_1 = registrarUrl;
  }
  protoOf($initCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.a9y_1.registerAllResolvers(DidResolverRegistrations_instance.curatedDidResolvers(this.b9y_1));
            this.a9y_1.registerAllRegistrars(DidRegistrarRegistrations_instance.curatedDidRegistrars(this.c9y_1));
            this.n9_1 = 1;
            suspendResult = this.a9y_1.q9v(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n9_1 = 2;
            suspendResult = this.a9y_1.h9x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a9y_1.c9u_1.n6g(DidService$init$lambda);
            this.a9y_1.c9u_1.n6g(DidService$init$lambda_0);
            return Unit_instance;
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
  protoOf($initCOROUTINE$0)['<set-state>'] = protoOf($initCOROUTINE$0).u9;
  protoOf($initCOROUTINE$0)['<get-state>'] = protoOf($initCOROUTINE$0).v9;
  protoOf($initCOROUTINE$0)['<set-exceptionState>'] = protoOf($initCOROUTINE$0).w9;
  protoOf($initCOROUTINE$0)['<get-exceptionState>'] = protoOf($initCOROUTINE$0).x9;
  protoOf($initCOROUTINE$0)['<set-result>'] = protoOf($initCOROUTINE$0).y9;
  protoOf($initCOROUTINE$0)['<get-result>'] = protoOf($initCOROUTINE$0).z9;
  protoOf($initCOROUTINE$0)['<set-exception>'] = protoOf($initCOROUTINE$0).aa;
  protoOf($initCOROUTINE$0)['<get-exception>'] = protoOf($initCOROUTINE$0).ba;
  protoOf($initCOROUTINE$0)['<set-finallyPath>'] = protoOf($initCOROUTINE$0).ca;
  protoOf($initCOROUTINE$0)['<get-finallyPath>'] = protoOf($initCOROUTINE$0).da;
  protoOf($initCOROUTINE$0)['<get-context>'] = protoOf($initCOROUTINE$0).t9;
  function $minimalInitCOROUTINE$1(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l9y_1 = _this__u8e3s4;
  }
  protoOf($minimalInitCOROUTINE$1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.l9y_1.registerAllResolvers(setOf(new LocalResolver()));
            this.l9y_1.registerAllRegistrars(setOf(new LocalRegistrar()));
            this.n9_1 = 1;
            suspendResult = this.l9y_1.q9v(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n9_1 = 2;
            suspendResult = this.l9y_1.h9x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
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
  protoOf($minimalInitCOROUTINE$1)['<set-state>'] = protoOf($minimalInitCOROUTINE$1).u9;
  protoOf($minimalInitCOROUTINE$1)['<get-state>'] = protoOf($minimalInitCOROUTINE$1).v9;
  protoOf($minimalInitCOROUTINE$1)['<set-exceptionState>'] = protoOf($minimalInitCOROUTINE$1).w9;
  protoOf($minimalInitCOROUTINE$1)['<get-exceptionState>'] = protoOf($minimalInitCOROUTINE$1).x9;
  protoOf($minimalInitCOROUTINE$1)['<set-result>'] = protoOf($minimalInitCOROUTINE$1).y9;
  protoOf($minimalInitCOROUTINE$1)['<get-result>'] = protoOf($minimalInitCOROUTINE$1).z9;
  protoOf($minimalInitCOROUTINE$1)['<set-exception>'] = protoOf($minimalInitCOROUTINE$1).aa;
  protoOf($minimalInitCOROUTINE$1)['<get-exception>'] = protoOf($minimalInitCOROUTINE$1).ba;
  protoOf($minimalInitCOROUTINE$1)['<set-finallyPath>'] = protoOf($minimalInitCOROUTINE$1).ca;
  protoOf($minimalInitCOROUTINE$1)['<get-finallyPath>'] = protoOf($minimalInitCOROUTINE$1).da;
  protoOf($minimalInitCOROUTINE$1)['<get-context>'] = protoOf($minimalInitCOROUTINE$1).t9;
  function $updateResolversForMethodsCOROUTINE$2(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u9y_1 = _this__u8e3s4;
  }
  protoOf($updateResolversForMethodsCOROUTINE$2).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            tmp_0.v9y_1 = this.u9y_1.didResolvers;
            this.w9y_1 = this.v9y_1;
            this.x9y_1 = this.w9y_1.p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.x9y_1.q()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.y9y_1 = this.x9y_1.r();
            var tmp_1 = this;
            tmp_1.z9y_1 = this.y9y_1;
            this.a9z_1 = this.z9y_1;
            this.n9_1 = 2;
            suspendResult = this.a9z_1.b9z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var methods = suspendResult.up_1;
            if (_Result___get_isSuccess__impl__sndoy8(methods)) {
              throwOnFailure(methods);
              var tmp_2 = _Result___get_value__impl__bjfvqg(methods);
              var _iterator__ex2g4s = ((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()).p();
              while (_iterator__ex2g4s.q()) {
                var element = _iterator__ex2g4s.r();
                DidService_getInstance().registerResolverForMethod(element, this.a9z_1);
              }
            } else {
              var tmp_3 = DidService_getInstance().c9u_1;
              tmp_3.p6g(DidService$updateResolversForMethods$lambda(this.a9z_1, methods));
            }

            this.n9_1 = 1;
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
  protoOf($updateResolversForMethodsCOROUTINE$2)['<set-state>'] = protoOf($updateResolversForMethodsCOROUTINE$2).u9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-state>'] = protoOf($updateResolversForMethodsCOROUTINE$2).v9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<set-exceptionState>'] = protoOf($updateResolversForMethodsCOROUTINE$2).w9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-exceptionState>'] = protoOf($updateResolversForMethodsCOROUTINE$2).x9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<set-result>'] = protoOf($updateResolversForMethodsCOROUTINE$2).y9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-result>'] = protoOf($updateResolversForMethodsCOROUTINE$2).z9;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<set-exception>'] = protoOf($updateResolversForMethodsCOROUTINE$2).aa;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-exception>'] = protoOf($updateResolversForMethodsCOROUTINE$2).ba;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<set-finallyPath>'] = protoOf($updateResolversForMethodsCOROUTINE$2).ca;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-finallyPath>'] = protoOf($updateResolversForMethodsCOROUTINE$2).da;
  protoOf($updateResolversForMethodsCOROUTINE$2)['<get-context>'] = protoOf($updateResolversForMethodsCOROUTINE$2).t9;
  function $updateRegistrarsForMethodsCOROUTINE$3(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k9z_1 = _this__u8e3s4;
  }
  protoOf($updateRegistrarsForMethodsCOROUTINE$3).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            tmp_0.l9z_1 = this.k9z_1.didRegistrars;
            this.m9z_1 = this.l9z_1;
            this.n9z_1 = this.m9z_1.p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.n9z_1.q()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.o9z_1 = this.n9z_1.r();
            var tmp_1 = this;
            tmp_1.p9z_1 = this.o9z_1;
            this.q9z_1 = this.p9z_1;
            this.n9_1 = 2;
            suspendResult = this.q9z_1.b9z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var methods = suspendResult.up_1;
            if (_Result___get_isSuccess__impl__sndoy8(methods)) {
              throwOnFailure(methods);
              var tmp_2 = _Result___get_value__impl__bjfvqg(methods);
              var _iterator__ex2g4s = ((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()).p();
              while (_iterator__ex2g4s.q()) {
                var element = _iterator__ex2g4s.r();
                DidService_getInstance().registerRegistrarForMethod(element, this.q9z_1);
              }
            } else {
              var tmp_3 = DidService_getInstance().c9u_1;
              tmp_3.p6g(DidService$updateRegistrarsForMethods$lambda(this.q9z_1, methods));
            }

            this.n9_1 = 1;
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
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<set-state>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).u9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-state>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).v9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<set-exceptionState>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).w9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-exceptionState>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).x9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<set-result>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).y9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-result>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).z9;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<set-exception>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).aa;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-exception>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).ba;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<set-finallyPath>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).ca;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-finallyPath>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).da;
  protoOf($updateRegistrarsForMethodsCOROUTINE$3)['<get-context>'] = protoOf($updateRegistrarsForMethodsCOROUTINE$3).t9;
  function $registerDefaultDidMethodByKeyCOROUTINE$4(_this__u8e3s4, method, key, args, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z9z_1 = _this__u8e3s4;
    this.aa0_1 = method;
    this.ba0_1 = key;
    this.ca0_1 = args;
  }
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.da0_1 = getDidOptions(this.z9z_1, this.aa0_1, this.ca0_1);
            this.n9_1 = 1;
            suspendResult = this.z9z_1.ea0(this.aa0_1, this.ba0_1, this.da0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var result = suspendResult;
            return result;
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
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<set-state>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).u9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-state>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).v9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<set-exceptionState>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).w9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-exceptionState>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).x9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<set-result>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).y9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-result>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).z9;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<set-exception>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).aa;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-exception>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).ba;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<set-finallyPath>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).ca;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-finallyPath>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).da;
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4)['<get-context>'] = protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).t9;
  function DidService() {
    DidService_instance = this;
    var tmp = this;
    var tmp_0 = KotlinLogging_instance;
    tmp.c9u_1 = tmp_0.w6g(DidService$log$lambda);
    this.didResolvers = ArrayList_init_$Create$();
    this.didRegistrars = ArrayList_init_$Create$();
    this.resolverMethods = HashMap_init_$Create$();
    this.registrarMethods = HashMap_init_$Create$();
  }
  protoOf(DidService).fa0 = function () {
    return this.didResolvers;
  };
  protoOf(DidService).ga0 = function () {
    return this.didRegistrars;
  };
  protoOf(DidService).ha0 = function () {
    return this.resolverMethods;
  };
  protoOf(DidService).ia0 = function () {
    return this.registrarMethods;
  };
  protoOf(DidService).registerResolver = function (resolver) {
    return !this.didResolvers.w(resolver) ? this.didResolvers.n(resolver) : false;
  };
  protoOf(DidService).unregisterResolver = function (resolver) {
    return this.didResolvers.f2(resolver);
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
  protoOf(DidService).h9v = function (resolverUrl, registrarUrl, $completion) {
    var tmp = new $initCOROUTINE$0(this, resolverUrl, registrarUrl, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidService).init$default = function (resolverUrl, registrarUrl, $completion, $super) {
    resolverUrl = resolverUrl === VOID ? null : resolverUrl;
    registrarUrl = registrarUrl === VOID ? null : registrarUrl;
    return $super === VOID ? this.h9v(resolverUrl, registrarUrl, $completion) : $super.h9v.call(this, resolverUrl, registrarUrl, $completion);
  };
  protoOf(DidService).l9u = function ($completion) {
    var tmp = new $minimalInitCOROUTINE$1(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidService).registerRegistrar = function (registrar) {
    return !this.didRegistrars.w(registrar) ? this.didRegistrars.n(registrar) : false;
  };
  protoOf(DidService).unregisterRegistrar = function (registrar) {
    return this.didRegistrars.f2(registrar);
  };
  protoOf(DidService).registerResolverForMethod = function (method, resolver) {
    return this.resolverMethods.p2(method, resolver);
  };
  protoOf(DidService).registerRegistrarForMethod = function (method, registrar) {
    return this.registrarMethods.p2(method, registrar);
  };
  protoOf(DidService).q9v = function ($completion) {
    var tmp = new $updateResolversForMethodsCOROUTINE$2(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidService).h9x = function ($completion) {
    var tmp = new $updateRegistrarsForMethodsCOROUTINE$3(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidService).n9w = function (did, $completion) {
    var tmp = getResolverForDid(this, did).n9w(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidService).r9x = function (did, $completion) {
    var tmp = getResolverForDid(this, did).r9x(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidService).y9w = function (did, $completion) {
    var tmp = getResolverForDid(this, did).y9w(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidService).w9u = function (options, $completion) {
    return getRegistrarForMethod(this, options.method).ja0(options, $completion);
  };
  protoOf(DidService).ea0 = function (method, key, options, $completion) {
    return getRegistrarForMethod(this, method).ka0(key, options, $completion);
  };
  protoOf(DidService).registerByKey$default = function (method, key, options, $completion, $super) {
    options = options === VOID ? secondaryConstructor_5(method, emptyMap()) : options;
    return $super === VOID ? this.ea0(method, key, options, $completion) : $super.ea0.call(this, method, key, options, $completion);
  };
  protoOf(DidService).la0 = function (method, key, options, $completion) {
    return this.ea0(method, key, options, $completion);
  };
  protoOf(DidService).c9w = function (method, key, args, $completion) {
    var tmp = new $registerDefaultDidMethodByKeyCOROUTINE$4(this, method, key, args, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
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
  protoOf(DidService).ma0 = function () {
    var tmp = DidService$minimalInitAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).na0 = function (options) {
    var tmp = DidService$registerAsync$slambda_0(options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).oa0 = function (resolverUrl, registrarUrl) {
    var tmp = DidService$initAsync$slambda_0(resolverUrl, registrarUrl, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).initAsync$default = function (resolverUrl, registrarUrl, $super) {
    resolverUrl = resolverUrl === VOID ? null : resolverUrl;
    registrarUrl = registrarUrl === VOID ? null : registrarUrl;
    return $super === VOID ? this.oa0(resolverUrl, registrarUrl) : $super.oa0.call(this, resolverUrl, registrarUrl);
  };
  protoOf(DidService).pa0 = function () {
    var tmp = DidService$updateResolversForMethodsAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).qa0 = function (method, key, args) {
    var tmp = DidService$registerDefaultDidMethodByKeyAsync$slambda_0(method, key, args, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).ra0 = function (did) {
    var tmp = DidService$resolveAsync$slambda_0(did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).sa0 = function (did) {
    var tmp = DidService$resolveToKeysAsync$slambda_0(did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).ta0 = function () {
    var tmp = DidService$updateRegistrarsForMethodsAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).ua0 = function (did) {
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
    this.va0_1 = '^did:([^:]+):(.+)';
  }
  protoOf(DidUtils).wa0 = function () {
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
      tmp = ensureNotNull(tmp0_safe_receiver.ef().u(2)).ze_1;
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
  protoOf(Companion).m4u = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_5;
  function Companion_getInstance_1() {
    return Companion_instance_5;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidCheqdDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('type', false);
    tmp0_serialDesc.x2b('controller', false);
    tmp0_serialDesc.x2b('publicKeyJwk', false);
    this.xa0_1 = tmp0_serialDesc;
  }
  protoOf($serializer).ya0 = function (encoder, value) {
    var tmp0_desc = this.xa0_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.id);
    tmp1_output.w25(tmp0_desc, 1, value.type);
    tmp1_output.w25(tmp0_desc, 2, value.controller);
    tmp1_output.y25(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer).v20 = function (encoder, value) {
    return this.ya0(encoder, value instanceof VerificationMethod ? value : THROW_CCE());
  };
  protoOf($serializer).w20 = function (decoder) {
    var tmp0_desc = this.xa0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return VerificationMethod_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).u20 = function () {
    return this.xa0_1;
  };
  protoOf($serializer).m2c = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance().xa0_1);
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
  protoOf(VerificationMethod).x6b = function () {
    return this.id;
  };
  protoOf(VerificationMethod).za0 = function () {
    return this.type;
  };
  protoOf(VerificationMethod).aa1 = function () {
    return this.controller;
  };
  protoOf(VerificationMethod).ba1 = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod).yp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod).p70 = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod).ca1 = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.ca1(id, type, controller, publicKeyJwk) : $super.ca1.call(this, id, type, controller, publicKeyJwk);
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
    tmp.da1_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_5)];
  }
  protoOf(Companion_0).m4u = function () {
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
    tmp0_serialDesc.x2b('@context', true);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('verificationMethod', false);
    tmp0_serialDesc.x2b('assertionMethod', false);
    tmp0_serialDesc.x2b('authentication', false);
    tmp0_serialDesc.x2b('capabilityInvocation', false);
    tmp0_serialDesc.x2b('capabilityDelegation', false);
    tmp0_serialDesc.x2b('keyAgreement', false);
    this.ea1_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).fa1 = function (encoder, value) {
    var tmp0_desc = this.ea1_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().da1_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.context);
    tmp1_output.w25(tmp0_desc, 1, value.id);
    tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].b1(), value.verificationMethod);
    tmp1_output.a26(tmp0_desc, 3, tmp2_cached[3].b1(), value.assertionMethod);
    tmp1_output.a26(tmp0_desc, 4, tmp2_cached[4].b1(), value.authentication);
    tmp1_output.a26(tmp0_desc, 5, tmp2_cached[5].b1(), value.capabilityInvocation);
    tmp1_output.a26(tmp0_desc, 6, tmp2_cached[6].b1(), value.capabilityDelegation);
    tmp1_output.a26(tmp0_desc, 7, tmp2_cached[7].b1(), value.keyAgreement);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_0).v20 = function (encoder, value) {
    return this.fa1(encoder, value instanceof DidCheqdDocument ? value : THROW_CCE());
  };
  protoOf($serializer_0).w20 = function (decoder) {
    var tmp0_desc = this.ea1_1;
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
    var tmp13_cached = Companion_getInstance_2().da1_1;
    if (tmp12_input.x24()) {
      tmp4_local0 = tmp12_input.t24(tmp0_desc, 0, tmp13_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.v24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, tmp13_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, tmp13_cached[4].b1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, tmp13_cached[5].b1(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, tmp13_cached[6].b1(), tmp10_local6);
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
            tmp4_local0 = tmp12_input.t24(tmp0_desc, 0, tmp13_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.v24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, tmp13_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, tmp13_cached[4].b1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, tmp13_cached[5].b1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, tmp13_cached[6].b1(), tmp10_local6);
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
    return DidCheqdDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_0).u20 = function () {
    return this.ea1_1;
  };
  protoOf($serializer_0).m2c = function () {
    var tmp0_cached = Companion_getInstance_2().da1_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), StringSerializer_getInstance(), get_nullable(tmp0_cached[2].b1()), get_nullable(tmp0_cached[3].b1()), get_nullable(tmp0_cached[4].b1()), get_nullable(tmp0_cached[5].b1()), get_nullable(tmp0_cached[6].b1()), get_nullable(tmp0_cached[7].b1())];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function DidCheqdDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, $this) {
    if (!(254 === (254 & seen0))) {
      throwMissingFieldException(seen0, 254, $serializer_getInstance_0().ea1_1);
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
  protoOf(DidCheqdDocument).t9 = function () {
    return this.context;
  };
  protoOf(DidCheqdDocument).x6b = function () {
    return this.id;
  };
  protoOf(DidCheqdDocument).ga1 = function () {
    return this.verificationMethod;
  };
  protoOf(DidCheqdDocument).ha1 = function () {
    return this.assertionMethod;
  };
  protoOf(DidCheqdDocument).ia1 = function () {
    return this.authentication;
  };
  protoOf(DidCheqdDocument).ja1 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidCheqdDocument).ka1 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidCheqdDocument).la1 = function () {
    return this.keyAgreement;
  };
  protoOf(DidCheqdDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidCheqdDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.f4s(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidCheqdDocument).dc = function () {
    return this.context;
  };
  protoOf(DidCheqdDocument).ec = function () {
    return this.id;
  };
  protoOf(DidCheqdDocument).yp = function () {
    return this.verificationMethod;
  };
  protoOf(DidCheqdDocument).p70 = function () {
    return this.assertionMethod;
  };
  protoOf(DidCheqdDocument).w7k = function () {
    return this.authentication;
  };
  protoOf(DidCheqdDocument).o85 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidCheqdDocument).p85 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidCheqdDocument).ma1 = function () {
    return this.keyAgreement;
  };
  protoOf(DidCheqdDocument).na1 = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
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
    return $super === VOID ? this.na1(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.na1.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
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
    tmp.oa1_1 = [lazy(tmp_0, DidDocument$Companion$$childSerializers$_anonymous__v0p2uo)];
  }
  protoOf(Companion_1).m4u = function () {
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
    tmp0_serialDesc.x2b('content', false);
    this.pa1_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).qa1 = function (encoder, value) {
    var tmp0_desc = this.pa1_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().oa1_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.ra1_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_1).v20 = function (encoder, value) {
    return this.qa1(encoder, value instanceof DidDocument ? value : THROW_CCE());
  };
  protoOf($serializer_1).w20 = function (decoder) {
    var tmp0_desc = this.pa1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.h24(tmp0_desc);
    var tmp6_cached = Companion_getInstance_3().oa1_1;
    if (tmp5_input.x24()) {
      tmp4_local0 = tmp5_input.t24(tmp0_desc, 0, tmp6_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.t24(tmp0_desc, 0, tmp6_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.i24(tmp0_desc);
    return DidDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_1).u20 = function () {
    return this.pa1_1;
  };
  protoOf($serializer_1).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_3().oa1_1[0].b1()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function DidDocument_init_$Init$_0(seen0, content, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_1().pa1_1);
    }
    $this.ra1_1 = content;
    return $this;
  }
  function DidDocument_init_$Create$(seen0, content, serializationConstructorMarker) {
    return DidDocument_init_$Init$_0(seen0, content, serializationConstructorMarker, objectCreate(protoOf(DidDocument)));
  }
  function DidDocument(content) {
    Companion_getInstance_3();
    this.ra1_1 = content;
  }
  protoOf(DidDocument).equals = function (other) {
    return equals_0(this.ra1_1, other);
  };
  protoOf(DidDocument).hashCode = function () {
    return hashCode(this.ra1_1);
  };
  protoOf(DidDocument).toString = function () {
    return JsonUtils_getInstance().printAsJson(this.ra1_1);
  };
  protoOf(DidDocument).toJsonObject = function () {
    return new JsonObject(this.ra1_1);
  };
  protoOf(DidDocument).h = function () {
    return this.ra1_1.h();
  };
  protoOf(DidDocument).s2p = function (key) {
    return this.ra1_1.k2(key);
  };
  protoOf(DidDocument).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.s2p((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(DidDocument).o4u = function (value) {
    return this.ra1_1.l2(value);
  };
  protoOf(DidDocument).l2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.o4u(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(DidDocument).af = function (key) {
    return this.ra1_1.m2(key);
  };
  protoOf(DidDocument).m2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.af((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(DidDocument).asJsReadonlyMapView = function () {
    return this.ra1_1.asJsReadonlyMapView();
  };
  protoOf(DidDocument).s = function () {
    return this.ra1_1.s();
  };
  protoOf(DidDocument).n2 = function () {
    return this.ra1_1.n2();
  };
  protoOf(DidDocument).o2 = function () {
    return this.ra1_1.o2();
  };
  protoOf(DidDocument).z = function () {
    return this.ra1_1.z();
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
    $this$Json.x4s_1 = false;
    return Unit_instance;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).m4u = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_8;
  function Companion_getInstance_4() {
    return Companion_instance_8;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidEbsiDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('type', false);
    tmp0_serialDesc.x2b('controller', false);
    tmp0_serialDesc.x2b('publicKeyJwk', false);
    this.sa1_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).ta1 = function (encoder, value) {
    var tmp0_desc = this.sa1_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.id);
    tmp1_output.w25(tmp0_desc, 1, value.type);
    tmp1_output.w25(tmp0_desc, 2, value.controller);
    tmp1_output.y25(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_2).v20 = function (encoder, value) {
    return this.ta1(encoder, value instanceof VerificationMethod_0 ? value : THROW_CCE());
  };
  protoOf($serializer_2).w20 = function (decoder) {
    var tmp0_desc = this.sa1_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return VerificationMethod_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).u20 = function () {
    return this.sa1_1;
  };
  protoOf($serializer_2).m2c = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().sa1_1);
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
    tmp.ua1_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp_13, lazy(tmp_14, DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_6)];
    var tmp_15 = this;
    tmp_15.va1_1 = Json(VOID, DidEbsiDocument$Companion$json$lambda);
  }
  protoOf(Companion_3).m4u = function () {
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
  protoOf(VerificationMethod_0).x6b = function () {
    return this.id;
  };
  protoOf(VerificationMethod_0).za0 = function () {
    return this.type;
  };
  protoOf(VerificationMethod_0).aa1 = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_0).ba1 = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_0).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_0).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod_0).yp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_0).p70 = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_0).ca1 = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_0(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_0).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.ca1(id, type, controller, publicKeyJwk) : $super.ca1.call(this, id, type, controller, publicKeyJwk);
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
    var tmp_0 = get_jsonPrimitive(ensureNotNull(didDoc.af('id'))).q4u();
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
        var tmp$ret$0 = get_jsonPrimitive(item).q4u();
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
        var id = get_jsonPrimitive(ensureNotNull(verificationMethod.af('id'))).q4u();
        var type = get_jsonPrimitive(ensureNotNull(verificationMethod.af('type'))).q4u();
        var controller = get_jsonPrimitive(ensureNotNull(verificationMethod.af('controller'))).q4u();
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
        var tmp$ret$6 = get_jsonPrimitive(item_1).q4u();
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
        var tmp$ret$9 = get_jsonPrimitive(item_2).q4u();
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
        var tmp$ret$12 = get_jsonPrimitive(item_3).q4u();
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
        var tmp$ret$15 = get_jsonPrimitive(item_4).q4u();
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
        var tmp$ret$18 = get_jsonPrimitive(item_5).q4u();
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
    tmp0_serialDesc.x2b('@context', true);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('controller', false);
    tmp0_serialDesc.x2b('verificationMethod', false);
    tmp0_serialDesc.x2b('authentication', false);
    tmp0_serialDesc.x2b('assertionMethod', false);
    tmp0_serialDesc.x2b('capabilityInvocation', false);
    tmp0_serialDesc.x2b('capabilityDelegation', false);
    tmp0_serialDesc.x2b('keyAgreement', false);
    this.wa1_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).xa1 = function (encoder, value) {
    var tmp0_desc = this.wa1_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().ua1_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.context);
    tmp1_output.w25(tmp0_desc, 1, value.id);
    tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].b1(), value.controller);
    tmp1_output.a26(tmp0_desc, 3, tmp2_cached[3].b1(), value.verificationMethod);
    tmp1_output.a26(tmp0_desc, 4, tmp2_cached[4].b1(), value.authentication);
    tmp1_output.a26(tmp0_desc, 5, tmp2_cached[5].b1(), value.assertionMethod);
    tmp1_output.a26(tmp0_desc, 6, tmp2_cached[6].b1(), value.capabilityInvocation);
    tmp1_output.a26(tmp0_desc, 7, tmp2_cached[7].b1(), value.capabilityDelegation);
    tmp1_output.a26(tmp0_desc, 8, tmp2_cached[8].b1(), value.keyAgreement);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_3).v20 = function (encoder, value) {
    return this.xa1(encoder, value instanceof DidEbsiDocument ? value : THROW_CCE());
  };
  protoOf($serializer_3).w20 = function (decoder) {
    var tmp0_desc = this.wa1_1;
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
    var tmp13_input = decoder.h24(tmp0_desc);
    var tmp14_cached = Companion_getInstance_5().ua1_1;
    if (tmp13_input.x24()) {
      tmp4_local0 = tmp13_input.t24(tmp0_desc, 0, tmp14_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.v24(tmp0_desc, 2, tmp14_cached[2].b1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.v24(tmp0_desc, 3, tmp14_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.v24(tmp0_desc, 4, tmp14_cached[4].b1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.v24(tmp0_desc, 5, tmp14_cached[5].b1(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.v24(tmp0_desc, 6, tmp14_cached[6].b1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.v24(tmp0_desc, 7, tmp14_cached[7].b1(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.v24(tmp0_desc, 8, tmp14_cached[8].b1(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.t24(tmp0_desc, 0, tmp14_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.v24(tmp0_desc, 2, tmp14_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.v24(tmp0_desc, 3, tmp14_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.v24(tmp0_desc, 4, tmp14_cached[4].b1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.v24(tmp0_desc, 5, tmp14_cached[5].b1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.v24(tmp0_desc, 6, tmp14_cached[6].b1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.v24(tmp0_desc, 7, tmp14_cached[7].b1(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.v24(tmp0_desc, 8, tmp14_cached[8].b1(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.i24(tmp0_desc);
    return DidEbsiDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_3).u20 = function () {
    return this.wa1_1;
  };
  protoOf($serializer_3).m2c = function () {
    var tmp0_cached = Companion_getInstance_5().ua1_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), StringSerializer_getInstance(), get_nullable(tmp0_cached[2].b1()), get_nullable(tmp0_cached[3].b1()), get_nullable(tmp0_cached[4].b1()), get_nullable(tmp0_cached[5].b1()), get_nullable(tmp0_cached[6].b1()), get_nullable(tmp0_cached[7].b1()), get_nullable(tmp0_cached[8].b1())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function DidEbsiDocument_init_$Init$_0(seen0, context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, $this) {
    if (!(510 === (510 & seen0))) {
      throwMissingFieldException(seen0, 510, $serializer_getInstance_3().wa1_1);
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
  protoOf(DidEbsiDocument).t9 = function () {
    return this.context;
  };
  protoOf(DidEbsiDocument).x6b = function () {
    return this.id;
  };
  protoOf(DidEbsiDocument).aa1 = function () {
    return this.controller;
  };
  protoOf(DidEbsiDocument).ga1 = function () {
    return this.verificationMethod;
  };
  protoOf(DidEbsiDocument).ia1 = function () {
    return this.authentication;
  };
  protoOf(DidEbsiDocument).ha1 = function () {
    return this.assertionMethod;
  };
  protoOf(DidEbsiDocument).ja1 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidEbsiDocument).ka1 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidEbsiDocument).la1 = function () {
    return this.keyAgreement;
  };
  protoOf(DidEbsiDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Companion_getInstance_5().va1_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidEbsiDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.f4s(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidEbsiDocument).dc = function () {
    return this.context;
  };
  protoOf(DidEbsiDocument).ec = function () {
    return this.id;
  };
  protoOf(DidEbsiDocument).yp = function () {
    return this.controller;
  };
  protoOf(DidEbsiDocument).p70 = function () {
    return this.verificationMethod;
  };
  protoOf(DidEbsiDocument).w7k = function () {
    return this.authentication;
  };
  protoOf(DidEbsiDocument).o85 = function () {
    return this.assertionMethod;
  };
  protoOf(DidEbsiDocument).p85 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidEbsiDocument).ma1 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidEbsiDocument).ya1 = function () {
    return this.keyAgreement;
  };
  protoOf(DidEbsiDocument).za1 = function (context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement) {
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
    return $super === VOID ? this.za1(context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.za1.call(this, context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement);
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
  protoOf(Companion_4).m4u = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_10;
  function Companion_getInstance_6() {
    return Companion_instance_10;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidJwkDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('type', false);
    tmp0_serialDesc.x2b('controller', false);
    tmp0_serialDesc.x2b('publicKeyJwk', false);
    this.aa2_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).ba2 = function (encoder, value) {
    var tmp0_desc = this.aa2_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.id);
    tmp1_output.w25(tmp0_desc, 1, value.type);
    tmp1_output.w25(tmp0_desc, 2, value.controller);
    tmp1_output.y25(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_4).v20 = function (encoder, value) {
    return this.ba2(encoder, value instanceof VerificationMethod_1 ? value : THROW_CCE());
  };
  protoOf($serializer_4).w20 = function (decoder) {
    var tmp0_desc = this.aa2_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return VerificationMethod_init_$Create$_1(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_4).u20 = function () {
    return this.aa2_1;
  };
  protoOf($serializer_4).m2c = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_4().aa2_1);
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
  protoOf(VerificationMethod_1).x6b = function () {
    return this.id;
  };
  protoOf(VerificationMethod_1).za0 = function () {
    return this.type;
  };
  protoOf(VerificationMethod_1).aa1 = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_1).ba1 = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_1).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_1).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod_1).yp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_1).p70 = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_1).ca1 = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_1(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_1).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.ca1(id, type, controller, publicKeyJwk) : $super.ca1.call(this, id, type, controller, publicKeyJwk);
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
    tmp.ca2_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_5)];
  }
  protoOf(Companion_5).m4u = function () {
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
    tmp0_serialDesc.x2b('@context', true);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('verificationMethod', false);
    tmp0_serialDesc.x2b('assertionMethod', false);
    tmp0_serialDesc.x2b('authentication', false);
    tmp0_serialDesc.x2b('capabilityInvocation', false);
    tmp0_serialDesc.x2b('capabilityDelegation', false);
    tmp0_serialDesc.x2b('keyAgreement', false);
    this.da2_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).ea2 = function (encoder, value) {
    var tmp0_desc = this.da2_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().ca2_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.context);
    tmp1_output.w25(tmp0_desc, 1, value.id);
    tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].b1(), value.verificationMethod);
    tmp1_output.a26(tmp0_desc, 3, tmp2_cached[3].b1(), value.assertionMethod);
    tmp1_output.a26(tmp0_desc, 4, tmp2_cached[4].b1(), value.authentication);
    tmp1_output.a26(tmp0_desc, 5, tmp2_cached[5].b1(), value.capabilityInvocation);
    tmp1_output.a26(tmp0_desc, 6, tmp2_cached[6].b1(), value.capabilityDelegation);
    tmp1_output.a26(tmp0_desc, 7, tmp2_cached[7].b1(), value.keyAgreement);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_5).v20 = function (encoder, value) {
    return this.ea2(encoder, value instanceof DidJwkDocument ? value : THROW_CCE());
  };
  protoOf($serializer_5).w20 = function (decoder) {
    var tmp0_desc = this.da2_1;
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
    var tmp13_cached = Companion_getInstance_7().ca2_1;
    if (tmp12_input.x24()) {
      tmp4_local0 = tmp12_input.t24(tmp0_desc, 0, tmp13_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.v24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, tmp13_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, tmp13_cached[4].b1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, tmp13_cached[5].b1(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, tmp13_cached[6].b1(), tmp10_local6);
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
            tmp4_local0 = tmp12_input.t24(tmp0_desc, 0, tmp13_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.v24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, tmp13_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, tmp13_cached[4].b1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, tmp13_cached[5].b1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, tmp13_cached[6].b1(), tmp10_local6);
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
    return DidJwkDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_5).u20 = function () {
    return this.da2_1;
  };
  protoOf($serializer_5).m2c = function () {
    var tmp0_cached = Companion_getInstance_7().ca2_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), StringSerializer_getInstance(), get_nullable(tmp0_cached[2].b1()), get_nullable(tmp0_cached[3].b1()), get_nullable(tmp0_cached[4].b1()), get_nullable(tmp0_cached[5].b1()), get_nullable(tmp0_cached[6].b1()), get_nullable(tmp0_cached[7].b1())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function DidJwkDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, $this) {
    if (!(254 === (254 & seen0))) {
      throwMissingFieldException(seen0, 254, $serializer_getInstance_5().da2_1);
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
  protoOf(DidJwkDocument).t9 = function () {
    return this.context;
  };
  protoOf(DidJwkDocument).x6b = function () {
    return this.id;
  };
  protoOf(DidJwkDocument).ga1 = function () {
    return this.verificationMethod;
  };
  protoOf(DidJwkDocument).ha1 = function () {
    return this.assertionMethod;
  };
  protoOf(DidJwkDocument).ia1 = function () {
    return this.authentication;
  };
  protoOf(DidJwkDocument).ja1 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidJwkDocument).ka1 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidJwkDocument).la1 = function () {
    return this.keyAgreement;
  };
  protoOf(DidJwkDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidJwkDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.f4s(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidJwkDocument).dc = function () {
    return this.context;
  };
  protoOf(DidJwkDocument).ec = function () {
    return this.id;
  };
  protoOf(DidJwkDocument).yp = function () {
    return this.verificationMethod;
  };
  protoOf(DidJwkDocument).p70 = function () {
    return this.assertionMethod;
  };
  protoOf(DidJwkDocument).w7k = function () {
    return this.authentication;
  };
  protoOf(DidJwkDocument).o85 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidJwkDocument).p85 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidJwkDocument).ma1 = function () {
    return this.keyAgreement;
  };
  protoOf(DidJwkDocument).fa2 = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
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
    return $super === VOID ? this.fa2(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.fa2.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
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
  protoOf(Companion_6).m4u = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_12;
  function Companion_getInstance_8() {
    return Companion_instance_12;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidKeyDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('type', false);
    tmp0_serialDesc.x2b('controller', false);
    tmp0_serialDesc.x2b('publicKeyJwk', false);
    this.ga2_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).ha2 = function (encoder, value) {
    var tmp0_desc = this.ga2_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.id);
    tmp1_output.w25(tmp0_desc, 1, value.type);
    tmp1_output.w25(tmp0_desc, 2, value.controller);
    tmp1_output.y25(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_6).v20 = function (encoder, value) {
    return this.ha2(encoder, value instanceof VerificationMethod_2 ? value : THROW_CCE());
  };
  protoOf($serializer_6).w20 = function (decoder) {
    var tmp0_desc = this.ga2_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return VerificationMethod_init_$Create$_2(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_6).u20 = function () {
    return this.ga2_1;
  };
  protoOf($serializer_6).m2c = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_6().ga2_1);
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
  protoOf(VerificationMethod_2).x6b = function () {
    return this.id;
  };
  protoOf(VerificationMethod_2).za0 = function () {
    return this.type;
  };
  protoOf(VerificationMethod_2).aa1 = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_2).ba1 = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_2).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_2).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod_2).yp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_2).p70 = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_2).ca1 = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_2(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_2).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.ca1(id, type, controller, publicKeyJwk) : $super.ca1.call(this, id, type, controller, publicKeyJwk);
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
    tmp.ia2_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_5)];
  }
  protoOf(Companion_7).m4u = function () {
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
    tmp0_serialDesc.x2b('@context', true);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('verificationMethod', false);
    tmp0_serialDesc.x2b('assertionMethod', false);
    tmp0_serialDesc.x2b('authentication', false);
    tmp0_serialDesc.x2b('capabilityInvocation', false);
    tmp0_serialDesc.x2b('capabilityDelegation', false);
    tmp0_serialDesc.x2b('keyAgreement', false);
    this.ja2_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).ka2 = function (encoder, value) {
    var tmp0_desc = this.ja2_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().ia2_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.context);
    tmp1_output.w25(tmp0_desc, 1, value.id);
    tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].b1(), value.verificationMethod);
    tmp1_output.a26(tmp0_desc, 3, tmp2_cached[3].b1(), value.assertionMethod);
    tmp1_output.a26(tmp0_desc, 4, tmp2_cached[4].b1(), value.authentication);
    tmp1_output.a26(tmp0_desc, 5, tmp2_cached[5].b1(), value.capabilityInvocation);
    tmp1_output.a26(tmp0_desc, 6, tmp2_cached[6].b1(), value.capabilityDelegation);
    tmp1_output.a26(tmp0_desc, 7, tmp2_cached[7].b1(), value.keyAgreement);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_7).v20 = function (encoder, value) {
    return this.ka2(encoder, value instanceof DidKeyDocument ? value : THROW_CCE());
  };
  protoOf($serializer_7).w20 = function (decoder) {
    var tmp0_desc = this.ja2_1;
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
    var tmp13_cached = Companion_getInstance_9().ia2_1;
    if (tmp12_input.x24()) {
      tmp4_local0 = tmp12_input.t24(tmp0_desc, 0, tmp13_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.v24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, tmp13_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, tmp13_cached[4].b1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, tmp13_cached[5].b1(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, tmp13_cached[6].b1(), tmp10_local6);
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
            tmp4_local0 = tmp12_input.t24(tmp0_desc, 0, tmp13_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.v24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, tmp13_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, tmp13_cached[4].b1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, tmp13_cached[5].b1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, tmp13_cached[6].b1(), tmp10_local6);
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
    return DidKeyDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_7).u20 = function () {
    return this.ja2_1;
  };
  protoOf($serializer_7).m2c = function () {
    var tmp0_cached = Companion_getInstance_9().ia2_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), StringSerializer_getInstance(), get_nullable(tmp0_cached[2].b1()), get_nullable(tmp0_cached[3].b1()), get_nullable(tmp0_cached[4].b1()), get_nullable(tmp0_cached[5].b1()), get_nullable(tmp0_cached[6].b1()), get_nullable(tmp0_cached[7].b1())];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function DidKeyDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, $this) {
    if (!(254 === (254 & seen0))) {
      throwMissingFieldException(seen0, 254, $serializer_getInstance_7().ja2_1);
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
  protoOf(DidKeyDocument).t9 = function () {
    return this.context;
  };
  protoOf(DidKeyDocument).x6b = function () {
    return this.id;
  };
  protoOf(DidKeyDocument).ga1 = function () {
    return this.verificationMethod;
  };
  protoOf(DidKeyDocument).ha1 = function () {
    return this.assertionMethod;
  };
  protoOf(DidKeyDocument).ia1 = function () {
    return this.authentication;
  };
  protoOf(DidKeyDocument).ja1 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidKeyDocument).ka1 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidKeyDocument).la1 = function () {
    return this.keyAgreement;
  };
  protoOf(DidKeyDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidKeyDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.f4s(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidKeyDocument).dc = function () {
    return this.context;
  };
  protoOf(DidKeyDocument).ec = function () {
    return this.id;
  };
  protoOf(DidKeyDocument).yp = function () {
    return this.verificationMethod;
  };
  protoOf(DidKeyDocument).p70 = function () {
    return this.assertionMethod;
  };
  protoOf(DidKeyDocument).w7k = function () {
    return this.authentication;
  };
  protoOf(DidKeyDocument).o85 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidKeyDocument).p85 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidKeyDocument).ma1 = function () {
    return this.keyAgreement;
  };
  protoOf(DidKeyDocument).la2 = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
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
    return $super === VOID ? this.la2(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.la2.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
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
  protoOf(Companion_8).m4u = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_14;
  function Companion_getInstance_10() {
    return Companion_instance_14;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidWebDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('type', false);
    tmp0_serialDesc.x2b('controller', false);
    tmp0_serialDesc.x2b('publicKeyJwk', false);
    this.ma2_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).na2 = function (encoder, value) {
    var tmp0_desc = this.ma2_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.id);
    tmp1_output.w25(tmp0_desc, 1, value.type);
    tmp1_output.w25(tmp0_desc, 2, value.controller);
    tmp1_output.y25(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_8).v20 = function (encoder, value) {
    return this.na2(encoder, value instanceof VerificationMethod_3 ? value : THROW_CCE());
  };
  protoOf($serializer_8).w20 = function (decoder) {
    var tmp0_desc = this.ma2_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return VerificationMethod_init_$Create$_3(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).u20 = function () {
    return this.ma2_1;
  };
  protoOf($serializer_8).m2c = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().ma2_1);
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
  protoOf(VerificationMethod_3).x6b = function () {
    return this.id;
  };
  protoOf(VerificationMethod_3).za0 = function () {
    return this.type;
  };
  protoOf(VerificationMethod_3).aa1 = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_3).ba1 = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_3).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_3).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod_3).yp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_3).p70 = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_3).ca1 = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_3(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_3).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.ca1(id, type, controller, publicKeyJwk) : $super.ca1.call(this, id, type, controller, publicKeyJwk);
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
    tmp.oa2_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_5)];
  }
  protoOf(Companion_9).m4u = function () {
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
    tmp0_serialDesc.x2b('@context', true);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('verificationMethod', false);
    tmp0_serialDesc.x2b('assertionMethod', false);
    tmp0_serialDesc.x2b('authentication', false);
    tmp0_serialDesc.x2b('capabilityInvocation', false);
    tmp0_serialDesc.x2b('capabilityDelegation', false);
    tmp0_serialDesc.x2b('keyAgreement', false);
    this.pa2_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).qa2 = function (encoder, value) {
    var tmp0_desc = this.pa2_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().oa2_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.context);
    tmp1_output.w25(tmp0_desc, 1, value.id);
    tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].b1(), value.verificationMethod);
    tmp1_output.a26(tmp0_desc, 3, tmp2_cached[3].b1(), value.assertionMethod);
    tmp1_output.a26(tmp0_desc, 4, tmp2_cached[4].b1(), value.authentication);
    tmp1_output.a26(tmp0_desc, 5, tmp2_cached[5].b1(), value.capabilityInvocation);
    tmp1_output.a26(tmp0_desc, 6, tmp2_cached[6].b1(), value.capabilityDelegation);
    tmp1_output.a26(tmp0_desc, 7, tmp2_cached[7].b1(), value.keyAgreement);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_9).v20 = function (encoder, value) {
    return this.qa2(encoder, value instanceof DidWebDocument ? value : THROW_CCE());
  };
  protoOf($serializer_9).w20 = function (decoder) {
    var tmp0_desc = this.pa2_1;
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
    var tmp13_cached = Companion_getInstance_11().oa2_1;
    if (tmp12_input.x24()) {
      tmp4_local0 = tmp12_input.t24(tmp0_desc, 0, tmp13_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.v24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, tmp13_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, tmp13_cached[4].b1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, tmp13_cached[5].b1(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, tmp13_cached[6].b1(), tmp10_local6);
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
            tmp4_local0 = tmp12_input.t24(tmp0_desc, 0, tmp13_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.v24(tmp0_desc, 2, tmp13_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, tmp13_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.v24(tmp0_desc, 4, tmp13_cached[4].b1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, tmp13_cached[5].b1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, tmp13_cached[6].b1(), tmp10_local6);
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
    return DidWebDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_9).u20 = function () {
    return this.pa2_1;
  };
  protoOf($serializer_9).m2c = function () {
    var tmp0_cached = Companion_getInstance_11().oa2_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), StringSerializer_getInstance(), get_nullable(tmp0_cached[2].b1()), get_nullable(tmp0_cached[3].b1()), get_nullable(tmp0_cached[4].b1()), get_nullable(tmp0_cached[5].b1()), get_nullable(tmp0_cached[6].b1()), get_nullable(tmp0_cached[7].b1())];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function DidWebDocument_init_$Init$_0(seen0, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement, serializationConstructorMarker, $this) {
    if (!(254 === (254 & seen0))) {
      throwMissingFieldException(seen0, 254, $serializer_getInstance_9().pa2_1);
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
  protoOf(DidWebDocument).t9 = function () {
    return this.context;
  };
  protoOf(DidWebDocument).x6b = function () {
    return this.id;
  };
  protoOf(DidWebDocument).ga1 = function () {
    return this.verificationMethod;
  };
  protoOf(DidWebDocument).ha1 = function () {
    return this.assertionMethod;
  };
  protoOf(DidWebDocument).ia1 = function () {
    return this.authentication;
  };
  protoOf(DidWebDocument).ja1 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidWebDocument).ka1 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidWebDocument).la1 = function () {
    return this.keyAgreement;
  };
  protoOf(DidWebDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidWebDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.f4s(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidWebDocument).dc = function () {
    return this.context;
  };
  protoOf(DidWebDocument).ec = function () {
    return this.id;
  };
  protoOf(DidWebDocument).yp = function () {
    return this.verificationMethod;
  };
  protoOf(DidWebDocument).p70 = function () {
    return this.assertionMethod;
  };
  protoOf(DidWebDocument).w7k = function () {
    return this.authentication;
  };
  protoOf(DidWebDocument).o85 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidWebDocument).p85 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidWebDocument).ma1 = function () {
    return this.keyAgreement;
  };
  protoOf(DidWebDocument).ra2 = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
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
    return $super === VOID ? this.ra2(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.ra2.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
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
    return $this.sa2_1.b1();
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
    tmp.sa2_1 = lazy(tmp_0, RegisteredServiceType$Companion$_anonymous__m68t26);
  }
  protoOf(Companion_10).m4u = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_10).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
  protoOf(Companion_11).m4u = function () {
    return ServiceSerializer_getInstance();
  };
  var Companion_instance_17;
  function Companion_getInstance_13() {
    return Companion_instance_17;
  }
  function Service(serviceMaps) {
    this.serviceMaps = serviceMaps;
  }
  protoOf(Service).va2 = function () {
    return this.serviceMaps;
  };
  protoOf(Service).dc = function () {
    return this.serviceMaps;
  };
  protoOf(Service).wa2 = function (serviceMaps) {
    return new Service(serviceMaps);
  };
  protoOf(Service).copy = function (serviceMaps, $super) {
    serviceMaps = serviceMaps === VOID ? this.serviceMaps : serviceMaps;
    return $super === VOID ? this.wa2(serviceMaps) : $super.wa2.call(this, serviceMaps);
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
  protoOf(Companion_12).m4u = function () {
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
      var _iterator__ex2g4s_0 = tmp0_safe_receiver.z().p();
      while (_iterator__ex2g4s_0.q()) {
        var element_0 = _iterator__ex2g4s_0.r();
        // Inline function 'kotlin.require' call
        if (!!get_reservedKeys().w(element_0.a1())) {
          var message_2 = 'Invalid attempt to override reserved Service property with key ' + element_0.a1() + ' via customProperties map';
          throw IllegalArgumentException_init_$Create$(toString_0(message_2));
        }
      }
    }
  }
  protoOf(ServiceMap).x6b = function () {
    return this.id;
  };
  protoOf(ServiceMap).za0 = function () {
    return this.type;
  };
  protoOf(ServiceMap).xa2 = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceMap).ya2 = function () {
    return this.customProperties;
  };
  protoOf(ServiceMap).dc = function () {
    return this.id;
  };
  protoOf(ServiceMap).ec = function () {
    return this.type;
  };
  protoOf(ServiceMap).yp = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceMap).p70 = function () {
    return this.customProperties;
  };
  protoOf(ServiceMap).za2 = function (id, type, serviceEndpoint, customProperties) {
    return new ServiceMap(id, type, serviceEndpoint, customProperties);
  };
  protoOf(ServiceMap).copy = function (id, type, serviceEndpoint, customProperties, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    serviceEndpoint = serviceEndpoint === VOID ? this.serviceEndpoint : serviceEndpoint;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.za2(id, type, serviceEndpoint, customProperties) : $super.za2.call(this, id, type, serviceEndpoint, customProperties);
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
    this.aa3_1 = SetSerializer(Companion_instance_18.m4u());
    this.ba3_1 = this.aa3_1.u20();
  }
  protoOf(ServiceSerializer).u20 = function () {
    return this.ba3_1;
  };
  protoOf(ServiceSerializer).ca3 = function (encoder, value) {
    return encoder.z25(SetSerializer(Companion_instance_18.m4u()), value.serviceMaps);
  };
  protoOf(ServiceSerializer).v20 = function (encoder, value) {
    return this.ca3(encoder, value instanceof Service ? value : THROW_CCE());
  };
  protoOf(ServiceSerializer).w20 = function (decoder) {
    return new Service(decoder.g24(SetSerializer(Companion_instance_18.m4u())));
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
      tmp_0 = element.p4u();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.w24();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var tmp$ret$2 = this_0.g4s(tmp$ret$1, element);
      tmp = setOf(tmp$ret$2);
    } else {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_3 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_4 = this_3.w24();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_5 = serializer(this_4, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
      tmp = this_3.g4s(tmp$ret$4, element);
    }
    return tmp;
  }
  function getServiceEndpoint($this, element) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (element instanceof JsonPrimitive) {
      tmp_1 = element.p4u();
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
      var this_1 = this_0.w24();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(ServiceEndpoint), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var tmp$ret$2 = this_0.g4s(tmp$ret$1, element);
      tmp = setOf(tmp$ret$2);
    } else {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_3 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_4 = this_3.w24();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_5 = serializer(this_4, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ServiceEndpoint), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
      tmp = this_3.g4s(tmp$ret$4, element);
    }
    return tmp;
  }
  function getCustomProperties($this, jsonObject) {
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = jsonObject.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      if (!get_reservedKeys().w(element.a1())) {
        destination.p2(element.a1(), element.b1());
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
      var this_0 = tmp0.w24();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      tmp = tmp0.f4s(tmp$ret$1, value_0);
    } else {
      var tmp2 = Default_getInstance();
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var value_1 = value.type;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_2 = tmp2.w24();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_3 = serializer(this_2, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
      tmp = tmp2.f4s(tmp$ret$4, value_1);
    }
    // Inline function 'kotlin.let' call
    var it = tmp;
    return _this__u8e3s4.c4v('type', it);
  }
  function putEndpoint($this, _this__u8e3s4, value) {
    var tmp;
    if (value.s() === 1) {
      var tmp0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var value_0 = first(value);
      // Inline function 'kotlinx.serialization.serializer' call
      var this_0 = tmp0.w24();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(getKClass(ServiceEndpoint), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      tmp = tmp0.f4s(tmp$ret$1, value_0);
    } else {
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var this_2 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_3 = this_2.w24();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_4 = serializer(this_3, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ServiceEndpoint), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
      tmp = this_2.f4s(tmp$ret$4, value);
    }
    // Inline function 'kotlin.let' call
    var it = tmp;
    return _this__u8e3s4.c4v('serviceEndpoint', it);
  }
  function putCustomProperties($this, _this__u8e3s4, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = value.z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        _this__u8e3s4.c4v(element.a1(), element.b1());
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function ServiceMapSerializer() {
    ServiceMapSerializer_instance = this;
    this.da3_1 = Companion_instance.m4u().u20();
  }
  protoOf(ServiceMapSerializer).u20 = function () {
    return this.da3_1;
  };
  protoOf(ServiceMapSerializer).w20 = function (decoder) {
    var jsonObject = decoder.g24(Companion_instance.m4u());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_reservedKeys().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(isInterface(jsonObject, KtMap) ? jsonObject : THROW_CCE()).k2(element)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
    var tmp2 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
    var json = ensureNotNull(jsonObject.af('id'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp2.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
    var tmp$ret$8 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp$ret$9 = tmp2.g4s(tmp$ret$8, json);
    return new ServiceMap(tmp$ret$9, getType(this, ensureNotNull(jsonObject.af('type'))), getServiceEndpoint(this, ensureNotNull(jsonObject.af('serviceEndpoint'))), getCustomProperties(this, jsonObject));
  };
  protoOf(ServiceMapSerializer).ea3 = function (encoder, value) {
    var tmp = Companion_instance.m4u();
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    put(builder, 'id', value.id);
    putType(ServiceMapSerializer_getInstance(), builder, value);
    putEndpoint(ServiceMapSerializer_getInstance(), builder, value.serviceEndpoint);
    putCustomProperties(ServiceMapSerializer_getInstance(), builder, value.customProperties);
    var tmp$ret$1 = builder.o4t();
    encoder.z25(tmp, tmp$ret$1);
  };
  protoOf(ServiceMapSerializer).v20 = function (encoder, value) {
    return this.ea3(encoder, value instanceof ServiceMap ? value : THROW_CCE());
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
  protoOf(Companion_13).m4u = function () {
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
  protoOf(Companion_14).m4u = function () {
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
  protoOf(ServiceEndpointURL).u3m = function () {
    return this.url;
  };
  protoOf(ServiceEndpointURL).dc = function () {
    return this.url;
  };
  protoOf(ServiceEndpointURL).fa3 = function (url) {
    return new ServiceEndpointURL(url);
  };
  protoOf(ServiceEndpointURL).copy = function (url, $super) {
    url = url === VOID ? this.url : url;
    return $super === VOID ? this.fa3(url) : $super.fa3.call(this, url);
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
  protoOf(Companion_15).m4u = function () {
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
  protoOf(ServiceEndpointObject).ga3 = function () {
    return this.jsonObject;
  };
  protoOf(ServiceEndpointObject).dc = function () {
    return this.jsonObject;
  };
  protoOf(ServiceEndpointObject).ha3 = function (jsonObject) {
    return new ServiceEndpointObject(jsonObject);
  };
  protoOf(ServiceEndpointObject).copy = function (jsonObject, $super) {
    jsonObject = jsonObject === VOID ? this.jsonObject : jsonObject;
    return $super === VOID ? this.ha3(jsonObject) : $super.ha3.call(this, jsonObject);
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
  protoOf(ServiceEndpointBaseSerializer).k4u = function (element) {
    var tmp;
    var tmp_0;
    if (element instanceof JsonPrimitive) {
      tmp_0 = element.p4u();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = Companion_instance_20.m4u();
    } else {
      if (element instanceof JsonObject) {
        tmp = Companion_instance_21.m4u();
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
    this.ka3_1 = Companion_instance_0.m4u().u20();
  }
  protoOf(ServiceEndpointURLSerializer).u20 = function () {
    return this.ka3_1;
  };
  protoOf(ServiceEndpointURLSerializer).la3 = function (encoder, value) {
    return encoder.z25(Companion_instance_1.m4u(), JsonUtils_getInstance().toJsonElement(value.url));
  };
  protoOf(ServiceEndpointURLSerializer).v20 = function (encoder, value) {
    return this.la3(encoder, value instanceof ServiceEndpointURL ? value : THROW_CCE());
  };
  protoOf(ServiceEndpointURLSerializer).w20 = function (decoder) {
    return new ServiceEndpointURL(decoder.c24());
  };
  var ServiceEndpointURLSerializer_instance;
  function ServiceEndpointURLSerializer_getInstance() {
    if (ServiceEndpointURLSerializer_instance == null)
      new ServiceEndpointURLSerializer();
    return ServiceEndpointURLSerializer_instance;
  }
  function ServiceEndpointObjectSerializer() {
    ServiceEndpointObjectSerializer_instance = this;
    this.ma3_1 = Companion_instance.m4u().u20();
  }
  protoOf(ServiceEndpointObjectSerializer).u20 = function () {
    return this.ma3_1;
  };
  protoOf(ServiceEndpointObjectSerializer).na3 = function (encoder, value) {
    return encoder.z25(Companion_instance.m4u(), value.jsonObject);
  };
  protoOf(ServiceEndpointObjectSerializer).v20 = function (encoder, value) {
    return this.na3(encoder, value instanceof ServiceEndpointObject ? value : THROW_CCE());
  };
  protoOf(ServiceEndpointObjectSerializer).w20 = function (decoder) {
    return new ServiceEndpointObject(decoder.g24(Companion_instance.m4u()));
  };
  var ServiceEndpointObjectSerializer_instance;
  function ServiceEndpointObjectSerializer_getInstance() {
    if (ServiceEndpointObjectSerializer_instance == null)
      new ServiceEndpointObjectSerializer();
    return ServiceEndpointObjectSerializer_instance;
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.oa3_1.b1();
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
    tmp.oa3_1 = lazy(tmp_0, VerificationMaterialType$Companion$_anonymous__y5w5w3);
  }
  protoOf(Companion_16).m4u = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_16).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
    switch (this.t2_1) {
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
  protoOf(Companion_17).m4u = function () {
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
      var _iterator__ex2g4s = tmp0_safe_receiver.z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.require' call
        if (!!get_reservedKeys_0().w(element.a1())) {
          var message_1 = 'Invalid attempt to override reserved VerificationMethod property with key ' + element.a1() + ' via customProperties map';
          throw IllegalArgumentException_init_$Create$(toString_0(message_1));
        }
      }
    }
  }
  protoOf(VerificationMethod_4).x6b = function () {
    return this.id;
  };
  protoOf(VerificationMethod_4).za0 = function () {
    return this.type;
  };
  protoOf(VerificationMethod_4).ra3 = function () {
    return this.material;
  };
  protoOf(VerificationMethod_4).aa1 = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_4).ya2 = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethod_4).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_4).ec = function () {
    return this.type;
  };
  protoOf(VerificationMethod_4).yp = function () {
    return this.material;
  };
  protoOf(VerificationMethod_4).p70 = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_4).w7k = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethod_4).sa3 = function (id, type, material, controller, customProperties) {
    return new VerificationMethod_4(id, type, material, controller, customProperties);
  };
  protoOf(VerificationMethod_4).copy = function (id, type, material, controller, customProperties, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    material = material === VOID ? this.material : material;
    controller = controller === VOID ? this.controller : controller;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.sa3(id, type, material, controller, customProperties) : $super.sa3.call(this, id, type, material, controller, customProperties);
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
    if (type.t2_1 === 0) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!methodValue.s2p(VerificationMaterialType_PublicKeyJwk_getInstance().toString())) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      ensureNotNull(methodValue.af(VerificationMaterialType_PublicKeyJwk_getInstance().toString()));
      tmp = new Pair(VerificationMaterialType_PublicKeyJwk_getInstance(), ensureNotNull(methodValue.af(VerificationMaterialType_PublicKeyJwk_getInstance().toString())));
    } else {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!methodValue.s2p(VerificationMaterialType_PublicKeyMultibase_getInstance().toString())) {
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
    var _iterator__ex2g4s = methodValue.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      if (!get_reservedKeys_0().w(element.a1())) {
        destination.p2(element.a1(), element.b1());
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
    var this_0 = tmp0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(JsonElement), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp$ret$2 = tmp0.f4s(tmp$ret$1, value_0);
    return _this__u8e3s4.c4v(tmp, tmp$ret$2);
  }
  function putCustomProperties_0($this, _this__u8e3s4, value) {
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = value.z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        _this__u8e3s4.c4v(element.a1(), element.b1());
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function VerificationMethodSerializer() {
    VerificationMethodSerializer_instance = this;
    this.ta3_1 = Companion_instance.m4u().u20();
  }
  protoOf(VerificationMethodSerializer).u20 = function () {
    return this.ta3_1;
  };
  protoOf(VerificationMethodSerializer).w20 = function (decoder) {
    // Inline function 'kotlin.let' call
    var jsonObject = decoder.g24(Companion_instance.m4u());
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = get_requiredKeys().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!(isInterface(jsonObject, KtMap) ? jsonObject : THROW_CCE()).k2(element)) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
    var tmp2 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
    var json = ensureNotNull(jsonObject.af('type'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp2.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(VerificationMethodType), arrayOf([]), false));
    var tmp$ret$8 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var type = tmp2.g4s(tmp$ret$8, json);
    var tmp4 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
    var json_0 = ensureNotNull(jsonObject.af('id'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_2 = tmp4.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(this_2, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
    var tmp$ret$11 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    var tmp0_id = tmp4.g4s(tmp$ret$11, json_0);
    var tmp6 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
    var json_1 = ensureNotNull(jsonObject.af('controller'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_4 = tmp6.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_5 = serializer(this_4, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
    var tmp$ret$14 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
    var tmp1_controller = tmp6.g4s(tmp$ret$14, json_1);
    var tmp2_material = getVerificationMaterial(VerificationMethodSerializer_getInstance(), jsonObject, type);
    var tmp3_customProperties = getCustomProperties_0(VerificationMethodSerializer_getInstance(), jsonObject);
    return new VerificationMethod_4(tmp0_id, type, tmp2_material, tmp1_controller, tmp3_customProperties);
  };
  protoOf(VerificationMethodSerializer).ua3 = function (encoder, value) {
    var tmp = Companion_instance.m4u();
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    builder.c4v('id', JsonUtils_getInstance().toJsonElement(value.id));
    builder.c4v('type', JsonUtils_getInstance().toJsonElement(value.type));
    builder.c4v('controller', JsonUtils_getInstance().toJsonElement(value.controller));
    putMaterial(VerificationMethodSerializer_getInstance(), builder, value.material);
    putCustomProperties_0(VerificationMethodSerializer_getInstance(), builder, value.customProperties);
    var tmp$ret$1 = builder.o4t();
    encoder.z25(tmp, tmp$ret$1);
  };
  protoOf(VerificationMethodSerializer).v20 = function (encoder, value) {
    return this.ua3(encoder, value instanceof VerificationMethod_4 ? value : THROW_CCE());
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
    return $this.va3_1.b1();
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
    tmp.va3_1 = lazy(tmp_0, VerificationMethodType$Companion$_anonymous__8r8jdz);
  }
  protoOf(Companion_18).m4u = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_18).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
  protoOf(Builder).m4u = function () {
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
  protoOf(VerificationRelationship).x6b = function () {
    return this.id;
  };
  protoOf(VerificationRelationship).ga1 = function () {
    return this.verificationMethod;
  };
  protoOf(VerificationRelationship).dc = function () {
    return this.id;
  };
  protoOf(VerificationRelationship).ec = function () {
    return this.verificationMethod;
  };
  protoOf(VerificationRelationship).ya3 = function (id, verificationMethod) {
    return new VerificationRelationship(id, verificationMethod);
  };
  protoOf(VerificationRelationship).copy = function (id, verificationMethod, $super) {
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    return $super === VOID ? this.ya3(id, verificationMethod) : $super.ya3.call(this, id, verificationMethod);
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
    this.za3_1 = Companion_instance_1.m4u().u20();
  }
  protoOf(VerificationRelationshipSerializer).u20 = function () {
    return this.za3_1;
  };
  protoOf(VerificationRelationshipSerializer).w20 = function (decoder) {
    var value = decoder.g24(Companion_instance_1.m4u());
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.w24();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(VerificationMethod_4), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.Companion.success' call
      var value_0 = this_0.g4s(tmp$ret$1, value);
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
      return Builder_instance.buildFromId(get_jsonPrimitive(value).q4u());
    }
  };
  protoOf(VerificationRelationshipSerializer).aa4 = function (encoder, value) {
    if (!(value.verificationMethod == null)) {
      var tmp = Companion_instance_1.m4u();
      var tmp0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var value_0 = value.verificationMethod;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_0 = tmp0.w24();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(getKClass(VerificationMethod_4), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      var tmp$ret$2 = tmp0.f4s(tmp$ret$1, value_0);
      encoder.z25(tmp, tmp$ret$2);
    } else {
      encoder.l25(ensureNotNull(value.id));
    }
  };
  protoOf(VerificationRelationshipSerializer).v20 = function (encoder, value) {
    return this.aa4(encoder, value instanceof VerificationRelationship ? value : THROW_CCE());
  };
  var VerificationRelationshipSerializer_instance;
  function VerificationRelationshipSerializer_getInstance() {
    if (VerificationRelationshipSerializer_instance == null)
      new VerificationRelationshipSerializer();
    return VerificationRelationshipSerializer_instance;
  }
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.ba4_1.b1();
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
    tmp.ba4_1 = lazy(tmp_0, VerificationRelationshipType$Companion$_anonymous__mt3iim);
  }
  protoOf(Companion_19).m4u = function () {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(Companion_19).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
    switch (this.t2_1) {
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
    this.ma4_1 = this$0;
    this.na4_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$createAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidRegistrar$createAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidRegistrar$createAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.ma4_1.ja0(this.na4_1, this);
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
  protoOf(DidRegistrar$createAsync$slambda).ja = function (completion) {
    return new DidRegistrar$createAsync$slambda(this.ma4_1, this.na4_1, completion);
  };
  function DidRegistrar$createAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidRegistrar$createAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.wa4_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$getSupportedMethodsAsync$slambda).xa4 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidRegistrar$getSupportedMethodsAsync$slambda).ac = function ($completion) {
    return this.xa4($completion);
  };
  protoOf(DidRegistrar$getSupportedMethodsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.wa4_1.b9z(this);
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
  protoOf(DidRegistrar$getSupportedMethodsAsync$slambda).ja = function (completion) {
    return new DidRegistrar$getSupportedMethodsAsync$slambda(this.wa4_1, completion);
  };
  function DidRegistrar$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa4($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.ga5_1 = this$0;
    this.ha5_1 = $key;
    this.ia5_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$createByKeyAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidRegistrar$createByKeyAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidRegistrar$createByKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.ga5_1.ka0(this.ha5_1, this.ia5_1, this);
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
  protoOf(DidRegistrar$createByKeyAsync$slambda).ja = function (completion) {
    return new DidRegistrar$createByKeyAsync$slambda(this.ga5_1, this.ha5_1, this.ia5_1, completion);
  };
  function DidRegistrar$createByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$updateAsync$slambda(this$0, resultContinuation) {
    this.ra5_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$updateAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidRegistrar$updateAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(DidRegistrar$updateAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.ra5_1.sa5(this);
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
  protoOf(DidRegistrar$updateAsync$slambda).ja = function (completion) {
    return new DidRegistrar$updateAsync$slambda(this.ra5_1, completion);
  };
  function DidRegistrar$updateAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidRegistrar$updateAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$deleteAsync$slambda(this$0, resultContinuation) {
    this.ba6_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$deleteAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidRegistrar$deleteAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(DidRegistrar$deleteAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.ba6_1.b96(this);
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
  protoOf(DidRegistrar$deleteAsync$slambda).ja = function (completion) {
    return new DidRegistrar$deleteAsync$slambda(this.ba6_1, completion);
  };
  function DidRegistrar$deleteAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidRegistrar$deleteAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar() {
  }
  function DidRegistrarRegistrations() {
  }
  protoOf(DidRegistrarRegistrations).ga6 = function (uniregistrarUrl) {
    var tmp = new LocalRegistrar();
    return setOf_0([tmp, new UniregistrarRegistrar(uniregistrarUrl == null ? 'https://uniregistrar.io/1.0' : uniregistrarUrl)]);
  };
  protoOf(DidRegistrarRegistrations).curatedDidRegistrars = function (uniregistrarUrl, $super) {
    uniregistrarUrl = uniregistrarUrl === VOID ? null : uniregistrarUrl;
    return $super === VOID ? this.ga6(uniregistrarUrl) : $super.ga6.call(this, uniregistrarUrl);
  };
  var DidRegistrarRegistrations_instance;
  function DidRegistrarRegistrations_getInstance() {
    return DidRegistrarRegistrations_instance;
  }
  function Companion_20() {
  }
  protoOf(Companion_20).m4u = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_26;
  function Companion_getInstance_22() {
    return Companion_instance_26;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.DidResult', this, 2);
    tmp0_serialDesc.x2b('did', false);
    tmp0_serialDesc.x2b('didDocument', false);
    this.ha6_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).ia6 = function (encoder, value) {
    var tmp0_desc = this.ha6_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.did);
    tmp1_output.y25(tmp0_desc, 1, $serializer_getInstance_1(), value.didDocument);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_10).v20 = function (encoder, value) {
    return this.ia6(encoder, value instanceof DidResult ? value : THROW_CCE());
  };
  protoOf($serializer_10).w20 = function (decoder) {
    var tmp0_desc = this.ha6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, $serializer_getInstance_1(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, $serializer_getInstance_1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return DidResult_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).u20 = function () {
    return this.ha6_1;
  };
  protoOf($serializer_10).m2c = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_10().ha6_1);
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
  protoOf(DidResult).ja6 = function () {
    return this.did;
  };
  protoOf(DidResult).ka6 = function () {
    return this.didDocument;
  };
  protoOf(DidResult).dc = function () {
    return this.did;
  };
  protoOf(DidResult).ec = function () {
    return this.didDocument;
  };
  protoOf(DidResult).la6 = function (did, didDocument) {
    return new DidResult(did, didDocument);
  };
  protoOf(DidResult).copy = function (did, didDocument, $super) {
    did = did === VOID ? this.did : did;
    didDocument = didDocument === VOID ? this.didDocument : didDocument;
    return $super === VOID ? this.la6(did, didDocument) : $super.la6.call(this, did, didDocument);
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
    var tmp0_elvis_lhs = $this.na6_1.m2(method);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No local registrar for method: ' + method);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function LocalRegistrar$createAsync$slambda(this$0, $options, resultContinuation) {
    this.wa6_1 = this$0;
    this.xa6_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$createAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(LocalRegistrar$createAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(LocalRegistrar$createAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.wa6_1.ja0(this.xa6_1, this);
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
  protoOf(LocalRegistrar$createAsync$slambda).ja = function (completion) {
    return new LocalRegistrar$createAsync$slambda(this.wa6_1, this.xa6_1, completion);
  };
  function LocalRegistrar$createAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new LocalRegistrar$createAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.ga7_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$getSupportedMethodsAsync$slambda).xa4 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalRegistrar$getSupportedMethodsAsync$slambda).ac = function ($completion) {
    return this.xa4($completion);
  };
  protoOf(LocalRegistrar$getSupportedMethodsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.ga7_1.b9z(this);
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
  protoOf(LocalRegistrar$getSupportedMethodsAsync$slambda).ja = function (completion) {
    return new LocalRegistrar$getSupportedMethodsAsync$slambda(this.ga7_1, completion);
  };
  function LocalRegistrar$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa4($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.pa7_1 = this$0;
    this.qa7_1 = $key;
    this.ra7_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$createByKeyAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(LocalRegistrar$createByKeyAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(LocalRegistrar$createByKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.pa7_1.ka0(this.qa7_1, this.ra7_1, this);
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
  protoOf(LocalRegistrar$createByKeyAsync$slambda).ja = function (completion) {
    return new LocalRegistrar$createByKeyAsync$slambda(this.pa7_1, this.qa7_1, this.ra7_1, completion);
  };
  function LocalRegistrar$createByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new LocalRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$updateAsync$slambda(this$0, resultContinuation) {
    this.aa8_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$updateAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(LocalRegistrar$updateAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(LocalRegistrar$updateAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.aa8_1.sa5(this);
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
  protoOf(LocalRegistrar$updateAsync$slambda).ja = function (completion) {
    return new LocalRegistrar$updateAsync$slambda(this.aa8_1, completion);
  };
  function LocalRegistrar$updateAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalRegistrar$updateAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$deleteAsync$slambda(this$0, resultContinuation) {
    this.ja8_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$deleteAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(LocalRegistrar$deleteAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(LocalRegistrar$deleteAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.ja8_1.b96(this);
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
  protoOf(LocalRegistrar$deleteAsync$slambda).ja = function (completion) {
    return new LocalRegistrar$deleteAsync$slambda(this.ja8_1, completion);
  };
  function LocalRegistrar$deleteAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalRegistrar$deleteAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar() {
    this.ma6_1 = 'walt.id local registrar';
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
      destination.p2(tmp$ret$0, element);
    }
    tmp.na6_1 = destination;
  }
  protoOf(LocalRegistrar).u2 = function () {
    return this.ma6_1;
  };
  protoOf(LocalRegistrar).b9z = function ($completion) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.na6_1.o2();
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
  protoOf(LocalRegistrar).ja0 = function (options, $completion) {
    return getRegistrarForMethod_0(this, options.method).w9u(options, $completion);
  };
  protoOf(LocalRegistrar).ka0 = function (key, options, $completion) {
    return getRegistrarForMethod_0(this, options.method).ka8(key, options, $completion);
  };
  protoOf(LocalRegistrar).sa5 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(LocalRegistrar).b96 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(LocalRegistrar).ca6 = function (options) {
    var tmp = LocalRegistrar$createAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).da6 = function () {
    var tmp = LocalRegistrar$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).ea6 = function (key, options) {
    var tmp = LocalRegistrar$createByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).fa6 = function () {
    var tmp = LocalRegistrar$updateAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).s9a = function () {
    var tmp = LocalRegistrar$deleteAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function Companion_21() {
    this.DEFAULT_REGISTRAR_URL = 'https://uniregistrar.io/1.0';
  }
  protoOf(Companion_21).la8 = function () {
    return this.DEFAULT_REGISTRAR_URL;
  };
  var Companion_instance_27;
  function Companion_getInstance_23() {
    return Companion_instance_27;
  }
  function getMethods($this, $completion) {
    var tmp = new $getMethodsCOROUTINE$6($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function UniregistrarRegistrar$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.p3l(tmp, UniregistrarRegistrar$http$lambda$lambda);
    defaultRequest($this$HttpClient, UniregistrarRegistrar$http$lambda$lambda_0);
    var tmp_0 = get_Logging();
    $this$HttpClient.p3l(tmp_0, UniregistrarRegistrar$http$lambda$lambda_1);
    return Unit_instance;
  }
  function UniregistrarRegistrar$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function UniregistrarRegistrar$http$lambda$lambda_0($this$defaultRequest) {
    header($this$defaultRequest, HttpHeaders_getInstance().q2y_1, Application_getInstance().y2v_1);
    return Unit_instance;
  }
  function UniregistrarRegistrar$http$lambda$lambda_1($this$install) {
    $this$install.o5g(get_DEFAULT(Companion_instance_3));
    $this$install.n5g_1 = LogLevel_ALL_getInstance();
    return Unit_instance;
  }
  function UniregistrarRegistrar$createAsync$slambda(this$0, $options, resultContinuation) {
    this.ta9_1 = this$0;
    this.ua9_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$createAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(UniregistrarRegistrar$createAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(UniregistrarRegistrar$createAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.ta9_1.ja0(this.ua9_1, this);
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
  protoOf(UniregistrarRegistrar$createAsync$slambda).ja = function (completion) {
    return new UniregistrarRegistrar$createAsync$slambda(this.ta9_1, this.ua9_1, completion);
  };
  function UniregistrarRegistrar$createAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new UniregistrarRegistrar$createAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.faa_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$getSupportedMethodsAsync$slambda).xa4 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniregistrarRegistrar$getSupportedMethodsAsync$slambda).ac = function ($completion) {
    return this.xa4($completion);
  };
  protoOf(UniregistrarRegistrar$getSupportedMethodsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.faa_1.b9z(this);
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
  protoOf(UniregistrarRegistrar$getSupportedMethodsAsync$slambda).ja = function (completion) {
    return new UniregistrarRegistrar$getSupportedMethodsAsync$slambda(this.faa_1, completion);
  };
  function UniregistrarRegistrar$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniregistrarRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa4($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.oaa_1 = this$0;
    this.paa_1 = $key;
    this.qaa_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$createByKeyAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(UniregistrarRegistrar$createByKeyAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(UniregistrarRegistrar$createByKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.oaa_1.ka0(this.paa_1, this.qaa_1, this);
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
  protoOf(UniregistrarRegistrar$createByKeyAsync$slambda).ja = function (completion) {
    return new UniregistrarRegistrar$createByKeyAsync$slambda(this.oaa_1, this.paa_1, this.qaa_1, completion);
  };
  function UniregistrarRegistrar$createByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new UniregistrarRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$updateAsync$slambda(this$0, resultContinuation) {
    this.zaa_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$updateAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(UniregistrarRegistrar$updateAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(UniregistrarRegistrar$updateAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.zaa_1.sa5(this);
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
  protoOf(UniregistrarRegistrar$updateAsync$slambda).ja = function (completion) {
    return new UniregistrarRegistrar$updateAsync$slambda(this.zaa_1, completion);
  };
  function UniregistrarRegistrar$updateAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniregistrarRegistrar$updateAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$deleteAsync$slambda(this$0, resultContinuation) {
    this.iab_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$deleteAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(UniregistrarRegistrar$deleteAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(UniregistrarRegistrar$deleteAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.iab_1.b96(this);
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
  protoOf(UniregistrarRegistrar$deleteAsync$slambda).ja = function (completion) {
    return new UniregistrarRegistrar$deleteAsync$slambda(this.iab_1, completion);
  };
  function UniregistrarRegistrar$deleteAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniregistrarRegistrar$deleteAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getSupportedMethodsCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rab_1 = _this__u8e3s4;
  }
  protoOf($getSupportedMethodsCOROUTINE$5).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.sab_1 = this.rab_1;
            this.tab_1 = this.sab_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.vab_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.wab_1 = this.tab_1;
            this.xab_1 = this.wab_1;
            this.n9_1 = 1;
            suspendResult = getMethods(this.xab_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = lazyOf(ARGUMENT);
            var tmp1 = ARGUMENT_0.b1();
            var tmp_3 = this;
            this.vab_1;
            tmp_3.uab_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof Error) {
              var e = this.q9_1;
              var tmp_5 = this;
              tmp_5.uab_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.uab_1);
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
  protoOf($getSupportedMethodsCOROUTINE$5)['<set-state>'] = protoOf($getSupportedMethodsCOROUTINE$5).u9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-state>'] = protoOf($getSupportedMethodsCOROUTINE$5).v9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<set-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$5).w9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$5).x9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<set-result>'] = protoOf($getSupportedMethodsCOROUTINE$5).y9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-result>'] = protoOf($getSupportedMethodsCOROUTINE$5).z9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<set-exception>'] = protoOf($getSupportedMethodsCOROUTINE$5).aa;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-exception>'] = protoOf($getSupportedMethodsCOROUTINE$5).ba;
  protoOf($getSupportedMethodsCOROUTINE$5)['<set-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$5).ca;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$5).da;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-context>'] = protoOf($getSupportedMethodsCOROUTINE$5).t9;
  function $getMethodsCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ua8_1 = _this__u8e3s4;
  }
  protoOf($getMethodsCOROUTINE$6).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.va8_1 = this.ua8_1.wa9_1;
            var tmp_1 = this;
            tmp_1.wa8_1 = this.ua8_1.registrarUrl + '/methods';
            this.xa8_1 = this.va8_1;
            this.ya8_1 = this.wa8_1;
            var tmp_2 = this;
            tmp_2.za8_1 = this.xa8_1;
            this.aa9_1 = this.za8_1;
            var tmp_3 = this;
            tmp_3.ba9_1 = this.aa9_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.ya8_1);
            tmp_4.ca9_1 = this_0;
            this.da9_1 = this.ba9_1;
            this.ea9_1 = this.ca9_1;
            this.ea9_1.j3k_1 = Companion_getInstance().c32_1;
            var tmp_5 = this;
            tmp_5.fa9_1 = this.da9_1;
            var tmp_6 = this;
            tmp_6.ga9_1 = this.ea9_1;
            this.ha9_1 = this.fa9_1;
            this.ia9_1 = this.ga9_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.ia9_1, this.ha9_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ja9_1 = suspendResult;
            this.ka9_1 = this.ja9_1;
            this.n9_1 = 2;
            var tmp_7 = this.ka9_1.q3n();
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

            suspendResult = tmp_7.t3m(new TypeInfo(tmp_8, tmp_9), this);
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
              destination.n(get_jsonPrimitive(item).q4u());
            }

            var ARGUMENT = destination;
            return toSet(ARGUMENT);
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
  function $createCOROUTINE$7(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gac_1 = _this__u8e3s4;
    this.hac_1 = options;
  }
  protoOf($createCOROUTINE$7).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.iac_1 = this.gac_1.wa9_1;
            var tmp_1 = this;
            tmp_1.jac_1 = this.gac_1.registrarUrl + '/create?method=' + this.hac_1.method;
            this.kac_1 = this.iac_1;
            this.lac_1 = this.jac_1;
            var tmp_2 = this;
            tmp_2.mac_1 = this.kac_1;
            this.nac_1 = this.mac_1;
            var tmp_3 = this;
            tmp_3.oac_1 = this.nac_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.lac_1);
            var body = this.hac_1.config;
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
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
              this_0.e3q(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.l3k_1 = body;
                this_0.e3q(null);
              } else {
                this_0.l3k_1 = body;
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
                this_0.e3q(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.pac_1 = this_0;
            this.qac_1 = this.oac_1;
            this.rac_1 = this.pac_1;
            this.rac_1.j3k_1 = Companion_getInstance().d32_1;
            var tmp_11 = this;
            tmp_11.sac_1 = this.qac_1;
            var tmp_12 = this;
            tmp_12.tac_1 = this.rac_1;
            this.uac_1 = this.sac_1;
            this.vac_1 = this.tac_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.vac_1, this.uac_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.wac_1 = suspendResult;
            this.xac_1 = this.wac_1;
            this.n9_1 = 2;
            var tmp_13 = this.xac_1.q3n();
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

            suspendResult = tmp_13.t3m(new TypeInfo(tmp_14, tmp_15), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult instanceof DidDocument ? suspendResult : THROW_CCE();
            return new DidResult('TODO', ARGUMENT);
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
  protoOf($createCOROUTINE$7)['<set-state>'] = protoOf($createCOROUTINE$7).u9;
  protoOf($createCOROUTINE$7)['<get-state>'] = protoOf($createCOROUTINE$7).v9;
  protoOf($createCOROUTINE$7)['<set-exceptionState>'] = protoOf($createCOROUTINE$7).w9;
  protoOf($createCOROUTINE$7)['<get-exceptionState>'] = protoOf($createCOROUTINE$7).x9;
  protoOf($createCOROUTINE$7)['<set-result>'] = protoOf($createCOROUTINE$7).y9;
  protoOf($createCOROUTINE$7)['<get-result>'] = protoOf($createCOROUTINE$7).z9;
  protoOf($createCOROUTINE$7)['<set-exception>'] = protoOf($createCOROUTINE$7).aa;
  protoOf($createCOROUTINE$7)['<get-exception>'] = protoOf($createCOROUTINE$7).ba;
  protoOf($createCOROUTINE$7)['<set-finallyPath>'] = protoOf($createCOROUTINE$7).ca;
  protoOf($createCOROUTINE$7)['<get-finallyPath>'] = protoOf($createCOROUTINE$7).da;
  protoOf($createCOROUTINE$7)['<get-context>'] = protoOf($createCOROUTINE$7).t9;
  function UniregistrarRegistrar(registrarUrl) {
    registrarUrl = registrarUrl === VOID ? 'https://uniregistrar.io/1.0' : registrarUrl;
    this.registrarUrl = registrarUrl;
    this.va9_1 = 'uniresolver @ ' + this.registrarUrl;
    var tmp = this;
    tmp.wa9_1 = HttpClient(UniregistrarRegistrar$http$lambda);
  }
  protoOf(UniregistrarRegistrar).yac = function (_set____db54di) {
    this.registrarUrl = _set____db54di;
  };
  protoOf(UniregistrarRegistrar).zac = function () {
    return this.registrarUrl;
  };
  protoOf(UniregistrarRegistrar).u2 = function () {
    return this.va9_1;
  };
  protoOf(UniregistrarRegistrar).b9z = function ($completion) {
    var tmp = new $getSupportedMethodsCOROUTINE$5(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniregistrarRegistrar).ja0 = function (options, $completion) {
    var tmp = new $createCOROUTINE$7(this, options, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(UniregistrarRegistrar).ka0 = function (key, options, $completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(UniregistrarRegistrar).sa5 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(UniregistrarRegistrar).b96 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(UniregistrarRegistrar).ca6 = function (options) {
    var tmp = UniregistrarRegistrar$createAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).da6 = function () {
    var tmp = UniregistrarRegistrar$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).ea6 = function (key, options) {
    var tmp = UniregistrarRegistrar$createByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).fa6 = function () {
    var tmp = UniregistrarRegistrar$updateAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).s9a = function () {
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
  protoOf(Companion_22).m4u = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_28;
  function Companion_getInstance_24() {
    return Companion_instance_28;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.dids.DidCreateOptions', this, 3);
    tmp0_serialDesc.x2b('method', false);
    tmp0_serialDesc.x2b('config', false);
    tmp0_serialDesc.x2b('didDocConfig', true);
    this.bad_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).cad = function (encoder, value) {
    var tmp0_desc = this.bad_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.method);
    tmp1_output.y25(tmp0_desc, 1, JsonElementSerializer_getInstance(), value.config);
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.didDocConfig == null)) {
      tmp1_output.a26(tmp0_desc, 2, $serializer_getInstance_12(), value.didDocConfig);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_11).v20 = function (encoder, value) {
    return this.cad(encoder, value instanceof DidCreateOptions ? value : THROW_CCE());
  };
  protoOf($serializer_11).w20 = function (decoder) {
    var tmp0_desc = this.bad_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, $serializer_getInstance_12(), tmp6_local2);
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
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, $serializer_getInstance_12(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i24(tmp0_desc);
    return DidCreateOptions_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_11).u20 = function () {
    return this.bad_1;
  };
  protoOf($serializer_11).m2c = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().bad_1);
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
  protoOf(DidCreateOptions).n3n = function () {
    return this.method;
  };
  protoOf(DidCreateOptions).o3k = function () {
    return this.config;
  };
  protoOf(DidCreateOptions).aad = function () {
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
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), Companion_getInstance_0().m4u());
  }
  function DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_1() {
    return new LinkedHashMapSerializer(Companion_getInstance_21().m4u(), new LinkedHashSetSerializer($serializer_getInstance_13()));
  }
  function DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_2() {
    return new LinkedHashSetSerializer($serializer_getInstance_14());
  }
  function DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_3() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda($context, $verificationKeySetConfiguration, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    this.lad_1 = $context;
    this.mad_1 = $verificationKeySetConfiguration;
    this.nad_1 = $serviceConfigurationSet;
    this.oad_1 = $rootCustomProperties;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda).pad = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda).ac = function ($completion) {
    return this.pad($completion);
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_getInstance_25().sad(this.lad_1, this.mad_1, this.nad_1, this.oad_1, this);
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
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda).ja = function (completion) {
    return new DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda(this.lad_1, this.mad_1, this.nad_1, this.oad_1, completion);
  };
  function DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda_0($context, $verificationKeySetConfiguration, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    var i = new DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda($context, $verificationKeySetConfiguration, $serviceConfigurationSet, $rootCustomProperties, resultContinuation);
    var l = function ($completion) {
      return i.pad($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda($context, $publicKeySet, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    this.bae_1 = $context;
    this.cae_1 = $publicKeySet;
    this.dae_1 = $serviceConfigurationSet;
    this.eae_1 = $rootCustomProperties;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda).pad = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda).ac = function ($completion) {
    return this.pad($completion);
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_getInstance_25().fae(this.bae_1, this.cae_1, this.dae_1, this.eae_1, this);
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
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda).ja = function (completion) {
    return new DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda(this.bae_1, this.cae_1, this.dae_1, this.eae_1, completion);
  };
  function DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda_0($context, $publicKeySet, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    var i = new DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda($context, $publicKeySet, $serviceConfigurationSet, $rootCustomProperties, resultContinuation);
    var l = function ($completion) {
      return i.pad($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $buildFromPublicKeySetCOROUTINE$8(_this__u8e3s4, context, publicKeySet, serviceConfigurationSet, rootCustomProperties, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oae_1 = _this__u8e3s4;
    this.pae_1 = context;
    this.qae_1 = publicKeySet;
    this.rae_1 = serviceConfigurationSet;
    this.sae_1 = rootCustomProperties;
  }
  protoOf($buildFromPublicKeySetCOROUTINE$8).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 10;
            var tmp_0 = this;
            tmp_0.tae_1 = this.qae_1;
            this.uae_1 = this.tae_1;
            this.vae_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.uae_1, 10)), 16);
            var tmp_1 = this;
            tmp_1.wae_1 = this.uae_1;
            var tmp_2 = this;
            tmp_2.xae_1 = LinkedHashMap_init_$Create$_0(this.vae_1);
            this.yae_1 = this.wae_1;
            this.zae_1 = this.xae_1;
            this.aaf_1 = this.yae_1.p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.aaf_1.q()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.baf_1 = this.aaf_1.r();
            var tmp_3 = this;
            tmp_3.caf_1 = this.baf_1;
            this.daf_1 = this.caf_1;
            this.n9_1 = 2;
            suspendResult = this.daf_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.eaf_1 = suspendResult;
            this.zae_1.p2(this.eaf_1, this.baf_1);
            this.n9_1 = 1;
            continue $sm;
          case 3:
            this.faf_1 = this.zae_1;
            var tmp_4 = this;
            var this_0 = this.qae_1;
            var tmp_5;
            if (!this_0.h()) {
              tmp_5 = this_0;
            } else {
              tmp_5 = null;
            }

            tmp_4.gaf_1 = tmp_5;
            if (this.gaf_1 == null) {
              this.haf_1 = null;
              this.n9_1 = 9;
              continue $sm;
            } else {
              var tmp_6 = this;
              tmp_6.iaf_1 = this.gaf_1;
              this.jaf_1 = this.iaf_1;
              var tmp_7 = this;
              tmp_7.kaf_1 = this.jaf_1;
              this.laf_1 = this.kaf_1;
              var tmp_8 = this;
              tmp_8.maf_1 = get_entries_1();
              this.naf_1 = this.maf_1;
              this.oaf_1 = LinkedHashMap_init_$Create$_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.naf_1, 10)), 16));
              var tmp_9 = this;
              tmp_9.paf_1 = this.naf_1;
              var tmp_10 = this;
              tmp_10.qaf_1 = this.oaf_1;
              this.raf_1 = this.paf_1;
              this.saf_1 = this.qaf_1;
              this.taf_1 = this.raf_1.p();
              this.n9_1 = 4;
              continue $sm;
            }

          case 4:
            if (!this.taf_1.q()) {
              this.n9_1 = 8;
              continue $sm;
            }

            this.uaf_1 = this.taf_1.r();
            var tmp_11 = this;
            tmp_11.vaf_1 = this.uaf_1;
            this.waf_1 = this.vaf_1;
            var tmp_12 = this;
            tmp_12.xaf_1 = this.qae_1;
            this.yaf_1 = this.xaf_1;
            var tmp_13 = this;
            tmp_13.zaf_1 = this.yaf_1;
            var tmp_14 = this;
            tmp_14.aag_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.yaf_1, 10));
            this.bag_1 = this.zaf_1;
            this.cag_1 = this.aag_1;
            this.dag_1 = this.bag_1.p();
            this.n9_1 = 5;
            continue $sm;
          case 5:
            if (!this.dag_1.q()) {
              this.n9_1 = 7;
              continue $sm;
            }

            this.eag_1 = this.dag_1.r();
            var tmp_15 = this;
            tmp_15.fag_1 = this.eag_1;
            this.gag_1 = this.fag_1;
            this.n9_1 = 6;
            suspendResult = this.gag_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new VerificationMethodConfiguration(ARGUMENT);
            this.cag_1.n(ARGUMENT_0);
            this.n9_1 = 5;
            continue $sm;
          case 7:
            var ARGUMENT_1 = this.cag_1;
            var ARGUMENT_2 = toSet(ARGUMENT_1);
            this.saf_1.p2(this.uaf_1, ARGUMENT_2);
            this.n9_1 = 4;
            continue $sm;
          case 8:
            this.haf_1 = this.saf_1;
            this.n9_1 = 9;
            continue $sm;
          case 9:
            var tmp1_elvis_lhs = this.haf_1;
            var ARGUMENT_3 = tmp1_elvis_lhs == null ? emptyMap() : tmp1_elvis_lhs;
            return new DidDocConfig(this.pae_1, this.faf_1, ARGUMENT_3, this.rae_1, this.sae_1);
          case 10:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 10) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<set-state>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).u9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-state>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).v9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<set-exceptionState>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).w9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-exceptionState>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).x9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<set-result>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).y9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-result>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).z9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<set-exception>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).aa;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-exception>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).ba;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<set-finallyPath>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).ca;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-finallyPath>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).da;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-context>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).t9;
  function $buildFromPublicKeySetVerificationConfigurationCOROUTINE$9(_this__u8e3s4, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pag_1 = _this__u8e3s4;
    this.qag_1 = context;
    this.rag_1 = verificationKeySetConfiguration;
    this.sag_1 = serviceConfigurationSet;
    this.tag_1 = rootCustomProperties;
  }
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 9;
            var tmp_0 = this;
            tmp_0.uag_1 = flatten(this.rag_1.o2());
            this.vag_1 = this.uag_1;
            this.wag_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.vag_1, 10)), 16);
            var tmp_1 = this;
            tmp_1.xag_1 = this.vag_1;
            var tmp_2 = this;
            tmp_2.yag_1 = LinkedHashMap_init_$Create$_0(this.wag_1);
            this.zag_1 = this.xag_1;
            this.aah_1 = this.yag_1;
            this.bah_1 = this.zag_1.p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.bah_1.q()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.cah_1 = this.bah_1.r();
            var tmp_3 = this;
            tmp_3.dah_1 = this.cah_1;
            this.eah_1 = this.dah_1;
            this.n9_1 = 2;
            suspendResult = this.eah_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.fah_1 = suspendResult;
            this.aah_1.p2(this.fah_1, this.cah_1);
            this.n9_1 = 1;
            continue $sm;
          case 3:
            this.gah_1 = this.aah_1;
            this.hah_1 = this.gah_1;
            var tmp_4 = this;
            tmp_4.iah_1 = this.hah_1;
            this.jah_1 = this.iah_1;
            var tmp_5 = this;
            var tmp0 = this.rag_1.z();
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              if (!element.b1().h()) {
                destination.n(element);
              }
            }

            tmp_5.kah_1 = destination;
            this.lah_1 = this.kah_1;
            this.mah_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.lah_1, 10)), 16);
            var tmp_6 = this;
            tmp_6.nah_1 = this.lah_1;
            var tmp_7 = this;
            tmp_7.oah_1 = LinkedHashMap_init_$Create$_0(this.mah_1);
            this.pah_1 = this.nah_1;
            this.qah_1 = this.oah_1;
            this.rah_1 = this.pah_1.p();
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (!this.rah_1.q()) {
              this.n9_1 = 8;
              continue $sm;
            }

            this.sah_1 = this.rah_1.r();
            var tmp_8 = this;
            tmp_8.tah_1 = this.qah_1;
            var tmp_9 = this;
            tmp_9.uah_1 = this.sah_1;
            this.vah_1 = this.uah_1;
            var tmp_10 = this;
            tmp_10.wah_1 = this.vah_1.a1();
            var tmp_11 = this;
            tmp_11.xah_1 = this.vah_1.b1();
            var tmp_12 = this;
            tmp_12.yah_1 = this.xah_1;
            this.zah_1 = this.yah_1;
            var tmp_13 = this;
            tmp_13.aai_1 = this.zah_1;
            var tmp_14 = this;
            tmp_14.bai_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.zah_1, 10));
            this.cai_1 = this.aai_1;
            this.dai_1 = this.bai_1;
            this.eai_1 = this.cai_1.p();
            this.n9_1 = 5;
            continue $sm;
          case 5:
            if (!this.eai_1.q()) {
              this.n9_1 = 7;
              continue $sm;
            }

            this.fai_1 = this.eai_1.r();
            var tmp_15 = this;
            tmp_15.gai_1 = this.fai_1;
            this.hai_1 = this.gai_1;
            this.n9_1 = 6;
            suspendResult = this.hai_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new VerificationMethodConfiguration(ARGUMENT);
            this.dai_1.n(ARGUMENT_0);
            this.n9_1 = 5;
            continue $sm;
          case 7:
            var ARGUMENT_1 = this.dai_1;
            var ARGUMENT_2 = toSet(ARGUMENT_1);
            var tmp1 = to(this.wah_1, ARGUMENT_2);
            this.tah_1.p2(tmp1.bc_1, tmp1.cc_1);
            this.n9_1 = 4;
            continue $sm;
          case 8:
            var ARGUMENT_3 = this.qah_1;
            return new DidDocConfig(this.qag_1, this.jah_1, ARGUMENT_3, this.sag_1, this.tag_1);
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
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<set-state>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).u9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-state>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).v9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<set-exceptionState>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).w9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-exceptionState>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).x9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<set-result>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).y9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-result>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).z9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<set-exception>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).aa;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-exception>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).ba;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<set-finallyPath>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).ca;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-finallyPath>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).da;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-context>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).t9;
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
    tmp.qad_1 = [tmp_1, tmp_3, tmp_5, tmp_7, lazy(tmp_8, DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_3)];
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
    tmp_9.rad_1 = plus(tmp_10, destination);
  }
  protoOf(Companion_23).fae = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion) {
    var tmp = new $buildFromPublicKeySetCOROUTINE$8(this, context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_23).buildFromPublicKeySet$default = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    publicKeySet = publicKeySet === VOID ? emptySet() : publicKeySet;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.fae(context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion) : $super.fae.call(this, context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion);
  };
  protoOf(Companion_23).sad = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion) {
    var tmp = new $buildFromPublicKeySetVerificationConfigurationCOROUTINE$9(this, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_23).buildFromPublicKeySetVerificationConfiguration$default = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    verificationKeySetConfiguration = verificationKeySetConfiguration === VOID ? emptyMap() : verificationKeySetConfiguration;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.sad(context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion) : $super.sad.call(this, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion);
  };
  protoOf(Companion_23).iai = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties) {
    var tmp = DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda_0(context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_23).buildFromPublicKeySetVerificationConfigurationAsync$default = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    verificationKeySetConfiguration = verificationKeySetConfiguration === VOID ? emptyMap() : verificationKeySetConfiguration;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.iai(context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties) : $super.iai.call(this, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties);
  };
  protoOf(Companion_23).jai = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties) {
    var tmp = DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda_0(context, publicKeySet, serviceConfigurationSet, rootCustomProperties, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_23).buildFromPublicKeySetAsync$default = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    publicKeySet = publicKeySet === VOID ? emptySet() : publicKeySet;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.jai(context, publicKeySet, serviceConfigurationSet, rootCustomProperties) : $super.jai.call(this, context, publicKeySet, serviceConfigurationSet, rootCustomProperties);
  };
  protoOf(Companion_23).m4u = function () {
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
      var _iterator__ex2g4s = tmp0_safe_receiver.z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.require' call
        if (!!Companion_getInstance_25().rad_1.w(element.a1())) {
          var message = 'Invalid attempt to override reserved root did document property with key ' + element.a1() + ' via rootCustomProperties map';
          throw IllegalArgumentException_init_$Create$(toString_0(message));
        }
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function validatePublicKeyMap($this) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = $this.publicKeyMap.o2().p();
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
      var _iterator__ex2g4s = tmp0_safe_receiver.z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var type = element.a1();
        // Inline function 'kotlin.collections.component2' call
        var configSet = element.b1();
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = configSet.p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!$this.publicKeyMap.k2(element_0.publicKeyId)) {
            var message_0 = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString_0(message_0));
          }
          var tmp0_elvis_lhs = $this.publicKeyMap.m2(element_0.publicKeyId);
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
    var tmp = new $createVerificationMethodSetCOROUTINE$11($this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function createVerificationRelationshipMap($this, did) {
    // Inline function 'kotlin.collections.associate' call
    var this_0 = $this.verificationConfigurationMap.z();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var verRelType = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var verConfSet = element.b1();
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
      destination.p2(pair.bc_1, pair.cc_1);
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
      var tmp$ret$0 = new ServiceMap(did + '#' + UuidUtils_instance.e9d(), setOf(item.type), item.serviceEndpoint, item.customProperties);
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.let' call
    var it = toSet(destination);
    return new Service(it);
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.dids.DidDocConfig', this, 5);
    tmp0_serialDesc.x2b('context', true);
    tmp0_serialDesc.x2b('publicKeyMap', true);
    tmp0_serialDesc.x2b('verificationConfigurationMap', true);
    tmp0_serialDesc.x2b('serviceConfigurationSet', true);
    tmp0_serialDesc.x2b('rootCustomProperties', true);
    this.iaj_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).jaj = function (encoder, value) {
    var tmp0_desc = this.iaj_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().qad_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !equals_0(value.context, DidUtils_getInstance().DEFAULT_CONTEXT)) {
      tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.context);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !equals_0(value.publicKeyMap, emptyMap())) {
      tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.publicKeyMap);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !equals_0(value.verificationConfigurationMap, emptyMap())) {
      tmp1_output.y25(tmp0_desc, 2, tmp2_cached[2].b1(), value.verificationConfigurationMap);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !equals_0(value.serviceConfigurationSet, emptySet())) {
      tmp1_output.y25(tmp0_desc, 3, tmp2_cached[3].b1(), value.serviceConfigurationSet);
    }
    if (tmp1_output.e26(tmp0_desc, 4) ? true : !(value.rootCustomProperties == null)) {
      tmp1_output.a26(tmp0_desc, 4, tmp2_cached[4].b1(), value.rootCustomProperties);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_12).v20 = function (encoder, value) {
    return this.jaj(encoder, value instanceof DidDocConfig ? value : THROW_CCE());
  };
  protoOf($serializer_12).w20 = function (decoder) {
    var tmp0_desc = this.iaj_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.h24(tmp0_desc);
    var tmp10_cached = Companion_getInstance_25().qad_1;
    if (tmp9_input.x24()) {
      tmp4_local0 = tmp9_input.t24(tmp0_desc, 0, tmp10_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.t24(tmp0_desc, 1, tmp10_cached[1].b1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.t24(tmp0_desc, 2, tmp10_cached[2].b1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.t24(tmp0_desc, 3, tmp10_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.v24(tmp0_desc, 4, tmp10_cached[4].b1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.t24(tmp0_desc, 0, tmp10_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.t24(tmp0_desc, 1, tmp10_cached[1].b1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.t24(tmp0_desc, 2, tmp10_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.t24(tmp0_desc, 3, tmp10_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.v24(tmp0_desc, 4, tmp10_cached[4].b1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.i24(tmp0_desc);
    return DidDocConfig_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_12).u20 = function () {
    return this.iaj_1;
  };
  protoOf($serializer_12).m2c = function () {
    var tmp0_cached = Companion_getInstance_25().qad_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), tmp0_cached[1].b1(), tmp0_cached[2].b1(), tmp0_cached[3].b1(), get_nullable(tmp0_cached[4].b1())];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function DidDocConfig_init_$Init$(seen0, context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().iaj_1);
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
    this.saj_1 = this$0;
    this.taj_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidDocConfig$toDidDocumentAsync$slambda).uaj = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidDocConfig$toDidDocumentAsync$slambda).ac = function ($completion) {
    return this.uaj($completion);
  };
  protoOf(DidDocConfig$toDidDocumentAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.saj_1.vaj(this.taj_1, this);
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
  protoOf(DidDocConfig$toDidDocumentAsync$slambda).ja = function (completion) {
    return new DidDocConfig$toDidDocumentAsync$slambda(this.saj_1, this.taj_1, completion);
  };
  function DidDocConfig$toDidDocumentAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidDocConfig$toDidDocumentAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.uaj($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $toDidDocumentCOROUTINE$10(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.eak_1 = _this__u8e3s4;
    this.fak_1 = did;
  }
  protoOf($toDidDocumentCOROUTINE$10).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.gak_1 = LinkedHashMap_init_$Create$();
            this.hak_1 = this.gak_1;
            var tmp_1 = this;
            tmp_1.iak_1 = this.hak_1;
            this.jak_1 = this.iak_1;
            var tmp0 = Default_getInstance();
            var value = this.eak_1.context;
            var this_0 = tmp0.w24();
            var this_1 = serializer(this_0, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false))]), false));
            this.jak_1.p2('context', tmp0.f4s(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), value));
            var tmp2 = Default_getInstance();
            var value_0 = this.fak_1;
            var this_2 = tmp2.w24();
            var this_3 = serializer(this_2, createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false));
            this.jak_1.p2('id', tmp2.f4s(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), value_0));
            this.n9_1 = 1;
            suspendResult = createVerificationMethodSet(this.eak_1, this.fak_1, this);
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
              var this_6 = this_5.w24();
              var this_7 = serializer(this_6, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(VerificationMethod_4), arrayOf([]), false))]), false));
              this.jak_1.p2('verificationMethod', this_5.f4s(isInterface(this_7, KSerializer) ? this_7 : THROW_CCE(), tmp0_safe_receiver));
              var _iterator__ex2g4s = createVerificationRelationshipMap(this.eak_1, this.fak_1).z().p();
              while (_iterator__ex2g4s.q()) {
                var element = _iterator__ex2g4s.r();
                var verRelType = element.a1();
                var verRelValue = element.b1();
                var tmp_3 = verRelType.toString();
                var this_8 = Default_getInstance();
                var this_9 = this_8.w24();
                var this_10 = serializer(this_9, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(VerificationRelationship), arrayOf([]), false))]), false));
                this.jak_1.p2(tmp_3, this_8.f4s(isInterface(this_10, KSerializer) ? this_10 : THROW_CCE(), verRelValue));
              }
            }

            var this_11 = createService(this.eak_1, this.fak_1);
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
              var this_13 = this_12.w24();
              var this_14 = serializer(this_13, createKType(getKClass(Service), arrayOf([]), false));
              this.jak_1.p2('service', this_12.f4s(isInterface(this_14, KSerializer) ? this_14 : THROW_CCE(), tmp1_safe_receiver));
            }

            var tmp2_safe_receiver = this.eak_1.rootCustomProperties;
            if (tmp2_safe_receiver == null)
              null;
            else {
              var _iterator__ex2g4s_0 = tmp2_safe_receiver.z().p();
              while (_iterator__ex2g4s_0.q()) {
                var element_0 = _iterator__ex2g4s_0.r();
                this.jak_1.p2(element_0.a1(), element_0.b1());
              }
            }

            var ARGUMENT = this.hak_1;
            var ARGUMENT_0 = ARGUMENT.x3();
            return new DidDocument(ARGUMENT_0);
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
  protoOf($toDidDocumentCOROUTINE$10)['<set-state>'] = protoOf($toDidDocumentCOROUTINE$10).u9;
  protoOf($toDidDocumentCOROUTINE$10)['<get-state>'] = protoOf($toDidDocumentCOROUTINE$10).v9;
  protoOf($toDidDocumentCOROUTINE$10)['<set-exceptionState>'] = protoOf($toDidDocumentCOROUTINE$10).w9;
  protoOf($toDidDocumentCOROUTINE$10)['<get-exceptionState>'] = protoOf($toDidDocumentCOROUTINE$10).x9;
  protoOf($toDidDocumentCOROUTINE$10)['<set-result>'] = protoOf($toDidDocumentCOROUTINE$10).y9;
  protoOf($toDidDocumentCOROUTINE$10)['<get-result>'] = protoOf($toDidDocumentCOROUTINE$10).z9;
  protoOf($toDidDocumentCOROUTINE$10)['<set-exception>'] = protoOf($toDidDocumentCOROUTINE$10).aa;
  protoOf($toDidDocumentCOROUTINE$10)['<get-exception>'] = protoOf($toDidDocumentCOROUTINE$10).ba;
  protoOf($toDidDocumentCOROUTINE$10)['<set-finallyPath>'] = protoOf($toDidDocumentCOROUTINE$10).ca;
  protoOf($toDidDocumentCOROUTINE$10)['<get-finallyPath>'] = protoOf($toDidDocumentCOROUTINE$10).da;
  protoOf($toDidDocumentCOROUTINE$10)['<get-context>'] = protoOf($toDidDocumentCOROUTINE$10).t9;
  function $createVerificationMethodSetCOROUTINE$11(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sai_1 = _this__u8e3s4;
    this.tai_1 = did;
  }
  protoOf($createVerificationMethodSetCOROUTINE$11).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            tmp_0.uai_1 = flatten(this.sai_1.verificationConfigurationMap.o2());
            this.vai_1 = this.uai_1;
            var tmp_1 = this;
            tmp_1.wai_1 = this.vai_1;
            var tmp_2 = this;
            tmp_2.xai_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.vai_1, 10));
            this.yai_1 = this.wai_1;
            this.zai_1 = this.xai_1;
            this.aaj_1 = this.yai_1.p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.aaj_1.q()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.baj_1 = this.aaj_1.r();
            var tmp_3 = this;
            tmp_3.caj_1 = this.baj_1;
            this.daj_1 = this.caj_1;
            var tmp_4 = this;
            var tmp0_elvis_lhs = this.sai_1.publicKeyMap.m2(this.daj_1.publicKeyId);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('This exception should never happen, we have already checked that all verification keys exist in the key map');
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }

            tmp_4.eaj_1 = tmp_5;
            this.faj_1 = this.tai_1 + '#' + this.daj_1.publicKeyId;
            this.gaj_1 = VerificationMethodType_JsonWebKey2020_getInstance();
            this.haj_1 = VerificationMaterialType_PublicKeyJwk_getInstance();
            this.n9_1 = 2;
            suspendResult = this.eaj_1.u6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = to(this.haj_1, ARGUMENT);
            var ARGUMENT_1 = new VerificationMethod_4(this.faj_1, this.gaj_1, ARGUMENT_0, this.tai_1, this.daj_1.customProperties);
            this.zai_1.n(ARGUMENT_1);
            this.n9_1 = 1;
            continue $sm;
          case 3:
            var ARGUMENT_2 = this.zai_1;
            return toSet(ARGUMENT_2);
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
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
  protoOf(DidDocConfig).t9 = function () {
    return this.context;
  };
  protoOf(DidDocConfig).kak = function () {
    return this.publicKeyMap;
  };
  protoOf(DidDocConfig).lak = function () {
    return this.verificationConfigurationMap;
  };
  protoOf(DidDocConfig).mak = function () {
    return this.serviceConfigurationSet;
  };
  protoOf(DidDocConfig).nak = function () {
    return this.rootCustomProperties;
  };
  protoOf(DidDocConfig).vaj = function (did, $completion) {
    var tmp = new $toDidDocumentCOROUTINE$10(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidDocConfig).oak = function (did) {
    var tmp = DidDocConfig$toDidDocumentAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidDocConfig).dc = function () {
    return this.context;
  };
  protoOf(DidDocConfig).ec = function () {
    return this.publicKeyMap;
  };
  protoOf(DidDocConfig).yp = function () {
    return this.verificationConfigurationMap;
  };
  protoOf(DidDocConfig).p70 = function () {
    return this.serviceConfigurationSet;
  };
  protoOf(DidDocConfig).w7k = function () {
    return this.rootCustomProperties;
  };
  protoOf(DidDocConfig).pak = function (context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties) {
    return new DidDocConfig(context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties);
  };
  protoOf(DidDocConfig).copy = function (context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties, $super) {
    context = context === VOID ? this.context : context;
    publicKeyMap = publicKeyMap === VOID ? this.publicKeyMap : publicKeyMap;
    verificationConfigurationMap = verificationConfigurationMap === VOID ? this.verificationConfigurationMap : verificationConfigurationMap;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? this.serviceConfigurationSet : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? this.rootCustomProperties : rootCustomProperties;
    return $super === VOID ? this.pak(context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties) : $super.pak.call(this, context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties);
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
    tmp.qak_1 = [null, lazy(tmp_0, VerificationMethodConfiguration$Companion$$childSerializers$_anonymous__2j3qxc)];
  }
  protoOf(Companion_24).m4u = function () {
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
    tmp0_serialDesc.x2b('publicKeyId', false);
    tmp0_serialDesc.x2b('customProperties', true);
    this.rak_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).sak = function (encoder, value) {
    var tmp0_desc = this.rak_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().qak_1;
    tmp1_output.w25(tmp0_desc, 0, value.publicKeyId);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.customProperties == null)) {
      tmp1_output.a26(tmp0_desc, 1, tmp2_cached[1].b1(), value.customProperties);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_13).v20 = function (encoder, value) {
    return this.sak(encoder, value instanceof VerificationMethodConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_13).w20 = function (decoder) {
    var tmp0_desc = this.rak_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_26().qak_1;
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, tmp7_cached[1].b1(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, tmp7_cached[1].b1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return VerificationMethodConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_13).u20 = function () {
    return this.rak_1;
  };
  protoOf($serializer_13).m2c = function () {
    var tmp0_cached = Companion_getInstance_26().qak_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(tmp0_cached[1].b1())];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function VerificationMethodConfiguration_init_$Init$(seen0, publicKeyId, customProperties, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_13().rak_1);
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
  protoOf(VerificationMethodConfiguration).tak = function () {
    return this.publicKeyId;
  };
  protoOf(VerificationMethodConfiguration).ya2 = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethodConfiguration).dc = function () {
    return this.publicKeyId;
  };
  protoOf(VerificationMethodConfiguration).ec = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethodConfiguration).uak = function (publicKeyId, customProperties) {
    return new VerificationMethodConfiguration(publicKeyId, customProperties);
  };
  protoOf(VerificationMethodConfiguration).copy = function (publicKeyId, customProperties, $super) {
    publicKeyId = publicKeyId === VOID ? this.publicKeyId : publicKeyId;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.uak(publicKeyId, customProperties) : $super.uak.call(this, publicKeyId, customProperties);
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
    tmp.vak_1 = [null, tmp_1, lazy(tmp_2, ServiceConfiguration$Companion$$childSerializers$_anonymous__9c7hg7_0)];
  }
  protoOf(Companion_25).m4u = function () {
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
    tmp0_serialDesc.x2b('type', false);
    tmp0_serialDesc.x2b('serviceEndpoint', false);
    tmp0_serialDesc.x2b('customProperties', true);
    this.wak_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).xak = function (encoder, value) {
    var tmp0_desc = this.wak_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().vak_1;
    tmp1_output.w25(tmp0_desc, 0, value.type);
    tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.serviceEndpoint);
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.customProperties == null)) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].b1(), value.customProperties);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_14).v20 = function (encoder, value) {
    return this.xak(encoder, value instanceof ServiceConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_14).w20 = function (decoder) {
    var tmp0_desc = this.wak_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_27().vak_1;
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1, tmp8_cached[1].b1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].b1(), tmp6_local2);
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
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1, tmp8_cached[1].b1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, tmp8_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i24(tmp0_desc);
    return ServiceConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_14).u20 = function () {
    return this.wak_1;
  };
  protoOf($serializer_14).m2c = function () {
    var tmp0_cached = Companion_getInstance_27().vak_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].b1(), get_nullable(tmp0_cached[2].b1())];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function ServiceConfiguration_init_$Init$(seen0, type, serviceEndpoint, customProperties, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_14().wak_1);
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
  protoOf(ServiceConfiguration).za0 = function () {
    return this.type;
  };
  protoOf(ServiceConfiguration).xa2 = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceConfiguration).ya2 = function () {
    return this.customProperties;
  };
  protoOf(ServiceConfiguration).dc = function () {
    return this.type;
  };
  protoOf(ServiceConfiguration).ec = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceConfiguration).yp = function () {
    return this.customProperties;
  };
  protoOf(ServiceConfiguration).yak = function (type, serviceEndpoint, customProperties) {
    return new ServiceConfiguration(type, serviceEndpoint, customProperties);
  };
  protoOf(ServiceConfiguration).copy = function (type, serviceEndpoint, customProperties, $super) {
    type = type === VOID ? this.type : type;
    serviceEndpoint = serviceEndpoint === VOID ? this.serviceEndpoint : serviceEndpoint;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.yak(type, serviceEndpoint, customProperties) : $super.yak.call(this, type, serviceEndpoint, customProperties);
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
    var tmp$ret$1 = keyType.s2_1.toLowerCase();
    DidCreateOptions_init_$Init$('jwk', config([to('keyType', tmp$ret$1)]), VOID, this);
  }
  function DidKeyCreateOptions(keyType, useJwkJcsPub) {
    keyType = keyType === VOID ? KeyType_Ed25519_getInstance() : keyType;
    useJwkJcsPub = useJwkJcsPub === VOID ? false : useJwkJcsPub;
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = keyType.s2_1.toLowerCase();
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
    var tmp$ret$1 = keyType.s2_1.toLowerCase();
    DidCreateOptions_init_$Init$('v1', config([tmp, to('keytype', tmp$ret$1)]), VOID, this);
  }
  function DidWebCreateOptions(domain, path, keyType, didDocConfig) {
    path = path === VOID ? '' : path;
    keyType = keyType === VOID ? KeyType_Ed25519_getInstance() : keyType;
    didDocConfig = didDocConfig === VOID ? null : didDocConfig;
    DidCreateOptions_init_$Init$('web', config([to('domain', domain), to('path', path), to('keyType', keyType)]), didDocConfig, this);
  }
  function LocalRegistrarMethod$registerAsync$slambda(this$0, $options, resultContinuation) {
    this.hal_1 = this$0;
    this.ial_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrarMethod$registerAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(LocalRegistrarMethod$registerAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(LocalRegistrarMethod$registerAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.hal_1.w9u(this.ial_1, this);
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
  protoOf(LocalRegistrarMethod$registerAsync$slambda).ja = function (completion) {
    return new LocalRegistrarMethod$registerAsync$slambda(this.hal_1, this.ial_1, completion);
  };
  function LocalRegistrarMethod$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new LocalRegistrarMethod$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrarMethod$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.ral_1 = this$0;
    this.sal_1 = $key;
    this.tal_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrarMethod$registerByKeyAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(LocalRegistrarMethod$registerByKeyAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(LocalRegistrarMethod$registerByKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.ral_1.ka8(this.sal_1, this.tal_1, this);
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
  protoOf(LocalRegistrarMethod$registerByKeyAsync$slambda).ja = function (completion) {
    return new LocalRegistrarMethod$registerByKeyAsync$slambda(this.ral_1, this.sal_1, this.tal_1, completion);
  };
  function LocalRegistrarMethod$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new LocalRegistrarMethod$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrarMethod(method) {
    this.method = method;
  }
  protoOf(LocalRegistrarMethod).n3n = function () {
    return this.method;
  };
  protoOf(LocalRegistrarMethod).na0 = function (options) {
    var tmp = LocalRegistrarMethod$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrarMethod).ual = function (key, options) {
    var tmp = LocalRegistrarMethod$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function createDid($this, key, network, $completion) {
    var tmp = new $createDidCOROUTINE$14($this, key, network, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function initiateDidJob($this, url, body, $completion) {
    var tmp = new $initiateDidJobCOROUTINE$16($this, url, body, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function finalizeDidJob($this, url, jobId, verificationMethodId, signatures, $completion) {
    var tmp = new $finalizeDidJobCOROUTINE$17($this, url, jobId, verificationMethodId, signatures, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function signPayload($this, key, job, $completion) {
    var tmp = new $signPayloadCOROUTINE$18($this, key, job, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function DidCheqdRegistrar$log$lambda() {
    return Unit_instance;
  }
  function DidCheqdRegistrar$json$lambda($this$Json) {
    $this$Json.n4t_1 = get_didStateSerializationModule();
    $this$Json.y4s_1 = true;
    $this$Json.a4t_1 = true;
    $this$Json.z4s_1 = true;
    $this$Json.x4s_1 = false;
    return Unit_instance;
  }
  function DidCheqdRegistrar$client$lambda$lambda(this$0) {
    return function ($this$install) {
      json($this$install, this$0.far_1);
      return Unit_instance;
    };
  }
  function DidCheqdRegistrar$client$lambda$lambda_0($this$install) {
    $this$install.n5g_1 = LogLevel_BODY_getInstance();
    return Unit_instance;
  }
  function DidCheqdRegistrar$client$lambda(this$0) {
    return function ($this$HttpClient) {
      var tmp = get_ContentNegotiation();
      $this$HttpClient.p3l(tmp, DidCheqdRegistrar$client$lambda$lambda(this$0));
      var tmp_0 = get_Logging();
      $this$HttpClient.p3l(tmp_0, DidCheqdRegistrar$client$lambda$lambda_0);
      return Unit_instance;
    };
  }
  function DidCheqdRegistrar$initiateDidJob$lambda($it) {
    return function () {
      return 'Try parse Job action response: ' + $it;
    };
  }
  function DidCheqdRegistrar$registerAsync$slambda(this$0, $options, resultContinuation) {
    this.par_1 = this$0;
    this.qar_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdRegistrar$registerAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidCheqdRegistrar$registerAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidCheqdRegistrar$registerAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.par_1.w9u(this.qar_1, this);
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
  protoOf(DidCheqdRegistrar$registerAsync$slambda).ja = function (completion) {
    return new DidCheqdRegistrar$registerAsync$slambda(this.par_1, this.qar_1, completion);
  };
  function DidCheqdRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidCheqdRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidCheqdRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.zar_1 = this$0;
    this.aas_1 = $key;
    this.bas_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdRegistrar$registerByKeyAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidCheqdRegistrar$registerByKeyAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidCheqdRegistrar$registerByKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.zar_1.ka8(this.aas_1, this.bas_1, this);
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
  protoOf(DidCheqdRegistrar$registerByKeyAsync$slambda).ja = function (completion) {
    return new DidCheqdRegistrar$registerByKeyAsync$slambda(this.zar_1, this.aas_1, this.bas_1, completion);
  };
  function DidCheqdRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidCheqdRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$12(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.kas_1 = _this__u8e3s4;
    this.las_1 = options;
  }
  protoOf($registerCOROUTINE$12).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = Companion_instance_4.generate$default(KeyType_Ed25519_getInstance(), VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.mas_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.kas_1.ka8(this.mas_1, this.las_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf($registerCOROUTINE$12)['<set-state>'] = protoOf($registerCOROUTINE$12).u9;
  protoOf($registerCOROUTINE$12)['<get-state>'] = protoOf($registerCOROUTINE$12).v9;
  protoOf($registerCOROUTINE$12)['<set-exceptionState>'] = protoOf($registerCOROUTINE$12).w9;
  protoOf($registerCOROUTINE$12)['<get-exceptionState>'] = protoOf($registerCOROUTINE$12).x9;
  protoOf($registerCOROUTINE$12)['<set-result>'] = protoOf($registerCOROUTINE$12).y9;
  protoOf($registerCOROUTINE$12)['<get-result>'] = protoOf($registerCOROUTINE$12).z9;
  protoOf($registerCOROUTINE$12)['<set-exception>'] = protoOf($registerCOROUTINE$12).aa;
  protoOf($registerCOROUTINE$12)['<get-exception>'] = protoOf($registerCOROUTINE$12).ba;
  protoOf($registerCOROUTINE$12)['<set-finallyPath>'] = protoOf($registerCOROUTINE$12).ca;
  protoOf($registerCOROUTINE$12)['<get-finallyPath>'] = protoOf($registerCOROUTINE$12).da;
  protoOf($registerCOROUTINE$12)['<get-context>'] = protoOf($registerCOROUTINE$12).t9;
  function $registerByKeyCOROUTINE$13(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vas_1 = _this__u8e3s4;
    this.was_1 = key;
    this.xas_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$13).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            var this_0 = this.xas_1;
            var tmp0_safe_receiver = get_jsonObject(this_0.config).af('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('network');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
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
                    if (equals(element.s2_1, tmp4_safe_receiver, true)) {
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
            suspendResult = createDid(this.vas_1, this.was_1, tmp0_elvis_lhs == null ? 'testnet' : tmp0_elvis_lhs, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.yas_1 = suspendResult;
            this.zas_1 = this.yas_1;
            var tmp_3 = this;
            tmp_3.aat_1 = this.zas_1;
            this.bat_1 = this.aat_1;
            this.cat_1 = this.bat_1.id;
            this.n9_1 = 2;
            suspendResult = this.was_1.u6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor(this.bat_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var ARGUMENT_2 = new DidDocument(ARGUMENT_1);
            return new DidResult(this.cat_1, ARGUMENT_2);
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
  protoOf($registerByKeyCOROUTINE$13)['<set-state>'] = protoOf($registerByKeyCOROUTINE$13).u9;
  protoOf($registerByKeyCOROUTINE$13)['<get-state>'] = protoOf($registerByKeyCOROUTINE$13).v9;
  protoOf($registerByKeyCOROUTINE$13)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$13).w9;
  protoOf($registerByKeyCOROUTINE$13)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$13).x9;
  protoOf($registerByKeyCOROUTINE$13)['<set-result>'] = protoOf($registerByKeyCOROUTINE$13).y9;
  protoOf($registerByKeyCOROUTINE$13)['<get-result>'] = protoOf($registerByKeyCOROUTINE$13).z9;
  protoOf($registerByKeyCOROUTINE$13)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$13).aa;
  protoOf($registerByKeyCOROUTINE$13)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$13).ba;
  protoOf($registerByKeyCOROUTINE$13)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$13).ca;
  protoOf($registerByKeyCOROUTINE$13)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$13).da;
  protoOf($registerByKeyCOROUTINE$13)['<get-context>'] = protoOf($registerByKeyCOROUTINE$13).t9;
  function $createDidCOROUTINE$14(_this__u8e3s4, key, network, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dam_1 = _this__u8e3s4;
    this.eam_1 = key;
    this.fam_1 = network;
  }
  protoOf($createDidCOROUTINE$14).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            var tmp_0 = this;
            tmp_0.gam_1 = this.dam_1;
            this.ham_1 = this.gam_1;
            var tmp_1 = this;
            tmp_1.iam_1 = this.ham_1;
            this.jam_1 = this.iam_1;
            if (!this.eam_1.keyType.equals(KeyType_Ed25519_getInstance()))
              throw IllegalArgumentException_init_$Create$('Key of type Ed25519 expected');
            this.n9_1 = 1;
            suspendResult = this.eam_1.s6q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.kam_1 = suspendResult;
            this.lam_1 = toHexString(this.kam_1);
            var tmp_2 = this;
            tmp_2.mam_1 = this.dam_1.gar_1;
            var tmp_3 = this;
            tmp_3.nam_1 = this.dam_1.aar_1 + '/' + this.dam_1.bar_1 + '/did-document' + ('?verificationMethod=' + this.dam_1.yaq_1) + ('&methodSpecificIdAlgo=' + this.dam_1.zaq_1) + ('&network=' + this.fam_1) + ('&publicKeyHex=' + this.lam_1);
            this.oam_1 = this.mam_1;
            this.pam_1 = this.nam_1;
            var tmp_4 = this;
            tmp_4.qam_1 = this.oam_1;
            this.ram_1 = this.qam_1;
            var tmp_5 = this;
            tmp_5.sam_1 = this.ram_1;
            var tmp_6 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.pam_1);
            tmp_6.tam_1 = this_0;
            this.uam_1 = this.sam_1;
            this.vam_1 = this.tam_1;
            this.vam_1.j3k_1 = Companion_getInstance().c32_1;
            var tmp_7 = this;
            tmp_7.wam_1 = this.uam_1;
            var tmp_8 = this;
            tmp_8.xam_1 = this.vam_1;
            this.yam_1 = this.wam_1;
            this.zam_1 = this.xam_1;
            this.n9_1 = 2;
            suspendResult = (new HttpStatement(this.zam_1, this.yam_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.aan_1 = suspendResult;
            this.n9_1 = 3;
            suspendResult = bodyAsText(this.aan_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.ban_1 = suspendResult;
            var tmp_9 = this;
            var tmp3 = this.dam_1.far_1;
            var string = this.ban_1;
            var this_1 = tmp3.w24();
            var this_2 = serializer(this_1, createKType(getKClass(DidGetResponse), arrayOf([]), false));
            tmp_9.can_1 = tmp3.y21(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string);
            this.dan_1 = this.can_1;
            var tmp_10 = this;
            tmp_10.ean_1 = this.dan_1;
            this.fan_1 = this.ean_1;
            this.n9_1 = 4;
            var tmp0 = this.dam_1.far_1;
            var value = new JobCreateRequest(this.fan_1.didDoc);
            var this_3 = tmp0.w24();
            var this_4 = serializer(this_3, createKType(getKClass(JobCreateRequest), arrayOf([]), false));
            suspendResult = initiateDidJob(this.dam_1, this.dam_1.car_1, tmp0.f4s(isInterface(this_4, KSerializer) ? this_4 : THROW_CCE(), value), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.gan_1 = suspendResult;
            this.n9_1 = 5;
            suspendResult = signPayload(this.dam_1, this.eam_1, this.gan_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.han_1 = suspendResult;
            this.ian_1 = this.gan_1.jobId;
            if (this.ian_1 == null) {
              this.jan_1 = null;
              this.n9_1 = 7;
              continue $sm;
            } else {
              var tmp_11 = this;
              tmp_11.kan_1 = this.ian_1;
              this.lan_1 = this.kan_1;
              var tmp_12 = this;
              tmp_12.man_1 = this.lan_1;
              this.nan_1 = this.man_1;
              this.n9_1 = 6;
              suspendResult = finalizeDidJob(this.dam_1, this.dam_1.car_1, this.nan_1, first_0(this.fan_1.didDoc.verificationMethod).id, this.han_1, this);
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

            tmp_13.jan_1 = tmp_14;
            this.n9_1 = 7;
            continue $sm;
          case 7:
            var tmp1_elvis_lhs_0 = this.jan_1;
            var tmp_15;
            if (tmp1_elvis_lhs_0 == null) {
              throw Exception_init_$Create$("Initialize job didn't return any jobId.");
            } else {
              tmp_15 = tmp1_elvis_lhs_0;
            }

            return tmp_15;
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
  function $initiateDidJobCOROUTINE$16(_this__u8e3s4, url, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wan_1 = _this__u8e3s4;
    this.xan_1 = url;
    this.yan_1 = body;
  }
  protoOf($initiateDidJobCOROUTINE$16).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.zan_1 = this.wan_1.gar_1;
            var tmp_1 = this;
            tmp_1.aao_1 = this.xan_1;
            this.bao_1 = this.zan_1;
            this.cao_1 = this.aao_1;
            var tmp_2 = this;
            tmp_2.dao_1 = this.bao_1;
            this.eao_1 = this.dao_1;
            var tmp_3 = this;
            tmp_3.fao_1 = this.eao_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.cao_1);
            contentType(this_0, Application_getInstance().y2v_1);
            var body = this.yan_1;
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
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
              this_0.e3q(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.l3k_1 = body;
                this_0.e3q(null);
              } else {
                this_0.l3k_1 = body;
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
                this_0.e3q(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.gao_1 = this_0;
            this.hao_1 = this.fao_1;
            this.iao_1 = this.gao_1;
            this.iao_1.j3k_1 = Companion_getInstance().d32_1;
            var tmp_11 = this;
            tmp_11.jao_1 = this.hao_1;
            var tmp_12 = this;
            tmp_12.kao_1 = this.iao_1;
            this.lao_1 = this.jao_1;
            this.mao_1 = this.kao_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.mao_1, this.lao_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.nao_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.nao_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var it = suspendResult;
            this.wan_1.xaq_1.n6g(DidCheqdRegistrar$initiateDidJob$lambda(it));
            var this_1 = this.wan_1.far_1;
            var this_2 = this_1.w24();
            var this_3 = serializer(this_2, createKType(getKClass(JobActionResponse), arrayOf([]), false));
            return this_1.y21(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), it);
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
  function $finalizeDidJobCOROUTINE$17(_this__u8e3s4, url, jobId, verificationMethodId, signatures, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wao_1 = _this__u8e3s4;
    this.xao_1 = url;
    this.yao_1 = jobId;
    this.zao_1 = verificationMethodId;
    this.aap_1 = signatures;
  }
  protoOf($finalizeDidJobCOROUTINE$17).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.bap_1 = this.wao_1;
            this.cap_1 = this.bap_1;
            var tmp_1 = this;
            tmp_1.dap_1 = this.cap_1;
            this.eap_1 = this.dap_1;
            var tmp_2 = this;
            tmp_2.fap_1 = this.wao_1.gar_1;
            var tmp_3 = this;
            tmp_3.gap_1 = this.xao_1;
            this.hap_1 = this.fap_1;
            this.iap_1 = this.gap_1;
            var tmp_4 = this;
            tmp_4.jap_1 = this.hap_1;
            this.kap_1 = this.jap_1;
            var tmp_5 = this;
            tmp_5.lap_1 = this.kap_1;
            var tmp_6 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.iap_1);
            contentType(this_0, Application_getInstance().y2v_1);
            var this_1 = this.aap_1;
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
            var _iterator__ex2g4s = this_1.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(new SigningResponse(Base64Utils_getInstance().base64toBase64Url(item), VOID, this.zao_1));
            }

            var body = new JobSignRequest(this.yao_1, new Secret_0(destination));
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
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
              this_0.e3q(new TypeInfo(tmp_7, tmp_8));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.l3k_1 = body;
                this_0.e3q(null);
              } else {
                this_0.l3k_1 = body;
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
                this_0.e3q(new TypeInfo(tmp_10, tmp_11));
              }
            }

            tmp_6.map_1 = this_0;
            this.nap_1 = this.lap_1;
            this.oap_1 = this.map_1;
            this.oap_1.j3k_1 = Companion_getInstance().d32_1;
            var tmp_13 = this;
            tmp_13.pap_1 = this.nap_1;
            var tmp_14 = this;
            tmp_14.qap_1 = this.oap_1;
            this.rap_1 = this.pap_1;
            this.sap_1 = this.qap_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.sap_1, this.rap_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tap_1 = suspendResult;
            this.uap_1 = this.tap_1;
            this.n9_1 = 2;
            var tmp_15 = this.uap_1.q3n();
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

            suspendResult = tmp_15.t3m(new TypeInfo(tmp_16, tmp_17), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult instanceof JobActionResponse ? suspendResult : THROW_CCE();
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
  function $signPayloadCOROUTINE$18(_this__u8e3s4, key, job, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.daq_1 = _this__u8e3s4;
    this.eaq_1 = key;
    this.faq_1 = job;
  }
  protoOf($signPayloadCOROUTINE$18).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            tmp_0.gaq_1 = this.daq_1;
            this.haq_1 = this.gaq_1;
            var tmp_1 = this;
            tmp_1.iaq_1 = this.haq_1;
            this.jaq_1 = this.iaq_1;
            var tmp_2 = this;
            var tmp_3 = this.faq_1.didState;
            var tmp0_elvis_lhs = tmp_3 instanceof ActionDidState ? tmp_3 : null;
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              var message = 'Unexpected did state';
              throw IllegalStateException_init_$Create$(toString_0(message));
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_2.kaq_1 = tmp_4;
            if (!equals(this.kaq_1.action, 'signPayload', true)) {
              var message_0 = 'Unexpected state action: ' + this.kaq_1.action;
              throw IllegalStateException_init_$Create$(toString_0(message_0));
            }

            var tmp_5 = this;
            var this_0 = this.kaq_1.signingRequest;
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
            var _iterator__ex2g4s = this_0.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(Default_getInstance_0().cl(item.serializedPayload));
            }

            tmp_5.laq_1 = destination;
            var tmp_6 = this;
            tmp_6.maq_1 = this.laq_1;
            this.naq_1 = this.maq_1;
            var tmp_7 = this;
            tmp_7.oaq_1 = this.naq_1;
            var tmp_8 = this;
            tmp_8.paq_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.naq_1, 10));
            this.qaq_1 = this.oaq_1;
            this.raq_1 = this.paq_1;
            this.saq_1 = this.qaq_1.p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.saq_1.q()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.taq_1 = this.saq_1.r();
            var tmp_9 = this;
            tmp_9.uaq_1 = this.taq_1;
            this.vaq_1 = this.uaq_1;
            this.waq_1 = Default_getInstance_0();
            this.n9_1 = 2;
            suspendResult = this.eaq_1.t6l(this.vaq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = isByteArray(suspendResult) ? suspendResult : THROW_CCE();
            var ARGUMENT_0 = this.waq_1.yk(ARGUMENT);
            this.raq_1.n(ARGUMENT_0);
            this.n9_1 = 1;
            continue $sm;
          case 3:
            return this.raq_1;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function DidCheqdRegistrar() {
    LocalRegistrarMethod.call(this, 'cheqd');
    var tmp = this;
    var tmp_0 = KotlinLogging_instance;
    tmp.xaq_1 = tmp_0.w6g(DidCheqdRegistrar$log$lambda);
    this.yaq_1 = 'Ed25519VerificationKey2020';
    this.zaq_1 = 'uuid';
    this.aar_1 = 'https://did-registrar.cheqd.net';
    this.bar_1 = '1.0';
    this.car_1 = this.aar_1 + '/' + this.bar_1 + '/create';
    this.dar_1 = this.aar_1 + '/' + this.bar_1 + '/deactivate';
    this.ear_1 = this.aar_1 + '/' + this.bar_1 + '/update';
    var tmp_1 = this;
    tmp_1.far_1 = Json(VOID, DidCheqdRegistrar$json$lambda);
    var tmp_2 = this;
    tmp_2.gar_1 = HttpClient(DidCheqdRegistrar$client$lambda(this));
  }
  protoOf(DidCheqdRegistrar).w9u = function (options, $completion) {
    var tmp = new $registerCOROUTINE$12(this, options, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidCheqdRegistrar).ka8 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$13(this, key, options, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidCheqdRegistrar).na0 = function (options) {
    var tmp = DidCheqdRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidCheqdRegistrar).ual = function (key, options) {
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
    tmp.gat_1 = [lazy(tmp_0, ActionDidState$Secret$Companion$$childSerializers$_anonymous__gku42m)];
  }
  protoOf(Companion_26).m4u = function () {
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
    tmp0_serialDesc.x2b('signingResponse', false);
    this.hat_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).iat = function (encoder, value) {
    var tmp0_desc = this.hat_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().gat_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.signingResponse);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_15).v20 = function (encoder, value) {
    return this.iat(encoder, value instanceof Secret ? value : THROW_CCE());
  };
  protoOf($serializer_15).w20 = function (decoder) {
    var tmp0_desc = this.hat_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.h24(tmp0_desc);
    var tmp6_cached = Companion_getInstance_28().gat_1;
    if (tmp5_input.x24()) {
      tmp4_local0 = tmp5_input.t24(tmp0_desc, 0, tmp6_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.t24(tmp0_desc, 0, tmp6_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.i24(tmp0_desc);
    return Secret_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_15).u20 = function () {
    return this.hat_1;
  };
  protoOf($serializer_15).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_28().gat_1[0].b1()];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function Secret_init_$Init$(seen0, signingResponse, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_15().hat_1);
    }
    $this.signingResponse = signingResponse;
    return $this;
  }
  function Secret_init_$Create$(seen0, signingResponse, serializationConstructorMarker) {
    return Secret_init_$Init$(seen0, signingResponse, serializationConstructorMarker, objectCreate(protoOf(Secret)));
  }
  function Companion_27() {
  }
  protoOf(Companion_27).m4u = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_33;
  function Companion_getInstance_29() {
    return Companion_instance_33;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.SigningRequest', this, 4);
    tmp0_serialDesc.x2b('alg', false);
    tmp0_serialDesc.x2b('kid', false);
    tmp0_serialDesc.x2b('serializedPayload', false);
    tmp0_serialDesc.x2b('type', false);
    this.jat_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).kat = function (encoder, value) {
    var tmp0_desc = this.jat_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.alg);
    tmp1_output.w25(tmp0_desc, 1, value.kid);
    tmp1_output.w25(tmp0_desc, 2, value.serializedPayload);
    tmp1_output.w25(tmp0_desc, 3, value.type);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_16).v20 = function (encoder, value) {
    return this.kat(encoder, value instanceof SigningRequest ? value : THROW_CCE());
  };
  protoOf($serializer_16).w20 = function (decoder) {
    var tmp0_desc = this.jat_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.r24(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.r24(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return SigningRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_16).u20 = function () {
    return this.jat_1;
  };
  protoOf($serializer_16).m2c = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_16().jat_1);
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
  protoOf(Secret).lat = function () {
    return this.signingResponse;
  };
  protoOf(Secret).dc = function () {
    return this.signingResponse;
  };
  protoOf(Secret).mat = function (signingResponse) {
    return new Secret(signingResponse);
  };
  protoOf(Secret).copy = function (signingResponse, $super) {
    signingResponse = signingResponse === VOID ? this.signingResponse : signingResponse;
    return $super === VOID ? this.mat(signingResponse) : $super.mat.call(this, signingResponse);
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
  protoOf(SigningRequest).nat = function () {
    return this.alg;
  };
  protoOf(SigningRequest).s7k = function () {
    return this.kid;
  };
  protoOf(SigningRequest).oat = function () {
    return this.serializedPayload;
  };
  protoOf(SigningRequest).za0 = function () {
    return this.type;
  };
  protoOf(SigningRequest).dc = function () {
    return this.alg;
  };
  protoOf(SigningRequest).ec = function () {
    return this.kid;
  };
  protoOf(SigningRequest).yp = function () {
    return this.serializedPayload;
  };
  protoOf(SigningRequest).p70 = function () {
    return this.type;
  };
  protoOf(SigningRequest).k7k = function (alg, kid, serializedPayload, type) {
    return new SigningRequest(alg, kid, serializedPayload, type);
  };
  protoOf(SigningRequest).copy = function (alg, kid, serializedPayload, type, $super) {
    alg = alg === VOID ? this.alg : alg;
    kid = kid === VOID ? this.kid : kid;
    serializedPayload = serializedPayload === VOID ? this.serializedPayload : serializedPayload;
    type = type === VOID ? this.type : type;
    return $super === VOID ? this.k7k(alg, kid, serializedPayload, type) : $super.k7k.call(this, alg, kid, serializedPayload, type);
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
    tmp.pat_1 = [null, null, null, null, null, lazy(tmp_0, ActionDidState$Companion$$childSerializers$_anonymous__7jer9a)];
  }
  protoOf(Companion_28).m4u = function () {
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
    tmp0_serialDesc.x2b('state', false);
    tmp0_serialDesc.x2b('action', false);
    tmp0_serialDesc.x2b('description', false);
    tmp0_serialDesc.x2b('did', false);
    tmp0_serialDesc.x2b('secret', false);
    tmp0_serialDesc.x2b('signingRequest', false);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('state'));
    this.qat_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).rat = function (encoder, value) {
    var tmp0_desc = this.qat_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().pat_1;
    tmp1_output.w25(tmp0_desc, 0, value.fat_1);
    tmp1_output.w25(tmp0_desc, 1, value.action);
    tmp1_output.w25(tmp0_desc, 2, value.description);
    tmp1_output.w25(tmp0_desc, 3, value.did);
    tmp1_output.y25(tmp0_desc, 4, $serializer_getInstance_15(), value.secret);
    tmp1_output.y25(tmp0_desc, 5, tmp2_cached[5].b1(), value.signingRequest);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_17).v20 = function (encoder, value) {
    return this.rat(encoder, value instanceof ActionDidState ? value : THROW_CCE());
  };
  protoOf($serializer_17).w20 = function (decoder) {
    var tmp0_desc = this.qat_1;
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
    var tmp11_cached = Companion_getInstance_30().pat_1;
    if (tmp10_input.x24()) {
      tmp4_local0 = tmp10_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.r24(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.t24(tmp0_desc, 4, $serializer_getInstance_15(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.t24(tmp0_desc, 5, tmp11_cached[5].b1(), tmp9_local5);
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
            tmp5_local1 = tmp10_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.r24(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.t24(tmp0_desc, 4, $serializer_getInstance_15(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.t24(tmp0_desc, 5, tmp11_cached[5].b1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.i24(tmp0_desc);
    return ActionDidState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_17).u20 = function () {
    return this.qat_1;
  };
  protoOf($serializer_17).m2c = function () {
    var tmp0_cached = Companion_getInstance_30().pat_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), $serializer_getInstance_15(), tmp0_cached[5].b1()];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function ActionDidState_init_$Init$(seen0, state, action, description, did, secret, signingRequest, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_17().qat_1);
    }
    DidState_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.fat_1 = state;
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
    this.fat_1 = state;
    this.action = action;
    this.description = description;
    this.did = did;
    this.secret = secret;
    this.signingRequest = signingRequest;
  }
  protoOf(ActionDidState).v9 = function () {
    return this.fat_1;
  };
  protoOf(ActionDidState).sat = function () {
    return this.action;
  };
  protoOf(ActionDidState).tat = function () {
    return this.description;
  };
  protoOf(ActionDidState).ja6 = function () {
    return this.did;
  };
  protoOf(ActionDidState).uat = function () {
    return this.secret;
  };
  protoOf(ActionDidState).vat = function () {
    return this.signingRequest;
  };
  protoOf(ActionDidState).dc = function () {
    return this.fat_1;
  };
  protoOf(ActionDidState).ec = function () {
    return this.action;
  };
  protoOf(ActionDidState).yp = function () {
    return this.description;
  };
  protoOf(ActionDidState).p70 = function () {
    return this.did;
  };
  protoOf(ActionDidState).w7k = function () {
    return this.secret;
  };
  protoOf(ActionDidState).o85 = function () {
    return this.signingRequest;
  };
  protoOf(ActionDidState).wat = function (state, action, description, did, secret, signingRequest) {
    return new ActionDidState(state, action, description, did, secret, signingRequest);
  };
  protoOf(ActionDidState).copy = function (state, action, description, did, secret, signingRequest, $super) {
    state = state === VOID ? this.fat_1 : state;
    action = action === VOID ? this.action : action;
    description = description === VOID ? this.description : description;
    did = did === VOID ? this.did : did;
    secret = secret === VOID ? this.secret : secret;
    signingRequest = signingRequest === VOID ? this.signingRequest : signingRequest;
    return $super === VOID ? this.wat(state, action, description, did, secret, signingRequest) : $super.wat.call(this, state, action, description, did, secret, signingRequest);
  };
  protoOf(ActionDidState).toString = function () {
    return 'ActionDidState(state=' + this.fat_1 + ', action=' + this.action + ', description=' + this.description + ', did=' + this.did + ', secret=' + this.secret.toString() + ', signingRequest=' + toString_0(this.signingRequest) + ')';
  };
  protoOf(ActionDidState).hashCode = function () {
    var result = getStringHashCode(this.fat_1);
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
    if (!(this.fat_1 === tmp0_other_with_cast.fat_1))
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
    tmp.xat_1 = [tmp_1, tmp_3, null, lazy(tmp_4, DidDocument$Companion$$childSerializers$_anonymous__v0p2uo_2)];
  }
  protoOf(Companion_29).m4u = function () {
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
    tmp0_serialDesc.x2b('authentication', false);
    tmp0_serialDesc.x2b('controller', false);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('verificationMethod', false);
    this.yat_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).zat = function (encoder, value) {
    var tmp0_desc = this.yat_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_31().xat_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.authentication);
    tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.controller);
    tmp1_output.w25(tmp0_desc, 2, value.id);
    tmp1_output.y25(tmp0_desc, 3, tmp2_cached[3].b1(), value.verificationMethod);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_18).v20 = function (encoder, value) {
    return this.zat(encoder, value instanceof DidDocument_0 ? value : THROW_CCE());
  };
  protoOf($serializer_18).w20 = function (decoder) {
    var tmp0_desc = this.yat_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    var tmp9_cached = Companion_getInstance_31().xat_1;
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.t24(tmp0_desc, 0, tmp9_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.t24(tmp0_desc, 1, tmp9_cached[1].b1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, tmp9_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.t24(tmp0_desc, 0, tmp9_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.t24(tmp0_desc, 1, tmp9_cached[1].b1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, tmp9_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return DidDocument_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_18).u20 = function () {
    return this.yat_1;
  };
  protoOf($serializer_18).m2c = function () {
    var tmp0_cached = Companion_getInstance_31().xat_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), tmp0_cached[1].b1(), StringSerializer_getInstance(), tmp0_cached[3].b1()];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function DidDocument_init_$Init$_1(seen0, authentication, controller, id, verificationMethod, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_18().yat_1);
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
  protoOf(DidDocument_0).ia1 = function () {
    return this.authentication;
  };
  protoOf(DidDocument_0).aa1 = function () {
    return this.controller;
  };
  protoOf(DidDocument_0).x6b = function () {
    return this.id;
  };
  protoOf(DidDocument_0).ga1 = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocument_0).dc = function () {
    return this.authentication;
  };
  protoOf(DidDocument_0).ec = function () {
    return this.controller;
  };
  protoOf(DidDocument_0).yp = function () {
    return this.id;
  };
  protoOf(DidDocument_0).p70 = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocument_0).aau = function (authentication, controller, id, verificationMethod) {
    return new DidDocument_0(authentication, controller, id, verificationMethod);
  };
  protoOf(DidDocument_0).copy = function (authentication, controller, id, verificationMethod, $super) {
    authentication = authentication === VOID ? this.authentication : authentication;
    controller = controller === VOID ? this.controller : controller;
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    return $super === VOID ? this.aau(authentication, controller, id, verificationMethod) : $super.aau.call(this, authentication, controller, id, verificationMethod);
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
    return $this.bau_1.b1();
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
    tmp.bau_1 = lazy(tmp_0, DidState$Companion$_anonymous__ee3el);
  }
  protoOf(Companion_30).m4u = function () {
    return _get_$cachedSerializer__te6jhj_3(this);
  };
  protoOf(Companion_30).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
      builder_0.n2l(clazz, tmp$ret$1);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_0 = getKClass(FailedDidState);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer_0(createKType(getKClass(FailedDidState), arrayOf([]), false));
      var tmp$ret$4 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      builder_0.n2l(clazz_0, tmp$ret$4);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_1 = getKClass(FinishedDidState);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer_0(createKType(getKClass(FinishedDidState), arrayOf([]), false));
      var tmp$ret$7 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      builder_0.n2l(clazz_1, tmp$ret$7);
      builder_0.o2l(builder);
      didStateSerializationModule = builder.y29();
    }
  }
  function Companion_31() {
  }
  protoOf(Companion_31).m4u = function () {
    return $serializer_getInstance_19();
  };
  var Companion_instance_37;
  function Companion_getInstance_33() {
    return Companion_instance_37;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('failed', this, 3);
    tmp0_serialDesc.x2b('state', false);
    tmp0_serialDesc.x2b('reason', false);
    tmp0_serialDesc.x2b('description', false);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('state'));
    this.cau_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).dau = function (encoder, value) {
    var tmp0_desc = this.cau_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.eat_1);
    tmp1_output.w25(tmp0_desc, 1, value.reason);
    tmp1_output.w25(tmp0_desc, 2, value.description);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_19).v20 = function (encoder, value) {
    return this.dau(encoder, value instanceof FailedDidState ? value : THROW_CCE());
  };
  protoOf($serializer_19).w20 = function (decoder) {
    var tmp0_desc = this.cau_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.r24(tmp0_desc, 1);
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
            tmp4_local0 = tmp7_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.r24(tmp0_desc, 1);
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
    return FailedDidState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_19).u20 = function () {
    return this.cau_1;
  };
  protoOf($serializer_19).m2c = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_19().cau_1);
    }
    DidState_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.eat_1 = state;
    $this.reason = reason;
    $this.description = description;
    return $this;
  }
  function FailedDidState_init_$Create$(seen0, state, reason, description, serializationConstructorMarker) {
    return FailedDidState_init_$Init$(seen0, state, reason, description, serializationConstructorMarker, objectCreate(protoOf(FailedDidState)));
  }
  function FailedDidState(state, reason, description) {
    DidState.call(this);
    this.eat_1 = state;
    this.reason = reason;
    this.description = description;
  }
  protoOf(FailedDidState).v9 = function () {
    return this.eat_1;
  };
  protoOf(FailedDidState).eau = function () {
    return this.reason;
  };
  protoOf(FailedDidState).tat = function () {
    return this.description;
  };
  protoOf(FailedDidState).dc = function () {
    return this.eat_1;
  };
  protoOf(FailedDidState).ec = function () {
    return this.reason;
  };
  protoOf(FailedDidState).yp = function () {
    return this.description;
  };
  protoOf(FailedDidState).r9c = function (state, reason, description) {
    return new FailedDidState(state, reason, description);
  };
  protoOf(FailedDidState).copy = function (state, reason, description, $super) {
    state = state === VOID ? this.eat_1 : state;
    reason = reason === VOID ? this.reason : reason;
    description = description === VOID ? this.description : description;
    return $super === VOID ? this.r9c(state, reason, description) : $super.r9c.call(this, state, reason, description);
  };
  protoOf(FailedDidState).toString = function () {
    return 'FailedDidState(state=' + this.eat_1 + ', reason=' + this.reason + ', description=' + this.description + ')';
  };
  protoOf(FailedDidState).hashCode = function () {
    var result = getStringHashCode(this.eat_1);
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
    if (!(this.eat_1 === tmp0_other_with_cast.eat_1))
      return false;
    if (!(this.reason === tmp0_other_with_cast.reason))
      return false;
    if (!(this.description === tmp0_other_with_cast.description))
      return false;
    return true;
  };
  function Companion_32() {
  }
  protoOf(Companion_32).m4u = function () {
    return $serializer_getInstance_20();
  };
  var Companion_instance_38;
  function Companion_getInstance_34() {
    return Companion_instance_38;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('finished', this, 4);
    tmp0_serialDesc.x2b('state', false);
    tmp0_serialDesc.x2b('did', false);
    tmp0_serialDesc.x2b('didDocument', false);
    tmp0_serialDesc.x2b('secret', false);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('state'));
    this.fau_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).gau = function (encoder, value) {
    var tmp0_desc = this.fau_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.dat_1);
    tmp1_output.w25(tmp0_desc, 1, value.did);
    tmp1_output.y25(tmp0_desc, 2, $serializer_getInstance_18(), value.didDocument);
    tmp1_output.y25(tmp0_desc, 3, $serializer_getInstance_21(), value.secret);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_20).v20 = function (encoder, value) {
    return this.gau(encoder, value instanceof FinishedDidState ? value : THROW_CCE());
  };
  protoOf($serializer_20).w20 = function (decoder) {
    var tmp0_desc = this.fau_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.t24(tmp0_desc, 2, $serializer_getInstance_18(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, $serializer_getInstance_21(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.t24(tmp0_desc, 2, $serializer_getInstance_18(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, $serializer_getInstance_21(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return FinishedDidState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_20).u20 = function () {
    return this.fau_1;
  };
  protoOf($serializer_20).m2c = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_20().fau_1);
    }
    DidState_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.dat_1 = state;
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
    this.dat_1 = state;
    this.did = did;
    this.didDocument = didDocument;
    this.secret = secret;
  }
  protoOf(FinishedDidState).v9 = function () {
    return this.dat_1;
  };
  protoOf(FinishedDidState).ja6 = function () {
    return this.did;
  };
  protoOf(FinishedDidState).ka6 = function () {
    return this.didDocument;
  };
  protoOf(FinishedDidState).uat = function () {
    return this.secret;
  };
  protoOf(FinishedDidState).dc = function () {
    return this.dat_1;
  };
  protoOf(FinishedDidState).ec = function () {
    return this.did;
  };
  protoOf(FinishedDidState).yp = function () {
    return this.didDocument;
  };
  protoOf(FinishedDidState).p70 = function () {
    return this.secret;
  };
  protoOf(FinishedDidState).hau = function (state, did, didDocument, secret) {
    return new FinishedDidState(state, did, didDocument, secret);
  };
  protoOf(FinishedDidState).copy = function (state, did, didDocument, secret, $super) {
    state = state === VOID ? this.dat_1 : state;
    did = did === VOID ? this.did : did;
    didDocument = didDocument === VOID ? this.didDocument : didDocument;
    secret = secret === VOID ? this.secret : secret;
    return $super === VOID ? this.hau(state, did, didDocument, secret) : $super.hau.call(this, state, did, didDocument, secret);
  };
  protoOf(FinishedDidState).toString = function () {
    return 'FinishedDidState(state=' + this.dat_1 + ', did=' + this.did + ', didDocument=' + this.didDocument.toString() + ', secret=' + this.secret.toString() + ')';
  };
  protoOf(FinishedDidState).hashCode = function () {
    var result = getStringHashCode(this.dat_1);
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
    if (!(this.dat_1 === tmp0_other_with_cast.dat_1))
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
    tmp.iau_1 = [lazy(tmp_0, Secret$Companion$$childSerializers$_anonymous__6mbhq2)];
  }
  protoOf(Companion_33).m4u = function () {
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
    tmp0_serialDesc.x2b('signingResponse', false);
    this.jau_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).kau = function (encoder, value) {
    var tmp0_desc = this.jau_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_35().iau_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.signingResponse);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_21).v20 = function (encoder, value) {
    return this.kau(encoder, value instanceof Secret_0 ? value : THROW_CCE());
  };
  protoOf($serializer_21).w20 = function (decoder) {
    var tmp0_desc = this.jau_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.h24(tmp0_desc);
    var tmp6_cached = Companion_getInstance_35().iau_1;
    if (tmp5_input.x24()) {
      tmp4_local0 = tmp5_input.t24(tmp0_desc, 0, tmp6_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.t24(tmp0_desc, 0, tmp6_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.i24(tmp0_desc);
    return Secret_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_21).u20 = function () {
    return this.jau_1;
  };
  protoOf($serializer_21).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_35().iau_1[0].b1()];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function Secret_init_$Init$_0(seen0, signingResponse, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_21().jau_1);
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
  protoOf(Secret_0).lat = function () {
    return this.signingResponse;
  };
  protoOf(Secret_0).dc = function () {
    return this.signingResponse;
  };
  protoOf(Secret_0).lau = function (signingResponse) {
    return new Secret_0(signingResponse);
  };
  protoOf(Secret_0).copy = function (signingResponse, $super) {
    signingResponse = signingResponse === VOID ? this.signingResponse : signingResponse;
    return $super === VOID ? this.lau(signingResponse) : $super.lau.call(this, signingResponse);
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
  protoOf(Companion_34).m4u = function () {
    return $serializer_getInstance_22();
  };
  var Companion_instance_40;
  function Companion_getInstance_36() {
    return Companion_instance_40;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.SigningResponse', this, 3);
    tmp0_serialDesc.x2b('signature', false);
    tmp0_serialDesc.x2b('verificationMethodId', true);
    tmp0_serialDesc.x2b('kid', true);
    this.mau_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).nau = function (encoder, value) {
    var tmp0_desc = this.mau_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.signature);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.verificationMethodId == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value.verificationMethodId);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.kid == null)) {
      tmp1_output.a26(tmp0_desc, 2, StringSerializer_getInstance(), value.kid);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_22).v20 = function (encoder, value) {
    return this.nau(encoder, value instanceof SigningResponse ? value : THROW_CCE());
  };
  protoOf($serializer_22).w20 = function (decoder) {
    var tmp0_desc = this.mau_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
            tmp5_local1 = tmp7_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i24(tmp0_desc);
    return SigningResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_22).u20 = function () {
    return this.mau_1;
  };
  protoOf($serializer_22).m2c = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_22().mau_1);
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
  protoOf(SigningResponse).m9c = function () {
    return this.signature;
  };
  protoOf(SigningResponse).oau = function () {
    return this.verificationMethodId;
  };
  protoOf(SigningResponse).s7k = function () {
    return this.kid;
  };
  protoOf(SigningResponse).dc = function () {
    return this.signature;
  };
  protoOf(SigningResponse).ec = function () {
    return this.verificationMethodId;
  };
  protoOf(SigningResponse).yp = function () {
    return this.kid;
  };
  protoOf(SigningResponse).pau = function (signature, verificationMethodId, kid) {
    return new SigningResponse(signature, verificationMethodId, kid);
  };
  protoOf(SigningResponse).copy = function (signature, verificationMethodId, kid, $super) {
    signature = signature === VOID ? this.signature : signature;
    verificationMethodId = verificationMethodId === VOID ? this.verificationMethodId : verificationMethodId;
    kid = kid === VOID ? this.kid : kid;
    return $super === VOID ? this.pau(signature, verificationMethodId, kid) : $super.pau.call(this, signature, verificationMethodId, kid);
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
  protoOf(Companion_35).m4u = function () {
    return $serializer_getInstance_23();
  };
  var Companion_instance_41;
  function Companion_getInstance_37() {
    return Companion_instance_41;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.VerificationMethod', this, 5);
    tmp0_serialDesc.x2b('controller', false);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('publicKeyMultibase', true);
    tmp0_serialDesc.x2b('publicKeyBase58', true);
    tmp0_serialDesc.x2b('type', false);
    this.qau_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).rau = function (encoder, value) {
    var tmp0_desc = this.qau_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.controller);
    tmp1_output.w25(tmp0_desc, 1, value.id);
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.publicKeyMultibase == null)) {
      tmp1_output.a26(tmp0_desc, 2, StringSerializer_getInstance(), value.publicKeyMultibase);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.publicKeyBase58 == null)) {
      tmp1_output.a26(tmp0_desc, 3, StringSerializer_getInstance(), value.publicKeyBase58);
    }
    tmp1_output.w25(tmp0_desc, 4, value.type);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_23).v20 = function (encoder, value) {
    return this.rau(encoder, value instanceof VerificationMethod_5 ? value : THROW_CCE());
  };
  protoOf($serializer_23).w20 = function (decoder) {
    var tmp0_desc = this.qau_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.h24(tmp0_desc);
    if (tmp9_input.x24()) {
      tmp4_local0 = tmp9_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.r24(tmp0_desc, 4);
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
            tmp6_local2 = tmp9_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.r24(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.i24(tmp0_desc);
    return VerificationMethod_init_$Create$_4(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_23).u20 = function () {
    return this.qau_1;
  };
  protoOf($serializer_23).m2c = function () {
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
      throwMissingFieldException(seen0, 19, $serializer_getInstance_23().qau_1);
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
  protoOf(VerificationMethod_5).aa1 = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_5).x6b = function () {
    return this.id;
  };
  protoOf(VerificationMethod_5).sau = function () {
    return this.publicKeyMultibase;
  };
  protoOf(VerificationMethod_5).tau = function () {
    return this.publicKeyBase58;
  };
  protoOf(VerificationMethod_5).za0 = function () {
    return this.type;
  };
  protoOf(VerificationMethod_5).dc = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_5).ec = function () {
    return this.id;
  };
  protoOf(VerificationMethod_5).yp = function () {
    return this.publicKeyMultibase;
  };
  protoOf(VerificationMethod_5).p70 = function () {
    return this.publicKeyBase58;
  };
  protoOf(VerificationMethod_5).w7k = function () {
    return this.type;
  };
  protoOf(VerificationMethod_5).uau = function (controller, id, publicKeyMultibase, publicKeyBase58, type) {
    return new VerificationMethod_5(controller, id, publicKeyMultibase, publicKeyBase58, type);
  };
  protoOf(VerificationMethod_5).copy = function (controller, id, publicKeyMultibase, publicKeyBase58, type, $super) {
    controller = controller === VOID ? this.controller : controller;
    id = id === VOID ? this.id : id;
    publicKeyMultibase = publicKeyMultibase === VOID ? this.publicKeyMultibase : publicKeyMultibase;
    publicKeyBase58 = publicKeyBase58 === VOID ? this.publicKeyBase58 : publicKeyBase58;
    type = type === VOID ? this.type : type;
    return $super === VOID ? this.uau(controller, id, publicKeyMultibase, publicKeyBase58, type) : $super.uau.call(this, controller, id, publicKeyMultibase, publicKeyBase58, type);
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
  protoOf(Companion_36).m4u = function () {
    return $serializer_getInstance_24();
  };
  var Companion_instance_42;
  function Companion_getInstance_38() {
    return Companion_instance_42;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.request.JobCreateRequest', this, 1);
    tmp0_serialDesc.x2b('didDocument', false);
    this.vau_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).wau = function (encoder, value) {
    var tmp0_desc = this.vau_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.y25(tmp0_desc, 0, $serializer_getInstance_29(), value.didDocument);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_24).v20 = function (encoder, value) {
    return this.wau(encoder, value instanceof JobCreateRequest ? value : THROW_CCE());
  };
  protoOf($serializer_24).w20 = function (decoder) {
    var tmp0_desc = this.vau_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.h24(tmp0_desc);
    if (tmp5_input.x24()) {
      tmp4_local0 = tmp5_input.t24(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.t24(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.i24(tmp0_desc);
    return JobCreateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_24).u20 = function () {
    return this.vau_1;
  };
  protoOf($serializer_24).m2c = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_24().vau_1);
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
  protoOf(JobCreateRequest).ka6 = function () {
    return this.didDocument;
  };
  protoOf(JobCreateRequest).dc = function () {
    return this.didDocument;
  };
  protoOf(JobCreateRequest).xau = function (didDocument) {
    return new JobCreateRequest(didDocument);
  };
  protoOf(JobCreateRequest).copy = function (didDocument, $super) {
    didDocument = didDocument === VOID ? this.didDocument : didDocument;
    return $super === VOID ? this.xau(didDocument) : $super.xau.call(this, didDocument);
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
  protoOf(Companion_37).m4u = function () {
    return $serializer_getInstance_25();
  };
  var Companion_instance_43;
  function Companion_getInstance_39() {
    return Companion_instance_43;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.request.JobDeactivateRequest', this, 1);
    tmp0_serialDesc.x2b('did', false);
    this.yau_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).zau = function (encoder, value) {
    var tmp0_desc = this.yau_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.did);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_25).v20 = function (encoder, value) {
    return this.zau(encoder, value instanceof JobDeactivateRequest ? value : THROW_CCE());
  };
  protoOf($serializer_25).w20 = function (decoder) {
    var tmp0_desc = this.yau_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.h24(tmp0_desc);
    if (tmp5_input.x24()) {
      tmp4_local0 = tmp5_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.i24(tmp0_desc);
    return JobDeactivateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_25).u20 = function () {
    return this.yau_1;
  };
  protoOf($serializer_25).m2c = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_25().yau_1);
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
  protoOf(JobDeactivateRequest).ja6 = function () {
    return this.did;
  };
  protoOf(JobDeactivateRequest).dc = function () {
    return this.did;
  };
  protoOf(JobDeactivateRequest).fa3 = function (did) {
    return new JobDeactivateRequest(did);
  };
  protoOf(JobDeactivateRequest).copy = function (did, $super) {
    did = did === VOID ? this.did : did;
    return $super === VOID ? this.fa3(did) : $super.fa3.call(this, did);
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
  protoOf(Companion_38).m4u = function () {
    return $serializer_getInstance_26();
  };
  var Companion_instance_44;
  function Companion_getInstance_40() {
    return Companion_instance_44;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.request.JobSignRequest', this, 2);
    tmp0_serialDesc.x2b('jobId', false);
    tmp0_serialDesc.x2b('secret', false);
    this.aav_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).bav = function (encoder, value) {
    var tmp0_desc = this.aav_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.jobId);
    tmp1_output.y25(tmp0_desc, 1, $serializer_getInstance_21(), value.secret);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_26).v20 = function (encoder, value) {
    return this.bav(encoder, value instanceof JobSignRequest ? value : THROW_CCE());
  };
  protoOf($serializer_26).w20 = function (decoder) {
    var tmp0_desc = this.aav_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, $serializer_getInstance_21(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, $serializer_getInstance_21(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return JobSignRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_26).u20 = function () {
    return this.aav_1;
  };
  protoOf($serializer_26).m2c = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_26().aav_1);
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
  protoOf(JobSignRequest).cav = function () {
    return this.jobId;
  };
  protoOf(JobSignRequest).uat = function () {
    return this.secret;
  };
  protoOf(JobSignRequest).dc = function () {
    return this.jobId;
  };
  protoOf(JobSignRequest).ec = function () {
    return this.secret;
  };
  protoOf(JobSignRequest).dav = function (jobId, secret) {
    return new JobSignRequest(jobId, secret);
  };
  protoOf(JobSignRequest).copy = function (jobId, secret, $super) {
    jobId = jobId === VOID ? this.jobId : jobId;
    secret = secret === VOID ? this.secret : secret;
    return $super === VOID ? this.dav(jobId, secret) : $super.dav.call(this, jobId, secret);
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
    return Companion_getInstance_32().m4u();
  }
  function Companion_39() {
    Companion_instance_45 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.eav_1 = [lazy(tmp_0, JobActionResponse$Companion$$childSerializers$_anonymous__c2i9bq), null];
  }
  protoOf(Companion_39).m4u = function () {
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
    tmp0_serialDesc.x2b('didState', false);
    tmp0_serialDesc.x2b('jobId', true);
    this.fav_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).gav = function (encoder, value) {
    var tmp0_desc = this.fav_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_41().eav_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.didState);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.jobId == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value.jobId);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_27).v20 = function (encoder, value) {
    return this.gav(encoder, value instanceof JobActionResponse ? value : THROW_CCE());
  };
  protoOf($serializer_27).w20 = function (decoder) {
    var tmp0_desc = this.fav_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_41().eav_1;
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, tmp7_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return JobActionResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_27).u20 = function () {
    return this.fav_1;
  };
  protoOf($serializer_27).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_41().eav_1[0].b1(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function JobActionResponse_init_$Init$(seen0, didState, jobId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_27().fav_1);
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
  protoOf(JobActionResponse).hav = function () {
    return this.didState;
  };
  protoOf(JobActionResponse).cav = function () {
    return this.jobId;
  };
  protoOf(JobActionResponse).dc = function () {
    return this.didState;
  };
  protoOf(JobActionResponse).ec = function () {
    return this.jobId;
  };
  protoOf(JobActionResponse).iav = function (didState, jobId) {
    return new JobActionResponse(didState, jobId);
  };
  protoOf(JobActionResponse).copy = function (didState, jobId, $super) {
    didState = didState === VOID ? this.didState : didState;
    jobId = jobId === VOID ? this.jobId : jobId;
    return $super === VOID ? this.iav(didState, jobId) : $super.iav.call(this, didState, jobId);
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
  protoOf(Companion_40).m4u = function () {
    return $serializer_getInstance_28();
  };
  var Companion_instance_46;
  function Companion_getInstance_42() {
    return Companion_instance_46;
  }
  function $serializer_28() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.CheqdKey', this, 3);
    tmp0_serialDesc.x2b('publicKeyHex', false);
    tmp0_serialDesc.x2b('verificationMethodId', true);
    tmp0_serialDesc.x2b('keyId', true);
    this.jav_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).kav = function (encoder, value) {
    var tmp0_desc = this.jav_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.publicKeyHex);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.verificationMethodId == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value.verificationMethodId);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.keyId == null)) {
      tmp1_output.a26(tmp0_desc, 2, StringSerializer_getInstance(), value.keyId);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_28).v20 = function (encoder, value) {
    return this.kav(encoder, value instanceof CheqdKey ? value : THROW_CCE());
  };
  protoOf($serializer_28).w20 = function (decoder) {
    var tmp0_desc = this.jav_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
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
            tmp5_local1 = tmp7_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i24(tmp0_desc);
    return CheqdKey_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_28).u20 = function () {
    return this.jav_1;
  };
  protoOf($serializer_28).m2c = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_28().jav_1);
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
  protoOf(CheqdKey).lav = function () {
    return this.publicKeyHex;
  };
  protoOf(CheqdKey).oau = function () {
    return this.verificationMethodId;
  };
  protoOf(CheqdKey).mav = function () {
    return this.keyId;
  };
  protoOf(CheqdKey).dc = function () {
    return this.publicKeyHex;
  };
  protoOf(CheqdKey).ec = function () {
    return this.verificationMethodId;
  };
  protoOf(CheqdKey).yp = function () {
    return this.keyId;
  };
  protoOf(CheqdKey).pau = function (publicKeyHex, verificationMethodId, keyId) {
    return new CheqdKey(publicKeyHex, verificationMethodId, keyId);
  };
  protoOf(CheqdKey).copy = function (publicKeyHex, verificationMethodId, keyId, $super) {
    publicKeyHex = publicKeyHex === VOID ? this.publicKeyHex : publicKeyHex;
    verificationMethodId = verificationMethodId === VOID ? this.verificationMethodId : verificationMethodId;
    keyId = keyId === VOID ? this.keyId : keyId;
    return $super === VOID ? this.pau(publicKeyHex, verificationMethodId, keyId) : $super.pau.call(this, publicKeyHex, verificationMethodId, keyId);
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
    tmp.nav_1 = [tmp_1, tmp_3, null, lazy(tmp_4, DidDocObject$Companion$$childSerializers$_anonymous__xn5fou_1)];
  }
  protoOf(Companion_41).m4u = function () {
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
    tmp0_serialDesc.x2b('authentication', false);
    tmp0_serialDesc.x2b('controller', false);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('verificationMethod', false);
    this.oav_1 = tmp0_serialDesc;
  }
  protoOf($serializer_29).pav = function (encoder, value) {
    var tmp0_desc = this.oav_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_43().nav_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.authentication);
    tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.controller);
    tmp1_output.w25(tmp0_desc, 2, value.id);
    tmp1_output.y25(tmp0_desc, 3, tmp2_cached[3].b1(), value.verificationMethod);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_29).v20 = function (encoder, value) {
    return this.pav(encoder, value instanceof DidDocObject ? value : THROW_CCE());
  };
  protoOf($serializer_29).w20 = function (decoder) {
    var tmp0_desc = this.oav_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    var tmp9_cached = Companion_getInstance_43().nav_1;
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.t24(tmp0_desc, 0, tmp9_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.t24(tmp0_desc, 1, tmp9_cached[1].b1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, tmp9_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.t24(tmp0_desc, 0, tmp9_cached[0].b1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.t24(tmp0_desc, 1, tmp9_cached[1].b1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.t24(tmp0_desc, 3, tmp9_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return DidDocObject_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_29).u20 = function () {
    return this.oav_1;
  };
  protoOf($serializer_29).m2c = function () {
    var tmp0_cached = Companion_getInstance_43().nav_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), tmp0_cached[1].b1(), StringSerializer_getInstance(), tmp0_cached[3].b1()];
  };
  var $serializer_instance_29;
  function $serializer_getInstance_29() {
    if ($serializer_instance_29 == null)
      new $serializer_29();
    return $serializer_instance_29;
  }
  function DidDocObject_init_$Init$(seen0, authentication, controller, id, verificationMethod, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_29().oav_1);
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
  protoOf(DidDocObject).ia1 = function () {
    return this.authentication;
  };
  protoOf(DidDocObject).aa1 = function () {
    return this.controller;
  };
  protoOf(DidDocObject).x6b = function () {
    return this.id;
  };
  protoOf(DidDocObject).ga1 = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocObject).dc = function () {
    return this.authentication;
  };
  protoOf(DidDocObject).ec = function () {
    return this.controller;
  };
  protoOf(DidDocObject).yp = function () {
    return this.id;
  };
  protoOf(DidDocObject).p70 = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocObject).aau = function (authentication, controller, id, verificationMethod) {
    return new DidDocObject(authentication, controller, id, verificationMethod);
  };
  protoOf(DidDocObject).copy = function (authentication, controller, id, verificationMethod, $super) {
    authentication = authentication === VOID ? this.authentication : authentication;
    controller = controller === VOID ? this.controller : controller;
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    return $super === VOID ? this.aau(authentication, controller, id, verificationMethod) : $super.aau.call(this, authentication, controller, id, verificationMethod);
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
  protoOf(Companion_42).m4u = function () {
    return $serializer_getInstance_30();
  };
  var Companion_instance_48;
  function Companion_getInstance_44() {
    return Companion_instance_48;
  }
  function $serializer_30() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidGetResponse', this, 2);
    tmp0_serialDesc.x2b('didDoc', false);
    tmp0_serialDesc.x2b('key', false);
    this.qav_1 = tmp0_serialDesc;
  }
  protoOf($serializer_30).rav = function (encoder, value) {
    var tmp0_desc = this.qav_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.y25(tmp0_desc, 0, $serializer_getInstance_29(), value.didDoc);
    tmp1_output.y25(tmp0_desc, 1, $serializer_getInstance_28(), value.key);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_30).v20 = function (encoder, value) {
    return this.rav(encoder, value instanceof DidGetResponse ? value : THROW_CCE());
  };
  protoOf($serializer_30).w20 = function (decoder) {
    var tmp0_desc = this.qav_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, $serializer_getInstance_28(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, $serializer_getInstance_28(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return DidGetResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_30).u20 = function () {
    return this.qav_1;
  };
  protoOf($serializer_30).m2c = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_30().qav_1);
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
  protoOf(DidGetResponse).sav = function () {
    return this.didDoc;
  };
  protoOf(DidGetResponse).a1 = function () {
    return this.key;
  };
  protoOf(DidGetResponse).dc = function () {
    return this.didDoc;
  };
  protoOf(DidGetResponse).ec = function () {
    return this.key;
  };
  protoOf(DidGetResponse).tav = function (didDoc, key) {
    return new DidGetResponse(didDoc, key);
  };
  protoOf(DidGetResponse).copy = function (didDoc, key, $super) {
    didDoc = didDoc === VOID ? this.didDoc : didDoc;
    key = key === VOID ? this.key : key;
    return $super === VOID ? this.tav(didDoc, key) : $super.tav.call(this, didDoc, key);
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
    this.caw_1 = this$0;
    this.daw_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkRegistrar$registerAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidJwkRegistrar$registerAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidJwkRegistrar$registerAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.caw_1.w9u(this.daw_1, this);
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
  protoOf(DidJwkRegistrar$registerAsync$slambda).ja = function (completion) {
    return new DidJwkRegistrar$registerAsync$slambda(this.caw_1, this.daw_1, completion);
  };
  function DidJwkRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidJwkRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidJwkRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.maw_1 = this$0;
    this.naw_1 = $key;
    this.oaw_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkRegistrar$registerByKeyAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidJwkRegistrar$registerByKeyAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidJwkRegistrar$registerByKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.maw_1.ka8(this.naw_1, this.oaw_1, this);
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
  protoOf(DidJwkRegistrar$registerByKeyAsync$slambda).ja = function (completion) {
    return new DidJwkRegistrar$registerByKeyAsync$slambda(this.maw_1, this.naw_1, this.oaw_1, completion);
  };
  function DidJwkRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidJwkRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$19(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xaw_1 = _this__u8e3s4;
    this.yaw_1 = options;
  }
  protoOf($registerCOROUTINE$19).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            var this_0 = this.yaw_1;
            var tmp0_safe_receiver = get_jsonObject(this_0.config).af('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('keyType');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
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
                    if (equals(element.s2_1, tmp4_safe_receiver, true)) {
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

            tmp_0.zaw_1 = tmp_1;
            if (this.zaw_1 == null) {
              this.aax_1 = null;
              this.n9_1 = 3;
              continue $sm;
            } else {
              var tmp_4 = this;
              tmp_4.bax_1 = this.zaw_1;
              this.cax_1 = this.bax_1;
              var tmp_5 = this;
              tmp_5.dax_1 = this.cax_1;
              this.eax_1 = this.dax_1;
              this.n9_1 = 1;
              suspendResult = Companion_instance_4.generate$default(this.eax_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.fax_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.xaw_1.ka8(this.fax_1, this.yaw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.aax_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var tmp1_elvis_lhs = this.aax_1;
            var tmp_6;
            if (tmp1_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Option "keyType" not found.');
            } else {
              tmp_6 = tmp1_elvis_lhs;
            }

            return tmp_6;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerCOROUTINE$19)['<set-state>'] = protoOf($registerCOROUTINE$19).u9;
  protoOf($registerCOROUTINE$19)['<get-state>'] = protoOf($registerCOROUTINE$19).v9;
  protoOf($registerCOROUTINE$19)['<set-exceptionState>'] = protoOf($registerCOROUTINE$19).w9;
  protoOf($registerCOROUTINE$19)['<get-exceptionState>'] = protoOf($registerCOROUTINE$19).x9;
  protoOf($registerCOROUTINE$19)['<set-result>'] = protoOf($registerCOROUTINE$19).y9;
  protoOf($registerCOROUTINE$19)['<get-result>'] = protoOf($registerCOROUTINE$19).z9;
  protoOf($registerCOROUTINE$19)['<set-exception>'] = protoOf($registerCOROUTINE$19).aa;
  protoOf($registerCOROUTINE$19)['<get-exception>'] = protoOf($registerCOROUTINE$19).ba;
  protoOf($registerCOROUTINE$19)['<set-finallyPath>'] = protoOf($registerCOROUTINE$19).ca;
  protoOf($registerCOROUTINE$19)['<get-finallyPath>'] = protoOf($registerCOROUTINE$19).da;
  protoOf($registerCOROUTINE$19)['<get-context>'] = protoOf($registerCOROUTINE$19).t9;
  function $registerByKeyCOROUTINE$20(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oax_1 = _this__u8e3s4;
    this.pax_1 = key;
    this.qax_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$20).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.rax_1 = Base64Utils_getInstance();
            this.n9_1 = 1;
            suspendResult = this.pax_1.y6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.sax_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.sax_1.j6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tax_1 = suspendResult;
            this.uax_1 = toByteArray(this.tax_1);
            this.vax_1 = this.rax_1.encodeToBase64Url(this.uax_1);
            this.wax_1 = 'did:jwk:' + this.vax_1;
            this.n9_1 = 3;
            suspendResult = this.pax_1.y6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.xax_1 = suspendResult;
            this.n9_1 = 4;
            suspendResult = this.xax_1.u6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_2(this.wax_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var didDocument = new DidDocument(ARGUMENT_1);
            return new DidResult(this.wax_1, didDocument);
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
  protoOf($registerByKeyCOROUTINE$20)['<set-state>'] = protoOf($registerByKeyCOROUTINE$20).u9;
  protoOf($registerByKeyCOROUTINE$20)['<get-state>'] = protoOf($registerByKeyCOROUTINE$20).v9;
  protoOf($registerByKeyCOROUTINE$20)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$20).w9;
  protoOf($registerByKeyCOROUTINE$20)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$20).x9;
  protoOf($registerByKeyCOROUTINE$20)['<set-result>'] = protoOf($registerByKeyCOROUTINE$20).y9;
  protoOf($registerByKeyCOROUTINE$20)['<get-result>'] = protoOf($registerByKeyCOROUTINE$20).z9;
  protoOf($registerByKeyCOROUTINE$20)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$20).aa;
  protoOf($registerByKeyCOROUTINE$20)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$20).ba;
  protoOf($registerByKeyCOROUTINE$20)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$20).ca;
  protoOf($registerByKeyCOROUTINE$20)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$20).da;
  protoOf($registerByKeyCOROUTINE$20)['<get-context>'] = protoOf($registerByKeyCOROUTINE$20).t9;
  function DidJwkRegistrar() {
    LocalRegistrarMethod.call(this, 'jwk');
  }
  protoOf(DidJwkRegistrar).w9u = function (options, $completion) {
    var tmp = new $registerCOROUTINE$19(this, options, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidJwkRegistrar).ka8 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$20(this, key, options, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidJwkRegistrar).na0 = function (options) {
    var tmp = DidJwkRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidJwkRegistrar).ual = function (key, options) {
    var tmp = DidJwkRegistrar$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function getIdentifierComponents($this, key, options, $completion) {
    var tmp = new $getIdentifierComponentsCOROUTINE$23($this, key, options, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function createDid_0($this, identifier, publicKeyJwk) {
    // Inline function 'kotlin.let' call
    var it = 'did:key:' + identifier;
    return new DidResult(it, new DidDocument(secondaryConstructor_3(it, identifier, publicKeyJwk).toMap()));
  }
  function DidKeyRegistrar$registerAsync$slambda(this$0, $options, resultContinuation) {
    this.daz_1 = this$0;
    this.eaz_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyRegistrar$registerAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidKeyRegistrar$registerAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidKeyRegistrar$registerAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.daz_1.w9u(this.eaz_1, this);
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
  protoOf(DidKeyRegistrar$registerAsync$slambda).ja = function (completion) {
    return new DidKeyRegistrar$registerAsync$slambda(this.daz_1, this.eaz_1, completion);
  };
  function DidKeyRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidKeyRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidKeyRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.naz_1 = this$0;
    this.oaz_1 = $key;
    this.paz_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyRegistrar$registerByKeyAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidKeyRegistrar$registerByKeyAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidKeyRegistrar$registerByKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.naz_1.ka8(this.oaz_1, this.paz_1, this);
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
  protoOf(DidKeyRegistrar$registerByKeyAsync$slambda).ja = function (completion) {
    return new DidKeyRegistrar$registerByKeyAsync$slambda(this.naz_1, this.oaz_1, this.paz_1, completion);
  };
  function DidKeyRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidKeyRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$21(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yaz_1 = _this__u8e3s4;
    this.zaz_1 = options;
  }
  protoOf($registerCOROUTINE$21).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            var this_0 = this.zaz_1;
            var tmp0_safe_receiver = get_jsonObject(this_0.config).af('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('keyType');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
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
                    if (equals(element.s2_1, tmp4_safe_receiver, true)) {
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

            tmp_0.ab0_1 = tmp_1;
            if (this.ab0_1 == null) {
              this.bb0_1 = null;
              this.n9_1 = 3;
              continue $sm;
            } else {
              var tmp_4 = this;
              tmp_4.cb0_1 = this.ab0_1;
              this.db0_1 = this.cb0_1;
              var tmp_5 = this;
              tmp_5.eb0_1 = this.db0_1;
              this.fb0_1 = this.eb0_1;
              this.n9_1 = 1;
              suspendResult = Companion_instance_4.generate$default(this.fb0_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.gb0_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.yaz_1.ka8(this.gb0_1, this.zaz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.bb0_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var tmp1_elvis_lhs = this.bb0_1;
            var tmp_6;
            if (tmp1_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Option "keyType" not found.');
            } else {
              tmp_6 = tmp1_elvis_lhs;
            }

            return tmp_6;
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerCOROUTINE$21)['<set-state>'] = protoOf($registerCOROUTINE$21).u9;
  protoOf($registerCOROUTINE$21)['<get-state>'] = protoOf($registerCOROUTINE$21).v9;
  protoOf($registerCOROUTINE$21)['<set-exceptionState>'] = protoOf($registerCOROUTINE$21).w9;
  protoOf($registerCOROUTINE$21)['<get-exceptionState>'] = protoOf($registerCOROUTINE$21).x9;
  protoOf($registerCOROUTINE$21)['<set-result>'] = protoOf($registerCOROUTINE$21).y9;
  protoOf($registerCOROUTINE$21)['<get-result>'] = protoOf($registerCOROUTINE$21).z9;
  protoOf($registerCOROUTINE$21)['<set-exception>'] = protoOf($registerCOROUTINE$21).aa;
  protoOf($registerCOROUTINE$21)['<get-exception>'] = protoOf($registerCOROUTINE$21).ba;
  protoOf($registerCOROUTINE$21)['<set-finallyPath>'] = protoOf($registerCOROUTINE$21).ca;
  protoOf($registerCOROUTINE$21)['<get-finallyPath>'] = protoOf($registerCOROUTINE$21).da;
  protoOf($registerCOROUTINE$21)['<get-context>'] = protoOf($registerCOROUTINE$21).t9;
  function $registerByKeyCOROUTINE$22(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pb0_1 = _this__u8e3s4;
    this.qb0_1 = key;
    this.rb0_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$22).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            tmp_0.sb0_1 = this.rb0_1;
            this.tb0_1 = this.sb0_1;
            var tmp_1 = this;
            tmp_1.ub0_1 = this.tb0_1;
            this.vb0_1 = this.ub0_1;
            this.n9_1 = 1;
            suspendResult = this.qb0_1.y6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.wb0_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = getIdentifierComponents(this.pb0_1, this.wb0_1, this.vb0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.xb0_1 = suspendResult;
            this.yb0_1 = MultiBaseUtils_instance.t9c(this.xb0_1.ab1_1, this.xb0_1.zb0_1);
            this.n9_1 = 3;
            suspendResult = this.wb0_1.u6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            return createDid_0(this.pb0_1, this.yb0_1, ARGUMENT);
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerByKeyCOROUTINE$22)['<set-state>'] = protoOf($registerByKeyCOROUTINE$22).u9;
  protoOf($registerByKeyCOROUTINE$22)['<get-state>'] = protoOf($registerByKeyCOROUTINE$22).v9;
  protoOf($registerByKeyCOROUTINE$22)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$22).w9;
  protoOf($registerByKeyCOROUTINE$22)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$22).x9;
  protoOf($registerByKeyCOROUTINE$22)['<set-result>'] = protoOf($registerByKeyCOROUTINE$22).y9;
  protoOf($registerByKeyCOROUTINE$22)['<get-result>'] = protoOf($registerByKeyCOROUTINE$22).z9;
  protoOf($registerByKeyCOROUTINE$22)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$22).aa;
  protoOf($registerByKeyCOROUTINE$22)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$22).ba;
  protoOf($registerByKeyCOROUTINE$22)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$22).ca;
  protoOf($registerByKeyCOROUTINE$22)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$22).da;
  protoOf($registerByKeyCOROUTINE$22)['<get-context>'] = protoOf($registerByKeyCOROUTINE$22).t9;
  function $getIdentifierComponentsCOROUTINE$23(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gay_1 = _this__u8e3s4;
    this.hay_1 = key;
    this.iay_1 = options;
  }
  protoOf($getIdentifierComponentsCOROUTINE$23).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            var tmp0 = this.iay_1;
            var name = 'useJwkJcsPub';
            var tmp0_safe_receiver = get_jsonObject(tmp0.config).af('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af(name);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
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
                    if (equals(element.s2_1, tmp4_safe_receiver, true)) {
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

            tmp_0.jay_1 = tmp_4;
            if (this.jay_1 == null) {
              this.kay_1 = null;
              this.n9_1 = 2;
              continue $sm;
            } else {
              var tmp_6 = this;
              tmp_6.lay_1 = this.jay_1;
              this.may_1 = this.lay_1;
              var tmp_7 = this;
              tmp_7.nay_1 = this.may_1;
              this.oay_1 = this.nay_1;
              this.pay_1 = JsonCanonicalization_instance;
              this.n9_1 = 1;
              suspendResult = JsonCanonicalizationUtils_instance.t9b(this.hay_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.qay_1 = suspendResult;
            this.ray_1 = this.pay_1.getCanonicalBytes(this.qay_1);
            this.kay_1 = new IdentifierComponents(_UInt___init__impl__l7qpdl(60241), this.ray_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.say_1 = this.kay_1;
            if (this.say_1 == null) {
              this.uay_1 = MultiCodecUtils_getInstance().getMultiCodecKeyCode(this.hay_1.keyType);
              this.n9_1 = 3;
              suspendResult = this.hay_1.s6q(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.tay_1 = this.say_1;
              this.n9_1 = 4;
              continue $sm;
            }

          case 3:
            var ARGUMENT = suspendResult;
            this.tay_1 = new IdentifierComponents(this.uay_1, ARGUMENT);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return this.tay_1;
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
  function DidKeyRegistrar() {
    LocalRegistrarMethod.call(this, 'key');
  }
  protoOf(DidKeyRegistrar).w9u = function (options, $completion) {
    var tmp = new $registerCOROUTINE$21(this, options, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidKeyRegistrar).ka8 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$22(this, key, options, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidKeyRegistrar).na0 = function (options) {
    var tmp = DidKeyRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidKeyRegistrar).ual = function (key, options) {
    var tmp = DidKeyRegistrar$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function IdentifierComponents(multiCodecKeyCode, pubKeyBytes) {
    this.zb0_1 = multiCodecKeyCode;
    this.ab1_1 = pubKeyBytes;
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
    if (!(this.zb0_1 === other.zb0_1))
      return false;
    if (!contentEquals(this.ab1_1, other.ab1_1))
      return false;
    return true;
  };
  protoOf(IdentifierComponents).hashCode = function () {
    var result = UInt__hashCode_impl_z2mhuw(this.zb0_1);
    result = imul(31, result) + contentHashCode(this.ab1_1) | 0;
    return result;
  };
  protoOf(IdentifierComponents).toString = function () {
    return 'IdentifierComponents(multiCodecKeyCode=' + new UInt(this.zb0_1) + ', pubKeyBytes=' + toString_0(this.ab1_1) + ')';
  };
  function registerByDidDocConfig($this, options, didDocConfig, $completion) {
    var tmp = new $registerByDidDocConfigCOROUTINE$26($this, options, didDocConfig, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function getUrlEncodedDomainOrThrow($this, options) {
    // Inline function 'id.walt.did.dids.registrar.dids.DidCreateOptions.get' call
    var tmp0_safe_receiver = get_jsonObject(options.config).af('config');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('domain');
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
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
            if (equals(element.s2_1, tmp4_safe_receiver, true)) {
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
      tmp_4 = UrlEncoderUtil_getInstance().b9u(tmp1_safe_receiver_0);
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
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
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
            if (equals(element.s2_1, tmp4_safe_receiver, true)) {
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
      var tmp_5 = split(ExtensionMethods_instance.ensurePrefix(replace(tmp1_safe_receiver_0, '[random-uuid]', UuidUtils_instance.e9d()), '/'), ['/']);
      tmp_4 = joinToString(tmp_5, ':', VOID, VOID, VOID, VOID, DidWebRegistrar$getPath$lambda);
    }
    var tmp2_elvis_lhs = tmp_4;
    return tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  function getDid($this, domain, path) {
    return 'did:web:' + domain + path;
  }
  function DidWebRegistrar$getPath$lambda(part) {
    return UrlEncoderUtil_getInstance().b9u(part);
  }
  function DidWebRegistrar$registerAsync$slambda(this$0, $options, resultContinuation) {
    this.xb1_1 = this$0;
    this.yb1_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebRegistrar$registerAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidWebRegistrar$registerAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidWebRegistrar$registerAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.xb1_1.w9u(this.yb1_1, this);
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
  protoOf(DidWebRegistrar$registerAsync$slambda).ja = function (completion) {
    return new DidWebRegistrar$registerAsync$slambda(this.xb1_1, this.yb1_1, completion);
  };
  function DidWebRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidWebRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.hb2_1 = this$0;
    this.ib2_1 = $key;
    this.jb2_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebRegistrar$registerByKeyAsync$slambda).v9u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidWebRegistrar$registerByKeyAsync$slambda).ac = function ($completion) {
    return this.v9u($completion);
  };
  protoOf(DidWebRegistrar$registerByKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.hb2_1.ka8(this.ib2_1, this.jb2_1, this);
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
  protoOf(DidWebRegistrar$registerByKeyAsync$slambda).ja = function (completion) {
    return new DidWebRegistrar$registerByKeyAsync$slambda(this.hb2_1, this.ib2_1, this.jb2_1, completion);
  };
  function DidWebRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidWebRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.v9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$24(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sb2_1 = _this__u8e3s4;
    this.tb2_1 = options;
  }
  protoOf($registerCOROUTINE$24).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            this.ub2_1 = this.tb2_1.didDocConfig;
            if (this.ub2_1 == null) {
              this.vb2_1 = null;
              this.n9_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.wb2_1 = this.ub2_1;
              this.xb2_1 = this.wb2_1;
              var tmp_1 = this;
              tmp_1.yb2_1 = this.xb2_1;
              this.zb2_1 = this.yb2_1;
              this.n9_1 = 1;
              suspendResult = registerByDidDocConfig(this.sb2_1, this.tb2_1, this.tb2_1.didDocConfig, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.vb2_1 = suspendResult;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.ab3_1 = this.vb2_1;
            if (this.ab3_1 == null) {
              var tmp_2 = this;
              var this_0 = this.tb2_1;
              var tmp0_safe_receiver = get_jsonObject(this_0.config).af('config');
              var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
              var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('keyType');
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
              var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
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
                      if (equals(element.s2_1, tmp4_safe_receiver, true)) {
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
              tmp_2.cb3_1 = tmp_3;
              if (this.cb3_1 == null) {
                this.db3_1 = null;
                this.n9_1 = 5;
                continue $sm;
              } else {
                var tmp_6 = this;
                tmp_6.eb3_1 = this.cb3_1;
                this.fb3_1 = this.eb3_1;
                var tmp_7 = this;
                tmp_7.gb3_1 = this.fb3_1;
                this.hb3_1 = this.gb3_1;
                this.n9_1 = 3;
                suspendResult = Companion_instance_4.generate$default(this.hb3_1, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.bb3_1 = this.ab3_1;
              this.n9_1 = 6;
              continue $sm;
            }

          case 3:
            this.ib3_1 = suspendResult;
            this.n9_1 = 4;
            suspendResult = this.sb2_1.ka8(this.ib3_1, this.tb2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.db3_1 = suspendResult;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.bb3_1 = this.db3_1;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            var tmp3_elvis_lhs = this.bb3_1;
            var tmp_8;
            if (tmp3_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Option "keyType" not found.');
            } else {
              tmp_8 = tmp3_elvis_lhs;
            }

            return tmp_8;
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
  protoOf($registerCOROUTINE$24)['<set-state>'] = protoOf($registerCOROUTINE$24).u9;
  protoOf($registerCOROUTINE$24)['<get-state>'] = protoOf($registerCOROUTINE$24).v9;
  protoOf($registerCOROUTINE$24)['<set-exceptionState>'] = protoOf($registerCOROUTINE$24).w9;
  protoOf($registerCOROUTINE$24)['<get-exceptionState>'] = protoOf($registerCOROUTINE$24).x9;
  protoOf($registerCOROUTINE$24)['<set-result>'] = protoOf($registerCOROUTINE$24).y9;
  protoOf($registerCOROUTINE$24)['<get-result>'] = protoOf($registerCOROUTINE$24).z9;
  protoOf($registerCOROUTINE$24)['<set-exception>'] = protoOf($registerCOROUTINE$24).aa;
  protoOf($registerCOROUTINE$24)['<get-exception>'] = protoOf($registerCOROUTINE$24).ba;
  protoOf($registerCOROUTINE$24)['<set-finallyPath>'] = protoOf($registerCOROUTINE$24).ca;
  protoOf($registerCOROUTINE$24)['<get-finallyPath>'] = protoOf($registerCOROUTINE$24).da;
  protoOf($registerCOROUTINE$24)['<get-context>'] = protoOf($registerCOROUTINE$24).t9;
  function $registerByKeyCOROUTINE$25(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rb3_1 = _this__u8e3s4;
    this.sb3_1 = key;
    this.tb3_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$25).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.ub3_1 = getUrlEncodedDomainOrThrow(this.rb3_1, this.tb3_1);
            this.vb3_1 = getPath(this.rb3_1, this.tb3_1);
            this.wb3_1 = getDid(this.rb3_1, this.ub3_1, this.vb3_1);
            this.n9_1 = 1;
            suspendResult = this.sb3_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xb3_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.sb3_1.y6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.yb3_1 = suspendResult;
            this.n9_1 = 3;
            suspendResult = this.yb3_1.u6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_4(this.wb3_1, this.xb3_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var ARGUMENT_2 = new DidDocument(ARGUMENT_1);
            return new DidResult(this.wb3_1, ARGUMENT_2);
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($registerByKeyCOROUTINE$25)['<set-state>'] = protoOf($registerByKeyCOROUTINE$25).u9;
  protoOf($registerByKeyCOROUTINE$25)['<get-state>'] = protoOf($registerByKeyCOROUTINE$25).v9;
  protoOf($registerByKeyCOROUTINE$25)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$25).w9;
  protoOf($registerByKeyCOROUTINE$25)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$25).x9;
  protoOf($registerByKeyCOROUTINE$25)['<set-result>'] = protoOf($registerByKeyCOROUTINE$25).y9;
  protoOf($registerByKeyCOROUTINE$25)['<get-result>'] = protoOf($registerByKeyCOROUTINE$25).z9;
  protoOf($registerByKeyCOROUTINE$25)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$25).aa;
  protoOf($registerByKeyCOROUTINE$25)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$25).ba;
  protoOf($registerByKeyCOROUTINE$25)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$25).ca;
  protoOf($registerByKeyCOROUTINE$25)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$25).da;
  protoOf($registerByKeyCOROUTINE$25)['<get-context>'] = protoOf($registerByKeyCOROUTINE$25).t9;
  function $registerByDidDocConfigCOROUTINE$26(_this__u8e3s4, options, didDocConfig, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jb1_1 = _this__u8e3s4;
    this.kb1_1 = options;
    this.lb1_1 = didDocConfig;
  }
  protoOf($registerByDidDocConfigCOROUTINE$26).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.mb1_1 = getUrlEncodedDomainOrThrow(this.jb1_1, this.kb1_1);
            this.nb1_1 = getPath(this.jb1_1, this.kb1_1);
            this.ob1_1 = getDid(this.jb1_1, this.mb1_1, this.nb1_1);
            this.n9_1 = 1;
            suspendResult = this.lb1_1.vaj(this.ob1_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new DidResult(this.ob1_1, ARGUMENT);
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
  function DidWebRegistrar() {
    LocalRegistrarMethod.call(this, 'web');
  }
  protoOf(DidWebRegistrar).w9u = function (options, $completion) {
    var tmp = new $registerCOROUTINE$24(this, options, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidWebRegistrar).ka8 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$25(this, key, options, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(DidWebRegistrar).na0 = function (options) {
    var tmp = DidWebRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebRegistrar).ual = function (key, options) {
    var tmp = DidWebRegistrar$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.hb4_1 = this$0;
    this.ib4_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$resolveAsync$slambda).m9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$resolveAsync$slambda).ac = function ($completion) {
    return this.m9w($completion);
  };
  protoOf(DidResolver$resolveAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.hb4_1.n9w(this.ib4_1, this);
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
  protoOf(DidResolver$resolveAsync$slambda).ja = function (completion) {
    return new DidResolver$resolveAsync$slambda(this.hb4_1, this.ib4_1, completion);
  };
  function DidResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.m9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.rb4_1 = this$0;
    this.sb4_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$resolveToKeysAsync$slambda).x9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$resolveToKeysAsync$slambda).ac = function ($completion) {
    return this.x9w($completion);
  };
  protoOf(DidResolver$resolveToKeysAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.rb4_1.y9w(this.sb4_1, this);
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
  protoOf(DidResolver$resolveToKeysAsync$slambda).ja = function (completion) {
    return new DidResolver$resolveToKeysAsync$slambda(this.rb4_1, this.sb4_1, completion);
  };
  function DidResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.bb5_1 = this$0;
    this.cb5_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$resolveToKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$resolveToKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(DidResolver$resolveToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.bb5_1.r9x(this.cb5_1, this);
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
  protoOf(DidResolver$resolveToKeyAsync$slambda).ja = function (completion) {
    return new DidResolver$resolveToKeyAsync$slambda(this.bb5_1, this.cb5_1, completion);
  };
  function DidResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.lb5_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$getSupportedMethodsAsync$slambda).xa4 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$getSupportedMethodsAsync$slambda).ac = function ($completion) {
    return this.xa4($completion);
  };
  protoOf(DidResolver$getSupportedMethodsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.lb5_1.b9z(this);
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
  protoOf(DidResolver$getSupportedMethodsAsync$slambda).ja = function (completion) {
    return new DidResolver$getSupportedMethodsAsync$slambda(this.lb5_1, completion);
  };
  function DidResolver$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa4($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver() {
  }
  function DidResolverRegistrations() {
  }
  protoOf(DidResolverRegistrations).mb5 = function (uniresolverUrl) {
    var tmp = new LocalResolver();
    return setOf_0([tmp, new UniresolverResolver(uniresolverUrl == null ? 'https://dev.uniresolver.io/1.0' : uniresolverUrl)]);
  };
  protoOf(DidResolverRegistrations).curatedDidResolvers = function (uniresolverUrl, $super) {
    uniresolverUrl = uniresolverUrl === VOID ? null : uniresolverUrl;
    return $super === VOID ? this.mb5(uniresolverUrl) : $super.mb5.call(this, uniresolverUrl);
  };
  var DidResolverRegistrations_instance;
  function DidResolverRegistrations_getInstance() {
    return DidResolverRegistrations_instance;
  }
  function getResolverForDid_0($this, did) {
    var method = DidUtils_getInstance().methodFromDid(did);
    var tmp0_elvis_lhs = $this.pb5_1.m2(method);
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
    $this$HttpClient.p3l(tmp, LocalResolver$http$lambda$lambda);
    return Unit_instance;
  }
  function LocalResolver$http$lambda$lambda($this$install) {
    json($this$install, Companion_getInstance_46().json);
    return Unit_instance;
  }
  function LocalResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.yb5_1 = this$0;
    this.zb5_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$resolveAsync$slambda).m9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$resolveAsync$slambda).ac = function ($completion) {
    return this.m9w($completion);
  };
  protoOf(LocalResolver$resolveAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.yb5_1.n9w(this.zb5_1, this);
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
  protoOf(LocalResolver$resolveAsync$slambda).ja = function (completion) {
    return new LocalResolver$resolveAsync$slambda(this.yb5_1, this.zb5_1, completion);
  };
  function LocalResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.m9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.ib6_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$getSupportedMethodsAsync$slambda).xa4 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$getSupportedMethodsAsync$slambda).ac = function ($completion) {
    return this.xa4($completion);
  };
  protoOf(LocalResolver$getSupportedMethodsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.ib6_1.b9z(this);
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
  protoOf(LocalResolver$getSupportedMethodsAsync$slambda).ja = function (completion) {
    return new LocalResolver$getSupportedMethodsAsync$slambda(this.ib6_1, completion);
  };
  function LocalResolver$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa4($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.rb6_1 = this$0;
    this.sb6_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$resolveToKeysAsync$slambda).x9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$resolveToKeysAsync$slambda).ac = function ($completion) {
    return this.x9w($completion);
  };
  protoOf(LocalResolver$resolveToKeysAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.rb6_1.y9w(this.sb6_1, this);
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
  protoOf(LocalResolver$resolveToKeysAsync$slambda).ja = function (completion) {
    return new LocalResolver$resolveToKeysAsync$slambda(this.rb6_1, this.sb6_1, completion);
  };
  function LocalResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.bb7_1 = this$0;
    this.cb7_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$resolveToKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$resolveToKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(LocalResolver$resolveToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.bb7_1.r9x(this.cb7_1, this);
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
  protoOf(LocalResolver$resolveToKeyAsync$slambda).ja = function (completion) {
    return new LocalResolver$resolveToKeyAsync$slambda(this.bb7_1, this.cb7_1, completion);
  };
  function LocalResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$27(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lb7_1 = _this__u8e3s4;
    this.mb7_1 = did;
  }
  protoOf($resolveCOROUTINE$27).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = getResolverForDid_0(this.lb7_1, this.mb7_1).nb7(this.mb7_1, this);
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
            var this_0 = suspendResult.up_1;
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
  protoOf($resolveCOROUTINE$27)['<set-state>'] = protoOf($resolveCOROUTINE$27).u9;
  protoOf($resolveCOROUTINE$27)['<get-state>'] = protoOf($resolveCOROUTINE$27).v9;
  protoOf($resolveCOROUTINE$27)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$27).w9;
  protoOf($resolveCOROUTINE$27)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$27).x9;
  protoOf($resolveCOROUTINE$27)['<set-result>'] = protoOf($resolveCOROUTINE$27).y9;
  protoOf($resolveCOROUTINE$27)['<get-result>'] = protoOf($resolveCOROUTINE$27).z9;
  protoOf($resolveCOROUTINE$27)['<set-exception>'] = protoOf($resolveCOROUTINE$27).aa;
  protoOf($resolveCOROUTINE$27)['<get-exception>'] = protoOf($resolveCOROUTINE$27).ba;
  protoOf($resolveCOROUTINE$27)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$27).ca;
  protoOf($resolveCOROUTINE$27)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$27).da;
  protoOf($resolveCOROUTINE$27)['<get-context>'] = protoOf($resolveCOROUTINE$27).t9;
  function LocalResolver() {
    this.nb5_1 = 'walt.id local resolver';
    var tmp = this;
    tmp.ob5_1 = HttpClient(LocalResolver$http$lambda);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = listOf([new DidJwkResolver(), new DidWebResolver(this.ob5_1), new DidKeyResolver(), new DidEbsiResolver(this.ob5_1), new DidCheqdResolver()]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp$ret$0 = element.method;
      destination.p2(tmp$ret$0, element);
    }
    tmp_0.pb5_1 = toMutableMap(destination);
  }
  protoOf(LocalResolver).u2 = function () {
    return this.nb5_1;
  };
  protoOf(LocalResolver).deactivateMethod = function (method) {
    this.pb5_1.q2(method);
  };
  protoOf(LocalResolver).b9z = function ($completion) {
    // Inline function 'kotlin.Companion.success' call
    var value = this.pb5_1.n2();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
    return new Result(tmp$ret$0);
  };
  protoOf(LocalResolver).n9w = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$27(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver).r9x = function (did, $completion) {
    var tmp = getResolverForDid_0(this, did).r9x(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(LocalResolver).y9w = function (did, $completion) {
    var tmp = getResolverForDid_0(this, did).y9w(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(LocalResolver).ra0 = function (did) {
    var tmp = LocalResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolver).da6 = function () {
    var tmp = LocalResolver$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolver).sa0 = function (did) {
    var tmp = LocalResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolver).ua0 = function (did) {
    var tmp = LocalResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function Companion_43() {
    this.DEFAULT_RESOLVER_URL = 'https://dev.uniresolver.io/1.0';
  }
  protoOf(Companion_43).ob7 = function () {
    return this.DEFAULT_RESOLVER_URL;
  };
  var Companion_instance_49;
  function Companion_getInstance_45() {
    return Companion_instance_49;
  }
  function getMethods_0($this, $completion) {
    var tmp = new $getMethodsCOROUTINE$32($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function UniresolverResolver$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.p3l(tmp, UniresolverResolver$http$lambda$lambda);
    var tmp_0 = get_HttpTimeout();
    $this$HttpClient.p3l(tmp_0, UniresolverResolver$http$lambda$lambda_0);
    return Unit_instance;
  }
  function UniresolverResolver$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function UniresolverResolver$http$lambda$lambda_0($this$install) {
    $this$install.s49(new Long(30000, 0));
    return Unit_instance;
  }
  function UniresolverResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.wb8_1 = this$0;
    this.xb8_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$resolveAsync$slambda).m9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$resolveAsync$slambda).ac = function ($completion) {
    return this.m9w($completion);
  };
  protoOf(UniresolverResolver$resolveAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.wb8_1.n9w(this.xb8_1, this);
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
  protoOf(UniresolverResolver$resolveAsync$slambda).ja = function (completion) {
    return new UniresolverResolver$resolveAsync$slambda(this.wb8_1, this.xb8_1, completion);
  };
  function UniresolverResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new UniresolverResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.m9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniresolverResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.ib9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$getSupportedMethodsAsync$slambda).xa4 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$getSupportedMethodsAsync$slambda).ac = function ($completion) {
    return this.xa4($completion);
  };
  protoOf(UniresolverResolver$getSupportedMethodsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.ib9_1.b9z(this);
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
  protoOf(UniresolverResolver$getSupportedMethodsAsync$slambda).ja = function (completion) {
    return new UniresolverResolver$getSupportedMethodsAsync$slambda(this.ib9_1, completion);
  };
  function UniresolverResolver$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniresolverResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.xa4($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniresolverResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.rb9_1 = this$0;
    this.sb9_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$resolveToKeysAsync$slambda).x9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$resolveToKeysAsync$slambda).ac = function ($completion) {
    return this.x9w($completion);
  };
  protoOf(UniresolverResolver$resolveToKeysAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.rb9_1.y9w(this.sb9_1, this);
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
  protoOf(UniresolverResolver$resolveToKeysAsync$slambda).ja = function (completion) {
    return new UniresolverResolver$resolveToKeysAsync$slambda(this.rb9_1, this.sb9_1, completion);
  };
  function UniresolverResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new UniresolverResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniresolverResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.bba_1 = this$0;
    this.cba_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$resolveToKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$resolveToKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(UniresolverResolver$resolveToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.bba_1.r9x(this.cba_1, this);
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
  protoOf(UniresolverResolver$resolveToKeyAsync$slambda).ja = function (completion) {
    return new UniresolverResolver$resolveToKeyAsync$slambda(this.bba_1, this.cba_1, completion);
  };
  function UniresolverResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new UniresolverResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getSupportedMethodsCOROUTINE$28(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lba_1 = _this__u8e3s4;
  }
  protoOf($getSupportedMethodsCOROUTINE$28).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.mba_1 = this.lba_1;
            this.nba_1 = this.mba_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.pba_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.qba_1 = this.nba_1;
            this.rba_1 = this.qba_1;
            this.n9_1 = 1;
            suspendResult = getMethods_0(this.rba_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = lazyOf(ARGUMENT);
            var tmp1 = ARGUMENT_0.b1();
            var tmp_3 = this;
            this.pba_1;
            tmp_3.oba_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof Error) {
              var e = this.q9_1;
              var tmp_5 = this;
              tmp_5.oba_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.oba_1);
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
  protoOf($getSupportedMethodsCOROUTINE$28)['<set-state>'] = protoOf($getSupportedMethodsCOROUTINE$28).u9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-state>'] = protoOf($getSupportedMethodsCOROUTINE$28).v9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<set-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$28).w9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$28).x9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<set-result>'] = protoOf($getSupportedMethodsCOROUTINE$28).y9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-result>'] = protoOf($getSupportedMethodsCOROUTINE$28).z9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<set-exception>'] = protoOf($getSupportedMethodsCOROUTINE$28).aa;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-exception>'] = protoOf($getSupportedMethodsCOROUTINE$28).ba;
  protoOf($getSupportedMethodsCOROUTINE$28)['<set-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$28).ca;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$28).da;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-context>'] = protoOf($getSupportedMethodsCOROUTINE$28).t9;
  function $resolveCOROUTINE$29(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.abb_1 = _this__u8e3s4;
    this.bbb_1 = did;
  }
  protoOf($resolveCOROUTINE$29).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 10;
            var tmp_0 = this;
            tmp_0.cbb_1 = this.abb_1;
            this.dbb_1 = this.cbb_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.fbb_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.gbb_1 = this.dbb_1;
            this.hbb_1 = this.gbb_1;
            var tmp_3 = this;
            tmp_3.ibb_1 = this.hbb_1.zb8_1;
            var tmp_4 = this;
            tmp_4.jbb_1 = this.hbb_1.resolverUrl + '/identifiers/' + this.bbb_1;
            this.kbb_1 = this.ibb_1;
            this.lbb_1 = this.jbb_1;
            var tmp_5 = this;
            tmp_5.mbb_1 = this.kbb_1;
            this.nbb_1 = this.mbb_1;
            var tmp_6 = this;
            tmp_6.obb_1 = this.nbb_1;
            var tmp_7 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.lbb_1);
            tmp_7.pbb_1 = this_0;
            this.qbb_1 = this.obb_1;
            this.rbb_1 = this.pbb_1;
            this.rbb_1.j3k_1 = Companion_getInstance().c32_1;
            var tmp_8 = this;
            tmp_8.sbb_1 = this.qbb_1;
            var tmp_9 = this;
            tmp_9.tbb_1 = this.rbb_1;
            this.ubb_1 = this.sbb_1;
            this.vbb_1 = this.tbb_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.vbb_1, this.ubb_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.wbb_1 = suspendResult;
            var tmp_10 = this;
            this.fbb_1;
            var value = this.wbb_1;
            tmp_10.ebb_1 = _Result___init__impl__xyqfz8(value);
            this.o9_1 = 10;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.o9_1 = 10;
            var tmp_11 = this.q9_1;
            if (tmp_11 instanceof Error) {
              this.xbb_1 = this.q9_1;
              var tmp_12 = this;
              var exception = this.xbb_1;
              tmp_12.ebb_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 3;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            this.o9_1 = 10;
            this.ybb_1 = this.ebb_1;
            this.zbb_1 = this.ybb_1;
            if (_Result___get_isSuccess__impl__sndoy8(this.zbb_1)) {
              var tmp_13 = this;
              tmp_13.bbc_1 = Companion_instance_2;
              var tmp_14 = this;
              var tmp_15 = _Result___get_value__impl__bjfvqg(this.zbb_1);
              tmp_14.cbc_1 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
              this.dbc_1 = this.cbc_1;
              var tmp_16 = this;
              tmp_16.ebc_1 = this.abb_1;
              this.fbc_1 = this.ebc_1;
              this.o9_1 = 5;
              var tmp_17 = this;
              tmp_17.hbc_1 = Companion_instance_2;
              var tmp_18 = this;
              tmp_18.ibc_1 = this.fbc_1;
              this.jbc_1 = this.ibc_1;
              var tmp_19 = this;
              tmp_19.kbc_1 = this.dbc_1;
              this.lbc_1 = this.kbc_1;
              this.n9_1 = 4;
              var tmp_20 = this.lbc_1.q3n();
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
              suspendResult = tmp_20.t3m(new TypeInfo(tmp_21, tmp_22), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.abc_1 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this.zbb_1));
              this.n9_1 = 9;
              continue $sm;
            }

          case 4:
            var tmp_24 = this;
            tmp_24.mbc_1 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp_25 = this;
            this.hbc_1;
            var value_0 = this.mbc_1;
            tmp_25.gbc_1 = _Result___init__impl__xyqfz8(value_0);
            this.o9_1 = 10;
            this.n9_1 = 6;
            continue $sm;
          case 5:
            this.o9_1 = 10;
            var tmp_26 = this.q9_1;
            if (tmp_26 instanceof Error) {
              this.nbc_1 = this.q9_1;
              var tmp_27 = this;
              var exception_0 = this.nbc_1;
              tmp_27.gbc_1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
              this.n9_1 = 6;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 6:
            this.o9_1 = 10;
            this.obc_1 = this.gbc_1;
            this.pbc_1 = this.obc_1;
            this.qbc_1 = Result__exceptionOrNull_impl_p6xea9(this.pbc_1);
            if (this.qbc_1 == null) {
              var tmp_28 = this;
              var tmp_29 = _Result___get_value__impl__bjfvqg(this.pbc_1);
              tmp_28.rbc_1 = (tmp_29 == null ? true : !(tmp_29 == null)) ? tmp_29 : THROW_CCE();
              this.n9_1 = 8;
              continue $sm;
            } else {
              var tmp_30 = this;
              tmp_30.sbc_1 = this.qbc_1;
              this.tbc_1 = this.sbc_1;
              this.ubc_1 = this.dbc_1.p37().toString();
              this.n9_1 = 7;
              suspendResult = bodyAsText(this.dbc_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 7:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = 'HTTP response (status ' + this.ubc_1 + ') for resolving did ' + this.bbb_1 + ' is not JSON, body: ' + ARGUMENT;
            var tmp_31 = this;
            throw RuntimeException_init_$Create$(ARGUMENT_0, this.tbc_1);
          case 8:
            var tmp1 = this.rbc_1;
            var tmp_32 = this;
            this.bbc_1;
            tmp_32.abc_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 9;
            continue $sm;
          case 9:
            return new Result(this.abc_1);
          case 10:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 10) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveCOROUTINE$29)['<set-state>'] = protoOf($resolveCOROUTINE$29).u9;
  protoOf($resolveCOROUTINE$29)['<get-state>'] = protoOf($resolveCOROUTINE$29).v9;
  protoOf($resolveCOROUTINE$29)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$29).w9;
  protoOf($resolveCOROUTINE$29)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$29).x9;
  protoOf($resolveCOROUTINE$29)['<set-result>'] = protoOf($resolveCOROUTINE$29).y9;
  protoOf($resolveCOROUTINE$29)['<get-result>'] = protoOf($resolveCOROUTINE$29).z9;
  protoOf($resolveCOROUTINE$29)['<set-exception>'] = protoOf($resolveCOROUTINE$29).aa;
  protoOf($resolveCOROUTINE$29)['<get-exception>'] = protoOf($resolveCOROUTINE$29).ba;
  protoOf($resolveCOROUTINE$29)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$29).ca;
  protoOf($resolveCOROUTINE$29)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$29).da;
  protoOf($resolveCOROUTINE$29)['<get-context>'] = protoOf($resolveCOROUTINE$29).t9;
  function $resolveToKeyCOROUTINE$30(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dbd_1 = _this__u8e3s4;
    this.ebd_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$30).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.dbd_1.y9w(this.ebd_1, this);
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
            var this_0 = suspendResult.up_1;
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
  protoOf($resolveToKeyCOROUTINE$30)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$30).u9;
  protoOf($resolveToKeyCOROUTINE$30)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$30).v9;
  protoOf($resolveToKeyCOROUTINE$30)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$30).w9;
  protoOf($resolveToKeyCOROUTINE$30)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$30).x9;
  protoOf($resolveToKeyCOROUTINE$30)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$30).y9;
  protoOf($resolveToKeyCOROUTINE$30)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$30).z9;
  protoOf($resolveToKeyCOROUTINE$30)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$30).aa;
  protoOf($resolveToKeyCOROUTINE$30)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$30).ba;
  protoOf($resolveToKeyCOROUTINE$30)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$30).ca;
  protoOf($resolveToKeyCOROUTINE$30)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$30).da;
  protoOf($resolveToKeyCOROUTINE$30)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$30).t9;
  function $resolveToKeysCOROUTINE$31(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.nbd_1 = _this__u8e3s4;
    this.obd_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$31).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 9;
            this.n9_1 = 1;
            suspendResult = this.nbd_1.n9w(this.obd_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            this.pbd_1 = suspendResult.up_1;
            suspendResult = new Result(this.pbd_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.qbd_1 = suspendResult.up_1;
            this.rbd_1 = this.qbd_1;
            this.sbd_1 = Result__exceptionOrNull_impl_p6xea9(this.rbd_1);
            if (this.sbd_1 == null) {
              var tmp_0 = this;
              var tmp_1 = _Result___get_value__impl__bjfvqg(this.rbd_1);
              tmp_0.ubd_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              this.vbd_1 = this.ubd_1;
              this.wbd_1 = VerificationMaterial_getInstance().getAll(this.vbd_1);
              if (this.wbd_1 == null) {
                this.xbd_1 = null;
                this.n9_1 = 7;
                continue $sm;
              } else {
                var tmp_2 = this;
                tmp_2.ybd_1 = this.wbd_1;
                this.zbd_1 = this.ybd_1;
                var tmp_3 = this;
                tmp_3.abe_1 = this.zbd_1;
                this.bbe_1 = this.abe_1;
                var tmp_4 = this;
                tmp_4.cbe_1 = this.bbe_1;
                this.dbe_1 = this.cbe_1;
                var tmp_5 = this;
                tmp_5.ebe_1 = this.dbe_1;
                var tmp_6 = this;
                tmp_6.fbe_1 = ArrayList_init_$Create$();
                this.gbe_1 = this.ebe_1;
                this.hbe_1 = this.fbe_1;
                var tmp_7 = this;
                tmp_7.ibe_1 = this.gbe_1;
                this.jbe_1 = this.ibe_1;
                this.kbe_1 = this.jbe_1.p();
                this.n9_1 = 3;
                continue $sm;
              }
            } else {
              var tmp_8 = this;
              var exception = this.sbd_1;
              tmp_8.tbd_1 = new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
              this.n9_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.kbe_1.q()) {
              this.n9_1 = 6;
              continue $sm;
            }

            this.lbe_1 = this.kbe_1.r();
            var tmp_9 = this;
            tmp_9.mbe_1 = this.lbe_1;
            this.nbe_1 = this.mbe_1;
            var tmp_10 = this;
            tmp_10.obe_1 = this.nbe_1;
            this.pbe_1 = this.obe_1;
            this.n9_1 = 4;
            suspendResult = KeyMaterial_instance.qbe(this.pbe_1, this);
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
            var this_0 = suspendResult.up_1;
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
              this.hbe_1.n(tmp0_safe_receiver);
            }

            this.n9_1 = 3;
            continue $sm;
          case 6:
            var ARGUMENT = this.hbe_1;
            var keys = toSet(ARGUMENT);
            var tmp_13 = this;
            var tmp_14;
            if (!keys.h()) {
              tmp_14 = _Result___init__impl__xyqfz8(keys);
            } else {
              var exception_0 = Exception_init_$Create$('Could not convert verification materials to keys.');
              tmp_14 = _Result___init__impl__xyqfz8(createFailure(exception_0));
            }

            tmp_13.xbd_1 = new Result(tmp_14);
            this.n9_1 = 7;
            continue $sm;
          case 7:
            var tmp1_elvis_lhs = this.xbd_1;
            var tmp_15 = this;
            var tmp_16;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = Exception_init_$Create$('No verification material found.');
              tmp_16 = _Result___init__impl__xyqfz8(createFailure(exception_1));
            } else {
              tmp_16 = tmp1_elvis_lhs.up_1;
            }

            tmp_15.tbd_1 = new Result(tmp_16);
            this.n9_1 = 8;
            continue $sm;
          case 8:
            return this.tbd_1;
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
  protoOf($resolveToKeysCOROUTINE$31)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$31).u9;
  protoOf($resolveToKeysCOROUTINE$31)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$31).v9;
  protoOf($resolveToKeysCOROUTINE$31)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$31).w9;
  protoOf($resolveToKeysCOROUTINE$31)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$31).x9;
  protoOf($resolveToKeysCOROUTINE$31)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$31).y9;
  protoOf($resolveToKeysCOROUTINE$31)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$31).z9;
  protoOf($resolveToKeysCOROUTINE$31)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$31).aa;
  protoOf($resolveToKeysCOROUTINE$31)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$31).ba;
  protoOf($resolveToKeysCOROUTINE$31)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$31).ca;
  protoOf($resolveToKeysCOROUTINE$31)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$31).da;
  protoOf($resolveToKeysCOROUTINE$31)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$31).t9;
  function $getMethodsCOROUTINE$32(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xb7_1 = _this__u8e3s4;
  }
  protoOf($getMethodsCOROUTINE$32).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.yb7_1 = this.xb7_1.zb8_1;
            var tmp_1 = this;
            tmp_1.zb7_1 = this.xb7_1.resolverUrl + '/methods';
            this.ab8_1 = this.yb7_1;
            this.bb8_1 = this.zb7_1;
            var tmp_2 = this;
            tmp_2.cb8_1 = this.ab8_1;
            this.db8_1 = this.cb8_1;
            var tmp_3 = this;
            tmp_3.eb8_1 = this.db8_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.bb8_1);
            tmp_4.fb8_1 = this_0;
            this.gb8_1 = this.eb8_1;
            this.hb8_1 = this.fb8_1;
            this.hb8_1.j3k_1 = Companion_getInstance().c32_1;
            var tmp_5 = this;
            tmp_5.ib8_1 = this.gb8_1;
            var tmp_6 = this;
            tmp_6.jb8_1 = this.hb8_1;
            this.kb8_1 = this.ib8_1;
            this.lb8_1 = this.jb8_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.lb8_1, this.kb8_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.mb8_1 = suspendResult;
            this.nb8_1 = this.mb8_1;
            this.n9_1 = 2;
            var tmp_7 = this.nb8_1.q3n();
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

            suspendResult = tmp_7.t3m(new TypeInfo(tmp_8, tmp_9), this);
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
              destination.n(get_jsonPrimitive(item).q4u());
            }

            var ARGUMENT = destination;
            return toSet(ARGUMENT);
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
  function UniresolverResolver(resolverUrl) {
    resolverUrl = resolverUrl === VOID ? 'https://dev.uniresolver.io/1.0' : resolverUrl;
    this.resolverUrl = resolverUrl;
    this.yb8_1 = 'uniresolver @ ' + this.resolverUrl;
    var tmp = this;
    tmp.zb8_1 = HttpClient(UniresolverResolver$http$lambda);
  }
  protoOf(UniresolverResolver).rbe = function (_set____db54di) {
    this.resolverUrl = _set____db54di;
  };
  protoOf(UniresolverResolver).sbe = function () {
    return this.resolverUrl;
  };
  protoOf(UniresolverResolver).u2 = function () {
    return this.yb8_1;
  };
  protoOf(UniresolverResolver).b9z = function ($completion) {
    var tmp = new $getSupportedMethodsCOROUTINE$28(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).n9w = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$29(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).r9x = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$30(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).y9w = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$31(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).ra0 = function (did) {
    var tmp = UniresolverResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniresolverResolver).da6 = function () {
    var tmp = UniresolverResolver$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniresolverResolver).sa0 = function (did) {
    var tmp = UniresolverResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniresolverResolver).ua0 = function (did) {
    var tmp = UniresolverResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function resolveDid($this, did, $completion) {
    var tmp = new $resolveDidCOROUTINE$35($this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function DidCheqdResolver$json$lambda($this$Json) {
    $this$Json.y4s_1 = true;
    return Unit_instance;
  }
  function DidCheqdResolver$resolveDid$lambda($this$headers) {
    $this$headers.l2r('contentType', 'application/did+ld+json');
    return Unit_instance;
  }
  function DidCheqdResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.abg_1 = this$0;
    this.bbg_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdResolver$resolveAsync$slambda).cbg = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidCheqdResolver$resolveAsync$slambda).ac = function ($completion) {
    return this.cbg($completion);
  };
  protoOf(DidCheqdResolver$resolveAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.abg_1.nb7(this.bbg_1, this);
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
  protoOf(DidCheqdResolver$resolveAsync$slambda).ja = function (completion) {
    return new DidCheqdResolver$resolveAsync$slambda(this.abg_1, this.bbg_1, completion);
  };
  function DidCheqdResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidCheqdResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.cbg($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidCheqdResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.nbg_1 = this$0;
    this.obg_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdResolver$resolveToKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidCheqdResolver$resolveToKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(DidCheqdResolver$resolveToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.nbg_1.r9x(this.obg_1, this);
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
  protoOf(DidCheqdResolver$resolveToKeyAsync$slambda).ja = function (completion) {
    return new DidCheqdResolver$resolveToKeyAsync$slambda(this.nbg_1, this.obg_1, completion);
  };
  function DidCheqdResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidCheqdResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$34(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xbg_1 = _this__u8e3s4;
    this.ybg_1 = did;
  }
  protoOf($resolveCOROUTINE$34).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.zbg_1 = this.xbg_1;
            this.abh_1 = this.zbg_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.cbh_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.dbh_1 = this.abh_1;
            this.ebh_1 = this.dbh_1;
            this.n9_1 = 1;
            suspendResult = resolveDid(this.ebh_1, this.ybg_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.cbh_1;
            tmp_3.bbh_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof Error) {
              var e = this.q9_1;
              var tmp_5 = this;
              tmp_5.bbh_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.bbh_1);
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
  protoOf($resolveCOROUTINE$34)['<set-state>'] = protoOf($resolveCOROUTINE$34).u9;
  protoOf($resolveCOROUTINE$34)['<get-state>'] = protoOf($resolveCOROUTINE$34).v9;
  protoOf($resolveCOROUTINE$34)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$34).w9;
  protoOf($resolveCOROUTINE$34)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$34).x9;
  protoOf($resolveCOROUTINE$34)['<set-result>'] = protoOf($resolveCOROUTINE$34).y9;
  protoOf($resolveCOROUTINE$34)['<get-result>'] = protoOf($resolveCOROUTINE$34).z9;
  protoOf($resolveCOROUTINE$34)['<set-exception>'] = protoOf($resolveCOROUTINE$34).aa;
  protoOf($resolveCOROUTINE$34)['<get-exception>'] = protoOf($resolveCOROUTINE$34).ba;
  protoOf($resolveCOROUTINE$34)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$34).ca;
  protoOf($resolveCOROUTINE$34)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$34).da;
  protoOf($resolveCOROUTINE$34)['<get-context>'] = protoOf($resolveCOROUTINE$34).t9;
  function $resolveDidCOROUTINE$35(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bbf_1 = _this__u8e3s4;
    this.cbf_1 = did;
  }
  protoOf($resolveDidCOROUTINE$35).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.dbf_1 = this.bbf_1.dbg_1;
            var tmp_1 = this;
            tmp_1.ebf_1 = 'https://resolver.cheqd.net/1.0/identifiers/' + this.cbf_1;
            this.fbf_1 = this.dbf_1;
            this.gbf_1 = this.ebf_1;
            var tmp_2 = this;
            tmp_2.hbf_1 = this.fbf_1;
            this.ibf_1 = this.hbf_1;
            var tmp_3 = this;
            tmp_3.jbf_1 = this.ibf_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.gbf_1);
            headers(this_0, DidCheqdResolver$resolveDid$lambda);
            tmp_4.kbf_1 = this_0;
            this.lbf_1 = this.jbf_1;
            this.mbf_1 = this.kbf_1;
            this.mbf_1.j3k_1 = Companion_getInstance().c32_1;
            var tmp_5 = this;
            tmp_5.nbf_1 = this.lbf_1;
            var tmp_6 = this;
            tmp_6.obf_1 = this.mbf_1;
            this.pbf_1 = this.nbf_1;
            this.qbf_1 = this.obf_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.qbf_1, this.pbf_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.rbf_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.rbf_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var responseText = suspendResult;
            this.bbf_1;
            var tmp_7;
            try {
              var value = Default_getInstance().h4s(responseText);
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
              throw RuntimeException_init_$Create$_0('Illegal non-JSON response (' + this.rbf_1.p37().toString() + '), body: >>' + responseText + '<< (end of body), error: >>' + stackTraceToString(exception) + '<<');
            }

            var resolution = tmp_9;
            var tmp0_safe_receiver = get_jsonObject(resolution).af('didResolutionMetadata');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('error');
            var tmp_11;
            if (tmp2_safe_receiver == null) {
              tmp_11 = null;
            } else {
              throw IllegalArgumentException_init_$Create$('Could not resolve did:cheqd, resolver responded: ' + get_jsonPrimitive(tmp2_safe_receiver).q4u());
            }

            var tmp3_elvis_lhs = tmp_11;
            var tmp_12;
            if (tmp3_elvis_lhs == null) {
              this.bbf_1;
              var tmp0_safe_receiver_0 = get_jsonObject(resolution).af('didDocument');
              var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : get_jsonObject(tmp0_safe_receiver_0);
              var tmp_13;
              if (tmp1_elvis_lhs == null) {
                throw IllegalArgumentException_init_$Create$('Response for did:cheqd did not contain a DID document!');
              } else {
                tmp_13 = tmp1_elvis_lhs;
              }
              var it = tmp_13;
              var tmp0 = this.bbf_1.ebg_1;
              var string = it.toString();
              var this_2 = tmp0.w24();
              var this_3 = serializer(this_2, createKType(getKClass(DidDocument_0), arrayOf([]), false));
              tmp_12 = tmp0.y21(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), string);
            } else {
              tmp_12 = tmp3_elvis_lhs;
            }

            var didDocument = tmp_12;
            return new DidDocument(secondaryConstructor(didDocument).toMap());
          case 3:
            throw this.q9_1;
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
  function DidCheqdResolver() {
    LocalResolverMethod.call(this, 'cheqd');
    this.dbg_1 = HttpClient();
    var tmp = this;
    tmp.ebg_1 = Json(VOID, DidCheqdResolver$json$lambda);
  }
  protoOf(DidCheqdResolver).nb7 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$34(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidCheqdResolver).r9x = function (did, $completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(DidCheqdResolver).ra0 = function (did) {
    var tmp = DidCheqdResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidCheqdResolver).ua0 = function (did) {
    var tmp = DidCheqdResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function resolveDid_0($this, did, $completion) {
    var tmp = new $resolveDidCOROUTINE$37($this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function parseDidDocumentOrNull($this, json) {
    var tmp;
    try {
      tmp = new DidDocument(secondaryConstructor_1(secondaryConstructor_0(get_jsonObject(Default_getInstance().h4s(json)))).toMap());
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
    $this$headers.l2r(HttpHeaders_getInstance().q2y_1, 'application/did+json');
    $this$headers.l2r(HttpHeaders_getInstance().y2x_1, 'application/did+json');
    return Unit_instance;
  }
  function DidEbsiResolver$resolveDid$lambda_0($this$headers) {
    $this$headers.l2r(HttpHeaders_getInstance().q2y_1, 'application/did+json');
    $this$headers.l2r(HttpHeaders_getInstance().y2x_1, 'application/did+json');
    return Unit_instance;
  }
  function DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.dbj_1 = this$0;
    this.ebj_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).q83 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).ac = function ($completion) {
    return this.q83($completion);
  };
  protoOf(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.dbj_1.ibj(this.ebj_1, this);
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
  protoOf(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).ja = function (completion) {
    return new DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this.dbj_1, this.ebj_1, completion);
  };
  function DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.q83($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.rbj_1 = this$0;
    this.sbj_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).tbj = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).ac = function ($completion) {
    return this.tbj($completion);
  };
  protoOf(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.rbj_1.ubj(this.sbj_1, this);
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
  protoOf(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).ja = function (completion) {
    return new DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this.rbj_1, this.sbj_1, completion);
  };
  function DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.tbj($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.dbk_1 = this$0;
    this.ebk_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$resolveAsync$slambda).cbg = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$resolveAsync$slambda).ac = function ($completion) {
    return this.cbg($completion);
  };
  protoOf(DidEbsiResolver$resolveAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.dbk_1.nb7(this.ebk_1, this);
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
  protoOf(DidEbsiResolver$resolveAsync$slambda).ja = function (completion) {
    return new DidEbsiResolver$resolveAsync$slambda(this.dbk_1, this.ebk_1, completion);
  };
  function DidEbsiResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidEbsiResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.cbg($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.nbk_1 = this$0;
    this.obk_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$resolveToKeysAsync$slambda).x9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$resolveToKeysAsync$slambda).ac = function ($completion) {
    return this.x9w($completion);
  };
  protoOf(DidEbsiResolver$resolveToKeysAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.nbk_1.y9w(this.obk_1, this);
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
  protoOf(DidEbsiResolver$resolveToKeysAsync$slambda).ja = function (completion) {
    return new DidEbsiResolver$resolveToKeysAsync$slambda(this.nbk_1, this.obk_1, completion);
  };
  function DidEbsiResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidEbsiResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.xbk_1 = this$0;
    this.ybk_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$resolveToKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$resolveToKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(DidEbsiResolver$resolveToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.xbk_1.r9x(this.ybk_1, this);
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
  protoOf(DidEbsiResolver$resolveToKeyAsync$slambda).ja = function (completion) {
    return new DidEbsiResolver$resolveToKeyAsync$slambda(this.xbk_1, this.ybk_1, completion);
  };
  function DidEbsiResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidEbsiResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$36(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hbl_1 = _this__u8e3s4;
    this.ibl_1 = did;
  }
  protoOf($resolveCOROUTINE$36).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.jbl_1 = this.hbl_1;
            this.kbl_1 = this.jbl_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.mbl_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.nbl_1 = this.kbl_1;
            this.obl_1 = this.nbl_1;
            this.n9_1 = 1;
            suspendResult = resolveDid_0(this.obl_1, this.ibl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.mbl_1;
            tmp_3.lbl_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof Error) {
              var e = this.q9_1;
              var tmp_5 = this;
              tmp_5.lbl_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.lbl_1);
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
  protoOf($resolveCOROUTINE$36)['<set-state>'] = protoOf($resolveCOROUTINE$36).u9;
  protoOf($resolveCOROUTINE$36)['<get-state>'] = protoOf($resolveCOROUTINE$36).v9;
  protoOf($resolveCOROUTINE$36)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$36).w9;
  protoOf($resolveCOROUTINE$36)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$36).x9;
  protoOf($resolveCOROUTINE$36)['<set-result>'] = protoOf($resolveCOROUTINE$36).y9;
  protoOf($resolveCOROUTINE$36)['<get-result>'] = protoOf($resolveCOROUTINE$36).z9;
  protoOf($resolveCOROUTINE$36)['<set-exception>'] = protoOf($resolveCOROUTINE$36).aa;
  protoOf($resolveCOROUTINE$36)['<get-exception>'] = protoOf($resolveCOROUTINE$36).ba;
  protoOf($resolveCOROUTINE$36)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$36).ca;
  protoOf($resolveCOROUTINE$36)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$36).da;
  protoOf($resolveCOROUTINE$36)['<get-context>'] = protoOf($resolveCOROUTINE$36).t9;
  function $resolveDidCOROUTINE$37(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.nbh_1 = _this__u8e3s4;
    this.obh_1 = did;
  }
  protoOf($resolveDidCOROUTINE$37).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            tmp_0.pbh_1 = this.nbh_1.fbj_1;
            var tmp_1 = this;
            tmp_1.qbh_1 = this.nbh_1.gbj_1 + this.obh_1;
            this.rbh_1 = this.pbh_1;
            this.sbh_1 = this.qbh_1;
            var tmp_2 = this;
            tmp_2.tbh_1 = this.rbh_1;
            this.ubh_1 = this.tbh_1;
            var tmp_3 = this;
            tmp_3.vbh_1 = this.ubh_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.sbh_1);
            headers(this_0, DidEbsiResolver$resolveDid$lambda);
            tmp_4.wbh_1 = this_0;
            this.xbh_1 = this.vbh_1;
            this.ybh_1 = this.wbh_1;
            this.ybh_1.j3k_1 = Companion_getInstance().c32_1;
            var tmp_5 = this;
            tmp_5.zbh_1 = this.xbh_1;
            var tmp_6 = this;
            tmp_6.abi_1 = this.ybh_1;
            this.bbi_1 = this.zbh_1;
            this.cbi_1 = this.abi_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.cbi_1, this.bbi_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.dbi_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.dbi_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ebi_1 = suspendResult;
            this.fbi_1 = parseDidDocumentOrNull(this.nbh_1, this.ebi_1);
            if (!(this.fbi_1 == null)) {
              return this.fbi_1;
            }

            var tmp_7 = this;
            tmp_7.gbi_1 = this.nbh_1.fbj_1;
            var tmp_8 = this;
            tmp_8.hbi_1 = this.nbh_1.hbj_1 + this.obh_1;
            this.ibi_1 = this.gbi_1;
            this.jbi_1 = this.hbi_1;
            var tmp_9 = this;
            tmp_9.kbi_1 = this.ibi_1;
            this.lbi_1 = this.kbi_1;
            var tmp_10 = this;
            tmp_10.mbi_1 = this.lbi_1;
            var tmp_11 = this;
            var this_1 = new HttpRequestBuilder();
            url(this_1, this.jbi_1);
            headers(this_1, DidEbsiResolver$resolveDid$lambda_0);
            tmp_11.nbi_1 = this_1;
            this.obi_1 = this.mbi_1;
            this.pbi_1 = this.nbi_1;
            this.pbi_1.j3k_1 = Companion_getInstance().c32_1;
            var tmp_12 = this;
            tmp_12.qbi_1 = this.obi_1;
            var tmp_13 = this;
            tmp_13.rbi_1 = this.pbi_1;
            this.sbi_1 = this.qbi_1;
            this.tbi_1 = this.rbi_1;
            this.n9_1 = 3;
            suspendResult = (new HttpStatement(this.tbi_1, this.sbi_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.ubi_1 = suspendResult;
            this.n9_1 = 4;
            suspendResult = bodyAsText(this.ubi_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var responsePilot = suspendResult;
            var tmp0_elvis_lhs = parseDidDocumentOrNull(this.nbh_1, responsePilot);
            var tmp_14;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('Failed to resolve EBSI DID from both environments');
            } else {
              tmp_14 = tmp0_elvis_lhs;
            }

            return tmp_14;
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
  function $resolveToKeyCOROUTINE$38(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xbl_1 = _this__u8e3s4;
    this.ybl_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$38).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.n9_1 = 1;
            suspendResult = this.xbl_1.nb7(this.ybl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            this.zbl_1 = suspendResult.up_1;
            suspendResult = new Result(this.zbl_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.abm_1 = suspendResult.up_1;
            if (_Result___get_isFailure__impl__jpiriv(this.abm_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.abm_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.abm_1;
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
              var exception_0 = IllegalStateException_init_$Create$('DID document is null for ' + this.ybl_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_0)));
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_0.bbm_1 = tmp_3;
            var tmp_4 = this;
            var tmp1_elvis_lhs = this.bbm_1.af('verificationMethod');
            var tmp_5;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = IllegalStateException_init_$Create$('No verification method found in DID document for ' + this.ybl_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_1)));
            } else {
              tmp_5 = tmp1_elvis_lhs;
            }

            tmp_4.cbm_1 = tmp_5;
            this.dbm_1 = get_jsonArray(this.cbm_1);
            var tmp_6 = this;
            var tmp0 = this.dbm_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              this.xbl_1;
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
                  var this_2 = this_1.w24();
                  var this_3 = serializer(this_2, createKType(getKClass(JsonObject), arrayOf([]), false));
                  tmp$ret$0 = this_1.x21(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), publicKeyJwk);
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

            tmp_6.ebm_1 = destination;
            if (this.ebm_1.h()) {
              var exception_2 = IllegalStateException_init_$Create$('No valid public key JWKs found in DID document for ' + this.ybl_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_2)));
            }

            this.n9_1 = 3;
            suspendResult = this.xbl_1.ibj(this.ebm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return suspendResult;
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
  protoOf($resolveToKeyCOROUTINE$38)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$38).u9;
  protoOf($resolveToKeyCOROUTINE$38)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$38).v9;
  protoOf($resolveToKeyCOROUTINE$38)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$38).w9;
  protoOf($resolveToKeyCOROUTINE$38)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$38).x9;
  protoOf($resolveToKeyCOROUTINE$38)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$38).y9;
  protoOf($resolveToKeyCOROUTINE$38)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$38).z9;
  protoOf($resolveToKeyCOROUTINE$38)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$38).aa;
  protoOf($resolveToKeyCOROUTINE$38)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$38).ba;
  protoOf($resolveToKeyCOROUTINE$38)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$38).ca;
  protoOf($resolveToKeyCOROUTINE$38)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$38).da;
  protoOf($resolveToKeyCOROUTINE$38)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$38).t9;
  function $resolveToKeysCOROUTINE$39(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.nbm_1 = _this__u8e3s4;
    this.obm_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$39).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.n9_1 = 1;
            suspendResult = this.nbm_1.nb7(this.obm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            this.pbm_1 = suspendResult.up_1;
            suspendResult = new Result(this.pbm_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.qbm_1 = suspendResult.up_1;
            if (_Result___get_isFailure__impl__jpiriv(this.qbm_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.qbm_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.qbm_1;
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
              var exception_0 = IllegalStateException_init_$Create$('DID document is null for ' + this.obm_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_0)));
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_0.rbm_1 = tmp_3;
            var tmp_4 = this;
            var tmp1_elvis_lhs = this.rbm_1.af('verificationMethod');
            var tmp_5;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = IllegalStateException_init_$Create$('No verification method found in DID document for ' + this.obm_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_1)));
            } else {
              tmp_5 = tmp1_elvis_lhs;
            }

            tmp_4.sbm_1 = tmp_5;
            this.tbm_1 = get_jsonArray(this.sbm_1);
            var tmp_6 = this;
            var tmp0 = this.tbm_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              this.nbm_1;
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
                  var this_2 = this_1.w24();
                  var this_3 = serializer(this_2, createKType(getKClass(JsonObject), arrayOf([]), false));
                  tmp$ret$0 = this_1.x21(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), publicKeyJwk);
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

            tmp_6.ubm_1 = destination;
            if (this.ubm_1.h()) {
              var exception_2 = IllegalStateException_init_$Create$('No valid public key JWKs found in DID document for ' + this.obm_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_2)));
            }

            this.n9_1 = 3;
            suspendResult = this.nbm_1.ubj(this.ubm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return suspendResult;
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
  protoOf($resolveToKeysCOROUTINE$39)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$39).u9;
  protoOf($resolveToKeysCOROUTINE$39)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$39).v9;
  protoOf($resolveToKeysCOROUTINE$39)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$39).w9;
  protoOf($resolveToKeysCOROUTINE$39)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$39).x9;
  protoOf($resolveToKeysCOROUTINE$39)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$39).y9;
  protoOf($resolveToKeysCOROUTINE$39)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$39).z9;
  protoOf($resolveToKeysCOROUTINE$39)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$39).aa;
  protoOf($resolveToKeysCOROUTINE$39)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$39).ba;
  protoOf($resolveToKeysCOROUTINE$39)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$39).ca;
  protoOf($resolveToKeysCOROUTINE$39)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$39).da;
  protoOf($resolveToKeysCOROUTINE$39)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$39).t9;
  function $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dbn_1 = _this__u8e3s4;
    this.ebn_1 = publicKeyJwks;
  }
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            var tmp_0 = this;
            tmp_0.fbn_1 = this.ebn_1;
            this.gbn_1 = this.fbn_1;
            this.hbn_1 = this.gbn_1.p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.hbn_1.q()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.ibn_1 = this.hbn_1.r();
            var tmp_1 = this;
            tmp_1.jbn_1 = this.ibn_1;
            this.kbn_1 = this.jbn_1;
            this.n9_1 = 2;
            suspendResult = Companion_instance_4.t7i(this.kbn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.lbn_1 = suspendResult.up_1;
            suspendResult = new Result(this.lbn_1);
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.mbn_1 = suspendResult.up_1;
            if (_Result___get_isSuccess__impl__sndoy8(this.mbn_1) && contains(this.kbn_1, 'P-256'))
              return new Result(this.mbn_1);
            this.n9_1 = 1;
            continue $sm;
          case 4:
            this.n9_1 = 5;
            suspendResult = Companion_instance_4.t7i(first_0(this.ebn_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 6;
            continue $sm;
          case 5:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 6;
            continue $sm;
          case 6:
            return suspendResult;
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
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<set-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).u9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).v9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<set-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).w9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).x9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<set-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).y9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).z9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<set-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).aa;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).ba;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<set-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).ca;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).da;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-context>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).t9;
  function $tryConvertPublicKeyJwksToKeysCOROUTINE$41(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vbn_1 = _this__u8e3s4;
    this.wbn_1 = publicKeyJwks;
  }
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            tmp_0.xbn_1 = LinkedHashSet_init_$Create$();
            this.ybn_1 = this.wbn_1.p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.ybn_1.q()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.zbn_1 = this.ybn_1.r();
            this.n9_1 = 2;
            suspendResult = Companion_instance_4.t7i(this.zbn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var result = suspendResult.up_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              throwOnFailure(result);
              var tmp_1 = _Result___get_value__impl__bjfvqg(result);
              this.xbn_1.n((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
            }

            this.n9_1 = 1;
            continue $sm;
          case 4:
            var tmp_2;
            if (!this.xbn_1.h()) {
              var value = this.xbn_1;
              tmp_2 = _Result___init__impl__xyqfz8(value);
            } else {
              var exception = NoSuchElementException_init_$Create$('No keys could be imported from the DID document');
              tmp_2 = _Result___init__impl__xyqfz8(createFailure(exception));
            }

            return new Result(tmp_2);
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
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<set-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).u9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).v9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<set-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).w9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).x9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<set-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).y9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).z9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<set-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).aa;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).ba;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<set-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).ca;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).da;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-context>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).t9;
  function DidEbsiResolver(client) {
    LocalResolverMethod.call(this, 'ebsi');
    this.fbj_1 = client;
    this.gbj_1 = 'https://api-conformance.ebsi.eu/did-registry/v5/identifiers/';
    this.hbj_1 = 'https://api-pilot.ebsi.eu/did-registry/v5/identifiers/';
  }
  protoOf(DidEbsiResolver).nb7 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$36(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).r9x = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$38(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).y9w = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$39(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).ibj = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40(this, publicKeyJwks, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).ubj = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertPublicKeyJwksToKeysCOROUTINE$41(this, publicKeyJwks, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).abo = function (publicKeyJwks) {
    var tmp = DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).bbo = function (publicKeyJwks) {
    var tmp = DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).ra0 = function (did) {
    var tmp = DidEbsiResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).sa0 = function (did) {
    var tmp = DidEbsiResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).ua0 = function (did) {
    var tmp = DidEbsiResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidJwkResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.kbo_1 = this$0;
    this.lbo_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkResolver$resolveAsync$slambda).cbg = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidJwkResolver$resolveAsync$slambda).ac = function ($completion) {
    return this.cbg($completion);
  };
  protoOf(DidJwkResolver$resolveAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.kbo_1.nb7(this.lbo_1, this);
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
  protoOf(DidJwkResolver$resolveAsync$slambda).ja = function (completion) {
    return new DidJwkResolver$resolveAsync$slambda(this.kbo_1, this.lbo_1, completion);
  };
  function DidJwkResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidJwkResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.cbg($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidJwkResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.ubo_1 = this$0;
    this.vbo_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkResolver$resolveToKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidJwkResolver$resolveToKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(DidJwkResolver$resolveToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.ubo_1.r9x(this.vbo_1, this);
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
  protoOf(DidJwkResolver$resolveToKeyAsync$slambda).ja = function (completion) {
    return new DidJwkResolver$resolveToKeyAsync$slambda(this.ubo_1, this.vbo_1, completion);
  };
  function DidJwkResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidJwkResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$42(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ebp_1 = _this__u8e3s4;
    this.fbp_1 = did;
  }
  protoOf($resolveCOROUTINE$42).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = this.ebp_1.r9x(this.fbp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            this.gbp_1 = suspendResult.up_1;
            suspendResult = new Result(this.gbp_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.hbp_1 = suspendResult.up_1;
            if (_Result___get_isFailure__impl__jpiriv(this.hbp_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.hbp_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.hbp_1;
            var tmp_1;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_1 = null;
            } else {
              var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
            }

            tmp_0.ibp_1 = ensureNotNull(tmp_1);
            this.n9_1 = 3;
            suspendResult = this.ibp_1.u6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_2(this.fbp_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var didDocument = new DidDocument(ARGUMENT_1);
            return new Result(_Result___init__impl__xyqfz8(didDocument));
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveCOROUTINE$42)['<set-state>'] = protoOf($resolveCOROUTINE$42).u9;
  protoOf($resolveCOROUTINE$42)['<get-state>'] = protoOf($resolveCOROUTINE$42).v9;
  protoOf($resolveCOROUTINE$42)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$42).w9;
  protoOf($resolveCOROUTINE$42)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$42).x9;
  protoOf($resolveCOROUTINE$42)['<set-result>'] = protoOf($resolveCOROUTINE$42).y9;
  protoOf($resolveCOROUTINE$42)['<get-result>'] = protoOf($resolveCOROUTINE$42).z9;
  protoOf($resolveCOROUTINE$42)['<set-exception>'] = protoOf($resolveCOROUTINE$42).aa;
  protoOf($resolveCOROUTINE$42)['<get-exception>'] = protoOf($resolveCOROUTINE$42).ba;
  protoOf($resolveCOROUTINE$42)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$42).ca;
  protoOf($resolveCOROUTINE$42)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$42).da;
  protoOf($resolveCOROUTINE$42)['<get-context>'] = protoOf($resolveCOROUTINE$42).t9;
  function DidJwkResolver() {
    LocalResolverMethod.call(this, 'jwk');
  }
  protoOf(DidJwkResolver).nb7 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$42(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidJwkResolver).r9x = function (did, $completion) {
    var tmp = Companion_instance_4.t7i(decodeToString(Base64Utils_getInstance().decodeFromBase64Url(ensureNotNull(DidUtils_getInstance().pathFromDid(did)))), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidJwkResolver).ra0 = function (did) {
    var tmp = DidJwkResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidJwkResolver).ua0 = function (did) {
    var tmp = DidJwkResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidKeyResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.rbp_1 = this$0;
    this.sbp_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyResolver$resolveAsync$slambda).cbg = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver$resolveAsync$slambda).ac = function ($completion) {
    return this.cbg($completion);
  };
  protoOf(DidKeyResolver$resolveAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.rbp_1.nb7(this.sbp_1, this);
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
  protoOf(DidKeyResolver$resolveAsync$slambda).ja = function (completion) {
    return new DidKeyResolver$resolveAsync$slambda(this.rbp_1, this.sbp_1, completion);
  };
  function DidKeyResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidKeyResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.cbg($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidKeyResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.bbq_1 = this$0;
    this.cbq_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyResolver$resolveToKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver$resolveToKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(DidKeyResolver$resolveToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.bbq_1.r9x(this.cbq_1, this);
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
  protoOf(DidKeyResolver$resolveToKeyAsync$slambda).ja = function (completion) {
    return new DidKeyResolver$resolveToKeyAsync$slambda(this.bbq_1, this.cbq_1, completion);
  };
  function DidKeyResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidKeyResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$43(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lbq_1 = _this__u8e3s4;
    this.mbq_1 = did;
  }
  protoOf($resolveCOROUTINE$43).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.n9_1 = 1;
            suspendResult = this.lbq_1.r9x(this.mbq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            this.nbq_1 = suspendResult.up_1;
            suspendResult = new Result(this.nbq_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.obq_1 = suspendResult.up_1;
            this.pbq_1 = this.obq_1;
            this.qbq_1 = Result__exceptionOrNull_impl_p6xea9(this.pbq_1);
            if (this.qbq_1 == null) {
              var tmp_0 = this;
              var tmp_1 = _Result___get_value__impl__bjfvqg(this.pbq_1);
              tmp_0.sbq_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              this.tbq_1 = this.sbq_1;
              var tmp_2 = this;
              tmp_2.ubq_1 = Companion_instance_2;
              this.vbq_1 = ensureNotNull(DidUtils_getInstance().identifierFromDid(this.mbq_1));
              this.n9_1 = 3;
              suspendResult = this.tbq_1.u6p(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_3 = this;
              var exception = this.qbq_1;
              tmp_3.rbq_1 = new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
              this.n9_1 = 4;
              continue $sm;
            }

          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_3(this.mbq_1, this.vbq_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var tmp1 = new DidDocument(ARGUMENT_1);
            var tmp_4 = this;
            this.ubq_1;
            tmp_4.rbq_1 = new Result(_Result___init__impl__xyqfz8(tmp1));
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return this.rbq_1;
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
  protoOf($resolveCOROUTINE$43)['<set-state>'] = protoOf($resolveCOROUTINE$43).u9;
  protoOf($resolveCOROUTINE$43)['<get-state>'] = protoOf($resolveCOROUTINE$43).v9;
  protoOf($resolveCOROUTINE$43)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$43).w9;
  protoOf($resolveCOROUTINE$43)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$43).x9;
  protoOf($resolveCOROUTINE$43)['<set-result>'] = protoOf($resolveCOROUTINE$43).y9;
  protoOf($resolveCOROUTINE$43)['<get-result>'] = protoOf($resolveCOROUTINE$43).z9;
  protoOf($resolveCOROUTINE$43)['<set-exception>'] = protoOf($resolveCOROUTINE$43).aa;
  protoOf($resolveCOROUTINE$43)['<get-exception>'] = protoOf($resolveCOROUTINE$43).ba;
  protoOf($resolveCOROUTINE$43)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$43).ca;
  protoOf($resolveCOROUTINE$43)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$43).da;
  protoOf($resolveCOROUTINE$43)['<get-context>'] = protoOf($resolveCOROUTINE$43).t9;
  function $resolveToKeyCOROUTINE$44(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ebr_1 = _this__u8e3s4;
    this.fbr_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$44).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.gbr_1 = DidUtils_getInstance().identifierFromDid(this.fbr_1);
            if (this.gbr_1 == null) {
              this.hbr_1 = null;
              this.n9_1 = 3;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.ibr_1 = this.gbr_1;
              this.jbr_1 = this.ibr_1;
              var tmp_1 = this;
              tmp_1.kbr_1 = this.jbr_1;
              this.lbr_1 = this.kbr_1;
              this.n9_1 = 1;
              suspendResult = KeyUtils_instance.mbr(this.lbr_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.hbr_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var tmp1_elvis_lhs = this.hbr_1;
            var tmp_2;
            if (tmp1_elvis_lhs == null) {
              var exception = newThrowable('Failed to extract identifier from: ' + this.fbr_1);
              tmp_2 = _Result___init__impl__xyqfz8(createFailure(exception));
            } else {
              tmp_2 = tmp1_elvis_lhs.up_1;
            }

            return new Result(tmp_2);
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($resolveToKeyCOROUTINE$44)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$44).u9;
  protoOf($resolveToKeyCOROUTINE$44)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$44).v9;
  protoOf($resolveToKeyCOROUTINE$44)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$44).w9;
  protoOf($resolveToKeyCOROUTINE$44)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$44).x9;
  protoOf($resolveToKeyCOROUTINE$44)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$44).y9;
  protoOf($resolveToKeyCOROUTINE$44)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$44).z9;
  protoOf($resolveToKeyCOROUTINE$44)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$44).aa;
  protoOf($resolveToKeyCOROUTINE$44)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$44).ba;
  protoOf($resolveToKeyCOROUTINE$44)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$44).ca;
  protoOf($resolveToKeyCOROUTINE$44)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$44).da;
  protoOf($resolveToKeyCOROUTINE$44)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$44).t9;
  function DidKeyResolver() {
    LocalResolverMethod.call(this, 'key');
  }
  protoOf(DidKeyResolver).nb7 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$43(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver).r9x = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$44(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver).ra0 = function (did) {
    var tmp = DidKeyResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidKeyResolver).ua0 = function (did) {
    var tmp = DidKeyResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidWebResolver$Companion$json$lambda($this$Json) {
    $this$Json.y4s_1 = true;
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
  protoOf(Companion_44).nbr = function () {
    return this.URL_PROTOCOL;
  };
  protoOf(Companion_44).l4u = function () {
    return this.json;
  };
  var Companion_instance_50;
  function Companion_getInstance_46() {
    if (Companion_instance_50 == null)
      new Companion_44();
    return Companion_instance_50;
  }
  function DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.wbr_1 = this$0;
    this.xbr_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).q83 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).ac = function ($completion) {
    return this.q83($completion);
  };
  protoOf(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.wbr_1.ibj(this.xbr_1, this);
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
  protoOf(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).ja = function (completion) {
    return new DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this.wbr_1, this.xbr_1, completion);
  };
  function DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.q83($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.hbs_1 = this$0;
    this.ibs_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).tbj = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).ac = function ($completion) {
    return this.tbj($completion);
  };
  protoOf(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.hbs_1.ubj(this.ibs_1, this);
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
  protoOf(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).ja = function (completion) {
    return new DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this.hbs_1, this.ibs_1, completion);
  };
  function DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.tbj($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.rbs_1 = this$0;
    this.sbs_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$resolveAsync$slambda).cbg = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$resolveAsync$slambda).ac = function ($completion) {
    return this.cbg($completion);
  };
  protoOf(DidWebResolver$resolveAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.rbs_1.nb7(this.sbs_1, this);
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
  protoOf(DidWebResolver$resolveAsync$slambda).ja = function (completion) {
    return new DidWebResolver$resolveAsync$slambda(this.rbs_1, this.sbs_1, completion);
  };
  function DidWebResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidWebResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.cbg($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.bbt_1 = this$0;
    this.cbt_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$resolveToKeysAsync$slambda).x9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$resolveToKeysAsync$slambda).ac = function ($completion) {
    return this.x9w($completion);
  };
  protoOf(DidWebResolver$resolveToKeysAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.bbt_1.y9w(this.cbt_1, this);
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
  protoOf(DidWebResolver$resolveToKeysAsync$slambda).ja = function (completion) {
    return new DidWebResolver$resolveToKeysAsync$slambda(this.bbt_1, this.cbt_1, completion);
  };
  function DidWebResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidWebResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.lbt_1 = this$0;
    this.mbt_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$resolveToKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$resolveToKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(DidWebResolver$resolveToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.lbt_1.r9x(this.mbt_1, this);
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
  protoOf(DidWebResolver$resolveToKeyAsync$slambda).ja = function (completion) {
    return new DidWebResolver$resolveToKeyAsync$slambda(this.lbt_1, this.mbt_1, completion);
  };
  function DidWebResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidWebResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$45(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vbt_1 = _this__u8e3s4;
    this.wbt_1 = did;
  }
  protoOf($resolveCOROUTINE$45).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.xbt_1 = resolveDidToUrl(this.vbt_1, this.wbt_1);
            var tmp_0 = this;
            tmp_0.ybt_1 = this.vbt_1;
            this.zbt_1 = this.ybt_1;
            this.o9_1 = 3;
            var tmp_1 = this;
            tmp_1.bbu_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.cbu_1 = this.zbt_1;
            this.dbu_1 = this.cbu_1;
            var tmp_3 = this;
            tmp_3.ebu_1 = this.dbu_1.ybr_1;
            var tmp_4 = this;
            tmp_4.fbu_1 = this.xbt_1;
            this.gbu_1 = this.ebu_1;
            this.hbu_1 = this.fbu_1;
            var tmp_5 = this;
            tmp_5.ibu_1 = this.gbu_1;
            this.jbu_1 = this.ibu_1;
            var tmp_6 = this;
            tmp_6.kbu_1 = this.jbu_1;
            var tmp_7 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.hbu_1);
            tmp_7.lbu_1 = this_0;
            this.mbu_1 = this.kbu_1;
            this.nbu_1 = this.lbu_1;
            this.nbu_1.j3k_1 = Companion_getInstance().c32_1;
            var tmp_8 = this;
            tmp_8.obu_1 = this.mbu_1;
            var tmp_9 = this;
            tmp_9.pbu_1 = this.nbu_1;
            this.qbu_1 = this.obu_1;
            this.rbu_1 = this.pbu_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.rbu_1, this.qbu_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.sbu_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.sbu_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var it = suspendResult;
            var tmp1 = secondaryConstructor_0(get_jsonObject(Default_getInstance().h4s(it)));
            var tmp_10 = this;
            this.bbu_1;
            tmp_10.abu_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 4;
            this.n9_1 = 5;
            continue $sm;
          case 3:
            this.o9_1 = 4;
            var tmp_11 = this.q9_1;
            if (tmp_11 instanceof Error) {
              var e = this.q9_1;
              var tmp_12 = this;
              tmp_12.abu_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 5;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            throw this.q9_1;
          case 5:
            this.o9_1 = 4;
            var this_1 = this.abu_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw IllegalStateException_init_$Create$_0('Could not resolve DID document: ' + this.wbt_1, tmp0_safe_receiver);
            }

            var response = this_1;
            return new Result(response);
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
  protoOf($resolveCOROUTINE$45)['<set-state>'] = protoOf($resolveCOROUTINE$45).u9;
  protoOf($resolveCOROUTINE$45)['<get-state>'] = protoOf($resolveCOROUTINE$45).v9;
  protoOf($resolveCOROUTINE$45)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$45).w9;
  protoOf($resolveCOROUTINE$45)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$45).x9;
  protoOf($resolveCOROUTINE$45)['<set-result>'] = protoOf($resolveCOROUTINE$45).y9;
  protoOf($resolveCOROUTINE$45)['<get-result>'] = protoOf($resolveCOROUTINE$45).z9;
  protoOf($resolveCOROUTINE$45)['<set-exception>'] = protoOf($resolveCOROUTINE$45).aa;
  protoOf($resolveCOROUTINE$45)['<get-exception>'] = protoOf($resolveCOROUTINE$45).ba;
  protoOf($resolveCOROUTINE$45)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$45).ca;
  protoOf($resolveCOROUTINE$45)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$45).da;
  protoOf($resolveCOROUTINE$45)['<get-context>'] = protoOf($resolveCOROUTINE$45).t9;
  function $resolveToKeyCOROUTINE$46(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bbv_1 = _this__u8e3s4;
    this.cbv_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$46).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.bbv_1.y9w(this.cbv_1, this);
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
            var this_0 = suspendResult.up_1;
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
  protoOf($resolveToKeyCOROUTINE$46)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$46).u9;
  protoOf($resolveToKeyCOROUTINE$46)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$46).v9;
  protoOf($resolveToKeyCOROUTINE$46)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$46).w9;
  protoOf($resolveToKeyCOROUTINE$46)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$46).x9;
  protoOf($resolveToKeyCOROUTINE$46)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$46).y9;
  protoOf($resolveToKeyCOROUTINE$46)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$46).z9;
  protoOf($resolveToKeyCOROUTINE$46)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$46).aa;
  protoOf($resolveToKeyCOROUTINE$46)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$46).ba;
  protoOf($resolveToKeyCOROUTINE$46)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$46).ca;
  protoOf($resolveToKeyCOROUTINE$46)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$46).da;
  protoOf($resolveToKeyCOROUTINE$46)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$46).t9;
  function $resolveToKeysCOROUTINE$47(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lbv_1 = _this__u8e3s4;
    this.mbv_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$47).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.n9_1 = 1;
            suspendResult = this.lbv_1.nb7(this.mbv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 2;
            continue $sm;
          case 1:
            this.nbv_1 = suspendResult.up_1;
            suspendResult = new Result(this.nbv_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.obv_1 = suspendResult.up_1;
            if (_Result___get_isFailure__impl__jpiriv(this.obv_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.obv_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.obv_1;
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
              var exception_0 = IllegalStateException_init_$Create$('DID document is null for ' + this.mbv_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_0)));
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_0.pbv_1 = tmp_3;
            var tmp_4 = this;
            var tmp1_elvis_lhs = this.pbv_1.af('verificationMethod');
            var tmp_5;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = IllegalStateException_init_$Create$('No verification method found in DID document for ' + this.mbv_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_1)));
            } else {
              tmp_5 = tmp1_elvis_lhs;
            }

            tmp_4.qbv_1 = tmp_5;
            this.rbv_1 = get_jsonArray(this.qbv_1);
            var tmp_6 = this;
            var tmp0 = this.rbv_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              this.lbv_1;
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
                  var this_2 = this_1.w24();
                  var this_3 = serializer(this_2, createKType(getKClass(JsonObject), arrayOf([]), false));
                  tmp$ret$0 = this_1.x21(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), publicKeyJwk);
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

            tmp_6.sbv_1 = destination;
            if (this.sbv_1.h()) {
              var exception_2 = IllegalStateException_init_$Create$('No valid public key JWKs found in DID document for ' + this.mbv_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_2)));
            }

            this.n9_1 = 3;
            suspendResult = this.lbv_1.ubj(this.sbv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return suspendResult;
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
  protoOf($resolveToKeysCOROUTINE$47)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$47).u9;
  protoOf($resolveToKeysCOROUTINE$47)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$47).v9;
  protoOf($resolveToKeysCOROUTINE$47)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$47).w9;
  protoOf($resolveToKeysCOROUTINE$47)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$47).x9;
  protoOf($resolveToKeysCOROUTINE$47)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$47).y9;
  protoOf($resolveToKeysCOROUTINE$47)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$47).z9;
  protoOf($resolveToKeysCOROUTINE$47)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$47).aa;
  protoOf($resolveToKeysCOROUTINE$47)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$47).ba;
  protoOf($resolveToKeysCOROUTINE$47)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$47).ca;
  protoOf($resolveToKeysCOROUTINE$47)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$47).da;
  protoOf($resolveToKeysCOROUTINE$47)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$47).t9;
  function $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bbw_1 = _this__u8e3s4;
    this.cbw_1 = publicKeyJwks;
  }
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            tmp_0.dbw_1 = this.cbw_1;
            this.ebw_1 = this.dbw_1;
            this.fbw_1 = this.ebw_1.p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.fbw_1.q()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.gbw_1 = this.fbw_1.r();
            var tmp_1 = this;
            tmp_1.hbw_1 = this.gbw_1;
            this.ibw_1 = this.hbw_1;
            this.n9_1 = 2;
            suspendResult = Companion_instance_4.t7i(this.ibw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var result = suspendResult.up_1;
            if (_Result___get_isSuccess__impl__sndoy8(result))
              return new Result(result);
            this.n9_1 = 1;
            continue $sm;
          case 4:
            var exception = NoSuchElementException_init_$Create$('No key could be imported');
            return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
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
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<set-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).u9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).v9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<set-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).w9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).x9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<set-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).y9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).z9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<set-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).aa;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).ba;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<set-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).ca;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).da;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-context>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).t9;
  function $tryConvertPublicKeyJwksToKeysCOROUTINE$49(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rbw_1 = _this__u8e3s4;
    this.sbw_1 = publicKeyJwks;
  }
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            tmp_0.tbw_1 = LinkedHashSet_init_$Create$();
            this.ubw_1 = this.sbw_1.p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.ubw_1.q()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.vbw_1 = this.ubw_1.r();
            this.n9_1 = 2;
            suspendResult = Companion_instance_4.t7i(this.vbw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.n9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var result = suspendResult.up_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              throwOnFailure(result);
              var tmp_1 = _Result___get_value__impl__bjfvqg(result);
              this.tbw_1.n((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
            }

            this.n9_1 = 1;
            continue $sm;
          case 4:
            var tmp_2;
            if (!this.tbw_1.h()) {
              var value = this.tbw_1;
              tmp_2 = _Result___init__impl__xyqfz8(value);
            } else {
              var exception = NoSuchElementException_init_$Create$('No keys could be imported from the DID document');
              tmp_2 = _Result___init__impl__xyqfz8(createFailure(exception));
            }

            return new Result(tmp_2);
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
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<set-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).u9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).v9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<set-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).w9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).x9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<set-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).y9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).z9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<set-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).aa;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).ba;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<set-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).ca;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).da;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-context>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).t9;
  function DidWebResolver(client) {
    Companion_getInstance_46();
    LocalResolverMethod.call(this, 'web');
    this.ybr_1 = client;
  }
  protoOf(DidWebResolver).nb7 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$45(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).r9x = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$46(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).y9w = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$47(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).ibj = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48(this, publicKeyJwks, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).ubj = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertPublicKeyJwksToKeysCOROUTINE$49(this, publicKeyJwks, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).abo = function (publicKeyJwks) {
    var tmp = DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).bbo = function (publicKeyJwks) {
    var tmp = DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).ra0 = function (did) {
    var tmp = DidWebResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).sa0 = function (did) {
    var tmp = DidWebResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).ua0 = function (did) {
    var tmp = DidWebResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function LocalResolverMethod$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.ebx_1 = this$0;
    this.fbx_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolverMethod$resolveAsync$slambda).cbg = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod$resolveAsync$slambda).ac = function ($completion) {
    return this.cbg($completion);
  };
  protoOf(LocalResolverMethod$resolveAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.ebx_1.nb7(this.fbx_1, this);
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
  protoOf(LocalResolverMethod$resolveAsync$slambda).ja = function (completion) {
    return new LocalResolverMethod$resolveAsync$slambda(this.ebx_1, this.fbx_1, completion);
  };
  function LocalResolverMethod$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolverMethod$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.cbg($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolverMethod$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.obx_1 = this$0;
    this.pbx_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolverMethod$resolveToKeysAsync$slambda).x9w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod$resolveToKeysAsync$slambda).ac = function ($completion) {
    return this.x9w($completion);
  };
  protoOf(LocalResolverMethod$resolveToKeysAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.obx_1.y9w(this.pbx_1, this);
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
  protoOf(LocalResolverMethod$resolveToKeysAsync$slambda).ja = function (completion) {
    return new LocalResolverMethod$resolveToKeysAsync$slambda(this.obx_1, this.pbx_1, completion);
  };
  function LocalResolverMethod$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolverMethod$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.x9w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolverMethod$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.ybx_1 = this$0;
    this.zbx_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolverMethod$resolveToKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod$resolveToKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(LocalResolverMethod$resolveToKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.ybx_1.r9x(this.zbx_1, this);
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
  protoOf(LocalResolverMethod$resolveToKeyAsync$slambda).ja = function (completion) {
    return new LocalResolverMethod$resolveToKeyAsync$slambda(this.ybx_1, this.zbx_1, completion);
  };
  function LocalResolverMethod$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolverMethod$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveToKeysCOROUTINE$50(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.iby_1 = _this__u8e3s4;
    this.jby_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$50).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.iby_1.r9x(this.jby_1, this);
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
            var this_0 = suspendResult.up_1;
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
  protoOf($resolveToKeysCOROUTINE$50)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$50).u9;
  protoOf($resolveToKeysCOROUTINE$50)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$50).v9;
  protoOf($resolveToKeysCOROUTINE$50)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$50).w9;
  protoOf($resolveToKeysCOROUTINE$50)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$50).x9;
  protoOf($resolveToKeysCOROUTINE$50)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$50).y9;
  protoOf($resolveToKeysCOROUTINE$50)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$50).z9;
  protoOf($resolveToKeysCOROUTINE$50)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$50).aa;
  protoOf($resolveToKeysCOROUTINE$50)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$50).ba;
  protoOf($resolveToKeysCOROUTINE$50)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$50).ca;
  protoOf($resolveToKeysCOROUTINE$50)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$50).da;
  protoOf($resolveToKeysCOROUTINE$50)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$50).t9;
  function LocalResolverMethod(method) {
    this.method = method;
  }
  protoOf(LocalResolverMethod).n3n = function () {
    return this.method;
  };
  protoOf(LocalResolverMethod).y9w = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$50(this, did, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod).ra0 = function (did) {
    var tmp = LocalResolverMethod$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolverMethod).sa0 = function (did) {
    var tmp = LocalResolverMethod$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolverMethod).ua0 = function (did) {
    var tmp = LocalResolverMethod$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function WaltidServices$initAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WaltidServices$initAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(WaltidServices$initAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(WaltidServices$initAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = WaltidServices_instance.n6m(this);
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
  protoOf(WaltidServices$initAsync$slambda).ja = function (completion) {
    return new WaltidServices$initAsync$slambda(completion);
  };
  function WaltidServices$initAsync$slambda_0(resultContinuation) {
    var i = new WaltidServices$initAsync$slambda(resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function WaltidServices$minimalInitAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WaltidServices$minimalInitAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(WaltidServices$minimalInitAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(WaltidServices$minimalInitAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = WaltidServices_instance.l9u(this);
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
  protoOf(WaltidServices$minimalInitAsync$slambda).ja = function (completion) {
    return new WaltidServices$minimalInitAsync$slambda(completion);
  };
  function WaltidServices$minimalInitAsync$slambda_0(resultContinuation) {
    var i = new WaltidServices$minimalInitAsync$slambda(resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function WaltidServices() {
  }
  protoOf(WaltidServices).n6m = function ($completion) {
    return DidService_getInstance().init$default(VOID, VOID, $completion);
  };
  protoOf(WaltidServices).l9u = function ($completion) {
    return DidService_getInstance().l9u($completion);
  };
  protoOf(WaltidServices).n6r = function () {
    var tmp = WaltidServices$initAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(WaltidServices).ma0 = function () {
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
    var tmp = new $importKeyCOROUTINE$52($this, element, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function importJwk($this, element, $completion) {
    var tmp = Companion_instance_4.t7i(element.toString(), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  }
  function importBase58($this, content, type, $completion) {
    var tmp = new $importBase58COROUTINE$53($this, content, type, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function importMultibase($this, content, $completion) {
    var tmp = KeyUtils_instance.mbr(content, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  }
  function importHex($this, content, type, $completion) {
    var tmp = new $importHexCOROUTINE$54($this, content, type, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
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
    this.cc2_1 = $element;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyMaterial$getAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeyMaterial$getAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(KeyMaterial$getAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = KeyMaterial_instance.qbe(this.cc2_1, this);
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
  protoOf(KeyMaterial$getAsync$slambda).ja = function (completion) {
    return new KeyMaterial$getAsync$slambda(this.cc2_1, completion);
  };
  function KeyMaterial$getAsync$slambda_0($element, resultContinuation) {
    var i = new KeyMaterial$getAsync$slambda($element, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getCOROUTINE$51(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lc2_1 = _this__u8e3s4;
    this.mc2_1 = element;
  }
  protoOf($getCOROUTINE$51).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.nc2_1 = this.mc2_1;
            var tmp_0 = this.nc2_1;
            if (tmp_0 instanceof JsonObject) {
              this.n9_1 = 1;
              suspendResult = importKey(this.lc2_1, this.mc2_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              throw Exception_init_$Create$('Failed to find public key element: ' + toString_0(this.mc2_1));
            }

          case 1:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.oc2_1 = suspendResult.up_1;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return new Result(this.oc2_1);
          case 4:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 4) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getCOROUTINE$51)['<set-state>'] = protoOf($getCOROUTINE$51).u9;
  protoOf($getCOROUTINE$51)['<get-state>'] = protoOf($getCOROUTINE$51).v9;
  protoOf($getCOROUTINE$51)['<set-exceptionState>'] = protoOf($getCOROUTINE$51).w9;
  protoOf($getCOROUTINE$51)['<get-exceptionState>'] = protoOf($getCOROUTINE$51).x9;
  protoOf($getCOROUTINE$51)['<set-result>'] = protoOf($getCOROUTINE$51).y9;
  protoOf($getCOROUTINE$51)['<get-result>'] = protoOf($getCOROUTINE$51).z9;
  protoOf($getCOROUTINE$51)['<set-exception>'] = protoOf($getCOROUTINE$51).aa;
  protoOf($getCOROUTINE$51)['<get-exception>'] = protoOf($getCOROUTINE$51).ba;
  protoOf($getCOROUTINE$51)['<set-finallyPath>'] = protoOf($getCOROUTINE$51).ca;
  protoOf($getCOROUTINE$51)['<get-finallyPath>'] = protoOf($getCOROUTINE$51).da;
  protoOf($getCOROUTINE$51)['<get-context>'] = protoOf($getCOROUTINE$51).t9;
  function $importKeyCOROUTINE$52(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ibz_1 = _this__u8e3s4;
    this.jbz_1 = element;
  }
  protoOf($importKeyCOROUTINE$52).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 13;
            this.kbz_1 = get_jsonPrimitive(ensureNotNull(get_jsonObject(this.jbz_1).af('type'))).q4u();
            var tmp_0 = this;
            var tmp0_safe_receiver = get_jsonObject(this.jbz_1).af('publicKeyJwk');
            tmp_0.lbz_1 = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            if (this.lbz_1 == null) {
              this.mbz_1 = null;
              this.n9_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.nbz_1 = this.lbz_1;
              this.obz_1 = this.nbz_1;
              var tmp_2 = this;
              tmp_2.pbz_1 = this.obz_1;
              this.qbz_1 = this.pbz_1;
              this.n9_1 = 1;
              suspendResult = importJwk(KeyMaterial_instance, this.qbz_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.rbz_1 = suspendResult.up_1;
            suspendResult = new Result(this.rbz_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            var tmp_3 = this;
            return suspendResult;
          case 3:
            var tmp_4 = this;
            var tmp2_safe_receiver = get_jsonObject(this.jbz_1).af('publicKeyBase58');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            tmp_4.sbz_1 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
            if (this.sbz_1 == null) {
              this.tbz_1 = null;
              this.n9_1 = 6;
              continue $sm;
            } else {
              var tmp_5 = this;
              tmp_5.ubz_1 = this.sbz_1;
              this.vbz_1 = this.ubz_1;
              var tmp_6 = this;
              tmp_6.wbz_1 = this.vbz_1;
              this.xbz_1 = this.wbz_1;
              this.n9_1 = 4;
              suspendResult = importBase58(KeyMaterial_instance, this.xbz_1, KeyUtils_instance.getKeyTypeForVerificationMaterialType(this.kbz_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 5;
              continue $sm;
            }

          case 4:
            this.ybz_1 = suspendResult.up_1;
            suspendResult = new Result(this.ybz_1);
            this.n9_1 = 5;
            continue $sm;
          case 5:
            var tmp_7 = this;
            return suspendResult;
          case 6:
            var tmp_8 = this;
            var tmp5_safe_receiver = get_jsonObject(this.jbz_1).af('publicKeyMultibase');
            var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : get_jsonPrimitive(tmp5_safe_receiver);
            tmp_8.zbz_1 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.q4u();
            if (this.zbz_1 == null) {
              this.ac0_1 = null;
              this.n9_1 = 9;
              continue $sm;
            } else {
              var tmp_9 = this;
              tmp_9.bc0_1 = this.zbz_1;
              this.cc0_1 = this.bc0_1;
              var tmp_10 = this;
              tmp_10.dc0_1 = this.cc0_1;
              this.ec0_1 = this.dc0_1;
              this.n9_1 = 7;
              suspendResult = importMultibase(KeyMaterial_instance, this.ec0_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 8;
              continue $sm;
            }

          case 7:
            this.fc0_1 = suspendResult.up_1;
            suspendResult = new Result(this.fc0_1);
            this.n9_1 = 8;
            continue $sm;
          case 8:
            var tmp_11 = this;
            return suspendResult;
          case 9:
            var tmp_12 = this;
            var tmp8_safe_receiver = get_jsonObject(this.jbz_1).af('publicKeyHex');
            var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : get_jsonPrimitive(tmp8_safe_receiver);
            tmp_12.gc0_1 = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.q4u();
            if (this.gc0_1 == null) {
              this.hc0_1 = null;
              this.n9_1 = 12;
              continue $sm;
            } else {
              var tmp_13 = this;
              tmp_13.ic0_1 = this.gc0_1;
              this.jc0_1 = this.ic0_1;
              var tmp_14 = this;
              tmp_14.kc0_1 = this.jc0_1;
              this.lc0_1 = this.kc0_1;
              this.n9_1 = 10;
              suspendResult = importHex(KeyMaterial_instance, this.lc0_1, KeyUtils_instance.getKeyTypeForVerificationMaterialType(this.kbz_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 11;
              continue $sm;
            }

          case 10:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 11;
            continue $sm;
          case 11:
            var tmp_15 = this;
            return suspendResult;
          case 12:
            throw IllegalArgumentException_init_$Create$('Public key format not supported: ' + this.jbz_1.toString() + '.');
          case 13:
            throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.o9_1 === 13) {
          throw e;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e;
        }
      }
     while (true);
  };
  function $importBase58COROUTINE$53(_this__u8e3s4, content, type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.uc0_1 = _this__u8e3s4;
    this.vc0_1 = content;
    this.wc0_1 = type;
  }
  protoOf($importBase58COROUTINE$53).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.xc0_1 = this.uc0_1;
            this.yc0_1 = this.xc0_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.ac1_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.bc1_1 = this.yc0_1;
            this.cc1_1 = this.bc1_1;
            this.n9_1 = 1;
            suspendResult = Companion_instance_4.a85(this.wc0_1, decodeBase58(this.vc0_1), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.ac1_1;
            tmp_3.zc0_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof Error) {
              var e = this.q9_1;
              var tmp_5 = this;
              tmp_5.zc0_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.zc0_1);
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
  function $importHexCOROUTINE$54(_this__u8e3s4, content, type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lc1_1 = _this__u8e3s4;
    this.mc1_1 = content;
    this.nc1_1 = type;
  }
  protoOf($importHexCOROUTINE$54).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.oc1_1 = this.lc1_1;
            this.pc1_1 = this.oc1_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.rc1_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.sc1_1 = this.pc1_1;
            this.tc1_1 = this.sc1_1;
            this.n9_1 = 1;
            suspendResult = Companion_instance_4.a85(this.nc1_1, fromHexString(this.tc1_1, this.mc1_1), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.rc1_1;
            tmp_3.qc1_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof Error) {
              var e = this.q9_1;
              var tmp_5 = this;
              tmp_5.qc1_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.qc1_1);
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
  function KeyMaterial() {
  }
  protoOf(KeyMaterial).qbe = function (element, $completion) {
    var tmp = new $getCOROUTINE$51(this, element, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeyMaterial).pc2 = function (element) {
    var tmp = KeyMaterial$getAsync$slambda_0(element, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var KeyMaterial_instance;
  function KeyMaterial_getInstance() {
    return KeyMaterial_instance;
  }
  function KeyUtils$fromPublicKeyMultiBaseAsync$slambda($identifier, resultContinuation) {
    this.yc2_1 = $identifier;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyUtils$fromPublicKeyMultiBaseAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeyUtils$fromPublicKeyMultiBaseAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(KeyUtils$fromPublicKeyMultiBaseAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = KeyUtils_instance.mbr(this.yc2_1, this);
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
  protoOf(KeyUtils$fromPublicKeyMultiBaseAsync$slambda).ja = function (completion) {
    return new KeyUtils$fromPublicKeyMultiBaseAsync$slambda(this.yc2_1, completion);
  };
  function KeyUtils$fromPublicKeyMultiBaseAsync$slambda_0($identifier, resultContinuation) {
    var i = new KeyUtils$fromPublicKeyMultiBaseAsync$slambda($identifier, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $fromPublicKeyMultiBaseCOROUTINE$55(_this__u8e3s4, identifier, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hc3_1 = _this__u8e3s4;
    this.ic3_1 = identifier;
  }
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.jc3_1 = MultiBaseUtils_instance.v9c(this.ic3_1);
            this.kc3_1 = MultiCodecUtils_getInstance().getMultiCodecKeyCodeUsingString(this.ic3_1);
            if (this.kc3_1 === _UInt___init__impl__l7qpdl(60241)) {
              this.n9_1 = 2;
              suspendResult = Companion_instance_4.t7i(decodeToString(this.jc3_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 3;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.mc3_1 = Companion_instance_2;
              this.n9_1 = 1;
              suspendResult = Companion_instance_4.a85(MultiCodecUtils_getInstance().getKeyTypeFromKeyCode(this.kc3_1), this.jc3_1, null, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp1 = suspendResult;
            var tmp_1 = this;
            this.mc3_1;
            tmp_1.lc3_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 4;
            continue $sm;
          case 2:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.lc3_1 = suspendResult.up_1;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return new Result(this.lc3_1);
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
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<set-state>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).u9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-state>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).v9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<set-exceptionState>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).w9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-exceptionState>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).x9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<set-result>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).y9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-result>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).z9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<set-exception>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).aa;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-exception>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).ba;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<set-finallyPath>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).ca;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-finallyPath>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).da;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-context>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).t9;
  function KeyUtils() {
  }
  protoOf(KeyUtils).mbr = function (identifier, $completion) {
    var tmp = new $fromPublicKeyMultiBaseCOROUTINE$55(this, identifier, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
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
        var tmp$ret$1 = element.s2_1.toLowerCase();
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
  protoOf(KeyUtils).nc3 = function (identifier) {
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
    tmp.oc3_1 = ['verificationMethod', 'assertionMethod', 'capabilityInvocation', 'capabilityDelegation', 'keyAgreement', 'authentication'];
  }
  protoOf(VerificationMaterial).get = function (document) {
    var tmp0 = this.oc3_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = tmp0.length;
      while (inductionVariable < last) {
        var element = tmp0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (get_jsonObject(document).n2().w(element)) {
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
  protoOf($serializer_9).n2c = typeParametersSerializers;
  defineProp(protoOf(RegisteredServiceType), 'name', protoOf(RegisteredServiceType).u2);
  defineProp(protoOf(RegisteredServiceType), 'ordinal', protoOf(RegisteredServiceType).v2);
  defineProp(protoOf(VerificationMaterialType), 'name', protoOf(VerificationMaterialType).u2);
  defineProp(protoOf(VerificationMaterialType), 'ordinal', protoOf(VerificationMaterialType).v2);
  defineProp(protoOf(VerificationMethodType), 'name', protoOf(VerificationMethodType).u2);
  defineProp(protoOf(VerificationMethodType), 'ordinal', protoOf(VerificationMethodType).v2);
  defineProp(protoOf(VerificationRelationshipType), 'name', protoOf(VerificationRelationshipType).u2);
  defineProp(protoOf(VerificationRelationshipType), 'ordinal', protoOf(VerificationRelationshipType).v2);
  protoOf($serializer_10).n2c = typeParametersSerializers;
  defineProp(protoOf(LocalRegistrar), 'name', function () {
    return this.u2();
  });
  defineProp(protoOf(UniregistrarRegistrar), 'name', function () {
    return this.u2();
  });
  protoOf($serializer_11).n2c = typeParametersSerializers;
  protoOf($serializer_12).n2c = typeParametersSerializers;
  protoOf($serializer_13).n2c = typeParametersSerializers;
  protoOf($serializer_14).n2c = typeParametersSerializers;
  protoOf($serializer_15).n2c = typeParametersSerializers;
  protoOf($serializer_16).n2c = typeParametersSerializers;
  protoOf($serializer_17).n2c = typeParametersSerializers;
  defineProp(protoOf(DidState), 'state', function () {
    return this.v9();
  });
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
  protoOf($serializer_28).n2c = typeParametersSerializers;
  protoOf($serializer_29).n2c = typeParametersSerializers;
  protoOf($serializer_30).n2c = typeParametersSerializers;
  defineProp(protoOf(LocalResolver), 'name', function () {
    return this.u2();
  });
  defineProp(protoOf(UniresolverResolver), 'name', function () {
    return this.u2();
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
    $id$walt$did$dids$registrar.UniregistrarRegistrar.$getSupportedMethodsCOROUTINE$5 = $getSupportedMethodsCOROUTINE$5;
    $id$walt$did$dids$registrar.UniregistrarRegistrar.$createCOROUTINE$7 = $createCOROUTINE$7;
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
    Companion_23.prototype.$buildFromPublicKeySetCOROUTINE$8 = $buildFromPublicKeySetCOROUTINE$8;
    Companion_23.prototype.$buildFromPublicKeySetVerificationConfigurationCOROUTINE$9 = $buildFromPublicKeySetVerificationConfigurationCOROUTINE$9;
    $id$walt$did$dids$registrar$dids.DidDocConfig.$toDidDocumentCOROUTINE$10 = $toDidDocumentCOROUTINE$10;
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
    $id$walt$did$dids$registrar$local$cheqd.DidCheqdRegistrar.$registerCOROUTINE$12 = $registerCOROUTINE$12;
    $id$walt$did$dids$registrar$local$cheqd.DidCheqdRegistrar.$registerByKeyCOROUTINE$13 = $registerByKeyCOROUTINE$13;
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
    $id$walt$did$dids$registrar$local$jwk.DidJwkRegistrar.$registerCOROUTINE$19 = $registerCOROUTINE$19;
    $id$walt$did$dids$registrar$local$jwk.DidJwkRegistrar.$registerByKeyCOROUTINE$20 = $registerByKeyCOROUTINE$20;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$key = $id$walt$did$dids$registrar$local.key || ($id$walt$did$dids$registrar$local.key = {});
    $id$walt$did$dids$registrar$local$key.DidKeyRegistrar = DidKeyRegistrar;
    $id$walt$did$dids$registrar$local$key.DidKeyRegistrar.$registerCOROUTINE$21 = $registerCOROUTINE$21;
    $id$walt$did$dids$registrar$local$key.DidKeyRegistrar.$registerByKeyCOROUTINE$22 = $registerByKeyCOROUTINE$22;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$registrar = $id$walt$did$dids.registrar || ($id$walt$did$dids.registrar = {});
    var $id$walt$did$dids$registrar$local = $id$walt$did$dids$registrar.local || ($id$walt$did$dids$registrar.local = {});
    var $id$walt$did$dids$registrar$local$web = $id$walt$did$dids$registrar$local.web || ($id$walt$did$dids$registrar$local.web = {});
    $id$walt$did$dids$registrar$local$web.DidWebRegistrar = DidWebRegistrar;
    $id$walt$did$dids$registrar$local$web.DidWebRegistrar.$registerCOROUTINE$24 = $registerCOROUTINE$24;
    $id$walt$did$dids$registrar$local$web.DidWebRegistrar.$registerByKeyCOROUTINE$25 = $registerByKeyCOROUTINE$25;
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
    $id$walt$did$dids$resolver.LocalResolver.$resolveCOROUTINE$27 = $resolveCOROUTINE$27;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    $id$walt$did$dids$resolver.UniresolverResolver = UniresolverResolver;
    defineProp($id$walt$did$dids$resolver.UniresolverResolver, 'Companion', Companion_getInstance_45);
    $id$walt$did$dids$resolver.UniresolverResolver.$getSupportedMethodsCOROUTINE$28 = $getSupportedMethodsCOROUTINE$28;
    $id$walt$did$dids$resolver.UniresolverResolver.$resolveCOROUTINE$29 = $resolveCOROUTINE$29;
    $id$walt$did$dids$resolver.UniresolverResolver.$resolveToKeyCOROUTINE$30 = $resolveToKeyCOROUTINE$30;
    $id$walt$did$dids$resolver.UniresolverResolver.$resolveToKeysCOROUTINE$31 = $resolveToKeysCOROUTINE$31;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.DidCheqdResolver = DidCheqdResolver;
    $id$walt$did$dids$resolver$local.DidCheqdResolver.$resolveCOROUTINE$34 = $resolveCOROUTINE$34;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.DidEbsiResolver = DidEbsiResolver;
    $id$walt$did$dids$resolver$local.DidEbsiResolver.$resolveCOROUTINE$36 = $resolveCOROUTINE$36;
    $id$walt$did$dids$resolver$local.DidEbsiResolver.$resolveToKeyCOROUTINE$38 = $resolveToKeyCOROUTINE$38;
    $id$walt$did$dids$resolver$local.DidEbsiResolver.$resolveToKeysCOROUTINE$39 = $resolveToKeysCOROUTINE$39;
    $id$walt$did$dids$resolver$local.DidEbsiResolver.$tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40 = $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40;
    $id$walt$did$dids$resolver$local.DidEbsiResolver.$tryConvertPublicKeyJwksToKeysCOROUTINE$41 = $tryConvertPublicKeyJwksToKeysCOROUTINE$41;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.DidJwkResolver = DidJwkResolver;
    $id$walt$did$dids$resolver$local.DidJwkResolver.$resolveCOROUTINE$42 = $resolveCOROUTINE$42;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.DidKeyResolver = DidKeyResolver;
    $id$walt$did$dids$resolver$local.DidKeyResolver.$resolveCOROUTINE$43 = $resolveCOROUTINE$43;
    $id$walt$did$dids$resolver$local.DidKeyResolver.$resolveToKeyCOROUTINE$44 = $resolveToKeyCOROUTINE$44;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.DidWebResolver = DidWebResolver;
    defineProp($id$walt$did$dids$resolver$local.DidWebResolver, 'Companion', Companion_getInstance_46);
    $id$walt$did$dids$resolver$local.DidWebResolver.$resolveCOROUTINE$45 = $resolveCOROUTINE$45;
    $id$walt$did$dids$resolver$local.DidWebResolver.$resolveToKeyCOROUTINE$46 = $resolveToKeyCOROUTINE$46;
    $id$walt$did$dids$resolver$local.DidWebResolver.$resolveToKeysCOROUTINE$47 = $resolveToKeysCOROUTINE$47;
    $id$walt$did$dids$resolver$local.DidWebResolver.$tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48 = $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48;
    $id$walt$did$dids$resolver$local.DidWebResolver.$tryConvertPublicKeyJwksToKeysCOROUTINE$49 = $tryConvertPublicKeyJwksToKeysCOROUTINE$49;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$dids = $id$walt$did.dids || ($id$walt$did.dids = {});
    var $id$walt$did$dids$resolver = $id$walt$did$dids.resolver || ($id$walt$did$dids.resolver = {});
    var $id$walt$did$dids$resolver$local = $id$walt$did$dids$resolver.local || ($id$walt$did$dids$resolver.local = {});
    $id$walt$did$dids$resolver$local.LocalResolverMethod = LocalResolverMethod;
    $id$walt$did$dids$resolver$local.LocalResolverMethod.$resolveToKeysCOROUTINE$50 = $resolveToKeysCOROUTINE$50;
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
    KeyMaterial.prototype.$getCOROUTINE$51 = $getCOROUTINE$51;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$did = $id$walt.did || ($id$walt.did = {});
    var $id$walt$did$utils = $id$walt$did.utils || ($id$walt$did.utils = {});
    defineProp($id$walt$did$utils, 'KeyUtils', KeyUtils_getInstance);
    KeyUtils.prototype.$fromPublicKeyMultiBaseCOROUTINE$55 = $fromPublicKeyMultiBaseCOROUTINE$55;
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
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = DidService_getInstance;
  _.$_$.b = DidUtils_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=dids.js.map
