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
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var protoOf = kotlin_kotlin.$_$.be;
  var initMetadataForObject = kotlin_kotlin.$_$.dd;
  var VOID = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.l6;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var initMetadataForClass = kotlin_kotlin.$_$.xc;
  var toString = kotlin_kotlin.$_$.fe;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.g2;
  var charSequenceLength = kotlin_kotlin.$_$.nc;
  var charSequenceGet = kotlin_kotlin.$_$.mc;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.m3;
  var equals = kotlin_kotlin.$_$.rc;
  var THROW_CCE = kotlin_kotlin.$_$.kj;
  var getStringHashCode = kotlin_kotlin.$_$.vc;
  var toString_0 = kotlin_kotlin.$_$.pk;
  var Enum = kotlin_kotlin.$_$.xi;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var SEALED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var buildSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var getKClassFromExpression = kotlin_kotlin.$_$.f;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a3;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var isInterface = kotlin_kotlin.$_$.md;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var initMetadataForInterface = kotlin_kotlin.$_$.bd;
  var initMetadataForCompanion = kotlin_kotlin.$_$.yc;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r1;
  var hashCode = kotlin_kotlin.$_$.wc;
  var joinToString = kotlin_kotlin.$_$.e9;
  var KtMap = kotlin_kotlin.$_$.w6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l2;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var KtList = kotlin_kotlin.$_$.t6;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var numberRangeToNumber = kotlin_kotlin.$_$.vd;
  var ClosedRange = kotlin_kotlin.$_$.ke;
  var contains = kotlin_kotlin.$_$.pe;
  var getBooleanHashCode = kotlin_kotlin.$_$.tc;
  var toDouble = kotlin_kotlin.$_$.sh;
  var toDoubleOrNull = kotlin_kotlin.$_$.rh;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.y5;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.w;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.kk;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var toLongOrNull = kotlin_kotlin.$_$.xh;
  var toULongOrNull = kotlin_kotlin.$_$.di;
  var ULong = kotlin_kotlin.$_$.sj;
  var Companion_getInstance = kotlin_kotlin.$_$.j6;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.y4;
  var toBooleanStrictOrNull = kotlin_kotlin.$_$.oh;
  var lazy = kotlin_kotlin.$_$.jk;
  var get_isNullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var get_isInline = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var get_annotations = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var KProperty1 = kotlin_kotlin.$_$.we;
  var getPropertyCallableRef = kotlin_kotlin.$_$.uc;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var toLong = kotlin_kotlin.$_$.de;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.l4;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.q4;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.x4;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.z4;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.c4;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.e4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.g5;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.i5;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var captureStack = kotlin_kotlin.$_$.jc;
  var charSequenceSubSequence = kotlin_kotlin.$_$.oc;
  var coerceAtLeast = kotlin_kotlin.$_$.me;
  var coerceAtMost = kotlin_kotlin.$_$.ne;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var Collection = kotlin_kotlin.$_$.o6;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var singleOrNull = kotlin_kotlin.$_$.ka;
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
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.vi;
  var invoke = kotlin_kotlin.$_$.dk;
  var CoroutineImpl = kotlin_kotlin.$_$.bc;
  var DeepRecursiveScope = kotlin_kotlin.$_$.wi;
  var Unit = kotlin_kotlin.$_$.vj;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.lb;
  var initMetadataForLambda = kotlin_kotlin.$_$.cd;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.zc;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var getKClass = kotlin_kotlin.$_$.g;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var ensureNotNull = kotlin_kotlin.$_$.ck;
  var substringBefore = kotlin_kotlin.$_$.mh;
  var removeSuffix = kotlin_kotlin.$_$.xg;
  var substringAfter = kotlin_kotlin.$_$.jh;
  var contains_0 = kotlin_kotlin.$_$.pf;
  var plus = kotlin_kotlin.$_$.lk;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var IllegalArgumentException = kotlin_kotlin.$_$.aj;
  var isFinite = kotlin_kotlin.$_$.fk;
  var isFinite_0 = kotlin_kotlin.$_$.ek;
  var toUInt = kotlin_kotlin.$_$.ci;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.n4;
  var toULong = kotlin_kotlin.$_$.ei;
  var toUByte = kotlin_kotlin.$_$.bi;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.d4;
  var toUShort = kotlin_kotlin.$_$.fi;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.h5;
  var objectCreate = kotlin_kotlin.$_$.ae;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var toString_1 = kotlin_kotlin.$_$.u3;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.i6;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.h6;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.k6;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var setOf = kotlin_kotlin.$_$.ja;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.t3;
  var numberToChar = kotlin_kotlin.$_$.wd;
  var equals_0 = kotlin_kotlin.$_$.yf;
  var toByte = kotlin_kotlin.$_$.ce;
  var startsWith = kotlin_kotlin.$_$.eh;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var single = kotlin_kotlin.$_$.bh;
  var Char = kotlin_kotlin.$_$.si;
  var emptySet = kotlin_kotlin.$_$.m8;
  var plus_0 = kotlin_kotlin.$_$.z9;
  var toInt = kotlin_kotlin.$_$.vh;
  var toList = kotlin_kotlin.$_$.va;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.ok;
  var NamedValueEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var enumEntries = kotlin_kotlin.$_$.dc;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var last = kotlin_kotlin.$_$.k9;
  var removeLast = kotlin_kotlin.$_$.ga;
  var lastIndexOf = kotlin_kotlin.$_$.pg;
  var Long = kotlin_kotlin.$_$.cj;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.o3;
  var numberToLong = kotlin_kotlin.$_$.zd;
  var charArray = kotlin_kotlin.$_$.lc;
  var indexOf = kotlin_kotlin.$_$.eg;
  var indexOf_0 = kotlin_kotlin.$_$.fg;
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
    this.c4s_1 = configuration;
    this.d4s_1 = serializersModule;
    this.e4s_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).w24 = function () {
    return this.d4s_1;
  };
  protoOf(Json).x21 = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.i1g();
    }
  };
  protoOf(Json).y21 = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.u20(), null);
    var result = input.g24(deserializer);
    lexer.v4s();
    return result;
  };
  protoOf(Json).f4s = function (serializer, value) {
    return writeJson(this, value, serializer);
  };
  protoOf(Json).g4s = function (deserializer, element) {
    return readJson(this, element, deserializer);
  };
  protoOf(Json).h4s = function (string) {
    return this.y21(JsonElementSerializer_getInstance(), string);
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.o4t();
    return new JsonImpl(conf, builder.n4t_1);
  }
  function JsonBuilder(json) {
    this.w4s_1 = json.c4s_1.p4t_1;
    this.x4s_1 = json.c4s_1.u4t_1;
    this.y4s_1 = json.c4s_1.q4t_1;
    this.z4s_1 = json.c4s_1.r4t_1;
    this.a4t_1 = json.c4s_1.t4t_1;
    this.b4t_1 = json.c4s_1.v4t_1;
    this.c4t_1 = json.c4s_1.w4t_1;
    this.d4t_1 = json.c4s_1.y4t_1;
    this.e4t_1 = json.c4s_1.f4u_1;
    this.f4t_1 = json.c4s_1.a4u_1;
    this.g4t_1 = json.c4s_1.b4u_1;
    this.h4t_1 = json.c4s_1.c4u_1;
    this.i4t_1 = json.c4s_1.d4u_1;
    this.j4t_1 = json.c4s_1.e4u_1;
    this.k4t_1 = json.c4s_1.z4t_1;
    this.l4t_1 = json.c4s_1.s4t_1;
    this.m4t_1 = json.c4s_1.x4t_1;
    this.n4t_1 = json.w24();
  }
  protoOf(JsonBuilder).o4t = function () {
    if (this.m4t_1) {
      // Inline function 'kotlin.require' call
      if (!(this.d4t_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.e4t_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.a4t_1) {
      // Inline function 'kotlin.require' call
      if (!(this.b4t_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.b4t_1 === '    ')) {
      var tmp3 = this.b4t_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.b4t_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.w4s_1, this.y4s_1, this.z4s_1, this.l4t_1, this.a4t_1, this.x4s_1, this.b4t_1, this.c4t_1, this.m4t_1, this.d4t_1, this.k4t_1, this.f4t_1, this.g4t_1, this.h4t_1, this.i4t_1, this.j4t_1, this.e4t_1);
  };
  function validateConfiguration($this) {
    if (equals($this.w24(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.c4s_1);
    $this.w24().y2l(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator(discriminator) {
    this.g4u_1 = discriminator;
  }
  protoOf(JsonClassDiscriminator).equals = function (other) {
    if (!(other instanceof JsonClassDiscriminator))
      return false;
    var tmp0_other_with_cast = other instanceof JsonClassDiscriminator ? other : THROW_CCE();
    if (!(this.g4u_1 === tmp0_other_with_cast.g4u_1))
      return false;
    return true;
  };
  protoOf(JsonClassDiscriminator).hashCode = function () {
    return imul(getStringHashCode('discriminator'), 127) ^ getStringHashCode(this.g4u_1);
  };
  protoOf(JsonClassDiscriminator).toString = function () {
    return '@kotlinx.serialization.json.JsonClassDiscriminator(' + 'discriminator=' + this.g4u_1 + ')';
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
    this.p4t_1 = encodeDefaults;
    this.q4t_1 = ignoreUnknownKeys;
    this.r4t_1 = isLenient;
    this.s4t_1 = allowStructuredMapKeys;
    this.t4t_1 = prettyPrint;
    this.u4t_1 = explicitNulls;
    this.v4t_1 = prettyPrintIndent;
    this.w4t_1 = coerceInputValues;
    this.x4t_1 = useArrayPolymorphism;
    this.y4t_1 = classDiscriminator;
    this.z4t_1 = allowSpecialFloatingPointValues;
    this.a4u_1 = useAlternativeNames;
    this.b4u_1 = namingStrategy;
    this.c4u_1 = decodeEnumsCaseInsensitive;
    this.d4u_1 = allowTrailingComma;
    this.e4u_1 = allowComments;
    this.f4u_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.p4t_1 + ', ignoreUnknownKeys=' + this.q4t_1 + ', isLenient=' + this.r4t_1 + ', ' + ('allowStructuredMapKeys=' + this.s4t_1 + ', prettyPrint=' + this.t4t_1 + ', explicitNulls=' + this.u4t_1 + ', ') + ("prettyPrintIndent='" + this.v4t_1 + "', coerceInputValues=" + this.w4t_1 + ', useArrayPolymorphism=' + this.x4t_1 + ', ') + ("classDiscriminator='" + this.y4t_1 + "', allowSpecialFloatingPointValues=" + this.z4t_1 + ', ') + ('useAlternativeNames=' + this.a4u_1 + ', namingStrategy=' + toString_0(this.b4u_1) + ', decodeEnumsCaseInsensitive=' + this.c4u_1 + ', ') + ('allowTrailingComma=' + this.d4u_1 + ', allowComments=' + this.e4u_1 + ', classDiscriminatorMode=' + this.f4u_1.toString() + ')');
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
    this.h4u_1 = baseClass;
    this.i4u_1 = buildSerialDescriptor('JsonContentPolymorphicSerializer<' + this.h4u_1.hc() + '>', SEALED_getInstance(), []);
  }
  protoOf(JsonContentPolymorphicSerializer).u20 = function () {
    return this.i4u_1;
  };
  protoOf(JsonContentPolymorphicSerializer).k21 = function (encoder, value) {
    var tmp0_elvis_lhs = encoder.w24().g26(this.h4u_1, value);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? serializerOrNull(getKClassFromExpression(value)) : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throwSubtypeNotRegistered(this, getKClassFromExpression(value), this.h4u_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var actualSerializer = tmp;
    (isInterface(actualSerializer, KSerializer) ? actualSerializer : THROW_CCE()).v20(encoder, value);
  };
  protoOf(JsonContentPolymorphicSerializer).v20 = function (encoder, value) {
    return this.k21(encoder, !(value == null) ? value : THROW_CCE());
  };
  protoOf(JsonContentPolymorphicSerializer).w20 = function (decoder) {
    var input = asJsonDecoder(decoder);
    var tree = input.j4u();
    var tmp = this.k4u(tree);
    var actualSerializer = isInterface(tmp, KSerializer) ? tmp : THROW_CCE();
    return input.l4u().g4s(actualSerializer, tree);
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
  protoOf(Companion).m4u = function () {
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
  protoOf(Companion_0).m4u = function () {
    return JsonObjectSerializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.a1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.b1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.z8(_Char___init__impl__6a9atx(58));
    this_0.x8(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.n4u_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.n4u_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.n4u_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.n4u_1.z();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).h = function () {
    return this.n4u_1.h();
  };
  protoOf(JsonObject).s2p = function (key) {
    return this.n4u_1.k2(key);
  };
  protoOf(JsonObject).k2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.s2p((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).o4u = function (value) {
    return this.n4u_1.l2(value);
  };
  protoOf(JsonObject).l2 = function (value) {
    if (!(value instanceof JsonElement))
      return false;
    return this.o4u(value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonObject).af = function (key) {
    return this.n4u_1.m2(key);
  };
  protoOf(JsonObject).m2 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.af((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).asJsReadonlyMapView = function () {
    return this.n4u_1.asJsReadonlyMapView();
  };
  protoOf(JsonObject).s = function () {
    return this.n4u_1.s();
  };
  protoOf(JsonObject).n2 = function () {
    return this.n4u_1.n2();
  };
  protoOf(JsonObject).o2 = function () {
    return this.n4u_1.o2();
  };
  protoOf(JsonObject).z = function () {
    return this.n4u_1.z();
  };
  function Companion_1() {
  }
  protoOf(Companion_1).m4u = function () {
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
    return this.q4u();
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
    var tmp0_elvis_lhs = toBooleanStrictOrNull_0(_this__u8e3s4.q4u());
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
    this.r4u_1 = 'null';
  }
  protoOf(JsonNull).p4u = function () {
    return false;
  };
  protoOf(JsonNull).q4u = function () {
    return this.r4u_1;
  };
  protoOf(JsonNull).m4u = function () {
    return JsonNullSerializer_getInstance();
  };
  protoOf(JsonNull).x2c = function (typeParamsSerializers) {
    return this.m4u();
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
      tmp = _this__u8e3s4.q4u();
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
    this.s4u_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.s4u_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.s4u_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.s4u_1, ',', '[', ']');
  };
  protoOf(JsonArray).h = function () {
    return this.s4u_1.h();
  };
  protoOf(JsonArray).t4u = function (element) {
    return this.s4u_1.w(element);
  };
  protoOf(JsonArray).w = function (element) {
    if (!(element instanceof JsonElement))
      return false;
    return this.t4u(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).p = function () {
    return this.s4u_1.p();
  };
  protoOf(JsonArray).u4u = function (elements) {
    return this.s4u_1.b2(elements);
  };
  protoOf(JsonArray).b2 = function (elements) {
    return this.u4u(elements);
  };
  protoOf(JsonArray).u = function (index) {
    return this.s4u_1.u(index);
  };
  protoOf(JsonArray).v4u = function (element) {
    return this.s4u_1.x(element);
  };
  protoOf(JsonArray).x = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.v4u(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).w4u = function (element) {
    return this.s4u_1.c2(element);
  };
  protoOf(JsonArray).c2 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.w4u(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).d2 = function () {
    return this.s4u_1.d2();
  };
  protoOf(JsonArray).v = function (index) {
    return this.s4u_1.v(index);
  };
  protoOf(JsonArray).e2 = function (fromIndex, toIndex) {
    return this.s4u_1.e2(fromIndex, toIndex);
  };
  protoOf(JsonArray).asJsReadonlyArrayView = function () {
    return this.s4u_1.asJsReadonlyArrayView();
  };
  protoOf(JsonArray).s = function () {
    return this.s4u_1.s();
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
      throw NumberFormatException_init_$Create$(_this__u8e3s4.q4u() + ' is not an Int');
    return result.l1();
  }
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull_0(_this__u8e3s4.q4u());
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.x4u_1 = isString;
    this.y4u_1 = coerceToInlineType;
    this.z4u_1 = toString(body);
    if (!(this.y4u_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.y4u_1.m22()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).p4u = function () {
    return this.x4u_1;
  };
  protoOf(JsonLiteral).q4u = function () {
    return this.z4u_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.x4u_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.z4u_1);
      tmp = this_0.toString();
    } else {
      tmp = this.z4u_1;
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
    if (!(this.x4u_1 === other.x4u_1))
      return false;
    if (!(this.z4u_1 === other.z4u_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.x4u_1);
    result = imul(31, result) + getStringHashCode(this.z4u_1) | 0;
    return result;
  };
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.q4u())).a4v();
  }
  function get_float(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = _this__u8e3s4.q4u();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  }
  function get_double(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toDouble(_this__u8e3s4.q4u());
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
    return toDoubleOrNull(_this__u8e3s4.q4u());
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
    tmp.b4v_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonObjectBuilder).c4v = function (key, element) {
    return this.b4v_1.p2(key, element);
  };
  protoOf(JsonObjectBuilder).o4t = function () {
    return new JsonObject(this.b4v_1);
  };
  function put(_this__u8e3s4, key, value) {
    return _this__u8e3s4.c4v(key, JsonPrimitive_0(value));
  }
  function put_0(_this__u8e3s4, key, value) {
    return _this__u8e3s4.c4v(key, JsonPrimitive_2(value));
  }
  function put_1(_this__u8e3s4, key, value) {
    return _this__u8e3s4.c4v(key, JsonPrimitive_1(value));
  }
  function JsonArrayBuilder() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d4v_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonArrayBuilder).e4v = function (element) {
    // Inline function 'kotlin.collections.plusAssign' call
    this.d4v_1.n(element);
    return true;
  };
  protoOf(JsonArrayBuilder).o4t = function () {
    return new JsonArray(this.d4v_1);
  };
  function add(_this__u8e3s4, value) {
    return _this__u8e3s4.e4v(JsonPrimitive_0(value));
  }
  function JsonObjectDescriptor() {
    JsonObjectDescriptor_instance = this;
    this.f4v_1 = MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).u20();
    this.g4v_1 = 'kotlinx.serialization.json.JsonObject';
  }
  protoOf(JsonObjectDescriptor).v21 = function () {
    return this.g4v_1;
  };
  protoOf(JsonObjectDescriptor).p22 = function (index) {
    return this.f4v_1.p22(index);
  };
  protoOf(JsonObjectDescriptor).q22 = function (name) {
    return this.f4v_1.q22(name);
  };
  protoOf(JsonObjectDescriptor).r22 = function (index) {
    return this.f4v_1.r22(index);
  };
  protoOf(JsonObjectDescriptor).s22 = function (index) {
    return this.f4v_1.s22(index);
  };
  protoOf(JsonObjectDescriptor).t22 = function (index) {
    return this.f4v_1.t22(index);
  };
  protoOf(JsonObjectDescriptor).l22 = function () {
    return this.f4v_1.l22();
  };
  protoOf(JsonObjectDescriptor).h22 = function () {
    return this.f4v_1.h22();
  };
  protoOf(JsonObjectDescriptor).m22 = function () {
    return this.f4v_1.m22();
  };
  protoOf(JsonObjectDescriptor).n22 = function () {
    return this.f4v_1.n22();
  };
  protoOf(JsonObjectDescriptor).o22 = function () {
    return this.f4v_1.o22();
  };
  var JsonObjectDescriptor_instance;
  function JsonObjectDescriptor_getInstance() {
    if (JsonObjectDescriptor_instance == null)
      new JsonObjectDescriptor();
    return JsonObjectDescriptor_instance;
  }
  function JsonObjectSerializer() {
    JsonObjectSerializer_instance = this;
    this.h4v_1 = JsonObjectDescriptor_getInstance();
  }
  protoOf(JsonObjectSerializer).u20 = function () {
    return this.h4v_1;
  };
  protoOf(JsonObjectSerializer).i4v = function (encoder, value) {
    verify(encoder);
    MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).v20(encoder, value);
  };
  protoOf(JsonObjectSerializer).v20 = function (encoder, value) {
    return this.i4v(encoder, value instanceof JsonObject ? value : THROW_CCE());
  };
  protoOf(JsonObjectSerializer).w20 = function (decoder) {
    verify_0(decoder);
    return new JsonObject(MapSerializer(serializer(StringCompanionObject_instance), JsonElementSerializer_getInstance()).w20(decoder));
  };
  var JsonObjectSerializer_instance;
  function JsonObjectSerializer_getInstance() {
    if (JsonObjectSerializer_instance == null)
      new JsonObjectSerializer();
    return JsonObjectSerializer_instance;
  }
  function JsonElementSerializer$descriptor$lambda($this$buildSerialDescriptor) {
    $this$buildSerialDescriptor.i21('JsonPrimitive', defer(JsonElementSerializer$descriptor$lambda$lambda));
    $this$buildSerialDescriptor.i21('JsonNull', defer(JsonElementSerializer$descriptor$lambda$lambda_0));
    $this$buildSerialDescriptor.i21('JsonLiteral', defer(JsonElementSerializer$descriptor$lambda$lambda_1));
    $this$buildSerialDescriptor.i21('JsonObject', defer(JsonElementSerializer$descriptor$lambda$lambda_2));
    $this$buildSerialDescriptor.i21('JsonArray', defer(JsonElementSerializer$descriptor$lambda$lambda_3));
    return Unit_instance;
  }
  function JsonElementSerializer$descriptor$lambda$lambda() {
    return JsonPrimitiveSerializer_getInstance().j4v_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_0() {
    return JsonNullSerializer_getInstance().k4v_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_1() {
    return JsonLiteralSerializer_getInstance().l4v_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_2() {
    return JsonObjectSerializer_getInstance().h4v_1;
  }
  function JsonElementSerializer$descriptor$lambda$lambda_3() {
    return JsonArraySerializer_getInstance().m4v_1;
  }
  function JsonElementSerializer() {
    JsonElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = SEALED_getInstance();
    tmp.n4v_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonElement', tmp_0, [], JsonElementSerializer$descriptor$lambda);
  }
  protoOf(JsonElementSerializer).u20 = function () {
    return this.n4v_1;
  };
  protoOf(JsonElementSerializer).o4v = function (encoder, value) {
    verify(encoder);
    if (value instanceof JsonPrimitive) {
      encoder.z25(JsonPrimitiveSerializer_getInstance(), value);
    } else {
      if (value instanceof JsonObject) {
        encoder.z25(JsonObjectSerializer_getInstance(), value);
      } else {
        if (value instanceof JsonArray) {
          encoder.z25(JsonArraySerializer_getInstance(), value);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(JsonElementSerializer).v20 = function (encoder, value) {
    return this.o4v(encoder, value instanceof JsonElement ? value : THROW_CCE());
  };
  protoOf(JsonElementSerializer).w20 = function (decoder) {
    var input = asJsonDecoder(decoder);
    return input.j4u();
  };
  var JsonElementSerializer_instance;
  function JsonElementSerializer_getInstance() {
    if (JsonElementSerializer_instance == null)
      new JsonElementSerializer();
    return JsonElementSerializer_instance;
  }
  function JsonPrimitiveSerializer() {
    JsonPrimitiveSerializer_instance = this;
    this.j4v_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonPrimitive', STRING_getInstance(), []);
  }
  protoOf(JsonPrimitiveSerializer).u20 = function () {
    return this.j4v_1;
  };
  protoOf(JsonPrimitiveSerializer).p4v = function (encoder, value) {
    verify(encoder);
    var tmp;
    if (value instanceof JsonNull) {
      encoder.z25(JsonNullSerializer_getInstance(), JsonNull_getInstance());
      tmp = Unit_instance;
    } else {
      var tmp_0 = JsonLiteralSerializer_getInstance();
      encoder.z25(tmp_0, value instanceof JsonLiteral ? value : THROW_CCE());
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(JsonPrimitiveSerializer).v20 = function (encoder, value) {
    return this.p4v(encoder, value instanceof JsonPrimitive ? value : THROW_CCE());
  };
  protoOf(JsonPrimitiveSerializer).w20 = function (decoder) {
    var result = asJsonDecoder(decoder).j4u();
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
    this.k4v_1 = buildSerialDescriptor('kotlinx.serialization.json.JsonNull', ENUM_getInstance(), []);
  }
  protoOf(JsonNullSerializer).u20 = function () {
    return this.k4v_1;
  };
  protoOf(JsonNullSerializer).q4v = function (encoder, value) {
    verify(encoder);
    encoder.c25();
  };
  protoOf(JsonNullSerializer).v20 = function (encoder, value) {
    return this.q4v(encoder, value instanceof JsonNull ? value : THROW_CCE());
  };
  protoOf(JsonNullSerializer).w20 = function (decoder) {
    verify_0(decoder);
    if (decoder.s23()) {
      throw new JsonDecodingException("Expected 'null' literal");
    }
    decoder.t23();
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
    this.r4v_1 = ListSerializer(JsonElementSerializer_getInstance()).u20();
    this.s4v_1 = 'kotlinx.serialization.json.JsonArray';
  }
  protoOf(JsonArrayDescriptor).v21 = function () {
    return this.s4v_1;
  };
  protoOf(JsonArrayDescriptor).p22 = function (index) {
    return this.r4v_1.p22(index);
  };
  protoOf(JsonArrayDescriptor).q22 = function (name) {
    return this.r4v_1.q22(name);
  };
  protoOf(JsonArrayDescriptor).r22 = function (index) {
    return this.r4v_1.r22(index);
  };
  protoOf(JsonArrayDescriptor).s22 = function (index) {
    return this.r4v_1.s22(index);
  };
  protoOf(JsonArrayDescriptor).t22 = function (index) {
    return this.r4v_1.t22(index);
  };
  protoOf(JsonArrayDescriptor).l22 = function () {
    return this.r4v_1.l22();
  };
  protoOf(JsonArrayDescriptor).h22 = function () {
    return this.r4v_1.h22();
  };
  protoOf(JsonArrayDescriptor).m22 = function () {
    return this.r4v_1.m22();
  };
  protoOf(JsonArrayDescriptor).n22 = function () {
    return this.r4v_1.n22();
  };
  protoOf(JsonArrayDescriptor).o22 = function () {
    return this.r4v_1.o22();
  };
  var JsonArrayDescriptor_instance;
  function JsonArrayDescriptor_getInstance() {
    if (JsonArrayDescriptor_instance == null)
      new JsonArrayDescriptor();
    return JsonArrayDescriptor_instance;
  }
  function JsonArraySerializer() {
    JsonArraySerializer_instance = this;
    this.m4v_1 = JsonArrayDescriptor_getInstance();
  }
  protoOf(JsonArraySerializer).u20 = function () {
    return this.m4v_1;
  };
  protoOf(JsonArraySerializer).t4v = function (encoder, value) {
    verify(encoder);
    ListSerializer(JsonElementSerializer_getInstance()).v20(encoder, value);
  };
  protoOf(JsonArraySerializer).v20 = function (encoder, value) {
    return this.t4v(encoder, value instanceof JsonArray ? value : THROW_CCE());
  };
  protoOf(JsonArraySerializer).w20 = function (decoder) {
    verify_0(decoder);
    return new JsonArray(ListSerializer(JsonElementSerializer_getInstance()).w20(decoder));
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
    this.l4v_1 = PrimitiveSerialDescriptor('kotlinx.serialization.json.JsonLiteral', STRING_getInstance());
  }
  protoOf(JsonLiteralSerializer).u20 = function () {
    return this.l4v_1;
  };
  protoOf(JsonLiteralSerializer).u4v = function (encoder, value) {
    verify(encoder);
    if (value.x4u_1) {
      return encoder.l25(value.z4u_1);
    }
    if (!(value.y4u_1 == null)) {
      return encoder.n25(value.y4u_1).l25(value.z4u_1);
    }
    var tmp0_safe_receiver = toLongOrNull(value.z4u_1);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.h25(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = toULongOrNull(value.z4u_1);
    var tmp = tmp1_safe_receiver;
    if ((tmp == null ? null : new ULong(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp1_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new ULong(tmp_0)).ir_1;
      var tmp_1 = encoder.n25(serializer_0(Companion_getInstance()).u20());
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$1 = _ULong___get_data__impl__fggpzb(it);
      tmp_1.h25(tmp$ret$1);
      return Unit_instance;
    }
    var tmp2_safe_receiver = toDoubleOrNull(value.z4u_1);
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.j25(tmp2_safe_receiver);
    }
    var tmp3_safe_receiver = toBooleanStrictOrNull(value.z4u_1);
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return encoder.d25(tmp3_safe_receiver);
    }
    encoder.l25(value.z4u_1);
  };
  protoOf(JsonLiteralSerializer).v20 = function (encoder, value) {
    return this.u4v(encoder, value instanceof JsonLiteral ? value : THROW_CCE());
  };
  protoOf(JsonLiteralSerializer).w20 = function (decoder) {
    var result = asJsonDecoder(decoder).j4u();
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
    var tmp0 = $this.v4v_1;
    // Inline function 'kotlin.getValue' call
    original$factory();
    return tmp0.b1();
  }
  function defer$1($deferred) {
    this.v4v_1 = lazy($deferred);
  }
  protoOf(defer$1).v21 = function () {
    return _get_original__l7ku1m(this).v21();
  };
  protoOf(defer$1).l22 = function () {
    return _get_original__l7ku1m(this).l22();
  };
  protoOf(defer$1).n22 = function () {
    return _get_original__l7ku1m(this).n22();
  };
  protoOf(defer$1).p22 = function (index) {
    return _get_original__l7ku1m(this).p22(index);
  };
  protoOf(defer$1).q22 = function (name) {
    return _get_original__l7ku1m(this).q22(name);
  };
  protoOf(defer$1).r22 = function (index) {
    return _get_original__l7ku1m(this).r22(index);
  };
  protoOf(defer$1).s22 = function (index) {
    return _get_original__l7ku1m(this).s22(index);
  };
  protoOf(defer$1).t22 = function (index) {
    return _get_original__l7ku1m(this).t22(index);
  };
  function original$factory() {
    return getPropertyCallableRef('original', 1, KProperty1, function (receiver) {
      return _get_original__l7ku1m(receiver);
    }, null);
  }
  function JsonEncoder() {
  }
  function Composer(writer) {
    this.w4v_1 = writer;
    this.x4v_1 = true;
  }
  protoOf(Composer).y4v = function () {
    this.x4v_1 = true;
  };
  protoOf(Composer).z4v = function () {
    return Unit_instance;
  };
  protoOf(Composer).a4w = function () {
    this.x4v_1 = false;
  };
  protoOf(Composer).b4w = function () {
    this.x4v_1 = false;
  };
  protoOf(Composer).c4w = function () {
    return Unit_instance;
  };
  protoOf(Composer).d4w = function (v) {
    return this.w4v_1.e4w(v);
  };
  protoOf(Composer).f4w = function (v) {
    return this.w4v_1.g4w(v);
  };
  protoOf(Composer).h4w = function (v) {
    return this.w4v_1.g4w(v.toString());
  };
  protoOf(Composer).i4w = function (v) {
    return this.w4v_1.g4w(v.toString());
  };
  protoOf(Composer).j4w = function (v) {
    return this.w4v_1.k4w(toLong(v));
  };
  protoOf(Composer).l4w = function (v) {
    return this.w4v_1.k4w(toLong(v));
  };
  protoOf(Composer).m4w = function (v) {
    return this.w4v_1.k4w(toLong(v));
  };
  protoOf(Composer).n4w = function (v) {
    return this.w4v_1.k4w(v);
  };
  protoOf(Composer).o4w = function (v) {
    return this.w4v_1.g4w(v.toString());
  };
  protoOf(Composer).p4w = function (value) {
    return this.w4v_1.q4w(value);
  };
  function Composer_0(sb, json) {
    return json.c4s_1.t4t_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerForUnsignedNumbers(writer, forceQuoting) {
    Composer.call(this, writer);
    this.t4w_1 = forceQuoting;
  }
  protoOf(ComposerForUnsignedNumbers).m4w = function (v) {
    if (this.t4w_1) {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(v);
      this.p4w(UInt__toString_impl_dbgl21(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(v);
      this.f4w(UInt__toString_impl_dbgl21(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).n4w = function (v) {
    if (this.t4w_1) {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$0 = _ULong___init__impl__c78o9k(v);
      this.p4w(ULong__toString_impl_f9au7k(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1 = _ULong___init__impl__c78o9k(v);
      this.f4w(ULong__toString_impl_f9au7k(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).j4w = function (v) {
    if (this.t4w_1) {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$0 = _UByte___init__impl__g9hnc4(v);
      this.p4w(UByte__toString_impl_v72jg(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUByte' call
      var tmp$ret$1 = _UByte___init__impl__g9hnc4(v);
      this.f4w(UByte__toString_impl_v72jg(tmp$ret$1));
    }
  };
  protoOf(ComposerForUnsignedNumbers).l4w = function (v) {
    if (this.t4w_1) {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$0 = _UShort___init__impl__jigrne(v);
      this.p4w(UShort__toString_impl_edaoee(tmp$ret$0));
    } else {
      // Inline function 'kotlin.toUShort' call
      var tmp$ret$1 = _UShort___init__impl__jigrne(v);
      this.f4w(UShort__toString_impl_edaoee(tmp$ret$1));
    }
  };
  function ComposerForUnquotedLiterals(writer, forceQuoting) {
    Composer.call(this, writer);
    this.w4w_1 = forceQuoting;
  }
  protoOf(ComposerForUnquotedLiterals).p4w = function (value) {
    if (this.w4w_1) {
      protoOf(Composer).p4w.call(this, value);
    } else {
      protoOf(Composer).f4w.call(this, value);
    }
  };
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.z4w_1 = json;
    this.a4x_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).y4v = function () {
    this.x4v_1 = true;
    this.a4x_1 = this.a4x_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).z4v = function () {
    this.a4x_1 = this.a4x_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).a4w = function () {
    this.x4v_1 = false;
    this.f4w('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.a4x_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.f4w(this.z4w_1.c4s_1.v4t_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).b4w = function () {
    if (this.x4v_1)
      this.x4v_1 = false;
    else {
      this.a4w();
    }
  };
  protoOf(ComposerWithPrettyPrint).c4w = function () {
    this.d4w(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.c4x_1 = (!descriptor.t22(index) && descriptor.s22(index).h22());
    return $this.c4x_1;
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
    tmp.b4x_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.c4x_1 = false;
  }
  protoOf(JsonElementMarker).d4x = function (index) {
    this.b4x_1.n2a(index);
  };
  protoOf(JsonElementMarker).e4x = function () {
    return this.b4x_1.o2a();
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
    _this__u8e3s4.f4x('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.r4s_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function throwInvalidFloatingPointDecoded(_this__u8e3s4, result) {
    _this__u8e3s4.g4x('Unexpected special floating-point value ' + toString(result) + '. By default, ' + 'non-finite floating point values are prohibited because they do not conform JSON specification', VOID, "It is possible to deserialize them using 'JsonBuilder.allowSpecialFloatingPointValues = true'");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.v21() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.l22().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    if (json.c4s_1.q4t_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.o22();
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
    var index = _this__u8e3s4.q22(name);
    if (!(index === -3))
      return index;
    if (!json.c4s_1.a4u_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonNameIndexOrThrow(_this__u8e3s4, json, name, suffix) {
    suffix = suffix === VOID ? '' : suffix;
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var index = getJsonNameIndex(_this__u8e3s4, json, name);
    if (index === -3)
      throw SerializationException_init_$Create$(_this__u8e3s4.v21() + " does not contain element with name '" + name + "'" + suffix);
    return index;
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.p22(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.l22(), CLASS_getInstance()) ? json.c4s_1.b4u_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.i4x(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.c4s_1.c4u_1 && equals(descriptor.l22(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).m2(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.i4x(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.n22();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.r22(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j4x_1;
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
          tmp_0 = _this__u8e3s4.p22(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.k4x(_this__u8e3s4, i, _this__u8e3s4.p22(i));
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
    var entity = equals($this_buildDeserializationNamesMap.l22(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).k2(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.p22(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.p22(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.p2(name, index);
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.n22();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.p22(tmp_2);
        tmp_1[tmp_2] = $strategy.k4x($this_serializationNamesIndices, tmp_2, baseName);
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
    var newSize = imul($this.n4x_1, 2);
    $this.l4x_1 = copyOf($this.l4x_1, newSize);
    $this.m4x_1 = copyOf_0($this.m4x_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.l4x_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.m4x_1 = tmp_2;
    this.n4x_1 = -1;
  }
  protoOf(JsonPath).o4x = function (sd) {
    this.n4x_1 = this.n4x_1 + 1 | 0;
    var depth = this.n4x_1;
    if (depth === this.l4x_1.length) {
      resize(this);
    }
    this.l4x_1[depth] = sd;
  };
  protoOf(JsonPath).p4x = function (index) {
    this.m4x_1[this.n4x_1] = index;
  };
  protoOf(JsonPath).q4x = function (key) {
    var tmp;
    if (!(this.m4x_1[this.n4x_1] === -2)) {
      this.n4x_1 = this.n4x_1 + 1 | 0;
      tmp = this.n4x_1 === this.l4x_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.l4x_1[this.n4x_1] = key;
    this.m4x_1[this.n4x_1] = -2;
  };
  protoOf(JsonPath).r4x = function () {
    if (this.m4x_1[this.n4x_1] === -2) {
      this.l4x_1[this.n4x_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).s4x = function () {
    var depth = this.n4x_1;
    if (this.m4x_1[depth] === -2) {
      this.m4x_1[depth] = -1;
      this.n4x_1 = this.n4x_1 - 1 | 0;
    }
    if (!(this.n4x_1 === -1)) {
      this.n4x_1 = this.n4x_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).t4x = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.y8('$');
    // Inline function 'kotlin.repeat' call
    var times = this.n4x_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.l4x_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.l22(), LIST_getInstance())) {
            if (!(this.m4x_1[index] === -1)) {
              this_0.y8('[');
              this_0.ae(this.m4x_1[index]);
              this_0.y8(']');
            }
          } else {
            var idx = this.m4x_1[index];
            if (idx >= 0) {
              this_0.y8('.');
              this_0.y8(element.p22(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.y8('[');
            this_0.y8("'");
            this_0.x8(element);
            this_0.y8("'");
            this_0.y8(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.t4x();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.l22();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.hc() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.v4x_1)
      return Unit_instance;
    if (!$this.w4x_1)
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
    var last = descriptor.n22();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.p22(i);
        if (name === $this.u4x_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, ' + 'rename property with @SerialName annotation ' + 'or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function JsonSerializersModuleValidator(configuration) {
    this.u4x_1 = configuration.y4t_1;
    this.v4x_1 = configuration.x4t_1;
    this.w4x_1 = !configuration.f4u_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).h2m = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).k2m = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.u20();
    checkKind(this, descriptor, actualClass);
    if (!this.v4x_1 && this.w4x_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(JsonSerializersModuleValidator).l2m = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).m2m = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().s();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.z25(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.g4y_1.k4y(6);
    if ($this.g4y_1.l4y() === 4) {
      $this.g4y_1.g4x('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.g4y_1.m4y()) {
      var key = $this.h4y_1 ? $this.g4y_1.o4y() : $this.g4y_1.n4y();
      $this.g4y_1.k4y(5);
      var element = $this.p4y();
      // Inline function 'kotlin.collections.set' call
      result.p2(key, element);
      lastToken = $this.g4y_1.q4y();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.g4y_1.g4x('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.g4y_1.k4y(7);
    } else if (lastToken === 4) {
      if (!$this.i4y_1) {
        invalidTrailingComma($this.g4y_1);
      }
      $this.g4y_1.k4y(7);
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
    var lastToken = $this.g4y_1.q4y();
    if ($this.g4y_1.l4y() === 4) {
      $this.g4y_1.g4x('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.g4y_1.m4y()) {
      var element = $this.p4y();
      result.n(element);
      lastToken = $this.g4y_1.q4y();
      if (!(lastToken === 4)) {
        var tmp0 = $this.g4y_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.r4s_1;
        if (!condition) {
          var tmp$ret$1 = 'Expected end of the array or comma';
          tmp0.g4x(tmp$ret$1, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.g4y_1.k4y(9);
    } else if (lastToken === 4) {
      if (!$this.i4y_1) {
        invalidTrailingComma($this.g4y_1, 'array');
      }
      $this.g4y_1.k4y(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.h4y_1 || !isString) {
      tmp = $this.g4y_1.o4y();
    } else {
      tmp = $this.g4y_1.n4y();
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
    this.o4z_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).t4z = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.u4z($this$DeepRecursiveFunction, it, $completion);
    tmp.p9_1 = Unit_instance;
    tmp.q9_1 = null;
    return tmp.fa();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).wa = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.t4z(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).fa = function () {
    var suspendResult = this.p9_1;
    $sm: do
      try {
        var tmp = this.n9_1;
        switch (tmp) {
          case 0:
            this.o9_1 = 3;
            this.r4z_1 = this.o4z_1.g4y_1.l4y();
            if (this.r4z_1 === 1) {
              this.s4z_1 = readValue(this.o4z_1, true);
              this.n9_1 = 2;
              continue $sm;
            } else {
              if (this.r4z_1 === 0) {
                this.s4z_1 = readValue(this.o4z_1, false);
                this.n9_1 = 2;
                continue $sm;
              } else {
                if (this.r4z_1 === 6) {
                  this.n9_1 = 1;
                  suspendResult = readObject_0(this.o4z_1, this.p4z_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (this.r4z_1 === 8) {
                    this.s4z_1 = readArray(this.o4z_1);
                    this.n9_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.o4z_1.g4y_1.g4x("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.s4z_1 = suspendResult;
            this.n9_1 = 2;
            continue $sm;
          case 2:
            return this.s4z_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).u4z = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.o4z_1, completion);
    i.p4z_1 = $this$DeepRecursiveFunction;
    i.q4z_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.t4z($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$0(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z4y_1 = _this__u8e3s4;
    this.a4z_1 = _this__u8e3s4_0;
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
            tmp_0.b4z_1 = this.z4y_1;
            this.c4z_1 = this.b4z_1;
            this.d4z_1 = this.c4z_1.g4y_1.k4y(6);
            if (this.c4z_1.g4y_1.l4y() === 4) {
              this.c4z_1.g4y_1.g4x('Unexpected leading comma');
            }

            var tmp_1 = this;
            tmp_1.e4z_1 = LinkedHashMap_init_$Create$();
            this.n9_1 = 1;
            continue $sm;
          case 1:
            if (!this.c4z_1.g4y_1.m4y()) {
              this.n9_1 = 4;
              continue $sm;
            }

            this.f4z_1 = this.c4z_1.h4y_1 ? this.c4z_1.g4y_1.o4y() : this.c4z_1.g4y_1.n4y();
            this.c4z_1.g4y_1.k4y(5);
            this.n9_1 = 2;
            suspendResult = this.a4z_1.ip(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.e4z_1;
            var key = this.f4z_1;
            tmp0.p2(key, element);
            this.d4z_1 = this.c4z_1.g4y_1.q4y();
            var tmp0_subject = this.d4z_1;
            if (tmp0_subject === 4) {
              this.n9_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.n9_1 = 4;
                continue $sm;
              } else {
                this.c4z_1.g4y_1.g4x('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.n9_1 = 1;
            continue $sm;
          case 4:
            if (this.d4z_1 === 6) {
              this.c4z_1.g4y_1.k4y(7);
            } else if (this.d4z_1 === 4) {
              if (!this.c4z_1.i4y_1) {
                invalidTrailingComma(this.c4z_1.g4y_1);
              }
              this.c4z_1.g4y_1.k4y(7);
            }

            return new JsonObject(this.e4z_1);
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
    this.g4y_1 = lexer;
    this.h4y_1 = configuration.r4t_1;
    this.i4y_1 = configuration.d4u_1;
    this.j4y_1 = 0;
  }
  protoOf(JsonTreeReader).p4y = function () {
    var token = this.g4y_1.l4y();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.j4y_1 = this.j4y_1 + 1 | 0;
      if (this.j4y_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.j4y_1 = this.j4y_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.g4y_1.g4x('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.o22().p();
    while (_iterator__ex2g4s.q()) {
      var annotation = _iterator__ex2g4s.r();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.g4u_1;
    }
    return json.c4s_1.y4t_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.u20()).w(classDiscriminator)) {
      var baseName = serializer.u20().v21();
      var actualName = actualSerializer.u20().v21();
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
    this.h4x_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).v4z = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.h4x_1;
    var value_0 = this_0.m2(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.p2(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp2 = tmp;
    var tmp3 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp2.p2(tmp3, value_1);
  };
  protoOf(DescriptorSchemaCache).i4x = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.w4z(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.v4z(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).w4z = function (descriptor, key) {
    var tmp0_safe_receiver = this.h4x_1.m2(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.m2(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.x4z_1 = discriminatorToSkip;
  }
  function trySkip($this, _this__u8e3s4, unknownKey) {
    if (_this__u8e3s4 == null)
      return false;
    if (_this__u8e3s4.x4z_1 === unknownKey) {
      _this__u8e3s4.x4z_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.y24(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.l4s_1.l4y() === 4) {
      $this.l4s_1.g4x('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.n4s_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.n4s_1 === -1)) {
        hasComma = $this.l4s_1.z4z();
      }
    } else {
      $this.l4s_1.y4z(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.l4s_1.m4y()) {
      if (decodingKey) {
        if ($this.n4s_1 === -1) {
          var tmp0 = $this.l4s_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.r4s_1;
          if (!condition) {
            var tmp$ret$0 = 'Unexpected leading comma';
            tmp0.g4x(tmp$ret$0, position);
          }
        } else {
          var tmp3 = $this.l4s_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp3.r4s_1;
          if (!condition_0) {
            var tmp$ret$2 = 'Expected comma after the key-value pair';
            tmp3.g4x(tmp$ret$2, position_0);
          }
        }
      }
      $this.n4s_1 = $this.n4s_1 + 1 | 0;
      tmp = $this.n4s_1;
    } else {
      if (hasComma && !$this.j4s_1.c4s_1.d4u_1) {
        invalidTrailingComma($this.l4s_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.j4s_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.t22(index);
      var elementDescriptor = descriptor.s22(index);
      var tmp;
      if (isOptional && !elementDescriptor.h22()) {
        tmp = $this.l4s_1.a50(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.l22(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.h22()) {
          tmp_0 = $this.l4s_1.a50(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.l4s_1.b50($this.p4s_1.r4t_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$1 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.c4s_1.u4t_1 && elementDescriptor.h22();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.l4s_1.n4y();
          tmp$ret$1 = true;
          break $l$block_2;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.l4s_1.z4z();
    while ($this.l4s_1.m4y()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.l4s_1.y4z(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.j4s_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.p4s_1.w4t_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.l4s_1.z4z();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.q4s_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.d4x(index);
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
    if (hasComma && !$this.j4s_1.c4s_1.d4u_1) {
      invalidTrailingComma($this.l4s_1);
    }
    var tmp1_safe_receiver = $this.q4s_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.e4x();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.j4s_1) || trySkip($this, $this.o4s_1, key)) {
      $this.l4s_1.d50($this.p4s_1.r4t_1);
    } else {
      $this.l4s_1.s4s_1.s4x();
      $this.l4s_1.c50(key);
    }
    return $this.l4s_1.z4z();
  }
  function decodeListIndex($this) {
    var hasComma = $this.l4s_1.z4z();
    var tmp;
    if ($this.l4s_1.m4y()) {
      if (!($this.n4s_1 === -1) && !hasComma) {
        $this.l4s_1.g4x('Expected end of the array or comma');
      }
      $this.n4s_1 = $this.n4s_1 + 1 | 0;
      tmp = $this.n4s_1;
    } else {
      if (hasComma && !$this.j4s_1.c4s_1.d4u_1) {
        invalidTrailingComma($this.l4s_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.p4s_1.r4t_1) {
      tmp = $this.l4s_1.f50();
    } else {
      tmp = $this.l4s_1.e50();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.j4s_1 = json;
    this.k4s_1 = mode;
    this.l4s_1 = lexer;
    this.m4s_1 = this.j4s_1.w24();
    this.n4s_1 = -1;
    this.o4s_1 = discriminatorHolder;
    this.p4s_1 = this.j4s_1.c4s_1;
    this.q4s_1 = this.p4s_1.u4t_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).l4u = function () {
    return this.j4s_1;
  };
  protoOf(StreamingJsonDecoder).w24 = function () {
    return this.m4s_1;
  };
  protoOf(StreamingJsonDecoder).j4u = function () {
    return (new JsonTreeReader(this.j4s_1.c4s_1, this.l4s_1)).p4y();
  };
  protoOf(StreamingJsonDecoder).g24 = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.j4s_1.c4s_1.x4t_1;
      }
      if (tmp) {
        return deserializer.w20(this);
      }
      var discriminator = classDiscriminator(deserializer.u20(), this.j4s_1);
      var tmp0_elvis_lhs = this.l4s_1.g50(discriminator, this.p4s_1.r4t_1);
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
            tmp_1 = this.l4u().c4s_1.x4t_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp1.w20(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp1.u20(), this.l4u());
          var tmp0 = this.j4u();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp1.u20().v21();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).hc();
            var tmp_3 = getKClassFromExpression(tmp0).hc();
            var tmp$ret$1 = this.l4s_1.s4s_1.t4x();
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
          tmp$ret$0 = readPolymorphicJson(this.l4u(), discriminator_0, jsonTree, actualSerializer);
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
          this.l4s_1.g4x(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.o4s_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.w20(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains_0(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.b22_1, plus(e.message, ' at path: ') + this.l4s_1.s4s_1.t4x(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).h24 = function (descriptor) {
    var newMode = switchMode(this.j4s_1, descriptor);
    this.l4s_1.s4s_1.o4x(descriptor);
    this.l4s_1.y4z(newMode.j50_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.t2_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.j4s_1, newMode, this.l4s_1, descriptor, this.o4s_1);
        break;
      default:
        var tmp_0;
        if (this.k4s_1.equals(newMode) && this.j4s_1.c4s_1.u4t_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.j4s_1, newMode, this.l4s_1, descriptor, this.o4s_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).i24 = function (descriptor) {
    if (descriptor.n22() === 0 && ignoreUnknownKeys(descriptor, this.j4s_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.l4s_1.z4z() && !this.j4s_1.c4s_1.d4u_1) {
      invalidTrailingComma(this.l4s_1, '');
    }
    this.l4s_1.y4z(this.k4s_1.k50_1);
    this.l4s_1.s4s_1.s4x();
  };
  protoOf(StreamingJsonDecoder).s23 = function () {
    var tmp;
    var tmp0_safe_receiver = this.q4s_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c4x_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.l4s_1.l50();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).t23 = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).t24 = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.k4s_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.l4s_1.s4s_1.r4x();
    }
    var value = protoOf(AbstractDecoder).t24.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.l4s_1.s4s_1.q4x(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).y24 = function (descriptor) {
    var index;
    switch (this.k4s_1.t2_1) {
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
    if (!this.k4s_1.equals(WriteMode_MAP_getInstance())) {
      this.l4s_1.s4s_1.p4x(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).u23 = function () {
    return this.l4s_1.m50();
  };
  protoOf(StreamingJsonDecoder).v23 = function () {
    var value = this.l4s_1.n50();
    if (!value.equals(toLong(value.r3()))) {
      this.l4s_1.g4x("Failed to parse byte for input '" + value.toString() + "'");
    }
    return value.r3();
  };
  protoOf(StreamingJsonDecoder).w23 = function () {
    var value = this.l4s_1.n50();
    if (!value.equals(toLong(value.s3()))) {
      this.l4s_1.g4x("Failed to parse short for input '" + value.toString() + "'");
    }
    return value.s3();
  };
  protoOf(StreamingJsonDecoder).x23 = function () {
    var value = this.l4s_1.n50();
    if (!value.equals(toLong(value.l1()))) {
      this.l4s_1.g4x("Failed to parse int for input '" + value.toString() + "'");
    }
    return value.l1();
  };
  protoOf(StreamingJsonDecoder).y23 = function () {
    return this.l4s_1.n50();
  };
  protoOf(StreamingJsonDecoder).z23 = function () {
    var tmp0 = this.l4s_1;
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.o4y();
      try {
        // Inline function 'kotlin.text.toFloat' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$4 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g4x("Failed to parse type '" + 'float' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$4;
    var specialFp = this.j4s_1.c4s_1.z4t_1;
    if (specialFp || isFinite(result))
      return result;
    throwInvalidFloatingPointDecoded(this.l4s_1, result);
  };
  protoOf(StreamingJsonDecoder).a24 = function () {
    var tmp0 = this.l4s_1;
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.o4y();
      try {
        tmp$ret$1 = toDouble(input);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g4x("Failed to parse type '" + 'double' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    var result = tmp$ret$1;
    var specialFp = this.j4s_1.c4s_1.z4t_1;
    if (specialFp || isFinite_0(result))
      return result;
    throwInvalidFloatingPointDecoded(this.l4s_1, result);
  };
  protoOf(StreamingJsonDecoder).b24 = function () {
    var string = this.l4s_1.o4y();
    if (!(string.length === 1)) {
      this.l4s_1.g4x("Expected single char, but got '" + string + "'");
    }
    return charSequenceGet(string, 0);
  };
  protoOf(StreamingJsonDecoder).c24 = function () {
    var tmp;
    if (this.p4s_1.r4t_1) {
      tmp = this.l4s_1.f50();
    } else {
      tmp = this.l4s_1.n4y();
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).e24 = function (descriptor) {
    return get_isUnsignedNumber(descriptor) ? new JsonDecoderForUnsignedTypes(this.l4s_1, this.j4s_1) : protoOf(AbstractDecoder).e24.call(this, descriptor);
  };
  protoOf(StreamingJsonDecoder).d24 = function (enumDescriptor) {
    return getJsonNameIndexOrThrow(enumDescriptor, this.j4s_1, this.c24(), ' at path ' + this.l4s_1.s4s_1.t4x());
  };
  function JsonDecoderForUnsignedTypes(lexer, json) {
    AbstractDecoder.call(this);
    this.o50_1 = lexer;
    this.p50_1 = json.w24();
  }
  protoOf(JsonDecoderForUnsignedTypes).w24 = function () {
    return this.p50_1;
  };
  protoOf(JsonDecoderForUnsignedTypes).y24 = function (descriptor) {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(JsonDecoderForUnsignedTypes).x23 = function () {
    var tmp0 = this.o50_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.o4y();
      try {
        // Inline function 'kotlin.UInt.toInt' call
        var this_0 = toUInt(input);
        tmp$ret$2 = _UInt___get_data__impl__f0vqqw(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g4x("Failed to parse type '" + 'UInt' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).y23 = function () {
    var tmp0 = this.o50_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.o4y();
      try {
        // Inline function 'kotlin.ULong.toLong' call
        var this_0 = toULong(input);
        tmp$ret$2 = _ULong___get_data__impl__fggpzb(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g4x("Failed to parse type '" + 'ULong' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).v23 = function () {
    var tmp0 = this.o50_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.o4y();
      try {
        // Inline function 'kotlin.UByte.toByte' call
        var this_0 = toUByte(input);
        tmp$ret$2 = _UByte___get_data__impl__jof9qr(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g4x("Failed to parse type '" + 'UByte' + "' for input '" + input + "'");
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$2;
  };
  protoOf(JsonDecoderForUnsignedTypes).w23 = function () {
    var tmp0 = this.o50_1;
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.parseString' call
      var input = tmp0.o4y();
      try {
        // Inline function 'kotlin.UShort.toShort' call
        var this_0 = toUShort(input);
        tmp$ret$2 = _UShort___get_data__impl__g0245(this_0);
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          tmp0.g4x("Failed to parse type '" + 'UShort' + "' for input '" + input + "'");
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
    $this.x4x_1.a4w();
    $this.l25(discriminator);
    $this.x4x_1.d4w(_Char___init__impl__6a9atx(58));
    $this.x4x_1.c4w();
    $this.l25(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.x4x_1 = composer;
    this.y4x_1 = json;
    this.z4x_1 = mode;
    this.a4y_1 = modeReuseCache;
    this.b4y_1 = this.y4x_1.w24();
    this.c4y_1 = this.y4x_1.c4s_1;
    this.d4y_1 = false;
    this.e4y_1 = null;
    this.f4y_1 = null;
    var i = this.z4x_1.t2_1;
    if (!(this.a4y_1 == null)) {
      if (!(this.a4y_1[i] === null) || !(this.a4y_1[i] === this)) {
        this.a4y_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).l4u = function () {
    return this.y4x_1;
  };
  protoOf(StreamingJsonEncoder).w24 = function () {
    return this.b4y_1;
  };
  protoOf(StreamingJsonEncoder).e26 = function (descriptor, index) {
    return this.c4y_1.p4t_1;
  };
  protoOf(StreamingJsonEncoder).z25 = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.l4u().c4s_1.x4t_1) {
        serializer.v20(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.l4u().c4s_1.f4u_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.l4u().c4s_1.f4u_1.t2_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.u20().l22();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.u20(), this.l4u()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.u20()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.u20().l22());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.u20().v21();
        this.e4y_1 = baseClassDiscriminator;
        this.f4y_1 = serialName;
      }
      actualSerializer.v20(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).h24 = function (descriptor) {
    var newMode = switchMode(this.y4x_1, descriptor);
    if (!(newMode.j50_1 === _Char___init__impl__6a9atx(0))) {
      this.x4x_1.d4w(newMode.j50_1);
      this.x4x_1.y4v();
    }
    var discriminator = this.e4y_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.f4y_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.v21() : tmp0_elvis_lhs);
      this.e4y_1 = null;
      this.f4y_1 = null;
    }
    if (this.z4x_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.a4y_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.t2_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.x4x_1, this.y4x_1, newMode, this.a4y_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).i24 = function (descriptor) {
    if (!(this.z4x_1.k50_1 === _Char___init__impl__6a9atx(0))) {
      this.x4x_1.z4v();
      this.x4x_1.b4w();
      this.x4x_1.d4w(this.z4x_1.k50_1);
    }
  };
  protoOf(StreamingJsonEncoder).a25 = function (descriptor, index) {
    switch (this.z4x_1.t2_1) {
      case 1:
        if (!this.x4x_1.x4v_1) {
          this.x4x_1.d4w(_Char___init__impl__6a9atx(44));
        }

        this.x4x_1.a4w();
        break;
      case 2:
        if (!this.x4x_1.x4v_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.x4x_1.d4w(_Char___init__impl__6a9atx(44));
            this.x4x_1.a4w();
            tmp_0 = true;
          } else {
            this.x4x_1.d4w(_Char___init__impl__6a9atx(58));
            this.x4x_1.c4w();
            tmp_0 = false;
          }
          tmp.d4y_1 = tmp_0;
        } else {
          this.d4y_1 = true;
          this.x4x_1.a4w();
        }

        break;
      case 3:
        if (index === 0)
          this.d4y_1 = true;
        if (index === 1) {
          this.x4x_1.d4w(_Char___init__impl__6a9atx(44));
          this.x4x_1.c4w();
          this.d4y_1 = false;
        }

        break;
      default:
        if (!this.x4x_1.x4v_1) {
          this.x4x_1.d4w(_Char___init__impl__6a9atx(44));
        }

        this.x4x_1.a4w();
        this.l25(getJsonElementName(descriptor, this.y4x_1, index));
        this.x4x_1.d4w(_Char___init__impl__6a9atx(58));
        this.x4x_1.c4w();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).a26 = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.c4y_1.u4t_1) {
      protoOf(AbstractEncoder).a26.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).n25 = function (descriptor) {
    var tmp;
    if (get_isUnsignedNumber(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_0;
      var tmp_1 = this.x4x_1;
      if (tmp_1 instanceof ComposerForUnsignedNumbers) {
        tmp_0 = this.x4x_1;
      } else {
        var tmp1 = this.x4x_1.w4v_1;
        var p1 = this.d4y_1;
        tmp_0 = new ComposerForUnsignedNumbers(tmp1, p1);
      }
      var tmp$ret$1 = tmp_0;
      tmp = new StreamingJsonEncoder(tmp$ret$1, this.y4x_1, this.z4x_1, null);
    } else if (get_isUnquotedLiteral(descriptor)) {
      // Inline function 'kotlinx.serialization.json.internal.StreamingJsonEncoder.composerAs' call
      var tmp_2;
      var tmp_3 = this.x4x_1;
      if (tmp_3 instanceof ComposerForUnquotedLiterals) {
        tmp_2 = this.x4x_1;
      } else {
        var tmp4 = this.x4x_1.w4v_1;
        var p1_0 = this.d4y_1;
        tmp_2 = new ComposerForUnquotedLiterals(tmp4, p1_0);
      }
      var tmp$ret$3 = tmp_2;
      tmp = new StreamingJsonEncoder(tmp$ret$3, this.y4x_1, this.z4x_1, null);
    } else if (!(this.e4y_1 == null)) {
      // Inline function 'kotlin.apply' call
      this.f4y_1 = descriptor.v21();
      tmp = this;
    } else {
      tmp = protoOf(AbstractEncoder).n25.call(this, descriptor);
    }
    return tmp;
  };
  protoOf(StreamingJsonEncoder).c25 = function () {
    this.x4x_1.f4w('null');
  };
  protoOf(StreamingJsonEncoder).d25 = function (value) {
    if (this.d4y_1) {
      this.l25(value.toString());
    } else {
      this.x4x_1.o4w(value);
    }
  };
  protoOf(StreamingJsonEncoder).e25 = function (value) {
    if (this.d4y_1) {
      this.l25(value.toString());
    } else {
      this.x4x_1.j4w(value);
    }
  };
  protoOf(StreamingJsonEncoder).f25 = function (value) {
    if (this.d4y_1) {
      this.l25(value.toString());
    } else {
      this.x4x_1.l4w(value);
    }
  };
  protoOf(StreamingJsonEncoder).g25 = function (value) {
    if (this.d4y_1) {
      this.l25(value.toString());
    } else {
      this.x4x_1.m4w(value);
    }
  };
  protoOf(StreamingJsonEncoder).h25 = function (value) {
    if (this.d4y_1) {
      this.l25(value.toString());
    } else {
      this.x4x_1.n4w(value);
    }
  };
  protoOf(StreamingJsonEncoder).i25 = function (value) {
    if (this.d4y_1) {
      this.l25(value.toString());
    } else {
      this.x4x_1.h4w(value);
    }
    if (!this.c4y_1.z4t_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.x4x_1.w4v_1));
    }
  };
  protoOf(StreamingJsonEncoder).j25 = function (value) {
    if (this.d4y_1) {
      this.l25(value.toString());
    } else {
      this.x4x_1.i4w(value);
    }
    if (!this.c4y_1.z4t_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded_0(value, toString(this.x4x_1.w4v_1));
    }
  };
  protoOf(StreamingJsonEncoder).k25 = function (value) {
    this.l25(toString_1(value));
  };
  protoOf(StreamingJsonEncoder).l25 = function (value) {
    return this.x4x_1.p4w(value);
  };
  protoOf(StreamingJsonEncoder).m25 = function (enumDescriptor, index) {
    this.l25(enumDescriptor.p22(index));
  };
  function get_isUnsignedNumber(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.m22() && get_unsignedNumberDescriptors().w(_this__u8e3s4);
  }
  function get_isUnquotedLiteral(_this__u8e3s4) {
    _init_properties_StreamingJsonEncoder_kt__pn1bsi();
    return _this__u8e3s4.m22() && equals(_this__u8e3s4, get_jsonUnquotedLiteralDescriptor());
  }
  var properties_initialized_StreamingJsonEncoder_kt_6ifwwk;
  function _init_properties_StreamingJsonEncoder_kt__pn1bsi() {
    if (!properties_initialized_StreamingJsonEncoder_kt_6ifwwk) {
      properties_initialized_StreamingJsonEncoder_kt_6ifwwk = true;
      unsignedNumberDescriptors = setOf([serializer_1(Companion_getInstance_0()).u20(), serializer_0(Companion_getInstance()).u20(), serializer_2(Companion_getInstance_1()).u20(), serializer_3(Companion_getInstance_2()).u20()]);
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
    _this__u8e3s4.z8(_Char___init__impl__6a9atx(34));
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
          _this__u8e3s4.y8(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.xd(value, lastPos, value.length);
    else
      _this__u8e3s4.y8(value);
    _this__u8e3s4.z8(_Char___init__impl__6a9atx(34));
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
    return input.g24(deserializer);
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.w50(tag), toString($this.x50()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.s50_1 = json;
    this.t50_1 = value;
    this.u50_1 = polymorphicDiscriminator;
    this.v50_1 = this.l4u().c4s_1;
  }
  protoOf(AbstractJsonTreeDecoder).l4u = function () {
    return this.s50_1;
  };
  protoOf(AbstractJsonTreeDecoder).b1 = function () {
    return this.t50_1;
  };
  protoOf(AbstractJsonTreeDecoder).w24 = function () {
    return this.l4u().w24();
  };
  protoOf(AbstractJsonTreeDecoder).x50 = function () {
    var tmp0_safe_receiver = this.n2i();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.y50(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.b1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).w50 = function (currentTag) {
    return this.l2j() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).j4u = function () {
    return this.x50();
  };
  protoOf(AbstractJsonTreeDecoder).g24 = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.l4u().c4s_1.x4t_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.w20(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.u20(), this.l4u());
      var tmp0 = this.j4u();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.u20().v21();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).hc();
        var tmp_1 = getKClassFromExpression(tmp0).hc();
        var tmp$ret$1 = this.l2j();
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
      tmp$ret$0 = readPolymorphicJson(this.l4u(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).o2i = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).h24 = function (descriptor) {
    var currentObject = this.x50();
    var tmp0_subject = descriptor.l22();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.l4u();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.v21();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).hc();
        var tmp_3 = getKClassFromExpression(currentObject).hc();
        var tmp$ret$0 = this.l2j();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.l4u();
        var keyDescriptor = carrierDescriptor(descriptor.s22(0), this_0.w24());
        var keyKind = keyDescriptor.l22();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.l4u();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.v21();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).hc();
            var tmp_8 = getKClassFromExpression(currentObject).hc();
            var tmp$ret$3 = this.l2j();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$3, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.c4s_1.s4t_1) {
            var tmp_9 = this.l4u();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.v21();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).hc();
              var tmp_11 = getKClassFromExpression(currentObject).hc();
              var tmp$ret$7 = this.l2j();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$7, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.l4u();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.v21();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).hc();
          var tmp_14 = getKClassFromExpression(currentObject).hc();
          var tmp$ret$12 = this.l2j();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$12, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.u50_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).i24 = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).s23 = function () {
    var tmp = this.x50();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).z50 = function (tag, enumDescriptor) {
    var tmp = this.l4u();
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
    var tmp1 = this.y50(tag);
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var serialName = enumDescriptor.v21();
    if (!(tmp1 instanceof JsonPrimitive)) {
      var tmp_0 = getKClass(JsonPrimitive).hc();
      var tmp_1 = getKClassFromExpression(tmp1).hc();
      var tmp$ret$0 = this.w50(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
    }
    return getJsonNameIndexOrThrow(enumDescriptor, tmp, tmp1.q4u());
  };
  protoOf(AbstractJsonTreeDecoder).x2j = function (tag, enumDescriptor) {
    return this.z50((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).a51 = function (tag) {
    return !(this.y50(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).n2j = function (tag) {
    return this.a51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).b51 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y50(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.w50(tag);
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
  protoOf(AbstractJsonTreeDecoder).o2j = function (tag) {
    return this.b51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).c51 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y50(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.w50(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'byte' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-128, 127);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.r3();
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
  protoOf(AbstractJsonTreeDecoder).p2j = function (tag) {
    return this.c51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).d51 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y50(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.w50(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'short' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-32768, 32767);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.s3();
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
  protoOf(AbstractJsonTreeDecoder).q2j = function (tag) {
    return this.d51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).e51 = function (tag) {
    var tmp$ret$5;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y50(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.w50(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = result.l1();
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
  protoOf(AbstractJsonTreeDecoder).r2j = function (tag) {
    return this.e51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).f51 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y50(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.w50(tag);
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
  protoOf(AbstractJsonTreeDecoder).s2j = function (tag) {
    return this.f51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).g51 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y50(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.w50(tag);
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
    var specialFp = this.l4u().c4s_1.z4t_1;
    if (specialFp || isFinite(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.x50()));
  };
  protoOf(AbstractJsonTreeDecoder).t2j = function (tag) {
    return this.g51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).h51 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y50(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.w50(tag);
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
    var specialFp = this.l4u().c4s_1.z4t_1;
    if (specialFp || isFinite_0(result))
      return result;
    throw InvalidFloatingPointDecoded(result, tag, toString(this.x50()));
  };
  protoOf(AbstractJsonTreeDecoder).u2j = function (tag) {
    return this.h51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).i51 = function (tag) {
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.y50(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).hc();
        var tmp_0 = getKClassFromExpression(value).hc();
        var tmp$ret$0 = this.w50(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'char' + ' at element: ' + tmp$ret$0, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = new Char(single(literal.q4u()));
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'char', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$4 = tmp_1.p1_1;
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
  protoOf(AbstractJsonTreeDecoder).v2j = function (tag) {
    return this.i51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).j51 = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.y50(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).hc();
      var tmp_0 = getKClassFromExpression(value).hc();
      var tmp$ret$0 = this.w50(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$0, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.w50(tag), toString(this.x50()));
    if (!value_0.x4u_1 && !this.l4u().c4s_1.r4t_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.w50(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.x50()));
    }
    return value_0.z4u_1;
  };
  protoOf(AbstractJsonTreeDecoder).w2j = function (tag) {
    return this.j51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).k51 = function (tag, inlineDescriptor) {
    var tmp;
    if (get_isUnsignedNumber(inlineDescriptor)) {
      var tmp_0 = this.l4u();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      var tmp1 = this.y50(tag);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = inlineDescriptor.v21();
      if (!(tmp1 instanceof JsonPrimitive)) {
        var tmp_1 = getKClass(JsonPrimitive).hc();
        var tmp_2 = getKClassFromExpression(tmp1).hc();
        var tmp$ret$0 = this.w50(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_1 + ', but had ' + tmp_2 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      var lexer = StringJsonLexer_0(tmp_0, tmp1.q4u());
      tmp = new JsonDecoderForUnsignedTypes(lexer, this.l4u());
    } else {
      tmp = protoOf(NamedValueDecoder).y2j.call(this, tag, inlineDescriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).y2j = function (tag, inlineDescriptor) {
    return this.k51((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeDecoder).e24 = function (descriptor) {
    return !(this.n2i() == null) ? protoOf(NamedValueDecoder).e24.call(this, descriptor) : (new JsonPrimitiveDecoder(this.l4u(), this.b1(), this.u50_1)).e24(descriptor);
  };
  function coerceInputValue_0($this, descriptor, index, tag) {
    var tmp0 = $this.l4u();
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.t22(index);
      var elementDescriptor = descriptor.s22(index);
      var tmp;
      if (isOptional && !elementDescriptor.h22()) {
        var tmp_0 = $this.y50(tag);
        tmp = tmp_0 instanceof JsonNull;
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.l22(), ENUM_getInstance())) {
        var tmp_1;
        if (elementDescriptor.h22()) {
          var tmp_2 = $this.y50(tag);
          tmp_1 = tmp_2 instanceof JsonNull;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp$ret$1 = false;
          break $l$block_2;
        }
        var tmp_3 = $this.y50(tag);
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
        var coerceToNull = !tmp0.c4s_1.u4t_1 && elementDescriptor.h22();
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
    $this.u51_1 = (!$this.l4u().c4s_1.u4t_1 && !descriptor.t22(index) && descriptor.s22(index).h22());
    return $this.u51_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.r51_1 = value;
    this.s51_1 = polyDescriptor;
    this.t51_1 = 0;
    this.u51_1 = false;
  }
  protoOf(JsonTreeDecoder).b1 = function () {
    return this.r51_1;
  };
  protoOf(JsonTreeDecoder).y24 = function (descriptor) {
    while (this.t51_1 < descriptor.n22()) {
      var _unary__edvuaz = this.t51_1;
      this.t51_1 = _unary__edvuaz + 1 | 0;
      var name = this.j2i(descriptor, _unary__edvuaz);
      var index = this.t51_1 - 1 | 0;
      this.u51_1 = false;
      var tmp;
      var tmp_0;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.b1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).k2(name)) {
        tmp_0 = true;
      } else {
        tmp_0 = absenceIsNull(this, descriptor, index);
      }
      if (tmp_0) {
        tmp = !this.v50_1.w4t_1 || !coerceInputValue_0(this, descriptor, index, name);
      } else {
        tmp = false;
      }
      if (tmp) {
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).s23 = function () {
    return !this.u51_1 && protoOf(AbstractJsonTreeDecoder).s23.call(this);
  };
  protoOf(JsonTreeDecoder).k2i = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.l4u());
    var baseName = descriptor.p22(index);
    if (strategy == null) {
      if (!this.v50_1.a4u_1)
        return baseName;
      if (this.b1().n2().w(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.l4u(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.b1().n2();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.p();
      while (_iterator__ex2g4s.q()) {
        var element = _iterator__ex2g4s.r();
        if (deserializationNamesMap_0.m2(element) === index) {
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
    var fallbackName = strategy == null ? null : strategy.k4x(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).y50 = function (tag) {
    return getValue(this.b1(), tag);
  };
  protoOf(JsonTreeDecoder).h24 = function (descriptor) {
    if (descriptor === this.s51_1) {
      var tmp = this.l4u();
      var tmp1 = this.x50();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.s51_1.v21();
      if (!(tmp1 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).hc();
        var tmp_1 = getKClassFromExpression(tmp1).hc();
        var tmp$ret$0 = this.l2j();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$0, toString(tmp1));
      }
      return new JsonTreeDecoder(tmp, tmp1, this.u50_1, this.s51_1);
    }
    return protoOf(AbstractJsonTreeDecoder).h24.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).i24 = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.l4u())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.l22();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.l4u());
    var tmp_1;
    if (strategy == null && !this.v50_1.a4u_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.l4u(), descriptor).n2();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.l4u()).w4z(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n2();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.b1().n2().p();
    while (_iterator__ex2g4s.q()) {
      var key = _iterator__ex2g4s.r();
      if (!names.w(key) && !(key === this.u50_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.l2j() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.b1().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.b52_1 = value;
    this.c52_1 = this.b52_1.s();
    this.d52_1 = -1;
  }
  protoOf(JsonTreeListDecoder).b1 = function () {
    return this.b52_1;
  };
  protoOf(JsonTreeListDecoder).k2i = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).y50 = function (tag) {
    return this.b52_1.u(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).y24 = function (descriptor) {
    while (this.d52_1 < (this.c52_1 - 1 | 0)) {
      this.d52_1 = this.d52_1 + 1 | 0;
      return this.d52_1;
    }
    return -1;
  };
  function JsonPrimitiveDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.k52_1 = value;
    this.f2j('primitive');
  }
  protoOf(JsonPrimitiveDecoder).b1 = function () {
    return this.k52_1;
  };
  protoOf(JsonPrimitiveDecoder).y24 = function (descriptor) {
    return 0;
  };
  protoOf(JsonPrimitiveDecoder).y50 = function (tag) {
    // Inline function 'kotlin.require' call
    if (!(tag === 'primitive')) {
      var message = "This input can only handle primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.k52_1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.v52_1 = value;
    this.w52_1 = toList(this.v52_1.n2());
    this.x52_1 = imul(this.w52_1.s(), 2);
    this.y52_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).b1 = function () {
    return this.v52_1;
  };
  protoOf(JsonTreeMapDecoder).k2i = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.w52_1.u(i);
  };
  protoOf(JsonTreeMapDecoder).y24 = function (descriptor) {
    while (this.y52_1 < (this.x52_1 - 1 | 0)) {
      this.y52_1 = this.y52_1 + 1 | 0;
      return this.y52_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).y50 = function (tag) {
    return (this.y52_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.v52_1, tag);
  };
  protoOf(JsonTreeMapDecoder).i24 = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.u20())).g24(deserializer);
  }
  function writeJson(json, value, serializer) {
    var result = {_v: null};
    var encoder = new JsonTreeEncoder(json, writeJson$lambda(result));
    encoder.z25(serializer, value);
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
    tmp.l53_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(JsonTreeEncoder).m53 = function (key, element) {
    // Inline function 'kotlin.collections.set' call
    this.l53_1.p2(key, element);
  };
  protoOf(JsonTreeEncoder).a26 = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.c53_1.u4t_1) {
      protoOf(AbstractJsonTreeEncoder).a26.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(JsonTreeEncoder).n53 = function () {
    return new JsonObject(this.l53_1);
  };
  function inlineUnsignedNumberEncoder($this, tag) {
    return new AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1($this, tag);
  }
  function inlineUnquotedLiteralEncoder($this, tag, inlineDescriptor) {
    return new AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1($this, tag, inlineDescriptor);
  }
  function AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1(this$0, $tag) {
    this.c54_1 = this$0;
    this.d54_1 = $tag;
    AbstractEncoder.call(this);
    this.b54_1 = this$0.a53_1.w24();
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).w24 = function () {
    return this.b54_1;
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).e54 = function (s) {
    return this.c54_1.m53(this.d54_1, new JsonLiteral(s, false));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).g25 = function (value) {
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.e54(UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).h25 = function (value) {
    // Inline function 'kotlin.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.e54(ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).e25 = function (value) {
    // Inline function 'kotlin.toUByte' call
    var tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.e54(UByte__toString_impl_v72jg(tmp$ret$0));
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnsignedNumberEncoder$1).f25 = function (value) {
    // Inline function 'kotlin.toUShort' call
    var tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.e54(UShort__toString_impl_edaoee(tmp$ret$0));
  };
  function AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1(this$0, $tag, $inlineDescriptor) {
    this.f54_1 = this$0;
    this.g54_1 = $tag;
    this.h54_1 = $inlineDescriptor;
    AbstractEncoder.call(this);
  }
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).w24 = function () {
    return this.f54_1.a53_1.w24();
  };
  protoOf(AbstractJsonTreeEncoder$inlineUnquotedLiteralEncoder$1).l25 = function (value) {
    return this.f54_1.m53(this.g54_1, new JsonLiteral(value, false, this.h54_1));
  };
  function AbstractJsonTreeEncoder$beginStructure$lambda(this$0) {
    return function (node) {
      this$0.m53(this$0.e2j(), node);
      return Unit_instance;
    };
  }
  function AbstractJsonTreeEncoder(json, nodeConsumer) {
    NamedValueEncoder.call(this);
    this.a53_1 = json;
    this.b53_1 = nodeConsumer;
    this.c53_1 = this.a53_1.c4s_1;
    this.d53_1 = null;
    this.e53_1 = null;
  }
  protoOf(AbstractJsonTreeEncoder).l4u = function () {
    return this.a53_1;
  };
  protoOf(AbstractJsonTreeEncoder).w24 = function () {
    return this.a53_1.w24();
  };
  protoOf(AbstractJsonTreeEncoder).k2i = function (descriptor, index) {
    return getJsonElementName(descriptor, this.a53_1, index);
  };
  protoOf(AbstractJsonTreeEncoder).e26 = function (descriptor, index) {
    return this.c53_1.p4t_1;
  };
  protoOf(AbstractJsonTreeEncoder).o2i = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeEncoder).c26 = function () {
  };
  protoOf(AbstractJsonTreeEncoder).c25 = function () {
    var tmp0_elvis_lhs = this.n2i();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return this.b53_1(JsonNull_getInstance());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var tag = tmp;
    this.o53(tag);
  };
  protoOf(AbstractJsonTreeEncoder).o53 = function (tag) {
    return this.m53(tag, JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeEncoder).r2i = function (tag) {
    return this.o53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeEncoder).p53 = function (tag, value) {
    return this.m53(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).s2i = function (tag, value) {
    return this.p53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).q53 = function (tag, value) {
    return this.m53(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).t2i = function (tag, value) {
    return this.q53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).r53 = function (tag, value) {
    return this.m53(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).u2i = function (tag, value) {
    return this.r53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).s53 = function (tag, value) {
    return this.m53(tag, JsonPrimitive_1(value));
  };
  protoOf(AbstractJsonTreeEncoder).v2i = function (tag, value) {
    return this.s53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).t53 = function (tag, value) {
    this.m53(tag, JsonPrimitive_1(value));
    if (!this.c53_1.z4t_1 && !isFinite(value)) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.n53()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).w2i = function (tag, value) {
    return this.t53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).z25 = function (serializer, value) {
    if (!(this.n2i() == null) || !get_requiresTopLevelTag(carrierDescriptor(serializer.u20(), this.w24()))) {
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
        if (this.l4u().c4s_1.x4t_1) {
          serializer.v20(this, value);
          break $l$block;
        }
        var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
        var tmp;
        if (isPolymorphicSerializer) {
          tmp = !this.l4u().c4s_1.f4u_1.equals(ClassDiscriminatorMode_NONE_getInstance());
        } else {
          var tmp_0;
          switch (this.l4u().c4s_1.f4u_1.t2_1) {
            case 0:
            case 2:
              tmp_0 = false;
              break;
            case 1:
              // Inline function 'kotlin.let' call

              var it = serializer.u20().l22();
              tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_0;
        }
        var needDiscriminator = tmp;
        var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.u20(), this.l4u()) : null;
        var tmp_1;
        if (isPolymorphicSerializer) {
          var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
          $l$block_0: {
            // Inline function 'kotlin.requireNotNull' call
            if (value == null) {
              var message = 'Value for serializer ' + toString(serializer.u20()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
              throw IllegalArgumentException_init_$Create$(toString(message));
            } else {
              break $l$block_0;
            }
          }
          var actual = findPolymorphicSerializer_0(casted, this, value);
          if (!(baseClassDiscriminator == null)) {
            access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
            checkKind_0(actual.u20().l22());
          }
          tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
        } else {
          tmp_1 = serializer;
        }
        var actualSerializer = tmp_1;
        if (!(baseClassDiscriminator == null)) {
          var serialName = actualSerializer.u20().v21();
          this.d53_1 = baseClassDiscriminator;
          this.e53_1 = serialName;
        }
        actualSerializer.v20(this, value);
      }
    } else {
      // Inline function 'kotlin.apply' call
      (new JsonPrimitiveEncoder(this.a53_1, this.b53_1)).z25(serializer, value);
    }
  };
  protoOf(AbstractJsonTreeEncoder).u53 = function (tag, value) {
    this.m53(tag, JsonPrimitive_1(value));
    if (!this.c53_1.z4t_1 && !isFinite_0(value)) {
      throw InvalidFloatingPointEncoded(value, tag, toString(this.n53()));
    }
  };
  protoOf(AbstractJsonTreeEncoder).x2i = function (tag, value) {
    return this.u53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).v53 = function (tag, value) {
    return this.m53(tag, JsonPrimitive_2(value));
  };
  protoOf(AbstractJsonTreeEncoder).y2i = function (tag, value) {
    return this.v53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).w53 = function (tag, value) {
    return this.m53(tag, JsonPrimitive_0(toString_1(value)));
  };
  protoOf(AbstractJsonTreeEncoder).z2i = function (tag, value) {
    return this.w53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).x53 = function (tag, value) {
    return this.m53(tag, JsonPrimitive_0(value));
  };
  protoOf(AbstractJsonTreeEncoder).a2j = function (tag, value) {
    return this.x53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).y53 = function (tag, enumDescriptor, ordinal) {
    return this.m53(tag, JsonPrimitive_0(enumDescriptor.p22(ordinal)));
  };
  protoOf(AbstractJsonTreeEncoder).b2j = function (tag, enumDescriptor, ordinal) {
    return this.y53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), enumDescriptor, ordinal);
  };
  protoOf(AbstractJsonTreeEncoder).z53 = function (tag, value) {
    this.m53(tag, JsonPrimitive_0(toString(value)));
  };
  protoOf(AbstractJsonTreeEncoder).p2i = function (tag, value) {
    return this.z53((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), value);
  };
  protoOf(AbstractJsonTreeEncoder).a54 = function (tag, inlineDescriptor) {
    return get_isUnsignedNumber(inlineDescriptor) ? inlineUnsignedNumberEncoder(this, tag) : get_isUnquotedLiteral(inlineDescriptor) ? inlineUnquotedLiteralEncoder(this, tag, inlineDescriptor) : protoOf(NamedValueEncoder).c2j.call(this, tag, inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).c2j = function (tag, inlineDescriptor) {
    return this.a54((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE(), inlineDescriptor);
  };
  protoOf(AbstractJsonTreeEncoder).n25 = function (descriptor) {
    var tmp;
    if (!(this.n2i() == null)) {
      if (!(this.d53_1 == null))
        this.e53_1 = descriptor.v21();
      tmp = protoOf(NamedValueEncoder).n25.call(this, descriptor);
    } else {
      tmp = (new JsonPrimitiveEncoder(this.a53_1, this.b53_1)).n25(descriptor);
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeEncoder).h24 = function (descriptor) {
    var tmp;
    if (this.n2i() == null) {
      tmp = this.b53_1;
    } else {
      tmp = AbstractJsonTreeEncoder$beginStructure$lambda(this);
    }
    var consumer = tmp;
    var tmp0_subject = descriptor.l22();
    var tmp_0;
    var tmp_1;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_1) {
      tmp_0 = new JsonTreeListEncoder(this.a53_1, consumer);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.a53_1;
        var keyDescriptor = carrierDescriptor(descriptor.s22(0), this_0.w24());
        var keyKind = keyDescriptor.l22();
        var tmp_2;
        var tmp_3;
        if (keyKind instanceof PrimitiveKind) {
          tmp_3 = true;
        } else {
          tmp_3 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_3) {
          tmp_2 = new JsonTreeMapEncoder(this.a53_1, consumer);
        } else {
          if (this_0.c4s_1.s4t_1) {
            tmp_2 = new JsonTreeListEncoder(this.a53_1, consumer);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp_0 = tmp_2;
      } else {
        tmp_0 = new JsonTreeEncoder(this.a53_1, consumer);
      }
    }
    var encoder = tmp_0;
    var discriminator = this.d53_1;
    if (!(discriminator == null)) {
      if (encoder instanceof JsonTreeMapEncoder) {
        encoder.m53('key', JsonPrimitive_0(discriminator));
        var tmp1_elvis_lhs = this.e53_1;
        encoder.m53('value', JsonPrimitive_0(tmp1_elvis_lhs == null ? descriptor.v21() : tmp1_elvis_lhs));
      } else {
        var tmp2_elvis_lhs = this.e53_1;
        encoder.m53(discriminator, JsonPrimitive_0(tmp2_elvis_lhs == null ? descriptor.v21() : tmp2_elvis_lhs));
      }
      this.d53_1 = null;
      this.e53_1 = null;
    }
    return encoder;
  };
  protoOf(AbstractJsonTreeEncoder).d2j = function (descriptor) {
    this.b53_1(this.n53());
  };
  function get_requiresTopLevelTag(_this__u8e3s4) {
    var tmp;
    var tmp_0 = _this__u8e3s4.l22();
    if (tmp_0 instanceof PrimitiveKind) {
      tmp = true;
    } else {
      tmp = _this__u8e3s4.l22() === ENUM_getInstance();
    }
    return tmp;
  }
  function JsonPrimitiveEncoder(json, nodeConsumer) {
    AbstractJsonTreeEncoder.call(this, json, nodeConsumer);
    this.x54_1 = null;
    this.f2j('primitive');
  }
  protoOf(JsonPrimitiveEncoder).m53 = function (key, element) {
    // Inline function 'kotlin.require' call
    if (!(key === 'primitive')) {
      var message = "This output can only consume primitives with 'primitive' tag";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.x54_1 == null)) {
      var message_0 = 'Primitive element was already recorded. Does call to .encodeXxx happen more than once?';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    this.x54_1 = element;
    this.b53_1(element);
  };
  protoOf(JsonPrimitiveEncoder).n53 = function () {
    var tmp0 = this.x54_1;
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
    tmp.e55_1 = ArrayList_init_$Create$();
  }
  protoOf(JsonTreeListEncoder).k2i = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListEncoder).m53 = function (key, element) {
    var idx = toInt(key);
    this.e55_1.i2(idx, element);
  };
  protoOf(JsonTreeListEncoder).n53 = function () {
    return new JsonArray(this.e55_1);
  };
  function _get_tag__e6h4qf($this) {
    var tmp = $this.p54_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('tag');
    }
  }
  function JsonTreeMapEncoder(json, nodeConsumer) {
    JsonTreeEncoder.call(this, json, nodeConsumer);
    this.q54_1 = true;
  }
  protoOf(JsonTreeMapEncoder).m53 = function (key, element) {
    if (this.q54_1) {
      var tmp = this;
      var tmp_0;
      if (element instanceof JsonPrimitive) {
        tmp_0 = element.q4u();
      } else {
        if (element instanceof JsonObject) {
          throw InvalidKeyKindException(JsonObjectSerializer_getInstance().h4v_1);
        } else {
          if (element instanceof JsonArray) {
            throw InvalidKeyKindException(JsonArraySerializer_getInstance().m4v_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
      tmp.p54_1 = tmp_0;
      this.q54_1 = false;
    } else {
      var tmp0 = this.l53_1;
      // Inline function 'kotlin.collections.set' call
      var key_0 = _get_tag__e6h4qf(this);
      tmp0.p2(key_0, element);
      this.q54_1 = true;
    }
  };
  protoOf(JsonTreeMapEncoder).n53 = function () {
    return new JsonObject(this.l53_1);
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
    this.j50_1 = begin;
    this.k50_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.l22();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.s22(0), _this__u8e3s4.w24());
          var keyKind = keyDescriptor.l22();
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
            if (_this__u8e3s4.c4s_1.s4t_1) {
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
    if (equals(_this__u8e3s4.l22(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.m22()) {
      tmp = carrierDescriptor(_this__u8e3s4.s22(0), module_0);
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
    $this.f55(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.f55(lastPosition, currentPosition);
    var result = $this.u4s_1.toString();
    $this.u4s_1.de(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.t4s_1);
    $this.t4s_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.g55(), $this.r4s_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.h55(currentPosition);
    if (currentPosition === -1) {
      $this.g4x('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.g55();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.g55(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.g4x("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.u4s_1.z8(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.r4s_1 = startPos;
      $this.i55();
      if (($this.r4s_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.g4x('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.r4s_1);
    }
    $this.u4s_1.z8(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.g4x("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.h55(start);
    if (current >= charSequenceLength($this.g55()) || current === -1) {
      $this.g4x('EOF');
    }
    var tmp = $this.g55();
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
        $this.g4x("Expected valid boolean literal prefix, but had '" + $this.o4y() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.g55()) - current | 0) < literalSuffix.length) {
      $this.g4x('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charSequenceGet(literalSuffix, i);
        var actual = charSequenceGet($this.g55(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.g4x("Expected valid boolean literal prefix, but had '" + $this.o4y() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.r4s_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -exponentAccumulator.t3();
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = exponentAccumulator.t3();
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.r4s_1 = 0;
    this.s4s_1 = new JsonPath();
    this.t4s_1 = null;
    this.u4s_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).i55 = function () {
  };
  protoOf(AbstractJsonLexer).z4z = function () {
    var current = this.j55();
    var source = this.g55();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.r4s_1 = this.r4s_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).k55 = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).v4s = function () {
    var nextToken = this.q4y();
    if (!(nextToken === 10)) {
      this.g4x('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.g55(), this.r4s_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).k4y = function (expected) {
    var token = this.q4y();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.r4s_1 - 1 | 0 : this.r4s_1;
      var s = this.r4s_1 === charSequenceLength(this.g55()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.g55(), position));
      var tmp$ret$0 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.g4x(tmp$ret$0, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).l55 = function (expected) {
    if (this.r4s_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.r4s_1;
        try {
          this.r4s_1 = this.r4s_1 - 1 | 0;
          tmp$ret$1 = this.o4y();
          break $l$block;
        }finally {
          this.r4s_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$1;
      if (inputLiteral === 'null') {
        this.f4x("Expected string literal but 'null' literal was found", this.r4s_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.r4s_1 - 1 | 0 : this.r4s_1;
    var s = this.r4s_1 === charSequenceLength(this.g55()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.g55(), position));
    var tmp$ret$2 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.g4x(tmp$ret$2, position);
  };
  protoOf(AbstractJsonLexer).l4y = function () {
    var source = this.g55();
    var cpos = this.r4s_1;
    $l$loop_0: while (true) {
      cpos = this.h55(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.r4s_1 = cpos;
      return charToTokenClass(ch);
    }
    this.r4s_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).a50 = function (doConsume) {
    var current = this.j55();
    current = this.h55(current);
    var len = charSequenceLength(this.g55()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charSequenceGet('null', i) === charSequenceGet(this.g55(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.g55(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.r4s_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).l50 = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.a50(doConsume) : $super.a50.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).b50 = function (isLenient) {
    var token = this.l4y();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.o4y();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.n4y();
    }
    var string = tmp;
    this.t4s_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).m55 = function () {
    this.t4s_1 = null;
  };
  protoOf(AbstractJsonLexer).g1j = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.g55();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).n4y = function () {
    if (!(this.t4s_1 == null)) {
      return takePeeked(this);
    }
    return this.e50();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.h55(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.g4x('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.f55(lastPosition, currentPosition);
          currentPosition = this.h55(currentPosition);
          if (currentPosition === -1) {
            this.g4x('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.g1j(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.r4s_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).f50 = function () {
    var result = this.o4y();
    if (result === 'null' && wasUnquotedString(this)) {
      this.g4x("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).o4y = function () {
    if (!(this.t4s_1 == null)) {
      return takePeeked(this);
    }
    var current = this.j55();
    if (current >= charSequenceLength(this.g55()) || current === -1) {
      this.g4x('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.g55(), current));
    if (token === 1) {
      return this.n4y();
    }
    if (!(token === 0)) {
      this.g4x('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.g55(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.g55(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.g55())) {
        usedAppend = true;
        this.f55(this.r4s_1, current);
        var eof = this.h55(current);
        if (eof === -1) {
          this.r4s_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.g1j(this.r4s_1, current);
    } else {
      tmp = decodedString(this, this.r4s_1, current);
    }
    var result = tmp;
    this.r4s_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).f55 = function (fromIndex, toIndex) {
    this.u4s_1.xd(this.g55(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).d50 = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.l4y();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.o4y();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.l4y();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.o4y();
        else
          this.e50();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.n(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.r4s_1, 'found ] instead of } at path: ' + this.s4s_1.toString(), this.g55());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.r4s_1, 'found } instead of ] at path: ' + this.s4s_1.toString(), this.g55());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.g4x('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.q4y();
      if (tokenStack.s() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.g55()) + "', currentPosition=" + this.r4s_1 + ')';
  };
  protoOf(AbstractJsonLexer).c50 = function (key) {
    var processed = this.g1j(0, this.r4s_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.s4s_1.t4x() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.g55(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).f4x = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.s4s_1.t4x() + hintMessage, this.g55());
  };
  protoOf(AbstractJsonLexer).g4x = function (message, position, hint, $super) {
    position = position === VOID ? this.r4s_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.f4x(message, position, hint) : $super.f4x.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).n50 = function () {
    var current = this.j55();
    current = this.h55(current);
    if (current >= charSequenceLength(this.g55()) || current === -1) {
      this.g4x('EOF');
    }
    var tmp;
    if (charSequenceGet(this.g55(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.g55())) {
        this.g4x('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.g55()))) {
      var ch = charSequenceGet(this.g55(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.g4x('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.g4x("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.g4x("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.g4x("Unexpected symbol '-' in numeric literal");
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
        this.g4x("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        // Inline function 'kotlin.Long.plus' call
        exponentAccumulator = exponentAccumulator.d3(toLong(10)).b3(toLong(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.Long.minus' call
      accumulator = accumulator.d3(toLong(10)).c3(toLong(digit));
      if (accumulator.g1(new Long(0, 0)) > 0) {
        this.g4x('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.g4x('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.g4x('EOF');
      }
      if (!(charSequenceGet(this.g55(), current) === _Char___init__impl__6a9atx(34))) {
        this.g4x('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.r4s_1 = current;
    if (hasExponent) {
      var doubleAccumulator = accumulator.t3() * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > (new Long(-1, 2147483647)).t3() || doubleAccumulator < (new Long(0, -2147483648)).t3()) {
        this.g4x('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.g4x("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!accumulator.equals(new Long(0, -2147483648))) {
      tmp_0 = accumulator.i3();
    } else {
      this.g4x('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).a4v = function () {
    var result = this.n50();
    var next = this.q4y();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.r4s_1 - 1 | 0 : this.r4s_1;
      var s = this.r4s_1 === charSequenceLength(this.g55()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.g55(), position));
      var tmp$ret$0 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.g4x(tmp$ret$0, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).m50 = function () {
    var current = this.j55();
    if (current === charSequenceLength(this.g55())) {
      this.g4x('EOF');
    }
    var tmp;
    if (charSequenceGet(this.g55(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.r4s_1 === charSequenceLength(this.g55())) {
        this.g4x('EOF');
      }
      if (!(charSequenceGet(this.g55(), this.r4s_1) === _Char___init__impl__6a9atx(34))) {
        this.g4x('Expected closing quotation mark');
      }
      this.r4s_1 = this.r4s_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().o55_1;
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
    return c < 117 ? CharMappings_getInstance().n55_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.n55_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.o55_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.n55_1 = charArray(117);
    this.o55_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).q4y = function () {
    var source = this.g55();
    var cpos = this.j55();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.r4s_1 = cpos + 1 | 0;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).m4y = function () {
    var current = this.j55();
    if (current >= this.g55().length || current === -1)
      return false;
    return this.k55(charSequenceGet(this.g55(), current));
  };
  protoOf(StringJsonLexerWithComments).y4z = function (expected) {
    var source = this.g55();
    var current = this.j55();
    if (current >= source.length || current === -1) {
      this.r4s_1 = -1;
      this.l55(expected);
    }
    var c = charSequenceGet(source, current);
    this.r4s_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.l55(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).l4y = function () {
    var source = this.g55();
    var cpos = this.j55();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.r4s_1 = cpos;
    return charToTokenClass(charSequenceGet(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).j55 = function () {
    var current = this.r4s_1;
    if (current === -1)
      return current;
    var source = this.g55();
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
            this.r4s_1 = source.length;
            this.g4x('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.r4s_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.y55_1 = source;
  }
  protoOf(StringJsonLexer).g55 = function () {
    return this.y55_1;
  };
  protoOf(StringJsonLexer).h55 = function (position) {
    return position < this.g55().length ? position : -1;
  };
  protoOf(StringJsonLexer).q4y = function () {
    var source = this.g55();
    var cpos = this.r4s_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.r4s_1 = cpos;
      return charToTokenClass(c);
    }
    this.r4s_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).m4y = function () {
    var current = this.r4s_1;
    if (current === -1)
      return false;
    var source = this.g55();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.r4s_1 = current;
      return this.k55(c);
    }
    this.r4s_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).j55 = function () {
    var current = this.r4s_1;
    if (current === -1)
      return current;
    var source = this.g55();
    $l$loop: while (current < source.length) {
      var c = charSequenceGet(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.r4s_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).y4z = function (expected) {
    if (this.r4s_1 === -1) {
      this.l55(expected);
    }
    var source = this.g55();
    var cpos = this.r4s_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charSequenceGet(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.r4s_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.l55(expected);
    }
    this.r4s_1 = -1;
    this.l55(expected);
  };
  protoOf(StringJsonLexer).e50 = function () {
    this.y4z(_Char___init__impl__6a9atx(34));
    var current = this.r4s_1;
    var closingQuote = indexOf_0(this.g55(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.o4y();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.r4s_1 - 1 | 0 : this.r4s_1;
      var s = this.r4s_1 === charSequenceLength(this.g55()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.g55(), position));
      var tmp$ret$0 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.g4x(tmp$ret$0, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(this.g55(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.g55(), this.r4s_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.r4s_1 = closingQuote + 1 | 0;
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.g55().substring(current, closingQuote);
  };
  protoOf(StringJsonLexer).g50 = function (keyToMatch, isLenient) {
    var positionSnapshot = this.r4s_1;
    try {
      if (!(this.q4y() === 6))
        return null;
      var firstKey = this.b50(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.m55();
      if (!(this.q4y() === 5))
        return null;
      return this.b50(isLenient);
    }finally {
      this.r4s_1 = positionSnapshot;
      this.m55();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.c4s_1.e4u_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.e4s_1;
  }
  function JsonToStringWriter() {
    this.i4s_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).k4w = function (value) {
    this.i4s_1.be(value);
  };
  protoOf(JsonToStringWriter).e4w = function (char) {
    this.i4s_1.z8(char);
  };
  protoOf(JsonToStringWriter).g4w = function (text) {
    this.i4s_1.y8(text);
  };
  protoOf(JsonToStringWriter).q4w = function (text) {
    printQuoted(this.i4s_1, text);
  };
  protoOf(JsonToStringWriter).i1g = function () {
    this.i4s_1.ee();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.i4s_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(defer$1).h22 = get_isNullable;
  protoOf(defer$1).m22 = get_isInline;
  protoOf(defer$1).o22 = get_annotations;
  protoOf(JsonSerializersModuleValidator).j2m = contextual;
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
  _.$_$.w = get_booleanOrNull;
  _.$_$.x = get_contentOrNull;
  _.$_$.y = get_doubleOrNull;
  _.$_$.z = get_int;
  _.$_$.a1 = get_jsonArray;
  _.$_$.b1 = get_jsonObject;
  _.$_$.c1 = get_jsonPrimitive;
  _.$_$.d1 = get_long;
  _.$_$.e1 = get_longOrNull;
  _.$_$.f1 = put_1;
  _.$_$.g1 = put;
  _.$_$.h1 = put_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
