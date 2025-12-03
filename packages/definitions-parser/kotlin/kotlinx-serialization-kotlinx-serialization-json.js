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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var protoOf = kotlin_kotlin.$_$.gd;
  var initMetadataForObject = kotlin_kotlin.$_$.ic;
  var VOID = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.a6;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var initMetadataForClass = kotlin_kotlin.$_$.cc;
  var toString = kotlin_kotlin.$_$.kd;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b2;
  var charSequenceLength = kotlin_kotlin.$_$.sb;
  var charSequenceGet = kotlin_kotlin.$_$.rb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.c3;
  var equals = kotlin_kotlin.$_$.wb;
  var THROW_CCE = kotlin_kotlin.$_$.ai;
  var getStringHashCode = kotlin_kotlin.$_$.ac;
  var toString_0 = kotlin_kotlin.$_$.fj;
  var Enum = kotlin_kotlin.$_$.oh;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var isInterface = kotlin_kotlin.$_$.rc;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var initMetadataForInterface = kotlin_kotlin.$_$.gc;
  var initMetadataForCompanion = kotlin_kotlin.$_$.dc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.n1;
  var hashCode = kotlin_kotlin.$_$.bc;
  var joinToString = kotlin_kotlin.$_$.o8;
  var KtMap = kotlin_kotlin.$_$.k6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var KtList = kotlin_kotlin.$_$.h6;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.n2;
  var numberRangeToNumber = kotlin_kotlin.$_$.ad;
  var ClosedRange = kotlin_kotlin.$_$.od;
  var contains = kotlin_kotlin.$_$.sd;
  var getBooleanHashCode = kotlin_kotlin.$_$.yb;
  var toDouble = kotlin_kotlin.$_$.kg;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.n5;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.t;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.aj;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var toLongOrNull = kotlin_kotlin.$_$.pg;
  var toULongOrNull = kotlin_kotlin.$_$.vg;
  var ULong = kotlin_kotlin.$_$.ii;
  var Companion_getInstance = kotlin_kotlin.$_$.y5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.n4;
  var toDoubleOrNull = kotlin_kotlin.$_$.jg;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.gg;
  var lazy = kotlin_kotlin.$_$.zi;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var KProperty1 = kotlin_kotlin.$_$.zd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.zb;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var toLong = kotlin_kotlin.$_$.id;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.a4;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.f4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.m4;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.o4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.r3;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.t3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.v4;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.x4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var captureStack = kotlin_kotlin.$_$.ob;
  var charSequenceSubSequence = kotlin_kotlin.$_$.tb;
  var coerceAtLeast = kotlin_kotlin.$_$.pd;
  var coerceAtMost = kotlin_kotlin.$_$.qd;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var Collection = kotlin_kotlin.$_$.c6;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var singleOrNull = kotlin_kotlin.$_$.p9;
  var emptyMap = kotlin_kotlin.$_$.w7;
  var getValue = kotlin_kotlin.$_$.j8;
  var copyOf = kotlin_kotlin.$_$.o7;
  var copyOf_0 = kotlin_kotlin.$_$.p7;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.mh;
  var invoke = kotlin_kotlin.$_$.ti;
  var CoroutineImpl = kotlin_kotlin.$_$.gb;
  var DeepRecursiveScope = kotlin_kotlin.$_$.nh;
  var Unit = kotlin_kotlin.$_$.li;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.qa;
  var initMetadataForLambda = kotlin_kotlin.$_$.hc;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ec;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var getKClass = kotlin_kotlin.$_$.g;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var ensureNotNull = kotlin_kotlin.$_$.si;
  var substringBefore = kotlin_kotlin.$_$.eg;
  var removeSuffix = kotlin_kotlin.$_$.pf;
  var substringAfter = kotlin_kotlin.$_$.bg;
  var contains_0 = kotlin_kotlin.$_$.ne;
  var plus = kotlin_kotlin.$_$.bj;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var IllegalArgumentException = kotlin_kotlin.$_$.rh;
  var isFinite = kotlin_kotlin.$_$.vi;
  var isFinite_0 = kotlin_kotlin.$_$.ui;
  var toUInt = kotlin_kotlin.$_$.ug;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.c4;
  var toULong = kotlin_kotlin.$_$.wg;
  var toUByte = kotlin_kotlin.$_$.tg;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.s3;
  var toUShort = kotlin_kotlin.$_$.xg;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.w4;
  var objectCreate = kotlin_kotlin.$_$.fd;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var toString_1 = kotlin_kotlin.$_$.k3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.x5;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.w5;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.z5;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var setOf = kotlin_kotlin.$_$.o9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j3;
  var numberToChar = kotlin_kotlin.$_$.bd;
  var equals_0 = kotlin_kotlin.$_$.ve;
  var toByte = kotlin_kotlin.$_$.hd;
  var startsWith = kotlin_kotlin.$_$.wf;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var single = kotlin_kotlin.$_$.tf;
  var Char = kotlin_kotlin.$_$.jh;
  var emptySet = kotlin_kotlin.$_$.x7;
  var plus_0 = kotlin_kotlin.$_$.f9;
  var toInt = kotlin_kotlin.$_$.ng;
  var toList = kotlin_kotlin.$_$.aa;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ej;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var enumEntries = kotlin_kotlin.$_$.ib;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var last = kotlin_kotlin.$_$.u8;
  var removeLast = kotlin_kotlin.$_$.l9;
  var lastIndexOf = kotlin_kotlin.$_$.if;
  var Long = kotlin_kotlin.$_$.th;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.e3;
  var numberToLong = kotlin_kotlin.$_$.ed;
  var charArray = kotlin_kotlin.$_$.qb;
  var indexOf = kotlin_kotlin.$_$.ze;
  var indexOf_0 = kotlin_kotlin.$_$.af;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.v;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json', VOID, VOID, [StringFormat]);
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForClass(JsonContentPolymorphicSerializer, 'JsonContentPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForInterface(JsonDecoder, 'JsonDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement', VOID, VOID, VOID, VOID, VOID, {0: JsonElementSerializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [JsonElement, KtMap], VOID, VOID, {0: JsonObjectSerializer_getInstance});
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement, VOID, VOID, VOID, {0: JsonPrimitiveSerializer_getInstance});
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive, [JsonPrimitive, SerializerFactory], VOID, VOID, {0: JsonNullSerializer_getInstance});
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [JsonElement, KtList], VOID, VOID, {0: JsonArraySerializer_getInstance});
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForClass(JsonObjectBuilder, 'JsonObjectBuilder');
  initMetadataForClass(JsonArrayBuilder, 'JsonArrayBuilder');
  initMetadataForObject(JsonObjectDescriptor, 'JsonObjectDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonObjectSerializer, 'JsonObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonElementSerializer, 'JsonElementSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
  initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$0, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [0]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [JsonDecoder, AbstractDecoder]);
  initMetadataForClass(JsonDecoderForUnsignedTypes, 'JsonDecoderForUnsignedTypes', VOID, AbstractDecoder);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [JsonEncoder, AbstractEncoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [NamedValueDecoder, JsonDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonPrimitiveDecoder, 'JsonPrimitiveDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(AbstractJsonTreeEncoder, 'AbstractJsonTreeEncoder', VOID, NamedValueEncoder, [NamedValueEncoder, JsonEncoder]);
  initMetadataForClass(JsonTreeEncoder, 'JsonTreeEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1, VOID, VOID, AbstractEncoder);
  initMetadataForClass(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1, VOID, VOID, AbstractEncoder);
  initMetadataForClass(JsonPrimitiveEncoder, 'JsonPrimitiveEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(JsonTreeListEncoder, 'JsonTreeListEncoder', VOID, AbstractJsonTreeEncoder);
  initMetadataForClass(JsonTreeMapEncoder, 'JsonTreeMapEncoder', VOID, JsonTreeEncoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
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
    this.b4q_1 = configuration;
    this.c4q_1 = serializersModule;
    this.d4q_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).v22 = function () {
    return this.c4q_1;
  };
  protoOf(Json).w1z = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.h1e();
    }
  };
  protoOf(Json).x1z = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.t1y(), null);
    var result = input.f22(deserializer);
    lexer.u4q();
    return result;
  };
  protoOf(Json).e4q = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).f4q = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).g4q = function (string) {
    return this.x1z(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.n4r();
    return new JsonImpl(conf, builder.m4r_1);
  }
  function JsonBuilder(json) {
    this.v4q_1 = json.b4q_1.o4r_1;
    this.w4q_1 = json.b4q_1.t4r_1;
    this.x4q_1 = json.b4q_1.p4r_1;
    this.y4q_1 = json.b4q_1.q4r_1;
    this.z4q_1 = json.b4q_1.s4r_1;
    this.a4r_1 = json.b4q_1.u4r_1;
    this.b4r_1 = json.b4q_1.v4r_1;
    this.c4r_1 = json.b4q_1.x4r_1;
    this.d4r_1 = json.b4q_1.e4s_1;
    this.e4r_1 = json.b4q_1.z4r_1;
    this.f4r_1 = json.b4q_1.a4s_1;
    this.g4r_1 = json.b4q_1.b4s_1;
    this.h4r_1 = json.b4q_1.c4s_1;
    this.i4r_1 = json.b4q_1.d4s_1;
    this.j4r_1 = json.b4q_1.y4r_1;
    this.k4r_1 = json.b4q_1.r4r_1;
    this.l4r_1 = json.b4q_1.w4r_1;
    this.m4r_1 = json.v22();
  }
  protoOf(JsonBuilder).n4r = function () {
    if (this.l4r_1) {
      // Inline function 'kotlin.require' call
      if (!(this.c4r_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.d4r_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.z4q_1) {
      // Inline function 'kotlin.require' call
      if (!(this.a4r_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.a4r_1 === '    ')) {
      var tmp3 = this.a4r_1;
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp3)) {
          var element = charSequenceGet(tmp3, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$7 = false;
            break $l$block;
          }
        }
        tmp$ret$7 = true;
      }
      var allWhitespaces = tmp$ret$7;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.a4r_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.v4q_1, this.x4q_1, this.y4q_1, this.k4r_1, this.z4q_1, this.w4q_1, this.a4r_1, this.b4r_1, this.l4r_1, this.c4r_1, this.j4r_1, this.e4r_1, this.f4r_1, this.g4r_1, this.h4r_1, this.i4r_1, this.d4r_1);
  };
  function validateConfiguration($this) {
    if (equals($this.v22(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.b4q_1);
    $this.v22().x2j(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator(discriminator) {
    this.f4s_1 = discriminator;
  }
  protoOf(JsonClassDiscriminator).equals = function (other) {
    if (!(other instanceof JsonClassDiscriminator))
      return false;
    var tmp0_other_with_cast = other instanceof JsonClassDiscriminator ? other : THROW_CCE();
    if (!(this.f4s_1 === tmp0_other_with_cast.f4s_1))
      return false;
    return true;
  };
  protoOf(JsonClassDiscriminator).hashCode = function () {
    return imul(getStringHashCode('discriminator'), 127) ^ getStringHashCode(this.f4s_1);
  };
  protoOf(JsonClassDiscriminator).toString = function () {
    return '@kotlinx.serialization.json.JsonClassDiscriminator(' + 'discriminator=' + this.f4s_1 + ')';
  };
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
    this.o4r_1 = encodeDefaults;
    this.p4r_1 = ignoreUnknownKeys;
    this.q4r_1 = isLenient;
    this.r4r_1 = allowStructuredMapKeys;
    this.s4r_1 = prettyPrint;
    this.t4r_1 = explicitNulls;
    this.u4r_1 = prettyPrintIndent;
    this.v4r_1 = coerceInputValues;
    this.w4r_1 = useArrayPolymorphism;
    this.x4r_1 = classDiscriminator;
    this.y4r_1 = allowSpecialFloatingPointValues;
    this.z4r_1 = useAlternativeNames;
    this.a4s_1 = namingStrategy;
    this.b4s_1 = decodeEnumsCaseInsensitive;
    this.c4s_1 = allowTrailingComma;
    this.d4s_1 = allowComments;
    this.e4s_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.o4r_1 + ', ignoreUnknownKeys=' + this.p4r_1 + ', isLenient=' + this.q4r_1 + ', ' + ('allowStructuredMapKeys=' + this.r4r_1 + ', prettyPrint=' + this.s4r_1 + ', explicitNulls=' + this.t4r_1 + ', ') + ("prettyPrintIndent='" + this.u4r_1 + "', coerceInputValues=" + this.v4r_1 + ', useArrayPolymorphism=' + this.w4r_1 + ', ') + ("classDiscriminator='" + this.x4r_1 + "', allowSpecialFloatingPointValues=" + this.y4r_1 + ', ') + ('useAlternativeNames=' + this.z4r_1 + ', namingStrategy=' + toString_0(this.a4s_1) + ', decodeEnumsCaseInsensitive=' + this.b4s_1 + ', ') + ('allowTrailingComma=' + this.c4s_1 + ', allowComments=' + this.d4s_1 + ', classDiscriminatorMode=' + this.e4s_1.toString() + ')');
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
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  function throwSubtypeNotRegistered($this, subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.gc();
    var subClassName = tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs;
    var scope = "in the scope of '" + baseClass.gc() + "'";
    throw SerializationException_init_$Create$("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function JsonContentPolymorphicSerializer(baseClass) {
    this.g4s_1 = baseClass;
    this.h4s_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.g4s_1.gc() + '>', SEALED_getInstance(), []);
  }
  protoOf(JsonContentPolymorphicSerializer).t1y = function () {
    return this.h4s_1;
  };
  protoOf(JsonContentPolymorphicSerializer).j1z = function (encoder, value) {
    var tmp0_elvis_lhs = encoder.v22().f24(this.g4s_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.g4s_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).u1y(encoder, value);
  };
  protoOf(JsonContentPolymorphicSerializer).u1y = function (encoder, value) {
    return this.j1z(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(JsonContentPolymorphicSerializer).v1y = function (decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.i4s();
    var tmp = this.j4s(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.k4s().f4q(actualSerializer, tree);
  };
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  protoOf(Companion).l4s = function () {
    return JsonElementSerializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_3() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  protoOf(Companion_0).l4s = function () {
    return JsonObjectSerializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.y();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.z();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.y8(_Char___init__impl__6a9atx(58));
    this_0.w8(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.m4s_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.m4s_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.m4s_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.m4s_1.x();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).h = function () {
    return this.m4s_1.h();
  };
  protoOf(JsonObject).r2n = function (key) {
    return this.m4s_1.i2(key);
  };
  protoOf(JsonObject).i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.r2n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).n4s = function (value) {
    return this.m4s_1.j2(value);
  };
  protoOf(JsonObject).j2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.n4s(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).ze = function (key) {
    return this.m4s_1.k2(key);
  };
  protoOf(JsonObject).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.ze((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.m4s_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).s = function () {
    return this.m4s_1.s();
  };
  protoOf(JsonObject).l2 = function () {
    return this.m4s_1.l2();
  };
  protoOf(JsonObject).m2 = function () {
    return this.m4s_1.m2();
  };
  protoOf(JsonObject).x = function () {
    return this.m4s_1.x();
  };
  function Companion_1() {
  }
  protoOf(Companion_1).l4s = function () {
    return JsonPrimitiveSerializer_getInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.p4s();
  };
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
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.p4s());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$(_this__u8e3s4.toString() + ' does not represent a Boolean');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function JsonPrimitive_1(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.q4s_1 = 'null';
  }
  protoOf(JsonNull).o4s = function () {
    return false;
  };
  protoOf(JsonNull).p4s = function () {
    return this.q4s_1;
  };
  protoOf(JsonNull).l4s = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).w2a = function (typeParamsSerializers) {
    return this.l4s();
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
      tmp = _this__u8e3s4.p4s();
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
    this.r4s_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.r4s_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.r4s_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.r4s_1, ',', '[', ']');
  };
  protoOf(JsonArray).h = function () {
    return this.r4s_1.h();
  };
  protoOf(JsonArray).s4s = function (element) {
    return this.r4s_1.x1(element);
  };
  protoOf(JsonArray).x1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.s4s(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).p = function () {
    return this.r4s_1.p();
  };
  protoOf(JsonArray).t4s = function (elements) {
    return this.r4s_1.y1(elements);
  };
  protoOf(JsonArray).y1 = function (elements) {
    return this.t4s(elements);
  };
  protoOf(JsonArray).u = function (index) {
    return this.r4s_1.u(index);
  };
  protoOf(JsonArray).u4s = function (element) {
    return this.r4s_1.z1(element);
  };
  protoOf(JsonArray).z1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.u4s(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).v4s = function (element) {
    return this.r4s_1.a2(element);
  };
  protoOf(JsonArray).a2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.v4s(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).b2 = function () {
    return this.r4s_1.b2();
  };
  protoOf(JsonArray).v = function (index) {
    return this.r4s_1.v(index);
  };
  protoOf(JsonArray).c2 = function (fromIndex, toIndex) {
    return this.r4s_1.c2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.r4s_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).s = function () {
    return this.r4s_1.s();
  };
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
  function JsonPrimitive_2(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, false);
  }
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.p4s() + ' is not an Int');
    return result.j1();
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.w4s_1 = isString;
    this.x4s_1 = coerceToInlineType;
    this.y4s_1 = toString(body);
    if (!(this.x4s_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.x4s_1.l20()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).o4s = function () {
    return this.w4s_1;
  };
  protoOf(JsonLiteral).p4s = function () {
    return this.y4s_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.w4s_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.y4s_1);
      tmp = this_0.toString();
    } else {
      tmp = this.y4s_1;
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
    if (!(this.w4s_1 === other.w4s_1))
      return false;
    if (!(this.y4s_1 === other.y4s_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.w4s_1);
    result = imul(31, result) + getStringHashCode(this.y4s_1) | 0;
    return result;
  };
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.p4s())).z4s();
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.p4s());
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.p4s();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.p4s());
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
    tmp.a4t_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).b4t = function (key, element) {
    return this.a4t_1.n2(key, element);
  };
  protoOf(JsonObjectBuilder).n4r = function () {
    return new JsonObject(this.a4t_1);
  };
  function put(_this__u8e3s4, key, value) {
    return _this__u8e3s4.b4t(key, JsonPrimitive_0(value));
  }
  function put_0(_this__u8e3s4, key, value) {
    return _this__u8e3s4.b4t(key, JsonPrimitive_2(value));
  }
  function put_1(_this__u8e3s4, key, value) {
    return _this__u8e3s4.b4t(key, JsonPrimitive_1(value));
  }
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.c4t_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).d4t = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.c4t_1.n(element);
    return true;
  };
  protoOf(JsonArrayBuilder).n4r = function () {
    return new JsonArray(this.c4t_1);
  };
  function add(_this__u8e3s4, value) {
    return _this__u8e3s4.d4t(JsonPrimitive_0(value));
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.e4t_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).t1y();
    this.f4t_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).u1z = function () {
    return this.f4t_1;
  };
  protoOf(JsonObjectDescriptor).o20 = function (index) {
    return this.e4t_1.o20(index);
  };
  protoOf(JsonObjectDescriptor).p20 = function (name) {
    return this.e4t_1.p20(name);
  };
  protoOf(JsonObjectDescriptor).q20 = function (index) {
    return this.e4t_1.q20(index);
  };
  protoOf(JsonObjectDescriptor).r20 = function (index) {
    return this.e4t_1.r20(index);
  };
  protoOf(JsonObjectDescriptor).s20 = function (index) {
    return this.e4t_1.s20(index);
  };
  protoOf(JsonObjectDescriptor).k20 = function () {
    return this.e4t_1.k20();
  };
  protoOf(JsonObjectDescriptor).g20 = function () {
    return this.e4t_1.g20();
  };
  protoOf(JsonObjectDescriptor).l20 = function () {
    return this.e4t_1.l20();
  };
  protoOf(JsonObjectDescriptor).m20 = function () {
    return this.e4t_1.m20();
  };
  protoOf(JsonObjectDescriptor).n20 = function () {
    return this.e4t_1.n20();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.g4t_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).t1y = function () {
    return this.g4t_1;
  };
  protoOf(JsonObjectSerializer).h4t = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).u1y(encoder, value);
  };
  protoOf(JsonObjectSerializer).u1y = function (encoder, value) {
    return this.h4t(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).v1y = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).v1y(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.h1z('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.h1z('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.h1z('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.h1z('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.h1z('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().i4t_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().j4t_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().k4t_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().g4t_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().l4t_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.m4t_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).t1y = function () {
    return this.m4t_1;
  };
  protoOf(JsonElementSerializer).n4t = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.y23(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.y23(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.y23(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).u1y = function (encoder, value) {
    return this.n4t(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).v1y = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.i4s();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.i4t_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).t1y = function () {
    return this.i4t_1;
  };
  protoOf(JsonPrimitiveSerializer).o4t = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.y23(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.y23(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).u1y = function (encoder, value) {
    return this.o4t(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).v1y = function (decoder) {
    var result = asJsonDecoder(decoder).i4s();
    if (!(result instanceof JsonPrimitive))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonPrimitive, had ' + toString(getKClassFromExpression(result)), toString(result));
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
    this.j4t_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).t1y = function () {
    return this.j4t_1;
  };
  protoOf(JsonNullSerializer).p4t = function (encoder, value) {
    verify(encoder);
    encoder.b23();
  };
  protoOf(JsonNullSerializer).u1y = function (encoder, value) {
    return this.p4t(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).v1y = function (decoder) {
    verify_0(decoder);
    if (decoder.r21()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.s21();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.q4t_1 = ListSerializer(JsonElementSerializer_getInstance()).t1y();
    this.r4t_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).u1z = function () {
    return this.r4t_1;
  };
  protoOf(JsonArrayDescriptor).o20 = function (index) {
    return this.q4t_1.o20(index);
  };
  protoOf(JsonArrayDescriptor).p20 = function (name) {
    return this.q4t_1.p20(name);
  };
  protoOf(JsonArrayDescriptor).q20 = function (index) {
    return this.q4t_1.q20(index);
  };
  protoOf(JsonArrayDescriptor).r20 = function (index) {
    return this.q4t_1.r20(index);
  };
  protoOf(JsonArrayDescriptor).s20 = function (index) {
    return this.q4t_1.s20(index);
  };
  protoOf(JsonArrayDescriptor).k20 = function () {
    return this.q4t_1.k20();
  };
  protoOf(JsonArrayDescriptor).g20 = function () {
    return this.q4t_1.g20();
  };
  protoOf(JsonArrayDescriptor).l20 = function () {
    return this.q4t_1.l20();
  };
  protoOf(JsonArrayDescriptor).m20 = function () {
    return this.q4t_1.m20();
  };
  protoOf(JsonArrayDescriptor).n20 = function () {
    return this.q4t_1.n20();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.l4t_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).t1y = function () {
    return this.l4t_1;
  };
  protoOf(JsonArraySerializer).s4t = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).u1y(encoder, value);
  };
  protoOf(JsonArraySerializer).u1y = function (encoder, value) {
    return this.s4t(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).v1y = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).v1y(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function verify(encoder) {
    asJsonEncoder(encoder);
  }
  function verify_0(decoder) {
    asJsonDecoder(decoder);
  }
  function defer(deferred) {
    return new defer$1(deferred);
  }
  function JsonLiteralSerializer() {
    JsonLiteralSerializer_instance = this;
    this.k4t_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).t1y = function () {
    return this.k4t_1;
  };
  protoOf(JsonLiteralSerializer).t4t = function (encoder, value) {
    verify(encoder);
    if (value.w4s_1) {
      return encoder.k23(value.y4s_1);
    }
    if (!(value.x4s_1 == null)) {
      return encoder.m23(value.x4s_1).k23(value.y4s_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.y4s_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.g23(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.y4s_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).yq_1;
      var tmp_1 = encoder.m23(serializer_0(Companion_getInstance()).t1y());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.g23(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.y4s_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.i23(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.y4s_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.c23(tmp3_safe_receiver);
    }
    encoder.k23(value.y4s_1);
  };
  protoOf(JsonLiteralSerializer).u1y = function (encoder, value) {
    return this.t4t(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).v1y = function (decoder) {
    var result = asJsonDecoder(decoder).i4s();
    if (!(result instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, 'Unexpected JSON element, expected JsonLiteral, had ' + toString(getKClassFromExpression(result)), toString(result));
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
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Decoder to be JsonDecoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function asJsonEncoder(_this__u8e3s4) {
    var tmp0_elvis_lhs = isInterface(_this__u8e3s4, JsonEncoder) ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('This serializer can be used only with Json format.' + ('Expected Encoder to be JsonEncoder, got ' + toString(getKClassFromExpression(_this__u8e3s4))));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function _get_original__l7ku1m($this) {
    var tmp0 = $this.u4t_1;
    // Inline function 'kotlin.getValue' call
    original$factory();
    return tmp0.z();
  }
  function defer$1($deferred) {
    this.u4t_1 = lazy($deferred);
  }
  protoOf(defer$1).u1z = function () {
    return _get_original__l7ku1m(this).u1z();
  };
  protoOf(defer$1).k20 = function () {
    return _get_original__l7ku1m(this).k20();
  };
  protoOf(defer$1).m20 = function () {
    return _get_original__l7ku1m(this).m20();
  };
  protoOf(defer$1).o20 = function (index) {
    return _get_original__l7ku1m(this).o20(index);
  };
  protoOf(defer$1).p20 = function (name) {
    return _get_original__l7ku1m(this).p20(name);
  };
  protoOf(defer$1).q20 = function (index) {
    return _get_original__l7ku1m(this).q20(index);
  };
  protoOf(defer$1).r20 = function (index) {
    return _get_original__l7ku1m(this).r20(index);
  };
  protoOf(defer$1).s20 = function (index) {
    return _get_original__l7ku1m(this).s20(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.v4t_1 = writer;
    this.w4t_1 = true;
  }
  protoOf(Composer).x4t = function () {
    this.w4t_1 = true;
  };
  protoOf(Composer).y4t = function () {
    return Unit_instance;
  };
  protoOf(Composer).z4t = function () {
    this.w4t_1 = false;
  };
  protoOf(Composer).a4u = function () {
    this.w4t_1 = false;
  };
  protoOf(Composer).b4u = function () {
    return Unit_instance;
  };
  protoOf(Composer).c4u = function (v) {
    return this.v4t_1.d4u(v);
  };
  protoOf(Composer).e4u = function (v) {
    return this.v4t_1.f4u(v);
  };
  protoOf(Composer).g4u = function (v) {
    return this.v4t_1.f4u(v.toString());
  };
  protoOf(Composer).h4u = function (v) {
    return this.v4t_1.f4u(v.toString());
  };
  protoOf(Composer).i4u = function (v) {
    return this.v4t_1.j4u(toLong(v));
  };
  protoOf(Composer).k4u = function (v) {
    return this.v4t_1.j4u(toLong(v));
  };
  protoOf(Composer).l4u = function (v) {
    return this.v4t_1.j4u(toLong(v));
  };
  protoOf(Composer).m4u = function (v) {
    return this.v4t_1.j4u(v);
  };
  protoOf(Composer).n4u = function (v) {
    return this.v4t_1.f4u(v.toString());
  };
  protoOf(Composer).o4u = function (value) {
    return this.v4t_1.p4u(value);
  };
  function Composer_0(sb, json) {
    return json.b4q_1.s4r_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.s4u_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).l4u = function (v) {
    if (this.s4u_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.o4u(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.e4u(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).m4u = function (v) {
    if (this.s4u_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.o4u(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.e4u(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).i4u = function (v) {
    if (this.s4u_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.o4u(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.e4u(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).k4u = function (v) {
    if (this.s4u_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.o4u(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.e4u(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.v4u_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).o4u = function (value) {
    if (this.v4u_1) {
      protoOf(Composer).o4u.call(this, value);
    } else {
      protoOf(Composer).e4u.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.y4u_1 = json;
    this.z4u_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).x4t = function () {
    this.w4t_1 = true;
    this.z4u_1 = this.z4u_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).y4t = function () {
    this.z4u_1 = this.z4u_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).z4t = function () {
    this.w4t_1 = false;
    this.e4u('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.z4u_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.e4u(this.y4u_1.b4q_1.u4r_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).a4u = function () {
    if (this.w4t_1)
      this.w4t_1 = false;
    else {
      this.z4t();
    }
  };
  protoOf(ComposerWithPrettyPrint).b4u = function () {
    this.c4u(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.b4v_1 = (!descriptor.s20(index) && descriptor.r20(index).g20());
    return $this.b4v_1;
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
    tmp.a4v_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.b4v_1 = false;
  }
  protoOf(JsonElementMarker).c4v = function (index) {
    this.a4v_1.m28(index);
  };
  protoOf(JsonElementMarker).d4v = function () {
    return this.a4v_1.n28();
  };
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.e4v('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.q4q_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.f4v('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.u1z() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.k20().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function InvalidFloatingPointEncoded(value, key, output) {
    return new JsonEncodingException(unexpectedFpErrorMessage(value, key, output));
  }
  function InvalidFloatingPointDecoded(value, key, output) {
    return JsonDecodingException_1(-1, unexpectedFpErrorMessage(value, key, output));
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
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp4 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp4, endIndex_0)) + suffix;
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function unexpectedFpErrorMessage(value, key, output) {
    return 'Unexpected special floating-point value ' + toString(value) + ' with key ' + key + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output)));
  }
  function InvalidFloatingPointEncoded_0(value, output) {
    return new JsonEncodingException('Unexpected special floating-point value ' + toString(value) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification. ' + "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'\n" + ('Current output: ' + toString(minify(output))));
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.b4q_1.p4r_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.n20();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.h();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
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
    var index = _this__u8e3s4.p20(name);
    if (!(index === -3))
      return index;
    if (!json.b4q_1.z4r_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.u1z() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.o20(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.k20(), CLASS_getInstance()) ? json.b4q_1.a4s_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.h4v(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.b4q_1.b4s_1 && equals(descriptor.k20(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).k2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.h4v(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.m20();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.q20(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.p();
        while (_iterator__ex2g4s.q()) {
          var element = _iterator__ex2g4s.r();
          if (element instanceof JsonNames) {
            destination.n(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i4v_1;
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
          tmp_0 = _this__u8e3s4.o20(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.j4v(_this__u8e3s4, i, _this__u8e3s4.o20(i));
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
    if (builder.h()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.k20(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).i2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.o20(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.o20(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.n2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.m20();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.o20(tmp_2);
        tmp_1[tmp_2] = $strategy.j4v($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
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
    var newSize = imul($this.m4v_1, 2);
    $this.k4v_1 = copyOf($this.k4v_1, newSize);
    $this.l4v_1 = copyOf_0($this.l4v_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.k4v_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.l4v_1 = tmp_2;
    this.m4v_1 = -1;
  }
  protoOf(JsonPath).n4v = function (sd) {
    this.m4v_1 = this.m4v_1 + 1 | 0;
    var depth = this.m4v_1;
    if (depth === this.k4v_1.length) {
      resize(this);
    }
    this.k4v_1[depth] = sd;
  };
  protoOf(JsonPath).o4v = function (index) {
    this.l4v_1[this.m4v_1] = index;
  };
  protoOf(JsonPath).p4v = function (key) {
    var tmp;
    if (!(this.l4v_1[this.m4v_1] === -2)) {
      this.m4v_1 = this.m4v_1 + 1 | 0;
      tmp = this.m4v_1 === this.k4v_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.k4v_1[this.m4v_1] = key;
    this.l4v_1[this.m4v_1] = -2;
  };
  protoOf(JsonPath).q4v = function () {
    if (this.l4v_1[this.m4v_1] === -2) {
      this.k4v_1[this.m4v_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).r4v = function () {
    var depth = this.m4v_1;
    if (this.l4v_1[depth] === -2) {
      this.l4v_1[depth] = -1;
      this.m4v_1 = this.m4v_1 - 1 | 0;
    }
    if (!(this.m4v_1 === -1)) {
      this.m4v_1 = this.m4v_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).s4v = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.x8('$');
    // Inline function 'kotlin.repeat' call
    var times = this.m4v_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.k4v_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.k20(), LIST_getInstance())) {
            if (!(this.l4v_1[index] === -1)) {
              this_0.x8('[');
              this_0.zd(this.l4v_1[index]);
              this_0.x8(']');
            }
          } else {
            var idx = this.l4v_1[index];
            if (idx >= 0) {
              this_0.x8('.');
              this_0.x8(element.o20(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.x8('[');
            this_0.x8("'");
            this_0.w8(element);
            this_0.x8("'");
            this_0.x8(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.s4v();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.k20();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.gc() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.u4v_1)
      return Unit_instance;
    if (!$this.v4v_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.gc() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.m20();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.o20(i);
        if (name === $this.t4v_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function JsonSerializersModuleValidator(configuration) {
    this.t4v_1 = configuration.x4r_1;
    this.u4v_1 = configuration.w4r_1;
    this.v4v_1 = !configuration.e4s_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).g2k = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).j2k = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.t1y();
    checkKind(this, descriptor, actualClass);
    if (!this.u4v_1 && this.v4v_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(JsonSerializersModuleValidator).k2k = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).l2k = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().s();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.y23(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.f4w_1.j4w(6);
    if ($this.f4w_1.k4w() === 4) {
      $this.f4w_1.f4v('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.f4w_1.l4w()) {
      var key = $this.g4w_1 ? $this.f4w_1.n4w() : $this.f4w_1.m4w();
      $this.f4w_1.j4w(5);
      var element = $this.o4w();
      // Inline function 'kotlin.collections.set' call
      result.n2(key, element);
      lastToken = $this.f4w_1.p4w();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.f4w_1.f4v('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.f4w_1.j4w(7);
    } else if (lastToken === 4) {
      if (!$this.h4w_1) {
        invalidTrailingComma($this.f4w_1);
      }
      $this.f4w_1.j4w(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, _this__u8e3s4, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  }
  function readArray($this) {
    var lastToken = $this.f4w_1.p4w();
    if ($this.f4w_1.k4w() === 4) {
      $this.f4w_1.f4v('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.f4w_1.l4w()) {
      var element = $this.o4w();
      result.n(element);
      lastToken = $this.f4w_1.p4w();
      if (!(lastToken === 4)) {
        var tmp0 = $this.f4w_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.q4q_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.f4v(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.f4w_1.j4w(9);
    } else if (lastToken === 4) {
      if (!$this.h4w_1) {
        invalidTrailingComma($this.f4w_1, 'array');
      }
      $this.f4w_1.j4w(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.g4w_1 || !isString) {
      tmp = $this.f4w_1.n4w();
    } else {
      tmp = $this.f4w_1.m4w();
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
    this.n4x_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).s4x = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.t4x($this$DeepRecursiveFunction, it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).va = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.s4x(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.q4x_1 = this.n4x_1.f4w_1.k4w();
            if (this.q4x_1 === 1) {
              this.r4x_1 = readValue(this.n4x_1, true);
              this.m9_1 = 2;
              continue $sm;
            } else {
              if (this.q4x_1 === 0) {
                this.r4x_1 = readValue(this.n4x_1, false);
                this.m9_1 = 2;
                continue $sm;
              } else {
                if (this.q4x_1 === 6) {
                  this.m9_1 = 1;
                  suspendResult = readObject_0(this.n4x_1, this.o4x_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.q4x_1 === 8) {
                    this.r4x_1 = readArray(this.n4x_1);
                    this.m9_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.n4x_1.f4w_1.f4v("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.r4x_1 = suspendResult;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return this.r4x_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).t4x = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.n4x_1, completion);
    i.o4x_1 = $this$DeepRecursiveFunction;
    i.p4x_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.s4x($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y4w_1 = _this__u8e3s4;
    this.z4w_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 5;
            var tmp_0 = this;
            tmp_0.a4x_1 = this.y4w_1;
            this.b4x_1 = this.a4x_1;
            this.c4x_1 = this.b4x_1.f4w_1.j4w(6);
            if (this.b4x_1.f4w_1.k4w() === 4) {
              this.b4x_1.f4w_1.f4v('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.d4x_1 = LinkedHashMap_init_$Create$();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.b4x_1.f4w_1.l4w()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.e4x_1 = this.b4x_1.g4w_1 ? this.b4x_1.f4w_1.n4w() : this.b4x_1.f4w_1.m4w();
            this.b4x_1.f4w_1.j4w(5);
            this.m9_1 = 2;
            suspendResult = this.z4w_1.ap(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.d4x_1;
            var key = this.e4x_1;
            tmp0.n2(key, element);
            this.c4x_1 = this.b4x_1.f4w_1.p4w();
            var tmp0_subject = this.c4x_1;
            if (tmp0_subject === 4) {
              this.m9_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.m9_1 = 4;
                continue $sm;
              } else {
                this.b4x_1.f4w_1.f4v('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.m9_1 = 1;
            continue $sm;
          case 4:
            if (this.c4x_1 === 6) {
              this.b4x_1.f4w_1.j4w(7);
            } else if (this.c4x_1 === 4) {
              if (!this.b4x_1.h4w_1) {
                invalidTrailingComma(this.b4x_1.f4w_1);
              }
              this.b4x_1.f4w_1.j4w(7);
            }

            return new JsonObject(this.d4x_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.f4w_1 = lexer;
    this.g4w_1 = configuration.q4r_1;
    this.h4w_1 = configuration.c4s_1;
    this.i4w_1 = 0;
  }
  protoOf(JsonTreeReader).o4w = function () {
    var token = this.f4w_1.k4w();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.i4w_1 = this.i4w_1 + 1 | 0;
      if (this.i4w_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.i4w_1 = this.i4w_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.f4w_1.f4v('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.n20().p();
    while (_iterator__ex2g4s.q()) {
      var annotation = _iterator__ex2g4s.r();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.f4s_1;
    }
    return json.b4q_1.x4r_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.t1y()).x1(classDiscriminator)) {
      var baseName = serializer.t1y().u1z();
      var actualName = actualSerializer.t1y().u1z();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind_0(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.g4v_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).u4x = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.g4v_1;
    var value_0 = this_0.k2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.n2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.n2(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).h4v = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.v4x(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.u4x(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).v4x = function (descriptor, key) {
    var tmp0_safe_receiver = this.g4v_1.k2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.k2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.w4x_1 = discriminatorToSkip;
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.w4x_1 === unknownKey) {
      _this__u8e3s4.w4x_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.x22(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.k4q_1.k4w() === 4) {
      $this.k4q_1.f4v('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.m4q_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.m4q_1 === -1)) {
        hasComma = $this.k4q_1.y4x();
      }
    } else {
      $this.k4q_1.x4x(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.k4q_1.l4w()) {
      if (decodingKey) {
        if ($this.m4q_1 === -1) {
          var tmp0 = $this.k4q_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.q4q_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.f4v(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.k4q_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.q4q_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp3.f4v(tmp$ret$2, position_0);
          }
        }
      }
      $this.m4q_1 = $this.m4q_1 + 1 | 0;
      tmp = $this.m4q_1;
    } else {
      if (hasComma && !$this.i4q_1.b4q_1.c4s_1) {
        invalidTrailingComma($this.k4q_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.i4q_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.s20(index);
      var elementDescriptor = descriptor.r20(index);
      var tmp;
      if (isOptional && !elementDescriptor.g20()) {
        tmp = $this.k4q_1.z4x(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.k20(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.g20()) {
          tmp_0 = $this.k4q_1.z4x(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.k4q_1.a4y($this.o4q_1.q4r_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.b4q_1.t4r_1 && elementDescriptor.g20();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.k4q_1.m4w();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.k4q_1.y4x();
    while ($this.k4q_1.l4w()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.k4q_1.x4x(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.i4q_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.o4q_1.v4r_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.k4q_1.y4x();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.p4q_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.c4v(index);
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
    if (hasComma && !$this.i4q_1.b4q_1.c4s_1) {
      invalidTrailingComma($this.k4q_1);
    }
    var tmp1_safe_receiver = $this.p4q_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d4v();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.i4q_1) || trySkip($this, $this.n4q_1, key)) {
      $this.k4q_1.c4y($this.o4q_1.q4r_1);
    } else {
      $this.k4q_1.r4q_1.r4v();
      $this.k4q_1.b4y(key);
    }
    return $this.k4q_1.y4x();
  }
  function decodeListIndex($this) {
    var hasComma = $this.k4q_1.y4x();
    var tmp;
    if ($this.k4q_1.l4w()) {
      if (!($this.m4q_1 === -1) && !hasComma) {
        $this.k4q_1.f4v('Expected end of the array or comma');
      }
      $this.m4q_1 = $this.m4q_1 + 1 | 0;
      tmp = $this.m4q_1;
    } else {
      if (hasComma && !$this.i4q_1.b4q_1.c4s_1) {
        invalidTrailingComma($this.k4q_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.o4q_1.q4r_1) {
      tmp = $this.k4q_1.e4y();
    } else {
      tmp = $this.k4q_1.d4y();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.i4q_1 = json;
    this.j4q_1 = mode;
    this.k4q_1 = lexer;
    this.l4q_1 = this.i4q_1.v22();
    this.m4q_1 = -1;
    this.n4q_1 = discriminatorHolder;
    this.o4q_1 = this.i4q_1.b4q_1;
    this.p4q_1 = this.o4q_1.t4r_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).k4s = function () {
    return this.i4q_1;
  };
  protoOf(StreamingJsonDecoder).v22 = function () {
    return this.l4q_1;
  };
  protoOf(StreamingJsonDecoder).i4s = function () {
    return (new JsonTreeReader(this.i4q_1.b4q_1, this.k4q_1)).o4w();
  };
  protoOf(StreamingJsonDecoder).f22 = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.i4q_1.b4q_1.w4r_1;
      }
      if (tmp) {
        return deserializer.v1y(this);
      }
      var discriminator = classDiscriminator(deserializer.t1y(), this.i4q_1);
      var tmp0_elvis_lhs = this.k4q_1.f4y(discriminator, this.o4q_1.q4r_1);
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
            tmp_1 = this.k4s().b4q_1.w4r_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.v1y(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.t1y(), this.k4s());
          var tmp0 = this.i4s();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.t1y().u1z();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).gc();
            var tmp_3 = getKClassFromExpression(tmp0).gc();
            var tmp$ret$1 = this.k4q_1.r4q_1.s4v();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.ze(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.k4s(), discriminator_0, jsonTree, actualSerializer);
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
          this.k4q_1.f4v(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.n4q_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.v1y(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.a20_1, plus(e.message, ' at path: ') + this.k4q_1.r4q_1.s4v(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).g22 = function (descriptor) {
    var newMode = switchMode(this.i4q_1, descriptor);
    this.k4q_1.r4q_1.n4v(descriptor);
    this.k4q_1.x4x(newMode.i4y_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.r2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.i4q_1, newMode, this.k4q_1, descriptor, this.n4q_1);
        break;
      default:
        var tmp_0;
        if (this.j4q_1.equals(newMode) && this.i4q_1.b4q_1.t4r_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.i4q_1, newMode, this.k4q_1, descriptor, this.n4q_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).h22 = function (descriptor) {
    if (descriptor.m20() === 0 && ignoreUnknownKeys(descriptor, this.i4q_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.k4q_1.y4x() && !this.i4q_1.b4q_1.c4s_1) {
      invalidTrailingComma(this.k4q_1, '');
    }
    this.k4q_1.x4x(this.j4q_1.j4y_1);
    this.k4q_1.r4q_1.r4v();
  };
  protoOf(StreamingJsonDecoder).r21 = function () {
    var tmp;
    var tmp0_safe_receiver = this.p4q_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.b4v_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.k4q_1.k4y();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).s21 = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).s22 = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.j4q_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.k4q_1.r4q_1.q4v();
    }
    var value = protoOf(AbstractDecoder).s22.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.k4q_1.r4q_1.p4v(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).x22 = function (descriptor) {
    var index;
    switch (this.j4q_1.r2_1) {
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
    if (!this.j4q_1.equals(WriteMode_MAP_getInstance())) {
      this.k4q_1.r4q_1.o4v(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).t21 = function () {
    return this.k4q_1.l4y();
  };
  protoOf(StreamingJsonDecoder).u21 = function () {
    var value = this.k4q_1.m4y();
    if (!value.equals(toLong(value.p3()))) {
      this.k4q_1.f4v("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.p3();
  };
  protoOf(StreamingJsonDecoder).v21 = function () {
    var value = this.k4q_1.m4y();
    if (!value.equals(toLong(value.q3()))) {
      this.k4q_1.f4v("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.q3();
  };
  protoOf(StreamingJsonDecoder).w21 = function () {
    var value = this.k4q_1.m4y();
    if (!value.equals(toLong(value.j1()))) {
      this.k4q_1.f4v("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.j1();
  };
  protoOf(StreamingJsonDecoder).x21 = function () {
    return this.k4q_1.m4y();
  };
  protoOf(StreamingJsonDecoder).y21 = function () {
    var tmp0 = this.k4q_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.n4w();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.f4v("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.i4q_1.b4q_1.y4r_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.k4q_1, result);
  };
  protoOf(StreamingJsonDecoder).z21 = function () {
    var tmp0 = this.k4q_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.n4w();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.f4v("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.i4q_1.b4q_1.y4r_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.k4q_1, result);
  };
  protoOf(StreamingJsonDecoder).a22 = function () {
    var string = this.k4q_1.n4w();
    if (!(string.length === 1)) {
      this.k4q_1.f4v("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).b22 = function () {
    var tmp;
    if (this.o4q_1.q4r_1) {
      tmp = this.k4q_1.e4y();
    } else {
      tmp = this.k4q_1.m4w();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).d22 = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.k4q_1, this.i4q_1) : protoOf(AbstractDecoder).d22.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).c22 = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.i4q_1, this.b22(), ' at path ' + this.k4q_1.r4q_1.s4v());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.n4y_1 = lexer;
    this.o4y_1 = json.v22();
  }
  protoOf(JsonDecoderForUnsignedTypes).v22 = function () {
    return this.o4y_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).x22 = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).w21 = function () {
    var tmp0 = this.n4y_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.n4w();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.f4v("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).x21 = function () {
    var tmp0 = this.n4y_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.n4w();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.f4v("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).u21 = function () {
    var tmp0 = this.n4y_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.n4w();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.f4v("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).v21 = function () {
    var tmp0 = this.n4y_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.n4w();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.f4v("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.w4v_1.z4t();
    $this.k23(discriminator);
    $this.w4v_1.c4u(_Char___init__impl__6a9atx(58));
    $this.w4v_1.b4u();
    $this.k23(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.w4v_1 = composer;
    this.x4v_1 = json;
    this.y4v_1 = mode;
    this.z4v_1 = modeReuseCache;
    this.a4w_1 = this.x4v_1.v22();
    this.b4w_1 = this.x4v_1.b4q_1;
    this.c4w_1 = false;
    this.d4w_1 = null;
    this.e4w_1 = null;
    var i = this.y4v_1.r2_1;
    if (!(this.z4v_1 == null)) {
      if (!(this.z4v_1[i] === null) || !(this.z4v_1[i] === this)) {
        this.z4v_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).k4s = function () {
    return this.x4v_1;
  };
  protoOf(StreamingJsonEncoder).v22 = function () {
    return this.a4w_1;
  };
  protoOf(StreamingJsonEncoder).d24 = function (descriptor, index) {
    return this.b4w_1.o4r_1;
  };
  protoOf(StreamingJsonEncoder).y23 = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.k4s().b4q_1.w4r_1) {
        serializer.u1y(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.k4s().b4q_1.e4s_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.k4s().b4q_1.e4s_1.r2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.t1y().k20();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.t1y(), this.k4s()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.t1y()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.t1y().k20());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.t1y().u1z();
        this.d4w_1 = baseClassDiscriminator;
        this.e4w_1 = serialName;
      }
      actualSerializer.u1y(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).g22 = function (descriptor) {
    var newMode = switchMode(this.x4v_1, descriptor);
    if (!(newMode.i4y_1 === _Char___init__impl__6a9atx(0))) {
      this.w4v_1.c4u(newMode.i4y_1);
      this.w4v_1.x4t();
    }
    var discriminator = this.d4w_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.e4w_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.u1z() : tmp0_elvis_lhs);
      this.d4w_1 = null;
      this.e4w_1 = null;
    }
    if (this.y4v_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.z4v_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.r2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.w4v_1, this.x4v_1, newMode, this.z4v_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).h22 = function (descriptor) {
    if (!(this.y4v_1.j4y_1 === _Char___init__impl__6a9atx(0))) {
      this.w4v_1.y4t();
      this.w4v_1.a4u();
      this.w4v_1.c4u(this.y4v_1.j4y_1);
    }
  };
  protoOf(StreamingJsonEncoder).z22 = function (descriptor, index) {
    switch (this.y4v_1.r2_1) {
      case 1:
        if (!this.w4v_1.w4t_1) {
          this.w4v_1.c4u(_Char___init__impl__6a9atx(44));
        }

        this.w4v_1.z4t();
        break;
      case 2:
        if (!this.w4v_1.w4t_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.w4v_1.c4u(_Char___init__impl__6a9atx(44));
            this.w4v_1.z4t();
            tmp_0 = true;
          } else {
            this.w4v_1.c4u(_Char___init__impl__6a9atx(58));
            this.w4v_1.b4u();
            tmp_0 = false;
          }
          tmp.c4w_1 = tmp_0;
        } else {
          this.c4w_1 = true;
          this.w4v_1.z4t();
        }

        break;
      case 3:
        if (index === 0)
          this.c4w_1 = true;
        if (index === 1) {
          this.w4v_1.c4u(_Char___init__impl__6a9atx(44));
          this.w4v_1.b4u();
          this.c4w_1 = false;
        }

        break;
      default:
        if (!this.w4v_1.w4t_1) {
          this.w4v_1.c4u(_Char___init__impl__6a9atx(44));
        }

        this.w4v_1.z4t();
        this.k23(getJsonElementName(descriptor, this.x4v_1, index));
        this.w4v_1.c4u(_Char___init__impl__6a9atx(58));
        this.w4v_1.b4u();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).z23 = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.b4w_1.t4r_1) {
      protoOf(AbstractEncoder).z23.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).m23 = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.w4v_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.w4v_1;
      } else {
        var tmp1 = this.w4v_1.v4t_1;
        var p1 = this.c4w_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp1, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.x4v_1, this.y4v_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.w4v_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.w4v_1;
      } else {
        var tmp4 = this.w4v_1.v4t_1;
        var p1_0 = this.c4w_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp4, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.x4v_1, this.y4v_1, null);
    } else if (!(this.d4w_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.e4w_1 = descriptor.u1z();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).m23.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).b23 = function () {
    this.w4v_1.e4u('null');
  };
  protoOf(StreamingJsonEncoder).c23 = function (value) {
    if (this.c4w_1) {
      this.k23(value.toString());
    } else {
      this.w4v_1.n4u(value);
    }
  };
  protoOf(StreamingJsonEncoder).d23 = function (value) {
    if (this.c4w_1) {
      this.k23(value.toString());
    } else {
      this.w4v_1.i4u(value);
    }
  };
  protoOf(StreamingJsonEncoder).e23 = function (value) {
    if (this.c4w_1) {
      this.k23(value.toString());
    } else {
      this.w4v_1.k4u(value);
    }
  };
  protoOf(StreamingJsonEncoder).f23 = function (value) {
    if (this.c4w_1) {
      this.k23(value.toString());
    } else {
      this.w4v_1.l4u(value);
    }
  };
  protoOf(StreamingJsonEncoder).g23 = function (value) {
    if (this.c4w_1) {
      this.k23(value.toString());
    } else {
      this.w4v_1.m4u(value);
    }
  };
  protoOf(StreamingJsonEncoder).h23 = function (value) {
    if (this.c4w_1) {
      this.k23(value.toString());
    } else {
      this.w4v_1.g4u(value);
    }
    if (!this.b4w_1.y4r_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.w4v_1.v4t_1));
    }
  };
  protoOf(StreamingJsonEncoder).i23 = function (value) {
    if (this.c4w_1) {
      this.k23(value.toString());
    } else {
      this.w4v_1.h4u(value);
    }
    if (!this.b4w_1.y4r_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.w4v_1.v4t_1));
    }
  };
  protoOf(StreamingJsonEncoder).j23 = function (value) {
    this.k23(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).k23 = function (value) {
    return this.w4v_1.o4u(value);
  };
  protoOf(StreamingJsonEncoder).l23 = function (enumDescriptor, index) {
    this.k23(enumDescriptor.o20(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.l20() && get_unsignedNumberDescriptors().x1(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.l20() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).t1y(), serializer_0(Companion_getInstance()).t1y(), serializer_2(Companion_getInstance_1()).t1y(), serializer_3(Companion_getInstance_2()).t1y()]);
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
    _this__u8e3s4.y8(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.wd(value, lastPos, i);
          _this__u8e3s4.x8(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.wd(value, lastPos, value.length);
    else
      _this__u8e3s4.x8(value);
    _this__u8e3s4.y8(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull_0(_this__u8e3s4) {
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
  function readJson(json, element, deserializer) {
    var tmp;
    if (element instanceof JsonObject) {
      tmp = new JsonTreeDecoder(json, element);
    } else {
      if (element instanceof JsonArray) {
        tmp = new JsonTreeListDecoder(json, element);
      } else {
        var tmp_0;
        if (element instanceof JsonLiteral) {
          tmp_0 = true;
        } else {
          tmp_0 = equals(element, JsonNull_getInstance());
        }
        if (tmp_0) {
          tmp = new JsonPrimitiveDecoder(json, element instanceof JsonPrimitive ? element : THROW_CCE());
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    var input = tmp;
    return input.f22(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.v4y(tag), toString($this.w4y()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.r4y_1 = json;
    this.s4y_1 = value;
    this.t4y_1 = polymorphicDiscriminator;
    this.u4y_1 = this.k4s().b4q_1;
  }
  protoOf(AbstractJsonTreeDecoder).k4s = function () {
    return this.r4y_1;
  };
  protoOf(AbstractJsonTreeDecoder).z = function () {
    return this.s4y_1;
  };
  protoOf(AbstractJsonTreeDecoder).v22 = function () {
    return this.k4s().v22();
  };
  protoOf(AbstractJsonTreeDecoder).w4y = function () {
    var tmp0_safe_receiver = this.m2g();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.x4y(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.z() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).v4y = function (currentTag) {
    return this.k2h() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).i4s = function () {
    return this.w4y();
  };
  protoOf(AbstractJsonTreeDecoder).f22 = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.k4s().b4q_1.w4r_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.v1y(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.t1y(), this.k4s());
      var tmp0 = this.i4s();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.t1y().u1z();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).gc();
        var tmp_1 = getKClassFromExpression(tmp0).gc();
        var tmp$ret$1 = this.k2h();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.ze(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.k4s(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).n2g = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).g22 = function (descriptor) {
    var currentObject = this.w4y();
    var tmp0_subject = descriptor.k20();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.k4s();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.u1z();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).gc();
        var tmp_3 = getKClassFromExpression(currentObject).gc();
        var tmp$ret$0 = this.k2h();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.k4s();
        var keyDescriptor = carrierDescriptor(descriptor.r20(0), this_0.v22());
        var keyKind = keyDescriptor.k20();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.k4s();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.u1z();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).gc();
            var tmp_8 = getKClassFromExpression(currentObject).gc();
            var tmp$ret$3 = this.k2h();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.b4q_1.r4r_1) {
            var tmp_9 = this.k4s();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.u1z();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).gc();
              var tmp_11 = getKClassFromExpression(currentObject).gc();
              var tmp$ret$7 = this.k2h();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.k4s();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.u1z();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).gc();
          var tmp_14 = getKClassFromExpression(currentObject).gc();
          var tmp$ret$12 = this.k2h();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.t4y_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).h22 = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).r21 = function () {
    var tmp = this.w4y();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).y4y = function (tag, enumDescriptor) {
    var tmp = this.k4s();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp1 = this.x4y(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.u1z();
    if (!(tmp1 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).gc();
      var tmp_1 = getKClassFromExpression(tmp1).gc();
      var tmp$ret$0 = this.v4y(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp1.p4s());
  };
  protoOf(AbstractJsonTreeDecoder).w2h = function (tag, enumDescriptor) {
    return this.y4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).z4y = function (tag) {
    return !(this.x4y(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).m2h = function (tag) {
    return this.z4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).a4z = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gc();
        var tmp_0 = getKClassFromExpression(value).gc();
        var tmp$ret$0 = this.v4y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$0, toString(value));
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
  protoOf(AbstractJsonTreeDecoder).n2h = function (tag) {
    return this.a4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b4z = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gc();
        var tmp_0 = getKClassFromExpression(value).gc();
        var tmp$ret$0 = this.v4y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.p3();
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
  protoOf(AbstractJsonTreeDecoder).o2h = function (tag) {
    return this.b4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c4z = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gc();
        var tmp_0 = getKClassFromExpression(value).gc();
        var tmp$ret$0 = this.v4y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.q3();
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
  protoOf(AbstractJsonTreeDecoder).p2h = function (tag) {
    return this.c4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d4z = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gc();
        var tmp_0 = getKClassFromExpression(value).gc();
        var tmp$ret$0 = this.v4y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.j1();
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
  protoOf(AbstractJsonTreeDecoder).q2h = function (tag) {
    return this.d4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e4z = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gc();
        var tmp_0 = getKClassFromExpression(value).gc();
        var tmp$ret$0 = this.v4y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$0, toString(value));
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
  protoOf(AbstractJsonTreeDecoder).r2h = function (tag) {
    return this.e4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f4z = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gc();
        var tmp_0 = getKClassFromExpression(value).gc();
        var tmp$ret$0 = this.v4y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'float' + ' at element: ' + tmp$ret$0, toString(value));
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
    var specialFp = this.k4s().b4q_1.y4r_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.w4y()));
  };
  protoOf(AbstractJsonTreeDecoder).s2h = function (tag) {
    return this.f4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g4z = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gc();
        var tmp_0 = getKClassFromExpression(value).gc();
        var tmp$ret$0 = this.v4y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'double' + ' at element: ' + tmp$ret$0, toString(value));
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
    var specialFp = this.k4s().b4q_1.y4r_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.w4y()));
  };
  protoOf(AbstractJsonTreeDecoder).t2h = function (tag) {
    return this.g4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h4z = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.x4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).gc();
        var tmp_0 = getKClassFromExpression(value).gc();
        var tmp$ret$0 = this.v4y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.p4s()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.l1_1;
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
  protoOf(AbstractJsonTreeDecoder).u2h = function (tag) {
    return this.h4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i4z = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.x4y(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).gc();
      var tmp_0 = getKClassFromExpression(value).gc();
      var tmp$ret$0 = this.v4y(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.v4y(tag), toString(this.w4y()));
    if (!value_0.w4s_1 && !this.k4s().b4q_1.q4r_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.v4y(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.w4y()));
    }
    return value_0.y4s_1;
  };
  protoOf(AbstractJsonTreeDecoder).v2h = function (tag) {
    return this.i4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j4z = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.k4s();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp1 = this.x4y(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.u1z();
      if (!(tmp1 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).gc();
        var tmp_2 = getKClassFromExpression(tmp1).gc();
        var tmp$ret$0 = this.v4y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp1.p4s());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.k4s());
    } else {
      tmp = protoOf(NamedValueDecoder).x2h.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).x2h = function (tag, inlineDescriptor) {
    return this.j4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).d22 = function (descriptor) {
    return !(this.m2g() == null) ? protoOf(NamedValueDecoder).d22.call(this, descriptor) : (new JsonPrimitiveDecoder(this.k4s(), this.z(), this.t4y_1)).d22(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.k4s();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.s20(index);
      var elementDescriptor = descriptor.r20(index);
      var tmp;
      if (isOptional && !elementDescriptor.g20()) {
        var tmp_0 = $this.x4y(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.k20(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.g20()) {
          var tmp_2 = $this.x4y(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp_3 = $this.x4y(tag);
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
        var coerceToNull = !tmp0.b4q_1.t4r_1 && elementDescriptor.g20();
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
    $this.t4z_1 = (!$this.k4s().b4q_1.t4r_1 && !descriptor.s20(index) && descriptor.r20(index).g20());
    return $this.t4z_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.q4z_1 = value;
    this.r4z_1 = polyDescriptor;
    this.s4z_1 = 0;
    this.t4z_1 = false;
  }
  protoOf(JsonTreeDecoder).z = function () {
    return this.q4z_1;
  };
  protoOf(JsonTreeDecoder).x22 = function (descriptor) {
    while (this.s4z_1 < descriptor.m20()) {
      var _unary__edvuaz = this.s4z_1;
      this.s4z_1 = _unary__edvuaz + 1 | 0;
      var name = this.i2g(descriptor, _unary__edvuaz);
      var index = this.s4z_1 - 1 | 0;
      this.t4z_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.z();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).i2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.u4y_1.v4r_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).r21 = function () {
    return !this.t4z_1 && protoOf(AbstractJsonTreeDecoder).r21.call(this);
  };
  protoOf(JsonTreeDecoder).j2g = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.k4s());
    var baseName = descriptor.o20(index);
    if (strategy == null) {
      if (!this.u4y_1.z4r_1)
        return baseName;
      if (this.z().l2().x1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.k4s(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.z().l2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        if (deserializationNamesMap_0.k2(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.j4v(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).x4y = function (tag) {
    return getValue(this.z(), tag);
  };
  protoOf(JsonTreeDecoder).g22 = function (descriptor) {
    if (descriptor === this.r4z_1) {
      var tmp = this.k4s();
      var tmp1 = this.w4y();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.r4z_1.u1z();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).gc();
        var tmp_1 = getKClassFromExpression(tmp1).gc();
        var tmp$ret$0 = this.k2h();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.t4y_1, this.r4z_1);
    }
    return protoOf(AbstractJsonTreeDecoder).g22.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).h22 = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.k4s())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.k20();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.k4s());
    var tmp_1;
    if (strategy == null && !this.u4y_1.z4r_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.k4s(), descriptor).l2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.k4s()).v4x(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.z().l2().p();
    while (_iterator__ex2g4s.q()) {
      var key = _iterator__ex2g4s.r();
      if (!names.x1(key) && !(key === this.t4y_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.k2h() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.z().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.a50_1 = value;
    this.b50_1 = this.a50_1.s();
    this.c50_1 = -1;
  }
  protoOf(JsonTreeListDecoder).z = function () {
    return this.a50_1;
  };
  protoOf(JsonTreeListDecoder).j2g = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).x4y = function (tag) {
    return this.a50_1.u(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).x22 = function (descriptor) {
    while (this.c50_1 < (this.b50_1 - 1 | 0)) {
      this.c50_1 = this.c50_1 + 1 | 0;
      return this.c50_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.j50_1 = value;
    this.e2h('primitive');
  }
  protoOf(JsonPrimitiveDecoder).z = function () {
    return this.j50_1;
  };
  protoOf(JsonPrimitiveDecoder).x22 = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).x4y = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.j50_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.u50_1 = value;
    this.v50_1 = toList(this.u50_1.l2());
    this.w50_1 = imul(this.v50_1.s(), 2);
    this.x50_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).z = function () {
    return this.u50_1;
  };
  protoOf(JsonTreeMapDecoder).j2g = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.v50_1.u(i);
  };
  protoOf(JsonTreeMapDecoder).x22 = function (descriptor) {
    while (this.x50_1 < (this.w50_1 - 1 | 0)) {
      this.x50_1 = this.x50_1 + 1 | 0;
      return this.x50_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).x4y = function (tag) {
    return (this.x50_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.u50_1, tag);
  };
  protoOf(JsonTreeMapDecoder).h22 = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.t1y())).f22(deserializer);
  }
  function writeJson(json, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
    encoder.y23(serializer, value);
    var tmp;
    if (result._v == null) {
      throwUninitializedPropertyAccessException('result');
    } else {
      tmp = result._v;
    }
    return tmp;
  }
  function JsonTreeEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.linkedMapOf' call
    tmp.k51_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonTreeEncoder).l51 = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    this.k51_1.n2(key, element);
  };
  protoOf(JsonTreeEncoder).z23 = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.b51_1.t4r_1) {
      protoOf(AbstractJsonTreeEncoder).z23.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).m51 = function () {
    return new JsonObject(this.k51_1);
  };
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.b52_1 = this$0;
    this.c52_1 = $tag;
    AbstractEncoder.call(this);
    this.a52_1 = this$0.z50_1.v22();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).v22 = function () {
    return this.a52_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).d52 = function (s) {
    return this.b52_1.l51(this.c52_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).f23 = function (value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.d52(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).g23 = function (value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.d52(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).d23 = function (value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.d52(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).e23 = function (value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.d52(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.e52_1 = this$0;
    this.f52_1 = $tag;
    this.g52_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).v22 = function () {
    return this.e52_1.z50_1.v22();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).k23 = function (value) {
    return this.e52_1.l51(this.f52_1, new JsonLiteral(value, false, this.g52_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.l51(this$0.d2h(), node);
      return Unit_instance;
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.z50_1 = json;
    this.a51_1 = nodeConsumer;
    this.b51_1 = this.z50_1.b4q_1;
    this.c51_1 = null;
    this.d51_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).k4s = function () {
    return this.z50_1;
  };
  protoOf(AbstractJsonTreeEncoder).v22 = function () {
    return this.z50_1.v22();
  };
  protoOf(AbstractJsonTreeEncoder).j2g = function (descriptor, index) {
    return getJsonElementName(descriptor, this.z50_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).d24 = function (descriptor, index) {
    return this.b51_1.o4r_1;
  };
  protoOf(AbstractJsonTreeEncoder).n2g = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).b24 = function () {
  };
  protoOf(AbstractJsonTreeEncoder).b23 = function () {
    var tmp0_elvis_lhs = this.m2g();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.a51_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.n51(tag);
  };
  protoOf(AbstractJsonTreeEncoder).n51 = function (tag) {
    return this.l51(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).q2g = function (tag) {
    return this.n51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).o51 = function (tag, value) {
    return this.l51(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).r2g = function (tag, value) {
    return this.o51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).p51 = function (tag, value) {
    return this.l51(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).s2g = function (tag, value) {
    return this.p51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).q51 = function (tag, value) {
    return this.l51(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).t2g = function (tag, value) {
    return this.q51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).r51 = function (tag, value) {
    return this.l51(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).u2g = function (tag, value) {
    return this.r51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).s51 = function (tag, value) {
    this.l51(tag, JsonPrimitive_1(value));
    if (!this.b51_1.y4r_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.m51()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).v2g = function (tag, value) {
    return this.s51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).y23 = function (serializer, value) {
    if (!(this.m2g() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.t1y(), this.v22()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.k4s().b4q_1.w4r_1) {
          serializer.u1y(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.k4s().b4q_1.e4s_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.k4s().b4q_1.e4s_1.r2_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.t1y().k20();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.t1y(), this.k4s()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.t1y()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer_0(casted, this, value);
          if (!(baseClassDiscriminator == null)) {
            access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
            checkKind_0(actual.t1y().k20());
          }
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          var serialName = actualSerializer.t1y().u1z();
          this.c51_1 = baseClassDiscriminator;
          this.d51_1 = serialName;
        }
        actualSerializer.u1y(this, value);
      }
    } else {
      // Inline function 'kotlin.apply' call
      (new JsonPrimitiveEncoder(this.z50_1, this.a51_1)).y23(serializer, value);
    }
  };
  protoOf(AbstractJsonTreeEncoder).t51 = function (tag, value) {
    this.l51(tag, JsonPrimitive_1(value));
    if (!this.b51_1.y4r_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.m51()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).w2g = function (tag, value) {
    return this.t51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).u51 = function (tag, value) {
    return this.l51(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).x2g = function (tag, value) {
    return this.u51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).v51 = function (tag, value) {
    return this.l51(tag, JsonPrimitive_0(toString_1(value)));
  };
  protoOf(AbstractJsonTreeEncoder).y2g = function (tag, value) {
    return this.v51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).w51 = function (tag, value) {
    return this.l51(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).z2g = function (tag, value) {
    return this.w51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).x51 = function (tag, enumDescriptor, ordinal) {
    return this.l51(tag, JsonPrimitive_0(enumDescriptor.o20(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).a2h = function (tag, enumDescriptor, ordinal) {
    return this.x51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).y51 = function (tag, value) {
    this.l51(tag, JsonPrimitive_0(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).o2g = function (tag, value) {
    return this.y51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).z51 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).b2h.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).b2h = function (tag, inlineDescriptor) {
    return this.z51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).m23 = function (descriptor) {
    var tmp;
    if (!(this.m2g() == null)) {
      if (!(this.c51_1 == null))
        this.d51_1 = descriptor.u1z();
      tmp = protoOf(NamedValueEncoder).m23.call(this, descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.z50_1, this.a51_1)).m23(descriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).g22 = function (descriptor) {
    var tmp;
    if (this.m2g() == null) {
      tmp = this.a51_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.k20();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.z50_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.z50_1;
        var keyDescriptor = carrierDescriptor(descriptor.r20(0), this_0.v22());
        var keyKind = keyDescriptor.k20();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.z50_1, consumer);
        } else {
          if (this_0.b4q_1.r4r_1) {
            tmp_2 = new JsonTreeListEncoder(this.z50_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.z50_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.c51_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.l51('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.d51_1;
        encoder.l51('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.u1z() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.d51_1;
        encoder.l51(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.u1z() : tmp2_elvis_lhs));
      }
      this.c51_1 = null;
      this.d51_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).c2h = function (descriptor) {
    this.a51_1(this.m51());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.k20();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.k20() === ENUM_getInstance();
    }
    return tmp;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.w52_1 = null;
    this.e2h('primitive');
  }
  protoOf(JsonPrimitiveEncoder).l51 = function (key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.w52_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.w52_1 = element;
    this.a51_1(element);
  };
  protoOf(JsonPrimitiveEncoder).m51 = function () {
    var tmp0 = this.w52_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        var message = 'Primitive element has not been recorded. Is call to .encodeXxx is missing in serializer?';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  function JsonTreeListEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.d53_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonTreeListEncoder).j2g = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).l51 = function (key, element) {
    var idx = toInt(key);
    this.d53_1.g2(idx, element);
  };
  protoOf(JsonTreeListEncoder).m51 = function () {
    return new JsonArray(this.d53_1);
  };
  function _get_tag__e6h4qf($this) {
    var tmp = $this.o52_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.p52_1 = true;
  }
  protoOf(JsonTreeMapEncoder).l51 = function (key, element) {
    if (this.p52_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.p4s();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().g4t_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().l4t_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.o52_1 = tmp_0;
      this.p52_1 = false;
    } else {
      var tmp0 = this.k51_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.n2(key_0, element);
      this.p52_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).m51 = function () {
    return new JsonObject(this.k51_1);
  };
  function writeJson$lambda($result) {
    return function (it) {
      $result._v = it;
      return Unit_instance;
    };
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
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
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.i4y_1 = begin;
    this.j4y_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.k20();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.r20(0), _this__u8e3s4.v22());
          var keyKind = keyDescriptor.k20();
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
            if (_this__u8e3s4.b4q_1.r4r_1) {
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
    if (equals(_this__u8e3s4.k20(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.l20()) {
      tmp = carrierDescriptor(_this__u8e3s4.r20(0), module_0);
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
    $this.e53(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.e53(lastPosition, currentPosition);
    var result = $this.t4q_1.toString();
    $this.t4q_1.ce(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.s4q_1);
    $this.s4q_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.f53(), $this.q4q_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.g53(currentPosition);
    if (currentPosition === -1) {
      $this.f4v('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.f53();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.f53(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.f4v("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.t4q_1.y8(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.q4q_1 = startPos;
      $this.h53();
      if (($this.q4q_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.f4v('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.q4q_1);
    }
    $this.t4q_1.y8(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.f4v("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.g53(start);
    if (current >= charSequenceLength($this.f53()) || current === -1) {
      $this.f4v('EOF');
    }
    var tmp = $this.f53();
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
        $this.f4v("Expected valid boolean literal prefix, but had '" + $this.n4w() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.f53()) - current | 0) < literalSuffix.length) {
      $this.f4v('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.f53(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.f4v("Expected valid boolean literal prefix, but had '" + $this.n4w() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.q4q_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.r3();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.r3();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.q4q_1 = 0;
    this.r4q_1 = new JsonPath();
    this.s4q_1 = null;
    this.t4q_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).h53 = function () {
  };
  protoOf(AbstractJsonLexer).y4x = function () {
    var current = this.i53();
    var source = this.f53();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.q4q_1 = this.q4q_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).j53 = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).u4q = function () {
    var nextToken = this.p4w();
    if (!(nextToken === 10)) {
      this.f4v('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.f53(), this.q4q_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).j4w = function (expected) {
    var token = this.p4w();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.q4q_1 - 1 | 0 : this.q4q_1;
      var s = this.q4q_1 === charSequenceLength(this.f53()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.f53(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.f4v(tmp$ret$0, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).k53 = function (expected) {
    if (this.q4q_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.q4q_1;
        try {
          this.q4q_1 = this.q4q_1 - 1 | 0;
          tmp$ret$1 = this.n4w();
          break $l$block;
        }finally {
          this.q4q_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.e4v("Expected string literal but 'null' literal was found", this.q4q_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.q4q_1 - 1 | 0 : this.q4q_1;
    var s = this.q4q_1 === charSequenceLength(this.f53()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.f53(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.f4v(tmp$ret$2, position);
  };
  protoOf(AbstractJsonLexer).k4w = function () {
    var source = this.f53();
    var cpos = this.q4q_1;
    $l$loop_0: while (true) {
      cpos = this.g53(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.q4q_1 = cpos;
      return charToTokenClass(ch);
    }
    this.q4q_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).z4x = function (doConsume) {
    var current = this.i53();
    current = this.g53(current);
    var len = charSequenceLength(this.f53()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.f53(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.f53(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.q4q_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).k4y = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.z4x(doConsume) : $super.z4x.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).a4y = function (isLenient) {
    var token = this.k4w();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.n4w();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.m4w();
    }
    var string = tmp;
    this.s4q_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).l53 = function () {
    this.s4q_1 = null;
  };
  protoOf(AbstractJsonLexer).f1h = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.f53();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).m4w = function () {
    if (!(this.s4q_1 == null)) {
      return takePeeked(this);
    }
    return this.d4y();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.g53(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.f4v('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.e53(lastPosition, currentPosition);
          currentPosition = this.g53(currentPosition);
          if (currentPosition === -1) {
            this.f4v('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.f1h(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.q4q_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).e4y = function () {
    var result = this.n4w();
    if (result === 'null' && wasUnquotedString(this)) {
      this.f4v("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).n4w = function () {
    if (!(this.s4q_1 == null)) {
      return takePeeked(this);
    }
    var current = this.i53();
    if (current >= charSequenceLength(this.f53()) || current === -1) {
      this.f4v('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.f53(), current));
    if (token === 1) {
      return this.m4w();
    }
    if (!(token === 0)) {
      this.f4v('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.f53(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.f53(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.f53())) {
        usedAppend = true;
        this.e53(this.q4q_1, current);
        var eof = this.g53(current);
        if (eof === -1) {
          this.q4q_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.f1h(this.q4q_1, current);
    } else {
      tmp = decodedString(this, this.q4q_1, current);
    }
    var result = tmp;
    this.q4q_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).e53 = function (fromIndex, toIndex) {
    this.t4q_1.wd(this.f53(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).c4y = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.k4w();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.n4w();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.k4w();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.n4w();
        else
          this.d4y();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.n(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.q4q_1, 'found ] instead of } at path: ' + this.r4q_1.toString(), this.f53());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.q4q_1, 'found } instead of ] at path: ' + this.r4q_1.toString(), this.f53());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.f4v('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.p4w();
      if (tokenStack.s() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.f53()) + "', currentPosition=" + this.q4q_1 + ')';
  };
  protoOf(AbstractJsonLexer).b4y = function (key) {
    var processed = this.f1h(0, this.q4q_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.r4q_1.s4v() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.f53(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).e4v = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.r4q_1.s4v() + hintMessage, this.f53());
  };
  protoOf(AbstractJsonLexer).f4v = function (message, position, hint, $super) {
    position = position === VOID ? this.q4q_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.e4v(message, position, hint) : $super.e4v.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).m4y = function () {
    var current = this.i53();
    current = this.g53(current);
    if (current >= charSequenceLength(this.f53()) || current === -1) {
      this.f4v('EOF');
    }
    var tmp;
    if (charSequenceGet(this.f53(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.f53())) {
        this.f4v('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.f53()))) {
      var ch = charSequenceGet(this.f53(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.f4v('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.f4v("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.f4v("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.f4v("Unexpected symbol '-' in numeric literal");
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
        this.f4v("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.b3(toLong(10)).z2(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.b3(toLong(10)).a3(toLong(digit));
      if (accumulator.e1(new Long(0, 0)) > 0) {
        this.f4v('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.f4v('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.f4v('EOF');
      }
      if (!(charSequenceGet(this.f53(), current) === _Char___init__impl__6a9atx(34))) {
        this.f4v('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.q4q_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.r3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).r3() || doubleAccumulator < (new Long(0, -2147483648)).r3()) {
        this.f4v('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.f4v("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.g3();
    } else {
      this.f4v('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).z4s = function () {
    var result = this.m4y();
    var next = this.p4w();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.q4q_1 - 1 | 0 : this.q4q_1;
      var s = this.q4q_1 === charSequenceLength(this.f53()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.f53(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.f4v(tmp$ret$0, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).l4y = function () {
    var current = this.i53();
    if (current === charSequenceLength(this.f53())) {
      this.f4v('EOF');
    }
    var tmp;
    if (charSequenceGet(this.f53(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.q4q_1 === charSequenceLength(this.f53())) {
        this.f4v('EOF');
      }
      if (!(charSequenceGet(this.f53(), this.q4q_1) === _Char___init__impl__6a9atx(34))) {
        this.f4v('Expected closing quotation mark');
      }
      this.q4q_1 = this.q4q_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().n53_1;
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
    return c < 117 ? CharMappings_getInstance().m53_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.m53_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.n53_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.m53_1 = charArray(117);
    this.n53_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).p4w = function () {
    var source = this.f53();
    var cpos = this.i53();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.q4q_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).l4w = function () {
    var current = this.i53();
    if (current >= this.f53().length || current === -1)
      return false;
    return this.j53(charSequenceGet(this.f53(), current));
  };
  protoOf(StringJsonLexerWithComments).x4x = function (expected) {
    var source = this.f53();
    var current = this.i53();
    if (current >= source.length || current === -1) {
      this.q4q_1 = -1;
      this.k53(expected);
    }
    var c = charSequenceGet(source, current);
    this.q4q_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.k53(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).k4w = function () {
    var source = this.f53();
    var cpos = this.i53();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.q4q_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).i53 = function () {
    var current = this.q4q_1;
    if (current === -1)
      return current;
    var source = this.f53();
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
            this.q4q_1 = source.length;
            this.f4v('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.q4q_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.x53_1 = source;
  }
  protoOf(StringJsonLexer).f53 = function () {
    return this.x53_1;
  };
  protoOf(StringJsonLexer).g53 = function (position) {
    return position < this.f53().length ? position : -1;
  };
  protoOf(StringJsonLexer).p4w = function () {
    var source = this.f53();
    var cpos = this.q4q_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.q4q_1 = cpos;
      return charToTokenClass(c);
    }
    this.q4q_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).l4w = function () {
    var current = this.q4q_1;
    if (current === -1)
      return false;
    var source = this.f53();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.q4q_1 = current;
      return this.j53(c);
    }
    this.q4q_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).i53 = function () {
    var current = this.q4q_1;
    if (current === -1)
      return current;
    var source = this.f53();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.q4q_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).x4x = function (expected) {
    if (this.q4q_1 === -1) {
      this.k53(expected);
    }
    var source = this.f53();
    var cpos = this.q4q_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.q4q_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.k53(expected);
    }
    this.q4q_1 = -1;
    this.k53(expected);
  };
  protoOf(StringJsonLexer).d4y = function () {
    this.x4x(_Char___init__impl__6a9atx(34));
    var current = this.q4q_1;
    var closingQuote = indexOf_0(this.f53(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.n4w();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.q4q_1 - 1 | 0 : this.q4q_1;
      var s = this.q4q_1 === charSequenceLength(this.f53()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.f53(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.f4v(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.f53(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.f53(), this.q4q_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.q4q_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.f53().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).f4y = function (keyToMatch, isLenient) {
    var positionSnapshot = this.q4q_1;
    try {
      if (!(this.p4w() === 6))
        return null;
      var firstKey = this.a4y(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.l53();
      if (!(this.p4w() === 5))
        return null;
      return this.a4y(isLenient);
    }finally {
      this.q4q_1 = positionSnapshot;
      this.l53();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.b4q_1.d4s_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.d4q_1;
  }
  function JsonToStringWriter() {
    this.h4q_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).j4u = function (value) {
    this.h4q_1.ae(value);
  };
  protoOf(JsonToStringWriter).d4u = function (char) {
    this.h4q_1.y8(char);
  };
  protoOf(JsonToStringWriter).f4u = function (text) {
    this.h4q_1.x8(text);
  };
  protoOf(JsonToStringWriter).p4u = function (text) {
    printQuoted(this.h4q_1, text);
  };
  protoOf(JsonToStringWriter).h1e = function () {
    this.h4q_1.de();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.h4q_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).g20 = get_isNullable;
  protoOf(defer$1).l20 = get_isInline;
  protoOf(defer$1).n20 = get_annotations;
  protoOf(JsonSerializersModuleValidator).i2k = contextual;
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
  _.$_$.b = Companion_instance;
  _.$_$.c = JsonElementSerializer_getInstance;
  _.$_$.d = JsonNull_getInstance;
  _.$_$.e = Companion_instance_0;
  _.$_$.f = JsonObjectSerializer_getInstance;
  _.$_$.g = Companion_instance_1;
  _.$_$.h = JsonArrayBuilder;
  _.$_$.i = JsonArray;
  _.$_$.j = JsonClassDiscriminator;
  _.$_$.k = JsonContentPolymorphicSerializer;
  _.$_$.l = JsonElement;
  _.$_$.m = JsonNull;
  _.$_$.n = JsonObjectBuilder;
  _.$_$.o = JsonObject;
  _.$_$.p = JsonPrimitive_0;
  _.$_$.q = JsonPrimitive_1;
  _.$_$.r = JsonPrimitive_2;
  _.$_$.s = JsonPrimitive;
  _.$_$.t = Json_0;
  _.$_$.u = add;
  _.$_$.v = get_boolean;
  _.$_$.w = get_contentOrNull;
  _.$_$.x = get_int;
  _.$_$.y = get_jsonArray;
  _.$_$.z = get_jsonObject;
  _.$_$.a1 = get_jsonPrimitive;
  _.$_$.b1 = get_long;
  _.$_$.c1 = put_1;
  _.$_$.d1 = put;
  _.$_$.e1 = put_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
