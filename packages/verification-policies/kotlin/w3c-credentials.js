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
  var createSimpleEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.r;
  var lazy = kotlin_kotlin.$_$.ik;
  var protoOf = kotlin_kotlin.$_$.be;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var VOID = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var Enum = kotlin_kotlin.$_$.xi;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var THROW_IAE = kotlin_kotlin.$_$.lj;
  var defineProp = kotlin_kotlin.$_$.qc;
  var listOf = kotlin_kotlin.$_$.q9;
  var UuidUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.j;
  var System_instance = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.b;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.z;
  var NotImplementedError = kotlin_kotlin.$_$.ej;
  var toMutableList = kotlin_kotlin.$_$.bb;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var toMutableMap = kotlin_kotlin.$_$.db;
  var JsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.p;
  var JsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.o;
  var to = kotlin_kotlin.$_$.rk;
  var mapOf = kotlin_kotlin.$_$.t9;
  var CoroutineImpl = kotlin_kotlin.$_$.bc;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.lb;
  var initMetadataForLambda = kotlin_kotlin.$_$.cd;
  var encodeToByteArray = kotlin_kotlin.$_$.uf;
  var JsonUtils_getInstance = kotlin_id_walt_crypto_waltid_crypto.$_$.f;
  var mapOf_0 = kotlin_kotlin.$_$.u9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var DidService_getInstance = kotlin_id_walt_did_waltid_did.$_$.a;
  var Result = kotlin_kotlin.$_$.ij;
  var throwOnFailure = kotlin_kotlin.$_$.nk;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.b4;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var get_jsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a1;
  var first = kotlin_kotlin.$_$.t8;
  var get_jsonPrimitive = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.c1;
  var get_jsonObject = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.b1;
  var Companion_getInstance = kotlin_kotlin.$_$.b6;
  var DurationUnit_MINUTES_getInstance = kotlin_kotlin.$_$.n;
  var toDuration = kotlin_kotlin.$_$.ni;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var addAll = kotlin_kotlin.$_$.e7;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var JsonElement = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.l;
  var getKClass = kotlin_kotlin.$_$.g;
  var arrayOf = kotlin_kotlin.$_$.yj;
  var createKType = kotlin_kotlin.$_$.d;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d3;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var isInterface = kotlin_kotlin.$_$.md;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b1;
  var $runInAsync$ = kotlin_love_forte_plugin_suspend_transform_suspend_transform_runtime.$_$.a;
  var substringBefore = kotlin_kotlin.$_$.lh;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o7;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.v;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var JsonArray = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.i;
  var JsonPrimitive_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.q;
  var HttpClient = kotlin_io_ktor_ktor_client_core.$_$.a1;
  var HttpRequestBuilder = kotlin_io_ktor_ktor_client_core.$_$.o;
  var url = kotlin_io_ktor_ktor_client_core.$_$.u;
  var Companion_getInstance_0 = kotlin_io_ktor_ktor_http.$_$.h;
  var HttpStatement = kotlin_io_ktor_ktor_client_core.$_$.x;
  var bodyAsText = kotlin_io_ktor_ktor_client_core.$_$.a;
  var toString = kotlin_kotlin.$_$.fe;
  var hashCode = kotlin_kotlin.$_$.wc;
  var equals = kotlin_kotlin.$_$.rc;
  var KtMap = kotlin_kotlin.$_$.w6;
  var Companion_getInstance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_datetime.$_$.d;
  var DidUtils_getInstance = kotlin_id_walt_did_waltid_did.$_$.b;
  var toString_0 = kotlin_kotlin.$_$.pk;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var JsonNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.m;
  var mapCapacity = kotlin_kotlin.$_$.s9;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var removePrefix = kotlin_kotlin.$_$.vg;
  var startsWith = kotlin_kotlin.$_$.eh;
  var emptyList = kotlin_kotlin.$_$.k8;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var Result__toString_impl_yu5r8k = kotlin_kotlin.$_$.a4;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.y3;
  var JwsUtils_instance = kotlin_id_walt_crypto_waltid_crypto.$_$.g;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var Companion_instance = kotlin_kotlin.$_$.g6;
  var split = kotlin_kotlin.$_$.dh;
  var createFailure = kotlin_kotlin.$_$.bk;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.v3;
  var Exception = kotlin_kotlin.$_$.zi;
  var _Result___get_isSuccess__impl__sndoy8 = kotlin_kotlin.$_$.z3;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.z1;
  var Pair = kotlin_kotlin.$_$.hj;
  var copyToArray = kotlin_kotlin.$_$.f8;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var emptyMap = kotlin_kotlin.$_$.l8;
  var Companion_getInstance_2 = kotlin_id_walt_sdjwt_waltid_sdjwt.$_$.a;
  var VerificationException = kotlin_id_walt_crypto_waltid_crypto.$_$.k;
  var KotlinLogging_instance = kotlin_io_github_oshai_kotlin_logging.$_$.a;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var NullPointerException = kotlin_kotlin.$_$.fj;
  var JsonPrimitive_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.s;
  var toList = kotlin_kotlin.$_$.va;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.w3;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.i2;
  var first_0 = kotlin_kotlin.$_$.ag;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var last = kotlin_kotlin.$_$.qg;
  var contains = kotlin_kotlin.$_$.pf;
  var createAnnotatedEnumSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.t;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var JsonObjectSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.f;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var Companion_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.e;
  var mutableMapOf = kotlin_kotlin.$_$.w9;
  var toMap = kotlin_kotlin.$_$.za;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.a6;
  var createInvariantKTypeProjection = kotlin_kotlin.$_$.b;
  var Companion_getInstance_3 = kotlin_id_walt_sdjwt_waltid_sdjwt.$_$.c;
  var zzz_unused_SDMapBuilder = kotlin_id_walt_sdjwt_waltid_sdjwt.$_$.d;
  var toByteArray = kotlin_io_ktor_ktor_io.$_$.f1;
  var plus = kotlin_kotlin.$_$.x9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
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
  initMetadataForCompanion(Companion_2, VOID, [SerializerFactory]);
  initMetadataForClass(VCFormat, 'VCFormat', VOID, Enum, VOID, VOID, VOID, {0: Companion_getInstance_7});
  initMetadataForObject(W3CVcUtils, 'W3CVcUtils');
  initMetadataForCompanion(Companion_3);
  initMetadataForInterface(CredentialDataModel, 'CredentialDataModel');
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TermsOfUse, 'TermsOfUse', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForClass(CredentialStatus, 'CredentialStatus', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForObject(W3CBaseDataModels, 'W3CBaseDataModels');
  initMetadataForInterface(W3CMetadata, 'W3CMetadata');
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_7, VOID, [W3CMetadata]);
  initMetadataForClass(CredentialSubject, 'CredentialSubject', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(W3CV11DataModel, 'W3CV11DataModel', VOID, VOID, [CredentialDataModel], VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForCompanion(Companion_9, VOID, [W3CMetadata]);
  initMetadataForClass(CredentialSubject_0, 'CredentialSubject', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(W3CV2DataModel, 'W3CV2DataModel', VOID, VOID, [CredentialDataModel], VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForClass(W3CVCSerializer, 'W3CVCSerializer', W3CVCSerializer, VOID, [KSerializer]);
  initMetadataForCompanion(Companion_10);
  initMetadataForLambda(W3CVC$signSdJwtAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(W3CVC$signJwsAsync$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($signSdJwtCOROUTINE$13, CoroutineImpl);
  initMetadataForCoroutine($signJwsCOROUTINE$14, CoroutineImpl);
  initMetadataForClass(W3CVC, 'W3CVC', W3CVC, VOID, [KtMap], [7, 6]);
  initMetadataForObject(CredentialBuilderUtils, 'CredentialBuilderUtils');
  //endregion
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.zd5_1.b1();
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
    tmp.zd5_1 = lazy(tmp_0, JwtClaims$Companion$_anonymous__ny0lpt);
  }
  protoOf(Companion).m4u = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
    this.cd6_1 = value;
  }
  protoOf(JwtClaims).dd6 = function () {
    return this.cd6_1;
  };
  function _get_$cachedSerializer__te6jhj_0($this) {
    return $this.ed6_1.b1();
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
    tmp.ed6_1 = lazy(tmp_0, VcClaims$V1$Companion$_anonymous__pkz4b8);
  }
  protoOf(Companion_0).m4u = function () {
    return _get_$cachedSerializer__te6jhj_0(this);
  };
  protoOf(Companion_0).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
    return $this.fd6_1.b1();
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
    tmp.fd6_1 = lazy(tmp_0, VcClaims$V2$Companion$_anonymous__4zvhw3);
  }
  protoOf(Companion_1).m4u = function () {
    return _get_$cachedSerializer__te6jhj_1(this);
  };
  protoOf(Companion_1).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
    this.id6_1 = value;
  }
  protoOf(V1).dd6 = function () {
    return this.id6_1;
  };
  function V2(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.ld6_1 = value;
  }
  protoOf(V2).dd6 = function () {
    return this.ld6_1;
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
    this.credentialId = 'urn:uuid:' + UuidUtils_instance.d9d().toString();
    this.issuerDid = null;
    this.subjectDid = null;
    this.validFrom = System_instance.d5v();
    this.validUntil = null;
    this.credentialStatus = null;
    this.termsOfUse = null;
    this._customCredentialSubjectData = null;
    this._extraCustomData = HashMap_init_$Create$();
  }
  protoOf(CredentialBuilder).od6 = function () {
    return this.builderType;
  };
  protoOf(CredentialBuilder).getDefaultBuilderContext = function () {
    var tmp;
    switch (this.builderType.t2_1) {
      case 0:
        tmp = Companion_getInstance_12().qd6_1;
        break;
      case 1:
        tmp = Companion_getInstance_14().sd6_1;
        break;
      default:
        throw new NotImplementedError('Not yet implemented: Default context for builder ' + this.builderType.toString());
    }
    return tmp;
  };
  protoOf(CredentialBuilder).td6 = function (_set____db54di) {
    this.context = _set____db54di;
  };
  protoOf(CredentialBuilder).t9 = function () {
    return this.context;
  };
  protoOf(CredentialBuilder).ud6 = function (_set____db54di) {
    this.type = _set____db54di;
  };
  protoOf(CredentialBuilder).za0 = function () {
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
  protoOf(CredentialBuilder).vd6 = function (_set____db54di) {
    this.credentialId = _set____db54di;
  };
  protoOf(CredentialBuilder).wd6 = function () {
    return this.credentialId;
  };
  protoOf(CredentialBuilder).randomCredentialSubjectUUID = function () {
    this.credentialId = 'urn:uuid:' + UuidUtils_instance.d9d().toString();
  };
  protoOf(CredentialBuilder).xd6 = function (_set____db54di) {
    this.issuerDid = _set____db54di;
  };
  protoOf(CredentialBuilder).yd6 = function () {
    return this.issuerDid;
  };
  protoOf(CredentialBuilder).zd6 = function (_set____db54di) {
    this.subjectDid = _set____db54di;
  };
  protoOf(CredentialBuilder).ad7 = function () {
    return this.subjectDid;
  };
  protoOf(CredentialBuilder).bd7 = function (_set____db54di) {
    this.validFrom = _set____db54di;
  };
  protoOf(CredentialBuilder).cd7 = function () {
    return this.validFrom;
  };
  protoOf(CredentialBuilder).validFromNow = function () {
    this.validFrom = System_instance.d5v();
  };
  protoOf(CredentialBuilder).dd7 = function (_set____db54di) {
    this.validUntil = _set____db54di;
  };
  protoOf(CredentialBuilder).ed7 = function () {
    return this.validUntil;
  };
  protoOf(CredentialBuilder).validFor = function (duration) {
    this.validUntil = System_instance.d5v().dp(duration);
  };
  protoOf(CredentialBuilder).fd7 = function (_set____db54di) {
    this.credentialStatus = _set____db54di;
  };
  protoOf(CredentialBuilder).gd7 = function () {
    return this.credentialStatus;
  };
  protoOf(CredentialBuilder).useStatusList2021Revocation = function (statusListCredential, listIndex) {
    this.credentialStatus = new CredentialStatus(statusListCredential + '#' + listIndex, 'StatusList2021Entry', 'revocation', listIndex.toString(), statusListCredential);
  };
  protoOf(CredentialBuilder).hd7 = function (_set____db54di) {
    this.termsOfUse = _set____db54di;
  };
  protoOf(CredentialBuilder).id7 = function () {
    return this.termsOfUse;
  };
  protoOf(CredentialBuilder).jd7 = function (_set____db54di) {
    this._customCredentialSubjectData = _set____db54di;
  };
  protoOf(CredentialBuilder).kd7 = function () {
    return this._customCredentialSubjectData;
  };
  protoOf(CredentialBuilder).useCredentialSubject = function (data) {
    this._customCredentialSubjectData = data;
  };
  protoOf(CredentialBuilder).ld7 = function (_set____db54di) {
    this._extraCustomData = _set____db54di;
  };
  protoOf(CredentialBuilder).md7 = function () {
    return this._extraCustomData;
  };
  protoOf(CredentialBuilder).useData = function (key, data) {
    // Inline function 'kotlin.collections.set' call
    this._extraCustomData.p2(key, data);
  };
  protoOf(CredentialBuilder).useDataPair = function (pair) {
    return this.useData(pair.bc_1, pair.cc_1);
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
        this_0.p2('id', JsonPrimitive(this.subjectDid));
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
    switch (this.builderType.t2_1) {
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
    this_0.r2(this._extraCustomData);
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
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function PresentationBuilder$buildAndSignAsync$slambda(this$0, $key, resultContinuation) {
    this.fd8_1 = this$0;
    this.gd8_1 = $key;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PresentationBuilder$buildAndSignAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(PresentationBuilder$buildAndSignAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(PresentationBuilder$buildAndSignAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.fd8_1.hd8(this.gd8_1, this);
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
  protoOf(PresentationBuilder$buildAndSignAsync$slambda).ja = function (completion) {
    return new PresentationBuilder$buildAndSignAsync$slambda(this.fd8_1, this.gd8_1, completion);
  };
  function PresentationBuilder$buildAndSignAsync$slambda_0(this$0, $key, resultContinuation) {
    var i = new PresentationBuilder$buildAndSignAsync$slambda(this$0, $key, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $buildAndSignCOROUTINE$0(_this__u8e3s4, key, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.qd8_1 = _this__u8e3s4;
    this.rd8_1 = key;
  }
  protoOf($buildAndSignCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.sd8_1 = encodeToByteArray(this.qd8_1.buildPresentationJsonString());
            this.td8_1 = JsonUtils_getInstance();
            this.ud8_1 = this.qd8_1.did;
            if (this.ud8_1 == null) {
              this.vd8_1 = null;
              this.n9_1 = 2;
              continue $sm;
            } else {
              var tmp_0 = this;
              tmp_0.wd8_1 = this.ud8_1;
              this.xd8_1 = this.wd8_1;
              var tmp_1 = this;
              tmp_1.yd8_1 = this.xd8_1;
              this.zd8_1 = this.yd8_1;
              this.n9_1 = 1;
              suspendResult = resolveDidAuthentication(this.qd8_1, this.zd8_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.vd8_1 = suspendResult;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.ad9_1 = this.vd8_1;
            if (this.ad9_1 == null) {
              this.n9_1 = 3;
              suspendResult = this.rd8_1.d6m(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.bd9_1 = this.ad9_1;
              this.n9_1 = 4;
              continue $sm;
            }

          case 3:
            this.bd9_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.cd9_1 = this.bd9_1;
            this.dd9_1 = this.td8_1.toJsonElement(this.cd9_1);
            this.ed9_1 = to('kid', this.dd9_1);
            this.fd9_1 = [this.ed9_1, to('typ', JsonUtils_getInstance().toJsonElement('JWT'))];
            this.gd9_1 = mapOf_0(this.fd9_1);
            this.n9_1 = 5;
            suspendResult = this.rd8_1.h6l(this.sd8_1, this.gd9_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            return suspendResult;
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
  protoOf($buildAndSignCOROUTINE$0)['<set-state>'] = protoOf($buildAndSignCOROUTINE$0).u9;
  protoOf($buildAndSignCOROUTINE$0)['<get-state>'] = protoOf($buildAndSignCOROUTINE$0).v9;
  protoOf($buildAndSignCOROUTINE$0)['<set-exceptionState>'] = protoOf($buildAndSignCOROUTINE$0).w9;
  protoOf($buildAndSignCOROUTINE$0)['<get-exceptionState>'] = protoOf($buildAndSignCOROUTINE$0).x9;
  protoOf($buildAndSignCOROUTINE$0)['<set-result>'] = protoOf($buildAndSignCOROUTINE$0).y9;
  protoOf($buildAndSignCOROUTINE$0)['<get-result>'] = protoOf($buildAndSignCOROUTINE$0).z9;
  protoOf($buildAndSignCOROUTINE$0)['<set-exception>'] = protoOf($buildAndSignCOROUTINE$0).aa;
  protoOf($buildAndSignCOROUTINE$0)['<get-exception>'] = protoOf($buildAndSignCOROUTINE$0).ba;
  protoOf($buildAndSignCOROUTINE$0)['<set-finallyPath>'] = protoOf($buildAndSignCOROUTINE$0).ca;
  protoOf($buildAndSignCOROUTINE$0)['<get-finallyPath>'] = protoOf($buildAndSignCOROUTINE$0).da;
  protoOf($buildAndSignCOROUTINE$0)['<get-context>'] = protoOf($buildAndSignCOROUTINE$0).t9;
  function $resolveDidAuthenticationCOROUTINE$1(_this__u8e3s4, did, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vd7_1 = _this__u8e3s4;
    this.wd7_1 = did;
  }
  protoOf($resolveDidAuthenticationCOROUTINE$1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = DidService_getInstance().n9w(this.wd7_1, this);
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
            throwOnFailure(this_0);
            var tmp_0 = _Result___get_value__impl__bjfvqg(this_0);
            var ARGUMENT = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
            var ARGUMENT_0 = ARGUMENT.af('authentication');
            var ARGUMENT_1 = ensureNotNull(ARGUMENT_0);
            var ARGUMENT_2 = get_jsonArray(ARGUMENT_1);
            var it = first(ARGUMENT_2);
            var tmp_1;
            if (it instanceof JsonObject) {
              tmp_1 = get_jsonPrimitive(ensureNotNull(get_jsonObject(it).af('id'))).q4u();
            } else {
              tmp_1 = get_jsonPrimitive(it).q4u();
            }

            return tmp_1;
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
  function PresentationBuilder() {
    this.did = null;
    this.holderPubKeyJwk = null;
    var tmp = this;
    var tmp_0 = System_instance.d5v();
    // Inline function 'kotlin.time.Companion.minutes' call
    Companion_getInstance();
    var tmp$ret$0 = toDuration(1, DurationUnit_MINUTES_getInstance());
    tmp.jwtNotBefore = tmp_0.e6c(tmp$ret$0);
    this.jwtIssuedAt = System_instance.d5v();
    this.presentationId = 'urn:uuid:' + UuidUtils_instance.e9d();
    this.nonce = null;
    this.audience = null;
    this.vpContext = listOf('https://www.w3.org/2018/credentials/v1');
    this.vpType = listOf('VerifiablePresentation');
    this.verifiableCredentials = ArrayList_init_$Create$();
  }
  protoOf(PresentationBuilder).hd9 = function (_set____db54di) {
    this.did = _set____db54di;
  };
  protoOf(PresentationBuilder).ja6 = function () {
    return this.did;
  };
  protoOf(PresentationBuilder).id9 = function (_set____db54di) {
    this.holderPubKeyJwk = _set____db54di;
  };
  protoOf(PresentationBuilder).jd9 = function () {
    return this.holderPubKeyJwk;
  };
  protoOf(PresentationBuilder).kd9 = function (_set____db54di) {
    this.jwtNotBefore = _set____db54di;
  };
  protoOf(PresentationBuilder).ld9 = function () {
    return this.jwtNotBefore;
  };
  protoOf(PresentationBuilder).md9 = function (_set____db54di) {
    this.jwtIssuedAt = _set____db54di;
  };
  protoOf(PresentationBuilder).nd9 = function () {
    return this.jwtIssuedAt;
  };
  protoOf(PresentationBuilder).od9 = function (_set____db54di) {
    this.presentationId = _set____db54di;
  };
  protoOf(PresentationBuilder).pd9 = function () {
    return this.presentationId;
  };
  protoOf(PresentationBuilder).qd9 = function (_set____db54di) {
    this.nonce = _set____db54di;
  };
  protoOf(PresentationBuilder).zc5 = function () {
    return this.nonce;
  };
  protoOf(PresentationBuilder).rd9 = function (_set____db54di) {
    this.audience = _set____db54di;
  };
  protoOf(PresentationBuilder).yc5 = function () {
    return this.audience;
  };
  protoOf(PresentationBuilder).sd9 = function (_set____db54di) {
    this.vpContext = _set____db54di;
  };
  protoOf(PresentationBuilder).td9 = function () {
    return this.vpContext;
  };
  protoOf(PresentationBuilder).ud9 = function (_set____db54di) {
    this.vpType = _set____db54di;
  };
  protoOf(PresentationBuilder).vd9 = function () {
    return this.vpType;
  };
  protoOf(PresentationBuilder).wd9 = function () {
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
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.af('kid');
      var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonPrimitive(tmp2_safe_receiver);
      tmp = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.q4u();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tmp_0 = to('sub', tmp);
    var tmp4_safe_receiver = this.jwtNotBefore;
    var tmp_1 = to('nbf', tmp4_safe_receiver == null ? null : tmp4_safe_receiver.z5z());
    var tmp5_safe_receiver = this.jwtIssuedAt;
    var tmp_2 = to('iat', tmp5_safe_receiver == null ? null : tmp5_safe_receiver.z5z());
    var tmp_3 = to('jti', this.presentationId);
    var tmp6_elvis_lhs = this.did;
    var tmp_4;
    if (tmp6_elvis_lhs == null) {
      var tmp7_safe_receiver = this.holderPubKeyJwk;
      var tmp8_safe_receiver = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.af('kid');
      var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : get_jsonPrimitive(tmp8_safe_receiver);
      tmp_4 = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.q4u();
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
      var tmp14_safe_receiver = tmp13_safe_receiver == null ? null : tmp13_safe_receiver.af('kid');
      var tmp15_safe_receiver = tmp14_safe_receiver == null ? null : get_jsonPrimitive(tmp14_safe_receiver);
      tmp_11 = tmp15_safe_receiver == null ? null : tmp15_safe_receiver.q4u();
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
    var this_0 = tmp0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(JsonElement), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    return tmp0.x21(tmp$ret$1, value);
  };
  protoOf(PresentationBuilder).hd8 = function (key, $completion) {
    var tmp = new $buildAndSignCOROUTINE$0(this, key, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(PresentationBuilder).xd9 = function (key) {
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
  protoOf(dataFunctions$slambda).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return this.gda_1.fromContext();
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda).ida = function (it, completion) {
    var i = new dataFunctions$slambda(completion);
    i.gda_1 = it;
    return i;
  };
  function dataFunctions$slambda_0(resultContinuation) {
    var i = new dataFunctions$slambda(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_1).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_1).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_1).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return this.rda_1.fromContext();
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_1).ida = function (it, completion) {
    var i = new dataFunctions$slambda_1(completion);
    i.rda_1 = it;
    return i;
  };
  function dataFunctions$slambda_2(resultContinuation) {
    var i = new dataFunctions$slambda_1(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_3(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_3).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_3).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_3).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return ensureNotNull(this.adb_1.context.m2(ensureNotNull(this.adb_1.args)));
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_3).ida = function (it, completion) {
    var i = new dataFunctions$slambda_3(completion);
    i.adb_1 = it;
    return i;
  };
  function dataFunctions$slambda_4(resultContinuation) {
    var i = new dataFunctions$slambda_3(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_5(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_5).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_5).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_5).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var context = this.jdb_1.context;
          var tmp0_safe_receiver = context.m2('display');
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
            this_0.p2('name', ensureNotNull(display.af('name')));
            var tmp0_safe_receiver_0 = display.af('description');
            if (tmp0_safe_receiver_0 == null)
              null;
            else {
              this_0.p2('description', tmp0_safe_receiver_0);
            }
            var tmp1_safe_receiver = display.af('locale');
            if (tmp1_safe_receiver == null)
              null;
            else {
              this_0.p2('locale', tmp1_safe_receiver);
            }
            var tmp2_safe_receiver = display.af('logo');
            var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : get_jsonObject(tmp2_safe_receiver);
            if (tmp3_safe_receiver == null)
              null;
            else {
              this_0.p2('logo', new JsonObject(mapOf_0([to('url', ensureNotNull(tmp3_safe_receiver.af('url'))), to('altText', ensureNotNull(tmp3_safe_receiver.af('alt_text')))])));
            }
            var tmp4_safe_receiver = display.af('background_color');
            if (tmp4_safe_receiver == null)
              null;
            else {
              this_0.p2('backgroundColor', tmp4_safe_receiver);
            }
            var tmp5_safe_receiver = display.af('text_color');
            if (tmp5_safe_receiver == null)
              null;
            else {
              this_0.p2('textColor', tmp5_safe_receiver);
            }
            var tmp6_safe_receiver = display.af('background_image');
            var tmp7_safe_receiver = tmp6_safe_receiver == null ? null : get_jsonObject(tmp6_safe_receiver);
            if (tmp7_safe_receiver == null)
              null;
            else {
              this_0.p2('backgroundImage', new JsonObject(mapOf_0([to('url', ensureNotNull(tmp7_safe_receiver.af('url'))), to('altText', ensureNotNull(tmp7_safe_receiver.af('alt_text')))])));
            }
            var tmp8_safe_receiver = display.af('customParameters');
            var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : get_jsonObject(tmp8_safe_receiver);
            var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.af('secondary_image');
            var tmp11_safe_receiver = tmp10_safe_receiver == null ? null : get_jsonObject(tmp10_safe_receiver);
            if (tmp11_safe_receiver == null)
              null;
            else {
              this_0.p2('secondaryImage', new JsonObject(mapOf_0([to('url', ensureNotNull(tmp11_safe_receiver.af('url'))), to('altText', ensureNotNull(tmp11_safe_receiver.af('alt_text')))])));
            }
            destination.n(new JsonObject(this_0.x3()));
          }
          var displayJsonArray = new JsonArray(destination);
          return displayJsonArray;
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_5).ida = function (it, completion) {
    var i = new dataFunctions$slambda_5(completion);
    i.jdb_1 = it;
    return i;
  };
  function dataFunctions$slambda_6(resultContinuation) {
    var i = new dataFunctions$slambda_5(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_7(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_7).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_7).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_7).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return JsonPrimitive(toIso8681WithoutSubSecondPrecision(System_instance.d5v()));
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_7).ida = function (it, completion) {
    var i = new dataFunctions$slambda_7(completion);
    i.sdb_1 = it;
    return i;
  };
  function dataFunctions$slambda_8(resultContinuation) {
    var i = new dataFunctions$slambda_7(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_9(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_9).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_9).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_9).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return JsonPrimitive(toIso8681WithoutSubSecondPrecision(System_instance.d5v().dp(Companion_getInstance().wo(ensureNotNull(this.bdc_1.args)))));
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_9).ida = function (it, completion) {
    var i = new dataFunctions$slambda_9(completion);
    i.bdc_1 = it;
    return i;
  };
  function dataFunctions$slambda_10(resultContinuation) {
    var i = new dataFunctions$slambda_9(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_11(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_11).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_11).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_11).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return JsonPrimitive(System_instance.d5v().toString());
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_11).ida = function (it, completion) {
    var i = new dataFunctions$slambda_11(completion);
    i.kdc_1 = it;
    return i;
  };
  function dataFunctions$slambda_12(resultContinuation) {
    var i = new dataFunctions$slambda_11(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_13(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_13).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_13).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_13).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return JsonPrimitive(System_instance.d5v().toString());
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_13).ida = function (it, completion) {
    var i = new dataFunctions$slambda_13(completion);
    i.tdc_1 = it;
    return i;
  };
  function dataFunctions$slambda_14(resultContinuation) {
    var i = new dataFunctions$slambda_13(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_15(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_15).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_15).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_15).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return JsonPrimitive_0(System_instance.d5v().z5z());
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_15).ida = function (it, completion) {
    var i = new dataFunctions$slambda_15(completion);
    i.cdd_1 = it;
    return i;
  };
  function dataFunctions$slambda_16(resultContinuation) {
    var i = new dataFunctions$slambda_15(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_17(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_17).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_17).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_17).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return JsonPrimitive(System_instance.d5v().dp(Companion_getInstance().wo(ensureNotNull(this.ldd_1.args))).toString());
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_17).ida = function (it, completion) {
    var i = new dataFunctions$slambda_17(completion);
    i.ldd_1 = it;
    return i;
  };
  function dataFunctions$slambda_18(resultContinuation) {
    var i = new dataFunctions$slambda_17(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_19(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_19).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_19).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_19).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return JsonPrimitive_0(System_instance.d5v().dp(Companion_getInstance().wo(ensureNotNull(this.udd_1.args))).z5z());
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_19).ida = function (it, completion) {
    var i = new dataFunctions$slambda_19(completion);
    i.udd_1 = it;
    return i;
  };
  function dataFunctions$slambda_20(resultContinuation) {
    var i = new dataFunctions$slambda_19(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_21(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_21).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_21).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_21).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return JsonPrimitive(System_instance.d5v().e6c(Companion_getInstance().wo(ensureNotNull(this.dde_1.args))).toString());
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_21).ida = function (it, completion) {
    var i = new dataFunctions$slambda_21(completion);
    i.dde_1 = it;
    return i;
  };
  function dataFunctions$slambda_22(resultContinuation) {
    var i = new dataFunctions$slambda_21(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_23(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_23).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_23).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_23).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return JsonPrimitive_0(System_instance.d5v().e6c(Companion_getInstance().wo(ensureNotNull(this.mde_1.args))).z5z());
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_23).ida = function (it, completion) {
    var i = new dataFunctions$slambda_23(completion);
    i.mde_1 = it;
    return i;
  };
  function dataFunctions$slambda_24(resultContinuation) {
    var i = new dataFunctions$slambda_23(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_25(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_25).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_25).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_25).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          return JsonPrimitive('urn:uuid:' + UuidUtils_instance.d9d().toString());
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_25).ida = function (it, completion) {
    var i = new dataFunctions$slambda_25(completion);
    i.vde_1 = it;
    return i;
  };
  function dataFunctions$slambda_26(resultContinuation) {
    var i = new dataFunctions$slambda_25(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_27(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_27).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_27).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_27).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            var tmp_0 = this;
            tmp_0.fdf_1 = HttpClient();
            var tmp_1 = this;
            tmp_1.gdf_1 = ensureNotNull(this.edf_1.args);
            this.hdf_1 = this.fdf_1;
            this.idf_1 = this.gdf_1;
            var tmp_2 = this;
            tmp_2.jdf_1 = this.hdf_1;
            this.kdf_1 = this.jdf_1;
            var tmp_3 = this;
            tmp_3.ldf_1 = this.kdf_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.idf_1);
            tmp_4.mdf_1 = this_0;
            this.ndf_1 = this.ldf_1;
            this.odf_1 = this.mdf_1;
            this.odf_1.j3k_1 = Companion_getInstance_0().c32_1;
            var tmp_5 = this;
            tmp_5.pdf_1 = this.ndf_1;
            var tmp_6 = this;
            tmp_6.qdf_1 = this.odf_1;
            this.rdf_1 = this.pdf_1;
            this.sdf_1 = this.qdf_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.sdf_1, this.rdf_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.tdf_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.tdf_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return JsonPrimitive(ARGUMENT);
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
  protoOf(dataFunctions$slambda_27).ida = function (it, completion) {
    var i = new dataFunctions$slambda_27(completion);
    i.edf_1 = it;
    return i;
  };
  function dataFunctions$slambda_28(resultContinuation) {
    var i = new dataFunctions$slambda_27(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_29(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_29).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_29).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_29).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.ddg_1 = Default_getInstance();
            var tmp_0 = this;
            tmp_0.edg_1 = HttpClient();
            var tmp_1 = this;
            tmp_1.fdg_1 = ensureNotNull(this.cdg_1.args);
            this.gdg_1 = this.edg_1;
            this.hdg_1 = this.fdg_1;
            var tmp_2 = this;
            tmp_2.idg_1 = this.gdg_1;
            this.jdg_1 = this.idg_1;
            var tmp_3 = this;
            tmp_3.kdg_1 = this.jdg_1;
            var tmp_4 = this;
            var this_0 = new HttpRequestBuilder();
            url(this_0, this.hdg_1);
            tmp_4.ldg_1 = this_0;
            this.mdg_1 = this.kdg_1;
            this.ndg_1 = this.ldg_1;
            this.ndg_1.j3k_1 = Companion_getInstance_0().c32_1;
            var tmp_5 = this;
            tmp_5.odg_1 = this.mdg_1;
            var tmp_6 = this;
            tmp_6.pdg_1 = this.ndg_1;
            this.qdg_1 = this.odg_1;
            this.rdg_1 = this.pdg_1;
            this.n9_1 = 1;
            suspendResult = (new HttpStatement(this.rdg_1, this.qdg_1)).r4l(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.sdg_1 = suspendResult;
            this.n9_1 = 2;
            suspendResult = bodyAsText(this.sdg_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            return this.ddg_1.h4s(ARGUMENT);
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
  protoOf(dataFunctions$slambda_29).ida = function (it, completion) {
    var i = new dataFunctions$slambda_29(completion);
    i.cdg_1 = it;
    return i;
  };
  function dataFunctions$slambda_30(resultContinuation) {
    var i = new dataFunctions$slambda_29(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function dataFunctions$slambda_31(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(dataFunctions$slambda_31).hda = function (it, $completion) {
    var tmp = this.ida(it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(dataFunctions$slambda_31).va = function (p1, $completion) {
    return this.hda(p1 instanceof FunctionCall ? p1 : THROW_CCE(), $completion);
  };
  protoOf(dataFunctions$slambda_31).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        if (tmp === 0) {
          this.o9_1 = 1;
          var tmp0_safe_receiver = this.bdh_1.history;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m2(ensureNotNull(this.bdh_1.args));
          var tmp_0;
          if (tmp1_elvis_lhs == null) {
            throw IllegalArgumentException_init_$Create$('No such function in history or no history: ' + this.bdh_1.args);
          } else {
            tmp_0 = tmp1_elvis_lhs;
          }
          return tmp_0;
        } else if (tmp === 1) {
          throw this.q9_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(dataFunctions$slambda_31).ida = function (it, completion) {
    var i = new dataFunctions$slambda_31(completion);
    i.bdh_1 = it;
    return i;
  };
  function dataFunctions$slambda_32(resultContinuation) {
    var i = new dataFunctions$slambda_31(resultContinuation);
    var l = function (it, $completion) {
      return i.hda(it, $completion);
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
  protoOf(IssuanceInformation).cdh = function () {
    return this.w3cVc;
  };
  protoOf(IssuanceInformation).ddh = function () {
    return this.jwtOptions;
  };
  protoOf(IssuanceInformation).dc = function () {
    return this.w3cVc;
  };
  protoOf(IssuanceInformation).ec = function () {
    return this.jwtOptions;
  };
  protoOf(IssuanceInformation).edh = function (w3cVc, jwtOptions) {
    return new IssuanceInformation(w3cVc, jwtOptions);
  };
  protoOf(IssuanceInformation).copy = function (w3cVc, jwtOptions, $super) {
    w3cVc = w3cVc === VOID ? this.w3cVc : w3cVc;
    jwtOptions = jwtOptions === VOID ? this.jwtOptions : jwtOptions;
    return $super === VOID ? this.edh(w3cVc, jwtOptions) : $super.edh.call(this, w3cVc, jwtOptions);
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
    if (!(isInterface(jwtRes, KtMap) ? jwtRes : THROW_CCE()).k2(attribute)) {
      var completed = completer();
      if (!(completed == null)) {
        // Inline function 'kotlin.collections.set' call
        jwtRes.p2(attribute, completed);
      }
    }
  }
  function Issuer$mergingToVc$lambda($vc) {
    return function () {
      return $vc.af('id');
    };
  }
  function Issuer$mergingToVc$lambda_0($vc) {
    return function () {
      var tmp0_safe_receiver = $vc.af(V1_NotAfter_getInstance().dd6());
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_1().x6a(get_jsonPrimitive(tmp0_safe_receiver).q4u());
      }
      var tmp1_safe_receiver = tmp;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z5z();
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
        var tmp4_safe_receiver = $vc.af(V2_NotAfter_getInstance().dd6());
        var tmp_2;
        if (tmp4_safe_receiver == null) {
          tmp_2 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_2 = Companion_getInstance_1().x6a(get_jsonPrimitive(tmp4_safe_receiver).q4u());
        }
        var tmp5_safe_receiver = tmp_2;
        var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.z5z();
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
      var tmp0_safe_receiver = $vc.af('issuanceDate');
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_1().x6a(get_jsonPrimitive(tmp0_safe_receiver).q4u());
      }
      var tmp1_safe_receiver = tmp;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z5z();
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
      var tmp0_safe_receiver = $vc.af('issuanceDate');
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp = Companion_getInstance_1().x6a(get_jsonPrimitive(tmp0_safe_receiver).q4u());
      }
      var tmp1_safe_receiver = tmp;
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.z5z();
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
    this.odh_1 = $this_mergingJwtIssueAsync;
    this.pdh_1 = $issuerKey;
    this.qdh_1 = $issuerId;
    this.rdh_1 = $subjectDid;
    this.sdh_1 = $mappings;
    this.tdh_1 = $additionalJwtHeader;
    this.udh_1 = $additionalJwtOptions;
    this.vdh_1 = $display;
    this.wdh_1 = $completeJwtWithDefaultCredentialData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Issuer$mergingJwtIssueAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Issuer$mergingJwtIssueAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(Issuer$mergingJwtIssueAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Issuer_instance.xdh(this.odh_1, this.pdh_1, this.qdh_1, this.rdh_1, this.sdh_1, this.tdh_1, this.udh_1, this.vdh_1, this.wdh_1, this);
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
  protoOf(Issuer$mergingJwtIssueAsync$slambda).ja = function (completion) {
    return new Issuer$mergingJwtIssueAsync$slambda(this.odh_1, this.pdh_1, this.qdh_1, this.rdh_1, this.sdh_1, this.tdh_1, this.udh_1, this.vdh_1, this.wdh_1, completion);
  };
  function Issuer$mergingJwtIssueAsync$slambda_0($this_mergingJwtIssueAsync, $issuerKey, $issuerId, $subjectDid, $mappings, $additionalJwtHeader, $additionalJwtOptions, $display, $completeJwtWithDefaultCredentialData, resultContinuation) {
    var i = new Issuer$mergingJwtIssueAsync$slambda($this_mergingJwtIssueAsync, $issuerKey, $issuerId, $subjectDid, $mappings, $additionalJwtHeader, $additionalJwtOptions, $display, $completeJwtWithDefaultCredentialData, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Issuer$mergingToVcAsync$slambda($this_mergingToVcAsync, $issuerId, $subjectDid, $mappings, $display, $completeJwtWithDefaultCredentialData, resultContinuation) {
    this.gdi_1 = $this_mergingToVcAsync;
    this.hdi_1 = $issuerId;
    this.idi_1 = $subjectDid;
    this.jdi_1 = $mappings;
    this.kdi_1 = $display;
    this.ldi_1 = $completeJwtWithDefaultCredentialData;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Issuer$mergingToVcAsync$slambda).mdi = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Issuer$mergingToVcAsync$slambda).ac = function ($completion) {
    return this.mdi($completion);
  };
  protoOf(Issuer$mergingToVcAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Issuer_instance.ndi(this.gdi_1, this.hdi_1, this.idi_1, this.jdi_1, this.kdi_1, this.ldi_1, this);
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
  protoOf(Issuer$mergingToVcAsync$slambda).ja = function (completion) {
    return new Issuer$mergingToVcAsync$slambda(this.gdi_1, this.hdi_1, this.idi_1, this.jdi_1, this.kdi_1, this.ldi_1, completion);
  };
  function Issuer$mergingToVcAsync$slambda_0($this_mergingToVcAsync, $issuerId, $subjectDid, $mappings, $display, $completeJwtWithDefaultCredentialData, resultContinuation) {
    var i = new Issuer$mergingToVcAsync$slambda($this_mergingToVcAsync, $issuerId, $subjectDid, $mappings, $display, $completeJwtWithDefaultCredentialData, resultContinuation);
    var l = function ($completion) {
      return i.mdi($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Issuer$getKidHeaderAsync$slambda($issuerKey, $issuerDid, resultContinuation) {
    this.wdi_1 = $issuerKey;
    this.xdi_1 = $issuerDid;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Issuer$getKidHeaderAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Issuer$getKidHeaderAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(Issuer$getKidHeaderAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Issuer_instance.ydi(this.wdi_1, this.xdi_1, this);
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
  protoOf(Issuer$getKidHeaderAsync$slambda).ja = function (completion) {
    return new Issuer$getKidHeaderAsync$slambda(this.wdi_1, this.xdi_1, completion);
  };
  function Issuer$getKidHeaderAsync$slambda_0($issuerKey, $issuerDid, resultContinuation) {
    var i = new Issuer$getKidHeaderAsync$slambda($issuerKey, $issuerDid, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Issuer$mergingSdJwtIssueAsync$slambda($this_mergingSdJwtIssueAsync, $issuerKey, $issuerId, $subjectDid, $display, $mappings, $type, $additionalJwtHeaders, $additionalJwtOptions, $completeJwtWithDefaultCredentialData, $disclosureMap, resultContinuation) {
    this.hdj_1 = $this_mergingSdJwtIssueAsync;
    this.idj_1 = $issuerKey;
    this.jdj_1 = $issuerId;
    this.kdj_1 = $subjectDid;
    this.ldj_1 = $display;
    this.mdj_1 = $mappings;
    this.ndj_1 = $type;
    this.odj_1 = $additionalJwtHeaders;
    this.pdj_1 = $additionalJwtOptions;
    this.qdj_1 = $completeJwtWithDefaultCredentialData;
    this.rdj_1 = $disclosureMap;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Issuer$mergingSdJwtIssueAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Issuer$mergingSdJwtIssueAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(Issuer$mergingSdJwtIssueAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Issuer_instance.sdj(this.hdj_1, this.idj_1, this.jdj_1, this.kdj_1, this.ldj_1, this.mdj_1, this.ndj_1, this.odj_1, this.pdj_1, this.qdj_1, this.rdj_1, this);
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
  protoOf(Issuer$mergingSdJwtIssueAsync$slambda).ja = function (completion) {
    return new Issuer$mergingSdJwtIssueAsync$slambda(this.hdj_1, this.idj_1, this.jdj_1, this.kdj_1, this.ldj_1, this.mdj_1, this.ndj_1, this.odj_1, this.pdj_1, this.qdj_1, this.rdj_1, completion);
  };
  function Issuer$mergingSdJwtIssueAsync$slambda_0($this_mergingSdJwtIssueAsync, $issuerKey, $issuerId, $subjectDid, $display, $mappings, $type, $additionalJwtHeaders, $additionalJwtOptions, $completeJwtWithDefaultCredentialData, $disclosureMap, resultContinuation) {
    var i = new Issuer$mergingSdJwtIssueAsync$slambda($this_mergingSdJwtIssueAsync, $issuerKey, $issuerId, $subjectDid, $display, $mappings, $type, $additionalJwtHeaders, $additionalJwtOptions, $completeJwtWithDefaultCredentialData, $disclosureMap, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function Issuer$baseIssueAsync$slambda($this_baseIssueAsync, $key, $issuerId, $subject, $dataOverwrites, $dataUpdates, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation) {
    this.bdk_1 = $this_baseIssueAsync;
    this.cdk_1 = $key;
    this.ddk_1 = $issuerId;
    this.edk_1 = $subject;
    this.fdk_1 = $dataOverwrites;
    this.gdk_1 = $dataUpdates;
    this.hdk_1 = $additionalJwtHeaders;
    this.idk_1 = $additionalJwtOptions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Issuer$baseIssueAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Issuer$baseIssueAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(Issuer$baseIssueAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = Issuer_instance.jdk(this.bdk_1, this.cdk_1, this.ddk_1, this.edk_1, this.fdk_1, this.gdk_1, this.hdk_1, this.idk_1, this);
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
  protoOf(Issuer$baseIssueAsync$slambda).ja = function (completion) {
    return new Issuer$baseIssueAsync$slambda(this.bdk_1, this.cdk_1, this.ddk_1, this.edk_1, this.fdk_1, this.gdk_1, this.hdk_1, this.idk_1, completion);
  };
  function Issuer$baseIssueAsync$slambda_0($this_baseIssueAsync, $key, $issuerId, $subject, $dataOverwrites, $dataUpdates, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation) {
    var i = new Issuer$baseIssueAsync$slambda($this_baseIssueAsync, $key, $issuerId, $subject, $dataOverwrites, $dataUpdates, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $mergingJwtIssueCOROUTINE$2(_this__u8e3s4, _this__u8e3s4_0, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sdk_1 = _this__u8e3s4;
    this.tdk_1 = _this__u8e3s4_0;
    this.udk_1 = issuerKey;
    this.vdk_1 = issuerId;
    this.wdk_1 = subjectDid;
    this.xdk_1 = mappings;
    this.ydk_1 = additionalJwtHeader;
    this.zdk_1 = additionalJwtOptions;
    this.adl_1 = display;
    this.bdl_1 = completeJwtWithDefaultCredentialData;
  }
  protoOf($mergingJwtIssueCOROUTINE$2).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = this.sdk_1.ndi(this.tdk_1, this.vdk_1, this.wdk_1, this.xdk_1, this.adl_1, this.bdl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.cdl_1 = suspendResult;
            this.ddl_1 = this.cdl_1;
            var tmp_0 = this;
            tmp_0.edl_1 = this.ddl_1;
            this.fdl_1 = this.edl_1;
            this.gdl_1 = DidUtils_getInstance().isDidUrl(this.vdk_1) ? this.vdk_1 : null;
            this.hdl_1 = this.fdl_1.w3cVc;
            this.n9_1 = 2;
            suspendResult = Issuer_instance.ydi(this.udk_1, this.gdl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.idl_1 = suspendResult;
            this.n9_1 = 3;
            var this_0 = toMutableMap(this.ydk_1);
            this_0.p2('typ', JsonUtils_getInstance().toJsonElement('JWT'));
            var this_1 = toMutableMap(this.zdk_1);
            this_1.r2(this.fdl_1.jwtOptions);
            suspendResult = this.hdl_1.jdl(this.udk_1, this.vdk_1, this.idl_1, this.wdk_1, this_0, this_1, this);
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
  protoOf($mergingJwtIssueCOROUTINE$2)['<set-state>'] = protoOf($mergingJwtIssueCOROUTINE$2).u9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-state>'] = protoOf($mergingJwtIssueCOROUTINE$2).v9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<set-exceptionState>'] = protoOf($mergingJwtIssueCOROUTINE$2).w9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-exceptionState>'] = protoOf($mergingJwtIssueCOROUTINE$2).x9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<set-result>'] = protoOf($mergingJwtIssueCOROUTINE$2).y9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-result>'] = protoOf($mergingJwtIssueCOROUTINE$2).z9;
  protoOf($mergingJwtIssueCOROUTINE$2)['<set-exception>'] = protoOf($mergingJwtIssueCOROUTINE$2).aa;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-exception>'] = protoOf($mergingJwtIssueCOROUTINE$2).ba;
  protoOf($mergingJwtIssueCOROUTINE$2)['<set-finallyPath>'] = protoOf($mergingJwtIssueCOROUTINE$2).ca;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-finallyPath>'] = protoOf($mergingJwtIssueCOROUTINE$2).da;
  protoOf($mergingJwtIssueCOROUTINE$2)['<get-context>'] = protoOf($mergingJwtIssueCOROUTINE$2).t9;
  function $mergingSdJwtIssueCOROUTINE$3(_this__u8e3s4, _this__u8e3s4_0, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sdl_1 = _this__u8e3s4;
    this.tdl_1 = _this__u8e3s4_0;
    this.udl_1 = issuerKey;
    this.vdl_1 = issuerId;
    this.wdl_1 = subjectDid;
    this.xdl_1 = display;
    this.ydl_1 = mappings;
    this.zdl_1 = type;
    this.adm_1 = additionalJwtHeaders;
    this.bdm_1 = additionalJwtOptions;
    this.cdm_1 = completeJwtWithDefaultCredentialData;
    this.ddm_1 = disclosureMap;
  }
  protoOf($mergingSdJwtIssueCOROUTINE$3).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.n9_1 = 1;
            suspendResult = this.sdl_1.ndi(this.tdl_1, this.vdl_1, this.wdl_1, this.ydl_1, this.xdl_1, this.cdm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.edm_1 = suspendResult;
            this.fdm_1 = this.edm_1;
            var tmp_0 = this;
            tmp_0.gdm_1 = this.fdm_1;
            this.hdm_1 = this.gdm_1;
            this.idm_1 = DidUtils_getInstance().isDidUrl(this.vdl_1) ? this.vdl_1 : null;
            this.jdm_1 = this.hdm_1.w3cVc;
            this.n9_1 = 2;
            suspendResult = Issuer_instance.ydi(this.udl_1, this.idm_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.kdm_1 = suspendResult;
            this.n9_1 = 3;
            var this_0 = toMutableMap(this.adm_1);
            this_0.p2('typ', JsonUtils_getInstance().toJsonElement(this.zdl_1));
            var this_1 = toMutableMap(this.bdm_1);
            this_1.r2(this.hdm_1.jwtOptions);
            suspendResult = this.jdm_1.ldm(this.udl_1, this.vdl_1, this.kdm_1, this.wdl_1, this.ddm_1, this_0, this_1, this);
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
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<set-state>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).u9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-state>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).v9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<set-exceptionState>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).w9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-exceptionState>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).x9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<set-result>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).y9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-result>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).z9;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<set-exception>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).aa;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-exception>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).ba;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<set-finallyPath>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).ca;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-finallyPath>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).da;
  protoOf($mergingSdJwtIssueCOROUTINE$3)['<get-context>'] = protoOf($mergingSdJwtIssueCOROUTINE$3).t9;
  function $mergingToVcCOROUTINE$4(_this__u8e3s4, _this__u8e3s4_0, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.udm_1 = _this__u8e3s4;
    this.vdm_1 = _this__u8e3s4_0;
    this.wdm_1 = issuerId;
    this.xdm_1 = subjectDid;
    this.ydm_1 = mappings;
    this.zdm_1 = display;
    this.adn_1 = completeJwtWithDefaultCredentialData;
  }
  protoOf($mergingToVcCOROUTINE$4).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            var tmp_0 = this;
            var this_0 = mapOf_0([to('issuerId', this.wdm_1), to('issuerDid', DidUtils_getInstance().isDidUrl(this.wdm_1) ? this.wdm_1 : null), to('subjectDid', this.xdm_1), to('display', this.zdm_1)]);
            var result = LinkedHashMap_init_$Create$();
            var _iterator__ex2g4s = this_0.z().p();
            while (_iterator__ex2g4s.q()) {
              var entry = _iterator__ex2g4s.r();
              var value = entry.b1();
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
                result.p2(entry.a1(), entry.b1());
              }
            }

            var destination = LinkedHashMap_init_$Create$_0(mapCapacity(result.s()));
            var _iterator__ex2g4s_0 = result.z().p();
            while (_iterator__ex2g4s_0.q()) {
              var element = _iterator__ex2g4s_0.r();
              var tmp_6 = element.a1();
              var value_0 = element.b1();
              var tmp_7;
              if (value_0 instanceof JsonElement) {
                tmp_7 = value_0;
              } else {
                tmp_7 = JsonPrimitive(toString_0(value_0));
              }
              destination.p2(tmp_6, tmp_7);
            }

            tmp_0.bdn_1 = destination;
            this.n9_1 = 1;
            suspendResult = CredentialDataMergeUtils_getInstance().ddn(this.vdm_1, this.ydm_1, this.bdn_1, get_dataFunctions(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var mapped = suspendResult;
            var vc = mapped.vc;
            var this_2 = mapped.results;
            var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(this_2.s()));
            var _iterator__ex2g4s_1 = this_2.z().p();
            while (_iterator__ex2g4s_1.q()) {
              var element_0 = _iterator__ex2g4s_1.r();
              var tmp_8 = removePrefix(element_0.a1(), 'jwt:');
              destination_0.p2(tmp_8, element_0.b1());
            }

            var jwtRes = toMutableMap(destination_0);
            if (this.adn_1) {
              mergingToVc$completeJwtAttributes(jwtRes, 'jti', Issuer$mergingToVc$lambda(vc));
              var tmp_9 = JwtClaims_NotAfter_getInstance().dd6();
              mergingToVc$completeJwtAttributes(jwtRes, tmp_9, Issuer$mergingToVc$lambda_0(vc));
              mergingToVc$completeJwtAttributes(jwtRes, 'iat', Issuer$mergingToVc$lambda_1(vc));
              mergingToVc$completeJwtAttributes(jwtRes, 'nbf', Issuer$mergingToVc$lambda_2(vc));
            }

            return new IssuanceInformation(vc, jwtRes);
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
  protoOf($mergingToVcCOROUTINE$4)['<set-state>'] = protoOf($mergingToVcCOROUTINE$4).u9;
  protoOf($mergingToVcCOROUTINE$4)['<get-state>'] = protoOf($mergingToVcCOROUTINE$4).v9;
  protoOf($mergingToVcCOROUTINE$4)['<set-exceptionState>'] = protoOf($mergingToVcCOROUTINE$4).w9;
  protoOf($mergingToVcCOROUTINE$4)['<get-exceptionState>'] = protoOf($mergingToVcCOROUTINE$4).x9;
  protoOf($mergingToVcCOROUTINE$4)['<set-result>'] = protoOf($mergingToVcCOROUTINE$4).y9;
  protoOf($mergingToVcCOROUTINE$4)['<get-result>'] = protoOf($mergingToVcCOROUTINE$4).z9;
  protoOf($mergingToVcCOROUTINE$4)['<set-exception>'] = protoOf($mergingToVcCOROUTINE$4).aa;
  protoOf($mergingToVcCOROUTINE$4)['<get-exception>'] = protoOf($mergingToVcCOROUTINE$4).ba;
  protoOf($mergingToVcCOROUTINE$4)['<set-finallyPath>'] = protoOf($mergingToVcCOROUTINE$4).ca;
  protoOf($mergingToVcCOROUTINE$4)['<get-finallyPath>'] = protoOf($mergingToVcCOROUTINE$4).da;
  protoOf($mergingToVcCOROUTINE$4)['<get-context>'] = protoOf($mergingToVcCOROUTINE$4).t9;
  function $getKidHeaderCOROUTINE$5(_this__u8e3s4, issuerKey, issuerDid, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mdn_1 = _this__u8e3s4;
    this.ndn_1 = issuerKey;
    this.odn_1 = issuerDid;
  }
  protoOf($getKidHeaderCOROUTINE$5).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var this_0 = this.odn_1;
            if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
              if (startsWith(this.odn_1, 'did:key')) {
                this.qdn_1 = this.odn_1 + '#' + removePrefix(this.odn_1, 'did:key:');
                this.n9_1 = 3;
                continue $sm;
              } else {
                this.rdn_1 = this.odn_1 + '#';
                this.n9_1 = 2;
                suspendResult = this.ndn_1.d6m(this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.n9_1 = 1;
              suspendResult = this.ndn_1.d6m(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.pdn_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            this.qdn_1 = this.rdn_1 + ARGUMENT;
            this.n9_1 = 3;
            continue $sm;
          case 3:
            this.pdn_1 = this.qdn_1;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            return this.pdn_1;
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
  protoOf($getKidHeaderCOROUTINE$5)['<set-state>'] = protoOf($getKidHeaderCOROUTINE$5).u9;
  protoOf($getKidHeaderCOROUTINE$5)['<get-state>'] = protoOf($getKidHeaderCOROUTINE$5).v9;
  protoOf($getKidHeaderCOROUTINE$5)['<set-exceptionState>'] = protoOf($getKidHeaderCOROUTINE$5).w9;
  protoOf($getKidHeaderCOROUTINE$5)['<get-exceptionState>'] = protoOf($getKidHeaderCOROUTINE$5).x9;
  protoOf($getKidHeaderCOROUTINE$5)['<set-result>'] = protoOf($getKidHeaderCOROUTINE$5).y9;
  protoOf($getKidHeaderCOROUTINE$5)['<get-result>'] = protoOf($getKidHeaderCOROUTINE$5).z9;
  protoOf($getKidHeaderCOROUTINE$5)['<set-exception>'] = protoOf($getKidHeaderCOROUTINE$5).aa;
  protoOf($getKidHeaderCOROUTINE$5)['<get-exception>'] = protoOf($getKidHeaderCOROUTINE$5).ba;
  protoOf($getKidHeaderCOROUTINE$5)['<set-finallyPath>'] = protoOf($getKidHeaderCOROUTINE$5).ca;
  protoOf($getKidHeaderCOROUTINE$5)['<get-finallyPath>'] = protoOf($getKidHeaderCOROUTINE$5).da;
  protoOf($getKidHeaderCOROUTINE$5)['<get-context>'] = protoOf($getKidHeaderCOROUTINE$5).t9;
  function Issuer() {
  }
  protoOf(Issuer).jdk = function (_this__u8e3s4, key, issuerId, subject, dataOverwrites, dataUpdates, additionalJwtHeaders, additionalJwtOptions, $completion) {
    var overwritten = W3CVcUtils_instance.overwrite(_this__u8e3s4, dataOverwrites);
    var updated = overwritten;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = dataUpdates.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var k = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.b1();
      updated = W3CVcUtils_instance.update(updated, k, v);
    }
    return _this__u8e3s4.signJws$default(key, issuerId, VOID, subject, additionalJwtHeaders, additionalJwtOptions, $completion);
  };
  protoOf(Issuer).xdh = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $completion) {
    var tmp = new $mergingJwtIssueCOROUTINE$2(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Issuer).mergingJwtIssue$default = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $completion, $super) {
    display = display === VOID ? new JsonArray(emptyList()) : display;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.xdh(_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $completion) : $super.xdh.call(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $completion);
  };
  protoOf(Issuer).sdj = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $completion) {
    var tmp = new $mergingSdJwtIssueCOROUTINE$3(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Issuer).mergingSdJwtIssue$default = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $completion, $super) {
    display = display === VOID ? new JsonArray(emptyList()) : display;
    type = type === VOID ? 'JWT' : type;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.sdj(_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $completion) : $super.sdj.call(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $completion);
  };
  protoOf(Issuer).ndi = function (_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $completion) {
    var tmp = new $mergingToVcCOROUTINE$4(this, _this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Issuer).mergingToVc$default = function (_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $completion, $super) {
    display = display === VOID ? null : display;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.ndi(_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $completion) : $super.ndi.call(this, _this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $completion);
  };
  protoOf(Issuer).ydi = function (issuerKey, issuerDid, $completion) {
    var tmp = new $getKidHeaderCOROUTINE$5(this, issuerKey, issuerDid, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(Issuer).getKidHeader$default = function (issuerKey, issuerDid, $completion, $super) {
    issuerDid = issuerDid === VOID ? null : issuerDid;
    return $super === VOID ? this.ydi(issuerKey, issuerDid, $completion) : $super.ydi.call(this, issuerKey, issuerDid, $completion);
  };
  protoOf(Issuer).sdn = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData) {
    var tmp = Issuer$mergingJwtIssueAsync$slambda_0(_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Issuer).mergingJwtIssueAsync$default = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData, $super) {
    display = display === VOID ? new JsonArray(emptyList()) : display;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.sdn(_this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData) : $super.sdn.call(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, mappings, additionalJwtHeader, additionalJwtOptions, display, completeJwtWithDefaultCredentialData);
  };
  protoOf(Issuer).tdn = function (_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData) {
    var tmp = Issuer$mergingToVcAsync$slambda_0(_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Issuer).mergingToVcAsync$default = function (_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData, $super) {
    display = display === VOID ? null : display;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.tdn(_this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData) : $super.tdn.call(this, _this__u8e3s4, issuerId, subjectDid, mappings, display, completeJwtWithDefaultCredentialData);
  };
  protoOf(Issuer).udn = function (issuerKey, issuerDid) {
    var tmp = Issuer$getKidHeaderAsync$slambda_0(issuerKey, issuerDid, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Issuer).getKidHeaderAsync$default = function (issuerKey, issuerDid, $super) {
    issuerDid = issuerDid === VOID ? null : issuerDid;
    return $super === VOID ? this.udn(issuerKey, issuerDid) : $super.udn.call(this, issuerKey, issuerDid);
  };
  protoOf(Issuer).vdn = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap) {
    var tmp = Issuer$mergingSdJwtIssueAsync$slambda_0(_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(Issuer).mergingSdJwtIssueAsync$default = function (_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap, $super) {
    display = display === VOID ? new JsonArray(emptyList()) : display;
    type = type === VOID ? 'JWT' : type;
    completeJwtWithDefaultCredentialData = completeJwtWithDefaultCredentialData === VOID ? true : completeJwtWithDefaultCredentialData;
    return $super === VOID ? this.vdn(_this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap) : $super.vdn.call(this, _this__u8e3s4, issuerKey, issuerId, subjectDid, display, mappings, type, additionalJwtHeaders, additionalJwtOptions, completeJwtWithDefaultCredentialData, disclosureMap);
  };
  protoOf(Issuer).wdn = function (_this__u8e3s4, key, issuerId, subject, dataOverwrites, dataUpdates, additionalJwtHeaders, additionalJwtOptions) {
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
  protoOf(JwsHeader).xdn = function () {
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
  protoOf(JwsOption).ydn = function () {
    return this.SUBJECT;
  };
  protoOf(JwsOption).zdn = function () {
    return this.ISSUER;
  };
  protoOf(JwsOption).ado = function () {
    return this.EXPIRATION;
  };
  protoOf(JwsOption).bdo = function () {
    return this.NOT_BEFORE;
  };
  protoOf(JwsOption).cdo = function () {
    return this.VC_ID;
  };
  protoOf(JwsOption).ddo = function () {
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
  protoOf(KeyInfo).mav = function () {
    return this.keyId;
  };
  protoOf(KeyInfo).a1 = function () {
    return this.key;
  };
  protoOf(KeyInfo).dc = function () {
    return this.keyId;
  };
  protoOf(KeyInfo).ec = function () {
    return this.key;
  };
  protoOf(KeyInfo).edo = function (keyId, key) {
    return new KeyInfo(keyId, key);
  };
  protoOf(KeyInfo).copy = function (keyId, key, $super) {
    keyId = keyId === VOID ? this.keyId : keyId;
    key = key === VOID ? this.key : key;
    return $super === VOID ? this.edo(keyId, key) : $super.edo.call(this, keyId, key);
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
  protoOf(KeysInfo).mav = function () {
    return this.keyId;
  };
  protoOf(KeysInfo).n2 = function () {
    return this.keys;
  };
  protoOf(KeysInfo).dc = function () {
    return this.keyId;
  };
  protoOf(KeysInfo).ec = function () {
    return this.keys;
  };
  protoOf(KeysInfo).fdo = function (keyId, keys) {
    return new KeysInfo(keyId, keys);
  };
  protoOf(KeysInfo).copy = function (keyId, keys, $super) {
    keyId = keyId === VOID ? this.keyId : keyId;
    keys = keys === VOID ? this.keys : keys;
    return $super === VOID ? this.fdo(keyId, keys) : $super.fdo.call(this, keyId, keys);
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
    this.odo_1 = this$0;
    this.pdo_1 = $jws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwsSignatureScheme$getIssuerKeyInfoAsync$slambda).qdo = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JwsSignatureScheme$getIssuerKeyInfoAsync$slambda).ac = function ($completion) {
    return this.qdo($completion);
  };
  protoOf(JwsSignatureScheme$getIssuerKeyInfoAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.odo_1.rdo(this.pdo_1, this);
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
  protoOf(JwsSignatureScheme$getIssuerKeyInfoAsync$slambda).ja = function (completion) {
    return new JwsSignatureScheme$getIssuerKeyInfoAsync$slambda(this.odo_1, this.pdo_1, completion);
  };
  function JwsSignatureScheme$getIssuerKeyInfoAsync$slambda_0(this$0, $jws, resultContinuation) {
    var i = new JwsSignatureScheme$getIssuerKeyInfoAsync$slambda(this$0, $jws, resultContinuation);
    var l = function ($completion) {
      return i.qdo($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JwsSignatureScheme$verifyAsync$slambda(this$0, $data, resultContinuation) {
    this.adp_1 = this$0;
    this.bdp_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwsSignatureScheme$verifyAsync$slambda).y6o = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwsSignatureScheme$verifyAsync$slambda).ac = function ($completion) {
    return this.y6o($completion);
  };
  protoOf(JwsSignatureScheme$verifyAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.adp_1.cdp(this.bdp_1, this);
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
  protoOf(JwsSignatureScheme$verifyAsync$slambda).ja = function (completion) {
    return new JwsSignatureScheme$verifyAsync$slambda(this.adp_1, this.bdp_1, completion);
  };
  function JwsSignatureScheme$verifyAsync$slambda_0(this$0, $data, resultContinuation) {
    var i = new JwsSignatureScheme$verifyAsync$slambda(this$0, $data, resultContinuation);
    var l = function ($completion) {
      return i.y6o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JwsSignatureScheme$verifySDJwtAsync$slambda(this$0, $data, $jwtCryptoProvider, resultContinuation) {
    this.ldp_1 = this$0;
    this.mdp_1 = $data;
    this.ndp_1 = $jwtCryptoProvider;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwsSignatureScheme$verifySDJwtAsync$slambda).y6o = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwsSignatureScheme$verifySDJwtAsync$slambda).ac = function ($completion) {
    return this.y6o($completion);
  };
  protoOf(JwsSignatureScheme$verifySDJwtAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.n9_1 = 1;
            suspendResult = this.ldp_1.odp(this.mdp_1, this.ndp_1, this);
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
  protoOf(JwsSignatureScheme$verifySDJwtAsync$slambda).ja = function (completion) {
    return new JwsSignatureScheme$verifySDJwtAsync$slambda(this.ldp_1, this.mdp_1, this.ndp_1, completion);
  };
  function JwsSignatureScheme$verifySDJwtAsync$slambda_0(this$0, $data, $jwtCryptoProvider, resultContinuation) {
    var i = new JwsSignatureScheme$verifySDJwtAsync$slambda(this$0, $data, $jwtCryptoProvider, resultContinuation);
    var l = function ($completion) {
      return i.y6o($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JwsSignatureScheme$getIssuerKeysInfoAsync$slambda(this$0, $jws, resultContinuation) {
    this.xdp_1 = this$0;
    this.ydp_1 = $jws;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwsSignatureScheme$getIssuerKeysInfoAsync$slambda).zdp = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JwsSignatureScheme$getIssuerKeysInfoAsync$slambda).ac = function ($completion) {
    return this.zdp($completion);
  };
  protoOf(JwsSignatureScheme$getIssuerKeysInfoAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.xdp_1.adq(this.ydp_1, this);
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
  protoOf(JwsSignatureScheme$getIssuerKeysInfoAsync$slambda).ja = function (completion) {
    return new JwsSignatureScheme$getIssuerKeysInfoAsync$slambda(this.xdp_1, this.ydp_1, completion);
  };
  function JwsSignatureScheme$getIssuerKeysInfoAsync$slambda_0(this$0, $jws, resultContinuation) {
    var i = new JwsSignatureScheme$getIssuerKeysInfoAsync$slambda(this$0, $jws, resultContinuation);
    var l = function ($completion) {
      return i.zdp($completion);
    };
    l.$arity = 0;
    return l;
  }
  function JwsSignatureScheme$signAsync$slambda(this$0, $data, $key, $jwtHeaders, $jwtOptions, resultContinuation) {
    this.jdq_1 = this$0;
    this.kdq_1 = $data;
    this.ldq_1 = $key;
    this.mdq_1 = $jwtHeaders;
    this.ndq_1 = $jwtOptions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JwsSignatureScheme$signAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JwsSignatureScheme$signAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(JwsSignatureScheme$signAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.jdq_1.odq(this.kdq_1, this.ldq_1, this.mdq_1, this.ndq_1, this);
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
  protoOf(JwsSignatureScheme$signAsync$slambda).ja = function (completion) {
    return new JwsSignatureScheme$signAsync$slambda(this.jdq_1, this.kdq_1, this.ldq_1, this.mdq_1, this.ndq_1, completion);
  };
  function JwsSignatureScheme$signAsync$slambda_0(this$0, $data, $key, $jwtHeaders, $jwtOptions, resultContinuation) {
    var i = new JwsSignatureScheme$signAsync$slambda(this$0, $data, $key, $jwtHeaders, $jwtOptions, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getIssuerKeyInfoCOROUTINE$6(_this__u8e3s4, jws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.xdq_1 = _this__u8e3s4;
    this.ydq_1 = jws;
  }
  protoOf($getIssuerKeyInfoCOROUTINE$6).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 9;
            this.zdq_1 = JwsUtils_instance.decodeJws(substringBefore(this.ydq_1, '~'));
            var tmp_0 = this;
            var tmp0_safe_receiver = this.zdq_1.header.af('kid');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Missing key ID in JWS header');
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }

            tmp_0.adr_1 = tmp_1;
            var tmp_2 = this;
            var tmp3_safe_receiver = this.zdq_1.payload.af('iss');
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonPrimitive(tmp3_safe_receiver);
            var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.q4u();
            tmp_2.bdr_1 = tmp5_elvis_lhs == null ? this.adr_1 : tmp5_elvis_lhs;
            if (DidUtils_getInstance().isDidUrl(this.bdr_1)) {
              var tmp_3 = get_log();
              tmp_3.l6g(JwsSignatureScheme$getIssuerKeyInfo$lambda(this.bdr_1));
              this.n9_1 = 1;
              suspendResult = DidService_getInstance().r9x(this.bdr_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 2;
              continue $sm;
            } else {
              var tmp_4 = this;
              throw UnsupportedOperationException_init_$Create$('Only DIDs are supported as issuer IDs for W3C credentials.');
            }

          case 1:
            this.ddr_1 = suspendResult.up_1;
            suspendResult = new Result(this.ddr_1);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.edr_1 = suspendResult;
            this.fdr_1 = this.edr_1;
            var tmp_5 = this;
            tmp_5.gdr_1 = this.fdr_1.up_1;
            this.hdr_1 = this.gdr_1;
            if (get_log().v6g()) {
              var tmp_6 = this;
              var this_0 = this.hdr_1;
              var tmp_7;
              if (_Result___get_isFailure__impl__jpiriv(this_0)) {
                tmp_7 = null;
              } else {
                var tmp_8 = _Result___get_value__impl__bjfvqg(this_0);
                tmp_7 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
              }
              tmp_6.idr_1 = tmp_7;
              if (this.idr_1 == null) {
                this.jdr_1 = null;
                this.n9_1 = 4;
                continue $sm;
              } else {
                this.n9_1 = 3;
                suspendResult = this.idr_1.y6m(this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.n9_1 = 7;
              continue $sm;
            }

          case 3:
            this.jdr_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.kdr_1 = this.jdr_1;
            if (this.kdr_1 == null) {
              this.ldr_1 = null;
              this.n9_1 = 6;
              continue $sm;
            } else {
              this.n9_1 = 5;
              suspendResult = this.kdr_1.j6p(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.ldr_1 = suspendResult;
            this.n9_1 = 6;
            continue $sm;
          case 6:
            var exportedJwk = this.ldr_1;
            var tmp_9 = get_log();
            tmp_9.l6g(JwsSignatureScheme$getIssuerKeyInfo$lambda_0(this.hdr_1, this.bdr_1, exportedJwk));
            this.n9_1 = 7;
            continue $sm;
          case 7:
            var tmp_10 = this;
            var this_1 = this.fdr_1.up_1;
            throwOnFailure(this_1);
            var tmp_11 = _Result___get_value__impl__bjfvqg(this_1);
            tmp_10.cdr_1 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
            this.n9_1 = 8;
            continue $sm;
          case 8:
            var key = this.cdr_1;
            return new KeyInfo(this.adr_1, key);
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
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<set-state>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).u9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-state>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).v9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<set-exceptionState>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).w9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-exceptionState>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).x9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<set-result>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).y9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-result>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).z9;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<set-exception>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).aa;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-exception>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).ba;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<set-finallyPath>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).ca;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-finallyPath>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).da;
  protoOf($getIssuerKeyInfoCOROUTINE$6)['<get-context>'] = protoOf($getIssuerKeyInfoCOROUTINE$6).t9;
  function $getIssuerKeysInfoCOROUTINE$7(_this__u8e3s4, jws, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.udr_1 = _this__u8e3s4;
    this.vdr_1 = jws;
  }
  protoOf($getIssuerKeysInfoCOROUTINE$7).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.wdr_1 = JwsUtils_instance.decodeJws(this.vdr_1);
            var tmp_0 = this;
            var tmp0_safe_receiver = this.wdr_1.header.af('kid');
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
            var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q4u();
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Missing key ID in JWS header');
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }

            tmp_0.xdr_1 = tmp_1;
            var tmp_2 = this;
            var tmp3_safe_receiver = this.wdr_1.payload.af('iss');
            var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : get_jsonPrimitive(tmp3_safe_receiver);
            var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.q4u();
            tmp_2.ydr_1 = tmp5_elvis_lhs == null ? this.xdr_1 : tmp5_elvis_lhs;
            if (DidUtils_getInstance().isDidUrl(this.ydr_1)) {
              var tmp_3 = get_log();
              tmp_3.l6g(JwsSignatureScheme$getIssuerKeysInfo$lambda(this.ydr_1));
              this.n9_1 = 1;
              suspendResult = DidService_getInstance().y9w(this.ydr_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              this.n9_1 = 2;
              continue $sm;
            } else {
              var tmp_4 = this;
              var reason = 'Issuer IDs other than DIDs are currently not supported for W3C credentials.';
              throw new NotImplementedError('An operation is not implemented: ' + reason);
            }

          case 1:
            var unboxed = suspendResult.up_1;
            suspendResult = new Result(unboxed);
            this.n9_1 = 2;
            continue $sm;
          case 2:
            var this_0 = suspendResult;
            var it = this_0.up_1;
            if (get_log().v6g()) {
              var tmp_5 = get_log();
              tmp_5.l6g(JwsSignatureScheme$getIssuerKeysInfo$lambda_0(it, this.ydr_1));
            }

            var tmp_6 = this;
            var this_1 = this_0.up_1;
            throwOnFailure(this_1);
            var tmp_7 = _Result___get_value__impl__bjfvqg(this_1);
            tmp_6.zdr_1 = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
            this.n9_1 = 3;
            continue $sm;
          case 3:
            var keys = this.zdr_1;
            return new KeysInfo(this.xdr_1, keys);
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
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<set-state>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).u9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-state>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).v9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<set-exceptionState>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).w9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-exceptionState>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).x9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<set-result>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).y9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-result>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).z9;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<set-exception>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).aa;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-exception>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).ba;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<set-finallyPath>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).ca;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-finallyPath>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).da;
  protoOf($getIssuerKeysInfoCOROUTINE$7)['<get-context>'] = protoOf($getIssuerKeysInfoCOROUTINE$7).t9;
  function $verifyCOROUTINE$8(_this__u8e3s4, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ids_1 = _this__u8e3s4;
    this.jds_1 = data;
  }
  protoOf($verifyCOROUTINE$8).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 9;
            var tmp_0 = this;
            tmp_0.kds_1 = this.ids_1;
            this.lds_1 = this.kds_1;
            this.o9_1 = 8;
            var tmp_1 = this;
            tmp_1.nds_1 = Companion_instance;
            var tmp_2 = this;
            tmp_2.ods_1 = this.lds_1;
            this.pds_1 = this.ods_1;
            this.n9_1 = 1;
            suspendResult = this.pds_1.adq(this.jds_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.qds_1 = suspendResult;
            this.rds_1 = split(this.jds_1, ['~']).u(0);
            this.sds_1 = null;
            this.tds_1 = this.qds_1.keys.p();
            this.n9_1 = 2;
            continue $sm;
          case 2:
            if (!this.tds_1.q()) {
              this.n9_1 = 7;
              continue $sm;
            }

            this.uds_1 = this.tds_1.r();
            this.o9_1 = 5;
            this.n9_1 = 3;
            suspendResult = this.uds_1.z6o(this.rds_1, this);
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
            this.vds_1 = suspendResult.up_1;
            this.o9_1 = 8;
            this.n9_1 = 6;
            continue $sm;
          case 5:
            this.o9_1 = 8;
            var tmp_3 = this.q9_1;
            if (tmp_3 instanceof Exception) {
              var e = this.q9_1;
              var tmp_4 = this;
              this.sds_1 = e;
              tmp_4.vds_1 = _Result___init__impl__xyqfz8(createFailure(e));
              this.n9_1 = 6;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 6:
            this.o9_1 = 8;
            var result = this.vds_1;
            if (_Result___get_isSuccess__impl__sndoy8(result)) {
              var tmp_5 = get_log();
              tmp_5.l6g(JwsSignatureScheme$verify$lambda);
              return new Result(result);
            }

            this.n9_1 = 2;
            continue $sm;
          case 7:
            var tmp0_elvis_lhs = this.sds_1;
            var exception = tmp0_elvis_lhs == null ? Exception_init_$Create$('Verification failed with all keys from the DID document') : tmp0_elvis_lhs;
            return new Result(_Result___init__impl__xyqfz8(createFailure(exception)));
          case 8:
            this.o9_1 = 9;
            var tmp_6 = this.q9_1;
            if (tmp_6 instanceof Error) {
              var e_0 = this.q9_1;
              var tmp_7 = this;
              tmp_7.mds_1 = _Result___init__impl__xyqfz8(createFailure(e_0));
              this.n9_1 = 10;
              continue $sm;
            } else {
              throw this.q9_1;
            }

          case 9:
            throw this.q9_1;
          case 10:
            this.o9_1 = 9;
            return new Result(this.mds_1);
        }
      } catch ($p) {
        var e_1 = $p;
        if (this.o9_1 === 9) {
          throw e_1;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_1;
        }
      }
     while (true);
  };
  protoOf($verifyCOROUTINE$8)['<set-state>'] = protoOf($verifyCOROUTINE$8).u9;
  protoOf($verifyCOROUTINE$8)['<get-state>'] = protoOf($verifyCOROUTINE$8).v9;
  protoOf($verifyCOROUTINE$8)['<set-exceptionState>'] = protoOf($verifyCOROUTINE$8).w9;
  protoOf($verifyCOROUTINE$8)['<get-exceptionState>'] = protoOf($verifyCOROUTINE$8).x9;
  protoOf($verifyCOROUTINE$8)['<set-result>'] = protoOf($verifyCOROUTINE$8).y9;
  protoOf($verifyCOROUTINE$8)['<get-result>'] = protoOf($verifyCOROUTINE$8).z9;
  protoOf($verifyCOROUTINE$8)['<set-exception>'] = protoOf($verifyCOROUTINE$8).aa;
  protoOf($verifyCOROUTINE$8)['<get-exception>'] = protoOf($verifyCOROUTINE$8).ba;
  protoOf($verifyCOROUTINE$8)['<set-finallyPath>'] = protoOf($verifyCOROUTINE$8).ca;
  protoOf($verifyCOROUTINE$8)['<get-finallyPath>'] = protoOf($verifyCOROUTINE$8).da;
  protoOf($verifyCOROUTINE$8)['<get-context>'] = protoOf($verifyCOROUTINE$8).t9;
  function JwsSignatureScheme() {
  }
  protoOf(JwsSignatureScheme).wds = function (data, jwtOptions) {
    var tmp = JsonUtils_getInstance();
    var tmp_0 = [to('iss', jwtOptions.m2('iss')), to('sub', jwtOptions.m2('sub')), to('vc', data)];
    // Inline function 'kotlin.collections.map' call
    var this_0 = jwtOptions.z();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.p();
    while (_iterator__ex2g4s.q()) {
      var item = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.toPair' call
      var tmp$ret$1 = new Pair(item.a1(), item.b1());
      destination.n(tmp$ret$1);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$4 = copyToArray(destination);
    return tmp.toJsonObject(mapOf_0(arrayConcat([tmp_0, tmp$ret$4])));
  };
  protoOf(JwsSignatureScheme).toPayload = function (data, jwtOptions, $super) {
    jwtOptions = jwtOptions === VOID ? emptyMap() : jwtOptions;
    return $super === VOID ? this.wds(data, jwtOptions) : $super.wds.call(this, data, jwtOptions);
  };
  protoOf(JwsSignatureScheme).rdo = function (jws, $completion) {
    var tmp = new $getIssuerKeyInfoCOROUTINE$6(this, jws, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JwsSignatureScheme).adq = function (jws, $completion) {
    var tmp = new $getIssuerKeysInfoCOROUTINE$7(this, jws, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JwsSignatureScheme).odq = function (data, key, jwtHeaders, jwtOptions, $completion) {
    var tmp0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value = this.toPayload(data, jwtOptions);
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(JsonObject), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    var tmp$ret$2 = tmp0.x21(tmp$ret$1, value);
    var payload = encodeToByteArray(tmp$ret$2);
    return key.h6l(payload, jwtHeaders, $completion);
  };
  protoOf(JwsSignatureScheme).sign$default = function (data, key, jwtHeaders, jwtOptions, $completion, $super) {
    jwtHeaders = jwtHeaders === VOID ? emptyMap() : jwtHeaders;
    jwtOptions = jwtOptions === VOID ? emptyMap() : jwtOptions;
    return $super === VOID ? this.odq(data, key, jwtHeaders, jwtOptions, $completion) : $super.odq.call(this, data, key, jwtHeaders, jwtOptions, $completion);
  };
  protoOf(JwsSignatureScheme).cdp = function (data, $completion) {
    var tmp = new $verifyCOROUTINE$8(this, data, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    var tmp_0 = tmp.fa();
    if (tmp_0 === get_COROUTINE_SUSPENDED())
      return tmp_0;
    return tmp_0;
  };
  protoOf(JwsSignatureScheme).odp = function (data, jwtCryptoProvider, $completion) {
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
  protoOf(JwsSignatureScheme).xds = function (jws) {
    var tmp = JwsSignatureScheme$getIssuerKeyInfoAsync$slambda_0(this, jws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwsSignatureScheme).yds = function (data) {
    var tmp = JwsSignatureScheme$verifyAsync$slambda_0(this, data, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwsSignatureScheme).zds = function (data, jwtCryptoProvider) {
    var tmp = JwsSignatureScheme$verifySDJwtAsync$slambda_0(this, data, jwtCryptoProvider, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwsSignatureScheme).adt = function (jws) {
    var tmp = JwsSignatureScheme$getIssuerKeysInfoAsync$slambda_0(this, jws, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwsSignatureScheme).bdt = function (data, key, jwtHeaders, jwtOptions) {
    var tmp = JwsSignatureScheme$signAsync$slambda_0(this, data, key, jwtHeaders, jwtOptions, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(JwsSignatureScheme).signAsync$default = function (data, key, jwtHeaders, jwtOptions, $super) {
    jwtHeaders = jwtHeaders === VOID ? emptyMap() : jwtHeaders;
    jwtOptions = jwtOptions === VOID ? emptyMap() : jwtOptions;
    return $super === VOID ? this.bdt(data, key, jwtHeaders, jwtOptions) : $super.bdt.call(this, data, key, jwtHeaders, jwtOptions);
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
      log = tmp.w6g(log$lambda);
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
  protoOf(MergeResult).cdt = function () {
    return this.vc;
  };
  protoOf(MergeResult).ddt = function () {
    return this.results;
  };
  protoOf(MergeResult).dc = function () {
    return this.vc;
  };
  protoOf(MergeResult).ec = function () {
    return this.results;
  };
  protoOf(MergeResult).edh = function (vc, results) {
    return new MergeResult(vc, results);
  };
  protoOf(MergeResult).copy = function (vc, results, $super) {
    vc = vc === VOID ? this.vc : vc;
    results = results === VOID ? this.results : results;
    return $super === VOID ? this.edh(vc, results) : $super.edh.call(this, vc, results);
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
  protoOf(JsonMergeResult).cdt = function () {
    return this.vc;
  };
  protoOf(JsonMergeResult).ddt = function () {
    return this.results;
  };
  protoOf(JsonMergeResult).dc = function () {
    return this.vc;
  };
  protoOf(JsonMergeResult).ec = function () {
    return this.results;
  };
  protoOf(JsonMergeResult).edt = function (vc, results) {
    return new JsonMergeResult(vc, results);
  };
  protoOf(JsonMergeResult).copy = function (vc, results, $super) {
    vc = vc === VOID ? this.vc : vc;
    results = results === VOID ? this.results : results;
    return $super === VOID ? this.edt(vc, results) : $super.edt.call(this, vc, results);
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
  protoOf(FunctionCall).fdt = function () {
    return this.func;
  };
  protoOf(FunctionCall).gdt = function () {
    return this.history;
  };
  protoOf(FunctionCall).t9 = function () {
    return this.context;
  };
  protoOf(FunctionCall).hdt = function () {
    return this.args;
  };
  protoOf(FunctionCall).fromContext = function () {
    var tmp = CredentialDataMergeUtils_getInstance().cdn_1;
    tmp.n6g(CredentialDataMergeUtils$FunctionCall$fromContext$lambda(this));
    var tmp0_elvis_lhs = this.context.m2(this.func);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Cannot find in context: ' + this.func);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  };
  protoOf(FunctionCall).dc = function () {
    return this.func;
  };
  protoOf(FunctionCall).ec = function () {
    return this.history;
  };
  protoOf(FunctionCall).yp = function () {
    return this.context;
  };
  protoOf(FunctionCall).p70 = function () {
    return this.args;
  };
  protoOf(FunctionCall).idt = function (func, history, context, args) {
    return new FunctionCall(func, history, context, args);
  };
  protoOf(FunctionCall).copy = function (func, history, context, args, $super) {
    func = func === VOID ? this.func : func;
    history = history === VOID ? this.history : history;
    context = context === VOID ? this.context : context;
    args = args === VOID ? this.args : args;
    return $super === VOID ? this.idt(func, history, context, args) : $super.idt.call(this, func, history, context, args);
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
    this.rdt_1 = $this_mergeSDJwtVCPayloadWithMappingAsync;
    this.sdt_1 = $mapping;
    this.tdt_1 = $context;
    this.udt_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda).t6p = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda).ac = function ($completion) {
    return this.t6p($completion);
  };
  protoOf(CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = CredentialDataMergeUtils_getInstance().vdt(this.rdt_1, this.sdt_1, this.tdt_1, this.udt_1, this);
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
  protoOf(CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda).ja = function (completion) {
    return new CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda(this.rdt_1, this.sdt_1, this.tdt_1, this.udt_1, completion);
  };
  function CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda_0($this_mergeSDJwtVCPayloadWithMappingAsync, $mapping, $context, $data, resultContinuation) {
    var i = new CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda($this_mergeSDJwtVCPayloadWithMappingAsync, $mapping, $context, $data, resultContinuation);
    var l = function ($completion) {
      return i.t6p($completion);
    };
    l.$arity = 0;
    return l;
  }
  function CredentialDataMergeUtils$mergeWithMappingAsync$slambda($this_mergeWithMappingAsync, $mapping, $context, $data, resultContinuation) {
    this.edu_1 = $this_mergeWithMappingAsync;
    this.fdu_1 = $mapping;
    this.gdu_1 = $context;
    this.hdu_1 = $data;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialDataMergeUtils$mergeWithMappingAsync$slambda).idu = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(CredentialDataMergeUtils$mergeWithMappingAsync$slambda).ac = function ($completion) {
    return this.idu($completion);
  };
  protoOf(CredentialDataMergeUtils$mergeWithMappingAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = CredentialDataMergeUtils_getInstance().ddn(this.edu_1, this.fdu_1, this.gdu_1, this.hdu_1, this);
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
  protoOf(CredentialDataMergeUtils$mergeWithMappingAsync$slambda).ja = function (completion) {
    return new CredentialDataMergeUtils$mergeWithMappingAsync$slambda(this.edu_1, this.fdu_1, this.gdu_1, this.hdu_1, completion);
  };
  function CredentialDataMergeUtils$mergeWithMappingAsync$slambda_0($this_mergeWithMappingAsync, $mapping, $context, $data, resultContinuation) {
    var i = new CredentialDataMergeUtils$mergeWithMappingAsync$slambda($this_mergeWithMappingAsync, $mapping, $context, $data, resultContinuation);
    var l = function ($completion) {
      return i.idu($completion);
    };
    l.$arity = 0;
    return l;
  }
  function CredentialDataMergeUtils$patchAsync$slambda($this_patchAsync, $k, $v, $dataFunctions, $context, $functionHistory, resultContinuation) {
    this.rdu_1 = $this_patchAsync;
    this.sdu_1 = $k;
    this.tdu_1 = $v;
    this.udu_1 = $dataFunctions;
    this.vdu_1 = $context;
    this.wdu_1 = $functionHistory;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialDataMergeUtils$patchAsync$slambda).xdu = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(CredentialDataMergeUtils$patchAsync$slambda).ac = function ($completion) {
    return this.xdu($completion);
  };
  protoOf(CredentialDataMergeUtils$patchAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = CredentialDataMergeUtils_getInstance().ydu(this.rdu_1, this.sdu_1, this.tdu_1, this.udu_1, this.vdu_1, this.wdu_1, this);
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
  protoOf(CredentialDataMergeUtils$patchAsync$slambda).ja = function (completion) {
    return new CredentialDataMergeUtils$patchAsync$slambda(this.rdu_1, this.sdu_1, this.tdu_1, this.udu_1, this.vdu_1, this.wdu_1, completion);
  };
  function CredentialDataMergeUtils$patchAsync$slambda_0($this_patchAsync, $k, $v, $dataFunctions, $context, $functionHistory, resultContinuation) {
    var i = new CredentialDataMergeUtils$patchAsync$slambda($this_patchAsync, $k, $v, $dataFunctions, $context, $functionHistory, resultContinuation);
    var l = function ($completion) {
      return i.xdu($completion);
    };
    l.$arity = 0;
    return l;
  }
  function CredentialDataMergeUtils$getTemplateDataAsync$slambda($functionCall, $dataFunctions, $context, $functionHistory, resultContinuation) {
    this.hdv_1 = $functionCall;
    this.idv_1 = $dataFunctions;
    this.jdv_1 = $context;
    this.kdv_1 = $functionHistory;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CredentialDataMergeUtils$getTemplateDataAsync$slambda).ldv = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(CredentialDataMergeUtils$getTemplateDataAsync$slambda).ac = function ($completion) {
    return this.ldv($completion);
  };
  protoOf(CredentialDataMergeUtils$getTemplateDataAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = CredentialDataMergeUtils_getInstance().mdv(this.hdv_1, this.idv_1, this.jdv_1, this.kdv_1, this);
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
  protoOf(CredentialDataMergeUtils$getTemplateDataAsync$slambda).ja = function (completion) {
    return new CredentialDataMergeUtils$getTemplateDataAsync$slambda(this.hdv_1, this.idv_1, this.jdv_1, this.kdv_1, completion);
  };
  function CredentialDataMergeUtils$getTemplateDataAsync$slambda_0($functionCall, $dataFunctions, $context, $functionHistory, resultContinuation) {
    var i = new CredentialDataMergeUtils$getTemplateDataAsync$slambda($functionCall, $dataFunctions, $context, $functionHistory, resultContinuation);
    var l = function ($completion) {
      return i.ldv($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $getTemplateDataCOROUTINE$9(_this__u8e3s4, functionCall, dataFunctions, context, functionHistory, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.vdv_1 = _this__u8e3s4;
    this.wdv_1 = functionCall;
    this.xdv_1 = dataFunctions;
    this.ydv_1 = context;
    this.zdv_1 = functionHistory;
  }
  protoOf($getTemplateDataCOROUTINE$9).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            var tmp_0 = this;
            var tmp0 = this.wdv_1;
            var endIndex = this.wdv_1.length - 1 | 0;
            tmp_0.adw_1 = tmp0.substring(1, endIndex);
            this.bdw_1 = substringBefore(this.adw_1, ':');
            var tmp_1 = this;
            var tmp0_elvis_lhs = this.xdv_1.m2(this.bdw_1);
            var tmp_2;
            if (tmp0_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('Unknown dynamic data function "' + this.bdw_1 + '" at call: ' + this.wdv_1);
            } else {
              tmp_2 = tmp0_elvis_lhs;
            }

            tmp_1.cdw_1 = tmp_2;
            this.ddw_1 = this.bdw_1.length < this.adw_1.length;
            if (this.ddw_1) {
              var tmp_3 = this;
              var tmp3 = this.adw_1;
              var startIndex = this.bdw_1.length + 1 | 0;
              tmp_3.fdw_1 = tmp3.substring(startIndex);
              this.n9_1 = 4;
              suspendResult = this.cdw_1(new FunctionCall(this.bdw_1, this.zdv_1, this.ydv_1, this.fdw_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.o9_1 = 2;
              this.n9_1 = 1;
              suspendResult = this.cdw_1(new FunctionCall(this.bdw_1, null, this.ydv_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.gdw_1 = suspendResult;
            this.o9_1 = 6;
            this.n9_1 = 3;
            continue $sm;
          case 2:
            this.o9_1 = 6;
            var tmp_4 = this.q9_1;
            if (tmp_4 instanceof NullPointerException) {
              var e = this.q9_1;
              var tmp_5 = this;
              this.vdv_1.cdn_1.q6g(CredentialDataMergeUtils$getTemplateData$lambda(e));
              throw IllegalArgumentException_init_$Create$('Could not execute dynamic data function "' + this.bdw_1 + '" - missing argument! At function call: ' + this.adw_1);
            } else {
              throw this.q9_1;
            }

          case 3:
            this.o9_1 = 6;
            this.edw_1 = this.gdw_1;
            this.n9_1 = 5;
            continue $sm;
          case 4:
            this.edw_1 = suspendResult;
            this.n9_1 = 5;
            continue $sm;
          case 5:
            var result = this.edw_1;
            if (result instanceof JsonPrimitive_1) {
              var tmp5 = this.zdv_1;
              var key = this.bdw_1;
              tmp5.p2(key, result);
            }

            this.vdv_1.cdn_1.n6g(CredentialDataMergeUtils$getTemplateData$lambda_0(this.wdv_1, result));
            return result;
          case 6:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 6) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($getTemplateDataCOROUTINE$9)['<set-state>'] = protoOf($getTemplateDataCOROUTINE$9).u9;
  protoOf($getTemplateDataCOROUTINE$9)['<get-state>'] = protoOf($getTemplateDataCOROUTINE$9).v9;
  protoOf($getTemplateDataCOROUTINE$9)['<set-exceptionState>'] = protoOf($getTemplateDataCOROUTINE$9).w9;
  protoOf($getTemplateDataCOROUTINE$9)['<get-exceptionState>'] = protoOf($getTemplateDataCOROUTINE$9).x9;
  protoOf($getTemplateDataCOROUTINE$9)['<set-result>'] = protoOf($getTemplateDataCOROUTINE$9).y9;
  protoOf($getTemplateDataCOROUTINE$9)['<get-result>'] = protoOf($getTemplateDataCOROUTINE$9).z9;
  protoOf($getTemplateDataCOROUTINE$9)['<set-exception>'] = protoOf($getTemplateDataCOROUTINE$9).aa;
  protoOf($getTemplateDataCOROUTINE$9)['<get-exception>'] = protoOf($getTemplateDataCOROUTINE$9).ba;
  protoOf($getTemplateDataCOROUTINE$9)['<set-finallyPath>'] = protoOf($getTemplateDataCOROUTINE$9).ca;
  protoOf($getTemplateDataCOROUTINE$9)['<get-finallyPath>'] = protoOf($getTemplateDataCOROUTINE$9).da;
  protoOf($getTemplateDataCOROUTINE$9)['<get-context>'] = protoOf($getTemplateDataCOROUTINE$9).t9;
  function $patchCOROUTINE$10(_this__u8e3s4, _this__u8e3s4_0, k, v, dataFunctions, context, functionHistory, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pdw_1 = _this__u8e3s4;
    this.qdw_1 = _this__u8e3s4_0;
    this.rdw_1 = k;
    this.sdw_1 = v;
    this.tdw_1 = dataFunctions;
    this.udw_1 = context;
    this.vdw_1 = functionHistory;
  }
  protoOf($patchCOROUTINE$10).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 7;
            this.wdw_1 = this.sdw_1;
            var tmp_0 = this.wdw_1;
            if (tmp_0 instanceof JsonPrimitive_1) {
              if (this.pdw_1.isTemplate(this.sdw_1)) {
                var tmp_1 = this;
                tmp_1.xdw_1 = this.qdw_1;
                var tmp_2 = this;
                tmp_2.ydw_1 = this.rdw_1;
                this.n9_1 = 4;
                suspendResult = this.pdw_1.mdv(this.sdw_1.q4u(), this.tdw_1, this.udw_1, this.vdw_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp3 = this.qdw_1;
                var tmp4 = this.rdw_1;
                var value = this.sdw_1;
                tmp3.p2(tmp4, value);
                this.n9_1 = 5;
                continue $sm;
              }
            } else {
              var tmp_3 = this.wdw_1;
              if (tmp_3 instanceof JsonObject) {
                var tmp_4 = this;
                tmp_4.zdw_1 = get_jsonObject(this.sdw_1);
                this.adx_1 = this.zdw_1;
                var tmp_5 = this;
                tmp_5.bdx_1 = this.adx_1.z().p();
                this.n9_1 = 1;
                continue $sm;
              } else {
                var tmp_6 = this.wdw_1;
                if (tmp_6 instanceof JsonArray) {
                  if (!this.qdw_1.k2(this.rdw_1)) {
                    var tmp8 = this.qdw_1;
                    var tmp9 = this.rdw_1;
                    var value_0 = new JsonArray(emptyList());
                    tmp8.p2(tmp9, value_0);
                  }
                  var tmp_7 = this.qdw_1.m2(this.rdw_1);
                  if (tmp_7 instanceof JsonArray) {
                    var tmp13 = this.qdw_1;
                    var tmp14 = this.rdw_1;
                    var this_0 = toMutableList(get_jsonArray(ensureNotNull(this.qdw_1.m2(this.rdw_1))));
                    this_0.t(toList(this.sdw_1));
                    var value_1 = new JsonArray(this_0);
                    tmp13.p2(tmp14, value_1);
                  } else {
                    var tmp16 = this.qdw_1;
                    var tmp17 = this.rdw_1;
                    var value_2 = this.sdw_1;
                    tmp16.p2(tmp17, value_2);
                  }
                  this.n9_1 = 6;
                  continue $sm;
                } else {
                  this.pdw_1.cdn_1.n6g(CredentialDataMergeUtils$patch$lambda(this.sdw_1));
                  this.n9_1 = 6;
                  continue $sm;
                }
              }
            }

          case 1:
            if (!this.bdx_1.q()) {
              this.n9_1 = 3;
              continue $sm;
            }

            this.cdx_1 = this.bdx_1.r();
            var tmp_8 = this;
            tmp_8.ddx_1 = this.cdx_1;
            this.edx_1 = this.ddx_1;
            var tmp_9 = this;
            tmp_9.fdx_1 = this.edx_1.a1();
            var tmp_10 = this;
            tmp_10.gdx_1 = this.edx_1.b1();
            if (!this.qdw_1.k2(this.rdw_1)) {
              var tmp2 = this.qdw_1;
              var tmp3_0 = this.rdw_1;
              var value_3 = new JsonObject(emptyMap());
              tmp2.p2(tmp3_0, value_3);
            }

            var tmp_11 = this;
            var this_1 = this.qdw_1;
            var tmp_12;
            try {
              var tmp0_safe_receiver = this_1.m2(this.rdw_1);
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
              throw IllegalArgumentException_init_$Create$_0('Invalid mapping for credential, when processing "' + this.rdw_1 + '": ' + exception.message, exception);
            }

            var tmp0_elvis_lhs = tmp_14;
            var tmp_16;
            if (tmp0_elvis_lhs == null) {
              throw IllegalArgumentException_init_$Create$('This key does not exist to map to: ' + this.rdw_1);
            } else {
              tmp_16 = tmp0_elvis_lhs;
            }

            tmp_11.hdx_1 = tmp_16;
            var tmp_17 = this;
            tmp_17.idx_1 = this.qdw_1;
            var tmp_18 = this;
            tmp_18.jdx_1 = this.rdw_1;
            this.n9_1 = 2;
            suspendResult = CredentialDataMergeUtils_getInstance().ydu(toMutableMap(this.hdx_1), this.fdx_1, this.gdx_1, this.tdw_1, this.udw_1, this.vdw_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var ARGUMENT = suspendResult;
            var tmp11 = new JsonObject(ARGUMENT);
            var this_3 = this.idx_1;
            var key = this.jdx_1;
            this_3.p2(key, tmp11);
            this.n9_1 = 1;
            continue $sm;
          case 3:
            this.n9_1 = 6;
            continue $sm;
          case 4:
            var tmp2_0 = suspendResult;
            var this_4 = this.xdw_1;
            var key_0 = this.ydw_1;
            this_4.p2(key_0, tmp2_0);
            this.n9_1 = 5;
            continue $sm;
          case 5:
            this.n9_1 = 6;
            continue $sm;
          case 6:
            return this.qdw_1;
          case 7:
            throw this.q9_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.o9_1 === 7) {
          throw e_0;
        } else {
          this.n9_1 = this.o9_1;
          this.q9_1 = e_0;
        }
      }
     while (true);
  };
  protoOf($patchCOROUTINE$10)['<set-state>'] = protoOf($patchCOROUTINE$10).u9;
  protoOf($patchCOROUTINE$10)['<get-state>'] = protoOf($patchCOROUTINE$10).v9;
  protoOf($patchCOROUTINE$10)['<set-exceptionState>'] = protoOf($patchCOROUTINE$10).w9;
  protoOf($patchCOROUTINE$10)['<get-exceptionState>'] = protoOf($patchCOROUTINE$10).x9;
  protoOf($patchCOROUTINE$10)['<set-result>'] = protoOf($patchCOROUTINE$10).y9;
  protoOf($patchCOROUTINE$10)['<get-result>'] = protoOf($patchCOROUTINE$10).z9;
  protoOf($patchCOROUTINE$10)['<set-exception>'] = protoOf($patchCOROUTINE$10).aa;
  protoOf($patchCOROUTINE$10)['<get-exception>'] = protoOf($patchCOROUTINE$10).ba;
  protoOf($patchCOROUTINE$10)['<set-finallyPath>'] = protoOf($patchCOROUTINE$10).ca;
  protoOf($patchCOROUTINE$10)['<get-finallyPath>'] = protoOf($patchCOROUTINE$10).da;
  protoOf($patchCOROUTINE$10)['<get-context>'] = protoOf($patchCOROUTINE$10).t9;
  function $mergeWithMappingCOROUTINE$11(_this__u8e3s4, _this__u8e3s4_0, mapping, context, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sdx_1 = _this__u8e3s4;
    this.tdx_1 = _this__u8e3s4_0;
    this.udx_1 = mapping;
    this.vdx_1 = context;
    this.wdx_1 = data;
  }
  protoOf($mergeWithMappingCOROUTINE$11).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.xdx_1 = toMutableMap(this.tdx_1);
            this.ydx_1 = HashMap_init_$Create$();
            this.zdx_1 = HashMap_init_$Create$();
            var tmp_0 = this;
            tmp_0.ady_1 = this.udx_1;
            this.bdy_1 = this.ady_1;
            var tmp_1 = this;
            tmp_1.cdy_1 = this.bdy_1.z().p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.cdy_1.q()) {
              this.n9_1 = 5;
              continue $sm;
            }

            this.ddy_1 = this.cdy_1.r();
            var tmp_2 = this;
            tmp_2.edy_1 = this.ddy_1;
            this.fdy_1 = this.edy_1;
            var tmp_3 = this;
            tmp_3.gdy_1 = this.fdy_1.a1();
            var tmp_4 = this;
            tmp_4.hdy_1 = this.fdy_1.b1();
            if (!startsWith(this.gdy_1, 'jwt:')) {
              this.n9_1 = 3;
              suspendResult = CredentialDataMergeUtils_getInstance().ydu(this.xdx_1, this.gdy_1, this.hdy_1, this.wdx_1, this.vdx_1, this.zdx_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_5 = this;
              tmp_5.jdy_1 = this.ydx_1;
              var tmp_6 = this;
              tmp_6.kdy_1 = this.gdy_1;
              this.n9_1 = 2;
              suspendResult = CredentialDataMergeUtils_getInstance().mdv(get_jsonPrimitive(this.hdy_1).q4u(), this.wdx_1, this.vdx_1, this.zdx_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var tmp4 = suspendResult;
            var tmp_7 = this;
            var this_0 = this.jdy_1;
            var key = this.kdy_1;
            this_0.p2(key, tmp4);
            tmp_7.idy_1 = Unit_instance;
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.idy_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.n9_1 = 1;
            continue $sm;
          case 5:
            return new MergeResult(new W3CVC(this.xdx_1), this.ydx_1);
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
  protoOf($mergeWithMappingCOROUTINE$11)['<set-state>'] = protoOf($mergeWithMappingCOROUTINE$11).u9;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-state>'] = protoOf($mergeWithMappingCOROUTINE$11).v9;
  protoOf($mergeWithMappingCOROUTINE$11)['<set-exceptionState>'] = protoOf($mergeWithMappingCOROUTINE$11).w9;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-exceptionState>'] = protoOf($mergeWithMappingCOROUTINE$11).x9;
  protoOf($mergeWithMappingCOROUTINE$11)['<set-result>'] = protoOf($mergeWithMappingCOROUTINE$11).y9;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-result>'] = protoOf($mergeWithMappingCOROUTINE$11).z9;
  protoOf($mergeWithMappingCOROUTINE$11)['<set-exception>'] = protoOf($mergeWithMappingCOROUTINE$11).aa;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-exception>'] = protoOf($mergeWithMappingCOROUTINE$11).ba;
  protoOf($mergeWithMappingCOROUTINE$11)['<set-finallyPath>'] = protoOf($mergeWithMappingCOROUTINE$11).ca;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-finallyPath>'] = protoOf($mergeWithMappingCOROUTINE$11).da;
  protoOf($mergeWithMappingCOROUTINE$11)['<get-context>'] = protoOf($mergeWithMappingCOROUTINE$11).t9;
  function $mergeSDJwtVCPayloadWithMappingCOROUTINE$12(_this__u8e3s4, _this__u8e3s4_0, mapping, context, data, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.tdy_1 = _this__u8e3s4;
    this.udy_1 = _this__u8e3s4_0;
    this.vdy_1 = mapping;
    this.wdy_1 = context;
    this.xdy_1 = data;
  }
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 6;
            this.ydy_1 = toMutableMap(this.udy_1);
            this.zdy_1 = HashMap_init_$Create$();
            var tmp_0 = this;
            tmp_0.adz_1 = this.vdy_1;
            this.bdz_1 = this.adz_1;
            var tmp_1 = this;
            tmp_1.cdz_1 = this.bdz_1.z().p();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.cdz_1.q()) {
              this.n9_1 = 5;
              continue $sm;
            }

            this.ddz_1 = this.cdz_1.r();
            var tmp_2 = this;
            tmp_2.edz_1 = this.ddz_1;
            this.fdz_1 = this.edz_1;
            var tmp_3 = this;
            tmp_3.gdz_1 = this.fdz_1.a1();
            var tmp_4 = this;
            tmp_4.hdz_1 = this.fdz_1.b1();
            if (!startsWith(this.gdz_1, 'jwt:')) {
              this.n9_1 = 3;
              suspendResult = CredentialDataMergeUtils_getInstance().ydu(this.ydy_1, this.gdz_1, this.hdz_1, this.xdy_1, this.wdy_1, this.zdy_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_5 = this;
              tmp_5.jdz_1 = this.ydy_1;
              var tmp_6 = this;
              tmp_6.kdz_1 = removePrefix(this.gdz_1, 'jwt:');
              this.n9_1 = 2;
              suspendResult = CredentialDataMergeUtils_getInstance().mdv(get_jsonPrimitive(this.hdz_1).q4u(), this.xdy_1, this.wdy_1, this.zdy_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 2:
            var tmp4 = suspendResult;
            var tmp_7 = this;
            var this_0 = this.jdz_1;
            var key = this.kdz_1;
            this_0.p2(key, tmp4);
            tmp_7.idz_1 = Unit_instance;
            this.n9_1 = 4;
            continue $sm;
          case 3:
            this.idz_1 = suspendResult;
            this.n9_1 = 4;
            continue $sm;
          case 4:
            this.n9_1 = 1;
            continue $sm;
          case 5:
            return JsonUtils_getInstance().toJsonObject(this.ydy_1);
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
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<set-state>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).u9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-state>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).v9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<set-exceptionState>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).w9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-exceptionState>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).x9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<set-result>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).y9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-result>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).z9;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<set-exception>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).aa;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-exception>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).ba;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<set-finallyPath>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).ca;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-finallyPath>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).da;
  protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12)['<get-context>'] = protoOf($mergeSDJwtVCPayloadWithMappingCOROUTINE$12).t9;
  function CredentialDataMergeUtils() {
    CredentialDataMergeUtils_instance = this;
    var tmp = this;
    var tmp_0 = KotlinLogging_instance;
    tmp.cdn_1 = tmp_0.w6g(CredentialDataMergeUtils$log$lambda);
  }
  protoOf(CredentialDataMergeUtils).isTemplate = function (_this__u8e3s4) {
    // Inline function 'kotlin.let' call
    var it = _this__u8e3s4.q4u();
    return first_0(it) === _Char___init__impl__6a9atx(60) && last(it) === _Char___init__impl__6a9atx(62) && it.length > 2 && !contains(it, ' ');
  };
  protoOf(CredentialDataMergeUtils).mdv = function (functionCall, dataFunctions, context, functionHistory, $completion) {
    var tmp = new $getTemplateDataCOROUTINE$9(this, functionCall, dataFunctions, context, functionHistory, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(CredentialDataMergeUtils).ydu = function (_this__u8e3s4, k, v, dataFunctions, context, functionHistory, $completion) {
    var tmp = new $patchCOROUTINE$10(this, _this__u8e3s4, k, v, dataFunctions, context, functionHistory, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(CredentialDataMergeUtils).ddn = function (_this__u8e3s4, mapping, context, data, $completion) {
    var tmp = new $mergeWithMappingCOROUTINE$11(this, _this__u8e3s4, mapping, context, data, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(CredentialDataMergeUtils).vdt = function (_this__u8e3s4, mapping, context, data, $completion) {
    var tmp = new $mergeSDJwtVCPayloadWithMappingCOROUTINE$12(this, _this__u8e3s4, mapping, context, data, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(CredentialDataMergeUtils).ldz = function (_this__u8e3s4, mapping, context, data) {
    var tmp = CredentialDataMergeUtils$mergeSDJwtVCPayloadWithMappingAsync$slambda_0(_this__u8e3s4, mapping, context, data, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(CredentialDataMergeUtils).mdz = function (_this__u8e3s4, mapping, context, data) {
    var tmp = CredentialDataMergeUtils$mergeWithMappingAsync$slambda_0(_this__u8e3s4, mapping, context, data, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(CredentialDataMergeUtils).ndz = function (_this__u8e3s4, k, v, dataFunctions, context, functionHistory) {
    var tmp = CredentialDataMergeUtils$patchAsync$slambda_0(_this__u8e3s4, k, v, dataFunctions, context, functionHistory, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(CredentialDataMergeUtils).odz = function (functionCall, dataFunctions, context, functionHistory) {
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
  function _get_$cachedSerializer__te6jhj_2($this) {
    return $this.pdz_1.b1();
  }
  function VCFormat$Companion$_anonymous__fdoq0b() {
    var tmp = values_3();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [null, null, null, null, null, null, null, null, null, 'vc+sd-jwt'];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = [null, null, null, null, null, null, null, null, null, null];
    return createAnnotatedEnumSerializer('id.walt.w3c.utils.VCFormat', tmp, tmp_0, tmp$ret$5, null);
  }
  var VCFormat_jwt_instance;
  var VCFormat_jwt_vc_instance;
  var VCFormat_jwt_vp_instance;
  var VCFormat_ldp_vc_instance;
  var VCFormat_ldp_vp_instance;
  var VCFormat_ldp_instance;
  var VCFormat_jwt_vc_json_instance;
  var VCFormat_jwt_vp_json_instance;
  var VCFormat_mso_mdoc_instance;
  var VCFormat_sd_jwt_vc_instance;
  function values_3() {
    return [VCFormat_jwt_getInstance(), VCFormat_jwt_vc_getInstance(), VCFormat_jwt_vp_getInstance(), VCFormat_ldp_vc_getInstance(), VCFormat_ldp_vp_getInstance(), VCFormat_ldp_getInstance(), VCFormat_jwt_vc_json_getInstance(), VCFormat_jwt_vp_json_getInstance(), VCFormat_mso_mdoc_getInstance(), VCFormat_sd_jwt_vc_getInstance()];
  }
  function Companion_2() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.pdz_1 = lazy(tmp_0, VCFormat$Companion$_anonymous__fdoq0b);
  }
  protoOf(Companion_2).m4u = function () {
    return _get_$cachedSerializer__te6jhj_2(this);
  };
  protoOf(Companion_2).x2c = function (typeParamsSerializers) {
    return this.m4u();
  };
  var Companion_instance_4;
  function Companion_getInstance_7() {
    VCFormat_initEntries();
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  var VCFormat_entriesInitialized;
  function VCFormat_initEntries() {
    if (VCFormat_entriesInitialized)
      return Unit_instance;
    VCFormat_entriesInitialized = true;
    VCFormat_jwt_instance = new VCFormat('jwt', 0, 'jwt');
    VCFormat_jwt_vc_instance = new VCFormat('jwt_vc', 1, 'jwt_vc');
    VCFormat_jwt_vp_instance = new VCFormat('jwt_vp', 2, 'jwt_vp');
    VCFormat_ldp_vc_instance = new VCFormat('ldp_vc', 3, 'ldp_vc');
    VCFormat_ldp_vp_instance = new VCFormat('ldp_vp', 4, 'ldp_vp');
    VCFormat_ldp_instance = new VCFormat('ldp', 5, 'ldp');
    VCFormat_jwt_vc_json_instance = new VCFormat('jwt_vc_json', 6, 'jwt_vc_json');
    VCFormat_jwt_vp_json_instance = new VCFormat('jwt_vp_json', 7, 'jwt_vp_json');
    VCFormat_mso_mdoc_instance = new VCFormat('mso_mdoc', 8, 'mso_mdoc');
    VCFormat_sd_jwt_vc_instance = new VCFormat('sd_jwt_vc', 9, 'vc+sd-jwt');
    Companion_getInstance_7();
  }
  function VCFormat(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.sdz_1 = value;
  }
  function VCFormat_jwt_getInstance() {
    VCFormat_initEntries();
    return VCFormat_jwt_instance;
  }
  function VCFormat_jwt_vc_getInstance() {
    VCFormat_initEntries();
    return VCFormat_jwt_vc_instance;
  }
  function VCFormat_jwt_vp_getInstance() {
    VCFormat_initEntries();
    return VCFormat_jwt_vp_instance;
  }
  function VCFormat_ldp_vc_getInstance() {
    VCFormat_initEntries();
    return VCFormat_ldp_vc_instance;
  }
  function VCFormat_ldp_vp_getInstance() {
    VCFormat_initEntries();
    return VCFormat_ldp_vp_instance;
  }
  function VCFormat_ldp_getInstance() {
    VCFormat_initEntries();
    return VCFormat_ldp_instance;
  }
  function VCFormat_jwt_vc_json_getInstance() {
    VCFormat_initEntries();
    return VCFormat_jwt_vc_json_instance;
  }
  function VCFormat_jwt_vp_json_getInstance() {
    VCFormat_initEntries();
    return VCFormat_jwt_vp_json_instance;
  }
  function VCFormat_mso_mdoc_getInstance() {
    VCFormat_initEntries();
    return VCFormat_mso_mdoc_instance;
  }
  function VCFormat_sd_jwt_vc_getInstance() {
    VCFormat_initEntries();
    return VCFormat_sd_jwt_vc_instance;
  }
  function W3CVcUtils() {
  }
  protoOf(W3CVcUtils).overwrite = function (_this__u8e3s4, map) {
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableMap(_this__u8e3s4.toJsonObject());
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = map.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var k = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.b1();
      // Inline function 'kotlin.collections.set' call
      this_0.p2(k, v);
    }
    return new W3CVC(this_0);
  };
  protoOf(W3CVcUtils).update = function (_this__u8e3s4, key, map) {
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableMap(_this__u8e3s4);
    // Inline function 'kotlin.apply' call
    var this_1 = toMutableMap(get_jsonObject(ensureNotNull(this_0.m2(key))));
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = map.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      // Inline function 'kotlin.collections.component1' call
      var k = element.a1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.b1();
      // Inline function 'kotlin.collections.set' call
      this_1.p2(k, v);
    }
    // Inline function 'kotlin.collections.set' call
    var value = new JsonObject(this_1);
    this_0.p2(key, value);
    return new W3CVC(this_0);
  };
  var W3CVcUtils_instance;
  function W3CVcUtils_getInstance() {
    return W3CVcUtils_instance;
  }
  function CredentialDataModel$Companion$w3cJson$lambda($this$Json) {
    $this$Json.x4s_1 = false;
    return Unit_instance;
  }
  function Companion_3() {
    Companion_instance_5 = this;
    var tmp = this;
    tmp.tdz_1 = Json(VOID, CredentialDataModel$Companion$w3cJson$lambda);
  }
  var Companion_instance_5;
  function Companion_getInstance_8() {
    if (Companion_instance_5 == null)
      new Companion_3();
    return Companion_instance_5;
  }
  function CredentialDataModel() {
  }
  function Companion_4() {
  }
  protoOf(Companion_4).m4u = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_6;
  function Companion_getInstance_9() {
    return Companion_instance_6;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.w3c.vc.vcs.W3CBaseDataModels.TermsOfUse', this, 2);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('type', false);
    this.udz_1 = tmp0_serialDesc;
  }
  protoOf($serializer).vdz = function (encoder, value) {
    var tmp0_desc = this.udz_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.id);
    tmp1_output.w25(tmp0_desc, 1, value.type);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer).v20 = function (encoder, value) {
    return this.vdz(encoder, value instanceof TermsOfUse ? value : THROW_CCE());
  };
  protoOf($serializer).w20 = function (decoder) {
    var tmp0_desc = this.udz_1;
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
    return TermsOfUse_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).u20 = function () {
    return this.udz_1;
  };
  protoOf($serializer).m2c = function () {
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance().udz_1);
    }
    $this.id = id;
    $this.type = type;
    return $this;
  }
  function TermsOfUse_init_$Create$(seen0, id, type, serializationConstructorMarker) {
    return TermsOfUse_init_$Init$(seen0, id, type, serializationConstructorMarker, objectCreate(protoOf(TermsOfUse)));
  }
  function Companion_5() {
  }
  protoOf(Companion_5).m4u = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_7;
  function Companion_getInstance_10() {
    return Companion_instance_7;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.w3c.vc.vcs.W3CBaseDataModels.CredentialStatus', this, 5);
    tmp0_serialDesc.x2b('id', false);
    tmp0_serialDesc.x2b('type', false);
    tmp0_serialDesc.x2b('statusPurpose', false);
    tmp0_serialDesc.x2b('statusListIndex', false);
    tmp0_serialDesc.x2b('statusListCredential', false);
    this.wdz_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).xdz = function (encoder, value) {
    var tmp0_desc = this.wdz_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.id);
    tmp1_output.w25(tmp0_desc, 1, value.type);
    tmp1_output.w25(tmp0_desc, 2, value.statusPurpose);
    tmp1_output.w25(tmp0_desc, 3, value.statusListIndex);
    tmp1_output.w25(tmp0_desc, 4, value.statusListCredential);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_0).v20 = function (encoder, value) {
    return this.xdz(encoder, value instanceof CredentialStatus ? value : THROW_CCE());
  };
  protoOf($serializer_0).w20 = function (decoder) {
    var tmp0_desc = this.wdz_1;
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
      tmp6_local2 = tmp9_input.r24(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.r24(tmp0_desc, 3);
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
            tmp6_local2 = tmp9_input.r24(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.r24(tmp0_desc, 3);
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
    return CredentialStatus_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_0).u20 = function () {
    return this.wdz_1;
  };
  protoOf($serializer_0).m2c = function () {
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
      throwMissingFieldException(seen0, 31, $serializer_getInstance_0().wdz_1);
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
  protoOf(TermsOfUse).x6b = function () {
    return this.id;
  };
  protoOf(TermsOfUse).za0 = function () {
    return this.type;
  };
  protoOf(TermsOfUse).dc = function () {
    return this.id;
  };
  protoOf(TermsOfUse).ec = function () {
    return this.type;
  };
  protoOf(TermsOfUse).ydz = function (id, type) {
    return new TermsOfUse(id, type);
  };
  protoOf(TermsOfUse).copy = function (id, type, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    return $super === VOID ? this.ydz(id, type) : $super.ydz.call(this, id, type);
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
  protoOf(CredentialStatus).x6b = function () {
    return this.id;
  };
  protoOf(CredentialStatus).za0 = function () {
    return this.type;
  };
  protoOf(CredentialStatus).zdz = function () {
    return this.statusPurpose;
  };
  protoOf(CredentialStatus).ae0 = function () {
    return this.statusListIndex;
  };
  protoOf(CredentialStatus).be0 = function () {
    return this.statusListCredential;
  };
  protoOf(CredentialStatus).dc = function () {
    return this.id;
  };
  protoOf(CredentialStatus).ec = function () {
    return this.type;
  };
  protoOf(CredentialStatus).yp = function () {
    return this.statusPurpose;
  };
  protoOf(CredentialStatus).p70 = function () {
    return this.statusListIndex;
  };
  protoOf(CredentialStatus).w7k = function () {
    return this.statusListCredential;
  };
  protoOf(CredentialStatus).ce0 = function (id, type, statusPurpose, statusListIndex, statusListCredential) {
    return new CredentialStatus(id, type, statusPurpose, statusListIndex, statusListCredential);
  };
  protoOf(CredentialStatus).copy = function (id, type, statusPurpose, statusListIndex, statusListCredential, $super) {
    id = id === VOID ? this.id : id;
    type = type === VOID ? this.type : type;
    statusPurpose = statusPurpose === VOID ? this.statusPurpose : statusPurpose;
    statusListIndex = statusListIndex === VOID ? this.statusListIndex : statusListIndex;
    statusListCredential = statusListCredential === VOID ? this.statusListCredential : statusListCredential;
    return $super === VOID ? this.ce0(id, type, statusPurpose, statusListIndex, statusListCredential) : $super.ce0.call(this, id, type, statusPurpose, statusListIndex, statusListCredential);
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
  function Companion_6() {
  }
  protoOf(Companion_6).m4u = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_8;
  function Companion_getInstance_11() {
    return Companion_instance_8;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.w3c.vc.vcs.W3CV11DataModel.CredentialSubject', this, 1);
    tmp0_serialDesc.x2b('id', false);
    this.ee0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).fe0 = function (encoder, value) {
    var tmp0_desc = this.ee0_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.id);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_1).v20 = function (encoder, value) {
    return this.fe0(encoder, value instanceof CredentialSubject ? value : THROW_CCE());
  };
  protoOf($serializer_1).w20 = function (decoder) {
    var tmp0_desc = this.ee0_1;
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
    return CredentialSubject_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_1).u20 = function () {
    return this.ee0_1;
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
  function CredentialSubject_init_$Init$(seen0, id, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_1().ee0_1);
    }
    $this.id = id;
    return $this;
  }
  function CredentialSubject_init_$Create$(seen0, id, serializationConstructorMarker) {
    return CredentialSubject_init_$Init$(seen0, id, serializationConstructorMarker, objectCreate(protoOf(CredentialSubject)));
  }
  function Companion_7() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, W3CV11DataModel$Companion$$childSerializers$_anonymous__vb92ey);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.pd6_1 = [tmp_1, lazy(tmp_2, W3CV11DataModel$Companion$$childSerializers$_anonymous__vb92ey_0), null, null, null, null, null, null, null];
    this.qd6_1 = listOf('https://www.w3.org/2018/credentials/v1');
  }
  protoOf(Companion_7).de0 = function () {
    return this.qd6_1;
  };
  protoOf(Companion_7).m4u = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_9;
  function Companion_getInstance_12() {
    if (Companion_instance_9 == null)
      new Companion_7();
    return Companion_instance_9;
  }
  function CredentialSubject(id) {
    this.id = id;
  }
  protoOf(CredentialSubject).x6b = function () {
    return this.id;
  };
  protoOf(CredentialSubject).dc = function () {
    return this.id;
  };
  protoOf(CredentialSubject).fa3 = function (id) {
    return new CredentialSubject(id);
  };
  protoOf(CredentialSubject).copy = function (id, $super) {
    id = id === VOID ? this.id : id;
    return $super === VOID ? this.fa3(id) : $super.fa3.call(this, id);
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
    tmp0_serialDesc.x2b('@context', true);
    tmp0_serialDesc.x2b('type', true);
    tmp0_serialDesc.x2b('credentialSubject', false);
    tmp0_serialDesc.x2b('id', true);
    tmp0_serialDesc.x2b('issuer', true);
    tmp0_serialDesc.x2b('issuanceDate', true);
    tmp0_serialDesc.x2b('expirationDate', true);
    tmp0_serialDesc.x2b('credentialStatus', true);
    tmp0_serialDesc.x2b('termsOfUse', true);
    this.ge0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).he0 = function (encoder, value) {
    var tmp0_desc = this.ge0_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_12().pd6_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !equals(value.context, Companion_getInstance_12().qd6_1)) {
      tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.context);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !equals(value.type, listOf('VerifiableCredential'))) {
      tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.type);
    }
    tmp1_output.y25(tmp0_desc, 2, JsonObjectSerializer_getInstance(), value.credentialSubject);
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.id == null)) {
      tmp1_output.a26(tmp0_desc, 3, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.e26(tmp0_desc, 4) ? true : !(value.issuer == null)) {
      tmp1_output.a26(tmp0_desc, 4, StringSerializer_getInstance(), value.issuer);
    }
    if (tmp1_output.e26(tmp0_desc, 5) ? true : !(value.issuanceDate == null)) {
      tmp1_output.a26(tmp0_desc, 5, StringSerializer_getInstance(), value.issuanceDate);
    }
    if (tmp1_output.e26(tmp0_desc, 6) ? true : !(value.expirationDate == null)) {
      tmp1_output.a26(tmp0_desc, 6, StringSerializer_getInstance(), value.expirationDate);
    }
    if (tmp1_output.e26(tmp0_desc, 7) ? true : !(value.credentialStatus == null)) {
      tmp1_output.a26(tmp0_desc, 7, $serializer_getInstance_0(), value.credentialStatus);
    }
    if (tmp1_output.e26(tmp0_desc, 8) ? true : !(value.termsOfUse == null)) {
      tmp1_output.a26(tmp0_desc, 8, $serializer_getInstance(), value.termsOfUse);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_2).v20 = function (encoder, value) {
    return this.he0(encoder, value instanceof W3CV11DataModel ? value : THROW_CCE());
  };
  protoOf($serializer_2).w20 = function (decoder) {
    var tmp0_desc = this.ge0_1;
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
    var tmp14_cached = Companion_getInstance_12().pd6_1;
    if (tmp13_input.x24()) {
      tmp4_local0 = tmp13_input.t24(tmp0_desc, 0, tmp14_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.t24(tmp0_desc, 1, tmp14_cached[1].b1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.t24(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.v24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.v24(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.v24(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.v24(tmp0_desc, 7, $serializer_getInstance_0(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.v24(tmp0_desc, 8, $serializer_getInstance(), tmp12_local8);
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
            tmp5_local1 = tmp13_input.t24(tmp0_desc, 1, tmp14_cached[1].b1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.t24(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.v24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.v24(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.v24(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.v24(tmp0_desc, 7, $serializer_getInstance_0(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.v24(tmp0_desc, 8, $serializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.i24(tmp0_desc);
    return W3CV11DataModel_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_2).u20 = function () {
    return this.ge0_1;
  };
  protoOf($serializer_2).m2c = function () {
    var tmp0_cached = Companion_getInstance_12().pd6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), tmp0_cached[1].b1(), JsonObjectSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_0()), get_nullable($serializer_getInstance())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function W3CV11DataModel_init_$Init$(seen0, context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse, serializationConstructorMarker, $this) {
    if (!(4 === (4 & seen0))) {
      throwMissingFieldException(seen0, 4, $serializer_getInstance_2().ge0_1);
    }
    if (0 === (seen0 & 1))
      $this.context = Companion_getInstance_12().qd6_1;
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
    Companion_getInstance_12();
    context = context === VOID ? Companion_getInstance_12().qd6_1 : context;
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
  protoOf(W3CV11DataModel).t9 = function () {
    return this.context;
  };
  protoOf(W3CV11DataModel).za0 = function () {
    return this.type;
  };
  protoOf(W3CV11DataModel).ie0 = function () {
    return this.credentialSubject;
  };
  protoOf(W3CV11DataModel).x6b = function () {
    return this.id;
  };
  protoOf(W3CV11DataModel).je0 = function () {
    return this.issuer;
  };
  protoOf(W3CV11DataModel).ke0 = function () {
    return this.issuanceDate;
  };
  protoOf(W3CV11DataModel).le0 = function () {
    return this.expirationDate;
  };
  protoOf(W3CV11DataModel).gd7 = function () {
    return this.credentialStatus;
  };
  protoOf(W3CV11DataModel).id7 = function () {
    return this.termsOfUse;
  };
  protoOf(W3CV11DataModel).encodeToJsonObject = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Companion_getInstance_8().tdz_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(W3CV11DataModel), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.f4s(tmp$ret$1, this);
    return get_jsonObject(tmp$ret$2);
  };
  protoOf(W3CV11DataModel).dc = function () {
    return this.context;
  };
  protoOf(W3CV11DataModel).ec = function () {
    return this.type;
  };
  protoOf(W3CV11DataModel).yp = function () {
    return this.credentialSubject;
  };
  protoOf(W3CV11DataModel).p70 = function () {
    return this.id;
  };
  protoOf(W3CV11DataModel).w7k = function () {
    return this.issuer;
  };
  protoOf(W3CV11DataModel).o85 = function () {
    return this.issuanceDate;
  };
  protoOf(W3CV11DataModel).p85 = function () {
    return this.expirationDate;
  };
  protoOf(W3CV11DataModel).ma1 = function () {
    return this.credentialStatus;
  };
  protoOf(W3CV11DataModel).ya1 = function () {
    return this.termsOfUse;
  };
  protoOf(W3CV11DataModel).me0 = function (context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse) {
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
    return $super === VOID ? this.me0(context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse) : $super.me0.call(this, context, type, credentialSubject, id, issuer, issuanceDate, expirationDate, credentialStatus, termsOfUse);
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
  function Companion_8() {
  }
  protoOf(Companion_8).m4u = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_10;
  function Companion_getInstance_13() {
    return Companion_instance_10;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('id.walt.w3c.vc.vcs.W3CV2DataModel.CredentialSubject', this, 1);
    tmp0_serialDesc.x2b('id', false);
    this.ne0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).oe0 = function (encoder, value) {
    var tmp0_desc = this.ne0_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    tmp1_output.w25(tmp0_desc, 0, value.id);
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_3).v20 = function (encoder, value) {
    return this.oe0(encoder, value instanceof CredentialSubject_0 ? value : THROW_CCE());
  };
  protoOf($serializer_3).w20 = function (decoder) {
    var tmp0_desc = this.ne0_1;
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
    return CredentialSubject_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_3).u20 = function () {
    return this.ne0_1;
  };
  protoOf($serializer_3).m2c = function () {
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_3().ne0_1);
    }
    $this.id = id;
    return $this;
  }
  function CredentialSubject_init_$Create$_0(seen0, id, serializationConstructorMarker) {
    return CredentialSubject_init_$Init$_0(seen0, id, serializationConstructorMarker, objectCreate(protoOf(CredentialSubject_0)));
  }
  function Companion_9() {
    Companion_instance_11 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, W3CV2DataModel$Companion$$childSerializers$_anonymous__o18f9q);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.rd6_1 = [tmp_1, lazy(tmp_2, W3CV2DataModel$Companion$$childSerializers$_anonymous__o18f9q_0), null, null, null, null, null, null, null];
    this.sd6_1 = listOf('https://www.w3.org/ns/credentials/v2');
  }
  protoOf(Companion_9).de0 = function () {
    return this.sd6_1;
  };
  protoOf(Companion_9).m4u = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_11;
  function Companion_getInstance_14() {
    if (Companion_instance_11 == null)
      new Companion_9();
    return Companion_instance_11;
  }
  function CredentialSubject_0(id) {
    this.id = id;
  }
  protoOf(CredentialSubject_0).x6b = function () {
    return this.id;
  };
  protoOf(CredentialSubject_0).dc = function () {
    return this.id;
  };
  protoOf(CredentialSubject_0).fa3 = function (id) {
    return new CredentialSubject_0(id);
  };
  protoOf(CredentialSubject_0).copy = function (id, $super) {
    id = id === VOID ? this.id : id;
    return $super === VOID ? this.fa3(id) : $super.fa3.call(this, id);
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
    tmp0_serialDesc.x2b('@context', true);
    tmp0_serialDesc.x2b('type', true);
    tmp0_serialDesc.x2b('credentialSubject', false);
    tmp0_serialDesc.x2b('id', true);
    tmp0_serialDesc.x2b('issuer', true);
    tmp0_serialDesc.x2b('validFrom', true);
    tmp0_serialDesc.x2b('validUntil', true);
    tmp0_serialDesc.x2b('credentialStatus', true);
    tmp0_serialDesc.x2b('termsOfUse', true);
    this.pe0_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).qe0 = function (encoder, value) {
    var tmp0_desc = this.pe0_1;
    var tmp1_output = encoder.h24(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().rd6_1;
    if (tmp1_output.e26(tmp0_desc, 0) ? true : !equals(value.context, Companion_getInstance_14().sd6_1)) {
      tmp1_output.y25(tmp0_desc, 0, tmp2_cached[0].b1(), value.context);
    }
    if (tmp1_output.e26(tmp0_desc, 1) ? true : !equals(value.type, listOf('VerifiableCredential'))) {
      tmp1_output.y25(tmp0_desc, 1, tmp2_cached[1].b1(), value.type);
    }
    tmp1_output.y25(tmp0_desc, 2, JsonObjectSerializer_getInstance(), value.credentialSubject);
    if (tmp1_output.e26(tmp0_desc, 3) ? true : !(value.id == null)) {
      tmp1_output.a26(tmp0_desc, 3, StringSerializer_getInstance(), value.id);
    }
    if (tmp1_output.e26(tmp0_desc, 4) ? true : !(value.issuer == null)) {
      tmp1_output.a26(tmp0_desc, 4, StringSerializer_getInstance(), value.issuer);
    }
    if (tmp1_output.e26(tmp0_desc, 5) ? true : !(value.validFrom == null)) {
      tmp1_output.a26(tmp0_desc, 5, StringSerializer_getInstance(), value.validFrom);
    }
    if (tmp1_output.e26(tmp0_desc, 6) ? true : !(value.validUntil == null)) {
      tmp1_output.a26(tmp0_desc, 6, StringSerializer_getInstance(), value.validUntil);
    }
    if (tmp1_output.e26(tmp0_desc, 7) ? true : !(value.credentialStatus == null)) {
      tmp1_output.a26(tmp0_desc, 7, $serializer_getInstance_0(), value.credentialStatus);
    }
    if (tmp1_output.e26(tmp0_desc, 8) ? true : !(value.termsOfUse == null)) {
      tmp1_output.a26(tmp0_desc, 8, $serializer_getInstance(), value.termsOfUse);
    }
    tmp1_output.i24(tmp0_desc);
  };
  protoOf($serializer_4).v20 = function (encoder, value) {
    return this.qe0(encoder, value instanceof W3CV2DataModel ? value : THROW_CCE());
  };
  protoOf($serializer_4).w20 = function (decoder) {
    var tmp0_desc = this.pe0_1;
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
    var tmp14_cached = Companion_getInstance_14().rd6_1;
    if (tmp13_input.x24()) {
      tmp4_local0 = tmp13_input.t24(tmp0_desc, 0, tmp14_cached[0].b1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.t24(tmp0_desc, 1, tmp14_cached[1].b1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.t24(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.v24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.v24(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.v24(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.v24(tmp0_desc, 7, $serializer_getInstance_0(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.v24(tmp0_desc, 8, $serializer_getInstance(), tmp12_local8);
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
            tmp5_local1 = tmp13_input.t24(tmp0_desc, 1, tmp14_cached[1].b1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.t24(tmp0_desc, 2, JsonObjectSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.v24(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.v24(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.v24(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.v24(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.v24(tmp0_desc, 7, $serializer_getInstance_0(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.v24(tmp0_desc, 8, $serializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.i24(tmp0_desc);
    return W3CV2DataModel_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_4).u20 = function () {
    return this.pe0_1;
  };
  protoOf($serializer_4).m2c = function () {
    var tmp0_cached = Companion_getInstance_14().rd6_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [tmp0_cached[0].b1(), tmp0_cached[1].b1(), JsonObjectSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_0()), get_nullable($serializer_getInstance())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function W3CV2DataModel_init_$Init$(seen0, context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse, serializationConstructorMarker, $this) {
    if (!(4 === (4 & seen0))) {
      throwMissingFieldException(seen0, 4, $serializer_getInstance_4().pe0_1);
    }
    if (0 === (seen0 & 1))
      $this.context = Companion_getInstance_14().sd6_1;
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
    Companion_getInstance_14();
    context = context === VOID ? Companion_getInstance_14().sd6_1 : context;
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
  protoOf(W3CV2DataModel).t9 = function () {
    return this.context;
  };
  protoOf(W3CV2DataModel).za0 = function () {
    return this.type;
  };
  protoOf(W3CV2DataModel).ie0 = function () {
    return this.credentialSubject;
  };
  protoOf(W3CV2DataModel).x6b = function () {
    return this.id;
  };
  protoOf(W3CV2DataModel).je0 = function () {
    return this.issuer;
  };
  protoOf(W3CV2DataModel).cd7 = function () {
    return this.validFrom;
  };
  protoOf(W3CV2DataModel).ed7 = function () {
    return this.validUntil;
  };
  protoOf(W3CV2DataModel).gd7 = function () {
    return this.credentialStatus;
  };
  protoOf(W3CV2DataModel).id7 = function () {
    return this.termsOfUse;
  };
  protoOf(W3CV2DataModel).encodeToJsonObject = function () {
    // Inline function 'kotlinx.serialization.json.encodeToJsonElement' call
    var this_0 = Companion_getInstance_8().tdz_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(W3CV2DataModel), arrayOf([]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.f4s(tmp$ret$1, this);
    return get_jsonObject(tmp$ret$2);
  };
  protoOf(W3CV2DataModel).dc = function () {
    return this.context;
  };
  protoOf(W3CV2DataModel).ec = function () {
    return this.type;
  };
  protoOf(W3CV2DataModel).yp = function () {
    return this.credentialSubject;
  };
  protoOf(W3CV2DataModel).p70 = function () {
    return this.id;
  };
  protoOf(W3CV2DataModel).w7k = function () {
    return this.issuer;
  };
  protoOf(W3CV2DataModel).o85 = function () {
    return this.validFrom;
  };
  protoOf(W3CV2DataModel).p85 = function () {
    return this.validUntil;
  };
  protoOf(W3CV2DataModel).ma1 = function () {
    return this.credentialStatus;
  };
  protoOf(W3CV2DataModel).ya1 = function () {
    return this.termsOfUse;
  };
  protoOf(W3CV2DataModel).me0 = function (context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse) {
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
    return $super === VOID ? this.me0(context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse) : $super.me0.call(this, context, type, credentialSubject, id, issuer, validFrom, validUntil, credentialStatus, termsOfUse);
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
    this.re0_1 = Companion_instance_0.m4u().u20();
  }
  protoOf(W3CVCSerializer).u20 = function () {
    return this.re0_1;
  };
  protoOf(W3CVCSerializer).w20 = function (decoder) {
    return new W3CVC(decoder.g24(Companion_instance_0.m4u()));
  };
  protoOf(W3CVCSerializer).se0 = function (encoder, value) {
    return encoder.z25(Companion_instance_0.m4u(), value.toJsonObject());
  };
  protoOf(W3CVCSerializer).v20 = function (encoder, value) {
    return this.se0(encoder, value instanceof W3CVC ? value : THROW_CCE());
  };
  function W3CVC$Companion$prettyJson$lambda($this$Json) {
    $this$Json.a4t_1 = true;
    return Unit_instance;
  }
  function Companion_10() {
    Companion_instance_12 = this;
    var tmp = this;
    tmp.te0_1 = Json(VOID, W3CVC$Companion$prettyJson$lambda);
  }
  protoOf(Companion_10).build = function (context, type, data) {
    // Inline function 'kotlin.apply' call
    var this_0 = mutableMapOf([to('@context', JsonUtils_getInstance().listToJsonElement(context)), to('type', JsonUtils_getInstance().listToJsonElement(type))]);
    // Inline function 'kotlin.collections.mapValues' call
    var this_1 = toMap(data);
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination = LinkedHashMap_init_$Create$_0(mapCapacity(this_1.s()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s = this_1.z().p();
    while (_iterator__ex2g4s.q()) {
      var element = _iterator__ex2g4s.r();
      var tmp = element.a1();
      var tmp$ret$1 = JsonUtils_getInstance().toJsonElement(element.b1());
      destination.p2(tmp, tmp$ret$1);
    }
    this_0.r2(destination);
    return new W3CVC(this_0);
  };
  protoOf(Companion_10).fromJson = function (json) {
    // Inline function 'kotlinx.serialization.json.Json.decodeFromString' call
    var this_0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.serializer' call
    var this_1 = this_0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_2 = serializer(this_1, createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_2, KSerializer) ? this_2 : THROW_CCE();
    var tmp$ret$2 = this_0.y21(tmp$ret$1, json);
    return new W3CVC(tmp$ret$2);
  };
  protoOf(Companion_10).m4u = function () {
    return new W3CVCSerializer();
  };
  var Companion_instance_12;
  function Companion_getInstance_15() {
    if (Companion_instance_12 == null)
      new Companion_10();
    return Companion_instance_12;
  }
  function W3CVC$signSdJwtAsync$slambda(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $disclosureMap, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation) {
    this.ce1_1 = this$0;
    this.de1_1 = $issuerKey;
    this.ee1_1 = $issuerId;
    this.fe1_1 = $issuerKid;
    this.ge1_1 = $subjectDid;
    this.he1_1 = $disclosureMap;
    this.ie1_1 = $additionalJwtHeaders;
    this.je1_1 = $additionalJwtOptions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(W3CVC$signSdJwtAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(W3CVC$signSdJwtAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(W3CVC$signSdJwtAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.ce1_1.ldm(this.de1_1, this.ee1_1, this.fe1_1, this.ge1_1, this.he1_1, this.ie1_1, this.je1_1, this);
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
  protoOf(W3CVC$signSdJwtAsync$slambda).ja = function (completion) {
    return new W3CVC$signSdJwtAsync$slambda(this.ce1_1, this.de1_1, this.ee1_1, this.fe1_1, this.ge1_1, this.he1_1, this.ie1_1, this.je1_1, completion);
  };
  function W3CVC$signSdJwtAsync$slambda_0(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $disclosureMap, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation) {
    var i = new W3CVC$signSdJwtAsync$slambda(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $disclosureMap, $additionalJwtHeaders, $additionalJwtOptions, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function W3CVC$signJwsAsync$slambda(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $additionalJwtHeader, $additionalJwtOptions, resultContinuation) {
    this.se1_1 = this$0;
    this.te1_1 = $issuerKey;
    this.ue1_1 = $issuerId;
    this.ve1_1 = $issuerKid;
    this.we1_1 = $subjectDid;
    this.xe1_1 = $additionalJwtHeader;
    this.ye1_1 = $additionalJwtOptions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(W3CVC$signJwsAsync$slambda).g6l = function ($completion) {
    var tmp = this.ja($completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(W3CVC$signJwsAsync$slambda).ac = function ($completion) {
    return this.g6l($completion);
  };
  protoOf(W3CVC$signJwsAsync$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 2;
            this.n9_1 = 1;
            suspendResult = this.se1_1.jdl(this.te1_1, this.ue1_1, this.ve1_1, this.we1_1, this.xe1_1, this.ye1_1, this);
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
  protoOf(W3CVC$signJwsAsync$slambda).ja = function (completion) {
    return new W3CVC$signJwsAsync$slambda(this.se1_1, this.te1_1, this.ue1_1, this.ve1_1, this.we1_1, this.xe1_1, this.ye1_1, completion);
  };
  function W3CVC$signJwsAsync$slambda_0(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $additionalJwtHeader, $additionalJwtOptions, resultContinuation) {
    var i = new W3CVC$signJwsAsync$slambda(this$0, $issuerKey, $issuerId, $issuerKid, $subjectDid, $additionalJwtHeader, $additionalJwtOptions, resultContinuation);
    var l = function ($completion) {
      return i.g6l($completion);
    };
    l.$arity = 0;
    return l;
  }
  function $signSdJwtCOROUTINE$13(_this__u8e3s4, issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.he2_1 = _this__u8e3s4;
    this.ie2_1 = issuerKey;
    this.je2_1 = issuerId;
    this.ke2_1 = issuerKid;
    this.le2_1 = subjectDid;
    this.me2_1 = disclosureMap;
    this.ne2_1 = additionalJwtHeaders;
    this.oe2_1 = additionalJwtOptions;
  }
  protoOf($signSdJwtCOROUTINE$13).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.pe2_1 = this.ke2_1;
            if (this.pe2_1 == null) {
              this.n9_1 = 1;
              suspendResult = this.ie2_1.d6m(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.qe2_1 = this.pe2_1;
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.qe2_1 = suspendResult;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.re2_1 = this.qe2_1;
            var tmp_0 = this;
            var tmp_1 = new JwsSignatureScheme();
            var tmp_2 = this.he2_1.toJsonObject();
            var tmp_3 = [to('iss', JsonPrimitive(this.je2_1)), to('sub', JsonPrimitive(this.le2_1))];
            var this_0 = this.oe2_1.z();
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
            var _iterator__ex2g4s = this_0.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(new Pair(item.a1(), item.b1()));
            }

            tmp_0.se2_1 = tmp_1.toPayload(tmp_2, mapOf_0(arrayConcat([tmp_3, copyToArray(destination)])));
            this.te2_1 = Companion_getInstance_3().kc9(this.se2_1, (new zzz_unused_SDMapBuilder(this.me2_1.dc7_1)).jc9('vc', false, this.me2_1).x2x());
            var tmp_4 = this;
            var tmp3 = Default_getInstance();
            var value = this.te2_1.undisclosedPayload;
            var this_1 = tmp3.w24();
            var this_2 = serializer(this_1, createKType(getKClass(JsonObject), arrayOf([]), false));
            tmp_4.ue2_1 = toByteArray(tmp3.x21(isInterface(this_2, KSerializer) ? this_2 : THROW_CCE(), value));
            this.n9_1 = 3;
            suspendResult = this.ie2_1.h6l(this.ue2_1, plus(this.ne2_1, mapOf(to('kid', JsonUtils_getInstance().toJsonElement(this.re2_1)))), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var signed = suspendResult;
            return Companion_getInstance_2().createFromSignedJwt(signed, this.te2_1).toString();
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
  protoOf($signSdJwtCOROUTINE$13)['<set-state>'] = protoOf($signSdJwtCOROUTINE$13).u9;
  protoOf($signSdJwtCOROUTINE$13)['<get-state>'] = protoOf($signSdJwtCOROUTINE$13).v9;
  protoOf($signSdJwtCOROUTINE$13)['<set-exceptionState>'] = protoOf($signSdJwtCOROUTINE$13).w9;
  protoOf($signSdJwtCOROUTINE$13)['<get-exceptionState>'] = protoOf($signSdJwtCOROUTINE$13).x9;
  protoOf($signSdJwtCOROUTINE$13)['<set-result>'] = protoOf($signSdJwtCOROUTINE$13).y9;
  protoOf($signSdJwtCOROUTINE$13)['<get-result>'] = protoOf($signSdJwtCOROUTINE$13).z9;
  protoOf($signSdJwtCOROUTINE$13)['<set-exception>'] = protoOf($signSdJwtCOROUTINE$13).aa;
  protoOf($signSdJwtCOROUTINE$13)['<get-exception>'] = protoOf($signSdJwtCOROUTINE$13).ba;
  protoOf($signSdJwtCOROUTINE$13)['<set-finallyPath>'] = protoOf($signSdJwtCOROUTINE$13).ca;
  protoOf($signSdJwtCOROUTINE$13)['<get-finallyPath>'] = protoOf($signSdJwtCOROUTINE$13).da;
  protoOf($signSdJwtCOROUTINE$13)['<get-context>'] = protoOf($signSdJwtCOROUTINE$13).t9;
  function $signJwsCOROUTINE$14(_this__u8e3s4, issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.de3_1 = _this__u8e3s4;
    this.ee3_1 = issuerKey;
    this.fe3_1 = issuerId;
    this.ge3_1 = issuerKid;
    this.he3_1 = subjectDid;
    this.ie3_1 = additionalJwtHeader;
    this.je3_1 = additionalJwtOptions;
  }
  protoOf($signJwsCOROUTINE$14).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 4;
            this.ke3_1 = this.ge3_1;
            if (this.ke3_1 == null) {
              this.n9_1 = 1;
              suspendResult = this.ee3_1.d6m(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.le3_1 = this.ke3_1;
              this.n9_1 = 2;
              continue $sm;
            }

          case 1:
            this.le3_1 = suspendResult;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            this.me3_1 = this.le3_1;
            this.n9_1 = 3;
            var tmp_0 = new JwsSignatureScheme();
            var tmp_1 = this.de3_1.toJsonObject();
            var tmp_2 = [to('kid', JsonUtils_getInstance().toJsonElement(this.me3_1))];
            var this_0 = this.ie3_1.z();
            var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
            var _iterator__ex2g4s = this_0.p();
            while (_iterator__ex2g4s.q()) {
              var item = _iterator__ex2g4s.r();
              destination.n(new Pair(item.a1(), item.b1()));
            }

            var tmp_3 = mapOf_0(arrayConcat([tmp_2, copyToArray(destination)]));
            var tmp_4 = [to('iss', JsonPrimitive(this.fe3_1)), to('sub', JsonPrimitive(this.he3_1))];
            var this_1 = this.je3_1.z();
            var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_1, 10));
            var _iterator__ex2g4s_0 = this_1.p();
            while (_iterator__ex2g4s_0.q()) {
              var item_0 = _iterator__ex2g4s_0.r();
              destination_0.n(new Pair(item_0.a1(), item_0.b1()));
            }

            suspendResult = tmp_0.odq(tmp_1, this.ee3_1, tmp_3, mapOf_0(arrayConcat([tmp_4, copyToArray(destination_0)])), this);
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
  protoOf($signJwsCOROUTINE$14)['<set-state>'] = protoOf($signJwsCOROUTINE$14).u9;
  protoOf($signJwsCOROUTINE$14)['<get-state>'] = protoOf($signJwsCOROUTINE$14).v9;
  protoOf($signJwsCOROUTINE$14)['<set-exceptionState>'] = protoOf($signJwsCOROUTINE$14).w9;
  protoOf($signJwsCOROUTINE$14)['<get-exceptionState>'] = protoOf($signJwsCOROUTINE$14).x9;
  protoOf($signJwsCOROUTINE$14)['<set-result>'] = protoOf($signJwsCOROUTINE$14).y9;
  protoOf($signJwsCOROUTINE$14)['<get-result>'] = protoOf($signJwsCOROUTINE$14).z9;
  protoOf($signJwsCOROUTINE$14)['<set-exception>'] = protoOf($signJwsCOROUTINE$14).aa;
  protoOf($signJwsCOROUTINE$14)['<get-exception>'] = protoOf($signJwsCOROUTINE$14).ba;
  protoOf($signJwsCOROUTINE$14)['<set-finallyPath>'] = protoOf($signJwsCOROUTINE$14).ca;
  protoOf($signJwsCOROUTINE$14)['<get-finallyPath>'] = protoOf($signJwsCOROUTINE$14).da;
  protoOf($signJwsCOROUTINE$14)['<get-context>'] = protoOf($signJwsCOROUTINE$14).t9;
  function W3CVC(content) {
    Companion_getInstance_15();
    content = content === VOID ? emptyMap() : content;
    this.fdh_1 = content;
  }
  protoOf(W3CVC).getType = function () {
    var tmp0_elvis_lhs = this.af('type');
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
      var tmp$ret$0 = get_jsonPrimitive(item).q4u();
      destination.n(tmp$ret$0);
    }
    return destination;
  };
  protoOf(W3CVC).ne3 = function (additionalProperties) {
    return new JsonObject(plus(this.fdh_1, additionalProperties));
  };
  protoOf(W3CVC).toJsonObject = function (additionalProperties, $super) {
    additionalProperties = additionalProperties === VOID ? emptyMap() : additionalProperties;
    return $super === VOID ? this.ne3(additionalProperties) : $super.ne3.call(this, additionalProperties);
  };
  protoOf(W3CVC).toJson = function () {
    var tmp0 = Default_getInstance();
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value = this.fdh_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    return tmp0.x21(tmp$ret$1, value);
  };
  protoOf(W3CVC).toPrettyJson = function () {
    var tmp0 = Companion_getInstance_15().te0_1;
    // Inline function 'kotlinx.serialization.json.Json.encodeToString' call
    var value = this.fdh_1;
    // Inline function 'kotlinx.serialization.serializer' call
    var this_0 = tmp0.w24();
    // Inline function 'kotlinx.serialization.internal.cast' call
    var this_1 = serializer(this_0, createKType(getKClass(KtMap), arrayOf([createInvariantKTypeProjection(createKType(PrimitiveClasses_getInstance().nd(), arrayOf([]), false)), createInvariantKTypeProjection(createKType(getKClass(JsonElement), arrayOf([]), false))]), false));
    var tmp$ret$1 = isInterface(this_1, KSerializer) ? this_1 : THROW_CCE();
    return tmp0.x21(tmp$ret$1, value);
  };
  protoOf(W3CVC).ldm = function (issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $completion) {
    var tmp = new $signSdJwtCOROUTINE$13(this, issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(W3CVC).signSdJwt$default = function (issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $completion, $super) {
    additionalJwtHeaders = additionalJwtHeaders === VOID ? emptyMap() : additionalJwtHeaders;
    additionalJwtOptions = additionalJwtOptions === VOID ? emptyMap() : additionalJwtOptions;
    return $super === VOID ? this.ldm(issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $completion) : $super.ldm.call(this, issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $completion);
  };
  protoOf(W3CVC).jdl = function (issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $completion) {
    var tmp = new $signJwsCOROUTINE$14(this, issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(W3CVC).signJws$default = function (issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $completion, $super) {
    issuerKid = issuerKid === VOID ? null : issuerKid;
    additionalJwtHeader = additionalJwtHeader === VOID ? emptyMap() : additionalJwtHeader;
    additionalJwtOptions = additionalJwtOptions === VOID ? emptyMap() : additionalJwtOptions;
    return $super === VOID ? this.jdl(issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $completion) : $super.jdl.call(this, issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $completion);
  };
  protoOf(W3CVC).oe3 = function (issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions) {
    var tmp = W3CVC$signSdJwtAsync$slambda_0(this, issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(W3CVC).signSdJwtAsync$default = function (issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions, $super) {
    additionalJwtHeaders = additionalJwtHeaders === VOID ? emptyMap() : additionalJwtHeaders;
    additionalJwtOptions = additionalJwtOptions === VOID ? emptyMap() : additionalJwtOptions;
    return $super === VOID ? this.oe3(issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions) : $super.oe3.call(this, issuerKey, issuerId, issuerKid, subjectDid, disclosureMap, additionalJwtHeaders, additionalJwtOptions);
  };
  protoOf(W3CVC).pe3 = function (issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions) {
    var tmp = W3CVC$signJwsAsync$slambda_0(this, issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, null);
    return $runInAsync$(tmp, isInterface(this, CoroutineScope) ? this : null);
  };
  protoOf(W3CVC).signJwsAsync$default = function (issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions, $super) {
    issuerKid = issuerKid === VOID ? null : issuerKid;
    additionalJwtHeader = additionalJwtHeader === VOID ? emptyMap() : additionalJwtHeader;
    additionalJwtOptions = additionalJwtOptions === VOID ? emptyMap() : additionalJwtOptions;
    return $super === VOID ? this.pe3(issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions) : $super.pe3.call(this, issuerKey, issuerId, issuerKid, subjectDid, additionalJwtHeader, additionalJwtOptions);
  };
  protoOf(W3CVC).qe3 = function (content) {
    return new W3CVC(content);
  };
  protoOf(W3CVC).copy = function (content, $super) {
    content = content === VOID ? this.fdh_1 : content;
    return $super === VOID ? this.qe3(content) : $super.qe3.call(this, content);
  };
  protoOf(W3CVC).toString = function () {
    return 'W3CVC(content=' + toString(this.fdh_1) + ')';
  };
  protoOf(W3CVC).hashCode = function () {
    return hashCode(this.fdh_1);
  };
  protoOf(W3CVC).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof W3CVC))
      return false;
    var tmp0_other_with_cast = other instanceof W3CVC ? other : THROW_CCE();
    if (!equals(this.fdh_1, tmp0_other_with_cast.fdh_1))
      return false;
    return true;
  };
  protoOf(W3CVC).h = function () {
    return this.fdh_1.h();
  };
  protoOf(W3CVC).s2p = function (key) {
    return this.fdh_1.k2(key);
  };
  protoOf(W3CVC).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.s2p((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(W3CVC).o4u = function (value) {
    return this.fdh_1.l2(value);
  };
  protoOf(W3CVC).l2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.o4u(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(W3CVC).af = function (key) {
    return this.fdh_1.m2(key);
  };
  protoOf(W3CVC).m2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.af((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(W3CVC).asJsReadonlyMapView = function () {
    return this.fdh_1.asJsReadonlyMapView();
  };
  protoOf(W3CVC).s = function () {
    return this.fdh_1.s();
  };
  protoOf(W3CVC).n2 = function () {
    return this.fdh_1.n2();
  };
  protoOf(W3CVC).o2 = function () {
    return this.fdh_1.o2();
  };
  protoOf(W3CVC).z = function () {
    return this.fdh_1.z();
  };
  function CredentialBuilderUtils() {
  }
  protoOf(CredentialBuilderUtils).generateCredentialSubject = function (credentialSubject) {
    var credentialSubjectJson = Default_getInstance().h4s(credentialSubject);
    return JsonUtils_getInstance().toJsonObject(get_jsonObject(credentialSubjectJson));
  };
  var CredentialBuilderUtils_instance;
  function CredentialBuilderUtils_getInstance() {
    return CredentialBuilderUtils_instance;
  }
  //region block: post-declaration
  defineProp(protoOf(CredentialBuilderType), 'name', protoOf(CredentialBuilderType).u2);
  defineProp(protoOf(CredentialBuilderType), 'ordinal', protoOf(CredentialBuilderType).v2);
  protoOf($serializer).n2c = typeParametersSerializers;
  protoOf($serializer_0).n2c = typeParametersSerializers;
  protoOf($serializer_1).n2c = typeParametersSerializers;
  defineProp(protoOf(Companion_7), 'defaultContext', function () {
    return this.de0();
  });
  protoOf($serializer_2).n2c = typeParametersSerializers;
  protoOf($serializer_3).n2c = typeParametersSerializers;
  defineProp(protoOf(Companion_9), 'defaultContext', function () {
    return this.de0();
  });
  protoOf($serializer_4).n2c = typeParametersSerializers;
  //endregion
  //region block: init
  Issuer_instance = new Issuer();
  JwsHeader_instance = new JwsHeader();
  JwsOption_instance = new JwsOption();
  ExtensionMethods_instance = new ExtensionMethods();
  W3CVcUtils_instance = new W3CVcUtils();
  Companion_instance_6 = new Companion_4();
  Companion_instance_7 = new Companion_5();
  W3CBaseDataModels_instance = new W3CBaseDataModels();
  Companion_instance_8 = new Companion_6();
  Companion_instance_10 = new Companion_8();
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
    defineProp(W3CBaseDataModels.prototype.TermsOfUse, 'Companion', Companion_getInstance_9);
    W3CBaseDataModels.prototype.CredentialStatus = CredentialStatus;
    defineProp(W3CBaseDataModels.prototype.CredentialStatus, 'Companion', Companion_getInstance_10);
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
    defineProp($id$walt$w3c$vc$vcs.W3CV11DataModel, 'Companion', Companion_getInstance_12);
    $id$walt$w3c$vc$vcs.W3CV11DataModel.CredentialSubject = CredentialSubject;
    defineProp($id$walt$w3c$vc$vcs.W3CV11DataModel.CredentialSubject, 'Companion', Companion_getInstance_11);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$vc = $id$walt$w3c.vc || ($id$walt$w3c.vc = {});
    var $id$walt$w3c$vc$vcs = $id$walt$w3c$vc.vcs || ($id$walt$w3c$vc.vcs = {});
    $id$walt$w3c$vc$vcs.W3CV2DataModel = W3CV2DataModel;
    defineProp($id$walt$w3c$vc$vcs.W3CV2DataModel, 'Companion', Companion_getInstance_14);
    $id$walt$w3c$vc$vcs.W3CV2DataModel.CredentialSubject = CredentialSubject_0;
    defineProp($id$walt$w3c$vc$vcs.W3CV2DataModel.CredentialSubject, 'Companion', Companion_getInstance_13);
    var $id = _.id || (_.id = {});
    var $id$walt = $id.walt || ($id.walt = {});
    var $id$walt$w3c = $id$walt.w3c || ($id$walt.w3c = {});
    var $id$walt$w3c$vc = $id$walt$w3c.vc || ($id$walt$w3c.vc = {});
    var $id$walt$w3c$vc$vcs = $id$walt$w3c$vc.vcs || ($id$walt$w3c$vc.vcs = {});
    $id$walt$w3c$vc$vcs.W3CVCSerializer = W3CVCSerializer;
    $id$walt$w3c$vc$vcs.W3CVC = W3CVC;
    defineProp($id$walt$w3c$vc$vcs.W3CVC, 'Companion', Companion_getInstance_15);
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
  _.$_$ = _.$_$ || {};
  _.$_$.a = VCFormat_jwt_vc_json_getInstance;
  _.$_$.b = VCFormat_jwt_vc_getInstance;
  _.$_$.c = VCFormat_jwt_vp_json_getInstance;
  _.$_$.d = VCFormat_jwt_vp_getInstance;
  _.$_$.e = VCFormat_ldp_vc_getInstance;
  _.$_$.f = VCFormat_ldp_vp_getInstance;
  _.$_$.g = VCFormat_mso_mdoc_getInstance;
  _.$_$.h = VCFormat_sd_jwt_vc_getInstance;
  _.$_$.i = JwtClaims_IssuedAt_getInstance;
  _.$_$.j = JwtClaims_NotAfter_getInstance;
  _.$_$.k = JwtClaims_NotBefore_getInstance;
  _.$_$.l = V1_NotAfter_getInstance;
  _.$_$.m = V1_NotBefore_getInstance;
  _.$_$.n = V2_NotAfter_getInstance;
  _.$_$.o = V2_NotBefore_getInstance;
  _.$_$.p = Companion_getInstance_7;
  _.$_$.q = JwsSignatureScheme;
  _.$_$.r = VCFormat;
  //endregion
  return _;
}));

//# sourceMappingURL=w3c-credentials.js.map
