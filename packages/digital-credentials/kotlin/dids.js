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
  var protoOf = kotlin_kotlin.$_$.gd;
  var initMetadataForInterface = kotlin_kotlin.$_$.gc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var values = kotlin_id_walt_crypto_waltid_crypto.$_$.m;
  var equals = kotlin_kotlin.$_$.ve;
  var KeyType_Ed25519_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.a;
  var toBoolean = kotlin_kotlin.$_$.hg;
  var Unit_instance = kotlin_kotlin.$_$.a6;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.m3;
  var toString = kotlin_kotlin.$_$.fj;
  var CoroutineImpl = kotlin_kotlin.$_$.gb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.qa;
  var initMetadataForLambda = kotlin_kotlin.$_$.hc;
  var VOID = kotlin_kotlin.$_$.j;
  var Result = kotlin_kotlin.$_$.yh;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ec;
  var setOf = kotlin_kotlin.$_$.n9;
  var throwOnFailure = kotlin_kotlin.$_$.dj;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.q3;
  var THROW_CCE = kotlin_kotlin.$_$.ai;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.o3;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var reversed = kotlin_kotlin.$_$.m9;
  var emptyMap = kotlin_kotlin.$_$.w7;
  var NotImplementedError = kotlin_kotlin.$_$.vh;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var isInterface = kotlin_kotlin.$_$.rc;
  var $runInAsync$ = kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime.$_$.a;
  var initMetadataForObject = kotlin_kotlin.$_$.ic;
  var defineProp = kotlin_kotlin.$_$.vb;
  var listOf = kotlin_kotlin.$_$.x8;
  var removePrefix = kotlin_kotlin.$_$.nf;
  var substringBefore = kotlin_kotlin.$_$.dg;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var substringBefore_0 = kotlin_kotlin.$_$.eg;
  var substringAfter = kotlin_kotlin.$_$.bg;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.l1;
  var ensureNotNull = kotlin_kotlin.$_$.si;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dc;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var objectCreate = kotlin_kotlin.$_$.fd;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var getStringHashCode = kotlin_kotlin.$_$.ac;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.p;
  var lazy = kotlin_kotlin.$_$.yi;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.oi;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.z;
  var toMap = kotlin_kotlin.$_$.da;
  var toString_0 = kotlin_kotlin.$_$.kd;
  var hashCode = kotlin_kotlin.$_$.bc;
  var equals_0 = kotlin_kotlin.$_$.wb;
  var JsonElementSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var JsonUtils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.f;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var KtMap = kotlin_kotlin.$_$.k6;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.t;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a1;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.y;
  var listOf_0 = kotlin_kotlin.$_$.w8;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var THROW_IAE = kotlin_kotlin.$_$.bi;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var Enum = kotlin_kotlin.$_$.oh;
  var isBlank = kotlin_kotlin.$_$.cf;
  var SetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.s;
  var KtSet = kotlin_kotlin.$_$.q6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.p5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var first = kotlin_kotlin.$_$.f8;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var put = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d1;
  var JsonContentPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var Companion_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var Companion_instance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var createAnnotatedEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var enumEntries = kotlin_kotlin.$_$.ib;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.aj;
  var Pair = kotlin_kotlin.$_$.xh;
  var plus = kotlin_kotlin.$_$.h9;
  var Companion_instance_2 = kotlin_kotlin.$_$.v5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l3;
  var createFailure = kotlin_kotlin.$_$.ri;
  var setOf_0 = kotlin_kotlin.$_$.o9;
  var mapCapacity = kotlin_kotlin.$_$.y8;
  var coerceAtLeast = kotlin_kotlin.$_$.pd;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var toSet = kotlin_kotlin.$_$.ka;
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
  var lazyOf = kotlin_kotlin.$_$.xi;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var url = kotlin_io_ktor_ktor_client_core.$_$.u;
  var Companion_getInstance = kotlin_io_ktor_ktor_http.$_$.h;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.x;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.a1;
  var to = kotlin_kotlin.$_$.hj;
  var mapOf = kotlin_kotlin.$_$.z8;
  var emptyList = kotlin_kotlin.$_$.v7;
  var mapOf_0 = kotlin_kotlin.$_$.a9;
  var Companion_getInstance_0 = kotlin_id_walt_crypto_waltid_crypto.$_$.c;
  var LinkedHashSetSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var flatten = kotlin_kotlin.$_$.g8;
  var emptySet = kotlin_kotlin.$_$.x7;
  var UuidUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.j;
  var KtList = kotlin_kotlin.$_$.h6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var LogLevel_BODY_getInstance = kotlin_io_ktor_ktor_client_logging.$_$.b;
  var Companion_instance_4 = kotlin_id_walt_crypto_waltid_crypto.$_$.b;
  var KeyType = kotlin_id_walt_crypto_waltid_crypto.$_$.n;
  var toDoubleOrNull = kotlin_kotlin.$_$.jg;
  var toLongOrNull = kotlin_kotlin.$_$.pg;
  var Long = kotlin_kotlin.$_$.th;
  var toIntOrNull = kotlin_kotlin.$_$.mg;
  var toHexString = kotlin_kotlin.$_$.lg;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.a;
  var first_0 = kotlin_kotlin.$_$.e8;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.u1;
  var contentType = kotlin_io_ktor_ktor_http.$_$.j1;
  var Base64Utils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.d;
  var Default_getInstance_0 = kotlin_kotlin.$_$.g5;
  var isByteArray = kotlin_kotlin.$_$.lc;
  var JsonClassDiscriminator = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var PolymorphicModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a3;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.f1;
  var MultiBaseUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.h;
  var JsonCanonicalizationUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.e;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.a4;
  var MultiCodecUtils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.i;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var contentEquals = kotlin_kotlin.$_$.c7;
  var UInt__hashCode_impl_z2mhuw = kotlin_kotlin.$_$.d4;
  var contentHashCode = kotlin_kotlin.$_$.d7;
  var UInt = kotlin_kotlin.$_$.gi;
  var charSequenceLength = kotlin_kotlin.$_$.sb;
  var UrlEncoderUtil_getInstance = kotlin_net_thauvin_erik_urlencoder_urlencoder_lib.$_$.a;
  var replace = kotlin_kotlin.$_$.rf;
  var split = kotlin_kotlin.$_$.vf;
  var joinToString = kotlin_kotlin.$_$.o8;
  var toMutableMap = kotlin_kotlin.$_$.ia;
  var get_HttpTimeout = kotlin_io_ktor_ktor_client_core.$_$.l;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var firstOrNull = kotlin_kotlin.$_$.c8;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n3;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.r;
  var stackTraceToString = kotlin_kotlin.$_$.cj;
  var RuntimeException_init_$Create$_0 = kotlin_kotlin.$_$.r2;
  var Exception = kotlin_kotlin.$_$.qh;
  var contains = kotlin_kotlin.$_$.ne;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.e1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var decodeToString = kotlin_kotlin.$_$.pe;
  var newThrowable = kotlin_kotlin.$_$.zc;
  var drop = kotlin_kotlin.$_$.t7;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  var startsWith = kotlin_kotlin.$_$.wf;
  var chunked = kotlin_kotlin.$_$.ke;
  var toInt = kotlin_kotlin.$_$.og;
  var toByte = kotlin_kotlin.$_$.hd;
  var toByteArray_0 = kotlin_kotlin.$_$.w9;
  var decodeBase58 = kotlin_id_walt_crypto_waltid_crypto.$_$.o;
  var get_entries = kotlin_id_walt_crypto_waltid_crypto.$_$.l;
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
          var value = tmp1_safe_receiver.p4s();
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
          tmp_2 = toBoolean(tmp3_safe_receiver.p4s());
        }

        var tmp4_elvis_lhs = tmp_2;
        tmp = new DidKeyCreateOptions(tmp_1, tmp4_elvis_lhs == null ? false : tmp4_elvis_lhs);
        break;
      case 'jwk':
        tmp = new DidJwkCreateOptions();
        break;
      case 'web':
        var tmp5_safe_receiver = args.k2('domain');
        var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.p4s();
        var tmp_3 = tmp6_elvis_lhs == null ? '' : tmp6_elvis_lhs;
        var tmp7_safe_receiver = args.k2('path');
        var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.p4s();
        tmp = new DidWebCreateOptions(tmp_3, tmp8_elvis_lhs == null ? '' : tmp8_elvis_lhs);
        break;
      case 'cheqd':
        var tmp9_safe_receiver = args.k2('network');
        var tmp10_elvis_lhs = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.p4s();
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
  protoOf(DidService$minimalInitAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$minimalInitAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = DidService_getInstance().f9s(this);
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
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$registerAsync$slambda($options, resultContinuation) {
    this.o9s_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$registerAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$registerAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = DidService_getInstance().q9s(this.o9s_1, this);
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
    return new DidService$registerAsync$slambda(this.o9s_1, completion);
  };
  function DidService$registerAsync$slambda_0($options, resultContinuation) {
    var i = new DidService$registerAsync$slambda($options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$initAsync$slambda($resolverUrl, $registrarUrl, resultContinuation) {
    this.z9s_1 = $resolverUrl;
    this.a9t_1 = $registrarUrl;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$initAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$initAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = DidService_getInstance().b9t(this.z9s_1, this.a9t_1, this);
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
    return new DidService$initAsync$slambda(this.z9s_1, this.a9t_1, completion);
  };
  function DidService$initAsync$slambda_0($resolverUrl, $registrarUrl, resultContinuation) {
    var i = new DidService$initAsync$slambda($resolverUrl, $registrarUrl, resultContinuation);
    var l = function ($completion) {
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$updateResolversForMethodsAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$updateResolversForMethodsAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$updateResolversForMethodsAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = DidService_getInstance().k9t(this);
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
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$registerDefaultDidMethodByKeyAsync$slambda($method, $key, $args, resultContinuation) {
    this.t9t_1 = $method;
    this.u9t_1 = $key;
    this.v9t_1 = $args;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$registerDefaultDidMethodByKeyAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$registerDefaultDidMethodByKeyAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = DidService_getInstance().w9t(this.t9t_1, this.u9t_1, this.v9t_1, this);
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
    return new DidService$registerDefaultDidMethodByKeyAsync$slambda(this.t9t_1, this.u9t_1, this.v9t_1, completion);
  };
  function DidService$registerDefaultDidMethodByKeyAsync$slambda_0($method, $key, $args, resultContinuation) {
    var i = new DidService$registerDefaultDidMethodByKeyAsync$slambda($method, $key, $args, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$resolveAsync$slambda($did, resultContinuation) {
    this.f9u_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$resolveAsync$slambda).g9u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidService$resolveAsync$slambda).zb = function ($completion) {
    return this.g9u($completion);
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
            suspendResult = DidService_getInstance().h9u(this.f9u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidService$resolveAsync$slambda(this.f9u_1, completion);
  };
  function DidService$resolveAsync$slambda_0($did, resultContinuation) {
    var i = new DidService$resolveAsync$slambda($did, resultContinuation);
    var l = function ($completion) {
      return i.g9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$resolveToKeysAsync$slambda($did, resultContinuation) {
    this.q9u_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$resolveToKeysAsync$slambda).r9u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidService$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.r9u($completion);
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
            suspendResult = DidService_getInstance().s9u(this.q9u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidService$resolveToKeysAsync$slambda(this.q9u_1, completion);
  };
  function DidService$resolveToKeysAsync$slambda_0($did, resultContinuation) {
    var i = new DidService$resolveToKeysAsync$slambda($did, resultContinuation);
    var l = function ($completion) {
      return i.r9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$updateRegistrarsForMethodsAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$updateRegistrarsForMethodsAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService$updateRegistrarsForMethodsAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = DidService_getInstance().b9v(this);
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
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidService$resolveToKeyAsync$slambda($did, resultContinuation) {
    this.k9v_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidService$resolveToKeyAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidService$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = DidService_getInstance().l9v(this.k9v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidService$resolveToKeyAsync$slambda(this.k9v_1, completion);
  };
  function DidService$resolveToKeyAsync$slambda_0($did, resultContinuation) {
    var i = new DidService$resolveToKeyAsync$slambda($did, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $initCOROUTINE$0(_this__u8e3s4, resolverUrl, registrarUrl, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u9v_1 = _this__u8e3s4;
    this.v9v_1 = resolverUrl;
    this.w9v_1 = registrarUrl;
  }
  protoOf($initCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.u9v_1.registerAllResolvers(DidResolverRegistrations_instance.curatedDidResolvers(this.v9v_1));
            this.u9v_1.registerAllRegistrars(DidRegistrarRegistrations_instance.curatedDidRegistrars(this.w9v_1));
            this.m9_1 = 1;
            suspendResult = this.u9v_1.k9t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m9_1 = 2;
            suspendResult = this.u9v_1.b9v(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u9v_1.w9r_1.j6e(DidService$init$lambda);
            this.u9v_1.w9r_1.j6e(DidService$init$lambda_0);
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
    this.f9w_1 = _this__u8e3s4;
  }
  protoOf($minimalInitCOROUTINE$1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.f9w_1.registerAllResolvers(setOf(new LocalResolver()));
            this.f9w_1.registerAllRegistrars(setOf(new LocalRegistrar()));
            this.m9_1 = 1;
            suspendResult = this.f9w_1.k9t(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m9_1 = 2;
            suspendResult = this.f9w_1.b9v(this);
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
    this.o9w_1 = _this__u8e3s4;
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
            tmp_0.p9w_1 = this.o9w_1.didResolvers;
            this.q9w_1 = this.p9w_1;
            this.r9w_1 = this.q9w_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.r9w_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.s9w_1 = this.r9w_1.r();
            var tmp_1 = this;
            tmp_1.t9w_1 = this.s9w_1;
            this.u9w_1 = this.t9w_1;
            this.m9_1 = 2;
            suspendResult = this.u9w_1.v9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var methods = suspendResult.mp_1;
            if (_Result___get_isSuccess__impl__sndoy8(methods)) {
              throwOnFailure(methods);
              var tmp_2 = _Result___get_value__impl__bjfvqg(methods);
              var _iterator__ex2g4s = ((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()).p();
              while (_iterator__ex2g4s.q()) {
                var element = _iterator__ex2g4s.r();
                DidService_getInstance().registerResolverForMethod(element, this.u9w_1);
              }
            } else {
              var tmp_3 = DidService_getInstance().w9r_1;
              tmp_3.k6e(DidService$updateResolversForMethods$lambda(this.u9w_1, methods));
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
    this.e9x_1 = _this__u8e3s4;
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
            tmp_0.f9x_1 = this.e9x_1.didRegistrars;
            this.g9x_1 = this.f9x_1;
            this.h9x_1 = this.g9x_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.h9x_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.i9x_1 = this.h9x_1.r();
            var tmp_1 = this;
            tmp_1.j9x_1 = this.i9x_1;
            this.k9x_1 = this.j9x_1;
            this.m9_1 = 2;
            suspendResult = this.k9x_1.v9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var methods = suspendResult.mp_1;
            if (_Result___get_isSuccess__impl__sndoy8(methods)) {
              throwOnFailure(methods);
              var tmp_2 = _Result___get_value__impl__bjfvqg(methods);
              var _iterator__ex2g4s = ((tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE()).p();
              while (_iterator__ex2g4s.q()) {
                var element = _iterator__ex2g4s.r();
                DidService_getInstance().registerRegistrarForMethod(element, this.k9x_1);
              }
            } else {
              var tmp_3 = DidService_getInstance().w9r_1;
              tmp_3.k6e(DidService$updateRegistrarsForMethods$lambda(this.k9x_1, methods));
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
    this.t9x_1 = _this__u8e3s4;
    this.u9x_1 = method;
    this.v9x_1 = key;
    this.w9x_1 = args;
  }
  protoOf($registerDefaultDidMethodByKeyCOROUTINE$4).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.x9x_1 = getDidOptions(this.t9x_1, this.u9x_1, this.w9x_1);
            this.m9_1 = 1;
            suspendResult = this.t9x_1.y9x(this.u9x_1, this.v9x_1, this.x9x_1, this);
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
    tmp.w9r_1 = tmp_0.q6e(DidService$log$lambda);
    this.didResolvers = ArrayList_init_$Create$();
    this.didRegistrars = ArrayList_init_$Create$();
    this.resolverMethods = HashMap_init_$Create$();
    this.registrarMethods = HashMap_init_$Create$();
  }
  protoOf(DidService).z9x = function () {
    return this.didResolvers;
  };
  protoOf(DidService).a9y = function () {
    return this.didRegistrars;
  };
  protoOf(DidService).b9y = function () {
    return this.resolverMethods;
  };
  protoOf(DidService).c9y = function () {
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
  protoOf(DidService).b9t = function (resolverUrl, registrarUrl, $completion) {
    var tmp = new $initCOROUTINE$0(this, resolverUrl, registrarUrl, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService).init$default = function (resolverUrl, registrarUrl, $completion, $super) {
    resolverUrl = resolverUrl === VOID ? null : resolverUrl;
    registrarUrl = registrarUrl === VOID ? null : registrarUrl;
    return $super === VOID ? this.b9t(resolverUrl, registrarUrl, $completion) : $super.b9t.call(this, resolverUrl, registrarUrl, $completion);
  };
  protoOf(DidService).f9s = function ($completion) {
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
  protoOf(DidService).k9t = function ($completion) {
    var tmp = new $updateResolversForMethodsCOROUTINE$2(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService).b9v = function ($completion) {
    var tmp = new $updateRegistrarsForMethodsCOROUTINE$3(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidService).h9u = function (did, $completion) {
    var tmp = getResolverForDid(this, did).h9u(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidService).l9v = function (did, $completion) {
    var tmp = getResolverForDid(this, did).l9v(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidService).s9u = function (did, $completion) {
    var tmp = getResolverForDid(this, did).s9u(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidService).q9s = function (options, $completion) {
    return getRegistrarForMethod(this, options.method).d9y(options, $completion);
  };
  protoOf(DidService).y9x = function (method, key, options, $completion) {
    return getRegistrarForMethod(this, method).e9y(key, options, $completion);
  };
  protoOf(DidService).registerByKey$default = function (method, key, options, $completion, $super) {
    options = options === VOID ? secondaryConstructor_5(method, emptyMap()) : options;
    return $super === VOID ? this.y9x(method, key, options, $completion) : $super.y9x.call(this, method, key, options, $completion);
  };
  protoOf(DidService).f9y = function (method, key, options, $completion) {
    return this.y9x(method, key, options, $completion);
  };
  protoOf(DidService).w9t = function (method, key, args, $completion) {
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
  protoOf(DidService).g9y = function () {
    var tmp = DidService$minimalInitAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).h9y = function (options) {
    var tmp = DidService$registerAsync$slambda_0(options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).i9y = function (resolverUrl, registrarUrl) {
    var tmp = DidService$initAsync$slambda_0(resolverUrl, registrarUrl, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).initAsync$default = function (resolverUrl, registrarUrl, $super) {
    resolverUrl = resolverUrl === VOID ? null : resolverUrl;
    registrarUrl = registrarUrl === VOID ? null : registrarUrl;
    return $super === VOID ? this.i9y(resolverUrl, registrarUrl) : $super.i9y.call(this, resolverUrl, registrarUrl);
  };
  protoOf(DidService).j9y = function () {
    var tmp = DidService$updateResolversForMethodsAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).k9y = function (method, key, args) {
    var tmp = DidService$registerDefaultDidMethodByKeyAsync$slambda_0(method, key, args, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).l9y = function (did) {
    var tmp = DidService$resolveAsync$slambda_0(did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).m9y = function (did) {
    var tmp = DidService$resolveToKeysAsync$slambda_0(did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).n9y = function () {
    var tmp = DidService$updateRegistrarsForMethodsAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidService).o9y = function (did) {
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
    this.p9y_1 = '^did:([^:]+):(.+)';
  }
  protoOf(DidUtils).q9y = function () {
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
    var tmp0_safe_receiver = Regex_init_$Create$(this_0).te(did);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = ensureNotNull(tmp0_safe_receiver.af().u(2)).ye_1;
    }
    return tmp;
  };
  protoOf(DidUtils).isDidUrl = function (did) {
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '^did:([^:]+):(.+)';
    return Regex_init_$Create$(this_0).qe(did);
  };
  var DidUtils_instance;
  function DidUtils_getInstance() {
    if (DidUtils_instance == null)
      new DidUtils();
    return DidUtils_instance;
  }
  function Companion() {
  }
  protoOf(Companion).l4s = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_5;
  function Companion_getInstance_1() {
    return Companion_instance_5;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidCheqdDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('type', false);
    tmp0_serialDesc.w29('controller', false);
    tmp0_serialDesc.w29('publicKeyJwk', false);
    this.r9y_1 = tmp0_serialDesc;
  }
  protoOf($serializer).s9y = function (encoder, value) {
    var tmp0_desc = this.r9y_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.id);
    tmp1_output.v23(tmp0_desc, 1, value.type);
    tmp1_output.v23(tmp0_desc, 2, value.controller);
    tmp1_output.x23(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer).u1y = function (encoder, value) {
    return this.s9y(encoder, value instanceof VerificationMethod ? value : THROW_CCE());
  };
  protoOf($serializer).v1y = function (decoder) {
    var tmp0_desc = this.r9y_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.g22(tmp0_desc);
    if (tmp8_input.w22()) {
      tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.h22(tmp0_desc);
    return VerificationMethod_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).t1y = function () {
    return this.r9y_1;
  };
  protoOf($serializer).l2a = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance().r9y_1);
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
  protoOf(VerificationMethod).w69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod).t9y = function () {
    return this.type;
  };
  protoOf(VerificationMethod).u9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod).v9y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod).cc = function () {
    return this.id;
  };
  protoOf(VerificationMethod).dc = function () {
    return this.type;
  };
  protoOf(VerificationMethod).qp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod).j6y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod).w9y = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.w9y(id, type, controller, publicKeyJwk) : $super.w9y.call(this, id, type, controller, publicKeyJwk);
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
    tmp.x9y_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidCheqdDocument$Companion$$childSerializers$_anonymous__8g422j_5)];
  }
  protoOf(Companion_0).l4s = function () {
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
    tmp0_serialDesc.w29('@context', true);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('verificationMethod', false);
    tmp0_serialDesc.w29('assertionMethod', false);
    tmp0_serialDesc.w29('authentication', false);
    tmp0_serialDesc.w29('capabilityInvocation', false);
    tmp0_serialDesc.w29('capabilityDelegation', false);
    tmp0_serialDesc.w29('keyAgreement', false);
    this.y9y_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).z9y = function (encoder, value) {
    var tmp0_desc = this.y9y_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().x9y_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    tmp1_output.v23(tmp0_desc, 1, value.id);
    tmp1_output.z23(tmp0_desc, 2, tmp2_cached[2].z(), value.verificationMethod);
    tmp1_output.z23(tmp0_desc, 3, tmp2_cached[3].z(), value.assertionMethod);
    tmp1_output.z23(tmp0_desc, 4, tmp2_cached[4].z(), value.authentication);
    tmp1_output.z23(tmp0_desc, 5, tmp2_cached[5].z(), value.capabilityInvocation);
    tmp1_output.z23(tmp0_desc, 6, tmp2_cached[6].z(), value.capabilityDelegation);
    tmp1_output.z23(tmp0_desc, 7, tmp2_cached[7].z(), value.keyAgreement);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_0).u1y = function (encoder, value) {
    return this.z9y(encoder, value instanceof DidCheqdDocument ? value : THROW_CCE());
  };
  protoOf($serializer_0).v1y = function (decoder) {
    var tmp0_desc = this.y9y_1;
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
    var tmp12_input = decoder.g22(tmp0_desc);
    var tmp13_cached = Companion_getInstance_2().x9y_1;
    if (tmp12_input.w22()) {
      tmp4_local0 = tmp12_input.s22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.u22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.u22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.u22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.u22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.u22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.u22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.s22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.u22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.u22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.u22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.u22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.u22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.u22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.h22(tmp0_desc);
    return DidCheqdDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_0).t1y = function () {
    return this.y9y_1;
  };
  protoOf($serializer_0).l2a = function () {
    var tmp0_cached = Companion_getInstance_2().x9y_1;
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
      throwMissingFieldException(seen0, 254, $serializer_getInstance_0().y9y_1);
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
  protoOf(DidCheqdDocument).w69 = function () {
    return this.id;
  };
  protoOf(DidCheqdDocument).a9z = function () {
    return this.verificationMethod;
  };
  protoOf(DidCheqdDocument).b9z = function () {
    return this.assertionMethod;
  };
  protoOf(DidCheqdDocument).c9z = function () {
    return this.authentication;
  };
  protoOf(DidCheqdDocument).d9z = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidCheqdDocument).e9z = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidCheqdDocument).f9z = function () {
    return this.keyAgreement;
  };
  protoOf(DidCheqdDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidCheqdDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.e4q(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidCheqdDocument).cc = function () {
    return this.context;
  };
  protoOf(DidCheqdDocument).dc = function () {
    return this.id;
  };
  protoOf(DidCheqdDocument).qp = function () {
    return this.verificationMethod;
  };
  protoOf(DidCheqdDocument).j6y = function () {
    return this.assertionMethod;
  };
  protoOf(DidCheqdDocument).q7i = function () {
    return this.authentication;
  };
  protoOf(DidCheqdDocument).i83 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidCheqdDocument).j83 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidCheqdDocument).g9z = function () {
    return this.keyAgreement;
  };
  protoOf(DidCheqdDocument).h9z = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
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
    return $super === VOID ? this.h9z(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.h9z.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
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
    tmp.i9z_1 = [lazy(tmp_0, DidDocument$Companion$$childSerializers$_anonymous__v0p2uo)];
  }
  protoOf(Companion_1).l4s = function () {
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
    tmp0_serialDesc.w29('content', false);
    this.j9z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).k9z = function (encoder, value) {
    var tmp0_desc = this.j9z_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().i9z_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.l9z_1);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_1).u1y = function (encoder, value) {
    return this.k9z(encoder, value instanceof DidDocument ? value : THROW_CCE());
  };
  protoOf($serializer_1).v1y = function (decoder) {
    var tmp0_desc = this.j9z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.g22(tmp0_desc);
    var tmp6_cached = Companion_getInstance_3().i9z_1;
    if (tmp5_input.w22()) {
      tmp4_local0 = tmp5_input.s22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.s22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.h22(tmp0_desc);
    return DidDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_1).t1y = function () {
    return this.j9z_1;
  };
  protoOf($serializer_1).l2a = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_3().i9z_1[0].z()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function DidDocument_init_$Init$_0(seen0, content, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_1().j9z_1);
    }
    $this.l9z_1 = content;
    return $this;
  }
  function DidDocument_init_$Create$(seen0, content, serializationConstructorMarker) {
    return DidDocument_init_$Init$_0(seen0, content, serializationConstructorMarker, objectCreate(protoOf(DidDocument)));
  }
  function DidDocument(content) {
    Companion_getInstance_3();
    this.l9z_1 = content;
  }
  protoOf(DidDocument).equals = function (other) {
    return equals_0(this.l9z_1, other);
  };
  protoOf(DidDocument).hashCode = function () {
    return hashCode(this.l9z_1);
  };
  protoOf(DidDocument).toString = function () {
    return JsonUtils_getInstance().printAsJson(this.l9z_1);
  };
  protoOf(DidDocument).toJsonObject = function () {
    return new JsonObject(this.l9z_1);
  };
  protoOf(DidDocument).h = function () {
    return this.l9z_1.h();
  };
  protoOf(DidDocument).r2n = function (key) {
    return this.l9z_1.i2(key);
  };
  protoOf(DidDocument).i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.r2n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(DidDocument).n4s = function (value) {
    return this.l9z_1.j2(value);
  };
  protoOf(DidDocument).j2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.n4s(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(DidDocument).ze = function (key) {
    return this.l9z_1.k2(key);
  };
  protoOf(DidDocument).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.ze((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(DidDocument).asJsReadonlyMapView = function () {
    return this.l9z_1.asJsReadonlyMapView();
  };
  protoOf(DidDocument).s = function () {
    return this.l9z_1.s();
  };
  protoOf(DidDocument).l2 = function () {
    return this.l9z_1.l2();
  };
  protoOf(DidDocument).m2 = function () {
    return this.l9z_1.m2();
  };
  protoOf(DidDocument).x = function () {
    return this.l9z_1.x();
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
    $this$Json.w4q_1 = false;
    return Unit_instance;
  }
  function Companion_2() {
  }
  protoOf(Companion_2).l4s = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_8;
  function Companion_getInstance_4() {
    return Companion_instance_8;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidEbsiDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('type', false);
    tmp0_serialDesc.w29('controller', false);
    tmp0_serialDesc.w29('publicKeyJwk', false);
    this.m9z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).n9z = function (encoder, value) {
    var tmp0_desc = this.m9z_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.id);
    tmp1_output.v23(tmp0_desc, 1, value.type);
    tmp1_output.v23(tmp0_desc, 2, value.controller);
    tmp1_output.x23(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_2).u1y = function (encoder, value) {
    return this.n9z(encoder, value instanceof VerificationMethod_0 ? value : THROW_CCE());
  };
  protoOf($serializer_2).v1y = function (decoder) {
    var tmp0_desc = this.m9z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.g22(tmp0_desc);
    if (tmp8_input.w22()) {
      tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.h22(tmp0_desc);
    return VerificationMethod_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_2).t1y = function () {
    return this.m9z_1;
  };
  protoOf($serializer_2).l2a = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_2().m9z_1);
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
    tmp.o9z_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, tmp_13, lazy(tmp_14, DidEbsiDocument$Companion$$childSerializers$_anonymous__8jqaoz_6)];
    var tmp_15 = this;
    tmp_15.p9z_1 = Json(VOID, DidEbsiDocument$Companion$json$lambda);
  }
  protoOf(Companion_3).l4s = function () {
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
  protoOf(VerificationMethod_0).w69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_0).t9y = function () {
    return this.type;
  };
  protoOf(VerificationMethod_0).u9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_0).v9y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_0).cc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_0).dc = function () {
    return this.type;
  };
  protoOf(VerificationMethod_0).qp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_0).j6y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_0).w9y = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_0(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_0).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.w9y(id, type, controller, publicKeyJwk) : $super.w9y.call(this, id, type, controller, publicKeyJwk);
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
    var tmp_0 = get_jsonPrimitive(ensureNotNull(didDoc.ze('id'))).p4s();
    var tmp0_safe_receiver = didDoc.ze('controller');
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
        var tmp$ret$0 = get_jsonPrimitive(item).p4s();
        destination.n(tmp$ret$0);
      }
      tmp_1 = destination;
    }
    var tmp_2 = tmp_1;
    var tmp2_safe_receiver = didDoc.ze('verificationMethod');
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
        var id = get_jsonPrimitive(ensureNotNull(verificationMethod.ze('id'))).p4s();
        var type = get_jsonPrimitive(ensureNotNull(verificationMethod.ze('type'))).p4s();
        var controller = get_jsonPrimitive(ensureNotNull(verificationMethod.ze('controller'))).p4s();
        var publicKeyJwk = get_jsonObject(ensureNotNull(verificationMethod.ze('publicKeyJwk')));
        var tmp$ret$3 = new VerificationMethod_0(id, type, controller, publicKeyJwk);
        destination_0.n(tmp$ret$3);
      }
      tmp_3 = destination_0;
    }
    var tmp_4 = tmp_3;
    var tmp4_safe_receiver = didDoc.ze('authentication');
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
        var tmp$ret$6 = get_jsonPrimitive(item_1).p4s();
        destination_1.n(tmp$ret$6);
      }
      tmp_5 = destination_1;
    }
    var tmp_6 = tmp_5;
    var tmp6_safe_receiver = didDoc.ze('assertionMethod');
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
        var tmp$ret$9 = get_jsonPrimitive(item_2).p4s();
        destination_2.n(tmp$ret$9);
      }
      tmp_7 = destination_2;
    }
    var tmp_8 = tmp_7;
    var tmp8_safe_receiver = didDoc.ze('capabilityInvocation');
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
        var tmp$ret$12 = get_jsonPrimitive(item_3).p4s();
        destination_3.n(tmp$ret$12);
      }
      tmp_9 = destination_3;
    }
    var tmp_10 = tmp_9;
    var tmp10_safe_receiver = didDoc.ze('capabilityDelegation');
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
        var tmp$ret$15 = get_jsonPrimitive(item_4).p4s();
        destination_4.n(tmp$ret$15);
      }
      tmp_11 = destination_4;
    }
    var tmp_12 = tmp_11;
    var tmp12_safe_receiver = didDoc.ze('keyAgreement');
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
        var tmp$ret$18 = get_jsonPrimitive(item_5).p4s();
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
    tmp0_serialDesc.w29('@context', true);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('controller', false);
    tmp0_serialDesc.w29('verificationMethod', false);
    tmp0_serialDesc.w29('authentication', false);
    tmp0_serialDesc.w29('assertionMethod', false);
    tmp0_serialDesc.w29('capabilityInvocation', false);
    tmp0_serialDesc.w29('capabilityDelegation', false);
    tmp0_serialDesc.w29('keyAgreement', false);
    this.q9z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).r9z = function (encoder, value) {
    var tmp0_desc = this.q9z_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().o9z_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    tmp1_output.v23(tmp0_desc, 1, value.id);
    tmp1_output.z23(tmp0_desc, 2, tmp2_cached[2].z(), value.controller);
    tmp1_output.z23(tmp0_desc, 3, tmp2_cached[3].z(), value.verificationMethod);
    tmp1_output.z23(tmp0_desc, 4, tmp2_cached[4].z(), value.authentication);
    tmp1_output.z23(tmp0_desc, 5, tmp2_cached[5].z(), value.assertionMethod);
    tmp1_output.z23(tmp0_desc, 6, tmp2_cached[6].z(), value.capabilityInvocation);
    tmp1_output.z23(tmp0_desc, 7, tmp2_cached[7].z(), value.capabilityDelegation);
    tmp1_output.z23(tmp0_desc, 8, tmp2_cached[8].z(), value.keyAgreement);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_3).u1y = function (encoder, value) {
    return this.r9z(encoder, value instanceof DidEbsiDocument ? value : THROW_CCE());
  };
  protoOf($serializer_3).v1y = function (decoder) {
    var tmp0_desc = this.q9z_1;
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
    var tmp13_input = decoder.g22(tmp0_desc);
    var tmp14_cached = Companion_getInstance_5().o9z_1;
    if (tmp13_input.w22()) {
      tmp4_local0 = tmp13_input.s22(tmp0_desc, 0, tmp14_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.u22(tmp0_desc, 2, tmp14_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.u22(tmp0_desc, 3, tmp14_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.u22(tmp0_desc, 4, tmp14_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.u22(tmp0_desc, 5, tmp14_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.u22(tmp0_desc, 6, tmp14_cached[6].z(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.u22(tmp0_desc, 7, tmp14_cached[7].z(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.u22(tmp0_desc, 8, tmp14_cached[8].z(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.s22(tmp0_desc, 0, tmp14_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.u22(tmp0_desc, 2, tmp14_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.u22(tmp0_desc, 3, tmp14_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.u22(tmp0_desc, 4, tmp14_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.u22(tmp0_desc, 5, tmp14_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.u22(tmp0_desc, 6, tmp14_cached[6].z(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.u22(tmp0_desc, 7, tmp14_cached[7].z(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.u22(tmp0_desc, 8, tmp14_cached[8].z(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.h22(tmp0_desc);
    return DidEbsiDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_3).t1y = function () {
    return this.q9z_1;
  };
  protoOf($serializer_3).l2a = function () {
    var tmp0_cached = Companion_getInstance_5().o9z_1;
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
      throwMissingFieldException(seen0, 510, $serializer_getInstance_3().q9z_1);
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
  protoOf(DidEbsiDocument).w69 = function () {
    return this.id;
  };
  protoOf(DidEbsiDocument).u9y = function () {
    return this.controller;
  };
  protoOf(DidEbsiDocument).a9z = function () {
    return this.verificationMethod;
  };
  protoOf(DidEbsiDocument).c9z = function () {
    return this.authentication;
  };
  protoOf(DidEbsiDocument).b9z = function () {
    return this.assertionMethod;
  };
  protoOf(DidEbsiDocument).d9z = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidEbsiDocument).e9z = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidEbsiDocument).f9z = function () {
    return this.keyAgreement;
  };
  protoOf(DidEbsiDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Companion_getInstance_5().p9z_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidEbsiDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.e4q(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidEbsiDocument).cc = function () {
    return this.context;
  };
  protoOf(DidEbsiDocument).dc = function () {
    return this.id;
  };
  protoOf(DidEbsiDocument).qp = function () {
    return this.controller;
  };
  protoOf(DidEbsiDocument).j6y = function () {
    return this.verificationMethod;
  };
  protoOf(DidEbsiDocument).q7i = function () {
    return this.authentication;
  };
  protoOf(DidEbsiDocument).i83 = function () {
    return this.assertionMethod;
  };
  protoOf(DidEbsiDocument).j83 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidEbsiDocument).g9z = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidEbsiDocument).s9z = function () {
    return this.keyAgreement;
  };
  protoOf(DidEbsiDocument).t9z = function (context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement) {
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
    return $super === VOID ? this.t9z(context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.t9z.call(this, context, id, controller, verificationMethod, authentication, assertionMethod, capabilityInvocation, capabilityDelegation, keyAgreement);
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
  protoOf(Companion_4).l4s = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_10;
  function Companion_getInstance_6() {
    return Companion_instance_10;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidJwkDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('type', false);
    tmp0_serialDesc.w29('controller', false);
    tmp0_serialDesc.w29('publicKeyJwk', false);
    this.u9z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).v9z = function (encoder, value) {
    var tmp0_desc = this.u9z_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.id);
    tmp1_output.v23(tmp0_desc, 1, value.type);
    tmp1_output.v23(tmp0_desc, 2, value.controller);
    tmp1_output.x23(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_4).u1y = function (encoder, value) {
    return this.v9z(encoder, value instanceof VerificationMethod_1 ? value : THROW_CCE());
  };
  protoOf($serializer_4).v1y = function (decoder) {
    var tmp0_desc = this.u9z_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.g22(tmp0_desc);
    if (tmp8_input.w22()) {
      tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.h22(tmp0_desc);
    return VerificationMethod_init_$Create$_1(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_4).t1y = function () {
    return this.u9z_1;
  };
  protoOf($serializer_4).l2a = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_4().u9z_1);
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
  protoOf(VerificationMethod_1).w69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_1).t9y = function () {
    return this.type;
  };
  protoOf(VerificationMethod_1).u9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_1).v9y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_1).cc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_1).dc = function () {
    return this.type;
  };
  protoOf(VerificationMethod_1).qp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_1).j6y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_1).w9y = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_1(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_1).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.w9y(id, type, controller, publicKeyJwk) : $super.w9y.call(this, id, type, controller, publicKeyJwk);
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
    tmp.w9z_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidJwkDocument$Companion$$childSerializers$_anonymous__8gktzk_5)];
  }
  protoOf(Companion_5).l4s = function () {
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
    tmp0_serialDesc.w29('@context', true);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('verificationMethod', false);
    tmp0_serialDesc.w29('assertionMethod', false);
    tmp0_serialDesc.w29('authentication', false);
    tmp0_serialDesc.w29('capabilityInvocation', false);
    tmp0_serialDesc.w29('capabilityDelegation', false);
    tmp0_serialDesc.w29('keyAgreement', false);
    this.x9z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).y9z = function (encoder, value) {
    var tmp0_desc = this.x9z_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().w9z_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    tmp1_output.v23(tmp0_desc, 1, value.id);
    tmp1_output.z23(tmp0_desc, 2, tmp2_cached[2].z(), value.verificationMethod);
    tmp1_output.z23(tmp0_desc, 3, tmp2_cached[3].z(), value.assertionMethod);
    tmp1_output.z23(tmp0_desc, 4, tmp2_cached[4].z(), value.authentication);
    tmp1_output.z23(tmp0_desc, 5, tmp2_cached[5].z(), value.capabilityInvocation);
    tmp1_output.z23(tmp0_desc, 6, tmp2_cached[6].z(), value.capabilityDelegation);
    tmp1_output.z23(tmp0_desc, 7, tmp2_cached[7].z(), value.keyAgreement);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_5).u1y = function (encoder, value) {
    return this.y9z(encoder, value instanceof DidJwkDocument ? value : THROW_CCE());
  };
  protoOf($serializer_5).v1y = function (decoder) {
    var tmp0_desc = this.x9z_1;
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
    var tmp12_input = decoder.g22(tmp0_desc);
    var tmp13_cached = Companion_getInstance_7().w9z_1;
    if (tmp12_input.w22()) {
      tmp4_local0 = tmp12_input.s22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.u22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.u22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.u22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.u22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.u22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.u22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.s22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.u22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.u22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.u22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.u22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.u22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.u22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.h22(tmp0_desc);
    return DidJwkDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_5).t1y = function () {
    return this.x9z_1;
  };
  protoOf($serializer_5).l2a = function () {
    var tmp0_cached = Companion_getInstance_7().w9z_1;
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
      throwMissingFieldException(seen0, 254, $serializer_getInstance_5().x9z_1);
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
  protoOf(DidJwkDocument).w69 = function () {
    return this.id;
  };
  protoOf(DidJwkDocument).a9z = function () {
    return this.verificationMethod;
  };
  protoOf(DidJwkDocument).b9z = function () {
    return this.assertionMethod;
  };
  protoOf(DidJwkDocument).c9z = function () {
    return this.authentication;
  };
  protoOf(DidJwkDocument).d9z = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidJwkDocument).e9z = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidJwkDocument).f9z = function () {
    return this.keyAgreement;
  };
  protoOf(DidJwkDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidJwkDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.e4q(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidJwkDocument).cc = function () {
    return this.context;
  };
  protoOf(DidJwkDocument).dc = function () {
    return this.id;
  };
  protoOf(DidJwkDocument).qp = function () {
    return this.verificationMethod;
  };
  protoOf(DidJwkDocument).j6y = function () {
    return this.assertionMethod;
  };
  protoOf(DidJwkDocument).q7i = function () {
    return this.authentication;
  };
  protoOf(DidJwkDocument).i83 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidJwkDocument).j83 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidJwkDocument).g9z = function () {
    return this.keyAgreement;
  };
  protoOf(DidJwkDocument).z9z = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
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
    return $super === VOID ? this.z9z(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.z9z.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
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
  protoOf(Companion_6).l4s = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_12;
  function Companion_getInstance_8() {
    return Companion_instance_12;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidKeyDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('type', false);
    tmp0_serialDesc.w29('controller', false);
    tmp0_serialDesc.w29('publicKeyJwk', false);
    this.aa0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).ba0 = function (encoder, value) {
    var tmp0_desc = this.aa0_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.id);
    tmp1_output.v23(tmp0_desc, 1, value.type);
    tmp1_output.v23(tmp0_desc, 2, value.controller);
    tmp1_output.x23(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_6).u1y = function (encoder, value) {
    return this.ba0(encoder, value instanceof VerificationMethod_2 ? value : THROW_CCE());
  };
  protoOf($serializer_6).v1y = function (decoder) {
    var tmp0_desc = this.aa0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.g22(tmp0_desc);
    if (tmp8_input.w22()) {
      tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.h22(tmp0_desc);
    return VerificationMethod_init_$Create$_2(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_6).t1y = function () {
    return this.aa0_1;
  };
  protoOf($serializer_6).l2a = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_6().aa0_1);
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
  protoOf(VerificationMethod_2).w69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_2).t9y = function () {
    return this.type;
  };
  protoOf(VerificationMethod_2).u9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_2).v9y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_2).cc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_2).dc = function () {
    return this.type;
  };
  protoOf(VerificationMethod_2).qp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_2).j6y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_2).w9y = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_2(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_2).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.w9y(id, type, controller, publicKeyJwk) : $super.w9y.call(this, id, type, controller, publicKeyJwk);
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
    tmp.ca0_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidKeyDocument$Companion$$childSerializers$_anonymous__pz9mcx_5)];
  }
  protoOf(Companion_7).l4s = function () {
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
    tmp0_serialDesc.w29('@context', true);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('verificationMethod', false);
    tmp0_serialDesc.w29('assertionMethod', false);
    tmp0_serialDesc.w29('authentication', false);
    tmp0_serialDesc.w29('capabilityInvocation', false);
    tmp0_serialDesc.w29('capabilityDelegation', false);
    tmp0_serialDesc.w29('keyAgreement', false);
    this.da0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).ea0 = function (encoder, value) {
    var tmp0_desc = this.da0_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().ca0_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    tmp1_output.v23(tmp0_desc, 1, value.id);
    tmp1_output.z23(tmp0_desc, 2, tmp2_cached[2].z(), value.verificationMethod);
    tmp1_output.z23(tmp0_desc, 3, tmp2_cached[3].z(), value.assertionMethod);
    tmp1_output.z23(tmp0_desc, 4, tmp2_cached[4].z(), value.authentication);
    tmp1_output.z23(tmp0_desc, 5, tmp2_cached[5].z(), value.capabilityInvocation);
    tmp1_output.z23(tmp0_desc, 6, tmp2_cached[6].z(), value.capabilityDelegation);
    tmp1_output.z23(tmp0_desc, 7, tmp2_cached[7].z(), value.keyAgreement);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_7).u1y = function (encoder, value) {
    return this.ea0(encoder, value instanceof DidKeyDocument ? value : THROW_CCE());
  };
  protoOf($serializer_7).v1y = function (decoder) {
    var tmp0_desc = this.da0_1;
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
    var tmp12_input = decoder.g22(tmp0_desc);
    var tmp13_cached = Companion_getInstance_9().ca0_1;
    if (tmp12_input.w22()) {
      tmp4_local0 = tmp12_input.s22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.u22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.u22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.u22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.u22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.u22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.u22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.s22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.u22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.u22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.u22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.u22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.u22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.u22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.h22(tmp0_desc);
    return DidKeyDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_7).t1y = function () {
    return this.da0_1;
  };
  protoOf($serializer_7).l2a = function () {
    var tmp0_cached = Companion_getInstance_9().ca0_1;
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
      throwMissingFieldException(seen0, 254, $serializer_getInstance_7().da0_1);
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
  protoOf(DidKeyDocument).w69 = function () {
    return this.id;
  };
  protoOf(DidKeyDocument).a9z = function () {
    return this.verificationMethod;
  };
  protoOf(DidKeyDocument).b9z = function () {
    return this.assertionMethod;
  };
  protoOf(DidKeyDocument).c9z = function () {
    return this.authentication;
  };
  protoOf(DidKeyDocument).d9z = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidKeyDocument).e9z = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidKeyDocument).f9z = function () {
    return this.keyAgreement;
  };
  protoOf(DidKeyDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidKeyDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.e4q(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidKeyDocument).cc = function () {
    return this.context;
  };
  protoOf(DidKeyDocument).dc = function () {
    return this.id;
  };
  protoOf(DidKeyDocument).qp = function () {
    return this.verificationMethod;
  };
  protoOf(DidKeyDocument).j6y = function () {
    return this.assertionMethod;
  };
  protoOf(DidKeyDocument).q7i = function () {
    return this.authentication;
  };
  protoOf(DidKeyDocument).i83 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidKeyDocument).j83 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidKeyDocument).g9z = function () {
    return this.keyAgreement;
  };
  protoOf(DidKeyDocument).fa0 = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
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
    return $super === VOID ? this.fa0(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.fa0.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
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
  protoOf(Companion_8).l4s = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_14;
  function Companion_getInstance_10() {
    return Companion_instance_14;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.document.DidWebDocument.VerificationMethod', this, 4);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('type', false);
    tmp0_serialDesc.w29('controller', false);
    tmp0_serialDesc.w29('publicKeyJwk', false);
    this.ga0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).ha0 = function (encoder, value) {
    var tmp0_desc = this.ga0_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.id);
    tmp1_output.v23(tmp0_desc, 1, value.type);
    tmp1_output.v23(tmp0_desc, 2, value.controller);
    tmp1_output.x23(tmp0_desc, 3, JsonObjectSerializer_getInstance(), value.publicKeyJwk);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_8).u1y = function (encoder, value) {
    return this.ha0(encoder, value instanceof VerificationMethod_3 ? value : THROW_CCE());
  };
  protoOf($serializer_8).v1y = function (decoder) {
    var tmp0_desc = this.ga0_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.g22(tmp0_desc);
    if (tmp8_input.w22()) {
      tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, JsonObjectSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.h22(tmp0_desc);
    return VerificationMethod_init_$Create$_3(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).t1y = function () {
    return this.ga0_1;
  };
  protoOf($serializer_8).l2a = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().ga0_1);
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
  protoOf(VerificationMethod_3).w69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_3).t9y = function () {
    return this.type;
  };
  protoOf(VerificationMethod_3).u9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_3).v9y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_3).cc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_3).dc = function () {
    return this.type;
  };
  protoOf(VerificationMethod_3).qp = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_3).j6y = function () {
    return this.publicKeyJwk;
  };
  protoOf(VerificationMethod_3).w9y = function (id, type, controller, publicKeyJwk) {
    return new VerificationMethod_3(id, type, controller, publicKeyJwk);
  };
  protoOf(VerificationMethod_3).copy = function (id, type, controller, publicKeyJwk, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    controller = controller === VOID ? this.controller : controller;
    publicKeyJwk = publicKeyJwk === VOID ? this.publicKeyJwk : publicKeyJwk;
    return $super === VOID ? this.w9y(id, type, controller, publicKeyJwk) : $super.w9y.call(this, id, type, controller, publicKeyJwk);
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
    tmp.ia0_1 = [tmp_1, null, tmp_3, tmp_5, tmp_7, tmp_9, tmp_11, lazy(tmp_12, DidWebDocument$Companion$$childSerializers$_anonymous__uauzdm_5)];
  }
  protoOf(Companion_9).l4s = function () {
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
    tmp0_serialDesc.w29('@context', true);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('verificationMethod', false);
    tmp0_serialDesc.w29('assertionMethod', false);
    tmp0_serialDesc.w29('authentication', false);
    tmp0_serialDesc.w29('capabilityInvocation', false);
    tmp0_serialDesc.w29('capabilityDelegation', false);
    tmp0_serialDesc.w29('keyAgreement', false);
    this.ja0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).ka0 = function (encoder, value) {
    var tmp0_desc = this.ja0_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().ia0_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    tmp1_output.v23(tmp0_desc, 1, value.id);
    tmp1_output.z23(tmp0_desc, 2, tmp2_cached[2].z(), value.verificationMethod);
    tmp1_output.z23(tmp0_desc, 3, tmp2_cached[3].z(), value.assertionMethod);
    tmp1_output.z23(tmp0_desc, 4, tmp2_cached[4].z(), value.authentication);
    tmp1_output.z23(tmp0_desc, 5, tmp2_cached[5].z(), value.capabilityInvocation);
    tmp1_output.z23(tmp0_desc, 6, tmp2_cached[6].z(), value.capabilityDelegation);
    tmp1_output.z23(tmp0_desc, 7, tmp2_cached[7].z(), value.keyAgreement);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_9).u1y = function (encoder, value) {
    return this.ka0(encoder, value instanceof DidWebDocument ? value : THROW_CCE());
  };
  protoOf($serializer_9).v1y = function (decoder) {
    var tmp0_desc = this.ja0_1;
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
    var tmp12_input = decoder.g22(tmp0_desc);
    var tmp13_cached = Companion_getInstance_11().ia0_1;
    if (tmp12_input.w22()) {
      tmp4_local0 = tmp12_input.s22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.u22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.u22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.u22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.u22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.u22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.u22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.s22(tmp0_desc, 0, tmp13_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.u22(tmp0_desc, 2, tmp13_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.u22(tmp0_desc, 3, tmp13_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.u22(tmp0_desc, 4, tmp13_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.u22(tmp0_desc, 5, tmp13_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.u22(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.u22(tmp0_desc, 7, tmp13_cached[7].z(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.h22(tmp0_desc);
    return DidWebDocument_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  protoOf($serializer_9).t1y = function () {
    return this.ja0_1;
  };
  protoOf($serializer_9).l2a = function () {
    var tmp0_cached = Companion_getInstance_11().ia0_1;
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
      throwMissingFieldException(seen0, 254, $serializer_getInstance_9().ja0_1);
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
  protoOf(DidWebDocument).w69 = function () {
    return this.id;
  };
  protoOf(DidWebDocument).a9z = function () {
    return this.verificationMethod;
  };
  protoOf(DidWebDocument).b9z = function () {
    return this.assertionMethod;
  };
  protoOf(DidWebDocument).c9z = function () {
    return this.authentication;
  };
  protoOf(DidWebDocument).d9z = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidWebDocument).e9z = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidWebDocument).f9z = function () {
    return this.keyAgreement;
  };
  protoOf(DidWebDocument).toMap = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(DidWebDocument), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.e4q(tmp$ret$1, this);
    return toMap(get_jsonObject(tmp$ret$2));
  };
  protoOf(DidWebDocument).cc = function () {
    return this.context;
  };
  protoOf(DidWebDocument).dc = function () {
    return this.id;
  };
  protoOf(DidWebDocument).qp = function () {
    return this.verificationMethod;
  };
  protoOf(DidWebDocument).j6y = function () {
    return this.assertionMethod;
  };
  protoOf(DidWebDocument).q7i = function () {
    return this.authentication;
  };
  protoOf(DidWebDocument).i83 = function () {
    return this.capabilityInvocation;
  };
  protoOf(DidWebDocument).j83 = function () {
    return this.capabilityDelegation;
  };
  protoOf(DidWebDocument).g9z = function () {
    return this.keyAgreement;
  };
  protoOf(DidWebDocument).la0 = function (context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) {
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
    return $super === VOID ? this.la0(context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement) : $super.la0.call(this, context, id, verificationMethod, assertionMethod, authentication, capabilityInvocation, capabilityDelegation, keyAgreement);
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
    return $this.ma0_1.z();
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
    tmp.ma0_1 = lazy(tmp_0, RegisteredServiceType$Companion$_anonymous__m68t26);
  }
  protoOf(Companion_10).l4s = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_10).w2a = function (typeParamsSerializers) {
    return this.l4s();
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
  protoOf(Companion_11).l4s = function () {
    return ServiceSerializer_getInstance();
  };
  var Companion_instance_17;
  function Companion_getInstance_13() {
    return Companion_instance_17;
  }
  function Service(serviceMaps) {
    this.serviceMaps = serviceMaps;
  }
  protoOf(Service).pa0 = function () {
    return this.serviceMaps;
  };
  protoOf(Service).cc = function () {
    return this.serviceMaps;
  };
  protoOf(Service).qa0 = function (serviceMaps) {
    return new Service(serviceMaps);
  };
  protoOf(Service).copy = function (serviceMaps, $super) {
    serviceMaps = serviceMaps === VOID ? this.serviceMaps : serviceMaps;
    return $super === VOID ? this.qa0(serviceMaps) : $super.qa0.call(this, serviceMaps);
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
  protoOf(Companion_12).l4s = function () {
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
  protoOf(ServiceMap).w69 = function () {
    return this.id;
  };
  protoOf(ServiceMap).t9y = function () {
    return this.type;
  };
  protoOf(ServiceMap).ra0 = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceMap).sa0 = function () {
    return this.customProperties;
  };
  protoOf(ServiceMap).cc = function () {
    return this.id;
  };
  protoOf(ServiceMap).dc = function () {
    return this.type;
  };
  protoOf(ServiceMap).qp = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceMap).j6y = function () {
    return this.customProperties;
  };
  protoOf(ServiceMap).ta0 = function (id, type, serviceEndpoint, customProperties) {
    return new ServiceMap(id, type, serviceEndpoint, customProperties);
  };
  protoOf(ServiceMap).copy = function (id, type, serviceEndpoint, customProperties, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    serviceEndpoint = serviceEndpoint === VOID ? this.serviceEndpoint : serviceEndpoint;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.ta0(id, type, serviceEndpoint, customProperties) : $super.ta0.call(this, id, type, serviceEndpoint, customProperties);
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
    this.ua0_1 = SetSerializer(Companion_instance_18.l4s());
    this.va0_1 = this.ua0_1.t1y();
  }
  protoOf(ServiceSerializer).t1y = function () {
    return this.va0_1;
  };
  protoOf(ServiceSerializer).wa0 = function (encoder, value) {
    return encoder.y23(SetSerializer(Companion_instance_18.l4s()), value.serviceMaps);
  };
  protoOf(ServiceSerializer).u1y = function (encoder, value) {
    return this.wa0(encoder, value instanceof Service ? value : THROW_CCE());
  };
  protoOf(ServiceSerializer).v1y = function (decoder) {
    return new Service(decoder.f22(SetSerializer(Companion_instance_18.l4s())));
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
      tmp_0 = element.o4s();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.v22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var tmp$ret$2 = this_0.f4q(tmp$ret$1, element);
      tmp = setOf(tmp$ret$2);
    } else {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_3 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_4 = this_3.v22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_5 = serializer(this_4, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
      tmp = this_3.f4q(tmp$ret$4, element);
    }
    return tmp;
  }
  function getServiceEndpoint($this, element) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (element instanceof JsonPrimitive) {
      tmp_1 = element.o4s();
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
      var this_1 = this_0.v22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(ServiceEndpoint), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      var tmp$ret$2 = this_0.f4q(tmp$ret$1, element);
      tmp = setOf(tmp$ret$2);
    } else {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_3 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_4 = this_3.v22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_5 = serializer(this_4, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ServiceEndpoint), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
      tmp = this_3.f4q(tmp$ret$4, element);
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
      var this_0 = tmp0.v22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      tmp = tmp0.e4q(tmp$ret$1, value_0);
    } else {
      var tmp2 = Default_getInstance();
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var value_1 = value.type;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_2 = tmp2.v22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_3 = serializer(this_2, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
      tmp = tmp2.e4q(tmp$ret$4, value_1);
    }
    // Inline function 'kotlin.let' call
    var it = tmp;
    return _this__u8e3s4.b4t('type', it);
  }
  function putEndpoint($this, _this__u8e3s4, value) {
    var tmp;
    if (value.s() === 1) {
      var tmp0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var value_0 = first(value);
      // Inline function 'kotlinx.serialization.serializer' call
      var this_0 = tmp0.v22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(getKClass(ServiceEndpoint), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      tmp = tmp0.e4q(tmp$ret$1, value_0);
    } else {
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var this_2 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_3 = this_2.v22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_4 = serializer(this_3, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(ServiceEndpoint), arrayOf([]), false))]), false));
      var tmp$ret$4 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
      tmp = this_2.e4q(tmp$ret$4, value);
    }
    // Inline function 'kotlin.let' call
    var it = tmp;
    return _this__u8e3s4.b4t('serviceEndpoint', it);
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
        _this__u8e3s4.b4t(element.y(), element.z());
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function ServiceMapSerializer() {
    ServiceMapSerializer_instance = this;
    this.xa0_1 = Companion_instance.l4s().t1y();
  }
  protoOf(ServiceMapSerializer).t1y = function () {
    return this.xa0_1;
  };
  protoOf(ServiceMapSerializer).v1y = function (decoder) {
    var jsonObject = decoder.f22(Companion_instance.l4s());
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
    var json = ensureNotNull(jsonObject.ze('id'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp2.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false));
    var tmp$ret$8 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp$ret$9 = tmp2.f4q(tmp$ret$8, json);
    return new ServiceMap(tmp$ret$9, getType(this, ensureNotNull(jsonObject.ze('type'))), getServiceEndpoint(this, ensureNotNull(jsonObject.ze('serviceEndpoint'))), getCustomProperties(this, jsonObject));
  };
  protoOf(ServiceMapSerializer).ya0 = function (encoder, value) {
    var tmp = Companion_instance.l4s();
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    put(builder, 'id', value.id);
    putType(ServiceMapSerializer_getInstance(), builder, value);
    putEndpoint(ServiceMapSerializer_getInstance(), builder, value.serviceEndpoint);
    putCustomProperties(ServiceMapSerializer_getInstance(), builder, value.customProperties);
    var tmp$ret$1 = builder.n4r();
    encoder.y23(tmp, tmp$ret$1);
  };
  protoOf(ServiceMapSerializer).u1y = function (encoder, value) {
    return this.ya0(encoder, value instanceof ServiceMap ? value : THROW_CCE());
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
  protoOf(Companion_13).l4s = function () {
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
  protoOf(Companion_14).l4s = function () {
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
  protoOf(ServiceEndpointURL).t3k = function () {
    return this.url;
  };
  protoOf(ServiceEndpointURL).cc = function () {
    return this.url;
  };
  protoOf(ServiceEndpointURL).za0 = function (url) {
    return new ServiceEndpointURL(url);
  };
  protoOf(ServiceEndpointURL).copy = function (url, $super) {
    url = url === VOID ? this.url : url;
    return $super === VOID ? this.za0(url) : $super.za0.call(this, url);
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
  protoOf(Companion_15).l4s = function () {
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
  protoOf(ServiceEndpointObject).aa1 = function () {
    return this.jsonObject;
  };
  protoOf(ServiceEndpointObject).cc = function () {
    return this.jsonObject;
  };
  protoOf(ServiceEndpointObject).ba1 = function (jsonObject) {
    return new ServiceEndpointObject(jsonObject);
  };
  protoOf(ServiceEndpointObject).copy = function (jsonObject, $super) {
    jsonObject = jsonObject === VOID ? this.jsonObject : jsonObject;
    return $super === VOID ? this.ba1(jsonObject) : $super.ba1.call(this, jsonObject);
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
  protoOf(ServiceEndpointBaseSerializer).j4s = function (element) {
    var tmp;
    var tmp_0;
    if (element instanceof JsonPrimitive) {
      tmp_0 = element.o4s();
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = Companion_instance_20.l4s();
    } else {
      if (element instanceof JsonObject) {
        tmp = Companion_instance_21.l4s();
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
    this.ea1_1 = Companion_instance_0.l4s().t1y();
  }
  protoOf(ServiceEndpointURLSerializer).t1y = function () {
    return this.ea1_1;
  };
  protoOf(ServiceEndpointURLSerializer).fa1 = function (encoder, value) {
    return encoder.y23(Companion_instance_1.l4s(), JsonUtils_getInstance().toJsonElement(value.url));
  };
  protoOf(ServiceEndpointURLSerializer).u1y = function (encoder, value) {
    return this.fa1(encoder, value instanceof ServiceEndpointURL ? value : THROW_CCE());
  };
  protoOf(ServiceEndpointURLSerializer).v1y = function (decoder) {
    return new ServiceEndpointURL(decoder.b22());
  };
  var ServiceEndpointURLSerializer_instance;
  function ServiceEndpointURLSerializer_getInstance() {
    if (ServiceEndpointURLSerializer_instance == null)
      new ServiceEndpointURLSerializer();
    return ServiceEndpointURLSerializer_instance;
  }
  function ServiceEndpointObjectSerializer() {
    ServiceEndpointObjectSerializer_instance = this;
    this.ga1_1 = Companion_instance.l4s().t1y();
  }
  protoOf(ServiceEndpointObjectSerializer).t1y = function () {
    return this.ga1_1;
  };
  protoOf(ServiceEndpointObjectSerializer).ha1 = function (encoder, value) {
    return encoder.y23(Companion_instance.l4s(), value.jsonObject);
  };
  protoOf(ServiceEndpointObjectSerializer).u1y = function (encoder, value) {
    return this.ha1(encoder, value instanceof ServiceEndpointObject ? value : THROW_CCE());
  };
  protoOf(ServiceEndpointObjectSerializer).v1y = function (decoder) {
    return new ServiceEndpointObject(decoder.f22(Companion_instance.l4s()));
  };
  var ServiceEndpointObjectSerializer_instance;
  function ServiceEndpointObjectSerializer_getInstance() {
    if (ServiceEndpointObjectSerializer_instance == null)
      new ServiceEndpointObjectSerializer();
    return ServiceEndpointObjectSerializer_instance;
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.ia1_1.z();
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
    tmp.ia1_1 = lazy(tmp_0, VerificationMaterialType$Companion$_anonymous__y5w5w3);
  }
  protoOf(Companion_16).l4s = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_16).w2a = function (typeParamsSerializers) {
    return this.l4s();
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
  protoOf(Companion_17).l4s = function () {
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
  protoOf(VerificationMethod_4).w69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_4).t9y = function () {
    return this.type;
  };
  protoOf(VerificationMethod_4).la1 = function () {
    return this.material;
  };
  protoOf(VerificationMethod_4).u9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_4).sa0 = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethod_4).cc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_4).dc = function () {
    return this.type;
  };
  protoOf(VerificationMethod_4).qp = function () {
    return this.material;
  };
  protoOf(VerificationMethod_4).j6y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_4).q7i = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethod_4).ma1 = function (id, type, material, controller, customProperties) {
    return new VerificationMethod_4(id, type, material, controller, customProperties);
  };
  protoOf(VerificationMethod_4).copy = function (id, type, material, controller, customProperties, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    material = material === VOID ? this.material : material;
    controller = controller === VOID ? this.controller : controller;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.ma1(id, type, material, controller, customProperties) : $super.ma1.call(this, id, type, material, controller, customProperties);
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
      if (!methodValue.r2n(VerificationMaterialType_PublicKeyJwk_getInstance().toString())) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
      ensureNotNull(methodValue.ze(VerificationMaterialType_PublicKeyJwk_getInstance().toString()));
      tmp = new Pair(VerificationMaterialType_PublicKeyJwk_getInstance(), ensureNotNull(methodValue.ze(VerificationMaterialType_PublicKeyJwk_getInstance().toString())));
    } else {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!methodValue.r2n(VerificationMaterialType_PublicKeyMultibase_getInstance().toString())) {
        var message_0 = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message_0));
      }
      ensureNotNull(methodValue.ze(VerificationMaterialType_PublicKeyMultibase_getInstance().toString()));
      tmp = new Pair(VerificationMaterialType_PublicKeyMultibase_getInstance(), ensureNotNull(methodValue.ze(VerificationMaterialType_PublicKeyMultibase_getInstance().toString())));
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
    var tmp = value.ac_1.toString();
    var tmp0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var value_0 = value.bc_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(JsonElement), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp$ret$2 = tmp0.e4q(tmp$ret$1, value_0);
    return _this__u8e3s4.b4t(tmp, tmp$ret$2);
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
        _this__u8e3s4.b4t(element.y(), element.z());
      }
      tmp = Unit_instance;
    }
    return tmp;
  }
  function VerificationMethodSerializer() {
    VerificationMethodSerializer_instance = this;
    this.na1_1 = Companion_instance.l4s().t1y();
  }
  protoOf(VerificationMethodSerializer).t1y = function () {
    return this.na1_1;
  };
  protoOf(VerificationMethodSerializer).v1y = function (decoder) {
    // Inline function 'kotlin.let' call
    var jsonObject = decoder.f22(Companion_instance.l4s());
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
    var json = ensureNotNull(jsonObject.ze('type'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp2.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(VerificationMethodType), arrayOf([]), false));
    var tmp$ret$8 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var type = tmp2.f4q(tmp$ret$8, json);
    var tmp4 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
    var json_0 = ensureNotNull(jsonObject.ze('id'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_2 = tmp4.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(this_2, createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false));
    var tmp$ret$11 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    var tmp0_id = tmp4.f4q(tmp$ret$11, json_0);
    var tmp6 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
    var json_1 = ensureNotNull(jsonObject.ze('controller'));
    // Inline function 'kotlinx.serialization.serializer' call
    var this_4 = tmp6.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_5 = serializer(this_4, createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false));
    var tmp$ret$14 = isInterface(this_5, KSerializer) ? this_5 : THROW_CCE();
    var tmp1_controller = tmp6.f4q(tmp$ret$14, json_1);
    var tmp2_material = getVerificationMaterial(VerificationMethodSerializer_getInstance(), jsonObject, type);
    var tmp3_customProperties = getCustomProperties_0(VerificationMethodSerializer_getInstance(), jsonObject);
    return new VerificationMethod_4(tmp0_id, type, tmp2_material, tmp1_controller, tmp3_customProperties);
  };
  protoOf(VerificationMethodSerializer).oa1 = function (encoder, value) {
    var tmp = Companion_instance.l4s();
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    builder.b4t('id', JsonUtils_getInstance().toJsonElement(value.id));
    builder.b4t('type', JsonUtils_getInstance().toJsonElement(value.type));
    builder.b4t('controller', JsonUtils_getInstance().toJsonElement(value.controller));
    putMaterial(VerificationMethodSerializer_getInstance(), builder, value.material);
    putCustomProperties_0(VerificationMethodSerializer_getInstance(), builder, value.customProperties);
    var tmp$ret$1 = builder.n4r();
    encoder.y23(tmp, tmp$ret$1);
  };
  protoOf(VerificationMethodSerializer).u1y = function (encoder, value) {
    return this.oa1(encoder, value instanceof VerificationMethod_4 ? value : THROW_CCE());
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
    return $this.pa1_1.z();
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
    tmp.pa1_1 = lazy(tmp_0, VerificationMethodType$Companion$_anonymous__8r8jdz);
  }
  protoOf(Companion_18).l4s = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_18).w2a = function (typeParamsSerializers) {
    return this.l4s();
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
  protoOf(Builder).l4s = function () {
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
  protoOf(VerificationRelationship).w69 = function () {
    return this.id;
  };
  protoOf(VerificationRelationship).a9z = function () {
    return this.verificationMethod;
  };
  protoOf(VerificationRelationship).cc = function () {
    return this.id;
  };
  protoOf(VerificationRelationship).dc = function () {
    return this.verificationMethod;
  };
  protoOf(VerificationRelationship).sa1 = function (id, verificationMethod) {
    return new VerificationRelationship(id, verificationMethod);
  };
  protoOf(VerificationRelationship).copy = function (id, verificationMethod, $super) {
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    return $super === VOID ? this.sa1(id, verificationMethod) : $super.sa1.call(this, id, verificationMethod);
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
    this.ta1_1 = Companion_instance_1.l4s().t1y();
  }
  protoOf(VerificationRelationshipSerializer).t1y = function () {
    return this.ta1_1;
  };
  protoOf(VerificationRelationshipSerializer).v1y = function (decoder) {
    var value = decoder.f22(Companion_instance_1.l4s());
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlinx.serialization.json.decodeFromJsonElement' call
      var this_0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.v22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(VerificationMethod_4), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      // Inline function 'kotlin.Companion.success' call
      var value_0 = this_0.f4q(tmp$ret$1, value);
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
      return Builder_instance.buildFromId(get_jsonPrimitive(value).p4s());
    }
  };
  protoOf(VerificationRelationshipSerializer).ua1 = function (encoder, value) {
    if (!(value.verificationMethod == null)) {
      var tmp = Companion_instance_1.l4s();
      var tmp0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
      var value_0 = value.verificationMethod;
      // Inline function 'kotlinx.serialization.serializer' call
      var this_0 = tmp0.v22();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer(this_0, createKType(getKClass(VerificationMethod_4), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      var tmp$ret$2 = tmp0.e4q(tmp$ret$1, value_0);
      encoder.y23(tmp, tmp$ret$2);
    } else {
      encoder.k23(ensureNotNull(value.id));
    }
  };
  protoOf(VerificationRelationshipSerializer).u1y = function (encoder, value) {
    return this.ua1(encoder, value instanceof VerificationRelationship ? value : THROW_CCE());
  };
  var VerificationRelationshipSerializer_instance;
  function VerificationRelationshipSerializer_getInstance() {
    if (VerificationRelationshipSerializer_instance == null)
      new VerificationRelationshipSerializer();
    return VerificationRelationshipSerializer_instance;
  }
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.va1_1.z();
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
    tmp.va1_1 = lazy(tmp_0, VerificationRelationshipType$Companion$_anonymous__mt3iim);
  }
  protoOf(Companion_19).l4s = function () {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(Companion_19).w2a = function (typeParamsSerializers) {
    return this.l4s();
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
    this.ga2_1 = this$0;
    this.ha2_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$createAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidRegistrar$createAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.ga2_1.d9y(this.ha2_1, this);
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
    return new DidRegistrar$createAsync$slambda(this.ga2_1, this.ha2_1, completion);
  };
  function DidRegistrar$createAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidRegistrar$createAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.qa2_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$getSupportedMethodsAsync$slambda).ra2 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidRegistrar$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.ra2($completion);
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
            suspendResult = this.qa2_1.v9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidRegistrar$getSupportedMethodsAsync$slambda(this.qa2_1, completion);
  };
  function DidRegistrar$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.ra2($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.aa3_1 = this$0;
    this.ba3_1 = $key;
    this.ca3_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$createByKeyAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidRegistrar$createByKeyAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.aa3_1.e9y(this.ba3_1, this.ca3_1, this);
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
    return new DidRegistrar$createByKeyAsync$slambda(this.aa3_1, this.ba3_1, this.ca3_1, completion);
  };
  function DidRegistrar$createByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$updateAsync$slambda(this$0, resultContinuation) {
    this.la3_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$updateAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidRegistrar$updateAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = this.la3_1.ma3(this);
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
    return new DidRegistrar$updateAsync$slambda(this.la3_1, completion);
  };
  function DidRegistrar$updateAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidRegistrar$updateAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar$deleteAsync$slambda(this$0, resultContinuation) {
    this.va3_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidRegistrar$deleteAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidRegistrar$deleteAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = this.va3_1.v93(this);
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
    return new DidRegistrar$deleteAsync$slambda(this.va3_1, completion);
  };
  function DidRegistrar$deleteAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidRegistrar$deleteAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidRegistrar() {
  }
  function DidRegistrarRegistrations() {
  }
  protoOf(DidRegistrarRegistrations).aa4 = function (uniregistrarUrl) {
    var tmp = new LocalRegistrar();
    return setOf_0([tmp, new UniregistrarRegistrar(uniregistrarUrl == null ? 'https://uniregistrar.io/1.0' : uniregistrarUrl)]);
  };
  protoOf(DidRegistrarRegistrations).curatedDidRegistrars = function (uniregistrarUrl, $super) {
    uniregistrarUrl = uniregistrarUrl === VOID ? null : uniregistrarUrl;
    return $super === VOID ? this.aa4(uniregistrarUrl) : $super.aa4.call(this, uniregistrarUrl);
  };
  var DidRegistrarRegistrations_instance;
  function DidRegistrarRegistrations_getInstance() {
    return DidRegistrarRegistrations_instance;
  }
  function Companion_20() {
  }
  protoOf(Companion_20).l4s = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_26;
  function Companion_getInstance_22() {
    return Companion_instance_26;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.DidResult', this, 2);
    tmp0_serialDesc.w29('did', false);
    tmp0_serialDesc.w29('didDocument', false);
    this.ba4_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).ca4 = function (encoder, value) {
    var tmp0_desc = this.ba4_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.did);
    tmp1_output.x23(tmp0_desc, 1, $serializer_getInstance_1(), value.didDocument);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_10).u1y = function (encoder, value) {
    return this.ca4(encoder, value instanceof DidResult ? value : THROW_CCE());
  };
  protoOf($serializer_10).v1y = function (decoder) {
    var tmp0_desc = this.ba4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.g22(tmp0_desc);
    if (tmp6_input.w22()) {
      tmp4_local0 = tmp6_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.s22(tmp0_desc, 1, $serializer_getInstance_1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.s22(tmp0_desc, 1, $serializer_getInstance_1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.h22(tmp0_desc);
    return DidResult_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_10).t1y = function () {
    return this.ba4_1;
  };
  protoOf($serializer_10).l2a = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_10().ba4_1);
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
  protoOf(DidResult).da4 = function () {
    return this.did;
  };
  protoOf(DidResult).ea4 = function () {
    return this.didDocument;
  };
  protoOf(DidResult).cc = function () {
    return this.did;
  };
  protoOf(DidResult).dc = function () {
    return this.didDocument;
  };
  protoOf(DidResult).fa4 = function (did, didDocument) {
    return new DidResult(did, didDocument);
  };
  protoOf(DidResult).copy = function (did, didDocument, $super) {
    did = did === VOID ? this.did : did;
    didDocument = didDocument === VOID ? this.didDocument : didDocument;
    return $super === VOID ? this.fa4(did, didDocument) : $super.fa4.call(this, did, didDocument);
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
    var tmp0_elvis_lhs = $this.ha4_1.k2(method);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('No local registrar for method: ' + method);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function LocalRegistrar$createAsync$slambda(this$0, $options, resultContinuation) {
    this.qa4_1 = this$0;
    this.ra4_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$createAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrar$createAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.qa4_1.d9y(this.ra4_1, this);
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
    return new LocalRegistrar$createAsync$slambda(this.qa4_1, this.ra4_1, completion);
  };
  function LocalRegistrar$createAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new LocalRegistrar$createAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.aa5_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$getSupportedMethodsAsync$slambda).ra2 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalRegistrar$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.ra2($completion);
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
            suspendResult = this.aa5_1.v9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new LocalRegistrar$getSupportedMethodsAsync$slambda(this.aa5_1, completion);
  };
  function LocalRegistrar$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.ra2($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.ja5_1 = this$0;
    this.ka5_1 = $key;
    this.la5_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$createByKeyAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrar$createByKeyAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.ja5_1.e9y(this.ka5_1, this.la5_1, this);
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
    return new LocalRegistrar$createByKeyAsync$slambda(this.ja5_1, this.ka5_1, this.la5_1, completion);
  };
  function LocalRegistrar$createByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new LocalRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$updateAsync$slambda(this$0, resultContinuation) {
    this.ua5_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$updateAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrar$updateAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = this.ua5_1.ma3(this);
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
    return new LocalRegistrar$updateAsync$slambda(this.ua5_1, completion);
  };
  function LocalRegistrar$updateAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalRegistrar$updateAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar$deleteAsync$slambda(this$0, resultContinuation) {
    this.da6_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrar$deleteAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrar$deleteAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = this.da6_1.v93(this);
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
    return new LocalRegistrar$deleteAsync$slambda(this.da6_1, completion);
  };
  function LocalRegistrar$deleteAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalRegistrar$deleteAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrar() {
    this.ga4_1 = 'walt.id local registrar';
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
    tmp.ha4_1 = destination;
  }
  protoOf(LocalRegistrar).s2 = function () {
    return this.ga4_1;
  };
  protoOf(LocalRegistrar).v9w = function ($completion) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.ha4_1.m2();
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
  protoOf(LocalRegistrar).d9y = function (options, $completion) {
    return getRegistrarForMethod_0(this, options.method).q9s(options, $completion);
  };
  protoOf(LocalRegistrar).e9y = function (key, options, $completion) {
    return getRegistrarForMethod_0(this, options.method).ea6(key, options, $completion);
  };
  protoOf(LocalRegistrar).ma3 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(LocalRegistrar).v93 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(LocalRegistrar).wa3 = function (options) {
    var tmp = LocalRegistrar$createAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).xa3 = function () {
    var tmp = LocalRegistrar$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).ya3 = function (key, options) {
    var tmp = LocalRegistrar$createByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).za3 = function () {
    var tmp = LocalRegistrar$updateAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrar).m98 = function () {
    var tmp = LocalRegistrar$deleteAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function Companion_21() {
    this.DEFAULT_REGISTRAR_URL = 'https://uniregistrar.io/1.0';
  }
  protoOf(Companion_21).fa6 = function () {
    return this.DEFAULT_REGISTRAR_URL;
  };
  var Companion_instance_27;
  function Companion_getInstance_23() {
    return Companion_instance_27;
  }
  function getMethods($this, $completion) {
    var tmp = new $getMethodsCOROUTINE$6($this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function UniregistrarRegistrar$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.o3j(tmp, UniregistrarRegistrar$http$lambda$lambda);
    defaultRequest($this$HttpClient, UniregistrarRegistrar$http$lambda$lambda_0);
    var tmp_0 = get_Logging();
    $this$HttpClient.o3j(tmp_0, UniregistrarRegistrar$http$lambda$lambda_1);
    return Unit_instance;
  }
  function UniregistrarRegistrar$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function UniregistrarRegistrar$http$lambda$lambda_0($this$defaultRequest) {
    header($this$defaultRequest, HttpHeaders_getInstance().p2w_1, Application_getInstance().x2t_1);
    return Unit_instance;
  }
  function UniregistrarRegistrar$http$lambda$lambda_1($this$install) {
    $this$install.n5e(get_DEFAULT(Companion_instance_3));
    $this$install.m5e_1 = LogLevel_ALL_getInstance();
    return Unit_instance;
  }
  function UniregistrarRegistrar$createAsync$slambda(this$0, $options, resultContinuation) {
    this.na7_1 = this$0;
    this.oa7_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$createAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(UniregistrarRegistrar$createAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.na7_1.d9y(this.oa7_1, this);
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
    return new UniregistrarRegistrar$createAsync$slambda(this.na7_1, this.oa7_1, completion);
  };
  function UniregistrarRegistrar$createAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new UniregistrarRegistrar$createAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.za7_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$getSupportedMethodsAsync$slambda).ra2 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniregistrarRegistrar$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.ra2($completion);
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
            suspendResult = this.za7_1.v9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new UniregistrarRegistrar$getSupportedMethodsAsync$slambda(this.za7_1, completion);
  };
  function UniregistrarRegistrar$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniregistrarRegistrar$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.ra2($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.ia8_1 = this$0;
    this.ja8_1 = $key;
    this.ka8_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$createByKeyAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(UniregistrarRegistrar$createByKeyAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.ia8_1.e9y(this.ja8_1, this.ka8_1, this);
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
    return new UniregistrarRegistrar$createByKeyAsync$slambda(this.ia8_1, this.ja8_1, this.ka8_1, completion);
  };
  function UniregistrarRegistrar$createByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new UniregistrarRegistrar$createByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$updateAsync$slambda(this$0, resultContinuation) {
    this.ta8_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$updateAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(UniregistrarRegistrar$updateAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = this.ta8_1.ma3(this);
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
    return new UniregistrarRegistrar$updateAsync$slambda(this.ta8_1, completion);
  };
  function UniregistrarRegistrar$updateAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniregistrarRegistrar$updateAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniregistrarRegistrar$deleteAsync$slambda(this$0, resultContinuation) {
    this.ca9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniregistrarRegistrar$deleteAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(UniregistrarRegistrar$deleteAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = this.ca9_1.v93(this);
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
    return new UniregistrarRegistrar$deleteAsync$slambda(this.ca9_1, completion);
  };
  function UniregistrarRegistrar$deleteAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniregistrarRegistrar$deleteAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getSupportedMethodsCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.la9_1 = _this__u8e3s4;
  }
  protoOf($getSupportedMethodsCOROUTINE$5).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.ma9_1 = this.la9_1;
            this.na9_1 = this.ma9_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.pa9_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.qa9_1 = this.na9_1;
            this.ra9_1 = this.qa9_1;
            this.m9_1 = 1;
            suspendResult = getMethods(this.ra9_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = lazyOf(ARGUMENT);
            var tmp1 = ARGUMENT_0.z();
            var tmp_3 = this;
            this.pa9_1;
            tmp_3.oa9_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.oa9_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.oa9_1);
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
  protoOf($getSupportedMethodsCOROUTINE$5)['<set-state>'] = protoOf($getSupportedMethodsCOROUTINE$5).t9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-state>'] = protoOf($getSupportedMethodsCOROUTINE$5).u9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<set-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$5).v9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$5).w9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<set-result>'] = protoOf($getSupportedMethodsCOROUTINE$5).x9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-result>'] = protoOf($getSupportedMethodsCOROUTINE$5).y9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<set-exception>'] = protoOf($getSupportedMethodsCOROUTINE$5).z9;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-exception>'] = protoOf($getSupportedMethodsCOROUTINE$5).aa;
  protoOf($getSupportedMethodsCOROUTINE$5)['<set-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$5).ba;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$5).ca;
  protoOf($getSupportedMethodsCOROUTINE$5)['<get-context>'] = protoOf($getSupportedMethodsCOROUTINE$5).s9;
  function $getMethodsCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oa6_1 = _this__u8e3s4;
  }
  protoOf($getMethodsCOROUTINE$6).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.pa6_1 = this.oa6_1.qa7_1;
            var tmp_1 = this;
            tmp_1.qa6_1 = this.oa6_1.registrarUrl + '/methods';
            this.ra6_1 = this.pa6_1;
            this.sa6_1 = this.qa6_1;
            var tmp_2 = this;
            tmp_2.ta6_1 = this.ra6_1;
            this.ua6_1 = this.ta6_1;
            var tmp_3 = this;
            tmp_3.va6_1 = this.ua6_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.sa6_1);
            tmp_4.wa6_1 = this_0;
            this.xa6_1 = this.va6_1;
            this.ya6_1 = this.wa6_1;
            this.ya6_1.i3i_1 = Companion_getInstance().b30_1;
            var tmp_5 = this;
            tmp_5.za6_1 = this.xa6_1;
            var tmp_6 = this;
            tmp_6.aa7_1 = this.ya6_1;
            this.ba7_1 = this.za6_1;
            this.ca7_1 = this.aa7_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.ca7_1, this.ba7_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.da7_1 = suspendResult;
            this.ea7_1 = this.da7_1;
            this.m9_1 = 2;
            var tmp_7 = this.ea7_1.p3l();
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

            suspendResult = tmp_7.s3k(new TypeInfo(tmp_8, tmp_9), this);
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
              destination.n(get_jsonPrimitive(item).p4s());
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
  function $createCOROUTINE$7(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.aaa_1 = _this__u8e3s4;
    this.baa_1 = options;
  }
  protoOf($createCOROUTINE$7).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.caa_1 = this.aaa_1.qa7_1;
            var tmp_1 = this;
            tmp_1.daa_1 = this.aaa_1.registrarUrl + '/create?method=' + this.baa_1.method;
            this.eaa_1 = this.caa_1;
            this.faa_1 = this.daa_1;
            var tmp_2 = this;
            tmp_2.gaa_1 = this.eaa_1;
            this.haa_1 = this.gaa_1;
            var tmp_3 = this;
            tmp_3.iaa_1 = this.haa_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.faa_1);
            var body = this.baa_1.config;
            if (body == null) {
              this_0.k3i_1 = NullBody_instance;
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
              this_0.d3o(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3i_1 = body;
                this_0.d3o(null);
              } else {
                this_0.k3i_1 = body;
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
                this_0.d3o(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.jaa_1 = this_0;
            this.kaa_1 = this.iaa_1;
            this.laa_1 = this.jaa_1;
            this.laa_1.i3i_1 = Companion_getInstance().c30_1;
            var tmp_11 = this;
            tmp_11.maa_1 = this.kaa_1;
            var tmp_12 = this;
            tmp_12.naa_1 = this.laa_1;
            this.oaa_1 = this.maa_1;
            this.paa_1 = this.naa_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.paa_1, this.oaa_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.qaa_1 = suspendResult;
            this.raa_1 = this.qaa_1;
            this.m9_1 = 2;
            var tmp_13 = this.raa_1.p3l();
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

            suspendResult = tmp_13.s3k(new TypeInfo(tmp_14, tmp_15), this);
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
  protoOf($createCOROUTINE$7)['<set-state>'] = protoOf($createCOROUTINE$7).t9;
  protoOf($createCOROUTINE$7)['<get-state>'] = protoOf($createCOROUTINE$7).u9;
  protoOf($createCOROUTINE$7)['<set-exceptionState>'] = protoOf($createCOROUTINE$7).v9;
  protoOf($createCOROUTINE$7)['<get-exceptionState>'] = protoOf($createCOROUTINE$7).w9;
  protoOf($createCOROUTINE$7)['<set-result>'] = protoOf($createCOROUTINE$7).x9;
  protoOf($createCOROUTINE$7)['<get-result>'] = protoOf($createCOROUTINE$7).y9;
  protoOf($createCOROUTINE$7)['<set-exception>'] = protoOf($createCOROUTINE$7).z9;
  protoOf($createCOROUTINE$7)['<get-exception>'] = protoOf($createCOROUTINE$7).aa;
  protoOf($createCOROUTINE$7)['<set-finallyPath>'] = protoOf($createCOROUTINE$7).ba;
  protoOf($createCOROUTINE$7)['<get-finallyPath>'] = protoOf($createCOROUTINE$7).ca;
  protoOf($createCOROUTINE$7)['<get-context>'] = protoOf($createCOROUTINE$7).s9;
  function UniregistrarRegistrar(registrarUrl) {
    registrarUrl = registrarUrl === VOID ? 'https://uniregistrar.io/1.0' : registrarUrl;
    this.registrarUrl = registrarUrl;
    this.pa7_1 = 'uniresolver @ ' + this.registrarUrl;
    var tmp = this;
    tmp.qa7_1 = HttpClient(UniregistrarRegistrar$http$lambda);
  }
  protoOf(UniregistrarRegistrar).saa = function (_set____db54di) {
    this.registrarUrl = _set____db54di;
  };
  protoOf(UniregistrarRegistrar).taa = function () {
    return this.registrarUrl;
  };
  protoOf(UniregistrarRegistrar).s2 = function () {
    return this.pa7_1;
  };
  protoOf(UniregistrarRegistrar).v9w = function ($completion) {
    var tmp = new $getSupportedMethodsCOROUTINE$5(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniregistrarRegistrar).d9y = function (options, $completion) {
    var tmp = new $createCOROUTINE$7(this, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(UniregistrarRegistrar).e9y = function (key, options, $completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(UniregistrarRegistrar).ma3 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(UniregistrarRegistrar).v93 = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(UniregistrarRegistrar).wa3 = function (options) {
    var tmp = UniregistrarRegistrar$createAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).xa3 = function () {
    var tmp = UniregistrarRegistrar$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).ya3 = function (key, options) {
    var tmp = UniregistrarRegistrar$createByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).za3 = function () {
    var tmp = UniregistrarRegistrar$updateAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniregistrarRegistrar).m98 = function () {
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
  protoOf(Companion_22).l4s = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_28;
  function Companion_getInstance_24() {
    return Companion_instance_28;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.dids.DidCreateOptions', this, 3);
    tmp0_serialDesc.w29('method', false);
    tmp0_serialDesc.w29('config', false);
    tmp0_serialDesc.w29('didDocConfig', true);
    this.vaa_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).waa = function (encoder, value) {
    var tmp0_desc = this.vaa_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.method);
    tmp1_output.x23(tmp0_desc, 1, JsonElementSerializer_getInstance(), value.config);
    if (tmp1_output.d24(tmp0_desc, 2) ? true : !(value.didDocConfig == null)) {
      tmp1_output.z23(tmp0_desc, 2, $serializer_getInstance_12(), value.didDocConfig);
    }
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_11).u1y = function (encoder, value) {
    return this.waa(encoder, value instanceof DidCreateOptions ? value : THROW_CCE());
  };
  protoOf($serializer_11).v1y = function (decoder) {
    var tmp0_desc = this.vaa_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.g22(tmp0_desc);
    if (tmp7_input.w22()) {
      tmp4_local0 = tmp7_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.s22(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.u22(tmp0_desc, 2, $serializer_getInstance_12(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.s22(tmp0_desc, 1, JsonElementSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.u22(tmp0_desc, 2, $serializer_getInstance_12(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.h22(tmp0_desc);
    return DidCreateOptions_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_11).t1y = function () {
    return this.vaa_1;
  };
  protoOf($serializer_11).l2a = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().vaa_1);
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
  protoOf(DidCreateOptions).m3l = function () {
    return this.method;
  };
  protoOf(DidCreateOptions).n3i = function () {
    return this.config;
  };
  protoOf(DidCreateOptions).uaa = function () {
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
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), Companion_getInstance_0().l4s());
  }
  function DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_1() {
    return new LinkedHashMapSerializer(Companion_getInstance_21().l4s(), new LinkedHashSetSerializer($serializer_getInstance_13()));
  }
  function DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_2() {
    return new LinkedHashSetSerializer($serializer_getInstance_14());
  }
  function DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_3() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), JsonElementSerializer_getInstance());
  }
  function DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda($context, $verificationKeySetConfiguration, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    this.fab_1 = $context;
    this.gab_1 = $verificationKeySetConfiguration;
    this.hab_1 = $serviceConfigurationSet;
    this.iab_1 = $rootCustomProperties;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda).jab = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda).zb = function ($completion) {
    return this.jab($completion);
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
            suspendResult = Companion_getInstance_25().mab(this.fab_1, this.gab_1, this.hab_1, this.iab_1, this);
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
    return new DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda(this.fab_1, this.gab_1, this.hab_1, this.iab_1, completion);
  };
  function DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda_0($context, $verificationKeySetConfiguration, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    var i = new DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda($context, $verificationKeySetConfiguration, $serviceConfigurationSet, $rootCustomProperties, resultContinuation);
    var l = function ($completion) {
      return i.jab($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda($context, $publicKeySet, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    this.vab_1 = $context;
    this.wab_1 = $publicKeySet;
    this.xab_1 = $serviceConfigurationSet;
    this.yab_1 = $rootCustomProperties;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda).jab = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda).zb = function ($completion) {
    return this.jab($completion);
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
            suspendResult = Companion_getInstance_25().zab(this.vab_1, this.wab_1, this.xab_1, this.yab_1, this);
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
    return new DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda(this.vab_1, this.wab_1, this.xab_1, this.yab_1, completion);
  };
  function DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda_0($context, $publicKeySet, $serviceConfigurationSet, $rootCustomProperties, resultContinuation) {
    var i = new DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda($context, $publicKeySet, $serviceConfigurationSet, $rootCustomProperties, resultContinuation);
    var l = function ($completion) {
      return i.jab($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $buildFromPublicKeySetCOROUTINE$8(_this__u8e3s4, context, publicKeySet, serviceConfigurationSet, rootCustomProperties, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.iac_1 = _this__u8e3s4;
    this.jac_1 = context;
    this.kac_1 = publicKeySet;
    this.lac_1 = serviceConfigurationSet;
    this.mac_1 = rootCustomProperties;
  }
  protoOf($buildFromPublicKeySetCOROUTINE$8).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 10;
            var tmp_0 = this;
            tmp_0.nac_1 = this.kac_1;
            this.oac_1 = this.nac_1;
            this.pac_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.oac_1, 10)), 16);
            var tmp_1 = this;
            tmp_1.qac_1 = this.oac_1;
            var tmp_2 = this;
            tmp_2.rac_1 = LinkedHashMap_init_$Create$_0(this.pac_1);
            this.sac_1 = this.qac_1;
            this.tac_1 = this.rac_1;
            this.uac_1 = this.sac_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.uac_1.q()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.vac_1 = this.uac_1.r();
            var tmp_3 = this;
            tmp_3.wac_1 = this.vac_1;
            this.xac_1 = this.wac_1;
            this.m9_1 = 2;
            suspendResult = this.xac_1.x6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.yac_1 = suspendResult;
            this.tac_1.n2(this.yac_1, this.vac_1);
            this.m9_1 = 1;
            continue $sm;
          case 3:
            this.zac_1 = this.tac_1;
            var tmp_4 = this;
            var this_0 = this.kac_1;
            var tmp_5;
            if (!this_0.h()) {
              tmp_5 = this_0;
            } else {
              tmp_5 = null;
            }

            tmp_4.aad_1 = tmp_5;
            if (this.aad_1 == null) {
              this.bad_1 = null;
              this.m9_1 = 9;
              continue $sm;
            } else {
              var tmp_6 = this;
              tmp_6.cad_1 = this.aad_1;
              this.dad_1 = this.cad_1;
              var tmp_7 = this;
              tmp_7.ead_1 = this.dad_1;
              this.fad_1 = this.ead_1;
              var tmp_8 = this;
              tmp_8.gad_1 = get_entries_1();
              this.had_1 = this.gad_1;
              this.iad_1 = LinkedHashMap_init_$Create$_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.had_1, 10)), 16));
              var tmp_9 = this;
              tmp_9.jad_1 = this.had_1;
              var tmp_10 = this;
              tmp_10.kad_1 = this.iad_1;
              this.lad_1 = this.jad_1;
              this.mad_1 = this.kad_1;
              this.nad_1 = this.lad_1.p();
              this.m9_1 = 4;
              continue $sm;
            }

          case 4:
            if (!this.nad_1.q()) {
              this.m9_1 = 8;
              continue $sm;
            }

            this.oad_1 = this.nad_1.r();
            var tmp_11 = this;
            tmp_11.pad_1 = this.oad_1;
            this.qad_1 = this.pad_1;
            var tmp_12 = this;
            tmp_12.rad_1 = this.kac_1;
            this.sad_1 = this.rad_1;
            var tmp_13 = this;
            tmp_13.tad_1 = this.sad_1;
            var tmp_14 = this;
            tmp_14.uad_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.sad_1, 10));
            this.vad_1 = this.tad_1;
            this.wad_1 = this.uad_1;
            this.xad_1 = this.vad_1.p();
            this.m9_1 = 5;
            continue $sm;
          case 5:
            if (!this.xad_1.q()) {
              this.m9_1 = 7;
              continue $sm;
            }

            this.yad_1 = this.xad_1.r();
            var tmp_15 = this;
            tmp_15.zad_1 = this.yad_1;
            this.aae_1 = this.zad_1;
            this.m9_1 = 6;
            suspendResult = this.aae_1.x6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new VerificationMethodConfiguration(ARGUMENT);
            this.wad_1.n(ARGUMENT_0);
            this.m9_1 = 5;
            continue $sm;
          case 7:
            var ARGUMENT_1 = this.wad_1;
            var ARGUMENT_2 = toSet(ARGUMENT_1);
            this.mad_1.n2(this.oad_1, ARGUMENT_2);
            this.m9_1 = 4;
            continue $sm;
          case 8:
            this.bad_1 = this.mad_1;
            this.m9_1 = 9;
            continue $sm;
          case 9:
            var tmp1_elvis_lhs = this.bad_1;
            var ARGUMENT_3 = tmp1_elvis_lhs == null ? emptyMap() : tmp1_elvis_lhs;
            return new DidDocConfig(this.jac_1, this.zac_1, ARGUMENT_3, this.lac_1, this.mac_1);
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
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<set-state>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).t9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-state>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).u9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<set-exceptionState>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).v9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-exceptionState>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).w9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<set-result>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).x9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-result>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).y9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<set-exception>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).z9;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-exception>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).aa;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<set-finallyPath>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).ba;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-finallyPath>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).ca;
  protoOf($buildFromPublicKeySetCOROUTINE$8)['<get-context>'] = protoOf($buildFromPublicKeySetCOROUTINE$8).s9;
  function $buildFromPublicKeySetVerificationConfigurationCOROUTINE$9(_this__u8e3s4, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jae_1 = _this__u8e3s4;
    this.kae_1 = context;
    this.lae_1 = verificationKeySetConfiguration;
    this.mae_1 = serviceConfigurationSet;
    this.nae_1 = rootCustomProperties;
  }
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 9;
            var tmp_0 = this;
            tmp_0.oae_1 = flatten(this.lae_1.m2());
            this.pae_1 = this.oae_1;
            this.qae_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.pae_1, 10)), 16);
            var tmp_1 = this;
            tmp_1.rae_1 = this.pae_1;
            var tmp_2 = this;
            tmp_2.sae_1 = LinkedHashMap_init_$Create$_0(this.qae_1);
            this.tae_1 = this.rae_1;
            this.uae_1 = this.sae_1;
            this.vae_1 = this.tae_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.vae_1.q()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.wae_1 = this.vae_1.r();
            var tmp_3 = this;
            tmp_3.xae_1 = this.wae_1;
            this.yae_1 = this.xae_1;
            this.m9_1 = 2;
            suspendResult = this.yae_1.x6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.zae_1 = suspendResult;
            this.uae_1.n2(this.zae_1, this.wae_1);
            this.m9_1 = 1;
            continue $sm;
          case 3:
            this.aaf_1 = this.uae_1;
            this.baf_1 = this.aaf_1;
            var tmp_4 = this;
            tmp_4.caf_1 = this.baf_1;
            this.daf_1 = this.caf_1;
            var tmp_5 = this;
            var tmp0 = this.lae_1.x();
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              if (!element.z().h()) {
                destination.n(element);
              }
            }

            tmp_5.eaf_1 = destination;
            this.faf_1 = this.eaf_1;
            this.gaf_1 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.faf_1, 10)), 16);
            var tmp_6 = this;
            tmp_6.haf_1 = this.faf_1;
            var tmp_7 = this;
            tmp_7.iaf_1 = LinkedHashMap_init_$Create$_0(this.gaf_1);
            this.jaf_1 = this.haf_1;
            this.kaf_1 = this.iaf_1;
            this.laf_1 = this.jaf_1.p();
            this.m9_1 = 4;
            continue $sm;
          case 4:
            if (!this.laf_1.q()) {
              this.m9_1 = 8;
              continue $sm;
            }

            this.maf_1 = this.laf_1.r();
            var tmp_8 = this;
            tmp_8.naf_1 = this.kaf_1;
            var tmp_9 = this;
            tmp_9.oaf_1 = this.maf_1;
            this.paf_1 = this.oaf_1;
            var tmp_10 = this;
            tmp_10.qaf_1 = this.paf_1.y();
            var tmp_11 = this;
            tmp_11.raf_1 = this.paf_1.z();
            var tmp_12 = this;
            tmp_12.saf_1 = this.raf_1;
            this.taf_1 = this.saf_1;
            var tmp_13 = this;
            tmp_13.uaf_1 = this.taf_1;
            var tmp_14 = this;
            tmp_14.vaf_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.taf_1, 10));
            this.waf_1 = this.uaf_1;
            this.xaf_1 = this.vaf_1;
            this.yaf_1 = this.waf_1.p();
            this.m9_1 = 5;
            continue $sm;
          case 5:
            if (!this.yaf_1.q()) {
              this.m9_1 = 7;
              continue $sm;
            }

            this.zaf_1 = this.yaf_1.r();
            var tmp_15 = this;
            tmp_15.aag_1 = this.zaf_1;
            this.bag_1 = this.aag_1;
            this.m9_1 = 6;
            suspendResult = this.bag_1.x6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new VerificationMethodConfiguration(ARGUMENT);
            this.xaf_1.n(ARGUMENT_0);
            this.m9_1 = 5;
            continue $sm;
          case 7:
            var ARGUMENT_1 = this.xaf_1;
            var ARGUMENT_2 = toSet(ARGUMENT_1);
            var tmp1 = to(this.qaf_1, ARGUMENT_2);
            this.naf_1.n2(tmp1.ac_1, tmp1.bc_1);
            this.m9_1 = 4;
            continue $sm;
          case 8:
            var ARGUMENT_3 = this.kaf_1;
            return new DidDocConfig(this.kae_1, this.daf_1, ARGUMENT_3, this.mae_1, this.nae_1);
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
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<set-state>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).t9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-state>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).u9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<set-exceptionState>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).v9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-exceptionState>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).w9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<set-result>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).x9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-result>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).y9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<set-exception>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).z9;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-exception>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).aa;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<set-finallyPath>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).ba;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-finallyPath>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).ca;
  protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9)['<get-context>'] = protoOf($buildFromPublicKeySetVerificationConfigurationCOROUTINE$9).s9;
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
    tmp.kab_1 = [tmp_1, tmp_3, tmp_5, tmp_7, lazy(tmp_8, DidDocConfig$Companion$$childSerializers$_anonymous__s0v70v_3)];
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
    tmp_9.lab_1 = plus(tmp_10, destination);
  }
  protoOf(Companion_23).zab = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion) {
    var tmp = new $buildFromPublicKeySetCOROUTINE$8(this, context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Companion_23).buildFromPublicKeySet$default = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    publicKeySet = publicKeySet === VOID ? emptySet() : publicKeySet;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.zab(context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion) : $super.zab.call(this, context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $completion);
  };
  protoOf(Companion_23).mab = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion) {
    var tmp = new $buildFromPublicKeySetVerificationConfigurationCOROUTINE$9(this, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Companion_23).buildFromPublicKeySetVerificationConfiguration$default = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    verificationKeySetConfiguration = verificationKeySetConfiguration === VOID ? emptyMap() : verificationKeySetConfiguration;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.mab(context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion) : $super.mab.call(this, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $completion);
  };
  protoOf(Companion_23).cag = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties) {
    var tmp = DidDocConfig$Companion$buildFromPublicKeySetVerificationConfigurationAsync$slambda_0(context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_23).buildFromPublicKeySetVerificationConfigurationAsync$default = function (context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    verificationKeySetConfiguration = verificationKeySetConfiguration === VOID ? emptyMap() : verificationKeySetConfiguration;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.cag(context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties) : $super.cag.call(this, context, verificationKeySetConfiguration, serviceConfigurationSet, rootCustomProperties);
  };
  protoOf(Companion_23).dag = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties) {
    var tmp = DidDocConfig$Companion$buildFromPublicKeySetAsync$slambda_0(context, publicKeySet, serviceConfigurationSet, rootCustomProperties, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_23).buildFromPublicKeySetAsync$default = function (context, publicKeySet, serviceConfigurationSet, rootCustomProperties, $super) {
    context = context === VOID ? DidUtils_getInstance().DEFAULT_CONTEXT : context;
    publicKeySet = publicKeySet === VOID ? emptySet() : publicKeySet;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? emptySet() : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? null : rootCustomProperties;
    return $super === VOID ? this.dag(context, publicKeySet, serviceConfigurationSet, rootCustomProperties) : $super.dag.call(this, context, publicKeySet, serviceConfigurationSet, rootCustomProperties);
  };
  protoOf(Companion_23).l4s = function () {
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
        if (!!Companion_getInstance_25().lab_1.x1(element.y())) {
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
    var tmp = new $createVerificationMethodSetCOROUTINE$11($this, did, $completion);
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
      destination.n2(pair.ac_1, pair.bc_1);
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
      var tmp$ret$0 = new ServiceMap(did + '#' + UuidUtils_instance.y9a(), setOf(item.type), item.serviceEndpoint, item.customProperties);
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.let' call
    var it = toSet(destination);
    return new Service(it);
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.dids.DidDocConfig', this, 5);
    tmp0_serialDesc.w29('context', true);
    tmp0_serialDesc.w29('publicKeyMap', true);
    tmp0_serialDesc.w29('verificationConfigurationMap', true);
    tmp0_serialDesc.w29('serviceConfigurationSet', true);
    tmp0_serialDesc.w29('rootCustomProperties', true);
    this.cah_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).dah = function (encoder, value) {
    var tmp0_desc = this.cah_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().kab_1;
    if (tmp1_output.d24(tmp0_desc, 0) ? true : !equals_0(value.context, DidUtils_getInstance().DEFAULT_CONTEXT)) {
      tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    }
    if (tmp1_output.d24(tmp0_desc, 1) ? true : !equals_0(value.publicKeyMap, emptyMap())) {
      tmp1_output.x23(tmp0_desc, 1, tmp2_cached[1].z(), value.publicKeyMap);
    }
    if (tmp1_output.d24(tmp0_desc, 2) ? true : !equals_0(value.verificationConfigurationMap, emptyMap())) {
      tmp1_output.x23(tmp0_desc, 2, tmp2_cached[2].z(), value.verificationConfigurationMap);
    }
    if (tmp1_output.d24(tmp0_desc, 3) ? true : !equals_0(value.serviceConfigurationSet, emptySet())) {
      tmp1_output.x23(tmp0_desc, 3, tmp2_cached[3].z(), value.serviceConfigurationSet);
    }
    if (tmp1_output.d24(tmp0_desc, 4) ? true : !(value.rootCustomProperties == null)) {
      tmp1_output.z23(tmp0_desc, 4, tmp2_cached[4].z(), value.rootCustomProperties);
    }
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_12).u1y = function (encoder, value) {
    return this.dah(encoder, value instanceof DidDocConfig ? value : THROW_CCE());
  };
  protoOf($serializer_12).v1y = function (decoder) {
    var tmp0_desc = this.cah_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.g22(tmp0_desc);
    var tmp10_cached = Companion_getInstance_25().kab_1;
    if (tmp9_input.w22()) {
      tmp4_local0 = tmp9_input.s22(tmp0_desc, 0, tmp10_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.s22(tmp0_desc, 1, tmp10_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.s22(tmp0_desc, 2, tmp10_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.s22(tmp0_desc, 3, tmp10_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.u22(tmp0_desc, 4, tmp10_cached[4].z(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.s22(tmp0_desc, 0, tmp10_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.s22(tmp0_desc, 1, tmp10_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.s22(tmp0_desc, 2, tmp10_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.s22(tmp0_desc, 3, tmp10_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.u22(tmp0_desc, 4, tmp10_cached[4].z(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.h22(tmp0_desc);
    return DidDocConfig_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_12).t1y = function () {
    return this.cah_1;
  };
  protoOf($serializer_12).l2a = function () {
    var tmp0_cached = Companion_getInstance_25().kab_1;
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_12().cah_1);
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
    this.mah_1 = this$0;
    this.nah_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidDocConfig$toDidDocumentAsync$slambda).oah = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidDocConfig$toDidDocumentAsync$slambda).zb = function ($completion) {
    return this.oah($completion);
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
            suspendResult = this.mah_1.pah(this.nah_1, this);
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
    return new DidDocConfig$toDidDocumentAsync$slambda(this.mah_1, this.nah_1, completion);
  };
  function DidDocConfig$toDidDocumentAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidDocConfig$toDidDocumentAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.oah($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $toDidDocumentCOROUTINE$10(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yah_1 = _this__u8e3s4;
    this.zah_1 = did;
  }
  protoOf($toDidDocumentCOROUTINE$10).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            var tmp_0 = this;
            tmp_0.aai_1 = LinkedHashMap_init_$Create$();
            this.bai_1 = this.aai_1;
            var tmp_1 = this;
            tmp_1.cai_1 = this.bai_1;
            this.dai_1 = this.cai_1;
            var tmp0 = Default_getInstance();
            var value = this.yah_1.context;
            var this_0 = tmp0.v22();
            var this_1 = serializer(this_0, createKType(getKClass(KtList), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false))]), false));
            this.dai_1.n2('context', tmp0.e4q(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), value));
            var tmp2 = Default_getInstance();
            var value_0 = this.zah_1;
            var this_2 = tmp2.v22();
            var this_3 = serializer(this_2, createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false));
            this.dai_1.n2('id', tmp2.e4q(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), value_0));
            this.m9_1 = 1;
            suspendResult = createVerificationMethodSet(this.yah_1, this.zah_1, this);
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
              var this_6 = this_5.v22();
              var this_7 = serializer(this_6, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(VerificationMethod_4), arrayOf([]), false))]), false));
              this.dai_1.n2('verificationMethod', this_5.e4q(isInterface(this_7, KSerializer) ? this_7 : THROW_CCE(), tmp0_safe_receiver));
              var _iterator__ex2g4s = createVerificationRelationshipMap(this.yah_1, this.zah_1).x().p();
              while (_iterator__ex2g4s.q()) {
                var element = _iterator__ex2g4s.r();
                var verRelType = element.y();
                var verRelValue = element.z();
                var tmp_3 = verRelType.toString();
                var this_8 = Default_getInstance();
                var this_9 = this_8.v22();
                var this_10 = serializer(this_9, createKType(getKClass(KtSet), arrayOf([createInvariantKTypeProjection(createKType(getKClass(VerificationRelationship), arrayOf([]), false))]), false));
                this.dai_1.n2(tmp_3, this_8.e4q(isInterface(this_10, KSerializer) ? this_10 : THROW_CCE(), verRelValue));
              }
            }

            var this_11 = createService(this.yah_1, this.zah_1);
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
              var this_13 = this_12.v22();
              var this_14 = serializer(this_13, createKType(getKClass(Service), arrayOf([]), false));
              this.dai_1.n2('service', this_12.e4q(isInterface(this_14, KSerializer) ? this_14 : THROW_CCE(), tmp1_safe_receiver));
            }

            var tmp2_safe_receiver = this.yah_1.rootCustomProperties;
            if (tmp2_safe_receiver == null)
              null;
            else {
              var _iterator__ex2g4s_0 = tmp2_safe_receiver.x().p();
              while (_iterator__ex2g4s_0.q()) {
                var element_0 = _iterator__ex2g4s_0.r();
                this.dai_1.n2(element_0.y(), element_0.z());
              }
            }

            var ARGUMENT = this.bai_1;
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
  protoOf($toDidDocumentCOROUTINE$10)['<set-state>'] = protoOf($toDidDocumentCOROUTINE$10).t9;
  protoOf($toDidDocumentCOROUTINE$10)['<get-state>'] = protoOf($toDidDocumentCOROUTINE$10).u9;
  protoOf($toDidDocumentCOROUTINE$10)['<set-exceptionState>'] = protoOf($toDidDocumentCOROUTINE$10).v9;
  protoOf($toDidDocumentCOROUTINE$10)['<get-exceptionState>'] = protoOf($toDidDocumentCOROUTINE$10).w9;
  protoOf($toDidDocumentCOROUTINE$10)['<set-result>'] = protoOf($toDidDocumentCOROUTINE$10).x9;
  protoOf($toDidDocumentCOROUTINE$10)['<get-result>'] = protoOf($toDidDocumentCOROUTINE$10).y9;
  protoOf($toDidDocumentCOROUTINE$10)['<set-exception>'] = protoOf($toDidDocumentCOROUTINE$10).z9;
  protoOf($toDidDocumentCOROUTINE$10)['<get-exception>'] = protoOf($toDidDocumentCOROUTINE$10).aa;
  protoOf($toDidDocumentCOROUTINE$10)['<set-finallyPath>'] = protoOf($toDidDocumentCOROUTINE$10).ba;
  protoOf($toDidDocumentCOROUTINE$10)['<get-finallyPath>'] = protoOf($toDidDocumentCOROUTINE$10).ca;
  protoOf($toDidDocumentCOROUTINE$10)['<get-context>'] = protoOf($toDidDocumentCOROUTINE$10).s9;
  function $createVerificationMethodSetCOROUTINE$11(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mag_1 = _this__u8e3s4;
    this.nag_1 = did;
  }
  protoOf($createVerificationMethodSetCOROUTINE$11).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            tmp_0.oag_1 = flatten(this.mag_1.verificationConfigurationMap.m2());
            this.pag_1 = this.oag_1;
            var tmp_1 = this;
            tmp_1.qag_1 = this.pag_1;
            var tmp_2 = this;
            tmp_2.rag_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.pag_1, 10));
            this.sag_1 = this.qag_1;
            this.tag_1 = this.rag_1;
            this.uag_1 = this.sag_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.uag_1.q()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.vag_1 = this.uag_1.r();
            var tmp_3 = this;
            tmp_3.wag_1 = this.vag_1;
            this.xag_1 = this.wag_1;
            var tmp_4 = this;
            var tmp0_elvis_lhs = this.mag_1.publicKeyMap.k2(this.xag_1.publicKeyId);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              throw IllegalStateException_init_$Create$('This exception should never happen, we have already checked that all verification keys exist in the key map');
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }

            tmp_4.yag_1 = tmp_5;
            this.zag_1 = this.nag_1 + '#' + this.xag_1.publicKeyId;
            this.aah_1 = VerificationMethodType_JsonWebKey2020_getInstance();
            this.bah_1 = VerificationMaterialType_PublicKeyJwk_getInstance();
            this.m9_1 = 2;
            suspendResult = this.yag_1.o6n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = to(this.bah_1, ARGUMENT);
            var ARGUMENT_1 = new VerificationMethod_4(this.zag_1, this.aah_1, ARGUMENT_0, this.nag_1, this.xag_1.customProperties);
            this.tag_1.n(ARGUMENT_1);
            this.m9_1 = 1;
            continue $sm;
          case 3:
            var ARGUMENT_2 = this.tag_1;
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
  protoOf(DidDocConfig).eai = function () {
    return this.publicKeyMap;
  };
  protoOf(DidDocConfig).fai = function () {
    return this.verificationConfigurationMap;
  };
  protoOf(DidDocConfig).gai = function () {
    return this.serviceConfigurationSet;
  };
  protoOf(DidDocConfig).hai = function () {
    return this.rootCustomProperties;
  };
  protoOf(DidDocConfig).pah = function (did, $completion) {
    var tmp = new $toDidDocumentCOROUTINE$10(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidDocConfig).iai = function (did) {
    var tmp = DidDocConfig$toDidDocumentAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidDocConfig).cc = function () {
    return this.context;
  };
  protoOf(DidDocConfig).dc = function () {
    return this.publicKeyMap;
  };
  protoOf(DidDocConfig).qp = function () {
    return this.verificationConfigurationMap;
  };
  protoOf(DidDocConfig).j6y = function () {
    return this.serviceConfigurationSet;
  };
  protoOf(DidDocConfig).q7i = function () {
    return this.rootCustomProperties;
  };
  protoOf(DidDocConfig).jai = function (context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties) {
    return new DidDocConfig(context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties);
  };
  protoOf(DidDocConfig).copy = function (context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties, $super) {
    context = context === VOID ? this.context : context;
    publicKeyMap = publicKeyMap === VOID ? this.publicKeyMap : publicKeyMap;
    verificationConfigurationMap = verificationConfigurationMap === VOID ? this.verificationConfigurationMap : verificationConfigurationMap;
    serviceConfigurationSet = serviceConfigurationSet === VOID ? this.serviceConfigurationSet : serviceConfigurationSet;
    rootCustomProperties = rootCustomProperties === VOID ? this.rootCustomProperties : rootCustomProperties;
    return $super === VOID ? this.jai(context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties) : $super.jai.call(this, context, publicKeyMap, verificationConfigurationMap, serviceConfigurationSet, rootCustomProperties);
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
    tmp.kai_1 = [null, lazy(tmp_0, VerificationMethodConfiguration$Companion$$childSerializers$_anonymous__2j3qxc)];
  }
  protoOf(Companion_24).l4s = function () {
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
    tmp0_serialDesc.w29('publicKeyId', false);
    tmp0_serialDesc.w29('customProperties', true);
    this.lai_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).mai = function (encoder, value) {
    var tmp0_desc = this.lai_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().kai_1;
    tmp1_output.v23(tmp0_desc, 0, value.publicKeyId);
    if (tmp1_output.d24(tmp0_desc, 1) ? true : !(value.customProperties == null)) {
      tmp1_output.z23(tmp0_desc, 1, tmp2_cached[1].z(), value.customProperties);
    }
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_13).u1y = function (encoder, value) {
    return this.mai(encoder, value instanceof VerificationMethodConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_13).v1y = function (decoder) {
    var tmp0_desc = this.lai_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.g22(tmp0_desc);
    var tmp7_cached = Companion_getInstance_26().kai_1;
    if (tmp6_input.w22()) {
      tmp4_local0 = tmp6_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.u22(tmp0_desc, 1, tmp7_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.u22(tmp0_desc, 1, tmp7_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.h22(tmp0_desc);
    return VerificationMethodConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_13).t1y = function () {
    return this.lai_1;
  };
  protoOf($serializer_13).l2a = function () {
    var tmp0_cached = Companion_getInstance_26().kai_1;
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_13().lai_1);
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
  protoOf(VerificationMethodConfiguration).nai = function () {
    return this.publicKeyId;
  };
  protoOf(VerificationMethodConfiguration).sa0 = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethodConfiguration).cc = function () {
    return this.publicKeyId;
  };
  protoOf(VerificationMethodConfiguration).dc = function () {
    return this.customProperties;
  };
  protoOf(VerificationMethodConfiguration).oai = function (publicKeyId, customProperties) {
    return new VerificationMethodConfiguration(publicKeyId, customProperties);
  };
  protoOf(VerificationMethodConfiguration).copy = function (publicKeyId, customProperties, $super) {
    publicKeyId = publicKeyId === VOID ? this.publicKeyId : publicKeyId;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.oai(publicKeyId, customProperties) : $super.oai.call(this, publicKeyId, customProperties);
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
    tmp.pai_1 = [null, tmp_1, lazy(tmp_2, ServiceConfiguration$Companion$$childSerializers$_anonymous__9c7hg7_0)];
  }
  protoOf(Companion_25).l4s = function () {
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
    tmp0_serialDesc.w29('type', false);
    tmp0_serialDesc.w29('serviceEndpoint', false);
    tmp0_serialDesc.w29('customProperties', true);
    this.qai_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).rai = function (encoder, value) {
    var tmp0_desc = this.qai_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().pai_1;
    tmp1_output.v23(tmp0_desc, 0, value.type);
    tmp1_output.x23(tmp0_desc, 1, tmp2_cached[1].z(), value.serviceEndpoint);
    if (tmp1_output.d24(tmp0_desc, 2) ? true : !(value.customProperties == null)) {
      tmp1_output.z23(tmp0_desc, 2, tmp2_cached[2].z(), value.customProperties);
    }
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_14).u1y = function (encoder, value) {
    return this.rai(encoder, value instanceof ServiceConfiguration ? value : THROW_CCE());
  };
  protoOf($serializer_14).v1y = function (decoder) {
    var tmp0_desc = this.qai_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.g22(tmp0_desc);
    var tmp8_cached = Companion_getInstance_27().pai_1;
    if (tmp7_input.w22()) {
      tmp4_local0 = tmp7_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.s22(tmp0_desc, 1, tmp8_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.u22(tmp0_desc, 2, tmp8_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.s22(tmp0_desc, 1, tmp8_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.u22(tmp0_desc, 2, tmp8_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.h22(tmp0_desc);
    return ServiceConfiguration_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_14).t1y = function () {
    return this.qai_1;
  };
  protoOf($serializer_14).l2a = function () {
    var tmp0_cached = Companion_getInstance_27().pai_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_14().qai_1);
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
  protoOf(ServiceConfiguration).t9y = function () {
    return this.type;
  };
  protoOf(ServiceConfiguration).ra0 = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceConfiguration).sa0 = function () {
    return this.customProperties;
  };
  protoOf(ServiceConfiguration).cc = function () {
    return this.type;
  };
  protoOf(ServiceConfiguration).dc = function () {
    return this.serviceEndpoint;
  };
  protoOf(ServiceConfiguration).qp = function () {
    return this.customProperties;
  };
  protoOf(ServiceConfiguration).sai = function (type, serviceEndpoint, customProperties) {
    return new ServiceConfiguration(type, serviceEndpoint, customProperties);
  };
  protoOf(ServiceConfiguration).copy = function (type, serviceEndpoint, customProperties, $super) {
    type = type === VOID ? this.type : type;
    serviceEndpoint = serviceEndpoint === VOID ? this.serviceEndpoint : serviceEndpoint;
    customProperties = customProperties === VOID ? this.customProperties : customProperties;
    return $super === VOID ? this.sai(type, serviceEndpoint, customProperties) : $super.sai.call(this, type, serviceEndpoint, customProperties);
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
    this.baj_1 = this$0;
    this.caj_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrarMethod$registerAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrarMethod$registerAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.baj_1.q9s(this.caj_1, this);
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
    return new LocalRegistrarMethod$registerAsync$slambda(this.baj_1, this.caj_1, completion);
  };
  function LocalRegistrarMethod$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new LocalRegistrarMethod$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrarMethod$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.laj_1 = this$0;
    this.maj_1 = $key;
    this.naj_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalRegistrarMethod$registerByKeyAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(LocalRegistrarMethod$registerByKeyAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.laj_1.ea6(this.maj_1, this.naj_1, this);
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
    return new LocalRegistrarMethod$registerByKeyAsync$slambda(this.laj_1, this.maj_1, this.naj_1, completion);
  };
  function LocalRegistrarMethod$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new LocalRegistrarMethod$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalRegistrarMethod(method) {
    this.method = method;
  }
  protoOf(LocalRegistrarMethod).m3l = function () {
    return this.method;
  };
  protoOf(LocalRegistrarMethod).h9y = function (options) {
    var tmp = LocalRegistrarMethod$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalRegistrarMethod).oaj = function (key, options) {
    var tmp = LocalRegistrarMethod$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function createDid($this, key, network, $completion) {
    var tmp = new $createDidCOROUTINE$14($this, key, network, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function initiateDidJob($this, url, body, $completion) {
    var tmp = new $initiateDidJobCOROUTINE$16($this, url, body, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function finalizeDidJob($this, url, jobId, verificationMethodId, signatures, $completion) {
    var tmp = new $finalizeDidJobCOROUTINE$17($this, url, jobId, verificationMethodId, signatures, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function signPayload($this, key, job, $completion) {
    var tmp = new $signPayloadCOROUTINE$18($this, key, job, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function DidCheqdRegistrar$log$lambda() {
    return Unit_instance;
  }
  function DidCheqdRegistrar$json$lambda($this$Json) {
    $this$Json.m4r_1 = get_didStateSerializationModule();
    $this$Json.x4q_1 = true;
    $this$Json.z4q_1 = true;
    $this$Json.y4q_1 = true;
    $this$Json.w4q_1 = false;
    return Unit_instance;
  }
  function DidCheqdRegistrar$client$lambda$lambda(this$0) {
    return function ($this$install) {
      json($this$install, this$0.zao_1);
      return Unit_instance;
    };
  }
  function DidCheqdRegistrar$client$lambda$lambda_0($this$install) {
    $this$install.m5e_1 = LogLevel_BODY_getInstance();
    return Unit_instance;
  }
  function DidCheqdRegistrar$client$lambda(this$0) {
    return function ($this$HttpClient) {
      var tmp = get_ContentNegotiation();
      $this$HttpClient.o3j(tmp, DidCheqdRegistrar$client$lambda$lambda(this$0));
      var tmp_0 = get_Logging();
      $this$HttpClient.o3j(tmp_0, DidCheqdRegistrar$client$lambda$lambda_0);
      return Unit_instance;
    };
  }
  function DidCheqdRegistrar$initiateDidJob$lambda($it) {
    return function () {
      return 'Try parse Job action response: ' + $it;
    };
  }
  function DidCheqdRegistrar$registerAsync$slambda(this$0, $options, resultContinuation) {
    this.jap_1 = this$0;
    this.kap_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdRegistrar$registerAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidCheqdRegistrar$registerAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.jap_1.q9s(this.kap_1, this);
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
    return new DidCheqdRegistrar$registerAsync$slambda(this.jap_1, this.kap_1, completion);
  };
  function DidCheqdRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidCheqdRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidCheqdRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.tap_1 = this$0;
    this.uap_1 = $key;
    this.vap_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdRegistrar$registerByKeyAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidCheqdRegistrar$registerByKeyAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.tap_1.ea6(this.uap_1, this.vap_1, this);
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
    return new DidCheqdRegistrar$registerByKeyAsync$slambda(this.tap_1, this.uap_1, this.vap_1, completion);
  };
  function DidCheqdRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidCheqdRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$12(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.eaq_1 = _this__u8e3s4;
    this.faq_1 = options;
  }
  protoOf($registerCOROUTINE$12).ea = function () {
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
            this.gaq_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.eaq_1.ea6(this.gaq_1, this.faq_1, this);
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
  protoOf($registerCOROUTINE$12)['<set-state>'] = protoOf($registerCOROUTINE$12).t9;
  protoOf($registerCOROUTINE$12)['<get-state>'] = protoOf($registerCOROUTINE$12).u9;
  protoOf($registerCOROUTINE$12)['<set-exceptionState>'] = protoOf($registerCOROUTINE$12).v9;
  protoOf($registerCOROUTINE$12)['<get-exceptionState>'] = protoOf($registerCOROUTINE$12).w9;
  protoOf($registerCOROUTINE$12)['<set-result>'] = protoOf($registerCOROUTINE$12).x9;
  protoOf($registerCOROUTINE$12)['<get-result>'] = protoOf($registerCOROUTINE$12).y9;
  protoOf($registerCOROUTINE$12)['<set-exception>'] = protoOf($registerCOROUTINE$12).z9;
  protoOf($registerCOROUTINE$12)['<get-exception>'] = protoOf($registerCOROUTINE$12).aa;
  protoOf($registerCOROUTINE$12)['<set-finallyPath>'] = protoOf($registerCOROUTINE$12).ba;
  protoOf($registerCOROUTINE$12)['<get-finallyPath>'] = protoOf($registerCOROUTINE$12).ca;
  protoOf($registerCOROUTINE$12)['<get-context>'] = protoOf($registerCOROUTINE$12).s9;
  function $registerByKeyCOROUTINE$13(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.paq_1 = _this__u8e3s4;
    this.qaq_1 = key;
    this.raq_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$13).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            var this_0 = this.raq_1;
            var tmp0_safe_receiver = get_jsonObject(this_0.config).ze('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ze('network');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p4s();
            var tmp_0;
            if (tmp4_safe_receiver == null) {
              tmp_0 = null;
            } else {
              var tmp0_subject = PrimitiveClasses_getInstance().md();
              var tmp_1;
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().fd())) {
                tmp_1 = toBoolean(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().id())) {
                tmp_1 = toIntOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(Long))) {
                tmp_1 = toLongOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().kd())) {
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
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().md())) {
                tmp_1 = tmp4_safe_receiver;
              } else {
                tmp_1 = null;
              }
              var tmp_2 = tmp_1;
              tmp_0 = (!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : null;
            }

            var tmp0_elvis_lhs = tmp_0;
            suspendResult = createDid(this.paq_1, this.qaq_1, tmp0_elvis_lhs == null ? 'testnet' : tmp0_elvis_lhs, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.saq_1 = suspendResult;
            this.taq_1 = this.saq_1;
            var tmp_3 = this;
            tmp_3.uaq_1 = this.taq_1;
            this.vaq_1 = this.uaq_1;
            this.waq_1 = this.vaq_1.id;
            this.m9_1 = 2;
            suspendResult = this.qaq_1.o6n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor(this.vaq_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var ARGUMENT_2 = new DidDocument(ARGUMENT_1);
            return new DidResult(this.waq_1, ARGUMENT_2);
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
  protoOf($registerByKeyCOROUTINE$13)['<set-state>'] = protoOf($registerByKeyCOROUTINE$13).t9;
  protoOf($registerByKeyCOROUTINE$13)['<get-state>'] = protoOf($registerByKeyCOROUTINE$13).u9;
  protoOf($registerByKeyCOROUTINE$13)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$13).v9;
  protoOf($registerByKeyCOROUTINE$13)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$13).w9;
  protoOf($registerByKeyCOROUTINE$13)['<set-result>'] = protoOf($registerByKeyCOROUTINE$13).x9;
  protoOf($registerByKeyCOROUTINE$13)['<get-result>'] = protoOf($registerByKeyCOROUTINE$13).y9;
  protoOf($registerByKeyCOROUTINE$13)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$13).z9;
  protoOf($registerByKeyCOROUTINE$13)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$13).aa;
  protoOf($registerByKeyCOROUTINE$13)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$13).ba;
  protoOf($registerByKeyCOROUTINE$13)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$13).ca;
  protoOf($registerByKeyCOROUTINE$13)['<get-context>'] = protoOf($registerByKeyCOROUTINE$13).s9;
  function $createDidCOROUTINE$14(_this__u8e3s4, key, network, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xaj_1 = _this__u8e3s4;
    this.yaj_1 = key;
    this.zaj_1 = network;
  }
  protoOf($createDidCOROUTINE$14).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 8;
            var tmp_0 = this;
            tmp_0.aak_1 = this.xaj_1;
            this.bak_1 = this.aak_1;
            var tmp_1 = this;
            tmp_1.cak_1 = this.bak_1;
            this.dak_1 = this.cak_1;
            if (!this.yaj_1.keyType.equals(KeyType_Ed25519_getInstance()))
              throw IllegalArgumentException_init_$Create$('Key of type Ed25519 expected');
            this.m9_1 = 1;
            suspendResult = this.yaj_1.m6o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.eak_1 = suspendResult;
            this.fak_1 = toHexString(this.eak_1);
            var tmp_2 = this;
            tmp_2.gak_1 = this.xaj_1.aap_1;
            var tmp_3 = this;
            tmp_3.hak_1 = this.xaj_1.uao_1 + '/' + this.xaj_1.vao_1 + '/did-document' + ('?verificationMethod=' + this.xaj_1.sao_1) + ('&methodSpecificIdAlgo=' + this.xaj_1.tao_1) + ('&network=' + this.zaj_1) + ('&publicKeyHex=' + this.fak_1);
            this.iak_1 = this.gak_1;
            this.jak_1 = this.hak_1;
            var tmp_4 = this;
            tmp_4.kak_1 = this.iak_1;
            this.lak_1 = this.kak_1;
            var tmp_5 = this;
            tmp_5.mak_1 = this.lak_1;
            var tmp_6 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.jak_1);
            tmp_6.nak_1 = this_0;
            this.oak_1 = this.mak_1;
            this.pak_1 = this.nak_1;
            this.pak_1.i3i_1 = Companion_getInstance().b30_1;
            var tmp_7 = this;
            tmp_7.qak_1 = this.oak_1;
            var tmp_8 = this;
            tmp_8.rak_1 = this.pak_1;
            this.sak_1 = this.qak_1;
            this.tak_1 = this.rak_1;
            this.m9_1 = 2;
            suspendResult = (new HttpStatement(this.tak_1, this.sak_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.uak_1 = suspendResult;
            this.m9_1 = 3;
            suspendResult = bodyAsText(this.uak_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.vak_1 = suspendResult;
            var tmp_9 = this;
            var tmp3 = this.xaj_1.zao_1;
            var string = this.vak_1;
            var this_1 = tmp3.v22();
            var this_2 = serializer(this_1, createKType(getKClass(DidGetResponse), arrayOf([]), false));
            tmp_9.wak_1 = tmp3.z1z(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), string);
            this.xak_1 = this.wak_1;
            var tmp_10 = this;
            tmp_10.yak_1 = this.xak_1;
            this.zak_1 = this.yak_1;
            this.m9_1 = 4;
            var tmp0 = this.xaj_1.zao_1;
            var value = new JobCreateRequest(this.zak_1.didDoc);
            var this_3 = tmp0.v22();
            var this_4 = serializer(this_3, createKType(getKClass(JobCreateRequest), arrayOf([]), false));
            suspendResult = initiateDidJob(this.xaj_1, this.xaj_1.wao_1, tmp0.e4q(isInterface(this_4, KSerializer) ? this_4 : THROW_CCE(), value), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.aal_1 = suspendResult;
            this.m9_1 = 5;
            suspendResult = signPayload(this.xaj_1, this.yaj_1, this.aal_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.bal_1 = suspendResult;
            this.cal_1 = this.aal_1.jobId;
            if (this.cal_1 == null) {
              this.dal_1 = null;
              this.m9_1 = 7;
              continue $sm;
            } else {
              var tmp_11 = this;
              tmp_11.eal_1 = this.cal_1;
              this.fal_1 = this.eal_1;
              var tmp_12 = this;
              tmp_12.gal_1 = this.fal_1;
              this.hal_1 = this.gal_1;
              this.m9_1 = 6;
              suspendResult = finalizeDidJob(this.xaj_1, this.xaj_1.wao_1, this.hal_1, first_0(this.zak_1.didDoc.verificationMethod).id, this.bal_1, this);
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

            tmp_13.dal_1 = tmp_14;
            this.m9_1 = 7;
            continue $sm;
          case 7:
            var tmp1_elvis_lhs_0 = this.dal_1;
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
  function $initiateDidJobCOROUTINE$16(_this__u8e3s4, url, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qal_1 = _this__u8e3s4;
    this.ral_1 = url;
    this.sal_1 = body;
  }
  protoOf($initiateDidJobCOROUTINE$16).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.tal_1 = this.qal_1.aap_1;
            var tmp_1 = this;
            tmp_1.ual_1 = this.ral_1;
            this.val_1 = this.tal_1;
            this.wal_1 = this.ual_1;
            var tmp_2 = this;
            tmp_2.xal_1 = this.val_1;
            this.yal_1 = this.xal_1;
            var tmp_3 = this;
            tmp_3.zal_1 = this.yal_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.wal_1);
            contentType(this_0, Application_getInstance().x2t_1);
            var body = this.sal_1;
            if (body == null) {
              this_0.k3i_1 = NullBody_instance;
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
              this_0.d3o(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3i_1 = body;
                this_0.d3o(null);
              } else {
                this_0.k3i_1 = body;
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
                this_0.d3o(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.aam_1 = this_0;
            this.bam_1 = this.zal_1;
            this.cam_1 = this.aam_1;
            this.cam_1.i3i_1 = Companion_getInstance().c30_1;
            var tmp_11 = this;
            tmp_11.dam_1 = this.bam_1;
            var tmp_12 = this;
            tmp_12.eam_1 = this.cam_1;
            this.fam_1 = this.dam_1;
            this.gam_1 = this.eam_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.gam_1, this.fam_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ham_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = bodyAsText(this.ham_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var it = suspendResult;
            this.qal_1.rao_1.j6e(DidCheqdRegistrar$initiateDidJob$lambda(it));
            var this_1 = this.qal_1.zao_1;
            var this_2 = this_1.v22();
            var this_3 = serializer(this_2, createKType(getKClass(JobActionResponse), arrayOf([]), false));
            return this_1.z1z(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), it);
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
  function $finalizeDidJobCOROUTINE$17(_this__u8e3s4, url, jobId, verificationMethodId, signatures, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qam_1 = _this__u8e3s4;
    this.ram_1 = url;
    this.sam_1 = jobId;
    this.tam_1 = verificationMethodId;
    this.uam_1 = signatures;
  }
  protoOf($finalizeDidJobCOROUTINE$17).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.vam_1 = this.qam_1;
            this.wam_1 = this.vam_1;
            var tmp_1 = this;
            tmp_1.xam_1 = this.wam_1;
            this.yam_1 = this.xam_1;
            var tmp_2 = this;
            tmp_2.zam_1 = this.qam_1.aap_1;
            var tmp_3 = this;
            tmp_3.aan_1 = this.ram_1;
            this.ban_1 = this.zam_1;
            this.can_1 = this.aan_1;
            var tmp_4 = this;
            tmp_4.dan_1 = this.ban_1;
            this.ean_1 = this.dan_1;
            var tmp_5 = this;
            tmp_5.fan_1 = this.ean_1;
            var tmp_6 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.can_1);
            contentType(this_0, Application_getInstance().x2t_1);
            var this_1 = this.uam_1;
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
            var _iterator__ex2g4s = this_1.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(new SigningResponse(Base64Utils_getInstance().base64toBase64Url(item), VOID, this.tam_1));
            }

            var body = new JobSignRequest(this.sam_1, new Secret_0(destination));
            if (body == null) {
              this_0.k3i_1 = NullBody_instance;
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
              this_0.d3o(new TypeInfo(tmp_7, tmp_8));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3i_1 = body;
                this_0.d3o(null);
              } else {
                this_0.k3i_1 = body;
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
                this_0.d3o(new TypeInfo(tmp_10, tmp_11));
              }
            }

            tmp_6.gan_1 = this_0;
            this.han_1 = this.fan_1;
            this.ian_1 = this.gan_1;
            this.ian_1.i3i_1 = Companion_getInstance().c30_1;
            var tmp_13 = this;
            tmp_13.jan_1 = this.han_1;
            var tmp_14 = this;
            tmp_14.kan_1 = this.ian_1;
            this.lan_1 = this.jan_1;
            this.man_1 = this.kan_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.man_1, this.lan_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.nan_1 = suspendResult;
            this.oan_1 = this.nan_1;
            this.m9_1 = 2;
            var tmp_15 = this.oan_1.p3l();
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

            suspendResult = tmp_15.s3k(new TypeInfo(tmp_16, tmp_17), this);
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
  function $signPayloadCOROUTINE$18(_this__u8e3s4, key, job, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xan_1 = _this__u8e3s4;
    this.yan_1 = key;
    this.zan_1 = job;
  }
  protoOf($signPayloadCOROUTINE$18).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            tmp_0.aao_1 = this.xan_1;
            this.bao_1 = this.aao_1;
            var tmp_1 = this;
            tmp_1.cao_1 = this.bao_1;
            this.dao_1 = this.cao_1;
            var tmp_2 = this;
            var tmp_3 = this.zan_1.didState;
            var tmp0_elvis_lhs = tmp_3 instanceof ActionDidState ? tmp_3 : null;
            var tmp_4;
            if (tmp0_elvis_lhs == null) {
              var message = 'Unexpected did state';
              throw IllegalStateException_init_$Create$(toString_0(message));
            } else {
              tmp_4 = tmp0_elvis_lhs;
            }

            tmp_2.eao_1 = tmp_4;
            if (!equals(this.eao_1.action, 'signPayload', true)) {
              var message_0 = 'Unexpected state action: ' + this.eao_1.action;
              throw IllegalStateException_init_$Create$(toString_0(message_0));
            }

            var tmp_5 = this;
            var this_0 = this.eao_1.signingRequest;
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
            var _iterator__ex2g4s = this_0.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(Default_getInstance_0().uk(item.serializedPayload));
            }

            tmp_5.fao_1 = destination;
            var tmp_6 = this;
            tmp_6.gao_1 = this.fao_1;
            this.hao_1 = this.gao_1;
            var tmp_7 = this;
            tmp_7.iao_1 = this.hao_1;
            var tmp_8 = this;
            tmp_8.jao_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this.hao_1, 10));
            this.kao_1 = this.iao_1;
            this.lao_1 = this.jao_1;
            this.mao_1 = this.kao_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.mao_1.q()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.nao_1 = this.mao_1.r();
            var tmp_9 = this;
            tmp_9.oao_1 = this.nao_1;
            this.pao_1 = this.oao_1;
            this.qao_1 = Default_getInstance_0();
            this.m9_1 = 2;
            suspendResult = this.yan_1.n6j(this.pao_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = isByteArray(suspendResult) ? suspendResult : THROW_CCE();
            var ARGUMENT_0 = this.qao_1.qk(ARGUMENT);
            this.lao_1.n(ARGUMENT_0);
            this.m9_1 = 1;
            continue $sm;
          case 3:
            return this.lao_1;
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
    tmp.rao_1 = tmp_0.q6e(DidCheqdRegistrar$log$lambda);
    this.sao_1 = 'Ed25519VerificationKey2020';
    this.tao_1 = 'uuid';
    this.uao_1 = 'https://did-registrar.cheqd.net';
    this.vao_1 = '1.0';
    this.wao_1 = this.uao_1 + '/' + this.vao_1 + '/create';
    this.xao_1 = this.uao_1 + '/' + this.vao_1 + '/deactivate';
    this.yao_1 = this.uao_1 + '/' + this.vao_1 + '/update';
    var tmp_1 = this;
    tmp_1.zao_1 = Json(VOID, DidCheqdRegistrar$json$lambda);
    var tmp_2 = this;
    tmp_2.aap_1 = HttpClient(DidCheqdRegistrar$client$lambda(this));
  }
  protoOf(DidCheqdRegistrar).q9s = function (options, $completion) {
    var tmp = new $registerCOROUTINE$12(this, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidCheqdRegistrar).ea6 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$13(this, key, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidCheqdRegistrar).h9y = function (options) {
    var tmp = DidCheqdRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidCheqdRegistrar).oaj = function (key, options) {
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
    tmp.aar_1 = [lazy(tmp_0, ActionDidState$Secret$Companion$$childSerializers$_anonymous__gku42m)];
  }
  protoOf(Companion_26).l4s = function () {
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
    tmp0_serialDesc.w29('signingResponse', false);
    this.bar_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).car = function (encoder, value) {
    var tmp0_desc = this.bar_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_28().aar_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.signingResponse);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_15).u1y = function (encoder, value) {
    return this.car(encoder, value instanceof Secret ? value : THROW_CCE());
  };
  protoOf($serializer_15).v1y = function (decoder) {
    var tmp0_desc = this.bar_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.g22(tmp0_desc);
    var tmp6_cached = Companion_getInstance_28().aar_1;
    if (tmp5_input.w22()) {
      tmp4_local0 = tmp5_input.s22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.s22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.h22(tmp0_desc);
    return Secret_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_15).t1y = function () {
    return this.bar_1;
  };
  protoOf($serializer_15).l2a = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_28().aar_1[0].z()];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function Secret_init_$Init$(seen0, signingResponse, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_15().bar_1);
    }
    $this.signingResponse = signingResponse;
    return $this;
  }
  function Secret_init_$Create$(seen0, signingResponse, serializationConstructorMarker) {
    return Secret_init_$Init$(seen0, signingResponse, serializationConstructorMarker, objectCreate(protoOf(Secret)));
  }
  function Companion_27() {
  }
  protoOf(Companion_27).l4s = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_33;
  function Companion_getInstance_29() {
    return Companion_instance_33;
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.ActionDidState.SigningRequest', this, 4);
    tmp0_serialDesc.w29('alg', false);
    tmp0_serialDesc.w29('kid', false);
    tmp0_serialDesc.w29('serializedPayload', false);
    tmp0_serialDesc.w29('type', false);
    this.dar_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).ear = function (encoder, value) {
    var tmp0_desc = this.dar_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.alg);
    tmp1_output.v23(tmp0_desc, 1, value.kid);
    tmp1_output.v23(tmp0_desc, 2, value.serializedPayload);
    tmp1_output.v23(tmp0_desc, 3, value.type);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_16).u1y = function (encoder, value) {
    return this.ear(encoder, value instanceof SigningRequest ? value : THROW_CCE());
  };
  protoOf($serializer_16).v1y = function (decoder) {
    var tmp0_desc = this.dar_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.g22(tmp0_desc);
    if (tmp8_input.w22()) {
      tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.q22(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.q22(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.h22(tmp0_desc);
    return SigningRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_16).t1y = function () {
    return this.dar_1;
  };
  protoOf($serializer_16).l2a = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_16().dar_1);
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
  protoOf(Secret).far = function () {
    return this.signingResponse;
  };
  protoOf(Secret).cc = function () {
    return this.signingResponse;
  };
  protoOf(Secret).gar = function (signingResponse) {
    return new Secret(signingResponse);
  };
  protoOf(Secret).copy = function (signingResponse, $super) {
    signingResponse = signingResponse === VOID ? this.signingResponse : signingResponse;
    return $super === VOID ? this.gar(signingResponse) : $super.gar.call(this, signingResponse);
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
  protoOf(SigningRequest).har = function () {
    return this.alg;
  };
  protoOf(SigningRequest).m7i = function () {
    return this.kid;
  };
  protoOf(SigningRequest).iar = function () {
    return this.serializedPayload;
  };
  protoOf(SigningRequest).t9y = function () {
    return this.type;
  };
  protoOf(SigningRequest).cc = function () {
    return this.alg;
  };
  protoOf(SigningRequest).dc = function () {
    return this.kid;
  };
  protoOf(SigningRequest).qp = function () {
    return this.serializedPayload;
  };
  protoOf(SigningRequest).j6y = function () {
    return this.type;
  };
  protoOf(SigningRequest).e7i = function (alg, kid, serializedPayload, type) {
    return new SigningRequest(alg, kid, serializedPayload, type);
  };
  protoOf(SigningRequest).copy = function (alg, kid, serializedPayload, type, $super) {
    alg = alg === VOID ? this.alg : alg;
    kid = kid === VOID ? this.kid : kid;
    serializedPayload = serializedPayload === VOID ? this.serializedPayload : serializedPayload;
    type = type === VOID ? this.type : type;
    return $super === VOID ? this.e7i(alg, kid, serializedPayload, type) : $super.e7i.call(this, alg, kid, serializedPayload, type);
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
    tmp.jar_1 = [null, null, null, null, null, lazy(tmp_0, ActionDidState$Companion$$childSerializers$_anonymous__7jer9a)];
  }
  protoOf(Companion_28).l4s = function () {
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
    tmp0_serialDesc.w29('state', false);
    tmp0_serialDesc.w29('action', false);
    tmp0_serialDesc.w29('description', false);
    tmp0_serialDesc.w29('did', false);
    tmp0_serialDesc.w29('secret', false);
    tmp0_serialDesc.w29('signingRequest', false);
    tmp0_serialDesc.a29(new JsonClassDiscriminator('state'));
    this.kar_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).lar = function (encoder, value) {
    var tmp0_desc = this.kar_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().jar_1;
    tmp1_output.v23(tmp0_desc, 0, value.zaq_1);
    tmp1_output.v23(tmp0_desc, 1, value.action);
    tmp1_output.v23(tmp0_desc, 2, value.description);
    tmp1_output.v23(tmp0_desc, 3, value.did);
    tmp1_output.x23(tmp0_desc, 4, $serializer_getInstance_15(), value.secret);
    tmp1_output.x23(tmp0_desc, 5, tmp2_cached[5].z(), value.signingRequest);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_17).u1y = function (encoder, value) {
    return this.lar(encoder, value instanceof ActionDidState ? value : THROW_CCE());
  };
  protoOf($serializer_17).v1y = function (decoder) {
    var tmp0_desc = this.kar_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.g22(tmp0_desc);
    var tmp11_cached = Companion_getInstance_30().jar_1;
    if (tmp10_input.w22()) {
      tmp4_local0 = tmp10_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.q22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.q22(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.s22(tmp0_desc, 4, $serializer_getInstance_15(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.s22(tmp0_desc, 5, tmp11_cached[5].z(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.q22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.q22(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.s22(tmp0_desc, 4, $serializer_getInstance_15(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.s22(tmp0_desc, 5, tmp11_cached[5].z(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.h22(tmp0_desc);
    return ActionDidState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_17).t1y = function () {
    return this.kar_1;
  };
  protoOf($serializer_17).l2a = function () {
    var tmp0_cached = Companion_getInstance_30().jar_1;
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
      throwMissingFieldException(seen0, 63, $serializer_getInstance_17().kar_1);
    }
    DidState_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.zaq_1 = state;
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
    this.zaq_1 = state;
    this.action = action;
    this.description = description;
    this.did = did;
    this.secret = secret;
    this.signingRequest = signingRequest;
  }
  protoOf(ActionDidState).u9 = function () {
    return this.zaq_1;
  };
  protoOf(ActionDidState).mar = function () {
    return this.action;
  };
  protoOf(ActionDidState).nar = function () {
    return this.description;
  };
  protoOf(ActionDidState).da4 = function () {
    return this.did;
  };
  protoOf(ActionDidState).oar = function () {
    return this.secret;
  };
  protoOf(ActionDidState).par = function () {
    return this.signingRequest;
  };
  protoOf(ActionDidState).cc = function () {
    return this.zaq_1;
  };
  protoOf(ActionDidState).dc = function () {
    return this.action;
  };
  protoOf(ActionDidState).qp = function () {
    return this.description;
  };
  protoOf(ActionDidState).j6y = function () {
    return this.did;
  };
  protoOf(ActionDidState).q7i = function () {
    return this.secret;
  };
  protoOf(ActionDidState).i83 = function () {
    return this.signingRequest;
  };
  protoOf(ActionDidState).qar = function (state, action, description, did, secret, signingRequest) {
    return new ActionDidState(state, action, description, did, secret, signingRequest);
  };
  protoOf(ActionDidState).copy = function (state, action, description, did, secret, signingRequest, $super) {
    state = state === VOID ? this.zaq_1 : state;
    action = action === VOID ? this.action : action;
    description = description === VOID ? this.description : description;
    did = did === VOID ? this.did : did;
    secret = secret === VOID ? this.secret : secret;
    signingRequest = signingRequest === VOID ? this.signingRequest : signingRequest;
    return $super === VOID ? this.qar(state, action, description, did, secret, signingRequest) : $super.qar.call(this, state, action, description, did, secret, signingRequest);
  };
  protoOf(ActionDidState).toString = function () {
    return 'ActionDidState(state=' + this.zaq_1 + ', action=' + this.action + ', description=' + this.description + ', did=' + this.did + ', secret=' + this.secret.toString() + ', signingRequest=' + toString_0(this.signingRequest) + ')';
  };
  protoOf(ActionDidState).hashCode = function () {
    var result = getStringHashCode(this.zaq_1);
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
    if (!(this.zaq_1 === tmp0_other_with_cast.zaq_1))
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
    tmp.rar_1 = [tmp_1, tmp_3, null, lazy(tmp_4, DidDocument$Companion$$childSerializers$_anonymous__v0p2uo_2)];
  }
  protoOf(Companion_29).l4s = function () {
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
    tmp0_serialDesc.w29('authentication', false);
    tmp0_serialDesc.w29('controller', false);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('verificationMethod', false);
    this.sar_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).tar = function (encoder, value) {
    var tmp0_desc = this.sar_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_31().rar_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.authentication);
    tmp1_output.x23(tmp0_desc, 1, tmp2_cached[1].z(), value.controller);
    tmp1_output.v23(tmp0_desc, 2, value.id);
    tmp1_output.x23(tmp0_desc, 3, tmp2_cached[3].z(), value.verificationMethod);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_18).u1y = function (encoder, value) {
    return this.tar(encoder, value instanceof DidDocument_0 ? value : THROW_CCE());
  };
  protoOf($serializer_18).v1y = function (decoder) {
    var tmp0_desc = this.sar_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.g22(tmp0_desc);
    var tmp9_cached = Companion_getInstance_31().rar_1;
    if (tmp8_input.w22()) {
      tmp4_local0 = tmp8_input.s22(tmp0_desc, 0, tmp9_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.s22(tmp0_desc, 1, tmp9_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, tmp9_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.s22(tmp0_desc, 0, tmp9_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.s22(tmp0_desc, 1, tmp9_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, tmp9_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.h22(tmp0_desc);
    return DidDocument_init_$Create$_0(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_18).t1y = function () {
    return this.sar_1;
  };
  protoOf($serializer_18).l2a = function () {
    var tmp0_cached = Companion_getInstance_31().rar_1;
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_18().sar_1);
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
  protoOf(DidDocument_0).c9z = function () {
    return this.authentication;
  };
  protoOf(DidDocument_0).u9y = function () {
    return this.controller;
  };
  protoOf(DidDocument_0).w69 = function () {
    return this.id;
  };
  protoOf(DidDocument_0).a9z = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocument_0).cc = function () {
    return this.authentication;
  };
  protoOf(DidDocument_0).dc = function () {
    return this.controller;
  };
  protoOf(DidDocument_0).qp = function () {
    return this.id;
  };
  protoOf(DidDocument_0).j6y = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocument_0).uar = function (authentication, controller, id, verificationMethod) {
    return new DidDocument_0(authentication, controller, id, verificationMethod);
  };
  protoOf(DidDocument_0).copy = function (authentication, controller, id, verificationMethod, $super) {
    authentication = authentication === VOID ? this.authentication : authentication;
    controller = controller === VOID ? this.controller : controller;
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    return $super === VOID ? this.uar(authentication, controller, id, verificationMethod) : $super.uar.call(this, authentication, controller, id, verificationMethod);
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
    return $this.var_1.z();
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
    tmp.var_1 = lazy(tmp_0, DidState$Companion$_anonymous__ee3el);
  }
  protoOf(Companion_30).l4s = function () {
    return _get_$cachedSerializer__te6jhj_3(this);
  };
  protoOf(Companion_30).w2a = function (typeParamsSerializers) {
    return this.l4s();
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
      builder_0.m2j(clazz, tmp$ret$1);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_0 = getKClass(FailedDidState);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_1 = serializer_0(createKType(getKClass(FailedDidState), arrayOf([]), false));
      var tmp$ret$4 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
      builder_0.m2j(clazz_0, tmp$ret$4);
      // Inline function 'kotlinx.serialization.modules.subclass' call
      var clazz_1 = getKClass(FinishedDidState);
      // Inline function 'kotlinx.serialization.serializer' call
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer_0(createKType(getKClass(FinishedDidState), arrayOf([]), false));
      var tmp$ret$7 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      builder_0.m2j(clazz_1, tmp$ret$7);
      builder_0.n2j(builder);
      didStateSerializationModule = builder.x27();
    }
  }
  function Companion_31() {
  }
  protoOf(Companion_31).l4s = function () {
    return $serializer_getInstance_19();
  };
  var Companion_instance_37;
  function Companion_getInstance_33() {
    return Companion_instance_37;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('failed', this, 3);
    tmp0_serialDesc.w29('state', false);
    tmp0_serialDesc.w29('reason', false);
    tmp0_serialDesc.w29('description', false);
    tmp0_serialDesc.a29(new JsonClassDiscriminator('state'));
    this.war_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).xar = function (encoder, value) {
    var tmp0_desc = this.war_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.yaq_1);
    tmp1_output.v23(tmp0_desc, 1, value.reason);
    tmp1_output.v23(tmp0_desc, 2, value.description);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_19).u1y = function (encoder, value) {
    return this.xar(encoder, value instanceof FailedDidState ? value : THROW_CCE());
  };
  protoOf($serializer_19).v1y = function (decoder) {
    var tmp0_desc = this.war_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.g22(tmp0_desc);
    if (tmp7_input.w22()) {
      tmp4_local0 = tmp7_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.q22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.q22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.h22(tmp0_desc);
    return FailedDidState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_19).t1y = function () {
    return this.war_1;
  };
  protoOf($serializer_19).l2a = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_19().war_1);
    }
    DidState_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.yaq_1 = state;
    $this.reason = reason;
    $this.description = description;
    return $this;
  }
  function FailedDidState_init_$Create$(seen0, state, reason, description, serializationConstructorMarker) {
    return FailedDidState_init_$Init$(seen0, state, reason, description, serializationConstructorMarker, objectCreate(protoOf(FailedDidState)));
  }
  function FailedDidState(state, reason, description) {
    DidState.call(this);
    this.yaq_1 = state;
    this.reason = reason;
    this.description = description;
  }
  protoOf(FailedDidState).u9 = function () {
    return this.yaq_1;
  };
  protoOf(FailedDidState).yar = function () {
    return this.reason;
  };
  protoOf(FailedDidState).nar = function () {
    return this.description;
  };
  protoOf(FailedDidState).cc = function () {
    return this.yaq_1;
  };
  protoOf(FailedDidState).dc = function () {
    return this.reason;
  };
  protoOf(FailedDidState).qp = function () {
    return this.description;
  };
  protoOf(FailedDidState).l9a = function (state, reason, description) {
    return new FailedDidState(state, reason, description);
  };
  protoOf(FailedDidState).copy = function (state, reason, description, $super) {
    state = state === VOID ? this.yaq_1 : state;
    reason = reason === VOID ? this.reason : reason;
    description = description === VOID ? this.description : description;
    return $super === VOID ? this.l9a(state, reason, description) : $super.l9a.call(this, state, reason, description);
  };
  protoOf(FailedDidState).toString = function () {
    return 'FailedDidState(state=' + this.yaq_1 + ', reason=' + this.reason + ', description=' + this.description + ')';
  };
  protoOf(FailedDidState).hashCode = function () {
    var result = getStringHashCode(this.yaq_1);
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
    if (!(this.yaq_1 === tmp0_other_with_cast.yaq_1))
      return false;
    if (!(this.reason === tmp0_other_with_cast.reason))
      return false;
    if (!(this.description === tmp0_other_with_cast.description))
      return false;
    return true;
  };
  function Companion_32() {
  }
  protoOf(Companion_32).l4s = function () {
    return $serializer_getInstance_20();
  };
  var Companion_instance_38;
  function Companion_getInstance_34() {
    return Companion_instance_38;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('finished', this, 4);
    tmp0_serialDesc.w29('state', false);
    tmp0_serialDesc.w29('did', false);
    tmp0_serialDesc.w29('didDocument', false);
    tmp0_serialDesc.w29('secret', false);
    tmp0_serialDesc.a29(new JsonClassDiscriminator('state'));
    this.zar_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).aas = function (encoder, value) {
    var tmp0_desc = this.zar_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.xaq_1);
    tmp1_output.v23(tmp0_desc, 1, value.did);
    tmp1_output.x23(tmp0_desc, 2, $serializer_getInstance_18(), value.didDocument);
    tmp1_output.x23(tmp0_desc, 3, $serializer_getInstance_21(), value.secret);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_20).u1y = function (encoder, value) {
    return this.aas(encoder, value instanceof FinishedDidState ? value : THROW_CCE());
  };
  protoOf($serializer_20).v1y = function (decoder) {
    var tmp0_desc = this.zar_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.g22(tmp0_desc);
    if (tmp8_input.w22()) {
      tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.s22(tmp0_desc, 2, $serializer_getInstance_18(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, $serializer_getInstance_21(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.s22(tmp0_desc, 2, $serializer_getInstance_18(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, $serializer_getInstance_21(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.h22(tmp0_desc);
    return FinishedDidState_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_20).t1y = function () {
    return this.zar_1;
  };
  protoOf($serializer_20).l2a = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_20().zar_1);
    }
    DidState_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.xaq_1 = state;
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
    this.xaq_1 = state;
    this.did = did;
    this.didDocument = didDocument;
    this.secret = secret;
  }
  protoOf(FinishedDidState).u9 = function () {
    return this.xaq_1;
  };
  protoOf(FinishedDidState).da4 = function () {
    return this.did;
  };
  protoOf(FinishedDidState).ea4 = function () {
    return this.didDocument;
  };
  protoOf(FinishedDidState).oar = function () {
    return this.secret;
  };
  protoOf(FinishedDidState).cc = function () {
    return this.xaq_1;
  };
  protoOf(FinishedDidState).dc = function () {
    return this.did;
  };
  protoOf(FinishedDidState).qp = function () {
    return this.didDocument;
  };
  protoOf(FinishedDidState).j6y = function () {
    return this.secret;
  };
  protoOf(FinishedDidState).bas = function (state, did, didDocument, secret) {
    return new FinishedDidState(state, did, didDocument, secret);
  };
  protoOf(FinishedDidState).copy = function (state, did, didDocument, secret, $super) {
    state = state === VOID ? this.xaq_1 : state;
    did = did === VOID ? this.did : did;
    didDocument = didDocument === VOID ? this.didDocument : didDocument;
    secret = secret === VOID ? this.secret : secret;
    return $super === VOID ? this.bas(state, did, didDocument, secret) : $super.bas.call(this, state, did, didDocument, secret);
  };
  protoOf(FinishedDidState).toString = function () {
    return 'FinishedDidState(state=' + this.xaq_1 + ', did=' + this.did + ', didDocument=' + this.didDocument.toString() + ', secret=' + this.secret.toString() + ')';
  };
  protoOf(FinishedDidState).hashCode = function () {
    var result = getStringHashCode(this.xaq_1);
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
    if (!(this.xaq_1 === tmp0_other_with_cast.xaq_1))
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
    tmp.cas_1 = [lazy(tmp_0, Secret$Companion$$childSerializers$_anonymous__6mbhq2)];
  }
  protoOf(Companion_33).l4s = function () {
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
    tmp0_serialDesc.w29('signingResponse', false);
    this.das_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).eas = function (encoder, value) {
    var tmp0_desc = this.das_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_35().cas_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.signingResponse);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_21).u1y = function (encoder, value) {
    return this.eas(encoder, value instanceof Secret_0 ? value : THROW_CCE());
  };
  protoOf($serializer_21).v1y = function (decoder) {
    var tmp0_desc = this.das_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.g22(tmp0_desc);
    var tmp6_cached = Companion_getInstance_35().cas_1;
    if (tmp5_input.w22()) {
      tmp4_local0 = tmp5_input.s22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.s22(tmp0_desc, 0, tmp6_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.h22(tmp0_desc);
    return Secret_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_21).t1y = function () {
    return this.das_1;
  };
  protoOf($serializer_21).l2a = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_35().cas_1[0].z()];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function Secret_init_$Init$_0(seen0, signingResponse, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_21().das_1);
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
  protoOf(Secret_0).far = function () {
    return this.signingResponse;
  };
  protoOf(Secret_0).cc = function () {
    return this.signingResponse;
  };
  protoOf(Secret_0).fas = function (signingResponse) {
    return new Secret_0(signingResponse);
  };
  protoOf(Secret_0).copy = function (signingResponse, $super) {
    signingResponse = signingResponse === VOID ? this.signingResponse : signingResponse;
    return $super === VOID ? this.fas(signingResponse) : $super.fas.call(this, signingResponse);
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
  protoOf(Companion_34).l4s = function () {
    return $serializer_getInstance_22();
  };
  var Companion_instance_40;
  function Companion_getInstance_36() {
    return Companion_instance_40;
  }
  function $serializer_22() {
    $serializer_instance_22 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.SigningResponse', this, 3);
    tmp0_serialDesc.w29('signature', false);
    tmp0_serialDesc.w29('verificationMethodId', true);
    tmp0_serialDesc.w29('kid', true);
    this.gas_1 = tmp0_serialDesc;
  }
  protoOf($serializer_22).has = function (encoder, value) {
    var tmp0_desc = this.gas_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.signature);
    if (tmp1_output.d24(tmp0_desc, 1) ? true : !(value.verificationMethodId == null)) {
      tmp1_output.z23(tmp0_desc, 1, StringSerializer_getInstance(), value.verificationMethodId);
    }
    if (tmp1_output.d24(tmp0_desc, 2) ? true : !(value.kid == null)) {
      tmp1_output.z23(tmp0_desc, 2, StringSerializer_getInstance(), value.kid);
    }
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_22).u1y = function (encoder, value) {
    return this.has(encoder, value instanceof SigningResponse ? value : THROW_CCE());
  };
  protoOf($serializer_22).v1y = function (decoder) {
    var tmp0_desc = this.gas_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.g22(tmp0_desc);
    if (tmp7_input.w22()) {
      tmp4_local0 = tmp7_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.u22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.u22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.u22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.u22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.h22(tmp0_desc);
    return SigningResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_22).t1y = function () {
    return this.gas_1;
  };
  protoOf($serializer_22).l2a = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_22().gas_1);
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
  protoOf(SigningResponse).g9a = function () {
    return this.signature;
  };
  protoOf(SigningResponse).ias = function () {
    return this.verificationMethodId;
  };
  protoOf(SigningResponse).m7i = function () {
    return this.kid;
  };
  protoOf(SigningResponse).cc = function () {
    return this.signature;
  };
  protoOf(SigningResponse).dc = function () {
    return this.verificationMethodId;
  };
  protoOf(SigningResponse).qp = function () {
    return this.kid;
  };
  protoOf(SigningResponse).jas = function (signature, verificationMethodId, kid) {
    return new SigningResponse(signature, verificationMethodId, kid);
  };
  protoOf(SigningResponse).copy = function (signature, verificationMethodId, kid, $super) {
    signature = signature === VOID ? this.signature : signature;
    verificationMethodId = verificationMethodId === VOID ? this.verificationMethodId : verificationMethodId;
    kid = kid === VOID ? this.kid : kid;
    return $super === VOID ? this.jas(signature, verificationMethodId, kid) : $super.jas.call(this, signature, verificationMethodId, kid);
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
  protoOf(Companion_35).l4s = function () {
    return $serializer_getInstance_23();
  };
  var Companion_instance_41;
  function Companion_getInstance_37() {
    return Companion_instance_41;
  }
  function $serializer_23() {
    $serializer_instance_23 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.didstates.VerificationMethod', this, 5);
    tmp0_serialDesc.w29('controller', false);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('publicKeyMultibase', true);
    tmp0_serialDesc.w29('publicKeyBase58', true);
    tmp0_serialDesc.w29('type', false);
    this.kas_1 = tmp0_serialDesc;
  }
  protoOf($serializer_23).las = function (encoder, value) {
    var tmp0_desc = this.kas_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.controller);
    tmp1_output.v23(tmp0_desc, 1, value.id);
    if (tmp1_output.d24(tmp0_desc, 2) ? true : !(value.publicKeyMultibase == null)) {
      tmp1_output.z23(tmp0_desc, 2, StringSerializer_getInstance(), value.publicKeyMultibase);
    }
    if (tmp1_output.d24(tmp0_desc, 3) ? true : !(value.publicKeyBase58 == null)) {
      tmp1_output.z23(tmp0_desc, 3, StringSerializer_getInstance(), value.publicKeyBase58);
    }
    tmp1_output.v23(tmp0_desc, 4, value.type);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_23).u1y = function (encoder, value) {
    return this.las(encoder, value instanceof VerificationMethod_5 ? value : THROW_CCE());
  };
  protoOf($serializer_23).v1y = function (decoder) {
    var tmp0_desc = this.kas_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.g22(tmp0_desc);
    if (tmp9_input.w22()) {
      tmp4_local0 = tmp9_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.q22(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.u22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.u22(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.q22(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.u22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.u22(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.q22(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.h22(tmp0_desc);
    return VerificationMethod_init_$Create$_4(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_23).t1y = function () {
    return this.kas_1;
  };
  protoOf($serializer_23).l2a = function () {
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
      throwMissingFieldException(seen0, 19, $serializer_getInstance_23().kas_1);
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
  protoOf(VerificationMethod_5).u9y = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_5).w69 = function () {
    return this.id;
  };
  protoOf(VerificationMethod_5).mas = function () {
    return this.publicKeyMultibase;
  };
  protoOf(VerificationMethod_5).nas = function () {
    return this.publicKeyBase58;
  };
  protoOf(VerificationMethod_5).t9y = function () {
    return this.type;
  };
  protoOf(VerificationMethod_5).cc = function () {
    return this.controller;
  };
  protoOf(VerificationMethod_5).dc = function () {
    return this.id;
  };
  protoOf(VerificationMethod_5).qp = function () {
    return this.publicKeyMultibase;
  };
  protoOf(VerificationMethod_5).j6y = function () {
    return this.publicKeyBase58;
  };
  protoOf(VerificationMethod_5).q7i = function () {
    return this.type;
  };
  protoOf(VerificationMethod_5).oas = function (controller, id, publicKeyMultibase, publicKeyBase58, type) {
    return new VerificationMethod_5(controller, id, publicKeyMultibase, publicKeyBase58, type);
  };
  protoOf(VerificationMethod_5).copy = function (controller, id, publicKeyMultibase, publicKeyBase58, type, $super) {
    controller = controller === VOID ? this.controller : controller;
    id = id === VOID ? this.id : id;
    publicKeyMultibase = publicKeyMultibase === VOID ? this.publicKeyMultibase : publicKeyMultibase;
    publicKeyBase58 = publicKeyBase58 === VOID ? this.publicKeyBase58 : publicKeyBase58;
    type = type === VOID ? this.type : type;
    return $super === VOID ? this.oas(controller, id, publicKeyMultibase, publicKeyBase58, type) : $super.oas.call(this, controller, id, publicKeyMultibase, publicKeyBase58, type);
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
  protoOf(Companion_36).l4s = function () {
    return $serializer_getInstance_24();
  };
  var Companion_instance_42;
  function Companion_getInstance_38() {
    return Companion_instance_42;
  }
  function $serializer_24() {
    $serializer_instance_24 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.request.JobCreateRequest', this, 1);
    tmp0_serialDesc.w29('didDocument', false);
    this.pas_1 = tmp0_serialDesc;
  }
  protoOf($serializer_24).qas = function (encoder, value) {
    var tmp0_desc = this.pas_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.x23(tmp0_desc, 0, $serializer_getInstance_29(), value.didDocument);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_24).u1y = function (encoder, value) {
    return this.qas(encoder, value instanceof JobCreateRequest ? value : THROW_CCE());
  };
  protoOf($serializer_24).v1y = function (decoder) {
    var tmp0_desc = this.pas_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.g22(tmp0_desc);
    if (tmp5_input.w22()) {
      tmp4_local0 = tmp5_input.s22(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.s22(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.h22(tmp0_desc);
    return JobCreateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_24).t1y = function () {
    return this.pas_1;
  };
  protoOf($serializer_24).l2a = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_24().pas_1);
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
  protoOf(JobCreateRequest).ea4 = function () {
    return this.didDocument;
  };
  protoOf(JobCreateRequest).cc = function () {
    return this.didDocument;
  };
  protoOf(JobCreateRequest).ras = function (didDocument) {
    return new JobCreateRequest(didDocument);
  };
  protoOf(JobCreateRequest).copy = function (didDocument, $super) {
    didDocument = didDocument === VOID ? this.didDocument : didDocument;
    return $super === VOID ? this.ras(didDocument) : $super.ras.call(this, didDocument);
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
  protoOf(Companion_37).l4s = function () {
    return $serializer_getInstance_25();
  };
  var Companion_instance_43;
  function Companion_getInstance_39() {
    return Companion_instance_43;
  }
  function $serializer_25() {
    $serializer_instance_25 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.request.JobDeactivateRequest', this, 1);
    tmp0_serialDesc.w29('did', false);
    this.sas_1 = tmp0_serialDesc;
  }
  protoOf($serializer_25).tas = function (encoder, value) {
    var tmp0_desc = this.sas_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.did);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_25).u1y = function (encoder, value) {
    return this.tas(encoder, value instanceof JobDeactivateRequest ? value : THROW_CCE());
  };
  protoOf($serializer_25).v1y = function (decoder) {
    var tmp0_desc = this.sas_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.g22(tmp0_desc);
    if (tmp5_input.w22()) {
      tmp4_local0 = tmp5_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.h22(tmp0_desc);
    return JobDeactivateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_25).t1y = function () {
    return this.sas_1;
  };
  protoOf($serializer_25).l2a = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_25().sas_1);
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
  protoOf(JobDeactivateRequest).da4 = function () {
    return this.did;
  };
  protoOf(JobDeactivateRequest).cc = function () {
    return this.did;
  };
  protoOf(JobDeactivateRequest).za0 = function (did) {
    return new JobDeactivateRequest(did);
  };
  protoOf(JobDeactivateRequest).copy = function (did, $super) {
    did = did === VOID ? this.did : did;
    return $super === VOID ? this.za0(did) : $super.za0.call(this, did);
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
  protoOf(Companion_38).l4s = function () {
    return $serializer_getInstance_26();
  };
  var Companion_instance_44;
  function Companion_getInstance_40() {
    return Companion_instance_44;
  }
  function $serializer_26() {
    $serializer_instance_26 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.request.JobSignRequest', this, 2);
    tmp0_serialDesc.w29('jobId', false);
    tmp0_serialDesc.w29('secret', false);
    this.uas_1 = tmp0_serialDesc;
  }
  protoOf($serializer_26).vas = function (encoder, value) {
    var tmp0_desc = this.uas_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.jobId);
    tmp1_output.x23(tmp0_desc, 1, $serializer_getInstance_21(), value.secret);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_26).u1y = function (encoder, value) {
    return this.vas(encoder, value instanceof JobSignRequest ? value : THROW_CCE());
  };
  protoOf($serializer_26).v1y = function (decoder) {
    var tmp0_desc = this.uas_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.g22(tmp0_desc);
    if (tmp6_input.w22()) {
      tmp4_local0 = tmp6_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.s22(tmp0_desc, 1, $serializer_getInstance_21(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.s22(tmp0_desc, 1, $serializer_getInstance_21(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.h22(tmp0_desc);
    return JobSignRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_26).t1y = function () {
    return this.uas_1;
  };
  protoOf($serializer_26).l2a = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_26().uas_1);
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
  protoOf(JobSignRequest).was = function () {
    return this.jobId;
  };
  protoOf(JobSignRequest).oar = function () {
    return this.secret;
  };
  protoOf(JobSignRequest).cc = function () {
    return this.jobId;
  };
  protoOf(JobSignRequest).dc = function () {
    return this.secret;
  };
  protoOf(JobSignRequest).xas = function (jobId, secret) {
    return new JobSignRequest(jobId, secret);
  };
  protoOf(JobSignRequest).copy = function (jobId, secret, $super) {
    jobId = jobId === VOID ? this.jobId : jobId;
    secret = secret === VOID ? this.secret : secret;
    return $super === VOID ? this.xas(jobId, secret) : $super.xas.call(this, jobId, secret);
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
    return Companion_getInstance_32().l4s();
  }
  function Companion_39() {
    Companion_instance_45 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.yas_1 = [lazy(tmp_0, JobActionResponse$Companion$$childSerializers$_anonymous__c2i9bq), null];
  }
  protoOf(Companion_39).l4s = function () {
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
    tmp0_serialDesc.w29('didState', false);
    tmp0_serialDesc.w29('jobId', true);
    this.zas_1 = tmp0_serialDesc;
  }
  protoOf($serializer_27).aat = function (encoder, value) {
    var tmp0_desc = this.zas_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_41().yas_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.didState);
    if (tmp1_output.d24(tmp0_desc, 1) ? true : !(value.jobId == null)) {
      tmp1_output.z23(tmp0_desc, 1, StringSerializer_getInstance(), value.jobId);
    }
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_27).u1y = function (encoder, value) {
    return this.aat(encoder, value instanceof JobActionResponse ? value : THROW_CCE());
  };
  protoOf($serializer_27).v1y = function (decoder) {
    var tmp0_desc = this.zas_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.g22(tmp0_desc);
    var tmp7_cached = Companion_getInstance_41().yas_1;
    if (tmp6_input.w22()) {
      tmp4_local0 = tmp6_input.s22(tmp0_desc, 0, tmp7_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.u22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.s22(tmp0_desc, 0, tmp7_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.u22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.h22(tmp0_desc);
    return JobActionResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_27).t1y = function () {
    return this.zas_1;
  };
  protoOf($serializer_27).l2a = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_41().yas_1[0].z(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_27;
  function $serializer_getInstance_27() {
    if ($serializer_instance_27 == null)
      new $serializer_27();
    return $serializer_instance_27;
  }
  function JobActionResponse_init_$Init$(seen0, didState, jobId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_27().zas_1);
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
  protoOf(JobActionResponse).bat = function () {
    return this.didState;
  };
  protoOf(JobActionResponse).was = function () {
    return this.jobId;
  };
  protoOf(JobActionResponse).cc = function () {
    return this.didState;
  };
  protoOf(JobActionResponse).dc = function () {
    return this.jobId;
  };
  protoOf(JobActionResponse).cat = function (didState, jobId) {
    return new JobActionResponse(didState, jobId);
  };
  protoOf(JobActionResponse).copy = function (didState, jobId, $super) {
    didState = didState === VOID ? this.didState : didState;
    jobId = jobId === VOID ? this.jobId : jobId;
    return $super === VOID ? this.cat(didState, jobId) : $super.cat.call(this, didState, jobId);
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
  protoOf(Companion_40).l4s = function () {
    return $serializer_getInstance_28();
  };
  var Companion_instance_46;
  function Companion_getInstance_42() {
    return Companion_instance_46;
  }
  function $serializer_28() {
    $serializer_instance_28 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.CheqdKey', this, 3);
    tmp0_serialDesc.w29('publicKeyHex', false);
    tmp0_serialDesc.w29('verificationMethodId', true);
    tmp0_serialDesc.w29('keyId', true);
    this.dat_1 = tmp0_serialDesc;
  }
  protoOf($serializer_28).eat = function (encoder, value) {
    var tmp0_desc = this.dat_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.publicKeyHex);
    if (tmp1_output.d24(tmp0_desc, 1) ? true : !(value.verificationMethodId == null)) {
      tmp1_output.z23(tmp0_desc, 1, StringSerializer_getInstance(), value.verificationMethodId);
    }
    if (tmp1_output.d24(tmp0_desc, 2) ? true : !(value.keyId == null)) {
      tmp1_output.z23(tmp0_desc, 2, StringSerializer_getInstance(), value.keyId);
    }
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_28).u1y = function (encoder, value) {
    return this.eat(encoder, value instanceof CheqdKey ? value : THROW_CCE());
  };
  protoOf($serializer_28).v1y = function (decoder) {
    var tmp0_desc = this.dat_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.g22(tmp0_desc);
    if (tmp7_input.w22()) {
      tmp4_local0 = tmp7_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.u22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.u22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.q22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.u22(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.u22(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.h22(tmp0_desc);
    return CheqdKey_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_28).t1y = function () {
    return this.dat_1;
  };
  protoOf($serializer_28).l2a = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_28().dat_1);
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
  protoOf(CheqdKey).fat = function () {
    return this.publicKeyHex;
  };
  protoOf(CheqdKey).ias = function () {
    return this.verificationMethodId;
  };
  protoOf(CheqdKey).gat = function () {
    return this.keyId;
  };
  protoOf(CheqdKey).cc = function () {
    return this.publicKeyHex;
  };
  protoOf(CheqdKey).dc = function () {
    return this.verificationMethodId;
  };
  protoOf(CheqdKey).qp = function () {
    return this.keyId;
  };
  protoOf(CheqdKey).jas = function (publicKeyHex, verificationMethodId, keyId) {
    return new CheqdKey(publicKeyHex, verificationMethodId, keyId);
  };
  protoOf(CheqdKey).copy = function (publicKeyHex, verificationMethodId, keyId, $super) {
    publicKeyHex = publicKeyHex === VOID ? this.publicKeyHex : publicKeyHex;
    verificationMethodId = verificationMethodId === VOID ? this.verificationMethodId : verificationMethodId;
    keyId = keyId === VOID ? this.keyId : keyId;
    return $super === VOID ? this.jas(publicKeyHex, verificationMethodId, keyId) : $super.jas.call(this, publicKeyHex, verificationMethodId, keyId);
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
    tmp.hat_1 = [tmp_1, tmp_3, null, lazy(tmp_4, DidDocObject$Companion$$childSerializers$_anonymous__xn5fou_1)];
  }
  protoOf(Companion_41).l4s = function () {
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
    tmp0_serialDesc.w29('authentication', false);
    tmp0_serialDesc.w29('controller', false);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('verificationMethod', false);
    this.iat_1 = tmp0_serialDesc;
  }
  protoOf($serializer_29).jat = function (encoder, value) {
    var tmp0_desc = this.iat_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_43().hat_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.authentication);
    tmp1_output.x23(tmp0_desc, 1, tmp2_cached[1].z(), value.controller);
    tmp1_output.v23(tmp0_desc, 2, value.id);
    tmp1_output.x23(tmp0_desc, 3, tmp2_cached[3].z(), value.verificationMethod);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_29).u1y = function (encoder, value) {
    return this.jat(encoder, value instanceof DidDocObject ? value : THROW_CCE());
  };
  protoOf($serializer_29).v1y = function (decoder) {
    var tmp0_desc = this.iat_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.g22(tmp0_desc);
    var tmp9_cached = Companion_getInstance_43().hat_1;
    if (tmp8_input.w22()) {
      tmp4_local0 = tmp8_input.s22(tmp0_desc, 0, tmp9_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.s22(tmp0_desc, 1, tmp9_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, tmp9_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.s22(tmp0_desc, 0, tmp9_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.s22(tmp0_desc, 1, tmp9_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.q22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.s22(tmp0_desc, 3, tmp9_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.h22(tmp0_desc);
    return DidDocObject_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_29).t1y = function () {
    return this.iat_1;
  };
  protoOf($serializer_29).l2a = function () {
    var tmp0_cached = Companion_getInstance_43().hat_1;
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_29().iat_1);
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
  protoOf(DidDocObject).c9z = function () {
    return this.authentication;
  };
  protoOf(DidDocObject).u9y = function () {
    return this.controller;
  };
  protoOf(DidDocObject).w69 = function () {
    return this.id;
  };
  protoOf(DidDocObject).a9z = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocObject).cc = function () {
    return this.authentication;
  };
  protoOf(DidDocObject).dc = function () {
    return this.controller;
  };
  protoOf(DidDocObject).qp = function () {
    return this.id;
  };
  protoOf(DidDocObject).j6y = function () {
    return this.verificationMethod;
  };
  protoOf(DidDocObject).uar = function (authentication, controller, id, verificationMethod) {
    return new DidDocObject(authentication, controller, id, verificationMethod);
  };
  protoOf(DidDocObject).copy = function (authentication, controller, id, verificationMethod, $super) {
    authentication = authentication === VOID ? this.authentication : authentication;
    controller = controller === VOID ? this.controller : controller;
    id = id === VOID ? this.id : id;
    verificationMethod = verificationMethod === VOID ? this.verificationMethod : verificationMethod;
    return $super === VOID ? this.uar(authentication, controller, id, verificationMethod) : $super.uar.call(this, authentication, controller, id, verificationMethod);
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
  protoOf(Companion_42).l4s = function () {
    return $serializer_getInstance_30();
  };
  var Companion_instance_48;
  function Companion_getInstance_44() {
    return Companion_instance_48;
  }
  function $serializer_30() {
    $serializer_instance_30 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.did.dids.registrar.local.cheqd.models.job.response.didresponse.DidGetResponse', this, 2);
    tmp0_serialDesc.w29('didDoc', false);
    tmp0_serialDesc.w29('key', false);
    this.kat_1 = tmp0_serialDesc;
  }
  protoOf($serializer_30).lat = function (encoder, value) {
    var tmp0_desc = this.kat_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.x23(tmp0_desc, 0, $serializer_getInstance_29(), value.didDoc);
    tmp1_output.x23(tmp0_desc, 1, $serializer_getInstance_28(), value.key);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_30).u1y = function (encoder, value) {
    return this.lat(encoder, value instanceof DidGetResponse ? value : THROW_CCE());
  };
  protoOf($serializer_30).v1y = function (decoder) {
    var tmp0_desc = this.kat_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.g22(tmp0_desc);
    if (tmp6_input.w22()) {
      tmp4_local0 = tmp6_input.s22(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.s22(tmp0_desc, 1, $serializer_getInstance_28(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.s22(tmp0_desc, 0, $serializer_getInstance_29(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.s22(tmp0_desc, 1, $serializer_getInstance_28(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.h22(tmp0_desc);
    return DidGetResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_30).t1y = function () {
    return this.kat_1;
  };
  protoOf($serializer_30).l2a = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_30().kat_1);
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
  protoOf(DidGetResponse).mat = function () {
    return this.didDoc;
  };
  protoOf(DidGetResponse).y = function () {
    return this.key;
  };
  protoOf(DidGetResponse).cc = function () {
    return this.didDoc;
  };
  protoOf(DidGetResponse).dc = function () {
    return this.key;
  };
  protoOf(DidGetResponse).nat = function (didDoc, key) {
    return new DidGetResponse(didDoc, key);
  };
  protoOf(DidGetResponse).copy = function (didDoc, key, $super) {
    didDoc = didDoc === VOID ? this.didDoc : didDoc;
    key = key === VOID ? this.key : key;
    return $super === VOID ? this.nat(didDoc, key) : $super.nat.call(this, didDoc, key);
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
    this.wat_1 = this$0;
    this.xat_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkRegistrar$registerAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidJwkRegistrar$registerAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.wat_1.q9s(this.xat_1, this);
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
    return new DidJwkRegistrar$registerAsync$slambda(this.wat_1, this.xat_1, completion);
  };
  function DidJwkRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidJwkRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidJwkRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.gau_1 = this$0;
    this.hau_1 = $key;
    this.iau_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkRegistrar$registerByKeyAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidJwkRegistrar$registerByKeyAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.gau_1.ea6(this.hau_1, this.iau_1, this);
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
    return new DidJwkRegistrar$registerByKeyAsync$slambda(this.gau_1, this.hau_1, this.iau_1, completion);
  };
  function DidJwkRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidJwkRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$19(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rau_1 = _this__u8e3s4;
    this.sau_1 = options;
  }
  protoOf($registerCOROUTINE$19).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            var this_0 = this.sau_1;
            var tmp0_safe_receiver = get_jsonObject(this_0.config).ze('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ze('keyType');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p4s();
            var tmp_1;
            if (tmp4_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var tmp0_subject = getKClass(KeyType);
              var tmp_2;
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().fd())) {
                tmp_2 = toBoolean(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().id())) {
                tmp_2 = toIntOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(Long))) {
                tmp_2 = toLongOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().kd())) {
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
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().md())) {
                tmp_2 = tmp4_safe_receiver;
              } else {
                tmp_2 = null;
              }
              var tmp_3 = tmp_2;
              tmp_1 = tmp_3 instanceof KeyType ? tmp_3 : null;
            }

            tmp_0.tau_1 = tmp_1;
            if (this.tau_1 == null) {
              this.uau_1 = null;
              this.m9_1 = 3;
              continue $sm;
            } else {
              var tmp_4 = this;
              tmp_4.vau_1 = this.tau_1;
              this.wau_1 = this.vau_1;
              var tmp_5 = this;
              tmp_5.xau_1 = this.wau_1;
              this.yau_1 = this.xau_1;
              this.m9_1 = 1;
              suspendResult = Companion_instance_4.generate$default(this.yau_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.zau_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.rau_1.ea6(this.zau_1, this.sau_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.uau_1 = suspendResult;
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var tmp1_elvis_lhs = this.uau_1;
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
  protoOf($registerCOROUTINE$19)['<set-state>'] = protoOf($registerCOROUTINE$19).t9;
  protoOf($registerCOROUTINE$19)['<get-state>'] = protoOf($registerCOROUTINE$19).u9;
  protoOf($registerCOROUTINE$19)['<set-exceptionState>'] = protoOf($registerCOROUTINE$19).v9;
  protoOf($registerCOROUTINE$19)['<get-exceptionState>'] = protoOf($registerCOROUTINE$19).w9;
  protoOf($registerCOROUTINE$19)['<set-result>'] = protoOf($registerCOROUTINE$19).x9;
  protoOf($registerCOROUTINE$19)['<get-result>'] = protoOf($registerCOROUTINE$19).y9;
  protoOf($registerCOROUTINE$19)['<set-exception>'] = protoOf($registerCOROUTINE$19).z9;
  protoOf($registerCOROUTINE$19)['<get-exception>'] = protoOf($registerCOROUTINE$19).aa;
  protoOf($registerCOROUTINE$19)['<set-finallyPath>'] = protoOf($registerCOROUTINE$19).ba;
  protoOf($registerCOROUTINE$19)['<get-finallyPath>'] = protoOf($registerCOROUTINE$19).ca;
  protoOf($registerCOROUTINE$19)['<get-context>'] = protoOf($registerCOROUTINE$19).s9;
  function $registerByKeyCOROUTINE$20(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.iav_1 = _this__u8e3s4;
    this.jav_1 = key;
    this.kav_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$20).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.lav_1 = Base64Utils_getInstance();
            this.m9_1 = 1;
            suspendResult = this.jav_1.s6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.mav_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.mav_1.d6n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.nav_1 = suspendResult;
            this.oav_1 = toByteArray(this.nav_1);
            this.pav_1 = this.lav_1.encodeToBase64Url(this.oav_1);
            this.qav_1 = 'did:jwk:' + this.pav_1;
            this.m9_1 = 3;
            suspendResult = this.jav_1.s6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.rav_1 = suspendResult;
            this.m9_1 = 4;
            suspendResult = this.rav_1.o6n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_2(this.qav_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var didDocument = new DidDocument(ARGUMENT_1);
            return new DidResult(this.qav_1, didDocument);
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
  protoOf($registerByKeyCOROUTINE$20)['<set-state>'] = protoOf($registerByKeyCOROUTINE$20).t9;
  protoOf($registerByKeyCOROUTINE$20)['<get-state>'] = protoOf($registerByKeyCOROUTINE$20).u9;
  protoOf($registerByKeyCOROUTINE$20)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$20).v9;
  protoOf($registerByKeyCOROUTINE$20)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$20).w9;
  protoOf($registerByKeyCOROUTINE$20)['<set-result>'] = protoOf($registerByKeyCOROUTINE$20).x9;
  protoOf($registerByKeyCOROUTINE$20)['<get-result>'] = protoOf($registerByKeyCOROUTINE$20).y9;
  protoOf($registerByKeyCOROUTINE$20)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$20).z9;
  protoOf($registerByKeyCOROUTINE$20)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$20).aa;
  protoOf($registerByKeyCOROUTINE$20)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$20).ba;
  protoOf($registerByKeyCOROUTINE$20)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$20).ca;
  protoOf($registerByKeyCOROUTINE$20)['<get-context>'] = protoOf($registerByKeyCOROUTINE$20).s9;
  function DidJwkRegistrar() {
    LocalRegistrarMethod.call(this, 'jwk');
  }
  protoOf(DidJwkRegistrar).q9s = function (options, $completion) {
    var tmp = new $registerCOROUTINE$19(this, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidJwkRegistrar).ea6 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$20(this, key, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidJwkRegistrar).h9y = function (options) {
    var tmp = DidJwkRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidJwkRegistrar).oaj = function (key, options) {
    var tmp = DidJwkRegistrar$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function getIdentifierComponents($this, key, options, $completion) {
    var tmp = new $getIdentifierComponentsCOROUTINE$23($this, key, options, $completion);
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
    this.xaw_1 = this$0;
    this.yaw_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyRegistrar$registerAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidKeyRegistrar$registerAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.xaw_1.q9s(this.yaw_1, this);
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
    return new DidKeyRegistrar$registerAsync$slambda(this.xaw_1, this.yaw_1, completion);
  };
  function DidKeyRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidKeyRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidKeyRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.hax_1 = this$0;
    this.iax_1 = $key;
    this.jax_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyRegistrar$registerByKeyAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidKeyRegistrar$registerByKeyAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.hax_1.ea6(this.iax_1, this.jax_1, this);
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
    return new DidKeyRegistrar$registerByKeyAsync$slambda(this.hax_1, this.iax_1, this.jax_1, completion);
  };
  function DidKeyRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidKeyRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$21(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sax_1 = _this__u8e3s4;
    this.tax_1 = options;
  }
  protoOf($registerCOROUTINE$21).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            var this_0 = this.tax_1;
            var tmp0_safe_receiver = get_jsonObject(this_0.config).ze('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ze('keyType');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p4s();
            var tmp_1;
            if (tmp4_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var tmp0_subject = getKClass(KeyType);
              var tmp_2;
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().fd())) {
                tmp_2 = toBoolean(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().id())) {
                tmp_2 = toIntOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(Long))) {
                tmp_2 = toLongOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().kd())) {
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
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().md())) {
                tmp_2 = tmp4_safe_receiver;
              } else {
                tmp_2 = null;
              }
              var tmp_3 = tmp_2;
              tmp_1 = tmp_3 instanceof KeyType ? tmp_3 : null;
            }

            tmp_0.uax_1 = tmp_1;
            if (this.uax_1 == null) {
              this.vax_1 = null;
              this.m9_1 = 3;
              continue $sm;
            } else {
              var tmp_4 = this;
              tmp_4.wax_1 = this.uax_1;
              this.xax_1 = this.wax_1;
              var tmp_5 = this;
              tmp_5.yax_1 = this.xax_1;
              this.zax_1 = this.yax_1;
              this.m9_1 = 1;
              suspendResult = Companion_instance_4.generate$default(this.zax_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.aay_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.sax_1.ea6(this.aay_1, this.tax_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.vax_1 = suspendResult;
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var tmp1_elvis_lhs = this.vax_1;
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
  protoOf($registerCOROUTINE$21)['<set-state>'] = protoOf($registerCOROUTINE$21).t9;
  protoOf($registerCOROUTINE$21)['<get-state>'] = protoOf($registerCOROUTINE$21).u9;
  protoOf($registerCOROUTINE$21)['<set-exceptionState>'] = protoOf($registerCOROUTINE$21).v9;
  protoOf($registerCOROUTINE$21)['<get-exceptionState>'] = protoOf($registerCOROUTINE$21).w9;
  protoOf($registerCOROUTINE$21)['<set-result>'] = protoOf($registerCOROUTINE$21).x9;
  protoOf($registerCOROUTINE$21)['<get-result>'] = protoOf($registerCOROUTINE$21).y9;
  protoOf($registerCOROUTINE$21)['<set-exception>'] = protoOf($registerCOROUTINE$21).z9;
  protoOf($registerCOROUTINE$21)['<get-exception>'] = protoOf($registerCOROUTINE$21).aa;
  protoOf($registerCOROUTINE$21)['<set-finallyPath>'] = protoOf($registerCOROUTINE$21).ba;
  protoOf($registerCOROUTINE$21)['<get-finallyPath>'] = protoOf($registerCOROUTINE$21).ca;
  protoOf($registerCOROUTINE$21)['<get-context>'] = protoOf($registerCOROUTINE$21).s9;
  function $registerByKeyCOROUTINE$22(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jay_1 = _this__u8e3s4;
    this.kay_1 = key;
    this.lay_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$22).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            var tmp_0 = this;
            tmp_0.may_1 = this.lay_1;
            this.nay_1 = this.may_1;
            var tmp_1 = this;
            tmp_1.oay_1 = this.nay_1;
            this.pay_1 = this.oay_1;
            this.m9_1 = 1;
            suspendResult = this.kay_1.s6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.qay_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = getIdentifierComponents(this.jay_1, this.qay_1, this.pay_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ray_1 = suspendResult;
            this.say_1 = MultiBaseUtils_instance.n9a(this.ray_1.uay_1, this.ray_1.tay_1);
            this.m9_1 = 3;
            suspendResult = this.qay_1.o6n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            return createDid_0(this.jay_1, this.say_1, ARGUMENT);
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
  protoOf($registerByKeyCOROUTINE$22)['<set-state>'] = protoOf($registerByKeyCOROUTINE$22).t9;
  protoOf($registerByKeyCOROUTINE$22)['<get-state>'] = protoOf($registerByKeyCOROUTINE$22).u9;
  protoOf($registerByKeyCOROUTINE$22)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$22).v9;
  protoOf($registerByKeyCOROUTINE$22)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$22).w9;
  protoOf($registerByKeyCOROUTINE$22)['<set-result>'] = protoOf($registerByKeyCOROUTINE$22).x9;
  protoOf($registerByKeyCOROUTINE$22)['<get-result>'] = protoOf($registerByKeyCOROUTINE$22).y9;
  protoOf($registerByKeyCOROUTINE$22)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$22).z9;
  protoOf($registerByKeyCOROUTINE$22)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$22).aa;
  protoOf($registerByKeyCOROUTINE$22)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$22).ba;
  protoOf($registerByKeyCOROUTINE$22)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$22).ca;
  protoOf($registerByKeyCOROUTINE$22)['<get-context>'] = protoOf($registerByKeyCOROUTINE$22).s9;
  function $getIdentifierComponentsCOROUTINE$23(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.aaw_1 = _this__u8e3s4;
    this.baw_1 = key;
    this.caw_1 = options;
  }
  protoOf($getIdentifierComponentsCOROUTINE$23).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            var tmp0 = this.caw_1;
            var name = 'useJwkJcsPub';
            var tmp0_safe_receiver = get_jsonObject(tmp0.config).ze('config');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ze(name);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p4s();
            var tmp_1;
            if (tmp4_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var tmp0_subject = PrimitiveClasses_getInstance().fd();
              var tmp_2;
              if (tmp0_subject.equals(PrimitiveClasses_getInstance().fd())) {
                tmp_2 = toBoolean(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().id())) {
                tmp_2 = toIntOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(getKClass(Long))) {
                tmp_2 = toLongOrNull(tmp4_safe_receiver);
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().kd())) {
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
              } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().md())) {
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

            tmp_0.daw_1 = tmp_4;
            if (this.daw_1 == null) {
              this.eaw_1 = null;
              this.m9_1 = 2;
              continue $sm;
            } else {
              var tmp_6 = this;
              tmp_6.faw_1 = this.daw_1;
              this.gaw_1 = this.faw_1;
              var tmp_7 = this;
              tmp_7.haw_1 = this.gaw_1;
              this.iaw_1 = this.haw_1;
              this.jaw_1 = JsonCanonicalization_instance;
              this.m9_1 = 1;
              suspendResult = JsonCanonicalizationUtils_instance.n99(this.baw_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.kaw_1 = suspendResult;
            this.law_1 = this.jaw_1.getCanonicalBytes(this.kaw_1);
            this.eaw_1 = new IdentifierComponents(_UInt___init__impl__l7qpdl(60241), this.law_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.maw_1 = this.eaw_1;
            if (this.maw_1 == null) {
              this.oaw_1 = MultiCodecUtils_getInstance().getMultiCodecKeyCode(this.baw_1.keyType);
              this.m9_1 = 3;
              suspendResult = this.baw_1.m6o(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.naw_1 = this.maw_1;
              this.m9_1 = 4;
              continue $sm;
            }

          case 3:
            var ARGUMENT = suspendResult;
            this.naw_1 = new IdentifierComponents(this.oaw_1, ARGUMENT);
            this.m9_1 = 4;
            continue $sm;
          case 4:
            return this.naw_1;
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
  protoOf(DidKeyRegistrar).q9s = function (options, $completion) {
    var tmp = new $registerCOROUTINE$21(this, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidKeyRegistrar).ea6 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$22(this, key, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidKeyRegistrar).h9y = function (options) {
    var tmp = DidKeyRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidKeyRegistrar).oaj = function (key, options) {
    var tmp = DidKeyRegistrar$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function IdentifierComponents(multiCodecKeyCode, pubKeyBytes) {
    this.tay_1 = multiCodecKeyCode;
    this.uay_1 = pubKeyBytes;
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
    if (!(this.tay_1 === other.tay_1))
      return false;
    if (!contentEquals(this.uay_1, other.uay_1))
      return false;
    return true;
  };
  protoOf(IdentifierComponents).hashCode = function () {
    var result = UInt__hashCode_impl_z2mhuw(this.tay_1);
    result = imul(31, result) + contentHashCode(this.uay_1) | 0;
    return result;
  };
  protoOf(IdentifierComponents).toString = function () {
    return 'IdentifierComponents(multiCodecKeyCode=' + new UInt(this.tay_1) + ', pubKeyBytes=' + toString_0(this.uay_1) + ')';
  };
  function registerByDidDocConfig($this, options, didDocConfig, $completion) {
    var tmp = new $registerByDidDocConfigCOROUTINE$26($this, options, didDocConfig, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function getUrlEncodedDomainOrThrow($this, options) {
    // Inline function 'id.walt.did.dids.registrar.dids.DidCreateOptions.get' call
    var tmp0_safe_receiver = get_jsonObject(options.config).ze('config');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ze('domain');
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p4s();
    var tmp;
    if (tmp4_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_subject = PrimitiveClasses_getInstance().md();
      var tmp_0;
      if (tmp0_subject.equals(PrimitiveClasses_getInstance().fd())) {
        tmp_0 = toBoolean(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().id())) {
        tmp_0 = toIntOrNull(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(getKClass(Long))) {
        tmp_0 = toLongOrNull(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().kd())) {
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
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().md())) {
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
      tmp_4 = UrlEncoderUtil_getInstance().v9r(tmp1_safe_receiver_0);
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
    var tmp0_safe_receiver = get_jsonObject(options.config).ze('config');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ze('path');
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p4s();
    var tmp;
    if (tmp4_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_subject = PrimitiveClasses_getInstance().md();
      var tmp_0;
      if (tmp0_subject.equals(PrimitiveClasses_getInstance().fd())) {
        tmp_0 = toBoolean(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().id())) {
        tmp_0 = toIntOrNull(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(getKClass(Long))) {
        tmp_0 = toLongOrNull(tmp4_safe_receiver);
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().kd())) {
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
      } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().md())) {
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
      var tmp_5 = split(ExtensionMethods_instance.ensurePrefix(replace(tmp1_safe_receiver_0, '[random-uuid]', UuidUtils_instance.y9a()), '/'), ['/']);
      tmp_4 = joinToString(tmp_5, ':', VOID, VOID, VOID, VOID, DidWebRegistrar$getPath$lambda);
    }
    var tmp2_elvis_lhs = tmp_4;
    return tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  function getDid($this, domain, path) {
    return 'did:web:' + domain + path;
  }
  function DidWebRegistrar$getPath$lambda(part) {
    return UrlEncoderUtil_getInstance().v9r(part);
  }
  function DidWebRegistrar$registerAsync$slambda(this$0, $options, resultContinuation) {
    this.raz_1 = this$0;
    this.saz_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebRegistrar$registerAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidWebRegistrar$registerAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.raz_1.q9s(this.saz_1, this);
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
    return new DidWebRegistrar$registerAsync$slambda(this.raz_1, this.saz_1, completion);
  };
  function DidWebRegistrar$registerAsync$slambda_0(this$0, $options, resultContinuation) {
    var i = new DidWebRegistrar$registerAsync$slambda(this$0, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation) {
    this.bb0_1 = this$0;
    this.cb0_1 = $key;
    this.db0_1 = $options;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebRegistrar$registerByKeyAsync$slambda).p9s = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidWebRegistrar$registerByKeyAsync$slambda).zb = function ($completion) {
    return this.p9s($completion);
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
            suspendResult = this.bb0_1.ea6(this.cb0_1, this.db0_1, this);
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
    return new DidWebRegistrar$registerByKeyAsync$slambda(this.bb0_1, this.cb0_1, this.db0_1, completion);
  };
  function DidWebRegistrar$registerByKeyAsync$slambda_0(this$0, $key, $options, resultContinuation) {
    var i = new DidWebRegistrar$registerByKeyAsync$slambda(this$0, $key, $options, resultContinuation);
    var l = function ($completion) {
      return i.p9s($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $registerCOROUTINE$24(_this__u8e3s4, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mb0_1 = _this__u8e3s4;
    this.nb0_1 = options;
  }
  protoOf($registerCOROUTINE$24).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 7;
            this.ob0_1 = this.nb0_1.didDocConfig;
            if (this.ob0_1 == null) {
              this.pb0_1 = null;
              this.m9_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.qb0_1 = this.ob0_1;
              this.rb0_1 = this.qb0_1;
              var tmp_1 = this;
              tmp_1.sb0_1 = this.rb0_1;
              this.tb0_1 = this.sb0_1;
              this.m9_1 = 1;
              suspendResult = registerByDidDocConfig(this.mb0_1, this.nb0_1, this.nb0_1.didDocConfig, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.pb0_1 = suspendResult;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.ub0_1 = this.pb0_1;
            if (this.ub0_1 == null) {
              var tmp_2 = this;
              var this_0 = this.nb0_1;
              var tmp0_safe_receiver = get_jsonObject(this_0.config).ze('config');
              var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
              var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ze('keyType');
              var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
              var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p4s();
              var tmp_3;
              if (tmp4_safe_receiver == null) {
                tmp_3 = null;
              } else {
                var tmp0_subject = getKClass(KeyType);
                var tmp_4;
                if (tmp0_subject.equals(PrimitiveClasses_getInstance().fd())) {
                  tmp_4 = toBoolean(tmp4_safe_receiver);
                } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().id())) {
                  tmp_4 = toIntOrNull(tmp4_safe_receiver);
                } else if (tmp0_subject.equals(getKClass(Long))) {
                  tmp_4 = toLongOrNull(tmp4_safe_receiver);
                } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().kd())) {
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
                } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().md())) {
                  tmp_4 = tmp4_safe_receiver;
                } else {
                  tmp_4 = null;
                }
                var tmp_5 = tmp_4;
                tmp_3 = tmp_5 instanceof KeyType ? tmp_5 : null;
              }
              tmp_2.wb0_1 = tmp_3;
              if (this.wb0_1 == null) {
                this.xb0_1 = null;
                this.m9_1 = 5;
                continue $sm;
              } else {
                var tmp_6 = this;
                tmp_6.yb0_1 = this.wb0_1;
                this.zb0_1 = this.yb0_1;
                var tmp_7 = this;
                tmp_7.ab1_1 = this.zb0_1;
                this.bb1_1 = this.ab1_1;
                this.m9_1 = 3;
                suspendResult = Companion_instance_4.generate$default(this.bb1_1, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.vb0_1 = this.ub0_1;
              this.m9_1 = 6;
              continue $sm;
            }

          case 3:
            this.cb1_1 = suspendResult;
            this.m9_1 = 4;
            suspendResult = this.mb0_1.ea6(this.cb1_1, this.nb0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.xb0_1 = suspendResult;
            this.m9_1 = 5;
            continue $sm;
          case 5:
            this.vb0_1 = this.xb0_1;
            this.m9_1 = 6;
            continue $sm;
          case 6:
            var tmp3_elvis_lhs = this.vb0_1;
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
  protoOf($registerCOROUTINE$24)['<set-state>'] = protoOf($registerCOROUTINE$24).t9;
  protoOf($registerCOROUTINE$24)['<get-state>'] = protoOf($registerCOROUTINE$24).u9;
  protoOf($registerCOROUTINE$24)['<set-exceptionState>'] = protoOf($registerCOROUTINE$24).v9;
  protoOf($registerCOROUTINE$24)['<get-exceptionState>'] = protoOf($registerCOROUTINE$24).w9;
  protoOf($registerCOROUTINE$24)['<set-result>'] = protoOf($registerCOROUTINE$24).x9;
  protoOf($registerCOROUTINE$24)['<get-result>'] = protoOf($registerCOROUTINE$24).y9;
  protoOf($registerCOROUTINE$24)['<set-exception>'] = protoOf($registerCOROUTINE$24).z9;
  protoOf($registerCOROUTINE$24)['<get-exception>'] = protoOf($registerCOROUTINE$24).aa;
  protoOf($registerCOROUTINE$24)['<set-finallyPath>'] = protoOf($registerCOROUTINE$24).ba;
  protoOf($registerCOROUTINE$24)['<get-finallyPath>'] = protoOf($registerCOROUTINE$24).ca;
  protoOf($registerCOROUTINE$24)['<get-context>'] = protoOf($registerCOROUTINE$24).s9;
  function $registerByKeyCOROUTINE$25(_this__u8e3s4, key, options, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lb1_1 = _this__u8e3s4;
    this.mb1_1 = key;
    this.nb1_1 = options;
  }
  protoOf($registerByKeyCOROUTINE$25).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.ob1_1 = getUrlEncodedDomainOrThrow(this.lb1_1, this.nb1_1);
            this.pb1_1 = getPath(this.lb1_1, this.nb1_1);
            this.qb1_1 = getDid(this.lb1_1, this.ob1_1, this.pb1_1);
            this.m9_1 = 1;
            suspendResult = this.mb1_1.x6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.rb1_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = this.mb1_1.s6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.sb1_1 = suspendResult;
            this.m9_1 = 3;
            suspendResult = this.sb1_1.o6n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_4(this.qb1_1, this.rb1_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var ARGUMENT_2 = new DidDocument(ARGUMENT_1);
            return new DidResult(this.qb1_1, ARGUMENT_2);
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
  protoOf($registerByKeyCOROUTINE$25)['<set-state>'] = protoOf($registerByKeyCOROUTINE$25).t9;
  protoOf($registerByKeyCOROUTINE$25)['<get-state>'] = protoOf($registerByKeyCOROUTINE$25).u9;
  protoOf($registerByKeyCOROUTINE$25)['<set-exceptionState>'] = protoOf($registerByKeyCOROUTINE$25).v9;
  protoOf($registerByKeyCOROUTINE$25)['<get-exceptionState>'] = protoOf($registerByKeyCOROUTINE$25).w9;
  protoOf($registerByKeyCOROUTINE$25)['<set-result>'] = protoOf($registerByKeyCOROUTINE$25).x9;
  protoOf($registerByKeyCOROUTINE$25)['<get-result>'] = protoOf($registerByKeyCOROUTINE$25).y9;
  protoOf($registerByKeyCOROUTINE$25)['<set-exception>'] = protoOf($registerByKeyCOROUTINE$25).z9;
  protoOf($registerByKeyCOROUTINE$25)['<get-exception>'] = protoOf($registerByKeyCOROUTINE$25).aa;
  protoOf($registerByKeyCOROUTINE$25)['<set-finallyPath>'] = protoOf($registerByKeyCOROUTINE$25).ba;
  protoOf($registerByKeyCOROUTINE$25)['<get-finallyPath>'] = protoOf($registerByKeyCOROUTINE$25).ca;
  protoOf($registerByKeyCOROUTINE$25)['<get-context>'] = protoOf($registerByKeyCOROUTINE$25).s9;
  function $registerByDidDocConfigCOROUTINE$26(_this__u8e3s4, options, didDocConfig, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.daz_1 = _this__u8e3s4;
    this.eaz_1 = options;
    this.faz_1 = didDocConfig;
  }
  protoOf($registerByDidDocConfigCOROUTINE$26).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.gaz_1 = getUrlEncodedDomainOrThrow(this.daz_1, this.eaz_1);
            this.haz_1 = getPath(this.daz_1, this.eaz_1);
            this.iaz_1 = getDid(this.daz_1, this.gaz_1, this.haz_1);
            this.m9_1 = 1;
            suspendResult = this.faz_1.pah(this.iaz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new DidResult(this.iaz_1, ARGUMENT);
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
  protoOf(DidWebRegistrar).q9s = function (options, $completion) {
    var tmp = new $registerCOROUTINE$24(this, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidWebRegistrar).ea6 = function (key, options, $completion) {
    var tmp = new $registerByKeyCOROUTINE$25(this, key, options, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(DidWebRegistrar).h9y = function (options) {
    var tmp = DidWebRegistrar$registerAsync$slambda_0(this, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebRegistrar).oaj = function (key, options) {
    var tmp = DidWebRegistrar$registerByKeyAsync$slambda_0(this, key, options, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.bb2_1 = this$0;
    this.cb2_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$resolveAsync$slambda).g9u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.g9u($completion);
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
            suspendResult = this.bb2_1.h9u(this.cb2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidResolver$resolveAsync$slambda(this.bb2_1, this.cb2_1, completion);
  };
  function DidResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.g9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.lb2_1 = this$0;
    this.mb2_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$resolveToKeysAsync$slambda).r9u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.r9u($completion);
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
            suspendResult = this.lb2_1.s9u(this.mb2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidResolver$resolveToKeysAsync$slambda(this.lb2_1, this.mb2_1, completion);
  };
  function DidResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.r9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.vb2_1 = this$0;
    this.wb2_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$resolveToKeyAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = this.vb2_1.l9v(this.wb2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidResolver$resolveToKeyAsync$slambda(this.vb2_1, this.wb2_1, completion);
  };
  function DidResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.fb3_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidResolver$getSupportedMethodsAsync$slambda).ra2 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidResolver$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.ra2($completion);
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
            suspendResult = this.fb3_1.v9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidResolver$getSupportedMethodsAsync$slambda(this.fb3_1, completion);
  };
  function DidResolver$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new DidResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.ra2($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidResolver() {
  }
  function DidResolverRegistrations() {
  }
  protoOf(DidResolverRegistrations).gb3 = function (uniresolverUrl) {
    var tmp = new LocalResolver();
    return setOf_0([tmp, new UniresolverResolver(uniresolverUrl == null ? 'https://dev.uniresolver.io/1.0' : uniresolverUrl)]);
  };
  protoOf(DidResolverRegistrations).curatedDidResolvers = function (uniresolverUrl, $super) {
    uniresolverUrl = uniresolverUrl === VOID ? null : uniresolverUrl;
    return $super === VOID ? this.gb3(uniresolverUrl) : $super.gb3.call(this, uniresolverUrl);
  };
  var DidResolverRegistrations_instance;
  function DidResolverRegistrations_getInstance() {
    return DidResolverRegistrations_instance;
  }
  function getResolverForDid_0($this, did) {
    var method = DidUtils_getInstance().methodFromDid(did);
    var tmp0_elvis_lhs = $this.jb3_1.k2(method);
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
    $this$HttpClient.o3j(tmp, LocalResolver$http$lambda$lambda);
    return Unit_instance;
  }
  function LocalResolver$http$lambda$lambda($this$install) {
    json($this$install, Companion_getInstance_46().json);
    return Unit_instance;
  }
  function LocalResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.sb3_1 = this$0;
    this.tb3_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$resolveAsync$slambda).g9u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.g9u($completion);
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
            suspendResult = this.sb3_1.h9u(this.tb3_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new LocalResolver$resolveAsync$slambda(this.sb3_1, this.tb3_1, completion);
  };
  function LocalResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.g9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.cb4_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$getSupportedMethodsAsync$slambda).ra2 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.ra2($completion);
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
            suspendResult = this.cb4_1.v9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new LocalResolver$getSupportedMethodsAsync$slambda(this.cb4_1, completion);
  };
  function LocalResolver$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new LocalResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.ra2($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.lb4_1 = this$0;
    this.mb4_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$resolveToKeysAsync$slambda).r9u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.r9u($completion);
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
            suspendResult = this.lb4_1.s9u(this.mb4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new LocalResolver$resolveToKeysAsync$slambda(this.lb4_1, this.mb4_1, completion);
  };
  function LocalResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.r9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.vb4_1 = this$0;
    this.wb4_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolver$resolveToKeyAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = this.vb4_1.l9v(this.wb4_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new LocalResolver$resolveToKeyAsync$slambda(this.vb4_1, this.wb4_1, completion);
  };
  function LocalResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$27(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fb5_1 = _this__u8e3s4;
    this.gb5_1 = did;
  }
  protoOf($resolveCOROUTINE$27).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = getResolverForDid_0(this.fb5_1, this.gb5_1).hb5(this.gb5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.mp_1;
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
  protoOf($resolveCOROUTINE$27)['<set-state>'] = protoOf($resolveCOROUTINE$27).t9;
  protoOf($resolveCOROUTINE$27)['<get-state>'] = protoOf($resolveCOROUTINE$27).u9;
  protoOf($resolveCOROUTINE$27)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$27).v9;
  protoOf($resolveCOROUTINE$27)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$27).w9;
  protoOf($resolveCOROUTINE$27)['<set-result>'] = protoOf($resolveCOROUTINE$27).x9;
  protoOf($resolveCOROUTINE$27)['<get-result>'] = protoOf($resolveCOROUTINE$27).y9;
  protoOf($resolveCOROUTINE$27)['<set-exception>'] = protoOf($resolveCOROUTINE$27).z9;
  protoOf($resolveCOROUTINE$27)['<get-exception>'] = protoOf($resolveCOROUTINE$27).aa;
  protoOf($resolveCOROUTINE$27)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$27).ba;
  protoOf($resolveCOROUTINE$27)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$27).ca;
  protoOf($resolveCOROUTINE$27)['<get-context>'] = protoOf($resolveCOROUTINE$27).s9;
  function LocalResolver() {
    this.hb3_1 = 'walt.id local resolver';
    var tmp = this;
    tmp.ib3_1 = HttpClient(LocalResolver$http$lambda);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = listOf([new DidJwkResolver(), new DidWebResolver(this.ib3_1), new DidKeyResolver(), new DidEbsiResolver(this.ib3_1), new DidCheqdResolver()]);
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp$ret$0 = element.method;
      destination.n2(tmp$ret$0, element);
    }
    tmp_0.jb3_1 = toMutableMap(destination);
  }
  protoOf(LocalResolver).s2 = function () {
    return this.hb3_1;
  };
  protoOf(LocalResolver).deactivateMethod = function (method) {
    this.jb3_1.o2(method);
  };
  protoOf(LocalResolver).v9w = function ($completion) {
    // Inline function 'kotlin.Companion.success' call
    var value = this.jb3_1.l2();
    var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
    return new Result(tmp$ret$0);
  };
  protoOf(LocalResolver).h9u = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$27(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolver).l9v = function (did, $completion) {
    var tmp = getResolverForDid_0(this, did).l9v(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(LocalResolver).s9u = function (did, $completion) {
    var tmp = getResolverForDid_0(this, did).s9u(did, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(LocalResolver).l9y = function (did) {
    var tmp = LocalResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolver).xa3 = function () {
    var tmp = LocalResolver$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolver).m9y = function (did) {
    var tmp = LocalResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolver).o9y = function (did) {
    var tmp = LocalResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function Companion_43() {
    this.DEFAULT_RESOLVER_URL = 'https://dev.uniresolver.io/1.0';
  }
  protoOf(Companion_43).ib5 = function () {
    return this.DEFAULT_RESOLVER_URL;
  };
  var Companion_instance_49;
  function Companion_getInstance_45() {
    return Companion_instance_49;
  }
  function getMethods_0($this, $completion) {
    var tmp = new $getMethodsCOROUTINE$32($this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function UniresolverResolver$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.o3j(tmp, UniresolverResolver$http$lambda$lambda);
    var tmp_0 = get_HttpTimeout();
    $this$HttpClient.o3j(tmp_0, UniresolverResolver$http$lambda$lambda_0);
    return Unit_instance;
  }
  function UniresolverResolver$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function UniresolverResolver$http$lambda$lambda_0($this$install) {
    $this$install.r47(new Long(30000, 0));
    return Unit_instance;
  }
  function UniresolverResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.qb6_1 = this$0;
    this.rb6_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$resolveAsync$slambda).g9u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.g9u($completion);
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
            suspendResult = this.qb6_1.h9u(this.rb6_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new UniresolverResolver$resolveAsync$slambda(this.qb6_1, this.rb6_1, completion);
  };
  function UniresolverResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new UniresolverResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.g9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniresolverResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation) {
    this.cb7_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$getSupportedMethodsAsync$slambda).ra2 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$getSupportedMethodsAsync$slambda).zb = function ($completion) {
    return this.ra2($completion);
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
            suspendResult = this.cb7_1.v9w(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new UniresolverResolver$getSupportedMethodsAsync$slambda(this.cb7_1, completion);
  };
  function UniresolverResolver$getSupportedMethodsAsync$slambda_0(this$0, resultContinuation) {
    var i = new UniresolverResolver$getSupportedMethodsAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.ra2($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniresolverResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.lb7_1 = this$0;
    this.mb7_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$resolveToKeysAsync$slambda).r9u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.r9u($completion);
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
            suspendResult = this.lb7_1.s9u(this.mb7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new UniresolverResolver$resolveToKeysAsync$slambda(this.lb7_1, this.mb7_1, completion);
  };
  function UniresolverResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new UniresolverResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.r9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function UniresolverResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.vb7_1 = this$0;
    this.wb7_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(UniresolverResolver$resolveToKeyAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = this.vb7_1.l9v(this.wb7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new UniresolverResolver$resolveToKeyAsync$slambda(this.vb7_1, this.wb7_1, completion);
  };
  function UniresolverResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new UniresolverResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getSupportedMethodsCOROUTINE$28(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fb8_1 = _this__u8e3s4;
  }
  protoOf($getSupportedMethodsCOROUTINE$28).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.gb8_1 = this.fb8_1;
            this.hb8_1 = this.gb8_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.jb8_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.kb8_1 = this.hb8_1;
            this.lb8_1 = this.kb8_1;
            this.m9_1 = 1;
            suspendResult = getMethods_0(this.lb8_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = lazyOf(ARGUMENT);
            var tmp1 = ARGUMENT_0.z();
            var tmp_3 = this;
            this.jb8_1;
            tmp_3.ib8_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.ib8_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.ib8_1);
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
  protoOf($getSupportedMethodsCOROUTINE$28)['<set-state>'] = protoOf($getSupportedMethodsCOROUTINE$28).t9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-state>'] = protoOf($getSupportedMethodsCOROUTINE$28).u9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<set-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$28).v9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-exceptionState>'] = protoOf($getSupportedMethodsCOROUTINE$28).w9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<set-result>'] = protoOf($getSupportedMethodsCOROUTINE$28).x9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-result>'] = protoOf($getSupportedMethodsCOROUTINE$28).y9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<set-exception>'] = protoOf($getSupportedMethodsCOROUTINE$28).z9;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-exception>'] = protoOf($getSupportedMethodsCOROUTINE$28).aa;
  protoOf($getSupportedMethodsCOROUTINE$28)['<set-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$28).ba;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-finallyPath>'] = protoOf($getSupportedMethodsCOROUTINE$28).ca;
  protoOf($getSupportedMethodsCOROUTINE$28)['<get-context>'] = protoOf($getSupportedMethodsCOROUTINE$28).s9;
  function $resolveCOROUTINE$29(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ub8_1 = _this__u8e3s4;
    this.vb8_1 = did;
  }
  protoOf($resolveCOROUTINE$29).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 10;
            var tmp_0 = this;
            tmp_0.wb8_1 = this.ub8_1;
            this.xb8_1 = this.wb8_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.zb8_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.ab9_1 = this.xb8_1;
            this.bb9_1 = this.ab9_1;
            var tmp_3 = this;
            tmp_3.cb9_1 = this.bb9_1.tb6_1;
            var tmp_4 = this;
            tmp_4.db9_1 = this.bb9_1.resolverUrl + '/identifiers/' + this.vb8_1;
            this.eb9_1 = this.cb9_1;
            this.fb9_1 = this.db9_1;
            var tmp_5 = this;
            tmp_5.gb9_1 = this.eb9_1;
            this.hb9_1 = this.gb9_1;
            var tmp_6 = this;
            tmp_6.ib9_1 = this.hb9_1;
            var tmp_7 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.fb9_1);
            tmp_7.jb9_1 = this_0;
            this.kb9_1 = this.ib9_1;
            this.lb9_1 = this.jb9_1;
            this.lb9_1.i3i_1 = Companion_getInstance().b30_1;
            var tmp_8 = this;
            tmp_8.mb9_1 = this.kb9_1;
            var tmp_9 = this;
            tmp_9.nb9_1 = this.lb9_1;
            this.ob9_1 = this.mb9_1;
            this.pb9_1 = this.nb9_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.pb9_1, this.ob9_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.qb9_1 = suspendResult;
            var tmp_10 = this;
            this.zb8_1;
            var value = this.qb9_1;
            tmp_10.yb8_1 = _Result___init__impl__xyqfz8(value);
            this.n9_1 = 10;
            this.m9_1 = 3;
            continue $sm;
          case 2:
            this.n9_1 = 10;
            var tmp_11 = this.p9_1;
            if (tmp_11 instanceof Error) {
              this.rb9_1 = this.p9_1;
              var tmp_12 = this;
              var exception = this.rb9_1;
              tmp_12.yb8_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.m9_1 = 3;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            this.n9_1 = 10;
            this.sb9_1 = this.yb8_1;
            this.tb9_1 = this.sb9_1;
            if (_Result___get_isSuccess__impl__sndoy8(this.tb9_1)) {
              var tmp_13 = this;
              tmp_13.vb9_1 = Companion_instance_2;
              var tmp_14 = this;
              var tmp_15 = _Result___get_value__impl__bjfvqg(this.tb9_1);
              tmp_14.wb9_1 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
              this.xb9_1 = this.wb9_1;
              var tmp_16 = this;
              tmp_16.yb9_1 = this.ub8_1;
              this.zb9_1 = this.yb9_1;
              this.n9_1 = 5;
              var tmp_17 = this;
              tmp_17.bba_1 = Companion_instance_2;
              var tmp_18 = this;
              tmp_18.cba_1 = this.zb9_1;
              this.dba_1 = this.cba_1;
              var tmp_19 = this;
              tmp_19.eba_1 = this.xb9_1;
              this.fba_1 = this.eba_1;
              this.m9_1 = 4;
              var tmp_20 = this.fba_1.p3l();
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
              suspendResult = tmp_20.s3k(new TypeInfo(tmp_21, tmp_22), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.ub9_1 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this.tb9_1));
              this.m9_1 = 9;
              continue $sm;
            }

          case 4:
            var tmp_24 = this;
            tmp_24.gba_1 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp_25 = this;
            this.bba_1;
            var value_0 = this.gba_1;
            tmp_25.aba_1 = _Result___init__impl__xyqfz8(value_0);
            this.n9_1 = 10;
            this.m9_1 = 6;
            continue $sm;
          case 5:
            this.n9_1 = 10;
            var tmp_26 = this.p9_1;
            if (tmp_26 instanceof Error) {
              this.hba_1 = this.p9_1;
              var tmp_27 = this;
              var exception_0 = this.hba_1;
              tmp_27.aba_1 = _Result___init__impl__xyqfz8(createFailure(exception_0));
              this.m9_1 = 6;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 6:
            this.n9_1 = 10;
            this.iba_1 = this.aba_1;
            this.jba_1 = this.iba_1;
            this.kba_1 = Result__exceptionOrNull_impl_p6xea9(this.jba_1);
            if (this.kba_1 == null) {
              var tmp_28 = this;
              var tmp_29 = _Result___get_value__impl__bjfvqg(this.jba_1);
              tmp_28.lba_1 = (tmp_29 == null ? true : !(tmp_29 == null)) ? tmp_29 : THROW_CCE();
              this.m9_1 = 8;
              continue $sm;
            } else {
              var tmp_30 = this;
              tmp_30.mba_1 = this.kba_1;
              this.nba_1 = this.mba_1;
              this.oba_1 = this.xb9_1.o35().toString();
              this.m9_1 = 7;
              suspendResult = bodyAsText(this.xb9_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 7:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = 'HTTP response (status ' + this.oba_1 + ') for resolving did ' + this.vb8_1 + ' is not JSON, body: ' + ARGUMENT;
            var tmp_31 = this;
            throw RuntimeException_init_$Create$(ARGUMENT_0, this.nba_1);
          case 8:
            var tmp1 = this.lba_1;
            var tmp_32 = this;
            this.vb9_1;
            tmp_32.ub9_1 = _Result___init__impl__xyqfz8(tmp1);
            this.m9_1 = 9;
            continue $sm;
          case 9:
            return new Result(this.ub9_1);
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
  protoOf($resolveCOROUTINE$29)['<set-state>'] = protoOf($resolveCOROUTINE$29).t9;
  protoOf($resolveCOROUTINE$29)['<get-state>'] = protoOf($resolveCOROUTINE$29).u9;
  protoOf($resolveCOROUTINE$29)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$29).v9;
  protoOf($resolveCOROUTINE$29)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$29).w9;
  protoOf($resolveCOROUTINE$29)['<set-result>'] = protoOf($resolveCOROUTINE$29).x9;
  protoOf($resolveCOROUTINE$29)['<get-result>'] = protoOf($resolveCOROUTINE$29).y9;
  protoOf($resolveCOROUTINE$29)['<set-exception>'] = protoOf($resolveCOROUTINE$29).z9;
  protoOf($resolveCOROUTINE$29)['<get-exception>'] = protoOf($resolveCOROUTINE$29).aa;
  protoOf($resolveCOROUTINE$29)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$29).ba;
  protoOf($resolveCOROUTINE$29)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$29).ca;
  protoOf($resolveCOROUTINE$29)['<get-context>'] = protoOf($resolveCOROUTINE$29).s9;
  function $resolveToKeyCOROUTINE$30(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xba_1 = _this__u8e3s4;
    this.yba_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$30).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.xba_1.s9u(this.yba_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.mp_1;
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
  protoOf($resolveToKeyCOROUTINE$30)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$30).t9;
  protoOf($resolveToKeyCOROUTINE$30)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$30).u9;
  protoOf($resolveToKeyCOROUTINE$30)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$30).v9;
  protoOf($resolveToKeyCOROUTINE$30)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$30).w9;
  protoOf($resolveToKeyCOROUTINE$30)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$30).x9;
  protoOf($resolveToKeyCOROUTINE$30)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$30).y9;
  protoOf($resolveToKeyCOROUTINE$30)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$30).z9;
  protoOf($resolveToKeyCOROUTINE$30)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$30).aa;
  protoOf($resolveToKeyCOROUTINE$30)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$30).ba;
  protoOf($resolveToKeyCOROUTINE$30)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$30).ca;
  protoOf($resolveToKeyCOROUTINE$30)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$30).s9;
  function $resolveToKeysCOROUTINE$31(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hbb_1 = _this__u8e3s4;
    this.ibb_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$31).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 9;
            this.m9_1 = 1;
            suspendResult = this.hbb_1.h9u(this.ibb_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.jbb_1 = suspendResult.mp_1;
            suspendResult = new Result(this.jbb_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.kbb_1 = suspendResult.mp_1;
            this.lbb_1 = this.kbb_1;
            this.mbb_1 = Result__exceptionOrNull_impl_p6xea9(this.lbb_1);
            if (this.mbb_1 == null) {
              var tmp_0 = this;
              var tmp_1 = _Result___get_value__impl__bjfvqg(this.lbb_1);
              tmp_0.obb_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              this.pbb_1 = this.obb_1;
              this.qbb_1 = VerificationMaterial_getInstance().getAll(this.pbb_1);
              if (this.qbb_1 == null) {
                this.rbb_1 = null;
                this.m9_1 = 7;
                continue $sm;
              } else {
                var tmp_2 = this;
                tmp_2.sbb_1 = this.qbb_1;
                this.tbb_1 = this.sbb_1;
                var tmp_3 = this;
                tmp_3.ubb_1 = this.tbb_1;
                this.vbb_1 = this.ubb_1;
                var tmp_4 = this;
                tmp_4.wbb_1 = this.vbb_1;
                this.xbb_1 = this.wbb_1;
                var tmp_5 = this;
                tmp_5.ybb_1 = this.xbb_1;
                var tmp_6 = this;
                tmp_6.zbb_1 = ArrayList_init_$Create$();
                this.abc_1 = this.ybb_1;
                this.bbc_1 = this.zbb_1;
                var tmp_7 = this;
                tmp_7.cbc_1 = this.abc_1;
                this.dbc_1 = this.cbc_1;
                this.ebc_1 = this.dbc_1.p();
                this.m9_1 = 3;
                continue $sm;
              }
            } else {
              var tmp_8 = this;
              var exception = this.mbb_1;
              tmp_8.nbb_1 = new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
              this.m9_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.ebc_1.q()) {
              this.m9_1 = 6;
              continue $sm;
            }

            this.fbc_1 = this.ebc_1.r();
            var tmp_9 = this;
            tmp_9.gbc_1 = this.fbc_1;
            this.hbc_1 = this.gbc_1;
            var tmp_10 = this;
            tmp_10.ibc_1 = this.hbc_1;
            this.jbc_1 = this.ibc_1;
            this.m9_1 = 4;
            suspendResult = KeyMaterial_instance.kbc(this.jbc_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 5;
            continue $sm;
          case 4:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 5;
            continue $sm;
          case 5:
            var this_0 = suspendResult.mp_1;
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
              this.bbc_1.n(tmp0_safe_receiver);
            }

            this.m9_1 = 3;
            continue $sm;
          case 6:
            var ARGUMENT = this.bbc_1;
            var keys = toSet(ARGUMENT);
            var tmp_13 = this;
            var tmp_14;
            if (!keys.h()) {
              tmp_14 = _Result___init__impl__xyqfz8(keys);
            } else {
              var exception_0 = Exception_init_$Create$('Could not convert verification materials to keys.');
              tmp_14 = _Result___init__impl__xyqfz8(createFailure(exception_0));
            }

            tmp_13.rbb_1 = new Result(tmp_14);
            this.m9_1 = 7;
            continue $sm;
          case 7:
            var tmp1_elvis_lhs = this.rbb_1;
            var tmp_15 = this;
            var tmp_16;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = Exception_init_$Create$('No verification material found.');
              tmp_16 = _Result___init__impl__xyqfz8(createFailure(exception_1));
            } else {
              tmp_16 = tmp1_elvis_lhs.mp_1;
            }

            tmp_15.nbb_1 = new Result(tmp_16);
            this.m9_1 = 8;
            continue $sm;
          case 8:
            return this.nbb_1;
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
  protoOf($resolveToKeysCOROUTINE$31)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$31).t9;
  protoOf($resolveToKeysCOROUTINE$31)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$31).u9;
  protoOf($resolveToKeysCOROUTINE$31)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$31).v9;
  protoOf($resolveToKeysCOROUTINE$31)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$31).w9;
  protoOf($resolveToKeysCOROUTINE$31)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$31).x9;
  protoOf($resolveToKeysCOROUTINE$31)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$31).y9;
  protoOf($resolveToKeysCOROUTINE$31)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$31).z9;
  protoOf($resolveToKeysCOROUTINE$31)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$31).aa;
  protoOf($resolveToKeysCOROUTINE$31)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$31).ba;
  protoOf($resolveToKeysCOROUTINE$31)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$31).ca;
  protoOf($resolveToKeysCOROUTINE$31)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$31).s9;
  function $getMethodsCOROUTINE$32(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rb5_1 = _this__u8e3s4;
  }
  protoOf($getMethodsCOROUTINE$32).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.sb5_1 = this.rb5_1.tb6_1;
            var tmp_1 = this;
            tmp_1.tb5_1 = this.rb5_1.resolverUrl + '/methods';
            this.ub5_1 = this.sb5_1;
            this.vb5_1 = this.tb5_1;
            var tmp_2 = this;
            tmp_2.wb5_1 = this.ub5_1;
            this.xb5_1 = this.wb5_1;
            var tmp_3 = this;
            tmp_3.yb5_1 = this.xb5_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.vb5_1);
            tmp_4.zb5_1 = this_0;
            this.ab6_1 = this.yb5_1;
            this.bb6_1 = this.zb5_1;
            this.bb6_1.i3i_1 = Companion_getInstance().b30_1;
            var tmp_5 = this;
            tmp_5.cb6_1 = this.ab6_1;
            var tmp_6 = this;
            tmp_6.db6_1 = this.bb6_1;
            this.eb6_1 = this.cb6_1;
            this.fb6_1 = this.db6_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.fb6_1, this.eb6_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.gb6_1 = suspendResult;
            this.hb6_1 = this.gb6_1;
            this.m9_1 = 2;
            var tmp_7 = this.hb6_1.p3l();
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

            suspendResult = tmp_7.s3k(new TypeInfo(tmp_8, tmp_9), this);
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
              destination.n(get_jsonPrimitive(item).p4s());
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
    this.sb6_1 = 'uniresolver @ ' + this.resolverUrl;
    var tmp = this;
    tmp.tb6_1 = HttpClient(UniresolverResolver$http$lambda);
  }
  protoOf(UniresolverResolver).lbc = function (_set____db54di) {
    this.resolverUrl = _set____db54di;
  };
  protoOf(UniresolverResolver).mbc = function () {
    return this.resolverUrl;
  };
  protoOf(UniresolverResolver).s2 = function () {
    return this.sb6_1;
  };
  protoOf(UniresolverResolver).v9w = function ($completion) {
    var tmp = new $getSupportedMethodsCOROUTINE$28(this, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).h9u = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$29(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).l9v = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$30(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).s9u = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$31(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(UniresolverResolver).l9y = function (did) {
    var tmp = UniresolverResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniresolverResolver).xa3 = function () {
    var tmp = UniresolverResolver$getSupportedMethodsAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniresolverResolver).m9y = function (did) {
    var tmp = UniresolverResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(UniresolverResolver).o9y = function (did) {
    var tmp = UniresolverResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function resolveDid($this, did, $completion) {
    var tmp = new $resolveDidCOROUTINE$35($this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function DidCheqdResolver$json$lambda($this$Json) {
    $this$Json.x4q_1 = true;
    return Unit_instance;
  }
  function DidCheqdResolver$resolveDid$lambda($this$headers) {
    $this$headers.k2p('contentType', 'application/did+ld+json');
    return Unit_instance;
  }
  function DidCheqdResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.ubd_1 = this$0;
    this.vbd_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdResolver$resolveAsync$slambda).wbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidCheqdResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.wbd($completion);
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
            suspendResult = this.ubd_1.hb5(this.vbd_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidCheqdResolver$resolveAsync$slambda(this.ubd_1, this.vbd_1, completion);
  };
  function DidCheqdResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidCheqdResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.wbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidCheqdResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.hbe_1 = this$0;
    this.ibe_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidCheqdResolver$resolveToKeyAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidCheqdResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = this.hbe_1.l9v(this.ibe_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidCheqdResolver$resolveToKeyAsync$slambda(this.hbe_1, this.ibe_1, completion);
  };
  function DidCheqdResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidCheqdResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$34(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rbe_1 = _this__u8e3s4;
    this.sbe_1 = did;
  }
  protoOf($resolveCOROUTINE$34).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.tbe_1 = this.rbe_1;
            this.ube_1 = this.tbe_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.wbe_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.xbe_1 = this.ube_1;
            this.ybe_1 = this.xbe_1;
            this.m9_1 = 1;
            suspendResult = resolveDid(this.ybe_1, this.sbe_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.wbe_1;
            tmp_3.vbe_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.vbe_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.vbe_1);
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
  protoOf($resolveCOROUTINE$34)['<set-state>'] = protoOf($resolveCOROUTINE$34).t9;
  protoOf($resolveCOROUTINE$34)['<get-state>'] = protoOf($resolveCOROUTINE$34).u9;
  protoOf($resolveCOROUTINE$34)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$34).v9;
  protoOf($resolveCOROUTINE$34)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$34).w9;
  protoOf($resolveCOROUTINE$34)['<set-result>'] = protoOf($resolveCOROUTINE$34).x9;
  protoOf($resolveCOROUTINE$34)['<get-result>'] = protoOf($resolveCOROUTINE$34).y9;
  protoOf($resolveCOROUTINE$34)['<set-exception>'] = protoOf($resolveCOROUTINE$34).z9;
  protoOf($resolveCOROUTINE$34)['<get-exception>'] = protoOf($resolveCOROUTINE$34).aa;
  protoOf($resolveCOROUTINE$34)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$34).ba;
  protoOf($resolveCOROUTINE$34)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$34).ca;
  protoOf($resolveCOROUTINE$34)['<get-context>'] = protoOf($resolveCOROUTINE$34).s9;
  function $resolveDidCOROUTINE$35(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vbc_1 = _this__u8e3s4;
    this.wbc_1 = did;
  }
  protoOf($resolveDidCOROUTINE$35).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.xbc_1 = this.vbc_1.xbd_1;
            var tmp_1 = this;
            tmp_1.ybc_1 = 'https://resolver.cheqd.net/1.0/identifiers/' + this.wbc_1;
            this.zbc_1 = this.xbc_1;
            this.abd_1 = this.ybc_1;
            var tmp_2 = this;
            tmp_2.bbd_1 = this.zbc_1;
            this.cbd_1 = this.bbd_1;
            var tmp_3 = this;
            tmp_3.dbd_1 = this.cbd_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.abd_1);
            headers(this_0, DidCheqdResolver$resolveDid$lambda);
            tmp_4.ebd_1 = this_0;
            this.fbd_1 = this.dbd_1;
            this.gbd_1 = this.ebd_1;
            this.gbd_1.i3i_1 = Companion_getInstance().b30_1;
            var tmp_5 = this;
            tmp_5.hbd_1 = this.fbd_1;
            var tmp_6 = this;
            tmp_6.ibd_1 = this.gbd_1;
            this.jbd_1 = this.hbd_1;
            this.kbd_1 = this.ibd_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.kbd_1, this.jbd_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.lbd_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = bodyAsText(this.lbd_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var responseText = suspendResult;
            this.vbc_1;
            var tmp_7;
            try {
              var value = Default_getInstance().g4q(responseText);
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
              throw RuntimeException_init_$Create$_0('Illegal non-JSON response (' + this.lbd_1.o35().toString() + '), body: >>' + responseText + '<< (end of body), error: >>' + stackTraceToString(exception) + '<<');
            }

            var resolution = tmp_9;
            var tmp0_safe_receiver = get_jsonObject(resolution).ze('didResolutionMetadata');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ze('error');
            var tmp_11;
            if (tmp2_safe_receiver == null) {
              tmp_11 = null;
            } else {
              throw IllegalArgumentException_init_$Create$('Could not resolve did:cheqd, resolver responded: ' + get_jsonPrimitive(tmp2_safe_receiver).p4s());
            }

            var tmp3_elvis_lhs = tmp_11;
            var tmp_12;
            if (tmp3_elvis_lhs == null) {
              this.vbc_1;
              var tmp0_safe_receiver_0 = get_jsonObject(resolution).ze('didDocument');
              var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : get_jsonObject(tmp0_safe_receiver_0);
              var tmp_13;
              if (tmp1_elvis_lhs == null) {
                throw IllegalArgumentException_init_$Create$('Response for did:cheqd did not contain a DID document!');
              } else {
                tmp_13 = tmp1_elvis_lhs;
              }
              var it = tmp_13;
              var tmp0 = this.vbc_1.ybd_1;
              var string = it.toString();
              var this_2 = tmp0.v22();
              var this_3 = serializer(this_2, createKType(getKClass(DidDocument_0), arrayOf([]), false));
              tmp_12 = tmp0.z1z(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), string);
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
    this.xbd_1 = HttpClient();
    var tmp = this;
    tmp.ybd_1 = Json(VOID, DidCheqdResolver$json$lambda);
  }
  protoOf(DidCheqdResolver).hb5 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$34(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidCheqdResolver).l9v = function (did, $completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(DidCheqdResolver).l9y = function (did) {
    var tmp = DidCheqdResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidCheqdResolver).o9y = function (did) {
    var tmp = DidCheqdResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function resolveDid_0($this, did, $completion) {
    var tmp = new $resolveDidCOROUTINE$37($this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function parseDidDocumentOrNull($this, json) {
    var tmp;
    try {
      tmp = new DidDocument(secondaryConstructor_1(secondaryConstructor_0(get_jsonObject(Default_getInstance().g4q(json)))).toMap());
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
    $this$headers.k2p(HttpHeaders_getInstance().p2w_1, 'application/did+json');
    $this$headers.k2p(HttpHeaders_getInstance().x2v_1, 'application/did+json');
    return Unit_instance;
  }
  function DidEbsiResolver$resolveDid$lambda_0($this$headers) {
    $this$headers.k2p(HttpHeaders_getInstance().p2w_1, 'application/did+json');
    $this$headers.k2p(HttpHeaders_getInstance().x2v_1, 'application/did+json');
    return Unit_instance;
  }
  function DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.xbg_1 = this$0;
    this.ybg_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).k81 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).zb = function ($completion) {
    return this.k81($completion);
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
            suspendResult = this.xbg_1.cbh(this.ybg_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this.xbg_1, this.ybg_1, completion);
  };
  function DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.k81($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.lbh_1 = this$0;
    this.mbh_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).nbh = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).zb = function ($completion) {
    return this.nbh($completion);
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
            suspendResult = this.lbh_1.obh(this.mbh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this.lbh_1, this.mbh_1, completion);
  };
  function DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.nbh($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.xbh_1 = this$0;
    this.ybh_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$resolveAsync$slambda).wbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.wbd($completion);
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
            suspendResult = this.xbh_1.hb5(this.ybh_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidEbsiResolver$resolveAsync$slambda(this.xbh_1, this.ybh_1, completion);
  };
  function DidEbsiResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidEbsiResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.wbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.hbi_1 = this$0;
    this.ibi_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$resolveToKeysAsync$slambda).r9u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.r9u($completion);
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
            suspendResult = this.hbi_1.s9u(this.ibi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidEbsiResolver$resolveToKeysAsync$slambda(this.hbi_1, this.ibi_1, completion);
  };
  function DidEbsiResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidEbsiResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.r9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidEbsiResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.rbi_1 = this$0;
    this.sbi_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidEbsiResolver$resolveToKeyAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = this.rbi_1.l9v(this.sbi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidEbsiResolver$resolveToKeyAsync$slambda(this.rbi_1, this.sbi_1, completion);
  };
  function DidEbsiResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidEbsiResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$36(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bbj_1 = _this__u8e3s4;
    this.cbj_1 = did;
  }
  protoOf($resolveCOROUTINE$36).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.dbj_1 = this.bbj_1;
            this.ebj_1 = this.dbj_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.gbj_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.hbj_1 = this.ebj_1;
            this.ibj_1 = this.hbj_1;
            this.m9_1 = 1;
            suspendResult = resolveDid_0(this.ibj_1, this.cbj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.gbj_1;
            tmp_3.fbj_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.fbj_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.fbj_1);
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
  protoOf($resolveCOROUTINE$36)['<set-state>'] = protoOf($resolveCOROUTINE$36).t9;
  protoOf($resolveCOROUTINE$36)['<get-state>'] = protoOf($resolveCOROUTINE$36).u9;
  protoOf($resolveCOROUTINE$36)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$36).v9;
  protoOf($resolveCOROUTINE$36)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$36).w9;
  protoOf($resolveCOROUTINE$36)['<set-result>'] = protoOf($resolveCOROUTINE$36).x9;
  protoOf($resolveCOROUTINE$36)['<get-result>'] = protoOf($resolveCOROUTINE$36).y9;
  protoOf($resolveCOROUTINE$36)['<set-exception>'] = protoOf($resolveCOROUTINE$36).z9;
  protoOf($resolveCOROUTINE$36)['<get-exception>'] = protoOf($resolveCOROUTINE$36).aa;
  protoOf($resolveCOROUTINE$36)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$36).ba;
  protoOf($resolveCOROUTINE$36)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$36).ca;
  protoOf($resolveCOROUTINE$36)['<get-context>'] = protoOf($resolveCOROUTINE$36).s9;
  function $resolveDidCOROUTINE$37(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hbf_1 = _this__u8e3s4;
    this.ibf_1 = did;
  }
  protoOf($resolveDidCOROUTINE$37).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            tmp_0.jbf_1 = this.hbf_1.zbg_1;
            var tmp_1 = this;
            tmp_1.kbf_1 = this.hbf_1.abh_1 + this.ibf_1;
            this.lbf_1 = this.jbf_1;
            this.mbf_1 = this.kbf_1;
            var tmp_2 = this;
            tmp_2.nbf_1 = this.lbf_1;
            this.obf_1 = this.nbf_1;
            var tmp_3 = this;
            tmp_3.pbf_1 = this.obf_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.mbf_1);
            headers(this_0, DidEbsiResolver$resolveDid$lambda);
            tmp_4.qbf_1 = this_0;
            this.rbf_1 = this.pbf_1;
            this.sbf_1 = this.qbf_1;
            this.sbf_1.i3i_1 = Companion_getInstance().b30_1;
            var tmp_5 = this;
            tmp_5.tbf_1 = this.rbf_1;
            var tmp_6 = this;
            tmp_6.ubf_1 = this.sbf_1;
            this.vbf_1 = this.tbf_1;
            this.wbf_1 = this.ubf_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.wbf_1, this.vbf_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.xbf_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = bodyAsText(this.xbf_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ybf_1 = suspendResult;
            this.zbf_1 = parseDidDocumentOrNull(this.hbf_1, this.ybf_1);
            if (!(this.zbf_1 == null)) {
              return this.zbf_1;
            }

            var tmp_7 = this;
            tmp_7.abg_1 = this.hbf_1.zbg_1;
            var tmp_8 = this;
            tmp_8.bbg_1 = this.hbf_1.bbh_1 + this.ibf_1;
            this.cbg_1 = this.abg_1;
            this.dbg_1 = this.bbg_1;
            var tmp_9 = this;
            tmp_9.ebg_1 = this.cbg_1;
            this.fbg_1 = this.ebg_1;
            var tmp_10 = this;
            tmp_10.gbg_1 = this.fbg_1;
            var tmp_11 = this;
            var this_1 = new HttpRequestBuilder();
            url(this_1, this.dbg_1);
            headers(this_1, DidEbsiResolver$resolveDid$lambda_0);
            tmp_11.hbg_1 = this_1;
            this.ibg_1 = this.gbg_1;
            this.jbg_1 = this.hbg_1;
            this.jbg_1.i3i_1 = Companion_getInstance().b30_1;
            var tmp_12 = this;
            tmp_12.kbg_1 = this.ibg_1;
            var tmp_13 = this;
            tmp_13.lbg_1 = this.jbg_1;
            this.mbg_1 = this.kbg_1;
            this.nbg_1 = this.lbg_1;
            this.m9_1 = 3;
            suspendResult = (new HttpStatement(this.nbg_1, this.mbg_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.obg_1 = suspendResult;
            this.m9_1 = 4;
            suspendResult = bodyAsText(this.obg_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var responsePilot = suspendResult;
            var tmp0_elvis_lhs = parseDidDocumentOrNull(this.hbf_1, responsePilot);
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
  function $resolveToKeyCOROUTINE$38(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.rbj_1 = _this__u8e3s4;
    this.sbj_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$38).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.m9_1 = 1;
            suspendResult = this.rbj_1.hb5(this.sbj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.tbj_1 = suspendResult.mp_1;
            suspendResult = new Result(this.tbj_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.ubj_1 = suspendResult.mp_1;
            if (_Result___get_isFailure__impl__jpiriv(this.ubj_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.ubj_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.ubj_1;
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
              var exception_0 = IllegalStateException_init_$Create$('DID document is null for ' + this.sbj_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_0)));
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_0.vbj_1 = tmp_3;
            var tmp_4 = this;
            var tmp1_elvis_lhs = this.vbj_1.ze('verificationMethod');
            var tmp_5;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = IllegalStateException_init_$Create$('No verification method found in DID document for ' + this.sbj_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_1)));
            } else {
              tmp_5 = tmp1_elvis_lhs;
            }

            tmp_4.wbj_1 = tmp_5;
            this.xbj_1 = get_jsonArray(this.wbj_1);
            var tmp_6 = this;
            var tmp0 = this.xbj_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              this.rbj_1;
              var tmp_7;
              try {
                var tmp$ret$0 = Unit_instance;
                l$ret$1: do {
                  var verificationMethod = get_jsonObject(element);
                  var tmp0_safe_receiver = verificationMethod.ze('publicKeyJwk');
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
                  var this_2 = this_1.v22();
                  var this_3 = serializer(this_2, createKType(getKClass(JsonObject), arrayOf([]), false));
                  tmp$ret$0 = this_1.y1z(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), publicKeyJwk);
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

            tmp_6.ybj_1 = destination;
            if (this.ybj_1.h()) {
              var exception_2 = IllegalStateException_init_$Create$('No valid public key JWKs found in DID document for ' + this.sbj_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_2)));
            }

            this.m9_1 = 3;
            suspendResult = this.rbj_1.cbh(this.ybj_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.mp_1;
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
  protoOf($resolveToKeyCOROUTINE$38)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$38).t9;
  protoOf($resolveToKeyCOROUTINE$38)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$38).u9;
  protoOf($resolveToKeyCOROUTINE$38)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$38).v9;
  protoOf($resolveToKeyCOROUTINE$38)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$38).w9;
  protoOf($resolveToKeyCOROUTINE$38)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$38).x9;
  protoOf($resolveToKeyCOROUTINE$38)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$38).y9;
  protoOf($resolveToKeyCOROUTINE$38)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$38).z9;
  protoOf($resolveToKeyCOROUTINE$38)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$38).aa;
  protoOf($resolveToKeyCOROUTINE$38)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$38).ba;
  protoOf($resolveToKeyCOROUTINE$38)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$38).ca;
  protoOf($resolveToKeyCOROUTINE$38)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$38).s9;
  function $resolveToKeysCOROUTINE$39(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hbk_1 = _this__u8e3s4;
    this.ibk_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$39).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.m9_1 = 1;
            suspendResult = this.hbk_1.hb5(this.ibk_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.jbk_1 = suspendResult.mp_1;
            suspendResult = new Result(this.jbk_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.kbk_1 = suspendResult.mp_1;
            if (_Result___get_isFailure__impl__jpiriv(this.kbk_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.kbk_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.kbk_1;
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
              var exception_0 = IllegalStateException_init_$Create$('DID document is null for ' + this.ibk_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_0)));
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_0.lbk_1 = tmp_3;
            var tmp_4 = this;
            var tmp1_elvis_lhs = this.lbk_1.ze('verificationMethod');
            var tmp_5;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = IllegalStateException_init_$Create$('No verification method found in DID document for ' + this.ibk_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_1)));
            } else {
              tmp_5 = tmp1_elvis_lhs;
            }

            tmp_4.mbk_1 = tmp_5;
            this.nbk_1 = get_jsonArray(this.mbk_1);
            var tmp_6 = this;
            var tmp0 = this.nbk_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              this.hbk_1;
              var tmp_7;
              try {
                var tmp$ret$0 = Unit_instance;
                l$ret$1: do {
                  var verificationMethod = get_jsonObject(element);
                  var tmp0_safe_receiver = verificationMethod.ze('publicKeyJwk');
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
                  var this_2 = this_1.v22();
                  var this_3 = serializer(this_2, createKType(getKClass(JsonObject), arrayOf([]), false));
                  tmp$ret$0 = this_1.y1z(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), publicKeyJwk);
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

            tmp_6.obk_1 = destination;
            if (this.obk_1.h()) {
              var exception_2 = IllegalStateException_init_$Create$('No valid public key JWKs found in DID document for ' + this.ibk_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_2)));
            }

            this.m9_1 = 3;
            suspendResult = this.hbk_1.obh(this.obk_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.mp_1;
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
  protoOf($resolveToKeysCOROUTINE$39)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$39).t9;
  protoOf($resolveToKeysCOROUTINE$39)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$39).u9;
  protoOf($resolveToKeysCOROUTINE$39)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$39).v9;
  protoOf($resolveToKeysCOROUTINE$39)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$39).w9;
  protoOf($resolveToKeysCOROUTINE$39)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$39).x9;
  protoOf($resolveToKeysCOROUTINE$39)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$39).y9;
  protoOf($resolveToKeysCOROUTINE$39)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$39).z9;
  protoOf($resolveToKeysCOROUTINE$39)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$39).aa;
  protoOf($resolveToKeysCOROUTINE$39)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$39).ba;
  protoOf($resolveToKeysCOROUTINE$39)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$39).ca;
  protoOf($resolveToKeysCOROUTINE$39)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$39).s9;
  function $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xbk_1 = _this__u8e3s4;
    this.ybk_1 = publicKeyJwks;
  }
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 7;
            var tmp_0 = this;
            tmp_0.zbk_1 = this.ybk_1;
            this.abl_1 = this.zbk_1;
            this.bbl_1 = this.abl_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.bbl_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.cbl_1 = this.bbl_1.r();
            var tmp_1 = this;
            tmp_1.dbl_1 = this.cbl_1;
            this.ebl_1 = this.dbl_1;
            this.m9_1 = 2;
            suspendResult = Companion_instance_4.n7g(this.ebl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            this.fbl_1 = suspendResult.mp_1;
            suspendResult = new Result(this.fbl_1);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            this.gbl_1 = suspendResult.mp_1;
            if (_Result___get_isSuccess__impl__sndoy8(this.gbl_1) && contains(this.ebl_1, 'P-256'))
              return new Result(this.gbl_1);
            this.m9_1 = 1;
            continue $sm;
          case 4:
            this.m9_1 = 5;
            suspendResult = Companion_instance_4.n7g(first_0(this.ybk_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 6;
            continue $sm;
          case 5:
            var unboxed = suspendResult.mp_1;
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
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<set-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).t9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).u9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<set-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).v9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).w9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<set-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).x9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).y9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<set-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).z9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).aa;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<set-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).ba;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).ca;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40)['<get-context>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40).s9;
  function $tryConvertPublicKeyJwksToKeysCOROUTINE$41(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pbl_1 = _this__u8e3s4;
    this.qbl_1 = publicKeyJwks;
  }
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            tmp_0.rbl_1 = LinkedHashSet_init_$Create$();
            this.sbl_1 = this.qbl_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.sbl_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.tbl_1 = this.sbl_1.r();
            this.m9_1 = 2;
            suspendResult = Companion_instance_4.n7g(this.tbl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var result = suspendResult.mp_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              throwOnFailure(result);
              var tmp_1 = _Result___get_value__impl__bjfvqg(result);
              this.rbl_1.n((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
            }

            this.m9_1 = 1;
            continue $sm;
          case 4:
            var tmp_2;
            if (!this.rbl_1.h()) {
              var value = this.rbl_1;
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
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<set-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).t9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).u9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<set-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).v9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).w9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<set-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).x9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).y9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<set-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).z9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).aa;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<set-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).ba;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).ca;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41)['<get-context>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$41).s9;
  function DidEbsiResolver(client) {
    LocalResolverMethod.call(this, 'ebsi');
    this.zbg_1 = client;
    this.abh_1 = 'https://api-conformance.ebsi.eu/did-registry/v5/identifiers/';
    this.bbh_1 = 'https://api-pilot.ebsi.eu/did-registry/v5/identifiers/';
  }
  protoOf(DidEbsiResolver).hb5 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$36(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).l9v = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$38(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).s9u = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$39(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).cbh = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$40(this, publicKeyJwks, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).obh = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertPublicKeyJwksToKeysCOROUTINE$41(this, publicKeyJwks, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidEbsiResolver).ubl = function (publicKeyJwks) {
    var tmp = DidEbsiResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).vbl = function (publicKeyJwks) {
    var tmp = DidEbsiResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).l9y = function (did) {
    var tmp = DidEbsiResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).m9y = function (did) {
    var tmp = DidEbsiResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidEbsiResolver).o9y = function (did) {
    var tmp = DidEbsiResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidJwkResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.ebm_1 = this$0;
    this.fbm_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkResolver$resolveAsync$slambda).wbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidJwkResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.wbd($completion);
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
            suspendResult = this.ebm_1.hb5(this.fbm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidJwkResolver$resolveAsync$slambda(this.ebm_1, this.fbm_1, completion);
  };
  function DidJwkResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidJwkResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.wbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidJwkResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.obm_1 = this$0;
    this.pbm_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidJwkResolver$resolveToKeyAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidJwkResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = this.obm_1.l9v(this.pbm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidJwkResolver$resolveToKeyAsync$slambda(this.obm_1, this.pbm_1, completion);
  };
  function DidJwkResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidJwkResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$42(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ybm_1 = _this__u8e3s4;
    this.zbm_1 = did;
  }
  protoOf($resolveCOROUTINE$42).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.m9_1 = 1;
            suspendResult = this.ybm_1.l9v(this.zbm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.abn_1 = suspendResult.mp_1;
            suspendResult = new Result(this.abn_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.bbn_1 = suspendResult.mp_1;
            if (_Result___get_isFailure__impl__jpiriv(this.bbn_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.bbn_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.bbn_1;
            var tmp_1;
            if (_Result___get_isFailure__impl__jpiriv(this_0)) {
              tmp_1 = null;
            } else {
              var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
            }

            tmp_0.cbn_1 = ensureNotNull(tmp_1);
            this.m9_1 = 3;
            suspendResult = this.cbn_1.o6n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_2(this.zbm_1, ARGUMENT);
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
  protoOf($resolveCOROUTINE$42)['<set-state>'] = protoOf($resolveCOROUTINE$42).t9;
  protoOf($resolveCOROUTINE$42)['<get-state>'] = protoOf($resolveCOROUTINE$42).u9;
  protoOf($resolveCOROUTINE$42)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$42).v9;
  protoOf($resolveCOROUTINE$42)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$42).w9;
  protoOf($resolveCOROUTINE$42)['<set-result>'] = protoOf($resolveCOROUTINE$42).x9;
  protoOf($resolveCOROUTINE$42)['<get-result>'] = protoOf($resolveCOROUTINE$42).y9;
  protoOf($resolveCOROUTINE$42)['<set-exception>'] = protoOf($resolveCOROUTINE$42).z9;
  protoOf($resolveCOROUTINE$42)['<get-exception>'] = protoOf($resolveCOROUTINE$42).aa;
  protoOf($resolveCOROUTINE$42)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$42).ba;
  protoOf($resolveCOROUTINE$42)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$42).ca;
  protoOf($resolveCOROUTINE$42)['<get-context>'] = protoOf($resolveCOROUTINE$42).s9;
  function DidJwkResolver() {
    LocalResolverMethod.call(this, 'jwk');
  }
  protoOf(DidJwkResolver).hb5 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$42(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidJwkResolver).l9v = function (did, $completion) {
    var tmp = Companion_instance_4.n7g(decodeToString(Base64Utils_getInstance().decodeFromBase64Url(ensureNotNull(DidUtils_getInstance().pathFromDid(did)))), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(DidJwkResolver).l9y = function (did) {
    var tmp = DidJwkResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidJwkResolver).o9y = function (did) {
    var tmp = DidJwkResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidKeyResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.lbn_1 = this$0;
    this.mbn_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyResolver$resolveAsync$slambda).wbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.wbd($completion);
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
            suspendResult = this.lbn_1.hb5(this.mbn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidKeyResolver$resolveAsync$slambda(this.lbn_1, this.mbn_1, completion);
  };
  function DidKeyResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidKeyResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.wbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidKeyResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.vbn_1 = this$0;
    this.wbn_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidKeyResolver$resolveToKeyAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = this.vbn_1.l9v(this.wbn_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidKeyResolver$resolveToKeyAsync$slambda(this.vbn_1, this.wbn_1, completion);
  };
  function DidKeyResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidKeyResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$43(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fbo_1 = _this__u8e3s4;
    this.gbo_1 = did;
  }
  protoOf($resolveCOROUTINE$43).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.m9_1 = 1;
            suspendResult = this.fbo_1.l9v(this.gbo_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.hbo_1 = suspendResult.mp_1;
            suspendResult = new Result(this.hbo_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.ibo_1 = suspendResult.mp_1;
            this.jbo_1 = this.ibo_1;
            this.kbo_1 = Result__exceptionOrNull_impl_p6xea9(this.jbo_1);
            if (this.kbo_1 == null) {
              var tmp_0 = this;
              var tmp_1 = _Result___get_value__impl__bjfvqg(this.jbo_1);
              tmp_0.mbo_1 = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              this.nbo_1 = this.mbo_1;
              var tmp_2 = this;
              tmp_2.obo_1 = Companion_instance_2;
              this.pbo_1 = ensureNotNull(DidUtils_getInstance().identifierFromDid(this.gbo_1));
              this.m9_1 = 3;
              suspendResult = this.nbo_1.o6n(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_3 = this;
              var exception = this.kbo_1;
              tmp_3.lbo_1 = new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
              this.m9_1 = 4;
              continue $sm;
            }

          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = secondaryConstructor_3(this.gbo_1, this.pbo_1, ARGUMENT);
            var ARGUMENT_1 = ARGUMENT_0.toMap();
            var tmp1 = new DidDocument(ARGUMENT_1);
            var tmp_4 = this;
            this.obo_1;
            tmp_4.lbo_1 = new Result(_Result___init__impl__xyqfz8(tmp1));
            this.m9_1 = 4;
            continue $sm;
          case 4:
            return this.lbo_1;
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
  function $resolveToKeyCOROUTINE$44(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ybo_1 = _this__u8e3s4;
    this.zbo_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$44).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.abp_1 = DidUtils_getInstance().identifierFromDid(this.zbo_1);
            if (this.abp_1 == null) {
              this.bbp_1 = null;
              this.m9_1 = 3;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.cbp_1 = this.abp_1;
              this.dbp_1 = this.cbp_1;
              var tmp_1 = this;
              tmp_1.ebp_1 = this.dbp_1;
              this.fbp_1 = this.ebp_1;
              this.m9_1 = 1;
              suspendResult = KeyUtils_instance.gbp(this.fbp_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 2;
              continue $sm;
            }

          case 1:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.bbp_1 = suspendResult;
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var tmp1_elvis_lhs = this.bbp_1;
            var tmp_2;
            if (tmp1_elvis_lhs == null) {
              var exception = newThrowable('Failed to extract identifier from: ' + this.zbo_1);
              tmp_2 = _Result___init__impl__xyqfz8(createFailure(exception));
            } else {
              tmp_2 = tmp1_elvis_lhs.mp_1;
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
  protoOf($resolveToKeyCOROUTINE$44)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$44).t9;
  protoOf($resolveToKeyCOROUTINE$44)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$44).u9;
  protoOf($resolveToKeyCOROUTINE$44)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$44).v9;
  protoOf($resolveToKeyCOROUTINE$44)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$44).w9;
  protoOf($resolveToKeyCOROUTINE$44)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$44).x9;
  protoOf($resolveToKeyCOROUTINE$44)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$44).y9;
  protoOf($resolveToKeyCOROUTINE$44)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$44).z9;
  protoOf($resolveToKeyCOROUTINE$44)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$44).aa;
  protoOf($resolveToKeyCOROUTINE$44)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$44).ba;
  protoOf($resolveToKeyCOROUTINE$44)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$44).ca;
  protoOf($resolveToKeyCOROUTINE$44)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$44).s9;
  function DidKeyResolver() {
    LocalResolverMethod.call(this, 'key');
  }
  protoOf(DidKeyResolver).hb5 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$43(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver).l9v = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$44(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidKeyResolver).l9y = function (did) {
    var tmp = DidKeyResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidKeyResolver).o9y = function (did) {
    var tmp = DidKeyResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DidWebResolver$Companion$json$lambda($this$Json) {
    $this$Json.x4q_1 = true;
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
  protoOf(Companion_44).hbp = function () {
    return this.URL_PROTOCOL;
  };
  protoOf(Companion_44).k4s = function () {
    return this.json;
  };
  var Companion_instance_50;
  function Companion_getInstance_46() {
    if (Companion_instance_50 == null)
      new Companion_44();
    return Companion_instance_50;
  }
  function DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.qbp_1 = this$0;
    this.rbp_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).k81 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda).zb = function ($completion) {
    return this.k81($completion);
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
            suspendResult = this.qbp_1.cbh(this.rbp_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this.qbp_1, this.rbp_1, completion);
  };
  function DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.k81($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation) {
    this.bbq_1 = this$0;
    this.cbq_1 = $publicKeyJwks;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).nbh = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda).zb = function ($completion) {
    return this.nbh($completion);
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
            suspendResult = this.bbq_1.obh(this.cbq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this.bbq_1, this.cbq_1, completion);
  };
  function DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this$0, $publicKeyJwks, resultContinuation) {
    var i = new DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda(this$0, $publicKeyJwks, resultContinuation);
    var l = function ($completion) {
      return i.nbh($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.lbq_1 = this$0;
    this.mbq_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$resolveAsync$slambda).wbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$resolveAsync$slambda).zb = function ($completion) {
    return this.wbd($completion);
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
            suspendResult = this.lbq_1.hb5(this.mbq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidWebResolver$resolveAsync$slambda(this.lbq_1, this.mbq_1, completion);
  };
  function DidWebResolver$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidWebResolver$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.wbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.vbq_1 = this$0;
    this.wbq_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$resolveToKeysAsync$slambda).r9u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.r9u($completion);
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
            suspendResult = this.vbq_1.s9u(this.wbq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidWebResolver$resolveToKeysAsync$slambda(this.vbq_1, this.wbq_1, completion);
  };
  function DidWebResolver$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidWebResolver$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.r9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function DidWebResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.fbr_1 = this$0;
    this.gbr_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DidWebResolver$resolveToKeyAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = this.fbr_1.l9v(this.gbr_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new DidWebResolver$resolveToKeyAsync$slambda(this.fbr_1, this.gbr_1, completion);
  };
  function DidWebResolver$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new DidWebResolver$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveCOROUTINE$45(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pbr_1 = _this__u8e3s4;
    this.qbr_1 = did;
  }
  protoOf($resolveCOROUTINE$45).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.rbr_1 = resolveDidToUrl(this.pbr_1, this.qbr_1);
            var tmp_0 = this;
            tmp_0.sbr_1 = this.pbr_1;
            this.tbr_1 = this.sbr_1;
            this.n9_1 = 3;
            var tmp_1 = this;
            tmp_1.vbr_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.wbr_1 = this.tbr_1;
            this.xbr_1 = this.wbr_1;
            var tmp_3 = this;
            tmp_3.ybr_1 = this.xbr_1.sbp_1;
            var tmp_4 = this;
            tmp_4.zbr_1 = this.rbr_1;
            this.abs_1 = this.ybr_1;
            this.bbs_1 = this.zbr_1;
            var tmp_5 = this;
            tmp_5.cbs_1 = this.abs_1;
            this.dbs_1 = this.cbs_1;
            var tmp_6 = this;
            tmp_6.ebs_1 = this.dbs_1;
            var tmp_7 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.bbs_1);
            tmp_7.fbs_1 = this_0;
            this.gbs_1 = this.ebs_1;
            this.hbs_1 = this.fbs_1;
            this.hbs_1.i3i_1 = Companion_getInstance().b30_1;
            var tmp_8 = this;
            tmp_8.ibs_1 = this.gbs_1;
            var tmp_9 = this;
            tmp_9.jbs_1 = this.hbs_1;
            this.kbs_1 = this.ibs_1;
            this.lbs_1 = this.jbs_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.lbs_1, this.kbs_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.mbs_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = bodyAsText(this.mbs_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var it = suspendResult;
            var tmp1 = secondaryConstructor_0(get_jsonObject(Default_getInstance().g4q(it)));
            var tmp_10 = this;
            this.vbr_1;
            tmp_10.ubr_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 4;
            this.m9_1 = 5;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            var tmp_11 = this.p9_1;
            if (tmp_11 instanceof Error) {
              var e = this.p9_1;
              var tmp_12 = this;
              tmp_12.ubr_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 5;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 4:
            throw this.p9_1;
          case 5:
            this.n9_1 = 4;
            var this_1 = this.ubr_1;
            var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(this_1);
            if (tmp0_safe_receiver == null)
              null;
            else {
              throw IllegalStateException_init_$Create$_0('Could not resolve DID document: ' + this.qbr_1, tmp0_safe_receiver);
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
  protoOf($resolveCOROUTINE$45)['<set-state>'] = protoOf($resolveCOROUTINE$45).t9;
  protoOf($resolveCOROUTINE$45)['<get-state>'] = protoOf($resolveCOROUTINE$45).u9;
  protoOf($resolveCOROUTINE$45)['<set-exceptionState>'] = protoOf($resolveCOROUTINE$45).v9;
  protoOf($resolveCOROUTINE$45)['<get-exceptionState>'] = protoOf($resolveCOROUTINE$45).w9;
  protoOf($resolveCOROUTINE$45)['<set-result>'] = protoOf($resolveCOROUTINE$45).x9;
  protoOf($resolveCOROUTINE$45)['<get-result>'] = protoOf($resolveCOROUTINE$45).y9;
  protoOf($resolveCOROUTINE$45)['<set-exception>'] = protoOf($resolveCOROUTINE$45).z9;
  protoOf($resolveCOROUTINE$45)['<get-exception>'] = protoOf($resolveCOROUTINE$45).aa;
  protoOf($resolveCOROUTINE$45)['<set-finallyPath>'] = protoOf($resolveCOROUTINE$45).ba;
  protoOf($resolveCOROUTINE$45)['<get-finallyPath>'] = protoOf($resolveCOROUTINE$45).ca;
  protoOf($resolveCOROUTINE$45)['<get-context>'] = protoOf($resolveCOROUTINE$45).s9;
  function $resolveToKeyCOROUTINE$46(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vbs_1 = _this__u8e3s4;
    this.wbs_1 = did;
  }
  protoOf($resolveToKeyCOROUTINE$46).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.vbs_1.s9u(this.wbs_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.mp_1;
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
  protoOf($resolveToKeyCOROUTINE$46)['<set-state>'] = protoOf($resolveToKeyCOROUTINE$46).t9;
  protoOf($resolveToKeyCOROUTINE$46)['<get-state>'] = protoOf($resolveToKeyCOROUTINE$46).u9;
  protoOf($resolveToKeyCOROUTINE$46)['<set-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$46).v9;
  protoOf($resolveToKeyCOROUTINE$46)['<get-exceptionState>'] = protoOf($resolveToKeyCOROUTINE$46).w9;
  protoOf($resolveToKeyCOROUTINE$46)['<set-result>'] = protoOf($resolveToKeyCOROUTINE$46).x9;
  protoOf($resolveToKeyCOROUTINE$46)['<get-result>'] = protoOf($resolveToKeyCOROUTINE$46).y9;
  protoOf($resolveToKeyCOROUTINE$46)['<set-exception>'] = protoOf($resolveToKeyCOROUTINE$46).z9;
  protoOf($resolveToKeyCOROUTINE$46)['<get-exception>'] = protoOf($resolveToKeyCOROUTINE$46).aa;
  protoOf($resolveToKeyCOROUTINE$46)['<set-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$46).ba;
  protoOf($resolveToKeyCOROUTINE$46)['<get-finallyPath>'] = protoOf($resolveToKeyCOROUTINE$46).ca;
  protoOf($resolveToKeyCOROUTINE$46)['<get-context>'] = protoOf($resolveToKeyCOROUTINE$46).s9;
  function $resolveToKeysCOROUTINE$47(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fbt_1 = _this__u8e3s4;
    this.gbt_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$47).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.m9_1 = 1;
            suspendResult = this.fbt_1.hb5(this.gbt_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            this.hbt_1 = suspendResult.mp_1;
            suspendResult = new Result(this.hbt_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.ibt_1 = suspendResult.mp_1;
            if (_Result___get_isFailure__impl__jpiriv(this.ibt_1)) {
              var exception = ensureNotNull(Result__exceptionOrNull_impl_p6xea9(this.ibt_1));
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            }

            var tmp_0 = this;
            var this_0 = this.ibt_1;
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
              var exception_0 = IllegalStateException_init_$Create$('DID document is null for ' + this.gbt_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_0)));
            } else {
              tmp_3 = tmp0_elvis_lhs;
            }

            tmp_0.jbt_1 = tmp_3;
            var tmp_4 = this;
            var tmp1_elvis_lhs = this.jbt_1.ze('verificationMethod');
            var tmp_5;
            if (tmp1_elvis_lhs == null) {
              var exception_1 = IllegalStateException_init_$Create$('No verification method found in DID document for ' + this.gbt_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_1)));
            } else {
              tmp_5 = tmp1_elvis_lhs;
            }

            tmp_4.kbt_1 = tmp_5;
            this.lbt_1 = get_jsonArray(this.kbt_1);
            var tmp_6 = this;
            var tmp0 = this.lbt_1;
            var destination = ArrayList_init_$Create$();
            var _iterator__ex2g4s = tmp0.p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              this.fbt_1;
              var tmp_7;
              try {
                var tmp$ret$0 = Unit_instance;
                l$ret$1: do {
                  var method = get_jsonObject(element);
                  var tmp0_safe_receiver = method.ze('publicKeyJwk');
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
                  var this_2 = this_1.v22();
                  var this_3 = serializer(this_2, createKType(getKClass(JsonObject), arrayOf([]), false));
                  tmp$ret$0 = this_1.y1z(isInterface(this_3, KSerializer) ? this_3 : THROW_CCE(), publicKeyJwk);
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

            tmp_6.mbt_1 = destination;
            if (this.mbt_1.h()) {
              var exception_2 = IllegalStateException_init_$Create$('No valid public key JWKs found in DID document for ' + this.gbt_1);
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception_2)));
            }

            this.m9_1 = 3;
            suspendResult = this.fbt_1.obh(this.mbt_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.mp_1;
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
  protoOf($resolveToKeysCOROUTINE$47)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$47).t9;
  protoOf($resolveToKeysCOROUTINE$47)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$47).u9;
  protoOf($resolveToKeysCOROUTINE$47)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$47).v9;
  protoOf($resolveToKeysCOROUTINE$47)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$47).w9;
  protoOf($resolveToKeysCOROUTINE$47)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$47).x9;
  protoOf($resolveToKeysCOROUTINE$47)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$47).y9;
  protoOf($resolveToKeysCOROUTINE$47)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$47).z9;
  protoOf($resolveToKeysCOROUTINE$47)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$47).aa;
  protoOf($resolveToKeysCOROUTINE$47)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$47).ba;
  protoOf($resolveToKeysCOROUTINE$47)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$47).ca;
  protoOf($resolveToKeysCOROUTINE$47)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$47).s9;
  function $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vbt_1 = _this__u8e3s4;
    this.wbt_1 = publicKeyJwks;
  }
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            tmp_0.xbt_1 = this.wbt_1;
            this.ybt_1 = this.xbt_1;
            this.zbt_1 = this.ybt_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.zbt_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.abu_1 = this.zbt_1.r();
            var tmp_1 = this;
            tmp_1.bbu_1 = this.abu_1;
            this.cbu_1 = this.bbu_1;
            this.m9_1 = 2;
            suspendResult = Companion_instance_4.n7g(this.cbu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var result = suspendResult.mp_1;
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
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<set-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).t9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-state>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).u9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<set-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).v9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-exceptionState>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).w9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<set-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).x9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-result>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).y9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<set-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).z9;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-exception>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).aa;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<set-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).ba;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-finallyPath>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).ca;
  protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48)['<get-context>'] = protoOf($tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48).s9;
  function $tryConvertPublicKeyJwksToKeysCOROUTINE$49(_this__u8e3s4, publicKeyJwks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.lbu_1 = _this__u8e3s4;
    this.mbu_1 = publicKeyJwks;
  }
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            tmp_0.nbu_1 = LinkedHashSet_init_$Create$();
            this.obu_1 = this.mbu_1.p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.obu_1.q()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.pbu_1 = this.obu_1.r();
            this.m9_1 = 2;
            suspendResult = Companion_instance_4.n7g(this.pbu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var result = suspendResult.mp_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              throwOnFailure(result);
              var tmp_1 = _Result___get_value__impl__bjfvqg(result);
              this.nbu_1.n((tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE());
            }

            this.m9_1 = 1;
            continue $sm;
          case 4:
            var tmp_2;
            if (!this.nbu_1.h()) {
              var value = this.nbu_1;
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
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<set-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).t9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-state>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).u9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<set-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).v9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-exceptionState>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).w9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<set-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).x9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-result>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).y9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<set-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).z9;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-exception>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).aa;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<set-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).ba;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-finallyPath>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).ca;
  protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49)['<get-context>'] = protoOf($tryConvertPublicKeyJwksToKeysCOROUTINE$49).s9;
  function DidWebResolver(client) {
    Companion_getInstance_46();
    LocalResolverMethod.call(this, 'web');
    this.sbp_1 = client;
  }
  protoOf(DidWebResolver).hb5 = function (did, $completion) {
    var tmp = new $resolveCOROUTINE$45(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).l9v = function (did, $completion) {
    var tmp = new $resolveToKeyCOROUTINE$46(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).s9u = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$47(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).cbh = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertAnyPublicKeyJwkToKeyCOROUTINE$48(this, publicKeyJwks, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).obh = function (publicKeyJwks, $completion) {
    var tmp = new $tryConvertPublicKeyJwksToKeysCOROUTINE$49(this, publicKeyJwks, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(DidWebResolver).ubl = function (publicKeyJwks) {
    var tmp = DidWebResolver$tryConvertAnyPublicKeyJwkToKeyAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).vbl = function (publicKeyJwks) {
    var tmp = DidWebResolver$tryConvertPublicKeyJwksToKeysAsync$slambda_0(this, publicKeyJwks, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).l9y = function (did) {
    var tmp = DidWebResolver$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).m9y = function (did) {
    var tmp = DidWebResolver$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(DidWebResolver).o9y = function (did) {
    var tmp = DidWebResolver$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function LocalResolverMethod$resolveAsync$slambda(this$0, $did, resultContinuation) {
    this.ybu_1 = this$0;
    this.zbu_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolverMethod$resolveAsync$slambda).wbd = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod$resolveAsync$slambda).zb = function ($completion) {
    return this.wbd($completion);
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
            suspendResult = this.ybu_1.hb5(this.zbu_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new LocalResolverMethod$resolveAsync$slambda(this.ybu_1, this.zbu_1, completion);
  };
  function LocalResolverMethod$resolveAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolverMethod$resolveAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.wbd($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolverMethod$resolveToKeysAsync$slambda(this$0, $did, resultContinuation) {
    this.ibv_1 = this$0;
    this.jbv_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolverMethod$resolveToKeysAsync$slambda).r9u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod$resolveToKeysAsync$slambda).zb = function ($completion) {
    return this.r9u($completion);
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
            suspendResult = this.ibv_1.s9u(this.jbv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new LocalResolverMethod$resolveToKeysAsync$slambda(this.ibv_1, this.jbv_1, completion);
  };
  function LocalResolverMethod$resolveToKeysAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolverMethod$resolveToKeysAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.r9u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function LocalResolverMethod$resolveToKeyAsync$slambda(this$0, $did, resultContinuation) {
    this.sbv_1 = this$0;
    this.tbv_1 = $did;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LocalResolverMethod$resolveToKeyAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod$resolveToKeyAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = this.sbv_1.l9v(this.tbv_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new LocalResolverMethod$resolveToKeyAsync$slambda(this.sbv_1, this.tbv_1, completion);
  };
  function LocalResolverMethod$resolveToKeyAsync$slambda_0(this$0, $did, resultContinuation) {
    var i = new LocalResolverMethod$resolveToKeyAsync$slambda(this$0, $did, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $resolveToKeysCOROUTINE$50(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cbw_1 = _this__u8e3s4;
    this.dbw_1 = did;
  }
  protoOf($resolveToKeysCOROUTINE$50).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.cbw_1.l9v(this.dbw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.mp_1;
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
  protoOf($resolveToKeysCOROUTINE$50)['<set-state>'] = protoOf($resolveToKeysCOROUTINE$50).t9;
  protoOf($resolveToKeysCOROUTINE$50)['<get-state>'] = protoOf($resolveToKeysCOROUTINE$50).u9;
  protoOf($resolveToKeysCOROUTINE$50)['<set-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$50).v9;
  protoOf($resolveToKeysCOROUTINE$50)['<get-exceptionState>'] = protoOf($resolveToKeysCOROUTINE$50).w9;
  protoOf($resolveToKeysCOROUTINE$50)['<set-result>'] = protoOf($resolveToKeysCOROUTINE$50).x9;
  protoOf($resolveToKeysCOROUTINE$50)['<get-result>'] = protoOf($resolveToKeysCOROUTINE$50).y9;
  protoOf($resolveToKeysCOROUTINE$50)['<set-exception>'] = protoOf($resolveToKeysCOROUTINE$50).z9;
  protoOf($resolveToKeysCOROUTINE$50)['<get-exception>'] = protoOf($resolveToKeysCOROUTINE$50).aa;
  protoOf($resolveToKeysCOROUTINE$50)['<set-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$50).ba;
  protoOf($resolveToKeysCOROUTINE$50)['<get-finallyPath>'] = protoOf($resolveToKeysCOROUTINE$50).ca;
  protoOf($resolveToKeysCOROUTINE$50)['<get-context>'] = protoOf($resolveToKeysCOROUTINE$50).s9;
  function LocalResolverMethod(method) {
    this.method = method;
  }
  protoOf(LocalResolverMethod).m3l = function () {
    return this.method;
  };
  protoOf(LocalResolverMethod).s9u = function (did, $completion) {
    var tmp = new $resolveToKeysCOROUTINE$50(this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(LocalResolverMethod).l9y = function (did) {
    var tmp = LocalResolverMethod$resolveAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolverMethod).m9y = function (did) {
    var tmp = LocalResolverMethod$resolveToKeysAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(LocalResolverMethod).o9y = function (did) {
    var tmp = LocalResolverMethod$resolveToKeyAsync$slambda_0(this, did, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function WaltidServices$initAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WaltidServices$initAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(WaltidServices$initAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = WaltidServices_instance.h6k(this);
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
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function WaltidServices$minimalInitAsync$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(WaltidServices$minimalInitAsync$slambda).r1v = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(WaltidServices$minimalInitAsync$slambda).zb = function ($completion) {
    return this.r1v($completion);
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
            suspendResult = WaltidServices_instance.f9s(this);
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
      return i.r1v($completion);
    };
    l.$arity = 0;
    return l;
  }
  function WaltidServices() {
  }
  protoOf(WaltidServices).h6k = function ($completion) {
    return DidService_getInstance().init$default(VOID, VOID, $completion);
  };
  protoOf(WaltidServices).f9s = function ($completion) {
    return DidService_getInstance().f9s($completion);
  };
  protoOf(WaltidServices).h6p = function () {
    var tmp = WaltidServices$initAsync$slambda_0(null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(WaltidServices).g9y = function () {
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
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function importJwk($this, element, $completion) {
    var tmp = Companion_instance_4.n7g(element.toString(), $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  }
  function importBase58($this, content, type, $completion) {
    var tmp = new $importBase58COROUTINE$53($this, content, type, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  }
  function importMultibase($this, content, $completion) {
    var tmp = KeyUtils_instance.gbp(content, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  }
  function importHex($this, content, type, $completion) {
    var tmp = new $importHexCOROUTINE$54($this, content, type, $completion);
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
    this.wbz_1 = $element;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyMaterial$getAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeyMaterial$getAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = KeyMaterial_instance.kbc(this.wbz_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new KeyMaterial$getAsync$slambda(this.wbz_1, completion);
  };
  function KeyMaterial$getAsync$slambda_0($element, resultContinuation) {
    var i = new KeyMaterial$getAsync$slambda($element, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getCOROUTINE$51(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fc0_1 = _this__u8e3s4;
    this.gc0_1 = element;
  }
  protoOf($getCOROUTINE$51).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.hc0_1 = this.gc0_1;
            var tmp_0 = this.hc0_1;
            if (tmp_0 instanceof JsonObject) {
              this.m9_1 = 1;
              suspendResult = importKey(this.fc0_1, this.gc0_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 2;
              continue $sm;
            } else {
              var tmp_1 = this;
              throw Exception_init_$Create$('Failed to find public key element: ' + toString_0(this.gc0_1));
            }

          case 1:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.ic0_1 = suspendResult.mp_1;
            this.m9_1 = 3;
            continue $sm;
          case 3:
            return new Result(this.ic0_1);
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
  protoOf($getCOROUTINE$51)['<set-state>'] = protoOf($getCOROUTINE$51).t9;
  protoOf($getCOROUTINE$51)['<get-state>'] = protoOf($getCOROUTINE$51).u9;
  protoOf($getCOROUTINE$51)['<set-exceptionState>'] = protoOf($getCOROUTINE$51).v9;
  protoOf($getCOROUTINE$51)['<get-exceptionState>'] = protoOf($getCOROUTINE$51).w9;
  protoOf($getCOROUTINE$51)['<set-result>'] = protoOf($getCOROUTINE$51).x9;
  protoOf($getCOROUTINE$51)['<get-result>'] = protoOf($getCOROUTINE$51).y9;
  protoOf($getCOROUTINE$51)['<set-exception>'] = protoOf($getCOROUTINE$51).z9;
  protoOf($getCOROUTINE$51)['<get-exception>'] = protoOf($getCOROUTINE$51).aa;
  protoOf($getCOROUTINE$51)['<set-finallyPath>'] = protoOf($getCOROUTINE$51).ba;
  protoOf($getCOROUTINE$51)['<get-finallyPath>'] = protoOf($getCOROUTINE$51).ca;
  protoOf($getCOROUTINE$51)['<get-context>'] = protoOf($getCOROUTINE$51).s9;
  function $importKeyCOROUTINE$52(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cbx_1 = _this__u8e3s4;
    this.dbx_1 = element;
  }
  protoOf($importKeyCOROUTINE$52).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 13;
            this.ebx_1 = get_jsonPrimitive(ensureNotNull(get_jsonObject(this.dbx_1).ze('type'))).p4s();
            var tmp_0 = this;
            var tmp0_safe_receiver = get_jsonObject(this.dbx_1).ze('publicKeyJwk');
            tmp_0.fbx_1 = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            if (this.fbx_1 == null) {
              this.gbx_1 = null;
              this.m9_1 = 3;
              continue $sm;
            } else {
              var tmp_1 = this;
              tmp_1.hbx_1 = this.fbx_1;
              this.ibx_1 = this.hbx_1;
              var tmp_2 = this;
              tmp_2.jbx_1 = this.ibx_1;
              this.kbx_1 = this.jbx_1;
              this.m9_1 = 1;
              suspendResult = importJwk(KeyMaterial_instance, this.kbx_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 2;
              continue $sm;
            }

          case 1:
            this.lbx_1 = suspendResult.mp_1;
            suspendResult = new Result(this.lbx_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            var tmp_3 = this;
            return suspendResult;
          case 3:
            var tmp_4 = this;
            var tmp2_safe_receiver = get_jsonObject(this.dbx_1).ze('publicKeyBase58');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            tmp_4.mbx_1 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p4s();
            if (this.mbx_1 == null) {
              this.nbx_1 = null;
              this.m9_1 = 6;
              continue $sm;
            } else {
              var tmp_5 = this;
              tmp_5.obx_1 = this.mbx_1;
              this.pbx_1 = this.obx_1;
              var tmp_6 = this;
              tmp_6.qbx_1 = this.pbx_1;
              this.rbx_1 = this.qbx_1;
              this.m9_1 = 4;
              suspendResult = importBase58(KeyMaterial_instance, this.rbx_1, KeyUtils_instance.getKeyTypeForVerificationMaterialType(this.ebx_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 5;
              continue $sm;
            }

          case 4:
            this.sbx_1 = suspendResult.mp_1;
            suspendResult = new Result(this.sbx_1);
            this.m9_1 = 5;
            continue $sm;
          case 5:
            var tmp_7 = this;
            return suspendResult;
          case 6:
            var tmp_8 = this;
            var tmp5_safe_receiver = get_jsonObject(this.dbx_1).ze('publicKeyMultibase');
            var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : get_jsonPrimitive(tmp5_safe_receiver);
            tmp_8.tbx_1 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.p4s();
            if (this.tbx_1 == null) {
              this.ubx_1 = null;
              this.m9_1 = 9;
              continue $sm;
            } else {
              var tmp_9 = this;
              tmp_9.vbx_1 = this.tbx_1;
              this.wbx_1 = this.vbx_1;
              var tmp_10 = this;
              tmp_10.xbx_1 = this.wbx_1;
              this.ybx_1 = this.xbx_1;
              this.m9_1 = 7;
              suspendResult = importMultibase(KeyMaterial_instance, this.ybx_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 8;
              continue $sm;
            }

          case 7:
            this.zbx_1 = suspendResult.mp_1;
            suspendResult = new Result(this.zbx_1);
            this.m9_1 = 8;
            continue $sm;
          case 8:
            var tmp_11 = this;
            return suspendResult;
          case 9:
            var tmp_12 = this;
            var tmp8_safe_receiver = get_jsonObject(this.dbx_1).ze('publicKeyHex');
            var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : get_jsonPrimitive(tmp8_safe_receiver);
            tmp_12.aby_1 = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.p4s();
            if (this.aby_1 == null) {
              this.bby_1 = null;
              this.m9_1 = 12;
              continue $sm;
            } else {
              var tmp_13 = this;
              tmp_13.cby_1 = this.aby_1;
              this.dby_1 = this.cby_1;
              var tmp_14 = this;
              tmp_14.eby_1 = this.dby_1;
              this.fby_1 = this.eby_1;
              this.m9_1 = 10;
              suspendResult = importHex(KeyMaterial_instance, this.fby_1, KeyUtils_instance.getKeyTypeForVerificationMaterialType(this.ebx_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 11;
              continue $sm;
            }

          case 10:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 11;
            continue $sm;
          case 11:
            var tmp_15 = this;
            return suspendResult;
          case 12:
            throw IllegalArgumentException_init_$Create$('Public key format not supported: ' + this.dbx_1.toString() + '.');
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
  function $importBase58COROUTINE$53(_this__u8e3s4, content, type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oby_1 = _this__u8e3s4;
    this.pby_1 = content;
    this.qby_1 = type;
  }
  protoOf($importBase58COROUTINE$53).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.rby_1 = this.oby_1;
            this.sby_1 = this.rby_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.uby_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.vby_1 = this.sby_1;
            this.wby_1 = this.vby_1;
            this.m9_1 = 1;
            suspendResult = Companion_instance_4.u82(this.qby_1, decodeBase58(this.pby_1), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.uby_1;
            tmp_3.tby_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.tby_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.tby_1);
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
  function $importHexCOROUTINE$54(_this__u8e3s4, content, type, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fbz_1 = _this__u8e3s4;
    this.gbz_1 = content;
    this.hbz_1 = type;
  }
  protoOf($importHexCOROUTINE$54).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.ibz_1 = this.fbz_1;
            this.jbz_1 = this.ibz_1;
            this.n9_1 = 2;
            var tmp_1 = this;
            tmp_1.lbz_1 = Companion_instance_2;
            var tmp_2 = this;
            tmp_2.mbz_1 = this.jbz_1;
            this.nbz_1 = this.mbz_1;
            this.m9_1 = 1;
            suspendResult = Companion_instance_4.u82(this.hbz_1, fromHexString(this.nbz_1, this.gbz_1), null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = suspendResult;
            var tmp_3 = this;
            this.lbz_1;
            tmp_3.kbz_1 = _Result___init__impl__xyqfz8(tmp1);
            this.n9_1 = 3;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            this.n9_1 = 3;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof Error) {
              var e = this.p9_1;
              var tmp_5 = this;
              tmp_5.kbz_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 4;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 3:
            throw this.p9_1;
          case 4:
            this.n9_1 = 3;
            return new Result(this.kbz_1);
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
  protoOf(KeyMaterial).kbc = function (element, $completion) {
    var tmp = new $getCOROUTINE$51(this, element, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeyMaterial).jc0 = function (element) {
    var tmp = KeyMaterial$getAsync$slambda_0(element, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var KeyMaterial_instance;
  function KeyMaterial_getInstance() {
    return KeyMaterial_instance;
  }
  function KeyUtils$fromPublicKeyMultiBaseAsync$slambda($identifier, resultContinuation) {
    this.sc0_1 = $identifier;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyUtils$fromPublicKeyMultiBaseAsync$slambda).o6u = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeyUtils$fromPublicKeyMultiBaseAsync$slambda).zb = function ($completion) {
    return this.o6u($completion);
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
            suspendResult = KeyUtils_instance.gbp(this.sc0_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.m9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.mp_1;
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
    return new KeyUtils$fromPublicKeyMultiBaseAsync$slambda(this.sc0_1, completion);
  };
  function KeyUtils$fromPublicKeyMultiBaseAsync$slambda_0($identifier, resultContinuation) {
    var i = new KeyUtils$fromPublicKeyMultiBaseAsync$slambda($identifier, resultContinuation);
    var l = function ($completion) {
      return i.o6u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $fromPublicKeyMultiBaseCOROUTINE$55(_this__u8e3s4, identifier, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bc1_1 = _this__u8e3s4;
    this.cc1_1 = identifier;
  }
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            this.dc1_1 = MultiBaseUtils_instance.p9a(this.cc1_1);
            this.ec1_1 = MultiCodecUtils_getInstance().getMultiCodecKeyCodeUsingString(this.cc1_1);
            if (this.ec1_1 === _UInt___init__impl__l7qpdl(60241)) {
              this.m9_1 = 2;
              suspendResult = Companion_instance_4.n7g(decodeToString(this.dc1_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 3;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.gc1_1 = Companion_instance_2;
              this.m9_1 = 1;
              suspendResult = Companion_instance_4.u82(MultiCodecUtils_getInstance().getKeyTypeFromKeyCode(this.ec1_1), this.dc1_1, null, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp1 = suspendResult;
            var tmp_1 = this;
            this.gc1_1;
            tmp_1.fc1_1 = _Result___init__impl__xyqfz8(tmp1);
            this.m9_1 = 4;
            continue $sm;
          case 2:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 3;
            continue $sm;
          case 3:
            this.fc1_1 = suspendResult.mp_1;
            this.m9_1 = 4;
            continue $sm;
          case 4:
            return new Result(this.fc1_1);
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
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<set-state>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).t9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-state>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).u9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<set-exceptionState>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).v9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-exceptionState>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).w9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<set-result>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).x9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-result>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).y9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<set-exception>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).z9;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-exception>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).aa;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<set-finallyPath>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).ba;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-finallyPath>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).ca;
  protoOf($fromPublicKeyMultiBaseCOROUTINE$55)['<get-context>'] = protoOf($fromPublicKeyMultiBaseCOROUTINE$55).s9;
  function KeyUtils() {
  }
  protoOf(KeyUtils).gbp = function (identifier, $completion) {
    var tmp = new $fromPublicKeyMultiBaseCOROUTINE$55(this, identifier, $completion);
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
        if (regex.re(tmp$ret$3)) {
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
  protoOf(KeyUtils).hc1 = function (identifier) {
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
    tmp.ic1_1 = ['verificationMethod', 'assertionMethod', 'capabilityInvocation', 'capabilityDelegation', 'keyAgreement', 'authentication'];
  }
  protoOf(VerificationMaterial).get = function (document) {
    var tmp0 = this.ic1_1;
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
      var element_0 = get_jsonObject(document).ze(tmp0_safe_receiver);
      var verificationMethod = extractVerificationMethod(VerificationMaterial_getInstance(), element_0);
      tmp = extractVerificationMaterial(VerificationMaterial_getInstance(), verificationMethod);
    }
    return tmp;
  };
  protoOf(VerificationMaterial).getAll = function (document) {
    var tmp0_safe_receiver = get_jsonObject(document).ze('verificationMethod');
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
  protoOf($serializer).m2a = typeParametersSerializers;
  protoOf($serializer_0).m2a = typeParametersSerializers;
  protoOf($serializer_1).m2a = typeParametersSerializers;
  protoOf($serializer_2).m2a = typeParametersSerializers;
  protoOf($serializer_3).m2a = typeParametersSerializers;
  protoOf($serializer_4).m2a = typeParametersSerializers;
  protoOf($serializer_5).m2a = typeParametersSerializers;
  protoOf($serializer_6).m2a = typeParametersSerializers;
  protoOf($serializer_7).m2a = typeParametersSerializers;
  protoOf($serializer_8).m2a = typeParametersSerializers;
  protoOf($serializer_9).m2a = typeParametersSerializers;
  defineProp(protoOf(RegisteredServiceType), 'name', protoOf(RegisteredServiceType).s2);
  defineProp(protoOf(RegisteredServiceType), 'ordinal', protoOf(RegisteredServiceType).t2);
  defineProp(protoOf(VerificationMaterialType), 'name', protoOf(VerificationMaterialType).s2);
  defineProp(protoOf(VerificationMaterialType), 'ordinal', protoOf(VerificationMaterialType).t2);
  defineProp(protoOf(VerificationMethodType), 'name', protoOf(VerificationMethodType).s2);
  defineProp(protoOf(VerificationMethodType), 'ordinal', protoOf(VerificationMethodType).t2);
  defineProp(protoOf(VerificationRelationshipType), 'name', protoOf(VerificationRelationshipType).s2);
  defineProp(protoOf(VerificationRelationshipType), 'ordinal', protoOf(VerificationRelationshipType).t2);
  protoOf($serializer_10).m2a = typeParametersSerializers;
  defineProp(protoOf(LocalRegistrar), 'name', function () {
    return this.s2();
  });
  defineProp(protoOf(UniregistrarRegistrar), 'name', function () {
    return this.s2();
  });
  protoOf($serializer_11).m2a = typeParametersSerializers;
  protoOf($serializer_12).m2a = typeParametersSerializers;
  protoOf($serializer_13).m2a = typeParametersSerializers;
  protoOf($serializer_14).m2a = typeParametersSerializers;
  protoOf($serializer_15).m2a = typeParametersSerializers;
  protoOf($serializer_16).m2a = typeParametersSerializers;
  protoOf($serializer_17).m2a = typeParametersSerializers;
  defineProp(protoOf(DidState), 'state', function () {
    return this.u9();
  });
  protoOf($serializer_18).m2a = typeParametersSerializers;
  protoOf($serializer_19).m2a = typeParametersSerializers;
  protoOf($serializer_20).m2a = typeParametersSerializers;
  protoOf($serializer_21).m2a = typeParametersSerializers;
  protoOf($serializer_22).m2a = typeParametersSerializers;
  protoOf($serializer_23).m2a = typeParametersSerializers;
  protoOf($serializer_24).m2a = typeParametersSerializers;
  protoOf($serializer_25).m2a = typeParametersSerializers;
  protoOf($serializer_26).m2a = typeParametersSerializers;
  protoOf($serializer_27).m2a = typeParametersSerializers;
  protoOf($serializer_28).m2a = typeParametersSerializers;
  protoOf($serializer_29).m2a = typeParametersSerializers;
  protoOf($serializer_30).m2a = typeParametersSerializers;
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
