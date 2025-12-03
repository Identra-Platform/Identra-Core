(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var protoOf = kotlin_kotlin.$_$.a8;
  var initMetadataForObject = kotlin_kotlin.$_$.k7;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForClass = kotlin_kotlin.$_$.f7;
  var toString = kotlin_kotlin.$_$.hb;
  var Unit_instance = kotlin_kotlin.$_$.r3;
  var Enum = kotlin_kotlin.$_$.ba;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var initMetadataForInterface = kotlin_kotlin.$_$.i7;
  var initMetadataForCompanion = kotlin_kotlin.$_$.g7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.v;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m1;
  var equals = kotlin_kotlin.$_$.a7;
  var hashCode = kotlin_kotlin.$_$.e7;
  var joinToString = kotlin_kotlin.$_$.y4;
  var THROW_CCE = kotlin_kotlin.$_$.ia;
  var KtMap = kotlin_kotlin.$_$.x3;
  var KtList = kotlin_kotlin.$_$.v3;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var numberRangeToNumber = kotlin_kotlin.$_$.v7;
  var ClosedRange = kotlin_kotlin.$_$.f8;
  var isInterface = kotlin_kotlin.$_$.r7;
  var contains = kotlin_kotlin.$_$.i8;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var toString_0 = kotlin_kotlin.$_$.d8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var getBooleanHashCode = kotlin_kotlin.$_$.b7;
  var getStringHashCode = kotlin_kotlin.$_$.d7;
  var toDouble = kotlin_kotlin.$_$.m9;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.g3;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var lazy = kotlin_kotlin.$_$.cb;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var KProperty1 = kotlin_kotlin.$_$.m8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.c7;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var captureStack = kotlin_kotlin.$_$.t6;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var charSequenceLength = kotlin_kotlin.$_$.x6;
  var charSequenceSubSequence = kotlin_kotlin.$_$.y6;
  var coerceAtLeast = kotlin_kotlin.$_$.g8;
  var coerceAtMost = kotlin_kotlin.$_$.h8;
  var Collection = kotlin_kotlin.$_$.t3;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var singleOrNull = kotlin_kotlin.$_$.p5;
  var emptyMap = kotlin_kotlin.$_$.s4;
  var getValue = kotlin_kotlin.$_$.v4;
  var copyOf = kotlin_kotlin.$_$.o4;
  var copyOf_0 = kotlin_kotlin.$_$.p4;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.z9;
  var invoke = kotlin_kotlin.$_$.ya;
  var CoroutineImpl = kotlin_kotlin.$_$.o6;
  var DeepRecursiveScope = kotlin_kotlin.$_$.aa;
  var Unit = kotlin_kotlin.$_$.sa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z5;
  var initMetadataForLambda = kotlin_kotlin.$_$.j7;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.h7;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var getKClass = kotlin_kotlin.$_$.b;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var ensureNotNull = kotlin_kotlin.$_$.xa;
  var substringBefore = kotlin_kotlin.$_$.l9;
  var removeSuffix = kotlin_kotlin.$_$.b9;
  var substringAfter = kotlin_kotlin.$_$.i9;
  var contains_0 = kotlin_kotlin.$_$.s8;
  var plus = kotlin_kotlin.$_$.eb;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var toLong = kotlin_kotlin.$_$.c8;
  var IllegalArgumentException = kotlin_kotlin.$_$.ea;
  var isFinite = kotlin_kotlin.$_$.ab;
  var isFinite_0 = kotlin_kotlin.$_$.za;
  var charSequenceGet = kotlin_kotlin.$_$.w6;
  var toUInt = kotlin_kotlin.$_$.q9;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.d2;
  var toULong = kotlin_kotlin.$_$.r9;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.k2;
  var toUByte = kotlin_kotlin.$_$.p9;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.w1;
  var toUShort = kotlin_kotlin.$_$.s9;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.r2;
  var Companion_getInstance = kotlin_kotlin.$_$.o3;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.p3;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.n3;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.q3;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var setOf = kotlin_kotlin.$_$.o5;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.q1;
  var numberToChar = kotlin_kotlin.$_$.w7;
  var equals_0 = kotlin_kotlin.$_$.w8;
  var toString_1 = kotlin_kotlin.$_$.r1;
  var toByte = kotlin_kotlin.$_$.b8;
  var startsWith = kotlin_kotlin.$_$.g9;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var single = kotlin_kotlin.$_$.d9;
  var Char = kotlin_kotlin.$_$.y9;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var emptySet = kotlin_kotlin.$_$.t4;
  var plus_0 = kotlin_kotlin.$_$.k5;
  var toInt = kotlin_kotlin.$_$.o9;
  var toList = kotlin_kotlin.$_$.s5;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.db;
  var last = kotlin_kotlin.$_$.d5;
  var removeLast = kotlin_kotlin.$_$.n5;
  var lastIndexOf = kotlin_kotlin.$_$.a9;
  var Long = kotlin_kotlin.$_$.fa;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.n1;
  var numberToLong = kotlin_kotlin.$_$.y7;
  var charArray = kotlin_kotlin.$_$.v6;
  var indexOf = kotlin_kotlin.$_$.x8;
  var indexOf_0 = kotlin_kotlin.$_$.y8;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, VOID, VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
  initMetadataForClass(JsonArrayBuilder, 'JsonArrayBuilder');
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [0]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.qz_1 = configuration;
    this.rz_1 = serializersModule;
    this.sz_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).gp = function () {
    return this.rz_1;
  };
  protoOf(Json).tz = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.em(), null);
    var result = input.ro(deserializer);
    lexer.h10();
    return result;
  };
  protoOf(Json).uz = function (string) {
    return this.tz(JsonElementSerializer_getInstance(), string);
  };
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.i10_1 = encodeDefaults;
    this.j10_1 = ignoreUnknownKeys;
    this.k10_1 = isLenient;
    this.l10_1 = allowStructuredMapKeys;
    this.m10_1 = prettyPrint;
    this.n10_1 = explicitNulls;
    this.o10_1 = prettyPrintIndent;
    this.p10_1 = coerceInputValues;
    this.q10_1 = useArrayPolymorphism;
    this.r10_1 = classDiscriminator;
    this.s10_1 = allowSpecialFloatingPointValues;
    this.t10_1 = useAlternativeNames;
    this.u10_1 = namingStrategy;
    this.v10_1 = decodeEnumsCaseInsensitive;
    this.w10_1 = allowTrailingComma;
    this.x10_1 = allowComments;
    this.y10_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.i10_1 + ', ignoreUnknownKeys=' + this.j10_1 + ', isLenient=' + this.k10_1 + ', ' + ('allowStructuredMapKeys=' + this.l10_1 + ', prettyPrint=' + this.m10_1 + ', explicitNulls=' + this.n10_1 + ', ') + ("prettyPrintIndent='" + this.o10_1 + "', coerceInputValues=" + this.p10_1 + ', useArrayPolymorphism=' + this.q10_1 + ', ') + ("classDiscriminator='" + this.r10_1 + "', allowSpecialFloatingPointValues=" + this.s10_1 + ', ') + ('useAlternativeNames=' + this.t10_1 + ', namingStrategy=' + toString(this.u10_1) + ', decodeEnumsCaseInsensitive=' + this.v10_1 + ', ') + ('allowTrailingComma=' + this.w10_1 + ', allowComments=' + this.x10_1 + ', classDiscriminatorMode=' + this.y10_1.toString() + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function JsonDecoder() {
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.q1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.r1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.q7(_Char___init__impl__6a9atx(58));
    this_0.o7(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.b11_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.b11_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.b11_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.b11_1.x1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).j = function () {
    return this.b11_1.j();
  };
  protoOf(JsonObject).c11 = function (key) {
    return this.b11_1.s1(key);
  };
  protoOf(JsonObject).s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.c11((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).d11 = function (value) {
    return this.b11_1.t1(value);
  };
  protoOf(JsonObject).t1 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.d11(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).lc = function (key) {
    return this.b11_1.u1(key);
  };
  protoOf(JsonObject).u1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.lc((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.b11_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).i = function () {
    return this.b11_1.i();
  };
  protoOf(JsonObject).v1 = function () {
    return this.b11_1.v1();
  };
  protoOf(JsonObject).w1 = function () {
    return this.b11_1.w1();
  };
  protoOf(JsonObject).x1 = function () {
    return this.b11_1.x1();
  };
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonElement() {
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.e11();
  };
  function get_jsonObject(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonObject ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonObject');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_6() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.f11_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.f11_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.f11_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.f11_1, ',', '[', ']');
  };
  protoOf(JsonArray).j = function () {
    return this.f11_1.j();
  };
  protoOf(JsonArray).f = function () {
    return this.f11_1.f();
  };
  protoOf(JsonArray).k = function (index) {
    return this.f11_1.k(index);
  };
  protoOf(JsonArray).i = function () {
    return this.f11_1.i();
  };
  function get_long(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull(_this__u8e3s4.e11());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$(_this__u8e3s4.toString() + ' does not represent a Boolean');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.g11_1 = 'null';
  }
  protoOf(JsonNull).e11 = function () {
    return this.g11_1;
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.e11();
    }
    return tmp;
  }
  function JsonPrimitive_1(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_jsonArray(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonArray ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonArray');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function get_int(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNumberFormatException' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        throw NumberFormatException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    var result = tmp;
    // Inline function 'kotlin.ranges.contains' call
    var this_0 = numberRangeToNumber(-2147483648, 2147483647);
    if (!contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result))
      throw NumberFormatException_init_$Create$(_this__u8e3s4.e11() + ' is not an Int');
    return result.z();
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString_0(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.e11())).h11();
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.i11_1 = isString;
    this.j11_1 = coerceToInlineType;
    this.k11_1 = toString_0(body);
    if (!(this.j11_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.j11_1.rm()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString_0(message));
      }
    }
  }
  protoOf(JsonLiteral).e11 = function () {
    return this.k11_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.i11_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.k11_1);
      tmp = this_0.toString();
    } else {
      tmp = this.k11_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.i11_1 === other.i11_1))
      return false;
    if (!(this.k11_1 === other.k11_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.i11_1);
    result = imul(31, result) + getStringHashCode(this.k11_1) | 0;
    return result;
  };
  function JsonPrimitive_2(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.e11());
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.e11();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.e11());
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function JsonObjectBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.l11_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).m11 = function (key, element) {
    return this.l11_1.y1(key, element);
  };
  protoOf(JsonObjectBuilder).n11 = function () {
    return new JsonObject(this.l11_1);
  };
  function put(_this__u8e3s4, key, value) {
    return _this__u8e3s4.m11(key, JsonPrimitive_1(value));
  }
  function put_0(_this__u8e3s4, key, value) {
    return _this__u8e3s4.m11(key, JsonPrimitive_2(value));
  }
  function put_1(_this__u8e3s4, key, value) {
    return _this__u8e3s4.m11(key, JsonPrimitive_0(value));
  }
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.o11_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).p11 = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.o11_1.d(element);
    return true;
  };
  protoOf(JsonArrayBuilder).n11 = function () {
    return new JsonArray(this.o11_1);
  };
  function add(_this__u8e3s4, value) {
    return _this__u8e3s4.p11(JsonPrimitive_1(value));
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.q11_1 = ListSerializer(JsonElementSerializer_getInstance()).em();
    this.r11_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).pm = function () {
    return this.r11_1;
  };
  protoOf(JsonArrayDescriptor).um = function (index) {
    return this.q11_1.um(index);
  };
  protoOf(JsonArrayDescriptor).vm = function (name) {
    return this.q11_1.vm(name);
  };
  protoOf(JsonArrayDescriptor).wm = function (index) {
    return this.q11_1.wm(index);
  };
  protoOf(JsonArrayDescriptor).xm = function (index) {
    return this.q11_1.xm(index);
  };
  protoOf(JsonArrayDescriptor).ym = function (index) {
    return this.q11_1.ym(index);
  };
  protoOf(JsonArrayDescriptor).qm = function () {
    return this.q11_1.qm();
  };
  protoOf(JsonArrayDescriptor).jm = function () {
    return this.q11_1.jm();
  };
  protoOf(JsonArrayDescriptor).rm = function () {
    return this.q11_1.rm();
  };
  protoOf(JsonArrayDescriptor).sm = function () {
    return this.q11_1.sm();
  };
  protoOf(JsonArrayDescriptor).tm = function () {
    return this.q11_1.tm();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.s11_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).em = function () {
    return this.s11_1;
  };
  protoOf(JsonArraySerializer).fm = function (decoder) {
    verify(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).fm(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.on('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.on('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.on('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.on('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.on('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().t11_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().u11_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().v11_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().w11_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().s11_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.x11_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).em = function () {
    return this.x11_1;
  };
  protoOf(JsonElementSerializer).fm = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.a11();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.y11_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).em();
    this.z11_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).pm = function () {
    return this.z11_1;
  };
  protoOf(JsonObjectDescriptor).um = function (index) {
    return this.y11_1.um(index);
  };
  protoOf(JsonObjectDescriptor).vm = function (name) {
    return this.y11_1.vm(name);
  };
  protoOf(JsonObjectDescriptor).wm = function (index) {
    return this.y11_1.wm(index);
  };
  protoOf(JsonObjectDescriptor).xm = function (index) {
    return this.y11_1.xm(index);
  };
  protoOf(JsonObjectDescriptor).ym = function (index) {
    return this.y11_1.ym(index);
  };
  protoOf(JsonObjectDescriptor).qm = function () {
    return this.y11_1.qm();
  };
  protoOf(JsonObjectDescriptor).jm = function () {
    return this.y11_1.jm();
  };
  protoOf(JsonObjectDescriptor).rm = function () {
    return this.y11_1.rm();
  };
  protoOf(JsonObjectDescriptor).sm = function () {
    return this.y11_1.sm();
  };
  protoOf(JsonObjectDescriptor).tm = function () {
    return this.y11_1.tm();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.w11_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).em = function () {
    return this.w11_1;
  };
  protoOf(JsonObjectSerializer).fm = function (decoder) {
    verify(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).fm(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.t11_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).em = function () {
    return this.t11_1;
  };
  protoOf(JsonPrimitiveSerializer).fm = function (decoder) {
    var result = asJsonDecoder(decoder).a11();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString_0(getKClassFromExpression(result)), toString_0(result));
    return result;
  };
  var JsonPrimitiveSerializer_instance;
  function JsonPrimitiveSerializer_getInstance() {
    if (JsonPrimitiveSerializer_instance == null)
      new JsonPrimitiveSerializer();
    return JsonPrimitiveSerializer_instance;
  }
  function JsonNullSerializer() {
    JsonNullSerializer_instance = this;
    this.u11_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).em = function () {
    return this.u11_1;
  };
  protoOf(JsonNullSerializer).fm = function (decoder) {
    verify(decoder);
    if (decoder.do()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.eo();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function verify(decoder) {
    asJsonDecoder(decoder);
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.v11_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).em = function () {
    return this.v11_1;
  };
  protoOf(JsonLiteralSerializer).fm = function (decoder) {
    var result = asJsonDecoder(decoder).a11();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString_0(getKClassFromExpression(result)), toString_0(result));
    return result;
  };
  var JsonLiteralSerializer_instance;
  function JsonLiteralSerializer_getInstance() {
    if (JsonLiteralSerializer_instance == null)
      new JsonLiteralSerializer();
    return JsonLiteralSerializer_instance;
  }
  function asJsonDecoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonDecoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString_0(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.a12_1;
    // Inline function 'kotlin.getValue' call
    original$factory();
    return tmp0.r1();
  }
  function defer$1($deferred) {
    this.a12_1 = lazy($deferred);
  }
  protoOf(defer$1).pm = function () {
    return _get_original__l7ku1m(this).pm();
  };
  protoOf(defer$1).qm = function () {
    return _get_original__l7ku1m(this).qm();
  };
  protoOf(defer$1).sm = function () {
    return _get_original__l7ku1m(this).sm();
  };
  protoOf(defer$1).um = function (index) {
    return _get_original__l7ku1m(this).um(index);
  };
  protoOf(defer$1).vm = function (name) {
    return _get_original__l7ku1m(this).vm(name);
  };
  protoOf(defer$1).wm = function (index) {
    return _get_original__l7ku1m(this).wm(index);
  };
  protoOf(defer$1).xm = function (index) {
    return _get_original__l7ku1m(this).xm(index);
  };
  protoOf(defer$1).ym = function (index) {
    return _get_original__l7ku1m(this).ym(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function readIfAbsent($this, descriptor, index) {
    $this.c12_1 = (!descriptor.ym(index) && descriptor.xm(index).jm());
    return $this.c12_1;
  }
  function JsonElementMarker$readIfAbsent$ref($boundThis) {
    var l = function (p0, p1) {
      return readIfAbsent($boundThis, p0, p1);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.b12_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.c12_1 = false;
  }
  protoOf(JsonElementMarker).d12 = function (index) {
    this.b12_1.ur(index);
  };
  protoOf(JsonElementMarker).e12 = function () {
    return this.b12_1.vr();
  };
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString_0(minify(input, offset)));
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString_0(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp4 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString_0(charSequenceSubSequence(_this__u8e3s4, tmp4, endIndex_0)) + suffix;
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.f12('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.d10_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.g12('Unexpected special floating-point value ' + toString_0(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.pm() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.qm().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString_0(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString_0(minify(output)));
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.qz_1.j10_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.tm();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.j();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.f();
        while (_iterator__ex2g4s.g()) {
          var element = _iterator__ex2g4s.h();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$1);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.vm(name);
    if (!(index === -3))
      return index;
    if (!json.qz_1.t10_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.pm() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.qm(), CLASS_getInstance()) ? json.qz_1.u10_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.i12(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.qz_1.v10_1 && equals(descriptor.qm(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).u1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.sm();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.wm(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.f();
        while (_iterator__ex2g4s.g()) {
          var element = _iterator__ex2g4s.h();
          if (element instanceof JsonNames) {
            destination.d(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j12_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.um(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.k12(_this__u8e3s4, i, _this__u8e3s4.um(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.j()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.qm(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).s1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.um(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.um(getValue(_this__u8e3s4, name)) + ' in ' + toString_0($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.y1(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.n12_1, 2);
    $this.l12_1 = copyOf($this.l12_1, newSize);
    $this.m12_1 = copyOf_0($this.m12_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.l12_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.m12_1 = tmp_2;
    this.n12_1 = -1;
  }
  protoOf(JsonPath).o12 = function (sd) {
    this.n12_1 = this.n12_1 + 1 | 0;
    var depth = this.n12_1;
    if (depth === this.l12_1.length) {
      resize(this);
    }
    this.l12_1[depth] = sd;
  };
  protoOf(JsonPath).p12 = function (index) {
    this.m12_1[this.n12_1] = index;
  };
  protoOf(JsonPath).q12 = function (key) {
    var tmp;
    if (!(this.m12_1[this.n12_1] === -2)) {
      this.n12_1 = this.n12_1 + 1 | 0;
      tmp = this.n12_1 === this.l12_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.l12_1[this.n12_1] = key;
    this.m12_1[this.n12_1] = -2;
  };
  protoOf(JsonPath).r12 = function () {
    if (this.m12_1[this.n12_1] === -2) {
      this.l12_1[this.n12_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).s12 = function () {
    var depth = this.n12_1;
    if (this.m12_1[depth] === -2) {
      this.m12_1[depth] = -1;
      this.n12_1 = this.n12_1 - 1 | 0;
    }
    if (!(this.n12_1 === -1)) {
      this.n12_1 = this.n12_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).t12 = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.p7('$');
    // Inline function 'kotlin.repeat' call
    var times = this.n12_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.l12_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.qm(), LIST_getInstance())) {
            if (!(this.m12_1[index] === -1)) {
              this_0.p7('[');
              this_0.ob(this.m12_1[index]);
              this_0.p7(']');
            }
          } else {
            var idx = this.m12_1[index];
            if (idx >= 0) {
              this_0.p7('.');
              this_0.p7(element.um(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.p7('[');
            this_0.p7("'");
            this_0.o7(element);
            this_0.p7("'");
            this_0.p7(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.t12();
  };
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.u12_1.y12(6);
    if ($this.u12_1.z12() === 4) {
      $this.u12_1.g12('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.u12_1.a13()) {
      var key = $this.v12_1 ? $this.u12_1.c13() : $this.u12_1.b13();
      $this.u12_1.y12(5);
      var element = $this.d13();
      // Inline function 'kotlin.collections.set' call
      result.y1(key, element);
      lastToken = $this.u12_1.e13();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.u12_1.g12('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.u12_1.y12(7);
    } else if (lastToken === 4) {
      if (!$this.w12_1) {
        invalidTrailingComma($this.u12_1);
      }
      $this.u12_1.y12(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, _this__u8e3s4, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.w8();
  }
  function readArray($this) {
    var lastToken = $this.u12_1.e13();
    if ($this.u12_1.z12() === 4) {
      $this.u12_1.g12('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.u12_1.a13()) {
      var element = $this.d13();
      result.d(element);
      lastToken = $this.u12_1.e13();
      if (!(lastToken === 4)) {
        var tmp0 = $this.u12_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.d10_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.g12(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.u12_1.y12(9);
    } else if (lastToken === 4) {
      if (!$this.w12_1) {
        invalidTrailingComma($this.u12_1, 'array');
      }
      $this.u12_1.y12(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.v12_1 || !isString) {
      tmp = $this.u12_1.c13();
    } else {
      tmp = $this.u12_1.b13();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.c14_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).h14 = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.i14($this$DeepRecursiveFunction, it, $completion);
    tmp.g8_1 = Unit_instance;
    tmp.h8_1 = null;
    return tmp.w8();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).n9 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.h14(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).w8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 3;
            this.f14_1 = this.c14_1.u12_1.z12();
            if (this.f14_1 === 1) {
              this.g14_1 = readValue(this.c14_1, true);
              this.e8_1 = 2;
              continue $sm;
            } else {
              if (this.f14_1 === 0) {
                this.g14_1 = readValue(this.c14_1, false);
                this.e8_1 = 2;
                continue $sm;
              } else {
                if (this.f14_1 === 6) {
                  this.e8_1 = 1;
                  suspendResult = readObject_0(this.c14_1, this.d14_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.f14_1 === 8) {
                    this.g14_1 = readArray(this.c14_1);
                    this.e8_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.c14_1.u12_1.g12("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.g14_1 = suspendResult;
            this.e8_1 = 2;
            continue $sm;
          case 2:
            return this.g14_1;
          case 3:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 3) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).i14 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.c14_1, completion);
    i.d14_1 = $this$DeepRecursiveFunction;
    i.e14_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.h14($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n13_1 = _this__u8e3s4;
    this.o13_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).w8 = function () {
    var suspendResult = this.g8_1;
    $sm: do
      try {
        var tmp = this.e8_1;
        switch (tmp) {
          case 0:
            this.f8_1 = 5;
            var tmp_0 = this;
            tmp_0.p13_1 = this.n13_1;
            this.q13_1 = this.p13_1;
            this.r13_1 = this.q13_1.u12_1.y12(6);
            if (this.q13_1.u12_1.z12() === 4) {
              this.q13_1.u12_1.g12('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.s13_1 = LinkedHashMap_init_$Create$();
            this.e8_1 = 1;
            continue $sm;
          case 1:
            if (!this.q13_1.u12_1.a13()) {
              this.e8_1 = 4;
              continue $sm;
            }

            this.t13_1 = this.q13_1.v12_1 ? this.q13_1.u12_1.c13() : this.q13_1.u12_1.b13();
            this.q13_1.u12_1.y12(5);
            this.e8_1 = 2;
            suspendResult = this.o13_1.vj(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.s13_1;
            var key = this.t13_1;
            tmp0.y1(key, element);
            this.r13_1 = this.q13_1.u12_1.e13();
            var tmp0_subject = this.r13_1;
            if (tmp0_subject === 4) {
              this.e8_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.e8_1 = 4;
                continue $sm;
              } else {
                this.q13_1.u12_1.g12('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.e8_1 = 1;
            continue $sm;
          case 4:
            if (this.r13_1 === 6) {
              this.q13_1.u12_1.y12(7);
            } else if (this.r13_1 === 4) {
              if (!this.q13_1.w12_1) {
                invalidTrailingComma(this.q13_1.u12_1);
              }
              this.q13_1.u12_1.y12(7);
            }

            return new JsonObject(this.s13_1);
          case 5:
            throw this.h8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.f8_1 === 5) {
          throw e;
        } else {
          this.e8_1 = this.f8_1;
          this.h8_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.u12_1 = lexer;
    this.v12_1 = configuration.k10_1;
    this.w12_1 = configuration.w10_1;
    this.x12_1 = 0;
  }
  protoOf(JsonTreeReader).d13 = function () {
    var token = this.u12_1.z12();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.x12_1 = this.x12_1 + 1 | 0;
      if (this.x12_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.x12_1 = this.x12_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.u12_1.g12('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.tm().f();
    while (_iterator__ex2g4s.g()) {
      var annotation = _iterator__ex2g4s.h();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.j14_1;
    }
    return json.qz_1.r10_1;
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.h12_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).k14 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.h12_1;
    var value_0 = this_0.u1(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.y1(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.y1(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).i12 = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.l14(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.k14(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).l14 = function (descriptor, key) {
    var tmp0_safe_receiver = this.h12_1.u1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.u1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.m14_1 = discriminatorToSkip;
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.m14_1 === unknownKey) {
      _this__u8e3s4.m14_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.ip(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.xz_1.z12() === 4) {
      $this.xz_1.g12('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.zz_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.zz_1 === -1)) {
        hasComma = $this.xz_1.o14();
      }
    } else {
      $this.xz_1.n14(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.xz_1.a13()) {
      if (decodingKey) {
        if ($this.zz_1 === -1) {
          var tmp0 = $this.xz_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.d10_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.g12(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.xz_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.d10_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp3.g12(tmp$ret$2, position_0);
          }
        }
      }
      $this.zz_1 = $this.zz_1 + 1 | 0;
      tmp = $this.zz_1;
    } else {
      if (hasComma && !$this.vz_1.qz_1.w10_1) {
        invalidTrailingComma($this.xz_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.vz_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.ym(index);
      var elementDescriptor = descriptor.xm(index);
      var tmp;
      if (isOptional && !elementDescriptor.jm()) {
        tmp = $this.xz_1.p14(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.qm(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.jm()) {
          tmp_0 = $this.xz_1.p14(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.xz_1.q14($this.b10_1.k10_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.qz_1.n10_1 && elementDescriptor.jm();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.xz_1.b13();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.xz_1.o14();
    while ($this.xz_1.a13()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.xz_1.n14(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.vz_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.b10_1.p10_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.xz_1.o14();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.c10_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.d12(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.vz_1.qz_1.w10_1) {
      invalidTrailingComma($this.xz_1);
    }
    var tmp1_safe_receiver = $this.c10_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.e12();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.vz_1) || trySkip($this, $this.a10_1, key)) {
      $this.xz_1.s14($this.b10_1.k10_1);
    } else {
      $this.xz_1.e10_1.s12();
      $this.xz_1.r14(key);
    }
    return $this.xz_1.o14();
  }
  function decodeListIndex($this) {
    var hasComma = $this.xz_1.o14();
    var tmp;
    if ($this.xz_1.a13()) {
      if (!($this.zz_1 === -1) && !hasComma) {
        $this.xz_1.g12('Expected end of the array or comma');
      }
      $this.zz_1 = $this.zz_1 + 1 | 0;
      tmp = $this.zz_1;
    } else {
      if (hasComma && !$this.vz_1.qz_1.w10_1) {
        invalidTrailingComma($this.xz_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.b10_1.k10_1) {
      tmp = $this.xz_1.u14();
    } else {
      tmp = $this.xz_1.t14();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.vz_1 = json;
    this.wz_1 = mode;
    this.xz_1 = lexer;
    this.yz_1 = this.vz_1.gp();
    this.zz_1 = -1;
    this.a10_1 = discriminatorHolder;
    this.b10_1 = this.vz_1.qz_1;
    this.c10_1 = this.b10_1.n10_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).z10 = function () {
    return this.vz_1;
  };
  protoOf(StreamingJsonDecoder).gp = function () {
    return this.yz_1;
  };
  protoOf(StreamingJsonDecoder).a11 = function () {
    return (new JsonTreeReader(this.vz_1.qz_1, this.xz_1)).d13();
  };
  protoOf(StreamingJsonDecoder).ro = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.vz_1.qz_1.q10_1;
      }
      if (tmp) {
        return deserializer.fm(this);
      }
      var discriminator = classDiscriminator(deserializer.em(), this.vz_1);
      var tmp0_elvis_lhs = this.xz_1.v14(discriminator, this.b10_1.k10_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp1 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp1 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.z10().qz_1.q10_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.fm(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.em(), this.z10());
          var tmp0 = this.a11();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.em().pm();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).ha();
            var tmp_3 = getKClassFromExpression(tmp0).ha();
            var tmp$ret$1 = this.xz_1.e10_1.t12();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString_0(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.lc(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp1, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.z10(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.xz_1.g12(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.a10_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.fm(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.im_1, plus(e.message, ' at path: ') + this.xz_1.e10_1.t12(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).so = function (descriptor) {
    var newMode = switchMode(this.vz_1, descriptor);
    this.xz_1.e10_1.o12(descriptor);
    this.xz_1.n14(newMode.y14_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.c2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.vz_1, newMode, this.xz_1, descriptor, this.a10_1);
        break;
      default:
        var tmp_0;
        if (this.wz_1.equals(newMode) && this.vz_1.qz_1.n10_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.vz_1, newMode, this.xz_1, descriptor, this.a10_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).to = function (descriptor) {
    if (descriptor.sm() === 0 && ignoreUnknownKeys(descriptor, this.vz_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.xz_1.o14() && !this.vz_1.qz_1.w10_1) {
      invalidTrailingComma(this.xz_1, '');
    }
    this.xz_1.n14(this.wz_1.z14_1);
    this.xz_1.e10_1.s12();
  };
  protoOf(StreamingJsonDecoder).do = function () {
    var tmp;
    var tmp0_safe_receiver = this.c10_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c12_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.xz_1.a15();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).eo = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).dp = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.wz_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.xz_1.e10_1.r12();
    }
    var value = protoOf(AbstractDecoder).dp.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.xz_1.e10_1.q12(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).ip = function (descriptor) {
    var index;
    switch (this.wz_1.c2_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.wz_1.equals(WriteMode_MAP_getInstance())) {
      this.xz_1.e10_1.p12(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).fo = function () {
    return this.xz_1.b15();
  };
  protoOf(StreamingJsonDecoder).go = function () {
    var value = this.xz_1.c15();
    if (!value.equals(toLong(value.x2()))) {
      this.xz_1.g12("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.x2();
  };
  protoOf(StreamingJsonDecoder).ho = function () {
    var value = this.xz_1.c15();
    if (!value.equals(toLong(value.y2()))) {
      this.xz_1.g12("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.y2();
  };
  protoOf(StreamingJsonDecoder).io = function () {
    var value = this.xz_1.c15();
    if (!value.equals(toLong(value.z()))) {
      this.xz_1.g12("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.z();
  };
  protoOf(StreamingJsonDecoder).jo = function () {
    return this.xz_1.c15();
  };
  protoOf(StreamingJsonDecoder).ko = function () {
    var tmp0 = this.xz_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.c13();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g12("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.vz_1.qz_1.s10_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.xz_1, result);
  };
  protoOf(StreamingJsonDecoder).lo = function () {
    var tmp0 = this.xz_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.c13();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g12("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.vz_1.qz_1.s10_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.xz_1, result);
  };
  protoOf(StreamingJsonDecoder).mo = function () {
    var string = this.xz_1.c13();
    if (!(string.length === 1)) {
      this.xz_1.g12("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).no = function () {
    var tmp;
    if (this.b10_1.k10_1) {
      tmp = this.xz_1.u14();
    } else {
      tmp = this.xz_1.b13();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).po = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.xz_1, this.vz_1) : protoOf(AbstractDecoder).po.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).oo = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.vz_1, this.no(), ' at path ' + this.xz_1.e10_1.t12());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.d15_1 = lexer;
    this.e15_1 = json.gp();
  }
  protoOf(JsonDecoderForUnsignedTypes).gp = function () {
    return this.e15_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).ip = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString_0(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).io = function () {
    var tmp0 = this.d15_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.c13();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g12("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).jo = function () {
    var tmp0 = this.d15_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.c13();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g12("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).go = function () {
    var tmp0 = this.d15_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.c13();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g12("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).ho = function () {
    var tmp0 = this.d15_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.c13();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g12("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  function get_unsignedNumberDescriptors() {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return unsignedNumberDescriptors;
  }
  var unsignedNumberDescriptors;
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.rm() && get_unsignedNumberDescriptors().o1(_this__u8e3s4);
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_0(Companion_getInstance()).em(), serializer_1(Companion_getInstance_0()).em(), serializer_2(Companion_getInstance_1()).em(), serializer_3(Companion_getInstance_2()).em()]);
    }
  }
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
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
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.q7(_Char___init__impl__6a9atx(34));
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
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.lb(value, lastPos, i);
          _this__u8e3s4.p7(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.lb(value, lastPos, value.length);
    else
      _this__u8e3s4.p7(value);
    _this__u8e3s4.q7(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
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
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$1);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$12 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$12);
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.l15(tag), toString_0($this.m15()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.h15_1 = json;
    this.i15_1 = value;
    this.j15_1 = polymorphicDiscriminator;
    this.k15_1 = this.z10().qz_1;
  }
  protoOf(AbstractJsonTreeDecoder).z10 = function () {
    return this.h15_1;
  };
  protoOf(AbstractJsonTreeDecoder).r1 = function () {
    return this.i15_1;
  };
  protoOf(AbstractJsonTreeDecoder).gp = function () {
    return this.z10().gp();
  };
  protoOf(AbstractJsonTreeDecoder).m15 = function () {
    var tmp0_safe_receiver = this.iy();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.n15(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.r1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).l15 = function (currentTag) {
    return this.ky() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).a11 = function () {
    return this.m15();
  };
  protoOf(AbstractJsonTreeDecoder).ro = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.z10().qz_1.q10_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.fm(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.em(), this.z10());
      var tmp0 = this.a11();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.em().pm();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).ha();
        var tmp_1 = getKClassFromExpression(tmp0).ha();
        var tmp$ret$1 = this.ky();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString_0(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.lc(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.z10(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).jy = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).so = function (descriptor) {
    var currentObject = this.m15();
    var tmp0_subject = descriptor.qm();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.z10();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.pm();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).ha();
        var tmp_3 = getKClassFromExpression(currentObject).ha();
        var tmp$ret$0 = this.ky();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString_0(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.z10();
        var keyDescriptor = carrierDescriptor(descriptor.xm(0), this_0.gp());
        var keyKind = keyDescriptor.qm();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.z10();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.pm();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).ha();
            var tmp_8 = getKClassFromExpression(currentObject).ha();
            var tmp$ret$3 = this.ky();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString_0(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.qz_1.l10_1) {
            var tmp_9 = this.z10();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.pm();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).ha();
              var tmp_11 = getKClassFromExpression(currentObject).ha();
              var tmp$ret$7 = this.ky();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString_0(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.z10();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.pm();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).ha();
          var tmp_14 = getKClassFromExpression(currentObject).ha();
          var tmp$ret$12 = this.ky();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString_0(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.j15_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).to = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).do = function () {
    var tmp = this.m15();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).o15 = function (tag, enumDescriptor) {
    var tmp = this.z10();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp1 = this.n15(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.pm();
    if (!(tmp1 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).ha();
      var tmp_1 = getKClassFromExpression(tmp1).ha();
      var tmp$ret$0 = this.l15(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString_0(tmp1));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp1.e11());
  };
  protoOf(AbstractJsonTreeDecoder).wy = function (tag, enumDescriptor) {
    return this.o15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).p15 = function (tag) {
    return !(this.n15(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).my = function (tag) {
    return this.p15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q15 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n15(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.l15(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).ny = function (tag) {
    return this.q15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r15 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n15(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.l15(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.x2();
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'byte', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).oy = function (tag) {
    return this.r15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s15 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n15(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.l15(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.y2();
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'short', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).py = function (tag) {
    return this.s15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).t15 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n15(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.l15(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.z();
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$5 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$5;
  };
  protoOf(AbstractJsonTreeDecoder).qy = function (tag) {
    return this.t15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u15 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n15(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.l15(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).ry = function (tag) {
    return this.u15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).v15 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n15(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.l15(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_float(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'float', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.z10().qz_1.s10_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString_0(this.m15()));
  };
  protoOf(AbstractJsonTreeDecoder).sy = function (tag) {
    return this.v15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).w15 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n15(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.l15(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_double(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'double', tag);
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.z10().qz_1.s10_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString_0(this.m15()));
  };
  protoOf(AbstractJsonTreeDecoder).ty = function (tag) {
    return this.w15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).x15 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.n15(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).ha();
        var tmp_0 = getKClassFromExpression(value).ha();
        var tmp$ret$0 = this.l15(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString_0(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.e11()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.b1_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$4;
  };
  protoOf(AbstractJsonTreeDecoder).uy = function (tag) {
    return this.x15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).y15 = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.n15(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).ha();
      var tmp_0 = getKClassFromExpression(value).ha();
      var tmp$ret$0 = this.l15(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString_0(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.l15(tag), toString_0(this.m15()));
    if (!value_0.i11_1 && !this.z10().qz_1.k10_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.l15(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString_0(this.m15()));
    }
    return value_0.k11_1;
  };
  protoOf(AbstractJsonTreeDecoder).vy = function (tag) {
    return this.y15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).z15 = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.z10();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp1 = this.n15(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.pm();
      if (!(tmp1 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).ha();
        var tmp_2 = getKClassFromExpression(tmp1).ha();
        var tmp$ret$0 = this.l15(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString_0(tmp1));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp1.e11());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.z10());
    } else {
      tmp = protoOf(NamedValueDecoder).xy.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).xy = function (tag, inlineDescriptor) {
    return this.z15((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).po = function (descriptor) {
    return !(this.iy() == null) ? protoOf(NamedValueDecoder).po.call(this, descriptor) : (new JsonPrimitiveDecoder(this.z10(), this.r1(), this.j15_1)).po(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.z10();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.ym(index);
      var elementDescriptor = descriptor.xm(index);
      var tmp;
      if (isOptional && !elementDescriptor.jm()) {
        var tmp_0 = $this.n15(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.qm(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.jm()) {
          var tmp_2 = $this.n15(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp_3 = $this.n15(tag);
        var tmp0_safe_receiver = tmp_3 instanceof JsonPrimitive ? tmp_3 : null;
        var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
        var tmp_4;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_4 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_4;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.qz_1.n10_1 && elementDescriptor.jm();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function absenceIsNull($this, descriptor, index) {
    $this.j16_1 = (!$this.z10().qz_1.n10_1 && !descriptor.ym(index) && descriptor.xm(index).jm());
    return $this.j16_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.g16_1 = value;
    this.h16_1 = polyDescriptor;
    this.i16_1 = 0;
    this.j16_1 = false;
  }
  protoOf(JsonTreeDecoder).r1 = function () {
    return this.g16_1;
  };
  protoOf(JsonTreeDecoder).ip = function (descriptor) {
    while (this.i16_1 < descriptor.sm()) {
      var _unary__edvuaz = this.i16_1;
      this.i16_1 = _unary__edvuaz + 1 | 0;
      var name = this.dy(descriptor, _unary__edvuaz);
      var index = this.i16_1 - 1 | 0;
      this.j16_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.r1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).s1(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.k15_1.p10_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).do = function () {
    return !this.j16_1 && protoOf(AbstractJsonTreeDecoder).do.call(this);
  };
  protoOf(JsonTreeDecoder).ey = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.z10());
    var baseName = descriptor.um(index);
    if (strategy == null) {
      if (!this.k15_1.t10_1)
        return baseName;
      if (this.r1().v1().o1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.z10(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.r1().v1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.f();
      while (_iterator__ex2g4s.g()) {
        var element = _iterator__ex2g4s.h();
        if (deserializationNamesMap_0.u1(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.k12(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).n15 = function (tag) {
    return getValue(this.r1(), tag);
  };
  protoOf(JsonTreeDecoder).so = function (descriptor) {
    if (descriptor === this.h16_1) {
      var tmp = this.z10();
      var tmp1 = this.m15();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.h16_1.pm();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).ha();
        var tmp_1 = getKClassFromExpression(tmp1).ha();
        var tmp$ret$0 = this.ky();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString_0(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.j15_1, this.h16_1);
    }
    return protoOf(AbstractJsonTreeDecoder).so.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).to = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.z10())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.qm();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.z10());
    var tmp_1;
    if (strategy == null && !this.k15_1.t10_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.z10(), descriptor).v1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.z10()).l14(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.v1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.r1().v1().f();
    while (_iterator__ex2g4s.g()) {
      var key = _iterator__ex2g4s.h();
      if (!names.o1(key) && !(key === this.j15_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.ky() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString_0(minify(this.r1().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.q16_1 = value;
    this.r16_1 = this.q16_1.i();
    this.s16_1 = -1;
  }
  protoOf(JsonTreeListDecoder).r1 = function () {
    return this.q16_1;
  };
  protoOf(JsonTreeListDecoder).ey = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).n15 = function (tag) {
    return this.q16_1.k(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).ip = function (descriptor) {
    while (this.s16_1 < (this.r16_1 - 1 | 0)) {
      this.s16_1 = this.s16_1 + 1 | 0;
      return this.s16_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.z16_1 = value;
    this.yy('primitive');
  }
  protoOf(JsonPrimitiveDecoder).r1 = function () {
    return this.z16_1;
  };
  protoOf(JsonPrimitiveDecoder).ip = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).n15 = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    return this.z16_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.k17_1 = value;
    this.l17_1 = toList(this.k17_1.v1());
    this.m17_1 = imul(this.l17_1.i(), 2);
    this.n17_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).r1 = function () {
    return this.k17_1;
  };
  protoOf(JsonTreeMapDecoder).ey = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.l17_1.k(i);
  };
  protoOf(JsonTreeMapDecoder).ip = function (descriptor) {
    while (this.n17_1 < (this.m17_1 - 1 | 0)) {
      this.n17_1 = this.n17_1 + 1 | 0;
      return this.n17_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).n15 = function (tag) {
    return (this.n17_1 % 2 | 0) === 0 ? JsonPrimitive_1(tag) : getValue(this.k17_1, tag);
  };
  protoOf(JsonTreeMapDecoder).to = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.em())).ro(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.y14_1 = begin;
    this.z14_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.qm();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.xm(0), _this__u8e3s4.gp());
          var keyKind = keyDescriptor.qm();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.qz_1.l10_1) {
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.qm(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.rm()) {
      tmp = carrierDescriptor(_this__u8e3s4.xm(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.o17(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.o17(lastPosition, currentPosition);
    var result = $this.g10_1.toString();
    $this.g10_1.rb(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.f10_1);
    $this.f10_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.p17(), $this.d10_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.q17(currentPosition);
    if (currentPosition === -1) {
      $this.g12('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.p17();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.p17(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.g12("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.g10_1.q7(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.d10_1 = startPos;
      $this.r17();
      if (($this.d10_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.g12('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.d10_1);
    }
    $this.g10_1.q7(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.g12("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.q17(start);
    if (current >= charSequenceLength($this.p17()) || current === -1) {
      $this.g12('EOF');
    }
    var tmp = $this.p17();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.g12("Expected valid boolean literal prefix, but had '" + $this.c13() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.p17()) - current | 0) < literalSuffix.length) {
      $this.g12('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.p17(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.g12("Expected valid boolean literal prefix, but had '" + $this.c13() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.d10_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.z2();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.z2();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.d10_1 = 0;
    this.e10_1 = new JsonPath();
    this.f10_1 = null;
    this.g10_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).r17 = function () {
  };
  protoOf(AbstractJsonLexer).o14 = function () {
    var current = this.s17();
    var source = this.p17();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.d10_1 = this.d10_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).t17 = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).h10 = function () {
    var nextToken = this.e13();
    if (!(nextToken === 10)) {
      this.g12('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.p17(), this.d10_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).y12 = function (expected) {
    var token = this.e13();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.d10_1 - 1 | 0 : this.d10_1;
      var s = this.d10_1 === charSequenceLength(this.p17()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.p17(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.g12(tmp$ret$0, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).u17 = function (expected) {
    if (this.d10_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.d10_1;
        try {
          this.d10_1 = this.d10_1 - 1 | 0;
          tmp$ret$1 = this.c13();
          break $l$block;
        }finally {
          this.d10_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.f12("Expected string literal but 'null' literal was found", this.d10_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.d10_1 - 1 | 0 : this.d10_1;
    var s = this.d10_1 === charSequenceLength(this.p17()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.p17(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.g12(tmp$ret$2, position);
  };
  protoOf(AbstractJsonLexer).z12 = function () {
    var source = this.p17();
    var cpos = this.d10_1;
    $l$loop_0: while (true) {
      cpos = this.q17(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.d10_1 = cpos;
      return charToTokenClass(ch);
    }
    this.d10_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).p14 = function (doConsume) {
    var current = this.s17();
    current = this.q17(current);
    var len = charSequenceLength(this.p17()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.p17(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.p17(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.d10_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).a15 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.p14(doConsume) : $super.p14.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).q14 = function (isLenient) {
    var token = this.z12();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.c13();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.b13();
    }
    var string = tmp;
    this.f10_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).v17 = function () {
    this.f10_1 = null;
  };
  protoOf(AbstractJsonLexer).w17 = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.p17();
    return toString_0(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).b13 = function () {
    if (!(this.f10_1 == null)) {
      return takePeeked(this);
    }
    return this.t14();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.q17(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.g12('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.o17(lastPosition, currentPosition);
          currentPosition = this.q17(currentPosition);
          if (currentPosition === -1) {
            this.g12('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.w17(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.d10_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).u14 = function () {
    var result = this.c13();
    if (result === 'null' && wasUnquotedString(this)) {
      this.g12("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).c13 = function () {
    if (!(this.f10_1 == null)) {
      return takePeeked(this);
    }
    var current = this.s17();
    if (current >= charSequenceLength(this.p17()) || current === -1) {
      this.g12('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.p17(), current));
    if (token === 1) {
      return this.b13();
    }
    if (!(token === 0)) {
      this.g12('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.p17(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.p17(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.p17())) {
        usedAppend = true;
        this.o17(this.d10_1, current);
        var eof = this.q17(current);
        if (eof === -1) {
          this.d10_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.w17(this.d10_1, current);
    } else {
      tmp = decodedString(this, this.d10_1, current);
    }
    var result = tmp;
    this.d10_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).o17 = function (fromIndex, toIndex) {
    this.g10_1.lb(this.p17(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).s14 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.z12();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.c13();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.z12();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.c13();
        else
          this.t14();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.d(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.d10_1, 'found ] instead of } at path: ' + this.e10_1.toString(), this.p17());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.d10_1, 'found } instead of ] at path: ' + this.e10_1.toString(), this.p17());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.g12('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.e13();
      if (tokenStack.i() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString_0(this.p17()) + "', currentPosition=" + this.d10_1 + ')';
  };
  protoOf(AbstractJsonLexer).r14 = function (key) {
    var processed = this.w17(0, this.d10_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.e10_1.t12() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString_0(minify(this.p17(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).f12 = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.e10_1.t12() + hintMessage, this.p17());
  };
  protoOf(AbstractJsonLexer).g12 = function (message, position, hint, $super) {
    position = position === VOID ? this.d10_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.f12(message, position, hint) : $super.f12.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).c15 = function () {
    var current = this.s17();
    current = this.q17(current);
    if (current >= charSequenceLength(this.p17()) || current === -1) {
      this.g12('EOF');
    }
    var tmp;
    if (charSequenceGet(this.p17(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.p17())) {
        this.g12('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.p17()))) {
      var ch = charSequenceGet(this.p17(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.g12('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.g12("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.g12("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.g12("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.g12("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.m2(toLong(10)).k2(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.m2(toLong(10)).l2(toLong(digit));
      if (accumulator.x(new Long(0, 0)) > 0) {
        this.g12('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.g12('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.g12('EOF');
      }
      if (!(charSequenceGet(this.p17(), current) === _Char___init__impl__6a9atx(34))) {
        this.g12('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.d10_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.z2() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).z2() || doubleAccumulator < (new Long(0, -2147483648)).z2()) {
        this.g12('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.g12("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.p2();
    } else {
      this.g12('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).h11 = function () {
    var result = this.c15();
    var next = this.e13();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.d10_1 - 1 | 0 : this.d10_1;
      var s = this.d10_1 === charSequenceLength(this.p17()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.p17(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.g12(tmp$ret$0, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).b15 = function () {
    var current = this.s17();
    if (current === charSequenceLength(this.p17())) {
      this.g12('EOF');
    }
    var tmp;
    if (charSequenceGet(this.p17(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.d10_1 === charSequenceLength(this.p17())) {
        this.g12('EOF');
      }
      if (!(charSequenceGet(this.p17(), this.d10_1) === _Char___init__impl__6a9atx(34))) {
        this.g12('Expected closing quotation mark');
      }
      this.d10_1 = this.d10_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().y17_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().x17_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.x17_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.y17_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.x17_1 = charArray(117);
    this.y17_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source) {
    StringJsonLexer.call(this, source);
  }
  protoOf(StringJsonLexerWithComments).e13 = function () {
    var source = this.p17();
    var cpos = this.s17();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.d10_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).a13 = function () {
    var current = this.s17();
    if (current >= this.p17().length || current === -1)
      return false;
    return this.t17(charSequenceGet(this.p17(), current));
  };
  protoOf(StringJsonLexerWithComments).n14 = function (expected) {
    var source = this.p17();
    var current = this.s17();
    if (current >= source.length || current === -1) {
      this.d10_1 = -1;
      this.u17(expected);
    }
    var c = charSequenceGet(source, current);
    this.d10_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.u17(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).z12 = function () {
    var source = this.p17();
    var cpos = this.s17();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.d10_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).s17 = function () {
    var current = this.d10_1;
    if (current === -1)
      return current;
    var source = this.p17();
    $l$loop_1: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charSequenceGet(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.d10_1 = source.length;
            this.g12('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.d10_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.i18_1 = source;
  }
  protoOf(StringJsonLexer).p17 = function () {
    return this.i18_1;
  };
  protoOf(StringJsonLexer).q17 = function (position) {
    return position < this.p17().length ? position : -1;
  };
  protoOf(StringJsonLexer).e13 = function () {
    var source = this.p17();
    var cpos = this.d10_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.d10_1 = cpos;
      return charToTokenClass(c);
    }
    this.d10_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).a13 = function () {
    var current = this.d10_1;
    if (current === -1)
      return false;
    var source = this.p17();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.d10_1 = current;
      return this.t17(c);
    }
    this.d10_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).s17 = function () {
    var current = this.d10_1;
    if (current === -1)
      return current;
    var source = this.p17();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.d10_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).n14 = function (expected) {
    if (this.d10_1 === -1) {
      this.u17(expected);
    }
    var source = this.p17();
    var cpos = this.d10_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.d10_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.u17(expected);
    }
    this.d10_1 = -1;
    this.u17(expected);
  };
  protoOf(StringJsonLexer).t14 = function () {
    this.n14(_Char___init__impl__6a9atx(34));
    var current = this.d10_1;
    var closingQuote = indexOf_0(this.p17(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.c13();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.d10_1 - 1 | 0 : this.d10_1;
      var s = this.d10_1 === charSequenceLength(this.p17()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.p17(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.g12(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.p17(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.p17(), this.d10_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.d10_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.p17().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).v14 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.d10_1;
    try {
      if (!(this.e13() === 6))
        return null;
      var firstKey = this.q14(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.v17();
      if (!(this.e13() === 5))
        return null;
      return this.q14(isLenient);
    }finally {
      this.d10_1 = positionSnapshot;
      this.v17();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.qz_1.x10_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.sz_1;
  }
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).jm = get_isNullable;
  protoOf(defer$1).rm = get_isInline;
  protoOf(defer$1).tm = get_annotations;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Default_getInstance;
  _.$_$.b = JsonArrayBuilder;
  _.$_$.c = JsonArray;
  _.$_$.d = JsonNull;
  _.$_$.e = JsonObjectBuilder;
  _.$_$.f = JsonObject;
  _.$_$.g = JsonPrimitive_0;
  _.$_$.h = add;
  _.$_$.i = get_boolean;
  _.$_$.j = get_contentOrNull;
  _.$_$.k = get_int;
  _.$_$.l = get_jsonArray;
  _.$_$.m = get_jsonObject;
  _.$_$.n = get_jsonPrimitive;
  _.$_$.o = get_long;
  _.$_$.p = put_1;
  _.$_$.q = put;
  _.$_$.r = put_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
