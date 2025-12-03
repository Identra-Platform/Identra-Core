(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'jose', 'crypto', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js', './kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js', './kotlin-logging.js', './ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js', './ktor-ktor-client-ktor-client-core.js', './ktor-ktor-client-ktor-client-plugins-ktor-client-logging.js', './ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js', './ktor-ktor-http.js', './cache4k-cache4k.js', './Kotlin-DateTime-library-kotlinx-datetime.js', './ktor-ktor-utils.js', './hash-library-sha2.js', './ktor-ktor-io.js', './MACs-library-hmac-hmac-sha2.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('jose'), require('crypto'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js'), require('./kotlin-logging.js'), require('./ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./ktor-ktor-client-ktor-client-plugins-ktor-client-logging.js'), require('./ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js'), require('./ktor-ktor-http.js'), require('./cache4k-cache4k.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./ktor-ktor-utils.js'), require('./hash-library-sha2.js'), require('./ktor-ktor-io.js'), require('./MACs-library-hmac-hmac-sha2.js'));
  else {
    if (typeof jose === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'jose' was not found. Please, check whether 'jose' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof crypto === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'crypto' was not found. Please, check whether 'crypto' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' was not found. Please, check whether 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging' was not found. Please, check whether 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['cache4k-cache4k'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'cache4k-cache4k' was not found. Please, check whether 'cache4k-cache4k' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['hash-library-sha2'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'hash-library-sha2' was not found. Please, check whether 'hash-library-sha2' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    if (typeof globalThis['MACs-library-hmac-hmac-sha2'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.crypto:waltid-crypto'. Its dependency 'MACs-library-hmac-hmac-sha2' was not found. Please, check whether 'MACs-library-hmac-hmac-sha2' is loaded prior to 'id.walt.crypto:waltid-crypto'.");
    }
    globalThis['id.walt.crypto:waltid-crypto'] = factory(typeof globalThis['id.walt.crypto:waltid-crypto'] === 'undefined' ? {} : globalThis['id.walt.crypto:waltid-crypto'], jose, crypto, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core'], globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'], globalThis['kotlin-logging'], globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'], globalThis['ktor-ktor-client-ktor-client-core'], globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'], globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'], globalThis['ktor-ktor-http'], globalThis['cache4k-cache4k'], globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['ktor-ktor-utils'], globalThis['hash-library-sha2'], globalThis['ktor-ktor-io'], globalThis['MACs-library-hmac-hmac-sha2']);
  }
}(function (_, jose, crypto, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime, kotlin_io_github_oshai_kotlin_logging, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_client_logging, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_http, kotlin_io_github_reactivecircus_cache4k_cache4k, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_io_ktor_ktor_utils, kotlin_org_kotlincrypto_hash_sha2, kotlin_io_ktor_ktor_io, kotlin_org_kotlincrypto_macs_hmac_sha2) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var IllegalArgumentException = kotlin_kotlin.$_$.lg;
  var VOID = kotlin_kotlin.$_$.j;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.z1;
  var captureStack = kotlin_kotlin.$_$.xa;
  var protoOf = kotlin_kotlin.$_$.pc;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  var IllegalStateException = kotlin_kotlin.$_$.mg;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.e2;
  var joinToString = kotlin_kotlin.$_$.c8;
  var toMutableList = kotlin_kotlin.$_$.r9;
  var toByte = kotlin_kotlin.$_$.qc;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var toByteArray = kotlin_kotlin.$_$.h9;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var copyOfRange = kotlin_kotlin.$_$.x6;
  var arrayCopy = kotlin_kotlin.$_$.l6;
  var primitiveArrayConcat = kotlin_kotlin.$_$.i;
  var until = kotlin_kotlin.$_$.bd;
  var sliceArray = kotlin_kotlin.$_$.c9;
  var toList = kotlin_kotlin.$_$.k9;
  var initMetadataForObject = kotlin_kotlin.$_$.rb;
  var getKClass = kotlin_kotlin.$_$.g;
  var JsonClassDiscriminator = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.o;
  var lazy = kotlin_kotlin.$_$.rh;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.mb;
  var CoroutineImpl = kotlin_kotlin.$_$.pa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z9;
  var initMetadataForLambda = kotlin_kotlin.$_$.qb;
  var Result = kotlin_kotlin.$_$.rg;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var arrayOf = kotlin_kotlin.$_$.hh;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var THROW_CCE = kotlin_kotlin.$_$.tg;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var isInterface = kotlin_kotlin.$_$.ac;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.nb;
  var emptyMap = kotlin_kotlin.$_$.m7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var $runInAsync$ = kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime.$_$.a;
  var defineProp = kotlin_kotlin.$_$.eb;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var Companion_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var hashCode = kotlin_kotlin.$_$.kb;
  var equals = kotlin_kotlin.$_$.fb;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var objectCreate = kotlin_kotlin.$_$.oc;
  var toString = kotlin_kotlin.$_$.yh;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var ensureNotNull = kotlin_kotlin.$_$.lh;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.t;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var mapCapacity = kotlin_kotlin.$_$.l8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var Companion_instance_1 = kotlin_kotlin.$_$.q5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i3;
  var createFailure = kotlin_kotlin.$_$.kh;
  var toString_0 = kotlin_kotlin.$_$.tc;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var PolymorphicModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var THROW_IAE = kotlin_kotlin.$_$.ug;
  var Enum = kotlin_kotlin.$_$.ig;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var HashMap = kotlin_kotlin.$_$.y5;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.k5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var encodeToByteArray = kotlin_kotlin.$_$.td;
  var Triple = kotlin_kotlin.$_$.vg;
  var get_ContentNegotiation = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var defaultRequest = kotlin_io_ktor_ktor_client_core.$_$.l;
  var get_Logging = kotlin_io_ktor_ktor_client_logging.$_$.d;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var header = kotlin_io_ktor_ktor_client_core.$_$.r;
  var Companion_instance_2 = kotlin_io_ktor_ktor_client_logging.$_$.b;
  var get_DEFAULT = kotlin_io_ktor_ktor_client_logging.$_$.c;
  var LogLevel_ALL_getInstance = kotlin_io_ktor_ktor_client_logging.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.z;
  var Companion_instance_3 = kotlin_io_github_reactivecircus_cache4k_cache4k.$_$.a;
  var Companion_getInstance = kotlin_kotlin.$_$.l5;
  var DurationUnit_HOURS_getInstance = kotlin_kotlin.$_$.l;
  var toDuration = kotlin_kotlin.$_$.yf;
  var charSequenceLength = kotlin_kotlin.$_$.bb;
  var get_request = kotlin_io_ktor_ktor_client_core.$_$.x;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.m;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.n;
  var url = kotlin_io_ktor_ktor_client_core.$_$.t;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.q;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.h;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.w;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.j;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.s;
  var trimIndent = kotlin_kotlin.$_$.uf;
  var trimMargin = kotlin_kotlin.$_$.vf;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.j;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var throwOnFailure = kotlin_kotlin.$_$.wh;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.m3;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.j3;
  var isBlank = kotlin_kotlin.$_$.be;
  var SHA256_init_$Create$ = kotlin_org_kotlincrypto_hash_sha2.$_$.a;
  var toByteArray_0 = kotlin_io_ktor_ktor_io.$_$.f1;
  var toHexString = kotlin_kotlin.$_$.hf;
  var HmacSHA256_init_$Create$ = kotlin_org_kotlincrypto_macs_hmac_sha2.$_$.a;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var Companion_getInstance_2 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var toLocalDateTime = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.g;
  var replace = kotlin_kotlin.$_$.oe;
  var toInstant = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.f;
  var to = kotlin_kotlin.$_$.ai;
  var mapOf = kotlin_kotlin.$_$.n8;
  var lazy_0 = kotlin_kotlin.$_$.sh;
  var endsWith = kotlin_kotlin.$_$.vd;
  var encodeBase64 = kotlin_io_ktor_ktor_utils.$_$.a1;
  var listOf = kotlin_kotlin.$_$.k8;
  var NotImplementedError = kotlin_kotlin.$_$.pg;
  var KProperty1 = kotlin_kotlin.$_$.gd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ib;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var InstantIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.c2;
  var charSequenceGet = kotlin_kotlin.$_$.ab;
  var toString_1 = kotlin_kotlin.$_$.h3;
  var contains = kotlin_kotlin.$_$.od;
  var contentType = kotlin_io_ktor_ktor_http.$_$.j1;
  var formUrlEncode = kotlin_io_ktor_ktor_http.$_$.l1;
  var Default_getInstance_0 = kotlin_kotlin.$_$.j5;
  var bearerAuth = kotlin_io_ktor_ktor_client_core.$_$.p;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.xh;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var JsonPrimitive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var isSuccess = kotlin_io_ktor_ktor_http.$_$.o1;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var JsonNull_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var initMetadataForInterface = kotlin_kotlin.$_$.pb;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var toHttpDate = kotlin_io_ktor_ktor_http.$_$.s1;
  var Default_getInstance_1 = kotlin_kotlin.$_$.b5;
  var JsonPrimitive_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var Companion_getInstance_3 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var plus = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.e;
  var mapOf_0 = kotlin_kotlin.$_$.m8;
  var isArray = kotlin_kotlin.$_$.sb;
  var get_host = kotlin_io_ktor_ktor_client_core.$_$.s;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var toMap = kotlin_kotlin.$_$.o9;
  var decodeToString = kotlin_kotlin.$_$.qd;
  var substringAfter = kotlin_kotlin.$_$.ze;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.l3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.h2;
  var substringBefore = kotlin_kotlin.$_$.af;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.r;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.r;
  var get_contentOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var KtMap = kotlin_kotlin.$_$.f6;
  var Pair = kotlin_kotlin.$_$.qg;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.th;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var decodeBase64Bytes = kotlin_io_ktor_ktor_utils.$_$.z;
  var ByteArraySerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var startsWith = kotlin_kotlin.$_$.te;
  var lineSequence = kotlin_kotlin.$_$.he;
  var filterNot = kotlin_kotlin.$_$.jd;
  var joinToString_0 = kotlin_kotlin.$_$.kd;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.k1;
  var removePrefix = kotlin_kotlin.$_$.ke;
  var mutableMapOf = kotlin_kotlin.$_$.p8;
  var KtMutableMap = kotlin_kotlin.$_$.h6;
  var isByteArray = kotlin_kotlin.$_$.ub;
  var split = kotlin_kotlin.$_$.se;
  var lazyOf = kotlin_kotlin.$_$.qh;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g3;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.m2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.w3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.y3;
  var UInt__toInt_impl_93yt4d = kotlin_kotlin.$_$.z3;
  var toUInt = kotlin_kotlin.$_$.zh;
  var UInt__compareTo_impl_yacclj = kotlin_kotlin.$_$.x3;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.n3;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.o3;
  var uintDivide = kotlin_kotlin.$_$.bi;
  var uintRemainder = kotlin_kotlin.$_$.ci;
  var numberToChar = kotlin_kotlin.$_$.kc;
  var indexOf = kotlin_kotlin.$_$.ae;
  var KProperty0 = kotlin_kotlin.$_$.fd;
  var PaddingOption_ABSENT_OPTIONAL_getInstance = kotlin_kotlin.$_$.k;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var charArrayOf = kotlin_kotlin.$_$.ya;
  var trimEnd = kotlin_kotlin.$_$.tf;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var Unit = kotlin_kotlin.$_$.eh;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var Collection = kotlin_kotlin.$_$.x5;
  var KtList = kotlin_kotlin.$_$.c6;
  var toMap_0 = kotlin_kotlin.$_$.p9;
  var isNumber = kotlin_kotlin.$_$.cc;
  var JsonPrimitive_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var toString_2 = kotlin_kotlin.$_$.mf;
  var UInt = kotlin_kotlin.$_$.zg;
  var isCharSequence = kotlin_kotlin.$_$.wb;
  var trim = kotlin_kotlin.$_$.wf;
  var get_lastIndex = kotlin_kotlin.$_$.ee;
  var json_0 = kotlin_kotlin.$_$.gc;
  var lines = kotlin_kotlin.$_$.ie;
  var take = kotlin_kotlin.$_$.f9;
  var emptyList = kotlin_kotlin.$_$.l7;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g1;
  var copyToArray = kotlin_kotlin.$_$.h7;
  var toTypedArray = kotlin_kotlin.$_$.u9;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var intercepted = kotlin_kotlin.$_$.ca;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.j1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(CryptoArgumentException, 'CryptoArgumentException', VOID, IllegalArgumentException);
  initMetadataForClass(CryptoStateException, 'CryptoStateException', VOID, IllegalStateException);
  initMetadataForClass(KeyTypeNotSupportedException, 'KeyTypeNotSupportedException', VOID, CryptoArgumentException);
  initMetadataForClass(KeyTypeMissingException, 'KeyTypeMissingException', KeyTypeMissingException, CryptoArgumentException);
  initMetadataForClass(KeyNotFoundException, 'KeyNotFoundException', KeyNotFoundException, CryptoArgumentException);
  initMetadataForClass(SigningException, 'SigningException', VOID, CryptoStateException);
  initMetadataForClass(VerificationException, 'VerificationException', VOID, CryptoStateException);
  initMetadataForClass(MissingSignatureException, 'MissingSignatureException', VOID, CryptoStateException);
  initMetadataForClass(BaseAuthenticationMethodException, 'BaseAuthenticationMethodException', VOID, CryptoArgumentException);
  initMetadataForClass(MissingAuthenticationMethodException, 'MissingAuthenticationMethodException', MissingAuthenticationMethodException, BaseAuthenticationMethodException);
  initMetadataForClass(IncompleteRoleAuthenticationMethodException, 'IncompleteRoleAuthenticationMethodException', IncompleteRoleAuthenticationMethodException, BaseAuthenticationMethodException);
  initMetadataForClass(IncompleteUserAuthenticationMethodException, 'IncompleteUserAuthenticationMethodException', IncompleteUserAuthenticationMethodException, BaseAuthenticationMethodException);
  initMetadataForClass(LoginException, 'LoginException', VOID, CryptoStateException);
  initMetadataForClass(MissingAuthTokenException, 'MissingAuthTokenException', MissingAuthTokenException, CryptoStateException);
  initMetadataForClass(MissingKeyNameException, 'MissingKeyNameException', MissingKeyNameException, CryptoArgumentException);
  initMetadataForClass(MissingKeyDataException, 'MissingKeyDataException', MissingKeyDataException, CryptoArgumentException);
  initMetadataForObject(EccUtils, 'EccUtils');
  initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
  initMetadataForLambda(Key$deleteKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$signJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$signRawAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$getKeyIdAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$initAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$getPublicKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$getMetaAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$exportPEMAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$getThumbprintAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$exportJWKPrettyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$verifyJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$exportJWKAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$exportJWKObjectAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$verifyRawAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Key$getPublicKeyRepresentationAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($exportJWKPrettyCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(Key, 'Key', VOID, VOID, VOID, [0, 1, 2], VOID, {0: Companion_getInstance_4});
  initMetadataForObject(DirectKeySerializer, 'DirectKeySerializer', VOID, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(DirectSerializedKey, 'DirectSerializedKey', VOID, VOID, VOID, VOID, VOID, {0: DirectKeySerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(KeyGenerationRequest, 'KeyGenerationRequest', KeyGenerationRequest, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForLambda(KeyManager$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(KeyManager$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(KeyManager$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(KeyManager$slambda_5, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(KeyManager$slambda_7, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($resolveSerializedKeyCOROUTINE$1, CoroutineImpl);
  initMetadataForObject(KeyManager, 'KeyManager', VOID, VOID, VOID, [1]);
  initMetadataForCompanion(Companion_2, VOID, [SerializerFactory]);
  initMetadataForClass(KeyMeta, 'KeyMeta', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_7});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(OciKeyMeta, 'OciKeyMeta', VOID, KeyMeta, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TseKeyMeta, 'TseKeyMeta', VOID, KeyMeta, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(JwkKeyMeta, 'JwkKeyMeta', VOID, KeyMeta, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AwsKeyMeta, 'AwsKeyMeta', VOID, KeyMeta, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AzureKeyMeta, 'AzureKeyMeta', VOID, KeyMeta, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForLambda(KeySerialization$deserializeJWTKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(KeySerialization$deserializeKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(KeySerialization$deserializeKeyObjectAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($deserializeKeyCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($deserializeKeyObjectCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($deserializeJWTKeyCOROUTINE$4, CoroutineImpl);
  initMetadataForObject(KeySerialization, 'KeySerialization', VOID, VOID, VOID, [1]);
  initMetadataForCompanion(Companion_8, VOID, [SerializerFactory]);
  initMetadataForClass(KeyType, 'KeyType', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_13});
  initMetadataForClass(KeyCategory, 'KeyCategory', VOID, Enum);
  initMetadataForObject(KeyUtils, 'KeyUtils');
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AWSAuth, 'AWSAuth', AWSAuth, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AWSKeyMetadata, 'AWSKeyMetadata', AWSKeyMetadata_init_$Create$, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForLambda(AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($authAccessCOROUTINE$13, CoroutineImpl);
  initMetadataForCoroutine($getAccessCOROUTINE$14, CoroutineImpl);
  initMetadataForCoroutine($getIMDSv2TokenCOROUTINE$15, CoroutineImpl);
  initMetadataForCoroutine($getRoleNameCOROUTINE$16, CoroutineImpl);
  initMetadataForCoroutine($getTemporaryCredentialsCOROUTINE$17, CoroutineImpl);
  initMetadataForCoroutine($getPublicKeyCOROUTINE$18, CoroutineImpl);
  initMetadataForCoroutine($awsJsonDataBodyCOROUTINE$19, CoroutineImpl);
  initMetadataForCoroutine($generateCOROUTINE$20, CoroutineImpl);
  initMetadataForCompanion(Companion_11, VOID, VOID, [1, 3, 2, 0]);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(AWSKeyRestAPI$deleteKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$signJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$signRawAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$getKeyIdAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$getPublicKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$getMetaAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$exportPEMAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$getThumbprintAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$verifyJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$exportJWKAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$exportJWKObjectAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$verifyRawAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getKeyIdCOROUTINE$5, CoroutineImpl);
  initMetadataForCoroutine($signRawCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($signJwsCOROUTINE$7, CoroutineImpl);
  initMetadataForCoroutine($verifyRawCOROUTINE$8, CoroutineImpl);
  initMetadataForCoroutine($verifyJwsCOROUTINE$9, CoroutineImpl);
  initMetadataForCoroutine($getPublicKeyCOROUTINE$10, CoroutineImpl);
  initMetadataForCoroutine($getMetaCOROUTINE$11, CoroutineImpl);
  initMetadataForCoroutine($deleteKeyCOROUTINE$12, CoroutineImpl);
  initMetadataForClass(AWSKeyRestAPI, 'AWSKeyRestAPI', VOID, Key, VOID, [0, 1, 2], VOID, {0: $serializer_getInstance_7});
  initMetadataForClass(AWSAuthConfiguration, 'AWSAuthConfiguration');
  initMetadataForCompanion(Companion_12);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AzureAuth, 'AzureAuth', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForCompanion(Companion_13);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_15);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ParsedAzurePublicKey, 'ParsedAzurePublicKey');
  initMetadataForClass(AzureTokenResponse, 'AzureTokenResponse', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForClass(AzureTokenResponseParsed, 'AzureTokenResponseParsed', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForLambda(AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($parseAzurePublicKeyCOROUTINE$33, CoroutineImpl);
  initMetadataForCoroutine($fetchAccessTokenCOROUTINE$34, CoroutineImpl);
  initMetadataForCoroutine($azureJsonDataBodyCOROUTINE$35, CoroutineImpl);
  initMetadataForCoroutine($generateCOROUTINE$36, CoroutineImpl);
  initMetadataForClass(KeyCreateRequest, 'KeyCreateRequest', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForObject(AzureKeyFunctions, 'AzureKeyFunctions', VOID, VOID, VOID, [1, 0]);
  initMetadataForCompanion(Companion_16, VOID, VOID, [2]);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(AzureKey$deleteKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$signJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$signRawAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$getKeyIdAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$signRawAzureAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$getPublicKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$getMetaAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$exportPEMAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$getThumbprintAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$verifyJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$exportJWKAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$exportJWKObjectAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$verifyRawAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AzureKey$getPublicKeyRepresentationAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($fetchAndUpdatePublicKeyCOROUTINE$21, CoroutineImpl);
  initMetadataForCoroutine($updateAccessTokenCOROUTINE$22, CoroutineImpl);
  initMetadataForCoroutine($ensureAccessTokenValidCOROUTINE$23, CoroutineImpl);
  initMetadataForCoroutine($initCOROUTINE$24, CoroutineImpl);
  initMetadataForCoroutine($signRawAzureCOROUTINE$25, CoroutineImpl);
  initMetadataForCoroutine($signJwsCOROUTINE$26, CoroutineImpl);
  initMetadataForCoroutine($verifyRawCOROUTINE$27, CoroutineImpl);
  initMetadataForCoroutine($verifyJwsCOROUTINE$28, CoroutineImpl);
  initMetadataForCoroutine($getPublicKeyRepresentationCOROUTINE$29, CoroutineImpl);
  initMetadataForCoroutine($getMetaCOROUTINE$30, CoroutineImpl);
  initMetadataForCoroutine($deleteKeyCOROUTINE$31, CoroutineImpl);
  initMetadataForCoroutine($getPublicKeyFromAzureKmsCOROUTINE$32, CoroutineImpl);
  initMetadataForClass(AzureKey, 'AzureKey', VOID, Key, VOID, [0, 2, 1], VOID, {0: $serializer_getInstance_12});
  initMetadataForCompanion(Companion_17);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AzureKeyMetadata, 'AzureKeyMetadata', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
  initMetadataForObject(JWKKeyJsonFieldSerializer, 'JWKKeyJsonFieldSerializer', VOID, VOID, [KSerializer]);
  initMetadataForLambda(JWKKeyCreator$importJWKAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKeyCreator$importPEMAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKeyCreator$generateAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKeyCreator$importRawPublicKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  function generate$default(type, metadata, $completion, $super) {
    metadata = metadata === VOID ? null : metadata;
    return $super === VOID ? this.g7z(type, metadata, $completion) : $super.g7z.call(this, type, metadata, $completion);
  }
  function importRawPublicKey$default(type, rawPublicKey, metadata, $completion, $super) {
    metadata = metadata === VOID ? null : metadata;
    return $super === VOID ? this.t7z(type, rawPublicKey, metadata, $completion) : $super.t7z.call(this, type, rawPublicKey, metadata, $completion);
  }
  function importJWKAsync(jwk) {
    var tmp = JWKKeyCreator$importJWKAsync$slambda_0(this, jwk, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function importPEMAsync(pem) {
    var tmp = JWKKeyCreator$importPEMAsync$slambda_0(this, pem, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function generateAsync(type, metadata) {
    var tmp = JWKKeyCreator$generateAsync$slambda_0(this, type, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function generateAsync$default(type, metadata, $super) {
    metadata = metadata === VOID ? null : metadata;
    return $super === VOID ? this.w7z(type, metadata) : generateAsync(type, metadata);
  }
  function importRawPublicKeyAsync(type, rawPublicKey, metadata) {
    var tmp = JWKKeyCreator$importRawPublicKeyAsync$slambda_0(this, type, rawPublicKey, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function importRawPublicKeyAsync$default(type, rawPublicKey, metadata, $super) {
    metadata = metadata === VOID ? null : metadata;
    return $super === VOID ? this.x7z(type, rawPublicKey, metadata) : importRawPublicKeyAsync(type, rawPublicKey, metadata);
  }
  initMetadataForInterface(JWKKeyCreator, 'JWKKeyCreator', VOID, VOID, VOID, [2, 3, 1]);
  initMetadataForCompanion(Companion_18);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(OCIKeyMetadata, 'OCIKeyMetadata', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
  initMetadataForLambda(OCIKeyRestApi$Companion$generateKey$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$Companion$deleteKey$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$Companion$deleteKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$Companion$generateKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getKeyVersionCOROUTINE$44, CoroutineImpl);
  initMetadataForCoroutine($ociJsonDataBodyCOROUTINE$45, CoroutineImpl);
  initMetadataForCoroutine($getKeysCOROUTINE$46, CoroutineImpl);
  initMetadataForCoroutine($getOCIPublicKeyCOROUTINE$47, CoroutineImpl);
  initMetadataForCompanion(Companion_19, VOID, VOID, [2, 4, 0, 5]);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(OCIKeyRestApi$signRaw$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$deleteKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$signJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$signRawAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$getKeyIdAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$getPublicKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$getMetaAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$exportPEMAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$getThumbprintAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$verifyJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$exportJWKAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$exportJWKObjectAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$verifyRawAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($retrievePublicKeyCOROUTINE$37, CoroutineImpl);
  initMetadataForCoroutine($getKeyIdCOROUTINE$38, CoroutineImpl);
  initMetadataForCoroutine($signJwsCOROUTINE$39, CoroutineImpl);
  initMetadataForCoroutine($verifyRawCOROUTINE$40, CoroutineImpl);
  initMetadataForCoroutine($verifyJwsCOROUTINE$41, CoroutineImpl);
  initMetadataForCoroutine($getPublicKeyCOROUTINE$42, CoroutineImpl);
  initMetadataForCoroutine($getMetaCOROUTINE$43, CoroutineImpl);
  initMetadataForClass(OCIKeyRestApi, 'OCIKeyRestApi', VOID, Key, VOID, [0, 1, 2], VOID, {0: $serializer_getInstance_15});
  initMetadataForCoroutine($retryCOROUTINE$48, CoroutineImpl);
  initMetadataForCompanion(Companion_20);
  initMetadataForObject($serializer_16, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(TSEAuth$getCachedLogin$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEAuth$getLoginTokenAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEAuth$getCachedLoginAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getClientTokenCOROUTINE$49, CoroutineImpl);
  initMetadataForCoroutine($loginAppRoleCOROUTINE$50, CoroutineImpl);
  initMetadataForCoroutine($loginUserPassCOROUTINE$51, CoroutineImpl);
  initMetadataForCoroutine($getLoginTokenCOROUTINE$52, CoroutineImpl);
  initMetadataForClass(TSEAuth, 'TSEAuth', TSEAuth, VOID, VOID, [0, 1], VOID, {0: $serializer_getInstance_16});
  initMetadataForLambda(TSEKey$Companion$tseJsonDataBodyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$Companion$generateAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($tseJsonDataBodyCOROUTINE$67, CoroutineImpl);
  initMetadataForCoroutine($generateCOROUTINE$68, CoroutineImpl);
  function generateAsync_0(type, metadata) {
    var tmp = TSEKeyCreator$generateAsync$slambda_0(this, type, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  initMetadataForInterface(TSEKeyCreator, 'TSEKeyCreator', VOID, VOID, VOID, [2]);
  initMetadataForCompanion(Companion_21, VOID, [TSEKeyCreator], [0, 2]);
  initMetadataForObject($serializer_17, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(TSEKey$deleteKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$signJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$signRawAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$getKeyIdAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$initAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$getPublicKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$getMetaAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$exportPEMAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$exportJWKAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$exportJWKObjectAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$verifyRawAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$getEncodedPublicKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$getThumbprintAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$verifyJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$getPublicKeyRepresentationAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(TSEKey$deleteAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($httpRequestCOROUTINE$53, CoroutineImpl);
  initMetadataForCoroutine($initCOROUTINE$54, CoroutineImpl);
  initMetadataForCoroutine($getBackingPublicKeyCOROUTINE$55, CoroutineImpl);
  initMetadataForCoroutine($retrievePublicKeyCOROUTINE$56, CoroutineImpl);
  initMetadataForCoroutine($retrieveKeyTypeCOROUTINE$57, CoroutineImpl);
  initMetadataForCoroutine($getKeyIdCOROUTINE$58, CoroutineImpl);
  initMetadataForCoroutine($signRawCOROUTINE$59, CoroutineImpl);
  initMetadataForCoroutine($signJwsCOROUTINE$60, CoroutineImpl);
  initMetadataForCoroutine($verifyRawCOROUTINE$61, CoroutineImpl);
  initMetadataForCoroutine($verifyJwsCOROUTINE$62, CoroutineImpl);
  initMetadataForCoroutine($getEncodedPublicKeyCOROUTINE$63, CoroutineImpl);
  initMetadataForCoroutine($getPublicKeyCOROUTINE$64, CoroutineImpl);
  initMetadataForCoroutine($getMetaCOROUTINE$65, CoroutineImpl);
  initMetadataForCoroutine($deleteCOROUTINE$66, CoroutineImpl);
  initMetadataForClass(TSEKey, 'TSEKey', VOID, Key, VOID, [3, 0, 1, 2], VOID, {0: $serializer_getInstance_17});
  initMetadataForLambda(TSEKeyCreator$generateAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCompanion(Companion_22);
  initMetadataForObject($serializer_18, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TSEKeyMetadata, 'TSEKeyMetadata', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_18});
  initMetadataForObject(Base64Utils, 'Base64Utils');
  initMetadataForLambda(JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($convertToRequiredMembersJsonStringCOROUTINE$69, CoroutineImpl);
  initMetadataForObject(JsonCanonicalizationUtils, 'JsonCanonicalizationUtils', VOID, VOID, VOID, [1]);
  initMetadataForObject(JsonUtils, 'JsonUtils');
  initMetadataForCompanion(Companion_23);
  initMetadataForObject($serializer_19, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_24);
  initMetadataForObject($serializer_20, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(JwsParts, 'JwsParts', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_19});
  initMetadataForClass(JwsPartsSdJwt, 'JwsPartsSdJwt', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_20});
  initMetadataForClass(JwsStringParts, 'JwsStringParts');
  initMetadataForObject(JwsUtils, 'JwsUtils');
  initMetadataForObject(MultiBaseUtils, 'MultiBaseUtils');
  initMetadataForCompanion(Companion_25);
  initMetadataForClass(UVarInt, 'UVarInt');
  initMetadataForObject(MultiCodecUtils, 'MultiCodecUtils');
  initMetadataForLambda(JsJWKKeyCreator$importJWKAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JsJWKKeyCreator$importPEMAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JsJWKKeyCreator$generateAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JsJWKKeyCreator$importRawPublicKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($generateCOROUTINE$70, CoroutineImpl);
  initMetadataForCoroutine($importRawPublicKeyCOROUTINE$71, CoroutineImpl);
  initMetadataForCoroutine($importJWKCOROUTINE$72, CoroutineImpl);
  initMetadataForCoroutine($importPEMCOROUTINE$73, CoroutineImpl);
  initMetadataForObject(JsJWKKeyCreator, 'JsJWKKeyCreator', VOID, VOID, [JWKKeyCreator], [2, 3, 1]);
  initMetadataForLambda(resolveSerializedKeyBlocking$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(JWKKey$Companion$importJWKAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$Companion$importPEMAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$Companion$generateAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$Companion$importRawPublicKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCompanion(Companion_26, VOID, [JWKKeyCreator], [2, 3, 1]);
  initMetadataForObject($serializer_21, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForLambda(JWKKey$signJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$getKeyIdAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$initAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$exportPEMAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$getThumbprintAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$exportJWKPrettyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$verifyJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$exportJWKAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$exportJWKObjectAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$verifyRawAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JWKKey$getPublicKeyRepresentationAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($initCOROUTINE$74, CoroutineImpl);
  initMetadataForCoroutine($exportJWKObjectCOROUTINE$75, CoroutineImpl);
  initMetadataForCoroutine($exportPEMCOROUTINE$76, CoroutineImpl);
  initMetadataForCoroutine($signRawCOROUTINE$77, CoroutineImpl);
  initMetadataForCoroutine($verifyRawCOROUTINE$78, CoroutineImpl);
  initMetadataForCoroutine($verifyJwsCOROUTINE$79, CoroutineImpl);
  initMetadataForCoroutine($getPublicKeyCOROUTINE$80, CoroutineImpl);
  initMetadataForCoroutine($getPublicKeyRepresentationCOROUTINE$81, CoroutineImpl);
  initMetadataForCoroutine($getMetaCOROUTINE$82, CoroutineImpl);
  initMetadataForCoroutine($getKeyIdCOROUTINE$83, CoroutineImpl);
  initMetadataForCoroutine($getThumbprintCOROUTINE$84, CoroutineImpl);
  initMetadataForClass(JWKKey, 'JWKKey', VOID, Key, VOID, [0, 1, 2], VOID, {0: $serializer_getInstance_21});
  initMetadataForObject(ArrayUtils, 'ArrayUtils');
  initMetadataForObject(PromiseUtils, 'PromiseUtils', VOID, VOID, VOID, [0, 1]);
  //endregion
  function CryptoArgumentException(message, cause) {
    cause = cause === VOID ? null : cause;
    IllegalArgumentException_init_$Init$(message, this);
    captureStack(this, CryptoArgumentException);
  }
  function CryptoStateException(message, cause) {
    cause = cause === VOID ? null : cause;
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, CryptoStateException);
  }
  function KeyTypeNotSupportedException(type, cause) {
    cause = cause === VOID ? null : cause;
    CryptoArgumentException.call(this, "The key type '" + type + "' is not supported. Please provide a valid key type.");
    captureStack(this, KeyTypeNotSupportedException);
  }
  function KeyTypeMissingException(cause) {
    cause = cause === VOID ? null : cause;
    CryptoArgumentException.call(this, 'The key type is missing from the serialized key. Please include the key type.');
    captureStack(this, KeyTypeMissingException);
  }
  function KeyNotFoundException(id, message, cause) {
    id = id === VOID ? '' : id;
    message = message === VOID ? "The key with ID '" + id + "' could not be found. Please verify the ID and try again." : message;
    cause = cause === VOID ? null : cause;
    CryptoArgumentException.call(this, message);
    captureStack(this, KeyNotFoundException);
  }
  function SigningException(message, cause) {
    cause = cause === VOID ? null : cause;
    CryptoStateException.call(this, 'An error occurred during the signing process: ' + message);
    captureStack(this, SigningException);
  }
  function VerificationException(message, cause) {
    cause = cause === VOID ? null : cause;
    CryptoStateException.call(this, 'An error occurred during verification: ' + message);
    captureStack(this, VerificationException);
  }
  function MissingSignatureException(message, cause) {
    cause = cause === VOID ? null : cause;
    CryptoStateException.call(this, 'The signature is missing or invalid: ' + message);
    captureStack(this, MissingSignatureException);
  }
  function TSEError$LoginException$_init_$lambda_bogepp(it) {
    return it;
  }
  function BaseAuthenticationMethodException(reason) {
    CryptoArgumentException.call(this, 'The provided authentication method is invalid: ' + reason);
    captureStack(this, BaseAuthenticationMethodException);
  }
  function MissingAuthenticationMethodException() {
    BaseAuthenticationMethodException.call(this, 'Please provide one of the following authentication methods: accessKey, roleId and secretId, or username and password.');
    captureStack(this, MissingAuthenticationMethodException);
  }
  function IncompleteRoleAuthenticationMethodException() {
    BaseAuthenticationMethodException.call(this, 'Both roleId and secretId are required for role-based authentication. Please provide both values.');
    captureStack(this, IncompleteRoleAuthenticationMethodException);
  }
  function IncompleteUserAuthenticationMethodException() {
    BaseAuthenticationMethodException.call(this, 'Both username and password are required for user-based authentication. Please provide both credentials.');
    captureStack(this, IncompleteUserAuthenticationMethodException);
  }
  function LoginException(errors) {
    CryptoStateException.call(this, 'Errors occurred during TSE login: ' + joinToString(errors, VOID, VOID, VOID, VOID, VOID, TSEError$LoginException$_init_$lambda_bogepp) + '. Please try again.');
    captureStack(this, LoginException);
  }
  function MissingAuthTokenException() {
    CryptoStateException.call(this, 'Authentication token was not received after login. Please ensure the login process completed successfully.');
    captureStack(this, MissingAuthTokenException);
  }
  function MissingKeyNameException() {
    CryptoArgumentException.call(this, 'The key name is missing from the request. Please provide a valid key name.');
    captureStack(this, MissingKeyNameException);
  }
  function MissingKeyDataException() {
    CryptoArgumentException.call(this, 'The key data is missing from the request. Please include the necessary key data.');
    captureStack(this, MissingKeyDataException);
  }
  function encodeAsASN1Integer($this, value) {
    var mutableValue = toMutableList(value);
    // Inline function 'kotlin.experimental.and' call
    var this_0 = mutableValue.u(0);
    if (!(toByte(this_0 & -128) === 0)) {
      mutableValue.g2(0, 0);
    }
    var length = mutableValue.s();
    // Inline function 'kotlin.collections.mutableListOf' call
    var asn1Integer = ArrayList_init_$Create$();
    asn1Integer.n(2);
    asn1Integer.n(toByte(length));
    asn1Integer.t(mutableValue);
    return toByteArray(asn1Integer);
  }
  function convertDERtoIEEEP1363$trimLeadingZeroes(_this__u8e3s4) {
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var item = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (yielding) {
        list.n(item);
      } else {
        if (!(item === 0)) {
          list.n(item);
          yielding = true;
        }
      }
    }
    return toByteArray(list);
  }
  function convertDERtoIEEEP1363$parseInteger($derSignature, index) {
    if (!($derSignature[index._v] === 2))
      throw IllegalArgumentException_init_$Create$('Expected integer');
    index._v = index._v + 1 | 0;
    var _unary__edvuaz = index._v;
    index._v = _unary__edvuaz + 1 | 0;
    var length = $derSignature[_unary__edvuaz];
    var integer = copyOfRange($derSignature, index._v, index._v + length | 0);
    index._v = index._v + length | 0;
    return integer;
  }
  function EccUtils() {
  }
  protoOf(EccUtils).a6f = function (derSignature) {
    var index = {_v: 2};
    var r = convertDERtoIEEEP1363$trimLeadingZeroes(convertDERtoIEEEP1363$parseInteger(derSignature, index));
    var s = convertDERtoIEEEP1363$trimLeadingZeroes(convertDERtoIEEEP1363$parseInteger(derSignature, index));
    var fixedLengthR = new Int8Array(32);
    var fixedLengthS = new Int8Array(32);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = 32 - r.length | 0;
    var endIndex = r.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = r;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, fixedLengthR, destinationOffset, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset_0 = 32 - s.length | 0;
    var endIndex_0 = s.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = s;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, fixedLengthS, destinationOffset_0, 0, endIndex_0);
    // Inline function 'kotlin.collections.plus' call
    return primitiveArrayConcat([fixedLengthR, fixedLengthS]);
  };
  protoOf(EccUtils).b6f = function (p1363Signature) {
    var keySize = p1363Signature.length / 2 | 0;
    if (!((p1363Signature.length % 2 | 0) === 0) || keySize === 0) {
      throw IllegalArgumentException_init_$Create$('Invalid P1363 signature format');
    }
    var r = sliceArray(p1363Signature, until(0, keySize));
    var s = sliceArray(p1363Signature, until(keySize, p1363Signature.length));
    var encodedR = encodeAsASN1Integer(this, r);
    var encodedS = encodeAsASN1Integer(this, s);
    var sequenceLength = encodedR.length + encodedS.length | 0;
    // Inline function 'kotlin.collections.mutableListOf' call
    var der = ArrayList_init_$Create$();
    der.n(48);
    der.n(toByte(sequenceLength));
    der.t(toList(encodedR));
    der.t(toList(encodedS));
    return toByteArray(der);
  };
  var EccUtils_instance;
  function EccUtils_getInstance() {
    return EccUtils_instance;
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.c6f_1.z();
  }
  function Key$Companion$_anonymous__3nbwi8() {
    var tmp = getKClass(Key);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [new JsonClassDiscriminator('type')];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.c6f_1 = lazy(tmp_0, Key$Companion$_anonymous__3nbwi8);
  }
  protoOf(Companion).s4p = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).w29 = function (typeParamsSerializers) {
    return this.s4p();
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion();
    return Companion_instance_4;
  }
  function Key_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function Key$deleteKeyAsync$slambda(this$0, resultContinuation) {
    this.l6f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$deleteKeyAsync$slambda).m6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$deleteKeyAsync$slambda).yb = function ($completion) {
    return this.m6f($completion);
  };
  protoOf(Key$deleteKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.l6f_1.n6f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$deleteKeyAsync$slambda).ha = function (completion) {
    return new Key$deleteKeyAsync$slambda(this.l6f_1, completion);
  };
  function Key$deleteKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$deleteKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.w6f_1 = this$0;
    this.x6f_1 = $plaintext;
    this.y6f_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$signJwsAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$signJwsAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(Key$signJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.w6f_1.a6g(this.x6f_1, this.y6f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$signJwsAsync$slambda).ha = function (completion) {
    return new Key$signJwsAsync$slambda(this.w6f_1, this.x6f_1, this.y6f_1, completion);
  };
  function Key$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new Key$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$signRawAsync$slambda(this$0, $plaintext, resultContinuation) {
    this.j6g_1 = this$0;
    this.k6g_1 = $plaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$signRawAsync$slambda).l6g = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$signRawAsync$slambda).yb = function ($completion) {
    return this.l6g($completion);
  };
  protoOf(Key$signRawAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.j6g_1.m6g(this.k6g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$signRawAsync$slambda).ha = function (completion) {
    return new Key$signRawAsync$slambda(this.j6g_1, this.k6g_1, completion);
  };
  function Key$signRawAsync$slambda_0(this$0, $plaintext, resultContinuation) {
    var i = new Key$signRawAsync$slambda(this$0, $plaintext, resultContinuation);
    var l = function ($completion) {
      return i.l6g($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.v6g_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$getKeyIdAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$getKeyIdAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(Key$getKeyIdAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.v6g_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$getKeyIdAsync$slambda).ha = function (completion) {
    return new Key$getKeyIdAsync$slambda(this.v6g_1, completion);
  };
  function Key$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$initAsync$slambda(this$0, resultContinuation) {
    this.f6h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$initAsync$slambda).s1u = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$initAsync$slambda).yb = function ($completion) {
    return this.s1u($completion);
  };
  protoOf(Key$initAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.f6h_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$initAsync$slambda).ha = function (completion) {
    return new Key$initAsync$slambda(this.f6h_1, completion);
  };
  function Key$initAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$initAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$getPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.p6h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$getPublicKeyAsync$slambda).q6h = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$getPublicKeyAsync$slambda).yb = function ($completion) {
    return this.q6h($completion);
  };
  protoOf(Key$getPublicKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.p6h_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$getPublicKeyAsync$slambda).ha = function (completion) {
    return new Key$getPublicKeyAsync$slambda(this.p6h_1, completion);
  };
  function Key$getPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$getPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.q6h($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$getMetaAsync$slambda(this$0, resultContinuation) {
    this.a6i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$getMetaAsync$slambda).b6i = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$getMetaAsync$slambda).yb = function ($completion) {
    return this.b6i($completion);
  };
  protoOf(Key$getMetaAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.a6i_1.c6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$getMetaAsync$slambda).ha = function (completion) {
    return new Key$getMetaAsync$slambda(this.a6i_1, completion);
  };
  function Key$getMetaAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$getMetaAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.b6i($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.l6i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$exportPEMAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$exportPEMAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(Key$exportPEMAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.l6i_1.m6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$exportPEMAsync$slambda).ha = function (completion) {
    return new Key$exportPEMAsync$slambda(this.l6i_1, completion);
  };
  function Key$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.v6i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$getThumbprintAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$getThumbprintAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(Key$getThumbprintAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.v6i_1.w6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$getThumbprintAsync$slambda).ha = function (completion) {
    return new Key$getThumbprintAsync$slambda(this.v6i_1, completion);
  };
  function Key$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$exportJWKPrettyAsync$slambda(this$0, resultContinuation) {
    this.f6j_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$exportJWKPrettyAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$exportJWKPrettyAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(Key$exportJWKPrettyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.f6j_1.g6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$exportJWKPrettyAsync$slambda).ha = function (completion) {
    return new Key$exportJWKPrettyAsync$slambda(this.f6j_1, completion);
  };
  function Key$exportJWKPrettyAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$exportJWKPrettyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.p6j_1 = this$0;
    this.q6j_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$verifyJwsAsync$slambda).r6j = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Key$verifyJwsAsync$slambda).yb = function ($completion) {
    return this.r6j($completion);
  };
  protoOf(Key$verifyJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.p6j_1.s6j(this.q6j_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$verifyJwsAsync$slambda).ha = function (completion) {
    return new Key$verifyJwsAsync$slambda(this.p6j_1, this.q6j_1, completion);
  };
  function Key$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new Key$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.r6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.b6k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$exportJWKAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$exportJWKAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(Key$exportJWKAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.b6k_1.c6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$exportJWKAsync$slambda).ha = function (completion) {
    return new Key$exportJWKAsync$slambda(this.b6k_1, completion);
  };
  function Key$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.l6k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$exportJWKObjectAsync$slambda).m6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$exportJWKObjectAsync$slambda).yb = function ($completion) {
    return this.m6k($completion);
  };
  protoOf(Key$exportJWKObjectAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.l6k_1.n6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$exportJWKObjectAsync$slambda).ha = function (completion) {
    return new Key$exportJWKObjectAsync$slambda(this.l6k_1, completion);
  };
  function Key$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.w6k_1 = this$0;
    this.x6k_1 = $signed;
    this.y6k_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$verifyRawAsync$slambda).z6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Key$verifyRawAsync$slambda).yb = function ($completion) {
    return this.z6k($completion);
  };
  protoOf(Key$verifyRawAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.w6k_1.a6l(this.x6k_1, this.y6k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$verifyRawAsync$slambda).ha = function (completion) {
    return new Key$verifyRawAsync$slambda(this.w6k_1, this.x6k_1, this.y6k_1, completion);
  };
  function Key$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new Key$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.z6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.j6l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$getPublicKeyRepresentationAsync$slambda).k6l = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key$getPublicKeyRepresentationAsync$slambda).yb = function ($completion) {
    return this.k6l($completion);
  };
  protoOf(Key$getPublicKeyRepresentationAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.j6l_1.l6l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(Key$getPublicKeyRepresentationAsync$slambda).ha = function (completion) {
    return new Key$getPublicKeyRepresentationAsync$slambda(this.j6l_1, completion);
  };
  function Key$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.k6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $exportJWKPrettyCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u6l_1 = _this__u8e3s4;
  }
  protoOf($exportJWKPrettyCOROUTINE$0).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            var tmp_0 = this;
            tmp_0.v6l_1 = JsonUtils_getInstance().z6l();
            this.w6l_1 = Default_getInstance();
            this.l9_1 = 1;
            suspendResult = this.u6l_1.c6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp1 = this.w6l_1.q4n(ARGUMENT);
            var this_0 = this.v6l_1;
            var this_1 = this_0.w21();
            var this_2 = serializer(this_1, createKType(getKClass(JsonElement), arrayOf([]), false));
            return this_0.x1y(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), tmp1);
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($exportJWKPrettyCOROUTINE$0)['<set-state>'] = protoOf($exportJWKPrettyCOROUTINE$0).s9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-state>'] = protoOf($exportJWKPrettyCOROUTINE$0).t9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<set-exceptionState>'] = protoOf($exportJWKPrettyCOROUTINE$0).u9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-exceptionState>'] = protoOf($exportJWKPrettyCOROUTINE$0).v9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<set-result>'] = protoOf($exportJWKPrettyCOROUTINE$0).w9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-result>'] = protoOf($exportJWKPrettyCOROUTINE$0).x9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<set-exception>'] = protoOf($exportJWKPrettyCOROUTINE$0).y9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-exception>'] = protoOf($exportJWKPrettyCOROUTINE$0).z9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<set-finallyPath>'] = protoOf($exportJWKPrettyCOROUTINE$0).aa;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-finallyPath>'] = protoOf($exportJWKPrettyCOROUTINE$0).ba;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-context>'] = protoOf($exportJWKPrettyCOROUTINE$0).r9;
  function Key() {
    Companion_getInstance_4();
  }
  protoOf(Key).g6j = function ($completion) {
    var tmp = new $exportJWKPrettyCOROUTINE$0(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Key).signJws$default = function (plaintext, headers, $completion, $super) {
    headers = headers === VOID ? emptyMap() : headers;
    return $super === VOID ? this.a6g(plaintext, headers, $completion) : $super.a6g.call(this, plaintext, headers, $completion);
  };
  protoOf(Key).verifyRaw$default = function (signed, detachedPlaintext, $completion, $super) {
    detachedPlaintext = detachedPlaintext === VOID ? null : detachedPlaintext;
    return $super === VOID ? this.a6l(signed, detachedPlaintext, $completion) : $super.a6l.call(this, signed, detachedPlaintext, $completion);
  };
  protoOf(Key).toString = function () {
    return '[walt.id crypto ' + (this.hasPrivateKey ? 'private' : 'public') + ' ' + this.keyType.toString() + ' key]';
  };
  protoOf(Key).g6h = function ($completion) {
    return Unit_instance;
  };
  protoOf(Key).c6m = function () {
    var tmp = Key$deleteKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).d6m = function (plaintext, headers) {
    var tmp = Key$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).signJwsAsync$default = function (plaintext, headers, $super) {
    headers = headers === VOID ? emptyMap() : headers;
    return $super === VOID ? this.d6m(plaintext, headers) : $super.d6m.call(this, plaintext, headers);
  };
  protoOf(Key).e6m = function (plaintext) {
    var tmp = Key$signRawAsync$slambda_0(this, plaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).f6m = function () {
    var tmp = Key$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).g6m = function () {
    var tmp = Key$initAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).h6m = function () {
    var tmp = Key$getPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).i6m = function () {
    var tmp = Key$getMetaAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).j6m = function () {
    var tmp = Key$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).k6m = function () {
    var tmp = Key$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).l6m = function () {
    var tmp = Key$exportJWKPrettyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).m6m = function (signedJws) {
    var tmp = Key$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).n6m = function () {
    var tmp = Key$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).o6m = function () {
    var tmp = Key$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).p6m = function (signed, detachedPlaintext) {
    var tmp = Key$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).verifyRawAsync$default = function (signed, detachedPlaintext, $super) {
    detachedPlaintext = detachedPlaintext === VOID ? null : detachedPlaintext;
    return $super === VOID ? this.p6m(signed, detachedPlaintext) : $super.p6m.call(this, signed, detachedPlaintext);
  };
  protoOf(Key).q6m = function () {
    var tmp = Key$getPublicKeyRepresentationAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function DirectKeySerializer() {
    DirectKeySerializer_instance = this;
    this.r6m_1 = Companion_instance.s4p().u1x();
  }
  protoOf(DirectKeySerializer).u1x = function () {
    return this.r6m_1;
  };
  protoOf(DirectKeySerializer).w1x = function (decoder) {
    return new DirectSerializedKey(resolveSerializedKeyBlocking(decoder.g21(Companion_instance.s4p())));
  };
  protoOf(DirectKeySerializer).s6m = function (encoder, value) {
    return encoder.z22(Companion_instance_0.s4p(), KeySerialization_getInstance().serializeKeyToJson(value.t6m_1));
  };
  protoOf(DirectKeySerializer).v1x = function (encoder, value) {
    return this.s6m(encoder, value instanceof DirectSerializedKey ? value : THROW_CCE());
  };
  var DirectKeySerializer_instance;
  function DirectKeySerializer_getInstance() {
    if (DirectKeySerializer_instance == null)
      new DirectKeySerializer();
    return DirectKeySerializer_instance;
  }
  function Companion_0() {
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function DirectSerializedKey(key) {
    this.t6m_1 = key;
  }
  protoOf(DirectSerializedKey).toString = function () {
    return 'DirectSerializedKey(key=' + this.t6m_1.toString() + ')';
  };
  protoOf(DirectSerializedKey).hashCode = function () {
    return hashCode(this.t6m_1);
  };
  protoOf(DirectSerializedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DirectSerializedKey))
      return false;
    var tmp0_other_with_cast = other instanceof DirectSerializedKey ? other : THROW_CCE();
    if (!equals(this.t6m_1, tmp0_other_with_cast.t6m_1))
      return false;
    return true;
  };
  function KeyGenerationRequest$Companion$$childSerializers$_anonymous__bmr982() {
    return Companion_getInstance_13().s4p();
  }
  function Companion_1() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.v6m_1 = [null, lazy(tmp_0, KeyGenerationRequest$Companion$$childSerializers$_anonymous__bmr982), null];
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_1();
    return Companion_instance_6;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.KeyGenerationRequest', this, 3);
    tmp0_serialDesc.v28('backend', true);
    tmp0_serialDesc.v28('keyType', true);
    tmp0_serialDesc.v28('config', true);
    this.w6m_1 = tmp0_serialDesc;
  }
  protoOf($serializer).x6m = function (encoder, value) {
    var tmp0_desc = this.w6m_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().v6m_1;
    if (tmp1_output.e23(tmp0_desc, 0) ? true : !(value.y6m_1 === 'jwk')) {
      tmp1_output.w22(tmp0_desc, 0, value.y6m_1);
    }
    if (tmp1_output.e23(tmp0_desc, 1) ? true : !value.z6m_1.equals(KeyType_Ed25519_getInstance())) {
      tmp1_output.y22(tmp0_desc, 1, tmp2_cached[1].z(), value.z6m_1);
    }
    if (tmp1_output.e23(tmp0_desc, 2) ? true : !(value.a6n_1 == null)) {
      tmp1_output.a23(tmp0_desc, 2, JsonObjectSerializer_getInstance(), value.a6n_1);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer).v1x = function (encoder, value) {
    return this.x6m(encoder, value instanceof KeyGenerationRequest ? value : THROW_CCE());
  };
  protoOf($serializer).w1x = function (decoder) {
    var tmp0_desc = this.w6m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h21(tmp0_desc);
    var tmp8_cached = Companion_getInstance_6().v6m_1;
    if (tmp7_input.x21()) {
      tmp4_local0 = tmp7_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t21(tmp0_desc, 1, tmp8_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v21(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t21(tmp0_desc, 1, tmp8_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.v21(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i21(tmp0_desc);
    return KeyGenerationRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer).u1x = function () {
    return this.w6m_1;
  };
  protoOf($serializer).l29 = function () {
    var tmp0_cached = Companion_getInstance_6().v6m_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].z(), get_nullable(JsonObjectSerializer_getInstance())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function KeyGenerationRequest_init_$Init$(seen0, backend, keyType, config, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().w6m_1);
    }
    if (0 === (seen0 & 1))
      $this.y6m_1 = 'jwk';
    else
      $this.y6m_1 = backend;
    if (0 === (seen0 & 2))
      $this.z6m_1 = KeyType_Ed25519_getInstance();
    else
      $this.z6m_1 = keyType;
    if (0 === (seen0 & 4))
      $this.a6n_1 = null;
    else
      $this.a6n_1 = config;
    return $this;
  }
  function KeyGenerationRequest_init_$Create$(seen0, backend, keyType, config, serializationConstructorMarker) {
    return KeyGenerationRequest_init_$Init$(seen0, backend, keyType, config, serializationConstructorMarker, objectCreate(protoOf(KeyGenerationRequest)));
  }
  function KeyGenerationRequest(backend, keyType, config) {
    Companion_getInstance_6();
    backend = backend === VOID ? 'jwk' : backend;
    keyType = keyType === VOID ? KeyType_Ed25519_getInstance() : keyType;
    config = config === VOID ? null : config;
    this.y6m_1 = backend;
    this.z6m_1 = keyType;
    this.a6n_1 = config;
  }
  protoOf(KeyGenerationRequest).toString = function () {
    return 'KeyGenerationRequest(backend=' + this.y6m_1 + ', keyType=' + this.z6m_1.toString() + ', config=' + toString(this.a6n_1) + ')';
  };
  protoOf(KeyGenerationRequest).hashCode = function () {
    var result = getStringHashCode(this.y6m_1);
    result = imul(result, 31) + this.z6m_1.hashCode() | 0;
    result = imul(result, 31) + (this.a6n_1 == null ? 0 : this.a6n_1.hashCode()) | 0;
    return result;
  };
  protoOf(KeyGenerationRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeyGenerationRequest))
      return false;
    var tmp0_other_with_cast = other instanceof KeyGenerationRequest ? other : THROW_CCE();
    if (!(this.y6m_1 === tmp0_other_with_cast.y6m_1))
      return false;
    if (!this.z6m_1.equals(tmp0_other_with_cast.z6m_1))
      return false;
    if (!equals(this.a6n_1, tmp0_other_with_cast.a6n_1))
      return false;
    return true;
  };
  function KeyManager$log$lambda() {
    return Unit_instance;
  }
  function KeyManager$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyManager$slambda).k6n = function (generateRequest, $completion) {
    var tmp = this.l6n(generateRequest, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KeyManager$slambda).ta = function (p1, $completion) {
    return this.k6n(p1 instanceof KeyGenerationRequest ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KeyManager$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = Companion_instance_31.generate$default(this.j6n_1.z6m_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(KeyManager$slambda).l6n = function (generateRequest, completion) {
    var i = new KeyManager$slambda(completion);
    i.j6n_1 = generateRequest;
    return i;
  };
  function KeyManager$slambda_0(resultContinuation) {
    var i = new KeyManager$slambda(resultContinuation);
    var l = function (generateRequest, $completion) {
      return i.k6n(generateRequest, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KeyManager$lambda($typeId) {
    return function () {
      return 'Registering key type "' + $typeId + '" to ' + getKClass(JWKKey).fc() + '...';
    };
  }
  function KeyManager$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyManager$slambda_1).v6n = function (generateRequest, $completion) {
    var tmp = this.l6n(generateRequest, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KeyManager$slambda_1).ta = function (p1, $completion) {
    return this.v6n(p1 instanceof KeyGenerationRequest ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KeyManager$slambda_1).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            var tmp_0 = Companion_getInstance_26();
            var tmp0 = Default_getInstance();
            var json = ensureNotNull(this.u6n_1.a6n_1);
            var this_0 = tmp0.w21();
            var this_1 = serializer(this_0, createKType(getKClass(TSEKeyMetadata), arrayOf([]), false));
            suspendResult = tmp_0.y6n(this.u6n_1.z6m_1, tmp0.p4n(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), json), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(KeyManager$slambda_1).l6n = function (generateRequest, completion) {
    var i = new KeyManager$slambda_1(completion);
    i.u6n_1 = generateRequest;
    return i;
  };
  function KeyManager$slambda_2(resultContinuation) {
    var i = new KeyManager$slambda_1(resultContinuation);
    var l = function (generateRequest, $completion) {
      return i.v6n(generateRequest, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KeyManager$lambda_0($typeId) {
    return function () {
      return 'Registering key type "' + $typeId + '" to ' + getKClass(TSEKey).fc() + '...';
    };
  }
  function KeyManager$slambda_3(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyManager$slambda_3).i6o = function (generateRequest, $completion) {
    var tmp = this.l6n(generateRequest, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KeyManager$slambda_3).ta = function (p1, $completion) {
    return this.i6o(p1 instanceof KeyGenerationRequest ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KeyManager$slambda_3).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            var tmp_0 = Companion_getInstance_24();
            var tmp0 = Default_getInstance();
            var json = ensureNotNull(this.h6o_1.a6n_1);
            var this_0 = tmp0.w21();
            var this_1 = serializer(this_0, createKType(getKClass(OCIKeyMetadata), arrayOf([]), false));
            suspendResult = tmp_0.l6o(this.h6o_1.z6m_1, tmp0.p4n(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), json), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(KeyManager$slambda_3).l6n = function (generateRequest, completion) {
    var i = new KeyManager$slambda_3(completion);
    i.h6o_1 = generateRequest;
    return i;
  };
  function KeyManager$slambda_4(resultContinuation) {
    var i = new KeyManager$slambda_3(resultContinuation);
    var l = function (generateRequest, $completion) {
      return i.i6o(generateRequest, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KeyManager$lambda_1($typeId) {
    return function () {
      return 'Registering key type "' + $typeId + '" to ' + getKClass(OCIKeyRestApi).fc() + '...';
    };
  }
  function KeyManager$slambda_5(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyManager$slambda_5).v6o = function (generateRequest, $completion) {
    var tmp = this.l6n(generateRequest, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KeyManager$slambda_5).ta = function (p1, $completion) {
    return this.v6o(p1 instanceof KeyGenerationRequest ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KeyManager$slambda_5).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            var tmp_0 = Companion_getInstance_16();
            var tmp0 = Default_getInstance();
            var json = ensureNotNull(this.u6o_1.a6n_1);
            var this_0 = tmp0.w21();
            var this_1 = serializer(this_0, createKType(getKClass(AWSKeyMetadata), arrayOf([]), false));
            suspendResult = tmp_0.y6o(this.u6o_1.z6m_1, tmp0.p4n(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), json), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(KeyManager$slambda_5).l6n = function (generateRequest, completion) {
    var i = new KeyManager$slambda_5(completion);
    i.u6o_1 = generateRequest;
    return i;
  };
  function KeyManager$slambda_6(resultContinuation) {
    var i = new KeyManager$slambda_5(resultContinuation);
    var l = function (generateRequest, $completion) {
      return i.v6o(generateRequest, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KeyManager$lambda_2($typeId) {
    return function () {
      return 'Registering key type "' + $typeId + '" to ' + getKClass(AWSKeyRestAPI).fc() + '...';
    };
  }
  function KeyManager$slambda_7(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyManager$slambda_7).i6p = function (generateRequest, $completion) {
    var tmp = this.l6n(generateRequest, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(KeyManager$slambda_7).ta = function (p1, $completion) {
    return this.i6p(p1 instanceof KeyGenerationRequest ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KeyManager$slambda_7).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            var tmp_0 = Companion_getInstance_21();
            var tmp0 = Default_getInstance();
            var json = ensureNotNull(this.h6p_1.a6n_1);
            var this_0 = tmp0.w21();
            var this_1 = serializer(this_0, createKType(getKClass(AzureKeyMetadata), arrayOf([]), false));
            suspendResult = tmp_0.l6p(this.h6p_1.z6m_1, tmp0.p4n(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), json), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(KeyManager$slambda_7).l6n = function (generateRequest, completion) {
    var i = new KeyManager$slambda_7(completion);
    i.h6p_1 = generateRequest;
    return i;
  };
  function KeyManager$slambda_8(resultContinuation) {
    var i = new KeyManager$slambda_7(resultContinuation);
    var l = function (generateRequest, $completion) {
      return i.i6p(generateRequest, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KeyManager$lambda_3($typeId) {
    return function () {
      return 'Registering key type "' + $typeId + '" to ' + getKClass(AzureKey).fc() + '...';
    };
  }
  function $resolveSerializedKeyCOROUTINE$1(_this__u8e3s4, json, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u6p_1 = _this__u8e3s4;
    this.v6p_1 = json;
  }
  protoOf($resolveSerializedKeyCOROUTINE$1).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.v6p_1.we('type');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4p();
            var tmp_1;
            if (tmp2_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var type = KeyManager_getInstance().f6q(tmp2_safe_receiver);
              var this_0 = this.v6p_1;
              var result = LinkedHashMap_init_$Create$();
              var _iterator__ex2g4s = this_0.x().p();
              while (_iterator__ex2g4s.q()) {
                var entry = _iterator__ex2g4s.r();
                if (!(entry.y() === 'type')) {
                  result.n2(entry.y(), entry.z());
                }
              }
              var destination = LinkedHashMap_init_$Create$_0(mapCapacity(result.s()));
              var _iterator__ex2g4s_0 = result.x().p();
              while (_iterator__ex2g4s_0.q()) {
                var element = _iterator__ex2g4s_0.r();
                var tmp_2 = element.y();
                destination.n2(tmp_2, element.z());
              }
              var fields = destination;
              var tmp_3 = Default_getInstance().p4n(serializer_0(type), new JsonObject(fields));
              tmp_1 = tmp_3 instanceof Key ? tmp_3 : THROW_CCE();
            }

            tmp_0.w6p_1 = tmp_1;
            if (this.w6p_1 == null) {
              this.x6p_1 = null;
              this.l9_1 = 2;
              continue $sm;
            } else {
              var tmp_4 = this;
              tmp_4.y6p_1 = this.w6p_1;
              this.z6p_1 = this.y6p_1;
              var tmp_5 = this;
              tmp_5.a6q_1 = this.z6p_1;
              this.b6q_1 = this.a6q_1;
              this.l9_1 = 1;
              suspendResult = this.b6q_1.g6h(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.x6p_1 = this.z6p_1;
            this.l9_1 = 2;
            continue $sm;
          case 2:
            var tmp4_elvis_lhs = this.x6p_1;
            var tmp_6;
            if (tmp4_elvis_lhs == null) {
              throw new KeyTypeMissingException();
            } else {
              tmp_6 = tmp4_elvis_lhs;
            }

            return tmp_6;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function KeyManager() {
    KeyManager_instance = this;
    var tmp = this;
    var tmp_0 = KotlinLogging_instance;
    tmp.c6q_1 = tmp_0.o6b(KeyManager$log$lambda);
    this.d6q_1 = HashMap_init_$Create$();
    this.e6q_1 = HashMap_init_$Create$();
    // Inline function 'id.walt.crypto.keys.KeyManager.register' call
    var createFunction = KeyManager$slambda_0(null);
    var tmp_1 = this.g6q();
    tmp_1.k6b(KeyManager$lambda('jwk'));
    var type = createKType(getKClass(JWKKey), arrayOf([]), false);
    this.h6q(type, 'jwk', createFunction);
    // Inline function 'id.walt.crypto.keys.KeyManager.register' call
    var createFunction_0 = KeyManager$slambda_2(null);
    var tmp_2 = this.g6q();
    tmp_2.k6b(KeyManager$lambda_0('tse'));
    var type_0 = createKType(getKClass(TSEKey), arrayOf([]), false);
    this.h6q(type_0, 'tse', createFunction_0);
    var tmp7 = 'oci-rest-api';
    // Inline function 'id.walt.crypto.keys.KeyManager.register' call
    var createFunction_1 = KeyManager$slambda_4(null);
    var tmp_3 = this.g6q();
    tmp_3.k6b(KeyManager$lambda_1(tmp7));
    var type_1 = createKType(getKClass(OCIKeyRestApi), arrayOf([]), false);
    this.h6q(type_1, tmp7, createFunction_1);
    var tmp10 = 'aws-rest-api';
    // Inline function 'id.walt.crypto.keys.KeyManager.register' call
    var createFunction_2 = KeyManager$slambda_6(null);
    var tmp_4 = this.g6q();
    tmp_4.k6b(KeyManager$lambda_2(tmp10));
    var type_2 = createKType(getKClass(AWSKeyRestAPI), arrayOf([]), false);
    this.h6q(type_2, tmp10, createFunction_2);
    // Inline function 'id.walt.crypto.keys.KeyManager.register' call
    var createFunction_3 = KeyManager$slambda_8(null);
    var tmp_5 = this.g6q();
    tmp_5.k6b(KeyManager$lambda_3('azure'));
    var type_3 = createKType(getKClass(AzureKey), arrayOf([]), false);
    this.h6q(type_3, 'azure', createFunction_3);
  }
  protoOf(KeyManager).g6q = function () {
    return this.c6q_1;
  };
  protoOf(KeyManager).f6q = function (type) {
    var tmp0_elvis_lhs = this.d6q_1.k2(type);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new KeyTypeNotSupportedException(type);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(KeyManager).h6q = function (type, typeId, createFunction) {
    // Inline function 'kotlin.collections.set' call
    this.d6q_1.n2(typeId, type);
    // Inline function 'kotlin.collections.set' call
    this.e6q_1.n2(typeId, createFunction);
  };
  protoOf(KeyManager).i6q = function (json, $completion) {
    var tmp = new $resolveSerializedKeyCOROUTINE$1(this, json, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  var KeyManager_instance;
  function KeyManager_getInstance() {
    if (KeyManager_instance == null)
      new KeyManager();
    return KeyManager_instance;
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.j6q_1.z();
  }
  function KeyMeta$Companion$_anonymous__3ce14l() {
    var tmp = getKClass(KeyMeta);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [getKClass(AwsKeyMeta), getKClass(AzureKeyMeta), getKClass(JwkKeyMeta), getKClass(OciKeyMeta), getKClass(TseKeyMeta)];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [$serializer_getInstance_3(), $serializer_getInstance_4(), $serializer_getInstance_2(), $serializer_getInstance_0(), $serializer_getInstance_1()];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('id.walt.crypto.keys.KeyMeta', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Companion_2() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.j6q_1 = lazy(tmp_0, KeyMeta$Companion$_anonymous__3ce14l);
  }
  protoOf(Companion_2).s4p = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_2).w29 = function (typeParamsSerializers) {
    return this.s4p();
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_2();
    return Companion_instance_7;
  }
  function KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function KeyMeta() {
    Companion_getInstance_7();
  }
  function Companion_3() {
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.OciKeyMeta', this, 2);
    tmp0_serialDesc.v28('keyId', false);
    tmp0_serialDesc.v28('keyVersion', false);
    this.k6q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).l6q = function (encoder, value) {
    var tmp0_desc = this.k6q_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.w22(tmp0_desc, 0, value.m6q_1);
    tmp1_output.w22(tmp0_desc, 1, value.n6q_1);
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_0).v1x = function (encoder, value) {
    return this.l6q(encoder, value instanceof OciKeyMeta ? value : THROW_CCE());
  };
  protoOf($serializer_0).w1x = function (decoder) {
    var tmp0_desc = this.k6q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h21(tmp0_desc);
    if (tmp6_input.x21()) {
      tmp4_local0 = tmp6_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.r21(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.r21(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i21(tmp0_desc);
    return OciKeyMeta_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).u1x = function () {
    return this.k6q_1;
  };
  protoOf($serializer_0).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function OciKeyMeta_init_$Init$(seen0, keyId, keyVersion, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_0().k6q_1);
    }
    KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.m6q_1 = keyId;
    $this.n6q_1 = keyVersion;
    return $this;
  }
  function OciKeyMeta_init_$Create$(seen0, keyId, keyVersion, serializationConstructorMarker) {
    return OciKeyMeta_init_$Init$(seen0, keyId, keyVersion, serializationConstructorMarker, objectCreate(protoOf(OciKeyMeta)));
  }
  function OciKeyMeta(keyId, keyVersion) {
    KeyMeta.call(this);
    this.m6q_1 = keyId;
    this.n6q_1 = keyVersion;
  }
  protoOf(OciKeyMeta).toString = function () {
    return 'OciKeyMeta(keyId=' + this.m6q_1 + ', keyVersion=' + this.n6q_1 + ')';
  };
  protoOf(OciKeyMeta).hashCode = function () {
    var result = getStringHashCode(this.m6q_1);
    result = imul(result, 31) + getStringHashCode(this.n6q_1) | 0;
    return result;
  };
  protoOf(OciKeyMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OciKeyMeta))
      return false;
    var tmp0_other_with_cast = other instanceof OciKeyMeta ? other : THROW_CCE();
    if (!(this.m6q_1 === tmp0_other_with_cast.m6q_1))
      return false;
    if (!(this.n6q_1 === tmp0_other_with_cast.n6q_1))
      return false;
    return true;
  };
  function Companion_4() {
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    return Companion_instance_9;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.TseKeyMeta', this, 1);
    tmp0_serialDesc.v28('keyId', false);
    this.o6q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).p6q = function (encoder, value) {
    var tmp0_desc = this.o6q_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.w22(tmp0_desc, 0, value.q6q_1);
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_1).v1x = function (encoder, value) {
    return this.p6q(encoder, value instanceof TseKeyMeta ? value : THROW_CCE());
  };
  protoOf($serializer_1).w1x = function (decoder) {
    var tmp0_desc = this.o6q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.h21(tmp0_desc);
    if (tmp5_input.x21()) {
      tmp4_local0 = tmp5_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.i21(tmp0_desc);
    return TseKeyMeta_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_1).u1x = function () {
    return this.o6q_1;
  };
  protoOf($serializer_1).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function TseKeyMeta_init_$Init$(seen0, keyId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_1().o6q_1);
    }
    KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.q6q_1 = keyId;
    return $this;
  }
  function TseKeyMeta_init_$Create$(seen0, keyId, serializationConstructorMarker) {
    return TseKeyMeta_init_$Init$(seen0, keyId, serializationConstructorMarker, objectCreate(protoOf(TseKeyMeta)));
  }
  function TseKeyMeta(keyId) {
    KeyMeta.call(this);
    this.q6q_1 = keyId;
  }
  protoOf(TseKeyMeta).toString = function () {
    return 'TseKeyMeta(keyId=' + this.q6q_1 + ')';
  };
  protoOf(TseKeyMeta).hashCode = function () {
    return getStringHashCode(this.q6q_1);
  };
  protoOf(TseKeyMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TseKeyMeta))
      return false;
    var tmp0_other_with_cast = other instanceof TseKeyMeta ? other : THROW_CCE();
    if (!(this.q6q_1 === tmp0_other_with_cast.q6q_1))
      return false;
    return true;
  };
  function Companion_5() {
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    return Companion_instance_10;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.JwkKeyMeta', this, 2);
    tmp0_serialDesc.v28('keyId', false);
    tmp0_serialDesc.v28('keySize', true);
    this.r6q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).s6q = function (encoder, value) {
    var tmp0_desc = this.r6q_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.w22(tmp0_desc, 0, value.t6q_1);
    if (tmp1_output.e23(tmp0_desc, 1) ? true : !(value.u6q_1 == null)) {
      tmp1_output.a23(tmp0_desc, 1, IntSerializer_getInstance(), value.u6q_1);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_2).v1x = function (encoder, value) {
    return this.s6q(encoder, value instanceof JwkKeyMeta ? value : THROW_CCE());
  };
  protoOf($serializer_2).w1x = function (decoder) {
    var tmp0_desc = this.r6q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h21(tmp0_desc);
    if (tmp6_input.x21()) {
      tmp4_local0 = tmp6_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v21(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.v21(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i21(tmp0_desc);
    return JwkKeyMeta_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).u1x = function () {
    return this.r6q_1;
  };
  protoOf($serializer_2).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function JwkKeyMeta_init_$Init$(seen0, keyId, keySize, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_2().r6q_1);
    }
    KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.t6q_1 = keyId;
    if (0 === (seen0 & 2))
      $this.u6q_1 = null;
    else
      $this.u6q_1 = keySize;
    return $this;
  }
  function JwkKeyMeta_init_$Create$(seen0, keyId, keySize, serializationConstructorMarker) {
    return JwkKeyMeta_init_$Init$(seen0, keyId, keySize, serializationConstructorMarker, objectCreate(protoOf(JwkKeyMeta)));
  }
  function JwkKeyMeta(keyId, keySize) {
    keySize = keySize === VOID ? null : keySize;
    KeyMeta.call(this);
    this.t6q_1 = keyId;
    this.u6q_1 = keySize;
  }
  protoOf(JwkKeyMeta).toString = function () {
    return 'JwkKeyMeta(keyId=' + this.t6q_1 + ', keySize=' + this.u6q_1 + ')';
  };
  protoOf(JwkKeyMeta).hashCode = function () {
    var result = getStringHashCode(this.t6q_1);
    result = imul(result, 31) + (this.u6q_1 == null ? 0 : this.u6q_1) | 0;
    return result;
  };
  protoOf(JwkKeyMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JwkKeyMeta))
      return false;
    var tmp0_other_with_cast = other instanceof JwkKeyMeta ? other : THROW_CCE();
    if (!(this.t6q_1 === tmp0_other_with_cast.t6q_1))
      return false;
    if (!(this.u6q_1 == tmp0_other_with_cast.u6q_1))
      return false;
    return true;
  };
  function Companion_6() {
  }
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.AwsKeyMeta', this, 2);
    tmp0_serialDesc.v28('keyId', false);
    tmp0_serialDesc.v28('keySize', true);
    this.v6q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).w6q = function (encoder, value) {
    var tmp0_desc = this.v6q_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.w22(tmp0_desc, 0, value.x6q_1);
    if (tmp1_output.e23(tmp0_desc, 1) ? true : !(value.y6q_1 == null)) {
      tmp1_output.a23(tmp0_desc, 1, IntSerializer_getInstance(), value.y6q_1);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_3).v1x = function (encoder, value) {
    return this.w6q(encoder, value instanceof AwsKeyMeta ? value : THROW_CCE());
  };
  protoOf($serializer_3).w1x = function (decoder) {
    var tmp0_desc = this.v6q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h21(tmp0_desc);
    if (tmp6_input.x21()) {
      tmp4_local0 = tmp6_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v21(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.v21(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i21(tmp0_desc);
    return AwsKeyMeta_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).u1x = function () {
    return this.v6q_1;
  };
  protoOf($serializer_3).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function AwsKeyMeta_init_$Init$(seen0, keyId, keySize, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_3().v6q_1);
    }
    KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.x6q_1 = keyId;
    if (0 === (seen0 & 2))
      $this.y6q_1 = null;
    else
      $this.y6q_1 = keySize;
    return $this;
  }
  function AwsKeyMeta_init_$Create$(seen0, keyId, keySize, serializationConstructorMarker) {
    return AwsKeyMeta_init_$Init$(seen0, keyId, keySize, serializationConstructorMarker, objectCreate(protoOf(AwsKeyMeta)));
  }
  function AwsKeyMeta(keyId, keySize) {
    keySize = keySize === VOID ? null : keySize;
    KeyMeta.call(this);
    this.x6q_1 = keyId;
    this.y6q_1 = keySize;
  }
  protoOf(AwsKeyMeta).toString = function () {
    return 'AwsKeyMeta(keyId=' + this.x6q_1 + ', keySize=' + this.y6q_1 + ')';
  };
  protoOf(AwsKeyMeta).hashCode = function () {
    var result = getStringHashCode(this.x6q_1);
    result = imul(result, 31) + (this.y6q_1 == null ? 0 : this.y6q_1) | 0;
    return result;
  };
  protoOf(AwsKeyMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AwsKeyMeta))
      return false;
    var tmp0_other_with_cast = other instanceof AwsKeyMeta ? other : THROW_CCE();
    if (!(this.x6q_1 === tmp0_other_with_cast.x6q_1))
      return false;
    if (!(this.y6q_1 == tmp0_other_with_cast.y6q_1))
      return false;
    return true;
  };
  function Companion_7() {
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.AzureKeyMeta', this, 1);
    tmp0_serialDesc.v28('keyId', false);
    this.z6q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).a6r = function (encoder, value) {
    var tmp0_desc = this.z6q_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.w22(tmp0_desc, 0, value.b6r_1);
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_4).v1x = function (encoder, value) {
    return this.a6r(encoder, value instanceof AzureKeyMeta ? value : THROW_CCE());
  };
  protoOf($serializer_4).w1x = function (decoder) {
    var tmp0_desc = this.z6q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.h21(tmp0_desc);
    if (tmp5_input.x21()) {
      tmp4_local0 = tmp5_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.i21(tmp0_desc);
    return AzureKeyMeta_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_4).u1x = function () {
    return this.z6q_1;
  };
  protoOf($serializer_4).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function AzureKeyMeta_init_$Init$(seen0, keyId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_4().z6q_1);
    }
    KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.b6r_1 = keyId;
    return $this;
  }
  function AzureKeyMeta_init_$Create$(seen0, keyId, serializationConstructorMarker) {
    return AzureKeyMeta_init_$Init$(seen0, keyId, serializationConstructorMarker, objectCreate(protoOf(AzureKeyMeta)));
  }
  function AzureKeyMeta(keyId) {
    KeyMeta.call(this);
    this.b6r_1 = keyId;
  }
  protoOf(AzureKeyMeta).toString = function () {
    return 'AzureKeyMeta(keyId=' + this.b6r_1 + ')';
  };
  protoOf(AzureKeyMeta).hashCode = function () {
    return getStringHashCode(this.b6r_1);
  };
  protoOf(AzureKeyMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AzureKeyMeta))
      return false;
    var tmp0_other_with_cast = other instanceof AzureKeyMeta ? other : THROW_CCE();
    if (!(this.b6r_1 === tmp0_other_with_cast.b6r_1))
      return false;
    return true;
  };
  function KeySerialization$keySerializationJson$lambda($this$Json) {
    $this$Json.w4o_1 = KeySerialization_getInstance().c6r_1;
    return Unit_instance;
  }
  function KeySerialization$registerExternalKeyType$lambda($this$Json) {
    $this$Json.w4o_1 = KeySerialization_getInstance().c6r_1;
    return Unit_instance;
  }
  function KeySerialization$deserializeJWTKeyAsync$slambda($json, resultContinuation) {
    this.m6r_1 = $json;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeySerialization$deserializeJWTKeyAsync$slambda).n6r = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization$deserializeJWTKeyAsync$slambda).yb = function ($completion) {
    return this.n6r($completion);
  };
  protoOf(KeySerialization$deserializeJWTKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = KeySerialization_getInstance().o6r(this.m6r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(KeySerialization$deserializeJWTKeyAsync$slambda).ha = function (completion) {
    return new KeySerialization$deserializeJWTKeyAsync$slambda(this.m6r_1, completion);
  };
  function KeySerialization$deserializeJWTKeyAsync$slambda_0($json, resultContinuation) {
    var i = new KeySerialization$deserializeJWTKeyAsync$slambda($json, resultContinuation);
    var l = function ($completion) {
      return i.n6r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function KeySerialization$deserializeKeyAsync$slambda($json, resultContinuation) {
    this.x6r_1 = $json;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeySerialization$deserializeKeyAsync$slambda).n6r = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization$deserializeKeyAsync$slambda).yb = function ($completion) {
    return this.n6r($completion);
  };
  protoOf(KeySerialization$deserializeKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = KeySerialization_getInstance().y6r(this.x6r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(KeySerialization$deserializeKeyAsync$slambda).ha = function (completion) {
    return new KeySerialization$deserializeKeyAsync$slambda(this.x6r_1, completion);
  };
  function KeySerialization$deserializeKeyAsync$slambda_0($json, resultContinuation) {
    var i = new KeySerialization$deserializeKeyAsync$slambda($json, resultContinuation);
    var l = function ($completion) {
      return i.n6r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function KeySerialization$deserializeKeyObjectAsync$slambda($json, resultContinuation) {
    this.h6s_1 = $json;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeySerialization$deserializeKeyObjectAsync$slambda).n6r = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization$deserializeKeyObjectAsync$slambda).yb = function ($completion) {
    return this.n6r($completion);
  };
  protoOf(KeySerialization$deserializeKeyObjectAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = KeySerialization_getInstance().i6s(this.h6s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(KeySerialization$deserializeKeyObjectAsync$slambda).ha = function (completion) {
    return new KeySerialization$deserializeKeyObjectAsync$slambda(this.h6s_1, completion);
  };
  function KeySerialization$deserializeKeyObjectAsync$slambda_0($json, resultContinuation) {
    var i = new KeySerialization$deserializeKeyObjectAsync$slambda($json, resultContinuation);
    var l = function ($completion) {
      return i.n6r($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $deserializeKeyCOROUTINE$2(_this__u8e3s4, json, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r6s_1 = _this__u8e3s4;
    this.s6s_1 = json;
  }
  protoOf($deserializeKeyCOROUTINE$2).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            tmp_0.t6s_1 = this.r6s_1;
            this.u6s_1 = this.t6s_1;
            this.m9_1 = 2;
            var tmp_1 = this;
            tmp_1.w6s_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.x6s_1 = this.u6s_1;
            this.y6s_1 = this.x6s_1;
            var tmp_3 = this;
            var tmp0 = this.y6s_1.d6r_1;
            var string = this.s6s_1;
            var this_0 = tmp0.w21();
            var this_1 = serializer(this_0, createKType(getKClass(Key), arrayOf([]), false));
            tmp_3.z6s_1 = tmp0.y1y(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), string);
            this.a6t_1 = this.z6s_1;
            var tmp_4 = this;
            tmp_4.b6t_1 = this.a6t_1;
            this.c6t_1 = this.b6t_1;
            this.l9_1 = 1;
            suspendResult = this.c6t_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = this.a6t_1;
            var tmp_5 = this;
            this.w6s_1;
            tmp_5.v6s_1 = _Result___init__impl__xyqfz8(tmp1);
            this.m9_1 = 3;
            this.l9_1 = 4;
            continue $sm;
          case 2:
            this.m9_1 = 3;
            var tmp_6 = this.o9_1;
            if (tmp_6 instanceof Error) {
              var e = this.o9_1;
              var tmp_7 = this;
              tmp_7.v6s_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.l9_1 = 4;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 3:
            throw this.o9_1;
          case 4:
            this.m9_1 = 3;
            return new Result(this.v6s_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m9_1 === 3) {
          throw e_0;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($deserializeKeyCOROUTINE$2)['<set-state>'] = protoOf($deserializeKeyCOROUTINE$2).s9;
  protoOf($deserializeKeyCOROUTINE$2)['<get-state>'] = protoOf($deserializeKeyCOROUTINE$2).t9;
  protoOf($deserializeKeyCOROUTINE$2)['<set-exceptionState>'] = protoOf($deserializeKeyCOROUTINE$2).u9;
  protoOf($deserializeKeyCOROUTINE$2)['<get-exceptionState>'] = protoOf($deserializeKeyCOROUTINE$2).v9;
  protoOf($deserializeKeyCOROUTINE$2)['<set-result>'] = protoOf($deserializeKeyCOROUTINE$2).w9;
  protoOf($deserializeKeyCOROUTINE$2)['<get-result>'] = protoOf($deserializeKeyCOROUTINE$2).x9;
  protoOf($deserializeKeyCOROUTINE$2)['<set-exception>'] = protoOf($deserializeKeyCOROUTINE$2).y9;
  protoOf($deserializeKeyCOROUTINE$2)['<get-exception>'] = protoOf($deserializeKeyCOROUTINE$2).z9;
  protoOf($deserializeKeyCOROUTINE$2)['<set-finallyPath>'] = protoOf($deserializeKeyCOROUTINE$2).aa;
  protoOf($deserializeKeyCOROUTINE$2)['<get-finallyPath>'] = protoOf($deserializeKeyCOROUTINE$2).ba;
  protoOf($deserializeKeyCOROUTINE$2)['<get-context>'] = protoOf($deserializeKeyCOROUTINE$2).r9;
  function $deserializeKeyObjectCOROUTINE$3(_this__u8e3s4, json, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l6t_1 = _this__u8e3s4;
    this.m6t_1 = json;
  }
  protoOf($deserializeKeyObjectCOROUTINE$3).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            tmp_0.n6t_1 = this.l6t_1;
            this.o6t_1 = this.n6t_1;
            this.m9_1 = 2;
            var tmp_1 = this;
            tmp_1.q6t_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.r6t_1 = this.o6t_1;
            this.s6t_1 = this.r6t_1;
            var tmp_3 = this;
            var tmp0 = this.s6t_1.d6r_1;
            var json = this.m6t_1;
            var this_0 = tmp0.w21();
            var this_1 = serializer(this_0, createKType(getKClass(Key), arrayOf([]), false));
            tmp_3.t6t_1 = tmp0.p4n(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), json);
            this.u6t_1 = this.t6t_1;
            var tmp_4 = this;
            tmp_4.v6t_1 = this.u6t_1;
            this.w6t_1 = this.v6t_1;
            this.l9_1 = 1;
            suspendResult = this.w6t_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = this.u6t_1;
            var tmp_5 = this;
            this.q6t_1;
            tmp_5.p6t_1 = _Result___init__impl__xyqfz8(tmp1);
            this.m9_1 = 3;
            this.l9_1 = 4;
            continue $sm;
          case 2:
            this.m9_1 = 3;
            var tmp_6 = this.o9_1;
            if (tmp_6 instanceof Error) {
              var e = this.o9_1;
              var tmp_7 = this;
              tmp_7.p6t_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.l9_1 = 4;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 3:
            throw this.o9_1;
          case 4:
            this.m9_1 = 3;
            return new Result(this.p6t_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m9_1 === 3) {
          throw e_0;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($deserializeKeyObjectCOROUTINE$3)['<set-state>'] = protoOf($deserializeKeyObjectCOROUTINE$3).s9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-state>'] = protoOf($deserializeKeyObjectCOROUTINE$3).t9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<set-exceptionState>'] = protoOf($deserializeKeyObjectCOROUTINE$3).u9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-exceptionState>'] = protoOf($deserializeKeyObjectCOROUTINE$3).v9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<set-result>'] = protoOf($deserializeKeyObjectCOROUTINE$3).w9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-result>'] = protoOf($deserializeKeyObjectCOROUTINE$3).x9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<set-exception>'] = protoOf($deserializeKeyObjectCOROUTINE$3).y9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-exception>'] = protoOf($deserializeKeyObjectCOROUTINE$3).z9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<set-finallyPath>'] = protoOf($deserializeKeyObjectCOROUTINE$3).aa;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-finallyPath>'] = protoOf($deserializeKeyObjectCOROUTINE$3).ba;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-context>'] = protoOf($deserializeKeyObjectCOROUTINE$3).r9;
  function $deserializeJWTKeyCOROUTINE$4(_this__u8e3s4, json, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f6u_1 = _this__u8e3s4;
    this.g6u_1 = json;
  }
  protoOf($deserializeJWTKeyCOROUTINE$4).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            tmp_0.h6u_1 = this.f6u_1;
            this.i6u_1 = this.h6u_1;
            this.m9_1 = 2;
            var tmp_1 = this;
            tmp_1.k6u_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.l6u_1 = this.i6u_1;
            this.m6u_1 = this.l6u_1;
            var tmp_3 = this;
            var tmp2 = this.m6u_1.d6r_1;
            var tmp_4 = JsonUtils_getInstance();
            var this_0 = this.g6u_1;
            var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.s()));
            var _iterator__ex2g4s = this_0.x().p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              var tmp_5 = element.y();
              var tmp_6;
              var tmp_7 = element.z();
              if (tmp_7 instanceof JsonPrimitive) {
                tmp_6 = get_jsonPrimitive(element.z()).v4p();
              } else {
                tmp_6 = toString_0(element.z());
              }
              destination.n2(tmp_5, tmp_6);
            }

            var json = tmp_4.mapToJsonObject(destination);
            var this_1 = tmp2.w21();
            var this_2 = serializer(this_1, createKType(getKClass(Key), arrayOf([]), false));
            tmp_3.n6u_1 = tmp2.p4n(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), json);
            this.o6u_1 = this.n6u_1;
            var tmp_8 = this;
            tmp_8.p6u_1 = this.o6u_1;
            this.q6u_1 = this.p6u_1;
            this.l9_1 = 1;
            suspendResult = this.q6u_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = this.o6u_1;
            var tmp_9 = this;
            this.k6u_1;
            tmp_9.j6u_1 = _Result___init__impl__xyqfz8(tmp1);
            this.m9_1 = 3;
            this.l9_1 = 4;
            continue $sm;
          case 2:
            this.m9_1 = 3;
            var tmp_10 = this.o9_1;
            if (tmp_10 instanceof Error) {
              var e = this.o9_1;
              var tmp_11 = this;
              tmp_11.j6u_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.l9_1 = 4;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 3:
            throw this.o9_1;
          case 4:
            this.m9_1 = 3;
            return new Result(this.j6u_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m9_1 === 3) {
          throw e_0;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($deserializeJWTKeyCOROUTINE$4)['<set-state>'] = protoOf($deserializeJWTKeyCOROUTINE$4).s9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-state>'] = protoOf($deserializeJWTKeyCOROUTINE$4).t9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<set-exceptionState>'] = protoOf($deserializeJWTKeyCOROUTINE$4).u9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-exceptionState>'] = protoOf($deserializeJWTKeyCOROUTINE$4).v9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<set-result>'] = protoOf($deserializeJWTKeyCOROUTINE$4).w9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-result>'] = protoOf($deserializeJWTKeyCOROUTINE$4).x9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<set-exception>'] = protoOf($deserializeJWTKeyCOROUTINE$4).y9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-exception>'] = protoOf($deserializeJWTKeyCOROUTINE$4).z9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<set-finallyPath>'] = protoOf($deserializeJWTKeyCOROUTINE$4).aa;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-finallyPath>'] = protoOf($deserializeJWTKeyCOROUTINE$4).ba;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-context>'] = protoOf($deserializeJWTKeyCOROUTINE$4).r9;
  function KeySerialization() {
    KeySerialization_instance = this;
    var tmp = this;
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    // Inline function 'kotlinx.serialization.modules.polymorphic' call
    var baseClass = getKClass(Key);
    var builder_0 = new PolymorphicModuleBuilder(baseClass, null);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz = getKClass(JWKKey);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer_0(createKType(getKClass(JWKKey), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    builder_0.m2i(clazz, tmp$ret$1);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_0 = getKClass(TSEKey);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer_0(createKType(getKClass(TSEKey), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    builder_0.m2i(clazz_0, tmp$ret$4);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_1 = getKClass(OCIKeyRestApi);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer_0(createKType(getKClass(OCIKeyRestApi), arrayOf([]), false));
    var tmp$ret$7 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    builder_0.m2i(clazz_1, tmp$ret$7);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_2 = getKClass(AWSKeyRestAPI);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer_0(createKType(getKClass(AWSKeyRestAPI), arrayOf([]), false));
    var tmp$ret$10 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    builder_0.m2i(clazz_2, tmp$ret$10);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_3 = getKClass(AzureKey);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_4 = serializer_0(createKType(getKClass(AzureKey), arrayOf([]), false));
    var tmp$ret$13 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
    builder_0.m2i(clazz_3, tmp$ret$13);
    builder_0.n2i(builder);
    tmp.c6r_1 = builder.y26();
    var tmp_0 = this;
    tmp_0.d6r_1 = Json(VOID, KeySerialization$keySerializationJson$lambda);
  }
  protoOf(KeySerialization).registerExternalKeyType = function (keyClass) {
    var tmp = this;
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    // Inline function 'kotlinx.serialization.modules.polymorphic' call
    var baseClass = getKClass(Key);
    var builder_0 = new PolymorphicModuleBuilder(baseClass, null);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz = getKClass(JWKKey);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_0 = serializer_0(createKType(getKClass(JWKKey), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_0, KSerializer) ? this_0 : THROW_CCE();
    builder_0.m2i(clazz, tmp$ret$1);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_0 = getKClass(TSEKey);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer_0(createKType(getKClass(TSEKey), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    builder_0.m2i(clazz_0, tmp$ret$4);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_1 = getKClass(OCIKeyRestApi);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer_0(createKType(getKClass(OCIKeyRestApi), arrayOf([]), false));
    var tmp$ret$7 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    builder_0.m2i(clazz_1, tmp$ret$7);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_2 = getKClass(AWSKeyRestAPI);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer_0(createKType(getKClass(AWSKeyRestAPI), arrayOf([]), false));
    var tmp$ret$10 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    builder_0.m2i(clazz_2, tmp$ret$10);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_3 = getKClass(AzureKey);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_4 = serializer_0(createKType(getKClass(AzureKey), arrayOf([]), false));
    var tmp$ret$13 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
    builder_0.m2i(clazz_3, tmp$ret$13);
    builder_0.m2i(keyClass, serializer_1(keyClass));
    builder_0.n2i(builder);
    tmp.c6r_1 = builder.y26();
    var tmp_0 = this;
    tmp_0.d6r_1 = Json(VOID, KeySerialization$registerExternalKeyType$lambda);
  };
  protoOf(KeySerialization).serializeKey = function (key) {
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = this.d6r_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w21();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(Key), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    return this_0.x1y(tmp$ret$1, key);
  };
  protoOf(KeySerialization).serializeKeyToJson = function (key) {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = this.d6r_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w21();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(Key), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    return this_0.o4n(tmp$ret$1, key);
  };
  protoOf(KeySerialization).y6r = function (json, $completion) {
    var tmp = new $deserializeKeyCOROUTINE$2(this, json, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization).i6s = function (json, $completion) {
    var tmp = new $deserializeKeyObjectCOROUTINE$3(this, json, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization).o6r = function (json, $completion) {
    var tmp = new $deserializeJWTKeyCOROUTINE$4(this, json, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization).r6u = function (json) {
    var tmp = KeySerialization$deserializeJWTKeyAsync$slambda_0(json, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(KeySerialization).s6u = function (json) {
    var tmp = KeySerialization$deserializeKeyAsync$slambda_0(json, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(KeySerialization).t6u = function (json) {
    var tmp = KeySerialization$deserializeKeyObjectAsync$slambda_0(json, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var KeySerialization_instance;
  function KeySerialization_getInstance() {
    if (KeySerialization_instance == null)
      new KeySerialization();
    return KeySerialization_instance;
  }
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.u6m_1.z();
  }
  function KeyType$Companion$_anonymous__p3scwm() {
    return createSimpleEnumSerializer('id.walt.crypto.keys.KeyType', values());
  }
  var KeyType_Ed25519_instance;
  var KeyType_secp256k1_instance;
  var KeyType_secp256r1_instance;
  var KeyType_RSA_instance;
  function values() {
    return [KeyType_Ed25519_getInstance(), KeyType_secp256k1_getInstance(), KeyType_secp256r1_getInstance(), KeyType_RSA_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Ed25519':
        return KeyType_Ed25519_getInstance();
      case 'secp256k1':
        return KeyType_secp256k1_getInstance();
      case 'secp256r1':
        return KeyType_secp256r1_getInstance();
      case 'RSA':
        return KeyType_RSA_getInstance();
      default:
        KeyType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function Companion_8() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.u6m_1 = lazy(tmp_0, KeyType$Companion$_anonymous__p3scwm);
  }
  protoOf(Companion_8).s4p = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_8).w29 = function (typeParamsSerializers) {
    return this.s4p();
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    KeyType_initEntries();
    if (Companion_instance_13 == null)
      new Companion_8();
    return Companion_instance_13;
  }
  var KeyType_entriesInitialized;
  function KeyType_initEntries() {
    if (KeyType_entriesInitialized)
      return Unit_instance;
    KeyType_entriesInitialized = true;
    KeyType_Ed25519_instance = new KeyType('Ed25519', 0);
    KeyType_secp256k1_instance = new KeyType('secp256k1', 1);
    KeyType_secp256r1_instance = new KeyType('secp256r1', 2);
    KeyType_RSA_instance = new KeyType('RSA', 3);
    Companion_getInstance_13();
  }
  function KeyType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  var KeyCategory_RSA_instance;
  var KeyCategory_ECC_instance;
  var KeyCategory_EdDSA_instance;
  function values_0() {
    return [KeyCategory_RSA_getInstance(), KeyCategory_ECC_getInstance(), KeyCategory_EdDSA_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'RSA':
        return KeyCategory_RSA_getInstance();
      case 'ECC':
        return KeyCategory_ECC_getInstance();
      case 'EdDSA':
        return KeyCategory_EdDSA_getInstance();
      default:
        KeyCategory_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var KeyCategory_entriesInitialized;
  function KeyCategory_initEntries() {
    if (KeyCategory_entriesInitialized)
      return Unit_instance;
    KeyCategory_entriesInitialized = true;
    KeyCategory_RSA_instance = new KeyCategory('RSA', 0);
    KeyCategory_ECC_instance = new KeyCategory('ECC', 1);
    KeyCategory_EdDSA_instance = new KeyCategory('EdDSA', 2);
  }
  function KeyCategory(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function KeyType_Ed25519_getInstance() {
    KeyType_initEntries();
    return KeyType_Ed25519_instance;
  }
  function KeyType_secp256k1_getInstance() {
    KeyType_initEntries();
    return KeyType_secp256k1_instance;
  }
  function KeyType_secp256r1_getInstance() {
    KeyType_initEntries();
    return KeyType_secp256r1_instance;
  }
  function KeyType_RSA_getInstance() {
    KeyType_initEntries();
    return KeyType_RSA_instance;
  }
  function KeyCategory_RSA_getInstance() {
    KeyCategory_initEntries();
    return KeyCategory_RSA_instance;
  }
  function KeyCategory_ECC_getInstance() {
    KeyCategory_initEntries();
    return KeyCategory_ECC_instance;
  }
  function KeyCategory_EdDSA_getInstance() {
    KeyCategory_initEntries();
    return KeyCategory_EdDSA_instance;
  }
  function KeyUtils() {
  }
  protoOf(KeyUtils).y6u = function (plaintext, headers, keyType) {
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap_init_$Create$_0(headers);
    this_0.n2('alg', JsonUtils_getInstance().toJsonElement(jwsSigningAlgorithm(keyType)));
    var appendedHeader = this_0;
    var tmp = Base64Utils_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_1 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_2 = this_1.w21();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(this_2, createKType(getKClass(HashMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
    var tmp$ret$3 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    var tmp$ret$4 = this_1.x1y(tmp$ret$3, appendedHeader);
    var header = tmp.encodeToBase64Url(encodeToByteArray(tmp$ret$4));
    var payload = Base64Utils_getInstance().encodeToBase64Url(plaintext);
    return new Triple(header, payload, encodeToByteArray(header + '.' + payload));
  };
  protoOf(KeyUtils).z6u = function (rawSignature, header, payload) {
    var encodedSignature = Base64Utils_getInstance().encodeToBase64Url(rawSignature);
    var jws = header + '.' + payload + '.' + encodedSignature;
    return jws;
  };
  var KeyUtils_instance;
  function KeyUtils_getInstance() {
    return KeyUtils_instance;
  }
  function AWSAuth$Companion$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.o3i(tmp, AWSAuth$Companion$http$lambda$lambda);
    defaultRequest($this$HttpClient, AWSAuth$Companion$http$lambda$lambda_0);
    var tmp_0 = get_Logging();
    $this$HttpClient.o3i(tmp_0, AWSAuth$Companion$http$lambda$lambda_1);
    return Unit_instance;
  }
  function AWSAuth$Companion$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function AWSAuth$Companion$http$lambda$lambda_0($this$defaultRequest) {
    header($this$defaultRequest, HttpHeaders_getInstance().p2v_1, Application_getInstance().x2s_1);
    return Unit_instance;
  }
  function AWSAuth$Companion$http$lambda$lambda_1($this$install) {
    $this$install.r5b(get_DEFAULT(Companion_instance_2));
    $this$install.q5b_1 = LogLevel_ALL_getInstance();
    return Unit_instance;
  }
  function Companion_9() {
    Companion_instance_14 = this;
    var tmp = this;
    tmp.a6v_1 = HttpClient(AWSAuth$Companion$http$lambda);
    var tmp_0 = this;
    var tmp_1 = Companion_instance_3.h68();
    // Inline function 'kotlin.time.Companion.hours' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(24, DurationUnit_HOURS_getInstance());
    tmp_0.b6v_1 = tmp_1.o68(tmp$ret$0).w2u();
  }
  protoOf(Companion_9).s4p = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_9();
    return Companion_instance_14;
  }
  function requireAuthenticationMethod($this) {
    var usingAccessKey = !($this.accessKeyId == null) && !($this.secretAccessKey == null) && !($this.region == null);
    var instanceAuth = !($this.roleName == null) && !($this.region == null);
    if (!usingAccessKey && !instanceAuth) {
      throw IllegalArgumentException_init_$Create$('AWSAuth requires either accessKeyId, secretAccessKey, and region or roleName');
    }
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.aws.AWSAuth', this, 4);
    tmp0_serialDesc.v28('accessKeyId', true);
    tmp0_serialDesc.v28('secretAccessKey', true);
    tmp0_serialDesc.v28('region', true);
    tmp0_serialDesc.v28('roleName', true);
    this.c6v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).d6v = function (encoder, value) {
    var tmp0_desc = this.c6v_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    if (tmp1_output.e23(tmp0_desc, 0) ? true : !(value.accessKeyId == null)) {
      tmp1_output.a23(tmp0_desc, 0, StringSerializer_getInstance(), value.accessKeyId);
    }
    if (tmp1_output.e23(tmp0_desc, 1) ? true : !(value.secretAccessKey == null)) {
      tmp1_output.a23(tmp0_desc, 1, StringSerializer_getInstance(), value.secretAccessKey);
    }
    if (tmp1_output.e23(tmp0_desc, 2) ? true : !(value.region == null)) {
      tmp1_output.a23(tmp0_desc, 2, StringSerializer_getInstance(), value.region);
    }
    if (tmp1_output.e23(tmp0_desc, 3) ? true : !(value.roleName == null)) {
      tmp1_output.a23(tmp0_desc, 3, StringSerializer_getInstance(), value.roleName);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_5).v1x = function (encoder, value) {
    return this.d6v(encoder, value instanceof AWSAuth ? value : THROW_CCE());
  };
  protoOf($serializer_5).w1x = function (decoder) {
    var tmp0_desc = this.c6v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h21(tmp0_desc);
    if (tmp8_input.x21()) {
      tmp4_local0 = tmp8_input.v21(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.v21(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.v21(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.v21(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.v21(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.v21(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i21(tmp0_desc);
    return AWSAuth_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_5).u1x = function () {
    return this.c6v_1;
  };
  protoOf($serializer_5).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function AWSAuth_init_$Init$(seen0, accessKeyId, secretAccessKey, region, roleName, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().c6v_1);
    }
    if (0 === (seen0 & 1))
      $this.accessKeyId = null;
    else
      $this.accessKeyId = accessKeyId;
    if (0 === (seen0 & 2))
      $this.secretAccessKey = null;
    else
      $this.secretAccessKey = secretAccessKey;
    if (0 === (seen0 & 4))
      $this.region = null;
    else
      $this.region = region;
    if (0 === (seen0 & 8))
      $this.roleName = null;
    else
      $this.roleName = roleName;
    requireAuthenticationMethod($this);
    return $this;
  }
  function AWSAuth_init_$Create$(seen0, accessKeyId, secretAccessKey, region, roleName, serializationConstructorMarker) {
    return AWSAuth_init_$Init$(seen0, accessKeyId, secretAccessKey, region, roleName, serializationConstructorMarker, objectCreate(protoOf(AWSAuth)));
  }
  function AWSAuth(accessKeyId, secretAccessKey, region, roleName) {
    Companion_getInstance_14();
    accessKeyId = accessKeyId === VOID ? null : accessKeyId;
    secretAccessKey = secretAccessKey === VOID ? null : secretAccessKey;
    region = region === VOID ? null : region;
    roleName = roleName === VOID ? null : roleName;
    this.accessKeyId = accessKeyId;
    this.secretAccessKey = secretAccessKey;
    this.region = region;
    this.roleName = roleName;
    requireAuthenticationMethod(this);
  }
  protoOf(AWSAuth).e6v = function () {
    return this.accessKeyId;
  };
  protoOf(AWSAuth).f6v = function () {
    return this.secretAccessKey;
  };
  protoOf(AWSAuth).g6v = function () {
    return this.region;
  };
  protoOf(AWSAuth).h6v = function () {
    return this.roleName;
  };
  protoOf(AWSAuth).bc = function () {
    return this.accessKeyId;
  };
  protoOf(AWSAuth).cc = function () {
    return this.secretAccessKey;
  };
  protoOf(AWSAuth).zo = function () {
    return this.region;
  };
  protoOf(AWSAuth).i6v = function () {
    return this.roleName;
  };
  protoOf(AWSAuth).j6v = function (accessKeyId, secretAccessKey, region, roleName) {
    return new AWSAuth(accessKeyId, secretAccessKey, region, roleName);
  };
  protoOf(AWSAuth).copy = function (accessKeyId, secretAccessKey, region, roleName, $super) {
    accessKeyId = accessKeyId === VOID ? this.accessKeyId : accessKeyId;
    secretAccessKey = secretAccessKey === VOID ? this.secretAccessKey : secretAccessKey;
    region = region === VOID ? this.region : region;
    roleName = roleName === VOID ? this.roleName : roleName;
    return $super === VOID ? this.j6v(accessKeyId, secretAccessKey, region, roleName) : $super.j6v.call(this, accessKeyId, secretAccessKey, region, roleName);
  };
  protoOf(AWSAuth).toString = function () {
    return 'AWSAuth(accessKeyId=' + this.accessKeyId + ', secretAccessKey=' + this.secretAccessKey + ', region=' + this.region + ', roleName=' + this.roleName + ')';
  };
  protoOf(AWSAuth).hashCode = function () {
    var result = this.accessKeyId == null ? 0 : getStringHashCode(this.accessKeyId);
    result = imul(result, 31) + (this.secretAccessKey == null ? 0 : getStringHashCode(this.secretAccessKey)) | 0;
    result = imul(result, 31) + (this.region == null ? 0 : getStringHashCode(this.region)) | 0;
    result = imul(result, 31) + (this.roleName == null ? 0 : getStringHashCode(this.roleName)) | 0;
    return result;
  };
  protoOf(AWSAuth).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AWSAuth))
      return false;
    var tmp0_other_with_cast = other instanceof AWSAuth ? other : THROW_CCE();
    if (!(this.accessKeyId == tmp0_other_with_cast.accessKeyId))
      return false;
    if (!(this.secretAccessKey == tmp0_other_with_cast.secretAccessKey))
      return false;
    if (!(this.region == tmp0_other_with_cast.region))
      return false;
    if (!(this.roleName == tmp0_other_with_cast.roleName))
      return false;
    return true;
  };
  function AWSKeyMetadata_init_$Init$(accessKeyId, secretAccessKey, region, roleName, $this) {
    accessKeyId = accessKeyId === VOID ? null : accessKeyId;
    secretAccessKey = secretAccessKey === VOID ? null : secretAccessKey;
    region = region === VOID ? null : region;
    roleName = roleName === VOID ? null : roleName;
    AWSKeyMetadata.call($this, new AWSAuth(accessKeyId, secretAccessKey, region, roleName));
    return $this;
  }
  function AWSKeyMetadata_init_$Create$(accessKeyId, secretAccessKey, region, roleName) {
    return AWSKeyMetadata_init_$Init$(accessKeyId, secretAccessKey, region, roleName, objectCreate(protoOf(AWSKeyMetadata)));
  }
  function Companion_10() {
  }
  var Companion_instance_15;
  function Companion_getInstance_15() {
    return Companion_instance_15;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.aws.AWSKeyMetadata', this, 1);
    tmp0_serialDesc.v28('auth', false);
    this.k6v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).l6v = function (encoder, value) {
    var tmp0_desc = this.k6v_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.y22(tmp0_desc, 0, $serializer_getInstance_5(), value.m6v_1);
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_6).v1x = function (encoder, value) {
    return this.l6v(encoder, value instanceof AWSKeyMetadata ? value : THROW_CCE());
  };
  protoOf($serializer_6).w1x = function (decoder) {
    var tmp0_desc = this.k6v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.h21(tmp0_desc);
    if (tmp5_input.x21()) {
      tmp4_local0 = tmp5_input.t21(tmp0_desc, 0, $serializer_getInstance_5(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.t21(tmp0_desc, 0, $serializer_getInstance_5(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.i21(tmp0_desc);
    return AWSKeyMetadata_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_6).u1x = function () {
    return this.k6v_1;
  };
  protoOf($serializer_6).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_5()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function AWSKeyMetadata_init_$Init$_0(seen0, auth, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_6().k6v_1);
    }
    $this.m6v_1 = auth;
    return $this;
  }
  function AWSKeyMetadata_init_$Create$_0(seen0, auth, serializationConstructorMarker) {
    return AWSKeyMetadata_init_$Init$_0(seen0, auth, serializationConstructorMarker, objectCreate(protoOf(AWSKeyMetadata)));
  }
  function AWSKeyMetadata(auth) {
    this.m6v_1 = auth;
  }
  protoOf(AWSKeyMetadata).toString = function () {
    return 'AWSKeyMetadata(auth=' + this.m6v_1.toString() + ')';
  };
  protoOf(AWSKeyMetadata).hashCode = function () {
    return this.m6v_1.hashCode();
  };
  protoOf(AWSKeyMetadata).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AWSKeyMetadata))
      return false;
    var tmp0_other_with_cast = other instanceof AWSKeyMetadata ? other : THROW_CCE();
    if (!this.m6v_1.equals(tmp0_other_with_cast.m6v_1))
      return false;
    return true;
  };
  function get_logger() {
    _init_properties_AWSKeyRestAPI_kt__9umudq();
    return logger;
  }
  var logger;
  function set__accessAWS(_set____db54di) {
    _init_properties_AWSKeyRestAPI_kt__9umudq();
    _accessAWS = _set____db54di;
  }
  function get__accessAWS() {
    _init_properties_AWSKeyRestAPI_kt__9umudq();
    return _accessAWS;
  }
  var _accessAWS;
  function set_timeoutAt(_set____db54di) {
    _init_properties_AWSKeyRestAPI_kt__9umudq();
    timeoutAt = _set____db54di;
  }
  function get_timeoutAt() {
    _init_properties_AWSKeyRestAPI_kt__9umudq();
    return timeoutAt;
  }
  var timeoutAt;
  function awsJsonDataBody($this, _this__u8e3s4, $completion) {
    var tmp = new $awsJsonDataBodyCOROUTINE$19($this, _this__u8e3s4, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function keyTypeToAwsKeyMapping($this, type) {
    var tmp;
    switch (type.r2_1) {
      case 2:
        tmp = 'ECC_NIST_P256';
        break;
      case 1:
        tmp = 'ECC_SECG_P256K1';
        break;
      case 3:
        tmp = 'RSA_2048';
        break;
      default:
        throw new KeyTypeNotSupportedException(type.q2_1);
    }
    return tmp;
  }
  function awsKeyToKeyTypeMapping($this, type) {
    var tmp;
    switch (type) {
      case 'ECC_NIST_P256':
        tmp = KeyType_secp256r1_getInstance();
        break;
      case 'ECC_SECG_P256K1':
        tmp = KeyType_secp256k1_getInstance();
        break;
      case 'RSA_2048':
        tmp = KeyType_RSA_getInstance();
        break;
      default:
        throw new KeyTypeNotSupportedException(type);
    }
    return tmp;
  }
  function AWSKeyRestAPI$Companion$$childSerializers$_anonymous__9xrt8a() {
    return Companion_getInstance_13().s4p();
  }
  function AWSKeyRestAPI$Companion$getIMDSv2Token$lambda($ttlSeconds) {
    return function ($this$headers) {
      $this$headers.k2o('X-aws-ec2-metadata-token-ttl-seconds', $ttlSeconds.toString());
      return Unit_instance;
    };
  }
  function AWSKeyRestAPI$Companion$getIMDSv2Token$lambda_0($token) {
    return function () {
      return 'AWS TOKEN: ' + $token.toString();
    };
  }
  function AWSKeyRestAPI$Companion$getRoleName$lambda($token) {
    return function ($this$headers) {
      $this$headers.k2o('X-aws-ec2-metadata-token', $token);
      return Unit_instance;
    };
  }
  function AWSKeyRestAPI$Companion$getRoleName$lambda_0($roleName) {
    return function () {
      return 'AWS Role Name: ' + $roleName.toString();
    };
  }
  function AWSKeyRestAPI$Companion$getTemporaryCredentials$lambda($token) {
    return function ($this$headers) {
      $this$headers.k2o('X-aws-ec2-metadata-token', $token);
      return Unit_instance;
    };
  }
  function AWSKeyRestAPI$Companion$getPublicKey$lambda($awsKmsUrl) {
    return function () {
      return 'Calling AWS KMS (' + $awsKmsUrl + ') - TrentService.GetPublicKey';
    };
  }
  function AWSKeyRestAPI$Companion$getPublicKey$lambda_0($headers, $awsKmsUrl) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $headers.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var key = element.y();
        // Inline function 'kotlin.collections.component2' call
        var value = element.z();
        $this$headers.k2o(key, value);
      }
      $this$headers.k2o(HttpHeaders_getInstance().b2w_1, $awsKmsUrl);
      $this$headers.k2o('X-Amz-Target', 'TrentService.GetPublicKey');
      var tmp0_safe_receiver = get__accessAWS();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q6w_1;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_0;
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(tmp1_safe_receiver) > 0) {
          tmp_0 = tmp1_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp = tmp_0;
      }
      var tmp2_safe_receiver = tmp;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$headers.k2o('X-Amz-Security-Token', tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function AWSKeyRestAPI$Companion$awsJsonDataBody$lambda($this_awsJsonDataBody) {
    return function () {
      return 'AWS server (URL: ' + get_request($this_awsJsonDataBody).t3j().toString() + ') returned an invalid response: ';
    };
  }
  function AWSKeyRestAPI$Companion$generate$lambda($awsKmsUrl) {
    return function () {
      return 'Calling AWS KMS (' + $awsKmsUrl + ') - TrentService.CreateKey';
    };
  }
  function AWSKeyRestAPI$Companion$generate$lambda_0($headers, $awsKmsUrl) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $headers.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var key = element.y();
        // Inline function 'kotlin.collections.component2' call
        var value = element.z();
        $this$headers.k2o(key, value);
      }
      $this$headers.k2o(HttpHeaders_getInstance().b2w_1, $awsKmsUrl);
      $this$headers.k2o('X-Amz-Target', 'TrentService.CreateKey');
      var tmp0_safe_receiver = get__accessAWS();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q6w_1;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_0;
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(tmp1_safe_receiver) > 0) {
          tmp_0 = tmp1_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp = tmp_0;
      }
      var tmp2_safe_receiver = tmp;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$headers.k2o('X-Amz-Security-Token', tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda($config, $keyId, resultContinuation) {
    this.b6x_1 = $config;
    this.c6x_1 = $keyId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda).q6h = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda).yb = function ($completion) {
    return this.q6h($completion);
  };
  protoOf(AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = Companion_getInstance_16().d6x(this.b6x_1, this.c6x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda(this.b6x_1, this.c6x_1, completion);
  };
  function AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda_0($config, $keyId, resultContinuation) {
    var i = new AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda($config, $keyId, resultContinuation);
    var l = function ($completion) {
      return i.q6h($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $authAccessCOROUTINE$13(_this__u8e3s4, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m6x_1 = _this__u8e3s4;
    this.n6x_1 = config;
  }
  protoOf($authAccessCOROUTINE$13).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            var tmp_0 = this;
            var tmp_1;
            var tmp0_safe_receiver = this.n6x_1.m6v_1.accessKeyId;
            var tmp_2;
            if (tmp0_safe_receiver == null) {
              tmp_2 = null;
            } else {
              tmp_2 = charSequenceLength(tmp0_safe_receiver) > 0;
            }

            if (tmp_2 === true) {
              var tmp1_safe_receiver = this.n6x_1.m6v_1.secretAccessKey;
              var tmp_3;
              if (tmp1_safe_receiver == null) {
                tmp_3 = null;
              } else {
                tmp_3 = charSequenceLength(tmp1_safe_receiver) > 0;
              }
              tmp_1 = tmp_3 === true;
            } else {
              tmp_1 = false;
            }

            tmp_0.o6x_1 = tmp_1;
            if (this.o6x_1) {
              set__accessAWS(new AWSAuthConfiguration(this.n6x_1.m6v_1.accessKeyId, this.n6x_1.m6v_1.secretAccessKey, this.n6x_1.m6v_1.region, null, null, null));
              set_timeoutAt(null);
              this.l9_1 = 5;
              continue $sm;
            } else {
              this.l9_1 = 1;
              suspendResult = this.m6x_1.getIMDSv2Token$default(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.p6x_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.m6x_1.s6x(this.p6x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q6x_1 = suspendResult;
            this.r6x_1 = this.n6x_1.m6v_1.roleName;
            var tmp_4;
            var tmp2_safe_receiver = this.r6x_1;
            var tmp_5;
            if (tmp2_safe_receiver == null) {
              tmp_5 = null;
            } else {
              tmp_5 = charSequenceLength(tmp2_safe_receiver) > 0;
            }

            if (tmp_5 === true) {
              tmp_4 = !(this.r6x_1 === this.q6x_1);
            } else {
              tmp_4 = false;
            }

            if (tmp_4) {
              throw IllegalArgumentException_init_$Create$('Role name mismatch please check the role name provided.');
            }

            this.l9_1 = 3;
            suspendResult = this.m6x_1.t6x(this.p6x_1, toString(this.r6x_1), toString(this.n6x_1.m6v_1.region), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            set__accessAWS(ARGUMENT);
            var tmp_6 = System_instance.g5q();
            Companion_getInstance();
            set_timeoutAt(tmp_6.eo(toDuration(3600, DurationUnit_SECONDS_getInstance())));
            this.l9_1 = 5;
            continue $sm;
          case 4:
            throw this.o9_1;
          case 5:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($authAccessCOROUTINE$13)['<set-state>'] = protoOf($authAccessCOROUTINE$13).s9;
  protoOf($authAccessCOROUTINE$13)['<get-state>'] = protoOf($authAccessCOROUTINE$13).t9;
  protoOf($authAccessCOROUTINE$13)['<set-exceptionState>'] = protoOf($authAccessCOROUTINE$13).u9;
  protoOf($authAccessCOROUTINE$13)['<get-exceptionState>'] = protoOf($authAccessCOROUTINE$13).v9;
  protoOf($authAccessCOROUTINE$13)['<set-result>'] = protoOf($authAccessCOROUTINE$13).w9;
  protoOf($authAccessCOROUTINE$13)['<get-result>'] = protoOf($authAccessCOROUTINE$13).x9;
  protoOf($authAccessCOROUTINE$13)['<set-exception>'] = protoOf($authAccessCOROUTINE$13).y9;
  protoOf($authAccessCOROUTINE$13)['<get-exception>'] = protoOf($authAccessCOROUTINE$13).z9;
  protoOf($authAccessCOROUTINE$13)['<set-finallyPath>'] = protoOf($authAccessCOROUTINE$13).aa;
  protoOf($authAccessCOROUTINE$13)['<get-finallyPath>'] = protoOf($authAccessCOROUTINE$13).ba;
  protoOf($authAccessCOROUTINE$13)['<get-context>'] = protoOf($authAccessCOROUTINE$13).r9;
  function $getAccessCOROUTINE$14(_this__u8e3s4, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c6y_1 = _this__u8e3s4;
    this.d6y_1 = config;
  }
  protoOf($getAccessCOROUTINE$14).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0;
            if (get__accessAWS() == null || (!(get_timeoutAt() == null) && ensureNotNull(get_timeoutAt()).f67(System_instance.g5q()) <= 0)) {
              tmp_0 = true;
            } else {
              var tmp0_safe_receiver = get__accessAWS();
              tmp_0 = !(this.d6y_1.m6v_1.roleName == (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s6w_1));
            }

            if (tmp_0) {
              this.l9_1 = 1;
              suspendResult = this.c6y_1.e6y(this.d6y_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 2;
              continue $sm;
            }

          case 1:
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return get__accessAWS();
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getAccessCOROUTINE$14)['<set-state>'] = protoOf($getAccessCOROUTINE$14).s9;
  protoOf($getAccessCOROUTINE$14)['<get-state>'] = protoOf($getAccessCOROUTINE$14).t9;
  protoOf($getAccessCOROUTINE$14)['<set-exceptionState>'] = protoOf($getAccessCOROUTINE$14).u9;
  protoOf($getAccessCOROUTINE$14)['<get-exceptionState>'] = protoOf($getAccessCOROUTINE$14).v9;
  protoOf($getAccessCOROUTINE$14)['<set-result>'] = protoOf($getAccessCOROUTINE$14).w9;
  protoOf($getAccessCOROUTINE$14)['<get-result>'] = protoOf($getAccessCOROUTINE$14).x9;
  protoOf($getAccessCOROUTINE$14)['<set-exception>'] = protoOf($getAccessCOROUTINE$14).y9;
  protoOf($getAccessCOROUTINE$14)['<get-exception>'] = protoOf($getAccessCOROUTINE$14).z9;
  protoOf($getAccessCOROUTINE$14)['<set-finallyPath>'] = protoOf($getAccessCOROUTINE$14).aa;
  protoOf($getAccessCOROUTINE$14)['<get-finallyPath>'] = protoOf($getAccessCOROUTINE$14).ba;
  protoOf($getAccessCOROUTINE$14)['<get-context>'] = protoOf($getAccessCOROUTINE$14).r9;
  function $getIMDSv2TokenCOROUTINE$15(_this__u8e3s4, ttlSeconds, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n6y_1 = _this__u8e3s4;
    this.o6y_1 = ttlSeconds;
  }
  protoOf($getIMDSv2TokenCOROUTINE$15).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.p6y_1 = 'http://169.254.169.254/latest/api/token';
            var tmp_0 = this;
            tmp_0.q6y_1 = this.n6y_1.x6o_1;
            var tmp_1 = this;
            tmp_1.r6y_1 = this.p6y_1;
            this.s6y_1 = this.q6y_1;
            this.t6y_1 = this.r6y_1;
            var tmp_2 = this;
            tmp_2.u6y_1 = this.s6y_1;
            this.v6y_1 = this.u6y_1;
            var tmp_3 = this;
            tmp_3.w6y_1 = this.v6y_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.t6y_1);
            headers(this_0, AWSKeyRestAPI$Companion$getIMDSv2Token$lambda(this.o6y_1));
            tmp_4.x6y_1 = this_0;
            this.y6y_1 = this.w6y_1;
            this.z6y_1 = this.x6y_1;
            this.z6y_1.i3h_1 = Companion_getInstance_0().d2z_1;
            var tmp_5 = this;
            tmp_5.a6z_1 = this.y6y_1;
            var tmp_6 = this;
            tmp_6.b6z_1 = this.z6y_1;
            this.c6z_1 = this.a6z_1;
            this.d6z_1 = this.b6z_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.d6z_1, this.c6z_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e6z_1 = suspendResult;
            var tmp_7 = get_logger();
            tmp_7.k6b(AWSKeyRestAPI$Companion$getIMDSv2Token$lambda_0(this.e6z_1));
            this.l9_1 = 2;
            suspendResult = bodyAsText(this.e6z_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getIMDSv2TokenCOROUTINE$15)['<set-state>'] = protoOf($getIMDSv2TokenCOROUTINE$15).s9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-state>'] = protoOf($getIMDSv2TokenCOROUTINE$15).t9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<set-exceptionState>'] = protoOf($getIMDSv2TokenCOROUTINE$15).u9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-exceptionState>'] = protoOf($getIMDSv2TokenCOROUTINE$15).v9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<set-result>'] = protoOf($getIMDSv2TokenCOROUTINE$15).w9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-result>'] = protoOf($getIMDSv2TokenCOROUTINE$15).x9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<set-exception>'] = protoOf($getIMDSv2TokenCOROUTINE$15).y9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-exception>'] = protoOf($getIMDSv2TokenCOROUTINE$15).z9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<set-finallyPath>'] = protoOf($getIMDSv2TokenCOROUTINE$15).aa;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-finallyPath>'] = protoOf($getIMDSv2TokenCOROUTINE$15).ba;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-context>'] = protoOf($getIMDSv2TokenCOROUTINE$15).r9;
  function $getRoleNameCOROUTINE$16(_this__u8e3s4, token, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n6z_1 = _this__u8e3s4;
    this.o6z_1 = token;
  }
  protoOf($getRoleNameCOROUTINE$16).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.p6z_1 = 'http://169.254.169.254/latest/meta-data/iam/security-credentials/';
            var tmp_0 = this;
            tmp_0.q6z_1 = this.n6z_1.x6o_1;
            var tmp_1 = this;
            tmp_1.r6z_1 = this.p6z_1;
            this.s6z_1 = this.q6z_1;
            this.t6z_1 = this.r6z_1;
            var tmp_2 = this;
            tmp_2.u6z_1 = this.s6z_1;
            this.v6z_1 = this.u6z_1;
            var tmp_3 = this;
            tmp_3.w6z_1 = this.v6z_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.t6z_1);
            headers(this_0, AWSKeyRestAPI$Companion$getRoleName$lambda(this.o6z_1));
            tmp_4.x6z_1 = this_0;
            this.y6z_1 = this.w6z_1;
            this.z6z_1 = this.x6z_1;
            this.z6z_1.i3h_1 = Companion_getInstance_0().b2z_1;
            var tmp_5 = this;
            tmp_5.a70_1 = this.y6z_1;
            var tmp_6 = this;
            tmp_6.b70_1 = this.z6z_1;
            this.c70_1 = this.a70_1;
            this.d70_1 = this.b70_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.d70_1, this.c70_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e70_1 = suspendResult;
            var tmp_7 = get_logger();
            tmp_7.m6b(AWSKeyRestAPI$Companion$getRoleName$lambda_0(this.e70_1));
            this.l9_1 = 2;
            suspendResult = bodyAsText(this.e70_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getRoleNameCOROUTINE$16)['<set-state>'] = protoOf($getRoleNameCOROUTINE$16).s9;
  protoOf($getRoleNameCOROUTINE$16)['<get-state>'] = protoOf($getRoleNameCOROUTINE$16).t9;
  protoOf($getRoleNameCOROUTINE$16)['<set-exceptionState>'] = protoOf($getRoleNameCOROUTINE$16).u9;
  protoOf($getRoleNameCOROUTINE$16)['<get-exceptionState>'] = protoOf($getRoleNameCOROUTINE$16).v9;
  protoOf($getRoleNameCOROUTINE$16)['<set-result>'] = protoOf($getRoleNameCOROUTINE$16).w9;
  protoOf($getRoleNameCOROUTINE$16)['<get-result>'] = protoOf($getRoleNameCOROUTINE$16).x9;
  protoOf($getRoleNameCOROUTINE$16)['<set-exception>'] = protoOf($getRoleNameCOROUTINE$16).y9;
  protoOf($getRoleNameCOROUTINE$16)['<get-exception>'] = protoOf($getRoleNameCOROUTINE$16).z9;
  protoOf($getRoleNameCOROUTINE$16)['<set-finallyPath>'] = protoOf($getRoleNameCOROUTINE$16).aa;
  protoOf($getRoleNameCOROUTINE$16)['<get-finallyPath>'] = protoOf($getRoleNameCOROUTINE$16).ba;
  protoOf($getRoleNameCOROUTINE$16)['<get-context>'] = protoOf($getRoleNameCOROUTINE$16).r9;
  function $getTemporaryCredentialsCOROUTINE$17(_this__u8e3s4, token, roleName, region, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n70_1 = _this__u8e3s4;
    this.o70_1 = token;
    this.p70_1 = roleName;
    this.q70_1 = region;
  }
  protoOf($getTemporaryCredentialsCOROUTINE$17).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.r70_1 = 'http://169.254.169.254/latest/meta-data/iam/security-credentials/' + this.p70_1;
            var tmp_0 = this;
            tmp_0.s70_1 = this.n70_1.x6o_1;
            var tmp_1 = this;
            tmp_1.t70_1 = this.r70_1;
            this.u70_1 = this.s70_1;
            this.v70_1 = this.t70_1;
            var tmp_2 = this;
            tmp_2.w70_1 = this.u70_1;
            this.x70_1 = this.w70_1;
            var tmp_3 = this;
            tmp_3.y70_1 = this.x70_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.v70_1);
            headers(this_0, AWSKeyRestAPI$Companion$getTemporaryCredentials$lambda(this.o70_1));
            tmp_4.z70_1 = this_0;
            this.a71_1 = this.y70_1;
            this.b71_1 = this.z70_1;
            this.b71_1.i3h_1 = Companion_getInstance_0().b2z_1;
            var tmp_5 = this;
            tmp_5.c71_1 = this.a71_1;
            var tmp_6 = this;
            tmp_6.d71_1 = this.b71_1;
            this.e71_1 = this.c71_1;
            this.f71_1 = this.d71_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.f71_1, this.e71_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g71_1 = suspendResult;
            if (!this.g71_1.o34().equals(Companion_getInstance_1().v2z_1)) {
              throw IllegalArgumentException_init_$Create$('AWS server returned an invalid response: ' + this.g71_1.o34().toString() + ' - please check the role name and region');
            }

            this.h71_1 = Default_getInstance();
            this.l9_1 = 2;
            suspendResult = bodyAsText(this.g71_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = this.h71_1.q4n(ARGUMENT);
            var json = get_jsonObject(ARGUMENT_0);
            var tmp0_safe_receiver = json.we('AccessKeyId');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4p();
            var tmp_7;
            if (tmp2_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('AccessKeyId not found');
            } else {
              tmp_7 = tmp2_elvis_lhs;
            }

            var accessKeyId = tmp_7;
            var tmp3_safe_receiver = json.we('SecretAccessKey');
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonPrimitive(tmp3_safe_receiver);
            var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.v4p();
            var tmp_8;
            if (tmp5_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('SecretAccessKey not found');
            } else {
              tmp_8 = tmp5_elvis_lhs;
            }

            var secretAccessKey = tmp_8;
            var tmp6_safe_receiver = json.we('Token');
            var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonPrimitive(tmp6_safe_receiver);
            var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.v4p();
            var tmp_9;
            if (tmp8_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Token not found');
            } else {
              tmp_9 = tmp8_elvis_lhs;
            }

            var sessionToken = tmp_9;
            var tmp9_safe_receiver = json.we('Expiration');
            var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : get_jsonPrimitive(tmp9_safe_receiver);
            var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.v4p();
            var tmp_10;
            if (tmp11_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Expiration not found');
            } else {
              tmp_10 = tmp11_elvis_lhs;
            }

            var expiration = tmp_10;
            return new AWSAuthConfiguration(accessKeyId, secretAccessKey, this.q70_1, sessionToken, expiration, this.p70_1);
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<set-state>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).s9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-state>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).t9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<set-exceptionState>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).u9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-exceptionState>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).v9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<set-result>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).w9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-result>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).x9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<set-exception>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).y9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-exception>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).z9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<set-finallyPath>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).aa;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-finallyPath>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).ba;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-context>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).r9;
  function $getPublicKeyCOROUTINE$18(_this__u8e3s4, config, keyId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q71_1 = _this__u8e3s4;
    this.r71_1 = config;
    this.s71_1 = keyId;
  }
  protoOf($getPublicKeyCOROUTINE$18).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 5;
            this.t71_1 = Companion_getInstance_0().c2z_1;
            this.u71_1 = trimMargin(trimIndent('\n{\n"KeyId": "' + this.s71_1 + '"\n}\n'));
            this.v71_1 = this.q71_1.buildSigV4Headers(this.t71_1, this.u71_1, this.r71_1);
            this.w71_1 = 'kms.' + this.r71_1.m6v_1.region + '.amazonaws.com';
            var tmp_0 = get_logger();
            tmp_0.m6b(AWSKeyRestAPI$Companion$getPublicKey$lambda(this.w71_1));
            var tmp_1 = this;
            tmp_1.x71_1 = this.q71_1.x6o_1;
            var tmp_2 = this;
            tmp_2.y71_1 = 'https://' + this.w71_1 + '/';
            this.z71_1 = this.x71_1;
            this.a72_1 = this.y71_1;
            var tmp_3 = this;
            tmp_3.b72_1 = this.z71_1;
            this.c72_1 = this.b72_1;
            var tmp_4 = this;
            tmp_4.d72_1 = this.c72_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.a72_1);
            headers(this_0, AWSKeyRestAPI$Companion$getPublicKey$lambda_0(this.v71_1, this.w71_1));
            var body = this.u71_1;
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_6 = PrimitiveClasses_getInstance().ld();
              var tmp_7;
              try {
                tmp_7 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
              this_0.d3n(new TypeInfo(tmp_6, tmp_7));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_9 = PrimitiveClasses_getInstance().ld();
                var tmp_10;
                try {
                  tmp_10 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
                this_0.d3n(new TypeInfo(tmp_9, tmp_10));
              }
            }

            tmp_5.e72_1 = this_0;
            this.f72_1 = this.d72_1;
            this.g72_1 = this.e72_1;
            this.g72_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_12 = this;
            tmp_12.h72_1 = this.f72_1;
            var tmp_13 = this;
            tmp_13.i72_1 = this.g72_1;
            this.j72_1 = this.h72_1;
            this.k72_1 = this.i72_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.k72_1, this.j72_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l72_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = awsJsonDataBody(this.q71_1, this.l72_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m72_1 = suspendResult;
            var tmp_14 = this;
            var tmp0_safe_receiver = this.m72_1.we('PublicKey');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            tmp_14.n72_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4p();
            var this_1 = this.n72_1;
            if (this_1 == null || charSequenceLength(this_1) === 0)
              throw new KeyNotFoundException(VOID, 'Could not determine PublicKey');
            this.o72_1 = trimIndent('\n-----BEGIN PUBLIC KEY-----\n' + this.n72_1 + '\n-----END PUBLIC KEY-----\n');
            this.l9_1 = 3;
            suspendResult = Companion_instance_31.p72(this.o72_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 4;
            continue $sm;
          case 4:
            var keyJWK = suspendResult.vo_1;
            throwOnFailure(keyJWK);
            var tmp_15 = _Result___get_value__impl__bjfvqg(keyJWK);
            return (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
          case 5:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 5) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getPublicKeyCOROUTINE$18)['<set-state>'] = protoOf($getPublicKeyCOROUTINE$18).s9;
  protoOf($getPublicKeyCOROUTINE$18)['<get-state>'] = protoOf($getPublicKeyCOROUTINE$18).t9;
  protoOf($getPublicKeyCOROUTINE$18)['<set-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$18).u9;
  protoOf($getPublicKeyCOROUTINE$18)['<get-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$18).v9;
  protoOf($getPublicKeyCOROUTINE$18)['<set-result>'] = protoOf($getPublicKeyCOROUTINE$18).w9;
  protoOf($getPublicKeyCOROUTINE$18)['<get-result>'] = protoOf($getPublicKeyCOROUTINE$18).x9;
  protoOf($getPublicKeyCOROUTINE$18)['<set-exception>'] = protoOf($getPublicKeyCOROUTINE$18).y9;
  protoOf($getPublicKeyCOROUTINE$18)['<get-exception>'] = protoOf($getPublicKeyCOROUTINE$18).z9;
  protoOf($getPublicKeyCOROUTINE$18)['<set-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$18).aa;
  protoOf($getPublicKeyCOROUTINE$18)['<get-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$18).ba;
  protoOf($getPublicKeyCOROUTINE$18)['<get-context>'] = protoOf($getPublicKeyCOROUTINE$18).r9;
  function $awsJsonDataBodyCOROUTINE$19(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v6v_1 = _this__u8e3s4;
    this.w6v_1 = _this__u8e3s4_0;
  }
  protoOf($awsJsonDataBodyCOROUTINE$19).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 6;
            var tmp_0 = this;
            tmp_0.x6v_1 = AWSKeyRestAPI$Companion$awsJsonDataBody$lambda(this.w6v_1);
            var tmp_1 = this;
            tmp_1.y6v_1 = this.w6v_1;
            this.z6v_1 = this.y6v_1;
            this.m9_1 = 2;
            var tmp_2 = this;
            tmp_2.b6w_1 = Companion_instance_1;
            var tmp_3 = this;
            tmp_3.c6w_1 = this.z6v_1;
            this.d6w_1 = this.c6w_1;
            this.l9_1 = 1;
            suspendResult = bodyAsText(this.d6w_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e6w_1 = suspendResult;
            this.f6w_1 = get_jsonObject(Default_getInstance().q4n(this.e6w_1));
            var tmp_4 = this;
            this.b6w_1;
            var value = this.f6w_1;
            tmp_4.a6w_1 = _Result___init__impl__xyqfz8(value);
            this.m9_1 = 6;
            this.l9_1 = 3;
            continue $sm;
          case 2:
            this.m9_1 = 6;
            var tmp_5 = this.o9_1;
            if (tmp_5 instanceof Error) {
              this.g6w_1 = this.o9_1;
              var tmp_6 = this;
              var exception = this.g6w_1;
              tmp_6.a6w_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.l9_1 = 3;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 3:
            this.m9_1 = 6;
            this.h6w_1 = this.a6w_1;
            this.i6w_1 = this.h6w_1;
            this.j6w_1 = Result__exceptionOrNull_impl_p6xea9(this.i6w_1);
            if (this.j6w_1 == null) {
              var tmp_7 = this;
              var tmp_8 = _Result___get_value__impl__bjfvqg(this.i6w_1);
              tmp_7.k6w_1 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
              this.l9_1 = 5;
              continue $sm;
            } else {
              var tmp_9 = this;
              tmp_9.l6w_1 = this.j6w_1;
              this.m6w_1 = this.l6w_1;
              this.l9_1 = 4;
              suspendResult = bodyAsText(this.w6v_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            var bodyStr = suspendResult;
            var tmp_10 = this;
            var tmp_11 = this.x6v_1();
            var tmp_12;
            if (charSequenceLength(bodyStr) === 0) {
              tmp_12 = 'empty response (instead of JSON data)';
            } else {
              tmp_12 = 'invalid response: ' + bodyStr;
            }

            throw IllegalArgumentException_init_$Create$(tmp_11 + tmp_12);
          case 5:
            return this.k6w_1;
          case 6:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 6) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $generateCOROUTINE$20(_this__u8e3s4, type, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y72_1 = _this__u8e3s4;
    this.z72_1 = type;
    this.a73_1 = config;
  }
  protoOf($generateCOROUTINE$20).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 7;
            var tmp_0;
            var this_0 = this.a73_1.m6v_1.accessKeyId;
            if (this_0 == null || isBlank(this_0)) {
              var this_1 = this.a73_1.m6v_1.secretAccessKey;
              tmp_0 = this_1 == null || isBlank(this_1);
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              this.l9_1 = 1;
              suspendResult = this.y72_1.y73(this.a73_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 2;
              continue $sm;
            }

          case 1:
            this.l9_1 = 2;
            continue $sm;
          case 2:
            this.b73_1 = keyTypeToAwsKeyMapping(this.y72_1, this.z72_1);
            this.c73_1 = trimMargin(trimIndent('{\n"KeySpec":"' + this.b73_1 + '",\n"KeyUsage":"SIGN_VERIFY"\n}\n'));
            this.d73_1 = this.y72_1.buildSigV4Headers(Companion_getInstance_0().c2z_1, this.c73_1, this.a73_1);
            this.e73_1 = 'kms.' + this.a73_1.m6v_1.region + '.amazonaws.com';
            var tmp_1 = get_logger();
            tmp_1.m6b(AWSKeyRestAPI$Companion$generate$lambda(this.e73_1));
            var tmp_2 = this;
            tmp_2.f73_1 = this.y72_1.x6o_1;
            var tmp_3 = this;
            tmp_3.g73_1 = 'https://' + this.e73_1 + '/';
            this.h73_1 = this.f73_1;
            this.i73_1 = this.g73_1;
            var tmp_4 = this;
            tmp_4.j73_1 = this.h73_1;
            this.k73_1 = this.j73_1;
            var tmp_5 = this;
            tmp_5.l73_1 = this.k73_1;
            var tmp_6 = this;
            var this_2 = new HttpRequestBuilder();
            url(this_2, this.i73_1);
            headers(this_2, AWSKeyRestAPI$Companion$generate$lambda_0(this.d73_1, this.e73_1));
            var body = this.c73_1;
            if (body == null) {
              this_2.k3h_1 = NullBody_instance;
              var tmp_7 = PrimitiveClasses_getInstance().ld();
              var tmp_8;
              try {
                tmp_8 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
              this_2.d3n(new TypeInfo(tmp_7, tmp_8));
            } else {
              if (body instanceof OutgoingContent) {
                this_2.k3h_1 = body;
                this_2.d3n(null);
              } else {
                this_2.k3h_1 = body;
                var tmp_10 = PrimitiveClasses_getInstance().ld();
                var tmp_11;
                try {
                  tmp_11 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
                this_2.d3n(new TypeInfo(tmp_10, tmp_11));
              }
            }

            tmp_6.m73_1 = this_2;
            this.n73_1 = this.l73_1;
            this.o73_1 = this.m73_1;
            this.o73_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_13 = this;
            tmp_13.p73_1 = this.n73_1;
            var tmp_14 = this;
            tmp_14.q73_1 = this.o73_1;
            this.r73_1 = this.p73_1;
            this.s73_1 = this.q73_1;
            this.l9_1 = 3;
            suspendResult = (new HttpStatement(this.s73_1, this.r73_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.t73_1 = suspendResult;
            this.l9_1 = 4;
            suspendResult = awsJsonDataBody(this.y72_1, this.t73_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.u73_1 = suspendResult;
            var tmp_15 = this;
            var tmp0_safe_receiver = this.u73_1.we('KeyMetadata');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.we('KeyId');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            tmp_15.v73_1 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.v4p();
            var this_3 = this.v73_1;
            if (this_3 == null || charSequenceLength(this_3) === 0)
              throw new KeyNotFoundException(VOID, 'Key ID could not be determined');
            this.l9_1 = 5;
            suspendResult = this.y72_1.d6x(this.a73_1, toString_0(this.v73_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.w73_1 = suspendResult;
            this.x73_1 = toString_0(this.v73_1);
            this.l9_1 = 6;
            suspendResult = this.w73_1.c6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            return new AWSKeyRestAPI(this.a73_1, this.x73_1, ARGUMENT, awsKeyToKeyTypeMapping(this.y72_1, this.b73_1));
          case 7:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 7) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($generateCOROUTINE$20)['<set-state>'] = protoOf($generateCOROUTINE$20).s9;
  protoOf($generateCOROUTINE$20)['<get-state>'] = protoOf($generateCOROUTINE$20).t9;
  protoOf($generateCOROUTINE$20)['<set-exceptionState>'] = protoOf($generateCOROUTINE$20).u9;
  protoOf($generateCOROUTINE$20)['<get-exceptionState>'] = protoOf($generateCOROUTINE$20).v9;
  protoOf($generateCOROUTINE$20)['<set-result>'] = protoOf($generateCOROUTINE$20).w9;
  protoOf($generateCOROUTINE$20)['<get-result>'] = protoOf($generateCOROUTINE$20).x9;
  protoOf($generateCOROUTINE$20)['<set-exception>'] = protoOf($generateCOROUTINE$20).y9;
  protoOf($generateCOROUTINE$20)['<get-exception>'] = protoOf($generateCOROUTINE$20).z9;
  protoOf($generateCOROUTINE$20)['<set-finallyPath>'] = protoOf($generateCOROUTINE$20).aa;
  protoOf($generateCOROUTINE$20)['<get-finallyPath>'] = protoOf($generateCOROUTINE$20).ba;
  protoOf($generateCOROUTINE$20)['<get-context>'] = protoOf($generateCOROUTINE$20).r9;
  function _get_awsSigningAlgorithm__z9hox6($this) {
    var tmp0 = $this.b74_1;
    // Inline function 'kotlin.getValue' call
    awsSigningAlgorithm$factory();
    return tmp0.z();
  }
  function Companion_11() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w6o_1 = [null, null, null, lazy(tmp_0, AWSKeyRestAPI$Companion$$childSerializers$_anonymous__9xrt8a)];
    this.x6o_1 = HttpClient();
  }
  protoOf(Companion_11).e6y = function (config, $completion) {
    var tmp = new $authAccessCOROUTINE$13(this, config, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Companion_11).y73 = function (config, $completion) {
    var tmp = new $getAccessCOROUTINE$14(this, config, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Companion_11).sha256Hex = function (data) {
    return toHexString(SHA256_init_$Create$().g6d(toByteArray_0(data)));
  };
  protoOf(Companion_11).hmacSHA256 = function (key, data) {
    return HmacSHA256_init_$Create$(key).u6c(toByteArray_0(data, Charsets_getInstance().r1w_1));
  };
  protoOf(Companion_11).sha256 = function (data) {
    return SHA256_init_$Create$().g6d(data);
  };
  protoOf(Companion_11).getSignatureKey = function (config, dateStamp) {
    var tmp0_safe_receiver = get__accessAWS();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o6w_1;
    var kDate = this.hmacSHA256(toByteArray_0('AWS4' + (tmp1_elvis_lhs == null ? ensureNotNull(config.m6v_1.secretAccessKey) : tmp1_elvis_lhs)), dateStamp);
    var kRegion = this.hmacSHA256(kDate, toString(config.m6v_1.region));
    var kService = this.hmacSHA256(kRegion, 'kms');
    return this.hmacSHA256(kService, 'aws4_request');
  };
  protoOf(Companion_11).createCanonicalRequest = function (method, canonicalUri, canonicalQueryString, canonicalHeaders, signedHeaders, payload) {
    var payloadHash = this.sha256Hex(payload);
    return trimMargin(trimIndent(method.j2z_1 + '\n' + canonicalUri + '\n' + canonicalQueryString + '\n' + canonicalHeaders + '\n' + signedHeaders + '\n' + payloadHash + '\n'));
  };
  protoOf(Companion_11).createStringToSign = function (algorithm, amzDate, credentialScope, canonicalRequest) {
    return trimMargin(trimIndent(algorithm + '\n' + amzDate + '\n' + credentialScope + '\n' + this.sha256Hex(canonicalRequest) + '\n'));
  };
  protoOf(Companion_11).generateSignature = function (signingKey, stringToSign) {
    return toHexString(this.hmacSHA256(signingKey, stringToSign));
  };
  protoOf(Companion_11).createAuthorizationHeader = function (algorithm, accessKey, credentialScope, signedHeaders, signature) {
    return algorithm + ' Credential=' + accessKey + '/' + credentialScope + ', SignedHeaders=' + signedHeaders + ', Signature=' + signature;
  };
  protoOf(Companion_11).buildSigV4Headers = function (method, payload, config) {
    var currentDateTime = toLocalDateTime(System_instance.g5q(), Companion_getInstance_2().w66_1);
    var dateStamp = replace(currentDateTime.k67().toString(), '-', '');
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var amzDate = replace(replace(toInstant(currentDateTime, Companion_getInstance_2().w66_1).toString(), '-', ''), ':', '').substring(0, 15) + 'Z';
    var canonicalUri = '/';
    var canonicalQueryString = '';
    var canonicalHeaders = 'content-type:application/x-amz-json-1.1\nhost:kms.' + config.m6v_1.region + '.amazonaws.com\nx-amz-date:' + amzDate + '\n';
    var signedHeaders = 'content-type;host;x-amz-date';
    var credentialScope = dateStamp + '/' + config.m6v_1.region + '/kms/aws4_request';
    var canonicalRequest = this.createCanonicalRequest(method, canonicalUri, canonicalQueryString, canonicalHeaders, signedHeaders, payload);
    var stringToSign = this.createStringToSign('AWS4-HMAC-SHA256', amzDate, credentialScope, canonicalRequest);
    var signingKey = this.getSignatureKey(config, dateStamp);
    var signature = this.generateSignature(signingKey, stringToSign);
    var tmp0_safe_receiver = get__accessAWS();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n6w_1;
    return mapOf([to('Authorization', this.createAuthorizationHeader('AWS4-HMAC-SHA256', tmp1_elvis_lhs == null ? ensureNotNull(config.m6v_1.accessKeyId) : tmp1_elvis_lhs, credentialScope, signedHeaders, signature)), to('x-amz-date', amzDate), to('content-type', 'application/x-amz-json-1.1')]);
  };
  protoOf(Companion_11).d74 = function (ttlSeconds, $completion) {
    var tmp = new $getIMDSv2TokenCOROUTINE$15(this, ttlSeconds, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Companion_11).getIMDSv2Token$default = function (ttlSeconds, $completion, $super) {
    ttlSeconds = ttlSeconds === VOID ? 21600 : ttlSeconds;
    return $super === VOID ? this.d74(ttlSeconds, $completion) : $super.d74.call(this, ttlSeconds, $completion);
  };
  protoOf(Companion_11).s6x = function (token, $completion) {
    var tmp = new $getRoleNameCOROUTINE$16(this, token, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Companion_11).t6x = function (token, roleName, region, $completion) {
    var tmp = new $getTemporaryCredentialsCOROUTINE$17(this, token, roleName, region, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Companion_11).d6x = function (config, keyId, $completion) {
    var tmp = new $getPublicKeyCOROUTINE$18(this, config, keyId, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Companion_11).y6o = function (type, config, $completion) {
    var tmp = new $generateCOROUTINE$20(this, type, config, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Companion_11).s4p = function () {
    return $serializer_getInstance_7();
  };
  protoOf(Companion_11).e74 = function (config, keyId) {
    var tmp = AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda_0(config, keyId, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_11();
    return Companion_instance_16;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('aws-rest-api', this, 4);
    tmp0_serialDesc.v28('config', false);
    tmp0_serialDesc.v28('id', false);
    tmp0_serialDesc.v28('_publicKey', true);
    tmp0_serialDesc.v28('_keyType', true);
    tmp0_serialDesc.w28(new JsonClassDiscriminator('type'));
    this.f74_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).g74 = function (encoder, value) {
    var tmp0_desc = this.f74_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_16().w6o_1;
    tmp1_output.y22(tmp0_desc, 0, $serializer_getInstance_6(), value.config);
    tmp1_output.w22(tmp0_desc, 1, value.id);
    if (tmp1_output.e23(tmp0_desc, 2) ? true : !(value.z73_1 == null)) {
      tmp1_output.a23(tmp0_desc, 2, StringSerializer_getInstance(), value.z73_1);
    }
    if (tmp1_output.e23(tmp0_desc, 3) ? true : !(value.a74_1 == null)) {
      tmp1_output.a23(tmp0_desc, 3, tmp2_cached[3].z(), value.a74_1);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_7).v1x = function (encoder, value) {
    return this.g74(encoder, value instanceof AWSKeyRestAPI ? value : THROW_CCE());
  };
  protoOf($serializer_7).w1x = function (decoder) {
    var tmp0_desc = this.f74_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp10_input = decoder.h21(tmp0_desc);
    var tmp11_cached = Companion_getInstance_16().w6o_1;
    if (tmp10_input.x21()) {
      tmp4_local0 = tmp10_input.t21(tmp0_desc, 0, $serializer_getInstance_6(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.r21(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.v21(tmp0_desc, 3, tmp11_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.t21(tmp0_desc, 0, $serializer_getInstance_6(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.r21(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.v21(tmp0_desc, 3, tmp11_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.i21(tmp0_desc);
    return AWSKeyRestAPI_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_7).u1x = function () {
    return this.f74_1;
  };
  protoOf($serializer_7).l29 = function () {
    var tmp0_cached = Companion_getInstance_16().w6o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_6(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].z())];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function AWSKeyRestAPI_init_$Init$(seen0, config, id, _publicKey, _keyType, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_7().f74_1);
    }
    Key_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.config = config;
    $this.id = id;
    if (0 === (seen0 & 4))
      $this.z73_1 = null;
    else
      $this.z73_1 = _publicKey;
    if (0 === (seen0 & 8))
      $this.a74_1 = null;
    else
      $this.a74_1 = _keyType;
    var tmp = $this;
    tmp.b74_1 = lazy_0(AWSKeyRestAPI$_init_$lambda_k94i1z($this));
    $this.c74_1 = null;
    return $this;
  }
  function AWSKeyRestAPI_init_$Create$(seen0, config, id, _publicKey, _keyType, serializationConstructorMarker) {
    return AWSKeyRestAPI_init_$Init$(seen0, config, id, _publicKey, _keyType, serializationConstructorMarker, objectCreate(protoOf(AWSKeyRestAPI)));
  }
  function AWSKeyRestAPI$awsSigningAlgorithm$delegate$lambda(this$0) {
    return function () {
      var tmp;
      switch (this$0.keyType.r2_1) {
        case 2:
        case 1:
          tmp = 'ECDSA_SHA_256';
          break;
        case 3:
          tmp = 'RSASSA_PKCS1_V1_5_SHA_256';
          break;
        default:
          throw new KeyTypeNotSupportedException(this$0.keyType.q2_1);
      }
      return tmp;
    };
  }
  function AWSKeyRestAPI$signRaw$lambda($awsKmsUrl) {
    return function () {
      return 'Calling AWS KMS (' + $awsKmsUrl + ') - TrentService.Sign';
    };
  }
  function AWSKeyRestAPI$signRaw$lambda_0($headers, this$0) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $headers.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var key = element.y();
        // Inline function 'kotlin.collections.component2' call
        var value = element.z();
        $this$headers.k2o(key, value);
      }
      $this$headers.k2o(HttpHeaders_getInstance().b2w_1, 'kms.' + this$0.config.m6v_1.region + '.amazonaws.com');
      $this$headers.k2o('X-Amz-Target', 'TrentService.Sign');
      var tmp0_safe_receiver = get__accessAWS();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q6w_1;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_0;
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(tmp1_safe_receiver) > 0) {
          tmp_0 = tmp1_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp = tmp_0;
      }
      var tmp2_safe_receiver = tmp;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$headers.k2o('X-Amz-Security-Token', tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function AWSKeyRestAPI$verifyRaw$lambda($awsKmsUrl) {
    return function () {
      return 'Calling AWS KMS (' + $awsKmsUrl + ') - TrentService.Verify';
    };
  }
  function AWSKeyRestAPI$verifyRaw$lambda_0($headers, $awsKmsUrl) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $headers.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var key = element.y();
        // Inline function 'kotlin.collections.component2' call
        var value = element.z();
        $this$headers.k2o(key, value);
      }
      $this$headers.k2o(HttpHeaders_getInstance().b2w_1, $awsKmsUrl);
      $this$headers.k2o('X-Amz-Target', 'TrentService.Verify');
      var tmp0_safe_receiver = get__accessAWS();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q6w_1;
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.takeIf' call
        var tmp_0;
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(tmp1_safe_receiver) > 0) {
          tmp_0 = tmp1_safe_receiver;
        } else {
          tmp_0 = null;
        }
        tmp = tmp_0;
      }
      var tmp2_safe_receiver = tmp;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this$headers.k2o('X-Amz-Security-Token', tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function AWSKeyRestAPI$deleteKey$lambda($awsKmsUrl) {
    return function () {
      return 'Calling AWS KMS (' + $awsKmsUrl + ') - TrentService.ScheduleKeyDeletion';
    };
  }
  function AWSKeyRestAPI$deleteKey$lambda_0($headers, $awsKmsUrl) {
    return function ($this$headers) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $headers.x().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var key = element.y();
        // Inline function 'kotlin.collections.component2' call
        var value = element.z();
        $this$headers.k2o(key, value);
      }
      $this$headers.k2o(HttpHeaders_getInstance().b2w_1, $awsKmsUrl);
      $this$headers.k2o('X-Amz-Target', 'TrentService.ScheduleKeyDeletion');
      return Unit_instance;
    };
  }
  function AWSKeyRestAPI$deleteKey$lambda_1(this$0) {
    return function () {
      return 'Key ' + this$0.id + ' scheduled for deletion';
    };
  }
  function AWSKeyRestAPI$deleteKeyAsync$slambda(this$0, resultContinuation) {
    this.p74_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$deleteKeyAsync$slambda).m6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$deleteKeyAsync$slambda).yb = function ($completion) {
    return this.m6f($completion);
  };
  protoOf(AWSKeyRestAPI$deleteKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.p74_1.n6f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$deleteKeyAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$deleteKeyAsync$slambda(this.p74_1, completion);
  };
  function AWSKeyRestAPI$deleteKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$deleteKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.y74_1 = this$0;
    this.z74_1 = $plaintext;
    this.a75_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$signJwsAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$signJwsAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(AWSKeyRestAPI$signJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.y74_1.a6g(this.z74_1, this.a75_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$signJwsAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$signJwsAsync$slambda(this.y74_1, this.z74_1, this.a75_1, completion);
  };
  function AWSKeyRestAPI$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new AWSKeyRestAPI$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$signRawAsync$slambda(this$0, $plaintext, resultContinuation) {
    this.j75_1 = this$0;
    this.k75_1 = $plaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$signRawAsync$slambda).k6l = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$signRawAsync$slambda).yb = function ($completion) {
    return this.k6l($completion);
  };
  protoOf(AWSKeyRestAPI$signRawAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.j75_1.l75(this.k75_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$signRawAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$signRawAsync$slambda(this.j75_1, this.k75_1, completion);
  };
  function AWSKeyRestAPI$signRawAsync$slambda_0(this$0, $plaintext, resultContinuation) {
    var i = new AWSKeyRestAPI$signRawAsync$slambda(this$0, $plaintext, resultContinuation);
    var l = function ($completion) {
      return i.k6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.u75_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$getKeyIdAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$getKeyIdAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(AWSKeyRestAPI$getKeyIdAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.u75_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$getKeyIdAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$getKeyIdAsync$slambda(this.u75_1, completion);
  };
  function AWSKeyRestAPI$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$getPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.d76_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$getPublicKeyAsync$slambda).q6h = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$getPublicKeyAsync$slambda).yb = function ($completion) {
    return this.q6h($completion);
  };
  protoOf(AWSKeyRestAPI$getPublicKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.d76_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$getPublicKeyAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$getPublicKeyAsync$slambda(this.d76_1, completion);
  };
  function AWSKeyRestAPI$getPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$getPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.q6h($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$getMetaAsync$slambda(this$0, resultContinuation) {
    this.m76_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$getMetaAsync$slambda).n76 = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$getMetaAsync$slambda).yb = function ($completion) {
    return this.n76($completion);
  };
  protoOf(AWSKeyRestAPI$getMetaAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.m76_1.o76(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$getMetaAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$getMetaAsync$slambda(this.m76_1, completion);
  };
  function AWSKeyRestAPI$getMetaAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$getMetaAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.n76($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.x76_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$exportPEMAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$exportPEMAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(AWSKeyRestAPI$exportPEMAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.x76_1.m6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$exportPEMAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$exportPEMAsync$slambda(this.x76_1, completion);
  };
  function AWSKeyRestAPI$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.g77_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$getThumbprintAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$getThumbprintAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(AWSKeyRestAPI$getThumbprintAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.g77_1.w6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$getThumbprintAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$getThumbprintAsync$slambda(this.g77_1, completion);
  };
  function AWSKeyRestAPI$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.p77_1 = this$0;
    this.q77_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$verifyJwsAsync$slambda).r6j = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AWSKeyRestAPI$verifyJwsAsync$slambda).yb = function ($completion) {
    return this.r6j($completion);
  };
  protoOf(AWSKeyRestAPI$verifyJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.p77_1.s6j(this.q77_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$verifyJwsAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$verifyJwsAsync$slambda(this.p77_1, this.q77_1, completion);
  };
  function AWSKeyRestAPI$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new AWSKeyRestAPI$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.r6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.z77_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$exportJWKAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$exportJWKAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(AWSKeyRestAPI$exportJWKAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.z77_1.c6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$exportJWKAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$exportJWKAsync$slambda(this.z77_1, completion);
  };
  function AWSKeyRestAPI$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.i78_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$exportJWKObjectAsync$slambda).m6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$exportJWKObjectAsync$slambda).yb = function ($completion) {
    return this.m6k($completion);
  };
  protoOf(AWSKeyRestAPI$exportJWKObjectAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.i78_1.n6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$exportJWKObjectAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$exportJWKObjectAsync$slambda(this.i78_1, completion);
  };
  function AWSKeyRestAPI$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.r78_1 = this$0;
    this.s78_1 = $signed;
    this.t78_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$verifyRawAsync$slambda).z6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AWSKeyRestAPI$verifyRawAsync$slambda).yb = function ($completion) {
    return this.z6k($completion);
  };
  protoOf(AWSKeyRestAPI$verifyRawAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.r78_1.a6l(this.s78_1, this.t78_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$verifyRawAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$verifyRawAsync$slambda(this.r78_1, this.s78_1, this.t78_1, completion);
  };
  function AWSKeyRestAPI$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new AWSKeyRestAPI$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.z6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.c79_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda).k6l = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda).yb = function ($completion) {
    return this.k6l($completion);
  };
  protoOf(AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.c79_1.l6l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda).ha = function (completion) {
    return new AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda(this.c79_1, completion);
  };
  function AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.k6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$_init_$lambda_k94i1z(this$0) {
    return function () {
      var tmp;
      switch (this$0.keyType.r2_1) {
        case 2:
        case 1:
          tmp = 'ECDSA_SHA_256';
          break;
        case 3:
          tmp = 'RSASSA_PKCS1_V1_5_SHA_256';
          break;
        default:
          throw new KeyTypeNotSupportedException(this$0.keyType.q2_1);
      }
      return tmp;
    };
  }
  function $getKeyIdCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l79_1 = _this__u8e3s4;
  }
  protoOf($getKeyIdCOROUTINE$5).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.l79_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m79_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.m79_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getKeyIdCOROUTINE$5)['<set-state>'] = protoOf($getKeyIdCOROUTINE$5).s9;
  protoOf($getKeyIdCOROUTINE$5)['<get-state>'] = protoOf($getKeyIdCOROUTINE$5).t9;
  protoOf($getKeyIdCOROUTINE$5)['<set-exceptionState>'] = protoOf($getKeyIdCOROUTINE$5).u9;
  protoOf($getKeyIdCOROUTINE$5)['<get-exceptionState>'] = protoOf($getKeyIdCOROUTINE$5).v9;
  protoOf($getKeyIdCOROUTINE$5)['<set-result>'] = protoOf($getKeyIdCOROUTINE$5).w9;
  protoOf($getKeyIdCOROUTINE$5)['<get-result>'] = protoOf($getKeyIdCOROUTINE$5).x9;
  protoOf($getKeyIdCOROUTINE$5)['<set-exception>'] = protoOf($getKeyIdCOROUTINE$5).y9;
  protoOf($getKeyIdCOROUTINE$5)['<get-exception>'] = protoOf($getKeyIdCOROUTINE$5).z9;
  protoOf($getKeyIdCOROUTINE$5)['<set-finallyPath>'] = protoOf($getKeyIdCOROUTINE$5).aa;
  protoOf($getKeyIdCOROUTINE$5)['<get-finallyPath>'] = protoOf($getKeyIdCOROUTINE$5).ba;
  protoOf($getKeyIdCOROUTINE$5)['<get-context>'] = protoOf($getKeyIdCOROUTINE$5).r9;
  function $signRawCOROUTINE$6(_this__u8e3s4, plaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v79_1 = _this__u8e3s4;
    this.w79_1 = plaintext;
  }
  protoOf($signRawCOROUTINE$6).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            if (!endsWith(_get_awsSigningAlgorithm__z9hox6(this.v79_1), '_SHA_256')) {
              throw new SigningException('failed to sign - unsupported hashing algorithm: ' + _get_awsSigningAlgorithm__z9hox6(this.v79_1));
            }

            this.x79_1 = Companion_getInstance_16().sha256(this.w79_1);
            this.y79_1 = trimMargin(trimIndent('\n{\n"KeyId":"' + this.v79_1.id + '",\n"Message":"' + encodeBase64(this.x79_1) + '",\n"MessageType":"DIGEST",\n"SigningAlgorithm":"' + _get_awsSigningAlgorithm__z9hox6(this.v79_1) + '"\n}\n'));
            this.z79_1 = Companion_getInstance_16().buildSigV4Headers(Companion_getInstance_0().c2z_1, this.y79_1, this.v79_1.config);
            this.a7a_1 = 'kms.' + this.v79_1.config.m6v_1.region + '.amazonaws.com';
            var tmp_0 = get_logger();
            tmp_0.m6b(AWSKeyRestAPI$signRaw$lambda(this.a7a_1));
            this.b7a_1 = Companion_getInstance_16();
            var tmp_1 = this;
            tmp_1.c7a_1 = Companion_getInstance_16().x6o_1;
            var tmp_2 = this;
            tmp_2.d7a_1 = 'https://' + this.a7a_1 + '/';
            this.e7a_1 = this.c7a_1;
            this.f7a_1 = this.d7a_1;
            var tmp_3 = this;
            tmp_3.g7a_1 = this.e7a_1;
            this.h7a_1 = this.g7a_1;
            var tmp_4 = this;
            tmp_4.i7a_1 = this.h7a_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.f7a_1);
            headers(this_0, AWSKeyRestAPI$signRaw$lambda_0(this.z79_1, this.v79_1));
            var body = this.y79_1;
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_6 = PrimitiveClasses_getInstance().ld();
              var tmp_7;
              try {
                tmp_7 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
              this_0.d3n(new TypeInfo(tmp_6, tmp_7));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_9 = PrimitiveClasses_getInstance().ld();
                var tmp_10;
                try {
                  tmp_10 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
                this_0.d3n(new TypeInfo(tmp_9, tmp_10));
              }
            }

            tmp_5.j7a_1 = this_0;
            this.k7a_1 = this.i7a_1;
            this.l7a_1 = this.j7a_1;
            this.l7a_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_12 = this;
            tmp_12.m7a_1 = this.k7a_1;
            var tmp_13 = this;
            tmp_13.n7a_1 = this.l7a_1;
            this.o7a_1 = this.m7a_1;
            this.p7a_1 = this.n7a_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.p7a_1, this.o7a_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q7a_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = awsJsonDataBody(this.b7a_1, this.q7a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var signature = suspendResult;
            var tmp0_safe_receiver = signature.we('Signature');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4p();
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : Base64Utils_getInstance().decodeFromBase64(tmp2_safe_receiver);
            var tmp_14;
            if (tmp3_elvis_lhs == null) {
              throw new SigningException('failed to sign');
            } else {
              tmp_14 = tmp3_elvis_lhs;
            }

            return tmp_14;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($signRawCOROUTINE$6)['<set-state>'] = protoOf($signRawCOROUTINE$6).s9;
  protoOf($signRawCOROUTINE$6)['<get-state>'] = protoOf($signRawCOROUTINE$6).t9;
  protoOf($signRawCOROUTINE$6)['<set-exceptionState>'] = protoOf($signRawCOROUTINE$6).u9;
  protoOf($signRawCOROUTINE$6)['<get-exceptionState>'] = protoOf($signRawCOROUTINE$6).v9;
  protoOf($signRawCOROUTINE$6)['<set-result>'] = protoOf($signRawCOROUTINE$6).w9;
  protoOf($signRawCOROUTINE$6)['<get-result>'] = protoOf($signRawCOROUTINE$6).x9;
  protoOf($signRawCOROUTINE$6)['<set-exception>'] = protoOf($signRawCOROUTINE$6).y9;
  protoOf($signRawCOROUTINE$6)['<get-exception>'] = protoOf($signRawCOROUTINE$6).z9;
  protoOf($signRawCOROUTINE$6)['<set-finallyPath>'] = protoOf($signRawCOROUTINE$6).aa;
  protoOf($signRawCOROUTINE$6)['<get-finallyPath>'] = protoOf($signRawCOROUTINE$6).ba;
  protoOf($signRawCOROUTINE$6)['<get-context>'] = protoOf($signRawCOROUTINE$6).r9;
  function $signJwsCOROUTINE$7(_this__u8e3s4, plaintext, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z7a_1 = _this__u8e3s4;
    this.a7b_1 = plaintext;
    this.b7b_1 = headers;
  }
  protoOf($signJwsCOROUTINE$7).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            var tmp_0 = this;
            var this_0 = HashMap_init_$Create$_0(this.b7b_1);
            this_0.n2('alg', JsonUtils_getInstance().toJsonElement(jwsSigningAlgorithm(this.z7a_1.keyType)));
            tmp_0.c7b_1 = this_0;
            var tmp_1 = this;
            var tmp_2 = Base64Utils_getInstance();
            var tmp2 = Default_getInstance();
            var value = this.c7b_1;
            var this_1 = tmp2.w21();
            var this_2 = serializer(this_1, createKType(getKClass(HashMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
            tmp_1.d7b_1 = tmp_2.encodeToBase64Url(encodeToByteArray(tmp2.x1y(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)));
            this.e7b_1 = Base64Utils_getInstance().encodeToBase64Url(this.a7b_1);
            this.l9_1 = 1;
            suspendResult = this.z7a_1.l75(encodeToByteArray(this.d7b_1 + '.' + this.e7b_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var rawSignature = suspendResult;
            if (listOf([KeyType_secp256r1_getInstance(), KeyType_secp256k1_getInstance()]).x1(this.z7a_1.keyType)) {
              rawSignature = EccUtils_instance.a6f(rawSignature);
            }

            var encodedSignature = Base64Utils_getInstance().encodeToBase64Url(rawSignature);
            var jws = this.d7b_1 + '.' + this.e7b_1 + '.' + encodedSignature;
            return jws;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($signJwsCOROUTINE$7)['<set-state>'] = protoOf($signJwsCOROUTINE$7).s9;
  protoOf($signJwsCOROUTINE$7)['<get-state>'] = protoOf($signJwsCOROUTINE$7).t9;
  protoOf($signJwsCOROUTINE$7)['<set-exceptionState>'] = protoOf($signJwsCOROUTINE$7).u9;
  protoOf($signJwsCOROUTINE$7)['<get-exceptionState>'] = protoOf($signJwsCOROUTINE$7).v9;
  protoOf($signJwsCOROUTINE$7)['<set-result>'] = protoOf($signJwsCOROUTINE$7).w9;
  protoOf($signJwsCOROUTINE$7)['<get-result>'] = protoOf($signJwsCOROUTINE$7).x9;
  protoOf($signJwsCOROUTINE$7)['<set-exception>'] = protoOf($signJwsCOROUTINE$7).y9;
  protoOf($signJwsCOROUTINE$7)['<get-exception>'] = protoOf($signJwsCOROUTINE$7).z9;
  protoOf($signJwsCOROUTINE$7)['<set-finallyPath>'] = protoOf($signJwsCOROUTINE$7).aa;
  protoOf($signJwsCOROUTINE$7)['<get-finallyPath>'] = protoOf($signJwsCOROUTINE$7).ba;
  protoOf($signJwsCOROUTINE$7)['<get-context>'] = protoOf($signJwsCOROUTINE$7).r9;
  function $verifyRawCOROUTINE$8(_this__u8e3s4, signed, detachedPlaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n7b_1 = _this__u8e3s4;
    this.o7b_1 = signed;
    this.p7b_1 = detachedPlaintext;
  }
  protoOf($verifyRawCOROUTINE$8).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.p7b_1;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              var exception = IllegalArgumentException_init_$Create$('Detached plaintext is required for verification');
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.q7b_1 = tmp_1;
            this.r7b_1 = Companion_getInstance_16().sha256(this.q7b_1);
            this.s7b_1 = trimMargin(trimIndent('\n{\n"KeyId":"' + this.n7b_1.id + '",\n"Message":"' + encodeBase64(this.r7b_1) + '",\n"MessageType":"DIGEST",\n"Signature":"' + encodeBase64(this.o7b_1) + '",\n"SigningAlgorithm":"' + _get_awsSigningAlgorithm__z9hox6(this.n7b_1) + '"\n}\n'));
            this.t7b_1 = Companion_getInstance_16().buildSigV4Headers(Companion_getInstance_0().c2z_1, this.s7b_1, this.n7b_1.config);
            this.u7b_1 = 'kms.' + this.n7b_1.config.m6v_1.region + '.amazonaws.com';
            var tmp_2 = get_logger();
            tmp_2.m6b(AWSKeyRestAPI$verifyRaw$lambda(this.u7b_1));
            this.v7b_1 = Companion_getInstance_16();
            var tmp_3 = this;
            tmp_3.w7b_1 = Companion_getInstance_16().x6o_1;
            var tmp_4 = this;
            tmp_4.x7b_1 = 'https://' + this.u7b_1 + '/';
            this.y7b_1 = this.w7b_1;
            this.z7b_1 = this.x7b_1;
            var tmp_5 = this;
            tmp_5.a7c_1 = this.y7b_1;
            this.b7c_1 = this.a7c_1;
            var tmp_6 = this;
            tmp_6.c7c_1 = this.b7c_1;
            var tmp_7 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.z7b_1);
            headers(this_0, AWSKeyRestAPI$verifyRaw$lambda_0(this.t7b_1, this.u7b_1));
            var body = this.s7b_1;
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_8 = PrimitiveClasses_getInstance().ld();
              var tmp_9;
              try {
                tmp_9 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
              this_0.d3n(new TypeInfo(tmp_8, tmp_9));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_11 = PrimitiveClasses_getInstance().ld();
                var tmp_12;
                try {
                  tmp_12 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_13;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_13 = null;
                  } else {
                    throw $p;
                  }
                  tmp_12 = tmp_13;
                }
                this_0.d3n(new TypeInfo(tmp_11, tmp_12));
              }
            }

            tmp_7.d7c_1 = this_0;
            this.e7c_1 = this.c7c_1;
            this.f7c_1 = this.d7c_1;
            this.f7c_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_14 = this;
            tmp_14.g7c_1 = this.e7c_1;
            var tmp_15 = this;
            tmp_15.h7c_1 = this.f7c_1;
            this.i7c_1 = this.g7c_1;
            this.j7c_1 = this.h7c_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.j7c_1, this.i7c_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k7c_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = awsJsonDataBody(this.v7b_1, this.k7c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var verification = suspendResult;
            var tmp1_safe_receiver = verification.we('SignatureValid');
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonPrimitive(tmp1_safe_receiver);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v4p();
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : Base64Utils_getInstance().decodeFromBase64(tmp3_safe_receiver);
            var tmp_16;
            if (tmp4_elvis_lhs == null) {
              throw new VerificationException('failed to verify');
            } else {
              tmp_16 = tmp4_elvis_lhs;
            }

            var value = tmp_16;
            return new Result(_Result___init__impl__xyqfz8(value));
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($verifyRawCOROUTINE$8)['<set-state>'] = protoOf($verifyRawCOROUTINE$8).s9;
  protoOf($verifyRawCOROUTINE$8)['<get-state>'] = protoOf($verifyRawCOROUTINE$8).t9;
  protoOf($verifyRawCOROUTINE$8)['<set-exceptionState>'] = protoOf($verifyRawCOROUTINE$8).u9;
  protoOf($verifyRawCOROUTINE$8)['<get-exceptionState>'] = protoOf($verifyRawCOROUTINE$8).v9;
  protoOf($verifyRawCOROUTINE$8)['<set-result>'] = protoOf($verifyRawCOROUTINE$8).w9;
  protoOf($verifyRawCOROUTINE$8)['<get-result>'] = protoOf($verifyRawCOROUTINE$8).x9;
  protoOf($verifyRawCOROUTINE$8)['<set-exception>'] = protoOf($verifyRawCOROUTINE$8).y9;
  protoOf($verifyRawCOROUTINE$8)['<get-exception>'] = protoOf($verifyRawCOROUTINE$8).z9;
  protoOf($verifyRawCOROUTINE$8)['<set-finallyPath>'] = protoOf($verifyRawCOROUTINE$8).aa;
  protoOf($verifyRawCOROUTINE$8)['<get-finallyPath>'] = protoOf($verifyRawCOROUTINE$8).ba;
  protoOf($verifyRawCOROUTINE$8)['<get-context>'] = protoOf($verifyRawCOROUTINE$8).r9;
  function $verifyJwsCOROUTINE$9(_this__u8e3s4, signedJws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t7c_1 = _this__u8e3s4;
    this.u7c_1 = signedJws;
  }
  protoOf($verifyJwsCOROUTINE$9).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            this.l9_1 = 1;
            suspendResult = this.t7c_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v7c_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.v7c_1.s6j(this.u7c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 3;
            continue $sm;
          case 3:
            var verification = suspendResult.vo_1;
            return new Result(verification);
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($verifyJwsCOROUTINE$9)['<set-state>'] = protoOf($verifyJwsCOROUTINE$9).s9;
  protoOf($verifyJwsCOROUTINE$9)['<get-state>'] = protoOf($verifyJwsCOROUTINE$9).t9;
  protoOf($verifyJwsCOROUTINE$9)['<set-exceptionState>'] = protoOf($verifyJwsCOROUTINE$9).u9;
  protoOf($verifyJwsCOROUTINE$9)['<get-exceptionState>'] = protoOf($verifyJwsCOROUTINE$9).v9;
  protoOf($verifyJwsCOROUTINE$9)['<set-result>'] = protoOf($verifyJwsCOROUTINE$9).w9;
  protoOf($verifyJwsCOROUTINE$9)['<get-result>'] = protoOf($verifyJwsCOROUTINE$9).x9;
  protoOf($verifyJwsCOROUTINE$9)['<set-exception>'] = protoOf($verifyJwsCOROUTINE$9).y9;
  protoOf($verifyJwsCOROUTINE$9)['<get-exception>'] = protoOf($verifyJwsCOROUTINE$9).z9;
  protoOf($verifyJwsCOROUTINE$9)['<set-finallyPath>'] = protoOf($verifyJwsCOROUTINE$9).aa;
  protoOf($verifyJwsCOROUTINE$9)['<get-finallyPath>'] = protoOf($verifyJwsCOROUTINE$9).ba;
  protoOf($verifyJwsCOROUTINE$9)['<get-context>'] = protoOf($verifyJwsCOROUTINE$9).r9;
  function $getPublicKeyCOROUTINE$10(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e7d_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyCOROUTINE$10).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 6;
            this.f7d_1 = this.e7d_1.c74_1;
            if (this.f7d_1 == null) {
              if (!(this.e7d_1.z73_1 == null)) {
                var tmp_0 = this;
                tmp_0.i7d_1 = ensureNotNull(this.e7d_1.z73_1);
                this.j7d_1 = this.i7d_1;
                var tmp_1 = this;
                tmp_1.k7d_1 = this.j7d_1;
                this.l7d_1 = this.k7d_1;
                this.l9_1 = 2;
                suspendResult = Companion_instance_31.m7d(this.l7d_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                this.l9_1 = 3;
                continue $sm;
              } else {
                this.l9_1 = 1;
                suspendResult = this.e7d_1.r6h(this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.g7d_1 = this.f7d_1;
              this.l9_1 = 5;
              continue $sm;
            }

          case 1:
            this.h7d_1 = suspendResult;
            this.l9_1 = 4;
            continue $sm;
          case 2:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 3;
            continue $sm;
          case 3:
            var tmp_2 = this;
            var this_0 = suspendResult.vo_1;
            throwOnFailure(this_0);
            var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
            tmp_2.h7d_1 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
            this.l9_1 = 4;
            continue $sm;
          case 4:
            var tmp_4 = this;
            var this_1 = this.h7d_1;
            this.e7d_1.c74_1 = this_1;
            tmp_4.g7d_1 = this_1;
            this.l9_1 = 5;
            continue $sm;
          case 5:
            return this.g7d_1;
          case 6:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 6) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getPublicKeyCOROUTINE$10)['<set-state>'] = protoOf($getPublicKeyCOROUTINE$10).s9;
  protoOf($getPublicKeyCOROUTINE$10)['<get-state>'] = protoOf($getPublicKeyCOROUTINE$10).t9;
  protoOf($getPublicKeyCOROUTINE$10)['<set-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$10).u9;
  protoOf($getPublicKeyCOROUTINE$10)['<get-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$10).v9;
  protoOf($getPublicKeyCOROUTINE$10)['<set-result>'] = protoOf($getPublicKeyCOROUTINE$10).w9;
  protoOf($getPublicKeyCOROUTINE$10)['<get-result>'] = protoOf($getPublicKeyCOROUTINE$10).x9;
  protoOf($getPublicKeyCOROUTINE$10)['<set-exception>'] = protoOf($getPublicKeyCOROUTINE$10).y9;
  protoOf($getPublicKeyCOROUTINE$10)['<get-exception>'] = protoOf($getPublicKeyCOROUTINE$10).z9;
  protoOf($getPublicKeyCOROUTINE$10)['<set-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$10).aa;
  protoOf($getPublicKeyCOROUTINE$10)['<get-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$10).ba;
  protoOf($getPublicKeyCOROUTINE$10)['<get-context>'] = protoOf($getPublicKeyCOROUTINE$10).r9;
  function $getMetaCOROUTINE$11(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v7d_1 = _this__u8e3s4;
  }
  protoOf($getMetaCOROUTINE$11).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.v7d_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new AwsKeyMeta(ARGUMENT);
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getMetaCOROUTINE$11)['<set-state>'] = protoOf($getMetaCOROUTINE$11).s9;
  protoOf($getMetaCOROUTINE$11)['<get-state>'] = protoOf($getMetaCOROUTINE$11).t9;
  protoOf($getMetaCOROUTINE$11)['<set-exceptionState>'] = protoOf($getMetaCOROUTINE$11).u9;
  protoOf($getMetaCOROUTINE$11)['<get-exceptionState>'] = protoOf($getMetaCOROUTINE$11).v9;
  protoOf($getMetaCOROUTINE$11)['<set-result>'] = protoOf($getMetaCOROUTINE$11).w9;
  protoOf($getMetaCOROUTINE$11)['<get-result>'] = protoOf($getMetaCOROUTINE$11).x9;
  protoOf($getMetaCOROUTINE$11)['<set-exception>'] = protoOf($getMetaCOROUTINE$11).y9;
  protoOf($getMetaCOROUTINE$11)['<get-exception>'] = protoOf($getMetaCOROUTINE$11).z9;
  protoOf($getMetaCOROUTINE$11)['<set-finallyPath>'] = protoOf($getMetaCOROUTINE$11).aa;
  protoOf($getMetaCOROUTINE$11)['<get-finallyPath>'] = protoOf($getMetaCOROUTINE$11).ba;
  protoOf($getMetaCOROUTINE$11)['<get-context>'] = protoOf($getMetaCOROUTINE$11).r9;
  function $deleteKeyCOROUTINE$12(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e7e_1 = _this__u8e3s4;
  }
  protoOf($deleteKeyCOROUTINE$12).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.f7e_1 = trimMargin(trimIndent('\n{\n"KeyId":"' + this.e7e_1.id + '",\n"PendingWindowInDays":7\n}\n'));
            this.g7e_1 = Companion_getInstance_16().buildSigV4Headers(Companion_getInstance_0().c2z_1, this.f7e_1, this.e7e_1.config);
            this.h7e_1 = 'kms.' + this.e7e_1.config.m6v_1.region + '.amazonaws.com';
            var tmp_0 = get_logger();
            tmp_0.m6b(AWSKeyRestAPI$deleteKey$lambda(this.h7e_1));
            var tmp_1 = this;
            tmp_1.i7e_1 = Companion_getInstance_16().x6o_1;
            var tmp_2 = this;
            tmp_2.j7e_1 = 'https://' + this.h7e_1 + '/';
            this.k7e_1 = this.i7e_1;
            this.l7e_1 = this.j7e_1;
            var tmp_3 = this;
            tmp_3.m7e_1 = this.k7e_1;
            this.n7e_1 = this.m7e_1;
            var tmp_4 = this;
            tmp_4.o7e_1 = this.n7e_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.l7e_1);
            headers(this_0, AWSKeyRestAPI$deleteKey$lambda_0(this.g7e_1, this.h7e_1));
            var body = this.f7e_1;
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_6 = PrimitiveClasses_getInstance().ld();
              var tmp_7;
              try {
                tmp_7 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
              this_0.d3n(new TypeInfo(tmp_6, tmp_7));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_9 = PrimitiveClasses_getInstance().ld();
                var tmp_10;
                try {
                  tmp_10 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
                this_0.d3n(new TypeInfo(tmp_9, tmp_10));
              }
            }

            tmp_5.p7e_1 = this_0;
            this.q7e_1 = this.o7e_1;
            this.r7e_1 = this.p7e_1;
            this.r7e_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_12 = this;
            tmp_12.s7e_1 = this.q7e_1;
            var tmp_13 = this;
            tmp_13.t7e_1 = this.r7e_1;
            this.u7e_1 = this.s7e_1;
            this.v7e_1 = this.t7e_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.v7e_1, this.u7e_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            var tmp_14 = get_logger();
            tmp_14.m6b(AWSKeyRestAPI$deleteKey$lambda_1(this.e7e_1));
            return response.o34().equals(Companion_getInstance_1().v2z_1);
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($deleteKeyCOROUTINE$12)['<set-state>'] = protoOf($deleteKeyCOROUTINE$12).s9;
  protoOf($deleteKeyCOROUTINE$12)['<get-state>'] = protoOf($deleteKeyCOROUTINE$12).t9;
  protoOf($deleteKeyCOROUTINE$12)['<set-exceptionState>'] = protoOf($deleteKeyCOROUTINE$12).u9;
  protoOf($deleteKeyCOROUTINE$12)['<get-exceptionState>'] = protoOf($deleteKeyCOROUTINE$12).v9;
  protoOf($deleteKeyCOROUTINE$12)['<set-result>'] = protoOf($deleteKeyCOROUTINE$12).w9;
  protoOf($deleteKeyCOROUTINE$12)['<get-result>'] = protoOf($deleteKeyCOROUTINE$12).x9;
  protoOf($deleteKeyCOROUTINE$12)['<set-exception>'] = protoOf($deleteKeyCOROUTINE$12).y9;
  protoOf($deleteKeyCOROUTINE$12)['<get-exception>'] = protoOf($deleteKeyCOROUTINE$12).z9;
  protoOf($deleteKeyCOROUTINE$12)['<set-finallyPath>'] = protoOf($deleteKeyCOROUTINE$12).aa;
  protoOf($deleteKeyCOROUTINE$12)['<get-finallyPath>'] = protoOf($deleteKeyCOROUTINE$12).ba;
  protoOf($deleteKeyCOROUTINE$12)['<get-context>'] = protoOf($deleteKeyCOROUTINE$12).r9;
  function AWSKeyRestAPI(config, id, _publicKey, _keyType) {
    Companion_getInstance_16();
    _publicKey = _publicKey === VOID ? null : _publicKey;
    _keyType = _keyType === VOID ? null : _keyType;
    Key.call(this);
    this.config = config;
    this.id = id;
    this.z73_1 = _publicKey;
    this.a74_1 = _keyType;
    var tmp = this;
    tmp.b74_1 = lazy_0(AWSKeyRestAPI$awsSigningAlgorithm$delegate$lambda(this));
    this.c74_1 = null;
  }
  protoOf(AWSKeyRestAPI).n3h = function () {
    return this.config;
  };
  protoOf(AWSKeyRestAPI).a67 = function () {
    return this.id;
  };
  protoOf(AWSKeyRestAPI).w7e = function (value) {
    this.a74_1 = value;
  };
  protoOf(AWSKeyRestAPI).a6m = function () {
    return ensureNotNull(this.a74_1);
  };
  protoOf(AWSKeyRestAPI).b6m = function () {
    return false;
  };
  protoOf(AWSKeyRestAPI).toString = function () {
    return '[AWS ' + this.keyType.q2_1 + ' key @AWS ' + this.config.m6v_1.region + ' - ' + this.id + ']';
  };
  protoOf(AWSKeyRestAPI).w6g = function ($completion) {
    var tmp = new $getKeyIdCOROUTINE$5(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI).w6i = function ($completion) {
    throw new NotImplementedError('Thumbprint is not available for remote keys.');
  };
  protoOf(AWSKeyRestAPI).c6k = function ($completion) {
    throw new NotImplementedError('JWK export is not available for remote keys.');
  };
  protoOf(AWSKeyRestAPI).n6k = function ($completion) {
    return get_jsonObject(Default_getInstance().q4n(ensureNotNull(this.z73_1)));
  };
  protoOf(AWSKeyRestAPI).m6i = function ($completion) {
    throw new NotImplementedError('PEM export is not available for remote keys.');
  };
  protoOf(AWSKeyRestAPI).l75 = function (plaintext, $completion) {
    var tmp = new $signRawCOROUTINE$6(this, plaintext, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI).m6g = function (plaintext, $completion) {
    return this.l75(plaintext, $completion);
  };
  protoOf(AWSKeyRestAPI).a6g = function (plaintext, headers, $completion) {
    var tmp = new $signJwsCOROUTINE$7(this, plaintext, headers, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI).a6l = function (signed, detachedPlaintext, $completion) {
    var tmp = new $verifyRawCOROUTINE$8(this, signed, detachedPlaintext, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AWSKeyRestAPI).s6j = function (signedJws, $completion) {
    var tmp = new $verifyJwsCOROUTINE$9(this, signedJws, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AWSKeyRestAPI).r6h = function ($completion) {
    var tmp = new $getPublicKeyCOROUTINE$10(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI).l6l = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(AWSKeyRestAPI).o76 = function ($completion) {
    var tmp = new $getMetaCOROUTINE$11(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI).c6i = function ($completion) {
    return this.o76($completion);
  };
  protoOf(AWSKeyRestAPI).n6f = function ($completion) {
    var tmp = new $deleteKeyCOROUTINE$12(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AWSKeyRestAPI).c6m = function () {
    var tmp = AWSKeyRestAPI$deleteKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).d6m = function (plaintext, headers) {
    var tmp = AWSKeyRestAPI$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).e6m = function (plaintext) {
    var tmp = AWSKeyRestAPI$signRawAsync$slambda_0(this, plaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).f6m = function () {
    var tmp = AWSKeyRestAPI$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).h6m = function () {
    var tmp = AWSKeyRestAPI$getPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).i6m = function () {
    var tmp = AWSKeyRestAPI$getMetaAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).j6m = function () {
    var tmp = AWSKeyRestAPI$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).k6m = function () {
    var tmp = AWSKeyRestAPI$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).m6m = function (signedJws) {
    var tmp = AWSKeyRestAPI$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).n6m = function () {
    var tmp = AWSKeyRestAPI$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).o6m = function () {
    var tmp = AWSKeyRestAPI$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).p6m = function (signed, detachedPlaintext) {
    var tmp = AWSKeyRestAPI$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).q6m = function () {
    var tmp = AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function AWSAuthConfiguration(accessKeyId, secretAccessKey, region, sessionToken, expiration, roleName) {
    roleName = roleName === VOID ? null : roleName;
    this.n6w_1 = accessKeyId;
    this.o6w_1 = secretAccessKey;
    this.p6w_1 = region;
    this.q6w_1 = sessionToken;
    this.r6w_1 = expiration;
    this.s6w_1 = roleName;
  }
  protoOf(AWSAuthConfiguration).toString = function () {
    return 'AWSAuthConfiguration(accessKeyId=' + this.n6w_1 + ', secretAccessKey=' + this.o6w_1 + ', region=' + this.p6w_1 + ', sessionToken=' + this.q6w_1 + ', expiration=' + this.r6w_1 + ', roleName=' + this.s6w_1 + ')';
  };
  protoOf(AWSAuthConfiguration).hashCode = function () {
    var result = this.n6w_1 == null ? 0 : getStringHashCode(this.n6w_1);
    result = imul(result, 31) + (this.o6w_1 == null ? 0 : getStringHashCode(this.o6w_1)) | 0;
    result = imul(result, 31) + (this.p6w_1 == null ? 0 : getStringHashCode(this.p6w_1)) | 0;
    result = imul(result, 31) + (this.q6w_1 == null ? 0 : getStringHashCode(this.q6w_1)) | 0;
    result = imul(result, 31) + (this.r6w_1 == null ? 0 : getStringHashCode(this.r6w_1)) | 0;
    result = imul(result, 31) + (this.s6w_1 == null ? 0 : getStringHashCode(this.s6w_1)) | 0;
    return result;
  };
  protoOf(AWSAuthConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AWSAuthConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof AWSAuthConfiguration ? other : THROW_CCE();
    if (!(this.n6w_1 == tmp0_other_with_cast.n6w_1))
      return false;
    if (!(this.o6w_1 == tmp0_other_with_cast.o6w_1))
      return false;
    if (!(this.p6w_1 == tmp0_other_with_cast.p6w_1))
      return false;
    if (!(this.q6w_1 == tmp0_other_with_cast.q6w_1))
      return false;
    if (!(this.r6w_1 == tmp0_other_with_cast.r6w_1))
      return false;
    if (!(this.s6w_1 == tmp0_other_with_cast.s6w_1))
      return false;
    return true;
  };
  function logger$lambda() {
    _init_properties_AWSKeyRestAPI_kt__9umudq();
    return Unit_instance;
  }
  function awsSigningAlgorithm$factory() {
    return getPropertyCallableRef('awsSigningAlgorithm', 1, KProperty1, function (receiver) {
      return _get_awsSigningAlgorithm__z9hox6(receiver);
    }, null);
  }
  var properties_initialized_AWSKeyRestAPI_kt_40ykvg;
  function _init_properties_AWSKeyRestAPI_kt__9umudq() {
    if (!properties_initialized_AWSKeyRestAPI_kt_40ykvg) {
      properties_initialized_AWSKeyRestAPI_kt_40ykvg = true;
      var tmp = KotlinLogging_instance;
      logger = tmp.o6b(logger$lambda);
      _accessAWS = null;
      timeoutAt = null;
    }
  }
  function Companion_12() {
  }
  protoOf(Companion_12).s4p = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    return Companion_instance_17;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.azure.AzureAuth', this, 4);
    tmp0_serialDesc.v28('clientId', false);
    tmp0_serialDesc.v28('clientSecret', false);
    tmp0_serialDesc.v28('tenantId', false);
    tmp0_serialDesc.v28('keyVaultUrl', false);
    this.x7e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).y7e = function (encoder, value) {
    var tmp0_desc = this.x7e_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.w22(tmp0_desc, 0, value.clientId);
    tmp1_output.w22(tmp0_desc, 1, value.clientSecret);
    tmp1_output.w22(tmp0_desc, 2, value.tenantId);
    tmp1_output.w22(tmp0_desc, 3, value.keyVaultUrl);
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_8).v1x = function (encoder, value) {
    return this.y7e(encoder, value instanceof AzureAuth ? value : THROW_CCE());
  };
  protoOf($serializer_8).w1x = function (decoder) {
    var tmp0_desc = this.x7e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h21(tmp0_desc);
    if (tmp8_input.x21()) {
      tmp4_local0 = tmp8_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.r21(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.r21(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.r21(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.r21(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.r21(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.r21(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i21(tmp0_desc);
    return AzureAuth_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).u1x = function () {
    return this.x7e_1;
  };
  protoOf($serializer_8).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function AzureAuth_init_$Init$(seen0, clientId, clientSecret, tenantId, keyVaultUrl, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().x7e_1);
    }
    $this.clientId = clientId;
    $this.clientSecret = clientSecret;
    $this.tenantId = tenantId;
    $this.keyVaultUrl = keyVaultUrl;
    return $this;
  }
  function AzureAuth_init_$Create$(seen0, clientId, clientSecret, tenantId, keyVaultUrl, serializationConstructorMarker) {
    return AzureAuth_init_$Init$(seen0, clientId, clientSecret, tenantId, keyVaultUrl, serializationConstructorMarker, objectCreate(protoOf(AzureAuth)));
  }
  function AzureAuth(clientId, clientSecret, tenantId, keyVaultUrl) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.tenantId = tenantId;
    this.keyVaultUrl = keyVaultUrl;
  }
  protoOf(AzureAuth).z7e = function () {
    return this.clientId;
  };
  protoOf(AzureAuth).a7f = function () {
    return this.clientSecret;
  };
  protoOf(AzureAuth).b7f = function () {
    return this.tenantId;
  };
  protoOf(AzureAuth).c7f = function () {
    return this.keyVaultUrl;
  };
  protoOf(AzureAuth).bc = function () {
    return this.clientId;
  };
  protoOf(AzureAuth).cc = function () {
    return this.clientSecret;
  };
  protoOf(AzureAuth).zo = function () {
    return this.tenantId;
  };
  protoOf(AzureAuth).i6v = function () {
    return this.keyVaultUrl;
  };
  protoOf(AzureAuth).d7f = function (clientId, clientSecret, tenantId, keyVaultUrl) {
    return new AzureAuth(clientId, clientSecret, tenantId, keyVaultUrl);
  };
  protoOf(AzureAuth).copy = function (clientId, clientSecret, tenantId, keyVaultUrl, $super) {
    clientId = clientId === VOID ? this.clientId : clientId;
    clientSecret = clientSecret === VOID ? this.clientSecret : clientSecret;
    tenantId = tenantId === VOID ? this.tenantId : tenantId;
    keyVaultUrl = keyVaultUrl === VOID ? this.keyVaultUrl : keyVaultUrl;
    return $super === VOID ? this.d7f(clientId, clientSecret, tenantId, keyVaultUrl) : $super.d7f.call(this, clientId, clientSecret, tenantId, keyVaultUrl);
  };
  protoOf(AzureAuth).toString = function () {
    return 'AzureAuth(clientId=' + this.clientId + ', clientSecret=' + this.clientSecret + ', tenantId=' + this.tenantId + ', keyVaultUrl=' + this.keyVaultUrl + ')';
  };
  protoOf(AzureAuth).hashCode = function () {
    var result = getStringHashCode(this.clientId);
    result = imul(result, 31) + getStringHashCode(this.clientSecret) | 0;
    result = imul(result, 31) + getStringHashCode(this.tenantId) | 0;
    result = imul(result, 31) + getStringHashCode(this.keyVaultUrl) | 0;
    return result;
  };
  protoOf(AzureAuth).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AzureAuth))
      return false;
    var tmp0_other_with_cast = other instanceof AzureAuth ? other : THROW_CCE();
    if (!(this.clientId === tmp0_other_with_cast.clientId))
      return false;
    if (!(this.clientSecret === tmp0_other_with_cast.clientSecret))
      return false;
    if (!(this.tenantId === tmp0_other_with_cast.tenantId))
      return false;
    if (!(this.keyVaultUrl === tmp0_other_with_cast.keyVaultUrl))
      return false;
    return true;
  };
  function AzureKey$KeyCreateRequest$Companion$$childSerializers$_anonymous__t62lr6() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_13() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e7f_1 = [null, null, null, lazy(tmp_0, AzureKey$KeyCreateRequest$Companion$$childSerializers$_anonymous__t62lr6)];
  }
  protoOf(Companion_13).s4p = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_13();
    return Companion_instance_18;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.azure.AzureKey.KeyCreateRequest', this, 4);
    tmp0_serialDesc.v28('kty', false);
    tmp0_serialDesc.v28('crv', true);
    tmp0_serialDesc.v28('key_size', true);
    tmp0_serialDesc.v28('key_ops', false);
    this.f7f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).g7f = function (encoder, value) {
    var tmp0_desc = this.f7f_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_18().e7f_1;
    tmp1_output.w22(tmp0_desc, 0, value.kty);
    if (tmp1_output.e23(tmp0_desc, 1) ? true : !(value.crv == null)) {
      tmp1_output.a23(tmp0_desc, 1, StringSerializer_getInstance(), value.crv);
    }
    if (tmp1_output.e23(tmp0_desc, 2) ? true : !(value.keySize == null)) {
      tmp1_output.a23(tmp0_desc, 2, IntSerializer_getInstance(), value.keySize);
    }
    tmp1_output.y22(tmp0_desc, 3, tmp2_cached[3].z(), value.keyOps);
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_9).v1x = function (encoder, value) {
    return this.g7f(encoder, value instanceof KeyCreateRequest ? value : THROW_CCE());
  };
  protoOf($serializer_9).w1x = function (decoder) {
    var tmp0_desc = this.f7f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h21(tmp0_desc);
    var tmp9_cached = Companion_getInstance_18().e7f_1;
    if (tmp8_input.x21()) {
      tmp4_local0 = tmp8_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.v21(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.v21(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.t21(tmp0_desc, 3, tmp9_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.v21(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.v21(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.t21(tmp0_desc, 3, tmp9_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i21(tmp0_desc);
    return KeyCreateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_9).u1x = function () {
    return this.f7f_1;
  };
  protoOf($serializer_9).l29 = function () {
    var tmp0_cached = Companion_getInstance_18().e7f_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), tmp0_cached[3].z()];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function KeyCreateRequest_init_$Init$(seen0, kty, crv, keySize, keyOps, serializationConstructorMarker, $this) {
    if (!(9 === (9 & seen0))) {
      throwMissingFieldException(seen0, 9, $serializer_getInstance_9().f7f_1);
    }
    $this.kty = kty;
    if (0 === (seen0 & 2))
      $this.crv = null;
    else
      $this.crv = crv;
    if (0 === (seen0 & 4))
      $this.keySize = null;
    else
      $this.keySize = keySize;
    $this.keyOps = keyOps;
    return $this;
  }
  function KeyCreateRequest_init_$Create$(seen0, kty, crv, keySize, keyOps, serializationConstructorMarker) {
    return KeyCreateRequest_init_$Init$(seen0, kty, crv, keySize, keyOps, serializationConstructorMarker, objectCreate(protoOf(KeyCreateRequest)));
  }
  function Companion_14() {
  }
  protoOf(Companion_14).s4p = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    return Companion_instance_19;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.azure.AzureKey.AzureKeyFunctions.AzureTokenResponse', this, 4);
    tmp0_serialDesc.v28('token_type', false);
    tmp0_serialDesc.v28('expires_in', false);
    tmp0_serialDesc.v28('ext_expires_in', false);
    tmp0_serialDesc.v28('access_token', false);
    this.h7f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).i7f = function (encoder, value) {
    var tmp0_desc = this.h7f_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.w22(tmp0_desc, 0, value.tokenType);
    tmp1_output.r22(tmp0_desc, 1, value.expiresIn);
    tmp1_output.r22(tmp0_desc, 2, value.extExpiresIn);
    tmp1_output.w22(tmp0_desc, 3, value.accessToken);
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_10).v1x = function (encoder, value) {
    return this.i7f(encoder, value instanceof AzureTokenResponse ? value : THROW_CCE());
  };
  protoOf($serializer_10).w1x = function (decoder) {
    var tmp0_desc = this.h7f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h21(tmp0_desc);
    if (tmp8_input.x21()) {
      tmp4_local0 = tmp8_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.m21(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.m21(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.r21(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.m21(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.m21(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.r21(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i21(tmp0_desc);
    return AzureTokenResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_10).u1x = function () {
    return this.h7f_1;
  };
  protoOf($serializer_10).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function AzureTokenResponse_init_$Init$(seen0, tokenType, expiresIn, extExpiresIn, accessToken, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_10().h7f_1);
    }
    $this.tokenType = tokenType;
    $this.expiresIn = expiresIn;
    $this.extExpiresIn = extExpiresIn;
    $this.accessToken = accessToken;
    return $this;
  }
  function AzureTokenResponse_init_$Create$(seen0, tokenType, expiresIn, extExpiresIn, accessToken, serializationConstructorMarker) {
    return AzureTokenResponse_init_$Init$(seen0, tokenType, expiresIn, extExpiresIn, accessToken, serializationConstructorMarker, objectCreate(protoOf(AzureTokenResponse)));
  }
  function Companion_15() {
  }
  protoOf(Companion_15).s4p = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    return Companion_instance_20;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.azure.AzureKey.AzureKeyFunctions.AzureTokenResponseParsed', this, 2);
    tmp0_serialDesc.v28('accessToken', false);
    tmp0_serialDesc.v28('expiration', false);
    this.j7f_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).k7f = function (encoder, value) {
    var tmp0_desc = this.j7f_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.w22(tmp0_desc, 0, value.accessToken);
    tmp1_output.y22(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), value.expiration);
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_11).v1x = function (encoder, value) {
    return this.k7f(encoder, value instanceof AzureTokenResponseParsed ? value : THROW_CCE());
  };
  protoOf($serializer_11).w1x = function (decoder) {
    var tmp0_desc = this.j7f_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h21(tmp0_desc);
    if (tmp6_input.x21()) {
      tmp4_local0 = tmp6_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.t21(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.t21(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i21(tmp0_desc);
    return AzureTokenResponseParsed_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).u1x = function () {
    return this.j7f_1;
  };
  protoOf($serializer_11).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), InstantIso8601Serializer_getInstance()];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function AzureTokenResponseParsed_init_$Init$(seen0, accessToken, expiration, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().j7f_1);
    }
    $this.accessToken = accessToken;
    $this.expiration = expiration;
    return $this;
  }
  function AzureTokenResponseParsed_init_$Create$(seen0, accessToken, expiration, serializationConstructorMarker) {
    return AzureTokenResponseParsed_init_$Init$(seen0, accessToken, expiration, serializationConstructorMarker, objectCreate(protoOf(AzureTokenResponseParsed)));
  }
  function ParsedAzurePublicKey(kid, azureKeyType, curve, keyType, publicKey) {
    this.kid = kid;
    this.azureKeyType = azureKeyType;
    this.curve = curve;
    this.keyType = keyType;
    this.publicKey = publicKey;
  }
  protoOf(ParsedAzurePublicKey).l7f = function () {
    return this.kid;
  };
  protoOf(ParsedAzurePublicKey).m7f = function () {
    return this.azureKeyType;
  };
  protoOf(ParsedAzurePublicKey).n7f = function () {
    return this.curve;
  };
  protoOf(ParsedAzurePublicKey).a6m = function () {
    return this.keyType;
  };
  protoOf(ParsedAzurePublicKey).o7f = function () {
    return this.publicKey;
  };
  protoOf(ParsedAzurePublicKey).bc = function () {
    return this.kid;
  };
  protoOf(ParsedAzurePublicKey).cc = function () {
    return this.azureKeyType;
  };
  protoOf(ParsedAzurePublicKey).zo = function () {
    return this.curve;
  };
  protoOf(ParsedAzurePublicKey).i6v = function () {
    return this.keyType;
  };
  protoOf(ParsedAzurePublicKey).p7f = function () {
    return this.publicKey;
  };
  protoOf(ParsedAzurePublicKey).q7f = function (kid, azureKeyType, curve, keyType, publicKey) {
    return new ParsedAzurePublicKey(kid, azureKeyType, curve, keyType, publicKey);
  };
  protoOf(ParsedAzurePublicKey).copy = function (kid, azureKeyType, curve, keyType, publicKey, $super) {
    kid = kid === VOID ? this.kid : kid;
    azureKeyType = azureKeyType === VOID ? this.azureKeyType : azureKeyType;
    curve = curve === VOID ? this.curve : curve;
    keyType = keyType === VOID ? this.keyType : keyType;
    publicKey = publicKey === VOID ? this.publicKey : publicKey;
    return $super === VOID ? this.q7f(kid, azureKeyType, curve, keyType, publicKey) : $super.q7f.call(this, kid, azureKeyType, curve, keyType, publicKey);
  };
  protoOf(ParsedAzurePublicKey).toString = function () {
    return 'ParsedAzurePublicKey(kid=' + this.kid + ', azureKeyType=' + this.azureKeyType + ', curve=' + this.curve + ', keyType=' + this.keyType.toString() + ', publicKey=' + this.publicKey.toString() + ')';
  };
  protoOf(ParsedAzurePublicKey).hashCode = function () {
    var result = getStringHashCode(this.kid);
    result = imul(result, 31) + getStringHashCode(this.azureKeyType) | 0;
    result = imul(result, 31) + (this.curve == null ? 0 : getStringHashCode(this.curve)) | 0;
    result = imul(result, 31) + this.keyType.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.publicKey) | 0;
    return result;
  };
  protoOf(ParsedAzurePublicKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParsedAzurePublicKey))
      return false;
    var tmp0_other_with_cast = other instanceof ParsedAzurePublicKey ? other : THROW_CCE();
    if (!(this.kid === tmp0_other_with_cast.kid))
      return false;
    if (!(this.azureKeyType === tmp0_other_with_cast.azureKeyType))
      return false;
    if (!(this.curve == tmp0_other_with_cast.curve))
      return false;
    if (!this.keyType.equals(tmp0_other_with_cast.keyType))
      return false;
    if (!equals(this.publicKey, tmp0_other_with_cast.publicKey))
      return false;
    return true;
  };
  function AzureTokenResponse(tokenType, expiresIn, extExpiresIn, accessToken) {
    this.tokenType = tokenType;
    this.expiresIn = expiresIn;
    this.extExpiresIn = extExpiresIn;
    this.accessToken = accessToken;
  }
  protoOf(AzureTokenResponse).r7f = function () {
    return this.tokenType;
  };
  protoOf(AzureTokenResponse).s7f = function () {
    return this.expiresIn;
  };
  protoOf(AzureTokenResponse).t7f = function () {
    return this.extExpiresIn;
  };
  protoOf(AzureTokenResponse).u7f = function () {
    return this.accessToken;
  };
  protoOf(AzureTokenResponse).bc = function () {
    return this.tokenType;
  };
  protoOf(AzureTokenResponse).cc = function () {
    return this.expiresIn;
  };
  protoOf(AzureTokenResponse).zo = function () {
    return this.extExpiresIn;
  };
  protoOf(AzureTokenResponse).i6v = function () {
    return this.accessToken;
  };
  protoOf(AzureTokenResponse).v7f = function (tokenType, expiresIn, extExpiresIn, accessToken) {
    return new AzureTokenResponse(tokenType, expiresIn, extExpiresIn, accessToken);
  };
  protoOf(AzureTokenResponse).copy = function (tokenType, expiresIn, extExpiresIn, accessToken, $super) {
    tokenType = tokenType === VOID ? this.tokenType : tokenType;
    expiresIn = expiresIn === VOID ? this.expiresIn : expiresIn;
    extExpiresIn = extExpiresIn === VOID ? this.extExpiresIn : extExpiresIn;
    accessToken = accessToken === VOID ? this.accessToken : accessToken;
    return $super === VOID ? this.v7f(tokenType, expiresIn, extExpiresIn, accessToken) : $super.v7f.call(this, tokenType, expiresIn, extExpiresIn, accessToken);
  };
  protoOf(AzureTokenResponse).toString = function () {
    return 'AzureTokenResponse(tokenType=' + this.tokenType + ', expiresIn=' + this.expiresIn + ', extExpiresIn=' + this.extExpiresIn + ', accessToken=' + this.accessToken + ')';
  };
  protoOf(AzureTokenResponse).hashCode = function () {
    var result = getStringHashCode(this.tokenType);
    result = imul(result, 31) + this.expiresIn | 0;
    result = imul(result, 31) + this.extExpiresIn | 0;
    result = imul(result, 31) + getStringHashCode(this.accessToken) | 0;
    return result;
  };
  protoOf(AzureTokenResponse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AzureTokenResponse))
      return false;
    var tmp0_other_with_cast = other instanceof AzureTokenResponse ? other : THROW_CCE();
    if (!(this.tokenType === tmp0_other_with_cast.tokenType))
      return false;
    if (!(this.expiresIn === tmp0_other_with_cast.expiresIn))
      return false;
    if (!(this.extExpiresIn === tmp0_other_with_cast.extExpiresIn))
      return false;
    if (!(this.accessToken === tmp0_other_with_cast.accessToken))
      return false;
    return true;
  };
  function AzureTokenResponseParsed(accessToken, expiration) {
    this.accessToken = accessToken;
    this.expiration = expiration;
  }
  protoOf(AzureTokenResponseParsed).u7f = function () {
    return this.accessToken;
  };
  protoOf(AzureTokenResponseParsed).w7f = function () {
    return this.expiration;
  };
  protoOf(AzureTokenResponseParsed).bc = function () {
    return this.accessToken;
  };
  protoOf(AzureTokenResponseParsed).cc = function () {
    return this.expiration;
  };
  protoOf(AzureTokenResponseParsed).x7f = function (accessToken, expiration) {
    return new AzureTokenResponseParsed(accessToken, expiration);
  };
  protoOf(AzureTokenResponseParsed).copy = function (accessToken, expiration, $super) {
    accessToken = accessToken === VOID ? this.accessToken : accessToken;
    expiration = expiration === VOID ? this.expiration : expiration;
    return $super === VOID ? this.x7f(accessToken, expiration) : $super.x7f.call(this, accessToken, expiration);
  };
  protoOf(AzureTokenResponseParsed).toString = function () {
    return 'AzureTokenResponseParsed(accessToken=' + this.accessToken + ', expiration=' + this.expiration.toString() + ')';
  };
  protoOf(AzureTokenResponseParsed).hashCode = function () {
    var result = getStringHashCode(this.accessToken);
    result = imul(result, 31) + this.expiration.hashCode() | 0;
    return result;
  };
  protoOf(AzureTokenResponseParsed).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AzureTokenResponseParsed))
      return false;
    var tmp0_other_with_cast = other instanceof AzureTokenResponseParsed ? other : THROW_CCE();
    if (!(this.accessToken === tmp0_other_with_cast.accessToken))
      return false;
    if (!this.expiration.equals(tmp0_other_with_cast.expiration))
      return false;
    return true;
  };
  function AzureKey$AzureKeyFunctions$azureJsonDataBody$lambda($this_azureJsonDataBody) {
    return function () {
      return 'Azure server (URL: ' + get_request($this_azureJsonDataBody).t3j().toString() + ') returned an invalid response: ';
    };
  }
  function AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda($auth, resultContinuation) {
    this.g7g_1 = $auth;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda).h7g = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda).yb = function ($completion) {
    return this.h7g($completion);
  };
  protoOf(AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = AzureKeyFunctions_instance.i7g(this.g7g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda).ha = function (completion) {
    return new AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda(this.g7g_1, completion);
  };
  function AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda_0($auth, resultContinuation) {
    var i = new AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda($auth, resultContinuation);
    var l = function ($completion) {
      return i.h7g($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $parseAzurePublicKeyCOROUTINE$33(_this__u8e3s4, publicKeyJson, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r7g_1 = _this__u8e3s4;
    this.s7g_1 = publicKeyJson;
  }
  protoOf($parseAzurePublicKeyCOROUTINE$33).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.s7g_1.we('kid');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4p();
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var message = 'No key id in key response';
              throw IllegalStateException_init_$Create$(toString_0(message));
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }

            tmp_0.t7g_1 = tmp_1;
            var tmp_2 = this;
            var tmp3_safe_receiver = this.s7g_1.we('kty');
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonPrimitive(tmp3_safe_receiver);
            var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.v4p();
            var tmp_3;
            if (tmp5_elvis_lhs == null) {
              var message_0 = 'Missing key type in public key response';
              throw IllegalStateException_init_$Create$(toString_0(message_0));
            } else {
              tmp_3 = tmp5_elvis_lhs;
            }

            tmp_2.u7g_1 = tmp_3;
            var tmp_4 = this;
            var tmp6_safe_receiver = this.s7g_1.we('crv');
            var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonPrimitive(tmp6_safe_receiver);
            tmp_4.v7g_1 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.v4p();
            this.l9_1 = 1;
            suspendResult = Companion_instance_31.m7d(this.s7g_1.toString(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.vo_1;
            var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
            var tmp_5;
            if (exception == null) {
              var tmp_6 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_5 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
            } else {
              throw IllegalArgumentException_init_$Create$_0('Invalid JWK in public key: ' + this.s7g_1.toString(), exception);
            }

            var publicKey = tmp_5;
            var tmp8_elvis_lhs = this.v7g_1;
            var keyType = this.r7g_1.w7g(tmp8_elvis_lhs == null ? '' : tmp8_elvis_lhs, this.u7g_1);
            return new ParsedAzurePublicKey(this.t7g_1, this.u7g_1, this.v7g_1, keyType, publicKey);
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $fetchAccessTokenCOROUTINE$34(_this__u8e3s4, auth, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f7h_1 = _this__u8e3s4;
    this.g7h_1 = auth;
  }
  protoOf($fetchAccessTokenCOROUTINE$34).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 7;
            var tmp0 = this.g7h_1.tenantId;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              while (inductionVariable < charSequenceLength(tmp0)) {
                var element = charSequenceGet(tmp0, inductionVariable);
                inductionVariable = inductionVariable + 1 | 0;
                var this_0 = toString_1(element).toLowerCase();
                if (!contains('abcdef0123456789-', this_0)) {
                  tmp$ret$0 = false;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = true;
            }
             while (false);
            if (!tmp$ret$0) {
              var message = 'Tenant id contains invalid characters: ' + this.g7h_1.tenantId;
              throw IllegalArgumentException_init_$Create$(toString_0(message));
            }

            this.h7h_1 = System_instance.g5q();
            var tmp_0 = this;
            tmp_0.i7h_1 = Companion_getInstance_21().k6p_1;
            var tmp_1 = this;
            tmp_1.j7h_1 = 'https://login.microsoftonline.com/' + this.g7h_1.tenantId + '/oauth2/v2.0/token';
            this.k7h_1 = this.i7h_1;
            this.l7h_1 = this.j7h_1;
            var tmp_2 = this;
            tmp_2.m7h_1 = this.k7h_1;
            this.n7h_1 = this.m7h_1;
            var tmp_3 = this;
            tmp_3.o7h_1 = this.n7h_1;
            var tmp_4 = this;
            var this_1 = new HttpRequestBuilder();
            url(this_1, this.l7h_1);
            contentType(this_1, Application_getInstance().i2t_1);
            var body = formUrlEncode(listOf([to('grant_type', 'client_credentials'), to('client_id', this.g7h_1.clientId), to('client_secret', this.g7h_1.clientSecret), to('scope', 'https://vault.azure.net/.default')]));
            if (body == null) {
              this_1.k3h_1 = NullBody_instance;
              var tmp_5 = PrimitiveClasses_getInstance().ld();
              var tmp_6;
              try {
                tmp_6 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
              this_1.d3n(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_1.k3h_1 = body;
                this_1.d3n(null);
              } else {
                this_1.k3h_1 = body;
                var tmp_8 = PrimitiveClasses_getInstance().ld();
                var tmp_9;
                try {
                  tmp_9 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
                this_1.d3n(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.p7h_1 = this_1;
            this.q7h_1 = this.o7h_1;
            this.r7h_1 = this.p7h_1;
            this.r7h_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_11 = this;
            tmp_11.s7h_1 = this.q7h_1;
            var tmp_12 = this;
            tmp_12.t7h_1 = this.r7h_1;
            this.u7h_1 = this.s7h_1;
            this.v7h_1 = this.t7h_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.v7h_1, this.u7h_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w7h_1 = suspendResult;
            this.x7h_1 = this.w7h_1;
            var tmp_13 = this;
            tmp_13.y7h_1 = this.x7h_1;
            this.z7h_1 = this.y7h_1;
            var tmp_14 = this;
            tmp_14.a7i_1 = this.z7h_1;
            this.b7i_1 = this.a7i_1;
            this.m9_1 = 3;
            var tmp_15 = this;
            tmp_15.d7i_1 = Companion_instance_1;
            var tmp_16 = this;
            tmp_16.e7i_1 = this.b7i_1;
            this.f7i_1 = this.e7i_1;
            var tmp_17 = this;
            tmp_17.g7i_1 = this.f7i_1;
            this.h7i_1 = this.g7i_1;
            this.l9_1 = 2;
            var tmp_18 = this.h7i_1.p3k();
            var tmp_19 = getKClass(AzureTokenResponse);
            var tmp_20;
            try {
              tmp_20 = createKType(getKClass(AzureTokenResponse), arrayOf([]), false);
            } catch ($p) {
              var tmp_21;
              if ($p instanceof Error) {
                var _unused_var__etf5q3_1 = $p;
                tmp_21 = null;
              } else {
                throw $p;
              }
              tmp_20 = tmp_21;
            }

            suspendResult = tmp_18.s3j(new TypeInfo(tmp_19, tmp_20), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_22 = this;
            tmp_22.i7i_1 = suspendResult instanceof AzureTokenResponse ? suspendResult : THROW_CCE();
            var tmp_23 = this;
            this.d7i_1;
            var value = this.i7i_1;
            tmp_23.c7i_1 = _Result___init__impl__xyqfz8(value);
            this.m9_1 = 7;
            this.l9_1 = 4;
            continue $sm;
          case 3:
            this.m9_1 = 7;
            var tmp_24 = this.o9_1;
            if (tmp_24 instanceof Error) {
              this.j7i_1 = this.o9_1;
              var tmp_25 = this;
              var exception = this.j7i_1;
              tmp_25.c7i_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.l9_1 = 4;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 4:
            this.m9_1 = 7;
            this.k7i_1 = this.c7i_1;
            this.l7i_1 = this.k7i_1;
            this.m7i_1 = Result__exceptionOrNull_impl_p6xea9(this.l7i_1);
            if (this.m7i_1 == null) {
              var tmp_26 = this;
              var tmp_27 = _Result___get_value__impl__bjfvqg(this.l7i_1);
              tmp_26.n7i_1 = (tmp_27 == null ? true : !(tmp_27 == null)) ? tmp_27 : THROW_CCE();
              this.l9_1 = 6;
              continue $sm;
            } else {
              var tmp_28 = this;
              tmp_28.o7i_1 = this.m7i_1;
              this.p7i_1 = this.o7i_1;
              this.l9_1 = 5;
              suspendResult = bodyAsText(this.z7h_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = 'Could not retrieve access token: ' + ARGUMENT;
            var tmp_29 = this;
            throw IllegalArgumentException_init_$Create$_0(ARGUMENT_0, this.p7i_1);
          case 6:
            var response = this.n7i_1;
            if (!(response.tokenType.toLowerCase() === 'bearer')) {
              var message_0 = 'Can only handle bearer access tokens!';
              throw IllegalStateException_init_$Create$(toString_0(message_0));
            }

            Companion_getInstance();
            var this_2 = response.expiresIn;
            return new AzureTokenResponseParsed(response.accessToken, this.h7h_1.eo(toDuration(this_2, DurationUnit_SECONDS_getInstance())));
          case 7:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 7) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($fetchAccessTokenCOROUTINE$34)['<set-state>'] = protoOf($fetchAccessTokenCOROUTINE$34).s9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-state>'] = protoOf($fetchAccessTokenCOROUTINE$34).t9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<set-exceptionState>'] = protoOf($fetchAccessTokenCOROUTINE$34).u9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-exceptionState>'] = protoOf($fetchAccessTokenCOROUTINE$34).v9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<set-result>'] = protoOf($fetchAccessTokenCOROUTINE$34).w9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-result>'] = protoOf($fetchAccessTokenCOROUTINE$34).x9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<set-exception>'] = protoOf($fetchAccessTokenCOROUTINE$34).y9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-exception>'] = protoOf($fetchAccessTokenCOROUTINE$34).z9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<set-finallyPath>'] = protoOf($fetchAccessTokenCOROUTINE$34).aa;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-finallyPath>'] = protoOf($fetchAccessTokenCOROUTINE$34).ba;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-context>'] = protoOf($fetchAccessTokenCOROUTINE$34).r9;
  function $azureJsonDataBodyCOROUTINE$35(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y7i_1 = _this__u8e3s4;
    this.z7i_1 = _this__u8e3s4_0;
  }
  protoOf($azureJsonDataBodyCOROUTINE$35).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 6;
            var tmp_0 = this;
            tmp_0.a7j_1 = AzureKey$AzureKeyFunctions$azureJsonDataBody$lambda(this.z7i_1);
            var tmp_1 = this;
            tmp_1.b7j_1 = this.z7i_1;
            this.c7j_1 = this.b7j_1;
            this.m9_1 = 2;
            var tmp_2 = this;
            tmp_2.e7j_1 = Companion_instance_1;
            var tmp_3 = this;
            tmp_3.f7j_1 = this.c7j_1;
            this.g7j_1 = this.f7j_1;
            var tmp_4 = this;
            tmp_4.h7j_1 = this.g7j_1;
            this.i7j_1 = this.h7j_1;
            this.l9_1 = 1;
            var tmp_5 = this.i7j_1.p3k();
            var tmp_6 = getKClass(JsonObject);
            var tmp_7;
            try {
              tmp_7 = createKType(getKClass(JsonObject), arrayOf([]), false);
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

            suspendResult = tmp_5.s3j(new TypeInfo(tmp_6, tmp_7), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_9 = this;
            tmp_9.j7j_1 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp_10 = this;
            this.e7j_1;
            var value = this.j7j_1;
            tmp_10.d7j_1 = _Result___init__impl__xyqfz8(value);
            this.m9_1 = 6;
            this.l9_1 = 3;
            continue $sm;
          case 2:
            this.m9_1 = 6;
            var tmp_11 = this.o9_1;
            if (tmp_11 instanceof Error) {
              this.k7j_1 = this.o9_1;
              var tmp_12 = this;
              var exception = this.k7j_1;
              tmp_12.d7j_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.l9_1 = 3;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 3:
            this.m9_1 = 6;
            this.l7j_1 = this.d7j_1;
            this.m7j_1 = this.l7j_1;
            this.n7j_1 = Result__exceptionOrNull_impl_p6xea9(this.m7j_1);
            if (this.n7j_1 == null) {
              var tmp_13 = this;
              var tmp_14 = _Result___get_value__impl__bjfvqg(this.m7j_1);
              tmp_13.o7j_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
              this.l9_1 = 5;
              continue $sm;
            } else {
              var tmp_15 = this;
              tmp_15.p7j_1 = this.n7j_1;
              this.q7j_1 = this.p7j_1;
              this.l9_1 = 4;
              suspendResult = bodyAsText(this.z7i_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            var bodyStr = suspendResult;
            var tmp_16 = this;
            var tmp_17 = this.a7j_1();
            var tmp_18;
            if (charSequenceLength(bodyStr) === 0) {
              tmp_18 = 'empty response (instead of JSON data)';
            } else {
              tmp_18 = 'invalid response: ' + bodyStr;
            }

            throw IllegalArgumentException_init_$Create$_0(tmp_17 + tmp_18, this.q7j_1);
          case 5:
            return this.o7j_1;
          case 6:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 6) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function AzureKey$Companion$$childSerializers$_anonymous__rzdjc6() {
    return Companion_getInstance_13().s4p();
  }
  function AzureKey$Companion$client$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.o3i(tmp, AzureKey$Companion$client$lambda$lambda);
    return Unit_instance;
  }
  function AzureKey$Companion$client$lambda$lambda($this$install) {
    json($this$install, Json(VOID, AzureKey$Companion$client$lambda$lambda$lambda));
    return Unit_instance;
  }
  function AzureKey$Companion$client$lambda$lambda$lambda($this$Json) {
    $this$Json.j4o_1 = true;
    return Unit_instance;
  }
  function $generateCOROUTINE$36(_this__u8e3s4, type, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z7j_1 = _this__u8e3s4;
    this.a7k_1 = type;
    this.b7k_1 = metadata;
  }
  protoOf($generateCOROUTINE$36).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 5;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.b7k_1.a7l_1;
            tmp_0.c7k_1 = tmp0_elvis_lhs == null ? Default_getInstance_0().bi().toString() : tmp0_elvis_lhs;
            this.l9_1 = 1;
            suspendResult = AzureKeyFunctions_instance.i7g(this.b7k_1.z7k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d7k_1 = suspendResult;
            this.e7k_1 = AzureKeyFunctions_instance.b7l(this.a7k_1);
            this.f7k_1 = this.e7k_1.bc();
            this.g7k_1 = this.e7k_1.cc();
            var tmp_1 = this;
            var tmp_2;
            if (this.f7k_1 === 'RSA') {
              var tmp1_keyOps = listOf(['sign', 'verify']);
              tmp_2 = new KeyCreateRequest(this.f7k_1, VOID, 2048, tmp1_keyOps);
            } else {
              tmp_2 = new KeyCreateRequest(this.f7k_1, ensureNotNull(this.g7k_1), VOID, listOf(['sign', 'verify']));
            }

            tmp_1.h7k_1 = tmp_2;
            this.i7k_1 = AzureKeyFunctions_instance;
            var tmp_3 = this;
            tmp_3.j7k_1 = this.z7j_1.k6p_1;
            var tmp_4 = this;
            tmp_4.k7k_1 = this.b7k_1.z7k_1.keyVaultUrl + '/keys/' + this.c7k_1 + '/create?api-version=7.4';
            this.l7k_1 = this.j7k_1;
            this.m7k_1 = this.k7k_1;
            var tmp_5 = this;
            tmp_5.n7k_1 = this.l7k_1;
            this.o7k_1 = this.n7k_1;
            var tmp_6 = this;
            tmp_6.p7k_1 = this.o7k_1;
            var tmp_7 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.m7k_1);
            contentType(this_0, Application_getInstance().x2s_1);
            bearerAuth(this_0, this.d7k_1.accessToken);
            var body = this.h7k_1;
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_8 = getKClass(KeyCreateRequest);
              var tmp_9;
              try {
                tmp_9 = createKType(getKClass(KeyCreateRequest), arrayOf([]), false);
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
              this_0.d3n(new TypeInfo(tmp_8, tmp_9));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_11 = getKClass(KeyCreateRequest);
                var tmp_12;
                try {
                  tmp_12 = createKType(getKClass(KeyCreateRequest), arrayOf([]), false);
                } catch ($p) {
                  var tmp_13;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_13 = null;
                  } else {
                    throw $p;
                  }
                  tmp_12 = tmp_13;
                }
                this_0.d3n(new TypeInfo(tmp_11, tmp_12));
              }
            }

            tmp_7.q7k_1 = this_0;
            this.r7k_1 = this.p7k_1;
            this.s7k_1 = this.q7k_1;
            this.s7k_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_14 = this;
            tmp_14.t7k_1 = this.r7k_1;
            var tmp_15 = this;
            tmp_15.u7k_1 = this.s7k_1;
            this.v7k_1 = this.t7k_1;
            this.w7k_1 = this.u7k_1;
            this.l9_1 = 2;
            suspendResult = (new HttpStatement(this.w7k_1, this.v7k_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x7k_1 = suspendResult;
            this.l9_1 = 3;
            suspendResult = this.i7k_1.c7l(this.x7k_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.y7k_1 = suspendResult;
            this.l9_1 = 4;
            var tmp_16 = AzureKeyFunctions_instance;
            var tmp2_safe_receiver = get_jsonObject(this.y7k_1).we('key');
            suspendResult = tmp_16.d7l(ensureNotNull(tmp2_safe_receiver == null ? null : get_jsonObject(tmp2_safe_receiver)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var parsedAzurePublicKey = suspendResult;
            var keyId = parsedAzurePublicKey.kid;
            return new AzureKey(keyId, this.b7k_1.z7k_1, parsedAzurePublicKey.keyType, new DirectSerializedKey(parsedAzurePublicKey.publicKey));
          case 5:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 5) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($generateCOROUTINE$36)['<set-state>'] = protoOf($generateCOROUTINE$36).s9;
  protoOf($generateCOROUTINE$36)['<get-state>'] = protoOf($generateCOROUTINE$36).t9;
  protoOf($generateCOROUTINE$36)['<set-exceptionState>'] = protoOf($generateCOROUTINE$36).u9;
  protoOf($generateCOROUTINE$36)['<get-exceptionState>'] = protoOf($generateCOROUTINE$36).v9;
  protoOf($generateCOROUTINE$36)['<set-result>'] = protoOf($generateCOROUTINE$36).w9;
  protoOf($generateCOROUTINE$36)['<get-result>'] = protoOf($generateCOROUTINE$36).x9;
  protoOf($generateCOROUTINE$36)['<set-exception>'] = protoOf($generateCOROUTINE$36).y9;
  protoOf($generateCOROUTINE$36)['<get-exception>'] = protoOf($generateCOROUTINE$36).z9;
  protoOf($generateCOROUTINE$36)['<set-finallyPath>'] = protoOf($generateCOROUTINE$36).aa;
  protoOf($generateCOROUTINE$36)['<get-finallyPath>'] = protoOf($generateCOROUTINE$36).ba;
  protoOf($generateCOROUTINE$36)['<get-context>'] = protoOf($generateCOROUTINE$36).r9;
  function _get_accessToken__9zuu2s($this) {
    var tmp = $this.g7l_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('accessToken');
    }
  }
  function _get_accessTokenExpiration__eoc3lf($this) {
    var tmp = $this.h7l_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('accessTokenExpiration');
    }
  }
  function updateKeyType($this) {
    var tmp = $this;
    var tmp0_safe_receiver = $this.f7l_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t6m_1;
    tmp.e7l_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.keyType;
  }
  function KeyCreateRequest(kty, crv, keySize, keyOps) {
    Companion_getInstance_18();
    crv = crv === VOID ? null : crv;
    keySize = keySize === VOID ? null : keySize;
    this.kty = kty;
    this.crv = crv;
    this.keySize = keySize;
    this.keyOps = keyOps;
  }
  protoOf(KeyCreateRequest).i7l = function () {
    return this.kty;
  };
  protoOf(KeyCreateRequest).j7l = function () {
    return this.crv;
  };
  protoOf(KeyCreateRequest).k7l = function () {
    return this.keySize;
  };
  protoOf(KeyCreateRequest).l7l = function () {
    return this.keyOps;
  };
  protoOf(KeyCreateRequest).bc = function () {
    return this.kty;
  };
  protoOf(KeyCreateRequest).cc = function () {
    return this.crv;
  };
  protoOf(KeyCreateRequest).zo = function () {
    return this.keySize;
  };
  protoOf(KeyCreateRequest).i6v = function () {
    return this.keyOps;
  };
  protoOf(KeyCreateRequest).m7l = function (kty, crv, keySize, keyOps) {
    return new KeyCreateRequest(kty, crv, keySize, keyOps);
  };
  protoOf(KeyCreateRequest).copy = function (kty, crv, keySize, keyOps, $super) {
    kty = kty === VOID ? this.kty : kty;
    crv = crv === VOID ? this.crv : crv;
    keySize = keySize === VOID ? this.keySize : keySize;
    keyOps = keyOps === VOID ? this.keyOps : keyOps;
    return $super === VOID ? this.m7l(kty, crv, keySize, keyOps) : $super.m7l.call(this, kty, crv, keySize, keyOps);
  };
  protoOf(KeyCreateRequest).toString = function () {
    return 'KeyCreateRequest(kty=' + this.kty + ', crv=' + this.crv + ', keySize=' + this.keySize + ', keyOps=' + toString_0(this.keyOps) + ')';
  };
  protoOf(KeyCreateRequest).hashCode = function () {
    var result = getStringHashCode(this.kty);
    result = imul(result, 31) + (this.crv == null ? 0 : getStringHashCode(this.crv)) | 0;
    result = imul(result, 31) + (this.keySize == null ? 0 : this.keySize) | 0;
    result = imul(result, 31) + hashCode(this.keyOps) | 0;
    return result;
  };
  protoOf(KeyCreateRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeyCreateRequest))
      return false;
    var tmp0_other_with_cast = other instanceof KeyCreateRequest ? other : THROW_CCE();
    if (!(this.kty === tmp0_other_with_cast.kty))
      return false;
    if (!(this.crv == tmp0_other_with_cast.crv))
      return false;
    if (!(this.keySize == tmp0_other_with_cast.keySize))
      return false;
    if (!equals(this.keyOps, tmp0_other_with_cast.keyOps))
      return false;
    return true;
  };
  function AzureKeyFunctions() {
  }
  protoOf(AzureKeyFunctions).b7l = function (type) {
    var tmp;
    switch (type.r2_1) {
      case 2:
        tmp = to('EC', 'P-256');
        break;
      case 1:
        tmp = to('EC', 'P-256K');
        break;
      case 3:
        tmp = to('RSA', null);
        break;
      default:
        throw new KeyTypeNotSupportedException(type.q2_1);
    }
    return tmp;
  };
  protoOf(AzureKeyFunctions).w7g = function (crv, kty) {
    var tmp;
    switch (kty) {
      case 'EC':
        var tmp_0;
        switch (crv) {
          case 'P-256':
            tmp_0 = KeyType_secp256r1_getInstance();
            break;
          case 'P-256K':
            tmp_0 = KeyType_secp256k1_getInstance();
            break;
          default:
            throw new KeyTypeNotSupportedException(crv);
        }

        tmp = tmp_0;
        break;
      case 'RSA':
        tmp = KeyType_RSA_getInstance();
        break;
      default:
        throw new KeyTypeNotSupportedException(kty);
    }
    return tmp;
  };
  protoOf(AzureKeyFunctions).d7l = function (publicKeyJson, $completion) {
    var tmp = new $parseAzurePublicKeyCOROUTINE$33(this, publicKeyJson, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKeyFunctions).i7g = function (auth, $completion) {
    var tmp = new $fetchAccessTokenCOROUTINE$34(this, auth, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKeyFunctions).c7l = function (_this__u8e3s4, $completion) {
    var tmp = new $azureJsonDataBodyCOROUTINE$35(this, _this__u8e3s4, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKeyFunctions).n7l = function (auth) {
    var tmp = AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda_0(auth, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var AzureKeyFunctions_instance;
  function AzureKeyFunctions_getInstance() {
    return AzureKeyFunctions_instance;
  }
  function Companion_16() {
    Companion_instance_21 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j6p_1 = [null, null, lazy(tmp_0, AzureKey$Companion$$childSerializers$_anonymous__rzdjc6), null];
    var tmp_1 = this;
    tmp_1.k6p_1 = HttpClient(AzureKey$Companion$client$lambda);
  }
  protoOf(Companion_16).l6p = function (type, metadata, $completion) {
    var tmp = new $generateCOROUTINE$36(this, type, metadata, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Companion_16).s4p = function () {
    return $serializer_getInstance_12();
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_16();
    return Companion_instance_21;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('azure', this, 4);
    tmp0_serialDesc.v28('id', false);
    tmp0_serialDesc.v28('auth', false);
    tmp0_serialDesc.v28('_keyType', true);
    tmp0_serialDesc.v28('_publicKey', true);
    tmp0_serialDesc.w28(new JsonClassDiscriminator('type'));
    this.o7l_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).p7l = function (encoder, value) {
    var tmp0_desc = this.o7l_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_21().j6p_1;
    tmp1_output.w22(tmp0_desc, 0, value.id);
    tmp1_output.y22(tmp0_desc, 1, $serializer_getInstance_8(), value.auth);
    if (tmp1_output.e23(tmp0_desc, 2) ? true : !(value.e7l_1 == null)) {
      tmp1_output.a23(tmp0_desc, 2, tmp2_cached[2].z(), value.e7l_1);
    }
    if (tmp1_output.e23(tmp0_desc, 3) ? true : !(value.f7l_1 == null)) {
      tmp1_output.a23(tmp0_desc, 3, DirectKeySerializer_getInstance(), value.f7l_1);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_12).v1x = function (encoder, value) {
    return this.p7l(encoder, value instanceof AzureKey ? value : THROW_CCE());
  };
  protoOf($serializer_12).w1x = function (decoder) {
    var tmp0_desc = this.o7l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp10_input = decoder.h21(tmp0_desc);
    var tmp11_cached = Companion_getInstance_21().j6p_1;
    if (tmp10_input.x21()) {
      tmp4_local0 = tmp10_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.t21(tmp0_desc, 1, $serializer_getInstance_8(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.v21(tmp0_desc, 2, tmp11_cached[2].z(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.v21(tmp0_desc, 3, DirectKeySerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.t21(tmp0_desc, 1, $serializer_getInstance_8(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.v21(tmp0_desc, 2, tmp11_cached[2].z(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.v21(tmp0_desc, 3, DirectKeySerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.i21(tmp0_desc);
    return AzureKey_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_12).u1x = function () {
    return this.o7l_1;
  };
  protoOf($serializer_12).l29 = function () {
    var tmp0_cached = Companion_getInstance_21().j6p_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer_getInstance_8(), get_nullable(tmp0_cached[2].z()), get_nullable(DirectKeySerializer_getInstance())];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function AzureKey_init_$Init$(seen0, id, auth, _keyType, _publicKey, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_12().o7l_1);
    }
    Key_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.id = id;
    $this.auth = auth;
    if (0 === (seen0 & 4))
      $this.e7l_1 = null;
    else
      $this.e7l_1 = _keyType;
    if (0 === (seen0 & 8))
      $this.f7l_1 = null;
    else
      $this.f7l_1 = _publicKey;
    return $this;
  }
  function AzureKey_init_$Create$(seen0, id, auth, _keyType, _publicKey, serializationConstructorMarker) {
    return AzureKey_init_$Init$(seen0, id, auth, _keyType, _publicKey, serializationConstructorMarker, objectCreate(protoOf(AzureKey)));
  }
  function AzureKey$deleteKeyAsync$slambda(this$0, resultContinuation) {
    this.y7l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$deleteKeyAsync$slambda).m6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$deleteKeyAsync$slambda).yb = function ($completion) {
    return this.m6f($completion);
  };
  protoOf(AzureKey$deleteKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.y7l_1.n6f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$deleteKeyAsync$slambda).ha = function (completion) {
    return new AzureKey$deleteKeyAsync$slambda(this.y7l_1, completion);
  };
  function AzureKey$deleteKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$deleteKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.h7m_1 = this$0;
    this.i7m_1 = $plaintext;
    this.j7m_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$signJwsAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$signJwsAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(AzureKey$signJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.h7m_1.a6g(this.i7m_1, this.j7m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$signJwsAsync$slambda).ha = function (completion) {
    return new AzureKey$signJwsAsync$slambda(this.h7m_1, this.i7m_1, this.j7m_1, completion);
  };
  function AzureKey$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new AzureKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$signRawAsync$slambda(this$0, $plaintext, resultContinuation) {
    this.s7m_1 = this$0;
    this.t7m_1 = $plaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$signRawAsync$slambda).k6l = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$signRawAsync$slambda).yb = function ($completion) {
    return this.k6l($completion);
  };
  protoOf(AzureKey$signRawAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.s7m_1.l75(this.t7m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$signRawAsync$slambda).ha = function (completion) {
    return new AzureKey$signRawAsync$slambda(this.s7m_1, this.t7m_1, completion);
  };
  function AzureKey$signRawAsync$slambda_0(this$0, $plaintext, resultContinuation) {
    var i = new AzureKey$signRawAsync$slambda(this$0, $plaintext, resultContinuation);
    var l = function ($completion) {
      return i.k6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.c7n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$getKeyIdAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$getKeyIdAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(AzureKey$getKeyIdAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.c7n_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$getKeyIdAsync$slambda).ha = function (completion) {
    return new AzureKey$getKeyIdAsync$slambda(this.c7n_1, completion);
  };
  function AzureKey$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$signRawAzureAsync$slambda(this$0, $plaintext, $ieeeP1363Signature, resultContinuation) {
    this.l7n_1 = this$0;
    this.m7n_1 = $plaintext;
    this.n7n_1 = $ieeeP1363Signature;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$signRawAzureAsync$slambda).k6l = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$signRawAzureAsync$slambda).yb = function ($completion) {
    return this.k6l($completion);
  };
  protoOf(AzureKey$signRawAzureAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.l7n_1.o7n(this.m7n_1, this.n7n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$signRawAzureAsync$slambda).ha = function (completion) {
    return new AzureKey$signRawAzureAsync$slambda(this.l7n_1, this.m7n_1, this.n7n_1, completion);
  };
  function AzureKey$signRawAzureAsync$slambda_0(this$0, $plaintext, $ieeeP1363Signature, resultContinuation) {
    var i = new AzureKey$signRawAzureAsync$slambda(this$0, $plaintext, $ieeeP1363Signature, resultContinuation);
    var l = function ($completion) {
      return i.k6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$getPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.x7n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$getPublicKeyAsync$slambda).q6h = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$getPublicKeyAsync$slambda).yb = function ($completion) {
    return this.q6h($completion);
  };
  protoOf(AzureKey$getPublicKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.x7n_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$getPublicKeyAsync$slambda).ha = function (completion) {
    return new AzureKey$getPublicKeyAsync$slambda(this.x7n_1, completion);
  };
  function AzureKey$getPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$getPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.q6h($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$getMetaAsync$slambda(this$0, resultContinuation) {
    this.g7o_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$getMetaAsync$slambda).b6i = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$getMetaAsync$slambda).yb = function ($completion) {
    return this.b6i($completion);
  };
  protoOf(AzureKey$getMetaAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.g7o_1.c6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$getMetaAsync$slambda).ha = function (completion) {
    return new AzureKey$getMetaAsync$slambda(this.g7o_1, completion);
  };
  function AzureKey$getMetaAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$getMetaAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.b6i($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.p7o_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$exportPEMAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$exportPEMAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(AzureKey$exportPEMAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.p7o_1.m6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$exportPEMAsync$slambda).ha = function (completion) {
    return new AzureKey$exportPEMAsync$slambda(this.p7o_1, completion);
  };
  function AzureKey$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.y7o_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$getThumbprintAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$getThumbprintAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(AzureKey$getThumbprintAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.y7o_1.w6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$getThumbprintAsync$slambda).ha = function (completion) {
    return new AzureKey$getThumbprintAsync$slambda(this.y7o_1, completion);
  };
  function AzureKey$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.h7p_1 = this$0;
    this.i7p_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$verifyJwsAsync$slambda).r6j = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AzureKey$verifyJwsAsync$slambda).yb = function ($completion) {
    return this.r6j($completion);
  };
  protoOf(AzureKey$verifyJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.h7p_1.s6j(this.i7p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$verifyJwsAsync$slambda).ha = function (completion) {
    return new AzureKey$verifyJwsAsync$slambda(this.h7p_1, this.i7p_1, completion);
  };
  function AzureKey$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new AzureKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.r6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.r7p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$exportJWKAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$exportJWKAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(AzureKey$exportJWKAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.r7p_1.c6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$exportJWKAsync$slambda).ha = function (completion) {
    return new AzureKey$exportJWKAsync$slambda(this.r7p_1, completion);
  };
  function AzureKey$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.a7q_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$exportJWKObjectAsync$slambda).m6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$exportJWKObjectAsync$slambda).yb = function ($completion) {
    return this.m6k($completion);
  };
  protoOf(AzureKey$exportJWKObjectAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.a7q_1.n6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$exportJWKObjectAsync$slambda).ha = function (completion) {
    return new AzureKey$exportJWKObjectAsync$slambda(this.a7q_1, completion);
  };
  function AzureKey$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.j7q_1 = this$0;
    this.k7q_1 = $signed;
    this.l7q_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$verifyRawAsync$slambda).z6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AzureKey$verifyRawAsync$slambda).yb = function ($completion) {
    return this.z6k($completion);
  };
  protoOf(AzureKey$verifyRawAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.j7q_1.a6l(this.k7q_1, this.l7q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$verifyRawAsync$slambda).ha = function (completion) {
    return new AzureKey$verifyRawAsync$slambda(this.j7q_1, this.k7q_1, this.l7q_1, completion);
  };
  function AzureKey$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new AzureKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.z6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.u7q_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$getPublicKeyRepresentationAsync$slambda).k6l = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey$getPublicKeyRepresentationAsync$slambda).yb = function ($completion) {
    return this.k6l($completion);
  };
  protoOf(AzureKey$getPublicKeyRepresentationAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.u7q_1.l6l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(AzureKey$getPublicKeyRepresentationAsync$slambda).ha = function (completion) {
    return new AzureKey$getPublicKeyRepresentationAsync$slambda(this.u7q_1, completion);
  };
  function AzureKey$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.k6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $fetchAndUpdatePublicKeyCOROUTINE$21(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d7r_1 = _this__u8e3s4;
  }
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.d7r_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e7r_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.d7r_1.f7r(this.e7r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new DirectSerializedKey(ARGUMENT);
            this.d7r_1.f7l_1 = ARGUMENT_0;
            return Unit_instance;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<set-state>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).s9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-state>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).t9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<set-exceptionState>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).u9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-exceptionState>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).v9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<set-result>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).w9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-result>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).x9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<set-exception>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).y9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-exception>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).z9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<set-finallyPath>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).aa;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-finallyPath>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).ba;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-context>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).r9;
  function $updateAccessTokenCOROUTINE$22(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o7r_1 = _this__u8e3s4;
  }
  protoOf($updateAccessTokenCOROUTINE$22).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = AzureKeyFunctions_instance.i7g(this.o7r_1.auth, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var accessTokenResponse = suspendResult;
            this.o7r_1.g7l_1 = accessTokenResponse.accessToken;
            this.o7r_1.h7l_1 = accessTokenResponse.expiration;
            return Unit_instance;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($updateAccessTokenCOROUTINE$22)['<set-state>'] = protoOf($updateAccessTokenCOROUTINE$22).s9;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-state>'] = protoOf($updateAccessTokenCOROUTINE$22).t9;
  protoOf($updateAccessTokenCOROUTINE$22)['<set-exceptionState>'] = protoOf($updateAccessTokenCOROUTINE$22).u9;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-exceptionState>'] = protoOf($updateAccessTokenCOROUTINE$22).v9;
  protoOf($updateAccessTokenCOROUTINE$22)['<set-result>'] = protoOf($updateAccessTokenCOROUTINE$22).w9;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-result>'] = protoOf($updateAccessTokenCOROUTINE$22).x9;
  protoOf($updateAccessTokenCOROUTINE$22)['<set-exception>'] = protoOf($updateAccessTokenCOROUTINE$22).y9;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-exception>'] = protoOf($updateAccessTokenCOROUTINE$22).z9;
  protoOf($updateAccessTokenCOROUTINE$22)['<set-finallyPath>'] = protoOf($updateAccessTokenCOROUTINE$22).aa;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-finallyPath>'] = protoOf($updateAccessTokenCOROUTINE$22).ba;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-context>'] = protoOf($updateAccessTokenCOROUTINE$22).r9;
  function $ensureAccessTokenValidCOROUTINE$23(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x7r_1 = _this__u8e3s4;
  }
  protoOf($ensureAccessTokenValidCOROUTINE$23).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            if (!!(this.x7r_1.g7l_1 == null) || _get_accessTokenExpiration__eoc3lf(this.x7r_1).f67(System_instance.g5q()) >= 0) {
              this.l9_1 = 1;
              suspendResult = this.x7r_1.y7r(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 2;
              continue $sm;
            }

          case 1:
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<set-state>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).s9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-state>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).t9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<set-exceptionState>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).u9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-exceptionState>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).v9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<set-result>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).w9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-result>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).x9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<set-exception>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).y9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-exception>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).z9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<set-finallyPath>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).aa;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-finallyPath>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).ba;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-context>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).r9;
  function $initCOROUTINE$24(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h7s_1 = _this__u8e3s4;
  }
  protoOf($initCOROUTINE$24).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            this.l9_1 = 1;
            suspendResult = this.h7s_1.i7s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (this.h7s_1.f7l_1 == null) {
              this.l9_1 = 2;
              suspendResult = this.h7s_1.j7s(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 3;
              continue $sm;
            }

          case 2:
            this.l9_1 = 3;
            continue $sm;
          case 3:
            if (this.h7s_1.e7l_1 == null) {
              updateKeyType(this.h7s_1);
            }

            return Unit_instance;
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($initCOROUTINE$24)['<set-state>'] = protoOf($initCOROUTINE$24).s9;
  protoOf($initCOROUTINE$24)['<get-state>'] = protoOf($initCOROUTINE$24).t9;
  protoOf($initCOROUTINE$24)['<set-exceptionState>'] = protoOf($initCOROUTINE$24).u9;
  protoOf($initCOROUTINE$24)['<get-exceptionState>'] = protoOf($initCOROUTINE$24).v9;
  protoOf($initCOROUTINE$24)['<set-result>'] = protoOf($initCOROUTINE$24).w9;
  protoOf($initCOROUTINE$24)['<get-result>'] = protoOf($initCOROUTINE$24).x9;
  protoOf($initCOROUTINE$24)['<set-exception>'] = protoOf($initCOROUTINE$24).y9;
  protoOf($initCOROUTINE$24)['<get-exception>'] = protoOf($initCOROUTINE$24).z9;
  protoOf($initCOROUTINE$24)['<set-finallyPath>'] = protoOf($initCOROUTINE$24).aa;
  protoOf($initCOROUTINE$24)['<get-finallyPath>'] = protoOf($initCOROUTINE$24).ba;
  protoOf($initCOROUTINE$24)['<get-context>'] = protoOf($initCOROUTINE$24).r9;
  function $signRawAzureCOROUTINE$25(_this__u8e3s4, plaintext, ieeeP1363Signature, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s7s_1 = _this__u8e3s4;
    this.t7s_1 = plaintext;
    this.u7s_1 = ieeeP1363Signature;
  }
  protoOf($signRawAzureCOROUTINE$25).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            this.l9_1 = 1;
            suspendResult = this.s7s_1.i7s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.v7s_1 = SHA256_init_$Create$().g6d(this.t7s_1);
            this.w7s_1 = Base64Utils_getInstance().encodeToBase64Url(this.v7s_1);
            this.x7s_1 = jwsSigningAlgorithm(this.s7s_1.keyType);
            var tmp_0 = this;
            var builder = new JsonObjectBuilder();
            builder.h4q('alg', JsonPrimitive_0(this.x7s_1));
            builder.h4q('value', JsonPrimitive_0(this.w7s_1));
            tmp_0.y7s_1 = builder.x4o();
            var tmp_1 = this;
            tmp_1.z7s_1 = Companion_getInstance_21().k6p_1;
            var tmp_2 = this;
            tmp_2.a7t_1 = this.s7s_1.id + '/sign?api-version=7.4';
            this.b7t_1 = this.z7s_1;
            this.c7t_1 = this.a7t_1;
            var tmp_3 = this;
            tmp_3.d7t_1 = this.b7t_1;
            this.e7t_1 = this.d7t_1;
            var tmp_4 = this;
            tmp_4.f7t_1 = this.e7t_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.c7t_1);
            contentType(this_0, Application_getInstance().x2s_1);
            bearerAuth(this_0, _get_accessToken__9zuu2s(this.s7s_1));
            var body = this.y7s_1;
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_6 = getKClass(JsonObject);
              var tmp_7;
              try {
                tmp_7 = createKType(getKClass(JsonObject), arrayOf([]), false);
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
              this_0.d3n(new TypeInfo(tmp_6, tmp_7));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_9 = getKClass(JsonObject);
                var tmp_10;
                try {
                  tmp_10 = createKType(getKClass(JsonObject), arrayOf([]), false);
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
                this_0.d3n(new TypeInfo(tmp_9, tmp_10));
              }
            }

            tmp_5.g7t_1 = this_0;
            this.h7t_1 = this.f7t_1;
            this.i7t_1 = this.g7t_1;
            this.i7t_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_12 = this;
            tmp_12.j7t_1 = this.h7t_1;
            var tmp_13 = this;
            tmp_13.k7t_1 = this.i7t_1;
            this.l7t_1 = this.j7t_1;
            this.m7t_1 = this.k7t_1;
            this.l9_1 = 2;
            suspendResult = (new HttpStatement(this.m7t_1, this.l7t_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.n7t_1 = suspendResult;
            this.o7t_1 = Base64Utils_getInstance();
            this.l9_1 = 3;
            suspendResult = AzureKeyFunctions_instance.c7l(this.n7t_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = ARGUMENT.we('value');
            var ARGUMENT_1 = ensureNotNull(ARGUMENT_0);
            var ARGUMENT_2 = get_jsonPrimitive(ARGUMENT_1);
            var ARGUMENT_3 = ARGUMENT_2.v4p();
            var signature = this.o7t_1.decodeFromBase64Url(ARGUMENT_3);
            if (!this.u7s_1 && listOf([KeyType_secp256r1_getInstance(), KeyType_secp256k1_getInstance()]).x1(this.s7s_1.keyType)) {
              signature = EccUtils_instance.b6f(signature);
            }

            return signature;
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($signRawAzureCOROUTINE$25)['<set-state>'] = protoOf($signRawAzureCOROUTINE$25).s9;
  protoOf($signRawAzureCOROUTINE$25)['<get-state>'] = protoOf($signRawAzureCOROUTINE$25).t9;
  protoOf($signRawAzureCOROUTINE$25)['<set-exceptionState>'] = protoOf($signRawAzureCOROUTINE$25).u9;
  protoOf($signRawAzureCOROUTINE$25)['<get-exceptionState>'] = protoOf($signRawAzureCOROUTINE$25).v9;
  protoOf($signRawAzureCOROUTINE$25)['<set-result>'] = protoOf($signRawAzureCOROUTINE$25).w9;
  protoOf($signRawAzureCOROUTINE$25)['<get-result>'] = protoOf($signRawAzureCOROUTINE$25).x9;
  protoOf($signRawAzureCOROUTINE$25)['<set-exception>'] = protoOf($signRawAzureCOROUTINE$25).y9;
  protoOf($signRawAzureCOROUTINE$25)['<get-exception>'] = protoOf($signRawAzureCOROUTINE$25).z9;
  protoOf($signRawAzureCOROUTINE$25)['<set-finallyPath>'] = protoOf($signRawAzureCOROUTINE$25).aa;
  protoOf($signRawAzureCOROUTINE$25)['<get-finallyPath>'] = protoOf($signRawAzureCOROUTINE$25).ba;
  protoOf($signRawAzureCOROUTINE$25)['<get-context>'] = protoOf($signRawAzureCOROUTINE$25).r9;
  function $signJwsCOROUTINE$26(_this__u8e3s4, plaintext, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x7t_1 = _this__u8e3s4;
    this.y7t_1 = plaintext;
    this.z7t_1 = headers;
  }
  protoOf($signJwsCOROUTINE$26).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.a7u_1 = KeyUtils_instance.y6u(this.y7t_1, this.z7t_1, this.x7t_1.keyType);
            this.b7u_1 = this.a7u_1.bc();
            this.c7u_1 = this.a7u_1.cc();
            this.d7u_1 = this.a7u_1.zo();
            this.l9_1 = 1;
            suspendResult = this.x7t_1.o7n(this.d7u_1, true, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var rawSignature = suspendResult;
            var jws = KeyUtils_instance.z6u(rawSignature, this.b7u_1, this.c7u_1);
            return jws;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($signJwsCOROUTINE$26)['<set-state>'] = protoOf($signJwsCOROUTINE$26).s9;
  protoOf($signJwsCOROUTINE$26)['<get-state>'] = protoOf($signJwsCOROUTINE$26).t9;
  protoOf($signJwsCOROUTINE$26)['<set-exceptionState>'] = protoOf($signJwsCOROUTINE$26).u9;
  protoOf($signJwsCOROUTINE$26)['<get-exceptionState>'] = protoOf($signJwsCOROUTINE$26).v9;
  protoOf($signJwsCOROUTINE$26)['<set-result>'] = protoOf($signJwsCOROUTINE$26).w9;
  protoOf($signJwsCOROUTINE$26)['<get-result>'] = protoOf($signJwsCOROUTINE$26).x9;
  protoOf($signJwsCOROUTINE$26)['<set-exception>'] = protoOf($signJwsCOROUTINE$26).y9;
  protoOf($signJwsCOROUTINE$26)['<get-exception>'] = protoOf($signJwsCOROUTINE$26).z9;
  protoOf($signJwsCOROUTINE$26)['<set-finallyPath>'] = protoOf($signJwsCOROUTINE$26).aa;
  protoOf($signJwsCOROUTINE$26)['<get-finallyPath>'] = protoOf($signJwsCOROUTINE$26).ba;
  protoOf($signJwsCOROUTINE$26)['<get-context>'] = protoOf($signJwsCOROUTINE$26).r9;
  function $verifyRawCOROUTINE$27(_this__u8e3s4, signed, detachedPlaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m7u_1 = _this__u8e3s4;
    this.n7u_1 = signed;
    this.o7u_1 = detachedPlaintext;
  }
  protoOf($verifyRawCOROUTINE$27).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            this.l9_1 = 1;
            suspendResult = this.m7u_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p7u_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.p7u_1.a6l(this.n7u_1, this.o7u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 3;
            continue $sm;
          case 3:
            var verification = suspendResult.vo_1;
            throwOnFailure(verification);
            var tmp_0 = _Result___get_value__impl__bjfvqg(verification);
            var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            return new Result(_Result___init__impl__xyqfz8(value));
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($verifyRawCOROUTINE$27)['<set-state>'] = protoOf($verifyRawCOROUTINE$27).s9;
  protoOf($verifyRawCOROUTINE$27)['<get-state>'] = protoOf($verifyRawCOROUTINE$27).t9;
  protoOf($verifyRawCOROUTINE$27)['<set-exceptionState>'] = protoOf($verifyRawCOROUTINE$27).u9;
  protoOf($verifyRawCOROUTINE$27)['<get-exceptionState>'] = protoOf($verifyRawCOROUTINE$27).v9;
  protoOf($verifyRawCOROUTINE$27)['<set-result>'] = protoOf($verifyRawCOROUTINE$27).w9;
  protoOf($verifyRawCOROUTINE$27)['<get-result>'] = protoOf($verifyRawCOROUTINE$27).x9;
  protoOf($verifyRawCOROUTINE$27)['<set-exception>'] = protoOf($verifyRawCOROUTINE$27).y9;
  protoOf($verifyRawCOROUTINE$27)['<get-exception>'] = protoOf($verifyRawCOROUTINE$27).z9;
  protoOf($verifyRawCOROUTINE$27)['<set-finallyPath>'] = protoOf($verifyRawCOROUTINE$27).aa;
  protoOf($verifyRawCOROUTINE$27)['<get-finallyPath>'] = protoOf($verifyRawCOROUTINE$27).ba;
  protoOf($verifyRawCOROUTINE$27)['<get-context>'] = protoOf($verifyRawCOROUTINE$27).r9;
  function $verifyJwsCOROUTINE$28(_this__u8e3s4, signedJws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y7u_1 = _this__u8e3s4;
    this.z7u_1 = signedJws;
  }
  protoOf($verifyJwsCOROUTINE$28).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            this.l9_1 = 1;
            suspendResult = this.y7u_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a7v_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.a7v_1.s6j(this.z7u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 3;
            continue $sm;
          case 2:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 3;
            continue $sm;
          case 3:
            var verification = suspendResult.vo_1;
            return new Result(verification);
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($verifyJwsCOROUTINE$28)['<set-state>'] = protoOf($verifyJwsCOROUTINE$28).s9;
  protoOf($verifyJwsCOROUTINE$28)['<get-state>'] = protoOf($verifyJwsCOROUTINE$28).t9;
  protoOf($verifyJwsCOROUTINE$28)['<set-exceptionState>'] = protoOf($verifyJwsCOROUTINE$28).u9;
  protoOf($verifyJwsCOROUTINE$28)['<get-exceptionState>'] = protoOf($verifyJwsCOROUTINE$28).v9;
  protoOf($verifyJwsCOROUTINE$28)['<set-result>'] = protoOf($verifyJwsCOROUTINE$28).w9;
  protoOf($verifyJwsCOROUTINE$28)['<get-result>'] = protoOf($verifyJwsCOROUTINE$28).x9;
  protoOf($verifyJwsCOROUTINE$28)['<set-exception>'] = protoOf($verifyJwsCOROUTINE$28).y9;
  protoOf($verifyJwsCOROUTINE$28)['<get-exception>'] = protoOf($verifyJwsCOROUTINE$28).z9;
  protoOf($verifyJwsCOROUTINE$28)['<set-finallyPath>'] = protoOf($verifyJwsCOROUTINE$28).aa;
  protoOf($verifyJwsCOROUTINE$28)['<get-finallyPath>'] = protoOf($verifyJwsCOROUTINE$28).ba;
  protoOf($verifyJwsCOROUTINE$28)['<get-context>'] = protoOf($verifyJwsCOROUTINE$28).r9;
  function $getPublicKeyRepresentationCOROUTINE$29(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j7v_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyRepresentationCOROUTINE$29).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.j7v_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k7v_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.k7v_1.l6l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<set-state>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).s9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-state>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).t9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<set-exceptionState>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).u9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-exceptionState>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).v9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<set-result>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).w9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-result>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).x9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<set-exception>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).y9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-exception>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).z9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<set-finallyPath>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).aa;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-finallyPath>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).ba;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-context>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).r9;
  function $getMetaCOROUTINE$30(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t7v_1 = _this__u8e3s4;
  }
  protoOf($getMetaCOROUTINE$30).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.t7v_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new AzureKeyMeta(ARGUMENT);
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getMetaCOROUTINE$30)['<set-state>'] = protoOf($getMetaCOROUTINE$30).s9;
  protoOf($getMetaCOROUTINE$30)['<get-state>'] = protoOf($getMetaCOROUTINE$30).t9;
  protoOf($getMetaCOROUTINE$30)['<set-exceptionState>'] = protoOf($getMetaCOROUTINE$30).u9;
  protoOf($getMetaCOROUTINE$30)['<get-exceptionState>'] = protoOf($getMetaCOROUTINE$30).v9;
  protoOf($getMetaCOROUTINE$30)['<set-result>'] = protoOf($getMetaCOROUTINE$30).w9;
  protoOf($getMetaCOROUTINE$30)['<get-result>'] = protoOf($getMetaCOROUTINE$30).x9;
  protoOf($getMetaCOROUTINE$30)['<set-exception>'] = protoOf($getMetaCOROUTINE$30).y9;
  protoOf($getMetaCOROUTINE$30)['<get-exception>'] = protoOf($getMetaCOROUTINE$30).z9;
  protoOf($getMetaCOROUTINE$30)['<set-finallyPath>'] = protoOf($getMetaCOROUTINE$30).aa;
  protoOf($getMetaCOROUTINE$30)['<get-finallyPath>'] = protoOf($getMetaCOROUTINE$30).ba;
  protoOf($getMetaCOROUTINE$30)['<get-context>'] = protoOf($getMetaCOROUTINE$30).r9;
  function $deleteKeyCOROUTINE$31(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c7w_1 = _this__u8e3s4;
  }
  protoOf($deleteKeyCOROUTINE$31).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.c7w_1.i7s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.d7w_1 = Companion_getInstance_21().k6p_1;
            var tmp_1 = this;
            tmp_1.e7w_1 = this.c7w_1.id + '?api-version=7.4';
            this.f7w_1 = this.d7w_1;
            this.g7w_1 = this.e7w_1;
            var tmp_2 = this;
            tmp_2.h7w_1 = this.f7w_1;
            this.i7w_1 = this.h7w_1;
            var tmp_3 = this;
            tmp_3.j7w_1 = this.i7w_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.g7w_1);
            contentType(this_0, Application_getInstance().x2s_1);
            bearerAuth(this_0, _get_accessToken__9zuu2s(this.c7w_1));
            tmp_4.k7w_1 = this_0;
            this.l7w_1 = this.j7w_1;
            this.m7w_1 = this.k7w_1;
            this.m7w_1.i3h_1 = Companion_getInstance_0().f2z_1;
            var tmp_5 = this;
            tmp_5.n7w_1 = this.l7w_1;
            var tmp_6 = this;
            tmp_6.o7w_1 = this.m7w_1;
            this.p7w_1 = this.n7w_1;
            this.q7w_1 = this.o7w_1;
            this.l9_1 = 2;
            suspendResult = (new HttpStatement(this.q7w_1, this.p7w_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var response = suspendResult;
            return isSuccess(response.o34());
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($deleteKeyCOROUTINE$31)['<set-state>'] = protoOf($deleteKeyCOROUTINE$31).s9;
  protoOf($deleteKeyCOROUTINE$31)['<get-state>'] = protoOf($deleteKeyCOROUTINE$31).t9;
  protoOf($deleteKeyCOROUTINE$31)['<set-exceptionState>'] = protoOf($deleteKeyCOROUTINE$31).u9;
  protoOf($deleteKeyCOROUTINE$31)['<get-exceptionState>'] = protoOf($deleteKeyCOROUTINE$31).v9;
  protoOf($deleteKeyCOROUTINE$31)['<set-result>'] = protoOf($deleteKeyCOROUTINE$31).w9;
  protoOf($deleteKeyCOROUTINE$31)['<get-result>'] = protoOf($deleteKeyCOROUTINE$31).x9;
  protoOf($deleteKeyCOROUTINE$31)['<set-exception>'] = protoOf($deleteKeyCOROUTINE$31).y9;
  protoOf($deleteKeyCOROUTINE$31)['<get-exception>'] = protoOf($deleteKeyCOROUTINE$31).z9;
  protoOf($deleteKeyCOROUTINE$31)['<set-finallyPath>'] = protoOf($deleteKeyCOROUTINE$31).aa;
  protoOf($deleteKeyCOROUTINE$31)['<get-finallyPath>'] = protoOf($deleteKeyCOROUTINE$31).ba;
  protoOf($deleteKeyCOROUTINE$31)['<get-context>'] = protoOf($deleteKeyCOROUTINE$31).r9;
  function $getPublicKeyFromAzureKmsCOROUTINE$32(_this__u8e3s4, keyId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z7w_1 = _this__u8e3s4;
    this.a7x_1 = keyId;
  }
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 5;
            this.l9_1 = 1;
            suspendResult = this.z7w_1.i7s(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b7x_1 = AzureKeyFunctions_instance;
            var tmp_0 = this;
            tmp_0.c7x_1 = Companion_getInstance_21().k6p_1;
            var tmp_1 = this;
            tmp_1.d7x_1 = this.a7x_1 + '?api-version=7.4';
            this.e7x_1 = this.c7x_1;
            this.f7x_1 = this.d7x_1;
            var tmp_2 = this;
            tmp_2.g7x_1 = this.e7x_1;
            this.h7x_1 = this.g7x_1;
            var tmp_3 = this;
            tmp_3.i7x_1 = this.h7x_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.f7x_1);
            contentType(this_0, Application_getInstance().x2s_1);
            bearerAuth(this_0, _get_accessToken__9zuu2s(this.z7w_1));
            tmp_4.j7x_1 = this_0;
            this.k7x_1 = this.i7x_1;
            this.l7x_1 = this.j7x_1;
            this.l7x_1.i3h_1 = Companion_getInstance_0().b2z_1;
            var tmp_5 = this;
            tmp_5.m7x_1 = this.k7x_1;
            var tmp_6 = this;
            tmp_6.n7x_1 = this.l7x_1;
            this.o7x_1 = this.m7x_1;
            this.p7x_1 = this.n7x_1;
            this.l9_1 = 2;
            suspendResult = (new HttpStatement(this.p7x_1, this.o7x_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q7x_1 = suspendResult;
            this.l9_1 = 3;
            suspendResult = this.b7x_1.c7l(this.q7x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.r7x_1 = suspendResult;
            var tmp_7 = this;
            var tmp0_elvis_lhs = this.r7x_1.we('key');
            var tmp_8;
            if (tmp0_elvis_lhs == null) {
              var message = 'Missing key in response';
              throw IllegalStateException_init_$Create$(toString_0(message));
            } else {
              tmp_8 = tmp0_elvis_lhs;
            }

            tmp_7.s7x_1 = get_jsonObject(tmp_8);
            this.l9_1 = 4;
            suspendResult = AzureKeyFunctions_instance.d7l(this.s7x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var parsedAzurePublicKey = suspendResult;
            return parsedAzurePublicKey.publicKey;
          case 5:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 5) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<set-state>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).s9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-state>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).t9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<set-exceptionState>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).u9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-exceptionState>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).v9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<set-result>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).w9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-result>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).x9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<set-exception>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).y9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-exception>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).z9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<set-finallyPath>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).aa;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-finallyPath>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).ba;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-context>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).r9;
  function AzureKey(id, auth, _keyType, _publicKey) {
    Companion_getInstance_21();
    _keyType = _keyType === VOID ? null : _keyType;
    _publicKey = _publicKey === VOID ? null : _publicKey;
    Key.call(this);
    this.id = id;
    this.auth = auth;
    this.e7l_1 = _keyType;
    this.f7l_1 = _publicKey;
  }
  protoOf(AzureKey).a67 = function () {
    return this.id;
  };
  protoOf(AzureKey).t7x = function () {
    return this.auth;
  };
  protoOf(AzureKey).j7s = function ($completion) {
    var tmp = new $fetchAndUpdatePublicKeyCOROUTINE$21(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey).y7r = function ($completion) {
    var tmp = new $updateAccessTokenCOROUTINE$22(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey).i7s = function ($completion) {
    var tmp = new $ensureAccessTokenValidCOROUTINE$23(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey).g6h = function ($completion) {
    var tmp = new $initCOROUTINE$24(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey).w7e = function (value) {
    this.e7l_1 = value;
  };
  protoOf(AzureKey).a6m = function () {
    var tmp0_elvis_lhs = this.e7l_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Getting keyType without calling init() first';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AzureKey).b6m = function () {
    return false;
  };
  protoOf(AzureKey).toString = function () {
    return '[Azure ' + this.keyType.q2_1 + ' key @ ' + this.auth.keyVaultUrl + ' - ' + this.id + ']';
  };
  protoOf(AzureKey).w6g = function ($completion) {
    return this.id;
  };
  protoOf(AzureKey).w6i = function ($completion) {
    throw UnsupportedOperationException_init_$Create$('No private key available');
  };
  protoOf(AzureKey).c6k = function ($completion) {
    throw UnsupportedOperationException_init_$Create$('No private key available');
  };
  protoOf(AzureKey).n6k = function ($completion) {
    throw UnsupportedOperationException_init_$Create$('No private key available');
  };
  protoOf(AzureKey).m6i = function ($completion) {
    throw UnsupportedOperationException_init_$Create$('No private key available');
  };
  protoOf(AzureKey).o7n = function (plaintext, ieeeP1363Signature, $completion) {
    var tmp = new $signRawAzureCOROUTINE$25(this, plaintext, ieeeP1363Signature, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey).l75 = function (plaintext, $completion) {
    return this.o7n(plaintext, false, $completion);
  };
  protoOf(AzureKey).m6g = function (plaintext, $completion) {
    return this.l75(plaintext, $completion);
  };
  protoOf(AzureKey).a6g = function (plaintext, headers, $completion) {
    var tmp = new $signJwsCOROUTINE$26(this, plaintext, headers, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey).a6l = function (signed, detachedPlaintext, $completion) {
    var tmp = new $verifyRawCOROUTINE$27(this, signed, detachedPlaintext, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AzureKey).s6j = function (signedJws, $completion) {
    var tmp = new $verifyJwsCOROUTINE$28(this, signedJws, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AzureKey).r6h = function ($completion) {
    var tmp0_safe_receiver = this.f7l_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t6m_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var message = 'Init was not called before public key was requested';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AzureKey).l6l = function ($completion) {
    var tmp = new $getPublicKeyRepresentationCOROUTINE$29(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey).c6i = function ($completion) {
    var tmp = new $getMetaCOROUTINE$30(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey).n6f = function ($completion) {
    var tmp = new $deleteKeyCOROUTINE$31(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey).f7r = function (keyId, $completion) {
    var tmp = new $getPublicKeyFromAzureKmsCOROUTINE$32(this, keyId, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(AzureKey).c6m = function () {
    var tmp = AzureKey$deleteKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).d6m = function (plaintext, headers) {
    var tmp = AzureKey$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).e6m = function (plaintext) {
    var tmp = AzureKey$signRawAsync$slambda_0(this, plaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).f6m = function () {
    var tmp = AzureKey$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).u7x = function (plaintext, ieeeP1363Signature) {
    var tmp = AzureKey$signRawAzureAsync$slambda_0(this, plaintext, ieeeP1363Signature, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).h6m = function () {
    var tmp = AzureKey$getPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).i6m = function () {
    var tmp = AzureKey$getMetaAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).j6m = function () {
    var tmp = AzureKey$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).k6m = function () {
    var tmp = AzureKey$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).m6m = function (signedJws) {
    var tmp = AzureKey$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).n6m = function () {
    var tmp = AzureKey$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).o6m = function () {
    var tmp = AzureKey$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).p6m = function (signed, detachedPlaintext) {
    var tmp = AzureKey$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).q6m = function () {
    var tmp = AzureKey$getPublicKeyRepresentationAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function Companion_17() {
  }
  var Companion_instance_22;
  function Companion_getInstance_22() {
    return Companion_instance_22;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.azure.AzureKeyMetadata', this, 2);
    tmp0_serialDesc.v28('auth', false);
    tmp0_serialDesc.v28('name', true);
    this.v7x_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).w7x = function (encoder, value) {
    var tmp0_desc = this.v7x_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.y22(tmp0_desc, 0, $serializer_getInstance_8(), value.z7k_1);
    if (tmp1_output.e23(tmp0_desc, 1) ? true : !(value.a7l_1 == null)) {
      tmp1_output.a23(tmp0_desc, 1, StringSerializer_getInstance(), value.a7l_1);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_13).v1x = function (encoder, value) {
    return this.w7x(encoder, value instanceof AzureKeyMetadata ? value : THROW_CCE());
  };
  protoOf($serializer_13).w1x = function (decoder) {
    var tmp0_desc = this.v7x_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h21(tmp0_desc);
    if (tmp6_input.x21()) {
      tmp4_local0 = tmp6_input.t21(tmp0_desc, 0, $serializer_getInstance_8(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v21(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.t21(tmp0_desc, 0, $serializer_getInstance_8(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.v21(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i21(tmp0_desc);
    return AzureKeyMetadata_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_13).u1x = function () {
    return this.v7x_1;
  };
  protoOf($serializer_13).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_8(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function AzureKeyMetadata_init_$Init$(seen0, auth, name, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_13().v7x_1);
    }
    $this.z7k_1 = auth;
    if (0 === (seen0 & 2))
      $this.a7l_1 = null;
    else
      $this.a7l_1 = name;
    return $this;
  }
  function AzureKeyMetadata_init_$Create$(seen0, auth, name, serializationConstructorMarker) {
    return AzureKeyMetadata_init_$Init$(seen0, auth, name, serializationConstructorMarker, objectCreate(protoOf(AzureKeyMetadata)));
  }
  function AzureKeyMetadata(auth, name) {
    name = name === VOID ? null : name;
    this.z7k_1 = auth;
    this.a7l_1 = name;
  }
  protoOf(AzureKeyMetadata).toString = function () {
    return 'AzureKeyMetadata(auth=' + this.z7k_1.toString() + ', name=' + this.a7l_1 + ')';
  };
  protoOf(AzureKeyMetadata).hashCode = function () {
    var result = this.z7k_1.hashCode();
    result = imul(result, 31) + (this.a7l_1 == null ? 0 : getStringHashCode(this.a7l_1)) | 0;
    return result;
  };
  protoOf(AzureKeyMetadata).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AzureKeyMetadata))
      return false;
    var tmp0_other_with_cast = other instanceof AzureKeyMetadata ? other : THROW_CCE();
    if (!this.z7k_1.equals(tmp0_other_with_cast.z7k_1))
      return false;
    if (!(this.a7l_1 == tmp0_other_with_cast.a7l_1))
      return false;
    return true;
  };
  function JWKKeyJsonFieldSerializer() {
    JWKKeyJsonFieldSerializer_instance = this;
    this.x7x_1 = Companion_instance_0.s4p().u1x();
  }
  protoOf(JWKKeyJsonFieldSerializer).u1x = function () {
    return this.x7x_1;
  };
  protoOf(JWKKeyJsonFieldSerializer).w1x = function (decoder) {
    var tmp0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value = decoder.g21(Companion_instance_0.s4p());
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.w21();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(JsonElement), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    return tmp0.x1y(tmp$ret$1, value);
  };
  protoOf(JWKKeyJsonFieldSerializer).y7x = function (encoder, value) {
    var tmp = Companion_instance_0.s4p();
    var tmp_0;
    if (value == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.w21();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(JsonElement), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp_0 = this_0.y1y(tmp$ret$1, value);
    }
    var tmp1_elvis_lhs = tmp_0;
    return encoder.z22(tmp, tmp1_elvis_lhs == null ? JsonNull_getInstance() : tmp1_elvis_lhs);
  };
  protoOf(JWKKeyJsonFieldSerializer).v1x = function (encoder, value) {
    return this.y7x(encoder, (value == null ? true : typeof value === 'string') ? value : THROW_CCE());
  };
  var JWKKeyJsonFieldSerializer_instance;
  function JWKKeyJsonFieldSerializer_getInstance() {
    if (JWKKeyJsonFieldSerializer_instance == null)
      new JWKKeyJsonFieldSerializer();
    return JWKKeyJsonFieldSerializer_instance;
  }
  function JWKKeyCreator$importJWKAsync$slambda(this$0, $jwk, resultContinuation) {
    this.h7y_1 = this$0;
    this.i7y_1 = $jwk;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKeyCreator$importJWKAsync$slambda).j7y = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKeyCreator$importJWKAsync$slambda).yb = function ($completion) {
    return this.j7y($completion);
  };
  protoOf(JWKKeyCreator$importJWKAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.h7y_1.m7d(this.i7y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKeyCreator$importJWKAsync$slambda).ha = function (completion) {
    return new JWKKeyCreator$importJWKAsync$slambda(this.h7y_1, this.i7y_1, completion);
  };
  function JWKKeyCreator$importJWKAsync$slambda_0(this$0, $jwk, resultContinuation) {
    var i = new JWKKeyCreator$importJWKAsync$slambda(this$0, $jwk, resultContinuation);
    var l = function ($completion) {
      return i.j7y($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKeyCreator$importPEMAsync$slambda(this$0, $pem, resultContinuation) {
    this.s7y_1 = this$0;
    this.t7y_1 = $pem;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKeyCreator$importPEMAsync$slambda).j7y = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKeyCreator$importPEMAsync$slambda).yb = function ($completion) {
    return this.j7y($completion);
  };
  protoOf(JWKKeyCreator$importPEMAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.s7y_1.p72(this.t7y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKeyCreator$importPEMAsync$slambda).ha = function (completion) {
    return new JWKKeyCreator$importPEMAsync$slambda(this.s7y_1, this.t7y_1, completion);
  };
  function JWKKeyCreator$importPEMAsync$slambda_0(this$0, $pem, resultContinuation) {
    var i = new JWKKeyCreator$importPEMAsync$slambda(this$0, $pem, resultContinuation);
    var l = function ($completion) {
      return i.j7y($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKeyCreator$generateAsync$slambda(this$0, $type, $metadata, resultContinuation) {
    this.c7z_1 = this$0;
    this.d7z_1 = $type;
    this.e7z_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKeyCreator$generateAsync$slambda).f7z = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKeyCreator$generateAsync$slambda).yb = function ($completion) {
    return this.f7z($completion);
  };
  protoOf(JWKKeyCreator$generateAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.c7z_1.g7z(this.d7z_1, this.e7z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKeyCreator$generateAsync$slambda).ha = function (completion) {
    return new JWKKeyCreator$generateAsync$slambda(this.c7z_1, this.d7z_1, this.e7z_1, completion);
  };
  function JWKKeyCreator$generateAsync$slambda_0(this$0, $type, $metadata, resultContinuation) {
    var i = new JWKKeyCreator$generateAsync$slambda(this$0, $type, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.f7z($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKeyCreator$importRawPublicKeyAsync$slambda(this$0, $type, $rawPublicKey, $metadata, resultContinuation) {
    this.p7z_1 = this$0;
    this.q7z_1 = $type;
    this.r7z_1 = $rawPublicKey;
    this.s7z_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKeyCreator$importRawPublicKeyAsync$slambda).q6h = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKeyCreator$importRawPublicKeyAsync$slambda).yb = function ($completion) {
    return this.q6h($completion);
  };
  protoOf(JWKKeyCreator$importRawPublicKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.p7z_1.t7z(this.q7z_1, this.r7z_1, this.s7z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKeyCreator$importRawPublicKeyAsync$slambda).ha = function (completion) {
    return new JWKKeyCreator$importRawPublicKeyAsync$slambda(this.p7z_1, this.q7z_1, this.r7z_1, this.s7z_1, completion);
  };
  function JWKKeyCreator$importRawPublicKeyAsync$slambda_0(this$0, $type, $rawPublicKey, $metadata, resultContinuation) {
    var i = new JWKKeyCreator$importRawPublicKeyAsync$slambda(this$0, $type, $rawPublicKey, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.q6h($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKeyCreator() {
  }
  function Companion_18() {
  }
  protoOf(Companion_18).s4p = function () {
    return $serializer_getInstance_14();
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    return Companion_instance_23;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.oci.OCIKeyMetadata', this, 7);
    tmp0_serialDesc.v28('tenancyOcid', false);
    tmp0_serialDesc.v28('compartmentOcid', false);
    tmp0_serialDesc.v28('userOcid', false);
    tmp0_serialDesc.v28('fingerprint', false);
    tmp0_serialDesc.v28('managementEndpoint', false);
    tmp0_serialDesc.v28('cryptoEndpoint', false);
    tmp0_serialDesc.v28('signingKeyPem', true);
    this.y7z_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).z7z = function (encoder, value) {
    var tmp0_desc = this.y7z_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.w22(tmp0_desc, 0, value.tenancyOcid);
    tmp1_output.w22(tmp0_desc, 1, value.compartmentOcid);
    tmp1_output.w22(tmp0_desc, 2, value.userOcid);
    tmp1_output.w22(tmp0_desc, 3, value.fingerprint);
    tmp1_output.w22(tmp0_desc, 4, value.managementEndpoint);
    tmp1_output.w22(tmp0_desc, 5, value.cryptoEndpoint);
    if (tmp1_output.e23(tmp0_desc, 6) ? true : !(value.signingKeyPem == null)) {
      tmp1_output.a23(tmp0_desc, 6, StringSerializer_getInstance(), value.signingKeyPem);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_14).v1x = function (encoder, value) {
    return this.z7z(encoder, value instanceof OCIKeyMetadata ? value : THROW_CCE());
  };
  protoOf($serializer_14).w1x = function (decoder) {
    var tmp0_desc = this.y7z_1;
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
    var tmp11_input = decoder.h21(tmp0_desc);
    if (tmp11_input.x21()) {
      tmp4_local0 = tmp11_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.r21(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.r21(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.r21(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.r21(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.r21(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.v21(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.r21(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.r21(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.r21(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.r21(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.r21(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.v21(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.i21(tmp0_desc);
    return OCIKeyMetadata_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_14).u1x = function () {
    return this.y7z_1;
  };
  protoOf($serializer_14).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function OCIKeyMetadata_init_$Init$(seen0, tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem, serializationConstructorMarker, $this) {
    if (!(63 === (63 & seen0))) {
      throwMissingFieldException(seen0, 63, $serializer_getInstance_14().y7z_1);
    }
    $this.tenancyOcid = tenancyOcid;
    $this.compartmentOcid = compartmentOcid;
    $this.userOcid = userOcid;
    $this.fingerprint = fingerprint;
    $this.managementEndpoint = managementEndpoint;
    $this.cryptoEndpoint = cryptoEndpoint;
    if (0 === (seen0 & 64))
      $this.signingKeyPem = null;
    else
      $this.signingKeyPem = signingKeyPem;
    return $this;
  }
  function OCIKeyMetadata_init_$Create$(seen0, tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem, serializationConstructorMarker) {
    return OCIKeyMetadata_init_$Init$(seen0, tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem, serializationConstructorMarker, objectCreate(protoOf(OCIKeyMetadata)));
  }
  function OCIKeyMetadata(tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem) {
    signingKeyPem = signingKeyPem === VOID ? null : signingKeyPem;
    this.tenancyOcid = tenancyOcid;
    this.compartmentOcid = compartmentOcid;
    this.userOcid = userOcid;
    this.fingerprint = fingerprint;
    this.managementEndpoint = managementEndpoint;
    this.cryptoEndpoint = cryptoEndpoint;
    this.signingKeyPem = signingKeyPem;
  }
  protoOf(OCIKeyMetadata).a80 = function () {
    return this.tenancyOcid;
  };
  protoOf(OCIKeyMetadata).b80 = function () {
    return this.compartmentOcid;
  };
  protoOf(OCIKeyMetadata).c80 = function () {
    return this.userOcid;
  };
  protoOf(OCIKeyMetadata).d80 = function () {
    return this.fingerprint;
  };
  protoOf(OCIKeyMetadata).e80 = function () {
    return this.managementEndpoint;
  };
  protoOf(OCIKeyMetadata).f80 = function () {
    return this.cryptoEndpoint;
  };
  protoOf(OCIKeyMetadata).g80 = function () {
    return this.signingKeyPem;
  };
  protoOf(OCIKeyMetadata).bc = function () {
    return this.tenancyOcid;
  };
  protoOf(OCIKeyMetadata).cc = function () {
    return this.compartmentOcid;
  };
  protoOf(OCIKeyMetadata).zo = function () {
    return this.userOcid;
  };
  protoOf(OCIKeyMetadata).i6v = function () {
    return this.fingerprint;
  };
  protoOf(OCIKeyMetadata).p7f = function () {
    return this.managementEndpoint;
  };
  protoOf(OCIKeyMetadata).h80 = function () {
    return this.cryptoEndpoint;
  };
  protoOf(OCIKeyMetadata).i80 = function () {
    return this.signingKeyPem;
  };
  protoOf(OCIKeyMetadata).j80 = function (tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem) {
    return new OCIKeyMetadata(tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem);
  };
  protoOf(OCIKeyMetadata).copy = function (tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem, $super) {
    tenancyOcid = tenancyOcid === VOID ? this.tenancyOcid : tenancyOcid;
    compartmentOcid = compartmentOcid === VOID ? this.compartmentOcid : compartmentOcid;
    userOcid = userOcid === VOID ? this.userOcid : userOcid;
    fingerprint = fingerprint === VOID ? this.fingerprint : fingerprint;
    managementEndpoint = managementEndpoint === VOID ? this.managementEndpoint : managementEndpoint;
    cryptoEndpoint = cryptoEndpoint === VOID ? this.cryptoEndpoint : cryptoEndpoint;
    signingKeyPem = signingKeyPem === VOID ? this.signingKeyPem : signingKeyPem;
    return $super === VOID ? this.j80(tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem) : $super.j80.call(this, tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem);
  };
  protoOf(OCIKeyMetadata).toString = function () {
    return 'OCIKeyMetadata(tenancyOcid=' + this.tenancyOcid + ', compartmentOcid=' + this.compartmentOcid + ', userOcid=' + this.userOcid + ', fingerprint=' + this.fingerprint + ', managementEndpoint=' + this.managementEndpoint + ', cryptoEndpoint=' + this.cryptoEndpoint + ', signingKeyPem=' + this.signingKeyPem + ')';
  };
  protoOf(OCIKeyMetadata).hashCode = function () {
    var result = getStringHashCode(this.tenancyOcid);
    result = imul(result, 31) + getStringHashCode(this.compartmentOcid) | 0;
    result = imul(result, 31) + getStringHashCode(this.userOcid) | 0;
    result = imul(result, 31) + getStringHashCode(this.fingerprint) | 0;
    result = imul(result, 31) + getStringHashCode(this.managementEndpoint) | 0;
    result = imul(result, 31) + getStringHashCode(this.cryptoEndpoint) | 0;
    result = imul(result, 31) + (this.signingKeyPem == null ? 0 : getStringHashCode(this.signingKeyPem)) | 0;
    return result;
  };
  protoOf(OCIKeyMetadata).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OCIKeyMetadata))
      return false;
    var tmp0_other_with_cast = other instanceof OCIKeyMetadata ? other : THROW_CCE();
    if (!(this.tenancyOcid === tmp0_other_with_cast.tenancyOcid))
      return false;
    if (!(this.compartmentOcid === tmp0_other_with_cast.compartmentOcid))
      return false;
    if (!(this.userOcid === tmp0_other_with_cast.userOcid))
      return false;
    if (!(this.fingerprint === tmp0_other_with_cast.fingerprint))
      return false;
    if (!(this.managementEndpoint === tmp0_other_with_cast.managementEndpoint))
      return false;
    if (!(this.cryptoEndpoint === tmp0_other_with_cast.cryptoEndpoint))
      return false;
    if (!(this.signingKeyPem == tmp0_other_with_cast.signingKeyPem))
      return false;
    return true;
  };
  function get_log() {
    _init_properties_OCIKeyRestApi_kt__pktr62();
    return log;
  }
  var log;
  function keyTypeToOciKeyMapping($this, type) {
    var tmp;
    switch (type.r2_1) {
      case 2:
        tmp = 'ECDSA';
        break;
      case 3:
        tmp = 'RSA';
        break;
      default:
        throw new KeyTypeNotSupportedException(type.q2_1);
    }
    return tmp;
  }
  function ociKeyToKeyTypeMapping($this, type) {
    var tmp;
    switch (type) {
      case 'ECDSA':
        tmp = KeyType_secp256r1_getInstance();
        break;
      case 'RSA':
        tmp = KeyType_RSA_getInstance();
        break;
      default:
        throw new KeyTypeNotSupportedException(type);
    }
    return tmp;
  }
  function getKeyVersion($this, ocidKeyId, keyId, host, signingKey, $completion) {
    var tmp = new $getKeyVersionCOROUTINE$44($this, ocidKeyId, keyId, host, signingKey, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function ociJsonDataBody($this, _this__u8e3s4, $completion) {
    var tmp = new $ociJsonDataBodyCOROUTINE$45($this, _this__u8e3s4, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function signingRequest($this, method, restApi, host, requestBody, signingKey) {
    var date = toHttpDate(GMTDate());
    // Inline function 'kotlin.text.lowercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var requestTarget = '(request-target): ' + method.toLowerCase() + ' ' + restApi;
    var hostHeader = 'host: ' + host;
    var dateHeader = 'date: ' + date;
    var tmp;
    switch (method) {
      case 'GET':
        tmp = hostHeader + '\n' + requestTarget + '\n' + dateHeader;
        break;
      case 'POST':
      case 'PUT':
        var contentTypeHeader = 'content-type: application/json';
        var tmp2_elvis_lhs = requestBody == null ? null : requestBody.length;
        var contentLengthHeader = 'content-length: ' + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs);
        var sha256Header = 'x-content-sha256: ' + calculateSHA256($this, requestBody);
        tmp = dateHeader + '\n' + requestTarget + '\n' + hostHeader + '\n' + contentLengthHeader + '\n' + contentTypeHeader + '\n' + sha256Header;
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Unsupported HTTP method: ' + method);
    }
    var signingString = tmp;
    var tmp_0;
    if (signingKey == null) {
      throw new KeyNotFoundException(VOID, 'No private key provided for OCI signing. Please provide a private key.');
    } else {
      tmp_0 = signingKey;
    }
    var privateOciApiKey = tmp_0;
    return Default_getInstance_1().fk(sha256WithRsa(privateOciApiKey, encodeToByteArray(signingString)));
  }
  function calculateSHA256($this, data) {
    if (data == null)
      return '';
    var digest = SHA256_init_$Create$();
    var hash = digest.g6d(encodeToByteArray(data));
    return Default_getInstance_1().fk(hash);
  }
  function getKeys($this, keyId, host, tenancyOcid, signingKey, $completion) {
    var tmp = new $getKeysCOROUTINE$46($this, keyId, host, tenancyOcid, signingKey, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function getOCIPublicKey($this, OCIDKeyID, keyId, host, keyVersion, signingKeyPem, $completion) {
    var tmp = new $getOCIPublicKeyCOROUTINE$47($this, OCIDKeyID, keyId, host, keyVersion, signingKeyPem, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function OCIKeyRestApi$Companion$$childSerializers$_anonymous__ad0c0i() {
    return Companion_getInstance_13().s4p();
  }
  function OCIKeyRestApi$Companion$generateKey$slambda($type, $config, resultContinuation) {
    this.q85_1 = $type;
    this.r85_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$Companion$generateKey$slambda).s86 = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$Companion$generateKey$slambda).yb = function ($completion) {
    return this.s86($completion);
  };
  protoOf(OCIKeyRestApi$Companion$generateKey$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 5;
            this.s85_1 = keyTypeToOciKeyMapping(Companion_getInstance_24(), this.q85_1);
            this.t85_1 = this.r85_1.tenancyOcid + '/' + this.r85_1.userOcid + '/' + this.r85_1.fingerprint;
            this.u85_1 = this.r85_1.managementEndpoint;
            var tmp_0 = this;
            var tmp_1;
            switch (this.q85_1.r2_1) {
              case 2:
                tmp_1 = 32;
                break;
              case 3:
                tmp_1 = 256;
                break;
              default:
                throw new KeyTypeNotSupportedException(this.q85_1.q2_1);
            }

            tmp_0.v85_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = to('compartmentId', JsonPrimitive_0(this.r85_1.compartmentOcid));
            var tmp_4 = to('displayName', JsonPrimitive_0('WaltID'));
            var tmp_5 = to('algorithm', JsonPrimitive_0(this.s85_1));
            var tmp_6 = to('length', JsonPrimitive_1(this.v85_1));
            var tmp0 = this.q85_1.r2_1;
            tmp_2.w85_1 = (new JsonObject(mapOf([tmp_3, tmp_4, to('keyShape', new JsonObject(mapOf([tmp_5, tmp_6, tmp0 === 2 ? to('curveId', JsonPrimitive_0('NIST_P256')) : to('curveId', JsonNull_getInstance())]))), to('protectionMode', JsonPrimitive_0('SOFTWARE'))]))).toString();
            this.x85_1 = signingRequest(Companion_getInstance_24(), 'POST', '/20180608/keys', this.u85_1, this.w85_1, this.r85_1.signingKeyPem);
            this.y85_1 = Companion_getInstance_24();
            var tmp_7 = this;
            tmp_7.z85_1 = Companion_getInstance_24().k6o_1;
            var tmp_8 = this;
            tmp_8.a86_1 = 'https://' + this.u85_1 + '/20180608/keys';
            this.b86_1 = this.z85_1;
            this.c86_1 = this.a86_1;
            var tmp_9 = this;
            tmp_9.d86_1 = this.b86_1;
            this.e86_1 = this.d86_1;
            var tmp_10 = this;
            tmp_10.f86_1 = this.e86_1;
            var tmp_11 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.c86_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="date (request-target) host content-length content-type x-content-sha256",keyId="' + this.t85_1 + '",algorithm="rsa-sha256",signature="' + this.x85_1 + '"');
            header(this_0, 'Host', this.u85_1);
            header(this_0, 'x-content-sha256', calculateSHA256(Companion_getInstance_24(), this.w85_1));
            var body = this.w85_1;
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_12 = PrimitiveClasses_getInstance().ld();
              var tmp_13;
              try {
                tmp_13 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
              } catch ($p) {
                var tmp_14;
                if ($p instanceof Error) {
                  var _unused_var__etf5q3 = $p;
                  tmp_14 = null;
                } else {
                  throw $p;
                }
                tmp_13 = tmp_14;
              }
              this_0.d3n(new TypeInfo(tmp_12, tmp_13));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_15 = PrimitiveClasses_getInstance().ld();
                var tmp_16;
                try {
                  tmp_16 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_17;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_17 = null;
                  } else {
                    throw $p;
                  }
                  tmp_16 = tmp_17;
                }
                this_0.d3n(new TypeInfo(tmp_15, tmp_16));
              }
            }

            tmp_11.g86_1 = this_0;
            this.h86_1 = this.f86_1;
            this.i86_1 = this.g86_1;
            this.i86_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_18 = this;
            tmp_18.j86_1 = this.h86_1;
            var tmp_19 = this;
            tmp_19.k86_1 = this.i86_1;
            this.l86_1 = this.j86_1;
            this.m86_1 = this.k86_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.m86_1, this.l86_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n86_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = ociJsonDataBody(this.y85_1, this.n86_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.o86_1 = suspendResult;
            var tmp_20 = this;
            var tmp2_safe_receiver = this.o86_1.we('currentKeyVersion');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.v4p();
            tmp_20.p86_1 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
            var tmp_21 = this;
            var tmp5_safe_receiver = this.o86_1.we('id');
            var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : get_jsonPrimitive(tmp5_safe_receiver);
            var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.v4p();
            tmp_21.q86_1 = tmp7_elvis_lhs == null ? '' : tmp7_elvis_lhs;
            this.l9_1 = 3;
            suspendResult = getOCIPublicKey(Companion_getInstance_24(), this.q86_1, this.t85_1, this.u85_1, this.p86_1, this.r85_1.signingKeyPem, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.r86_1 = suspendResult;
            this.l9_1 = 4;
            suspendResult = this.r86_1.c6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            return new OCIKeyRestApi(this.r85_1, this.q86_1, ARGUMENT, ociKeyToKeyTypeMapping(Companion_getInstance_24(), this.s85_1));
          case 5:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 5) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$Companion$generateKey$slambda).ha = function (completion) {
    return new OCIKeyRestApi$Companion$generateKey$slambda(this.q85_1, this.r85_1, completion);
  };
  function OCIKeyRestApi$Companion$generateKey$slambda_0($type, $config, resultContinuation) {
    var i = new OCIKeyRestApi$Companion$generateKey$slambda($type, $config, resultContinuation);
    var l = function ($completion) {
      return i.s86($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$Companion$ociJsonDataBody$lambda($this_ociJsonDataBody) {
    return function () {
      return 'OCI server (URL: ' + get_request($this_ociJsonDataBody).t3j().toString() + ') returned invalid response: ';
    };
  }
  function OCIKeyRestApi$Companion$deleteKey$slambda($OCIDKeyID, $host, $signingKeyPem, $keyId, resultContinuation) {
    this.b87_1 = $OCIDKeyID;
    this.c87_1 = $host;
    this.d87_1 = $signingKeyPem;
    this.e87_1 = $keyId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$Companion$deleteKey$slambda).a88 = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$Companion$deleteKey$slambda).yb = function ($completion) {
    return this.a88($completion);
  };
  protoOf(OCIKeyRestApi$Companion$deleteKey$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.f87_1 = System_instance.g5q();
            this.g87_1 = plus(this.f87_1, 5, Companion_getInstance_3().x5q_1, Companion_getInstance_2().o67());
            this.h87_1 = (new JsonObject(mapOf_0(to('timeOfDeletion', JsonPrimitive_0(this.g87_1.toString()))))).toString();
            this.i87_1 = signingRequest(Companion_getInstance_24(), 'POST', '/20180608/keys/' + this.b87_1 + '/actions/scheduleDeletion', this.c87_1, this.h87_1, this.d87_1);
            var tmp_0 = this;
            tmp_0.j87_1 = Companion_getInstance_24().k6o_1;
            var tmp_1 = this;
            tmp_1.k87_1 = 'https://' + this.c87_1 + '/20180608/keys/' + this.b87_1 + '/actions/scheduleDeletion';
            this.l87_1 = this.j87_1;
            this.m87_1 = this.k87_1;
            var tmp_2 = this;
            tmp_2.n87_1 = this.l87_1;
            this.o87_1 = this.n87_1;
            var tmp_3 = this;
            tmp_3.p87_1 = this.o87_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.m87_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="date (request-target) host content-length content-type x-content-sha256",keyId="' + this.e87_1 + '",algorithm="rsa-sha256",signature="' + this.i87_1 + '"');
            header(this_0, 'Host', this.c87_1);
            header(this_0, 'x-content-sha256', calculateSHA256(Companion_getInstance_24(), this.h87_1));
            var body = this.h87_1;
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_5 = PrimitiveClasses_getInstance().ld();
              var tmp_6;
              try {
                tmp_6 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
              this_0.d3n(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_8 = PrimitiveClasses_getInstance().ld();
                var tmp_9;
                try {
                  tmp_9 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
                this_0.d3n(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.q87_1 = this_0;
            this.r87_1 = this.p87_1;
            this.s87_1 = this.q87_1;
            this.s87_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_11 = this;
            tmp_11.t87_1 = this.r87_1;
            var tmp_12 = this;
            tmp_12.u87_1 = this.s87_1;
            this.v87_1 = this.t87_1;
            this.w87_1 = this.u87_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.w87_1, this.v87_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x87_1 = suspendResult;
            var tmp_13 = this;
            tmp_13.y87_1 = this.x87_1;
            this.z87_1 = this.y87_1;
            this.l9_1 = 2;
            var tmp_14 = this.z87_1.p3k();
            var tmp_15 = getKClass(JsonObject);
            var tmp_16;
            try {
              tmp_16 = createKType(getKClass(JsonObject), arrayOf([]), false);
            } catch ($p) {
              var tmp_17;
              if ($p instanceof Error) {
                var _unused_var__etf5q3_1 = $p;
                tmp_17 = null;
              } else {
                throw $p;
              }
              tmp_16 = tmp_17;
            }

            suspendResult = tmp_14.s3j(new TypeInfo(tmp_15, tmp_16), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            return to(this.x87_1, ARGUMENT);
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$Companion$deleteKey$slambda).ha = function (completion) {
    return new OCIKeyRestApi$Companion$deleteKey$slambda(this.b87_1, this.c87_1, this.d87_1, this.e87_1, completion);
  };
  function OCIKeyRestApi$Companion$deleteKey$slambda_0($OCIDKeyID, $host, $signingKeyPem, $keyId, resultContinuation) {
    var i = new OCIKeyRestApi$Companion$deleteKey$slambda($OCIDKeyID, $host, $signingKeyPem, $keyId, resultContinuation);
    var l = function ($completion) {
      return i.a88($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$Companion$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.o3i(tmp, OCIKeyRestApi$Companion$http$lambda$lambda);
    defaultRequest($this$HttpClient, OCIKeyRestApi$Companion$http$lambda$lambda_0);
    var tmp_0 = get_Logging();
    $this$HttpClient.o3i(tmp_0, OCIKeyRestApi$Companion$http$lambda$lambda_1);
    return Unit_instance;
  }
  function OCIKeyRestApi$Companion$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function OCIKeyRestApi$Companion$http$lambda$lambda_0($this$defaultRequest) {
    header($this$defaultRequest, HttpHeaders_getInstance().s2v_1, toHttpDate(GMTDate()));
    header($this$defaultRequest, HttpHeaders_getInstance().p2v_1, Application_getInstance().x2s_1);
    header($this$defaultRequest, HttpHeaders_getInstance().x2u_1, Application_getInstance().x2s_1);
    return Unit_instance;
  }
  function OCIKeyRestApi$Companion$http$lambda$lambda_1($this$install) {
    $this$install.r5b(get_DEFAULT(Companion_instance_2));
    $this$install.q5b_1 = LogLevel_ALL_getInstance();
    return Unit_instance;
  }
  function OCIKeyRestApi$Companion$deleteKeyAsync$slambda($OCIDKeyID, $keyId, $host, $signingKeyPem, resultContinuation) {
    this.j88_1 = $OCIDKeyID;
    this.k88_1 = $keyId;
    this.l88_1 = $host;
    this.m88_1 = $signingKeyPem;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$Companion$deleteKeyAsync$slambda).a88 = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$Companion$deleteKeyAsync$slambda).yb = function ($completion) {
    return this.a88($completion);
  };
  protoOf(OCIKeyRestApi$Companion$deleteKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = Companion_getInstance_24().n88(this.j88_1, this.k88_1, this.l88_1, this.m88_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$Companion$deleteKeyAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$Companion$deleteKeyAsync$slambda(this.j88_1, this.k88_1, this.l88_1, this.m88_1, completion);
  };
  function OCIKeyRestApi$Companion$deleteKeyAsync$slambda_0($OCIDKeyID, $keyId, $host, $signingKeyPem, resultContinuation) {
    var i = new OCIKeyRestApi$Companion$deleteKeyAsync$slambda($OCIDKeyID, $keyId, $host, $signingKeyPem, resultContinuation);
    var l = function ($completion) {
      return i.a88($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$Companion$generateKeyAsync$slambda($type, $config, resultContinuation) {
    this.w88_1 = $type;
    this.x88_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$Companion$generateKeyAsync$slambda).s86 = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$Companion$generateKeyAsync$slambda).yb = function ($completion) {
    return this.s86($completion);
  };
  protoOf(OCIKeyRestApi$Companion$generateKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = Companion_getInstance_24().l6o(this.w88_1, this.x88_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$Companion$generateKeyAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$Companion$generateKeyAsync$slambda(this.w88_1, this.x88_1, completion);
  };
  function OCIKeyRestApi$Companion$generateKeyAsync$slambda_0($type, $config, resultContinuation) {
    var i = new OCIKeyRestApi$Companion$generateKeyAsync$slambda($type, $config, resultContinuation);
    var l = function ($completion) {
      return i.s86($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getKeyVersionCOROUTINE$44(_this__u8e3s4, ocidKeyId, keyId, host, signingKey, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s80_1 = _this__u8e3s4;
    this.t80_1 = ocidKeyId;
    this.u80_1 = keyId;
    this.v80_1 = host;
    this.w80_1 = signingKey;
  }
  protoOf($getKeyVersionCOROUTINE$44).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.x80_1 = signingRequest(this.s80_1, 'GET', '/20180608/keys/' + this.t80_1, this.v80_1, null, this.w80_1);
            var tmp_0 = this;
            tmp_0.y80_1 = this.s80_1.k6o_1;
            var tmp_1 = this;
            tmp_1.z80_1 = 'https://' + this.v80_1 + '/20180608/keys/' + this.t80_1;
            this.a81_1 = this.y80_1;
            this.b81_1 = this.z80_1;
            var tmp_2 = this;
            tmp_2.c81_1 = this.a81_1;
            this.d81_1 = this.c81_1;
            var tmp_3 = this;
            tmp_3.e81_1 = this.d81_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.b81_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="host (request-target) date",keyId="' + this.u80_1 + '",algorithm="rsa-sha256",signature="' + this.x80_1 + '"');
            header(this_0, 'Host', this.v80_1);
            tmp_4.f81_1 = this_0;
            this.g81_1 = this.e81_1;
            this.h81_1 = this.f81_1;
            this.h81_1.i3h_1 = Companion_getInstance_0().b2z_1;
            var tmp_5 = this;
            tmp_5.i81_1 = this.g81_1;
            var tmp_6 = this;
            tmp_6.j81_1 = this.h81_1;
            this.k81_1 = this.i81_1;
            this.l81_1 = this.j81_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.l81_1, this.k81_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.m81_1 = suspendResult;
            var tmp_7 = this;
            tmp_7.n81_1 = this.m81_1;
            this.o81_1 = this.n81_1;
            this.l9_1 = 2;
            var tmp_8 = this.o81_1.p3k();
            var tmp_9 = getKClass(JsonObject);
            var tmp_10;
            try {
              tmp_10 = createKType(getKClass(JsonObject), arrayOf([]), false);
            } catch ($p) {
              var tmp_11;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_11 = null;
              } else {
                throw $p;
              }
              tmp_10 = tmp_11;
            }

            suspendResult = tmp_8.s3j(new TypeInfo(tmp_9, tmp_10), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp0_safe_receiver = ARGUMENT.we('currentKeyVersion');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4p();
            return tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $ociJsonDataBodyCOROUTINE$45(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x81_1 = _this__u8e3s4;
    this.y81_1 = _this__u8e3s4_0;
  }
  protoOf($ociJsonDataBodyCOROUTINE$45).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 8;
            var tmp_0 = this;
            tmp_0.z81_1 = OCIKeyRestApi$Companion$ociJsonDataBody$lambda(this.y81_1);
            if (!isSuccess(this.y81_1.o34())) {
              this.a82_1 = this.z81_1();
              this.b82_1 = this.y81_1.o34().toString();
              this.l9_1 = 7;
              suspendResult = bodyAsText(this.y81_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 1;
              continue $sm;
            }

          case 1:
            var tmp_1 = this;
            tmp_1.c82_1 = this.y81_1;
            this.d82_1 = this.c82_1;
            this.m9_1 = 3;
            var tmp_2 = this;
            tmp_2.f82_1 = Companion_instance_1;
            var tmp_3 = this;
            tmp_3.g82_1 = this.d82_1;
            this.h82_1 = this.g82_1;
            var tmp_4 = this;
            tmp_4.i82_1 = this.h82_1;
            this.j82_1 = this.i82_1;
            this.l9_1 = 2;
            var tmp_5 = this.j82_1.p3k();
            var tmp_6 = getKClass(JsonObject);
            var tmp_7;
            try {
              tmp_7 = createKType(getKClass(JsonObject), arrayOf([]), false);
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

            suspendResult = tmp_5.s3j(new TypeInfo(tmp_6, tmp_7), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_9 = this;
            tmp_9.k82_1 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp_10 = this;
            this.f82_1;
            var value = this.k82_1;
            tmp_10.e82_1 = _Result___init__impl__xyqfz8(value);
            this.m9_1 = 8;
            this.l9_1 = 4;
            continue $sm;
          case 3:
            this.m9_1 = 8;
            var tmp_11 = this.o9_1;
            if (tmp_11 instanceof Error) {
              this.l82_1 = this.o9_1;
              var tmp_12 = this;
              var exception = this.l82_1;
              tmp_12.e82_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.l9_1 = 4;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 4:
            this.m9_1 = 8;
            this.m82_1 = this.e82_1;
            this.n82_1 = this.m82_1;
            this.o82_1 = Result__exceptionOrNull_impl_p6xea9(this.n82_1);
            if (this.o82_1 == null) {
              var tmp_13 = this;
              var tmp_14 = _Result___get_value__impl__bjfvqg(this.n82_1);
              tmp_13.p82_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
              this.l9_1 = 6;
              continue $sm;
            } else {
              var tmp_15 = this;
              tmp_15.q82_1 = this.o82_1;
              this.r82_1 = this.q82_1;
              this.l9_1 = 5;
              suspendResult = bodyAsText(this.y81_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            var bodyStr = suspendResult;
            var tmp_16 = this;
            throw IllegalArgumentException_init_$Create$(this.z81_1() + (bodyStr === '' ? 'empty response (instead of JSON data)' : 'invalid response: ' + bodyStr));
          case 6:
            return this.p82_1;
          case 7:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = 'non-success status: ' + this.b82_1 + ' - ' + ARGUMENT;
            var ARGUMENT_1 = this.a82_1 + ARGUMENT_0;
            throw IllegalStateException_init_$Create$(ARGUMENT_1);
          case 8:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 8) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $getKeysCOROUTINE$46(_this__u8e3s4, keyId, host, tenancyOcid, signingKey, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a83_1 = _this__u8e3s4;
    this.b83_1 = keyId;
    this.c83_1 = host;
    this.d83_1 = tenancyOcid;
    this.e83_1 = signingKey;
  }
  protoOf($getKeysCOROUTINE$46).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.f83_1 = signingRequest(this.a83_1, 'GET', '/20180608/keys?compartmentId=' + this.d83_1 + '&sortBy=TIMECREATED&sortOrder=DESC', this.c83_1, null, this.e83_1);
            var tmp_0 = this;
            tmp_0.g83_1 = this.a83_1.k6o_1;
            var tmp_1 = this;
            tmp_1.h83_1 = 'https://' + this.c83_1 + '/20180608/keys?compartmentId=' + this.d83_1 + '&sortBy=TIMECREATED&sortOrder=DESC';
            this.i83_1 = this.g83_1;
            this.j83_1 = this.h83_1;
            var tmp_2 = this;
            tmp_2.k83_1 = this.i83_1;
            this.l83_1 = this.k83_1;
            var tmp_3 = this;
            tmp_3.m83_1 = this.l83_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.j83_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="host (request-target) date",keyId="' + this.b83_1 + '",algorithm="rsa-sha256",signature="' + this.f83_1 + '"');
            header(this_0, 'Host', this.c83_1);
            tmp_4.n83_1 = this_0;
            this.o83_1 = this.m83_1;
            this.p83_1 = this.n83_1;
            this.p83_1.i3h_1 = Companion_getInstance_0().b2z_1;
            var tmp_5 = this;
            tmp_5.q83_1 = this.o83_1;
            var tmp_6 = this;
            tmp_6.r83_1 = this.p83_1;
            this.s83_1 = this.q83_1;
            this.t83_1 = this.r83_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.t83_1, this.s83_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u83_1 = suspendResult;
            var tmp_7 = this;
            tmp_7.v83_1 = this.u83_1;
            this.w83_1 = this.v83_1;
            this.l9_1 = 2;
            var tmp_8 = this.w83_1.p3k();
            var tmp_9 = PrimitiveClasses_getInstance().kd();
            var tmp_10;
            try {
              tmp_10 = createKType(PrimitiveClasses_getInstance().kd(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(JsonObject), arrayOf([]), false))]), false);
            } catch ($p) {
              var tmp_11;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_11 = null;
              } else {
                throw $p;
              }
              tmp_10 = tmp_11;
            }

            suspendResult = tmp_8.s3j(new TypeInfo(tmp_9, tmp_10), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isArray(suspendResult) : false) ? suspendResult : THROW_CCE();
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $getOCIPublicKeyCOROUTINE$47(_this__u8e3s4, OCIDKeyID, keyId, host, keyVersion, signingKeyPem, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f84_1 = _this__u8e3s4;
    this.g84_1 = OCIDKeyID;
    this.h84_1 = keyId;
    this.i84_1 = host;
    this.j84_1 = keyVersion;
    this.k84_1 = signingKeyPem;
  }
  protoOf($getOCIPublicKeyCOROUTINE$47).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 5;
            this.l84_1 = signingRequest(this.f84_1, 'GET', '/20180608/keys/' + this.g84_1 + '/keyVersions/' + this.j84_1, this.i84_1, null, this.k84_1);
            var tmp_0 = this;
            tmp_0.m84_1 = this.f84_1.k6o_1;
            var tmp_1 = this;
            tmp_1.n84_1 = 'https://' + this.i84_1 + '/20180608/keys/' + this.g84_1 + '/keyVersions/' + this.j84_1;
            this.o84_1 = this.m84_1;
            this.p84_1 = this.n84_1;
            var tmp_2 = this;
            tmp_2.q84_1 = this.o84_1;
            this.r84_1 = this.q84_1;
            var tmp_3 = this;
            tmp_3.s84_1 = this.r84_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.p84_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="host (request-target) date",keyId="' + this.h84_1 + '",algorithm="rsa-sha256",signature="' + this.l84_1 + '"');
            header(this_0, 'Host', this.i84_1);
            tmp_4.t84_1 = this_0;
            this.u84_1 = this.s84_1;
            this.v84_1 = this.t84_1;
            this.v84_1.i3h_1 = Companion_getInstance_0().b2z_1;
            var tmp_5 = this;
            tmp_5.w84_1 = this.u84_1;
            var tmp_6 = this;
            tmp_6.x84_1 = this.v84_1;
            this.y84_1 = this.w84_1;
            this.z84_1 = this.x84_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.z84_1, this.y84_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a85_1 = suspendResult;
            var tmp_7 = this;
            tmp_7.b85_1 = this.a85_1;
            this.c85_1 = this.b85_1;
            this.l9_1 = 2;
            var tmp_8 = this.c85_1.p3k();
            var tmp_9 = getKClass(JsonObject);
            var tmp_10;
            try {
              tmp_10 = createKType(getKClass(JsonObject), arrayOf([]), false);
            } catch ($p) {
              var tmp_11;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_11 = null;
              } else {
                throw $p;
              }
              tmp_10 = tmp_11;
            }

            suspendResult = tmp_8.s3j(new TypeInfo(tmp_9, tmp_10), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_12 = this;
            tmp_12.d85_1 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            this.e85_1 = this.d85_1.we('publicKey');
            this.f85_1 = this.e85_1 == null ? null : get_jsonPrimitive(this.e85_1);
            this.g85_1 = this.f85_1 == null ? null : this.f85_1.v4p();
            var tmp_13 = this;
            var tmp_14;
            if (this.g85_1 == null) {
              throw new KeyNotFoundException('No public key returned from OCI for key ID: ' + this.g84_1 + ' and version: ' + this.j84_1);
            } else {
              tmp_14 = this.g85_1;
            }

            tmp_13.h85_1 = tmp_14;
            this.l9_1 = 3;
            suspendResult = Companion_instance_31.p72(this.h85_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 4;
            continue $sm;
          case 3:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 4;
            continue $sm;
          case 4:
            var this_1 = suspendResult.vo_1;
            throwOnFailure(this_1);
            var tmp_15 = _Result___get_value__impl__bjfvqg(this_1);
            var publicKey = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
            return publicKey;
          case 5:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 5) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function retrievePublicKey($this, $completion) {
    var tmp = new $retrievePublicKeyCOROUTINE$37($this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function _get_ociSigningAlgorithm__to4ksy($this) {
    var tmp0 = $this.o89_1;
    // Inline function 'kotlin.getValue' call
    ociSigningAlgorithm$factory();
    return tmp0.z();
  }
  function Companion_19() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.j6o_1 = [null, null, null, lazy(tmp_0, OCIKeyRestApi$Companion$$childSerializers$_anonymous__ad0c0i), null];
    var tmp_1 = this;
    tmp_1.k6o_1 = HttpClient(OCIKeyRestApi$Companion$http$lambda);
  }
  protoOf(Companion_19).l6o = function (type, config, $completion) {
    return retry(VOID, VOID, OCIKeyRestApi$Companion$generateKey$slambda_0(type, config, null), $completion);
  };
  protoOf(Companion_19).n88 = function (OCIDKeyID, keyId, host, signingKeyPem, $completion) {
    return retry(VOID, VOID, OCIKeyRestApi$Companion$deleteKey$slambda_0(OCIDKeyID, host, signingKeyPem, keyId, null), $completion);
  };
  protoOf(Companion_19).q89 = function (OCIDKeyID, keyId, host, signingKeyPem) {
    var tmp = OCIKeyRestApi$Companion$deleteKeyAsync$slambda_0(OCIDKeyID, keyId, host, signingKeyPem, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_19).r89 = function (type, config) {
    var tmp = OCIKeyRestApi$Companion$generateKeyAsync$slambda_0(type, config, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_19).s4p = function () {
    return $serializer_getInstance_15();
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_19();
    return Companion_instance_24;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('oci-rest-api', this, 5);
    tmp0_serialDesc.v28('config', false);
    tmp0_serialDesc.v28('id', false);
    tmp0_serialDesc.v28('_publicKey', true);
    tmp0_serialDesc.v28('_keyType', true);
    tmp0_serialDesc.v28('vaultKeyId', true);
    tmp0_serialDesc.w28(new JsonClassDiscriminator('type'));
    this.s89_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).t89 = function (encoder, value) {
    var tmp0_desc = this.s89_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_24().j6o_1;
    tmp1_output.y22(tmp0_desc, 0, $serializer_getInstance_14(), value.config);
    tmp1_output.w22(tmp0_desc, 1, value.id);
    if (tmp1_output.e23(tmp0_desc, 2) ? true : !(value.l89_1 == null)) {
      tmp1_output.a23(tmp0_desc, 2, StringSerializer_getInstance(), value.l89_1);
    }
    if (tmp1_output.e23(tmp0_desc, 3) ? true : !(value.m89_1 == null)) {
      tmp1_output.a23(tmp0_desc, 3, tmp2_cached[3].z(), value.m89_1);
    }
    if (tmp1_output.e23(tmp0_desc, 4) ? true : !(value.n89_1 === value.config.tenancyOcid + '/' + value.config.userOcid + '/' + value.config.fingerprint)) {
      tmp1_output.w22(tmp0_desc, 4, value.n89_1);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_15).v1x = function (encoder, value) {
    return this.t89(encoder, value instanceof OCIKeyRestApi ? value : THROW_CCE());
  };
  protoOf($serializer_15).w1x = function (decoder) {
    var tmp0_desc = this.s89_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp11_input = decoder.h21(tmp0_desc);
    var tmp12_cached = Companion_getInstance_24().j6o_1;
    if (tmp11_input.x21()) {
      tmp4_local0 = tmp11_input.t21(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.r21(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.v21(tmp0_desc, 3, tmp12_cached[3].z(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.r21(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.t21(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.r21(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.v21(tmp0_desc, 3, tmp12_cached[3].z(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.r21(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.i21(tmp0_desc);
    return OCIKeyRestApi_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_15).u1x = function () {
    return this.s89_1;
  };
  protoOf($serializer_15).l29 = function () {
    var tmp0_cached = Companion_getInstance_24().j6o_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_14(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].z()), StringSerializer_getInstance()];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function OCIKeyRestApi_init_$Init$(seen0, config, id, _publicKey, _keyType, vaultKeyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_15().s89_1);
    }
    Key_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.config = config;
    $this.id = id;
    if (0 === (seen0 & 4))
      $this.l89_1 = null;
    else
      $this.l89_1 = _publicKey;
    if (0 === (seen0 & 8))
      $this.m89_1 = null;
    else
      $this.m89_1 = _keyType;
    if (0 === (seen0 & 16))
      $this.n89_1 = $this.config.tenancyOcid + '/' + $this.config.userOcid + '/' + $this.config.fingerprint;
    else
      $this.n89_1 = vaultKeyId;
    var tmp = $this;
    tmp.o89_1 = lazy_0(OCIKeyRestApi$_init_$lambda_25kthr($this));
    $this.p89_1 = null;
    return $this;
  }
  function OCIKeyRestApi_init_$Create$(seen0, config, id, _publicKey, _keyType, vaultKeyId, serializationConstructorMarker) {
    return OCIKeyRestApi_init_$Init$(seen0, config, id, _publicKey, _keyType, vaultKeyId, serializationConstructorMarker, objectCreate(protoOf(OCIKeyRestApi)));
  }
  function OCIKeyRestApi$ociSigningAlgorithm$delegate$lambda(this$0) {
    return function () {
      var tmp;
      switch (this$0.keyType.r2_1) {
        case 2:
          tmp = 'ECDSA_SHA_256';
          break;
        case 3:
          tmp = 'SHA_256_RSA_PKCS_PSS';
          break;
        default:
          throw new KeyTypeNotSupportedException(this$0.keyType.q2_1);
      }
      return tmp;
    };
  }
  function OCIKeyRestApi$signRaw$slambda($plaintext, this$0, resultContinuation) {
    this.c8a_1 = $plaintext;
    this.d8a_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$signRaw$slambda).k6l = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$signRaw$slambda).yb = function ($completion) {
    return this.k6l($completion);
  };
  protoOf(OCIKeyRestApi$signRaw$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.e8a_1 = encodeBase64(SHA256_init_$Create$().g6d(this.c8a_1));
            this.f8a_1 = (new JsonObject(mapOf([to('keyId', JsonPrimitive_0(this.d8a_1.id)), to('message', JsonPrimitive_0(this.e8a_1)), to('signingAlgorithm', JsonPrimitive_0(_get_ociSigningAlgorithm__to4ksy(this.d8a_1))), to('messageType', JsonPrimitive_0('DIGEST'))]))).toString();
            this.g8a_1 = signingRequest(Companion_getInstance_24(), 'POST', '/20180608/sign', this.d8a_1.config.cryptoEndpoint, this.f8a_1, this.d8a_1.config.signingKeyPem);
            this.h8a_1 = Companion_getInstance_24();
            var tmp_0 = this;
            tmp_0.i8a_1 = Companion_getInstance_24().k6o_1;
            var tmp_1 = this;
            tmp_1.j8a_1 = 'https://' + this.d8a_1.config.cryptoEndpoint + '/20180608/sign';
            this.k8a_1 = this.i8a_1;
            this.l8a_1 = this.j8a_1;
            var tmp_2 = this;
            tmp_2.m8a_1 = this.k8a_1;
            this.n8a_1 = this.m8a_1;
            var tmp_3 = this;
            tmp_3.o8a_1 = this.n8a_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.l8a_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="date (request-target) host content-length content-type x-content-sha256",keyId="' + this.d8a_1.n89_1 + '",algorithm="rsa-sha256",signature="' + this.g8a_1 + '"');
            header(this_0, 'Host', get_host(this_0));
            header(this_0, 'x-content-sha256', calculateSHA256(Companion_getInstance_24(), this.f8a_1));
            var body = this.f8a_1;
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_5 = PrimitiveClasses_getInstance().ld();
              var tmp_6;
              try {
                tmp_6 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
              this_0.d3n(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_8 = PrimitiveClasses_getInstance().ld();
                var tmp_9;
                try {
                  tmp_9 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
                this_0.d3n(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.p8a_1 = this_0;
            this.q8a_1 = this.o8a_1;
            this.r8a_1 = this.p8a_1;
            this.r8a_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_11 = this;
            tmp_11.s8a_1 = this.q8a_1;
            var tmp_12 = this;
            tmp_12.t8a_1 = this.r8a_1;
            this.u8a_1 = this.s8a_1;
            this.v8a_1 = this.t8a_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.v8a_1, this.u8a_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w8a_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = ociJsonDataBody(this.h8a_1, this.w8a_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.we('signature');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4p();
            var response = tmp2_safe_receiver == null ? null : Base64Utils_getInstance().decodeFromBase64(tmp2_safe_receiver);
            var tmp_13;
            if (response == null) {
              throw new SigningException('No signature returned from OCI.');
            } else {
              tmp_13 = response;
            }

            return tmp_13;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$signRaw$slambda).ha = function (completion) {
    return new OCIKeyRestApi$signRaw$slambda(this.c8a_1, this.d8a_1, completion);
  };
  function OCIKeyRestApi$signRaw$slambda_0($plaintext, this$0, resultContinuation) {
    var i = new OCIKeyRestApi$signRaw$slambda($plaintext, this$0, resultContinuation);
    var l = function ($completion) {
      return i.k6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$signJws$lambda() {
    return 'Converted DER to IEEE P1363 signature.';
  }
  function OCIKeyRestApi$signJws$lambda_0() {
    return 'Did not convert DER to IEEE P1363 signature.';
  }
  function OCIKeyRestApi$deleteKeyAsync$slambda(this$0, resultContinuation) {
    this.f8b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$deleteKeyAsync$slambda).m6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$deleteKeyAsync$slambda).yb = function ($completion) {
    return this.m6f($completion);
  };
  protoOf(OCIKeyRestApi$deleteKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.f8b_1.n6f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$deleteKeyAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$deleteKeyAsync$slambda(this.f8b_1, completion);
  };
  function OCIKeyRestApi$deleteKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$deleteKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.o8b_1 = this$0;
    this.p8b_1 = $plaintext;
    this.q8b_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$signJwsAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$signJwsAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(OCIKeyRestApi$signJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.o8b_1.a6g(this.p8b_1, this.q8b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$signJwsAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$signJwsAsync$slambda(this.o8b_1, this.p8b_1, this.q8b_1, completion);
  };
  function OCIKeyRestApi$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new OCIKeyRestApi$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$signRawAsync$slambda(this$0, $plaintext, resultContinuation) {
    this.z8b_1 = this$0;
    this.a8c_1 = $plaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$signRawAsync$slambda).k6l = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$signRawAsync$slambda).yb = function ($completion) {
    return this.k6l($completion);
  };
  protoOf(OCIKeyRestApi$signRawAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.z8b_1.l75(this.a8c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$signRawAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$signRawAsync$slambda(this.z8b_1, this.a8c_1, completion);
  };
  function OCIKeyRestApi$signRawAsync$slambda_0(this$0, $plaintext, resultContinuation) {
    var i = new OCIKeyRestApi$signRawAsync$slambda(this$0, $plaintext, resultContinuation);
    var l = function ($completion) {
      return i.k6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.j8c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$getKeyIdAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$getKeyIdAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(OCIKeyRestApi$getKeyIdAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.j8c_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$getKeyIdAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$getKeyIdAsync$slambda(this.j8c_1, completion);
  };
  function OCIKeyRestApi$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$getPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.s8c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$getPublicKeyAsync$slambda).q6h = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$getPublicKeyAsync$slambda).yb = function ($completion) {
    return this.q6h($completion);
  };
  protoOf(OCIKeyRestApi$getPublicKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.s8c_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$getPublicKeyAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$getPublicKeyAsync$slambda(this.s8c_1, completion);
  };
  function OCIKeyRestApi$getPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$getPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.q6h($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$getMetaAsync$slambda(this$0, resultContinuation) {
    this.b8d_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$getMetaAsync$slambda).c8d = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$getMetaAsync$slambda).yb = function ($completion) {
    return this.c8d($completion);
  };
  protoOf(OCIKeyRestApi$getMetaAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.b8d_1.d8d(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$getMetaAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$getMetaAsync$slambda(this.b8d_1, completion);
  };
  function OCIKeyRestApi$getMetaAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$getMetaAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.c8d($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.m8d_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$exportPEMAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$exportPEMAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(OCIKeyRestApi$exportPEMAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.m8d_1.m6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$exportPEMAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$exportPEMAsync$slambda(this.m8d_1, completion);
  };
  function OCIKeyRestApi$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.v8d_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$getThumbprintAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$getThumbprintAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(OCIKeyRestApi$getThumbprintAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.v8d_1.w6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$getThumbprintAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$getThumbprintAsync$slambda(this.v8d_1, completion);
  };
  function OCIKeyRestApi$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.e8e_1 = this$0;
    this.f8e_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$verifyJwsAsync$slambda).r6j = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(OCIKeyRestApi$verifyJwsAsync$slambda).yb = function ($completion) {
    return this.r6j($completion);
  };
  protoOf(OCIKeyRestApi$verifyJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.e8e_1.s6j(this.f8e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$verifyJwsAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$verifyJwsAsync$slambda(this.e8e_1, this.f8e_1, completion);
  };
  function OCIKeyRestApi$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new OCIKeyRestApi$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.r6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.o8e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$exportJWKAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$exportJWKAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(OCIKeyRestApi$exportJWKAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.o8e_1.c6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$exportJWKAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$exportJWKAsync$slambda(this.o8e_1, completion);
  };
  function OCIKeyRestApi$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.x8e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$exportJWKObjectAsync$slambda).m6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$exportJWKObjectAsync$slambda).yb = function ($completion) {
    return this.m6k($completion);
  };
  protoOf(OCIKeyRestApi$exportJWKObjectAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.x8e_1.n6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$exportJWKObjectAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$exportJWKObjectAsync$slambda(this.x8e_1, completion);
  };
  function OCIKeyRestApi$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.g8f_1 = this$0;
    this.h8f_1 = $signed;
    this.i8f_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$verifyRawAsync$slambda).z6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(OCIKeyRestApi$verifyRawAsync$slambda).yb = function ($completion) {
    return this.z6k($completion);
  };
  protoOf(OCIKeyRestApi$verifyRawAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.g8f_1.a6l(this.h8f_1, this.i8f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$verifyRawAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$verifyRawAsync$slambda(this.g8f_1, this.h8f_1, this.i8f_1, completion);
  };
  function OCIKeyRestApi$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new OCIKeyRestApi$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.z6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.r8f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda).k6l = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda).yb = function ($completion) {
    return this.k6l($completion);
  };
  protoOf(OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.r8f_1.l6l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda).ha = function (completion) {
    return new OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda(this.r8f_1, completion);
  };
  function OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.k6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$_init_$lambda_25kthr(this$0) {
    return function () {
      var tmp;
      switch (this$0.keyType.r2_1) {
        case 2:
          tmp = 'ECDSA_SHA_256';
          break;
        case 3:
          tmp = 'SHA_256_RSA_PKCS_PSS';
          break;
        default:
          throw new KeyTypeNotSupportedException(this$0.keyType.q2_1);
      }
      return tmp;
    };
  }
  function $retrievePublicKeyCOROUTINE$37(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g89_1 = _this__u8e3s4;
  }
  protoOf($retrievePublicKeyCOROUTINE$37).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            this.l9_1 = 1;
            suspendResult = getKeys(Companion_getInstance_24(), this.g89_1.n89_1, this.g89_1.config.managementEndpoint, this.g89_1.config.tenancyOcid, this.g89_1.config.signingKeyPem, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h89_1 = suspendResult;
            var tmp_0 = this;
            var tmp0 = this.h89_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.length;
              while (inductionVariable < last) {
                var element = tmp0[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var tmp0_safe_receiver = element.we('id');
                var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
                if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4p()) === this.g89_1.id) {
                  tmp$ret$0 = element;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              throw new KeyNotFoundException(this.g89_1.id);
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.i89_1 = tmp_1;
            this.l9_1 = 2;
            suspendResult = getKeyVersion(Companion_getInstance_24(), this.g89_1.id, this.g89_1.n89_1, this.g89_1.config.managementEndpoint, this.g89_1.config.signingKeyPem, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.j89_1 = suspendResult;
            var tmp_2 = this;
            var tmp1_safe_receiver_0 = this.i89_1.we('id');
            var tmp2_safe_receiver = tmp1_safe_receiver_0 == null ? null : get_jsonPrimitive(tmp1_safe_receiver_0);
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v4p();
            var tmp_3;
            if (tmp3_elvis_lhs == null) {
              throw new KeyNotFoundException(this.g89_1.id);
            } else {
              tmp_3 = tmp3_elvis_lhs;
            }

            tmp_2.k89_1 = tmp_3;
            this.l9_1 = 3;
            suspendResult = getOCIPublicKey(Companion_getInstance_24(), this.k89_1, this.g89_1.n89_1, this.g89_1.config.managementEndpoint, this.j89_1, this.g89_1.config.signingKeyPem, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return suspendResult;
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $getKeyIdCOROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a8g_1 = _this__u8e3s4;
  }
  protoOf($getKeyIdCOROUTINE$38).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.a8g_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b8g_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.b8g_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getKeyIdCOROUTINE$38)['<set-state>'] = protoOf($getKeyIdCOROUTINE$38).s9;
  protoOf($getKeyIdCOROUTINE$38)['<get-state>'] = protoOf($getKeyIdCOROUTINE$38).t9;
  protoOf($getKeyIdCOROUTINE$38)['<set-exceptionState>'] = protoOf($getKeyIdCOROUTINE$38).u9;
  protoOf($getKeyIdCOROUTINE$38)['<get-exceptionState>'] = protoOf($getKeyIdCOROUTINE$38).v9;
  protoOf($getKeyIdCOROUTINE$38)['<set-result>'] = protoOf($getKeyIdCOROUTINE$38).w9;
  protoOf($getKeyIdCOROUTINE$38)['<get-result>'] = protoOf($getKeyIdCOROUTINE$38).x9;
  protoOf($getKeyIdCOROUTINE$38)['<set-exception>'] = protoOf($getKeyIdCOROUTINE$38).y9;
  protoOf($getKeyIdCOROUTINE$38)['<get-exception>'] = protoOf($getKeyIdCOROUTINE$38).z9;
  protoOf($getKeyIdCOROUTINE$38)['<set-finallyPath>'] = protoOf($getKeyIdCOROUTINE$38).aa;
  protoOf($getKeyIdCOROUTINE$38)['<get-finallyPath>'] = protoOf($getKeyIdCOROUTINE$38).ba;
  protoOf($getKeyIdCOROUTINE$38)['<get-context>'] = protoOf($getKeyIdCOROUTINE$38).r9;
  function $signJwsCOROUTINE$39(_this__u8e3s4, plaintext, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k8g_1 = _this__u8e3s4;
    this.l8g_1 = plaintext;
    this.m8g_1 = headers;
  }
  protoOf($signJwsCOROUTINE$39).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            var tmp_0 = this;
            var this_0 = HashMap_init_$Create$_0(this.m8g_1);
            this_0.n2('alg', JsonUtils_getInstance().toJsonElement(jwsSigningAlgorithm(this.k8g_1.keyType)));
            tmp_0.n8g_1 = this_0;
            var tmp_1 = this;
            var tmp_2 = Base64Utils_getInstance();
            var tmp2 = Default_getInstance();
            var value = this.n8g_1;
            var this_1 = tmp2.w21();
            var this_2 = serializer(this_1, createKType(getKClass(HashMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
            tmp_1.o8g_1 = tmp_2.encodeToBase64Url(encodeToByteArray(tmp2.x1y(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)));
            this.p8g_1 = Base64Utils_getInstance().encodeToBase64Url(this.l8g_1);
            this.l9_1 = 1;
            suspendResult = this.k8g_1.l75(encodeToByteArray(this.o8g_1 + '.' + this.p8g_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var rawSignature = suspendResult;
            if (listOf([KeyType_secp256r1_getInstance(), KeyType_secp256k1_getInstance()]).x1(this.k8g_1.keyType)) {
              var tmp_3 = get_log();
              tmp_3.k6b(OCIKeyRestApi$signJws$lambda);
              rawSignature = EccUtils_instance.a6f(rawSignature);
            } else {
              var tmp_4 = get_log();
              tmp_4.k6b(OCIKeyRestApi$signJws$lambda_0);
            }

            var encodedSignature = Base64Utils_getInstance().encodeToBase64Url(rawSignature);
            var jws = this.o8g_1 + '.' + this.p8g_1 + '.' + encodedSignature;
            return jws;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($signJwsCOROUTINE$39)['<set-state>'] = protoOf($signJwsCOROUTINE$39).s9;
  protoOf($signJwsCOROUTINE$39)['<get-state>'] = protoOf($signJwsCOROUTINE$39).t9;
  protoOf($signJwsCOROUTINE$39)['<set-exceptionState>'] = protoOf($signJwsCOROUTINE$39).u9;
  protoOf($signJwsCOROUTINE$39)['<get-exceptionState>'] = protoOf($signJwsCOROUTINE$39).v9;
  protoOf($signJwsCOROUTINE$39)['<set-result>'] = protoOf($signJwsCOROUTINE$39).w9;
  protoOf($signJwsCOROUTINE$39)['<get-result>'] = protoOf($signJwsCOROUTINE$39).x9;
  protoOf($signJwsCOROUTINE$39)['<set-exception>'] = protoOf($signJwsCOROUTINE$39).y9;
  protoOf($signJwsCOROUTINE$39)['<get-exception>'] = protoOf($signJwsCOROUTINE$39).z9;
  protoOf($signJwsCOROUTINE$39)['<set-finallyPath>'] = protoOf($signJwsCOROUTINE$39).aa;
  protoOf($signJwsCOROUTINE$39)['<get-finallyPath>'] = protoOf($signJwsCOROUTINE$39).ba;
  protoOf($signJwsCOROUTINE$39)['<get-context>'] = protoOf($signJwsCOROUTINE$39).r9;
  function $verifyRawCOROUTINE$40(_this__u8e3s4, signed, detachedPlaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y8g_1 = _this__u8e3s4;
    this.z8g_1 = signed;
    this.a8h_1 = detachedPlaintext;
  }
  protoOf($verifyRawCOROUTINE$40).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            if (!!(this.a8h_1 == null)) {
              var message = 'An detached plaintext is needed.';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }

            this.b8h_1 = (new JsonObject(mapOf([to('keyId', JsonPrimitive_0(this.y8g_1.id)), to('message', JsonPrimitive_0(encodeBase64(this.a8h_1))), to('signature', JsonPrimitive_0(encodeBase64(this.z8g_1))), to('signingAlgorithm', JsonPrimitive_0(_get_ociSigningAlgorithm__to4ksy(this.y8g_1)))]))).toString();
            this.c8h_1 = signingRequest(Companion_getInstance_24(), 'POST', '/20180608/verify', this.y8g_1.config.cryptoEndpoint, this.b8h_1, this.y8g_1.config.signingKeyPem);
            this.d8h_1 = Companion_getInstance_24();
            var tmp_0 = this;
            tmp_0.e8h_1 = Companion_getInstance_24().k6o_1;
            var tmp_1 = this;
            tmp_1.f8h_1 = 'https://' + this.y8g_1.config.cryptoEndpoint + '/20180608/verify';
            this.g8h_1 = this.e8h_1;
            this.h8h_1 = this.f8h_1;
            var tmp_2 = this;
            tmp_2.i8h_1 = this.g8h_1;
            this.j8h_1 = this.i8h_1;
            var tmp_3 = this;
            tmp_3.k8h_1 = this.j8h_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.h8h_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="date (request-target) host content-length content-type x-content-sha256",keyId="' + this.y8g_1.n89_1 + '",algorithm="rsa-sha256",signature="' + this.c8h_1 + '"');
            header(this_0, 'Host', get_host(this_0));
            header(this_0, 'x-content-sha256', calculateSHA256(Companion_getInstance_24(), this.b8h_1));
            var body = this.b8h_1;
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_5 = PrimitiveClasses_getInstance().ld();
              var tmp_6;
              try {
                tmp_6 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
              this_0.d3n(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_8 = PrimitiveClasses_getInstance().ld();
                var tmp_9;
                try {
                  tmp_9 = createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false);
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
                this_0.d3n(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.l8h_1 = this_0;
            this.m8h_1 = this.k8h_1;
            this.n8h_1 = this.l8h_1;
            this.n8h_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_11 = this;
            tmp_11.o8h_1 = this.m8h_1;
            var tmp_12 = this;
            tmp_12.p8h_1 = this.n8h_1;
            this.q8h_1 = this.o8h_1;
            this.r8h_1 = this.p8h_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.r8h_1, this.q8h_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s8h_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = ociJsonDataBody(this.d8h_1, this.s8h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.we('isSignatureValid');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : get_boolean(tmp1_safe_receiver);
            var response = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
            var tmp_13;
            if (response) {
              var value = this.a8h_1;
              tmp_13 = _Result___init__impl__xyqfz8(value);
            } else {
              var exception = new VerificationException('Signature is not valid');
              tmp_13 = _Result___init__impl__xyqfz8(createFailure(exception));
            }

            return new Result(tmp_13);
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($verifyRawCOROUTINE$40)['<set-state>'] = protoOf($verifyRawCOROUTINE$40).s9;
  protoOf($verifyRawCOROUTINE$40)['<get-state>'] = protoOf($verifyRawCOROUTINE$40).t9;
  protoOf($verifyRawCOROUTINE$40)['<set-exceptionState>'] = protoOf($verifyRawCOROUTINE$40).u9;
  protoOf($verifyRawCOROUTINE$40)['<get-exceptionState>'] = protoOf($verifyRawCOROUTINE$40).v9;
  protoOf($verifyRawCOROUTINE$40)['<set-result>'] = protoOf($verifyRawCOROUTINE$40).w9;
  protoOf($verifyRawCOROUTINE$40)['<get-result>'] = protoOf($verifyRawCOROUTINE$40).x9;
  protoOf($verifyRawCOROUTINE$40)['<set-exception>'] = protoOf($verifyRawCOROUTINE$40).y9;
  protoOf($verifyRawCOROUTINE$40)['<get-exception>'] = protoOf($verifyRawCOROUTINE$40).z9;
  protoOf($verifyRawCOROUTINE$40)['<set-finallyPath>'] = protoOf($verifyRawCOROUTINE$40).aa;
  protoOf($verifyRawCOROUTINE$40)['<get-finallyPath>'] = protoOf($verifyRawCOROUTINE$40).ba;
  protoOf($verifyRawCOROUTINE$40)['<get-context>'] = protoOf($verifyRawCOROUTINE$40).r9;
  function $verifyJwsCOROUTINE$41(_this__u8e3s4, signedJws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b8i_1 = _this__u8e3s4;
    this.c8i_1 = signedJws;
  }
  protoOf($verifyJwsCOROUTINE$41).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.d8i_1 = JwsUtils_instance.decodeJws(this.c8i_1, true);
            this.e8i_1 = this.d8i_1.bc();
            this.f8i_1 = this.d8i_1.cc();
            this.g8i_1 = this.d8i_1.zo();
            this.h8i_1 = toMap(this.e8i_1);
            var tmp0_safe_receiver = this.h8i_1.k2('alg');
            if (tmp0_safe_receiver == null)
              null;
            else {
              var algValue = get_jsonPrimitive(tmp0_safe_receiver).v4p();
              if (!(algValue === JwsUtils_instance.jwsAlg(this.b8i_1.keyType))) {
                var message = 'Invalid key algorithm for JWS: JWS has ' + algValue + ', key is ' + JwsUtils_instance.jwsAlg(this.b8i_1.keyType) + '!';
                throw IllegalStateException_init_$Create$(toString_0(message));
              }
            }

            this.i8i_1 = encodeToByteArray(this.e8i_1.toString() + '.' + this.f8i_1.toString());
            this.l9_1 = 1;
            suspendResult = this.b8i_1.a6l(Base64Utils_getInstance().decodeFromBase64Url(this.g8i_1), this.i8i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult.vo_1;
            var tmp_0;
            if (_Result___get_isSuccess__impl__sndoy8(this_0)) {
              var tmp_1 = _Result___get_value__impl__bjfvqg(this_0);
              var it = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
              var verifiedPayload = decodeToString(Base64Utils_getInstance().decodeFromBase64Url(substringAfter(decodeToString(it), '.')));
              var value = Default_getInstance().q4n(verifiedPayload);
              tmp_0 = _Result___init__impl__xyqfz8(value);
            } else {
              tmp_0 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this_0));
            }

            return new Result(tmp_0);
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($verifyJwsCOROUTINE$41)['<set-state>'] = protoOf($verifyJwsCOROUTINE$41).s9;
  protoOf($verifyJwsCOROUTINE$41)['<get-state>'] = protoOf($verifyJwsCOROUTINE$41).t9;
  protoOf($verifyJwsCOROUTINE$41)['<set-exceptionState>'] = protoOf($verifyJwsCOROUTINE$41).u9;
  protoOf($verifyJwsCOROUTINE$41)['<get-exceptionState>'] = protoOf($verifyJwsCOROUTINE$41).v9;
  protoOf($verifyJwsCOROUTINE$41)['<set-result>'] = protoOf($verifyJwsCOROUTINE$41).w9;
  protoOf($verifyJwsCOROUTINE$41)['<get-result>'] = protoOf($verifyJwsCOROUTINE$41).x9;
  protoOf($verifyJwsCOROUTINE$41)['<set-exception>'] = protoOf($verifyJwsCOROUTINE$41).y9;
  protoOf($verifyJwsCOROUTINE$41)['<get-exception>'] = protoOf($verifyJwsCOROUTINE$41).z9;
  protoOf($verifyJwsCOROUTINE$41)['<set-finallyPath>'] = protoOf($verifyJwsCOROUTINE$41).aa;
  protoOf($verifyJwsCOROUTINE$41)['<get-finallyPath>'] = protoOf($verifyJwsCOROUTINE$41).ba;
  protoOf($verifyJwsCOROUTINE$41)['<get-context>'] = protoOf($verifyJwsCOROUTINE$41).r9;
  function $getPublicKeyCOROUTINE$42(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r8i_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyCOROUTINE$42).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 6;
            this.s8i_1 = this.r8i_1.p89_1;
            if (this.s8i_1 == null) {
              if (!(this.r8i_1.l89_1 == null)) {
                var tmp_0 = this;
                tmp_0.v8i_1 = ensureNotNull(this.r8i_1.l89_1);
                this.w8i_1 = this.v8i_1;
                var tmp_1 = this;
                tmp_1.x8i_1 = this.w8i_1;
                this.y8i_1 = this.x8i_1;
                this.l9_1 = 2;
                suspendResult = Companion_instance_31.m7d(this.y8i_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                this.l9_1 = 3;
                continue $sm;
              } else {
                this.l9_1 = 1;
                suspendResult = retrievePublicKey(this.r8i_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.t8i_1 = this.s8i_1;
              this.l9_1 = 5;
              continue $sm;
            }

          case 1:
            this.u8i_1 = suspendResult;
            this.l9_1 = 4;
            continue $sm;
          case 2:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 3;
            continue $sm;
          case 3:
            var tmp_2 = this;
            var this_0 = suspendResult.vo_1;
            throwOnFailure(this_0);
            var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
            tmp_2.u8i_1 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
            this.l9_1 = 4;
            continue $sm;
          case 4:
            var tmp_4 = this;
            var this_1 = this.u8i_1;
            this.r8i_1.p89_1 = this_1;
            tmp_4.t8i_1 = this_1;
            this.l9_1 = 5;
            continue $sm;
          case 5:
            return this.t8i_1;
          case 6:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 6) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getPublicKeyCOROUTINE$42)['<set-state>'] = protoOf($getPublicKeyCOROUTINE$42).s9;
  protoOf($getPublicKeyCOROUTINE$42)['<get-state>'] = protoOf($getPublicKeyCOROUTINE$42).t9;
  protoOf($getPublicKeyCOROUTINE$42)['<set-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$42).u9;
  protoOf($getPublicKeyCOROUTINE$42)['<get-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$42).v9;
  protoOf($getPublicKeyCOROUTINE$42)['<set-result>'] = protoOf($getPublicKeyCOROUTINE$42).w9;
  protoOf($getPublicKeyCOROUTINE$42)['<get-result>'] = protoOf($getPublicKeyCOROUTINE$42).x9;
  protoOf($getPublicKeyCOROUTINE$42)['<set-exception>'] = protoOf($getPublicKeyCOROUTINE$42).y9;
  protoOf($getPublicKeyCOROUTINE$42)['<get-exception>'] = protoOf($getPublicKeyCOROUTINE$42).z9;
  protoOf($getPublicKeyCOROUTINE$42)['<set-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$42).aa;
  protoOf($getPublicKeyCOROUTINE$42)['<get-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$42).ba;
  protoOf($getPublicKeyCOROUTINE$42)['<get-context>'] = protoOf($getPublicKeyCOROUTINE$42).r9;
  function $getMetaCOROUTINE$43(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h8j_1 = _this__u8e3s4;
  }
  protoOf($getMetaCOROUTINE$43).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.i8j_1 = this.h8j_1.id;
            this.l9_1 = 1;
            suspendResult = getKeyVersion(Companion_getInstance_24(), this.h8j_1.id, this.h8j_1.n89_1, this.h8j_1.config.managementEndpoint, this.h8j_1.config.signingKeyPem, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new OciKeyMeta(this.i8j_1, ARGUMENT);
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getMetaCOROUTINE$43)['<set-state>'] = protoOf($getMetaCOROUTINE$43).s9;
  protoOf($getMetaCOROUTINE$43)['<get-state>'] = protoOf($getMetaCOROUTINE$43).t9;
  protoOf($getMetaCOROUTINE$43)['<set-exceptionState>'] = protoOf($getMetaCOROUTINE$43).u9;
  protoOf($getMetaCOROUTINE$43)['<get-exceptionState>'] = protoOf($getMetaCOROUTINE$43).v9;
  protoOf($getMetaCOROUTINE$43)['<set-result>'] = protoOf($getMetaCOROUTINE$43).w9;
  protoOf($getMetaCOROUTINE$43)['<get-result>'] = protoOf($getMetaCOROUTINE$43).x9;
  protoOf($getMetaCOROUTINE$43)['<set-exception>'] = protoOf($getMetaCOROUTINE$43).y9;
  protoOf($getMetaCOROUTINE$43)['<get-exception>'] = protoOf($getMetaCOROUTINE$43).z9;
  protoOf($getMetaCOROUTINE$43)['<set-finallyPath>'] = protoOf($getMetaCOROUTINE$43).aa;
  protoOf($getMetaCOROUTINE$43)['<get-finallyPath>'] = protoOf($getMetaCOROUTINE$43).ba;
  protoOf($getMetaCOROUTINE$43)['<get-context>'] = protoOf($getMetaCOROUTINE$43).r9;
  function OCIKeyRestApi(config, id, _publicKey, _keyType) {
    Companion_getInstance_24();
    _publicKey = _publicKey === VOID ? null : _publicKey;
    _keyType = _keyType === VOID ? null : _keyType;
    Key.call(this);
    this.config = config;
    this.id = id;
    this.l89_1 = _publicKey;
    this.m89_1 = _keyType;
    this.n89_1 = this.config.tenancyOcid + '/' + this.config.userOcid + '/' + this.config.fingerprint;
    var tmp = this;
    tmp.o89_1 = lazy_0(OCIKeyRestApi$ociSigningAlgorithm$delegate$lambda(this));
    this.p89_1 = null;
  }
  protoOf(OCIKeyRestApi).n3h = function () {
    return this.config;
  };
  protoOf(OCIKeyRestApi).a67 = function () {
    return this.id;
  };
  protoOf(OCIKeyRestApi).w7e = function (value) {
    this.m89_1 = value;
  };
  protoOf(OCIKeyRestApi).a6m = function () {
    return ensureNotNull(this.m89_1);
  };
  protoOf(OCIKeyRestApi).b6m = function () {
    return false;
  };
  protoOf(OCIKeyRestApi).toString = function () {
    return '[OCI ' + this.keyType.q2_1 + ' key @ ' + this.config.tenancyOcid + ']';
  };
  protoOf(OCIKeyRestApi).w6g = function ($completion) {
    var tmp = new $getKeyIdCOROUTINE$38(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi).w6i = function ($completion) {
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(OCIKeyRestApi).c6k = function ($completion) {
    throw new NotImplementedError('JWK export is not available for remote keys.');
  };
  protoOf(OCIKeyRestApi).n6k = function ($completion) {
    return get_jsonObject(Default_getInstance().q4n(ensureNotNull(this.l89_1)));
  };
  protoOf(OCIKeyRestApi).m6i = function ($completion) {
    throw new NotImplementedError('PEM export is not available for remote keys.');
  };
  protoOf(OCIKeyRestApi).l75 = function (plaintext, $completion) {
    return retry(VOID, VOID, OCIKeyRestApi$signRaw$slambda_0(plaintext, this, null), $completion);
  };
  protoOf(OCIKeyRestApi).m6g = function (plaintext, $completion) {
    return this.l75(plaintext, $completion);
  };
  protoOf(OCIKeyRestApi).a6g = function (plaintext, headers, $completion) {
    var tmp = new $signJwsCOROUTINE$39(this, plaintext, headers, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi).a6l = function (signed, detachedPlaintext, $completion) {
    var tmp = new $verifyRawCOROUTINE$40(this, signed, detachedPlaintext, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(OCIKeyRestApi).s6j = function (signedJws, $completion) {
    var tmp = new $verifyJwsCOROUTINE$41(this, signedJws, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(OCIKeyRestApi).r6h = function ($completion) {
    var tmp = new $getPublicKeyCOROUTINE$42(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi).l6l = function ($completion) {
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(OCIKeyRestApi).d8d = function ($completion) {
    var tmp = new $getMetaCOROUTINE$43(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(OCIKeyRestApi).c6i = function ($completion) {
    return this.d8d($completion);
  };
  protoOf(OCIKeyRestApi).n6f = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(OCIKeyRestApi).c6m = function () {
    var tmp = OCIKeyRestApi$deleteKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).d6m = function (plaintext, headers) {
    var tmp = OCIKeyRestApi$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).e6m = function (plaintext) {
    var tmp = OCIKeyRestApi$signRawAsync$slambda_0(this, plaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).f6m = function () {
    var tmp = OCIKeyRestApi$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).h6m = function () {
    var tmp = OCIKeyRestApi$getPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).i6m = function () {
    var tmp = OCIKeyRestApi$getMetaAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).j6m = function () {
    var tmp = OCIKeyRestApi$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).k6m = function () {
    var tmp = OCIKeyRestApi$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).m6m = function (signedJws) {
    var tmp = OCIKeyRestApi$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).n6m = function () {
    var tmp = OCIKeyRestApi$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).o6m = function () {
    var tmp = OCIKeyRestApi$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).p6m = function (signed, detachedPlaintext) {
    var tmp = OCIKeyRestApi$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).q6m = function () {
    var tmp = OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function retry(retriesLeft, currentTry, block, $completion) {
    retriesLeft = retriesLeft === VOID ? 3 : retriesLeft;
    currentTry = currentTry === VOID ? 1 : currentTry;
    var tmp = new $retryCOROUTINE$48(retriesLeft, currentTry, block, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function log$lambda() {
    _init_properties_OCIKeyRestApi_kt__pktr62();
    return Unit_instance;
  }
  function $retryCOROUTINE$48(retriesLeft, currentTry, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r8j_1 = retriesLeft;
    this.s8j_1 = currentTry;
    this.t8j_1 = block;
  }
  protoOf($retryCOROUTINE$48).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 7;
            this.m9_1 = 2;
            var tmp_0 = this;
            tmp_0.v8j_1 = Companion_instance_1;
            this.l9_1 = 1;
            suspendResult = this.t8j_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w8j_1 = suspendResult;
            var tmp_1 = this;
            this.v8j_1;
            var value = this.w8j_1;
            tmp_1.u8j_1 = _Result___init__impl__xyqfz8(value);
            this.m9_1 = 7;
            this.l9_1 = 3;
            continue $sm;
          case 2:
            this.m9_1 = 7;
            var tmp_2 = this.o9_1;
            if (tmp_2 instanceof Error) {
              this.x8j_1 = this.o9_1;
              var tmp_3 = this;
              var exception = this.x8j_1;
              tmp_3.u8j_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.l9_1 = 3;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 3:
            this.m9_1 = 7;
            this.y8j_1 = this.u8j_1;
            this.z8j_1 = this.y8j_1;
            this.a8k_1 = Result__exceptionOrNull_impl_p6xea9(this.z8j_1);
            if (this.a8k_1 == null) {
              var tmp_4 = this;
              var tmp_5 = _Result___get_value__impl__bjfvqg(this.z8j_1);
              tmp_4.b8k_1 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
              this.l9_1 = 6;
              continue $sm;
            } else {
              var tmp_6 = this;
              tmp_6.c8k_1 = this.a8k_1;
              this.d8k_1 = this.c8k_1;
              if (this.r8j_1 <= 0) {
                var tmp_7 = this;
                throw IllegalStateException_init_$Create$_0('Failed after ' + this.s8j_1 + ' retries: ' + this.d8k_1.message, this.d8k_1);
              } else {
                this.l9_1 = 4;
                suspendResult = retry(this.r8j_1 - 1 | 0, this.s8j_1 + 1 | 0, this.t8j_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

          case 4:
            this.e8k_1 = suspendResult;
            this.l9_1 = 5;
            continue $sm;
          case 5:
            this.b8k_1 = this.e8k_1;
            this.l9_1 = 6;
            continue $sm;
          case 6:
            return this.b8k_1;
          case 7:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 7) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function ociSigningAlgorithm$factory() {
    return getPropertyCallableRef('ociSigningAlgorithm', 1, KProperty1, function (receiver) {
      return _get_ociSigningAlgorithm__to4ksy(receiver);
    }, null);
  }
  var properties_initialized_OCIKeyRestApi_kt_vhp1ik;
  function _init_properties_OCIKeyRestApi_kt__pktr62() {
    if (!properties_initialized_OCIKeyRestApi_kt_vhp1ik) {
      properties_initialized_OCIKeyRestApi_kt_vhp1ik = true;
      var tmp = KotlinLogging_instance;
      log = tmp.o6b(log$lambda);
    }
  }
  function TSEAuth$Companion$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.o3i(tmp, TSEAuth$Companion$http$lambda$lambda);
    defaultRequest($this$HttpClient, TSEAuth$Companion$http$lambda$lambda_0);
    var tmp_0 = get_Logging();
    $this$HttpClient.o3i(tmp_0, TSEAuth$Companion$http$lambda$lambda_1);
    return Unit_instance;
  }
  function TSEAuth$Companion$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function TSEAuth$Companion$http$lambda$lambda_0($this$defaultRequest) {
    header($this$defaultRequest, HttpHeaders_getInstance().p2v_1, Application_getInstance().x2s_1);
    return Unit_instance;
  }
  function TSEAuth$Companion$http$lambda$lambda_1($this$install) {
    $this$install.r5b(get_DEFAULT(Companion_instance_2));
    $this$install.q5b_1 = LogLevel_ALL_getInstance();
    return Unit_instance;
  }
  function Companion_20() {
    Companion_instance_25 = this;
    var tmp = this;
    tmp.f8k_1 = HttpClient(TSEAuth$Companion$http$lambda);
    var tmp_0 = this;
    var tmp_1 = Companion_instance_3.h68();
    // Inline function 'kotlin.time.Companion.hours' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(24, DurationUnit_HOURS_getInstance());
    tmp_0.g8k_1 = tmp_1.o68(tmp$ret$0).w2u();
  }
  protoOf(Companion_20).s4p = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_20();
    return Companion_instance_25;
  }
  function requireAuthenticationMethod_0($this) {
    var usingAccessKey = !($this.accessKey == null);
    var usingRoleIdAndSecret = !($this.roleId == null) || !($this.secretId == null);
    var usingUsernameAndPassword = !($this.username == null) || !($this.password == null);
    // Inline function 'kotlin.require' call
    if (!(usingAccessKey || usingRoleIdAndSecret || usingUsernameAndPassword)) {
      throw new MissingAuthenticationMethodException();
    }
    if (usingRoleIdAndSecret) {
      // Inline function 'kotlin.require' call
      if (!(!($this.roleId == null) && !($this.secretId == null))) {
        throw new IncompleteRoleAuthenticationMethodException();
      }
    }
    if (usingUsernameAndPassword) {
      // Inline function 'kotlin.require' call
      if (!(!($this.username == null) && !($this.password == null))) {
        throw new IncompleteUserAuthenticationMethodException();
      }
    }
  }
  function getServerUpTov1($this, _this__u8e3s4) {
    return substringBefore(_this__u8e3s4, '/v1/') + '/v1';
  }
  function getClientToken($this, _this__u8e3s4, $completion) {
    var tmp = new $getClientTokenCOROUTINE$49($this, _this__u8e3s4, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function checkNoErrors($this, json) {
    var tmp0_safe_receiver = json.we('errors');
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_jsonArray(tmp0_safe_receiver);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
      var _iterator__ex2g4s = this_0.p();
      while (_iterator__ex2g4s.q()) {
        var item = _iterator__ex2g4s.r();
        var tmp$ret$0 = get_jsonPrimitive(item).v4p();
        destination.n(tmp$ret$0);
      }
      throw new LoginException(destination);
    }
    return tmp;
  }
  function loginAppRole($this, server, $completion) {
    var tmp = new $loginAppRoleCOROUTINE$50($this, server, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function loginUserPass($this, server, $completion) {
    var tmp = new $loginUserPassCOROUTINE$51($this, server, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.tse.TSEAuth', this, 6);
    tmp0_serialDesc.v28('accessKey', true);
    tmp0_serialDesc.v28('roleId', true);
    tmp0_serialDesc.v28('secretId', true);
    tmp0_serialDesc.v28('userpassPath', true);
    tmp0_serialDesc.v28('username', true);
    tmp0_serialDesc.v28('password', true);
    this.r8m_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).s8m = function (encoder, value) {
    var tmp0_desc = this.r8m_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    if (tmp1_output.e23(tmp0_desc, 0) ? true : !(value.accessKey == null)) {
      tmp1_output.a23(tmp0_desc, 0, StringSerializer_getInstance(), value.accessKey);
    }
    if (tmp1_output.e23(tmp0_desc, 1) ? true : !(value.roleId == null)) {
      tmp1_output.a23(tmp0_desc, 1, StringSerializer_getInstance(), value.roleId);
    }
    if (tmp1_output.e23(tmp0_desc, 2) ? true : !(value.secretId == null)) {
      tmp1_output.a23(tmp0_desc, 2, StringSerializer_getInstance(), value.secretId);
    }
    if (tmp1_output.e23(tmp0_desc, 3) ? true : !(value.userpassPath === 'userpass')) {
      tmp1_output.w22(tmp0_desc, 3, value.userpassPath);
    }
    if (tmp1_output.e23(tmp0_desc, 4) ? true : !(value.username == null)) {
      tmp1_output.a23(tmp0_desc, 4, StringSerializer_getInstance(), value.username);
    }
    if (tmp1_output.e23(tmp0_desc, 5) ? true : !(value.password == null)) {
      tmp1_output.a23(tmp0_desc, 5, StringSerializer_getInstance(), value.password);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_16).v1x = function (encoder, value) {
    return this.s8m(encoder, value instanceof TSEAuth ? value : THROW_CCE());
  };
  protoOf($serializer_16).w1x = function (decoder) {
    var tmp0_desc = this.r8m_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_input = decoder.h21(tmp0_desc);
    if (tmp10_input.x21()) {
      tmp4_local0 = tmp10_input.v21(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.v21(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.r21(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.v21(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.v21(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.v21(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.v21(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.r21(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.v21(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.v21(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.i21(tmp0_desc);
    return TSEAuth_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_16).u1x = function () {
    return this.r8m_1;
  };
  protoOf($serializer_16).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_16();
    return $serializer_instance_16;
  }
  function TSEAuth_init_$Init$(seen0, accessKey, roleId, secretId, userpassPath, username, password, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().r8m_1);
    }
    if (0 === (seen0 & 1))
      $this.accessKey = null;
    else
      $this.accessKey = accessKey;
    if (0 === (seen0 & 2))
      $this.roleId = null;
    else
      $this.roleId = roleId;
    if (0 === (seen0 & 4))
      $this.secretId = null;
    else
      $this.secretId = secretId;
    if (0 === (seen0 & 8))
      $this.userpassPath = 'userpass';
    else
      $this.userpassPath = userpassPath;
    if (0 === (seen0 & 16))
      $this.username = null;
    else
      $this.username = username;
    if (0 === (seen0 & 32))
      $this.password = null;
    else
      $this.password = password;
    requireAuthenticationMethod_0($this);
    return $this;
  }
  function TSEAuth_init_$Create$(seen0, accessKey, roleId, secretId, userpassPath, username, password, serializationConstructorMarker) {
    return TSEAuth_init_$Init$(seen0, accessKey, roleId, secretId, userpassPath, username, password, serializationConstructorMarker, objectCreate(protoOf(TSEAuth)));
  }
  function TSEAuth$getCachedLogin$slambda(this$0, $server, resultContinuation) {
    this.b8n_1 = this$0;
    this.c8n_1 = $server;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEAuth$getCachedLogin$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEAuth$getCachedLogin$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(TSEAuth$getCachedLogin$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.b8n_1.d8n(this.c8n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEAuth$getCachedLogin$slambda).ha = function (completion) {
    return new TSEAuth$getCachedLogin$slambda(this.b8n_1, this.c8n_1, completion);
  };
  function TSEAuth$getCachedLogin$slambda_0(this$0, $server, resultContinuation) {
    var i = new TSEAuth$getCachedLogin$slambda(this$0, $server, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEAuth$getLoginTokenAsync$slambda(this$0, $server, resultContinuation) {
    this.m8n_1 = this$0;
    this.n8n_1 = $server;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEAuth$getLoginTokenAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEAuth$getLoginTokenAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(TSEAuth$getLoginTokenAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.m8n_1.d8n(this.n8n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEAuth$getLoginTokenAsync$slambda).ha = function (completion) {
    return new TSEAuth$getLoginTokenAsync$slambda(this.m8n_1, this.n8n_1, completion);
  };
  function TSEAuth$getLoginTokenAsync$slambda_0(this$0, $server, resultContinuation) {
    var i = new TSEAuth$getLoginTokenAsync$slambda(this$0, $server, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEAuth$getCachedLoginAsync$slambda(this$0, $server, resultContinuation) {
    this.w8n_1 = this$0;
    this.x8n_1 = $server;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEAuth$getCachedLoginAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEAuth$getCachedLoginAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(TSEAuth$getCachedLoginAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.w8n_1.y8n(this.x8n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEAuth$getCachedLoginAsync$slambda).ha = function (completion) {
    return new TSEAuth$getCachedLoginAsync$slambda(this.w8n_1, this.x8n_1, completion);
  };
  function TSEAuth$getCachedLoginAsync$slambda_0(this$0, $server, resultContinuation) {
    var i = new TSEAuth$getCachedLoginAsync$slambda(this$0, $server, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getClientTokenCOROUTINE$49(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p8k_1 = _this__u8e3s4;
    this.q8k_1 = _this__u8e3s4_0;
  }
  protoOf($getClientTokenCOROUTINE$49).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            var tmp_0 = this;
            tmp_0.r8k_1 = this.q8k_1;
            this.s8k_1 = this.r8k_1;
            this.l9_1 = 1;
            var tmp_1 = this.s8k_1.p3k();
            var tmp_2 = getKClass(JsonObject);
            var tmp_3;
            try {
              tmp_3 = createKType(getKClass(JsonObject), arrayOf([]), false);
            } catch ($p) {
              var tmp_4;
              if ($p instanceof Error) {
                var _unused_var__etf5q3 = $p;
                tmp_4 = null;
              } else {
                throw $p;
              }
              tmp_3 = tmp_4;
            }

            suspendResult = tmp_1.s3j(new TypeInfo(tmp_2, tmp_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            checkNoErrors(this.p8k_1, it);
            var tmp0_safe_receiver = it.we('auth');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.we('client_token');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : get_contentOrNull(tmp3_safe_receiver);
            var tmp_5;
            if (tmp4_elvis_lhs == null) {
              throw new MissingAuthTokenException();
            } else {
              tmp_5 = tmp4_elvis_lhs;
            }

            return tmp_5;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $loginAppRoleCOROUTINE$50(_this__u8e3s4, server, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b8l_1 = _this__u8e3s4;
    this.c8l_1 = server;
  }
  protoOf($loginAppRoleCOROUTINE$50).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            tmp_0.d8l_1 = Companion_getInstance_25().f8k_1;
            var tmp_1 = this;
            tmp_1.e8l_1 = this.c8l_1 + '/auth/approle/login';
            this.f8l_1 = this.d8l_1;
            this.g8l_1 = this.e8l_1;
            var tmp_2 = this;
            tmp_2.h8l_1 = this.f8l_1;
            this.i8l_1 = this.h8l_1;
            var tmp_3 = this;
            tmp_3.j8l_1 = this.i8l_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.g8l_1);
            var body = mapOf([to('role_id', this.b8l_1.roleId), to('secret_id', this.b8l_1.secretId)]);
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_5 = getKClass(KtMap);
              var tmp_6;
              try {
                tmp_6 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), true))]), false);
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
              this_0.d3n(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_8 = getKClass(KtMap);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), true))]), false);
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
                this_0.d3n(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.k8l_1 = this_0;
            this.l8l_1 = this.j8l_1;
            this.m8l_1 = this.k8l_1;
            this.m8l_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_11 = this;
            tmp_11.n8l_1 = this.l8l_1;
            var tmp_12 = this;
            tmp_12.o8l_1 = this.m8l_1;
            this.p8l_1 = this.n8l_1;
            this.q8l_1 = this.o8l_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.q8l_1, this.p8l_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r8l_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = getClientToken(this.b8l_1, this.r8l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $loginUserPassCOROUTINE$51(_this__u8e3s4, server, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a8m_1 = _this__u8e3s4;
    this.b8m_1 = server;
  }
  protoOf($loginUserPassCOROUTINE$51).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            tmp_0.c8m_1 = Companion_getInstance_25().f8k_1;
            var tmp_1 = this;
            tmp_1.d8m_1 = this.b8m_1 + '/auth/' + this.a8m_1.userpassPath + '/login/' + this.a8m_1.username;
            this.e8m_1 = this.c8m_1;
            this.f8m_1 = this.d8m_1;
            var tmp_2 = this;
            tmp_2.g8m_1 = this.e8m_1;
            this.h8m_1 = this.g8m_1;
            var tmp_3 = this;
            tmp_3.i8m_1 = this.h8m_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.f8m_1);
            var body = mapOf_0(to('password', this.a8m_1.password));
            if (body == null) {
              this_0.k3h_1 = NullBody_instance;
              var tmp_5 = getKClass(KtMap);
              var tmp_6;
              try {
                tmp_6 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), true))]), false);
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
              this_0.d3n(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.k3h_1 = body;
                this_0.d3n(null);
              } else {
                this_0.k3h_1 = body;
                var tmp_8 = getKClass(KtMap);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), true))]), false);
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
                this_0.d3n(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.j8m_1 = this_0;
            this.k8m_1 = this.i8m_1;
            this.l8m_1 = this.j8m_1;
            this.l8m_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_11 = this;
            tmp_11.m8m_1 = this.k8m_1;
            var tmp_12 = this;
            tmp_12.n8m_1 = this.l8m_1;
            this.o8m_1 = this.m8m_1;
            this.p8m_1 = this.n8m_1;
            this.l9_1 = 1;
            suspendResult = (new HttpStatement(this.p8m_1, this.o8m_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q8m_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = getClientToken(this.a8m_1, this.q8m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $getLoginTokenCOROUTINE$52(_this__u8e3s4, server, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h8o_1 = _this__u8e3s4;
    this.i8o_1 = server;
  }
  protoOf($getLoginTokenCOROUTINE$52).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            if (!(this.h8o_1.accessKey == null)) {
              this.j8o_1 = this.h8o_1.accessKey;
              this.l9_1 = 3;
              continue $sm;
            } else {
              if (!(this.h8o_1.roleId == null)) {
                this.l9_1 = 2;
                suspendResult = loginAppRole(this.h8o_1, this.i8o_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (!(this.h8o_1.username == null)) {
                  this.l9_1 = 1;
                  suspendResult = loginUserPass(this.h8o_1, this.i8o_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_0 = this;
                  throw new MissingAuthenticationMethodException();
                }
              }
            }

          case 1:
            this.j8o_1 = suspendResult;
            this.l9_1 = 3;
            continue $sm;
          case 2:
            this.j8o_1 = suspendResult;
            this.l9_1 = 3;
            continue $sm;
          case 3:
            return this.j8o_1;
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getLoginTokenCOROUTINE$52)['<set-state>'] = protoOf($getLoginTokenCOROUTINE$52).s9;
  protoOf($getLoginTokenCOROUTINE$52)['<get-state>'] = protoOf($getLoginTokenCOROUTINE$52).t9;
  protoOf($getLoginTokenCOROUTINE$52)['<set-exceptionState>'] = protoOf($getLoginTokenCOROUTINE$52).u9;
  protoOf($getLoginTokenCOROUTINE$52)['<get-exceptionState>'] = protoOf($getLoginTokenCOROUTINE$52).v9;
  protoOf($getLoginTokenCOROUTINE$52)['<set-result>'] = protoOf($getLoginTokenCOROUTINE$52).w9;
  protoOf($getLoginTokenCOROUTINE$52)['<get-result>'] = protoOf($getLoginTokenCOROUTINE$52).x9;
  protoOf($getLoginTokenCOROUTINE$52)['<set-exception>'] = protoOf($getLoginTokenCOROUTINE$52).y9;
  protoOf($getLoginTokenCOROUTINE$52)['<get-exception>'] = protoOf($getLoginTokenCOROUTINE$52).z9;
  protoOf($getLoginTokenCOROUTINE$52)['<set-finallyPath>'] = protoOf($getLoginTokenCOROUTINE$52).aa;
  protoOf($getLoginTokenCOROUTINE$52)['<get-finallyPath>'] = protoOf($getLoginTokenCOROUTINE$52).ba;
  protoOf($getLoginTokenCOROUTINE$52)['<get-context>'] = protoOf($getLoginTokenCOROUTINE$52).r9;
  function TSEAuth(accessKey, roleId, secretId, userpassPath, username, password) {
    Companion_getInstance_25();
    accessKey = accessKey === VOID ? null : accessKey;
    roleId = roleId === VOID ? null : roleId;
    secretId = secretId === VOID ? null : secretId;
    userpassPath = userpassPath === VOID ? 'userpass' : userpassPath;
    username = username === VOID ? null : username;
    password = password === VOID ? null : password;
    this.accessKey = accessKey;
    this.roleId = roleId;
    this.secretId = secretId;
    this.userpassPath = userpassPath;
    this.username = username;
    this.password = password;
    requireAuthenticationMethod_0(this);
  }
  protoOf(TSEAuth).k8o = function () {
    return this.accessKey;
  };
  protoOf(TSEAuth).l8o = function () {
    return this.roleId;
  };
  protoOf(TSEAuth).m8o = function () {
    return this.secretId;
  };
  protoOf(TSEAuth).n8o = function () {
    return this.userpassPath;
  };
  protoOf(TSEAuth).o8o = function () {
    return this.username;
  };
  protoOf(TSEAuth).t33 = function () {
    return this.password;
  };
  protoOf(TSEAuth).d8n = function (server, $completion) {
    var tmp = new $getLoginTokenCOROUTINE$52(this, server, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEAuth).y8n = function (server, $completion) {
    var server_0 = getServerUpTov1(this, server);
    var tmp = Companion_getInstance_25().g8k_1;
    var tmp_0 = new Pair(this, server_0);
    return tmp.d6b(tmp_0, TSEAuth$getCachedLogin$slambda_0(this, server_0, null), $completion);
  };
  protoOf(TSEAuth).p8o = function (server) {
    var tmp = TSEAuth$getLoginTokenAsync$slambda_0(this, server, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEAuth).q8o = function (server) {
    var tmp = TSEAuth$getCachedLoginAsync$slambda_0(this, server, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEAuth).bc = function () {
    return this.accessKey;
  };
  protoOf(TSEAuth).cc = function () {
    return this.roleId;
  };
  protoOf(TSEAuth).zo = function () {
    return this.secretId;
  };
  protoOf(TSEAuth).i6v = function () {
    return this.userpassPath;
  };
  protoOf(TSEAuth).p7f = function () {
    return this.username;
  };
  protoOf(TSEAuth).h80 = function () {
    return this.password;
  };
  protoOf(TSEAuth).r8o = function (accessKey, roleId, secretId, userpassPath, username, password) {
    return new TSEAuth(accessKey, roleId, secretId, userpassPath, username, password);
  };
  protoOf(TSEAuth).copy = function (accessKey, roleId, secretId, userpassPath, username, password, $super) {
    accessKey = accessKey === VOID ? this.accessKey : accessKey;
    roleId = roleId === VOID ? this.roleId : roleId;
    secretId = secretId === VOID ? this.secretId : secretId;
    userpassPath = userpassPath === VOID ? this.userpassPath : userpassPath;
    username = username === VOID ? this.username : username;
    password = password === VOID ? this.password : password;
    return $super === VOID ? this.r8o(accessKey, roleId, secretId, userpassPath, username, password) : $super.r8o.call(this, accessKey, roleId, secretId, userpassPath, username, password);
  };
  protoOf(TSEAuth).toString = function () {
    return 'TSEAuth(accessKey=' + this.accessKey + ', roleId=' + this.roleId + ', secretId=' + this.secretId + ', userpassPath=' + this.userpassPath + ', username=' + this.username + ', password=' + this.password + ')';
  };
  protoOf(TSEAuth).hashCode = function () {
    var result = this.accessKey == null ? 0 : getStringHashCode(this.accessKey);
    result = imul(result, 31) + (this.roleId == null ? 0 : getStringHashCode(this.roleId)) | 0;
    result = imul(result, 31) + (this.secretId == null ? 0 : getStringHashCode(this.secretId)) | 0;
    result = imul(result, 31) + getStringHashCode(this.userpassPath) | 0;
    result = imul(result, 31) + (this.username == null ? 0 : getStringHashCode(this.username)) | 0;
    result = imul(result, 31) + (this.password == null ? 0 : getStringHashCode(this.password)) | 0;
    return result;
  };
  protoOf(TSEAuth).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TSEAuth))
      return false;
    var tmp0_other_with_cast = other instanceof TSEAuth ? other : THROW_CCE();
    if (!(this.accessKey == tmp0_other_with_cast.accessKey))
      return false;
    if (!(this.roleId == tmp0_other_with_cast.roleId))
      return false;
    if (!(this.secretId == tmp0_other_with_cast.secretId))
      return false;
    if (!(this.userpassPath === tmp0_other_with_cast.userpassPath))
      return false;
    if (!(this.username == tmp0_other_with_cast.username))
      return false;
    if (!(this.password == tmp0_other_with_cast.password))
      return false;
    return true;
  };
  function get_logger_0() {
    _init_properties_TSEKey_kt__azqfs7();
    return logger_0;
  }
  var logger_0;
  function keyTypeToTseKeyMapping($this, type) {
    var tmp;
    switch (type.r2_1) {
      case 0:
        tmp = 'ed25519';
        break;
      case 2:
        tmp = 'ecdsa-p256';
        break;
      case 3:
        tmp = 'rsa-2048';
        break;
      case 1:
        throw new KeyTypeNotSupportedException(type.q2_1);
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function tseKeyToKeyTypeMapping($this, type) {
    var tmp;
    switch (type) {
      case 'ed25519':
        tmp = KeyType_Ed25519_getInstance();
        break;
      case 'ecdsa-p256':
        tmp = KeyType_secp256r1_getInstance();
        break;
      case 'rsa-2048':
        tmp = KeyType_RSA_getInstance();
        break;
      default:
        throw new KeyTypeNotSupportedException(type);
    }
    return tmp;
  }
  function TSEKey$Companion$$childSerializers$_anonymous__inmzqp() {
    return Companion_getInstance_13().s4p();
  }
  function TSEKey$Companion$tseJsonDataBody$lambda($this_tseJsonDataBody) {
    return function () {
      return 'TSE server (URL: ' + get_request($this_tseJsonDataBody).t3j().toString() + ') returned invalid response: ';
    };
  }
  function TSEKey$Companion$generate$lambda($type) {
    return function () {
      return 'Generating TSE key (' + $type.toString() + ')';
    };
  }
  function TSEKey$Companion$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.o3i(tmp, TSEKey$Companion$http$lambda$lambda);
    defaultRequest($this$HttpClient, TSEKey$Companion$http$lambda$lambda_0);
    var tmp_0 = get_Logging();
    $this$HttpClient.o3i(tmp_0, TSEKey$Companion$http$lambda$lambda_1);
    return Unit_instance;
  }
  function TSEKey$Companion$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function TSEKey$Companion$http$lambda$lambda_0($this$defaultRequest) {
    header($this$defaultRequest, HttpHeaders_getInstance().p2v_1, Application_getInstance().x2s_1);
    return Unit_instance;
  }
  function TSEKey$Companion$http$lambda$lambda_1($this$install) {
    $this$install.r5b(get_DEFAULT(Companion_instance_2));
    $this$install.q5b_1 = LogLevel_ALL_getInstance();
    return Unit_instance;
  }
  function TSEKey$Companion$tseJsonDataBodyAsync$slambda($this_tseJsonDataBodyAsync, resultContinuation) {
    this.a8p_1 = $this_tseJsonDataBodyAsync;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$Companion$tseJsonDataBodyAsync$slambda).m6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$Companion$tseJsonDataBodyAsync$slambda).yb = function ($completion) {
    return this.m6k($completion);
  };
  protoOf(TSEKey$Companion$tseJsonDataBodyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = Companion_getInstance_26().b8p(this.a8p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$Companion$tseJsonDataBodyAsync$slambda).ha = function (completion) {
    return new TSEKey$Companion$tseJsonDataBodyAsync$slambda(this.a8p_1, completion);
  };
  function TSEKey$Companion$tseJsonDataBodyAsync$slambda_0($this_tseJsonDataBodyAsync, resultContinuation) {
    var i = new TSEKey$Companion$tseJsonDataBodyAsync$slambda($this_tseJsonDataBodyAsync, resultContinuation);
    var l = function ($completion) {
      return i.m6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$Companion$generateAsync$slambda($type, $metadata, resultContinuation) {
    this.k8p_1 = $type;
    this.l8p_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$Companion$generateAsync$slambda).m8p = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$Companion$generateAsync$slambda).yb = function ($completion) {
    return this.m8p($completion);
  };
  protoOf(TSEKey$Companion$generateAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = Companion_getInstance_26().y6n(this.k8p_1, this.l8p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$Companion$generateAsync$slambda).ha = function (completion) {
    return new TSEKey$Companion$generateAsync$slambda(this.k8p_1, this.l8p_1, completion);
  };
  function TSEKey$Companion$generateAsync$slambda_0($type, $metadata, resultContinuation) {
    var i = new TSEKey$Companion$generateAsync$slambda($type, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.m8p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $tseJsonDataBodyCOROUTINE$67(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v8p_1 = _this__u8e3s4;
    this.w8p_1 = _this__u8e3s4_0;
  }
  protoOf($tseJsonDataBodyCOROUTINE$67).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 8;
            var tmp_0 = this;
            tmp_0.x8p_1 = TSEKey$Companion$tseJsonDataBody$lambda(this.w8p_1);
            if (!isSuccess(this.w8p_1.o34()))
              throw RuntimeException_init_$Create$(this.x8p_1() + ('non-success status: ' + this.w8p_1.o34().toString()));
            var tmp_1 = this;
            tmp_1.y8p_1 = this.w8p_1;
            this.z8p_1 = this.y8p_1;
            this.m9_1 = 2;
            var tmp_2 = this;
            tmp_2.b8q_1 = Companion_instance_1;
            var tmp_3 = this;
            tmp_3.c8q_1 = this.z8p_1;
            this.d8q_1 = this.c8q_1;
            var tmp_4 = this;
            tmp_4.e8q_1 = this.d8q_1;
            this.f8q_1 = this.e8q_1;
            this.l9_1 = 1;
            var tmp_5 = this.f8q_1.p3k();
            var tmp_6 = getKClass(JsonObject);
            var tmp_7;
            try {
              tmp_7 = createKType(getKClass(JsonObject), arrayOf([]), false);
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

            suspendResult = tmp_5.s3j(new TypeInfo(tmp_6, tmp_7), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_9 = this;
            tmp_9.g8q_1 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp_10 = this;
            this.b8q_1;
            var value = this.g8q_1;
            tmp_10.a8q_1 = _Result___init__impl__xyqfz8(value);
            this.m9_1 = 8;
            this.l9_1 = 3;
            continue $sm;
          case 2:
            this.m9_1 = 8;
            var tmp_11 = this.o9_1;
            if (tmp_11 instanceof Error) {
              this.h8q_1 = this.o9_1;
              var tmp_12 = this;
              var exception = this.h8q_1;
              tmp_12.a8q_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.l9_1 = 3;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 3:
            this.m9_1 = 8;
            this.i8q_1 = this.a8q_1;
            this.j8q_1 = this.i8q_1;
            this.k8q_1 = Result__exceptionOrNull_impl_p6xea9(this.j8q_1);
            if (this.k8q_1 == null) {
              var tmp_13 = this;
              var tmp_14 = _Result___get_value__impl__bjfvqg(this.j8q_1);
              tmp_13.l8q_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
              this.l9_1 = 5;
              continue $sm;
            } else {
              var tmp_15 = this;
              tmp_15.m8q_1 = this.k8q_1;
              this.n8q_1 = this.m8q_1;
              this.l9_1 = 4;
              suspendResult = bodyAsText(this.w8p_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            this.o8q_1 = suspendResult;
            var tmp_16 = this;
            throw IllegalArgumentException_init_$Create$(this.x8p_1() + (this.o8q_1 === '' ? 'empty response (instead of JSON data)' : 'invalid response: ' + this.o8q_1));
          case 5:
            this.p8q_1 = this.l8q_1;
            this.q8q_1 = this.p8q_1.we('data');
            this.r8q_1 = this.q8q_1 == null ? null : get_jsonObject(this.q8q_1);
            if (this.r8q_1 == null) {
              this.t8q_1 = this.x8p_1();
              this.l9_1 = 6;
              suspendResult = bodyAsText(this.w8p_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.s8q_1 = this.r8q_1;
              this.l9_1 = 7;
              continue $sm;
            }

          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = 'no data in response: ' + ARGUMENT;
            var ARGUMENT_1 = this.t8q_1 + ARGUMENT_0;
            var tmp_17 = this;
            throw IllegalArgumentException_init_$Create$(ARGUMENT_1);
          case 7:
            return this.s8q_1;
          case 8:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 8) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($tseJsonDataBodyCOROUTINE$67)['<set-state>'] = protoOf($tseJsonDataBodyCOROUTINE$67).s9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-state>'] = protoOf($tseJsonDataBodyCOROUTINE$67).t9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<set-exceptionState>'] = protoOf($tseJsonDataBodyCOROUTINE$67).u9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-exceptionState>'] = protoOf($tseJsonDataBodyCOROUTINE$67).v9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<set-result>'] = protoOf($tseJsonDataBodyCOROUTINE$67).w9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-result>'] = protoOf($tseJsonDataBodyCOROUTINE$67).x9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<set-exception>'] = protoOf($tseJsonDataBodyCOROUTINE$67).y9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-exception>'] = protoOf($tseJsonDataBodyCOROUTINE$67).z9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<set-finallyPath>'] = protoOf($tseJsonDataBodyCOROUTINE$67).aa;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-finallyPath>'] = protoOf($tseJsonDataBodyCOROUTINE$67).ba;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-context>'] = protoOf($tseJsonDataBodyCOROUTINE$67).r9;
  function $generateCOROUTINE$68(_this__u8e3s4, type, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c8r_1 = _this__u8e3s4;
    this.d8r_1 = type;
    this.e8r_1 = metadata;
  }
  protoOf($generateCOROUTINE$68).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 5;
            var tmp_0 = get_logger_0();
            tmp_0.m6b(TSEKey$Companion$generate$lambda(this.d8r_1));
            var tmp_1 = this;
            tmp_1.f8r_1 = this.c8r_1.x6n_1;
            var tmp_2 = this;
            var tmp0_elvis_lhs = this.e8r_1.id;
            tmp_2.g8r_1 = this.e8r_1.server + '/keys/k' + toString_0(tmp0_elvis_lhs == null ? Default_getInstance_0().bi() : tmp0_elvis_lhs);
            this.h8r_1 = this.f8r_1;
            this.i8r_1 = this.g8r_1;
            var tmp_3 = this;
            tmp_3.j8r_1 = this.h8r_1;
            this.k8r_1 = this.j8r_1;
            var tmp_4 = this;
            tmp_4.l8r_1 = this.k8r_1;
            var tmp_5 = this;
            tmp_5.m8r_1 = new HttpRequestBuilder();
            this.n8r_1 = this.m8r_1;
            var tmp_6 = this;
            tmp_6.o8r_1 = this.n8r_1;
            this.p8r_1 = this.o8r_1;
            url(this.p8r_1, this.i8r_1);
            var tmp_7 = this;
            tmp_7.q8r_1 = this.p8r_1;
            this.r8r_1 = this.q8r_1;
            this.l9_1 = 1;
            suspendResult = this.e8r_1.auth.y8n(this.e8r_1.server, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s8r_1 = suspendResult;
            header(this.r8r_1, 'X-Vault-Token', this.s8r_1);
            if (this.e8r_1.namespace == null)
              null;
            else {
              header(this.r8r_1, 'X-Vault-Namespace', this.e8r_1.namespace);
            }

            var tmp2 = this.r8r_1;
            var body = mapOf_0(to('type', keyTypeToTseKeyMapping(Companion_getInstance_26(), this.d8r_1)));
            if (body == null) {
              tmp2.k3h_1 = NullBody_instance;
              var tmp_8 = getKClass(KtMap);
              var tmp_9;
              try {
                tmp_9 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false))]), false);
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
              tmp2.d3n(new TypeInfo(tmp_8, tmp_9));
            } else {
              if (body instanceof OutgoingContent) {
                tmp2.k3h_1 = body;
                tmp2.d3n(null);
              } else {
                tmp2.k3h_1 = body;
                var tmp_11 = getKClass(KtMap);
                var tmp_12;
                try {
                  tmp_12 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false))]), false);
                } catch ($p) {
                  var tmp_13;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3_0 = $p;
                    tmp_13 = null;
                  } else {
                    throw $p;
                  }
                  tmp_12 = tmp_13;
                }
                tmp2.d3n(new TypeInfo(tmp_11, tmp_12));
              }
            }

            this.t8r_1 = this.n8r_1;
            this.u8r_1 = this.l8r_1;
            this.v8r_1 = this.t8r_1;
            this.v8r_1.i3h_1 = Companion_getInstance_0().c2z_1;
            var tmp_14 = this;
            tmp_14.w8r_1 = this.u8r_1;
            var tmp_15 = this;
            tmp_15.x8r_1 = this.v8r_1;
            this.y8r_1 = this.w8r_1;
            this.z8r_1 = this.x8r_1;
            this.l9_1 = 2;
            suspendResult = (new HttpStatement(this.z8r_1, this.y8r_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.a8s_1 = suspendResult;
            this.l9_1 = 3;
            suspendResult = this.c8r_1.b8p(this.a8s_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.b8s_1 = suspendResult;
            var tmp_16 = this;
            var tmp1_safe_receiver = this.b8s_1.we('name');
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonPrimitive(tmp1_safe_receiver);
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.v4p();
            var tmp_17;
            if (tmp3_elvis_lhs == null) {
              throw new MissingKeyNameException();
            } else {
              tmp_17 = tmp3_elvis_lhs;
            }

            tmp_16.c8s_1 = tmp_17;
            var tmp_18 = this;
            var tmp4_elvis_lhs = this.b8s_1.we('keys');
            var tmp_19;
            if (tmp4_elvis_lhs == null) {
              throw new MissingKeyDataException();
            } else {
              tmp_19 = tmp4_elvis_lhs;
            }

            tmp_18.d8s_1 = decodeBase64Bytes(get_jsonPrimitive(ensureNotNull(get_jsonObject(ensureNotNull(get_jsonObject(tmp_19).we('1'))).we('public_key'))).v4p());
            var tmp_20 = this;
            tmp_20.e8s_1 = new TSEKey(this.e8r_1.server, this.e8r_1.auth, VOID, this.e8r_1.namespace, this.c8s_1, this.d8s_1, this.d8r_1);
            this.f8s_1 = this.e8s_1;
            var tmp_21 = this;
            tmp_21.g8s_1 = this.f8s_1;
            this.h8s_1 = this.g8s_1;
            this.l9_1 = 4;
            suspendResult = this.h8s_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return this.f8s_1;
          case 5:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 5) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($generateCOROUTINE$68)['<set-state>'] = protoOf($generateCOROUTINE$68).s9;
  protoOf($generateCOROUTINE$68)['<get-state>'] = protoOf($generateCOROUTINE$68).t9;
  protoOf($generateCOROUTINE$68)['<set-exceptionState>'] = protoOf($generateCOROUTINE$68).u9;
  protoOf($generateCOROUTINE$68)['<get-exceptionState>'] = protoOf($generateCOROUTINE$68).v9;
  protoOf($generateCOROUTINE$68)['<set-result>'] = protoOf($generateCOROUTINE$68).w9;
  protoOf($generateCOROUTINE$68)['<get-result>'] = protoOf($generateCOROUTINE$68).x9;
  protoOf($generateCOROUTINE$68)['<set-exception>'] = protoOf($generateCOROUTINE$68).y9;
  protoOf($generateCOROUTINE$68)['<get-exception>'] = protoOf($generateCOROUTINE$68).z9;
  protoOf($generateCOROUTINE$68)['<set-finallyPath>'] = protoOf($generateCOROUTINE$68).aa;
  protoOf($generateCOROUTINE$68)['<get-finallyPath>'] = protoOf($generateCOROUTINE$68).ba;
  protoOf($generateCOROUTINE$68)['<get-context>'] = protoOf($generateCOROUTINE$68).r9;
  function httpRequest($this, method, url, body, $completion) {
    var tmp = new $httpRequestCOROUTINE$53($this, method, url, body, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function httpRequest$default($this, method, url, body, $completion, $super) {
    method = method === VOID ? Companion_getInstance_0().b2z_1 : method;
    url = url === VOID ? 'keys/' + $this.id : url;
    body = body === VOID ? null : body;
    return httpRequest($this, method, url, body, $completion);
  }
  function getBackingPublicKey($this, $completion) {
    var tmp = new $getBackingPublicKeyCOROUTINE$55($this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function throwTSEError($this, msg) {
    throw RuntimeException_init_$Create$('Invalid TSE server (' + $this.server + ') response: ' + msg);
  }
  function retrievePublicKey_0($this, $completion) {
    var tmp = new $retrievePublicKeyCOROUTINE$56($this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function retrieveKeyType($this, $completion) {
    var tmp = new $retrieveKeyTypeCOROUTINE$57($this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function Companion_21() {
    Companion_instance_26 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.w6n_1 = [null, null, null, null, null, null, lazy(tmp_0, TSEKey$Companion$$childSerializers$_anonymous__inmzqp)];
    var tmp_1 = this;
    tmp_1.x6n_1 = HttpClient(TSEKey$Companion$http$lambda);
  }
  protoOf(Companion_21).b8p = function (_this__u8e3s4, $completion) {
    var tmp = new $tseJsonDataBodyCOROUTINE$67(this, _this__u8e3s4, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Companion_21).y6n = function (type, metadata, $completion) {
    var tmp = new $generateCOROUTINE$68(this, type, metadata, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(Companion_21).t8u = function (_this__u8e3s4) {
    var tmp = TSEKey$Companion$tseJsonDataBodyAsync$slambda_0(_this__u8e3s4, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_21).u8u = function (type, metadata) {
    var tmp = TSEKey$Companion$generateAsync$slambda_0(type, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_21).s4p = function () {
    return $serializer_getInstance_17();
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    if (Companion_instance_26 == null)
      new Companion_21();
    return Companion_instance_26;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('tse', this, 7);
    tmp0_serialDesc.v28('server', false);
    tmp0_serialDesc.v28('auth', true);
    tmp0_serialDesc.v28('accessKey', true);
    tmp0_serialDesc.v28('namespace', true);
    tmp0_serialDesc.v28('id', false);
    tmp0_serialDesc.v28('_publicKey', true);
    tmp0_serialDesc.v28('_keyType', true);
    tmp0_serialDesc.w28(new JsonClassDiscriminator('type'));
    this.v8u_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).w8u = function (encoder, value) {
    var tmp0_desc = this.v8u_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_26().w6n_1;
    tmp1_output.w22(tmp0_desc, 0, value.server);
    if (tmp1_output.e23(tmp0_desc, 1) ? true : !(value.i8s_1 == null)) {
      tmp1_output.a23(tmp0_desc, 1, $serializer_getInstance_16(), value.i8s_1);
    }
    if (tmp1_output.e23(tmp0_desc, 2) ? true : !(value.j8s_1 == null)) {
      tmp1_output.a23(tmp0_desc, 2, StringSerializer_getInstance(), value.j8s_1);
    }
    if (tmp1_output.e23(tmp0_desc, 3) ? true : !(value.k8s_1 == null)) {
      tmp1_output.a23(tmp0_desc, 3, StringSerializer_getInstance(), value.k8s_1);
    }
    tmp1_output.w22(tmp0_desc, 4, value.id);
    if (tmp1_output.e23(tmp0_desc, 5) ? true : !(value.l8s_1 == null)) {
      tmp1_output.a23(tmp0_desc, 5, ByteArraySerializer_getInstance(), value.l8s_1);
    }
    if (tmp1_output.e23(tmp0_desc, 6) ? true : !(value.m8s_1 == null)) {
      tmp1_output.a23(tmp0_desc, 6, tmp2_cached[6].z(), value.m8s_1);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_17).v1x = function (encoder, value) {
    return this.w8u(encoder, value instanceof TSEKey ? value : THROW_CCE());
  };
  protoOf($serializer_17).w1x = function (decoder) {
    var tmp0_desc = this.v8u_1;
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
    var tmp12_input = decoder.h21(tmp0_desc);
    var tmp13_cached = Companion_getInstance_26().w6n_1;
    if (tmp12_input.x21()) {
      tmp4_local0 = tmp12_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.v21(tmp0_desc, 1, $serializer_getInstance_16(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.v21(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.r21(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.v21(tmp0_desc, 5, ByteArraySerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.v21(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.v21(tmp0_desc, 1, $serializer_getInstance_16(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.v21(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.r21(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.v21(tmp0_desc, 5, ByteArraySerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.v21(tmp0_desc, 6, tmp13_cached[6].z(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.i21(tmp0_desc);
    return TSEKey_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_17).u1x = function () {
    return this.v8u_1;
  };
  protoOf($serializer_17).l29 = function () {
    var tmp0_cached = Companion_getInstance_26().w6n_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable($serializer_getInstance_16()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(ByteArraySerializer_getInstance()), get_nullable(tmp0_cached[6].z())];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function TSEKey_init_$Init$(seen0, server, auth, accessKey, namespace, id, _publicKey, _keyType, serializationConstructorMarker, $this) {
    if (!(17 === (17 & seen0))) {
      throwMissingFieldException(seen0, 17, $serializer_getInstance_17().v8u_1);
    }
    Key_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.server = server;
    if (0 === (seen0 & 2))
      $this.i8s_1 = null;
    else
      $this.i8s_1 = auth;
    if (0 === (seen0 & 4))
      $this.j8s_1 = null;
    else
      $this.j8s_1 = accessKey;
    if (0 === (seen0 & 8))
      $this.k8s_1 = null;
    else
      $this.k8s_1 = namespace;
    $this.id = id;
    if (0 === (seen0 & 32))
      $this.l8s_1 = null;
    else
      $this.l8s_1 = _publicKey;
    if (0 === (seen0 & 64))
      $this.m8s_1 = null;
    else
      $this.m8s_1 = _keyType;
    var tmp = $this;
    var tmp0_elvis_lhs = $this.i8s_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp1_elvis_lhs = $this.j8s_1;
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$('Either auth or accessKey must be provided');
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      tmp_0 = new TSEAuth(tmp_1);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.n8s_1 = tmp_0;
    return $this;
  }
  function TSEKey_init_$Create$(seen0, server, auth, accessKey, namespace, id, _publicKey, _keyType, serializationConstructorMarker) {
    return TSEKey_init_$Init$(seen0, server, auth, accessKey, namespace, id, _publicKey, _keyType, serializationConstructorMarker, objectCreate(protoOf(TSEKey)));
  }
  function TSEKey$retrievePublicKey$lambda(this$0) {
    return function () {
      return 'Retrieving public key: ' + this$0.id;
    };
  }
  function TSEKey$retrievePublicKey$lambda_0($keyStr) {
    return function () {
      return 'Public key PEM-encoded string is: ' + $keyStr;
    };
  }
  function TSEKey$retrievePublicKey$lambda_1(it) {
    return startsWith(it, '-----');
  }
  function TSEKey$retrievePublicKey$lambda_2($base64PublicKey) {
    return function () {
      return 'Base64 public key is: ' + $base64PublicKey;
    };
  }
  function TSEKey$getPublicKey$lambda(this$0) {
    return function () {
      return 'Getting public key: ' + this$0.keyType.toString();
    };
  }
  function TSEKey$deleteKeyAsync$slambda(this$0, resultContinuation) {
    this.f8v_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$deleteKeyAsync$slambda).m6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$deleteKeyAsync$slambda).yb = function ($completion) {
    return this.m6f($completion);
  };
  protoOf(TSEKey$deleteKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.f8v_1.n6f(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$deleteKeyAsync$slambda).ha = function (completion) {
    return new TSEKey$deleteKeyAsync$slambda(this.f8v_1, completion);
  };
  function TSEKey$deleteKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$deleteKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.o8v_1 = this$0;
    this.p8v_1 = $plaintext;
    this.q8v_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$signJwsAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$signJwsAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(TSEKey$signJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.o8v_1.a6g(this.p8v_1, this.q8v_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$signJwsAsync$slambda).ha = function (completion) {
    return new TSEKey$signJwsAsync$slambda(this.o8v_1, this.p8v_1, this.q8v_1, completion);
  };
  function TSEKey$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new TSEKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$signRawAsync$slambda(this$0, $plaintext, resultContinuation) {
    this.z8v_1 = this$0;
    this.a8w_1 = $plaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$signRawAsync$slambda).l6g = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$signRawAsync$slambda).yb = function ($completion) {
    return this.l6g($completion);
  };
  protoOf(TSEKey$signRawAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.z8v_1.m6g(this.a8w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$signRawAsync$slambda).ha = function (completion) {
    return new TSEKey$signRawAsync$slambda(this.z8v_1, this.a8w_1, completion);
  };
  function TSEKey$signRawAsync$slambda_0(this$0, $plaintext, resultContinuation) {
    var i = new TSEKey$signRawAsync$slambda(this$0, $plaintext, resultContinuation);
    var l = function ($completion) {
      return i.l6g($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.j8w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getKeyIdAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$getKeyIdAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(TSEKey$getKeyIdAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.j8w_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$getKeyIdAsync$slambda).ha = function (completion) {
    return new TSEKey$getKeyIdAsync$slambda(this.j8w_1, completion);
  };
  function TSEKey$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$initAsync$slambda(this$0, resultContinuation) {
    this.s8w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$initAsync$slambda).s1u = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$initAsync$slambda).yb = function ($completion) {
    return this.s1u($completion);
  };
  protoOf(TSEKey$initAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.s8w_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$initAsync$slambda).ha = function (completion) {
    return new TSEKey$initAsync$slambda(this.s8w_1, completion);
  };
  function TSEKey$initAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$initAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.b8x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getPublicKeyAsync$slambda).q6h = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$getPublicKeyAsync$slambda).yb = function ($completion) {
    return this.q6h($completion);
  };
  protoOf(TSEKey$getPublicKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.b8x_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$getPublicKeyAsync$slambda).ha = function (completion) {
    return new TSEKey$getPublicKeyAsync$slambda(this.b8x_1, completion);
  };
  function TSEKey$getPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.q6h($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getMetaAsync$slambda(this$0, resultContinuation) {
    this.k8x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getMetaAsync$slambda).l8x = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$getMetaAsync$slambda).yb = function ($completion) {
    return this.l8x($completion);
  };
  protoOf(TSEKey$getMetaAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.k8x_1.m8x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$getMetaAsync$slambda).ha = function (completion) {
    return new TSEKey$getMetaAsync$slambda(this.k8x_1, completion);
  };
  function TSEKey$getMetaAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getMetaAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.l8x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.v8x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$exportPEMAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$exportPEMAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(TSEKey$exportPEMAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.v8x_1.m6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$exportPEMAsync$slambda).ha = function (completion) {
    return new TSEKey$exportPEMAsync$slambda(this.v8x_1, completion);
  };
  function TSEKey$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.e8y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$exportJWKAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$exportJWKAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(TSEKey$exportJWKAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.e8y_1.c6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$exportJWKAsync$slambda).ha = function (completion) {
    return new TSEKey$exportJWKAsync$slambda(this.e8y_1, completion);
  };
  function TSEKey$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.n8y_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$exportJWKObjectAsync$slambda).m6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$exportJWKObjectAsync$slambda).yb = function ($completion) {
    return this.m6k($completion);
  };
  protoOf(TSEKey$exportJWKObjectAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.n8y_1.n6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$exportJWKObjectAsync$slambda).ha = function (completion) {
    return new TSEKey$exportJWKObjectAsync$slambda(this.n8y_1, completion);
  };
  function TSEKey$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.w8y_1 = this$0;
    this.x8y_1 = $signed;
    this.y8y_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$verifyRawAsync$slambda).z6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(TSEKey$verifyRawAsync$slambda).yb = function ($completion) {
    return this.z6k($completion);
  };
  protoOf(TSEKey$verifyRawAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.w8y_1.a6l(this.x8y_1, this.y8y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$verifyRawAsync$slambda).ha = function (completion) {
    return new TSEKey$verifyRawAsync$slambda(this.w8y_1, this.x8y_1, this.y8y_1, completion);
  };
  function TSEKey$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new TSEKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.z6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getEncodedPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.h8z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getEncodedPublicKeyAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$getEncodedPublicKeyAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(TSEKey$getEncodedPublicKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.h8z_1.i8z(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$getEncodedPublicKeyAsync$slambda).ha = function (completion) {
    return new TSEKey$getEncodedPublicKeyAsync$slambda(this.h8z_1, completion);
  };
  function TSEKey$getEncodedPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getEncodedPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.r8z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getThumbprintAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$getThumbprintAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(TSEKey$getThumbprintAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.r8z_1.w6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$getThumbprintAsync$slambda).ha = function (completion) {
    return new TSEKey$getThumbprintAsync$slambda(this.r8z_1, completion);
  };
  function TSEKey$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.a90_1 = this$0;
    this.b90_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$verifyJwsAsync$slambda).r6j = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(TSEKey$verifyJwsAsync$slambda).yb = function ($completion) {
    return this.r6j($completion);
  };
  protoOf(TSEKey$verifyJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.a90_1.s6j(this.b90_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$verifyJwsAsync$slambda).ha = function (completion) {
    return new TSEKey$verifyJwsAsync$slambda(this.a90_1, this.b90_1, completion);
  };
  function TSEKey$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new TSEKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.r6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.k90_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getPublicKeyRepresentationAsync$slambda).k6l = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$getPublicKeyRepresentationAsync$slambda).yb = function ($completion) {
    return this.k6l($completion);
  };
  protoOf(TSEKey$getPublicKeyRepresentationAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.k90_1.l6l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$getPublicKeyRepresentationAsync$slambda).ha = function (completion) {
    return new TSEKey$getPublicKeyRepresentationAsync$slambda(this.k90_1, completion);
  };
  function TSEKey$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.k6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$deleteAsync$slambda(this$0, resultContinuation) {
    this.t90_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$deleteAsync$slambda).s1u = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey$deleteAsync$slambda).yb = function ($completion) {
    return this.s1u($completion);
  };
  protoOf(TSEKey$deleteAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.t90_1.u90(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKey$deleteAsync$slambda).ha = function (completion) {
    return new TSEKey$deleteAsync$slambda(this.t90_1, completion);
  };
  function TSEKey$deleteAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$deleteAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $httpRequestCOROUTINE$53(_this__u8e3s4, method, url, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w8s_1 = _this__u8e3s4;
    this.x8s_1 = method;
    this.y8s_1 = url;
    this.z8s_1 = body;
  }
  protoOf($httpRequestCOROUTINE$53).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            tmp_0.a8t_1 = Companion_getInstance_26().x6n_1;
            this.b8t_1 = this.a8t_1;
            var tmp_1 = this;
            tmp_1.c8t_1 = this.b8t_1;
            var tmp_2 = this;
            tmp_2.d8t_1 = new HttpRequestBuilder();
            this.e8t_1 = this.d8t_1;
            var tmp_3 = this;
            tmp_3.f8t_1 = this.e8t_1;
            this.g8t_1 = this.f8t_1;
            url(this.g8t_1, this.w8s_1.server + '/' + this.y8s_1);
            this.g8t_1.i3h_1 = this.x8s_1;
            this.l9_1 = 1;
            suspendResult = this.w8s_1.n8s_1.y8n(this.w8s_1.server, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h8t_1 = suspendResult;
            header(this.g8t_1, 'X-Vault-Token', this.h8t_1);
            if (this.w8s_1.k8s_1 == null)
              null;
            else {
              header(this.g8t_1, 'X-Vault-Namespace', this.w8s_1.k8s_1);
            }

            if (this.z8s_1 == null)
              null;
            else {
              var tmp0 = this.g8t_1;
              var body = this.z8s_1;
              if (body == null) {
                tmp0.k3h_1 = NullBody_instance;
                var tmp_4 = PrimitiveClasses_getInstance().bd();
                var tmp_5;
                try {
                  tmp_5 = createKType(PrimitiveClasses_getInstance().bd(), arrayOf([]), false);
                } catch ($p) {
                  var tmp_6;
                  if ($p instanceof Error) {
                    var _unused_var__etf5q3 = $p;
                    tmp_6 = null;
                  } else {
                    throw $p;
                  }
                  tmp_5 = tmp_6;
                }
                tmp0.d3n(new TypeInfo(tmp_4, tmp_5));
              } else {
                if (body instanceof OutgoingContent) {
                  tmp0.k3h_1 = body;
                  tmp0.d3n(null);
                } else {
                  tmp0.k3h_1 = body;
                  var tmp_7 = PrimitiveClasses_getInstance().bd();
                  var tmp_8;
                  try {
                    tmp_8 = createKType(PrimitiveClasses_getInstance().bd(), arrayOf([]), false);
                  } catch ($p) {
                    var tmp_9;
                    if ($p instanceof Error) {
                      var _unused_var__etf5q3_0 = $p;
                      tmp_9 = null;
                    } else {
                      throw $p;
                    }
                    tmp_8 = tmp_9;
                  }
                  tmp0.d3n(new TypeInfo(tmp_7, tmp_8));
                }
              }
            }

            this.i8t_1 = this.e8t_1;
            this.j8t_1 = this.c8t_1;
            this.k8t_1 = this.i8t_1;
            this.l9_1 = 2;
            suspendResult = (new HttpStatement(this.k8t_1, this.j8t_1)).a4h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $initCOROUTINE$54(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d91_1 = _this__u8e3s4;
  }
  protoOf($initCOROUTINE$54).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            if (this.d91_1.m8s_1 == null) {
              this.l9_1 = 1;
              suspendResult = retrieveKeyType(this.d91_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 2;
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            this.d91_1.m8s_1 = ARGUMENT;
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($initCOROUTINE$54)['<set-state>'] = protoOf($initCOROUTINE$54).s9;
  protoOf($initCOROUTINE$54)['<get-state>'] = protoOf($initCOROUTINE$54).t9;
  protoOf($initCOROUTINE$54)['<set-exceptionState>'] = protoOf($initCOROUTINE$54).u9;
  protoOf($initCOROUTINE$54)['<get-exceptionState>'] = protoOf($initCOROUTINE$54).v9;
  protoOf($initCOROUTINE$54)['<set-result>'] = protoOf($initCOROUTINE$54).w9;
  protoOf($initCOROUTINE$54)['<get-result>'] = protoOf($initCOROUTINE$54).x9;
  protoOf($initCOROUTINE$54)['<set-exception>'] = protoOf($initCOROUTINE$54).y9;
  protoOf($initCOROUTINE$54)['<get-exception>'] = protoOf($initCOROUTINE$54).z9;
  protoOf($initCOROUTINE$54)['<set-finallyPath>'] = protoOf($initCOROUTINE$54).aa;
  protoOf($initCOROUTINE$54)['<get-finallyPath>'] = protoOf($initCOROUTINE$54).ba;
  protoOf($initCOROUTINE$54)['<get-context>'] = protoOf($initCOROUTINE$54).r9;
  function $getBackingPublicKeyCOROUTINE$55(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t8t_1 = _this__u8e3s4;
  }
  protoOf($getBackingPublicKeyCOROUTINE$55).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.u8t_1 = this.t8t_1.l8s_1;
            if (this.u8t_1 == null) {
              this.l9_1 = 1;
              suspendResult = retrievePublicKey_0(this.t8t_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v8t_1 = this.u8t_1;
              this.l9_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            var this_0 = suspendResult;
            this.t8t_1.l8s_1 = this_0;
            tmp_0.v8t_1 = this_0;
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return this.v8t_1;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $retrievePublicKeyCOROUTINE$56(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e8u_1 = _this__u8e3s4;
  }
  protoOf($retrievePublicKeyCOROUTINE$56).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = get_logger_0();
            tmp_0.m6b(TSEKey$retrievePublicKey$lambda(this.e8u_1));
            this.f8u_1 = Companion_getInstance_26();
            this.l9_1 = 1;
            suspendResult = httpRequest$default(this.e8u_1, Companion_getInstance_0().b2z_1, 'keys/' + this.e8u_1.id, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g8u_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.f8u_1.b8p(this.g8u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.we('keys');
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw new KeyNotFoundException(this.e8u_1.id);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            var keyData = tmp_1;
            var tmp2_safe_receiver = keyData.we('1');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonObject(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.we('public_key');
            var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : get_jsonPrimitive(tmp4_safe_receiver);
            var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.v4p();
            var tmp_2;
            if (tmp6_elvis_lhs == null) {
              throw new KeyNotFoundException(this.e8u_1.id);
            } else {
              tmp_2 = tmp6_elvis_lhs;
            }

            var keyStr = tmp_2;
            var tmp_3 = get_logger_0();
            tmp_3.m6b(TSEKey$retrievePublicKey$lambda_0(keyStr));
            var tmp_4 = lineSequence(keyStr);
            var tmp1 = joinToString_0(filterNot(tmp_4, TSEKey$retrievePublicKey$lambda_1), '');
            var base64PublicKey = Regex_init_$Create$('\\s').re(tmp1, '');
            var tmp_5 = get_logger_0();
            tmp_5.m6b(TSEKey$retrievePublicKey$lambda_2(base64PublicKey));
            return Default_getInstance_1().jk(base64PublicKey);
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $retrieveKeyTypeCOROUTINE$57(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p8u_1 = _this__u8e3s4;
  }
  protoOf($retrieveKeyTypeCOROUTINE$57).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.q8u_1 = Companion_getInstance_26();
            this.r8u_1 = Companion_getInstance_26();
            this.l9_1 = 1;
            suspendResult = httpRequest$default(this.p8u_1, VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s8u_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.r8u_1.b8p(this.s8u_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.we('type');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4p();
            var tmp_0;
            if (tmp2_elvis_lhs == null) {
              throwTSEError(this.p8u_1, 'No type in data response');
            } else {
              tmp_0 = tmp2_elvis_lhs;
            }

            var ARGUMENT_1 = tmp_0;
            return tseKeyToKeyTypeMapping(this.q8u_1, ARGUMENT_1);
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function $getKeyIdCOROUTINE$58(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m91_1 = _this__u8e3s4;
  }
  protoOf($getKeyIdCOROUTINE$58).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.m91_1.r6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n91_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.n91_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getKeyIdCOROUTINE$58)['<set-state>'] = protoOf($getKeyIdCOROUTINE$58).s9;
  protoOf($getKeyIdCOROUTINE$58)['<get-state>'] = protoOf($getKeyIdCOROUTINE$58).t9;
  protoOf($getKeyIdCOROUTINE$58)['<set-exceptionState>'] = protoOf($getKeyIdCOROUTINE$58).u9;
  protoOf($getKeyIdCOROUTINE$58)['<get-exceptionState>'] = protoOf($getKeyIdCOROUTINE$58).v9;
  protoOf($getKeyIdCOROUTINE$58)['<set-result>'] = protoOf($getKeyIdCOROUTINE$58).w9;
  protoOf($getKeyIdCOROUTINE$58)['<get-result>'] = protoOf($getKeyIdCOROUTINE$58).x9;
  protoOf($getKeyIdCOROUTINE$58)['<set-exception>'] = protoOf($getKeyIdCOROUTINE$58).y9;
  protoOf($getKeyIdCOROUTINE$58)['<get-exception>'] = protoOf($getKeyIdCOROUTINE$58).z9;
  protoOf($getKeyIdCOROUTINE$58)['<set-finallyPath>'] = protoOf($getKeyIdCOROUTINE$58).aa;
  protoOf($getKeyIdCOROUTINE$58)['<get-finallyPath>'] = protoOf($getKeyIdCOROUTINE$58).ba;
  protoOf($getKeyIdCOROUTINE$58)['<get-context>'] = protoOf($getKeyIdCOROUTINE$58).r9;
  function $signRawCOROUTINE$59(_this__u8e3s4, plaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w91_1 = _this__u8e3s4;
    this.x91_1 = plaintext;
  }
  protoOf($signRawCOROUTINE$59).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.y91_1 = mapOf_0(to('input', encodeBase64(this.x91_1)));
            this.z91_1 = Companion_getInstance_26();
            this.l9_1 = 1;
            suspendResult = httpRequest(this.w91_1, Companion_getInstance_0().c2z_1, 'sign/' + this.w91_1.id, this.y91_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a92_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.z91_1.b8p(this.a92_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.we('signature');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.v4p();
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : removePrefix(tmp2_safe_receiver, 'vault:v1:');
            var tmp_0;
            if (tmp3_elvis_lhs == null) {
              throw new MissingSignatureException('No signature returned from TSE server');
            } else {
              tmp_0 = tmp3_elvis_lhs;
            }

            var signatureBase64 = tmp_0;
            return Default_getInstance_1().jk(signatureBase64);
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($signRawCOROUTINE$59)['<set-state>'] = protoOf($signRawCOROUTINE$59).s9;
  protoOf($signRawCOROUTINE$59)['<get-state>'] = protoOf($signRawCOROUTINE$59).t9;
  protoOf($signRawCOROUTINE$59)['<set-exceptionState>'] = protoOf($signRawCOROUTINE$59).u9;
  protoOf($signRawCOROUTINE$59)['<get-exceptionState>'] = protoOf($signRawCOROUTINE$59).v9;
  protoOf($signRawCOROUTINE$59)['<set-result>'] = protoOf($signRawCOROUTINE$59).w9;
  protoOf($signRawCOROUTINE$59)['<get-result>'] = protoOf($signRawCOROUTINE$59).x9;
  protoOf($signRawCOROUTINE$59)['<set-exception>'] = protoOf($signRawCOROUTINE$59).y9;
  protoOf($signRawCOROUTINE$59)['<get-exception>'] = protoOf($signRawCOROUTINE$59).z9;
  protoOf($signRawCOROUTINE$59)['<set-finallyPath>'] = protoOf($signRawCOROUTINE$59).aa;
  protoOf($signRawCOROUTINE$59)['<get-finallyPath>'] = protoOf($signRawCOROUTINE$59).ba;
  protoOf($signRawCOROUTINE$59)['<get-context>'] = protoOf($signRawCOROUTINE$59).r9;
  function $signJwsCOROUTINE$60(_this__u8e3s4, plaintext, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j92_1 = _this__u8e3s4;
    this.k92_1 = plaintext;
    this.l92_1 = headers;
  }
  protoOf($signJwsCOROUTINE$60).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            var tmp_0 = this;
            var tmp_1 = Base64Utils_getInstance();
            var tmp2 = Default_getInstance();
            var this_0 = mutableMapOf([to('typ', JsonUtils_getInstance().toJsonElement('JWT')), to('alg', JsonUtils_getInstance().toJsonElement(JwsUtils_instance.jwsAlg(this.j92_1.keyType)))]);
            this_0.p2(this.l92_1);
            var this_1 = tmp2.w21();
            var this_2 = serializer(this_1, createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
            tmp_0.m92_1 = tmp_1.encodeToBase64Url(encodeToByteArray(tmp2.x1y(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), this_0)));
            this.n92_1 = Base64Utils_getInstance().encodeToBase64Url(this.k92_1);
            this.o92_1 = this.m92_1 + '.' + this.n92_1;
            this.p92_1 = Default_getInstance_1();
            this.l9_1 = 1;
            suspendResult = this.j92_1.m6g(encodeToByteArray(this.o92_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = isByteArray(suspendResult) ? suspendResult : THROW_CCE();
            var signatureBase64 = this.p92_1.fk(ARGUMENT);
            var signatureBase64Url = Base64Utils_getInstance().base64toBase64Url(signatureBase64);
            return this.o92_1 + '.' + signatureBase64Url;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($signJwsCOROUTINE$60)['<set-state>'] = protoOf($signJwsCOROUTINE$60).s9;
  protoOf($signJwsCOROUTINE$60)['<get-state>'] = protoOf($signJwsCOROUTINE$60).t9;
  protoOf($signJwsCOROUTINE$60)['<set-exceptionState>'] = protoOf($signJwsCOROUTINE$60).u9;
  protoOf($signJwsCOROUTINE$60)['<get-exceptionState>'] = protoOf($signJwsCOROUTINE$60).v9;
  protoOf($signJwsCOROUTINE$60)['<set-result>'] = protoOf($signJwsCOROUTINE$60).w9;
  protoOf($signJwsCOROUTINE$60)['<get-result>'] = protoOf($signJwsCOROUTINE$60).x9;
  protoOf($signJwsCOROUTINE$60)['<set-exception>'] = protoOf($signJwsCOROUTINE$60).y9;
  protoOf($signJwsCOROUTINE$60)['<get-exception>'] = protoOf($signJwsCOROUTINE$60).z9;
  protoOf($signJwsCOROUTINE$60)['<set-finallyPath>'] = protoOf($signJwsCOROUTINE$60).aa;
  protoOf($signJwsCOROUTINE$60)['<get-finallyPath>'] = protoOf($signJwsCOROUTINE$60).ba;
  protoOf($signJwsCOROUTINE$60)['<get-context>'] = protoOf($signJwsCOROUTINE$60).r9;
  function $verifyRawCOROUTINE$61(_this__u8e3s4, signed, detachedPlaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y92_1 = _this__u8e3s4;
    this.z92_1 = signed;
    this.a93_1 = detachedPlaintext;
  }
  protoOf($verifyRawCOROUTINE$61).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            if (!!(this.a93_1 == null)) {
              var message = 'An detached plaintext is needed.';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }

            this.b93_1 = mapOf([to('input', encodeBase64(this.a93_1)), to('signature', 'vault:v1:' + encodeBase64(this.z92_1))]);
            this.c93_1 = Companion_getInstance_26();
            this.l9_1 = 1;
            suspendResult = httpRequest(this.y92_1, Companion_getInstance_0().c2z_1, 'verify/' + this.y92_1.id, this.b93_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d93_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.c93_1.b8p(this.d93_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.we('valid');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : get_boolean(tmp1_safe_receiver);
            var tmp_0;
            if (tmp2_elvis_lhs == null) {
              throw new MissingSignatureException('No signature returned from TSE server');
            } else {
              tmp_0 = tmp2_elvis_lhs;
            }

            var valid = tmp_0;
            var tmp_1;
            if (valid) {
              var value = this.a93_1;
              tmp_1 = _Result___init__impl__xyqfz8(value);
            } else {
              var exception = new VerificationException('Signature verification failed');
              tmp_1 = _Result___init__impl__xyqfz8(createFailure(exception));
            }

            return new Result(tmp_1);
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($verifyRawCOROUTINE$61)['<set-state>'] = protoOf($verifyRawCOROUTINE$61).s9;
  protoOf($verifyRawCOROUTINE$61)['<get-state>'] = protoOf($verifyRawCOROUTINE$61).t9;
  protoOf($verifyRawCOROUTINE$61)['<set-exceptionState>'] = protoOf($verifyRawCOROUTINE$61).u9;
  protoOf($verifyRawCOROUTINE$61)['<get-exceptionState>'] = protoOf($verifyRawCOROUTINE$61).v9;
  protoOf($verifyRawCOROUTINE$61)['<set-result>'] = protoOf($verifyRawCOROUTINE$61).w9;
  protoOf($verifyRawCOROUTINE$61)['<get-result>'] = protoOf($verifyRawCOROUTINE$61).x9;
  protoOf($verifyRawCOROUTINE$61)['<set-exception>'] = protoOf($verifyRawCOROUTINE$61).y9;
  protoOf($verifyRawCOROUTINE$61)['<get-exception>'] = protoOf($verifyRawCOROUTINE$61).z9;
  protoOf($verifyRawCOROUTINE$61)['<set-finallyPath>'] = protoOf($verifyRawCOROUTINE$61).aa;
  protoOf($verifyRawCOROUTINE$61)['<get-finallyPath>'] = protoOf($verifyRawCOROUTINE$61).ba;
  protoOf($verifyRawCOROUTINE$61)['<get-context>'] = protoOf($verifyRawCOROUTINE$61).r9;
  function $verifyJwsCOROUTINE$62(_this__u8e3s4, signedJws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m93_1 = _this__u8e3s4;
    this.n93_1 = signedJws;
  }
  protoOf($verifyJwsCOROUTINE$62).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.o93_1 = split(this.n93_1, ['.']);
            if (!(this.o93_1.s() === 3)) {
              var message = 'Invalid JWT part count: ' + this.o93_1.s() + ' instead of 3';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }

            this.p93_1 = this.o93_1.u(0);
            var tmp_0 = this;
            var tmp1 = Default_getInstance();
            var string = decodeToString(Base64Utils_getInstance().decodeFromBase64Url(this.p93_1));
            var this_0 = tmp1.w21();
            var this_1 = serializer(this_0, createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().ld(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
            tmp_0.q93_1 = tmp1.y1y(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), string);
            var tmp0_safe_receiver = this.q93_1.k2('alg');
            if (tmp0_safe_receiver == null)
              null;
            else {
              var algValue = get_jsonPrimitive(tmp0_safe_receiver).v4p();
              if (!(algValue === JwsUtils_instance.jwsAlg(this.m93_1.keyType))) {
                var message_0 = 'Invalid key algorithm for JWS: JWS has ' + algValue + ', key is ' + JwsUtils_instance.jwsAlg(this.m93_1.keyType) + '!';
                throw IllegalStateException_init_$Create$(toString_0(message_0));
              }
            }

            this.r93_1 = this.o93_1.u(1);
            this.s93_1 = Base64Utils_getInstance().decodeFromBase64Url(this.o93_1.u(2));
            this.t93_1 = encodeToByteArray(this.p93_1 + '.' + this.r93_1);
            this.l9_1 = 1;
            suspendResult = this.m93_1.a6l(this.s93_1, this.t93_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            var this_2 = suspendResult.vo_1;
            var tmp_1;
            if (_Result___get_isSuccess__impl__sndoy8(this_2)) {
              var tmp_2 = _Result___get_value__impl__bjfvqg(this_2);
              var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
              var verifiedPayload = decodeToString(Base64Utils_getInstance().decodeFromBase64Url(substringAfter(decodeToString(it), '.')));
              var value = get_jsonObject(Default_getInstance().q4n(verifiedPayload));
              tmp_1 = _Result___init__impl__xyqfz8(value);
            } else {
              tmp_1 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this_2));
            }

            return new Result(tmp_1);
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($verifyJwsCOROUTINE$62)['<set-state>'] = protoOf($verifyJwsCOROUTINE$62).s9;
  protoOf($verifyJwsCOROUTINE$62)['<get-state>'] = protoOf($verifyJwsCOROUTINE$62).t9;
  protoOf($verifyJwsCOROUTINE$62)['<set-exceptionState>'] = protoOf($verifyJwsCOROUTINE$62).u9;
  protoOf($verifyJwsCOROUTINE$62)['<get-exceptionState>'] = protoOf($verifyJwsCOROUTINE$62).v9;
  protoOf($verifyJwsCOROUTINE$62)['<set-result>'] = protoOf($verifyJwsCOROUTINE$62).w9;
  protoOf($verifyJwsCOROUTINE$62)['<get-result>'] = protoOf($verifyJwsCOROUTINE$62).x9;
  protoOf($verifyJwsCOROUTINE$62)['<set-exception>'] = protoOf($verifyJwsCOROUTINE$62).y9;
  protoOf($verifyJwsCOROUTINE$62)['<get-exception>'] = protoOf($verifyJwsCOROUTINE$62).z9;
  protoOf($verifyJwsCOROUTINE$62)['<set-finallyPath>'] = protoOf($verifyJwsCOROUTINE$62).aa;
  protoOf($verifyJwsCOROUTINE$62)['<get-finallyPath>'] = protoOf($verifyJwsCOROUTINE$62).ba;
  protoOf($verifyJwsCOROUTINE$62)['<get-context>'] = protoOf($verifyJwsCOROUTINE$62).r9;
  function $getEncodedPublicKeyCOROUTINE$63(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c94_1 = _this__u8e3s4;
  }
  protoOf($getEncodedPublicKeyCOROUTINE$63).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.d94_1 = Companion_getInstance_26();
            this.l9_1 = 1;
            suspendResult = httpRequest$default(this.c94_1, VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e94_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.d94_1.b8p(this.e94_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.we('keys');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.we('1');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonObject(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.we('public_key');
            var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : get_jsonPrimitive(tmp4_safe_receiver);
            var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.v4p();
            var tmp_0;
            if (tmp6_elvis_lhs == null) {
              throw new KeyNotFoundException(VOID, 'No keys/1/public_key in data response');
            } else {
              tmp_0 = tmp6_elvis_lhs;
            }

            var ARGUMENT_1 = tmp_0;
            var ARGUMENT_2 = lazyOf(ARGUMENT_1);
            return ARGUMENT_2.z();
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<set-state>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).s9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-state>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).t9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<set-exceptionState>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).u9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-exceptionState>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).v9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<set-result>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).w9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-result>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).x9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<set-exception>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).y9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-exception>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).z9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<set-finallyPath>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).aa;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-finallyPath>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).ba;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-context>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).r9;
  function $getPublicKeyCOROUTINE$64(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n94_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyCOROUTINE$64).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = get_logger_0();
            tmp_0.m6b(TSEKey$getPublicKey$lambda(this.n94_1));
            this.o94_1 = Companion_instance_31;
            this.p94_1 = this.n94_1.keyType;
            this.l9_1 = 1;
            suspendResult = getBackingPublicKey(this.n94_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.q94_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.o94_1.t7z(this.p94_1, this.q94_1, null, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getPublicKeyCOROUTINE$64)['<set-state>'] = protoOf($getPublicKeyCOROUTINE$64).s9;
  protoOf($getPublicKeyCOROUTINE$64)['<get-state>'] = protoOf($getPublicKeyCOROUTINE$64).t9;
  protoOf($getPublicKeyCOROUTINE$64)['<set-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$64).u9;
  protoOf($getPublicKeyCOROUTINE$64)['<get-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$64).v9;
  protoOf($getPublicKeyCOROUTINE$64)['<set-result>'] = protoOf($getPublicKeyCOROUTINE$64).w9;
  protoOf($getPublicKeyCOROUTINE$64)['<get-result>'] = protoOf($getPublicKeyCOROUTINE$64).x9;
  protoOf($getPublicKeyCOROUTINE$64)['<set-exception>'] = protoOf($getPublicKeyCOROUTINE$64).y9;
  protoOf($getPublicKeyCOROUTINE$64)['<get-exception>'] = protoOf($getPublicKeyCOROUTINE$64).z9;
  protoOf($getPublicKeyCOROUTINE$64)['<set-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$64).aa;
  protoOf($getPublicKeyCOROUTINE$64)['<get-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$64).ba;
  protoOf($getPublicKeyCOROUTINE$64)['<get-context>'] = protoOf($getPublicKeyCOROUTINE$64).r9;
  function $getMetaCOROUTINE$65(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z94_1 = _this__u8e3s4;
  }
  protoOf($getMetaCOROUTINE$65).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.z94_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new TseKeyMeta(ARGUMENT);
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getMetaCOROUTINE$65)['<set-state>'] = protoOf($getMetaCOROUTINE$65).s9;
  protoOf($getMetaCOROUTINE$65)['<get-state>'] = protoOf($getMetaCOROUTINE$65).t9;
  protoOf($getMetaCOROUTINE$65)['<set-exceptionState>'] = protoOf($getMetaCOROUTINE$65).u9;
  protoOf($getMetaCOROUTINE$65)['<get-exceptionState>'] = protoOf($getMetaCOROUTINE$65).v9;
  protoOf($getMetaCOROUTINE$65)['<set-result>'] = protoOf($getMetaCOROUTINE$65).w9;
  protoOf($getMetaCOROUTINE$65)['<get-result>'] = protoOf($getMetaCOROUTINE$65).x9;
  protoOf($getMetaCOROUTINE$65)['<set-exception>'] = protoOf($getMetaCOROUTINE$65).y9;
  protoOf($getMetaCOROUTINE$65)['<get-exception>'] = protoOf($getMetaCOROUTINE$65).z9;
  protoOf($getMetaCOROUTINE$65)['<set-finallyPath>'] = protoOf($getMetaCOROUTINE$65).aa;
  protoOf($getMetaCOROUTINE$65)['<get-finallyPath>'] = protoOf($getMetaCOROUTINE$65).ba;
  protoOf($getMetaCOROUTINE$65)['<get-context>'] = protoOf($getMetaCOROUTINE$65).r9;
  function $deleteCOROUTINE$66(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i95_1 = _this__u8e3s4;
  }
  protoOf($deleteCOROUTINE$66).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = httpRequest(this.i95_1, Companion_getInstance_0().c2z_1, 'keys/' + this.i95_1.id + '/config', mapOf_0(to('deletion_allowed', true)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l9_1 = 2;
            suspendResult = httpRequest$default(this.i95_1, Companion_getInstance_0().f2z_1, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($deleteCOROUTINE$66)['<set-state>'] = protoOf($deleteCOROUTINE$66).s9;
  protoOf($deleteCOROUTINE$66)['<get-state>'] = protoOf($deleteCOROUTINE$66).t9;
  protoOf($deleteCOROUTINE$66)['<set-exceptionState>'] = protoOf($deleteCOROUTINE$66).u9;
  protoOf($deleteCOROUTINE$66)['<get-exceptionState>'] = protoOf($deleteCOROUTINE$66).v9;
  protoOf($deleteCOROUTINE$66)['<set-result>'] = protoOf($deleteCOROUTINE$66).w9;
  protoOf($deleteCOROUTINE$66)['<get-result>'] = protoOf($deleteCOROUTINE$66).x9;
  protoOf($deleteCOROUTINE$66)['<set-exception>'] = protoOf($deleteCOROUTINE$66).y9;
  protoOf($deleteCOROUTINE$66)['<get-exception>'] = protoOf($deleteCOROUTINE$66).z9;
  protoOf($deleteCOROUTINE$66)['<set-finallyPath>'] = protoOf($deleteCOROUTINE$66).aa;
  protoOf($deleteCOROUTINE$66)['<get-finallyPath>'] = protoOf($deleteCOROUTINE$66).ba;
  protoOf($deleteCOROUTINE$66)['<get-context>'] = protoOf($deleteCOROUTINE$66).r9;
  function TSEKey(server, auth, accessKey, namespace, id, _publicKey, _keyType) {
    Companion_getInstance_26();
    auth = auth === VOID ? null : auth;
    accessKey = accessKey === VOID ? null : accessKey;
    namespace = namespace === VOID ? null : namespace;
    _publicKey = _publicKey === VOID ? null : _publicKey;
    _keyType = _keyType === VOID ? null : _keyType;
    Key.call(this);
    this.server = server;
    this.i8s_1 = auth;
    this.j8s_1 = accessKey;
    this.k8s_1 = namespace;
    this.id = id;
    this.l8s_1 = _publicKey;
    this.m8s_1 = _keyType;
    var tmp = this;
    var tmp0_elvis_lhs = this.i8s_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp1_elvis_lhs = this.j8s_1;
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        throw IllegalArgumentException_init_$Create$('Either auth or accessKey must be provided');
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      tmp_0 = new TSEAuth(tmp_1);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.n8s_1 = tmp_0;
  }
  protoOf(TSEKey).j95 = function () {
    return this.server;
  };
  protoOf(TSEKey).a67 = function () {
    return this.id;
  };
  protoOf(TSEKey).w7e = function (value) {
    this.m8s_1 = value;
  };
  protoOf(TSEKey).a6m = function () {
    return ensureNotNull(this.m8s_1);
  };
  protoOf(TSEKey).g6h = function ($completion) {
    var tmp = new $initCOROUTINE$54(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey).b6m = function () {
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(TSEKey).w6g = function ($completion) {
    var tmp = new $getKeyIdCOROUTINE$58(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey).w6i = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(TSEKey).c6k = function ($completion) {
    throw IllegalArgumentException_init_$Create$('The private key should not be exposed.');
  };
  protoOf(TSEKey).n6k = function ($completion) {
    throw IllegalArgumentException_init_$Create$('The private key should not be exposed.');
  };
  protoOf(TSEKey).m6i = function ($completion) {
    throw IllegalArgumentException_init_$Create$('The private key should not be exposed.');
  };
  protoOf(TSEKey).m6g = function (plaintext, $completion) {
    var tmp = new $signRawCOROUTINE$59(this, plaintext, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey).a6g = function (plaintext, headers, $completion) {
    var tmp = new $signJwsCOROUTINE$60(this, plaintext, headers, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey).a6l = function (signed, detachedPlaintext, $completion) {
    var tmp = new $verifyRawCOROUTINE$61(this, signed, detachedPlaintext, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(TSEKey).s6j = function (signedJws, $completion) {
    var tmp = new $verifyJwsCOROUTINE$62(this, signedJws, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(TSEKey).i8z = function ($completion) {
    var tmp = new $getEncodedPublicKeyCOROUTINE$63(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey).r6h = function ($completion) {
    var tmp = new $getPublicKeyCOROUTINE$64(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey).l6l = function ($completion) {
    return getBackingPublicKey(this, $completion);
  };
  protoOf(TSEKey).m8x = function ($completion) {
    var tmp = new $getMetaCOROUTINE$65(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey).c6i = function ($completion) {
    return this.m8x($completion);
  };
  protoOf(TSEKey).n6f = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(TSEKey).toString = function () {
    return '[TSE ' + this.keyType.q2_1 + ' key @ ' + this.server + ']';
  };
  protoOf(TSEKey).u90 = function ($completion) {
    var tmp = new $deleteCOROUTINE$66(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKey).c6m = function () {
    var tmp = TSEKey$deleteKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).d6m = function (plaintext, headers) {
    var tmp = TSEKey$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).e6m = function (plaintext) {
    var tmp = TSEKey$signRawAsync$slambda_0(this, plaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).f6m = function () {
    var tmp = TSEKey$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).g6m = function () {
    var tmp = TSEKey$initAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).h6m = function () {
    var tmp = TSEKey$getPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).i6m = function () {
    var tmp = TSEKey$getMetaAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).j6m = function () {
    var tmp = TSEKey$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).n6m = function () {
    var tmp = TSEKey$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).o6m = function () {
    var tmp = TSEKey$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).p6m = function (signed, detachedPlaintext) {
    var tmp = TSEKey$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).k95 = function () {
    var tmp = TSEKey$getEncodedPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).k6m = function () {
    var tmp = TSEKey$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).m6m = function (signedJws) {
    var tmp = TSEKey$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).q6m = function () {
    var tmp = TSEKey$getPublicKeyRepresentationAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).l95 = function () {
    var tmp = TSEKey$deleteAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function logger$lambda_0() {
    _init_properties_TSEKey_kt__azqfs7();
    return Unit_instance;
  }
  var properties_initialized_TSEKey_kt_aupfz9;
  function _init_properties_TSEKey_kt__azqfs7() {
    if (!properties_initialized_TSEKey_kt_aupfz9) {
      properties_initialized_TSEKey_kt_aupfz9 = true;
      var tmp = KotlinLogging_instance;
      logger_0 = tmp.o6b(logger$lambda_0);
    }
  }
  function TSEKeyCreator$generateAsync$slambda(this$0, $type, $metadata, resultContinuation) {
    this.u95_1 = this$0;
    this.v95_1 = $type;
    this.w95_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKeyCreator$generateAsync$slambda).m8p = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(TSEKeyCreator$generateAsync$slambda).yb = function ($completion) {
    return this.m8p($completion);
  };
  protoOf(TSEKeyCreator$generateAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.u95_1.y6n(this.v95_1, this.w95_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(TSEKeyCreator$generateAsync$slambda).ha = function (completion) {
    return new TSEKeyCreator$generateAsync$slambda(this.u95_1, this.v95_1, this.w95_1, completion);
  };
  function TSEKeyCreator$generateAsync$slambda_0(this$0, $type, $metadata, resultContinuation) {
    var i = new TSEKeyCreator$generateAsync$slambda(this$0, $type, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.m8p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKeyCreator() {
  }
  function TSEKeyMetadata_init_$Init$(server, token, namespace, id, $this) {
    namespace = namespace === VOID ? null : namespace;
    id = id === VOID ? null : id;
    TSEKeyMetadata.call($this, server, new TSEAuth(token), namespace, id);
    return $this;
  }
  function TSEKeyMetadata2(server, token, namespace, id) {
    return TSEKeyMetadata_init_$Init$(server, token, namespace, id, objectCreate(protoOf(TSEKeyMetadata)));
  }
  function Companion_22() {
  }
  protoOf(Companion_22).s4p = function () {
    return $serializer_getInstance_18();
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    return Companion_instance_27;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.tse.TSEKeyMetadata', this, 4);
    tmp0_serialDesc.v28('server', false);
    tmp0_serialDesc.v28('auth', false);
    tmp0_serialDesc.v28('namespace', true);
    tmp0_serialDesc.v28('id', true);
    this.x95_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).y95 = function (encoder, value) {
    var tmp0_desc = this.x95_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.w22(tmp0_desc, 0, value.server);
    tmp1_output.y22(tmp0_desc, 1, $serializer_getInstance_16(), value.auth);
    if (tmp1_output.e23(tmp0_desc, 2) ? true : !(value.namespace == null)) {
      tmp1_output.a23(tmp0_desc, 2, StringSerializer_getInstance(), value.namespace);
    }
    if (tmp1_output.e23(tmp0_desc, 3) ? true : !(value.id == null)) {
      tmp1_output.a23(tmp0_desc, 3, StringSerializer_getInstance(), value.id);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_18).v1x = function (encoder, value) {
    return this.y95(encoder, value instanceof TSEKeyMetadata ? value : THROW_CCE());
  };
  protoOf($serializer_18).w1x = function (decoder) {
    var tmp0_desc = this.x95_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h21(tmp0_desc);
    if (tmp8_input.x21()) {
      tmp4_local0 = tmp8_input.r21(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.t21(tmp0_desc, 1, $serializer_getInstance_16(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.v21(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.r21(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.t21(tmp0_desc, 1, $serializer_getInstance_16(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.v21(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.v21(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i21(tmp0_desc);
    return TSEKeyMetadata_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_18).u1x = function () {
    return this.x95_1;
  };
  protoOf($serializer_18).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer_getInstance_16(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_18();
    return $serializer_instance_18;
  }
  function TSEKeyMetadata_init_$Init$_0(seen0, server, auth, namespace, id, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_18().x95_1);
    }
    $this.server = server;
    $this.auth = auth;
    if (0 === (seen0 & 4))
      $this.namespace = null;
    else
      $this.namespace = namespace;
    if (0 === (seen0 & 8))
      $this.id = null;
    else
      $this.id = id;
    return $this;
  }
  function TSEKeyMetadata_init_$Create$(seen0, server, auth, namespace, id, serializationConstructorMarker) {
    return TSEKeyMetadata_init_$Init$_0(seen0, server, auth, namespace, id, serializationConstructorMarker, objectCreate(protoOf(TSEKeyMetadata)));
  }
  function TSEKeyMetadata(server, auth, namespace, id) {
    namespace = namespace === VOID ? null : namespace;
    id = id === VOID ? null : id;
    this.server = server;
    this.auth = auth;
    this.namespace = namespace;
    this.id = id;
  }
  protoOf(TSEKeyMetadata).j95 = function () {
    return this.server;
  };
  protoOf(TSEKeyMetadata).t7x = function () {
    return this.auth;
  };
  protoOf(TSEKeyMetadata).z95 = function () {
    return this.namespace;
  };
  protoOf(TSEKeyMetadata).a67 = function () {
    return this.id;
  };
  protoOf(TSEKeyMetadata).bc = function () {
    return this.server;
  };
  protoOf(TSEKeyMetadata).cc = function () {
    return this.auth;
  };
  protoOf(TSEKeyMetadata).zo = function () {
    return this.namespace;
  };
  protoOf(TSEKeyMetadata).i6v = function () {
    return this.id;
  };
  protoOf(TSEKeyMetadata).a96 = function (server, auth, namespace, id) {
    return new TSEKeyMetadata(server, auth, namespace, id);
  };
  protoOf(TSEKeyMetadata).copy = function (server, auth, namespace, id, $super) {
    server = server === VOID ? this.server : server;
    auth = auth === VOID ? this.auth : auth;
    namespace = namespace === VOID ? this.namespace : namespace;
    id = id === VOID ? this.id : id;
    return $super === VOID ? this.a96(server, auth, namespace, id) : $super.a96.call(this, server, auth, namespace, id);
  };
  protoOf(TSEKeyMetadata).toString = function () {
    return 'TSEKeyMetadata(server=' + this.server + ', auth=' + this.auth.toString() + ', namespace=' + this.namespace + ', id=' + this.id + ')';
  };
  protoOf(TSEKeyMetadata).hashCode = function () {
    var result = getStringHashCode(this.server);
    result = imul(result, 31) + this.auth.hashCode() | 0;
    result = imul(result, 31) + (this.namespace == null ? 0 : getStringHashCode(this.namespace)) | 0;
    result = imul(result, 31) + (this.id == null ? 0 : getStringHashCode(this.id)) | 0;
    return result;
  };
  protoOf(TSEKeyMetadata).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TSEKeyMetadata))
      return false;
    var tmp0_other_with_cast = other instanceof TSEKeyMetadata ? other : THROW_CCE();
    if (!(this.server === tmp0_other_with_cast.server))
      return false;
    if (!this.auth.equals(tmp0_other_with_cast.auth))
      return false;
    if (!(this.namespace == tmp0_other_with_cast.namespace))
      return false;
    if (!(this.id == tmp0_other_with_cast.id))
      return false;
    return true;
  };
  function get_alphabetIndices() {
    _init_properties_Base58Utils_kt__nh5aqz();
    var tmp0 = alphabetIndices$delegate;
    // Inline function 'kotlin.getValue' call
    alphabetIndices$factory();
    return tmp0.z();
  }
  var alphabetIndices$delegate;
  function decodeBase58(_this__u8e3s4) {
    _init_properties_Base58Utils_kt__nh5aqz();
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(_this__u8e3s4) === 0) {
      return new Int8Array(0);
    }
    var input58 = new Int8Array(_this__u8e3s4.length);
    var inductionVariable = 0;
    var last = charSequenceLength(_this__u8e3s4) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = charSequenceGet(_this__u8e3s4, i);
        var tmp;
        // Inline function 'kotlin.code' call
        if (Char__toInt_impl_vasixd(c) < 128) {
          var tmp_0 = get_alphabetIndices();
          // Inline function 'kotlin.code' call
          tmp = tmp_0[Char__toInt_impl_vasixd(c)];
        } else {
          tmp = -1;
        }
        var digit = tmp;
        if (digit < 0) {
          throw NumberFormatException_init_$Create$('Illegal character ' + toString_1(c) + ' at position ' + i);
        }
        input58[i] = toByte(digit);
      }
       while (inductionVariable <= last);
    var zeros = 0;
    while (zeros < input58.length && input58[zeros] === 0) {
      zeros = zeros + 1 | 0;
    }
    var decoded = new Int8Array(_this__u8e3s4.length);
    var outputStart = decoded.length;
    var inputStart = zeros;
    while (inputStart < input58.length) {
      outputStart = outputStart - 1 | 0;
      var tmp_1 = outputStart;
      // Inline function 'kotlin.toUInt' call
      var this_0 = inputStart;
      var tmp_2 = _UInt___init__impl__l7qpdl(this_0);
      // Inline function 'kotlin.toUInt' call
      var tmp_3 = _UInt___init__impl__l7qpdl(58);
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$5 = _UInt___init__impl__l7qpdl(256);
      // Inline function 'kotlin.UInt.toByte' call
      var this_1 = divmod(input58, tmp_2, tmp_3, tmp$ret$5);
      decoded[tmp_1] = toByte(_UInt___get_data__impl__f0vqqw(this_1));
      if (input58[inputStart] === 0) {
        inputStart = inputStart + 1 | 0;
      }
    }
    while (outputStart < decoded.length && decoded[outputStart] === 0) {
      outputStart = outputStart + 1 | 0;
    }
    return copyOfRange(decoded, outputStart - zeros | 0, decoded.length);
  }
  function divmod(number, firstDigit, base, divisor) {
    _init_properties_Base58Utils_kt__nh5aqz();
    // Inline function 'kotlin.toUInt' call
    var remainder = _UInt___init__impl__l7qpdl(0);
    var inductionVariable = UInt__toInt_impl_93yt4d(firstDigit);
    // Inline function 'kotlin.toUInt' call
    var this_0 = number.length;
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(this_0);
    var last = UInt__toInt_impl_93yt4d(tmp$ret$1);
    if (UInt__compareTo_impl_yacclj(toUInt(inductionVariable), toUInt(last)) < 0)
      do {
        var i = toUInt(inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.UInt.toInt' call
        // Inline function 'kotlin.toUByte' call
        var this_1 = number[_UInt___get_data__impl__f0vqqw(i)];
        var digit = _UByte___init__impl__g9hnc4(this_1);
        // Inline function 'kotlin.UInt.times' call
        var this_2 = remainder;
        // Inline function 'kotlin.UInt.plus' call
        var tmp1 = _UInt___init__impl__l7qpdl(imul(_UInt___get_data__impl__f0vqqw(this_2), _UInt___get_data__impl__f0vqqw(base)));
        // Inline function 'kotlin.UByte.toUInt' call
        // Inline function 'kotlin.UInt.plus' call
        var other = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(digit) & 255);
        var temp = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1) + _UInt___get_data__impl__f0vqqw(other) | 0);
        // Inline function 'kotlin.UInt.toInt' call
        var tmp = _UInt___get_data__impl__f0vqqw(i);
        // Inline function 'kotlin.UInt.div' call
        // Inline function 'kotlin.UInt.toByte' call
        var this_3 = uintDivide(temp, divisor);
        number[tmp] = toByte(_UInt___get_data__impl__f0vqqw(this_3));
        // Inline function 'kotlin.UInt.rem' call
        remainder = uintRemainder(temp, divisor);
      }
       while (UInt__compareTo_impl_yacclj(toUInt(inductionVariable), toUInt(last)) < 0);
    return remainder;
  }
  function alphabetIndices$delegate$lambda() {
    _init_properties_Base58Utils_kt__nh5aqz();
    var tmp = 0;
    var tmp_0 = new Int32Array(128);
    while (tmp < 128) {
      var tmp_1 = tmp;
      tmp_0[tmp_1] = indexOf('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz', numberToChar(tmp_1));
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  }
  function alphabetIndices$factory() {
    return getPropertyCallableRef('alphabetIndices', 0, KProperty0, function () {
      return get_alphabetIndices();
    }, null);
  }
  var properties_initialized_Base58Utils_kt_ecol4d;
  function _init_properties_Base58Utils_kt__nh5aqz() {
    if (!properties_initialized_Base58Utils_kt_ecol4d) {
      properties_initialized_Base58Utils_kt_ecol4d = true;
      alphabetIndices$delegate = lazy_0(alphabetIndices$delegate$lambda);
    }
  }
  function Base64Utils() {
    Base64Utils_instance = this;
    this.b96_1 = Default_getInstance_1().bk_1.dk(PaddingOption_ABSENT_OPTIONAL_getInstance());
    this.c96_1 = Default_getInstance_1();
  }
  protoOf(Base64Utils).base64toBase64Url = function (_this__u8e3s4) {
    return trimEnd(replace(replace(_this__u8e3s4, '+', '-'), '/', '_'), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).base64UrlToBase64 = function (_this__u8e3s4) {
    return replace(replace(_this__u8e3s4, '-', '+'), '_', '/');
  };
  protoOf(Base64Utils).encodeToBase64 = function (_this__u8e3s4) {
    return this.c96_1.fk(_this__u8e3s4);
  };
  protoOf(Base64Utils).decodeFromBase64 = function (_this__u8e3s4) {
    return this.c96_1.jk(_this__u8e3s4);
  };
  protoOf(Base64Utils).encodeToBase64Url = function (_this__u8e3s4) {
    return trimEnd(Default_getInstance_1().bk_1.fk(_this__u8e3s4), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).decodeFromBase64Url = function (_this__u8e3s4) {
    return this.b96_1.jk(_this__u8e3s4);
  };
  protoOf(Base64Utils).base64UrlDecode = function (_this__u8e3s4) {
    return this.b96_1.jk(_this__u8e3s4);
  };
  protoOf(Base64Utils).base64Decode = function (_this__u8e3s4) {
    return this.c96_1.jk(_this__u8e3s4);
  };
  var Base64Utils_instance;
  function Base64Utils_getInstance() {
    if (Base64Utils_instance == null)
      new Base64Utils();
    return Base64Utils_instance;
  }
  function jwsSigningAlgorithm(keyType) {
    var tmp;
    switch (keyType.r2_1) {
      case 2:
        tmp = 'ES256';
        break;
      case 1:
        tmp = 'ES256K';
        break;
      case 3:
        tmp = 'RS256';
        break;
      case 0:
        tmp = 'EdDSA';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function okpPublicKeyRequiredMembers($this, okp) {
    // Inline function 'kotlin.let' call
    var it = mapOf([to('crv', JsonUtils_getInstance().toJsonElement(okp.we('crv'))), to('kty', JsonUtils_getInstance().toJsonElement(okp.we('kty'))), to('x', JsonUtils_getInstance().toJsonElement(okp.we('x')))]);
    return new JsonObject(it);
  }
  function ecPublicKeyRequiredMembers($this, ec) {
    // Inline function 'kotlin.let' call
    var it = mapOf([to('crv', JsonUtils_getInstance().toJsonElement(ec.we('crv'))), to('kty', JsonUtils_getInstance().toJsonElement(ec.we('kty'))), to('x', JsonUtils_getInstance().toJsonElement(ec.we('x'))), to('y', JsonUtils_getInstance().toJsonElement(ec.we('y')))]);
    return new JsonObject(it);
  }
  function rsaPublicKeyRequiredMembers($this, rsa) {
    // Inline function 'kotlin.let' call
    var it = mapOf([to('e', JsonUtils_getInstance().toJsonElement(rsa.we('e'))), to('kty', JsonUtils_getInstance().toJsonElement(rsa.we('kty'))), to('n', JsonUtils_getInstance().toJsonElement(rsa.we('n')))]);
    return new JsonObject(it);
  }
  function JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda($key, resultContinuation) {
    this.l96_1 = $key;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = JsonCanonicalizationUtils_instance.m96(this.l96_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda).ha = function (completion) {
    return new JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda(this.l96_1, completion);
  };
  function JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda_0($key, resultContinuation) {
    var i = new JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda($key, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $convertToRequiredMembersJsonStringCOROUTINE$69(_this__u8e3s4, key, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v96_1 = _this__u8e3s4;
    this.w96_1 = key;
  }
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.w96_1.n6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            var tmp_0;
            switch (this.w96_1.keyType.r2_1) {
              case 0:
                tmp_0 = okpPublicKeyRequiredMembers(JsonCanonicalizationUtils_instance, it);
                break;
              case 1:
              case 2:
                tmp_0 = ecPublicKeyRequiredMembers(JsonCanonicalizationUtils_instance, it);
                break;
              case 3:
                tmp_0 = rsaPublicKeyRequiredMembers(JsonCanonicalizationUtils_instance, it);
                break;
              default:
                noWhenBranchMatchedException();
                break;
            }

            var ARGUMENT = tmp_0;
            return ARGUMENT.toString();
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<set-state>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).s9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-state>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).t9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<set-exceptionState>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).u9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-exceptionState>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).v9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<set-result>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).w9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-result>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).x9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<set-exception>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).y9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-exception>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).z9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<set-finallyPath>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).aa;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-finallyPath>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).ba;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-context>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).r9;
  function JsonCanonicalizationUtils() {
  }
  protoOf(JsonCanonicalizationUtils).m96 = function (key, $completion) {
    var tmp = new $convertToRequiredMembersJsonStringCOROUTINE$69(this, key, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JsonCanonicalizationUtils).x96 = function (key) {
    var tmp = JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda_0(key, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var JsonCanonicalizationUtils_instance;
  function JsonCanonicalizationUtils_getInstance() {
    return JsonCanonicalizationUtils_instance;
  }
  function toHexChar($this, i) {
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted($this, _this__u8e3s4, value) {
    _this__u8e3s4.x8(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charSequenceGet(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < $this.y6l_1.length && !($this.y6l_1[c] == null)) {
          _this__u8e3s4.vd(value, lastPos, i);
          _this__u8e3s4.w8($this.y6l_1[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.vd(value, lastPos, value.length);
    else
      _this__u8e3s4.w8(value);
    _this__u8e3s4.x8(_Char___init__impl__6a9atx(34));
  }
  function JsonUtils$prettyJson$delegate$lambda() {
    return Json(VOID, JsonUtils$prettyJson$delegate$lambda$lambda);
  }
  function JsonUtils$prettyJson$delegate$lambda$lambda($this$Json) {
    $this$Json.j4o_1 = true;
    return Unit_instance;
  }
  function JsonUtils$printAsJson$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.y();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.z();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(JsonUtils_getInstance(), this_0, k);
    this_0.x8(_Char___init__impl__6a9atx(58));
    this_0.v8(v);
    return this_0.toString();
  }
  function JsonUtils() {
    JsonUtils_instance = this;
    var tmp = this;
    tmp.x6l_1 = lazy_0(JsonUtils$prettyJson$delegate$lambda);
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.apply' call
    var this_0 = Array(93);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var c = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c1 = toHexChar(JsonUtils_getInstance(), c >> 12);
        var c2 = toHexChar(JsonUtils_getInstance(), c >> 8);
        var c3 = toHexChar(JsonUtils_getInstance(), c >> 4);
        var c4 = toHexChar(JsonUtils_getInstance(), c);
        this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
      }
       while (inductionVariable <= 31);
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(34);
    this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
    // Inline function 'kotlin.code' call
    var this_2 = _Char___init__impl__6a9atx(92);
    this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
    // Inline function 'kotlin.code' call
    var this_3 = _Char___init__impl__6a9atx(9);
    this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
    // Inline function 'kotlin.code' call
    var this_4 = _Char___init__impl__6a9atx(8);
    this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
    // Inline function 'kotlin.code' call
    var this_5 = _Char___init__impl__6a9atx(10);
    this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
    // Inline function 'kotlin.code' call
    var this_6 = _Char___init__impl__6a9atx(13);
    this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
    this_0[12] = '\\f';
    tmp_0.y6l_1 = this_0;
  }
  protoOf(JsonUtils).z6l = function () {
    var tmp0 = this.x6l_1;
    // Inline function 'kotlin.getValue' call
    prettyJson$factory();
    return tmp0.z();
  };
  protoOf(JsonUtils).toJsonElement = function (_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof JsonElement) {
      tmp = _this__u8e3s4;
    } else {
      if (_this__u8e3s4 == null) {
        tmp = JsonNull_getInstance();
      } else {
        if (!(_this__u8e3s4 == null) ? typeof _this__u8e3s4 === 'string' : false) {
          tmp = JsonPrimitive_0(_this__u8e3s4);
        } else {
          if (!(_this__u8e3s4 == null) ? typeof _this__u8e3s4 === 'boolean' : false) {
            tmp = JsonPrimitive_2(_this__u8e3s4);
          } else {
            if (isNumber(_this__u8e3s4)) {
              tmp = JsonPrimitive_1(_this__u8e3s4);
            } else {
              if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) {
                // Inline function 'kotlin.collections.map' call
                // Inline function 'kotlin.collections.mapTo' call
                var destination = ArrayList_init_$Create$_0(_this__u8e3s4.s());
                // Inline function 'kotlin.collections.iterator' call
                var _iterator__ex2g4s = _this__u8e3s4.x().p();
                while (_iterator__ex2g4s.q()) {
                  var item = _iterator__ex2g4s.r();
                  var tmp$ret$1 = new Pair(toString(item.y()), JsonUtils_getInstance().toJsonElement(item.z()));
                  destination.n(tmp$ret$1);
                }
                tmp = new JsonObject(toMap_0(destination));
              } else {
                if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) {
                  // Inline function 'kotlin.collections.map' call
                  // Inline function 'kotlin.collections.mapTo' call
                  var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(_this__u8e3s4, 10));
                  var _iterator__ex2g4s_0 = _this__u8e3s4.p();
                  while (_iterator__ex2g4s_0.q()) {
                    var item_0 = _iterator__ex2g4s_0.r();
                    var tmp$ret$4 = JsonUtils_getInstance().toJsonElement(item_0);
                    destination_0.n(tmp$ret$4);
                  }
                  tmp = new JsonArray(destination_0);
                } else {
                  if (!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) {
                    // Inline function 'kotlin.collections.map' call
                    // Inline function 'kotlin.collections.mapTo' call
                    var destination_1 = ArrayList_init_$Create$_0(_this__u8e3s4.length);
                    var inductionVariable = 0;
                    var last = _this__u8e3s4.length;
                    while (inductionVariable < last) {
                      var item_1 = _this__u8e3s4[inductionVariable];
                      inductionVariable = inductionVariable + 1 | 0;
                      var tmp$ret$7 = JsonUtils_getInstance().toJsonElement(item_1);
                      destination_1.n(tmp$ret$7);
                    }
                    tmp = new JsonArray(destination_1);
                  } else {
                    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) {
                      // Inline function 'kotlin.collections.map' call
                      // Inline function 'kotlin.collections.mapTo' call
                      var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(_this__u8e3s4, 10));
                      var _iterator__ex2g4s_1 = _this__u8e3s4.p();
                      while (_iterator__ex2g4s_1.q()) {
                        var item_2 = _iterator__ex2g4s_1.r();
                        var tmp$ret$10 = JsonUtils_getInstance().toJsonElement(item_2);
                        destination_2.n(tmp$ret$10);
                      }
                      tmp = new JsonArray(destination_2);
                    } else {
                      if (_this__u8e3s4 instanceof Enum) {
                        tmp = JsonPrimitive_0(_this__u8e3s4.toString());
                      } else {
                        if (_this__u8e3s4 instanceof Unit) {
                          tmp = JsonPrimitive_0('null');
                        } else {
                          throw IllegalArgumentException_init_$Create$('Cannot convert to JsonElement - Unknown type: ' + getKClassFromExpression(_this__u8e3s4).fc() + ', was: ' + toString(_this__u8e3s4));
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  protoOf(JsonUtils).javaToJsonElement = function (any) {
    return this.toJsonElement(any);
  };
  protoOf(JsonUtils).listToJsonElement = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(_this__u8e3s4, 10));
    var _iterator__ex2g4s = _this__u8e3s4.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = JsonUtils_getInstance().toJsonElement(item);
      destination.n(tmp$ret$0);
    }
    return new JsonArray(destination);
  };
  protoOf(JsonUtils).mapToJsonObject = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var map = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = _this__u8e3s4.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var key = element.y();
      // Inline function 'kotlin.collections.component2' call
      var value = element.z();
      var tmp3 = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
      // Inline function 'kotlin.collections.set' call
      var value_0 = JsonUtils_getInstance().toJsonElement(value);
      map.n2(tmp3, value_0);
    }
    return new JsonObject(map);
  };
  protoOf(JsonUtils).toJsonObject = function (_this__u8e3s4) {
    return get_jsonObject(this.mapToJsonObject(_this__u8e3s4));
  };
  protoOf(JsonUtils).javaToJsonObject = function (map) {
    return this.toJsonObject(map);
  };
  protoOf(JsonUtils).printAsJson = function (_this__u8e3s4) {
    var tmp = _this__u8e3s4.x();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonUtils$printAsJson$lambda);
  };
  protoOf(JsonUtils).stringToJsonPrimitive = function (value) {
    return JsonPrimitive_0(value);
  };
  var JsonUtils_instance;
  function JsonUtils_getInstance() {
    if (JsonUtils_instance == null)
      new JsonUtils();
    return JsonUtils_instance;
  }
  function prettyJson$factory() {
    return getPropertyCallableRef('prettyJson', 1, KProperty1, function (receiver) {
      return receiver.z6l();
    }, null);
  }
  function Companion_23() {
  }
  protoOf(Companion_23).s4p = function () {
    return $serializer_getInstance_19();
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    return Companion_instance_28;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.utils.JwsUtils.JwsParts', this, 3);
    tmp0_serialDesc.v28('header', false);
    tmp0_serialDesc.v28('payload', false);
    tmp0_serialDesc.v28('signature', false);
    this.y96_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).z96 = function (encoder, value) {
    var tmp0_desc = this.y96_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.y22(tmp0_desc, 0, JsonObjectSerializer_getInstance(), value.header);
    tmp1_output.y22(tmp0_desc, 1, JsonObjectSerializer_getInstance(), value.payload);
    tmp1_output.w22(tmp0_desc, 2, value.signature);
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_19).v1x = function (encoder, value) {
    return this.z96(encoder, value instanceof JwsParts ? value : THROW_CCE());
  };
  protoOf($serializer_19).w1x = function (decoder) {
    var tmp0_desc = this.y96_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h21(tmp0_desc);
    if (tmp7_input.x21()) {
      tmp4_local0 = tmp7_input.t21(tmp0_desc, 0, JsonObjectSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t21(tmp0_desc, 1, JsonObjectSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.r21(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.t21(tmp0_desc, 0, JsonObjectSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t21(tmp0_desc, 1, JsonObjectSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.r21(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i21(tmp0_desc);
    return JwsParts_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_19).u1x = function () {
    return this.y96_1;
  };
  protoOf($serializer_19).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [JsonObjectSerializer_getInstance(), JsonObjectSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_19;
  function $serializer_getInstance_19() {
    if ($serializer_instance_19 == null)
      new $serializer_19();
    return $serializer_instance_19;
  }
  function JwsParts_init_$Init$(seen0, header, payload, signature, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_19().y96_1);
    }
    $this.header = header;
    $this.payload = payload;
    $this.signature = signature;
    return $this;
  }
  function JwsParts_init_$Create$(seen0, header, payload, signature, serializationConstructorMarker) {
    return JwsParts_init_$Init$(seen0, header, payload, signature, serializationConstructorMarker, objectCreate(protoOf(JwsParts)));
  }
  function JwsUtils$JwsPartsSdJwt$Companion$$childSerializers$_anonymous__im5wu1() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_24() {
    Companion_instance_29 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.a97_1 = [null, lazy(tmp_0, JwsUtils$JwsPartsSdJwt$Companion$$childSerializers$_anonymous__im5wu1)];
  }
  protoOf(Companion_24).s4p = function () {
    return $serializer_getInstance_20();
  };
  var Companion_instance_29;
  function Companion_getInstance_29() {
    if (Companion_instance_29 == null)
      new Companion_24();
    return Companion_instance_29;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.utils.JwsUtils.JwsPartsSdJwt', this, 2);
    tmp0_serialDesc.v28('jwsParts', false);
    tmp0_serialDesc.v28('sdJwtDisclosures', false);
    this.b97_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).c97 = function (encoder, value) {
    var tmp0_desc = this.b97_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    var tmp2_cached = Companion_getInstance_29().a97_1;
    tmp1_output.y22(tmp0_desc, 0, $serializer_getInstance_19(), value.jwsParts);
    tmp1_output.y22(tmp0_desc, 1, tmp2_cached[1].z(), value.sdJwtDisclosures);
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_20).v1x = function (encoder, value) {
    return this.c97(encoder, value instanceof JwsPartsSdJwt ? value : THROW_CCE());
  };
  protoOf($serializer_20).w1x = function (decoder) {
    var tmp0_desc = this.b97_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h21(tmp0_desc);
    var tmp7_cached = Companion_getInstance_29().a97_1;
    if (tmp6_input.x21()) {
      tmp4_local0 = tmp6_input.t21(tmp0_desc, 0, $serializer_getInstance_19(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.t21(tmp0_desc, 1, tmp7_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.t21(tmp0_desc, 0, $serializer_getInstance_19(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.t21(tmp0_desc, 1, tmp7_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i21(tmp0_desc);
    return JwsPartsSdJwt_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_20).u1x = function () {
    return this.b97_1;
  };
  protoOf($serializer_20).l29 = function () {
    var tmp0_cached = Companion_getInstance_29().a97_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_19(), tmp0_cached[1].z()];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function JwsPartsSdJwt_init_$Init$(seen0, jwsParts, sdJwtDisclosures, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_20().b97_1);
    }
    $this.jwsParts = jwsParts;
    $this.sdJwtDisclosures = sdJwtDisclosures;
    return $this;
  }
  function JwsPartsSdJwt_init_$Create$(seen0, jwsParts, sdJwtDisclosures, serializationConstructorMarker) {
    return JwsPartsSdJwt_init_$Init$(seen0, jwsParts, sdJwtDisclosures, serializationConstructorMarker, objectCreate(protoOf(JwsPartsSdJwt)));
  }
  function decodeJwsPart($this, _this__u8e3s4) {
    return get_jsonObject(Default_getInstance().q4n(decodeToString(Base64Utils_getInstance().decodeFromBase64Url(Base64Utils_getInstance().base64toBase64Url(_this__u8e3s4)))));
  }
  function JwsParts(header, payload, signature) {
    this.header = header;
    this.payload = payload;
    this.signature = signature;
  }
  protoOf(JwsParts).d97 = function () {
    return this.header;
  };
  protoOf(JwsParts).e97 = function () {
    return this.payload;
  };
  protoOf(JwsParts).f97 = function () {
    return this.signature;
  };
  protoOf(JwsParts).toString = function () {
    var tmp = Base64Utils_getInstance();
    var tmp0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value = this.header;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.w21();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(JsonObject), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp$ret$2 = tmp0.x1y(tmp$ret$1, value);
    var tmp_0 = tmp.encodeToBase64Url(encodeToByteArray(tmp$ret$2));
    var tmp_1 = Base64Utils_getInstance();
    var tmp2 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value_0 = this.payload;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_2 = tmp2.w21();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(this_2, createKType(getKClass(JsonObject), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    var tmp$ret$5 = tmp2.x1y(tmp$ret$4, value_0);
    return tmp_0 + '.' + tmp_1.encodeToBase64Url(encodeToByteArray(tmp$ret$5)) + '.' + this.signature;
  };
  protoOf(JwsParts).bc = function () {
    return this.header;
  };
  protoOf(JwsParts).cc = function () {
    return this.payload;
  };
  protoOf(JwsParts).zo = function () {
    return this.signature;
  };
  protoOf(JwsParts).g97 = function (header, payload, signature) {
    return new JwsParts(header, payload, signature);
  };
  protoOf(JwsParts).copy = function (header, payload, signature, $super) {
    header = header === VOID ? this.header : header;
    payload = payload === VOID ? this.payload : payload;
    signature = signature === VOID ? this.signature : signature;
    return $super === VOID ? this.g97(header, payload, signature) : $super.g97.call(this, header, payload, signature);
  };
  protoOf(JwsParts).hashCode = function () {
    var result = this.header.hashCode();
    result = imul(result, 31) + this.payload.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.signature) | 0;
    return result;
  };
  protoOf(JwsParts).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JwsParts))
      return false;
    var tmp0_other_with_cast = other instanceof JwsParts ? other : THROW_CCE();
    if (!this.header.equals(tmp0_other_with_cast.header))
      return false;
    if (!this.payload.equals(tmp0_other_with_cast.payload))
      return false;
    if (!(this.signature === tmp0_other_with_cast.signature))
      return false;
    return true;
  };
  function JwsPartsSdJwt(jwsParts, sdJwtDisclosures) {
    Companion_getInstance_29();
    this.jwsParts = jwsParts;
    this.sdJwtDisclosures = sdJwtDisclosures;
  }
  protoOf(JwsPartsSdJwt).h97 = function () {
    return this.jwsParts;
  };
  protoOf(JwsPartsSdJwt).i97 = function () {
    return this.sdJwtDisclosures;
  };
  protoOf(JwsPartsSdJwt).sdJwtDisclosuresString = function () {
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.sdJwtDisclosures.h()) {
      tmp = '~' + joinToString(this.sdJwtDisclosures, '~');
    } else {
      tmp = '';
    }
    return tmp;
  };
  protoOf(JwsPartsSdJwt).toString = function () {
    return this.jwsParts.toString() + this.sdJwtDisclosuresString();
  };
  protoOf(JwsPartsSdJwt).bc = function () {
    return this.jwsParts;
  };
  protoOf(JwsPartsSdJwt).cc = function () {
    return this.sdJwtDisclosures;
  };
  protoOf(JwsPartsSdJwt).j97 = function (jwsParts, sdJwtDisclosures) {
    return new JwsPartsSdJwt(jwsParts, sdJwtDisclosures);
  };
  protoOf(JwsPartsSdJwt).copy = function (jwsParts, sdJwtDisclosures, $super) {
    jwsParts = jwsParts === VOID ? this.jwsParts : jwsParts;
    sdJwtDisclosures = sdJwtDisclosures === VOID ? this.sdJwtDisclosures : sdJwtDisclosures;
    return $super === VOID ? this.j97(jwsParts, sdJwtDisclosures) : $super.j97.call(this, jwsParts, sdJwtDisclosures);
  };
  protoOf(JwsPartsSdJwt).hashCode = function () {
    var result = this.jwsParts.hashCode();
    result = imul(result, 31) + hashCode(this.sdJwtDisclosures) | 0;
    return result;
  };
  protoOf(JwsPartsSdJwt).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JwsPartsSdJwt))
      return false;
    var tmp0_other_with_cast = other instanceof JwsPartsSdJwt ? other : THROW_CCE();
    if (!this.jwsParts.equals(tmp0_other_with_cast.jwsParts))
      return false;
    if (!equals(this.sdJwtDisclosures, tmp0_other_with_cast.sdJwtDisclosures))
      return false;
    return true;
  };
  function JwsStringParts(header, payload, signature) {
    this.header = header;
    this.payload = payload;
    this.signature = signature;
  }
  protoOf(JwsStringParts).d97 = function () {
    return this.header;
  };
  protoOf(JwsStringParts).e97 = function () {
    return this.payload;
  };
  protoOf(JwsStringParts).f97 = function () {
    return this.signature;
  };
  protoOf(JwsStringParts).getSignable = function () {
    return this.header + '.' + this.payload;
  };
  protoOf(JwsStringParts).bc = function () {
    return this.header;
  };
  protoOf(JwsStringParts).cc = function () {
    return this.payload;
  };
  protoOf(JwsStringParts).zo = function () {
    return this.signature;
  };
  protoOf(JwsStringParts).k97 = function (header, payload, signature) {
    return new JwsStringParts(header, payload, signature);
  };
  protoOf(JwsStringParts).copy = function (header, payload, signature, $super) {
    header = header === VOID ? this.header : header;
    payload = payload === VOID ? this.payload : payload;
    signature = signature === VOID ? this.signature : signature;
    return $super === VOID ? this.k97(header, payload, signature) : $super.k97.call(this, header, payload, signature);
  };
  protoOf(JwsStringParts).toString = function () {
    return 'JwsStringParts(header=' + this.header + ', payload=' + this.payload + ', signature=' + this.signature + ')';
  };
  protoOf(JwsStringParts).hashCode = function () {
    var result = getStringHashCode(this.header);
    result = imul(result, 31) + getStringHashCode(this.payload) | 0;
    result = imul(result, 31) + getStringHashCode(this.signature) | 0;
    return result;
  };
  protoOf(JwsStringParts).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JwsStringParts))
      return false;
    var tmp0_other_with_cast = other instanceof JwsStringParts ? other : THROW_CCE();
    if (!(this.header === tmp0_other_with_cast.header))
      return false;
    if (!(this.payload === tmp0_other_with_cast.payload))
      return false;
    if (!(this.signature === tmp0_other_with_cast.signature))
      return false;
    return true;
  };
  function checkJwsPreconditions($this, jws, allowMissingSignature) {
    // Inline function 'kotlin.require' call
    if (!startsWith(jws, 'ey')) {
      var message = 'String does not look like JWS: ' + jws;
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.text.count' call
    var count = 0;
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(jws)) {
      var element = charSequenceGet(jws, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if (element === _Char___init__impl__6a9atx(46)) {
        count = count + 1 | 0;
      }
    }
    var dots = count;
    // Inline function 'kotlin.require' call
    if (!(dots === 2 || (allowMissingSignature && dots === 1))) {
      var message_0 = 'String does not have correct JWS part amount (dots=' + dots + ', allowMissingSignature=' + allowMissingSignature + '): ' + jws;
      throw IllegalArgumentException_init_$Create$(toString_0(message_0));
    }
  }
  function JwsUtils() {
  }
  protoOf(JwsUtils).jwsAlg = function (_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.r2_1) {
      case 0:
        tmp = 'EdDSA';
        break;
      case 2:
        tmp = 'ES256';
        break;
      case 1:
        tmp = 'ES256K';
        break;
      case 3:
        tmp = 'RS256';
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(JwsUtils).decodeJwsStrings = function (_this__u8e3s4) {
    checkJwsPreconditions(this, _this__u8e3s4, false);
    var splitted = split(_this__u8e3s4, ['.']);
    // Inline function 'kotlin.collections.component1' call
    var header = splitted.u(0);
    // Inline function 'kotlin.collections.component2' call
    var payload = splitted.u(1);
    // Inline function 'kotlin.collections.component3' call
    var signature = splitted.u(2);
    return new JwsStringParts(header, payload, signature);
  };
  protoOf(JwsUtils).l97 = function (_this__u8e3s4, withSignature, allowMissingSignature) {
    checkJwsPreconditions(this, _this__u8e3s4, allowMissingSignature);
    var parts = this.decodeJwsStrings(_this__u8e3s4);
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value = decodeJwsPart(JwsUtils_instance, parts.header);
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
    // Inline function 'kotlin.getOrElse' call
    var this_0 = tmp;
    var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
    var tmp_1;
    if (exception == null) {
      var tmp_2 = _Result___get_value__impl__bjfvqg(this_0);
      tmp_1 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
    } else {
      throw IllegalArgumentException_init_$Create$_0('Could not parse JWT header (base64/json issue): ' + parts.header, exception);
    }
    var header = tmp_1;
    // Inline function 'kotlin.runCatching' call
    var tmp_3;
    try {
      // Inline function 'kotlin.Companion.success' call
      var value_0 = decodeJwsPart(JwsUtils_instance, parts.payload);
      tmp_3 = _Result___init__impl__xyqfz8(value_0);
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Error) {
        var e_0 = $p;
        // Inline function 'kotlin.Companion.failure' call
        tmp_4 = _Result___init__impl__xyqfz8(createFailure(e_0));
      } else {
        throw $p;
      }
      tmp_3 = tmp_4;
    }
    // Inline function 'kotlin.getOrElse' call
    var this_1 = tmp_3;
    var exception_0 = Result__exceptionOrNull_impl_p6xea9(this_1);
    var tmp_5;
    if (exception_0 == null) {
      var tmp_6 = _Result___get_value__impl__bjfvqg(this_1);
      tmp_5 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
    } else {
      throw IllegalArgumentException_init_$Create$_0('Could not parse JWT payload (base64/json issue): ' + parts.payload, exception_0);
    }
    var payload = tmp_5;
    var signature = withSignature ? parts.signature : '';
    return new JwsParts(header, payload, signature);
  };
  protoOf(JwsUtils).decodeJws = function (_this__u8e3s4, withSignature, allowMissingSignature, $super) {
    withSignature = withSignature === VOID ? true : withSignature;
    allowMissingSignature = allowMissingSignature === VOID ? false : allowMissingSignature;
    return $super === VOID ? this.l97(_this__u8e3s4, withSignature, allowMissingSignature) : $super.l97.call(this, _this__u8e3s4, withSignature, allowMissingSignature);
  };
  protoOf(JwsUtils).decodeJwsOrSdjwt = function (_this__u8e3s4) {
    var jws = substringBefore(_this__u8e3s4, '~');
    var sdJwtClaims = split(substringAfter(_this__u8e3s4, '~', ''), ['~']);
    var jwsParts = this.decodeJws(jws);
    return new JwsPartsSdJwt(jwsParts, sdJwtClaims);
  };
  var JwsUtils_instance;
  function JwsUtils_getInstance() {
    return JwsUtils_instance;
  }
  function MultiBaseUtils() {
  }
  protoOf(MultiBaseUtils).m97 = function (mb) {
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = mb.substring(1);
    return decodeBase58(tmp$ret$1);
  };
  var MultiBaseUtils_instance;
  function MultiBaseUtils_getInstance() {
    return MultiBaseUtils_instance;
  }
  function bytesFromUInt($this, num) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var varInt = ArrayList_init_$Create$();
    var rest = num;
    $l$loop: while (true) {
      var tmp0 = rest;
      // Inline function 'kotlin.UInt.and' call
      var other = Companion_getInstance_30().MSBALL;
      if (!!(_UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) & _UInt___get_data__impl__f0vqqw(other)) === _UInt___init__impl__l7qpdl(0))) {
        break $l$loop;
      }
      var tmp2 = rest;
      // Inline function 'kotlin.UInt.and' call
      var other_0 = _UInt___init__impl__l7qpdl(255);
      var tmp4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2) & _UInt___get_data__impl__f0vqqw(other_0));
      // Inline function 'kotlin.UInt.or' call
      var other_1 = Companion_getInstance_30().MSB;
      // Inline function 'kotlin.UInt.toByte' call
      var this_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp4) | _UInt___get_data__impl__f0vqqw(other_1));
      var tmp$ret$4 = toByte(_UInt___get_data__impl__f0vqqw(this_0));
      varInt.n(tmp$ret$4);
      // Inline function 'kotlin.UInt.shr' call
      var this_1 = rest;
      rest = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) >>> 7 | 0);
    }
    // Inline function 'kotlin.UInt.toByte' call
    var this_2 = rest;
    var tmp$ret$6 = toByte(_UInt___get_data__impl__f0vqqw(this_2));
    varInt.n(tmp$ret$6);
    return toByteArray(varInt);
  }
  function Companion_25() {
    Companion_instance_30 = this;
    this.MSB = _UInt___init__impl__l7qpdl(128);
    this.LSB = _UInt___init__impl__l7qpdl(127);
    this.MSBALL = _UInt___init__impl__l7qpdl(-128);
  }
  protoOf(Companion_25).n97 = function () {
    return this.MSB;
  };
  protoOf(Companion_25).o97 = function () {
    return this.LSB;
  };
  protoOf(Companion_25).p97 = function () {
    return this.MSBALL;
  };
  protoOf(Companion_25).fromBytes = function (bytes) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (bytes.length === 0)
      throw IllegalArgumentException_init_$Create$('Empty byte array');
    var idx = 0;
    // Inline function 'kotlin.toUInt' call
    var this_0 = bytes[idx];
    var tmp2 = _UInt___init__impl__l7qpdl(this_0);
    // Inline function 'kotlin.UInt.and' call
    var other = this.LSB;
    var value = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2) & _UInt___get_data__impl__f0vqqw(other));
    $l$loop: while (true) {
      var tmp;
      if ((idx + 1 | 0) < bytes.length) {
        // Inline function 'kotlin.toUInt' call
        var this_1 = bytes[idx];
        var tmp5 = _UInt___init__impl__l7qpdl(this_1);
        // Inline function 'kotlin.UInt.and' call
        var other_0 = this.MSB;
        tmp = !(_UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp5) & _UInt___get_data__impl__f0vqqw(other_0)) === _UInt___init__impl__l7qpdl(0));
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      idx = idx + 1 | 0;
      var tmp12 = value;
      // Inline function 'kotlin.toUInt' call
      var this_2 = bytes[idx];
      var tmp8 = _UInt___init__impl__l7qpdl(this_2);
      // Inline function 'kotlin.UInt.and' call
      var other_1 = this.LSB;
      var tmp10 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp8) & _UInt___get_data__impl__f0vqqw(other_1));
      // Inline function 'kotlin.UInt.shl' call
      var bitCount = imul(idx, 7);
      // Inline function 'kotlin.UInt.or' call
      var other_2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp10) << bitCount);
      value = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp12) | _UInt___get_data__impl__f0vqqw(other_2));
    }
    return new UVarInt(value);
  };
  var Companion_instance_30;
  function Companion_getInstance_30() {
    if (Companion_instance_30 == null)
      new Companion_25();
    return Companion_instance_30;
  }
  function UVarInt(value) {
    Companion_getInstance_30();
    this.value = value;
    this.bytes = bytesFromUInt(this, this.value);
  }
  protoOf(UVarInt).q97 = function () {
    return this.value;
  };
  protoOf(UVarInt).r97 = function () {
    return this.bytes;
  };
  protoOf(UVarInt).a = function () {
    return this.bytes.length;
  };
  protoOf(UVarInt).toString = function () {
    return '0x' + toString_2(this.value, 16);
  };
  function MultiCodecUtils() {
    MultiCodecUtils_instance = this;
    this.JwkJcsPubMultiCodecKeyCode = _UInt___init__impl__l7qpdl(60241);
  }
  protoOf(MultiCodecUtils).s97 = function () {
    return this.JwkJcsPubMultiCodecKeyCode;
  };
  protoOf(MultiCodecUtils).getMultiCodecKeyCode = function (keyType) {
    var tmp;
    switch (keyType.r2_1) {
      case 0:
        tmp = _UInt___init__impl__l7qpdl(237);
        break;
      case 1:
        tmp = _UInt___init__impl__l7qpdl(231);
        break;
      case 2:
        tmp = _UInt___init__impl__l7qpdl(4608);
        break;
      case 3:
        tmp = _UInt___init__impl__l7qpdl(4613);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(MultiCodecUtils).getKeyTypeFromKeyCode = function (code) {
    var tmp;
    if (code === _UInt___init__impl__l7qpdl(237)) {
      tmp = KeyType_Ed25519_getInstance();
    } else if (code === _UInt___init__impl__l7qpdl(231)) {
      tmp = KeyType_secp256k1_getInstance();
    } else if (code === _UInt___init__impl__l7qpdl(4613)) {
      tmp = KeyType_RSA_getInstance();
    } else if (code === _UInt___init__impl__l7qpdl(4608)) {
      tmp = KeyType_secp256r1_getInstance();
    } else {
      throw IllegalArgumentException_init_$Create$('No multicodec algorithm for code: ' + new UInt(code));
    }
    return tmp;
  };
  protoOf(MultiCodecUtils).getMultiCodecKeyCodeUsingString = function (mb) {
    return Companion_getInstance_30().fromBytes(MultiBaseUtils_instance.m97(mb)).value;
  };
  var MultiCodecUtils_instance;
  function MultiCodecUtils_getInstance() {
    if (MultiCodecUtils_instance == null)
      new MultiCodecUtils();
    return MultiCodecUtils_instance;
  }
  function importPEM$_anonymous_$getPemTitle_j2mdle(_this__u8e3s4) {
    // Inline function 'kotlin.text.trim' call
    var tmp1 = toString_0(trim(isCharSequence(_this__u8e3s4) ? _this__u8e3s4 : THROW_CCE()));
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.text.dropWhile' call
      var inductionVariable = 0;
      var last = charSequenceLength(tmp1) - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(charSequenceGet(tmp1, index) === _Char___init__impl__6a9atx(45))) {
            // Inline function 'kotlin.text.substring' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$4 = tmp1.substring(index);
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$4 = '';
    }
    var tmp3 = tmp$ret$4;
    var tmp$ret$8;
    $l$block_0: {
      // Inline function 'kotlin.text.dropLastWhile' call
      var inductionVariable_0 = get_lastIndex(tmp3);
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          if (!(charSequenceGet(tmp3, index_0) === _Char___init__impl__6a9atx(45))) {
            // Inline function 'kotlin.text.substring' call
            var endIndex = index_0 + 1 | 0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$8 = tmp3.substring(0, endIndex);
            break $l$block_0;
          }
        }
         while (0 <= inductionVariable_0);
      tmp$ret$8 = '';
    }
    // Inline function 'kotlin.text.trim' call
    var this_0 = tmp$ret$8;
    return toString_0(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
  }
  function importPEM$_anonymous_$isPemTitle_ja96c2(_this__u8e3s4, prefix, suffix) {
    return startsWith(_this__u8e3s4, prefix) && endsWith(_this__u8e3s4, suffix);
  }
  function JsJWKKeyCreator$importJWKAsync$slambda($jwk, resultContinuation) {
    this.b98_1 = $jwk;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsJWKKeyCreator$importJWKAsync$slambda).j7y = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JsJWKKeyCreator$importJWKAsync$slambda).yb = function ($completion) {
    return this.j7y($completion);
  };
  protoOf(JsJWKKeyCreator$importJWKAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = JsJWKKeyCreator_instance.m7d(this.b98_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsJWKKeyCreator$importJWKAsync$slambda).ha = function (completion) {
    return new JsJWKKeyCreator$importJWKAsync$slambda(this.b98_1, completion);
  };
  function JsJWKKeyCreator$importJWKAsync$slambda_0($jwk, resultContinuation) {
    var i = new JsJWKKeyCreator$importJWKAsync$slambda($jwk, resultContinuation);
    var l = function ($completion) {
      return i.j7y($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JsJWKKeyCreator$importPEMAsync$slambda($pem, resultContinuation) {
    this.k98_1 = $pem;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsJWKKeyCreator$importPEMAsync$slambda).j7y = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JsJWKKeyCreator$importPEMAsync$slambda).yb = function ($completion) {
    return this.j7y($completion);
  };
  protoOf(JsJWKKeyCreator$importPEMAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = JsJWKKeyCreator_instance.p72(this.k98_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsJWKKeyCreator$importPEMAsync$slambda).ha = function (completion) {
    return new JsJWKKeyCreator$importPEMAsync$slambda(this.k98_1, completion);
  };
  function JsJWKKeyCreator$importPEMAsync$slambda_0($pem, resultContinuation) {
    var i = new JsJWKKeyCreator$importPEMAsync$slambda($pem, resultContinuation);
    var l = function ($completion) {
      return i.j7y($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JsJWKKeyCreator$generateAsync$slambda($type, $metadata, resultContinuation) {
    this.t98_1 = $type;
    this.u98_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsJWKKeyCreator$generateAsync$slambda).f7z = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JsJWKKeyCreator$generateAsync$slambda).yb = function ($completion) {
    return this.f7z($completion);
  };
  protoOf(JsJWKKeyCreator$generateAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = JsJWKKeyCreator_instance.g7z(this.t98_1, this.u98_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsJWKKeyCreator$generateAsync$slambda).ha = function (completion) {
    return new JsJWKKeyCreator$generateAsync$slambda(this.t98_1, this.u98_1, completion);
  };
  function JsJWKKeyCreator$generateAsync$slambda_0($type, $metadata, resultContinuation) {
    var i = new JsJWKKeyCreator$generateAsync$slambda($type, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.f7z($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JsJWKKeyCreator$importRawPublicKeyAsync$slambda($type, $rawPublicKey, $metadata, resultContinuation) {
    this.d99_1 = $type;
    this.e99_1 = $rawPublicKey;
    this.f99_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsJWKKeyCreator$importRawPublicKeyAsync$slambda).q6h = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JsJWKKeyCreator$importRawPublicKeyAsync$slambda).yb = function ($completion) {
    return this.q6h($completion);
  };
  protoOf(JsJWKKeyCreator$importRawPublicKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = JsJWKKeyCreator_instance.t7z(this.d99_1, this.e99_1, this.f99_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsJWKKeyCreator$importRawPublicKeyAsync$slambda).ha = function (completion) {
    return new JsJWKKeyCreator$importRawPublicKeyAsync$slambda(this.d99_1, this.e99_1, this.f99_1, completion);
  };
  function JsJWKKeyCreator$importRawPublicKeyAsync$slambda_0($type, $rawPublicKey, $metadata, resultContinuation) {
    var i = new JsJWKKeyCreator$importRawPublicKeyAsync$slambda($type, $rawPublicKey, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.q6h($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $generateCOROUTINE$70(_this__u8e3s4, type, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o99_1 = _this__u8e3s4;
    this.p99_1 = type;
    this.q99_1 = metadata;
  }
  protoOf($generateCOROUTINE$70).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.r99_1 = JwsUtils_instance.jwsAlg(this.p99_1);
            this.l9_1 = 1;
            var tmp_0 = PromiseUtils_instance;
            var tmp_1 = jose;
            var tmp_2 = json_0([to('extractable', true)]);
            suspendResult = tmp_0.y99(tmp_1.generateKeyPair(this.r99_1, !(tmp_2 == null) ? tmp_2 : THROW_CCE()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s99_1 = suspendResult;
            this.t99_1 = this.s99_1.privateKey;
            var tmp_3 = this;
            tmp_3.u99_1 = jwkKeyUsingKeyLike(this.t99_1);
            this.v99_1 = this.u99_1;
            var tmp_4 = this;
            tmp_4.w99_1 = this.v99_1;
            this.x99_1 = this.w99_1;
            this.l9_1 = 2;
            suspendResult = this.x99_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.v99_1;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($generateCOROUTINE$70)['<set-state>'] = protoOf($generateCOROUTINE$70).s9;
  protoOf($generateCOROUTINE$70)['<get-state>'] = protoOf($generateCOROUTINE$70).t9;
  protoOf($generateCOROUTINE$70)['<set-exceptionState>'] = protoOf($generateCOROUTINE$70).u9;
  protoOf($generateCOROUTINE$70)['<get-exceptionState>'] = protoOf($generateCOROUTINE$70).v9;
  protoOf($generateCOROUTINE$70)['<set-result>'] = protoOf($generateCOROUTINE$70).w9;
  protoOf($generateCOROUTINE$70)['<get-result>'] = protoOf($generateCOROUTINE$70).x9;
  protoOf($generateCOROUTINE$70)['<set-exception>'] = protoOf($generateCOROUTINE$70).y9;
  protoOf($generateCOROUTINE$70)['<get-exception>'] = protoOf($generateCOROUTINE$70).z9;
  protoOf($generateCOROUTINE$70)['<set-finallyPath>'] = protoOf($generateCOROUTINE$70).aa;
  protoOf($generateCOROUTINE$70)['<get-finallyPath>'] = protoOf($generateCOROUTINE$70).ba;
  protoOf($generateCOROUTINE$70)['<get-context>'] = protoOf($generateCOROUTINE$70).r9;
  function $importRawPublicKeyCOROUTINE$71(_this__u8e3s4, type, rawPublicKey, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k9a_1 = _this__u8e3s4;
    this.l9a_1 = type;
    this.m9a_1 = rawPublicKey;
    this.n9a_1 = metadata;
  }
  protoOf($importRawPublicKeyCOROUTINE$71).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = PromiseUtils_instance.y99(jose.importSPKI(decodeToString(this.m9a_1), JwsUtils_instance.jwsAlg(this.l9a_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o9a_1 = suspendResult;
            var tmp_0 = this;
            tmp_0.p9a_1 = jwkKeyUsingKeyLike(this.o9a_1);
            this.q9a_1 = this.p9a_1;
            var tmp_1 = this;
            tmp_1.r9a_1 = this.q9a_1;
            this.s9a_1 = this.r9a_1;
            this.l9_1 = 2;
            suspendResult = this.s9a_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.q9a_1;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($importRawPublicKeyCOROUTINE$71)['<set-state>'] = protoOf($importRawPublicKeyCOROUTINE$71).s9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-state>'] = protoOf($importRawPublicKeyCOROUTINE$71).t9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<set-exceptionState>'] = protoOf($importRawPublicKeyCOROUTINE$71).u9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-exceptionState>'] = protoOf($importRawPublicKeyCOROUTINE$71).v9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<set-result>'] = protoOf($importRawPublicKeyCOROUTINE$71).w9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-result>'] = protoOf($importRawPublicKeyCOROUTINE$71).x9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<set-exception>'] = protoOf($importRawPublicKeyCOROUTINE$71).y9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-exception>'] = protoOf($importRawPublicKeyCOROUTINE$71).z9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<set-finallyPath>'] = protoOf($importRawPublicKeyCOROUTINE$71).aa;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-finallyPath>'] = protoOf($importRawPublicKeyCOROUTINE$71).ba;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-context>'] = protoOf($importRawPublicKeyCOROUTINE$71).r9;
  function $importJWKCOROUTINE$72(_this__u8e3s4, jwk, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b9b_1 = _this__u8e3s4;
    this.c9b_1 = jwk;
  }
  protoOf($importJWKCOROUTINE$72).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            var tmp_0 = this;
            tmp_0.d9b_1 = this.b9b_1;
            this.e9b_1 = this.d9b_1;
            this.m9_1 = 3;
            var tmp_1 = this;
            tmp_1.g9b_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.h9b_1 = this.e9b_1;
            this.i9b_1 = this.h9b_1;
            this.j9b_1 = JSON.parse(this.c9b_1);
            while (getKClassFromExpression(this.j9b_1).equals(PrimitiveClasses_getInstance().ld())) {
              var tmp_3 = this;
              var tmp_4 = JSON;
              var tmp_5 = this.j9b_1;
              tmp_3.j9b_1 = tmp_4.parse(typeof tmp_5 === 'string' ? tmp_5 : THROW_CCE());
            }

            this.l9_1 = 1;
            suspendResult = PromiseUtils_instance.y99(jose.importJWK(this.j9b_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k9b_1 = suspendResult;
            this.l9b_1 = jwkKeyUsingKeyLikeAndJWK(this.k9b_1, this.j9b_1);
            this.m9b_1 = this.l9b_1;
            var tmp_6 = this;
            tmp_6.n9b_1 = this.m9b_1;
            this.o9b_1 = this.n9b_1;
            this.l9_1 = 2;
            suspendResult = this.o9b_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp1 = this.m9b_1;
            var tmp_7 = this;
            this.g9b_1;
            tmp_7.f9b_1 = _Result___init__impl__xyqfz8(tmp1);
            this.m9_1 = 4;
            this.l9_1 = 5;
            continue $sm;
          case 3:
            this.m9_1 = 4;
            var tmp_8 = this.o9_1;
            if (tmp_8 instanceof Error) {
              var e = this.o9_1;
              var tmp_9 = this;
              tmp_9.f9b_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.l9_1 = 5;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 4:
            throw this.o9_1;
          case 5:
            this.m9_1 = 4;
            return new Result(this.f9b_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m9_1 === 4) {
          throw e_0;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($importJWKCOROUTINE$72)['<set-state>'] = protoOf($importJWKCOROUTINE$72).s9;
  protoOf($importJWKCOROUTINE$72)['<get-state>'] = protoOf($importJWKCOROUTINE$72).t9;
  protoOf($importJWKCOROUTINE$72)['<set-exceptionState>'] = protoOf($importJWKCOROUTINE$72).u9;
  protoOf($importJWKCOROUTINE$72)['<get-exceptionState>'] = protoOf($importJWKCOROUTINE$72).v9;
  protoOf($importJWKCOROUTINE$72)['<set-result>'] = protoOf($importJWKCOROUTINE$72).w9;
  protoOf($importJWKCOROUTINE$72)['<get-result>'] = protoOf($importJWKCOROUTINE$72).x9;
  protoOf($importJWKCOROUTINE$72)['<set-exception>'] = protoOf($importJWKCOROUTINE$72).y9;
  protoOf($importJWKCOROUTINE$72)['<get-exception>'] = protoOf($importJWKCOROUTINE$72).z9;
  protoOf($importJWKCOROUTINE$72)['<set-finallyPath>'] = protoOf($importJWKCOROUTINE$72).aa;
  protoOf($importJWKCOROUTINE$72)['<get-finallyPath>'] = protoOf($importJWKCOROUTINE$72).ba;
  protoOf($importJWKCOROUTINE$72)['<get-context>'] = protoOf($importJWKCOROUTINE$72).r9;
  function $importPEMCOROUTINE$73(_this__u8e3s4, pem, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x9b_1 = _this__u8e3s4;
    this.y9b_1 = pem;
  }
  protoOf($importPEMCOROUTINE$73).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            var tmp_0 = this;
            tmp_0.z9b_1 = this.x9b_1;
            this.a9c_1 = this.z9b_1;
            this.m9_1 = 3;
            var tmp_1 = this;
            tmp_1.c9c_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.d9c_1 = this.a9c_1;
            this.e9c_1 = this.d9c_1;
            this.f9c_1 = lines(this.y9b_1);
            var tmp_3 = this;
            var tmp0 = this.f9c_1;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp_4;
              if (isInterface(tmp0, Collection)) {
                tmp_4 = tmp0.h();
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                tmp$ret$0 = false;
                break l$ret$1;
              }
              var _iterator__ex2g4s = tmp0.p();
              while (_iterator__ex2g4s.q()) {
                var element = _iterator__ex2g4s.r();
                if (importPEM$_anonymous_$isPemTitle_ja96c2(importPEM$_anonymous_$getPemTitle_j2mdle(element), 'BEGIN', 'PRIVATE KEY')) {
                  tmp$ret$0 = true;
                  break l$ret$1;
                }
              }
              tmp$ret$0 = false;
            }
             while (false);
            tmp_3.g9c_1 = tmp$ret$0;
            var tmp_5 = this;
            var tmp2 = this.f9c_1;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp_6;
              if (isInterface(tmp2, Collection)) {
                tmp_6 = tmp2.h();
              } else {
                tmp_6 = false;
              }
              if (tmp_6) {
                tmp$ret$2 = false;
                break l$ret$3;
              }
              var _iterator__ex2g4s_0 = tmp2.p();
              while (_iterator__ex2g4s_0.q()) {
                var element_0 = _iterator__ex2g4s_0.r();
                if (importPEM$_anonymous_$isPemTitle_ja96c2(importPEM$_anonymous_$getPemTitle_j2mdle(element_0), 'BEGIN', 'PUBLIC KEY')) {
                  tmp$ret$2 = true;
                  break l$ret$3;
                }
              }
              tmp$ret$2 = false;
            }
             while (false);
            tmp_5.h9c_1 = tmp$ret$2;
            this.l9_1 = 1;
            var tmp_7 = PromiseUtils_instance;
            var tmp_8;
            if (this.g9c_1) {
              var tmp_9 = jose;
              var this_0 = this.f9c_1;
              var yielding = false;
              var list = ArrayList_init_$Create$();
              var _iterator__ex2g4s_1 = this_0.p();
              while (_iterator__ex2g4s_1.q()) {
                var item = _iterator__ex2g4s_1.r();
                if (yielding) {
                  list.n(item);
                } else {
                  if (!!importPEM$_anonymous_$isPemTitle_ja96c2(importPEM$_anonymous_$getPemTitle_j2mdle(item), 'BEGIN', 'PRIVATE KEY')) {
                    list.n(item);
                    yielding = true;
                  }
                }
              }
              var tmp$ret$4;
              l$ret$5: do {
                if (!list.h()) {
                  var iterator = list.v(list.s());
                  while (iterator.b5()) {
                    var it = iterator.d5();
                    if (!!importPEM$_anonymous_$isPemTitle_ja96c2(importPEM$_anonymous_$getPemTitle_j2mdle(it), 'END', 'PRIVATE KEY')) {
                      tmp$ret$4 = take(list, iterator.c5() + 1 | 0);
                      break l$ret$5;
                    }
                  }
                }
                tmp$ret$4 = emptyList();
              }
               while (false);
              tmp_8 = tmp_9.importPKCS8(joinToString(tmp$ret$4, '\n'), '');
            } else if (this.h9c_1) {
              var tmp_10 = jose;
              var this_1 = this.f9c_1;
              var yielding_0 = false;
              var list_0 = ArrayList_init_$Create$();
              var _iterator__ex2g4s_2 = this_1.p();
              while (_iterator__ex2g4s_2.q()) {
                var item_0 = _iterator__ex2g4s_2.r();
                if (yielding_0) {
                  list_0.n(item_0);
                } else {
                  if (!!importPEM$_anonymous_$isPemTitle_ja96c2(importPEM$_anonymous_$getPemTitle_j2mdle(item_0), 'BEGIN', 'PUBLIC KEY')) {
                    list_0.n(item_0);
                    yielding_0 = true;
                  }
                }
              }
              var tmp$ret$6;
              l$ret$7: do {
                if (!list_0.h()) {
                  var iterator_0 = list_0.v(list_0.s());
                  while (iterator_0.b5()) {
                    var it_0 = iterator_0.d5();
                    if (!!importPEM$_anonymous_$isPemTitle_ja96c2(importPEM$_anonymous_$getPemTitle_j2mdle(it_0), 'END', 'PUBLIC KEY')) {
                      tmp$ret$6 = take(list_0, iterator_0.c5() + 1 | 0);
                      break l$ret$7;
                    }
                  }
                }
                tmp$ret$6 = emptyList();
              }
               while (false);
              tmp_8 = tmp_10.importSPKI(joinToString(tmp$ret$6, '\n'), '');
            } else {
              throw IllegalArgumentException_init_$Create$("Unable to determine if public or private PEM-encoded key. Make sure the title line includes 'BEGIN PUBLIC KEY' or 'BEGIN PRIVATE KEY'.");
            }

            suspendResult = tmp_7.y99(tmp_8, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i9c_1 = suspendResult;
            var tmp_11 = this;
            tmp_11.j9c_1 = jwkKeyUsingKeyLike(this.i9c_1);
            this.k9c_1 = this.j9c_1;
            var tmp_12 = this;
            tmp_12.l9c_1 = this.k9c_1;
            this.m9c_1 = this.l9c_1;
            this.l9_1 = 2;
            suspendResult = this.m9c_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp1 = this.k9c_1;
            var tmp_13 = this;
            this.c9c_1;
            tmp_13.b9c_1 = _Result___init__impl__xyqfz8(tmp1);
            this.m9_1 = 4;
            this.l9_1 = 5;
            continue $sm;
          case 3:
            this.m9_1 = 4;
            var tmp_14 = this.o9_1;
            if (tmp_14 instanceof Error) {
              var e = this.o9_1;
              var tmp_15 = this;
              tmp_15.b9c_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.l9_1 = 5;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 4:
            throw this.o9_1;
          case 5:
            this.m9_1 = 4;
            return new Result(this.b9c_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m9_1 === 4) {
          throw e_0;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($importPEMCOROUTINE$73)['<set-state>'] = protoOf($importPEMCOROUTINE$73).s9;
  protoOf($importPEMCOROUTINE$73)['<get-state>'] = protoOf($importPEMCOROUTINE$73).t9;
  protoOf($importPEMCOROUTINE$73)['<set-exceptionState>'] = protoOf($importPEMCOROUTINE$73).u9;
  protoOf($importPEMCOROUTINE$73)['<get-exceptionState>'] = protoOf($importPEMCOROUTINE$73).v9;
  protoOf($importPEMCOROUTINE$73)['<set-result>'] = protoOf($importPEMCOROUTINE$73).w9;
  protoOf($importPEMCOROUTINE$73)['<get-result>'] = protoOf($importPEMCOROUTINE$73).x9;
  protoOf($importPEMCOROUTINE$73)['<set-exception>'] = protoOf($importPEMCOROUTINE$73).y9;
  protoOf($importPEMCOROUTINE$73)['<get-exception>'] = protoOf($importPEMCOROUTINE$73).z9;
  protoOf($importPEMCOROUTINE$73)['<set-finallyPath>'] = protoOf($importPEMCOROUTINE$73).aa;
  protoOf($importPEMCOROUTINE$73)['<get-finallyPath>'] = protoOf($importPEMCOROUTINE$73).ba;
  protoOf($importPEMCOROUTINE$73)['<get-context>'] = protoOf($importPEMCOROUTINE$73).r9;
  function JsJWKKeyCreator() {
  }
  protoOf(JsJWKKeyCreator).g7z = function (type, metadata, $completion) {
    var tmp = new $generateCOROUTINE$70(this, type, metadata, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JsJWKKeyCreator).t7z = function (type, rawPublicKey, metadata, $completion) {
    var tmp = new $importRawPublicKeyCOROUTINE$71(this, type, rawPublicKey, metadata, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JsJWKKeyCreator).m7d = function (jwk, $completion) {
    var tmp = new $importJWKCOROUTINE$72(this, jwk, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JsJWKKeyCreator).p72 = function (pem, $completion) {
    var tmp = new $importPEMCOROUTINE$73(this, pem, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JsJWKKeyCreator).u7z = function (jwk) {
    var tmp = JsJWKKeyCreator$importJWKAsync$slambda_0(jwk, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JsJWKKeyCreator).v7z = function (pem) {
    var tmp = JsJWKKeyCreator$importPEMAsync$slambda_0(pem, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JsJWKKeyCreator).w7z = function (type, metadata) {
    var tmp = JsJWKKeyCreator$generateAsync$slambda_0(type, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JsJWKKeyCreator).x7z = function (type, rawPublicKey, metadata) {
    var tmp = JsJWKKeyCreator$importRawPublicKeyAsync$slambda_0(type, rawPublicKey, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var JsJWKKeyCreator_instance;
  function JsJWKKeyCreator_getInstance() {
    return JsJWKKeyCreator_instance;
  }
  function resolveSerializedKeyBlocking(json) {
    var resolved = {_v: null};
    var tmp = GlobalScope_instance;
    launch(tmp, VOID, VOID, resolveSerializedKeyBlocking$slambda_0(resolved, json, null));
    while (resolved._v == null) {
    }
    return ensureNotNull(resolved._v);
  }
  function resolveSerializedKeyBlocking$slambda($resolved, $json, resultContinuation) {
    this.v9c_1 = $resolved;
    this.w9c_1 = $json;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(resolveSerializedKeyBlocking$slambda).w1v = function ($this$launch, $completion) {
    var tmp = this.a1g($this$launch, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(resolveSerializedKeyBlocking$slambda).ta = function (p1, $completion) {
    return this.w1v((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(resolveSerializedKeyBlocking$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = KeyManager_getInstance().i6q(this.w9c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.v9c_1._v = ARGUMENT;
            return Unit_instance;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(resolveSerializedKeyBlocking$slambda).a1g = function ($this$launch, completion) {
    var i = new resolveSerializedKeyBlocking$slambda(this.v9c_1, this.w9c_1, completion);
    i.x9c_1 = $this$launch;
    return i;
  };
  function resolveSerializedKeyBlocking$slambda_0($resolved, $json, resultContinuation) {
    var i = new resolveSerializedKeyBlocking$slambda($resolved, $json, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.w1v($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JWKKey$Companion$importJWKAsync$slambda($jwk, resultContinuation) {
    this.g9d_1 = $jwk;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$Companion$importJWKAsync$slambda).j7y = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey$Companion$importJWKAsync$slambda).yb = function ($completion) {
    return this.j7y($completion);
  };
  protoOf(JWKKey$Companion$importJWKAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = Companion_instance_31.m7d(this.g9d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$Companion$importJWKAsync$slambda).ha = function (completion) {
    return new JWKKey$Companion$importJWKAsync$slambda(this.g9d_1, completion);
  };
  function JWKKey$Companion$importJWKAsync$slambda_0($jwk, resultContinuation) {
    var i = new JWKKey$Companion$importJWKAsync$slambda($jwk, resultContinuation);
    var l = function ($completion) {
      return i.j7y($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$Companion$importPEMAsync$slambda($pem, resultContinuation) {
    this.p9d_1 = $pem;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$Companion$importPEMAsync$slambda).j7y = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey$Companion$importPEMAsync$slambda).yb = function ($completion) {
    return this.j7y($completion);
  };
  protoOf(JWKKey$Companion$importPEMAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = Companion_instance_31.p72(this.p9d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$Companion$importPEMAsync$slambda).ha = function (completion) {
    return new JWKKey$Companion$importPEMAsync$slambda(this.p9d_1, completion);
  };
  function JWKKey$Companion$importPEMAsync$slambda_0($pem, resultContinuation) {
    var i = new JWKKey$Companion$importPEMAsync$slambda($pem, resultContinuation);
    var l = function ($completion) {
      return i.j7y($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$Companion$generateAsync$slambda($type, $metadata, resultContinuation) {
    this.y9d_1 = $type;
    this.z9d_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$Companion$generateAsync$slambda).f7z = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey$Companion$generateAsync$slambda).yb = function ($completion) {
    return this.f7z($completion);
  };
  protoOf(JWKKey$Companion$generateAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = Companion_instance_31.g7z(this.y9d_1, this.z9d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$Companion$generateAsync$slambda).ha = function (completion) {
    return new JWKKey$Companion$generateAsync$slambda(this.y9d_1, this.z9d_1, completion);
  };
  function JWKKey$Companion$generateAsync$slambda_0($type, $metadata, resultContinuation) {
    var i = new JWKKey$Companion$generateAsync$slambda($type, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.f7z($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$Companion$importRawPublicKeyAsync$slambda($type, $rawPublicKey, $metadata, resultContinuation) {
    this.i9e_1 = $type;
    this.j9e_1 = $rawPublicKey;
    this.k9e_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$Companion$importRawPublicKeyAsync$slambda).q6h = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey$Companion$importRawPublicKeyAsync$slambda).yb = function ($completion) {
    return this.q6h($completion);
  };
  protoOf(JWKKey$Companion$importRawPublicKeyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = Companion_instance_31.t7z(this.i9e_1, this.j9e_1, this.k9e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$Companion$importRawPublicKeyAsync$slambda).ha = function (completion) {
    return new JWKKey$Companion$importRawPublicKeyAsync$slambda(this.i9e_1, this.j9e_1, this.k9e_1, completion);
  };
  function JWKKey$Companion$importRawPublicKeyAsync$slambda_0($type, $rawPublicKey, $metadata, resultContinuation) {
    var i = new JWKKey$Companion$importRawPublicKeyAsync$slambda($type, $rawPublicKey, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.q6h($completion);
    };
    l.$arity = 0;
    return l;
  }
  function _get__internalKey__um3le0($this) {
    var tmp = $this.z99_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('_internalKey');
    }
  }
  function _get__internalJwk__um3bex($this) {
    var tmp = $this.a9a_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('_internalJwk');
    }
  }
  function JWKKey_init_$Init$(key, $this) {
    JWKKey.call($this, null);
    $this.z99_1 = key;
    return $this;
  }
  function jwkKeyUsingKeyLike(key) {
    return JWKKey_init_$Init$(key, objectCreate(protoOf(JWKKey)));
  }
  function JWKKey_init_$Init$_0(key, jwk, $this) {
    JWKKey.call($this, null);
    $this.z99_1 = key;
    $this.a9a_1 = jwk;
    return $this;
  }
  function jwkKeyUsingKeyLikeAndJWK(key, jwk) {
    return JWKKey_init_$Init$_0(key, jwk, objectCreate(protoOf(JWKKey)));
  }
  function JWKKey_init_$Init$_1(jwk, $this) {
    JWKKey.call($this, null);
    $this.a9a_1 = jwk;
    return $this;
  }
  function jwkKeyUsingJWK(jwk) {
    return JWKKey_init_$Init$_1(jwk, objectCreate(protoOf(JWKKey)));
  }
  function Companion_26() {
  }
  protoOf(Companion_26).g7z = function (type, metadata, $completion) {
    return JsJWKKeyCreator_instance.g7z(type, metadata, $completion);
  };
  protoOf(Companion_26).t7z = function (type, rawPublicKey, metadata, $completion) {
    return JsJWKKeyCreator_instance.t7z(type, rawPublicKey, metadata, $completion);
  };
  protoOf(Companion_26).m7d = function (jwk, $completion) {
    var tmp = JsJWKKeyCreator_instance.m7d(jwk, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(Companion_26).p72 = function (pem, $completion) {
    var tmp = JsJWKKeyCreator_instance.p72(pem, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(Companion_26).u7z = function (jwk) {
    var tmp = JWKKey$Companion$importJWKAsync$slambda_0(jwk, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_26).v7z = function (pem) {
    var tmp = JWKKey$Companion$importPEMAsync$slambda_0(pem, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_26).w7z = function (type, metadata) {
    var tmp = JWKKey$Companion$generateAsync$slambda_0(type, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_26).x7z = function (type, rawPublicKey, metadata) {
    var tmp = JWKKey$Companion$importRawPublicKeyAsync$slambda_0(type, rawPublicKey, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_26).s4p = function () {
    return $serializer_getInstance_21();
  };
  var Companion_instance_31;
  function Companion_getInstance_31() {
    return Companion_instance_31;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('jwk', this, 2);
    tmp0_serialDesc.v28('jwk', false);
    tmp0_serialDesc.v28('_keyId', true);
    tmp0_serialDesc.w28(new JsonClassDiscriminator('type'));
    this.l9e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).m9e = function (encoder, value) {
    var tmp0_desc = this.l9e_1;
    var tmp1_output = encoder.h21(tmp0_desc);
    tmp1_output.a23(tmp0_desc, 0, JWKKeyJsonFieldSerializer_getInstance(), value.jwk);
    if (tmp1_output.e23(tmp0_desc, 1) ? true : !(value._keyId == null)) {
      tmp1_output.a23(tmp0_desc, 1, StringSerializer_getInstance(), value._keyId);
    }
    tmp1_output.i21(tmp0_desc);
  };
  protoOf($serializer_21).v1x = function (encoder, value) {
    return this.m9e(encoder, value instanceof JWKKey ? value : THROW_CCE());
  };
  protoOf($serializer_21).w1x = function (decoder) {
    var tmp0_desc = this.l9e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp9_input = decoder.h21(tmp0_desc);
    if (tmp9_input.x21()) {
      tmp4_local0 = tmp9_input.v21(tmp0_desc, 0, JWKKeyJsonFieldSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.v21(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.y21(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.v21(tmp0_desc, 0, JWKKeyJsonFieldSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.v21(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.i21(tmp0_desc);
    return JWKKey_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_21).u1x = function () {
    return this.l9e_1;
  };
  protoOf($serializer_21).l29 = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(JWKKeyJsonFieldSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_21;
  function $serializer_getInstance_21() {
    if ($serializer_instance_21 == null)
      new $serializer_21();
    return $serializer_instance_21;
  }
  function JWKKey_init_$Init$_2(seen0, jwk, _keyId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_21().l9e_1);
    }
    Key_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.jwk = jwk;
    if (0 === (seen0 & 2))
      $this._keyId = null;
    else
      $this._keyId = _keyId;
    $this.b9a_1 = null;
    if (!($this.jwk == null)) {
      $this.b9a_1 = $this.jwk;
      $this.a9a_1 = JSON.parse(ensureNotNull($this.jwk));
    }
    return $this;
  }
  function JWKKey_init_$Create$(seen0, jwk, _keyId, serializationConstructorMarker) {
    return JWKKey_init_$Init$_2(seen0, jwk, _keyId, serializationConstructorMarker, objectCreate(protoOf(JWKKey)));
  }
  function JWKKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.v9e_1 = this$0;
    this.w9e_1 = $plaintext;
    this.x9e_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$signJwsAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey$signJwsAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(JWKKey$signJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.v9e_1.a6g(this.w9e_1, this.x9e_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$signJwsAsync$slambda).ha = function (completion) {
    return new JWKKey$signJwsAsync$slambda(this.v9e_1, this.w9e_1, this.x9e_1, completion);
  };
  function JWKKey$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new JWKKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.g9f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$getKeyIdAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey$getKeyIdAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(JWKKey$getKeyIdAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.g9f_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$getKeyIdAsync$slambda).ha = function (completion) {
    return new JWKKey$getKeyIdAsync$slambda(this.g9f_1, completion);
  };
  function JWKKey$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$initAsync$slambda(this$0, resultContinuation) {
    this.p9f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$initAsync$slambda).s1u = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey$initAsync$slambda).yb = function ($completion) {
    return this.s1u($completion);
  };
  protoOf(JWKKey$initAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.p9f_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$initAsync$slambda).ha = function (completion) {
    return new JWKKey$initAsync$slambda(this.p9f_1, completion);
  };
  function JWKKey$initAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$initAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.y9f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$exportPEMAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey$exportPEMAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(JWKKey$exportPEMAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.y9f_1.m6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$exportPEMAsync$slambda).ha = function (completion) {
    return new JWKKey$exportPEMAsync$slambda(this.y9f_1, completion);
  };
  function JWKKey$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.h9g_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$getThumbprintAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey$getThumbprintAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(JWKKey$getThumbprintAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.h9g_1.w6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$getThumbprintAsync$slambda).ha = function (completion) {
    return new JWKKey$getThumbprintAsync$slambda(this.h9g_1, completion);
  };
  function JWKKey$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$exportJWKPrettyAsync$slambda(this$0, resultContinuation) {
    this.q9g_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$exportJWKPrettyAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey$exportJWKPrettyAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(JWKKey$exportJWKPrettyAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.q9g_1.g6j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$exportJWKPrettyAsync$slambda).ha = function (completion) {
    return new JWKKey$exportJWKPrettyAsync$slambda(this.q9g_1, completion);
  };
  function JWKKey$exportJWKPrettyAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$exportJWKPrettyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.z9g_1 = this$0;
    this.a9h_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$verifyJwsAsync$slambda).r6j = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey$verifyJwsAsync$slambda).yb = function ($completion) {
    return this.r6j($completion);
  };
  protoOf(JWKKey$verifyJwsAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.z9g_1.s6j(this.a9h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$verifyJwsAsync$slambda).ha = function (completion) {
    return new JWKKey$verifyJwsAsync$slambda(this.z9g_1, this.a9h_1, completion);
  };
  function JWKKey$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new JWKKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.r6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.j9h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$exportJWKAsync$slambda).z6f = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey$exportJWKAsync$slambda).yb = function ($completion) {
    return this.z6f($completion);
  };
  protoOf(JWKKey$exportJWKAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.j9h_1.c6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$exportJWKAsync$slambda).ha = function (completion) {
    return new JWKKey$exportJWKAsync$slambda(this.j9h_1, completion);
  };
  function JWKKey$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.z6f($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.s9h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$exportJWKObjectAsync$slambda).m6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey$exportJWKObjectAsync$slambda).yb = function ($completion) {
    return this.m6k($completion);
  };
  protoOf(JWKKey$exportJWKObjectAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.s9h_1.n6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$exportJWKObjectAsync$slambda).ha = function (completion) {
    return new JWKKey$exportJWKObjectAsync$slambda(this.s9h_1, completion);
  };
  function JWKKey$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.m6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.b9i_1 = this$0;
    this.c9i_1 = $signed;
    this.d9i_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$verifyRawAsync$slambda).z6k = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey$verifyRawAsync$slambda).yb = function ($completion) {
    return this.z6k($completion);
  };
  protoOf(JWKKey$verifyRawAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.b9i_1.a6l(this.c9i_1, this.d9i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            this.l9_1 = 2;
            continue $sm;
          case 1:
            var unboxed = suspendResult.vo_1;
            suspendResult = new Result(unboxed);
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$verifyRawAsync$slambda).ha = function (completion) {
    return new JWKKey$verifyRawAsync$slambda(this.b9i_1, this.c9i_1, this.d9i_1, completion);
  };
  function JWKKey$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new JWKKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.z6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.m9i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$getPublicKeyRepresentationAsync$slambda).k6l = function ($completion) {
    var tmp = this.ha($completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey$getPublicKeyRepresentationAsync$slambda).yb = function ($completion) {
    return this.k6l($completion);
  };
  protoOf(JWKKey$getPublicKeyRepresentationAsync$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.m9i_1.l6l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JWKKey$getPublicKeyRepresentationAsync$slambda).ha = function (completion) {
    return new JWKKey$getPublicKeyRepresentationAsync$slambda(this.m9i_1, completion);
  };
  function JWKKey$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.k6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $initCOROUTINE$74(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v9i_1 = _this__u8e3s4;
  }
  protoOf($initCOROUTINE$74).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 10;
            if (!!(this.v9i_1.z99_1 == null)) {
              if (!(this.v9i_1.b9a_1 == null)) {
                this.l9_1 = 2;
                suspendResult = PromiseUtils_instance.y99(jose.importJWK(JSON.parse(ensureNotNull(this.v9i_1.b9a_1))), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (!(this.v9i_1.a9a_1 == null)) {
                  this.l9_1 = 1;
                  suspendResult = PromiseUtils_instance.y99(jose.importJWK(_get__internalJwk__um3bex(this.v9i_1)), this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.l9_1 = 3;
                  continue $sm;
                }
              }
            } else {
              this.l9_1 = 4;
              continue $sm;
            }

          case 1:
            this.w9i_1 = suspendResult;
            this.v9i_1.z99_1 = this.w9i_1;
            this.l9_1 = 3;
            continue $sm;
          case 2:
            this.x9i_1 = suspendResult;
            this.v9i_1.z99_1 = this.x9i_1;
            this.l9_1 = 3;
            continue $sm;
          case 3:
            this.l9_1 = 4;
            continue $sm;
          case 4:
            if (!!(this.v9i_1.a9a_1 == null)) {
              if (!(this.v9i_1.b9a_1 == null)) {
                this.v9i_1.a9a_1 = JSON.parse(ensureNotNull(this.v9i_1.b9a_1));
                if (_get__internalJwk__um3bex(this.v9i_1).kid == null) {
                  this.y9i_1 = _get__internalJwk__um3bex(this.v9i_1);
                  this.l9_1 = 6;
                  suspendResult = this.v9i_1.w6i(this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.l9_1 = 7;
                  continue $sm;
                }
              } else {
                this.l9_1 = 5;
                suspendResult = PromiseUtils_instance.y99(jose.exportJWK(_get__internalKey__um3le0(this.v9i_1)), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.l9_1 = 9;
              continue $sm;
            }

          case 5:
            var ARGUMENT = suspendResult;
            this.v9i_1.a9a_1 = ARGUMENT;
            if (this.v9i_1.jwk == null) {
              this.v9i_1.jwk = JSON.stringify(_get__internalJwk__um3bex(this.v9i_1));
            }

            this.l9_1 = 8;
            continue $sm;
          case 6:
            var ARGUMENT_0 = suspendResult;
            this.y9i_1.kid = ARGUMENT_0;
            this.l9_1 = 7;
            continue $sm;
          case 7:
            this.l9_1 = 8;
            continue $sm;
          case 8:
            this.l9_1 = 9;
            continue $sm;
          case 9:
            if (!(this.v9i_1.b9a_1 == null)) {
              this.v9i_1.b9a_1 = null;
            }

            return Unit_instance;
          case 10:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 10) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($initCOROUTINE$74)['<set-state>'] = protoOf($initCOROUTINE$74).s9;
  protoOf($initCOROUTINE$74)['<get-state>'] = protoOf($initCOROUTINE$74).t9;
  protoOf($initCOROUTINE$74)['<set-exceptionState>'] = protoOf($initCOROUTINE$74).u9;
  protoOf($initCOROUTINE$74)['<get-exceptionState>'] = protoOf($initCOROUTINE$74).v9;
  protoOf($initCOROUTINE$74)['<set-result>'] = protoOf($initCOROUTINE$74).w9;
  protoOf($initCOROUTINE$74)['<get-result>'] = protoOf($initCOROUTINE$74).x9;
  protoOf($initCOROUTINE$74)['<set-exception>'] = protoOf($initCOROUTINE$74).y9;
  protoOf($initCOROUTINE$74)['<get-exception>'] = protoOf($initCOROUTINE$74).z9;
  protoOf($initCOROUTINE$74)['<set-finallyPath>'] = protoOf($initCOROUTINE$74).aa;
  protoOf($initCOROUTINE$74)['<get-finallyPath>'] = protoOf($initCOROUTINE$74).ba;
  protoOf($initCOROUTINE$74)['<get-context>'] = protoOf($initCOROUTINE$74).r9;
  function $exportJWKObjectCOROUTINE$75(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h9j_1 = _this__u8e3s4;
  }
  protoOf($exportJWKObjectCOROUTINE$75).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.i9j_1 = Default_getInstance();
            this.l9_1 = 1;
            suspendResult = this.h9j_1.c6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = this.i9j_1.q4n(ARGUMENT);
            return get_jsonObject(ARGUMENT_0);
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($exportJWKObjectCOROUTINE$75)['<set-state>'] = protoOf($exportJWKObjectCOROUTINE$75).s9;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-state>'] = protoOf($exportJWKObjectCOROUTINE$75).t9;
  protoOf($exportJWKObjectCOROUTINE$75)['<set-exceptionState>'] = protoOf($exportJWKObjectCOROUTINE$75).u9;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-exceptionState>'] = protoOf($exportJWKObjectCOROUTINE$75).v9;
  protoOf($exportJWKObjectCOROUTINE$75)['<set-result>'] = protoOf($exportJWKObjectCOROUTINE$75).w9;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-result>'] = protoOf($exportJWKObjectCOROUTINE$75).x9;
  protoOf($exportJWKObjectCOROUTINE$75)['<set-exception>'] = protoOf($exportJWKObjectCOROUTINE$75).y9;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-exception>'] = protoOf($exportJWKObjectCOROUTINE$75).z9;
  protoOf($exportJWKObjectCOROUTINE$75)['<set-finallyPath>'] = protoOf($exportJWKObjectCOROUTINE$75).aa;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-finallyPath>'] = protoOf($exportJWKObjectCOROUTINE$75).ba;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-context>'] = protoOf($exportJWKObjectCOROUTINE$75).r9;
  function $exportPEMCOROUTINE$76(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r9j_1 = _this__u8e3s4;
  }
  protoOf($exportPEMCOROUTINE$76).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            if (this.r9j_1.hasPrivateKey) {
              this.l9_1 = 2;
              suspendResult = PromiseUtils_instance.y99(jose.exportPKCS8(_get__internalKey__um3le0(this.r9j_1)), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l9_1 = 1;
              suspendResult = PromiseUtils_instance.y99(jose.exportSPKI(_get__internalKey__um3le0(this.r9j_1)), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.s9j_1 = suspendResult;
            this.l9_1 = 3;
            continue $sm;
          case 2:
            this.s9j_1 = suspendResult;
            this.l9_1 = 3;
            continue $sm;
          case 3:
            return this.s9j_1;
          case 4:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 4) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($exportPEMCOROUTINE$76)['<set-state>'] = protoOf($exportPEMCOROUTINE$76).s9;
  protoOf($exportPEMCOROUTINE$76)['<get-state>'] = protoOf($exportPEMCOROUTINE$76).t9;
  protoOf($exportPEMCOROUTINE$76)['<set-exceptionState>'] = protoOf($exportPEMCOROUTINE$76).u9;
  protoOf($exportPEMCOROUTINE$76)['<get-exceptionState>'] = protoOf($exportPEMCOROUTINE$76).v9;
  protoOf($exportPEMCOROUTINE$76)['<set-result>'] = protoOf($exportPEMCOROUTINE$76).w9;
  protoOf($exportPEMCOROUTINE$76)['<get-result>'] = protoOf($exportPEMCOROUTINE$76).x9;
  protoOf($exportPEMCOROUTINE$76)['<set-exception>'] = protoOf($exportPEMCOROUTINE$76).y9;
  protoOf($exportPEMCOROUTINE$76)['<get-exception>'] = protoOf($exportPEMCOROUTINE$76).z9;
  protoOf($exportPEMCOROUTINE$76)['<set-finallyPath>'] = protoOf($exportPEMCOROUTINE$76).aa;
  protoOf($exportPEMCOROUTINE$76)['<get-finallyPath>'] = protoOf($exportPEMCOROUTINE$76).ba;
  protoOf($exportPEMCOROUTINE$76)['<get-context>'] = protoOf($exportPEMCOROUTINE$76).r9;
  function $signRawCOROUTINE$77(_this__u8e3s4, plaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b9k_1 = _this__u8e3s4;
    this.c9k_1 = plaintext;
  }
  protoOf($signRawCOROUTINE$77).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            if (!this.b9k_1.hasPrivateKey) {
              var message = 'No private key is attached to this key!';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }

            this.d9k_1 = crypto;
            var tmp_0 = this;
            tmp_0.e9k_1 = this.b9k_1.keyType.r2_1 === 0 ? null : 'sha256';
            this.l9_1 = 1;
            suspendResult = this.b9k_1.m6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.d9k_1.sign(this.e9k_1, this.c9k_1, ARGUMENT);
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($signRawCOROUTINE$77)['<set-state>'] = protoOf($signRawCOROUTINE$77).s9;
  protoOf($signRawCOROUTINE$77)['<get-state>'] = protoOf($signRawCOROUTINE$77).t9;
  protoOf($signRawCOROUTINE$77)['<set-exceptionState>'] = protoOf($signRawCOROUTINE$77).u9;
  protoOf($signRawCOROUTINE$77)['<get-exceptionState>'] = protoOf($signRawCOROUTINE$77).v9;
  protoOf($signRawCOROUTINE$77)['<set-result>'] = protoOf($signRawCOROUTINE$77).w9;
  protoOf($signRawCOROUTINE$77)['<get-result>'] = protoOf($signRawCOROUTINE$77).x9;
  protoOf($signRawCOROUTINE$77)['<set-exception>'] = protoOf($signRawCOROUTINE$77).y9;
  protoOf($signRawCOROUTINE$77)['<get-exception>'] = protoOf($signRawCOROUTINE$77).z9;
  protoOf($signRawCOROUTINE$77)['<set-finallyPath>'] = protoOf($signRawCOROUTINE$77).aa;
  protoOf($signRawCOROUTINE$77)['<get-finallyPath>'] = protoOf($signRawCOROUTINE$77).ba;
  protoOf($signRawCOROUTINE$77)['<get-context>'] = protoOf($signRawCOROUTINE$77).r9;
  function $verifyRawCOROUTINE$78(_this__u8e3s4, signed, detachedPlaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n9k_1 = _this__u8e3s4;
    this.o9k_1 = signed;
    this.p9k_1 = detachedPlaintext;
  }
  protoOf($verifyRawCOROUTINE$78).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 4;
            var tmp_0 = this;
            tmp_0.q9k_1 = this.n9k_1;
            this.r9k_1 = this.q9k_1;
            this.m9_1 = 3;
            var tmp_1 = this;
            tmp_1.t9k_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.u9k_1 = this.r9k_1;
            this.v9k_1 = this.u9k_1;
            this.w9k_1 = crypto;
            var tmp_3 = this;
            tmp_3.x9k_1 = this.v9k_1.keyType.r2_1 === 0 ? null : 'sha256';
            var tmp_4 = this;
            var tmp1_elvis_lhs = this.p9k_1;
            tmp_4.y9k_1 = tmp1_elvis_lhs == null ? this.o9k_1 : tmp1_elvis_lhs;
            this.l9_1 = 1;
            suspendResult = this.v9k_1.a9l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z9k_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.z9k_1.m6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var verified = this.w9k_1.verify(this.x9k_1, this.y9k_1, ARGUMENT, this.o9k_1);
            var tmp_5;
            if (verified) {
              tmp_5 = toByteArray_0('true');
            } else {
              throw IllegalArgumentException_init_$Create$('Signature verification failed');
            }

            var tmp1 = tmp_5;
            var tmp_6 = this;
            this.t9k_1;
            tmp_6.s9k_1 = _Result___init__impl__xyqfz8(tmp1);
            this.m9_1 = 4;
            this.l9_1 = 5;
            continue $sm;
          case 3:
            this.m9_1 = 4;
            var tmp_7 = this.o9_1;
            if (tmp_7 instanceof Error) {
              var e = this.o9_1;
              var tmp_8 = this;
              tmp_8.s9k_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.l9_1 = 5;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 4:
            throw this.o9_1;
          case 5:
            this.m9_1 = 4;
            return new Result(this.s9k_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m9_1 === 4) {
          throw e_0;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($verifyRawCOROUTINE$78)['<set-state>'] = protoOf($verifyRawCOROUTINE$78).s9;
  protoOf($verifyRawCOROUTINE$78)['<get-state>'] = protoOf($verifyRawCOROUTINE$78).t9;
  protoOf($verifyRawCOROUTINE$78)['<set-exceptionState>'] = protoOf($verifyRawCOROUTINE$78).u9;
  protoOf($verifyRawCOROUTINE$78)['<get-exceptionState>'] = protoOf($verifyRawCOROUTINE$78).v9;
  protoOf($verifyRawCOROUTINE$78)['<set-result>'] = protoOf($verifyRawCOROUTINE$78).w9;
  protoOf($verifyRawCOROUTINE$78)['<get-result>'] = protoOf($verifyRawCOROUTINE$78).x9;
  protoOf($verifyRawCOROUTINE$78)['<set-exception>'] = protoOf($verifyRawCOROUTINE$78).y9;
  protoOf($verifyRawCOROUTINE$78)['<get-exception>'] = protoOf($verifyRawCOROUTINE$78).z9;
  protoOf($verifyRawCOROUTINE$78)['<set-finallyPath>'] = protoOf($verifyRawCOROUTINE$78).aa;
  protoOf($verifyRawCOROUTINE$78)['<get-finallyPath>'] = protoOf($verifyRawCOROUTINE$78).ba;
  protoOf($verifyRawCOROUTINE$78)['<get-context>'] = protoOf($verifyRawCOROUTINE$78).r9;
  function $verifyJwsCOROUTINE$79(_this__u8e3s4, signedJws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j9l_1 = _this__u8e3s4;
    this.k9l_1 = signedJws;
  }
  protoOf($verifyJwsCOROUTINE$79).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            tmp_0.l9l_1 = this.j9l_1;
            this.m9l_1 = this.l9l_1;
            this.m9_1 = 2;
            var tmp_1 = this;
            tmp_1.o9l_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.p9l_1 = this.m9l_1;
            this.q9l_1 = this.p9l_1;
            this.r9l_1 = Default_getInstance();
            this.s9l_1 = ArrayUtils_instance;
            this.l9_1 = 1;
            suspendResult = PromiseUtils_instance.y99(jose.compactVerify(this.k9l_1, _get__internalKey__um3le0(this.q9l_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = ARGUMENT.payload;
            var ARGUMENT_1 = this.s9l_1.toByteArray(ARGUMENT_0);
            var ARGUMENT_2 = decodeToString(ARGUMENT_1);
            var ARGUMENT_3 = this.r9l_1.q4n(ARGUMENT_2);
            var tmp1 = get_jsonObject(ARGUMENT_3);
            var tmp_3 = this;
            this.o9l_1;
            tmp_3.n9l_1 = _Result___init__impl__xyqfz8(tmp1);
            this.m9_1 = 3;
            this.l9_1 = 4;
            continue $sm;
          case 2:
            this.m9_1 = 3;
            var tmp_4 = this.o9_1;
            if (tmp_4 instanceof Error) {
              var e = this.o9_1;
              var tmp_5 = this;
              tmp_5.n9l_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.l9_1 = 4;
              continue $sm;
            } else {
              throw this.o9_1;
            }

          case 3:
            throw this.o9_1;
          case 4:
            this.m9_1 = 3;
            return new Result(this.n9l_1);
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m9_1 === 3) {
          throw e_0;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($verifyJwsCOROUTINE$79)['<set-state>'] = protoOf($verifyJwsCOROUTINE$79).s9;
  protoOf($verifyJwsCOROUTINE$79)['<get-state>'] = protoOf($verifyJwsCOROUTINE$79).t9;
  protoOf($verifyJwsCOROUTINE$79)['<set-exceptionState>'] = protoOf($verifyJwsCOROUTINE$79).u9;
  protoOf($verifyJwsCOROUTINE$79)['<get-exceptionState>'] = protoOf($verifyJwsCOROUTINE$79).v9;
  protoOf($verifyJwsCOROUTINE$79)['<set-result>'] = protoOf($verifyJwsCOROUTINE$79).w9;
  protoOf($verifyJwsCOROUTINE$79)['<get-result>'] = protoOf($verifyJwsCOROUTINE$79).x9;
  protoOf($verifyJwsCOROUTINE$79)['<set-exception>'] = protoOf($verifyJwsCOROUTINE$79).y9;
  protoOf($verifyJwsCOROUTINE$79)['<get-exception>'] = protoOf($verifyJwsCOROUTINE$79).z9;
  protoOf($verifyJwsCOROUTINE$79)['<set-finallyPath>'] = protoOf($verifyJwsCOROUTINE$79).aa;
  protoOf($verifyJwsCOROUTINE$79)['<get-finallyPath>'] = protoOf($verifyJwsCOROUTINE$79).ba;
  protoOf($verifyJwsCOROUTINE$79)['<get-context>'] = protoOf($verifyJwsCOROUTINE$79).r9;
  function $getPublicKeyCOROUTINE$80(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b9m_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyCOROUTINE$80).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            var tmp_0 = this;
            var this_0 = JSON.parse(JSON.stringify(_get__internalJwk__um3bex(this.b9m_1)));
            this_0.d = undefined;
            this_0.p = undefined;
            this_0.q = undefined;
            this_0.dp = undefined;
            this_0.dq = undefined;
            this_0.qi = undefined;
            this_0.k = undefined;
            tmp_0.c9m_1 = jwkKeyUsingJWK(this_0);
            this.d9m_1 = this.c9m_1;
            var tmp_1 = this;
            tmp_1.e9m_1 = this.d9m_1;
            this.f9m_1 = this.e9m_1;
            this.l9_1 = 1;
            suspendResult = this.f9m_1.g6h(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.d9m_1;
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getPublicKeyCOROUTINE$80)['<set-state>'] = protoOf($getPublicKeyCOROUTINE$80).s9;
  protoOf($getPublicKeyCOROUTINE$80)['<get-state>'] = protoOf($getPublicKeyCOROUTINE$80).t9;
  protoOf($getPublicKeyCOROUTINE$80)['<set-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$80).u9;
  protoOf($getPublicKeyCOROUTINE$80)['<get-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$80).v9;
  protoOf($getPublicKeyCOROUTINE$80)['<set-result>'] = protoOf($getPublicKeyCOROUTINE$80).w9;
  protoOf($getPublicKeyCOROUTINE$80)['<get-result>'] = protoOf($getPublicKeyCOROUTINE$80).x9;
  protoOf($getPublicKeyCOROUTINE$80)['<set-exception>'] = protoOf($getPublicKeyCOROUTINE$80).y9;
  protoOf($getPublicKeyCOROUTINE$80)['<get-exception>'] = protoOf($getPublicKeyCOROUTINE$80).z9;
  protoOf($getPublicKeyCOROUTINE$80)['<set-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$80).aa;
  protoOf($getPublicKeyCOROUTINE$80)['<get-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$80).ba;
  protoOf($getPublicKeyCOROUTINE$80)['<get-context>'] = protoOf($getPublicKeyCOROUTINE$80).r9;
  function $getPublicKeyRepresentationCOROUTINE$81(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o9m_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyRepresentationCOROUTINE$81).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.l9_1 = 1;
            suspendResult = this.o9m_1.a9l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.p9m_1 = suspendResult;
            this.l9_1 = 2;
            suspendResult = this.p9m_1.m6i(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return toByteArray_0(ARGUMENT);
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<set-state>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).s9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-state>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).t9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<set-exceptionState>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).u9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-exceptionState>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).v9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<set-result>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).w9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-result>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).x9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<set-exception>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).y9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-exception>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).z9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<set-finallyPath>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).aa;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-finallyPath>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).ba;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-context>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).r9;
  function $getMetaCOROUTINE$82(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y9m_1 = _this__u8e3s4;
  }
  protoOf($getMetaCOROUTINE$82).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 2;
            this.l9_1 = 1;
            suspendResult = this.y9m_1.w6g(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new JwkKeyMeta(ARGUMENT);
          case 2:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 2) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getMetaCOROUTINE$82)['<set-state>'] = protoOf($getMetaCOROUTINE$82).s9;
  protoOf($getMetaCOROUTINE$82)['<get-state>'] = protoOf($getMetaCOROUTINE$82).t9;
  protoOf($getMetaCOROUTINE$82)['<set-exceptionState>'] = protoOf($getMetaCOROUTINE$82).u9;
  protoOf($getMetaCOROUTINE$82)['<get-exceptionState>'] = protoOf($getMetaCOROUTINE$82).v9;
  protoOf($getMetaCOROUTINE$82)['<set-result>'] = protoOf($getMetaCOROUTINE$82).w9;
  protoOf($getMetaCOROUTINE$82)['<get-result>'] = protoOf($getMetaCOROUTINE$82).x9;
  protoOf($getMetaCOROUTINE$82)['<set-exception>'] = protoOf($getMetaCOROUTINE$82).y9;
  protoOf($getMetaCOROUTINE$82)['<get-exception>'] = protoOf($getMetaCOROUTINE$82).z9;
  protoOf($getMetaCOROUTINE$82)['<set-finallyPath>'] = protoOf($getMetaCOROUTINE$82).aa;
  protoOf($getMetaCOROUTINE$82)['<get-finallyPath>'] = protoOf($getMetaCOROUTINE$82).ba;
  protoOf($getMetaCOROUTINE$82)['<get-context>'] = protoOf($getMetaCOROUTINE$82).r9;
  function $getKeyIdCOROUTINE$83(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h9n_1 = _this__u8e3s4;
  }
  protoOf($getKeyIdCOROUTINE$83).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.h9n_1._keyId;
            tmp_0.i9n_1 = tmp0_elvis_lhs == null ? _get__internalJwk__um3bex(this.h9n_1).kid : tmp0_elvis_lhs;
            if (this.i9n_1 == null) {
              this.l9_1 = 1;
              suspendResult = this.h9n_1.w6i(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.j9n_1 = this.i9n_1;
              this.l9_1 = 2;
              continue $sm;
            }

          case 1:
            this.j9n_1 = suspendResult;
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return this.j9n_1;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getKeyIdCOROUTINE$83)['<set-state>'] = protoOf($getKeyIdCOROUTINE$83).s9;
  protoOf($getKeyIdCOROUTINE$83)['<get-state>'] = protoOf($getKeyIdCOROUTINE$83).t9;
  protoOf($getKeyIdCOROUTINE$83)['<set-exceptionState>'] = protoOf($getKeyIdCOROUTINE$83).u9;
  protoOf($getKeyIdCOROUTINE$83)['<get-exceptionState>'] = protoOf($getKeyIdCOROUTINE$83).v9;
  protoOf($getKeyIdCOROUTINE$83)['<set-result>'] = protoOf($getKeyIdCOROUTINE$83).w9;
  protoOf($getKeyIdCOROUTINE$83)['<get-result>'] = protoOf($getKeyIdCOROUTINE$83).x9;
  protoOf($getKeyIdCOROUTINE$83)['<set-exception>'] = protoOf($getKeyIdCOROUTINE$83).y9;
  protoOf($getKeyIdCOROUTINE$83)['<get-exception>'] = protoOf($getKeyIdCOROUTINE$83).z9;
  protoOf($getKeyIdCOROUTINE$83)['<set-finallyPath>'] = protoOf($getKeyIdCOROUTINE$83).aa;
  protoOf($getKeyIdCOROUTINE$83)['<get-finallyPath>'] = protoOf($getKeyIdCOROUTINE$83).ba;
  protoOf($getKeyIdCOROUTINE$83)['<get-context>'] = protoOf($getKeyIdCOROUTINE$83).r9;
  function $getThumbprintCOROUTINE$84(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s9n_1 = _this__u8e3s4;
  }
  protoOf($getThumbprintCOROUTINE$84).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.t9n_1 = PromiseUtils_instance;
            this.u9n_1 = jose;
            this.v9n_1 = JSON;
            this.l9_1 = 1;
            suspendResult = this.s9n_1.c6k(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w9n_1 = suspendResult;
            this.x9n_1 = this.v9n_1.parse(this.w9n_1);
            this.y9n_1 = this.u9n_1.calculateJwkThumbprint(this.x9n_1);
            this.l9_1 = 2;
            suspendResult = this.t9n_1.y99(this.y9n_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf($getThumbprintCOROUTINE$84)['<set-state>'] = protoOf($getThumbprintCOROUTINE$84).s9;
  protoOf($getThumbprintCOROUTINE$84)['<get-state>'] = protoOf($getThumbprintCOROUTINE$84).t9;
  protoOf($getThumbprintCOROUTINE$84)['<set-exceptionState>'] = protoOf($getThumbprintCOROUTINE$84).u9;
  protoOf($getThumbprintCOROUTINE$84)['<get-exceptionState>'] = protoOf($getThumbprintCOROUTINE$84).v9;
  protoOf($getThumbprintCOROUTINE$84)['<set-result>'] = protoOf($getThumbprintCOROUTINE$84).w9;
  protoOf($getThumbprintCOROUTINE$84)['<get-result>'] = protoOf($getThumbprintCOROUTINE$84).x9;
  protoOf($getThumbprintCOROUTINE$84)['<set-exception>'] = protoOf($getThumbprintCOROUTINE$84).y9;
  protoOf($getThumbprintCOROUTINE$84)['<get-exception>'] = protoOf($getThumbprintCOROUTINE$84).z9;
  protoOf($getThumbprintCOROUTINE$84)['<set-finallyPath>'] = protoOf($getThumbprintCOROUTINE$84).aa;
  protoOf($getThumbprintCOROUTINE$84)['<get-finallyPath>'] = protoOf($getThumbprintCOROUTINE$84).ba;
  protoOf($getThumbprintCOROUTINE$84)['<get-context>'] = protoOf($getThumbprintCOROUTINE$84).r9;
  function JWKKey(jwk, _keyId) {
    _keyId = _keyId === VOID ? null : _keyId;
    Key.call(this);
    this.jwk = jwk;
    this._keyId = _keyId;
    this.b9a_1 = null;
    if (!(this.jwk == null)) {
      this.b9a_1 = this.jwk;
      this.a9a_1 = JSON.parse(ensureNotNull(this.jwk));
    }
  }
  protoOf(JWKKey).z9n = function (_set____db54di) {
    this.jwk = _set____db54di;
  };
  protoOf(JWKKey).a9o = function () {
    return this.jwk;
  };
  protoOf(JWKKey).b9o = function () {
    return this._keyId;
  };
  protoOf(JWKKey).g6h = function ($completion) {
    var tmp = new $initCOROUTINE$74(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey).c6k = function ($completion) {
    return JSON.stringify(_get__internalJwk__um3bex(this));
  };
  protoOf(JWKKey).g6j = function ($completion) {
    return JSON.stringify(_get__internalJwk__um3bex(this), null, 4);
  };
  protoOf(JWKKey).n6k = function ($completion) {
    var tmp = new $exportJWKObjectCOROUTINE$75(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey).m6i = function ($completion) {
    var tmp = new $exportPEMCOROUTINE$76(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey).l75 = function (plaintext, $completion) {
    var tmp = new $signRawCOROUTINE$77(this, plaintext, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey).m6g = function (plaintext, $completion) {
    return this.l75(plaintext, $completion);
  };
  protoOf(JWKKey).a6g = function (plaintext, headers, $completion) {
    // Inline function 'kotlin.check' call
    if (!this.hasPrivateKey) {
      var message = 'No private key is attached to this key!';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = headers.x();
    // Inline function 'kotlin.collections.map' call
    var this_1 = copyToArray(this_0);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_1.length);
    var inductionVariable = 0;
    var last = this_1.length;
    while (inductionVariable < last) {
      var item = this_1[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.toPair' call
      var tmp$ret$4 = new Pair(item.y(), item.z());
      destination.n(tmp$ret$4);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var headerEntries = copyToArray(destination);
    return PromiseUtils_instance.y99((new jose.CompactSign(new Uint8Array(toTypedArray(plaintext)))).setProtectedHeader(json_0(arrayConcat([[to('alg', JwsUtils_instance.jwsAlg(this.keyType))], headerEntries]))).sign(_get__internalKey__um3le0(this)), $completion);
  };
  protoOf(JWKKey).a6l = function (signed, detachedPlaintext, $completion) {
    var tmp = new $verifyRawCOROUTINE$78(this, signed, detachedPlaintext, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey).s6j = function (signedJws, $completion) {
    var tmp = new $verifyJwsCOROUTINE$79(this, signedJws, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    var tmp_0 = tmp.da();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey).a9l = function ($completion) {
    var tmp = new $getPublicKeyCOROUTINE$80(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey).r6h = function ($completion) {
    return this.a9l($completion);
  };
  protoOf(JWKKey).l6l = function ($completion) {
    var tmp = new $getPublicKeyRepresentationCOROUTINE$81(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey).c9o = function ($completion) {
    var tmp = new $getMetaCOROUTINE$82(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey).c6i = function ($completion) {
    return this.c9o($completion);
  };
  protoOf(JWKKey).n6f = function ($completion) {
    return true;
  };
  protoOf(JWKKey).a6m = function () {
    // Inline function 'kotlin.js.asDynamic' call
    var k = _get__internalKey__um3le0(this);
    var tmp;
    if (k.asymmetricKeyType != undefined) {
      var tmp0_subject = k.asymmetricKeyType;
      var tmp_0;
      if (tmp0_subject == 'rsa' || tmp0_subject == 'rsa-pss') {
        tmp_0 = KeyType_RSA_getInstance();
      } else if (tmp0_subject == 'ec') {
        var tmp1_subject = k.asymmetricKeyDetails.namedCurve;
        var tmp_1;
        if (tmp1_subject == 'prime256v1') {
          tmp_1 = KeyType_secp256r1_getInstance();
        } else if (tmp1_subject == 'secp256k1') {
          tmp_1 = KeyType_secp256k1_getInstance();
        } else {
          var reason = 'Unsupported EC curve: ' + k.asymmetricKeyDetails.namedCurve;
          throw new NotImplementedError('An operation is not implemented: ' + reason);
        }
        tmp_0 = tmp_1;
      } else if (tmp0_subject == 'ed25519') {
        tmp_0 = KeyType_Ed25519_getInstance();
      } else if (tmp0_subject == 'x448' || (tmp0_subject == 'x25519' || tmp0_subject == 'ed448')) {
        var reason_0 = 'Unsupported asymmetricKeyType: ' + k.asymmetricKeyType;
        throw new NotImplementedError('An operation is not implemented: ' + reason_0);
      } else {
        throw IllegalArgumentException_init_$Create$('Unknown asymmetricKeyType: ' + k.asymmetricKeyType);
      }
      tmp = tmp_0;
    } else if (k.algorithm != undefined) {
      var tmp_2 = k.algorithm.name;
      var tmp_3;
      switch ((!(tmp_2 == null) ? typeof tmp_2 === 'string' : false) ? tmp_2 : THROW_CCE()) {
        case 'RSASSA-PKCS1-v1_5':
        case 'RSA-PSS':
        case 'RSA-OAEP':
          tmp_3 = KeyType_RSA_getInstance();
          break;
        case 'ECDSA':
        case 'ECDH':
          tmp_3 = KeyType_secp256r1_getInstance();
          break;
        default:
          throw IllegalArgumentException_init_$Create$('Unsupported algorithm for CryptoKey (web): ' + k.algorithm.name);
      }
      tmp = tmp_3;
    } else {
      throw IllegalArgumentException_init_$Create$('Unable to determine type of KeyLike');
    }
    return tmp;
  };
  protoOf(JWKKey).b6m = function () {
    // Inline function 'kotlin.check' call
    if (!!(this.z99_1 == null)) {
      var message = '_internalKey of JWKKey.js.kt is not initialized (tried to to private key operation?) - has init() be called on key?';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.run' call
    return _get__internalKey__um3le0(this).type === 'private';
  };
  protoOf(JWKKey).w6g = function ($completion) {
    var tmp = new $getKeyIdCOROUTINE$83(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey).w6i = function ($completion) {
    var tmp = new $getThumbprintCOROUTINE$84(this, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JWKKey).d6m = function (plaintext, headers) {
    var tmp = JWKKey$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).f6m = function () {
    var tmp = JWKKey$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).g6m = function () {
    var tmp = JWKKey$initAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).j6m = function () {
    var tmp = JWKKey$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).k6m = function () {
    var tmp = JWKKey$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).l6m = function () {
    var tmp = JWKKey$exportJWKPrettyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).m6m = function (signedJws) {
    var tmp = JWKKey$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).n6m = function () {
    var tmp = JWKKey$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).o6m = function () {
    var tmp = JWKKey$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).p6m = function (signed, detachedPlaintext) {
    var tmp = JWKKey$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).q6m = function () {
    var tmp = JWKKey$getPublicKeyRepresentationAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function ArrayUtils() {
  }
  protoOf(ArrayUtils).toByteArray = function (_this__u8e3s4) {
    var byteArray = new Int8Array(_this__u8e3s4.length);
    // Inline function 'kotlin.repeat' call
    var times = _this__u8e3s4.length;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        byteArray[index] = _this__u8e3s4[index];
      }
       while (inductionVariable < times);
    return byteArray;
  };
  var ArrayUtils_instance;
  function ArrayUtils_getInstance() {
    return ArrayUtils_instance;
  }
  function sha256WithRsa(privateKeyAsPem, data) {
    // Inline function 'kotlin.TODO' call
    var reason = 'sha256WithRsa signature (e.g. for OCI Keys) is not yet supported for JS.';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  }
  function PromiseUtils$await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.ga(tmp$ret$0);
      return Unit_instance;
    };
  }
  function PromiseUtils$await$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.ga(tmp$ret$0);
      return Unit_instance;
    };
  }
  function PromiseUtils() {
  }
  protoOf(PromiseUtils).y99 = function (promise, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = PromiseUtils$await$lambda(safe);
    promise.then(tmp, PromiseUtils$await$lambda_0(safe));
    return safe.pa();
  };
  var PromiseUtils_instance;
  function PromiseUtils_getInstance() {
    return PromiseUtils_instance;
  }
  //region block: post-declaration
  defineProp(protoOf(Key), 'keyType', function () {
    return this.a6m();
  });
  defineProp(protoOf(Key), 'hasPrivateKey', function () {
    return this.b6m();
  });
  protoOf($serializer).m29 = typeParametersSerializers;
  protoOf($serializer_0).m29 = typeParametersSerializers;
  protoOf($serializer_1).m29 = typeParametersSerializers;
  protoOf($serializer_2).m29 = typeParametersSerializers;
  protoOf($serializer_3).m29 = typeParametersSerializers;
  protoOf($serializer_4).m29 = typeParametersSerializers;
  defineProp(protoOf(KeyType), 'name', protoOf(KeyType).s2);
  defineProp(protoOf(KeyType), 'ordinal', protoOf(KeyType).t2);
  defineProp(protoOf(KeyCategory), 'name', protoOf(KeyCategory).s2);
  defineProp(protoOf(KeyCategory), 'ordinal', protoOf(KeyCategory).t2);
  protoOf($serializer_5).m29 = typeParametersSerializers;
  protoOf($serializer_6).m29 = typeParametersSerializers;
  protoOf($serializer_7).m29 = typeParametersSerializers;
  defineProp(protoOf(AWSKeyRestAPI), 'keyType', function () {
    return this.a6m();
  }, function (value) {
    this.w7e(value);
  });
  protoOf($serializer_8).m29 = typeParametersSerializers;
  protoOf($serializer_9).m29 = typeParametersSerializers;
  protoOf($serializer_10).m29 = typeParametersSerializers;
  protoOf($serializer_11).m29 = typeParametersSerializers;
  protoOf($serializer_12).m29 = typeParametersSerializers;
  defineProp(protoOf(AzureKey), 'keyType', function () {
    return this.a6m();
  }, function (value) {
    this.w7e(value);
  });
  protoOf($serializer_13).m29 = typeParametersSerializers;
  protoOf($serializer_14).m29 = typeParametersSerializers;
  protoOf($serializer_15).m29 = typeParametersSerializers;
  defineProp(protoOf(OCIKeyRestApi), 'keyType', function () {
    return this.a6m();
  }, function (value) {
    this.w7e(value);
  });
  protoOf($serializer_16).m29 = typeParametersSerializers;
  protoOf($serializer_17).m29 = typeParametersSerializers;
  defineProp(protoOf(TSEKey), 'keyType', function () {
    return this.a6m();
  }, function (value) {
    this.w7e(value);
  });
  protoOf($serializer_18).m29 = typeParametersSerializers;
  protoOf($serializer_19).m29 = typeParametersSerializers;
  protoOf($serializer_20).m29 = typeParametersSerializers;
  defineProp(protoOf(UVarInt), 'length', protoOf(UVarInt).a);
  protoOf(JsJWKKeyCreator).generate$default = generate$default;
  protoOf(JsJWKKeyCreator).importRawPublicKey$default = importRawPublicKey$default;
  protoOf(JsJWKKeyCreator).generateAsync$default = generateAsync$default;
  protoOf(JsJWKKeyCreator).importRawPublicKeyAsync$default = importRawPublicKeyAsync$default;
  protoOf(Companion_26).generate$default = generate$default;
  protoOf(Companion_26).importRawPublicKey$default = importRawPublicKey$default;
  protoOf(Companion_26).generateAsync$default = generateAsync$default;
  protoOf(Companion_26).importRawPublicKeyAsync$default = importRawPublicKeyAsync$default;
  protoOf($serializer_21).m29 = typeParametersSerializers;
  //endregion
  //region block: init
  EccUtils_instance = new EccUtils();
  Companion_instance_5 = new Companion_0();
  Companion_instance_8 = new Companion_3();
  Companion_instance_9 = new Companion_4();
  Companion_instance_10 = new Companion_5();
  Companion_instance_11 = new Companion_6();
  Companion_instance_12 = new Companion_7();
  KeyUtils_instance = new KeyUtils();
  Companion_instance_15 = new Companion_10();
  Companion_instance_17 = new Companion_12();
  Companion_instance_19 = new Companion_14();
  Companion_instance_20 = new Companion_15();
  AzureKeyFunctions_instance = new AzureKeyFunctions();
  Companion_instance_22 = new Companion_17();
  Companion_instance_23 = new Companion_18();
  Companion_instance_27 = new Companion_22();
  JsonCanonicalizationUtils_instance = new JsonCanonicalizationUtils();
  Companion_instance_28 = new Companion_23();
  JwsUtils_instance = new JwsUtils();
  MultiBaseUtils_instance = new MultiBaseUtils();
  JsJWKKeyCreator_instance = new JsJWKKeyCreator();
  Companion_instance_31 = new Companion_26();
  ArrayUtils_instance = new ArrayUtils();
  PromiseUtils_instance = new PromiseUtils();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    $id$walt$crypto$keys.Key = Key;
    defineProp($id$walt$crypto$keys.Key, 'Companion', Companion_getInstance_4);
    $id$walt$crypto$keys.Key.$exportJWKPrettyCOROUTINE$0 = $exportJWKPrettyCOROUTINE$0;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    defineProp($id$walt$crypto$keys, 'KeySerialization', KeySerialization_getInstance);
    KeySerialization.prototype.$deserializeKeyCOROUTINE$2 = $deserializeKeyCOROUTINE$2;
    KeySerialization.prototype.$deserializeKeyObjectCOROUTINE$3 = $deserializeKeyObjectCOROUTINE$3;
    KeySerialization.prototype.$deserializeJWTKeyCOROUTINE$4 = $deserializeJWTKeyCOROUTINE$4;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    $id$walt$crypto$keys.KeyType = KeyType;
    $id$walt$crypto$keys.KeyType.values = values;
    $id$walt$crypto$keys.KeyType.valueOf = valueOf;
    defineProp($id$walt$crypto$keys.KeyType, 'Ed25519', KeyType_Ed25519_getInstance);
    defineProp($id$walt$crypto$keys.KeyType, 'secp256k1', KeyType_secp256k1_getInstance);
    defineProp($id$walt$crypto$keys.KeyType, 'secp256r1', KeyType_secp256r1_getInstance);
    defineProp($id$walt$crypto$keys.KeyType, 'RSA', KeyType_RSA_getInstance);
    defineProp($id$walt$crypto$keys.KeyType, 'Companion', Companion_getInstance_13);
    $id$walt$crypto$keys.KeyCategory = KeyCategory;
    $id$walt$crypto$keys.KeyCategory.values = values_0;
    $id$walt$crypto$keys.KeyCategory.valueOf = valueOf_0;
    defineProp($id$walt$crypto$keys.KeyCategory, 'RSA', KeyCategory_RSA_getInstance);
    defineProp($id$walt$crypto$keys.KeyCategory, 'ECC', KeyCategory_ECC_getInstance);
    defineProp($id$walt$crypto$keys.KeyCategory, 'EdDSA', KeyCategory_EdDSA_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$aws = $id$walt$crypto$keys.aws || ($id$walt$crypto$keys.aws = {});
    $id$walt$crypto$keys$aws.AWSAuth = AWSAuth;
    defineProp($id$walt$crypto$keys$aws.AWSAuth, 'Companion', Companion_getInstance_14);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$aws = $id$walt$crypto$keys.aws || ($id$walt$crypto$keys.aws = {});
    $id$walt$crypto$keys$aws.AWSKeyRestAPI = AWSKeyRestAPI;
    defineProp($id$walt$crypto$keys$aws.AWSKeyRestAPI, 'Companion', Companion_getInstance_16);
    Companion_11.prototype.$authAccessCOROUTINE$13 = $authAccessCOROUTINE$13;
    Companion_11.prototype.$getAccessCOROUTINE$14 = $getAccessCOROUTINE$14;
    Companion_11.prototype.$getIMDSv2TokenCOROUTINE$15 = $getIMDSv2TokenCOROUTINE$15;
    Companion_11.prototype.$getRoleNameCOROUTINE$16 = $getRoleNameCOROUTINE$16;
    Companion_11.prototype.$getTemporaryCredentialsCOROUTINE$17 = $getTemporaryCredentialsCOROUTINE$17;
    Companion_11.prototype.$getPublicKeyCOROUTINE$18 = $getPublicKeyCOROUTINE$18;
    Companion_11.prototype.$generateCOROUTINE$20 = $generateCOROUTINE$20;
    $id$walt$crypto$keys$aws.AWSKeyRestAPI.$getKeyIdCOROUTINE$5 = $getKeyIdCOROUTINE$5;
    $id$walt$crypto$keys$aws.AWSKeyRestAPI.$signRawCOROUTINE$6 = $signRawCOROUTINE$6;
    $id$walt$crypto$keys$aws.AWSKeyRestAPI.$signJwsCOROUTINE$7 = $signJwsCOROUTINE$7;
    $id$walt$crypto$keys$aws.AWSKeyRestAPI.$verifyRawCOROUTINE$8 = $verifyRawCOROUTINE$8;
    $id$walt$crypto$keys$aws.AWSKeyRestAPI.$verifyJwsCOROUTINE$9 = $verifyJwsCOROUTINE$9;
    $id$walt$crypto$keys$aws.AWSKeyRestAPI.$getPublicKeyCOROUTINE$10 = $getPublicKeyCOROUTINE$10;
    $id$walt$crypto$keys$aws.AWSKeyRestAPI.$getMetaCOROUTINE$11 = $getMetaCOROUTINE$11;
    $id$walt$crypto$keys$aws.AWSKeyRestAPI.$deleteKeyCOROUTINE$12 = $deleteKeyCOROUTINE$12;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$azure = $id$walt$crypto$keys.azure || ($id$walt$crypto$keys.azure = {});
    $id$walt$crypto$keys$azure.AzureAuth = AzureAuth;
    defineProp($id$walt$crypto$keys$azure.AzureAuth, 'Companion', Companion_getInstance_17);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$azure = $id$walt$crypto$keys.azure || ($id$walt$crypto$keys.azure = {});
    $id$walt$crypto$keys$azure.AzureKey = AzureKey;
    $id$walt$crypto$keys$azure.AzureKey.KeyCreateRequest = KeyCreateRequest;
    defineProp($id$walt$crypto$keys$azure.AzureKey.KeyCreateRequest, 'Companion', Companion_getInstance_18);
    defineProp($id$walt$crypto$keys$azure.AzureKey, 'AzureKeyFunctions', AzureKeyFunctions_getInstance);
    AzureKeyFunctions.prototype.ParsedAzurePublicKey = ParsedAzurePublicKey;
    AzureKeyFunctions.prototype.AzureTokenResponse = AzureTokenResponse;
    defineProp(AzureKeyFunctions.prototype.AzureTokenResponse, 'Companion', Companion_getInstance_19);
    AzureKeyFunctions.prototype.AzureTokenResponseParsed = AzureTokenResponseParsed;
    defineProp(AzureKeyFunctions.prototype.AzureTokenResponseParsed, 'Companion', Companion_getInstance_20);
    AzureKeyFunctions.prototype.$fetchAccessTokenCOROUTINE$34 = $fetchAccessTokenCOROUTINE$34;
    defineProp($id$walt$crypto$keys$azure.AzureKey, 'Companion', Companion_getInstance_21);
    Companion_16.prototype.$generateCOROUTINE$36 = $generateCOROUTINE$36;
    $id$walt$crypto$keys$azure.AzureKey.$fetchAndUpdatePublicKeyCOROUTINE$21 = $fetchAndUpdatePublicKeyCOROUTINE$21;
    $id$walt$crypto$keys$azure.AzureKey.$updateAccessTokenCOROUTINE$22 = $updateAccessTokenCOROUTINE$22;
    $id$walt$crypto$keys$azure.AzureKey.$ensureAccessTokenValidCOROUTINE$23 = $ensureAccessTokenValidCOROUTINE$23;
    $id$walt$crypto$keys$azure.AzureKey.$initCOROUTINE$24 = $initCOROUTINE$24;
    $id$walt$crypto$keys$azure.AzureKey.$signRawAzureCOROUTINE$25 = $signRawAzureCOROUTINE$25;
    $id$walt$crypto$keys$azure.AzureKey.$signJwsCOROUTINE$26 = $signJwsCOROUTINE$26;
    $id$walt$crypto$keys$azure.AzureKey.$verifyRawCOROUTINE$27 = $verifyRawCOROUTINE$27;
    $id$walt$crypto$keys$azure.AzureKey.$verifyJwsCOROUTINE$28 = $verifyJwsCOROUTINE$28;
    $id$walt$crypto$keys$azure.AzureKey.$getPublicKeyRepresentationCOROUTINE$29 = $getPublicKeyRepresentationCOROUTINE$29;
    $id$walt$crypto$keys$azure.AzureKey.$getMetaCOROUTINE$30 = $getMetaCOROUTINE$30;
    $id$walt$crypto$keys$azure.AzureKey.$deleteKeyCOROUTINE$31 = $deleteKeyCOROUTINE$31;
    $id$walt$crypto$keys$azure.AzureKey.$getPublicKeyFromAzureKmsCOROUTINE$32 = $getPublicKeyFromAzureKmsCOROUTINE$32;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$jwk = $id$walt$crypto$keys.jwk || ($id$walt$crypto$keys.jwk = {});
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$oci = $id$walt$crypto$keys.oci || ($id$walt$crypto$keys.oci = {});
    $id$walt$crypto$keys$oci.OCIKeyMetadata = OCIKeyMetadata;
    defineProp($id$walt$crypto$keys$oci.OCIKeyMetadata, 'Companion', Companion_getInstance_23);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$oci = $id$walt$crypto$keys.oci || ($id$walt$crypto$keys.oci = {});
    $id$walt$crypto$keys$oci.OCIKeyRestApi = OCIKeyRestApi;
    defineProp($id$walt$crypto$keys$oci.OCIKeyRestApi, 'Companion', Companion_getInstance_24);
    $id$walt$crypto$keys$oci.OCIKeyRestApi.$getKeyIdCOROUTINE$38 = $getKeyIdCOROUTINE$38;
    $id$walt$crypto$keys$oci.OCIKeyRestApi.$signJwsCOROUTINE$39 = $signJwsCOROUTINE$39;
    $id$walt$crypto$keys$oci.OCIKeyRestApi.$verifyRawCOROUTINE$40 = $verifyRawCOROUTINE$40;
    $id$walt$crypto$keys$oci.OCIKeyRestApi.$verifyJwsCOROUTINE$41 = $verifyJwsCOROUTINE$41;
    $id$walt$crypto$keys$oci.OCIKeyRestApi.$getPublicKeyCOROUTINE$42 = $getPublicKeyCOROUTINE$42;
    $id$walt$crypto$keys$oci.OCIKeyRestApi.$getMetaCOROUTINE$43 = $getMetaCOROUTINE$43;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$tse = $id$walt$crypto$keys.tse || ($id$walt$crypto$keys.tse = {});
    $id$walt$crypto$keys$tse.TSEAuth = TSEAuth;
    defineProp($id$walt$crypto$keys$tse.TSEAuth, 'Companion', Companion_getInstance_25);
    $id$walt$crypto$keys$tse.TSEAuth.$getLoginTokenCOROUTINE$52 = $getLoginTokenCOROUTINE$52;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$tse = $id$walt$crypto$keys.tse || ($id$walt$crypto$keys.tse = {});
    $id$walt$crypto$keys$tse.TSEKey = TSEKey;
    $id$walt$crypto$keys$tse.TSEKey.httpRequest$default = httpRequest$default;
    defineProp($id$walt$crypto$keys$tse.TSEKey, 'Companion', Companion_getInstance_26);
    Companion_21.prototype.$tseJsonDataBodyCOROUTINE$67 = $tseJsonDataBodyCOROUTINE$67;
    Companion_21.prototype.$generateCOROUTINE$68 = $generateCOROUTINE$68;
    $id$walt$crypto$keys$tse.TSEKey.$initCOROUTINE$54 = $initCOROUTINE$54;
    $id$walt$crypto$keys$tse.TSEKey.$getKeyIdCOROUTINE$58 = $getKeyIdCOROUTINE$58;
    $id$walt$crypto$keys$tse.TSEKey.$signRawCOROUTINE$59 = $signRawCOROUTINE$59;
    $id$walt$crypto$keys$tse.TSEKey.$signJwsCOROUTINE$60 = $signJwsCOROUTINE$60;
    $id$walt$crypto$keys$tse.TSEKey.$verifyRawCOROUTINE$61 = $verifyRawCOROUTINE$61;
    $id$walt$crypto$keys$tse.TSEKey.$verifyJwsCOROUTINE$62 = $verifyJwsCOROUTINE$62;
    $id$walt$crypto$keys$tse.TSEKey.$getEncodedPublicKeyCOROUTINE$63 = $getEncodedPublicKeyCOROUTINE$63;
    $id$walt$crypto$keys$tse.TSEKey.$getPublicKeyCOROUTINE$64 = $getPublicKeyCOROUTINE$64;
    $id$walt$crypto$keys$tse.TSEKey.$getMetaCOROUTINE$65 = $getMetaCOROUTINE$65;
    $id$walt$crypto$keys$tse.TSEKey.$deleteCOROUTINE$66 = $deleteCOROUTINE$66;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$tse = $id$walt$crypto$keys.tse || ($id$walt$crypto$keys.tse = {});
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$tse = $id$walt$crypto$keys.tse || ($id$walt$crypto$keys.tse = {});
    $id$walt$crypto$keys$tse.TSEKeyMetadata = TSEKeyMetadata;
    $id$walt$crypto$keys$tse.TSEKeyMetadata.TSEKeyMetadata2 = TSEKeyMetadata2;
    defineProp($id$walt$crypto$keys$tse.TSEKeyMetadata, 'Companion', Companion_getInstance_27);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$utils = $id$walt$crypto.utils || ($id$walt$crypto.utils = {});
    defineProp($id$walt$crypto$utils, 'Base64Utils', Base64Utils_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$utils = $id$walt$crypto.utils || ($id$walt$crypto.utils = {});
    defineProp($id$walt$crypto$utils, 'JsonCanonicalizationUtils', JsonCanonicalizationUtils_getInstance);
    JsonCanonicalizationUtils.prototype.$convertToRequiredMembersJsonStringCOROUTINE$69 = $convertToRequiredMembersJsonStringCOROUTINE$69;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$utils = $id$walt$crypto.utils || ($id$walt$crypto.utils = {});
    defineProp($id$walt$crypto$utils, 'JsonUtils', JsonUtils_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$utils = $id$walt$crypto.utils || ($id$walt$crypto.utils = {});
    defineProp($id$walt$crypto$utils, 'JwsUtils', JwsUtils_getInstance);
    JwsUtils.prototype.JwsParts = JwsParts;
    defineProp(JwsUtils.prototype.JwsParts, 'Companion', Companion_getInstance_28);
    JwsUtils.prototype.JwsPartsSdJwt = JwsPartsSdJwt;
    defineProp(JwsUtils.prototype.JwsPartsSdJwt, 'Companion', Companion_getInstance_29);
    JwsUtils.prototype.JwsStringParts = JwsStringParts;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$utils = $id$walt$crypto.utils || ($id$walt$crypto.utils = {});
    defineProp($id$walt$crypto$utils, 'MultiCodecUtils', MultiCodecUtils_getInstance);
    MultiCodecUtils.prototype.UVarInt = UVarInt;
    defineProp(MultiCodecUtils.prototype.UVarInt, 'Companion', Companion_getInstance_30);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    defineProp($id$walt$crypto$keys, 'JsJWKKeyCreator', JsJWKKeyCreator_getInstance);
    JsJWKKeyCreator.prototype.$generateCOROUTINE$70 = $generateCOROUTINE$70;
    JsJWKKeyCreator.prototype.$importRawPublicKeyCOROUTINE$71 = $importRawPublicKeyCOROUTINE$71;
    JsJWKKeyCreator.prototype.$importJWKCOROUTINE$72 = $importJWKCOROUTINE$72;
    JsJWKKeyCreator.prototype.$importPEMCOROUTINE$73 = $importPEMCOROUTINE$73;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$jwk = $id$walt$crypto$keys.jwk || ($id$walt$crypto$keys.jwk = {});
    $id$walt$crypto$keys$jwk.JWKKey = JWKKey;
    $id$walt$crypto$keys$jwk.JWKKey.jwkKeyUsingKeyLike = jwkKeyUsingKeyLike;
    $id$walt$crypto$keys$jwk.JWKKey.jwkKeyUsingKeyLikeAndJWK = jwkKeyUsingKeyLikeAndJWK;
    $id$walt$crypto$keys$jwk.JWKKey.jwkKeyUsingJWK = jwkKeyUsingJWK;
    defineProp($id$walt$crypto$keys$jwk.JWKKey, 'Companion', Companion_getInstance_31);
    $id$walt$crypto$keys$jwk.JWKKey.$initCOROUTINE$74 = $initCOROUTINE$74;
    $id$walt$crypto$keys$jwk.JWKKey.$exportJWKObjectCOROUTINE$75 = $exportJWKObjectCOROUTINE$75;
    $id$walt$crypto$keys$jwk.JWKKey.$exportPEMCOROUTINE$76 = $exportPEMCOROUTINE$76;
    $id$walt$crypto$keys$jwk.JWKKey.$signRawCOROUTINE$77 = $signRawCOROUTINE$77;
    $id$walt$crypto$keys$jwk.JWKKey.$verifyRawCOROUTINE$78 = $verifyRawCOROUTINE$78;
    $id$walt$crypto$keys$jwk.JWKKey.$verifyJwsCOROUTINE$79 = $verifyJwsCOROUTINE$79;
    $id$walt$crypto$keys$jwk.JWKKey.$getPublicKeyCOROUTINE$80 = $getPublicKeyCOROUTINE$80;
    $id$walt$crypto$keys$jwk.JWKKey.$getPublicKeyRepresentationCOROUTINE$81 = $getPublicKeyRepresentationCOROUTINE$81;
    $id$walt$crypto$keys$jwk.JWKKey.$getMetaCOROUTINE$82 = $getMetaCOROUTINE$82;
    $id$walt$crypto$keys$jwk.JWKKey.$getKeyIdCOROUTINE$83 = $getKeyIdCOROUTINE$83;
    $id$walt$crypto$keys$jwk.JWKKey.$getThumbprintCOROUTINE$84 = $getThumbprintCOROUTINE$84;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$utils = $id$walt$crypto.utils || ($id$walt$crypto.utils = {});
    defineProp($id$walt$crypto$utils, 'ArrayUtils', ArrayUtils_getInstance);
  }
  $jsExportAll$(_);
  kotlin_kotlin.$jsExportAll$(_);
  kotlin_io_ktor_ktor_client_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=crypto.js.map
