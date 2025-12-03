(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'jose', 'crypto', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js', './kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js', './kotlin-logging.js', './ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js', './ktor-ktor-client-ktor-client-core.js', './ktor-ktor-client-ktor-client-plugins-ktor-client-logging.js', './ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js', './ktor-ktor-http.js', './cache4k-cache4k.js', './Kotlin-DateTime-library-kotlinx-datetime.js', './ktor-ktor-utils.js', './hash-library-sha2.js', './ktor-ktor-io.js', './MACs-library-hmac-hmac-sha2.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('jose'), require('crypto'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js'), require('./kotlin-logging.js'), require('./ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./ktor-ktor-client-ktor-client-plugins-ktor-client-logging.js'), require('./ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json.js'), require('./ktor-ktor-http.js'), require('./cache4k-cache4k.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./ktor-ktor-utils.js'), require('./hash-library-sha2.js'), require('./ktor-ktor-io.js'), require('./MACs-library-hmac-hmac-sha2.js'));
  else {
    if (typeof jose === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'jose' was not found. Please, check whether 'jose' is loaded prior to 'crypto'.");
    }
    if (typeof crypto === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'crypto' was not found. Please, check whether 'crypto' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' was not found. Please, check whether 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' was not found. Please, check whether 'ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging' was not found. Please, check whether 'ktor-ktor-client-ktor-client-plugins-ktor-client-logging' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' was not found. Please, check whether 'ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['cache4k-cache4k'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'cache4k-cache4k' was not found. Please, check whether 'cache4k-cache4k' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['ktor-ktor-utils'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'ktor-ktor-utils' was not found. Please, check whether 'ktor-ktor-utils' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['hash-library-sha2'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'hash-library-sha2' was not found. Please, check whether 'hash-library-sha2' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'crypto'.");
    }
    if (typeof globalThis['MACs-library-hmac-hmac-sha2'] === 'undefined') {
      throw new Error("Error loading module 'crypto'. Its dependency 'MACs-library-hmac-hmac-sha2' was not found. Please, check whether 'MACs-library-hmac-hmac-sha2' is loaded prior to 'crypto'.");
    }
    globalThis.crypto = factory(typeof crypto === 'undefined' ? {} : crypto, jose, crypto, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core'], globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'], globalThis['kotlin-logging'], globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-content-negotiation'], globalThis['ktor-ktor-client-ktor-client-core'], globalThis['ktor-ktor-client-ktor-client-plugins-ktor-client-logging'], globalThis['ktor-ktor-shared-ktor-serialization-ktor-serialization-kotlinx-ktor-serialization-kotlinx-json'], globalThis['ktor-ktor-http'], globalThis['cache4k-cache4k'], globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['ktor-ktor-utils'], globalThis['hash-library-sha2'], globalThis['ktor-ktor-io'], globalThis['MACs-library-hmac-hmac-sha2']);
  }
}(function (_, jose, crypto, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime, kotlin_io_github_oshai_kotlin_logging, kotlin_io_ktor_ktor_client_content_negotiation, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_client_logging, kotlin_io_ktor_ktor_serialization_kotlinx_json, kotlin_io_ktor_ktor_http, kotlin_io_github_reactivecircus_cache4k_cache4k, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_io_ktor_ktor_utils, kotlin_org_kotlincrypto_hash_sha2, kotlin_io_ktor_ktor_io, kotlin_org_kotlincrypto_macs_hmac_sha2) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var VOID = kotlin_kotlin.$_$.j;
  var captureStack = kotlin_kotlin.$_$.jc;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var IllegalArgumentException = kotlin_kotlin.$_$.aj;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.f2;
  var IllegalStateException = kotlin_kotlin.$_$.bj;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.k2;
  var joinToString = kotlin_kotlin.$_$.e9;
  var toMutableList = kotlin_kotlin.$_$.cb;
  var toByte = kotlin_kotlin.$_$.ce;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var toByteArray = kotlin_kotlin.$_$.ra;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var copyOfRange = kotlin_kotlin.$_$.v7;
  var arrayCopy = kotlin_kotlin.$_$.g7;
  var primitiveArrayConcat = kotlin_kotlin.$_$.i;
  var until = kotlin_kotlin.$_$.re;
  var sliceArray = kotlin_kotlin.$_$.ma;
  var toList = kotlin_kotlin.$_$.ua;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var getKClass = kotlin_kotlin.$_$.g;
  var JsonClassDiscriminator = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.r;
  var lazy = kotlin_kotlin.$_$.ik;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var CoroutineImpl = kotlin_kotlin.$_$.bc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.lb;
  var initMetadataForLambda = kotlin_kotlin.$_$.cd;
  var Result = kotlin_kotlin.$_$.ij;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var arrayOf = kotlin_kotlin.$_$.yj;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d3;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var isInterface = kotlin_kotlin.$_$.md;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var emptyMap = kotlin_kotlin.$_$.l8;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var $runInAsync$ = kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime.$_$.a;
  var defineProp = kotlin_kotlin.$_$.qc;
  var hashCode = kotlin_kotlin.$_$.wc;
  var equals = kotlin_kotlin.$_$.rc;
  var Companion_instance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var Companion_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var toString = kotlin_kotlin.$_$.pk;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var mapCapacity = kotlin_kotlin.$_$.s9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var Companion_instance_1 = kotlin_kotlin.$_$.g6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v3;
  var createFailure = kotlin_kotlin.$_$.bk;
  var toString_0 = kotlin_kotlin.$_$.fe;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.s;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var PolymorphicModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.t;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var THROW_IAE = kotlin_kotlin.$_$.lj;
  var enumEntries = kotlin_kotlin.$_$.dc;
  var Enum = kotlin_kotlin.$_$.xi;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var HashMap = kotlin_kotlin.$_$.p6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a6;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var encodeToByteArray = kotlin_kotlin.$_$.uf;
  var Triple = kotlin_kotlin.$_$.mj;
  var get_ContentNegotiation = kotlin_io_ktor_ktor_client_content_negotiation.$_$.a;
  var defaultRequest = kotlin_io_ktor_ktor_client_core.$_$.m;
  var get_Logging = kotlin_io_ktor_ktor_client_logging.$_$.e;
  var json = kotlin_io_ktor_ktor_serialization_kotlinx_json.$_$.a;
  var HttpHeaders_getInstance = kotlin_io_ktor_ktor_http.$_$.g;
  var Application_getInstance = kotlin_io_ktor_ktor_http.$_$.b;
  var header = kotlin_io_ktor_ktor_client_core.$_$.s;
  var Companion_instance_2 = kotlin_io_ktor_ktor_client_logging.$_$.c;
  var get_DEFAULT = kotlin_io_ktor_ktor_client_logging.$_$.d;
  var LogLevel_ALL_getInstance = kotlin_io_ktor_ktor_client_logging.$_$.a;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.a1;
  var Companion_instance_3 = kotlin_io_github_reactivecircus_cache4k_cache4k.$_$.a;
  var Companion_getInstance = kotlin_kotlin.$_$.b6;
  var DurationUnit_HOURS_getInstance = kotlin_kotlin.$_$.m;
  var toDuration = kotlin_kotlin.$_$.ni;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var get_request = kotlin_io_ktor_ktor_client_core.$_$.y;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var DurationUnit_SECONDS_getInstance = kotlin_kotlin.$_$.p;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var url = kotlin_io_ktor_ktor_client_core.$_$.u;
  var headers = kotlin_io_ktor_ktor_client_core.$_$.r;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.h;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.x;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.a;
  var Companion_getInstance_1 = kotlin_io_ktor_ktor_http.$_$.j;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b1;
  var trimIndent = kotlin_kotlin.$_$.hi;
  var trimMargin = kotlin_kotlin.$_$.ii;
  var TypeInfo = kotlin_io_ktor_ktor_utils.$_$.k;
  var OutgoingContent = kotlin_io_ktor_ktor_http.$_$.t;
  var NullBody_instance = kotlin_io_ktor_ktor_http.$_$.a;
  var throwOnFailure = kotlin_kotlin.$_$.nk;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.b4;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.w3;
  var isBlank = kotlin_kotlin.$_$.hg;
  var SHA256_init_$Create$ = kotlin_org_kotlincrypto_hash_sha2.$_$.a;
  var toByteArray_0 = kotlin_io_ktor_ktor_io.$_$.f1;
  var toHexString = kotlin_kotlin.$_$.th;
  var HmacSHA256_init_$Create$ = kotlin_org_kotlincrypto_macs_hmac_sha2.$_$.a;
  var Charsets_getInstance = kotlin_io_ktor_ktor_io.$_$.o;
  var Companion_getInstance_2 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.e;
  var toLocalDateTime = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.h;
  var replace = kotlin_kotlin.$_$.zg;
  var toInstant = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.g;
  var to = kotlin_kotlin.$_$.rk;
  var mapOf = kotlin_kotlin.$_$.u9;
  var lazy_0 = kotlin_kotlin.$_$.jk;
  var endsWith = kotlin_kotlin.$_$.xf;
  var encodeBase64 = kotlin_io_ktor_ktor_utils.$_$.b1;
  var listOf = kotlin_kotlin.$_$.r9;
  var NotImplementedError = kotlin_kotlin.$_$.ej;
  var KProperty1 = kotlin_kotlin.$_$.we;
  var getPropertyCallableRef = kotlin_kotlin.$_$.uc;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var InstantIso8601Serializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  var charSequenceGet = kotlin_kotlin.$_$.mc;
  var toString_1 = kotlin_kotlin.$_$.u3;
  var contains = kotlin_kotlin.$_$.pf;
  var contentType = kotlin_io_ktor_ktor_http.$_$.j1;
  var formUrlEncode = kotlin_io_ktor_ktor_http.$_$.l1;
  var Default_getInstance_0 = kotlin_kotlin.$_$.z5;
  var bearerAuth = kotlin_io_ktor_ktor_client_core.$_$.q;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ok;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var JsonPrimitive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var isSuccess = kotlin_io_ktor_ktor_http.$_$.o1;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var JsonNull_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var GMTDate = kotlin_io_ktor_ktor_utils.$_$.d;
  var toHttpDate = kotlin_io_ktor_ktor_http.$_$.t1;
  var Default_getInstance_1 = kotlin_kotlin.$_$.r5;
  var JsonPrimitive_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var Companion_getInstance_3 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.c;
  var plus = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.f;
  var mapOf_0 = kotlin_kotlin.$_$.t9;
  var isArray = kotlin_kotlin.$_$.ed;
  var get_host = kotlin_io_ktor_ktor_client_core.$_$.t;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.v;
  var toMap = kotlin_kotlin.$_$.ya;
  var decodeToString = kotlin_kotlin.$_$.rf;
  var substringAfter = kotlin_kotlin.$_$.kh;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.z3;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.n2;
  var substringBefore = kotlin_kotlin.$_$.lh;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var get_contentOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.x;
  var KtMap = kotlin_kotlin.$_$.w6;
  var Pair = kotlin_kotlin.$_$.hj;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kk;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.x2;
  var decodeBase64Bytes = kotlin_io_ktor_ktor_utils.$_$.a1;
  var ByteArraySerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var startsWith = kotlin_kotlin.$_$.eh;
  var lineSequence = kotlin_kotlin.$_$.rg;
  var filterNot = kotlin_kotlin.$_$.af;
  var joinToString_0 = kotlin_kotlin.$_$.df;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.o1;
  var removePrefix = kotlin_kotlin.$_$.vg;
  var mutableMapOf = kotlin_kotlin.$_$.w9;
  var KtMutableMap = kotlin_kotlin.$_$.z6;
  var isByteArray = kotlin_kotlin.$_$.gd;
  var split = kotlin_kotlin.$_$.dh;
  var lazyOf = kotlin_kotlin.$_$.hk;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.n4;
  var copyOf = kotlin_kotlin.$_$.a8;
  var charArray = kotlin_kotlin.$_$.lc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var concatToString = kotlin_kotlin.$_$.of;
  var UInt__toInt_impl_93yt4d = kotlin_kotlin.$_$.p4;
  var toUInt = kotlin_kotlin.$_$.qk;
  var UInt__compareTo_impl_yacclj = kotlin_kotlin.$_$.m4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c4;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d4;
  var uintDivide = kotlin_kotlin.$_$.sk;
  var uintRemainder = kotlin_kotlin.$_$.tk;
  var numberToChar = kotlin_kotlin.$_$.wd;
  var indexOf = kotlin_kotlin.$_$.fg;
  var KProperty0 = kotlin_kotlin.$_$.ve;
  var PaddingOption_ABSENT_OPTIONAL_getInstance = kotlin_kotlin.$_$.k;
  var charArrayOf = kotlin_kotlin.$_$.kc;
  var trimEnd = kotlin_kotlin.$_$.gi;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r1;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var Unit = kotlin_kotlin.$_$.vj;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var Collection = kotlin_kotlin.$_$.o6;
  var KtList = kotlin_kotlin.$_$.t6;
  var toMap_0 = kotlin_kotlin.$_$.ab;
  var isNumber = kotlin_kotlin.$_$.od;
  var JsonPrimitive_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.r;
  var drop = kotlin_kotlin.$_$.j8;
  var toString_2 = kotlin_kotlin.$_$.zh;
  var UInt = kotlin_kotlin.$_$.qj;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.d6;
  var isCharSequence = kotlin_kotlin.$_$.id;
  var trim = kotlin_kotlin.$_$.ki;
  var get_lastIndex = kotlin_kotlin.$_$.ng;
  var json_0 = kotlin_kotlin.$_$.sd;
  var lines = kotlin_kotlin.$_$.sg;
  var take = kotlin_kotlin.$_$.pa;
  var emptyList = kotlin_kotlin.$_$.k8;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var copyToArray = kotlin_kotlin.$_$.f8;
  var toTypedArray = kotlin_kotlin.$_$.gb;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var intercepted = kotlin_kotlin.$_$.ob;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.n1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(CryptoArgumentException, 'CryptoArgumentException', VOID, IllegalArgumentException);
  initMetadataForClass(KeyTypeNotSupportedException, 'KeyTypeNotSupportedException', VOID, CryptoArgumentException);
  initMetadataForClass(CryptoStateException, 'CryptoStateException', VOID, IllegalStateException);
  initMetadataForClass(SigningException, 'SigningException', VOID, CryptoStateException);
  initMetadataForClass(VerificationException, 'VerificationException', VOID, CryptoStateException);
  initMetadataForClass(KeyNotFoundException, 'KeyNotFoundException', KeyNotFoundException, CryptoArgumentException);
  initMetadataForClass(MissingSignatureException, 'MissingSignatureException', VOID, CryptoStateException);
  initMetadataForClass(KeyTypeMissingException, 'KeyTypeMissingException', KeyTypeMissingException, CryptoArgumentException);
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
  initMetadataForClass(Key, 'Key', VOID, VOID, VOID, [0, 1, 2], VOID, {0: Companion_getInstance_5});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(DirectSerializedKey, 'DirectSerializedKey', VOID, VOID, VOID, VOID, VOID, {0: DirectKeySerializer_getInstance});
  initMetadataForObject(DirectKeySerializer, 'DirectKeySerializer', VOID, VOID, [KSerializer]);
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
  initMetadataForClass(KeyMeta, 'KeyMeta', VOID, VOID, VOID, VOID, VOID, {0: Companion_getInstance_8});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AwsKeyMeta, 'AwsKeyMeta', VOID, KeyMeta, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(AzureKeyMeta, 'AzureKeyMeta', VOID, KeyMeta, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(JwkKeyMeta, 'JwkKeyMeta', VOID, KeyMeta, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(OciKeyMeta, 'OciKeyMeta', VOID, KeyMeta, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TseKeyMeta, 'TseKeyMeta', VOID, KeyMeta, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForLambda(KeySerialization$deserializeJWTKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(KeySerialization$deserializeKeyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(KeySerialization$deserializeKeyObjectAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($deserializeKeyCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($deserializeKeyObjectCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($deserializeJWTKeyCOROUTINE$4, CoroutineImpl);
  initMetadataForObject(KeySerialization, 'KeySerialization', VOID, VOID, VOID, [1]);
  initMetadataForCompanion(Companion_8, VOID, [SerializerFactory]);
  initMetadataForClass(KeyType, 'KeyType', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_14});
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
    return $super === VOID ? this.n84(type, metadata, $completion) : $super.n84.call(this, type, metadata, $completion);
  }
  function importRawPublicKey$default(type, rawPublicKey, metadata, $completion, $super) {
    metadata = metadata === VOID ? null : metadata;
    return $super === VOID ? this.a85(type, rawPublicKey, metadata, $completion) : $super.a85.call(this, type, rawPublicKey, metadata, $completion);
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
    return $super === VOID ? this.d85(type, metadata) : generateAsync(type, metadata);
  }
  function importRawPublicKeyAsync(type, rawPublicKey, metadata) {
    var tmp = JWKKeyCreator$importRawPublicKeyAsync$slambda_0(this, type, rawPublicKey, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  }
  function importRawPublicKeyAsync$default(type, rawPublicKey, metadata, $super) {
    metadata = metadata === VOID ? null : metadata;
    return $super === VOID ? this.e85(type, rawPublicKey, metadata) : importRawPublicKeyAsync(type, rawPublicKey, metadata);
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
  initMetadataForObject(UuidUtils, 'UuidUtils');
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
  function KeyTypeNotSupportedException(type, cause) {
    cause = cause === VOID ? null : cause;
    CryptoArgumentException.call(this, "The key type '" + type + "' is not supported. Please provide a valid key type.");
    captureStack(this, KeyTypeNotSupportedException);
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
  function KeyNotFoundException(id, message, cause) {
    id = id === VOID ? '' : id;
    message = message === VOID ? "The key with ID '" + id + "' could not be found. Please verify the ID and try again." : message;
    cause = cause === VOID ? null : cause;
    CryptoArgumentException.call(this, message);
    captureStack(this, KeyNotFoundException);
  }
  function MissingSignatureException(message, cause) {
    cause = cause === VOID ? null : cause;
    CryptoStateException.call(this, 'The signature is missing or invalid: ' + message);
    captureStack(this, MissingSignatureException);
  }
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
  function KeyTypeMissingException(cause) {
    cause = cause === VOID ? null : cause;
    CryptoArgumentException.call(this, 'The key type is missing from the serialized key. Please include the key type.');
    captureStack(this, KeyTypeMissingException);
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
      mutableValue.i2(0, 0);
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
  protoOf(EccUtils).h6k = function (derSignature) {
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
  protoOf(EccUtils).i6k = function (p1363Signature) {
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
    return $this.j6k_1.b1();
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
    tmp.j6k_1 = lazy(tmp_0, Key$Companion$_anonymous__3nbwi8);
  }
  protoOf(Companion).m4u = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).x2c = function (typeParamsSerializers) {
    return this.m4u();
  };
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion();
    return Companion_instance_4;
  }
  function Key_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function Key$deleteKeyAsync$slambda(this$0, resultContinuation) {
    this.s6k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$deleteKeyAsync$slambda).t6k = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$deleteKeyAsync$slambda).ac = function ($completion) {
    return this.t6k($completion);
  };
  protoOf(Key$deleteKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.s6k_1.u6k(this);
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
  protoOf(Key$deleteKeyAsync$slambda).ja = function (completion) {
    return new Key$deleteKeyAsync$slambda(this.s6k_1, completion);
  };
  function Key$deleteKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$deleteKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.t6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.d6l_1 = this$0;
    this.e6l_1 = $plaintext;
    this.f6l_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$signJwsAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$signJwsAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(Key$signJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.d6l_1.h6l(this.e6l_1, this.f6l_1, this);
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
  protoOf(Key$signJwsAsync$slambda).ja = function (completion) {
    return new Key$signJwsAsync$slambda(this.d6l_1, this.e6l_1, this.f6l_1, completion);
  };
  function Key$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new Key$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$signRawAsync$slambda(this$0, $plaintext, resultContinuation) {
    this.q6l_1 = this$0;
    this.r6l_1 = $plaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$signRawAsync$slambda).s6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$signRawAsync$slambda).ac = function ($completion) {
    return this.s6l($completion);
  };
  protoOf(Key$signRawAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.q6l_1.t6l(this.r6l_1, this);
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
  protoOf(Key$signRawAsync$slambda).ja = function (completion) {
    return new Key$signRawAsync$slambda(this.q6l_1, this.r6l_1, completion);
  };
  function Key$signRawAsync$slambda_0(this$0, $plaintext, resultContinuation) {
    var i = new Key$signRawAsync$slambda(this$0, $plaintext, resultContinuation);
    var l = function ($completion) {
      return i.s6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.c6m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$getKeyIdAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$getKeyIdAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(Key$getKeyIdAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.c6m_1.d6m(this);
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
  protoOf(Key$getKeyIdAsync$slambda).ja = function (completion) {
    return new Key$getKeyIdAsync$slambda(this.c6m_1, completion);
  };
  function Key$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$initAsync$slambda(this$0, resultContinuation) {
    this.m6m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$initAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$initAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(Key$initAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.m6m_1.n6m(this);
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
  protoOf(Key$initAsync$slambda).ja = function (completion) {
    return new Key$initAsync$slambda(this.m6m_1, completion);
  };
  function Key$initAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$initAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$getPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.w6m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$getPublicKeyAsync$slambda).x6m = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$getPublicKeyAsync$slambda).ac = function ($completion) {
    return this.x6m($completion);
  };
  protoOf(Key$getPublicKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.w6m_1.y6m(this);
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
  protoOf(Key$getPublicKeyAsync$slambda).ja = function (completion) {
    return new Key$getPublicKeyAsync$slambda(this.w6m_1, completion);
  };
  function Key$getPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$getPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.x6m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$getMetaAsync$slambda(this$0, resultContinuation) {
    this.h6n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$getMetaAsync$slambda).i6n = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$getMetaAsync$slambda).ac = function ($completion) {
    return this.i6n($completion);
  };
  protoOf(Key$getMetaAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.h6n_1.j6n(this);
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
  protoOf(Key$getMetaAsync$slambda).ja = function (completion) {
    return new Key$getMetaAsync$slambda(this.h6n_1, completion);
  };
  function Key$getMetaAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$getMetaAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.i6n($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.s6n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$exportPEMAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$exportPEMAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(Key$exportPEMAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.s6n_1.t6n(this);
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
  protoOf(Key$exportPEMAsync$slambda).ja = function (completion) {
    return new Key$exportPEMAsync$slambda(this.s6n_1, completion);
  };
  function Key$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.c6o_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$getThumbprintAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$getThumbprintAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(Key$getThumbprintAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.c6o_1.d6o(this);
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
  protoOf(Key$getThumbprintAsync$slambda).ja = function (completion) {
    return new Key$getThumbprintAsync$slambda(this.c6o_1, completion);
  };
  function Key$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$exportJWKPrettyAsync$slambda(this$0, resultContinuation) {
    this.m6o_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$exportJWKPrettyAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$exportJWKPrettyAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(Key$exportJWKPrettyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.m6o_1.n6o(this);
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
  protoOf(Key$exportJWKPrettyAsync$slambda).ja = function (completion) {
    return new Key$exportJWKPrettyAsync$slambda(this.m6o_1, completion);
  };
  function Key$exportJWKPrettyAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$exportJWKPrettyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.w6o_1 = this$0;
    this.x6o_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$verifyJwsAsync$slambda).y6o = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Key$verifyJwsAsync$slambda).ac = function ($completion) {
    return this.y6o($completion);
  };
  protoOf(Key$verifyJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.w6o_1.z6o(this.x6o_1, this);
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
  protoOf(Key$verifyJwsAsync$slambda).ja = function (completion) {
    return new Key$verifyJwsAsync$slambda(this.w6o_1, this.x6o_1, completion);
  };
  function Key$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new Key$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.y6o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.i6p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$exportJWKAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$exportJWKAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(Key$exportJWKAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.i6p_1.j6p(this);
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
  protoOf(Key$exportJWKAsync$slambda).ja = function (completion) {
    return new Key$exportJWKAsync$slambda(this.i6p_1, completion);
  };
  function Key$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.s6p_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$exportJWKObjectAsync$slambda).t6p = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$exportJWKObjectAsync$slambda).ac = function ($completion) {
    return this.t6p($completion);
  };
  protoOf(Key$exportJWKObjectAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.s6p_1.u6p(this);
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
  protoOf(Key$exportJWKObjectAsync$slambda).ja = function (completion) {
    return new Key$exportJWKObjectAsync$slambda(this.s6p_1, completion);
  };
  function Key$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.t6p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.d6q_1 = this$0;
    this.e6q_1 = $signed;
    this.f6q_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$verifyRawAsync$slambda).g6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(Key$verifyRawAsync$slambda).ac = function ($completion) {
    return this.g6q($completion);
  };
  protoOf(Key$verifyRawAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.d6q_1.h6q(this.e6q_1, this.f6q_1, this);
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
  protoOf(Key$verifyRawAsync$slambda).ja = function (completion) {
    return new Key$verifyRawAsync$slambda(this.d6q_1, this.e6q_1, this.f6q_1, completion);
  };
  function Key$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new Key$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.g6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Key$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.q6q_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Key$getPublicKeyRepresentationAsync$slambda).r6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key$getPublicKeyRepresentationAsync$slambda).ac = function ($completion) {
    return this.r6q($completion);
  };
  protoOf(Key$getPublicKeyRepresentationAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.q6q_1.s6q(this);
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
  protoOf(Key$getPublicKeyRepresentationAsync$slambda).ja = function (completion) {
    return new Key$getPublicKeyRepresentationAsync$slambda(this.q6q_1, completion);
  };
  function Key$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new Key$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $exportJWKPrettyCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b6r_1 = _this__u8e3s4;
  }
  protoOf($exportJWKPrettyCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.c6r_1 = JsonUtils_getInstance().g6r();
            this.d6r_1 = Default_getInstance();
            this.n9_1 = 1;
            suspendResult = this.b6r_1.j6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var tmp1 = this.d6r_1.h4s(ARGUMENT);
            var this_0 = this.c6r_1;
            var this_1 = this_0.w24();
            var this_2 = serializer(this_1, createKType(getKClass(JsonElement), arrayOf([]), false));
            return this_0.x21(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), tmp1);
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
  protoOf($exportJWKPrettyCOROUTINE$0)['<set-state>'] = protoOf($exportJWKPrettyCOROUTINE$0).u9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-state>'] = protoOf($exportJWKPrettyCOROUTINE$0).v9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<set-exceptionState>'] = protoOf($exportJWKPrettyCOROUTINE$0).w9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-exceptionState>'] = protoOf($exportJWKPrettyCOROUTINE$0).x9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<set-result>'] = protoOf($exportJWKPrettyCOROUTINE$0).y9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-result>'] = protoOf($exportJWKPrettyCOROUTINE$0).z9;
  protoOf($exportJWKPrettyCOROUTINE$0)['<set-exception>'] = protoOf($exportJWKPrettyCOROUTINE$0).aa;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-exception>'] = protoOf($exportJWKPrettyCOROUTINE$0).ba;
  protoOf($exportJWKPrettyCOROUTINE$0)['<set-finallyPath>'] = protoOf($exportJWKPrettyCOROUTINE$0).ca;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-finallyPath>'] = protoOf($exportJWKPrettyCOROUTINE$0).da;
  protoOf($exportJWKPrettyCOROUTINE$0)['<get-context>'] = protoOf($exportJWKPrettyCOROUTINE$0).t9;
  function Key() {
    Companion_getInstance_5();
  }
  protoOf(Key).n6o = function ($completion) {
    var tmp = new $exportJWKPrettyCOROUTINE$0(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Key).signJws$default = function (plaintext, headers, $completion, $super) {
    headers = headers === VOID ? emptyMap() : headers;
    return $super === VOID ? this.h6l(plaintext, headers, $completion) : $super.h6l.call(this, plaintext, headers, $completion);
  };
  protoOf(Key).verifyRaw$default = function (signed, detachedPlaintext, $completion, $super) {
    detachedPlaintext = detachedPlaintext === VOID ? null : detachedPlaintext;
    return $super === VOID ? this.h6q(signed, detachedPlaintext, $completion) : $super.h6q.call(this, signed, detachedPlaintext, $completion);
  };
  protoOf(Key).toString = function () {
    return '[walt.id crypto ' + (this.hasPrivateKey ? 'private' : 'public') + ' ' + this.keyType.toString() + ' key]';
  };
  protoOf(Key).n6m = function ($completion) {
    return Unit_instance;
  };
  protoOf(Key).j6r = function () {
    var tmp = Key$deleteKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).k6r = function (plaintext, headers) {
    var tmp = Key$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).signJwsAsync$default = function (plaintext, headers, $super) {
    headers = headers === VOID ? emptyMap() : headers;
    return $super === VOID ? this.k6r(plaintext, headers) : $super.k6r.call(this, plaintext, headers);
  };
  protoOf(Key).l6r = function (plaintext) {
    var tmp = Key$signRawAsync$slambda_0(this, plaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).m6r = function () {
    var tmp = Key$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).n6r = function () {
    var tmp = Key$initAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).o6r = function () {
    var tmp = Key$getPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).p6r = function () {
    var tmp = Key$getMetaAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).q6r = function () {
    var tmp = Key$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).r6r = function () {
    var tmp = Key$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).s6r = function () {
    var tmp = Key$exportJWKPrettyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).t6r = function (signedJws) {
    var tmp = Key$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).u6r = function () {
    var tmp = Key$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).v6r = function () {
    var tmp = Key$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).w6r = function (signed, detachedPlaintext) {
    var tmp = Key$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Key).verifyRawAsync$default = function (signed, detachedPlaintext, $super) {
    detachedPlaintext = detachedPlaintext === VOID ? null : detachedPlaintext;
    return $super === VOID ? this.w6r(signed, detachedPlaintext) : $super.w6r.call(this, signed, detachedPlaintext);
  };
  protoOf(Key).x6r = function () {
    var tmp = Key$getPublicKeyRepresentationAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function Companion_0() {
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    return Companion_instance_5;
  }
  function DirectSerializedKey(key) {
    this.y6r_1 = key;
  }
  protoOf(DirectSerializedKey).toString = function () {
    return 'DirectSerializedKey(key=' + this.y6r_1.toString() + ')';
  };
  protoOf(DirectSerializedKey).hashCode = function () {
    return hashCode(this.y6r_1);
  };
  protoOf(DirectSerializedKey).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DirectSerializedKey))
      return false;
    var tmp0_other_with_cast = other instanceof DirectSerializedKey ? other : THROW_CCE();
    if (!equals(this.y6r_1, tmp0_other_with_cast.y6r_1))
      return false;
    return true;
  };
  function DirectKeySerializer() {
    DirectKeySerializer_instance = this;
    this.z6r_1 = Companion_instance.m4u().u20();
  }
  protoOf(DirectKeySerializer).u20 = function () {
    return this.z6r_1;
  };
  protoOf(DirectKeySerializer).w20 = function (decoder) {
    return new DirectSerializedKey(resolveSerializedKeyBlocking(decoder.g24(Companion_instance.m4u())));
  };
  protoOf(DirectKeySerializer).a6s = function (encoder, value) {
    return encoder.z25(Companion_instance_0.m4u(), KeySerialization_getInstance().serializeKeyToJson(value.y6r_1));
  };
  protoOf(DirectKeySerializer).v20 = function (encoder, value) {
    return this.a6s(encoder, value instanceof DirectSerializedKey ? value : THROW_CCE());
  };
  var DirectKeySerializer_instance;
  function DirectKeySerializer_getInstance() {
    if (DirectKeySerializer_instance == null)
      new DirectKeySerializer();
    return DirectKeySerializer_instance;
  }
  function KeyGenerationRequest$Companion$$childSerializers$_anonymous__bmr982() {
    return Companion_getInstance_14().m4u();
  }
  function Companion_1() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.c6s_1 = [null, lazy(tmp_0, KeyGenerationRequest$Companion$$childSerializers$_anonymous__bmr982), null];
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_1();
    return Companion_instance_6;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.KeyGenerationRequest', this, 3);
    tmp0_serialDesc.x2b('backend', true);
    tmp0_serialDesc.x2b('keyType', true);
    tmp0_serialDesc.x2b('config', true);
    this.d6s_1 = tmp0_serialDesc;
  }
  protoOf($serializer).e6s = function (encoder, value) {
    var tmp0_desc = this.d6s_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().c6s_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.f6s_1 === 'jwk')) {
      tmp1_output.w25(tmp0_desc, 0, value.f6s_1);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !value.g6s_1.equals(KeyType_Ed25519_getInstance())) {
      tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.g6s_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.h6s_1 == null)) {
      tmp1_output.a26(tmp0_desc, 2, JsonObjectSerializer_getInstance(), value.h6s_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer).v20 = function (encoder, value) {
    return this.e6s(encoder, value instanceof KeyGenerationRequest ? value : THROW_CCE());
  };
  protoOf($serializer).w20 = function (decoder) {
    var tmp0_desc = this.d6s_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_7().c6s_1;
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1, tmp8_cached[1].b1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
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
            tmp6_local2 = tmp7_input.v24(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.i24(tmp0_desc);
    return KeyGenerationRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer).u20 = function () {
    return this.d6s_1;
  };
  protoOf($serializer).m2c = function () {
    var tmp0_cached = Companion_getInstance_7().c6s_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].b1(), get_nullable(JsonObjectSerializer_getInstance())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function KeyGenerationRequest_init_$Init$(seen0, backend, keyType, config, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().d6s_1);
    }
    if (0 === (seen0 & 1))
      $this.f6s_1 = 'jwk';
    else
      $this.f6s_1 = backend;
    if (0 === (seen0 & 2))
      $this.g6s_1 = KeyType_Ed25519_getInstance();
    else
      $this.g6s_1 = keyType;
    if (0 === (seen0 & 4))
      $this.h6s_1 = null;
    else
      $this.h6s_1 = config;
    return $this;
  }
  function KeyGenerationRequest_init_$Create$(seen0, backend, keyType, config, serializationConstructorMarker) {
    return KeyGenerationRequest_init_$Init$(seen0, backend, keyType, config, serializationConstructorMarker, objectCreate(protoOf(KeyGenerationRequest)));
  }
  function KeyGenerationRequest(backend, keyType, config) {
    Companion_getInstance_7();
    backend = backend === VOID ? 'jwk' : backend;
    keyType = keyType === VOID ? KeyType_Ed25519_getInstance() : keyType;
    config = config === VOID ? null : config;
    this.f6s_1 = backend;
    this.g6s_1 = keyType;
    this.h6s_1 = config;
  }
  protoOf(KeyGenerationRequest).toString = function () {
    return 'KeyGenerationRequest(backend=' + this.f6s_1 + ', keyType=' + this.g6s_1.toString() + ', config=' + toString(this.h6s_1) + ')';
  };
  protoOf(KeyGenerationRequest).hashCode = function () {
    var result = getStringHashCode(this.f6s_1);
    result = imul(result, 31) + this.g6s_1.hashCode() | 0;
    result = imul(result, 31) + (this.h6s_1 == null ? 0 : this.h6s_1.hashCode()) | 0;
    return result;
  };
  protoOf(KeyGenerationRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeyGenerationRequest))
      return false;
    var tmp0_other_with_cast = other instanceof KeyGenerationRequest ? other : THROW_CCE();
    if (!(this.f6s_1 === tmp0_other_with_cast.f6s_1))
      return false;
    if (!this.g6s_1.equals(tmp0_other_with_cast.g6s_1))
      return false;
    if (!equals(this.h6s_1, tmp0_other_with_cast.h6s_1))
      return false;
    return true;
  };
  function KeyManager$log$lambda() {
    return Unit_instance;
  }
  function KeyManager$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyManager$slambda).r6s = function (generateRequest, $completion) {
    var tmp = this.s6s(generateRequest, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KeyManager$slambda).va = function (p1, $completion) {
    return this.r6s(p1 instanceof KeyGenerationRequest ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KeyManager$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_instance_31.generate$default(this.q6s_1.g6s_1, VOID, this);
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
  protoOf(KeyManager$slambda).s6s = function (generateRequest, completion) {
    var i = new KeyManager$slambda(completion);
    i.q6s_1 = generateRequest;
    return i;
  };
  function KeyManager$slambda_0(resultContinuation) {
    var i = new KeyManager$slambda(resultContinuation);
    var l = function (generateRequest, $completion) {
      return i.r6s(generateRequest, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KeyManager$lambda($typeId) {
    return function () {
      return 'Registering key type "' + $typeId + '" to ' + getKClass(JWKKey).hc() + '...';
    };
  }
  function KeyManager$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyManager$slambda_1).c6t = function (generateRequest, $completion) {
    var tmp = this.s6s(generateRequest, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KeyManager$slambda_1).va = function (p1, $completion) {
    return this.c6t(p1 instanceof KeyGenerationRequest ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KeyManager$slambda_1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = Companion_getInstance_27();
            var tmp0 = Default_getInstance();
            var json = ensureNotNull(this.b6t_1.h6s_1);
            var this_0 = tmp0.w24();
            var this_1 = serializer(this_0, createKType(getKClass(TSEKeyMetadata), arrayOf([]), false));
            suspendResult = tmp_0.f6t(this.b6t_1.g6s_1, tmp0.g4s(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), json), this);
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
  protoOf(KeyManager$slambda_1).s6s = function (generateRequest, completion) {
    var i = new KeyManager$slambda_1(completion);
    i.b6t_1 = generateRequest;
    return i;
  };
  function KeyManager$slambda_2(resultContinuation) {
    var i = new KeyManager$slambda_1(resultContinuation);
    var l = function (generateRequest, $completion) {
      return i.c6t(generateRequest, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KeyManager$lambda_0($typeId) {
    return function () {
      return 'Registering key type "' + $typeId + '" to ' + getKClass(TSEKey).hc() + '...';
    };
  }
  function KeyManager$slambda_3(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyManager$slambda_3).p6t = function (generateRequest, $completion) {
    var tmp = this.s6s(generateRequest, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KeyManager$slambda_3).va = function (p1, $completion) {
    return this.p6t(p1 instanceof KeyGenerationRequest ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KeyManager$slambda_3).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = Companion_getInstance_25();
            var tmp0 = Default_getInstance();
            var json = ensureNotNull(this.o6t_1.h6s_1);
            var this_0 = tmp0.w24();
            var this_1 = serializer(this_0, createKType(getKClass(OCIKeyMetadata), arrayOf([]), false));
            suspendResult = tmp_0.s6t(this.o6t_1.g6s_1, tmp0.g4s(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), json), this);
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
  protoOf(KeyManager$slambda_3).s6s = function (generateRequest, completion) {
    var i = new KeyManager$slambda_3(completion);
    i.o6t_1 = generateRequest;
    return i;
  };
  function KeyManager$slambda_4(resultContinuation) {
    var i = new KeyManager$slambda_3(resultContinuation);
    var l = function (generateRequest, $completion) {
      return i.p6t(generateRequest, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KeyManager$lambda_1($typeId) {
    return function () {
      return 'Registering key type "' + $typeId + '" to ' + getKClass(OCIKeyRestApi).hc() + '...';
    };
  }
  function KeyManager$slambda_5(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyManager$slambda_5).c6u = function (generateRequest, $completion) {
    var tmp = this.s6s(generateRequest, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KeyManager$slambda_5).va = function (p1, $completion) {
    return this.c6u(p1 instanceof KeyGenerationRequest ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KeyManager$slambda_5).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = Companion_getInstance_17();
            var tmp0 = Default_getInstance();
            var json = ensureNotNull(this.b6u_1.h6s_1);
            var this_0 = tmp0.w24();
            var this_1 = serializer(this_0, createKType(getKClass(AWSKeyMetadata), arrayOf([]), false));
            suspendResult = tmp_0.f6u(this.b6u_1.g6s_1, tmp0.g4s(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), json), this);
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
  protoOf(KeyManager$slambda_5).s6s = function (generateRequest, completion) {
    var i = new KeyManager$slambda_5(completion);
    i.b6u_1 = generateRequest;
    return i;
  };
  function KeyManager$slambda_6(resultContinuation) {
    var i = new KeyManager$slambda_5(resultContinuation);
    var l = function (generateRequest, $completion) {
      return i.c6u(generateRequest, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KeyManager$lambda_2($typeId) {
    return function () {
      return 'Registering key type "' + $typeId + '" to ' + getKClass(AWSKeyRestAPI).hc() + '...';
    };
  }
  function KeyManager$slambda_7(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeyManager$slambda_7).p6u = function (generateRequest, $completion) {
    var tmp = this.s6s(generateRequest, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(KeyManager$slambda_7).va = function (p1, $completion) {
    return this.p6u(p1 instanceof KeyGenerationRequest ? p1 : THROW_CCE(), $completion);
  };
  protoOf(KeyManager$slambda_7).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            var tmp_0 = Companion_getInstance_22();
            var tmp0 = Default_getInstance();
            var json = ensureNotNull(this.o6u_1.h6s_1);
            var this_0 = tmp0.w24();
            var this_1 = serializer(this_0, createKType(getKClass(AzureKeyMetadata), arrayOf([]), false));
            suspendResult = tmp_0.s6u(this.o6u_1.g6s_1, tmp0.g4s(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), json), this);
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
  protoOf(KeyManager$slambda_7).s6s = function (generateRequest, completion) {
    var i = new KeyManager$slambda_7(completion);
    i.o6u_1 = generateRequest;
    return i;
  };
  function KeyManager$slambda_8(resultContinuation) {
    var i = new KeyManager$slambda_7(resultContinuation);
    var l = function (generateRequest, $completion) {
      return i.p6u(generateRequest, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function KeyManager$lambda_3($typeId) {
    return function () {
      return 'Registering key type "' + $typeId + '" to ' + getKClass(AzureKey).hc() + '...';
    };
  }
  function $resolveSerializedKeyCOROUTINE$1(_this__u8e3s4, json, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b6v_1 = _this__u8e3s4;
    this.c6v_1 = json;
  }
  protoOf($resolveSerializedKeyCOROUTINE$1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.c6v_1.af('type');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
            var tmp_1;
            if (tmp2_safe_receiver == null) {
              tmp_1 = null;
            } else {
              var type = KeyManager_getInstance().m6v(tmp2_safe_receiver);
              var this_0 = this.c6v_1;
              var result = LinkedHashMap_init_$Create$();
              var _iterator__ex2g4s = this_0.z().p();
              while (_iterator__ex2g4s.q()) {
                var entry = _iterator__ex2g4s.r();
                if (!(entry.a1() === 'type')) {
                  result.p2(entry.a1(), entry.b1());
                }
              }
              var destination = LinkedHashMap_init_$Create$_0(mapCapacity(result.s()));
              var _iterator__ex2g4s_0 = result.z().p();
              while (_iterator__ex2g4s_0.q()) {
                var element = _iterator__ex2g4s_0.r();
                var tmp_2 = element.a1();
                destination.p2(tmp_2, element.b1());
              }
              var fields = destination;
              var tmp_3 = Default_getInstance().g4s(serializer_0(type), new JsonObject(fields));
              tmp_1 = tmp_3 instanceof Key ? tmp_3 : THROW_CCE();
            }

            tmp_0.d6v_1 = tmp_1;
            if (this.d6v_1 == null) {
              this.e6v_1 = null;
              this.n9_1 = 2;
              continue $sm;
            } else {
              var tmp_4 = this;
              tmp_4.f6v_1 = this.d6v_1;
              this.g6v_1 = this.f6v_1;
              var tmp_5 = this;
              tmp_5.h6v_1 = this.g6v_1;
              this.i6v_1 = this.h6v_1;
              this.n9_1 = 1;
              suspendResult = this.i6v_1.n6m(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.e6v_1 = this.g6v_1;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            var tmp4_elvis_lhs = this.e6v_1;
            var tmp_6;
            if (tmp4_elvis_lhs == null) {
              throw new KeyTypeMissingException();
            } else {
              tmp_6 = tmp4_elvis_lhs;
            }

            return tmp_6;
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
  function KeyManager() {
    KeyManager_instance = this;
    var tmp = this;
    var tmp_0 = KotlinLogging_instance;
    tmp.j6v_1 = tmp_0.w6g(KeyManager$log$lambda);
    this.k6v_1 = HashMap_init_$Create$();
    this.l6v_1 = HashMap_init_$Create$();
    // Inline function 'id.walt.crypto.keys.KeyManager.register' call
    var createFunction = KeyManager$slambda_0(null);
    var tmp_1 = this.n6v();
    tmp_1.l6g(KeyManager$lambda('jwk'));
    var type = createKType(getKClass(JWKKey), arrayOf([]), false);
    this.o6v(type, 'jwk', createFunction);
    // Inline function 'id.walt.crypto.keys.KeyManager.register' call
    var createFunction_0 = KeyManager$slambda_2(null);
    var tmp_2 = this.n6v();
    tmp_2.l6g(KeyManager$lambda_0('tse'));
    var type_0 = createKType(getKClass(TSEKey), arrayOf([]), false);
    this.o6v(type_0, 'tse', createFunction_0);
    var tmp7 = 'oci-rest-api';
    // Inline function 'id.walt.crypto.keys.KeyManager.register' call
    var createFunction_1 = KeyManager$slambda_4(null);
    var tmp_3 = this.n6v();
    tmp_3.l6g(KeyManager$lambda_1(tmp7));
    var type_1 = createKType(getKClass(OCIKeyRestApi), arrayOf([]), false);
    this.o6v(type_1, tmp7, createFunction_1);
    var tmp10 = 'aws-rest-api';
    // Inline function 'id.walt.crypto.keys.KeyManager.register' call
    var createFunction_2 = KeyManager$slambda_6(null);
    var tmp_4 = this.n6v();
    tmp_4.l6g(KeyManager$lambda_2(tmp10));
    var type_2 = createKType(getKClass(AWSKeyRestAPI), arrayOf([]), false);
    this.o6v(type_2, tmp10, createFunction_2);
    // Inline function 'id.walt.crypto.keys.KeyManager.register' call
    var createFunction_3 = KeyManager$slambda_8(null);
    var tmp_5 = this.n6v();
    tmp_5.l6g(KeyManager$lambda_3('azure'));
    var type_3 = createKType(getKClass(AzureKey), arrayOf([]), false);
    this.o6v(type_3, 'azure', createFunction_3);
  }
  protoOf(KeyManager).n6v = function () {
    return this.j6v_1;
  };
  protoOf(KeyManager).m6v = function (type) {
    var tmp0_elvis_lhs = this.k6v_1.m2(type);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new KeyTypeNotSupportedException(type);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(KeyManager).o6v = function (type, typeId, createFunction) {
    // Inline function 'kotlin.collections.set' call
    this.k6v_1.p2(typeId, type);
    // Inline function 'kotlin.collections.set' call
    this.l6v_1.p2(typeId, createFunction);
  };
  protoOf(KeyManager).p6v = function (json, $completion) {
    var tmp = new $resolveSerializedKeyCOROUTINE$1(this, json, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  var KeyManager_instance;
  function KeyManager_getInstance() {
    if (KeyManager_instance == null)
      new KeyManager();
    return KeyManager_instance;
  }
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.q6v_1.b1();
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
    var tmp_1 = [$serializer_getInstance_0(), $serializer_getInstance_1(), $serializer_getInstance_2(), $serializer_getInstance_3(), $serializer_getInstance_4()];
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
    tmp.q6v_1 = lazy(tmp_0, KeyMeta$Companion$_anonymous__3ce14l);
  }
  protoOf(Companion_2).m4u = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_2).x2c = function (typeParamsSerializers) {
    return this.m4u();
  };
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_2();
    return Companion_instance_7;
  }
  function KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this) {
    return $this;
  }
  function KeyMeta() {
    Companion_getInstance_8();
  }
  function Companion_3() {
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    return Companion_instance_8;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.AwsKeyMeta', this, 2);
    tmp0_serialDesc.x2b('keyId', false);
    tmp0_serialDesc.x2b('keySize', true);
    this.r6v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).s6v = function (encoder, value) {
    var tmp0_desc = this.r6v_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.t6v_1);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.u6v_1 == null)) {
      tmp1_output.a26(tmp0_desc, 1, IntSerializer_getInstance(), value.u6v_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_0).v20 = function (encoder, value) {
    return this.s6v(encoder, value instanceof AwsKeyMeta ? value : THROW_CCE());
  };
  protoOf($serializer_0).w20 = function (decoder) {
    var tmp0_desc = this.r6v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return AwsKeyMeta_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_0).u20 = function () {
    return this.r6v_1;
  };
  protoOf($serializer_0).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(IntSerializer_getInstance())];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function AwsKeyMeta_init_$Init$(seen0, keyId, keySize, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_0().r6v_1);
    }
    KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.t6v_1 = keyId;
    if (0 === (seen0 & 2))
      $this.u6v_1 = null;
    else
      $this.u6v_1 = keySize;
    return $this;
  }
  function AwsKeyMeta_init_$Create$(seen0, keyId, keySize, serializationConstructorMarker) {
    return AwsKeyMeta_init_$Init$(seen0, keyId, keySize, serializationConstructorMarker, objectCreate(protoOf(AwsKeyMeta)));
  }
  function AwsKeyMeta(keyId, keySize) {
    keySize = keySize === VOID ? null : keySize;
    KeyMeta.call(this);
    this.t6v_1 = keyId;
    this.u6v_1 = keySize;
  }
  protoOf(AwsKeyMeta).toString = function () {
    return 'AwsKeyMeta(keyId=' + this.t6v_1 + ', keySize=' + this.u6v_1 + ')';
  };
  protoOf(AwsKeyMeta).hashCode = function () {
    var result = getStringHashCode(this.t6v_1);
    result = imul(result, 31) + (this.u6v_1 == null ? 0 : this.u6v_1) | 0;
    return result;
  };
  protoOf(AwsKeyMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AwsKeyMeta))
      return false;
    var tmp0_other_with_cast = other instanceof AwsKeyMeta ? other : THROW_CCE();
    if (!(this.t6v_1 === tmp0_other_with_cast.t6v_1))
      return false;
    if (!(this.u6v_1 == tmp0_other_with_cast.u6v_1))
      return false;
    return true;
  };
  function Companion_4() {
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    return Companion_instance_9;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.AzureKeyMeta', this, 1);
    tmp0_serialDesc.x2b('keyId', false);
    this.v6v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).w6v = function (encoder, value) {
    var tmp0_desc = this.v6v_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.x6v_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_1).v20 = function (encoder, value) {
    return this.w6v(encoder, value instanceof AzureKeyMeta ? value : THROW_CCE());
  };
  protoOf($serializer_1).w20 = function (decoder) {
    var tmp0_desc = this.v6v_1;
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
    return AzureKeyMeta_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_1).u20 = function () {
    return this.v6v_1;
  };
  protoOf($serializer_1).m2c = function () {
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
  function AzureKeyMeta_init_$Init$(seen0, keyId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_1().v6v_1);
    }
    KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.x6v_1 = keyId;
    return $this;
  }
  function AzureKeyMeta_init_$Create$(seen0, keyId, serializationConstructorMarker) {
    return AzureKeyMeta_init_$Init$(seen0, keyId, serializationConstructorMarker, objectCreate(protoOf(AzureKeyMeta)));
  }
  function AzureKeyMeta(keyId) {
    KeyMeta.call(this);
    this.x6v_1 = keyId;
  }
  protoOf(AzureKeyMeta).toString = function () {
    return 'AzureKeyMeta(keyId=' + this.x6v_1 + ')';
  };
  protoOf(AzureKeyMeta).hashCode = function () {
    return getStringHashCode(this.x6v_1);
  };
  protoOf(AzureKeyMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AzureKeyMeta))
      return false;
    var tmp0_other_with_cast = other instanceof AzureKeyMeta ? other : THROW_CCE();
    if (!(this.x6v_1 === tmp0_other_with_cast.x6v_1))
      return false;
    return true;
  };
  function Companion_5() {
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    return Companion_instance_10;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.JwkKeyMeta', this, 2);
    tmp0_serialDesc.x2b('keyId', false);
    tmp0_serialDesc.x2b('keySize', true);
    this.y6v_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).z6v = function (encoder, value) {
    var tmp0_desc = this.y6v_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.a6w_1);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.b6w_1 == null)) {
      tmp1_output.a26(tmp0_desc, 1, IntSerializer_getInstance(), value.b6w_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_2).v20 = function (encoder, value) {
    return this.z6v(encoder, value instanceof JwkKeyMeta ? value : THROW_CCE());
  };
  protoOf($serializer_2).w20 = function (decoder) {
    var tmp0_desc = this.y6v_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return JwkKeyMeta_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_2).u20 = function () {
    return this.y6v_1;
  };
  protoOf($serializer_2).m2c = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_2().y6v_1);
    }
    KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.a6w_1 = keyId;
    if (0 === (seen0 & 2))
      $this.b6w_1 = null;
    else
      $this.b6w_1 = keySize;
    return $this;
  }
  function JwkKeyMeta_init_$Create$(seen0, keyId, keySize, serializationConstructorMarker) {
    return JwkKeyMeta_init_$Init$(seen0, keyId, keySize, serializationConstructorMarker, objectCreate(protoOf(JwkKeyMeta)));
  }
  function JwkKeyMeta(keyId, keySize) {
    keySize = keySize === VOID ? null : keySize;
    KeyMeta.call(this);
    this.a6w_1 = keyId;
    this.b6w_1 = keySize;
  }
  protoOf(JwkKeyMeta).toString = function () {
    return 'JwkKeyMeta(keyId=' + this.a6w_1 + ', keySize=' + this.b6w_1 + ')';
  };
  protoOf(JwkKeyMeta).hashCode = function () {
    var result = getStringHashCode(this.a6w_1);
    result = imul(result, 31) + (this.b6w_1 == null ? 0 : this.b6w_1) | 0;
    return result;
  };
  protoOf(JwkKeyMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JwkKeyMeta))
      return false;
    var tmp0_other_with_cast = other instanceof JwkKeyMeta ? other : THROW_CCE();
    if (!(this.a6w_1 === tmp0_other_with_cast.a6w_1))
      return false;
    if (!(this.b6w_1 == tmp0_other_with_cast.b6w_1))
      return false;
    return true;
  };
  function Companion_6() {
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    return Companion_instance_11;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.OciKeyMeta', this, 2);
    tmp0_serialDesc.x2b('keyId', false);
    tmp0_serialDesc.x2b('keyVersion', false);
    this.c6w_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).d6w = function (encoder, value) {
    var tmp0_desc = this.c6w_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.e6w_1);
    tmp1_output.w25(tmp0_desc, 1, value.f6w_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_3).v20 = function (encoder, value) {
    return this.d6w(encoder, value instanceof OciKeyMeta ? value : THROW_CCE());
  };
  protoOf($serializer_3).w20 = function (decoder) {
    var tmp0_desc = this.c6w_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.r24(tmp0_desc, 1);
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
            tmp5_local1 = tmp6_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return OciKeyMeta_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).u20 = function () {
    return this.c6w_1;
  };
  protoOf($serializer_3).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function OciKeyMeta_init_$Init$(seen0, keyId, keyVersion, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().c6w_1);
    }
    KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.e6w_1 = keyId;
    $this.f6w_1 = keyVersion;
    return $this;
  }
  function OciKeyMeta_init_$Create$(seen0, keyId, keyVersion, serializationConstructorMarker) {
    return OciKeyMeta_init_$Init$(seen0, keyId, keyVersion, serializationConstructorMarker, objectCreate(protoOf(OciKeyMeta)));
  }
  function OciKeyMeta(keyId, keyVersion) {
    KeyMeta.call(this);
    this.e6w_1 = keyId;
    this.f6w_1 = keyVersion;
  }
  protoOf(OciKeyMeta).toString = function () {
    return 'OciKeyMeta(keyId=' + this.e6w_1 + ', keyVersion=' + this.f6w_1 + ')';
  };
  protoOf(OciKeyMeta).hashCode = function () {
    var result = getStringHashCode(this.e6w_1);
    result = imul(result, 31) + getStringHashCode(this.f6w_1) | 0;
    return result;
  };
  protoOf(OciKeyMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OciKeyMeta))
      return false;
    var tmp0_other_with_cast = other instanceof OciKeyMeta ? other : THROW_CCE();
    if (!(this.e6w_1 === tmp0_other_with_cast.e6w_1))
      return false;
    if (!(this.f6w_1 === tmp0_other_with_cast.f6w_1))
      return false;
    return true;
  };
  function Companion_7() {
  }
  var Companion_instance_12;
  function Companion_getInstance_13() {
    return Companion_instance_12;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.TseKeyMeta', this, 1);
    tmp0_serialDesc.x2b('keyId', false);
    this.g6w_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).h6w = function (encoder, value) {
    var tmp0_desc = this.g6w_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.i6w_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_4).v20 = function (encoder, value) {
    return this.h6w(encoder, value instanceof TseKeyMeta ? value : THROW_CCE());
  };
  protoOf($serializer_4).w20 = function (decoder) {
    var tmp0_desc = this.g6w_1;
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
    return TseKeyMeta_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_4).u20 = function () {
    return this.g6w_1;
  };
  protoOf($serializer_4).m2c = function () {
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
  function TseKeyMeta_init_$Init$(seen0, keyId, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_4().g6w_1);
    }
    KeyMeta_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.i6w_1 = keyId;
    return $this;
  }
  function TseKeyMeta_init_$Create$(seen0, keyId, serializationConstructorMarker) {
    return TseKeyMeta_init_$Init$(seen0, keyId, serializationConstructorMarker, objectCreate(protoOf(TseKeyMeta)));
  }
  function TseKeyMeta(keyId) {
    KeyMeta.call(this);
    this.i6w_1 = keyId;
  }
  protoOf(TseKeyMeta).toString = function () {
    return 'TseKeyMeta(keyId=' + this.i6w_1 + ')';
  };
  protoOf(TseKeyMeta).hashCode = function () {
    return getStringHashCode(this.i6w_1);
  };
  protoOf(TseKeyMeta).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TseKeyMeta))
      return false;
    var tmp0_other_with_cast = other instanceof TseKeyMeta ? other : THROW_CCE();
    if (!(this.i6w_1 === tmp0_other_with_cast.i6w_1))
      return false;
    return true;
  };
  function KeySerialization$keySerializationJson$lambda($this$Json) {
    $this$Json.n4t_1 = KeySerialization_getInstance().j6w_1;
    return Unit_instance;
  }
  function KeySerialization$registerExternalKeyType$lambda($this$Json) {
    $this$Json.n4t_1 = KeySerialization_getInstance().j6w_1;
    return Unit_instance;
  }
  function KeySerialization$deserializeJWTKeyAsync$slambda($json, resultContinuation) {
    this.t6w_1 = $json;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeySerialization$deserializeJWTKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization$deserializeJWTKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(KeySerialization$deserializeJWTKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = KeySerialization_getInstance().v6w(this.t6w_1, this);
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
  protoOf(KeySerialization$deserializeJWTKeyAsync$slambda).ja = function (completion) {
    return new KeySerialization$deserializeJWTKeyAsync$slambda(this.t6w_1, completion);
  };
  function KeySerialization$deserializeJWTKeyAsync$slambda_0($json, resultContinuation) {
    var i = new KeySerialization$deserializeJWTKeyAsync$slambda($json, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function KeySerialization$deserializeKeyAsync$slambda($json, resultContinuation) {
    this.e6x_1 = $json;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeySerialization$deserializeKeyAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization$deserializeKeyAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(KeySerialization$deserializeKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = KeySerialization_getInstance().f6x(this.e6x_1, this);
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
  protoOf(KeySerialization$deserializeKeyAsync$slambda).ja = function (completion) {
    return new KeySerialization$deserializeKeyAsync$slambda(this.e6x_1, completion);
  };
  function KeySerialization$deserializeKeyAsync$slambda_0($json, resultContinuation) {
    var i = new KeySerialization$deserializeKeyAsync$slambda($json, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function KeySerialization$deserializeKeyObjectAsync$slambda($json, resultContinuation) {
    this.o6x_1 = $json;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(KeySerialization$deserializeKeyObjectAsync$slambda).u6w = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization$deserializeKeyObjectAsync$slambda).ac = function ($completion) {
    return this.u6w($completion);
  };
  protoOf(KeySerialization$deserializeKeyObjectAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = KeySerialization_getInstance().p6x(this.o6x_1, this);
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
  protoOf(KeySerialization$deserializeKeyObjectAsync$slambda).ja = function (completion) {
    return new KeySerialization$deserializeKeyObjectAsync$slambda(this.o6x_1, completion);
  };
  function KeySerialization$deserializeKeyObjectAsync$slambda_0($json, resultContinuation) {
    var i = new KeySerialization$deserializeKeyObjectAsync$slambda($json, resultContinuation);
    var l = function ($completion) {
      return i.u6w($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $deserializeKeyCOROUTINE$2(_this__u8e3s4, json, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y6x_1 = _this__u8e3s4;
    this.z6x_1 = json;
  }
  protoOf($deserializeKeyCOROUTINE$2).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.a6y_1 = this.y6x_1;
            this.b6y_1 = this.a6y_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.d6y_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.e6y_1 = this.b6y_1;
            this.f6y_1 = this.e6y_1;
            var tmp_3 = this;
            var tmp0 = this.f6y_1.k6w_1;
            var string = this.z6x_1;
            var this_0 = tmp0.w24();
            var this_1 = serializer(this_0, createKType(getKClass(Key), arrayOf([]), false));
            tmp_3.g6y_1 = tmp0.y21(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), string);
            this.h6y_1 = this.g6y_1;
            var tmp_4 = this;
            tmp_4.i6y_1 = this.h6y_1;
            this.j6y_1 = this.i6y_1;
            this.n9_1 = 1;
            suspendResult = this.j6y_1.n6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = this.h6y_1;
            var tmp_5 = this;
            this.d6y_1;
            tmp_5.c6y_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_6 = this.q9_1;
            if (tmp_6 instanceof Error) {
              var e = this.q9_1;
              var tmp_7 = this;
              tmp_7.c6y_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.c6y_1);
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
  protoOf($deserializeKeyCOROUTINE$2)['<set-state>'] = protoOf($deserializeKeyCOROUTINE$2).u9;
  protoOf($deserializeKeyCOROUTINE$2)['<get-state>'] = protoOf($deserializeKeyCOROUTINE$2).v9;
  protoOf($deserializeKeyCOROUTINE$2)['<set-exceptionState>'] = protoOf($deserializeKeyCOROUTINE$2).w9;
  protoOf($deserializeKeyCOROUTINE$2)['<get-exceptionState>'] = protoOf($deserializeKeyCOROUTINE$2).x9;
  protoOf($deserializeKeyCOROUTINE$2)['<set-result>'] = protoOf($deserializeKeyCOROUTINE$2).y9;
  protoOf($deserializeKeyCOROUTINE$2)['<get-result>'] = protoOf($deserializeKeyCOROUTINE$2).z9;
  protoOf($deserializeKeyCOROUTINE$2)['<set-exception>'] = protoOf($deserializeKeyCOROUTINE$2).aa;
  protoOf($deserializeKeyCOROUTINE$2)['<get-exception>'] = protoOf($deserializeKeyCOROUTINE$2).ba;
  protoOf($deserializeKeyCOROUTINE$2)['<set-finallyPath>'] = protoOf($deserializeKeyCOROUTINE$2).ca;
  protoOf($deserializeKeyCOROUTINE$2)['<get-finallyPath>'] = protoOf($deserializeKeyCOROUTINE$2).da;
  protoOf($deserializeKeyCOROUTINE$2)['<get-context>'] = protoOf($deserializeKeyCOROUTINE$2).t9;
  function $deserializeKeyObjectCOROUTINE$3(_this__u8e3s4, json, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s6y_1 = _this__u8e3s4;
    this.t6y_1 = json;
  }
  protoOf($deserializeKeyObjectCOROUTINE$3).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.u6y_1 = this.s6y_1;
            this.v6y_1 = this.u6y_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.x6y_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.y6y_1 = this.v6y_1;
            this.z6y_1 = this.y6y_1;
            var tmp_3 = this;
            var tmp0 = this.z6y_1.k6w_1;
            var json = this.t6y_1;
            var this_0 = tmp0.w24();
            var this_1 = serializer(this_0, createKType(getKClass(Key), arrayOf([]), false));
            tmp_3.a6z_1 = tmp0.g4s(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), json);
            this.b6z_1 = this.a6z_1;
            var tmp_4 = this;
            tmp_4.c6z_1 = this.b6z_1;
            this.d6z_1 = this.c6z_1;
            this.n9_1 = 1;
            suspendResult = this.d6z_1.n6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = this.b6z_1;
            var tmp_5 = this;
            this.x6y_1;
            tmp_5.w6y_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_6 = this.q9_1;
            if (tmp_6 instanceof Error) {
              var e = this.q9_1;
              var tmp_7 = this;
              tmp_7.w6y_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.w6y_1);
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
  protoOf($deserializeKeyObjectCOROUTINE$3)['<set-state>'] = protoOf($deserializeKeyObjectCOROUTINE$3).u9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-state>'] = protoOf($deserializeKeyObjectCOROUTINE$3).v9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<set-exceptionState>'] = protoOf($deserializeKeyObjectCOROUTINE$3).w9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-exceptionState>'] = protoOf($deserializeKeyObjectCOROUTINE$3).x9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<set-result>'] = protoOf($deserializeKeyObjectCOROUTINE$3).y9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-result>'] = protoOf($deserializeKeyObjectCOROUTINE$3).z9;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<set-exception>'] = protoOf($deserializeKeyObjectCOROUTINE$3).aa;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-exception>'] = protoOf($deserializeKeyObjectCOROUTINE$3).ba;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<set-finallyPath>'] = protoOf($deserializeKeyObjectCOROUTINE$3).ca;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-finallyPath>'] = protoOf($deserializeKeyObjectCOROUTINE$3).da;
  protoOf($deserializeKeyObjectCOROUTINE$3)['<get-context>'] = protoOf($deserializeKeyObjectCOROUTINE$3).t9;
  function $deserializeJWTKeyCOROUTINE$4(_this__u8e3s4, json, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m6z_1 = _this__u8e3s4;
    this.n6z_1 = json;
  }
  protoOf($deserializeJWTKeyCOROUTINE$4).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.o6z_1 = this.m6z_1;
            this.p6z_1 = this.o6z_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.r6z_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.s6z_1 = this.p6z_1;
            this.t6z_1 = this.s6z_1;
            var tmp_3 = this;
            var tmp2 = this.t6z_1.k6w_1;
            var tmp_4 = JsonUtils_getInstance();
            var this_0 = this.n6z_1;
            var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_0.s()));
            var _iterator__ex2g4s = this_0.z().p();
            while (_iterator__ex2g4s.q()) {
              var element = _iterator__ex2g4s.r();
              var tmp_5 = element.a1();
              var tmp_6;
              var tmp_7 = element.b1();
              if (tmp_7 instanceof JsonPrimitive) {
                tmp_6 = get_jsonPrimitive(element.b1()).q4u();
              } else {
                tmp_6 = toString_0(element.b1());
              }
              destination.p2(tmp_5, tmp_6);
            }

            var json = tmp_4.mapToJsonObject(destination);
            var this_1 = tmp2.w24();
            var this_2 = serializer(this_1, createKType(getKClass(Key), arrayOf([]), false));
            tmp_3.u6z_1 = tmp2.g4s(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), json);
            this.v6z_1 = this.u6z_1;
            var tmp_8 = this;
            tmp_8.w6z_1 = this.v6z_1;
            this.x6z_1 = this.w6z_1;
            this.n9_1 = 1;
            suspendResult = this.x6z_1.n6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp1 = this.v6z_1;
            var tmp_9 = this;
            this.r6z_1;
            tmp_9.q6z_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_10 = this.q9_1;
            if (tmp_10 instanceof Error) {
              var e = this.q9_1;
              var tmp_11 = this;
              tmp_11.q6z_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.q6z_1);
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
  protoOf($deserializeJWTKeyCOROUTINE$4)['<set-state>'] = protoOf($deserializeJWTKeyCOROUTINE$4).u9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-state>'] = protoOf($deserializeJWTKeyCOROUTINE$4).v9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<set-exceptionState>'] = protoOf($deserializeJWTKeyCOROUTINE$4).w9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-exceptionState>'] = protoOf($deserializeJWTKeyCOROUTINE$4).x9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<set-result>'] = protoOf($deserializeJWTKeyCOROUTINE$4).y9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-result>'] = protoOf($deserializeJWTKeyCOROUTINE$4).z9;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<set-exception>'] = protoOf($deserializeJWTKeyCOROUTINE$4).aa;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-exception>'] = protoOf($deserializeJWTKeyCOROUTINE$4).ba;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<set-finallyPath>'] = protoOf($deserializeJWTKeyCOROUTINE$4).ca;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-finallyPath>'] = protoOf($deserializeJWTKeyCOROUTINE$4).da;
  protoOf($deserializeJWTKeyCOROUTINE$4)['<get-context>'] = protoOf($deserializeJWTKeyCOROUTINE$4).t9;
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
    builder_0.n2l(clazz, tmp$ret$1);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_0 = getKClass(TSEKey);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer_0(createKType(getKClass(TSEKey), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    builder_0.n2l(clazz_0, tmp$ret$4);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_1 = getKClass(OCIKeyRestApi);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer_0(createKType(getKClass(OCIKeyRestApi), arrayOf([]), false));
    var tmp$ret$7 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    builder_0.n2l(clazz_1, tmp$ret$7);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_2 = getKClass(AWSKeyRestAPI);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer_0(createKType(getKClass(AWSKeyRestAPI), arrayOf([]), false));
    var tmp$ret$10 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    builder_0.n2l(clazz_2, tmp$ret$10);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_3 = getKClass(AzureKey);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_4 = serializer_0(createKType(getKClass(AzureKey), arrayOf([]), false));
    var tmp$ret$13 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
    builder_0.n2l(clazz_3, tmp$ret$13);
    builder_0.o2l(builder);
    tmp.j6w_1 = builder.y29();
    var tmp_0 = this;
    tmp_0.k6w_1 = Json(VOID, KeySerialization$keySerializationJson$lambda);
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
    builder_0.n2l(clazz, tmp$ret$1);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_0 = getKClass(TSEKey);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer_0(createKType(getKClass(TSEKey), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    builder_0.n2l(clazz_0, tmp$ret$4);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_1 = getKClass(OCIKeyRestApi);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer_0(createKType(getKClass(OCIKeyRestApi), arrayOf([]), false));
    var tmp$ret$7 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    builder_0.n2l(clazz_1, tmp$ret$7);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_2 = getKClass(AWSKeyRestAPI);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer_0(createKType(getKClass(AWSKeyRestAPI), arrayOf([]), false));
    var tmp$ret$10 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    builder_0.n2l(clazz_2, tmp$ret$10);
    // Inline function 'kotlinx.serialization.modules.subclass' call
    var clazz_3 = getKClass(AzureKey);
    // Inline function 'kotlinx.serialization.serializer' call
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_4 = serializer_0(createKType(getKClass(AzureKey), arrayOf([]), false));
    var tmp$ret$13 = isInterface(this_4, KSerializer) ? this_4 : THROW_CCE();
    builder_0.n2l(clazz_3, tmp$ret$13);
    builder_0.n2l(keyClass, serializer_1(keyClass));
    builder_0.o2l(builder);
    tmp.j6w_1 = builder.y29();
    var tmp_0 = this;
    tmp_0.k6w_1 = Json(VOID, KeySerialization$registerExternalKeyType$lambda);
  };
  protoOf(KeySerialization).serializeKey = function (key) {
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_0 = this.k6w_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(Key), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    return this_0.x21(tmp$ret$1, key);
  };
  protoOf(KeySerialization).serializeKeyToJson = function (key) {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = this.k6w_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(Key), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    return this_0.f4s(tmp$ret$1, key);
  };
  protoOf(KeySerialization).f6x = function (json, $completion) {
    var tmp = new $deserializeKeyCOROUTINE$2(this, json, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization).p6x = function (json, $completion) {
    var tmp = new $deserializeKeyObjectCOROUTINE$3(this, json, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization).v6w = function (json, $completion) {
    var tmp = new $deserializeJWTKeyCOROUTINE$4(this, json, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(KeySerialization).y6z = function (json) {
    var tmp = KeySerialization$deserializeJWTKeyAsync$slambda_0(json, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(KeySerialization).z6z = function (json) {
    var tmp = KeySerialization$deserializeKeyAsync$slambda_0(json, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(KeySerialization).a70 = function (json) {
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
    return $this.b6s_1.b1();
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
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  function Companion_8() {
    Companion_instance_13 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.b6s_1 = lazy(tmp_0, KeyType$Companion$_anonymous__p3scwm);
  }
  protoOf(Companion_8).m4u = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_8).x2c = function (typeParamsSerializers) {
    return this.m4u();
  };
  var Companion_instance_13;
  function Companion_getInstance_14() {
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
    Companion_getInstance_14();
  }
  var $ENTRIES;
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
  protoOf(KeyUtils).f70 = function (plaintext, headers, keyType) {
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap_init_$Create$_0(headers);
    this_0.p2('alg', JsonUtils_getInstance().toJsonElement(jwsSigningAlgorithm(keyType)));
    var appendedHeader = this_0;
    var tmp = Base64Utils_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var this_1 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_2 = this_1.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(this_2, createKType(getKClass(HashMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
    var tmp$ret$3 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    var tmp$ret$4 = this_1.x21(tmp$ret$3, appendedHeader);
    var header = tmp.encodeToBase64Url(encodeToByteArray(tmp$ret$4));
    var payload = Base64Utils_getInstance().encodeToBase64Url(plaintext);
    return new Triple(header, payload, encodeToByteArray(header + '.' + payload));
  };
  protoOf(KeyUtils).g70 = function (rawSignature, header, payload) {
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
    $this$HttpClient.p3l(tmp, AWSAuth$Companion$http$lambda$lambda);
    defaultRequest($this$HttpClient, AWSAuth$Companion$http$lambda$lambda_0);
    var tmp_0 = get_Logging();
    $this$HttpClient.p3l(tmp_0, AWSAuth$Companion$http$lambda$lambda_1);
    return Unit_instance;
  }
  function AWSAuth$Companion$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function AWSAuth$Companion$http$lambda$lambda_0($this$defaultRequest) {
    header($this$defaultRequest, HttpHeaders_getInstance().q2y_1, Application_getInstance().y2v_1);
    return Unit_instance;
  }
  function AWSAuth$Companion$http$lambda$lambda_1($this$install) {
    $this$install.o5g(get_DEFAULT(Companion_instance_2));
    $this$install.n5g_1 = LogLevel_ALL_getInstance();
    return Unit_instance;
  }
  function Companion_9() {
    Companion_instance_14 = this;
    var tmp = this;
    tmp.h70_1 = HttpClient(AWSAuth$Companion$http$lambda);
    var tmp_0 = this;
    var tmp_1 = Companion_instance_3.i6d();
    // Inline function 'kotlin.time.Companion.hours' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(24, DurationUnit_HOURS_getInstance());
    tmp_0.i70_1 = tmp_1.p6d(tmp$ret$0).x2x();
  }
  protoOf(Companion_9).m4u = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_14;
  function Companion_getInstance_15() {
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
    tmp0_serialDesc.x2b('accessKeyId', true);
    tmp0_serialDesc.x2b('secretAccessKey', true);
    tmp0_serialDesc.x2b('region', true);
    tmp0_serialDesc.x2b('roleName', true);
    this.j70_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).k70 = function (encoder, value) {
    var tmp0_desc = this.j70_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.accessKeyId == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.accessKeyId);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.secretAccessKey == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value.secretAccessKey);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.region == null)) {
      tmp1_output.a26(tmp0_desc, 2, StringSerializer_getInstance(), value.region);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.roleName == null)) {
      tmp1_output.a26(tmp0_desc, 3, StringSerializer_getInstance(), value.roleName);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_5).v20 = function (encoder, value) {
    return this.k70(encoder, value instanceof AWSAuth ? value : THROW_CCE());
  };
  protoOf($serializer_5).w20 = function (decoder) {
    var tmp0_desc = this.j70_1;
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
      tmp5_local1 = tmp8_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
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
            tmp5_local1 = tmp8_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return AWSAuth_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_5).u20 = function () {
    return this.j70_1;
  };
  protoOf($serializer_5).m2c = function () {
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_5().j70_1);
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
    Companion_getInstance_15();
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
  protoOf(AWSAuth).l70 = function () {
    return this.accessKeyId;
  };
  protoOf(AWSAuth).m70 = function () {
    return this.secretAccessKey;
  };
  protoOf(AWSAuth).n70 = function () {
    return this.region;
  };
  protoOf(AWSAuth).o70 = function () {
    return this.roleName;
  };
  protoOf(AWSAuth).dc = function () {
    return this.accessKeyId;
  };
  protoOf(AWSAuth).ec = function () {
    return this.secretAccessKey;
  };
  protoOf(AWSAuth).yp = function () {
    return this.region;
  };
  protoOf(AWSAuth).p70 = function () {
    return this.roleName;
  };
  protoOf(AWSAuth).q70 = function (accessKeyId, secretAccessKey, region, roleName) {
    return new AWSAuth(accessKeyId, secretAccessKey, region, roleName);
  };
  protoOf(AWSAuth).copy = function (accessKeyId, secretAccessKey, region, roleName, $super) {
    accessKeyId = accessKeyId === VOID ? this.accessKeyId : accessKeyId;
    secretAccessKey = secretAccessKey === VOID ? this.secretAccessKey : secretAccessKey;
    region = region === VOID ? this.region : region;
    roleName = roleName === VOID ? this.roleName : roleName;
    return $super === VOID ? this.q70(accessKeyId, secretAccessKey, region, roleName) : $super.q70.call(this, accessKeyId, secretAccessKey, region, roleName);
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
  function Companion_getInstance_16() {
    return Companion_instance_15;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.aws.AWSKeyMetadata', this, 1);
    tmp0_serialDesc.x2b('auth', false);
    this.r70_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).s70 = function (encoder, value) {
    var tmp0_desc = this.r70_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.y25(tmp0_desc, 0, $serializer_getInstance_5(), value.t70_1);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_6).v20 = function (encoder, value) {
    return this.s70(encoder, value instanceof AWSKeyMetadata ? value : THROW_CCE());
  };
  protoOf($serializer_6).w20 = function (decoder) {
    var tmp0_desc = this.r70_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.h24(tmp0_desc);
    if (tmp5_input.x24()) {
      tmp4_local0 = tmp5_input.t24(tmp0_desc, 0, $serializer_getInstance_5(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.t24(tmp0_desc, 0, $serializer_getInstance_5(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.i24(tmp0_desc);
    return AWSKeyMetadata_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_6).u20 = function () {
    return this.r70_1;
  };
  protoOf($serializer_6).m2c = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_6().r70_1);
    }
    $this.t70_1 = auth;
    return $this;
  }
  function AWSKeyMetadata_init_$Create$_0(seen0, auth, serializationConstructorMarker) {
    return AWSKeyMetadata_init_$Init$_0(seen0, auth, serializationConstructorMarker, objectCreate(protoOf(AWSKeyMetadata)));
  }
  function AWSKeyMetadata(auth) {
    this.t70_1 = auth;
  }
  protoOf(AWSKeyMetadata).toString = function () {
    return 'AWSKeyMetadata(auth=' + this.t70_1.toString() + ')';
  };
  protoOf(AWSKeyMetadata).hashCode = function () {
    return this.t70_1.hashCode();
  };
  protoOf(AWSKeyMetadata).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AWSKeyMetadata))
      return false;
    var tmp0_other_with_cast = other instanceof AWSKeyMetadata ? other : THROW_CCE();
    if (!this.t70_1.equals(tmp0_other_with_cast.t70_1))
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
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function keyTypeToAwsKeyMapping($this, type) {
    var tmp;
    switch (type.t2_1) {
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
        throw new KeyTypeNotSupportedException(type.s2_1);
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
    return Companion_getInstance_14().m4u();
  }
  function AWSKeyRestAPI$Companion$getIMDSv2Token$lambda($ttlSeconds) {
    return function ($this$headers) {
      $this$headers.l2r('X-aws-ec2-metadata-token-ttl-seconds', $ttlSeconds.toString());
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
      $this$headers.l2r('X-aws-ec2-metadata-token', $token);
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
      $this$headers.l2r('X-aws-ec2-metadata-token', $token);
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
      var _iterator__ex2g4s = $headers.z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var key = element.a1();
        // Inline function 'kotlin.collections.component2' call
        var value = element.b1();
        $this$headers.l2r(key, value);
      }
      $this$headers.l2r(HttpHeaders_getInstance().c2z_1, $awsKmsUrl);
      $this$headers.l2r('X-Amz-Target', 'TrentService.GetPublicKey');
      var tmp0_safe_receiver = get__accessAWS();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x71_1;
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
        $this$headers.l2r('X-Amz-Security-Token', tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function AWSKeyRestAPI$Companion$awsJsonDataBody$lambda($this_awsJsonDataBody) {
    return function () {
      return 'AWS server (URL: ' + get_request($this_awsJsonDataBody).u3m().toString() + ') returned an invalid response: ';
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
      var _iterator__ex2g4s = $headers.z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var key = element.a1();
        // Inline function 'kotlin.collections.component2' call
        var value = element.b1();
        $this$headers.l2r(key, value);
      }
      $this$headers.l2r(HttpHeaders_getInstance().c2z_1, $awsKmsUrl);
      $this$headers.l2r('X-Amz-Target', 'TrentService.CreateKey');
      var tmp0_safe_receiver = get__accessAWS();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x71_1;
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
        $this$headers.l2r('X-Amz-Security-Token', tmp2_safe_receiver);
      }
      return Unit_instance;
    };
  }
  function AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda($config, $keyId, resultContinuation) {
    this.i72_1 = $config;
    this.j72_1 = $keyId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda).x6m = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda).ac = function ($completion) {
    return this.x6m($completion);
  };
  protoOf(AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_getInstance_17().k72(this.i72_1, this.j72_1, this);
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
  protoOf(AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda(this.i72_1, this.j72_1, completion);
  };
  function AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda_0($config, $keyId, resultContinuation) {
    var i = new AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda($config, $keyId, resultContinuation);
    var l = function ($completion) {
      return i.x6m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $authAccessCOROUTINE$13(_this__u8e3s4, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t72_1 = _this__u8e3s4;
    this.u72_1 = config;
  }
  protoOf($authAccessCOROUTINE$13).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            var tmp_1;
            var tmp0_safe_receiver = this.u72_1.t70_1.accessKeyId;
            var tmp_2;
            if (tmp0_safe_receiver == null) {
              tmp_2 = null;
            } else {
              tmp_2 = charSequenceLength(tmp0_safe_receiver) > 0;
            }

            if (tmp_2 === true) {
              var tmp1_safe_receiver = this.u72_1.t70_1.secretAccessKey;
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

            tmp_0.v72_1 = tmp_1;
            if (this.v72_1) {
              set__accessAWS(new AWSAuthConfiguration(this.u72_1.t70_1.accessKeyId, this.u72_1.t70_1.secretAccessKey, this.u72_1.t70_1.region, null, null, null));
              set_timeoutAt(null);
              this.n9_1 = 5;
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = this.t72_1.getIMDSv2Token$default(VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.w72_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.t72_1.z72(this.w72_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x72_1 = suspendResult;
            this.y72_1 = this.u72_1.t70_1.roleName;
            var tmp_4;
            var tmp2_safe_receiver = this.y72_1;
            var tmp_5;
            if (tmp2_safe_receiver == null) {
              tmp_5 = null;
            } else {
              tmp_5 = charSequenceLength(tmp2_safe_receiver) > 0;
            }

            if (tmp_5 === true) {
              tmp_4 = !(this.y72_1 === this.x72_1);
            } else {
              tmp_4 = false;
            }

            if (tmp_4) {
              throw IllegalArgumentException_init_$Create$('Role name mismatch please check the role name provided.');
            }

            this.n9_1 = 3;
            suspendResult = this.t72_1.a73(this.w72_1, toString(this.y72_1), toString(this.u72_1.t70_1.region), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            set__accessAWS(ARGUMENT);
            var tmp_6 = System_instance.d5v();
            Companion_getInstance();
            set_timeoutAt(tmp_6.dp(toDuration(3600, DurationUnit_SECONDS_getInstance())));
            this.n9_1 = 5;
            continue $sm;
          case 4:
            throw this.q9_1;
          case 5:
            return Unit_instance;
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
  protoOf($authAccessCOROUTINE$13)['<set-state>'] = protoOf($authAccessCOROUTINE$13).u9;
  protoOf($authAccessCOROUTINE$13)['<get-state>'] = protoOf($authAccessCOROUTINE$13).v9;
  protoOf($authAccessCOROUTINE$13)['<set-exceptionState>'] = protoOf($authAccessCOROUTINE$13).w9;
  protoOf($authAccessCOROUTINE$13)['<get-exceptionState>'] = protoOf($authAccessCOROUTINE$13).x9;
  protoOf($authAccessCOROUTINE$13)['<set-result>'] = protoOf($authAccessCOROUTINE$13).y9;
  protoOf($authAccessCOROUTINE$13)['<get-result>'] = protoOf($authAccessCOROUTINE$13).z9;
  protoOf($authAccessCOROUTINE$13)['<set-exception>'] = protoOf($authAccessCOROUTINE$13).aa;
  protoOf($authAccessCOROUTINE$13)['<get-exception>'] = protoOf($authAccessCOROUTINE$13).ba;
  protoOf($authAccessCOROUTINE$13)['<set-finallyPath>'] = protoOf($authAccessCOROUTINE$13).ca;
  protoOf($authAccessCOROUTINE$13)['<get-finallyPath>'] = protoOf($authAccessCOROUTINE$13).da;
  protoOf($authAccessCOROUTINE$13)['<get-context>'] = protoOf($authAccessCOROUTINE$13).t9;
  function $getAccessCOROUTINE$14(_this__u8e3s4, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j73_1 = _this__u8e3s4;
    this.k73_1 = config;
  }
  protoOf($getAccessCOROUTINE$14).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0;
            if (get__accessAWS() == null || (!(get_timeoutAt() == null) && ensureNotNull(get_timeoutAt()).g6c(System_instance.d5v()) <= 0)) {
              tmp_0 = true;
            } else {
              var tmp0_safe_receiver = get__accessAWS();
              tmp_0 = !(this.k73_1.t70_1.roleName == (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z71_1));
            }

            if (tmp_0) {
              this.n9_1 = 1;
              suspendResult = this.j73_1.l73(this.k73_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return get__accessAWS();
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
  protoOf($getAccessCOROUTINE$14)['<set-state>'] = protoOf($getAccessCOROUTINE$14).u9;
  protoOf($getAccessCOROUTINE$14)['<get-state>'] = protoOf($getAccessCOROUTINE$14).v9;
  protoOf($getAccessCOROUTINE$14)['<set-exceptionState>'] = protoOf($getAccessCOROUTINE$14).w9;
  protoOf($getAccessCOROUTINE$14)['<get-exceptionState>'] = protoOf($getAccessCOROUTINE$14).x9;
  protoOf($getAccessCOROUTINE$14)['<set-result>'] = protoOf($getAccessCOROUTINE$14).y9;
  protoOf($getAccessCOROUTINE$14)['<get-result>'] = protoOf($getAccessCOROUTINE$14).z9;
  protoOf($getAccessCOROUTINE$14)['<set-exception>'] = protoOf($getAccessCOROUTINE$14).aa;
  protoOf($getAccessCOROUTINE$14)['<get-exception>'] = protoOf($getAccessCOROUTINE$14).ba;
  protoOf($getAccessCOROUTINE$14)['<set-finallyPath>'] = protoOf($getAccessCOROUTINE$14).ca;
  protoOf($getAccessCOROUTINE$14)['<get-finallyPath>'] = protoOf($getAccessCOROUTINE$14).da;
  protoOf($getAccessCOROUTINE$14)['<get-context>'] = protoOf($getAccessCOROUTINE$14).t9;
  function $getIMDSv2TokenCOROUTINE$15(_this__u8e3s4, ttlSeconds, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u73_1 = _this__u8e3s4;
    this.v73_1 = ttlSeconds;
  }
  protoOf($getIMDSv2TokenCOROUTINE$15).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.w73_1 = 'http://169.254.169.254/latest/api/token';
            var tmp_0 = this;
            tmp_0.x73_1 = this.u73_1.e6u_1;
            var tmp_1 = this;
            tmp_1.y73_1 = this.w73_1;
            this.z73_1 = this.x73_1;
            this.a74_1 = this.y73_1;
            var tmp_2 = this;
            tmp_2.b74_1 = this.z73_1;
            this.c74_1 = this.b74_1;
            var tmp_3 = this;
            tmp_3.d74_1 = this.c74_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.a74_1);
            headers(this_0, AWSKeyRestAPI$Companion$getIMDSv2Token$lambda(this.v73_1));
            tmp_4.e74_1 = this_0;
            this.f74_1 = this.d74_1;
            this.g74_1 = this.e74_1;
            this.g74_1.j3k_1 = Companion_getInstance_0().e32_1;
            var tmp_5 = this;
            tmp_5.h74_1 = this.f74_1;
            var tmp_6 = this;
            tmp_6.i74_1 = this.g74_1;
            this.j74_1 = this.h74_1;
            this.k74_1 = this.i74_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.k74_1, this.j74_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l74_1 = suspendResult;
            var tmp_7 = get_logger();
            tmp_7.l6g(AWSKeyRestAPI$Companion$getIMDSv2Token$lambda_0(this.l74_1));
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.l74_1, VOID, this);
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
  protoOf($getIMDSv2TokenCOROUTINE$15)['<set-state>'] = protoOf($getIMDSv2TokenCOROUTINE$15).u9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-state>'] = protoOf($getIMDSv2TokenCOROUTINE$15).v9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<set-exceptionState>'] = protoOf($getIMDSv2TokenCOROUTINE$15).w9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-exceptionState>'] = protoOf($getIMDSv2TokenCOROUTINE$15).x9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<set-result>'] = protoOf($getIMDSv2TokenCOROUTINE$15).y9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-result>'] = protoOf($getIMDSv2TokenCOROUTINE$15).z9;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<set-exception>'] = protoOf($getIMDSv2TokenCOROUTINE$15).aa;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-exception>'] = protoOf($getIMDSv2TokenCOROUTINE$15).ba;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<set-finallyPath>'] = protoOf($getIMDSv2TokenCOROUTINE$15).ca;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-finallyPath>'] = protoOf($getIMDSv2TokenCOROUTINE$15).da;
  protoOf($getIMDSv2TokenCOROUTINE$15)['<get-context>'] = protoOf($getIMDSv2TokenCOROUTINE$15).t9;
  function $getRoleNameCOROUTINE$16(_this__u8e3s4, token, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u74_1 = _this__u8e3s4;
    this.v74_1 = token;
  }
  protoOf($getRoleNameCOROUTINE$16).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.w74_1 = 'http://169.254.169.254/latest/meta-data/iam/security-credentials/';
            var tmp_0 = this;
            tmp_0.x74_1 = this.u74_1.e6u_1;
            var tmp_1 = this;
            tmp_1.y74_1 = this.w74_1;
            this.z74_1 = this.x74_1;
            this.a75_1 = this.y74_1;
            var tmp_2 = this;
            tmp_2.b75_1 = this.z74_1;
            this.c75_1 = this.b75_1;
            var tmp_3 = this;
            tmp_3.d75_1 = this.c75_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.a75_1);
            headers(this_0, AWSKeyRestAPI$Companion$getRoleName$lambda(this.v74_1));
            tmp_4.e75_1 = this_0;
            this.f75_1 = this.d75_1;
            this.g75_1 = this.e75_1;
            this.g75_1.j3k_1 = Companion_getInstance_0().c32_1;
            var tmp_5 = this;
            tmp_5.h75_1 = this.f75_1;
            var tmp_6 = this;
            tmp_6.i75_1 = this.g75_1;
            this.j75_1 = this.h75_1;
            this.k75_1 = this.i75_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.k75_1, this.j75_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l75_1 = suspendResult;
            var tmp_7 = get_logger();
            tmp_7.n6g(AWSKeyRestAPI$Companion$getRoleName$lambda_0(this.l75_1));
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.l75_1, VOID, this);
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
  protoOf($getRoleNameCOROUTINE$16)['<set-state>'] = protoOf($getRoleNameCOROUTINE$16).u9;
  protoOf($getRoleNameCOROUTINE$16)['<get-state>'] = protoOf($getRoleNameCOROUTINE$16).v9;
  protoOf($getRoleNameCOROUTINE$16)['<set-exceptionState>'] = protoOf($getRoleNameCOROUTINE$16).w9;
  protoOf($getRoleNameCOROUTINE$16)['<get-exceptionState>'] = protoOf($getRoleNameCOROUTINE$16).x9;
  protoOf($getRoleNameCOROUTINE$16)['<set-result>'] = protoOf($getRoleNameCOROUTINE$16).y9;
  protoOf($getRoleNameCOROUTINE$16)['<get-result>'] = protoOf($getRoleNameCOROUTINE$16).z9;
  protoOf($getRoleNameCOROUTINE$16)['<set-exception>'] = protoOf($getRoleNameCOROUTINE$16).aa;
  protoOf($getRoleNameCOROUTINE$16)['<get-exception>'] = protoOf($getRoleNameCOROUTINE$16).ba;
  protoOf($getRoleNameCOROUTINE$16)['<set-finallyPath>'] = protoOf($getRoleNameCOROUTINE$16).ca;
  protoOf($getRoleNameCOROUTINE$16)['<get-finallyPath>'] = protoOf($getRoleNameCOROUTINE$16).da;
  protoOf($getRoleNameCOROUTINE$16)['<get-context>'] = protoOf($getRoleNameCOROUTINE$16).t9;
  function $getTemporaryCredentialsCOROUTINE$17(_this__u8e3s4, token, roleName, region, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u75_1 = _this__u8e3s4;
    this.v75_1 = token;
    this.w75_1 = roleName;
    this.x75_1 = region;
  }
  protoOf($getTemporaryCredentialsCOROUTINE$17).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.y75_1 = 'http://169.254.169.254/latest/meta-data/iam/security-credentials/' + this.w75_1;
            var tmp_0 = this;
            tmp_0.z75_1 = this.u75_1.e6u_1;
            var tmp_1 = this;
            tmp_1.a76_1 = this.y75_1;
            this.b76_1 = this.z75_1;
            this.c76_1 = this.a76_1;
            var tmp_2 = this;
            tmp_2.d76_1 = this.b76_1;
            this.e76_1 = this.d76_1;
            var tmp_3 = this;
            tmp_3.f76_1 = this.e76_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.c76_1);
            headers(this_0, AWSKeyRestAPI$Companion$getTemporaryCredentials$lambda(this.v75_1));
            tmp_4.g76_1 = this_0;
            this.h76_1 = this.f76_1;
            this.i76_1 = this.g76_1;
            this.i76_1.j3k_1 = Companion_getInstance_0().c32_1;
            var tmp_5 = this;
            tmp_5.j76_1 = this.h76_1;
            var tmp_6 = this;
            tmp_6.k76_1 = this.i76_1;
            this.l76_1 = this.j76_1;
            this.m76_1 = this.k76_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.m76_1, this.l76_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n76_1 = suspendResult;
            if (!this.n76_1.p37().equals(Companion_getInstance_1().w32_1)) {
              throw IllegalArgumentException_init_$Create$('AWS server returned an invalid response: ' + this.n76_1.p37().toString() + ' - please check the role name and region');
            }

            this.o76_1 = Default_getInstance();
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.n76_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = this.o76_1.h4s(ARGUMENT);
            var json = get_jsonObject(ARGUMENT_0);
            var tmp0_safe_receiver = json.af('AccessKeyId');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
            var tmp_7;
            if (tmp2_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('AccessKeyId not found');
            } else {
              tmp_7 = tmp2_elvis_lhs;
            }

            var accessKeyId = tmp_7;
            var tmp3_safe_receiver = json.af('SecretAccessKey');
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonPrimitive(tmp3_safe_receiver);
            var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.q4u();
            var tmp_8;
            if (tmp5_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('SecretAccessKey not found');
            } else {
              tmp_8 = tmp5_elvis_lhs;
            }

            var secretAccessKey = tmp_8;
            var tmp6_safe_receiver = json.af('Token');
            var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonPrimitive(tmp6_safe_receiver);
            var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.q4u();
            var tmp_9;
            if (tmp8_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Token not found');
            } else {
              tmp_9 = tmp8_elvis_lhs;
            }

            var sessionToken = tmp_9;
            var tmp9_safe_receiver = json.af('Expiration');
            var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : get_jsonPrimitive(tmp9_safe_receiver);
            var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.q4u();
            var tmp_10;
            if (tmp11_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Expiration not found');
            } else {
              tmp_10 = tmp11_elvis_lhs;
            }

            var expiration = tmp_10;
            return new AWSAuthConfiguration(accessKeyId, secretAccessKey, this.x75_1, sessionToken, expiration, this.w75_1);
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
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<set-state>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).u9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-state>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).v9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<set-exceptionState>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).w9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-exceptionState>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).x9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<set-result>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).y9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-result>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).z9;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<set-exception>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).aa;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-exception>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).ba;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<set-finallyPath>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).ca;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-finallyPath>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).da;
  protoOf($getTemporaryCredentialsCOROUTINE$17)['<get-context>'] = protoOf($getTemporaryCredentialsCOROUTINE$17).t9;
  function $getPublicKeyCOROUTINE$18(_this__u8e3s4, config, keyId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.x76_1 = _this__u8e3s4;
    this.y76_1 = config;
    this.z76_1 = keyId;
  }
  protoOf($getPublicKeyCOROUTINE$18).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.a77_1 = Companion_getInstance_0().d32_1;
            this.b77_1 = trimMargin(trimIndent('\n{\n"KeyId": "' + this.z76_1 + '"\n}\n'));
            this.c77_1 = this.x76_1.buildSigV4Headers(this.a77_1, this.b77_1, this.y76_1);
            this.d77_1 = 'kms.' + this.y76_1.t70_1.region + '.amazonaws.com';
            var tmp_0 = get_logger();
            tmp_0.n6g(AWSKeyRestAPI$Companion$getPublicKey$lambda(this.d77_1));
            var tmp_1 = this;
            tmp_1.e77_1 = this.x76_1.e6u_1;
            var tmp_2 = this;
            tmp_2.f77_1 = 'https://' + this.d77_1 + '/';
            this.g77_1 = this.e77_1;
            this.h77_1 = this.f77_1;
            var tmp_3 = this;
            tmp_3.i77_1 = this.g77_1;
            this.j77_1 = this.i77_1;
            var tmp_4 = this;
            tmp_4.k77_1 = this.j77_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.h77_1);
            headers(this_0, AWSKeyRestAPI$Companion$getPublicKey$lambda_0(this.c77_1, this.d77_1));
            var body = this.b77_1;
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

            tmp_5.l77_1 = this_0;
            this.m77_1 = this.k77_1;
            this.n77_1 = this.l77_1;
            this.n77_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_12 = this;
            tmp_12.o77_1 = this.m77_1;
            var tmp_13 = this;
            tmp_13.p77_1 = this.n77_1;
            this.q77_1 = this.o77_1;
            this.r77_1 = this.p77_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.r77_1, this.q77_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.s77_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = awsJsonDataBody(this.x76_1, this.s77_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.t77_1 = suspendResult;
            var tmp_14 = this;
            var tmp0_safe_receiver = this.t77_1.af('PublicKey');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            tmp_14.u77_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
            var this_1 = this.u77_1;
            if (this_1 == null || charSequenceLength(this_1) === 0)
              throw new KeyNotFoundException(VOID, 'Could not determine PublicKey');
            this.v77_1 = trimIndent('\n-----BEGIN PUBLIC KEY-----\n' + this.u77_1 + '\n-----END PUBLIC KEY-----\n');
            this.n9_1 = 3;
            suspendResult = Companion_instance_31.w77(this.v77_1, this);
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
            var keyJWK = suspendResult.up_1;
            throwOnFailure(keyJWK);
            var tmp_15 = _Result___get_value__impl__bjfvqg(keyJWK);
            return (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
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
  protoOf($getPublicKeyCOROUTINE$18)['<set-state>'] = protoOf($getPublicKeyCOROUTINE$18).u9;
  protoOf($getPublicKeyCOROUTINE$18)['<get-state>'] = protoOf($getPublicKeyCOROUTINE$18).v9;
  protoOf($getPublicKeyCOROUTINE$18)['<set-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$18).w9;
  protoOf($getPublicKeyCOROUTINE$18)['<get-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$18).x9;
  protoOf($getPublicKeyCOROUTINE$18)['<set-result>'] = protoOf($getPublicKeyCOROUTINE$18).y9;
  protoOf($getPublicKeyCOROUTINE$18)['<get-result>'] = protoOf($getPublicKeyCOROUTINE$18).z9;
  protoOf($getPublicKeyCOROUTINE$18)['<set-exception>'] = protoOf($getPublicKeyCOROUTINE$18).aa;
  protoOf($getPublicKeyCOROUTINE$18)['<get-exception>'] = protoOf($getPublicKeyCOROUTINE$18).ba;
  protoOf($getPublicKeyCOROUTINE$18)['<set-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$18).ca;
  protoOf($getPublicKeyCOROUTINE$18)['<get-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$18).da;
  protoOf($getPublicKeyCOROUTINE$18)['<get-context>'] = protoOf($getPublicKeyCOROUTINE$18).t9;
  function $awsJsonDataBodyCOROUTINE$19(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c71_1 = _this__u8e3s4;
    this.d71_1 = _this__u8e3s4_0;
  }
  protoOf($awsJsonDataBodyCOROUTINE$19).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            var tmp_0 = this;
            tmp_0.e71_1 = AWSKeyRestAPI$Companion$awsJsonDataBody$lambda(this.d71_1);
            var tmp_1 = this;
            tmp_1.f71_1 = this.d71_1;
            this.g71_1 = this.f71_1;
            this.o9_1 = 2;
            var tmp_2 = this;
            tmp_2.i71_1 = Companion_instance_1;
            var tmp_3 = this;
            tmp_3.j71_1 = this.g71_1;
            this.k71_1 = this.j71_1;
            this.n9_1 = 1;
            suspendResult = bodyAsText(this.k71_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l71_1 = suspendResult;
            this.m71_1 = get_jsonObject(Default_getInstance().h4s(this.l71_1));
            var tmp_4 = this;
            this.i71_1;
            var value = this.m71_1;
            tmp_4.h71_1 = _Result___init__impl__xyqfz8(value);
            this.o9_1 = 6;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.o9_1 = 6;
            var tmp_5 = this.q9_1;
            if (tmp_5 instanceof Error) {
              this.n71_1 = this.q9_1;
              var tmp_6 = this;
              var exception = this.n71_1;
              tmp_6.h71_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 3;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            this.o9_1 = 6;
            this.o71_1 = this.h71_1;
            this.p71_1 = this.o71_1;
            this.q71_1 = Result__exceptionOrNull_impl_p6xea9(this.p71_1);
            if (this.q71_1 == null) {
              var tmp_7 = this;
              var tmp_8 = _Result___get_value__impl__bjfvqg(this.p71_1);
              tmp_7.r71_1 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
              this.n9_1 = 5;
              continue $sm;
            } else {
              var tmp_9 = this;
              tmp_9.s71_1 = this.q71_1;
              this.t71_1 = this.s71_1;
              this.n9_1 = 4;
              suspendResult = bodyAsText(this.d71_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            var bodyStr = suspendResult;
            var tmp_10 = this;
            var tmp_11 = this.e71_1();
            var tmp_12;
            if (charSequenceLength(bodyStr) === 0) {
              tmp_12 = 'empty response (instead of JSON data)';
            } else {
              tmp_12 = 'invalid response: ' + bodyStr;
            }

            throw IllegalArgumentException_init_$Create$(tmp_11 + tmp_12);
          case 5:
            return this.r71_1;
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
  function $generateCOROUTINE$20(_this__u8e3s4, type, config, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f78_1 = _this__u8e3s4;
    this.g78_1 = type;
    this.h78_1 = config;
  }
  protoOf($generateCOROUTINE$20).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            var tmp_0;
            var this_0 = this.h78_1.t70_1.accessKeyId;
            if (this_0 == null || isBlank(this_0)) {
              var this_1 = this.h78_1.t70_1.secretAccessKey;
              tmp_0 = this_1 == null || isBlank(this_1);
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              this.n9_1 = 1;
              suspendResult = this.f78_1.f79(this.h78_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.i78_1 = keyTypeToAwsKeyMapping(this.f78_1, this.g78_1);
            this.j78_1 = trimMargin(trimIndent('{\n"KeySpec":"' + this.i78_1 + '",\n"KeyUsage":"SIGN_VERIFY"\n}\n'));
            this.k78_1 = this.f78_1.buildSigV4Headers(Companion_getInstance_0().d32_1, this.j78_1, this.h78_1);
            this.l78_1 = 'kms.' + this.h78_1.t70_1.region + '.amazonaws.com';
            var tmp_1 = get_logger();
            tmp_1.n6g(AWSKeyRestAPI$Companion$generate$lambda(this.l78_1));
            var tmp_2 = this;
            tmp_2.m78_1 = this.f78_1.e6u_1;
            var tmp_3 = this;
            tmp_3.n78_1 = 'https://' + this.l78_1 + '/';
            this.o78_1 = this.m78_1;
            this.p78_1 = this.n78_1;
            var tmp_4 = this;
            tmp_4.q78_1 = this.o78_1;
            this.r78_1 = this.q78_1;
            var tmp_5 = this;
            tmp_5.s78_1 = this.r78_1;
            var tmp_6 = this;
            var this_2 = new HttpRequestBuilder();
            url(this_2, this.p78_1);
            headers(this_2, AWSKeyRestAPI$Companion$generate$lambda_0(this.k78_1, this.l78_1));
            var body = this.j78_1;
            if (body == null) {
              this_2.l3k_1 = NullBody_instance;
              var tmp_7 = PrimitiveClasses_getInstance().nd();
              var tmp_8;
              try {
                tmp_8 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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
              this_2.e3q(new TypeInfo(tmp_7, tmp_8));
            } else {
              if (body instanceof OutgoingContent) {
                this_2.l3k_1 = body;
                this_2.e3q(null);
              } else {
                this_2.l3k_1 = body;
                var tmp_10 = PrimitiveClasses_getInstance().nd();
                var tmp_11;
                try {
                  tmp_11 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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
                this_2.e3q(new TypeInfo(tmp_10, tmp_11));
              }
            }

            tmp_6.t78_1 = this_2;
            this.u78_1 = this.s78_1;
            this.v78_1 = this.t78_1;
            this.v78_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_13 = this;
            tmp_13.w78_1 = this.u78_1;
            var tmp_14 = this;
            tmp_14.x78_1 = this.v78_1;
            this.y78_1 = this.w78_1;
            this.z78_1 = this.x78_1;
            this.n9_1 = 3;
            suspendResult = (new HttpStatement(this.z78_1, this.y78_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.a79_1 = suspendResult;
            this.n9_1 = 4;
            suspendResult = awsJsonDataBody(this.f78_1, this.a79_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.b79_1 = suspendResult;
            var tmp_15 = this;
            var tmp0_safe_receiver = this.b79_1.af('KeyMetadata');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('KeyId');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            tmp_15.c79_1 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
            var this_3 = this.c79_1;
            if (this_3 == null || charSequenceLength(this_3) === 0)
              throw new KeyNotFoundException(VOID, 'Key ID could not be determined');
            this.n9_1 = 5;
            suspendResult = this.f78_1.k72(this.h78_1, toString_0(this.c79_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.d79_1 = suspendResult;
            this.e79_1 = toString_0(this.c79_1);
            this.n9_1 = 6;
            suspendResult = this.d79_1.j6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 6:
            var ARGUMENT = suspendResult;
            return new AWSKeyRestAPI(this.h78_1, this.e79_1, ARGUMENT, awsKeyToKeyTypeMapping(this.f78_1, this.i78_1));
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
  protoOf($generateCOROUTINE$20)['<set-state>'] = protoOf($generateCOROUTINE$20).u9;
  protoOf($generateCOROUTINE$20)['<get-state>'] = protoOf($generateCOROUTINE$20).v9;
  protoOf($generateCOROUTINE$20)['<set-exceptionState>'] = protoOf($generateCOROUTINE$20).w9;
  protoOf($generateCOROUTINE$20)['<get-exceptionState>'] = protoOf($generateCOROUTINE$20).x9;
  protoOf($generateCOROUTINE$20)['<set-result>'] = protoOf($generateCOROUTINE$20).y9;
  protoOf($generateCOROUTINE$20)['<get-result>'] = protoOf($generateCOROUTINE$20).z9;
  protoOf($generateCOROUTINE$20)['<set-exception>'] = protoOf($generateCOROUTINE$20).aa;
  protoOf($generateCOROUTINE$20)['<get-exception>'] = protoOf($generateCOROUTINE$20).ba;
  protoOf($generateCOROUTINE$20)['<set-finallyPath>'] = protoOf($generateCOROUTINE$20).ca;
  protoOf($generateCOROUTINE$20)['<get-finallyPath>'] = protoOf($generateCOROUTINE$20).da;
  protoOf($generateCOROUTINE$20)['<get-context>'] = protoOf($generateCOROUTINE$20).t9;
  function _get_awsSigningAlgorithm__z9hox6($this) {
    var tmp0 = $this.i79_1;
    // Inline function 'kotlin.getValue' call
    awsSigningAlgorithm$factory();
    return tmp0.b1();
  }
  function Companion_11() {
    Companion_instance_16 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.d6u_1 = [null, null, null, lazy(tmp_0, AWSKeyRestAPI$Companion$$childSerializers$_anonymous__9xrt8a)];
    this.e6u_1 = HttpClient();
  }
  protoOf(Companion_11).l73 = function (config, $completion) {
    var tmp = new $authAccessCOROUTINE$13(this, config, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_11).f79 = function (config, $completion) {
    var tmp = new $getAccessCOROUTINE$14(this, config, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_11).sha256Hex = function (data) {
    return toHexString(SHA256_init_$Create$().g6i(toByteArray_0(data)));
  };
  protoOf(Companion_11).hmacSHA256 = function (key, data) {
    return HmacSHA256_init_$Create$(key).y6j(toByteArray_0(data, Charsets_getInstance().r1z_1));
  };
  protoOf(Companion_11).sha256 = function (data) {
    return SHA256_init_$Create$().g6i(data);
  };
  protoOf(Companion_11).getSignatureKey = function (config, dateStamp) {
    var tmp0_safe_receiver = get__accessAWS();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v71_1;
    var kDate = this.hmacSHA256(toByteArray_0('AWS4' + (tmp1_elvis_lhs == null ? ensureNotNull(config.t70_1.secretAccessKey) : tmp1_elvis_lhs)), dateStamp);
    var kRegion = this.hmacSHA256(kDate, toString(config.t70_1.region));
    var kService = this.hmacSHA256(kRegion, 'kms');
    return this.hmacSHA256(kService, 'aws4_request');
  };
  protoOf(Companion_11).createCanonicalRequest = function (method, canonicalUri, canonicalQueryString, canonicalHeaders, signedHeaders, payload) {
    var payloadHash = this.sha256Hex(payload);
    return trimMargin(trimIndent(method.k32_1 + '\n' + canonicalUri + '\n' + canonicalQueryString + '\n' + canonicalHeaders + '\n' + signedHeaders + '\n' + payloadHash + '\n'));
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
    var currentDateTime = toLocalDateTime(System_instance.d5v(), Companion_getInstance_2().t6b_1);
    var dateStamp = replace(currentDateTime.l6c().toString(), '-', '');
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var amzDate = replace(replace(toInstant(currentDateTime, Companion_getInstance_2().t6b_1).toString(), '-', ''), ':', '').substring(0, 15) + 'Z';
    var canonicalUri = '/';
    var canonicalQueryString = '';
    var canonicalHeaders = 'content-type:application/x-amz-json-1.1\nhost:kms.' + config.t70_1.region + '.amazonaws.com\nx-amz-date:' + amzDate + '\n';
    var signedHeaders = 'content-type;host;x-amz-date';
    var credentialScope = dateStamp + '/' + config.t70_1.region + '/kms/aws4_request';
    var canonicalRequest = this.createCanonicalRequest(method, canonicalUri, canonicalQueryString, canonicalHeaders, signedHeaders, payload);
    var stringToSign = this.createStringToSign('AWS4-HMAC-SHA256', amzDate, credentialScope, canonicalRequest);
    var signingKey = this.getSignatureKey(config, dateStamp);
    var signature = this.generateSignature(signingKey, stringToSign);
    var tmp0_safe_receiver = get__accessAWS();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u71_1;
    return mapOf([to('Authorization', this.createAuthorizationHeader('AWS4-HMAC-SHA256', tmp1_elvis_lhs == null ? ensureNotNull(config.t70_1.accessKeyId) : tmp1_elvis_lhs, credentialScope, signedHeaders, signature)), to('x-amz-date', amzDate), to('content-type', 'application/x-amz-json-1.1')]);
  };
  protoOf(Companion_11).k79 = function (ttlSeconds, $completion) {
    var tmp = new $getIMDSv2TokenCOROUTINE$15(this, ttlSeconds, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_11).getIMDSv2Token$default = function (ttlSeconds, $completion, $super) {
    ttlSeconds = ttlSeconds === VOID ? 21600 : ttlSeconds;
    return $super === VOID ? this.k79(ttlSeconds, $completion) : $super.k79.call(this, ttlSeconds, $completion);
  };
  protoOf(Companion_11).z72 = function (token, $completion) {
    var tmp = new $getRoleNameCOROUTINE$16(this, token, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_11).a73 = function (token, roleName, region, $completion) {
    var tmp = new $getTemporaryCredentialsCOROUTINE$17(this, token, roleName, region, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_11).k72 = function (config, keyId, $completion) {
    var tmp = new $getPublicKeyCOROUTINE$18(this, config, keyId, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_11).f6u = function (type, config, $completion) {
    var tmp = new $generateCOROUTINE$20(this, type, config, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_11).m4u = function () {
    return $serializer_getInstance_7();
  };
  protoOf(Companion_11).l79 = function (config, keyId) {
    var tmp = AWSKeyRestAPI$Companion$getPublicKeyAsync$slambda_0(config, keyId, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_11();
    return Companion_instance_16;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('aws-rest-api', this, 4);
    tmp0_serialDesc.x2b('config', false);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('_publicKey', true);
    tmp0_serialDesc.x2b('_keyType', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.m79_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).n79 = function (encoder, value) {
    var tmp0_desc = this.m79_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_17().d6u_1;
    tmp1_output.y25(tmp0_desc, 0, $serializer_getInstance_6(), value.config);
    tmp1_output.w25(tmp0_desc, 1, value.id);
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.g79_1 == null)) {
      tmp1_output.a26(tmp0_desc, 2, StringSerializer_getInstance(), value.g79_1);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.h79_1 == null)) {
      tmp1_output.a26(tmp0_desc, 3, tmp2_cached[3].b1(), value.h79_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_7).v20 = function (encoder, value) {
    return this.n79(encoder, value instanceof AWSKeyRestAPI ? value : THROW_CCE());
  };
  protoOf($serializer_7).w20 = function (decoder) {
    var tmp0_desc = this.m79_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp10_input = decoder.h24(tmp0_desc);
    var tmp11_cached = Companion_getInstance_17().d6u_1;
    if (tmp10_input.x24()) {
      tmp4_local0 = tmp10_input.t24(tmp0_desc, 0, $serializer_getInstance_6(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.v24(tmp0_desc, 3, tmp11_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.t24(tmp0_desc, 0, $serializer_getInstance_6(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp10_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.v24(tmp0_desc, 3, tmp11_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.i24(tmp0_desc);
    return AWSKeyRestAPI_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_7).u20 = function () {
    return this.m79_1;
  };
  protoOf($serializer_7).m2c = function () {
    var tmp0_cached = Companion_getInstance_17().d6u_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_6(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].b1())];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function AWSKeyRestAPI_init_$Init$(seen0, config, id, _publicKey, _keyType, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_7().m79_1);
    }
    Key_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.config = config;
    $this.id = id;
    if (0 === (seen0 & 4))
      $this.g79_1 = null;
    else
      $this.g79_1 = _publicKey;
    if (0 === (seen0 & 8))
      $this.h79_1 = null;
    else
      $this.h79_1 = _keyType;
    var tmp = $this;
    tmp.i79_1 = lazy_0(AWSKeyRestAPI$_init_$lambda_k94i1z($this));
    $this.j79_1 = null;
    return $this;
  }
  function AWSKeyRestAPI_init_$Create$(seen0, config, id, _publicKey, _keyType, serializationConstructorMarker) {
    return AWSKeyRestAPI_init_$Init$(seen0, config, id, _publicKey, _keyType, serializationConstructorMarker, objectCreate(protoOf(AWSKeyRestAPI)));
  }
  function AWSKeyRestAPI$awsSigningAlgorithm$delegate$lambda(this$0) {
    return function () {
      var tmp;
      switch (this$0.keyType.t2_1) {
        case 2:
        case 1:
          tmp = 'ECDSA_SHA_256';
          break;
        case 3:
          tmp = 'RSASSA_PKCS1_V1_5_SHA_256';
          break;
        default:
          throw new KeyTypeNotSupportedException(this$0.keyType.s2_1);
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
      var _iterator__ex2g4s = $headers.z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var key = element.a1();
        // Inline function 'kotlin.collections.component2' call
        var value = element.b1();
        $this$headers.l2r(key, value);
      }
      $this$headers.l2r(HttpHeaders_getInstance().c2z_1, 'kms.' + this$0.config.t70_1.region + '.amazonaws.com');
      $this$headers.l2r('X-Amz-Target', 'TrentService.Sign');
      var tmp0_safe_receiver = get__accessAWS();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x71_1;
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
        $this$headers.l2r('X-Amz-Security-Token', tmp2_safe_receiver);
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
      var _iterator__ex2g4s = $headers.z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var key = element.a1();
        // Inline function 'kotlin.collections.component2' call
        var value = element.b1();
        $this$headers.l2r(key, value);
      }
      $this$headers.l2r(HttpHeaders_getInstance().c2z_1, $awsKmsUrl);
      $this$headers.l2r('X-Amz-Target', 'TrentService.Verify');
      var tmp0_safe_receiver = get__accessAWS();
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.x71_1;
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
        $this$headers.l2r('X-Amz-Security-Token', tmp2_safe_receiver);
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
      var _iterator__ex2g4s = $headers.z().p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.component1' call
        var key = element.a1();
        // Inline function 'kotlin.collections.component2' call
        var value = element.b1();
        $this$headers.l2r(key, value);
      }
      $this$headers.l2r(HttpHeaders_getInstance().c2z_1, $awsKmsUrl);
      $this$headers.l2r('X-Amz-Target', 'TrentService.ScheduleKeyDeletion');
      return Unit_instance;
    };
  }
  function AWSKeyRestAPI$deleteKey$lambda_1(this$0) {
    return function () {
      return 'Key ' + this$0.id + ' scheduled for deletion';
    };
  }
  function AWSKeyRestAPI$deleteKeyAsync$slambda(this$0, resultContinuation) {
    this.w79_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$deleteKeyAsync$slambda).t6k = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$deleteKeyAsync$slambda).ac = function ($completion) {
    return this.t6k($completion);
  };
  protoOf(AWSKeyRestAPI$deleteKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.w79_1.u6k(this);
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
  protoOf(AWSKeyRestAPI$deleteKeyAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$deleteKeyAsync$slambda(this.w79_1, completion);
  };
  function AWSKeyRestAPI$deleteKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$deleteKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.t6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.f7a_1 = this$0;
    this.g7a_1 = $plaintext;
    this.h7a_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$signJwsAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$signJwsAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(AWSKeyRestAPI$signJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.f7a_1.h6l(this.g7a_1, this.h7a_1, this);
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
  protoOf(AWSKeyRestAPI$signJwsAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$signJwsAsync$slambda(this.f7a_1, this.g7a_1, this.h7a_1, completion);
  };
  function AWSKeyRestAPI$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new AWSKeyRestAPI$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$signRawAsync$slambda(this$0, $plaintext, resultContinuation) {
    this.q7a_1 = this$0;
    this.r7a_1 = $plaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$signRawAsync$slambda).r6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$signRawAsync$slambda).ac = function ($completion) {
    return this.r6q($completion);
  };
  protoOf(AWSKeyRestAPI$signRawAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.q7a_1.s7a(this.r7a_1, this);
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
  protoOf(AWSKeyRestAPI$signRawAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$signRawAsync$slambda(this.q7a_1, this.r7a_1, completion);
  };
  function AWSKeyRestAPI$signRawAsync$slambda_0(this$0, $plaintext, resultContinuation) {
    var i = new AWSKeyRestAPI$signRawAsync$slambda(this$0, $plaintext, resultContinuation);
    var l = function ($completion) {
      return i.r6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.b7b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$getKeyIdAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$getKeyIdAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(AWSKeyRestAPI$getKeyIdAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.b7b_1.d6m(this);
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
  protoOf(AWSKeyRestAPI$getKeyIdAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$getKeyIdAsync$slambda(this.b7b_1, completion);
  };
  function AWSKeyRestAPI$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$getPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.k7b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$getPublicKeyAsync$slambda).x6m = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$getPublicKeyAsync$slambda).ac = function ($completion) {
    return this.x6m($completion);
  };
  protoOf(AWSKeyRestAPI$getPublicKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.k7b_1.y6m(this);
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
  protoOf(AWSKeyRestAPI$getPublicKeyAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$getPublicKeyAsync$slambda(this.k7b_1, completion);
  };
  function AWSKeyRestAPI$getPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$getPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.x6m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$getMetaAsync$slambda(this$0, resultContinuation) {
    this.t7b_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$getMetaAsync$slambda).u7b = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$getMetaAsync$slambda).ac = function ($completion) {
    return this.u7b($completion);
  };
  protoOf(AWSKeyRestAPI$getMetaAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.t7b_1.v7b(this);
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
  protoOf(AWSKeyRestAPI$getMetaAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$getMetaAsync$slambda(this.t7b_1, completion);
  };
  function AWSKeyRestAPI$getMetaAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$getMetaAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.u7b($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.e7c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$exportPEMAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$exportPEMAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(AWSKeyRestAPI$exportPEMAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.e7c_1.t6n(this);
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
  protoOf(AWSKeyRestAPI$exportPEMAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$exportPEMAsync$slambda(this.e7c_1, completion);
  };
  function AWSKeyRestAPI$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.n7c_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$getThumbprintAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$getThumbprintAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(AWSKeyRestAPI$getThumbprintAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.n7c_1.d6o(this);
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
  protoOf(AWSKeyRestAPI$getThumbprintAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$getThumbprintAsync$slambda(this.n7c_1, completion);
  };
  function AWSKeyRestAPI$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.w7c_1 = this$0;
    this.x7c_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$verifyJwsAsync$slambda).y6o = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AWSKeyRestAPI$verifyJwsAsync$slambda).ac = function ($completion) {
    return this.y6o($completion);
  };
  protoOf(AWSKeyRestAPI$verifyJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.w7c_1.z6o(this.x7c_1, this);
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
  protoOf(AWSKeyRestAPI$verifyJwsAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$verifyJwsAsync$slambda(this.w7c_1, this.x7c_1, completion);
  };
  function AWSKeyRestAPI$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new AWSKeyRestAPI$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.y6o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.g7d_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$exportJWKAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$exportJWKAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(AWSKeyRestAPI$exportJWKAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.g7d_1.j6p(this);
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
  protoOf(AWSKeyRestAPI$exportJWKAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$exportJWKAsync$slambda(this.g7d_1, completion);
  };
  function AWSKeyRestAPI$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.p7d_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$exportJWKObjectAsync$slambda).t6p = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$exportJWKObjectAsync$slambda).ac = function ($completion) {
    return this.t6p($completion);
  };
  protoOf(AWSKeyRestAPI$exportJWKObjectAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.p7d_1.u6p(this);
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
  protoOf(AWSKeyRestAPI$exportJWKObjectAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$exportJWKObjectAsync$slambda(this.p7d_1, completion);
  };
  function AWSKeyRestAPI$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.t6p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.y7d_1 = this$0;
    this.z7d_1 = $signed;
    this.a7e_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$verifyRawAsync$slambda).g6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AWSKeyRestAPI$verifyRawAsync$slambda).ac = function ($completion) {
    return this.g6q($completion);
  };
  protoOf(AWSKeyRestAPI$verifyRawAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.y7d_1.h6q(this.z7d_1, this.a7e_1, this);
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
  protoOf(AWSKeyRestAPI$verifyRawAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$verifyRawAsync$slambda(this.y7d_1, this.z7d_1, this.a7e_1, completion);
  };
  function AWSKeyRestAPI$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new AWSKeyRestAPI$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.g6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.j7e_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda).r6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda).ac = function ($completion) {
    return this.r6q($completion);
  };
  protoOf(AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.j7e_1.s6q(this);
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
  protoOf(AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda).ja = function (completion) {
    return new AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda(this.j7e_1, completion);
  };
  function AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AWSKeyRestAPI$_init_$lambda_k94i1z(this$0) {
    return function () {
      var tmp;
      switch (this$0.keyType.t2_1) {
        case 2:
        case 1:
          tmp = 'ECDSA_SHA_256';
          break;
        case 3:
          tmp = 'RSASSA_PKCS1_V1_5_SHA_256';
          break;
        default:
          throw new KeyTypeNotSupportedException(this$0.keyType.s2_1);
      }
      return tmp;
    };
  }
  function $getKeyIdCOROUTINE$5(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s7e_1 = _this__u8e3s4;
  }
  protoOf($getKeyIdCOROUTINE$5).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.s7e_1.y6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t7e_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.t7e_1.d6m(this);
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
  protoOf($getKeyIdCOROUTINE$5)['<set-state>'] = protoOf($getKeyIdCOROUTINE$5).u9;
  protoOf($getKeyIdCOROUTINE$5)['<get-state>'] = protoOf($getKeyIdCOROUTINE$5).v9;
  protoOf($getKeyIdCOROUTINE$5)['<set-exceptionState>'] = protoOf($getKeyIdCOROUTINE$5).w9;
  protoOf($getKeyIdCOROUTINE$5)['<get-exceptionState>'] = protoOf($getKeyIdCOROUTINE$5).x9;
  protoOf($getKeyIdCOROUTINE$5)['<set-result>'] = protoOf($getKeyIdCOROUTINE$5).y9;
  protoOf($getKeyIdCOROUTINE$5)['<get-result>'] = protoOf($getKeyIdCOROUTINE$5).z9;
  protoOf($getKeyIdCOROUTINE$5)['<set-exception>'] = protoOf($getKeyIdCOROUTINE$5).aa;
  protoOf($getKeyIdCOROUTINE$5)['<get-exception>'] = protoOf($getKeyIdCOROUTINE$5).ba;
  protoOf($getKeyIdCOROUTINE$5)['<set-finallyPath>'] = protoOf($getKeyIdCOROUTINE$5).ca;
  protoOf($getKeyIdCOROUTINE$5)['<get-finallyPath>'] = protoOf($getKeyIdCOROUTINE$5).da;
  protoOf($getKeyIdCOROUTINE$5)['<get-context>'] = protoOf($getKeyIdCOROUTINE$5).t9;
  function $signRawCOROUTINE$6(_this__u8e3s4, plaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c7f_1 = _this__u8e3s4;
    this.d7f_1 = plaintext;
  }
  protoOf($signRawCOROUTINE$6).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (!endsWith(_get_awsSigningAlgorithm__z9hox6(this.c7f_1), '_SHA_256')) {
              throw new SigningException('failed to sign - unsupported hashing algorithm: ' + _get_awsSigningAlgorithm__z9hox6(this.c7f_1));
            }

            this.e7f_1 = Companion_getInstance_17().sha256(this.d7f_1);
            this.f7f_1 = trimMargin(trimIndent('\n{\n"KeyId":"' + this.c7f_1.id + '",\n"Message":"' + encodeBase64(this.e7f_1) + '",\n"MessageType":"DIGEST",\n"SigningAlgorithm":"' + _get_awsSigningAlgorithm__z9hox6(this.c7f_1) + '"\n}\n'));
            this.g7f_1 = Companion_getInstance_17().buildSigV4Headers(Companion_getInstance_0().d32_1, this.f7f_1, this.c7f_1.config);
            this.h7f_1 = 'kms.' + this.c7f_1.config.t70_1.region + '.amazonaws.com';
            var tmp_0 = get_logger();
            tmp_0.n6g(AWSKeyRestAPI$signRaw$lambda(this.h7f_1));
            this.i7f_1 = Companion_getInstance_17();
            var tmp_1 = this;
            tmp_1.j7f_1 = Companion_getInstance_17().e6u_1;
            var tmp_2 = this;
            tmp_2.k7f_1 = 'https://' + this.h7f_1 + '/';
            this.l7f_1 = this.j7f_1;
            this.m7f_1 = this.k7f_1;
            var tmp_3 = this;
            tmp_3.n7f_1 = this.l7f_1;
            this.o7f_1 = this.n7f_1;
            var tmp_4 = this;
            tmp_4.p7f_1 = this.o7f_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.m7f_1);
            headers(this_0, AWSKeyRestAPI$signRaw$lambda_0(this.g7f_1, this.c7f_1));
            var body = this.f7f_1;
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

            tmp_5.q7f_1 = this_0;
            this.r7f_1 = this.p7f_1;
            this.s7f_1 = this.q7f_1;
            this.s7f_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_12 = this;
            tmp_12.t7f_1 = this.r7f_1;
            var tmp_13 = this;
            tmp_13.u7f_1 = this.s7f_1;
            this.v7f_1 = this.t7f_1;
            this.w7f_1 = this.u7f_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.w7f_1, this.v7f_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x7f_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = awsJsonDataBody(this.i7f_1, this.x7f_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var signature = suspendResult;
            var tmp0_safe_receiver = signature.af('Signature');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : Base64Utils_getInstance().decodeFromBase64(tmp2_safe_receiver);
            var tmp_14;
            if (tmp3_elvis_lhs == null) {
              throw new SigningException('failed to sign');
            } else {
              tmp_14 = tmp3_elvis_lhs;
            }

            return tmp_14;
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
  protoOf($signRawCOROUTINE$6)['<set-state>'] = protoOf($signRawCOROUTINE$6).u9;
  protoOf($signRawCOROUTINE$6)['<get-state>'] = protoOf($signRawCOROUTINE$6).v9;
  protoOf($signRawCOROUTINE$6)['<set-exceptionState>'] = protoOf($signRawCOROUTINE$6).w9;
  protoOf($signRawCOROUTINE$6)['<get-exceptionState>'] = protoOf($signRawCOROUTINE$6).x9;
  protoOf($signRawCOROUTINE$6)['<set-result>'] = protoOf($signRawCOROUTINE$6).y9;
  protoOf($signRawCOROUTINE$6)['<get-result>'] = protoOf($signRawCOROUTINE$6).z9;
  protoOf($signRawCOROUTINE$6)['<set-exception>'] = protoOf($signRawCOROUTINE$6).aa;
  protoOf($signRawCOROUTINE$6)['<get-exception>'] = protoOf($signRawCOROUTINE$6).ba;
  protoOf($signRawCOROUTINE$6)['<set-finallyPath>'] = protoOf($signRawCOROUTINE$6).ca;
  protoOf($signRawCOROUTINE$6)['<get-finallyPath>'] = protoOf($signRawCOROUTINE$6).da;
  protoOf($signRawCOROUTINE$6)['<get-context>'] = protoOf($signRawCOROUTINE$6).t9;
  function $signJwsCOROUTINE$7(_this__u8e3s4, plaintext, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g7g_1 = _this__u8e3s4;
    this.h7g_1 = plaintext;
    this.i7g_1 = headers;
  }
  protoOf($signJwsCOROUTINE$7).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            var this_0 = HashMap_init_$Create$_0(this.i7g_1);
            this_0.p2('alg', JsonUtils_getInstance().toJsonElement(jwsSigningAlgorithm(this.g7g_1.keyType)));
            tmp_0.j7g_1 = this_0;
            var tmp_1 = this;
            var tmp_2 = Base64Utils_getInstance();
            var tmp2 = Default_getInstance();
            var value = this.j7g_1;
            var this_1 = tmp2.w24();
            var this_2 = serializer(this_1, createKType(getKClass(HashMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
            tmp_1.k7g_1 = tmp_2.encodeToBase64Url(encodeToByteArray(tmp2.x21(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)));
            this.l7g_1 = Base64Utils_getInstance().encodeToBase64Url(this.h7g_1);
            this.n9_1 = 1;
            suspendResult = this.g7g_1.s7a(encodeToByteArray(this.k7g_1 + '.' + this.l7g_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var rawSignature = suspendResult;
            if (listOf([KeyType_secp256r1_getInstance(), KeyType_secp256k1_getInstance()]).w(this.g7g_1.keyType)) {
              rawSignature = EccUtils_instance.h6k(rawSignature);
            }

            var encodedSignature = Base64Utils_getInstance().encodeToBase64Url(rawSignature);
            var jws = this.k7g_1 + '.' + this.l7g_1 + '.' + encodedSignature;
            return jws;
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
  protoOf($signJwsCOROUTINE$7)['<set-state>'] = protoOf($signJwsCOROUTINE$7).u9;
  protoOf($signJwsCOROUTINE$7)['<get-state>'] = protoOf($signJwsCOROUTINE$7).v9;
  protoOf($signJwsCOROUTINE$7)['<set-exceptionState>'] = protoOf($signJwsCOROUTINE$7).w9;
  protoOf($signJwsCOROUTINE$7)['<get-exceptionState>'] = protoOf($signJwsCOROUTINE$7).x9;
  protoOf($signJwsCOROUTINE$7)['<set-result>'] = protoOf($signJwsCOROUTINE$7).y9;
  protoOf($signJwsCOROUTINE$7)['<get-result>'] = protoOf($signJwsCOROUTINE$7).z9;
  protoOf($signJwsCOROUTINE$7)['<set-exception>'] = protoOf($signJwsCOROUTINE$7).aa;
  protoOf($signJwsCOROUTINE$7)['<get-exception>'] = protoOf($signJwsCOROUTINE$7).ba;
  protoOf($signJwsCOROUTINE$7)['<set-finallyPath>'] = protoOf($signJwsCOROUTINE$7).ca;
  protoOf($signJwsCOROUTINE$7)['<get-finallyPath>'] = protoOf($signJwsCOROUTINE$7).da;
  protoOf($signJwsCOROUTINE$7)['<get-context>'] = protoOf($signJwsCOROUTINE$7).t9;
  function $verifyRawCOROUTINE$8(_this__u8e3s4, signed, detachedPlaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u7g_1 = _this__u8e3s4;
    this.v7g_1 = signed;
    this.w7g_1 = detachedPlaintext;
  }
  protoOf($verifyRawCOROUTINE$8).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.w7g_1;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              var exception = IllegalArgumentException_init_$Create$('Detached plaintext is required for verification');
              return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.x7g_1 = tmp_1;
            this.y7g_1 = Companion_getInstance_17().sha256(this.x7g_1);
            this.z7g_1 = trimMargin(trimIndent('\n{\n"KeyId":"' + this.u7g_1.id + '",\n"Message":"' + encodeBase64(this.y7g_1) + '",\n"MessageType":"DIGEST",\n"Signature":"' + encodeBase64(this.v7g_1) + '",\n"SigningAlgorithm":"' + _get_awsSigningAlgorithm__z9hox6(this.u7g_1) + '"\n}\n'));
            this.a7h_1 = Companion_getInstance_17().buildSigV4Headers(Companion_getInstance_0().d32_1, this.z7g_1, this.u7g_1.config);
            this.b7h_1 = 'kms.' + this.u7g_1.config.t70_1.region + '.amazonaws.com';
            var tmp_2 = get_logger();
            tmp_2.n6g(AWSKeyRestAPI$verifyRaw$lambda(this.b7h_1));
            this.c7h_1 = Companion_getInstance_17();
            var tmp_3 = this;
            tmp_3.d7h_1 = Companion_getInstance_17().e6u_1;
            var tmp_4 = this;
            tmp_4.e7h_1 = 'https://' + this.b7h_1 + '/';
            this.f7h_1 = this.d7h_1;
            this.g7h_1 = this.e7h_1;
            var tmp_5 = this;
            tmp_5.h7h_1 = this.f7h_1;
            this.i7h_1 = this.h7h_1;
            var tmp_6 = this;
            tmp_6.j7h_1 = this.i7h_1;
            var tmp_7 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.g7h_1);
            headers(this_0, AWSKeyRestAPI$verifyRaw$lambda_0(this.a7h_1, this.b7h_1));
            var body = this.z7g_1;
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
              var tmp_8 = PrimitiveClasses_getInstance().nd();
              var tmp_9;
              try {
                tmp_9 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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
              this_0.e3q(new TypeInfo(tmp_8, tmp_9));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.l3k_1 = body;
                this_0.e3q(null);
              } else {
                this_0.l3k_1 = body;
                var tmp_11 = PrimitiveClasses_getInstance().nd();
                var tmp_12;
                try {
                  tmp_12 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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
                this_0.e3q(new TypeInfo(tmp_11, tmp_12));
              }
            }

            tmp_7.k7h_1 = this_0;
            this.l7h_1 = this.j7h_1;
            this.m7h_1 = this.k7h_1;
            this.m7h_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_14 = this;
            tmp_14.n7h_1 = this.l7h_1;
            var tmp_15 = this;
            tmp_15.o7h_1 = this.m7h_1;
            this.p7h_1 = this.n7h_1;
            this.q7h_1 = this.o7h_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.q7h_1, this.p7h_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r7h_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = awsJsonDataBody(this.c7h_1, this.r7h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var verification = suspendResult;
            var tmp1_safe_receiver = verification.af('SignatureValid');
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonPrimitive(tmp1_safe_receiver);
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.q4u();
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
  protoOf($verifyRawCOROUTINE$8)['<set-state>'] = protoOf($verifyRawCOROUTINE$8).u9;
  protoOf($verifyRawCOROUTINE$8)['<get-state>'] = protoOf($verifyRawCOROUTINE$8).v9;
  protoOf($verifyRawCOROUTINE$8)['<set-exceptionState>'] = protoOf($verifyRawCOROUTINE$8).w9;
  protoOf($verifyRawCOROUTINE$8)['<get-exceptionState>'] = protoOf($verifyRawCOROUTINE$8).x9;
  protoOf($verifyRawCOROUTINE$8)['<set-result>'] = protoOf($verifyRawCOROUTINE$8).y9;
  protoOf($verifyRawCOROUTINE$8)['<get-result>'] = protoOf($verifyRawCOROUTINE$8).z9;
  protoOf($verifyRawCOROUTINE$8)['<set-exception>'] = protoOf($verifyRawCOROUTINE$8).aa;
  protoOf($verifyRawCOROUTINE$8)['<get-exception>'] = protoOf($verifyRawCOROUTINE$8).ba;
  protoOf($verifyRawCOROUTINE$8)['<set-finallyPath>'] = protoOf($verifyRawCOROUTINE$8).ca;
  protoOf($verifyRawCOROUTINE$8)['<get-finallyPath>'] = protoOf($verifyRawCOROUTINE$8).da;
  protoOf($verifyRawCOROUTINE$8)['<get-context>'] = protoOf($verifyRawCOROUTINE$8).t9;
  function $verifyJwsCOROUTINE$9(_this__u8e3s4, signedJws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a7i_1 = _this__u8e3s4;
    this.b7i_1 = signedJws;
  }
  protoOf($verifyJwsCOROUTINE$9).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = this.a7i_1.y6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c7i_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.c7i_1.z6o(this.b7i_1, this);
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
            var verification = suspendResult.up_1;
            return new Result(verification);
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
  protoOf($verifyJwsCOROUTINE$9)['<set-state>'] = protoOf($verifyJwsCOROUTINE$9).u9;
  protoOf($verifyJwsCOROUTINE$9)['<get-state>'] = protoOf($verifyJwsCOROUTINE$9).v9;
  protoOf($verifyJwsCOROUTINE$9)['<set-exceptionState>'] = protoOf($verifyJwsCOROUTINE$9).w9;
  protoOf($verifyJwsCOROUTINE$9)['<get-exceptionState>'] = protoOf($verifyJwsCOROUTINE$9).x9;
  protoOf($verifyJwsCOROUTINE$9)['<set-result>'] = protoOf($verifyJwsCOROUTINE$9).y9;
  protoOf($verifyJwsCOROUTINE$9)['<get-result>'] = protoOf($verifyJwsCOROUTINE$9).z9;
  protoOf($verifyJwsCOROUTINE$9)['<set-exception>'] = protoOf($verifyJwsCOROUTINE$9).aa;
  protoOf($verifyJwsCOROUTINE$9)['<get-exception>'] = protoOf($verifyJwsCOROUTINE$9).ba;
  protoOf($verifyJwsCOROUTINE$9)['<set-finallyPath>'] = protoOf($verifyJwsCOROUTINE$9).ca;
  protoOf($verifyJwsCOROUTINE$9)['<get-finallyPath>'] = protoOf($verifyJwsCOROUTINE$9).da;
  protoOf($verifyJwsCOROUTINE$9)['<get-context>'] = protoOf($verifyJwsCOROUTINE$9).t9;
  function $getPublicKeyCOROUTINE$10(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l7i_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyCOROUTINE$10).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.m7i_1 = this.l7i_1.j79_1;
            if (this.m7i_1 == null) {
              if (!(this.l7i_1.g79_1 == null)) {
                var tmp_0 = this;
                tmp_0.p7i_1 = ensureNotNull(this.l7i_1.g79_1);
                this.q7i_1 = this.p7i_1;
                var tmp_1 = this;
                tmp_1.r7i_1 = this.q7i_1;
                this.s7i_1 = this.r7i_1;
                this.n9_1 = 2;
                suspendResult = Companion_instance_31.t7i(this.s7i_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                this.n9_1 = 3;
                continue $sm;
              } else {
                this.n9_1 = 1;
                suspendResult = this.l7i_1.y6m(this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.n7i_1 = this.m7i_1;
              this.n9_1 = 5;
              continue $sm;
            }

          case 1:
            this.o7i_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var tmp_2 = this;
            var this_0 = suspendResult.up_1;
            throwOnFailure(this_0);
            var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
            tmp_2.o7i_1 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
            this.n9_1 = 4;
            continue $sm;
          case 4:
            var tmp_4 = this;
            var this_1 = this.o7i_1;
            this.l7i_1.j79_1 = this_1;
            tmp_4.n7i_1 = this_1;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            return this.n7i_1;
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
  protoOf($getPublicKeyCOROUTINE$10)['<set-state>'] = protoOf($getPublicKeyCOROUTINE$10).u9;
  protoOf($getPublicKeyCOROUTINE$10)['<get-state>'] = protoOf($getPublicKeyCOROUTINE$10).v9;
  protoOf($getPublicKeyCOROUTINE$10)['<set-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$10).w9;
  protoOf($getPublicKeyCOROUTINE$10)['<get-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$10).x9;
  protoOf($getPublicKeyCOROUTINE$10)['<set-result>'] = protoOf($getPublicKeyCOROUTINE$10).y9;
  protoOf($getPublicKeyCOROUTINE$10)['<get-result>'] = protoOf($getPublicKeyCOROUTINE$10).z9;
  protoOf($getPublicKeyCOROUTINE$10)['<set-exception>'] = protoOf($getPublicKeyCOROUTINE$10).aa;
  protoOf($getPublicKeyCOROUTINE$10)['<get-exception>'] = protoOf($getPublicKeyCOROUTINE$10).ba;
  protoOf($getPublicKeyCOROUTINE$10)['<set-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$10).ca;
  protoOf($getPublicKeyCOROUTINE$10)['<get-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$10).da;
  protoOf($getPublicKeyCOROUTINE$10)['<get-context>'] = protoOf($getPublicKeyCOROUTINE$10).t9;
  function $getMetaCOROUTINE$11(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c7j_1 = _this__u8e3s4;
  }
  protoOf($getMetaCOROUTINE$11).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.c7j_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new AwsKeyMeta(ARGUMENT);
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
  protoOf($getMetaCOROUTINE$11)['<set-state>'] = protoOf($getMetaCOROUTINE$11).u9;
  protoOf($getMetaCOROUTINE$11)['<get-state>'] = protoOf($getMetaCOROUTINE$11).v9;
  protoOf($getMetaCOROUTINE$11)['<set-exceptionState>'] = protoOf($getMetaCOROUTINE$11).w9;
  protoOf($getMetaCOROUTINE$11)['<get-exceptionState>'] = protoOf($getMetaCOROUTINE$11).x9;
  protoOf($getMetaCOROUTINE$11)['<set-result>'] = protoOf($getMetaCOROUTINE$11).y9;
  protoOf($getMetaCOROUTINE$11)['<get-result>'] = protoOf($getMetaCOROUTINE$11).z9;
  protoOf($getMetaCOROUTINE$11)['<set-exception>'] = protoOf($getMetaCOROUTINE$11).aa;
  protoOf($getMetaCOROUTINE$11)['<get-exception>'] = protoOf($getMetaCOROUTINE$11).ba;
  protoOf($getMetaCOROUTINE$11)['<set-finallyPath>'] = protoOf($getMetaCOROUTINE$11).ca;
  protoOf($getMetaCOROUTINE$11)['<get-finallyPath>'] = protoOf($getMetaCOROUTINE$11).da;
  protoOf($getMetaCOROUTINE$11)['<get-context>'] = protoOf($getMetaCOROUTINE$11).t9;
  function $deleteKeyCOROUTINE$12(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l7j_1 = _this__u8e3s4;
  }
  protoOf($deleteKeyCOROUTINE$12).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.m7j_1 = trimMargin(trimIndent('\n{\n"KeyId":"' + this.l7j_1.id + '",\n"PendingWindowInDays":7\n}\n'));
            this.n7j_1 = Companion_getInstance_17().buildSigV4Headers(Companion_getInstance_0().d32_1, this.m7j_1, this.l7j_1.config);
            this.o7j_1 = 'kms.' + this.l7j_1.config.t70_1.region + '.amazonaws.com';
            var tmp_0 = get_logger();
            tmp_0.n6g(AWSKeyRestAPI$deleteKey$lambda(this.o7j_1));
            var tmp_1 = this;
            tmp_1.p7j_1 = Companion_getInstance_17().e6u_1;
            var tmp_2 = this;
            tmp_2.q7j_1 = 'https://' + this.o7j_1 + '/';
            this.r7j_1 = this.p7j_1;
            this.s7j_1 = this.q7j_1;
            var tmp_3 = this;
            tmp_3.t7j_1 = this.r7j_1;
            this.u7j_1 = this.t7j_1;
            var tmp_4 = this;
            tmp_4.v7j_1 = this.u7j_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.s7j_1);
            headers(this_0, AWSKeyRestAPI$deleteKey$lambda_0(this.n7j_1, this.o7j_1));
            var body = this.m7j_1;
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

            tmp_5.w7j_1 = this_0;
            this.x7j_1 = this.v7j_1;
            this.y7j_1 = this.w7j_1;
            this.y7j_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_12 = this;
            tmp_12.z7j_1 = this.x7j_1;
            var tmp_13 = this;
            tmp_13.a7k_1 = this.y7j_1;
            this.b7k_1 = this.z7j_1;
            this.c7k_1 = this.a7k_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.c7k_1, this.b7k_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var response = suspendResult;
            var tmp_14 = get_logger();
            tmp_14.n6g(AWSKeyRestAPI$deleteKey$lambda_1(this.l7j_1));
            return response.p37().equals(Companion_getInstance_1().w32_1);
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
  protoOf($deleteKeyCOROUTINE$12)['<set-state>'] = protoOf($deleteKeyCOROUTINE$12).u9;
  protoOf($deleteKeyCOROUTINE$12)['<get-state>'] = protoOf($deleteKeyCOROUTINE$12).v9;
  protoOf($deleteKeyCOROUTINE$12)['<set-exceptionState>'] = protoOf($deleteKeyCOROUTINE$12).w9;
  protoOf($deleteKeyCOROUTINE$12)['<get-exceptionState>'] = protoOf($deleteKeyCOROUTINE$12).x9;
  protoOf($deleteKeyCOROUTINE$12)['<set-result>'] = protoOf($deleteKeyCOROUTINE$12).y9;
  protoOf($deleteKeyCOROUTINE$12)['<get-result>'] = protoOf($deleteKeyCOROUTINE$12).z9;
  protoOf($deleteKeyCOROUTINE$12)['<set-exception>'] = protoOf($deleteKeyCOROUTINE$12).aa;
  protoOf($deleteKeyCOROUTINE$12)['<get-exception>'] = protoOf($deleteKeyCOROUTINE$12).ba;
  protoOf($deleteKeyCOROUTINE$12)['<set-finallyPath>'] = protoOf($deleteKeyCOROUTINE$12).ca;
  protoOf($deleteKeyCOROUTINE$12)['<get-finallyPath>'] = protoOf($deleteKeyCOROUTINE$12).da;
  protoOf($deleteKeyCOROUTINE$12)['<get-context>'] = protoOf($deleteKeyCOROUTINE$12).t9;
  function AWSKeyRestAPI(config, id, _publicKey, _keyType) {
    Companion_getInstance_17();
    _publicKey = _publicKey === VOID ? null : _publicKey;
    _keyType = _keyType === VOID ? null : _keyType;
    Key.call(this);
    this.config = config;
    this.id = id;
    this.g79_1 = _publicKey;
    this.h79_1 = _keyType;
    var tmp = this;
    tmp.i79_1 = lazy_0(AWSKeyRestAPI$awsSigningAlgorithm$delegate$lambda(this));
    this.j79_1 = null;
  }
  protoOf(AWSKeyRestAPI).o3k = function () {
    return this.config;
  };
  protoOf(AWSKeyRestAPI).x6b = function () {
    return this.id;
  };
  protoOf(AWSKeyRestAPI).d7k = function (value) {
    this.h79_1 = value;
  };
  protoOf(AWSKeyRestAPI).h6r = function () {
    return ensureNotNull(this.h79_1);
  };
  protoOf(AWSKeyRestAPI).i6r = function () {
    return false;
  };
  protoOf(AWSKeyRestAPI).toString = function () {
    return '[AWS ' + this.keyType.s2_1 + ' key @AWS ' + this.config.t70_1.region + ' - ' + this.id + ']';
  };
  protoOf(AWSKeyRestAPI).d6m = function ($completion) {
    var tmp = new $getKeyIdCOROUTINE$5(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI).d6o = function ($completion) {
    throw new NotImplementedError('Thumbprint is not available for remote keys.');
  };
  protoOf(AWSKeyRestAPI).j6p = function ($completion) {
    throw new NotImplementedError('JWK export is not available for remote keys.');
  };
  protoOf(AWSKeyRestAPI).u6p = function ($completion) {
    return get_jsonObject(Default_getInstance().h4s(ensureNotNull(this.g79_1)));
  };
  protoOf(AWSKeyRestAPI).t6n = function ($completion) {
    throw new NotImplementedError('PEM export is not available for remote keys.');
  };
  protoOf(AWSKeyRestAPI).s7a = function (plaintext, $completion) {
    var tmp = new $signRawCOROUTINE$6(this, plaintext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI).t6l = function (plaintext, $completion) {
    return this.s7a(plaintext, $completion);
  };
  protoOf(AWSKeyRestAPI).h6l = function (plaintext, headers, $completion) {
    var tmp = new $signJwsCOROUTINE$7(this, plaintext, headers, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI).h6q = function (signed, detachedPlaintext, $completion) {
    var tmp = new $verifyRawCOROUTINE$8(this, signed, detachedPlaintext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AWSKeyRestAPI).z6o = function (signedJws, $completion) {
    var tmp = new $verifyJwsCOROUTINE$9(this, signedJws, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AWSKeyRestAPI).y6m = function ($completion) {
    var tmp = new $getPublicKeyCOROUTINE$10(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI).s6q = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(AWSKeyRestAPI).v7b = function ($completion) {
    var tmp = new $getMetaCOROUTINE$11(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI).j6n = function ($completion) {
    return this.v7b($completion);
  };
  protoOf(AWSKeyRestAPI).u6k = function ($completion) {
    var tmp = new $deleteKeyCOROUTINE$12(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AWSKeyRestAPI).j6r = function () {
    var tmp = AWSKeyRestAPI$deleteKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).k6r = function (plaintext, headers) {
    var tmp = AWSKeyRestAPI$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).l6r = function (plaintext) {
    var tmp = AWSKeyRestAPI$signRawAsync$slambda_0(this, plaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).m6r = function () {
    var tmp = AWSKeyRestAPI$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).o6r = function () {
    var tmp = AWSKeyRestAPI$getPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).p6r = function () {
    var tmp = AWSKeyRestAPI$getMetaAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).q6r = function () {
    var tmp = AWSKeyRestAPI$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).r6r = function () {
    var tmp = AWSKeyRestAPI$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).t6r = function (signedJws) {
    var tmp = AWSKeyRestAPI$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).u6r = function () {
    var tmp = AWSKeyRestAPI$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).v6r = function () {
    var tmp = AWSKeyRestAPI$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).w6r = function (signed, detachedPlaintext) {
    var tmp = AWSKeyRestAPI$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AWSKeyRestAPI).x6r = function () {
    var tmp = AWSKeyRestAPI$getPublicKeyRepresentationAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function AWSAuthConfiguration(accessKeyId, secretAccessKey, region, sessionToken, expiration, roleName) {
    roleName = roleName === VOID ? null : roleName;
    this.u71_1 = accessKeyId;
    this.v71_1 = secretAccessKey;
    this.w71_1 = region;
    this.x71_1 = sessionToken;
    this.y71_1 = expiration;
    this.z71_1 = roleName;
  }
  protoOf(AWSAuthConfiguration).toString = function () {
    return 'AWSAuthConfiguration(accessKeyId=' + this.u71_1 + ', secretAccessKey=' + this.v71_1 + ', region=' + this.w71_1 + ', sessionToken=' + this.x71_1 + ', expiration=' + this.y71_1 + ', roleName=' + this.z71_1 + ')';
  };
  protoOf(AWSAuthConfiguration).hashCode = function () {
    var result = this.u71_1 == null ? 0 : getStringHashCode(this.u71_1);
    result = imul(result, 31) + (this.v71_1 == null ? 0 : getStringHashCode(this.v71_1)) | 0;
    result = imul(result, 31) + (this.w71_1 == null ? 0 : getStringHashCode(this.w71_1)) | 0;
    result = imul(result, 31) + (this.x71_1 == null ? 0 : getStringHashCode(this.x71_1)) | 0;
    result = imul(result, 31) + (this.y71_1 == null ? 0 : getStringHashCode(this.y71_1)) | 0;
    result = imul(result, 31) + (this.z71_1 == null ? 0 : getStringHashCode(this.z71_1)) | 0;
    return result;
  };
  protoOf(AWSAuthConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AWSAuthConfiguration))
      return false;
    var tmp0_other_with_cast = other instanceof AWSAuthConfiguration ? other : THROW_CCE();
    if (!(this.u71_1 == tmp0_other_with_cast.u71_1))
      return false;
    if (!(this.v71_1 == tmp0_other_with_cast.v71_1))
      return false;
    if (!(this.w71_1 == tmp0_other_with_cast.w71_1))
      return false;
    if (!(this.x71_1 == tmp0_other_with_cast.x71_1))
      return false;
    if (!(this.y71_1 == tmp0_other_with_cast.y71_1))
      return false;
    if (!(this.z71_1 == tmp0_other_with_cast.z71_1))
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
      logger = tmp.w6g(logger$lambda);
      _accessAWS = null;
      timeoutAt = null;
    }
  }
  function Companion_12() {
  }
  protoOf(Companion_12).m4u = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_17;
  function Companion_getInstance_18() {
    return Companion_instance_17;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.azure.AzureAuth', this, 4);
    tmp0_serialDesc.x2b('clientId', false);
    tmp0_serialDesc.x2b('clientSecret', false);
    tmp0_serialDesc.x2b('tenantId', false);
    tmp0_serialDesc.x2b('keyVaultUrl', false);
    this.e7k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).f7k = function (encoder, value) {
    var tmp0_desc = this.e7k_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.clientId);
    tmp1_output.w25(tmp0_desc, 1, value.clientSecret);
    tmp1_output.w25(tmp0_desc, 2, value.tenantId);
    tmp1_output.w25(tmp0_desc, 3, value.keyVaultUrl);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_8).v20 = function (encoder, value) {
    return this.f7k(encoder, value instanceof AzureAuth ? value : THROW_CCE());
  };
  protoOf($serializer_8).w20 = function (decoder) {
    var tmp0_desc = this.e7k_1;
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
    return AzureAuth_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_8).u20 = function () {
    return this.e7k_1;
  };
  protoOf($serializer_8).m2c = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_8().e7k_1);
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
  protoOf(AzureAuth).g7k = function () {
    return this.clientId;
  };
  protoOf(AzureAuth).h7k = function () {
    return this.clientSecret;
  };
  protoOf(AzureAuth).i7k = function () {
    return this.tenantId;
  };
  protoOf(AzureAuth).j7k = function () {
    return this.keyVaultUrl;
  };
  protoOf(AzureAuth).dc = function () {
    return this.clientId;
  };
  protoOf(AzureAuth).ec = function () {
    return this.clientSecret;
  };
  protoOf(AzureAuth).yp = function () {
    return this.tenantId;
  };
  protoOf(AzureAuth).p70 = function () {
    return this.keyVaultUrl;
  };
  protoOf(AzureAuth).k7k = function (clientId, clientSecret, tenantId, keyVaultUrl) {
    return new AzureAuth(clientId, clientSecret, tenantId, keyVaultUrl);
  };
  protoOf(AzureAuth).copy = function (clientId, clientSecret, tenantId, keyVaultUrl, $super) {
    clientId = clientId === VOID ? this.clientId : clientId;
    clientSecret = clientSecret === VOID ? this.clientSecret : clientSecret;
    tenantId = tenantId === VOID ? this.tenantId : tenantId;
    keyVaultUrl = keyVaultUrl === VOID ? this.keyVaultUrl : keyVaultUrl;
    return $super === VOID ? this.k7k(clientId, clientSecret, tenantId, keyVaultUrl) : $super.k7k.call(this, clientId, clientSecret, tenantId, keyVaultUrl);
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
    tmp.l7k_1 = [null, null, null, lazy(tmp_0, AzureKey$KeyCreateRequest$Companion$$childSerializers$_anonymous__t62lr6)];
  }
  protoOf(Companion_13).m4u = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_13();
    return Companion_instance_18;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.azure.AzureKey.KeyCreateRequest', this, 4);
    tmp0_serialDesc.x2b('kty', false);
    tmp0_serialDesc.x2b('crv', true);
    tmp0_serialDesc.x2b('key_size', true);
    tmp0_serialDesc.x2b('key_ops', false);
    this.m7k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).n7k = function (encoder, value) {
    var tmp0_desc = this.m7k_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_19().l7k_1;
    tmp1_output.w25(tmp0_desc, 0, value.kty);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.crv == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value.crv);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.keySize == null)) {
      tmp1_output.a26(tmp0_desc, 2, IntSerializer_getInstance(), value.keySize);
    }
    tmp1_output.y25(tmp0_desc, 3, tmp2_cached[3].b1(), value.keyOps);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_9).v20 = function (encoder, value) {
    return this.n7k(encoder, value instanceof KeyCreateRequest ? value : THROW_CCE());
  };
  protoOf($serializer_9).w20 = function (decoder) {
    var tmp0_desc = this.m7k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    var tmp9_cached = Companion_getInstance_19().l7k_1;
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.v24(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
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
            tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.v24(tmp0_desc, 2, IntSerializer_getInstance(), tmp6_local2);
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
    return KeyCreateRequest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_9).u20 = function () {
    return this.m7k_1;
  };
  protoOf($serializer_9).m2c = function () {
    var tmp0_cached = Companion_getInstance_19().l7k_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(IntSerializer_getInstance()), tmp0_cached[3].b1()];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function KeyCreateRequest_init_$Init$(seen0, kty, crv, keySize, keyOps, serializationConstructorMarker, $this) {
    if (!(9 === (9 & seen0))) {
      throwMissingFieldException(seen0, 9, $serializer_getInstance_9().m7k_1);
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
  protoOf(Companion_14).m4u = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_19;
  function Companion_getInstance_20() {
    return Companion_instance_19;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.azure.AzureKey.AzureKeyFunctions.AzureTokenResponse', this, 4);
    tmp0_serialDesc.x2b('token_type', false);
    tmp0_serialDesc.x2b('expires_in', false);
    tmp0_serialDesc.x2b('ext_expires_in', false);
    tmp0_serialDesc.x2b('access_token', false);
    this.o7k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).p7k = function (encoder, value) {
    var tmp0_desc = this.o7k_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.tokenType);
    tmp1_output.r25(tmp0_desc, 1, value.expiresIn);
    tmp1_output.r25(tmp0_desc, 2, value.extExpiresIn);
    tmp1_output.w25(tmp0_desc, 3, value.accessToken);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_10).v20 = function (encoder, value) {
    return this.p7k(encoder, value instanceof AzureTokenResponse ? value : THROW_CCE());
  };
  protoOf($serializer_10).w20 = function (decoder) {
    var tmp0_desc = this.o7k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_input = decoder.h24(tmp0_desc);
    if (tmp8_input.x24()) {
      tmp4_local0 = tmp8_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.m24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.m24(tmp0_desc, 2);
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
            tmp5_local1 = tmp8_input.m24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.m24(tmp0_desc, 2);
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
    return AzureTokenResponse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_10).u20 = function () {
    return this.o7k_1;
  };
  protoOf($serializer_10).m2c = function () {
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_10().o7k_1);
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
  protoOf(Companion_15).m4u = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_20;
  function Companion_getInstance_21() {
    return Companion_instance_20;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.azure.AzureKey.AzureKeyFunctions.AzureTokenResponseParsed', this, 2);
    tmp0_serialDesc.x2b('accessToken', false);
    tmp0_serialDesc.x2b('expiration', false);
    this.q7k_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).r7k = function (encoder, value) {
    var tmp0_desc = this.q7k_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.accessToken);
    tmp1_output.y25(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), value.expiration);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_11).v20 = function (encoder, value) {
    return this.r7k(encoder, value instanceof AzureTokenResponseParsed ? value : THROW_CCE());
  };
  protoOf($serializer_11).w20 = function (decoder) {
    var tmp0_desc = this.q7k_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
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
            tmp5_local1 = tmp6_input.t24(tmp0_desc, 1, InstantIso8601Serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return AzureTokenResponseParsed_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).u20 = function () {
    return this.q7k_1;
  };
  protoOf($serializer_11).m2c = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().q7k_1);
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
  protoOf(ParsedAzurePublicKey).s7k = function () {
    return this.kid;
  };
  protoOf(ParsedAzurePublicKey).t7k = function () {
    return this.azureKeyType;
  };
  protoOf(ParsedAzurePublicKey).u7k = function () {
    return this.curve;
  };
  protoOf(ParsedAzurePublicKey).h6r = function () {
    return this.keyType;
  };
  protoOf(ParsedAzurePublicKey).v7k = function () {
    return this.publicKey;
  };
  protoOf(ParsedAzurePublicKey).dc = function () {
    return this.kid;
  };
  protoOf(ParsedAzurePublicKey).ec = function () {
    return this.azureKeyType;
  };
  protoOf(ParsedAzurePublicKey).yp = function () {
    return this.curve;
  };
  protoOf(ParsedAzurePublicKey).p70 = function () {
    return this.keyType;
  };
  protoOf(ParsedAzurePublicKey).w7k = function () {
    return this.publicKey;
  };
  protoOf(ParsedAzurePublicKey).x7k = function (kid, azureKeyType, curve, keyType, publicKey) {
    return new ParsedAzurePublicKey(kid, azureKeyType, curve, keyType, publicKey);
  };
  protoOf(ParsedAzurePublicKey).copy = function (kid, azureKeyType, curve, keyType, publicKey, $super) {
    kid = kid === VOID ? this.kid : kid;
    azureKeyType = azureKeyType === VOID ? this.azureKeyType : azureKeyType;
    curve = curve === VOID ? this.curve : curve;
    keyType = keyType === VOID ? this.keyType : keyType;
    publicKey = publicKey === VOID ? this.publicKey : publicKey;
    return $super === VOID ? this.x7k(kid, azureKeyType, curve, keyType, publicKey) : $super.x7k.call(this, kid, azureKeyType, curve, keyType, publicKey);
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
  protoOf(AzureTokenResponse).y7k = function () {
    return this.tokenType;
  };
  protoOf(AzureTokenResponse).z7k = function () {
    return this.expiresIn;
  };
  protoOf(AzureTokenResponse).a7l = function () {
    return this.extExpiresIn;
  };
  protoOf(AzureTokenResponse).b7l = function () {
    return this.accessToken;
  };
  protoOf(AzureTokenResponse).dc = function () {
    return this.tokenType;
  };
  protoOf(AzureTokenResponse).ec = function () {
    return this.expiresIn;
  };
  protoOf(AzureTokenResponse).yp = function () {
    return this.extExpiresIn;
  };
  protoOf(AzureTokenResponse).p70 = function () {
    return this.accessToken;
  };
  protoOf(AzureTokenResponse).c7l = function (tokenType, expiresIn, extExpiresIn, accessToken) {
    return new AzureTokenResponse(tokenType, expiresIn, extExpiresIn, accessToken);
  };
  protoOf(AzureTokenResponse).copy = function (tokenType, expiresIn, extExpiresIn, accessToken, $super) {
    tokenType = tokenType === VOID ? this.tokenType : tokenType;
    expiresIn = expiresIn === VOID ? this.expiresIn : expiresIn;
    extExpiresIn = extExpiresIn === VOID ? this.extExpiresIn : extExpiresIn;
    accessToken = accessToken === VOID ? this.accessToken : accessToken;
    return $super === VOID ? this.c7l(tokenType, expiresIn, extExpiresIn, accessToken) : $super.c7l.call(this, tokenType, expiresIn, extExpiresIn, accessToken);
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
  protoOf(AzureTokenResponseParsed).b7l = function () {
    return this.accessToken;
  };
  protoOf(AzureTokenResponseParsed).d7l = function () {
    return this.expiration;
  };
  protoOf(AzureTokenResponseParsed).dc = function () {
    return this.accessToken;
  };
  protoOf(AzureTokenResponseParsed).ec = function () {
    return this.expiration;
  };
  protoOf(AzureTokenResponseParsed).e7l = function (accessToken, expiration) {
    return new AzureTokenResponseParsed(accessToken, expiration);
  };
  protoOf(AzureTokenResponseParsed).copy = function (accessToken, expiration, $super) {
    accessToken = accessToken === VOID ? this.accessToken : accessToken;
    expiration = expiration === VOID ? this.expiration : expiration;
    return $super === VOID ? this.e7l(accessToken, expiration) : $super.e7l.call(this, accessToken, expiration);
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
      return 'Azure server (URL: ' + get_request($this_azureJsonDataBody).u3m().toString() + ') returned an invalid response: ';
    };
  }
  function AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda($auth, resultContinuation) {
    this.n7l_1 = $auth;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda).o7l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda).ac = function ($completion) {
    return this.o7l($completion);
  };
  protoOf(AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = AzureKeyFunctions_instance.p7l(this.n7l_1, this);
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
  protoOf(AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda).ja = function (completion) {
    return new AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda(this.n7l_1, completion);
  };
  function AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda_0($auth, resultContinuation) {
    var i = new AzureKey$AzureKeyFunctions$fetchAccessTokenAsync$slambda($auth, resultContinuation);
    var l = function ($completion) {
      return i.o7l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $parseAzurePublicKeyCOROUTINE$33(_this__u8e3s4, publicKeyJson, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y7l_1 = _this__u8e3s4;
    this.z7l_1 = publicKeyJson;
  }
  protoOf($parseAzurePublicKeyCOROUTINE$33).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            var tmp0_safe_receiver = this.z7l_1.af('kid');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              var message = 'No key id in key response';
              throw IllegalStateException_init_$Create$(toString_0(message));
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }

            tmp_0.a7m_1 = tmp_1;
            var tmp_2 = this;
            var tmp3_safe_receiver = this.z7l_1.af('kty');
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonPrimitive(tmp3_safe_receiver);
            var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.q4u();
            var tmp_3;
            if (tmp5_elvis_lhs == null) {
              var message_0 = 'Missing key type in public key response';
              throw IllegalStateException_init_$Create$(toString_0(message_0));
            } else {
              tmp_3 = tmp5_elvis_lhs;
            }

            tmp_2.b7m_1 = tmp_3;
            var tmp_4 = this;
            var tmp6_safe_receiver = this.z7l_1.af('crv');
            var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonPrimitive(tmp6_safe_receiver);
            tmp_4.c7m_1 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.q4u();
            this.n9_1 = 1;
            suspendResult = Companion_instance_31.t7i(this.z7l_1.toString(), this);
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
            var exception = Result__exceptionOrNull_impl_p6xea9(this_0);
            var tmp_5;
            if (exception == null) {
              var tmp_6 = _Result___get_value__impl__bjfvqg(this_0);
              tmp_5 = (tmp_6 == null ? true : !(tmp_6 == null)) ? tmp_6 : THROW_CCE();
            } else {
              throw IllegalArgumentException_init_$Create$_0('Invalid JWK in public key: ' + this.z7l_1.toString(), exception);
            }

            var publicKey = tmp_5;
            var tmp8_elvis_lhs = this.c7m_1;
            var keyType = this.y7l_1.d7m(tmp8_elvis_lhs == null ? '' : tmp8_elvis_lhs, this.b7m_1);
            return new ParsedAzurePublicKey(this.a7m_1, this.b7m_1, this.c7m_1, keyType, publicKey);
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
  function $fetchAccessTokenCOROUTINE$34(_this__u8e3s4, auth, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m7m_1 = _this__u8e3s4;
    this.n7m_1 = auth;
  }
  protoOf($fetchAccessTokenCOROUTINE$34).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            var tmp0 = this.n7m_1.tenantId;
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
              var message = 'Tenant id contains invalid characters: ' + this.n7m_1.tenantId;
              throw IllegalArgumentException_init_$Create$(toString_0(message));
            }

            this.o7m_1 = System_instance.d5v();
            var tmp_0 = this;
            tmp_0.p7m_1 = Companion_getInstance_22().r6u_1;
            var tmp_1 = this;
            tmp_1.q7m_1 = 'https://login.microsoftonline.com/' + this.n7m_1.tenantId + '/oauth2/v2.0/token';
            this.r7m_1 = this.p7m_1;
            this.s7m_1 = this.q7m_1;
            var tmp_2 = this;
            tmp_2.t7m_1 = this.r7m_1;
            this.u7m_1 = this.t7m_1;
            var tmp_3 = this;
            tmp_3.v7m_1 = this.u7m_1;
            var tmp_4 = this;
            var this_1 = new HttpRequestBuilder();
            url(this_1, this.s7m_1);
            contentType(this_1, Application_getInstance().j2w_1);
            var body = formUrlEncode(listOf([to('grant_type', 'client_credentials'), to('client_id', this.n7m_1.clientId), to('client_secret', this.n7m_1.clientSecret), to('scope', 'https://vault.azure.net/.default')]));
            if (body == null) {
              this_1.l3k_1 = NullBody_instance;
              var tmp_5 = PrimitiveClasses_getInstance().nd();
              var tmp_6;
              try {
                tmp_6 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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
              this_1.e3q(new TypeInfo(tmp_5, tmp_6));
            } else {
              if (body instanceof OutgoingContent) {
                this_1.l3k_1 = body;
                this_1.e3q(null);
              } else {
                this_1.l3k_1 = body;
                var tmp_8 = PrimitiveClasses_getInstance().nd();
                var tmp_9;
                try {
                  tmp_9 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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
                this_1.e3q(new TypeInfo(tmp_8, tmp_9));
              }
            }

            tmp_4.w7m_1 = this_1;
            this.x7m_1 = this.v7m_1;
            this.y7m_1 = this.w7m_1;
            this.y7m_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_11 = this;
            tmp_11.z7m_1 = this.x7m_1;
            var tmp_12 = this;
            tmp_12.a7n_1 = this.y7m_1;
            this.b7n_1 = this.z7m_1;
            this.c7n_1 = this.a7n_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.c7n_1, this.b7n_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d7n_1 = suspendResult;
            this.e7n_1 = this.d7n_1;
            var tmp_13 = this;
            tmp_13.f7n_1 = this.e7n_1;
            this.g7n_1 = this.f7n_1;
            var tmp_14 = this;
            tmp_14.h7n_1 = this.g7n_1;
            this.i7n_1 = this.h7n_1;
            this.o9_1 = 3;
            var tmp_15 = this;
            tmp_15.k7n_1 = Companion_instance_1;
            var tmp_16 = this;
            tmp_16.l7n_1 = this.i7n_1;
            this.m7n_1 = this.l7n_1;
            var tmp_17 = this;
            tmp_17.n7n_1 = this.m7n_1;
            this.o7n_1 = this.n7n_1;
            this.n9_1 = 2;
            var tmp_18 = this.o7n_1.q3n();
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

            suspendResult = tmp_18.t3m(new TypeInfo(tmp_19, tmp_20), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_22 = this;
            tmp_22.p7n_1 = suspendResult instanceof AzureTokenResponse ? suspendResult : THROW_CCE();
            var tmp_23 = this;
            this.k7n_1;
            var value = this.p7n_1;
            tmp_23.j7n_1 = _Result___init__impl__xyqfz8(value);
            this.o9_1 = 7;
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.o9_1 = 7;
            var tmp_24 = this.q9_1;
            if (tmp_24 instanceof Error) {
              this.q7n_1 = this.q9_1;
              var tmp_25 = this;
              var exception = this.q7n_1;
              tmp_25.j7n_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 7;
            this.r7n_1 = this.j7n_1;
            this.s7n_1 = this.r7n_1;
            this.t7n_1 = Result__exceptionOrNull_impl_p6xea9(this.s7n_1);
            if (this.t7n_1 == null) {
              var tmp_26 = this;
              var tmp_27 = _Result___get_value__impl__bjfvqg(this.s7n_1);
              tmp_26.u7n_1 = (tmp_27 == null ? true : !(tmp_27 == null)) ? tmp_27 : THROW_CCE();
              this.n9_1 = 6;
              continue $sm;
            } else {
              var tmp_28 = this;
              tmp_28.v7n_1 = this.t7n_1;
              this.w7n_1 = this.v7n_1;
              this.n9_1 = 5;
              suspendResult = bodyAsText(this.g7n_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = 'Could not retrieve access token: ' + ARGUMENT;
            var tmp_29 = this;
            throw IllegalArgumentException_init_$Create$_0(ARGUMENT_0, this.w7n_1);
          case 6:
            var response = this.u7n_1;
            if (!(response.tokenType.toLowerCase() === 'bearer')) {
              var message_0 = 'Can only handle bearer access tokens!';
              throw IllegalStateException_init_$Create$(toString_0(message_0));
            }

            Companion_getInstance();
            var this_2 = response.expiresIn;
            return new AzureTokenResponseParsed(response.accessToken, this.o7m_1.dp(toDuration(this_2, DurationUnit_SECONDS_getInstance())));
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
  protoOf($fetchAccessTokenCOROUTINE$34)['<set-state>'] = protoOf($fetchAccessTokenCOROUTINE$34).u9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-state>'] = protoOf($fetchAccessTokenCOROUTINE$34).v9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<set-exceptionState>'] = protoOf($fetchAccessTokenCOROUTINE$34).w9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-exceptionState>'] = protoOf($fetchAccessTokenCOROUTINE$34).x9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<set-result>'] = protoOf($fetchAccessTokenCOROUTINE$34).y9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-result>'] = protoOf($fetchAccessTokenCOROUTINE$34).z9;
  protoOf($fetchAccessTokenCOROUTINE$34)['<set-exception>'] = protoOf($fetchAccessTokenCOROUTINE$34).aa;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-exception>'] = protoOf($fetchAccessTokenCOROUTINE$34).ba;
  protoOf($fetchAccessTokenCOROUTINE$34)['<set-finallyPath>'] = protoOf($fetchAccessTokenCOROUTINE$34).ca;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-finallyPath>'] = protoOf($fetchAccessTokenCOROUTINE$34).da;
  protoOf($fetchAccessTokenCOROUTINE$34)['<get-context>'] = protoOf($fetchAccessTokenCOROUTINE$34).t9;
  function $azureJsonDataBodyCOROUTINE$35(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f7o_1 = _this__u8e3s4;
    this.g7o_1 = _this__u8e3s4_0;
  }
  protoOf($azureJsonDataBodyCOROUTINE$35).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            var tmp_0 = this;
            tmp_0.h7o_1 = AzureKey$AzureKeyFunctions$azureJsonDataBody$lambda(this.g7o_1);
            var tmp_1 = this;
            tmp_1.i7o_1 = this.g7o_1;
            this.j7o_1 = this.i7o_1;
            this.o9_1 = 2;
            var tmp_2 = this;
            tmp_2.l7o_1 = Companion_instance_1;
            var tmp_3 = this;
            tmp_3.m7o_1 = this.j7o_1;
            this.n7o_1 = this.m7o_1;
            var tmp_4 = this;
            tmp_4.o7o_1 = this.n7o_1;
            this.p7o_1 = this.o7o_1;
            this.n9_1 = 1;
            var tmp_5 = this.p7o_1.q3n();
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

            suspendResult = tmp_5.t3m(new TypeInfo(tmp_6, tmp_7), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_9 = this;
            tmp_9.q7o_1 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp_10 = this;
            this.l7o_1;
            var value = this.q7o_1;
            tmp_10.k7o_1 = _Result___init__impl__xyqfz8(value);
            this.o9_1 = 6;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.o9_1 = 6;
            var tmp_11 = this.q9_1;
            if (tmp_11 instanceof Error) {
              this.r7o_1 = this.q9_1;
              var tmp_12 = this;
              var exception = this.r7o_1;
              tmp_12.k7o_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 3;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            this.o9_1 = 6;
            this.s7o_1 = this.k7o_1;
            this.t7o_1 = this.s7o_1;
            this.u7o_1 = Result__exceptionOrNull_impl_p6xea9(this.t7o_1);
            if (this.u7o_1 == null) {
              var tmp_13 = this;
              var tmp_14 = _Result___get_value__impl__bjfvqg(this.t7o_1);
              tmp_13.v7o_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
              this.n9_1 = 5;
              continue $sm;
            } else {
              var tmp_15 = this;
              tmp_15.w7o_1 = this.u7o_1;
              this.x7o_1 = this.w7o_1;
              this.n9_1 = 4;
              suspendResult = bodyAsText(this.g7o_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            var bodyStr = suspendResult;
            var tmp_16 = this;
            var tmp_17 = this.h7o_1();
            var tmp_18;
            if (charSequenceLength(bodyStr) === 0) {
              tmp_18 = 'empty response (instead of JSON data)';
            } else {
              tmp_18 = 'invalid response: ' + bodyStr;
            }

            throw IllegalArgumentException_init_$Create$_0(tmp_17 + tmp_18, this.x7o_1);
          case 5:
            return this.v7o_1;
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
  function AzureKey$Companion$$childSerializers$_anonymous__rzdjc6() {
    return Companion_getInstance_14().m4u();
  }
  function AzureKey$Companion$client$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.p3l(tmp, AzureKey$Companion$client$lambda$lambda);
    return Unit_instance;
  }
  function AzureKey$Companion$client$lambda$lambda($this$install) {
    json($this$install, Json(VOID, AzureKey$Companion$client$lambda$lambda$lambda));
    return Unit_instance;
  }
  function AzureKey$Companion$client$lambda$lambda$lambda($this$Json) {
    $this$Json.a4t_1 = true;
    return Unit_instance;
  }
  function $generateCOROUTINE$36(_this__u8e3s4, type, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g7p_1 = _this__u8e3s4;
    this.h7p_1 = type;
    this.i7p_1 = metadata;
  }
  protoOf($generateCOROUTINE$36).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.i7p_1.h7q_1;
            tmp_0.j7p_1 = tmp0_elvis_lhs == null ? Default_getInstance_0().gi().toString() : tmp0_elvis_lhs;
            this.n9_1 = 1;
            suspendResult = AzureKeyFunctions_instance.p7l(this.i7p_1.g7q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k7p_1 = suspendResult;
            this.l7p_1 = AzureKeyFunctions_instance.i7q(this.h7p_1);
            this.m7p_1 = this.l7p_1.dc();
            this.n7p_1 = this.l7p_1.ec();
            var tmp_1 = this;
            var tmp_2;
            if (this.m7p_1 === 'RSA') {
              var tmp1_keyOps = listOf(['sign', 'verify']);
              tmp_2 = new KeyCreateRequest(this.m7p_1, VOID, 2048, tmp1_keyOps);
            } else {
              tmp_2 = new KeyCreateRequest(this.m7p_1, ensureNotNull(this.n7p_1), VOID, listOf(['sign', 'verify']));
            }

            tmp_1.o7p_1 = tmp_2;
            this.p7p_1 = AzureKeyFunctions_instance;
            var tmp_3 = this;
            tmp_3.q7p_1 = this.g7p_1.r6u_1;
            var tmp_4 = this;
            tmp_4.r7p_1 = this.i7p_1.g7q_1.keyVaultUrl + '/keys/' + this.j7p_1 + '/create?api-version=7.4';
            this.s7p_1 = this.q7p_1;
            this.t7p_1 = this.r7p_1;
            var tmp_5 = this;
            tmp_5.u7p_1 = this.s7p_1;
            this.v7p_1 = this.u7p_1;
            var tmp_6 = this;
            tmp_6.w7p_1 = this.v7p_1;
            var tmp_7 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.t7p_1);
            contentType(this_0, Application_getInstance().y2v_1);
            bearerAuth(this_0, this.k7p_1.accessToken);
            var body = this.o7p_1;
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
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
              this_0.e3q(new TypeInfo(tmp_8, tmp_9));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.l3k_1 = body;
                this_0.e3q(null);
              } else {
                this_0.l3k_1 = body;
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
                this_0.e3q(new TypeInfo(tmp_11, tmp_12));
              }
            }

            tmp_7.x7p_1 = this_0;
            this.y7p_1 = this.w7p_1;
            this.z7p_1 = this.x7p_1;
            this.z7p_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_14 = this;
            tmp_14.a7q_1 = this.y7p_1;
            var tmp_15 = this;
            tmp_15.b7q_1 = this.z7p_1;
            this.c7q_1 = this.a7q_1;
            this.d7q_1 = this.b7q_1;
            this.n9_1 = 2;
            suspendResult = (new HttpStatement(this.d7q_1, this.c7q_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.e7q_1 = suspendResult;
            this.n9_1 = 3;
            suspendResult = this.p7p_1.j7q(this.e7q_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.f7q_1 = suspendResult;
            this.n9_1 = 4;
            var tmp_16 = AzureKeyFunctions_instance;
            var tmp2_safe_receiver = get_jsonObject(this.f7q_1).af('key');
            suspendResult = tmp_16.k7q(ensureNotNull(tmp2_safe_receiver == null ? null : get_jsonObject(tmp2_safe_receiver)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var parsedAzurePublicKey = suspendResult;
            var keyId = parsedAzurePublicKey.kid;
            return new AzureKey(keyId, this.i7p_1.g7q_1, parsedAzurePublicKey.keyType, new DirectSerializedKey(parsedAzurePublicKey.publicKey));
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
  protoOf($generateCOROUTINE$36)['<set-state>'] = protoOf($generateCOROUTINE$36).u9;
  protoOf($generateCOROUTINE$36)['<get-state>'] = protoOf($generateCOROUTINE$36).v9;
  protoOf($generateCOROUTINE$36)['<set-exceptionState>'] = protoOf($generateCOROUTINE$36).w9;
  protoOf($generateCOROUTINE$36)['<get-exceptionState>'] = protoOf($generateCOROUTINE$36).x9;
  protoOf($generateCOROUTINE$36)['<set-result>'] = protoOf($generateCOROUTINE$36).y9;
  protoOf($generateCOROUTINE$36)['<get-result>'] = protoOf($generateCOROUTINE$36).z9;
  protoOf($generateCOROUTINE$36)['<set-exception>'] = protoOf($generateCOROUTINE$36).aa;
  protoOf($generateCOROUTINE$36)['<get-exception>'] = protoOf($generateCOROUTINE$36).ba;
  protoOf($generateCOROUTINE$36)['<set-finallyPath>'] = protoOf($generateCOROUTINE$36).ca;
  protoOf($generateCOROUTINE$36)['<get-finallyPath>'] = protoOf($generateCOROUTINE$36).da;
  protoOf($generateCOROUTINE$36)['<get-context>'] = protoOf($generateCOROUTINE$36).t9;
  function _get_accessToken__9zuu2s($this) {
    var tmp = $this.n7q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('accessToken');
    }
  }
  function _get_accessTokenExpiration__eoc3lf($this) {
    var tmp = $this.o7q_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('accessTokenExpiration');
    }
  }
  function updateKeyType($this) {
    var tmp = $this;
    var tmp0_safe_receiver = $this.m7q_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y6r_1;
    tmp.l7q_1 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.keyType;
  }
  function KeyCreateRequest(kty, crv, keySize, keyOps) {
    Companion_getInstance_19();
    crv = crv === VOID ? null : crv;
    keySize = keySize === VOID ? null : keySize;
    this.kty = kty;
    this.crv = crv;
    this.keySize = keySize;
    this.keyOps = keyOps;
  }
  protoOf(KeyCreateRequest).p7q = function () {
    return this.kty;
  };
  protoOf(KeyCreateRequest).q7q = function () {
    return this.crv;
  };
  protoOf(KeyCreateRequest).r7q = function () {
    return this.keySize;
  };
  protoOf(KeyCreateRequest).s7q = function () {
    return this.keyOps;
  };
  protoOf(KeyCreateRequest).dc = function () {
    return this.kty;
  };
  protoOf(KeyCreateRequest).ec = function () {
    return this.crv;
  };
  protoOf(KeyCreateRequest).yp = function () {
    return this.keySize;
  };
  protoOf(KeyCreateRequest).p70 = function () {
    return this.keyOps;
  };
  protoOf(KeyCreateRequest).t7q = function (kty, crv, keySize, keyOps) {
    return new KeyCreateRequest(kty, crv, keySize, keyOps);
  };
  protoOf(KeyCreateRequest).copy = function (kty, crv, keySize, keyOps, $super) {
    kty = kty === VOID ? this.kty : kty;
    crv = crv === VOID ? this.crv : crv;
    keySize = keySize === VOID ? this.keySize : keySize;
    keyOps = keyOps === VOID ? this.keyOps : keyOps;
    return $super === VOID ? this.t7q(kty, crv, keySize, keyOps) : $super.t7q.call(this, kty, crv, keySize, keyOps);
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
  protoOf(AzureKeyFunctions).i7q = function (type) {
    var tmp;
    switch (type.t2_1) {
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
        throw new KeyTypeNotSupportedException(type.s2_1);
    }
    return tmp;
  };
  protoOf(AzureKeyFunctions).d7m = function (crv, kty) {
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
  protoOf(AzureKeyFunctions).k7q = function (publicKeyJson, $completion) {
    var tmp = new $parseAzurePublicKeyCOROUTINE$33(this, publicKeyJson, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKeyFunctions).p7l = function (auth, $completion) {
    var tmp = new $fetchAccessTokenCOROUTINE$34(this, auth, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKeyFunctions).j7q = function (_this__u8e3s4, $completion) {
    var tmp = new $azureJsonDataBodyCOROUTINE$35(this, _this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKeyFunctions).u7q = function (auth) {
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
    tmp.q6u_1 = [null, null, lazy(tmp_0, AzureKey$Companion$$childSerializers$_anonymous__rzdjc6), null];
    var tmp_1 = this;
    tmp_1.r6u_1 = HttpClient(AzureKey$Companion$client$lambda);
  }
  protoOf(Companion_16).s6u = function (type, metadata, $completion) {
    var tmp = new $generateCOROUTINE$36(this, type, metadata, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_16).m4u = function () {
    return $serializer_getInstance_12();
  };
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_16();
    return Companion_instance_21;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('azure', this, 4);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('auth', false);
    tmp0_serialDesc.x2b('_keyType', true);
    tmp0_serialDesc.x2b('_publicKey', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.v7q_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).w7q = function (encoder, value) {
    var tmp0_desc = this.v7q_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_22().q6u_1;
    tmp1_output.w25(tmp0_desc, 0, value.id);
    tmp1_output.y25(tmp0_desc, 1, $serializer_getInstance_8(), value.auth);
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.l7q_1 == null)) {
      tmp1_output.a26(tmp0_desc, 2, tmp2_cached[2].b1(), value.l7q_1);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.m7q_1 == null)) {
      tmp1_output.a26(tmp0_desc, 3, DirectKeySerializer_getInstance(), value.m7q_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_12).v20 = function (encoder, value) {
    return this.w7q(encoder, value instanceof AzureKey ? value : THROW_CCE());
  };
  protoOf($serializer_12).w20 = function (decoder) {
    var tmp0_desc = this.v7q_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp10_input = decoder.h24(tmp0_desc);
    var tmp11_cached = Companion_getInstance_22().q6u_1;
    if (tmp10_input.x24()) {
      tmp4_local0 = tmp10_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.t24(tmp0_desc, 1, $serializer_getInstance_8(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.v24(tmp0_desc, 2, tmp11_cached[2].b1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.v24(tmp0_desc, 3, DirectKeySerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
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
            tmp5_local1 = tmp10_input.t24(tmp0_desc, 1, $serializer_getInstance_8(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp10_input.v24(tmp0_desc, 2, tmp11_cached[2].b1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp10_input.v24(tmp0_desc, 3, DirectKeySerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.i24(tmp0_desc);
    return AzureKey_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_12).u20 = function () {
    return this.v7q_1;
  };
  protoOf($serializer_12).m2c = function () {
    var tmp0_cached = Companion_getInstance_22().q6u_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer_getInstance_8(), get_nullable(tmp0_cached[2].b1()), get_nullable(DirectKeySerializer_getInstance())];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function AzureKey_init_$Init$(seen0, id, auth, _keyType, _publicKey, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_12().v7q_1);
    }
    Key_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.id = id;
    $this.auth = auth;
    if (0 === (seen0 & 4))
      $this.l7q_1 = null;
    else
      $this.l7q_1 = _keyType;
    if (0 === (seen0 & 8))
      $this.m7q_1 = null;
    else
      $this.m7q_1 = _publicKey;
    return $this;
  }
  function AzureKey_init_$Create$(seen0, id, auth, _keyType, _publicKey, serializationConstructorMarker) {
    return AzureKey_init_$Init$(seen0, id, auth, _keyType, _publicKey, serializationConstructorMarker, objectCreate(protoOf(AzureKey)));
  }
  function AzureKey$deleteKeyAsync$slambda(this$0, resultContinuation) {
    this.f7r_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$deleteKeyAsync$slambda).t6k = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$deleteKeyAsync$slambda).ac = function ($completion) {
    return this.t6k($completion);
  };
  protoOf(AzureKey$deleteKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.f7r_1.u6k(this);
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
  protoOf(AzureKey$deleteKeyAsync$slambda).ja = function (completion) {
    return new AzureKey$deleteKeyAsync$slambda(this.f7r_1, completion);
  };
  function AzureKey$deleteKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$deleteKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.t6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.o7r_1 = this$0;
    this.p7r_1 = $plaintext;
    this.q7r_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$signJwsAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$signJwsAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(AzureKey$signJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.o7r_1.h6l(this.p7r_1, this.q7r_1, this);
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
  protoOf(AzureKey$signJwsAsync$slambda).ja = function (completion) {
    return new AzureKey$signJwsAsync$slambda(this.o7r_1, this.p7r_1, this.q7r_1, completion);
  };
  function AzureKey$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new AzureKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$signRawAsync$slambda(this$0, $plaintext, resultContinuation) {
    this.z7r_1 = this$0;
    this.a7s_1 = $plaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$signRawAsync$slambda).r6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$signRawAsync$slambda).ac = function ($completion) {
    return this.r6q($completion);
  };
  protoOf(AzureKey$signRawAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.z7r_1.s7a(this.a7s_1, this);
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
  protoOf(AzureKey$signRawAsync$slambda).ja = function (completion) {
    return new AzureKey$signRawAsync$slambda(this.z7r_1, this.a7s_1, completion);
  };
  function AzureKey$signRawAsync$slambda_0(this$0, $plaintext, resultContinuation) {
    var i = new AzureKey$signRawAsync$slambda(this$0, $plaintext, resultContinuation);
    var l = function ($completion) {
      return i.r6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.j7s_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$getKeyIdAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$getKeyIdAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(AzureKey$getKeyIdAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.j7s_1.d6m(this);
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
  protoOf(AzureKey$getKeyIdAsync$slambda).ja = function (completion) {
    return new AzureKey$getKeyIdAsync$slambda(this.j7s_1, completion);
  };
  function AzureKey$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$signRawAzureAsync$slambda(this$0, $plaintext, $ieeeP1363Signature, resultContinuation) {
    this.s7s_1 = this$0;
    this.t7s_1 = $plaintext;
    this.u7s_1 = $ieeeP1363Signature;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$signRawAzureAsync$slambda).r6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$signRawAzureAsync$slambda).ac = function ($completion) {
    return this.r6q($completion);
  };
  protoOf(AzureKey$signRawAzureAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.s7s_1.v7s(this.t7s_1, this.u7s_1, this);
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
  protoOf(AzureKey$signRawAzureAsync$slambda).ja = function (completion) {
    return new AzureKey$signRawAzureAsync$slambda(this.s7s_1, this.t7s_1, this.u7s_1, completion);
  };
  function AzureKey$signRawAzureAsync$slambda_0(this$0, $plaintext, $ieeeP1363Signature, resultContinuation) {
    var i = new AzureKey$signRawAzureAsync$slambda(this$0, $plaintext, $ieeeP1363Signature, resultContinuation);
    var l = function ($completion) {
      return i.r6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$getPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.e7t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$getPublicKeyAsync$slambda).x6m = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$getPublicKeyAsync$slambda).ac = function ($completion) {
    return this.x6m($completion);
  };
  protoOf(AzureKey$getPublicKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.e7t_1.y6m(this);
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
  protoOf(AzureKey$getPublicKeyAsync$slambda).ja = function (completion) {
    return new AzureKey$getPublicKeyAsync$slambda(this.e7t_1, completion);
  };
  function AzureKey$getPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$getPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.x6m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$getMetaAsync$slambda(this$0, resultContinuation) {
    this.n7t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$getMetaAsync$slambda).i6n = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$getMetaAsync$slambda).ac = function ($completion) {
    return this.i6n($completion);
  };
  protoOf(AzureKey$getMetaAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.n7t_1.j6n(this);
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
  protoOf(AzureKey$getMetaAsync$slambda).ja = function (completion) {
    return new AzureKey$getMetaAsync$slambda(this.n7t_1, completion);
  };
  function AzureKey$getMetaAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$getMetaAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.i6n($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.w7t_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$exportPEMAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$exportPEMAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(AzureKey$exportPEMAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.w7t_1.t6n(this);
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
  protoOf(AzureKey$exportPEMAsync$slambda).ja = function (completion) {
    return new AzureKey$exportPEMAsync$slambda(this.w7t_1, completion);
  };
  function AzureKey$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.f7u_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$getThumbprintAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$getThumbprintAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(AzureKey$getThumbprintAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.f7u_1.d6o(this);
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
  protoOf(AzureKey$getThumbprintAsync$slambda).ja = function (completion) {
    return new AzureKey$getThumbprintAsync$slambda(this.f7u_1, completion);
  };
  function AzureKey$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.o7u_1 = this$0;
    this.p7u_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$verifyJwsAsync$slambda).y6o = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AzureKey$verifyJwsAsync$slambda).ac = function ($completion) {
    return this.y6o($completion);
  };
  protoOf(AzureKey$verifyJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.o7u_1.z6o(this.p7u_1, this);
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
  protoOf(AzureKey$verifyJwsAsync$slambda).ja = function (completion) {
    return new AzureKey$verifyJwsAsync$slambda(this.o7u_1, this.p7u_1, completion);
  };
  function AzureKey$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new AzureKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.y6o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.y7u_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$exportJWKAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$exportJWKAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(AzureKey$exportJWKAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.y7u_1.j6p(this);
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
  protoOf(AzureKey$exportJWKAsync$slambda).ja = function (completion) {
    return new AzureKey$exportJWKAsync$slambda(this.y7u_1, completion);
  };
  function AzureKey$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.h7v_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$exportJWKObjectAsync$slambda).t6p = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$exportJWKObjectAsync$slambda).ac = function ($completion) {
    return this.t6p($completion);
  };
  protoOf(AzureKey$exportJWKObjectAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.h7v_1.u6p(this);
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
  protoOf(AzureKey$exportJWKObjectAsync$slambda).ja = function (completion) {
    return new AzureKey$exportJWKObjectAsync$slambda(this.h7v_1, completion);
  };
  function AzureKey$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.t6p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.q7v_1 = this$0;
    this.r7v_1 = $signed;
    this.s7v_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$verifyRawAsync$slambda).g6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AzureKey$verifyRawAsync$slambda).ac = function ($completion) {
    return this.g6q($completion);
  };
  protoOf(AzureKey$verifyRawAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.q7v_1.h6q(this.r7v_1, this.s7v_1, this);
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
  protoOf(AzureKey$verifyRawAsync$slambda).ja = function (completion) {
    return new AzureKey$verifyRawAsync$slambda(this.q7v_1, this.r7v_1, this.s7v_1, completion);
  };
  function AzureKey$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new AzureKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.g6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function AzureKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.b7w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AzureKey$getPublicKeyRepresentationAsync$slambda).r6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey$getPublicKeyRepresentationAsync$slambda).ac = function ($completion) {
    return this.r6q($completion);
  };
  protoOf(AzureKey$getPublicKeyRepresentationAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.b7w_1.s6q(this);
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
  protoOf(AzureKey$getPublicKeyRepresentationAsync$slambda).ja = function (completion) {
    return new AzureKey$getPublicKeyRepresentationAsync$slambda(this.b7w_1, completion);
  };
  function AzureKey$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new AzureKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $fetchAndUpdatePublicKeyCOROUTINE$21(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k7w_1 = _this__u8e3s4;
  }
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.k7w_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l7w_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.k7w_1.m7w(this.l7w_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = new DirectSerializedKey(ARGUMENT);
            this.k7w_1.m7q_1 = ARGUMENT_0;
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
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<set-state>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).u9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-state>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).v9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<set-exceptionState>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).w9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-exceptionState>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).x9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<set-result>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).y9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-result>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).z9;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<set-exception>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).aa;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-exception>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).ba;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<set-finallyPath>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).ca;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-finallyPath>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).da;
  protoOf($fetchAndUpdatePublicKeyCOROUTINE$21)['<get-context>'] = protoOf($fetchAndUpdatePublicKeyCOROUTINE$21).t9;
  function $updateAccessTokenCOROUTINE$22(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v7w_1 = _this__u8e3s4;
  }
  protoOf($updateAccessTokenCOROUTINE$22).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = AzureKeyFunctions_instance.p7l(this.v7w_1.auth, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var accessTokenResponse = suspendResult;
            this.v7w_1.n7q_1 = accessTokenResponse.accessToken;
            this.v7w_1.o7q_1 = accessTokenResponse.expiration;
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
  protoOf($updateAccessTokenCOROUTINE$22)['<set-state>'] = protoOf($updateAccessTokenCOROUTINE$22).u9;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-state>'] = protoOf($updateAccessTokenCOROUTINE$22).v9;
  protoOf($updateAccessTokenCOROUTINE$22)['<set-exceptionState>'] = protoOf($updateAccessTokenCOROUTINE$22).w9;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-exceptionState>'] = protoOf($updateAccessTokenCOROUTINE$22).x9;
  protoOf($updateAccessTokenCOROUTINE$22)['<set-result>'] = protoOf($updateAccessTokenCOROUTINE$22).y9;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-result>'] = protoOf($updateAccessTokenCOROUTINE$22).z9;
  protoOf($updateAccessTokenCOROUTINE$22)['<set-exception>'] = protoOf($updateAccessTokenCOROUTINE$22).aa;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-exception>'] = protoOf($updateAccessTokenCOROUTINE$22).ba;
  protoOf($updateAccessTokenCOROUTINE$22)['<set-finallyPath>'] = protoOf($updateAccessTokenCOROUTINE$22).ca;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-finallyPath>'] = protoOf($updateAccessTokenCOROUTINE$22).da;
  protoOf($updateAccessTokenCOROUTINE$22)['<get-context>'] = protoOf($updateAccessTokenCOROUTINE$22).t9;
  function $ensureAccessTokenValidCOROUTINE$23(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e7x_1 = _this__u8e3s4;
  }
  protoOf($ensureAccessTokenValidCOROUTINE$23).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (!!(this.e7x_1.n7q_1 == null) || _get_accessTokenExpiration__eoc3lf(this.e7x_1).g6c(System_instance.d5v()) >= 0) {
              this.n9_1 = 1;
              suspendResult = this.e7x_1.f7x(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.n9_1 = 2;
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
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<set-state>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).u9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-state>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).v9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<set-exceptionState>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).w9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-exceptionState>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).x9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<set-result>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).y9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-result>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).z9;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<set-exception>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).aa;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-exception>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).ba;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<set-finallyPath>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).ca;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-finallyPath>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).da;
  protoOf($ensureAccessTokenValidCOROUTINE$23)['<get-context>'] = protoOf($ensureAccessTokenValidCOROUTINE$23).t9;
  function $initCOROUTINE$24(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o7x_1 = _this__u8e3s4;
  }
  protoOf($initCOROUTINE$24).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = this.o7x_1.p7x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            if (this.o7x_1.m7q_1 == null) {
              this.n9_1 = 2;
              suspendResult = this.o7x_1.q7x(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 3;
              continue $sm;
            }

          case 2:
            this.n9_1 = 3;
            continue $sm;
          case 3:
            if (this.o7x_1.l7q_1 == null) {
              updateKeyType(this.o7x_1);
            }

            return Unit_instance;
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
  protoOf($initCOROUTINE$24)['<set-state>'] = protoOf($initCOROUTINE$24).u9;
  protoOf($initCOROUTINE$24)['<get-state>'] = protoOf($initCOROUTINE$24).v9;
  protoOf($initCOROUTINE$24)['<set-exceptionState>'] = protoOf($initCOROUTINE$24).w9;
  protoOf($initCOROUTINE$24)['<get-exceptionState>'] = protoOf($initCOROUTINE$24).x9;
  protoOf($initCOROUTINE$24)['<set-result>'] = protoOf($initCOROUTINE$24).y9;
  protoOf($initCOROUTINE$24)['<get-result>'] = protoOf($initCOROUTINE$24).z9;
  protoOf($initCOROUTINE$24)['<set-exception>'] = protoOf($initCOROUTINE$24).aa;
  protoOf($initCOROUTINE$24)['<get-exception>'] = protoOf($initCOROUTINE$24).ba;
  protoOf($initCOROUTINE$24)['<set-finallyPath>'] = protoOf($initCOROUTINE$24).ca;
  protoOf($initCOROUTINE$24)['<get-finallyPath>'] = protoOf($initCOROUTINE$24).da;
  protoOf($initCOROUTINE$24)['<get-context>'] = protoOf($initCOROUTINE$24).t9;
  function $signRawAzureCOROUTINE$25(_this__u8e3s4, plaintext, ieeeP1363Signature, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z7x_1 = _this__u8e3s4;
    this.a7y_1 = plaintext;
    this.b7y_1 = ieeeP1363Signature;
  }
  protoOf($signRawAzureCOROUTINE$25).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = this.z7x_1.p7x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.c7y_1 = SHA256_init_$Create$().g6i(this.a7y_1);
            this.d7y_1 = Base64Utils_getInstance().encodeToBase64Url(this.c7y_1);
            this.e7y_1 = jwsSigningAlgorithm(this.z7x_1.keyType);
            var tmp_0 = this;
            var builder = new JsonObjectBuilder();
            builder.c4v('alg', JsonPrimitive_0(this.e7y_1));
            builder.c4v('value', JsonPrimitive_0(this.d7y_1));
            tmp_0.f7y_1 = builder.o4t();
            var tmp_1 = this;
            tmp_1.g7y_1 = Companion_getInstance_22().r6u_1;
            var tmp_2 = this;
            tmp_2.h7y_1 = this.z7x_1.id + '/sign?api-version=7.4';
            this.i7y_1 = this.g7y_1;
            this.j7y_1 = this.h7y_1;
            var tmp_3 = this;
            tmp_3.k7y_1 = this.i7y_1;
            this.l7y_1 = this.k7y_1;
            var tmp_4 = this;
            tmp_4.m7y_1 = this.l7y_1;
            var tmp_5 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.j7y_1);
            contentType(this_0, Application_getInstance().y2v_1);
            bearerAuth(this_0, _get_accessToken__9zuu2s(this.z7x_1));
            var body = this.f7y_1;
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
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
              this_0.e3q(new TypeInfo(tmp_6, tmp_7));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.l3k_1 = body;
                this_0.e3q(null);
              } else {
                this_0.l3k_1 = body;
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
                this_0.e3q(new TypeInfo(tmp_9, tmp_10));
              }
            }

            tmp_5.n7y_1 = this_0;
            this.o7y_1 = this.m7y_1;
            this.p7y_1 = this.n7y_1;
            this.p7y_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_12 = this;
            tmp_12.q7y_1 = this.o7y_1;
            var tmp_13 = this;
            tmp_13.r7y_1 = this.p7y_1;
            this.s7y_1 = this.q7y_1;
            this.t7y_1 = this.r7y_1;
            this.n9_1 = 2;
            suspendResult = (new HttpStatement(this.t7y_1, this.s7y_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u7y_1 = suspendResult;
            this.v7y_1 = Base64Utils_getInstance();
            this.n9_1 = 3;
            suspendResult = AzureKeyFunctions_instance.j7q(this.u7y_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = ARGUMENT.af('value');
            var ARGUMENT_1 = ensureNotNull(ARGUMENT_0);
            var ARGUMENT_2 = get_jsonPrimitive(ARGUMENT_1);
            var ARGUMENT_3 = ARGUMENT_2.q4u();
            var signature = this.v7y_1.decodeFromBase64Url(ARGUMENT_3);
            if (!this.b7y_1 && listOf([KeyType_secp256r1_getInstance(), KeyType_secp256k1_getInstance()]).w(this.z7x_1.keyType)) {
              signature = EccUtils_instance.i6k(signature);
            }

            return signature;
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
  protoOf($signRawAzureCOROUTINE$25)['<set-state>'] = protoOf($signRawAzureCOROUTINE$25).u9;
  protoOf($signRawAzureCOROUTINE$25)['<get-state>'] = protoOf($signRawAzureCOROUTINE$25).v9;
  protoOf($signRawAzureCOROUTINE$25)['<set-exceptionState>'] = protoOf($signRawAzureCOROUTINE$25).w9;
  protoOf($signRawAzureCOROUTINE$25)['<get-exceptionState>'] = protoOf($signRawAzureCOROUTINE$25).x9;
  protoOf($signRawAzureCOROUTINE$25)['<set-result>'] = protoOf($signRawAzureCOROUTINE$25).y9;
  protoOf($signRawAzureCOROUTINE$25)['<get-result>'] = protoOf($signRawAzureCOROUTINE$25).z9;
  protoOf($signRawAzureCOROUTINE$25)['<set-exception>'] = protoOf($signRawAzureCOROUTINE$25).aa;
  protoOf($signRawAzureCOROUTINE$25)['<get-exception>'] = protoOf($signRawAzureCOROUTINE$25).ba;
  protoOf($signRawAzureCOROUTINE$25)['<set-finallyPath>'] = protoOf($signRawAzureCOROUTINE$25).ca;
  protoOf($signRawAzureCOROUTINE$25)['<get-finallyPath>'] = protoOf($signRawAzureCOROUTINE$25).da;
  protoOf($signRawAzureCOROUTINE$25)['<get-context>'] = protoOf($signRawAzureCOROUTINE$25).t9;
  function $signJwsCOROUTINE$26(_this__u8e3s4, plaintext, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e7z_1 = _this__u8e3s4;
    this.f7z_1 = plaintext;
    this.g7z_1 = headers;
  }
  protoOf($signJwsCOROUTINE$26).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.h7z_1 = KeyUtils_instance.f70(this.f7z_1, this.g7z_1, this.e7z_1.keyType);
            this.i7z_1 = this.h7z_1.dc();
            this.j7z_1 = this.h7z_1.ec();
            this.k7z_1 = this.h7z_1.yp();
            this.n9_1 = 1;
            suspendResult = this.e7z_1.v7s(this.k7z_1, true, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var rawSignature = suspendResult;
            var jws = KeyUtils_instance.g70(rawSignature, this.i7z_1, this.j7z_1);
            return jws;
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
  protoOf($signJwsCOROUTINE$26)['<set-state>'] = protoOf($signJwsCOROUTINE$26).u9;
  protoOf($signJwsCOROUTINE$26)['<get-state>'] = protoOf($signJwsCOROUTINE$26).v9;
  protoOf($signJwsCOROUTINE$26)['<set-exceptionState>'] = protoOf($signJwsCOROUTINE$26).w9;
  protoOf($signJwsCOROUTINE$26)['<get-exceptionState>'] = protoOf($signJwsCOROUTINE$26).x9;
  protoOf($signJwsCOROUTINE$26)['<set-result>'] = protoOf($signJwsCOROUTINE$26).y9;
  protoOf($signJwsCOROUTINE$26)['<get-result>'] = protoOf($signJwsCOROUTINE$26).z9;
  protoOf($signJwsCOROUTINE$26)['<set-exception>'] = protoOf($signJwsCOROUTINE$26).aa;
  protoOf($signJwsCOROUTINE$26)['<get-exception>'] = protoOf($signJwsCOROUTINE$26).ba;
  protoOf($signJwsCOROUTINE$26)['<set-finallyPath>'] = protoOf($signJwsCOROUTINE$26).ca;
  protoOf($signJwsCOROUTINE$26)['<get-finallyPath>'] = protoOf($signJwsCOROUTINE$26).da;
  protoOf($signJwsCOROUTINE$26)['<get-context>'] = protoOf($signJwsCOROUTINE$26).t9;
  function $verifyRawCOROUTINE$27(_this__u8e3s4, signed, detachedPlaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t7z_1 = _this__u8e3s4;
    this.u7z_1 = signed;
    this.v7z_1 = detachedPlaintext;
  }
  protoOf($verifyRawCOROUTINE$27).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = this.t7z_1.y6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w7z_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.w7z_1.h6q(this.u7z_1, this.v7z_1, this);
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
            var verification = suspendResult.up_1;
            throwOnFailure(verification);
            var tmp_0 = _Result___get_value__impl__bjfvqg(verification);
            var value = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            return new Result(_Result___init__impl__xyqfz8(value));
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
  protoOf($verifyRawCOROUTINE$27)['<set-state>'] = protoOf($verifyRawCOROUTINE$27).u9;
  protoOf($verifyRawCOROUTINE$27)['<get-state>'] = protoOf($verifyRawCOROUTINE$27).v9;
  protoOf($verifyRawCOROUTINE$27)['<set-exceptionState>'] = protoOf($verifyRawCOROUTINE$27).w9;
  protoOf($verifyRawCOROUTINE$27)['<get-exceptionState>'] = protoOf($verifyRawCOROUTINE$27).x9;
  protoOf($verifyRawCOROUTINE$27)['<set-result>'] = protoOf($verifyRawCOROUTINE$27).y9;
  protoOf($verifyRawCOROUTINE$27)['<get-result>'] = protoOf($verifyRawCOROUTINE$27).z9;
  protoOf($verifyRawCOROUTINE$27)['<set-exception>'] = protoOf($verifyRawCOROUTINE$27).aa;
  protoOf($verifyRawCOROUTINE$27)['<get-exception>'] = protoOf($verifyRawCOROUTINE$27).ba;
  protoOf($verifyRawCOROUTINE$27)['<set-finallyPath>'] = protoOf($verifyRawCOROUTINE$27).ca;
  protoOf($verifyRawCOROUTINE$27)['<get-finallyPath>'] = protoOf($verifyRawCOROUTINE$27).da;
  protoOf($verifyRawCOROUTINE$27)['<get-context>'] = protoOf($verifyRawCOROUTINE$27).t9;
  function $verifyJwsCOROUTINE$28(_this__u8e3s4, signedJws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f80_1 = _this__u8e3s4;
    this.g80_1 = signedJws;
  }
  protoOf($verifyJwsCOROUTINE$28).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = this.f80_1.y6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h80_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.h80_1.z6o(this.g80_1, this);
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
            var verification = suspendResult.up_1;
            return new Result(verification);
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
  protoOf($verifyJwsCOROUTINE$28)['<set-state>'] = protoOf($verifyJwsCOROUTINE$28).u9;
  protoOf($verifyJwsCOROUTINE$28)['<get-state>'] = protoOf($verifyJwsCOROUTINE$28).v9;
  protoOf($verifyJwsCOROUTINE$28)['<set-exceptionState>'] = protoOf($verifyJwsCOROUTINE$28).w9;
  protoOf($verifyJwsCOROUTINE$28)['<get-exceptionState>'] = protoOf($verifyJwsCOROUTINE$28).x9;
  protoOf($verifyJwsCOROUTINE$28)['<set-result>'] = protoOf($verifyJwsCOROUTINE$28).y9;
  protoOf($verifyJwsCOROUTINE$28)['<get-result>'] = protoOf($verifyJwsCOROUTINE$28).z9;
  protoOf($verifyJwsCOROUTINE$28)['<set-exception>'] = protoOf($verifyJwsCOROUTINE$28).aa;
  protoOf($verifyJwsCOROUTINE$28)['<get-exception>'] = protoOf($verifyJwsCOROUTINE$28).ba;
  protoOf($verifyJwsCOROUTINE$28)['<set-finallyPath>'] = protoOf($verifyJwsCOROUTINE$28).ca;
  protoOf($verifyJwsCOROUTINE$28)['<get-finallyPath>'] = protoOf($verifyJwsCOROUTINE$28).da;
  protoOf($verifyJwsCOROUTINE$28)['<get-context>'] = protoOf($verifyJwsCOROUTINE$28).t9;
  function $getPublicKeyRepresentationCOROUTINE$29(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q80_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyRepresentationCOROUTINE$29).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.q80_1.y6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.r80_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.r80_1.s6q(this);
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
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<set-state>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).u9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-state>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).v9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<set-exceptionState>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).w9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-exceptionState>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).x9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<set-result>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).y9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-result>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).z9;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<set-exception>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).aa;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-exception>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).ba;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<set-finallyPath>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).ca;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-finallyPath>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).da;
  protoOf($getPublicKeyRepresentationCOROUTINE$29)['<get-context>'] = protoOf($getPublicKeyRepresentationCOROUTINE$29).t9;
  function $getMetaCOROUTINE$30(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a81_1 = _this__u8e3s4;
  }
  protoOf($getMetaCOROUTINE$30).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.a81_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new AzureKeyMeta(ARGUMENT);
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
  protoOf($getMetaCOROUTINE$30)['<set-state>'] = protoOf($getMetaCOROUTINE$30).u9;
  protoOf($getMetaCOROUTINE$30)['<get-state>'] = protoOf($getMetaCOROUTINE$30).v9;
  protoOf($getMetaCOROUTINE$30)['<set-exceptionState>'] = protoOf($getMetaCOROUTINE$30).w9;
  protoOf($getMetaCOROUTINE$30)['<get-exceptionState>'] = protoOf($getMetaCOROUTINE$30).x9;
  protoOf($getMetaCOROUTINE$30)['<set-result>'] = protoOf($getMetaCOROUTINE$30).y9;
  protoOf($getMetaCOROUTINE$30)['<get-result>'] = protoOf($getMetaCOROUTINE$30).z9;
  protoOf($getMetaCOROUTINE$30)['<set-exception>'] = protoOf($getMetaCOROUTINE$30).aa;
  protoOf($getMetaCOROUTINE$30)['<get-exception>'] = protoOf($getMetaCOROUTINE$30).ba;
  protoOf($getMetaCOROUTINE$30)['<set-finallyPath>'] = protoOf($getMetaCOROUTINE$30).ca;
  protoOf($getMetaCOROUTINE$30)['<get-finallyPath>'] = protoOf($getMetaCOROUTINE$30).da;
  protoOf($getMetaCOROUTINE$30)['<get-context>'] = protoOf($getMetaCOROUTINE$30).t9;
  function $deleteKeyCOROUTINE$31(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j81_1 = _this__u8e3s4;
  }
  protoOf($deleteKeyCOROUTINE$31).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.j81_1.p7x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_0 = this;
            tmp_0.k81_1 = Companion_getInstance_22().r6u_1;
            var tmp_1 = this;
            tmp_1.l81_1 = this.j81_1.id + '?api-version=7.4';
            this.m81_1 = this.k81_1;
            this.n81_1 = this.l81_1;
            var tmp_2 = this;
            tmp_2.o81_1 = this.m81_1;
            this.p81_1 = this.o81_1;
            var tmp_3 = this;
            tmp_3.q81_1 = this.p81_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.n81_1);
            contentType(this_0, Application_getInstance().y2v_1);
            bearerAuth(this_0, _get_accessToken__9zuu2s(this.j81_1));
            tmp_4.r81_1 = this_0;
            this.s81_1 = this.q81_1;
            this.t81_1 = this.r81_1;
            this.t81_1.j3k_1 = Companion_getInstance_0().g32_1;
            var tmp_5 = this;
            tmp_5.u81_1 = this.s81_1;
            var tmp_6 = this;
            tmp_6.v81_1 = this.t81_1;
            this.w81_1 = this.u81_1;
            this.x81_1 = this.v81_1;
            this.n9_1 = 2;
            suspendResult = (new HttpStatement(this.x81_1, this.w81_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var response = suspendResult;
            return isSuccess(response.p37());
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
  protoOf($deleteKeyCOROUTINE$31)['<set-state>'] = protoOf($deleteKeyCOROUTINE$31).u9;
  protoOf($deleteKeyCOROUTINE$31)['<get-state>'] = protoOf($deleteKeyCOROUTINE$31).v9;
  protoOf($deleteKeyCOROUTINE$31)['<set-exceptionState>'] = protoOf($deleteKeyCOROUTINE$31).w9;
  protoOf($deleteKeyCOROUTINE$31)['<get-exceptionState>'] = protoOf($deleteKeyCOROUTINE$31).x9;
  protoOf($deleteKeyCOROUTINE$31)['<set-result>'] = protoOf($deleteKeyCOROUTINE$31).y9;
  protoOf($deleteKeyCOROUTINE$31)['<get-result>'] = protoOf($deleteKeyCOROUTINE$31).z9;
  protoOf($deleteKeyCOROUTINE$31)['<set-exception>'] = protoOf($deleteKeyCOROUTINE$31).aa;
  protoOf($deleteKeyCOROUTINE$31)['<get-exception>'] = protoOf($deleteKeyCOROUTINE$31).ba;
  protoOf($deleteKeyCOROUTINE$31)['<set-finallyPath>'] = protoOf($deleteKeyCOROUTINE$31).ca;
  protoOf($deleteKeyCOROUTINE$31)['<get-finallyPath>'] = protoOf($deleteKeyCOROUTINE$31).da;
  protoOf($deleteKeyCOROUTINE$31)['<get-context>'] = protoOf($deleteKeyCOROUTINE$31).t9;
  function $getPublicKeyFromAzureKmsCOROUTINE$32(_this__u8e3s4, keyId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g82_1 = _this__u8e3s4;
    this.h82_1 = keyId;
  }
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.n9_1 = 1;
            suspendResult = this.g82_1.p7x(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i82_1 = AzureKeyFunctions_instance;
            var tmp_0 = this;
            tmp_0.j82_1 = Companion_getInstance_22().r6u_1;
            var tmp_1 = this;
            tmp_1.k82_1 = this.h82_1 + '?api-version=7.4';
            this.l82_1 = this.j82_1;
            this.m82_1 = this.k82_1;
            var tmp_2 = this;
            tmp_2.n82_1 = this.l82_1;
            this.o82_1 = this.n82_1;
            var tmp_3 = this;
            tmp_3.p82_1 = this.o82_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.m82_1);
            contentType(this_0, Application_getInstance().y2v_1);
            bearerAuth(this_0, _get_accessToken__9zuu2s(this.g82_1));
            tmp_4.q82_1 = this_0;
            this.r82_1 = this.p82_1;
            this.s82_1 = this.q82_1;
            this.s82_1.j3k_1 = Companion_getInstance_0().c32_1;
            var tmp_5 = this;
            tmp_5.t82_1 = this.r82_1;
            var tmp_6 = this;
            tmp_6.u82_1 = this.s82_1;
            this.v82_1 = this.t82_1;
            this.w82_1 = this.u82_1;
            this.n9_1 = 2;
            suspendResult = (new HttpStatement(this.w82_1, this.v82_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.x82_1 = suspendResult;
            this.n9_1 = 3;
            suspendResult = this.i82_1.j7q(this.x82_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.y82_1 = suspendResult;
            var tmp_7 = this;
            var tmp0_elvis_lhs = this.y82_1.af('key');
            var tmp_8;
            if (tmp0_elvis_lhs == null) {
              var message = 'Missing key in response';
              throw IllegalStateException_init_$Create$(toString_0(message));
            } else {
              tmp_8 = tmp0_elvis_lhs;
            }

            tmp_7.z82_1 = get_jsonObject(tmp_8);
            this.n9_1 = 4;
            suspendResult = AzureKeyFunctions_instance.k7q(this.z82_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var parsedAzurePublicKey = suspendResult;
            return parsedAzurePublicKey.publicKey;
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
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<set-state>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).u9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-state>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).v9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<set-exceptionState>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).w9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-exceptionState>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).x9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<set-result>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).y9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-result>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).z9;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<set-exception>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).aa;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-exception>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).ba;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<set-finallyPath>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).ca;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-finallyPath>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).da;
  protoOf($getPublicKeyFromAzureKmsCOROUTINE$32)['<get-context>'] = protoOf($getPublicKeyFromAzureKmsCOROUTINE$32).t9;
  function AzureKey(id, auth, _keyType, _publicKey) {
    Companion_getInstance_22();
    _keyType = _keyType === VOID ? null : _keyType;
    _publicKey = _publicKey === VOID ? null : _publicKey;
    Key.call(this);
    this.id = id;
    this.auth = auth;
    this.l7q_1 = _keyType;
    this.m7q_1 = _publicKey;
  }
  protoOf(AzureKey).x6b = function () {
    return this.id;
  };
  protoOf(AzureKey).a83 = function () {
    return this.auth;
  };
  protoOf(AzureKey).q7x = function ($completion) {
    var tmp = new $fetchAndUpdatePublicKeyCOROUTINE$21(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey).f7x = function ($completion) {
    var tmp = new $updateAccessTokenCOROUTINE$22(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey).p7x = function ($completion) {
    var tmp = new $ensureAccessTokenValidCOROUTINE$23(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey).n6m = function ($completion) {
    var tmp = new $initCOROUTINE$24(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey).d7k = function (value) {
    this.l7q_1 = value;
  };
  protoOf(AzureKey).h6r = function () {
    var tmp0_elvis_lhs = this.l7q_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'Getting keyType without calling init() first';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AzureKey).i6r = function () {
    return false;
  };
  protoOf(AzureKey).toString = function () {
    return '[Azure ' + this.keyType.s2_1 + ' key @ ' + this.auth.keyVaultUrl + ' - ' + this.id + ']';
  };
  protoOf(AzureKey).d6m = function ($completion) {
    return this.id;
  };
  protoOf(AzureKey).d6o = function ($completion) {
    throw UnsupportedOperationException_init_$Create$('No private key available');
  };
  protoOf(AzureKey).j6p = function ($completion) {
    throw UnsupportedOperationException_init_$Create$('No private key available');
  };
  protoOf(AzureKey).u6p = function ($completion) {
    throw UnsupportedOperationException_init_$Create$('No private key available');
  };
  protoOf(AzureKey).t6n = function ($completion) {
    throw UnsupportedOperationException_init_$Create$('No private key available');
  };
  protoOf(AzureKey).v7s = function (plaintext, ieeeP1363Signature, $completion) {
    var tmp = new $signRawAzureCOROUTINE$25(this, plaintext, ieeeP1363Signature, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey).s7a = function (plaintext, $completion) {
    return this.v7s(plaintext, false, $completion);
  };
  protoOf(AzureKey).t6l = function (plaintext, $completion) {
    return this.s7a(plaintext, $completion);
  };
  protoOf(AzureKey).h6l = function (plaintext, headers, $completion) {
    var tmp = new $signJwsCOROUTINE$26(this, plaintext, headers, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey).h6q = function (signed, detachedPlaintext, $completion) {
    var tmp = new $verifyRawCOROUTINE$27(this, signed, detachedPlaintext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AzureKey).z6o = function (signedJws, $completion) {
    var tmp = new $verifyJwsCOROUTINE$28(this, signedJws, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(AzureKey).y6m = function ($completion) {
    var tmp0_safe_receiver = this.m7q_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y6r_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var message = 'Init was not called before public key was requested';
      throw IllegalStateException_init_$Create$(toString_0(message));
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AzureKey).s6q = function ($completion) {
    var tmp = new $getPublicKeyRepresentationCOROUTINE$29(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey).j6n = function ($completion) {
    var tmp = new $getMetaCOROUTINE$30(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey).u6k = function ($completion) {
    var tmp = new $deleteKeyCOROUTINE$31(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey).m7w = function (keyId, $completion) {
    var tmp = new $getPublicKeyFromAzureKmsCOROUTINE$32(this, keyId, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(AzureKey).j6r = function () {
    var tmp = AzureKey$deleteKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).k6r = function (plaintext, headers) {
    var tmp = AzureKey$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).l6r = function (plaintext) {
    var tmp = AzureKey$signRawAsync$slambda_0(this, plaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).m6r = function () {
    var tmp = AzureKey$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).b83 = function (plaintext, ieeeP1363Signature) {
    var tmp = AzureKey$signRawAzureAsync$slambda_0(this, plaintext, ieeeP1363Signature, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).o6r = function () {
    var tmp = AzureKey$getPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).p6r = function () {
    var tmp = AzureKey$getMetaAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).q6r = function () {
    var tmp = AzureKey$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).r6r = function () {
    var tmp = AzureKey$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).t6r = function (signedJws) {
    var tmp = AzureKey$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).u6r = function () {
    var tmp = AzureKey$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).v6r = function () {
    var tmp = AzureKey$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).w6r = function (signed, detachedPlaintext) {
    var tmp = AzureKey$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(AzureKey).x6r = function () {
    var tmp = AzureKey$getPublicKeyRepresentationAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function Companion_17() {
  }
  var Companion_instance_22;
  function Companion_getInstance_23() {
    return Companion_instance_22;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.azure.AzureKeyMetadata', this, 2);
    tmp0_serialDesc.x2b('auth', false);
    tmp0_serialDesc.x2b('name', true);
    this.c83_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).d83 = function (encoder, value) {
    var tmp0_desc = this.c83_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.y25(tmp0_desc, 0, $serializer_getInstance_8(), value.g7q_1);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.h7q_1 == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value.h7q_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_13).v20 = function (encoder, value) {
    return this.d83(encoder, value instanceof AzureKeyMetadata ? value : THROW_CCE());
  };
  protoOf($serializer_13).w20 = function (decoder) {
    var tmp0_desc = this.c83_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, $serializer_getInstance_8(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, $serializer_getInstance_8(), tmp4_local0);
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
    return AzureKeyMetadata_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_13).u20 = function () {
    return this.c83_1;
  };
  protoOf($serializer_13).m2c = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_13().c83_1);
    }
    $this.g7q_1 = auth;
    if (0 === (seen0 & 2))
      $this.h7q_1 = null;
    else
      $this.h7q_1 = name;
    return $this;
  }
  function AzureKeyMetadata_init_$Create$(seen0, auth, name, serializationConstructorMarker) {
    return AzureKeyMetadata_init_$Init$(seen0, auth, name, serializationConstructorMarker, objectCreate(protoOf(AzureKeyMetadata)));
  }
  function AzureKeyMetadata(auth, name) {
    name = name === VOID ? null : name;
    this.g7q_1 = auth;
    this.h7q_1 = name;
  }
  protoOf(AzureKeyMetadata).toString = function () {
    return 'AzureKeyMetadata(auth=' + this.g7q_1.toString() + ', name=' + this.h7q_1 + ')';
  };
  protoOf(AzureKeyMetadata).hashCode = function () {
    var result = this.g7q_1.hashCode();
    result = imul(result, 31) + (this.h7q_1 == null ? 0 : getStringHashCode(this.h7q_1)) | 0;
    return result;
  };
  protoOf(AzureKeyMetadata).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AzureKeyMetadata))
      return false;
    var tmp0_other_with_cast = other instanceof AzureKeyMetadata ? other : THROW_CCE();
    if (!this.g7q_1.equals(tmp0_other_with_cast.g7q_1))
      return false;
    if (!(this.h7q_1 == tmp0_other_with_cast.h7q_1))
      return false;
    return true;
  };
  function JWKKeyJsonFieldSerializer() {
    JWKKeyJsonFieldSerializer_instance = this;
    this.e83_1 = Companion_instance_0.m4u().u20();
  }
  protoOf(JWKKeyJsonFieldSerializer).u20 = function () {
    return this.e83_1;
  };
  protoOf(JWKKeyJsonFieldSerializer).w20 = function (decoder) {
    var tmp0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value = decoder.g24(Companion_instance_0.m4u());
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(JsonElement), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    return tmp0.x21(tmp$ret$1, value);
  };
  protoOf(JWKKeyJsonFieldSerializer).f83 = function (encoder, value) {
    var tmp = Companion_instance_0.m4u();
    var tmp_0;
    if (value == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
      var this_0 = Default_getInstance();
      // Inline function 'kotlinx.serialization.serializer' call
      var this_1 = this_0.w24();
      // Inline function 'kotlinx.serialization.internal.cast' call
      var this_2 = serializer(this_1, createKType(getKClass(JsonElement), arrayOf([]), false));
      var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
      tmp_0 = this_0.y21(tmp$ret$1, value);
    }
    var tmp1_elvis_lhs = tmp_0;
    return encoder.z25(tmp, tmp1_elvis_lhs == null ? JsonNull_getInstance() : tmp1_elvis_lhs);
  };
  protoOf(JWKKeyJsonFieldSerializer).v20 = function (encoder, value) {
    return this.f83(encoder, (value == null ? true : typeof value === 'string') ? value : THROW_CCE());
  };
  var JWKKeyJsonFieldSerializer_instance;
  function JWKKeyJsonFieldSerializer_getInstance() {
    if (JWKKeyJsonFieldSerializer_instance == null)
      new JWKKeyJsonFieldSerializer();
    return JWKKeyJsonFieldSerializer_instance;
  }
  function JWKKeyCreator$importJWKAsync$slambda(this$0, $jwk, resultContinuation) {
    this.o83_1 = this$0;
    this.p83_1 = $jwk;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKeyCreator$importJWKAsync$slambda).q83 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKeyCreator$importJWKAsync$slambda).ac = function ($completion) {
    return this.q83($completion);
  };
  protoOf(JWKKeyCreator$importJWKAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.o83_1.t7i(this.p83_1, this);
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
  protoOf(JWKKeyCreator$importJWKAsync$slambda).ja = function (completion) {
    return new JWKKeyCreator$importJWKAsync$slambda(this.o83_1, this.p83_1, completion);
  };
  function JWKKeyCreator$importJWKAsync$slambda_0(this$0, $jwk, resultContinuation) {
    var i = new JWKKeyCreator$importJWKAsync$slambda(this$0, $jwk, resultContinuation);
    var l = function ($completion) {
      return i.q83($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKeyCreator$importPEMAsync$slambda(this$0, $pem, resultContinuation) {
    this.z83_1 = this$0;
    this.a84_1 = $pem;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKeyCreator$importPEMAsync$slambda).q83 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKeyCreator$importPEMAsync$slambda).ac = function ($completion) {
    return this.q83($completion);
  };
  protoOf(JWKKeyCreator$importPEMAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.z83_1.w77(this.a84_1, this);
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
  protoOf(JWKKeyCreator$importPEMAsync$slambda).ja = function (completion) {
    return new JWKKeyCreator$importPEMAsync$slambda(this.z83_1, this.a84_1, completion);
  };
  function JWKKeyCreator$importPEMAsync$slambda_0(this$0, $pem, resultContinuation) {
    var i = new JWKKeyCreator$importPEMAsync$slambda(this$0, $pem, resultContinuation);
    var l = function ($completion) {
      return i.q83($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKeyCreator$generateAsync$slambda(this$0, $type, $metadata, resultContinuation) {
    this.j84_1 = this$0;
    this.k84_1 = $type;
    this.l84_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKeyCreator$generateAsync$slambda).m84 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKeyCreator$generateAsync$slambda).ac = function ($completion) {
    return this.m84($completion);
  };
  protoOf(JWKKeyCreator$generateAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.j84_1.n84(this.k84_1, this.l84_1, this);
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
  protoOf(JWKKeyCreator$generateAsync$slambda).ja = function (completion) {
    return new JWKKeyCreator$generateAsync$slambda(this.j84_1, this.k84_1, this.l84_1, completion);
  };
  function JWKKeyCreator$generateAsync$slambda_0(this$0, $type, $metadata, resultContinuation) {
    var i = new JWKKeyCreator$generateAsync$slambda(this$0, $type, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.m84($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKeyCreator$importRawPublicKeyAsync$slambda(this$0, $type, $rawPublicKey, $metadata, resultContinuation) {
    this.w84_1 = this$0;
    this.x84_1 = $type;
    this.y84_1 = $rawPublicKey;
    this.z84_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKeyCreator$importRawPublicKeyAsync$slambda).x6m = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKeyCreator$importRawPublicKeyAsync$slambda).ac = function ($completion) {
    return this.x6m($completion);
  };
  protoOf(JWKKeyCreator$importRawPublicKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.w84_1.a85(this.x84_1, this.y84_1, this.z84_1, this);
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
  protoOf(JWKKeyCreator$importRawPublicKeyAsync$slambda).ja = function (completion) {
    return new JWKKeyCreator$importRawPublicKeyAsync$slambda(this.w84_1, this.x84_1, this.y84_1, this.z84_1, completion);
  };
  function JWKKeyCreator$importRawPublicKeyAsync$slambda_0(this$0, $type, $rawPublicKey, $metadata, resultContinuation) {
    var i = new JWKKeyCreator$importRawPublicKeyAsync$slambda(this$0, $type, $rawPublicKey, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.x6m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKeyCreator() {
  }
  function Companion_18() {
  }
  protoOf(Companion_18).m4u = function () {
    return $serializer_getInstance_14();
  };
  var Companion_instance_23;
  function Companion_getInstance_24() {
    return Companion_instance_23;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.oci.OCIKeyMetadata', this, 7);
    tmp0_serialDesc.x2b('tenancyOcid', false);
    tmp0_serialDesc.x2b('compartmentOcid', false);
    tmp0_serialDesc.x2b('userOcid', false);
    tmp0_serialDesc.x2b('fingerprint', false);
    tmp0_serialDesc.x2b('managementEndpoint', false);
    tmp0_serialDesc.x2b('cryptoEndpoint', false);
    tmp0_serialDesc.x2b('signingKeyPem', true);
    this.f85_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).g85 = function (encoder, value) {
    var tmp0_desc = this.f85_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.tenancyOcid);
    tmp1_output.w25(tmp0_desc, 1, value.compartmentOcid);
    tmp1_output.w25(tmp0_desc, 2, value.userOcid);
    tmp1_output.w25(tmp0_desc, 3, value.fingerprint);
    tmp1_output.w25(tmp0_desc, 4, value.managementEndpoint);
    tmp1_output.w25(tmp0_desc, 5, value.cryptoEndpoint);
    if (tmp1_output.e26(tmp0_desc, 6) ? true : !(value.signingKeyPem == null)) {
      tmp1_output.a26(tmp0_desc, 6, StringSerializer_getInstance(), value.signingKeyPem);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_14).v20 = function (encoder, value) {
    return this.g85(encoder, value instanceof OCIKeyMetadata ? value : THROW_CCE());
  };
  protoOf($serializer_14).w20 = function (decoder) {
    var tmp0_desc = this.f85_1;
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
    if (tmp11_input.x24()) {
      tmp4_local0 = tmp11_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.r24(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.r24(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp11_input.r24(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp11_input.v24(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
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
            tmp5_local1 = tmp11_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.r24(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.r24(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp11_input.r24(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp11_input.v24(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.i24(tmp0_desc);
    return OCIKeyMetadata_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_14).u20 = function () {
    return this.f85_1;
  };
  protoOf($serializer_14).m2c = function () {
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
      throwMissingFieldException(seen0, 63, $serializer_getInstance_14().f85_1);
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
  protoOf(OCIKeyMetadata).h85 = function () {
    return this.tenancyOcid;
  };
  protoOf(OCIKeyMetadata).i85 = function () {
    return this.compartmentOcid;
  };
  protoOf(OCIKeyMetadata).j85 = function () {
    return this.userOcid;
  };
  protoOf(OCIKeyMetadata).k85 = function () {
    return this.fingerprint;
  };
  protoOf(OCIKeyMetadata).l85 = function () {
    return this.managementEndpoint;
  };
  protoOf(OCIKeyMetadata).m85 = function () {
    return this.cryptoEndpoint;
  };
  protoOf(OCIKeyMetadata).n85 = function () {
    return this.signingKeyPem;
  };
  protoOf(OCIKeyMetadata).dc = function () {
    return this.tenancyOcid;
  };
  protoOf(OCIKeyMetadata).ec = function () {
    return this.compartmentOcid;
  };
  protoOf(OCIKeyMetadata).yp = function () {
    return this.userOcid;
  };
  protoOf(OCIKeyMetadata).p70 = function () {
    return this.fingerprint;
  };
  protoOf(OCIKeyMetadata).w7k = function () {
    return this.managementEndpoint;
  };
  protoOf(OCIKeyMetadata).o85 = function () {
    return this.cryptoEndpoint;
  };
  protoOf(OCIKeyMetadata).p85 = function () {
    return this.signingKeyPem;
  };
  protoOf(OCIKeyMetadata).q85 = function (tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem) {
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
    return $super === VOID ? this.q85(tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem) : $super.q85.call(this, tenancyOcid, compartmentOcid, userOcid, fingerprint, managementEndpoint, cryptoEndpoint, signingKeyPem);
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
    switch (type.t2_1) {
      case 2:
        tmp = 'ECDSA';
        break;
      case 3:
        tmp = 'RSA';
        break;
      default:
        throw new KeyTypeNotSupportedException(type.s2_1);
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
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function ociJsonDataBody($this, _this__u8e3s4, $completion) {
    var tmp = new $ociJsonDataBodyCOROUTINE$45($this, _this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
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
    return Default_getInstance_1().yk(sha256WithRsa(privateOciApiKey, encodeToByteArray(signingString)));
  }
  function calculateSHA256($this, data) {
    if (data == null)
      return '';
    var digest = SHA256_init_$Create$();
    var hash = digest.g6i(encodeToByteArray(data));
    return Default_getInstance_1().yk(hash);
  }
  function getKeys($this, keyId, host, tenancyOcid, signingKey, $completion) {
    var tmp = new $getKeysCOROUTINE$46($this, keyId, host, tenancyOcid, signingKey, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function getOCIPublicKey($this, OCIDKeyID, keyId, host, keyVersion, signingKeyPem, $completion) {
    var tmp = new $getOCIPublicKeyCOROUTINE$47($this, OCIDKeyID, keyId, host, keyVersion, signingKeyPem, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function OCIKeyRestApi$Companion$$childSerializers$_anonymous__ad0c0i() {
    return Companion_getInstance_14().m4u();
  }
  function OCIKeyRestApi$Companion$generateKey$slambda($type, $config, resultContinuation) {
    this.x8a_1 = $type;
    this.y8a_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$Companion$generateKey$slambda).z8b = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$Companion$generateKey$slambda).ac = function ($completion) {
    return this.z8b($completion);
  };
  protoOf(OCIKeyRestApi$Companion$generateKey$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.z8a_1 = keyTypeToOciKeyMapping(Companion_getInstance_25(), this.x8a_1);
            this.a8b_1 = this.y8a_1.tenancyOcid + '/' + this.y8a_1.userOcid + '/' + this.y8a_1.fingerprint;
            this.b8b_1 = this.y8a_1.managementEndpoint;
            var tmp_0 = this;
            var tmp_1;
            switch (this.x8a_1.t2_1) {
              case 2:
                tmp_1 = 32;
                break;
              case 3:
                tmp_1 = 256;
                break;
              default:
                throw new KeyTypeNotSupportedException(this.x8a_1.s2_1);
            }

            tmp_0.c8b_1 = tmp_1;
            var tmp_2 = this;
            var tmp_3 = to('compartmentId', JsonPrimitive_0(this.y8a_1.compartmentOcid));
            var tmp_4 = to('displayName', JsonPrimitive_0('WaltID'));
            var tmp_5 = to('algorithm', JsonPrimitive_0(this.z8a_1));
            var tmp_6 = to('length', JsonPrimitive_1(this.c8b_1));
            var tmp0 = this.x8a_1.t2_1;
            tmp_2.d8b_1 = (new JsonObject(mapOf([tmp_3, tmp_4, to('keyShape', new JsonObject(mapOf([tmp_5, tmp_6, tmp0 === 2 ? to('curveId', JsonPrimitive_0('NIST_P256')) : to('curveId', JsonNull_getInstance())]))), to('protectionMode', JsonPrimitive_0('SOFTWARE'))]))).toString();
            this.e8b_1 = signingRequest(Companion_getInstance_25(), 'POST', '/20180608/keys', this.b8b_1, this.d8b_1, this.y8a_1.signingKeyPem);
            this.f8b_1 = Companion_getInstance_25();
            var tmp_7 = this;
            tmp_7.g8b_1 = Companion_getInstance_25().r6t_1;
            var tmp_8 = this;
            tmp_8.h8b_1 = 'https://' + this.b8b_1 + '/20180608/keys';
            this.i8b_1 = this.g8b_1;
            this.j8b_1 = this.h8b_1;
            var tmp_9 = this;
            tmp_9.k8b_1 = this.i8b_1;
            this.l8b_1 = this.k8b_1;
            var tmp_10 = this;
            tmp_10.m8b_1 = this.l8b_1;
            var tmp_11 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.j8b_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="date (request-target) host content-length content-type x-content-sha256",keyId="' + this.a8b_1 + '",algorithm="rsa-sha256",signature="' + this.e8b_1 + '"');
            header(this_0, 'Host', this.b8b_1);
            header(this_0, 'x-content-sha256', calculateSHA256(Companion_getInstance_25(), this.d8b_1));
            var body = this.d8b_1;
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
              var tmp_12 = PrimitiveClasses_getInstance().nd();
              var tmp_13;
              try {
                tmp_13 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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
              this_0.e3q(new TypeInfo(tmp_12, tmp_13));
            } else {
              if (body instanceof OutgoingContent) {
                this_0.l3k_1 = body;
                this_0.e3q(null);
              } else {
                this_0.l3k_1 = body;
                var tmp_15 = PrimitiveClasses_getInstance().nd();
                var tmp_16;
                try {
                  tmp_16 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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
                this_0.e3q(new TypeInfo(tmp_15, tmp_16));
              }
            }

            tmp_11.n8b_1 = this_0;
            this.o8b_1 = this.m8b_1;
            this.p8b_1 = this.n8b_1;
            this.p8b_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_18 = this;
            tmp_18.q8b_1 = this.o8b_1;
            var tmp_19 = this;
            tmp_19.r8b_1 = this.p8b_1;
            this.s8b_1 = this.q8b_1;
            this.t8b_1 = this.r8b_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.t8b_1, this.s8b_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u8b_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = ociJsonDataBody(this.f8b_1, this.u8b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.v8b_1 = suspendResult;
            var tmp_20 = this;
            var tmp2_safe_receiver = this.v8b_1.af('currentKeyVersion');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
            var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
            tmp_20.w8b_1 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
            var tmp_21 = this;
            var tmp5_safe_receiver = this.v8b_1.af('id');
            var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : get_jsonPrimitive(tmp5_safe_receiver);
            var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.q4u();
            tmp_21.x8b_1 = tmp7_elvis_lhs == null ? '' : tmp7_elvis_lhs;
            this.n9_1 = 3;
            suspendResult = getOCIPublicKey(Companion_getInstance_25(), this.x8b_1, this.a8b_1, this.b8b_1, this.w8b_1, this.y8a_1.signingKeyPem, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.y8b_1 = suspendResult;
            this.n9_1 = 4;
            suspendResult = this.y8b_1.j6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            var ARGUMENT = suspendResult;
            return new OCIKeyRestApi(this.y8a_1, this.x8b_1, ARGUMENT, ociKeyToKeyTypeMapping(Companion_getInstance_25(), this.z8a_1));
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
  protoOf(OCIKeyRestApi$Companion$generateKey$slambda).ja = function (completion) {
    return new OCIKeyRestApi$Companion$generateKey$slambda(this.x8a_1, this.y8a_1, completion);
  };
  function OCIKeyRestApi$Companion$generateKey$slambda_0($type, $config, resultContinuation) {
    var i = new OCIKeyRestApi$Companion$generateKey$slambda($type, $config, resultContinuation);
    var l = function ($completion) {
      return i.z8b($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$Companion$ociJsonDataBody$lambda($this_ociJsonDataBody) {
    return function () {
      return 'OCI server (URL: ' + get_request($this_ociJsonDataBody).u3m().toString() + ') returned invalid response: ';
    };
  }
  function OCIKeyRestApi$Companion$deleteKey$slambda($OCIDKeyID, $host, $signingKeyPem, $keyId, resultContinuation) {
    this.i8c_1 = $OCIDKeyID;
    this.j8c_1 = $host;
    this.k8c_1 = $signingKeyPem;
    this.l8c_1 = $keyId;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$Companion$deleteKey$slambda).h8d = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$Companion$deleteKey$slambda).ac = function ($completion) {
    return this.h8d($completion);
  };
  protoOf(OCIKeyRestApi$Companion$deleteKey$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.m8c_1 = System_instance.d5v();
            this.n8c_1 = plus(this.m8c_1, 5, Companion_getInstance_3().u5v_1, Companion_getInstance_2().p6c());
            this.o8c_1 = (new JsonObject(mapOf_0(to('timeOfDeletion', JsonPrimitive_0(this.n8c_1.toString()))))).toString();
            this.p8c_1 = signingRequest(Companion_getInstance_25(), 'POST', '/20180608/keys/' + this.i8c_1 + '/actions/scheduleDeletion', this.j8c_1, this.o8c_1, this.k8c_1);
            var tmp_0 = this;
            tmp_0.q8c_1 = Companion_getInstance_25().r6t_1;
            var tmp_1 = this;
            tmp_1.r8c_1 = 'https://' + this.j8c_1 + '/20180608/keys/' + this.i8c_1 + '/actions/scheduleDeletion';
            this.s8c_1 = this.q8c_1;
            this.t8c_1 = this.r8c_1;
            var tmp_2 = this;
            tmp_2.u8c_1 = this.s8c_1;
            this.v8c_1 = this.u8c_1;
            var tmp_3 = this;
            tmp_3.w8c_1 = this.v8c_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.t8c_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="date (request-target) host content-length content-type x-content-sha256",keyId="' + this.l8c_1 + '",algorithm="rsa-sha256",signature="' + this.p8c_1 + '"');
            header(this_0, 'Host', this.j8c_1);
            header(this_0, 'x-content-sha256', calculateSHA256(Companion_getInstance_25(), this.o8c_1));
            var body = this.o8c_1;
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
              var tmp_5 = PrimitiveClasses_getInstance().nd();
              var tmp_6;
              try {
                tmp_6 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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
                var tmp_8 = PrimitiveClasses_getInstance().nd();
                var tmp_9;
                try {
                  tmp_9 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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

            tmp_4.x8c_1 = this_0;
            this.y8c_1 = this.w8c_1;
            this.z8c_1 = this.x8c_1;
            this.z8c_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_11 = this;
            tmp_11.a8d_1 = this.y8c_1;
            var tmp_12 = this;
            tmp_12.b8d_1 = this.z8c_1;
            this.c8d_1 = this.a8d_1;
            this.d8d_1 = this.b8d_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.d8d_1, this.c8d_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e8d_1 = suspendResult;
            var tmp_13 = this;
            tmp_13.f8d_1 = this.e8d_1;
            this.g8d_1 = this.f8d_1;
            this.n9_1 = 2;
            var tmp_14 = this.g8d_1.q3n();
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

            suspendResult = tmp_14.t3m(new TypeInfo(tmp_15, tmp_16), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            return to(this.e8d_1, ARGUMENT);
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
  protoOf(OCIKeyRestApi$Companion$deleteKey$slambda).ja = function (completion) {
    return new OCIKeyRestApi$Companion$deleteKey$slambda(this.i8c_1, this.j8c_1, this.k8c_1, this.l8c_1, completion);
  };
  function OCIKeyRestApi$Companion$deleteKey$slambda_0($OCIDKeyID, $host, $signingKeyPem, $keyId, resultContinuation) {
    var i = new OCIKeyRestApi$Companion$deleteKey$slambda($OCIDKeyID, $host, $signingKeyPem, $keyId, resultContinuation);
    var l = function ($completion) {
      return i.h8d($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$Companion$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.p3l(tmp, OCIKeyRestApi$Companion$http$lambda$lambda);
    defaultRequest($this$HttpClient, OCIKeyRestApi$Companion$http$lambda$lambda_0);
    var tmp_0 = get_Logging();
    $this$HttpClient.p3l(tmp_0, OCIKeyRestApi$Companion$http$lambda$lambda_1);
    return Unit_instance;
  }
  function OCIKeyRestApi$Companion$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function OCIKeyRestApi$Companion$http$lambda$lambda_0($this$defaultRequest) {
    header($this$defaultRequest, HttpHeaders_getInstance().t2y_1, toHttpDate(GMTDate()));
    header($this$defaultRequest, HttpHeaders_getInstance().q2y_1, Application_getInstance().y2v_1);
    header($this$defaultRequest, HttpHeaders_getInstance().y2x_1, Application_getInstance().y2v_1);
    return Unit_instance;
  }
  function OCIKeyRestApi$Companion$http$lambda$lambda_1($this$install) {
    $this$install.o5g(get_DEFAULT(Companion_instance_2));
    $this$install.n5g_1 = LogLevel_ALL_getInstance();
    return Unit_instance;
  }
  function OCIKeyRestApi$Companion$deleteKeyAsync$slambda($OCIDKeyID, $keyId, $host, $signingKeyPem, resultContinuation) {
    this.q8d_1 = $OCIDKeyID;
    this.r8d_1 = $keyId;
    this.s8d_1 = $host;
    this.t8d_1 = $signingKeyPem;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$Companion$deleteKeyAsync$slambda).h8d = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$Companion$deleteKeyAsync$slambda).ac = function ($completion) {
    return this.h8d($completion);
  };
  protoOf(OCIKeyRestApi$Companion$deleteKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_getInstance_25().u8d(this.q8d_1, this.r8d_1, this.s8d_1, this.t8d_1, this);
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
  protoOf(OCIKeyRestApi$Companion$deleteKeyAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$Companion$deleteKeyAsync$slambda(this.q8d_1, this.r8d_1, this.s8d_1, this.t8d_1, completion);
  };
  function OCIKeyRestApi$Companion$deleteKeyAsync$slambda_0($OCIDKeyID, $keyId, $host, $signingKeyPem, resultContinuation) {
    var i = new OCIKeyRestApi$Companion$deleteKeyAsync$slambda($OCIDKeyID, $keyId, $host, $signingKeyPem, resultContinuation);
    var l = function ($completion) {
      return i.h8d($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$Companion$generateKeyAsync$slambda($type, $config, resultContinuation) {
    this.d8e_1 = $type;
    this.e8e_1 = $config;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$Companion$generateKeyAsync$slambda).z8b = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$Companion$generateKeyAsync$slambda).ac = function ($completion) {
    return this.z8b($completion);
  };
  protoOf(OCIKeyRestApi$Companion$generateKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_getInstance_25().s6t(this.d8e_1, this.e8e_1, this);
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
  protoOf(OCIKeyRestApi$Companion$generateKeyAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$Companion$generateKeyAsync$slambda(this.d8e_1, this.e8e_1, completion);
  };
  function OCIKeyRestApi$Companion$generateKeyAsync$slambda_0($type, $config, resultContinuation) {
    var i = new OCIKeyRestApi$Companion$generateKeyAsync$slambda($type, $config, resultContinuation);
    var l = function ($completion) {
      return i.z8b($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getKeyVersionCOROUTINE$44(_this__u8e3s4, ocidKeyId, keyId, host, signingKey, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z85_1 = _this__u8e3s4;
    this.a86_1 = ocidKeyId;
    this.b86_1 = keyId;
    this.c86_1 = host;
    this.d86_1 = signingKey;
  }
  protoOf($getKeyVersionCOROUTINE$44).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.e86_1 = signingRequest(this.z85_1, 'GET', '/20180608/keys/' + this.a86_1, this.c86_1, null, this.d86_1);
            var tmp_0 = this;
            tmp_0.f86_1 = this.z85_1.r6t_1;
            var tmp_1 = this;
            tmp_1.g86_1 = 'https://' + this.c86_1 + '/20180608/keys/' + this.a86_1;
            this.h86_1 = this.f86_1;
            this.i86_1 = this.g86_1;
            var tmp_2 = this;
            tmp_2.j86_1 = this.h86_1;
            this.k86_1 = this.j86_1;
            var tmp_3 = this;
            tmp_3.l86_1 = this.k86_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.i86_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="host (request-target) date",keyId="' + this.b86_1 + '",algorithm="rsa-sha256",signature="' + this.e86_1 + '"');
            header(this_0, 'Host', this.c86_1);
            tmp_4.m86_1 = this_0;
            this.n86_1 = this.l86_1;
            this.o86_1 = this.m86_1;
            this.o86_1.j3k_1 = Companion_getInstance_0().c32_1;
            var tmp_5 = this;
            tmp_5.p86_1 = this.n86_1;
            var tmp_6 = this;
            tmp_6.q86_1 = this.o86_1;
            this.r86_1 = this.p86_1;
            this.s86_1 = this.q86_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.s86_1, this.r86_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.t86_1 = suspendResult;
            var tmp_7 = this;
            tmp_7.u86_1 = this.t86_1;
            this.v86_1 = this.u86_1;
            this.n9_1 = 2;
            var tmp_8 = this.v86_1.q3n();
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

            suspendResult = tmp_8.t3m(new TypeInfo(tmp_9, tmp_10), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp0_safe_receiver = ARGUMENT.af('currentKeyVersion');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
            return tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
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
  function $ociJsonDataBodyCOROUTINE$45(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e87_1 = _this__u8e3s4;
    this.f87_1 = _this__u8e3s4_0;
  }
  protoOf($ociJsonDataBodyCOROUTINE$45).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            var tmp_0 = this;
            tmp_0.g87_1 = OCIKeyRestApi$Companion$ociJsonDataBody$lambda(this.f87_1);
            if (!isSuccess(this.f87_1.p37())) {
              this.h87_1 = this.g87_1();
              this.i87_1 = this.f87_1.p37().toString();
              this.n9_1 = 7;
              suspendResult = bodyAsText(this.f87_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              continue $sm;
            }

          case 1:
            var tmp_1 = this;
            tmp_1.j87_1 = this.f87_1;
            this.k87_1 = this.j87_1;
            this.o9_1 = 3;
            var tmp_2 = this;
            tmp_2.m87_1 = Companion_instance_1;
            var tmp_3 = this;
            tmp_3.n87_1 = this.k87_1;
            this.o87_1 = this.n87_1;
            var tmp_4 = this;
            tmp_4.p87_1 = this.o87_1;
            this.q87_1 = this.p87_1;
            this.n9_1 = 2;
            var tmp_5 = this.q87_1.q3n();
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

            suspendResult = tmp_5.t3m(new TypeInfo(tmp_6, tmp_7), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_9 = this;
            tmp_9.r87_1 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp_10 = this;
            this.m87_1;
            var value = this.r87_1;
            tmp_10.l87_1 = _Result___init__impl__xyqfz8(value);
            this.o9_1 = 8;
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.o9_1 = 8;
            var tmp_11 = this.q9_1;
            if (tmp_11 instanceof Error) {
              this.s87_1 = this.q9_1;
              var tmp_12 = this;
              var exception = this.s87_1;
              tmp_12.l87_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            this.o9_1 = 8;
            this.t87_1 = this.l87_1;
            this.u87_1 = this.t87_1;
            this.v87_1 = Result__exceptionOrNull_impl_p6xea9(this.u87_1);
            if (this.v87_1 == null) {
              var tmp_13 = this;
              var tmp_14 = _Result___get_value__impl__bjfvqg(this.u87_1);
              tmp_13.w87_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
              this.n9_1 = 6;
              continue $sm;
            } else {
              var tmp_15 = this;
              tmp_15.x87_1 = this.v87_1;
              this.y87_1 = this.x87_1;
              this.n9_1 = 5;
              suspendResult = bodyAsText(this.f87_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            var bodyStr = suspendResult;
            var tmp_16 = this;
            throw IllegalArgumentException_init_$Create$(this.g87_1() + (bodyStr === '' ? 'empty response (instead of JSON data)' : 'invalid response: ' + bodyStr));
          case 6:
            return this.w87_1;
          case 7:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = 'non-success status: ' + this.i87_1 + ' - ' + ARGUMENT;
            var ARGUMENT_1 = this.h87_1 + ARGUMENT_0;
            throw IllegalStateException_init_$Create$(ARGUMENT_1);
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
  function $getKeysCOROUTINE$46(_this__u8e3s4, keyId, host, tenancyOcid, signingKey, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h88_1 = _this__u8e3s4;
    this.i88_1 = keyId;
    this.j88_1 = host;
    this.k88_1 = tenancyOcid;
    this.l88_1 = signingKey;
  }
  protoOf($getKeysCOROUTINE$46).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.m88_1 = signingRequest(this.h88_1, 'GET', '/20180608/keys?compartmentId=' + this.k88_1 + '&sortBy=TIMECREATED&sortOrder=DESC', this.j88_1, null, this.l88_1);
            var tmp_0 = this;
            tmp_0.n88_1 = this.h88_1.r6t_1;
            var tmp_1 = this;
            tmp_1.o88_1 = 'https://' + this.j88_1 + '/20180608/keys?compartmentId=' + this.k88_1 + '&sortBy=TIMECREATED&sortOrder=DESC';
            this.p88_1 = this.n88_1;
            this.q88_1 = this.o88_1;
            var tmp_2 = this;
            tmp_2.r88_1 = this.p88_1;
            this.s88_1 = this.r88_1;
            var tmp_3 = this;
            tmp_3.t88_1 = this.s88_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.q88_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="host (request-target) date",keyId="' + this.i88_1 + '",algorithm="rsa-sha256",signature="' + this.m88_1 + '"');
            header(this_0, 'Host', this.j88_1);
            tmp_4.u88_1 = this_0;
            this.v88_1 = this.t88_1;
            this.w88_1 = this.u88_1;
            this.w88_1.j3k_1 = Companion_getInstance_0().c32_1;
            var tmp_5 = this;
            tmp_5.x88_1 = this.v88_1;
            var tmp_6 = this;
            tmp_6.y88_1 = this.w88_1;
            this.z88_1 = this.x88_1;
            this.a89_1 = this.y88_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.a89_1, this.z88_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b89_1 = suspendResult;
            var tmp_7 = this;
            tmp_7.c89_1 = this.b89_1;
            this.d89_1 = this.c89_1;
            this.n9_1 = 2;
            var tmp_8 = this.d89_1.q3n();
            var tmp_9 = PrimitiveClasses_getInstance().md();
            var tmp_10;
            try {
              tmp_10 = createKType(PrimitiveClasses_getInstance().md(), arrayOf([createInvariantKTypeProjection(createKType(getKClass(JsonObject), arrayOf([]), false))]), false);
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

            suspendResult = tmp_8.t3m(new TypeInfo(tmp_9, tmp_10), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return (!(suspendResult == null) ? isArray(suspendResult) : false) ? suspendResult : THROW_CCE();
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
  function $getOCIPublicKeyCOROUTINE$47(_this__u8e3s4, OCIDKeyID, keyId, host, keyVersion, signingKeyPem, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m89_1 = _this__u8e3s4;
    this.n89_1 = OCIDKeyID;
    this.o89_1 = keyId;
    this.p89_1 = host;
    this.q89_1 = keyVersion;
    this.r89_1 = signingKeyPem;
  }
  protoOf($getOCIPublicKeyCOROUTINE$47).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            this.s89_1 = signingRequest(this.m89_1, 'GET', '/20180608/keys/' + this.n89_1 + '/keyVersions/' + this.q89_1, this.p89_1, null, this.r89_1);
            var tmp_0 = this;
            tmp_0.t89_1 = this.m89_1.r6t_1;
            var tmp_1 = this;
            tmp_1.u89_1 = 'https://' + this.p89_1 + '/20180608/keys/' + this.n89_1 + '/keyVersions/' + this.q89_1;
            this.v89_1 = this.t89_1;
            this.w89_1 = this.u89_1;
            var tmp_2 = this;
            tmp_2.x89_1 = this.v89_1;
            this.y89_1 = this.x89_1;
            var tmp_3 = this;
            tmp_3.z89_1 = this.y89_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.w89_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="host (request-target) date",keyId="' + this.o89_1 + '",algorithm="rsa-sha256",signature="' + this.s89_1 + '"');
            header(this_0, 'Host', this.p89_1);
            tmp_4.a8a_1 = this_0;
            this.b8a_1 = this.z89_1;
            this.c8a_1 = this.a8a_1;
            this.c8a_1.j3k_1 = Companion_getInstance_0().c32_1;
            var tmp_5 = this;
            tmp_5.d8a_1 = this.b8a_1;
            var tmp_6 = this;
            tmp_6.e8a_1 = this.c8a_1;
            this.f8a_1 = this.d8a_1;
            this.g8a_1 = this.e8a_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.g8a_1, this.f8a_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h8a_1 = suspendResult;
            var tmp_7 = this;
            tmp_7.i8a_1 = this.h8a_1;
            this.j8a_1 = this.i8a_1;
            this.n9_1 = 2;
            var tmp_8 = this.j8a_1.q3n();
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

            suspendResult = tmp_8.t3m(new TypeInfo(tmp_9, tmp_10), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp_12 = this;
            tmp_12.k8a_1 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            this.l8a_1 = this.k8a_1.af('publicKey');
            this.m8a_1 = this.l8a_1 == null ? null : get_jsonPrimitive(this.l8a_1);
            this.n8a_1 = this.m8a_1 == null ? null : this.m8a_1.q4u();
            var tmp_13 = this;
            var tmp_14;
            if (this.n8a_1 == null) {
              throw new KeyNotFoundException('No public key returned from OCI for key ID: ' + this.n89_1 + ' and version: ' + this.q89_1);
            } else {
              tmp_14 = this.n8a_1;
            }

            tmp_13.o8a_1 = tmp_14;
            this.n9_1 = 3;
            suspendResult = Companion_instance_31.w77(this.o8a_1, this);
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
            var this_1 = suspendResult.up_1;
            throwOnFailure(this_1);
            var tmp_15 = _Result___get_value__impl__bjfvqg(this_1);
            var publicKey = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
            return publicKey;
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
  function retrievePublicKey($this, $completion) {
    var tmp = new $retrievePublicKeyCOROUTINE$37($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function _get_ociSigningAlgorithm__to4ksy($this) {
    var tmp0 = $this.v8e_1;
    // Inline function 'kotlin.getValue' call
    ociSigningAlgorithm$factory();
    return tmp0.b1();
  }
  function Companion_19() {
    Companion_instance_24 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.q6t_1 = [null, null, null, lazy(tmp_0, OCIKeyRestApi$Companion$$childSerializers$_anonymous__ad0c0i), null];
    var tmp_1 = this;
    tmp_1.r6t_1 = HttpClient(OCIKeyRestApi$Companion$http$lambda);
  }
  protoOf(Companion_19).s6t = function (type, config, $completion) {
    return retry(VOID, VOID, OCIKeyRestApi$Companion$generateKey$slambda_0(type, config, null), $completion);
  };
  protoOf(Companion_19).u8d = function (OCIDKeyID, keyId, host, signingKeyPem, $completion) {
    return retry(VOID, VOID, OCIKeyRestApi$Companion$deleteKey$slambda_0(OCIDKeyID, host, signingKeyPem, keyId, null), $completion);
  };
  protoOf(Companion_19).x8e = function (OCIDKeyID, keyId, host, signingKeyPem) {
    var tmp = OCIKeyRestApi$Companion$deleteKeyAsync$slambda_0(OCIDKeyID, keyId, host, signingKeyPem, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_19).y8e = function (type, config) {
    var tmp = OCIKeyRestApi$Companion$generateKeyAsync$slambda_0(type, config, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_19).m4u = function () {
    return $serializer_getInstance_15();
  };
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_19();
    return Companion_instance_24;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('oci-rest-api', this, 5);
    tmp0_serialDesc.x2b('config', false);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('_publicKey', true);
    tmp0_serialDesc.x2b('_keyType', true);
    tmp0_serialDesc.x2b('vaultKeyId', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.z8e_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).a8f = function (encoder, value) {
    var tmp0_desc = this.z8e_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_25().q6t_1;
    tmp1_output.y25(tmp0_desc, 0, $serializer_getInstance_14(), value.config);
    tmp1_output.w25(tmp0_desc, 1, value.id);
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.s8e_1 == null)) {
      tmp1_output.a26(tmp0_desc, 2, StringSerializer_getInstance(), value.s8e_1);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.t8e_1 == null)) {
      tmp1_output.a26(tmp0_desc, 3, tmp2_cached[3].b1(), value.t8e_1);
    }
    if (tmp1_output.e26(tmp0_desc, 4) ? true : !(value.u8e_1 === value.config.tenancyOcid + '/' + value.config.userOcid + '/' + value.config.fingerprint)) {
      tmp1_output.w25(tmp0_desc, 4, value.u8e_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_15).v20 = function (encoder, value) {
    return this.a8f(encoder, value instanceof OCIKeyRestApi ? value : THROW_CCE());
  };
  protoOf($serializer_15).w20 = function (decoder) {
    var tmp0_desc = this.z8e_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp11_input = decoder.h24(tmp0_desc);
    var tmp12_cached = Companion_getInstance_25().q6t_1;
    if (tmp11_input.x24()) {
      tmp4_local0 = tmp11_input.t24(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp11_input.r24(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp11_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp11_input.v24(tmp0_desc, 3, tmp12_cached[3].b1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp11_input.r24(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp11_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp11_input.t24(tmp0_desc, 0, $serializer_getInstance_14(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp11_input.r24(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp11_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp11_input.v24(tmp0_desc, 3, tmp12_cached[3].b1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp11_input.r24(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp11_input.i24(tmp0_desc);
    return OCIKeyRestApi_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_15).u20 = function () {
    return this.z8e_1;
  };
  protoOf($serializer_15).m2c = function () {
    var tmp0_cached = Companion_getInstance_25().q6t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_14(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(tmp0_cached[3].b1()), StringSerializer_getInstance()];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function OCIKeyRestApi_init_$Init$(seen0, config, id, _publicKey, _keyType, vaultKeyId, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_15().z8e_1);
    }
    Key_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.config = config;
    $this.id = id;
    if (0 === (seen0 & 4))
      $this.s8e_1 = null;
    else
      $this.s8e_1 = _publicKey;
    if (0 === (seen0 & 8))
      $this.t8e_1 = null;
    else
      $this.t8e_1 = _keyType;
    if (0 === (seen0 & 16))
      $this.u8e_1 = $this.config.tenancyOcid + '/' + $this.config.userOcid + '/' + $this.config.fingerprint;
    else
      $this.u8e_1 = vaultKeyId;
    var tmp = $this;
    tmp.v8e_1 = lazy_0(OCIKeyRestApi$_init_$lambda_25kthr($this));
    $this.w8e_1 = null;
    return $this;
  }
  function OCIKeyRestApi_init_$Create$(seen0, config, id, _publicKey, _keyType, vaultKeyId, serializationConstructorMarker) {
    return OCIKeyRestApi_init_$Init$(seen0, config, id, _publicKey, _keyType, vaultKeyId, serializationConstructorMarker, objectCreate(protoOf(OCIKeyRestApi)));
  }
  function OCIKeyRestApi$ociSigningAlgorithm$delegate$lambda(this$0) {
    return function () {
      var tmp;
      switch (this$0.keyType.t2_1) {
        case 2:
          tmp = 'ECDSA_SHA_256';
          break;
        case 3:
          tmp = 'SHA_256_RSA_PKCS_PSS';
          break;
        default:
          throw new KeyTypeNotSupportedException(this$0.keyType.s2_1);
      }
      return tmp;
    };
  }
  function OCIKeyRestApi$signRaw$slambda($plaintext, this$0, resultContinuation) {
    this.j8f_1 = $plaintext;
    this.k8f_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$signRaw$slambda).r6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$signRaw$slambda).ac = function ($completion) {
    return this.r6q($completion);
  };
  protoOf(OCIKeyRestApi$signRaw$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.l8f_1 = encodeBase64(SHA256_init_$Create$().g6i(this.j8f_1));
            this.m8f_1 = (new JsonObject(mapOf([to('keyId', JsonPrimitive_0(this.k8f_1.id)), to('message', JsonPrimitive_0(this.l8f_1)), to('signingAlgorithm', JsonPrimitive_0(_get_ociSigningAlgorithm__to4ksy(this.k8f_1))), to('messageType', JsonPrimitive_0('DIGEST'))]))).toString();
            this.n8f_1 = signingRequest(Companion_getInstance_25(), 'POST', '/20180608/sign', this.k8f_1.config.cryptoEndpoint, this.m8f_1, this.k8f_1.config.signingKeyPem);
            this.o8f_1 = Companion_getInstance_25();
            var tmp_0 = this;
            tmp_0.p8f_1 = Companion_getInstance_25().r6t_1;
            var tmp_1 = this;
            tmp_1.q8f_1 = 'https://' + this.k8f_1.config.cryptoEndpoint + '/20180608/sign';
            this.r8f_1 = this.p8f_1;
            this.s8f_1 = this.q8f_1;
            var tmp_2 = this;
            tmp_2.t8f_1 = this.r8f_1;
            this.u8f_1 = this.t8f_1;
            var tmp_3 = this;
            tmp_3.v8f_1 = this.u8f_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.s8f_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="date (request-target) host content-length content-type x-content-sha256",keyId="' + this.k8f_1.u8e_1 + '",algorithm="rsa-sha256",signature="' + this.n8f_1 + '"');
            header(this_0, 'Host', get_host(this_0));
            header(this_0, 'x-content-sha256', calculateSHA256(Companion_getInstance_25(), this.m8f_1));
            var body = this.m8f_1;
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
              var tmp_5 = PrimitiveClasses_getInstance().nd();
              var tmp_6;
              try {
                tmp_6 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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
                var tmp_8 = PrimitiveClasses_getInstance().nd();
                var tmp_9;
                try {
                  tmp_9 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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

            tmp_4.w8f_1 = this_0;
            this.x8f_1 = this.v8f_1;
            this.y8f_1 = this.w8f_1;
            this.y8f_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_11 = this;
            tmp_11.z8f_1 = this.x8f_1;
            var tmp_12 = this;
            tmp_12.a8g_1 = this.y8f_1;
            this.b8g_1 = this.z8f_1;
            this.c8g_1 = this.a8g_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.c8g_1, this.b8g_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d8g_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = ociJsonDataBody(this.o8f_1, this.d8g_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.af('signature');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
            var response = tmp2_safe_receiver == null ? null : Base64Utils_getInstance().decodeFromBase64(tmp2_safe_receiver);
            var tmp_13;
            if (response == null) {
              throw new SigningException('No signature returned from OCI.');
            } else {
              tmp_13 = response;
            }

            return tmp_13;
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
  protoOf(OCIKeyRestApi$signRaw$slambda).ja = function (completion) {
    return new OCIKeyRestApi$signRaw$slambda(this.j8f_1, this.k8f_1, completion);
  };
  function OCIKeyRestApi$signRaw$slambda_0($plaintext, this$0, resultContinuation) {
    var i = new OCIKeyRestApi$signRaw$slambda($plaintext, this$0, resultContinuation);
    var l = function ($completion) {
      return i.r6q($completion);
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
    this.m8g_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$deleteKeyAsync$slambda).t6k = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$deleteKeyAsync$slambda).ac = function ($completion) {
    return this.t6k($completion);
  };
  protoOf(OCIKeyRestApi$deleteKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.m8g_1.u6k(this);
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
  protoOf(OCIKeyRestApi$deleteKeyAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$deleteKeyAsync$slambda(this.m8g_1, completion);
  };
  function OCIKeyRestApi$deleteKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$deleteKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.t6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.v8g_1 = this$0;
    this.w8g_1 = $plaintext;
    this.x8g_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$signJwsAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$signJwsAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(OCIKeyRestApi$signJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.v8g_1.h6l(this.w8g_1, this.x8g_1, this);
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
  protoOf(OCIKeyRestApi$signJwsAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$signJwsAsync$slambda(this.v8g_1, this.w8g_1, this.x8g_1, completion);
  };
  function OCIKeyRestApi$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new OCIKeyRestApi$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$signRawAsync$slambda(this$0, $plaintext, resultContinuation) {
    this.g8h_1 = this$0;
    this.h8h_1 = $plaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$signRawAsync$slambda).r6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$signRawAsync$slambda).ac = function ($completion) {
    return this.r6q($completion);
  };
  protoOf(OCIKeyRestApi$signRawAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.g8h_1.s7a(this.h8h_1, this);
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
  protoOf(OCIKeyRestApi$signRawAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$signRawAsync$slambda(this.g8h_1, this.h8h_1, completion);
  };
  function OCIKeyRestApi$signRawAsync$slambda_0(this$0, $plaintext, resultContinuation) {
    var i = new OCIKeyRestApi$signRawAsync$slambda(this$0, $plaintext, resultContinuation);
    var l = function ($completion) {
      return i.r6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.q8h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$getKeyIdAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$getKeyIdAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(OCIKeyRestApi$getKeyIdAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.q8h_1.d6m(this);
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
  protoOf(OCIKeyRestApi$getKeyIdAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$getKeyIdAsync$slambda(this.q8h_1, completion);
  };
  function OCIKeyRestApi$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$getPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.z8h_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$getPublicKeyAsync$slambda).x6m = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$getPublicKeyAsync$slambda).ac = function ($completion) {
    return this.x6m($completion);
  };
  protoOf(OCIKeyRestApi$getPublicKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.z8h_1.y6m(this);
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
  protoOf(OCIKeyRestApi$getPublicKeyAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$getPublicKeyAsync$slambda(this.z8h_1, completion);
  };
  function OCIKeyRestApi$getPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$getPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.x6m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$getMetaAsync$slambda(this$0, resultContinuation) {
    this.i8i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$getMetaAsync$slambda).j8i = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$getMetaAsync$slambda).ac = function ($completion) {
    return this.j8i($completion);
  };
  protoOf(OCIKeyRestApi$getMetaAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.i8i_1.k8i(this);
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
  protoOf(OCIKeyRestApi$getMetaAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$getMetaAsync$slambda(this.i8i_1, completion);
  };
  function OCIKeyRestApi$getMetaAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$getMetaAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.j8i($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.t8i_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$exportPEMAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$exportPEMAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(OCIKeyRestApi$exportPEMAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.t8i_1.t6n(this);
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
  protoOf(OCIKeyRestApi$exportPEMAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$exportPEMAsync$slambda(this.t8i_1, completion);
  };
  function OCIKeyRestApi$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.c8j_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$getThumbprintAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$getThumbprintAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(OCIKeyRestApi$getThumbprintAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.c8j_1.d6o(this);
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
  protoOf(OCIKeyRestApi$getThumbprintAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$getThumbprintAsync$slambda(this.c8j_1, completion);
  };
  function OCIKeyRestApi$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.l8j_1 = this$0;
    this.m8j_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$verifyJwsAsync$slambda).y6o = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(OCIKeyRestApi$verifyJwsAsync$slambda).ac = function ($completion) {
    return this.y6o($completion);
  };
  protoOf(OCIKeyRestApi$verifyJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.l8j_1.z6o(this.m8j_1, this);
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
  protoOf(OCIKeyRestApi$verifyJwsAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$verifyJwsAsync$slambda(this.l8j_1, this.m8j_1, completion);
  };
  function OCIKeyRestApi$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new OCIKeyRestApi$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.y6o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.v8j_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$exportJWKAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$exportJWKAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(OCIKeyRestApi$exportJWKAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.v8j_1.j6p(this);
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
  protoOf(OCIKeyRestApi$exportJWKAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$exportJWKAsync$slambda(this.v8j_1, completion);
  };
  function OCIKeyRestApi$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.e8k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$exportJWKObjectAsync$slambda).t6p = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$exportJWKObjectAsync$slambda).ac = function ($completion) {
    return this.t6p($completion);
  };
  protoOf(OCIKeyRestApi$exportJWKObjectAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.e8k_1.u6p(this);
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
  protoOf(OCIKeyRestApi$exportJWKObjectAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$exportJWKObjectAsync$slambda(this.e8k_1, completion);
  };
  function OCIKeyRestApi$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.t6p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.n8k_1 = this$0;
    this.o8k_1 = $signed;
    this.p8k_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$verifyRawAsync$slambda).g6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(OCIKeyRestApi$verifyRawAsync$slambda).ac = function ($completion) {
    return this.g6q($completion);
  };
  protoOf(OCIKeyRestApi$verifyRawAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.n8k_1.h6q(this.o8k_1, this.p8k_1, this);
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
  protoOf(OCIKeyRestApi$verifyRawAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$verifyRawAsync$slambda(this.n8k_1, this.o8k_1, this.p8k_1, completion);
  };
  function OCIKeyRestApi$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new OCIKeyRestApi$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.g6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.y8k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda).r6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda).ac = function ($completion) {
    return this.r6q($completion);
  };
  protoOf(OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.y8k_1.s6q(this);
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
  protoOf(OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda).ja = function (completion) {
    return new OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda(this.y8k_1, completion);
  };
  function OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function OCIKeyRestApi$_init_$lambda_25kthr(this$0) {
    return function () {
      var tmp;
      switch (this$0.keyType.t2_1) {
        case 2:
          tmp = 'ECDSA_SHA_256';
          break;
        case 3:
          tmp = 'SHA_256_RSA_PKCS_PSS';
          break;
        default:
          throw new KeyTypeNotSupportedException(this$0.keyType.s2_1);
      }
      return tmp;
    };
  }
  function $retrievePublicKeyCOROUTINE$37(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n8e_1 = _this__u8e3s4;
  }
  protoOf($retrievePublicKeyCOROUTINE$37).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = getKeys(Companion_getInstance_25(), this.n8e_1.u8e_1, this.n8e_1.config.managementEndpoint, this.n8e_1.config.tenancyOcid, this.n8e_1.config.signingKeyPem, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o8e_1 = suspendResult;
            var tmp_0 = this;
            var tmp0 = this.o8e_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.length;
              while (inductionVariable < last) {
                var element = tmp0[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var tmp0_safe_receiver = element.af('id');
                var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
                if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u()) === this.n8e_1.id) {
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
              throw new KeyNotFoundException(this.n8e_1.id);
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.p8e_1 = tmp_1;
            this.n9_1 = 2;
            suspendResult = getKeyVersion(Companion_getInstance_25(), this.n8e_1.id, this.n8e_1.u8e_1, this.n8e_1.config.managementEndpoint, this.n8e_1.config.signingKeyPem, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.q8e_1 = suspendResult;
            var tmp_2 = this;
            var tmp1_safe_receiver_0 = this.p8e_1.af('id');
            var tmp2_safe_receiver = tmp1_safe_receiver_0 == null ? null : get_jsonPrimitive(tmp1_safe_receiver_0);
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.q4u();
            var tmp_3;
            if (tmp3_elvis_lhs == null) {
              throw new KeyNotFoundException(this.n8e_1.id);
            } else {
              tmp_3 = tmp3_elvis_lhs;
            }

            tmp_2.r8e_1 = tmp_3;
            this.n9_1 = 3;
            suspendResult = getOCIPublicKey(Companion_getInstance_25(), this.r8e_1, this.n8e_1.u8e_1, this.n8e_1.config.managementEndpoint, this.q8e_1, this.n8e_1.config.signingKeyPem, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return suspendResult;
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
  function $getKeyIdCOROUTINE$38(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h8l_1 = _this__u8e3s4;
  }
  protoOf($getKeyIdCOROUTINE$38).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.h8l_1.y6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i8l_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.i8l_1.d6m(this);
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
  protoOf($getKeyIdCOROUTINE$38)['<set-state>'] = protoOf($getKeyIdCOROUTINE$38).u9;
  protoOf($getKeyIdCOROUTINE$38)['<get-state>'] = protoOf($getKeyIdCOROUTINE$38).v9;
  protoOf($getKeyIdCOROUTINE$38)['<set-exceptionState>'] = protoOf($getKeyIdCOROUTINE$38).w9;
  protoOf($getKeyIdCOROUTINE$38)['<get-exceptionState>'] = protoOf($getKeyIdCOROUTINE$38).x9;
  protoOf($getKeyIdCOROUTINE$38)['<set-result>'] = protoOf($getKeyIdCOROUTINE$38).y9;
  protoOf($getKeyIdCOROUTINE$38)['<get-result>'] = protoOf($getKeyIdCOROUTINE$38).z9;
  protoOf($getKeyIdCOROUTINE$38)['<set-exception>'] = protoOf($getKeyIdCOROUTINE$38).aa;
  protoOf($getKeyIdCOROUTINE$38)['<get-exception>'] = protoOf($getKeyIdCOROUTINE$38).ba;
  protoOf($getKeyIdCOROUTINE$38)['<set-finallyPath>'] = protoOf($getKeyIdCOROUTINE$38).ca;
  protoOf($getKeyIdCOROUTINE$38)['<get-finallyPath>'] = protoOf($getKeyIdCOROUTINE$38).da;
  protoOf($getKeyIdCOROUTINE$38)['<get-context>'] = protoOf($getKeyIdCOROUTINE$38).t9;
  function $signJwsCOROUTINE$39(_this__u8e3s4, plaintext, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r8l_1 = _this__u8e3s4;
    this.s8l_1 = plaintext;
    this.t8l_1 = headers;
  }
  protoOf($signJwsCOROUTINE$39).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            var this_0 = HashMap_init_$Create$_0(this.t8l_1);
            this_0.p2('alg', JsonUtils_getInstance().toJsonElement(jwsSigningAlgorithm(this.r8l_1.keyType)));
            tmp_0.u8l_1 = this_0;
            var tmp_1 = this;
            var tmp_2 = Base64Utils_getInstance();
            var tmp2 = Default_getInstance();
            var value = this.u8l_1;
            var this_1 = tmp2.w24();
            var this_2 = serializer(this_1, createKType(getKClass(HashMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
            tmp_1.v8l_1 = tmp_2.encodeToBase64Url(encodeToByteArray(tmp2.x21(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value)));
            this.w8l_1 = Base64Utils_getInstance().encodeToBase64Url(this.s8l_1);
            this.n9_1 = 1;
            suspendResult = this.r8l_1.s7a(encodeToByteArray(this.v8l_1 + '.' + this.w8l_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var rawSignature = suspendResult;
            if (listOf([KeyType_secp256r1_getInstance(), KeyType_secp256k1_getInstance()]).w(this.r8l_1.keyType)) {
              var tmp_3 = get_log();
              tmp_3.l6g(OCIKeyRestApi$signJws$lambda);
              rawSignature = EccUtils_instance.h6k(rawSignature);
            } else {
              var tmp_4 = get_log();
              tmp_4.l6g(OCIKeyRestApi$signJws$lambda_0);
            }

            var encodedSignature = Base64Utils_getInstance().encodeToBase64Url(rawSignature);
            var jws = this.v8l_1 + '.' + this.w8l_1 + '.' + encodedSignature;
            return jws;
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
  protoOf($signJwsCOROUTINE$39)['<set-state>'] = protoOf($signJwsCOROUTINE$39).u9;
  protoOf($signJwsCOROUTINE$39)['<get-state>'] = protoOf($signJwsCOROUTINE$39).v9;
  protoOf($signJwsCOROUTINE$39)['<set-exceptionState>'] = protoOf($signJwsCOROUTINE$39).w9;
  protoOf($signJwsCOROUTINE$39)['<get-exceptionState>'] = protoOf($signJwsCOROUTINE$39).x9;
  protoOf($signJwsCOROUTINE$39)['<set-result>'] = protoOf($signJwsCOROUTINE$39).y9;
  protoOf($signJwsCOROUTINE$39)['<get-result>'] = protoOf($signJwsCOROUTINE$39).z9;
  protoOf($signJwsCOROUTINE$39)['<set-exception>'] = protoOf($signJwsCOROUTINE$39).aa;
  protoOf($signJwsCOROUTINE$39)['<get-exception>'] = protoOf($signJwsCOROUTINE$39).ba;
  protoOf($signJwsCOROUTINE$39)['<set-finallyPath>'] = protoOf($signJwsCOROUTINE$39).ca;
  protoOf($signJwsCOROUTINE$39)['<get-finallyPath>'] = protoOf($signJwsCOROUTINE$39).da;
  protoOf($signJwsCOROUTINE$39)['<get-context>'] = protoOf($signJwsCOROUTINE$39).t9;
  function $verifyRawCOROUTINE$40(_this__u8e3s4, signed, detachedPlaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f8m_1 = _this__u8e3s4;
    this.g8m_1 = signed;
    this.h8m_1 = detachedPlaintext;
  }
  protoOf($verifyRawCOROUTINE$40).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (!!(this.h8m_1 == null)) {
              var message = 'An detached plaintext is needed.';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }

            this.i8m_1 = (new JsonObject(mapOf([to('keyId', JsonPrimitive_0(this.f8m_1.id)), to('message', JsonPrimitive_0(encodeBase64(this.h8m_1))), to('signature', JsonPrimitive_0(encodeBase64(this.g8m_1))), to('signingAlgorithm', JsonPrimitive_0(_get_ociSigningAlgorithm__to4ksy(this.f8m_1)))]))).toString();
            this.j8m_1 = signingRequest(Companion_getInstance_25(), 'POST', '/20180608/verify', this.f8m_1.config.cryptoEndpoint, this.i8m_1, this.f8m_1.config.signingKeyPem);
            this.k8m_1 = Companion_getInstance_25();
            var tmp_0 = this;
            tmp_0.l8m_1 = Companion_getInstance_25().r6t_1;
            var tmp_1 = this;
            tmp_1.m8m_1 = 'https://' + this.f8m_1.config.cryptoEndpoint + '/20180608/verify';
            this.n8m_1 = this.l8m_1;
            this.o8m_1 = this.m8m_1;
            var tmp_2 = this;
            tmp_2.p8m_1 = this.n8m_1;
            this.q8m_1 = this.p8m_1;
            var tmp_3 = this;
            tmp_3.r8m_1 = this.q8m_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.o8m_1);
            header(this_0, 'Authorization', 'Signature version="1",headers="date (request-target) host content-length content-type x-content-sha256",keyId="' + this.f8m_1.u8e_1 + '",algorithm="rsa-sha256",signature="' + this.j8m_1 + '"');
            header(this_0, 'Host', get_host(this_0));
            header(this_0, 'x-content-sha256', calculateSHA256(Companion_getInstance_25(), this.i8m_1));
            var body = this.i8m_1;
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
              var tmp_5 = PrimitiveClasses_getInstance().nd();
              var tmp_6;
              try {
                tmp_6 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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
                var tmp_8 = PrimitiveClasses_getInstance().nd();
                var tmp_9;
                try {
                  tmp_9 = createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false);
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

            tmp_4.s8m_1 = this_0;
            this.t8m_1 = this.r8m_1;
            this.u8m_1 = this.s8m_1;
            this.u8m_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_11 = this;
            tmp_11.v8m_1 = this.t8m_1;
            var tmp_12 = this;
            tmp_12.w8m_1 = this.u8m_1;
            this.x8m_1 = this.v8m_1;
            this.y8m_1 = this.w8m_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.y8m_1, this.x8m_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z8m_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = ociJsonDataBody(this.k8m_1, this.z8m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.af('isSignatureValid');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : get_boolean(tmp1_safe_receiver);
            var response = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
            var tmp_13;
            if (response) {
              var value = this.h8m_1;
              tmp_13 = _Result___init__impl__xyqfz8(value);
            } else {
              var exception = new VerificationException('Signature is not valid');
              tmp_13 = _Result___init__impl__xyqfz8(createFailure(exception));
            }

            return new Result(tmp_13);
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
  protoOf($verifyRawCOROUTINE$40)['<set-state>'] = protoOf($verifyRawCOROUTINE$40).u9;
  protoOf($verifyRawCOROUTINE$40)['<get-state>'] = protoOf($verifyRawCOROUTINE$40).v9;
  protoOf($verifyRawCOROUTINE$40)['<set-exceptionState>'] = protoOf($verifyRawCOROUTINE$40).w9;
  protoOf($verifyRawCOROUTINE$40)['<get-exceptionState>'] = protoOf($verifyRawCOROUTINE$40).x9;
  protoOf($verifyRawCOROUTINE$40)['<set-result>'] = protoOf($verifyRawCOROUTINE$40).y9;
  protoOf($verifyRawCOROUTINE$40)['<get-result>'] = protoOf($verifyRawCOROUTINE$40).z9;
  protoOf($verifyRawCOROUTINE$40)['<set-exception>'] = protoOf($verifyRawCOROUTINE$40).aa;
  protoOf($verifyRawCOROUTINE$40)['<get-exception>'] = protoOf($verifyRawCOROUTINE$40).ba;
  protoOf($verifyRawCOROUTINE$40)['<set-finallyPath>'] = protoOf($verifyRawCOROUTINE$40).ca;
  protoOf($verifyRawCOROUTINE$40)['<get-finallyPath>'] = protoOf($verifyRawCOROUTINE$40).da;
  protoOf($verifyRawCOROUTINE$40)['<get-context>'] = protoOf($verifyRawCOROUTINE$40).t9;
  function $verifyJwsCOROUTINE$41(_this__u8e3s4, signedJws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i8n_1 = _this__u8e3s4;
    this.j8n_1 = signedJws;
  }
  protoOf($verifyJwsCOROUTINE$41).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.k8n_1 = JwsUtils_instance.decodeJws(this.j8n_1, true);
            this.l8n_1 = this.k8n_1.dc();
            this.m8n_1 = this.k8n_1.ec();
            this.n8n_1 = this.k8n_1.yp();
            this.o8n_1 = toMap(this.l8n_1);
            var tmp0_safe_receiver = this.o8n_1.m2('alg');
            if (tmp0_safe_receiver == null)
              null;
            else {
              var algValue = get_jsonPrimitive(tmp0_safe_receiver).q4u();
              if (!(algValue === JwsUtils_instance.jwsAlg(this.i8n_1.keyType))) {
                var message = 'Invalid key algorithm for JWS: JWS has ' + algValue + ', key is ' + JwsUtils_instance.jwsAlg(this.i8n_1.keyType) + '!';
                throw IllegalStateException_init_$Create$(toString_0(message));
              }
            }

            this.p8n_1 = encodeToByteArray(this.l8n_1.toString() + '.' + this.m8n_1.toString());
            this.n9_1 = 1;
            suspendResult = this.i8n_1.h6q(Base64Utils_getInstance().decodeFromBase64Url(this.n8n_1), this.p8n_1, this);
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
              var verifiedPayload = decodeToString(Base64Utils_getInstance().decodeFromBase64Url(substringAfter(decodeToString(it), '.')));
              var value = Default_getInstance().h4s(verifiedPayload);
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
  protoOf($verifyJwsCOROUTINE$41)['<set-state>'] = protoOf($verifyJwsCOROUTINE$41).u9;
  protoOf($verifyJwsCOROUTINE$41)['<get-state>'] = protoOf($verifyJwsCOROUTINE$41).v9;
  protoOf($verifyJwsCOROUTINE$41)['<set-exceptionState>'] = protoOf($verifyJwsCOROUTINE$41).w9;
  protoOf($verifyJwsCOROUTINE$41)['<get-exceptionState>'] = protoOf($verifyJwsCOROUTINE$41).x9;
  protoOf($verifyJwsCOROUTINE$41)['<set-result>'] = protoOf($verifyJwsCOROUTINE$41).y9;
  protoOf($verifyJwsCOROUTINE$41)['<get-result>'] = protoOf($verifyJwsCOROUTINE$41).z9;
  protoOf($verifyJwsCOROUTINE$41)['<set-exception>'] = protoOf($verifyJwsCOROUTINE$41).aa;
  protoOf($verifyJwsCOROUTINE$41)['<get-exception>'] = protoOf($verifyJwsCOROUTINE$41).ba;
  protoOf($verifyJwsCOROUTINE$41)['<set-finallyPath>'] = protoOf($verifyJwsCOROUTINE$41).ca;
  protoOf($verifyJwsCOROUTINE$41)['<get-finallyPath>'] = protoOf($verifyJwsCOROUTINE$41).da;
  protoOf($verifyJwsCOROUTINE$41)['<get-context>'] = protoOf($verifyJwsCOROUTINE$41).t9;
  function $getPublicKeyCOROUTINE$42(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y8n_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyCOROUTINE$42).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.z8n_1 = this.y8n_1.w8e_1;
            if (this.z8n_1 == null) {
              if (!(this.y8n_1.s8e_1 == null)) {
                var tmp_0 = this;
                tmp_0.c8o_1 = ensureNotNull(this.y8n_1.s8e_1);
                this.d8o_1 = this.c8o_1;
                var tmp_1 = this;
                tmp_1.e8o_1 = this.d8o_1;
                this.f8o_1 = this.e8o_1;
                this.n9_1 = 2;
                suspendResult = Companion_instance_31.t7i(this.f8o_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                this.n9_1 = 3;
                continue $sm;
              } else {
                this.n9_1 = 1;
                suspendResult = retrievePublicKey(this.y8n_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.a8o_1 = this.z8n_1;
              this.n9_1 = 5;
              continue $sm;
            }

          case 1:
            this.b8o_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var tmp_2 = this;
            var this_0 = suspendResult.up_1;
            throwOnFailure(this_0);
            var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
            tmp_2.b8o_1 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
            this.n9_1 = 4;
            continue $sm;
          case 4:
            var tmp_4 = this;
            var this_1 = this.b8o_1;
            this.y8n_1.w8e_1 = this_1;
            tmp_4.a8o_1 = this_1;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            return this.a8o_1;
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
  protoOf($getPublicKeyCOROUTINE$42)['<set-state>'] = protoOf($getPublicKeyCOROUTINE$42).u9;
  protoOf($getPublicKeyCOROUTINE$42)['<get-state>'] = protoOf($getPublicKeyCOROUTINE$42).v9;
  protoOf($getPublicKeyCOROUTINE$42)['<set-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$42).w9;
  protoOf($getPublicKeyCOROUTINE$42)['<get-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$42).x9;
  protoOf($getPublicKeyCOROUTINE$42)['<set-result>'] = protoOf($getPublicKeyCOROUTINE$42).y9;
  protoOf($getPublicKeyCOROUTINE$42)['<get-result>'] = protoOf($getPublicKeyCOROUTINE$42).z9;
  protoOf($getPublicKeyCOROUTINE$42)['<set-exception>'] = protoOf($getPublicKeyCOROUTINE$42).aa;
  protoOf($getPublicKeyCOROUTINE$42)['<get-exception>'] = protoOf($getPublicKeyCOROUTINE$42).ba;
  protoOf($getPublicKeyCOROUTINE$42)['<set-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$42).ca;
  protoOf($getPublicKeyCOROUTINE$42)['<get-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$42).da;
  protoOf($getPublicKeyCOROUTINE$42)['<get-context>'] = protoOf($getPublicKeyCOROUTINE$42).t9;
  function $getMetaCOROUTINE$43(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o8o_1 = _this__u8e3s4;
  }
  protoOf($getMetaCOROUTINE$43).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.p8o_1 = this.o8o_1.id;
            this.n9_1 = 1;
            suspendResult = getKeyVersion(Companion_getInstance_25(), this.o8o_1.id, this.o8o_1.u8e_1, this.o8o_1.config.managementEndpoint, this.o8o_1.config.signingKeyPem, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new OciKeyMeta(this.p8o_1, ARGUMENT);
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
  protoOf($getMetaCOROUTINE$43)['<set-state>'] = protoOf($getMetaCOROUTINE$43).u9;
  protoOf($getMetaCOROUTINE$43)['<get-state>'] = protoOf($getMetaCOROUTINE$43).v9;
  protoOf($getMetaCOROUTINE$43)['<set-exceptionState>'] = protoOf($getMetaCOROUTINE$43).w9;
  protoOf($getMetaCOROUTINE$43)['<get-exceptionState>'] = protoOf($getMetaCOROUTINE$43).x9;
  protoOf($getMetaCOROUTINE$43)['<set-result>'] = protoOf($getMetaCOROUTINE$43).y9;
  protoOf($getMetaCOROUTINE$43)['<get-result>'] = protoOf($getMetaCOROUTINE$43).z9;
  protoOf($getMetaCOROUTINE$43)['<set-exception>'] = protoOf($getMetaCOROUTINE$43).aa;
  protoOf($getMetaCOROUTINE$43)['<get-exception>'] = protoOf($getMetaCOROUTINE$43).ba;
  protoOf($getMetaCOROUTINE$43)['<set-finallyPath>'] = protoOf($getMetaCOROUTINE$43).ca;
  protoOf($getMetaCOROUTINE$43)['<get-finallyPath>'] = protoOf($getMetaCOROUTINE$43).da;
  protoOf($getMetaCOROUTINE$43)['<get-context>'] = protoOf($getMetaCOROUTINE$43).t9;
  function OCIKeyRestApi(config, id, _publicKey, _keyType) {
    Companion_getInstance_25();
    _publicKey = _publicKey === VOID ? null : _publicKey;
    _keyType = _keyType === VOID ? null : _keyType;
    Key.call(this);
    this.config = config;
    this.id = id;
    this.s8e_1 = _publicKey;
    this.t8e_1 = _keyType;
    this.u8e_1 = this.config.tenancyOcid + '/' + this.config.userOcid + '/' + this.config.fingerprint;
    var tmp = this;
    tmp.v8e_1 = lazy_0(OCIKeyRestApi$ociSigningAlgorithm$delegate$lambda(this));
    this.w8e_1 = null;
  }
  protoOf(OCIKeyRestApi).o3k = function () {
    return this.config;
  };
  protoOf(OCIKeyRestApi).x6b = function () {
    return this.id;
  };
  protoOf(OCIKeyRestApi).d7k = function (value) {
    this.t8e_1 = value;
  };
  protoOf(OCIKeyRestApi).h6r = function () {
    return ensureNotNull(this.t8e_1);
  };
  protoOf(OCIKeyRestApi).i6r = function () {
    return false;
  };
  protoOf(OCIKeyRestApi).toString = function () {
    return '[OCI ' + this.keyType.s2_1 + ' key @ ' + this.config.tenancyOcid + ']';
  };
  protoOf(OCIKeyRestApi).d6m = function ($completion) {
    var tmp = new $getKeyIdCOROUTINE$38(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi).d6o = function ($completion) {
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(OCIKeyRestApi).j6p = function ($completion) {
    throw new NotImplementedError('JWK export is not available for remote keys.');
  };
  protoOf(OCIKeyRestApi).u6p = function ($completion) {
    return get_jsonObject(Default_getInstance().h4s(ensureNotNull(this.s8e_1)));
  };
  protoOf(OCIKeyRestApi).t6n = function ($completion) {
    throw new NotImplementedError('PEM export is not available for remote keys.');
  };
  protoOf(OCIKeyRestApi).s7a = function (plaintext, $completion) {
    return retry(VOID, VOID, OCIKeyRestApi$signRaw$slambda_0(plaintext, this, null), $completion);
  };
  protoOf(OCIKeyRestApi).t6l = function (plaintext, $completion) {
    return this.s7a(plaintext, $completion);
  };
  protoOf(OCIKeyRestApi).h6l = function (plaintext, headers, $completion) {
    var tmp = new $signJwsCOROUTINE$39(this, plaintext, headers, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi).h6q = function (signed, detachedPlaintext, $completion) {
    var tmp = new $verifyRawCOROUTINE$40(this, signed, detachedPlaintext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(OCIKeyRestApi).z6o = function (signedJws, $completion) {
    var tmp = new $verifyJwsCOROUTINE$41(this, signedJws, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(OCIKeyRestApi).y6m = function ($completion) {
    var tmp = new $getPublicKeyCOROUTINE$42(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi).s6q = function ($completion) {
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(OCIKeyRestApi).k8i = function ($completion) {
    var tmp = new $getMetaCOROUTINE$43(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(OCIKeyRestApi).j6n = function ($completion) {
    return this.k8i($completion);
  };
  protoOf(OCIKeyRestApi).u6k = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(OCIKeyRestApi).j6r = function () {
    var tmp = OCIKeyRestApi$deleteKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).k6r = function (plaintext, headers) {
    var tmp = OCIKeyRestApi$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).l6r = function (plaintext) {
    var tmp = OCIKeyRestApi$signRawAsync$slambda_0(this, plaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).m6r = function () {
    var tmp = OCIKeyRestApi$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).o6r = function () {
    var tmp = OCIKeyRestApi$getPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).p6r = function () {
    var tmp = OCIKeyRestApi$getMetaAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).q6r = function () {
    var tmp = OCIKeyRestApi$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).r6r = function () {
    var tmp = OCIKeyRestApi$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).t6r = function (signedJws) {
    var tmp = OCIKeyRestApi$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).u6r = function () {
    var tmp = OCIKeyRestApi$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).v6r = function () {
    var tmp = OCIKeyRestApi$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).w6r = function (signed, detachedPlaintext) {
    var tmp = OCIKeyRestApi$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(OCIKeyRestApi).x6r = function () {
    var tmp = OCIKeyRestApi$getPublicKeyRepresentationAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function retry(retriesLeft, currentTry, block, $completion) {
    retriesLeft = retriesLeft === VOID ? 3 : retriesLeft;
    currentTry = currentTry === VOID ? 1 : currentTry;
    var tmp = new $retryCOROUTINE$48(retriesLeft, currentTry, block, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function log$lambda() {
    _init_properties_OCIKeyRestApi_kt__pktr62();
    return Unit_instance;
  }
  function $retryCOROUTINE$48(retriesLeft, currentTry, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y8o_1 = retriesLeft;
    this.z8o_1 = currentTry;
    this.a8p_1 = block;
  }
  protoOf($retryCOROUTINE$48).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.c8p_1 = Companion_instance_1;
            this.n9_1 = 1;
            suspendResult = this.a8p_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.d8p_1 = suspendResult;
            var tmp_1 = this;
            this.c8p_1;
            var value = this.d8p_1;
            tmp_1.b8p_1 = _Result___init__impl__xyqfz8(value);
            this.o9_1 = 7;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.o9_1 = 7;
            var tmp_2 = this.q9_1;
            if (tmp_2 instanceof Error) {
              this.e8p_1 = this.q9_1;
              var tmp_3 = this;
              var exception = this.e8p_1;
              tmp_3.b8p_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 3;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            this.o9_1 = 7;
            this.f8p_1 = this.b8p_1;
            this.g8p_1 = this.f8p_1;
            this.h8p_1 = Result__exceptionOrNull_impl_p6xea9(this.g8p_1);
            if (this.h8p_1 == null) {
              var tmp_4 = this;
              var tmp_5 = _Result___get_value__impl__bjfvqg(this.g8p_1);
              tmp_4.i8p_1 = (tmp_5 == null ? true : !(tmp_5 == null)) ? tmp_5 : THROW_CCE();
              this.n9_1 = 6;
              continue $sm;
            } else {
              var tmp_6 = this;
              tmp_6.j8p_1 = this.h8p_1;
              this.k8p_1 = this.j8p_1;
              if (this.y8o_1 <= 0) {
                var tmp_7 = this;
                throw IllegalStateException_init_$Create$_0('Failed after ' + this.z8o_1 + ' retries: ' + this.k8p_1.message, this.k8p_1);
              } else {
                this.n9_1 = 4;
                suspendResult = retry(this.y8o_1 - 1 | 0, this.z8o_1 + 1 | 0, this.a8p_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

          case 4:
            this.l8p_1 = suspendResult;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.i8p_1 = this.l8p_1;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            return this.i8p_1;
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
      log = tmp.w6g(log$lambda);
    }
  }
  function TSEAuth$Companion$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.p3l(tmp, TSEAuth$Companion$http$lambda$lambda);
    defaultRequest($this$HttpClient, TSEAuth$Companion$http$lambda$lambda_0);
    var tmp_0 = get_Logging();
    $this$HttpClient.p3l(tmp_0, TSEAuth$Companion$http$lambda$lambda_1);
    return Unit_instance;
  }
  function TSEAuth$Companion$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function TSEAuth$Companion$http$lambda$lambda_0($this$defaultRequest) {
    header($this$defaultRequest, HttpHeaders_getInstance().q2y_1, Application_getInstance().y2v_1);
    return Unit_instance;
  }
  function TSEAuth$Companion$http$lambda$lambda_1($this$install) {
    $this$install.o5g(get_DEFAULT(Companion_instance_2));
    $this$install.n5g_1 = LogLevel_ALL_getInstance();
    return Unit_instance;
  }
  function Companion_20() {
    Companion_instance_25 = this;
    var tmp = this;
    tmp.m8p_1 = HttpClient(TSEAuth$Companion$http$lambda);
    var tmp_0 = this;
    var tmp_1 = Companion_instance_3.i6d();
    // Inline function 'kotlin.time.Companion.hours' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(24, DurationUnit_HOURS_getInstance());
    tmp_0.n8p_1 = tmp_1.p6d(tmp$ret$0).x2x();
  }
  protoOf(Companion_20).m4u = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_25;
  function Companion_getInstance_26() {
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
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function checkNoErrors($this, json) {
    var tmp0_safe_receiver = json.af('errors');
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
        var tmp$ret$0 = get_jsonPrimitive(item).q4u();
        destination.n(tmp$ret$0);
      }
      throw new LoginException(destination);
    }
    return tmp;
  }
  function loginAppRole($this, server, $completion) {
    var tmp = new $loginAppRoleCOROUTINE$50($this, server, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function loginUserPass($this, server, $completion) {
    var tmp = new $loginUserPassCOROUTINE$51($this, server, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function $serializer_16() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.tse.TSEAuth', this, 6);
    tmp0_serialDesc.x2b('accessKey', true);
    tmp0_serialDesc.x2b('roleId', true);
    tmp0_serialDesc.x2b('secretId', true);
    tmp0_serialDesc.x2b('userpassPath', true);
    tmp0_serialDesc.x2b('username', true);
    tmp0_serialDesc.x2b('password', true);
    this.y8r_1 = tmp0_serialDesc;
  }
  protoOf($serializer_16).z8r = function (encoder, value) {
    var tmp0_desc = this.y8r_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !(value.accessKey == null)) {
      tmp1_output.a26(tmp0_desc, 0, StringSerializer_getInstance(), value.accessKey);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.roleId == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value.roleId);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.secretId == null)) {
      tmp1_output.a26(tmp0_desc, 2, StringSerializer_getInstance(), value.secretId);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.userpassPath === 'userpass')) {
      tmp1_output.w25(tmp0_desc, 3, value.userpassPath);
    }
    if (tmp1_output.e26(tmp0_desc, 4) ? true : !(value.username == null)) {
      tmp1_output.a26(tmp0_desc, 4, StringSerializer_getInstance(), value.username);
    }
    if (tmp1_output.e26(tmp0_desc, 5) ? true : !(value.password == null)) {
      tmp1_output.a26(tmp0_desc, 5, StringSerializer_getInstance(), value.password);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_16).v20 = function (encoder, value) {
    return this.z8r(encoder, value instanceof TSEAuth ? value : THROW_CCE());
  };
  protoOf($serializer_16).w20 = function (decoder) {
    var tmp0_desc = this.y8r_1;
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
    if (tmp10_input.x24()) {
      tmp4_local0 = tmp10_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp10_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp10_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp10_input.r24(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp10_input.v24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp10_input.v24(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp10_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp10_input.v24(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
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
            tmp7_local3 = tmp10_input.r24(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp10_input.v24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp10_input.v24(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp10_input.i24(tmp0_desc);
    return TSEAuth_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, null);
  };
  protoOf($serializer_16).u20 = function () {
    return this.y8r_1;
  };
  protoOf($serializer_16).m2c = function () {
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_16().y8r_1);
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
    this.i8s_1 = this$0;
    this.j8s_1 = $server;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEAuth$getCachedLogin$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEAuth$getCachedLogin$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(TSEAuth$getCachedLogin$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.i8s_1.k8s(this.j8s_1, this);
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
  protoOf(TSEAuth$getCachedLogin$slambda).ja = function (completion) {
    return new TSEAuth$getCachedLogin$slambda(this.i8s_1, this.j8s_1, completion);
  };
  function TSEAuth$getCachedLogin$slambda_0(this$0, $server, resultContinuation) {
    var i = new TSEAuth$getCachedLogin$slambda(this$0, $server, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEAuth$getLoginTokenAsync$slambda(this$0, $server, resultContinuation) {
    this.t8s_1 = this$0;
    this.u8s_1 = $server;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEAuth$getLoginTokenAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEAuth$getLoginTokenAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(TSEAuth$getLoginTokenAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.t8s_1.k8s(this.u8s_1, this);
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
  protoOf(TSEAuth$getLoginTokenAsync$slambda).ja = function (completion) {
    return new TSEAuth$getLoginTokenAsync$slambda(this.t8s_1, this.u8s_1, completion);
  };
  function TSEAuth$getLoginTokenAsync$slambda_0(this$0, $server, resultContinuation) {
    var i = new TSEAuth$getLoginTokenAsync$slambda(this$0, $server, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEAuth$getCachedLoginAsync$slambda(this$0, $server, resultContinuation) {
    this.d8t_1 = this$0;
    this.e8t_1 = $server;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEAuth$getCachedLoginAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEAuth$getCachedLoginAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(TSEAuth$getCachedLoginAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.d8t_1.f8t(this.e8t_1, this);
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
  protoOf(TSEAuth$getCachedLoginAsync$slambda).ja = function (completion) {
    return new TSEAuth$getCachedLoginAsync$slambda(this.d8t_1, this.e8t_1, completion);
  };
  function TSEAuth$getCachedLoginAsync$slambda_0(this$0, $server, resultContinuation) {
    var i = new TSEAuth$getCachedLoginAsync$slambda(this$0, $server, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getClientTokenCOROUTINE$49(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w8p_1 = _this__u8e3s4;
    this.x8p_1 = _this__u8e3s4_0;
  }
  protoOf($getClientTokenCOROUTINE$49).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            tmp_0.y8p_1 = this.x8p_1;
            this.z8p_1 = this.y8p_1;
            this.n9_1 = 1;
            var tmp_1 = this.z8p_1.q3n();
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

            suspendResult = tmp_1.t3m(new TypeInfo(tmp_2, tmp_3), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            checkNoErrors(this.w8p_1, it);
            var tmp0_safe_receiver = it.af('auth');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('client_token');
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
  function $loginAppRoleCOROUTINE$50(_this__u8e3s4, server, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i8q_1 = _this__u8e3s4;
    this.j8q_1 = server;
  }
  protoOf($loginAppRoleCOROUTINE$50).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.k8q_1 = Companion_getInstance_26().m8p_1;
            var tmp_1 = this;
            tmp_1.l8q_1 = this.j8q_1 + '/auth/approle/login';
            this.m8q_1 = this.k8q_1;
            this.n8q_1 = this.l8q_1;
            var tmp_2 = this;
            tmp_2.o8q_1 = this.m8q_1;
            this.p8q_1 = this.o8q_1;
            var tmp_3 = this;
            tmp_3.q8q_1 = this.p8q_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.n8q_1);
            var body = mapOf([to('role_id', this.i8q_1.roleId), to('secret_id', this.i8q_1.secretId)]);
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
              var tmp_5 = getKClass(KtMap);
              var tmp_6;
              try {
                tmp_6 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), true))]), false);
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
                var tmp_8 = getKClass(KtMap);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), true))]), false);
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

            tmp_4.r8q_1 = this_0;
            this.s8q_1 = this.q8q_1;
            this.t8q_1 = this.r8q_1;
            this.t8q_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_11 = this;
            tmp_11.u8q_1 = this.s8q_1;
            var tmp_12 = this;
            tmp_12.v8q_1 = this.t8q_1;
            this.w8q_1 = this.u8q_1;
            this.x8q_1 = this.v8q_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.x8q_1, this.w8q_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.y8q_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = getClientToken(this.i8q_1, this.y8q_1, this);
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
  function $loginUserPassCOROUTINE$51(_this__u8e3s4, server, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h8r_1 = _this__u8e3s4;
    this.i8r_1 = server;
  }
  protoOf($loginUserPassCOROUTINE$51).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.j8r_1 = Companion_getInstance_26().m8p_1;
            var tmp_1 = this;
            tmp_1.k8r_1 = this.i8r_1 + '/auth/' + this.h8r_1.userpassPath + '/login/' + this.h8r_1.username;
            this.l8r_1 = this.j8r_1;
            this.m8r_1 = this.k8r_1;
            var tmp_2 = this;
            tmp_2.n8r_1 = this.l8r_1;
            this.o8r_1 = this.n8r_1;
            var tmp_3 = this;
            tmp_3.p8r_1 = this.o8r_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.m8r_1);
            var body = mapOf_0(to('password', this.h8r_1.password));
            if (body == null) {
              this_0.l3k_1 = NullBody_instance;
              var tmp_5 = getKClass(KtMap);
              var tmp_6;
              try {
                tmp_6 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), true))]), false);
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
                var tmp_8 = getKClass(KtMap);
                var tmp_9;
                try {
                  tmp_9 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), true))]), false);
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

            tmp_4.q8r_1 = this_0;
            this.r8r_1 = this.p8r_1;
            this.s8r_1 = this.q8r_1;
            this.s8r_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_11 = this;
            tmp_11.t8r_1 = this.r8r_1;
            var tmp_12 = this;
            tmp_12.u8r_1 = this.s8r_1;
            this.v8r_1 = this.t8r_1;
            this.w8r_1 = this.u8r_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.w8r_1, this.v8r_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x8r_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = getClientToken(this.h8r_1, this.x8r_1, this);
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
  function $getLoginTokenCOROUTINE$52(_this__u8e3s4, server, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o8t_1 = _this__u8e3s4;
    this.p8t_1 = server;
  }
  protoOf($getLoginTokenCOROUTINE$52).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            if (!(this.o8t_1.accessKey == null)) {
              this.q8t_1 = this.o8t_1.accessKey;
              this.n9_1 = 3;
              continue $sm;
            } else {
              if (!(this.o8t_1.roleId == null)) {
                this.n9_1 = 2;
                suspendResult = loginAppRole(this.o8t_1, this.p8t_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (!(this.o8t_1.username == null)) {
                  this.n9_1 = 1;
                  suspendResult = loginUserPass(this.o8t_1, this.p8t_1, this);
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
            this.q8t_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.q8t_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return this.q8t_1;
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
  protoOf($getLoginTokenCOROUTINE$52)['<set-state>'] = protoOf($getLoginTokenCOROUTINE$52).u9;
  protoOf($getLoginTokenCOROUTINE$52)['<get-state>'] = protoOf($getLoginTokenCOROUTINE$52).v9;
  protoOf($getLoginTokenCOROUTINE$52)['<set-exceptionState>'] = protoOf($getLoginTokenCOROUTINE$52).w9;
  protoOf($getLoginTokenCOROUTINE$52)['<get-exceptionState>'] = protoOf($getLoginTokenCOROUTINE$52).x9;
  protoOf($getLoginTokenCOROUTINE$52)['<set-result>'] = protoOf($getLoginTokenCOROUTINE$52).y9;
  protoOf($getLoginTokenCOROUTINE$52)['<get-result>'] = protoOf($getLoginTokenCOROUTINE$52).z9;
  protoOf($getLoginTokenCOROUTINE$52)['<set-exception>'] = protoOf($getLoginTokenCOROUTINE$52).aa;
  protoOf($getLoginTokenCOROUTINE$52)['<get-exception>'] = protoOf($getLoginTokenCOROUTINE$52).ba;
  protoOf($getLoginTokenCOROUTINE$52)['<set-finallyPath>'] = protoOf($getLoginTokenCOROUTINE$52).ca;
  protoOf($getLoginTokenCOROUTINE$52)['<get-finallyPath>'] = protoOf($getLoginTokenCOROUTINE$52).da;
  protoOf($getLoginTokenCOROUTINE$52)['<get-context>'] = protoOf($getLoginTokenCOROUTINE$52).t9;
  function TSEAuth(accessKey, roleId, secretId, userpassPath, username, password) {
    Companion_getInstance_26();
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
  protoOf(TSEAuth).r8t = function () {
    return this.accessKey;
  };
  protoOf(TSEAuth).s8t = function () {
    return this.roleId;
  };
  protoOf(TSEAuth).t8t = function () {
    return this.secretId;
  };
  protoOf(TSEAuth).u8t = function () {
    return this.userpassPath;
  };
  protoOf(TSEAuth).v8t = function () {
    return this.username;
  };
  protoOf(TSEAuth).u36 = function () {
    return this.password;
  };
  protoOf(TSEAuth).k8s = function (server, $completion) {
    var tmp = new $getLoginTokenCOROUTINE$52(this, server, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEAuth).f8t = function (server, $completion) {
    var server_0 = getServerUpTov1(this, server);
    var tmp = Companion_getInstance_26().n8p_1;
    var tmp_0 = new Pair(this, server_0);
    return tmp.e6g(tmp_0, TSEAuth$getCachedLogin$slambda_0(this, server_0, null), $completion);
  };
  protoOf(TSEAuth).w8t = function (server) {
    var tmp = TSEAuth$getLoginTokenAsync$slambda_0(this, server, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEAuth).x8t = function (server) {
    var tmp = TSEAuth$getCachedLoginAsync$slambda_0(this, server, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEAuth).dc = function () {
    return this.accessKey;
  };
  protoOf(TSEAuth).ec = function () {
    return this.roleId;
  };
  protoOf(TSEAuth).yp = function () {
    return this.secretId;
  };
  protoOf(TSEAuth).p70 = function () {
    return this.userpassPath;
  };
  protoOf(TSEAuth).w7k = function () {
    return this.username;
  };
  protoOf(TSEAuth).o85 = function () {
    return this.password;
  };
  protoOf(TSEAuth).y8t = function (accessKey, roleId, secretId, userpassPath, username, password) {
    return new TSEAuth(accessKey, roleId, secretId, userpassPath, username, password);
  };
  protoOf(TSEAuth).copy = function (accessKey, roleId, secretId, userpassPath, username, password, $super) {
    accessKey = accessKey === VOID ? this.accessKey : accessKey;
    roleId = roleId === VOID ? this.roleId : roleId;
    secretId = secretId === VOID ? this.secretId : secretId;
    userpassPath = userpassPath === VOID ? this.userpassPath : userpassPath;
    username = username === VOID ? this.username : username;
    password = password === VOID ? this.password : password;
    return $super === VOID ? this.y8t(accessKey, roleId, secretId, userpassPath, username, password) : $super.y8t.call(this, accessKey, roleId, secretId, userpassPath, username, password);
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
    switch (type.t2_1) {
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
        throw new KeyTypeNotSupportedException(type.s2_1);
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
    return Companion_getInstance_14().m4u();
  }
  function TSEKey$Companion$tseJsonDataBody$lambda($this_tseJsonDataBody) {
    return function () {
      return 'TSE server (URL: ' + get_request($this_tseJsonDataBody).u3m().toString() + ') returned invalid response: ';
    };
  }
  function TSEKey$Companion$generate$lambda($type) {
    return function () {
      return 'Generating TSE key (' + $type.toString() + ')';
    };
  }
  function TSEKey$Companion$http$lambda($this$HttpClient) {
    var tmp = get_ContentNegotiation();
    $this$HttpClient.p3l(tmp, TSEKey$Companion$http$lambda$lambda);
    defaultRequest($this$HttpClient, TSEKey$Companion$http$lambda$lambda_0);
    var tmp_0 = get_Logging();
    $this$HttpClient.p3l(tmp_0, TSEKey$Companion$http$lambda$lambda_1);
    return Unit_instance;
  }
  function TSEKey$Companion$http$lambda$lambda($this$install) {
    json($this$install);
    return Unit_instance;
  }
  function TSEKey$Companion$http$lambda$lambda_0($this$defaultRequest) {
    header($this$defaultRequest, HttpHeaders_getInstance().q2y_1, Application_getInstance().y2v_1);
    return Unit_instance;
  }
  function TSEKey$Companion$http$lambda$lambda_1($this$install) {
    $this$install.o5g(get_DEFAULT(Companion_instance_2));
    $this$install.n5g_1 = LogLevel_ALL_getInstance();
    return Unit_instance;
  }
  function TSEKey$Companion$tseJsonDataBodyAsync$slambda($this_tseJsonDataBodyAsync, resultContinuation) {
    this.h8u_1 = $this_tseJsonDataBodyAsync;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$Companion$tseJsonDataBodyAsync$slambda).t6p = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$Companion$tseJsonDataBodyAsync$slambda).ac = function ($completion) {
    return this.t6p($completion);
  };
  protoOf(TSEKey$Companion$tseJsonDataBodyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_getInstance_27().i8u(this.h8u_1, this);
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
  protoOf(TSEKey$Companion$tseJsonDataBodyAsync$slambda).ja = function (completion) {
    return new TSEKey$Companion$tseJsonDataBodyAsync$slambda(this.h8u_1, completion);
  };
  function TSEKey$Companion$tseJsonDataBodyAsync$slambda_0($this_tseJsonDataBodyAsync, resultContinuation) {
    var i = new TSEKey$Companion$tseJsonDataBodyAsync$slambda($this_tseJsonDataBodyAsync, resultContinuation);
    var l = function ($completion) {
      return i.t6p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$Companion$generateAsync$slambda($type, $metadata, resultContinuation) {
    this.r8u_1 = $type;
    this.s8u_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$Companion$generateAsync$slambda).t8u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$Companion$generateAsync$slambda).ac = function ($completion) {
    return this.t8u($completion);
  };
  protoOf(TSEKey$Companion$generateAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_getInstance_27().f6t(this.r8u_1, this.s8u_1, this);
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
  protoOf(TSEKey$Companion$generateAsync$slambda).ja = function (completion) {
    return new TSEKey$Companion$generateAsync$slambda(this.r8u_1, this.s8u_1, completion);
  };
  function TSEKey$Companion$generateAsync$slambda_0($type, $metadata, resultContinuation) {
    var i = new TSEKey$Companion$generateAsync$slambda($type, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.t8u($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $tseJsonDataBodyCOROUTINE$67(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c8v_1 = _this__u8e3s4;
    this.d8v_1 = _this__u8e3s4_0;
  }
  protoOf($tseJsonDataBodyCOROUTINE$67).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 8;
            var tmp_0 = this;
            tmp_0.e8v_1 = TSEKey$Companion$tseJsonDataBody$lambda(this.d8v_1);
            if (!isSuccess(this.d8v_1.p37()))
              throw RuntimeException_init_$Create$(this.e8v_1() + ('non-success status: ' + this.d8v_1.p37().toString()));
            var tmp_1 = this;
            tmp_1.f8v_1 = this.d8v_1;
            this.g8v_1 = this.f8v_1;
            this.o9_1 = 2;
            var tmp_2 = this;
            tmp_2.i8v_1 = Companion_instance_1;
            var tmp_3 = this;
            tmp_3.j8v_1 = this.g8v_1;
            this.k8v_1 = this.j8v_1;
            var tmp_4 = this;
            tmp_4.l8v_1 = this.k8v_1;
            this.m8v_1 = this.l8v_1;
            this.n9_1 = 1;
            var tmp_5 = this.m8v_1.q3n();
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

            suspendResult = tmp_5.t3m(new TypeInfo(tmp_6, tmp_7), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_9 = this;
            tmp_9.n8v_1 = suspendResult instanceof JsonObject ? suspendResult : THROW_CCE();
            var tmp_10 = this;
            this.i8v_1;
            var value = this.n8v_1;
            tmp_10.h8v_1 = _Result___init__impl__xyqfz8(value);
            this.o9_1 = 8;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.o9_1 = 8;
            var tmp_11 = this.q9_1;
            if (tmp_11 instanceof Error) {
              this.o8v_1 = this.q9_1;
              var tmp_12 = this;
              var exception = this.o8v_1;
              tmp_12.h8v_1 = _Result___init__impl__xyqfz8(createFailure(exception));
              this.n9_1 = 3;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            this.o9_1 = 8;
            this.p8v_1 = this.h8v_1;
            this.q8v_1 = this.p8v_1;
            this.r8v_1 = Result__exceptionOrNull_impl_p6xea9(this.q8v_1);
            if (this.r8v_1 == null) {
              var tmp_13 = this;
              var tmp_14 = _Result___get_value__impl__bjfvqg(this.q8v_1);
              tmp_13.s8v_1 = (tmp_14 == null ? true : !(tmp_14 == null)) ? tmp_14 : THROW_CCE();
              this.n9_1 = 5;
              continue $sm;
            } else {
              var tmp_15 = this;
              tmp_15.t8v_1 = this.r8v_1;
              this.u8v_1 = this.t8v_1;
              this.n9_1 = 4;
              suspendResult = bodyAsText(this.d8v_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 4:
            this.v8v_1 = suspendResult;
            var tmp_16 = this;
            throw IllegalArgumentException_init_$Create$(this.e8v_1() + (this.v8v_1 === '' ? 'empty response (instead of JSON data)' : 'invalid response: ' + this.v8v_1));
          case 5:
            this.w8v_1 = this.s8v_1;
            this.x8v_1 = this.w8v_1.af('data');
            this.y8v_1 = this.x8v_1 == null ? null : get_jsonObject(this.x8v_1);
            if (this.y8v_1 == null) {
              this.a8w_1 = this.e8v_1();
              this.n9_1 = 6;
              suspendResult = bodyAsText(this.d8v_1, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.z8v_1 = this.y8v_1;
              this.n9_1 = 7;
              continue $sm;
            }

          case 6:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = 'no data in response: ' + ARGUMENT;
            var ARGUMENT_1 = this.a8w_1 + ARGUMENT_0;
            var tmp_17 = this;
            throw IllegalArgumentException_init_$Create$(ARGUMENT_1);
          case 7:
            return this.z8v_1;
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
  protoOf($tseJsonDataBodyCOROUTINE$67)['<set-state>'] = protoOf($tseJsonDataBodyCOROUTINE$67).u9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-state>'] = protoOf($tseJsonDataBodyCOROUTINE$67).v9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<set-exceptionState>'] = protoOf($tseJsonDataBodyCOROUTINE$67).w9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-exceptionState>'] = protoOf($tseJsonDataBodyCOROUTINE$67).x9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<set-result>'] = protoOf($tseJsonDataBodyCOROUTINE$67).y9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-result>'] = protoOf($tseJsonDataBodyCOROUTINE$67).z9;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<set-exception>'] = protoOf($tseJsonDataBodyCOROUTINE$67).aa;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-exception>'] = protoOf($tseJsonDataBodyCOROUTINE$67).ba;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<set-finallyPath>'] = protoOf($tseJsonDataBodyCOROUTINE$67).ca;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-finallyPath>'] = protoOf($tseJsonDataBodyCOROUTINE$67).da;
  protoOf($tseJsonDataBodyCOROUTINE$67)['<get-context>'] = protoOf($tseJsonDataBodyCOROUTINE$67).t9;
  function $generateCOROUTINE$68(_this__u8e3s4, type, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j8w_1 = _this__u8e3s4;
    this.k8w_1 = type;
    this.l8w_1 = metadata;
  }
  protoOf($generateCOROUTINE$68).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = get_logger_0();
            tmp_0.n6g(TSEKey$Companion$generate$lambda(this.k8w_1));
            var tmp_1 = this;
            tmp_1.m8w_1 = this.j8w_1.e6t_1;
            var tmp_2 = this;
            var tmp0_elvis_lhs = this.l8w_1.id;
            tmp_2.n8w_1 = this.l8w_1.server + '/keys/k' + toString_0(tmp0_elvis_lhs == null ? Default_getInstance_0().gi() : tmp0_elvis_lhs);
            this.o8w_1 = this.m8w_1;
            this.p8w_1 = this.n8w_1;
            var tmp_3 = this;
            tmp_3.q8w_1 = this.o8w_1;
            this.r8w_1 = this.q8w_1;
            var tmp_4 = this;
            tmp_4.s8w_1 = this.r8w_1;
            var tmp_5 = this;
            tmp_5.t8w_1 = new HttpRequestBuilder();
            this.u8w_1 = this.t8w_1;
            var tmp_6 = this;
            tmp_6.v8w_1 = this.u8w_1;
            this.w8w_1 = this.v8w_1;
            url(this.w8w_1, this.p8w_1);
            var tmp_7 = this;
            tmp_7.x8w_1 = this.w8w_1;
            this.y8w_1 = this.x8w_1;
            this.n9_1 = 1;
            suspendResult = this.l8w_1.auth.f8t(this.l8w_1.server, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z8w_1 = suspendResult;
            header(this.y8w_1, 'X-Vault-Token', this.z8w_1);
            if (this.l8w_1.namespace == null)
              null;
            else {
              header(this.y8w_1, 'X-Vault-Namespace', this.l8w_1.namespace);
            }

            var tmp2 = this.y8w_1;
            var body = mapOf_0(to('type', keyTypeToTseKeyMapping(Companion_getInstance_27(), this.k8w_1)));
            if (body == null) {
              tmp2.l3k_1 = NullBody_instance;
              var tmp_8 = getKClass(KtMap);
              var tmp_9;
              try {
                tmp_9 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false))]), false);
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
              tmp2.e3q(new TypeInfo(tmp_8, tmp_9));
            } else {
              if (body instanceof OutgoingContent) {
                tmp2.l3k_1 = body;
                tmp2.e3q(null);
              } else {
                tmp2.l3k_1 = body;
                var tmp_11 = getKClass(KtMap);
                var tmp_12;
                try {
                  tmp_12 = createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false))]), false);
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
                tmp2.e3q(new TypeInfo(tmp_11, tmp_12));
              }
            }

            this.a8x_1 = this.u8w_1;
            this.b8x_1 = this.s8w_1;
            this.c8x_1 = this.a8x_1;
            this.c8x_1.j3k_1 = Companion_getInstance_0().d32_1;
            var tmp_14 = this;
            tmp_14.d8x_1 = this.b8x_1;
            var tmp_15 = this;
            tmp_15.e8x_1 = this.c8x_1;
            this.f8x_1 = this.d8x_1;
            this.g8x_1 = this.e8x_1;
            this.n9_1 = 2;
            suspendResult = (new HttpStatement(this.g8x_1, this.f8x_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h8x_1 = suspendResult;
            this.n9_1 = 3;
            suspendResult = this.j8w_1.i8u(this.h8x_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.i8x_1 = suspendResult;
            var tmp_16 = this;
            var tmp1_safe_receiver = this.i8x_1.af('name');
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonPrimitive(tmp1_safe_receiver);
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.q4u();
            var tmp_17;
            if (tmp3_elvis_lhs == null) {
              throw new MissingKeyNameException();
            } else {
              tmp_17 = tmp3_elvis_lhs;
            }

            tmp_16.j8x_1 = tmp_17;
            var tmp_18 = this;
            var tmp4_elvis_lhs = this.i8x_1.af('keys');
            var tmp_19;
            if (tmp4_elvis_lhs == null) {
              throw new MissingKeyDataException();
            } else {
              tmp_19 = tmp4_elvis_lhs;
            }

            tmp_18.k8x_1 = decodeBase64Bytes(get_jsonPrimitive(ensureNotNull(get_jsonObject(ensureNotNull(get_jsonObject(tmp_19).af('1'))).af('public_key'))).q4u());
            var tmp_20 = this;
            tmp_20.l8x_1 = new TSEKey(this.l8w_1.server, this.l8w_1.auth, VOID, this.l8w_1.namespace, this.j8x_1, this.k8x_1, this.k8w_1);
            this.m8x_1 = this.l8x_1;
            var tmp_21 = this;
            tmp_21.n8x_1 = this.m8x_1;
            this.o8x_1 = this.n8x_1;
            this.n9_1 = 4;
            suspendResult = this.o8x_1.n6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            return this.m8x_1;
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
  protoOf($generateCOROUTINE$68)['<set-state>'] = protoOf($generateCOROUTINE$68).u9;
  protoOf($generateCOROUTINE$68)['<get-state>'] = protoOf($generateCOROUTINE$68).v9;
  protoOf($generateCOROUTINE$68)['<set-exceptionState>'] = protoOf($generateCOROUTINE$68).w9;
  protoOf($generateCOROUTINE$68)['<get-exceptionState>'] = protoOf($generateCOROUTINE$68).x9;
  protoOf($generateCOROUTINE$68)['<set-result>'] = protoOf($generateCOROUTINE$68).y9;
  protoOf($generateCOROUTINE$68)['<get-result>'] = protoOf($generateCOROUTINE$68).z9;
  protoOf($generateCOROUTINE$68)['<set-exception>'] = protoOf($generateCOROUTINE$68).aa;
  protoOf($generateCOROUTINE$68)['<get-exception>'] = protoOf($generateCOROUTINE$68).ba;
  protoOf($generateCOROUTINE$68)['<set-finallyPath>'] = protoOf($generateCOROUTINE$68).ca;
  protoOf($generateCOROUTINE$68)['<get-finallyPath>'] = protoOf($generateCOROUTINE$68).da;
  protoOf($generateCOROUTINE$68)['<get-context>'] = protoOf($generateCOROUTINE$68).t9;
  function httpRequest($this, method, url, body, $completion) {
    var tmp = new $httpRequestCOROUTINE$53($this, method, url, body, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function httpRequest$default($this, method, url, body, $completion, $super) {
    method = method === VOID ? Companion_getInstance_0().c32_1 : method;
    url = url === VOID ? 'keys/' + $this.id : url;
    body = body === VOID ? null : body;
    return httpRequest($this, method, url, body, $completion);
  }
  function getBackingPublicKey($this, $completion) {
    var tmp = new $getBackingPublicKeyCOROUTINE$55($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function throwTSEError($this, msg) {
    throw RuntimeException_init_$Create$('Invalid TSE server (' + $this.server + ') response: ' + msg);
  }
  function retrievePublicKey_0($this, $completion) {
    var tmp = new $retrievePublicKeyCOROUTINE$56($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function retrieveKeyType($this, $completion) {
    var tmp = new $retrieveKeyTypeCOROUTINE$57($this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function Companion_21() {
    Companion_instance_26 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.d6t_1 = [null, null, null, null, null, null, lazy(tmp_0, TSEKey$Companion$$childSerializers$_anonymous__inmzqp)];
    var tmp_1 = this;
    tmp_1.e6t_1 = HttpClient(TSEKey$Companion$http$lambda);
  }
  protoOf(Companion_21).i8u = function (_this__u8e3s4, $completion) {
    var tmp = new $tseJsonDataBodyCOROUTINE$67(this, _this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_21).f6t = function (type, metadata, $completion) {
    var tmp = new $generateCOROUTINE$68(this, type, metadata, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_21).a90 = function (_this__u8e3s4) {
    var tmp = TSEKey$Companion$tseJsonDataBodyAsync$slambda_0(_this__u8e3s4, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_21).b90 = function (type, metadata) {
    var tmp = TSEKey$Companion$generateAsync$slambda_0(type, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_21).m4u = function () {
    return $serializer_getInstance_17();
  };
  var Companion_instance_26;
  function Companion_getInstance_27() {
    if (Companion_instance_26 == null)
      new Companion_21();
    return Companion_instance_26;
  }
  function $serializer_17() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('tse', this, 7);
    tmp0_serialDesc.x2b('server', false);
    tmp0_serialDesc.x2b('auth', true);
    tmp0_serialDesc.x2b('accessKey', true);
    tmp0_serialDesc.x2b('namespace', true);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('_publicKey', true);
    tmp0_serialDesc.x2b('_keyType', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.c90_1 = tmp0_serialDesc;
  }
  protoOf($serializer_17).d90 = function (encoder, value) {
    var tmp0_desc = this.c90_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_27().d6t_1;
    tmp1_output.w25(tmp0_desc, 0, value.server);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.p8x_1 == null)) {
      tmp1_output.a26(tmp0_desc, 1, $serializer_getInstance_16(), value.p8x_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.q8x_1 == null)) {
      tmp1_output.a26(tmp0_desc, 2, StringSerializer_getInstance(), value.q8x_1);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.r8x_1 == null)) {
      tmp1_output.a26(tmp0_desc, 3, StringSerializer_getInstance(), value.r8x_1);
    }
    tmp1_output.w25(tmp0_desc, 4, value.id);
    if (tmp1_output.e26(tmp0_desc, 5) ? true : !(value.s8x_1 == null)) {
      tmp1_output.a26(tmp0_desc, 5, ByteArraySerializer_getInstance(), value.s8x_1);
    }
    if (tmp1_output.e26(tmp0_desc, 6) ? true : !(value.t8x_1 == null)) {
      tmp1_output.a26(tmp0_desc, 6, tmp2_cached[6].b1(), value.t8x_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_17).v20 = function (encoder, value) {
    return this.d90(encoder, value instanceof TSEKey ? value : THROW_CCE());
  };
  protoOf($serializer_17).w20 = function (decoder) {
    var tmp0_desc = this.c90_1;
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
    var tmp12_input = decoder.h24(tmp0_desc);
    var tmp13_cached = Companion_getInstance_27().d6t_1;
    if (tmp12_input.x24()) {
      tmp4_local0 = tmp12_input.r24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.v24(tmp0_desc, 1, $serializer_getInstance_16(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.r24(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, ByteArraySerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, tmp13_cached[6].b1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.r24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.v24(tmp0_desc, 1, $serializer_getInstance_16(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.r24(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.v24(tmp0_desc, 5, ByteArraySerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.v24(tmp0_desc, 6, tmp13_cached[6].b1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.i24(tmp0_desc);
    return TSEKey_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, null);
  };
  protoOf($serializer_17).u20 = function () {
    return this.c90_1;
  };
  protoOf($serializer_17).m2c = function () {
    var tmp0_cached = Companion_getInstance_27().d6t_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable($serializer_getInstance_16()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(ByteArraySerializer_getInstance()), get_nullable(tmp0_cached[6].b1())];
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_17();
    return $serializer_instance_17;
  }
  function TSEKey_init_$Init$(seen0, server, auth, accessKey, namespace, id, _publicKey, _keyType, serializationConstructorMarker, $this) {
    if (!(17 === (17 & seen0))) {
      throwMissingFieldException(seen0, 17, $serializer_getInstance_17().c90_1);
    }
    Key_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.server = server;
    if (0 === (seen0 & 2))
      $this.p8x_1 = null;
    else
      $this.p8x_1 = auth;
    if (0 === (seen0 & 4))
      $this.q8x_1 = null;
    else
      $this.q8x_1 = accessKey;
    if (0 === (seen0 & 8))
      $this.r8x_1 = null;
    else
      $this.r8x_1 = namespace;
    $this.id = id;
    if (0 === (seen0 & 32))
      $this.s8x_1 = null;
    else
      $this.s8x_1 = _publicKey;
    if (0 === (seen0 & 64))
      $this.t8x_1 = null;
    else
      $this.t8x_1 = _keyType;
    var tmp = $this;
    var tmp0_elvis_lhs = $this.p8x_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp1_elvis_lhs = $this.q8x_1;
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
    tmp.u8x_1 = tmp_0;
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
    this.m90_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$deleteKeyAsync$slambda).t6k = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$deleteKeyAsync$slambda).ac = function ($completion) {
    return this.t6k($completion);
  };
  protoOf(TSEKey$deleteKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.m90_1.u6k(this);
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
  protoOf(TSEKey$deleteKeyAsync$slambda).ja = function (completion) {
    return new TSEKey$deleteKeyAsync$slambda(this.m90_1, completion);
  };
  function TSEKey$deleteKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$deleteKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.t6k($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.v90_1 = this$0;
    this.w90_1 = $plaintext;
    this.x90_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$signJwsAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$signJwsAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(TSEKey$signJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.v90_1.h6l(this.w90_1, this.x90_1, this);
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
  protoOf(TSEKey$signJwsAsync$slambda).ja = function (completion) {
    return new TSEKey$signJwsAsync$slambda(this.v90_1, this.w90_1, this.x90_1, completion);
  };
  function TSEKey$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new TSEKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$signRawAsync$slambda(this$0, $plaintext, resultContinuation) {
    this.g91_1 = this$0;
    this.h91_1 = $plaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$signRawAsync$slambda).s6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$signRawAsync$slambda).ac = function ($completion) {
    return this.s6l($completion);
  };
  protoOf(TSEKey$signRawAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.g91_1.t6l(this.h91_1, this);
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
  protoOf(TSEKey$signRawAsync$slambda).ja = function (completion) {
    return new TSEKey$signRawAsync$slambda(this.g91_1, this.h91_1, completion);
  };
  function TSEKey$signRawAsync$slambda_0(this$0, $plaintext, resultContinuation) {
    var i = new TSEKey$signRawAsync$slambda(this$0, $plaintext, resultContinuation);
    var l = function ($completion) {
      return i.s6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.q91_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getKeyIdAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$getKeyIdAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(TSEKey$getKeyIdAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.q91_1.d6m(this);
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
  protoOf(TSEKey$getKeyIdAsync$slambda).ja = function (completion) {
    return new TSEKey$getKeyIdAsync$slambda(this.q91_1, completion);
  };
  function TSEKey$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$initAsync$slambda(this$0, resultContinuation) {
    this.z91_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$initAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$initAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(TSEKey$initAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.z91_1.n6m(this);
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
  protoOf(TSEKey$initAsync$slambda).ja = function (completion) {
    return new TSEKey$initAsync$slambda(this.z91_1, completion);
  };
  function TSEKey$initAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$initAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.i92_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getPublicKeyAsync$slambda).x6m = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$getPublicKeyAsync$slambda).ac = function ($completion) {
    return this.x6m($completion);
  };
  protoOf(TSEKey$getPublicKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.i92_1.y6m(this);
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
  protoOf(TSEKey$getPublicKeyAsync$slambda).ja = function (completion) {
    return new TSEKey$getPublicKeyAsync$slambda(this.i92_1, completion);
  };
  function TSEKey$getPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.x6m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getMetaAsync$slambda(this$0, resultContinuation) {
    this.r92_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getMetaAsync$slambda).s92 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$getMetaAsync$slambda).ac = function ($completion) {
    return this.s92($completion);
  };
  protoOf(TSEKey$getMetaAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.r92_1.t92(this);
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
  protoOf(TSEKey$getMetaAsync$slambda).ja = function (completion) {
    return new TSEKey$getMetaAsync$slambda(this.r92_1, completion);
  };
  function TSEKey$getMetaAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getMetaAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s92($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.c93_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$exportPEMAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$exportPEMAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(TSEKey$exportPEMAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.c93_1.t6n(this);
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
  protoOf(TSEKey$exportPEMAsync$slambda).ja = function (completion) {
    return new TSEKey$exportPEMAsync$slambda(this.c93_1, completion);
  };
  function TSEKey$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.l93_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$exportJWKAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$exportJWKAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(TSEKey$exportJWKAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.l93_1.j6p(this);
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
  protoOf(TSEKey$exportJWKAsync$slambda).ja = function (completion) {
    return new TSEKey$exportJWKAsync$slambda(this.l93_1, completion);
  };
  function TSEKey$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.u93_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$exportJWKObjectAsync$slambda).t6p = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$exportJWKObjectAsync$slambda).ac = function ($completion) {
    return this.t6p($completion);
  };
  protoOf(TSEKey$exportJWKObjectAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.u93_1.u6p(this);
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
  protoOf(TSEKey$exportJWKObjectAsync$slambda).ja = function (completion) {
    return new TSEKey$exportJWKObjectAsync$slambda(this.u93_1, completion);
  };
  function TSEKey$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.t6p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.d94_1 = this$0;
    this.e94_1 = $signed;
    this.f94_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$verifyRawAsync$slambda).g6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(TSEKey$verifyRawAsync$slambda).ac = function ($completion) {
    return this.g6q($completion);
  };
  protoOf(TSEKey$verifyRawAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.d94_1.h6q(this.e94_1, this.f94_1, this);
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
  protoOf(TSEKey$verifyRawAsync$slambda).ja = function (completion) {
    return new TSEKey$verifyRawAsync$slambda(this.d94_1, this.e94_1, this.f94_1, completion);
  };
  function TSEKey$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new TSEKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.g6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getEncodedPublicKeyAsync$slambda(this$0, resultContinuation) {
    this.o94_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getEncodedPublicKeyAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$getEncodedPublicKeyAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(TSEKey$getEncodedPublicKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.o94_1.p94(this);
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
  protoOf(TSEKey$getEncodedPublicKeyAsync$slambda).ja = function (completion) {
    return new TSEKey$getEncodedPublicKeyAsync$slambda(this.o94_1, completion);
  };
  function TSEKey$getEncodedPublicKeyAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getEncodedPublicKeyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.y94_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getThumbprintAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$getThumbprintAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(TSEKey$getThumbprintAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.y94_1.d6o(this);
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
  protoOf(TSEKey$getThumbprintAsync$slambda).ja = function (completion) {
    return new TSEKey$getThumbprintAsync$slambda(this.y94_1, completion);
  };
  function TSEKey$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.h95_1 = this$0;
    this.i95_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$verifyJwsAsync$slambda).y6o = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(TSEKey$verifyJwsAsync$slambda).ac = function ($completion) {
    return this.y6o($completion);
  };
  protoOf(TSEKey$verifyJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.h95_1.z6o(this.i95_1, this);
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
  protoOf(TSEKey$verifyJwsAsync$slambda).ja = function (completion) {
    return new TSEKey$verifyJwsAsync$slambda(this.h95_1, this.i95_1, completion);
  };
  function TSEKey$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new TSEKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.y6o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.r95_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$getPublicKeyRepresentationAsync$slambda).r6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$getPublicKeyRepresentationAsync$slambda).ac = function ($completion) {
    return this.r6q($completion);
  };
  protoOf(TSEKey$getPublicKeyRepresentationAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.r95_1.s6q(this);
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
  protoOf(TSEKey$getPublicKeyRepresentationAsync$slambda).ja = function (completion) {
    return new TSEKey$getPublicKeyRepresentationAsync$slambda(this.r95_1, completion);
  };
  function TSEKey$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function TSEKey$deleteAsync$slambda(this$0, resultContinuation) {
    this.a96_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKey$deleteAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey$deleteAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(TSEKey$deleteAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.a96_1.b96(this);
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
  protoOf(TSEKey$deleteAsync$slambda).ja = function (completion) {
    return new TSEKey$deleteAsync$slambda(this.a96_1, completion);
  };
  function TSEKey$deleteAsync$slambda_0(this$0, resultContinuation) {
    var i = new TSEKey$deleteAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $httpRequestCOROUTINE$53(_this__u8e3s4, method, url, body, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d8y_1 = _this__u8e3s4;
    this.e8y_1 = method;
    this.f8y_1 = url;
    this.g8y_1 = body;
  }
  protoOf($httpRequestCOROUTINE$53).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.h8y_1 = Companion_getInstance_27().e6t_1;
            this.i8y_1 = this.h8y_1;
            var tmp_1 = this;
            tmp_1.j8y_1 = this.i8y_1;
            var tmp_2 = this;
            tmp_2.k8y_1 = new HttpRequestBuilder();
            this.l8y_1 = this.k8y_1;
            var tmp_3 = this;
            tmp_3.m8y_1 = this.l8y_1;
            this.n8y_1 = this.m8y_1;
            url(this.n8y_1, this.d8y_1.server + '/' + this.f8y_1);
            this.n8y_1.j3k_1 = this.e8y_1;
            this.n9_1 = 1;
            suspendResult = this.d8y_1.u8x_1.f8t(this.d8y_1.server, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.o8y_1 = suspendResult;
            header(this.n8y_1, 'X-Vault-Token', this.o8y_1);
            if (this.d8y_1.r8x_1 == null)
              null;
            else {
              header(this.n8y_1, 'X-Vault-Namespace', this.d8y_1.r8x_1);
            }

            if (this.g8y_1 == null)
              null;
            else {
              var tmp0 = this.n8y_1;
              var body = this.g8y_1;
              if (body == null) {
                tmp0.l3k_1 = NullBody_instance;
                var tmp_4 = PrimitiveClasses_getInstance().dd();
                var tmp_5;
                try {
                  tmp_5 = createKType(PrimitiveClasses_getInstance().dd(), arrayOf([]), false);
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
                tmp0.e3q(new TypeInfo(tmp_4, tmp_5));
              } else {
                if (body instanceof OutgoingContent) {
                  tmp0.l3k_1 = body;
                  tmp0.e3q(null);
                } else {
                  tmp0.l3k_1 = body;
                  var tmp_7 = PrimitiveClasses_getInstance().dd();
                  var tmp_8;
                  try {
                    tmp_8 = createKType(PrimitiveClasses_getInstance().dd(), arrayOf([]), false);
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
                  tmp0.e3q(new TypeInfo(tmp_7, tmp_8));
                }
              }
            }

            this.p8y_1 = this.l8y_1;
            this.q8y_1 = this.j8y_1;
            this.r8y_1 = this.p8y_1;
            this.n9_1 = 2;
            suspendResult = (new HttpStatement(this.r8y_1, this.q8y_1)).r4l(this);
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
  function $initCOROUTINE$54(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k96_1 = _this__u8e3s4;
  }
  protoOf($initCOROUTINE$54).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (this.k96_1.t8x_1 == null) {
              this.n9_1 = 1;
              suspendResult = retrieveKeyType(this.k96_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            var ARGUMENT = suspendResult;
            this.k96_1.t8x_1 = ARGUMENT;
            this.n9_1 = 2;
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
  protoOf($initCOROUTINE$54)['<set-state>'] = protoOf($initCOROUTINE$54).u9;
  protoOf($initCOROUTINE$54)['<get-state>'] = protoOf($initCOROUTINE$54).v9;
  protoOf($initCOROUTINE$54)['<set-exceptionState>'] = protoOf($initCOROUTINE$54).w9;
  protoOf($initCOROUTINE$54)['<get-exceptionState>'] = protoOf($initCOROUTINE$54).x9;
  protoOf($initCOROUTINE$54)['<set-result>'] = protoOf($initCOROUTINE$54).y9;
  protoOf($initCOROUTINE$54)['<get-result>'] = protoOf($initCOROUTINE$54).z9;
  protoOf($initCOROUTINE$54)['<set-exception>'] = protoOf($initCOROUTINE$54).aa;
  protoOf($initCOROUTINE$54)['<get-exception>'] = protoOf($initCOROUTINE$54).ba;
  protoOf($initCOROUTINE$54)['<set-finallyPath>'] = protoOf($initCOROUTINE$54).ca;
  protoOf($initCOROUTINE$54)['<get-finallyPath>'] = protoOf($initCOROUTINE$54).da;
  protoOf($initCOROUTINE$54)['<get-context>'] = protoOf($initCOROUTINE$54).t9;
  function $getBackingPublicKeyCOROUTINE$55(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a8z_1 = _this__u8e3s4;
  }
  protoOf($getBackingPublicKeyCOROUTINE$55).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.b8z_1 = this.a8z_1.s8x_1;
            if (this.b8z_1 == null) {
              this.n9_1 = 1;
              suspendResult = retrievePublicKey_0(this.a8z_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.c8z_1 = this.b8z_1;
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            var this_0 = suspendResult;
            this.a8z_1.s8x_1 = this_0;
            tmp_0.c8z_1 = this_0;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return this.c8z_1;
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
  function $retrievePublicKeyCOROUTINE$56(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.l8z_1 = _this__u8e3s4;
  }
  protoOf($retrievePublicKeyCOROUTINE$56).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = get_logger_0();
            tmp_0.n6g(TSEKey$retrievePublicKey$lambda(this.l8z_1));
            this.m8z_1 = Companion_getInstance_27();
            this.n9_1 = 1;
            suspendResult = httpRequest$default(this.l8z_1, Companion_getInstance_0().c32_1, 'keys/' + this.l8z_1.id, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n8z_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.m8z_1.i8u(this.n8z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.af('keys');
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp_1;
            if (tmp1_elvis_lhs == null) {
              throw new KeyNotFoundException(this.l8z_1.id);
            } else {
              tmp_1 = tmp1_elvis_lhs;
            }

            var keyData = tmp_1;
            var tmp2_safe_receiver = keyData.af('1');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonObject(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.af('public_key');
            var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : get_jsonPrimitive(tmp4_safe_receiver);
            var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.q4u();
            var tmp_2;
            if (tmp6_elvis_lhs == null) {
              throw new KeyNotFoundException(this.l8z_1.id);
            } else {
              tmp_2 = tmp6_elvis_lhs;
            }

            var keyStr = tmp_2;
            var tmp_3 = get_logger_0();
            tmp_3.n6g(TSEKey$retrievePublicKey$lambda_0(keyStr));
            var tmp_4 = lineSequence(keyStr);
            var tmp1 = joinToString_0(filterNot(tmp_4, TSEKey$retrievePublicKey$lambda_1), '');
            var base64PublicKey = Regex_init_$Create$('\\s').we(tmp1, '');
            var tmp_5 = get_logger_0();
            tmp_5.n6g(TSEKey$retrievePublicKey$lambda_2(base64PublicKey));
            return Default_getInstance_1().cl(base64PublicKey);
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
  function $retrieveKeyTypeCOROUTINE$57(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w8z_1 = _this__u8e3s4;
  }
  protoOf($retrieveKeyTypeCOROUTINE$57).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.x8z_1 = Companion_getInstance_27();
            this.y8z_1 = Companion_getInstance_27();
            this.n9_1 = 1;
            suspendResult = httpRequest$default(this.w8z_1, VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.z8z_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.y8z_1.i8u(this.z8z_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.af('type');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
            var tmp_0;
            if (tmp2_elvis_lhs == null) {
              throwTSEError(this.w8z_1, 'No type in data response');
            } else {
              tmp_0 = tmp2_elvis_lhs;
            }

            var ARGUMENT_1 = tmp_0;
            return tseKeyToKeyTypeMapping(this.x8z_1, ARGUMENT_1);
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
  function $getKeyIdCOROUTINE$58(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t96_1 = _this__u8e3s4;
  }
  protoOf($getKeyIdCOROUTINE$58).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.t96_1.y6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u96_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.u96_1.d6m(this);
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
  protoOf($getKeyIdCOROUTINE$58)['<set-state>'] = protoOf($getKeyIdCOROUTINE$58).u9;
  protoOf($getKeyIdCOROUTINE$58)['<get-state>'] = protoOf($getKeyIdCOROUTINE$58).v9;
  protoOf($getKeyIdCOROUTINE$58)['<set-exceptionState>'] = protoOf($getKeyIdCOROUTINE$58).w9;
  protoOf($getKeyIdCOROUTINE$58)['<get-exceptionState>'] = protoOf($getKeyIdCOROUTINE$58).x9;
  protoOf($getKeyIdCOROUTINE$58)['<set-result>'] = protoOf($getKeyIdCOROUTINE$58).y9;
  protoOf($getKeyIdCOROUTINE$58)['<get-result>'] = protoOf($getKeyIdCOROUTINE$58).z9;
  protoOf($getKeyIdCOROUTINE$58)['<set-exception>'] = protoOf($getKeyIdCOROUTINE$58).aa;
  protoOf($getKeyIdCOROUTINE$58)['<get-exception>'] = protoOf($getKeyIdCOROUTINE$58).ba;
  protoOf($getKeyIdCOROUTINE$58)['<set-finallyPath>'] = protoOf($getKeyIdCOROUTINE$58).ca;
  protoOf($getKeyIdCOROUTINE$58)['<get-finallyPath>'] = protoOf($getKeyIdCOROUTINE$58).da;
  protoOf($getKeyIdCOROUTINE$58)['<get-context>'] = protoOf($getKeyIdCOROUTINE$58).t9;
  function $signRawCOROUTINE$59(_this__u8e3s4, plaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d97_1 = _this__u8e3s4;
    this.e97_1 = plaintext;
  }
  protoOf($signRawCOROUTINE$59).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.f97_1 = mapOf_0(to('input', encodeBase64(this.e97_1)));
            this.g97_1 = Companion_getInstance_27();
            this.n9_1 = 1;
            suspendResult = httpRequest(this.d97_1, Companion_getInstance_0().d32_1, 'sign/' + this.d97_1.id, this.f97_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.h97_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.g97_1.i8u(this.h97_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.af('signature');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
            var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : removePrefix(tmp2_safe_receiver, 'vault:v1:');
            var tmp_0;
            if (tmp3_elvis_lhs == null) {
              throw new MissingSignatureException('No signature returned from TSE server');
            } else {
              tmp_0 = tmp3_elvis_lhs;
            }

            var signatureBase64 = tmp_0;
            return Default_getInstance_1().cl(signatureBase64);
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
  protoOf($signRawCOROUTINE$59)['<set-state>'] = protoOf($signRawCOROUTINE$59).u9;
  protoOf($signRawCOROUTINE$59)['<get-state>'] = protoOf($signRawCOROUTINE$59).v9;
  protoOf($signRawCOROUTINE$59)['<set-exceptionState>'] = protoOf($signRawCOROUTINE$59).w9;
  protoOf($signRawCOROUTINE$59)['<get-exceptionState>'] = protoOf($signRawCOROUTINE$59).x9;
  protoOf($signRawCOROUTINE$59)['<set-result>'] = protoOf($signRawCOROUTINE$59).y9;
  protoOf($signRawCOROUTINE$59)['<get-result>'] = protoOf($signRawCOROUTINE$59).z9;
  protoOf($signRawCOROUTINE$59)['<set-exception>'] = protoOf($signRawCOROUTINE$59).aa;
  protoOf($signRawCOROUTINE$59)['<get-exception>'] = protoOf($signRawCOROUTINE$59).ba;
  protoOf($signRawCOROUTINE$59)['<set-finallyPath>'] = protoOf($signRawCOROUTINE$59).ca;
  protoOf($signRawCOROUTINE$59)['<get-finallyPath>'] = protoOf($signRawCOROUTINE$59).da;
  protoOf($signRawCOROUTINE$59)['<get-context>'] = protoOf($signRawCOROUTINE$59).t9;
  function $signJwsCOROUTINE$60(_this__u8e3s4, plaintext, headers, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q97_1 = _this__u8e3s4;
    this.r97_1 = plaintext;
    this.s97_1 = headers;
  }
  protoOf($signJwsCOROUTINE$60).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            var tmp_1 = Base64Utils_getInstance();
            var tmp2 = Default_getInstance();
            var this_0 = mutableMapOf([to('typ', JsonUtils_getInstance().toJsonElement('JWT')), to('alg', JsonUtils_getInstance().toJsonElement(JwsUtils_instance.jwsAlg(this.q97_1.keyType)))]);
            this_0.r2(this.s97_1);
            var this_1 = tmp2.w24();
            var this_2 = serializer(this_1, createKType(getKClass(KtMutableMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
            tmp_0.t97_1 = tmp_1.encodeToBase64Url(encodeToByteArray(tmp2.x21(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), this_0)));
            this.u97_1 = Base64Utils_getInstance().encodeToBase64Url(this.r97_1);
            this.v97_1 = this.t97_1 + '.' + this.u97_1;
            this.w97_1 = Default_getInstance_1();
            this.n9_1 = 1;
            suspendResult = this.q97_1.t6l(encodeToByteArray(this.v97_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = isByteArray(suspendResult) ? suspendResult : THROW_CCE();
            var signatureBase64 = this.w97_1.yk(ARGUMENT);
            var signatureBase64Url = Base64Utils_getInstance().base64toBase64Url(signatureBase64);
            return this.v97_1 + '.' + signatureBase64Url;
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
  protoOf($signJwsCOROUTINE$60)['<set-state>'] = protoOf($signJwsCOROUTINE$60).u9;
  protoOf($signJwsCOROUTINE$60)['<get-state>'] = protoOf($signJwsCOROUTINE$60).v9;
  protoOf($signJwsCOROUTINE$60)['<set-exceptionState>'] = protoOf($signJwsCOROUTINE$60).w9;
  protoOf($signJwsCOROUTINE$60)['<get-exceptionState>'] = protoOf($signJwsCOROUTINE$60).x9;
  protoOf($signJwsCOROUTINE$60)['<set-result>'] = protoOf($signJwsCOROUTINE$60).y9;
  protoOf($signJwsCOROUTINE$60)['<get-result>'] = protoOf($signJwsCOROUTINE$60).z9;
  protoOf($signJwsCOROUTINE$60)['<set-exception>'] = protoOf($signJwsCOROUTINE$60).aa;
  protoOf($signJwsCOROUTINE$60)['<get-exception>'] = protoOf($signJwsCOROUTINE$60).ba;
  protoOf($signJwsCOROUTINE$60)['<set-finallyPath>'] = protoOf($signJwsCOROUTINE$60).ca;
  protoOf($signJwsCOROUTINE$60)['<get-finallyPath>'] = protoOf($signJwsCOROUTINE$60).da;
  protoOf($signJwsCOROUTINE$60)['<get-context>'] = protoOf($signJwsCOROUTINE$60).t9;
  function $verifyRawCOROUTINE$61(_this__u8e3s4, signed, detachedPlaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f98_1 = _this__u8e3s4;
    this.g98_1 = signed;
    this.h98_1 = detachedPlaintext;
  }
  protoOf($verifyRawCOROUTINE$61).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            if (!!(this.h98_1 == null)) {
              var message = 'An detached plaintext is needed.';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }

            this.i98_1 = mapOf([to('input', encodeBase64(this.h98_1)), to('signature', 'vault:v1:' + encodeBase64(this.g98_1))]);
            this.j98_1 = Companion_getInstance_27();
            this.n9_1 = 1;
            suspendResult = httpRequest(this.f98_1, Companion_getInstance_0().d32_1, 'verify/' + this.f98_1.id, this.i98_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.k98_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.j98_1.i8u(this.k98_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.af('valid');
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
              var value = this.h98_1;
              tmp_1 = _Result___init__impl__xyqfz8(value);
            } else {
              var exception = new VerificationException('Signature verification failed');
              tmp_1 = _Result___init__impl__xyqfz8(createFailure(exception));
            }

            return new Result(tmp_1);
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
  protoOf($verifyRawCOROUTINE$61)['<set-state>'] = protoOf($verifyRawCOROUTINE$61).u9;
  protoOf($verifyRawCOROUTINE$61)['<get-state>'] = protoOf($verifyRawCOROUTINE$61).v9;
  protoOf($verifyRawCOROUTINE$61)['<set-exceptionState>'] = protoOf($verifyRawCOROUTINE$61).w9;
  protoOf($verifyRawCOROUTINE$61)['<get-exceptionState>'] = protoOf($verifyRawCOROUTINE$61).x9;
  protoOf($verifyRawCOROUTINE$61)['<set-result>'] = protoOf($verifyRawCOROUTINE$61).y9;
  protoOf($verifyRawCOROUTINE$61)['<get-result>'] = protoOf($verifyRawCOROUTINE$61).z9;
  protoOf($verifyRawCOROUTINE$61)['<set-exception>'] = protoOf($verifyRawCOROUTINE$61).aa;
  protoOf($verifyRawCOROUTINE$61)['<get-exception>'] = protoOf($verifyRawCOROUTINE$61).ba;
  protoOf($verifyRawCOROUTINE$61)['<set-finallyPath>'] = protoOf($verifyRawCOROUTINE$61).ca;
  protoOf($verifyRawCOROUTINE$61)['<get-finallyPath>'] = protoOf($verifyRawCOROUTINE$61).da;
  protoOf($verifyRawCOROUTINE$61)['<get-context>'] = protoOf($verifyRawCOROUTINE$61).t9;
  function $verifyJwsCOROUTINE$62(_this__u8e3s4, signedJws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t98_1 = _this__u8e3s4;
    this.u98_1 = signedJws;
  }
  protoOf($verifyJwsCOROUTINE$62).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.v98_1 = split(this.u98_1, ['.']);
            if (!(this.v98_1.s() === 3)) {
              var message = 'Invalid JWT part count: ' + this.v98_1.s() + ' instead of 3';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }

            this.w98_1 = this.v98_1.u(0);
            var tmp_0 = this;
            var tmp1 = Default_getInstance();
            var string = decodeToString(Base64Utils_getInstance().decodeFromBase64Url(this.w98_1));
            var this_0 = tmp1.w24();
            var this_1 = serializer(this_0, createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
            tmp_0.x98_1 = tmp1.y21(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), string);
            var tmp0_safe_receiver = this.x98_1.m2('alg');
            if (tmp0_safe_receiver == null)
              null;
            else {
              var algValue = get_jsonPrimitive(tmp0_safe_receiver).q4u();
              if (!(algValue === JwsUtils_instance.jwsAlg(this.t98_1.keyType))) {
                var message_0 = 'Invalid key algorithm for JWS: JWS has ' + algValue + ', key is ' + JwsUtils_instance.jwsAlg(this.t98_1.keyType) + '!';
                throw IllegalStateException_init_$Create$(toString_0(message_0));
              }
            }

            this.y98_1 = this.v98_1.u(1);
            this.z98_1 = Base64Utils_getInstance().decodeFromBase64Url(this.v98_1.u(2));
            this.a99_1 = encodeToByteArray(this.w98_1 + '.' + this.y98_1);
            this.n9_1 = 1;
            suspendResult = this.t98_1.h6q(this.z98_1, this.a99_1, this);
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
            var this_2 = suspendResult.up_1;
            var tmp_1;
            if (_Result___get_isSuccess__impl__sndoy8(this_2)) {
              var tmp_2 = _Result___get_value__impl__bjfvqg(this_2);
              var it = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
              var verifiedPayload = decodeToString(Base64Utils_getInstance().decodeFromBase64Url(substringAfter(decodeToString(it), '.')));
              var value = get_jsonObject(Default_getInstance().h4s(verifiedPayload));
              tmp_1 = _Result___init__impl__xyqfz8(value);
            } else {
              tmp_1 = _Result___init__impl__xyqfz8(_Result___get_value__impl__bjfvqg(this_2));
            }

            return new Result(tmp_1);
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
  protoOf($verifyJwsCOROUTINE$62)['<set-state>'] = protoOf($verifyJwsCOROUTINE$62).u9;
  protoOf($verifyJwsCOROUTINE$62)['<get-state>'] = protoOf($verifyJwsCOROUTINE$62).v9;
  protoOf($verifyJwsCOROUTINE$62)['<set-exceptionState>'] = protoOf($verifyJwsCOROUTINE$62).w9;
  protoOf($verifyJwsCOROUTINE$62)['<get-exceptionState>'] = protoOf($verifyJwsCOROUTINE$62).x9;
  protoOf($verifyJwsCOROUTINE$62)['<set-result>'] = protoOf($verifyJwsCOROUTINE$62).y9;
  protoOf($verifyJwsCOROUTINE$62)['<get-result>'] = protoOf($verifyJwsCOROUTINE$62).z9;
  protoOf($verifyJwsCOROUTINE$62)['<set-exception>'] = protoOf($verifyJwsCOROUTINE$62).aa;
  protoOf($verifyJwsCOROUTINE$62)['<get-exception>'] = protoOf($verifyJwsCOROUTINE$62).ba;
  protoOf($verifyJwsCOROUTINE$62)['<set-finallyPath>'] = protoOf($verifyJwsCOROUTINE$62).ca;
  protoOf($verifyJwsCOROUTINE$62)['<get-finallyPath>'] = protoOf($verifyJwsCOROUTINE$62).da;
  protoOf($verifyJwsCOROUTINE$62)['<get-context>'] = protoOf($verifyJwsCOROUTINE$62).t9;
  function $getEncodedPublicKeyCOROUTINE$63(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j99_1 = _this__u8e3s4;
  }
  protoOf($getEncodedPublicKeyCOROUTINE$63).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.k99_1 = Companion_getInstance_27();
            this.n9_1 = 1;
            suspendResult = httpRequest$default(this.j99_1, VOID, VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l99_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.k99_1.i8u(this.l99_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = get_jsonObject(ARGUMENT);
            var tmp0_safe_receiver = ARGUMENT_0.af('keys');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
            var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('1');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonObject(tmp2_safe_receiver);
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.af('public_key');
            var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : get_jsonPrimitive(tmp4_safe_receiver);
            var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.q4u();
            var tmp_0;
            if (tmp6_elvis_lhs == null) {
              throw new KeyNotFoundException(VOID, 'No keys/1/public_key in data response');
            } else {
              tmp_0 = tmp6_elvis_lhs;
            }

            var ARGUMENT_1 = tmp_0;
            var ARGUMENT_2 = lazyOf(ARGUMENT_1);
            return ARGUMENT_2.b1();
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
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<set-state>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).u9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-state>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).v9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<set-exceptionState>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).w9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-exceptionState>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).x9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<set-result>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).y9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-result>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).z9;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<set-exception>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).aa;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-exception>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).ba;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<set-finallyPath>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).ca;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-finallyPath>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).da;
  protoOf($getEncodedPublicKeyCOROUTINE$63)['<get-context>'] = protoOf($getEncodedPublicKeyCOROUTINE$63).t9;
  function $getPublicKeyCOROUTINE$64(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u99_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyCOROUTINE$64).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = get_logger_0();
            tmp_0.n6g(TSEKey$getPublicKey$lambda(this.u99_1));
            this.v99_1 = Companion_instance_31;
            this.w99_1 = this.u99_1.keyType;
            this.n9_1 = 1;
            suspendResult = getBackingPublicKey(this.u99_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.x99_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.v99_1.a85(this.w99_1, this.x99_1, null, this);
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
  protoOf($getPublicKeyCOROUTINE$64)['<set-state>'] = protoOf($getPublicKeyCOROUTINE$64).u9;
  protoOf($getPublicKeyCOROUTINE$64)['<get-state>'] = protoOf($getPublicKeyCOROUTINE$64).v9;
  protoOf($getPublicKeyCOROUTINE$64)['<set-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$64).w9;
  protoOf($getPublicKeyCOROUTINE$64)['<get-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$64).x9;
  protoOf($getPublicKeyCOROUTINE$64)['<set-result>'] = protoOf($getPublicKeyCOROUTINE$64).y9;
  protoOf($getPublicKeyCOROUTINE$64)['<get-result>'] = protoOf($getPublicKeyCOROUTINE$64).z9;
  protoOf($getPublicKeyCOROUTINE$64)['<set-exception>'] = protoOf($getPublicKeyCOROUTINE$64).aa;
  protoOf($getPublicKeyCOROUTINE$64)['<get-exception>'] = protoOf($getPublicKeyCOROUTINE$64).ba;
  protoOf($getPublicKeyCOROUTINE$64)['<set-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$64).ca;
  protoOf($getPublicKeyCOROUTINE$64)['<get-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$64).da;
  protoOf($getPublicKeyCOROUTINE$64)['<get-context>'] = protoOf($getPublicKeyCOROUTINE$64).t9;
  function $getMetaCOROUTINE$65(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g9a_1 = _this__u8e3s4;
  }
  protoOf($getMetaCOROUTINE$65).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.g9a_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new TseKeyMeta(ARGUMENT);
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
  protoOf($getMetaCOROUTINE$65)['<set-state>'] = protoOf($getMetaCOROUTINE$65).u9;
  protoOf($getMetaCOROUTINE$65)['<get-state>'] = protoOf($getMetaCOROUTINE$65).v9;
  protoOf($getMetaCOROUTINE$65)['<set-exceptionState>'] = protoOf($getMetaCOROUTINE$65).w9;
  protoOf($getMetaCOROUTINE$65)['<get-exceptionState>'] = protoOf($getMetaCOROUTINE$65).x9;
  protoOf($getMetaCOROUTINE$65)['<set-result>'] = protoOf($getMetaCOROUTINE$65).y9;
  protoOf($getMetaCOROUTINE$65)['<get-result>'] = protoOf($getMetaCOROUTINE$65).z9;
  protoOf($getMetaCOROUTINE$65)['<set-exception>'] = protoOf($getMetaCOROUTINE$65).aa;
  protoOf($getMetaCOROUTINE$65)['<get-exception>'] = protoOf($getMetaCOROUTINE$65).ba;
  protoOf($getMetaCOROUTINE$65)['<set-finallyPath>'] = protoOf($getMetaCOROUTINE$65).ca;
  protoOf($getMetaCOROUTINE$65)['<get-finallyPath>'] = protoOf($getMetaCOROUTINE$65).da;
  protoOf($getMetaCOROUTINE$65)['<get-context>'] = protoOf($getMetaCOROUTINE$65).t9;
  function $deleteCOROUTINE$66(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p9a_1 = _this__u8e3s4;
  }
  protoOf($deleteCOROUTINE$66).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = httpRequest(this.p9a_1, Companion_getInstance_0().d32_1, 'keys/' + this.p9a_1.id + '/config', mapOf_0(to('deletion_allowed', true)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.n9_1 = 2;
            suspendResult = httpRequest$default(this.p9a_1, Companion_getInstance_0().g32_1, VOID, VOID, this);
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
  protoOf($deleteCOROUTINE$66)['<set-state>'] = protoOf($deleteCOROUTINE$66).u9;
  protoOf($deleteCOROUTINE$66)['<get-state>'] = protoOf($deleteCOROUTINE$66).v9;
  protoOf($deleteCOROUTINE$66)['<set-exceptionState>'] = protoOf($deleteCOROUTINE$66).w9;
  protoOf($deleteCOROUTINE$66)['<get-exceptionState>'] = protoOf($deleteCOROUTINE$66).x9;
  protoOf($deleteCOROUTINE$66)['<set-result>'] = protoOf($deleteCOROUTINE$66).y9;
  protoOf($deleteCOROUTINE$66)['<get-result>'] = protoOf($deleteCOROUTINE$66).z9;
  protoOf($deleteCOROUTINE$66)['<set-exception>'] = protoOf($deleteCOROUTINE$66).aa;
  protoOf($deleteCOROUTINE$66)['<get-exception>'] = protoOf($deleteCOROUTINE$66).ba;
  protoOf($deleteCOROUTINE$66)['<set-finallyPath>'] = protoOf($deleteCOROUTINE$66).ca;
  protoOf($deleteCOROUTINE$66)['<get-finallyPath>'] = protoOf($deleteCOROUTINE$66).da;
  protoOf($deleteCOROUTINE$66)['<get-context>'] = protoOf($deleteCOROUTINE$66).t9;
  function TSEKey(server, auth, accessKey, namespace, id, _publicKey, _keyType) {
    Companion_getInstance_27();
    auth = auth === VOID ? null : auth;
    accessKey = accessKey === VOID ? null : accessKey;
    namespace = namespace === VOID ? null : namespace;
    _publicKey = _publicKey === VOID ? null : _publicKey;
    _keyType = _keyType === VOID ? null : _keyType;
    Key.call(this);
    this.server = server;
    this.p8x_1 = auth;
    this.q8x_1 = accessKey;
    this.r8x_1 = namespace;
    this.id = id;
    this.s8x_1 = _publicKey;
    this.t8x_1 = _keyType;
    var tmp = this;
    var tmp0_elvis_lhs = this.p8x_1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      var tmp1_elvis_lhs = this.q8x_1;
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
    tmp.u8x_1 = tmp_0;
  }
  protoOf(TSEKey).q9a = function () {
    return this.server;
  };
  protoOf(TSEKey).x6b = function () {
    return this.id;
  };
  protoOf(TSEKey).d7k = function (value) {
    this.t8x_1 = value;
  };
  protoOf(TSEKey).h6r = function () {
    return ensureNotNull(this.t8x_1);
  };
  protoOf(TSEKey).n6m = function ($completion) {
    var tmp = new $initCOROUTINE$54(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey).i6r = function () {
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(TSEKey).d6m = function ($completion) {
    var tmp = new $getKeyIdCOROUTINE$58(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey).d6o = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(TSEKey).j6p = function ($completion) {
    throw IllegalArgumentException_init_$Create$('The private key should not be exposed.');
  };
  protoOf(TSEKey).u6p = function ($completion) {
    throw IllegalArgumentException_init_$Create$('The private key should not be exposed.');
  };
  protoOf(TSEKey).t6n = function ($completion) {
    throw IllegalArgumentException_init_$Create$('The private key should not be exposed.');
  };
  protoOf(TSEKey).t6l = function (plaintext, $completion) {
    var tmp = new $signRawCOROUTINE$59(this, plaintext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey).h6l = function (plaintext, headers, $completion) {
    var tmp = new $signJwsCOROUTINE$60(this, plaintext, headers, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey).h6q = function (signed, detachedPlaintext, $completion) {
    var tmp = new $verifyRawCOROUTINE$61(this, signed, detachedPlaintext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(TSEKey).z6o = function (signedJws, $completion) {
    var tmp = new $verifyJwsCOROUTINE$62(this, signedJws, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(TSEKey).p94 = function ($completion) {
    var tmp = new $getEncodedPublicKeyCOROUTINE$63(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey).y6m = function ($completion) {
    var tmp = new $getPublicKeyCOROUTINE$64(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey).s6q = function ($completion) {
    return getBackingPublicKey(this, $completion);
  };
  protoOf(TSEKey).t92 = function ($completion) {
    var tmp = new $getMetaCOROUTINE$65(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey).j6n = function ($completion) {
    return this.t92($completion);
  };
  protoOf(TSEKey).u6k = function ($completion) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(TSEKey).toString = function () {
    return '[TSE ' + this.keyType.s2_1 + ' key @ ' + this.server + ']';
  };
  protoOf(TSEKey).b96 = function ($completion) {
    var tmp = new $deleteCOROUTINE$66(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKey).j6r = function () {
    var tmp = TSEKey$deleteKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).k6r = function (plaintext, headers) {
    var tmp = TSEKey$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).l6r = function (plaintext) {
    var tmp = TSEKey$signRawAsync$slambda_0(this, plaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).m6r = function () {
    var tmp = TSEKey$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).n6r = function () {
    var tmp = TSEKey$initAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).o6r = function () {
    var tmp = TSEKey$getPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).p6r = function () {
    var tmp = TSEKey$getMetaAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).q6r = function () {
    var tmp = TSEKey$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).u6r = function () {
    var tmp = TSEKey$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).v6r = function () {
    var tmp = TSEKey$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).w6r = function (signed, detachedPlaintext) {
    var tmp = TSEKey$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).r9a = function () {
    var tmp = TSEKey$getEncodedPublicKeyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).r6r = function () {
    var tmp = TSEKey$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).t6r = function (signedJws) {
    var tmp = TSEKey$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).x6r = function () {
    var tmp = TSEKey$getPublicKeyRepresentationAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(TSEKey).s9a = function () {
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
      logger_0 = tmp.w6g(logger$lambda_0);
    }
  }
  function TSEKeyCreator$generateAsync$slambda(this$0, $type, $metadata, resultContinuation) {
    this.b9b_1 = this$0;
    this.c9b_1 = $type;
    this.d9b_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(TSEKeyCreator$generateAsync$slambda).t8u = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(TSEKeyCreator$generateAsync$slambda).ac = function ($completion) {
    return this.t8u($completion);
  };
  protoOf(TSEKeyCreator$generateAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.b9b_1.f6t(this.c9b_1, this.d9b_1, this);
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
  protoOf(TSEKeyCreator$generateAsync$slambda).ja = function (completion) {
    return new TSEKeyCreator$generateAsync$slambda(this.b9b_1, this.c9b_1, this.d9b_1, completion);
  };
  function TSEKeyCreator$generateAsync$slambda_0(this$0, $type, $metadata, resultContinuation) {
    var i = new TSEKeyCreator$generateAsync$slambda(this$0, $type, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.t8u($completion);
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
  protoOf(Companion_22).m4u = function () {
    return $serializer_getInstance_18();
  };
  var Companion_instance_27;
  function Companion_getInstance_28() {
    return Companion_instance_27;
  }
  function $serializer_18() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.keys.tse.TSEKeyMetadata', this, 4);
    tmp0_serialDesc.x2b('server', false);
    tmp0_serialDesc.x2b('auth', false);
    tmp0_serialDesc.x2b('namespace', true);
    tmp0_serialDesc.x2b('id', true);
    this.e9b_1 = tmp0_serialDesc;
  }
  protoOf($serializer_18).f9b = function (encoder, value) {
    var tmp0_desc = this.e9b_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.server);
    tmp1_output.y25(tmp0_desc, 1, $serializer_getInstance_16(), value.auth);
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.namespace == null)) {
      tmp1_output.a26(tmp0_desc, 2, StringSerializer_getInstance(), value.namespace);
    }
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.id == null)) {
      tmp1_output.a26(tmp0_desc, 3, StringSerializer_getInstance(), value.id);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_18).v20 = function (encoder, value) {
    return this.f9b(encoder, value instanceof TSEKeyMetadata ? value : THROW_CCE());
  };
  protoOf($serializer_18).w20 = function (decoder) {
    var tmp0_desc = this.e9b_1;
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
      tmp5_local1 = tmp8_input.t24(tmp0_desc, 1, $serializer_getInstance_16(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
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
            tmp5_local1 = tmp8_input.t24(tmp0_desc, 1, $serializer_getInstance_16(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.v24(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.i24(tmp0_desc);
    return TSEKeyMetadata_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_18).u20 = function () {
    return this.e9b_1;
  };
  protoOf($serializer_18).m2c = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_18().e9b_1);
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
  protoOf(TSEKeyMetadata).q9a = function () {
    return this.server;
  };
  protoOf(TSEKeyMetadata).a83 = function () {
    return this.auth;
  };
  protoOf(TSEKeyMetadata).g9b = function () {
    return this.namespace;
  };
  protoOf(TSEKeyMetadata).x6b = function () {
    return this.id;
  };
  protoOf(TSEKeyMetadata).dc = function () {
    return this.server;
  };
  protoOf(TSEKeyMetadata).ec = function () {
    return this.auth;
  };
  protoOf(TSEKeyMetadata).yp = function () {
    return this.namespace;
  };
  protoOf(TSEKeyMetadata).p70 = function () {
    return this.id;
  };
  protoOf(TSEKeyMetadata).h9b = function (server, auth, namespace, id) {
    return new TSEKeyMetadata(server, auth, namespace, id);
  };
  protoOf(TSEKeyMetadata).copy = function (server, auth, namespace, id, $super) {
    server = server === VOID ? this.server : server;
    auth = auth === VOID ? this.auth : auth;
    namespace = namespace === VOID ? this.namespace : namespace;
    id = id === VOID ? this.id : id;
    return $super === VOID ? this.h9b(server, auth, namespace, id) : $super.h9b.call(this, server, auth, namespace, id);
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
    return tmp0.b1();
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
  function encodeToBase58String(_this__u8e3s4) {
    _init_properties_Base58Utils_kt__nh5aqz();
    var input = copyOf(_this__u8e3s4, _this__u8e3s4.length);
    // Inline function 'kotlin.collections.isEmpty' call
    if (input.length === 0) {
      return '';
    }
    var zeros = 0;
    while (zeros < input.length && input[zeros] === 0) {
      zeros = zeros + 1 | 0;
    }
    var encoded = charArray(imul(input.length, 2));
    var outputStart = encoded.length;
    var inputStart = zeros;
    while (inputStart < input.length) {
      outputStart = outputStart - 1 | 0;
      var tmp = outputStart;
      // Inline function 'kotlin.toUInt' call
      var this_0 = inputStart;
      var tmp_0 = _UInt___init__impl__l7qpdl(this_0);
      // Inline function 'kotlin.toUInt' call
      var tmp_1 = _UInt___init__impl__l7qpdl(256);
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$3 = _UInt___init__impl__l7qpdl(58);
      // Inline function 'kotlin.UInt.toInt' call
      var this_1 = divmod(input, tmp_0, tmp_1, tmp$ret$3);
      var tmp$ret$4 = _UInt___get_data__impl__f0vqqw(this_1);
      encoded[tmp] = charSequenceGet('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz', tmp$ret$4);
      if (input[inputStart] === 0) {
        inputStart = inputStart + 1 | 0;
      }
    }
    while (outputStart < encoded.length && encoded[outputStart] === _Char___init__impl__6a9atx(49)) {
      outputStart = outputStart + 1 | 0;
    }
    $l$loop: while (true) {
      zeros = zeros - 1 | 0;
      if (!(zeros >= 0)) {
        break $l$loop;
      }
      outputStart = outputStart - 1 | 0;
      encoded[outputStart] = _Char___init__impl__6a9atx(49);
    }
    return concatToString(encoded, outputStart, outputStart + (encoded.length - outputStart | 0) | 0);
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
    this.i9b_1 = Default_getInstance_1().uk_1.wk(PaddingOption_ABSENT_OPTIONAL_getInstance());
    this.j9b_1 = Default_getInstance_1();
  }
  protoOf(Base64Utils).base64toBase64Url = function (_this__u8e3s4) {
    return trimEnd(replace(replace(_this__u8e3s4, '+', '-'), '/', '_'), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).base64UrlToBase64 = function (_this__u8e3s4) {
    return replace(replace(_this__u8e3s4, '-', '+'), '_', '/');
  };
  protoOf(Base64Utils).encodeToBase64 = function (_this__u8e3s4) {
    return this.j9b_1.yk(_this__u8e3s4);
  };
  protoOf(Base64Utils).decodeFromBase64 = function (_this__u8e3s4) {
    return this.j9b_1.cl(_this__u8e3s4);
  };
  protoOf(Base64Utils).encodeToBase64Url = function (_this__u8e3s4) {
    return trimEnd(Default_getInstance_1().uk_1.yk(_this__u8e3s4), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).decodeFromBase64Url = function (_this__u8e3s4) {
    return this.i9b_1.cl(_this__u8e3s4);
  };
  protoOf(Base64Utils).base64UrlDecode = function (_this__u8e3s4) {
    return this.i9b_1.cl(_this__u8e3s4);
  };
  protoOf(Base64Utils).base64Decode = function (_this__u8e3s4) {
    return this.j9b_1.cl(_this__u8e3s4);
  };
  var Base64Utils_instance;
  function Base64Utils_getInstance() {
    if (Base64Utils_instance == null)
      new Base64Utils();
    return Base64Utils_instance;
  }
  function jwsSigningAlgorithm(keyType) {
    var tmp;
    switch (keyType.t2_1) {
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
    var it = mapOf([to('crv', JsonUtils_getInstance().toJsonElement(okp.af('crv'))), to('kty', JsonUtils_getInstance().toJsonElement(okp.af('kty'))), to('x', JsonUtils_getInstance().toJsonElement(okp.af('x')))]);
    return new JsonObject(it);
  }
  function ecPublicKeyRequiredMembers($this, ec) {
    // Inline function 'kotlin.let' call
    var it = mapOf([to('crv', JsonUtils_getInstance().toJsonElement(ec.af('crv'))), to('kty', JsonUtils_getInstance().toJsonElement(ec.af('kty'))), to('x', JsonUtils_getInstance().toJsonElement(ec.af('x'))), to('y', JsonUtils_getInstance().toJsonElement(ec.af('y')))]);
    return new JsonObject(it);
  }
  function rsaPublicKeyRequiredMembers($this, rsa) {
    // Inline function 'kotlin.let' call
    var it = mapOf([to('e', JsonUtils_getInstance().toJsonElement(rsa.af('e'))), to('kty', JsonUtils_getInstance().toJsonElement(rsa.af('kty'))), to('n', JsonUtils_getInstance().toJsonElement(rsa.af('n')))]);
    return new JsonObject(it);
  }
  function JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda($key, resultContinuation) {
    this.s9b_1 = $key;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = JsonCanonicalizationUtils_instance.t9b(this.s9b_1, this);
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
  protoOf(JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda).ja = function (completion) {
    return new JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda(this.s9b_1, completion);
  };
  function JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda_0($key, resultContinuation) {
    var i = new JsonCanonicalizationUtils$convertToRequiredMembersJsonStringAsync$slambda($key, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $convertToRequiredMembersJsonStringCOROUTINE$69(_this__u8e3s4, key, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c9c_1 = _this__u8e3s4;
    this.d9c_1 = key;
  }
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.d9c_1.u6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            var tmp_0;
            switch (this.d9c_1.keyType.t2_1) {
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
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<set-state>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).u9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-state>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).v9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<set-exceptionState>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).w9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-exceptionState>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).x9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<set-result>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).y9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-result>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).z9;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<set-exception>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).aa;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-exception>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).ba;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<set-finallyPath>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).ca;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-finallyPath>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).da;
  protoOf($convertToRequiredMembersJsonStringCOROUTINE$69)['<get-context>'] = protoOf($convertToRequiredMembersJsonStringCOROUTINE$69).t9;
  function JsonCanonicalizationUtils() {
  }
  protoOf(JsonCanonicalizationUtils).t9b = function (key, $completion) {
    var tmp = new $convertToRequiredMembersJsonStringCOROUTINE$69(this, key, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JsonCanonicalizationUtils).e9c = function (key) {
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
    _this__u8e3s4.z8(_Char___init__impl__6a9atx(34));
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
        if (c < $this.f6r_1.length && !($this.f6r_1[c] == null)) {
          _this__u8e3s4.xd(value, lastPos, i);
          _this__u8e3s4.y8($this.f6r_1[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.xd(value, lastPos, value.length);
    else
      _this__u8e3s4.y8(value);
    _this__u8e3s4.z8(_Char___init__impl__6a9atx(34));
  }
  function JsonUtils$prettyJson$delegate$lambda() {
    return Json(VOID, JsonUtils$prettyJson$delegate$lambda$lambda);
  }
  function JsonUtils$prettyJson$delegate$lambda$lambda($this$Json) {
    $this$Json.a4t_1 = true;
    return Unit_instance;
  }
  function JsonUtils$printAsJson$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.a1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.b1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(JsonUtils_getInstance(), this_0, k);
    this_0.z8(_Char___init__impl__6a9atx(58));
    this_0.x8(v);
    return this_0.toString();
  }
  function JsonUtils() {
    JsonUtils_instance = this;
    var tmp = this;
    tmp.e6r_1 = lazy_0(JsonUtils$prettyJson$delegate$lambda);
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
    tmp_0.f6r_1 = this_0;
  }
  protoOf(JsonUtils).g6r = function () {
    var tmp0 = this.e6r_1;
    // Inline function 'kotlin.getValue' call
    prettyJson$factory();
    return tmp0.b1();
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
                var _iterator__ex2g4s = _this__u8e3s4.z().p();
                while (_iterator__ex2g4s.q()) {
                  var item = _iterator__ex2g4s.r();
                  var tmp$ret$1 = new Pair(toString(item.a1()), JsonUtils_getInstance().toJsonElement(item.b1()));
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
                          throw IllegalArgumentException_init_$Create$('Cannot convert to JsonElement - Unknown type: ' + getKClassFromExpression(_this__u8e3s4).hc() + ', was: ' + toString(_this__u8e3s4));
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
    var _iterator__ex2g4s = _this__u8e3s4.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var key = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.b1();
      var tmp3 = (!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE();
      // Inline function 'kotlin.collections.set' call
      var value_0 = JsonUtils_getInstance().toJsonElement(value);
      map.p2(tmp3, value_0);
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
    var tmp = _this__u8e3s4.z();
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
      return receiver.g6r();
    }, null);
  }
  function Companion_23() {
  }
  protoOf(Companion_23).m4u = function () {
    return $serializer_getInstance_19();
  };
  var Companion_instance_28;
  function Companion_getInstance_29() {
    return Companion_instance_28;
  }
  function $serializer_19() {
    $serializer_instance_19 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.utils.JwsUtils.JwsParts', this, 3);
    tmp0_serialDesc.x2b('header', false);
    tmp0_serialDesc.x2b('payload', false);
    tmp0_serialDesc.x2b('signature', false);
    this.f9c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_19).g9c = function (encoder, value) {
    var tmp0_desc = this.f9c_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.y25(tmp0_desc, 0, JsonObjectSerializer_getInstance(), value.header);
    tmp1_output.y25(tmp0_desc, 1, JsonObjectSerializer_getInstance(), value.payload);
    tmp1_output.w25(tmp0_desc, 2, value.signature);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_19).v20 = function (encoder, value) {
    return this.g9c(encoder, value instanceof JwsParts ? value : THROW_CCE());
  };
  protoOf($serializer_19).w20 = function (decoder) {
    var tmp0_desc = this.f9c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.h24(tmp0_desc);
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0, JsonObjectSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1, JsonObjectSerializer_getInstance(), tmp5_local1);
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
            tmp4_local0 = tmp7_input.t24(tmp0_desc, 0, JsonObjectSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1, JsonObjectSerializer_getInstance(), tmp5_local1);
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
    return JwsParts_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_19).u20 = function () {
    return this.f9c_1;
  };
  protoOf($serializer_19).m2c = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_19().f9c_1);
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
    tmp.h9c_1 = [null, lazy(tmp_0, JwsUtils$JwsPartsSdJwt$Companion$$childSerializers$_anonymous__im5wu1)];
  }
  protoOf(Companion_24).m4u = function () {
    return $serializer_getInstance_20();
  };
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_24();
    return Companion_instance_29;
  }
  function $serializer_20() {
    $serializer_instance_20 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.crypto.utils.JwsUtils.JwsPartsSdJwt', this, 2);
    tmp0_serialDesc.x2b('jwsParts', false);
    tmp0_serialDesc.x2b('sdJwtDisclosures', false);
    this.i9c_1 = tmp0_serialDesc;
  }
  protoOf($serializer_20).j9c = function (encoder, value) {
    var tmp0_desc = this.i9c_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_30().h9c_1;
    tmp1_output.y25(tmp0_desc, 0, $serializer_getInstance_19(), value.jwsParts);
    tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.sdJwtDisclosures);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_20).v20 = function (encoder, value) {
    return this.j9c(encoder, value instanceof JwsPartsSdJwt ? value : THROW_CCE());
  };
  protoOf($serializer_20).w20 = function (decoder) {
    var tmp0_desc = this.i9c_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    var tmp7_cached = Companion_getInstance_30().h9c_1;
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, $serializer_getInstance_19(), tmp4_local0);
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
            tmp4_local0 = tmp6_input.t24(tmp0_desc, 0, $serializer_getInstance_19(), tmp4_local0);
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
    return JwsPartsSdJwt_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_20).u20 = function () {
    return this.i9c_1;
  };
  protoOf($serializer_20).m2c = function () {
    var tmp0_cached = Companion_getInstance_30().h9c_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_19(), tmp0_cached[1].b1()];
  };
  var $serializer_instance_20;
  function $serializer_getInstance_20() {
    if ($serializer_instance_20 == null)
      new $serializer_20();
    return $serializer_instance_20;
  }
  function JwsPartsSdJwt_init_$Init$(seen0, jwsParts, sdJwtDisclosures, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_20().i9c_1);
    }
    $this.jwsParts = jwsParts;
    $this.sdJwtDisclosures = sdJwtDisclosures;
    return $this;
  }
  function JwsPartsSdJwt_init_$Create$(seen0, jwsParts, sdJwtDisclosures, serializationConstructorMarker) {
    return JwsPartsSdJwt_init_$Init$(seen0, jwsParts, sdJwtDisclosures, serializationConstructorMarker, objectCreate(protoOf(JwsPartsSdJwt)));
  }
  function decodeJwsPart($this, _this__u8e3s4) {
    return get_jsonObject(Default_getInstance().h4s(decodeToString(Base64Utils_getInstance().decodeFromBase64Url(Base64Utils_getInstance().base64toBase64Url(_this__u8e3s4)))));
  }
  function JwsParts(header, payload, signature) {
    this.header = header;
    this.payload = payload;
    this.signature = signature;
  }
  protoOf(JwsParts).k9c = function () {
    return this.header;
  };
  protoOf(JwsParts).l9c = function () {
    return this.payload;
  };
  protoOf(JwsParts).m9c = function () {
    return this.signature;
  };
  protoOf(JwsParts).toString = function () {
    var tmp = Base64Utils_getInstance();
    var tmp0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value = this.header;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(JsonObject), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp$ret$2 = tmp0.x21(tmp$ret$1, value);
    var tmp_0 = tmp.encodeToBase64Url(encodeToByteArray(tmp$ret$2));
    var tmp_1 = Base64Utils_getInstance();
    var tmp2 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value_0 = this.payload;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_2 = tmp2.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_3 = serializer(this_2, createKType(getKClass(JsonObject), arrayOf([]), false));
    var tmp$ret$4 = isInterface(this_3, KSerializer) ? this_3 : THROW_CCE();
    var tmp$ret$5 = tmp2.x21(tmp$ret$4, value_0);
    return tmp_0 + '.' + tmp_1.encodeToBase64Url(encodeToByteArray(tmp$ret$5)) + '.' + this.signature;
  };
  protoOf(JwsParts).dc = function () {
    return this.header;
  };
  protoOf(JwsParts).ec = function () {
    return this.payload;
  };
  protoOf(JwsParts).yp = function () {
    return this.signature;
  };
  protoOf(JwsParts).n9c = function (header, payload, signature) {
    return new JwsParts(header, payload, signature);
  };
  protoOf(JwsParts).copy = function (header, payload, signature, $super) {
    header = header === VOID ? this.header : header;
    payload = payload === VOID ? this.payload : payload;
    signature = signature === VOID ? this.signature : signature;
    return $super === VOID ? this.n9c(header, payload, signature) : $super.n9c.call(this, header, payload, signature);
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
    Companion_getInstance_30();
    this.jwsParts = jwsParts;
    this.sdJwtDisclosures = sdJwtDisclosures;
  }
  protoOf(JwsPartsSdJwt).o9c = function () {
    return this.jwsParts;
  };
  protoOf(JwsPartsSdJwt).p9c = function () {
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
  protoOf(JwsPartsSdJwt).dc = function () {
    return this.jwsParts;
  };
  protoOf(JwsPartsSdJwt).ec = function () {
    return this.sdJwtDisclosures;
  };
  protoOf(JwsPartsSdJwt).q9c = function (jwsParts, sdJwtDisclosures) {
    return new JwsPartsSdJwt(jwsParts, sdJwtDisclosures);
  };
  protoOf(JwsPartsSdJwt).copy = function (jwsParts, sdJwtDisclosures, $super) {
    jwsParts = jwsParts === VOID ? this.jwsParts : jwsParts;
    sdJwtDisclosures = sdJwtDisclosures === VOID ? this.sdJwtDisclosures : sdJwtDisclosures;
    return $super === VOID ? this.q9c(jwsParts, sdJwtDisclosures) : $super.q9c.call(this, jwsParts, sdJwtDisclosures);
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
  protoOf(JwsStringParts).k9c = function () {
    return this.header;
  };
  protoOf(JwsStringParts).l9c = function () {
    return this.payload;
  };
  protoOf(JwsStringParts).m9c = function () {
    return this.signature;
  };
  protoOf(JwsStringParts).getSignable = function () {
    return this.header + '.' + this.payload;
  };
  protoOf(JwsStringParts).dc = function () {
    return this.header;
  };
  protoOf(JwsStringParts).ec = function () {
    return this.payload;
  };
  protoOf(JwsStringParts).yp = function () {
    return this.signature;
  };
  protoOf(JwsStringParts).r9c = function (header, payload, signature) {
    return new JwsStringParts(header, payload, signature);
  };
  protoOf(JwsStringParts).copy = function (header, payload, signature, $super) {
    header = header === VOID ? this.header : header;
    payload = payload === VOID ? this.payload : payload;
    signature = signature === VOID ? this.signature : signature;
    return $super === VOID ? this.r9c(header, payload, signature) : $super.r9c.call(this, header, payload, signature);
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
    switch (_this__u8e3s4.t2_1) {
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
  protoOf(JwsUtils).s9c = function (_this__u8e3s4, withSignature, allowMissingSignature) {
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
    return $super === VOID ? this.s9c(_this__u8e3s4, withSignature, allowMissingSignature) : $super.s9c.call(this, _this__u8e3s4, withSignature, allowMissingSignature);
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
  protoOf(MultiBaseUtils).t9c = function (key, code) {
    var codeVarInt = new UVarInt(code);
    var multicodecAndRawKey = new Int8Array(key.length + codeVarInt.length | 0);
    var tmp0 = codeVarInt.bytes;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = tmp0.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, multicodecAndRawKey, 0, 0, endIndex);
    // Inline function 'kotlin.collections.copyInto' call
    var destinationOffset = codeVarInt.length;
    var endIndex_0 = key.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = key;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, multicodecAndRawKey, destinationOffset, 0, endIndex_0);
    return this.u9c(multicodecAndRawKey);
  };
  protoOf(MultiBaseUtils).v9c = function (mb) {
    var bytes = this.w9c(mb);
    var code = Companion_getInstance_31().fromBytes(bytes);
    return toByteArray(drop(bytes, code.length));
  };
  protoOf(MultiBaseUtils).w9c = function (mb) {
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = mb.substring(1);
    return decodeBase58(tmp$ret$1);
  };
  protoOf(MultiBaseUtils).u9c = function (byteArray) {
    var tmp0 = _Char___init__impl__6a9atx(122);
    // Inline function 'kotlin.text.plus' call
    var other = encodeToBase58String(byteArray);
    return toString_1(tmp0) + other;
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
      var other = Companion_getInstance_31().MSBALL;
      if (!!(_UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) & _UInt___get_data__impl__f0vqqw(other)) === _UInt___init__impl__l7qpdl(0))) {
        break $l$loop;
      }
      var tmp2 = rest;
      // Inline function 'kotlin.UInt.and' call
      var other_0 = _UInt___init__impl__l7qpdl(255);
      var tmp4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp2) & _UInt___get_data__impl__f0vqqw(other_0));
      // Inline function 'kotlin.UInt.or' call
      var other_1 = Companion_getInstance_31().MSB;
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
  protoOf(Companion_25).x9c = function () {
    return this.MSB;
  };
  protoOf(Companion_25).y9c = function () {
    return this.LSB;
  };
  protoOf(Companion_25).z9c = function () {
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
  function Companion_getInstance_31() {
    if (Companion_instance_30 == null)
      new Companion_25();
    return Companion_instance_30;
  }
  function UVarInt(value) {
    Companion_getInstance_31();
    this.value = value;
    this.bytes = bytesFromUInt(this, this.value);
  }
  protoOf(UVarInt).a9d = function () {
    return this.value;
  };
  protoOf(UVarInt).b9d = function () {
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
  protoOf(MultiCodecUtils).c9d = function () {
    return this.JwkJcsPubMultiCodecKeyCode;
  };
  protoOf(MultiCodecUtils).getMultiCodecKeyCode = function (keyType) {
    var tmp;
    switch (keyType.t2_1) {
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
    return Companion_getInstance_31().fromBytes(MultiBaseUtils_instance.w9c(mb)).value;
  };
  var MultiCodecUtils_instance;
  function MultiCodecUtils_getInstance() {
    if (MultiCodecUtils_instance == null)
      new MultiCodecUtils();
    return MultiCodecUtils_instance;
  }
  function UuidUtils() {
  }
  protoOf(UuidUtils).d9d = function () {
    return Companion_getInstance_4().bq();
  };
  protoOf(UuidUtils).e9d = function () {
    return Companion_getInstance_4().bq().toString();
  };
  var UuidUtils_instance;
  function UuidUtils_getInstance() {
    return UuidUtils_instance;
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
    this.n9d_1 = $jwk;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsJWKKeyCreator$importJWKAsync$slambda).q83 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JsJWKKeyCreator$importJWKAsync$slambda).ac = function ($completion) {
    return this.q83($completion);
  };
  protoOf(JsJWKKeyCreator$importJWKAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = JsJWKKeyCreator_instance.t7i(this.n9d_1, this);
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
  protoOf(JsJWKKeyCreator$importJWKAsync$slambda).ja = function (completion) {
    return new JsJWKKeyCreator$importJWKAsync$slambda(this.n9d_1, completion);
  };
  function JsJWKKeyCreator$importJWKAsync$slambda_0($jwk, resultContinuation) {
    var i = new JsJWKKeyCreator$importJWKAsync$slambda($jwk, resultContinuation);
    var l = function ($completion) {
      return i.q83($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JsJWKKeyCreator$importPEMAsync$slambda($pem, resultContinuation) {
    this.w9d_1 = $pem;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsJWKKeyCreator$importPEMAsync$slambda).q83 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JsJWKKeyCreator$importPEMAsync$slambda).ac = function ($completion) {
    return this.q83($completion);
  };
  protoOf(JsJWKKeyCreator$importPEMAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = JsJWKKeyCreator_instance.w77(this.w9d_1, this);
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
  protoOf(JsJWKKeyCreator$importPEMAsync$slambda).ja = function (completion) {
    return new JsJWKKeyCreator$importPEMAsync$slambda(this.w9d_1, completion);
  };
  function JsJWKKeyCreator$importPEMAsync$slambda_0($pem, resultContinuation) {
    var i = new JsJWKKeyCreator$importPEMAsync$slambda($pem, resultContinuation);
    var l = function ($completion) {
      return i.q83($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JsJWKKeyCreator$generateAsync$slambda($type, $metadata, resultContinuation) {
    this.f9e_1 = $type;
    this.g9e_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsJWKKeyCreator$generateAsync$slambda).m84 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JsJWKKeyCreator$generateAsync$slambda).ac = function ($completion) {
    return this.m84($completion);
  };
  protoOf(JsJWKKeyCreator$generateAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = JsJWKKeyCreator_instance.n84(this.f9e_1, this.g9e_1, this);
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
  protoOf(JsJWKKeyCreator$generateAsync$slambda).ja = function (completion) {
    return new JsJWKKeyCreator$generateAsync$slambda(this.f9e_1, this.g9e_1, completion);
  };
  function JsJWKKeyCreator$generateAsync$slambda_0($type, $metadata, resultContinuation) {
    var i = new JsJWKKeyCreator$generateAsync$slambda($type, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.m84($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JsJWKKeyCreator$importRawPublicKeyAsync$slambda($type, $rawPublicKey, $metadata, resultContinuation) {
    this.p9e_1 = $type;
    this.q9e_1 = $rawPublicKey;
    this.r9e_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsJWKKeyCreator$importRawPublicKeyAsync$slambda).x6m = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JsJWKKeyCreator$importRawPublicKeyAsync$slambda).ac = function ($completion) {
    return this.x6m($completion);
  };
  protoOf(JsJWKKeyCreator$importRawPublicKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = JsJWKKeyCreator_instance.a85(this.p9e_1, this.q9e_1, this.r9e_1, this);
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
  protoOf(JsJWKKeyCreator$importRawPublicKeyAsync$slambda).ja = function (completion) {
    return new JsJWKKeyCreator$importRawPublicKeyAsync$slambda(this.p9e_1, this.q9e_1, this.r9e_1, completion);
  };
  function JsJWKKeyCreator$importRawPublicKeyAsync$slambda_0($type, $rawPublicKey, $metadata, resultContinuation) {
    var i = new JsJWKKeyCreator$importRawPublicKeyAsync$slambda($type, $rawPublicKey, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.x6m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $generateCOROUTINE$70(_this__u8e3s4, type, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a9f_1 = _this__u8e3s4;
    this.b9f_1 = type;
    this.c9f_1 = metadata;
  }
  protoOf($generateCOROUTINE$70).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.d9f_1 = JwsUtils_instance.jwsAlg(this.b9f_1);
            this.n9_1 = 1;
            var tmp_0 = PromiseUtils_instance;
            var tmp_1 = jose;
            var tmp_2 = json_0([to('extractable', true)]);
            suspendResult = tmp_0.k9f(tmp_1.generateKeyPair(this.d9f_1, !(tmp_2 == null) ? tmp_2 : THROW_CCE()), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e9f_1 = suspendResult;
            this.f9f_1 = this.e9f_1.privateKey;
            var tmp_3 = this;
            tmp_3.g9f_1 = jwkKeyUsingKeyLike(this.f9f_1);
            this.h9f_1 = this.g9f_1;
            var tmp_4 = this;
            tmp_4.i9f_1 = this.h9f_1;
            this.j9f_1 = this.i9f_1;
            this.n9_1 = 2;
            suspendResult = this.j9f_1.n6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.h9f_1;
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
  protoOf($generateCOROUTINE$70)['<set-state>'] = protoOf($generateCOROUTINE$70).u9;
  protoOf($generateCOROUTINE$70)['<get-state>'] = protoOf($generateCOROUTINE$70).v9;
  protoOf($generateCOROUTINE$70)['<set-exceptionState>'] = protoOf($generateCOROUTINE$70).w9;
  protoOf($generateCOROUTINE$70)['<get-exceptionState>'] = protoOf($generateCOROUTINE$70).x9;
  protoOf($generateCOROUTINE$70)['<set-result>'] = protoOf($generateCOROUTINE$70).y9;
  protoOf($generateCOROUTINE$70)['<get-result>'] = protoOf($generateCOROUTINE$70).z9;
  protoOf($generateCOROUTINE$70)['<set-exception>'] = protoOf($generateCOROUTINE$70).aa;
  protoOf($generateCOROUTINE$70)['<get-exception>'] = protoOf($generateCOROUTINE$70).ba;
  protoOf($generateCOROUTINE$70)['<set-finallyPath>'] = protoOf($generateCOROUTINE$70).ca;
  protoOf($generateCOROUTINE$70)['<get-finallyPath>'] = protoOf($generateCOROUTINE$70).da;
  protoOf($generateCOROUTINE$70)['<get-context>'] = protoOf($generateCOROUTINE$70).t9;
  function $importRawPublicKeyCOROUTINE$71(_this__u8e3s4, type, rawPublicKey, metadata, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w9f_1 = _this__u8e3s4;
    this.x9f_1 = type;
    this.y9f_1 = rawPublicKey;
    this.z9f_1 = metadata;
  }
  protoOf($importRawPublicKeyCOROUTINE$71).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = PromiseUtils_instance.k9f(jose.importSPKI(decodeToString(this.y9f_1), JwsUtils_instance.jwsAlg(this.x9f_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.a9g_1 = suspendResult;
            var tmp_0 = this;
            tmp_0.b9g_1 = jwkKeyUsingKeyLike(this.a9g_1);
            this.c9g_1 = this.b9g_1;
            var tmp_1 = this;
            tmp_1.d9g_1 = this.c9g_1;
            this.e9g_1 = this.d9g_1;
            this.n9_1 = 2;
            suspendResult = this.e9g_1.n6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return this.c9g_1;
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
  protoOf($importRawPublicKeyCOROUTINE$71)['<set-state>'] = protoOf($importRawPublicKeyCOROUTINE$71).u9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-state>'] = protoOf($importRawPublicKeyCOROUTINE$71).v9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<set-exceptionState>'] = protoOf($importRawPublicKeyCOROUTINE$71).w9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-exceptionState>'] = protoOf($importRawPublicKeyCOROUTINE$71).x9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<set-result>'] = protoOf($importRawPublicKeyCOROUTINE$71).y9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-result>'] = protoOf($importRawPublicKeyCOROUTINE$71).z9;
  protoOf($importRawPublicKeyCOROUTINE$71)['<set-exception>'] = protoOf($importRawPublicKeyCOROUTINE$71).aa;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-exception>'] = protoOf($importRawPublicKeyCOROUTINE$71).ba;
  protoOf($importRawPublicKeyCOROUTINE$71)['<set-finallyPath>'] = protoOf($importRawPublicKeyCOROUTINE$71).ca;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-finallyPath>'] = protoOf($importRawPublicKeyCOROUTINE$71).da;
  protoOf($importRawPublicKeyCOROUTINE$71)['<get-context>'] = protoOf($importRawPublicKeyCOROUTINE$71).t9;
  function $importJWKCOROUTINE$72(_this__u8e3s4, jwk, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n9g_1 = _this__u8e3s4;
    this.o9g_1 = jwk;
  }
  protoOf($importJWKCOROUTINE$72).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            tmp_0.p9g_1 = this.n9g_1;
            this.q9g_1 = this.p9g_1;
            this.o9_1 = 3;
            var tmp_1 = this;
            tmp_1.s9g_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.t9g_1 = this.q9g_1;
            this.u9g_1 = this.t9g_1;
            this.v9g_1 = JSON.parse(this.o9g_1);
            while (getKClassFromExpression(this.v9g_1).equals(PrimitiveClasses_getInstance().nd())) {
              var tmp_3 = this;
              var tmp_4 = JSON;
              var tmp_5 = this.v9g_1;
              tmp_3.v9g_1 = tmp_4.parse(typeof tmp_5 === 'string' ? tmp_5 : THROW_CCE());
            }

            this.n9_1 = 1;
            suspendResult = PromiseUtils_instance.k9f(jose.importJWK(this.v9g_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.w9g_1 = suspendResult;
            this.x9g_1 = jwkKeyUsingKeyLikeAndJWK(this.w9g_1, this.v9g_1);
            this.y9g_1 = this.x9g_1;
            var tmp_6 = this;
            tmp_6.z9g_1 = this.y9g_1;
            this.a9h_1 = this.z9g_1;
            this.n9_1 = 2;
            suspendResult = this.a9h_1.n6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp1 = this.y9g_1;
            var tmp_7 = this;
            this.s9g_1;
            tmp_7.r9g_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 4;
            this.n9_1 = 5;
            continue $sm;
          case 3:
            this.o9_1 = 4;
            var tmp_8 = this.q9_1;
            if (tmp_8 instanceof Error) {
              var e = this.q9_1;
              var tmp_9 = this;
              tmp_9.r9g_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 5;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            throw this.q9_1;
          case 5:
            this.o9_1 = 4;
            return new Result(this.r9g_1);
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
  protoOf($importJWKCOROUTINE$72)['<set-state>'] = protoOf($importJWKCOROUTINE$72).u9;
  protoOf($importJWKCOROUTINE$72)['<get-state>'] = protoOf($importJWKCOROUTINE$72).v9;
  protoOf($importJWKCOROUTINE$72)['<set-exceptionState>'] = protoOf($importJWKCOROUTINE$72).w9;
  protoOf($importJWKCOROUTINE$72)['<get-exceptionState>'] = protoOf($importJWKCOROUTINE$72).x9;
  protoOf($importJWKCOROUTINE$72)['<set-result>'] = protoOf($importJWKCOROUTINE$72).y9;
  protoOf($importJWKCOROUTINE$72)['<get-result>'] = protoOf($importJWKCOROUTINE$72).z9;
  protoOf($importJWKCOROUTINE$72)['<set-exception>'] = protoOf($importJWKCOROUTINE$72).aa;
  protoOf($importJWKCOROUTINE$72)['<get-exception>'] = protoOf($importJWKCOROUTINE$72).ba;
  protoOf($importJWKCOROUTINE$72)['<set-finallyPath>'] = protoOf($importJWKCOROUTINE$72).ca;
  protoOf($importJWKCOROUTINE$72)['<get-finallyPath>'] = protoOf($importJWKCOROUTINE$72).da;
  protoOf($importJWKCOROUTINE$72)['<get-context>'] = protoOf($importJWKCOROUTINE$72).t9;
  function $importPEMCOROUTINE$73(_this__u8e3s4, pem, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j9h_1 = _this__u8e3s4;
    this.k9h_1 = pem;
  }
  protoOf($importPEMCOROUTINE$73).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            tmp_0.l9h_1 = this.j9h_1;
            this.m9h_1 = this.l9h_1;
            this.o9_1 = 3;
            var tmp_1 = this;
            tmp_1.o9h_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.p9h_1 = this.m9h_1;
            this.q9h_1 = this.p9h_1;
            this.r9h_1 = lines(this.k9h_1);
            var tmp_3 = this;
            var tmp0 = this.r9h_1;
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
            tmp_3.s9h_1 = tmp$ret$0;
            var tmp_5 = this;
            var tmp2 = this.r9h_1;
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
            tmp_5.t9h_1 = tmp$ret$2;
            this.n9_1 = 1;
            var tmp_7 = PromiseUtils_instance;
            var tmp_8;
            if (this.s9h_1) {
              var tmp_9 = jose;
              var this_0 = this.r9h_1;
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
                  while (iterator.k5()) {
                    var it = iterator.m5();
                    if (!!importPEM$_anonymous_$isPemTitle_ja96c2(importPEM$_anonymous_$getPemTitle_j2mdle(it), 'END', 'PRIVATE KEY')) {
                      tmp$ret$4 = take(list, iterator.l5() + 1 | 0);
                      break l$ret$5;
                    }
                  }
                }
                tmp$ret$4 = emptyList();
              }
               while (false);
              tmp_8 = tmp_9.importPKCS8(joinToString(tmp$ret$4, '\n'), '');
            } else if (this.t9h_1) {
              var tmp_10 = jose;
              var this_1 = this.r9h_1;
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
                  while (iterator_0.k5()) {
                    var it_0 = iterator_0.m5();
                    if (!!importPEM$_anonymous_$isPemTitle_ja96c2(importPEM$_anonymous_$getPemTitle_j2mdle(it_0), 'END', 'PUBLIC KEY')) {
                      tmp$ret$6 = take(list_0, iterator_0.l5() + 1 | 0);
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

            suspendResult = tmp_7.k9f(tmp_8, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.u9h_1 = suspendResult;
            var tmp_11 = this;
            tmp_11.v9h_1 = jwkKeyUsingKeyLike(this.u9h_1);
            this.w9h_1 = this.v9h_1;
            var tmp_12 = this;
            tmp_12.x9h_1 = this.w9h_1;
            this.y9h_1 = this.x9h_1;
            this.n9_1 = 2;
            suspendResult = this.y9h_1.n6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp1 = this.w9h_1;
            var tmp_13 = this;
            this.o9h_1;
            tmp_13.n9h_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 4;
            this.n9_1 = 5;
            continue $sm;
          case 3:
            this.o9_1 = 4;
            var tmp_14 = this.q9_1;
            if (tmp_14 instanceof Error) {
              var e = this.q9_1;
              var tmp_15 = this;
              tmp_15.n9h_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 5;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            throw this.q9_1;
          case 5:
            this.o9_1 = 4;
            return new Result(this.n9h_1);
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
  protoOf($importPEMCOROUTINE$73)['<set-state>'] = protoOf($importPEMCOROUTINE$73).u9;
  protoOf($importPEMCOROUTINE$73)['<get-state>'] = protoOf($importPEMCOROUTINE$73).v9;
  protoOf($importPEMCOROUTINE$73)['<set-exceptionState>'] = protoOf($importPEMCOROUTINE$73).w9;
  protoOf($importPEMCOROUTINE$73)['<get-exceptionState>'] = protoOf($importPEMCOROUTINE$73).x9;
  protoOf($importPEMCOROUTINE$73)['<set-result>'] = protoOf($importPEMCOROUTINE$73).y9;
  protoOf($importPEMCOROUTINE$73)['<get-result>'] = protoOf($importPEMCOROUTINE$73).z9;
  protoOf($importPEMCOROUTINE$73)['<set-exception>'] = protoOf($importPEMCOROUTINE$73).aa;
  protoOf($importPEMCOROUTINE$73)['<get-exception>'] = protoOf($importPEMCOROUTINE$73).ba;
  protoOf($importPEMCOROUTINE$73)['<set-finallyPath>'] = protoOf($importPEMCOROUTINE$73).ca;
  protoOf($importPEMCOROUTINE$73)['<get-finallyPath>'] = protoOf($importPEMCOROUTINE$73).da;
  protoOf($importPEMCOROUTINE$73)['<get-context>'] = protoOf($importPEMCOROUTINE$73).t9;
  function JsJWKKeyCreator() {
  }
  protoOf(JsJWKKeyCreator).n84 = function (type, metadata, $completion) {
    var tmp = new $generateCOROUTINE$70(this, type, metadata, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JsJWKKeyCreator).a85 = function (type, rawPublicKey, metadata, $completion) {
    var tmp = new $importRawPublicKeyCOROUTINE$71(this, type, rawPublicKey, metadata, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JsJWKKeyCreator).t7i = function (jwk, $completion) {
    var tmp = new $importJWKCOROUTINE$72(this, jwk, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JsJWKKeyCreator).w77 = function (pem, $completion) {
    var tmp = new $importPEMCOROUTINE$73(this, pem, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JsJWKKeyCreator).b85 = function (jwk) {
    var tmp = JsJWKKeyCreator$importJWKAsync$slambda_0(jwk, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JsJWKKeyCreator).c85 = function (pem) {
    var tmp = JsJWKKeyCreator$importPEMAsync$slambda_0(pem, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JsJWKKeyCreator).d85 = function (type, metadata) {
    var tmp = JsJWKKeyCreator$generateAsync$slambda_0(type, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JsJWKKeyCreator).e85 = function (type, rawPublicKey, metadata) {
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
    this.h9i_1 = $resolved;
    this.i9i_1 = $json;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(resolveSerializedKeyBlocking$slambda).w1y = function ($this$launch, $completion) {
    var tmp = this.a1j($this$launch, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(resolveSerializedKeyBlocking$slambda).va = function (p1, $completion) {
    return this.w1y((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(resolveSerializedKeyBlocking$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = KeyManager_getInstance().p6v(this.i9i_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            this.h9i_1._v = ARGUMENT;
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
  protoOf(resolveSerializedKeyBlocking$slambda).a1j = function ($this$launch, completion) {
    var i = new resolveSerializedKeyBlocking$slambda(this.h9i_1, this.i9i_1, completion);
    i.j9i_1 = $this$launch;
    return i;
  };
  function resolveSerializedKeyBlocking$slambda_0($resolved, $json, resultContinuation) {
    var i = new resolveSerializedKeyBlocking$slambda($resolved, $json, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.w1y($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function JWKKey$Companion$importJWKAsync$slambda($jwk, resultContinuation) {
    this.s9i_1 = $jwk;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$Companion$importJWKAsync$slambda).q83 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey$Companion$importJWKAsync$slambda).ac = function ($completion) {
    return this.q83($completion);
  };
  protoOf(JWKKey$Companion$importJWKAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = Companion_instance_31.t7i(this.s9i_1, this);
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
  protoOf(JWKKey$Companion$importJWKAsync$slambda).ja = function (completion) {
    return new JWKKey$Companion$importJWKAsync$slambda(this.s9i_1, completion);
  };
  function JWKKey$Companion$importJWKAsync$slambda_0($jwk, resultContinuation) {
    var i = new JWKKey$Companion$importJWKAsync$slambda($jwk, resultContinuation);
    var l = function ($completion) {
      return i.q83($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$Companion$importPEMAsync$slambda($pem, resultContinuation) {
    this.b9j_1 = $pem;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$Companion$importPEMAsync$slambda).q83 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey$Companion$importPEMAsync$slambda).ac = function ($completion) {
    return this.q83($completion);
  };
  protoOf(JWKKey$Companion$importPEMAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = Companion_instance_31.w77(this.b9j_1, this);
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
  protoOf(JWKKey$Companion$importPEMAsync$slambda).ja = function (completion) {
    return new JWKKey$Companion$importPEMAsync$slambda(this.b9j_1, completion);
  };
  function JWKKey$Companion$importPEMAsync$slambda_0($pem, resultContinuation) {
    var i = new JWKKey$Companion$importPEMAsync$slambda($pem, resultContinuation);
    var l = function ($completion) {
      return i.q83($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$Companion$generateAsync$slambda($type, $metadata, resultContinuation) {
    this.k9j_1 = $type;
    this.l9j_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$Companion$generateAsync$slambda).m84 = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey$Companion$generateAsync$slambda).ac = function ($completion) {
    return this.m84($completion);
  };
  protoOf(JWKKey$Companion$generateAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_instance_31.n84(this.k9j_1, this.l9j_1, this);
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
  protoOf(JWKKey$Companion$generateAsync$slambda).ja = function (completion) {
    return new JWKKey$Companion$generateAsync$slambda(this.k9j_1, this.l9j_1, completion);
  };
  function JWKKey$Companion$generateAsync$slambda_0($type, $metadata, resultContinuation) {
    var i = new JWKKey$Companion$generateAsync$slambda($type, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.m84($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$Companion$importRawPublicKeyAsync$slambda($type, $rawPublicKey, $metadata, resultContinuation) {
    this.u9j_1 = $type;
    this.v9j_1 = $rawPublicKey;
    this.w9j_1 = $metadata;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$Companion$importRawPublicKeyAsync$slambda).x6m = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey$Companion$importRawPublicKeyAsync$slambda).ac = function ($completion) {
    return this.x6m($completion);
  };
  protoOf(JWKKey$Companion$importRawPublicKeyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_instance_31.a85(this.u9j_1, this.v9j_1, this.w9j_1, this);
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
  protoOf(JWKKey$Companion$importRawPublicKeyAsync$slambda).ja = function (completion) {
    return new JWKKey$Companion$importRawPublicKeyAsync$slambda(this.u9j_1, this.v9j_1, this.w9j_1, completion);
  };
  function JWKKey$Companion$importRawPublicKeyAsync$slambda_0($type, $rawPublicKey, $metadata, resultContinuation) {
    var i = new JWKKey$Companion$importRawPublicKeyAsync$slambda($type, $rawPublicKey, $metadata, resultContinuation);
    var l = function ($completion) {
      return i.x6m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function _get__internalKey__um3le0($this) {
    var tmp = $this.l9f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('_internalKey');
    }
  }
  function _get__internalJwk__um3bex($this) {
    var tmp = $this.m9f_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('_internalJwk');
    }
  }
  function JWKKey_init_$Init$(key, $this) {
    JWKKey.call($this, null);
    $this.l9f_1 = key;
    return $this;
  }
  function jwkKeyUsingKeyLike(key) {
    return JWKKey_init_$Init$(key, objectCreate(protoOf(JWKKey)));
  }
  function JWKKey_init_$Init$_0(key, jwk, $this) {
    JWKKey.call($this, null);
    $this.l9f_1 = key;
    $this.m9f_1 = jwk;
    return $this;
  }
  function jwkKeyUsingKeyLikeAndJWK(key, jwk) {
    return JWKKey_init_$Init$_0(key, jwk, objectCreate(protoOf(JWKKey)));
  }
  function JWKKey_init_$Init$_1(jwk, $this) {
    JWKKey.call($this, null);
    $this.m9f_1 = jwk;
    return $this;
  }
  function jwkKeyUsingJWK(jwk) {
    return JWKKey_init_$Init$_1(jwk, objectCreate(protoOf(JWKKey)));
  }
  function Companion_26() {
  }
  protoOf(Companion_26).n84 = function (type, metadata, $completion) {
    return JsJWKKeyCreator_instance.n84(type, metadata, $completion);
  };
  protoOf(Companion_26).a85 = function (type, rawPublicKey, metadata, $completion) {
    return JsJWKKeyCreator_instance.a85(type, rawPublicKey, metadata, $completion);
  };
  protoOf(Companion_26).t7i = function (jwk, $completion) {
    var tmp = JsJWKKeyCreator_instance.t7i(jwk, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(Companion_26).w77 = function (pem, $completion) {
    var tmp = JsJWKKeyCreator_instance.w77(pem, $completion);
    if (tmp === get_COROUTINE_SUSPENDED())
      return tmp;
    return tmp;
  };
  protoOf(Companion_26).b85 = function (jwk) {
    var tmp = JWKKey$Companion$importJWKAsync$slambda_0(jwk, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_26).c85 = function (pem) {
    var tmp = JWKKey$Companion$importPEMAsync$slambda_0(pem, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_26).d85 = function (type, metadata) {
    var tmp = JWKKey$Companion$generateAsync$slambda_0(type, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_26).e85 = function (type, rawPublicKey, metadata) {
    var tmp = JWKKey$Companion$importRawPublicKeyAsync$slambda_0(type, rawPublicKey, metadata, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Companion_26).m4u = function () {
    return $serializer_getInstance_21();
  };
  var Companion_instance_31;
  function Companion_getInstance_32() {
    return Companion_instance_31;
  }
  function $serializer_21() {
    $serializer_instance_21 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('jwk', this, 2);
    tmp0_serialDesc.x2b('jwk', false);
    tmp0_serialDesc.x2b('_keyId', true);
    tmp0_serialDesc.b2b(new JsonClassDiscriminator('type'));
    this.x9j_1 = tmp0_serialDesc;
  }
  protoOf($serializer_21).y9j = function (encoder, value) {
    var tmp0_desc = this.x9j_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.a26(tmp0_desc, 0, JWKKeyJsonFieldSerializer_getInstance(), value.jwk);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value._keyId == null)) {
      tmp1_output.a26(tmp0_desc, 1, StringSerializer_getInstance(), value._keyId);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_21).v20 = function (encoder, value) {
    return this.y9j(encoder, value instanceof JWKKey ? value : THROW_CCE());
  };
  protoOf($serializer_21).w20 = function (decoder) {
    var tmp0_desc = this.x9j_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp9_input = decoder.h24(tmp0_desc);
    if (tmp9_input.x24()) {
      tmp4_local0 = tmp9_input.v24(tmp0_desc, 0, JWKKeyJsonFieldSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.v24(tmp0_desc, 0, JWKKeyJsonFieldSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.v24(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.i24(tmp0_desc);
    return JWKKey_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_21).u20 = function () {
    return this.x9j_1;
  };
  protoOf($serializer_21).m2c = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_21().x9j_1);
    }
    Key_init_$Init$(seen0, serializationConstructorMarker, $this);
    $this.jwk = jwk;
    if (0 === (seen0 & 2))
      $this._keyId = null;
    else
      $this._keyId = _keyId;
    $this.n9f_1 = null;
    if (!($this.jwk == null)) {
      $this.n9f_1 = $this.jwk;
      $this.m9f_1 = JSON.parse(ensureNotNull($this.jwk));
    }
    return $this;
  }
  function JWKKey_init_$Create$(seen0, jwk, _keyId, serializationConstructorMarker) {
    return JWKKey_init_$Init$_2(seen0, jwk, _keyId, serializationConstructorMarker, objectCreate(protoOf(JWKKey)));
  }
  function JWKKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation) {
    this.h9k_1 = this$0;
    this.i9k_1 = $plaintext;
    this.j9k_1 = $headers;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$signJwsAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey$signJwsAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(JWKKey$signJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.h9k_1.h6l(this.i9k_1, this.j9k_1, this);
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
  protoOf(JWKKey$signJwsAsync$slambda).ja = function (completion) {
    return new JWKKey$signJwsAsync$slambda(this.h9k_1, this.i9k_1, this.j9k_1, completion);
  };
  function JWKKey$signJwsAsync$slambda_0(this$0, $plaintext, $headers, resultContinuation) {
    var i = new JWKKey$signJwsAsync$slambda(this$0, $plaintext, $headers, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$getKeyIdAsync$slambda(this$0, resultContinuation) {
    this.s9k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$getKeyIdAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey$getKeyIdAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(JWKKey$getKeyIdAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.s9k_1.d6m(this);
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
  protoOf(JWKKey$getKeyIdAsync$slambda).ja = function (completion) {
    return new JWKKey$getKeyIdAsync$slambda(this.s9k_1, completion);
  };
  function JWKKey$getKeyIdAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$getKeyIdAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$initAsync$slambda(this$0, resultContinuation) {
    this.b9l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$initAsync$slambda).s1x = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey$initAsync$slambda).ac = function ($completion) {
    return this.s1x($completion);
  };
  protoOf(JWKKey$initAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.b9l_1.n6m(this);
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
  protoOf(JWKKey$initAsync$slambda).ja = function (completion) {
    return new JWKKey$initAsync$slambda(this.b9l_1, completion);
  };
  function JWKKey$initAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$initAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.s1x($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$exportPEMAsync$slambda(this$0, resultContinuation) {
    this.k9l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$exportPEMAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey$exportPEMAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(JWKKey$exportPEMAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.k9l_1.t6n(this);
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
  protoOf(JWKKey$exportPEMAsync$slambda).ja = function (completion) {
    return new JWKKey$exportPEMAsync$slambda(this.k9l_1, completion);
  };
  function JWKKey$exportPEMAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$exportPEMAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$getThumbprintAsync$slambda(this$0, resultContinuation) {
    this.t9l_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$getThumbprintAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey$getThumbprintAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(JWKKey$getThumbprintAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.t9l_1.d6o(this);
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
  protoOf(JWKKey$getThumbprintAsync$slambda).ja = function (completion) {
    return new JWKKey$getThumbprintAsync$slambda(this.t9l_1, completion);
  };
  function JWKKey$getThumbprintAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$getThumbprintAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$exportJWKPrettyAsync$slambda(this$0, resultContinuation) {
    this.c9m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$exportJWKPrettyAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey$exportJWKPrettyAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(JWKKey$exportJWKPrettyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.c9m_1.n6o(this);
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
  protoOf(JWKKey$exportJWKPrettyAsync$slambda).ja = function (completion) {
    return new JWKKey$exportJWKPrettyAsync$slambda(this.c9m_1, completion);
  };
  function JWKKey$exportJWKPrettyAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$exportJWKPrettyAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation) {
    this.l9m_1 = this$0;
    this.m9m_1 = $signedJws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$verifyJwsAsync$slambda).y6o = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey$verifyJwsAsync$slambda).ac = function ($completion) {
    return this.y6o($completion);
  };
  protoOf(JWKKey$verifyJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.l9m_1.z6o(this.m9m_1, this);
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
  protoOf(JWKKey$verifyJwsAsync$slambda).ja = function (completion) {
    return new JWKKey$verifyJwsAsync$slambda(this.l9m_1, this.m9m_1, completion);
  };
  function JWKKey$verifyJwsAsync$slambda_0(this$0, $signedJws, resultContinuation) {
    var i = new JWKKey$verifyJwsAsync$slambda(this$0, $signedJws, resultContinuation);
    var l = function ($completion) {
      return i.y6o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$exportJWKAsync$slambda(this$0, resultContinuation) {
    this.v9m_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$exportJWKAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey$exportJWKAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(JWKKey$exportJWKAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.v9m_1.j6p(this);
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
  protoOf(JWKKey$exportJWKAsync$slambda).ja = function (completion) {
    return new JWKKey$exportJWKAsync$slambda(this.v9m_1, completion);
  };
  function JWKKey$exportJWKAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$exportJWKAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$exportJWKObjectAsync$slambda(this$0, resultContinuation) {
    this.e9n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$exportJWKObjectAsync$slambda).t6p = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey$exportJWKObjectAsync$slambda).ac = function ($completion) {
    return this.t6p($completion);
  };
  protoOf(JWKKey$exportJWKObjectAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.e9n_1.u6p(this);
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
  protoOf(JWKKey$exportJWKObjectAsync$slambda).ja = function (completion) {
    return new JWKKey$exportJWKObjectAsync$slambda(this.e9n_1, completion);
  };
  function JWKKey$exportJWKObjectAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$exportJWKObjectAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.t6p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation) {
    this.n9n_1 = this$0;
    this.o9n_1 = $signed;
    this.p9n_1 = $detachedPlaintext;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$verifyRawAsync$slambda).g6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey$verifyRawAsync$slambda).ac = function ($completion) {
    return this.g6q($completion);
  };
  protoOf(JWKKey$verifyRawAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.n9n_1.h6q(this.o9n_1, this.p9n_1, this);
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
  protoOf(JWKKey$verifyRawAsync$slambda).ja = function (completion) {
    return new JWKKey$verifyRawAsync$slambda(this.n9n_1, this.o9n_1, this.p9n_1, completion);
  };
  function JWKKey$verifyRawAsync$slambda_0(this$0, $signed, $detachedPlaintext, resultContinuation) {
    var i = new JWKKey$verifyRawAsync$slambda(this$0, $signed, $detachedPlaintext, resultContinuation);
    var l = function ($completion) {
      return i.g6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JWKKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation) {
    this.y9n_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JWKKey$getPublicKeyRepresentationAsync$slambda).r6q = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey$getPublicKeyRepresentationAsync$slambda).ac = function ($completion) {
    return this.r6q($completion);
  };
  protoOf(JWKKey$getPublicKeyRepresentationAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.y9n_1.s6q(this);
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
  protoOf(JWKKey$getPublicKeyRepresentationAsync$slambda).ja = function (completion) {
    return new JWKKey$getPublicKeyRepresentationAsync$slambda(this.y9n_1, completion);
  };
  function JWKKey$getPublicKeyRepresentationAsync$slambda_0(this$0, resultContinuation) {
    var i = new JWKKey$getPublicKeyRepresentationAsync$slambda(this$0, resultContinuation);
    var l = function ($completion) {
      return i.r6q($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $initCOROUTINE$74(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h9o_1 = _this__u8e3s4;
  }
  protoOf($initCOROUTINE$74).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 10;
            if (!!(this.h9o_1.l9f_1 == null)) {
              if (!(this.h9o_1.n9f_1 == null)) {
                this.n9_1 = 2;
                suspendResult = PromiseUtils_instance.k9f(jose.importJWK(JSON.parse(ensureNotNull(this.h9o_1.n9f_1))), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                if (!(this.h9o_1.m9f_1 == null)) {
                  this.n9_1 = 1;
                  suspendResult = PromiseUtils_instance.k9f(jose.importJWK(_get__internalJwk__um3bex(this.h9o_1)), this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.n9_1 = 3;
                  continue $sm;
                }
              }
            } else {
              this.n9_1 = 4;
              continue $sm;
            }

          case 1:
            this.i9o_1 = suspendResult;
            this.h9o_1.l9f_1 = this.i9o_1;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.j9o_1 = suspendResult;
            this.h9o_1.l9f_1 = this.j9o_1;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.n9_1 = 4;
            continue $sm;
          case 4:
            if (!!(this.h9o_1.m9f_1 == null)) {
              if (!(this.h9o_1.n9f_1 == null)) {
                this.h9o_1.m9f_1 = JSON.parse(ensureNotNull(this.h9o_1.n9f_1));
                if (_get__internalJwk__um3bex(this.h9o_1).kid == null) {
                  this.k9o_1 = _get__internalJwk__um3bex(this.h9o_1);
                  this.n9_1 = 6;
                  suspendResult = this.h9o_1.d6o(this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.n9_1 = 7;
                  continue $sm;
                }
              } else {
                this.n9_1 = 5;
                suspendResult = PromiseUtils_instance.k9f(jose.exportJWK(_get__internalKey__um3le0(this.h9o_1)), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.n9_1 = 9;
              continue $sm;
            }

          case 5:
            var ARGUMENT = suspendResult;
            this.h9o_1.m9f_1 = ARGUMENT;
            if (this.h9o_1.jwk == null) {
              this.h9o_1.jwk = JSON.stringify(_get__internalJwk__um3bex(this.h9o_1));
            }

            this.n9_1 = 8;
            continue $sm;
          case 6:
            var ARGUMENT_0 = suspendResult;
            this.k9o_1.kid = ARGUMENT_0;
            this.n9_1 = 7;
            continue $sm;
          case 7:
            this.n9_1 = 8;
            continue $sm;
          case 8:
            this.n9_1 = 9;
            continue $sm;
          case 9:
            if (!(this.h9o_1.n9f_1 == null)) {
              this.h9o_1.n9f_1 = null;
            }

            return Unit_instance;
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
  protoOf($initCOROUTINE$74)['<set-state>'] = protoOf($initCOROUTINE$74).u9;
  protoOf($initCOROUTINE$74)['<get-state>'] = protoOf($initCOROUTINE$74).v9;
  protoOf($initCOROUTINE$74)['<set-exceptionState>'] = protoOf($initCOROUTINE$74).w9;
  protoOf($initCOROUTINE$74)['<get-exceptionState>'] = protoOf($initCOROUTINE$74).x9;
  protoOf($initCOROUTINE$74)['<set-result>'] = protoOf($initCOROUTINE$74).y9;
  protoOf($initCOROUTINE$74)['<get-result>'] = protoOf($initCOROUTINE$74).z9;
  protoOf($initCOROUTINE$74)['<set-exception>'] = protoOf($initCOROUTINE$74).aa;
  protoOf($initCOROUTINE$74)['<get-exception>'] = protoOf($initCOROUTINE$74).ba;
  protoOf($initCOROUTINE$74)['<set-finallyPath>'] = protoOf($initCOROUTINE$74).ca;
  protoOf($initCOROUTINE$74)['<get-finallyPath>'] = protoOf($initCOROUTINE$74).da;
  protoOf($initCOROUTINE$74)['<get-context>'] = protoOf($initCOROUTINE$74).t9;
  function $exportJWKObjectCOROUTINE$75(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t9o_1 = _this__u8e3s4;
  }
  protoOf($exportJWKObjectCOROUTINE$75).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.u9o_1 = Default_getInstance();
            this.n9_1 = 1;
            suspendResult = this.t9o_1.j6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = this.u9o_1.h4s(ARGUMENT);
            return get_jsonObject(ARGUMENT_0);
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
  protoOf($exportJWKObjectCOROUTINE$75)['<set-state>'] = protoOf($exportJWKObjectCOROUTINE$75).u9;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-state>'] = protoOf($exportJWKObjectCOROUTINE$75).v9;
  protoOf($exportJWKObjectCOROUTINE$75)['<set-exceptionState>'] = protoOf($exportJWKObjectCOROUTINE$75).w9;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-exceptionState>'] = protoOf($exportJWKObjectCOROUTINE$75).x9;
  protoOf($exportJWKObjectCOROUTINE$75)['<set-result>'] = protoOf($exportJWKObjectCOROUTINE$75).y9;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-result>'] = protoOf($exportJWKObjectCOROUTINE$75).z9;
  protoOf($exportJWKObjectCOROUTINE$75)['<set-exception>'] = protoOf($exportJWKObjectCOROUTINE$75).aa;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-exception>'] = protoOf($exportJWKObjectCOROUTINE$75).ba;
  protoOf($exportJWKObjectCOROUTINE$75)['<set-finallyPath>'] = protoOf($exportJWKObjectCOROUTINE$75).ca;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-finallyPath>'] = protoOf($exportJWKObjectCOROUTINE$75).da;
  protoOf($exportJWKObjectCOROUTINE$75)['<get-context>'] = protoOf($exportJWKObjectCOROUTINE$75).t9;
  function $exportPEMCOROUTINE$76(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d9p_1 = _this__u8e3s4;
  }
  protoOf($exportPEMCOROUTINE$76).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            if (this.d9p_1.hasPrivateKey) {
              this.n9_1 = 2;
              suspendResult = PromiseUtils_instance.k9f(jose.exportPKCS8(_get__internalKey__um3le0(this.d9p_1)), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 1;
              suspendResult = PromiseUtils_instance.k9f(jose.exportSPKI(_get__internalKey__um3le0(this.d9p_1)), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.e9p_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.e9p_1 = suspendResult;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            return this.e9p_1;
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
  protoOf($exportPEMCOROUTINE$76)['<set-state>'] = protoOf($exportPEMCOROUTINE$76).u9;
  protoOf($exportPEMCOROUTINE$76)['<get-state>'] = protoOf($exportPEMCOROUTINE$76).v9;
  protoOf($exportPEMCOROUTINE$76)['<set-exceptionState>'] = protoOf($exportPEMCOROUTINE$76).w9;
  protoOf($exportPEMCOROUTINE$76)['<get-exceptionState>'] = protoOf($exportPEMCOROUTINE$76).x9;
  protoOf($exportPEMCOROUTINE$76)['<set-result>'] = protoOf($exportPEMCOROUTINE$76).y9;
  protoOf($exportPEMCOROUTINE$76)['<get-result>'] = protoOf($exportPEMCOROUTINE$76).z9;
  protoOf($exportPEMCOROUTINE$76)['<set-exception>'] = protoOf($exportPEMCOROUTINE$76).aa;
  protoOf($exportPEMCOROUTINE$76)['<get-exception>'] = protoOf($exportPEMCOROUTINE$76).ba;
  protoOf($exportPEMCOROUTINE$76)['<set-finallyPath>'] = protoOf($exportPEMCOROUTINE$76).ca;
  protoOf($exportPEMCOROUTINE$76)['<get-finallyPath>'] = protoOf($exportPEMCOROUTINE$76).da;
  protoOf($exportPEMCOROUTINE$76)['<get-context>'] = protoOf($exportPEMCOROUTINE$76).t9;
  function $signRawCOROUTINE$77(_this__u8e3s4, plaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n9p_1 = _this__u8e3s4;
    this.o9p_1 = plaintext;
  }
  protoOf($signRawCOROUTINE$77).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            if (!this.n9p_1.hasPrivateKey) {
              var message = 'No private key is attached to this key!';
              throw IllegalStateException_init_$Create$(toString_0(message));
            }

            this.p9p_1 = crypto;
            var tmp_0 = this;
            tmp_0.q9p_1 = this.n9p_1.keyType.t2_1 === 0 ? null : 'sha256';
            this.n9_1 = 1;
            suspendResult = this.n9p_1.t6n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.p9p_1.sign(this.q9p_1, this.o9p_1, ARGUMENT);
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
  protoOf($signRawCOROUTINE$77)['<set-state>'] = protoOf($signRawCOROUTINE$77).u9;
  protoOf($signRawCOROUTINE$77)['<get-state>'] = protoOf($signRawCOROUTINE$77).v9;
  protoOf($signRawCOROUTINE$77)['<set-exceptionState>'] = protoOf($signRawCOROUTINE$77).w9;
  protoOf($signRawCOROUTINE$77)['<get-exceptionState>'] = protoOf($signRawCOROUTINE$77).x9;
  protoOf($signRawCOROUTINE$77)['<set-result>'] = protoOf($signRawCOROUTINE$77).y9;
  protoOf($signRawCOROUTINE$77)['<get-result>'] = protoOf($signRawCOROUTINE$77).z9;
  protoOf($signRawCOROUTINE$77)['<set-exception>'] = protoOf($signRawCOROUTINE$77).aa;
  protoOf($signRawCOROUTINE$77)['<get-exception>'] = protoOf($signRawCOROUTINE$77).ba;
  protoOf($signRawCOROUTINE$77)['<set-finallyPath>'] = protoOf($signRawCOROUTINE$77).ca;
  protoOf($signRawCOROUTINE$77)['<get-finallyPath>'] = protoOf($signRawCOROUTINE$77).da;
  protoOf($signRawCOROUTINE$77)['<get-context>'] = protoOf($signRawCOROUTINE$77).t9;
  function $verifyRawCOROUTINE$78(_this__u8e3s4, signed, detachedPlaintext, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z9p_1 = _this__u8e3s4;
    this.a9q_1 = signed;
    this.b9q_1 = detachedPlaintext;
  }
  protoOf($verifyRawCOROUTINE$78).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            var tmp_0 = this;
            tmp_0.c9q_1 = this.z9p_1;
            this.d9q_1 = this.c9q_1;
            this.o9_1 = 3;
            var tmp_1 = this;
            tmp_1.f9q_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.g9q_1 = this.d9q_1;
            this.h9q_1 = this.g9q_1;
            this.i9q_1 = crypto;
            var tmp_3 = this;
            tmp_3.j9q_1 = this.h9q_1.keyType.t2_1 === 0 ? null : 'sha256';
            var tmp_4 = this;
            var tmp1_elvis_lhs = this.b9q_1;
            tmp_4.k9q_1 = tmp1_elvis_lhs == null ? this.a9q_1 : tmp1_elvis_lhs;
            this.n9_1 = 1;
            suspendResult = this.h9q_1.m9q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l9q_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.l9q_1.t6n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var verified = this.i9q_1.verify(this.j9q_1, this.k9q_1, ARGUMENT, this.a9q_1);
            var tmp_5;
            if (verified) {
              tmp_5 = toByteArray_0('true');
            } else {
              throw IllegalArgumentException_init_$Create$('Signature verification failed');
            }

            var tmp1 = tmp_5;
            var tmp_6 = this;
            this.f9q_1;
            tmp_6.e9q_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 4;
            this.n9_1 = 5;
            continue $sm;
          case 3:
            this.o9_1 = 4;
            var tmp_7 = this.q9_1;
            if (tmp_7 instanceof Error) {
              var e = this.q9_1;
              var tmp_8 = this;
              tmp_8.e9q_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 5;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 4:
            throw this.q9_1;
          case 5:
            this.o9_1 = 4;
            return new Result(this.e9q_1);
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
  protoOf($verifyRawCOROUTINE$78)['<set-state>'] = protoOf($verifyRawCOROUTINE$78).u9;
  protoOf($verifyRawCOROUTINE$78)['<get-state>'] = protoOf($verifyRawCOROUTINE$78).v9;
  protoOf($verifyRawCOROUTINE$78)['<set-exceptionState>'] = protoOf($verifyRawCOROUTINE$78).w9;
  protoOf($verifyRawCOROUTINE$78)['<get-exceptionState>'] = protoOf($verifyRawCOROUTINE$78).x9;
  protoOf($verifyRawCOROUTINE$78)['<set-result>'] = protoOf($verifyRawCOROUTINE$78).y9;
  protoOf($verifyRawCOROUTINE$78)['<get-result>'] = protoOf($verifyRawCOROUTINE$78).z9;
  protoOf($verifyRawCOROUTINE$78)['<set-exception>'] = protoOf($verifyRawCOROUTINE$78).aa;
  protoOf($verifyRawCOROUTINE$78)['<get-exception>'] = protoOf($verifyRawCOROUTINE$78).ba;
  protoOf($verifyRawCOROUTINE$78)['<set-finallyPath>'] = protoOf($verifyRawCOROUTINE$78).ca;
  protoOf($verifyRawCOROUTINE$78)['<get-finallyPath>'] = protoOf($verifyRawCOROUTINE$78).da;
  protoOf($verifyRawCOROUTINE$78)['<get-context>'] = protoOf($verifyRawCOROUTINE$78).t9;
  function $verifyJwsCOROUTINE$79(_this__u8e3s4, signedJws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.v9q_1 = _this__u8e3s4;
    this.w9q_1 = signedJws;
  }
  protoOf($verifyJwsCOROUTINE$79).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.x9q_1 = this.v9q_1;
            this.y9q_1 = this.x9q_1;
            this.o9_1 = 2;
            var tmp_1 = this;
            tmp_1.a9r_1 = Companion_instance_1;
            var tmp_2 = this;
            tmp_2.b9r_1 = this.y9q_1;
            this.c9r_1 = this.b9r_1;
            this.d9r_1 = Default_getInstance();
            this.e9r_1 = ArrayUtils_instance;
            this.n9_1 = 1;
            suspendResult = PromiseUtils_instance.k9f(jose.compactVerify(this.w9q_1, _get__internalKey__um3le0(this.c9r_1)), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = ARGUMENT.payload;
            var ARGUMENT_1 = this.e9r_1.toByteArray(ARGUMENT_0);
            var ARGUMENT_2 = decodeToString(ARGUMENT_1);
            var ARGUMENT_3 = this.d9r_1.h4s(ARGUMENT_2);
            var tmp1 = get_jsonObject(ARGUMENT_3);
            var tmp_3 = this;
            this.a9r_1;
            tmp_3.z9q_1 = _Result___init__impl__xyqfz8(tmp1);
            this.o9_1 = 3;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            this.o9_1 = 3;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof Error) {
              var e = this.q9_1;
              var tmp_5 = this;
              tmp_5.z9q_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 4;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 3:
            throw this.q9_1;
          case 4:
            this.o9_1 = 3;
            return new Result(this.z9q_1);
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
  protoOf($verifyJwsCOROUTINE$79)['<set-state>'] = protoOf($verifyJwsCOROUTINE$79).u9;
  protoOf($verifyJwsCOROUTINE$79)['<get-state>'] = protoOf($verifyJwsCOROUTINE$79).v9;
  protoOf($verifyJwsCOROUTINE$79)['<set-exceptionState>'] = protoOf($verifyJwsCOROUTINE$79).w9;
  protoOf($verifyJwsCOROUTINE$79)['<get-exceptionState>'] = protoOf($verifyJwsCOROUTINE$79).x9;
  protoOf($verifyJwsCOROUTINE$79)['<set-result>'] = protoOf($verifyJwsCOROUTINE$79).y9;
  protoOf($verifyJwsCOROUTINE$79)['<get-result>'] = protoOf($verifyJwsCOROUTINE$79).z9;
  protoOf($verifyJwsCOROUTINE$79)['<set-exception>'] = protoOf($verifyJwsCOROUTINE$79).aa;
  protoOf($verifyJwsCOROUTINE$79)['<get-exception>'] = protoOf($verifyJwsCOROUTINE$79).ba;
  protoOf($verifyJwsCOROUTINE$79)['<set-finallyPath>'] = protoOf($verifyJwsCOROUTINE$79).ca;
  protoOf($verifyJwsCOROUTINE$79)['<get-finallyPath>'] = protoOf($verifyJwsCOROUTINE$79).da;
  protoOf($verifyJwsCOROUTINE$79)['<get-context>'] = protoOf($verifyJwsCOROUTINE$79).t9;
  function $getPublicKeyCOROUTINE$80(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n9r_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyCOROUTINE$80).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            var this_0 = JSON.parse(JSON.stringify(_get__internalJwk__um3bex(this.n9r_1)));
            this_0.d = undefined;
            this_0.p = undefined;
            this_0.q = undefined;
            this_0.dp = undefined;
            this_0.dq = undefined;
            this_0.qi = undefined;
            this_0.k = undefined;
            tmp_0.o9r_1 = jwkKeyUsingJWK(this_0);
            this.p9r_1 = this.o9r_1;
            var tmp_1 = this;
            tmp_1.q9r_1 = this.p9r_1;
            this.r9r_1 = this.q9r_1;
            this.n9_1 = 1;
            suspendResult = this.r9r_1.n6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return this.p9r_1;
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
  protoOf($getPublicKeyCOROUTINE$80)['<set-state>'] = protoOf($getPublicKeyCOROUTINE$80).u9;
  protoOf($getPublicKeyCOROUTINE$80)['<get-state>'] = protoOf($getPublicKeyCOROUTINE$80).v9;
  protoOf($getPublicKeyCOROUTINE$80)['<set-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$80).w9;
  protoOf($getPublicKeyCOROUTINE$80)['<get-exceptionState>'] = protoOf($getPublicKeyCOROUTINE$80).x9;
  protoOf($getPublicKeyCOROUTINE$80)['<set-result>'] = protoOf($getPublicKeyCOROUTINE$80).y9;
  protoOf($getPublicKeyCOROUTINE$80)['<get-result>'] = protoOf($getPublicKeyCOROUTINE$80).z9;
  protoOf($getPublicKeyCOROUTINE$80)['<set-exception>'] = protoOf($getPublicKeyCOROUTINE$80).aa;
  protoOf($getPublicKeyCOROUTINE$80)['<get-exception>'] = protoOf($getPublicKeyCOROUTINE$80).ba;
  protoOf($getPublicKeyCOROUTINE$80)['<set-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$80).ca;
  protoOf($getPublicKeyCOROUTINE$80)['<get-finallyPath>'] = protoOf($getPublicKeyCOROUTINE$80).da;
  protoOf($getPublicKeyCOROUTINE$80)['<get-context>'] = protoOf($getPublicKeyCOROUTINE$80).t9;
  function $getPublicKeyRepresentationCOROUTINE$81(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a9s_1 = _this__u8e3s4;
  }
  protoOf($getPublicKeyRepresentationCOROUTINE$81).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.a9s_1.m9q(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b9s_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = this.b9s_1.t6n(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return toByteArray_0(ARGUMENT);
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
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<set-state>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).u9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-state>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).v9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<set-exceptionState>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).w9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-exceptionState>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).x9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<set-result>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).y9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-result>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).z9;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<set-exception>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).aa;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-exception>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).ba;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<set-finallyPath>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).ca;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-finallyPath>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).da;
  protoOf($getPublicKeyRepresentationCOROUTINE$81)['<get-context>'] = protoOf($getPublicKeyRepresentationCOROUTINE$81).t9;
  function $getMetaCOROUTINE$82(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.k9s_1 = _this__u8e3s4;
  }
  protoOf($getMetaCOROUTINE$82).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.k9s_1.d6m(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new JwkKeyMeta(ARGUMENT);
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
  protoOf($getMetaCOROUTINE$82)['<set-state>'] = protoOf($getMetaCOROUTINE$82).u9;
  protoOf($getMetaCOROUTINE$82)['<get-state>'] = protoOf($getMetaCOROUTINE$82).v9;
  protoOf($getMetaCOROUTINE$82)['<set-exceptionState>'] = protoOf($getMetaCOROUTINE$82).w9;
  protoOf($getMetaCOROUTINE$82)['<get-exceptionState>'] = protoOf($getMetaCOROUTINE$82).x9;
  protoOf($getMetaCOROUTINE$82)['<set-result>'] = protoOf($getMetaCOROUTINE$82).y9;
  protoOf($getMetaCOROUTINE$82)['<get-result>'] = protoOf($getMetaCOROUTINE$82).z9;
  protoOf($getMetaCOROUTINE$82)['<set-exception>'] = protoOf($getMetaCOROUTINE$82).aa;
  protoOf($getMetaCOROUTINE$82)['<get-exception>'] = protoOf($getMetaCOROUTINE$82).ba;
  protoOf($getMetaCOROUTINE$82)['<set-finallyPath>'] = protoOf($getMetaCOROUTINE$82).ca;
  protoOf($getMetaCOROUTINE$82)['<get-finallyPath>'] = protoOf($getMetaCOROUTINE$82).da;
  protoOf($getMetaCOROUTINE$82)['<get-context>'] = protoOf($getMetaCOROUTINE$82).t9;
  function $getKeyIdCOROUTINE$83(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t9s_1 = _this__u8e3s4;
  }
  protoOf($getKeyIdCOROUTINE$83).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this.t9s_1._keyId;
            tmp_0.u9s_1 = tmp0_elvis_lhs == null ? _get__internalJwk__um3bex(this.t9s_1).kid : tmp0_elvis_lhs;
            if (this.u9s_1 == null) {
              this.n9_1 = 1;
              suspendResult = this.t9s_1.d6o(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.v9s_1 = this.u9s_1;
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.v9s_1 = suspendResult;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return this.v9s_1;
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
  protoOf($getKeyIdCOROUTINE$83)['<set-state>'] = protoOf($getKeyIdCOROUTINE$83).u9;
  protoOf($getKeyIdCOROUTINE$83)['<get-state>'] = protoOf($getKeyIdCOROUTINE$83).v9;
  protoOf($getKeyIdCOROUTINE$83)['<set-exceptionState>'] = protoOf($getKeyIdCOROUTINE$83).w9;
  protoOf($getKeyIdCOROUTINE$83)['<get-exceptionState>'] = protoOf($getKeyIdCOROUTINE$83).x9;
  protoOf($getKeyIdCOROUTINE$83)['<set-result>'] = protoOf($getKeyIdCOROUTINE$83).y9;
  protoOf($getKeyIdCOROUTINE$83)['<get-result>'] = protoOf($getKeyIdCOROUTINE$83).z9;
  protoOf($getKeyIdCOROUTINE$83)['<set-exception>'] = protoOf($getKeyIdCOROUTINE$83).aa;
  protoOf($getKeyIdCOROUTINE$83)['<get-exception>'] = protoOf($getKeyIdCOROUTINE$83).ba;
  protoOf($getKeyIdCOROUTINE$83)['<set-finallyPath>'] = protoOf($getKeyIdCOROUTINE$83).ca;
  protoOf($getKeyIdCOROUTINE$83)['<get-finallyPath>'] = protoOf($getKeyIdCOROUTINE$83).da;
  protoOf($getKeyIdCOROUTINE$83)['<get-context>'] = protoOf($getKeyIdCOROUTINE$83).t9;
  function $getThumbprintCOROUTINE$84(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.e9t_1 = _this__u8e3s4;
  }
  protoOf($getThumbprintCOROUTINE$84).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.f9t_1 = PromiseUtils_instance;
            this.g9t_1 = jose;
            this.h9t_1 = JSON;
            this.n9_1 = 1;
            suspendResult = this.e9t_1.j6p(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.i9t_1 = suspendResult;
            this.j9t_1 = this.h9t_1.parse(this.i9t_1);
            this.k9t_1 = this.g9t_1.calculateJwkThumbprint(this.j9t_1);
            this.n9_1 = 2;
            suspendResult = this.f9t_1.k9f(this.k9t_1, this);
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
  protoOf($getThumbprintCOROUTINE$84)['<set-state>'] = protoOf($getThumbprintCOROUTINE$84).u9;
  protoOf($getThumbprintCOROUTINE$84)['<get-state>'] = protoOf($getThumbprintCOROUTINE$84).v9;
  protoOf($getThumbprintCOROUTINE$84)['<set-exceptionState>'] = protoOf($getThumbprintCOROUTINE$84).w9;
  protoOf($getThumbprintCOROUTINE$84)['<get-exceptionState>'] = protoOf($getThumbprintCOROUTINE$84).x9;
  protoOf($getThumbprintCOROUTINE$84)['<set-result>'] = protoOf($getThumbprintCOROUTINE$84).y9;
  protoOf($getThumbprintCOROUTINE$84)['<get-result>'] = protoOf($getThumbprintCOROUTINE$84).z9;
  protoOf($getThumbprintCOROUTINE$84)['<set-exception>'] = protoOf($getThumbprintCOROUTINE$84).aa;
  protoOf($getThumbprintCOROUTINE$84)['<get-exception>'] = protoOf($getThumbprintCOROUTINE$84).ba;
  protoOf($getThumbprintCOROUTINE$84)['<set-finallyPath>'] = protoOf($getThumbprintCOROUTINE$84).ca;
  protoOf($getThumbprintCOROUTINE$84)['<get-finallyPath>'] = protoOf($getThumbprintCOROUTINE$84).da;
  protoOf($getThumbprintCOROUTINE$84)['<get-context>'] = protoOf($getThumbprintCOROUTINE$84).t9;
  function JWKKey(jwk, _keyId) {
    _keyId = _keyId === VOID ? null : _keyId;
    Key.call(this);
    this.jwk = jwk;
    this._keyId = _keyId;
    this.n9f_1 = null;
    if (!(this.jwk == null)) {
      this.n9f_1 = this.jwk;
      this.m9f_1 = JSON.parse(ensureNotNull(this.jwk));
    }
  }
  protoOf(JWKKey).l9t = function (_set____db54di) {
    this.jwk = _set____db54di;
  };
  protoOf(JWKKey).m9t = function () {
    return this.jwk;
  };
  protoOf(JWKKey).n9t = function () {
    return this._keyId;
  };
  protoOf(JWKKey).n6m = function ($completion) {
    var tmp = new $initCOROUTINE$74(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey).j6p = function ($completion) {
    return JSON.stringify(_get__internalJwk__um3bex(this));
  };
  protoOf(JWKKey).n6o = function ($completion) {
    return JSON.stringify(_get__internalJwk__um3bex(this), null, 4);
  };
  protoOf(JWKKey).u6p = function ($completion) {
    var tmp = new $exportJWKObjectCOROUTINE$75(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey).t6n = function ($completion) {
    var tmp = new $exportPEMCOROUTINE$76(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey).s7a = function (plaintext, $completion) {
    var tmp = new $signRawCOROUTINE$77(this, plaintext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey).t6l = function (plaintext, $completion) {
    return this.s7a(plaintext, $completion);
  };
  protoOf(JWKKey).h6l = function (plaintext, headers, $completion) {
    // Inline function 'kotlin.check' call
    if (!this.hasPrivateKey) {
      var message = 'No private key is attached to this key!';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = headers.z();
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
      var tmp$ret$4 = new Pair(item.a1(), item.b1());
      destination.n(tmp$ret$4);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var headerEntries = copyToArray(destination);
    return PromiseUtils_instance.k9f((new jose.CompactSign(new Uint8Array(toTypedArray(plaintext)))).setProtectedHeader(json_0(arrayConcat([[to('alg', JwsUtils_instance.jwsAlg(this.keyType))], headerEntries]))).sign(_get__internalKey__um3le0(this)), $completion);
  };
  protoOf(JWKKey).h6q = function (signed, detachedPlaintext, $completion) {
    var tmp = new $verifyRawCOROUTINE$78(this, signed, detachedPlaintext, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey).z6o = function (signedJws, $completion) {
    var tmp = new $verifyJwsCOROUTINE$79(this, signedJws, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JWKKey).m9q = function ($completion) {
    var tmp = new $getPublicKeyCOROUTINE$80(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey).y6m = function ($completion) {
    return this.m9q($completion);
  };
  protoOf(JWKKey).s6q = function ($completion) {
    var tmp = new $getPublicKeyRepresentationCOROUTINE$81(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey).o9t = function ($completion) {
    var tmp = new $getMetaCOROUTINE$82(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey).j6n = function ($completion) {
    return this.o9t($completion);
  };
  protoOf(JWKKey).u6k = function ($completion) {
    return true;
  };
  protoOf(JWKKey).h6r = function () {
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
  protoOf(JWKKey).i6r = function () {
    // Inline function 'kotlin.check' call
    if (!!(this.l9f_1 == null)) {
      var message = '_internalKey of JWKKey.js.kt is not initialized (tried to to private key operation?) - has init() be called on key?';
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.run' call
    return _get__internalKey__um3le0(this).type === 'private';
  };
  protoOf(JWKKey).d6m = function ($completion) {
    var tmp = new $getKeyIdCOROUTINE$83(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey).d6o = function ($completion) {
    var tmp = new $getThumbprintCOROUTINE$84(this, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JWKKey).k6r = function (plaintext, headers) {
    var tmp = JWKKey$signJwsAsync$slambda_0(this, plaintext, headers, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).m6r = function () {
    var tmp = JWKKey$getKeyIdAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).n6r = function () {
    var tmp = JWKKey$initAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).q6r = function () {
    var tmp = JWKKey$exportPEMAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).r6r = function () {
    var tmp = JWKKey$getThumbprintAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).s6r = function () {
    var tmp = JWKKey$exportJWKPrettyAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).t6r = function (signedJws) {
    var tmp = JWKKey$verifyJwsAsync$slambda_0(this, signedJws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).u6r = function () {
    var tmp = JWKKey$exportJWKAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).v6r = function () {
    var tmp = JWKKey$exportJWKObjectAsync$slambda_0(this, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).w6r = function (signed, detachedPlaintext) {
    var tmp = JWKKey$verifyRawAsync$slambda_0(this, signed, detachedPlaintext, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JWKKey).x6r = function () {
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
      this_0.ia(tmp$ret$0);
      return Unit_instance;
    };
  }
  function PromiseUtils$await$lambda_0($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.failure' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
      this_0.ia(tmp$ret$0);
      return Unit_instance;
    };
  }
  function PromiseUtils() {
  }
  protoOf(PromiseUtils).k9f = function (promise, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    var tmp = PromiseUtils$await$lambda(safe);
    promise.then(tmp, PromiseUtils$await$lambda_0(safe));
    return safe.ra();
  };
  var PromiseUtils_instance;
  function PromiseUtils_getInstance() {
    return PromiseUtils_instance;
  }
  //region block: post-declaration
  defineProp(protoOf(Key), 'keyType', function () {
    return this.h6r();
  });
  defineProp(protoOf(Key), 'hasPrivateKey', function () {
    return this.i6r();
  });
  protoOf($serializer).n2c = typeParametersSerializers;
  protoOf($serializer_0).n2c = typeParametersSerializers;
  protoOf($serializer_1).n2c = typeParametersSerializers;
  protoOf($serializer_2).n2c = typeParametersSerializers;
  protoOf($serializer_3).n2c = typeParametersSerializers;
  protoOf($serializer_4).n2c = typeParametersSerializers;
  defineProp(protoOf(KeyType), 'name', protoOf(KeyType).u2);
  defineProp(protoOf(KeyType), 'ordinal', protoOf(KeyType).v2);
  defineProp(protoOf(KeyCategory), 'name', protoOf(KeyCategory).u2);
  defineProp(protoOf(KeyCategory), 'ordinal', protoOf(KeyCategory).v2);
  protoOf($serializer_5).n2c = typeParametersSerializers;
  protoOf($serializer_6).n2c = typeParametersSerializers;
  protoOf($serializer_7).n2c = typeParametersSerializers;
  defineProp(protoOf(AWSKeyRestAPI), 'keyType', function () {
    return this.h6r();
  }, function (value) {
    this.d7k(value);
  });
  protoOf($serializer_8).n2c = typeParametersSerializers;
  protoOf($serializer_9).n2c = typeParametersSerializers;
  protoOf($serializer_10).n2c = typeParametersSerializers;
  protoOf($serializer_11).n2c = typeParametersSerializers;
  protoOf($serializer_12).n2c = typeParametersSerializers;
  defineProp(protoOf(AzureKey), 'keyType', function () {
    return this.h6r();
  }, function (value) {
    this.d7k(value);
  });
  protoOf($serializer_13).n2c = typeParametersSerializers;
  protoOf($serializer_14).n2c = typeParametersSerializers;
  protoOf($serializer_15).n2c = typeParametersSerializers;
  defineProp(protoOf(OCIKeyRestApi), 'keyType', function () {
    return this.h6r();
  }, function (value) {
    this.d7k(value);
  });
  protoOf($serializer_16).n2c = typeParametersSerializers;
  protoOf($serializer_17).n2c = typeParametersSerializers;
  defineProp(protoOf(TSEKey), 'keyType', function () {
    return this.h6r();
  }, function (value) {
    this.d7k(value);
  });
  protoOf($serializer_18).n2c = typeParametersSerializers;
  protoOf($serializer_19).n2c = typeParametersSerializers;
  protoOf($serializer_20).n2c = typeParametersSerializers;
  defineProp(protoOf(UVarInt), 'length', protoOf(UVarInt).a);
  protoOf(JsJWKKeyCreator).generate$default = generate$default;
  protoOf(JsJWKKeyCreator).importRawPublicKey$default = importRawPublicKey$default;
  protoOf(JsJWKKeyCreator).generateAsync$default = generateAsync$default;
  protoOf(JsJWKKeyCreator).importRawPublicKeyAsync$default = importRawPublicKeyAsync$default;
  protoOf(Companion_26).generate$default = generate$default;
  protoOf(Companion_26).importRawPublicKey$default = importRawPublicKey$default;
  protoOf(Companion_26).generateAsync$default = generateAsync$default;
  protoOf(Companion_26).importRawPublicKeyAsync$default = importRawPublicKeyAsync$default;
  protoOf($serializer_21).n2c = typeParametersSerializers;
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
  UuidUtils_instance = new UuidUtils();
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
    defineProp($id$walt$crypto$keys.Key, 'Companion', Companion_getInstance_5);
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
    defineProp($id$walt$crypto$keys.KeyType, 'Companion', Companion_getInstance_14);
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
    defineProp($id$walt$crypto$keys$aws.AWSAuth, 'Companion', Companion_getInstance_15);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$aws = $id$walt$crypto$keys.aws || ($id$walt$crypto$keys.aws = {});
    $id$walt$crypto$keys$aws.AWSKeyRestAPI = AWSKeyRestAPI;
    defineProp($id$walt$crypto$keys$aws.AWSKeyRestAPI, 'Companion', Companion_getInstance_17);
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
    defineProp($id$walt$crypto$keys$azure.AzureAuth, 'Companion', Companion_getInstance_18);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$azure = $id$walt$crypto$keys.azure || ($id$walt$crypto$keys.azure = {});
    $id$walt$crypto$keys$azure.AzureKey = AzureKey;
    $id$walt$crypto$keys$azure.AzureKey.KeyCreateRequest = KeyCreateRequest;
    defineProp($id$walt$crypto$keys$azure.AzureKey.KeyCreateRequest, 'Companion', Companion_getInstance_19);
    defineProp($id$walt$crypto$keys$azure.AzureKey, 'AzureKeyFunctions', AzureKeyFunctions_getInstance);
    AzureKeyFunctions.prototype.ParsedAzurePublicKey = ParsedAzurePublicKey;
    AzureKeyFunctions.prototype.AzureTokenResponse = AzureTokenResponse;
    defineProp(AzureKeyFunctions.prototype.AzureTokenResponse, 'Companion', Companion_getInstance_20);
    AzureKeyFunctions.prototype.AzureTokenResponseParsed = AzureTokenResponseParsed;
    defineProp(AzureKeyFunctions.prototype.AzureTokenResponseParsed, 'Companion', Companion_getInstance_21);
    AzureKeyFunctions.prototype.$fetchAccessTokenCOROUTINE$34 = $fetchAccessTokenCOROUTINE$34;
    defineProp($id$walt$crypto$keys$azure.AzureKey, 'Companion', Companion_getInstance_22);
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
    defineProp($id$walt$crypto$keys$oci.OCIKeyMetadata, 'Companion', Companion_getInstance_24);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$oci = $id$walt$crypto$keys.oci || ($id$walt$crypto$keys.oci = {});
    $id$walt$crypto$keys$oci.OCIKeyRestApi = OCIKeyRestApi;
    defineProp($id$walt$crypto$keys$oci.OCIKeyRestApi, 'Companion', Companion_getInstance_25);
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
    defineProp($id$walt$crypto$keys$tse.TSEAuth, 'Companion', Companion_getInstance_26);
    $id$walt$crypto$keys$tse.TSEAuth.$getLoginTokenCOROUTINE$52 = $getLoginTokenCOROUTINE$52;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$keys = $id$walt$crypto.keys || ($id$walt$crypto.keys = {});
    var $id$walt$crypto$keys$tse = $id$walt$crypto$keys.tse || ($id$walt$crypto$keys.tse = {});
    $id$walt$crypto$keys$tse.TSEKey = TSEKey;
    $id$walt$crypto$keys$tse.TSEKey.httpRequest$default = httpRequest$default;
    defineProp($id$walt$crypto$keys$tse.TSEKey, 'Companion', Companion_getInstance_27);
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
    defineProp($id$walt$crypto$keys$tse.TSEKeyMetadata, 'Companion', Companion_getInstance_28);
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
    defineProp(JwsUtils.prototype.JwsParts, 'Companion', Companion_getInstance_29);
    JwsUtils.prototype.JwsPartsSdJwt = JwsPartsSdJwt;
    defineProp(JwsUtils.prototype.JwsPartsSdJwt, 'Companion', Companion_getInstance_30);
    JwsUtils.prototype.JwsStringParts = JwsStringParts;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$crypto = $id$walt.crypto || ($id$walt.crypto = {});
    var $id$walt$crypto$utils = $id$walt$crypto.utils || ($id$walt$crypto.utils = {});
    defineProp($id$walt$crypto$utils, 'MultiCodecUtils', MultiCodecUtils_getInstance);
    MultiCodecUtils.prototype.UVarInt = UVarInt;
    defineProp(MultiCodecUtils.prototype.UVarInt, 'Companion', Companion_getInstance_31);
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
    defineProp($id$walt$crypto$keys$jwk.JWKKey, 'Companion', Companion_getInstance_32);
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
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = KeyType_Ed25519_getInstance;
  _.$_$.b = Companion_instance_31;
  _.$_$.c = Companion_getInstance_5;
  _.$_$.d = Base64Utils_getInstance;
  _.$_$.e = JsonCanonicalizationUtils_instance;
  _.$_$.f = JsonUtils_getInstance;
  _.$_$.g = JwsUtils_instance;
  _.$_$.h = MultiBaseUtils_instance;
  _.$_$.i = MultiCodecUtils_getInstance;
  _.$_$.j = UuidUtils_instance;
  _.$_$.k = VerificationException;
  _.$_$.l = JWKKey;
  _.$_$.m = get_entries;
  _.$_$.n = values;
  _.$_$.o = KeyType;
  _.$_$.p = decodeBase58;
  //endregion
  return _;
}));

//# sourceMappingURL=crypto.js.map
