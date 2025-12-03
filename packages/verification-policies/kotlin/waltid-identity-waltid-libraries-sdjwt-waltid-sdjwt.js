(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'jose', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlin-logging.js', './Kotlin-DateTime-library-kotlinx-datetime.js', './korge-root-krypto.js', './cryptography-kotlin-cryptography-random.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('jose'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlin-logging.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./korge-root-krypto.js'), require('./cryptography-kotlin-cryptography-random.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof jose === 'undefined') {
      throw new Error("Error loading module 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'. Its dependency 'jose' was not found. Please, check whether 'jose' is loaded prior to 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'.");
    }
    if (typeof globalThis['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'.");
    }
    if (typeof globalThis['korge-root-krypto'] === 'undefined') {
      throw new Error("Error loading module 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'. Its dependency 'korge-root-krypto' was not found. Please, check whether 'korge-root-krypto' is loaded prior to 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'.");
    }
    if (typeof globalThis['cryptography-kotlin-cryptography-random'] === 'undefined') {
      throw new Error("Error loading module 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'. Its dependency 'cryptography-kotlin-cryptography-random' was not found. Please, check whether 'cryptography-kotlin-cryptography-random' is loaded prior to 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'.");
    }
    globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'] = factory(typeof globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'] === 'undefined' ? {} : globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'], jose, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlin-logging'], globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['korge-root-krypto'], globalThis['cryptography-kotlin-cryptography-random'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, jose, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_github_oshai_kotlin_logging, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_com_soywiz_korlibs_krypto_krypto, kotlin_dev_whyoleg_cryptography_cryptography_random, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.be;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var toString = kotlin_kotlin.$_$.fe;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.r;
  var lazy = kotlin_kotlin.$_$.ik;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c1;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b1;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.z1;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var THROW_IAE = kotlin_kotlin.$_$.lj;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var Enum = kotlin_kotlin.$_$.xi;
  var defineProp = kotlin_kotlin.$_$.qc;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.l8;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var put = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g1;
  var Companion_getInstance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.b;
  var ASCII_instance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var get_long = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d1;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.v;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var JsonNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var put_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h1;
  var toString_0 = kotlin_kotlin.$_$.pk;
  var getBooleanHashCode = kotlin_kotlin.$_$.tc;
  var hashCode = kotlin_kotlin.$_$.wc;
  var equals = kotlin_kotlin.$_$.rc;
  var CoroutineImpl = kotlin_kotlin.$_$.bc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.lb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.o1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var MatchNamedGroupCollection = kotlin_kotlin.$_$.lf;
  var isInterface = kotlin_kotlin.$_$.md;
  var charArrayOf = kotlin_kotlin.$_$.kc;
  var trim = kotlin_kotlin.$_$.ji;
  var split = kotlin_kotlin.$_$.ch;
  var toSet = kotlin_kotlin.$_$.fb;
  var emptySet = kotlin_kotlin.$_$.m8;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var decodeToString = kotlin_kotlin.$_$.rf;
  var endsWith = kotlin_kotlin.$_$.xf;
  var contains = kotlin_kotlin.$_$.pf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var get_contentOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.x;
  var listOf = kotlin_kotlin.$_$.q9;
  var plus = kotlin_kotlin.$_$.ca;
  var emptyList = kotlin_kotlin.$_$.k8;
  var joinToString = kotlin_kotlin.$_$.e9;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var NotImplementedError = kotlin_kotlin.$_$.ej;
  var substringBefore = kotlin_kotlin.$_$.lh;
  var substringAfter = kotlin_kotlin.$_$.kh;
  var Pair = kotlin_kotlin.$_$.hj;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var mapCapacity = kotlin_kotlin.$_$.s9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var listOf_0 = kotlin_kotlin.$_$.r9;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a1;
  var coerceAtLeast = kotlin_kotlin.$_$.me;
  var plus_0 = kotlin_kotlin.$_$.x9;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.z;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var put_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f1;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.v6;
  var KtMap = kotlin_kotlin.$_$.w6;
  var toMap = kotlin_kotlin.$_$.ya;
  var encodeToByteArray = kotlin_kotlin.$_$.uf;
  var sha256 = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.d;
  var Default_getInstance_0 = kotlin_dev_whyoleg_cryptography_cryptography_random.$_$.a;
  var JsonArrayBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var add = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.u;
  var toMutableMap = kotlin_kotlin.$_$.db;
  var filterNotNull = kotlin_kotlin.$_$.p8;
  var SecureRandom_getInstance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.c;
  var numberToInt = kotlin_kotlin.$_$.yd;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var addAll = kotlin_kotlin.$_$.f7;
  var asSequence = kotlin_kotlin.$_$.j7;
  var map = kotlin_kotlin.$_$.ef;
  var filter = kotlin_kotlin.$_$.bf;
  var flatMap = kotlin_kotlin.$_$.cf;
  var toList = kotlin_kotlin.$_$.hf;
  var Default_getInstance_1 = kotlin_kotlin.$_$.r5;
  var PaddingOption_ABSENT_OPTIONAL_getInstance = kotlin_kotlin.$_$.k;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var replace = kotlin_kotlin.$_$.zg;
  var trimEnd = kotlin_kotlin.$_$.gi;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var initMetadataForLambda = kotlin_kotlin.$_$.cd;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var copyToArray = kotlin_kotlin.$_$.f8;
  var joinToString_0 = kotlin_kotlin.$_$.f9;
  var println = kotlin_kotlin.$_$.ec;
  var plus_1 = kotlin_kotlin.$_$.y9;
  var toList_0 = kotlin_kotlin.$_$.wa;
  var Companion_instance = kotlin_kotlin.$_$.g6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v3;
  var intercepted = kotlin_kotlin.$_$.ob;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.n1;
  //endregion
  //region block: pre-declaration
  function sign$default(payload, keyID, $completion, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.mc5(payload, keyID, $completion) : $super.mc5.call(this, payload, keyID, $completion);
  }
  initMetadataForInterface(AsyncJWTCryptoProvider, 'AsyncJWTCryptoProvider', VOID, VOID, VOID, [2, 1]);
  initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
  initMetadataForClass(DecoyMode, 'DecoyMode', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_0});
  function sign(payload, keyID, typ, headers, $super) {
    keyID = keyID === VOID ? null : keyID;
    typ = typ === VOID ? 'JWT' : typ;
    var tmp;
    if (headers === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = headers;
    }
    headers = tmp;
    return $super === VOID ? this.tc5(payload, keyID, typ, headers) : $super.tc5.call(this, payload, keyID, typ, headers);
  }
  function verify(jwt, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.uc5(jwt, keyID) : $super.uc5.call(this, jwt, keyID);
  }
  initMetadataForInterface(JWTCryptoProvider, 'JWTCryptoProvider');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(SDJwt, 'SDJwt', VOID, VOID, VOID, [1]);
  initMetadataForClass(KeyBindingJwt, 'KeyBindingJwt', VOID, SDJwt, VOID, [1]);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SDField, 'SDField', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCoroutine($signAsyncCOROUTINE$1, CoroutineImpl);
  initMetadataForCompanion(Companion_2, VOID, VOID, [2, 3]);
  initMetadataForCoroutine($verifyAsyncCOROUTINE$0, CoroutineImpl);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(SDJwtVC, 'SDJwtVC', VOID, SDJwt, VOID, [1]);
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SDMap, 'SDMap', VOID, VOID, [KtMap], VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForClass(zzz_unused_SDMapBuilder, 'SDMapBuilder', zzz_unused_SDMapBuilder);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(SDPayload, 'SDPayload');
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(SDisclosure, 'SDisclosure');
  initMetadataForObject(SdjwtStringUtils, 'SdjwtStringUtils');
  initMetadataForClass(JwtVerificationResult, 'JwtVerificationResult');
  initMetadataForClass(VerificationResult, 'VerificationResult');
  initMetadataForClass(VCVerificationResult, 'VCVerificationResult');
  initMetadataForObject(Base64Utils, 'Base64Utils');
  initMetadataForInterface(JSAsyncJWTCryptoProvider, 'JSAsyncJWTCryptoProvider', VOID, VOID, [AsyncJWTCryptoProvider], [2, 1]);
  initMetadataForLambda(SDJwtJS$Companion$verifyAndParseAsync$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SDJwtJS$Companion$signAsync$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_7);
  initMetadataForLambda(SDJwtJS$verifyAsyncJs$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SDJwtJS$presentAllAsync$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SDJwtJS$presentAsync$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SDJwtJS, 'SDJwtJS', VOID, SDJwt, VOID, [1]);
  initMetadataForClass(SDMapBuilder, 'SDMapBuilderJS', SDMapBuilder);
  initMetadataForClass(SDPayloadBuilder, 'SDPayloadBuilder');
  initMetadataForLambda(SimpleAsyncJWTCryptoProvider$signAsync$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SimpleAsyncJWTCryptoProvider, 'SimpleAsyncJWTCryptoProvider', VOID, VOID, [JSAsyncJWTCryptoProvider], [2, 1]);
  //endregion
  function AsyncJWTCryptoProvider() {
  }
  function get_log() {
    _init_properties_DecoyMode_kt__a1j5q5();
    return log;
  }
  var log;
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.pc5_1.b1();
  }
  function DecoyMode$Companion$fromJSON$lambda($json) {
    return function () {
      return 'Parsing DecoyMode from ' + toString($json);
    };
  }
  function DecoyMode$Companion$_anonymous__jwwj4w() {
    return createSimpleEnumSerializer('id.walt.sdjwt.DecoyMode', values());
  }
  var DecoyMode_NONE_instance;
  var DecoyMode_FIXED_instance;
  var DecoyMode_RANDOM_instance;
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.pc5_1 = lazy(tmp_0, DecoyMode$Companion$_anonymous__jwwj4w);
  }
  protoOf(Companion).qc5 = function (json) {
    var tmp = get_log();
    tmp.l6g(DecoyMode$Companion$fromJSON$lambda(json));
    var tmp_0;
    if (json instanceof JsonObject) {
      var tmp0_safe_receiver = get_jsonObject(json).af('name');
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
    } else {
      tmp_0 = get_jsonPrimitive(json).q4u();
    }
    var tmp2_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp2_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = valueOf(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_1;
    var tmp_2;
    if (tmp3_elvis_lhs == null) {
      throw Exception_init_$Create$('Error parsing DecoyMode from JSON value');
    } else {
      tmp_2 = tmp3_elvis_lhs;
    }
    return tmp_2;
  };
  protoOf(Companion).m4u = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).x2c = function (typeParamsSerializers) {
    return this.m4u();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    DecoyMode_initEntries();
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function values() {
    return [DecoyMode_NONE_getInstance(), DecoyMode_FIXED_getInstance(), DecoyMode_RANDOM_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'NONE':
        return DecoyMode_NONE_getInstance();
      case 'FIXED':
        return DecoyMode_FIXED_getInstance();
      case 'RANDOM':
        return DecoyMode_RANDOM_getInstance();
      default:
        DecoyMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var DecoyMode_entriesInitialized;
  function DecoyMode_initEntries() {
    if (DecoyMode_entriesInitialized)
      return Unit_instance;
    DecoyMode_entriesInitialized = true;
    DecoyMode_NONE_instance = new DecoyMode('NONE', 0);
    DecoyMode_FIXED_instance = new DecoyMode('FIXED', 1);
    DecoyMode_RANDOM_instance = new DecoyMode('RANDOM', 2);
    Companion_getInstance_0();
  }
  function DecoyMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function log$lambda() {
    _init_properties_DecoyMode_kt__a1j5q5();
    return Unit_instance;
  }
  function DecoyMode_NONE_getInstance() {
    DecoyMode_initEntries();
    return DecoyMode_NONE_instance;
  }
  function DecoyMode_FIXED_getInstance() {
    DecoyMode_initEntries();
    return DecoyMode_FIXED_instance;
  }
  function DecoyMode_RANDOM_getInstance() {
    DecoyMode_initEntries();
    return DecoyMode_RANDOM_instance;
  }
  var properties_initialized_DecoyMode_kt_hllzr3;
  function _init_properties_DecoyMode_kt__a1j5q5() {
    if (!properties_initialized_DecoyMode_kt_hllzr3) {
      properties_initialized_DecoyMode_kt_hllzr3 = true;
      var tmp = KotlinLogging_instance;
      log = tmp.w6g(log$lambda);
    }
  }
  function JWTCryptoProvider() {
  }
  function Companion_0() {
    this.KB_JWT_TYPE = 'kb+jwt';
  }
  protoOf(Companion_0).vc5 = function () {
    return this.KB_JWT_TYPE;
  };
  protoOf(Companion_0).parse = function (kbJwt) {
    // Inline function 'kotlin.let' call
    var it = Companion_getInstance_3().parse(kbJwt);
    return new KeyBindingJwt(it.jwt, it.header, new SDPayload(it.zzz_unused_fullPayload));
  };
  protoOf(Companion_0).wc5 = function (presentedSdJwt, audience, nonce, cryptoProvider, keyId) {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    builder.c4v('iat', JsonPrimitive(System_instance.d5v().z5z()));
    put(builder, 'aud', audience);
    put(builder, 'nonce', nonce);
    put(builder, 'sd_hash', Companion_instance_1.getSdHash(presentedSdJwt));
    var tmp$ret$1 = builder.o4t();
    return this.parse(cryptoProvider.sign(tmp$ret$1, keyId, 'kb+jwt'));
  };
  protoOf(Companion_0).sign = function (presentedSdJwt, audience, nonce, cryptoProvider, keyId, $super) {
    keyId = keyId === VOID ? null : keyId;
    return $super === VOID ? this.wc5(presentedSdJwt, audience, nonce, cryptoProvider, keyId) : $super.wc5.call(this, presentedSdJwt, audience, nonce, cryptoProvider, keyId);
  };
  protoOf(Companion_0).getSdHash = function (presentedSdJwt) {
    return Companion_getInstance().g6i(ASCII_instance.jc5(presentedSdJwt)).uc3();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function KeyBindingJwt(jwt, header, payload) {
    SDJwt.call(this, jwt, header, payload);
  }
  protoOf(KeyBindingJwt).xc5 = function () {
    return get_long(get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.af('iat'))));
  };
  protoOf(KeyBindingJwt).yc5 = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.af('aud'))).q4u();
  };
  protoOf(KeyBindingJwt).zc5 = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.af('nonce'))).q4u();
  };
  protoOf(KeyBindingJwt).ac6 = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.af('sd_hash'))).q4u();
  };
  protoOf(KeyBindingJwt).bc6 = function (jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId) {
    return this.type === 'kb+jwt' && this.audience === reqAudience && this.nonce === reqNonce && sdJwt.isPresentation && Companion_instance_1.getSdHash(sdJwt.toFormattedString(true, false)) === this.sdHash && this.verify(jwtCryptoProvider, keyId).verified;
  };
  protoOf(KeyBindingJwt).verifyKB = function (jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId, $super) {
    keyId = keyId === VOID ? null : keyId;
    return $super === VOID ? this.bc6(jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId) : $super.bc6.call(this, jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId);
  };
  function get_log_0() {
    _init_properties_SDField_kt__146q95();
    return log_0;
  }
  var log_0;
  function SDField$Companion$fromJSON$lambda($json) {
    return function () {
      return 'Parsing SDField from ' + toString($json);
    };
  }
  function Companion_1() {
  }
  protoOf(Companion_1).qc5 = function (json) {
    var tmp = get_log_0();
    tmp.l6g(SDField$Companion$fromJSON$lambda(json));
    var tmp0_safe_receiver = get_jsonObject(json).af('sd');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : get_boolean(tmp1_safe_receiver);
    var tmp_0;
    if (tmp2_elvis_lhs == null) {
      var message = 'Error parsing SDField.sd from JSON element';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp2_elvis_lhs;
    }
    var tmp_1 = tmp_0;
    var tmp3_safe_receiver = get_jsonObject(json).af('children');
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_3;
      if (tmp3_safe_receiver instanceof JsonObject) {
        // Inline function 'kotlin.let' call
        var it = get_jsonObject(tmp3_safe_receiver);
        tmp_3 = Companion_getInstance_5().wc6(it);
      } else {
        if (tmp3_safe_receiver instanceof JsonNull) {
          tmp_3 = null;
        } else {
          var message_0 = 'Error parsing SDField.children from JSON element';
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
      tmp_2 = tmp_3;
    }
    return new SDField(tmp_1, tmp_2);
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.sdjwt.SDField', this, 2);
    tmp0_serialDesc.x2b('sd', false);
    tmp0_serialDesc.x2b('children', true);
    this.xc6_1 = tmp0_serialDesc;
  }
  protoOf($serializer).yc6 = function (encoder, value) {
    var tmp0_desc = this.xc6_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.o25(tmp0_desc, 0, value.sd);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !(value.children == null)) {
      tmp1_output.a26(tmp0_desc, 1, $serializer_getInstance_0(), value.children);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer).v20 = function (encoder, value) {
    return this.yc6(encoder, value instanceof SDField ? value : THROW_CCE());
  };
  protoOf($serializer).w20 = function (decoder) {
    var tmp0_desc = this.xc6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_input = decoder.h24(tmp0_desc);
    if (tmp6_input.x24()) {
      tmp4_local0 = tmp6_input.j24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.y24(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.j24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.v24(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.i24(tmp0_desc);
    return SDField_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).u20 = function () {
    return this.xc6_1;
  };
  protoOf($serializer).m2c = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [BooleanSerializer_getInstance(), get_nullable($serializer_getInstance_0())];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function SDField_init_$Init$(seen0, sd, children, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance().xc6_1);
    }
    $this.sd = sd;
    if (0 === (seen0 & 2))
      $this.children = null;
    else
      $this.children = children;
    return $this;
  }
  function SDField_init_$Create$(seen0, sd, children, serializationConstructorMarker) {
    return SDField_init_$Init$(seen0, sd, children, serializationConstructorMarker, objectCreate(protoOf(SDField)));
  }
  function SDField(sd, children) {
    children = children === VOID ? null : children;
    this.sd = sd;
    this.children = children;
  }
  protoOf(SDField).zc6 = function () {
    return this.sd;
  };
  protoOf(SDField).ac7 = function () {
    return this.children;
  };
  protoOf(SDField).bc7 = function () {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    put_0(builder, 'sd', this.sd);
    var tmp0_safe_receiver = this.children;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      builder.c4v('children', tmp0_safe_receiver.bc7());
    }
    return builder.o4t();
  };
  protoOf(SDField).dc = function () {
    return this.sd;
  };
  protoOf(SDField).ec = function () {
    return this.children;
  };
  protoOf(SDField).fc7 = function (sd, children) {
    return new SDField(sd, children);
  };
  protoOf(SDField).copy = function (sd, children, $super) {
    sd = sd === VOID ? this.sd : sd;
    children = children === VOID ? this.children : children;
    return $super === VOID ? this.fc7(sd, children) : $super.fc7.call(this, sd, children);
  };
  protoOf(SDField).toString = function () {
    return 'SDField(sd=' + this.sd + ', children=' + toString_0(this.children) + ')';
  };
  protoOf(SDField).hashCode = function () {
    var result = getBooleanHashCode(this.sd);
    result = imul(result, 31) + (this.children == null ? 0 : hashCode(this.children)) | 0;
    return result;
  };
  protoOf(SDField).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SDField))
      return false;
    var tmp0_other_with_cast = other instanceof SDField ? other : THROW_CCE();
    if (!(this.sd === tmp0_other_with_cast.sd))
      return false;
    if (!equals(this.children, tmp0_other_with_cast.children))
      return false;
    return true;
  };
  function log$lambda_0() {
    _init_properties_SDField_kt__146q95();
    return Unit_instance;
  }
  var properties_initialized_SDField_kt_li51ll;
  function _init_properties_SDField_kt__146q95() {
    if (!properties_initialized_SDField_kt_li51ll) {
      properties_initialized_SDField_kt_li51ll = true;
      var tmp = KotlinLogging_instance;
      log_0 = tmp.w6g(log$lambda_0);
    }
  }
  function $signAsyncCOROUTINE$1(_this__u8e3s4, sdPayload, jwtCryptoProvider, keyID, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oc7_1 = _this__u8e3s4;
    this.pc7_1 = sdPayload;
    this.qc7_1 = jwtCryptoProvider;
    this.rc7_1 = keyID;
  }
  protoOf($signAsyncCOROUTINE$1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.qc7_1.mc5(this.pc7_1.undisclosedPayload, this.rc7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.oc7_1.createFromSignedJwt(ARGUMENT, this.pc7_1);
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
  protoOf($signAsyncCOROUTINE$1)['<set-state>'] = protoOf($signAsyncCOROUTINE$1).u9;
  protoOf($signAsyncCOROUTINE$1)['<get-state>'] = protoOf($signAsyncCOROUTINE$1).v9;
  protoOf($signAsyncCOROUTINE$1)['<set-exceptionState>'] = protoOf($signAsyncCOROUTINE$1).w9;
  protoOf($signAsyncCOROUTINE$1)['<get-exceptionState>'] = protoOf($signAsyncCOROUTINE$1).x9;
  protoOf($signAsyncCOROUTINE$1)['<set-result>'] = protoOf($signAsyncCOROUTINE$1).y9;
  protoOf($signAsyncCOROUTINE$1)['<get-result>'] = protoOf($signAsyncCOROUTINE$1).z9;
  protoOf($signAsyncCOROUTINE$1)['<set-exception>'] = protoOf($signAsyncCOROUTINE$1).aa;
  protoOf($signAsyncCOROUTINE$1)['<get-exception>'] = protoOf($signAsyncCOROUTINE$1).ba;
  protoOf($signAsyncCOROUTINE$1)['<set-finallyPath>'] = protoOf($signAsyncCOROUTINE$1).ca;
  protoOf($signAsyncCOROUTINE$1)['<get-finallyPath>'] = protoOf($signAsyncCOROUTINE$1).da;
  protoOf($signAsyncCOROUTINE$1)['<get-context>'] = protoOf($signAsyncCOROUTINE$1).t9;
  function SDJwt_init_$Init$(sdJwt, $this) {
    SDJwt.call($this, sdJwt.jwt, sdJwt.header, sdJwt.sdPayload, sdJwt.keyBindingJwt, sdJwt.isPresentation);
    return $this;
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.DIGESTS_KEY = '_sd';
    this.SEPARATOR = _Char___init__impl__6a9atx(126);
    this.SEPARATOR_STR = '~';
    this.SD_JWT_PATTERN = '^(?<sdjwt>(?<header>[A-Za-z0-9-_]+)\\.(?<body>[A-Za-z0-9-_]+)\\.(?<signature>[A-Za-z0-9-_]+))(?<disclosures>(~([A-Za-z0-9-_]+))+)?(~(?<kbjwt>([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+))?)?$';
  }
  protoOf(Companion_2).sc7 = function () {
    return this.DIGESTS_KEY;
  };
  protoOf(Companion_2).tc7 = function () {
    return this.SEPARATOR;
  };
  protoOf(Companion_2).uc7 = function () {
    return this.SEPARATOR_STR;
  };
  protoOf(Companion_2).vc7 = function () {
    return this.SD_JWT_PATTERN;
  };
  protoOf(Companion_2).parse = function (sdJwt) {
    var tmp0_elvis_lhs = Regex_init_$Create$('^(?<sdjwt>(?<header>[A-Za-z0-9-_]+)\\.(?<body>[A-Za-z0-9-_]+)\\.(?<signature>[A-Za-z0-9-_]+))(?<disclosures>(~([A-Za-z0-9-_]+))+)?(~(?<kbjwt>([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+))?)?$').ve(sdJwt);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Invalid SD-JWT format: ' + sdJwt);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var matchResult = tmp;
    var tmp_0 = matchResult.ef();
    var matchedGroups = isInterface(tmp_0, MatchNamedGroupCollection) ? tmp_0 : THROW_CCE();
    var tmp1_safe_receiver = matchedGroups.af('disclosures');
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ze_1;
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : trim(tmp2_safe_receiver, charArrayOf([_Char___init__impl__6a9atx(126)]));
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : split(tmp3_safe_receiver, charArrayOf([_Char___init__impl__6a9atx(126)]));
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : toSet(tmp4_safe_receiver);
    var tmp_1;
    if (tmp5_elvis_lhs == null) {
      // Inline function 'kotlin.collections.setOf' call
      tmp_1 = emptySet();
    } else {
      tmp_1 = tmp5_elvis_lhs;
    }
    var disclosures = tmp_1;
    var tmp_2 = ensureNotNull(matchedGroups.af('sdjwt')).ze_1;
    var tmp_3 = get_jsonObject(Default_getInstance().h4s(decodeToString(SdjwtStringUtils_getInstance().xc7(ensureNotNull(matchedGroups.af('header')).ze_1))));
    var tmp_4 = Companion_getInstance_6().zc7(ensureNotNull(matchedGroups.af('body')).ze_1, disclosures);
    var tmp6_safe_receiver = matchedGroups.af('kbjwt');
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.ze_1;
    var tmp_5;
    if (tmp7_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_5 = Companion_instance_1.parse(tmp7_safe_receiver);
    }
    return new SDJwt(tmp_2, tmp_3, tmp_4, tmp_5, !(matchedGroups.af('kbjwt') == null) || endsWith(sdJwt, '~'));
  };
  protoOf(Companion_2).verifyAndParse = function (sdJwt, jwtCryptoProvider) {
    return this.parse(sdJwt).verify(jwtCryptoProvider);
  };
  protoOf(Companion_2).ac8 = function (sdJwt, jwtCryptoProvider, $completion) {
    return this.parse(sdJwt).uc6(jwtCryptoProvider, $completion);
  };
  protoOf(Companion_2).bc8 = function (signedJwt, sdPayload, withKBJwt) {
    var sdJwt = this.parse(signedJwt);
    return new SDJwt(sdJwt.jwt, sdJwt.header, sdPayload, withKBJwt, sdJwt.isPresentation || !(withKBJwt == null));
  };
  protoOf(Companion_2).createFromSignedJwt = function (signedJwt, sdPayload, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.bc8(signedJwt, sdPayload, withKBJwt) : $super.bc8.call(this, signedJwt, sdPayload, withKBJwt);
  };
  protoOf(Companion_2).cc8 = function (sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders) {
    return this.createFromSignedJwt(jwtCryptoProvider.sign(sdPayload.undisclosedPayload, keyID, typ, additionalHeaders), sdPayload);
  };
  protoOf(Companion_2).sign = function (sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders, $super) {
    keyID = keyID === VOID ? null : keyID;
    typ = typ === VOID ? 'JWT' : typ;
    var tmp;
    if (additionalHeaders === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = additionalHeaders;
    }
    additionalHeaders = tmp;
    return $super === VOID ? this.cc8(sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders) : $super.cc8.call(this, sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders);
  };
  protoOf(Companion_2).dc8 = function (sdPayload, jwtCryptoProvider, keyID, $completion) {
    var tmp = new $signAsyncCOROUTINE$1(this, sdPayload, jwtCryptoProvider, keyID, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_2).signAsync$default = function (sdPayload, jwtCryptoProvider, keyID, $completion, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.dc8(sdPayload, jwtCryptoProvider, keyID, $completion) : $super.dc8.call(this, sdPayload, jwtCryptoProvider, keyID, $completion);
  };
  protoOf(Companion_2).ec8 = function (value, sdOnly) {
    return Regex_init_$Create$('^(?<sdjwt>(?<header>[A-Za-z0-9-_]+)\\.(?<body>[A-Za-z0-9-_]+)\\.(?<signature>[A-Za-z0-9-_]+))(?<disclosures>(~([A-Za-z0-9-_]+))+)?(~(?<kbjwt>([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+))?)?$').re(value) && (!sdOnly || contains(value, '~'));
  };
  protoOf(Companion_2).isSDJwt = function (value, sdOnly, $super) {
    sdOnly = sdOnly === VOID ? false : sdOnly;
    return $super === VOID ? this.ec8(value, sdOnly) : $super.ec8.call(this, value, sdOnly);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function $verifyAsyncCOROUTINE$0(_this__u8e3s4, jwtCryptoProvider, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.nc8_1 = _this__u8e3s4;
    this.oc8_1 = jwtCryptoProvider;
  }
  protoOf($verifyAsyncCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.oc8_1.oc5(this.nc8_1.jwt, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            return new VerificationResult(this.nc8_1, it.verified, this.nc8_1.sdPayload.verifyDisclosures(), it.message);
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
  protoOf($verifyAsyncCOROUTINE$0)['<set-state>'] = protoOf($verifyAsyncCOROUTINE$0).u9;
  protoOf($verifyAsyncCOROUTINE$0)['<get-state>'] = protoOf($verifyAsyncCOROUTINE$0).v9;
  protoOf($verifyAsyncCOROUTINE$0)['<set-exceptionState>'] = protoOf($verifyAsyncCOROUTINE$0).w9;
  protoOf($verifyAsyncCOROUTINE$0)['<get-exceptionState>'] = protoOf($verifyAsyncCOROUTINE$0).x9;
  protoOf($verifyAsyncCOROUTINE$0)['<set-result>'] = protoOf($verifyAsyncCOROUTINE$0).y9;
  protoOf($verifyAsyncCOROUTINE$0)['<get-result>'] = protoOf($verifyAsyncCOROUTINE$0).z9;
  protoOf($verifyAsyncCOROUTINE$0)['<set-exception>'] = protoOf($verifyAsyncCOROUTINE$0).aa;
  protoOf($verifyAsyncCOROUTINE$0)['<get-exception>'] = protoOf($verifyAsyncCOROUTINE$0).ba;
  protoOf($verifyAsyncCOROUTINE$0)['<set-finallyPath>'] = protoOf($verifyAsyncCOROUTINE$0).ca;
  protoOf($verifyAsyncCOROUTINE$0)['<get-finallyPath>'] = protoOf($verifyAsyncCOROUTINE$0).da;
  protoOf($verifyAsyncCOROUTINE$0)['<get-context>'] = protoOf($verifyAsyncCOROUTINE$0).t9;
  function SDJwt(jwt, header, sdPayload, keyBindingJwt, isPresentation) {
    Companion_getInstance_3();
    keyBindingJwt = keyBindingJwt === VOID ? null : keyBindingJwt;
    isPresentation = isPresentation === VOID ? false : isPresentation;
    this.jwt = jwt;
    this.header = header;
    this.sdPayload = sdPayload;
    this.keyBindingJwt = keyBindingJwt;
    this.isPresentation = isPresentation;
  }
  protoOf(SDJwt).cc6 = function () {
    return this.jwt;
  };
  protoOf(SDJwt).k9c = function () {
    return this.header;
  };
  protoOf(SDJwt).dc6 = function () {
    return this.sdPayload;
  };
  protoOf(SDJwt).ec6 = function () {
    return this.keyBindingJwt;
  };
  protoOf(SDJwt).fc6 = function () {
    return this.isPresentation;
  };
  protoOf(SDJwt).gc6 = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.sdPayload.sDisclosures;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.disclosure;
      destination.n(tmp$ret$0);
    }
    return toSet(destination);
  };
  protoOf(SDJwt).hc6 = function () {
    return this.sdPayload.sDisclosures;
  };
  protoOf(SDJwt).ic6 = function () {
    return this.sdPayload.undisclosedPayload;
  };
  protoOf(SDJwt).jc6 = function () {
    return this.sdPayload.fullPayload;
  };
  protoOf(SDJwt).kc6 = function () {
    return this.sdPayload.digestedDisclosures;
  };
  protoOf(SDJwt).lc6 = function () {
    return this.sdPayload.sdMap;
  };
  protoOf(SDJwt).mc6 = function () {
    var tmp0_safe_receiver = this.header.af('alg');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).nc6 = function () {
    var tmp0_safe_receiver = this.header.af('kid');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).m9t = function () {
    var tmp0_safe_receiver = this.header.af('jwk');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).za0 = function () {
    var tmp0_safe_receiver = this.header.af('typ');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).toString = function () {
    return this.toFormattedString(this.isPresentation);
  };
  protoOf(SDJwt).oc6 = function (formatForPresentation, withKBJwt) {
    var tmp = plus(listOf(this.jwt), this.zzz_unused_disclosures);
    var tmp0_safe_receiver = withKBJwt ? this.keyBindingJwt : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = listOf(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp_2;
      if (formatForPresentation) {
        tmp_2 = listOf('');
      } else {
        // Inline function 'kotlin.collections.listOf' call
        tmp_2 = emptyList();
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return joinToString(plus(tmp, tmp_1), '~');
  };
  protoOf(SDJwt).toFormattedString = function (formatForPresentation, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? true : withKBJwt;
    return $super === VOID ? this.oc6(formatForPresentation, withKBJwt) : $super.oc6.call(this, formatForPresentation, withKBJwt);
  };
  protoOf(SDJwt).pc6 = function (sdMap, withKBJwt) {
    var tmp;
    if (sdMap == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.sdPayload.withSelectiveDisclosures(sdMap);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0 = tmp1_elvis_lhs == null ? this.sdPayload.withoutDisclosures() : tmp1_elvis_lhs;
    return new SDJwt(this.jwt, this.header, tmp_0, withKBJwt == null ? this.keyBindingJwt : withKBJwt, true);
  };
  protoOf(SDJwt).present = function (sdMap, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.pc6(sdMap, withKBJwt) : $super.pc6.call(this, sdMap, withKBJwt);
  };
  protoOf(SDJwt).qc6 = function (discloseAll, withKBJwt) {
    var tmp;
    if (discloseAll) {
      tmp = this.sdPayload;
    } else {
      tmp = this.sdPayload.withoutDisclosures();
    }
    var tmp_0 = tmp;
    return new SDJwt(this.jwt, this.header, tmp_0, withKBJwt == null ? this.keyBindingJwt : withKBJwt, true);
  };
  protoOf(SDJwt).presentAll = function (discloseAll, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.qc6(discloseAll, withKBJwt) : $super.qc6.call(this, discloseAll, withKBJwt);
  };
  protoOf(SDJwt).rc6 = function (sdMap, audience, nonce, kbCryptoProvider, kbKeyId) {
    return this.present(sdMap, Companion_instance_1.sign(this.present(sdMap).toString(), audience, nonce, kbCryptoProvider, kbKeyId));
  };
  protoOf(SDJwt).presentWithKB = function (sdMap, audience, nonce, kbCryptoProvider, kbKeyId, $super) {
    kbKeyId = kbKeyId === VOID ? null : kbKeyId;
    return $super === VOID ? this.rc6(sdMap, audience, nonce, kbCryptoProvider, kbKeyId) : $super.rc6.call(this, sdMap, audience, nonce, kbCryptoProvider, kbKeyId);
  };
  protoOf(SDJwt).sc6 = function (discloseAll, audience, nonce, kbCryptoProvider, kbKeyId) {
    return this.presentAll(discloseAll, Companion_instance_1.sign(this.presentAll(discloseAll).toString(), audience, nonce, kbCryptoProvider, kbKeyId));
  };
  protoOf(SDJwt).presentAllWithKB = function (discloseAll, audience, nonce, kbCryptoProvider, kbKeyId, $super) {
    kbKeyId = kbKeyId === VOID ? null : kbKeyId;
    return $super === VOID ? this.sc6(discloseAll, audience, nonce, kbCryptoProvider, kbKeyId) : $super.sc6.call(this, discloseAll, audience, nonce, kbCryptoProvider, kbKeyId);
  };
  protoOf(SDJwt).tc6 = function (jwtCryptoProvider, keyID) {
    // Inline function 'kotlin.let' call
    var it = jwtCryptoProvider.verify(this.jwt, keyID == null ? this.keyID : keyID);
    return new VerificationResult(this, it.verified, this.sdPayload.verifyDisclosures(), it.message);
  };
  protoOf(SDJwt).verify = function (jwtCryptoProvider, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.tc6(jwtCryptoProvider, keyID) : $super.tc6.call(this, jwtCryptoProvider, keyID);
  };
  protoOf(SDJwt).uc6 = function (jwtCryptoProvider, $completion) {
    var tmp = new $verifyAsyncCOROUTINE$0(this, jwtCryptoProvider, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  function verifyHolderKeyBinding($this, jwtCryptoProvider, requiresHolderKeyBinding, audience, nonce) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var this_0 = $this.qc8_1;
    if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
      var reason = 'Holder DID verification not yet supported';
      throw new NotImplementedError('An operation is not implemented: ' + reason);
    } else {
      if (!($this.rc8_1 == null)) {
        var tmp_0;
        var tmp_1;
        var tmp_2;
        if ($this.isPresentation && !($this.keyBindingJwt == null)) {
          // Inline function 'kotlin.text.isNullOrEmpty' call
          tmp_2 = !(audience == null || charSequenceLength(audience) === 0);
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          // Inline function 'kotlin.text.isNullOrEmpty' call
          tmp_1 = !(nonce == null || charSequenceLength(nonce) === 0);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp0_safe_receiver = $this.rc8_1.af('kid');
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          tmp_0 = $this.keyBindingJwt.verifyKB(jwtCryptoProvider, audience, nonce, $this, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u());
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      } else {
        tmp = !requiresHolderKeyBinding;
      }
    }
    return tmp;
  }
  function Companion_3() {
    this.xc8_1 = 'vc+sd-jwt';
  }
  protoOf(Companion_3).aq = function (sdJwt) {
    return new SDJwtVC(Companion_getInstance_3().parse(sdJwt));
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function SDJwtVC(sdJwt) {
    SDJwt.call(this, sdJwt.jwt, sdJwt.header, sdJwt.sdPayload, sdJwt.keyBindingJwt, sdJwt.isPresentation);
    var tmp = this;
    var tmp0_safe_receiver = this.zzz_unused_undisclosedPayload.af('cnf');
    tmp.pc8_1 = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp_0 = this;
    var tmp0_safe_receiver_0 = this.pc8_1;
    var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.af('kid');
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonPrimitive(tmp1_safe_receiver);
    tmp_0.qc8_1 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.q4u();
    var tmp_1 = this;
    var tmp0_safe_receiver_1 = this.pc8_1;
    var tmp1_safe_receiver_0 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.af('jwk');
    tmp_1.rc8_1 = tmp1_safe_receiver_0 == null ? null : get_jsonObject(tmp1_safe_receiver_0);
    var tmp_2 = this;
    var tmp0_safe_receiver_2 = this.zzz_unused_undisclosedPayload.af('iss');
    var tmp1_safe_receiver_1 = tmp0_safe_receiver_2 == null ? null : get_jsonPrimitive(tmp0_safe_receiver_2);
    tmp_2.sc8_1 = tmp1_safe_receiver_1 == null ? null : tmp1_safe_receiver_1.q4u();
    var tmp_3 = this;
    var tmp0_safe_receiver_3 = this.zzz_unused_undisclosedPayload.af('nbf');
    var tmp1_safe_receiver_2 = tmp0_safe_receiver_3 == null ? null : get_jsonPrimitive(tmp0_safe_receiver_3);
    tmp_3.tc8_1 = tmp1_safe_receiver_2 == null ? null : get_long(tmp1_safe_receiver_2);
    var tmp_4 = this;
    var tmp0_safe_receiver_4 = this.zzz_unused_undisclosedPayload.af('exp');
    var tmp1_safe_receiver_3 = tmp0_safe_receiver_4 == null ? null : get_jsonPrimitive(tmp0_safe_receiver_4);
    tmp_4.uc8_1 = tmp1_safe_receiver_3 == null ? null : get_long(tmp1_safe_receiver_3);
    var tmp_5 = this;
    var tmp0_safe_receiver_5 = this.zzz_unused_undisclosedPayload.af('vct');
    var tmp1_safe_receiver_4 = tmp0_safe_receiver_5 == null ? null : get_jsonPrimitive(tmp0_safe_receiver_5);
    tmp_5.vc8_1 = tmp1_safe_receiver_4 == null ? null : tmp1_safe_receiver_4.q4u();
    var tmp_6 = this;
    var tmp0_safe_receiver_6 = this.zzz_unused_undisclosedPayload.af('status');
    tmp_6.wc8_1 = tmp0_safe_receiver_6 == null ? null : get_jsonObject(tmp0_safe_receiver_6);
  }
  protoOf(SDJwtVC).yc8 = function (jwtCryptoProvider, requiresHolderKeyBinding, audience, nonce) {
    var message = '';
    var tmp0_safe_receiver = this.header.af('kid');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
    var tmp = this.verify(jwtCryptoProvider, tmp2_elvis_lhs == null ? this.sc8_1 : tmp2_elvis_lhs);
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp3_safe_receiver = this.tc8_1;
    var tmp_3;
    if (tmp3_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = System_instance.d5v().z5z().g1(tmp3_safe_receiver) >= 0;
    }
    var tmp4_elvis_lhs = tmp_3;
    // Inline function 'kotlin.also' call
    var this_0 = tmp4_elvis_lhs == null ? true : tmp4_elvis_lhs;
    if (!this_0)
      message = message + ', VC is not valid before ' + toString_0(this.tc8_1);
    if (this_0) {
      var tmp5_safe_receiver = this.uc8_1;
      var tmp_4;
      if (tmp5_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_4 = System_instance.d5v().z5z().g1(tmp5_safe_receiver) < 0;
      }
      var tmp6_elvis_lhs = tmp_4;
      // Inline function 'kotlin.also' call
      var this_1 = tmp6_elvis_lhs == null ? true : tmp6_elvis_lhs;
      if (!this_1)
        message = message + ', VC is not valid after ' + toString_0(this.uc8_1);
      tmp_2 = this_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'kotlin.text.isNullOrEmpty' call
      var this_2 = this.vc8_1;
      // Inline function 'kotlin.also' call
      var this_3 = this_2 == null || charSequenceLength(this_2) === 0;
      if (this_3)
        message = message + ', VC has no verifiable credential type property (vct)';
      tmp_1 = !this_3;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      // Inline function 'kotlin.also' call
      var this_4 = verifyHolderKeyBinding(this, jwtCryptoProvider, requiresHolderKeyBinding, audience, nonce);
      if (!this_4)
        message = message + ', holder key binding could not be verified';
      tmp_0 = this_4;
    } else {
      tmp_0 = false;
    }
    return new VCVerificationResult(this, tmp, tmp_0, message);
  };
  function get_log_1() {
    _init_properties_SDMap_kt__g5tabd();
    return log_1;
  }
  var log_1;
  function doGenerateSDMap($this, jsonPaths, decoyMode, decoys, sdPaths, parent) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(jsonPaths, 10));
    var _iterator__ex2g4s = jsonPaths.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = new Pair(substringBefore(item, '.'), substringAfter(item, '.', ''));
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination_0 = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s_0 = destination.p();
    while (_iterator__ex2g4s_0.q()) {
      var element = _iterator__ex2g4s_0.r();
      var key = element.bc_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_0.m2(key);
      var tmp;
      if (value == null) {
        var answer = ArrayList_init_$Create$_0();
        destination_0.p2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      var tmp$ret$6 = element.cc_1;
      list.n(tmp$ret$6);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_1 = LinkedHashMap_init_$Create$_0(mapCapacity(destination_0.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_1 = destination_0.z().p();
    while (_iterator__ex2g4s_1.q()) {
      var element_0 = _iterator__ex2g4s_1.r();
      var tmp_0 = element_0.a1();
      // Inline function 'kotlin.collections.filterNot' call
      var tmp0 = element_0.b1();
      // Inline function 'kotlin.collections.filterNotTo' call
      var destination_2 = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_2 = tmp0.p();
      while (_iterator__ex2g4s_2.q()) {
        var element_1 = _iterator__ex2g4s_2.r();
        // Inline function 'kotlin.text.isEmpty' call
        if (!(charSequenceLength(element_1) === 0)) {
          destination_2.n(element_1);
        }
      }
      destination_1.p2(tmp_0, destination_2);
    }
    var pathMap = destination_1;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_3 = LinkedHashMap_init_$Create$_0(mapCapacity(pathMap.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_3 = pathMap.z().p();
    while (_iterator__ex2g4s_3.q()) {
      var element_2 = _iterator__ex2g4s_3.r();
      var tmp_1 = element_2.a1();
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = listOf_0([parent, element_2.a1()]);
      // Inline function 'kotlin.collections.filterTo' call
      var destination_4 = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_4 = tmp0_0.p();
      while (_iterator__ex2g4s_4.q()) {
        var element_3 = _iterator__ex2g4s_4.r();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(element_3) > 0) {
          destination_4.n(element_3);
        }
      }
      var currentPath = joinToString(destination_4, '.');
      var tmp_2 = sdPaths.w(currentPath);
      var tmp_3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!element_2.b1().h()) {
        tmp_3 = doGenerateSDMap(Companion_getInstance_5(), element_2.b1(), decoyMode, decoys, sdPaths, currentPath);
      } else {
        tmp_3 = null;
      }
      var tmp$ret$24 = new SDField(tmp_2, tmp_3);
      destination_3.p2(tmp_1, tmp$ret$24);
    }
    return toSDMap(destination_3, decoyMode, decoys);
  }
  function regenerateSDField($this, sd, value, digestedDisclosure) {
    var tmp;
    if (value instanceof JsonObject) {
      tmp = $this.zc8(get_jsonObject(value), digestedDisclosure);
    } else {
      tmp = null;
    }
    return new SDField(sd, tmp);
  }
  function SDMap$Companion$$childSerializers$_anonymous__akhw5b() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance());
  }
  function SDMap$Companion$$childSerializers$_anonymous__akhw5b_0() {
    return Companion_getInstance_0().m4u();
  }
  function SDMap$Companion$fromJSON$lambda($json) {
    return function () {
      return 'Parsing SDMap from: ' + $json.toString();
    };
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, SDMap$Companion$$childSerializers$_anonymous__akhw5b);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.vc6_1 = [tmp_1, lazy(tmp_2, SDMap$Companion$$childSerializers$_anonymous__akhw5b_0), null];
  }
  protoOf(Companion_4).ac9 = function (fullPayload, undisclosedPayload, decoyMode, decoys) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(fullPayload.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = fullPayload.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp = element.a1();
      var tmp_0;
      if (!undisclosedPayload.s2p(element.a1())) {
        tmp_0 = new SDField(true);
      } else {
        var tmp_1;
        var tmp_2 = element.b1();
        if (tmp_2 instanceof JsonObject) {
          var tmp_3 = undisclosedPayload.af(element.a1());
          tmp_1 = tmp_3 instanceof JsonObject;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = new SDField(false, Companion_getInstance_5().ac9(get_jsonObject(element.b1()), get_jsonObject(ensureNotNull(undisclosedPayload.af(element.a1()))), decoyMode, decoys));
        } else {
          tmp_0 = new SDField(false);
        }
      }
      var tmp$ret$1 = tmp_0;
      destination.p2(tmp, tmp$ret$1);
    }
    return toSDMap(destination, decoyMode, decoys);
  };
  protoOf(Companion_4).bc9 = function (jsonPaths, decoyMode, decoys) {
    return doGenerateSDMap(this, jsonPaths, decoyMode, decoys, toSet(jsonPaths), '');
  };
  protoOf(Companion_4).zc8 = function (undisclosedPayload, digestedDisclosures) {
    var tmp0_safe_receiver = undisclosedPayload.af('_sd');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonArray(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s = tmp1_safe_receiver.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        if (digestedDisclosures.k2(get_jsonPrimitive(element).q4u())) {
          destination.n(element);
        }
      }
      tmp = destination;
    }
    var tmp2_safe_receiver = tmp;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp2_safe_receiver, 10));
      var _iterator__ex2g4s_0 = tmp2_safe_receiver.p();
      while (_iterator__ex2g4s_0.q()) {
        var item = _iterator__ex2g4s_0.r();
        var tmp$ret$3 = ensureNotNull(digestedDisclosures.m2(get_jsonPrimitive(item).q4u()));
        destination_0.n(tmp$ret$3);
      }
      tmp_0 = destination_0;
    }
    var tmp3_safe_receiver = tmp_0;
    var tmp_1;
    if (tmp3_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.collections.associateBy' call
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp3_safe_receiver, 10)), 16);
      // Inline function 'kotlin.collections.associateByTo' call
      var destination_1 = LinkedHashMap_init_$Create$_0(capacity);
      var _iterator__ex2g4s_1 = tmp3_safe_receiver.p();
      while (_iterator__ex2g4s_1.q()) {
        var element_0 = _iterator__ex2g4s_1.r();
        var tmp_2 = element_0.key;
        var tmp$ret$7 = regenerateSDField(Companion_getInstance_5(), true, element_0.value, digestedDisclosures);
        destination_1.p2(tmp_2, tmp$ret$7);
      }
      tmp_1 = destination_1;
    }
    var tmp4_elvis_lhs = tmp_1;
    var tmp_3;
    if (tmp4_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_3 = emptyMap();
    } else {
      tmp_3 = tmp4_elvis_lhs;
    }
    var tmp_4 = tmp_3;
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination_2 = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = undisclosedPayload.z().p();
    while (_iterator__ex2g4s_2.q()) {
      var element_1 = _iterator__ex2g4s_2.r();
      if (!(element_1.a1() === '_sd')) {
        destination_2.p2(element_1.a1(), element_1.b1());
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_3 = LinkedHashMap_init_$Create$_0(mapCapacity(destination_2.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_3 = destination_2.z().p();
    while (_iterator__ex2g4s_3.q()) {
      var element_2 = _iterator__ex2g4s_3.r();
      var tmp_5 = element_2.a1();
      var tmp$ret$16 = regenerateSDField(Companion_getInstance_5(), false, element_2.b1(), digestedDisclosures);
      destination_3.p2(tmp_5, tmp$ret$16);
    }
    return toSDMap(plus_0(tmp_4, destination_3));
  };
  protoOf(Companion_4).wc6 = function (json) {
    var tmp = get_log_1();
    tmp.l6g(SDMap$Companion$fromJSON$lambda(json));
    var tmp0_safe_receiver = json.af('fields');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z();
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.associate' call
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp2_safe_receiver, 10)), 16);
      // Inline function 'kotlin.collections.associateTo' call
      var destination = LinkedHashMap_init_$Create$_0(capacity);
      var _iterator__ex2g4s = tmp2_safe_receiver.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        // Inline function 'kotlin.collections.plusAssign' call
        var pair = new Pair(element.a1(), Companion_instance_2.qc5(element.b1()));
        destination.p2(pair.bc_1, pair.cc_1);
      }
      tmp_0 = destination;
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp3_elvis_lhs == null) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp_1 = emptyMap();
    } else {
      tmp_1 = tmp3_elvis_lhs;
    }
    var tmp_2 = tmp_1;
    var tmp4_safe_receiver = json.af('decoyMode');
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = Companion_getInstance_0().qc5(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_4 = tmp5_elvis_lhs == null ? DecoyMode_NONE_getInstance() : tmp5_elvis_lhs;
    var tmp6_safe_receiver = json.af('decoys');
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonPrimitive(tmp6_safe_receiver);
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : get_int(tmp7_safe_receiver);
    return new SDMap(tmp_2, tmp_4, tmp8_elvis_lhs == null ? 0 : tmp8_elvis_lhs);
  };
  protoOf(Companion_4).cc9 = function (json) {
    return this.wc6(get_jsonObject(Default_getInstance().h4s(json)));
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.sdjwt.SDMap', this, 3);
    tmp0_serialDesc.x2b('fields', false);
    tmp0_serialDesc.x2b('decoyMode', true);
    tmp0_serialDesc.x2b('decoys', true);
    this.dc9_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).ec9 = function (encoder, value) {
    var tmp0_desc = this.dc9_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().vc6_1;
    tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.cc7_1);
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !value.dc7_1.equals(DecoyMode_NONE_getInstance())) {
      tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.dc7_1);
    }
    if (tmp1_output.e26(tmp0_desc, 2) ? true : !(value.ec7_1 === 0)) {
      tmp1_output.r25(tmp0_desc, 2, value.ec7_1);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_0).v20 = function (encoder, value) {
    return this.ec9(encoder, value instanceof SDMap ? value : THROW_CCE());
  };
  protoOf($serializer_0).w20 = function (decoder) {
    var tmp0_desc = this.dc9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.h24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_5().vc6_1;
    if (tmp7_input.x24()) {
      tmp4_local0 = tmp7_input.t24(tmp0_desc, 0, tmp8_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.t24(tmp0_desc, 1, tmp8_cached[1].b1(), tmp5_local1);
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
            tmp5_local1 = tmp7_input.t24(tmp0_desc, 1, tmp8_cached[1].b1(), tmp5_local1);
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
    return SDMap_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_0).u20 = function () {
    return this.dc9_1;
  };
  protoOf($serializer_0).m2c = function () {
    var tmp0_cached = Companion_getInstance_5().vc6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), tmp0_cached[1].b1(), IntSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function SDMap_init_$Init$(seen0, fields, decoyMode, decoys, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_0().dc9_1);
    }
    $this.cc7_1 = fields;
    if (0 === (seen0 & 2))
      $this.dc7_1 = DecoyMode_NONE_getInstance();
    else
      $this.dc7_1 = decoyMode;
    if (0 === (seen0 & 4))
      $this.ec7_1 = 0;
    else
      $this.ec7_1 = decoys;
    return $this;
  }
  function SDMap_init_$Create$(seen0, fields, decoyMode, decoys, serializationConstructorMarker) {
    return SDMap_init_$Init$(seen0, fields, decoyMode, decoys, serializationConstructorMarker, objectCreate(protoOf(SDMap)));
  }
  function SDMap(fields, decoyMode, decoys) {
    Companion_getInstance_5();
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    decoys = decoys === VOID ? 0 : decoys;
    this.cc7_1 = fields;
    this.dc7_1 = decoyMode;
    this.ec7_1 = decoys;
  }
  protoOf(SDMap).z = function () {
    return this.cc7_1.z();
  };
  protoOf(SDMap).n2 = function () {
    return this.cc7_1.n2();
  };
  protoOf(SDMap).s = function () {
    return this.cc7_1.s();
  };
  protoOf(SDMap).o2 = function () {
    return this.cc7_1.o2();
  };
  protoOf(SDMap).h = function () {
    return this.cc7_1.h();
  };
  protoOf(SDMap).af = function (key) {
    return this.cc7_1.m2(key);
  };
  protoOf(SDMap).m2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.af((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(SDMap).fc9 = function (value) {
    return this.cc7_1.l2(value);
  };
  protoOf(SDMap).l2 = function (value) {
    if (!(value instanceof SDField))
      return false;
    return this.fc9(value instanceof SDField ? value : THROW_CCE());
  };
  protoOf(SDMap).s2p = function (key) {
    return this.cc7_1.k2(key);
  };
  protoOf(SDMap).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.s2p((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(SDMap).bc7 = function () {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder_0 = new JsonObjectBuilder();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.cc7_1.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      builder_0.c4v(element.a1(), element.b1().bc7());
    }
    var tmp$ret$4 = builder_0.o4t();
    builder.c4v('fields', tmp$ret$4);
    put(builder, 'decoyMode', this.dc7_1.s2_1);
    put_1(builder, 'decoys', this.ec7_1);
    return builder.o4t();
  };
  function toSDMap(_this__u8e3s4, decoyMode, decoys) {
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    decoys = decoys === VOID ? 0 : decoys;
    _init_properties_SDMap_kt__g5tabd();
    return new SDMap(_this__u8e3s4, decoyMode, decoys);
  }
  function log$lambda_1() {
    _init_properties_SDMap_kt__g5tabd();
    return Unit_instance;
  }
  var properties_initialized_SDMap_kt_vf0vi3;
  function _init_properties_SDMap_kt__g5tabd() {
    if (!properties_initialized_SDMap_kt_vf0vi3) {
      properties_initialized_SDMap_kt_vf0vi3 = true;
      var tmp = KotlinLogging_instance;
      log_1 = tmp.w6g(log$lambda_1);
    }
  }
  function zzz_unused_SDMapBuilder(decoyMode, numDecoys) {
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    numDecoys = numDecoys === VOID ? 0 : numDecoys;
    this.gc9_1 = decoyMode;
    this.hc9_1 = numDecoys;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.ic9_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(zzz_unused_SDMapBuilder).jc9 = function (key, sd, children) {
    var tmp0 = this.ic9_1;
    // Inline function 'kotlin.collections.set' call
    var value = new SDField(sd, children);
    tmp0.p2(key, value);
    return this;
  };
  protoOf(zzz_unused_SDMapBuilder).x2x = function () {
    return new SDMap(toMap(this.ic9_1), this.gc9_1, this.hc9_1);
  };
  function digest($this, value) {
    var messageDigest = sha256(encodeToByteArray(value));
    return messageDigest.uc3();
  }
  function generateSalt($this) {
    var randomness = Default_getInstance_0().ql(16);
    return $this.yc7_1.yk(randomness);
  }
  function generateDisclosure($this, key, value) {
    var salt = generateSalt($this);
    // Inline function 'kotlinx.serialization.json.buildJsonArray' call
    var builder = new JsonArrayBuilder();
    add(builder, salt);
    add(builder, key);
    builder.e4v(value);
    var tmp$ret$1 = builder.o4t();
    // Inline function 'kotlin.let' call
    var disclosure = $this.yc7_1.yk(encodeToByteArray(tmp$ret$1.toString()));
    return new SDisclosure(disclosure, salt, key, value);
  }
  function digestSDClaim($this, key, value, digests2disclosures) {
    var disclosure = generateDisclosure($this, key, value);
    // Inline function 'kotlin.also' call
    var this_0 = digest($this, disclosure.disclosure);
    // Inline function 'kotlin.collections.set' call
    digests2disclosures.p2(this_0, disclosure);
    return this_0;
  }
  function removeSDFields($this, payload, sdMap) {
    // Inline function 'kotlin.collections.filterKeys' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.z().p();
    while (_iterator__ex2g4s.q()) {
      var entry = _iterator__ex2g4s.r();
      var key = entry.a1();
      var tmp0_safe_receiver = sdMap.m2(key);
      if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sd) === true)) {
        result.p2(entry.a1(), entry.b1());
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(result.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = result.z().p();
    while (_iterator__ex2g4s_0.q()) {
      var element = _iterator__ex2g4s_0.r();
      var tmp = element.a1();
      var tmp_0;
      var tmp_1;
      var tmp_2 = element.b1();
      if (tmp_2 instanceof JsonObject) {
        var tmp2_safe_receiver = sdMap.m2(element.a1());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.h());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp_3 = Companion_getInstance_6();
        var tmp_4 = get_jsonObject(element.b1());
        var tmp0_safe_receiver_0 = sdMap.m2(element.a1());
        var tmp1_elvis_lhs = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.children;
        var tmp_5;
        if (tmp1_elvis_lhs == null) {
          // Inline function 'kotlin.collections.mapOf' call
          tmp_5 = emptyMap();
        } else {
          tmp_5 = tmp1_elvis_lhs;
        }
        tmp_0 = removeSDFields(tmp_3, tmp_4, tmp_5);
      } else {
        tmp_0 = element.b1();
      }
      var tmp$ret$6 = tmp_0;
      destination.p2(tmp, tmp$ret$6);
    }
    return new JsonObject(destination);
  }
  function generateSDPayload($this, payload, sdMap, digests2disclosures) {
    var sdPayload = toMutableMap(removeSDFields($this, payload, sdMap));
    // Inline function 'kotlin.collections.filterKeys' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.z().p();
    while (_iterator__ex2g4s.q()) {
      var entry = _iterator__ex2g4s.r();
      var key = entry.a1();
      var tmp;
      var tmp0_safe_receiver = sdMap.af(key);
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sd) === true) {
        tmp = true;
      } else {
        var tmp1_safe_receiver = sdMap.af(key);
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.children;
        tmp = !(this_0 == null || this_0.h());
      }
      if (tmp) {
        result.p2(entry.a1(), entry.b1());
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(result.s());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = result.z().p();
    while (_iterator__ex2g4s_0.q()) {
      var item = _iterator__ex2g4s_0.r();
      var tmp_0;
      var tmp_1;
      var tmp_2 = item.b1();
      if (!(tmp_2 instanceof JsonObject)) {
        tmp_1 = true;
      } else {
        var tmp0_safe_receiver_0 = sdMap.af(item.a1());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_1 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.children;
        tmp_1 = this_1 == null || this_1.h();
      }
      if (tmp_1) {
        tmp_0 = digestSDClaim(Companion_getInstance_6(), item.a1(), item.b1(), digests2disclosures);
      } else {
        var nestedSDPayload = generateSDPayload(Companion_getInstance_6(), get_jsonObject(item.b1()), ensureNotNull(ensureNotNull(sdMap.af(item.a1())).children), digests2disclosures);
        var tmp_3;
        var tmp1_safe_receiver_0 = sdMap.af(item.a1());
        if ((tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.sd) === true) {
          tmp_3 = digestSDClaim(Companion_getInstance_6(), item.a1(), nestedSDPayload, digests2disclosures);
        } else {
          // Inline function 'kotlin.collections.set' call
          var key_0 = item.a1();
          sdPayload.p2(key_0, nestedSDPayload);
          tmp_3 = null;
        }
        tmp_0 = tmp_3;
      }
      var tmp$ret$7 = tmp_0;
      destination.n(tmp$ret$7);
    }
    var digests = toSet(filterNotNull(destination));
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!digests.h()) {
      // Inline function 'kotlinx.serialization.json.buildJsonArray' call
      var builder = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = digests.p();
      while (_iterator__ex2g4s_1.q()) {
        var element = _iterator__ex2g4s_1.r();
        add(builder, element);
      }
      if (!sdMap.dc7_1.equals(DecoyMode_NONE_getInstance()) && sdMap.ec7_1 > 0) {
        var numDecoys;
        switch (sdMap.dc7_1.t2_1) {
          case 2:
            numDecoys = numberToInt(SecureRandom_getInstance().pl(1.0, sdMap.ec7_1 + 1.0));
            break;
          case 1:
            numDecoys = sdMap.ec7_1;
            break;
          default:
            numDecoys = 0;
            break;
        }
        // Inline function 'kotlin.repeat' call
        var times = numDecoys;
        var inductionVariable = 0;
        if (inductionVariable < times)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            add(builder, digest(Companion_getInstance_6(), generateSalt(Companion_getInstance_6())));
          }
           while (inductionVariable < times);
      }
      // Inline function 'kotlin.collections.set' call
      var value = builder.o4t();
      sdPayload.p2('_sd', value);
    }
    return new JsonObject(sdPayload);
  }
  function disclosePayloadRecursively($this, payload, verificationDisclosureMap) {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      if (element.a1() === '_sd') {
        var tmp = element.b1();
        if (!(tmp instanceof JsonArray))
          throw Exception_init_$Create$('SD-JWT contains invalid _sd element');
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = get_jsonArray(element.b1()).p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          unveilDisclosureIfPresent($this, get_jsonPrimitive(element_0).q4u(), builder, verificationDisclosureMap);
        }
      } else {
        var tmp_0 = element.b1();
        if (tmp_0 instanceof JsonObject) {
          builder.c4v(element.a1(), disclosePayloadRecursively($this, get_jsonObject(element.b1()), verificationDisclosureMap));
        } else {
          builder.c4v(element.a1(), element.b1());
        }
      }
    }
    return builder.o4t();
  }
  function unveilDisclosureIfPresent($this, digest, objectBuilder, verificationDisclosureMap) {
    var tmp1_elvis_lhs = verificationDisclosureMap == null ? null : verificationDisclosureMap.q2(digest);
    var sDisclosure = tmp1_elvis_lhs == null ? $this.digestedDisclosures.m2(digest) : tmp1_elvis_lhs;
    if (!(sDisclosure == null)) {
      var tmp;
      var tmp_0 = sDisclosure.value;
      if (tmp_0 instanceof JsonObject) {
        tmp = disclosePayloadRecursively($this, get_jsonObject(sDisclosure.value), verificationDisclosureMap);
      } else {
        tmp = sDisclosure.value;
      }
      objectBuilder.c4v(sDisclosure.key, tmp);
    }
  }
  function filterDisclosures($this, currPayloadObject, sdMap) {
    var tmp;
    if (currPayloadObject.s2p('_sd')) {
      var tmp_0 = currPayloadObject.af('_sd');
      tmp = !(tmp_0 instanceof JsonArray);
    } else {
      tmp = false;
    }
    if (tmp) {
      throw Exception_init_$Create$('Invalid _sd format found');
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = currPayloadObject.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp_1;
      var tmp_2 = element.b1();
      if (tmp_2 instanceof JsonObject) {
        var tmp0_safe_receiver = sdMap.m2(element.a1());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.h());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        destination.p2(element.a1(), element.b1());
      }
    }
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = destination.z().p();
    while (_iterator__ex2g4s_0.q()) {
      var element_0 = _iterator__ex2g4s_0.r();
      var list = filterDisclosures($this, get_jsonObject(element_0.b1()), ensureNotNull(ensureNotNull(sdMap.m2(element_0.a1())).children));
      addAll(destination_0, list);
    }
    var tmp_3 = destination_0;
    var tmp0_safe_receiver_0 = currPayloadObject.af('_sd');
    var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : get_jsonArray(tmp0_safe_receiver_0);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : asSequence(tmp1_safe_receiver);
    var tmp_4;
    if (tmp2_safe_receiver == null) {
      tmp_4 = null;
    } else {
      tmp_4 = map(tmp2_safe_receiver, SDPayload$filterDisclosures$lambda);
    }
    var tmp3_safe_receiver = tmp_4;
    var tmp_5;
    if (tmp3_safe_receiver == null) {
      tmp_5 = null;
    } else {
      tmp_5 = filter(tmp3_safe_receiver, SDPayload$filterDisclosures$lambda_0($this));
    }
    var tmp4_safe_receiver = tmp_5;
    var tmp_6;
    if (tmp4_safe_receiver == null) {
      tmp_6 = null;
    } else {
      tmp_6 = map(tmp4_safe_receiver, SDPayload$filterDisclosures$lambda_1($this));
    }
    var tmp5_safe_receiver = tmp_6;
    var tmp_7;
    if (tmp5_safe_receiver == null) {
      tmp_7 = null;
    } else {
      tmp_7 = filter(tmp5_safe_receiver, SDPayload$filterDisclosures$lambda_2(sdMap));
    }
    var tmp6_safe_receiver = tmp_7;
    var tmp_8;
    if (tmp6_safe_receiver == null) {
      tmp_8 = null;
    } else {
      tmp_8 = flatMap(tmp6_safe_receiver, SDPayload$filterDisclosures$lambda_3(sdMap, $this));
    }
    var tmp7_safe_receiver = tmp_8;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : toList(tmp7_safe_receiver);
    var tmp_9;
    if (tmp8_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_9 = emptyList();
    } else {
      tmp_9 = tmp8_elvis_lhs;
    }
    return toSet(plus(tmp_3, tmp_9));
  }
  function Companion_5() {
    Companion_instance_6 = this;
    this.yc7_1 = Default_getInstance_1().uk_1.wk(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(Companion_5).kc9 = function (fullPayload, disclosureMap) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var digestedDisclosures = LinkedHashMap_init_$Create$();
    return new SDPayload(generateSDPayload(this, fullPayload, disclosureMap, digestedDisclosures), digestedDisclosures);
  };
  protoOf(Companion_5).lc9 = function (fullPayload, undisclosedPayload, decoyMode, decoys) {
    return this.kc9(fullPayload, Companion_getInstance_5().ac9(fullPayload, undisclosedPayload, decoyMode, decoys));
  };
  protoOf(Companion_5).mc9 = function (fullPayload, undisclosedPayload, decoyMode, decoys, $super) {
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    decoys = decoys === VOID ? 0 : decoys;
    return $super === VOID ? this.lc9(fullPayload, undisclosedPayload, decoyMode, decoys) : $super.lc9.call(this, fullPayload, undisclosedPayload, decoyMode, decoys);
  };
  protoOf(Companion_5).zc7 = function (jwtBody, disclosures) {
    var tmp = get_jsonObject(Default_getInstance().h4s(decodeToString(SdjwtStringUtils_getInstance().xc7(jwtBody))));
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(disclosures, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = disclosures.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = new Pair(digest(Companion_getInstance_6(), element), Companion_instance_7.parse(element));
      destination.p2(pair.bc_1, pair.cc_1);
    }
    return new SDPayload(tmp, destination);
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function SDPayload$filterDisclosures$lambda(it) {
    return get_jsonPrimitive(it).q4u();
  }
  function SDPayload$filterDisclosures$lambda_0(this$0) {
    return function (digest) {
      return this$0.digestedDisclosures.k2(digest);
    };
  }
  function SDPayload$filterDisclosures$lambda_1(this$0) {
    return function (digest) {
      return ensureNotNull(this$0.digestedDisclosures.m2(digest));
    };
  }
  function SDPayload$filterDisclosures$lambda_2($sdMap) {
    return function (sd) {
      var tmp0_safe_receiver = $sdMap.m2(sd.key);
      return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sd) === true;
    };
  }
  function SDPayload$filterDisclosures$lambda_3($sdMap, this$0) {
    return function (sd) {
      var tmp = listOf(sd.disclosure);
      var tmp_0;
      var tmp_1;
      var tmp_2 = sd.value;
      if (tmp_2 instanceof JsonObject) {
        var tmp0_safe_receiver = $sdMap.m2(sd.key);
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.h());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = filterDisclosures(this$0, sd.value, ensureNotNull(ensureNotNull($sdMap.m2(sd.key)).children));
      } else {
        // Inline function 'kotlin.collections.listOf' call
        tmp_0 = emptyList();
      }
      return plus(tmp, tmp_0);
    };
  }
  function SDPayload(undisclosedPayload, digestedDisclosures) {
    Companion_getInstance_6();
    var tmp;
    if (digestedDisclosures === VOID) {
      // Inline function 'kotlin.collections.mapOf' call
      tmp = emptyMap();
    } else {
      tmp = digestedDisclosures;
    }
    digestedDisclosures = tmp;
    this.undisclosedPayload = undisclosedPayload;
    this.digestedDisclosures = digestedDisclosures;
  }
  protoOf(SDPayload).nc9 = function () {
    return this.undisclosedPayload;
  };
  protoOf(SDPayload).oc9 = function () {
    return this.digestedDisclosures;
  };
  protoOf(SDPayload).pc9 = function () {
    return this.digestedDisclosures.o2();
  };
  protoOf(SDPayload).qc9 = function () {
    return disclosePayloadRecursively(this, this.undisclosedPayload, null);
  };
  protoOf(SDPayload).rc9 = function () {
    return Companion_getInstance_5().zc8(this.undisclosedPayload, this.digestedDisclosures);
  };
  protoOf(SDPayload).withSelectiveDisclosures = function (sdMap) {
    var selectedDisclosures = filterDisclosures(this, this.undisclosedPayload, sdMap);
    // Inline function 'kotlin.collections.filterValues' call
    var this_0 = this.digestedDisclosures;
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.z().p();
    while (_iterator__ex2g4s.q()) {
      var entry = _iterator__ex2g4s.r();
      var it = entry.b1();
      if (selectedDisclosures.w(it.disclosure)) {
        result.p2(entry.a1(), entry.b1());
      }
    }
    return new SDPayload(this.undisclosedPayload, result);
  };
  protoOf(SDPayload).withoutDisclosures = function () {
    // Inline function 'kotlin.collections.mapOf' call
    var tmp$ret$0 = emptyMap();
    return new SDPayload(this.undisclosedPayload, tmp$ret$0);
  };
  protoOf(SDPayload).verifyDisclosures = function () {
    // Inline function 'kotlin.also' call
    var this_0 = toMutableMap(this.digestedDisclosures);
    disclosePayloadRecursively(this, this.undisclosedPayload, this_0);
    return this_0.h();
  };
  protoOf(SDPayload).dc = function () {
    return this.undisclosedPayload;
  };
  protoOf(SDPayload).ec = function () {
    return this.digestedDisclosures;
  };
  protoOf(SDPayload).sc9 = function (undisclosedPayload, digestedDisclosures) {
    return new SDPayload(undisclosedPayload, digestedDisclosures);
  };
  protoOf(SDPayload).copy = function (undisclosedPayload, digestedDisclosures, $super) {
    undisclosedPayload = undisclosedPayload === VOID ? this.undisclosedPayload : undisclosedPayload;
    digestedDisclosures = digestedDisclosures === VOID ? this.digestedDisclosures : digestedDisclosures;
    return $super === VOID ? this.sc9(undisclosedPayload, digestedDisclosures) : $super.sc9.call(this, undisclosedPayload, digestedDisclosures);
  };
  protoOf(SDPayload).toString = function () {
    return 'SDPayload(undisclosedPayload=' + this.undisclosedPayload.toString() + ', digestedDisclosures=' + toString(this.digestedDisclosures) + ')';
  };
  protoOf(SDPayload).hashCode = function () {
    var result = this.undisclosedPayload.hashCode();
    result = imul(result, 31) + hashCode(this.digestedDisclosures) | 0;
    return result;
  };
  protoOf(SDPayload).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SDPayload))
      return false;
    var tmp0_other_with_cast = other instanceof SDPayload ? other : THROW_CCE();
    if (!this.undisclosedPayload.equals(tmp0_other_with_cast.undisclosedPayload))
      return false;
    if (!equals(this.digestedDisclosures, tmp0_other_with_cast.digestedDisclosures))
      return false;
    return true;
  };
  function Companion_6() {
  }
  protoOf(Companion_6).parse = function (disclosure) {
    // Inline function 'kotlin.let' call
    var it = get_jsonArray(Default_getInstance().h4s(decodeToString(SdjwtStringUtils_getInstance().xc7(disclosure))));
    if (!(it.s() === 3)) {
      throw Exception_init_$Create$('Invalid selective disclosure');
    }
    return new SDisclosure(disclosure, get_jsonPrimitive(it.u(0)).q4u(), get_jsonPrimitive(it.u(1)).q4u(), it.u(2));
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function SDisclosure(disclosure, salt, key, value) {
    this.disclosure = disclosure;
    this.salt = salt;
    this.key = key;
    this.value = value;
  }
  protoOf(SDisclosure).tc9 = function () {
    return this.disclosure;
  };
  protoOf(SDisclosure).uc9 = function () {
    return this.salt;
  };
  protoOf(SDisclosure).a1 = function () {
    return this.key;
  };
  protoOf(SDisclosure).b1 = function () {
    return this.value;
  };
  protoOf(SDisclosure).dc = function () {
    return this.disclosure;
  };
  protoOf(SDisclosure).ec = function () {
    return this.salt;
  };
  protoOf(SDisclosure).yp = function () {
    return this.key;
  };
  protoOf(SDisclosure).p70 = function () {
    return this.value;
  };
  protoOf(SDisclosure).vc9 = function (disclosure, salt, key, value) {
    return new SDisclosure(disclosure, salt, key, value);
  };
  protoOf(SDisclosure).copy = function (disclosure, salt, key, value, $super) {
    disclosure = disclosure === VOID ? this.disclosure : disclosure;
    salt = salt === VOID ? this.salt : salt;
    key = key === VOID ? this.key : key;
    value = value === VOID ? this.value : value;
    return $super === VOID ? this.vc9(disclosure, salt, key, value) : $super.vc9.call(this, disclosure, salt, key, value);
  };
  protoOf(SDisclosure).toString = function () {
    return 'SDisclosure(disclosure=' + this.disclosure + ', salt=' + this.salt + ', key=' + this.key + ', value=' + toString(this.value) + ')';
  };
  protoOf(SDisclosure).hashCode = function () {
    var result = getStringHashCode(this.disclosure);
    result = imul(result, 31) + getStringHashCode(this.salt) | 0;
    result = imul(result, 31) + getStringHashCode(this.key) | 0;
    result = imul(result, 31) + hashCode(this.value) | 0;
    return result;
  };
  protoOf(SDisclosure).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SDisclosure))
      return false;
    var tmp0_other_with_cast = other instanceof SDisclosure ? other : THROW_CCE();
    if (!(this.disclosure === tmp0_other_with_cast.disclosure))
      return false;
    if (!(this.salt === tmp0_other_with_cast.salt))
      return false;
    if (!(this.key === tmp0_other_with_cast.key))
      return false;
    if (!equals(this.value, tmp0_other_with_cast.value))
      return false;
    return true;
  };
  function SdjwtStringUtils() {
    SdjwtStringUtils_instance = this;
    this.wc7_1 = Default_getInstance_1().uk_1.wk(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(SdjwtStringUtils).xc7 = function (_this__u8e3s4) {
    return this.wc7_1.cl(_this__u8e3s4);
  };
  var SdjwtStringUtils_instance;
  function SdjwtStringUtils_getInstance() {
    if (SdjwtStringUtils_instance == null)
      new SdjwtStringUtils();
    return SdjwtStringUtils_instance;
  }
  function JwtVerificationResult(verified, message) {
    message = message === VOID ? null : message;
    this.verified = verified;
    this.message = message;
  }
  protoOf(JwtVerificationResult).wc9 = function () {
    return this.verified;
  };
  protoOf(JwtVerificationResult).ta = function () {
    return this.message;
  };
  protoOf(JwtVerificationResult).dc = function () {
    return this.verified;
  };
  protoOf(JwtVerificationResult).ec = function () {
    return this.message;
  };
  protoOf(JwtVerificationResult).xc9 = function (verified, message) {
    return new JwtVerificationResult(verified, message);
  };
  protoOf(JwtVerificationResult).copy = function (verified, message, $super) {
    verified = verified === VOID ? this.verified : verified;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.xc9(verified, message) : $super.xc9.call(this, verified, message);
  };
  protoOf(JwtVerificationResult).toString = function () {
    return 'JwtVerificationResult(verified=' + this.verified + ', message=' + this.message + ')';
  };
  protoOf(JwtVerificationResult).hashCode = function () {
    var result = getBooleanHashCode(this.verified);
    result = imul(result, 31) + (this.message == null ? 0 : getStringHashCode(this.message)) | 0;
    return result;
  };
  protoOf(JwtVerificationResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JwtVerificationResult))
      return false;
    var tmp0_other_with_cast = other instanceof JwtVerificationResult ? other : THROW_CCE();
    if (!(this.verified === tmp0_other_with_cast.verified))
      return false;
    if (!(this.message == tmp0_other_with_cast.message))
      return false;
    return true;
  };
  function VerificationResult(sdJwt, signatureVerified, disclosuresVerified, message) {
    message = message === VOID ? null : message;
    this.sdJwt = sdJwt;
    this.signatureVerified = signatureVerified;
    this.disclosuresVerified = disclosuresVerified;
    this.message = message;
  }
  protoOf(VerificationResult).yc9 = function () {
    return this.sdJwt;
  };
  protoOf(VerificationResult).zc9 = function () {
    return this.signatureVerified;
  };
  protoOf(VerificationResult).aca = function () {
    return this.disclosuresVerified;
  };
  protoOf(VerificationResult).ta = function () {
    return this.message;
  };
  protoOf(VerificationResult).wc9 = function () {
    return this.signatureVerified && this.disclosuresVerified;
  };
  protoOf(VerificationResult).dc = function () {
    return this.sdJwt;
  };
  protoOf(VerificationResult).ec = function () {
    return this.signatureVerified;
  };
  protoOf(VerificationResult).yp = function () {
    return this.disclosuresVerified;
  };
  protoOf(VerificationResult).p70 = function () {
    return this.message;
  };
  protoOf(VerificationResult).bca = function (sdJwt, signatureVerified, disclosuresVerified, message) {
    return new VerificationResult(sdJwt, signatureVerified, disclosuresVerified, message);
  };
  protoOf(VerificationResult).copy = function (sdJwt, signatureVerified, disclosuresVerified, message, $super) {
    sdJwt = sdJwt === VOID ? this.sdJwt : sdJwt;
    signatureVerified = signatureVerified === VOID ? this.signatureVerified : signatureVerified;
    disclosuresVerified = disclosuresVerified === VOID ? this.disclosuresVerified : disclosuresVerified;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.bca(sdJwt, signatureVerified, disclosuresVerified, message) : $super.bca.call(this, sdJwt, signatureVerified, disclosuresVerified, message);
  };
  protoOf(VerificationResult).toString = function () {
    return 'VerificationResult(sdJwt=' + toString(this.sdJwt) + ', signatureVerified=' + this.signatureVerified + ', disclosuresVerified=' + this.disclosuresVerified + ', message=' + this.message + ')';
  };
  protoOf(VerificationResult).hashCode = function () {
    var result = hashCode(this.sdJwt);
    result = imul(result, 31) + getBooleanHashCode(this.signatureVerified) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.disclosuresVerified) | 0;
    result = imul(result, 31) + (this.message == null ? 0 : getStringHashCode(this.message)) | 0;
    return result;
  };
  protoOf(VerificationResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerificationResult))
      return false;
    var tmp0_other_with_cast = other instanceof VerificationResult ? other : THROW_CCE();
    if (!equals(this.sdJwt, tmp0_other_with_cast.sdJwt))
      return false;
    if (!(this.signatureVerified === tmp0_other_with_cast.signatureVerified))
      return false;
    if (!(this.disclosuresVerified === tmp0_other_with_cast.disclosuresVerified))
      return false;
    if (!(this.message == tmp0_other_with_cast.message))
      return false;
    return true;
  };
  function VCVerificationResult(sdJwtVC, sdJwtVerificationResult, sdJwtVCVerified, vcVerificationMessage) {
    vcVerificationMessage = vcVerificationMessage === VOID ? null : vcVerificationMessage;
    this.cca_1 = sdJwtVC;
    this.dca_1 = sdJwtVerificationResult;
    this.eca_1 = sdJwtVCVerified;
    this.fca_1 = vcVerificationMessage;
  }
  protoOf(VCVerificationResult).wc9 = function () {
    return this.eca_1 && this.dca_1.verified;
  };
  function Base64Utils() {
    Base64Utils_instance = this;
    this.base64 = Default_getInstance_1().uk_1.wk(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(Base64Utils).base64toBase64Url = function (_this__u8e3s4) {
    return trimEnd(replace(replace(_this__u8e3s4, '+', '-'), '/', '_'), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).base64UrlToBase64 = function (_this__u8e3s4) {
    return replace(replace(_this__u8e3s4, '-', '+'), '_', '/');
  };
  protoOf(Base64Utils).encodeToBase64Url = function (_this__u8e3s4) {
    return trimEnd(Default_getInstance_1().uk_1.yk(_this__u8e3s4), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).base64UrlDecode = function (_this__u8e3s4) {
    return this.base64.cl(_this__u8e3s4);
  };
  protoOf(Base64Utils).base64Decode = function (_this__u8e3s4) {
    return Default_getInstance_1().cl(_this__u8e3s4);
  };
  protoOf(Base64Utils).gca = function () {
    return this.base64;
  };
  var Base64Utils_instance;
  function Base64Utils_getInstance() {
    if (Base64Utils_instance == null)
      new Base64Utils();
    return Base64Utils_instance;
  }
  function JSAsyncJWTCryptoProvider() {
  }
  function SDJwtJS$Companion$verifyAndParseAsync$slambda($sdJwt, $jwtCryptoProvider, resultContinuation) {
    this.pca_1 = $sdJwt;
    this.qca_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).sca = function ($this$promise, $completion) {
    var tmp = this.a1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).va = function (p1, $completion) {
    return this.sca((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_getInstance_3().ac8(this.pca_1, this.qca_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            return new VerificationResult(new SDJwtJS(it.sdJwt), it.signatureVerified, it.disclosuresVerified, it.message);
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
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).a1j = function ($this$promise, completion) {
    var i = new SDJwtJS$Companion$verifyAndParseAsync$slambda(this.pca_1, this.qca_1, completion);
    i.rca_1 = $this$promise;
    return i;
  };
  function SDJwtJS$Companion$verifyAndParseAsync$slambda_0($sdJwt, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$Companion$verifyAndParseAsync$slambda($sdJwt, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.sca($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$Companion$signAsync$slambda($sdPayload, $jwtCryptoProvider, resultContinuation) {
    this.bcb_1 = $sdPayload;
    this.ccb_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$Companion$signAsync$slambda).ecb = function ($this$promise, $completion) {
    var tmp = this.a1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SDJwtJS$Companion$signAsync$slambda).va = function (p1, $completion) {
    return this.ecb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$Companion$signAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Companion_getInstance_3().signAsync$default(this.bcb_1, this.ccb_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new SDJwtJS(ARGUMENT);
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
  protoOf(SDJwtJS$Companion$signAsync$slambda).a1j = function ($this$promise, completion) {
    var i = new SDJwtJS$Companion$signAsync$slambda(this.bcb_1, this.ccb_1, completion);
    i.dcb_1 = $this$promise;
    return i;
  };
  function SDJwtJS$Companion$signAsync$slambda_0($sdPayload, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$Companion$signAsync$slambda($sdPayload, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ecb($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Companion_7() {
  }
  protoOf(Companion_7).verifyAndParseAsync = function (sdJwt, jwtCryptoProvider) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$Companion$verifyAndParseAsync$slambda_0(sdJwt, jwtCryptoProvider, null));
  };
  protoOf(Companion_7).fcb = function (sdPayload, jwtCryptoProvider, keyID) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$Companion$signAsync$slambda_0(sdPayload, jwtCryptoProvider, null));
  };
  protoOf(Companion_7).signAsync = function (sdPayload, jwtCryptoProvider, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.fcb(sdPayload, jwtCryptoProvider, keyID) : $super.fcb.call(this, sdPayload, jwtCryptoProvider, keyID);
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function SDJwtJS$verifyAsyncJs$slambda(this$0, $jwtCryptoProvider, resultContinuation) {
    this.ocb_1 = this$0;
    this.pcb_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$verifyAsyncJs$slambda).sca = function ($this$promise, $completion) {
    var tmp = this.a1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SDJwtJS$verifyAsyncJs$slambda).va = function (p1, $completion) {
    return this.sca((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$verifyAsyncJs$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.ocb_1.uc6(this.pcb_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            return new VerificationResult(new SDJwtJS(it.sdJwt), it.signatureVerified, it.disclosuresVerified, it.message);
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
  protoOf(SDJwtJS$verifyAsyncJs$slambda).a1j = function ($this$promise, completion) {
    var i = new SDJwtJS$verifyAsyncJs$slambda(this.ocb_1, this.pcb_1, completion);
    i.qcb_1 = $this$promise;
    return i;
  };
  function SDJwtJS$verifyAsyncJs$slambda_0(this$0, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$verifyAsyncJs$slambda(this$0, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.sca($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$presentAllAsync$slambda(this$0, $discloseAll, $withKBJwt, resultContinuation) {
    this.zcb_1 = this$0;
    this.acc_1 = $discloseAll;
    this.bcc_1 = $withKBJwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$presentAllAsync$slambda).ecb = function ($this$promise, $completion) {
    var tmp = this.a1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).va = function (p1, $completion) {
    return this.ecb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return new SDJwtJS(this.zcb_1.presentAll(this.acc_1, this.bcc_1));
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).a1j = function ($this$promise, completion) {
    var i = new SDJwtJS$presentAllAsync$slambda(this.zcb_1, this.acc_1, this.bcc_1, completion);
    i.ccc_1 = $this$promise;
    return i;
  };
  function SDJwtJS$presentAllAsync$slambda_0(this$0, $discloseAll, $withKBJwt, resultContinuation) {
    var i = new SDJwtJS$presentAllAsync$slambda(this$0, $discloseAll, $withKBJwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ecb($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$presentAsync$slambda(this$0, $sdMap, $withKBJwt, resultContinuation) {
    this.lcc_1 = this$0;
    this.mcc_1 = $sdMap;
    this.ncc_1 = $withKBJwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$presentAsync$slambda).ecb = function ($this$promise, $completion) {
    var tmp = this.a1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SDJwtJS$presentAsync$slambda).va = function (p1, $completion) {
    return this.ecb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$presentAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return new SDJwtJS(this.lcc_1.present(Companion_getInstance_5().cc9(JSON.stringify(this.mcc_1)), this.ncc_1));
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SDJwtJS$presentAsync$slambda).a1j = function ($this$promise, completion) {
    var i = new SDJwtJS$presentAsync$slambda(this.lcc_1, this.mcc_1, this.ncc_1, completion);
    i.occ_1 = $this$promise;
    return i;
  };
  function SDJwtJS$presentAsync$slambda_0(this$0, $sdMap, $withKBJwt, resultContinuation) {
    var i = new SDJwtJS$presentAsync$slambda(this$0, $sdMap, $withKBJwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ecb($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS(sdJwt) {
    SDJwt_init_$Init$(sdJwt, this);
  }
  protoOf(SDJwtJS).pcc = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.sdPayload.sDisclosures;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = item.disclosure;
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  };
  protoOf(SDJwtJS).qcc = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.sdPayload.sDisclosures;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp = JSON;
      // Inline function 'kotlinx.serialization.json.buildJsonObject' call
      var builder = new JsonObjectBuilder();
      put(builder, 'disclosure', item.disclosure);
      put(builder, 'salt', item.salt);
      put(builder, 'key', item.key);
      builder.c4v('value', item.value);
      var tmp$ret$1 = builder.o4t();
      var tmp$ret$2 = tmp.parse(tmp$ret$1.toString());
      destination.n(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  };
  protoOf(SDJwtJS).nc9 = function () {
    return JSON.parse(this.sdPayload.undisclosedPayload.toString());
  };
  protoOf(SDJwtJS).qc9 = function () {
    return JSON.parse(this.sdPayload.fullPayload.toString());
  };
  protoOf(SDJwtJS).rc9 = function () {
    return JSON.parse(this.sdPayload.sdMap.bc7().toString());
  };
  protoOf(SDJwtJS).verifyAsync = function (jwtCryptoProvider) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$verifyAsyncJs$slambda_0(this, jwtCryptoProvider, null));
  };
  protoOf(SDJwtJS).rcc = function (discloseAll, withKBJwt) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$presentAllAsync$slambda_0(this, discloseAll, withKBJwt, null));
  };
  protoOf(SDJwtJS).presentAllAsync = function (discloseAll, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.rcc(discloseAll, withKBJwt) : $super.rcc.call(this, discloseAll, withKBJwt);
  };
  protoOf(SDJwtJS).scc = function (sdMap, withKBJwt) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$presentAsync$slambda_0(this, sdMap, withKBJwt, null));
  };
  protoOf(SDJwtJS).presentAsync = function (sdMap, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.scc(sdMap, withKBJwt) : $super.scc.call(this, sdMap, withKBJwt);
  };
  protoOf(SDJwtJS).oc6 = function (formatForPresentation, withKBJwt) {
    println('Formatting SD_JWT: ' + joinToString_0(this.disclosures, ','));
    var tmp = plus_1(listOf(this.jwt), this.disclosures);
    var tmp0_safe_receiver = withKBJwt ? this.keyBindingJwt : null;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = listOf(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      var tmp_2;
      if (formatForPresentation) {
        tmp_2 = listOf('');
      } else {
        // Inline function 'kotlin.collections.listOf' call
        tmp_2 = emptyList();
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return joinToString(plus(tmp, tmp_1), '~');
  };
  function SDMapBuilder(decoyMode, numDecoys) {
    decoyMode = decoyMode === VOID ? 'NONE' : decoyMode;
    numDecoys = numDecoys === VOID ? 0 : numDecoys;
    this.tcc_1 = decoyMode;
    this.ucc_1 = numDecoys;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.vcc_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SDMapBuilder).wcc = function (key, sd, children) {
    var tmp;
    if (children != null) {
      tmp = Companion_getInstance_5().cc9(JSON.stringify(children));
    } else {
      tmp = null;
    }
    var childrenSdMap = tmp;
    var tmp0 = this.vcc_1;
    // Inline function 'kotlin.collections.set' call
    var value = new SDField(sd, childrenSdMap);
    tmp0.p2(key, value);
    return this;
  };
  protoOf(SDMapBuilder).addField = function (key, sd, children, $super) {
    children = children === VOID ? null : children;
    return $super === VOID ? this.wcc(key, sd, children) : $super.wcc.call(this, key, sd, children);
  };
  protoOf(SDMapBuilder).buildAsJSON = function () {
    return JSON.parse((new SDMap(this.vcc_1, valueOf(this.tcc_1), this.ucc_1)).bc7().toString());
  };
  protoOf(SDMapBuilder).build = function () {
    return new SDMap(this.vcc_1, valueOf(this.tcc_1), this.ucc_1);
  };
  protoOf(SDMapBuilder).buildFromJsonPaths = function (jsonPaths) {
    return JSON.parse(Companion_getInstance_5().bc9(toList_0(jsonPaths), valueOf(this.tcc_1), this.ucc_1).bc7().toString());
  };
  function SDPayloadBuilder(fullPayload) {
    this.fullPayload = fullPayload;
  }
  protoOf(SDPayloadBuilder).qc9 = function () {
    return this.fullPayload;
  };
  protoOf(SDPayloadBuilder).buildForUndisclosedPayload = function (undisclosedSDPayload) {
    return Companion_getInstance_6().mc9(get_jsonObject(Default_getInstance().h4s(JSON.stringify(this.fullPayload))), get_jsonObject(Default_getInstance().h4s(JSON.stringify(undisclosedSDPayload))));
  };
  protoOf(SDPayloadBuilder).buildForSDMap = function (sdMap) {
    return Companion_getInstance_6().kc9(get_jsonObject(Default_getInstance().h4s(JSON.stringify(this.fullPayload))), Companion_getInstance_5().cc9(JSON.stringify(sdMap)));
  };
  function SimpleAsyncJWTCryptoProvider$sign$lambda($continuation) {
    return function (it) {
      console.log('SIGNED');
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.ia(tmp$ret$0);
      return Unit_instance;
    };
  }
  function SimpleAsyncJWTCryptoProvider$sign$lambda_0(it) {
    console.log('ERROR SIGNING', it.message);
    return Unit_instance;
  }
  function SimpleAsyncJWTCryptoProvider$verify$lambda($continuation) {
    return function (it) {
      console.log('Verified.');
      var tmp0 = $continuation;
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = new JwtVerificationResult(true);
      var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
      tmp0.ia(tmp$ret$0);
      return Unit_instance;
    };
  }
  function SimpleAsyncJWTCryptoProvider$verify$lambda_0($continuation) {
    return function (it) {
      console.log('Verification failed (SimpleAsyncJWTCryptoProvider): ' + it.message);
      var tmp0 = $continuation;
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = new JwtVerificationResult(false, it.message);
      var tmp$ret$0 = _Result___init__impl__xyqfz8(value);
      tmp0.ia(tmp$ret$0);
      return Unit_instance;
    };
  }
  function SimpleAsyncJWTCryptoProvider$signAsync$slambda(this$0, $payload, $keyID, resultContinuation) {
    this.fcd_1 = this$0;
    this.gcd_1 = $payload;
    this.hcd_1 = $keyID;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).jcd = function ($this$promise, $completion) {
    var tmp = this.a1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).va = function (p1, $completion) {
    return this.jcd((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.fcd_1.mc5(get_jsonObject(Default_getInstance().h4s(JSON.stringify(this.gcd_1))), this.hcd_1, this);
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
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).a1j = function ($this$promise, completion) {
    var i = new SimpleAsyncJWTCryptoProvider$signAsync$slambda(this.fcd_1, this.gcd_1, this.hcd_1, completion);
    i.icd_1 = $this$promise;
    return i;
  };
  function SimpleAsyncJWTCryptoProvider$signAsync$slambda_0(this$0, $payload, $keyID, resultContinuation) {
    var i = new SimpleAsyncJWTCryptoProvider$signAsync$slambda(this$0, $payload, $keyID, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.jcd($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this$0, $jwt, resultContinuation) {
    this.vcd_1 = this$0;
    this.wcd_1 = $jwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).ycd = function ($this$promise, $completion) {
    var tmp = this.a1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).va = function (p1, $completion) {
    return this.ycd((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.vcd_1.oc5(this.wcd_1, this);
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
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).a1j = function ($this$promise, completion) {
    var i = new SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this.vcd_1, this.wcd_1, completion);
    i.xcd_1 = $this$promise;
    return i;
  };
  function SimpleAsyncJWTCryptoProvider$verifyAsync$slambda_0(this$0, $jwt, resultContinuation) {
    var i = new SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this$0, $jwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ycd($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SimpleAsyncJWTCryptoProvider(algorithm, keyParam, options) {
    this.kcd_1 = algorithm;
    this.lcd_1 = keyParam;
    this.mcd_1 = options;
  }
  protoOf(SimpleAsyncJWTCryptoProvider).mc5 = function (payload, keyID, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    console.log('SIGNING', payload.toString());
    var tmp = new jose.SignJWT(JSON.parse(payload.toString()));
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    put(builder, 'alg', this.kcd_1);
    put(builder, 'typ', 'JWT');
    if (keyID == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      put(builder, 'kid', keyID);
    }
    // Inline function 'kotlin.let' call
    var it = builder.o4t();
    var tmp$ret$5 = JSON.parse(it.toString());
    var tmp_0 = tmp.setProtectedHeader(tmp$ret$5).sign(this.lcd_1, this.mcd_1);
    var tmp_1 = SimpleAsyncJWTCryptoProvider$sign$lambda(safe);
    tmp_0.then(tmp_1, SimpleAsyncJWTCryptoProvider$sign$lambda_0);
    return safe.ra();
  };
  protoOf(SimpleAsyncJWTCryptoProvider).oc5 = function (jwt, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    console.log('Verifying JWT: ' + jwt);
    var tmp = jose;
    var tmp0_elvis_lhs = this.mcd_1;
    var tmp_0 = tmp.jwtVerify(jwt, this.lcd_1, tmp0_elvis_lhs == null ? {} : tmp0_elvis_lhs);
    var tmp_1 = SimpleAsyncJWTCryptoProvider$verify$lambda(safe);
    tmp_0.then(tmp_1, SimpleAsyncJWTCryptoProvider$verify$lambda_0(safe));
    return safe.ra();
  };
  protoOf(SimpleAsyncJWTCryptoProvider).signAsync = function (payload, keyID) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SimpleAsyncJWTCryptoProvider$signAsync$slambda_0(this, payload, keyID, null));
  };
  protoOf(SimpleAsyncJWTCryptoProvider).verifyAsync = function (jwt) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SimpleAsyncJWTCryptoProvider$verifyAsync$slambda_0(this, jwt, null));
  };
  //region block: post-declaration
  defineProp(protoOf(DecoyMode), 'name', protoOf(DecoyMode).u2);
  defineProp(protoOf(DecoyMode), 'ordinal', protoOf(DecoyMode).v2);
  defineProp(protoOf(SDJwt), 'zzz_unused_disclosures', protoOf(SDJwt).gc6);
  defineProp(protoOf(SDJwt), 'zzz_unused_disclosureObjects', protoOf(SDJwt).hc6);
  defineProp(protoOf(SDJwt), 'zzz_unused_undisclosedPayload', protoOf(SDJwt).ic6);
  defineProp(protoOf(SDJwt), 'zzz_unused_fullPayload', protoOf(SDJwt).jc6);
  defineProp(protoOf(SDJwt), 'zzz_unused_digestedDisclosures', protoOf(SDJwt).kc6);
  defineProp(protoOf(SDJwt), 'zzz_unused_sdMap', protoOf(SDJwt).lc6);
  defineProp(protoOf(SDJwt), 'algorithm', protoOf(SDJwt).mc6);
  defineProp(protoOf(SDJwt), 'keyID', protoOf(SDJwt).nc6);
  defineProp(protoOf(SDJwt), 'jwk', protoOf(SDJwt).m9t);
  defineProp(protoOf(SDJwt), 'type', protoOf(SDJwt).za0);
  defineProp(protoOf(KeyBindingJwt), 'issuedAt', protoOf(KeyBindingJwt).xc5);
  defineProp(protoOf(KeyBindingJwt), 'audience', protoOf(KeyBindingJwt).yc5);
  defineProp(protoOf(KeyBindingJwt), 'nonce', protoOf(KeyBindingJwt).zc5);
  defineProp(protoOf(KeyBindingJwt), 'sdHash', protoOf(KeyBindingJwt).ac6);
  protoOf($serializer).n2c = typeParametersSerializers;
  protoOf($serializer_0).n2c = typeParametersSerializers;
  protoOf(SDMap).asJsReadonlyMapView = asJsReadonlyMapView;
  defineProp(protoOf(SDPayload), 'sDisclosures', protoOf(SDPayload).pc9);
  defineProp(protoOf(SDPayload), 'fullPayload', protoOf(SDPayload).qc9);
  defineProp(protoOf(SDPayload), 'sdMap', protoOf(SDPayload).rc9);
  defineProp(protoOf(VerificationResult), 'verified', protoOf(VerificationResult).wc9);
  defineProp(protoOf(SDJwtJS), 'disclosures', protoOf(SDJwtJS).pcc);
  defineProp(protoOf(SDJwtJS), 'disclosureObjects', protoOf(SDJwtJS).qcc);
  defineProp(protoOf(SDJwtJS), 'undisclosedPayload', protoOf(SDJwtJS).nc9);
  defineProp(protoOf(SDJwtJS), 'fullPayload', protoOf(SDJwtJS).qc9);
  defineProp(protoOf(SDJwtJS), 'sdMap', protoOf(SDJwtJS).rc9);
  protoOf(SimpleAsyncJWTCryptoProvider).nc5 = sign$default;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_4 = new Companion_3();
  Companion_instance_7 = new Companion_6();
  Companion_instance_8 = new Companion_7();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    $id$walt$sdjwt.DecoyMode = DecoyMode;
    $id$walt$sdjwt.DecoyMode.values = values;
    $id$walt$sdjwt.DecoyMode.valueOf = valueOf;
    defineProp($id$walt$sdjwt.DecoyMode, 'NONE', DecoyMode_NONE_getInstance);
    defineProp($id$walt$sdjwt.DecoyMode, 'FIXED', DecoyMode_FIXED_getInstance);
    defineProp($id$walt$sdjwt.DecoyMode, 'RANDOM', DecoyMode_RANDOM_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    $id$walt$sdjwt.KeyBindingJwt = KeyBindingJwt;
    defineProp($id$walt$sdjwt.KeyBindingJwt, 'Companion', Companion_getInstance_1);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    $id$walt$sdjwt.SDField = SDField;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    $id$walt$sdjwt.SDJwt = SDJwt;
    defineProp($id$walt$sdjwt.SDJwt, 'Companion', Companion_getInstance_3);
    Companion_2.prototype.$signAsyncCOROUTINE$1 = $signAsyncCOROUTINE$1;
    $id$walt$sdjwt.SDJwt.$verifyAsyncCOROUTINE$0 = $verifyAsyncCOROUTINE$0;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    $id$walt$sdjwt.SDPayload = SDPayload;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    $id$walt$sdjwt.SDisclosure = SDisclosure;
    defineProp($id$walt$sdjwt.SDisclosure, 'Companion', Companion_getInstance_7);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    $id$walt$sdjwt.JwtVerificationResult = JwtVerificationResult;
    $id$walt$sdjwt.VerificationResult = VerificationResult;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    var $id$walt$sdjwt$utils = $id$walt$sdjwt.utils || ($id$walt$sdjwt.utils = {});
    defineProp($id$walt$sdjwt$utils, 'Base64Utils', Base64Utils_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    $id$walt$sdjwt.SDJwtJS = SDJwtJS;
    defineProp($id$walt$sdjwt.SDJwtJS, 'Companion', Companion_getInstance_8);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    $id$walt$sdjwt.SDMapBuilder = SDMapBuilder;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    $id$walt$sdjwt.SDPayloadBuilder = SDPayloadBuilder;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$sdjwt = $id$walt.sdjwt || ($id$walt.sdjwt = {});
    $id$walt$sdjwt.SimpleAsyncJWTCryptoProvider = SimpleAsyncJWTCryptoProvider;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance_3;
  _.$_$.b = Companion_instance_4;
  _.$_$.c = Companion_getInstance_6;
  _.$_$.d = zzz_unused_SDMapBuilder;
  //endregion
  return _;
}));

//# sourceMappingURL=waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js.map
