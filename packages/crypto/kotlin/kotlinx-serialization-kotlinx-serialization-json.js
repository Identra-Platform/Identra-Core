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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var protoOf = kotlin_kotlin.$_$.pc;
  var initMetadataForObject = kotlin_kotlin.$_$.rb;
  var VOID = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.v5;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var initMetadataForClass = kotlin_kotlin.$_$.lb;
  var toString = kotlin_kotlin.$_$.tc;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var charSequenceLength = kotlin_kotlin.$_$.bb;
  var charSequenceGet = kotlin_kotlin.$_$.ab;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var equals = kotlin_kotlin.$_$.fb;
  var THROW_CCE = kotlin_kotlin.$_$.tg;
  var getStringHashCode = kotlin_kotlin.$_$.jb;
  var toString_0 = kotlin_kotlin.$_$.yh;
  var Enum = kotlin_kotlin.$_$.ig;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var initMetadataForInterface = kotlin_kotlin.$_$.pb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.mb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var hashCode = kotlin_kotlin.$_$.kb;
  var joinToString = kotlin_kotlin.$_$.c8;
  var KtMap = kotlin_kotlin.$_$.f6;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var KtList = kotlin_kotlin.$_$.c6;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var getBooleanHashCode = kotlin_kotlin.$_$.hb;
  var toDouble = kotlin_kotlin.$_$.gf;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.i5;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.th;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var toLongOrNull = kotlin_kotlin.$_$.kf;
  var toULongOrNull = kotlin_kotlin.$_$.qf;
  var ULong = kotlin_kotlin.$_$.bh;
  var Companion_getInstance = kotlin_kotlin.$_$.t5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.i4;
  var toDoubleOrNull = kotlin_kotlin.$_$.ff;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.df;
  var isInterface = kotlin_kotlin.$_$.ac;
  var lazy = kotlin_kotlin.$_$.sh;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var KProperty1 = kotlin_kotlin.$_$.gd;
  var getPropertyCallableRef = kotlin_kotlin.$_$.ib;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var toLong = kotlin_kotlin.$_$.rc;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.w3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.a4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.h4;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.j4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.n3;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.p3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.q4;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.s4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.xa;
  var charSequenceSubSequence = kotlin_kotlin.$_$.cb;
  var coerceAtLeast = kotlin_kotlin.$_$.xc;
  var coerceAtMost = kotlin_kotlin.$_$.yc;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var Collection = kotlin_kotlin.$_$.x5;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var singleOrNull = kotlin_kotlin.$_$.a9;
  var emptyMap = kotlin_kotlin.$_$.m7;
  var getValue = kotlin_kotlin.$_$.x7;
  var copyOf = kotlin_kotlin.$_$.f7;
  var copyOf_0 = kotlin_kotlin.$_$.g7;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.gg;
  var invoke = kotlin_kotlin.$_$.mh;
  var CoroutineImpl = kotlin_kotlin.$_$.pa;
  var DeepRecursiveScope = kotlin_kotlin.$_$.hg;
  var Unit = kotlin_kotlin.$_$.eh;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.z9;
  var initMetadataForLambda = kotlin_kotlin.$_$.qb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.nb;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var getKClass = kotlin_kotlin.$_$.g;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var ensureNotNull = kotlin_kotlin.$_$.lh;
  var substringBefore = kotlin_kotlin.$_$.bf;
  var removeSuffix = kotlin_kotlin.$_$.me;
  var substringAfter = kotlin_kotlin.$_$.ye;
  var contains = kotlin_kotlin.$_$.od;
  var plus = kotlin_kotlin.$_$.uh;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var IllegalArgumentException = kotlin_kotlin.$_$.lg;
  var isFinite = kotlin_kotlin.$_$.oh;
  var isFinite_0 = kotlin_kotlin.$_$.nh;
  var toUInt = kotlin_kotlin.$_$.pf;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.y3;
  var toULong = kotlin_kotlin.$_$.rf;
  var toUByte = kotlin_kotlin.$_$.of;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.o3;
  var toUShort = kotlin_kotlin.$_$.sf;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.r4;
  var objectCreate = kotlin_kotlin.$_$.oc;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var toString_1 = kotlin_kotlin.$_$.h3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.s5;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.r5;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.u5;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var setOf = kotlin_kotlin.$_$.z8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g3;
  var numberToChar = kotlin_kotlin.$_$.kc;
  var equals_0 = kotlin_kotlin.$_$.wd;
  var toByte = kotlin_kotlin.$_$.qc;
  var startsWith = kotlin_kotlin.$_$.te;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var numberRangeToNumber = kotlin_kotlin.$_$.jc;
  var ClosedRange = kotlin_kotlin.$_$.wc;
  var contains_0 = kotlin_kotlin.$_$.zc;
  var single = kotlin_kotlin.$_$.qe;
  var Char = kotlin_kotlin.$_$.dg;
  var emptySet = kotlin_kotlin.$_$.n7;
  var plus_0 = kotlin_kotlin.$_$.q8;
  var toInt = kotlin_kotlin.$_$.jf;
  var toList = kotlin_kotlin.$_$.l9;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.xh;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var enumEntries = kotlin_kotlin.$_$.ra;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var last = kotlin_kotlin.$_$.h8;
  var removeLast = kotlin_kotlin.$_$.w8;
  var lastIndexOf = kotlin_kotlin.$_$.fe;
  var Long = kotlin_kotlin.$_$.ng;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.c3;
  var numberToLong = kotlin_kotlin.$_$.nc;
  var charArray = kotlin_kotlin.$_$.za;
  var indexOf = kotlin_kotlin.$_$.zd;
  var indexOf_0 = kotlin_kotlin.$_$.ae;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.u;
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
    this.l4n_1 = configuration;
    this.m4n_1 = serializersModule;
    this.n4n_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).w21 = function () {
    return this.m4n_1;
  };
  protoOf(Json).x1y = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.l1d();
    }
  };
  protoOf(Json).y1y = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.u1x(), null);
    var result = input.g21(deserializer);
    lexer.e4o();
    return result;
  };
  protoOf(Json).o4n = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).p4n = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).q4n = function (string) {
    return this.y1y(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.x4o();
    return new JsonImpl(conf, builder.w4o_1);
  }
  function JsonBuilder(json) {
    this.f4o_1 = json.l4n_1.y4o_1;
    this.g4o_1 = json.l4n_1.d4p_1;
    this.h4o_1 = json.l4n_1.z4o_1;
    this.i4o_1 = json.l4n_1.a4p_1;
    this.j4o_1 = json.l4n_1.c4p_1;
    this.k4o_1 = json.l4n_1.e4p_1;
    this.l4o_1 = json.l4n_1.f4p_1;
    this.m4o_1 = json.l4n_1.h4p_1;
    this.n4o_1 = json.l4n_1.o4p_1;
    this.o4o_1 = json.l4n_1.j4p_1;
    this.p4o_1 = json.l4n_1.k4p_1;
    this.q4o_1 = json.l4n_1.l4p_1;
    this.r4o_1 = json.l4n_1.m4p_1;
    this.s4o_1 = json.l4n_1.n4p_1;
    this.t4o_1 = json.l4n_1.i4p_1;
    this.u4o_1 = json.l4n_1.b4p_1;
    this.v4o_1 = json.l4n_1.g4p_1;
    this.w4o_1 = json.w21();
  }
  protoOf(JsonBuilder).x4o = function () {
    if (this.v4o_1) {
      // Inline function 'kotlin.require' call
      if (!(this.m4o_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.n4o_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.j4o_1) {
      // Inline function 'kotlin.require' call
      if (!(this.k4o_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.k4o_1 === '    ')) {
      var tmp3 = this.k4o_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.k4o_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.f4o_1, this.h4o_1, this.i4o_1, this.u4o_1, this.j4o_1, this.g4o_1, this.k4o_1, this.l4o_1, this.v4o_1, this.m4o_1, this.t4o_1, this.o4o_1, this.p4o_1, this.q4o_1, this.r4o_1, this.s4o_1, this.n4o_1);
  };
  function validateConfiguration($this) {
    if (equals($this.w21(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.l4n_1);
    $this.w21().x2i(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator(discriminator) {
    this.p4p_1 = discriminator;
  }
  protoOf(JsonClassDiscriminator).equals = function (other) {
    if (!(other instanceof JsonClassDiscriminator))
      return false;
    var tmp0_other_with_cast = other instanceof JsonClassDiscriminator ? other : THROW_CCE();
    if (!(this.p4p_1 === tmp0_other_with_cast.p4p_1))
      return false;
    return true;
  };
  protoOf(JsonClassDiscriminator).hashCode = function () {
    return imul(getStringHashCode('discriminator'), 127) ^ getStringHashCode(this.p4p_1);
  };
  protoOf(JsonClassDiscriminator).toString = function () {
    return '@kotlinx.serialization.json.JsonClassDiscriminator(' + 'discriminator=' + this.p4p_1 + ')';
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
    this.y4o_1 = encodeDefaults;
    this.z4o_1 = ignoreUnknownKeys;
    this.a4p_1 = isLenient;
    this.b4p_1 = allowStructuredMapKeys;
    this.c4p_1 = prettyPrint;
    this.d4p_1 = explicitNulls;
    this.e4p_1 = prettyPrintIndent;
    this.f4p_1 = coerceInputValues;
    this.g4p_1 = useArrayPolymorphism;
    this.h4p_1 = classDiscriminator;
    this.i4p_1 = allowSpecialFloatingPointValues;
    this.j4p_1 = useAlternativeNames;
    this.k4p_1 = namingStrategy;
    this.l4p_1 = decodeEnumsCaseInsensitive;
    this.m4p_1 = allowTrailingComma;
    this.n4p_1 = allowComments;
    this.o4p_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.y4o_1 + ', ignoreUnknownKeys=' + this.z4o_1 + ', isLenient=' + this.a4p_1 + ', ' + ('allowStructuredMapKeys=' + this.b4p_1 + ', prettyPrint=' + this.c4p_1 + ', explicitNulls=' + this.d4p_1 + ', ') + ("prettyPrintIndent='" + this.e4p_1 + "', coerceInputValues=" + this.f4p_1 + ', useArrayPolymorphism=' + this.g4p_1 + ', ') + ("classDiscriminator='" + this.h4p_1 + "', allowSpecialFloatingPointValues=" + this.i4p_1 + ', ') + ('useAlternativeNames=' + this.j4p_1 + ', namingStrategy=' + toString_0(this.k4p_1) + ', decodeEnumsCaseInsensitive=' + this.l4p_1 + ', ') + ('allowTrailingComma=' + this.m4p_1 + ', allowComments=' + this.n4p_1 + ', classDiscriminatorMode=' + this.o4p_1.toString() + ')');
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
  function JsonDecoder() {
  }
  function get_jsonUnquotedLiteralDescriptor() {
    _init_properties_JsonElement_kt__7cbdc2();
    return jsonUnquotedLiteralDescriptor;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  protoOf(Companion).s4p = function () {
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
  protoOf(Companion_0).s4p = function () {
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
    this_0.x8(_Char___init__impl__6a9atx(58));
    this_0.v8(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.t4p_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.t4p_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.t4p_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.t4p_1.x();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).h = function () {
    return this.t4p_1.h();
  };
  protoOf(JsonObject).r2m = function (key) {
    return this.t4p_1.i2(key);
  };
  protoOf(JsonObject).i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.r2m((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).u4p = function (value) {
    return this.t4p_1.j2(value);
  };
  protoOf(JsonObject).j2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.u4p(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).we = function (key) {
    return this.t4p_1.k2(key);
  };
  protoOf(JsonObject).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.we((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.t4p_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).s = function () {
    return this.t4p_1.s();
  };
  protoOf(JsonObject).l2 = function () {
    return this.t4p_1.l2();
  };
  protoOf(JsonObject).m2 = function () {
    return this.t4p_1.m2();
  };
  protoOf(JsonObject).x = function () {
    return this.t4p_1.x();
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
    return this.v4p();
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
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.w4p_1 = 'null';
  }
  protoOf(JsonNull).v4p = function () {
    return this.w4p_1;
  };
  protoOf(JsonNull).s4p = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).w29 = function (typeParamsSerializers) {
    return this.s4p();
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function get_boolean(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.v4p());
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
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.v4p();
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
    this.x4p_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.x4p_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.x4p_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.x4p_1, ',', '[', ']');
  };
  protoOf(JsonArray).h = function () {
    return this.x4p_1.h();
  };
  protoOf(JsonArray).y4p = function (element) {
    return this.x4p_1.x1(element);
  };
  protoOf(JsonArray).x1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.y4p(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).p = function () {
    return this.x4p_1.p();
  };
  protoOf(JsonArray).z4p = function (elements) {
    return this.x4p_1.y1(elements);
  };
  protoOf(JsonArray).y1 = function (elements) {
    return this.z4p(elements);
  };
  protoOf(JsonArray).u = function (index) {
    return this.x4p_1.u(index);
  };
  protoOf(JsonArray).a4q = function (element) {
    return this.x4p_1.z1(element);
  };
  protoOf(JsonArray).z1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.a4q(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).b4q = function (element) {
    return this.x4p_1.a2(element);
  };
  protoOf(JsonArray).a2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.b4q(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).b2 = function () {
    return this.x4p_1.b2();
  };
  protoOf(JsonArray).v = function (index) {
    return this.x4p_1.v(index);
  };
  protoOf(JsonArray).c2 = function (fromIndex, toIndex) {
    return this.x4p_1.c2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.x4p_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).s = function () {
    return this.x4p_1.s();
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
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.c4q_1 = isString;
    this.d4q_1 = coerceToInlineType;
    this.e4q_1 = toString(body);
    if (!(this.d4q_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.d4q_1.m1z()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).v4p = function () {
    return this.e4q_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.c4q_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.e4q_1);
      tmp = this_0.toString();
    } else {
      tmp = this.e4q_1;
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
    if (!(this.c4q_1 === other.c4q_1))
      return false;
    if (!(this.e4q_1 === other.e4q_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.c4q_1);
    result = imul(31, result) + getStringHashCode(this.e4q_1) | 0;
    return result;
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.v4p());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.v4p())).f4q();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.v4p();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.v4p());
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
    tmp.g4q_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).h4q = function (key, element) {
    return this.g4q_1.n2(key, element);
  };
  protoOf(JsonObjectBuilder).x4o = function () {
    return new JsonObject(this.g4q_1);
  };
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.i4q_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).u1x();
    this.j4q_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).v1y = function () {
    return this.j4q_1;
  };
  protoOf(JsonObjectDescriptor).p1z = function (index) {
    return this.i4q_1.p1z(index);
  };
  protoOf(JsonObjectDescriptor).q1z = function (name) {
    return this.i4q_1.q1z(name);
  };
  protoOf(JsonObjectDescriptor).r1z = function (index) {
    return this.i4q_1.r1z(index);
  };
  protoOf(JsonObjectDescriptor).s1z = function (index) {
    return this.i4q_1.s1z(index);
  };
  protoOf(JsonObjectDescriptor).t1z = function (index) {
    return this.i4q_1.t1z(index);
  };
  protoOf(JsonObjectDescriptor).l1z = function () {
    return this.i4q_1.l1z();
  };
  protoOf(JsonObjectDescriptor).h1z = function () {
    return this.i4q_1.h1z();
  };
  protoOf(JsonObjectDescriptor).m1z = function () {
    return this.i4q_1.m1z();
  };
  protoOf(JsonObjectDescriptor).n1z = function () {
    return this.i4q_1.n1z();
  };
  protoOf(JsonObjectDescriptor).o1z = function () {
    return this.i4q_1.o1z();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.k4q_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).u1x = function () {
    return this.k4q_1;
  };
  protoOf(JsonObjectSerializer).l4q = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).v1x(encoder, value);
  };
  protoOf(JsonObjectSerializer).v1x = function (encoder, value) {
    return this.l4q(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).w1x = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).w1x(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.i1y('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.i1y('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.i1y('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.i1y('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.i1y('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().m4q_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().n4q_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().o4q_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().k4q_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().p4q_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.q4q_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).u1x = function () {
    return this.q4q_1;
  };
  protoOf(JsonElementSerializer).r4q = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.z22(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.z22(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.z22(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).v1x = function (encoder, value) {
    return this.r4q(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).w1x = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.r4p();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.m4q_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).u1x = function () {
    return this.m4q_1;
  };
  protoOf(JsonPrimitiveSerializer).s4q = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.z22(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.z22(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).v1x = function (encoder, value) {
    return this.s4q(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).w1x = function (decoder) {
    var result = asJsonDecoder(decoder).r4p();
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
    this.n4q_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).u1x = function () {
    return this.n4q_1;
  };
  protoOf(JsonNullSerializer).t4q = function (encoder, value) {
    verify(encoder);
    encoder.c22();
  };
  protoOf(JsonNullSerializer).v1x = function (encoder, value) {
    return this.t4q(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).w1x = function (decoder) {
    verify_0(decoder);
    if (decoder.s20()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.t20();
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
    this.u4q_1 = ListSerializer(JsonElementSerializer_getInstance()).u1x();
    this.v4q_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).v1y = function () {
    return this.v4q_1;
  };
  protoOf(JsonArrayDescriptor).p1z = function (index) {
    return this.u4q_1.p1z(index);
  };
  protoOf(JsonArrayDescriptor).q1z = function (name) {
    return this.u4q_1.q1z(name);
  };
  protoOf(JsonArrayDescriptor).r1z = function (index) {
    return this.u4q_1.r1z(index);
  };
  protoOf(JsonArrayDescriptor).s1z = function (index) {
    return this.u4q_1.s1z(index);
  };
  protoOf(JsonArrayDescriptor).t1z = function (index) {
    return this.u4q_1.t1z(index);
  };
  protoOf(JsonArrayDescriptor).l1z = function () {
    return this.u4q_1.l1z();
  };
  protoOf(JsonArrayDescriptor).h1z = function () {
    return this.u4q_1.h1z();
  };
  protoOf(JsonArrayDescriptor).m1z = function () {
    return this.u4q_1.m1z();
  };
  protoOf(JsonArrayDescriptor).n1z = function () {
    return this.u4q_1.n1z();
  };
  protoOf(JsonArrayDescriptor).o1z = function () {
    return this.u4q_1.o1z();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.p4q_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).u1x = function () {
    return this.p4q_1;
  };
  protoOf(JsonArraySerializer).w4q = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).v1x(encoder, value);
  };
  protoOf(JsonArraySerializer).v1x = function (encoder, value) {
    return this.w4q(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).w1x = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).w1x(decoder));
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
    this.o4q_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).u1x = function () {
    return this.o4q_1;
  };
  protoOf(JsonLiteralSerializer).x4q = function (encoder, value) {
    verify(encoder);
    if (value.c4q_1) {
      return encoder.l22(value.e4q_1);
    }
    if (!(value.d4q_1 == null)) {
      return encoder.n22(value.d4q_1).l22(value.e4q_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.e4q_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.h22(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.e4q_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).fq_1;
      var tmp_1 = encoder.n22(serializer_0(Companion_getInstance()).u1x());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.h22(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.e4q_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.j22(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.e4q_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.d22(tmp3_safe_receiver);
    }
    encoder.l22(value.e4q_1);
  };
  protoOf(JsonLiteralSerializer).v1x = function (encoder, value) {
    return this.x4q(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).w1x = function (decoder) {
    var result = asJsonDecoder(decoder).r4p();
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
    var tmp0 = $this.y4q_1;
    // Inline function 'kotlin.getValue' call
    original$factory();
    return tmp0.z();
  }
  function defer$1($deferred) {
    this.y4q_1 = lazy($deferred);
  }
  protoOf(defer$1).v1y = function () {
    return _get_original__l7ku1m(this).v1y();
  };
  protoOf(defer$1).l1z = function () {
    return _get_original__l7ku1m(this).l1z();
  };
  protoOf(defer$1).n1z = function () {
    return _get_original__l7ku1m(this).n1z();
  };
  protoOf(defer$1).p1z = function (index) {
    return _get_original__l7ku1m(this).p1z(index);
  };
  protoOf(defer$1).q1z = function (name) {
    return _get_original__l7ku1m(this).q1z(name);
  };
  protoOf(defer$1).r1z = function (index) {
    return _get_original__l7ku1m(this).r1z(index);
  };
  protoOf(defer$1).s1z = function (index) {
    return _get_original__l7ku1m(this).s1z(index);
  };
  protoOf(defer$1).t1z = function (index) {
    return _get_original__l7ku1m(this).t1z(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.z4q_1 = writer;
    this.a4r_1 = true;
  }
  protoOf(Composer).b4r = function () {
    this.a4r_1 = true;
  };
  protoOf(Composer).c4r = function () {
    return Unit_instance;
  };
  protoOf(Composer).d4r = function () {
    this.a4r_1 = false;
  };
  protoOf(Composer).e4r = function () {
    this.a4r_1 = false;
  };
  protoOf(Composer).f4r = function () {
    return Unit_instance;
  };
  protoOf(Composer).g4r = function (v) {
    return this.z4q_1.h4r(v);
  };
  protoOf(Composer).i4r = function (v) {
    return this.z4q_1.j4r(v);
  };
  protoOf(Composer).k4r = function (v) {
    return this.z4q_1.j4r(v.toString());
  };
  protoOf(Composer).l4r = function (v) {
    return this.z4q_1.j4r(v.toString());
  };
  protoOf(Composer).m4r = function (v) {
    return this.z4q_1.n4r(toLong(v));
  };
  protoOf(Composer).o4r = function (v) {
    return this.z4q_1.n4r(toLong(v));
  };
  protoOf(Composer).p4r = function (v) {
    return this.z4q_1.n4r(toLong(v));
  };
  protoOf(Composer).q4r = function (v) {
    return this.z4q_1.n4r(v);
  };
  protoOf(Composer).r4r = function (v) {
    return this.z4q_1.j4r(v.toString());
  };
  protoOf(Composer).s4r = function (value) {
    return this.z4q_1.t4r(value);
  };
  function Composer_0(sb, json) {
    return json.l4n_1.c4p_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.w4r_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).p4r = function (v) {
    if (this.w4r_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.s4r(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.i4r(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).q4r = function (v) {
    if (this.w4r_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.s4r(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.i4r(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).m4r = function (v) {
    if (this.w4r_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.s4r(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.i4r(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).o4r = function (v) {
    if (this.w4r_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.s4r(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.i4r(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.z4r_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).s4r = function (value) {
    if (this.z4r_1) {
      protoOf(Composer).s4r.call(this, value);
    } else {
      protoOf(Composer).i4r.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.c4s_1 = json;
    this.d4s_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).b4r = function () {
    this.a4r_1 = true;
    this.d4s_1 = this.d4s_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).c4r = function () {
    this.d4s_1 = this.d4s_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).d4r = function () {
    this.a4r_1 = false;
    this.i4r('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.d4s_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.i4r(this.c4s_1.l4n_1.e4p_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).e4r = function () {
    if (this.a4r_1)
      this.a4r_1 = false;
    else {
      this.d4r();
    }
  };
  protoOf(ComposerWithPrettyPrint).f4r = function () {
    this.g4r(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.f4s_1 = (!descriptor.t1z(index) && descriptor.s1z(index).h1z());
    return $this.f4s_1;
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
    tmp.e4s_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.f4s_1 = false;
  }
  protoOf(JsonElementMarker).g4s = function (index) {
    this.e4s_1.n27(index);
  };
  protoOf(JsonElementMarker).h4s = function () {
    return this.e4s_1.o27();
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
    _this__u8e3s4.i4s('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.a4o_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.j4s('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.v1y() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.l1z().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    if (json.l4n_1.z4o_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.o1z();
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
    var index = _this__u8e3s4.q1z(name);
    if (!(index === -3))
      return index;
    if (!json.l4n_1.j4p_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.v1y() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.p1z(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.l1z(), CLASS_getInstance()) ? json.l4n_1.k4p_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.l4s(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.l4n_1.l4p_1 && equals(descriptor.l1z(), ENUM_getInstance());
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
    return tmp.l4s(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.n1z();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.r1z(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m4s_1;
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
          tmp_0 = _this__u8e3s4.p1z(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.n4s(_this__u8e3s4, i, _this__u8e3s4.p1z(i));
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
    var entity = equals($this_buildDeserializationNamesMap.l1z(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).i2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.p1z(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.p1z(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
      var tmp_0 = $this_serializationNamesIndices.n1z();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.p1z(tmp_2);
        tmp_1[tmp_2] = $strategy.n4s($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.q4s_1, 2);
    $this.o4s_1 = copyOf($this.o4s_1, newSize);
    $this.p4s_1 = copyOf_0($this.p4s_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.o4s_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.p4s_1 = tmp_2;
    this.q4s_1 = -1;
  }
  protoOf(JsonPath).r4s = function (sd) {
    this.q4s_1 = this.q4s_1 + 1 | 0;
    var depth = this.q4s_1;
    if (depth === this.o4s_1.length) {
      resize(this);
    }
    this.o4s_1[depth] = sd;
  };
  protoOf(JsonPath).s4s = function (index) {
    this.p4s_1[this.q4s_1] = index;
  };
  protoOf(JsonPath).t4s = function (key) {
    var tmp;
    if (!(this.p4s_1[this.q4s_1] === -2)) {
      this.q4s_1 = this.q4s_1 + 1 | 0;
      tmp = this.q4s_1 === this.o4s_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.o4s_1[this.q4s_1] = key;
    this.p4s_1[this.q4s_1] = -2;
  };
  protoOf(JsonPath).u4s = function () {
    if (this.p4s_1[this.q4s_1] === -2) {
      this.o4s_1[this.q4s_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).v4s = function () {
    var depth = this.q4s_1;
    if (this.p4s_1[depth] === -2) {
      this.p4s_1[depth] = -1;
      this.q4s_1 = this.q4s_1 - 1 | 0;
    }
    if (!(this.q4s_1 === -1)) {
      this.q4s_1 = this.q4s_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).w4s = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.w8('$');
    // Inline function 'kotlin.repeat' call
    var times = this.q4s_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.o4s_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.l1z(), LIST_getInstance())) {
            if (!(this.p4s_1[index] === -1)) {
              this_0.w8('[');
              this_0.yd(this.p4s_1[index]);
              this_0.w8(']');
            }
          } else {
            var idx = this.p4s_1[index];
            if (idx >= 0) {
              this_0.w8('.');
              this_0.w8(element.p1z(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.w8('[');
            this_0.w8("'");
            this_0.v8(element);
            this_0.w8("'");
            this_0.w8(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.w4s();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.l1z();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.fc() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.y4s_1)
      return Unit_instance;
    if (!$this.z4s_1)
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
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.fc() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.n1z();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.p1z(i);
        if (name === $this.x4s_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function JsonSerializersModuleValidator(configuration) {
    this.x4s_1 = configuration.h4p_1;
    this.y4s_1 = configuration.g4p_1;
    this.z4s_1 = !configuration.o4p_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).g2j = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).j2j = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.u1x();
    checkKind(this, descriptor, actualClass);
    if (!this.y4s_1 && this.z4s_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(JsonSerializersModuleValidator).k2j = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).l2j = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().s();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.z22(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.j4t_1.n4t(6);
    if ($this.j4t_1.o4t() === 4) {
      $this.j4t_1.j4s('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.j4t_1.p4t()) {
      var key = $this.k4t_1 ? $this.j4t_1.r4t() : $this.j4t_1.q4t();
      $this.j4t_1.n4t(5);
      var element = $this.s4t();
      // Inline function 'kotlin.collections.set' call
      result.n2(key, element);
      lastToken = $this.j4t_1.t4t();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.j4t_1.j4s('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.j4t_1.n4t(7);
    } else if (lastToken === 4) {
      if (!$this.l4t_1) {
        invalidTrailingComma($this.j4t_1);
      }
      $this.j4t_1.n4t(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, _this__u8e3s4, $completion) {
    var tmp = new $readObjectCOROUTINE$0($this, _this__u8e3s4, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  }
  function readArray($this) {
    var lastToken = $this.j4t_1.t4t();
    if ($this.j4t_1.o4t() === 4) {
      $this.j4t_1.j4s('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.j4t_1.p4t()) {
      var element = $this.s4t();
      result.n(element);
      lastToken = $this.j4t_1.t4t();
      if (!(lastToken === 4)) {
        var tmp0 = $this.j4t_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.a4o_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.j4s(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.j4t_1.n4t(9);
    } else if (lastToken === 4) {
      if (!$this.l4t_1) {
        invalidTrailingComma($this.j4t_1, 'array');
      }
      $this.j4t_1.n4t(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.k4t_1 || !isString) {
      tmp = $this.j4t_1.r4t();
    } else {
      tmp = $this.j4t_1.q4t();
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
    this.r4u_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).w4u = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.x4u($this$DeepRecursiveFunction, it, $completion);
    tmp.n9_1 = Unit_instance;
    tmp.o9_1 = null;
    return tmp.da();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).ua = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.w4u(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 3;
            this.u4u_1 = this.r4u_1.j4t_1.o4t();
            if (this.u4u_1 === 1) {
              this.v4u_1 = readValue(this.r4u_1, true);
              this.l9_1 = 2;
              continue $sm;
            } else {
              if (this.u4u_1 === 0) {
                this.v4u_1 = readValue(this.r4u_1, false);
                this.l9_1 = 2;
                continue $sm;
              } else {
                if (this.u4u_1 === 6) {
                  this.l9_1 = 1;
                  suspendResult = readObject_0(this.r4u_1, this.s4u_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.u4u_1 === 8) {
                    this.v4u_1 = readArray(this.r4u_1);
                    this.l9_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.r4u_1.j4t_1.j4s("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.v4u_1 = suspendResult;
            this.l9_1 = 2;
            continue $sm;
          case 2:
            return this.v4u_1;
          case 3:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 3) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).x4u = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.r4u_1, completion);
    i.s4u_1 = $this$DeepRecursiveFunction;
    i.t4u_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.w4u($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c4u_1 = _this__u8e3s4;
    this.d4u_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$0).da = function () {
    var suspendResult = this.n9_1;
    $sm: do
      try {
        var tmp = this.l9_1;
        switch (tmp) {
          case 0:
            this.m9_1 = 5;
            var tmp_0 = this;
            tmp_0.e4u_1 = this.c4u_1;
            this.f4u_1 = this.e4u_1;
            this.g4u_1 = this.f4u_1.j4t_1.n4t(6);
            if (this.f4u_1.j4t_1.o4t() === 4) {
              this.f4u_1.j4t_1.j4s('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.h4u_1 = LinkedHashMap_init_$Create$();
            this.l9_1 = 1;
            continue $sm;
          case 1:
            if (!this.f4u_1.j4t_1.p4t()) {
              this.l9_1 = 4;
              continue $sm;
            }

            this.i4u_1 = this.f4u_1.k4t_1 ? this.f4u_1.j4t_1.r4t() : this.f4u_1.j4t_1.q4t();
            this.f4u_1.j4t_1.n4t(5);
            this.l9_1 = 2;
            suspendResult = this.d4u_1.jo(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.h4u_1;
            var key = this.i4u_1;
            tmp0.n2(key, element);
            this.g4u_1 = this.f4u_1.j4t_1.t4t();
            var tmp0_subject = this.g4u_1;
            if (tmp0_subject === 4) {
              this.l9_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.l9_1 = 4;
                continue $sm;
              } else {
                this.f4u_1.j4t_1.j4s('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.l9_1 = 1;
            continue $sm;
          case 4:
            if (this.g4u_1 === 6) {
              this.f4u_1.j4t_1.n4t(7);
            } else if (this.g4u_1 === 4) {
              if (!this.f4u_1.l4t_1) {
                invalidTrailingComma(this.f4u_1.j4t_1);
              }
              this.f4u_1.j4t_1.n4t(7);
            }

            return new JsonObject(this.h4u_1);
          case 5:
            throw this.o9_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m9_1 === 5) {
          throw e;
        } else {
          this.l9_1 = this.m9_1;
          this.o9_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.j4t_1 = lexer;
    this.k4t_1 = configuration.a4p_1;
    this.l4t_1 = configuration.m4p_1;
    this.m4t_1 = 0;
  }
  protoOf(JsonTreeReader).s4t = function () {
    var token = this.j4t_1.o4t();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.m4t_1 = this.m4t_1 + 1 | 0;
      if (this.m4t_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.m4t_1 = this.m4t_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.j4t_1.j4s('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.o1z().p();
    while (_iterator__ex2g4s.q()) {
      var annotation = _iterator__ex2g4s.r();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.p4p_1;
    }
    return json.l4n_1.h4p_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.u1x()).x1(classDiscriminator)) {
      var baseName = serializer.u1x().v1y();
      var actualName = actualSerializer.u1x().v1y();
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
    this.k4s_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).y4u = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.k4s_1;
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
  protoOf(DescriptorSchemaCache).l4s = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.z4u(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.y4u(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).z4u = function (descriptor, key) {
    var tmp0_safe_receiver = this.k4s_1.k2(descriptor);
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
    this.a4v_1 = discriminatorToSkip;
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.a4v_1 === unknownKey) {
      _this__u8e3s4.a4v_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.y21(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.u4n_1.o4t() === 4) {
      $this.u4n_1.j4s('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.w4n_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.w4n_1 === -1)) {
        hasComma = $this.u4n_1.c4v();
      }
    } else {
      $this.u4n_1.b4v(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.u4n_1.p4t()) {
      if (decodingKey) {
        if ($this.w4n_1 === -1) {
          var tmp0 = $this.u4n_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.a4o_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.j4s(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.u4n_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.a4o_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp3.j4s(tmp$ret$2, position_0);
          }
        }
      }
      $this.w4n_1 = $this.w4n_1 + 1 | 0;
      tmp = $this.w4n_1;
    } else {
      if (hasComma && !$this.s4n_1.l4n_1.m4p_1) {
        invalidTrailingComma($this.u4n_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.s4n_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.t1z(index);
      var elementDescriptor = descriptor.s1z(index);
      var tmp;
      if (isOptional && !elementDescriptor.h1z()) {
        tmp = $this.u4n_1.d4v(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.l1z(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.h1z()) {
          tmp_0 = $this.u4n_1.d4v(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.u4n_1.e4v($this.y4n_1.a4p_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.l4n_1.d4p_1 && elementDescriptor.h1z();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.u4n_1.q4t();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.u4n_1.c4v();
    while ($this.u4n_1.p4t()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.u4n_1.b4v(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.s4n_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.y4n_1.f4p_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.u4n_1.c4v();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.z4n_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.g4s(index);
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
    if (hasComma && !$this.s4n_1.l4n_1.m4p_1) {
      invalidTrailingComma($this.u4n_1);
    }
    var tmp1_safe_receiver = $this.z4n_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.h4s();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.s4n_1) || trySkip($this, $this.x4n_1, key)) {
      $this.u4n_1.g4v($this.y4n_1.a4p_1);
    } else {
      $this.u4n_1.b4o_1.v4s();
      $this.u4n_1.f4v(key);
    }
    return $this.u4n_1.c4v();
  }
  function decodeListIndex($this) {
    var hasComma = $this.u4n_1.c4v();
    var tmp;
    if ($this.u4n_1.p4t()) {
      if (!($this.w4n_1 === -1) && !hasComma) {
        $this.u4n_1.j4s('Expected end of the array or comma');
      }
      $this.w4n_1 = $this.w4n_1 + 1 | 0;
      tmp = $this.w4n_1;
    } else {
      if (hasComma && !$this.s4n_1.l4n_1.m4p_1) {
        invalidTrailingComma($this.u4n_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.y4n_1.a4p_1) {
      tmp = $this.u4n_1.i4v();
    } else {
      tmp = $this.u4n_1.h4v();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.s4n_1 = json;
    this.t4n_1 = mode;
    this.u4n_1 = lexer;
    this.v4n_1 = this.s4n_1.w21();
    this.w4n_1 = -1;
    this.x4n_1 = discriminatorHolder;
    this.y4n_1 = this.s4n_1.l4n_1;
    this.z4n_1 = this.y4n_1.d4p_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).q4p = function () {
    return this.s4n_1;
  };
  protoOf(StreamingJsonDecoder).w21 = function () {
    return this.v4n_1;
  };
  protoOf(StreamingJsonDecoder).r4p = function () {
    return (new JsonTreeReader(this.s4n_1.l4n_1, this.u4n_1)).s4t();
  };
  protoOf(StreamingJsonDecoder).g21 = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.s4n_1.l4n_1.g4p_1;
      }
      if (tmp) {
        return deserializer.w1x(this);
      }
      var discriminator = classDiscriminator(deserializer.u1x(), this.s4n_1);
      var tmp0_elvis_lhs = this.u4n_1.j4v(discriminator, this.y4n_1.a4p_1);
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
            tmp_1 = this.q4p().l4n_1.g4p_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.w1x(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.u1x(), this.q4p());
          var tmp0 = this.r4p();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.u1x().v1y();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).fc();
            var tmp_3 = getKClassFromExpression(tmp0).fc();
            var tmp$ret$1 = this.u4n_1.b4o_1.w4s();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.we(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.q4p(), discriminator_0, jsonTree, actualSerializer);
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
          this.u4n_1.j4s(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.x4n_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.w1x(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.b1z_1, plus(e.message, ' at path: ') + this.u4n_1.b4o_1.w4s(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).h21 = function (descriptor) {
    var newMode = switchMode(this.s4n_1, descriptor);
    this.u4n_1.b4o_1.r4s(descriptor);
    this.u4n_1.b4v(newMode.m4v_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.r2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.s4n_1, newMode, this.u4n_1, descriptor, this.x4n_1);
        break;
      default:
        var tmp_0;
        if (this.t4n_1.equals(newMode) && this.s4n_1.l4n_1.d4p_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.s4n_1, newMode, this.u4n_1, descriptor, this.x4n_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).i21 = function (descriptor) {
    if (descriptor.n1z() === 0 && ignoreUnknownKeys(descriptor, this.s4n_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.u4n_1.c4v() && !this.s4n_1.l4n_1.m4p_1) {
      invalidTrailingComma(this.u4n_1, '');
    }
    this.u4n_1.b4v(this.t4n_1.n4v_1);
    this.u4n_1.b4o_1.v4s();
  };
  protoOf(StreamingJsonDecoder).s20 = function () {
    var tmp;
    var tmp0_safe_receiver = this.z4n_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.f4s_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.u4n_1.o4v();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).t20 = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).t21 = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.t4n_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.u4n_1.b4o_1.u4s();
    }
    var value = protoOf(AbstractDecoder).t21.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.u4n_1.b4o_1.t4s(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).y21 = function (descriptor) {
    var index;
    switch (this.t4n_1.r2_1) {
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
    if (!this.t4n_1.equals(WriteMode_MAP_getInstance())) {
      this.u4n_1.b4o_1.s4s(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).u20 = function () {
    return this.u4n_1.p4v();
  };
  protoOf(StreamingJsonDecoder).v20 = function () {
    var value = this.u4n_1.q4v();
    if (!value.equals(toLong(value.p3()))) {
      this.u4n_1.j4s("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.p3();
  };
  protoOf(StreamingJsonDecoder).w20 = function () {
    var value = this.u4n_1.q4v();
    if (!value.equals(toLong(value.q3()))) {
      this.u4n_1.j4s("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.q3();
  };
  protoOf(StreamingJsonDecoder).x20 = function () {
    var value = this.u4n_1.q4v();
    if (!value.equals(toLong(value.j1()))) {
      this.u4n_1.j4s("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.j1();
  };
  protoOf(StreamingJsonDecoder).y20 = function () {
    return this.u4n_1.q4v();
  };
  protoOf(StreamingJsonDecoder).z20 = function () {
    var tmp0 = this.u4n_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r4t();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j4s("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.s4n_1.l4n_1.i4p_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.u4n_1, result);
  };
  protoOf(StreamingJsonDecoder).a21 = function () {
    var tmp0 = this.u4n_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r4t();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j4s("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.s4n_1.l4n_1.i4p_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.u4n_1, result);
  };
  protoOf(StreamingJsonDecoder).b21 = function () {
    var string = this.u4n_1.r4t();
    if (!(string.length === 1)) {
      this.u4n_1.j4s("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).c21 = function () {
    var tmp;
    if (this.y4n_1.a4p_1) {
      tmp = this.u4n_1.i4v();
    } else {
      tmp = this.u4n_1.q4t();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).e21 = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.u4n_1, this.s4n_1) : protoOf(AbstractDecoder).e21.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).d21 = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.s4n_1, this.c21(), ' at path ' + this.u4n_1.b4o_1.w4s());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.r4v_1 = lexer;
    this.s4v_1 = json.w21();
  }
  protoOf(JsonDecoderForUnsignedTypes).w21 = function () {
    return this.s4v_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).y21 = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).x20 = function () {
    var tmp0 = this.r4v_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r4t();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j4s("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).y20 = function () {
    var tmp0 = this.r4v_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r4t();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j4s("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).v20 = function () {
    var tmp0 = this.r4v_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r4t();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j4s("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).w20 = function () {
    var tmp0 = this.r4v_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.r4t();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.j4s("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
    $this.a4t_1.d4r();
    $this.l22(discriminator);
    $this.a4t_1.g4r(_Char___init__impl__6a9atx(58));
    $this.a4t_1.f4r();
    $this.l22(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.a4t_1 = composer;
    this.b4t_1 = json;
    this.c4t_1 = mode;
    this.d4t_1 = modeReuseCache;
    this.e4t_1 = this.b4t_1.w21();
    this.f4t_1 = this.b4t_1.l4n_1;
    this.g4t_1 = false;
    this.h4t_1 = null;
    this.i4t_1 = null;
    var i = this.c4t_1.r2_1;
    if (!(this.d4t_1 == null)) {
      if (!(this.d4t_1[i] === null) || !(this.d4t_1[i] === this)) {
        this.d4t_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).q4p = function () {
    return this.b4t_1;
  };
  protoOf(StreamingJsonEncoder).w21 = function () {
    return this.e4t_1;
  };
  protoOf(StreamingJsonEncoder).e23 = function (descriptor, index) {
    return this.f4t_1.y4o_1;
  };
  protoOf(StreamingJsonEncoder).z22 = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.q4p().l4n_1.g4p_1) {
        serializer.v1x(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.q4p().l4n_1.o4p_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.q4p().l4n_1.o4p_1.r2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.u1x().l1z();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.u1x(), this.q4p()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.u1x()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.u1x().l1z());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.u1x().v1y();
        this.h4t_1 = baseClassDiscriminator;
        this.i4t_1 = serialName;
      }
      actualSerializer.v1x(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).h21 = function (descriptor) {
    var newMode = switchMode(this.b4t_1, descriptor);
    if (!(newMode.m4v_1 === _Char___init__impl__6a9atx(0))) {
      this.a4t_1.g4r(newMode.m4v_1);
      this.a4t_1.b4r();
    }
    var discriminator = this.h4t_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.i4t_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.v1y() : tmp0_elvis_lhs);
      this.h4t_1 = null;
      this.i4t_1 = null;
    }
    if (this.c4t_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.d4t_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.r2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.a4t_1, this.b4t_1, newMode, this.d4t_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).i21 = function (descriptor) {
    if (!(this.c4t_1.n4v_1 === _Char___init__impl__6a9atx(0))) {
      this.a4t_1.c4r();
      this.a4t_1.e4r();
      this.a4t_1.g4r(this.c4t_1.n4v_1);
    }
  };
  protoOf(StreamingJsonEncoder).a22 = function (descriptor, index) {
    switch (this.c4t_1.r2_1) {
      case 1:
        if (!this.a4t_1.a4r_1) {
          this.a4t_1.g4r(_Char___init__impl__6a9atx(44));
        }

        this.a4t_1.d4r();
        break;
      case 2:
        if (!this.a4t_1.a4r_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.a4t_1.g4r(_Char___init__impl__6a9atx(44));
            this.a4t_1.d4r();
            tmp_0 = true;
          } else {
            this.a4t_1.g4r(_Char___init__impl__6a9atx(58));
            this.a4t_1.f4r();
            tmp_0 = false;
          }
          tmp.g4t_1 = tmp_0;
        } else {
          this.g4t_1 = true;
          this.a4t_1.d4r();
        }

        break;
      case 3:
        if (index === 0)
          this.g4t_1 = true;
        if (index === 1) {
          this.a4t_1.g4r(_Char___init__impl__6a9atx(44));
          this.a4t_1.f4r();
          this.g4t_1 = false;
        }

        break;
      default:
        if (!this.a4t_1.a4r_1) {
          this.a4t_1.g4r(_Char___init__impl__6a9atx(44));
        }

        this.a4t_1.d4r();
        this.l22(getJsonElementName(descriptor, this.b4t_1, index));
        this.a4t_1.g4r(_Char___init__impl__6a9atx(58));
        this.a4t_1.f4r();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).a23 = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.f4t_1.d4p_1) {
      protoOf(AbstractEncoder).a23.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).n22 = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.a4t_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.a4t_1;
      } else {
        var tmp1 = this.a4t_1.z4q_1;
        var p1 = this.g4t_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp1, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.b4t_1, this.c4t_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.a4t_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.a4t_1;
      } else {
        var tmp4 = this.a4t_1.z4q_1;
        var p1_0 = this.g4t_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp4, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.b4t_1, this.c4t_1, null);
    } else if (!(this.h4t_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.i4t_1 = descriptor.v1y();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).n22.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).c22 = function () {
    this.a4t_1.i4r('null');
  };
  protoOf(StreamingJsonEncoder).d22 = function (value) {
    if (this.g4t_1) {
      this.l22(value.toString());
    } else {
      this.a4t_1.r4r(value);
    }
  };
  protoOf(StreamingJsonEncoder).e22 = function (value) {
    if (this.g4t_1) {
      this.l22(value.toString());
    } else {
      this.a4t_1.m4r(value);
    }
  };
  protoOf(StreamingJsonEncoder).f22 = function (value) {
    if (this.g4t_1) {
      this.l22(value.toString());
    } else {
      this.a4t_1.o4r(value);
    }
  };
  protoOf(StreamingJsonEncoder).g22 = function (value) {
    if (this.g4t_1) {
      this.l22(value.toString());
    } else {
      this.a4t_1.p4r(value);
    }
  };
  protoOf(StreamingJsonEncoder).h22 = function (value) {
    if (this.g4t_1) {
      this.l22(value.toString());
    } else {
      this.a4t_1.q4r(value);
    }
  };
  protoOf(StreamingJsonEncoder).i22 = function (value) {
    if (this.g4t_1) {
      this.l22(value.toString());
    } else {
      this.a4t_1.k4r(value);
    }
    if (!this.f4t_1.i4p_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.a4t_1.z4q_1));
    }
  };
  protoOf(StreamingJsonEncoder).j22 = function (value) {
    if (this.g4t_1) {
      this.l22(value.toString());
    } else {
      this.a4t_1.l4r(value);
    }
    if (!this.f4t_1.i4p_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.a4t_1.z4q_1));
    }
  };
  protoOf(StreamingJsonEncoder).k22 = function (value) {
    this.l22(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).l22 = function (value) {
    return this.a4t_1.s4r(value);
  };
  protoOf(StreamingJsonEncoder).m22 = function (enumDescriptor, index) {
    this.l22(enumDescriptor.p1z(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.m1z() && get_unsignedNumberDescriptors().x1(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.m1z() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).u1x(), serializer_0(Companion_getInstance()).u1x(), serializer_2(Companion_getInstance_1()).u1x(), serializer_3(Companion_getInstance_2()).u1x()]);
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
    _this__u8e3s4.x8(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.vd(value, lastPos, i);
          _this__u8e3s4.w8(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.vd(value, lastPos, value.length);
    else
      _this__u8e3s4.w8(value);
    _this__u8e3s4.x8(_Char___init__impl__6a9atx(34));
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
    return input.g21(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.z4v(tag), toString($this.a4w()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.v4v_1 = json;
    this.w4v_1 = value;
    this.x4v_1 = polymorphicDiscriminator;
    this.y4v_1 = this.q4p().l4n_1;
  }
  protoOf(AbstractJsonTreeDecoder).q4p = function () {
    return this.v4v_1;
  };
  protoOf(AbstractJsonTreeDecoder).z = function () {
    return this.w4v_1;
  };
  protoOf(AbstractJsonTreeDecoder).w21 = function () {
    return this.q4p().w21();
  };
  protoOf(AbstractJsonTreeDecoder).a4w = function () {
    var tmp0_safe_receiver = this.m2f();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.b4w(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.z() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).z4v = function (currentTag) {
    return this.k2g() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).r4p = function () {
    return this.a4w();
  };
  protoOf(AbstractJsonTreeDecoder).g21 = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.q4p().l4n_1.g4p_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.w1x(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.u1x(), this.q4p());
      var tmp0 = this.r4p();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.u1x().v1y();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).fc();
        var tmp_1 = getKClassFromExpression(tmp0).fc();
        var tmp$ret$1 = this.k2g();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.we(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.q4p(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).n2f = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).h21 = function (descriptor) {
    var currentObject = this.a4w();
    var tmp0_subject = descriptor.l1z();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.q4p();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.v1y();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).fc();
        var tmp_3 = getKClassFromExpression(currentObject).fc();
        var tmp$ret$0 = this.k2g();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.q4p();
        var keyDescriptor = carrierDescriptor(descriptor.s1z(0), this_0.w21());
        var keyKind = keyDescriptor.l1z();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.q4p();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.v1y();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).fc();
            var tmp_8 = getKClassFromExpression(currentObject).fc();
            var tmp$ret$3 = this.k2g();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.l4n_1.b4p_1) {
            var tmp_9 = this.q4p();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.v1y();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).fc();
              var tmp_11 = getKClassFromExpression(currentObject).fc();
              var tmp$ret$7 = this.k2g();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.q4p();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.v1y();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).fc();
          var tmp_14 = getKClassFromExpression(currentObject).fc();
          var tmp$ret$12 = this.k2g();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.x4v_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).i21 = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).s20 = function () {
    var tmp = this.a4w();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).c4w = function (tag, enumDescriptor) {
    var tmp = this.q4p();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp1 = this.b4w(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.v1y();
    if (!(tmp1 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).fc();
      var tmp_1 = getKClassFromExpression(tmp1).fc();
      var tmp$ret$0 = this.z4v(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp1.v4p());
  };
  protoOf(AbstractJsonTreeDecoder).w2g = function (tag, enumDescriptor) {
    return this.c4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).d4w = function (tag) {
    return !(this.b4w(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).m2g = function (tag) {
    return this.d4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e4w = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b4w(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).fc();
        var tmp_0 = getKClassFromExpression(value).fc();
        var tmp$ret$0 = this.z4v(tag);
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
  protoOf(AbstractJsonTreeDecoder).n2g = function (tag) {
    return this.e4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f4w = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b4w(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).fc();
        var tmp_0 = getKClassFromExpression(value).fc();
        var tmp$ret$0 = this.z4v(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
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
  protoOf(AbstractJsonTreeDecoder).o2g = function (tag) {
    return this.f4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g4w = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b4w(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).fc();
        var tmp_0 = getKClassFromExpression(value).fc();
        var tmp$ret$0 = this.z4v(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
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
  protoOf(AbstractJsonTreeDecoder).p2g = function (tag) {
    return this.g4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h4w = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b4w(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).fc();
        var tmp_0 = getKClassFromExpression(value).fc();
        var tmp$ret$0 = this.z4v(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
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
  protoOf(AbstractJsonTreeDecoder).q2g = function (tag) {
    return this.h4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i4w = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b4w(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).fc();
        var tmp_0 = getKClassFromExpression(value).fc();
        var tmp$ret$0 = this.z4v(tag);
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
  protoOf(AbstractJsonTreeDecoder).r2g = function (tag) {
    return this.i4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j4w = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b4w(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).fc();
        var tmp_0 = getKClassFromExpression(value).fc();
        var tmp$ret$0 = this.z4v(tag);
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
    var specialFp = this.q4p().l4n_1.i4p_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.a4w()));
  };
  protoOf(AbstractJsonTreeDecoder).s2g = function (tag) {
    return this.j4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k4w = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b4w(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).fc();
        var tmp_0 = getKClassFromExpression(value).fc();
        var tmp$ret$0 = this.z4v(tag);
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
    var specialFp = this.q4p().l4n_1.i4p_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.a4w()));
  };
  protoOf(AbstractJsonTreeDecoder).t2g = function (tag) {
    return this.k4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l4w = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.b4w(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).fc();
        var tmp_0 = getKClassFromExpression(value).fc();
        var tmp$ret$0 = this.z4v(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.v4p()));
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
  protoOf(AbstractJsonTreeDecoder).u2g = function (tag) {
    return this.l4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m4w = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.b4w(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).fc();
      var tmp_0 = getKClassFromExpression(value).fc();
      var tmp$ret$0 = this.z4v(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.z4v(tag), toString(this.a4w()));
    if (!value_0.c4q_1 && !this.q4p().l4n_1.a4p_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.z4v(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.a4w()));
    }
    return value_0.e4q_1;
  };
  protoOf(AbstractJsonTreeDecoder).v2g = function (tag) {
    return this.m4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n4w = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.q4p();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp1 = this.b4w(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.v1y();
      if (!(tmp1 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).fc();
        var tmp_2 = getKClassFromExpression(tmp1).fc();
        var tmp$ret$0 = this.z4v(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp1.v4p());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.q4p());
    } else {
      tmp = protoOf(NamedValueDecoder).x2g.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).x2g = function (tag, inlineDescriptor) {
    return this.n4w((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).e21 = function (descriptor) {
    return !(this.m2f() == null) ? protoOf(NamedValueDecoder).e21.call(this, descriptor) : (new JsonPrimitiveDecoder(this.q4p(), this.z(), this.x4v_1)).e21(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.q4p();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.t1z(index);
      var elementDescriptor = descriptor.s1z(index);
      var tmp;
      if (isOptional && !elementDescriptor.h1z()) {
        var tmp_0 = $this.b4w(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.l1z(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.h1z()) {
          var tmp_2 = $this.b4w(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp_3 = $this.b4w(tag);
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
        var coerceToNull = !tmp0.l4n_1.d4p_1 && elementDescriptor.h1z();
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
    $this.x4w_1 = (!$this.q4p().l4n_1.d4p_1 && !descriptor.t1z(index) && descriptor.s1z(index).h1z());
    return $this.x4w_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.u4w_1 = value;
    this.v4w_1 = polyDescriptor;
    this.w4w_1 = 0;
    this.x4w_1 = false;
  }
  protoOf(JsonTreeDecoder).z = function () {
    return this.u4w_1;
  };
  protoOf(JsonTreeDecoder).y21 = function (descriptor) {
    while (this.w4w_1 < descriptor.n1z()) {
      var _unary__edvuaz = this.w4w_1;
      this.w4w_1 = _unary__edvuaz + 1 | 0;
      var name = this.i2f(descriptor, _unary__edvuaz);
      var index = this.w4w_1 - 1 | 0;
      this.x4w_1 = false;
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
        tmp = !this.y4v_1.f4p_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).s20 = function () {
    return !this.x4w_1 && protoOf(AbstractJsonTreeDecoder).s20.call(this);
  };
  protoOf(JsonTreeDecoder).j2f = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.q4p());
    var baseName = descriptor.p1z(index);
    if (strategy == null) {
      if (!this.y4v_1.j4p_1)
        return baseName;
      if (this.z().l2().x1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.q4p(), descriptor);
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
    var fallbackName = strategy == null ? null : strategy.n4s(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).b4w = function (tag) {
    return getValue(this.z(), tag);
  };
  protoOf(JsonTreeDecoder).h21 = function (descriptor) {
    if (descriptor === this.v4w_1) {
      var tmp = this.q4p();
      var tmp1 = this.a4w();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.v4w_1.v1y();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).fc();
        var tmp_1 = getKClassFromExpression(tmp1).fc();
        var tmp$ret$0 = this.k2g();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.x4v_1, this.v4w_1);
    }
    return protoOf(AbstractJsonTreeDecoder).h21.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).i21 = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.q4p())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.l1z();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.q4p());
    var tmp_1;
    if (strategy == null && !this.y4v_1.j4p_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.q4p(), descriptor).l2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.q4p()).z4u(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.z().l2().p();
    while (_iterator__ex2g4s.q()) {
      var key = _iterator__ex2g4s.r();
      if (!names.x1(key) && !(key === this.x4v_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.k2g() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.z().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.e4x_1 = value;
    this.f4x_1 = this.e4x_1.s();
    this.g4x_1 = -1;
  }
  protoOf(JsonTreeListDecoder).z = function () {
    return this.e4x_1;
  };
  protoOf(JsonTreeListDecoder).j2f = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).b4w = function (tag) {
    return this.e4x_1.u(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).y21 = function (descriptor) {
    while (this.g4x_1 < (this.f4x_1 - 1 | 0)) {
      this.g4x_1 = this.g4x_1 + 1 | 0;
      return this.g4x_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.n4x_1 = value;
    this.e2g('primitive');
  }
  protoOf(JsonPrimitiveDecoder).z = function () {
    return this.n4x_1;
  };
  protoOf(JsonPrimitiveDecoder).y21 = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).b4w = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.n4x_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.y4x_1 = value;
    this.z4x_1 = toList(this.y4x_1.l2());
    this.a4y_1 = imul(this.z4x_1.s(), 2);
    this.b4y_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).z = function () {
    return this.y4x_1;
  };
  protoOf(JsonTreeMapDecoder).j2f = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.z4x_1.u(i);
  };
  protoOf(JsonTreeMapDecoder).y21 = function (descriptor) {
    while (this.b4y_1 < (this.a4y_1 - 1 | 0)) {
      this.b4y_1 = this.b4y_1 + 1 | 0;
      return this.b4y_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).b4w = function (tag) {
    return (this.b4y_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.y4x_1, tag);
  };
  protoOf(JsonTreeMapDecoder).i21 = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.u1x())).g21(deserializer);
  }
  function writeJson(json, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
    encoder.z22(serializer, value);
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
    tmp.o4y_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonTreeEncoder).p4y = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    this.o4y_1.n2(key, element);
  };
  protoOf(JsonTreeEncoder).a23 = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.f4y_1.d4p_1) {
      protoOf(AbstractJsonTreeEncoder).a23.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).q4y = function () {
    return new JsonObject(this.o4y_1);
  };
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.f4z_1 = this$0;
    this.g4z_1 = $tag;
    AbstractEncoder.call(this);
    this.e4z_1 = this$0.d4y_1.w21();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).w21 = function () {
    return this.e4z_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).h4z = function (s) {
    return this.f4z_1.p4y(this.g4z_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).g22 = function (value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.h4z(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).h22 = function (value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.h4z(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).e22 = function (value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.h4z(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).f22 = function (value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.h4z(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.i4z_1 = this$0;
    this.j4z_1 = $tag;
    this.k4z_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).w21 = function () {
    return this.i4z_1.d4y_1.w21();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).l22 = function (value) {
    return this.i4z_1.p4y(this.j4z_1, new JsonLiteral(value, false, this.k4z_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.p4y(this$0.d2g(), node);
      return Unit_instance;
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.d4y_1 = json;
    this.e4y_1 = nodeConsumer;
    this.f4y_1 = this.d4y_1.l4n_1;
    this.g4y_1 = null;
    this.h4y_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).q4p = function () {
    return this.d4y_1;
  };
  protoOf(AbstractJsonTreeEncoder).w21 = function () {
    return this.d4y_1.w21();
  };
  protoOf(AbstractJsonTreeEncoder).j2f = function (descriptor, index) {
    return getJsonElementName(descriptor, this.d4y_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).e23 = function (descriptor, index) {
    return this.f4y_1.y4o_1;
  };
  protoOf(AbstractJsonTreeEncoder).n2f = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).c23 = function () {
  };
  protoOf(AbstractJsonTreeEncoder).c22 = function () {
    var tmp0_elvis_lhs = this.m2f();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.e4y_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.r4y(tag);
  };
  protoOf(AbstractJsonTreeEncoder).r4y = function (tag) {
    return this.p4y(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).q2f = function (tag) {
    return this.r4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).s4y = function (tag, value) {
    return this.p4y(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).r2f = function (tag, value) {
    return this.s4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).t4y = function (tag, value) {
    return this.p4y(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).s2f = function (tag, value) {
    return this.t4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).u4y = function (tag, value) {
    return this.p4y(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).t2f = function (tag, value) {
    return this.u4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).v4y = function (tag, value) {
    return this.p4y(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).u2f = function (tag, value) {
    return this.v4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).w4y = function (tag, value) {
    this.p4y(tag, JsonPrimitive_1(value));
    if (!this.f4y_1.i4p_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.q4y()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).v2f = function (tag, value) {
    return this.w4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).z22 = function (serializer, value) {
    if (!(this.m2f() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.u1x(), this.w21()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.q4p().l4n_1.g4p_1) {
          serializer.v1x(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.q4p().l4n_1.o4p_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.q4p().l4n_1.o4p_1.r2_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.u1x().l1z();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.u1x(), this.q4p()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.u1x()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer_0(casted, this, value);
          if (!(baseClassDiscriminator == null)) {
            access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
            checkKind_0(actual.u1x().l1z());
          }
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          var serialName = actualSerializer.u1x().v1y();
          this.g4y_1 = baseClassDiscriminator;
          this.h4y_1 = serialName;
        }
        actualSerializer.v1x(this, value);
      }
    } else {
      // Inline function 'kotlin.apply' call
      (new JsonPrimitiveEncoder(this.d4y_1, this.e4y_1)).z22(serializer, value);
    }
  };
  protoOf(AbstractJsonTreeEncoder).x4y = function (tag, value) {
    this.p4y(tag, JsonPrimitive_1(value));
    if (!this.f4y_1.i4p_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.q4y()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).w2f = function (tag, value) {
    return this.x4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).y4y = function (tag, value) {
    return this.p4y(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).x2f = function (tag, value) {
    return this.y4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).z4y = function (tag, value) {
    return this.p4y(tag, JsonPrimitive_0(toString_1(value)));
  };
  protoOf(AbstractJsonTreeEncoder).y2f = function (tag, value) {
    return this.z4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).a4z = function (tag, value) {
    return this.p4y(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).z2f = function (tag, value) {
    return this.a4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).b4z = function (tag, enumDescriptor, ordinal) {
    return this.p4y(tag, JsonPrimitive_0(enumDescriptor.p1z(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).a2g = function (tag, enumDescriptor, ordinal) {
    return this.b4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).c4z = function (tag, value) {
    this.p4y(tag, JsonPrimitive_0(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).o2f = function (tag, value) {
    return this.c4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).d4z = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).b2g.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).b2g = function (tag, inlineDescriptor) {
    return this.d4z((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).n22 = function (descriptor) {
    var tmp;
    if (!(this.m2f() == null)) {
      if (!(this.g4y_1 == null))
        this.h4y_1 = descriptor.v1y();
      tmp = protoOf(NamedValueEncoder).n22.call(this, descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.d4y_1, this.e4y_1)).n22(descriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).h21 = function (descriptor) {
    var tmp;
    if (this.m2f() == null) {
      tmp = this.e4y_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.l1z();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.d4y_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.d4y_1;
        var keyDescriptor = carrierDescriptor(descriptor.s1z(0), this_0.w21());
        var keyKind = keyDescriptor.l1z();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.d4y_1, consumer);
        } else {
          if (this_0.l4n_1.b4p_1) {
            tmp_2 = new JsonTreeListEncoder(this.d4y_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.d4y_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.g4y_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.p4y('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.h4y_1;
        encoder.p4y('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.v1y() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.h4y_1;
        encoder.p4y(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.v1y() : tmp2_elvis_lhs));
      }
      this.g4y_1 = null;
      this.h4y_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).c2g = function (descriptor) {
    this.e4y_1(this.q4y());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.l1z();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.l1z() === ENUM_getInstance();
    }
    return tmp;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.a50_1 = null;
    this.e2g('primitive');
  }
  protoOf(JsonPrimitiveEncoder).p4y = function (key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.a50_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.a50_1 = element;
    this.e4y_1(element);
  };
  protoOf(JsonPrimitiveEncoder).q4y = function () {
    var tmp0 = this.a50_1;
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
    tmp.h50_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonTreeListEncoder).j2f = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).p4y = function (key, element) {
    var idx = toInt(key);
    this.h50_1.g2(idx, element);
  };
  protoOf(JsonTreeListEncoder).q4y = function () {
    return new JsonArray(this.h50_1);
  };
  function _get_tag__e6h4qf($this) {
    var tmp = $this.s4z_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.t4z_1 = true;
  }
  protoOf(JsonTreeMapEncoder).p4y = function (key, element) {
    if (this.t4z_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.v4p();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().k4q_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().p4q_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.s4z_1 = tmp_0;
      this.t4z_1 = false;
    } else {
      var tmp0 = this.o4y_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.n2(key_0, element);
      this.t4z_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).q4y = function () {
    return new JsonObject(this.o4y_1);
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
    this.m4v_1 = begin;
    this.n4v_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.l1z();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.s1z(0), _this__u8e3s4.w21());
          var keyKind = keyDescriptor.l1z();
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
            if (_this__u8e3s4.l4n_1.b4p_1) {
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
    if (equals(_this__u8e3s4.l1z(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.m1z()) {
      tmp = carrierDescriptor(_this__u8e3s4.s1z(0), module_0);
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
    $this.i50(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.i50(lastPosition, currentPosition);
    var result = $this.d4o_1.toString();
    $this.d4o_1.be(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.c4o_1);
    $this.c4o_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.j50(), $this.a4o_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.k50(currentPosition);
    if (currentPosition === -1) {
      $this.j4s('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.j50();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.j50(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.j4s("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.d4o_1.x8(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.a4o_1 = startPos;
      $this.l50();
      if (($this.a4o_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.j4s('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.a4o_1);
    }
    $this.d4o_1.x8(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.j4s("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.k50(start);
    if (current >= charSequenceLength($this.j50()) || current === -1) {
      $this.j4s('EOF');
    }
    var tmp = $this.j50();
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
        $this.j4s("Expected valid boolean literal prefix, but had '" + $this.r4t() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.j50()) - current | 0) < literalSuffix.length) {
      $this.j4s('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.j50(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.j4s("Expected valid boolean literal prefix, but had '" + $this.r4t() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.a4o_1 = current + literalSuffix.length | 0;
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
    this.a4o_1 = 0;
    this.b4o_1 = new JsonPath();
    this.c4o_1 = null;
    this.d4o_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).l50 = function () {
  };
  protoOf(AbstractJsonLexer).c4v = function () {
    var current = this.m50();
    var source = this.j50();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.a4o_1 = this.a4o_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).n50 = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).e4o = function () {
    var nextToken = this.t4t();
    if (!(nextToken === 10)) {
      this.j4s('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.j50(), this.a4o_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).n4t = function (expected) {
    var token = this.t4t();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.a4o_1 - 1 | 0 : this.a4o_1;
      var s = this.a4o_1 === charSequenceLength(this.j50()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j50(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.j4s(tmp$ret$0, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).o50 = function (expected) {
    if (this.a4o_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.a4o_1;
        try {
          this.a4o_1 = this.a4o_1 - 1 | 0;
          tmp$ret$1 = this.r4t();
          break $l$block;
        }finally {
          this.a4o_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.i4s("Expected string literal but 'null' literal was found", this.a4o_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.a4o_1 - 1 | 0 : this.a4o_1;
    var s = this.a4o_1 === charSequenceLength(this.j50()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j50(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.j4s(tmp$ret$2, position);
  };
  protoOf(AbstractJsonLexer).o4t = function () {
    var source = this.j50();
    var cpos = this.a4o_1;
    $l$loop_0: while (true) {
      cpos = this.k50(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.a4o_1 = cpos;
      return charToTokenClass(ch);
    }
    this.a4o_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).d4v = function (doConsume) {
    var current = this.m50();
    current = this.k50(current);
    var len = charSequenceLength(this.j50()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.j50(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.j50(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.a4o_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).o4v = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.d4v(doConsume) : $super.d4v.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).e4v = function (isLenient) {
    var token = this.o4t();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.r4t();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.q4t();
    }
    var string = tmp;
    this.c4o_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).p50 = function () {
    this.c4o_1 = null;
  };
  protoOf(AbstractJsonLexer).g1g = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.j50();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).q4t = function () {
    if (!(this.c4o_1 == null)) {
      return takePeeked(this);
    }
    return this.h4v();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.k50(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.j4s('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.i50(lastPosition, currentPosition);
          currentPosition = this.k50(currentPosition);
          if (currentPosition === -1) {
            this.j4s('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.g1g(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.a4o_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).i4v = function () {
    var result = this.r4t();
    if (result === 'null' && wasUnquotedString(this)) {
      this.j4s("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).r4t = function () {
    if (!(this.c4o_1 == null)) {
      return takePeeked(this);
    }
    var current = this.m50();
    if (current >= charSequenceLength(this.j50()) || current === -1) {
      this.j4s('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.j50(), current));
    if (token === 1) {
      return this.q4t();
    }
    if (!(token === 0)) {
      this.j4s('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.j50(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.j50(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.j50())) {
        usedAppend = true;
        this.i50(this.a4o_1, current);
        var eof = this.k50(current);
        if (eof === -1) {
          this.a4o_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.g1g(this.a4o_1, current);
    } else {
      tmp = decodedString(this, this.a4o_1, current);
    }
    var result = tmp;
    this.a4o_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).i50 = function (fromIndex, toIndex) {
    this.d4o_1.vd(this.j50(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).g4v = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.o4t();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.r4t();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.o4t();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.r4t();
        else
          this.h4v();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.n(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.a4o_1, 'found ] instead of } at path: ' + this.b4o_1.toString(), this.j50());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.a4o_1, 'found } instead of ] at path: ' + this.b4o_1.toString(), this.j50());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.j4s('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.t4t();
      if (tokenStack.s() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.j50()) + "', currentPosition=" + this.a4o_1 + ')';
  };
  protoOf(AbstractJsonLexer).f4v = function (key) {
    var processed = this.g1g(0, this.a4o_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.b4o_1.w4s() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.j50(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).i4s = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.b4o_1.w4s() + hintMessage, this.j50());
  };
  protoOf(AbstractJsonLexer).j4s = function (message, position, hint, $super) {
    position = position === VOID ? this.a4o_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.i4s(message, position, hint) : $super.i4s.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).q4v = function () {
    var current = this.m50();
    current = this.k50(current);
    if (current >= charSequenceLength(this.j50()) || current === -1) {
      this.j4s('EOF');
    }
    var tmp;
    if (charSequenceGet(this.j50(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.j50())) {
        this.j4s('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.j50()))) {
      var ch = charSequenceGet(this.j50(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.j4s('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.j4s("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.j4s("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.j4s("Unexpected symbol '-' in numeric literal");
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
        this.j4s("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
        this.j4s('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.j4s('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.j4s('EOF');
      }
      if (!(charSequenceGet(this.j50(), current) === _Char___init__impl__6a9atx(34))) {
        this.j4s('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.a4o_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.r3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).r3() || doubleAccumulator < (new Long(0, -2147483648)).r3()) {
        this.j4s('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.j4s("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.g3();
    } else {
      this.j4s('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).f4q = function () {
    var result = this.q4v();
    var next = this.t4t();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.a4o_1 - 1 | 0 : this.a4o_1;
      var s = this.a4o_1 === charSequenceLength(this.j50()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j50(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.j4s(tmp$ret$0, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).p4v = function () {
    var current = this.m50();
    if (current === charSequenceLength(this.j50())) {
      this.j4s('EOF');
    }
    var tmp;
    if (charSequenceGet(this.j50(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.a4o_1 === charSequenceLength(this.j50())) {
        this.j4s('EOF');
      }
      if (!(charSequenceGet(this.j50(), this.a4o_1) === _Char___init__impl__6a9atx(34))) {
        this.j4s('Expected closing quotation mark');
      }
      this.a4o_1 = this.a4o_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().r50_1;
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
    return c < 117 ? CharMappings_getInstance().q50_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.q50_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.r50_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.q50_1 = charArray(117);
    this.r50_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).t4t = function () {
    var source = this.j50();
    var cpos = this.m50();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.a4o_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).p4t = function () {
    var current = this.m50();
    if (current >= this.j50().length || current === -1)
      return false;
    return this.n50(charSequenceGet(this.j50(), current));
  };
  protoOf(StringJsonLexerWithComments).b4v = function (expected) {
    var source = this.j50();
    var current = this.m50();
    if (current >= source.length || current === -1) {
      this.a4o_1 = -1;
      this.o50(expected);
    }
    var c = charSequenceGet(source, current);
    this.a4o_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.o50(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).o4t = function () {
    var source = this.j50();
    var cpos = this.m50();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.a4o_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).m50 = function () {
    var current = this.a4o_1;
    if (current === -1)
      return current;
    var source = this.j50();
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
            this.a4o_1 = source.length;
            this.j4s('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.a4o_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.b51_1 = source;
  }
  protoOf(StringJsonLexer).j50 = function () {
    return this.b51_1;
  };
  protoOf(StringJsonLexer).k50 = function (position) {
    return position < this.j50().length ? position : -1;
  };
  protoOf(StringJsonLexer).t4t = function () {
    var source = this.j50();
    var cpos = this.a4o_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.a4o_1 = cpos;
      return charToTokenClass(c);
    }
    this.a4o_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).p4t = function () {
    var current = this.a4o_1;
    if (current === -1)
      return false;
    var source = this.j50();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.a4o_1 = current;
      return this.n50(c);
    }
    this.a4o_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).m50 = function () {
    var current = this.a4o_1;
    if (current === -1)
      return current;
    var source = this.j50();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.a4o_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).b4v = function (expected) {
    if (this.a4o_1 === -1) {
      this.o50(expected);
    }
    var source = this.j50();
    var cpos = this.a4o_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.a4o_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.o50(expected);
    }
    this.a4o_1 = -1;
    this.o50(expected);
  };
  protoOf(StringJsonLexer).h4v = function () {
    this.b4v(_Char___init__impl__6a9atx(34));
    var current = this.a4o_1;
    var closingQuote = indexOf_0(this.j50(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.r4t();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.a4o_1 - 1 | 0 : this.a4o_1;
      var s = this.a4o_1 === charSequenceLength(this.j50()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.j50(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.j4s(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.j50(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.j50(), this.a4o_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.a4o_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.j50().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).j4v = function (keyToMatch, isLenient) {
    var positionSnapshot = this.a4o_1;
    try {
      if (!(this.t4t() === 6))
        return null;
      var firstKey = this.e4v(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.p50();
      if (!(this.t4t() === 5))
        return null;
      return this.e4v(isLenient);
    }finally {
      this.a4o_1 = positionSnapshot;
      this.p50();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.l4n_1.n4p_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.n4n_1;
  }
  function JsonToStringWriter() {
    this.r4n_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).n4r = function (value) {
    this.r4n_1.zd(value);
  };
  protoOf(JsonToStringWriter).h4r = function (char) {
    this.r4n_1.x8(char);
  };
  protoOf(JsonToStringWriter).j4r = function (text) {
    this.r4n_1.w8(text);
  };
  protoOf(JsonToStringWriter).t4r = function (text) {
    printQuoted(this.r4n_1, text);
  };
  protoOf(JsonToStringWriter).l1d = function () {
    this.r4n_1.ce();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.r4n_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).h1z = get_isNullable;
  protoOf(defer$1).m1z = get_isInline;
  protoOf(defer$1).o1z = get_annotations;
  protoOf(JsonSerializersModuleValidator).i2j = contextual;
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
  _.$_$.c = JsonNull_getInstance;
  _.$_$.d = Companion_instance_0;
  _.$_$.e = JsonObjectSerializer_getInstance;
  _.$_$.f = JsonArray;
  _.$_$.g = JsonClassDiscriminator;
  _.$_$.h = JsonElement;
  _.$_$.i = JsonObjectBuilder;
  _.$_$.j = JsonObject;
  _.$_$.k = JsonPrimitive_0;
  _.$_$.l = JsonPrimitive_1;
  _.$_$.m = JsonPrimitive_2;
  _.$_$.n = JsonPrimitive;
  _.$_$.o = Json_0;
  _.$_$.p = get_boolean;
  _.$_$.q = get_contentOrNull;
  _.$_$.r = get_jsonArray;
  _.$_$.s = get_jsonObject;
  _.$_$.t = get_jsonPrimitive;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
