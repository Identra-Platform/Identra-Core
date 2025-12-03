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
  var protoOf = kotlin_kotlin.$_$.gd;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForInterface = kotlin_kotlin.$_$.gc;
  var toString = kotlin_kotlin.$_$.kd;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.p;
  var lazy = kotlin_kotlin.$_$.yi;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a1;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.z;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.u1;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dc;
  var THROW_IAE = kotlin_kotlin.$_$.bi;
  var Unit_instance = kotlin_kotlin.$_$.a6;
  var Enum = kotlin_kotlin.$_$.oh;
  var defineProp = kotlin_kotlin.$_$.vb;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.w7;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var put = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d1;
  var Companion_getInstance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.b;
  var ASCII_instance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.si;
  var get_long = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b1;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.v;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var JsonNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var THROW_CCE = kotlin_kotlin.$_$.ai;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var initMetadataForObject = kotlin_kotlin.$_$.ic;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var objectCreate = kotlin_kotlin.$_$.fd;
  var put_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e1;
  var toString_0 = kotlin_kotlin.$_$.fj;
  var getBooleanHashCode = kotlin_kotlin.$_$.yb;
  var hashCode = kotlin_kotlin.$_$.bc;
  var equals = kotlin_kotlin.$_$.wb;
  var CoroutineImpl = kotlin_kotlin.$_$.gb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.qa;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ec;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.l1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var MatchNamedGroupCollection = kotlin_kotlin.$_$.je;
  var isInterface = kotlin_kotlin.$_$.rc;
  var charArrayOf = kotlin_kotlin.$_$.pb;
  var trim = kotlin_kotlin.$_$.bh;
  var split = kotlin_kotlin.$_$.uf;
  var toSet = kotlin_kotlin.$_$.ka;
  var emptySet = kotlin_kotlin.$_$.x7;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var decodeToString = kotlin_kotlin.$_$.pe;
  var endsWith = kotlin_kotlin.$_$.ue;
  var contains = kotlin_kotlin.$_$.ne;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var get_contentOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.w;
  var listOf = kotlin_kotlin.$_$.w8;
  var plus = kotlin_kotlin.$_$.h9;
  var emptyList = kotlin_kotlin.$_$.v7;
  var joinToString = kotlin_kotlin.$_$.o8;
  var substringBefore = kotlin_kotlin.$_$.dg;
  var substringAfter = kotlin_kotlin.$_$.cg;
  var Pair = kotlin_kotlin.$_$.xh;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.t;
  var mapCapacity = kotlin_kotlin.$_$.y8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var charSequenceLength = kotlin_kotlin.$_$.sb;
  var listOf_0 = kotlin_kotlin.$_$.x8;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.y;
  var coerceAtLeast = kotlin_kotlin.$_$.pd;
  var plus_0 = kotlin_kotlin.$_$.d9;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.x;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var put_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c1;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.j6;
  var KtMap = kotlin_kotlin.$_$.k6;
  var toMap = kotlin_kotlin.$_$.da;
  var encodeToByteArray = kotlin_kotlin.$_$.se;
  var sha256 = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.d;
  var Default_getInstance_0 = kotlin_dev_whyoleg_cryptography_cryptography_random.$_$.a;
  var JsonArrayBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var add = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.u;
  var toMutableMap = kotlin_kotlin.$_$.ia;
  var filterNotNull = kotlin_kotlin.$_$.a8;
  var SecureRandom_getInstance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.c;
  var numberToInt = kotlin_kotlin.$_$.dd;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var addAll = kotlin_kotlin.$_$.s6;
  var asSequence = kotlin_kotlin.$_$.w6;
  var map = kotlin_kotlin.$_$.ge;
  var filter = kotlin_kotlin.$_$.de;
  var flatMap = kotlin_kotlin.$_$.ee;
  var toList = kotlin_kotlin.$_$.ie;
  var Default_getInstance_1 = kotlin_kotlin.$_$.g5;
  var PaddingOption_ABSENT_OPTIONAL_getInstance = kotlin_kotlin.$_$.k;
  var getStringHashCode = kotlin_kotlin.$_$.ac;
  var replace = kotlin_kotlin.$_$.rf;
  var trimEnd = kotlin_kotlin.$_$.yg;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var initMetadataForLambda = kotlin_kotlin.$_$.hc;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var copyToArray = kotlin_kotlin.$_$.q7;
  var joinToString_0 = kotlin_kotlin.$_$.p8;
  var println = kotlin_kotlin.$_$.jb;
  var plus_1 = kotlin_kotlin.$_$.e9;
  var toList_0 = kotlin_kotlin.$_$.ba;
  var Companion_instance = kotlin_kotlin.$_$.v5;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l3;
  var intercepted = kotlin_kotlin.$_$.ta;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.k1;
  //endregion
  //region block: pre-declaration
  function sign$default(payload, keyID, $completion, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.gc3(payload, keyID, $completion) : $super.gc3.call(this, payload, keyID, $completion);
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
    return $super === VOID ? this.nc3(payload, keyID, typ, headers) : $super.nc3.call(this, payload, keyID, typ, headers);
  }
  function verify(jwt, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.oc3(jwt, keyID) : $super.oc3.call(this, jwt, keyID);
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
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(SDMap, 'SDMap', VOID, VOID, [KtMap], VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForClass(zzz_unused_SDMapBuilder, 'SDMapBuilder', zzz_unused_SDMapBuilder);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(SDPayload, 'SDPayload');
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(SDisclosure, 'SDisclosure');
  initMetadataForObject(SdjwtStringUtils, 'SdjwtStringUtils');
  initMetadataForClass(JwtVerificationResult, 'JwtVerificationResult');
  initMetadataForClass(VerificationResult, 'VerificationResult');
  initMetadataForObject(Base64Utils, 'Base64Utils');
  initMetadataForInterface(JSAsyncJWTCryptoProvider, 'JSAsyncJWTCryptoProvider', VOID, VOID, [AsyncJWTCryptoProvider], [2, 1]);
  initMetadataForLambda(SDJwtJS$Companion$verifyAndParseAsync$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(SDJwtJS$Companion$signAsync$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_6);
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
    return $this.jc3_1.z();
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
    tmp.jc3_1 = lazy(tmp_0, DecoyMode$Companion$_anonymous__jwwj4w);
  }
  protoOf(Companion).kc3 = function (json) {
    var tmp = get_log();
    tmp.h6e(DecoyMode$Companion$fromJSON$lambda(json));
    var tmp_0;
    if (json instanceof JsonObject) {
      var tmp0_safe_receiver = get_jsonObject(json).ze('name');
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p4s();
    } else {
      tmp_0 = get_jsonPrimitive(json).p4s();
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
  protoOf(Companion).l4s = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).w2a = function (typeParamsSerializers) {
    return this.l4s();
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
      log = tmp.q6e(log$lambda);
    }
  }
  function JWTCryptoProvider() {
  }
  function Companion_0() {
    this.KB_JWT_TYPE = 'kb+jwt';
  }
  protoOf(Companion_0).pc3 = function () {
    return this.KB_JWT_TYPE;
  };
  protoOf(Companion_0).parse = function (kbJwt) {
    // Inline function 'kotlin.let' call
    var it = Companion_getInstance_3().parse(kbJwt);
    return new KeyBindingJwt(it.jwt, it.header, new SDPayload(it.zzz_unused_fullPayload));
  };
  protoOf(Companion_0).qc3 = function (presentedSdJwt, audience, nonce, cryptoProvider, keyId) {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    builder.b4t('iat', JsonPrimitive(System_instance.c5t().y5x()));
    put(builder, 'aud', audience);
    put(builder, 'nonce', nonce);
    put(builder, 'sd_hash', Companion_instance_1.getSdHash(presentedSdJwt));
    var tmp$ret$1 = builder.n4r();
    return this.parse(cryptoProvider.sign(tmp$ret$1, keyId, 'kb+jwt'));
  };
  protoOf(Companion_0).sign = function (presentedSdJwt, audience, nonce, cryptoProvider, keyId, $super) {
    keyId = keyId === VOID ? null : keyId;
    return $super === VOID ? this.qc3(presentedSdJwt, audience, nonce, cryptoProvider, keyId) : $super.qc3.call(this, presentedSdJwt, audience, nonce, cryptoProvider, keyId);
  };
  protoOf(Companion_0).getSdHash = function (presentedSdJwt) {
    return Companion_getInstance().a6g(ASCII_instance.dc3(presentedSdJwt)).oc1();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function KeyBindingJwt(jwt, header, payload) {
    SDJwt.call(this, jwt, header, payload);
  }
  protoOf(KeyBindingJwt).rc3 = function () {
    return get_long(get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.ze('iat'))));
  };
  protoOf(KeyBindingJwt).sc3 = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.ze('aud'))).p4s();
  };
  protoOf(KeyBindingJwt).tc3 = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.ze('nonce'))).p4s();
  };
  protoOf(KeyBindingJwt).uc3 = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.ze('sd_hash'))).p4s();
  };
  protoOf(KeyBindingJwt).vc3 = function (jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId) {
    return this.type === 'kb+jwt' && this.audience === reqAudience && this.nonce === reqNonce && sdJwt.isPresentation && Companion_instance_1.getSdHash(sdJwt.toFormattedString(true, false)) === this.sdHash && this.verify(jwtCryptoProvider, keyId).verified;
  };
  protoOf(KeyBindingJwt).verifyKB = function (jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId, $super) {
    keyId = keyId === VOID ? null : keyId;
    return $super === VOID ? this.vc3(jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId) : $super.vc3.call(this, jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId);
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
  protoOf(Companion_1).kc3 = function (json) {
    var tmp = get_log_0();
    tmp.h6e(SDField$Companion$fromJSON$lambda(json));
    var tmp0_safe_receiver = get_jsonObject(json).ze('sd');
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
    var tmp3_safe_receiver = get_jsonObject(json).ze('children');
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_3;
      if (tmp3_safe_receiver instanceof JsonObject) {
        // Inline function 'kotlin.let' call
        var it = get_jsonObject(tmp3_safe_receiver);
        tmp_3 = Companion_getInstance_4().qc4(it);
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
    tmp0_serialDesc.w29('sd', false);
    tmp0_serialDesc.w29('children', true);
    this.rc4_1 = tmp0_serialDesc;
  }
  protoOf($serializer).sc4 = function (encoder, value) {
    var tmp0_desc = this.rc4_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.n23(tmp0_desc, 0, value.sd);
    if (tmp1_output.d24(tmp0_desc, 1) ? true : !(value.children == null)) {
      tmp1_output.z23(tmp0_desc, 1, $serializer_getInstance_0(), value.children);
    }
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer).u1y = function (encoder, value) {
    return this.sc4(encoder, value instanceof SDField ? value : THROW_CCE());
  };
  protoOf($serializer).v1y = function (decoder) {
    var tmp0_desc = this.rc4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_input = decoder.g22(tmp0_desc);
    if (tmp6_input.w22()) {
      tmp4_local0 = tmp6_input.i22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.u22(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.i22(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.u22(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.h22(tmp0_desc);
    return SDField_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).t1y = function () {
    return this.rc4_1;
  };
  protoOf($serializer).l2a = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance().rc4_1);
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
  protoOf(SDField).tc4 = function () {
    return this.sd;
  };
  protoOf(SDField).uc4 = function () {
    return this.children;
  };
  protoOf(SDField).vc4 = function () {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    put_0(builder, 'sd', this.sd);
    var tmp0_safe_receiver = this.children;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      builder.b4t('children', tmp0_safe_receiver.vc4());
    }
    return builder.n4r();
  };
  protoOf(SDField).cc = function () {
    return this.sd;
  };
  protoOf(SDField).dc = function () {
    return this.children;
  };
  protoOf(SDField).zc4 = function (sd, children) {
    return new SDField(sd, children);
  };
  protoOf(SDField).copy = function (sd, children, $super) {
    sd = sd === VOID ? this.sd : sd;
    children = children === VOID ? this.children : children;
    return $super === VOID ? this.zc4(sd, children) : $super.zc4.call(this, sd, children);
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
      log_0 = tmp.q6e(log$lambda_0);
    }
  }
  function $signAsyncCOROUTINE$1(_this__u8e3s4, sdPayload, jwtCryptoProvider, keyID, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ic5_1 = _this__u8e3s4;
    this.jc5_1 = sdPayload;
    this.kc5_1 = jwtCryptoProvider;
    this.lc5_1 = keyID;
  }
  protoOf($signAsyncCOROUTINE$1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.kc5_1.gc3(this.jc5_1.undisclosedPayload, this.lc5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.ic5_1.createFromSignedJwt(ARGUMENT, this.jc5_1);
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
  protoOf($signAsyncCOROUTINE$1)['<set-state>'] = protoOf($signAsyncCOROUTINE$1).t9;
  protoOf($signAsyncCOROUTINE$1)['<get-state>'] = protoOf($signAsyncCOROUTINE$1).u9;
  protoOf($signAsyncCOROUTINE$1)['<set-exceptionState>'] = protoOf($signAsyncCOROUTINE$1).v9;
  protoOf($signAsyncCOROUTINE$1)['<get-exceptionState>'] = protoOf($signAsyncCOROUTINE$1).w9;
  protoOf($signAsyncCOROUTINE$1)['<set-result>'] = protoOf($signAsyncCOROUTINE$1).x9;
  protoOf($signAsyncCOROUTINE$1)['<get-result>'] = protoOf($signAsyncCOROUTINE$1).y9;
  protoOf($signAsyncCOROUTINE$1)['<set-exception>'] = protoOf($signAsyncCOROUTINE$1).z9;
  protoOf($signAsyncCOROUTINE$1)['<get-exception>'] = protoOf($signAsyncCOROUTINE$1).aa;
  protoOf($signAsyncCOROUTINE$1)['<set-finallyPath>'] = protoOf($signAsyncCOROUTINE$1).ba;
  protoOf($signAsyncCOROUTINE$1)['<get-finallyPath>'] = protoOf($signAsyncCOROUTINE$1).ca;
  protoOf($signAsyncCOROUTINE$1)['<get-context>'] = protoOf($signAsyncCOROUTINE$1).s9;
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
  protoOf(Companion_2).mc5 = function () {
    return this.DIGESTS_KEY;
  };
  protoOf(Companion_2).nc5 = function () {
    return this.SEPARATOR;
  };
  protoOf(Companion_2).oc5 = function () {
    return this.SEPARATOR_STR;
  };
  protoOf(Companion_2).pc5 = function () {
    return this.SD_JWT_PATTERN;
  };
  protoOf(Companion_2).parse = function (sdJwt) {
    var tmp0_elvis_lhs = Regex_init_$Create$('^(?<sdjwt>(?<header>[A-Za-z0-9-_]+)\\.(?<body>[A-Za-z0-9-_]+)\\.(?<signature>[A-Za-z0-9-_]+))(?<disclosures>(~([A-Za-z0-9-_]+))+)?(~(?<kbjwt>([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+))?)?$').ue(sdJwt);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Invalid SD-JWT format: ' + sdJwt);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var matchResult = tmp;
    var tmp_0 = matchResult.af();
    var matchedGroups = isInterface(tmp_0, MatchNamedGroupCollection) ? tmp_0 : THROW_CCE();
    var tmp1_safe_receiver = matchedGroups.ze('disclosures');
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ye_1;
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
    var tmp_2 = ensureNotNull(matchedGroups.ze('sdjwt')).ye_1;
    var tmp_3 = get_jsonObject(Default_getInstance().g4q(decodeToString(SdjwtStringUtils_getInstance().rc5(ensureNotNull(matchedGroups.ze('header')).ye_1))));
    var tmp_4 = Companion_getInstance_5().tc5(ensureNotNull(matchedGroups.ze('body')).ye_1, disclosures);
    var tmp6_safe_receiver = matchedGroups.ze('kbjwt');
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.ye_1;
    var tmp_5;
    if (tmp7_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_5 = Companion_instance_1.parse(tmp7_safe_receiver);
    }
    return new SDJwt(tmp_2, tmp_3, tmp_4, tmp_5, !(matchedGroups.ze('kbjwt') == null) || endsWith(sdJwt, '~'));
  };
  protoOf(Companion_2).verifyAndParse = function (sdJwt, jwtCryptoProvider) {
    return this.parse(sdJwt).verify(jwtCryptoProvider);
  };
  protoOf(Companion_2).uc5 = function (sdJwt, jwtCryptoProvider, $completion) {
    return this.parse(sdJwt).oc4(jwtCryptoProvider, $completion);
  };
  protoOf(Companion_2).vc5 = function (signedJwt, sdPayload, withKBJwt) {
    var sdJwt = this.parse(signedJwt);
    return new SDJwt(sdJwt.jwt, sdJwt.header, sdPayload, withKBJwt, sdJwt.isPresentation || !(withKBJwt == null));
  };
  protoOf(Companion_2).createFromSignedJwt = function (signedJwt, sdPayload, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.vc5(signedJwt, sdPayload, withKBJwt) : $super.vc5.call(this, signedJwt, sdPayload, withKBJwt);
  };
  protoOf(Companion_2).wc5 = function (sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders) {
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
    return $super === VOID ? this.wc5(sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders) : $super.wc5.call(this, sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders);
  };
  protoOf(Companion_2).xc5 = function (sdPayload, jwtCryptoProvider, keyID, $completion) {
    var tmp = new $signAsyncCOROUTINE$1(this, sdPayload, jwtCryptoProvider, keyID, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Companion_2).signAsync$default = function (sdPayload, jwtCryptoProvider, keyID, $completion, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.xc5(sdPayload, jwtCryptoProvider, keyID, $completion) : $super.xc5.call(this, sdPayload, jwtCryptoProvider, keyID, $completion);
  };
  protoOf(Companion_2).yc5 = function (value, sdOnly) {
    return Regex_init_$Create$('^(?<sdjwt>(?<header>[A-Za-z0-9-_]+)\\.(?<body>[A-Za-z0-9-_]+)\\.(?<signature>[A-Za-z0-9-_]+))(?<disclosures>(~([A-Za-z0-9-_]+))+)?(~(?<kbjwt>([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+))?)?$').qe(value) && (!sdOnly || contains(value, '~'));
  };
  protoOf(Companion_2).isSDJwt = function (value, sdOnly, $super) {
    sdOnly = sdOnly === VOID ? false : sdOnly;
    return $super === VOID ? this.yc5(value, sdOnly) : $super.yc5.call(this, value, sdOnly);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function $verifyAsyncCOROUTINE$0(_this__u8e3s4, jwtCryptoProvider, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.hc6_1 = _this__u8e3s4;
    this.ic6_1 = jwtCryptoProvider;
  }
  protoOf($verifyAsyncCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.ic6_1.ic3(this.hc6_1.jwt, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            return new VerificationResult(this.hc6_1, it.verified, this.hc6_1.sdPayload.verifyDisclosures(), it.message);
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
  protoOf($verifyAsyncCOROUTINE$0)['<set-state>'] = protoOf($verifyAsyncCOROUTINE$0).t9;
  protoOf($verifyAsyncCOROUTINE$0)['<get-state>'] = protoOf($verifyAsyncCOROUTINE$0).u9;
  protoOf($verifyAsyncCOROUTINE$0)['<set-exceptionState>'] = protoOf($verifyAsyncCOROUTINE$0).v9;
  protoOf($verifyAsyncCOROUTINE$0)['<get-exceptionState>'] = protoOf($verifyAsyncCOROUTINE$0).w9;
  protoOf($verifyAsyncCOROUTINE$0)['<set-result>'] = protoOf($verifyAsyncCOROUTINE$0).x9;
  protoOf($verifyAsyncCOROUTINE$0)['<get-result>'] = protoOf($verifyAsyncCOROUTINE$0).y9;
  protoOf($verifyAsyncCOROUTINE$0)['<set-exception>'] = protoOf($verifyAsyncCOROUTINE$0).z9;
  protoOf($verifyAsyncCOROUTINE$0)['<get-exception>'] = protoOf($verifyAsyncCOROUTINE$0).aa;
  protoOf($verifyAsyncCOROUTINE$0)['<set-finallyPath>'] = protoOf($verifyAsyncCOROUTINE$0).ba;
  protoOf($verifyAsyncCOROUTINE$0)['<get-finallyPath>'] = protoOf($verifyAsyncCOROUTINE$0).ca;
  protoOf($verifyAsyncCOROUTINE$0)['<get-context>'] = protoOf($verifyAsyncCOROUTINE$0).s9;
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
  protoOf(SDJwt).wc3 = function () {
    return this.jwt;
  };
  protoOf(SDJwt).e9a = function () {
    return this.header;
  };
  protoOf(SDJwt).xc3 = function () {
    return this.sdPayload;
  };
  protoOf(SDJwt).yc3 = function () {
    return this.keyBindingJwt;
  };
  protoOf(SDJwt).zc3 = function () {
    return this.isPresentation;
  };
  protoOf(SDJwt).ac4 = function () {
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
  protoOf(SDJwt).bc4 = function () {
    return this.sdPayload.sDisclosures;
  };
  protoOf(SDJwt).cc4 = function () {
    return this.sdPayload.undisclosedPayload;
  };
  protoOf(SDJwt).dc4 = function () {
    return this.sdPayload.fullPayload;
  };
  protoOf(SDJwt).ec4 = function () {
    return this.sdPayload.digestedDisclosures;
  };
  protoOf(SDJwt).fc4 = function () {
    return this.sdPayload.sdMap;
  };
  protoOf(SDJwt).gc4 = function () {
    var tmp0_safe_receiver = this.header.ze('alg');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).hc4 = function () {
    var tmp0_safe_receiver = this.header.ze('kid');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).g9r = function () {
    var tmp0_safe_receiver = this.header.ze('jwk');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).t9y = function () {
    var tmp0_safe_receiver = this.header.ze('typ');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).toString = function () {
    return this.toFormattedString(this.isPresentation);
  };
  protoOf(SDJwt).ic4 = function (formatForPresentation, withKBJwt) {
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
    return $super === VOID ? this.ic4(formatForPresentation, withKBJwt) : $super.ic4.call(this, formatForPresentation, withKBJwt);
  };
  protoOf(SDJwt).jc4 = function (sdMap, withKBJwt) {
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
    return $super === VOID ? this.jc4(sdMap, withKBJwt) : $super.jc4.call(this, sdMap, withKBJwt);
  };
  protoOf(SDJwt).kc4 = function (discloseAll, withKBJwt) {
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
    return $super === VOID ? this.kc4(discloseAll, withKBJwt) : $super.kc4.call(this, discloseAll, withKBJwt);
  };
  protoOf(SDJwt).lc4 = function (sdMap, audience, nonce, kbCryptoProvider, kbKeyId) {
    return this.present(sdMap, Companion_instance_1.sign(this.present(sdMap).toString(), audience, nonce, kbCryptoProvider, kbKeyId));
  };
  protoOf(SDJwt).presentWithKB = function (sdMap, audience, nonce, kbCryptoProvider, kbKeyId, $super) {
    kbKeyId = kbKeyId === VOID ? null : kbKeyId;
    return $super === VOID ? this.lc4(sdMap, audience, nonce, kbCryptoProvider, kbKeyId) : $super.lc4.call(this, sdMap, audience, nonce, kbCryptoProvider, kbKeyId);
  };
  protoOf(SDJwt).mc4 = function (discloseAll, audience, nonce, kbCryptoProvider, kbKeyId) {
    return this.presentAll(discloseAll, Companion_instance_1.sign(this.presentAll(discloseAll).toString(), audience, nonce, kbCryptoProvider, kbKeyId));
  };
  protoOf(SDJwt).presentAllWithKB = function (discloseAll, audience, nonce, kbCryptoProvider, kbKeyId, $super) {
    kbKeyId = kbKeyId === VOID ? null : kbKeyId;
    return $super === VOID ? this.mc4(discloseAll, audience, nonce, kbCryptoProvider, kbKeyId) : $super.mc4.call(this, discloseAll, audience, nonce, kbCryptoProvider, kbKeyId);
  };
  protoOf(SDJwt).nc4 = function (jwtCryptoProvider, keyID) {
    // Inline function 'kotlin.let' call
    var it = jwtCryptoProvider.verify(this.jwt, keyID == null ? this.keyID : keyID);
    return new VerificationResult(this, it.verified, this.sdPayload.verifyDisclosures(), it.message);
  };
  protoOf(SDJwt).verify = function (jwtCryptoProvider, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.nc4(jwtCryptoProvider, keyID) : $super.nc4.call(this, jwtCryptoProvider, keyID);
  };
  protoOf(SDJwt).oc4 = function (jwtCryptoProvider, $completion) {
    var tmp = new $verifyAsyncCOROUTINE$0(this, jwtCryptoProvider, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
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
      var key = element.ac_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_0.k2(key);
      var tmp;
      if (value == null) {
        var answer = ArrayList_init_$Create$_0();
        destination_0.n2(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      var tmp$ret$6 = element.bc_1;
      list.n(tmp$ret$6);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_1 = LinkedHashMap_init_$Create$_0(mapCapacity(destination_0.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_1 = destination_0.x().p();
    while (_iterator__ex2g4s_1.q()) {
      var element_0 = _iterator__ex2g4s_1.r();
      var tmp_0 = element_0.y();
      // Inline function 'kotlin.collections.filterNot' call
      var tmp0 = element_0.z();
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
      destination_1.n2(tmp_0, destination_2);
    }
    var pathMap = destination_1;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_3 = LinkedHashMap_init_$Create$_0(mapCapacity(pathMap.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_3 = pathMap.x().p();
    while (_iterator__ex2g4s_3.q()) {
      var element_2 = _iterator__ex2g4s_3.r();
      var tmp_1 = element_2.y();
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = listOf_0([parent, element_2.y()]);
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
      var tmp_2 = sdPaths.x1(currentPath);
      var tmp_3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!element_2.z().h()) {
        tmp_3 = doGenerateSDMap(Companion_getInstance_4(), element_2.z(), decoyMode, decoys, sdPaths, currentPath);
      } else {
        tmp_3 = null;
      }
      var tmp$ret$24 = new SDField(tmp_2, tmp_3);
      destination_3.n2(tmp_1, tmp$ret$24);
    }
    return toSDMap(destination_3, decoyMode, decoys);
  }
  function regenerateSDField($this, sd, value, digestedDisclosure) {
    var tmp;
    if (value instanceof JsonObject) {
      tmp = $this.jc6(get_jsonObject(value), digestedDisclosure);
    } else {
      tmp = null;
    }
    return new SDField(sd, tmp);
  }
  function SDMap$Companion$$childSerializers$_anonymous__akhw5b() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance());
  }
  function SDMap$Companion$$childSerializers$_anonymous__akhw5b_0() {
    return Companion_getInstance_0().l4s();
  }
  function SDMap$Companion$fromJSON$lambda($json) {
    return function () {
      return 'Parsing SDMap from: ' + $json.toString();
    };
  }
  function Companion_3() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, SDMap$Companion$$childSerializers$_anonymous__akhw5b);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.pc4_1 = [tmp_1, lazy(tmp_2, SDMap$Companion$$childSerializers$_anonymous__akhw5b_0), null];
  }
  protoOf(Companion_3).kc6 = function (fullPayload, undisclosedPayload, decoyMode, decoys) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(fullPayload.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = fullPayload.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp = element.y();
      var tmp_0;
      if (!undisclosedPayload.r2n(element.y())) {
        tmp_0 = new SDField(true);
      } else {
        var tmp_1;
        var tmp_2 = element.z();
        if (tmp_2 instanceof JsonObject) {
          var tmp_3 = undisclosedPayload.ze(element.y());
          tmp_1 = tmp_3 instanceof JsonObject;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = new SDField(false, Companion_getInstance_4().kc6(get_jsonObject(element.z()), get_jsonObject(ensureNotNull(undisclosedPayload.ze(element.y()))), decoyMode, decoys));
        } else {
          tmp_0 = new SDField(false);
        }
      }
      var tmp$ret$1 = tmp_0;
      destination.n2(tmp, tmp$ret$1);
    }
    return toSDMap(destination, decoyMode, decoys);
  };
  protoOf(Companion_3).lc6 = function (jsonPaths, decoyMode, decoys) {
    return doGenerateSDMap(this, jsonPaths, decoyMode, decoys, toSet(jsonPaths), '');
  };
  protoOf(Companion_3).jc6 = function (undisclosedPayload, digestedDisclosures) {
    var tmp0_safe_receiver = undisclosedPayload.ze('_sd');
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
        if (digestedDisclosures.i2(get_jsonPrimitive(element).p4s())) {
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
        var tmp$ret$3 = ensureNotNull(digestedDisclosures.k2(get_jsonPrimitive(item).p4s()));
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
        var tmp$ret$7 = regenerateSDField(Companion_getInstance_4(), true, element_0.value, digestedDisclosures);
        destination_1.n2(tmp_2, tmp$ret$7);
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
    var _iterator__ex2g4s_2 = undisclosedPayload.x().p();
    while (_iterator__ex2g4s_2.q()) {
      var element_1 = _iterator__ex2g4s_2.r();
      if (!(element_1.y() === '_sd')) {
        destination_2.n2(element_1.y(), element_1.z());
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_3 = LinkedHashMap_init_$Create$_0(mapCapacity(destination_2.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_3 = destination_2.x().p();
    while (_iterator__ex2g4s_3.q()) {
      var element_2 = _iterator__ex2g4s_3.r();
      var tmp_5 = element_2.y();
      var tmp$ret$16 = regenerateSDField(Companion_getInstance_4(), false, element_2.z(), digestedDisclosures);
      destination_3.n2(tmp_5, tmp$ret$16);
    }
    return toSDMap(plus_0(tmp_4, destination_3));
  };
  protoOf(Companion_3).qc4 = function (json) {
    var tmp = get_log_1();
    tmp.h6e(SDMap$Companion$fromJSON$lambda(json));
    var tmp0_safe_receiver = json.ze('fields');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x();
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
        var pair = new Pair(element.y(), Companion_instance_2.kc3(element.z()));
        destination.n2(pair.ac_1, pair.bc_1);
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
    var tmp4_safe_receiver = json.ze('decoyMode');
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = Companion_getInstance_0().kc3(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_4 = tmp5_elvis_lhs == null ? DecoyMode_NONE_getInstance() : tmp5_elvis_lhs;
    var tmp6_safe_receiver = json.ze('decoys');
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonPrimitive(tmp6_safe_receiver);
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : get_int(tmp7_safe_receiver);
    return new SDMap(tmp_2, tmp_4, tmp8_elvis_lhs == null ? 0 : tmp8_elvis_lhs);
  };
  protoOf(Companion_3).mc6 = function (json) {
    return this.qc4(get_jsonObject(Default_getInstance().g4q(json)));
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.sdjwt.SDMap', this, 3);
    tmp0_serialDesc.w29('fields', false);
    tmp0_serialDesc.w29('decoyMode', true);
    tmp0_serialDesc.w29('decoys', true);
    this.nc6_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).oc6 = function (encoder, value) {
    var tmp0_desc = this.nc6_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().pc4_1;
    tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.wc4_1);
    if (tmp1_output.d24(tmp0_desc, 1) ? true : !value.xc4_1.equals(DecoyMode_NONE_getInstance())) {
      tmp1_output.x23(tmp0_desc, 1, tmp2_cached[1].z(), value.xc4_1);
    }
    if (tmp1_output.d24(tmp0_desc, 2) ? true : !(value.yc4_1 === 0)) {
      tmp1_output.q23(tmp0_desc, 2, value.yc4_1);
    }
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_0).u1y = function (encoder, value) {
    return this.oc6(encoder, value instanceof SDMap ? value : THROW_CCE());
  };
  protoOf($serializer_0).v1y = function (decoder) {
    var tmp0_desc = this.nc6_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.g22(tmp0_desc);
    var tmp8_cached = Companion_getInstance_4().pc4_1;
    if (tmp7_input.w22()) {
      tmp4_local0 = tmp7_input.s22(tmp0_desc, 0, tmp8_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.s22(tmp0_desc, 1, tmp8_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.l22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.x22(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.s22(tmp0_desc, 0, tmp8_cached[0].z(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.s22(tmp0_desc, 1, tmp8_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.l22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.h22(tmp0_desc);
    return SDMap_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_0).t1y = function () {
    return this.nc6_1;
  };
  protoOf($serializer_0).l2a = function () {
    var tmp0_cached = Companion_getInstance_4().pc4_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].z(), tmp0_cached[1].z(), IntSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function SDMap_init_$Init$(seen0, fields, decoyMode, decoys, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_0().nc6_1);
    }
    $this.wc4_1 = fields;
    if (0 === (seen0 & 2))
      $this.xc4_1 = DecoyMode_NONE_getInstance();
    else
      $this.xc4_1 = decoyMode;
    if (0 === (seen0 & 4))
      $this.yc4_1 = 0;
    else
      $this.yc4_1 = decoys;
    return $this;
  }
  function SDMap_init_$Create$(seen0, fields, decoyMode, decoys, serializationConstructorMarker) {
    return SDMap_init_$Init$(seen0, fields, decoyMode, decoys, serializationConstructorMarker, objectCreate(protoOf(SDMap)));
  }
  function SDMap(fields, decoyMode, decoys) {
    Companion_getInstance_4();
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    decoys = decoys === VOID ? 0 : decoys;
    this.wc4_1 = fields;
    this.xc4_1 = decoyMode;
    this.yc4_1 = decoys;
  }
  protoOf(SDMap).x = function () {
    return this.wc4_1.x();
  };
  protoOf(SDMap).l2 = function () {
    return this.wc4_1.l2();
  };
  protoOf(SDMap).s = function () {
    return this.wc4_1.s();
  };
  protoOf(SDMap).m2 = function () {
    return this.wc4_1.m2();
  };
  protoOf(SDMap).h = function () {
    return this.wc4_1.h();
  };
  protoOf(SDMap).ze = function (key) {
    return this.wc4_1.k2(key);
  };
  protoOf(SDMap).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.ze((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(SDMap).pc6 = function (value) {
    return this.wc4_1.j2(value);
  };
  protoOf(SDMap).j2 = function (value) {
    if (!(value instanceof SDField))
      return false;
    return this.pc6(value instanceof SDField ? value : THROW_CCE());
  };
  protoOf(SDMap).r2n = function (key) {
    return this.wc4_1.i2(key);
  };
  protoOf(SDMap).i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.r2n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(SDMap).vc4 = function () {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder_0 = new JsonObjectBuilder();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.wc4_1.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      builder_0.b4t(element.y(), element.z().vc4());
    }
    var tmp$ret$4 = builder_0.n4r();
    builder.b4t('fields', tmp$ret$4);
    put(builder, 'decoyMode', this.xc4_1.q2_1);
    put_1(builder, 'decoys', this.yc4_1);
    return builder.n4r();
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
      log_1 = tmp.q6e(log$lambda_1);
    }
  }
  function zzz_unused_SDMapBuilder(decoyMode, numDecoys) {
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    numDecoys = numDecoys === VOID ? 0 : numDecoys;
    this.qc6_1 = decoyMode;
    this.rc6_1 = numDecoys;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.sc6_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(zzz_unused_SDMapBuilder).tc6 = function (key, sd, children) {
    var tmp0 = this.sc6_1;
    // Inline function 'kotlin.collections.set' call
    var value = new SDField(sd, children);
    tmp0.n2(key, value);
    return this;
  };
  protoOf(zzz_unused_SDMapBuilder).w2v = function () {
    return new SDMap(toMap(this.sc6_1), this.qc6_1, this.rc6_1);
  };
  function digest($this, value) {
    var messageDigest = sha256(encodeToByteArray(value));
    return messageDigest.oc1();
  }
  function generateSalt($this) {
    var randomness = Default_getInstance_0().il(16);
    return $this.sc5_1.qk(randomness);
  }
  function generateDisclosure($this, key, value) {
    var salt = generateSalt($this);
    // Inline function 'kotlinx.serialization.json.buildJsonArray' call
    var builder = new JsonArrayBuilder();
    add(builder, salt);
    add(builder, key);
    builder.d4t(value);
    var tmp$ret$1 = builder.n4r();
    // Inline function 'kotlin.let' call
    var disclosure = $this.sc5_1.qk(encodeToByteArray(tmp$ret$1.toString()));
    return new SDisclosure(disclosure, salt, key, value);
  }
  function digestSDClaim($this, key, value, digests2disclosures) {
    var disclosure = generateDisclosure($this, key, value);
    // Inline function 'kotlin.also' call
    var this_0 = digest($this, disclosure.disclosure);
    // Inline function 'kotlin.collections.set' call
    digests2disclosures.n2(this_0, disclosure);
    return this_0;
  }
  function removeSDFields($this, payload, sdMap) {
    // Inline function 'kotlin.collections.filterKeys' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.x().p();
    while (_iterator__ex2g4s.q()) {
      var entry = _iterator__ex2g4s.r();
      var key = entry.y();
      var tmp0_safe_receiver = sdMap.k2(key);
      if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sd) === true)) {
        result.n2(entry.y(), entry.z());
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(result.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = result.x().p();
    while (_iterator__ex2g4s_0.q()) {
      var element = _iterator__ex2g4s_0.r();
      var tmp = element.y();
      var tmp_0;
      var tmp_1;
      var tmp_2 = element.z();
      if (tmp_2 instanceof JsonObject) {
        var tmp2_safe_receiver = sdMap.k2(element.y());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.h());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp_3 = Companion_getInstance_5();
        var tmp_4 = get_jsonObject(element.z());
        var tmp0_safe_receiver_0 = sdMap.k2(element.y());
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
        tmp_0 = element.z();
      }
      var tmp$ret$6 = tmp_0;
      destination.n2(tmp, tmp$ret$6);
    }
    return new JsonObject(destination);
  }
  function generateSDPayload($this, payload, sdMap, digests2disclosures) {
    var sdPayload = toMutableMap(removeSDFields($this, payload, sdMap));
    // Inline function 'kotlin.collections.filterKeys' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.x().p();
    while (_iterator__ex2g4s.q()) {
      var entry = _iterator__ex2g4s.r();
      var key = entry.y();
      var tmp;
      var tmp0_safe_receiver = sdMap.ze(key);
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sd) === true) {
        tmp = true;
      } else {
        var tmp1_safe_receiver = sdMap.ze(key);
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.children;
        tmp = !(this_0 == null || this_0.h());
      }
      if (tmp) {
        result.n2(entry.y(), entry.z());
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(result.s());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = result.x().p();
    while (_iterator__ex2g4s_0.q()) {
      var item = _iterator__ex2g4s_0.r();
      var tmp_0;
      var tmp_1;
      var tmp_2 = item.z();
      if (!(tmp_2 instanceof JsonObject)) {
        tmp_1 = true;
      } else {
        var tmp0_safe_receiver_0 = sdMap.ze(item.y());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_1 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.children;
        tmp_1 = this_1 == null || this_1.h();
      }
      if (tmp_1) {
        tmp_0 = digestSDClaim(Companion_getInstance_5(), item.y(), item.z(), digests2disclosures);
      } else {
        var nestedSDPayload = generateSDPayload(Companion_getInstance_5(), get_jsonObject(item.z()), ensureNotNull(ensureNotNull(sdMap.ze(item.y())).children), digests2disclosures);
        var tmp_3;
        var tmp1_safe_receiver_0 = sdMap.ze(item.y());
        if ((tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.sd) === true) {
          tmp_3 = digestSDClaim(Companion_getInstance_5(), item.y(), nestedSDPayload, digests2disclosures);
        } else {
          // Inline function 'kotlin.collections.set' call
          var key_0 = item.y();
          sdPayload.n2(key_0, nestedSDPayload);
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
      if (!sdMap.xc4_1.equals(DecoyMode_NONE_getInstance()) && sdMap.yc4_1 > 0) {
        var numDecoys;
        switch (sdMap.xc4_1.r2_1) {
          case 2:
            numDecoys = numberToInt(SecureRandom_getInstance().hl(1.0, sdMap.yc4_1 + 1.0));
            break;
          case 1:
            numDecoys = sdMap.yc4_1;
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
            add(builder, digest(Companion_getInstance_5(), generateSalt(Companion_getInstance_5())));
          }
           while (inductionVariable < times);
      }
      // Inline function 'kotlin.collections.set' call
      var value = builder.n4r();
      sdPayload.n2('_sd', value);
    }
    return new JsonObject(sdPayload);
  }
  function disclosePayloadRecursively($this, payload, verificationDisclosureMap) {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      if (element.y() === '_sd') {
        var tmp = element.z();
        if (!(tmp instanceof JsonArray))
          throw Exception_init_$Create$('SD-JWT contains invalid _sd element');
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = get_jsonArray(element.z()).p();
        while (_iterator__ex2g4s_0.q()) {
          var element_0 = _iterator__ex2g4s_0.r();
          unveilDisclosureIfPresent($this, get_jsonPrimitive(element_0).p4s(), builder, verificationDisclosureMap);
        }
      } else {
        var tmp_0 = element.z();
        if (tmp_0 instanceof JsonObject) {
          builder.b4t(element.y(), disclosePayloadRecursively($this, get_jsonObject(element.z()), verificationDisclosureMap));
        } else {
          builder.b4t(element.y(), element.z());
        }
      }
    }
    return builder.n4r();
  }
  function unveilDisclosureIfPresent($this, digest, objectBuilder, verificationDisclosureMap) {
    var tmp1_elvis_lhs = verificationDisclosureMap == null ? null : verificationDisclosureMap.o2(digest);
    var sDisclosure = tmp1_elvis_lhs == null ? $this.digestedDisclosures.k2(digest) : tmp1_elvis_lhs;
    if (!(sDisclosure == null)) {
      var tmp;
      var tmp_0 = sDisclosure.value;
      if (tmp_0 instanceof JsonObject) {
        tmp = disclosePayloadRecursively($this, get_jsonObject(sDisclosure.value), verificationDisclosureMap);
      } else {
        tmp = sDisclosure.value;
      }
      objectBuilder.b4t(sDisclosure.key, tmp);
    }
  }
  function filterDisclosures($this, currPayloadObject, sdMap) {
    var tmp;
    if (currPayloadObject.r2n('_sd')) {
      var tmp_0 = currPayloadObject.ze('_sd');
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
    var _iterator__ex2g4s = currPayloadObject.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp_1;
      var tmp_2 = element.z();
      if (tmp_2 instanceof JsonObject) {
        var tmp0_safe_receiver = sdMap.k2(element.y());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.h());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        destination.n2(element.y(), element.z());
      }
    }
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = destination.x().p();
    while (_iterator__ex2g4s_0.q()) {
      var element_0 = _iterator__ex2g4s_0.r();
      var list = filterDisclosures($this, get_jsonObject(element_0.z()), ensureNotNull(ensureNotNull(sdMap.k2(element_0.y())).children));
      addAll(destination_0, list);
    }
    var tmp_3 = destination_0;
    var tmp0_safe_receiver_0 = currPayloadObject.ze('_sd');
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
  function Companion_4() {
    Companion_instance_5 = this;
    this.sc5_1 = Default_getInstance_1().mk_1.ok(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(Companion_4).uc6 = function (fullPayload, disclosureMap) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var digestedDisclosures = LinkedHashMap_init_$Create$();
    return new SDPayload(generateSDPayload(this, fullPayload, disclosureMap, digestedDisclosures), digestedDisclosures);
  };
  protoOf(Companion_4).vc6 = function (fullPayload, undisclosedPayload, decoyMode, decoys) {
    return this.uc6(fullPayload, Companion_getInstance_4().kc6(fullPayload, undisclosedPayload, decoyMode, decoys));
  };
  protoOf(Companion_4).wc6 = function (fullPayload, undisclosedPayload, decoyMode, decoys, $super) {
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    decoys = decoys === VOID ? 0 : decoys;
    return $super === VOID ? this.vc6(fullPayload, undisclosedPayload, decoyMode, decoys) : $super.vc6.call(this, fullPayload, undisclosedPayload, decoyMode, decoys);
  };
  protoOf(Companion_4).tc5 = function (jwtBody, disclosures) {
    var tmp = get_jsonObject(Default_getInstance().g4q(decodeToString(SdjwtStringUtils_getInstance().rc5(jwtBody))));
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(disclosures, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = disclosures.p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = new Pair(digest(Companion_getInstance_5(), element), Companion_instance_6.parse(element));
      destination.n2(pair.ac_1, pair.bc_1);
    }
    return new SDPayload(tmp, destination);
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function SDPayload$filterDisclosures$lambda(it) {
    return get_jsonPrimitive(it).p4s();
  }
  function SDPayload$filterDisclosures$lambda_0(this$0) {
    return function (digest) {
      return this$0.digestedDisclosures.i2(digest);
    };
  }
  function SDPayload$filterDisclosures$lambda_1(this$0) {
    return function (digest) {
      return ensureNotNull(this$0.digestedDisclosures.k2(digest));
    };
  }
  function SDPayload$filterDisclosures$lambda_2($sdMap) {
    return function (sd) {
      var tmp0_safe_receiver = $sdMap.k2(sd.key);
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
        var tmp0_safe_receiver = $sdMap.k2(sd.key);
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.h());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = filterDisclosures(this$0, sd.value, ensureNotNull(ensureNotNull($sdMap.k2(sd.key)).children));
      } else {
        // Inline function 'kotlin.collections.listOf' call
        tmp_0 = emptyList();
      }
      return plus(tmp, tmp_0);
    };
  }
  function SDPayload(undisclosedPayload, digestedDisclosures) {
    Companion_getInstance_5();
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
  protoOf(SDPayload).xc6 = function () {
    return this.undisclosedPayload;
  };
  protoOf(SDPayload).yc6 = function () {
    return this.digestedDisclosures;
  };
  protoOf(SDPayload).zc6 = function () {
    return this.digestedDisclosures.m2();
  };
  protoOf(SDPayload).ac7 = function () {
    return disclosePayloadRecursively(this, this.undisclosedPayload, null);
  };
  protoOf(SDPayload).bc7 = function () {
    return Companion_getInstance_4().jc6(this.undisclosedPayload, this.digestedDisclosures);
  };
  protoOf(SDPayload).withSelectiveDisclosures = function (sdMap) {
    var selectedDisclosures = filterDisclosures(this, this.undisclosedPayload, sdMap);
    // Inline function 'kotlin.collections.filterValues' call
    var this_0 = this.digestedDisclosures;
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.x().p();
    while (_iterator__ex2g4s.q()) {
      var entry = _iterator__ex2g4s.r();
      var it = entry.z();
      if (selectedDisclosures.x1(it.disclosure)) {
        result.n2(entry.y(), entry.z());
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
  protoOf(SDPayload).cc = function () {
    return this.undisclosedPayload;
  };
  protoOf(SDPayload).dc = function () {
    return this.digestedDisclosures;
  };
  protoOf(SDPayload).cc7 = function (undisclosedPayload, digestedDisclosures) {
    return new SDPayload(undisclosedPayload, digestedDisclosures);
  };
  protoOf(SDPayload).copy = function (undisclosedPayload, digestedDisclosures, $super) {
    undisclosedPayload = undisclosedPayload === VOID ? this.undisclosedPayload : undisclosedPayload;
    digestedDisclosures = digestedDisclosures === VOID ? this.digestedDisclosures : digestedDisclosures;
    return $super === VOID ? this.cc7(undisclosedPayload, digestedDisclosures) : $super.cc7.call(this, undisclosedPayload, digestedDisclosures);
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
  function Companion_5() {
  }
  protoOf(Companion_5).parse = function (disclosure) {
    // Inline function 'kotlin.let' call
    var it = get_jsonArray(Default_getInstance().g4q(decodeToString(SdjwtStringUtils_getInstance().rc5(disclosure))));
    if (!(it.s() === 3)) {
      throw Exception_init_$Create$('Invalid selective disclosure');
    }
    return new SDisclosure(disclosure, get_jsonPrimitive(it.u(0)).p4s(), get_jsonPrimitive(it.u(1)).p4s(), it.u(2));
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function SDisclosure(disclosure, salt, key, value) {
    this.disclosure = disclosure;
    this.salt = salt;
    this.key = key;
    this.value = value;
  }
  protoOf(SDisclosure).dc7 = function () {
    return this.disclosure;
  };
  protoOf(SDisclosure).ec7 = function () {
    return this.salt;
  };
  protoOf(SDisclosure).y = function () {
    return this.key;
  };
  protoOf(SDisclosure).z = function () {
    return this.value;
  };
  protoOf(SDisclosure).cc = function () {
    return this.disclosure;
  };
  protoOf(SDisclosure).dc = function () {
    return this.salt;
  };
  protoOf(SDisclosure).qp = function () {
    return this.key;
  };
  protoOf(SDisclosure).j6y = function () {
    return this.value;
  };
  protoOf(SDisclosure).fc7 = function (disclosure, salt, key, value) {
    return new SDisclosure(disclosure, salt, key, value);
  };
  protoOf(SDisclosure).copy = function (disclosure, salt, key, value, $super) {
    disclosure = disclosure === VOID ? this.disclosure : disclosure;
    salt = salt === VOID ? this.salt : salt;
    key = key === VOID ? this.key : key;
    value = value === VOID ? this.value : value;
    return $super === VOID ? this.fc7(disclosure, salt, key, value) : $super.fc7.call(this, disclosure, salt, key, value);
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
    this.qc5_1 = Default_getInstance_1().mk_1.ok(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(SdjwtStringUtils).rc5 = function (_this__u8e3s4) {
    return this.qc5_1.uk(_this__u8e3s4);
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
  protoOf(JwtVerificationResult).gc7 = function () {
    return this.verified;
  };
  protoOf(JwtVerificationResult).sa = function () {
    return this.message;
  };
  protoOf(JwtVerificationResult).cc = function () {
    return this.verified;
  };
  protoOf(JwtVerificationResult).dc = function () {
    return this.message;
  };
  protoOf(JwtVerificationResult).hc7 = function (verified, message) {
    return new JwtVerificationResult(verified, message);
  };
  protoOf(JwtVerificationResult).copy = function (verified, message, $super) {
    verified = verified === VOID ? this.verified : verified;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.hc7(verified, message) : $super.hc7.call(this, verified, message);
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
  protoOf(VerificationResult).ic7 = function () {
    return this.sdJwt;
  };
  protoOf(VerificationResult).jc7 = function () {
    return this.signatureVerified;
  };
  protoOf(VerificationResult).kc7 = function () {
    return this.disclosuresVerified;
  };
  protoOf(VerificationResult).sa = function () {
    return this.message;
  };
  protoOf(VerificationResult).gc7 = function () {
    return this.signatureVerified && this.disclosuresVerified;
  };
  protoOf(VerificationResult).cc = function () {
    return this.sdJwt;
  };
  protoOf(VerificationResult).dc = function () {
    return this.signatureVerified;
  };
  protoOf(VerificationResult).qp = function () {
    return this.disclosuresVerified;
  };
  protoOf(VerificationResult).j6y = function () {
    return this.message;
  };
  protoOf(VerificationResult).lc7 = function (sdJwt, signatureVerified, disclosuresVerified, message) {
    return new VerificationResult(sdJwt, signatureVerified, disclosuresVerified, message);
  };
  protoOf(VerificationResult).copy = function (sdJwt, signatureVerified, disclosuresVerified, message, $super) {
    sdJwt = sdJwt === VOID ? this.sdJwt : sdJwt;
    signatureVerified = signatureVerified === VOID ? this.signatureVerified : signatureVerified;
    disclosuresVerified = disclosuresVerified === VOID ? this.disclosuresVerified : disclosuresVerified;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.lc7(sdJwt, signatureVerified, disclosuresVerified, message) : $super.lc7.call(this, sdJwt, signatureVerified, disclosuresVerified, message);
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
  function Base64Utils() {
    Base64Utils_instance = this;
    this.base64 = Default_getInstance_1().mk_1.ok(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(Base64Utils).base64toBase64Url = function (_this__u8e3s4) {
    return trimEnd(replace(replace(_this__u8e3s4, '+', '-'), '/', '_'), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).base64UrlToBase64 = function (_this__u8e3s4) {
    return replace(replace(_this__u8e3s4, '-', '+'), '_', '/');
  };
  protoOf(Base64Utils).encodeToBase64Url = function (_this__u8e3s4) {
    return trimEnd(Default_getInstance_1().mk_1.qk(_this__u8e3s4), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).base64UrlDecode = function (_this__u8e3s4) {
    return this.base64.uk(_this__u8e3s4);
  };
  protoOf(Base64Utils).base64Decode = function (_this__u8e3s4) {
    return Default_getInstance_1().uk(_this__u8e3s4);
  };
  protoOf(Base64Utils).mc7 = function () {
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
    this.vc7_1 = $sdJwt;
    this.wc7_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).yc7 = function ($this$promise, $completion) {
    var tmp = this.z1g($this$promise, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).ua = function (p1, $completion) {
    return this.yc7((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = Companion_getInstance_3().uc5(this.vc7_1, this.wc7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            return new VerificationResult(new SDJwtJS(it.sdJwt), it.signatureVerified, it.disclosuresVerified, it.message);
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
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).z1g = function ($this$promise, completion) {
    var i = new SDJwtJS$Companion$verifyAndParseAsync$slambda(this.vc7_1, this.wc7_1, completion);
    i.xc7_1 = $this$promise;
    return i;
  };
  function SDJwtJS$Companion$verifyAndParseAsync$slambda_0($sdJwt, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$Companion$verifyAndParseAsync$slambda($sdJwt, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.yc7($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$Companion$signAsync$slambda($sdPayload, $jwtCryptoProvider, resultContinuation) {
    this.hc8_1 = $sdPayload;
    this.ic8_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$Companion$signAsync$slambda).kc8 = function ($this$promise, $completion) {
    var tmp = this.z1g($this$promise, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(SDJwtJS$Companion$signAsync$slambda).ua = function (p1, $completion) {
    return this.kc8((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$Companion$signAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = Companion_getInstance_3().signAsync$default(this.hc8_1, this.ic8_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new SDJwtJS(ARGUMENT);
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
  protoOf(SDJwtJS$Companion$signAsync$slambda).z1g = function ($this$promise, completion) {
    var i = new SDJwtJS$Companion$signAsync$slambda(this.hc8_1, this.ic8_1, completion);
    i.jc8_1 = $this$promise;
    return i;
  };
  function SDJwtJS$Companion$signAsync$slambda_0($sdPayload, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$Companion$signAsync$slambda($sdPayload, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.kc8($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Companion_6() {
  }
  protoOf(Companion_6).verifyAndParseAsync = function (sdJwt, jwtCryptoProvider) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$Companion$verifyAndParseAsync$slambda_0(sdJwt, jwtCryptoProvider, null));
  };
  protoOf(Companion_6).lc8 = function (sdPayload, jwtCryptoProvider, keyID) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$Companion$signAsync$slambda_0(sdPayload, jwtCryptoProvider, null));
  };
  protoOf(Companion_6).signAsync = function (sdPayload, jwtCryptoProvider, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.lc8(sdPayload, jwtCryptoProvider, keyID) : $super.lc8.call(this, sdPayload, jwtCryptoProvider, keyID);
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function SDJwtJS$verifyAsyncJs$slambda(this$0, $jwtCryptoProvider, resultContinuation) {
    this.uc8_1 = this$0;
    this.vc8_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$verifyAsyncJs$slambda).yc7 = function ($this$promise, $completion) {
    var tmp = this.z1g($this$promise, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(SDJwtJS$verifyAsyncJs$slambda).ua = function (p1, $completion) {
    return this.yc7((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$verifyAsyncJs$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.uc8_1.oc4(this.vc8_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            return new VerificationResult(new SDJwtJS(it.sdJwt), it.signatureVerified, it.disclosuresVerified, it.message);
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
  protoOf(SDJwtJS$verifyAsyncJs$slambda).z1g = function ($this$promise, completion) {
    var i = new SDJwtJS$verifyAsyncJs$slambda(this.uc8_1, this.vc8_1, completion);
    i.wc8_1 = $this$promise;
    return i;
  };
  function SDJwtJS$verifyAsyncJs$slambda_0(this$0, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$verifyAsyncJs$slambda(this$0, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.yc7($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$presentAllAsync$slambda(this$0, $discloseAll, $withKBJwt, resultContinuation) {
    this.fc9_1 = this$0;
    this.gc9_1 = $discloseAll;
    this.hc9_1 = $withKBJwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$presentAllAsync$slambda).kc8 = function ($this$promise, $completion) {
    var tmp = this.z1g($this$promise, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).ua = function (p1, $completion) {
    return this.kc8((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return new SDJwtJS(this.fc9_1.presentAll(this.gc9_1, this.hc9_1));
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).z1g = function ($this$promise, completion) {
    var i = new SDJwtJS$presentAllAsync$slambda(this.fc9_1, this.gc9_1, this.hc9_1, completion);
    i.ic9_1 = $this$promise;
    return i;
  };
  function SDJwtJS$presentAllAsync$slambda_0(this$0, $discloseAll, $withKBJwt, resultContinuation) {
    var i = new SDJwtJS$presentAllAsync$slambda(this$0, $discloseAll, $withKBJwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.kc8($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$presentAsync$slambda(this$0, $sdMap, $withKBJwt, resultContinuation) {
    this.rc9_1 = this$0;
    this.sc9_1 = $sdMap;
    this.tc9_1 = $withKBJwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$presentAsync$slambda).kc8 = function ($this$promise, $completion) {
    var tmp = this.z1g($this$promise, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(SDJwtJS$presentAsync$slambda).ua = function (p1, $completion) {
    return this.kc8((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$presentAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return new SDJwtJS(this.rc9_1.present(Companion_getInstance_4().mc6(JSON.stringify(this.sc9_1)), this.tc9_1));
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SDJwtJS$presentAsync$slambda).z1g = function ($this$promise, completion) {
    var i = new SDJwtJS$presentAsync$slambda(this.rc9_1, this.sc9_1, this.tc9_1, completion);
    i.uc9_1 = $this$promise;
    return i;
  };
  function SDJwtJS$presentAsync$slambda_0(this$0, $sdMap, $withKBJwt, resultContinuation) {
    var i = new SDJwtJS$presentAsync$slambda(this$0, $sdMap, $withKBJwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.kc8($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS(sdJwt) {
    SDJwt_init_$Init$(sdJwt, this);
  }
  protoOf(SDJwtJS).vc9 = function () {
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
  protoOf(SDJwtJS).wc9 = function () {
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
      builder.b4t('value', item.value);
      var tmp$ret$1 = builder.n4r();
      var tmp$ret$2 = tmp.parse(tmp$ret$1.toString());
      destination.n(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  };
  protoOf(SDJwtJS).xc6 = function () {
    return JSON.parse(this.sdPayload.undisclosedPayload.toString());
  };
  protoOf(SDJwtJS).ac7 = function () {
    return JSON.parse(this.sdPayload.fullPayload.toString());
  };
  protoOf(SDJwtJS).bc7 = function () {
    return JSON.parse(this.sdPayload.sdMap.vc4().toString());
  };
  protoOf(SDJwtJS).verifyAsync = function (jwtCryptoProvider) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$verifyAsyncJs$slambda_0(this, jwtCryptoProvider, null));
  };
  protoOf(SDJwtJS).xc9 = function (discloseAll, withKBJwt) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$presentAllAsync$slambda_0(this, discloseAll, withKBJwt, null));
  };
  protoOf(SDJwtJS).presentAllAsync = function (discloseAll, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.xc9(discloseAll, withKBJwt) : $super.xc9.call(this, discloseAll, withKBJwt);
  };
  protoOf(SDJwtJS).yc9 = function (sdMap, withKBJwt) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$presentAsync$slambda_0(this, sdMap, withKBJwt, null));
  };
  protoOf(SDJwtJS).presentAsync = function (sdMap, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.yc9(sdMap, withKBJwt) : $super.yc9.call(this, sdMap, withKBJwt);
  };
  protoOf(SDJwtJS).ic4 = function (formatForPresentation, withKBJwt) {
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
    this.zc9_1 = decoyMode;
    this.aca_1 = numDecoys;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.bca_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SDMapBuilder).cca = function (key, sd, children) {
    var tmp;
    if (children != null) {
      tmp = Companion_getInstance_4().mc6(JSON.stringify(children));
    } else {
      tmp = null;
    }
    var childrenSdMap = tmp;
    var tmp0 = this.bca_1;
    // Inline function 'kotlin.collections.set' call
    var value = new SDField(sd, childrenSdMap);
    tmp0.n2(key, value);
    return this;
  };
  protoOf(SDMapBuilder).addField = function (key, sd, children, $super) {
    children = children === VOID ? null : children;
    return $super === VOID ? this.cca(key, sd, children) : $super.cca.call(this, key, sd, children);
  };
  protoOf(SDMapBuilder).buildAsJSON = function () {
    return JSON.parse((new SDMap(this.bca_1, valueOf(this.zc9_1), this.aca_1)).vc4().toString());
  };
  protoOf(SDMapBuilder).build = function () {
    return new SDMap(this.bca_1, valueOf(this.zc9_1), this.aca_1);
  };
  protoOf(SDMapBuilder).buildFromJsonPaths = function (jsonPaths) {
    return JSON.parse(Companion_getInstance_4().lc6(toList_0(jsonPaths), valueOf(this.zc9_1), this.aca_1).vc4().toString());
  };
  function SDPayloadBuilder(fullPayload) {
    this.fullPayload = fullPayload;
  }
  protoOf(SDPayloadBuilder).ac7 = function () {
    return this.fullPayload;
  };
  protoOf(SDPayloadBuilder).buildForUndisclosedPayload = function (undisclosedSDPayload) {
    return Companion_getInstance_5().wc6(get_jsonObject(Default_getInstance().g4q(JSON.stringify(this.fullPayload))), get_jsonObject(Default_getInstance().g4q(JSON.stringify(undisclosedSDPayload))));
  };
  protoOf(SDPayloadBuilder).buildForSDMap = function (sdMap) {
    return Companion_getInstance_5().uc6(get_jsonObject(Default_getInstance().g4q(JSON.stringify(this.fullPayload))), Companion_getInstance_4().mc6(JSON.stringify(sdMap)));
  };
  function SimpleAsyncJWTCryptoProvider$sign$lambda($continuation) {
    return function (it) {
      console.log('SIGNED');
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.ha(tmp$ret$0);
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
      tmp0.ha(tmp$ret$0);
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
      tmp0.ha(tmp$ret$0);
      return Unit_instance;
    };
  }
  function SimpleAsyncJWTCryptoProvider$signAsync$slambda(this$0, $payload, $keyID, resultContinuation) {
    this.lca_1 = this$0;
    this.mca_1 = $payload;
    this.nca_1 = $keyID;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).pca = function ($this$promise, $completion) {
    var tmp = this.z1g($this$promise, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).ua = function (p1, $completion) {
    return this.pca((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.lca_1.gc3(get_jsonObject(Default_getInstance().g4q(JSON.stringify(this.mca_1))), this.nca_1, this);
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
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).z1g = function ($this$promise, completion) {
    var i = new SimpleAsyncJWTCryptoProvider$signAsync$slambda(this.lca_1, this.mca_1, this.nca_1, completion);
    i.oca_1 = $this$promise;
    return i;
  };
  function SimpleAsyncJWTCryptoProvider$signAsync$slambda_0(this$0, $payload, $keyID, resultContinuation) {
    var i = new SimpleAsyncJWTCryptoProvider$signAsync$slambda(this$0, $payload, $keyID, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.pca($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this$0, $jwt, resultContinuation) {
    this.bcb_1 = this$0;
    this.ccb_1 = $jwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).ecb = function ($this$promise, $completion) {
    var tmp = this.z1g($this$promise, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).ua = function (p1, $completion) {
    return this.ecb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.bcb_1.ic3(this.ccb_1, this);
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
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).z1g = function ($this$promise, completion) {
    var i = new SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this.bcb_1, this.ccb_1, completion);
    i.dcb_1 = $this$promise;
    return i;
  };
  function SimpleAsyncJWTCryptoProvider$verifyAsync$slambda_0(this$0, $jwt, resultContinuation) {
    var i = new SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this$0, $jwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ecb($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SimpleAsyncJWTCryptoProvider(algorithm, keyParam, options) {
    this.qca_1 = algorithm;
    this.rca_1 = keyParam;
    this.sca_1 = options;
  }
  protoOf(SimpleAsyncJWTCryptoProvider).gc3 = function (payload, keyID, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    console.log('SIGNING', payload.toString());
    var tmp = new jose.SignJWT(JSON.parse(payload.toString()));
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    put(builder, 'alg', this.qca_1);
    put(builder, 'typ', 'JWT');
    if (keyID == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      put(builder, 'kid', keyID);
    }
    // Inline function 'kotlin.let' call
    var it = builder.n4r();
    var tmp$ret$5 = JSON.parse(it.toString());
    var tmp_0 = tmp.setProtectedHeader(tmp$ret$5).sign(this.rca_1, this.sca_1);
    var tmp_1 = SimpleAsyncJWTCryptoProvider$sign$lambda(safe);
    tmp_0.then(tmp_1, SimpleAsyncJWTCryptoProvider$sign$lambda_0);
    return safe.qa();
  };
  protoOf(SimpleAsyncJWTCryptoProvider).ic3 = function (jwt, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    console.log('Verifying JWT: ' + jwt);
    var tmp = jose;
    var tmp0_elvis_lhs = this.sca_1;
    var tmp_0 = tmp.jwtVerify(jwt, this.rca_1, tmp0_elvis_lhs == null ? {} : tmp0_elvis_lhs);
    var tmp_1 = SimpleAsyncJWTCryptoProvider$verify$lambda(safe);
    tmp_0.then(tmp_1, SimpleAsyncJWTCryptoProvider$verify$lambda_0(safe));
    return safe.qa();
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
  defineProp(protoOf(DecoyMode), 'name', protoOf(DecoyMode).s2);
  defineProp(protoOf(DecoyMode), 'ordinal', protoOf(DecoyMode).t2);
  defineProp(protoOf(SDJwt), 'zzz_unused_disclosures', protoOf(SDJwt).ac4);
  defineProp(protoOf(SDJwt), 'zzz_unused_disclosureObjects', protoOf(SDJwt).bc4);
  defineProp(protoOf(SDJwt), 'zzz_unused_undisclosedPayload', protoOf(SDJwt).cc4);
  defineProp(protoOf(SDJwt), 'zzz_unused_fullPayload', protoOf(SDJwt).dc4);
  defineProp(protoOf(SDJwt), 'zzz_unused_digestedDisclosures', protoOf(SDJwt).ec4);
  defineProp(protoOf(SDJwt), 'zzz_unused_sdMap', protoOf(SDJwt).fc4);
  defineProp(protoOf(SDJwt), 'algorithm', protoOf(SDJwt).gc4);
  defineProp(protoOf(SDJwt), 'keyID', protoOf(SDJwt).hc4);
  defineProp(protoOf(SDJwt), 'jwk', protoOf(SDJwt).g9r);
  defineProp(protoOf(SDJwt), 'type', protoOf(SDJwt).t9y);
  defineProp(protoOf(KeyBindingJwt), 'issuedAt', protoOf(KeyBindingJwt).rc3);
  defineProp(protoOf(KeyBindingJwt), 'audience', protoOf(KeyBindingJwt).sc3);
  defineProp(protoOf(KeyBindingJwt), 'nonce', protoOf(KeyBindingJwt).tc3);
  defineProp(protoOf(KeyBindingJwt), 'sdHash', protoOf(KeyBindingJwt).uc3);
  protoOf($serializer).m2a = typeParametersSerializers;
  protoOf($serializer_0).m2a = typeParametersSerializers;
  protoOf(SDMap).asJsReadonlyMapView = asJsReadonlyMapView;
  defineProp(protoOf(SDPayload), 'sDisclosures', protoOf(SDPayload).zc6);
  defineProp(protoOf(SDPayload), 'fullPayload', protoOf(SDPayload).ac7);
  defineProp(protoOf(SDPayload), 'sdMap', protoOf(SDPayload).bc7);
  defineProp(protoOf(VerificationResult), 'verified', protoOf(VerificationResult).gc7);
  defineProp(protoOf(SDJwtJS), 'disclosures', protoOf(SDJwtJS).vc9);
  defineProp(protoOf(SDJwtJS), 'disclosureObjects', protoOf(SDJwtJS).wc9);
  defineProp(protoOf(SDJwtJS), 'undisclosedPayload', protoOf(SDJwtJS).xc6);
  defineProp(protoOf(SDJwtJS), 'fullPayload', protoOf(SDJwtJS).ac7);
  defineProp(protoOf(SDJwtJS), 'sdMap', protoOf(SDJwtJS).bc7);
  protoOf(SimpleAsyncJWTCryptoProvider).hc3 = sign$default;
  //endregion
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_6 = new Companion_5();
  Companion_instance_7 = new Companion_6();
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
    defineProp($id$walt$sdjwt.SDisclosure, 'Companion', Companion_getInstance_6);
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
    defineProp($id$walt$sdjwt.SDJwtJS, 'Companion', Companion_getInstance_7);
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
  _.$_$.b = Companion_getInstance_5;
  _.$_$.c = zzz_unused_SDMapBuilder;
  //endregion
  return _;
}));

//# sourceMappingURL=waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js.map
