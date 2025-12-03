(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js', './crypto.js', './Kotlin-DateTime-library-kotlinx-datetime.js', './kotlinx-serialization-kotlinx-serialization-json.js', './dids.js', './kotlinx-coroutines-core.js', './kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js', './ktor-ktor-client-ktor-client-core.js', './ktor-ktor-http.js', './waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js', './kotlin-logging.js', './ktor-ktor-io.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./crypto.js'), require('./Kotlin-DateTime-library-kotlinx-datetime.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'), require('./dids.js'), require('./kotlinx-coroutines-core.js'), require('./kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime.js'), require('./ktor-ktor-client-ktor-client-core.js'), require('./ktor-ktor-http.js'), require('./waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt.js'), require('./kotlin-logging.js'), require('./ktor-ktor-io.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof crypto === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'crypto' was not found. Please, check whether 'crypto' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof globalThis['Kotlin-DateTime-library-kotlinx-datetime'] === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'Kotlin-DateTime-library-kotlinx-datetime' was not found. Please, check whether 'Kotlin-DateTime-library-kotlinx-datetime' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof dids === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'dids' was not found. Please, check whether 'dids' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'] === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' was not found. Please, check whether 'kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof globalThis['ktor-ktor-client-ktor-client-core'] === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'ktor-ktor-client-ktor-client-core' was not found. Please, check whether 'ktor-ktor-client-ktor-client-core' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof globalThis['ktor-ktor-http'] === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'ktor-ktor-http' was not found. Please, check whether 'ktor-ktor-http' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'] === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt' was not found. Please, check whether 'waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof globalThis['kotlin-logging'] === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'kotlin-logging' was not found. Please, check whether 'kotlin-logging' is loaded prior to 'w3c-credentials'.");
    }
    if (typeof globalThis['ktor-ktor-io'] === 'undefined') {
      throw new Error("Error loading module 'w3c-credentials'. Its dependency 'ktor-ktor-io' was not found. Please, check whether 'ktor-ktor-io' is loaded prior to 'w3c-credentials'.");
    }
    globalThis['w3c-credentials'] = factory(typeof globalThis['w3c-credentials'] === 'undefined' ? {} : globalThis['w3c-credentials'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib'], crypto, globalThis['Kotlin-DateTime-library-kotlinx-datetime'], globalThis['kotlinx-serialization-kotlinx-serialization-json'], dids, globalThis['kotlinx-coroutines-core'], globalThis['kotlin-suspend-transform-compiler-plugin-runtime-suspend-transform-runtime'], globalThis['ktor-ktor-client-ktor-client-core'], globalThis['ktor-ktor-http'], globalThis['waltid-identity-waltid-libraries-sdjwt-waltid-sdjwt'], globalThis['kotlin-logging'], globalThis['ktor-ktor-io']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin, kotlin_id_walt_crypto_waltid_crypto, kotlin_org_jetbrains_kotlinx_kotlinx_datetime, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json, kotlin_id_walt_did_waltid_did, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime, kotlin_io_ktor_ktor_client_core, kotlin_io_ktor_ktor_http, kotlin_id_walt_sdjwt_waltid_sdjwt, kotlin_io_github_oshai_kotlin_logging, kotlin_io_ktor_ktor_io) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.p;
  var lazy = kotlin_kotlin.$_$.yi;
  var protoOf = kotlin_kotlin.$_$.gd;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dc;
  var VOID = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.a6;
  var Enum = kotlin_kotlin.$_$.oh;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  var THROW_IAE = kotlin_kotlin.$_$.bi;
  var defineProp = kotlin_kotlin.$_$.vb;
  var listOf = kotlin_kotlin.$_$.w8;
  var UuidUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.j;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.w;
  var NotImplementedError = kotlin_kotlin.$_$.vh;
  var toMutableList = kotlin_kotlin.$_$.ga;
  var ensureNotNull = kotlin_kotlin.$_$.si;
  var toMutableMap = kotlin_kotlin.$_$.ia;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var to = kotlin_kotlin.$_$.hj;
  var mapOf = kotlin_kotlin.$_$.z8;
  var CoroutineImpl = kotlin_kotlin.$_$.gb;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.qa;
  var initMetadataForLambda = kotlin_kotlin.$_$.hc;
  var encodeToByteArray = kotlin_kotlin.$_$.se;
  var JsonUtils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.f;
  var mapOf_0 = kotlin_kotlin.$_$.a9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ec;
  var DidService_getInstance = kotlin_id_walt_did_waltid_did.$_$.a;
  var Result = kotlin_kotlin.$_$.yh;
  var throwOnFailure = kotlin_kotlin.$_$.dj;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.q3;
  var THROW_CCE = kotlin_kotlin.$_$.ai;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.y;
  var first = kotlin_kotlin.$_$.e8;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a1;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.z;
  var Companion_getInstance = kotlin_kotlin.$_$.q5;
  var DurationUnit_MINUTES_getInstance = kotlin_kotlin.$_$.m;
  var toDuration = kotlin_kotlin.$_$.eh;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var addAll = kotlin_kotlin.$_$.r6;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.oi;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c3;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var isInterface = kotlin_kotlin.$_$.rc;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var $runInAsync$ = kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime.$_$.a;
  var substringBefore = kotlin_kotlin.$_$.dg;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.a7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var JsonPrimitive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.a1;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var url = kotlin_io_ktor_ktor_client_core.$_$.u;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.h;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.x;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.a;
  var toString = kotlin_kotlin.$_$.kd;
  var hashCode = kotlin_kotlin.$_$.bc;
  var equals = kotlin_kotlin.$_$.wb;
  var KtMap = kotlin_kotlin.$_$.k6;
  var Companion_getInstance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var DidUtils_getInstance = kotlin_id_walt_did_waltid_did.$_$.b;
  var toString_0 = kotlin_kotlin.$_$.fj;
  var charSequenceLength = kotlin_kotlin.$_$.sb;
  var JsonNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var mapCapacity = kotlin_kotlin.$_$.y8;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.b1;
  var removePrefix = kotlin_kotlin.$_$.nf;
  var startsWith = kotlin_kotlin.$_$.wf;
  var emptyList = kotlin_kotlin.$_$.v7;
  var initMetadataForObject = kotlin_kotlin.$_$.ic;
  var getStringHashCode = kotlin_kotlin.$_$.ac;
  var Result__toString_impl_yu5r8k = kotlin_kotlin.$_$.p3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n3;
  var JwsUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.g;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.v2;
  var Companion_instance = kotlin_kotlin.$_$.v5;
  var split = kotlin_kotlin.$_$.vf;
  var createFailure = kotlin_kotlin.$_$.ri;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l3;
  var Exception = kotlin_kotlin.$_$.qh;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.o3;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.u1;
  var Pair = kotlin_kotlin.$_$.xh;
  var copyToArray = kotlin_kotlin.$_$.q7;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.w7;
  var Companion_getInstance_2 = kotlin_id_walt_sdjwt_waltid_sdjwt.$_$.a;
  var VerificationException = kotlin_id_walt_crypto_waltid_crypto.$_$.k;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var initMetadataForInterface = kotlin_kotlin.$_$.gc;
  var NullPointerException = kotlin_kotlin.$_$.wh;
  var JsonPrimitive_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.s;
  var toList = kotlin_kotlin.$_$.aa;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.m3;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.d2;
  var first_0 = kotlin_kotlin.$_$.we;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var last = kotlin_kotlin.$_$.jf;
  var contains = kotlin_kotlin.$_$.ne;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.t;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var objectCreate = kotlin_kotlin.$_$.fd;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var Companion_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var mutableMapOf = kotlin_kotlin.$_$.c9;
  var toMap = kotlin_kotlin.$_$.ea;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.p5;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var Companion_getInstance_3 = kotlin_id_walt_sdjwt_waltid_sdjwt.$_$.b;
  var zzz_unused_SDMapBuilder = kotlin_id_walt_sdjwt_waltid_sdjwt.$_$.c;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.f1;
  var plus = kotlin_kotlin.$_$.d9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion, VOID, [SerializerFactory]);
  initMetadataForClass(JwtClaims, 'JwtClaims', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_4});
  initMetadataForCompanion(Companion_0, VOID, [SerializerFactory]);
  initMetadataForCompanion(Companion_1, VOID, [SerializerFactory]);
  initMetadataForClass(V1, 'V1', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_5});
  initMetadataForClass(V2, 'V2', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_6});
  initMetadataForClass(CredentialBuilderType, 'CredentialBuilderType', VOID, Enum);
  initMetadataForClass(CredentialBuilder, 'CredentialBuilder', CredentialBuilder);
  initMetadataForLambda(PresentationBuilder$buildAndSignAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($buildAndSignCOROUTINE$0, CoroutineImpl);
  initMetadataForCoroutine($resolveDidAuthenticationCOROUTINE$1, CoroutineImpl);
  initMetadataForClass(PresentationBuilder, 'PresentationBuilder', PresentationBuilder, VOID, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_5, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_7, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_9, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_11, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_13, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_15, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_17, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_19, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_21, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_23, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_25, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_27, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_29, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(dataFunctions$slambda_31, CoroutineImpl, VOID, [1]);
  initMetadataForClass(IssuanceInformation, 'IssuanceInformation');
  initMetadataForLambda(Issuer$mergingJwtIssueAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Issuer$mergingToVcAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Issuer$getKidHeaderAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Issuer$mergingSdJwtIssueAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Issuer$baseIssueAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($mergingJwtIssueCOROUTINE$2, CoroutineImpl);
  initMetadataForCoroutine($mergingSdJwtIssueCOROUTINE$3, CoroutineImpl);
  initMetadataForCoroutine($mergingToVcCOROUTINE$4, CoroutineImpl);
  initMetadataForCoroutine($getKidHeaderCOROUTINE$5, CoroutineImpl);
  initMetadataForObject(Issuer, 'Issuer', VOID, VOID, VOID, [7, 8, 10, 5, 2]);
  initMetadataForObject(JwsHeader, 'JwsHeader');
  initMetadataForObject(JwsOption, 'JwsOption');
  initMetadataForClass(KeyInfo, 'KeyInfo');
  initMetadataForClass(KeysInfo, 'KeysInfo');
  initMetadataForLambda(JwsSignatureScheme$getIssuerKeyInfoAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JwsSignatureScheme$verifyAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JwsSignatureScheme$verifySDJwtAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JwsSignatureScheme$getIssuerKeysInfoAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(JwsSignatureScheme$signAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getIssuerKeyInfoCOROUTINE$6, CoroutineImpl);
  initMetadataForCoroutine($getIssuerKeysInfoCOROUTINE$7, CoroutineImpl);
  initMetadataForCoroutine($verifyCOROUTINE$8, CoroutineImpl);
  initMetadataForInterface(SignatureScheme, 'SignatureScheme');
  initMetadataForClass(JwsSignatureScheme, 'JwsSignatureScheme', JwsSignatureScheme, VOID, [SignatureScheme], [1, 4, 2]);
  initMetadataForClass(MergeResult, 'MergeResult');
  initMetadataForClass(JsonMergeResult, 'JsonMergeResult');
  initMetadataForClass(FunctionCall, 'FunctionCall');
  initMetadataForLambda(CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(CredentialDataMergeUtils$mergeWithMappingAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(CredentialDataMergeUtils$patchAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(CredentialDataMergeUtils$getTemplateDataAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($getTemplateDataCOROUTINE$9, CoroutineImpl);
  initMetadataForCoroutine($patchCOROUTINE$10, CoroutineImpl);
  initMetadataForCoroutine($mergeWithMappingCOROUTINE$11, CoroutineImpl);
  initMetadataForCoroutine($mergeSDJwtVCPayloadWithMappingCOROUTINE$12, CoroutineImpl);
  initMetadataForObject(CredentialDataMergeUtils, 'CredentialDataMergeUtils', VOID, VOID, VOID, [4, 5, 3]);
  initMetadataForObject(ExtensionMethods, 'ExtensionMethods');
  initMetadataForObject(W3CVcUtils, 'W3CVcUtils');
  initMetadataForCompanion(Companion_2);
  initMetadataForInterface(CredentialDataModel, 'CredentialDataModel');
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TermsOfUse, 'TermsOfUse', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForClass(CredentialStatus, 'CredentialStatus', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForObject(W3CBaseDataModels, 'W3CBaseDataModels');
  initMetadataForInterface(W3CMetadata, 'W3CMetadata');
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_6, VOID, [W3CMetadata]);
  initMetadataForClass(CredentialSubject, 'CredentialSubject', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(W3CV11DataModel, 'W3CV11DataModel', VOID, VOID, [CredentialDataModel], VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_8, VOID, [W3CMetadata]);
  initMetadataForClass(CredentialSubject_0, 'CredentialSubject', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(W3CV2DataModel, 'W3CV2DataModel', VOID, VOID, [CredentialDataModel], VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForClass(W3CVCSerializer, 'W3CVCSerializer', W3CVCSerializer, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_9);
  initMetadataForLambda(W3CVC$signSdJwtAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(W3CVC$signJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($signSdJwtCOROUTINE$13, CoroutineImpl);
  initMetadataForCoroutine($signJwsCOROUTINE$14, CoroutineImpl);
  initMetadataForClass(W3CVC, 'W3CVC', W3CVC, VOID, [KtMap], [7, 6]);
  initMetadataForObject(CredentialBuilderUtils, 'CredentialBuilderUtils');
  //endregion
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.fcb_1.z();
  }
  function JwtClaims$Companion$_anonymous__ny0lpt() {
    return createSimpleEnumSerializer('id.walt.w3c.JwtClaims', values());
  }
  var JwtClaims_NotBefore_instance;
  var JwtClaims_NotAfter_instance;
  var JwtClaims_IssuedAt_instance;
  function values() {
    return [JwtClaims_NotBefore_getInstance(), JwtClaims_NotAfter_getInstance(), JwtClaims_IssuedAt_getInstance()];
  }
  function Companion() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.fcb_1 = lazy(tmp_0, JwtClaims$Companion$_anonymous__ny0lpt);
  }
  protoOf(Companion).l4s = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).w2a = function (typeParamsSerializers) {
    return this.l4s();
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    JwtClaims_initEntries();
    if (Companion_instance_1 == null)
      new Companion();
    return Companion_instance_1;
  }
  var JwtClaims_entriesInitialized;
  function JwtClaims_initEntries() {
    if (JwtClaims_entriesInitialized)
      return Unit_instance;
    JwtClaims_entriesInitialized = true;
    JwtClaims_NotBefore_instance = new JwtClaims('NotBefore', 0, 'nbf');
    JwtClaims_NotAfter_instance = new JwtClaims('NotAfter', 1, 'exp');
    JwtClaims_IssuedAt_instance = new JwtClaims('IssuedAt', 2, 'iat');
    Companion_getInstance_4();
  }
  function JwtClaims(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.icb_1 = value;
  }
  protoOf(JwtClaims).jcb = function () {
    return this.icb_1;
  };
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.kcb_1.z();
  }
  function VcClaims$V1$Companion$_anonymous__pkz4b8() {
    return createSimpleEnumSerializer('id.walt.w3c.VcClaims.V1', values_0());
  }
  var V1_NotBefore_instance;
  var V1_NotAfter_instance;
  function values_0() {
    return [V1_NotBefore_getInstance(), V1_NotAfter_getInstance()];
  }
  function Companion_0() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.kcb_1 = lazy(tmp_0, VcClaims$V1$Companion$_anonymous__pkz4b8);
  }
  protoOf(Companion_0).l4s = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_0).w2a = function (typeParamsSerializers) {
    return this.l4s();
  };
  var Companion_instance_2;
  function Companion_getInstance_5() {
    V1_initEntries();
    if (Companion_instance_2 == null)
      new Companion_0();
    return Companion_instance_2;
  }
  var V1_entriesInitialized;
  function V1_initEntries() {
    if (V1_entriesInitialized)
      return Unit_instance;
    V1_entriesInitialized = true;
    V1_NotBefore_instance = new V1('NotBefore', 0, 'issuanceDate');
    V1_NotAfter_instance = new V1('NotAfter', 1, 'expirationDate');
    Companion_getInstance_5();
  }
  function _get_$cachedSerializer__te6jhj_1($this) {
    return $this.lcb_1.z();
  }
  function VcClaims$V2$Companion$_anonymous__4zvhw3() {
    return createSimpleEnumSerializer('id.walt.w3c.VcClaims.V2', values_1());
  }
  var V2_NotBefore_instance;
  var V2_NotAfter_instance;
  function values_1() {
    return [V2_NotBefore_getInstance(), V2_NotAfter_getInstance()];
  }
  function Companion_1() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.lcb_1 = lazy(tmp_0, VcClaims$V2$Companion$_anonymous__4zvhw3);
  }
  protoOf(Companion_1).l4s = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_1).w2a = function (typeParamsSerializers) {
    return this.l4s();
  };
  var Companion_instance_3;
  function Companion_getInstance_6() {
    V2_initEntries();
    if (Companion_instance_3 == null)
      new Companion_1();
    return Companion_instance_3;
  }
  var V2_entriesInitialized;
  function V2_initEntries() {
    if (V2_entriesInitialized)
      return Unit_instance;
    V2_entriesInitialized = true;
    V2_NotBefore_instance = new V2('NotBefore', 0, 'validFrom');
    V2_NotAfter_instance = new V2('NotAfter', 1, 'validUntil');
    Companion_getInstance_6();
  }
  function V1(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.ocb_1 = value;
  }
  protoOf(V1).jcb = function () {
    return this.ocb_1;
  };
  function V2(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.rcb_1 = value;
  }
  protoOf(V2).jcb = function () {
    return this.rcb_1;
  };
  function V1_NotBefore_getInstance() {
    V1_initEntries();
    return V1_NotBefore_instance;
  }
  function V1_NotAfter_getInstance() {
    V1_initEntries();
    return V1_NotAfter_instance;
  }
  function V2_NotBefore_getInstance() {
    V2_initEntries();
    return V2_NotBefore_instance;
  }
  function V2_NotAfter_getInstance() {
    V2_initEntries();
    return V2_NotAfter_instance;
  }
  function JwtClaims_NotBefore_getInstance() {
    JwtClaims_initEntries();
    return JwtClaims_NotBefore_instance;
  }
  function JwtClaims_NotAfter_getInstance() {
    JwtClaims_initEntries();
    return JwtClaims_NotAfter_instance;
  }
  function JwtClaims_IssuedAt_getInstance() {
    JwtClaims_initEntries();
    return JwtClaims_IssuedAt_instance;
  }
  var CredentialBuilderType_W3CV11CredentialBuilder_instance;
  var CredentialBuilderType_W3CV2CredentialBuilder_instance;
  var CredentialBuilderType_MdocsCredentialBuilder_instance;
  function values_2() {
    return [CredentialBuilderType_W3CV11CredentialBuilder_getInstance(), CredentialBuilderType_W3CV2CredentialBuilder_getInstance(), CredentialBuilderType_MdocsCredentialBuilder_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'W3CV11CredentialBuilder':
        return CredentialBuilderType_W3CV11CredentialBuilder_getInstance();
      case 'W3CV2CredentialBuilder':
        return CredentialBuilderType_W3CV2CredentialBuilder_getInstance();
      case 'MdocsCredentialBuilder':
        return CredentialBuilderType_MdocsCredentialBuilder_getInstance();
      default:
        CredentialBuilderType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var CredentialBuilderType_entriesInitialized;
  function CredentialBuilderType_initEntries() {
    if (CredentialBuilderType_entriesInitialized)
      return Unit_instance;
    CredentialBuilderType_entriesInitialized = true;
    CredentialBuilderType_W3CV11CredentialBuilder_instance = new CredentialBuilderType('W3CV11CredentialBuilder', 0);
    CredentialBuilderType_W3CV2CredentialBuilder_instance = new CredentialBuilderType('W3CV2CredentialBuilder', 1);
    CredentialBuilderType_MdocsCredentialBuilder_instance = new CredentialBuilderType('MdocsCredentialBuilder', 2);
  }
  function CredentialBuilderType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function CredentialBuilder(builderType) {
    builderType = builderType === VOID ? CredentialBuilderType_W3CV2CredentialBuilder_getInstance() : builderType;
    this.builderType = builderType;
    this.context = this.getDefaultBuilderContext();
    this.type = listOf('VerifiableCredential');
    this.credentialId = 'urn:uuid:' + UuidUtils_instance.x9a().toString();
    this.issuerDid = null;
    this.subjectDid = null;
    this.validFrom = System_instance.c5t();
    this.validUntil = null;
    this.credentialStatus = null;
    this.termsOfUse = null;
    this._customCredentialSubjectData = null;
    this._extraCustomData = HashMap_init_$Create$();
  }
  protoOf(CredentialBuilder).ucb = function () {
    return this.builderType;
  };
  protoOf(CredentialBuilder).getDefaultBuilderContext = function () {
    var tmp;
    switch (this.builderType.r2_1) {
      case 0:
        tmp = Companion_getInstance_11().wcb_1;
        break;
      case 1:
        tmp = Companion_getInstance_13().ycb_1;
        break;
      default:
        throw new NotImplementedError('Not yet implemented: Default context for builder ' + this.builderType.toString());
    }
    return tmp;
  };
  protoOf(CredentialBuilder).zcb = function (_set____db54di) {
    this.context = _set____db54di;
  };
  protoOf(CredentialBuilder).s9 = function () {
    return this.context;
  };
  protoOf(CredentialBuilder).acc = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(CredentialBuilder).t9y = function () {
    return this.type;
  };
  protoOf(CredentialBuilder).addType = function (addType) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableList(this.type);
    this_0.n(addType);
    tmp.type = this_0;
  };
  protoOf(CredentialBuilder).addContext = function (addContext) {
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableList(this.context);
    this_0.n(addContext);
    tmp.context = this_0;
  };
  protoOf(CredentialBuilder).bcc = function (_set____db54di) {
    this.credentialId = _set____db54di;
  };
  protoOf(CredentialBuilder).ccc = function () {
    return this.credentialId;
  };
  protoOf(CredentialBuilder).randomCredentialSubjectUUID = function () {
    this.credentialId = 'urn:uuid:' + UuidUtils_instance.x9a().toString();
  };
  protoOf(CredentialBuilder).dcc = function (_set____db54di) {
    this.issuerDid = _set____db54di;
  };
  protoOf(CredentialBuilder).ecc = function () {
    return this.issuerDid;
  };
  protoOf(CredentialBuilder).fcc = function (_set____db54di) {
    this.subjectDid = _set____db54di;
  };
  protoOf(CredentialBuilder).gcc = function () {
    return this.subjectDid;
  };
  protoOf(CredentialBuilder).hcc = function (_set____db54di) {
    this.validFrom = _set____db54di;
  };
  protoOf(CredentialBuilder).icc = function () {
    return this.validFrom;
  };
  protoOf(CredentialBuilder).validFromNow = function () {
    this.validFrom = System_instance.c5t();
  };
  protoOf(CredentialBuilder).jcc = function (_set____db54di) {
    this.validUntil = _set____db54di;
  };
  protoOf(CredentialBuilder).kcc = function () {
    return this.validUntil;
  };
  protoOf(CredentialBuilder).validFor = function (duration) {
    this.validUntil = System_instance.c5t().vo(duration);
  };
  protoOf(CredentialBuilder).lcc = function (_set____db54di) {
    this.credentialStatus = _set____db54di;
  };
  protoOf(CredentialBuilder).mcc = function () {
    return this.credentialStatus;
  };
  protoOf(CredentialBuilder).useStatusList2021Revocation = function (statusListCredential, listIndex) {
    this.credentialStatus = new CredentialStatus(statusListCredential + '#' + listIndex, 'StatusList2021Entry', 'revocation', listIndex.toString(), statusListCredential);
  };
  protoOf(CredentialBuilder).ncc = function (_set____db54di) {
    this.termsOfUse = _set____db54di;
  };
  protoOf(CredentialBuilder).occ = function () {
    return this.termsOfUse;
  };
  protoOf(CredentialBuilder).pcc = function (_set____db54di) {
    this._customCredentialSubjectData = _set____db54di;
  };
  protoOf(CredentialBuilder).qcc = function () {
    return this._customCredentialSubjectData;
  };
  protoOf(CredentialBuilder).useCredentialSubject = function (data) {
    this._customCredentialSubjectData = data;
  };
  protoOf(CredentialBuilder).rcc = function (_set____db54di) {
    this._extraCustomData = _set____db54di;
  };
  protoOf(CredentialBuilder).scc = function () {
    return this._extraCustomData;
  };
  protoOf(CredentialBuilder).useData = function (key, data) {
    // Inline function 'kotlin.collections.set' call
    this._extraCustomData.n2(key, data);
  };
  protoOf(CredentialBuilder).useDataPair = function (pair) {
    return this.useData(pair.ac_1, pair.bc_1);
  };
  protoOf(CredentialBuilder).set = function (_this__u8e3s4, data) {
    this.useData(_this__u8e3s4, data);
  };
  protoOf(CredentialBuilder).buildW3CSubject = function () {
    var tmp;
    if (this._customCredentialSubjectData == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.apply' call
      var this_0 = toMutableMap(ensureNotNull(this._customCredentialSubjectData));
      if (this.subjectDid == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        this_0.n2('id', JsonPrimitive(this.subjectDid));
      }
      tmp = new JsonObject(this_0);
    }
    return tmp;
  };
  protoOf(CredentialBuilder).buildW3CV2DataModel = function () {
    var tmp = this.context;
    var tmp_0 = this.type;
    var tmp0_elvis_lhs = this.buildW3CSubject();
    var tmp_1 = tmp0_elvis_lhs == null ? new JsonObject(mapOf(to('id', JsonPrimitive(this.subjectDid)))) : tmp0_elvis_lhs;
    var tmp_2 = this.credentialId;
    var tmp_3 = this.issuerDid;
    var tmp1_safe_receiver = this.validFrom;
    var tmp_4 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString();
    var tmp2_safe_receiver = this.validUntil;
    return new W3CV2DataModel(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString(), this.credentialStatus, this.termsOfUse);
  };
  protoOf(CredentialBuilder).buildW3CV11DataModel = function () {
    var tmp = this.context;
    var tmp_0 = this.type;
    var tmp0_elvis_lhs = this.buildW3CSubject();
    var tmp_1 = tmp0_elvis_lhs == null ? new JsonObject(mapOf(to('id', JsonPrimitive(this.subjectDid)))) : tmp0_elvis_lhs;
    var tmp_2 = this.credentialId;
    var tmp_3 = this.issuerDid;
    var tmp1_safe_receiver = this.validFrom;
    var tmp_4 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString();
    var tmp2_safe_receiver = this.validUntil;
    return new W3CV11DataModel(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString(), this.credentialStatus, this.termsOfUse);
  };
  protoOf(CredentialBuilder).buildW3C = function () {
    var tmp;
    switch (this.builderType.r2_1) {
      case 1:
        tmp = this.buildW3CV2DataModel();
        break;
      case 0:
        tmp = this.buildW3CV11DataModel();
        break;
      default:
        throw new NotImplementedError('Not yet implemented: Builder Type ' + this.builderType.toString());
    }
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableMap(tmp.encodeToJsonObject());
    this_0.p2(this._extraCustomData);
    return new W3CVC(this_0);
  };
  function CredentialBuilderType_W3CV11CredentialBuilder_getInstance() {
    CredentialBuilderType_initEntries();
    return CredentialBuilderType_W3CV11CredentialBuilder_instance;
  }
  function CredentialBuilderType_W3CV2CredentialBuilder_getInstance() {
    CredentialBuilderType_initEntries();
    return CredentialBuilderType_W3CV2CredentialBuilder_instance;
  }
  function CredentialBuilderType_MdocsCredentialBuilder_getInstance() {
    CredentialBuilderType_initEntries();
    return CredentialBuilderType_MdocsCredentialBuilder_instance;
  }
  function resolveDidAuthentication($this, did, $completion) {
    var tmp = new $resolveDidAuthenticationCOROUTINE$1($this, did, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function PresentationBuilder$buildAndSignAsync$slambda(this$0, $key, resultContinuation) {
    this.lcd_1 = this$0;
    this.mcd_1 = $key;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PresentationBuilder$buildAndSignAsync$slambda).a6j = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(PresentationBuilder$buildAndSignAsync$slambda).zb = function ($completion) {
    return this.a6j($completion);
  };
  protoOf(PresentationBuilder$buildAndSignAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.lcd_1.ncd(this.mcd_1, this);
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
  protoOf(PresentationBuilder$buildAndSignAsync$slambda).ia = function (completion) {
    return new PresentationBuilder$buildAndSignAsync$slambda(this.lcd_1, this.mcd_1, completion);
  };
  function PresentationBuilder$buildAndSignAsync$slambda_0(this$0, $key, resultContinuation) {
    var i = new PresentationBuilder$buildAndSignAsync$slambda(this$0, $key, resultContinuation);
    var l = function ($completion) {
      return i.a6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $buildAndSignCOROUTINE$0(_this__u8e3s4, key, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wcd_1 = _this__u8e3s4;
    this.xcd_1 = key;
  }
  protoOf($buildAndSignCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 6;
            this.ycd_1 = encodeToByteArray(this.wcd_1.buildPresentationJsonString());
            this.zcd_1 = JsonUtils_getInstance();
            this.ace_1 = this.wcd_1.did;
            if (this.ace_1 == null) {
              this.bce_1 = null;
              this.m9_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.cce_1 = this.ace_1;
              this.dce_1 = this.cce_1;
              var tmp_1 = this;
              tmp_1.ece_1 = this.dce_1;
              this.fce_1 = this.ece_1;
              this.m9_1 = 1;
              suspendResult = resolveDidAuthentication(this.wcd_1, this.fce_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.bce_1 = suspendResult;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.gce_1 = this.bce_1;
            if (this.gce_1 == null) {
              this.m9_1 = 3;
              suspendResult = this.xcd_1.x6j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.hce_1 = this.gce_1;
              this.m9_1 = 4;
              continue $sm;
            }

          case 3:
            this.hce_1 = suspendResult;
            this.m9_1 = 4;
            continue $sm;
          case 4:
            this.ice_1 = this.hce_1;
            this.jce_1 = this.zcd_1.toJsonElement(this.ice_1);
            this.kce_1 = to('kid', this.jce_1);
            this.lce_1 = [this.kce_1, to('typ', JsonUtils_getInstance().toJsonElement('JWT'))];
            this.mce_1 = mapOf_0(this.lce_1);
            this.m9_1 = 5;
            suspendResult = this.xcd_1.b6j(this.ycd_1, this.mce_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            return suspendResult;
          case 6:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 6) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($buildAndSignCOROUTINE$0)['<set-state>'] = protoOf($buildAndSignCOROUTINE$0).t9;
  protoOf($buildAndSignCOROUTINE$0)['<get-state>'] = protoOf($buildAndSignCOROUTINE$0).u9;
  protoOf($buildAndSignCOROUTINE$0)['<set-exceptionState>'] = protoOf($buildAndSignCOROUTINE$0).v9;
  protoOf($buildAndSignCOROUTINE$0)['<get-exceptionState>'] = protoOf($buildAndSignCOROUTINE$0).w9;
  protoOf($buildAndSignCOROUTINE$0)['<set-result>'] = protoOf($buildAndSignCOROUTINE$0).x9;
  protoOf($buildAndSignCOROUTINE$0)['<get-result>'] = protoOf($buildAndSignCOROUTINE$0).y9;
  protoOf($buildAndSignCOROUTINE$0)['<set-exception>'] = protoOf($buildAndSignCOROUTINE$0).z9;
  protoOf($buildAndSignCOROUTINE$0)['<get-exception>'] = protoOf($buildAndSignCOROUTINE$0).aa;
  protoOf($buildAndSignCOROUTINE$0)['<set-finallyPath>'] = protoOf($buildAndSignCOROUTINE$0).ba;
  protoOf($buildAndSignCOROUTINE$0)['<get-finallyPath>'] = protoOf($buildAndSignCOROUTINE$0).ca;
  protoOf($buildAndSignCOROUTINE$0)['<get-context>'] = protoOf($buildAndSignCOROUTINE$0).s9;
  function $resolveDidAuthenticationCOROUTINE$1(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bcd_1 = _this__u8e3s4;
    this.ccd_1 = did;
  }
  protoOf($resolveDidAuthenticationCOROUTINE$1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = DidService_getInstance().h9u(this.ccd_1, this);
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
            throwOnFailure(this_0);
            var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
            var ARGUMENT = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var ARGUMENT_0 = ARGUMENT.ze('authentication');
            var ARGUMENT_1 = ensureNotNull(ARGUMENT_0);
            var ARGUMENT_2 = get_jsonArray(ARGUMENT_1);
            var it = first(ARGUMENT_2);
            var tmp_1;
            if (it instanceof JsonObject) {
              tmp_1 = get_jsonPrimitive(ensureNotNull(get_jsonObject(it).ze('id'))).p4s();
            } else {
              tmp_1 = get_jsonPrimitive(it).p4s();
            }

            return tmp_1;
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
  function PresentationBuilder() {
    this.did = null;
    this.holderPubKeyJwk = null;
    var tmp = this;
    var tmp_0 = System_instance.c5t();
    // Inline function 'kotlin.time.Companion.minutes' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(1, DurationUnit_MINUTES_getInstance());
    tmp.jwtNotBefore = tmp_0.b6a(tmp$ret$0);
    this.jwtIssuedAt = System_instance.c5t();
    this.presentationId = 'urn:uuid:' + UuidUtils_instance.y9a();
    this.nonce = null;
    this.audience = null;
    this.vpContext = listOf('https://www.w3.org/2018/credentials/v1');
    this.vpType = listOf('VerifiablePresentation');
    this.verifiableCredentials = ArrayList_init_$Create$();
  }
  protoOf(PresentationBuilder).nce = function (_set____db54di) {
    this.did = _set____db54di;
  };
  protoOf(PresentationBuilder).da4 = function () {
    return this.did;
  };
  protoOf(PresentationBuilder).oce = function (_set____db54di) {
    this.holderPubKeyJwk = _set____db54di;
  };
  protoOf(PresentationBuilder).pce = function () {
    return this.holderPubKeyJwk;
  };
  protoOf(PresentationBuilder).qce = function (_set____db54di) {
    this.jwtNotBefore = _set____db54di;
  };
  protoOf(PresentationBuilder).rce = function () {
    return this.jwtNotBefore;
  };
  protoOf(PresentationBuilder).sce = function (_set____db54di) {
    this.jwtIssuedAt = _set____db54di;
  };
  protoOf(PresentationBuilder).tce = function () {
    return this.jwtIssuedAt;
  };
  protoOf(PresentationBuilder).uce = function (_set____db54di) {
    this.presentationId = _set____db54di;
  };
  protoOf(PresentationBuilder).vce = function () {
    return this.presentationId;
  };
  protoOf(PresentationBuilder).wce = function (_set____db54di) {
    this.nonce = _set____db54di;
  };
  protoOf(PresentationBuilder).tc3 = function () {
    return this.nonce;
  };
  protoOf(PresentationBuilder).xce = function (_set____db54di) {
    this.audience = _set____db54di;
  };
  protoOf(PresentationBuilder).sc3 = function () {
    return this.audience;
  };
  protoOf(PresentationBuilder).yce = function (_set____db54di) {
    this.vpContext = _set____db54di;
  };
  protoOf(PresentationBuilder).zce = function () {
    return this.vpContext;
  };
  protoOf(PresentationBuilder).acf = function (_set____db54di) {
    this.vpType = _set____db54di;
  };
  protoOf(PresentationBuilder).bcf = function () {
    return this.vpType;
  };
  protoOf(PresentationBuilder).ccf = function () {
    return this.verifiableCredentials;
  };
  protoOf(PresentationBuilder).addCredential = function (credential) {
    return addAll(this.verifiableCredentials, credential);
  };
  protoOf(PresentationBuilder).addCredentials = function (credentials) {
    return this.verifiableCredentials.t(credentials);
  };
  protoOf(PresentationBuilder).buildPresentationMap = function () {
    var tmp0_elvis_lhs = this.did;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp1_safe_receiver = this.holderPubKeyJwk;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ze('kid');
      var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
      tmp = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p4s();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_0 = to('sub', tmp);
    var tmp4_safe_receiver = this.jwtNotBefore;
    var tmp_1 = to('nbf', tmp4_safe_receiver == null ? null : tmp4_safe_receiver.y5x());
    var tmp5_safe_receiver = this.jwtIssuedAt;
    var tmp_2 = to('iat', tmp5_safe_receiver == null ? null : tmp5_safe_receiver.y5x());
    var tmp_3 = to('jti', this.presentationId);
    var tmp6_elvis_lhs = this.did;
    var tmp_4;
    if (tmp6_elvis_lhs == null) {
      var tmp7_safe_receiver = this.holderPubKeyJwk;
      var tmp8_safe_receiver = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.ze('kid');
      var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : get_jsonPrimitive(tmp8_safe_receiver);
      tmp_4 = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.p4s();
    } else {
      tmp_4 = tmp6_elvis_lhs;
    }
    var tmp_5 = to('iss', tmp_4);
    var tmp10_elvis_lhs = this.nonce;
    var tmp_6 = to('nonce', tmp10_elvis_lhs == null ? '' : tmp10_elvis_lhs);
    var tmp11_elvis_lhs = this.audience;
    var tmp_7 = to('aud', tmp11_elvis_lhs == null ? '' : tmp11_elvis_lhs);
    var tmp_8 = to('@context', this.vpContext);
    var tmp_9 = to('type', this.vpType);
    var tmp_10 = to('id', this.presentationId);
    var tmp12_elvis_lhs = this.did;
    var tmp_11;
    if (tmp12_elvis_lhs == null) {
      var tmp13_safe_receiver = this.holderPubKeyJwk;
      var tmp14_safe_receiver = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.ze('kid');
      var tmp15_safe_receiver = tmp14_safe_receiver == null ? null : get_jsonPrimitive(tmp14_safe_receiver);
      tmp_11 = tmp15_safe_receiver == null ? null : tmp15_safe_receiver.p4s();
    } else {
      tmp_11 = tmp12_elvis_lhs;
    }
    return mapOf_0([tmp_0, tmp_1, tmp_2, tmp_3, tmp_5, tmp_6, tmp_7, to('vp', mapOf_0([tmp_8, tmp_9, tmp_10, to('holder', tmp_11), to('cnf', this.holderPubKeyJwk), to('verifiableCredential', this.verifiableCredentials)]))]);
  };
  protoOf(PresentationBuilder).buildPresentationJson = function () {
    return JsonUtils_getInstance().mapToJsonObject(this.buildPresentationMap());
  };
  protoOf(PresentationBuilder).buildPresentationJsonString = function () {
    var tmp0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value = this.buildPresentationJson();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(JsonElement), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    return tmp0.y1z(tmp$ret$1, value);
  };
  protoOf(PresentationBuilder).ncd = function (key, $completion) {
    var tmp = new $buildAndSignCOROUTINE$0(this, key, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(PresentationBuilder).dcf = function (key) {
    var tmp = PresentationBuilder$buildAndSignAsync$slambda_0(this, key, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  function get_dataFunctions() {
    _init_properties_DataFunctions_kt__d3j8pt();
    return dataFunctions;
  }
  var dataFunctions;
  function toIso8681WithoutSubSecondPrecision(_this__u8e3s4) {
    _init_properties_DataFunctions_kt__d3j8pt();
    return substringBefore(_this__u8e3s4.toString(), '.') + 'Z';
  }
  function dataFunctions$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return this.mcf_1.fromContext();
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda).ocf = function (it, completion) {
    var i = new dataFunctions$slambda(completion);
    i.mcf_1 = it;
    return i;
  };
  function dataFunctions$slambda_0(resultContinuation) {
    var i = new dataFunctions$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_1).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_1).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_1).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return this.xcf_1.fromContext();
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_1).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_1(completion);
    i.xcf_1 = it;
    return i;
  };
  function dataFunctions$slambda_2(resultContinuation) {
    var i = new dataFunctions$slambda_1(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_3(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_3).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_3).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_3).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return ensureNotNull(this.gcg_1.context.k2(ensureNotNull(this.gcg_1.args)));
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_3).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_3(completion);
    i.gcg_1 = it;
    return i;
  };
  function dataFunctions$slambda_4(resultContinuation) {
    var i = new dataFunctions$slambda_3(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_5(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_5).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_5).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_5).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          var context = this.pcg_1.context;
          var tmp0_safe_receiver = context.k2('display');
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : get_jsonArray(tmp0_safe_receiver);
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            throw IllegalArgumentException_init_$Create$('No display available for this credential');
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          var displayList = tmp_0;
          var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(displayList, 10));
          var _iterator__ex2g4s = displayList.p();
          while (_iterator__ex2g4s.q()) {
            var item = _iterator__ex2g4s.r();
            var display = get_jsonObject(item);
            var this_0 = LinkedHashMap_init_$Create$();
            this_0.n2('name', ensureNotNull(display.ze('name')));
            var tmp0_safe_receiver_0 = display.ze('description');
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              this_0.n2('description', tmp0_safe_receiver_0);
            }
            var tmp1_safe_receiver = display.ze('locale');
            if (tmp1_safe_receiver == null)
              null;
            else {
              this_0.n2('locale', tmp1_safe_receiver);
            }
            var tmp2_safe_receiver = display.ze('logo');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonObject(tmp2_safe_receiver);
            if (tmp3_safe_receiver == null)
              null;
            else {
              this_0.n2('logo', new JsonObject(mapOf_0([to('url', ensureNotNull(tmp3_safe_receiver.ze('url'))), to('altText', ensureNotNull(tmp3_safe_receiver.ze('alt_text')))])));
            }
            var tmp4_safe_receiver = display.ze('background_color');
            if (tmp4_safe_receiver == null)
              null;
            else {
              this_0.n2('backgroundColor', tmp4_safe_receiver);
            }
            var tmp5_safe_receiver = display.ze('text_color');
            if (tmp5_safe_receiver == null)
              null;
            else {
              this_0.n2('textColor', tmp5_safe_receiver);
            }
            var tmp6_safe_receiver = display.ze('background_image');
            var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonObject(tmp6_safe_receiver);
            if (tmp7_safe_receiver == null)
              null;
            else {
              this_0.n2('backgroundImage', new JsonObject(mapOf_0([to('url', ensureNotNull(tmp7_safe_receiver.ze('url'))), to('altText', ensureNotNull(tmp7_safe_receiver.ze('alt_text')))])));
            }
            var tmp8_safe_receiver = display.ze('customParameters');
            var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : get_jsonObject(tmp8_safe_receiver);
            var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.ze('secondary_image');
            var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : get_jsonObject(tmp10_safe_receiver);
            if (tmp11_safe_receiver == null)
              null;
            else {
              this_0.n2('secondaryImage', new JsonObject(mapOf_0([to('url', ensureNotNull(tmp11_safe_receiver.ze('url'))), to('altText', ensureNotNull(tmp11_safe_receiver.ze('alt_text')))])));
            }
            destination.n(new JsonObject(this_0.v3()));
          }
          var displayJsonArray = new JsonArray(destination);
          return displayJsonArray;
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_5).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_5(completion);
    i.pcg_1 = it;
    return i;
  };
  function dataFunctions$slambda_6(resultContinuation) {
    var i = new dataFunctions$slambda_5(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_7(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_7).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_7).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_7).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return JsonPrimitive(toIso8681WithoutSubSecondPrecision(System_instance.c5t()));
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_7).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_7(completion);
    i.ycg_1 = it;
    return i;
  };
  function dataFunctions$slambda_8(resultContinuation) {
    var i = new dataFunctions$slambda_7(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_9(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_9).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_9).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_9).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return JsonPrimitive(toIso8681WithoutSubSecondPrecision(System_instance.c5t().vo(Companion_getInstance().oo(ensureNotNull(this.hch_1.args)))));
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_9).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_9(completion);
    i.hch_1 = it;
    return i;
  };
  function dataFunctions$slambda_10(resultContinuation) {
    var i = new dataFunctions$slambda_9(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_11(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_11).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_11).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_11).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return JsonPrimitive(System_instance.c5t().toString());
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_11).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_11(completion);
    i.qch_1 = it;
    return i;
  };
  function dataFunctions$slambda_12(resultContinuation) {
    var i = new dataFunctions$slambda_11(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_13(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_13).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_13).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_13).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return JsonPrimitive(System_instance.c5t().toString());
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_13).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_13(completion);
    i.zch_1 = it;
    return i;
  };
  function dataFunctions$slambda_14(resultContinuation) {
    var i = new dataFunctions$slambda_13(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_15(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_15).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_15).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_15).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return JsonPrimitive_0(System_instance.c5t().y5x());
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_15).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_15(completion);
    i.ici_1 = it;
    return i;
  };
  function dataFunctions$slambda_16(resultContinuation) {
    var i = new dataFunctions$slambda_15(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_17(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_17).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_17).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_17).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return JsonPrimitive(System_instance.c5t().vo(Companion_getInstance().oo(ensureNotNull(this.rci_1.args))).toString());
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_17).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_17(completion);
    i.rci_1 = it;
    return i;
  };
  function dataFunctions$slambda_18(resultContinuation) {
    var i = new dataFunctions$slambda_17(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_19(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_19).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_19).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_19).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return JsonPrimitive_0(System_instance.c5t().vo(Companion_getInstance().oo(ensureNotNull(this.acj_1.args))).y5x());
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_19).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_19(completion);
    i.acj_1 = it;
    return i;
  };
  function dataFunctions$slambda_20(resultContinuation) {
    var i = new dataFunctions$slambda_19(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_21(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_21).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_21).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_21).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return JsonPrimitive(System_instance.c5t().b6a(Companion_getInstance().oo(ensureNotNull(this.jcj_1.args))).toString());
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_21).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_21(completion);
    i.jcj_1 = it;
    return i;
  };
  function dataFunctions$slambda_22(resultContinuation) {
    var i = new dataFunctions$slambda_21(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_23(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_23).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_23).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_23).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return JsonPrimitive_0(System_instance.c5t().b6a(Companion_getInstance().oo(ensureNotNull(this.scj_1.args))).y5x());
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_23).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_23(completion);
    i.scj_1 = it;
    return i;
  };
  function dataFunctions$slambda_24(resultContinuation) {
    var i = new dataFunctions$slambda_23(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_25(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_25).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_25).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_25).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          return JsonPrimitive('urn:uuid:' + UuidUtils_instance.x9a().toString());
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_25).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_25(completion);
    i.bck_1 = it;
    return i;
  };
  function dataFunctions$slambda_26(resultContinuation) {
    var i = new dataFunctions$slambda_25(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_27(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_27).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_27).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_27).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            var tmp_0 = this;
            tmp_0.lck_1 = HttpClient();
            var tmp_1 = this;
            tmp_1.mck_1 = ensureNotNull(this.kck_1.args);
            this.nck_1 = this.lck_1;
            this.ock_1 = this.mck_1;
            var tmp_2 = this;
            tmp_2.pck_1 = this.nck_1;
            this.qck_1 = this.pck_1;
            var tmp_3 = this;
            tmp_3.rck_1 = this.qck_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.ock_1);
            tmp_4.sck_1 = this_0;
            this.tck_1 = this.rck_1;
            this.uck_1 = this.sck_1;
            this.uck_1.i3i_1 = Companion_getInstance_0().b30_1;
            var tmp_5 = this;
            tmp_5.vck_1 = this.tck_1;
            var tmp_6 = this;
            tmp_6.wck_1 = this.uck_1;
            this.xck_1 = this.vck_1;
            this.yck_1 = this.wck_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.yck_1, this.xck_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.zck_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = bodyAsText(this.zck_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return JsonPrimitive(ARGUMENT);
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
  protoOf(dataFunctions$slambda_27).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_27(completion);
    i.kck_1 = it;
    return i;
  };
  function dataFunctions$slambda_28(resultContinuation) {
    var i = new dataFunctions$slambda_27(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_29(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_29).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_29).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_29).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.jcl_1 = Default_getInstance();
            var tmp_0 = this;
            tmp_0.kcl_1 = HttpClient();
            var tmp_1 = this;
            tmp_1.lcl_1 = ensureNotNull(this.icl_1.args);
            this.mcl_1 = this.kcl_1;
            this.ncl_1 = this.lcl_1;
            var tmp_2 = this;
            tmp_2.ocl_1 = this.mcl_1;
            this.pcl_1 = this.ocl_1;
            var tmp_3 = this;
            tmp_3.qcl_1 = this.pcl_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.ncl_1);
            tmp_4.rcl_1 = this_0;
            this.scl_1 = this.qcl_1;
            this.tcl_1 = this.rcl_1;
            this.tcl_1.i3i_1 = Companion_getInstance_0().b30_1;
            var tmp_5 = this;
            tmp_5.ucl_1 = this.scl_1;
            var tmp_6 = this;
            tmp_6.vcl_1 = this.tcl_1;
            this.wcl_1 = this.ucl_1;
            this.xcl_1 = this.vcl_1;
            this.m9_1 = 1;
            suspendResult = (new HttpStatement(this.xcl_1, this.wcl_1)).q4j(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.ycl_1 = suspendResult;
            this.m9_1 = 2;
            suspendResult = bodyAsText(this.ycl_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return this.jcl_1.g4q(ARGUMENT);
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
  protoOf(dataFunctions$slambda_29).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_29(completion);
    i.icl_1 = it;
    return i;
  };
  function dataFunctions$slambda_30(resultContinuation) {
    var i = new dataFunctions$slambda_29(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_31(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_31).ncf = function (it, $completion) {
    var tmp = this.ocf(it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(dataFunctions$slambda_31).ua = function (p1, $completion) {
    return this.ncf(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_31).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        if (tmp === 0) {
          this.n9_1 = 1;
          var tmp0_safe_receiver = this.hcm_1.history;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.k2(ensureNotNull(this.hcm_1.args));
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            throw IllegalArgumentException_init_$Create$('No such function in history or no history: ' + this.hcm_1.args);
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          return tmp_0;
        } else if (tmp === 1) {
          throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_31).ocf = function (it, completion) {
    var i = new dataFunctions$slambda_31(completion);
    i.hcm_1 = it;
    return i;
  };
  function dataFunctions$slambda_32(resultContinuation) {
    var i = new dataFunctions$slambda_31(resultContinuation);
    var l = function (it, $completion) {
      return i.ncf(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var properties_initialized_DataFunctions_kt_ug4fdt;
  function _init_properties_DataFunctions_kt__d3j8pt() {
    if (!properties_initialized_DataFunctions_kt_ug4fdt) {
      properties_initialized_DataFunctions_kt_ug4fdt = true;
      var tmp = to('subjectDid', dataFunctions$slambda_0(null));
      var tmp_0 = to('issuerDid', dataFunctions$slambda_2(null));
      var tmp_1 = to('context', dataFunctions$slambda_4(null));
      var tmp_2 = to('display', dataFunctions$slambda_6(null));
      var tmp_3 = to('timestamp-ebsi', dataFunctions$slambda_8(null));
      var tmp_4 = to('timestamp-ebsi-in', dataFunctions$slambda_10(null));
      var tmp_5 = to('timestamp', dataFunctions$slambda_12(null));
      var tmp_6 = to('timestamp', dataFunctions$slambda_14(null));
      var tmp_7 = to('timestamp-seconds', dataFunctions$slambda_16(null));
      var tmp_8 = to('timestamp-in', dataFunctions$slambda_18(null));
      var tmp_9 = to('timestamp-in-seconds', dataFunctions$slambda_20(null));
      var tmp_10 = to('timestamp-before', dataFunctions$slambda_22(null));
      var tmp_11 = to('timestamp-before-seconds', dataFunctions$slambda_24(null));
      var tmp_12 = to('uuid', dataFunctions$slambda_26(null));
      var tmp_13 = to('webhook', dataFunctions$slambda_28(null));
      var tmp_14 = to('webhook-json', dataFunctions$slambda_30(null));
      dataFunctions = mapOf_0([tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, to('last', dataFunctions$slambda_32(null))]);
    }
  }
  function IssuanceInformation(w3cVc, jwtOptions) {
    this.w3cVc = w3cVc;
    this.jwtOptions = jwtOptions;
  }
  protoOf(IssuanceInformation).icm = function () {
    return this.w3cVc;
  };
  protoOf(IssuanceInformation).jcm = function () {
    return this.jwtOptions;
  };
  protoOf(IssuanceInformation).cc = function () {
    return this.w3cVc;
  };
  protoOf(IssuanceInformation).dc = function () {
    return this.jwtOptions;
  };
  protoOf(IssuanceInformation).kcm = function (w3cVc, jwtOptions) {
    return new IssuanceInformation(w3cVc, jwtOptions);
  };
  protoOf(IssuanceInformation).copy = function (w3cVc, jwtOptions, $super) {
    w3cVc = w3cVc === VOID ? this.w3cVc : w3cVc;
    jwtOptions = jwtOptions === VOID ? this.jwtOptions : jwtOptions;
    return $super === VOID ? this.kcm(w3cVc, jwtOptions) : $super.kcm.call(this, w3cVc, jwtOptions);
  };
  protoOf(IssuanceInformation).toString = function () {
    return 'IssuanceInformation(w3cVc=' + this.w3cVc.toString() + ', jwtOptions=' + toString(this.jwtOptions) + ')';
  };
  protoOf(IssuanceInformation).hashCode = function () {
    var result = this.w3cVc.hashCode();
    result = imul(result, 31) + hashCode(this.jwtOptions) | 0;
    return result;
  };
  protoOf(IssuanceInformation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IssuanceInformation))
      return false;
    var tmp0_other_with_cast = other instanceof IssuanceInformation ? other : THROW_CCE();
    if (!this.w3cVc.equals(tmp0_other_with_cast.w3cVc))
      return false;
    if (!equals(this.jwtOptions, tmp0_other_with_cast.jwtOptions))
      return false;
    return true;
  };
  function mergingToVc$completeJwtAttributes(jwtRes, attribute, completer) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if (!(isInterface(jwtRes, KtMap) ? jwtRes : THROW_CCE()).i2(attribute)) {
      var completed = completer();
      if (!(completed == null)) {
        // Inline function 'kotlin.collections.set' call
        jwtRes.n2(attribute, completed);
      }
    }
  }
  function Issuer$mergingToVc$lambda($vc) {
    return function () {
      return $vc.ze('id');
    };
  }
  function Issuer$mergingToVc$lambda_0($vc) {
    return function () {
      var tmp0_safe_receiver = $vc.ze(V1_NotAfter_getInstance().jcb());
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_1().w68(get_jsonPrimitive(tmp0_safe_receiver).p4s());
      }
      var tmp1_safe_receiver = tmp;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y5x();
      var tmp_0;
      if (tmp2_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = JsonPrimitive_0(tmp2_safe_receiver);
      }
      var tmp3_elvis_lhs = tmp_0;
      var tmp_1;
      if (tmp3_elvis_lhs == null) {
        var tmp4_safe_receiver = $vc.ze(V2_NotAfter_getInstance().jcb());
        var tmp_2;
        if (tmp4_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_2 = Companion_getInstance_1().w68(get_jsonPrimitive(tmp4_safe_receiver).p4s());
        }
        var tmp5_safe_receiver = tmp_2;
        var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.y5x();
        var tmp_3;
        if (tmp6_safe_receiver == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_3 = JsonPrimitive_0(tmp6_safe_receiver);
        }
        tmp_1 = tmp_3;
      } else {
        tmp_1 = tmp3_elvis_lhs;
      }
      return tmp_1;
    };
  }
  function Issuer$mergingToVc$lambda_1($vc) {
    return function () {
      var tmp0_safe_receiver = $vc.ze('issuanceDate');
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_1().w68(get_jsonPrimitive(tmp0_safe_receiver).p4s());
      }
      var tmp1_safe_receiver = tmp;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y5x();
      var tmp_0;
      if (tmp2_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = JsonPrimitive_0(tmp2_safe_receiver);
      }
      return tmp_0;
    };
  }
  function Issuer$mergingToVc$lambda_2($vc) {
    return function () {
      var tmp0_safe_receiver = $vc.ze('issuanceDate');
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_1().w68(get_jsonPrimitive(tmp0_safe_receiver).p4s());
      }
      var tmp1_safe_receiver = tmp;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y5x();
      var tmp_0;
      if (tmp2_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = JsonPrimitive_0(tmp2_safe_receiver);
      }
      return tmp_0;
    };
  }
  function Issuer$mergingJwtIssueAsync$slambda($this_mergingJwtIssueAsync, $issuerKey, $issuerId, $subjectDid, $mappings, $additionalJwtHeader, $additionalJwtOptions, $display, $completeJwtWithDefaultCredentialData, resultContinuation) {
    this.ucm_1 = $this_mergingJwtIssueAsync;
    this.vcm_1 = $issuerKey;
    this.wcm_1 = $issuerId;
    this.xcm_1 = $subjectDid;
    this.ycm_1 = $mappings;
    this.zcm_1 = $additionalJwtHeader;
    this.acn_1 = $additionalJwtOptions;
    this.bcn_1 = $display;
    this.ccn_1 = $completeJwtWithDefaultCredentialData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Issuer$mergingJwtIssueAsync$slambda).a6j = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Issuer$mergingJwtIssueAsync$slambda).zb = function ($completion) {
    return this.a6j($completion);
  };
  protoOf(Issuer$mergingJwtIssueAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = Issuer_instance.dcn(this.ucm_1, this.vcm_1, this.wcm_1, this.xcm_1, this.ycm_1, this.zcm_1, this.acn_1, this.bcn_1, this.ccn_1, this);
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
  protoOf(Issuer$mergingJwtIssueAsync$slambda).ia = function (completion) {
    return new Issuer$mergingJwtIssueAsync$slambda(this.ucm_1, this.vcm_1, this.wcm_1, this.xcm_1, this.ycm_1, this.zcm_1, this.acn_1, this.bcn_1, this.ccn_1, completion);
  };
  function Issuer$mergingJwtIssueAsync$slambda_0($this_mergingJwtIssueAsync, $issuerKey, $issuerId, $subjectDid, $mappings, $additionalJwtHeader, $additionalJwtOptions, $display, $completeJwtWithDefaultCredentialData, resultContinuation) {
    var i = new Issuer$mergingJwtIssueAsync$slambda($this_mergingJwtIssueAsync, $issuerKey, $issuerId, $subjectDid, $mappings, $additionalJwtHeader, $additionalJwtOptions, $display, $completeJwtWithDefaultCredentialData, resultContinuation);
    var l = function ($completion) {
      return i.a6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Issuer$mergingToVcAsync$slambda($this_mergingToVcAsync, $issuerId, $subjectDid, $mappings, $display, $completeJwtWithDefaultCredentialData, resultContinuation) {
    this.mcn_1 = $this_mergingToVcAsync;
    this.ncn_1 = $issuerId;
    this.ocn_1 = $subjectDid;
    this.pcn_1 = $mappings;
    this.qcn_1 = $display;
    this.rcn_1 = $completeJwtWithDefaultCredentialData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Issuer$mergingToVcAsync$slambda).scn = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Issuer$mergingToVcAsync$slambda).zb = function ($completion) {
    return this.scn($completion);
  };
  protoOf(Issuer$mergingToVcAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = Issuer_instance.tcn(this.mcn_1, this.ncn_1, this.ocn_1, this.pcn_1, this.qcn_1, this.rcn_1, this);
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
  protoOf(Issuer$mergingToVcAsync$slambda).ia = function (completion) {
    return new Issuer$mergingToVcAsync$slambda(this.mcn_1, this.ncn_1, this.ocn_1, this.pcn_1, this.qcn_1, this.rcn_1, completion);
  };
  function Issuer$mergingToVcAsync$slambda_0($this_mergingToVcAsync, $issuerId, $subjectDid, $mappings, $display, $completeJwtWithDefaultCredentialData, resultContinuation) {
    var i = new Issuer$mergingToVcAsync$slambda($this_mergingToVcAsync, $issuerId, $subjectDid, $mappings, $display, $completeJwtWithDefaultCredentialData, resultContinuation);
    var l = function ($completion) {
      return i.scn($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Issuer$getKidHeaderAsync$slambda($issuerKey, $issuerDid, resultContinuation) {
    this.cco_1 = $issuerKey;
    this.dco_1 = $issuerDid;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Issuer$getKidHeaderAsync$slambda).a6j = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Issuer$getKidHeaderAsync$slambda).zb = function ($completion) {
    return this.a6j($completion);
  };
  protoOf(Issuer$getKidHeaderAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = Issuer_instance.eco(this.cco_1, this.dco_1, this);
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
  protoOf(Issuer$getKidHeaderAsync$slambda).ia = function (completion) {
    return new Issuer$getKidHeaderAsync$slambda(this.cco_1, this.dco_1, completion);
  };
  function Issuer$getKidHeaderAsync$slambda_0($issuerKey, $issuerDid, resultContinuation) {
    var i = new Issuer$getKidHeaderAsync$slambda($issuerKey, $issuerDid, resultContinuation);
    var l = function ($completion) {
      return i.a6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Issuer$mergingSdJwtIssueAsync$slambda($this_mergingSdJwtIssueAsync, $issuerKey, $issuerId, $subjectDid, $display, $mappings, $type, $additionalJwtHeaders, $additionalJwtOptions, $completeJwtWithDefaultCredentialData, $disclosureMap, resultContinuation) {
    this.nco_1 = $this_mergingSdJwtIssueAsync;
    this.oco_1 = $issuerKey;
    this.pco_1 = $issuerId;
    this.qco_1 = $subjectDid;
    this.rco_1 = $display;
    this.sco_1 = $mappings;
    this.tco_1 = $type;
    this.uco_1 = $additionalJwtHeaders;
    this.vco_1 = $additionalJwtOptions;
    this.wco_1 = $completeJwtWithDefaultCredentialData;
    this.xco_1 = $disclosureMap;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Issuer$mergingSdJwtIssueAsync$slambda).a6j = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Issuer$mergingSdJwtIssueAsync$slambda).zb = function ($completion) {
    return this.a6j($completion);
  };
  protoOf(Issuer$mergingSdJwtIssueAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = Issuer_instance.yco(this.nco_1, this.oco_1, this.pco_1, this.qco_1, this.rco_1, this.sco_1, this.tco_1, this.uco_1, this.vco_1, this.wco_1, this.xco_1, this);
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
  protoOf(Issuer$mergingSdJwtIssueAsync$slambda).ia = function (completion) {
    return new Issuer$mergingSdJwtIssueAsync$slambda(this.nco_1, this.oco_1, this.pco_1, this.qco_1, this.rco_1, this.sco_1, this.tco_1, this.uco_1, this.vco_1, this.wco_1, this.xco_1, completion);
  };
  function Issuer$mergingSdJwtIssueAsync$slambda_0($this_mergingSdJwtIssueAsync, $issuerKey, $issuerId, $subjectDid, $display, $mappings, $type, $additionalJwtHeaders, $additionalJwtOptions, $completeJwtWithDefaultCredentialData, $disclosureMap, resultContinuation) {
    var i = new Issuer$mergingSdJwtIssueAsync$slambda($this_mergingSdJwtIssueAsync, $issuerKey, $issuerId, $subjectDid, $display, $mappings, $type, $additionalJwtHeaders, $additionalJwtOptions, $completeJwtWithDefaultCredentialData, $disclosureMap, resultContinuation);
    var l = function ($completion) {
      return i.a6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Issuer$baseIssueAsync$slambda($this_baseIssueAsync, $key, $issuerId, $subject, $dataOverwrites, $dataUpdates, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation) {
    this.hcp_1 = $this_baseIssueAsync;
    this.icp_1 = $key;
    this.jcp_1 = $issuerId;
    this.kcp_1 = $subject;
    this.lcp_1 = $dataOverwrites;
    this.mcp_1 = $dataUpdates;
    this.ncp_1 = $additionalJwtHeaders;
    this.ocp_1 = $additionalJwtOptions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Issuer$baseIssueAsync$slambda).a6j = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Issuer$baseIssueAsync$slambda).zb = function ($completion) {
    return this.a6j($completion);
  };
  protoOf(Issuer$baseIssueAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = Issuer_instance.pcp(this.hcp_1, this.icp_1, this.jcp_1, this.kcp_1, this.lcp_1, this.mcp_1, this.ncp_1, this.ocp_1, this);
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
  protoOf(Issuer$baseIssueAsync$slambda).ia = function (completion) {
    return new Issuer$baseIssueAsync$slambda(this.hcp_1, this.icp_1, this.jcp_1, this.kcp_1, this.lcp_1, this.mcp_1, this.ncp_1, this.ocp_1, completion);
  };
  function Issuer$baseIssueAsync$slambda_0($this_baseIssueAsync, $key, $issuerId, $subject, $dataOverwrites, $dataUpdates, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation) {
    var i = new Issuer$baseIssueAsync$slambda($this_baseIssueAsync, $key, $issuerId, $subject, $dataOverwrites, $dataUpdates, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation);
    var l = function ($completion) {
      return i.a6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $mergingJwtIssueCOROUTINE$2(_this__u8e3s4, _this__u8e3s4_0, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ycp_1 = _this__u8e3s4;
    this.zcp_1 = _this__u8e3s4_0;
    this.acq_1 = issuerKey;
    this.bcq_1 = issuerId;
    this.ccq_1 = subjectDid;
    this.dcq_1 = mappings;
    this.ecq_1 = additionalJwtHeader;
    this.fcq_1 = additionalJwtOptions;
    this.gcq_1 = display;
    this.hcq_1 = completeJwtWithDefaultCredentialData;
  }
  protoOf($mergingJwtIssueCOROUTINE$2).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.m9_1 = 1;
            suspendResult = this.ycp_1.tcn(this.zcp_1, this.bcq_1, this.ccq_1, this.dcq_1, this.gcq_1, this.hcq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.icq_1 = suspendResult;
            this.jcq_1 = this.icq_1;
            var tmp_0 = this;
            tmp_0.kcq_1 = this.jcq_1;
            this.lcq_1 = this.kcq_1;
            this.mcq_1 = DidUtils_getInstance().isDidUrl(this.bcq_1) ? this.bcq_1 : null;
            this.ncq_1 = this.lcq_1.w3cVc;
            this.m9_1 = 2;
            suspendResult = Issuer_instance.eco(this.acq_1, this.mcq_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ocq_1 = suspendResult;
            this.m9_1 = 3;
            var this_0 = toMutableMap(this.ecq_1);
            this_0.n2('typ', JsonUtils_getInstance().toJsonElement('JWT'));
            var this_1 = toMutableMap(this.fcq_1);
            this_1.p2(this.lcq_1.jwtOptions);
            suspendResult = this.ncq_1.pcq(this.acq_1, this.bcq_1, this.ocq_1, this.ccq_1, this_0, this_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return suspendResult;
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
  protoOf($mergingJwtIssueCOROUTINE$2)['<set-state>'] = protoOf($mergingJwtIssueCOROUTINE$2).t9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-state>'] = protoOf($mergingJwtIssueCOROUTINE$2).u9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<set-exceptionState>'] = protoOf($mergingJwtIssueCOROUTINE$2).v9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-exceptionState>'] = protoOf($mergingJwtIssueCOROUTINE$2).w9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<set-result>'] = protoOf($mergingJwtIssueCOROUTINE$2).x9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-result>'] = protoOf($mergingJwtIssueCOROUTINE$2).y9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<set-exception>'] = protoOf($mergingJwtIssueCOROUTINE$2).z9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-exception>'] = protoOf($mergingJwtIssueCOROUTINE$2).aa;
  protoOf($mergingJwtIssueCOROUTINE$2)['<set-finallyPath>'] = protoOf($mergingJwtIssueCOROUTINE$2).ba;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-finallyPath>'] = protoOf($mergingJwtIssueCOROUTINE$2).ca;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-context>'] = protoOf($mergingJwtIssueCOROUTINE$2).s9;
  function $mergingSdJwtIssueCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ycq_1 = _this__u8e3s4;
    this.zcq_1 = _this__u8e3s4_0;
    this.acr_1 = issuerKey;
    this.bcr_1 = issuerId;
    this.ccr_1 = subjectDid;
    this.dcr_1 = display;
    this.ecr_1 = mappings;
    this.fcr_1 = type;
    this.gcr_1 = additionalJwtHeaders;
    this.hcr_1 = additionalJwtOptions;
    this.icr_1 = completeJwtWithDefaultCredentialData;
    this.jcr_1 = disclosureMap;
  }
  protoOf($mergingSdJwtIssueCOROUTINE$3).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.m9_1 = 1;
            suspendResult = this.ycq_1.tcn(this.zcq_1, this.bcr_1, this.ccr_1, this.ecr_1, this.dcr_1, this.icr_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.kcr_1 = suspendResult;
            this.lcr_1 = this.kcr_1;
            var tmp_0 = this;
            tmp_0.mcr_1 = this.lcr_1;
            this.ncr_1 = this.mcr_1;
            this.ocr_1 = DidUtils_getInstance().isDidUrl(this.bcr_1) ? this.bcr_1 : null;
            this.pcr_1 = this.ncr_1.w3cVc;
            this.m9_1 = 2;
            suspendResult = Issuer_instance.eco(this.acr_1, this.ocr_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.qcr_1 = suspendResult;
            this.m9_1 = 3;
            var this_0 = toMutableMap(this.gcr_1);
            this_0.n2('typ', JsonUtils_getInstance().toJsonElement(this.fcr_1));
            var this_1 = toMutableMap(this.hcr_1);
            this_1.p2(this.ncr_1.jwtOptions);
            suspendResult = this.pcr_1.rcr(this.acr_1, this.bcr_1, this.qcr_1, this.ccr_1, this.jcr_1, this_0, this_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return suspendResult;
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
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<set-state>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).t9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-state>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).u9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<set-exceptionState>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).v9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-exceptionState>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).w9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<set-result>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).x9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-result>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).y9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<set-exception>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).z9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-exception>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).aa;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<set-finallyPath>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).ba;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-finallyPath>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).ca;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-context>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).s9;
  function $mergingToVcCOROUTINE$4(_this__u8e3s4, _this__u8e3s4_0, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.acs_1 = _this__u8e3s4;
    this.bcs_1 = _this__u8e3s4_0;
    this.ccs_1 = issuerId;
    this.dcs_1 = subjectDid;
    this.ecs_1 = mappings;
    this.fcs_1 = display;
    this.gcs_1 = completeJwtWithDefaultCredentialData;
  }
  protoOf($mergingToVcCOROUTINE$4).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            var tmp_0 = this;
            var this_0 = mapOf_0([to('issuerId', this.ccs_1), to('issuerDid', DidUtils_getInstance().isDidUrl(this.ccs_1) ? this.ccs_1 : null), to('subjectDid', this.dcs_1), to('display', this.fcs_1)]);
            var result = LinkedHashMap_init_$Create$();
            var _iterator__ex2g4s = this_0.x().p();
            while (_iterator__ex2g4s.q()) {
              var entry = _iterator__ex2g4s.r();
              var value = entry.z();
              var tmp_1;
              if (value instanceof JsonElement) {
                var tmp_2;
                var tmp_3;
                if (!(value instanceof JsonNull)) {
                  var tmp_4;
                  if (!(value instanceof JsonObject)) {
                    tmp_4 = true;
                  } else {
                    tmp_4 = !get_jsonObject(value).h();
                  }
                  tmp_3 = tmp_4;
                } else {
                  tmp_3 = false;
                }
                if (tmp_3) {
                  var tmp_5;
                  if (!(value instanceof JsonArray)) {
                    tmp_5 = true;
                  } else {
                    tmp_5 = !get_jsonArray(value).h();
                  }
                  tmp_2 = tmp_5;
                } else {
                  tmp_2 = false;
                }
                tmp_1 = tmp_2;
              } else {
                var this_1 = toString_0(value);
                tmp_1 = charSequenceLength(this_1) > 0;
              }
              if (tmp_1) {
                result.n2(entry.y(), entry.z());
              }
            }

            var destination = LinkedHashMap_init_$Create$_0(mapCapacity(result.s()));
            var _iterator__ex2g4s_0 = result.x().p();
            while (_iterator__ex2g4s_0.q()) {
              var element = _iterator__ex2g4s_0.r();
              var tmp_6 = element.y();
              var value_0 = element.z();
              var tmp_7;
              if (value_0 instanceof JsonElement) {
                tmp_7 = value_0;
              } else {
                tmp_7 = JsonPrimitive(toString_0(value_0));
              }
              destination.n2(tmp_6, tmp_7);
            }

            tmp_0.hcs_1 = destination;
            this.m9_1 = 1;
            suspendResult = CredentialDataMergeUtils_getInstance().jcs(this.bcs_1, this.ecs_1, this.hcs_1, get_dataFunctions(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var mapped = suspendResult;
            var vc = mapped.vc;
            var this_2 = mapped.results;
            var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(this_2.s()));
            var _iterator__ex2g4s_1 = this_2.x().p();
            while (_iterator__ex2g4s_1.q()) {
              var element_0 = _iterator__ex2g4s_1.r();
              var tmp_8 = removePrefix(element_0.y(), 'jwt:');
              destination_0.n2(tmp_8, element_0.z());
            }

            var jwtRes = toMutableMap(destination_0);
            if (this.gcs_1) {
              mergingToVc$completeJwtAttributes(jwtRes, 'jti', Issuer$mergingToVc$lambda(vc));
              var tmp_9 = JwtClaims_NotAfter_getInstance().jcb();
              mergingToVc$completeJwtAttributes(jwtRes, tmp_9, Issuer$mergingToVc$lambda_0(vc));
              mergingToVc$completeJwtAttributes(jwtRes, 'iat', Issuer$mergingToVc$lambda_1(vc));
              mergingToVc$completeJwtAttributes(jwtRes, 'nbf', Issuer$mergingToVc$lambda_2(vc));
            }

            return new IssuanceInformation(vc, jwtRes);
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
  protoOf($mergingToVcCOROUTINE$4)['<set-state>'] = protoOf($mergingToVcCOROUTINE$4).t9;
  protoOf($mergingToVcCOROUTINE$4)['<get-state>'] = protoOf($mergingToVcCOROUTINE$4).u9;
  protoOf($mergingToVcCOROUTINE$4)['<set-exceptionState>'] = protoOf($mergingToVcCOROUTINE$4).v9;
  protoOf($mergingToVcCOROUTINE$4)['<get-exceptionState>'] = protoOf($mergingToVcCOROUTINE$4).w9;
  protoOf($mergingToVcCOROUTINE$4)['<set-result>'] = protoOf($mergingToVcCOROUTINE$4).x9;
  protoOf($mergingToVcCOROUTINE$4)['<get-result>'] = protoOf($mergingToVcCOROUTINE$4).y9;
  protoOf($mergingToVcCOROUTINE$4)['<set-exception>'] = protoOf($mergingToVcCOROUTINE$4).z9;
  protoOf($mergingToVcCOROUTINE$4)['<get-exception>'] = protoOf($mergingToVcCOROUTINE$4).aa;
  protoOf($mergingToVcCOROUTINE$4)['<set-finallyPath>'] = protoOf($mergingToVcCOROUTINE$4).ba;
  protoOf($mergingToVcCOROUTINE$4)['<get-finallyPath>'] = protoOf($mergingToVcCOROUTINE$4).ca;
  protoOf($mergingToVcCOROUTINE$4)['<get-context>'] = protoOf($mergingToVcCOROUTINE$4).s9;
  function $getKidHeaderCOROUTINE$5(_this__u8e3s4, issuerKey, issuerDid, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.scs_1 = _this__u8e3s4;
    this.tcs_1 = issuerKey;
    this.ucs_1 = issuerDid;
  }
  protoOf($getKidHeaderCOROUTINE$5).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var this_0 = this.ucs_1;
            if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
              if (startsWith(this.ucs_1, 'did:key')) {
                this.wcs_1 = this.ucs_1 + '#' + removePrefix(this.ucs_1, 'did:key:');
                this.m9_1 = 3;
                continue $sm;
              } else {
                this.xcs_1 = this.ucs_1 + '#';
                this.m9_1 = 2;
                suspendResult = this.tcs_1.x6j(this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.m9_1 = 1;
              suspendResult = this.tcs_1.x6j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.vcs_1 = suspendResult;
            this.m9_1 = 4;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.wcs_1 = this.xcs_1 + ARGUMENT;
            this.m9_1 = 3;
            continue $sm;
          case 3:
            this.vcs_1 = this.wcs_1;
            this.m9_1 = 4;
            continue $sm;
          case 4:
            return this.vcs_1;
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
  protoOf($getKidHeaderCOROUTINE$5)['<set-state>'] = protoOf($getKidHeaderCOROUTINE$5).t9;
  protoOf($getKidHeaderCOROUTINE$5)['<get-state>'] = protoOf($getKidHeaderCOROUTINE$5).u9;
  protoOf($getKidHeaderCOROUTINE$5)['<set-exceptionState>'] = protoOf($getKidHeaderCOROUTINE$5).v9;
  protoOf($getKidHeaderCOROUTINE$5)['<get-exceptionState>'] = protoOf($getKidHeaderCOROUTINE$5).w9;
  protoOf($getKidHeaderCOROUTINE$5)['<set-result>'] = protoOf($getKidHeaderCOROUTINE$5).x9;
  protoOf($getKidHeaderCOROUTINE$5)['<get-result>'] = protoOf($getKidHeaderCOROUTINE$5).y9;
  protoOf($getKidHeaderCOROUTINE$5)['<set-exception>'] = protoOf($getKidHeaderCOROUTINE$5).z9;
  protoOf($getKidHeaderCOROUTINE$5)['<get-exception>'] = protoOf($getKidHeaderCOROUTINE$5).aa;
  protoOf($getKidHeaderCOROUTINE$5)['<set-finallyPath>'] = protoOf($getKidHeaderCOROUTINE$5).ba;
  protoOf($getKidHeaderCOROUTINE$5)['<get-finallyPath>'] = protoOf($getKidHeaderCOROUTINE$5).ca;
  protoOf($getKidHeaderCOROUTINE$5)['<get-context>'] = protoOf($getKidHeaderCOROUTINE$5).s9;
  function Issuer() {
  }
  protoOf(Issuer).pcp = function (_this__u8e3s4, key, issuerId, subject, dataOverwrites, dataUpdates, additionalJwtHeaders, additionalJwtOptions, $completion) {
    var overwritten = W3CVcUtils_instance.overwrite(_this__u8e3s4, dataOverwrites);
    var updated = overwritten;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = dataUpdates.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var k = element.y();
      // Inline function 'kotlin.collections.component2' call
      var v = element.z();
      updated = W3CVcUtils_instance.update(updated, k, v);
    }
    return _this__u8e3s4.signJws$default(key, issuerId, VOID, subject, additionalJwtHeaders, additionalJwtOptions, $completion);
  };
  protoOf(Issuer).dcn = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $completion) {
    var tmp = new $mergingJwtIssueCOROUTINE$2(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Issuer).mergingJwtIssue$default = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $completion, $super) {
    display = display === VOID ? new JsonArray(emptyList()) : display;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.dcn(_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $completion) : $super.dcn.call(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $completion);
  };
  protoOf(Issuer).yco = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $completion) {
    var tmp = new $mergingSdJwtIssueCOROUTINE$3(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Issuer).mergingSdJwtIssue$default = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $completion, $super) {
    display = display === VOID ? new JsonArray(emptyList()) : display;
    type = type === VOID ? 'JWT' : type;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.yco(_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $completion) : $super.yco.call(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $completion);
  };
  protoOf(Issuer).tcn = function (_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $completion) {
    var tmp = new $mergingToVcCOROUTINE$4(this, _this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Issuer).mergingToVc$default = function (_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $completion, $super) {
    display = display === VOID ? null : display;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.tcn(_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $completion) : $super.tcn.call(this, _this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $completion);
  };
  protoOf(Issuer).eco = function (issuerKey, issuerDid, $completion) {
    var tmp = new $getKidHeaderCOROUTINE$5(this, issuerKey, issuerDid, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(Issuer).getKidHeader$default = function (issuerKey, issuerDid, $completion, $super) {
    issuerDid = issuerDid === VOID ? null : issuerDid;
    return $super === VOID ? this.eco(issuerKey, issuerDid, $completion) : $super.eco.call(this, issuerKey, issuerDid, $completion);
  };
  protoOf(Issuer).ycs = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData) {
    var tmp = Issuer$mergingJwtIssueAsync$slambda_0(_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Issuer).mergingJwtIssueAsync$default = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $super) {
    display = display === VOID ? new JsonArray(emptyList()) : display;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.ycs(_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData) : $super.ycs.call(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData);
  };
  protoOf(Issuer).zcs = function (_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData) {
    var tmp = Issuer$mergingToVcAsync$slambda_0(_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Issuer).mergingToVcAsync$default = function (_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $super) {
    display = display === VOID ? null : display;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.zcs(_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData) : $super.zcs.call(this, _this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData);
  };
  protoOf(Issuer).act = function (issuerKey, issuerDid) {
    var tmp = Issuer$getKidHeaderAsync$slambda_0(issuerKey, issuerDid, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Issuer).getKidHeaderAsync$default = function (issuerKey, issuerDid, $super) {
    issuerDid = issuerDid === VOID ? null : issuerDid;
    return $super === VOID ? this.act(issuerKey, issuerDid) : $super.act.call(this, issuerKey, issuerDid);
  };
  protoOf(Issuer).bct = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap) {
    var tmp = Issuer$mergingSdJwtIssueAsync$slambda_0(_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Issuer).mergingSdJwtIssueAsync$default = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $super) {
    display = display === VOID ? new JsonArray(emptyList()) : display;
    type = type === VOID ? 'JWT' : type;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.bct(_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap) : $super.bct.call(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap);
  };
  protoOf(Issuer).cct = function (_this__u8e3s4, key, issuerId, subject, dataOverwrites, dataUpdates, additionalJwtHeaders, additionalJwtOptions) {
    var tmp = Issuer$baseIssueAsync$slambda_0(_this__u8e3s4, key, issuerId, subject, dataOverwrites, dataUpdates, additionalJwtHeaders, additionalJwtOptions, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var Issuer_instance;
  function Issuer_getInstance() {
    return Issuer_instance;
  }
  function get_log() {
    _init_properties_JwsSignatureScheme_kt__gfqf2h();
    return log;
  }
  var log;
  function JwsHeader() {
    this.KEY_ID = 'kid';
  }
  protoOf(JwsHeader).dct = function () {
    return this.KEY_ID;
  };
  var JwsHeader_instance;
  function JwsHeader_getInstance() {
    return JwsHeader_instance;
  }
  function JwsOption() {
    this.SUBJECT = 'sub';
    this.ISSUER = 'iss';
    this.EXPIRATION = 'exp';
    this.NOT_BEFORE = 'nbf';
    this.VC_ID = 'jti';
    this.VC = 'vc';
  }
  protoOf(JwsOption).ect = function () {
    return this.SUBJECT;
  };
  protoOf(JwsOption).fct = function () {
    return this.ISSUER;
  };
  protoOf(JwsOption).gct = function () {
    return this.EXPIRATION;
  };
  protoOf(JwsOption).hct = function () {
    return this.NOT_BEFORE;
  };
  protoOf(JwsOption).ict = function () {
    return this.VC_ID;
  };
  protoOf(JwsOption).jct = function () {
    return this.VC;
  };
  var JwsOption_instance;
  function JwsOption_getInstance() {
    return JwsOption_instance;
  }
  function KeyInfo(keyId, key) {
    this.keyId = keyId;
    this.key = key;
  }
  protoOf(KeyInfo).gat = function () {
    return this.keyId;
  };
  protoOf(KeyInfo).y = function () {
    return this.key;
  };
  protoOf(KeyInfo).cc = function () {
    return this.keyId;
  };
  protoOf(KeyInfo).dc = function () {
    return this.key;
  };
  protoOf(KeyInfo).kct = function (keyId, key) {
    return new KeyInfo(keyId, key);
  };
  protoOf(KeyInfo).copy = function (keyId, key, $super) {
    keyId = keyId === VOID ? this.keyId : keyId;
    key = key === VOID ? this.key : key;
    return $super === VOID ? this.kct(keyId, key) : $super.kct.call(this, keyId, key);
  };
  protoOf(KeyInfo).toString = function () {
    return 'KeyInfo(keyId=' + this.keyId + ', key=' + this.key.toString() + ')';
  };
  protoOf(KeyInfo).hashCode = function () {
    var result = getStringHashCode(this.keyId);
    result = imul(result, 31) + hashCode(this.key) | 0;
    return result;
  };
  protoOf(KeyInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeyInfo))
      return false;
    var tmp0_other_with_cast = other instanceof KeyInfo ? other : THROW_CCE();
    if (!(this.keyId === tmp0_other_with_cast.keyId))
      return false;
    if (!equals(this.key, tmp0_other_with_cast.key))
      return false;
    return true;
  };
  function KeysInfo(keyId, keys) {
    this.keyId = keyId;
    this.keys = keys;
  }
  protoOf(KeysInfo).gat = function () {
    return this.keyId;
  };
  protoOf(KeysInfo).l2 = function () {
    return this.keys;
  };
  protoOf(KeysInfo).cc = function () {
    return this.keyId;
  };
  protoOf(KeysInfo).dc = function () {
    return this.keys;
  };
  protoOf(KeysInfo).lct = function (keyId, keys) {
    return new KeysInfo(keyId, keys);
  };
  protoOf(KeysInfo).copy = function (keyId, keys, $super) {
    keyId = keyId === VOID ? this.keyId : keyId;
    keys = keys === VOID ? this.keys : keys;
    return $super === VOID ? this.lct(keyId, keys) : $super.lct.call(this, keyId, keys);
  };
  protoOf(KeysInfo).toString = function () {
    return 'KeysInfo(keyId=' + this.keyId + ', keys=' + toString(this.keys) + ')';
  };
  protoOf(KeysInfo).hashCode = function () {
    var result = getStringHashCode(this.keyId);
    result = imul(result, 31) + hashCode(this.keys) | 0;
    return result;
  };
  protoOf(KeysInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KeysInfo))
      return false;
    var tmp0_other_with_cast = other instanceof KeysInfo ? other : THROW_CCE();
    if (!(this.keyId === tmp0_other_with_cast.keyId))
      return false;
    if (!equals(this.keys, tmp0_other_with_cast.keys))
      return false;
    return true;
  };
  function JwsSignatureScheme$getIssuerKeyInfo$lambda($issuerId) {
    return function () {
      return 'Resolving key from issuer did: ' + $issuerId;
    };
  }
  function JwsSignatureScheme$getIssuerKeyInfo$lambda_0($it, $issuerId, $exportedJwk) {
    return function () {
      return 'Imported key: ' + Result__toString_impl_yu5r8k($it) + ' from did: ' + $issuerId + ', public is: ' + $exportedJwk;
    };
  }
  function JwsSignatureScheme$getIssuerKeysInfo$lambda($issuerId) {
    return function () {
      return 'Resolving keys from issuer did: ' + $issuerId;
    };
  }
  function JwsSignatureScheme$getIssuerKeysInfo$lambda_0($it, $issuerId) {
    return function () {
      // Inline function 'kotlin.Result.getOrNull' call
      var this_0 = $it;
      var tmp;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp = null;
      } else {
        var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
        tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      }
      var tmp0_safe_receiver = tmp;
      return 'Imported keys: ' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s()) + ' from did: ' + $issuerId;
    };
  }
  function JwsSignatureScheme$verify$lambda() {
    return 'Verification successful with one of the keys from the DID document';
  }
  function JwsSignatureScheme$getIssuerKeyInfoAsync$slambda(this$0, $jws, resultContinuation) {
    this.uct_1 = this$0;
    this.vct_1 = $jws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwsSignatureScheme$getIssuerKeyInfoAsync$slambda).wct = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(JwsSignatureScheme$getIssuerKeyInfoAsync$slambda).zb = function ($completion) {
    return this.wct($completion);
  };
  protoOf(JwsSignatureScheme$getIssuerKeyInfoAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.uct_1.xct(this.vct_1, this);
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
  protoOf(JwsSignatureScheme$getIssuerKeyInfoAsync$slambda).ia = function (completion) {
    return new JwsSignatureScheme$getIssuerKeyInfoAsync$slambda(this.uct_1, this.vct_1, completion);
  };
  function JwsSignatureScheme$getIssuerKeyInfoAsync$slambda_0(this$0, $jws, resultContinuation) {
    var i = new JwsSignatureScheme$getIssuerKeyInfoAsync$slambda(this$0, $jws, resultContinuation);
    var l = function ($completion) {
      return i.wct($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JwsSignatureScheme$verifyAsync$slambda(this$0, $data, resultContinuation) {
    this.gcu_1 = this$0;
    this.hcu_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwsSignatureScheme$verifyAsync$slambda).s6m = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwsSignatureScheme$verifyAsync$slambda).zb = function ($completion) {
    return this.s6m($completion);
  };
  protoOf(JwsSignatureScheme$verifyAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.gcu_1.icu(this.hcu_1, this);
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
  protoOf(JwsSignatureScheme$verifyAsync$slambda).ia = function (completion) {
    return new JwsSignatureScheme$verifyAsync$slambda(this.gcu_1, this.hcu_1, completion);
  };
  function JwsSignatureScheme$verifyAsync$slambda_0(this$0, $data, resultContinuation) {
    var i = new JwsSignatureScheme$verifyAsync$slambda(this$0, $data, resultContinuation);
    var l = function ($completion) {
      return i.s6m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JwsSignatureScheme$verifySDJwtAsync$slambda(this$0, $data, $jwtCryptoProvider, resultContinuation) {
    this.rcu_1 = this$0;
    this.scu_1 = $data;
    this.tcu_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwsSignatureScheme$verifySDJwtAsync$slambda).s6m = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwsSignatureScheme$verifySDJwtAsync$slambda).zb = function ($completion) {
    return this.s6m($completion);
  };
  protoOf(JwsSignatureScheme$verifySDJwtAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.m9_1 = 1;
            suspendResult = this.rcu_1.ucu(this.scu_1, this.tcu_1, this);
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
  protoOf(JwsSignatureScheme$verifySDJwtAsync$slambda).ia = function (completion) {
    return new JwsSignatureScheme$verifySDJwtAsync$slambda(this.rcu_1, this.scu_1, this.tcu_1, completion);
  };
  function JwsSignatureScheme$verifySDJwtAsync$slambda_0(this$0, $data, $jwtCryptoProvider, resultContinuation) {
    var i = new JwsSignatureScheme$verifySDJwtAsync$slambda(this$0, $data, $jwtCryptoProvider, resultContinuation);
    var l = function ($completion) {
      return i.s6m($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JwsSignatureScheme$getIssuerKeysInfoAsync$slambda(this$0, $jws, resultContinuation) {
    this.dcv_1 = this$0;
    this.ecv_1 = $jws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwsSignatureScheme$getIssuerKeysInfoAsync$slambda).fcv = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(JwsSignatureScheme$getIssuerKeysInfoAsync$slambda).zb = function ($completion) {
    return this.fcv($completion);
  };
  protoOf(JwsSignatureScheme$getIssuerKeysInfoAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.dcv_1.gcv(this.ecv_1, this);
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
  protoOf(JwsSignatureScheme$getIssuerKeysInfoAsync$slambda).ia = function (completion) {
    return new JwsSignatureScheme$getIssuerKeysInfoAsync$slambda(this.dcv_1, this.ecv_1, completion);
  };
  function JwsSignatureScheme$getIssuerKeysInfoAsync$slambda_0(this$0, $jws, resultContinuation) {
    var i = new JwsSignatureScheme$getIssuerKeysInfoAsync$slambda(this$0, $jws, resultContinuation);
    var l = function ($completion) {
      return i.fcv($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JwsSignatureScheme$signAsync$slambda(this$0, $data, $key, $jwtHeaders, $jwtOptions, resultContinuation) {
    this.pcv_1 = this$0;
    this.qcv_1 = $data;
    this.rcv_1 = $key;
    this.scv_1 = $jwtHeaders;
    this.tcv_1 = $jwtOptions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwsSignatureScheme$signAsync$slambda).a6j = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(JwsSignatureScheme$signAsync$slambda).zb = function ($completion) {
    return this.a6j($completion);
  };
  protoOf(JwsSignatureScheme$signAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.pcv_1.ucv(this.qcv_1, this.rcv_1, this.scv_1, this.tcv_1, this);
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
  protoOf(JwsSignatureScheme$signAsync$slambda).ia = function (completion) {
    return new JwsSignatureScheme$signAsync$slambda(this.pcv_1, this.qcv_1, this.rcv_1, this.scv_1, this.tcv_1, completion);
  };
  function JwsSignatureScheme$signAsync$slambda_0(this$0, $data, $key, $jwtHeaders, $jwtOptions, resultContinuation) {
    var i = new JwsSignatureScheme$signAsync$slambda(this$0, $data, $key, $jwtHeaders, $jwtOptions, resultContinuation);
    var l = function ($completion) {
      return i.a6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getIssuerKeyInfoCOROUTINE$6(_this__u8e3s4, jws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dcw_1 = _this__u8e3s4;
    this.ecw_1 = jws;
  }
  protoOf($getIssuerKeyInfoCOROUTINE$6).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 9;
            this.fcw_1 = JwsUtils_instance.decodeJws(substringBefore(this.ecw_1, '~'));
            var tmp_0 = this;
            var tmp0_safe_receiver = this.fcw_1.header.ze('kid');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p4s();
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Missing key ID in JWS header');
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }

            tmp_0.gcw_1 = tmp_1;
            var tmp_2 = this;
            var tmp3_safe_receiver = this.fcw_1.payload.ze('iss');
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonPrimitive(tmp3_safe_receiver);
            var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.p4s();
            tmp_2.hcw_1 = tmp5_elvis_lhs == null ? this.gcw_1 : tmp5_elvis_lhs;
            if (DidUtils_getInstance().isDidUrl(this.hcw_1)) {
              var tmp_3 = get_log();
              tmp_3.h6e(JwsSignatureScheme$getIssuerKeyInfo$lambda(this.hcw_1));
              this.m9_1 = 1;
              suspendResult = DidService_getInstance().l9v(this.hcw_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 2;
              continue $sm;
            } else {
              var tmp_4 = this;
              throw UnsupportedOperationException_init_$Create$('Only DIDs are supported as issuer IDs for W3C credentials.');
            }

          case 1:
            this.jcw_1 = suspendResult.mp_1;
            suspendResult = new Result(this.jcw_1);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.kcw_1 = suspendResult;
            this.lcw_1 = this.kcw_1;
            var tmp_5 = this;
            tmp_5.mcw_1 = this.lcw_1.mp_1;
            this.ncw_1 = this.mcw_1;
            if (get_log().p6e()) {
              var tmp_6 = this;
              var this_0 = this.ncw_1;
              var tmp_7;
              if (_Result___get_isFailure__impl__jpiriv(this_0)) {
                tmp_7 = null;
              } else {
                var tmp_8 = _Result___get_value__impl__bjfvqg(this_0);
                tmp_7 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
              }
              tmp_6.ocw_1 = tmp_7;
              if (this.ocw_1 == null) {
                this.pcw_1 = null;
                this.m9_1 = 4;
                continue $sm;
              } else {
                this.m9_1 = 3;
                suspendResult = this.ocw_1.s6k(this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.m9_1 = 7;
              continue $sm;
            }

          case 3:
            this.pcw_1 = suspendResult;
            this.m9_1 = 4;
            continue $sm;
          case 4:
            this.qcw_1 = this.pcw_1;
            if (this.qcw_1 == null) {
              this.rcw_1 = null;
              this.m9_1 = 6;
              continue $sm;
            } else {
              this.m9_1 = 5;
              suspendResult = this.qcw_1.d6n(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.rcw_1 = suspendResult;
            this.m9_1 = 6;
            continue $sm;
          case 6:
            var exportedJwk = this.rcw_1;
            var tmp_9 = get_log();
            tmp_9.h6e(JwsSignatureScheme$getIssuerKeyInfo$lambda_0(this.ncw_1, this.hcw_1, exportedJwk));
            this.m9_1 = 7;
            continue $sm;
          case 7:
            var tmp_10 = this;
            var this_1 = this.lcw_1.mp_1;
            throwOnFailure(this_1);
            var tmp_11 = _Result___get_value__impl__bjfvqg(this_1);
            tmp_10.icw_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
            this.m9_1 = 8;
            continue $sm;
          case 8:
            var key = this.icw_1;
            return new KeyInfo(this.gcw_1, key);
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
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<set-state>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).t9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-state>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).u9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<set-exceptionState>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).v9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-exceptionState>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).w9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<set-result>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).x9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-result>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).y9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<set-exception>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).z9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-exception>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).aa;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<set-finallyPath>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).ba;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-finallyPath>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).ca;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-context>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).s9;
  function $getIssuerKeysInfoCOROUTINE$7(_this__u8e3s4, jws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.acx_1 = _this__u8e3s4;
    this.bcx_1 = jws;
  }
  protoOf($getIssuerKeysInfoCOROUTINE$7).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.ccx_1 = JwsUtils_instance.decodeJws(this.bcx_1);
            var tmp_0 = this;
            var tmp0_safe_receiver = this.ccx_1.header.ze('kid');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p4s();
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Missing key ID in JWS header');
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }

            tmp_0.dcx_1 = tmp_1;
            var tmp_2 = this;
            var tmp3_safe_receiver = this.ccx_1.payload.ze('iss');
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonPrimitive(tmp3_safe_receiver);
            var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.p4s();
            tmp_2.ecx_1 = tmp5_elvis_lhs == null ? this.dcx_1 : tmp5_elvis_lhs;
            if (DidUtils_getInstance().isDidUrl(this.ecx_1)) {
              var tmp_3 = get_log();
              tmp_3.h6e(JwsSignatureScheme$getIssuerKeysInfo$lambda(this.ecx_1));
              this.m9_1 = 1;
              suspendResult = DidService_getInstance().s9u(this.ecx_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.m9_1 = 2;
              continue $sm;
            } else {
              var tmp_4 = this;
              var reason = 'Issuer IDs other than DIDs are currently not supported for W3C credentials.';
              throw new NotImplementedError('An operation is not implemented: ' + reason);
            }

          case 1:
            var unboxed = suspendResult.mp_1;
            suspendResult = new Result(unboxed);
            this.m9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult;
            var it = this_0.mp_1;
            if (get_log().p6e()) {
              var tmp_5 = get_log();
              tmp_5.h6e(JwsSignatureScheme$getIssuerKeysInfo$lambda_0(it, this.ecx_1));
            }

            var tmp_6 = this;
            var this_1 = this_0.mp_1;
            throwOnFailure(this_1);
            var tmp_7 = _Result___get_value__impl__bjfvqg(this_1);
            tmp_6.fcx_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
            this.m9_1 = 3;
            continue $sm;
          case 3:
            var keys = this.fcx_1;
            return new KeysInfo(this.dcx_1, keys);
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
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<set-state>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).t9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-state>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).u9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<set-exceptionState>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).v9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-exceptionState>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).w9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<set-result>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).x9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-result>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).y9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<set-exception>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).z9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-exception>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).aa;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<set-finallyPath>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).ba;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-finallyPath>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).ca;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-context>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).s9;
  function $verifyCOROUTINE$8(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ocx_1 = _this__u8e3s4;
    this.pcx_1 = data;
  }
  protoOf($verifyCOROUTINE$8).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 9;
            var tmp_0 = this;
            tmp_0.qcx_1 = this.ocx_1;
            this.rcx_1 = this.qcx_1;
            this.n9_1 = 8;
            var tmp_1 = this;
            tmp_1.tcx_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.ucx_1 = this.rcx_1;
            this.vcx_1 = this.ucx_1;
            this.m9_1 = 1;
            suspendResult = this.vcx_1.gcv(this.pcx_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.wcx_1 = suspendResult;
            this.xcx_1 = split(this.pcx_1, ['~']).u(0);
            this.ycx_1 = null;
            this.zcx_1 = this.wcx_1.keys.p();
            this.m9_1 = 2;
            continue $sm;
          case 2:
            if (!this.zcx_1.q()) {
              this.m9_1 = 7;
              continue $sm;
            }

            this.acy_1 = this.zcx_1.r();
            this.n9_1 = 5;
            this.m9_1 = 3;
            suspendResult = this.acy_1.t6m(this.xcx_1, this);
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
            this.bcy_1 = suspendResult.mp_1;
            this.n9_1 = 8;
            this.m9_1 = 6;
            continue $sm;
          case 5:
            this.n9_1 = 8;
            var tmp_3 = this.p9_1;
            if (tmp_3 instanceof Exception) {
              var e = this.p9_1;
              var tmp_4 = this;
              this.ycx_1 = e;
              tmp_4.bcy_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.m9_1 = 6;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 6:
            this.n9_1 = 8;
            var result = this.bcy_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              var tmp_5 = get_log();
              tmp_5.h6e(JwsSignatureScheme$verify$lambda);
              return new Result(result);
            }

            this.m9_1 = 2;
            continue $sm;
          case 7:
            var tmp0_elvis_lhs = this.ycx_1;
            var exception = tmp0_elvis_lhs == null ? Exception_init_$Create$('Verification failed with all keys from the DID document') : tmp0_elvis_lhs;
            return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
          case 8:
            this.n9_1 = 9;
            var tmp_6 = this.p9_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.p9_1;
              var tmp_7 = this;
              tmp_7.scx_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.m9_1 = 10;
              continue $sm;
            } else {
              throw this.p9_1;
            }

          case 9:
            throw this.p9_1;
          case 10:
            this.n9_1 = 9;
            return new Result(this.scx_1);
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.n9_1 === 9) {
          throw e_1;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_1;
        }
      }
     while (true);
  };
  protoOf($verifyCOROUTINE$8)['<set-state>'] = protoOf($verifyCOROUTINE$8).t9;
  protoOf($verifyCOROUTINE$8)['<get-state>'] = protoOf($verifyCOROUTINE$8).u9;
  protoOf($verifyCOROUTINE$8)['<set-exceptionState>'] = protoOf($verifyCOROUTINE$8).v9;
  protoOf($verifyCOROUTINE$8)['<get-exceptionState>'] = protoOf($verifyCOROUTINE$8).w9;
  protoOf($verifyCOROUTINE$8)['<set-result>'] = protoOf($verifyCOROUTINE$8).x9;
  protoOf($verifyCOROUTINE$8)['<get-result>'] = protoOf($verifyCOROUTINE$8).y9;
  protoOf($verifyCOROUTINE$8)['<set-exception>'] = protoOf($verifyCOROUTINE$8).z9;
  protoOf($verifyCOROUTINE$8)['<get-exception>'] = protoOf($verifyCOROUTINE$8).aa;
  protoOf($verifyCOROUTINE$8)['<set-finallyPath>'] = protoOf($verifyCOROUTINE$8).ba;
  protoOf($verifyCOROUTINE$8)['<get-finallyPath>'] = protoOf($verifyCOROUTINE$8).ca;
  protoOf($verifyCOROUTINE$8)['<get-context>'] = protoOf($verifyCOROUTINE$8).s9;
  function JwsSignatureScheme() {
  }
  protoOf(JwsSignatureScheme).ccy = function (data, jwtOptions) {
    var tmp = JsonUtils_getInstance();
    var tmp_0 = [to('iss', jwtOptions.k2('iss')), to('sub', jwtOptions.k2('sub')), to('vc', data)];
    // Inline function 'kotlin.collections.map' call
    var this_0 = jwtOptions.x();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.toPair' call
      var tmp$ret$1 = new Pair(item.y(), item.z());
      destination.n(tmp$ret$1);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$4 = copyToArray(destination);
    return tmp.toJsonObject(mapOf_0(arrayConcat([tmp_0, tmp$ret$4])));
  };
  protoOf(JwsSignatureScheme).toPayload = function (data, jwtOptions, $super) {
    jwtOptions = jwtOptions === VOID ? emptyMap() : jwtOptions;
    return $super === VOID ? this.ccy(data, jwtOptions) : $super.ccy.call(this, data, jwtOptions);
  };
  protoOf(JwsSignatureScheme).xct = function (jws, $completion) {
    var tmp = new $getIssuerKeyInfoCOROUTINE$6(this, jws, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(JwsSignatureScheme).gcv = function (jws, $completion) {
    var tmp = new $getIssuerKeysInfoCOROUTINE$7(this, jws, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(JwsSignatureScheme).ucv = function (data, key, jwtHeaders, jwtOptions, $completion) {
    var tmp0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value = this.toPayload(data, jwtOptions);
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(JsonObject), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp$ret$2 = tmp0.y1z(tmp$ret$1, value);
    var payload = encodeToByteArray(tmp$ret$2);
    return key.b6j(payload, jwtHeaders, $completion);
  };
  protoOf(JwsSignatureScheme).sign$default = function (data, key, jwtHeaders, jwtOptions, $completion, $super) {
    jwtHeaders = jwtHeaders === VOID ? emptyMap() : jwtHeaders;
    jwtOptions = jwtOptions === VOID ? emptyMap() : jwtOptions;
    return $super === VOID ? this.ucv(data, key, jwtHeaders, jwtOptions, $completion) : $super.ucv.call(this, data, key, jwtHeaders, jwtOptions, $completion);
  };
  protoOf(JwsSignatureScheme).icu = function (data, $completion) {
    var tmp = new $verifyCOROUTINE$8(this, data, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    var tmp_0 = tmp.ea();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwsSignatureScheme).ucu = function (data, jwtCryptoProvider, $completion) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.let' call
      var it = Companion_getInstance_2().verifyAndParse(data, jwtCryptoProvider);
      var tmp_0;
      if (it.verified) {
        // Inline function 'kotlin.Companion.success' call
        var value = it.sdJwt.zzz_unused_fullPayload;
        tmp_0 = _Result___init__impl__xyqfz8(value);
      } else {
        var tmp0_elvis_lhs = it.message;
        // Inline function 'kotlin.Companion.failure' call
        var exception = new VerificationException(tmp0_elvis_lhs == null ? 'Verification failed' : tmp0_elvis_lhs);
        tmp_0 = _Result___init__impl__xyqfz8(createFailure(exception));
      }
      var tmp$ret$3 = tmp_0;
      return new Result(tmp$ret$3);
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
    var tmp$ret$6 = tmp;
    return new Result(tmp$ret$6);
  };
  protoOf(JwsSignatureScheme).dcy = function (jws) {
    var tmp = JwsSignatureScheme$getIssuerKeyInfoAsync$slambda_0(this, jws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwsSignatureScheme).ecy = function (data) {
    var tmp = JwsSignatureScheme$verifyAsync$slambda_0(this, data, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwsSignatureScheme).fcy = function (data, jwtCryptoProvider) {
    var tmp = JwsSignatureScheme$verifySDJwtAsync$slambda_0(this, data, jwtCryptoProvider, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwsSignatureScheme).gcy = function (jws) {
    var tmp = JwsSignatureScheme$getIssuerKeysInfoAsync$slambda_0(this, jws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwsSignatureScheme).hcy = function (data, key, jwtHeaders, jwtOptions) {
    var tmp = JwsSignatureScheme$signAsync$slambda_0(this, data, key, jwtHeaders, jwtOptions, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwsSignatureScheme).signAsync$default = function (data, key, jwtHeaders, jwtOptions, $super) {
    jwtHeaders = jwtHeaders === VOID ? emptyMap() : jwtHeaders;
    jwtOptions = jwtOptions === VOID ? emptyMap() : jwtOptions;
    return $super === VOID ? this.hcy(data, key, jwtHeaders, jwtOptions) : $super.hcy.call(this, data, key, jwtHeaders, jwtOptions);
  };
  function log$lambda() {
    _init_properties_JwsSignatureScheme_kt__gfqf2h();
    return Unit_instance;
  }
  var properties_initialized_JwsSignatureScheme_kt_r6dtc7;
  function _init_properties_JwsSignatureScheme_kt__gfqf2h() {
    if (!properties_initialized_JwsSignatureScheme_kt_r6dtc7) {
      properties_initialized_JwsSignatureScheme_kt_r6dtc7 = true;
      var tmp = KotlinLogging_instance;
      log = tmp.q6e(log$lambda);
    }
  }
  function SignatureScheme() {
  }
  function CredentialDataMergeUtils$FunctionCall$fromContext$lambda(this$0) {
    return function () {
      return 'CONTEXT: ' + toString(this$0.context);
    };
  }
  function MergeResult(vc, results) {
    this.vc = vc;
    this.results = results;
  }
  protoOf(MergeResult).icy = function () {
    return this.vc;
  };
  protoOf(MergeResult).jcy = function () {
    return this.results;
  };
  protoOf(MergeResult).cc = function () {
    return this.vc;
  };
  protoOf(MergeResult).dc = function () {
    return this.results;
  };
  protoOf(MergeResult).kcm = function (vc, results) {
    return new MergeResult(vc, results);
  };
  protoOf(MergeResult).copy = function (vc, results, $super) {
    vc = vc === VOID ? this.vc : vc;
    results = results === VOID ? this.results : results;
    return $super === VOID ? this.kcm(vc, results) : $super.kcm.call(this, vc, results);
  };
  protoOf(MergeResult).toString = function () {
    return 'MergeResult(vc=' + this.vc.toString() + ', results=' + toString(this.results) + ')';
  };
  protoOf(MergeResult).hashCode = function () {
    var result = this.vc.hashCode();
    result = imul(result, 31) + hashCode(this.results) | 0;
    return result;
  };
  protoOf(MergeResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MergeResult))
      return false;
    var tmp0_other_with_cast = other instanceof MergeResult ? other : THROW_CCE();
    if (!this.vc.equals(tmp0_other_with_cast.vc))
      return false;
    if (!equals(this.results, tmp0_other_with_cast.results))
      return false;
    return true;
  };
  function JsonMergeResult(vc, results) {
    this.vc = vc;
    this.results = results;
  }
  protoOf(JsonMergeResult).icy = function () {
    return this.vc;
  };
  protoOf(JsonMergeResult).jcy = function () {
    return this.results;
  };
  protoOf(JsonMergeResult).cc = function () {
    return this.vc;
  };
  protoOf(JsonMergeResult).dc = function () {
    return this.results;
  };
  protoOf(JsonMergeResult).kcy = function (vc, results) {
    return new JsonMergeResult(vc, results);
  };
  protoOf(JsonMergeResult).copy = function (vc, results, $super) {
    vc = vc === VOID ? this.vc : vc;
    results = results === VOID ? this.results : results;
    return $super === VOID ? this.kcy(vc, results) : $super.kcy.call(this, vc, results);
  };
  protoOf(JsonMergeResult).toString = function () {
    return 'JsonMergeResult(vc=' + this.vc.toString() + ', results=' + toString(this.results) + ')';
  };
  protoOf(JsonMergeResult).hashCode = function () {
    var result = this.vc.hashCode();
    result = imul(result, 31) + hashCode(this.results) | 0;
    return result;
  };
  protoOf(JsonMergeResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JsonMergeResult))
      return false;
    var tmp0_other_with_cast = other instanceof JsonMergeResult ? other : THROW_CCE();
    if (!this.vc.equals(tmp0_other_with_cast.vc))
      return false;
    if (!equals(this.results, tmp0_other_with_cast.results))
      return false;
    return true;
  };
  function FunctionCall(func, history, context, args) {
    this.func = func;
    this.history = history;
    this.context = context;
    this.args = args;
  }
  protoOf(FunctionCall).lcy = function () {
    return this.func;
  };
  protoOf(FunctionCall).mcy = function () {
    return this.history;
  };
  protoOf(FunctionCall).s9 = function () {
    return this.context;
  };
  protoOf(FunctionCall).ncy = function () {
    return this.args;
  };
  protoOf(FunctionCall).fromContext = function () {
    var tmp = CredentialDataMergeUtils_getInstance().ics_1;
    tmp.j6e(CredentialDataMergeUtils$FunctionCall$fromContext$lambda(this));
    var tmp0_elvis_lhs = this.context.k2(this.func);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Cannot find in context: ' + this.func);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(FunctionCall).cc = function () {
    return this.func;
  };
  protoOf(FunctionCall).dc = function () {
    return this.history;
  };
  protoOf(FunctionCall).qp = function () {
    return this.context;
  };
  protoOf(FunctionCall).j6y = function () {
    return this.args;
  };
  protoOf(FunctionCall).ocy = function (func, history, context, args) {
    return new FunctionCall(func, history, context, args);
  };
  protoOf(FunctionCall).copy = function (func, history, context, args, $super) {
    func = func === VOID ? this.func : func;
    history = history === VOID ? this.history : history;
    context = context === VOID ? this.context : context;
    args = args === VOID ? this.args : args;
    return $super === VOID ? this.ocy(func, history, context, args) : $super.ocy.call(this, func, history, context, args);
  };
  protoOf(FunctionCall).toString = function () {
    return 'FunctionCall(func=' + this.func + ', history=' + toString_0(this.history) + ', context=' + toString(this.context) + ', args=' + this.args + ')';
  };
  protoOf(FunctionCall).hashCode = function () {
    var result = getStringHashCode(this.func);
    result = imul(result, 31) + (this.history == null ? 0 : hashCode(this.history)) | 0;
    result = imul(result, 31) + hashCode(this.context) | 0;
    result = imul(result, 31) + (this.args == null ? 0 : getStringHashCode(this.args)) | 0;
    return result;
  };
  protoOf(FunctionCall).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FunctionCall))
      return false;
    var tmp0_other_with_cast = other instanceof FunctionCall ? other : THROW_CCE();
    if (!(this.func === tmp0_other_with_cast.func))
      return false;
    if (!equals(this.history, tmp0_other_with_cast.history))
      return false;
    if (!equals(this.context, tmp0_other_with_cast.context))
      return false;
    if (!(this.args == tmp0_other_with_cast.args))
      return false;
    return true;
  };
  function CredentialDataMergeUtils$log$lambda() {
    return Unit_instance;
  }
  function CredentialDataMergeUtils$getTemplateData$lambda($e) {
    return function () {
      return $e;
    };
  }
  function CredentialDataMergeUtils$getTemplateData$lambda_0($functionCall, $result) {
    return function () {
      return 'Called function: ' + $functionCall + ', got: ' + toString($result);
    };
  }
  function CredentialDataMergeUtils$patch$lambda($v) {
    return function () {
      return 'Unsupported: ' + toString($v);
    };
  }
  function CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda($this_mergeSDJwtVCPayloadWithMappingAsync, $mapping, $context, $data, resultContinuation) {
    this.xcy_1 = $this_mergeSDJwtVCPayloadWithMappingAsync;
    this.ycy_1 = $mapping;
    this.zcy_1 = $context;
    this.acz_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda).n6n = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda).zb = function ($completion) {
    return this.n6n($completion);
  };
  protoOf(CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = CredentialDataMergeUtils_getInstance().bcz(this.xcy_1, this.ycy_1, this.zcy_1, this.acz_1, this);
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
  protoOf(CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda).ia = function (completion) {
    return new CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda(this.xcy_1, this.ycy_1, this.zcy_1, this.acz_1, completion);
  };
  function CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda_0($this_mergeSDJwtVCPayloadWithMappingAsync, $mapping, $context, $data, resultContinuation) {
    var i = new CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda($this_mergeSDJwtVCPayloadWithMappingAsync, $mapping, $context, $data, resultContinuation);
    var l = function ($completion) {
      return i.n6n($completion);
    };
    l.$arity = 0;
    return l;
  }
  function CredentialDataMergeUtils$mergeWithMappingAsync$slambda($this_mergeWithMappingAsync, $mapping, $context, $data, resultContinuation) {
    this.kcz_1 = $this_mergeWithMappingAsync;
    this.lcz_1 = $mapping;
    this.mcz_1 = $context;
    this.ncz_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialDataMergeUtils$mergeWithMappingAsync$slambda).ocz = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(CredentialDataMergeUtils$mergeWithMappingAsync$slambda).zb = function ($completion) {
    return this.ocz($completion);
  };
  protoOf(CredentialDataMergeUtils$mergeWithMappingAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = CredentialDataMergeUtils_getInstance().jcs(this.kcz_1, this.lcz_1, this.mcz_1, this.ncz_1, this);
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
  protoOf(CredentialDataMergeUtils$mergeWithMappingAsync$slambda).ia = function (completion) {
    return new CredentialDataMergeUtils$mergeWithMappingAsync$slambda(this.kcz_1, this.lcz_1, this.mcz_1, this.ncz_1, completion);
  };
  function CredentialDataMergeUtils$mergeWithMappingAsync$slambda_0($this_mergeWithMappingAsync, $mapping, $context, $data, resultContinuation) {
    var i = new CredentialDataMergeUtils$mergeWithMappingAsync$slambda($this_mergeWithMappingAsync, $mapping, $context, $data, resultContinuation);
    var l = function ($completion) {
      return i.ocz($completion);
    };
    l.$arity = 0;
    return l;
  }
  function CredentialDataMergeUtils$patchAsync$slambda($this_patchAsync, $k, $v, $dataFunctions, $context, $functionHistory, resultContinuation) {
    this.xcz_1 = $this_patchAsync;
    this.ycz_1 = $k;
    this.zcz_1 = $v;
    this.ad0_1 = $dataFunctions;
    this.bd0_1 = $context;
    this.cd0_1 = $functionHistory;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialDataMergeUtils$patchAsync$slambda).dd0 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(CredentialDataMergeUtils$patchAsync$slambda).zb = function ($completion) {
    return this.dd0($completion);
  };
  protoOf(CredentialDataMergeUtils$patchAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = CredentialDataMergeUtils_getInstance().ed0(this.xcz_1, this.ycz_1, this.zcz_1, this.ad0_1, this.bd0_1, this.cd0_1, this);
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
  protoOf(CredentialDataMergeUtils$patchAsync$slambda).ia = function (completion) {
    return new CredentialDataMergeUtils$patchAsync$slambda(this.xcz_1, this.ycz_1, this.zcz_1, this.ad0_1, this.bd0_1, this.cd0_1, completion);
  };
  function CredentialDataMergeUtils$patchAsync$slambda_0($this_patchAsync, $k, $v, $dataFunctions, $context, $functionHistory, resultContinuation) {
    var i = new CredentialDataMergeUtils$patchAsync$slambda($this_patchAsync, $k, $v, $dataFunctions, $context, $functionHistory, resultContinuation);
    var l = function ($completion) {
      return i.dd0($completion);
    };
    l.$arity = 0;
    return l;
  }
  function CredentialDataMergeUtils$getTemplateDataAsync$slambda($functionCall, $dataFunctions, $context, $functionHistory, resultContinuation) {
    this.nd0_1 = $functionCall;
    this.od0_1 = $dataFunctions;
    this.pd0_1 = $context;
    this.qd0_1 = $functionHistory;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialDataMergeUtils$getTemplateDataAsync$slambda).rd0 = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(CredentialDataMergeUtils$getTemplateDataAsync$slambda).zb = function ($completion) {
    return this.rd0($completion);
  };
  protoOf(CredentialDataMergeUtils$getTemplateDataAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = CredentialDataMergeUtils_getInstance().sd0(this.nd0_1, this.od0_1, this.pd0_1, this.qd0_1, this);
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
  protoOf(CredentialDataMergeUtils$getTemplateDataAsync$slambda).ia = function (completion) {
    return new CredentialDataMergeUtils$getTemplateDataAsync$slambda(this.nd0_1, this.od0_1, this.pd0_1, this.qd0_1, completion);
  };
  function CredentialDataMergeUtils$getTemplateDataAsync$slambda_0($functionCall, $dataFunctions, $context, $functionHistory, resultContinuation) {
    var i = new CredentialDataMergeUtils$getTemplateDataAsync$slambda($functionCall, $dataFunctions, $context, $functionHistory, resultContinuation);
    var l = function ($completion) {
      return i.rd0($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getTemplateDataCOROUTINE$9(_this__u8e3s4, functionCall, dataFunctions, context, functionHistory, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bd1_1 = _this__u8e3s4;
    this.cd1_1 = functionCall;
    this.dd1_1 = dataFunctions;
    this.ed1_1 = context;
    this.fd1_1 = functionHistory;
  }
  protoOf($getTemplateDataCOROUTINE$9).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 6;
            var tmp_0 = this;
            var tmp0 = this.cd1_1;
            var endIndex = this.cd1_1.length - 1 | 0;
            tmp_0.gd1_1 = tmp0.substring(1, endIndex);
            this.hd1_1 = substringBefore(this.gd1_1, ':');
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.dd1_1.k2(this.hd1_1);
            var tmp_2;
            if (tmp0_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Unknown dynamic data function "' + this.hd1_1 + '" at call: ' + this.cd1_1);
            } else {
              tmp_2 = tmp0_elvis_lhs;
            }

            tmp_1.id1_1 = tmp_2;
            this.jd1_1 = this.hd1_1.length < this.gd1_1.length;
            if (this.jd1_1) {
              var tmp_3 = this;
              var tmp3 = this.gd1_1;
              var startIndex = this.hd1_1.length + 1 | 0;
              tmp_3.ld1_1 = tmp3.substring(startIndex);
              this.m9_1 = 4;
              suspendResult = this.id1_1(new FunctionCall(this.hd1_1, this.fd1_1, this.ed1_1, this.ld1_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.n9_1 = 2;
              this.m9_1 = 1;
              suspendResult = this.id1_1(new FunctionCall(this.hd1_1, null, this.ed1_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.md1_1 = suspendResult;
            this.n9_1 = 6;
            this.m9_1 = 3;
            continue $sm;
          case 2:
            this.n9_1 = 6;
            var tmp_4 = this.p9_1;
            if (tmp_4 instanceof NullPointerException) {
              var e = this.p9_1;
              var tmp_5 = this;
              this.bd1_1.ics_1.l6e(CredentialDataMergeUtils$getTemplateData$lambda(e));
              throw IllegalArgumentException_init_$Create$('Could not execute dynamic data function "' + this.hd1_1 + '" - missing argument! At function call: ' + this.gd1_1);
            } else {
              throw this.p9_1;
            }

          case 3:
            this.n9_1 = 6;
            this.kd1_1 = this.md1_1;
            this.m9_1 = 5;
            continue $sm;
          case 4:
            this.kd1_1 = suspendResult;
            this.m9_1 = 5;
            continue $sm;
          case 5:
            var result = this.kd1_1;
            if (result instanceof JsonPrimitive_1) {
              var tmp5 = this.fd1_1;
              var key = this.hd1_1;
              tmp5.n2(key, result);
            }

            this.bd1_1.ics_1.j6e(CredentialDataMergeUtils$getTemplateData$lambda_0(this.cd1_1, result));
            return result;
          case 6:
            throw this.p9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 6) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($getTemplateDataCOROUTINE$9)['<set-state>'] = protoOf($getTemplateDataCOROUTINE$9).t9;
  protoOf($getTemplateDataCOROUTINE$9)['<get-state>'] = protoOf($getTemplateDataCOROUTINE$9).u9;
  protoOf($getTemplateDataCOROUTINE$9)['<set-exceptionState>'] = protoOf($getTemplateDataCOROUTINE$9).v9;
  protoOf($getTemplateDataCOROUTINE$9)['<get-exceptionState>'] = protoOf($getTemplateDataCOROUTINE$9).w9;
  protoOf($getTemplateDataCOROUTINE$9)['<set-result>'] = protoOf($getTemplateDataCOROUTINE$9).x9;
  protoOf($getTemplateDataCOROUTINE$9)['<get-result>'] = protoOf($getTemplateDataCOROUTINE$9).y9;
  protoOf($getTemplateDataCOROUTINE$9)['<set-exception>'] = protoOf($getTemplateDataCOROUTINE$9).z9;
  protoOf($getTemplateDataCOROUTINE$9)['<get-exception>'] = protoOf($getTemplateDataCOROUTINE$9).aa;
  protoOf($getTemplateDataCOROUTINE$9)['<set-finallyPath>'] = protoOf($getTemplateDataCOROUTINE$9).ba;
  protoOf($getTemplateDataCOROUTINE$9)['<get-finallyPath>'] = protoOf($getTemplateDataCOROUTINE$9).ca;
  protoOf($getTemplateDataCOROUTINE$9)['<get-context>'] = protoOf($getTemplateDataCOROUTINE$9).s9;
  function $patchCOROUTINE$10(_this__u8e3s4, _this__u8e3s4_0, k, v, dataFunctions, context, functionHistory, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vd1_1 = _this__u8e3s4;
    this.wd1_1 = _this__u8e3s4_0;
    this.xd1_1 = k;
    this.yd1_1 = v;
    this.zd1_1 = dataFunctions;
    this.ad2_1 = context;
    this.bd2_1 = functionHistory;
  }
  protoOf($patchCOROUTINE$10).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 7;
            this.cd2_1 = this.yd1_1;
            var tmp_0 = this.cd2_1;
            if (tmp_0 instanceof JsonPrimitive_1) {
              if (this.vd1_1.isTemplate(this.yd1_1)) {
                var tmp_1 = this;
                tmp_1.dd2_1 = this.wd1_1;
                var tmp_2 = this;
                tmp_2.ed2_1 = this.xd1_1;
                this.m9_1 = 4;
                suspendResult = this.vd1_1.sd0(this.yd1_1.p4s(), this.zd1_1, this.ad2_1, this.bd2_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp3 = this.wd1_1;
                var tmp4 = this.xd1_1;
                var value = this.yd1_1;
                tmp3.n2(tmp4, value);
                this.m9_1 = 5;
                continue $sm;
              }
            } else {
              var tmp_3 = this.cd2_1;
              if (tmp_3 instanceof JsonObject) {
                var tmp_4 = this;
                tmp_4.fd2_1 = get_jsonObject(this.yd1_1);
                this.gd2_1 = this.fd2_1;
                var tmp_5 = this;
                tmp_5.hd2_1 = this.gd2_1.x().p();
                this.m9_1 = 1;
                continue $sm;
              } else {
                var tmp_6 = this.cd2_1;
                if (tmp_6 instanceof JsonArray) {
                  if (!this.wd1_1.i2(this.xd1_1)) {
                    var tmp8 = this.wd1_1;
                    var tmp9 = this.xd1_1;
                    var value_0 = new JsonArray(emptyList());
                    tmp8.n2(tmp9, value_0);
                  }
                  var tmp_7 = this.wd1_1.k2(this.xd1_1);
                  if (tmp_7 instanceof JsonArray) {
                    var tmp13 = this.wd1_1;
                    var tmp14 = this.xd1_1;
                    var this_0 = toMutableList(get_jsonArray(ensureNotNull(this.wd1_1.k2(this.xd1_1))));
                    this_0.t(toList(this.yd1_1));
                    var value_1 = new JsonArray(this_0);
                    tmp13.n2(tmp14, value_1);
                  } else {
                    var tmp16 = this.wd1_1;
                    var tmp17 = this.xd1_1;
                    var value_2 = this.yd1_1;
                    tmp16.n2(tmp17, value_2);
                  }
                  this.m9_1 = 6;
                  continue $sm;
                } else {
                  this.vd1_1.ics_1.j6e(CredentialDataMergeUtils$patch$lambda(this.yd1_1));
                  this.m9_1 = 6;
                  continue $sm;
                }
              }
            }

          case 1:
            if (!this.hd2_1.q()) {
              this.m9_1 = 3;
              continue $sm;
            }

            this.id2_1 = this.hd2_1.r();
            var tmp_8 = this;
            tmp_8.jd2_1 = this.id2_1;
            this.kd2_1 = this.jd2_1;
            var tmp_9 = this;
            tmp_9.ld2_1 = this.kd2_1.y();
            var tmp_10 = this;
            tmp_10.md2_1 = this.kd2_1.z();
            if (!this.wd1_1.i2(this.xd1_1)) {
              var tmp2 = this.wd1_1;
              var tmp3_0 = this.xd1_1;
              var value_3 = new JsonObject(emptyMap());
              tmp2.n2(tmp3_0, value_3);
            }

            var tmp_11 = this;
            var this_1 = this.wd1_1;
            var tmp_12;
            try {
              var tmp0_safe_receiver = this_1.k2(this.xd1_1);
              var value_4 = tmp0_safe_receiver == null ? null : get_jsonObject(tmp0_safe_receiver);
              tmp_12 = _Result___init__impl__xyqfz8(value_4);
            } catch ($p) {
              var tmp_13;
              if ($p instanceof Error) {
                var e = $p;
                tmp_13 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p;
              }
              tmp_12 = tmp_13;
            }

            var this_2 = tmp_12;
            var exception = Result__exceptionOrNull_impl_p6xea9(this_2);
            var tmp_14;
            if (exception == null) {
              var tmp_15 = _Result___get_value__impl__bjfvqg(this_2);
              tmp_14 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
            } else {
              throw IllegalArgumentException_init_$Create$_0('Invalid mapping for credential, when processing "' + this.xd1_1 + '": ' + exception.message, exception);
            }

            var tmp0_elvis_lhs = tmp_14;
            var tmp_16;
            if (tmp0_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('This key does not exist to map to: ' + this.xd1_1);
            } else {
              tmp_16 = tmp0_elvis_lhs;
            }

            tmp_11.nd2_1 = tmp_16;
            var tmp_17 = this;
            tmp_17.od2_1 = this.wd1_1;
            var tmp_18 = this;
            tmp_18.pd2_1 = this.xd1_1;
            this.m9_1 = 2;
            suspendResult = CredentialDataMergeUtils_getInstance().ed0(toMutableMap(this.nd2_1), this.ld2_1, this.md2_1, this.zd1_1, this.ad2_1, this.bd2_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var tmp11 = new JsonObject(ARGUMENT);
            var this_3 = this.od2_1;
            var key = this.pd2_1;
            this_3.n2(key, tmp11);
            this.m9_1 = 1;
            continue $sm;
          case 3:
            this.m9_1 = 6;
            continue $sm;
          case 4:
            var tmp2_0 = suspendResult;
            var this_4 = this.dd2_1;
            var key_0 = this.ed2_1;
            this_4.n2(key_0, tmp2_0);
            this.m9_1 = 5;
            continue $sm;
          case 5:
            this.m9_1 = 6;
            continue $sm;
          case 6:
            return this.wd1_1;
          case 7:
            throw this.p9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.n9_1 === 7) {
          throw e_0;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($patchCOROUTINE$10)['<set-state>'] = protoOf($patchCOROUTINE$10).t9;
  protoOf($patchCOROUTINE$10)['<get-state>'] = protoOf($patchCOROUTINE$10).u9;
  protoOf($patchCOROUTINE$10)['<set-exceptionState>'] = protoOf($patchCOROUTINE$10).v9;
  protoOf($patchCOROUTINE$10)['<get-exceptionState>'] = protoOf($patchCOROUTINE$10).w9;
  protoOf($patchCOROUTINE$10)['<set-result>'] = protoOf($patchCOROUTINE$10).x9;
  protoOf($patchCOROUTINE$10)['<get-result>'] = protoOf($patchCOROUTINE$10).y9;
  protoOf($patchCOROUTINE$10)['<set-exception>'] = protoOf($patchCOROUTINE$10).z9;
  protoOf($patchCOROUTINE$10)['<get-exception>'] = protoOf($patchCOROUTINE$10).aa;
  protoOf($patchCOROUTINE$10)['<set-finallyPath>'] = protoOf($patchCOROUTINE$10).ba;
  protoOf($patchCOROUTINE$10)['<get-finallyPath>'] = protoOf($patchCOROUTINE$10).ca;
  protoOf($patchCOROUTINE$10)['<get-context>'] = protoOf($patchCOROUTINE$10).s9;
  function $mergeWithMappingCOROUTINE$11(_this__u8e3s4, _this__u8e3s4_0, mapping, context, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.yd2_1 = _this__u8e3s4;
    this.zd2_1 = _this__u8e3s4_0;
    this.ad3_1 = mapping;
    this.bd3_1 = context;
    this.cd3_1 = data;
  }
  protoOf($mergeWithMappingCOROUTINE$11).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 6;
            this.dd3_1 = toMutableMap(this.zd2_1);
            this.ed3_1 = HashMap_init_$Create$();
            this.fd3_1 = HashMap_init_$Create$();
            var tmp_0 = this;
            tmp_0.gd3_1 = this.ad3_1;
            this.hd3_1 = this.gd3_1;
            var tmp_1 = this;
            tmp_1.id3_1 = this.hd3_1.x().p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.id3_1.q()) {
              this.m9_1 = 5;
              continue $sm;
            }

            this.jd3_1 = this.id3_1.r();
            var tmp_2 = this;
            tmp_2.kd3_1 = this.jd3_1;
            this.ld3_1 = this.kd3_1;
            var tmp_3 = this;
            tmp_3.md3_1 = this.ld3_1.y();
            var tmp_4 = this;
            tmp_4.nd3_1 = this.ld3_1.z();
            if (!startsWith(this.md3_1, 'jwt:')) {
              this.m9_1 = 3;
              suspendResult = CredentialDataMergeUtils_getInstance().ed0(this.dd3_1, this.md3_1, this.nd3_1, this.cd3_1, this.bd3_1, this.fd3_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_5 = this;
              tmp_5.pd3_1 = this.ed3_1;
              var tmp_6 = this;
              tmp_6.qd3_1 = this.md3_1;
              this.m9_1 = 2;
              suspendResult = CredentialDataMergeUtils_getInstance().sd0(get_jsonPrimitive(this.nd3_1).p4s(), this.cd3_1, this.bd3_1, this.fd3_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var tmp4 = suspendResult;
            var tmp_7 = this;
            var this_0 = this.pd3_1;
            var key = this.qd3_1;
            this_0.n2(key, tmp4);
            tmp_7.od3_1 = Unit_instance;
            this.m9_1 = 4;
            continue $sm;
          case 3:
            this.od3_1 = suspendResult;
            this.m9_1 = 4;
            continue $sm;
          case 4:
            this.m9_1 = 1;
            continue $sm;
          case 5:
            return new MergeResult(new W3CVC(this.dd3_1), this.ed3_1);
          case 6:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 6) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($mergeWithMappingCOROUTINE$11)['<set-state>'] = protoOf($mergeWithMappingCOROUTINE$11).t9;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-state>'] = protoOf($mergeWithMappingCOROUTINE$11).u9;
  protoOf($mergeWithMappingCOROUTINE$11)['<set-exceptionState>'] = protoOf($mergeWithMappingCOROUTINE$11).v9;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-exceptionState>'] = protoOf($mergeWithMappingCOROUTINE$11).w9;
  protoOf($mergeWithMappingCOROUTINE$11)['<set-result>'] = protoOf($mergeWithMappingCOROUTINE$11).x9;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-result>'] = protoOf($mergeWithMappingCOROUTINE$11).y9;
  protoOf($mergeWithMappingCOROUTINE$11)['<set-exception>'] = protoOf($mergeWithMappingCOROUTINE$11).z9;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-exception>'] = protoOf($mergeWithMappingCOROUTINE$11).aa;
  protoOf($mergeWithMappingCOROUTINE$11)['<set-finallyPath>'] = protoOf($mergeWithMappingCOROUTINE$11).ba;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-finallyPath>'] = protoOf($mergeWithMappingCOROUTINE$11).ca;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-context>'] = protoOf($mergeWithMappingCOROUTINE$11).s9;
  function $mergeSDJwtVCPayloadWithMappingCOROUTINE$12(_this__u8e3s4, _this__u8e3s4_0, mapping, context, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.zd3_1 = _this__u8e3s4;
    this.ad4_1 = _this__u8e3s4_0;
    this.bd4_1 = mapping;
    this.cd4_1 = context;
    this.dd4_1 = data;
  }
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 6;
            this.ed4_1 = toMutableMap(this.ad4_1);
            this.fd4_1 = HashMap_init_$Create$();
            var tmp_0 = this;
            tmp_0.gd4_1 = this.bd4_1;
            this.hd4_1 = this.gd4_1;
            var tmp_1 = this;
            tmp_1.id4_1 = this.hd4_1.x().p();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.id4_1.q()) {
              this.m9_1 = 5;
              continue $sm;
            }

            this.jd4_1 = this.id4_1.r();
            var tmp_2 = this;
            tmp_2.kd4_1 = this.jd4_1;
            this.ld4_1 = this.kd4_1;
            var tmp_3 = this;
            tmp_3.md4_1 = this.ld4_1.y();
            var tmp_4 = this;
            tmp_4.nd4_1 = this.ld4_1.z();
            if (!startsWith(this.md4_1, 'jwt:')) {
              this.m9_1 = 3;
              suspendResult = CredentialDataMergeUtils_getInstance().ed0(this.ed4_1, this.md4_1, this.nd4_1, this.dd4_1, this.cd4_1, this.fd4_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_5 = this;
              tmp_5.pd4_1 = this.ed4_1;
              var tmp_6 = this;
              tmp_6.qd4_1 = removePrefix(this.md4_1, 'jwt:');
              this.m9_1 = 2;
              suspendResult = CredentialDataMergeUtils_getInstance().sd0(get_jsonPrimitive(this.nd4_1).p4s(), this.dd4_1, this.cd4_1, this.fd4_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var tmp4 = suspendResult;
            var tmp_7 = this;
            var this_0 = this.pd4_1;
            var key = this.qd4_1;
            this_0.n2(key, tmp4);
            tmp_7.od4_1 = Unit_instance;
            this.m9_1 = 4;
            continue $sm;
          case 3:
            this.od4_1 = suspendResult;
            this.m9_1 = 4;
            continue $sm;
          case 4:
            this.m9_1 = 1;
            continue $sm;
          case 5:
            return JsonUtils_getInstance().toJsonObject(this.ed4_1);
          case 6:
            throw this.p9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.n9_1 === 6) {
          throw e;
        } else {
          this.m9_1 = this.n9_1;
          this.p9_1 = e;
        }
      }
     while (true);
  };
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<set-state>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).t9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-state>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).u9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<set-exceptionState>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).v9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-exceptionState>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).w9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<set-result>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).x9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-result>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).y9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<set-exception>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).z9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-exception>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).aa;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<set-finallyPath>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).ba;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-finallyPath>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).ca;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-context>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).s9;
  function CredentialDataMergeUtils() {
    CredentialDataMergeUtils_instance = this;
    var tmp = this;
    var tmp_0 = KotlinLogging_instance;
    tmp.ics_1 = tmp_0.q6e(CredentialDataMergeUtils$log$lambda);
  }
  protoOf(CredentialDataMergeUtils).isTemplate = function (_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    var it = _this__u8e3s4.p4s();
    return first_0(it) === _Char___init__impl__6a9atx(60) && last(it) === _Char___init__impl__6a9atx(62) && it.length > 2 && !contains(it, ' ');
  };
  protoOf(CredentialDataMergeUtils).sd0 = function (functionCall, dataFunctions, context, functionHistory, $completion) {
    var tmp = new $getTemplateDataCOROUTINE$9(this, functionCall, dataFunctions, context, functionHistory, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(CredentialDataMergeUtils).ed0 = function (_this__u8e3s4, k, v, dataFunctions, context, functionHistory, $completion) {
    var tmp = new $patchCOROUTINE$10(this, _this__u8e3s4, k, v, dataFunctions, context, functionHistory, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(CredentialDataMergeUtils).jcs = function (_this__u8e3s4, mapping, context, data, $completion) {
    var tmp = new $mergeWithMappingCOROUTINE$11(this, _this__u8e3s4, mapping, context, data, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(CredentialDataMergeUtils).bcz = function (_this__u8e3s4, mapping, context, data, $completion) {
    var tmp = new $mergeSDJwtVCPayloadWithMappingCOROUTINE$12(this, _this__u8e3s4, mapping, context, data, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(CredentialDataMergeUtils).rd4 = function (_this__u8e3s4, mapping, context, data) {
    var tmp = CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda_0(_this__u8e3s4, mapping, context, data, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(CredentialDataMergeUtils).sd4 = function (_this__u8e3s4, mapping, context, data) {
    var tmp = CredentialDataMergeUtils$mergeWithMappingAsync$slambda_0(_this__u8e3s4, mapping, context, data, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(CredentialDataMergeUtils).td4 = function (_this__u8e3s4, k, v, dataFunctions, context, functionHistory) {
    var tmp = CredentialDataMergeUtils$patchAsync$slambda_0(_this__u8e3s4, k, v, dataFunctions, context, functionHistory, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(CredentialDataMergeUtils).ud4 = function (functionCall, dataFunctions, context, functionHistory) {
    var tmp = CredentialDataMergeUtils$getTemplateDataAsync$slambda_0(functionCall, dataFunctions, context, functionHistory, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  var CredentialDataMergeUtils_instance;
  function CredentialDataMergeUtils_getInstance() {
    if (CredentialDataMergeUtils_instance == null)
      new CredentialDataMergeUtils();
    return CredentialDataMergeUtils_instance;
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
  function W3CVcUtils() {
  }
  protoOf(W3CVcUtils).overwrite = function (_this__u8e3s4, map) {
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableMap(_this__u8e3s4.toJsonObject());
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = map.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var k = element.y();
      // Inline function 'kotlin.collections.component2' call
      var v = element.z();
      // Inline function 'kotlin.collections.set' call
      this_0.n2(k, v);
    }
    return new W3CVC(this_0);
  };
  protoOf(W3CVcUtils).update = function (_this__u8e3s4, key, map) {
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableMap(_this__u8e3s4);
    // Inline function 'kotlin.apply' call
    var this_1 = toMutableMap(get_jsonObject(ensureNotNull(this_0.k2(key))));
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = map.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var k = element.y();
      // Inline function 'kotlin.collections.component2' call
      var v = element.z();
      // Inline function 'kotlin.collections.set' call
      this_1.n2(k, v);
    }
    // Inline function 'kotlin.collections.set' call
    var value = new JsonObject(this_1);
    this_0.n2(key, value);
    return new W3CVC(this_0);
  };
  var W3CVcUtils_instance;
  function W3CVcUtils_getInstance() {
    return W3CVcUtils_instance;
  }
  function CredentialDataModel$Companion$w3cJson$lambda($this$Json) {
    $this$Json.w4q_1 = false;
    return Unit_instance;
  }
  function Companion_2() {
    Companion_instance_4 = this;
    var tmp = this;
    tmp.vd4_1 = Json(VOID, CredentialDataModel$Companion$w3cJson$lambda);
  }
  var Companion_instance_4;
  function Companion_getInstance_7() {
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  function CredentialDataModel() {
  }
  function Companion_3() {
  }
  protoOf(Companion_3).l4s = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_5;
  function Companion_getInstance_8() {
    return Companion_instance_5;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.w3c.vc.vcs.W3CBaseDataModels.TermsOfUse', this, 2);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('type', false);
    this.wd4_1 = tmp0_serialDesc;
  }
  protoOf($serializer).xd4 = function (encoder, value) {
    var tmp0_desc = this.wd4_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.id);
    tmp1_output.v23(tmp0_desc, 1, value.type);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer).u1y = function (encoder, value) {
    return this.xd4(encoder, value instanceof TermsOfUse ? value : THROW_CCE());
  };
  protoOf($serializer).v1y = function (decoder) {
    var tmp0_desc = this.wd4_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.g22(tmp0_desc);
    if (tmp6_input.w22()) {
      tmp4_local0 = tmp6_input.q22(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.q22(tmp0_desc, 1);
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
            tmp5_local1 = tmp6_input.q22(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.h22(tmp0_desc);
    return TermsOfUse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).t1y = function () {
    return this.wd4_1;
  };
  protoOf($serializer).l2a = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function TermsOfUse_init_$Init$(seen0, id, type, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance().wd4_1);
    }
    $this.id = id;
    $this.type = type;
    return $this;
  }
  function TermsOfUse_init_$Create$(seen0, id, type, serializationConstructorMarker) {
    return TermsOfUse_init_$Init$(seen0, id, type, serializationConstructorMarker, objectCreate(protoOf(TermsOfUse)));
  }
  function Companion_4() {
  }
  protoOf(Companion_4).l4s = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_6;
  function Companion_getInstance_9() {
    return Companion_instance_6;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.w3c.vc.vcs.W3CBaseDataModels.CredentialStatus', this, 5);
    tmp0_serialDesc.w29('id', false);
    tmp0_serialDesc.w29('type', false);
    tmp0_serialDesc.w29('statusPurpose', false);
    tmp0_serialDesc.w29('statusListIndex', false);
    tmp0_serialDesc.w29('statusListCredential', false);
    this.yd4_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).zd4 = function (encoder, value) {
    var tmp0_desc = this.yd4_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.id);
    tmp1_output.v23(tmp0_desc, 1, value.type);
    tmp1_output.v23(tmp0_desc, 2, value.statusPurpose);
    tmp1_output.v23(tmp0_desc, 3, value.statusListIndex);
    tmp1_output.v23(tmp0_desc, 4, value.statusListCredential);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_0).u1y = function (encoder, value) {
    return this.zd4(encoder, value instanceof CredentialStatus ? value : THROW_CCE());
  };
  protoOf($serializer_0).v1y = function (decoder) {
    var tmp0_desc = this.yd4_1;
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
      tmp6_local2 = tmp9_input.q22(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.q22(tmp0_desc, 3);
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
            tmp6_local2 = tmp9_input.q22(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.q22(tmp0_desc, 3);
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
    return CredentialStatus_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_0).t1y = function () {
    return this.yd4_1;
  };
  protoOf($serializer_0).l2a = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function CredentialStatus_init_$Init$(seen0, id, type, statusPurpose, statusListIndex, statusListCredential, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen0))) {
      throwMissingFieldException(seen0, 31, $serializer_getInstance_0().yd4_1);
    }
    $this.id = id;
    $this.type = type;
    $this.statusPurpose = statusPurpose;
    $this.statusListIndex = statusListIndex;
    $this.statusListCredential = statusListCredential;
    return $this;
  }
  function CredentialStatus_init_$Create$(seen0, id, type, statusPurpose, statusListIndex, statusListCredential, serializationConstructorMarker) {
    return CredentialStatus_init_$Init$(seen0, id, type, statusPurpose, statusListIndex, statusListCredential, serializationConstructorMarker, objectCreate(protoOf(CredentialStatus)));
  }
  function TermsOfUse(id, type) {
    this.id = id;
    this.type = type;
  }
  protoOf(TermsOfUse).w69 = function () {
    return this.id;
  };
  protoOf(TermsOfUse).t9y = function () {
    return this.type;
  };
  protoOf(TermsOfUse).cc = function () {
    return this.id;
  };
  protoOf(TermsOfUse).dc = function () {
    return this.type;
  };
  protoOf(TermsOfUse).ad5 = function (id, type) {
    return new TermsOfUse(id, type);
  };
  protoOf(TermsOfUse).copy = function (id, type, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    return $super === VOID ? this.ad5(id, type) : $super.ad5.call(this, id, type);
  };
  protoOf(TermsOfUse).toString = function () {
    return 'TermsOfUse(id=' + this.id + ', type=' + this.type + ')';
  };
  protoOf(TermsOfUse).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + getStringHashCode(this.type) | 0;
    return result;
  };
  protoOf(TermsOfUse).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TermsOfUse))
      return false;
    var tmp0_other_with_cast = other instanceof TermsOfUse ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!(this.type === tmp0_other_with_cast.type))
      return false;
    return true;
  };
  function CredentialStatus(id, type, statusPurpose, statusListIndex, statusListCredential) {
    this.id = id;
    this.type = type;
    this.statusPurpose = statusPurpose;
    this.statusListIndex = statusListIndex;
    this.statusListCredential = statusListCredential;
  }
  protoOf(CredentialStatus).w69 = function () {
    return this.id;
  };
  protoOf(CredentialStatus).t9y = function () {
    return this.type;
  };
  protoOf(CredentialStatus).bd5 = function () {
    return this.statusPurpose;
  };
  protoOf(CredentialStatus).cd5 = function () {
    return this.statusListIndex;
  };
  protoOf(CredentialStatus).dd5 = function () {
    return this.statusListCredential;
  };
  protoOf(CredentialStatus).cc = function () {
    return this.id;
  };
  protoOf(CredentialStatus).dc = function () {
    return this.type;
  };
  protoOf(CredentialStatus).qp = function () {
    return this.statusPurpose;
  };
  protoOf(CredentialStatus).j6y = function () {
    return this.statusListIndex;
  };
  protoOf(CredentialStatus).q7i = function () {
    return this.statusListCredential;
  };
  protoOf(CredentialStatus).ed5 = function (id, type, statusPurpose, statusListIndex, statusListCredential) {
    return new CredentialStatus(id, type, statusPurpose, statusListIndex, statusListCredential);
  };
  protoOf(CredentialStatus).copy = function (id, type, statusPurpose, statusListIndex, statusListCredential, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    statusPurpose = statusPurpose === VOID ? this.statusPurpose : statusPurpose;
    statusListIndex = statusListIndex === VOID ? this.statusListIndex : statusListIndex;
    statusListCredential = statusListCredential === VOID ? this.statusListCredential : statusListCredential;
    return $super === VOID ? this.ed5(id, type, statusPurpose, statusListIndex, statusListCredential) : $super.ed5.call(this, id, type, statusPurpose, statusListIndex, statusListCredential);
  };
  protoOf(CredentialStatus).toString = function () {
    return 'CredentialStatus(id=' + this.id + ', type=' + this.type + ', statusPurpose=' + this.statusPurpose + ', statusListIndex=' + this.statusListIndex + ', statusListCredential=' + this.statusListCredential + ')';
  };
  protoOf(CredentialStatus).hashCode = function () {
    var result = getStringHashCode(this.id);
    result = imul(result, 31) + getStringHashCode(this.type) | 0;
    result = imul(result, 31) + getStringHashCode(this.statusPurpose) | 0;
    result = imul(result, 31) + getStringHashCode(this.statusListIndex) | 0;
    result = imul(result, 31) + getStringHashCode(this.statusListCredential) | 0;
    return result;
  };
  protoOf(CredentialStatus).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CredentialStatus))
      return false;
    var tmp0_other_with_cast = other instanceof CredentialStatus ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    if (!(this.type === tmp0_other_with_cast.type))
      return false;
    if (!(this.statusPurpose === tmp0_other_with_cast.statusPurpose))
      return false;
    if (!(this.statusListIndex === tmp0_other_with_cast.statusListIndex))
      return false;
    if (!(this.statusListCredential === tmp0_other_with_cast.statusListCredential))
      return false;
    return true;
  };
  function W3CBaseDataModels() {
  }
  var W3CBaseDataModels_instance;
  function W3CBaseDataModels_getInstance() {
    return W3CBaseDataModels_instance;
  }
  function W3CMetadata() {
  }
  function W3CV11DataModel$Companion$$childSerializers$_anonymous__vb92ey() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function W3CV11DataModel$Companion$$childSerializers$_anonymous__vb92ey_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_5() {
  }
  protoOf(Companion_5).l4s = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    return Companion_instance_7;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.w3c.vc.vcs.W3CV11DataModel.CredentialSubject', this, 1);
    tmp0_serialDesc.w29('id', false);
    this.gd5_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).hd5 = function (encoder, value) {
    var tmp0_desc = this.gd5_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.id);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_1).u1y = function (encoder, value) {
    return this.hd5(encoder, value instanceof CredentialSubject ? value : THROW_CCE());
  };
  protoOf($serializer_1).v1y = function (decoder) {
    var tmp0_desc = this.gd5_1;
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
    return CredentialSubject_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_1).t1y = function () {
    return this.gd5_1;
  };
  protoOf($serializer_1).l2a = function () {
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
  function CredentialSubject_init_$Init$(seen0, id, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_1().gd5_1);
    }
    $this.id = id;
    return $this;
  }
  function CredentialSubject_init_$Create$(seen0, id, serializationConstructorMarker) {
    return CredentialSubject_init_$Init$(seen0, id, serializationConstructorMarker, objectCreate(protoOf(CredentialSubject)));
  }
  function Companion_6() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, W3CV11DataModel$Companion$$childSerializers$_anonymous__vb92ey);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.vcb_1 = [tmp_1, lazy(tmp_2, W3CV11DataModel$Companion$$childSerializers$_anonymous__vb92ey_0), null, null, null, null, null, null, null];
    this.wcb_1 = listOf('https://www.w3.org/2018/credentials/v1');
  }
  protoOf(Companion_6).fd5 = function () {
    return this.wcb_1;
  };
  protoOf(Companion_6).l4s = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_8;
  function Companion_getInstance_11() {
    if (Companion_instance_8 == null)
      new Companion_6();
    return Companion_instance_8;
  }
  function CredentialSubject(id) {
    this.id = id;
  }
  protoOf(CredentialSubject).w69 = function () {
    return this.id;
  };
  protoOf(CredentialSubject).cc = function () {
    return this.id;
  };
  protoOf(CredentialSubject).za0 = function (id) {
    return new CredentialSubject(id);
  };
  protoOf(CredentialSubject).copy = function (id, $super) {
    id = id === VOID ? this.id : id;
    return $super === VOID ? this.za0(id) : $super.za0.call(this, id);
  };
  protoOf(CredentialSubject).toString = function () {
    return 'CredentialSubject(id=' + this.id + ')';
  };
  protoOf(CredentialSubject).hashCode = function () {
    return getStringHashCode(this.id);
  };
  protoOf(CredentialSubject).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CredentialSubject))
      return false;
    var tmp0_other_with_cast = other instanceof CredentialSubject ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    return true;
  };
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.w3c.vc.vcs.W3CV11DataModel', this, 9);
    tmp0_serialDesc.w29('@context', true);
    tmp0_serialDesc.w29('type', true);
    tmp0_serialDesc.w29('credentialSubject', false);
    tmp0_serialDesc.w29('id', true);
    tmp0_serialDesc.w29('issuer', true);
    tmp0_serialDesc.w29('issuanceDate', true);
    tmp0_serialDesc.w29('expirationDate', true);
    tmp0_serialDesc.w29('credentialStatus', true);
    tmp0_serialDesc.w29('termsOfUse', true);
    this.id5_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).jd5 = function (encoder, value) {
    var tmp0_desc = this.id5_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_11().vcb_1;
    if (tmp1_output.d24(tmp0_desc, 0) ? true : !equals(value.context, Companion_getInstance_11().wcb_1)) {
      tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    }
    if (tmp1_output.d24(tmp0_desc, 1) ? true : !equals(value.type, listOf('VerifiableCredential'))) {
      tmp1_output.x23(tmp0_desc, 1, tmp2_cached[1].z(), value.type);
    }
    tmp1_output.x23(tmp0_desc, 2, JsonObjectSerializer_getInstance(), value.credentialSubject);
    if (tmp1_output.d24(tmp0_desc, 3) ? true : !(value.id == null)) {
      tmp1_output.z23(tmp0_desc, 3, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.d24(tmp0_desc, 4) ? true : !(value.issuer == null)) {
      tmp1_output.z23(tmp0_desc, 4, StringSerializer_getInstance(), value.issuer);
    }
    if (tmp1_output.d24(tmp0_desc, 5) ? true : !(value.issuanceDate == null)) {
      tmp1_output.z23(tmp0_desc, 5, StringSerializer_getInstance(), value.issuanceDate);
    }
    if (tmp1_output.d24(tmp0_desc, 6) ? true : !(value.expirationDate == null)) {
      tmp1_output.z23(tmp0_desc, 6, StringSerializer_getInstance(), value.expirationDate);
    }
    if (tmp1_output.d24(tmp0_desc, 7) ? true : !(value.credentialStatus == null)) {
      tmp1_output.z23(tmp0_desc, 7, $serializer_getInstance_0(), value.credentialStatus);
    }
    if (tmp1_output.d24(tmp0_desc, 8) ? true : !(value.termsOfUse == null)) {
      tmp1_output.z23(tmp0_desc, 8, $serializer_getInstance(), value.termsOfUse);
    }
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_2).u1y = function (encoder, value) {
    return this.jd5(encoder, value instanceof W3CV11DataModel ? value : THROW_CCE());
  };
  protoOf($serializer_2).v1y = function (decoder) {
    var tmp0_desc = this.id5_1;
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
    var tmp14_cached = Companion_getInstance_11().vcb_1;
    if (tmp13_input.w22()) {
      tmp4_local0 = tmp13_input.s22(tmp0_desc, 0, tmp14_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.s22(tmp0_desc, 1, tmp14_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.s22(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.u22(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.u22(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.u22(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.u22(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.u22(tmp0_desc, 7, $serializer_getInstance_0(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.u22(tmp0_desc, 8, $serializer_getInstance(), tmp12_local8);
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
            tmp5_local1 = tmp13_input.s22(tmp0_desc, 1, tmp14_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.s22(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.u22(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.u22(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.u22(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.u22(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.u22(tmp0_desc, 7, $serializer_getInstance_0(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.u22(tmp0_desc, 8, $serializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.h22(tmp0_desc);
    return W3CV11DataModel_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_2).t1y = function () {
    return this.id5_1;
  };
  protoOf($serializer_2).l2a = function () {
    var tmp0_cached = Companion_getInstance_11().vcb_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].z(), tmp0_cached[1].z(), JsonObjectSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_0()), get_nullable($serializer_getInstance())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function W3CV11DataModel_init_$Init$(seen0, context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse, serializationConstructorMarker, $this) {
    if (!(4 === (4 & seen0))) {
      throwMissingFieldException(seen0, 4, $serializer_getInstance_2().id5_1);
    }
    if (0 === (seen0 & 1))
      $this.context = Companion_getInstance_11().wcb_1;
    else
      $this.context = context;
    if (0 === (seen0 & 2))
      $this.type = listOf('VerifiableCredential');
    else
      $this.type = type;
    $this.credentialSubject = credentialSubject;
    if (0 === (seen0 & 8))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 16))
      $this.issuer = null;
    else
      $this.issuer = issuer;
    if (0 === (seen0 & 32))
      $this.issuanceDate = null;
    else
      $this.issuanceDate = issuanceDate;
    if (0 === (seen0 & 64))
      $this.expirationDate = null;
    else
      $this.expirationDate = expirationDate;
    if (0 === (seen0 & 128))
      $this.credentialStatus = null;
    else
      $this.credentialStatus = credentialStatus;
    if (0 === (seen0 & 256))
      $this.termsOfUse = null;
    else
      $this.termsOfUse = termsOfUse;
    return $this;
  }
  function W3CV11DataModel_init_$Create$(seen0, context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse, serializationConstructorMarker) {
    return W3CV11DataModel_init_$Init$(seen0, context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse, serializationConstructorMarker, objectCreate(protoOf(W3CV11DataModel)));
  }
  function W3CV11DataModel(context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse) {
    Companion_getInstance_11();
    context = context === VOID ? Companion_getInstance_11().wcb_1 : context;
    type = type === VOID ? listOf('VerifiableCredential') : type;
    id = id === VOID ? null : id;
    issuer = issuer === VOID ? null : issuer;
    issuanceDate = issuanceDate === VOID ? null : issuanceDate;
    expirationDate = expirationDate === VOID ? null : expirationDate;
    credentialStatus = credentialStatus === VOID ? null : credentialStatus;
    termsOfUse = termsOfUse === VOID ? null : termsOfUse;
    this.context = context;
    this.type = type;
    this.credentialSubject = credentialSubject;
    this.id = id;
    this.issuer = issuer;
    this.issuanceDate = issuanceDate;
    this.expirationDate = expirationDate;
    this.credentialStatus = credentialStatus;
    this.termsOfUse = termsOfUse;
  }
  protoOf(W3CV11DataModel).s9 = function () {
    return this.context;
  };
  protoOf(W3CV11DataModel).t9y = function () {
    return this.type;
  };
  protoOf(W3CV11DataModel).kd5 = function () {
    return this.credentialSubject;
  };
  protoOf(W3CV11DataModel).w69 = function () {
    return this.id;
  };
  protoOf(W3CV11DataModel).ld5 = function () {
    return this.issuer;
  };
  protoOf(W3CV11DataModel).md5 = function () {
    return this.issuanceDate;
  };
  protoOf(W3CV11DataModel).nd5 = function () {
    return this.expirationDate;
  };
  protoOf(W3CV11DataModel).mcc = function () {
    return this.credentialStatus;
  };
  protoOf(W3CV11DataModel).occ = function () {
    return this.termsOfUse;
  };
  protoOf(W3CV11DataModel).encodeToJsonObject = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Companion_getInstance_7().vd4_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(W3CV11DataModel), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.e4q(tmp$ret$1, this);
    return get_jsonObject(tmp$ret$2);
  };
  protoOf(W3CV11DataModel).cc = function () {
    return this.context;
  };
  protoOf(W3CV11DataModel).dc = function () {
    return this.type;
  };
  protoOf(W3CV11DataModel).qp = function () {
    return this.credentialSubject;
  };
  protoOf(W3CV11DataModel).j6y = function () {
    return this.id;
  };
  protoOf(W3CV11DataModel).q7i = function () {
    return this.issuer;
  };
  protoOf(W3CV11DataModel).i83 = function () {
    return this.issuanceDate;
  };
  protoOf(W3CV11DataModel).j83 = function () {
    return this.expirationDate;
  };
  protoOf(W3CV11DataModel).g9z = function () {
    return this.credentialStatus;
  };
  protoOf(W3CV11DataModel).s9z = function () {
    return this.termsOfUse;
  };
  protoOf(W3CV11DataModel).od5 = function (context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse) {
    return new W3CV11DataModel(context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse);
  };
  protoOf(W3CV11DataModel).copy = function (context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse, $super) {
    context = context === VOID ? this.context : context;
    type = type === VOID ? this.type : type;
    credentialSubject = credentialSubject === VOID ? this.credentialSubject : credentialSubject;
    id = id === VOID ? this.id : id;
    issuer = issuer === VOID ? this.issuer : issuer;
    issuanceDate = issuanceDate === VOID ? this.issuanceDate : issuanceDate;
    expirationDate = expirationDate === VOID ? this.expirationDate : expirationDate;
    credentialStatus = credentialStatus === VOID ? this.credentialStatus : credentialStatus;
    termsOfUse = termsOfUse === VOID ? this.termsOfUse : termsOfUse;
    return $super === VOID ? this.od5(context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse) : $super.od5.call(this, context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse);
  };
  protoOf(W3CV11DataModel).toString = function () {
    return 'W3CV11DataModel(context=' + toString(this.context) + ', type=' + toString(this.type) + ', credentialSubject=' + this.credentialSubject.toString() + ', id=' + this.id + ', issuer=' + this.issuer + ', issuanceDate=' + this.issuanceDate + ', expirationDate=' + this.expirationDate + ', credentialStatus=' + toString_0(this.credentialStatus) + ', termsOfUse=' + toString_0(this.termsOfUse) + ')';
  };
  protoOf(W3CV11DataModel).hashCode = function () {
    var result = hashCode(this.context);
    result = imul(result, 31) + hashCode(this.type) | 0;
    result = imul(result, 31) + this.credentialSubject.hashCode() | 0;
    result = imul(result, 31) + (this.id == null ? 0 : getStringHashCode(this.id)) | 0;
    result = imul(result, 31) + (this.issuer == null ? 0 : getStringHashCode(this.issuer)) | 0;
    result = imul(result, 31) + (this.issuanceDate == null ? 0 : getStringHashCode(this.issuanceDate)) | 0;
    result = imul(result, 31) + (this.expirationDate == null ? 0 : getStringHashCode(this.expirationDate)) | 0;
    result = imul(result, 31) + (this.credentialStatus == null ? 0 : this.credentialStatus.hashCode()) | 0;
    result = imul(result, 31) + (this.termsOfUse == null ? 0 : this.termsOfUse.hashCode()) | 0;
    return result;
  };
  protoOf(W3CV11DataModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof W3CV11DataModel))
      return false;
    var tmp0_other_with_cast = other instanceof W3CV11DataModel ? other : THROW_CCE();
    if (!equals(this.context, tmp0_other_with_cast.context))
      return false;
    if (!equals(this.type, tmp0_other_with_cast.type))
      return false;
    if (!this.credentialSubject.equals(tmp0_other_with_cast.credentialSubject))
      return false;
    if (!(this.id == tmp0_other_with_cast.id))
      return false;
    if (!(this.issuer == tmp0_other_with_cast.issuer))
      return false;
    if (!(this.issuanceDate == tmp0_other_with_cast.issuanceDate))
      return false;
    if (!(this.expirationDate == tmp0_other_with_cast.expirationDate))
      return false;
    if (!equals(this.credentialStatus, tmp0_other_with_cast.credentialStatus))
      return false;
    if (!equals(this.termsOfUse, tmp0_other_with_cast.termsOfUse))
      return false;
    return true;
  };
  function W3CV2DataModel$Companion$$childSerializers$_anonymous__o18f9q() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function W3CV2DataModel$Companion$$childSerializers$_anonymous__o18f9q_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_7() {
  }
  protoOf(Companion_7).l4s = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_9;
  function Companion_getInstance_12() {
    return Companion_instance_9;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.w3c.vc.vcs.W3CV2DataModel.CredentialSubject', this, 1);
    tmp0_serialDesc.w29('id', false);
    this.pd5_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).qd5 = function (encoder, value) {
    var tmp0_desc = this.pd5_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    tmp1_output.v23(tmp0_desc, 0, value.id);
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_3).u1y = function (encoder, value) {
    return this.qd5(encoder, value instanceof CredentialSubject_0 ? value : THROW_CCE());
  };
  protoOf($serializer_3).v1y = function (decoder) {
    var tmp0_desc = this.pd5_1;
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
    return CredentialSubject_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_3).t1y = function () {
    return this.pd5_1;
  };
  protoOf($serializer_3).l2a = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function CredentialSubject_init_$Init$_0(seen0, id, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_3().pd5_1);
    }
    $this.id = id;
    return $this;
  }
  function CredentialSubject_init_$Create$_0(seen0, id, serializationConstructorMarker) {
    return CredentialSubject_init_$Init$_0(seen0, id, serializationConstructorMarker, objectCreate(protoOf(CredentialSubject_0)));
  }
  function Companion_8() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, W3CV2DataModel$Companion$$childSerializers$_anonymous__o18f9q);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xcb_1 = [tmp_1, lazy(tmp_2, W3CV2DataModel$Companion$$childSerializers$_anonymous__o18f9q_0), null, null, null, null, null, null, null];
    this.ycb_1 = listOf('https://www.w3.org/ns/credentials/v2');
  }
  protoOf(Companion_8).fd5 = function () {
    return this.ycb_1;
  };
  protoOf(Companion_8).l4s = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_10;
  function Companion_getInstance_13() {
    if (Companion_instance_10 == null)
      new Companion_8();
    return Companion_instance_10;
  }
  function CredentialSubject_0(id) {
    this.id = id;
  }
  protoOf(CredentialSubject_0).w69 = function () {
    return this.id;
  };
  protoOf(CredentialSubject_0).cc = function () {
    return this.id;
  };
  protoOf(CredentialSubject_0).za0 = function (id) {
    return new CredentialSubject_0(id);
  };
  protoOf(CredentialSubject_0).copy = function (id, $super) {
    id = id === VOID ? this.id : id;
    return $super === VOID ? this.za0(id) : $super.za0.call(this, id);
  };
  protoOf(CredentialSubject_0).toString = function () {
    return 'CredentialSubject(id=' + this.id + ')';
  };
  protoOf(CredentialSubject_0).hashCode = function () {
    return getStringHashCode(this.id);
  };
  protoOf(CredentialSubject_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CredentialSubject_0))
      return false;
    var tmp0_other_with_cast = other instanceof CredentialSubject_0 ? other : THROW_CCE();
    if (!(this.id === tmp0_other_with_cast.id))
      return false;
    return true;
  };
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.w3c.vc.vcs.W3CV2DataModel', this, 9);
    tmp0_serialDesc.w29('@context', true);
    tmp0_serialDesc.w29('type', true);
    tmp0_serialDesc.w29('credentialSubject', false);
    tmp0_serialDesc.w29('id', true);
    tmp0_serialDesc.w29('issuer', true);
    tmp0_serialDesc.w29('validFrom', true);
    tmp0_serialDesc.w29('validUntil', true);
    tmp0_serialDesc.w29('credentialStatus', true);
    tmp0_serialDesc.w29('termsOfUse', true);
    this.rd5_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).sd5 = function (encoder, value) {
    var tmp0_desc = this.rd5_1;
    var tmp1_output = encoder.g22(tmp0_desc);
    var tmp2_cached = Companion_getInstance_13().xcb_1;
    if (tmp1_output.d24(tmp0_desc, 0) ? true : !equals(value.context, Companion_getInstance_13().ycb_1)) {
      tmp1_output.x23(tmp0_desc, 0, tmp2_cached[0].z(), value.context);
    }
    if (tmp1_output.d24(tmp0_desc, 1) ? true : !equals(value.type, listOf('VerifiableCredential'))) {
      tmp1_output.x23(tmp0_desc, 1, tmp2_cached[1].z(), value.type);
    }
    tmp1_output.x23(tmp0_desc, 2, JsonObjectSerializer_getInstance(), value.credentialSubject);
    if (tmp1_output.d24(tmp0_desc, 3) ? true : !(value.id == null)) {
      tmp1_output.z23(tmp0_desc, 3, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.d24(tmp0_desc, 4) ? true : !(value.issuer == null)) {
      tmp1_output.z23(tmp0_desc, 4, StringSerializer_getInstance(), value.issuer);
    }
    if (tmp1_output.d24(tmp0_desc, 5) ? true : !(value.validFrom == null)) {
      tmp1_output.z23(tmp0_desc, 5, StringSerializer_getInstance(), value.validFrom);
    }
    if (tmp1_output.d24(tmp0_desc, 6) ? true : !(value.validUntil == null)) {
      tmp1_output.z23(tmp0_desc, 6, StringSerializer_getInstance(), value.validUntil);
    }
    if (tmp1_output.d24(tmp0_desc, 7) ? true : !(value.credentialStatus == null)) {
      tmp1_output.z23(tmp0_desc, 7, $serializer_getInstance_0(), value.credentialStatus);
    }
    if (tmp1_output.d24(tmp0_desc, 8) ? true : !(value.termsOfUse == null)) {
      tmp1_output.z23(tmp0_desc, 8, $serializer_getInstance(), value.termsOfUse);
    }
    tmp1_output.h22(tmp0_desc);
  };
  protoOf($serializer_4).u1y = function (encoder, value) {
    return this.sd5(encoder, value instanceof W3CV2DataModel ? value : THROW_CCE());
  };
  protoOf($serializer_4).v1y = function (decoder) {
    var tmp0_desc = this.rd5_1;
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
    var tmp14_cached = Companion_getInstance_13().xcb_1;
    if (tmp13_input.w22()) {
      tmp4_local0 = tmp13_input.s22(tmp0_desc, 0, tmp14_cached[0].z(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.s22(tmp0_desc, 1, tmp14_cached[1].z(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.s22(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.u22(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.u22(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.u22(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.u22(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.u22(tmp0_desc, 7, $serializer_getInstance_0(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.u22(tmp0_desc, 8, $serializer_getInstance(), tmp12_local8);
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
            tmp5_local1 = tmp13_input.s22(tmp0_desc, 1, tmp14_cached[1].z(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.s22(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.u22(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.u22(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.u22(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.u22(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.u22(tmp0_desc, 7, $serializer_getInstance_0(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.u22(tmp0_desc, 8, $serializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.h22(tmp0_desc);
    return W3CV2DataModel_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_4).t1y = function () {
    return this.rd5_1;
  };
  protoOf($serializer_4).l2a = function () {
    var tmp0_cached = Companion_getInstance_13().xcb_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].z(), tmp0_cached[1].z(), JsonObjectSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_0()), get_nullable($serializer_getInstance())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function W3CV2DataModel_init_$Init$(seen0, context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse, serializationConstructorMarker, $this) {
    if (!(4 === (4 & seen0))) {
      throwMissingFieldException(seen0, 4, $serializer_getInstance_4().rd5_1);
    }
    if (0 === (seen0 & 1))
      $this.context = Companion_getInstance_13().ycb_1;
    else
      $this.context = context;
    if (0 === (seen0 & 2))
      $this.type = listOf('VerifiableCredential');
    else
      $this.type = type;
    $this.credentialSubject = credentialSubject;
    if (0 === (seen0 & 8))
      $this.id = null;
    else
      $this.id = id;
    if (0 === (seen0 & 16))
      $this.issuer = null;
    else
      $this.issuer = issuer;
    if (0 === (seen0 & 32))
      $this.validFrom = null;
    else
      $this.validFrom = validFrom;
    if (0 === (seen0 & 64))
      $this.validUntil = null;
    else
      $this.validUntil = validUntil;
    if (0 === (seen0 & 128))
      $this.credentialStatus = null;
    else
      $this.credentialStatus = credentialStatus;
    if (0 === (seen0 & 256))
      $this.termsOfUse = null;
    else
      $this.termsOfUse = termsOfUse;
    return $this;
  }
  function W3CV2DataModel_init_$Create$(seen0, context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse, serializationConstructorMarker) {
    return W3CV2DataModel_init_$Init$(seen0, context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse, serializationConstructorMarker, objectCreate(protoOf(W3CV2DataModel)));
  }
  function W3CV2DataModel(context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse) {
    Companion_getInstance_13();
    context = context === VOID ? Companion_getInstance_13().ycb_1 : context;
    type = type === VOID ? listOf('VerifiableCredential') : type;
    id = id === VOID ? null : id;
    issuer = issuer === VOID ? null : issuer;
    validFrom = validFrom === VOID ? null : validFrom;
    validUntil = validUntil === VOID ? null : validUntil;
    credentialStatus = credentialStatus === VOID ? null : credentialStatus;
    termsOfUse = termsOfUse === VOID ? null : termsOfUse;
    this.context = context;
    this.type = type;
    this.credentialSubject = credentialSubject;
    this.id = id;
    this.issuer = issuer;
    this.validFrom = validFrom;
    this.validUntil = validUntil;
    this.credentialStatus = credentialStatus;
    this.termsOfUse = termsOfUse;
  }
  protoOf(W3CV2DataModel).s9 = function () {
    return this.context;
  };
  protoOf(W3CV2DataModel).t9y = function () {
    return this.type;
  };
  protoOf(W3CV2DataModel).kd5 = function () {
    return this.credentialSubject;
  };
  protoOf(W3CV2DataModel).w69 = function () {
    return this.id;
  };
  protoOf(W3CV2DataModel).ld5 = function () {
    return this.issuer;
  };
  protoOf(W3CV2DataModel).icc = function () {
    return this.validFrom;
  };
  protoOf(W3CV2DataModel).kcc = function () {
    return this.validUntil;
  };
  protoOf(W3CV2DataModel).mcc = function () {
    return this.credentialStatus;
  };
  protoOf(W3CV2DataModel).occ = function () {
    return this.termsOfUse;
  };
  protoOf(W3CV2DataModel).encodeToJsonObject = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Companion_getInstance_7().vd4_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(W3CV2DataModel), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.e4q(tmp$ret$1, this);
    return get_jsonObject(tmp$ret$2);
  };
  protoOf(W3CV2DataModel).cc = function () {
    return this.context;
  };
  protoOf(W3CV2DataModel).dc = function () {
    return this.type;
  };
  protoOf(W3CV2DataModel).qp = function () {
    return this.credentialSubject;
  };
  protoOf(W3CV2DataModel).j6y = function () {
    return this.id;
  };
  protoOf(W3CV2DataModel).q7i = function () {
    return this.issuer;
  };
  protoOf(W3CV2DataModel).i83 = function () {
    return this.validFrom;
  };
  protoOf(W3CV2DataModel).j83 = function () {
    return this.validUntil;
  };
  protoOf(W3CV2DataModel).g9z = function () {
    return this.credentialStatus;
  };
  protoOf(W3CV2DataModel).s9z = function () {
    return this.termsOfUse;
  };
  protoOf(W3CV2DataModel).od5 = function (context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse) {
    return new W3CV2DataModel(context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse);
  };
  protoOf(W3CV2DataModel).copy = function (context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse, $super) {
    context = context === VOID ? this.context : context;
    type = type === VOID ? this.type : type;
    credentialSubject = credentialSubject === VOID ? this.credentialSubject : credentialSubject;
    id = id === VOID ? this.id : id;
    issuer = issuer === VOID ? this.issuer : issuer;
    validFrom = validFrom === VOID ? this.validFrom : validFrom;
    validUntil = validUntil === VOID ? this.validUntil : validUntil;
    credentialStatus = credentialStatus === VOID ? this.credentialStatus : credentialStatus;
    termsOfUse = termsOfUse === VOID ? this.termsOfUse : termsOfUse;
    return $super === VOID ? this.od5(context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse) : $super.od5.call(this, context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse);
  };
  protoOf(W3CV2DataModel).toString = function () {
    return 'W3CV2DataModel(context=' + toString(this.context) + ', type=' + toString(this.type) + ', credentialSubject=' + this.credentialSubject.toString() + ', id=' + this.id + ', issuer=' + this.issuer + ', validFrom=' + this.validFrom + ', validUntil=' + this.validUntil + ', credentialStatus=' + toString_0(this.credentialStatus) + ', termsOfUse=' + toString_0(this.termsOfUse) + ')';
  };
  protoOf(W3CV2DataModel).hashCode = function () {
    var result = hashCode(this.context);
    result = imul(result, 31) + hashCode(this.type) | 0;
    result = imul(result, 31) + this.credentialSubject.hashCode() | 0;
    result = imul(result, 31) + (this.id == null ? 0 : getStringHashCode(this.id)) | 0;
    result = imul(result, 31) + (this.issuer == null ? 0 : getStringHashCode(this.issuer)) | 0;
    result = imul(result, 31) + (this.validFrom == null ? 0 : getStringHashCode(this.validFrom)) | 0;
    result = imul(result, 31) + (this.validUntil == null ? 0 : getStringHashCode(this.validUntil)) | 0;
    result = imul(result, 31) + (this.credentialStatus == null ? 0 : this.credentialStatus.hashCode()) | 0;
    result = imul(result, 31) + (this.termsOfUse == null ? 0 : this.termsOfUse.hashCode()) | 0;
    return result;
  };
  protoOf(W3CV2DataModel).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof W3CV2DataModel))
      return false;
    var tmp0_other_with_cast = other instanceof W3CV2DataModel ? other : THROW_CCE();
    if (!equals(this.context, tmp0_other_with_cast.context))
      return false;
    if (!equals(this.type, tmp0_other_with_cast.type))
      return false;
    if (!this.credentialSubject.equals(tmp0_other_with_cast.credentialSubject))
      return false;
    if (!(this.id == tmp0_other_with_cast.id))
      return false;
    if (!(this.issuer == tmp0_other_with_cast.issuer))
      return false;
    if (!(this.validFrom == tmp0_other_with_cast.validFrom))
      return false;
    if (!(this.validUntil == tmp0_other_with_cast.validUntil))
      return false;
    if (!equals(this.credentialStatus, tmp0_other_with_cast.credentialStatus))
      return false;
    if (!equals(this.termsOfUse, tmp0_other_with_cast.termsOfUse))
      return false;
    return true;
  };
  function W3CVCSerializer() {
    this.td5_1 = Companion_instance_0.l4s().t1y();
  }
  protoOf(W3CVCSerializer).t1y = function () {
    return this.td5_1;
  };
  protoOf(W3CVCSerializer).v1y = function (decoder) {
    return new W3CVC(decoder.f22(Companion_instance_0.l4s()));
  };
  protoOf(W3CVCSerializer).ud5 = function (encoder, value) {
    return encoder.y23(Companion_instance_0.l4s(), value.toJsonObject());
  };
  protoOf(W3CVCSerializer).u1y = function (encoder, value) {
    return this.ud5(encoder, value instanceof W3CVC ? value : THROW_CCE());
  };
  function W3CVC$Companion$prettyJson$lambda($this$Json) {
    $this$Json.z4q_1 = true;
    return Unit_instance;
  }
  function Companion_9() {
    Companion_instance_11 = this;
    var tmp = this;
    tmp.vd5_1 = Json(VOID, W3CVC$Companion$prettyJson$lambda);
  }
  protoOf(Companion_9).build = function (context, type, data) {
    // Inline function 'kotlin.apply' call
    var this_0 = mutableMapOf([to('@context', JsonUtils_getInstance().listToJsonElement(context)), to('type', JsonUtils_getInstance().listToJsonElement(type))]);
    // Inline function 'kotlin.collections.mapValues' call
    var this_1 = toMap(data);
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_1.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_1.x().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp = element.y();
      var tmp$ret$1 = JsonUtils_getInstance().toJsonElement(element.z());
      destination.n2(tmp, tmp$ret$1);
    }
    this_0.p2(destination);
    return new W3CVC(this_0);
  };
  protoOf(Companion_9).fromJson = function (json) {
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.z1z(tmp$ret$1, json);
    return new W3CVC(tmp$ret$2);
  };
  protoOf(Companion_9).l4s = function () {
    return new W3CVCSerializer();
  };
  var Companion_instance_11;
  function Companion_getInstance_14() {
    if (Companion_instance_11 == null)
      new Companion_9();
    return Companion_instance_11;
  }
  function W3CVC$signSdJwtAsync$slambda(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $disclosureMap, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation) {
    this.ed6_1 = this$0;
    this.fd6_1 = $issuerKey;
    this.gd6_1 = $issuerId;
    this.hd6_1 = $issuerKid;
    this.id6_1 = $subjectDid;
    this.jd6_1 = $disclosureMap;
    this.kd6_1 = $additionalJwtHeaders;
    this.ld6_1 = $additionalJwtOptions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(W3CVC$signSdJwtAsync$slambda).a6j = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(W3CVC$signSdJwtAsync$slambda).zb = function ($completion) {
    return this.a6j($completion);
  };
  protoOf(W3CVC$signSdJwtAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.ed6_1.rcr(this.fd6_1, this.gd6_1, this.hd6_1, this.id6_1, this.jd6_1, this.kd6_1, this.ld6_1, this);
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
  protoOf(W3CVC$signSdJwtAsync$slambda).ia = function (completion) {
    return new W3CVC$signSdJwtAsync$slambda(this.ed6_1, this.fd6_1, this.gd6_1, this.hd6_1, this.id6_1, this.jd6_1, this.kd6_1, this.ld6_1, completion);
  };
  function W3CVC$signSdJwtAsync$slambda_0(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $disclosureMap, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation) {
    var i = new W3CVC$signSdJwtAsync$slambda(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $disclosureMap, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation);
    var l = function ($completion) {
      return i.a6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function W3CVC$signJwsAsync$slambda(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $additionalJwtHeader, $additionalJwtOptions, resultContinuation) {
    this.ud6_1 = this$0;
    this.vd6_1 = $issuerKey;
    this.wd6_1 = $issuerId;
    this.xd6_1 = $issuerKid;
    this.yd6_1 = $subjectDid;
    this.zd6_1 = $additionalJwtHeader;
    this.ad7_1 = $additionalJwtOptions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(W3CVC$signJwsAsync$slambda).a6j = function ($completion) {
    var tmp = this.ia($completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(W3CVC$signJwsAsync$slambda).zb = function ($completion) {
    return this.a6j($completion);
  };
  protoOf(W3CVC$signJwsAsync$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 2;
            this.m9_1 = 1;
            suspendResult = this.ud6_1.pcq(this.vd6_1, this.wd6_1, this.xd6_1, this.yd6_1, this.zd6_1, this.ad7_1, this);
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
  protoOf(W3CVC$signJwsAsync$slambda).ia = function (completion) {
    return new W3CVC$signJwsAsync$slambda(this.ud6_1, this.vd6_1, this.wd6_1, this.xd6_1, this.yd6_1, this.zd6_1, this.ad7_1, completion);
  };
  function W3CVC$signJwsAsync$slambda_0(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $additionalJwtHeader, $additionalJwtOptions, resultContinuation) {
    var i = new W3CVC$signJwsAsync$slambda(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $additionalJwtHeader, $additionalJwtOptions, resultContinuation);
    var l = function ($completion) {
      return i.a6j($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $signSdJwtCOROUTINE$13(_this__u8e3s4, issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jd7_1 = _this__u8e3s4;
    this.kd7_1 = issuerKey;
    this.ld7_1 = issuerId;
    this.md7_1 = issuerKid;
    this.nd7_1 = subjectDid;
    this.od7_1 = disclosureMap;
    this.pd7_1 = additionalJwtHeaders;
    this.qd7_1 = additionalJwtOptions;
  }
  protoOf($signSdJwtCOROUTINE$13).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.rd7_1 = this.md7_1;
            if (this.rd7_1 == null) {
              this.m9_1 = 1;
              suspendResult = this.kd7_1.x6j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.sd7_1 = this.rd7_1;
              this.m9_1 = 2;
              continue $sm;
            }

          case 1:
            this.sd7_1 = suspendResult;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.td7_1 = this.sd7_1;
            var tmp_0 = this;
            var tmp_1 = new JwsSignatureScheme();
            var tmp_2 = this.jd7_1.toJsonObject();
            var tmp_3 = [to('iss', JsonPrimitive(this.ld7_1)), to('sub', JsonPrimitive(this.nd7_1))];
            var this_0 = this.qd7_1.x();
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
            var _iterator__ex2g4s = this_0.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(new Pair(item.y(), item.z()));
            }

            tmp_0.ud7_1 = tmp_1.toPayload(tmp_2, mapOf_0(arrayConcat([tmp_3, copyToArray(destination)])));
            this.vd7_1 = Companion_getInstance_3().uc6(this.ud7_1, (new zzz_unused_SDMapBuilder(this.od7_1.xc4_1)).tc6('vc', false, this.od7_1).w2v());
            var tmp_4 = this;
            var tmp3 = Default_getInstance();
            var value = this.vd7_1.undisclosedPayload;
            var this_1 = tmp3.v22();
            var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
            tmp_4.wd7_1 = toByteArray(tmp3.y1z(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value));
            this.m9_1 = 3;
            suspendResult = this.kd7_1.b6j(this.wd7_1, plus(this.pd7_1, mapOf(to('kid', JsonUtils_getInstance().toJsonElement(this.td7_1)))), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var signed = suspendResult;
            return Companion_getInstance_2().createFromSignedJwt(signed, this.vd7_1).toString();
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
  protoOf($signSdJwtCOROUTINE$13)['<set-state>'] = protoOf($signSdJwtCOROUTINE$13).t9;
  protoOf($signSdJwtCOROUTINE$13)['<get-state>'] = protoOf($signSdJwtCOROUTINE$13).u9;
  protoOf($signSdJwtCOROUTINE$13)['<set-exceptionState>'] = protoOf($signSdJwtCOROUTINE$13).v9;
  protoOf($signSdJwtCOROUTINE$13)['<get-exceptionState>'] = protoOf($signSdJwtCOROUTINE$13).w9;
  protoOf($signSdJwtCOROUTINE$13)['<set-result>'] = protoOf($signSdJwtCOROUTINE$13).x9;
  protoOf($signSdJwtCOROUTINE$13)['<get-result>'] = protoOf($signSdJwtCOROUTINE$13).y9;
  protoOf($signSdJwtCOROUTINE$13)['<set-exception>'] = protoOf($signSdJwtCOROUTINE$13).z9;
  protoOf($signSdJwtCOROUTINE$13)['<get-exception>'] = protoOf($signSdJwtCOROUTINE$13).aa;
  protoOf($signSdJwtCOROUTINE$13)['<set-finallyPath>'] = protoOf($signSdJwtCOROUTINE$13).ba;
  protoOf($signSdJwtCOROUTINE$13)['<get-finallyPath>'] = protoOf($signSdJwtCOROUTINE$13).ca;
  protoOf($signSdJwtCOROUTINE$13)['<get-context>'] = protoOf($signSdJwtCOROUTINE$13).s9;
  function $signJwsCOROUTINE$14(_this__u8e3s4, issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.fd8_1 = _this__u8e3s4;
    this.gd8_1 = issuerKey;
    this.hd8_1 = issuerId;
    this.id8_1 = issuerKid;
    this.jd8_1 = subjectDid;
    this.kd8_1 = additionalJwtHeader;
    this.ld8_1 = additionalJwtOptions;
  }
  protoOf($signJwsCOROUTINE$14).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 4;
            this.md8_1 = this.id8_1;
            if (this.md8_1 == null) {
              this.m9_1 = 1;
              suspendResult = this.gd8_1.x6j(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.nd8_1 = this.md8_1;
              this.m9_1 = 2;
              continue $sm;
            }

          case 1:
            this.nd8_1 = suspendResult;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            this.od8_1 = this.nd8_1;
            this.m9_1 = 3;
            var tmp_0 = new JwsSignatureScheme();
            var tmp_1 = this.fd8_1.toJsonObject();
            var tmp_2 = [to('kid', JsonUtils_getInstance().toJsonElement(this.od8_1))];
            var this_0 = this.kd8_1.x();
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
            var _iterator__ex2g4s = this_0.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(new Pair(item.y(), item.z()));
            }

            var tmp_3 = mapOf_0(arrayConcat([tmp_2, copyToArray(destination)]));
            var tmp_4 = [to('iss', JsonPrimitive(this.hd8_1)), to('sub', JsonPrimitive(this.jd8_1))];
            var this_1 = this.ld8_1.x();
            var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
            var _iterator__ex2g4s_0 = this_1.p();
            while (_iterator__ex2g4s_0.q()) {
              var item_0 = _iterator__ex2g4s_0.r();
              destination_0.n(new Pair(item_0.y(), item_0.z()));
            }

            suspendResult = tmp_0.ucv(tmp_1, this.gd8_1, tmp_3, mapOf_0(arrayConcat([tmp_4, copyToArray(destination_0)])), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            return suspendResult;
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
  protoOf($signJwsCOROUTINE$14)['<set-state>'] = protoOf($signJwsCOROUTINE$14).t9;
  protoOf($signJwsCOROUTINE$14)['<get-state>'] = protoOf($signJwsCOROUTINE$14).u9;
  protoOf($signJwsCOROUTINE$14)['<set-exceptionState>'] = protoOf($signJwsCOROUTINE$14).v9;
  protoOf($signJwsCOROUTINE$14)['<get-exceptionState>'] = protoOf($signJwsCOROUTINE$14).w9;
  protoOf($signJwsCOROUTINE$14)['<set-result>'] = protoOf($signJwsCOROUTINE$14).x9;
  protoOf($signJwsCOROUTINE$14)['<get-result>'] = protoOf($signJwsCOROUTINE$14).y9;
  protoOf($signJwsCOROUTINE$14)['<set-exception>'] = protoOf($signJwsCOROUTINE$14).z9;
  protoOf($signJwsCOROUTINE$14)['<get-exception>'] = protoOf($signJwsCOROUTINE$14).aa;
  protoOf($signJwsCOROUTINE$14)['<set-finallyPath>'] = protoOf($signJwsCOROUTINE$14).ba;
  protoOf($signJwsCOROUTINE$14)['<get-finallyPath>'] = protoOf($signJwsCOROUTINE$14).ca;
  protoOf($signJwsCOROUTINE$14)['<get-context>'] = protoOf($signJwsCOROUTINE$14).s9;
  function W3CVC(content) {
    Companion_getInstance_14();
    content = content === VOID ? emptyMap() : content;
    this.lcm_1 = content;
  }
  protoOf(W3CVC).getType = function () {
    var tmp0_elvis_lhs = this.ze('type');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = 'No `type` in W3C VC!';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_jsonArray(tmp);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      var tmp$ret$0 = get_jsonPrimitive(item).p4s();
      destination.n(tmp$ret$0);
    }
    return destination;
  };
  protoOf(W3CVC).pd8 = function (additionalProperties) {
    return new JsonObject(plus(this.lcm_1, additionalProperties));
  };
  protoOf(W3CVC).toJsonObject = function (additionalProperties, $super) {
    additionalProperties = additionalProperties === VOID ? emptyMap() : additionalProperties;
    return $super === VOID ? this.pd8(additionalProperties) : $super.pd8.call(this, additionalProperties);
  };
  protoOf(W3CVC).toJson = function () {
    var tmp0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value = this.lcm_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    return tmp0.y1z(tmp$ret$1, value);
  };
  protoOf(W3CVC).toPrettyJson = function () {
    var tmp0 = Companion_getInstance_14().vd5_1;
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value = this.lcm_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.v22();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().md(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    return tmp0.y1z(tmp$ret$1, value);
  };
  protoOf(W3CVC).rcr = function (issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $completion) {
    var tmp = new $signSdJwtCOROUTINE$13(this, issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(W3CVC).signSdJwt$default = function (issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $completion, $super) {
    additionalJwtHeaders = additionalJwtHeaders === VOID ? emptyMap() : additionalJwtHeaders;
    additionalJwtOptions = additionalJwtOptions === VOID ? emptyMap() : additionalJwtOptions;
    return $super === VOID ? this.rcr(issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $completion) : $super.rcr.call(this, issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $completion);
  };
  protoOf(W3CVC).pcq = function (issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $completion) {
    var tmp = new $signJwsCOROUTINE$14(this, issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(W3CVC).signJws$default = function (issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $completion, $super) {
    issuerKid = issuerKid === VOID ? null : issuerKid;
    additionalJwtHeader = additionalJwtHeader === VOID ? emptyMap() : additionalJwtHeader;
    additionalJwtOptions = additionalJwtOptions === VOID ? emptyMap() : additionalJwtOptions;
    return $super === VOID ? this.pcq(issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $completion) : $super.pcq.call(this, issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $completion);
  };
  protoOf(W3CVC).qd8 = function (issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions) {
    var tmp = W3CVC$signSdJwtAsync$slambda_0(this, issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(W3CVC).signSdJwtAsync$default = function (issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $super) {
    additionalJwtHeaders = additionalJwtHeaders === VOID ? emptyMap() : additionalJwtHeaders;
    additionalJwtOptions = additionalJwtOptions === VOID ? emptyMap() : additionalJwtOptions;
    return $super === VOID ? this.qd8(issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions) : $super.qd8.call(this, issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions);
  };
  protoOf(W3CVC).rd8 = function (issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions) {
    var tmp = W3CVC$signJwsAsync$slambda_0(this, issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(W3CVC).signJwsAsync$default = function (issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $super) {
    issuerKid = issuerKid === VOID ? null : issuerKid;
    additionalJwtHeader = additionalJwtHeader === VOID ? emptyMap() : additionalJwtHeader;
    additionalJwtOptions = additionalJwtOptions === VOID ? emptyMap() : additionalJwtOptions;
    return $super === VOID ? this.rd8(issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions) : $super.rd8.call(this, issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions);
  };
  protoOf(W3CVC).sd8 = function (content) {
    return new W3CVC(content);
  };
  protoOf(W3CVC).copy = function (content, $super) {
    content = content === VOID ? this.lcm_1 : content;
    return $super === VOID ? this.sd8(content) : $super.sd8.call(this, content);
  };
  protoOf(W3CVC).toString = function () {
    return 'W3CVC(content=' + toString(this.lcm_1) + ')';
  };
  protoOf(W3CVC).hashCode = function () {
    return hashCode(this.lcm_1);
  };
  protoOf(W3CVC).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof W3CVC))
      return false;
    var tmp0_other_with_cast = other instanceof W3CVC ? other : THROW_CCE();
    if (!equals(this.lcm_1, tmp0_other_with_cast.lcm_1))
      return false;
    return true;
  };
  protoOf(W3CVC).h = function () {
    return this.lcm_1.h();
  };
  protoOf(W3CVC).r2n = function (key) {
    return this.lcm_1.i2(key);
  };
  protoOf(W3CVC).i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.r2n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(W3CVC).n4s = function (value) {
    return this.lcm_1.j2(value);
  };
  protoOf(W3CVC).j2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.n4s(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(W3CVC).ze = function (key) {
    return this.lcm_1.k2(key);
  };
  protoOf(W3CVC).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.ze((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(W3CVC).asJsReadonlyMapView = function () {
    return this.lcm_1.asJsReadonlyMapView();
  };
  protoOf(W3CVC).s = function () {
    return this.lcm_1.s();
  };
  protoOf(W3CVC).l2 = function () {
    return this.lcm_1.l2();
  };
  protoOf(W3CVC).m2 = function () {
    return this.lcm_1.m2();
  };
  protoOf(W3CVC).x = function () {
    return this.lcm_1.x();
  };
  function CredentialBuilderUtils() {
  }
  protoOf(CredentialBuilderUtils).generateCredentialSubject = function (credentialSubject) {
    var credentialSubjectJson = Default_getInstance().g4q(credentialSubject);
    return JsonUtils_getInstance().toJsonObject(get_jsonObject(credentialSubjectJson));
  };
  var CredentialBuilderUtils_instance;
  function CredentialBuilderUtils_getInstance() {
    return CredentialBuilderUtils_instance;
  }
  //region block: post-declaration
  defineProp(protoOf(CredentialBuilderType), 'name', protoOf(CredentialBuilderType).s2);
  defineProp(protoOf(CredentialBuilderType), 'ordinal', protoOf(CredentialBuilderType).t2);
  protoOf($serializer).m2a = typeParametersSerializers;
  protoOf($serializer_0).m2a = typeParametersSerializers;
  protoOf($serializer_1).m2a = typeParametersSerializers;
  defineProp(protoOf(Companion_6), 'defaultContext', function () {
    return this.fd5();
  });
  protoOf($serializer_2).m2a = typeParametersSerializers;
  protoOf($serializer_3).m2a = typeParametersSerializers;
  defineProp(protoOf(Companion_8), 'defaultContext', function () {
    return this.fd5();
  });
  protoOf($serializer_4).m2a = typeParametersSerializers;
  //endregion
  //region block: init
  Issuer_instance = new Issuer();
  JwsHeader_instance = new JwsHeader();
  JwsOption_instance = new JwsOption();
  ExtensionMethods_instance = new ExtensionMethods();
  W3CVcUtils_instance = new W3CVcUtils();
  Companion_instance_5 = new Companion_3();
  Companion_instance_6 = new Companion_4();
  W3CBaseDataModels_instance = new W3CBaseDataModels();
  Companion_instance_7 = new Companion_5();
  Companion_instance_9 = new Companion_7();
  CredentialBuilderUtils_instance = new CredentialBuilderUtils();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    $id$walt$w3c.CredentialBuilderType = CredentialBuilderType;
    $id$walt$w3c.CredentialBuilderType.values = values_2;
    $id$walt$w3c.CredentialBuilderType.valueOf = valueOf;
    defineProp($id$walt$w3c.CredentialBuilderType, 'W3CV11CredentialBuilder', CredentialBuilderType_W3CV11CredentialBuilder_getInstance);
    defineProp($id$walt$w3c.CredentialBuilderType, 'W3CV2CredentialBuilder', CredentialBuilderType_W3CV2CredentialBuilder_getInstance);
    defineProp($id$walt$w3c.CredentialBuilderType, 'MdocsCredentialBuilder', CredentialBuilderType_MdocsCredentialBuilder_getInstance);
    $id$walt$w3c.CredentialBuilder = CredentialBuilder;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    $id$walt$w3c.PresentationBuilder = PresentationBuilder;
    $id$walt$w3c.PresentationBuilder.$buildAndSignCOROUTINE$0 = $buildAndSignCOROUTINE$0;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$issuance = $id$walt$w3c.issuance || ($id$walt$w3c.issuance = {});
    defineProp($id$walt$w3c$issuance, 'dataFunctions', get_dataFunctions);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$issuance = $id$walt$w3c.issuance || ($id$walt$w3c.issuance = {});
    defineProp($id$walt$w3c$issuance, 'Issuer', Issuer_getInstance);
    Issuer.prototype.IssuanceInformation = IssuanceInformation;
    Issuer.prototype.$mergingJwtIssueCOROUTINE$2 = $mergingJwtIssueCOROUTINE$2;
    Issuer.prototype.$mergingSdJwtIssueCOROUTINE$3 = $mergingSdJwtIssueCOROUTINE$3;
    Issuer.prototype.$mergingToVcCOROUTINE$4 = $mergingToVcCOROUTINE$4;
    Issuer.prototype.$getKidHeaderCOROUTINE$5 = $getKidHeaderCOROUTINE$5;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$schemes = $id$walt$w3c.schemes || ($id$walt$w3c.schemes = {});
    $id$walt$w3c$schemes.JwsSignatureScheme = JwsSignatureScheme;
    defineProp($id$walt$w3c$schemes.JwsSignatureScheme, 'JwsHeader', JwsHeader_getInstance);
    defineProp($id$walt$w3c$schemes.JwsSignatureScheme, 'JwsOption', JwsOption_getInstance);
    $id$walt$w3c$schemes.JwsSignatureScheme.KeyInfo = KeyInfo;
    $id$walt$w3c$schemes.JwsSignatureScheme.KeysInfo = KeysInfo;
    $id$walt$w3c$schemes.JwsSignatureScheme.$getIssuerKeyInfoCOROUTINE$6 = $getIssuerKeyInfoCOROUTINE$6;
    $id$walt$w3c$schemes.JwsSignatureScheme.$getIssuerKeysInfoCOROUTINE$7 = $getIssuerKeysInfoCOROUTINE$7;
    $id$walt$w3c$schemes.JwsSignatureScheme.$verifyCOROUTINE$8 = $verifyCOROUTINE$8;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$schemes = $id$walt$w3c.schemes || ($id$walt$w3c.schemes = {});
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$utils = $id$walt$w3c.utils || ($id$walt$w3c.utils = {});
    defineProp($id$walt$w3c$utils, 'CredentialDataMergeUtils', CredentialDataMergeUtils_getInstance);
    CredentialDataMergeUtils.prototype.MergeResult = MergeResult;
    CredentialDataMergeUtils.prototype.JsonMergeResult = JsonMergeResult;
    CredentialDataMergeUtils.prototype.FunctionCall = FunctionCall;
    CredentialDataMergeUtils.prototype.$getTemplateDataCOROUTINE$9 = $getTemplateDataCOROUTINE$9;
    CredentialDataMergeUtils.prototype.$patchCOROUTINE$10 = $patchCOROUTINE$10;
    CredentialDataMergeUtils.prototype.$mergeWithMappingCOROUTINE$11 = $mergeWithMappingCOROUTINE$11;
    CredentialDataMergeUtils.prototype.$mergeSDJwtVCPayloadWithMappingCOROUTINE$12 = $mergeSDJwtVCPayloadWithMappingCOROUTINE$12;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$utils = $id$walt$w3c.utils || ($id$walt$w3c.utils = {});
    defineProp($id$walt$w3c$utils, 'ExtensionMethods', ExtensionMethods_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$utils = $id$walt$w3c.utils || ($id$walt$w3c.utils = {});
    defineProp($id$walt$w3c$utils, 'W3CVcUtils', W3CVcUtils_getInstance);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$vc = $id$walt$w3c.vc || ($id$walt$w3c.vc = {});
    var $id$walt$w3c$vc$vcs = $id$walt$w3c$vc.vcs || ($id$walt$w3c$vc.vcs = {});
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$vc = $id$walt$w3c.vc || ($id$walt$w3c.vc = {});
    var $id$walt$w3c$vc$vcs = $id$walt$w3c$vc.vcs || ($id$walt$w3c$vc.vcs = {});
    defineProp($id$walt$w3c$vc$vcs, 'W3CBaseDataModels', W3CBaseDataModels_getInstance);
    W3CBaseDataModels.prototype.TermsOfUse = TermsOfUse;
    defineProp(W3CBaseDataModels.prototype.TermsOfUse, 'Companion', Companion_getInstance_8);
    W3CBaseDataModels.prototype.CredentialStatus = CredentialStatus;
    defineProp(W3CBaseDataModels.prototype.CredentialStatus, 'Companion', Companion_getInstance_9);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$vc = $id$walt$w3c.vc || ($id$walt$w3c.vc = {});
    var $id$walt$w3c$vc$vcs = $id$walt$w3c$vc.vcs || ($id$walt$w3c$vc.vcs = {});
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$vc = $id$walt$w3c.vc || ($id$walt$w3c.vc = {});
    var $id$walt$w3c$vc$vcs = $id$walt$w3c$vc.vcs || ($id$walt$w3c$vc.vcs = {});
    $id$walt$w3c$vc$vcs.W3CV11DataModel = W3CV11DataModel;
    defineProp($id$walt$w3c$vc$vcs.W3CV11DataModel, 'Companion', Companion_getInstance_11);
    $id$walt$w3c$vc$vcs.W3CV11DataModel.CredentialSubject = CredentialSubject;
    defineProp($id$walt$w3c$vc$vcs.W3CV11DataModel.CredentialSubject, 'Companion', Companion_getInstance_10);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$vc = $id$walt$w3c.vc || ($id$walt$w3c.vc = {});
    var $id$walt$w3c$vc$vcs = $id$walt$w3c$vc.vcs || ($id$walt$w3c$vc.vcs = {});
    $id$walt$w3c$vc$vcs.W3CV2DataModel = W3CV2DataModel;
    defineProp($id$walt$w3c$vc$vcs.W3CV2DataModel, 'Companion', Companion_getInstance_13);
    $id$walt$w3c$vc$vcs.W3CV2DataModel.CredentialSubject = CredentialSubject_0;
    defineProp($id$walt$w3c$vc$vcs.W3CV2DataModel.CredentialSubject, 'Companion', Companion_getInstance_12);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$vc = $id$walt$w3c.vc || ($id$walt$w3c.vc = {});
    var $id$walt$w3c$vc$vcs = $id$walt$w3c$vc.vcs || ($id$walt$w3c$vc.vcs = {});
    $id$walt$w3c$vc$vcs.W3CVCSerializer = W3CVCSerializer;
    $id$walt$w3c$vc$vcs.W3CVC = W3CVC;
    defineProp($id$walt$w3c$vc$vcs.W3CVC, 'Companion', Companion_getInstance_14);
    $id$walt$w3c$vc$vcs.W3CVC.$signSdJwtCOROUTINE$13 = $signSdJwtCOROUTINE$13;
    $id$walt$w3c$vc$vcs.W3CVC.$signJwsCOROUTINE$14 = $signJwsCOROUTINE$14;
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$utils = $id$walt$w3c.utils || ($id$walt$w3c.utils = {});
    defineProp($id$walt$w3c$utils, 'CredentialBuilderUtils', CredentialBuilderUtils_getInstance);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));

//# sourceMappingURL=w3c-credentials.js.map
