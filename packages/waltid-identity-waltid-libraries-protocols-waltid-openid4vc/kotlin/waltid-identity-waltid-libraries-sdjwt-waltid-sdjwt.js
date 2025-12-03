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
  var protoOf = kotlin_kotlin.$_$.ce;
  var VOID = kotlin_kotlin.$_$.j;
  var initMetadataForInterface = kotlin_kotlin.$_$.cd;
  var toString = kotlin_kotlin.$_$.ge;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.r;
  var lazy = kotlin_kotlin.$_$.lk;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d1;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c1;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.z1;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zc;
  var THROW_IAE = kotlin_kotlin.$_$.oj;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var Enum = kotlin_kotlin.$_$.aj;
  var defineProp = kotlin_kotlin.$_$.rc;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.l8;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var put = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h1;
  var Companion_getInstance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.b;
  var ASCII_instance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.fk;
  var get_long = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e1;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.w;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var JsonNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var objectCreate = kotlin_kotlin.$_$.be;
  var put_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i1;
  var toString_0 = kotlin_kotlin.$_$.sk;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var hashCode = kotlin_kotlin.$_$.xc;
  var equals = kotlin_kotlin.$_$.sc;
  var CoroutineImpl = kotlin_kotlin.$_$.cc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.mb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ad;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.o1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var MatchNamedGroupCollection = kotlin_kotlin.$_$.mf;
  var isInterface = kotlin_kotlin.$_$.nd;
  var charArrayOf = kotlin_kotlin.$_$.lc;
  var trim = kotlin_kotlin.$_$.mi;
  var split = kotlin_kotlin.$_$.eh;
  var toSet = kotlin_kotlin.$_$.gb;
  var emptySet = kotlin_kotlin.$_$.m8;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var decodeToString = kotlin_kotlin.$_$.tf;
  var endsWith = kotlin_kotlin.$_$.zf;
  var contains = kotlin_kotlin.$_$.rf;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.v;
  var get_contentOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.y;
  var listOf = kotlin_kotlin.$_$.r9;
  var plus = kotlin_kotlin.$_$.da;
  var emptyList = kotlin_kotlin.$_$.k8;
  var joinToString = kotlin_kotlin.$_$.e9;
  var charSequenceLength = kotlin_kotlin.$_$.oc;
  var NotImplementedError = kotlin_kotlin.$_$.hj;
  var substringBefore = kotlin_kotlin.$_$.nh;
  var substringAfter = kotlin_kotlin.$_$.mh;
  var Pair = kotlin_kotlin.$_$.kj;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.w;
  var mapCapacity = kotlin_kotlin.$_$.t9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var listOf_0 = kotlin_kotlin.$_$.s9;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b1;
  var coerceAtLeast = kotlin_kotlin.$_$.ne;
  var plus_0 = kotlin_kotlin.$_$.y9;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a1;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var put_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g1;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.v6;
  var KtMap = kotlin_kotlin.$_$.w6;
  var toMap = kotlin_kotlin.$_$.za;
  var encodeToByteArray = kotlin_kotlin.$_$.wf;
  var sha256 = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.d;
  var Default_getInstance_0 = kotlin_dev_whyoleg_cryptography_cryptography_random.$_$.a;
  var JsonArrayBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var add = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.v;
  var toMutableMap = kotlin_kotlin.$_$.eb;
  var filterNotNull = kotlin_kotlin.$_$.p8;
  var SecureRandom_getInstance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.c;
  var numberToInt = kotlin_kotlin.$_$.zd;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var addAll = kotlin_kotlin.$_$.f7;
  var asSequence = kotlin_kotlin.$_$.j7;
  var map = kotlin_kotlin.$_$.ff;
  var filter = kotlin_kotlin.$_$.cf;
  var flatMap = kotlin_kotlin.$_$.df;
  var toList = kotlin_kotlin.$_$.if;
  var Default_getInstance_1 = kotlin_kotlin.$_$.r5;
  var PaddingOption_ABSENT_OPTIONAL_getInstance = kotlin_kotlin.$_$.k;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var replace = kotlin_kotlin.$_$.bh;
  var trimEnd = kotlin_kotlin.$_$.ji;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var initMetadataForLambda = kotlin_kotlin.$_$.dd;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.l1;
  var copyToArray = kotlin_kotlin.$_$.f8;
  var joinToString_0 = kotlin_kotlin.$_$.f9;
  var println = kotlin_kotlin.$_$.fc;
  var plus_1 = kotlin_kotlin.$_$.z9;
  var toList_0 = kotlin_kotlin.$_$.xa;
  var Companion_instance = kotlin_kotlin.$_$.g6;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v3;
  var intercepted = kotlin_kotlin.$_$.pb;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.n1;
  //endregion
  //region block: pre-declaration
  function sign$default(payload, keyID, $completion, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.sc5(payload, keyID, $completion) : $super.sc5.call(this, payload, keyID, $completion);
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
    return $super === VOID ? this.zc5(payload, keyID, typ, headers) : $super.zc5.call(this, payload, keyID, typ, headers);
  }
  function verify(jwt, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.ac6(jwt, keyID) : $super.ac6.call(this, jwt, keyID);
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
    return $this.vc5_1.c1();
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
    tmp.vc5_1 = lazy(tmp_0, DecoyMode$Companion$_anonymous__jwwj4w);
  }
  protoOf(Companion).wc5 = function (json) {
    var tmp = get_log();
    tmp.r6g(DecoyMode$Companion$fromJSON$lambda(json));
    var tmp_0;
    if (json instanceof JsonObject) {
      var tmp0_safe_receiver = get_jsonObject(json).bf('name');
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s4u();
    } else {
      tmp_0 = get_jsonPrimitive(json).s4u();
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
  protoOf(Companion).o4u = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).z2c = function (typeParamsSerializers) {
    return this.o4u();
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
      log = tmp.c6h(log$lambda);
    }
  }
  function JWTCryptoProvider() {
  }
  function Companion_0() {
    this.KB_JWT_TYPE = 'kb+jwt';
  }
  protoOf(Companion_0).bc6 = function () {
    return this.KB_JWT_TYPE;
  };
  protoOf(Companion_0).parse = function (kbJwt) {
    // Inline function 'kotlin.let' call
    var it = Companion_getInstance_3().parse(kbJwt);
    return new KeyBindingJwt(it.jwt, it.header, new SDPayload(it.zzz_unused_fullPayload));
  };
  protoOf(Companion_0).cc6 = function (presentedSdJwt, audience, nonce, cryptoProvider, keyId) {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    builder.e4v('iat', JsonPrimitive(System_instance.j5v().f60()));
    put(builder, 'aud', audience);
    put(builder, 'nonce', nonce);
    put(builder, 'sd_hash', Companion_instance_1.getSdHash(presentedSdJwt));
    var tmp$ret$1 = builder.q4t();
    return this.parse(cryptoProvider.sign(tmp$ret$1, keyId, 'kb+jwt'));
  };
  protoOf(Companion_0).sign = function (presentedSdJwt, audience, nonce, cryptoProvider, keyId, $super) {
    keyId = keyId === VOID ? null : keyId;
    return $super === VOID ? this.cc6(presentedSdJwt, audience, nonce, cryptoProvider, keyId) : $super.cc6.call(this, presentedSdJwt, audience, nonce, cryptoProvider, keyId);
  };
  protoOf(Companion_0).getSdHash = function (presentedSdJwt) {
    return Companion_getInstance().m6i(ASCII_instance.pc5(presentedSdJwt)).ac4();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function KeyBindingJwt(jwt, header, payload) {
    SDJwt.call(this, jwt, header, payload);
  }
  protoOf(KeyBindingJwt).dc6 = function () {
    return get_long(get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.bf('iat'))));
  };
  protoOf(KeyBindingJwt).ec6 = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.bf('aud'))).s4u();
  };
  protoOf(KeyBindingJwt).fc6 = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.bf('nonce'))).s4u();
  };
  protoOf(KeyBindingJwt).gc6 = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.bf('sd_hash'))).s4u();
  };
  protoOf(KeyBindingJwt).hc6 = function (jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId) {
    return this.type === 'kb+jwt' && this.audience === reqAudience && this.nonce === reqNonce && sdJwt.isPresentation && Companion_instance_1.getSdHash(sdJwt.toFormattedString(true, false)) === this.sdHash && this.verify(jwtCryptoProvider, keyId).verified;
  };
  protoOf(KeyBindingJwt).verifyKB = function (jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId, $super) {
    keyId = keyId === VOID ? null : keyId;
    return $super === VOID ? this.hc6(jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId) : $super.hc6.call(this, jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId);
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
  protoOf(Companion_1).wc5 = function (json) {
    var tmp = get_log_0();
    tmp.r6g(SDField$Companion$fromJSON$lambda(json));
    var tmp0_safe_receiver = get_jsonObject(json).bf('sd');
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
    var tmp3_safe_receiver = get_jsonObject(json).bf('children');
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_3;
      if (tmp3_safe_receiver instanceof JsonObject) {
        // Inline function 'kotlin.let' call
        var it = get_jsonObject(tmp3_safe_receiver);
        tmp_3 = Companion_getInstance_5().cc7(it);
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
    tmp0_serialDesc.z2b('sd', false);
    tmp0_serialDesc.z2b('children', true);
    this.dc7_1 = tmp0_serialDesc;
  }
  protoOf($serializer).ec7 = function (encoder, value) {
    var tmp0_desc = this.dc7_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    tmp1_output.q25(tmp0_desc, 0, value.sd);
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !(value.children == null)) {
      tmp1_output.c26(tmp0_desc, 1, $serializer_getInstance_0(), value.children);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer).x20 = function (encoder, value) {
    return this.ec7(encoder, value instanceof SDField ? value : THROW_CCE());
  };
  protoOf($serializer).y20 = function (decoder) {
    var tmp0_desc = this.dc7_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_input = decoder.j24(tmp0_desc);
    if (tmp6_input.z24()) {
      tmp4_local0 = tmp6_input.l24(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.x24(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.a25(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.l24(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.x24(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.k24(tmp0_desc);
    return SDField_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).w20 = function () {
    return this.dc7_1;
  };
  protoOf($serializer).o2c = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance().dc7_1);
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
  protoOf(SDField).fc7 = function () {
    return this.sd;
  };
  protoOf(SDField).gc7 = function () {
    return this.children;
  };
  protoOf(SDField).hc7 = function () {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    put_0(builder, 'sd', this.sd);
    var tmp0_safe_receiver = this.children;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      builder.e4v('children', tmp0_safe_receiver.hc7());
    }
    return builder.q4t();
  };
  protoOf(SDField).dc = function () {
    return this.sd;
  };
  protoOf(SDField).ec = function () {
    return this.children;
  };
  protoOf(SDField).lc7 = function (sd, children) {
    return new SDField(sd, children);
  };
  protoOf(SDField).copy = function (sd, children, $super) {
    sd = sd === VOID ? this.sd : sd;
    children = children === VOID ? this.children : children;
    return $super === VOID ? this.lc7(sd, children) : $super.lc7.call(this, sd, children);
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
      log_0 = tmp.c6h(log$lambda_0);
    }
  }
  function $signAsyncCOROUTINE$1(_this__u8e3s4, sdPayload, jwtCryptoProvider, keyID, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.uc7_1 = _this__u8e3s4;
    this.vc7_1 = sdPayload;
    this.wc7_1 = jwtCryptoProvider;
    this.xc7_1 = keyID;
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
            suspendResult = this.wc7_1.sc5(this.vc7_1.undisclosedPayload, this.xc7_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.uc7_1.createFromSignedJwt(ARGUMENT, this.vc7_1);
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
  protoOf(Companion_2).yc7 = function () {
    return this.DIGESTS_KEY;
  };
  protoOf(Companion_2).zc7 = function () {
    return this.SEPARATOR;
  };
  protoOf(Companion_2).ac8 = function () {
    return this.SEPARATOR_STR;
  };
  protoOf(Companion_2).bc8 = function () {
    return this.SD_JWT_PATTERN;
  };
  protoOf(Companion_2).parse = function (sdJwt) {
    var tmp0_elvis_lhs = Regex_init_$Create$('^(?<sdjwt>(?<header>[A-Za-z0-9-_]+)\\.(?<body>[A-Za-z0-9-_]+)\\.(?<signature>[A-Za-z0-9-_]+))(?<disclosures>(~([A-Za-z0-9-_]+))+)?(~(?<kbjwt>([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+))?)?$').we(sdJwt);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Invalid SD-JWT format: ' + sdJwt);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var matchResult = tmp;
    var tmp_0 = matchResult.ff();
    var matchedGroups = isInterface(tmp_0, MatchNamedGroupCollection) ? tmp_0 : THROW_CCE();
    var tmp1_safe_receiver = matchedGroups.bf('disclosures');
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af_1;
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
    var tmp_2 = ensureNotNull(matchedGroups.bf('sdjwt')).af_1;
    var tmp_3 = get_jsonObject(Default_getInstance().j4s(decodeToString(SdjwtStringUtils_getInstance().dc8(ensureNotNull(matchedGroups.bf('header')).af_1))));
    var tmp_4 = Companion_getInstance_6().fc8(ensureNotNull(matchedGroups.bf('body')).af_1, disclosures);
    var tmp6_safe_receiver = matchedGroups.bf('kbjwt');
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.af_1;
    var tmp_5;
    if (tmp7_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_5 = Companion_instance_1.parse(tmp7_safe_receiver);
    }
    return new SDJwt(tmp_2, tmp_3, tmp_4, tmp_5, !(matchedGroups.bf('kbjwt') == null) || endsWith(sdJwt, '~'));
  };
  protoOf(Companion_2).verifyAndParse = function (sdJwt, jwtCryptoProvider) {
    return this.parse(sdJwt).verify(jwtCryptoProvider);
  };
  protoOf(Companion_2).gc8 = function (sdJwt, jwtCryptoProvider, $completion) {
    return this.parse(sdJwt).ac7(jwtCryptoProvider, $completion);
  };
  protoOf(Companion_2).hc8 = function (signedJwt, sdPayload, withKBJwt) {
    var sdJwt = this.parse(signedJwt);
    return new SDJwt(sdJwt.jwt, sdJwt.header, sdPayload, withKBJwt, sdJwt.isPresentation || !(withKBJwt == null));
  };
  protoOf(Companion_2).createFromSignedJwt = function (signedJwt, sdPayload, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.hc8(signedJwt, sdPayload, withKBJwt) : $super.hc8.call(this, signedJwt, sdPayload, withKBJwt);
  };
  protoOf(Companion_2).ic8 = function (sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders) {
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
    return $super === VOID ? this.ic8(sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders) : $super.ic8.call(this, sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders);
  };
  protoOf(Companion_2).jc8 = function (sdPayload, jwtCryptoProvider, keyID, $completion) {
    var tmp = new $signAsyncCOROUTINE$1(this, sdPayload, jwtCryptoProvider, keyID, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Companion_2).signAsync$default = function (sdPayload, jwtCryptoProvider, keyID, $completion, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.jc8(sdPayload, jwtCryptoProvider, keyID, $completion) : $super.jc8.call(this, sdPayload, jwtCryptoProvider, keyID, $completion);
  };
  protoOf(Companion_2).kc8 = function (value, sdOnly) {
    return Regex_init_$Create$('^(?<sdjwt>(?<header>[A-Za-z0-9-_]+)\\.(?<body>[A-Za-z0-9-_]+)\\.(?<signature>[A-Za-z0-9-_]+))(?<disclosures>(~([A-Za-z0-9-_]+))+)?(~(?<kbjwt>([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+))?)?$').se(value) && (!sdOnly || contains(value, '~'));
  };
  protoOf(Companion_2).isSDJwt = function (value, sdOnly, $super) {
    sdOnly = sdOnly === VOID ? false : sdOnly;
    return $super === VOID ? this.kc8(value, sdOnly) : $super.kc8.call(this, value, sdOnly);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function $verifyAsyncCOROUTINE$0(_this__u8e3s4, jwtCryptoProvider, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tc8_1 = _this__u8e3s4;
    this.uc8_1 = jwtCryptoProvider;
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
            suspendResult = this.uc8_1.uc5(this.tc8_1.jwt, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            return new VerificationResult(this.tc8_1, it.verified, this.tc8_1.sdPayload.verifyDisclosures(), it.message);
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
  protoOf(SDJwt).ic6 = function () {
    return this.jwt;
  };
  protoOf(SDJwt).q9c = function () {
    return this.header;
  };
  protoOf(SDJwt).jc6 = function () {
    return this.sdPayload;
  };
  protoOf(SDJwt).kc6 = function () {
    return this.keyBindingJwt;
  };
  protoOf(SDJwt).lc6 = function () {
    return this.isPresentation;
  };
  protoOf(SDJwt).mc6 = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.sdPayload.sDisclosures;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.q();
    while (_iterator__ex2g4s.r()) {
      var item = _iterator__ex2g4s.s();
      var tmp$ret$0 = item.disclosure;
      destination.n(tmp$ret$0);
    }
    return toSet(destination);
  };
  protoOf(SDJwt).nc6 = function () {
    return this.sdPayload.sDisclosures;
  };
  protoOf(SDJwt).oc6 = function () {
    return this.sdPayload.undisclosedPayload;
  };
  protoOf(SDJwt).pc6 = function () {
    return this.sdPayload.fullPayload;
  };
  protoOf(SDJwt).qc6 = function () {
    return this.sdPayload.digestedDisclosures;
  };
  protoOf(SDJwt).rc6 = function () {
    return this.sdPayload.sdMap;
  };
  protoOf(SDJwt).sc6 = function () {
    var tmp0_safe_receiver = this.header.bf('alg');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).tc6 = function () {
    var tmp0_safe_receiver = this.header.bf('kid');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).s9t = function () {
    var tmp0_safe_receiver = this.header.bf('jwk');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).fa1 = function () {
    var tmp0_safe_receiver = this.header.bf('typ');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).toString = function () {
    return this.toFormattedString(this.isPresentation);
  };
  protoOf(SDJwt).uc6 = function (formatForPresentation, withKBJwt) {
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
    return $super === VOID ? this.uc6(formatForPresentation, withKBJwt) : $super.uc6.call(this, formatForPresentation, withKBJwt);
  };
  protoOf(SDJwt).vc6 = function (sdMap, withKBJwt) {
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
    return $super === VOID ? this.vc6(sdMap, withKBJwt) : $super.vc6.call(this, sdMap, withKBJwt);
  };
  protoOf(SDJwt).wc6 = function (discloseAll, withKBJwt) {
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
    return $super === VOID ? this.wc6(discloseAll, withKBJwt) : $super.wc6.call(this, discloseAll, withKBJwt);
  };
  protoOf(SDJwt).xc6 = function (sdMap, audience, nonce, kbCryptoProvider, kbKeyId) {
    return this.present(sdMap, Companion_instance_1.sign(this.present(sdMap).toString(), audience, nonce, kbCryptoProvider, kbKeyId));
  };
  protoOf(SDJwt).presentWithKB = function (sdMap, audience, nonce, kbCryptoProvider, kbKeyId, $super) {
    kbKeyId = kbKeyId === VOID ? null : kbKeyId;
    return $super === VOID ? this.xc6(sdMap, audience, nonce, kbCryptoProvider, kbKeyId) : $super.xc6.call(this, sdMap, audience, nonce, kbCryptoProvider, kbKeyId);
  };
  protoOf(SDJwt).yc6 = function (discloseAll, audience, nonce, kbCryptoProvider, kbKeyId) {
    return this.presentAll(discloseAll, Companion_instance_1.sign(this.presentAll(discloseAll).toString(), audience, nonce, kbCryptoProvider, kbKeyId));
  };
  protoOf(SDJwt).presentAllWithKB = function (discloseAll, audience, nonce, kbCryptoProvider, kbKeyId, $super) {
    kbKeyId = kbKeyId === VOID ? null : kbKeyId;
    return $super === VOID ? this.yc6(discloseAll, audience, nonce, kbCryptoProvider, kbKeyId) : $super.yc6.call(this, discloseAll, audience, nonce, kbCryptoProvider, kbKeyId);
  };
  protoOf(SDJwt).zc6 = function (jwtCryptoProvider, keyID) {
    // Inline function 'kotlin.let' call
    var it = jwtCryptoProvider.verify(this.jwt, keyID == null ? this.keyID : keyID);
    return new VerificationResult(this, it.verified, this.sdPayload.verifyDisclosures(), it.message);
  };
  protoOf(SDJwt).verify = function (jwtCryptoProvider, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.zc6(jwtCryptoProvider, keyID) : $super.zc6.call(this, jwtCryptoProvider, keyID);
  };
  protoOf(SDJwt).ac7 = function (jwtCryptoProvider, $completion) {
    var tmp = new $verifyAsyncCOROUTINE$0(this, jwtCryptoProvider, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  function verifyHolderKeyBinding($this, jwtCryptoProvider, requiresHolderKeyBinding, audience, nonce) {
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var this_0 = $this.wc8_1;
    if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
      var reason = 'Holder DID verification not yet supported';
      throw new NotImplementedError('An operation is not implemented: ' + reason);
    } else {
      if (!($this.xc8_1 == null)) {
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
          var tmp0_safe_receiver = $this.xc8_1.bf('kid');
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          tmp_0 = $this.keyBindingJwt.verifyKB(jwtCryptoProvider, audience, nonce, $this, tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s4u());
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
    this.dc9_1 = 'vc+sd-jwt';
  }
  protoOf(Companion_3).cq = function (sdJwt) {
    return new SDJwtVC(Companion_getInstance_3().parse(sdJwt));
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    return Companion_instance_4;
  }
  function SDJwtVC(sdJwt) {
    SDJwt.call(this, sdJwt.jwt, sdJwt.header, sdJwt.sdPayload, sdJwt.keyBindingJwt, sdJwt.isPresentation);
    var tmp = this;
    var tmp0_safe_receiver = this.zzz_unused_undisclosedPayload.bf('cnf');
    tmp.vc8_1 = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp_0 = this;
    var tmp0_safe_receiver_0 = this.vc8_1;
    var tmp1_safe_receiver = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.bf('kid');
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_jsonPrimitive(tmp1_safe_receiver);
    tmp_0.wc8_1 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s4u();
    var tmp_1 = this;
    var tmp0_safe_receiver_1 = this.vc8_1;
    var tmp1_safe_receiver_0 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.bf('jwk');
    tmp_1.xc8_1 = tmp1_safe_receiver_0 == null ? null : get_jsonObject(tmp1_safe_receiver_0);
    var tmp_2 = this;
    var tmp0_safe_receiver_2 = this.zzz_unused_undisclosedPayload.bf('iss');
    var tmp1_safe_receiver_1 = tmp0_safe_receiver_2 == null ? null : get_jsonPrimitive(tmp0_safe_receiver_2);
    tmp_2.yc8_1 = tmp1_safe_receiver_1 == null ? null : tmp1_safe_receiver_1.s4u();
    var tmp_3 = this;
    var tmp0_safe_receiver_3 = this.zzz_unused_undisclosedPayload.bf('nbf');
    var tmp1_safe_receiver_2 = tmp0_safe_receiver_3 == null ? null : get_jsonPrimitive(tmp0_safe_receiver_3);
    tmp_3.zc8_1 = tmp1_safe_receiver_2 == null ? null : get_long(tmp1_safe_receiver_2);
    var tmp_4 = this;
    var tmp0_safe_receiver_4 = this.zzz_unused_undisclosedPayload.bf('exp');
    var tmp1_safe_receiver_3 = tmp0_safe_receiver_4 == null ? null : get_jsonPrimitive(tmp0_safe_receiver_4);
    tmp_4.ac9_1 = tmp1_safe_receiver_3 == null ? null : get_long(tmp1_safe_receiver_3);
    var tmp_5 = this;
    var tmp0_safe_receiver_5 = this.zzz_unused_undisclosedPayload.bf('vct');
    var tmp1_safe_receiver_4 = tmp0_safe_receiver_5 == null ? null : get_jsonPrimitive(tmp0_safe_receiver_5);
    tmp_5.bc9_1 = tmp1_safe_receiver_4 == null ? null : tmp1_safe_receiver_4.s4u();
    var tmp_6 = this;
    var tmp0_safe_receiver_6 = this.zzz_unused_undisclosedPayload.bf('status');
    tmp_6.cc9_1 = tmp0_safe_receiver_6 == null ? null : get_jsonObject(tmp0_safe_receiver_6);
  }
  protoOf(SDJwtVC).ec9 = function (jwtCryptoProvider, requiresHolderKeyBinding, audience, nonce) {
    var message = '';
    var tmp0_safe_receiver = this.header.bf('kid');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s4u();
    var tmp = this.verify(jwtCryptoProvider, tmp2_elvis_lhs == null ? this.yc8_1 : tmp2_elvis_lhs);
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp3_safe_receiver = this.zc8_1;
    var tmp_3;
    if (tmp3_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = System_instance.j5v().f60().h1(tmp3_safe_receiver) >= 0;
    }
    var tmp4_elvis_lhs = tmp_3;
    // Inline function 'kotlin.also' call
    var this_0 = tmp4_elvis_lhs == null ? true : tmp4_elvis_lhs;
    if (!this_0)
      message = message + ', VC is not valid before ' + toString_0(this.zc8_1);
    if (this_0) {
      var tmp5_safe_receiver = this.ac9_1;
      var tmp_4;
      if (tmp5_safe_receiver == null) {
        tmp_4 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_4 = System_instance.j5v().f60().h1(tmp5_safe_receiver) < 0;
      }
      var tmp6_elvis_lhs = tmp_4;
      // Inline function 'kotlin.also' call
      var this_1 = tmp6_elvis_lhs == null ? true : tmp6_elvis_lhs;
      if (!this_1)
        message = message + ', VC is not valid after ' + toString_0(this.ac9_1);
      tmp_2 = this_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      // Inline function 'kotlin.text.isNullOrEmpty' call
      var this_2 = this.bc9_1;
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
    var _iterator__ex2g4s = jsonPaths.q();
    while (_iterator__ex2g4s.r()) {
      var item = _iterator__ex2g4s.s();
      var tmp$ret$0 = new Pair(substringBefore(item, '.'), substringAfter(item, '.', ''));
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination_0 = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s_0 = destination.q();
    while (_iterator__ex2g4s_0.r()) {
      var element = _iterator__ex2g4s_0.s();
      var key = element.bc_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_0.n2(key);
      var tmp;
      if (value == null) {
        var answer = ArrayList_init_$Create$_0();
        destination_0.q2(key, answer);
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
    var destination_1 = LinkedHashMap_init_$Create$_0(mapCapacity(destination_0.t()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_1 = destination_0.a1().q();
    while (_iterator__ex2g4s_1.r()) {
      var element_0 = _iterator__ex2g4s_1.s();
      var tmp_0 = element_0.b1();
      // Inline function 'kotlin.collections.filterNot' call
      var tmp0 = element_0.c1();
      // Inline function 'kotlin.collections.filterNotTo' call
      var destination_2 = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_2 = tmp0.q();
      while (_iterator__ex2g4s_2.r()) {
        var element_1 = _iterator__ex2g4s_2.s();
        // Inline function 'kotlin.text.isEmpty' call
        if (!(charSequenceLength(element_1) === 0)) {
          destination_2.n(element_1);
        }
      }
      destination_1.q2(tmp_0, destination_2);
    }
    var pathMap = destination_1;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_3 = LinkedHashMap_init_$Create$_0(mapCapacity(pathMap.t()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_3 = pathMap.a1().q();
    while (_iterator__ex2g4s_3.r()) {
      var element_2 = _iterator__ex2g4s_3.s();
      var tmp_1 = element_2.b1();
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = listOf_0([parent, element_2.b1()]);
      // Inline function 'kotlin.collections.filterTo' call
      var destination_4 = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_4 = tmp0_0.q();
      while (_iterator__ex2g4s_4.r()) {
        var element_3 = _iterator__ex2g4s_4.s();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(element_3) > 0) {
          destination_4.n(element_3);
        }
      }
      var currentPath = joinToString(destination_4, '.');
      var tmp_2 = sdPaths.x(currentPath);
      var tmp_3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!element_2.c1().h()) {
        tmp_3 = doGenerateSDMap(Companion_getInstance_5(), element_2.c1(), decoyMode, decoys, sdPaths, currentPath);
      } else {
        tmp_3 = null;
      }
      var tmp$ret$24 = new SDField(tmp_2, tmp_3);
      destination_3.q2(tmp_1, tmp$ret$24);
    }
    return toSDMap(destination_3, decoyMode, decoys);
  }
  function regenerateSDField($this, sd, value, digestedDisclosure) {
    var tmp;
    if (value instanceof JsonObject) {
      tmp = $this.fc9(get_jsonObject(value), digestedDisclosure);
    } else {
      tmp = null;
    }
    return new SDField(sd, tmp);
  }
  function SDMap$Companion$$childSerializers$_anonymous__akhw5b() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance());
  }
  function SDMap$Companion$$childSerializers$_anonymous__akhw5b_0() {
    return Companion_getInstance_0().o4u();
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
    tmp.bc7_1 = [tmp_1, lazy(tmp_2, SDMap$Companion$$childSerializers$_anonymous__akhw5b_0), null];
  }
  protoOf(Companion_4).gc9 = function (fullPayload, undisclosedPayload, decoyMode, decoys) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(fullPayload.t()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = fullPayload.a1().q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var tmp = element.b1();
      var tmp_0;
      if (!undisclosedPayload.u2p(element.b1())) {
        tmp_0 = new SDField(true);
      } else {
        var tmp_1;
        var tmp_2 = element.c1();
        if (tmp_2 instanceof JsonObject) {
          var tmp_3 = undisclosedPayload.bf(element.b1());
          tmp_1 = tmp_3 instanceof JsonObject;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = new SDField(false, Companion_getInstance_5().gc9(get_jsonObject(element.c1()), get_jsonObject(ensureNotNull(undisclosedPayload.bf(element.b1()))), decoyMode, decoys));
        } else {
          tmp_0 = new SDField(false);
        }
      }
      var tmp$ret$1 = tmp_0;
      destination.q2(tmp, tmp$ret$1);
    }
    return toSDMap(destination, decoyMode, decoys);
  };
  protoOf(Companion_4).hc9 = function (jsonPaths, decoyMode, decoys) {
    return doGenerateSDMap(this, jsonPaths, decoyMode, decoys, toSet(jsonPaths), '');
  };
  protoOf(Companion_4).fc9 = function (undisclosedPayload, digestedDisclosures) {
    var tmp0_safe_receiver = undisclosedPayload.bf('_sd');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonArray(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s = tmp1_safe_receiver.q();
      while (_iterator__ex2g4s.r()) {
        var element = _iterator__ex2g4s.s();
        if (digestedDisclosures.l2(get_jsonPrimitive(element).s4u())) {
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
      var _iterator__ex2g4s_0 = tmp2_safe_receiver.q();
      while (_iterator__ex2g4s_0.r()) {
        var item = _iterator__ex2g4s_0.s();
        var tmp$ret$3 = ensureNotNull(digestedDisclosures.n2(get_jsonPrimitive(item).s4u()));
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
      var _iterator__ex2g4s_1 = tmp3_safe_receiver.q();
      while (_iterator__ex2g4s_1.r()) {
        var element_0 = _iterator__ex2g4s_1.s();
        var tmp_2 = element_0.key;
        var tmp$ret$7 = regenerateSDField(Companion_getInstance_5(), true, element_0.value, digestedDisclosures);
        destination_1.q2(tmp_2, tmp$ret$7);
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
    var _iterator__ex2g4s_2 = undisclosedPayload.a1().q();
    while (_iterator__ex2g4s_2.r()) {
      var element_1 = _iterator__ex2g4s_2.s();
      if (!(element_1.b1() === '_sd')) {
        destination_2.q2(element_1.b1(), element_1.c1());
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_3 = LinkedHashMap_init_$Create$_0(mapCapacity(destination_2.t()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_3 = destination_2.a1().q();
    while (_iterator__ex2g4s_3.r()) {
      var element_2 = _iterator__ex2g4s_3.s();
      var tmp_5 = element_2.b1();
      var tmp$ret$16 = regenerateSDField(Companion_getInstance_5(), false, element_2.c1(), digestedDisclosures);
      destination_3.q2(tmp_5, tmp$ret$16);
    }
    return toSDMap(plus_0(tmp_4, destination_3));
  };
  protoOf(Companion_4).cc7 = function (json) {
    var tmp = get_log_1();
    tmp.r6g(SDMap$Companion$fromJSON$lambda(json));
    var tmp0_safe_receiver = json.bf('fields');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.a1();
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.associate' call
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp2_safe_receiver, 10)), 16);
      // Inline function 'kotlin.collections.associateTo' call
      var destination = LinkedHashMap_init_$Create$_0(capacity);
      var _iterator__ex2g4s = tmp2_safe_receiver.q();
      while (_iterator__ex2g4s.r()) {
        var element = _iterator__ex2g4s.s();
        // Inline function 'kotlin.collections.plusAssign' call
        var pair = new Pair(element.b1(), Companion_instance_2.wc5(element.c1()));
        destination.q2(pair.bc_1, pair.cc_1);
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
    var tmp4_safe_receiver = json.bf('decoyMode');
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = Companion_getInstance_0().wc5(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_4 = tmp5_elvis_lhs == null ? DecoyMode_NONE_getInstance() : tmp5_elvis_lhs;
    var tmp6_safe_receiver = json.bf('decoys');
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonPrimitive(tmp6_safe_receiver);
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : get_int(tmp7_safe_receiver);
    return new SDMap(tmp_2, tmp_4, tmp8_elvis_lhs == null ? 0 : tmp8_elvis_lhs);
  };
  protoOf(Companion_4).ic9 = function (json) {
    return this.cc7(get_jsonObject(Default_getInstance().j4s(json)));
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
    tmp0_serialDesc.z2b('fields', false);
    tmp0_serialDesc.z2b('decoyMode', true);
    tmp0_serialDesc.z2b('decoys', true);
    this.jc9_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).kc9 = function (encoder, value) {
    var tmp0_desc = this.jc9_1;
    var tmp1_output = encoder.j24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().bc7_1;
    tmp1_output.a26(tmp0_desc, 0, tmp2_cached[0].c1(), value.ic7_1);
    if (tmp1_output.g26(tmp0_desc, 1) ? true : !value.jc7_1.equals(DecoyMode_NONE_getInstance())) {
      tmp1_output.a26(tmp0_desc, 1, tmp2_cached[1].c1(), value.jc7_1);
    }
    if (tmp1_output.g26(tmp0_desc, 2) ? true : !(value.kc7_1 === 0)) {
      tmp1_output.t25(tmp0_desc, 2, value.kc7_1);
    }
    tmp1_output.k24(tmp0_desc);
  };
  protoOf($serializer_0).x20 = function (encoder, value) {
    return this.kc9(encoder, value instanceof SDMap ? value : THROW_CCE());
  };
  protoOf($serializer_0).y20 = function (decoder) {
    var tmp0_desc = this.jc9_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.j24(tmp0_desc);
    var tmp8_cached = Companion_getInstance_5().bc7_1;
    if (tmp7_input.z24()) {
      tmp4_local0 = tmp7_input.v24(tmp0_desc, 0, tmp8_cached[0].c1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.v24(tmp0_desc, 1, tmp8_cached[1].c1(), tmp5_local1);
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
            tmp5_local1 = tmp7_input.v24(tmp0_desc, 1, tmp8_cached[1].c1(), tmp5_local1);
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
    return SDMap_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_0).w20 = function () {
    return this.jc9_1;
  };
  protoOf($serializer_0).o2c = function () {
    var tmp0_cached = Companion_getInstance_5().bc7_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].c1(), tmp0_cached[1].c1(), IntSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function SDMap_init_$Init$(seen0, fields, decoyMode, decoys, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_0().jc9_1);
    }
    $this.ic7_1 = fields;
    if (0 === (seen0 & 2))
      $this.jc7_1 = DecoyMode_NONE_getInstance();
    else
      $this.jc7_1 = decoyMode;
    if (0 === (seen0 & 4))
      $this.kc7_1 = 0;
    else
      $this.kc7_1 = decoys;
    return $this;
  }
  function SDMap_init_$Create$(seen0, fields, decoyMode, decoys, serializationConstructorMarker) {
    return SDMap_init_$Init$(seen0, fields, decoyMode, decoys, serializationConstructorMarker, objectCreate(protoOf(SDMap)));
  }
  function SDMap(fields, decoyMode, decoys) {
    Companion_getInstance_5();
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    decoys = decoys === VOID ? 0 : decoys;
    this.ic7_1 = fields;
    this.jc7_1 = decoyMode;
    this.kc7_1 = decoys;
  }
  protoOf(SDMap).a1 = function () {
    return this.ic7_1.a1();
  };
  protoOf(SDMap).o2 = function () {
    return this.ic7_1.o2();
  };
  protoOf(SDMap).t = function () {
    return this.ic7_1.t();
  };
  protoOf(SDMap).p2 = function () {
    return this.ic7_1.p2();
  };
  protoOf(SDMap).h = function () {
    return this.ic7_1.h();
  };
  protoOf(SDMap).bf = function (key) {
    return this.ic7_1.n2(key);
  };
  protoOf(SDMap).n2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.bf((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(SDMap).lc9 = function (value) {
    return this.ic7_1.m2(value);
  };
  protoOf(SDMap).m2 = function (value) {
    if (!(value instanceof SDField))
      return false;
    return this.lc9(value instanceof SDField ? value : THROW_CCE());
  };
  protoOf(SDMap).u2p = function (key) {
    return this.ic7_1.l2(key);
  };
  protoOf(SDMap).l2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.u2p((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(SDMap).hc7 = function () {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder_0 = new JsonObjectBuilder();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.ic7_1.a1().q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      builder_0.e4v(element.b1(), element.c1().hc7());
    }
    var tmp$ret$4 = builder_0.q4t();
    builder.e4v('fields', tmp$ret$4);
    put(builder, 'decoyMode', this.jc7_1.t2_1);
    put_1(builder, 'decoys', this.kc7_1);
    return builder.q4t();
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
      log_1 = tmp.c6h(log$lambda_1);
    }
  }
  function zzz_unused_SDMapBuilder(decoyMode, numDecoys) {
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    numDecoys = numDecoys === VOID ? 0 : numDecoys;
    this.mc9_1 = decoyMode;
    this.nc9_1 = numDecoys;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.oc9_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(zzz_unused_SDMapBuilder).pc9 = function (key, sd, children) {
    var tmp0 = this.oc9_1;
    // Inline function 'kotlin.collections.set' call
    var value = new SDField(sd, children);
    tmp0.q2(key, value);
    return this;
  };
  protoOf(zzz_unused_SDMapBuilder).z2x = function () {
    return new SDMap(toMap(this.oc9_1), this.mc9_1, this.nc9_1);
  };
  function digest($this, value) {
    var messageDigest = sha256(encodeToByteArray(value));
    return messageDigest.ac4();
  }
  function generateSalt($this) {
    var randomness = Default_getInstance_0().sl(16);
    return $this.ec8_1.zk(randomness);
  }
  function generateDisclosure($this, key, value) {
    var salt = generateSalt($this);
    // Inline function 'kotlinx.serialization.json.buildJsonArray' call
    var builder = new JsonArrayBuilder();
    add(builder, salt);
    add(builder, key);
    builder.g4v(value);
    var tmp$ret$1 = builder.q4t();
    // Inline function 'kotlin.let' call
    var disclosure = $this.ec8_1.zk(encodeToByteArray(tmp$ret$1.toString()));
    return new SDisclosure(disclosure, salt, key, value);
  }
  function digestSDClaim($this, key, value, digests2disclosures) {
    var disclosure = generateDisclosure($this, key, value);
    // Inline function 'kotlin.also' call
    var this_0 = digest($this, disclosure.disclosure);
    // Inline function 'kotlin.collections.set' call
    digests2disclosures.q2(this_0, disclosure);
    return this_0;
  }
  function removeSDFields($this, payload, sdMap) {
    // Inline function 'kotlin.collections.filterKeys' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.a1().q();
    while (_iterator__ex2g4s.r()) {
      var entry = _iterator__ex2g4s.s();
      var key = entry.b1();
      var tmp0_safe_receiver = sdMap.n2(key);
      if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sd) === true)) {
        result.q2(entry.b1(), entry.c1());
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(result.t()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = result.a1().q();
    while (_iterator__ex2g4s_0.r()) {
      var element = _iterator__ex2g4s_0.s();
      var tmp = element.b1();
      var tmp_0;
      var tmp_1;
      var tmp_2 = element.c1();
      if (tmp_2 instanceof JsonObject) {
        var tmp2_safe_receiver = sdMap.n2(element.b1());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.h());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp_3 = Companion_getInstance_6();
        var tmp_4 = get_jsonObject(element.c1());
        var tmp0_safe_receiver_0 = sdMap.n2(element.b1());
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
        tmp_0 = element.c1();
      }
      var tmp$ret$6 = tmp_0;
      destination.q2(tmp, tmp$ret$6);
    }
    return new JsonObject(destination);
  }
  function generateSDPayload($this, payload, sdMap, digests2disclosures) {
    var sdPayload = toMutableMap(removeSDFields($this, payload, sdMap));
    // Inline function 'kotlin.collections.filterKeys' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.a1().q();
    while (_iterator__ex2g4s.r()) {
      var entry = _iterator__ex2g4s.s();
      var key = entry.b1();
      var tmp;
      var tmp0_safe_receiver = sdMap.bf(key);
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sd) === true) {
        tmp = true;
      } else {
        var tmp1_safe_receiver = sdMap.bf(key);
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.children;
        tmp = !(this_0 == null || this_0.h());
      }
      if (tmp) {
        result.q2(entry.b1(), entry.c1());
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(result.t());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = result.a1().q();
    while (_iterator__ex2g4s_0.r()) {
      var item = _iterator__ex2g4s_0.s();
      var tmp_0;
      var tmp_1;
      var tmp_2 = item.c1();
      if (!(tmp_2 instanceof JsonObject)) {
        tmp_1 = true;
      } else {
        var tmp0_safe_receiver_0 = sdMap.bf(item.b1());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_1 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.children;
        tmp_1 = this_1 == null || this_1.h();
      }
      if (tmp_1) {
        tmp_0 = digestSDClaim(Companion_getInstance_6(), item.b1(), item.c1(), digests2disclosures);
      } else {
        var nestedSDPayload = generateSDPayload(Companion_getInstance_6(), get_jsonObject(item.c1()), ensureNotNull(ensureNotNull(sdMap.bf(item.b1())).children), digests2disclosures);
        var tmp_3;
        var tmp1_safe_receiver_0 = sdMap.bf(item.b1());
        if ((tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.sd) === true) {
          tmp_3 = digestSDClaim(Companion_getInstance_6(), item.b1(), nestedSDPayload, digests2disclosures);
        } else {
          // Inline function 'kotlin.collections.set' call
          var key_0 = item.b1();
          sdPayload.q2(key_0, nestedSDPayload);
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
      var _iterator__ex2g4s_1 = digests.q();
      while (_iterator__ex2g4s_1.r()) {
        var element = _iterator__ex2g4s_1.s();
        add(builder, element);
      }
      if (!sdMap.jc7_1.equals(DecoyMode_NONE_getInstance()) && sdMap.kc7_1 > 0) {
        var numDecoys;
        switch (sdMap.jc7_1.u2_1) {
          case 2:
            numDecoys = numberToInt(SecureRandom_getInstance().rl(1.0, sdMap.kc7_1 + 1.0));
            break;
          case 1:
            numDecoys = sdMap.kc7_1;
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
      var value = builder.q4t();
      sdPayload.q2('_sd', value);
    }
    return new JsonObject(sdPayload);
  }
  function disclosePayloadRecursively($this, payload, verificationDisclosureMap) {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.a1().q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      if (element.b1() === '_sd') {
        var tmp = element.c1();
        if (!(tmp instanceof JsonArray))
          throw Exception_init_$Create$('SD-JWT contains invalid _sd element');
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = get_jsonArray(element.c1()).q();
        while (_iterator__ex2g4s_0.r()) {
          var element_0 = _iterator__ex2g4s_0.s();
          unveilDisclosureIfPresent($this, get_jsonPrimitive(element_0).s4u(), builder, verificationDisclosureMap);
        }
      } else {
        var tmp_0 = element.c1();
        if (tmp_0 instanceof JsonObject) {
          builder.e4v(element.b1(), disclosePayloadRecursively($this, get_jsonObject(element.c1()), verificationDisclosureMap));
        } else {
          builder.e4v(element.b1(), element.c1());
        }
      }
    }
    return builder.q4t();
  }
  function unveilDisclosureIfPresent($this, digest, objectBuilder, verificationDisclosureMap) {
    var tmp1_elvis_lhs = verificationDisclosureMap == null ? null : verificationDisclosureMap.r2(digest);
    var sDisclosure = tmp1_elvis_lhs == null ? $this.digestedDisclosures.n2(digest) : tmp1_elvis_lhs;
    if (!(sDisclosure == null)) {
      var tmp;
      var tmp_0 = sDisclosure.value;
      if (tmp_0 instanceof JsonObject) {
        tmp = disclosePayloadRecursively($this, get_jsonObject(sDisclosure.value), verificationDisclosureMap);
      } else {
        tmp = sDisclosure.value;
      }
      objectBuilder.e4v(sDisclosure.key, tmp);
    }
  }
  function filterDisclosures($this, currPayloadObject, sdMap) {
    var tmp;
    if (currPayloadObject.u2p('_sd')) {
      var tmp_0 = currPayloadObject.bf('_sd');
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
    var _iterator__ex2g4s = currPayloadObject.a1().q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      var tmp_1;
      var tmp_2 = element.c1();
      if (tmp_2 instanceof JsonObject) {
        var tmp0_safe_receiver = sdMap.n2(element.b1());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.h());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        destination.q2(element.b1(), element.c1());
      }
    }
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = destination.a1().q();
    while (_iterator__ex2g4s_0.r()) {
      var element_0 = _iterator__ex2g4s_0.s();
      var list = filterDisclosures($this, get_jsonObject(element_0.c1()), ensureNotNull(ensureNotNull(sdMap.n2(element_0.b1())).children));
      addAll(destination_0, list);
    }
    var tmp_3 = destination_0;
    var tmp0_safe_receiver_0 = currPayloadObject.bf('_sd');
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
    this.ec8_1 = Default_getInstance_1().vk_1.xk(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(Companion_5).qc9 = function (fullPayload, disclosureMap) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var digestedDisclosures = LinkedHashMap_init_$Create$();
    return new SDPayload(generateSDPayload(this, fullPayload, disclosureMap, digestedDisclosures), digestedDisclosures);
  };
  protoOf(Companion_5).rc9 = function (fullPayload, undisclosedPayload, decoyMode, decoys) {
    return this.qc9(fullPayload, Companion_getInstance_5().gc9(fullPayload, undisclosedPayload, decoyMode, decoys));
  };
  protoOf(Companion_5).sc9 = function (fullPayload, undisclosedPayload, decoyMode, decoys, $super) {
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    decoys = decoys === VOID ? 0 : decoys;
    return $super === VOID ? this.rc9(fullPayload, undisclosedPayload, decoyMode, decoys) : $super.rc9.call(this, fullPayload, undisclosedPayload, decoyMode, decoys);
  };
  protoOf(Companion_5).fc8 = function (jwtBody, disclosures) {
    var tmp = get_jsonObject(Default_getInstance().j4s(decodeToString(SdjwtStringUtils_getInstance().dc8(jwtBody))));
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(disclosures, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = disclosures.q();
    while (_iterator__ex2g4s.r()) {
      var element = _iterator__ex2g4s.s();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = new Pair(digest(Companion_getInstance_6(), element), Companion_instance_7.parse(element));
      destination.q2(pair.bc_1, pair.cc_1);
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
    return get_jsonPrimitive(it).s4u();
  }
  function SDPayload$filterDisclosures$lambda_0(this$0) {
    return function (digest) {
      return this$0.digestedDisclosures.l2(digest);
    };
  }
  function SDPayload$filterDisclosures$lambda_1(this$0) {
    return function (digest) {
      return ensureNotNull(this$0.digestedDisclosures.n2(digest));
    };
  }
  function SDPayload$filterDisclosures$lambda_2($sdMap) {
    return function (sd) {
      var tmp0_safe_receiver = $sdMap.n2(sd.key);
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
        var tmp0_safe_receiver = $sdMap.n2(sd.key);
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.h());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = filterDisclosures(this$0, sd.value, ensureNotNull(ensureNotNull($sdMap.n2(sd.key)).children));
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
  protoOf(SDPayload).tc9 = function () {
    return this.undisclosedPayload;
  };
  protoOf(SDPayload).uc9 = function () {
    return this.digestedDisclosures;
  };
  protoOf(SDPayload).vc9 = function () {
    return this.digestedDisclosures.p2();
  };
  protoOf(SDPayload).wc9 = function () {
    return disclosePayloadRecursively(this, this.undisclosedPayload, null);
  };
  protoOf(SDPayload).xc9 = function () {
    return Companion_getInstance_5().fc9(this.undisclosedPayload, this.digestedDisclosures);
  };
  protoOf(SDPayload).withSelectiveDisclosures = function (sdMap) {
    var selectedDisclosures = filterDisclosures(this, this.undisclosedPayload, sdMap);
    // Inline function 'kotlin.collections.filterValues' call
    var this_0 = this.digestedDisclosures;
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.a1().q();
    while (_iterator__ex2g4s.r()) {
      var entry = _iterator__ex2g4s.s();
      var it = entry.c1();
      if (selectedDisclosures.x(it.disclosure)) {
        result.q2(entry.b1(), entry.c1());
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
  protoOf(SDPayload).yc9 = function (undisclosedPayload, digestedDisclosures) {
    return new SDPayload(undisclosedPayload, digestedDisclosures);
  };
  protoOf(SDPayload).copy = function (undisclosedPayload, digestedDisclosures, $super) {
    undisclosedPayload = undisclosedPayload === VOID ? this.undisclosedPayload : undisclosedPayload;
    digestedDisclosures = digestedDisclosures === VOID ? this.digestedDisclosures : digestedDisclosures;
    return $super === VOID ? this.yc9(undisclosedPayload, digestedDisclosures) : $super.yc9.call(this, undisclosedPayload, digestedDisclosures);
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
    var it = get_jsonArray(Default_getInstance().j4s(decodeToString(SdjwtStringUtils_getInstance().dc8(disclosure))));
    if (!(it.t() === 3)) {
      throw Exception_init_$Create$('Invalid selective disclosure');
    }
    return new SDisclosure(disclosure, get_jsonPrimitive(it.v(0)).s4u(), get_jsonPrimitive(it.v(1)).s4u(), it.v(2));
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
  protoOf(SDisclosure).zc9 = function () {
    return this.disclosure;
  };
  protoOf(SDisclosure).aca = function () {
    return this.salt;
  };
  protoOf(SDisclosure).b1 = function () {
    return this.key;
  };
  protoOf(SDisclosure).c1 = function () {
    return this.value;
  };
  protoOf(SDisclosure).dc = function () {
    return this.disclosure;
  };
  protoOf(SDisclosure).ec = function () {
    return this.salt;
  };
  protoOf(SDisclosure).aq = function () {
    return this.key;
  };
  protoOf(SDisclosure).v70 = function () {
    return this.value;
  };
  protoOf(SDisclosure).bca = function (disclosure, salt, key, value) {
    return new SDisclosure(disclosure, salt, key, value);
  };
  protoOf(SDisclosure).copy = function (disclosure, salt, key, value, $super) {
    disclosure = disclosure === VOID ? this.disclosure : disclosure;
    salt = salt === VOID ? this.salt : salt;
    key = key === VOID ? this.key : key;
    value = value === VOID ? this.value : value;
    return $super === VOID ? this.bca(disclosure, salt, key, value) : $super.bca.call(this, disclosure, salt, key, value);
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
    this.cc8_1 = Default_getInstance_1().vk_1.xk(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(SdjwtStringUtils).dc8 = function (_this__u8e3s4) {
    return this.cc8_1.dl(_this__u8e3s4);
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
  protoOf(JwtVerificationResult).cca = function () {
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
  protoOf(JwtVerificationResult).dca = function (verified, message) {
    return new JwtVerificationResult(verified, message);
  };
  protoOf(JwtVerificationResult).copy = function (verified, message, $super) {
    verified = verified === VOID ? this.verified : verified;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.dca(verified, message) : $super.dca.call(this, verified, message);
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
  protoOf(VerificationResult).eca = function () {
    return this.sdJwt;
  };
  protoOf(VerificationResult).fca = function () {
    return this.signatureVerified;
  };
  protoOf(VerificationResult).gca = function () {
    return this.disclosuresVerified;
  };
  protoOf(VerificationResult).ta = function () {
    return this.message;
  };
  protoOf(VerificationResult).cca = function () {
    return this.signatureVerified && this.disclosuresVerified;
  };
  protoOf(VerificationResult).dc = function () {
    return this.sdJwt;
  };
  protoOf(VerificationResult).ec = function () {
    return this.signatureVerified;
  };
  protoOf(VerificationResult).aq = function () {
    return this.disclosuresVerified;
  };
  protoOf(VerificationResult).v70 = function () {
    return this.message;
  };
  protoOf(VerificationResult).hca = function (sdJwt, signatureVerified, disclosuresVerified, message) {
    return new VerificationResult(sdJwt, signatureVerified, disclosuresVerified, message);
  };
  protoOf(VerificationResult).copy = function (sdJwt, signatureVerified, disclosuresVerified, message, $super) {
    sdJwt = sdJwt === VOID ? this.sdJwt : sdJwt;
    signatureVerified = signatureVerified === VOID ? this.signatureVerified : signatureVerified;
    disclosuresVerified = disclosuresVerified === VOID ? this.disclosuresVerified : disclosuresVerified;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.hca(sdJwt, signatureVerified, disclosuresVerified, message) : $super.hca.call(this, sdJwt, signatureVerified, disclosuresVerified, message);
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
    this.ica_1 = sdJwtVC;
    this.jca_1 = sdJwtVerificationResult;
    this.kca_1 = sdJwtVCVerified;
    this.lca_1 = vcVerificationMessage;
  }
  protoOf(VCVerificationResult).cca = function () {
    return this.kca_1 && this.jca_1.verified;
  };
  function Base64Utils() {
    Base64Utils_instance = this;
    this.base64 = Default_getInstance_1().vk_1.xk(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(Base64Utils).base64toBase64Url = function (_this__u8e3s4) {
    return trimEnd(replace(replace(_this__u8e3s4, '+', '-'), '/', '_'), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).base64UrlToBase64 = function (_this__u8e3s4) {
    return replace(replace(_this__u8e3s4, '-', '+'), '_', '/');
  };
  protoOf(Base64Utils).encodeToBase64Url = function (_this__u8e3s4) {
    return trimEnd(Default_getInstance_1().vk_1.zk(_this__u8e3s4), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).base64UrlDecode = function (_this__u8e3s4) {
    return this.base64.dl(_this__u8e3s4);
  };
  protoOf(Base64Utils).base64Decode = function (_this__u8e3s4) {
    return Default_getInstance_1().dl(_this__u8e3s4);
  };
  protoOf(Base64Utils).mca = function () {
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
    this.vca_1 = $sdJwt;
    this.wca_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).yca = function ($this$promise, $completion) {
    var tmp = this.c1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).va = function (p1, $completion) {
    return this.yca((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = Companion_getInstance_3().gc8(this.vca_1, this.wca_1, this);
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
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).c1j = function ($this$promise, completion) {
    var i = new SDJwtJS$Companion$verifyAndParseAsync$slambda(this.vca_1, this.wca_1, completion);
    i.xca_1 = $this$promise;
    return i;
  };
  function SDJwtJS$Companion$verifyAndParseAsync$slambda_0($sdJwt, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$Companion$verifyAndParseAsync$slambda($sdJwt, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.yca($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$Companion$signAsync$slambda($sdPayload, $jwtCryptoProvider, resultContinuation) {
    this.hcb_1 = $sdPayload;
    this.icb_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$Companion$signAsync$slambda).kcb = function ($this$promise, $completion) {
    var tmp = this.c1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SDJwtJS$Companion$signAsync$slambda).va = function (p1, $completion) {
    return this.kcb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = Companion_getInstance_3().signAsync$default(this.hcb_1, this.icb_1, VOID, this);
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
  protoOf(SDJwtJS$Companion$signAsync$slambda).c1j = function ($this$promise, completion) {
    var i = new SDJwtJS$Companion$signAsync$slambda(this.hcb_1, this.icb_1, completion);
    i.jcb_1 = $this$promise;
    return i;
  };
  function SDJwtJS$Companion$signAsync$slambda_0($sdPayload, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$Companion$signAsync$slambda($sdPayload, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.kcb($this$promise, $completion);
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
  protoOf(Companion_7).lcb = function (sdPayload, jwtCryptoProvider, keyID) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$Companion$signAsync$slambda_0(sdPayload, jwtCryptoProvider, null));
  };
  protoOf(Companion_7).signAsync = function (sdPayload, jwtCryptoProvider, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.lcb(sdPayload, jwtCryptoProvider, keyID) : $super.lcb.call(this, sdPayload, jwtCryptoProvider, keyID);
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    return Companion_instance_8;
  }
  function SDJwtJS$verifyAsyncJs$slambda(this$0, $jwtCryptoProvider, resultContinuation) {
    this.ucb_1 = this$0;
    this.vcb_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$verifyAsyncJs$slambda).yca = function ($this$promise, $completion) {
    var tmp = this.c1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SDJwtJS$verifyAsyncJs$slambda).va = function (p1, $completion) {
    return this.yca((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.ucb_1.ac7(this.vcb_1, this);
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
  protoOf(SDJwtJS$verifyAsyncJs$slambda).c1j = function ($this$promise, completion) {
    var i = new SDJwtJS$verifyAsyncJs$slambda(this.ucb_1, this.vcb_1, completion);
    i.wcb_1 = $this$promise;
    return i;
  };
  function SDJwtJS$verifyAsyncJs$slambda_0(this$0, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$verifyAsyncJs$slambda(this$0, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.yca($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$presentAllAsync$slambda(this$0, $discloseAll, $withKBJwt, resultContinuation) {
    this.fcc_1 = this$0;
    this.gcc_1 = $discloseAll;
    this.hcc_1 = $withKBJwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$presentAllAsync$slambda).kcb = function ($this$promise, $completion) {
    var tmp = this.c1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).va = function (p1, $completion) {
    return this.kcb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return new SDJwtJS(this.fcc_1.presentAll(this.gcc_1, this.hcc_1));
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).c1j = function ($this$promise, completion) {
    var i = new SDJwtJS$presentAllAsync$slambda(this.fcc_1, this.gcc_1, this.hcc_1, completion);
    i.icc_1 = $this$promise;
    return i;
  };
  function SDJwtJS$presentAllAsync$slambda_0(this$0, $discloseAll, $withKBJwt, resultContinuation) {
    var i = new SDJwtJS$presentAllAsync$slambda(this$0, $discloseAll, $withKBJwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.kcb($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$presentAsync$slambda(this$0, $sdMap, $withKBJwt, resultContinuation) {
    this.rcc_1 = this$0;
    this.scc_1 = $sdMap;
    this.tcc_1 = $withKBJwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$presentAsync$slambda).kcb = function ($this$promise, $completion) {
    var tmp = this.c1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SDJwtJS$presentAsync$slambda).va = function (p1, $completion) {
    return this.kcb((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$presentAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return new SDJwtJS(this.rcc_1.present(Companion_getInstance_5().ic9(JSON.stringify(this.scc_1)), this.tcc_1));
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SDJwtJS$presentAsync$slambda).c1j = function ($this$promise, completion) {
    var i = new SDJwtJS$presentAsync$slambda(this.rcc_1, this.scc_1, this.tcc_1, completion);
    i.ucc_1 = $this$promise;
    return i;
  };
  function SDJwtJS$presentAsync$slambda_0(this$0, $sdMap, $withKBJwt, resultContinuation) {
    var i = new SDJwtJS$presentAsync$slambda(this$0, $sdMap, $withKBJwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.kcb($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS(sdJwt) {
    SDJwt_init_$Init$(sdJwt, this);
  }
  protoOf(SDJwtJS).vcc = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.sdPayload.sDisclosures;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.q();
    while (_iterator__ex2g4s.r()) {
      var item = _iterator__ex2g4s.s();
      var tmp$ret$0 = item.disclosure;
      destination.n(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  };
  protoOf(SDJwtJS).wcc = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.sdPayload.sDisclosures;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.q();
    while (_iterator__ex2g4s.r()) {
      var item = _iterator__ex2g4s.s();
      var tmp = JSON;
      // Inline function 'kotlinx.serialization.json.buildJsonObject' call
      var builder = new JsonObjectBuilder();
      put(builder, 'disclosure', item.disclosure);
      put(builder, 'salt', item.salt);
      put(builder, 'key', item.key);
      builder.e4v('value', item.value);
      var tmp$ret$1 = builder.q4t();
      var tmp$ret$2 = tmp.parse(tmp$ret$1.toString());
      destination.n(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  };
  protoOf(SDJwtJS).tc9 = function () {
    return JSON.parse(this.sdPayload.undisclosedPayload.toString());
  };
  protoOf(SDJwtJS).wc9 = function () {
    return JSON.parse(this.sdPayload.fullPayload.toString());
  };
  protoOf(SDJwtJS).xc9 = function () {
    return JSON.parse(this.sdPayload.sdMap.hc7().toString());
  };
  protoOf(SDJwtJS).verifyAsync = function (jwtCryptoProvider) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$verifyAsyncJs$slambda_0(this, jwtCryptoProvider, null));
  };
  protoOf(SDJwtJS).xcc = function (discloseAll, withKBJwt) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$presentAllAsync$slambda_0(this, discloseAll, withKBJwt, null));
  };
  protoOf(SDJwtJS).presentAllAsync = function (discloseAll, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.xcc(discloseAll, withKBJwt) : $super.xcc.call(this, discloseAll, withKBJwt);
  };
  protoOf(SDJwtJS).ycc = function (sdMap, withKBJwt) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$presentAsync$slambda_0(this, sdMap, withKBJwt, null));
  };
  protoOf(SDJwtJS).presentAsync = function (sdMap, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.ycc(sdMap, withKBJwt) : $super.ycc.call(this, sdMap, withKBJwt);
  };
  protoOf(SDJwtJS).uc6 = function (formatForPresentation, withKBJwt) {
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
    this.zcc_1 = decoyMode;
    this.acd_1 = numDecoys;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.bcd_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SDMapBuilder).ccd = function (key, sd, children) {
    var tmp;
    if (children != null) {
      tmp = Companion_getInstance_5().ic9(JSON.stringify(children));
    } else {
      tmp = null;
    }
    var childrenSdMap = tmp;
    var tmp0 = this.bcd_1;
    // Inline function 'kotlin.collections.set' call
    var value = new SDField(sd, childrenSdMap);
    tmp0.q2(key, value);
    return this;
  };
  protoOf(SDMapBuilder).addField = function (key, sd, children, $super) {
    children = children === VOID ? null : children;
    return $super === VOID ? this.ccd(key, sd, children) : $super.ccd.call(this, key, sd, children);
  };
  protoOf(SDMapBuilder).buildAsJSON = function () {
    return JSON.parse((new SDMap(this.bcd_1, valueOf(this.zcc_1), this.acd_1)).hc7().toString());
  };
  protoOf(SDMapBuilder).build = function () {
    return new SDMap(this.bcd_1, valueOf(this.zcc_1), this.acd_1);
  };
  protoOf(SDMapBuilder).buildFromJsonPaths = function (jsonPaths) {
    return JSON.parse(Companion_getInstance_5().hc9(toList_0(jsonPaths), valueOf(this.zcc_1), this.acd_1).hc7().toString());
  };
  function SDPayloadBuilder(fullPayload) {
    this.fullPayload = fullPayload;
  }
  protoOf(SDPayloadBuilder).wc9 = function () {
    return this.fullPayload;
  };
  protoOf(SDPayloadBuilder).buildForUndisclosedPayload = function (undisclosedSDPayload) {
    return Companion_getInstance_6().sc9(get_jsonObject(Default_getInstance().j4s(JSON.stringify(this.fullPayload))), get_jsonObject(Default_getInstance().j4s(JSON.stringify(undisclosedSDPayload))));
  };
  protoOf(SDPayloadBuilder).buildForSDMap = function (sdMap) {
    return Companion_getInstance_6().qc9(get_jsonObject(Default_getInstance().j4s(JSON.stringify(this.fullPayload))), Companion_getInstance_5().ic9(JSON.stringify(sdMap)));
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
    this.lcd_1 = this$0;
    this.mcd_1 = $payload;
    this.ncd_1 = $keyID;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).pcd = function ($this$promise, $completion) {
    var tmp = this.c1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).va = function (p1, $completion) {
    return this.pcd((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.lcd_1.sc5(get_jsonObject(Default_getInstance().j4s(JSON.stringify(this.mcd_1))), this.ncd_1, this);
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
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).c1j = function ($this$promise, completion) {
    var i = new SimpleAsyncJWTCryptoProvider$signAsync$slambda(this.lcd_1, this.mcd_1, this.ncd_1, completion);
    i.ocd_1 = $this$promise;
    return i;
  };
  function SimpleAsyncJWTCryptoProvider$signAsync$slambda_0(this$0, $payload, $keyID, resultContinuation) {
    var i = new SimpleAsyncJWTCryptoProvider$signAsync$slambda(this$0, $payload, $keyID, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.pcd($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this$0, $jwt, resultContinuation) {
    this.bce_1 = this$0;
    this.cce_1 = $jwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).ece = function ($this$promise, $completion) {
    var tmp = this.c1j($this$promise, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).va = function (p1, $completion) {
    return this.ece((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
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
            suspendResult = this.bce_1.uc5(this.cce_1, this);
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
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).c1j = function ($this$promise, completion) {
    var i = new SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this.bce_1, this.cce_1, completion);
    i.dce_1 = $this$promise;
    return i;
  };
  function SimpleAsyncJWTCryptoProvider$verifyAsync$slambda_0(this$0, $jwt, resultContinuation) {
    var i = new SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this$0, $jwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.ece($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SimpleAsyncJWTCryptoProvider(algorithm, keyParam, options) {
    this.qcd_1 = algorithm;
    this.rcd_1 = keyParam;
    this.scd_1 = options;
  }
  protoOf(SimpleAsyncJWTCryptoProvider).sc5 = function (payload, keyID, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    console.log('SIGNING', payload.toString());
    var tmp = new jose.SignJWT(JSON.parse(payload.toString()));
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    put(builder, 'alg', this.qcd_1);
    put(builder, 'typ', 'JWT');
    if (keyID == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      put(builder, 'kid', keyID);
    }
    // Inline function 'kotlin.let' call
    var it = builder.q4t();
    var tmp$ret$5 = JSON.parse(it.toString());
    var tmp_0 = tmp.setProtectedHeader(tmp$ret$5).sign(this.rcd_1, this.scd_1);
    var tmp_1 = SimpleAsyncJWTCryptoProvider$sign$lambda(safe);
    tmp_0.then(tmp_1, SimpleAsyncJWTCryptoProvider$sign$lambda_0);
    return safe.ra();
  };
  protoOf(SimpleAsyncJWTCryptoProvider).uc5 = function (jwt, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    console.log('Verifying JWT: ' + jwt);
    var tmp = jose;
    var tmp0_elvis_lhs = this.scd_1;
    var tmp_0 = tmp.jwtVerify(jwt, this.rcd_1, tmp0_elvis_lhs == null ? {} : tmp0_elvis_lhs);
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
  defineProp(protoOf(DecoyMode), 'name', protoOf(DecoyMode).v2);
  defineProp(protoOf(DecoyMode), 'ordinal', protoOf(DecoyMode).w2);
  defineProp(protoOf(SDJwt), 'zzz_unused_disclosures', protoOf(SDJwt).mc6);
  defineProp(protoOf(SDJwt), 'zzz_unused_disclosureObjects', protoOf(SDJwt).nc6);
  defineProp(protoOf(SDJwt), 'zzz_unused_undisclosedPayload', protoOf(SDJwt).oc6);
  defineProp(protoOf(SDJwt), 'zzz_unused_fullPayload', protoOf(SDJwt).pc6);
  defineProp(protoOf(SDJwt), 'zzz_unused_digestedDisclosures', protoOf(SDJwt).qc6);
  defineProp(protoOf(SDJwt), 'zzz_unused_sdMap', protoOf(SDJwt).rc6);
  defineProp(protoOf(SDJwt), 'algorithm', protoOf(SDJwt).sc6);
  defineProp(protoOf(SDJwt), 'keyID', protoOf(SDJwt).tc6);
  defineProp(protoOf(SDJwt), 'jwk', protoOf(SDJwt).s9t);
  defineProp(protoOf(SDJwt), 'type', protoOf(SDJwt).fa1);
  defineProp(protoOf(KeyBindingJwt), 'issuedAt', protoOf(KeyBindingJwt).dc6);
  defineProp(protoOf(KeyBindingJwt), 'audience', protoOf(KeyBindingJwt).ec6);
  defineProp(protoOf(KeyBindingJwt), 'nonce', protoOf(KeyBindingJwt).fc6);
  defineProp(protoOf(KeyBindingJwt), 'sdHash', protoOf(KeyBindingJwt).gc6);
  protoOf($serializer).p2c = typeParametersSerializers;
  protoOf($serializer_0).p2c = typeParametersSerializers;
  protoOf(SDMap).asJsReadonlyMapView = asJsReadonlyMapView;
  defineProp(protoOf(SDPayload), 'sDisclosures', protoOf(SDPayload).vc9);
  defineProp(protoOf(SDPayload), 'fullPayload', protoOf(SDPayload).wc9);
  defineProp(protoOf(SDPayload), 'sdMap', protoOf(SDPayload).xc9);
  defineProp(protoOf(VerificationResult), 'verified', protoOf(VerificationResult).cca);
  defineProp(protoOf(SDJwtJS), 'disclosures', protoOf(SDJwtJS).vcc);
  defineProp(protoOf(SDJwtJS), 'disclosureObjects', protoOf(SDJwtJS).wcc);
  defineProp(protoOf(SDJwtJS), 'undisclosedPayload', protoOf(SDJwtJS).tc9);
  defineProp(protoOf(SDJwtJS), 'fullPayload', protoOf(SDJwtJS).wc9);
  defineProp(protoOf(SDJwtJS), 'sdMap', protoOf(SDJwtJS).xc9);
  protoOf(SimpleAsyncJWTCryptoProvider).tc5 = sign$default;
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
