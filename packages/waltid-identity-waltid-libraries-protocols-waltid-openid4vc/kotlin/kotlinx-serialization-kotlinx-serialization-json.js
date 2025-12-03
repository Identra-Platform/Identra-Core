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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var protoOf = kotlin_kotlin.$_$.ce;
  var initMetadataForObject = kotlin_kotlin.$_$.ed;
  var VOID = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var initMetadataForClass = kotlin_kotlin.$_$.yc;
  var toString = kotlin_kotlin.$_$.ge;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var charSequenceLength = kotlin_kotlin.$_$.oc;
  var charSequenceGet = kotlin_kotlin.$_$.nc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var equals = kotlin_kotlin.$_$.sc;
  var THROW_CCE = kotlin_kotlin.$_$.nj;
  var getStringHashCode = kotlin_kotlin.$_$.wc;
  var toString_0 = kotlin_kotlin.$_$.sk;
  var Enum = kotlin_kotlin.$_$.aj;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b3;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var isInterface = kotlin_kotlin.$_$.nd;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var initMetadataForInterface = kotlin_kotlin.$_$.cd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.zc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r1;
  var hashCode = kotlin_kotlin.$_$.xc;
  var joinToString = kotlin_kotlin.$_$.e9;
  var KtMap = kotlin_kotlin.$_$.w6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var KtList = kotlin_kotlin.$_$.t6;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var numberRangeToNumber = kotlin_kotlin.$_$.wd;
  var ClosedRange = kotlin_kotlin.$_$.le;
  var contains = kotlin_kotlin.$_$.qe;
  var getBooleanHashCode = kotlin_kotlin.$_$.uc;
  var toDouble = kotlin_kotlin.$_$.uh;
  var toDoubleOrNull = kotlin_kotlin.$_$.th;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.y5;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nk;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var toLongOrNull = kotlin_kotlin.$_$.zh;
  var toULongOrNull = kotlin_kotlin.$_$.gi;
  var ULong = kotlin_kotlin.$_$.vj;
  var Companion_getInstance = kotlin_kotlin.$_$.j6;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y4;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.qh;
  var lazy = kotlin_kotlin.$_$.mk;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var KProperty1 = kotlin_kotlin.$_$.xe;
  var getPropertyCallableRef = kotlin_kotlin.$_$.vc;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var toLong = kotlin_kotlin.$_$.ee;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l4;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.q4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.x4;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.z4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c4;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.e4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.g5;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.i5;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var captureStack = kotlin_kotlin.$_$.kc;
  var charSequenceSubSequence = kotlin_kotlin.$_$.pc;
  var coerceAtLeast = kotlin_kotlin.$_$.ne;
  var coerceAtMost = kotlin_kotlin.$_$.oe;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var Collection = kotlin_kotlin.$_$.o6;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var singleOrNull = kotlin_kotlin.$_$.la;
  var emptyMap = kotlin_kotlin.$_$.l8;
  var getValue = kotlin_kotlin.$_$.y8;
  var copyOf = kotlin_kotlin.$_$.d8;
  var copyOf_0 = kotlin_kotlin.$_$.e8;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.yi;
  var invoke = kotlin_kotlin.$_$.gk;
  var CoroutineImpl = kotlin_kotlin.$_$.cc;
  var DeepRecursiveScope = kotlin_kotlin.$_$.zi;
  var Unit = kotlin_kotlin.$_$.yj;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.mb;
  var initMetadataForLambda = kotlin_kotlin.$_$.dd;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ad;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var getKClass = kotlin_kotlin.$_$.g;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var ensureNotNull = kotlin_kotlin.$_$.fk;
  var substringBefore = kotlin_kotlin.$_$.oh;
  var removeSuffix = kotlin_kotlin.$_$.zg;
  var substringAfter = kotlin_kotlin.$_$.lh;
  var contains_0 = kotlin_kotlin.$_$.rf;
  var plus = kotlin_kotlin.$_$.ok;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var IllegalArgumentException = kotlin_kotlin.$_$.dj;
  var isFinite = kotlin_kotlin.$_$.ik;
  var isFinite_0 = kotlin_kotlin.$_$.hk;
  var toUInt = kotlin_kotlin.$_$.fi;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.n4;
  var toULong = kotlin_kotlin.$_$.hi;
  var toUByte = kotlin_kotlin.$_$.ei;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d4;
  var toUShort = kotlin_kotlin.$_$.ii;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.h5;
  var objectCreate = kotlin_kotlin.$_$.be;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var toString_1 = kotlin_kotlin.$_$.u3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.i6;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.h6;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.k6;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var setOf = kotlin_kotlin.$_$.ka;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  var numberToChar = kotlin_kotlin.$_$.xd;
  var equals_0 = kotlin_kotlin.$_$.ag;
  var toByte = kotlin_kotlin.$_$.de;
  var startsWith = kotlin_kotlin.$_$.gh;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var single = kotlin_kotlin.$_$.dh;
  var Char = kotlin_kotlin.$_$.vi;
  var emptySet = kotlin_kotlin.$_$.m8;
  var plus_0 = kotlin_kotlin.$_$.aa;
  var toInt = kotlin_kotlin.$_$.xh;
  var toList = kotlin_kotlin.$_$.wa;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.rk;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var enumEntries = kotlin_kotlin.$_$.ec;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var last = kotlin_kotlin.$_$.l9;
  var removeLast = kotlin_kotlin.$_$.ha;
  var lastIndexOf = kotlin_kotlin.$_$.rg;
  var Long = kotlin_kotlin.$_$.fj;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.o3;
  var numberToLong = kotlin_kotlin.$_$.ae;
  var charArray = kotlin_kotlin.$_$.mc;
  var indexOf = kotlin_kotlin.$_$.gg;
  var indexOf_0 = kotlin_kotlin.$_$.hg;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.q1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.y;
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
  initMetadataForObject(JsonArrayDescriptor, 'JsonArrayDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(JsonArraySerializer, 'JsonArraySerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonPrimitiveSerializer, 'JsonPrimitiveSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonNullSerializer, 'JsonNullSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(JsonLiteralSerializer, 'JsonLiteralSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(defer$1, VOID, VOID, VOID, [SerialDescriptor]);
  initMetadataForInterface(JsonEncoder, 'JsonEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForClass(JsonTransformingSerializer, 'JsonTransformingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerForUnsignedNumbers, 'ComposerForUnsignedNumbers', VOID, Composer);
  initMetadataForClass(ComposerForUnquotedLiterals, 'ComposerForUnquotedLiterals', VOID, Composer);
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
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
    this.e4s_1 = configuration;
    this.f4s_1 = serializersModule;
    this.g4s_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).y24 = function () {
    return this.f4s_1;
  };
  protoOf(Json).b22 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.k1g();
    }
  };
  protoOf(Json).c22 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.w20(), null);
    var result = input.i24(deserializer);
    lexer.x4s();
    return result;
  };
  protoOf(Json).h4s = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).i4s = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).j4s = function (string) {
    return this.c22(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.q4t();
    return new JsonImpl(conf, builder.p4t_1);
  }
  function JsonBuilder(json) {
    this.y4s_1 = json.e4s_1.r4t_1;
    this.z4s_1 = json.e4s_1.w4t_1;
    this.a4t_1 = json.e4s_1.s4t_1;
    this.b4t_1 = json.e4s_1.t4t_1;
    this.c4t_1 = json.e4s_1.v4t_1;
    this.d4t_1 = json.e4s_1.x4t_1;
    this.e4t_1 = json.e4s_1.y4t_1;
    this.f4t_1 = json.e4s_1.a4u_1;
    this.g4t_1 = json.e4s_1.h4u_1;
    this.h4t_1 = json.e4s_1.c4u_1;
    this.i4t_1 = json.e4s_1.d4u_1;
    this.j4t_1 = json.e4s_1.e4u_1;
    this.k4t_1 = json.e4s_1.f4u_1;
    this.l4t_1 = json.e4s_1.g4u_1;
    this.m4t_1 = json.e4s_1.b4u_1;
    this.n4t_1 = json.e4s_1.u4t_1;
    this.o4t_1 = json.e4s_1.z4t_1;
    this.p4t_1 = json.y24();
  }
  protoOf(JsonBuilder).q4t = function () {
    if (this.o4t_1) {
      // Inline function 'kotlin.require' call
      if (!(this.f4t_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.g4t_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.c4t_1) {
      // Inline function 'kotlin.require' call
      if (!(this.d4t_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.d4t_1 === '    ')) {
      var tmp3 = this.d4t_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.d4t_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.y4s_1, this.a4t_1, this.b4t_1, this.n4t_1, this.c4t_1, this.z4s_1, this.d4t_1, this.e4t_1, this.o4t_1, this.f4t_1, this.m4t_1, this.h4t_1, this.i4t_1, this.j4t_1, this.k4t_1, this.l4t_1, this.g4t_1);
  };
  function validateConfiguration($this) {
    if (equals($this.y24(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.e4s_1);
    $this.y24().a2m(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator(discriminator) {
    this.i4u_1 = discriminator;
  }
  protoOf(JsonClassDiscriminator).equals = function (other) {
    if (!(other instanceof JsonClassDiscriminator))
      return false;
    var tmp0_other_with_cast = other instanceof JsonClassDiscriminator ? other : THROW_CCE();
    if (!(this.i4u_1 === tmp0_other_with_cast.i4u_1))
      return false;
    return true;
  };
  protoOf(JsonClassDiscriminator).hashCode = function () {
    return imul(getStringHashCode('discriminator'), 127) ^ getStringHashCode(this.i4u_1);
  };
  protoOf(JsonClassDiscriminator).toString = function () {
    return '@kotlinx.serialization.json.JsonClassDiscriminator(' + 'discriminator=' + this.i4u_1 + ')';
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
    this.r4t_1 = encodeDefaults;
    this.s4t_1 = ignoreUnknownKeys;
    this.t4t_1 = isLenient;
    this.u4t_1 = allowStructuredMapKeys;
    this.v4t_1 = prettyPrint;
    this.w4t_1 = explicitNulls;
    this.x4t_1 = prettyPrintIndent;
    this.y4t_1 = coerceInputValues;
    this.z4t_1 = useArrayPolymorphism;
    this.a4u_1 = classDiscriminator;
    this.b4u_1 = allowSpecialFloatingPointValues;
    this.c4u_1 = useAlternativeNames;
    this.d4u_1 = namingStrategy;
    this.e4u_1 = decodeEnumsCaseInsensitive;
    this.f4u_1 = allowTrailingComma;
    this.g4u_1 = allowComments;
    this.h4u_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.r4t_1 + ', ignoreUnknownKeys=' + this.s4t_1 + ', isLenient=' + this.t4t_1 + ', ' + ('allowStructuredMapKeys=' + this.u4t_1 + ', prettyPrint=' + this.v4t_1 + ', explicitNulls=' + this.w4t_1 + ', ') + ("prettyPrintIndent='" + this.x4t_1 + "', coerceInputValues=" + this.y4t_1 + ', useArrayPolymorphism=' + this.z4t_1 + ', ') + ("classDiscriminator='" + this.a4u_1 + "', allowSpecialFloatingPointValues=" + this.b4u_1 + ', ') + ('useAlternativeNames=' + this.c4u_1 + ', namingStrategy=' + toString_0(this.d4u_1) + ', decodeEnumsCaseInsensitive=' + this.e4u_1 + ', ') + ('allowTrailingComma=' + this.f4u_1 + ', allowComments=' + this.g4u_1 + ', classDiscriminatorMode=' + this.h4u_1.toString() + ')');
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
    var tmp0_elvis_lhs = subClass.hc();
    var subClassName = tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs;
    var scope = "in the scope of '" + baseClass.hc() + "'";
    throw SerializationException_init_$Create$("Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function JsonContentPolymorphicSerializer(baseClass) {
    this.j4u_1 = baseClass;
    this.k4u_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.j4u_1.hc() + '>', SEALED_getInstance(), []);
  }
  protoOf(JsonContentPolymorphicSerializer).w20 = function () {
    return this.k4u_1;
  };
  protoOf(JsonContentPolymorphicSerializer).m21 = function (encoder, value) {
    var tmp0_elvis_lhs = encoder.y24().i26(this.j4u_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.j4u_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).x20(encoder, value);
  };
  protoOf(JsonContentPolymorphicSerializer).x20 = function (encoder, value) {
    return this.m21(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(JsonContentPolymorphicSerializer).y20 = function (decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.l4u();
    var tmp = this.m4u(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.n4u().i4s(actualSerializer, tree);
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
  protoOf(Companion).o4u = function () {
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
  protoOf(Companion_0).o4u = function () {
    return JsonObjectSerializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.b1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.c1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.p(_Char___init__impl__6a9atx(58));
    this_0.y8(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.p4u_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.p4u_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.p4u_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.p4u_1.a1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).h = function () {
    return this.p4u_1.h();
  };
  protoOf(JsonObject).u2p = function (key) {
    return this.p4u_1.l2(key);
  };
  protoOf(JsonObject).l2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.u2p((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).q4u = function (value) {
    return this.p4u_1.m2(value);
  };
  protoOf(JsonObject).m2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.q4u(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).bf = function (key) {
    return this.p4u_1.n2(key);
  };
  protoOf(JsonObject).n2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.bf((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.p4u_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).t = function () {
    return this.p4u_1.t();
  };
  protoOf(JsonObject).o2 = function () {
    return this.p4u_1.o2();
  };
  protoOf(JsonObject).p2 = function () {
    return this.p4u_1.p2();
  };
  protoOf(JsonObject).a1 = function () {
    return this.p4u_1.a1();
  };
  function Companion_1() {
  }
  protoOf(Companion_1).o4u = function () {
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
    return this.s4u();
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
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.s4u());
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
    this.t4u_1 = 'null';
  }
  protoOf(JsonNull).r4u = function () {
    return false;
  };
  protoOf(JsonNull).s4u = function () {
    return this.t4u_1;
  };
  protoOf(JsonNull).o4u = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).z2c = function (typeParamsSerializers) {
    return this.o4u();
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
      tmp = _this__u8e3s4.s4u();
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
    this.u4u_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.u4u_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.u4u_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.u4u_1, ',', '[', ']');
  };
  protoOf(JsonArray).h = function () {
    return this.u4u_1.h();
  };
  protoOf(JsonArray).v4u = function (element) {
    return this.u4u_1.x(element);
  };
  protoOf(JsonArray).x = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.v4u(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).q = function () {
    return this.u4u_1.q();
  };
  protoOf(JsonArray).w4u = function (elements) {
    return this.u4u_1.c2(elements);
  };
  protoOf(JsonArray).c2 = function (elements) {
    return this.w4u(elements);
  };
  protoOf(JsonArray).v = function (index) {
    return this.u4u_1.v(index);
  };
  protoOf(JsonArray).x4u = function (element) {
    return this.u4u_1.y(element);
  };
  protoOf(JsonArray).y = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.x4u(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).y4u = function (element) {
    return this.u4u_1.d2(element);
  };
  protoOf(JsonArray).d2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.y4u(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).e2 = function () {
    return this.u4u_1.e2();
  };
  protoOf(JsonArray).w = function (index) {
    return this.u4u_1.w(index);
  };
  protoOf(JsonArray).f2 = function (fromIndex, toIndex) {
    return this.u4u_1.f2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.u4u_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).t = function () {
    return this.u4u_1.t();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.s4u() + ' is not an Int');
    return result.m1();
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.s4u());
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.z4u_1 = isString;
    this.a4v_1 = coerceToInlineType;
    this.b4v_1 = toString(body);
    if (!(this.a4v_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.a4v_1.o22()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).r4u = function () {
    return this.z4u_1;
  };
  protoOf(JsonLiteral).s4u = function () {
    return this.b4v_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.z4u_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.b4v_1);
      tmp = this_0.toString();
    } else {
      tmp = this.b4v_1;
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
    if (!(this.z4u_1 === other.z4u_1))
      return false;
    if (!(this.b4v_1 === other.b4v_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.z4u_1);
    result = imul(31, result) + getStringHashCode(this.b4v_1) | 0;
    return result;
  };
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.s4u())).c4v();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.s4u();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.s4u());
  }
  function get_longOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlinx.serialization.json.exceptionToNull' call
    var tmp;
    try {
      tmp = parseLongImpl(_this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof JsonDecodingException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function get_doubleOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDoubleOrNull(_this__u8e3s4.s4u());
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
    tmp.d4v_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).e4v = function (key, element) {
    return this.d4v_1.q2(key, element);
  };
  protoOf(JsonObjectBuilder).q4t = function () {
    return new JsonObject(this.d4v_1);
  };
  function put(_this__u8e3s4, key, value) {
    return _this__u8e3s4.e4v(key, JsonPrimitive_0(value));
  }
  function put_0(_this__u8e3s4, key, value) {
    return _this__u8e3s4.e4v(key, JsonPrimitive_2(value));
  }
  function put_1(_this__u8e3s4, key, value) {
    return _this__u8e3s4.e4v(key, JsonPrimitive_1(value));
  }
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.f4v_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).g4v = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.f4v_1.n(element);
    return true;
  };
  protoOf(JsonArrayBuilder).q4t = function () {
    return new JsonArray(this.f4v_1);
  };
  function add(_this__u8e3s4, value) {
    return _this__u8e3s4.g4v(JsonPrimitive_0(value));
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.h4v_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).w20();
    this.i4v_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).x21 = function () {
    return this.i4v_1;
  };
  protoOf(JsonObjectDescriptor).r22 = function (index) {
    return this.h4v_1.r22(index);
  };
  protoOf(JsonObjectDescriptor).s22 = function (name) {
    return this.h4v_1.s22(name);
  };
  protoOf(JsonObjectDescriptor).t22 = function (index) {
    return this.h4v_1.t22(index);
  };
  protoOf(JsonObjectDescriptor).u22 = function (index) {
    return this.h4v_1.u22(index);
  };
  protoOf(JsonObjectDescriptor).v22 = function (index) {
    return this.h4v_1.v22(index);
  };
  protoOf(JsonObjectDescriptor).n22 = function () {
    return this.h4v_1.n22();
  };
  protoOf(JsonObjectDescriptor).j22 = function () {
    return this.h4v_1.j22();
  };
  protoOf(JsonObjectDescriptor).o22 = function () {
    return this.h4v_1.o22();
  };
  protoOf(JsonObjectDescriptor).p22 = function () {
    return this.h4v_1.p22();
  };
  protoOf(JsonObjectDescriptor).q22 = function () {
    return this.h4v_1.q22();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.j4v_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).w20 = function () {
    return this.j4v_1;
  };
  protoOf(JsonObjectSerializer).k4v = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).x20(encoder, value);
  };
  protoOf(JsonObjectSerializer).x20 = function (encoder, value) {
    return this.k4v(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).y20 = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).y20(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.k21('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.k21('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.k21('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.k21('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.k21('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().l4v_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().m4v_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().n4v_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().j4v_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().o4v_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.p4v_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).w20 = function () {
    return this.p4v_1;
  };
  protoOf(JsonElementSerializer).q4v = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.b26(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.b26(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.b26(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).x20 = function (encoder, value) {
    return this.q4v(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).y20 = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.l4u();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonArrayDescriptor() {
    JsonArrayDescriptor_instance = this;
    this.r4v_1 = ListSerializer(JsonElementSerializer_getInstance()).w20();
    this.s4v_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).x21 = function () {
    return this.s4v_1;
  };
  protoOf(JsonArrayDescriptor).r22 = function (index) {
    return this.r4v_1.r22(index);
  };
  protoOf(JsonArrayDescriptor).s22 = function (name) {
    return this.r4v_1.s22(name);
  };
  protoOf(JsonArrayDescriptor).t22 = function (index) {
    return this.r4v_1.t22(index);
  };
  protoOf(JsonArrayDescriptor).u22 = function (index) {
    return this.r4v_1.u22(index);
  };
  protoOf(JsonArrayDescriptor).v22 = function (index) {
    return this.r4v_1.v22(index);
  };
  protoOf(JsonArrayDescriptor).n22 = function () {
    return this.r4v_1.n22();
  };
  protoOf(JsonArrayDescriptor).j22 = function () {
    return this.r4v_1.j22();
  };
  protoOf(JsonArrayDescriptor).o22 = function () {
    return this.r4v_1.o22();
  };
  protoOf(JsonArrayDescriptor).p22 = function () {
    return this.r4v_1.p22();
  };
  protoOf(JsonArrayDescriptor).q22 = function () {
    return this.r4v_1.q22();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.o4v_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).w20 = function () {
    return this.o4v_1;
  };
  protoOf(JsonArraySerializer).t4v = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).x20(encoder, value);
  };
  protoOf(JsonArraySerializer).x20 = function (encoder, value) {
    return this.t4v(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).y20 = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).y20(decoder));
  };
  var JsonArraySerializer_instance;
  function JsonArraySerializer_getInstance() {
    if (JsonArraySerializer_instance == null)
      new JsonArraySerializer();
    return JsonArraySerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.l4v_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).w20 = function () {
    return this.l4v_1;
  };
  protoOf(JsonPrimitiveSerializer).u4v = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.b26(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.b26(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).x20 = function (encoder, value) {
    return this.u4v(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).y20 = function (decoder) {
    var result = asJsonDecoder(decoder).l4u();
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
    this.m4v_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).w20 = function () {
    return this.m4v_1;
  };
  protoOf(JsonNullSerializer).v4v = function (encoder, value) {
    verify(encoder);
    encoder.e25();
  };
  protoOf(JsonNullSerializer).x20 = function (encoder, value) {
    return this.v4v(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).y20 = function (decoder) {
    verify_0(decoder);
    if (decoder.u23()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.v23();
    return JsonNull_getInstance();
  };
  var JsonNullSerializer_instance;
  function JsonNullSerializer_getInstance() {
    if (JsonNullSerializer_instance == null)
      new JsonNullSerializer();
    return JsonNullSerializer_instance;
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
    this.n4v_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).w20 = function () {
    return this.n4v_1;
  };
  protoOf(JsonLiteralSerializer).w4v = function (encoder, value) {
    verify(encoder);
    if (value.z4u_1) {
      return encoder.n25(value.b4v_1);
    }
    if (!(value.a4v_1 == null)) {
      return encoder.p25(value.a4v_1).n25(value.b4v_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.b4v_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.j25(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.b4v_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).kr_1;
      var tmp_1 = encoder.p25(serializer_0(Companion_getInstance()).w20());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.j25(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.b4v_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.l25(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.b4v_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.f25(tmp3_safe_receiver);
    }
    encoder.n25(value.b4v_1);
  };
  protoOf(JsonLiteralSerializer).x20 = function (encoder, value) {
    return this.w4v(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).y20 = function (decoder) {
    var result = asJsonDecoder(decoder).l4u();
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
    var tmp0 = $this.x4v_1;
    // Inline function 'kotlin.getValue' call
    original$factory();
    return tmp0.c1();
  }
  function defer$1($deferred) {
    this.x4v_1 = lazy($deferred);
  }
  protoOf(defer$1).x21 = function () {
    return _get_original__l7ku1m(this).x21();
  };
  protoOf(defer$1).n22 = function () {
    return _get_original__l7ku1m(this).n22();
  };
  protoOf(defer$1).p22 = function () {
    return _get_original__l7ku1m(this).p22();
  };
  protoOf(defer$1).r22 = function (index) {
    return _get_original__l7ku1m(this).r22(index);
  };
  protoOf(defer$1).s22 = function (name) {
    return _get_original__l7ku1m(this).s22(name);
  };
  protoOf(defer$1).t22 = function (index) {
    return _get_original__l7ku1m(this).t22(index);
  };
  protoOf(defer$1).u22 = function (index) {
    return _get_original__l7ku1m(this).u22(index);
  };
  protoOf(defer$1).v22 = function (index) {
    return _get_original__l7ku1m(this).v22(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function JsonTransformingSerializer(tSerializer) {
    this.z4v_1 = tSerializer;
  }
  protoOf(JsonTransformingSerializer).w20 = function () {
    return this.z4v_1.w20();
  };
  protoOf(JsonTransformingSerializer).m21 = function (encoder, value) {
    var output = asJsonEncoder(encoder);
    var element = writeJson(output.n4u(), value, this.z4v_1);
    element = this.a4w(element);
    output.y4v(element);
  };
  protoOf(JsonTransformingSerializer).x20 = function (encoder, value) {
    return this.m21(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(JsonTransformingSerializer).y20 = function (decoder) {
    var input = asJsonDecoder(decoder);
    var element = input.l4u();
    return input.n4u().i4s(this.z4v_1, this.b4w(element));
  };
  protoOf(JsonTransformingSerializer).b4w = function (element) {
    return element;
  };
  protoOf(JsonTransformingSerializer).a4w = function (element) {
    return element;
  };
  function Composer(writer) {
    this.c4w_1 = writer;
    this.d4w_1 = true;
  }
  protoOf(Composer).e4w = function () {
    this.d4w_1 = true;
  };
  protoOf(Composer).f4w = function () {
    return Unit_instance;
  };
  protoOf(Composer).g4w = function () {
    this.d4w_1 = false;
  };
  protoOf(Composer).h4w = function () {
    this.d4w_1 = false;
  };
  protoOf(Composer).i4w = function () {
    return Unit_instance;
  };
  protoOf(Composer).j4w = function (v) {
    return this.c4w_1.k4w(v);
  };
  protoOf(Composer).l4w = function (v) {
    return this.c4w_1.m4w(v);
  };
  protoOf(Composer).n4w = function (v) {
    return this.c4w_1.m4w(v.toString());
  };
  protoOf(Composer).o4w = function (v) {
    return this.c4w_1.m4w(v.toString());
  };
  protoOf(Composer).p4w = function (v) {
    return this.c4w_1.q4w(toLong(v));
  };
  protoOf(Composer).r4w = function (v) {
    return this.c4w_1.q4w(toLong(v));
  };
  protoOf(Composer).s4w = function (v) {
    return this.c4w_1.q4w(toLong(v));
  };
  protoOf(Composer).t4w = function (v) {
    return this.c4w_1.q4w(v);
  };
  protoOf(Composer).u4w = function (v) {
    return this.c4w_1.m4w(v.toString());
  };
  protoOf(Composer).v4w = function (value) {
    return this.c4w_1.w4w(value);
  };
  function Composer_0(sb, json) {
    return json.e4s_1.v4t_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.z4w_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).s4w = function (v) {
    if (this.z4w_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.v4w(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.l4w(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).t4w = function (v) {
    if (this.z4w_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.v4w(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.l4w(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).p4w = function (v) {
    if (this.z4w_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.v4w(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.l4w(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).r4w = function (v) {
    if (this.z4w_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.v4w(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.l4w(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.c4x_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).v4w = function (value) {
    if (this.c4x_1) {
      protoOf(Composer).v4w.call(this, value);
    } else {
      protoOf(Composer).l4w.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.f4x_1 = json;
    this.g4x_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).e4w = function () {
    this.d4w_1 = true;
    this.g4x_1 = this.g4x_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).f4w = function () {
    this.g4x_1 = this.g4x_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).g4w = function () {
    this.d4w_1 = false;
    this.l4w('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.g4x_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.l4w(this.f4x_1.e4s_1.x4t_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).h4w = function () {
    if (this.d4w_1)
      this.d4w_1 = false;
    else {
      this.g4w();
    }
  };
  protoOf(ComposerWithPrettyPrint).i4w = function () {
    this.j4w(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.i4x_1 = (!descriptor.v22(index) && descriptor.u22(index).j22());
    return $this.i4x_1;
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
    tmp.h4x_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.i4x_1 = false;
  }
  protoOf(JsonElementMarker).j4x = function (index) {
    this.h4x_1.p2a(index);
  };
  protoOf(JsonElementMarker).k4x = function () {
    return this.h4x_1.q2a();
  };
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
  }
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.l4x('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.t4s_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.m4x('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.x21() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.n22().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    if (json.e4s_1.s4t_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.q22();
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
        var _iterator__ex2g4s = tmp0.q();
        while (_iterator__ex2g4s.r()) {
          var element = _iterator__ex2g4s.s();
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
    var index = _this__u8e3s4.s22(name);
    if (!(index === -3))
      return index;
    if (!json.e4s_1.c4u_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.x21() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.r22(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.n22(), CLASS_getInstance()) ? json.e4s_1.d4u_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.o4x(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.e4s_1.e4u_1 && equals(descriptor.n22(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).n2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.o4x(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.p22();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.t22(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.q();
        while (_iterator__ex2g4s.r()) {
          var element = _iterator__ex2g4s.s();
          if (element instanceof JsonNames) {
            destination.n(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p4x_1;
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
          tmp_0 = _this__u8e3s4.r22(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.q4x(_this__u8e3s4, i, _this__u8e3s4.r22(i));
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
    var entity = equals($this_buildDeserializationNamesMap.n22(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).l2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.r22(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.r22(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.q2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.p22();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.r22(tmp_2);
        tmp_1[tmp_2] = $strategy.q4x($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.t4x_1, 2);
    $this.r4x_1 = copyOf($this.r4x_1, newSize);
    $this.s4x_1 = copyOf_0($this.s4x_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.r4x_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.s4x_1 = tmp_2;
    this.t4x_1 = -1;
  }
  protoOf(JsonPath).u4x = function (sd) {
    this.t4x_1 = this.t4x_1 + 1 | 0;
    var depth = this.t4x_1;
    if (depth === this.r4x_1.length) {
      resize(this);
    }
    this.r4x_1[depth] = sd;
  };
  protoOf(JsonPath).v4x = function (index) {
    this.s4x_1[this.t4x_1] = index;
  };
  protoOf(JsonPath).w4x = function (key) {
    var tmp;
    if (!(this.s4x_1[this.t4x_1] === -2)) {
      this.t4x_1 = this.t4x_1 + 1 | 0;
      tmp = this.t4x_1 === this.r4x_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.r4x_1[this.t4x_1] = key;
    this.s4x_1[this.t4x_1] = -2;
  };
  protoOf(JsonPath).x4x = function () {
    if (this.s4x_1[this.t4x_1] === -2) {
      this.r4x_1[this.t4x_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).y4x = function () {
    var depth = this.t4x_1;
    if (this.s4x_1[depth] === -2) {
      this.s4x_1[depth] = -1;
      this.t4x_1 = this.t4x_1 - 1 | 0;
    }
    if (!(this.t4x_1 === -1)) {
      this.t4x_1 = this.t4x_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).z4x = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.z8('$');
    // Inline function 'kotlin.repeat' call
    var times = this.t4x_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.r4x_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.n22(), LIST_getInstance())) {
            if (!(this.s4x_1[index] === -1)) {
              this_0.z8('[');
              this_0.be(this.s4x_1[index]);
              this_0.z8(']');
            }
          } else {
            var idx = this.s4x_1[index];
            if (idx >= 0) {
              this_0.z8('.');
              this_0.z8(element.r22(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.z8('[');
            this_0.z8("'");
            this_0.y8(element);
            this_0.z8("'");
            this_0.z8(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.z4x();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.n22();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.hc() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.b4y_1)
      return Unit_instance;
    if (!$this.c4y_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.hc() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.p22();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.r22(i);
        if (name === $this.a4y_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function JsonSerializersModuleValidator(configuration) {
    this.a4y_1 = configuration.a4u_1;
    this.b4y_1 = configuration.z4t_1;
    this.c4y_1 = !configuration.h4u_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).j2m = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).m2m = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.w20();
    checkKind(this, descriptor, actualClass);
    if (!this.b4y_1 && this.c4y_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(JsonSerializersModuleValidator).n2m = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).o2m = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().t();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.b26(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.m4y_1.q4y(6);
    if ($this.m4y_1.r4y() === 4) {
      $this.m4y_1.m4x('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.m4y_1.s4y()) {
      var key = $this.n4y_1 ? $this.m4y_1.u4y() : $this.m4y_1.t4y();
      $this.m4y_1.q4y(5);
      var element = $this.v4y();
      // Inline function 'kotlin.collections.set' call
      result.q2(key, element);
      lastToken = $this.m4y_1.w4y();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.m4y_1.m4x('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.m4y_1.q4y(7);
    } else if (lastToken === 4) {
      if (!$this.o4y_1) {
        invalidTrailingComma($this.m4y_1);
      }
      $this.m4y_1.q4y(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, _this__u8e3s4, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  }
  function readArray($this) {
    var lastToken = $this.m4y_1.w4y();
    if ($this.m4y_1.r4y() === 4) {
      $this.m4y_1.m4x('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.m4y_1.s4y()) {
      var element = $this.v4y();
      result.n(element);
      lastToken = $this.m4y_1.w4y();
      if (!(lastToken === 4)) {
        var tmp0 = $this.m4y_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.t4s_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.m4x(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.m4y_1.q4y(9);
    } else if (lastToken === 4) {
      if (!$this.o4y_1) {
        invalidTrailingComma($this.m4y_1, 'array');
      }
      $this.m4y_1.q4y(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.n4y_1 || !isString) {
      tmp = $this.m4y_1.u4y();
    } else {
      tmp = $this.m4y_1.t4y();
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
    this.u4z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).z4z = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.a50($this$DeepRecursiveFunction, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.z4z(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.x4z_1 = this.u4z_1.m4y_1.r4y();
            if (this.x4z_1 === 1) {
              this.y4z_1 = readValue(this.u4z_1, true);
              this.n9_1 = 2;
              continue $sm;
            } else {
              if (this.x4z_1 === 0) {
                this.y4z_1 = readValue(this.u4z_1, false);
                this.n9_1 = 2;
                continue $sm;
              } else {
                if (this.x4z_1 === 6) {
                  this.n9_1 = 1;
                  suspendResult = readObject_0(this.u4z_1, this.v4z_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.x4z_1 === 8) {
                    this.y4z_1 = readArray(this.u4z_1);
                    this.n9_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.u4z_1.m4y_1.m4x("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.y4z_1 = suspendResult;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return this.y4z_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).a50 = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.u4z_1, completion);
    i.v4z_1 = $this$DeepRecursiveFunction;
    i.w4z_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.z4z($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f4z_1 = _this__u8e3s4;
    this.g4z_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 5;
            var tmp_0 = this;
            tmp_0.h4z_1 = this.f4z_1;
            this.i4z_1 = this.h4z_1;
            this.j4z_1 = this.i4z_1.m4y_1.q4y(6);
            if (this.i4z_1.m4y_1.r4y() === 4) {
              this.i4z_1.m4y_1.m4x('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.k4z_1 = LinkedHashMap_init_$Create$();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.i4z_1.m4y_1.s4y()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.l4z_1 = this.i4z_1.n4y_1 ? this.i4z_1.m4y_1.u4y() : this.i4z_1.m4y_1.t4y();
            this.i4z_1.m4y_1.q4y(5);
            this.n9_1 = 2;
            suspendResult = this.g4z_1.kp(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.k4z_1;
            var key = this.l4z_1;
            tmp0.q2(key, element);
            this.j4z_1 = this.i4z_1.m4y_1.w4y();
            var tmp0_subject = this.j4z_1;
            if (tmp0_subject === 4) {
              this.n9_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.n9_1 = 4;
                continue $sm;
              } else {
                this.i4z_1.m4y_1.m4x('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.n9_1 = 1;
            continue $sm;
          case 4:
            if (this.j4z_1 === 6) {
              this.i4z_1.m4y_1.q4y(7);
            } else if (this.j4z_1 === 4) {
              if (!this.i4z_1.o4y_1) {
                invalidTrailingComma(this.i4z_1.m4y_1);
              }
              this.i4z_1.m4y_1.q4y(7);
            }

            return new JsonObject(this.k4z_1);
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
  function JsonTreeReader(configuration, lexer) {
    this.m4y_1 = lexer;
    this.n4y_1 = configuration.t4t_1;
    this.o4y_1 = configuration.f4u_1;
    this.p4y_1 = 0;
  }
  protoOf(JsonTreeReader).v4y = function () {
    var token = this.m4y_1.r4y();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.p4y_1 = this.p4y_1 + 1 | 0;
      if (this.p4y_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.p4y_1 = this.p4y_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.m4y_1.m4x('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.q22().q();
    while (_iterator__ex2g4s.r()) {
      var annotation = _iterator__ex2g4s.s();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.i4u_1;
    }
    return json.e4s_1.a4u_1;
  }
  function throwJsonElementPolymorphicException(serialName, element) {
    throw new JsonEncodingException('Class with serial name ' + serialName + ' cannot be serialized polymorphically because it is represented as ' + getKClassFromExpression(element).hc() + '. Make sure that its JsonTransformingSerializer returns JsonObject, so class discriminator can be added to it.');
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.w20()).x(classDiscriminator)) {
      var baseName = serializer.w20().x21();
      var actualName = actualSerializer.w20().x21();
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
    this.n4x_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).b50 = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.n4x_1;
    var value_0 = this_0.n2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.q2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.q2(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).o4x = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.c50(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.b50(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).c50 = function (descriptor, key) {
    var tmp0_safe_receiver = this.n4x_1.n2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.n2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.d50_1 = discriminatorToSkip;
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.d50_1 === unknownKey) {
      _this__u8e3s4.d50_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.a25(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.n4s_1.r4y() === 4) {
      $this.n4s_1.m4x('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.p4s_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.p4s_1 === -1)) {
        hasComma = $this.n4s_1.f50();
      }
    } else {
      $this.n4s_1.e50(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.n4s_1.s4y()) {
      if (decodingKey) {
        if ($this.p4s_1 === -1) {
          var tmp0 = $this.n4s_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.t4s_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.m4x(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.n4s_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.t4s_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp3.m4x(tmp$ret$2, position_0);
          }
        }
      }
      $this.p4s_1 = $this.p4s_1 + 1 | 0;
      tmp = $this.p4s_1;
    } else {
      if (hasComma && !$this.l4s_1.e4s_1.f4u_1) {
        invalidTrailingComma($this.n4s_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.l4s_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.v22(index);
      var elementDescriptor = descriptor.u22(index);
      var tmp;
      if (isOptional && !elementDescriptor.j22()) {
        tmp = $this.n4s_1.g50(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.n22(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.j22()) {
          tmp_0 = $this.n4s_1.g50(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.n4s_1.h50($this.r4s_1.t4t_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.e4s_1.w4t_1 && elementDescriptor.j22();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.n4s_1.t4y();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.n4s_1.f50();
    while ($this.n4s_1.s4y()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.n4s_1.e50(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.l4s_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.r4s_1.y4t_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.n4s_1.f50();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.s4s_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.j4x(index);
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
    if (hasComma && !$this.l4s_1.e4s_1.f4u_1) {
      invalidTrailingComma($this.n4s_1);
    }
    var tmp1_safe_receiver = $this.s4s_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.k4x();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.l4s_1) || trySkip($this, $this.q4s_1, key)) {
      $this.n4s_1.j50($this.r4s_1.t4t_1);
    } else {
      $this.n4s_1.u4s_1.y4x();
      $this.n4s_1.i50(key);
    }
    return $this.n4s_1.f50();
  }
  function decodeListIndex($this) {
    var hasComma = $this.n4s_1.f50();
    var tmp;
    if ($this.n4s_1.s4y()) {
      if (!($this.p4s_1 === -1) && !hasComma) {
        $this.n4s_1.m4x('Expected end of the array or comma');
      }
      $this.p4s_1 = $this.p4s_1 + 1 | 0;
      tmp = $this.p4s_1;
    } else {
      if (hasComma && !$this.l4s_1.e4s_1.f4u_1) {
        invalidTrailingComma($this.n4s_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.r4s_1.t4t_1) {
      tmp = $this.n4s_1.l50();
    } else {
      tmp = $this.n4s_1.k50();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.l4s_1 = json;
    this.m4s_1 = mode;
    this.n4s_1 = lexer;
    this.o4s_1 = this.l4s_1.y24();
    this.p4s_1 = -1;
    this.q4s_1 = discriminatorHolder;
    this.r4s_1 = this.l4s_1.e4s_1;
    this.s4s_1 = this.r4s_1.w4t_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).n4u = function () {
    return this.l4s_1;
  };
  protoOf(StreamingJsonDecoder).y24 = function () {
    return this.o4s_1;
  };
  protoOf(StreamingJsonDecoder).l4u = function () {
    return (new JsonTreeReader(this.l4s_1.e4s_1, this.n4s_1)).v4y();
  };
  protoOf(StreamingJsonDecoder).i24 = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.l4s_1.e4s_1.z4t_1;
      }
      if (tmp) {
        return deserializer.y20(this);
      }
      var discriminator = classDiscriminator(deserializer.w20(), this.l4s_1);
      var tmp0_elvis_lhs = this.n4s_1.m50(discriminator, this.r4s_1.t4t_1);
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
            tmp_1 = this.n4u().e4s_1.z4t_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.y20(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.w20(), this.n4u());
          var tmp0 = this.l4u();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.w20().x21();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).hc();
            var tmp_3 = getKClassFromExpression(tmp0).hc();
            var tmp$ret$1 = this.n4s_1.u4s_1.z4x();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.bf(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.n4u(), discriminator_0, jsonTree, actualSerializer);
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
          this.n4s_1.m4x(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.q4s_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.y20(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.d22_1, plus(e.message, ' at path: ') + this.n4s_1.u4s_1.z4x(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).j24 = function (descriptor) {
    var newMode = switchMode(this.l4s_1, descriptor);
    this.n4s_1.u4s_1.u4x(descriptor);
    this.n4s_1.e50(newMode.p50_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.u2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.l4s_1, newMode, this.n4s_1, descriptor, this.q4s_1);
        break;
      default:
        var tmp_0;
        if (this.m4s_1.equals(newMode) && this.l4s_1.e4s_1.w4t_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.l4s_1, newMode, this.n4s_1, descriptor, this.q4s_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).k24 = function (descriptor) {
    if (descriptor.p22() === 0 && ignoreUnknownKeys(descriptor, this.l4s_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.n4s_1.f50() && !this.l4s_1.e4s_1.f4u_1) {
      invalidTrailingComma(this.n4s_1, '');
    }
    this.n4s_1.e50(this.m4s_1.q50_1);
    this.n4s_1.u4s_1.y4x();
  };
  protoOf(StreamingJsonDecoder).u23 = function () {
    var tmp;
    var tmp0_safe_receiver = this.s4s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i4x_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.n4s_1.r50();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).v23 = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).v24 = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.m4s_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.n4s_1.u4s_1.x4x();
    }
    var value = protoOf(AbstractDecoder).v24.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.n4s_1.u4s_1.w4x(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).a25 = function (descriptor) {
    var index;
    switch (this.m4s_1.u2_1) {
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
    if (!this.m4s_1.equals(WriteMode_MAP_getInstance())) {
      this.n4s_1.u4s_1.v4x(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).w23 = function () {
    return this.n4s_1.s50();
  };
  protoOf(StreamingJsonDecoder).x23 = function () {
    var value = this.n4s_1.t50();
    if (!value.equals(toLong(value.s3()))) {
      this.n4s_1.m4x("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.s3();
  };
  protoOf(StreamingJsonDecoder).y23 = function () {
    var value = this.n4s_1.t50();
    if (!value.equals(toLong(value.t3()))) {
      this.n4s_1.m4x("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.t3();
  };
  protoOf(StreamingJsonDecoder).z23 = function () {
    var value = this.n4s_1.t50();
    if (!value.equals(toLong(value.m1()))) {
      this.n4s_1.m4x("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.m1();
  };
  protoOf(StreamingJsonDecoder).a24 = function () {
    return this.n4s_1.t50();
  };
  protoOf(StreamingJsonDecoder).b24 = function () {
    var tmp0 = this.n4s_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4y();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.m4x("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.l4s_1.e4s_1.b4u_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.n4s_1, result);
  };
  protoOf(StreamingJsonDecoder).c24 = function () {
    var tmp0 = this.n4s_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4y();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.m4x("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.l4s_1.e4s_1.b4u_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.n4s_1, result);
  };
  protoOf(StreamingJsonDecoder).d24 = function () {
    var string = this.n4s_1.u4y();
    if (!(string.length === 1)) {
      this.n4s_1.m4x("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).e24 = function () {
    var tmp;
    if (this.r4s_1.t4t_1) {
      tmp = this.n4s_1.l50();
    } else {
      tmp = this.n4s_1.t4y();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).g24 = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.n4s_1, this.l4s_1) : protoOf(AbstractDecoder).g24.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).f24 = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.l4s_1, this.e24(), ' at path ' + this.n4s_1.u4s_1.z4x());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.u50_1 = lexer;
    this.v50_1 = json.y24();
  }
  protoOf(JsonDecoderForUnsignedTypes).y24 = function () {
    return this.v50_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).a25 = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).z23 = function () {
    var tmp0 = this.u50_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4y();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.m4x("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).a24 = function () {
    var tmp0 = this.u50_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4y();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.m4x("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).x23 = function () {
    var tmp0 = this.u50_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4y();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.m4x("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).y23 = function () {
    var tmp0 = this.u50_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.u4y();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.m4x("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
    $this.d4y_1.g4w();
    $this.n25(discriminator);
    $this.d4y_1.j4w(_Char___init__impl__6a9atx(58));
    $this.d4y_1.i4w();
    $this.n25(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.d4y_1 = composer;
    this.e4y_1 = json;
    this.f4y_1 = mode;
    this.g4y_1 = modeReuseCache;
    this.h4y_1 = this.e4y_1.y24();
    this.i4y_1 = this.e4y_1.e4s_1;
    this.j4y_1 = false;
    this.k4y_1 = null;
    this.l4y_1 = null;
    var i = this.f4y_1.u2_1;
    if (!(this.g4y_1 == null)) {
      if (!(this.g4y_1[i] === null) || !(this.g4y_1[i] === this)) {
        this.g4y_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).n4u = function () {
    return this.e4y_1;
  };
  protoOf(StreamingJsonEncoder).y24 = function () {
    return this.h4y_1;
  };
  protoOf(StreamingJsonEncoder).y4v = function (element) {
    var tmp;
    if (!(this.k4y_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.l4y_1, element);
    }
    this.b26(JsonElementSerializer_getInstance(), element);
  };
  protoOf(StreamingJsonEncoder).g26 = function (descriptor, index) {
    return this.i4y_1.r4t_1;
  };
  protoOf(StreamingJsonEncoder).b26 = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.n4u().e4s_1.z4t_1) {
        serializer.x20(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.n4u().e4s_1.h4u_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.n4u().e4s_1.h4u_1.u2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.w20().n22();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.w20(), this.n4u()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.w20()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.w20().n22());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.w20().x21();
        this.k4y_1 = baseClassDiscriminator;
        this.l4y_1 = serialName;
      }
      actualSerializer.x20(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).j24 = function (descriptor) {
    var newMode = switchMode(this.e4y_1, descriptor);
    if (!(newMode.p50_1 === _Char___init__impl__6a9atx(0))) {
      this.d4y_1.j4w(newMode.p50_1);
      this.d4y_1.e4w();
    }
    var discriminator = this.k4y_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.l4y_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.x21() : tmp0_elvis_lhs);
      this.k4y_1 = null;
      this.l4y_1 = null;
    }
    if (this.f4y_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.g4y_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.u2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.d4y_1, this.e4y_1, newMode, this.g4y_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).k24 = function (descriptor) {
    if (!(this.f4y_1.q50_1 === _Char___init__impl__6a9atx(0))) {
      this.d4y_1.f4w();
      this.d4y_1.h4w();
      this.d4y_1.j4w(this.f4y_1.q50_1);
    }
  };
  protoOf(StreamingJsonEncoder).c25 = function (descriptor, index) {
    switch (this.f4y_1.u2_1) {
      case 1:
        if (!this.d4y_1.d4w_1) {
          this.d4y_1.j4w(_Char___init__impl__6a9atx(44));
        }

        this.d4y_1.g4w();
        break;
      case 2:
        if (!this.d4y_1.d4w_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.d4y_1.j4w(_Char___init__impl__6a9atx(44));
            this.d4y_1.g4w();
            tmp_0 = true;
          } else {
            this.d4y_1.j4w(_Char___init__impl__6a9atx(58));
            this.d4y_1.i4w();
            tmp_0 = false;
          }
          tmp.j4y_1 = tmp_0;
        } else {
          this.j4y_1 = true;
          this.d4y_1.g4w();
        }

        break;
      case 3:
        if (index === 0)
          this.j4y_1 = true;
        if (index === 1) {
          this.d4y_1.j4w(_Char___init__impl__6a9atx(44));
          this.d4y_1.i4w();
          this.j4y_1 = false;
        }

        break;
      default:
        if (!this.d4y_1.d4w_1) {
          this.d4y_1.j4w(_Char___init__impl__6a9atx(44));
        }

        this.d4y_1.g4w();
        this.n25(getJsonElementName(descriptor, this.e4y_1, index));
        this.d4y_1.j4w(_Char___init__impl__6a9atx(58));
        this.d4y_1.i4w();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).c26 = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.i4y_1.w4t_1) {
      protoOf(AbstractEncoder).c26.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).p25 = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.d4y_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.d4y_1;
      } else {
        var tmp1 = this.d4y_1.c4w_1;
        var p1 = this.j4y_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp1, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.e4y_1, this.f4y_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.d4y_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.d4y_1;
      } else {
        var tmp4 = this.d4y_1.c4w_1;
        var p1_0 = this.j4y_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp4, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.e4y_1, this.f4y_1, null);
    } else if (!(this.k4y_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.l4y_1 = descriptor.x21();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).p25.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).e25 = function () {
    this.d4y_1.l4w('null');
  };
  protoOf(StreamingJsonEncoder).f25 = function (value) {
    if (this.j4y_1) {
      this.n25(value.toString());
    } else {
      this.d4y_1.u4w(value);
    }
  };
  protoOf(StreamingJsonEncoder).g25 = function (value) {
    if (this.j4y_1) {
      this.n25(value.toString());
    } else {
      this.d4y_1.p4w(value);
    }
  };
  protoOf(StreamingJsonEncoder).h25 = function (value) {
    if (this.j4y_1) {
      this.n25(value.toString());
    } else {
      this.d4y_1.r4w(value);
    }
  };
  protoOf(StreamingJsonEncoder).i25 = function (value) {
    if (this.j4y_1) {
      this.n25(value.toString());
    } else {
      this.d4y_1.s4w(value);
    }
  };
  protoOf(StreamingJsonEncoder).j25 = function (value) {
    if (this.j4y_1) {
      this.n25(value.toString());
    } else {
      this.d4y_1.t4w(value);
    }
  };
  protoOf(StreamingJsonEncoder).k25 = function (value) {
    if (this.j4y_1) {
      this.n25(value.toString());
    } else {
      this.d4y_1.n4w(value);
    }
    if (!this.i4y_1.b4u_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.d4y_1.c4w_1));
    }
  };
  protoOf(StreamingJsonEncoder).l25 = function (value) {
    if (this.j4y_1) {
      this.n25(value.toString());
    } else {
      this.d4y_1.o4w(value);
    }
    if (!this.i4y_1.b4u_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.d4y_1.c4w_1));
    }
  };
  protoOf(StreamingJsonEncoder).m25 = function (value) {
    this.n25(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).n25 = function (value) {
    return this.d4y_1.v4w(value);
  };
  protoOf(StreamingJsonEncoder).o25 = function (enumDescriptor, index) {
    this.n25(enumDescriptor.r22(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.o22() && get_unsignedNumberDescriptors().x(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.o22() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).w20(), serializer_0(Companion_getInstance()).w20(), serializer_2(Companion_getInstance_1()).w20(), serializer_3(Companion_getInstance_2()).w20()]);
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
    _this__u8e3s4.p(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.xd(value, lastPos, i);
          _this__u8e3s4.z8(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.xd(value, lastPos, value.length);
    else
      _this__u8e3s4.z8(value);
    _this__u8e3s4.p(_Char___init__impl__6a9atx(34));
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
    return input.i24(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.c51(tag), toString($this.d51()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.y50_1 = json;
    this.z50_1 = value;
    this.a51_1 = polymorphicDiscriminator;
    this.b51_1 = this.n4u().e4s_1;
  }
  protoOf(AbstractJsonTreeDecoder).n4u = function () {
    return this.y50_1;
  };
  protoOf(AbstractJsonTreeDecoder).c1 = function () {
    return this.z50_1;
  };
  protoOf(AbstractJsonTreeDecoder).y24 = function () {
    return this.n4u().y24();
  };
  protoOf(AbstractJsonTreeDecoder).d51 = function () {
    var tmp0_safe_receiver = this.p2i();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.e51(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.c1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).c51 = function (currentTag) {
    return this.n2j() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).l4u = function () {
    return this.d51();
  };
  protoOf(AbstractJsonTreeDecoder).i24 = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.n4u().e4s_1.z4t_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.y20(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.w20(), this.n4u());
      var tmp0 = this.l4u();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.w20().x21();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).hc();
        var tmp_1 = getKClassFromExpression(tmp0).hc();
        var tmp$ret$1 = this.n2j();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.bf(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.n4u(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).q2i = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).j24 = function (descriptor) {
    var currentObject = this.d51();
    var tmp0_subject = descriptor.n22();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.n4u();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.x21();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).hc();
        var tmp_3 = getKClassFromExpression(currentObject).hc();
        var tmp$ret$0 = this.n2j();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.n4u();
        var keyDescriptor = carrierDescriptor(descriptor.u22(0), this_0.y24());
        var keyKind = keyDescriptor.n22();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.n4u();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.x21();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).hc();
            var tmp_8 = getKClassFromExpression(currentObject).hc();
            var tmp$ret$3 = this.n2j();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.e4s_1.u4t_1) {
            var tmp_9 = this.n4u();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.x21();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).hc();
              var tmp_11 = getKClassFromExpression(currentObject).hc();
              var tmp$ret$7 = this.n2j();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.n4u();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.x21();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).hc();
          var tmp_14 = getKClassFromExpression(currentObject).hc();
          var tmp$ret$12 = this.n2j();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.a51_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).k24 = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).u23 = function () {
    var tmp = this.d51();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).f51 = function (tag, enumDescriptor) {
    var tmp = this.n4u();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp1 = this.e51(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.x21();
    if (!(tmp1 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).hc();
      var tmp_1 = getKClassFromExpression(tmp1).hc();
      var tmp$ret$0 = this.c51(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp1.s4u());
  };
  protoOf(AbstractJsonTreeDecoder).z2j = function (tag, enumDescriptor) {
    return this.f51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).g51 = function (tag) {
    return !(this.e51(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).p2j = function (tag) {
    return this.g51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h51 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e51(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.c51(tag);
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
  protoOf(AbstractJsonTreeDecoder).q2j = function (tag) {
    return this.h51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i51 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e51(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.c51(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.s3();
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
  protoOf(AbstractJsonTreeDecoder).r2j = function (tag) {
    return this.i51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j51 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e51(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.c51(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.t3();
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
  protoOf(AbstractJsonTreeDecoder).s2j = function (tag) {
    return this.j51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k51 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e51(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.c51(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.m1();
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
  protoOf(AbstractJsonTreeDecoder).t2j = function (tag) {
    return this.k51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l51 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e51(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.c51(tag);
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
  protoOf(AbstractJsonTreeDecoder).u2j = function (tag) {
    return this.l51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m51 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e51(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.c51(tag);
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
    var specialFp = this.n4u().e4s_1.b4u_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.d51()));
  };
  protoOf(AbstractJsonTreeDecoder).v2j = function (tag) {
    return this.m51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n51 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e51(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.c51(tag);
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
    var specialFp = this.n4u().e4s_1.b4u_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.d51()));
  };
  protoOf(AbstractJsonTreeDecoder).w2j = function (tag) {
    return this.n51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o51 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.e51(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.c51(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.s4u()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.q1_1;
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
  protoOf(AbstractJsonTreeDecoder).x2j = function (tag) {
    return this.o51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p51 = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.e51(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).hc();
      var tmp_0 = getKClassFromExpression(value).hc();
      var tmp$ret$0 = this.c51(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.c51(tag), toString(this.d51()));
    if (!value_0.z4u_1 && !this.n4u().e4s_1.t4t_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.c51(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.d51()));
    }
    return value_0.b4v_1;
  };
  protoOf(AbstractJsonTreeDecoder).y2j = function (tag) {
    return this.p51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q51 = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.n4u();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp1 = this.e51(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.x21();
      if (!(tmp1 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).hc();
        var tmp_2 = getKClassFromExpression(tmp1).hc();
        var tmp$ret$0 = this.c51(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp1.s4u());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.n4u());
    } else {
      tmp = protoOf(NamedValueDecoder).a2k.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).a2k = function (tag, inlineDescriptor) {
    return this.q51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).g24 = function (descriptor) {
    return !(this.p2i() == null) ? protoOf(NamedValueDecoder).g24.call(this, descriptor) : (new JsonPrimitiveDecoder(this.n4u(), this.c1(), this.a51_1)).g24(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.n4u();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.v22(index);
      var elementDescriptor = descriptor.u22(index);
      var tmp;
      if (isOptional && !elementDescriptor.j22()) {
        var tmp_0 = $this.e51(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.n22(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.j22()) {
          var tmp_2 = $this.e51(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp_3 = $this.e51(tag);
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
        var coerceToNull = !tmp0.e4s_1.w4t_1 && elementDescriptor.j22();
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
    $this.a52_1 = (!$this.n4u().e4s_1.w4t_1 && !descriptor.v22(index) && descriptor.u22(index).j22());
    return $this.a52_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.x51_1 = value;
    this.y51_1 = polyDescriptor;
    this.z51_1 = 0;
    this.a52_1 = false;
  }
  protoOf(JsonTreeDecoder).c1 = function () {
    return this.x51_1;
  };
  protoOf(JsonTreeDecoder).a25 = function (descriptor) {
    while (this.z51_1 < descriptor.p22()) {
      var _unary__edvuaz = this.z51_1;
      this.z51_1 = _unary__edvuaz + 1 | 0;
      var name = this.l2i(descriptor, _unary__edvuaz);
      var index = this.z51_1 - 1 | 0;
      this.a52_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.c1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).l2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.b51_1.y4t_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).u23 = function () {
    return !this.a52_1 && protoOf(AbstractJsonTreeDecoder).u23.call(this);
  };
  protoOf(JsonTreeDecoder).m2i = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.n4u());
    var baseName = descriptor.r22(index);
    if (strategy == null) {
      if (!this.b51_1.c4u_1)
        return baseName;
      if (this.c1().o2().x(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.n4u(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.c1().o2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.q();
      while (_iterator__ex2g4s.r()) {
        var element = _iterator__ex2g4s.s();
        if (deserializationNamesMap_0.n2(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.q4x(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).e51 = function (tag) {
    return getValue(this.c1(), tag);
  };
  protoOf(JsonTreeDecoder).j24 = function (descriptor) {
    if (descriptor === this.y51_1) {
      var tmp = this.n4u();
      var tmp1 = this.d51();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.y51_1.x21();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).hc();
        var tmp_1 = getKClassFromExpression(tmp1).hc();
        var tmp$ret$0 = this.n2j();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.a51_1, this.y51_1);
    }
    return protoOf(AbstractJsonTreeDecoder).j24.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).k24 = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.n4u())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.n22();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.n4u());
    var tmp_1;
    if (strategy == null && !this.b51_1.c4u_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.n4u(), descriptor).o2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.n4u()).c50(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.c1().o2().q();
    while (_iterator__ex2g4s.r()) {
      var key = _iterator__ex2g4s.s();
      if (!names.x(key) && !(key === this.a51_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.n2j() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.c1().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.h52_1 = value;
    this.i52_1 = this.h52_1.t();
    this.j52_1 = -1;
  }
  protoOf(JsonTreeListDecoder).c1 = function () {
    return this.h52_1;
  };
  protoOf(JsonTreeListDecoder).m2i = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).e51 = function (tag) {
    return this.h52_1.v(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).a25 = function (descriptor) {
    while (this.j52_1 < (this.i52_1 - 1 | 0)) {
      this.j52_1 = this.j52_1 + 1 | 0;
      return this.j52_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.q52_1 = value;
    this.h2j('primitive');
  }
  protoOf(JsonPrimitiveDecoder).c1 = function () {
    return this.q52_1;
  };
  protoOf(JsonPrimitiveDecoder).a25 = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).e51 = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.q52_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.b53_1 = value;
    this.c53_1 = toList(this.b53_1.o2());
    this.d53_1 = imul(this.c53_1.t(), 2);
    this.e53_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).c1 = function () {
    return this.b53_1;
  };
  protoOf(JsonTreeMapDecoder).m2i = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.c53_1.v(i);
  };
  protoOf(JsonTreeMapDecoder).a25 = function (descriptor) {
    while (this.e53_1 < (this.d53_1 - 1 | 0)) {
      this.e53_1 = this.e53_1 + 1 | 0;
      return this.e53_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).e51 = function (tag) {
    return (this.e53_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.b53_1, tag);
  };
  protoOf(JsonTreeMapDecoder).k24 = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.w20())).i24(deserializer);
  }
  function writeJson(json, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
    encoder.b26(serializer, value);
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
    tmp.r53_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonTreeEncoder).s53 = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    this.r53_1.q2(key, element);
  };
  protoOf(JsonTreeEncoder).c26 = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.i53_1.w4t_1) {
      protoOf(AbstractJsonTreeEncoder).c26.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).t53 = function () {
    return new JsonObject(this.r53_1);
  };
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.i54_1 = this$0;
    this.j54_1 = $tag;
    AbstractEncoder.call(this);
    this.h54_1 = this$0.g53_1.y24();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).y24 = function () {
    return this.h54_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).k54 = function (s) {
    return this.i54_1.s53(this.j54_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).i25 = function (value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.k54(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).j25 = function (value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.k54(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).g25 = function (value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.k54(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).h25 = function (value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.k54(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.l54_1 = this$0;
    this.m54_1 = $tag;
    this.n54_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).y24 = function () {
    return this.l54_1.g53_1.y24();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).n25 = function (value) {
    return this.l54_1.s53(this.m54_1, new JsonLiteral(value, false, this.n54_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.s53(this$0.g2j(), node);
      return Unit_instance;
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.g53_1 = json;
    this.h53_1 = nodeConsumer;
    this.i53_1 = this.g53_1.e4s_1;
    this.j53_1 = null;
    this.k53_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).n4u = function () {
    return this.g53_1;
  };
  protoOf(AbstractJsonTreeEncoder).y24 = function () {
    return this.g53_1.y24();
  };
  protoOf(AbstractJsonTreeEncoder).m2i = function (descriptor, index) {
    return getJsonElementName(descriptor, this.g53_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).y4v = function (element) {
    var tmp;
    if (!(this.j53_1 == null)) {
      tmp = !(element instanceof JsonObject);
    } else {
      tmp = false;
    }
    if (tmp) {
      throwJsonElementPolymorphicException(this.k53_1, element);
    }
    this.b26(JsonElementSerializer_getInstance(), element);
  };
  protoOf(AbstractJsonTreeEncoder).g26 = function (descriptor, index) {
    return this.i53_1.r4t_1;
  };
  protoOf(AbstractJsonTreeEncoder).q2i = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).e26 = function () {
  };
  protoOf(AbstractJsonTreeEncoder).e25 = function () {
    var tmp0_elvis_lhs = this.p2i();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.h53_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.u53(tag);
  };
  protoOf(AbstractJsonTreeEncoder).u53 = function (tag) {
    return this.s53(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).t2i = function (tag) {
    return this.u53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).v53 = function (tag, value) {
    return this.s53(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).u2i = function (tag, value) {
    return this.v53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).w53 = function (tag, value) {
    return this.s53(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).v2i = function (tag, value) {
    return this.w53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).x53 = function (tag, value) {
    return this.s53(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).w2i = function (tag, value) {
    return this.x53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).y53 = function (tag, value) {
    return this.s53(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).x2i = function (tag, value) {
    return this.y53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).z53 = function (tag, value) {
    this.s53(tag, JsonPrimitive_1(value));
    if (!this.i53_1.b4u_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.t53()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).y2i = function (tag, value) {
    return this.z53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).b26 = function (serializer, value) {
    if (!(this.p2i() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.w20(), this.y24()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.n4u().e4s_1.z4t_1) {
          serializer.x20(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.n4u().e4s_1.h4u_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.n4u().e4s_1.h4u_1.u2_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.w20().n22();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.w20(), this.n4u()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.w20()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer_0(casted, this, value);
          if (!(baseClassDiscriminator == null)) {
            access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
            checkKind_0(actual.w20().n22());
          }
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          var serialName = actualSerializer.w20().x21();
          this.j53_1 = baseClassDiscriminator;
          this.k53_1 = serialName;
        }
        actualSerializer.x20(this, value);
      }
    } else {
      // Inline function 'kotlin.apply' call
      (new JsonPrimitiveEncoder(this.g53_1, this.h53_1)).b26(serializer, value);
    }
  };
  protoOf(AbstractJsonTreeEncoder).a54 = function (tag, value) {
    this.s53(tag, JsonPrimitive_1(value));
    if (!this.i53_1.b4u_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.t53()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).z2i = function (tag, value) {
    return this.a54((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).b54 = function (tag, value) {
    return this.s53(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).a2j = function (tag, value) {
    return this.b54((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).c54 = function (tag, value) {
    return this.s53(tag, JsonPrimitive_0(toString_1(value)));
  };
  protoOf(AbstractJsonTreeEncoder).b2j = function (tag, value) {
    return this.c54((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).d54 = function (tag, value) {
    return this.s53(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).c2j = function (tag, value) {
    return this.d54((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).e54 = function (tag, enumDescriptor, ordinal) {
    return this.s53(tag, JsonPrimitive_0(enumDescriptor.r22(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).d2j = function (tag, enumDescriptor, ordinal) {
    return this.e54((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).f54 = function (tag, value) {
    this.s53(tag, JsonPrimitive_0(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).r2i = function (tag, value) {
    return this.f54((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).g54 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).e2j.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).e2j = function (tag, inlineDescriptor) {
    return this.g54((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).p25 = function (descriptor) {
    var tmp;
    if (!(this.p2i() == null)) {
      if (!(this.j53_1 == null))
        this.k53_1 = descriptor.x21();
      tmp = protoOf(NamedValueEncoder).p25.call(this, descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.g53_1, this.h53_1)).p25(descriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).j24 = function (descriptor) {
    var tmp;
    if (this.p2i() == null) {
      tmp = this.h53_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.n22();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.g53_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.g53_1;
        var keyDescriptor = carrierDescriptor(descriptor.u22(0), this_0.y24());
        var keyKind = keyDescriptor.n22();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.g53_1, consumer);
        } else {
          if (this_0.e4s_1.u4t_1) {
            tmp_2 = new JsonTreeListEncoder(this.g53_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.g53_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.j53_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.s53('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.k53_1;
        encoder.s53('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.x21() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.k53_1;
        encoder.s53(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.x21() : tmp2_elvis_lhs));
      }
      this.j53_1 = null;
      this.k53_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).f2j = function (descriptor) {
    this.h53_1(this.t53());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.n22();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.n22() === ENUM_getInstance();
    }
    return tmp;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.d55_1 = null;
    this.h2j('primitive');
  }
  protoOf(JsonPrimitiveEncoder).s53 = function (key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.d55_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.d55_1 = element;
    this.h53_1(element);
  };
  protoOf(JsonPrimitiveEncoder).t53 = function () {
    var tmp0 = this.d55_1;
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
    tmp.k55_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonTreeListEncoder).m2i = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).s53 = function (key, element) {
    var idx = toInt(key);
    this.k55_1.j2(idx, element);
  };
  protoOf(JsonTreeListEncoder).t53 = function () {
    return new JsonArray(this.k55_1);
  };
  function _get_tag__e6h4qf($this) {
    var tmp = $this.v54_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.w54_1 = true;
  }
  protoOf(JsonTreeMapEncoder).s53 = function (key, element) {
    if (this.w54_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.s4u();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().j4v_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().o4v_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.v54_1 = tmp_0;
      this.w54_1 = false;
    } else {
      var tmp0 = this.r53_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.q2(key_0, element);
      this.w54_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).t53 = function () {
    return new JsonObject(this.r53_1);
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
    this.p50_1 = begin;
    this.q50_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.n22();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.u22(0), _this__u8e3s4.y24());
          var keyKind = keyDescriptor.n22();
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
            if (_this__u8e3s4.e4s_1.u4t_1) {
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
    if (equals(_this__u8e3s4.n22(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.o22()) {
      tmp = carrierDescriptor(_this__u8e3s4.u22(0), module_0);
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
    $this.l55(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.l55(lastPosition, currentPosition);
    var result = $this.w4s_1.toString();
    $this.w4s_1.ee(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.v4s_1);
    $this.v4s_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.m55(), $this.t4s_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.n55(currentPosition);
    if (currentPosition === -1) {
      $this.m4x('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.m55();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.m55(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.m4x("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.w4s_1.p(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.t4s_1 = startPos;
      $this.o55();
      if (($this.t4s_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.m4x('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.t4s_1);
    }
    $this.w4s_1.p(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.m4x("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.n55(start);
    if (current >= charSequenceLength($this.m55()) || current === -1) {
      $this.m4x('EOF');
    }
    var tmp = $this.m55();
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
        $this.m4x("Expected valid boolean literal prefix, but had '" + $this.u4y() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.m55()) - current | 0) < literalSuffix.length) {
      $this.m4x('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.m55(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.m4x("Expected valid boolean literal prefix, but had '" + $this.u4y() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.t4s_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.u3();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.u3();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.t4s_1 = 0;
    this.u4s_1 = new JsonPath();
    this.v4s_1 = null;
    this.w4s_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).o55 = function () {
  };
  protoOf(AbstractJsonLexer).f50 = function () {
    var current = this.p55();
    var source = this.m55();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.t4s_1 = this.t4s_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).q55 = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).x4s = function () {
    var nextToken = this.w4y();
    if (!(nextToken === 10)) {
      this.m4x('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.m55(), this.t4s_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).q4y = function (expected) {
    var token = this.w4y();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.t4s_1 - 1 | 0 : this.t4s_1;
      var s = this.t4s_1 === charSequenceLength(this.m55()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.m55(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.m4x(tmp$ret$0, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).r55 = function (expected) {
    if (this.t4s_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.t4s_1;
        try {
          this.t4s_1 = this.t4s_1 - 1 | 0;
          tmp$ret$1 = this.u4y();
          break $l$block;
        }finally {
          this.t4s_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.l4x("Expected string literal but 'null' literal was found", this.t4s_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.t4s_1 - 1 | 0 : this.t4s_1;
    var s = this.t4s_1 === charSequenceLength(this.m55()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.m55(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.m4x(tmp$ret$2, position);
  };
  protoOf(AbstractJsonLexer).r4y = function () {
    var source = this.m55();
    var cpos = this.t4s_1;
    $l$loop_0: while (true) {
      cpos = this.n55(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.t4s_1 = cpos;
      return charToTokenClass(ch);
    }
    this.t4s_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).g50 = function (doConsume) {
    var current = this.p55();
    current = this.n55(current);
    var len = charSequenceLength(this.m55()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.m55(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.m55(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.t4s_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).r50 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.g50(doConsume) : $super.g50.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).h50 = function (isLenient) {
    var token = this.r4y();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.u4y();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.t4y();
    }
    var string = tmp;
    this.v4s_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).s55 = function () {
    this.v4s_1 = null;
  };
  protoOf(AbstractJsonLexer).i1j = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.m55();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).t4y = function () {
    if (!(this.v4s_1 == null)) {
      return takePeeked(this);
    }
    return this.k50();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.n55(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.m4x('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.l55(lastPosition, currentPosition);
          currentPosition = this.n55(currentPosition);
          if (currentPosition === -1) {
            this.m4x('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.i1j(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.t4s_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).l50 = function () {
    var result = this.u4y();
    if (result === 'null' && wasUnquotedString(this)) {
      this.m4x("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).u4y = function () {
    if (!(this.v4s_1 == null)) {
      return takePeeked(this);
    }
    var current = this.p55();
    if (current >= charSequenceLength(this.m55()) || current === -1) {
      this.m4x('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.m55(), current));
    if (token === 1) {
      return this.t4y();
    }
    if (!(token === 0)) {
      this.m4x('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.m55(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.m55(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.m55())) {
        usedAppend = true;
        this.l55(this.t4s_1, current);
        var eof = this.n55(current);
        if (eof === -1) {
          this.t4s_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.i1j(this.t4s_1, current);
    } else {
      tmp = decodedString(this, this.t4s_1, current);
    }
    var result = tmp;
    this.t4s_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).l55 = function (fromIndex, toIndex) {
    this.w4s_1.xd(this.m55(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).j50 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.r4y();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.u4y();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.r4y();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.u4y();
        else
          this.k50();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.n(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.t4s_1, 'found ] instead of } at path: ' + this.u4s_1.toString(), this.m55());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.t4s_1, 'found } instead of ] at path: ' + this.u4s_1.toString(), this.m55());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.m4x('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.w4y();
      if (tokenStack.t() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.m55()) + "', currentPosition=" + this.t4s_1 + ')';
  };
  protoOf(AbstractJsonLexer).i50 = function (key) {
    var processed = this.i1j(0, this.t4s_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.u4s_1.z4x() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.m55(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).l4x = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.u4s_1.z4x() + hintMessage, this.m55());
  };
  protoOf(AbstractJsonLexer).m4x = function (message, position, hint, $super) {
    position = position === VOID ? this.t4s_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.l4x(message, position, hint) : $super.l4x.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).t50 = function () {
    var current = this.p55();
    current = this.n55(current);
    if (current >= charSequenceLength(this.m55()) || current === -1) {
      this.m4x('EOF');
    }
    var tmp;
    if (charSequenceGet(this.m55(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.m55())) {
        this.m4x('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.m55()))) {
      var ch = charSequenceGet(this.m55(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.m4x('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.m4x("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.m4x("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.m4x("Unexpected symbol '-' in numeric literal");
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
        this.m4x("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.e3(toLong(10)).c3(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.e3(toLong(10)).d3(toLong(digit));
      if (accumulator.h1(new Long(0, 0)) > 0) {
        this.m4x('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.m4x('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.m4x('EOF');
      }
      if (!(charSequenceGet(this.m55(), current) === _Char___init__impl__6a9atx(34))) {
        this.m4x('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.t4s_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.u3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).u3() || doubleAccumulator < (new Long(0, -2147483648)).u3()) {
        this.m4x('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.m4x("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.j3();
    } else {
      this.m4x('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).c4v = function () {
    var result = this.t50();
    var next = this.w4y();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.t4s_1 - 1 | 0 : this.t4s_1;
      var s = this.t4s_1 === charSequenceLength(this.m55()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.m55(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.m4x(tmp$ret$0, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).s50 = function () {
    var current = this.p55();
    if (current === charSequenceLength(this.m55())) {
      this.m4x('EOF');
    }
    var tmp;
    if (charSequenceGet(this.m55(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.t4s_1 === charSequenceLength(this.m55())) {
        this.m4x('EOF');
      }
      if (!(charSequenceGet(this.m55(), this.t4s_1) === _Char___init__impl__6a9atx(34))) {
        this.m4x('Expected closing quotation mark');
      }
      this.t4s_1 = this.t4s_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().u55_1;
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
    return c < 117 ? CharMappings_getInstance().t55_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.t55_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.u55_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.t55_1 = charArray(117);
    this.u55_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).w4y = function () {
    var source = this.m55();
    var cpos = this.p55();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.t4s_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).s4y = function () {
    var current = this.p55();
    if (current >= this.m55().length || current === -1)
      return false;
    return this.q55(charSequenceGet(this.m55(), current));
  };
  protoOf(StringJsonLexerWithComments).e50 = function (expected) {
    var source = this.m55();
    var current = this.p55();
    if (current >= source.length || current === -1) {
      this.t4s_1 = -1;
      this.r55(expected);
    }
    var c = charSequenceGet(source, current);
    this.t4s_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.r55(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).r4y = function () {
    var source = this.m55();
    var cpos = this.p55();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.t4s_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).p55 = function () {
    var current = this.t4s_1;
    if (current === -1)
      return current;
    var source = this.m55();
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
            this.t4s_1 = source.length;
            this.m4x('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.t4s_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.e56_1 = source;
  }
  protoOf(StringJsonLexer).m55 = function () {
    return this.e56_1;
  };
  protoOf(StringJsonLexer).n55 = function (position) {
    return position < this.m55().length ? position : -1;
  };
  protoOf(StringJsonLexer).w4y = function () {
    var source = this.m55();
    var cpos = this.t4s_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.t4s_1 = cpos;
      return charToTokenClass(c);
    }
    this.t4s_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).s4y = function () {
    var current = this.t4s_1;
    if (current === -1)
      return false;
    var source = this.m55();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.t4s_1 = current;
      return this.q55(c);
    }
    this.t4s_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).p55 = function () {
    var current = this.t4s_1;
    if (current === -1)
      return current;
    var source = this.m55();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.t4s_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).e50 = function (expected) {
    if (this.t4s_1 === -1) {
      this.r55(expected);
    }
    var source = this.m55();
    var cpos = this.t4s_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.t4s_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.r55(expected);
    }
    this.t4s_1 = -1;
    this.r55(expected);
  };
  protoOf(StringJsonLexer).k50 = function () {
    this.e50(_Char___init__impl__6a9atx(34));
    var current = this.t4s_1;
    var closingQuote = indexOf_0(this.m55(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.u4y();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.t4s_1 - 1 | 0 : this.t4s_1;
      var s = this.t4s_1 === charSequenceLength(this.m55()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.m55(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.m4x(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.m55(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.m55(), this.t4s_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.t4s_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.m55().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).m50 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.t4s_1;
    try {
      if (!(this.w4y() === 6))
        return null;
      var firstKey = this.h50(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.s55();
      if (!(this.w4y() === 5))
        return null;
      return this.h50(isLenient);
    }finally {
      this.t4s_1 = positionSnapshot;
      this.s55();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.e4s_1.g4u_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.g4s_1;
  }
  function JsonToStringWriter() {
    this.k4s_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).q4w = function (value) {
    this.k4s_1.ce(value);
  };
  protoOf(JsonToStringWriter).k4w = function (char) {
    this.k4s_1.p(char);
  };
  protoOf(JsonToStringWriter).m4w = function (text) {
    this.k4s_1.z8(text);
  };
  protoOf(JsonToStringWriter).w4w = function (text) {
    printQuoted(this.k4s_1, text);
  };
  protoOf(JsonToStringWriter).k1g = function () {
    this.k4s_1.fe();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.k4s_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).j22 = get_isNullable;
  protoOf(defer$1).o22 = get_isInline;
  protoOf(defer$1).q22 = get_annotations;
  protoOf(JsonSerializersModuleValidator).l2m = contextual;
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
  _.$_$.t = JsonTransformingSerializer;
  _.$_$.u = Json_0;
  _.$_$.v = add;
  _.$_$.w = get_boolean;
  _.$_$.x = get_booleanOrNull;
  _.$_$.y = get_contentOrNull;
  _.$_$.z = get_doubleOrNull;
  _.$_$.a1 = get_int;
  _.$_$.b1 = get_jsonArray;
  _.$_$.c1 = get_jsonObject;
  _.$_$.d1 = get_jsonPrimitive;
  _.$_$.e1 = get_long;
  _.$_$.f1 = get_longOrNull;
  _.$_$.g1 = put_1;
  _.$_$.h1 = put;
  _.$_$.i1 = put_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
