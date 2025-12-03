(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'jose', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js', './kotlin-logging.js', './Kotlin-DateTime-library-kotlinx-datetime.js', './korge-root-krypto.js', './cryptography-kotlin-cryptography-random.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('jose'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./kotlin-logging.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./korge-root-krypto.js'), require('./cryptography-kotlin-cryptography-random.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof jose === 'undefined') {
      throw new Error("Error loading module 'id.walt.sdjwt:waltid-sdjwt'. Its dependency 'jose' was not found. Please, check whether 'jose' is loaded prior to 'id.walt.sdjwt:waltid-sdjwt'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.sdjwt:waltid-sdjwt'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'id.walt.sdjwt:waltid-sdjwt'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.sdjwt:waltid-sdjwt'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'id.walt.sdjwt:waltid-sdjwt'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.sdjwt:waltid-sdjwt'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'id.walt.sdjwt:waltid-sdjwt'.");
    }
    if (typeof globalThis['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.sdjwt:waltid-sdjwt'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'id.walt.sdjwt:waltid-sdjwt'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.sdjwt:waltid-sdjwt'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'id.walt.sdjwt:waltid-sdjwt'.");
    }
    if (typeof globalThis['korge-root-krypto'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.sdjwt:waltid-sdjwt'. Its dependency 'korge-root-krypto' was not found. Please, check whether 'korge-root-krypto' is loaded prior to 'id.walt.sdjwt:waltid-sdjwt'.");
    }
    if (typeof globalThis['cryptography-kotlin-cryptography-random'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.sdjwt:waltid-sdjwt'. Its dependency 'cryptography-kotlin-cryptography-random' was not found. Please, check whether 'cryptography-kotlin-cryptography-random' is loaded prior to 'id.walt.sdjwt:waltid-sdjwt'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'id.walt.sdjwt:waltid-sdjwt'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'id.walt.sdjwt:waltid-sdjwt'.");
    }
    globalThis['id.walt.sdjwt:waltid-sdjwt'] = factory(typeof globalThis['id.walt.sdjwt:waltid-sdjwt'] === 'undefined' ? {} : globalThis['id.walt.sdjwt:waltid-sdjwt'], jose, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlin-logging'], globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['korge-root-krypto'], globalThis['cryptography-kotlin-cryptography-random'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, jose, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_io_github_oshai_kotlin_logging, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_com_soywiz_korlibs_krypto_krypto, kotlin_dev_whyoleg_cryptography_cryptography_random, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.a8;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForInterface = kotlin_kotlin.$_$.i7;
  var toString = kotlin_kotlin.$_$.d8;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.bb;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.n;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.y;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g7;
  var THROW_IAE = kotlin_kotlin.$_$.ja;
  var Unit_instance = kotlin_kotlin.$_$.r3;
  var Enum = kotlin_kotlin.$_$.ba;
  var defineProp = kotlin_kotlin.$_$.z6;
  var initMetadataForClass = kotlin_kotlin.$_$.f7;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.s4;
  var JsonObjectBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.a;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.g;
  var put = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var Companion_getInstance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.b;
  var ASCII_instance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.xa;
  var get_long = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var get_boolean = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var JsonNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.d;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var initMetadataForObject = kotlin_kotlin.$_$.k7;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var objectCreate = kotlin_kotlin.$_$.z7;
  var put_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.r;
  var toString_0 = kotlin_kotlin.$_$.hb;
  var getBooleanHashCode = kotlin_kotlin.$_$.b7;
  var hashCode = kotlin_kotlin.$_$.e7;
  var THROW_CCE = kotlin_kotlin.$_$.ia;
  var equals = kotlin_kotlin.$_$.a7;
  var CoroutineImpl = kotlin_kotlin.$_$.o6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z5;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.h7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m1;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.t;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var MatchNamedGroupCollection = kotlin_kotlin.$_$.r8;
  var isInterface = kotlin_kotlin.$_$.r7;
  var charArrayOf = kotlin_kotlin.$_$.u6;
  var trim = kotlin_kotlin.$_$.v9;
  var split = kotlin_kotlin.$_$.e9;
  var toSet = kotlin_kotlin.$_$.w5;
  var emptySet = kotlin_kotlin.$_$.t4;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var decodeToString = kotlin_kotlin.$_$.t8;
  var endsWith = kotlin_kotlin.$_$.v8;
  var contains = kotlin_kotlin.$_$.s8;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.g;
  var get_contentOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.j;
  var listOf = kotlin_kotlin.$_$.e5;
  var plus = kotlin_kotlin.$_$.l5;
  var emptyList = kotlin_kotlin.$_$.r4;
  var joinToString = kotlin_kotlin.$_$.y4;
  var substringBefore = kotlin_kotlin.$_$.k9;
  var substringAfter = kotlin_kotlin.$_$.j9;
  var Pair = kotlin_kotlin.$_$.ga;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var mapCapacity = kotlin_kotlin.$_$.g5;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var charSequenceLength = kotlin_kotlin.$_$.x6;
  var listOf_0 = kotlin_kotlin.$_$.f5;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var coerceAtLeast = kotlin_kotlin.$_$.g8;
  var plus_0 = kotlin_kotlin.$_$.i5;
  var get_int = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.k;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var put_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var asJsReadonlyMapView = kotlin_kotlin.$_$.w3;
  var KtMap = kotlin_kotlin.$_$.x3;
  var encodeToByteArray = kotlin_kotlin.$_$.u8;
  var sha256 = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.d;
  var Default_getInstance_0 = kotlin_dev_whyoleg_cryptography_cryptography_random.$_$.a;
  var JsonArrayBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b;
  var add = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.h;
  var toMutableMap = kotlin_kotlin.$_$.v5;
  var filterNotNull = kotlin_kotlin.$_$.u4;
  var SecureRandom_getInstance = kotlin_com_soywiz_korlibs_krypto_krypto.$_$.c;
  var numberToInt = kotlin_kotlin.$_$.x7;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c;
  var addAll = kotlin_kotlin.$_$.z3;
  var asSequence = kotlin_kotlin.$_$.b4;
  var map = kotlin_kotlin.$_$.p8;
  var filter = kotlin_kotlin.$_$.n8;
  var flatMap = kotlin_kotlin.$_$.o8;
  var toList = kotlin_kotlin.$_$.q8;
  var Default_getInstance_1 = kotlin_kotlin.$_$.z2;
  var PaddingOption_ABSENT_OPTIONAL_getInstance = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.d7;
  var replace = kotlin_kotlin.$_$.c9;
  var trimEnd = kotlin_kotlin.$_$.t9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var initMetadataForLambda = kotlin_kotlin.$_$.j7;
  var GlobalScope_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var promise = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var copyToArray = kotlin_kotlin.$_$.q4;
  var joinToString_0 = kotlin_kotlin.$_$.z4;
  var println = kotlin_kotlin.$_$.q6;
  var plus_1 = kotlin_kotlin.$_$.j5;
  var toList_0 = kotlin_kotlin.$_$.t5;
  var Companion_instance = kotlin_kotlin.$_$.m3;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.s1;
  var intercepted = kotlin_kotlin.$_$.b6;
  var SafeContinuation_init_$Create$ = kotlin_kotlin.$_$.s;
  //endregion
  //region block: pre-declaration
  function sign$default(payload, keyID, $completion, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.b1k(payload, keyID, $completion) : $super.b1k.call(this, payload, keyID, $completion);
  }
  initMetadataForInterface(AsyncJWTCryptoProvider, 'AsyncJWTCryptoProvider', VOID, VOID, VOID, [2, 1]);
  initMetadataForCompanion(Companion);
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
    return $super === VOID ? this.j1k(payload, keyID, typ, headers) : $super.j1k.call(this, payload, keyID, typ, headers);
  }
  function verify(jwt, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.k1k(jwt, keyID) : $super.k1k.call(this, jwt, keyID);
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
    return $this.e1k_1.r1();
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
    tmp.e1k_1 = lazy(tmp_0, DecoyMode$Companion$_anonymous__jwwj4w);
  }
  protoOf(Companion).f1k = function (json) {
    var tmp = get_log();
    tmp.a1j(DecoyMode$Companion$fromJSON$lambda(json));
    var tmp_0;
    if (json instanceof JsonObject) {
      var tmp0_safe_receiver = get_jsonObject(json).lc('name');
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      tmp_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.e11();
    } else {
      tmp_0 = get_jsonPrimitive(json).e11();
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
  protoOf(Companion).g1k = function () {
    return _get_$cachedSerializer__te6jhj(this);
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
      log = tmp.d1j(log$lambda);
    }
  }
  function JWTCryptoProvider() {
  }
  function Companion_0() {
    this.KB_JWT_TYPE = 'kb+jwt';
  }
  protoOf(Companion_0).l1k = function () {
    return this.KB_JWT_TYPE;
  };
  protoOf(Companion_0).parse = function (kbJwt) {
    // Inline function 'kotlin.let' call
    var it = Companion_getInstance_3().parse(kbJwt);
    return new KeyBindingJwt(it.jwt, it.header, new SDPayload(it.zzz_unused_fullPayload));
  };
  protoOf(Companion_0).m1k = function (presentedSdJwt, audience, nonce, cryptoProvider, keyId) {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    builder.m11('iat', JsonPrimitive(System_instance.s1g().y1g()));
    put(builder, 'aud', audience);
    put(builder, 'nonce', nonce);
    put(builder, 'sd_hash', Companion_instance_1.getSdHash(presentedSdJwt));
    var tmp$ret$1 = builder.n11();
    return this.parse(cryptoProvider.sign(tmp$ret$1, keyId, 'kb+jwt'));
  };
  protoOf(Companion_0).sign = function (presentedSdJwt, audience, nonce, cryptoProvider, keyId, $super) {
    keyId = keyId === VOID ? null : keyId;
    return $super === VOID ? this.m1k(presentedSdJwt, audience, nonce, cryptoProvider, keyId) : $super.m1k.call(this, presentedSdJwt, audience, nonce, cryptoProvider, keyId);
  };
  protoOf(Companion_0).getSdHash = function (presentedSdJwt) {
    return Companion_getInstance().l1h(ASCII_instance.s1i(presentedSdJwt)).b1h();
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function KeyBindingJwt(jwt, header, payload) {
    SDJwt.call(this, jwt, header, payload);
  }
  protoOf(KeyBindingJwt).n1k = function () {
    return get_long(get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.lc('iat'))));
  };
  protoOf(KeyBindingJwt).o1k = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.lc('aud'))).e11();
  };
  protoOf(KeyBindingJwt).p1k = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.lc('nonce'))).e11();
  };
  protoOf(KeyBindingJwt).q1k = function () {
    return get_jsonPrimitive(ensureNotNull(this.zzz_unused_fullPayload.lc('sd_hash'))).e11();
  };
  protoOf(KeyBindingJwt).r1k = function (jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId) {
    return this.type === 'kb+jwt' && this.audience === reqAudience && this.nonce === reqNonce && sdJwt.isPresentation && Companion_instance_1.getSdHash(sdJwt.toFormattedString(true, false)) === this.sdHash && this.verify(jwtCryptoProvider, keyId).verified;
  };
  protoOf(KeyBindingJwt).verifyKB = function (jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId, $super) {
    keyId = keyId === VOID ? null : keyId;
    return $super === VOID ? this.r1k(jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId) : $super.r1k.call(this, jwtCryptoProvider, reqAudience, reqNonce, sdJwt, keyId);
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
  protoOf(Companion_1).f1k = function (json) {
    var tmp = get_log_0();
    tmp.a1j(SDField$Companion$fromJSON$lambda(json));
    var tmp0_safe_receiver = get_jsonObject(json).lc('sd');
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
    var tmp3_safe_receiver = get_jsonObject(json).lc('children');
    var tmp_2;
    if (tmp3_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_3;
      if (tmp3_safe_receiver instanceof JsonObject) {
        // Inline function 'kotlin.let' call
        var it = get_jsonObject(tmp3_safe_receiver);
        tmp_3 = Companion_getInstance_4().p1l(it);
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
    tmp0_serialDesc.bt('sd', false);
    tmp0_serialDesc.bt('children', true);
    this.q1l_1 = tmp0_serialDesc;
  }
  protoOf($serializer).fm = function (decoder) {
    var tmp0_desc = this.q1l_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_local1 = null;
    var tmp6_input = decoder.so(tmp0_desc);
    if (tmp6_input.hp()) {
      tmp4_local0 = tmp6_input.uo(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.fp(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.ip(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.uo(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.fp(tmp0_desc, 1, $serializer_getInstance_0(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.to(tmp0_desc);
    return SDField_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).em = function () {
    return this.q1l_1;
  };
  protoOf($serializer).qt = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance().q1l_1);
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
  protoOf(SDField).r1l = function () {
    return this.sd;
  };
  protoOf(SDField).s1l = function () {
    return this.children;
  };
  protoOf(SDField).t1l = function () {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    put_0(builder, 'sd', this.sd);
    var tmp0_safe_receiver = this.children;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      builder.m11('children', tmp0_safe_receiver.t1l());
    }
    return builder.n11();
  };
  protoOf(SDField).ne = function () {
    return this.sd;
  };
  protoOf(SDField).oe = function () {
    return this.children;
  };
  protoOf(SDField).x1l = function (sd, children) {
    return new SDField(sd, children);
  };
  protoOf(SDField).copy = function (sd, children, $super) {
    sd = sd === VOID ? this.sd : sd;
    children = children === VOID ? this.children : children;
    return $super === VOID ? this.x1l(sd, children) : $super.x1l.call(this, sd, children);
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
      log_0 = tmp.d1j(log$lambda_0);
    }
  }
  function $signAsyncCOROUTINE$1(_this__u8e3s4, sdPayload, jwtCryptoProvider, keyID, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1m_1 = _this__u8e3s4;
    this.h1m_1 = sdPayload;
    this.i1m_1 = jwtCryptoProvider;
    this.j1m_1 = keyID;
  }
  protoOf($signAsyncCOROUTINE$1).w8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 2;
            this.e8_1 = 1;
            suspendResult = this.i1m_1.b1k(this.h1m_1.undisclosedPayload, this.j1m_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return this.g1m_1.createFromSignedJwt(ARGUMENT, this.h1m_1);
          case 2:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 2) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf($signAsyncCOROUTINE$1)['<set-state>'] = protoOf($signAsyncCOROUTINE$1).l8;
  protoOf($signAsyncCOROUTINE$1)['<get-state>'] = protoOf($signAsyncCOROUTINE$1).m8;
  protoOf($signAsyncCOROUTINE$1)['<set-exceptionState>'] = protoOf($signAsyncCOROUTINE$1).n8;
  protoOf($signAsyncCOROUTINE$1)['<get-exceptionState>'] = protoOf($signAsyncCOROUTINE$1).o8;
  protoOf($signAsyncCOROUTINE$1)['<set-result>'] = protoOf($signAsyncCOROUTINE$1).p8;
  protoOf($signAsyncCOROUTINE$1)['<get-result>'] = protoOf($signAsyncCOROUTINE$1).q8;
  protoOf($signAsyncCOROUTINE$1)['<set-exception>'] = protoOf($signAsyncCOROUTINE$1).r8;
  protoOf($signAsyncCOROUTINE$1)['<get-exception>'] = protoOf($signAsyncCOROUTINE$1).s8;
  protoOf($signAsyncCOROUTINE$1)['<set-finallyPath>'] = protoOf($signAsyncCOROUTINE$1).t8;
  protoOf($signAsyncCOROUTINE$1)['<get-finallyPath>'] = protoOf($signAsyncCOROUTINE$1).u8;
  protoOf($signAsyncCOROUTINE$1)['<get-context>'] = protoOf($signAsyncCOROUTINE$1).k8;
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
  protoOf(Companion_2).k1m = function () {
    return this.DIGESTS_KEY;
  };
  protoOf(Companion_2).l1m = function () {
    return this.SEPARATOR;
  };
  protoOf(Companion_2).m1m = function () {
    return this.SEPARATOR_STR;
  };
  protoOf(Companion_2).n1m = function () {
    return this.SD_JWT_PATTERN;
  };
  protoOf(Companion_2).parse = function (sdJwt) {
    var tmp0_elvis_lhs = Regex_init_$Create$('^(?<sdjwt>(?<header>[A-Za-z0-9-_]+)\\.(?<body>[A-Za-z0-9-_]+)\\.(?<signature>[A-Za-z0-9-_]+))(?<disclosures>(~([A-Za-z0-9-_]+))+)?(~(?<kbjwt>([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+))?)?$').ec(sdJwt);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Invalid SD-JWT format: ' + sdJwt);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var matchResult = tmp;
    var tmp_0 = matchResult.tc();
    var matchedGroups = isInterface(tmp_0, MatchNamedGroupCollection) ? tmp_0 : THROW_CCE();
    var tmp1_safe_receiver = matchedGroups.lc('disclosures');
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.fc_1;
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
    var tmp_2 = ensureNotNull(matchedGroups.lc('sdjwt')).fc_1;
    var tmp_3 = get_jsonObject(Default_getInstance().uz(decodeToString(SdjwtStringUtils_getInstance().p1m(ensureNotNull(matchedGroups.lc('header')).fc_1))));
    var tmp_4 = Companion_getInstance_5().r1m(ensureNotNull(matchedGroups.lc('body')).fc_1, disclosures);
    var tmp6_safe_receiver = matchedGroups.lc('kbjwt');
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.fc_1;
    var tmp_5;
    if (tmp7_safe_receiver == null) {
      tmp_5 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_5 = Companion_instance_1.parse(tmp7_safe_receiver);
    }
    return new SDJwt(tmp_2, tmp_3, tmp_4, tmp_5, !(matchedGroups.lc('kbjwt') == null) || endsWith(sdJwt, '~'));
  };
  protoOf(Companion_2).verifyAndParse = function (sdJwt, jwtCryptoProvider) {
    return this.parse(sdJwt).verify(jwtCryptoProvider);
  };
  protoOf(Companion_2).s1m = function (sdJwt, jwtCryptoProvider, $completion) {
    return this.parse(sdJwt).n1l(jwtCryptoProvider, $completion);
  };
  protoOf(Companion_2).t1m = function (signedJwt, sdPayload, withKBJwt) {
    var sdJwt = this.parse(signedJwt);
    return new SDJwt(sdJwt.jwt, sdJwt.header, sdPayload, withKBJwt, sdJwt.isPresentation || !(withKBJwt == null));
  };
  protoOf(Companion_2).createFromSignedJwt = function (signedJwt, sdPayload, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.t1m(signedJwt, sdPayload, withKBJwt) : $super.t1m.call(this, signedJwt, sdPayload, withKBJwt);
  };
  protoOf(Companion_2).u1m = function (sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders) {
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
    return $super === VOID ? this.u1m(sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders) : $super.u1m.call(this, sdPayload, jwtCryptoProvider, keyID, typ, additionalHeaders);
  };
  protoOf(Companion_2).v1m = function (sdPayload, jwtCryptoProvider, keyID, $completion) {
    var tmp = new $signAsyncCOROUTINE$1(this, sdPayload, jwtCryptoProvider, keyID, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.w8();
  };
  protoOf(Companion_2).signAsync$default = function (sdPayload, jwtCryptoProvider, keyID, $completion, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.v1m(sdPayload, jwtCryptoProvider, keyID, $completion) : $super.v1m.call(this, sdPayload, jwtCryptoProvider, keyID, $completion);
  };
  protoOf(Companion_2).w1m = function (value, sdOnly) {
    return Regex_init_$Create$('^(?<sdjwt>(?<header>[A-Za-z0-9-_]+)\\.(?<body>[A-Za-z0-9-_]+)\\.(?<signature>[A-Za-z0-9-_]+))(?<disclosures>(~([A-Za-z0-9-_]+))+)?(~(?<kbjwt>([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+)\\.([A-Za-z0-9-_]+))?)?$').dc(value) && (!sdOnly || contains(value, '~'));
  };
  protoOf(Companion_2).isSDJwt = function (value, sdOnly, $super) {
    sdOnly = sdOnly === VOID ? false : sdOnly;
    return $super === VOID ? this.w1m(value, sdOnly) : $super.w1m.call(this, value, sdOnly);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function $verifyAsyncCOROUTINE$0(_this__u8e3s4, jwtCryptoProvider, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f1n_1 = _this__u8e3s4;
    this.g1n_1 = jwtCryptoProvider;
  }
  protoOf($verifyAsyncCOROUTINE$0).w8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 2;
            this.e8_1 = 1;
            suspendResult = this.g1n_1.d1k(this.f1n_1.jwt, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            return new VerificationResult(this.f1n_1, it.verified, this.f1n_1.sdPayload.verifyDisclosures(), it.message);
          case 2:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 2) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf($verifyAsyncCOROUTINE$0)['<set-state>'] = protoOf($verifyAsyncCOROUTINE$0).l8;
  protoOf($verifyAsyncCOROUTINE$0)['<get-state>'] = protoOf($verifyAsyncCOROUTINE$0).m8;
  protoOf($verifyAsyncCOROUTINE$0)['<set-exceptionState>'] = protoOf($verifyAsyncCOROUTINE$0).n8;
  protoOf($verifyAsyncCOROUTINE$0)['<get-exceptionState>'] = protoOf($verifyAsyncCOROUTINE$0).o8;
  protoOf($verifyAsyncCOROUTINE$0)['<set-result>'] = protoOf($verifyAsyncCOROUTINE$0).p8;
  protoOf($verifyAsyncCOROUTINE$0)['<get-result>'] = protoOf($verifyAsyncCOROUTINE$0).q8;
  protoOf($verifyAsyncCOROUTINE$0)['<set-exception>'] = protoOf($verifyAsyncCOROUTINE$0).r8;
  protoOf($verifyAsyncCOROUTINE$0)['<get-exception>'] = protoOf($verifyAsyncCOROUTINE$0).s8;
  protoOf($verifyAsyncCOROUTINE$0)['<set-finallyPath>'] = protoOf($verifyAsyncCOROUTINE$0).t8;
  protoOf($verifyAsyncCOROUTINE$0)['<get-finallyPath>'] = protoOf($verifyAsyncCOROUTINE$0).u8;
  protoOf($verifyAsyncCOROUTINE$0)['<get-context>'] = protoOf($verifyAsyncCOROUTINE$0).k8;
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
  protoOf(SDJwt).s1k = function () {
    return this.jwt;
  };
  protoOf(SDJwt).t1k = function () {
    return this.header;
  };
  protoOf(SDJwt).u1k = function () {
    return this.sdPayload;
  };
  protoOf(SDJwt).v1k = function () {
    return this.keyBindingJwt;
  };
  protoOf(SDJwt).w1k = function () {
    return this.isPresentation;
  };
  protoOf(SDJwt).x1k = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.sdPayload.sDisclosures;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.f();
    while (_iterator__ex2g4s.g()) {
      var item = _iterator__ex2g4s.h();
      var tmp$ret$0 = item.disclosure;
      destination.d(tmp$ret$0);
    }
    return toSet(destination);
  };
  protoOf(SDJwt).y1k = function () {
    return this.sdPayload.sDisclosures;
  };
  protoOf(SDJwt).z1k = function () {
    return this.sdPayload.undisclosedPayload;
  };
  protoOf(SDJwt).a1l = function () {
    return this.sdPayload.fullPayload;
  };
  protoOf(SDJwt).b1l = function () {
    return this.sdPayload.digestedDisclosures;
  };
  protoOf(SDJwt).c1l = function () {
    return this.sdPayload.sdMap;
  };
  protoOf(SDJwt).d1l = function () {
    var tmp0_safe_receiver = this.header.lc('alg');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).e1l = function () {
    var tmp0_safe_receiver = this.header.lc('kid');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).f1l = function () {
    var tmp0_safe_receiver = this.header.lc('jwk');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).g1l = function () {
    var tmp0_safe_receiver = this.header.lc('typ');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
  };
  protoOf(SDJwt).toString = function () {
    return this.toFormattedString(this.isPresentation);
  };
  protoOf(SDJwt).h1l = function (formatForPresentation, withKBJwt) {
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
    return $super === VOID ? this.h1l(formatForPresentation, withKBJwt) : $super.h1l.call(this, formatForPresentation, withKBJwt);
  };
  protoOf(SDJwt).i1l = function (sdMap, withKBJwt) {
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
    return $super === VOID ? this.i1l(sdMap, withKBJwt) : $super.i1l.call(this, sdMap, withKBJwt);
  };
  protoOf(SDJwt).j1l = function (discloseAll, withKBJwt) {
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
    return $super === VOID ? this.j1l(discloseAll, withKBJwt) : $super.j1l.call(this, discloseAll, withKBJwt);
  };
  protoOf(SDJwt).k1l = function (sdMap, audience, nonce, kbCryptoProvider, kbKeyId) {
    return this.present(sdMap, Companion_instance_1.sign(this.present(sdMap).toString(), audience, nonce, kbCryptoProvider, kbKeyId));
  };
  protoOf(SDJwt).presentWithKB = function (sdMap, audience, nonce, kbCryptoProvider, kbKeyId, $super) {
    kbKeyId = kbKeyId === VOID ? null : kbKeyId;
    return $super === VOID ? this.k1l(sdMap, audience, nonce, kbCryptoProvider, kbKeyId) : $super.k1l.call(this, sdMap, audience, nonce, kbCryptoProvider, kbKeyId);
  };
  protoOf(SDJwt).l1l = function (discloseAll, audience, nonce, kbCryptoProvider, kbKeyId) {
    return this.presentAll(discloseAll, Companion_instance_1.sign(this.presentAll(discloseAll).toString(), audience, nonce, kbCryptoProvider, kbKeyId));
  };
  protoOf(SDJwt).presentAllWithKB = function (discloseAll, audience, nonce, kbCryptoProvider, kbKeyId, $super) {
    kbKeyId = kbKeyId === VOID ? null : kbKeyId;
    return $super === VOID ? this.l1l(discloseAll, audience, nonce, kbCryptoProvider, kbKeyId) : $super.l1l.call(this, discloseAll, audience, nonce, kbCryptoProvider, kbKeyId);
  };
  protoOf(SDJwt).m1l = function (jwtCryptoProvider, keyID) {
    // Inline function 'kotlin.let' call
    var it = jwtCryptoProvider.verify(this.jwt, keyID == null ? this.keyID : keyID);
    return new VerificationResult(this, it.verified, this.sdPayload.verifyDisclosures(), it.message);
  };
  protoOf(SDJwt).verify = function (jwtCryptoProvider, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.m1l(jwtCryptoProvider, keyID) : $super.m1l.call(this, jwtCryptoProvider, keyID);
  };
  protoOf(SDJwt).n1l = function (jwtCryptoProvider, $completion) {
    var tmp = new $verifyAsyncCOROUTINE$0(this, jwtCryptoProvider, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.w8();
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
    var _iterator__ex2g4s = jsonPaths.f();
    while (_iterator__ex2g4s.g()) {
      var item = _iterator__ex2g4s.h();
      var tmp$ret$0 = new Pair(substringBefore(item, '.'), substringAfter(item, '.', ''));
      destination.d(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination_0 = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s_0 = destination.f();
    while (_iterator__ex2g4s_0.g()) {
      var element = _iterator__ex2g4s_0.h();
      var key = element.le_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_0.u1(key);
      var tmp;
      if (value == null) {
        var answer = ArrayList_init_$Create$_0();
        destination_0.y1(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      var tmp$ret$6 = element.me_1;
      list.d(tmp$ret$6);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_1 = LinkedHashMap_init_$Create$_0(mapCapacity(destination_0.i()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_1 = destination_0.x1().f();
    while (_iterator__ex2g4s_1.g()) {
      var element_0 = _iterator__ex2g4s_1.h();
      var tmp_0 = element_0.q1();
      // Inline function 'kotlin.collections.filterNot' call
      var tmp0 = element_0.r1();
      // Inline function 'kotlin.collections.filterNotTo' call
      var destination_2 = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_2 = tmp0.f();
      while (_iterator__ex2g4s_2.g()) {
        var element_1 = _iterator__ex2g4s_2.h();
        // Inline function 'kotlin.text.isEmpty' call
        if (!(charSequenceLength(element_1) === 0)) {
          destination_2.d(element_1);
        }
      }
      destination_1.y1(tmp_0, destination_2);
    }
    var pathMap = destination_1;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_3 = LinkedHashMap_init_$Create$_0(mapCapacity(pathMap.i()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_3 = pathMap.x1().f();
    while (_iterator__ex2g4s_3.g()) {
      var element_2 = _iterator__ex2g4s_3.h();
      var tmp_1 = element_2.q1();
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = listOf_0([parent, element_2.q1()]);
      // Inline function 'kotlin.collections.filterTo' call
      var destination_4 = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s_4 = tmp0_0.f();
      while (_iterator__ex2g4s_4.g()) {
        var element_3 = _iterator__ex2g4s_4.h();
        // Inline function 'kotlin.text.isNotEmpty' call
        if (charSequenceLength(element_3) > 0) {
          destination_4.d(element_3);
        }
      }
      var currentPath = joinToString(destination_4, '.');
      var tmp_2 = sdPaths.o1(currentPath);
      var tmp_3;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!element_2.r1().j()) {
        tmp_3 = doGenerateSDMap(Companion_getInstance_4(), element_2.r1(), decoyMode, decoys, sdPaths, currentPath);
      } else {
        tmp_3 = null;
      }
      var tmp$ret$24 = new SDField(tmp_2, tmp_3);
      destination_3.y1(tmp_1, tmp$ret$24);
    }
    return toSDMap(destination_3, decoyMode, decoys);
  }
  function regenerateSDField($this, sd, value, digestedDisclosure) {
    var tmp;
    if (value instanceof JsonObject) {
      tmp = $this.h1n(get_jsonObject(value), digestedDisclosure);
    } else {
      tmp = null;
    }
    return new SDField(sd, tmp);
  }
  function SDMap$Companion$$childSerializers$_anonymous__akhw5b() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance());
  }
  function SDMap$Companion$$childSerializers$_anonymous__akhw5b_0() {
    return Companion_getInstance_0().g1k();
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
    tmp.o1l_1 = [tmp_1, lazy(tmp_2, SDMap$Companion$$childSerializers$_anonymous__akhw5b_0), null];
  }
  protoOf(Companion_3).i1n = function (fullPayload, undisclosedPayload, decoyMode, decoys) {
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(fullPayload.i()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = fullPayload.x1().f();
    while (_iterator__ex2g4s.g()) {
      var element = _iterator__ex2g4s.h();
      var tmp = element.q1();
      var tmp_0;
      if (!undisclosedPayload.c11(element.q1())) {
        tmp_0 = new SDField(true);
      } else {
        var tmp_1;
        var tmp_2 = element.r1();
        if (tmp_2 instanceof JsonObject) {
          var tmp_3 = undisclosedPayload.lc(element.q1());
          tmp_1 = tmp_3 instanceof JsonObject;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp_0 = new SDField(false, Companion_getInstance_4().i1n(get_jsonObject(element.r1()), get_jsonObject(ensureNotNull(undisclosedPayload.lc(element.q1()))), decoyMode, decoys));
        } else {
          tmp_0 = new SDField(false);
        }
      }
      var tmp$ret$1 = tmp_0;
      destination.y1(tmp, tmp$ret$1);
    }
    return toSDMap(destination, decoyMode, decoys);
  };
  protoOf(Companion_3).j1n = function (jsonPaths, decoyMode, decoys) {
    return doGenerateSDMap(this, jsonPaths, decoyMode, decoys, toSet(jsonPaths), '');
  };
  protoOf(Companion_3).h1n = function (undisclosedPayload, digestedDisclosures) {
    var tmp0_safe_receiver = undisclosedPayload.lc('_sd');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonArray(tmp0_safe_receiver);
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var destination = ArrayList_init_$Create$_0();
      var _iterator__ex2g4s = tmp1_safe_receiver.f();
      while (_iterator__ex2g4s.g()) {
        var element = _iterator__ex2g4s.h();
        if (digestedDisclosures.s1(get_jsonPrimitive(element).e11())) {
          destination.d(element);
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
      var _iterator__ex2g4s_0 = tmp2_safe_receiver.f();
      while (_iterator__ex2g4s_0.g()) {
        var item = _iterator__ex2g4s_0.h();
        var tmp$ret$3 = ensureNotNull(digestedDisclosures.u1(get_jsonPrimitive(item).e11()));
        destination_0.d(tmp$ret$3);
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
      var _iterator__ex2g4s_1 = tmp3_safe_receiver.f();
      while (_iterator__ex2g4s_1.g()) {
        var element_0 = _iterator__ex2g4s_1.h();
        var tmp_2 = element_0.key;
        var tmp$ret$7 = regenerateSDField(Companion_getInstance_4(), true, element_0.value, digestedDisclosures);
        destination_1.y1(tmp_2, tmp$ret$7);
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
    var _iterator__ex2g4s_2 = undisclosedPayload.x1().f();
    while (_iterator__ex2g4s_2.g()) {
      var element_1 = _iterator__ex2g4s_2.h();
      if (!(element_1.q1() === '_sd')) {
        destination_2.y1(element_1.q1(), element_1.r1());
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_3 = LinkedHashMap_init_$Create$_0(mapCapacity(destination_2.i()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_3 = destination_2.x1().f();
    while (_iterator__ex2g4s_3.g()) {
      var element_2 = _iterator__ex2g4s_3.h();
      var tmp_5 = element_2.q1();
      var tmp$ret$16 = regenerateSDField(Companion_getInstance_4(), false, element_2.r1(), digestedDisclosures);
      destination_3.y1(tmp_5, tmp$ret$16);
    }
    return toSDMap(plus_0(tmp_4, destination_3));
  };
  protoOf(Companion_3).p1l = function (json) {
    var tmp = get_log_1();
    tmp.a1j(SDMap$Companion$fromJSON$lambda(json));
    var tmp0_safe_receiver = json.lc('fields');
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.x1();
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.associate' call
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(tmp2_safe_receiver, 10)), 16);
      // Inline function 'kotlin.collections.associateTo' call
      var destination = LinkedHashMap_init_$Create$_0(capacity);
      var _iterator__ex2g4s = tmp2_safe_receiver.f();
      while (_iterator__ex2g4s.g()) {
        var element = _iterator__ex2g4s.h();
        // Inline function 'kotlin.collections.plusAssign' call
        var pair = new Pair(element.q1(), Companion_instance_2.f1k(element.r1()));
        destination.y1(pair.le_1, pair.me_1);
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
    var tmp4_safe_receiver = json.lc('decoyMode');
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = Companion_getInstance_0().f1k(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_4 = tmp5_elvis_lhs == null ? DecoyMode_NONE_getInstance() : tmp5_elvis_lhs;
    var tmp6_safe_receiver = json.lc('decoys');
    var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonPrimitive(tmp6_safe_receiver);
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : get_int(tmp7_safe_receiver);
    return new SDMap(tmp_2, tmp_4, tmp8_elvis_lhs == null ? 0 : tmp8_elvis_lhs);
  };
  protoOf(Companion_3).k1n = function (json) {
    return this.p1l(get_jsonObject(Default_getInstance().uz(json)));
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
    tmp0_serialDesc.bt('fields', false);
    tmp0_serialDesc.bt('decoyMode', true);
    tmp0_serialDesc.bt('decoys', true);
    this.l1n_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).fm = function (decoder) {
    var tmp0_desc = this.l1n_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.so(tmp0_desc);
    var tmp8_cached = Companion_getInstance_4().o1l_1;
    if (tmp7_input.hp()) {
      tmp4_local0 = tmp7_input.dp(tmp0_desc, 0, tmp8_cached[0].r1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.dp(tmp0_desc, 1, tmp8_cached[1].r1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.xo(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.ip(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.dp(tmp0_desc, 0, tmp8_cached[0].r1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.dp(tmp0_desc, 1, tmp8_cached[1].r1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.xo(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.to(tmp0_desc);
    return SDMap_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_0).em = function () {
    return this.l1n_1;
  };
  protoOf($serializer_0).qt = function () {
    var tmp0_cached = Companion_getInstance_4().o1l_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].r1(), tmp0_cached[1].r1(), IntSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function SDMap_init_$Init$(seen0, fields, decoyMode, decoys, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_0().l1n_1);
    }
    $this.u1l_1 = fields;
    if (0 === (seen0 & 2))
      $this.v1l_1 = DecoyMode_NONE_getInstance();
    else
      $this.v1l_1 = decoyMode;
    if (0 === (seen0 & 4))
      $this.w1l_1 = 0;
    else
      $this.w1l_1 = decoys;
    return $this;
  }
  function SDMap_init_$Create$(seen0, fields, decoyMode, decoys, serializationConstructorMarker) {
    return SDMap_init_$Init$(seen0, fields, decoyMode, decoys, serializationConstructorMarker, objectCreate(protoOf(SDMap)));
  }
  function SDMap(fields, decoyMode, decoys) {
    Companion_getInstance_4();
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    decoys = decoys === VOID ? 0 : decoys;
    this.u1l_1 = fields;
    this.v1l_1 = decoyMode;
    this.w1l_1 = decoys;
  }
  protoOf(SDMap).x1 = function () {
    return this.u1l_1.x1();
  };
  protoOf(SDMap).v1 = function () {
    return this.u1l_1.v1();
  };
  protoOf(SDMap).i = function () {
    return this.u1l_1.i();
  };
  protoOf(SDMap).w1 = function () {
    return this.u1l_1.w1();
  };
  protoOf(SDMap).j = function () {
    return this.u1l_1.j();
  };
  protoOf(SDMap).lc = function (key) {
    return this.u1l_1.u1(key);
  };
  protoOf(SDMap).u1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.lc((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(SDMap).m1n = function (value) {
    return this.u1l_1.t1(value);
  };
  protoOf(SDMap).t1 = function (value) {
    if (!(value instanceof SDField))
      return false;
    return this.m1n(value instanceof SDField ? value : THROW_CCE());
  };
  protoOf(SDMap).c11 = function (key) {
    return this.u1l_1.s1(key);
  };
  protoOf(SDMap).s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.c11((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(SDMap).t1l = function () {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder_0 = new JsonObjectBuilder();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.u1l_1.x1().f();
    while (_iterator__ex2g4s.g()) {
      var element = _iterator__ex2g4s.h();
      builder_0.m11(element.q1(), element.r1().t1l());
    }
    var tmp$ret$4 = builder_0.n11();
    builder.m11('fields', tmp$ret$4);
    put(builder, 'decoyMode', this.v1l_1.b2_1);
    put_1(builder, 'decoys', this.w1l_1);
    return builder.n11();
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
      log_1 = tmp.d1j(log$lambda_1);
    }
  }
  function digest($this, value) {
    var messageDigest = sha256(encodeToByteArray(value));
    return messageDigest.b1h();
  }
  function generateSalt($this) {
    var randomness = Default_getInstance_0().gh(16);
    return $this.q1m_1.og(randomness);
  }
  function generateDisclosure($this, key, value) {
    var salt = generateSalt($this);
    // Inline function 'kotlinx.serialization.json.buildJsonArray' call
    var builder = new JsonArrayBuilder();
    add(builder, salt);
    add(builder, key);
    builder.p11(value);
    var tmp$ret$1 = builder.n11();
    // Inline function 'kotlin.let' call
    var disclosure = $this.q1m_1.og(encodeToByteArray(tmp$ret$1.toString()));
    return new SDisclosure(disclosure, salt, key, value);
  }
  function digestSDClaim($this, key, value, digests2disclosures) {
    var disclosure = generateDisclosure($this, key, value);
    // Inline function 'kotlin.also' call
    var this_0 = digest($this, disclosure.disclosure);
    // Inline function 'kotlin.collections.set' call
    digests2disclosures.y1(this_0, disclosure);
    return this_0;
  }
  function removeSDFields($this, payload, sdMap) {
    // Inline function 'kotlin.collections.filterKeys' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.x1().f();
    while (_iterator__ex2g4s.g()) {
      var entry = _iterator__ex2g4s.h();
      var key = entry.q1();
      var tmp0_safe_receiver = sdMap.u1(key);
      if (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sd) === true)) {
        result.y1(entry.q1(), entry.r1());
      }
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(result.i()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = result.x1().f();
    while (_iterator__ex2g4s_0.g()) {
      var element = _iterator__ex2g4s_0.h();
      var tmp = element.q1();
      var tmp_0;
      var tmp_1;
      var tmp_2 = element.r1();
      if (tmp_2 instanceof JsonObject) {
        var tmp2_safe_receiver = sdMap.u1(element.q1());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.j());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp_3 = Companion_getInstance_5();
        var tmp_4 = get_jsonObject(element.r1());
        var tmp0_safe_receiver_0 = sdMap.u1(element.q1());
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
        tmp_0 = element.r1();
      }
      var tmp$ret$6 = tmp_0;
      destination.y1(tmp, tmp$ret$6);
    }
    return new JsonObject(destination);
  }
  function generateSDPayload($this, payload, sdMap, digests2disclosures) {
    var sdPayload = toMutableMap(removeSDFields($this, payload, sdMap));
    // Inline function 'kotlin.collections.filterKeys' call
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.x1().f();
    while (_iterator__ex2g4s.g()) {
      var entry = _iterator__ex2g4s.h();
      var key = entry.q1();
      var tmp;
      var tmp0_safe_receiver = sdMap.lc(key);
      if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sd) === true) {
        tmp = true;
      } else {
        var tmp1_safe_receiver = sdMap.lc(key);
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.children;
        tmp = !(this_0 == null || this_0.j());
      }
      if (tmp) {
        result.y1(entry.q1(), entry.r1());
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(result.i());
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = result.x1().f();
    while (_iterator__ex2g4s_0.g()) {
      var item = _iterator__ex2g4s_0.h();
      var tmp_0;
      var tmp_1;
      var tmp_2 = item.r1();
      if (!(tmp_2 instanceof JsonObject)) {
        tmp_1 = true;
      } else {
        var tmp0_safe_receiver_0 = sdMap.lc(item.q1());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_1 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.children;
        tmp_1 = this_1 == null || this_1.j();
      }
      if (tmp_1) {
        tmp_0 = digestSDClaim(Companion_getInstance_5(), item.q1(), item.r1(), digests2disclosures);
      } else {
        var nestedSDPayload = generateSDPayload(Companion_getInstance_5(), get_jsonObject(item.r1()), ensureNotNull(ensureNotNull(sdMap.lc(item.q1())).children), digests2disclosures);
        var tmp_3;
        var tmp1_safe_receiver_0 = sdMap.lc(item.q1());
        if ((tmp1_safe_receiver_0 == null ? null : tmp1_safe_receiver_0.sd) === true) {
          tmp_3 = digestSDClaim(Companion_getInstance_5(), item.q1(), nestedSDPayload, digests2disclosures);
        } else {
          // Inline function 'kotlin.collections.set' call
          var key_0 = item.q1();
          sdPayload.y1(key_0, nestedSDPayload);
          tmp_3 = null;
        }
        tmp_0 = tmp_3;
      }
      var tmp$ret$7 = tmp_0;
      destination.d(tmp$ret$7);
    }
    var digests = toSet(filterNotNull(destination));
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!digests.j()) {
      // Inline function 'kotlinx.serialization.json.buildJsonArray' call
      var builder = new JsonArrayBuilder();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_1 = digests.f();
      while (_iterator__ex2g4s_1.g()) {
        var element = _iterator__ex2g4s_1.h();
        add(builder, element);
      }
      if (!sdMap.v1l_1.equals(DecoyMode_NONE_getInstance()) && sdMap.w1l_1 > 0) {
        var numDecoys;
        switch (sdMap.v1l_1.c2_1) {
          case 2:
            numDecoys = numberToInt(SecureRandom_getInstance().fh(1.0, sdMap.w1l_1 + 1.0));
            break;
          case 1:
            numDecoys = sdMap.w1l_1;
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
      var value = builder.n11();
      sdPayload.y1('_sd', value);
    }
    return new JsonObject(sdPayload);
  }
  function disclosePayloadRecursively($this, payload, verificationDisclosureMap) {
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = payload.x1().f();
    while (_iterator__ex2g4s.g()) {
      var element = _iterator__ex2g4s.h();
      if (element.q1() === '_sd') {
        var tmp = element.r1();
        if (!(tmp instanceof JsonArray))
          throw Exception_init_$Create$('SD-JWT contains invalid _sd element');
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_0 = get_jsonArray(element.r1()).f();
        while (_iterator__ex2g4s_0.g()) {
          var element_0 = _iterator__ex2g4s_0.h();
          unveilDisclosureIfPresent($this, get_jsonPrimitive(element_0).e11(), builder, verificationDisclosureMap);
        }
      } else {
        var tmp_0 = element.r1();
        if (tmp_0 instanceof JsonObject) {
          builder.m11(element.q1(), disclosePayloadRecursively($this, get_jsonObject(element.r1()), verificationDisclosureMap));
        } else {
          builder.m11(element.q1(), element.r1());
        }
      }
    }
    return builder.n11();
  }
  function unveilDisclosureIfPresent($this, digest, objectBuilder, verificationDisclosureMap) {
    var tmp1_elvis_lhs = verificationDisclosureMap == null ? null : verificationDisclosureMap.z1(digest);
    var sDisclosure = tmp1_elvis_lhs == null ? $this.digestedDisclosures.u1(digest) : tmp1_elvis_lhs;
    if (!(sDisclosure == null)) {
      var tmp;
      var tmp_0 = sDisclosure.value;
      if (tmp_0 instanceof JsonObject) {
        tmp = disclosePayloadRecursively($this, get_jsonObject(sDisclosure.value), verificationDisclosureMap);
      } else {
        tmp = sDisclosure.value;
      }
      objectBuilder.m11(sDisclosure.key, tmp);
    }
  }
  function filterDisclosures($this, currPayloadObject, sdMap) {
    var tmp;
    if (currPayloadObject.c11('_sd')) {
      var tmp_0 = currPayloadObject.lc('_sd');
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
    var _iterator__ex2g4s = currPayloadObject.x1().f();
    while (_iterator__ex2g4s.g()) {
      var element = _iterator__ex2g4s.h();
      var tmp_1;
      var tmp_2 = element.r1();
      if (tmp_2 instanceof JsonObject) {
        var tmp0_safe_receiver = sdMap.u1(element.q1());
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.j());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        destination.y1(element.q1(), element.r1());
      }
    }
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = destination.x1().f();
    while (_iterator__ex2g4s_0.g()) {
      var element_0 = _iterator__ex2g4s_0.h();
      var list = filterDisclosures($this, get_jsonObject(element_0.r1()), ensureNotNull(ensureNotNull(sdMap.u1(element_0.q1())).children));
      addAll(destination_0, list);
    }
    var tmp_3 = destination_0;
    var tmp0_safe_receiver_0 = currPayloadObject.lc('_sd');
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
    this.q1m_1 = Default_getInstance_1().kg_1.mg(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(Companion_4).n1n = function (fullPayload, disclosureMap) {
    // Inline function 'kotlin.collections.mutableMapOf' call
    var digestedDisclosures = LinkedHashMap_init_$Create$();
    return new SDPayload(generateSDPayload(this, fullPayload, disclosureMap, digestedDisclosures), digestedDisclosures);
  };
  protoOf(Companion_4).o1n = function (fullPayload, undisclosedPayload, decoyMode, decoys) {
    return this.n1n(fullPayload, Companion_getInstance_4().i1n(fullPayload, undisclosedPayload, decoyMode, decoys));
  };
  protoOf(Companion_4).p1n = function (fullPayload, undisclosedPayload, decoyMode, decoys, $super) {
    decoyMode = decoyMode === VOID ? DecoyMode_NONE_getInstance() : decoyMode;
    decoys = decoys === VOID ? 0 : decoys;
    return $super === VOID ? this.o1n(fullPayload, undisclosedPayload, decoyMode, decoys) : $super.o1n.call(this, fullPayload, undisclosedPayload, decoyMode, decoys);
  };
  protoOf(Companion_4).r1m = function (jwtBody, disclosures) {
    var tmp = get_jsonObject(Default_getInstance().uz(decodeToString(SdjwtStringUtils_getInstance().p1m(jwtBody))));
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(disclosures, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = disclosures.f();
    while (_iterator__ex2g4s.g()) {
      var element = _iterator__ex2g4s.h();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = new Pair(digest(Companion_getInstance_5(), element), Companion_instance_6.parse(element));
      destination.y1(pair.le_1, pair.me_1);
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
    return get_jsonPrimitive(it).e11();
  }
  function SDPayload$filterDisclosures$lambda_0(this$0) {
    return function (digest) {
      return this$0.digestedDisclosures.s1(digest);
    };
  }
  function SDPayload$filterDisclosures$lambda_1(this$0) {
    return function (digest) {
      return ensureNotNull(this$0.digestedDisclosures.u1(digest));
    };
  }
  function SDPayload$filterDisclosures$lambda_2($sdMap) {
    return function (sd) {
      var tmp0_safe_receiver = $sdMap.u1(sd.key);
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
        var tmp0_safe_receiver = $sdMap.u1(sd.key);
        // Inline function 'kotlin.collections.isNullOrEmpty' call
        var this_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.children;
        tmp_1 = !(this_0 == null || this_0.j());
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = filterDisclosures(this$0, sd.value, ensureNotNull(ensureNotNull($sdMap.u1(sd.key)).children));
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
  protoOf(SDPayload).q1n = function () {
    return this.undisclosedPayload;
  };
  protoOf(SDPayload).r1n = function () {
    return this.digestedDisclosures;
  };
  protoOf(SDPayload).s1n = function () {
    return this.digestedDisclosures.w1();
  };
  protoOf(SDPayload).t1n = function () {
    return disclosePayloadRecursively(this, this.undisclosedPayload, null);
  };
  protoOf(SDPayload).u1n = function () {
    return Companion_getInstance_4().h1n(this.undisclosedPayload, this.digestedDisclosures);
  };
  protoOf(SDPayload).withSelectiveDisclosures = function (sdMap) {
    var selectedDisclosures = filterDisclosures(this, this.undisclosedPayload, sdMap);
    // Inline function 'kotlin.collections.filterValues' call
    var this_0 = this.digestedDisclosures;
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this_0.x1().f();
    while (_iterator__ex2g4s.g()) {
      var entry = _iterator__ex2g4s.h();
      var it = entry.r1();
      if (selectedDisclosures.o1(it.disclosure)) {
        result.y1(entry.q1(), entry.r1());
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
    return this_0.j();
  };
  protoOf(SDPayload).ne = function () {
    return this.undisclosedPayload;
  };
  protoOf(SDPayload).oe = function () {
    return this.digestedDisclosures;
  };
  protoOf(SDPayload).v1n = function (undisclosedPayload, digestedDisclosures) {
    return new SDPayload(undisclosedPayload, digestedDisclosures);
  };
  protoOf(SDPayload).copy = function (undisclosedPayload, digestedDisclosures, $super) {
    undisclosedPayload = undisclosedPayload === VOID ? this.undisclosedPayload : undisclosedPayload;
    digestedDisclosures = digestedDisclosures === VOID ? this.digestedDisclosures : digestedDisclosures;
    return $super === VOID ? this.v1n(undisclosedPayload, digestedDisclosures) : $super.v1n.call(this, undisclosedPayload, digestedDisclosures);
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
    var it = get_jsonArray(Default_getInstance().uz(decodeToString(SdjwtStringUtils_getInstance().p1m(disclosure))));
    if (!(it.i() === 3)) {
      throw Exception_init_$Create$('Invalid selective disclosure');
    }
    return new SDisclosure(disclosure, get_jsonPrimitive(it.k(0)).e11(), get_jsonPrimitive(it.k(1)).e11(), it.k(2));
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
  protoOf(SDisclosure).w1n = function () {
    return this.disclosure;
  };
  protoOf(SDisclosure).x1n = function () {
    return this.salt;
  };
  protoOf(SDisclosure).q1 = function () {
    return this.key;
  };
  protoOf(SDisclosure).r1 = function () {
    return this.value;
  };
  protoOf(SDisclosure).ne = function () {
    return this.disclosure;
  };
  protoOf(SDisclosure).oe = function () {
    return this.salt;
  };
  protoOf(SDisclosure).y1n = function () {
    return this.key;
  };
  protoOf(SDisclosure).z1n = function () {
    return this.value;
  };
  protoOf(SDisclosure).a1o = function (disclosure, salt, key, value) {
    return new SDisclosure(disclosure, salt, key, value);
  };
  protoOf(SDisclosure).copy = function (disclosure, salt, key, value, $super) {
    disclosure = disclosure === VOID ? this.disclosure : disclosure;
    salt = salt === VOID ? this.salt : salt;
    key = key === VOID ? this.key : key;
    value = value === VOID ? this.value : value;
    return $super === VOID ? this.a1o(disclosure, salt, key, value) : $super.a1o.call(this, disclosure, salt, key, value);
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
    this.o1m_1 = Default_getInstance_1().kg_1.mg(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(SdjwtStringUtils).p1m = function (_this__u8e3s4) {
    return this.o1m_1.sg(_this__u8e3s4);
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
  protoOf(JwtVerificationResult).b1o = function () {
    return this.verified;
  };
  protoOf(JwtVerificationResult).k9 = function () {
    return this.message;
  };
  protoOf(JwtVerificationResult).ne = function () {
    return this.verified;
  };
  protoOf(JwtVerificationResult).oe = function () {
    return this.message;
  };
  protoOf(JwtVerificationResult).c1o = function (verified, message) {
    return new JwtVerificationResult(verified, message);
  };
  protoOf(JwtVerificationResult).copy = function (verified, message, $super) {
    verified = verified === VOID ? this.verified : verified;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.c1o(verified, message) : $super.c1o.call(this, verified, message);
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
  protoOf(VerificationResult).d1o = function () {
    return this.sdJwt;
  };
  protoOf(VerificationResult).e1o = function () {
    return this.signatureVerified;
  };
  protoOf(VerificationResult).f1o = function () {
    return this.disclosuresVerified;
  };
  protoOf(VerificationResult).k9 = function () {
    return this.message;
  };
  protoOf(VerificationResult).b1o = function () {
    return this.signatureVerified && this.disclosuresVerified;
  };
  protoOf(VerificationResult).ne = function () {
    return this.sdJwt;
  };
  protoOf(VerificationResult).oe = function () {
    return this.signatureVerified;
  };
  protoOf(VerificationResult).y1n = function () {
    return this.disclosuresVerified;
  };
  protoOf(VerificationResult).z1n = function () {
    return this.message;
  };
  protoOf(VerificationResult).g1o = function (sdJwt, signatureVerified, disclosuresVerified, message) {
    return new VerificationResult(sdJwt, signatureVerified, disclosuresVerified, message);
  };
  protoOf(VerificationResult).copy = function (sdJwt, signatureVerified, disclosuresVerified, message, $super) {
    sdJwt = sdJwt === VOID ? this.sdJwt : sdJwt;
    signatureVerified = signatureVerified === VOID ? this.signatureVerified : signatureVerified;
    disclosuresVerified = disclosuresVerified === VOID ? this.disclosuresVerified : disclosuresVerified;
    message = message === VOID ? this.message : message;
    return $super === VOID ? this.g1o(sdJwt, signatureVerified, disclosuresVerified, message) : $super.g1o.call(this, sdJwt, signatureVerified, disclosuresVerified, message);
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
    this.base64 = Default_getInstance_1().kg_1.mg(PaddingOption_ABSENT_OPTIONAL_getInstance());
  }
  protoOf(Base64Utils).base64toBase64Url = function (_this__u8e3s4) {
    return trimEnd(replace(replace(_this__u8e3s4, '+', '-'), '/', '_'), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).base64UrlToBase64 = function (_this__u8e3s4) {
    return replace(replace(_this__u8e3s4, '-', '+'), '_', '/');
  };
  protoOf(Base64Utils).encodeToBase64Url = function (_this__u8e3s4) {
    return trimEnd(Default_getInstance_1().kg_1.og(_this__u8e3s4), charArrayOf([_Char___init__impl__6a9atx(61)]));
  };
  protoOf(Base64Utils).base64UrlDecode = function (_this__u8e3s4) {
    return this.base64.sg(_this__u8e3s4);
  };
  protoOf(Base64Utils).base64Decode = function (_this__u8e3s4) {
    return Default_getInstance_1().sg(_this__u8e3s4);
  };
  protoOf(Base64Utils).h1o = function () {
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
    this.q1o_1 = $sdJwt;
    this.r1o_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).t1o = function ($this$promise, $completion) {
    var tmp = this.u1o($this$promise, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.w8();
  };
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).m9 = function (p1, $completion) {
    return this.t1o((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).w8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 2;
            this.e8_1 = 1;
            suspendResult = Companion_getInstance_3().s1m(this.q1o_1, this.r1o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            return new VerificationResult(new SDJwtJS(it.sdJwt), it.signatureVerified, it.disclosuresVerified, it.message);
          case 2:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 2) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SDJwtJS$Companion$verifyAndParseAsync$slambda).u1o = function ($this$promise, completion) {
    var i = new SDJwtJS$Companion$verifyAndParseAsync$slambda(this.q1o_1, this.r1o_1, completion);
    i.s1o_1 = $this$promise;
    return i;
  };
  function SDJwtJS$Companion$verifyAndParseAsync$slambda_0($sdJwt, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$Companion$verifyAndParseAsync$slambda($sdJwt, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.t1o($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$Companion$signAsync$slambda($sdPayload, $jwtCryptoProvider, resultContinuation) {
    this.d1p_1 = $sdPayload;
    this.e1p_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$Companion$signAsync$slambda).g1p = function ($this$promise, $completion) {
    var tmp = this.u1o($this$promise, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.w8();
  };
  protoOf(SDJwtJS$Companion$signAsync$slambda).m9 = function (p1, $completion) {
    return this.g1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$Companion$signAsync$slambda).w8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 2;
            this.e8_1 = 1;
            suspendResult = Companion_getInstance_3().signAsync$default(this.d1p_1, this.e1p_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            return new SDJwtJS(ARGUMENT);
          case 2:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 2) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SDJwtJS$Companion$signAsync$slambda).u1o = function ($this$promise, completion) {
    var i = new SDJwtJS$Companion$signAsync$slambda(this.d1p_1, this.e1p_1, completion);
    i.f1p_1 = $this$promise;
    return i;
  };
  function SDJwtJS$Companion$signAsync$slambda_0($sdPayload, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$Companion$signAsync$slambda($sdPayload, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.g1p($this$promise, $completion);
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
  protoOf(Companion_6).h1p = function (sdPayload, jwtCryptoProvider, keyID) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$Companion$signAsync$slambda_0(sdPayload, jwtCryptoProvider, null));
  };
  protoOf(Companion_6).signAsync = function (sdPayload, jwtCryptoProvider, keyID, $super) {
    keyID = keyID === VOID ? null : keyID;
    return $super === VOID ? this.h1p(sdPayload, jwtCryptoProvider, keyID) : $super.h1p.call(this, sdPayload, jwtCryptoProvider, keyID);
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function SDJwtJS$verifyAsyncJs$slambda(this$0, $jwtCryptoProvider, resultContinuation) {
    this.q1p_1 = this$0;
    this.r1p_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$verifyAsyncJs$slambda).t1o = function ($this$promise, $completion) {
    var tmp = this.u1o($this$promise, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.w8();
  };
  protoOf(SDJwtJS$verifyAsyncJs$slambda).m9 = function (p1, $completion) {
    return this.t1o((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$verifyAsyncJs$slambda).w8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 2;
            this.e8_1 = 1;
            suspendResult = this.q1p_1.n1l(this.r1p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var it = suspendResult;
            return new VerificationResult(new SDJwtJS(it.sdJwt), it.signatureVerified, it.disclosuresVerified, it.message);
          case 2:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 2) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SDJwtJS$verifyAsyncJs$slambda).u1o = function ($this$promise, completion) {
    var i = new SDJwtJS$verifyAsyncJs$slambda(this.q1p_1, this.r1p_1, completion);
    i.s1p_1 = $this$promise;
    return i;
  };
  function SDJwtJS$verifyAsyncJs$slambda_0(this$0, $jwtCryptoProvider, resultContinuation) {
    var i = new SDJwtJS$verifyAsyncJs$slambda(this$0, $jwtCryptoProvider, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.t1o($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$presentAllAsync$slambda(this$0, $discloseAll, $withKBJwt, resultContinuation) {
    this.b1q_1 = this$0;
    this.c1q_1 = $discloseAll;
    this.d1q_1 = $withKBJwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$presentAllAsync$slambda).g1p = function ($this$promise, $completion) {
    var tmp = this.u1o($this$promise, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.w8();
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).m9 = function (p1, $completion) {
    return this.g1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).w8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        if (tmp === 0) {
          this.f8_1 = 1;
          return new SDJwtJS(this.b1q_1.presentAll(this.c1q_1, this.d1q_1));
        } else if (tmp === 1) {
          throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SDJwtJS$presentAllAsync$slambda).u1o = function ($this$promise, completion) {
    var i = new SDJwtJS$presentAllAsync$slambda(this.b1q_1, this.c1q_1, this.d1q_1, completion);
    i.e1q_1 = $this$promise;
    return i;
  };
  function SDJwtJS$presentAllAsync$slambda_0(this$0, $discloseAll, $withKBJwt, resultContinuation) {
    var i = new SDJwtJS$presentAllAsync$slambda(this$0, $discloseAll, $withKBJwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.g1p($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS$presentAsync$slambda(this$0, $sdMap, $withKBJwt, resultContinuation) {
    this.n1q_1 = this$0;
    this.o1q_1 = $sdMap;
    this.p1q_1 = $withKBJwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SDJwtJS$presentAsync$slambda).g1p = function ($this$promise, $completion) {
    var tmp = this.u1o($this$promise, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.w8();
  };
  protoOf(SDJwtJS$presentAsync$slambda).m9 = function (p1, $completion) {
    return this.g1p((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SDJwtJS$presentAsync$slambda).w8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        if (tmp === 0) {
          this.f8_1 = 1;
          return new SDJwtJS(this.n1q_1.present(Companion_getInstance_4().k1n(JSON.stringify(this.o1q_1)), this.p1q_1));
        } else if (tmp === 1) {
          throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(SDJwtJS$presentAsync$slambda).u1o = function ($this$promise, completion) {
    var i = new SDJwtJS$presentAsync$slambda(this.n1q_1, this.o1q_1, this.p1q_1, completion);
    i.q1q_1 = $this$promise;
    return i;
  };
  function SDJwtJS$presentAsync$slambda_0(this$0, $sdMap, $withKBJwt, resultContinuation) {
    var i = new SDJwtJS$presentAsync$slambda(this$0, $sdMap, $withKBJwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.g1p($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SDJwtJS(sdJwt) {
    SDJwt_init_$Init$(sdJwt, this);
  }
  protoOf(SDJwtJS).r1q = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.sdPayload.sDisclosures;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.f();
    while (_iterator__ex2g4s.g()) {
      var item = _iterator__ex2g4s.h();
      var tmp$ret$0 = item.disclosure;
      destination.d(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  };
  protoOf(SDJwtJS).s1q = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.sdPayload.sDisclosures;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.f();
    while (_iterator__ex2g4s.g()) {
      var item = _iterator__ex2g4s.h();
      var tmp = JSON;
      // Inline function 'kotlinx.serialization.json.buildJsonObject' call
      var builder = new JsonObjectBuilder();
      put(builder, 'disclosure', item.disclosure);
      put(builder, 'salt', item.salt);
      put(builder, 'key', item.key);
      builder.m11('value', item.value);
      var tmp$ret$1 = builder.n11();
      var tmp$ret$2 = tmp.parse(tmp$ret$1.toString());
      destination.d(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    return copyToArray(destination);
  };
  protoOf(SDJwtJS).q1n = function () {
    return JSON.parse(this.sdPayload.undisclosedPayload.toString());
  };
  protoOf(SDJwtJS).t1n = function () {
    return JSON.parse(this.sdPayload.fullPayload.toString());
  };
  protoOf(SDJwtJS).u1n = function () {
    return JSON.parse(this.sdPayload.sdMap.t1l().toString());
  };
  protoOf(SDJwtJS).verifyAsync = function (jwtCryptoProvider) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$verifyAsyncJs$slambda_0(this, jwtCryptoProvider, null));
  };
  protoOf(SDJwtJS).t1q = function (discloseAll, withKBJwt) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$presentAllAsync$slambda_0(this, discloseAll, withKBJwt, null));
  };
  protoOf(SDJwtJS).presentAllAsync = function (discloseAll, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.t1q(discloseAll, withKBJwt) : $super.t1q.call(this, discloseAll, withKBJwt);
  };
  protoOf(SDJwtJS).u1q = function (sdMap, withKBJwt) {
    var tmp = GlobalScope_instance;
    return promise(tmp, VOID, VOID, SDJwtJS$presentAsync$slambda_0(this, sdMap, withKBJwt, null));
  };
  protoOf(SDJwtJS).presentAsync = function (sdMap, withKBJwt, $super) {
    withKBJwt = withKBJwt === VOID ? null : withKBJwt;
    return $super === VOID ? this.u1q(sdMap, withKBJwt) : $super.u1q.call(this, sdMap, withKBJwt);
  };
  protoOf(SDJwtJS).h1l = function (formatForPresentation, withKBJwt) {
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
    this.v1q_1 = decoyMode;
    this.w1q_1 = numDecoys;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.x1q_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(SDMapBuilder).y1q = function (key, sd, children) {
    var tmp;
    if (children != null) {
      tmp = Companion_getInstance_4().k1n(JSON.stringify(children));
    } else {
      tmp = null;
    }
    var childrenSdMap = tmp;
    var tmp0 = this.x1q_1;
    // Inline function 'kotlin.collections.set' call
    var value = new SDField(sd, childrenSdMap);
    tmp0.y1(key, value);
    return this;
  };
  protoOf(SDMapBuilder).addField = function (key, sd, children, $super) {
    children = children === VOID ? null : children;
    return $super === VOID ? this.y1q(key, sd, children) : $super.y1q.call(this, key, sd, children);
  };
  protoOf(SDMapBuilder).buildAsJSON = function () {
    return JSON.parse((new SDMap(this.x1q_1, valueOf(this.v1q_1), this.w1q_1)).t1l().toString());
  };
  protoOf(SDMapBuilder).build = function () {
    return new SDMap(this.x1q_1, valueOf(this.v1q_1), this.w1q_1);
  };
  protoOf(SDMapBuilder).buildFromJsonPaths = function (jsonPaths) {
    return JSON.parse(Companion_getInstance_4().j1n(toList_0(jsonPaths), valueOf(this.v1q_1), this.w1q_1).t1l().toString());
  };
  function SDPayloadBuilder(fullPayload) {
    this.fullPayload = fullPayload;
  }
  protoOf(SDPayloadBuilder).t1n = function () {
    return this.fullPayload;
  };
  protoOf(SDPayloadBuilder).buildForUndisclosedPayload = function (undisclosedSDPayload) {
    return Companion_getInstance_5().p1n(get_jsonObject(Default_getInstance().uz(JSON.stringify(this.fullPayload))), get_jsonObject(Default_getInstance().uz(JSON.stringify(undisclosedSDPayload))));
  };
  protoOf(SDPayloadBuilder).buildForSDMap = function (sdMap) {
    return Companion_getInstance_5().n1n(get_jsonObject(Default_getInstance().uz(JSON.stringify(this.fullPayload))), Companion_getInstance_4().k1n(JSON.stringify(sdMap)));
  };
  function SimpleAsyncJWTCryptoProvider$sign$lambda($continuation) {
    return function (it) {
      console.log('SIGNED');
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $continuation;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(it);
      this_0.z8(tmp$ret$0);
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
      tmp0.z8(tmp$ret$0);
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
      tmp0.z8(tmp$ret$0);
      return Unit_instance;
    };
  }
  function SimpleAsyncJWTCryptoProvider$signAsync$slambda(this$0, $payload, $keyID, resultContinuation) {
    this.h1r_1 = this$0;
    this.i1r_1 = $payload;
    this.j1r_1 = $keyID;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).l1r = function ($this$promise, $completion) {
    var tmp = this.u1o($this$promise, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.w8();
  };
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).m9 = function (p1, $completion) {
    return this.l1r((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).w8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 2;
            this.e8_1 = 1;
            suspendResult = this.h1r_1.b1k(get_jsonObject(Default_getInstance().uz(JSON.stringify(this.i1r_1))), this.j1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 2) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SimpleAsyncJWTCryptoProvider$signAsync$slambda).u1o = function ($this$promise, completion) {
    var i = new SimpleAsyncJWTCryptoProvider$signAsync$slambda(this.h1r_1, this.i1r_1, this.j1r_1, completion);
    i.k1r_1 = $this$promise;
    return i;
  };
  function SimpleAsyncJWTCryptoProvider$signAsync$slambda_0(this$0, $payload, $keyID, resultContinuation) {
    var i = new SimpleAsyncJWTCryptoProvider$signAsync$slambda(this$0, $payload, $keyID, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.l1r($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this$0, $jwt, resultContinuation) {
    this.x1r_1 = this$0;
    this.y1r_1 = $jwt;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).a1s = function ($this$promise, $completion) {
    var tmp = this.u1o($this$promise, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.w8();
  };
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).m9 = function (p1, $completion) {
    return this.a1s((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).w8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 2;
            this.e8_1 = 1;
            suspendResult = this.x1r_1.d1k(this.y1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 2) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SimpleAsyncJWTCryptoProvider$verifyAsync$slambda).u1o = function ($this$promise, completion) {
    var i = new SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this.x1r_1, this.y1r_1, completion);
    i.z1r_1 = $this$promise;
    return i;
  };
  function SimpleAsyncJWTCryptoProvider$verifyAsync$slambda_0(this$0, $jwt, resultContinuation) {
    var i = new SimpleAsyncJWTCryptoProvider$verifyAsync$slambda(this$0, $jwt, resultContinuation);
    var l = function ($this$promise, $completion) {
      return i.a1s($this$promise, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function SimpleAsyncJWTCryptoProvider(algorithm, keyParam, options) {
    this.m1r_1 = algorithm;
    this.n1r_1 = keyParam;
    this.o1r_1 = options;
  }
  protoOf(SimpleAsyncJWTCryptoProvider).b1k = function (payload, keyID, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    console.log('SIGNING', payload.toString());
    var tmp = new jose.SignJWT(JSON.parse(payload.toString()));
    // Inline function 'kotlinx.serialization.json.buildJsonObject' call
    var builder = new JsonObjectBuilder();
    put(builder, 'alg', this.m1r_1);
    put(builder, 'typ', 'JWT');
    if (keyID == null)
      null;
    else {
      // Inline function 'kotlin.also' call
      put(builder, 'kid', keyID);
    }
    // Inline function 'kotlin.let' call
    var it = builder.n11();
    var tmp$ret$5 = JSON.parse(it.toString());
    var tmp_0 = tmp.setProtectedHeader(tmp$ret$5).sign(this.n1r_1, this.o1r_1);
    var tmp_1 = SimpleAsyncJWTCryptoProvider$sign$lambda(safe);
    tmp_0.then(tmp_1, SimpleAsyncJWTCryptoProvider$sign$lambda_0);
    return safe.i9();
  };
  protoOf(SimpleAsyncJWTCryptoProvider).d1k = function (jwt, $completion) {
    var safe = SafeContinuation_init_$Create$(intercepted($completion));
    console.log('Verifying JWT: ' + jwt);
    var tmp = jose;
    var tmp0_elvis_lhs = this.o1r_1;
    var tmp_0 = tmp.jwtVerify(jwt, this.n1r_1, tmp0_elvis_lhs == null ? {} : tmp0_elvis_lhs);
    var tmp_1 = SimpleAsyncJWTCryptoProvider$verify$lambda(safe);
    tmp_0.then(tmp_1, SimpleAsyncJWTCryptoProvider$verify$lambda_0(safe));
    return safe.i9();
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
  defineProp(protoOf(DecoyMode), 'name', protoOf(DecoyMode).d2);
  defineProp(protoOf(DecoyMode), 'ordinal', protoOf(DecoyMode).e2);
  defineProp(protoOf(SDJwt), 'zzz_unused_disclosures', protoOf(SDJwt).x1k);
  defineProp(protoOf(SDJwt), 'zzz_unused_disclosureObjects', protoOf(SDJwt).y1k);
  defineProp(protoOf(SDJwt), 'zzz_unused_undisclosedPayload', protoOf(SDJwt).z1k);
  defineProp(protoOf(SDJwt), 'zzz_unused_fullPayload', protoOf(SDJwt).a1l);
  defineProp(protoOf(SDJwt), 'zzz_unused_digestedDisclosures', protoOf(SDJwt).b1l);
  defineProp(protoOf(SDJwt), 'zzz_unused_sdMap', protoOf(SDJwt).c1l);
  defineProp(protoOf(SDJwt), 'algorithm', protoOf(SDJwt).d1l);
  defineProp(protoOf(SDJwt), 'keyID', protoOf(SDJwt).e1l);
  defineProp(protoOf(SDJwt), 'jwk', protoOf(SDJwt).f1l);
  defineProp(protoOf(SDJwt), 'type', protoOf(SDJwt).g1l);
  defineProp(protoOf(KeyBindingJwt), 'issuedAt', protoOf(KeyBindingJwt).n1k);
  defineProp(protoOf(KeyBindingJwt), 'audience', protoOf(KeyBindingJwt).o1k);
  defineProp(protoOf(KeyBindingJwt), 'nonce', protoOf(KeyBindingJwt).p1k);
  defineProp(protoOf(KeyBindingJwt), 'sdHash', protoOf(KeyBindingJwt).q1k);
  protoOf($serializer).rt = typeParametersSerializers;
  protoOf($serializer_0).rt = typeParametersSerializers;
  protoOf(SDMap).asJsReadonlyMapView = asJsReadonlyMapView;
  defineProp(protoOf(SDPayload), 'sDisclosures', protoOf(SDPayload).s1n);
  defineProp(protoOf(SDPayload), 'fullPayload', protoOf(SDPayload).t1n);
  defineProp(protoOf(SDPayload), 'sdMap', protoOf(SDPayload).u1n);
  defineProp(protoOf(VerificationResult), 'verified', protoOf(VerificationResult).b1o);
  defineProp(protoOf(SDJwtJS), 'disclosures', protoOf(SDJwtJS).r1q);
  defineProp(protoOf(SDJwtJS), 'disclosureObjects', protoOf(SDJwtJS).s1q);
  defineProp(protoOf(SDJwtJS), 'undisclosedPayload', protoOf(SDJwtJS).q1n);
  defineProp(protoOf(SDJwtJS), 'fullPayload', protoOf(SDJwtJS).t1n);
  defineProp(protoOf(SDJwtJS), 'sdMap', protoOf(SDJwtJS).u1n);
  protoOf(SimpleAsyncJWTCryptoProvider).c1k = sign$default;
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
  kotlin_kotlin.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js.map
