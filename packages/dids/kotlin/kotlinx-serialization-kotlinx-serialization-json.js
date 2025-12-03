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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var protoOf = kotlin_kotlin.$_$.wc;
  var initMetadataForObject = kotlin_kotlin.$_$.yb;
  var VOID = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.w5;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var initMetadataForClass = kotlin_kotlin.$_$.sb;
  var toString = kotlin_kotlin.$_$.ad;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.a2;
  var charSequenceLength = kotlin_kotlin.$_$.ib;
  var charSequenceGet = kotlin_kotlin.$_$.hb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a3;
  var equals = kotlin_kotlin.$_$.mb;
  var THROW_CCE = kotlin_kotlin.$_$.ih;
  var getStringHashCode = kotlin_kotlin.$_$.qb;
  var toString_0 = kotlin_kotlin.$_$.ni;
  var Enum = kotlin_kotlin.$_$.xg;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var isInterface = kotlin_kotlin.$_$.hc;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var initMetadataForInterface = kotlin_kotlin.$_$.wb;
  var initMetadataForCompanion = kotlin_kotlin.$_$.tb;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.m1;
  var hashCode = kotlin_kotlin.$_$.rb;
  var joinToString = kotlin_kotlin.$_$.h8;
  var KtMap = kotlin_kotlin.$_$.g6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.f2;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var KtList = kotlin_kotlin.$_$.d6;
  var getBooleanHashCode = kotlin_kotlin.$_$.ob;
  var toDouble = kotlin_kotlin.$_$.uf;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.j5;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.b1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.ii;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var toLongOrNull = kotlin_kotlin.$_$.zf;
  var toULongOrNull = kotlin_kotlin.$_$.fg;
  var ULong = kotlin_kotlin.$_$.qh;
  var Companion_getInstance = kotlin_kotlin.$_$.u5;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.j4;
  var toDoubleOrNull = kotlin_kotlin.$_$.tf;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.qf;
  var lazy = kotlin_kotlin.$_$.hi;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var KProperty1 = kotlin_kotlin.$_$.od;
  var getPropertyCallableRef = kotlin_kotlin.$_$.pb;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var toLong = kotlin_kotlin.$_$.yc;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.w3;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.b4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.i4;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.k4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.n3;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.p3;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.r4;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.t4;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var captureStack = kotlin_kotlin.$_$.eb;
  var charSequenceSubSequence = kotlin_kotlin.$_$.jb;
  var coerceAtLeast = kotlin_kotlin.$_$.ed;
  var coerceAtMost = kotlin_kotlin.$_$.fd;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var Collection = kotlin_kotlin.$_$.y5;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.s;
  var singleOrNull = kotlin_kotlin.$_$.f9;
  var emptyMap = kotlin_kotlin.$_$.p7;
  var getValue = kotlin_kotlin.$_$.c8;
  var copyOf = kotlin_kotlin.$_$.h7;
  var copyOf_0 = kotlin_kotlin.$_$.i7;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.vg;
  var invoke = kotlin_kotlin.$_$.bi;
  var CoroutineImpl = kotlin_kotlin.$_$.wa;
  var DeepRecursiveScope = kotlin_kotlin.$_$.wg;
  var Unit = kotlin_kotlin.$_$.th;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.fa;
  var initMetadataForLambda = kotlin_kotlin.$_$.xb;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.ub;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var getKClass = kotlin_kotlin.$_$.g;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var ensureNotNull = kotlin_kotlin.$_$.ai;
  var substringBefore = kotlin_kotlin.$_$.of;
  var removeSuffix = kotlin_kotlin.$_$.ze;
  var substringAfter = kotlin_kotlin.$_$.lf;
  var contains = kotlin_kotlin.$_$.xd;
  var plus = kotlin_kotlin.$_$.ji;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var IllegalArgumentException = kotlin_kotlin.$_$.ah;
  var isFinite = kotlin_kotlin.$_$.di;
  var isFinite_0 = kotlin_kotlin.$_$.ci;
  var toUInt = kotlin_kotlin.$_$.eg;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.y3;
  var toULong = kotlin_kotlin.$_$.gg;
  var toUByte = kotlin_kotlin.$_$.dg;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.o3;
  var toUShort = kotlin_kotlin.$_$.hg;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.s4;
  var objectCreate = kotlin_kotlin.$_$.vc;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var toString_1 = kotlin_kotlin.$_$.h3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.t5;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.s5;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.v5;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var setOf = kotlin_kotlin.$_$.e9;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.g3;
  var numberToChar = kotlin_kotlin.$_$.rc;
  var equals_0 = kotlin_kotlin.$_$.fe;
  var toByte = kotlin_kotlin.$_$.xc;
  var startsWith = kotlin_kotlin.$_$.gf;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var numberRangeToNumber = kotlin_kotlin.$_$.qc;
  var ClosedRange = kotlin_kotlin.$_$.dd;
  var contains_0 = kotlin_kotlin.$_$.hd;
  var single = kotlin_kotlin.$_$.df;
  var Char = kotlin_kotlin.$_$.sg;
  var emptySet = kotlin_kotlin.$_$.q7;
  var plus_0 = kotlin_kotlin.$_$.v8;
  var toInt = kotlin_kotlin.$_$.xf;
  var toList = kotlin_kotlin.$_$.q9;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.mi;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var enumEntries = kotlin_kotlin.$_$.ya;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var last = kotlin_kotlin.$_$.m8;
  var removeLast = kotlin_kotlin.$_$.b9;
  var lastIndexOf = kotlin_kotlin.$_$.se;
  var Long = kotlin_kotlin.$_$.ch;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.c3;
  var numberToLong = kotlin_kotlin.$_$.uc;
  var charArray = kotlin_kotlin.$_$.gb;
  var indexOf = kotlin_kotlin.$_$.je;
  var indexOf_0 = kotlin_kotlin.$_$.ke;
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
    this.o4p_1 = configuration;
    this.p4p_1 = serializersModule;
    this.q4p_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).i22 = function () {
    return this.p4p_1;
  };
  protoOf(Json).j1z = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.u1d();
    }
  };
  protoOf(Json).k1z = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.g1y(), null);
    var result = input.s21(deserializer);
    lexer.h4q();
    return result;
  };
  protoOf(Json).r4p = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).s4p = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).t4p = function (string) {
    return this.k1z(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.a4r();
    return new JsonImpl(conf, builder.z4q_1);
  }
  function JsonBuilder(json) {
    this.i4q_1 = json.o4p_1.b4r_1;
    this.j4q_1 = json.o4p_1.g4r_1;
    this.k4q_1 = json.o4p_1.c4r_1;
    this.l4q_1 = json.o4p_1.d4r_1;
    this.m4q_1 = json.o4p_1.f4r_1;
    this.n4q_1 = json.o4p_1.h4r_1;
    this.o4q_1 = json.o4p_1.i4r_1;
    this.p4q_1 = json.o4p_1.k4r_1;
    this.q4q_1 = json.o4p_1.r4r_1;
    this.r4q_1 = json.o4p_1.m4r_1;
    this.s4q_1 = json.o4p_1.n4r_1;
    this.t4q_1 = json.o4p_1.o4r_1;
    this.u4q_1 = json.o4p_1.p4r_1;
    this.v4q_1 = json.o4p_1.q4r_1;
    this.w4q_1 = json.o4p_1.l4r_1;
    this.x4q_1 = json.o4p_1.e4r_1;
    this.y4q_1 = json.o4p_1.j4r_1;
    this.z4q_1 = json.i22();
  }
  protoOf(JsonBuilder).a4r = function () {
    if (this.y4q_1) {
      // Inline function 'kotlin.require' call
      if (!(this.p4q_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.q4q_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.m4q_1) {
      // Inline function 'kotlin.require' call
      if (!(this.n4q_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.n4q_1 === '    ')) {
      var tmp3 = this.n4q_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.n4q_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.i4q_1, this.k4q_1, this.l4q_1, this.x4q_1, this.m4q_1, this.j4q_1, this.n4q_1, this.o4q_1, this.y4q_1, this.p4q_1, this.w4q_1, this.r4q_1, this.s4q_1, this.t4q_1, this.u4q_1, this.v4q_1, this.q4q_1);
  };
  function validateConfiguration($this) {
    if (equals($this.i22(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.o4p_1);
    $this.i22().k2j(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator(discriminator) {
    this.s4r_1 = discriminator;
  }
  protoOf(JsonClassDiscriminator).equals = function (other) {
    if (!(other instanceof JsonClassDiscriminator))
      return false;
    var tmp0_other_with_cast = other instanceof JsonClassDiscriminator ? other : THROW_CCE();
    if (!(this.s4r_1 === tmp0_other_with_cast.s4r_1))
      return false;
    return true;
  };
  protoOf(JsonClassDiscriminator).hashCode = function () {
    return imul(getStringHashCode('discriminator'), 127) ^ getStringHashCode(this.s4r_1);
  };
  protoOf(JsonClassDiscriminator).toString = function () {
    return '@kotlinx.serialization.json.JsonClassDiscriminator(' + 'discriminator=' + this.s4r_1 + ')';
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
    this.b4r_1 = encodeDefaults;
    this.c4r_1 = ignoreUnknownKeys;
    this.d4r_1 = isLenient;
    this.e4r_1 = allowStructuredMapKeys;
    this.f4r_1 = prettyPrint;
    this.g4r_1 = explicitNulls;
    this.h4r_1 = prettyPrintIndent;
    this.i4r_1 = coerceInputValues;
    this.j4r_1 = useArrayPolymorphism;
    this.k4r_1 = classDiscriminator;
    this.l4r_1 = allowSpecialFloatingPointValues;
    this.m4r_1 = useAlternativeNames;
    this.n4r_1 = namingStrategy;
    this.o4r_1 = decodeEnumsCaseInsensitive;
    this.p4r_1 = allowTrailingComma;
    this.q4r_1 = allowComments;
    this.r4r_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.b4r_1 + ', ignoreUnknownKeys=' + this.c4r_1 + ', isLenient=' + this.d4r_1 + ', ' + ('allowStructuredMapKeys=' + this.e4r_1 + ', prettyPrint=' + this.f4r_1 + ', explicitNulls=' + this.g4r_1 + ', ') + ("prettyPrintIndent='" + this.h4r_1 + "', coerceInputValues=" + this.i4r_1 + ', useArrayPolymorphism=' + this.j4r_1 + ', ') + ("classDiscriminator='" + this.k4r_1 + "', allowSpecialFloatingPointValues=" + this.l4r_1 + ', ') + ('useAlternativeNames=' + this.m4r_1 + ', namingStrategy=' + toString_0(this.n4r_1) + ', decodeEnumsCaseInsensitive=' + this.o4r_1 + ', ') + ('allowTrailingComma=' + this.p4r_1 + ', allowComments=' + this.q4r_1 + ', classDiscriminatorMode=' + this.r4r_1.toString() + ')');
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
    this.t4r_1 = baseClass;
    this.u4r_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.t4r_1.hc() + '>', SEALED_getInstance(), []);
  }
  protoOf(JsonContentPolymorphicSerializer).g1y = function () {
    return this.u4r_1;
  };
  protoOf(JsonContentPolymorphicSerializer).w1y = function (encoder, value) {
    var tmp0_elvis_lhs = encoder.i22().s23(this.t4r_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.t4r_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).h1y(encoder, value);
  };
  protoOf(JsonContentPolymorphicSerializer).h1y = function (encoder, value) {
    return this.w1y(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(JsonContentPolymorphicSerializer).i1y = function (decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.v4r();
    var tmp = this.w4r(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.x4r().s4p(actualSerializer, tree);
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
  protoOf(Companion).y4r = function () {
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
  protoOf(Companion_0).y4r = function () {
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
    this.z4r_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.z4r_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.z4r_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.z4r_1.x();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).h = function () {
    return this.z4r_1.h();
  };
  protoOf(JsonObject).e2n = function (key) {
    return this.z4r_1.i2(key);
  };
  protoOf(JsonObject).i2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.e2n((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).a4s = function (value) {
    return this.z4r_1.j2(value);
  };
  protoOf(JsonObject).j2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.a4s(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).af = function (key) {
    return this.z4r_1.k2(key);
  };
  protoOf(JsonObject).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.af((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.z4r_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).s = function () {
    return this.z4r_1.s();
  };
  protoOf(JsonObject).l2 = function () {
    return this.z4r_1.l2();
  };
  protoOf(JsonObject).m2 = function () {
    return this.z4r_1.m2();
  };
  protoOf(JsonObject).x = function () {
    return this.z4r_1.x();
  };
  function Companion_1() {
  }
  protoOf(Companion_1).y4r = function () {
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
    return this.c4s();
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
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.c4s());
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
    this.d4s_1 = 'null';
  }
  protoOf(JsonNull).b4s = function () {
    return false;
  };
  protoOf(JsonNull).c4s = function () {
    return this.d4s_1;
  };
  protoOf(JsonNull).y4r = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).j2a = function (typeParamsSerializers) {
    return this.y4r();
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
      tmp = _this__u8e3s4.c4s();
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
    this.e4s_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.e4s_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.e4s_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.e4s_1, ',', '[', ']');
  };
  protoOf(JsonArray).h = function () {
    return this.e4s_1.h();
  };
  protoOf(JsonArray).f4s = function (element) {
    return this.e4s_1.x1(element);
  };
  protoOf(JsonArray).x1 = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.f4s(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).p = function () {
    return this.e4s_1.p();
  };
  protoOf(JsonArray).g4s = function (elements) {
    return this.e4s_1.y1(elements);
  };
  protoOf(JsonArray).y1 = function (elements) {
    return this.g4s(elements);
  };
  protoOf(JsonArray).u = function (index) {
    return this.e4s_1.u(index);
  };
  protoOf(JsonArray).h4s = function (element) {
    return this.e4s_1.z1(element);
  };
  protoOf(JsonArray).z1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.h4s(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).i4s = function (element) {
    return this.e4s_1.a2(element);
  };
  protoOf(JsonArray).a2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.i4s(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).b2 = function () {
    return this.e4s_1.b2();
  };
  protoOf(JsonArray).v = function (index) {
    return this.e4s_1.v(index);
  };
  protoOf(JsonArray).c2 = function (fromIndex, toIndex) {
    return this.e4s_1.c2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.e4s_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).s = function () {
    return this.e4s_1.s();
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
    this.j4s_1 = isString;
    this.k4s_1 = coerceToInlineType;
    this.l4s_1 = toString(body);
    if (!(this.k4s_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.k4s_1.y1z()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).b4s = function () {
    return this.j4s_1;
  };
  protoOf(JsonLiteral).c4s = function () {
    return this.l4s_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.j4s_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.l4s_1);
      tmp = this_0.toString();
    } else {
      tmp = this.l4s_1;
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
    if (!(this.j4s_1 === other.j4s_1))
      return false;
    if (!(this.l4s_1 === other.l4s_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.j4s_1);
    result = imul(31, result) + getStringHashCode(this.l4s_1) | 0;
    return result;
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.c4s());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.c4s())).m4s();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.c4s();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.c4s());
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
    tmp.n4s_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).o4s = function (key, element) {
    return this.n4s_1.n2(key, element);
  };
  protoOf(JsonObjectBuilder).a4r = function () {
    return new JsonObject(this.n4s_1);
  };
  function put(_this__u8e3s4, key, value) {
    return _this__u8e3s4.o4s(key, JsonPrimitive_0(value));
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.p4s_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).g1y();
    this.q4s_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).h1z = function () {
    return this.q4s_1;
  };
  protoOf(JsonObjectDescriptor).b20 = function (index) {
    return this.p4s_1.b20(index);
  };
  protoOf(JsonObjectDescriptor).c20 = function (name) {
    return this.p4s_1.c20(name);
  };
  protoOf(JsonObjectDescriptor).d20 = function (index) {
    return this.p4s_1.d20(index);
  };
  protoOf(JsonObjectDescriptor).e20 = function (index) {
    return this.p4s_1.e20(index);
  };
  protoOf(JsonObjectDescriptor).f20 = function (index) {
    return this.p4s_1.f20(index);
  };
  protoOf(JsonObjectDescriptor).x1z = function () {
    return this.p4s_1.x1z();
  };
  protoOf(JsonObjectDescriptor).t1z = function () {
    return this.p4s_1.t1z();
  };
  protoOf(JsonObjectDescriptor).y1z = function () {
    return this.p4s_1.y1z();
  };
  protoOf(JsonObjectDescriptor).z1z = function () {
    return this.p4s_1.z1z();
  };
  protoOf(JsonObjectDescriptor).a20 = function () {
    return this.p4s_1.a20();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.r4s_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).g1y = function () {
    return this.r4s_1;
  };
  protoOf(JsonObjectSerializer).s4s = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).h1y(encoder, value);
  };
  protoOf(JsonObjectSerializer).h1y = function (encoder, value) {
    return this.s4s(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).i1y = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).i1y(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.u1y('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.u1y('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.u1y('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.u1y('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.u1y('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().t4s_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().u4s_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().v4s_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().r4s_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().w4s_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.x4s_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).g1y = function () {
    return this.x4s_1;
  };
  protoOf(JsonElementSerializer).y4s = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.l23(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.l23(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.l23(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).h1y = function (encoder, value) {
    return this.y4s(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).i1y = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.v4r();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.t4s_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).g1y = function () {
    return this.t4s_1;
  };
  protoOf(JsonPrimitiveSerializer).z4s = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.l23(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.l23(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).h1y = function (encoder, value) {
    return this.z4s(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).i1y = function (decoder) {
    var result = asJsonDecoder(decoder).v4r();
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
    this.u4s_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).g1y = function () {
    return this.u4s_1;
  };
  protoOf(JsonNullSerializer).a4t = function (encoder, value) {
    verify(encoder);
    encoder.o22();
  };
  protoOf(JsonNullSerializer).h1y = function (encoder, value) {
    return this.a4t(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).i1y = function (decoder) {
    verify_0(decoder);
    if (decoder.e21()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.f21();
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
    this.b4t_1 = ListSerializer(JsonElementSerializer_getInstance()).g1y();
    this.c4t_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).h1z = function () {
    return this.c4t_1;
  };
  protoOf(JsonArrayDescriptor).b20 = function (index) {
    return this.b4t_1.b20(index);
  };
  protoOf(JsonArrayDescriptor).c20 = function (name) {
    return this.b4t_1.c20(name);
  };
  protoOf(JsonArrayDescriptor).d20 = function (index) {
    return this.b4t_1.d20(index);
  };
  protoOf(JsonArrayDescriptor).e20 = function (index) {
    return this.b4t_1.e20(index);
  };
  protoOf(JsonArrayDescriptor).f20 = function (index) {
    return this.b4t_1.f20(index);
  };
  protoOf(JsonArrayDescriptor).x1z = function () {
    return this.b4t_1.x1z();
  };
  protoOf(JsonArrayDescriptor).t1z = function () {
    return this.b4t_1.t1z();
  };
  protoOf(JsonArrayDescriptor).y1z = function () {
    return this.b4t_1.y1z();
  };
  protoOf(JsonArrayDescriptor).z1z = function () {
    return this.b4t_1.z1z();
  };
  protoOf(JsonArrayDescriptor).a20 = function () {
    return this.b4t_1.a20();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.w4s_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).g1y = function () {
    return this.w4s_1;
  };
  protoOf(JsonArraySerializer).d4t = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).h1y(encoder, value);
  };
  protoOf(JsonArraySerializer).h1y = function (encoder, value) {
    return this.d4t(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).i1y = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).i1y(decoder));
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
    this.v4s_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).g1y = function () {
    return this.v4s_1;
  };
  protoOf(JsonLiteralSerializer).e4t = function (encoder, value) {
    verify(encoder);
    if (value.j4s_1) {
      return encoder.x22(value.l4s_1);
    }
    if (!(value.k4s_1 == null)) {
      return encoder.z22(value.k4s_1).x22(value.l4s_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.l4s_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.t22(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.l4s_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).lq_1;
      var tmp_1 = encoder.z22(serializer_0(Companion_getInstance()).g1y());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.t22(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.l4s_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.v22(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.l4s_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.p22(tmp3_safe_receiver);
    }
    encoder.x22(value.l4s_1);
  };
  protoOf(JsonLiteralSerializer).h1y = function (encoder, value) {
    return this.e4t(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).i1y = function (decoder) {
    var result = asJsonDecoder(decoder).v4r();
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
    var tmp0 = $this.f4t_1;
    // Inline function 'kotlin.getValue' call
    original$factory();
    return tmp0.z();
  }
  function defer$1($deferred) {
    this.f4t_1 = lazy($deferred);
  }
  protoOf(defer$1).h1z = function () {
    return _get_original__l7ku1m(this).h1z();
  };
  protoOf(defer$1).x1z = function () {
    return _get_original__l7ku1m(this).x1z();
  };
  protoOf(defer$1).z1z = function () {
    return _get_original__l7ku1m(this).z1z();
  };
  protoOf(defer$1).b20 = function (index) {
    return _get_original__l7ku1m(this).b20(index);
  };
  protoOf(defer$1).c20 = function (name) {
    return _get_original__l7ku1m(this).c20(name);
  };
  protoOf(defer$1).d20 = function (index) {
    return _get_original__l7ku1m(this).d20(index);
  };
  protoOf(defer$1).e20 = function (index) {
    return _get_original__l7ku1m(this).e20(index);
  };
  protoOf(defer$1).f20 = function (index) {
    return _get_original__l7ku1m(this).f20(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.g4t_1 = writer;
    this.h4t_1 = true;
  }
  protoOf(Composer).i4t = function () {
    this.h4t_1 = true;
  };
  protoOf(Composer).j4t = function () {
    return Unit_instance;
  };
  protoOf(Composer).k4t = function () {
    this.h4t_1 = false;
  };
  protoOf(Composer).l4t = function () {
    this.h4t_1 = false;
  };
  protoOf(Composer).m4t = function () {
    return Unit_instance;
  };
  protoOf(Composer).n4t = function (v) {
    return this.g4t_1.o4t(v);
  };
  protoOf(Composer).p4t = function (v) {
    return this.g4t_1.q4t(v);
  };
  protoOf(Composer).r4t = function (v) {
    return this.g4t_1.q4t(v.toString());
  };
  protoOf(Composer).s4t = function (v) {
    return this.g4t_1.q4t(v.toString());
  };
  protoOf(Composer).t4t = function (v) {
    return this.g4t_1.u4t(toLong(v));
  };
  protoOf(Composer).v4t = function (v) {
    return this.g4t_1.u4t(toLong(v));
  };
  protoOf(Composer).w4t = function (v) {
    return this.g4t_1.u4t(toLong(v));
  };
  protoOf(Composer).x4t = function (v) {
    return this.g4t_1.u4t(v);
  };
  protoOf(Composer).y4t = function (v) {
    return this.g4t_1.q4t(v.toString());
  };
  protoOf(Composer).z4t = function (value) {
    return this.g4t_1.a4u(value);
  };
  function Composer_0(sb, json) {
    return json.o4p_1.f4r_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.d4u_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).w4t = function (v) {
    if (this.d4u_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.z4t(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.p4t(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).x4t = function (v) {
    if (this.d4u_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.z4t(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.p4t(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).t4t = function (v) {
    if (this.d4u_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.z4t(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.p4t(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).v4t = function (v) {
    if (this.d4u_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.z4t(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.p4t(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.g4u_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).z4t = function (value) {
    if (this.g4u_1) {
      protoOf(Composer).z4t.call(this, value);
    } else {
      protoOf(Composer).p4t.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.j4u_1 = json;
    this.k4u_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).i4t = function () {
    this.h4t_1 = true;
    this.k4u_1 = this.k4u_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).j4t = function () {
    this.k4u_1 = this.k4u_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).k4t = function () {
    this.h4t_1 = false;
    this.p4t('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.k4u_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.p4t(this.j4u_1.o4p_1.h4r_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).l4t = function () {
    if (this.h4t_1)
      this.h4t_1 = false;
    else {
      this.k4t();
    }
  };
  protoOf(ComposerWithPrettyPrint).m4t = function () {
    this.n4t(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.m4u_1 = (!descriptor.f20(index) && descriptor.e20(index).t1z());
    return $this.m4u_1;
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
    tmp.l4u_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.m4u_1 = false;
  }
  protoOf(JsonElementMarker).n4u = function (index) {
    this.l4u_1.z27(index);
  };
  protoOf(JsonElementMarker).o4u = function () {
    return this.l4u_1.a28();
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
    _this__u8e3s4.p4u('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.d4q_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.q4u('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.h1z() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.x1z().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    if (json.o4p_1.c4r_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.a20();
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
    var index = _this__u8e3s4.c20(name);
    if (!(index === -3))
      return index;
    if (!json.o4p_1.m4r_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.h1z() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.b20(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.x1z(), CLASS_getInstance()) ? json.o4p_1.n4r_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.s4u(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.o4p_1.o4r_1 && equals(descriptor.x1z(), ENUM_getInstance());
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
    return tmp.s4u(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.z1z();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.d20(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t4u_1;
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
          tmp_0 = _this__u8e3s4.b20(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.u4u(_this__u8e3s4, i, _this__u8e3s4.b20(i));
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
    var entity = equals($this_buildDeserializationNamesMap.x1z(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).i2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.b20(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.b20(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
      var tmp_0 = $this_serializationNamesIndices.z1z();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.b20(tmp_2);
        tmp_1[tmp_2] = $strategy.u4u($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.x4u_1, 2);
    $this.v4u_1 = copyOf($this.v4u_1, newSize);
    $this.w4u_1 = copyOf_0($this.w4u_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.v4u_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.w4u_1 = tmp_2;
    this.x4u_1 = -1;
  }
  protoOf(JsonPath).y4u = function (sd) {
    this.x4u_1 = this.x4u_1 + 1 | 0;
    var depth = this.x4u_1;
    if (depth === this.v4u_1.length) {
      resize(this);
    }
    this.v4u_1[depth] = sd;
  };
  protoOf(JsonPath).z4u = function (index) {
    this.w4u_1[this.x4u_1] = index;
  };
  protoOf(JsonPath).a4v = function (key) {
    var tmp;
    if (!(this.w4u_1[this.x4u_1] === -2)) {
      this.x4u_1 = this.x4u_1 + 1 | 0;
      tmp = this.x4u_1 === this.v4u_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.v4u_1[this.x4u_1] = key;
    this.w4u_1[this.x4u_1] = -2;
  };
  protoOf(JsonPath).b4v = function () {
    if (this.w4u_1[this.x4u_1] === -2) {
      this.v4u_1[this.x4u_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).c4v = function () {
    var depth = this.x4u_1;
    if (this.w4u_1[depth] === -2) {
      this.w4u_1[depth] = -1;
      this.x4u_1 = this.x4u_1 - 1 | 0;
    }
    if (!(this.x4u_1 === -1)) {
      this.x4u_1 = this.x4u_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).d4v = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.x8('$');
    // Inline function 'kotlin.repeat' call
    var times = this.x4u_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.v4u_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.x1z(), LIST_getInstance())) {
            if (!(this.w4u_1[index] === -1)) {
              this_0.x8('[');
              this_0.ae(this.w4u_1[index]);
              this_0.x8(']');
            }
          } else {
            var idx = this.w4u_1[index];
            if (idx >= 0) {
              this_0.x8('.');
              this_0.x8(element.b20(idx));
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
    return this.d4v();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.x1z();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.hc() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.f4v_1)
      return Unit_instance;
    if (!$this.g4v_1)
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
    var last = descriptor.z1z();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.b20(i);
        if (name === $this.e4v_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function JsonSerializersModuleValidator(configuration) {
    this.e4v_1 = configuration.k4r_1;
    this.f4v_1 = configuration.j4r_1;
    this.g4v_1 = !configuration.r4r_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).t2j = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).w2j = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.g1y();
    checkKind(this, descriptor, actualClass);
    if (!this.f4v_1 && this.g4v_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(JsonSerializersModuleValidator).x2j = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).y2j = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().s();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.l23(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.q4v_1.u4v(6);
    if ($this.q4v_1.v4v() === 4) {
      $this.q4v_1.q4u('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.q4v_1.w4v()) {
      var key = $this.r4v_1 ? $this.q4v_1.y4v() : $this.q4v_1.x4v();
      $this.q4v_1.u4v(5);
      var element = $this.z4v();
      // Inline function 'kotlin.collections.set' call
      result.n2(key, element);
      lastToken = $this.q4v_1.a4w();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.q4v_1.q4u('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.q4v_1.u4v(7);
    } else if (lastToken === 4) {
      if (!$this.s4v_1) {
        invalidTrailingComma($this.q4v_1);
      }
      $this.q4v_1.u4v(7);
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
    var lastToken = $this.q4v_1.a4w();
    if ($this.q4v_1.v4v() === 4) {
      $this.q4v_1.q4u('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.q4v_1.w4v()) {
      var element = $this.z4v();
      result.n(element);
      lastToken = $this.q4v_1.a4w();
      if (!(lastToken === 4)) {
        var tmp0 = $this.q4v_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.d4q_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.q4u(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.q4v_1.u4v(9);
    } else if (lastToken === 4) {
      if (!$this.s4v_1) {
        invalidTrailingComma($this.q4v_1, 'array');
      }
      $this.q4v_1.u4v(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.r4v_1 || !isString) {
      tmp = $this.q4v_1.y4v();
    } else {
      tmp = $this.q4v_1.x4v();
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
    this.y4w_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).d4x = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.e4x($this$DeepRecursiveFunction, it, $completion);
    tmp.o9_1 = Unit_instance;
    tmp.p9_1 = null;
    return tmp.ea();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).va = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.d4x(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).ea = function () {
    var suspendResult = this.o9_1;
    $sm: do
      try {
        var tmp = this.m9_1;
        switch (tmp) {
          case 0:
            this.n9_1 = 3;
            this.b4x_1 = this.y4w_1.q4v_1.v4v();
            if (this.b4x_1 === 1) {
              this.c4x_1 = readValue(this.y4w_1, true);
              this.m9_1 = 2;
              continue $sm;
            } else {
              if (this.b4x_1 === 0) {
                this.c4x_1 = readValue(this.y4w_1, false);
                this.m9_1 = 2;
                continue $sm;
              } else {
                if (this.b4x_1 === 6) {
                  this.m9_1 = 1;
                  suspendResult = readObject_0(this.y4w_1, this.z4w_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.b4x_1 === 8) {
                    this.c4x_1 = readArray(this.y4w_1);
                    this.m9_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.y4w_1.q4v_1.q4u("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.c4x_1 = suspendResult;
            this.m9_1 = 2;
            continue $sm;
          case 2:
            return this.c4x_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).e4x = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.y4w_1, completion);
    i.z4w_1 = $this$DeepRecursiveFunction;
    i.a4x_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.d4x($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.j4w_1 = _this__u8e3s4;
    this.k4w_1 = _this__u8e3s4_0;
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
            tmp_0.l4w_1 = this.j4w_1;
            this.m4w_1 = this.l4w_1;
            this.n4w_1 = this.m4w_1.q4v_1.u4v(6);
            if (this.m4w_1.q4v_1.v4v() === 4) {
              this.m4w_1.q4v_1.q4u('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.o4w_1 = LinkedHashMap_init_$Create$();
            this.m9_1 = 1;
            continue $sm;
          case 1:
            if (!this.m4w_1.q4v_1.w4v()) {
              this.m9_1 = 4;
              continue $sm;
            }

            this.p4w_1 = this.m4w_1.r4v_1 ? this.m4w_1.q4v_1.y4v() : this.m4w_1.q4v_1.x4v();
            this.m4w_1.q4v_1.u4v(5);
            this.m9_1 = 2;
            suspendResult = this.k4w_1.no(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.o4w_1;
            var key = this.p4w_1;
            tmp0.n2(key, element);
            this.n4w_1 = this.m4w_1.q4v_1.a4w();
            var tmp0_subject = this.n4w_1;
            if (tmp0_subject === 4) {
              this.m9_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.m9_1 = 4;
                continue $sm;
              } else {
                this.m4w_1.q4v_1.q4u('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.m9_1 = 1;
            continue $sm;
          case 4:
            if (this.n4w_1 === 6) {
              this.m4w_1.q4v_1.u4v(7);
            } else if (this.n4w_1 === 4) {
              if (!this.m4w_1.s4v_1) {
                invalidTrailingComma(this.m4w_1.q4v_1);
              }
              this.m4w_1.q4v_1.u4v(7);
            }

            return new JsonObject(this.o4w_1);
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
    this.q4v_1 = lexer;
    this.r4v_1 = configuration.d4r_1;
    this.s4v_1 = configuration.p4r_1;
    this.t4v_1 = 0;
  }
  protoOf(JsonTreeReader).z4v = function () {
    var token = this.q4v_1.v4v();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.t4v_1 = this.t4v_1 + 1 | 0;
      if (this.t4v_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.t4v_1 = this.t4v_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.q4v_1.q4u('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.a20().p();
    while (_iterator__ex2g4s.q()) {
      var annotation = _iterator__ex2g4s.r();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.s4r_1;
    }
    return json.o4p_1.k4r_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.g1y()).x1(classDiscriminator)) {
      var baseName = serializer.g1y().h1z();
      var actualName = actualSerializer.g1y().h1z();
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
    this.r4u_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).f4x = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.r4u_1;
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
  protoOf(DescriptorSchemaCache).s4u = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.g4x(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.f4x(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).g4x = function (descriptor, key) {
    var tmp0_safe_receiver = this.r4u_1.k2(descriptor);
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
    this.h4x_1 = discriminatorToSkip;
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.h4x_1 === unknownKey) {
      _this__u8e3s4.h4x_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.k22(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.x4p_1.v4v() === 4) {
      $this.x4p_1.q4u('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.z4p_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.z4p_1 === -1)) {
        hasComma = $this.x4p_1.j4x();
      }
    } else {
      $this.x4p_1.i4x(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.x4p_1.w4v()) {
      if (decodingKey) {
        if ($this.z4p_1 === -1) {
          var tmp0 = $this.x4p_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.d4q_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.q4u(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.x4p_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.d4q_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp3.q4u(tmp$ret$2, position_0);
          }
        }
      }
      $this.z4p_1 = $this.z4p_1 + 1 | 0;
      tmp = $this.z4p_1;
    } else {
      if (hasComma && !$this.v4p_1.o4p_1.p4r_1) {
        invalidTrailingComma($this.x4p_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.v4p_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.f20(index);
      var elementDescriptor = descriptor.e20(index);
      var tmp;
      if (isOptional && !elementDescriptor.t1z()) {
        tmp = $this.x4p_1.k4x(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.x1z(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.t1z()) {
          tmp_0 = $this.x4p_1.k4x(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.x4p_1.l4x($this.b4q_1.d4r_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.o4p_1.g4r_1 && elementDescriptor.t1z();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.x4p_1.x4v();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.x4p_1.j4x();
    while ($this.x4p_1.w4v()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.x4p_1.i4x(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.v4p_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.b4q_1.i4r_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.x4p_1.j4x();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.c4q_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.n4u(index);
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
    if (hasComma && !$this.v4p_1.o4p_1.p4r_1) {
      invalidTrailingComma($this.x4p_1);
    }
    var tmp1_safe_receiver = $this.c4q_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o4u();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.v4p_1) || trySkip($this, $this.a4q_1, key)) {
      $this.x4p_1.n4x($this.b4q_1.d4r_1);
    } else {
      $this.x4p_1.e4q_1.c4v();
      $this.x4p_1.m4x(key);
    }
    return $this.x4p_1.j4x();
  }
  function decodeListIndex($this) {
    var hasComma = $this.x4p_1.j4x();
    var tmp;
    if ($this.x4p_1.w4v()) {
      if (!($this.z4p_1 === -1) && !hasComma) {
        $this.x4p_1.q4u('Expected end of the array or comma');
      }
      $this.z4p_1 = $this.z4p_1 + 1 | 0;
      tmp = $this.z4p_1;
    } else {
      if (hasComma && !$this.v4p_1.o4p_1.p4r_1) {
        invalidTrailingComma($this.x4p_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.b4q_1.d4r_1) {
      tmp = $this.x4p_1.p4x();
    } else {
      tmp = $this.x4p_1.o4x();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.v4p_1 = json;
    this.w4p_1 = mode;
    this.x4p_1 = lexer;
    this.y4p_1 = this.v4p_1.i22();
    this.z4p_1 = -1;
    this.a4q_1 = discriminatorHolder;
    this.b4q_1 = this.v4p_1.o4p_1;
    this.c4q_1 = this.b4q_1.g4r_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).x4r = function () {
    return this.v4p_1;
  };
  protoOf(StreamingJsonDecoder).i22 = function () {
    return this.y4p_1;
  };
  protoOf(StreamingJsonDecoder).v4r = function () {
    return (new JsonTreeReader(this.v4p_1.o4p_1, this.x4p_1)).z4v();
  };
  protoOf(StreamingJsonDecoder).s21 = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.v4p_1.o4p_1.j4r_1;
      }
      if (tmp) {
        return deserializer.i1y(this);
      }
      var discriminator = classDiscriminator(deserializer.g1y(), this.v4p_1);
      var tmp0_elvis_lhs = this.x4p_1.q4x(discriminator, this.b4q_1.d4r_1);
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
            tmp_1 = this.x4r().o4p_1.j4r_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.i1y(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.g1y(), this.x4r());
          var tmp0 = this.v4r();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.g1y().h1z();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).hc();
            var tmp_3 = getKClassFromExpression(tmp0).hc();
            var tmp$ret$1 = this.x4p_1.e4q_1.d4v();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.af(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.x4r(), discriminator_0, jsonTree, actualSerializer);
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
          this.x4p_1.q4u(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.a4q_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.i1y(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.n1z_1, plus(e.message, ' at path: ') + this.x4p_1.e4q_1.d4v(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).t21 = function (descriptor) {
    var newMode = switchMode(this.v4p_1, descriptor);
    this.x4p_1.e4q_1.y4u(descriptor);
    this.x4p_1.i4x(newMode.t4x_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.r2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.v4p_1, newMode, this.x4p_1, descriptor, this.a4q_1);
        break;
      default:
        var tmp_0;
        if (this.w4p_1.equals(newMode) && this.v4p_1.o4p_1.g4r_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.v4p_1, newMode, this.x4p_1, descriptor, this.a4q_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).u21 = function (descriptor) {
    if (descriptor.z1z() === 0 && ignoreUnknownKeys(descriptor, this.v4p_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.x4p_1.j4x() && !this.v4p_1.o4p_1.p4r_1) {
      invalidTrailingComma(this.x4p_1, '');
    }
    this.x4p_1.i4x(this.w4p_1.u4x_1);
    this.x4p_1.e4q_1.c4v();
  };
  protoOf(StreamingJsonDecoder).e21 = function () {
    var tmp;
    var tmp0_safe_receiver = this.c4q_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.m4u_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.x4p_1.v4x();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).f21 = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).f22 = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.w4p_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.x4p_1.e4q_1.b4v();
    }
    var value = protoOf(AbstractDecoder).f22.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.x4p_1.e4q_1.a4v(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).k22 = function (descriptor) {
    var index;
    switch (this.w4p_1.r2_1) {
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
    if (!this.w4p_1.equals(WriteMode_MAP_getInstance())) {
      this.x4p_1.e4q_1.z4u(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).g21 = function () {
    return this.x4p_1.w4x();
  };
  protoOf(StreamingJsonDecoder).h21 = function () {
    var value = this.x4p_1.x4x();
    if (!value.equals(toLong(value.p3()))) {
      this.x4p_1.q4u("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.p3();
  };
  protoOf(StreamingJsonDecoder).i21 = function () {
    var value = this.x4p_1.x4x();
    if (!value.equals(toLong(value.q3()))) {
      this.x4p_1.q4u("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.q3();
  };
  protoOf(StreamingJsonDecoder).j21 = function () {
    var value = this.x4p_1.x4x();
    if (!value.equals(toLong(value.j1()))) {
      this.x4p_1.q4u("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.j1();
  };
  protoOf(StreamingJsonDecoder).k21 = function () {
    return this.x4p_1.x4x();
  };
  protoOf(StreamingJsonDecoder).l21 = function () {
    var tmp0 = this.x4p_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.y4v();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.q4u("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.v4p_1.o4p_1.l4r_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.x4p_1, result);
  };
  protoOf(StreamingJsonDecoder).m21 = function () {
    var tmp0 = this.x4p_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.y4v();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.q4u("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.v4p_1.o4p_1.l4r_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.x4p_1, result);
  };
  protoOf(StreamingJsonDecoder).n21 = function () {
    var string = this.x4p_1.y4v();
    if (!(string.length === 1)) {
      this.x4p_1.q4u("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).o21 = function () {
    var tmp;
    if (this.b4q_1.d4r_1) {
      tmp = this.x4p_1.p4x();
    } else {
      tmp = this.x4p_1.x4v();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).q21 = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.x4p_1, this.v4p_1) : protoOf(AbstractDecoder).q21.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).p21 = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.v4p_1, this.o21(), ' at path ' + this.x4p_1.e4q_1.d4v());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.y4x_1 = lexer;
    this.z4x_1 = json.i22();
  }
  protoOf(JsonDecoderForUnsignedTypes).i22 = function () {
    return this.z4x_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).k22 = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).j21 = function () {
    var tmp0 = this.y4x_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.y4v();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.q4u("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).k21 = function () {
    var tmp0 = this.y4x_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.y4v();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.q4u("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).h21 = function () {
    var tmp0 = this.y4x_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.y4v();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.q4u("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).i21 = function () {
    var tmp0 = this.y4x_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.y4v();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.q4u("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
    $this.h4v_1.k4t();
    $this.x22(discriminator);
    $this.h4v_1.n4t(_Char___init__impl__6a9atx(58));
    $this.h4v_1.m4t();
    $this.x22(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.h4v_1 = composer;
    this.i4v_1 = json;
    this.j4v_1 = mode;
    this.k4v_1 = modeReuseCache;
    this.l4v_1 = this.i4v_1.i22();
    this.m4v_1 = this.i4v_1.o4p_1;
    this.n4v_1 = false;
    this.o4v_1 = null;
    this.p4v_1 = null;
    var i = this.j4v_1.r2_1;
    if (!(this.k4v_1 == null)) {
      if (!(this.k4v_1[i] === null) || !(this.k4v_1[i] === this)) {
        this.k4v_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).x4r = function () {
    return this.i4v_1;
  };
  protoOf(StreamingJsonEncoder).i22 = function () {
    return this.l4v_1;
  };
  protoOf(StreamingJsonEncoder).q23 = function (descriptor, index) {
    return this.m4v_1.b4r_1;
  };
  protoOf(StreamingJsonEncoder).l23 = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.x4r().o4p_1.j4r_1) {
        serializer.h1y(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.x4r().o4p_1.r4r_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.x4r().o4p_1.r4r_1.r2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.g1y().x1z();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.g1y(), this.x4r()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.g1y()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.g1y().x1z());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.g1y().h1z();
        this.o4v_1 = baseClassDiscriminator;
        this.p4v_1 = serialName;
      }
      actualSerializer.h1y(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).t21 = function (descriptor) {
    var newMode = switchMode(this.i4v_1, descriptor);
    if (!(newMode.t4x_1 === _Char___init__impl__6a9atx(0))) {
      this.h4v_1.n4t(newMode.t4x_1);
      this.h4v_1.i4t();
    }
    var discriminator = this.o4v_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.p4v_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.h1z() : tmp0_elvis_lhs);
      this.o4v_1 = null;
      this.p4v_1 = null;
    }
    if (this.j4v_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.k4v_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.r2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.h4v_1, this.i4v_1, newMode, this.k4v_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).u21 = function (descriptor) {
    if (!(this.j4v_1.u4x_1 === _Char___init__impl__6a9atx(0))) {
      this.h4v_1.j4t();
      this.h4v_1.l4t();
      this.h4v_1.n4t(this.j4v_1.u4x_1);
    }
  };
  protoOf(StreamingJsonEncoder).m22 = function (descriptor, index) {
    switch (this.j4v_1.r2_1) {
      case 1:
        if (!this.h4v_1.h4t_1) {
          this.h4v_1.n4t(_Char___init__impl__6a9atx(44));
        }

        this.h4v_1.k4t();
        break;
      case 2:
        if (!this.h4v_1.h4t_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.h4v_1.n4t(_Char___init__impl__6a9atx(44));
            this.h4v_1.k4t();
            tmp_0 = true;
          } else {
            this.h4v_1.n4t(_Char___init__impl__6a9atx(58));
            this.h4v_1.m4t();
            tmp_0 = false;
          }
          tmp.n4v_1 = tmp_0;
        } else {
          this.n4v_1 = true;
          this.h4v_1.k4t();
        }

        break;
      case 3:
        if (index === 0)
          this.n4v_1 = true;
        if (index === 1) {
          this.h4v_1.n4t(_Char___init__impl__6a9atx(44));
          this.h4v_1.m4t();
          this.n4v_1 = false;
        }

        break;
      default:
        if (!this.h4v_1.h4t_1) {
          this.h4v_1.n4t(_Char___init__impl__6a9atx(44));
        }

        this.h4v_1.k4t();
        this.x22(getJsonElementName(descriptor, this.i4v_1, index));
        this.h4v_1.n4t(_Char___init__impl__6a9atx(58));
        this.h4v_1.m4t();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).m23 = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.m4v_1.g4r_1) {
      protoOf(AbstractEncoder).m23.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).z22 = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.h4v_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.h4v_1;
      } else {
        var tmp1 = this.h4v_1.g4t_1;
        var p1 = this.n4v_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp1, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.i4v_1, this.j4v_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.h4v_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.h4v_1;
      } else {
        var tmp4 = this.h4v_1.g4t_1;
        var p1_0 = this.n4v_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp4, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.i4v_1, this.j4v_1, null);
    } else if (!(this.o4v_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.p4v_1 = descriptor.h1z();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).z22.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).o22 = function () {
    this.h4v_1.p4t('null');
  };
  protoOf(StreamingJsonEncoder).p22 = function (value) {
    if (this.n4v_1) {
      this.x22(value.toString());
    } else {
      this.h4v_1.y4t(value);
    }
  };
  protoOf(StreamingJsonEncoder).q22 = function (value) {
    if (this.n4v_1) {
      this.x22(value.toString());
    } else {
      this.h4v_1.t4t(value);
    }
  };
  protoOf(StreamingJsonEncoder).r22 = function (value) {
    if (this.n4v_1) {
      this.x22(value.toString());
    } else {
      this.h4v_1.v4t(value);
    }
  };
  protoOf(StreamingJsonEncoder).s22 = function (value) {
    if (this.n4v_1) {
      this.x22(value.toString());
    } else {
      this.h4v_1.w4t(value);
    }
  };
  protoOf(StreamingJsonEncoder).t22 = function (value) {
    if (this.n4v_1) {
      this.x22(value.toString());
    } else {
      this.h4v_1.x4t(value);
    }
  };
  protoOf(StreamingJsonEncoder).u22 = function (value) {
    if (this.n4v_1) {
      this.x22(value.toString());
    } else {
      this.h4v_1.r4t(value);
    }
    if (!this.m4v_1.l4r_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.h4v_1.g4t_1));
    }
  };
  protoOf(StreamingJsonEncoder).v22 = function (value) {
    if (this.n4v_1) {
      this.x22(value.toString());
    } else {
      this.h4v_1.s4t(value);
    }
    if (!this.m4v_1.l4r_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.h4v_1.g4t_1));
    }
  };
  protoOf(StreamingJsonEncoder).w22 = function (value) {
    this.x22(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).x22 = function (value) {
    return this.h4v_1.z4t(value);
  };
  protoOf(StreamingJsonEncoder).y22 = function (enumDescriptor, index) {
    this.x22(enumDescriptor.b20(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.y1z() && get_unsignedNumberDescriptors().x1(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.y1z() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).g1y(), serializer_0(Companion_getInstance()).g1y(), serializer_2(Companion_getInstance_1()).g1y(), serializer_3(Companion_getInstance_2()).g1y()]);
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
          _this__u8e3s4.xd(value, lastPos, i);
          _this__u8e3s4.x8(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.xd(value, lastPos, value.length);
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
    return input.s21(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.g4y(tag), toString($this.h4y()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.c4y_1 = json;
    this.d4y_1 = value;
    this.e4y_1 = polymorphicDiscriminator;
    this.f4y_1 = this.x4r().o4p_1;
  }
  protoOf(AbstractJsonTreeDecoder).x4r = function () {
    return this.c4y_1;
  };
  protoOf(AbstractJsonTreeDecoder).z = function () {
    return this.d4y_1;
  };
  protoOf(AbstractJsonTreeDecoder).i22 = function () {
    return this.x4r().i22();
  };
  protoOf(AbstractJsonTreeDecoder).h4y = function () {
    var tmp0_safe_receiver = this.z2f();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.i4y(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.z() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).g4y = function (currentTag) {
    return this.x2g() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).v4r = function () {
    return this.h4y();
  };
  protoOf(AbstractJsonTreeDecoder).s21 = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.x4r().o4p_1.j4r_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.i1y(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.g1y(), this.x4r());
      var tmp0 = this.v4r();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.g1y().h1z();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).hc();
        var tmp_1 = getKClassFromExpression(tmp0).hc();
        var tmp$ret$1 = this.x2g();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$1, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.af(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.x4r(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).a2g = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).t21 = function (descriptor) {
    var currentObject = this.h4y();
    var tmp0_subject = descriptor.x1z();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.x4r();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.h1z();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).hc();
        var tmp_3 = getKClassFromExpression(currentObject).hc();
        var tmp$ret$0 = this.x2g();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.x4r();
        var keyDescriptor = carrierDescriptor(descriptor.e20(0), this_0.i22());
        var keyKind = keyDescriptor.x1z();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.x4r();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.h1z();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).hc();
            var tmp_8 = getKClassFromExpression(currentObject).hc();
            var tmp$ret$3 = this.x2g();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.o4p_1.e4r_1) {
            var tmp_9 = this.x4r();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.h1z();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).hc();
              var tmp_11 = getKClassFromExpression(currentObject).hc();
              var tmp$ret$7 = this.x2g();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.x4r();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.h1z();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).hc();
          var tmp_14 = getKClassFromExpression(currentObject).hc();
          var tmp$ret$12 = this.x2g();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.e4y_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).u21 = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).e21 = function () {
    var tmp = this.h4y();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).j4y = function (tag, enumDescriptor) {
    var tmp = this.x4r();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp1 = this.i4y(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.h1z();
    if (!(tmp1 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).hc();
      var tmp_1 = getKClassFromExpression(tmp1).hc();
      var tmp$ret$0 = this.g4y(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp1.c4s());
  };
  protoOf(AbstractJsonTreeDecoder).j2h = function (tag, enumDescriptor) {
    return this.j4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).k4y = function (tag) {
    return !(this.i4y(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).z2g = function (tag) {
    return this.k4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).l4y = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.g4y(tag);
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
  protoOf(AbstractJsonTreeDecoder).a2h = function (tag) {
    return this.l4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).m4y = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.g4y(tag);
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
  protoOf(AbstractJsonTreeDecoder).b2h = function (tag) {
    return this.m4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).n4y = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.g4y(tag);
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
  protoOf(AbstractJsonTreeDecoder).c2h = function (tag) {
    return this.n4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).o4y = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.g4y(tag);
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
  protoOf(AbstractJsonTreeDecoder).d2h = function (tag) {
    return this.o4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).p4y = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.g4y(tag);
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
  protoOf(AbstractJsonTreeDecoder).e2h = function (tag) {
    return this.p4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).q4y = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.g4y(tag);
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
    var specialFp = this.x4r().o4p_1.l4r_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.h4y()));
  };
  protoOf(AbstractJsonTreeDecoder).f2h = function (tag) {
    return this.q4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).r4y = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.g4y(tag);
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
    var specialFp = this.x4r().o4p_1.l4r_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.h4y()));
  };
  protoOf(AbstractJsonTreeDecoder).g2h = function (tag) {
    return this.r4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).s4y = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.i4y(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.g4y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.c4s()));
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
  protoOf(AbstractJsonTreeDecoder).h2h = function (tag) {
    return this.s4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).t4y = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.i4y(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).hc();
      var tmp_0 = getKClassFromExpression(value).hc();
      var tmp$ret$0 = this.g4y(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.g4y(tag), toString(this.h4y()));
    if (!value_0.j4s_1 && !this.x4r().o4p_1.d4r_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.g4y(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.h4y()));
    }
    return value_0.l4s_1;
  };
  protoOf(AbstractJsonTreeDecoder).i2h = function (tag) {
    return this.t4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).u4y = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.x4r();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp1 = this.i4y(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.h1z();
      if (!(tmp1 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).hc();
        var tmp_2 = getKClassFromExpression(tmp1).hc();
        var tmp$ret$0 = this.g4y(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp1.c4s());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.x4r());
    } else {
      tmp = protoOf(NamedValueDecoder).k2h.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).k2h = function (tag, inlineDescriptor) {
    return this.u4y((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).q21 = function (descriptor) {
    return !(this.z2f() == null) ? protoOf(NamedValueDecoder).q21.call(this, descriptor) : (new JsonPrimitiveDecoder(this.x4r(), this.z(), this.e4y_1)).q21(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.x4r();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.f20(index);
      var elementDescriptor = descriptor.e20(index);
      var tmp;
      if (isOptional && !elementDescriptor.t1z()) {
        var tmp_0 = $this.i4y(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.x1z(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.t1z()) {
          var tmp_2 = $this.i4y(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp_3 = $this.i4y(tag);
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
        var coerceToNull = !tmp0.o4p_1.g4r_1 && elementDescriptor.t1z();
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
    $this.e4z_1 = (!$this.x4r().o4p_1.g4r_1 && !descriptor.f20(index) && descriptor.e20(index).t1z());
    return $this.e4z_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.b4z_1 = value;
    this.c4z_1 = polyDescriptor;
    this.d4z_1 = 0;
    this.e4z_1 = false;
  }
  protoOf(JsonTreeDecoder).z = function () {
    return this.b4z_1;
  };
  protoOf(JsonTreeDecoder).k22 = function (descriptor) {
    while (this.d4z_1 < descriptor.z1z()) {
      var _unary__edvuaz = this.d4z_1;
      this.d4z_1 = _unary__edvuaz + 1 | 0;
      var name = this.v2f(descriptor, _unary__edvuaz);
      var index = this.d4z_1 - 1 | 0;
      this.e4z_1 = false;
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
        tmp = !this.f4y_1.i4r_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).e21 = function () {
    return !this.e4z_1 && protoOf(AbstractJsonTreeDecoder).e21.call(this);
  };
  protoOf(JsonTreeDecoder).w2f = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.x4r());
    var baseName = descriptor.b20(index);
    if (strategy == null) {
      if (!this.f4y_1.m4r_1)
        return baseName;
      if (this.z().l2().x1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.x4r(), descriptor);
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
    var fallbackName = strategy == null ? null : strategy.u4u(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).i4y = function (tag) {
    return getValue(this.z(), tag);
  };
  protoOf(JsonTreeDecoder).t21 = function (descriptor) {
    if (descriptor === this.c4z_1) {
      var tmp = this.x4r();
      var tmp1 = this.h4y();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.c4z_1.h1z();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).hc();
        var tmp_1 = getKClassFromExpression(tmp1).hc();
        var tmp$ret$0 = this.x2g();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.e4y_1, this.c4z_1);
    }
    return protoOf(AbstractJsonTreeDecoder).t21.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).u21 = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.x4r())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.x1z();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.x4r());
    var tmp_1;
    if (strategy == null && !this.f4y_1.m4r_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.x4r(), descriptor).l2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.x4r()).g4x(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.z().l2().p();
    while (_iterator__ex2g4s.q()) {
      var key = _iterator__ex2g4s.r();
      if (!names.x1(key) && !(key === this.e4y_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.x2g() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.z().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.l4z_1 = value;
    this.m4z_1 = this.l4z_1.s();
    this.n4z_1 = -1;
  }
  protoOf(JsonTreeListDecoder).z = function () {
    return this.l4z_1;
  };
  protoOf(JsonTreeListDecoder).w2f = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).i4y = function (tag) {
    return this.l4z_1.u(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).k22 = function (descriptor) {
    while (this.n4z_1 < (this.m4z_1 - 1 | 0)) {
      this.n4z_1 = this.n4z_1 + 1 | 0;
      return this.n4z_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.u4z_1 = value;
    this.r2g('primitive');
  }
  protoOf(JsonPrimitiveDecoder).z = function () {
    return this.u4z_1;
  };
  protoOf(JsonPrimitiveDecoder).k22 = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).i4y = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.u4z_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.f50_1 = value;
    this.g50_1 = toList(this.f50_1.l2());
    this.h50_1 = imul(this.g50_1.s(), 2);
    this.i50_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).z = function () {
    return this.f50_1;
  };
  protoOf(JsonTreeMapDecoder).w2f = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.g50_1.u(i);
  };
  protoOf(JsonTreeMapDecoder).k22 = function (descriptor) {
    while (this.i50_1 < (this.h50_1 - 1 | 0)) {
      this.i50_1 = this.i50_1 + 1 | 0;
      return this.i50_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).i4y = function (tag) {
    return (this.i50_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.f50_1, tag);
  };
  protoOf(JsonTreeMapDecoder).u21 = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.g1y())).s21(deserializer);
  }
  function writeJson(json, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
    encoder.l23(serializer, value);
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
    tmp.v50_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonTreeEncoder).w50 = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    this.v50_1.n2(key, element);
  };
  protoOf(JsonTreeEncoder).m23 = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.m50_1.g4r_1) {
      protoOf(AbstractJsonTreeEncoder).m23.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).x50 = function () {
    return new JsonObject(this.v50_1);
  };
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.m51_1 = this$0;
    this.n51_1 = $tag;
    AbstractEncoder.call(this);
    this.l51_1 = this$0.k50_1.i22();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).i22 = function () {
    return this.l51_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).o51 = function (s) {
    return this.m51_1.w50(this.n51_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).s22 = function (value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.o51(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).t22 = function (value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.o51(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).q22 = function (value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.o51(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).r22 = function (value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.o51(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.p51_1 = this$0;
    this.q51_1 = $tag;
    this.r51_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).i22 = function () {
    return this.p51_1.k50_1.i22();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).x22 = function (value) {
    return this.p51_1.w50(this.q51_1, new JsonLiteral(value, false, this.r51_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.w50(this$0.q2g(), node);
      return Unit_instance;
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.k50_1 = json;
    this.l50_1 = nodeConsumer;
    this.m50_1 = this.k50_1.o4p_1;
    this.n50_1 = null;
    this.o50_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).x4r = function () {
    return this.k50_1;
  };
  protoOf(AbstractJsonTreeEncoder).i22 = function () {
    return this.k50_1.i22();
  };
  protoOf(AbstractJsonTreeEncoder).w2f = function (descriptor, index) {
    return getJsonElementName(descriptor, this.k50_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).q23 = function (descriptor, index) {
    return this.m50_1.b4r_1;
  };
  protoOf(AbstractJsonTreeEncoder).a2g = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).o23 = function () {
  };
  protoOf(AbstractJsonTreeEncoder).o22 = function () {
    var tmp0_elvis_lhs = this.z2f();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.l50_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.y50(tag);
  };
  protoOf(AbstractJsonTreeEncoder).y50 = function (tag) {
    return this.w50(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).d2g = function (tag) {
    return this.y50((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).z50 = function (tag, value) {
    return this.w50(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).e2g = function (tag, value) {
    return this.z50((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).a51 = function (tag, value) {
    return this.w50(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).f2g = function (tag, value) {
    return this.a51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).b51 = function (tag, value) {
    return this.w50(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).g2g = function (tag, value) {
    return this.b51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).c51 = function (tag, value) {
    return this.w50(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).h2g = function (tag, value) {
    return this.c51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).d51 = function (tag, value) {
    this.w50(tag, JsonPrimitive_1(value));
    if (!this.m50_1.l4r_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.x50()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).i2g = function (tag, value) {
    return this.d51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).l23 = function (serializer, value) {
    if (!(this.z2f() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.g1y(), this.i22()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.x4r().o4p_1.j4r_1) {
          serializer.h1y(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.x4r().o4p_1.r4r_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.x4r().o4p_1.r4r_1.r2_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.g1y().x1z();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.g1y(), this.x4r()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.g1y()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer_0(casted, this, value);
          if (!(baseClassDiscriminator == null)) {
            access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
            checkKind_0(actual.g1y().x1z());
          }
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          var serialName = actualSerializer.g1y().h1z();
          this.n50_1 = baseClassDiscriminator;
          this.o50_1 = serialName;
        }
        actualSerializer.h1y(this, value);
      }
    } else {
      // Inline function 'kotlin.apply' call
      (new JsonPrimitiveEncoder(this.k50_1, this.l50_1)).l23(serializer, value);
    }
  };
  protoOf(AbstractJsonTreeEncoder).e51 = function (tag, value) {
    this.w50(tag, JsonPrimitive_1(value));
    if (!this.m50_1.l4r_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.x50()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).j2g = function (tag, value) {
    return this.e51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).f51 = function (tag, value) {
    return this.w50(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).k2g = function (tag, value) {
    return this.f51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).g51 = function (tag, value) {
    return this.w50(tag, JsonPrimitive_0(toString_1(value)));
  };
  protoOf(AbstractJsonTreeEncoder).l2g = function (tag, value) {
    return this.g51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).h51 = function (tag, value) {
    return this.w50(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).m2g = function (tag, value) {
    return this.h51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).i51 = function (tag, enumDescriptor, ordinal) {
    return this.w50(tag, JsonPrimitive_0(enumDescriptor.b20(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).n2g = function (tag, enumDescriptor, ordinal) {
    return this.i51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).j51 = function (tag, value) {
    this.w50(tag, JsonPrimitive_0(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).b2g = function (tag, value) {
    return this.j51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).k51 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).o2g.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).o2g = function (tag, inlineDescriptor) {
    return this.k51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).z22 = function (descriptor) {
    var tmp;
    if (!(this.z2f() == null)) {
      if (!(this.n50_1 == null))
        this.o50_1 = descriptor.h1z();
      tmp = protoOf(NamedValueEncoder).z22.call(this, descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.k50_1, this.l50_1)).z22(descriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).t21 = function (descriptor) {
    var tmp;
    if (this.z2f() == null) {
      tmp = this.l50_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.x1z();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.k50_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.k50_1;
        var keyDescriptor = carrierDescriptor(descriptor.e20(0), this_0.i22());
        var keyKind = keyDescriptor.x1z();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.k50_1, consumer);
        } else {
          if (this_0.o4p_1.e4r_1) {
            tmp_2 = new JsonTreeListEncoder(this.k50_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.k50_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.n50_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.w50('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.o50_1;
        encoder.w50('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.h1z() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.o50_1;
        encoder.w50(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.h1z() : tmp2_elvis_lhs));
      }
      this.n50_1 = null;
      this.o50_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).p2g = function (descriptor) {
    this.l50_1(this.x50());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.x1z();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.x1z() === ENUM_getInstance();
    }
    return tmp;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.h52_1 = null;
    this.r2g('primitive');
  }
  protoOf(JsonPrimitiveEncoder).w50 = function (key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.h52_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.h52_1 = element;
    this.l50_1(element);
  };
  protoOf(JsonPrimitiveEncoder).x50 = function () {
    var tmp0 = this.h52_1;
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
    tmp.o52_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonTreeListEncoder).w2f = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).w50 = function (key, element) {
    var idx = toInt(key);
    this.o52_1.g2(idx, element);
  };
  protoOf(JsonTreeListEncoder).x50 = function () {
    return new JsonArray(this.o52_1);
  };
  function _get_tag__e6h4qf($this) {
    var tmp = $this.z51_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.a52_1 = true;
  }
  protoOf(JsonTreeMapEncoder).w50 = function (key, element) {
    if (this.a52_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.c4s();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().r4s_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().w4s_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.z51_1 = tmp_0;
      this.a52_1 = false;
    } else {
      var tmp0 = this.v50_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.n2(key_0, element);
      this.a52_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).x50 = function () {
    return new JsonObject(this.v50_1);
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
    this.t4x_1 = begin;
    this.u4x_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.x1z();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.e20(0), _this__u8e3s4.i22());
          var keyKind = keyDescriptor.x1z();
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
            if (_this__u8e3s4.o4p_1.e4r_1) {
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
    if (equals(_this__u8e3s4.x1z(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.y1z()) {
      tmp = carrierDescriptor(_this__u8e3s4.e20(0), module_0);
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
    $this.p52(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.p52(lastPosition, currentPosition);
    var result = $this.g4q_1.toString();
    $this.g4q_1.de(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.f4q_1);
    $this.f4q_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.q52(), $this.d4q_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.r52(currentPosition);
    if (currentPosition === -1) {
      $this.q4u('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.q52();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.q52(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.q4u("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.g4q_1.y8(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.d4q_1 = startPos;
      $this.s52();
      if (($this.d4q_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.q4u('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.d4q_1);
    }
    $this.g4q_1.y8(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.q4u("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.r52(start);
    if (current >= charSequenceLength($this.q52()) || current === -1) {
      $this.q4u('EOF');
    }
    var tmp = $this.q52();
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
        $this.q4u("Expected valid boolean literal prefix, but had '" + $this.y4v() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.q52()) - current | 0) < literalSuffix.length) {
      $this.q4u('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.q52(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.q4u("Expected valid boolean literal prefix, but had '" + $this.y4v() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.d4q_1 = current + literalSuffix.length | 0;
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
    this.d4q_1 = 0;
    this.e4q_1 = new JsonPath();
    this.f4q_1 = null;
    this.g4q_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).s52 = function () {
  };
  protoOf(AbstractJsonLexer).j4x = function () {
    var current = this.t52();
    var source = this.q52();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.d4q_1 = this.d4q_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).u52 = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).h4q = function () {
    var nextToken = this.a4w();
    if (!(nextToken === 10)) {
      this.q4u('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.q52(), this.d4q_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).u4v = function (expected) {
    var token = this.a4w();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.d4q_1 - 1 | 0 : this.d4q_1;
      var s = this.d4q_1 === charSequenceLength(this.q52()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.q52(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.q4u(tmp$ret$0, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).v52 = function (expected) {
    if (this.d4q_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.d4q_1;
        try {
          this.d4q_1 = this.d4q_1 - 1 | 0;
          tmp$ret$1 = this.y4v();
          break $l$block;
        }finally {
          this.d4q_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.p4u("Expected string literal but 'null' literal was found", this.d4q_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.d4q_1 - 1 | 0 : this.d4q_1;
    var s = this.d4q_1 === charSequenceLength(this.q52()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.q52(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.q4u(tmp$ret$2, position);
  };
  protoOf(AbstractJsonLexer).v4v = function () {
    var source = this.q52();
    var cpos = this.d4q_1;
    $l$loop_0: while (true) {
      cpos = this.r52(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.d4q_1 = cpos;
      return charToTokenClass(ch);
    }
    this.d4q_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).k4x = function (doConsume) {
    var current = this.t52();
    current = this.r52(current);
    var len = charSequenceLength(this.q52()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.q52(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.q52(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.d4q_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).v4x = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.k4x(doConsume) : $super.k4x.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).l4x = function (isLenient) {
    var token = this.v4v();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.y4v();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.x4v();
    }
    var string = tmp;
    this.f4q_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).w52 = function () {
    this.f4q_1 = null;
  };
  protoOf(AbstractJsonLexer).s1g = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.q52();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).x4v = function () {
    if (!(this.f4q_1 == null)) {
      return takePeeked(this);
    }
    return this.o4x();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.r52(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.q4u('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.p52(lastPosition, currentPosition);
          currentPosition = this.r52(currentPosition);
          if (currentPosition === -1) {
            this.q4u('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.s1g(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.d4q_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).p4x = function () {
    var result = this.y4v();
    if (result === 'null' && wasUnquotedString(this)) {
      this.q4u("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).y4v = function () {
    if (!(this.f4q_1 == null)) {
      return takePeeked(this);
    }
    var current = this.t52();
    if (current >= charSequenceLength(this.q52()) || current === -1) {
      this.q4u('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.q52(), current));
    if (token === 1) {
      return this.x4v();
    }
    if (!(token === 0)) {
      this.q4u('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.q52(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.q52(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.q52())) {
        usedAppend = true;
        this.p52(this.d4q_1, current);
        var eof = this.r52(current);
        if (eof === -1) {
          this.d4q_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.s1g(this.d4q_1, current);
    } else {
      tmp = decodedString(this, this.d4q_1, current);
    }
    var result = tmp;
    this.d4q_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).p52 = function (fromIndex, toIndex) {
    this.g4q_1.xd(this.q52(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).n4x = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.v4v();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.y4v();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.v4v();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.y4v();
        else
          this.o4x();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.n(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.d4q_1, 'found ] instead of } at path: ' + this.e4q_1.toString(), this.q52());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.d4q_1, 'found } instead of ] at path: ' + this.e4q_1.toString(), this.q52());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.q4u('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.a4w();
      if (tokenStack.s() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.q52()) + "', currentPosition=" + this.d4q_1 + ')';
  };
  protoOf(AbstractJsonLexer).m4x = function (key) {
    var processed = this.s1g(0, this.d4q_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.e4q_1.d4v() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.q52(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).p4u = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.e4q_1.d4v() + hintMessage, this.q52());
  };
  protoOf(AbstractJsonLexer).q4u = function (message, position, hint, $super) {
    position = position === VOID ? this.d4q_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.p4u(message, position, hint) : $super.p4u.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).x4x = function () {
    var current = this.t52();
    current = this.r52(current);
    if (current >= charSequenceLength(this.q52()) || current === -1) {
      this.q4u('EOF');
    }
    var tmp;
    if (charSequenceGet(this.q52(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.q52())) {
        this.q4u('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.q52()))) {
      var ch = charSequenceGet(this.q52(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.q4u('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.q4u("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.q4u("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.q4u("Unexpected symbol '-' in numeric literal");
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
        this.q4u("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
        this.q4u('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.q4u('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.q4u('EOF');
      }
      if (!(charSequenceGet(this.q52(), current) === _Char___init__impl__6a9atx(34))) {
        this.q4u('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.d4q_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.r3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).r3() || doubleAccumulator < (new Long(0, -2147483648)).r3()) {
        this.q4u('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.q4u("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.g3();
    } else {
      this.q4u('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).m4s = function () {
    var result = this.x4x();
    var next = this.a4w();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.d4q_1 - 1 | 0 : this.d4q_1;
      var s = this.d4q_1 === charSequenceLength(this.q52()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.q52(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.q4u(tmp$ret$0, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).w4x = function () {
    var current = this.t52();
    if (current === charSequenceLength(this.q52())) {
      this.q4u('EOF');
    }
    var tmp;
    if (charSequenceGet(this.q52(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.d4q_1 === charSequenceLength(this.q52())) {
        this.q4u('EOF');
      }
      if (!(charSequenceGet(this.q52(), this.d4q_1) === _Char___init__impl__6a9atx(34))) {
        this.q4u('Expected closing quotation mark');
      }
      this.d4q_1 = this.d4q_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().y52_1;
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
    return c < 117 ? CharMappings_getInstance().x52_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.x52_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.y52_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.x52_1 = charArray(117);
    this.y52_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).a4w = function () {
    var source = this.q52();
    var cpos = this.t52();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.d4q_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).w4v = function () {
    var current = this.t52();
    if (current >= this.q52().length || current === -1)
      return false;
    return this.u52(charSequenceGet(this.q52(), current));
  };
  protoOf(StringJsonLexerWithComments).i4x = function (expected) {
    var source = this.q52();
    var current = this.t52();
    if (current >= source.length || current === -1) {
      this.d4q_1 = -1;
      this.v52(expected);
    }
    var c = charSequenceGet(source, current);
    this.d4q_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.v52(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).v4v = function () {
    var source = this.q52();
    var cpos = this.t52();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.d4q_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).t52 = function () {
    var current = this.d4q_1;
    if (current === -1)
      return current;
    var source = this.q52();
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
            this.d4q_1 = source.length;
            this.q4u('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.d4q_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.i53_1 = source;
  }
  protoOf(StringJsonLexer).q52 = function () {
    return this.i53_1;
  };
  protoOf(StringJsonLexer).r52 = function (position) {
    return position < this.q52().length ? position : -1;
  };
  protoOf(StringJsonLexer).a4w = function () {
    var source = this.q52();
    var cpos = this.d4q_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.d4q_1 = cpos;
      return charToTokenClass(c);
    }
    this.d4q_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).w4v = function () {
    var current = this.d4q_1;
    if (current === -1)
      return false;
    var source = this.q52();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.d4q_1 = current;
      return this.u52(c);
    }
    this.d4q_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).t52 = function () {
    var current = this.d4q_1;
    if (current === -1)
      return current;
    var source = this.q52();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.d4q_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).i4x = function (expected) {
    if (this.d4q_1 === -1) {
      this.v52(expected);
    }
    var source = this.q52();
    var cpos = this.d4q_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.d4q_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.v52(expected);
    }
    this.d4q_1 = -1;
    this.v52(expected);
  };
  protoOf(StringJsonLexer).o4x = function () {
    this.i4x(_Char___init__impl__6a9atx(34));
    var current = this.d4q_1;
    var closingQuote = indexOf_0(this.q52(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.y4v();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.d4q_1 - 1 | 0 : this.d4q_1;
      var s = this.d4q_1 === charSequenceLength(this.q52()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.q52(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.q4u(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.q52(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.q52(), this.d4q_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.d4q_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.q52().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).q4x = function (keyToMatch, isLenient) {
    var positionSnapshot = this.d4q_1;
    try {
      if (!(this.a4w() === 6))
        return null;
      var firstKey = this.l4x(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.w52();
      if (!(this.a4w() === 5))
        return null;
      return this.l4x(isLenient);
    }finally {
      this.d4q_1 = positionSnapshot;
      this.w52();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.o4p_1.q4r_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.q4p_1;
  }
  function JsonToStringWriter() {
    this.u4p_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).u4t = function (value) {
    this.u4p_1.be(value);
  };
  protoOf(JsonToStringWriter).o4t = function (char) {
    this.u4p_1.y8(char);
  };
  protoOf(JsonToStringWriter).q4t = function (text) {
    this.u4p_1.x8(text);
  };
  protoOf(JsonToStringWriter).a4u = function (text) {
    printQuoted(this.u4p_1, text);
  };
  protoOf(JsonToStringWriter).u1d = function () {
    this.u4p_1.ee();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.u4p_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).t1z = get_isNullable;
  protoOf(defer$1).y1z = get_isInline;
  protoOf(defer$1).a20 = get_annotations;
  protoOf(JsonSerializersModuleValidator).v2j = contextual;
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
  _.$_$.h = JsonArray;
  _.$_$.i = JsonClassDiscriminator;
  _.$_$.j = JsonContentPolymorphicSerializer;
  _.$_$.k = JsonElement;
  _.$_$.l = JsonObjectBuilder;
  _.$_$.m = JsonObject;
  _.$_$.n = JsonPrimitive_0;
  _.$_$.o = JsonPrimitive_1;
  _.$_$.p = JsonPrimitive_2;
  _.$_$.q = JsonPrimitive;
  _.$_$.r = Json_0;
  _.$_$.s = get_boolean;
  _.$_$.t = get_contentOrNull;
  _.$_$.u = get_jsonArray;
  _.$_$.v = get_jsonObject;
  _.$_$.w = get_jsonPrimitive;
  _.$_$.x = put;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
